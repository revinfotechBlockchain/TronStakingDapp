const express= require('express');
const router = express.Router();
const genericController = require('../controller/genericApi');
const contractController = require('../controller/contractApi');
const frontEndController = require('../controller/frontEndAPi');

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------Routes for Front-end Function of Tron-------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

// /**
//     * @typedef getTokenTransactionsByAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getTokenTransactionsByAddress
//     * @param {getTokenTransactionsByAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getTokenTransactionsByAddress', frontEndController.getTokenTransactionsByAddress);

//    /**
//     * @typedef getStakingTokensByAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getStakingTokensByAddress
//     * @param {getStakingTokensByAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getStakingTokensByAddress', frontEndController.getStakingTokensByAddress); 


// //     /**
// //     * @typedef getreferalLinkforAddress
// //     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
// //     */
// //     /**
// //     * @route GET /api/tron/getreferalLinkforAddress
// //     * @param {getreferalLinkforAddress.model} address.query
// //     * @group Front_End_API
// //     * @security Basic Auth
// //     */
// //    router.get('/getreferalLinkforAddress', frontEndController.getreferalLinkforAddress);
   
//    /**
//     * @typedef getAllReferalsByAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getAllReferalsByAddress
//     * @param {getreferalLinkforAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getAllReferalsByAddress', frontEndController.getAllReferalsByAddress); 

//       /**
//     * @typedef addBigPayDayDate
//     * @property {String} Date.required - Add Date - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} BonusPercentage.required - Add BonusPercentage - eg: 10
//     * @property {String} amount.required - Add amount  - eg: 10
//     */
//     /**
//     * @route POST /api/tron/addBigPayDayDate
//     * @param {addBigPayDayDate.model} req.body
//     * @group Front_End_API
//     * @security Basic Auth
//     */
// //    router.post('/addBigPayDayDate', frontEndController.addBigPayDayDate); 

//    /**
//     * @typedef getServerTime
//     */
//     /**
//     * @route GET /api/tron/getServerTime
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getServerTime', frontEndController.getServerTime); 

//     /**
//     * @typedef getAvailableRYZForTransform
//     */
//     /**
//     * @route GET /api/tron/getAvailableRYZForTransform
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getAvailableRYZForTransform', frontEndController.getAvailableRYZForTransform); 


//     /**
//     * @typedef getTotalEth
//     */
//     /**
//     * @route GET /api/tron/getTotalEth
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getTotalEth', frontEndController.getTotalEth);

//     /**
//     * @typedef getTrxBalance
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getTrxBalance
//     * @param {getTrxBalance.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getTrxBalance', frontEndController.getTrxBalance);

//     /**
//     * @typedef getTrxBalance
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getTokenBalance
//     * @param {getTokenBalance.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getTokenBalance', frontEndController.getTokenBalance);

//     /**
//     * @typedef getTokenPrice
//     */
//     /**
//     * @route GET /api/tron/getTokenPrice
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getTokenPrice', frontEndController.getTokenPrice);

//     /**
//     * @typedef withdrawMyPurchasedTokens
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route POST /api/tron/withdrawMyPurchasedTokens
//     * @param {withdrawMyPurchasedTokens.model} address.body
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.post('/withdrawMyPurchasedTokens', frontEndController.withdrawMyPurchasedTokens);
   
//     /**
//     * @typedef getReferalLinkByAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getReferalLinkByAddress
//     * @param {getReferalLinkByAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getReferalLinkByAddress', frontEndController.getReferalLinkByAddress);

//      /**
//     * @typedef getReferralAmount
//     */
//     /**
//     * @route GET /api/tron/getReferralAmount
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getReferralAmount', frontEndController.getReferralAmount);

//     /**
//     * @typedef getReferralHistory
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getReferralHistory
//     * @param {getReferralHistory.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getReferralHistory', frontEndController.getReferralHistory);

//     /**
//     * @typedef withdrawReferral
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} referralLink.required - Add referralLink - eg: qwertyuioopoiuytr
//     */
//     /**
//     * @route POST /api/tron/withdrawReferral
//     * @param {withdrawReferral.model} req.body
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.post('/withdrawReferral', frontEndController.withdrawReferral);

//     /**
//     * @typedef deleteRecord
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/deleteRecord
//     * @param {deleteRecord.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/deleteRecord', frontEndController.deleteRecord);

//    /**
//     * @typedef getAllStakesById
//     */
//     /**
//     * @route GET /api/tron/getAllStakesById
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getAllStakesById', frontEndController.getAllStakesById);
   
//     /**
//     * @typedef deleteRecordByStakeId
//     * @property {String} id.required - Add id - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/deleteRecordByStakeId
//     * @param {deleteRecordByStakeId.model} id.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/deleteRecordByStakeId', frontEndController.deleteRecordByStakeId);

//    /**
//     * @typedef getActiveStakesByUserAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getActiveStakesByUserAddress
//     * @param {getActiveStakesByUserAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getActiveStakesByUserAddress', frontEndController.getActiveStakesByUserAddress);

//    /**
//     * @typedef getStakeHistoryByUserAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getStakeHistoryByUserAddress
//     * @param {getStakeHistoryByUserAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getStakeHistoryByUserAddress', frontEndController.getStakeHistoryByUserAddress);

//     /**
//     * @typedef getAllTransformTableDataByAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getAllTransformTableDataByAddress
//     * @param {getAllTransformTableDataByAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getAllTransformTableDataByAddress', frontEndController.getAllTransformTableDataByAddress);

//     /**
//     * @typedef DeleteTransformTable
//     */
//     /**
//     * @route GET /api/tron/DeleteTransformTable
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/DeleteTransformTable', frontEndController.DeleteTransformTable)
   
//     /**
//     * @typedef checkBTCAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/checkBTCAddress
//     * @param {checkBTCAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/checkBTCAddress', frontEndController.checkBTCAddress);

//     /**
//     * @typedef transferRYZ
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} toAddress.required - Add toaddress - eg: qehdhakdajdoadh
//     * @property {String} amount.required - Add amount - eg: 10000
//     */
//     /**
//     * @route POST /api/tron/transferRYZ
//     * @param {transferRYZ.model} req.body
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.post('/transferRYZ', frontEndController.transferRYZ);

//   /**
//     * @typedef purchaseRYZ
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route POST /api/tron/purchaseRYZ
//     * @param {purchaseRYZ.model} req.body
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.post('/purchaseRYZ', frontEndController.purchaseRYZ);

//   /**
//     * @typedef transferRYZ
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route POST /api/tron/withdrawPurchasedRYZ
//     * @param {withdrawPurchasedRYZ.model} req.body
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.post('/withdrawPurchasedRYZ', frontEndController.withdrawPurchasedRYZ);
    
//     /**
//     * @typedef getContractAddress
//     */
//     /**
//     * @route GET /api/tron/getContractAddress
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getContractAddress', frontEndController.getContractAddress);

//     /**
//     * @typedef getAllBTCRewardsByAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getAllBTCRewardsByAddress
//     * @param {checkBTCAddress.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getAllBTCRewardsByAddress', frontEndController.getAllBTCRewardsByAddress);

//     /**
//     * @typedef resetAllBTCRewardsByAddress
//     */
//     /**
//     * @route GET /api/tron/resetAllBTCRewardsByAddress
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/resetAllBTCRewardsByAddress', frontEndController.resetAllBTCRewardsByAddress);
    
//     /**
//     * @typedef getAllBTCRewards
//     */
//     /**
//     * @route GET /api/tron/getAllBTCRewards
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getAllBTCRewards', frontEndController.getAllBTCRewards);

//     /**
//     * @typedef genrateBitcoinMessage
//     */
//     /**
//     * @route GET /api/tron/genrateBitcoinMessage
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/genrateBitcoinMessage', frontEndController.genrateBitcoinMessage);

//     /**
//     * @typedef validateBitcoinSignature
//     * @property {String} signature.required - Add signature - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} signature.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/validateBitcoinSignature
//     * @param {validateBitcoinSignature.model} signature.query
//     * @param {validateBitcoinSignature.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/validateBitcoinSignature', frontEndController.validateBitcoinSignature);

//     /**
//     * @typedef getBTCBalance
//     * @property {String} signature.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getBTCBalance
//     * @param {getBTCBalance.model} address.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//     router.get('/getBTCBalance', frontEndController.getBTCBalance);

//     /**
//     * @typedef getStakeDetails
//     * @property {String} endTime.required - Add endTime - eg: 156778433
//     * @property {String} amount.required - Add amount - eg: 100000
//     */
//     /**
//     * @route GET /api/tron/getStakeDetails
//     * @param {getStakeDetails.model} endTime.query
//     * @param {getStakeDetails.model} amount.query
//     * @group Front_End_API
//     * @security Basic Auth
//     */
//    router.get('/getStakeDetails', frontEndController.getStakeDetails);
    
    
    
    



    
    
    
    

    
   
    
    

    
    
    
   
   
   
   

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------Routes for Generic Function of Tron-------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------------------------------------//


//     /**
//     * @typedef createAccount
//     */
//     /**
//     * @route GET /api/tron/createAccount
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/createAccount', genericController.createAccount);

//     /**
//     * @typedef getAccount
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getAccount
//     * @param {getAccount.model} address.query
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/getAccount', genericController.getAccount);

//     /**
//     * @typedef getBalance
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getBalance
//     * @param {getBalance.model} address.query
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/getBalance', genericController.getBalance);

//     /**
//     * @typedef getBandwidth
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getBandwidth
//     * @param {getBandwidth.model} address.query
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/getBandwidth', genericController.getBandwidth);


// router.post('/sendTRX', genericController.sendTRX);                                                                 //problem  //swagger remaining

//     /**
//     * @typedef getTransactionInfo
//     * @property {String} hash.required - Add hash - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getTransactionInfo
//     * @param {getTransactionInfo.model} hash.query
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/getTransactionInfo', genericController.getTransactionInfo);


//     /**
//     * @typedef getTransactionByHash
//     * @property {String} hash.required - Add hash - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getTransactionByHash
//     * @param {getTransactionByHash.model} hash.query
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/getTransactionByHash', genericController.getTransactionByHash);


//     /**
//     * @typedef getTransactionsByAddress
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getTransactionsByAddress
//     * @param {getTransactionsByAddress.model} address.query
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/getTransactionsByAddress', genericController.getTransactionsByAddress);                                    //problem

//     /**
//     * @typedef getTransactionByBlock
//     * @property {String} block.required - Add block - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getTransactionByBlock
//     * @param {getTransactionByBlock.model} block.query
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/getTransactionByBlock', genericController.getTransactionByBlock);                                              

//     /**
//     * @typedef Tron_Status
//     */
//     /**
//     * @route GET /api/tron/getStatus
//     * @group Generic_API
//     * @security Basic Auth
//     */
// router.get('/getStatus', genericController.getStatus);


// //-----------------------------------------------------------------------------------------------------------------------------------------------------------//
// //------------------------------------------------------Routes for Smart Contract Function of Tron-----------------------------------------------------------//
// //-----------------------------------------------------------------------------------------------------------------------------------------------------------//

//     /**
//     * @typedef getTokenOwner
//     */
//     /**
//     * @route GET /api/tron/getTokenOwner
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.get('/getTokenOwner', contractController.getTokenOwner);                                                                   //problem

//     /**
//     * @typedef getTokenOwnerBalance
//     * @property {String} address.required - Add address - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     */
//     /**
//     * @route GET /api/tron/getTokenOwnerBalance
//     * @param {getTokenOwnerBalance.model} address.query
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.get('/getTokenOwnerBalance', contractController.getTokenOwnerBalance);   

//     /**
//     * @typedef getTokenName
//     */
//     /**
//     * @route GET /api/tron/getTokenName
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.get('/getTokenName', contractController.getTokenName);

//     /**
//     * @typedef getTokenSymbol
//     */
//     /**
//     * @route GET /api/tron/getTokenSymbol
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.get('/getTokenSymbol', contractController.getTokenSymbol);

//     /**
//     * @typedef getTokenTotalSupply
//     */
//     /**
//     * @route GET /api/tron/getTokenTotalSupply
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.get('/getTokenTotalSupply', contractController.getTokenTotalSupply);

//     /**
//     * @typedef approveToken
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} address.required - Add address - eg: qehdhakdajdoadh
//     * @property {String} amount.required - Add amount - eg: 10000
//     */
//     /**
//     * @route POST /api/tron/approveToken
//     * @param {approveToken.model} req.body
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.post('/approveToken', contractController.approveToken);

//     /**
//     * @typedef increaseAllowance
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} address.required - Add address - eg: qehdhakdajdoadh
//     * @property {String} amount.required - Add amount - eg: 10000
//     */
//     /**
//     * @route POST /api/tron/increaseAllowance
//     * @param {increaseAllowance.model} req.body
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.post('/increaseAllowance', contractController.increaseAllowance);

//    /**
//     * @typedef decreaseAllowance
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} address.required - Add address - eg: qehdhakdajdoadh
//     * @property {String} amount.required - Add amount - eg: 10000
//     */
//     /**
//     * @route POST /api/tron/decreaseAllowance
//     * @param {decreaseAllowance.model} req.body
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.post('/decreaseAllowance', contractController.decreaseAllowance);

//     /**
//     * @typedef transfer
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} toAddress.required - Add toaddress - eg: qehdhakdajdoadh
//     * @property {String} amount.required - Add amount - eg: 10000
//     */
//     /**
//     * @route POST /api/tron/transfer
//     * @param {transfer.model} req.body
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.post('/transfer', contractController.transfer);    

//     /**
//     * @typedef transferFrom
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} fromAddress.required - Add fromaddress - eg: qehdhakdajdoadh
//     * @property {String} toAddress.required - Add toaddress - eg: qehdhakdajdoadh
//     * @property {String} amount.required - Add amount - eg: 10000
//     */
//     /**
//     * @route POST /api/tron/transferFrom
//     * @param {transferFrom.model} req.body
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.post('/transferFrom', contractController.transferFrom);    

//     /**
//     * @typedef burnToken
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} amount.required - Add amount - eg: 10000
//     */
//     /**
//     * @route POST /api/tron/burnToken
//     * @param {burnToken.model} req.body
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.post('/burnToken', contractController.burnToken);   

//     /**
//     * @typedef transferOwnership
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} address.required - Add address - eg: qwertyuioopoiuytr
//     */
//     /**
//     * @route POST /api/tron/transferOwnership
//     * @param {transferOwnership.model} req.body
//     * @group Smart_Contract_API
//     * @security Basic Auth
//     */
// router.post('/transferOwnership', contractController.transferOwnership);   



//     /**
//     * @typedef getPurchaseableTokenAddress
//     */
//     /**
//     * @route GET /api/tron/getPurchaseableTokenAddress
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.get('/getPurchaseableTokenAddress', contractController.getPurchaseableTokenAddress);                                     //problem

//     /**
//     * @typedef getPurchaseableTokens
//     */
//     /**
//     * @route GET /api/tron/getPurchaseableTokens
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.get('/getPurchaseableTokens', contractController.getPurchaseableTokens);

//     /**
//     * @typedef getPriceOfToken
//     */
//     /**
//     * @route GET /api/tron/getPriceOfToken
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.get('/getPriceOfToken', contractController.getPriceOfToken);

//     /**
//     * @typedef getRewardPercentage
//     */
//     /**
//     * @route GET /api/tron/getRewardPercentage
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.get('/getRewardPercentage', contractController.getRewardPercentage);

//     /**
//     * @typedef getPenaltyPercentage
//     */
//     /**
//     * @route GET /api/tron/getPenaltyPercentage
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.get('/getPenaltyPercentage', contractController.getPenaltyPercentage);

//     /**
//     * @typedef getWithdrawPenaltyPercentage
//     */
//     /**
//     * @route GET /api/tron/getWithdrawPenaltyPercentage
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.get('/getWithdrawPenaltyPercentage', contractController.getWithdrawPenaltyPercentage);

//     /**
//     * @typedef getPenaltyIfWithdrawToday
//     * @property {String} address.required - Add address - eg: qwertyuioopoiuytr
//     */
//     /**
//     * @route GET /api/tron/getPenaltyIfWithdrawToday
//     * @param {getPenaltyIfWithdrawToday.model} address.query
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.get('/getPenaltyIfWithdrawToday', contractController.getPenaltyIfWithdrawToday);

//     /**
//     * @typedef getRewardsDetailsByUser
//     * @property {String} address.required - Add address - eg: qwertyuioopoiuytr
//     */
//     /**
//     * @route GET /api/tron/getRewardsDetailsByUser
//     * @param {getRewardsDetailsByUser.model} address.query
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.get('/getRewardsDetailsByUser', contractController.getRewardsDetailsByUser);                                       //problem

//     /**
//     * @typedef setpurchaseableTokenAddress
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} address.required - Add address - eg: qwertyuioopoiuytr
//     */
//     /**
//     * @route POST /api/tron/setpurchaseableTokenAddress
//     * @param {setpurchaseableTokenAddress.model} req.body
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.post('/setpurchaseableTokenAddress', contractController.setpurchaseableTokenAddress); 

//     /**
//     * @typedef setPurchaseableTokens
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} amount.required - Add amount - eg: 10000
//     */
//     /**
//     * @route POST /api/tron/setPurchaseableTokens
//     * @param {setPurchaseableTokens.model} req.body
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.post('/setPurchaseableTokens', contractController.setPurchaseableTokens);

//     /**
//     * @typedef setPriceOfToken
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} price.required - Add price - eg: 2
//     */
//     /**
//     * @route POST /api/tron/setPriceOfToken
//     * @param {setPriceOfToken.model} req.body
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.post('/setPriceOfToken', contractController.setPriceOfToken);

//     /**
//     * @typedef setRewardPercentage
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} percentage.required - Add percentage - eg: 3
//     */
//     /**
//     * @route POST /api/tron/setRewardPercentage
//     * @param {setRewardPercentage.model} req.body
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.post('/setRewardPercentage', contractController.setRewardPercentage);

//     /**
//     * @typedef setPenaltyPercentage
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} percentage.required - Add percentage - eg: 5
//     */
//     /**
//     * @route POST /api/tron/setPenaltyPercentage
//     * @param {setPenaltyPercentage.model} req.body
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.post('/setPenaltyPercentage', contractController.setPenaltyPercentage);

//     /**
//     * @typedef setWithdrawPenaltyPercentage
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} percentage.required - Add percentage - eg: 4
//     */
//     /**
//     * @route POST /api/tron/setWithdrawPenaltyPercentage
//     * @param {setWithdrawPenaltyPercentage.model} req.body
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.post('/setWithdrawPenaltyPercentage', contractController.setWithdrawPenaltyPercentage);

//     /**
//     * @typedef performStakingToken
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} amount.required - Add amount - eg: qwertyuioopoiuytr
//     * @property {String} time.required - Add time - eg: 2
//     */
//     /**
//     * @route POST /api/tron/performStakingToken
//     * @param {performStakingToken.model} req.body
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.post('/performStakingToken', contractController.performStakingToken);

//     /**
//     * @typedef withdrawStakingToken
//     * @property {String} privateKey.required - Add privateKey - eg: XdAUmwtig27HBG6WfYyHAzP8n6XC9jESEw
//     * @property {String} amount.required - Add amount - eg: qwertyuioopoiuytr
//     */
//     /**
//     * @route POST /api/tron/withdrawStakingToken
//     * @param {withdrawStakingToken.model} req.body
//     * @group Staking_API
//     * @security Basic Auth
//     */
// router.post('/withdrawStakingToken', contractController.withdrawStakingToken);

module.exports= router
