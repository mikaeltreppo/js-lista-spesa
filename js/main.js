let list = [ "pane", "latte", "caffe", "mela", "olio"]

const listDom = document.getElementById("list");


let i = 0;

while(i <= list.length - 1){
   
listDom.innerHTML += "<li>" +list[i] + "</li>";
  i++;
  
}
