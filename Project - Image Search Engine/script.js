
const accessKey = '_mM5GMth0boZ-5XpjJ6wBV_6WrjU40HnGWaaAEzir_A';

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = (""); // this is added so every search deletes previous search result
    }
    
    const result = data.results;

    result.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small; //here we are picking type of image from JSON object
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html; //here we are getting link type so on click it goes on usplash site.
        imageLink.target = '_blank'; // we want link to be open in new blank tab not to redirect existing site (tab)

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreButton.style.display = "block"; // here we are changing CSS style to show button to load more images
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreButton.addEventListener("click", ()=>{
    page++ // here we need to add +1 on page number so we get more images in API request
    searchImages(); // here we call again function to fetch new images

})