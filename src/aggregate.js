module.exports = class Aggregate {
  constructor(dbResult) {
    this.dbResult = dbResult;
  }

  totalPrice(){
    let totalPrice = 0;
    this.dbResult.forEach(row => {
      totalPrice = totalPrice + row.price;
    });
    return totalPrice;
  }

  purchaseHistory(){
    let purchaseHistory = "";
    this.dbResult.forEach(row => {
      purchaseHistory = purchaseHistory + row.title + "\t" + row.purchased + "\t" + row.price + "\n";
    });
    return purchaseHistory;
  }
}