function changeBackground() 
{
  document.body.style.backgroundColor = "lightblue";
}

function goodVibes() 
{
  document.getElementById("goodVibes").style.display = "block";
}

function showImage()
{
    document.getElementById("bild1").style.display = "block";
}

function hideImage()
{
    document.getElementById("bild1").style.display = "none";
    document.getElementById("bild2").style.display = "none";
}

function changeImage()
{
    document.getElementById("bild1").style.display = "none";
    document.getElementById("bild2").style.display = "block";
}

function displayTime()
{
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("tiid").innerText = timeString;
}

function showHeader() {
    const headerDiv = document.getElementById("headerdiv");
    document.getElementById("goodVibes").style.display = "none";
    headerDiv.innerHTML = "<h1>Be the best version of you!</h1>";
    headerDiv.style.display = "block";

}

function removeHeader() {
    const headerDiv = document.getElementById("headerdiv");
    headerDiv.innerHTML = "";
    headerDiv.style.display = "none";
}

function showTimeAndHeader() {
    const now = new Date();
    const headerDiv = document.getElementById("headerdiv");
    document.getElementById("tiid").style.display = "none";
    headerDiv.innerHTML = `
        <h1>Be the best version of you!</h1>
        <p>${now}</p>`
        headerDiv.style.display = "block";
}
