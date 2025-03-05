export class Product{
  constructor(id, name, price, category){
    this.id = id
    this.name = name
    this.price = price
    this.category = category
  }
  static jsonListName="product"

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