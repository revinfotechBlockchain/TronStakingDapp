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

    getTokenOwner: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            await newContract && newContract.getowner().call().then(async output => {
                const address = tronWeb.address.fromHex(output);
                let response = {status:true, address:address};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Owner Address, Please Try Again!!!"};
                res.send(response);
            });
    },

    getTokenOwnerBalance: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
          
            if(req.query.address && !req.query.address == ""){
                await newContract && newContract.balanceOf(req.query.address).call().then(async output => {
                    let response = {status:true, address:req.query.address, balance:output.toString()};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to get Owner balance, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter valid Address & Try Again!!!"};
                res.send(response);
            }
    },

    getTokenName: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.name().call().then(async output => {
                let response = {status:true, name:output};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Name of the token, Please Try Again!!!"};
                res.send(response);
            });
    },

    getTokenSymbol: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.symbol().call().then(async output => {
                let response = {status:true, symbol:output};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Symbol of the token, Please Try Again!!!"};
                res.send(response);
            });
    },

    getTokenTotalSupply: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.totalSupply().call().then(async output => {
                let supply = output/1000000;
                let response = {status:true, totalSupply:supply.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Total Supply of the token, Please Try Again!!!"};
                res.send(response);
            });
    },

    getContractTrxBalance: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        await newContract && newContract.getContractTrxBalance().call().then(async output => {
            let supply = output/1000000;
            let response = {status:true, balance:supply.toString()};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Contract TRX Balance, Please Try Again!!!"};
            res.send(response);
        });
    },

    approveToken: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.address && req.body.amount && ! req.body.address == "" && ! req.body.amount == 0) {
                await newContract && newContract.approve(req.body.address, req.body.amount).send().then(async output => {
                    let response = {status:true, address:req.body.address, amount:req.body.amount, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to Approve token, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter valid Address or amount and Try Again!!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    increaseAllowance: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.address && req.body.amount && ! req.body.address == "" && ! req.body.amount == 0) {
                await newContract && newContract.increaseAllowance(req.body.address, req.body.amount).send().then(async output => {
                    let response = {status:true, address:req.body.address, amount:req.body.amount, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to increase allowance of tokens, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter valid Address or amount and Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    decreaseAllowance: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.address && req.body.amount && ! req.body.address == "" && ! req.body.amount == 0) {
                await newContract && newContract.decreaseAllowance(req.body.address, req.body.amount).send().then(async output => {
                    let response = {status:true, address:req.body.address, amount:req.body.amount, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to decrease allowance of tokens, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter valid Address or amount and Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    transfer: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
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

    transferFrom: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.query.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.amount);
            var amount = (data).toFixed(6)*1000000;

            if(req.body.fromAddress && req.body.toAddress && amount && ! req.body.fromAddress=="" && ! req.body.toAddress=="" && ! amount==0) {
                await newContract && newContract.transferFrom(req.body.fromAddress, req.body.toAddress, amount).send().then(async output => {
                    let response = {status:true, fromAddress:req.body.fromAddress, toAddress:req.body.toAddress, amount:amount, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to transfer from one address to another, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter valid address or amount and Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    airdropByOwner: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.addresses && req.body.amount && ! req.body.addresses == "" && ! req.body.amount == 0) {
                await newContract && newContract.airdropByOwner(req.body.addresses,req.body.amount).send().then(async output => {
                    let response = {status:true, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to do Air Drop functionality, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false,message:"Enter valid addresses or amount and Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    burnToken: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.amount);
            var amount = (data).toFixed(6)*1000000;

            if(amount && ! amount==0) {
                await newContract && newContract.burn(amount).send().then(async output => {
                    let response = {status:true, burnAmount:amount, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to burn token, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid Amount & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    mintToken: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.amount);
            var value = (data).toFixed(6)*1000000;

            if(value && !value == 0) {
                await newContract && newContract.mint(value).send().then(async output => {
                    let response = {status:true, mintValue:value, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to mint token, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid value & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    transferOwnership: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.address && ! req.body.address==0) {
                await newContract && newContract.transferOwnership(req.body.address).send().then(async output => {
                    let response = {status:true, address:req.body.address, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to Transfer Ownership, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid Address & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------API FOR STAKING FUNCTIONALITY------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//-----------------------------------------------------------------------GET FUNCTIONS------------------------------------------------------------------------//   

    getBigPayDay: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        await newContract && newContract.getBigPayDay().call().then(async output => {
            const unixEpochTimeMS = output * 1000;
            const d = new Date(unixEpochTimeMS);
            const time = d.toLocaleString();
            let response = {status:true, day:time};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Bigpay Day Date, Please Try Again!!!"};
            res.send(response);
        });
    },

    getBigPayDayPercentage: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        await newContract && newContract.getBigPayDayPercentage().call().then(async output => {
            let response = {status:true, percentage:output/100};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Bigpay Day Perentage, Please Try Again!!!"};
            res.send(response);
        });
    },

    getTokenpoolAddress: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        await newContract && newContract.getTokenpoolAddress().call().then(async output => {
            const address = tronWeb.address.fromHex(output);
            let response = {status:true, address:address};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Tokenpool Address, Please Try Again!!!"};
            res.send(response);
        });
    },

    getPurchaseableTokenAddress: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.getpurchaseableTokensAddress().call().then(async output => {
                const address = tronWeb.address.fromHex(output);
                let response = {status:true, address:address};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get purchaseableTokens Address, Please Try Again!!!"};
                res.send(response);
            });
    },

    getPurchaseableTokens: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.getpurchaseableTokens().call().then(async output => {
                let response = {status:true, purchaseableTokens:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false,message:"Unable to get purchaseable Tokens, Please Try Again!!!"};
                res.send(response);
            });
    },

    getPriceOfToken: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.getPriceToken().call().then(async output => {
                let response = {status:true, priceOfToken:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get price of Tokens, Please Try Again!!!"};
                res.send(response);
            });
    },

    getRewardPercentage: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.getRewardPercentage().call().then(async output => {
                let response = {status:true, percentage:output/100};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Reward Percentage, Please Try Again!!!"};
                res.send(response);
            });
    },

    getPenaltyPercentage: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.getPenaltyPercentage().call().then(async output => {
                let response = {status:true, percentage:output/100};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Penalty Percentage, Please Try Again!!!"};
                res.send(response);
            });
    },

    getWithdrawPenaltyPercentage: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            await newContract && newContract.getWithdrawPenaltyPercentage().call().then(async output => {
                let response = {status:true, percentage:output/100};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Withdraw Penalty Percentage, Please Try Again!!!"};
                res.send(response);
            });
    },

    getPenaltyIfWithdrawToday: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
      
        if(req.query.id && !req.query.id == "" && !req.query.id == 0){
            await newContract && newContract.getPaneltyIfWithdrawToday(req.query.id).call().then(async output => {
                let response = {status:true, id:req.query.id, penalty:output/100};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Penalty by Today, Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id & Try Again!!!"};
            res.send(response);
        }   
    },
  
    getReferralAddress: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        await newContract && newContract.getReferralAddress().call().then(async output => {
            const address = tronWeb.address.fromHex(output);
            let response = {status:true, address:address};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Referral Address, Try Again!!!"};
            res.send(response);
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
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        await newContract && newContract.getReferralAmount().call().then(async output => {
            let response = {status:true, amount:output};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Referral Amount, Try Again!!!"};
            res.send(response);
        });
    },

    getClaimTokens: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
        );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        await newContract && newContract.getClaimTokens().call().then(async output => {
            let response = {status:true, token:output.toString()};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Claimed Token, Try Again!!!"};
            res.send(response);
        });
    },

    getRewardsDetailsOfUserById: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
          );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        if(req.query.id && !req.query.id== ""){
            await newContract && newContract.getRewardsDetailsOfUserById(req.query.id).call().then(async output => {
                let response = {status:true, id:req.query.id, amount:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Reward Detail by User Id, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Id & Try Again!!!"};
            res.send(response); 
        }
    },

    getTotalTrx: async (req, res) => {
        const tronWeb = new TronWeb(
          fullNode,
          solidityNode,
          eventServer,
          DemoPrivateKey
    );
       tronWeb.setDefaultBlock('latest');
       var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

       await newContract && newContract.getTotalTrx().call().then(async output => {
          let response = {status:true, ETH:output};
          res.send(response);
      }).catch(err => {
          let response = {status:false, message:"Unable to get total TRX, Please Try Again!!!"};
          res.send(response);
      });
    },

    getStakingCount: async (req, res) => {
        const tronWeb = new TronWeb(
          fullNode,
          solidityNode,
          eventServer,
          DemoPrivateKey
    );
       tronWeb.setDefaultBlock('latest');
       var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

       await newContract && newContract.getStakingCount().call().then(async output => {
          let response = {status:true, count:output.toString()};
          res.send(response);
      }).catch(err => {
          let response = {status:false, message:"Unable to get Staking Count, Please Try Again!!!"};
          res.send(response);
      });
    },

    getMyPurchasedTokens: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
          );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        if(req.query.address && !req.query.address== ""){
            await newContract && newContract.getMyPurchasedTokens(req.query.address).call().then(async output => {
                let response = {status:true, address:req.query.address, token:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get Purchased Token by Address, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Address & Try Again!!!"};
            res.send(response); 
        }
    },

    getTrxAmountByAddress: async (req, res) => {
        const tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            DemoPrivateKey
          );
        tronWeb.setDefaultBlock('latest');
        var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

        if(req.query.address && !req.query.address== ""){
            await newContract && newContract.getTrxAmountByAddress(req.query.address).call().then(async output => {
                let response = {status:true, address:req.query.address, token:output.toString()};
                res.send(response);
            }).catch(err => {
                let response = {status:false, message:"Unable to get TRX Amount by Address, Please Try Again!!!"};
                res.send(response);
            });
        } else {
            let response = {status:false, message:"Enter valid Address & Try Again!!!"};
            res.send(response); 
        }
    },

    calculateBigPayDayReward: async (req, res) => {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                DemoPrivateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
          
            if(req.query.amount && req.query.endDate && ! req.query.endDate == "" && ! req.query.amount == 0) {
                await newContract && newContract.calculateBigPayDayReward(req.query.amount,req.query.endDate).call().then(async output => {
                    let response = {status:true, reward:output.toString()};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to calculate Big Pay day reward, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false,message:"Enter valid Amount or End Date and Try Again!!!"};
                res.send(response);
            }
    },

//-----------------------------------------------------------------------SET FUNCTIONS------------------------------------------------------------------------//   

    setBigPayDay: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.day && !req.body.day == "" && !req.body.day == 0){
                await newContract && newContract.setBigPayDay(req.body.day).send().then(async output => {
                    const unixEpochTimeMS = req.body.day * 1000;
                    const d = new Date(unixEpochTimeMS);
                    const time = d.toLocaleString();
                    let response = {status:true, day:time, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Bigpay day date, Please Try Again!!!"};
                    res.send(response); 
                });
            } else {
                let response = {status:false, message:"Enter Valid day & Try Again!!!"};
                res.send(response); 
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response); 
        }
    },

    setBigPayDayPercentage: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.percentage);
            var percentage = (data).toFixed(2)*100;

            if(percentage && !percentage == "" && !percentage == 0){
                await newContract && newContract.setBigPayDayPercentage(percentage).send().then(async output => {
                    let response = {status:true, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Bigpay day percentage, Please Try Again!!!"};
                    res.send(response); 
                });
            } else {
                let response = {status:false, message:"Enter Valid Percentage & Try Again!!!"};
                res.send(response); 
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response); 
        }
    },

    setTokenPoolAddress: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.address && !req.body.address == ""){
                await newContract && newContract.setTokenPoolAddress(req.body.address).send().then(async output => {
                    let response = {status:true, address:req.body.address, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Token Pool Address, Please Try Again!!!"};
                    res.send(response); 
                });
            } else {
                let response = {status:false, message:"Enter Valid Address & Try Again!!!"};
                res.send(response); 
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response); 
        }
    },

    setpurchaseableTokenAddress: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.address && !req.body.address== ""){
                await newContract && newContract.setpurchaseableTokensAddress(req.body.address).send().then(async output => {
                    let response = {status:true, address:req.body.address, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Purchaseable Token Address, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter valid Address & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    setPurchaseableTokens: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.amount);
            var amount = (data).toFixed(6)*1000000;

            if(amount && !amount== "" && ! amount == 0){
                await newContract && newContract.addForPurchase(amount).send().then(async output => {
                    let response = {status:true, amount:amount, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Purchaseable Token, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid amount & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    setPriceOfToken: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.price && !req.body.price== "" && ! req.body.price == 0){
                await newContract && newContract.setPriceToken(req.body.price).send().then(async output => {
                    let response = {status:true, price:req.body.price, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Price of Tokens, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid price & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    setRewardPercentage: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.percentage);
            var percentage = (data).toFixed(2)*100;

            if(percentage && !percentage== "" && ! percentage == 0){
                await newContract && newContract.setRewardPercentage(percentage).send().then(async output => {
                    let response = {status:true, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Reward Percentage, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid percentage & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    setPenaltyPercentage: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.percentage);
            var percentage = (data).toFixed(2)*100;

            if(percentage && !percentage== "" && ! percentage == 0){
                await newContract && newContract.setPenaltyPercentage(percentage).send().then(async output => {
                    let response = {status:true, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Penalty Percentage, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false,message:"Enter Valid percentage & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    setWithdrawPenaltyPercentage: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.percentage);
            var percentage = (data).toFixed(2)*100;

            if(percentage && !percentage== "" && !percentage == 0){
                await newContract && newContract.setWithdrawPenaltyPercentage(percentage).send().then(async output => {
                    let response = {status:true, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Withdraw Penalty Percentage, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid percentage & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    setReferralAddress: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.address && !req.body.address == "" && !req.body.address == 0){
                await newContract && newContract.setReferralAddress(req.body.address).send().then(async output => {
                    let response = {status:true, address:req.body.address, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Referral Address, Please Try Again!!!"};
                    res.send(response); 
                });
            } else {
                let response = {status:false, message:"Enter Valid Address & Try Again!!!"};
                res.send(response); 
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response); 
        }
    },

    setReferralAmount: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.amount && !req.body.amount == "" && !req.body.amount == 0){
                await newContract && newContract.setReferralAmount(req.body.amount).send().then(async output => {
                    let response = {status:true, amount:req.body.amount, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Referral Amount, Please Try Again!!!"};
                    res.send(response); 
                });
            } else {
                let response = {status:false, message:"Enter Valid Amount & Try Again!!!"};
                res.send(response); 
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response); 
        }
    },

    setClaimTokens: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.token && !req.body.token == "" && !req.body.token == 0){
                await newContract && newContract.setClaimTokens(req.body.token).send().then(async output => {
                    let response = {status:true, token:req.body.token, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to set Claim Token, Please Try Again!!!"};
                    res.send(response); 
                });
            } else {
                let response = {status:false, message:"Enter Valid Token Amount & Try Again!!!"};
                res.send(response); 
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response); 
        }
    },

    performStakingToken: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
            var data = parseFloat(req.body.amount);
            var amount = (data).toFixed(6)*1000000;

            if(amount && req.body.time && !amount== "" && !req.body.time=="" && ! amount == 0 ){
                await newContract && newContract.performStaking(amount, req.body.time).send().then(async output => {
                    let response = {status:true, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to perform Staking of token, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid Amount or Time & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    withdrawStakingToken: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.stakingId && !req.body.stakingId== "" && ! req.body.stakingId == 0 ){
                await newContract && newContract.withdrawStakedTokens(req.body.stakingId).send().then(async output => {
                    let response = {status:true, stakingId:req.body.stakingId, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to Withdraw Staked Token , Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid Amount & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    purchaseTokens: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.amount && !req.body.amount== "" && ! req.body.amount == 0 ){
                await newContract && newContract.purchaseTokens().send({callValue : req.body.amount * 1000000}).then(async output => {
                    res.send(output);
                    }).catch(err => {
                        let response = {status:false, message:"Unable to purchase token, Please Try Again!!!"};
                        res.send(response);
                    });
            } else {
                let response = {status:false, message:"Enter Valid Amount & Try Again!!!"};
                res.send(response);
            }  
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    withdrawPurchasedToken: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

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

    blacklistStake: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.id && !req.body.id == "" && ! req.body.id == 0 && req.body.status && !req.body.status == ""){
                await newContract && newContract.blacklistStake(req.body.status, req.body.id).send().then(async output => {
                    let response = {status:true, id:req.body.id, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to Blacklist Address, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid id & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    withdrawReferral: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');

            if(req.body.address && !req.body.address== ""){
                await newContract && newContract.withdrawReferral(req.body.address).send().then(async output => {
                    let response = {status:true, address:req.body.address, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to Withdraw Referral Amount, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false, message:"Enter Valid Address & Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },

    claimBonus: async (req, res) => {
        if (req.body.privateKey && ! req.body.privateKey == "") {
            const tronWeb = new TronWeb(
                fullNode,
                solidityNode,
                eventServer,
                req.body.privateKey
            );
            tronWeb.setDefaultBlock('latest');
            var newContract = await tronWeb.contract().at('TWpanfDJgxHLyhBRAkU1eRaeJiQnepYcWx');
          
            if(req.body.bitAddress && req.body.bitBalance && ! req.body.bitAddress == "" && ! req.body.bitBalance == 0) {
                await newContract && newContract.claimBonus(req.body.bitAddress,req.body.bitBalance).send().then(async output => {
                    let response = {status:true, hash:output};
                    res.send(response);
                }).catch(err => {
                    let response = {status:false, message:"Unable to perform Claim Bonus Functionality, Please Try Again!!!"};
                    res.send(response);
                });
            } else {
                let response = {status:false,message:"Enter valid To Address or Balance and Try Again!!!"};
                res.send(response);
            }
        } else {
            let response = {status:false, message:"Enter Valid Private Key & Try Again!!!"};
            res.send(response);
        }
    },
    
}
