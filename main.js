const gitUrl="https://api.github.com/users/courtneysembly"
//* const repoUrl=""//*
const containerOfAll = document.querySelector('.container');
let gitForm = document.getElementById("gitForm");
let gitField = document.getElementById("gitField");
let city = document.getElementById("city");
let state = document.getElementById("stateAbbr");

gitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let git = gitField.value;

    fetch(gitUrl + git).then((response) => {
        return response.json();
        .then((parsedJsonResponse) => {
            console.log(parsedJsonResponse);
            city.innerText = parsedJsonResponse[``]
        })
    })
})

