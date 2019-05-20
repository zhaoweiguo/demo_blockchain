let Web3 = require('web3');
let web3 = new Web3('http://localhost:8545');

/*
web3.eth.getAccounts().then(console.log);

/*
web3.eth.getBalance(req.query.address).then(function(balance){
      res.json({"status": true, "code":0, "data":{"account":req.query.address, "balance": web3.utils.fromWei(balance)}});
});
*/

var t1 = new Date().getTime();
console.log(t1);

var defaultAccount;
web3.eth.getAccounts(function(err, acc) {
    from = acc[0];
    to = acc[1];
    console.log(acc);

    web3.eth.personal.unlockAccount(from, "q1w2e3r4", 600).then(
      function(error) {
        var code = "0x4bff7c4b09150e450b7392409f574104";
        for(var i=0; i<100; i++) {
            web3.eth.sendTransaction({from: from, data: code}, function(err, transactionHash) {
                console.log(transactionHash)
                    console.log(err);
            });
        }
    }).then(function() {
        var t2 = new Date().getTime();
        console.log(t2);
    });

});


// console.log(web3.utils.toWei('2','ether'));


/*
web3.eth.getBlock(
        "pending",
    function (error, block) {
        if (error) {
            console.error(error);
        } else {
            console.log(block.transactions.length);
        }
    });
*/


