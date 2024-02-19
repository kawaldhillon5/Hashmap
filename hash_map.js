
class KeyValuePair {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

const peopleArray = [
                     new KeyValuePair("kawal","dhillon"), 
                     new KeyValuePair("noreen","dhillon"), 
                     new KeyValuePair("panth","dhillon"), 
                     new KeyValuePair("daman","gill"),
                     new KeyValuePair("arsh","gill"),
                     new KeyValuePair("karan","gill"),
                     new KeyValuePair("Paramjeet","dhillon"),
                     new KeyValuePair("Ranjit","dhillon"),
                     new KeyValuePair("Jajbir","Gill"),
                     new KeyValuePair("Kuldeep","Gill"),
                     new KeyValuePair("Rohit","Sandhu"),
                     new KeyValuePair("Ajay","sekhon"),
                     new KeyValuePair("Akash","dhillon"),
                     new KeyValuePair("Jaggi","Randhawa"),
                     new KeyValuePair("Fateh","dhillon"),
                     new KeyValuePair("Shubhneet","Ghuman"),
                     new KeyValuePair("Raman","dhillon"),
                     new KeyValuePair("Joban","dhillon"),
                     new KeyValuePair("Anurag","Singh"),
                     new KeyValuePair("Manbir","dhillon"),
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
        return (this.#map[hash].contains(input)) ? true: false;        
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
        value += "]";
        return value;
    }
  
  }
  
const hashMap = new HashMap();
hashMap.set(peopleArray);
console.log(hashMap.entries());
  