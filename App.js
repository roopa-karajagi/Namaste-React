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

const heading1 = React.createElement('h1' ,{style: {color:'blue'}} ,"Heading1");
const heading2 = React.createElement('h2' , {style: {color: 'green'}} ,"Heading2");
const container = React.createElement('div' , {id : "container" }, [heading1 , heading2]);
console.log(container);
//we are creating react using React.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing an react element inside the root
heading.innerHTML= "Namaste JS!!!";
root.render(heading);         