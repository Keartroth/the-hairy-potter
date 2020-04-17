/*
* This module holds a function that creates an HTML string representation of a piece of pottery, it accepts
* a pottery object. It is exported to PotteryList.js where it is invoked.
*/

import { PotterySellButton } from "./PotterySellButton.js"
import { potteryToSell } from "./PotteryRetailer.js";

export const Pottery = (potteryObject) => {
    return`
        <section id="potteryItem--${potteryObject.id}">
            <div class="shapePriceContainer">Shape: ${potteryObject.shape}  Price: $${potteryObject.price}</div>
            <div class="heightWeightContainer">Height: ${potteryObject.height}  Weight: ${potteryObject.wieght}</div>
            ${PotterySellButton(potteryObject)}
        </section>
    `
}

const eventHub = document.querySelector("#container");

eventHub.addEventListener("sellItemClicked", customEvent => {
    const itemSold = parseInt(customEvent.detail.potteryItemSold)
    const soldPotteryObject = potteryToSell.find(po => po.id === itemSold);

    alert(`You sold a ${soldPotteryObject.shape} for $${soldPotteryObject.price}`);
})