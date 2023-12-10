// To find the highest altitude reached by the biker during the road trip, you can iterate through the gain array,
// calculating the cumulative altitude at each point and keeping track of the maximum altitude reached.
function highestAltitude(gain) {
    // let maxAltitude = 0;
    // let currentAltitude = 0;

    // for (const change of gain) {
    //     currentAltitude += change;
    //     maxAltitude = Math.max(maxAltitude, currentAltitude);
    // }
    // return maxAltitude;

    // var res = [0];
    // var high = 0;
    // for (var i = 0; i < gain.length; i++) {
    //     res[i + 1] = res[i] + gain[i];
    //     if (res[i + 1] > high) {
    //         high = res[i + 1];
    //     }
    // }
    // return high;

    gain.unshift(0);
    let value = 0;
    let sum = gain.map((v) => (value += v));

    return Math.max(...sum);
}

let gain1 = [-5, 1, 5, 0, -7];
console.log(highestAltitude(gain1));

gain1 = [-4, -3, -2, -1, 4, 3, 2];
console.log(highestAltitude(gain1));

// This function highestAltitude iterates through the gain list, accumulates the changes in altitude,
// and keeps track of the maximum altitude reached(maxAltitude).
// Finally, it returns the highest altitude reached during the trip.
