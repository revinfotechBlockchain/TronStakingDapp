const TronWeb = require('tronweb');
const axios = require('axios');
// This provider is optional, you can just use a url for the nodes instead
const HttpProvider = TronWeb.providers.HttpProvider;
//var config = require('./config.json');

//----------------------MAINNET-----------------------------------
// const fullNode = new HttpProvider('https://api.trongrid.io'); // Full node http endpoint
// const solidityNode = new HttpProvider('https://api.trongrid.io'); // Solidity node http endpoint
// const eventServer = new HttpProvider('https://api.trongrid.io');

//----------------------TESTNET------------------------------------
var fullNode = new HttpProvider('https://api.shasta.trongrid.io'); // Full node http endpoint
var solidityNode = new HttpProvider('https://api.shasta.trongrid.io'); // Solidity node http endpoint
var eventServer = new HttpProvider('https://api.shasta.trongrid.io'); // Contract events http endpoint

module.exports = {


// createAccount:  async (req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//             ""
//     );
//     let return_val = {
//         status: false,
//         data: ""  }
//     tronWeb.setDefaultBlock('latest');

//     await tronWeb.createAccount().then(output => {
//         return_val.status = true;
//         return_val.data = output;
//         res.send(return_val);
//         //res.send(account)
//     }).catch(err => {
//         let response = '{"status":"false","message":"Unable to get Create Account, Try Again!!!"}';
//         res.send(JSON.parse(response));
//     })
// },

// getAccount: async (req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         ""
//     );
//     let return_val = {
//         status: false,
//         data: ""  }
//     tronWeb.setDefaultBlock('latest');
//     if (req.query.address && !req.query.address == "") {
//         await  tronWeb.trx.getAccount(req.query.address).then(output => {
//             return_val.status = true;
//             return_val.data = output;
//             res.send(return_val);
//         }).catch(err => {
//             let response = '{"status":"false","message":"Unable to get account detail, Try Again!!!"}';
//             res.send(JSON.parse(response));
//         });
//     }
//     else{
//         let response = '{"status":"false","message":"Enter valid Address & Try Again!!!"}';
//         res.send(JSON.parse(response));
//     }
// },

// getBalance:  async(req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         ""
//     );
//     tronWeb.setDefaultBlock('latest');
//     if (req.query.address && !req.query.address == "") {
//         await  tronWeb.trx.getBalance(req.query.address).then(output => {
//             let response = '{"status":"true", "address": "'+req.query.address+'", "balance": "'+output.toString()+'"}';
//             res.send(JSON.parse(response));
//         }).catch(err => {
//             let response = '{"status":"false","message":"Unable to get Balance Details, Please Try Again!!!"}';
//             res.send(JSON.parse(response));
//         });
//     }
//     else{
//         let response = '{"status":"false","message":"Enter valid Address & Try Again!!!"}';
//         res.send(JSON.parse(response));
//     }
// },

// getBandwidth: async (req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         ""
//     );
//     tronWeb.setDefaultBlock('latest');
//     if (req.query.address && !req.query.address == "") {
//         await tronWeb.trx.getBandwidth(req.query.address).then(output => {
//         let response = '{"status":"true", "address": "'+req.query.address+'", "bandwidth": '+output.toString()+'}';
//         res.send(JSON.parse(response));
//         }).catch(err => {
//             let response = '{"status":"false","message":"Unable to get Account Bandwidth, Please Try Again!!!"}';
//             res.send(JSON.parse(response));
//         });
//     } else {
//         let response = '{"status":"false","message":"Enter valid Address & Try Again!!!"}';
//         res.send(JSON.parse(response));
//     }
// },

// sendTRX: async (req, res) => {
//     if (req.body.privateKey && !req.body.privateKey== "") {
//         const tronWeb = new TronWeb(
//             fullNode,
//             solidityNode,
//             eventServer,
//             req.body.privateKey
//         );
//         tronWeb.setDefaultBlock('latest');
//         if (req.body.address && req.body.amount && !req.body.address== "" && !req.body.amount == 0) {
//             await  tronWeb.transactionBuilder.sendTrx(req.body.address, req.body.amount).then(output => {
//                 res.send(output);
//             }).catch(err => {
//                 res.status(400);
//                 res.send({"message": err})
//             });
//         } else {
//             let response = '{"status":"false","message":"Enter Valid Address or Amount & Try Again!!!"}';
//             res.send(JSON.parse(response));
//         }
//     } else {
//         let response = '{"status":"false","message":"Enter Valid Private Key & Try Again!!!"}';
//         res.send(JSON.parse(response));
//     }
// },

// getTransactionInfo: async (req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         ""
//     );
//     let return_val = {
//         status: false,
//         data: "" }
//     tronWeb.setDefaultBlock('latest');
//     if (req.query.hash && !req.query.hash == "") {
//       await  tronWeb.trx.getTransactionInfo(req.query.hash).then(output => {
//         return_val.status = true;
//         return_val.data = output;
//         res.send(return_val);
//         }).catch(err => {
//             let response = '{"status":"false","message":"Unable to get Transaction Details, Please Try Again!!!"}';
//             res.send(JSON.parse(response));
//         });
//     } else {
//         let response = '{"status":"false","message":"Enter valid Hash & Try Again!!!"}';
//         res.send(JSON.parse(response));
//     }
// },

// getTransactionByHash: async (req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         ""
//     );
//     let return_val = {
//         status: false,
//         data: "" }
//     tronWeb.setDefaultBlock('latest');

//     if (req.query.hash && !req.query.hash == "") {
//       await  tronWeb.trx.getTransaction(req.query.hash).then(output => {
//             return_val.status = true;
//             return_val.data = output;
//             res.send(return_val);
//         }).catch(err => {
//             let response = '{"status":"false","message":"Unable to get Transaction Details by Hash, Please Try Again!!!"}';
//             res.send(JSON.parse(response));
//         });
//     } else{
//         let response = '{"status":"false","message":"Enter valid Hash & Try Again!!!"}';
//         res.send(JSON.parse(response));
//     }
// },

// getTransactionsByAddress: async (req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         ""
//     );
    
//     if (req.query.address && !req.query.address == "") {
//         axios.get('https://api.shasta.trongrid.io/v1/accounts/'+req.query.address+'/transactions').then(output=>{
//            res.send(output.data);
//         }).catch(err => {
//             let response = {status:false,message:"Unable to get Transaction Details by Address, Please Try Again!!!"};
//             res.send(response);
//         });
//     } else{
//         let response = '{"status":"false","message":"Enter valid Address & Try Again!!!"}';
//         res.send(JSON.parse(response));
//     }
// },

// getTransactionByBlock: async (req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         ""
//     );
//     let return_val = {
//         status: false,
//         data: "" }
//     tronWeb.setDefaultBlock('latest');
//     if (req.query.block && !req.query.block == "") {
//         await tronWeb.trx.getTransactionFromBlock(req.query.block).then(async output => {
//             return_val.status = true;
//             return_val.data = output;
//             res.send(return_val);
//         }).catch(err => {
//             let response = '{"status":"false","message":"Unable to get Transaction Details by Block, Please Try Again!!!"}';
//             res.send(JSON.parse(response));
//         });
//     } else {
//         let response = '{"status":"false","message":"Enter valid Hash & Try Again!!!"}';
//         res.send(JSON.parse(response));
//     }
// },

// getStatus: async (req, res) => {
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         ""
//     );
//     let return_val = {
//         status: false,
//         data: ""}
//     tronWeb.setDefaultBlock('latest');
//     await tronWeb.trx.getCurrentBlock().then(output => {
//         return_val.status = true;
//         return_val.data = output;
//         res.send(return_val);
//     }).catch(err => {
//         let response = '{"status":"false","message":"Unable to get Status, Please Try Again!!!"}';
//         res.send(JSON.parse(response));
//     })
//  },
}