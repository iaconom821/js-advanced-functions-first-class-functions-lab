// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0,2)


const returnLastTwoDrivers = (arr) => arr.slice(-2)


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}



const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, callback) {
    return callback(arr)
}
