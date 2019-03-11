const { input } = require("./src/consts/input");
const startingPosition = 0;
const startingBalance = 0;

function main() {
  // Iterate through input
  let userBalance = startingBalance;
  let userPosition = startingPosition;

  console.log("Starting balance: ", userBalance);
  console.log("Starting position: ", userPosition);

  input.map(activity => {
    // let userBalance = startingBalance;
    let amountToSpendOrWithdraw = Math.abs(parseInt(activity.net_amount));
    let sharesToSell = Math.abs(parseInt(activity.quantity));

    switch (activity.type) {
      // BUY
      case "BUY":
        console.log("BUY");
        if (userBalance < amountToSpendOrWithdraw) {
          console.log("Insufficient balance for: ", activity.type);
        } else {
          console.log("Old balance is: ", userBalance);
          userBalance += parseInt(activity.net_amount);
          userPosition += parseInt(activity.quantity);
          console.log("New balance is: ", userBalance);
          console.log("New position is: ", userPosition);
        }
        break;

      // SELL
      case "SELL":
        console.log("SELL");
        if (userPosition < sharesToSell) {
          console.log("Insufficient balance for: ", activity.type);
        } else {
          userBalance += parseInt(activity.net_amount);
          userPosition += parseInt(activity.quantity);
          console.log("New balance is: ", userBalance);
          console.log("New position is: ", userPosition);
        }
        break;

      // WITHDRAW
      case "WDL":
        console.log("WDL");
        console.log("Old balance is: ", userBalance);
        if (userBalance < amountToSpendOrWithdraw) {
          console.log("Insufficient balance for: ", activity.type);
        } else {
          userBalance += parseInt(activity.net_amount);
          console.log("New balance is: ", userBalance);
        }
        break;

      // DEPOSIT
      case "DEP":
        console.log("DEP");
        console.log("Old balance is: ", userBalance);
        userBalance += parseInt(activity.net_amount);
        console.log("New balance is: ", userBalance);
        break;

      default:
        break;
    }
  });

  console.log("Final balance: ", userBalance);
  console.log("Final position: ", userPosition);
}

main();
