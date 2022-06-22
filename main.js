let customModal = document.getElementById("custom-modal");
let buttonContainer = document.getElementById("thumbnail-container");

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


let data = [
    {
        id:0,
        title:'Jadar',
        description: 'Jadar is a well designed contact managment systems. Users can create, read, update, and delete users from a database.',
        frontend:'HTML, CSS, JavaScript, and Bootstrap',
        backend:'PHP',
        images:['./images/jadar.png','./images/jadar4.png','./images/jadar2.png', './images/jadar3.png']
    },
    {
        id:1,
        title:`Autograder`,
        description:'Autograder is an electron application that helps users grade programming assignments.',
        frontend:'HTML, CSS, Bootstrap, Electron',
        backend:'Electron',
        images:['./images/autograder.png','./images/autograder-2.png','./images/autograder-3.png','./images/autograder-4.png','./images/autograder-5.png']
    },
    {
        id:2,
        title:`Danny's Yogurt`,
        description: `Danny's Yogurt is a fictional yogurt restaurant.`,
        frontend:'HTML, CSS, JavaScript, Boostrap',
        backend:'PHP, WordPress',
        images:['./images/danny-yogurt.png','./images/danny-yogurt2.png','./images/danny-yogurt3.png','./images/danny-yogurt4.png']
    },
    {
        id:3,
        title:`API Sandbox`,
        description:`API Sandbox is a website that allows users to select from a list of APIs and then type a term/query to make a reqest and populate the results to the screen.`,
        frontend:'HTML, CSS, JavaScript, and Bootstrap',
        images:['./images/api-sandbox.png','./images/api-sandbox2.png','./images/api-sandbox3.png']
    },
    {
        id:4,
        title:'Flower Power Mobile',
        description:`This is the mobile version of Flower Power. Flower power is a management tool that helps you keep track of your plants.`,
        frontend:'React Native',
        backend:'PHP',
        images:['./images/flower-power-mobile.png', './images/flower-power-mobile2.png','./images/flower-power-mobile3.png','./images/flower-power-mobile4.png','./images/flower-power-mobile5.png']
    },
    {
        id:5,
        title:'Flower Power Web',
        description:`This is the web version of Flower Power. Flower power is a management tool that helps you keep track of your plants.`,
        frontend:'React Native',
        backend:'PHP',
        images:['./images/flower-power-web.png','./images/flower-power-web2.png','./images/flower-power-web3.png','./images/flower-power-web4.png','./images/flower-power-web5.png']
    },
    {
        id:6,
        title:'Frozen Bottom Caves',
        description:`Frozen Bottom Caves is a dungeon crawler game where you are board piece on a board and are given a set of choices, and based off those choices the story of the games moves in a certain direction - good or bad. `,
        frontend:'Unity',
        backend:'',
        images:['./images/frozen-bottom0.png','./images/frozen-bottom1.png','./images/frozen-bottom2.png','./images/frozen-bottom3.png','./images/frozen-bottom4.png']
    },
    {
        id:7,
        title:'Console Dialogue',
        description:`This is just a console application that simulates dialogue using graph theory. `,
        frontend:'C#',
        backend:'',
        images:['./images/dialogue1.png','./images/dialogue2.png','./images/dialogue3.png']
    }
];

function findEntry(id){
    return data.filter((element)=>{
        if(element.id == id)
            return element;
    });
}

function populateModal(obj)
{
    let leftContent = document.querySelector(".custom-modal-content-left");

    let selectedImage = document.getElementById("selected-image");

    let singleContent= document.querySelector(".single-modal-content");

    leftContent.innerHTML = `
                <h2>${obj.title}</h2>
                  <p>${obj.description}</p>
                  <p class="text-bold">Frontend code:</p>
                  <p>${obj.frontend}</p>
                  <p class="text-bold">Backend code:</p>
                  <p>${obj.backend}</p>
    `;

    singleContent.innerHTML = `
    <h2>${obj.title}</h2>
      <p>${obj.description}</p>
      <p class="text-bold">Frontend code:</p>
      <p>${obj.frontend}</p>
      <p class="text-bold">Backend code:</p>
      <p>${obj.backend}</p>
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

}