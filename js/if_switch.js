"use strict";

if (1){
    console.log('OK!');
} else {
    console.log('ERROR!');
}

// const num = 45;
// if (num < 49){
//     console.log('error!');
// }else if (num > 100){
//     console.log('MNOGO');
// }else {
//     console.log('OK');
// }

(num === 50) ? console.log('OK') : console.log('error!');

const num = '51';
switch (num){
    case 49: 
        console.log('NEVERNO');
        break;
    case 100:
        console.log('NEVERNO');
        break;
    case '50':
        console.log('VERNO');
        break;
    default:
        console.log('NEXT_TIME');
        break;
}