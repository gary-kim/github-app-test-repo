/**
 * @file Main file of get-in-range
 * @license LGPL-3.0
 * @author Gary Kim
 */

/**
 * Returns closest value to input in given range
 * 
 * @param {number} input
 * @param {number} min Minimum value of range
 * @param {number} max Maximum value of range
 * @param {boolean} [onerr] Return NaN instead of throwing error.
 * @returns {number} Closest value to input in given range
 */
function getInRange(input, min, max, onerr)    {

    let pinput = parseFloat(input);
    let pmin = parseFloat(min);
    let pmax = parseFloat(max);

    if( isNaN(pmin) || isNaN(pmax) || isNaN(pinput) ) {
        if(onerr) return NaN;
        throw "given a argument that is NaN";
    }

    if(pmin > pmax) {
        if(onerr) return NaN;
        throw "provided minimum value is larger then maximum value";
    }

    if(pinput <= pmin) return pmin;

    if(pinput >= pmax) return pmax;

    return pinput;

}

module.exports = getInRange;
