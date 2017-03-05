function calculateAllSizes(rateX, rateY){
  // Pipe X
  var pipeSizeX = pipeSize(rateX, 0.20);
  // Pipe Y
  var pipeSizeY = pipeSize(rateY, 0.20);
  // Pipe Z
  var rateZ = rateX + rateY;
  var pipeSizeZ = pipeSize(rateZ, 0.20);
  return {
    pipeSizeX: pipeSizeX,
    valveSizeX: valveSizeX,
    pipeSizeY: pipeSizeY,
    valveSizeY: valveSizeY,
    pipeSizeZ: pipeSizeZ
  }
}

function pipeSize(rate, tolerance) {
  return (1.732 * 12.9 * 200 * rate)/ (208 * tolerance)
}

function valveSize(rate) {
  return rate * 1.25 * 1.25;
}

var pipeSizes = [8,10,12,16,20,25,32,40,50,63,80,100,127,160,201,254,320,404,509,642,810,1021,1288,1624,2048,2582,3256,4106,5178,6529,8233,10382,13091,16507,20815,26248,33098,41735,52627,66361,83680,105518,133056,167780,211566,250000,300000,350000,400000,450000,500000,600000,700000,750000,800000,900000,1000000,1250000,1500000,1750000,2000000 ]

var valveSizes = [15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]