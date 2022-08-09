document.addEventListener("DOMContentLoaded", function () {
    console.log("Dom content is loaded");
  });

let projectItems = document.getElementsByClassName("project-item");

for(let i = 0; i < projectItems.length; i++){
    let leftArrow = projectItems[i].getElementsByClassName("left-arrow");
    let rightArrow = projectItems[i].getElementsByClassName("right-arrow");

    projectItems[i].addEventListener("mouseover",(e)=>{
        leftArrow[0].style.display = "block";
        rightArrow[0].style.display = "block";
    });
    projectItems[i].addEventListener("mouseout",(e)=>{
        leftArrow[0].style.display = "none";
        rightArrow[0].style.display = "none";
    });
}

function handeClick(evt){

    let{action,id} = evt.target.dataset;
    console.log(evt.target);

    if(action){
        if(action == "left-arrow"){
            console.log("left arrow was selected.");
            let projectItem = evt.target.closest(".project-item");
            let image = projectItem.getElementsByTagName("img")[0];
            getNextImage(id,image, projectItem, action);
        }
        else if(action == "right-arrow"){
            console.log("right arrow was selected.");
            let projectItem = evt.target.closest(".project-item");
            let image = projectItem.getElementsByTagName("img")[0];
            getNextImage(id,image, projectItem, action);
        } 
    }
}

document.addEventListener("click",handeClick);

// Function to find entry with id
function findEntry(id){
    return data.filter((element)=>{
        if(element.id == id)
            return element;
    });
}

function getNextImage(id, image, projectItem, action){
    
    let n = data[id].images.length;
    let count;

    if(action == "left-arrow")
        count = parseInt(projectItem.dataset.count)-1;
    else
        count = parseInt(projectItem.dataset.count)+1;

    if(count >= n)
        count = 0;
        
    if(count < 0)
        count = n-1;

    projectItem.dataset.count = count;

    image.setAttribute("src",data[id].images[count]);
    console.log(image);
}


let data = [
    {
        id:0,
        images:['./images/jadar.png','./images/jadar4.png','./images/jadar2.png', './images/jadar3.png'],
    },
    {
        id:1,
        images:['./images/autograder.png','./images/autograder-2.png','./images/autograder-3.png','./images/autograder-4.png','./images/autograder-5.png'],
    },
    {
        id:2,
        images:['./images/flower-power-mobile.png', './images/flower-power-mobile2.png','./images/flower-power-mobile3.png','./images/flower-power-mobile4.png','./images/flower-power-mobile5.png'],
    },
    {
        id:3,
        images:['./images/flower-power-web.png','./images/flower-power-web2.png','./images/flower-power-web3.png','./images/flower-power-web4.png','./images/flower-power-web5.png']
    },
    {
        id:4,
        images:['./images/danny-yogurt.png','./images/danny-yogurt5.png','./images/danny-yogurt6.png','./images/danny-yogurt2.png','./images/danny-yogurt3.png','./images/danny-yogurt4.png'],
    },
    {
        id:5,
        images:['./images/frozen-bottom0.png','./images/frozen-bottom1.png','./images/frozen-bottom2.png','./images/frozen-bottom3.png','./images/frozen-bottom4.png'],
    },
    {
        id:6,
        images:['./images/dialogue1.png','./images/dialogue2.png','./images/dialogue3.png'],
    }
];