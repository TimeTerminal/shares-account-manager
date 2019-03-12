const { input } = require("./src/consts/input");
const startingBalance = 0;
const startingPosition = {};

function main() {
  // Iterate through input
  let userBalance = startingBalance;
  let userPosition = startingPosition;

  console.log("Starting balance: ", userBalance);
  console.log("Starting position: ", userPosition, "\n======");

  input.map(activity => {
    let amountToSpendOrWithdraw = Math.abs(parseInt(activity.net_amount));
    let sharesToSell = Math.abs(parseInt(activity.quantity));
    let fullShareName = activity.symbol + "-" + activity.country;

    switch (activity.type) {
      // BUY
      case "BUY":
        console.log("------ \nBUY \n------");
        if (userBalance < amountToSpendOrWithdraw) {
          console.log("Insufficient balance for: ", activity.type);
        } else {
          userBalance += parseInt(activity.net_amount);

          if (Object.values(userPosition).indexOf(fullShareName) === -1) {
            userPosition[fullShareName] = 0;
            userPosition[fullShareName] += parseInt(activity.quantity);
          } else {
            userPosition[fullShareName] += parseInt(activity.quantity);
          }
        }
        console.log("Balance: ", userBalance);
        console.log("Position: ", userPosition);
        break;

      // SELL
      case "SELL":
        console.log("------ \nSELL \n------");
        if (Object.keys(userPosition).indexOf(fullShareName) === -1) {
          console.log(
            "You have no shares of",
            fullShareName,
            "to available to sell."
          );
        } else {
          if (userPosition[fullShareName] < sharesToSell) {
            console.log("Insufficient balance for: ", fullShareName);
          } else {
            userPosition[fullShareName] += parseInt(activity.quantity);
          }
          userBalance += parseInt(activity.net_amount);
        }
        console.log("Balance: ", userBalance);
        console.log("Position: ", userPosition);
        break;

      // WITHDRAW
      case "WDL":
        console.log("------ \nWDL \n------");
        if (userBalance < amountToSpendOrWithdraw) {
          console.log("Insufficient balance for: ", activity.type);
        } else {
          userBalance += parseInt(activity.net_amount);
        }
        console.log("Balance: ", userBalance);
        console.log("Position: ", userPosition);
        break;

      // DEPOSIT
      case "DEP":
        console.log("------ \nDEP \n------");
        userBalance += parseInt(activity.net_amount);
        console.log("Balance: ", userBalance);
        console.log("Position: ", userPosition);
        break;

      default:
        break;
    }
  });

  console.log("======\nFinal balance: ", userBalance);
  console.log("Final position: ", userPosition);
}

main();
