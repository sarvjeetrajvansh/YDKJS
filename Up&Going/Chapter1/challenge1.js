const TAX_RATE = 0.08 ;
const PHONE_PRICE = 99.99 ;
const ACCESSORY_PRICE = 9.99 ;
const BUDGET = 200 ;

var bankBalance = 303 ;
var price = 0.0 ;

// format price with currency identifier
function formatPrice(price){
    return "$" + price.toFixed(2);
}

// Add tax in final price
function addTax(){

    return price * TAX_RATE ;
}

// Keep buying phone till you have money
while (price < bankBalance){

    price += PHONE_PRICE;

    if(price < BUDGET){

        price += ACCESSORY_PRICE ;
        
    }
}
    price += addTax() ;

    console.log("Total Purchase Amount :" + formatPrice(price))

    if(price > bankBalance){

        console.log("You can't afford it !!")
    }
    