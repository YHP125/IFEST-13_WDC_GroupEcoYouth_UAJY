import { useEffect, useState } from "react";
import { Product } from "../data/productData";
import { Transaction } from "../data/transactionData";
import { User } from "../data/userData";




export const Sandbox = () => {
  const user = new User("dika", "dik@dik.dik", "sukadik")
  const products = [
    new Product(124, "eco bag ahoy", 5000000.0, "Tas"),
    new Product(125, "eco shirt asoy", 5000000.0, "Baju"),
    new Product(123, "eco bag asoy", 5000000.0, "Tas"),
    new Product(126, "eco shirt ahoy", 5000000.0, "Baju"),
    new Product(127, "eco jeans asoy", 5000000.0, "Celana"),
    new Product(128, "eco skirt asoy", 5000000.0, "Celana"),
    new Product(129, "eco jeans ahoy", 5000000.0, "Celana")
  ]



  const tambahTransaksi = () => {
    const transaction = new Transaction(5123, [products[0], products[3]], "paid", "qris")
    Transaction.saveToList(transaction)
    setmania(Transaction.getList())
  }
  const [mania, setmania] = useState(Transaction.getList());

  useEffect(() => {
    console.log(mania);
  }, []);

  return (
    <>
      <button onClick={() => { tambahTransaksi() }}>tambah dumb</button>
      {/* <div>{mania}</div> */}
      <div></div>
    </>)
}