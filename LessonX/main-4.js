function handeClick() {
    console.log("click");
}


const colorSkin = document.getElementById("color-skin");
const containerDiv = document.querySelector(".container");
const body = document.getElementsByTagName("body")[0];
function changeStyleColor(href) {
    colorSkin.setAttribute("href", href);
}




function changeStyleContainer(style) {
    const containerBox = "container " + style; 
    containerDiv.setAttribute("class", containerBox);
    console.log(style);
}

function changeBg(fileName) {
    console.log(fileName);
    if (fileName) {
        const valueStyle = "background-image: url('" + fileName +"')";
        console.log(body, fileName, valueStyle);

        body.setAttribute("style", valueStyle);
        
    } else {
        body.setAttribute("style", '');
    }
    
}