const { input } = require("./src/consts/input");
const startingBalance = 0;
const startingPosition = {};

function updateUserBalance(userHoldings, amount) {
  userHoldings.balance += parseInt(amount);
  return userHoldings;
}

function updateUserPosition(userHoldings, shareName, amount) {
  userHoldings.position[shareName] += parseInt(amount);
  return userHoldings;
}

function main() {
  // Iterate through input
  let userHoldings = {
    balance: startingBalance,
    position: startingPosition
  };

  console.log(
    "============\nUser holdings at start: ",
    userHoldings,
    "\n============"
  );

  input.map(activity => {
    let amountToSpendOrWithdraw = Math.abs(parseInt(activity.net_amount));
    let sharesToSell = Math.abs(parseInt(activity.quantity));
    let fullShareName = activity.symbol + "-" + activity.country;

    switch (activity.type) {
      // BUY
      case "BUY":
        console.log("-------------\nBUY\n");
        if (userHoldings.balance < amountToSpendOrWithdraw) {
          console.log("Insufficient balance");
        } else {
          if (
            Object.values(userHoldings.position).indexOf(fullShareName) === -1
          ) {
            userHoldings.position[fullShareName] = 0;
          }

          updateUserBalance(userHoldings, activity.net_amount);
          updateUserPosition(userHoldings, fullShareName, activity.quantity);
        }
        console.log("Balance: ", userHoldings.balance);
        console.log("Position: ", userHoldings.position);
        break;

      // SELL
      case "SELL":
        console.log("-------------\nSELL\n");
        if (Object.keys(userHoldings.position).indexOf(fullShareName) === -1) {
          console.log(
            "You have no shares of",
            fullShareName,
            "to available to sell."
          );
        } else {
          if (userHoldings.position[fullShareName] < sharesToSell) {
            console.log("Insufficient balance for: ", fullShareName);
          } else {
            updateUserBalance(userHoldings, activity.net_amount);
            updateUserPosition(userHoldings, fullShareName, activity.quantity);
          }
        }
        console.log("Balance: ", userHoldings.balance);
        console.log("Position: ", userHoldings.position);
        break;

      // WITHDRAW
      case "WDL":
        console.log("-------------\nWDL\n");
        if (userHoldings.balance < amountToSpendOrWithdraw) {
          console.log("Insufficient balance");
        } else {
          updateUserBalance(userHoldings, activity.net_amount);
        }
        console.log("Balance: ", userHoldings.balance);
        console.log("Position: ", userHoldings.position);
        break;

      // DEPOSIT
      case "DEP":
        console.log("-------------\nDEP\n");
        updateUserBalance(userHoldings, activity.net_amount);
        console.log("Balance: ", userHoldings.balance);
        console.log("Position: ", userHoldings.position);
        break;

      default:
        break;
    }
  });

  console.log(
    "============\nUser balance at end: ",
    userHoldings,
    "\n============"
  );
}

main();
