import { useState } from "react";

const Section =({title,description,isVisible,setIsVisible}) => {
    //we are removing from here , bcz we want to hide/show one section and other sections accordingly..
    //if section 1 is shown all other should be hidden 
    //if section section 2 show is clicked other things to be hidden. 
    // const [isVisible , setIsVisible] = useState(false); ==> it will set different states for different sections
    return(
    <div className="m-2 p-2 border-solid border-2">
        <div className="flex justify-between">
        <h1 className="font-bold text-lg inline">{title}</h1>
        {
            !isVisible ? (
                <button className="cursor-pointer font-bold text-sm underline" onClick={()=> setIsVisible(true)}> Show </button>
            ) : <button className="cursor-pointer font-bold text-sm  underline" onClick={()=> setIsVisible(false)}>Hide</button>
        }
        </div>
        {isVisible && <p className="p-2 text-justify">{description}</p>}
    </div>
    );
}

const InstaMart = () => {
const [isVisibleSection , setIsVisibleSection] = useState('');

const handleVisibleSection = (bl,title) =>{
        console.log("bl" , bl);
        console.log("title" , title)
       bl === true ? setIsVisibleSection(title) : setIsVisibleSection('');
}
return (
    <div className="w-full h-auto">
        <h1 className="text-3xl font-bold m-2 p-2">InstaMart</h1>
        <Section  
        title={"About Instamart"} 
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32\.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
        isVisible={isVisibleSection === 'about'}
        setIsVisible={(bl)=> handleVisibleSection(bl,'about')}
        />
        <Section  
        title={"Team Instamart"} 
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32\.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
        isVisible={isVisibleSection === 'team'}
        setIsVisible={(bl) =>handleVisibleSection(bl , 'team')}
        />
        <Section 
         title={"Carrer Instamart"} 
        description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32\.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
        isVisible={isVisibleSection === 'carrer'}
        setIsVisible={(bl) =>handleVisibleSection(bl ,'carrer')}
        />
    </div>
)
}

export default InstaMart;