import { Pottery } from "./Pottery.js";
import { RestockInventoryButton } from "./RestockButton.js";

const contentTartget = document.querySelector("#inventory");

const render = (potteryToSell) => {
    return potteryToSell.map(po => Pottery(po)).join("")
}

export const PotteryList = (potteryToSell) => {
    contentTartget.innerHTML = render(potteryToSell)
}