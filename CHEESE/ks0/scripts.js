/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

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
    "./images/DSC_0172.jpg",
    "santa maria",
    "description"
  ),
  new imageCard(
    "falling",
    "./images/DSC_0226.jpg",
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

//function showCards() {
 // const cardContainer = document.getElementById("card-container");
 // cardContainer.innerHTML = "";
 // const templateCard = document.querySelector(".card");

  //let imageURLs = [
 //   "./ks0/images/DSC_0172.jpg",
 //   "./ks0/images/DSC_0172.jpg",
 //   "./images/east_los_high.jpg",
  //];

  //for (let i = 0; i < titles.length; i++) {
   // let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    
    //let imageURL = imageURLs[i];

    //const nextCard = templateCard.cloneNode(true); // Copy the template card
   // editCardContent(nextCard, title, imageURL); // Edit title and image
   // cardContainer.appendChild(nextCard); // Add new card to the container
  //}
//}

function editCardContent(card, newTitle, newImageURL, location, description) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardBullet1 = card.querySelector("#bullet1")
  cardBullet1.textContent = location;
  cardBullet1.alt = ":(";

  const cardBullet2 = card.querySelector("#bullet2")
  cardBullet2.textContent = description;
  cardBullet2.alt = ":(";

  
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
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
