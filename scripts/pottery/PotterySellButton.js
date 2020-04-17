/*
* This module holds a function that creates an HTML string representation of a button, it accepts
* a pottery object. It is exported to Pottery.js where it is invoked.
*/

export const PotterySellButton = (potteryObject) => {
    return`
        <button id="sellPottery--${potteryObject.id}">Sell Item</button>
    `
}

const eventHub = document.querySelector("#container");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("sellPottery--")) {
        const itemSold = clickEvent.target.id.split("--")[1]
        const saleInitiated = new CustomEvent("sellItemClicked", {
            detail: {
                potteryItemSold: itemSold
            }
        })
        eventHub.dispatchEvent(saleInitiated);
    }
})