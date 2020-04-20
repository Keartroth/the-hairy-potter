/*
* This module holds a function that creates an HTML string representation of a button, 
* it invokes the function, PotterySupplier which rerenders an inventory list to the DOM.
* It is exported to main.js where it is invoked.
*/

import { PotterySupplier } from "./PotterySupplier.js";

const contentTarget = document.querySelector("#restockButtonContainer");

export const RestockInventoryButton = () => {
    contentTarget.innerHTML = `
        <button id="restockInventory">Restock Inventory</button>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "restockInventory") {
        PotterySupplier();
    }
})