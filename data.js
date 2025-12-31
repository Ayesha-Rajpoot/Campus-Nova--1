const courseData = {
    electrical: [
        { name: "Electrician", duration: "6 Months", fee: "Free", timing: "Morning/Evening", details: "Basic and advanced home and industrial wiring, transformer repair, and electrical troubleshooting.", image: "./assets/gtti_electrical_lab_1767089838948.png" },
        { name: "Industrial Electrician", duration: "1 Year", fee: "Free", timing: "Morning", details: "Specialize in industrial motors, PLCs, and heavy machinery electrical systems.", image: "./assets/gtti_electrical_lab_1767089838948.png" },
        { name: "Solar Technician", duration: "3 Months", fee: "Free", timing: "Evening", details: "Installation and maintenance of solar panels and inverters.", image: "./assets/gtti_electrical_lab_1767089838948.png" }
    ],
    it: [
        { name: "Graphics Designing", duration: "6 Months", fee: "Free", timing: "Morning/Evening", details: "Learn Adobe Photoshop, Illustrator, and Canva for creative designing and digital art.", image: "./assets/gtti_lab_it_class_1767089788160.png" },
        { name: "Web Development", duration: "6 Months", fee: "Free", timing: "Evening", details: "Full stack web development including HTML, CSS, JS, and PHP.", image: "./assets/gtti_lab_it_class_1767089788160.png" },
        { name: "Computer Operator", duration: "3 Months", fee: "Free", timing: "Morning", details: "Office productivity tools, data entry, and basic IT management.", image: "./assets/gtti_lab_it_class_1767089788160.png" }
    ],
    mechanical: [
        { name: "Auto Mechanic", duration: "1 Year", fee: "Free", timing: "Morning", details: "Internal combustion engines, suspension, and brake systems.", image: "./assets/gtti_workshop_mechanical_training_1767089802391.png" },
        { name: "Machinist", duration: "1 Year", fee: "Free", timing: "Morning", details: "Operation of Lathe, Milling, and CNC machines.", image: "./assets/gtti_workshop_mechanical_training_1767089802391.png" }
    ],
    hvac: [
        { name: "Refrigeration & AC", duration: "6 Months", fee: "Free", timing: "Morning/Evening", details: "Repair and maintenance of fridge, deep freezer, and split AC units.", image: "./assets/gtti_workshop_mechanical_training_1767089802391.png" }
    ],
    plumbing: [
        { name: "Plumber & Sanitary", duration: "6 Months", fee: "Free", timing: "Morning", details: "Modern plumbing systems, pipe fitting, and sanitary installations.", image: "./assets/gtti_workshop_mechanical_training_1767089802391.png" }
    ],
    welding: [
        { name: "Arc & Gas Welding", duration: "6 Months", fee: "Free", timing: "Morning", details: "Professional welding techniques for various metal types.", image: "./assets/gtti_workshop_mechanical_training_1767089802391.png" },
        { name: "Welding & Fabrication", duration: "1 Year", fee: "Free", timing: "Morning", details: "Structural fabrication and advanced industrial welding.", image: "./assets/gtti_workshop_mechanical_training_1767089802391.png" }
    ],
    energy: [
        { name: "Renewable Energy Tech", duration: "6 Months", fee: "Free", timing: "Morning", details: "Focus on wind and solar power systems integration and sustainable tech.", image: "./assets/gtti_ryk_hero_main_1767089772242.png" }
    ],
    food: [
        { name: "Cooking and Baking", duration: "3 Months", fee: "Free", timing: "Morning/Evening", details: "Professional culinary arts including continental and oriental cuisine.", image: "./assets/gtti_ryk_hero_main_1767089772242.png" }
    ]
};

const studentServices = {
    career: {
        title: "Career Counseling & Placement",
        icon: "fas fa-briefcase",
        description: "Our dedicated placement cell helps students transition from classroom to career. We provide personalized career guidance and connect students with top industrial partners.",
        features: ["Job Fair Organization", "CV Writing Workshops", "Interview Preparation", "Industrial Tours"],
        availability: "Monday to Friday (09:00 AM - 04:00 PM)",
        location: "Admin Block, Room 12"
    },
    transport: {
        title: "Transport Facility",
        icon: "fas fa-bus",
        description: "GTTI RYK provides subsidized transport facilities for students across Rahim Yar Khan and surrounding areas to ensure safe and timely arrival.",
        features: ["Standardized Bus Routes", "Subsidized Monthly Pass", "Safe & Tracked Vehicles", "Multiple Timings"],
        availability: "Morning & Evening Shifts",
        location: "Transport Desk, General Office"
    },
    medical: {
        title: "Medical Unit",
        icon: "fas fa-first-aid",
        description: "A fully equipped medical unit is available on campus to provide immediate first-aid and basic healthcare services to students and staff.",
        features: ["Emergency First-Aid", "Basic Health Checkups", "Medical Records Maintenance", "Ambulance Linkage"],
        availability: "During Institute Hours",
        location: "Student Support Center, Ground Floor"
    },
    wifi: {
        title: "Wi-Fi Campus",
        icon: "fas fa-wifi",
        description: "The entire campus is covered by high-speed fiber-optic internet to support research, digital learning, and technical projects.",
        features: ["Fiber-Optic Speed", "Secured Access", "Covered Lab Areas", "Digital Library Integration"],
        availability: "24/7 for Registered Students",
        location: "Cloud Access (IT Department)"
    }
};

const quickAccessData = {
    elibrary: {
        title: "GTTI Digital E-Library",
        icon: "fas fa-book",
        description: "Access a wide range of technical e-books, journals, and manuals to support your learning journey.",
        categories: [
            { name: "Technical Guides", count: 120 },
            { name: "Trade Manuals", count: 85 },
            { name: "Reference Books", count: 140 },
            { name: "Periodicals", count: 45 }
        ]
    },
    alumni: {
        title: "Alumni Portal",
        icon: "fas fa-user-graduate",
        description: "Join our network of successful graduates. Share your stories, find mentorship, and stay connected with GTTI RYK.",
        stats: [
            { label: "Registered Alumni", value: "2,500+" },
            { label: "Successful Placements", value: "1,800+" },
            { label: "Years of Excellence", value: "35+" }
        ]
    },
    exams: {
        title: "Examination Results",
        icon: "fas fa-clipboard-list",
        description: "Check your technical trade certification results. Enter your roll number and select your trade to get started.",
        instructions: "Results are usually published within 4 weeks of final assessments."
    }
};

// Export if used in modules, otherwise it will just stay in global scope
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { courseData, studentServices, quickAccessData };
}
