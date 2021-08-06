
console.dir(randUser.results[0])

for (let i = 0; i<randUser.results.length; i++){
let profile = document.querySelector("#profile");

let newDivNames = document.createElement("div");

//Big container

let newDiv = document.createElement("div");
let textNames = document.createElement("p")
let textEmails = document.createElement("p")
let button = document.createElement("button")


let imageDiv = document.createElement("div");
let newImage = document.createElement("img");


let dummyDiv = document.createElement("div");
let dummyName = document.createElement("p");
let dummyEmail =document.createElement("p");

//Add content
textNames.innerHTML = "Name: " + randUser.results[i].name.first + " " + randUser.results[i].name.last + ", " + randUser.results[i].dob.age;
textEmails.innerHTML = "Email: " + randUser.results[i].email;
button.innerHTML = "Connect"
dummyName.innerHTML = "City: " + randUser.results[i].location.state;
dummyEmail.innerHTML = "Timezone: " + randUser.results[i].location.timezone.offset + ";" + randUser.results[i].location.timezone.description;

button.onclick = function() {
    alert("Connecting...")
}

newImage.src = randUser.results[i].picture.large;

//Add elements to page
newDivNames.appendChild(textNames);
newDivNames.appendChild(textEmails);

//The elements on the right
dummyDiv.appendChild(dummyName);
dummyDiv.appendChild(dummyEmail);

imageDiv.style.display="flex";
imageDiv.style.flexDirection = "row";
imageDiv.style.justifyContent = "center";
imageDiv.appendChild(newImage);

newDiv.style.display = "flex";
newDiv.style.justifyContent = "space-between";
button.style.display = "block"

newDiv.appendChild(button)
newDiv.appendChild(newDivNames);
newDiv.appendChild(imageDiv);
newDiv.appendChild(dummyDiv);

profile.appendChild(newDiv)

}




