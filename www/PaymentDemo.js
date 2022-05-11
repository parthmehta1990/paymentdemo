var exec = require('cordova/exec');

// module.exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'PaymentDemo', 'coolMethod', [arg0]);
// };

module.export.add=function(arg0,sucess,error){
    exec(success, error, 'PaymentDemo', 'add', [arg0]); 
}

module.export.substract=function(arg0,sucess,error){
    exec(success, error, 'PaymentDemo', 'substract', [arg0]); 
}
