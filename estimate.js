let Web3 = require('web3');
let web3 = new Web3('http://localhost:8541');

var t1 = new Date().getTime();
console.log(t1);

web3.eth.getAccounts(function(err, acc) {
    defaultAccount = acc[0];
    console.log(defaultAccount);

    web3.eth.personal.unlockAccount(defaultAccount, "q1w2e3r4", 600).then(function(error) {
        console.log(error);   // true
//      var code = "0x4bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f5741044bff7c4b09150e450b7392409f574104"
//      var code = "0x4bff7c4b09150e450b7392409f574104";
        var code ="0x1111";
        web3.eth.getGasPrice().then(console.log);   // 1000000000->0x3B9ACA00
            web3.eth.estimateGas({from: defaultAccount, gasPrice:0x3B9ACA00, data: code, to:acc[1]}, function(err, gasNum) {
                console.log(gasNum);
                /*  0x11      -> 21068
                    0x1100    -> 21072 = 21068+4
                    0x1111    -> 21136 = 21068+68
                 */
            });
    }).then(function() {
        var t2 = new Date().getTime();
//      console.log(t2);
    });


});