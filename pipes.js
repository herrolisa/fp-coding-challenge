function calculateAllSizes(rateX, rateY){
  // Pipe X
  var pipeSizeX = pipeSize(rateX);
  var valveSizeX = valveSize(rateX)
  // Pipe Y
  var pipeSizeY = pipeSize(rateY);
  var valveSizeY = valveSize(rateY)
  // Pipe Z
  var rateZ = Number(rateX) + Number(rateY);
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
    throw new Error('Sorry, valve sizes are not available for the given flow rates. Please try again with alternative flow rates.')
  }else{
    return valve;
  }
}

var pipeSizes = [8,10,12,16,20,25,32,40,50,63,80,100,127,160,201,254,320,404,509,642,810,1021,1288,1624,2048,2582,3256,4106,5178,6529,8233,10382,13091,16507,20815,26248,33098,41735,52627,66361,83680,105518,133056,167780,211566,250000,300000,350000,400000,450000,500000,600000,700000,750000,800000,900000,1000000,1250000,1500000,1750000,2000000]

var valveSizes = [15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

var calculate = document.getElementById('calculate');
calculate.addEventListener('click', runProgram);
var xPipe = document.getElementById('x-pipe');
var yPipe = document.getElementById('y-pipe');
var zPipe = document.getElementById('z-pipe');
var xValve = document.getElementById('x-valve');
var yValve = document.getElementById('y-valve');
var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var errorBox = document.getElementById('error-container');
function runProgram() {
  errorBox.innerHTML = '';
  xPipe.innerHTML = '<strong>X Pipe Size:</strong> _____';
  yPipe.innerHTML = '<strong>Y Pipe Size:</strong> _____';
  xValve.innerHTML = '<strong>X Valve Size:</strong> _____';
  yValve.innerHTML = '<strong>Y Valve Size:</strong> _____';
  zPipe.innerHTML = '<strong>Z Pipe Size:</strong> _____';
  v1.style.width = '50px';
  v1.style.height = '50px';
  v1.style.top = '77.5px';
  v1.style.left = '75px';
  v2.style.width = '50px';
  v2.style.height = '50px';
  v2.style.top = '172.5px';
  v2.style.left = '75px';
  try{
    var xInput = document.getElementById('flow-rate-x').value;
    var yInput = document.getElementById('flow-rate-y').value;
    var results = calculateAllSizes(xInput, yInput);
    xPipe.innerHTML = '<strong>X Pipe Size:</strong> ' + results.pipeSizeX;
    yPipe.innerHTML = '<strong>Y Pipe Size:</strong> ' + results.pipeSizeY;
    xValve.innerHTML = '<strong>X Valve Size:</strong> ' + results.valveSizeX;
    v1.style.width = results.valveSizeX + 'px';
    v1.style.height = results.valveSizeX + 'px';
    v1.style.top = 100 - results.valveSizeX/2 + 2.5 + 'px';
    v1.style.left = 100 - results.valveSizeX/2 + 'px';
    v2.style.width = results.valveSizeY + 'px';
    v2.style.height = results.valveSizeY + 'px';
    v2.style.top = 200 - results.valveSizeY/2 - 2.5 + 'px';
    v2.style.left = 100 - results.valveSizeY/2 + 'px';
    yValve.innerHTML = '<strong>Y Valve Size:</strong> ' + results.valveSizeY;
    zPipe.innerHTML = '<strong>Z Pipe Size:</strong> ' + results.pipeSizeZ;
  }
  catch(err){
    errorBox.innerHTML = err.message;
  }
}

var reset = document.getElementById('reset');
reset.addEventListener('click', resetProgram);
function resetProgram() {
  document.getElementById('flow-rate-x').value = "16.45";
  document.getElementById('flow-rate-y').value = "18.9";
  errorBox.innerHTML = '';
  xPipe.innerHTML = '<strong>X Pipe Size:</strong> _____';
  yPipe.innerHTML = '<strong>Y Pipe Size:</strong> _____';
  xValve.innerHTML = '<strong>X Valve Size:</strong> _____';
  yValve.innerHTML = '<strong>Y Valve Size:</strong> _____';
  zPipe.innerHTML = '<strong>Z Pipe Size:</strong> _____';
  v1.style.width = '50px';
  v1.style.height = '50px';
  v1.style.top = '77.5px';
  v1.style.left = '75px';
  v2.style.width = '50px';
  v2.style.height = '50px';
  v2.style.top = '172.5px';
  v2.style.left = '75px';
}