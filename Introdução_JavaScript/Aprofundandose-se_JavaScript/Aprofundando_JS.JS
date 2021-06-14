var Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function BucarNumerosPares(Value) {
    if(Value % 2 == 1)
    return Value;
}

var NumerosPares = Num.filter(BucarNumerosPares);
console.log(NumerosPares);