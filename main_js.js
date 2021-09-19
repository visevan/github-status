


const svgCheck = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const svgCross = document.createElementNS("http://www.w3.org/2000/svg", "svg");

const pathCheck1 = document.createElementNS("http://www.w3.org/2000/svg","path");
const pathCheck2 = document.createElementNS("http://www.w3.org/2000/svg","path");
const pathCross1 = document.createElementNS("http://www.w3.org/2000/svg","path");
const pathCross2 = document.createElementNS("http://www.w3.org/2000/svg","path");

function setAttributes(elem, attrs) {
  for(var key in attrs) {
    elem.setAttribute(key, attrs[key]);
  }
}

setAttributes(svgCheck, {"width": "22", "height": "22", "fill": "green", "class": "bi bi-check-circle ms-auto", "viewBox":"0 0 16 16"});
pathCheck1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
pathCheck2.setAttribute("d", "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z");

setAttributes(svgCross, {"width": "22", "height": "22", "fill": "green", "class": "bi bi-x-circle ms-auto", "viewBox":"0 0 16 16"});
pathCross1.setAttribute("d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
pathCross2.setAttribute("d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z");

svgCheck.appendChild(pathCheck1);
svgCheck.appendChild(pathCheck2);
svgCross.appendChild(pathCross1);
svgCross.appendChild(pathCross2);

const columnStatus = document.querySelectorAll("#gitstatus");

/*
for (let i = 0; i < columnStatus.length; i++) {
  columnStatus[i].appendChild(svgCheck.cloneNode(true));
}
*/


const api_url = "https://www.githubstatus.com/api/v2/summary.json";
async function getStatus(){
    const response = await fetch(api_url);
    const data = await response.json();
    data.components.splice(3,1);
    data.components.forEach((elem, index) => {
        if(elem.status === "operational"){
            columnStatus[index].appendChild(svgCheck.cloneNode(true));
            }
        if(elem.status !== "operational"){
            columnStatus[index].appendChild(svgCross.cloneNode(true));
        }
    });
}

getStatus();







