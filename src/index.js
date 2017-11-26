import './index.css'; // imports css for webpack to bundle

import numeral from 'numeral';

const courseValue = numeral(Math.random()*1000).format('$0,0.00');

/* [use this in multiline comment to disable a certain rule] */

/* eslint-disable no-console */
console.log(`I would pay ${courseValue} for this awesome course!`); // watch the backticks
