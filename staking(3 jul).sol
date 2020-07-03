pragma solidity ^0.4.24;

 /**
 * Token Smart contract for RYZ token 
 * Token Name: RYZ
 * Token Symbol: RYZ
 * Initial Supply : 1000000000000
 * Standard: ERC20
 */

 /**
 * @title SafeMath
 * @dev   Unsigned math operations with safety checks that revert on error
 */
library SafeMath {
    /**
    * @dev Multiplies two unsigned integers, reverts on overflow.
    */
    function mul(uint256 a, uint256 b) internal pure returns (uint256){
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        require(c / a == b,"Calculation error");
        return c;
    }

    /**
    * @dev Integer division of two unsigned integers truncating the quotient, reverts on division by zero.
    */
    function div(uint256 a, uint256 b) internal pure returns (uint256){
        // Solidity only automatically asserts when dividing by 0
        require(b > 0,"Calculation error");
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
        return c;
    }

    /**
    * @dev Subtracts two unsigned integers, reverts on overflow (i.e. if subtrahend is greater than minuend).
    */
    function sub(uint256 a, uint256 b) internal pure returns (uint256){
        require(b <= a,"Calculation error");
        uint256 c = a - b;
        return c;
    }

    /**
    * @dev Adds two unsigned integers, reverts on overflow.
    */
    function add(uint256 a, uint256 b) internal pure returns (uint256){
        uint256 c = a + b;
        require(c >= a,"Calculation error");
        return c;
    }

    /**
    * @dev Divides two unsigned integers and returns the remainder (unsigned integer modulo),
    * reverts when dividing by zero.
    */
    function mod(uint256 a, uint256 b) internal pure returns (uint256){
        require(b != 0,"Calculation error");
        return a % b;
    }
}

 /**
 * @title ERC20 interface
 * @dev see https://eips.ethereum.org/EIPS/eip-20
 */

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function approve(address spender, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function totalSupply() external view returns (uint256);
    function balanceOf(address who) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

 /**
 * @title RYZ Contract For ERC20 Tokens
 * @dev RYZ tokens as per ERC20 Standards
 */
 contract RYZ is IERC20 {

    using SafeMath for uint256;

    address private _owner;
    string  private _name;
    string  private _symbol;
    uint8   private _decimals;
    uint256 private _totalSupply;
    bool    public  _lockStatus = false;
    address private _tokenPoolAddress;              // Address from where Staked Tokens will be placed.
    address private _purchaseableTokensAddress;     // Address From where Toekns will be placed.
    uint256 private _purchaseableTokens;
    uint256 private _tokenPriceTRX;
    
    mapping (address => uint256) private _balances;

    mapping (address => mapping (address => uint256)) private _allowed;

    constructor (string memory name, string memory symbol, uint8 decimals, uint256 totalSupply, address owner, address tokenPoolAddress) public {
        _name = name;
        _symbol = symbol;
        _decimals = decimals;
        _totalSupply = totalSupply*(10**uint256(decimals));
        _balances[owner] = _totalSupply;
        _owner = owner;
        _tokenPoolAddress = tokenPoolAddress;
    }
 
     /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------
     * Functions for owner
     * ----------------------------------------------------------------------------------------------------------------------------------------------
     */

    /**
    * @dev get address of smart contract owner
    * @return address of owner
    */
    function getowner() public view returns (address) {
      return _owner;
    }

    /**
    * @dev modifier to check if the message sender is owner
    */
    modifier onlyOwner() {
        require(isOwner(),"You are not authenticate to make this transfer");
        _;
    }

    /**
     * @dev Internal function for modifier
    */
    function isOwner() internal view returns (bool) {
      return msg.sender == _owner;
    }

    /**
     * @dev Transfer ownership of the smart contract. For owner only
     * @return request status
    */
    function transferOwnership(address newOwner) public onlyOwner returns (bool){
      _owner = newOwner;
      return true;
    }
    
    
     /*
     * ----------------------------------------------------------------------------------------------------------------------------------------------
     * View only functions
     * ----------------------------------------------------------------------------------------------------------------------------------------------
     */
     

    /**
     * @return the name of the token.
     */
    function name() public view returns (string memory) {
      return _name;
    }

    /**
     * @return the symbol of the token.
     */
    function symbol() public view returns (string memory) {
      return _symbol;
    }

    /**
     * @return the number of decimals of the token.
     */
    function decimals() public view returns (uint8) {
      return _decimals;
    }

    /**
     * @dev Total number of tokens in existence.
     */
    function totalSupply() public view returns (uint256) {
      return _totalSupply;
    }

    /**
     * @dev Gets the balance of the specified address.
     * @param owner The address to query the balance of.
     * @return A uint256 representing the amount owned by the passed address.
     */
    function balanceOf(address owner) public view returns (uint256) {
      return _balances[owner];
    }

    /**
     * @dev Function to check the amount of tokens that an owner allowed to a spender.
     * @param owner address The address which owns the funds.
     * @param spender address The address which will spend the funds.
     * @return A uint256 specifying the amount of tokens still available for the spender.
     */
    function allowance(address owner, address spender) public view returns (uint256) {
      return _allowed[owner][spender];
    }

   /*
   * ----------------------------------------------------------------------------------------------------------------------------------------------
   * Transfer, allow, mint and burn functions
   * ----------------------------------------------------------------------------------------------------------------------------------------------
   */

    /**
     * @dev Transfer token to a specified address.
     * @param to The address to transfer to.
     * @param value The amount to be transferred.
     */
    function transfer(address to, uint256 value) public returns (bool) {
      _transfer(msg.sender, to, value);
      return true;
    }

    /**
     * @dev Transfer tokens from one address to another.
     * @param from address The address which you want to send tokens from
     * @param to address The address which you want to transfer to
     * @param value uint256 the amount of tokens to be transferred
     */
    function transferFrom(address from, address to, uint256 value) public returns (bool) {
      _transfer(from, to, value);
      _approve(from, msg.sender, _allowed[from][msg.sender].sub(value));
      return true;
    }

    /**
     * @dev Transfer token for a specified addresses.
     * @param from The address to transfer from.
     * @param to The address to transfer to.
     * @param value The amount to be transferred.
     */
    function _transfer(address from, address to, uint256 value) internal {
      //require(from != address(0),"Invalid from Address");
      require(to != address(0),"Invalid to Address");
      require(value > 0, "Invalid Amount");
      _balances[from] = _balances[from].sub(value);
      _balances[to] = _balances[to].add(value);
      emit Transfer(from, to, value);
    }

    /**
     * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
     * @param spender The address which will spend the funds.
     * @param value The amount of tokens to be spent.
     */
    function approve(address spender, uint256 value) public returns (bool) {
      _approve(msg.sender, spender, value);
      return true;
    }

    /**
     * @dev Approve an address to spend another addresses' tokens.
     * @param owner The address that owns the tokens.
     * @param spender The address that will spend the tokens.
     * @param value The number of tokens that can be spent.
     */
    function _approve(address owner, address spender, uint256 value) internal {
      require(spender != address(0),"Invalid address");
      require(owner != address(0),"Invalid address");
      require(value > 0, "Invalid Amount");
      _allowed[owner][spender] = value;
      emit Approval(owner, spender, value);
    }

    /**
     * @dev Increase the amount of tokens that an owner allowed to a spender.
     * @param spender The address which will spend the funds.
     * @param addedValue The amount of tokens to increase the allowance by.
     */
    function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
      _approve(msg.sender, spender, _allowed[msg.sender][spender].add(addedValue));
      return true;
    }

    /**
     * @dev Decrease the amount of tokens that an owner allowed to a spender.
     * @param spender The address which will spend the funds.
     * @param subtractedValue The amount of tokens to decrease the allowance by.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
      _approve(msg.sender, spender, _allowed[msg.sender][spender].sub(subtractedValue));
      return true;
    }

    /**
     * @dev Internal function that burns an amount of the token of a given account.
     * @param account The account whose tokens will be burnt.
     * @param value The amount that will be burnt.
     */
    function _burn(address account, uint256 value) internal {
      require(account != address(0),"Invalid account");
      require(value > 0, "Invalid Amount");
      _totalSupply = _totalSupply.sub(value);
      _balances[account] = _balances[account].sub(value);
      emit Transfer(account, address(0), value);
    }

    /**
     * @dev Burns a specific amount of tokens.
     * @param value The amount of token to be burned.
     */
    function burn(uint256 value) public onlyOwner {
      _burn(msg.sender, value);
    }

    /**
     * Function to mint tokens
     * @param value The amount of tokens to mint.
     */
    function mint(uint256 value) public onlyOwner returns(bool){
      require(value > 0,"The amount should be greater than 0");
      _balances[msg.sender] = _balances[msg.sender].add(value);
      _totalSupply = _totalSupply.add(value);
      emit Transfer(address(0), msg.sender, value);
      return true;
    }

    /**
    * Function to set Purchaseable tokens for users
    * Owner have to send the tokens for available buying
    */
    function addForPurchase(uint256 amount) external onlyOwner returns (bool){
     _transfer (msg.sender, _purchaseableTokensAddress, amount);
     _purchaseableTokens = _purchaseableTokens + amount;
     return(true);
    }
    
    // funtion to get _purchaseableTokens 
    function getpurchaseableTokens() public view returns(uint256) {
        return _purchaseableTokens;
    }

    // function to Set the price of each token for TRX purchase
    function setPriceToken(uint256 tokenPriceTRX) external onlyOwner returns (bool){
     require(tokenPriceTRX >0,"Invalid Amount");
     _tokenPriceTRX = tokenPriceTRX;
     return(true);
    }
    
    // function to get price of each token for TRX purchase
    function getPriceToken() public view returns(uint256) {
      return _tokenPriceTRX;
    }
    
    
  /*
  * ----------------------------------------------------------------------------------------------------------------------------------------------
  * Staking logic, mapping and functions
  * ----------------------------------------------------------------------------------------------------------------------------------------------
  */


  // Mappinng for users with id => address Stake Address
  mapping (uint256 => address) private _stakerAddress;

  // Mappinng for users with id => address Tokens 
  mapping (uint256 => uint256) private _usersTokens;
  
  // Mappinng for users with id => address Staking Time
  mapping (uint256 => uint256) private _stakingStartTime;

  // Mappinng for users with id => address End Time
  mapping (uint256 => uint256) private _stakingEndTime;

  // Mappinng for users with id => address End Time
  mapping (uint256 => bool) private _TokenTransactionstatus;

  // Reward Percentage
  uint256 private _rewardPercentage;

  // Penalty Percentage
  uint256 private _penaltyPercentage;
  
  // Withdraw Penalty
  uint256 private _withdrawTimeElapsePenalty;

  // penalty amount after staking time
  uint256 private _penaltyAmountAfterStakingTime;
  
  //Referral Percentage
  uint256 private _referralPercentage;
  
  // varaiable for referral amount
  uint256 _referralAmount = 0;

  // variable to show rewards
  uint256 private _rewards;

  uint256 amount = 0;
  
  // variable to keep count of no of staking
  uint256 stakingCount = 0;
  
  // modifier to check the user for staking || Re-enterance Guard
  modifier validatorForStaking(uint256 tokens, uint256 time){
    require( time > now && tokens > 0, "Invalid time and Amount");
    _;
  }
  
  // modifier to check for the payable amount for purchasing the tokens
  modifier payableCheck(){
    require(msg.value > 0 && _purchaseableTokens > 0, "Can not buy tokens, either amount is less or no tokens for sale");
    _;
  }


  /*
  * ----------------------------------------------------------------------------------------------------------------------------------------------
  * Owner function for staking contract
  * ----------------------------------------------------------------------------------------------------------------------------------------------
  */


  // function to set Token Pool address
  function setTokenPoolAddress(address add) public onlyOwner returns(bool){
    require(add != address(0),"Invalid Address");
    _tokenPoolAddress = add;
    return true;
  }
  
  // Function to get Token Pool address
  function getTokenpoolAddress() public view returns(address){
    return _tokenPoolAddress;
  }

  // funtion to set _purchaseableTokensAddress
  function setpurchaseableTokensAddress(address add) public onlyOwner returns(bool){
    require(add != address(0),"Invalid Address");
    _purchaseableTokensAddress = add;
    return true;
  }

  // function to get _purchaseableTokensAddress
  function getpurchaseableTokensAddress() public view returns(address){
    return _purchaseableTokensAddress;
  }

  // function for setting rewards percentage by owner
  function setRewardPercentage(uint256 rewardsPercentage) public onlyOwner returns(bool){
    require(rewardsPercentage > 0, "Invalid Percentage");
     _rewardPercentage = rewardsPercentage;
     return true;
  }

  // function for getting rewards percentage by owner
  function getRewardPercentage() public view returns(uint256){
     return _rewardPercentage;
  }

  // function for setting penalty percentage percentage by owner
  function setPenaltyPercentage(uint256 penaltyPercentage) public onlyOwner returns(bool){
    require(penaltyPercentage > 0, "Invalid Percentage");
     _penaltyPercentage = penaltyPercentage;
     return true;
  }

  // function for getting penalty percentage by owner
  function getPenaltyPercentage() public view returns(uint256){
     return _penaltyPercentage;
  }

  // function for setting withdraw penalty percentage percentage by owner
  function setWithdrawPenaltyPercentage(uint256 withdrawPenalty) public onlyOwner returns(bool){
    require(withdrawPenalty > 0, "Invalid Percentage");
     _withdrawTimeElapsePenalty = withdrawPenalty;
     return true;
  }
 
  // function for getting withdraw penalty percentage by owner
  function getWithdrawPenaltyPercentage() public view returns(uint256){
     return _withdrawTimeElapsePenalty;
  }

  //function to set Referral percentage
  function setReferralPercentage(uint256 referralPercentage) public onlyOwner returns(bool){
      require(referralPercentage > 0, "Invalid Percentage");
      _referralPercentage = referralPercentage;
      return true;
  } 
  
  // function to get Referral percentage
  function getReferralPercentage() public view returns(uint256){
     return _referralPercentage;
  }
  
  //function to set Referral amount
  function setReferralAmount(uint256 referralAmount) public onlyOwner returns(bool){
     require(referralAmount > 0, "Invalid Amount");
     _referralAmount = referralAmount;
     return true;
  } 
  
  // function to get Referral amount
  function getReferralAmount() public view returns(uint256){
    return _referralAmount;
  }
  
  // function to withdraw Funds by owner only
  function withdrawTRX() external onlyOwner returns(bool){
    msg.sender.transfer(address(this).balance);
    return true;
  }
  
  
  /*
  * ----------------------------------------------------------------------------------------------------------------------------------------------
  * Functions for Staking Participation
  * ----------------------------------------------------------------------------------------------------------------------------------------------
  */


  // function to performs staking for user tokens for a specific period of time
  function performStaking(uint256 tokens, uint256 time) public validatorForStaking(tokens, time) returns(bool){
     stakingCount = stakingCount +1 ;
    _stakerAddress[stakingCount] = msg.sender;
    _stakingEndTime[stakingCount] = time;
    _stakingStartTime[stakingCount] = now;
    _usersTokens[stakingCount] = tokens;
    _TokenTransactionstatus[stakingCount] = false;
    _transfer(msg.sender, _tokenPoolAddress, tokens);
    return true;
  }

  // function so user can purcase tokens by transacting trx in the contract
  function purchaseTokens() external payable payableCheck returns(bool){
    _transfer(_purchaseableTokensAddress, msg.sender,msg.value * _tokenPriceTRX/100);
    return true;
  } 

  // function to calculate panelty for the message sender
  function getPaneltyIfWithdrawToday(uint256 id) public view returns(uint256){
    if(_stakingEndTime[id] < now){
     if(_stakingEndTime[id] + 2629743 < now){
      return _withdrawTimeElapsePenalty;
   }
    else{
    return 0;
    }
  }
  else if(_stakingEndTime[id] > now){
  if((now - _stakingStartTime[id]) < 31556926){
     return (_penaltyPercentage * 1 * _usersTokens[id])/100;
  }
  else if((now - _stakingStartTime[id]) > 31556925 && now - _stakingStartTime[id] < 63113852){
     return (_penaltyPercentage * 2 * _usersTokens[id])/100;
  }
  else if((now-_stakingStartTime[id]) > 63113851 && now - _stakingStartTime[id] < 94670778){
     return (_penaltyPercentage * 3 * _usersTokens[id])/100;
  }
  else if((now - _stakingStartTime[id]) > 94670777 && now - _stakingStartTime[id] < 126227704){
     return (_penaltyPercentage * 4 * _usersTokens[id])/100;
  }
  else if((now - _stakingStartTime[id]) > 126227703 && now - _stakingStartTime[id] < 157784630){
     return (_penaltyPercentage * 5 * _usersTokens[id])/100;
  }
  else if((now - _stakingStartTime[id]) > 157784629 && now -_stakingStartTime[id] < 189341556){
     return (_penaltyPercentage * 6 * _usersTokens[id])/100;
  }
  else if((now - _stakingStartTime[id]) > 189341555 && now - _stakingStartTime[id] < 220898482){
     return (_penaltyPercentage * 7 * _usersTokens[id])/100;
  }
  else if((now - _stakingStartTime[id]) > 220898481 && now - _stakingStartTime[id] < 252455408){
     return (_penaltyPercentage * 8 * _usersTokens[id])/100;
  }
  else if((now - _stakingStartTime[id]) > 252455407 && now - _stakingStartTime[id] < 284012334){
     return (_penaltyPercentage * 9 * _usersTokens[id])/100;
  }
  else if((now - _stakingStartTime[id]) > 284012333 && now - _stakingStartTime[id] < 315569260){
     return (_penaltyPercentage * 10 * _usersTokens[id])/100;
  }
  else{
     return 0;
  }
  }
  else{
    return 0;
  }
}

  //get Rewards on the stake
  function getRewardsDetailsOfUserById(uint256 id) public view returns(uint256){
    return ((_rewardPercentage)/10000) * _stakingEndTime[id]* _usersTokens[id];
    
  }

  // function for withdrawing staked tokens
  function withdrawStakedTokens(uint256 stakingId) public returns(bool){
    require(_stakerAddress[stakingId] == msg.sender,"No staked token found on this address and ID");
    require(_usersTokens[stakingId] <= _usersTokens[stakingId]);
    _TokenTransactionstatus[stakingId] = true;
    _transfer(_tokenPoolAddress,msg.sender,_usersTokens[stakingId]);
    return true;
  }


  /*
  * ------------------------------------------------------------------------------------------------------------
  * Functions for Front-End Functionality
  * ------------------------------------------------------------------------------------------------------------
  */


  //function to get Staking address by id
  function getStakingAddressById(uint256 id) public view returns (address){
    require(id <= stakingCount,"Unable to reterive data on specified id, Please try again!!");
    return _stakerAddress[id];
  }
  
  //Function to get Staking Starting time by id
  function getStakingStartTimeById(uint256 id)public view returns(uint256){
    require(id <= stakingCount,"Unable to reterive data on specified id, Please try again!!");
    return _stakingStartTime[id];
  }
  
  //Function to get Staking Ending time by id
  function getStakingEndTimeById(uint256 id)public view returns(uint256){
    require(id <= stakingCount,"Unable to reterive data on specified id, Please try again!!");
    return _stakingEndTime[id];
  }

  //Function to get Staking tokens by id
  function getStakingTokenById(uint256 id)public view returns(uint256){
    require(id <= stakingCount,"Unable to reterive data on specified id, Please try again!!");
    return _usersTokens[id];
  }
  
  //Function to get Staking tokens by id
  function getActiveStakesByAddress(uint256 add)public view returns(uint256){
    return _usersTokens[add];
  }

  //Function to get Interest  
  function getInterest()public view returns(uint256){
    return _rewardPercentage;
  }
  
}

