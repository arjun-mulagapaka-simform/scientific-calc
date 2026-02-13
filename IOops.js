const inp = document.getElementById('inp-num');

export class IOops{
    static getData(){
        if (inp.value === "") {
            throw new Error("Input is empty or invalid");
        }

        const val = inp.valueAsNumber;

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
        if (inp.value === "") IOops.append('-');
        let sign = inp.value.slice(1);
        if (!sign.includes('-')){
            IOops.append('-');
        }
    }
}