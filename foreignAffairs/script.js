

const popupOverlay = document.getElementById('popupOverlay');

const popup = document.getElementById('popup');

const closePopup = document.getElementById('closePopup');

const emailInput = document.getElementById('emailInput');

// Function to open the popup

function openPopup(title, content) {

    popupOverlay.style.display = 'block';
    document.getElementById('popuptitle').textContent = title;
    document.getElementById('popupcontent').textContent = content;

}

// Function to close the popup

function closePopupFunc() {

    popupOverlay.style.display = 'none';

}
//openPopup('1','1')
// Function to submit the signup form

function submitForm() {

    const email = emailInput.value;

    // Add your form submission logic here

    console.log(`Email submitted: ${email}`);

    closePopupFunc(); // Close the popup after form submission

}

// Event listeners

// Trigger the popup to open (you can call this function on a button click or any other event)
// Ensure the DOM is fully loaded before adding event listeners

// Close the popup when the close button is clicked

closePopup.addEventListener('click', closePopupFunc);

// Close the popup when clicking outside the popup content

popupOverlay.addEventListener('click', function (event) {

    if (event.target === popupOverlay) {

        closePopupFunc();

    }

});