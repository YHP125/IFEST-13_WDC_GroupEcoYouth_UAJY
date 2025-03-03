export class User {
  constructor(userId, name, email, password){
    this.userId = userId
    this.name = name
    this.email = email
    this.password = password
  }

  static jsonListName="user"
  
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