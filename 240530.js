const reverseString = (word)=>{
    let result = word[word.length - 1];
    
    for(let i = word.length -2;i >= 0; i--){
        result += word[i];
    };

    return result;
};


console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"

// =====================================================

const fizzBuzz = (number) =>{
    for(let i = 1; i <= number; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    };
};

// =====================================================

const secondLargest = (array) =>{
    let first = array[0];
    let second = array[0];

    for(let i = 1; i < array.length; i++){
        if(array[i] >= first){
            second = first;
            first = array[i];
        }else if(array[i] >= second){
            second = array[i];
        }
    };

    return second;
};

console.log(secondLargest([10, 5, 20, 8])); // Output: 10
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4



// =====================================================

let products = [
	{id: 1, name: 'Product A', price: 1000, points: 10},
	{id: 2, name: 'Product B', price: 2000, points: 25},
	{id: 3, name: 'Product C', price: 5000, points: 50},
	{id: 4, name: 'Product D', price: 8000, points: 100},
];
let availablePoints = 150;

let purchasedProducts = [];
let totalSpent = 0;

// no 1
const getMaxPointsProduct = () =>{
    maxPoint = products[0].points;
    for(let i = 1; i< products.length; i++){
        if(maxPoint < products[i].points){
            maxPoint = products[i].points;
        }
    };

    return maxPoint;
}

console.log(getMaxPointsProduct());

// no 2

const calculateRemainingPoints = () =>{
    return availablePoints - getMaxPointsProduct();
};

console.log(calculateRemainingPoints());

// no 3
const redeemProducts = () =>{
    products.sort((a, b) => b.points - a.points);

    for(let i = 0; i < products.length; i++){
        if(availablePoints >= products[i].points){
            availablePoints -= products[i].points;
            totalSpent += products[i].price;
            purchasedProducts.push(products[i].name);
        };
    };

    return { totalSpent, purchasedProducts };
};


const result = redeemProducts();
console.log(`Total spent : ${result.totalSpent}`);
console.log(`Purchased Products : ${result.purchasedProducts}`);


