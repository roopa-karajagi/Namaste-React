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

// React.createElement ==> Object ==> render HTML(DOM)
// Key and Id is different : React keeps track of key to comapre the elements

//Adding multiple elements inside it , it will become messy
const container = React.createElement(
  "div",
  { id: "container", hellow: "Roopa" },
  [
    React.createElement(
      "h1",
      { style: { color: "blue" }, key: "1", id: "title1" },
      "Namaste React Live!!!"
    ),
    React.createElement(
      "h2",
      { style: { color: "green" }, key: "2", id: "title2" },
      "Hurray , Let's begin with New Beginnings"
    ),
    React.createElement("h3", { id: "title3", key: "3" }, "Next Level"),
  ]
);
//Adding ul Tag

const unOrderList = React.createElement(
  "ul",
  { id: "unorder", hellow: "Roopa" },
  [
    React.createElement("li", { key: "l1" }, "Home"),
    React.createElement("li", { key: "l2" }, "About"),
    React.createElement("li", { key: "l3" }, "Contact"),
  ]
);

// JSX: 
// JSX ELement  -- It is not HTML inside Javascript, its HTML -like syntax
// JSX --> React.createElement -->Object --> HTML(DOM) --> it is converted by babel
//  React Element in JSX -- JSX expression -- its JSX syntax
const heading = <h1 key="1">Namaste React</h1>;
const heading2 = (
  <h2 key="h_2" id="title">
    Hurray!! Live Class
  </h2>
);
// console.log("heading2" , heading2)
//we are creating react root using React.createRoot
/********************************************* */

//const root = ReactDOM.createRoot(document.getElementById("root"));

// passing an react element inside the root
// async defer
/********************************************* */

// root.render([heading , heading2]);

/********************************************* */
// FUnctional Component -- Normal javascript Function itself
const Title =()=>(
  <h1 id="title_1">
    Life Lines
  </h1>
)

// we can write  functional component in different types
const HeaderComponent = () =>{
  return (
    <div>
      <Title />
      {/* {Title()} */}
      <h1>Rise Up</h1>
      <h2>Life is Made for Living</h2>
    </div>
  )
}
const HeaderComponent1 =() =>(
  <div>
    <h1>Rise Up</h1>
    <h2>Focus</h2>
  </div>
)
function HeaderComponent2() {
  return (
    <div>
      <h3>Go and Learn New Things</h3>
    </div>
  )
}
const HeaderComponent3 = function() {
  return (
    <div> 
      <h4>Dedicate soul and time</h4>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <HeaderComponent />
  <HeaderComponent1/>
  <HeaderComponent2 />
  <HeaderComponent3 />
 </> )

// BUNDLER
// webpack
// vite , parcel
