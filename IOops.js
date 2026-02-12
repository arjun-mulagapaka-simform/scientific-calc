const inp = document.getElementById('inp-num');

export class IOops{
    static getData(){
        return parseFloat(inp.innerText.trim());
    }
    static getTextFromButton(btn){
        let text = btn.innerText.trim();
        return text;
    }
    static setData(num){
        inp.innerText = "";
        inp.innerText = num;
    }
}