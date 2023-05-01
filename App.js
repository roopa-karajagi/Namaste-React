//    const heading = document.createElement('h2');
//    heading.innerHTML = "Namaste Javascript!!";
//         const root = document.getElementById("root");
//         root.appendChild(heading);

const heading = React.createElement('h1' , {
    id:"title",
    className:'heading',
    style: {color:'red'}
} , "Namaste React!!!");
console.log(heading);


//core of react --> where we write our logic to be displayed on ui
const heading1 = React.createElement('h1' ,{style: {color:'blue'}} ,"Heading1");
const heading2 = React.createElement('h2' , {style: {color: 'green'}} ,"Heading2");
const container = React.createElement('div' , {id : "container" }, [heading1 , heading2]);
console.log(container);
//we are creating react using React.createRoot
//we are using ReactDOM --> this is where we are making changes to the DOM --> ReactDom is the one which  display our changes to the DOM and on UI
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing an react element inside the root
//injecting all react into the application through root render.
root.render(container);


//React Element is an Object
// {
//     "type": "div",
//     "key": null,
//     "ref": null,
//     "props": {
//         "id": "container",
//         "children": [
//             {
//                 "type": "h1",
//                 "key": null,
//                 "ref": null,
//                 "props": {
//                     "style": {
//                         "color": "blue"
//                     },
//                     "children": "Heading1"
//                 },
//                 "_owner": null,
//                 "_store": {}
//             },
//             {
//                 "type": "h2",
//                 "key": null,
//                 "ref": null,
//                 "props": {
//                     "style": {
//                         "color": "green"
//                     },
//                     "children": "Heading2"
//                 },
//                 "_owner": null,
//                 "_store": {}
//             }
//         ]
//     },
//     "_owner": null,
//     "_store": {}
// }

         