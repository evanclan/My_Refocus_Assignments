const Restaurant = {
    "restaurantName": "Mang Inasar",
    "dishes": [
        {
            "dishId": 001,
            "dishName" : "kaldereta",
            "dishPrice" : 55,
            "ingredients" : ["chiken", "pork", "parika", "green bell pepper", "tomato"]
        },
        {
            "dishId": 002,
            "dishName" : "sinigang",
            "dishPrice" : 60,
            "ingredients" : ["dahon ng sili", "pork", "papaya", "luya", "saging"]
        },
        {
            "dishId": 003,
            "dishName" : "adobo",
            "dishPrice" : 90,
            "ingredients" : ["chiken fat", "porkbelly", "bay leaves", "peppercorn", "datu puti toyo"]
        }
    ],
    "displayRestaurantName": function(){
        console.log(this.restaurantName)
    },
    "displayMenu": function(){
        for(dish of this.dishes){
            console.log(dish.dishName + ' ' + dish.dishPrice)
            console.log('contains ' + dish.ingredients.join(', ') )
        }

    }
}
console.log(Restaurant.displayMenu())