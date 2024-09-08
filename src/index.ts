// Add event listener for the form submission
document.getElementById('resumeForm')?.addEventListener('submit', function(event: SubmitEvent) {
    event.preventDefault();

    // Type assertion for each input field
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output template
        const resumeOutput = `
            <h1>Resume</h1>
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
            <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>

            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>

            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>

            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;

        // Output the resume to the page
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();  // Enable editing
        } else {
            console.error('Resume output element is missing');
        }
    }
});

// Make text editable on click
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');

    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || '';

            // Create input field
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('editing-input');

            // Handle losing focus (when clicking outside)
            input.addEventListener('blur', function() {
                currentElement.textContent = input.value;
                currentElement.style.visibility = 'visible';
                input.remove();
            });

            // Handle 'Enter' key press
            input.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    currentElement.textContent = input.value;
                    currentElement.style.visibility = 'visible';
                    input.remove();
                }
            });

            // Hide current element and show input field
            currentElement.style.visibility = 'hidden';
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus();
        });
    });
}
