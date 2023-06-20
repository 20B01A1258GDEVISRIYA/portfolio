var tab=document.getElementsByClassName('sub-links');
var data=document.getElementsByClassName('sub-contents');
function display(name){
    for(i of tab){
        i.classList.remove('active-head');
    }
    for(i of data){
        i.classList.remove('active-list');
    }
    event.currentTarget.classList.add("active-head");
    document.getElementById(name).classList.add('active-list');
}
document.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById("bar");
    console.log(x);
    window.openmenu = function() {
        x.style.right = "0";
      };
      
      window.closemenu = function() {
        x.style.right = "-200px";
      };
  });