// ------------------------- Task 1. -----------------------//

const dishes = [
    {
        dishID: 1,
        dishName: "Salmon and egg breakfast wrap",
        dishPrice: 30,
        ingredients: [
            "2 large British lion eggs, beaten",
            "1 tbsp chopped fresh dill or chives",
            "A pinch of salt and freshly ground black pepper",
            "A drizzle of olive oil",
            "2 tbsp fat free Greek yogurt",
            "A little grated zest and a squeeze of lemon juice",
            "40g smoked salmon, sliced into strips",
            "A handful of watercress, spinach and rocket leaf salad",
        ],
    },
    {
        dishID: 2,
        dishName: "Muffins with poached eggs",
        dishPrice: 25,
        ingredients: [
            "2 large British Lion eggs",
            "1 muffin, split horizontally",
            "1 tomato sliced",
            "50g/2oz cheddar cheese, sliced",
        ],
    },
    {
        dishID: 3,
        dishName: "Pizza omelette",
        dishPrice: 40,
        ingredients: [
            "2 medium British Lion eggs",
            "85g tomato",
            "25g mushrooms",
            "20g mozzarella",
            "Pinch of mixed herbs",
        ],
    },
];

// ------------------------- Task 2. -----------------------//

const menu = {
    restaurantName: "Kentoy Kitchen",
    dishes,
    displayRestaurantName: function () {
        console.log(this.restaurantName);
    },
    displayMenu: function () {
        for (let i = 0; dishes.length > i; i++) {
            let displayIngredients = "Contains ";
            for (item in dishes[i]["ingredients"]) {
                displayIngredients += `${dishes[i]["ingredients"][item]}${
                    dishes[i]["ingredients"].length > item ? ", " : "."
                }`;
            }
            console.log(
                `Dish, ₱${dishes[i]["dishPrice"]} \n Contains ${displayIngredients} \n`
            );
        }
    },
};

menu.displayRestaurantName();
menu.displayMenu();
