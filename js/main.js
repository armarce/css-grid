let id = 'grid';

const container = document.getElementById(id);
const elements = container.childNodes;
    
initialValues = [];

elements.forEach(element => {

    initialValues.push(element.textContent);
    let elWidth = element.clientWidth;
    
    element.innerHTML = `${element.textContent} (${elWidth}px)`;

});      

window.onresize = () =>{

    const container = document.getElementById(id);
    const elements = container.childNodes;
    
    let i = 0;

    elements.forEach(element => {

        let initialValue = initialValues[i];
        let elWidth = element.clientWidth;

        element.innerHTML = `${initialValue} (${elWidth}px)`;
        i++;
    });

}