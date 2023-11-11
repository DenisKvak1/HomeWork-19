function LeapYear(number) {
    if (isNaN(number)) {
        return NaN;
    }
    return number % 4 === 0;
}

function IMT(mass, height) {
    if (isNaN(mass) || isNaN(height)) {
        return NaN;
    }
    return mass / (height ** 2);
}
let Button = document.getElementById("calcB");
let Input = document.getElementById("inputValue");
let result = document.getElementById("result");

let Button2 = document.getElementById("calcA");
let InputMASS= document.getElementById("mass");
let InputHeight = document.getElementById("height");
let result2 = document.getElementById("resultIMT");
let result3 = document.getElementById("resultIMT2");

Button.addEventListener("click", function() {
    if(!isNaN(LeapYear(Input.value))){
        if(Input.value){
            if(LeapYear(Input.value)){
                result.textContent='Год високосный'
            }
            else{
                result.textContent='Год не високосный'
            }
        }
    }
    else{
        result.textContent='Введите корректные данные'
    }
    
});
Button2.addEventListener("click", function() {
    if(InputMASS.value && InputHeight.value){
        let imt=IMT(InputMASS.value,InputHeight.value)
        if(InputHeight.value<2.6){
            if(!isNaN(imt)){
                result3.textContent=`Ваш имт: ${Math.round(imt)}`;
                if (imt < 18.5) {
                    result2.textContent = "Недостаточная масса тела (дефицит массы).";
                } else if (imt >= 18.5 && imt <= 24.9) {
                    result2.textContent = "Нормальная масса тела.";
                } else if (imt >= 25 && imt <= 29.9) {
                    result2.textContent = "Избыточная масса тела (предожирение).";
                } else if (imt >= 30 && imt <= 34.9) {
                    result2.textContent = "Ожирение I степени.";
                } else if (imt >= 35 && imt <= 39.9) {
                    result2.textContent = "Ожирение II степени.";
                } else if (imt > 40) {
                    result2.textContent = "Ожирение III степени (крайне высокий уровень ожирения).";
                }            
            }
            else{
                result2.textContent="Введите корректные данные";
            }
        } 
        else{
            result3.textContent="";
            result2.textContent="Введите данные в метрах xD";
        }
    }});

