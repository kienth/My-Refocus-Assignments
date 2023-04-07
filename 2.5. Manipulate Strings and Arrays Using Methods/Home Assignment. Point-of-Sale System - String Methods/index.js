// ----------------- Start Task 1 ------------------- //

const store_inventory = [
    { item: "Shampoo", quantity: 1, price_$: 3 },
    { item: "Soap", quantity: 0, price_$: 2 },
    { item: "Toothpaste", quantity: 2, price_$: 3 },
];

const new_deliveries = [
    { item: "Shampoo", quantity: 5, price_$: 4, inventory_index: 0 },
    { item: "Soap", quantity: 10, price_$: 2, inventory_index: 1 },
    { item: "Toothpaste", quantity: 10, price_$: 3, inventory_index: 2 },
];

function processDeliveries(items_obj) {
    items_obj.forEach((new_item) =>
        store_inventory.filter((old_item) => {
            if (new_item.item == old_item.item) {
                old_item.quantity += new_item.quantity;
                old_item.price_$ = new_item.price_$;
            }
        })
    );
}

processDeliveries(new_deliveries);

// console.log("Delivered items have been added to the inventory.");
// console.log("New inventory summary:");
// console.log(store_inventory);

// ------------------End Task 1 ---------------------//

// ----------------- Start Task 2 to 4 ------------------- //

const report_summary = [];

function productSummary(items_obj) {
    items_obj.forEach((item) => {
        const item_id = item.item.slice(0, 3).toLowerCase();
        let remarks = "good";
        if (item.quantity < 10) {
            remarks = "item stock is low.";
        }
        let message = `itemID:${item_id} | ${item.item} | stocks left: ${item.quantity} | Remarks: `;
        report_summary.push(message.concat(remarks));
    });
}

// ------------------End Task 2 to 4 ---------------------//

productSummary(store_inventory);

console.log(report_summary);
