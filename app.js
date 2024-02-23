const btn1 = document.getElementById("btn1")
btn1.addEventListener("click",() =>{
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value

    let x = `
    Hello ${name}, I see that youy are from ${address}
    and you are also pursuing ${major} and you can be contacted using
    ${telephone}.
    `
    document.getElementById("output1").innerHTML = x
})
function calculateProfit() {

    var projectedAmount = parseFloat(document.getElementById("projectedAmount").value);
    
    var profit = projectedAmount * 0.23;

    document.getElementById("profitDisplay").innerHTML = "The profit that will be made from the projected amount of total sales is: " + profit;
}
function calculateDistance() {
    var speed = 60; 
    
    var distance5Hours = speed * 5;
    var distance8Hours = speed * 8;
    var distance12Hours = speed * 12;
    
    document.getElementById("distanceDisplay").innerHTML = "Distance traveled in 5 hours: " + distance5Hours + " miles<br>" +
        "Distance traveled in 8 hours: " + distance8Hours + " miles<br>" +
        "Distance traveled in 12 hours: " + distance12Hours + " miles";
}
function calculateMPG() {

    var milesDriven = parseFloat(document.getElementById("milesDriven").value);
    var gallonsUsed = parseFloat(document.getElementById("gallonsUsed").value);
    
    var mpg = milesDriven / gallonsUsed;
    
    document.getElementById("mpgDisplay").innerHTML = "The car's miles per gallon (MPG) is: " + mpg;
}
function convertTemperature() {

    var celsius = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius temperature.");
        return;
    }


    var fahrenheit = (9/5) * celsius + 32;

    document.getElementById("result").innerHTML = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2);
}
function calculateCalories() {
    var cookiesEaten = document.getElementById('cookiesInput').value;

    
    var cookiesPerServing = 40 / 10; 
    var caloriesPerServing = 300;

    
    var totalCalories = (cookiesEaten / cookiesPerServing) * caloriesPerServing;

  
    document.getElementById('result2').innerHTML = "Total calories consumed: " + totalCalories + " calories";
}
function calculatePercentages() {
    
    var males = parseInt(document.getElementById('malesInput').value) || 0;
    var females = parseInt(document.getElementById('femalesInput').value) || 0;

    var totalStudents = males + females;

    
    var percentageMales = (males / totalStudents) * 100;
    var percentageFemales = (females / totalStudents) * 100;

    
    document.getElementById('result3').innerHTML = "Percentage of Males: " + percentageMales.toFixed(2) + "%<br>" +
                                                    "Percentage of Females: " + percentageFemales.toFixed(2) + "%";
}