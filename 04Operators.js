// OPERATORS
var sellingprice = 199;
var listingprice = 799;

var discountpercent = ((listingprice - sellingprice) / listingprice) * 100;
roundeddiscount = Math.round(discountpercent);
console.log("DiscountPercent is: " + roundeddiscount + "% off");
