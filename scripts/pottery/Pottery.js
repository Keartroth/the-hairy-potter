/*
* This module holds a function that represents the creation of a piece of pottery, it accepts an array of pottery
* ingredients and adds properties and values to the pottery object dependant upon the value of the ingredients.
* It is exported to PotteryRetailer.js where it is invoked.
*/

let integer = 0

export const Pottery = (potteryIngredientArray) => {
    integer = integer+1;
    const potteryObject ={
        id: integer,
        shape: potteryIngredientArray[0],
        weight: potteryIngredientArray[1],
        height: potteryIngredientArray[2]
    }
    return potteryObject;
}