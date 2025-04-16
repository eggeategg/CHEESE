import "./assets/style.css"
import image1 from "/images/DSC_0172.jpg"
import image2 from "/images/DSC_0226.jpg"
import profileImage from "/images/IMG_0479 3.jpg"


document.querySelector('#app').innerHTML = `
<header class="flex justify-between items-start bg-slate-500 p-7 w-full">
  <h1 class="title font-mono text-3xl text-white">image person</h1>

  <div class="rounded-full border-4 border-white p-1 bg-slate-300">
    <img src=${profileImage} class="w-16 h-16 rounded-full object-cover" alt="Profile Image">
  </div>
</header>
<div class="flex justify-end pr-10 mt-2">
  <select id="sortDropdown" class="p-2 rounded-md bg-white text-black border border-gray-300 shadow hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
    <option value="">Sort Cards</option>
    <option value="az">Title A–Z</option>
    <option value="za">Title Z–A</option>
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
        <li>Bullet Point 3</li>
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
  constructor(title, image, location, description) {
    this.title = title;
    this.image = image;
    this.location = location;
    this.description = description;

    
  }
  //here are a couple of methods to gather data I made in the begining
  getName() {
    return this.title;
  }
  getImage() {
    return this.image;
  }
  getLoc() {
    return this.location;
  }
  getDes() {
    return this.description;
  }
}

let imageCards = [
  new imageCard(
    "falling",
    image1,
    "Downtown, San Louis Obispo",
    "This photo was taken as part of a project for a photography class I was taking at the time. The project was based around the idea that although man creates, nature allways finds a way to take back the ground."
  ),
  new imageCard(
    "falling",
    image2,
    "SLO",
    "description"
  ),
  new imageCard(
    "falling",
    "f",
    "santa barbara",
    "description"
  ),
  new imageCard(
    "falling",
    "f",
    "santa maria",
    "description"
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
    let location = imageCard.location;
    let description = imageCard.description;
   

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageSrc, location, description); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function _sortAZ() {
  imageCards.sort((a, b) => a.title.localeCompare(b.title));
  _showCards();
}

// Function to sort imageCards by name (Z-A)
function _sortZA() {
  imageCards.sort((a, b) => b.title.localeCompare(a.title));
  _showCards();
}
const imageTitles = imageCards.map((imageCard) => imageCard.getName());

// Extracting names from imageCards array
imageTitles.sort((a, b) => a.localeCompare(b));



function editCardContent(card, newTitle, newImageURL, location, description) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const photoContainer = card.querySelector("#photo").parentElement;
  const cardImage = card.querySelector("#photo");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // Add overlay button
  const overlay = document.createElement("div");
  overlay.className = "absolute top-[80%] left-[50%] group";

  overlay.innerHTML = `
    <button class=" p-1 rounded-full border border-gray-400 hover:bg-blue-200">
      💭
    </button>
    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
      I really enjoy the plants color in this image.
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

  console.log("new card:", newTitle, "- html: ", card);
}
  
 

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
