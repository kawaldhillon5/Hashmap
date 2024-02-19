
class KeyValuePair {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

const peopleArray = [
                     new KeyValuePair("kawal","dhillon"),
                    ]

class HashMap {
    #map;
    #size;
    #noOfKeys;
    constructor(){
      this.#map = [];
      this.#size = 16
      this.#noOfKeys = 0;
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
    
    set(arr){
        arr.forEach(element =>{
            const index = this.#hash(element.key);
            if (index < 0 || index >= this.#size) {
                throw new Error("Index out of bound");
            } else {
                if(!(this.#map[index])){
                    this.#map[index] = new LinkedList();
                    this.#map[index].add(element);
                    this.#noOfKeys++; 
                } else {
                    if(this.#map[index].add(element)){
                        ++this.#noOfKeys;
                    }
                };
            }
        });
    }

    get(key){
        const input = {key: key}
        const hash = this.#hash(key);
        if(this.#map[hash].contains(input)){
            return this.#map[hash].at(this.#map[hash].find(input)).value.value;
        } else {
            return null;
        }
    }

    has(key){
        const input = {key: key}
        const hash = this.#hash(key);
        if(this.#map[hash]){
            return (this.#map[hash].contains(input));
        } else {
            return false;
        }        
    }

    remove(key){
        const input = {key: key}
        const hash = this.#hash(key);
        if(this.has(key)){
            --this.#noOfKeys;
            return this.#map[hash].removeAt(this.#map[hash].find(input));
        } else {
            return false;
        }
    }
       
    length(){
        return this.#noOfKeys;
    }

    clear(){
        this.#map = [];
        this.#noOfKeys = 0;
    }

    entries(){
        let value = "[";
        this.#map.forEach(element =>{
            value += `${element.toString()}`;
        });
        value += "] ";
        return value;
    }
  
  }
  
const hashMap = new HashMap();
hashMap.set(peopleArray);
console.log(hashMap.entries());


  