/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
    if(typeof str !== 'string'){
        throw new Error('It should be a string!!!');
    }
   const splitString = str.split('');
   const reverseArray = splitString.reverse();
   return reverseArray.join('');
};

export default turnMeBaby;
