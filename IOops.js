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
    static setData(num){
        inp.value = num;
    }
}