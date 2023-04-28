
function formReset(){
    var reset=confirm("Точно очистить форму?");
    if(reset) {   
        changeColor("red");
        setTimeout(changeColor, 1000, "white");
        document.getElementById("username").reset;
    }else{ 
        changeColor("green");
        setTimeout(changeColor, 1000, "white");
    }
}
function changeColor(color)
{
    for(var i = 0; i < 9; i ++)
    {
        document.getElementsByClassName("Fclass")[i].style.background=color;
    }
    document.getElementById("Fid").style.background=color;
}

function formSubmit()
{ 
  changeColor("blue");
  setTimeout(changeColor, 1000, "white");
  alert("Данные отправлены");
  EventTarget.preventDefault();
}
