let Web3 = require('web3');
let web3 = new Web3('http://localhost:8541');

var t1 = new Date().getTime();
console.log(t1);

console.log(web3.utils.asciiToHex('我'));                                   // 0x6211000000000000000000000000000000000000000000000000000000000000
console.log(web3.utils.asciiToHex('我我我我我我我我我我我我我我我我'));     // 0x6211621162116211621162116211621162116211621162116211621162116211
console.log(web3.utils.asciiToHex('我我我我我我我我我我我我我我我我我'));   // 0x62116211621162116211621162116211621162116211621162116211621162116211






