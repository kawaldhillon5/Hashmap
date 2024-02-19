class HashMap {
    #map;
    #size;
    constructor(){
      this.#map = [];
      this.#size = 16
    }
  
    #hash(key){
  
      let hashCode = 0;
        
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode = hashCode % this.#size;
      }
      return hashCode;
    }
  
    set(key, value){
  
    }
  
  }
  
  const hashMap = new HashMap();
  