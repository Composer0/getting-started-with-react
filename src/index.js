import React from 'react';
import ReactDOM from 'react-dom';


// Initial Trial

// ReactDOM.render(
// <div>
// <h1>My Man!</h1>
// <p>Hey there friend!</p>
// </div>,
//  document.getElementById('root'));


// 1st Challenge: Correct!

// ReactDOM.render(
// <div>
//     <h1>My Man!</h1>
//     <ul>
//         <li>Yes!</li>
//         <li>You!</li>
//         <li>Are!</li>
//     </ul>
// </div>,
//  document.getElementById('root'));



// Round 2

// const fName = "Orion";
// const lName = "Palmer";
// const luckyNumber = 27;

// ReactDOM.render(
// <div>
//     <h1>My Man!</h1>
//     <p>Hey there {fName + ' ' + lName}!</p>
//     <p>Template Literal Example {`${fName} ${lName}`}</p>
//     <p>The best number is {luckyNumber}!</p>
//     <p>The best random number is {Math.floor(Math.random() * 10)}!</p>
// </div>,
//  document.getElementById('root'));

//  {} initiates JS expression and variables. Can't write javascript statements.
// Template literal allows space without having to add the + ' ' + like in the 1st paragraph.


// Round 3

const yourName = "Orion Palmer";
const copyright = "2022";
const currentDate = new Date()
const year = currentDate.getFullYear();
console.log(currentDate)
console.log(year);

ReactDOM.render(
<div>
<h1>My Man!</h1>
<p>Created by {yourName}</p>
<p>Copyright {copyright}</p>
<p>This uses the automatically updating current date. {year}</p>
<p>This also works for automatically updating current date. Month seems to be counted as a 0-11 value however... 
<br></br>
<br></br>
{currentDate.getDate()}, {currentDate.getMonth()}, {currentDate.getFullYear()}</p>
</div>,
 document.getElementById('root'));