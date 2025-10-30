// Mobile Portfolio JavaScript

// Navigation Active State
const navItems = document.querySelectorAll('.mobile-nav .nav-item');
const sections = document.querySelectorAll('.mobile-section, .mobile-hero');

// Update active nav on scroll
function updateActiveNav() {
    let current = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === current) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Skills Tab Switching
const skillTabs = document.querySelectorAll('.skill-tab');
const skillsContents = document.querySelectorAll('.skills-content');

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');
        
        // Remove active class from all tabs and contents
        skillTabs.forEach(t => t.classList.remove('active'));
        skillsContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.querySelector(`.skills-content[data-category="${category}"]`).classList.add('active');
    });
});

// WhatsApp Form Submission
const whatsappForm = document.getElementById('mobileWhatsappForm');

whatsappForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('mobileName').value;
    const service = document.getElementById('mobileService').value;
    const message = document.getElementById('mobileMessage').value;
    
    // Format the WhatsApp message
    const whatsappMessage = `Hi! My name is ${name}.\n\nService Needed: ${service}\n\nMessage: ${message}`;
    
    // WhatsApp number (replace with your number)
    const phoneNumber = '918590297701';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    whatsappForm.reset();
});

// Project Modal
const projectModal = document.getElementById('projectModal');

// Project data
const projects = {
    1: {
        title: 'Brand Commercial 2024',
        description: 'A cinematic 60-second commercial for a luxury fashion brand featuring dynamic transitions, color grading, and professional motion graphics. This project showcases advanced editing techniques including multi-layer compositing, custom LUTs, and synchronized audio mixing.',
        duration: '60 seconds',
        date: 'October 2024',
        client: 'Luxury Fashion Brand',
        tags: ['Premiere Pro', 'After Effects', 'Color Grade', 'Motion Graphics'],
        link: 'https://drive.google.com/your-video-link'
    },
    2: {
        title: 'E-Commerce Website',
        description: 'Modern, responsive e-commerce platform with smooth animations, user-friendly interface, and optimized performance. Built with clean code structure and best practices for SEO and accessibility.',
        duration: '4 weeks',
        date: 'September 2024',
        client: 'Online Retail Store',
        tags: ['HTML/CSS', 'JavaScript', 'Responsive', 'UI/UX'],
        link: 'https://your-website-url.com'
    },
    3: {
        title: 'Community Discord Bot',
        description: 'Custom Discord bot with comprehensive moderation tools, music streaming capabilities, and interactive features for community management. Features include custom commands, auto-moderation, and analytics dashboard.',
        duration: '6 weeks',
        date: 'August 2024',
        client: 'Gaming Community',
        tags: ['Discord.js', 'Node.js', 'API', 'Database'],
        link: 'https://github.com/your-repo'
    },
    4: {
        title: 'Music Video - "Neon Dreams"',
        description: 'High-energy music video with advanced VFX, motion tracking, and rhythmic cutting synchronized to the beat. Features include particle effects, color correction, and custom transitions.',
        duration: '3 minutes',
        date: 'July 2024',
        client: 'Independent Artist',
        tags: ['After Effects', 'VFX', 'Motion Graphics', 'Color Grade'],
        link: 'https://drive.google.com/your-motion-graphics'
    }
};

function openProject(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalDate').textContent = project.date;
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalLink').href = project.link;
    
    // Populate tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });
    
    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProject();
    }
});

// Smooth scroll for navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Prevent default touch behavior for better mobile experience
document.addEventListener('touchstart', function() {}, {passive: true});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        updateActiveNav();
    }, 100);
});

// Intersection Observer for fade-in animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.project-card, .testimonial-card, .about-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

console.log('Mobile Portfolio loaded successfully! 📱');
