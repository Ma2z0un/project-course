var setColor1 = document.getElementById("setColor");
function updateDate() {
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate() + "-" + parseInt(date.getMonth() + 1) + " - " + date.getFullYear();
}

setInterval(updateDate, 100);
onload = () => {
    getColor();
    updateDate();

}


function getColor() {
    // var getColor = document.getElementById("setColor").value;
    // localStorage.setItem("Color", getColor);
    document.getElementById("time").style.background = localStorage.getItem("Color");
    document.getElementById("date").style.background = localStorage.getItem("Color");
}

function setColor() {
    // document.getElementById("setColor").value = localStorage.getItem("Color");
    // document.getElementById("time").style.background = localStorage.getItem("Color");
    // document.getElementById("body").style.background = localStorage.getItem("Color");
    document.getElementById("time").style.backgroundColor = document.getElementById("setColor").value;
    document.getElementById("date").style.backgroundColor = document.getElementById("setColor").value;
    localStorage.setItem("Color", document.getElementById("setColor").value);
}
setColor1.addEventListener("change", () => {
    setColor();
});





// setInterval(setColor, 100);
