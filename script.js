function getFormvalue(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get values from input fields
    const fname = document.querySelector('input[name="fname"]').value;
    const lname = document.querySelector('input[name="lname"]').value;

    // Display alert with the full name
    alert(`${fname} ${lname}`);
}
