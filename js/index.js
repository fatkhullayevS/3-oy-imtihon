const elNewsList = document.querySelector(".news__list");

for(let pokemon of pokemons){
    // CREATE ELEMENT
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const pakemonItemDiv = document.createElement("div")
    // const pakemonDiv = document.createAttribute("div")
    const newDiv = document.createElement("div");
    const pakemonDivleft = document.createElement("div")
    const newTitle = document.createElement("h5");
    const pakemonImg = document.createElement("img")
    const pakemonDivbuttom = document.createElement("div")
    const newLanguage = document.createElement("p");
    const newYear = document.createElement("span");
    const newWeight = document.createElement("span");

    // SET ATTRIBUTE
    newLi.setAttribute("class", "card mb-3");
    newLi.style.border = "2px solid black"
    newLi.style.width = "307px";
    newLi.style.height = "423px";
    newImg.classList.add("card-img-top");
    newImg.style.paddingTop = "50px"
    newImg.setAttribute("src", pokemon.img,);
    pakemonItemDiv.setAttribute("class" ," p-3 rounded-bottom border-2  border-top border-dark")
    pakemonDivleft.classList.add("card-body-left")
    pakemonImg.setAttribute("src", "./images/Icon/Outline/heart.svg")
    // pakemonDiv.setAttribute("class","card-body d-flex justify-content-between p-0")
    newImg.style.width = "157px";
    newImg.style.margin = "auto"
    newDiv.classList.add("class", "card-body");
    newTitle.classList.add("card-title");
    newTitle.style.marginTop = "20px"
    newLanguage.classList.add("card-text");
    newYear.classList.add("card-title");
    newYear.style.fontWeight = "700"
    newYear.style.fontSize = "20px"
    newWeight.classList.add("card-title");
    newWeight.style.fontWeight = "700"
    newWeight.style.fontSize = "20px"
    newWeight.style.marginLeft = "30px"

    newTitle.textContent = pokemon.name;
    newLanguage.textContent = pokemon.type;
    newYear.textContent = pokemon.height
    newWeight.textContent = pokemon.weight

    elNewsList.appendChild(newLi);
    newLi.appendChild(newImg);
    newLi.appendChild(newDiv);
    newLi.appendChild(pakemonDivleft);
    pakemonDivleft.appendChild(pakemonImg)
    newLi.appendChild(pakemonDivbuttom);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newLanguage);
    newDiv.appendChild(newYear);
    newDiv.appendChild(newWeight);
}