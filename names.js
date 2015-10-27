var greeting = require('./greeting');

var scott = function(){
    return greeting() + "Scott";
};

var rachael = function(){
    return "rachael";
};

var jackson = function(){
    return "jackson";
};

module.exports.scott = scott;
module.exports.rachael = rachael;