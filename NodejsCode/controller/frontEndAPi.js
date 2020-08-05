const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const axios = require('axios');
var _ = require('lodash');
const mongoose = require('mongoose');
var db = require('../db/db.js');
var cron = require('node-cron');
const referalManager = mongoose.model('ReferalManager');
var cryptoRandomString = require("crypto-random-string");
const UserAddressAndStakeID = mongoose.model('UserAddressAndStakeID');
const TransformTokens = mongoose.model('TransformTokens');
const BTCDatabase = mongoose.model('BTCDatabase');


//----------------------MAINNET-----------------------------------
// const fullNode = new HttpProvider('https://api.trongrid.io'); // Full node http endpoint
// const solidityNode = new HttpProvider('https://api.trongrid.io'); // Solidity node http endpoint
// const eventServer = new HttpProvider('https://api.trongrid.io');

//----------------------TESTNET------------------------------------
var fullNode = new HttpProvider('https://api.shasta.trongrid.io'); // Full node http endpoint
var solidityNode = new HttpProvider('https://api.shasta.trongrid.io'); // Solidity node http endpoint
var eventServer = new HttpProvider('https://api.shasta.trongrid.io'); // Contract events http endpoint
var DemoPrivateKey = "d346e8b191f384a5ae31ca907ccc17ae013ccda576e73412d00b6b4ed9152fe4";
// var ContractAddress  = "TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL";

var ContractAddress  = "TQYtdNhTi4dCmVHiyaQ6gad8ZpJRm55tTd";


// cron.schedule('*/5 * * * * *', async () => {
//     console.log("Cron for Staker executed")
//     var startUpdatesIndex = 1;
//     // await UserAddressAndStakeID.find().sort({StakeId:-1}).limit(1).then(
//     //   async function(doc) {
//         // if(doc != ''){
//             ////console.log("Here",startUpdatesIndex)
//             // var raw = doc[0].StakeId
//             // startUpdatesIndex = parseInt(raw)+1;
//             ////console.log("Here0.1",startUpdatesIndex)
//         // }
//         // else{
//             //console.log("Here2")
//             // startUpdatesIndex = 0;
//             //console.log("This is startUpdates Index", startUpdatesIndex)
//         // }
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         DemoPrivateKey
//         );
//         //console.log("Here3")
//     tronWeb.setDefaultBlock('latest');
//     var newContract = await tronWeb.contract().at(ContractAddress);
//     await newContract.getStakingCount().call().then(async output => {
//         //console.log("Here4",output.toString(), startUpdatesIndex)
//     //console.log(output.toString());
//         for (i=startUpdatesIndex;i<=output.toString();i++){
//             var id = i;
//             //console.log(i, startUpdatesIndex,output.toString())
//             await newContract.getTokenLockstatus(id).call().then(async out => {
//                 //console.log("Staking status",out.toString());
//                 await newContract.getStakingTokenById(id).call().then(async out1 => {
//                     //console.log("Amount of token on this ID",out1.toString());
//                     await newContract.getStakingStartTimeById(id).call().then(async out2 => {
//                         //console.log("Stake start time",out2.toString());
//                         await newContract.getStakingEndTimeById(id).call().then(async out3 => {
//                             //console.log("Stake end time",out3.toString());
//                             await newContract.getActiveStakesById(id).call().then(async out4 => {
//                                 //console.log("Address of Staker",out4.toString());
//                                    if(out4.toString() != '', out3.toString() != '',out2.toString()!='',out1.toString()!='',out.toString()!='')
//                                     // var userAddressAndStakeID = new UserAddressAndStakeID();
//                                             // userAddressAndStakeID.StakeId = id;
//                                             // userAddressAndStakeID.StakerAddress = TronWeb.address.fromHex(out4.toString());
//                                             // userAddressAndStakeID.StakingStartTime = out2.toString();
//                                             // userAddressAndStakeID.StakingEndTime = out3.toString();
//                                             // userAddressAndStakeID.StakerTokens = out1.toString();
//                                             // userAddressAndStakeID.TokenTransactionstatus = out.toString();
//                                             // userAddressAndStakeID.Amount = 0;
//                                             // userAddressAndStakeID.Interest = 0;
//                                             // await userAddressAndStakeID.save({StakeId:i},(err, doc) => {
//                                             var obj =  { StakeId : id , StakerAddress : TronWeb.address.fromHex(out4.toString()) , StakingStartTime : out2.toString(), StakingEndTime : out3.toString() , StakerTokens : (out1.toString()/1000000).toFixed(6),  TokenTransactionstatus : out.toString() , Amount : 0 ,Interest : 0 , BigPayDay : 0, Shares : 0};
//                                             await UserAddressAndStakeID.findOneAndUpdate({StakeId:id},obj,{new: true, upsert: true},(err, doc) => {
//                                             if (!err){
//                                             startUpdatesIndex = 1;
//                                             console.log("New Entry Added in Staker Corn") 
//                                             //console.log({response:'update successful!!'});
//                                             }
//                                             else {
//                                             console.log({error :'Error during Json insertion insertion : ' + err});
//                                             }
//                                         });
//                             }).catch(err => {
//                                 //console.log(err);
//                             });
//                         }).catch(err => {
//                             //console.log(err);
//                         });
//                     }).catch(err => {
//                         //console.log(err);
//                     });
//                 }).catch(err => {
//                     //console.log(err);
//                 });
//             }).catch(err => {
//                 //console.log(err);
//             });
//         }
// }).catch(err => {
// console.log(err);
// });
// // });
// });


// cron.schedule('20 * * * * *', async () => {
//     //console.log("Cron for BTC Claim tokens")
//     var startUpdatesIndex = 1;
//     // await BTCDatabase.find().sort({Id:-1}).limit(1).then(
//     //   async function(doc) {
//     //     if(doc != ''){
//     //         //console.log("Here",startUpdatesIndex)
//     //         var raw = doc[0].Id
//     //         startUpdatesIndex = parseInt(raw)+1;
//     //         //console.log("Here0.1",startUpdatesIndex)
//     //     }
//     //     else{
//     //         //console.log("Here2")
//     //         startUpdatesIndex = 1;
//     //         //console.log("This is startUpdates Index", startUpdatesIndex)
//     //     }
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         DemoPrivateKey
//         );
//         //console.log("Here3")
//     tronWeb.setDefaultBlock('latest');
//     var newContract = await tronWeb.contract().at(ContractAddress);
//     await newContract.getBTCClaimCount().call().then(async output => {
//         //console.log("Here4",output.toString(), startUpdatesIndex)
//     //console.log(output.toString());
//         for (i=startUpdatesIndex;i<=output.toString();i++){
//             var id = i;
//             //console.log(i, startUpdatesIndex,output.toString())
//             await newContract.getUserAddressForClaimBTC(id).call().then(async out => {
//                 //console.log("Staking status",out.toString());
//                 await newContract.getClaimedBTCAddress(id).call().then(async out1 => {
//                     //console.log("Amount of token on this ID",out1.toString());
//                     await newContract.getRawBTCAmount(id).call().then(async out2 => {
//                         //console.log("Stake start time",out2.toString());
//                         await newContract.getClaimedAmountByBTC(id).call().then(async out3 => {
//                             //console.log("Stake end time",out3.toString());
//                             await newContract.getDateOfClaimBTC(id).call().then(async out4 => {
//                                 //console.log("Address of Staker",out4.toString());
//                                    if(out4 != '', out3 != '',out2!='',out1!='',out!='')
//                                 //    console.log("1",out, "2",out1.toString(), "3",out2.toString(), "4",out3.toString(), "5",out4.toString(), "6",output.toString()) 
//                                 //    var bTCDatabase = new BTCDatabase();
//                                             // bTCDatabase.Id = id;
//                                             // bTCDatabase.Day = out4.toString();
//                                             // bTCDatabase.BTCAddress = out1;
//                                             // bTCDatabase.BTCAmount = out2.toString();
//                                             // bTCDatabase.ClaimRYZ = out3.toString();
//                                             // bTCDatabase.UserTronAddress = TronWeb.address.fromHex(out);
//                                             var obj = {Id:id ,Day: out4.toString() ,BTCAddress: out1,BTCAmount:out2.toString(),ClaimRYZ:out3.toString(),UserTronAddress: TronWeb.address.fromHex(out)}
//                                             await BTCDatabase.findOneAndUpdate({Id:id},obj,{new: true, upsert: true},(err, doc) => {
//                                             if (!err){
//                                             startUpdatesIndex = 1;
//                                             console.log("New Entry Added in BTC claim") 
//                                             //console.log({response:'update successful!!'});
//                                             }
//                                             else {
//                                             console.log({error :'Error during Json insertion insertion : ' + err});
//                                             }
//                                         });
//                             }).catch(err => {
//                                 //console.log(err);
//                             });
//                         }).catch(err => {
//                             //console.log(err);
//                         });
//                     }).catch(err => {
//                         //console.log(err);
//                     });
//                 }).catch(err => {
//                     //console.log(err);
//                 });
//             }).catch(err => {
//                 //console.log(err);
//             });
//         }
// }).catch(err => {
// //console.log(err);
// });
// });
// // });

// //   0 0 0 * * *
// //    20 * * * * *


// cron.schedule('0 0 0 * * *', async () => {
//     //console.log("Transform Cron Executed")
//     let date_ob = new Date();
//     // if (date_ob.getHours() == 0 && date_ob.getMinutes() < 3){
//     //console.log("Cron Executed at this time", date_ob.getHours(),date_ob.getMinutes())
//     //Here we get the last index of date for the sale 
//     var indexDate = 0;
//     await TransformTokens.find().sort({Day:-1}).limit(1).then(
//         async function(doc) {
//           if(doc != ''){
//               //console.log("Here",startUpdatesIndex)
//               var raw = doc[0].Day
//               indexDate = parseInt(raw)+1;
//               //console.log("Here0.1",startUpdatesIndex)
//           }
//           else{
//               //console.log("Here2")
//               indexDate = 0;
//               //console.log("This is startUpdates Index", startUpdatesIndex)
//     }
//     const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         DemoPrivateKey
//         );
//         //console.log("Here3")
//     tronWeb.setDefaultBlock('latest');
//     var newContract = await tronWeb.contract().at(ContractAddress);
//     await newContract.getpurchaseableTokensAddress().call().then(async out3 => {
//         await newContract.balanceOf(TronWeb.address.fromHex(out3.toString())).call().then(async out4 => {
//             await newContract.getTotalTrx().call().then(async out1 => {
//                 await newContract.getPriceToken().call().then(async out2 => {
//                     var transformTokens = new TransformTokens();
//                         transformTokens.Day = indexDate;
//                         transformTokens.RYZAvailable = (parseInt(out4)/1000000).toFixed(6);
//                         transformTokens.TotalTRX = (parseInt(out1)/1000000).toFixed(6);
//                         transformTokens.RYZTRX = parseInt(out2);
//                         transformTokens.Closing = 0;
//                         transformTokens.YourRYZ = 0;
//                         transformTokens.YourTRX = 0;
//                         await transformTokens.save({Day:indexDate},(err, doc) => {
//                         if (!err){
//                         startUpdatesIndex = 0;
//                         console.log({response:'update successful for transform cron!!'});
//                         }
//                         else {
//                         console.log({error :'Error during Json insertion insertion : ' + err});
//                         }         
//                     });    
//                 });
//             });
//         });
//     });
// });
// // }
// // else{
// //     console.log("Not reset time")
// // }
// });

module.exports = {

    //API for Transform
    getServerTime: async(req, res) =>{
        let date_ob = new Date();
        res.send({Hours : 24 - date_ob.getHours(),Min : 60 - date_ob.getMinutes(),Sec:  60 - date_ob.getSeconds()});
    },
    getContractAddress: async(req, res) =>{
        res.send({status : true, address: ContractAddress });
    },
    getAvailableRYZForTransform : async(req, res) =>{
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at(ContractAddress);

        await newContract && newContract.getpurchaseableTokens().call().then(async output => {
            let response = {status:true,purchaseableTokens:output.toString()};
            res.send(response);
        }).catch(err => {
            let response = {status:false,message:"Unable to get purchaseable Tokens, Try Again!!!"};
            res.send(response);
        });
    },
    getTokenTransactionsByAddress: async (req, res) => {
        var returnData= [];
        if (req.query.address && !req.query.address == "") {
            axios.get('https://api.shasta.trongrid.io/v1/accounts/'+req.query.address+'/transactions/trc20').then(output=>{
                var dataoutput = output.data.data;
                if (output) {
                    dataoutput.forEach(element => {
                        // console.log(element);
                        if(req.query.address == element.from && element.token_info.address == ContractAddress)
                        if(req.query.address == element.from)
                        returnData.push({
                                    day: element.block_timestamp,
                                    type: element.type,
                                    address: element.to,
                                    amount: element.value/1000000,
                                    txid: element.transaction_id,
                                });
                    });
                }
               res.send({status:true,address:req.query.address,data:returnData});
            }).catch(err => {
                //console.log(err)
                let response = {status:false,message:"Unable to get Transaction Details, Try Again!!!"};
                res.send(response);
            });
        } else{
            let response = {status:false,message:"Enter valid Address & Try Again!!!"};
            res.send(response);
        }
    },
    getTotalEth : async(req, res) =>{
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at(ContractAddress);
        await newContract && newContract.getTotalEth().call().then(async output => {
            let response = {status:true,address:output.toString()};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get total ETH, Please Try Again!!!"};
            res.send(response);
        });
    },
    getTrxBalance:  async(req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            ""
        );
        tronWeb.setDefaultBlock('latest');
        if (req.query.address && !req.query.address == "") {
            await  tronWeb.trx.getBalance(req.query.address).then(output => {
                let response = {status:true,address:req.query.address,balance:(parseFloat(output)/1000000).toFixed(6)};
                res.send(response);
            }).catch(err => {
                //console.log(err)
                let response = {status:false, message:"Unable to get Balance Details, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Address & Try Again!!!"};
            res.send(response);
        }
    },
    getTokenBalance: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at(ContractAddress);
      
        if(req.query.address && !req.query.address == ""){
            await newContract && newContract.balanceOf(req.query.address).call().then(async output => {
                let response = {status:true,address:req.query.address,balance:output.toString()/1000000};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Owner balance, Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Address & Try Again!!!"};
            res.send(response);
        }
    },
    getTokenPrice: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at(ContractAddress);

        await newContract && newContract.getPriceToken().call().then(async output => {
            let response = {status:true,priceOfToken:output/100};
            res.send(response);
        }).catch(err => {
            let response = {status:false,message:"Unable to get price of Tokens, Try Again!!!"};
            res.send(response);
        });
    },
    withdrawMyPurchasedTokens: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at(ContractAddress);

                await newContract && newContract.getMyPurchasedTokens().send().then(async output => {
                res.send(output);
                }).catch(err => {
                    let response = {status:false, message:"Unable to get purchased token, Please Try Again!!!"};
                    res.send(response);
                });
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },





    //API for Referral
    getReferalLinkByAddress : async(req, res) =>{
        var referalCode = cryptoRandomString({length:32, type: 'numeric'});
        var ReferalManager = new referalManager();
            if(req.query.address != ""){
            ReferalManager.UserAddress = req.query.address;
            ReferalManager.Used = false;
            ReferalManager.Date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
            ReferalManager.UsedAddress = "0";
            ReferalManager.ReferalCode = referalCode;
            ReferalManager.Amount = 0;
            ReferalManager.Details = "Not Used"
            ReferalManager.save((err, doc) => {
            if (!err)
            console.log({response:'update successful!!'});
            else{
            console.log({error :'Error during Json insertion insertion : ' + err});
            }
        });
    }
    res.send({referralLink: "https://www.royalstarz.io/index.html?r="+req.query.address+"/"+referalCode})
    },
    getAllReferalsByAddress: async (req, res) => {
        let obj = [];
        referalManager.find((err, docs) => {
        if (!err) {
        res.send(docs);
        }
        else {
        //console.log({error :'Error in getting details :' + err});
        }
        });
        },
    getReferralAmount: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at(ContractAddress);
            await newContract && newContract.getReferralAmount().call().then(async output => {
                let response = {status:true, amount:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Referral Amount, Try Again!!!"};
                res.send(response);
            });
        },  
        getReferralHistory: async (req, res) => {
            var obj =[];
            var query = {UserAddress : req.query.address}
            referalManager.find(query).then(data =>
                {
                    if(data == null){
                        res.send({status : false , response:"No referral"})
                    }
                    else if (data != null){
                        res.send({status : true , response:data})
                    }
                //console.log(data);
            });
        },
        withdrawReferral: async (req, res) => {
            try{var obj =[];
            var address = req.body.referralLink;
            var spl = (address.split("="));
            var spl2 = spl[1].split("/");
            var addr = spl2[0];
            var query = { ReferalCode: spl2[1]}
            var query2 ={ UsedAddress: addr }
            referalManager.findOne(query).then(async data =>
                {
                referalManager.findOne(query2).then(async data2 =>{
                    console.log("This is data and data2", data, data2, req.body.address)
                    if(!data || addr == req.body.address){
                        res.send({status : false , response:"Invalid Referral Code"});
                    }
                    else if(data.Used == true){
                        res.send({status : false, response: "Referral Link Already Used"});
                    }
                    else if (data.Used == false){
                        console.log("Here you are1")
                        const tronWeb = new TronWeb(
                            fullNode,
                            solidityNode,
                            eventServer,
                            DemoPrivateKey
                        );
                        tronWeb.setDefaultBlock('latest');
                        var newContract = await tronWeb.contract().at(ContractAddress);
                        // console.log("Here you are")
                        if(addr && !addr== ""){
                            await newContract && newContract.getReferralAmount().call().then(async amnt => {
                                referalManager.updateOne(query, {
                                    UserAddress: data.UserAddress,
                                    Used: true,
                                    Date: data.Date,
                                    UsedAddress: req.body.address,
                                    ReferalCode: data.ReferalCode,
                                    Amount: "10",
                                    Details: 'Used',
                                }, function(err, resp) {
                                    if (!err){
                                    let response = {status: true, message:"You can proceed with the refer!!!", ReferralAddress: addr};
                                    console.log(response)
                                    res.send(response);
                                    console.log("1 document updated");
                                    }
                                    else{
                                    console.log(err)
                                    let response = {status:false, message:"Invalid or Expired Referral Code!!!"};
                                    console.log(response)
                                    res.send(response);
                                    }
                                  });
                                
                            }).catch(err => {
                                let response = {status:false, message:"Unable to Withdraw Referral Amount, Please Try Again!!!"};
                                console.log(response, err)
                                res.send(response);
                            });
                        } else {
                            let response = {status: false , message:"Invalid or Expired Referral Code!!!"};
                            console.log(response)
                            res.send(response);
                        }
                    }
                    else{
                        res.send({status : false , response: "Invalid or Expired Referral Code or Code already used!!!"})
                    }
                console.log(data);
              });
            });}
            catch(err){
                console.log(err)
                res.send({status : false , response: "Invalid or Expired Referral Code!!!"})
            }
        },

        deleteRecord: async (req, res)=>{
            referalManager.remove((err, doc) => {
            if (!err) { res.send({response:'Deleted Successful'}); }
            else {
            //console.log({error :'Error during record update : ' + err});
            }
            })
        },





        //API for Stakes and addresses
        getAllStakesById: async (req, res) => {
            let obj = [];
            UserAddressAndStakeID.find((err, docs) => {
            if (!err) {
            res.send(docs);
            }
            else {
            //console.log({error :'Error in getting details :' + err});
            }
            });
            },
        deleteRecordByStakeId: async (req, res)=>{
            UserAddressAndStakeID.remove((err, doc) => {
                if (!err) { res.send({response:'Deleted Successful'}); }
                else {
                //console.log({error :'Error during record update : ' + err});
                }
                })
            },

        getActiveStakesByUserAddress: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at(ContractAddress);
            await newContract && newContract.getRewardPercentage().call().then(async output => {
            let obj = [];
            UserAddressAndStakeID.find({StakerAddress : req.query.address},(err, docs) => {
            if (!err) {
                docs.forEach(element => {
                    console.log(element.TokenTransactionstatus)
                    if(element.TokenTransactionstatus == 'false'){
                        element.Interest = (parseFloat(output)/100).toFixed(6);
                        // element.Amount = (((parseInt(element.StakerTokens) * output )/10000) * Math.floor((parseInt(element.StakingEndTime) - Math.floor(new Date() / 1000))/86400)).toFixed(6)
                        if(element.StakingEndTime/86400 > Date.now()/86400000)
                        element.Amount = (parseFloat(element.StakerTokens) + (parseFloat(element.StakerTokens) * (parseFloat(output)).toFixed(6))/10000 * (element.StakingEndTime - Date.now()/1000)/86400).toFixed(6);
                        else
                        element.Amount = (parseFloat(element.StakerTokens) + (parseFloat(element.StakerTokens) * (parseFloat(output)).toFixed(6))/10000 * (element.StakingEndTime - element.StakingStartTime)/86400).toFixed(6);
                      obj.push(element)
                    }
                });
                res.send(obj);
            }
            else {
            //console.log({error :'Error in getting details :' + err});
            }
            });
        });
            },

        getStakeHistoryByUserAddress :async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at(ContractAddress);
            await newContract && newContract.getRewardPercentage().call().then(async output => {
                UserAddressAndStakeID.find({StakerAddress : req.query.address},async (err, docs) => {
                if (!err) {
                let obj = [];
                var itx = 0;
                docs.forEach(async element => {
                    if(element.TokenTransactionstatus != 'false'){
                         newContract && newContract.getFinalWithdrawlStake(element.StakeId).call().then(async out2 => {
                            element.Interest = output.toString()/100;
                            element.Amount = out2.toString()/1000000;
                            //   element.Amount = (parseFloat(element.StakerTokens) + ((element.StakerTokens * output)/10000) * (element.StakingEndTime - element.StakingStartTime)/86400).toFixed(6);
                            //   element.Amount = (element.StakerTokens * output.toString()/100 * (element.StakingEndTime - element.StakingStartTime)/86400).toFixed(6);
                            // console.log("This is the element", element)
                             obj.push(element);
                             console.log(docs.length, parseInt(itx) + 1)
                             if(docs.length == parseInt(itx) + 1){
                                // console.log(obj)
                                res.send(obj);
                             }
                            itx = parseInt(itx) + 1;
                            }).catch(err => {
                                console.log(err)
                            });
                        }
                        else{
                            itx = parseInt(itx) + 1;
                        }                     
                    });
                }
                else {
                console.log({error :'Error in getting details :' + err});
                }
                });
            // 
        });
        },
    // getreferalLinkforAddress : async (req, res) => {
    //         var ReferalManager = new referalManager();
    //         if(req.query.address){
    //         var referalCode = cryptoRandomString({length:32, type: 'base64'});
    //         ReferalManager.UserAddress = req.query.address;
    //         ReferalManager.Used = false;
    //         ReferalManager.Date = Date.now();
    //         ReferalManager.UsedAddress = "0";
    //         ReferalManager.ReferalCode = referalCode;
    //         ReferalManager.save((err, doc) => {
    //         if (!err)
    //         res.send({response:'update successful!!'});
    //         else {
    //         console.log({error :'Error during Json insertion insertion : ' + err});
    //         }
    //     });
    // }
    // else{
    //     console.log({error :'Error in getting details :' + err});
    //     }
    // },

    getStakeDetails :async (req, res) => {
        console.log(Math.floor(parseFloat(req.query.endTime)));
        console.log(Math.floor((Math.floor(req.query.endTime) - Math.floor(new Date() / 1000))/86400))
        let now = 0;
        if(req.query.endTime !="", req.query.amount != ""){
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        await TransformTokens.find().sort({Day:-1}).limit(1).then(
            async function(doc) {
              if(doc != ''){
                  //console.log("Here",startUpdatesIndex)
                  var now = parseInt(doc[0].Day);
                  //console.log("Here0.1",startUpdatesIndex)
              
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at(ContractAddress);
        await newContract.calculateBigPayDayReward(req.query.amount,Math.floor((req.query.endTime))).call().then(async output => {
            await newContract.getRewardPercentage().call().then(async out1 => {
                console.log("This is output", parseFloat(output));
        // console.log(parseInt(Date.now()/1000),req.query.endTime,(req.query.endTime - parseInt(Date.now()/1000))/ 86400)
        // console.log(parseInt(((req.query.endTime - (Date.now()/10000))/ 86400) * output.toString()/10000 * req.query.amount) + parseInt(req.query.amount));
        let stakeBonus = (((parseFloat(req.query.amount) * out1 )/10000).toFixed(6) * Math.floor((Math.floor(req.query.endTime) - Math.floor(new Date() / 1000))/86400)).toFixed(6);
        let amountAfterStake = (parseFloat(req.query.amount) + parseFloat(stakeBonus)).toFixed(6);
        let bigPayDay = (parseFloat(output)).toFixed(6);
        let stakeShares = (parseFloat(req.query.amount) * 95.001).toFixed(6);
        let stakeRate = 2444000000;
        let startDay = now;
        let lastDay = now +  Math.floor((Math.floor(req.query.endTime) - Math.floor(new Date() / 1000))/86400);
        let endDay = lastDay + 1;
        res.send({stakeRate : stakeRate,stakeBonus: stakeBonus,finalAmount: amountAfterStake,bigPayDay : bigPayDay,stakeShares : stakeShares, startDay : startDay,lastDay: lastDay,endDay: endDay })
    });
  });}});
    }
    else{
      res.send("err")
    }
    },




     




    //API for TransformTable
    DeleteTransformTable : async (req, res) => {
        let obj = [];
        TransformTokens.remove((err, doc) => {
            if (!err) { res.send({response:'Deleted Successful'}); }
            else {
            console.log({error :'Error during record update : ' + err});
            }
            })
        },
    getAllTransformTableDataByAddress : async (req, res) => {
            let obj = [];
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
                );
                //console.log("Here3")
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at(ContractAddress);
            await newContract.getMyPurchasedTokens(req.query.address).call().then(async output => {
               await newContract.getpurchaseableTokensAddress().call().then(async out2 => {
                await newContract.balanceOf(TronWeb.address.fromHex(out2.toString())).call().then(async out3 => {
                    await newContract.getOpenOrderTrxAmountByAddress(req.query.address).call().then(async out1 => {
                        TransformTokens.find((err, docs) => {
                        if (!err && docs) {
                        // console.log(output.toString(), out1.toString())
                        // console.log(req.query.address);
                        docs[docs.length-1].RYZAvailable = (parseFloat(out3)/1000000).toFixed(6)
                        docs[docs.length-1].YourRYZ = (parseFloat(output)/1000000).toFixed(6);
                        docs[docs.length-1].YourTRX = (parseFloat(out1)/1000000).toFixed(6);
                        res.send(docs);
                        // console.log(docs[docs.length-1])
                        }
                        else {
                        console.log({error :'Error in getting details :' + err});
                        }
                        });
                    });
                });
            });
        });
    },
    purchaseRYZ: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at(ContractAddress);

                await newContract && newContract.purchaseTokens().send({callValue : req.body.value * 1000000}).then(async output => {
                res.send({status:true, message:output});
                }).catch(err => {
                    console.log(err)
                    let response = {status:false, message:"Unable to purchase token, Please Try Again!!!"};
                    res.send(response);
                });
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },
    withdrawPurchasedRYZ: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at(ContractAddress);

                await newContract && newContract.withdrawPurchasedToken().send().then(async output => {
                res.send(output);
                }).catch(err => {
                    let response = {status:false, message:"Unable to withdraw purchased token, Please Try Again!!!"};
                    res.send(response);
                });
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },










    //API for ClaimTokens By BTC address
    checkBTCAddress : async (req, res) => {
        if (req.query.address && !req.query.address == "") {
            await axios.get('https://api.blockcypher.com/v1/btc/main/addrs/'+req.query.address+'/balance').then(output=>{
             if(output.data.final_balance/100000000 < 0.1){
             res.send({status: false, message: "Insufficient UTXO in this address to claim!!!"})
             }
             else{
             res.send({status: true, message : "You can claim your RYZ with this address!!!"})
             }
         }).catch(err => {
             console.log(err.message)
             let response = {status:false, message:"Insufficient UTXO in this address to claim!!!"};
             res.send(response);
         });
       } else {
         let response = {status:false, message:"Insufficient UTXO in this address to claim!!!"};
         res.send(response);
        } 
    },
    getAllBTCRewardsByAddress :  async (req, res) => {
        let obj = [];
        BTCDatabase.find({UserTronAddress : req.query.address},(err, docs) => {
        if (!err) {
        res.send(docs);
        }
        else {
        console.log({error :'Error in getting details :' + err});
        }
        });
        },
    getAllBTCRewards :  async (req, res) => {
        let obj = [];
        BTCDatabase.find((err, docs) => {
        if (!err) {
        res.send(docs);
        }
        else {
        console.log({error :'Error in getting details :' + err});
        }
        });
        },
    resetAllBTCRewardsByAddress :  async (req, res) => {
        let obj = [];
        BTCDatabase.remove((err, doc) => {
            if (!err) { res.send({response:'Deleted Successful'}); }
            else {
            console.log({error :'Error during record update : ' + err});
            }
            })
        },
    genrateBitcoinMessage: async (req, res) => {
            const encodedTx = req.body.tx;
                    let response = {status:true, message:"RYZCLAIMBTCVERIFICATIONMESSAGE"};
                    res.send(response);
            },
    validateBitcoinSignature: async (req, res) => {
        try{
        var status = btcMsgVerifier.verifyMessage(req.query.address,req.query.signature,"RYZCLAIMBTCVERIFICATIONMESSAGE");
        console.log(status)
        if(req.query.signature && status == true){
            let response = {status:true, message:"Proceed to withdraw"};
            res.send(response);
        }
        else{
            let response = {status:false, message:"Invalid Signature To Claim RYZ"};
            res.send(response);
            }
        }
        catch(err){
            //console.log(err)
            let response = {status:false, message:"Invalid Signature To Claim RYZ"};
            res.send(response);
        }
        },
    getBTCBalance : async (req, res) => {
            if (req.query.address && !req.query.address == "") {
                await axios.get('https://api.blockcypher.com/v1/btc/main/addrs/'+req.query.address+'/balance').then(output=>{
                 var balance = output.data.final_balance;
                 res.send({status: true, message: balance})
                 
        });
    }
    else{
        res.send({status: false, message: "Unable to fetch balance"})
    }},
    
        






    //API for transfer tokens 
    transferRYZ: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at(ContractAddress);
            var data = parseFloat(req.body.amount);
            var amount = (data).toFixed(6)*1000000;

            if(req.body.toAddress && amount && ! req.body.toAddress == "" && ! amount == 0) {
                await newContract && newContract.transfer(req.body.toAddress,amount).send().then(async output => {
                    let response = {status:true, toAddress:req.body.toAddress, amount:amount, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to do transfer, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false,message:"Enter valid To address or amount and Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },































    getStakingTokensByAddress:  async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
          );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at(ContractAddress);

        if(req.query.address && !req.query.address== ""){
            await newContract && newContract.getRewardsDetailsByUser(req.query.address).call().then(async output => {
                //let response = '{"status":"true","address":"'+req.query.address+'", "hash" : "'+output+'"}';
                //res.send(JSON.parse(response));  
                res.send(output); 
            }).catch(err => {
                //console.log(err);
                //let response = '{"status":"false","message":"Unable to get reward details of User , Try Again!!!"}';
                //res.send(JSON.parse(response));
            });
        } else {
            let response = {status:false,message:"Enter Valid Address & Try Again!!!"};
            res.send(response);
        }
    },
    
}



