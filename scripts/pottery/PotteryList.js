import { potteryToSell } from "./PotteryRetailer.js";
import { Pottery } from "./Pottery.js";

const contentTartget = document.querySelector("#container");

const render = (potteryObject) => {
    return Pottery(potteryObject)
}

export const PotteryList = () => {
    contentTartget.innerHTML += potteryToSell.map(po => render(po)).join("")
}