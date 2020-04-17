/*
* This module holds a function that represents a kiln, it accepts a pottery object and a temperature value and adds
* properties and values to the pottery object dependant upon the value of the temperature.
* It is exported to PotteryRetailer.js where it is invoked.
*/

export const Kiln = (potteryObject, temperature) => {
    if (temperature > 2200) {
        potteryObject.fired = true;
        potteryObject.cracked = true;
    } else {
        potteryObject.fired = true;
        potteryObject.cracked = false;
    }
    return potteryObject;
}