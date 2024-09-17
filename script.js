// Fetching necessary elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var gradYearInput = document.getElementById('grad-year');
var workExperienceInput = document.getElementById('work-experience');
var skillsInput = document.getElementById('skills');
// Resume output fields
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeDegree = document.getElementById('resume-degree');
var resumeSchool = document.getElementById('resume-school');
var resumeGradYear = document.getElementById('resume-grad-year');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
// Buttons
var generateResumeButton = document.getElementById('generate-resume');
var shareResumeButton = document.getElementById('share-resume');
var downloadPdfButton = document.getElementById('download-pdf');
// Generate Resume functionality
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener('click', function () {
    if (resumeName && resumeEmail && resumeDegree && resumeSchool && resumeGradYear && resumeWorkExperience && resumeSkills) {
        resumeName.textContent = (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value) || 'Not provided';
        resumeEmail.textContent = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || 'Not provided';
        resumeDegree.textContent = (degreeInput === null || degreeInput === void 0 ? void 0 : degreeInput.value) || 'Not provided';
        resumeSchool.textContent = (schoolInput === null || schoolInput === void 0 ? void 0 : schoolInput.value) || 'Not provided';
        resumeGradYear.textContent = (gradYearInput === null || gradYearInput === void 0 ? void 0 : gradYearInput.value) || 'Not provided';
        resumeWorkExperience.textContent = (workExperienceInput === null || workExperienceInput === void 0 ? void 0 : workExperienceInput.value) || 'Not provided';
        resumeSkills.textContent = (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) || 'Not provided';
        var resumeElement = document.getElementById('resume');
        if (resumeElement) {
            resumeElement.style.display = 'block';
        }
    }
});
// Generate unique URL
shareResumeButton === null || shareResumeButton === void 0 ? void 0 : shareResumeButton.addEventListener('click', function () {
    if (nameInput && emailInput) {
        var baseUrl = window.location.href;
        var resumeId = btoa("".concat(nameInput.value, "-").concat(emailInput.value));
        var shareableUrl = "".concat(baseUrl, "?resumeId=").concat(resumeId);
        alert("Your unique resume URL: ".concat(shareableUrl));
        navigator.clipboard.writeText(shareableUrl); // Copy the URL to clipboard
    }
});
// Download Resume as PDF
downloadPdfButton === null || downloadPdfButton === void 0 ? void 0 : downloadPdfButton.addEventListener('click', function () {
    // Make sure jsPDF library is loaded
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    if (resumeName && resumeEmail && resumeDegree && resumeSchool && resumeGradYear && resumeWorkExperience && resumeSkills) {
        doc.text("Name: ".concat(resumeName.textContent), 10, 10);
        doc.text("Email: ".concat(resumeEmail.textContent), 10, 20);
        doc.text("Degree: ".concat(resumeDegree.textContent), 10, 30);
        doc.text("School: ".concat(resumeSchool.textContent), 10, 40);
        doc.text("Graduation Year: ".concat(resumeGradYear.textContent), 10, 50);
        doc.text("Work Experience: ".concat(resumeWorkExperience.textContent), 10, 60);
        doc.text("Skills: ".concat(resumeSkills.textContent), 10, 70);
        doc.save('resume.pdf');
    }
});
// Load resume from URL if present
window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var resumeId = urlParams.get('resumeId');
    if (resumeId && nameInput && emailInput && generateResumeButton) {
        var decodedResume = atob(resumeId).split('-');
        nameInput.value = decodedResume[0] || '';
        emailInput.value = decodedResume[1] || '';
        generateResumeButton.click(); // Automatically generate resume on load
    }
};
