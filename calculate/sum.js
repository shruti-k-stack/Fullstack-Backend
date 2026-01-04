// Module protect their variables and functions from leaking into global scope

function calculateSum(a, b) {

    const sum = a + b;

    console.log(sum);
};

module.exports = { calculateSum };

// Alternatively, you can export them one by one. Both ways are valid.
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;