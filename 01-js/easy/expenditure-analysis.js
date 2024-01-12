/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryWiseSpent = [];
  for(let tx of transactions){
    const category = tx.category 
    const price = tx.price 

    let isFound = false 
    
    for(spent of categoryWiseSpent){
      if(spent.category === category){
        spent.totalSpent += price
        isFound = true 
        break
      }
    }

    if(!isFound){
      categoryWiseSpent.push({
        category,
        totalSpent:price
      })
    }
  }

  return categoryWiseSpent;
}

module.exports = calculateTotalSpentByCategory;
