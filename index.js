// Use DOM to insert text in an element
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>CV FORM</h1>`;
const form = document.getElementById("newadd");


// write a function to connect to the listener
function onAdd(event) {
    event.preventDefault();
    const first = form.elements["first"].value;
    const middle = form.elements["middle"].value;
    const last = form.elements["last"].value;
    const gender = form.elements["gender"].value;
    const email = form.elements["email"].value;
    const number = form.elements["number"].value;
    const address = form.elements["address"].value;


    //Names Validation
    if (!isNaN(first)) {
        alert('Invalid submission for first name section')

    }
    if (!isNaN(middle)) {
        alert('Invalid submission for middle name section')
    }

    if (!isNaN(last)) {
        alert('Invalid submission for last name section')
    }

    //Email Validation
    function validateEmail(email) {
        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            alert('Invalid submission for email section')

            return false;
        }

        return (true);
    }
    validateEmail(email, "email")

    //Number Validation
    function validateNumbers() {
        let phone1 = /^\d{10}$/;
        let phone2 = /^\+?([0-9]{12})$/
        const number = form.elements["number"].value;
        if (number.match(phone1) || number.match(phone2)) {
            return true;
        } else {
            alert('Invalid submission for number section')

        }
    }
    validateNumbers();
    //to store information and set it to the local storage
    window.localStorage.setItem("first", first);
    window.localStorage.setItem("middle", middle);
    window.localStorage.setItem("last", last);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("number", number);
    window.localStorage.setItem("address", address);

}
// attach function to the form "submit" event.
form.addEventListener('submit', onAdd)