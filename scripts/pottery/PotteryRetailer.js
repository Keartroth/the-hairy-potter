/*
* This module holds a function that represents pottery craftsman and pottery retailer, it takes an array of pottery
* ingredients and invokes the CreatePottery function which creates a pottery object with the Pottery function,
* and then invokes the Kiln function with the created pottery object and a temperature value to finish the pottery object.
* The finished pottery object is then assessed & assigned values based on the object's cracked and weight properties.
* The final products is then pushed into the potteryToSell array if it is deemed worth selling (ie, not cracked).
*/

import { potteryObjectMaker } from "./potteryObjectMaker.js";
import { Kiln } from "./Kiln.js";

const CreatePottery = (potteryObject) => {
    let unfinishedPotteryObject = potteryObjectMaker(potteryObject[0]);
    let finishedPotteryObject = Kiln(unfinishedPotteryObject, potteryObject[1])

    if (finishedPotteryObject.cracked === false) {
        if (finishedPotteryObject.weight >= 3) {
            finishedPotteryObject.price = 40;
            return finishedPotteryObject
        } else {
            finishedPotteryObject.price = 20;
            return finishedPotteryObject
        }
    } else {
        return false
    }
}

export let potteryToSell = []

const PotterCraftsman = (potteryIngredientsArray) => {
    potteryIngredientsArray.map(pi => CreatePottery(pi)).filter(fpi => {
        if (fpi !== false) {
            potteryToSell.push(fpi)
        }
    })
}

const arrayOfPotteryIngredients = [
    [
        [ "round bowl", 30, 5 ],
        2200
    ],
    [
        [ "square bowl", 100, 10 ],
        2000
    ],
    [
        [ "vase", 12, 4 ],
        9001
    ],
    [
        [ "cup", 1, 0.5 ],
        7
    ],
    [
        [ "plate", 1.5, 0.1 ],
        1000000000
    ]
]

export const PotteryRetailer = () => PotterCraftsman(arrayOfPotteryIngredients);

console.log(potteryToSell);