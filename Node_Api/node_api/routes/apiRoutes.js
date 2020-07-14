const express= require('express');
const router = express.Router();
const genericController = require('../controller/genericApi');
const contractController = require('../controller/contractApi');
const frontEndController = require('../controller/frontEndAPi');

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------ROUTES FOR FRONT-END FUNCTIONS OF TRON----------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

    /**
    * @typedef getTokenTransactionsByAddress
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getTokenTransactionsByAddress
    * @param {getTokenTransactionsByAddress.model} address.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getTokenTransactionsByAddress', frontEndController.getTokenTransactionsByAddress); 

    /**
    * @typedef getbitcoinBalanceByAddress
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getbitcoinBalanceByAddress
    * @param {getbitcoinBalanceByAddress.model} address.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getbitcoinBalanceByAddress', frontEndController.getbitcoinBalanceByAddress); 

    /**
    * @typedef getbitcoinTransactionByHash
    * @property {String} hash.required - Add hash - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getbitcoinTransactionByHash
    * @param {getbitcoinTransactionByHash.model} hash.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getbitcoinTransactionByHash', frontEndController.getbitcoinTransactionByHash); 

    /**
    * @typedef getbitcoinTransactionByAddress
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getbitcoinTransactionByAddress
    * @param {getbitcoinTransactionByAddress.model} address.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getbitcoinTransactionByAddress', frontEndController.getbitcoinTransactionByAddress); 

    /**
    * @typedef validateAddress
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/validateAddress
    * @param {validateAddress.model} address.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/validateAddress', frontEndController.validateAddress);

    /**
    * @typedef getStakingAddressById
    * @property {number} id.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getStakingAddressById
    * @param {getStakingAddressById.model} id.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getStakingAddressById', frontEndController.getStakingAddressById); 

    /**
    * @typedef getStakingTokenById
    * @property {number} id.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getStakingTokenById
    * @param {getStakingTokenById.model} id.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getStakingTokenById', frontEndController.getStakingTokenById); 

    /**
    * @typedef getStakingStartTimeById
    * @property {number} id.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getStakingStartTimeById
    * @param {getStakingStartTimeById.model} id.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getStakingStartTimeById', frontEndController.getStakingStartTimeById); 

    /**
    * @typedef getStakingEndTimeById
    * @property {number} id.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getStakingEndTimeById
    * @param {getStakingEndTimeById.model} id.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getStakingEndTimeById', frontEndController.getStakingEndTimeById);

    /**
    * @typedef getActiveStakesById
    * @property {number} id.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getActiveStakesById
    * @param {getActiveStakesById.model} id.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getActiveStakesById', frontEndController.getActiveStakesById);

    /**
    * @typedef getReferralHistory
    * @property {string} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getReferralHistory
    * @param {getReferralHistory.model} address.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getReferralHistory', frontEndController.getReferralHistory);

    /**
    * @typedef getTokenLockstatus
    * @property {number} id.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getTokenLockstatus
    * @param {getTokenLockstatus.model} id.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getTokenLockstatus', frontEndController.getTokenLockstatus);

    /**
    * @typedef getInterest
    */
    /**
    * @route GET /api/tron/getInterest
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getInterest', frontEndController.getInterest);

    /**
    * @typedef getDateOfClaimBTC
    * @property {number} idClaimBTC.required - Add idClaimBTC - eg: 1
    */
    /**
    * @route GET /api/tron/getDateOfClaimBTC
    * @param {getDateOfClaimBTC.model} idClaimBTC.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getDateOfClaimBTC', frontEndController.getDateOfClaimBTC);

    /**
    * @typedef getBTCClaimCount
    */
    /**
    * @route GET /api/tron/getBTCClaimCount
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getBTCClaimCount', frontEndController.getBTCClaimCount);

    /**
    * @typedef getUserAddressForClaimBTC
    * @property {number} idClaimBTC.required - Add idClaimBTC - eg: 1
    */
    /**
    * @route GET /api/tron/getUserAddressForClaimBTC
    * @param {getUserAddressForClaimBTC.model} idClaimBTC.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getUserAddressForClaimBTC', frontEndController.getUserAddressForClaimBTC);

    /**
    * @typedef getClaimedBTCAddress
    * @property {number} idClaimBTC.required - Add idClaimBTC - eg: 1
    */
    /**
    * @route GET /api/tron/getClaimedBTCAddress
    * @param {getClaimedBTCAddress.model} idClaimBTC.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getClaimedBTCAddress', frontEndController.getClaimedBTCAddress);

    /**
    * @typedef getRawBTCAmount
    * @property {number} idClaimBTC.required - Add idClaimBTC - eg: 1
    */
    /**
    * @route GET /api/tron/getRawBTCAmount
    * @param {getRawBTCAmount.model} idClaimBTC.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getRawBTCAmount', frontEndController.getRawBTCAmount);

    /**
    * @typedef getClaimedAmountByBTC
    * @property {number} idClaimBTC.required - Add idClaimBTC - eg: 1
    */
    /**
    * @route GET /api/tron/getClaimedAmountByBTC
    * @param {getClaimedAmountByBTC.model} idClaimBTC.query
    * @group Front_End_API
    * @security Basic Auth
    */
router.get('/getClaimedAmountByBTC', frontEndController.getClaimedAmountByBTC);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------ROUTES FOR GENERIC FUNCTIONS OF TRON------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------------------------------------//


    /**
    * @typedef createAccount
    */
    /**
    * @route GET /api/tron/createAccount
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/createAccount', genericController.createAccount);

    /**
    * @typedef getAccount
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getAccount
    * @param {getAccount.model} address.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getAccount', genericController.getAccount);

    /**
    * @typedef getBalance
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getBalance
    * @param {getBalance.model} address.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getBalance', genericController.getBalance);

    /**
    * @typedef getBandwidth
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getBandwidth
    * @param {getBandwidth.model} address.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getBandwidth', genericController.getBandwidth);

    /**
    * @typedef getTransactionInfo
    * @property {String} hash.required - Add hash - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getTransactionInfo
    * @param {getTransactionInfo.model} hash.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getTransactionInfo', genericController.getTransactionInfo);

    /**
    * @typedef getTransactionByHash
    * @property {String} hash.required - Add hash - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getTransactionByHash
    * @param {getTransactionByHash.model} hash.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getTransactionByHash', genericController.getTransactionByHash);


    /**
    * @typedef getTransactionsByAddress
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getTransactionsByAddress
    * @param {getTransactionsByAddress.model} address.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getTransactionsByAddress', genericController.getTransactionsByAddress);                                   

    /**
    * @typedef getTransactionByBlock
    * @property {String} block.required - Add block - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getTransactionByBlock
    * @param {getTransactionByBlock.model} block.query
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getTransactionByBlock', genericController.getTransactionByBlock);                                              

    /**
    * @typedef Tron_Status
    */
    /**
    * @route GET /api/tron/getStatus
    * @group Generic_API
    * @security Basic Auth
    */
router.get('/getStatus', genericController.getStatus);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------ROUTES FOR SMART CONTRACT FUNCTIONS OF TRON-----------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------Routes for ERC20 Functions-----------------------------------------------------------------//

    /**
    * @typedef getTokenOwner
    */
    /**
    * @route GET /api/tron/getTokenOwner
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTokenOwner', contractController.getTokenOwner);                                                                   

    /**
    * @typedef getTokenOwnerBalance
    * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route GET /api/tron/getTokenOwnerBalance
    * @param {getTokenOwnerBalance.model} address.query
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTokenOwnerBalance', contractController.getTokenOwnerBalance);   

    /**
    * @typedef getTokenName
    */
    /**
    * @route GET /api/tron/getTokenName
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTokenName', contractController.getTokenName);

    /**
    * @typedef getTokenSymbol
    */
    /**
    * @route GET /api/tron/getTokenSymbol
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTokenSymbol', contractController.getTokenSymbol);

    /**
    * @typedef getTokenTotalSupply
    */
    /**
    * @route GET /api/tron/getTokenTotalSupply
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getTokenTotalSupply', contractController.getTokenTotalSupply);

    /**
    * @typedef getContractTrxBalance
    */
    /**
    * @route GET /api/tron/getContractTrxBalance
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.get('/getContractTrxBalance', contractController.getContractTrxBalance);

    /**
    * @typedef approveToken
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} address.required - Add address - eg: qehdhakdajdoadh
    * @property {String} amount.required - Add amount - eg: 10000
    */
    /**
    * @route POST /api/tron/approveToken
    * @param {approveToken.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/approveToken', contractController.approveToken);

    /**
    * @typedef increaseAllowance
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} address.required - Add address - eg: qehdhakdajdoadh
    * @property {String} amount.required - Add amount - eg: 10000
    */
    /**
    * @route POST /api/tron/increaseAllowance
    * @param {increaseAllowance.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/increaseAllowance', contractController.increaseAllowance);

    /**
    * @typedef decreaseAllowance
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} address.required - Add address - eg: qehdhakdajdoadh
    * @property {String} amount.required - Add amount - eg: 10000
    */
    /**
    * @route POST /api/tron/decreaseAllowance
    * @param {decreaseAllowance.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/decreaseAllowance', contractController.decreaseAllowance);

    /**
    * @typedef transfer
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} toAddress.required - Add toaddress - eg: qehdhakdajdoadh
    * @property {String} amount.required - Add amount - eg: 10000
    */
    /**
    * @route POST /api/tron/transfer
    * @param {transfer.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/transfer', contractController.transfer);    

    /**
    * @typedef transferFrom
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} fromAddress.required - Add fromaddress - eg: qehdhakdajdoadh
    * @property {String} toAddress.required - Add toaddress - eg: qehdhakdajdoadh
    * @property {String} amount.required - Add amount - eg: 10000
    */
    /**
    * @route POST /api/tron/transferFrom
    * @param {transferFrom.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/transferFrom', contractController.transferFrom);    

    /**
    * @typedef burnToken
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} amount.required - Add amount - eg: 10000
    */
    /**
    * @route POST /api/tron/burnToken
    * @param {burnToken.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/burnToken', contractController.burnToken);   

    /**
    * @typedef mintToken
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} amount.required - Add amount - eg: 10000
    */
    /**
    * @route POST /api/tron/mintToken
    * @param {mintToken.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/mintToken', contractController.mintToken);

    /**
    * @typedef transferOwnership
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} address.required - Add address - eg: qwertyuioopoiuytr
    */
    /**
    * @route POST /api/tron/transferOwnership
    * @param {transferOwnership.model} req.body
    * @group Smart_Contract_API
    * @security Basic Auth
    */
router.post('/transferOwnership', contractController.transferOwnership);   


//----------------------------------------------------------------Routes for Staking Get Functions------------------------------------------------------------//

    /**
    * @typedef getBigPayDay
    */
    /**
    * @route GET /api/tron/getBigPayDay
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getBigPayDay', contractController.getBigPayDay); 

    /**
    * @typedef getBigPayDayPercentage
    */
    /**
    * @route GET /api/tron/getBigPayDayPercentage
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getBigPayDayPercentage', contractController.getBigPayDayPercentage); 

    /**
    * @typedef getTokenpoolAddress
    */
    /**
    * @route GET /api/tron/getTokenpoolAddress
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getTokenpoolAddress', contractController.getTokenpoolAddress);   

    /**
    * @typedef getPurchaseableTokenAddress
    */
    /**
    * @route GET /api/tron/getPurchaseableTokenAddress
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getPurchaseableTokenAddress', contractController.getPurchaseableTokenAddress);                                    

    /**
    * @typedef getPurchaseableTokens
    */
    /**
    * @route GET /api/tron/getPurchaseableTokens
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getPurchaseableTokens', contractController.getPurchaseableTokens);

    /**
    * @typedef getPriceOfToken
    */
    /**
    * @route GET /api/tron/getPriceOfToken
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getPriceOfToken', contractController.getPriceOfToken);

    /**
    * @typedef getRewardPercentage
    */
    /**
    * @route GET /api/tron/getRewardPercentage
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getRewardPercentage', contractController.getRewardPercentage);

    /**
    * @typedef getPenaltyPercentage
    */
    /**
    * @route GET /api/tron/getPenaltyPercentage
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getPenaltyPercentage', contractController.getPenaltyPercentage);

    /**
    * @typedef getWithdrawPenaltyPercentage
    */
    /**
    * @route GET /api/tron/getWithdrawPenaltyPercentage
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getWithdrawPenaltyPercentage', contractController.getWithdrawPenaltyPercentage);

    /**
    * @typedef getPenaltyIfWithdrawToday
    * @property {number} id.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getPenaltyIfWithdrawToday
    * @param {getPenaltyIfWithdrawToday.model} id.query
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getPenaltyIfWithdrawToday', contractController.getPenaltyIfWithdrawToday);

    /**
    * @typedef getReferralAddress
    */
    /**
    * @route GET /api/tron/getReferralAddress
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getReferralAddress', contractController.getReferralAddress);

    /**
    * @typedef getReferralAmount
    */
    /**
    * @route GET /api/tron/getReferralAmount
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getReferralAmount', contractController.getReferralAmount);

    /**
    * @typedef getClaimTokens
    */
    /**
    * @route GET /api/tron/getClaimTokens
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getClaimTokens', contractController.getClaimTokens);

    /**
    * @typedef getRewardsDetailsOfUserById
    * @property {String} id.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getRewardsDetailsOfUserById
    * @param {getRewardsDetailsOfUserById.model} id.query
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getRewardsDetailsOfUserById', contractController.getRewardsDetailsOfUserById);  

    /**
    * @typedef getTotalTrx
    */
    /**
    * @route GET /api/tron/getTotalTrx
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getTotalTrx', contractController.getTotalTrx);

    /**
    * @typedef getStakingCount
    */
    /**
    * @route GET /api/tron/getStakingCount
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getStakingCount', contractController.getStakingCount);

    /**
    * @typedef getMyPurchasedTokens
    * @property {String} address.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getMyPurchasedTokens
    * @param {getMyPurchasedTokens.model} address.query
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getMyPurchasedTokens', contractController.getMyPurchasedTokens);

    /**
    * @typedef getTrxAmountByAddress
    * @property {String} address.required - Add id - eg: 1
    */
    /**
    * @route GET /api/tron/getTrxAmountByAddress
    * @param {getTrxAmountByAddress.model} address.query
    * @group Staking_API
    * @security Basic Auth
    */
router.get('/getTrxAmountByAddress', contractController.getTrxAmountByAddress);


//----------------------------------------------------------------Routes for Staking Get Functions------------------------------------------------------------//

    /**
    * @typedef setBigPayDay
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} day.required - Add day - eg: 12
    */
    /**
    * @route POST /api/tron/setBigPayDay
    * @param {setBigPayDay.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setBigPayDay', contractController.setBigPayDay); 

    /**
    * @typedef setBigPayDayPercentage
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} percentage.required - Add percentage - eg: 12
    */
    /**
    * @route POST /api/tron/setBigPayDayPercentage
    * @param {setBigPayDayPercentage.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setBigPayDayPercentage', contractController.setBigPayDayPercentage);

    /**
    * @typedef setTokenPoolAddress
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} address.required - Add address - eg: asdfghjk
    */
    /**
    * @route POST /api/tron/setTokenPoolAddress
    * @param {setTokenPoolAddress.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setTokenPoolAddress', contractController.setTokenPoolAddress); 

    /**
    * @typedef setpurchaseableTokenAddress
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} address.required - Add address - eg: qwertyuioopoiuytr
    */
    /**
    * @route POST /api/tron/setpurchaseableTokenAddress
    * @param {setpurchaseableTokenAddress.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setpurchaseableTokenAddress', contractController.setpurchaseableTokenAddress); 

    /**
    * @typedef setPurchaseableTokens
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} amount.required - Add amount - eg: 10000
    */
    /**
    * @route POST /api/tron/setPurchaseableTokens
    * @param {setPurchaseableTokens.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setPurchaseableTokens', contractController.setPurchaseableTokens);

    /**
    * @typedef setPriceOfToken
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} price.required - Add price - eg: 2
    */
    /**
    * @route POST /api/tron/setPriceOfToken
    * @param {setPriceOfToken.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setPriceOfToken', contractController.setPriceOfToken);

    /**
    * @typedef setRewardPercentage
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} percentage.required - Add percentage - eg: 3
    */
    /**
    * @route POST /api/tron/setRewardPercentage
    * @param {setRewardPercentage.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setRewardPercentage', contractController.setRewardPercentage);

    /**
    * @typedef setPenaltyPercentage
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} percentage.required - Add percentage - eg: 5
    */
    /**
    * @route POST /api/tron/setPenaltyPercentage
    * @param {setPenaltyPercentage.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setPenaltyPercentage', contractController.setPenaltyPercentage);

    /**
    * @typedef setWithdrawPenaltyPercentage
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} percentage.required - Add percentage - eg: 4
    */
    /**
    * @route POST /api/tron/setWithdrawPenaltyPercentage
    * @param {setWithdrawPenaltyPercentage.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setWithdrawPenaltyPercentage', contractController.setWithdrawPenaltyPercentage);

    /**
    * @typedef setReferralAddress
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {string} address.required - Add address - eg: zxcvbnmdfghj
    */
    /**
    * @route POST /api/tron/setReferralAddress
    * @param {setReferralAddress.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setReferralAddress', contractController.setReferralAddress);

    /**
    * @typedef setReferralAmount
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {number} amount.required - Add amount - eg: 4
    */
    /**
    * @route POST /api/tron/setReferralAmount
    * @param {setReferralAmount.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setReferralAmount', contractController.setReferralAmount);

    /**
    * @typedef setClaimTokens
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {number} token.required - Add token - eg: 4
    */
    /**
    * @route POST /api/tron/setClaimTokens
    * @param {setClaimTokens.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/setClaimTokens', contractController.setClaimTokens);

    /**
    * @typedef performStakingToken
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} amount.required - Add amount - eg: 1234
    * @property {String} time.required - Add time - eg: 2
    */
    /**
    * @route POST /api/tron/performStakingToken
    * @param {performStakingToken.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/performStakingToken', contractController.performStakingToken);

    /**
    * @typedef withdrawStakingToken
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {number} stakingId.required - Add stakingId - eg: 1
    */
    /**
    * @route POST /api/tron/withdrawStakingToken
    * @param {withdrawStakingToken.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/withdrawStakingToken', contractController.withdrawStakingToken);

    /**
    * @typedef purchaseTokens
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route POST /api/tron/purchaseTokens
    * @param {purchaseTokens.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/purchaseTokens', contractController.purchaseTokens);

    /**
    * @typedef withdrawPurchasedToken
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    */
    /**
    * @route POST /api/tron/withdrawPurchasedToken
    * @param {withdrawPurchasedToken.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/withdrawPurchasedToken', contractController.withdrawPurchasedToken);

    /**
    * @typedef blacklistStake
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {bool} status.required - Add status - eg: true or false
    * @property {number} id.required - Add id - eg: 1
    */
    /**
    * @route POST /api/tron/blacklistStake
    * @param {blacklistStake.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/blacklistStake', contractController.blacklistStake);

    /**
    * @typedef withdrawReferral
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} address.required - Add address - eg: qwertyuioopoiuytr
    */
    /**
    * @route POST /api/tron/withdrawReferral
    * @param {withdrawReferral.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/withdrawReferral', contractController.withdrawReferral);

    /**
    * @typedef claimBonus
    * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
    * @property {String} bitAddress.required - Add bitAddress - eg: qwertyuioopoiuytr
    * @property {String} bitBalance.required - Add bitBalance - eg: 12345
    */
    /**
    * @route POST /api/tron/claimBonus
    * @param {claimBonus.model} req.body
    * @group Staking_API
    * @security Basic Auth
    */
router.post('/claimBonus', contractController.claimBonus);



module.exports= router
