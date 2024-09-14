var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 || _a.addEventListener("submit", function(event) {
    var _a;
    event.preventDefault();
    // Type assertion for each input field
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // ------------unique path part------------------
    var usernameElement = document.getElementById("username");
    // ------------unique path part------------------
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // ------------unique path part------------------
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, "_"), "_cv.html");
        // ------------unique path part------------------
        // Get profile picture file and create object URL
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n            <h1>Resume</h1>\n            ".concat(profilePictureURL ? '<img src="'.concat(profilePictureURL, '" alt="Proflie Picture" class="profilePicture" >') : "", '\n            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ').concat(name_1, ' </span> </p>\n            <p><strong>Email:</strong> <span id="edit-email" class="editable"> ').concat(email, ' </span> </p>\n            <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ').concat(phone, ' </span> </p>\n\n            <h3>Education</h3>\n            <p id="edit-education" class="editable">').concat(education, '</p>\n\n            <h3>Experience</h3>\n            <p id="edit-experience" class="editable">').concat(experience, '</p>\n\n            <h3>Skills</h3>\n            <p id="edit-skills" class="editable">').concat(skills, "</p>\n        ");
        // ------------unique path part------------------
        var dLink = document.createElement("a");
        dLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        dLink.download = uniquePath;
        dLink.textContent = "Download Your Resume";
        dLink.classList.add("download-btn");
        // ------------unique path part------------------
        // Output the resume to the page
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
            // -------------Milestone 5----------------
            resumeOutputElement.appendChild(dLink);
            resumeOutputElement.style.display = "block";
        } else console.error("One or more form elements are missing");
    }
});
// Make text editable on click
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function(element) {
        element.addEventListener("click", function() {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function() {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 || _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

//# sourceMappingURL=form.0cd0c94c.js.map
