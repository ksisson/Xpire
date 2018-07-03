var db = require("./models");



var data = [
    {
      item_name: "soy  milk",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "almond milk",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "rice milk",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "coconut milk",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "hemp milk",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "parmesan cheese",
      shelf_life: 21,
      category: "Dairy"
    },
    {
      item_name: "asiago cheese",
      shelf_life: 21,
      category: "Dairy"
    },
    {
      item_name: "romano cheese",
      shelf_life: 21,
      category: "Dairy"
    },
    {
      item_name: "baby formula",
      shelf_life: 1,
      category: "Dairy"
    },
    {
      item_name: "butter",
      shelf_life: 14,
      category: "Dairy"
    },
    {
      item_name: "brie cheese",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "mozzarella cheese",
      shelf_life: 14,
      category: "Dairy"
    },
    {
      item_name: "feta cheese",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "monterey jack cheese",
      shelf_life: 14,
      category: "Dairy"
    },
    {
      item_name: "muenster cheese",
      shelf_life: 14,
      category: "Dairy"
    },
    {
      item_name: "harvati cheese",
      shelf_life: 14,
      category: "Dairy"
    },
    {
      item_name: "gorgonzola cheese",
      shelf_life: 14,
      category: "Dairy"
    },
    {
      item_name: "cheddar cheese",
      shelf_life: 21,
      category: "Dairy"
    },
    {
      item_name: "egg nog",
      shelf_life: 5,
      category: "Dairy"
    },
    {
      item_name: "eggs",
      shelf_life: 21,
      category: "Dairy"
    },
    {
      item_name: "egg whites",
      shelf_life: 2,
      category: "Dairy"
    },
    {
      item_name: "egg yolks",
      shelf_life: 2,
      category: "Dairy"
    },
    {
      item_name: "ice cream",
      shelf_life: 30,
      category: "Dairy"
    },
    {
      item_name: "margerine",
      shelf_life: 30,
      category: "Dairy"
    },
    {
      item_name: "milk",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "sour cream",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "yogurt",
      shelf_life: 7,
      category: "Dairy"
    },
    {
      item_name: "avocado",
      shelf_life: 3,
      category: "Produce"
    },
    {
      item_name: "apricot",
      shelf_life: 7,
      category: "Produce"
    },
    {
      item_name: "blueberries",
      shelf_life: 5,
      category: "Produce"
    },
    {
      item_name: "bananas",
      shelf_life: 3,
      category: "Produce"
    },
    {
      item_name: "coconut",
      shelf_life: 14,
      category: "Produce"
    },
    {
      item_name: "cherries",
      shelf_life: 5,
      category: "Produce"
    },
    {
      item_name: "grapes",
      shelf_life: 5,
      category: "Produce"
    },
    {
      item_name: "lemons",
      shelf_life: 14,
      category: "Produce"
    },
    {
      item_name: "peaches",
      shelf_life: 4,
      category: "Produce"
    },
    {
      item_name: "oranges",
      shelf_life: 14,
      category: "Produce"
    },
    {
      item_name: "pineapple",
      shelf_life: 4,
      category: "Produce"
    },
    {
      item_name: "olives",
      shelf_life: 90,
      category: "Other"
    },
    {
      item_name: "tomatoes",
      shelf_life: 14,
      category: "Other"
    },
    {
      item_name: "bread, bakery",
      shelf_life: 2,
      category: "Other"
    },
    {
      item_name: "bread, packaged",
      shelf_life: 5,
      category: "Other"
    },
    {
      item_name: "cake",
      shelf_life: 3,
      category: "Other"
    },
    {
      item_name: "cereal",
      shelf_life: 120,
      category: "Other"
    },
    {
      item_name: "cheese cake",
      shelf_life: 5,
      category: "Other"
    },
    {
      item_name: "cookies, bakery",
      shelf_life: 3,
      category: "Other"
    },
    {
      item_name: "cookies, packaged",
      shelf_life: 7,
      category: "Other"
    },
    {
      item_name: "pasta",
      shelf_life: 7,
      category: "Other"
    },
    {
      item_name: "noodles",
      shelf_life: 7,
      category: "Other"
    },
    {
      item_name: "white rice",
      shelf_life: 5,
      category: "Other"
    },
    {
      item_name: "brown rice",
      shelf_life: 4,
      category: "Other"
    },
    {
      item_name: "wild rice",
      shelf_life: 5,
      category: "Other"
    },
    {
      item_name: "tortillas",
      shelf_life: 7,
      category: "Other"
    },
    {
      item_name: "qinuoa",
      shelf_life: 6,
      category: "Other"
    },
    {
      item_name: "bacon",
      shelf_life: 7,
      category: "Meat"
    },
    {
      item_name: "beef",
      shelf_life: 3,
      category: "Meat"
    },
    {
      item_name: "lunch meat",
      shelf_life: 7,
      category: "Meat"
    },
    {
      item_name: "gravy",
      shelf_life: 2,
      category: "Meat"
    },
    {
      item_name: "hot dogs",
      shelf_life: 7,
      category: "Meat"
    },
    {
      item_name: "sausage",
      shelf_life: 2,
      category: "Meat"
    },
    {
      item_name: "chicken",
      shelf_life: 2,
      category: "Meat"
    },
    {
      item_name: "chicken salad",
      shelf_life: 1,
      category: "Meat"
    },
    {
      item_name: "fresh fish",
      shelf_life: 2,
      category: "Meat"
    },
    {
      item_name: "smoked fish",
      shelf_life: 10,
      category: "Meat"
    },
    {
      item_name: "clams",
      shelf_life: 7,
      category: "Meat"
    },
    {
      item_name: "oysters",
      shelf_life: 7,
      category: "Meat"
    },
    {
      item_name: "scallops",
      shelf_life: 7,
      category: "Meat"
    },
    {
      item_name: "shrimp",
      shelf_life: 3,
      category: "Meat"
    },
    {
      item_name: "lobster",
      shelf_life: 3,
      category: "Meat"
    },
    {
      item_name: "peanut butter",
      shelf_life: 90,
      category: "Other"
    },
    {
      item_name: "pork",
      shelf_life: 7,
      category: "Meat"
    },
    {
      item_name: "tofu",
      shelf_life: 3,
      category: "Other"
    },
    {
      item_name: "turkey",
      shelf_life: 7,
      category: "Meat"
    },
    {
      item_name: "asparagus",
      shelf_life: 5,
      category: "Produce"
    },
    {
      item_name: "broccoli",
      shelf_life: 7,
      category: "Produce"
    },
    {
      item_name: "carrots",
      shelf_life: 21,
      category: "Produce"
    },
    {
      item_name: "cauliflower",
      shelf_life: 7,
      category: "Produce"
    },
    {
      item_name: "celery",
      shelf_life: 21,
      category: "Produce"
    },
    {
      item_name: "corn",
      shelf_life: 5,
      category: "Produce"
    },
    {
      item_name: "cucumbers",
      shelf_life: 7,
      category: "Produce"
    },
    {
      item_name: "garlic",
      shelf_life: 90,
      category: "Produce"
    },
    {
      item_name: "green beans",
      shelf_life: 5,
      category: "Produce"
    },
    {
      item_name: "kale",
      shelf_life: 7,
      category: "Produce"
    },
    {
      item_name: "lettuce",
      shelf_life: 7,
      category: "Produce"
    },
    {
      item_name: "mushrooms",
      shelf_life: 7,
      category: "Produce"
    },
    {
      item_name: "onion",
      shelf_life: 28,
      category: "Produce"
    },
    {
      item_name: "peppers",
      shelf_life: 14,
      category: "Produce"
    },
    {
      item_name: "potatos",
      shelf_life: 90,
      category: "Produce"
    },
    {
      item_name: "salsa",
      shelf_life: 7,
      category: "Other"
    },
    {
      item_name: "spinach",
      shelf_life: 5,
      category: "Produce"
    },
    {
      item_name: "hummus",
      shelf_life: 4,
      category: "Other"
    },
    {
      item_name: "Mayonaise",
      shelf_life: 30,
      category: "Other"
    },
    {
      item_name: "Salad Dressing",
      shelf_life: 30,
      category: "Other"
    },
    {
      item_name: "Wasabi",
      shelf_life: 180,
      category: "Other"
    }
  ]

  for (var i = 0; i <data.length; i++){
    db.api.create(data[i]).then(function(){
        console.log("added");
    });
}

