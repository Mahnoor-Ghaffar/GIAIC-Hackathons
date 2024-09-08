const form = document.getElementById("resume-form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        university: document.getElementById("university").value,
        degree: document.getElementById("degree").value,
        gpa: document.getElementById("gpa").value,
        jobTitle: document.getElementById("jobTitle").value,
        company: document.getElementById("company").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        skills: document.getElementById("skills").value.split(","),
        interests: document.getElementById("interests").value,
        awards: [],
        linkedin: document.getElementById("linkedin").value
    };
    generateResume(formData);
});
function generateResume(data) {
    // Personal Information
    document.getElementById("resume-name").textContent = data.name;
    document.getElementById("resume-email").setAttribute("href", `mailto:${data.email}`);
    document.getElementById("resume-email").textContent = data.email;
    document.getElementById("resume-phone").textContent = data.phone;
    document.getElementById("resume-address").textContent = "Your address"; // Replace with dynamic address if needed
    // Education
    document.getElementById("education-list").innerHTML = `
        <p>${data.university} - ${data.degree}</p>
        <p>GPA: ${data.gpa}</p>
    `;
    // Work Experience
    document.getElementById("experience-list").innerHTML = `
        <p>${data.jobTitle} at ${data.company}</p>
        <p>${data.startDate} - ${data.endDate || "Present"}</p>
    `;
    // Skills
    document.getElementById("skills-list").innerHTML = data.skills.map((skill)=>`<li>${skill.trim()}</li>`).join("");
    // Interests
    document.getElementById("resume-interests").textContent = data.interests;
    // Awards
    document.getElementById("awards-list").innerHTML = data.awards.map((award)=>`<p><i class="fa-solid fa-trophy"></i> ${award}</p>`).join("");
    // Social Links
    document.getElementById("linkedin-link").setAttribute("href", data.linkedin);
}

//# sourceMappingURL=form.cce5b843.js.map
