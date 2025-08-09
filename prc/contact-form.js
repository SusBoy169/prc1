document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create a mailto: link with the form data
    const mailtoLink = `mailto:prc.hyd@pilania.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Show the confirmation message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';

    // Update the "Send via Email Client" button's href
    document.getElementById('sendEmailButton').href = mailtoLink;
});