//creating a function it takes 2 arguments 1 element to be injected & 2 where it will be injected

function customRender(elemInject, elemDir){
    /*
    //creating a dom element of type reactElement
    const domElement=document.createElement(reactElement.type)

    //inserting some properties and attributes
    domElement.innerHTML=reactElement.children;

    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement);
    */

    // # Creating a loop based approach for multiple attributes

    const domElement =document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    
    for (const prop in reactElement.props) {
        if(prop==='children'){
            continuel
        }
        domElement.setAttribute(prop,reactElement.props[prop])
        
    }
    container.appendChild(domElement);

}


//how react stores the components inside a dom
let reactElement={
    type:'a',
    props:{
        //it stores properties or attrributes in key:value pair
        href:"https//google.com",
        target:"_blank"
    },
    children: "click here to visit google"
}

//selecting the element
let container =document.querySelector("#root");



//injecting in index.html
customRender(reactElement,container);