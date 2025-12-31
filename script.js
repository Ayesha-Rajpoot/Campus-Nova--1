// Data is now loaded from data.js

document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.getElementById('dept-marquee');
    const courseView = document.getElementById('courses-view');
    const container = document.getElementById('dynamic-course-container');
    const deptTitle = document.getElementById('selected-dept-name');
    const backBtn = document.getElementById('back-to-depts');
    const admissionModal = document.getElementById('admission-modal');
    const serviceModal = document.getElementById('service-modal');
    const serviceModalBody = document.getElementById('service-modal-body');
    const prospectusModal = document.getElementById('prospectus-modal');
    const quickAccessModal = document.getElementById('quick-access-modal');
    const quickAccessModalBody = document.getElementById('quick-access-modal-body');

    // Handle Department Click
    const deptItems = document.querySelectorAll('.dept-item');
    deptItems.forEach(item => {
        item.addEventListener('click', () => {
            const deptKey = item.getAttribute('data-dept');
            showCourses(deptKey);
        });
    });

    function showCourses(deptKey) {
        const courses = courseData[deptKey] || [];
        const deptName = deptKey.charAt(0).toUpperCase() + deptKey.slice(1);

        deptTitle.textContent = `${deptName} Department Courses`;
        container.innerHTML = '';

        courses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.setAttribute('data-aos', 'fade-up');
            card.innerHTML = `
                <span class="course-tag">${course.timing}</span>
                <h3>${course.name}</h3>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p><strong>Fee:</strong> ${course.fee}</p>
                <button class="btn btn-secondary view-details" style="margin-top: 15px; width: 100%;">View Details</button>
            `;

            card.querySelector('.view-details').addEventListener('click', () => {
                openCoursePage(deptKey, course.name);
            });

            container.appendChild(card);
        });

        courseView.classList.remove('hidden');
        courseView.scrollIntoView({ behavior: 'smooth' });
    }

    // Navigation to Individual Course Page
    function openCoursePage(deptKey, courseName) {
        window.location.href = `course-detail.html?dept=${deptKey}&course=${encodeURIComponent(courseName)}`;
    }

    window.openAdmissionModal = function () {
        admissionModal.style.display = "block";
    }

    window.closeAdmissionModal = function () {
        admissionModal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == admissionModal) closeAdmissionModal();
        if (event.target == serviceModal) closeServiceModal();
        if (event.target == prospectusModal) closeProspectus();
        if (event.target == quickAccessModal) closeQuickAccess();
    }

    // Prospectus Logic
    window.openProspectus = function () {
        prospectusModal.style.display = "block";
    }

    window.closeProspectus = function () {
        prospectusModal.style.display = "none";
    }

    // Student Services Logic
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceKey = card.getAttribute('data-service');
            openServiceModal(serviceKey);
        });
    });

    function openServiceModal(key) {
        const service = studentServices[key];
        if (!service) return;

        serviceModalBody.innerHTML = `
            <div class="service-modal-header">
                <i class="${service.icon}"></i>
                <h2>${service.title}</h2>
            </div>
            <div class="service-modal-body">
                <p>${service.description}</p>
                <div class="service-features">
                    ${service.features.map(f => `<div class="feature-tag"><i class="fas fa-check-circle"></i> ${f}</div>`).join('')}
                </div>
                <div class="service-meta">
                    <span><strong>Availability:</strong> ${service.availability}</span>
                    <span><strong>Location:</strong> ${service.location}</span>
                </div>
            </div>
        `;
        serviceModal.style.display = "block";
    }

    window.closeServiceModal = function () {
        serviceModal.style.display = "none";
    }

    // Quick Access Logic
    window.openQuickAccess = function (key) {
        const data = quickAccessData[key];
        if (!data) return;

        let content = `
            <div class="quick-modal-header">
                <i class="${data.icon}"></i>
                <h2>${data.title}</h2>
            </div>
            <div class="quick-modal-body">
                <p style="text-align: center; font-size: 1.1rem; color: var(--text-dark); margin-bottom: 30px;">${data.description}</p>
        `;

        if (key === 'elibrary') {
            content += `
                <div class="library-grid">
                    ${data.categories.map(cat => `
                        <div class="category-card">
                            <h4>${cat.name}</h4>
                            <span>${cat.count} Resources</span>
                        </div>
                    `).join('')}
                </div>
                <button class="btn btn-primary" style="width: 100%;">Visit E-Library Portal</button>
            `;
        } else if (key === 'alumni') {
            content += `
                <div class="alumni-stats">
                    ${data.stats.map(stat => `
                        <div class="stat-item">
                            <h3>${stat.value}</h3>
                            <span>${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="input-group" style="margin-top: 20px;">
                    <button class="btn btn-secondary" style="width: 100%;">Register as Alumni</button>
                </div>
            `;
        } else if (key === 'exams') {
            content += `
                <div class="exam-search-box">
                    <h4 style="margin-bottom: 15px;">Search Result</h4>
                    <div class="search-group">
                        <input type="text" placeholder="Enter Roll Number (e.g., GTTI-2025-001)" class="form-control">
                        <button class="btn btn-primary" onclick="alert('Searching result... Please check back later as results are being finalized.')">Find</button>
                    </div>
                    <p style="margin-top: 15px; font-size: 0.9rem; color: var(--text-muted);"><i class="fas fa-info-circle"></i> ${data.instructions}</p>
                </div>
            `;
        }

        content += `</div>`;
        quickAccessModalBody.innerHTML = content;
        quickAccessModal.style.display = "block";
    }

    window.closeQuickAccess = function () {
        quickAccessModal.style.display = "none";
    }

    backBtn.addEventListener('click', () => {
        courseView.classList.add('hidden');
        document.getElementById('departments').scrollIntoView({ behavior: 'smooth' });
    });

    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! Our admission office will contact you soon.');
            contactForm.reset();
        });
    }

    // Admission Form Submission
    const admissionForm = document.getElementById('admission-form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(admissionForm);
            const name = formData.get('name');
            alert(`Congratulations ${name}! Your admission application for 2025 has been submitted successfully. Our team will contact you soon on your provided phone number.`);
            window.closeAdmissionModal();
            admissionForm.reset();
        });
    }

    // Check for Admission Trigger from other pages
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('showAdmission') === 'true') {
        window.openAdmissionModal();

        // Auto-select trade if dept is provided
        const dept = urlParams.get('dept');
        if (dept) {
            const tradeSelect = document.getElementById('trade');
            if (tradeSelect) tradeSelect.value = dept;
        }
    }
});
