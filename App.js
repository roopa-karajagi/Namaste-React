import React from "react";
import ReactDOM from "react-dom/client";

/*
PARCEL ---
* HMR - Hot module reloading
* File watcher algorith - written in C++
* BUNDLING
* MINIFY
*CLEANING UP THE CODE //REMOVING CONSOLES
* DEV AND PRODUCTION BUILD --     npx parcel build (start file) , npx parcel build (start file)
* SUPER FAST BUILD ALGORITHMS
* IMAGE OPTIMIZATION
* CACHING MECHANISM WHILE DEVELOPMENT
* port number is taken care by parcel
* https on dev -- we can not use , google doesn't trust locahost
* Compatible with older version of browser
* Consistent Hashing Alogorithm
* Zero config
* Tree shaking -- removing unwanted codes

* normal  create react app we use webpack and babel 
* -----here we use parcel and babel 
Browselist -- which makes our app  compatible with different browser 


* Assignment
what is Consistent hashing? what is zero config
documentation on parcel , 


* trasitive dependencies -- not only dependent on parcel , it also depends on other packages
To run production build app , we need to dependencies to run the application and this dependencies also dependent on other packages too
so it is called trasitive dependencies - dendency Tree
*/
const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "heading",
    style: { color: "red" },
  },
  "Namaste React!!!"
);
console.log(heading);

const heading1 = React.createElement(
  "h1",
  { style: { color: "blue" }, key: "hp1" ,id:'title1'},
  "Namaste React Live Course"
);
const heading2 = React.createElement(
  "h2",
  { style: { color: "green" }, key: "hp2" ,id:'title2'},
  "Hurray , New Year. Let's begin this year new learnings"
);

// React.createContext = Object => HTML(DOM)
const container = React.createElement(
  "div",
  { id: "container", hellow: "Roopa" },
  [heading1, heading2]
);

// const heading3 = document.getElementById('title');
//  console.log(heading3);
// heading3.innerHTML= "Namaste JS!!!";
// console.log(heading3);


//JSX -- jsx is html like syntax, its not HTML
// JSX --> React.createElement -->Object --> HTML(DOM) --> it is converted by babel

// react keeps track of key not the id -- so key is important in React

const track1 = (
  <h2 id="n1" key="n1"> Hurray , New Year</h2>
)

// JSX how does it is executed 
//we are creating react using React.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing an react element inside the root

root.render(container);

// BUNDLER
// webpack
// vite , parcel
