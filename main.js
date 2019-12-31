let myArr = {
  length: 0,

  push: function (item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  },

  pop: function () {
    let itemToDelete = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return itemToDelete;
  }
}

myArr.push("hello");
myArr.push("bye");
console.log(myArr.pop());
console.log(myArr);