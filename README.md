Two pipes, X and Y, flow into a reservoir each with different flow rates  rateX = 16.45 gal/s and rateY = 18.9 gal/s  and out through pipe Z with flow rate , rateZ = rateX + rate Y, as shown in the diagram below. We need to determine the minimum sizes of pipeSizeX, pipeSizeY, and pipeSizeZ that can accommodate their flow rate with a tolerance of as close to 2% as possible, without going over.

Furthermore, we also need to determine the minimum valveSize that joins X and Y to Z

Given the following:

rateX = 16.45
rateY = 18.9
rateZ = rateX + rate Y

pipeSize = (1.732 x 12.9 x 200 x rate)/ (208 x tolerance)
tolerance <= 2%

valveSize = rate x 1.25 x 1.25

pipeSizes = [8,10,12,16,20,25,32,40,50,63,80,100,127,160,201,254,320,404,509,642,810,1021,1288,1624,2048,2582,3256,4106,5178,6529,8233,10382,13091,16507,20815,26248,33098,41735,52627,66361,83680,105518,133056,167780,211566,250000,300000,350000,400000,450000,500000,600000,700000,750000,800000,900000,1000000,1250000,1500000,1750000,2000000 ]

valveSizes = [15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]

Please write a function that takes in [rateX, rateY] and  returns [pipeSizeX, valveSizeX, pipeSizeY, valveSizeY, pipeSizeZ].