"use strict";

const checkTheme = document.getElementById("switch");

checkTheme.addEventListener("change", (e)=>{
    if (e.target.checked) {
        document.documentElement.style.setProperty('--bgToggle', 'hsl(230, 17%, 14%)');
        document.documentElement.style.setProperty('--VeryDarkBlue', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--LightGrayishBlue', 'hsl(228, 28%, 20%)');
        document.documentElement.style.setProperty('--VeryPaleBlue', 'hsl(228, 28%, 20%)');
    }else{
        document.documentElement.style.setProperty('--bgToggle', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--VeryDarkBlue', 'hsl(230, 17%, 14%)');
        document.documentElement.style.setProperty('--LightGrayishBlue', ' hsl(227, 47%, 96%)');
        document.documentElement.style.setProperty('--VeryPaleBlue', 'hsl(225, 100%, 98%)');
    }
    
})