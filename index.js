// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const blocks = Math.abs(startBlock - endBlock);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock){
    const distanceInFeet=distanceTravelledInFeet(startBlock, endBlock)
    if (distanceInFeet <= 400) {
        return 0; 
      } else if (distanceInFeet <= 2000) {
        const fare = (distanceInFeet - 400) * 0.02; 
        return fare;
      } else if (distanceInFeet <= 2500) {
        return 25; 
      } else {
        return 'cannot travel that far'
}
}
