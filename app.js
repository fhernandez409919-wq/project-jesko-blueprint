// SWITCH STRATEGY PILLAR TABS
function switchTab(event, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// CONTROL POPUP SUB-DASHBOARD MODALS
const tierData = {
    'digital-modal': {
        title: "Digital Venture Strategy",
        desc: "Building specialized digital skills: mastering systems architecture, web asset development, UI layout automation frameworks, and modern SEO pipelines to secure immediate self-funding cash flow."
    },
    'physical-modal': {
        title: "Physical Infrastructure Operations",
        desc: "Scaling into high-ticket systems deployment, product prototyping, and manufacturing automation structures to increase capital throughput."
    },
    'realestate-modal': {
        title: "Real Estate & Asset Holding",
        desc: "Acquiring permanent industrial storage infrastructure and real-estate property complexes engineered to host and service high-value automotive collection projects."
    }
};

function openModal(tierKey) {
    const modal = document.getElementById('info-modal');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    
    if(tierData[tierKey]) {
        title.innerText = tierData[tierKey].title;
        desc.innerText = tierData[tierKey].desc;
        modal.classList.add('open');
    }
}

function closeModal() {
    document.getElementById('info-modal').classList.remove('open');
}

// HIGHLIGHT VISIBLE SECTIONS DURING SCROLL
window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});
