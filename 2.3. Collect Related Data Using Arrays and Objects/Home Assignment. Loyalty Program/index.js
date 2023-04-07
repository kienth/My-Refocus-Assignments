let customer = [
    {
        customer_name: "Johnny Manggo",
        points: 12300,
        cart: [
            {
                item: "Shampoo",
                quantity: 2,
                price_$: 3,
            },
            {
                item: "Soap",
                quantity: 2,
                price_$: 2,
            },
            {
                item: "Toothpaste",
                quantity: 1,
                price_$: 3,
            },
        ],
    },
];

let purchase_item = "";
let cart = customer[0]["cart"];
let total_bill = 0;

for (let i = 0; i < customer[0]["cart"].length; i++) {
    purchase_item += `${cart[i]["quantity"]}x ${cart[i]["item"]} ---- $ ${cart[i]["price_$"]}.00\n`;
    total_bill += cart[i]["quantity"] * cart[i]["price_$"];
    customer[0]["points"] += cart[i]["quantity"];
}

console.log(`Hi, ${customer[0]["customer_name"]}! We are happy to see you today. 
Your current points are: ${customer[0]["points"]} \n${purchase_item}Total Bill: ${total_bill} \nNew Current Points: ${customer[0]["points"]}`);
