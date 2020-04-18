/*
* This module holds a function that represents a kiln, it accepts a pottery object and a temperature value and adds
* properties and values to the pottery object dependant upon the value of the temperature.
* It is exported to PotteryRetailer.js where it is invoked.
*/

export const Kiln = (potteryObject) => {
    if (potteryObject.temperature > 2200) {
        potteryObject.fired = true;
        potteryObject.cracked = true;
        delete potteryObject.temperature
    } else {
        potteryObject.fired = true;
        potteryObject.cracked = false;
        delete potteryObject.temperature
    }
    return potteryObject;
}