# Shares Account Manager

## 1.0 About

Calculates a user's balance and positions held in their investment account based on a set of transactions.

The input object (JSON) should contain the following:

- `type`: Type of transaction "BUY", "SELL", "WDL", "DEP". Determines which operation to execute.
- `net_amount`: The amount added or subtracted from the user's balance. A negative amount should be used for withdrawal.
- `quantity`: Quantity of shares being transacted.
- `symbol`: The three letter ticker symbol. Example: ABC.
- `country`: Country code. Example: CA.

Note: `symbol` and `country` are `null` for deposits and withdrawals.

## 2.0 Run

- `node app`
