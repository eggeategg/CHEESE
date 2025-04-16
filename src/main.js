import "./assets/style.css"
import profileImage from "/images/IMG_0479 3.jpg"
import image1 from "/images/DSC_0172.jpg"
import image2 from "/images/DSC_0226.jpg"



document.querySelector('#app').innerHTML = `
<header class="flex justify-between items-start bg-slate-500 p-7 w-full">
  <h1 class="title font-mono text-3xl text-white">Personality Through Photography</h1>

  <div class="rounded-full border-4 border-white p-1 bg-slate-300">
    <img src=${profileImage} class="w-16 h-16 rounded-full object-cover" alt="Profile Image">
  </div>
</header>



<div class="flex justify-end pr-10 mt-2">
  <select id="sortDropdown" class="p-2 rounded-md bg-white text-black border border-gray-300 shadow hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
  <label for="sortDropdown" class="mr-2 text-white font-mono">Sort by:</label>
    <option value="">Sort Cards</option>
    <option value="az">Title A-Z</option>
    <option value="za">Title Z-A</option>
  </select>
</div>
<div id="card-container" class="p-9 space-y-6"></div>



<div class="card w-[1000px] bg-slate-400 shadow-2xl rounded-2xl" style="display: none">
 <div class=" p-3 card-content flex row w-[400px] space-x-10">
    
    <img  id="photo" src="" alt="TV Show Poster" />
   
    <div class=" w-[600px]">
      <div class="flex row justify-around align-bottom  w-[550px]">
        <h2 class=" text-2xl font-mono underline">TV Show Title</h2>
       <p id="bullet1" class="text-2xl font-mono" >Bullet Point 1</p>
      </div>
      <ul class="">
        
        
        <li id="bullet2" class = " py-3 font-serif text-xl">Bullet Point 2</li>
        <li id="bullet3" class = " py-3 font-serif text-xl">Bullet Point 3</li>
     </ul>
  </div>
</div>
</div>

<div class="footer">
<button onclick="quoteAlert();">Get A Quote!</button>
<button onclick="removeLastCard();">Remove A Card!</button>
</div>
`



class imageCard {
  constructor(title, image, location, date, description, x, y, ttext) {
    this.title = title;
    this.image = image;
    this.date =date;
    this.location = location;
    this.description = description;
    this.x = x;
    this.y = y;
    this.ttext = ttext;

    
  }
  //here are a couple of methods to gather data I made in the begining
  getTitle() {
    return this.title;
  }
  
}

let imageCards = [
  new imageCard(
    "A",
    image1,
    "Downtown, San Louis Obispo",
    "This photo was taken as part of a project for a photography class I was taking at the time. The project was based around the idea that although man creates, nature allways finds a way to take back the ground.",
    "Nov 2024",
    50,
    30,
    "I love plants"
  
  ),
  new imageCard(
    "B",
    image2,
    "SLO",
    "description",
    "Nov 2024",
    10,
    30
  ),
  new imageCard(
    "B",
    image2,
    "SLO",
    "description",
    "Nov 2024",
    10,
    30
  ),
  new imageCard(
    "B",
    image2,
    "SLO",
    "description",
    "Nov 2024",
    10,
    30
  )
]



// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < imageCards.length; i++) {
    let imageCard = imageCards[i];

    // Extract car details
    let title = imageCard.title;
    let imageSrc = imageCard.image;
    let date =imageCard.date;
    let location = imageCard.location;
    let description = imageCard.description;
   

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageSrc, location, date, description, imageCard.x, imageCard.y, imageCard.ttext);
    // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function _sortAZ() {
  imageCards.sort((a, b) => a.title.localeCompare(b.title));
  showCards();
}

// Function to sort imageCards by name (Z-A)
function _sortZA() {
  imageCards.sort((a, b) => b.title.localeCompare(a.title));
  showCards();
}
const imageTitles = imageCards.map((imageCard) => imageCard.getTitle());

// Extracting names from imageCards array
imageTitles.sort((a, b) => a.localeCompare(b));



function editCardContent(card, newTitle, newImageURL, location, date, description, x, y, ttext) {

  card.style.display = "block";

  card.classList.add("transition", "duration-500", "ease-in", "opacity-0");
  requestAnimationFrame(() => {
    card.classList.remove("opacity-0");
  });

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const photoContainer = card.querySelector("#photo").parentElement;
  const cardImage = card.querySelector("#photo");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // Add overlay button
  const overlay = document.createElement("div");
  overlay.className = `absolute group`;
  overlay.style.top = `${y}%`;
  overlay.style.left = `${x}%`;

  overlay.innerHTML = `
    <button class="p-1 rounded-full border border-gray-400 hover:bg-blue-200 bg-white">
      💭
    </button>
       <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 max-w-[200px] text-center">
          ${ttext || "No thoughts yet..."}
      </div>
  `;

  photoContainer.classList.add("relative");
  photoContainer.appendChild(overlay);

  const cardBullet1 = card.querySelector("#bullet1");
  cardBullet1.textContent = location;
  cardBullet1.alt = ":(";
  cardBullet1.classList.add("whitespace-nowrap", "tracking-wide");

  const cardBullet2 = card.querySelector("#bullet2");
  cardBullet2.textContent = description;
  cardBullet2.alt = ":(";

  const cardBullet3 = card.querySelector("#bullet3");
  cardBullet3.textContent = date;
  cardBullet3.alt = ":(";

  console.log("new card:", newTitle, "- html: ", card);
}
  
 

// This calls the addCards() function when the page is first loaded

document.addEventListener("DOMContentLoaded", () => {
  showCards();

  const dropdown = document.getElementById("sortDropdown");
  dropdown.addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === "az") {
      _sortAZ();
    } else if (value === "za") {
      _sortZA();
    }
  });
});


