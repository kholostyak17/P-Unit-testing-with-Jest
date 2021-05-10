// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen(mount){
    return ((mount*127.9)/1.2);
}
function fromEuroToDollar(mount){
    return (mount*1.2);
}
function fromYenToPound(mount){
    return ((mount*0.8)/127.9);
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};