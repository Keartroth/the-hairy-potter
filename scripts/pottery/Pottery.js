/*
* This module holds a function that creates an HTML string representation of a piece of pottery, it accepts
* a pottery object. It is exported to PotteryList.js where it is invoked.
*/

import { PotterySellButton } from "./PotterySellButton.js"
import { potteryToSell } from "./PotteryCrafter.js";

export const Pottery = (potteryObject) => {
    return`
        <div id="potteryItem--${potteryObject.id}">
            <div class="shapePriceContainer">Shape: ${potteryObject.shape}  Price: $${potteryObject.price}.00</div>
            <div class="heightWeightContainer">Height: ${potteryObject.height} in  Weight: ${potteryObject.weight} lb(s)</div>
            ${PotterySellButton(potteryObject)}
        </div>
    `
}

const eventHub = document.querySelector("#container");

eventHub.addEventListener("sellItemClicked", customEvent => {
    const itemSold = parseInt(customEvent.detail.potteryItemSold)
    const soldPotteryObject = potteryToSell.find(po => po.id === itemSold);
    const DOMNode = document.getElementById(`potteryItem--${itemSold}`);

    if (soldPotteryObject.shape === "Holy Grail") {
        alert(`You sold the ${soldPotteryObject.shape} for $${soldPotteryObject.price}.00`);
        DOMNode.classList.add("hidden")
    } else {
        alert(`You sold a ${soldPotteryObject.shape} for $${soldPotteryObject.price}.00`);
        DOMNode.classList.add("hidden")
    }
})