
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


// Project data with categories, randomization flag, and live demo URLs
const projectData = {
    1: {
        title: "A Holistic Healthy Food",
        description: "Defining the Green Plate identity by researching the intersection of corporate wellness and individual nutrition. This stage focused on identifying the pain points of busy professionals—specifically the lack of time for healthy meal prep—resulting in a design strategy centered on convenience, freshness, and community.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/10 design.png",
            "../img/10-1 design.png",
            "../img/10-2 design.png",
            "../img/10-3 design.png"
        ],

    },
    2: {
        title: "The Precision of Night",
        description: "The final chapter of the story is the Ritual. The pouring of the soy sauce, the hand-rolling of the Temaki. We move from the \"High-End\" spectacle back to the \"Comfort\" of a meal crafted fresh. It's the \"Sanctuary\" mentioned in the copy—a place to escape the city noise and focus on a single, perfect bite.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/8 design.png",
            "../img/8-1 design.png",
            "../img/8-2 design.png",
            "../img/8-3 design.png"
        ],

    },
    3: {
        title: "The Unfair Advantage",
        description: "The story opens with a challenge. The headline \"YOUR FASTEST SELF IS WAITING\" isn't about professional athletes—it's an invitation to the individual. The design uses a clean, high-contrast layout where the typography feels heavy and grounded, while the background geometry (intersecting rectangles) suggests a digital \"finish line\" or a blueprint for speed. The React Infinity Run redefines modern design with a large Air unit for ultimate cushioning and everyday comfort, proving that performance and lifestyle can move as one.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/2 design.png",
            "../img/2-1 design.png",
            "../img/2-2 design.png",
            "../img/2-3 design.png"
        ],

    },
    4: {
        title: "The Urban Manifesto: Scaling the Concrete Jungle",
        description: "The Artcore story is built for the modern \"City-Dweller\" who views the urban landscape not as a series of obstacles, but as a framework for self-expression. This narrative centers on the Originals Skyline Windbreaker, a garment described as a \"masterclass in ultra-lightweight architecture\". The design captures a specific moment of transition—represented by the model's dynamic, forward-leaning posture—suggesting that the brand provides the technical gear necessary to navigate a fast-paced metropolitan world.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/13 design.png",
            "../img/13-1 design.png",
            "../img/13-2 design.png",
            "../img/13-3 design.png"
        ],

    },
    5: {
        title: "Defining Modern Elegance",
        description: "The story begins with a redefinition of luxury. The headline \"ELEGANCE\" isn't about delicate aesthetics—it's about the \"perfect harmony of fluid design and whisper-quiet performance\". The design intentionally juxtaposes a massive, bold red typeface against the tan, rugged silhouette of the vehicle. This tells the user that true elegance is found in the strength of motion, where every line of the car is crafted to feel less like travel and more like a \"retreat\".",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/4 design.png",
            "../img/4-1 design.png",
            "../img/4-2 design.png",
            "../img/4-3 design.png"
        ],

    },
    6: {
        title: "The Aura Build Story",
        description: "We didn't start Aura Build just to assemble structures; we started it to redefine how you experience home. By merging cutting-edge frame technology with a passion for sustainable, modern aesthetics, we've spent the last 12 years turning complex dreams into precision-engineered realities. For us, every square meter is an opportunity to tell your story through light, glass, and steel.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/1 design.png",
            "../img/1-1 design.png",
            "../img/1-2 design.png",
            "../img/1-3 design.png"
        ],

    },
    7: {
        title: "Everything Your Pet Needs & Loves",
        description: "The PawSome story begins with a simple promise: to provide a one-stop destination where quality meets affection. The design uses warm, approachable tones and a focal hero image of a cat and dog together to immediately signal inclusivity for all pet owners. This isn't just a retail site; it's a tribute to the \"Premium quality your pets deserve\" at prices that respect the owner.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/3 design.png",
            "../img/3-1 design.png",
            "../img/3-2 design.png",
            "../img/3-3 design.png"
        ],

    },
    8: {
        title: "More Than a Bag—A Street Movement",
        description: "Flamingo was born from the energy of the pavement. We are a team of creatives, skaters, and street enthusiasts who live and breathe the city. Our mission is to provide the next generation with bags that aren't just accessories, but essential gear for the daily grind. We believe in building products that carry your essentials while perfectly reflecting your unique personality and lifestyle.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/6 design.png",
            "../img/6-1 design.png",
            "../img/6-2 design.png",
            "../img/6-3 design.png"
        ],

    },
    9: {
        title: "Moving the World, One Shipment at a Time",
        description: "CargoFlow was built on the promise of relentless reliability. With over 2.5 million shipments delivered across 150+ countries, we have evolved from a local fleet into a global logistics powerhouse. Our mission is simple: to provide end-to-end supply chain solutions—from air and sea freight to secure warehousing—tailored specifically to your business needs. We don't just move cargo; we move your business forward.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/9 design.png",
            "../img/9-1 design.png",
            "../img/9-2 design.png",
            "../img/9-3 design.png"
        ],

    },
    10: {
        title: "The Future of Intelligence.",
        description: "Innovation isn't just about what we build; it's about why we build it. With the iPhone 17, we have reimagined the relationship between human and machine. Powered by the A19 Pro Chip—our most powerful chip ever—and the new 16-core Neural Engine, we aren't just giving you a smartphone. We are giving you Apple Intelligence: a refined, intuitive experience where every detail is reimagined to empower your everyday life.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/5 design.png",
            "../img/5-1 design.png",
            "../img/5-2 design.png",
            "../img/5-3 design.png"
        ],

    },
    11: {
        title: "The Human-Centric Tech Leader",
        description: "Founded in 2018, infinity began with a simple belief: the best technology is built by diverse, empowered teams. We are a collective of curious engineers, designers, and strategists bound together by deep expertise and a passion for building transformative solutions. Our approach ensures that every project we deliver is not just technically sound, but genuinely meaningful.",
        tag: "FIGMA",
        category: "website",
        images: [
            "../img/12 design.png",
            "../img/12-1 design.png",
            "../img/12-2 design.png",
            "../img/12-3 design.png"
        ],

    },
    12: {
        title: "A Journey Through Security Operations",
        description: "Every digital empire rests on a foundation that must be fiercely guarded. Our story begins not with lines of code, but with a philosophy: Plan, Protect, and Respond. This is the heartbeat of IT Security Operations.",
        tag: "Brochure Design",
        category: "visual-archive",
        images: [
            "../img/brochure1.png",
            "../img/brochure2.png",
        ]
    },
    13: {
        title: "The Identity of BMR Developer",
        description: "A 6-page visual book presented in a slide-based reading experience. Each page is designed to be viewed one at a time—just like flipping through a real book.",
        tag: "Company Profile",
        category: "visual-archive",
        images: [
            "../img/book1.png",
            "../img/book2.png",
            "../img/book3.png",
            "../img/book4.png",
            // "../img/book5.png",
            // "../img/book6.png"
        ]
    },
    14: {
        title: "The Mood",
        description: "The image radiates \"Main Character Energy.\" The text describes a personality built from \"open tabs\" and \"pixelated memories,\" suggesting a digital-native identity that is confident, self-aware, and highly curated. It's lighthearted, stylish, and heavily influenced by 2000s-era pop culture.",
        tag: "Poster",
        category: "kanvas",
        images: [
            "../img/poster1.png",
        ]
    },
    15: {
        title: "The Thriller",
        description: "This design leans into a gritty, psychological aesthetic. It features a central male figure surrounded by blurred, ghostly silhouettes in a cold, industrial gray space. A distorted chain-link fence overlay in the foreground adds a feeling of being trapped or watched, while the monochrome palette enhances the \"suspense\" theme.",
        tag: "Poster",
        category: "kanvas",
        images: [
            "../img/poster2.png",
        ]
    },
    16: {
        title: "MONOCHROME VESTIGE",
        description: "This image is a striking example of post-modern surrealism. It features a man in a sharp, double-breasted grey suit leaning against a vintage Vespa, but his head is replaced by a giant, paper-cutout style set of bright red lips. The backdrop is a weathered concrete wall, creating a neutral \"monochrome\" canvas that makes the red elements pop with intense energy.",
        tag: "Poster",
        category: "kanvas",
        images: [
            "../img/poster3.png",
        ]
    },
    17: {
    title: "Sonance",
    description: "The story begins not with a product, but with a feeling: \"Sound That Moves You.\" The website introduces the Sonance One as a ghost in the room—something \"engineered for clarity\" but designed to \"disappear.\" The opening scene tells the user that they don’t need more clutter; they need an experience that fits seamlessly into their existing life. It’s an invitation to upgrade their environment without changing their aesthetic.",
    tag: "Canva Website",
    category: "cansite",
    images: [
        "../img/cansite1.png",
        "../img/cansite1-2.png",
        "../img/cansite1-3.png",
        "../img/cansite1-4.png"
    ],
    liveDemoUrl: "https://twippy-and-i.my.canva.site/ssonance" 
    },
    18: {
    title: "Jose Rizal Story",
    description: "The story begins not with a product, but with a feeling: \"Sound That Moves You.\" The website introduces the Sonance One as a ghost in the room—something \"engineered for clarity\" but designed to \"disappear.\" The opening scene tells the user that they don’t need more clutter; they need an experience that fits seamlessly into their existing life. It’s an invitation to upgrade their environment without changing their aesthetic.",
    tag: "Digital Zine",
    category: "kanvas",
    images: [
        "../img/digitalzine1.png",
        "../img/digitalzine2.png",
        "../img/digitalzine3.png",
        "../img/digitalzine4.png"
    ]
    },
    19: {
    title: "VisionCraft: The Digital Renaissance",
    description: "This collection of images represents a bold, multi-disciplinary zine that merges the structured world of systems architecture with the fluid world of pop culture and art. Using a \"collage-maximalist\" aesthetic, the project explores how technical concepts—like mapping solutions and system evaluation—intersect with human creativity and historical philosophy.",
    tag: "Zine",
    category: "kanvas",
    images: [
        "../img/zine1.png",
        "../img/zine2.png",
        "../img/zine3.png",
        "../img/zine4.png"
    ]
    },
    20: {
    title: "The \"Transformation\" Narrative",
    description: "In a world of shortcuts and \"quick fixes,\" IronForge stands as a sanctuary for those who choose the hard road. Our story isn't written in ink, but in sweat and iron. We provide the tools, the community, and the \"Battle Plan,\" but you provide the soul. Whether you are a beginner picking up your first plate or a competitor prepping for the stage.",
    tag: "Canva Website",
    category: "cansite",
    images: [
        "../img/cansite2.png",
        "../img/cansite2-1.png",
        "../img/cansite2-3.png",
        "../img/cansite2-4.png"
    ],
    liveDemoUrl: "https://twippy-and-i.my.canva.site/your-paragraph-text" 
    },       
};

// Global variables
let slideshowInterval = null;
let isFullscreen = false;
let currentProjectId = null;

// Helper function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Get projects by category
function getProjectsByCategory(category) {
    const projects = [];
    
    for (const [id, project] of Object.entries(projectData)) {
        if (category === 'all' || project.category === category) {
            projects.push({ id, ...project });
        }
    }
    
    return projects;
}

// Render projects to the grid
function renderProjects(projects) {
    const projectGrid = document.querySelector('.project-grid');
    projectGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = index < 6 ? 'project-card' : 'project-card hidden extra-content';
        projectCard.setAttribute('data-id', project.id);
        projectCard.setAttribute('data-category', project.category);
        projectCard.onclick = () => openProject(project.id);
        
        projectCard.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="project-info-overlay">
                <h3>${project.title}</h3>
                <p>${project.description.substring(0, 60)}...</p>
                <span class="tag-badge">${project.tag}</span>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
    
    // Show/hide the growth button based on hidden projects
    const growthBtn = document.querySelector('.growth-btn');
    const hiddenProjects = projectGrid.querySelectorAll('.extra-content');
    
    if (hiddenProjects.length > 0) {
        growthBtn.style.display = 'block';
    } else {
        growthBtn.style.display = 'none';
    }
}

// Filter projects by category with randomization
function filterProjects(category) {
    let projects = getProjectsByCategory(category);
    
    // Randomize order for "All" category only
    if (category === 'all') {
        projects = shuffleArray(projects);
    }
    
    renderProjects(projects);
    
    // Update active filter button
    document.querySelectorAll('.filter-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.filter-item[data-filter="${category}"]`).classList.add('active');
}

// Initialize the portfolio
function initPortfolio() {
    // Set up filter buttons
    document.querySelectorAll('.filter-item').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-filter');
            filterProjects(category);
        });
    });
    
    // Set up "See the 20% Growth" button
    const growthBtn = document.querySelector('.growth-btn');
    growthBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const extraItems = document.querySelectorAll('.extra-content.hidden');
        extraItems.forEach(item => {
            item.classList.remove('hidden');
        });
        
        this.style.display = 'none';
        
        if (extraItems.length > 0) {
            extraItems[0].focus();
        }
    });
    
    // Initial load with "All" category (randomized)
    filterProjects('all');
}

// ------------------------------
// Open Overlay + Slideshow
// ------------------------------
function openProject(id) {
    // Close fullscreen if open
    if (isFullscreen) {
        toggleFullscreen();
    }
    
    currentProjectId = id;
    const overlay = document.getElementById('projectOverlay');
    
    // Clear any existing slideshow
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    
    // Show the overlay
    overlay.classList.add('active');
    
    // Get project data
    const project = projectData[id];
    if (!project) {
        console.error("Project data not found for ID:", id);
        return;
    }
    
    // Update title, description, and tag
    overlay.querySelector(".project-title").textContent = project.title;
    overlay.querySelector(".project-desc").textContent = project.description;
    overlay.querySelector(".project-tag").textContent = project.tag;
    
    // Update Live Demo Button
    const liveDemoBtn = overlay.querySelector(".live-demo-btn");
    if (project.liveDemoUrl) {
        liveDemoBtn.href = project.liveDemoUrl;
        liveDemoBtn.style.display = "inline-flex";
    } else {
        liveDemoBtn.href = "#";
        liveDemoBtn.style.display = "none";
    }

    const mainImage = overlay.querySelector(".main-slide");
    const subImagesContainer = overlay.querySelector(".sub-images");

    const images = project.images;
    
    // Set main image
    if (images && images.length > 0) {
        mainImage.src = images[0];
        // Add click event for image zoom
        mainImage.addEventListener('click', handleImageClick);
    } else {
        console.error("No images found for project ID:", id);
        return;
    }

    // Clear and populate sub-images
    subImagesContainer.innerHTML = "";
    
    // Create thumbnail images
    images.slice(1).forEach((imgSrc, idx) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `Thumbnail ${idx + 1}`;
        img.dataset.index = idx + 1;
        
        // Set first thumbnail as active
        if (idx === 0) {
            img.classList.add("active");
        }
        
        // Add click event to change main image
        img.addEventListener("click", function(e) {
            e.stopPropagation();
            
            // Update main image
            mainImage.src = imgSrc;
            
            // Update active thumbnail
            subImagesContainer.querySelectorAll("img").forEach(thumb => {
                thumb.classList.remove("active");
            });
            this.classList.add("active");
            
            // Reset slideshow to this image
            currentSlideIndex = idx + 1;
        });
        
        subImagesContainer.appendChild(img);
    });

    // Slideshow functionality
    let currentSlideIndex = 0;
    const totalSlides = images.length;

    function showImage(index) {
        if (index < 0 || index >= totalSlides) {
            index = 0;
        }
        
        mainImage.style.opacity = "0.5";
        mainImage.style.transform = "scale(0.98)";

        setTimeout(() => {
            mainImage.src = images[index];
            mainImage.style.opacity = "1";
            mainImage.style.transform = "scale(1)";
            
            const thumbnails = subImagesContainer.querySelectorAll("img");
            thumbnails.forEach((thumb, thumbIdx) => {
                thumb.classList.remove("active");
                if (index > 0 && thumbIdx === index - 1) {
                    thumb.classList.add("active");
                }
            });
            
            currentSlideIndex = index;
        }, 200);
    }

    // Show first image
    showImage(0);

    // Start slideshow
    slideshowInterval = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
        showImage(currentSlideIndex);
    }, 4000);
}

// ------------------------------
// Image Click Handler
// ------------------------------
function handleImageClick(e) {
    if (!isFullscreen) {
        toggleFullscreen();
    }
}

// ------------------------------
// Toggle Fullscreen
// ------------------------------
function toggleFullscreen() {
    const container = document.querySelector('.main-image-container');
    const mainImage = document.querySelector('.main-slide');
    
    if (!document.fullscreenElement) {
        // Enter fullscreen
        if (container.requestFullscreen) {
            container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
            container.msRequestFullscreen();
        }
        isFullscreen = true;
        container.classList.add('fullscreen');
        mainImage.classList.add('fullscreen');
        document.body.classList.add('fullscreen-mode');
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        isFullscreen = false;
        container.classList.remove('fullscreen');
        mainImage.classList.remove('fullscreen');
        document.body.classList.remove('fullscreen-mode');
    }
}

// ------------------------------
// Close Overlay
// ------------------------------
function closeProject() {
    // Exit fullscreen if active
    if (isFullscreen) {
        toggleFullscreen();
    }
    
    const overlay = document.getElementById('projectOverlay');
    overlay.classList.remove('active');
    
    // Clear slideshow interval
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    
    currentProjectId = null;
}

// ------------------------------
// Initialize when DOM is loaded
// ------------------------------
document.addEventListener('DOMContentLoaded', function() {
    initPortfolio();
    
    // Close overlay when clicking outside content
    const overlay = document.getElementById('projectOverlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProject();
            }
        });
    }
    
    // Close overlay with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (isFullscreen) {
                toggleFullscreen();
            } else {
                closeProject();
            }
        }
    });
    
    // Also close fullscreen when clicking outside image in fullscreen mode
    document.addEventListener('click', function(e) {
        if (isFullscreen) {
            const mainImage = document.querySelector('.main-slide.fullscreen');
            const closeBtn = document.querySelector('.close-fullscreen-btn');
            const zoomBtn = document.querySelector('.zoom-btn');
            
            if (mainImage && 
                !mainImage.contains(e.target) && 
                !closeBtn.contains(e.target) && 
                !zoomBtn.contains(e.target)) {
                toggleFullscreen();
            }
        }
    });
    
    // Add CSS for live demo button
    const style = document.createElement('style');
    style.textContent = `
        .live-demo-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            padding: 12px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        
        .live-demo-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
            color: white;
        }
        
        .live-demo-btn:active {
            transform: translateY(0);
        }
        
        .live-demo-btn[href="#"] {
            display: none;
        }
        
        .project-info-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            color: white;
            padding: 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-info-overlay {
            opacity: 1;
        }
        
        .project-info-overlay h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }
        
        .project-info-overlay p {
            margin: 0 0 8px 0;
            font-size: 12px;
            opacity: 0.9;
        }
    `;
    document.head.appendChild(style);
});

// Fullscreen toggle with zoom effect
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.zoom-btn, .main-slide').forEach(element => {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (isFullscreen) {
                toggleFullscreen();
            } else {
                toggleFullscreen();
            }
        });
    });
    
    // Listen for fullscreen change events
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
});

function handleFullscreenChange() {
    const container = document.querySelector('.main-image-container');
    const mainImage = document.querySelector('.main-slide');
    
    isFullscreen = !!document.fullscreenElement || 
                   !!document.webkitFullscreenElement || 
                   !!document.msFullscreenElement;
    
    if (isFullscreen) {
        container.classList.add('fullscreen');
        mainImage.classList.add('fullscreen');
        document.body.classList.add('fullscreen-mode');
    } else {
        container.classList.remove('fullscreen');
        mainImage.classList.remove('fullscreen');
        document.body.classList.remove('fullscreen-mode');
    }
}
