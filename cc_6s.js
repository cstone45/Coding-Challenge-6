//Task 1:Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold; //Defines the numerical units and identifies the equation used to solve for Total Profit
    return (profit) //Causes the code to run in the console and display the Total Profit generated by running the values through the equation
};
console.log("Total Profit:$", calculateProfit(20, 30, 100)); //Logs the Total profit generated by running the values 20, 30, and 100 through the equation
console.log("Total Profit:$", calculateProfit(50, 70, 200)); //Logs the Total Profit generated by running the values 50, 70, and 200 through the equation