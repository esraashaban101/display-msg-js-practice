let button =document.getElementById("btn")
let input =document.getElementById("input")
let msg=document.getElementById("message-box")
button.addEventListener("click",function()
    
    {
        if(input.value !="")
      {
        msg.innerHTML=input.value;
      }
        else
        {
         msg.innerHTML="Enter a valid message";
        
        }
    }
)