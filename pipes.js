function calculateAllSizes(rateX, rateY){
  // Pipe X
  var pipeSizeX = pipeSize(rateX);
  var valveSizeX = valveSize(rateX)
  // Pipe Y
  var pipeSizeY = pipeSize(rateY);
  var valveSizeY = valveSize(rateY)
  // Pipe Z
  var rateZ = rateX + rateY;
  var pipeSizeZ = pipeSize(rateZ);
  return {
    pipeSizeX: pipeSizeX,
    valveSizeX: valveSizeX,
    pipeSizeY: pipeSizeY,
    valveSizeY: valveSizeY,
    pipeSizeZ: pipeSizeZ
  }
}

function pipeSize(rate) {
  // filter through all pipe sizes that allow flow rate with a tolerance of up to 2%
  var filteredPipes = pipeSizes.filter(function (elem) {
    return (1.732 * 12.9 * 200 * rate)/ (208 * elem) <= 0.02;
  })
  // return pipe size with a tolerance closest to 2%
  return filteredPipes[0];
}

function valveSize(rate) {
  var valve = Math.round(rate * 1.25 * 1.25 / 5) * 5;
  if (valve < 15 || valve > 100){
    throw new Error("Sorry, valve sizes are not available for the given flow rates. Please try again with alternative flow rates.")
  }else{
    return valve;
  }
}

var pipeSizes = [8,10,12,16,20,25,32,40,50,63,80,100,127,160,201,254,320,404,509,642,810,1021,1288,1624,2048,2582,3256,4106,5178,6529,8233,10382,13091,16507,20815,26248,33098,41735,52627,66361,83680,105518,133056,167780,211566,250000,300000,350000,400000,450000,500000,600000,700000,750000,800000,900000,1000000,1250000,1500000,1750000,2000000]

var valveSizes = [15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

var calculate = document.getElementById('calculate');
calculate.addEventListener('click', runProgram);
var output = document.getElementById('output');
function runProgram() {
  try{
    var xInput = document.getElementById('flow-rate-x').value;
    var yInput = document.getElementById('flow-rate-y').value;
    var results = calculateAllSizes(xInput, yInput);
    output.innerHTML = "Pipe X Size: " + results.pipeSizeX + " " + results.valveSizeX ;
  }
  catch(err){
    output.innerHTML = err.message;
  }
}