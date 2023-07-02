import WriteObject from "./write-object";

const pencil = new WriteObject('Pencil', 0.8);
const pen = new WriteObject('Pen', 0.5);
const specialPen = new WriteObject('Pelikan Pen', 0.75);

/**
 * Using DRY(don't repeat yourself) principle we can use a single class
 * with 2 functions, instead of having one class for each pen and declaring a specific
 * specific and non-reusable implementation.
 * 
 * In this way, we are also flexible and extandable, avoiding hardcoding.
*/

pencil.writeDetails();
pen.writeDetails();
specialPen.writeDetails();
