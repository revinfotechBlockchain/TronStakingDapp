const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const axios = require('axios');
const WAValidator = require('@swyftx/api-crypto-address-validator')


//----------------------MAINNET-----------------------------------
// const fullNode = new HttpProvider('https://api.trongrid.io'); // Full node http endpoint
// const solidityNode = new HttpProvider('https://api.trongrid.io'); // Solidity node http endpoint
// const eventServer = new HttpProvider('https://api.trongrid.io');

//----------------------TESTNET---------------------------------------------------------------------------
var fullNode = new HttpProvider('https://api.shasta.trongrid.io'); // Full node http endpoint
var solidityNode = new HttpProvider('https://api.shasta.trongrid.io'); // Solidity node http endpoint
var eventServer = new HttpProvider('https://api.shasta.trongrid.io'); // Contract events http endpoint
var DemoPrivateKey = "d346e8b191f384a5ae31ca907ccc17ae013ccda576e73412d00b6b4ed9152fe4";


module.exports = {

    getTokenTransactionsByAddress: async (req, res) => {
        var returnData= [];
        if (req.query.address && !req.query.address == "") {
            axios.get('https://api.shasta.trongrid.io/v1/accounts/'+req.query.address+'/transactions/trc20').then(output=>{
                var dataoutput = output.data.data;
                if (output) {
                    dataoutput.forEach(element => {
                        if(req.query.address == element.from && element.token_info.name == 'RYZ') 
                        returnData.push({
                                    day: element.block_timestamp,
                                    type: element.type,
                                    address: element.from,
                                    amount: element.value,
                                    txid: element.transaction_id,
                                });
                    });
                }
               res.send({status:true, address:req.query.address, data:returnData});
            }).catch(err => {
                let response = {status:false, message:"Unable to get Transaction Details, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Address & Try Again!!!"};
            res.send(response);
        }
    },

    getbitcoinBalanceByAddress: async (req, res) => {
            if (req.query.address && !req.query.address == "") {
               await axios.get('https://api.blockcypher.com/v1/btc/test3/addrs/'+req.query.address+'/balance').then(async output=>{
                  let response = {status:true, data:output.data};
                  res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Balance by Address, Please Try Again!!!"};
                res.send(response);
            });
          } else {
            let response = {status:false, message:"Enter valid Address & Try Again!!!"};
            res.send(response);
        }
    },

    getbitcoinTransactionByHash: async (req, res) => {
            if (req.query.hash && !req.query.hash == "") {
               await axios.get('https://api.blockcypher.com/v1/btc/test3/txs/'+req.query.hash).then(async output=>{  
                  let response = {status:true, data:output.data};
                  res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Transaction Details by Hash, Please Try Again!!!"};
                res.send(response);
            });
          } else {
            let response = {status:false, message:"Enter valid Hash & Try Again!!!"};
            res.send(response);
        }
    },

    getbitcoinTransactionByAddress: async (req, res) => {
            if (req.query.address && !req.query.address == "") {
               await axios.get('https://api.blockcypher.com/v1/btc/test3/addrs/'+req.query.address).then(async output=>{
                  let response = {status:true, data:output.data};
                  res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Transaction Details by Address, Please Try Again!!!"};
                res.send(response);
            });
          } else {
            let response = {status:false, message:"Enter valid Hash & Try Again!!!"};
            res.send(response);
        }
    },

    validateAddress: async (req, res) => {
        
    const valid = WAValidator.validate(req.query.address, 'btc')
        if (valid) {
            let response = {status:true, message:"This is the Valid BTC Address"};
            res.send(response);
        } else {
            let response = {status:true, message:"This is the Not Valid BTC Address"};
            res.send(response);
        }
    },

    getStakingAddressById: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.id && !req.query.id == "" && !req.query.id == 0){
            await newContract && newContract.getStakingAddressById(req.query.id).call().then(async output => {
                let response = {status:true, address:output};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Staking Address by Id, Please Try Again!!!"};
                res.send(response);
            });
          } else {
            let response = {status:false, message:"Enter valid Id & Try Again!!!"};
            res.send(response);
        }     
    },

    getStakingTokenById: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.id && !req.query.id == "" && !req.query.id == 0){
            await newContract && newContract.getStakingTokenById(req.query.id).call().then(async output => {
                let response = {status:true, token:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Staking Token by Id, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id & Try Again!!!"};
            res.send(response);
        }     
    },

    getStakingStartTimeById: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.id && !req.query.id == "" && !req.query.id == 0){
            await newContract && newContract.getStakingStartTimeById(req.query.id).call().then(async output => {
                const unixEpochTimeMS = output * 1000;
                const d = new Date(unixEpochTimeMS);
                const time = d.toLocaleString();
                let response = {status:true, time:time};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Staking Start Time by Id, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id & Try Again!!!"};
            res.send(response);
        }     
    },

    getStakingEndTimeById: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.id && !req.query.id == "" && !req.query.id == 0){
            await newContract && newContract.getStakingEndTimeById(req.query.id).call().then(async output => {
                const unixEpochTimeMS = output * 1000;
                const d = new Date(unixEpochTimeMS);
                const time = d.toLocaleString();
                let response = {status:true, time:time};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Staking End Time by Id, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id & Try Again!!!"};
            res.send(response);
        }     
    },

    getActiveStakesById: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.id && !req.query.id == "" && !req.query.id == 0){
            await newContract && newContract.getActiveStakesById(req.query.id).call().then(async output => {
                let response = {status:true, address:output};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Active Stake by Id, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id & Try Again!!!"};
            res.send(response);
        }     
    },

    getReferralHistory: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.address && !req.query.address == ""){
            await newContract && newContract.getReferralHistory(req.query.address).call().then(async output => {
                let response = {status:true, address:output};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Referral History by Address, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Address & Try Again!!!"};
            res.send(response);
        }     
    },

    getTokenLockstatus: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.id && !req.query.id == "" && !req.query.id == 0){
            await newContract && newContract.getTokenLockstatus(req.query.id).call().then(async output => {
                let response = {status:true, lockstatus:output};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Token Transaction Status by Id, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id & Try Again!!!"};
            res.send(response);
        }     
    },

    getInterest: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

            await newContract && newContract.getInterest().call().then(async output => {
                let response = {status:true, interest:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Staking Address by Id, Please Try Again!!!"};
                res.send(response);
            });    
    },

    getDateOfClaimBTC: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.idClaimBTC && !req.query.idClaimBTC == "" && !req.query.idClaimBTC == 0){
            await newContract && newContract.getDateOfClaimBTC(req.query.idClaimBTC).call().then(async output => {
                const unixEpochTimeMS = output * 1000;
                const d = new Date(unixEpochTimeMS);
                const date = d.toLocaleString();
                let response = {status:true, date:date};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Date of Claimed BTC, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id of Claimed BTC & Try Again!!!"};
            res.send(response);
        }     
    },

    getBTCClaimCount: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

            await newContract && newContract.getBTCClaimCount().call().then(async output => {
                let response = {status:true, BTCClaimCount:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get BTC Claimed Count, Please Try Again!!!"};
                res.send(response);
            });    
    },

    getUserAddressForClaimBTC: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.idClaimBTC && !req.query.idClaimBTC == "" && !req.query.idClaimBTC == 0){
            await newContract && newContract.getUserAddressForClaimBTC(req.query.idClaimBTC).call().then(async output => {
                let response = {status:true, address:output};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get User Address for Claimed BTC, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id of Claimed BTC & Try Again!!!"};
            res.send(response);
        }     
    },

    getClaimedBTCAddress: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.idClaimBTC && !req.query.idClaimBTC == "" && !req.query.idClaimBTC == 0){
            await newContract && newContract.getClaimedBTCAddress(req.query.idClaimBTC).call().then(async output => {
                let response = {status:true, address:output};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Addresses for Claimed BTC, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id of Claimed BTC & Try Again!!!"};
            res.send(response);
        }     
    },

    getRawBTCAmount: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.idClaimBTC && !req.query.idClaimBTC == "" && !req.query.idClaimBTC == 0){
            await newContract && newContract.getRawBTCAmount(req.query.idClaimBTC).call().then(async output => {
                let response = {status:true, amount:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Raw BTC Amount, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id of Claimed BTC & Try Again!!!"};
            res.send(response);
        }     
    },

    getClaimedAmountByBTC: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TDhrCQvg6qDV9ikQ6WUqGVd9gJimtWurdL');

        if(req.query.idClaimBTC && !req.query.idClaimBTC == "" && !req.query.idClaimBTC == 0){
            await newContract && newContract.getClaimedAmountByBTC(req.query.idClaimBTC).call().then(async output => {
                let response = {status:true, amount:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to Claimed Amount by BTC, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id of Claimed BTC & Try Again!!!"};
            res.send(response);
        }     
    },

}

  


  