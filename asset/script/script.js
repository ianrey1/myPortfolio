

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navOverlay = document.createElement('div');
    const body = document.body;
    
    // Create overlay for mobile menu
    navOverlay.className = 'nav-overlay';
    body.appendChild(navOverlay);
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isActive = navLinks.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        navLinks.classList.add('active');
        navOverlay.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.innerHTML = '<span class="material-icons">close</span>';
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
    
    function closeMobileMenu() {
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = '<span class="material-icons">menu</span>';
        body.style.overflow = ''; // Restore scrolling
    }
    
    // Event Listeners
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking on overlay
    navOverlay.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking on a nav link (mobile only)
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
                
                // Update active link
                navItems.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // Close menu on window resize if it becomes desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or it's a contact button
            if (href === '#' || href === '#contact') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Figma Badge Animation
const words = ["Figma", "Coding", "Canva", "Design", "Creativity", "Idea"];
const text = document.getElementById("animated-text");
let index = 0;

setInterval(() => {
  // fade out
  text.style.opacity = 0;
  text.style.transform = "translateY(-10px)";

  setTimeout(() => {
    // change text
    index = (index + 1) % words.length;
    text.textContent = words[index];

    // fade in
    text.style.opacity = 1;
    text.style.transform = "translateY(0)";
  }, 500); 
}, 2000); 


//The Design Journey
function toggleSlide(button) {
    const row = button.closest('.list-row');
    
    // Toggle active state
    row.classList.toggle('active');

    // If you want others to close automatically:
    document.querySelectorAll('.list-row').forEach(otherRow => {
        if (otherRow !== row) {
            otherRow.classList.remove('active');
        }
    });
}

// Optional: Simple Fade-in Animation
        document.addEventListener('DOMContentLoaded', () => {
            const hero = document.querySelector('.hero-section');
            hero.style.opacity = 0;
            hero.style.transition = 'opacity 1s ease-in-out';
            
            setTimeout(() => {
                hero.style.opacity = 1;
            }, 100);
        });



  // Font loading helper
  document.fonts.ready.then(function() {
    document.documentElement.classList.add('fonts-loaded');
  });
  
  // Fallback if fonts don't load
  setTimeout(function() {
    document.documentElement.classList.add('fonts-fallback');
  }, 3000);

  


//case studies animation
const items = document.querySelectorAll('.collage');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Unobserve if you want the animation to happen only once
      // observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1 // Triggers earlier for better UX
});

items.forEach(item => observer.observe(item));

const observerOptions = {
  threshold: 0.1
};

//index animation


// Scroll Animation using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.list-row');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // triggers when 20% of row is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } 
            // Optional: remove class when scrolling up
            else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    rows.forEach(row => observer.observe(row));
});


// Animate sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.intro-section, .portfolio-section, .footer-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // trigger when 20% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                // optional: remove class if scrolling back up
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});


// about animaation


document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate about text
    const aboutText = document.querySelector('.about-text');
    if(aboutText) observer.observe(aboutText);

    // Animate images as a group
    const imageGrid = document.querySelector('.image-grid');
    if(imageGrid) observer.observe(imageGrid);
});


document.addEventListener('DOMContentLoaded', () => {
    // 1. SHOW/HIDE LOGIC
    const loadBtn = document.getElementById('loadMoreBtn');
    const extraImages = document.querySelectorAll('.extra-content');

    loadBtn.addEventListener('click', () => {
        extraImages.forEach(item => {
            // Remove 'hidden' class to show them
            item.classList.toggle('hidden');
        });

        // Toggle Button Text
        if (extraImages[0].classList.contains('hidden')) {
            loadBtn.innerText = "See the 20% Growth";
        } else {
            loadBtn.innerText = "Show Less";
        }
    });

    // 2. ZOOM LOGIC
    const overlay = document.getElementById('zoomOverlay');
    const zoomedImg = document.getElementById('zoomedImg');
    const allImages = document.querySelectorAll('.grid-item img');

    allImages.forEach(img => {
        img.addEventListener('click', () => {
            zoomedImg.src = img.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element hits the view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
            }
        });
    }, observerOptions);

    // Observe the wrapper (for the line) and each item (for the text)
    const elementsToAnimate = document.querySelectorAll(".timeline-wrapper, .timeline-item");
    elementsToAnimate.forEach((el) => observer.observe(el));
});



