/*
* This module holds a function that represents a pottery suplier, it takes four arrays of pottery ingredients
* and builds a random number of pottery ingredient objects (between 1 and 10) with random property values from
* the arrays of ingredients. It then invokes the PotteryCraftsman function with the array of ingredient objects.
*/
import { getData, useData } from "./dataProvider.js";
import { PotteryCraftsman } from "./PotteryCrafter.js";

let tempObject = {
    shapeArray: [],
    weightArray: [],
    heightArray: [],
    temperatureArray: [],
}

const copyData = (signifier) => {
    let variableName = `${signifier}Array`;
    tempObject[variableName] = useData().slice();
}

const randomNumberGenerator = () => {
    return Math.ceil(Math.random() * 10);
}

const randomIndexGenerator = () => {
    return Math.floor(Math.random() * 10);
}

export const PotterySupplier = () => {
    const promise = Promise.all([
        getData("shape")
            .then(() => {
                copyData("shape")
            }),
        getData("weight")
            .then(() => {
                copyData("weight")
            }),
        getData("height")
            .then(() => {
                copyData("height")
            }),
        getData("temperature")
            .then(() => {
                copyData("temperature")
            }),
    ])
    promise.then(() => {
        let ingredients = [];
        let randomIndex = null;
        let randomNumber = null;

        randomNumber = randomNumberGenerator();

        for (let i = 0; i < randomNumber; i++) {
            let ingredientObject = {};

            randomIndex = randomIndexGenerator();
            ingredientObject.shape = tempObject.shapeArray[randomIndex];
            randomIndex = randomIndexGenerator();
            ingredientObject.weight = tempObject.weightArray[randomIndex];
            randomIndex = randomIndexGenerator();
            ingredientObject.height = tempObject.heightArray[randomIndex];
            randomIndex = randomIndexGenerator();
            ingredientObject.temperature = tempObject.temperatureArray[randomIndex];
            ingredientObject.id = i +1;

            ingredients.push(ingredientObject)
        }
        PotteryCraftsman(ingredients)
    })
}