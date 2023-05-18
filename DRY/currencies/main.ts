import Currency from "./Currency";

const swissFranc = new Currency('Swiss Franc', 'Switzerland');
const lei = new Currency('Ron', 'Romania');
const dirham = new Currency('Dirham', 'United Arab Emirates');

/**
 * Using DRY(don't repeat yourself) principle we can use a single class
 * with 2 functions, instead of having one class for each currency and declaring a specific
 * specific and non-reusable implementation.
 * 
 * In this way, we are also flexible and extandable, avoiding hardcoding.
*/

swissFranc.printFullDetails();
lei.printFullDetails();
dirham.printFullDetails();
