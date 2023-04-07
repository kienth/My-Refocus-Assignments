let shop_information = {
    name: "Zara",
    address: "Manhattan Avenue, New York",
    code: "NY656",
};

let user_information = [
    {
        first_name: "Angelina",
        surname: "Jolie",
        age: 47,
        birthday: "4.06.1975",
    },
];

let clothing_items = [
    {
        item_name: "Blue jeans",
        category: "Trousers",
        price: 999,
        stock: 456,
    },
    {
        item_name: "Blue T-shirt",
        category: "Shirt",
        price: 399,
        stock: 456,
    },
];

let is_logged_in = false;
let cart = { confirm_order: false, item: [] };

// -------------------------------------------------------------

// -------------------------------------------------------------

const add_users = ({ first_name, surname, age, birthday }) => {
    user_information.push({ first_name, surname, age, birthday });
};

const add_item_or_stock = ({ item_name, category, price, stock }) => {
    let item = clothing_items.find((item) => item.item_name === item_name);
    if (item) {
        item.stock = item.stock + stock;
    } else {
        clothing_items.push({ item_name, category, price, stock });
    }
};

const add_to_cart = (props) => {
    if (is_logged_in) {
        props.map((i) => {
            let item = clothing_items.find(
                (item) => item.item_name === i.item_name
            );
            if (item) {
                cart.item.push({
                    item_name: i.item_name,
                    qty: i.qty,
                    item_total: item.price * i.qty,
                });
            } else {
                console.log("--- No item exist ---");
            }
        });
    } else {
        console.log("--- User needs to login ---");
    }
};

const sign_in_or_out = () => {
    is_logged_in = !is_logged_in;
    return `User successfully ${is_logged_in ? "login" : "logout"}`;
};

const confirm_order = () => {
    cart.confirm_order = true;
    let cart_item = cart.item;
    let receipt_body = "";
    let total = 0;
    for (let i = 0; i < cart_item.length; i++) {
        let item = clothing_items.find(
            (item) => item.item_name === cart_item[i].item_name
        );
        if (item) {
            item.stock = item.stock - cart_item[i].qty;
            let text = ` Item: ${cart_item[i].item_name}\n Qty: ${cart_item[i].qty} \n Subtotal: ${cart_item[i].item_total} \n\n`;
            receipt_body = receipt_body.concat(text);
            total += cart_item[i].item_total;
        }
    }

    console.log("--- Receipt ---\n");
    console.log(receipt_body);
    console.log(`Total: ${total}`);
};

// -------------------------------------------------------------

// -------------------------------------------------------------

let add_item = [
    { item_name: "Blue jeans", qty: 2 },
    { item_name: "Blue T-shirt", qty: 1 },
];

sign_in_or_out();
add_to_cart(add_item);
confirm_order();
