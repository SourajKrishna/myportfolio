// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// WhatsApp Form Handler
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Format WhatsApp message
    const whatsappMessage = `Hello! My name is ${name}.%0A%0A` +
                          `Service Interested: ${service}%0A%0A` +
                          `Message: ${message}`;
    
    // WhatsApp URL with phone number (India format: 91 + 10-digit number)
    const whatsappURL = `https://wa.me/918590297701?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Reset form after submission
    this.reset();
});

// Contact Mode Toggle (WhatsApp <-> Email) - Custom animated toggle
const contactToggle = document.getElementById('contactModeToggle');
const whatsappSection = document.getElementById('whatsappSection');
const emailSection = document.getElementById('emailSection');
const toggleIcon = document.getElementById('toggleIcon');

let isEmailMode = false;

function updateContactMode() {
    if (contactToggle && whatsappSection && emailSection && toggleIcon) {
        if (isEmailMode) {
            // Show Email
            contactToggle.classList.add('active');
            whatsappSection.classList.add('d-none');
            emailSection.classList.remove('d-none');
            // Change icon to email
            toggleIcon.className = 'fas fa-envelope toggle-icon';
        } else {
            // Show WhatsApp
            contactToggle.classList.remove('active');
            emailSection.classList.add('d-none');
            whatsappSection.classList.remove('d-none');
            // Change icon to whatsapp
            toggleIcon.className = 'fab fa-whatsapp toggle-icon';
        }
    }
}

if (contactToggle) {
    contactToggle.addEventListener('click', function() {
        isEmailMode = !isEmailMode;
        updateContactMode();
    });
    // Initialize state (default WhatsApp)
    isEmailMode = false;
    updateContactMode();
}

// Email Form Handler - builds a proper mailto link with URL-encoded subject and body
const emailForm = document.getElementById('emailForm');
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('emailName').value || '';
        const subject = document.getElementById('emailSubject').value || '';
        const message = document.getElementById('emailMessage').value || '';

        // Prepend sender name to message body for clarity
        const fullBody = `Name: ${name}%0A%0A${message}`;

        const mailto = `mailto:contact@souraj.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;

        // Open the user's default mail client
        window.location.href = mailto;

        // Optional: reset the form
        this.reset();
    });
}

// Terminal typing animation
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Animate terminal commands on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        const command1 = document.getElementById('command1');
        const command2 = document.getElementById('command2');
        
        if (command1) {
            typeWriter(command1, 'render --export 4K', 80);
        }
        
        setTimeout(() => {
            if (command2) {
                typeWriter(command2, 'apply color-grade cinematic', 80);
            }
        }, 2000);
    }, 500);
});

// Project Modal Data
// TO ADD MORE PROJECTS: Copy a project object and increment the number
const projectsData = {
    1: {
        title: "Brand Commercial 2024",
        description: "A high-end 60-second commercial for a luxury fashion brand. This project involved complex color grading, dynamic transitions, and motion graphics. We shot on location with a professional crew and delivered in 4K resolution. The final piece increased brand engagement by 150%.",
        duration: "60 seconds",
        date: "January 2024",
        client: "Luxury Fashion Co.",
        tags: ["Premiere Pro", "After Effects", "Color Grade", "4K", "Commercial"],
        url: "https://drive.google.com/your-video-link", // Replace with your Google Drive or YouTube link
        coverImage: "images/project1-cover.jpg" // Optional: Add cover image path (comment out if not using)
    },
    2: {
        title: "E-Commerce Website",
        description: "A modern, fully responsive e-commerce platform featuring smooth animations, intuitive user interface, and seamless shopping experience. Built with clean code and optimized for performance across all devices. Includes shopping cart, product filtering, and secure checkout flow.",
        duration: "Multi-page website",
        date: "February 2024",
        client: "Online Retail Store",
        tags: ["HTML/CSS", "JavaScript", "Responsive", "UI/UX", "E-Commerce"],
        url: "https://your-website-url.com", // Replace with your live website URL
        coverImage: "images/project2-cover.jpg" // Optional: Add cover image path
    },
    3: {
        title: "Community Discord Bot",
        description: "Custom-built Discord bot with advanced moderation features, music playback, interactive games, and community management tools. Includes custom commands, auto-moderation, welcome messages, and analytics dashboard. Serves 10,000+ members efficiently.",
        duration: "Full-featured bot",
        date: "March 2024",
        client: "Gaming Community",
        tags: ["Discord.js", "Node.js", "API", "Database", "Automation"],
        url: "https://github.com/your-repo", // Replace with your GitHub repo or bot invite link
        coverImage: "images/project3-cover.jpg" // Optional: Add cover image path
    },
    4: {
        title: "Music Video - 'Neon Dreams'",
        description: "An energetic music video featuring VFX, motion tracking, and beat-synchronized editing. The project included green screen compositing, particle effects, and creative transitions that matched the song's rhythm perfectly. Shot in 24fps for a cinematic feel with vibrant neon color grading.",
        duration: "3 minutes 45 seconds",
        date: "April 2024",
        client: "Independent Artist",
        tags: ["After Effects", "VFX", "Motion Graphics", "Color Grading", "Compositing"],
        url: "https://drive.google.com/your-motion-graphics", // Replace with your video link
        coverImage: "images/project4-cover.jpg" // Optional: Add cover image path
    }
};

let currentProject = 1;

// Open Project Modal
function openProjectModal(projectId) {
    currentProject = projectId;
    const project = projectsData[projectId];
    const modal = document.getElementById('projectModal');
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').innerHTML = `<p>${project.description}</p>`;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalDate').textContent = project.date;
    document.getElementById('modalClient').textContent = project.client;
    
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = project.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    // Set project URL
    const projectLink = document.getElementById('modalProjectLink');
    projectLink.href = project.url;
    
    // Set cover image in modal if available
    const modalVideo = document.getElementById('modalVideo');
    if (project.coverImage) {
        modalVideo.style.background = 'none';
        modalVideo.innerHTML = `
            <img src="${project.coverImage}" alt="${project.title} Cover">
            <div class="play-overlay">
                <i class="fas fa-play-circle"></i>
                <p>Click to View Project</p>
            </div>
        `;
        // Make modal video clickable to open project
        modalVideo.onclick = () => window.open(project.url, '_blank');
        modalVideo.style.cursor = 'pointer';
    } else {
        // Default gradient background if no cover image
        modalVideo.style.background = 'linear-gradient(135deg, #d17842 0%, #8b6f47 100%)';
        modalVideo.innerHTML = `
            <div class="play-overlay">
                <i class="fas fa-play-circle"></i>
                <p>Click to View Project</p>
            </div>
        `;
        modalVideo.onclick = () => window.open(project.url, '_blank');
        modalVideo.style.cursor = 'pointer';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Project Modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navigate between projects
function navigateProject(direction) {
    const totalProjects = Object.keys(projectsData).length;
    currentProject += direction;
    if (currentProject < 1) currentProject = totalProjects;
    if (currentProject > totalProjects) currentProject = 1;
    openProjectModal(currentProject);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
}

// Keyboard navigation for modal
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('projectModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowLeft') {
            navigateProject(-1);
        } else if (e.key === 'ArrowRight') {
            navigateProject(1);
        }
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon. 🚀');
        
        // Reset form
        contactForm.reset();
    });
}

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-container');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 600;
    }
});

// Intersection Observer for scroll animations
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

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.skill-card, .project-card, .about-content, .contact-form-container, .contact-info-container'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effect to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Download CV functionality
document.querySelector('.download-cv')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('CV download functionality would be implemented here! 📄');
    // In a real implementation, this would trigger a file download
    // window.location.href = 'path/to/cv.pdf';
});

// Mobile menu toggle (for future implementation)
function createMobileMenu() {
    const nav = document.querySelector('.nav-container');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.style.display = 'none';
    
    if (window.innerWidth <= 768) {
        menuButton.style.display = 'block';
    }
    
    nav.appendChild(menuButton);
    
    menuButton.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });
}

// Initialize mobile menu on load
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// 3D Cursor Interactive Effect for Profile Picture
document.addEventListener('DOMContentLoaded', () => {
    const avatar = document.querySelector('.avatar');
    const profileContainer = document.querySelector('.profile-container');
    
    if (avatar && profileContainer) {
        profileContainer.addEventListener('mousemove', (e) => {
            const rect = profileContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            avatar.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        profileContainer.addEventListener('mouseleave', () => {
            avatar.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
        
        // Add click effect
        avatar.addEventListener('click', () => {
            avatar.style.animation = 'none';
            avatar.style.transform = 'perspective(1000px) rotateY(360deg) scale(1.1)';
            
            setTimeout(() => {
                avatar.style.animation = 'pulse 2s ease-in-out infinite';
                avatar.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            }, 600);
        });
    }
});

// Enhanced 3D Tilt Effect for Project Cards with Reduced Glazing
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation based on mouse position
            const rotateX = ((y - centerY) / centerY) * 8; // Reduced from 12
            const rotateY = ((x - centerX) / centerX) * -8; // Reduced from 12
            
            // Calculate cursor position percentage
            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            
            // Subtle radial gradient
            card.style.background = `
                radial-gradient(
                    circle at ${percentX}% ${percentY}%,
                    rgba(209, 120, 66, 0.02) 0%,
                    transparent 40%
                ),
                var(--white)
            `;
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            card.style.transition = 'all 0.5s ease';
            card.style.background = 'var(--white)';
        });
    });
});

// 3D Tilt Effect for Testimonial Cards
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation based on mouse position
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * -10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
});

// Skills Tab Switching
document.addEventListener('DOMContentLoaded', function() {
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillCategories = document.querySelectorAll('.skills-category');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            // Remove active class from all tabs and categories
            skillTabs.forEach(t => t.classList.remove('active'));
            skillCategories.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding category
            tab.classList.add('active');
            document.querySelector(`.skills-category[data-category="${category}"]`).classList.add('active');
        });
    });
});

// 3D Cursor Interaction for Skill Cards
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * -10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            
            // Move glow to cursor position
            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${percentX}%`);
            card.style.setProperty('--mouse-y', `${percentY}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
});

// Console message for visitors
console.log('%c🎬 Welcome to Souraj Krishna\'s Video Editing Portfolio!', 'color: #d17842; font-size: 20px; font-weight: bold;');
console.log('%c🎥 Looking for a video editor? Let\'s create something amazing!', 'color: #5d4e37; font-size: 14px;');
console.log('%c📧 contact@souraj.me', 'color: #8b6f47; font-size: 12px;');
