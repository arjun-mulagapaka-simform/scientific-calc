const inp = document.getElementById('inp-num');

export class IOops{
    static getData(){
        // if (isNaN(inp.value)) throw "Enter a number"; need to improve this
        return parseFloat(inp.value.trim());
    }
    static setData(num){
        inp.innerText = "";
        inp.innerText = num;
    }
}