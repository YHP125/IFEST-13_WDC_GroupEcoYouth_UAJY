import { Product } from "./productData.js"
import { Transaction } from "./transactionData.js";
import { User } from "./userData.js"

const user = new User("dika","dik@dik.dik","sukadik")
const products = [
  new Product(124, "eco bag ahoy", 5000000.0, "Tas"),
  new Product(125, "eco shirt asoy", 5000000.0, "Baju"),
  new Product(123, "eco bag asoy", 5000000.0, "Tas"),
  new Product(126, "eco shirt ahoy", 5000000.0, "Baju"),
  new Product(127, "eco jeans asoy", 5000000.0, "Celana"),
  new Product(128, "eco skirt asoy", 5000000.0, "Celana"),
  new Product(129, "eco jeans ahoy", 5000000.0, "Celana")
]

const transaction = new Transaction(5123, [products[0], products[3]], "paid", "qris")

localStorage.setItem(Transaction.jsonListName, transaction.stringed)
localStorage.setItem("transactions", "yailahwoy");
const mania = localStorage.getItem("transactions");
console.log(JSON.parse(mania));