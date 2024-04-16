let display=document.getElementById("calc")

function Display(num){
      display.value+=num;
}

function Clear(){
    display.value='';
}

function Delete(){
    display.value=display.value.slice(0,-1);
}

function Calc(){
    try{
        display.value=eval(display.value);
    }
    catch(err){
        display.value="Error";
    }
}