const loginForm = document.getElementById("login-form");
const outputMessage = document.getElementById("output-message");

loginForm.onsubmit = e => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    axios.post("/login", {username, password}).then(res => {
        outputMessage.innerText = JSON.stringify(res.data, null, 2);
    })
}