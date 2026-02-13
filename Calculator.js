export class Calculator {
    static add(num1, num2){
        return num1+num2;
    }
    static subtract(num1,num2) {
        return num1-num2;
    }
    static multiply(num1,num2) {
        return num1*num2;
    }
    static divide(num1,num2) {
        if (num2==0) throw "Division by zero is prohibited";
        return num1/num2;
    }
    static square(num){
        return num*num;
    }
    static sqrt(num){
        return Math.sqrt(num);
    }
    static inverse(num){
        return (1/num);
    }
    static abs(num){
        return Math.abs(num);
    }
    static exp(base,exponent){
        return Math.pow(base,exponent);
    }
    static modulo(num1,num2){
        return (num1%num2);
    }
    static log(num){
        return Math.log10(num);
    }
    static ln(num){
        return Math.log(num);
    }
    static factorial(num){
        if (num < 0) throw "Factorial of a -ve number is prohibited";
        if (num==0 || num==1) return 1;
        let fact = num;
        for (let i=num-1;i>0;i--){
            fact *= i;
        }
        return fact;
    }
}