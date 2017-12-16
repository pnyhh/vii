var Storage = {
  getStorage:function(key) {
    return JSON.parse(window.localStorage.getItem(key));
  },
  saveStorage:function(key,value) {
    window.localStorage.setItem(key,JSON.stringify(value));
  },
  removeStorage:function(key) {
    window.localStorage.removeItem(key);
  },
  clearStorage:function() {
    window.localStorage.clear();
  }
}

export default Storage
