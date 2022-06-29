let customModal = document.getElementById("custom-modal");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Dom content is loaded");
  });

function handeClick(evt){

    let{action,id} = evt.target.dataset;
    console.log(evt.target);

    if(action){
        if(action == "project"){
            
            console.log("Project was selected.");
            console.log(evt.target);
            console.log(parseInt(id));
            let entry = findEntry(parseInt(id));
            populateModal(entry[0]);
            customModal.classList.add("showItem");
        }
        else if(action == "close"){
            customModal.classList.remove("showItem");
        }
    }
    else if(customModal.contains(evt.target)){
        return;
    }
    else
        customModal.classList.remove("showItem");
}

document.addEventListener("click",handeClick);

// Function to find entry with id
function findEntry(id){
    return data.filter((element)=>{
        if(element.id == id)
            return element;
    });
}

// Function used to populate our modal
function populateModal(obj)
{
    let leftContent = document.querySelector(".custom-modal-content-left");

    let selectedImage = document.getElementById("selected-image");

    let buttonContainer = document.getElementById("thumbnail-container");

    leftContent.innerHTML = `
                <h2>${obj.title}</h2>
                  <p>${obj.description}</p>
                  <p class="text-bold">Frontend code:</p>
                  <p>${obj.frontend}</p>
                  <p class="text-bold">Backend code:</p>
                  <p>${obj.backend}</p>
                  <a href="${obj.github}" target="_blank" class="btn git-button">Github Repository</a>
    `;

    selectedImage.setAttribute("src", obj.images[0]);


    while(buttonContainer.firstElementChild){
        buttonContainer.firstElementChild.replaceWith(buttonContainer.firstElementChild.cloneNode(true));
        buttonContainer.removeChild(buttonContainer.firstElementChild);
    }

    for(let i = 0; i < obj.images.length; i++)
    {
        let div = document.createElement("div");
        div.setAttribute("class","circle");
        div.addEventListener("click", ()=>{
            selectedImage.setAttribute("src",obj.images[i]);
        });
        buttonContainer.appendChild(div);
    }

    populateMobile(obj);

}

function populateMobile(obj)
{
    let mobileContent = document.getElementById("custom-modal-mobile-text-content");

    let mobileContainer = document.querySelector(".custom-modal-content-mobile");

    let selectedImage = document.getElementById("mobile-image");

    let buttonContainer = document.getElementById("mobile-thumbnail-container");

    mobileContent.innerHTML = `
                <h2>${obj.title}</h2>
                  <p>${obj.description}</p>
                  <p class="text-bold">Frontend code:</p>
                  <p>${obj.frontend}</p>
                  <p class="text-bold">Backend code:</p>
                  <p>${obj.backend}</p>
                  <a href="${obj.github}" target="_blank" class="btn git-button">Github Repository</a>
    `

    selectedImage.setAttribute("src", obj.images[0]);


    while(buttonContainer.firstElementChild){
        buttonContainer.firstElementChild.replaceWith(buttonContainer.firstElementChild.cloneNode(true));
        buttonContainer.removeChild(buttonContainer.firstElementChild);
    }

    mobileContainer.style.backgroundColor="#3282B8";
    mobileContent.style.display="block";
    selectedImage.style.display = "none";

    for(let i = -1; i < obj.images.length; i++)
    {
        let div = document.createElement("div");
        div.setAttribute("class","circle");
        div.addEventListener("click", ()=>{
            if(i==-1){
                mobileContainer.style.backgroundColor="#3282B8";
                mobileContent.style.display="block";
                selectedImage.style.display = "none";
            }
            else{
                selectedImage.setAttribute("src",obj.images[i]);
                selectedImage.style.display = "block";
                mobileContainer.style.backgroundColor="transparent";
                mobileContent.style.display="none";
            }  
        });
        buttonContainer.appendChild(div);
    }
}


let data = [
    {
        id:0,
        title:'Jadar',
        description: 'Jadar is a well designed contact managment systems. Users can create, read, update, and delete users from a database.',
        frontend:'HTML, CSS, JavaScript, and Bootstrap',
        backend:'PHP',
        images:['./images/jadar.png','./images/jadar4.png','./images/jadar2.png', './images/jadar3.png'],
        github:"https://github.com/RichardGullo/CMS-Project"
    },
    {
        id:1,
        title:`Autograder`,
        description:'Autograder is an electron application that helps users grade programming assignments.',
        frontend:'HTML, CSS, Bootstrap, Electron',
        backend:'Electron',
        images:['./images/autograder.png','./images/autograder-2.png','./images/autograder-3.png','./images/autograder-4.png','./images/autograder-5.png'],
        github:"https://github.com/RichardGullo/autograder-electron-project"
    },
    {
        id:2,
        title:`Danny's Yogurt`,
        description: `Danny's Yogurt is a fictional yogurt restaurant.`,
        frontend:'HTML, CSS, JavaScript, Bootstrap',
        backend:'PHP, WordPress',
        images:['./images/danny-yogurt.png','./images/danny-yogurt5.png','./images/danny-yogurt6.png','./images/danny-yogurt2.png','./images/danny-yogurt3.png','./images/danny-yogurt4.png'],
        github:"https://github.com/RichardGullo/Dannys-Yogurt"
    },
    {
        id:3,
        title:`API Sandbox`,
        description:`API Sandbox is a website that allows users to select from a list of APIs and then type a term/query to make a reqest and populate the results to the screen.`,
        frontend:'React',
        images:['./images/api-sandbox.png','./images/api-sandbox2.png','./images/api-sandbox3.png'],
        backend:'Node',
        github:'https://github.com/RichardGullo/API-React-Sandbox'
    },
    {
        id:4,
        title:'Flower Power Mobile',
        description:`This is the mobile version of Flower Power. Flower power is a management tool that helps you keep track of your plants.`,
        frontend:'React Native',
        backend:'PHP',
        images:['./images/flower-power-mobile.png', './images/flower-power-mobile2.png','./images/flower-power-mobile3.png','./images/flower-power-mobile4.png','./images/flower-power-mobile5.png'],
        github:'https://github.com/RichardGullo/Flower-Power-Mobile'
    },
    {
        id:5,
        title:'Flower Power Web',
        description:`This is the web version of Flower Power. Flower power is a management tool that helps you keep track of your plants.`,
        frontend:'React',
        backend:'PHP',
        images:['./images/flower-power-web.png','./images/flower-power-web2.png','./images/flower-power-web3.png','./images/flower-power-web4.png','./images/flower-power-web5.png'],
        github:'https://github.com/RichardGullo/Flower-Power-Web'
    },
    {
        id:6,
        title:'Frozen Bottom Caves',
        description:`Frozen Bottom Caves is a dungeon crawler game where you are board piece on a board and are given a set of choices, and based off those choices the story of the games moves in a certain direction - good or bad. `,
        frontend:'Unity',
        backend:'',
        images:['./images/frozen-bottom0.png','./images/frozen-bottom1.png','./images/frozen-bottom2.png','./images/frozen-bottom3.png','./images/frozen-bottom4.png'],
        github:'https://github.com/RichardGullo/FrozenBottomCaves-Team-Project'
    },
    {
        id:7,
        title:'Console Dialogue',
        description:`This is just a console application that simulates dialogue using graph theory. `,
        frontend:'C#',
        backend:'',
        images:['./images/dialogue1.png','./images/dialogue2.png','./images/dialogue3.png'],
        github:'https://github.com/RichardGullo/Console-Dialogue-System'
    }
];