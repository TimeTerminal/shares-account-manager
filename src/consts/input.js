const input = [
  {
    date: "2015-02-25",
    type: "DEP",
    symbol: null,
    country: null,
    quantity: "0.0",
    net_amount: "200.0"
  },
  {
    date: "2015-03-01",
    type: "WDL",
    symbol: null,
    country: null,
    quantity: "0.0",
    net_amount: "-50.0"
  },
  {
    date: "2015-02-26",
    type: "BUY",
    symbol: "ABC",
    country: "CA",
    quantity: "3.0",
    net_amount: "-70.0"
  },
  {
    date: "2015-02-26",
    type: "BUY",
    symbol: "ABC",
    country: "US",
    quantity: "5.0",
    net_amount: "-40.0"
  },
  {
    date: "2015-02-27",
    type: "SELL",
    symbol: "ABC",
    country: "CA",
    quantity: "-1.0",
    net_amount: "60.0"
  }
];

module.exports = {
  input
};
