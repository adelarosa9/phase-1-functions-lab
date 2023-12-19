const hqLocation = 42;
const feetPerBlock = 264;

function distanceFromHqInBlocks(location) {
  return Math.abs(location - hqLocation);
}

function distanceFromHqInFeet(location) {
  const distanceInBlocks = distanceFromHqInBlocks(location);
  return distanceInBlocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = Math.abs(destination - start);
  return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  let fare = 0;

  if (distanceInFeet <= 400) {
    fare = 0;
  } else if (distanceInFeet <= 400) {
    fare = 0.02 * (distanceInFeet - 1);
  } else if (distanceInFeet <= 2000) {
    fare = 0.02 * 64 + 0.01 * (distanceInFeet - 400);
  } else if (distanceInFeet <= 2500) {
    fare = 25;
  } else {
    fare = 'cannot travel that far';
  }
  return fare;
}