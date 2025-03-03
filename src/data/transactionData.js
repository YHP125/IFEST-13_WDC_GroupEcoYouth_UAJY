import { Product } from "./productData";

export class Transaction{
  static jsonListName = "transaction";
  /**
   * IKUTIN FORMAT PARAM NYA YA ANJG :)
   * @param {number} tid id transaksi
   * @param {[Product]} products array dari Product 
   * @param {"paid" | "unpaid" | "kasbon"} status status pembayaran
   * @param {"qris" | "credit" | "debit" | "bitcoin"} jenisPembayaran jenis dari pembayaran (bisa diganti dari default) 
   */
  constructor(tid, products, status, jenisPembayaran){
    this.tid = tid 
    this.products=products 
    this.status = status 
    this.jenisPembayaran = jenisPembayaran
  }

  /**
 * nyimpen list object buat yu.
 *
 * @param   newItem  isiin object yu ke localstorage.
 */
  static saveToList(newItem){
    let list = this.getList() || new Array;
    list.push(newItem)
    localStorage.setItem(this.jsonListName,JSON.stringify(list))
  }

  /**
   * liat list object yu.
   *
   * @return sudah di parse ke string
   */
  static getList(){return JSON.parse(localStorage.getItem(this.jsonListName))}

  /**
   * return string version dari object.
   */
  stringed(){return JSON.stringify(this)}
}