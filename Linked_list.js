class Node {
    constructor(value, node){
  
      this.value = value ? value : null;
      this.next = node ? node: null;
  
    }

  }
  
  class LinkedList {
  
    #head;
    #last;
    #length;
  
    constructor(){
  
      this.#head = null;
      this.#last = null;
      this.#length = 0;
    
    }

  
    append(...values){
      values.forEach(value => {
        if (this.#last) {
          this.#last = this.#last.next = new Node(value);
        } else {
          this.#head = this.#last = new Node(value);
        }
        this.#length++;
      });
  
    }
  
    prepend(...values){
      values.reverse();
      values.forEach(value =>{
        if (this.#head) {
          this.#head  = new Node(value, this.#head);
        } else {
          this.#head = this.#last = new Node(value);
        }
        this.#length++;
      });
      
  
    }
  
    size(){
      return this.#length;
    }
  
    first (){
      return this.#head;
    }
  
    tail(){
      return this.#last;
    }
  
    at(index){
  
      let node = this.#head;
      for(let i = 0; i < index; i++){
        node = node.next
      }
      return node;
    }
  
    pop(){
  
      const value = this.#last.value;
      if (this.#head == null){
        return;
      }
      else if (this.#head == this.#last){
        this.#head = null;
        this.#last = null;
        this.#length--
      }
      else {
        let temp = this.#head;
        let pre = this.#head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.#last = pre;
        this.#last.next = null;
        this.#length--
      }
      return value;
    }
  
    contains(input) {
  
      let node = this.#head;
      let found = false;
      for(let i = 0; i <= this.#length; i++){
        if(node){
          if(node.value.key === input.key){
            found = true;
          }
          node = node.next;
        }
      }
      return found;
    }
  
    find(input){
      let node = this.#head;
      let index = null;
      for(let i = 0; i <= this.#length; i++){
        if(node){
          if(node.value.key === input.key){
            index =  i
          } 
          node = node.next;
        }
      }
      return index;
    }
  
    toString(){
      let node = this.#head;
      let value = "";
      for(let i = 0; i <= this.#length; i++){
        if(node === null){
            value += ``; 
        } else {
            value += `[${node.value.key}, ${node.value.value}],`;
            node = node.next;
        }
      }
      return value;
    }
  
    insertAt(index, value){
  
      if(!(index > this.#length || index < 0)){
        let node = this.#head;
        let pre = this.#head;
        if(!(index === 0)){
          for(let i = 0; i < index; i++){
            pre = node;
            node = node.next
          }
          pre.next = new Node(value, node);
          if(this.#length === index){
            this.#last = pre.next;
          }
        } else {
          this.#head = new Node(value, node);
        }
        this.#length++;
      } else {
  
        return undefined;
      }
    }

    add(element){
        let added = false
        if(this.contains(element)){
            this.at(this.find(element)).value.value = element.value;
        } else {
            this.append(element);
            added = true;
        }
        return added;   
    }
  
    removeAt(index){
      if(!(index > this.#length || index < 0)){
        let node = this.#head;
        let pre = this.#head;
        if(!(index === 0)){
          for(let i = 0; i <= index; i++){
            pre = node;
            node = node.next
          }
          if(this.#length === (index+1)){
            this.pop();
          } else {
            pre.next = node.next
            this.#length--;
          }
        } else {
          this.#head = this.#head.next;
          this.#length--;
        }
      } else {
  
        return undefined;
      }
    }
  }

