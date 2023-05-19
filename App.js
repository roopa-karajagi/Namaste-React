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

* In normal create react app by default react uses webpack and babel 
* -----here we use parcel and babel 
* Browselist -- which makes our app  compatible with different browser 

* trasitive dependencies means --> not only dependent on parcel , it also depends on other packages
*To run production build app , we need to add dependencies to run the application and this dependencies also dependent on other packages too so it is called trasitive dependencies - dendency Tree
*/

//added key inside it 
const heading1 = React.createElement(
  "h1",
  { style: { color: "blue" }, key: "hp1", id: "title1" },
  "Namaste React Live Course"
);
const heading2 = React.createElement(
  "h2",
  { style: { color: "green" }, key: "hp2", id: "title2" },
  "Hurray , New Year. Let's begin this year new learnings"
);

const heading3 = React.createElement("h3" , {id:"n1"} , "Next Level")
// React.createContext = Object => HTML(DOM)
const container = React.createElement(
  "div",
  { id: "container", hellow: "Roopa" },
  [heading1, heading2,heading3]
);

 // first needs to render the code and let it available and then with settimeout we can change the content of the tags.
//  else it doens't work

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "heading",
//     style: { color: "red" },
//   },
//   "Namaste React!!!"
// );

// setTimeout(
//   function(){
//     var heading3 = document.getElementById('title');
//     console.log(heading3)
//     heading3.innerHTML = 'Namaste JS'
//   }
//   , 1)


//JSX -- jsx is html like syntax, its not HTML
// JSX --> React.createElement -->Object --> HTML(DOM) --> it is converted by babel

 //we are creating react using React.createRoot
 const root = ReactDOM.createRoot(document.getElementById("root"));
 // passing an react element inside the root
 root.render(container); 

//  ReactDOM --> connects with DOM --> where react is responsible for my UI changes but displaying it on screen reactDOM does its work--> manipulating the DOM and display code changes on UI screen

// ReactDoM uses createroot --> from where i need run the application and render has component which one torender on screen


//In newer version we have to createRoot using ReactDOM.createRoot(document.getElementById('root')) and render the application using
// root.render(App)
// THis was used till React17 version ReactDOM.render( <App /> ,document.getElementById('root')); --> this can also be written


// BUNDLER
// webpack
// vite , parcel
