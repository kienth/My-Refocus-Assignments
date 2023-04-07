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

console.log("Delivered items have been added to the inventory.");
console.log("New inventory summary:");
console.log(store_inventory);
