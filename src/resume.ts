document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    // Prevent form from submitting and refresh
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the page from refreshing

        // Collecting values from form inputs
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const university = (document.getElementById('university') as HTMLInputElement).value;
        const degree = (document.getElementById('degree') as HTMLInputElement).value;
        const gpa = (document.getElementById('gpa') as HTMLInputElement).value;
        const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
        const company = (document.getElementById('company') as HTMLInputElement).value;
        const startDate = (document.getElementById('startDate') as HTMLInputElement).value;
        const endDate = (document.getElementById('endDate') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Dynamically generating resume HTML
        const resumeHtml = `
            <h1>${name}</h1>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            
            <div class="education">
                <h2>Education</h2>
                <div class="details">
                    <p>${degree} from ${university} - GPA: ${gpa}</p>
                </div>
            </div>
            
            <div class="work-experience">
                <h2>Work Experience</h2>
                <div class="details">
                    <p>${jobTitle} at ${company} (${startDate} to ${endDate})</p>
                </div>
            </div>
            
            <div class="skills">
                <h2>Skills</h2>
                <ul class="list">
                    ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </div>
        `;

        // Display the generated resume in the resumeOutput div
        resumeOutput.innerHTML = resumeHtml;
    });
});
