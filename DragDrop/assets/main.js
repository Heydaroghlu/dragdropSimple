let input=document.getElementById("exampletodo")
let button=document.getElementById("buttontodo")
let ultodo=document.getElementById("ultodo")
let id=2;
button.addEventListener("click",function()
{
    let li=document.createElement("li")
    li.setAttribute('draggable',true)
     li.addEventListener("dragstart",function(event)
     {
        event.dataTransfer.setData("Text", event.target.id);
     })
     li.setAttribute("id",id)
    li.innerHTML=input.value
    ultodo.appendChild(li)
    input.value=""

})

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
  function remove(ev)
  {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    var el = document.getElementById(data);
    el.parentNode.removeChild(el);
  }