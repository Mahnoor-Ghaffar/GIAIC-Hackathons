interface ResumeData {
    name: string;
    email: string;
    phone: string;
    university: string;
    degree: string;
    gpa: string;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    skills: string[];
    interests: string;
    awards: string[];
    linkedin: string;
}

const form = document.getElementById("resume-form") as HTMLFormElement;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData: ResumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        university: (document.getElementById("university") as HTMLInputElement).value,
        degree: (document.getElementById("degree") as HTMLInputElement).value,
        gpa: (document.getElementById("gpa") as HTMLInputElement).value,
        jobTitle: (document.getElementById("jobTitle") as HTMLInputElement).value,
        company: (document.getElementById("company") as HTMLInputElement).value,
        startDate: (document.getElementById("startDate") as HTMLInputElement).value,
        endDate: (document.getElementById("endDate") as HTMLInputElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value.split(","),
        interests: (document.getElementById("interests") as HTMLInputElement).value,
        awards: [], // Add logic for awards if needed
        linkedin: (document.getElementById("linkedin") as HTMLInputElement).value
    };

    generateResume(formData);
});

function generateResume(data: ResumeData) {
    // Personal Information
    document.getElementById("resume-name")!.textContent = data.name;
    document.getElementById("resume-email")!.setAttribute("href", `mailto:${data.email}`);
    document.getElementById("resume-email")!.textContent = data.email;
    document.getElementById("resume-phone")!.textContent = data.phone;
    document.getElementById("resume-address")!.textContent = "Your address"; // Replace with dynamic address if needed

    // Education
    document.getElementById("education-list")!.innerHTML = `
        <p>${data.university} - ${data.degree}</p>
        <p>GPA: ${data.gpa}</p>
    `;

    // Work Experience
    document.getElementById("experience-list")!.innerHTML = `
        <p>${data.jobTitle} at ${data.company}</p>
        <p>${data.startDate} - ${data.endDate || 'Present'}</p>
    `;

    // Skills
    document.getElementById("skills-list")!.innerHTML = data.skills.map(skill => `<li>${skill.trim()}</li>`).join("");

    // Interests
    document.getElementById("resume-interests")!.textContent = data.interests;

    // Awards
    document.getElementById("awards-list")!.innerHTML = data.awards.map(award => `<p><i class="fa-solid fa-trophy"></i> ${award}</p>`).join("");

    // Social Links
    document.getElementById("linkedin-link")!.setAttribute("href", data.linkedin);
}
