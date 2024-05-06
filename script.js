let circles=document.querySelectorAll(".circle"),
light=0;

setInterval(()=>{
    changelight();
    
},1000)


function changelight(){
    circles[light].classList="circle";
    light++;

    if(light>2){
        light=0;
    }
    const select=circles[light];
    select.classList.add(select.getAttribute("color"));

}

document.addEventListener('DOMContentLoaded', 
function () {
    var colors = ['yellow', 'green', 'red']; //color list
    var currentIndex = 0; 
        var circles = document.querySelectorAll(".circle");
    var light = 0;

    function changeColor() {
        document.querySelector('.circlestatus').style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeColor, 1000);
});

