var bills = [124,48,168];
var tips = [];
var paidAmount = [];

function tipCalculator (bill)
{
    var percentage;
    if (bill <50)
    {
        percentage = 0.20;
    }else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
    }
    else
    {
        percentage=0.10;
    }
    return percentage;
}

bills.forEach(element => {
paidAmount.push(element * tipCalculator(element));
tips.push(tipCalculator(element));
});

console.log(paidAmount);
console.log(tips);