function getOutput(output){
  document.getElementById("output").innerHTML = output;
}
function getOrignalString(Ostring){
  document.getElementById("statement").innerHTML = Ostring;
}

function inputvalue(){
   return document.getElementById("inputText").value;
   
}

// funtion for if else statement
let ifElseStatement = function(){
  let todayDate = new Date();
  let today = todayDate.getDay();
  if(today === 0)
    getOutput("Today is sunday");
    else if(today === 2)
    getOutput("Today is Tuesday");
    else if(today === 3)
    getOutput("Today is Wednesday");
    else if(today === 4)
    getOutput("Today is Thursday");
    else if(today === 5)
    getOutput("Today is friday");
    else 
    getOutput("Today is saturday");
  
}
// switch statement
let switchStatement = ()=>{
  let todayDate = new Date();
  let today = todayDate.getDay();
   switch(today){
    case 0 :
    case 6 : 
    getOutput("its sunday or saturday")
    break;
    case 1:
      getOutput("its Monday");
      break;

      case 2:
        getOutput("its tuesday")
        break;

        case 3:
          getOutput("its wednesday");
          break;

          case 4:
            getOutput("its thursday");
            break;

            default :
              getOutput("its friday");

   }
   
   


}

let askingTheName = ()=>{
   do{
    var name = prompt("please enter your name");

   }while(name === null || name === "")

   getOrignalString(name);
}
function clearInput(){
  document.getElementById("inputText").value = "";

}
function clearOutput(){
  document.getElementById("output").innerHTML = "";

}
