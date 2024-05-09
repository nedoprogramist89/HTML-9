let objects = [];

function addObject() {
const name = document.getElementById("name").value;
const type = document.getElementById("type").value;
const description = document.getElementById("description").value;

if (name === "" || type === "" || description === "") {
alert("Please fill in all fields");
return;
}

const newObject = { name, type, description };
objects.push(newObject);
displayObjects();
}

function displayObjects() {
const objectsContainer = document.getElementById("objects-container");
objectsContainer.innerHTML = "";

objects.forEach((object, index) => {
const objectElement = document.createElement("div");
objectElement.classList.add("object");
objectElement.innerHTML = `
<h3>${object.name}</h3>
<p><strong>Type:</strong> ${object.type}</p>
<p><strong>Description:</strong> ${object.description}</p>
<button onclick="deleteObject(${index})">Delete</button>
`;

objectsContainer.appendChild(objectElement);
});
}

function deleteObject(index) {
objects.splice(index, 1);
displayObjects();
}