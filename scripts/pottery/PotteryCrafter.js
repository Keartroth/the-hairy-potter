/*
* This module represents a pottery cratsman. The function, PotteryCraftsman, iterates the final array of ingredient objects,
* and builds a pottery object using the CreatePottery and Kiln functions. The finished pottery object is then assessed for sale
* dependent upon the "cracked" property (dependent upon the temperature property from the original ingredient object).
* The final products is then pushed into the potteryToSell array if it is deemed worth selling (ie, not cracked).
* The array is then checked for an object with the name, "Holy Grail", and filtered to ensure there is only one.
* Finally, the PropertyList function is invoked with the array of pottery objects.
*/

import { Kiln } from "./Kiln.js";
import { PotteryList } from "./PotteryList.js";

export let potteryToSell = [];

const CreatePottery = (potteryIngredientObject) => {
    let finishedPotteryObject = Kiln(potteryIngredientObject)

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

export const PotteryCraftsman = (finishedPotteryIngredients) => {
    finishedPotteryIngredients.map(pi => CreatePottery(pi)).filter(fpi => {
        if (fpi !== false) {
            potteryToSell.push(fpi);
        }
    })
    const thereCanBeOnlyOne = potteryToSell.find(p => p.shape === "Holy Grail")
    if (thereCanBeOnlyOne) {
        const singleHolyGrailArray = potteryToSell.filter(p => p.shape !== "Holy Grail");
        singleHolyGrailArray.push(thereCanBeOnlyOne);
        PotteryList(singleHolyGrailArray);
    } else {
        PotteryList(potteryToSell);
    }
}