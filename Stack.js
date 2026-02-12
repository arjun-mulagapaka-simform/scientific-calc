export class Stack {
    constructor(){
        this.stack = [];
    }
    push(val){
        try {
            this.stack.push(val);
        } catch (error) {
            return error;
        }
        return true;
    }
    pop(){
        if (this.stack.length == 0) return false;
        let top = this.stack.pop();
        return top;
    }
    peek(){
        if (this.stack.length == 0) return false;
        return this.stack[this.stack.length-1];
    }
}