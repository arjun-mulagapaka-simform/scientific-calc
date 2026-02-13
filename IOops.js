const inp = document.getElementById('inp-num');

export class IOops{
    static getData(){
        if (inp.value === "") {
            throw new Error("Input is empty or invalid");
        }

        const val = Number(inp.value);

        if (Number.isNaN(val)) {
            throw new Error("Enter a valid number");
        }

        return val;
    }
    static getDataOp(e){
        let val = e.currentTarget.dataset.op.trim();
        return val;
    }
    static setData(num){
        inp.value = num;
    }
    static append(e){
        if (inp.value.length > 10) throw "Number too large";
        let digit = IOops.getDataOp(e);
        inp.value += digit;
    }
    static clear(){
        inp.value = "";
    }
    static pop(){
        if (inp.value === "") return;
        inp.value = inp.value.slice(0,-1);
    }
    static addDecimal(){
        const val = inp.value;
        const lastNumber = val.split(/[\+\-\*\/\(\)]/).pop();

        if (!lastNumber.includes(".")) {
            inp.value += ".";
        }
    }
    static toggleSign(){
        if (inp.value === "") return;
        
        if (!inp.value.startsWith('-')){
            inp.value = "-" + inp.value;
        }else {
            inp.value = inp.value.slice(1);
        }
    }
}