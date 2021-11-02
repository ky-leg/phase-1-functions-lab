// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    let dist = Math.abs(x - 42)
    return dist 
}

function distanceFromHqInFeet(x) {
    let distFeet = distanceFromHqInBlocks(x) * 264
    return distFeet
}

function distanceTravelledInFeet(x, y) {
    let distFeet = Math.abs(x - y)*264
    return distFeet
}

function calculatesFarePrice(a, b){
    let distFeet = distanceTravelledInFeet(a,b)
    debugger;
    if (distFeet <= 400 && distFeet > 0) { 
        let fare = 0
        return fare
    }

    else if (distFeet > 400 && distFeet < 2000) {
        let fare = (distFeet - 400) * 0.02
        return fare
    }

    else if (distFeet > 2000 && distFeet < 2500) { 
        let fare = (25)
        return fare
    }

    else {
        return 'cannot travel that far'
    }
}
calculatesFarePrice(44, 43) 