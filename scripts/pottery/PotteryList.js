import { Pottery } from "./Pottery.js";

const contentTartget = document.querySelector("#inventory");

const render = (potteryObject) => {
    return Pottery(potteryObject)
}

export const PotteryList = (potteryToSell) => {
    contentTartget.innerHTML += potteryToSell.map(po => render(po)).join("")
}