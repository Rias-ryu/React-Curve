function customRender(reactElement , container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href'  , reactElement.props.href)
    // domElement.setAttribute('target'  , reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if (prop === 'children') continue
       domElement.setAttribute(prop , reactElement.props[prop])
    }

    container.appendChild(domElement)

}


console.log("helo");


const reactElement = {
    type: 'a',
    props:{
        href : "https://example.com",
        target: '_blank'
    },
    children: 'Click me to visit the link' 
}

const mainContainer = document.getElementById("root")

customRender(reactElement , mainContainer)