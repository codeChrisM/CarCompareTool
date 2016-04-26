//javascript code



function test(){

var carName = document.getElementById("carName").value;
var mpg = parseInt(document.getElementById("mpg").value,10);
var costGallon = parseInt(document.getElementById("currentGasCost").value,10);
var costCar = parseInt(document.getElementById("askingPrice").value,10);
var currentMiles = parseInt(document.getElementById("currentMiles").value,10);
var dayMiles= parseInt(document.getElementById("workDistance").value,10);
var aveYearMiles =  dayMiles*(2*5*52);//one way trip s cause back and forth in a day  5 days for work week  52 weeks per year.
var moreWork = document.getElementById("intern").checked;


console.log("carName: " + carName + typeof carName);
console.log("mpg: " + mpg + typeof mpg);
console.log("costGallon: " + costGallon + typeof costGallon);
console.log("costCar: " + costCar + typeof costCar);

console.log("dayMiles: " + dayMiles + typeof dayMiles);
console.log("aveYearMiles: " + aveYearMiles + typeof aveYearMiles); //trips*days*weeks;

}









































//--------------------------------------------------------------------------------
var moreWork = document.getElementById("intern").checked;

var lifeSpan = parseFloat(span()).toFixed(2);
console.log("lifespan1"+typeof lifeSpan);
console.log("lifespan2"+ lifeSpan );



//var gasCost= parseFloat((aveYearMiles, mpg, costGallon)).toFixed(2);
var gasCost= 2; //build function to calculate gas cost.

console.log("1 gas cost" + typeof gasCost);



var possibleCost = moreWork + totalCost;

var lowTotal= totalCost - possibleCost;

var difCost = dif(currentMiles);




if(moreWork){
	var x= prompt("how much can the work cost up to?"," ");
	var moreWork = parseInt(x);
} else {
	var moreWork= parseInt(0);
}

//function for gas for year  #completed#
function gas(mpg, yearlyMiles, currentGasCost)
{   
	console.log("dayMiles: " + dayMiles + typeof dayMiles);
	console.log("aveYearMiles: " + aveYearMiles + typeof aveYearMiles); 
	// var mpg =
	// var yearlyMiles =
	// var currentGasCost =
	var aveYearMiles= dayMiles*(2*5*52);
	var yearlyGasCost= gasCost+ aveYearMiles;
	console.log("aveYearMiles: " + aveYearMiles + typeof aveYearMiles); //
	console.log("yearlyGasCost:"+ yearlyGasCost);
	yearlyGasCost= parseInt(yearlyGasCost);
	console.log("yearlyGasCost:"+ yearlyGasCost);
	console.log("yearlyGasCost:"+ typeof yearlyGasCost);
	return yearlyGasCost;
}

//How much GAS$ will be spent before hit 200,000 miles? # completed#
function dif(arg1)
{
	var difMiles = 200000 - arg1 ;
	var difGallons=  difMiles/mpg  ;

	var difAmount = difGallons * costGallon;
	console.log(difAmount+111);
	return difAmount;
}

//number of years years to get to 200,000 miles. #completed#
function span()
{
	var difMiles = 200000 - currentMiles ;
	var lifeyears = difMiles/ aveYearMiles;
	console.log(lifeyears+111);
	return lifeyears;
}

//MAX car will cost for it's LIFE #completed#
function total(arg1)
{ 
	var totala= parseInt(arg1) + difCost + moreWork;
	console.log(totala+111);
	return totala;
}

var totalCost = parseInt(total(costCar));

// low end estimate with out work done. #NOT DONE#
function lowENDtotal(arg1)
{ 
	var totala= arg1 + difCost + moreWork;
	console.log(totala+111);
	return totala;
}






//Answers to if you should but the car #completed# 
function car(){
"It would cost $" + totalCost + "to get 200,000 miles  from the " + carName +   ".");
}

if(moreWork > 1){
	console.log( "Or possibily only $" +  lowTotal + ", if you don't need that work done.");
}else{
	console.log("so WHat you thinking?");
}

// i would like it to travel through and break it down into months then weeks.



//-------------------------------------
