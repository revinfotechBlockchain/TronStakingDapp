const TronWeb = require('tronweb');
const axios = require('axios');
const HttpProvider = TronWeb.providers.HttpProvider;

//---------------------------------------------MAINNET---------------------------------------------------------//
const fullNode = new HttpProvider('https://api.trongrid.io'); // Full node http endpoint
const solidityNode = new HttpProvider('https://api.trongrid.io'); // Solidity node http endpoint
const eventServer = new HttpProvider('https://api.trongrid.io');


module.exports = {

createAccount:  async (req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
            ""
    );
    let return_val = {
        status: false,
        data: ""  }
    tronWeb.setDefaultBlock('latest');
      await tronWeb.createAccount().then(output => {
        return_val.status = true;
        return_val.data = output;
        res.send(return_val);
      }).catch(err => {
        let response = {status:false, message:"Unable to get Create Account, Please Try Again!!!"};
        res.send(response);
     })
},

getAccount: async (req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        ""
    );
    let return_val = {
        status: false,
        data: ""  }
    tronWeb.setDefaultBlock('latest');
    if (req.query.address && !req.query.address == "") {
        await  tronWeb.trx.getAccount(req.query.address).then(output => {
            return_val.status = true;
            return_val.data = output;
            res.send(return_val);
        }).catch(err => {
            let response = {status:false, message:"Unable to get account detail, Please Try Again!!!"};
            res.send(response);
        });
    } else {
        let response = {status:false, message:"Enter valid Address & Try Again!!!"};
        res.send(response);
    }
},

getBalance:  async(req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        ""
    );
    tronWeb.setDefaultBlock('latest');
    if (req.query.address && !req.query.address == "") {
        await  tronWeb.trx.getBalance(req.query.address).then(output => {
            let response = {status:true, address:req.query.address, balance:output.toString()};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Balance Details, Please Try Again!!!"};
            res.send(response);
        });
    } else {
        let response = {status:false, message:"Enter valid Address & Try Again!!!"};
        res.send(response);
    }
},

getBandwidth: async (req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        ""
    );
    tronWeb.setDefaultBlock('latest');
    if (req.query.address && !req.query.address == "") {
        await tronWeb.trx.getBandwidth(req.query.address).then(output => {
            let response = {status:true, address:req.query.address, bandwidth:output.toString()};
            res.send(response);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Account Bandwidth, Please Try Again!!!"};
            res.send(response);
        });
    } else {
        let response = {status:false, message:"Enter valid Address & Try Again!!!"};
        res.send(response);
    }
},

getTransactionInfo: async (req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        ""
    );
    let return_val = {
        status: false,
        data: "" }
    tronWeb.setDefaultBlock('latest');
    if (req.query.hash && !req.query.hash == "") {
      await  tronWeb.trx.getTransactionInfo(req.query.hash).then(output => {
        return_val.status = true;
        return_val.data = output;
        res.send(return_val);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Transaction Details, Please Try Again!!!"};
            res.send(response);
        });
    } else {
        let response = {status:false, message:"Enter valid Hash & Try Again!!!"};
        res.send(response);
    }
},

getTransactionByHash: async (req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        ""
    );
    let return_val = {
        status: false,
        data: "" }
    tronWeb.setDefaultBlock('latest');

    if (req.query.hash && !req.query.hash == "") {
      await  tronWeb.trx.getTransaction(req.query.hash).then(output => {
            return_val.status = true;
            return_val.data = output;
            res.send(return_val);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Transaction Details by Hash, Please Try Again!!!"};
            res.send(response);
        });
    } else {
        let response = {status:false, message:"Enter valid Hash & Try Again!!!"};
        res.send(response);
    }
},

getTransactionsByAddress: async (req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        ""
    );
    
    if (req.query.address && !req.query.address == "") {
        axios.get('https://api.shasta.trongrid.io/v1/accounts/'+req.query.address+'/transactions').then(output=>{
           res.send(output.data);
        }).catch(err => {
            let response = {status:false,message:"Unable to get Transaction Details by Address, Please Try Again!!!"};
            res.send(response);
        });
    } else {
        let response = {status:false, message:"Enter valid Address & Try Again!!!"};
        res.send(response);
    }
},

getTransactionByBlock: async (req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        ""
    );
    let return_val = {
        status: false,
        data: "" }
    tronWeb.setDefaultBlock('latest');
    if (req.query.block && !req.query.block == "") {
        await tronWeb.trx.getTransactionFromBlock(req.query.block).then(async output => {
            return_val.status = true;
            return_val.data = output;
            res.send(return_val);
        }).catch(err => {
            let response = {status:false, message:"Unable to get Transaction Details by Block, Please Try Again!!!"};
            res.send(response);
        });
    } else {
        let response = {status:false, message:"Enter valid Block Height & Try Again!!!"};
        res.send(response);
    }
},

getStatus: async (req, res) => {
    const tronWeb = new TronWeb(
        fullNode,
        solidityNode,
        eventServer,
        ""
    );
    let return_val = {
        status: false,
        data: ""}
    tronWeb.setDefaultBlock('latest');
    await tronWeb.trx.getCurrentBlock().then(output => {
        return_val.status = true;
        return_val.data = output;
        res.send(return_val);
    }).catch(err => {
        let response = {status:false, message:"Unable to get Status, Please Try Again!!!"};
        res.send(response);
    })
 },

}