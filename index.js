// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2); 

const returnLastTwoDrivers = (drivers) => drivers.slice(2,);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier
function createFareMultiplier(n) {
    return function(fare) {
        return fare*n;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, fn) {
    if (fn == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arr);
    }
    if (fn == returnLastTwoDrivers) {
        return returnLastTwoDrivers(arr);
    }
}