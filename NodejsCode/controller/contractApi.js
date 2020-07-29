const TronWeb = require('tronweb');
// This provider is optional, you can just use a url for the nodes instead
const HttpProvider = TronWeb.providers.HttpProvider;

//----------------------MAINNET-----------------------------------
// const fullNode = new HttpProvider('https://api.trongrid.io'); // Full node http endpoint
// const solidityNode = new HttpProvider('https://api.trongrid.io'); // Solidity node http endpoint
// const eventServer = new HttpProvider('https://api.trongrid.io');

//----------------------TESTNET------------------------------------
var fullNode = new HttpProvider('https://api.shasta.trongrid.io'); // Full node http endpoint
var solidityNode = new HttpProvider('https://api.shasta.trongrid.io'); // Solidity node http endpoint
var eventServer = new HttpProvider('https://api.shasta.trongrid.io'); // Contract events http endpoint

// priv_key(test) : d346e8b191f384a5ae31ca907ccc17ae013ccda576e73412d00b6b4ed9152fe4
// priv_key(Test123) : 7385a5a763ef1d29e1f594cd798a2c6a3791e84b81b11004f6e28f45b90e6923
var DemoPrivateKey = "d346e8b191f384a5ae31ca907ccc17ae013ccda576e73412d00b6b4ed9152fe4";
module.exports = {

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    //----------------------------------------------------------------API FOR ERC20 FUNCTIONALITY------------------------------------------------------------------------//
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------//

    // getTokenOwner: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         await newContract && newContract.getowner().call().then(async output => {
    //             let response = '{"status":"true","address":"'+output+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get Owner Address, Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getTokenOwnerBalance: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
          
    //         if(req.query.address && !req.query.address == ""){
    //             await newContract && newContract.balanceOf(req.query.address).call().then(async output => {
    //                 let response = '{"status":"true", "address": "'+req.query.address+'", "balance": "'+output.toString()+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to get Owner Balance, Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter valid Address & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    // },

    // getTokenName: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.name().call().then(async output => {
    //             let response = '{"status":"true","name":"'+output+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get Name of the token, Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getTokenSymbol: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.symbol().call().then(async output => {
    //             let response = '{"status":"true","symbol":"'+output+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get Symbol of the token, Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getTokenTotalSupply: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.totalSupply().call().then(async output => {
    //             let response = '{"status":"true","totalSupply":"'+output.toString()+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get Total supply, Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // approveToken: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         if(req.body.address && req.body.amount && ! req.body.address == "" && ! req.body.amount == 0) {
    //             await newContract && newContract.approve(req.body.address, req.body.amount).send().then(async output => {
    //                 let response = '{"status":"true", "address":"'+req.body.address+'", "amount":"'+req.body.amount+'", "hash":"'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to Approve token, Please Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter valid Address or amount and Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // increaseAllowance: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         if(req.body.address && req.body.amount && ! req.body.address == "" && ! req.body.amount == 0) {
    //             await newContract && newContract.increaseAllowance(req.body.address, req.body.amount).send().then(async output => {
    //                 let response = '{"status":"true", "address":"'+req.body.address+'", "amount":"'+req.body.amount+'", "hash":"'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to increase allowance of tokens, Please Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter valid Address or amount and Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // decreaseAllowance: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         if(req.body.address && req.body.amount && ! req.body.address == "" && ! req.body.amount == 0) {
    //             await newContract && newContract.decreaseAllowance(req.body.address, req.body.amount).send().then(async output => {
    //                 let response = '{"status":"true", "address":"'+req.body.address+'", "amount":"'+req.body.amount+'", "hash":"'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to decrease allowance of tokens, Please Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter valid Address or amount and Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // transfer: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.amount);
    //         var amount = (data).toFixed(6)*1000000;

    //         if(req.body.toAddress && amount && ! req.body.toAddress == "" && ! amount == 0) {
    //             await newContract && newContract.transfer(req.body.toAddress,amount).send().then(async output => {
    //                 let response = '{"status":"true","toAddress":"'+req.body.toAddress+'", "amount":"'+amount+'","hash":"'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to do transfer, Please Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter valid To address or amount and Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // transferFrom: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.query.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.amount);
    //         var amount = (data).toFixed(6)*1000000;

    //         if(req.body.fromAddress && req.body.toAddress && amount && ! req.body.fromAddress=="" && ! req.body.toAddress=="" && ! amount==0) {
    //             await newContract && newContract.transferFrom(req.body.fromAddress, req.body.toAddress, amount).send().then(async output => {
    //                 let response = '{"status":"true", "fromAddress":"'+req.body.fromAddress+'", "toAddress":"'+req.body.toAddress+'", "amount":"'+amount+'","hash":"'+output+'"}';
    //                 res.send(JSON.parse(response));
    //                 res.send(output);
    //             }).catch(err => {
    //                 res.status(400);
    //                 res.send({"message": err});
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter valid address or amount and Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // burnToken: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.amount);
    //         var amount = (data).toFixed(6)*1000000;

    //         if(amount && ! amount==0) {
    //             await newContract && newContract.burn(amount).send().then(async output => {
    //                 let response = '{"status":"true","burnAmount":"'+amount+'", "hash":"'+output+'"}';
    //                 res.send(JSON.parse(response));
    //                 //res.send(output);
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to burn token, Please Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter valid amount and Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // transferOwnership: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         if(req.body.address && ! req.body.address==0) {
    //             await newContract && newContract.transferOwnership(req.body.address).send().then(async output => {
    //                 let response = '{"status":"true","address":"'+req.body.address+'", "hash":"'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to transfer Ownership, Please Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter valid address and Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // //-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    // //--------------------------------------------------------------API FOR STAKING FUNCTIONALITY------------------------------------------------------------------------//
    // //-------------------------------------------------------------------------------------------------------------------------------------------------------------------//

    // getPurchaseableTokenAddress: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.getpurchaseableTokensAddress().call().then(async output => {
    //             let response = '{"status":"true","address":"'+output+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get purchaseableTokensAddress, Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getPurchaseableTokens: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.getpurchaseableTokens().call().then(async output => {
    //             let response = '{"status":"true","purchaseableTokens":"'+output+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get purchaseable Tokens, Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getPriceOfToken: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.getPriceToken().call().then(async output => {
    //             let response = '{"status":"true","priceOfToken":"'+output+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get price of Tokens, Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getRewardPercentage: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.getRewardPercentage().call().then(async output => {
    //             let response = '{"status":"true","percentage":"'+output/100+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get Reward Percentage , Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getPenaltyPercentage: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.getPenaltyPercentage().call().then(async output => {
    //             let response = '{"status":"true","percentage":"'+output/100+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get Penalty Percentage , Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getWithdrawPenaltyPercentage: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         await newContract && newContract.getWithdrawPenaltyPercentage().call().then(async output => {
    //             let response = '{"status":"true","percentage":"'+output/100+'"}';
    //             res.send(JSON.parse(response));
    //         }).catch(err => {
    //             let response = '{"status":"false","message":"Unable to get Withdraw Penalty Percentage , Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         });
    // },

    // getPenaltyIfWithdrawToday: async (req, res) => {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             DemoPrivateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
          
    //         if(req.query.address && !req.query.address == ""){
    //             await newContract && newContract.getPaneltyIfWithdrawToday(req.query.address).call().then(async output => {
    //                 let response = '{"status":"true", "address": "'+req.query.address+'", "penalty": "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to get Penalty by Today, Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid address & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }   
    // },

    // getRewardsDetailsByUser: async (req, res) => {
    //     const tronWeb = new TronWeb(
    //         fullNode,
    //         solidityNode,
    //         eventServer,
    //         DemoPrivateKey
    //       );
    //     tronWeb.setDefaultBlock('latest');
    //     var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //     if(req.query.address && !req.query.address== ""){
    //         await newContract && newContract.getRewardsDetailsByUser(req.query.address).send().then(async output => {
    //             //let response = '{"status":"true","address":"'+req.query.address+'", "hash" : "'+output+'"}';
    //             //res.send(JSON.parse(response));  
    //             res.send(output); 
    //         }).catch(err => {
    //             console.log(err);
    //             //let response = '{"status":"false","message":"Unable to get reward details of User , Try Again!!!"}';
    //             //res.send(JSON.parse(response));
    //         });
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Address & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // setpurchaseableTokenAddress: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         if(req.body.address && !req.body.address== ""){
    //             await newContract && newContract.setpurchaseableTokensAddress(req.body.address).send().then(async output => {
    //                 let response = '{"status":"true","address":"'+req.body.address+'", "hash" : "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to set Purchaseable Token Address , Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid address & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // setPurchaseableTokens: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.amount);
    //         var amount = (data).toFixed(6)*1000000;

    //         if(amount && !amount== "" && ! amount == 0){
    //             await newContract && newContract.addForPurchase(amount).send().then(async output => {
    //                 let response = '{"status":"true","amount":"'+amount+'", "hash" : "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to set Purchaseable Tokens , Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid amount & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // setPriceOfToken: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');

    //         if(req.body.price && !req.body.price== "" && ! req.body.price == 0){
    //             await newContract && newContract.setPriceToken(req.body.price).send().then(async output => {
    //                 let response = '{"status":"true","price":"'+req.body.price+'", "hash" : "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to set Prie of Tokens , Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid price & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // setRewardPercentage: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.percentage);
    //         var percentage = (data).toFixed(2)*100;

    //         if(percentage && !percentage== "" && ! percentage == 0){
    //             await newContract && newContract.setRewardPercentage(percentage).send().then(async output => {
    //                 let response = '{"status":"true","percentage":"'+percentage+'", "hash" : "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to set Reward Percentage , Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid percentage & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // setPenaltyPercentage: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.percentage);
    //         var percentage = (data).toFixed(2)*100;

    //         if(percentage && !percentage== "" && ! percentage == 0){
    //             await newContract && newContract.setPenaltyPercentage(percentage).send().then(async output => {
    //                 let response = '{"status":"true","percentage":"'+percentage+'", "hash" : "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to set Penalty Percentage , Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid percentage & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // setWithdrawPenaltyPercentage: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.percentage);
    //         var percentage = (data).toFixed(2)*100;

    //         if(percentage && !percentage== "" && !percentage == 0){
    //             await newContract && newContract.setWithdrawPenaltyPercentage(percentage).send().then(async output => {
    //                 let response = '{"status":"true","percentage":"'+percentage+'", "hash" : "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to set Withdraw Penalty Percentage , Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid percentage & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // performStakingToken: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.amount);
    //         var amount = (data).toFixed(6)*1000000;

    //         if(amount && req.body.time && !amount== "" && !req.body.time=="" && ! amount == 0 ){
    //             await newContract && newContract.performStaking(amount, req.body.time).send().then(async output => {
    //                 let response = '{"status":"true","amount":"'+amount+'", "hash" : "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to perform Staking of Token , Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid Amount or Time & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },

    // withdrawStakingToken: async (req, res) => {
    //     if (req.body.privateKey && ! req.body.privateKey == "") {
    //         const tronWeb = new TronWeb(
    //             fullNode,
    //             solidityNode,
    //             eventServer,
    //             req.body.privateKey
    //         );
    //         tronWeb.setDefaultBlock('latest');
    //         var newContract = await tronWeb.contract().at('TUWmF7WGCQsTnats4wDXxMQ5yHU9XFd5DW');
    //         var data = parseFloat(req.body.amount);
    //         var amount = (data).toFixed(6)*1000000;

    //         if(amount && !amount== "" && ! amount == 0 ){
    //             await newContract && newContract.withdrawStakedTokens(amount).send().then(async output => {
    //                 let response = '{"status":"true","amount":"'+amount+'", "hash" : "'+output+'"}';
    //                 res.send(JSON.parse(response));
    //             }).catch(err => {
    //                 let response = '{"status":"false","message":"Unable to Withdraw Staked Token , Try Again!!!"}';
    //                 res.send(JSON.parse(response));
    //             });
    //         } else {
    //             let response = '{"status":"false","message":"Enter Valid Amount & Try Again!!!"}';
    //             res.send(JSON.parse(response));
    //         }
    //     } else {
    //         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
    //         res.send(JSON.parse(response));
    //     }
    // },
    
}
