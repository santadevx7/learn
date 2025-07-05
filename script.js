// Enhanced Course data with additional features
const coursesData = {
    html: {
        title: "دورة HTML للمبتدئين",
        description: "تعلم أساسيات بناء صفحات الويب باستخدام HTML مع أحدث المعايير",
        category: "web",
        difficulty: "beginner",
        duration: 4,
        students: 12500,
        rating: 4.9,
        reviews: 2100,
        objectives: [
            "فهم هيكل HTML الأساسي",
            "إنشاء صفحات ويب تفاعلية",
            "استخدام العناصر الدلالية",
            "تطبيق أفضل الممارسات"
        ],
        requirements: [
            "لا توجد متطلبات مسبقة",
            "حاسوب مع متصفح حديث",
            "الرغبة في التعلم"
        ],
        lessons: [
            {
                title: "مقدمة في HTML",
                duration: "15 دقيقة",
                videoId: "qz0aGYrrlhU",
                description: "تعرف على أساسيات HTML وكيفية إنشاء أول صفحة ويب"
            },
            {
                title: "العناصر والوسوم الأساسية",
                duration: "20 دقيقة", 
                videoId: "FQdaUv95mR8",
                description: "تعلم العناصر الأساسية في HTML"
            },
            {
                title: "النماذج والجداول",
                duration: "25 دقيقة",
                videoId: "mJgBOIoGihA",
                description: "كيفية إنشاء النماذج والجداول في HTML"
            },
            {
                title: "الروابط والصور",
                duration: "18 دقيقة",
                videoId: "2oCN2q1x3c4",
                description: "إضافة الروابط والصور إلى صفحات الويب"
            }
        ]
    },
    css: {
        title: "دورة CSS للمبتدئين",
        description: "تعلم تصميم وتنسيق صفحات الويب باستخدام CSS مع التقنيات الحديثة",
        category: "web",
        difficulty: "beginner",
        duration: 6,
        students: 10800,
        rating: 4.8,
        reviews: 1900,
        objectives: [
            "إتقان أساسيات CSS",
            "تطبيق التصميم المتجاوب",
            "استخدام Flexbox و Grid",
            "إنشاء تأثيرات بصرية متقدمة"
        ],
        requirements: [
            "معرفة أساسية بـ HTML",
            "فهم هيكل صفحات الويب"
        ],
        lessons: [
            {
                title: "مقدمة في CSS",
                duration: "20 دقيقة",
                videoId: "OXGznpKZ_sA",
                description: "أساسيات CSS وكيفية تطبيق الأنماط"
            },
            {
                title: "الألوان والخطوط",
                duration: "25 دقيقة",
                videoId: "wRNinF7YQqQ",
                description: "تعلم كيفية استخدام الألوان والخطوط"
            },
            {
                title: "التخطيط والتموضع",
                duration: "30 دقيقة",
                videoId: "ESnrn1kAD4E",
                description: "فهم نظام التخطيط في CSS"
            },
            {
                title: "التصميم المتجاوب",
                duration: "35 دقيقة",
                videoId: "yfoY53QXEnI",
                description: "إنشاء تصاميم تتكيف مع جميع الأجهزة"
            }
        ]
    },
    javascript: {
        title: "دورة JavaScript للمبتدئين",
        description: "تعلم البرمجة التفاعلية وتطوير تطبيقات الويب الحديثة",
        category: "web",
        difficulty: "intermediate",
        duration: 12,
        students: 25300,
        rating: 4.9,
        reviews: 5200,
        objectives: [
            "إتقان أساسيات JavaScript",
            "التعامل مع DOM",
            "البرمجة غير المتزامنة",
            "بناء تطبيقات تفاعلية"
        ],
        requirements: [
            "معرفة جيدة بـ HTML و CSS",
            "فهم أساسيات البرمجة"
        ],
        lessons: [
            {
                title: "أساسيات JavaScript",
                duration: "30 دقيقة",
                videoId: "EerdGm-ehJQ",
                description: "مقدمة شاملة في JavaScript"
            },
            {
                title: "المتغيرات وأنواع البيانات",
                duration: "25 دقيقة",
                videoId: "lfmg-EJ8gm4",
                description: "فهم المتغيرات وأنواع البيانات المختلفة"
            },
            {
                title: "الدوال والكائنات",
                duration: "40 دقيقة",
                videoId: "Ihy0QziLDf0",
                description: "تعلم كيفية إنشاء واستخدام الدوال والكائنات"
            },
            {
                title: "التعامل مع DOM",
                duration: "35 دقيقة",
                videoId: "PkZNo7MFNFg",
                description: "التفاعل مع عناصر صفحة الويب"
            },
            {
                title: "الأحداث والتفاعل",
                duration: "30 دقيقة",
                videoId: "ogdtB_m6G5g",
                description: "إضافة التفاعل إلى صفحات الويب"
            }
        ]
    },
    python: {
        title: "دورة Python للمبتدئين",
        description: "تعلم البرمجة بـ Python للذكاء الاصطناعي وتحليل البيانات",
        category: "data ai",
        difficulty: "beginner",
        duration: 15,
        students: 18700,
        rating: 4.8,
        reviews: 3400,
        objectives: [
            "إتقان أساسيات Python",
            "تحليل البيانات",
            "مقدمة في الذكاء الاصطناعي",
            "بناء مشاريع عملية"
        ],
        requirements: [
            "لا توجد متطلبات برمجية مسبقة",
            "الرغبة في تعلم البرمجة"
        ],
        lessons: [
            {
                title: "مقدمة في Python",
                duration: "25 دقيقة",
                videoId: "eWRfhZUzrAc",
                description: "أساسيات لغة Python وبيئة التطوير"
            },
            {
                title: "المتغيرات والعمليات",
                duration: "30 دقيقة",
                videoId: "H2EJuAcrZYU",
                description: "تعلم المتغيرات والعمليات الحسابية"
            },
            {
                title: "الحلقات والشروط",
                duration: "35 دقيقة",
                videoId: "K5KVEU3aaeQ",
                description: "استخدام الحلقات والعبارات الشرطية"
            },
            {
                title: "القوائم والقواميس",
                duration: "40 دقيقة",
                videoId: "kqtD5dpn9C8",
                description: "التعامل مع هياكل البيانات في Python"
            }
        ]
    },
    react: {
        title: "دورة React للمبتدئين",
        description: "تعلم بناء واجهات المستخدم التفاعلية مع React",
        category: "web",
        difficulty: "advanced",
        duration: 16,
        students: 14200,
        rating: 4.9,
        reviews: 2800,
        objectives: [
            "فهم مفاهيم React الأساسية",
            "بناء مكونات قابلة لإعادة الاستخدام",
            "إدارة الحالة بفعالية",
            "تطوير تطبيقات ويب حديثة"
        ],
        requirements: [
            "إتقان JavaScript",
            "معرفة بـ HTML و CSS",
            "فهم ES6+"
        ],
        lessons: [
            {
                title: "مقدمة في React",
                duration: "30 دقيقة",
                videoId: "Tn6-PIqc4UM",
                description: "أساسيات React والمكونات"
            },
            {
                title: "JSX والخصائص",
                duration: "35 دقيقة",
                videoId: "DLX62G4lc44",
                description: "فهم JSX وتمرير البيانات"
            },
            {
                title: "الحالة والأحداث",
                duration: "40 دقيقة",
                videoId: "35lXWvCuM8o",
                description: "إدارة الحالة والتفاعل"
            },
            {
                title: "React Hooks",
                duration: "45 دقيقة",
                videoId: "TNhaISOUy6Q",
                description: "استخدام Hooks في React"
            }
        ]
    },
    flutter: {
        title: "دورة Flutter للمبتدئين",
        description: "تطوير تطبيقات الجوال متعددة المنصات باستخدام Flutter",
        category: "mobile",
        difficulty: "intermediate",
        duration: 20,
        students: 8900,
        rating: 4.7,
        reviews: 1500,
        objectives: [
            "إتقان أساسيات Flutter",
            "بناء واجهات مستخدم جميلة",
            "تطوير تطبيقات متعددة المنصات",
            "نشر التطبيقات على المتاجر"
        ],
        requirements: [
            "معرفة أساسية بالبرمجة",
            "فهم مفاهيم البرمجة الكائنية"
        ],
        lessons: [
            {
                title: "مقدمة في Flutter",
                duration: "30 دقيقة",
                videoId: "x0uinJvhNxI",
                description: "أساسيات Flutter وإعداد البيئة"
            },
            {
                title: "Widgets الأساسية",
                duration: "35 دقيقة",
                videoId: "wE7khGHVkYY",
                description: "تعلم استخدام Widgets الأساسية"
            },
            {
                title: "التخطيط والتصميم",
                duration: "40 دقيقة",
                videoId: "RJEnTVC_1_k",
                description: "إنشاء تخطيطات معقدة"
            },
            {
                title: "التنقل بين الصفحات",
                duration: "35 دقيقة",
                videoId: "nyvwx7o277U",
                description: "إدارة التنقل في التطبيق"
            }
        ]
    }
};

// Global variables
let currentCourse = null;
let currentLesson = null;
let currentLanguage = 'ar';
let isVoiceSearchActive = false;
let chatMessages = [];
let bookmarkedCourses = JSON.parse(localStorage.getItem('bookmarkedCourses')) || [];
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};

// DOM Elements
const modal = document.getElementById('courseModal');
const modalTitle = document.getElementById('modalTitle');
const videoPlayer = document.getElementById('videoPlayer');
const lessonsList = document.getElementById('lessonsList');
const searchOverlay = document.getElementById('search-overlay');
const chatWidget = document.getElementById('chat-widget');
const loadingScreen = document.getElementById('loading-screen');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    showLoadingScreen();
    
    setTimeout(() => {
        initializeParticles();
        initializeTheme();
        initializeNavigation();
        initializeAnimations();
        initializeCursor();
        initializeCounters();
        initializeKeyboardShortcuts();
        initializeSearch();
        initializeChat();
        initializeBookmarks();
        initializeProgressTracking();
        hideLoadingScreen();
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('مرحباً بك في أكاديميه ديفڪس! 🚀', 'success');
        }, 1000);
    }, 3000);
}

// Loading screen functions
function showLoadingScreen() {
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Particles initialization
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#667eea"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#667eea",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Custom cursor initialization
function initializeCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursor || !cursorDot || !cursorOutline) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.1;
        outlineY += (mouseY - outlineY) * 0.1;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    
    animateOutline();
    
    // Add hover effects
    const hoverElements = document.querySelectorAll('a, button, .course-card, .nav-link');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Counter animations
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe course cards and other elements
    const animatedElements = document.querySelectorAll('.course-card, .feature, .stat, .roadmap-step');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
    
    if (newTheme === 'dark') {
        showNotification('تم تفعيل الوضع الداكن', 'success');
    } else {
        showNotification('تم تفعيل الوضع الفاتح', 'success');
    }
}

function updateThemeIcons(theme) {
    const themeToggles = document.querySelectorAll('.top-theme-toggle i, .theme-toggle i');
    themeToggles.forEach(icon => {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// Language toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    if (currentLanguage === 'en') {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        showNotification('Language switched to English', 'info');
    } else {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        showNotification('تم تغيير اللغة إلى العربية', 'info');
    }
    
    localStorage.setItem('language', currentLanguage);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('advanced-search');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            performSearch(query);
        });
    }
    
    // Initialize filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from siblings
            this.parentElement.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Apply filter
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });
}

function toggleSearch() {
    if (searchOverlay) {
        searchOverlay.classList.toggle('active');
        if (searchOverlay.classList.contains('active')) {
            document.getElementById('advanced-search').focus();
        }
    }
}

function performSearch(query) {
    const results = [];
    
    Object.keys(coursesData).forEach(key => {
        const course = coursesData[key];
        if (course.title.toLowerCase().includes(query) || 
            course.description.toLowerCase().includes(query)) {
            results.push({
                key: key,
                course: course
            });
        }
    });
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">لم يتم العثور على نتائج</p>';
        return;
    }
    
    searchResults.innerHTML = results.map(result => `
        <div class="search-result-item" onclick="openCourse('${result.key}')">
            <div class="result-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="result-content">
                <h4>${result.course.title}</h4>
                <p>${result.course.description}</p>
                <div class="result-meta">
                    <span><i class="fas fa-clock"></i> ${result.course.duration} ساعات</span>
                    <span><i class="fas fa-users"></i> ${result.course.students.toLocaleString()}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Voice search functionality
function startVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showNotification('البحث الصوتي غير مدعوم في هذا المتصفح', 'error');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = currentLanguage === 'ar' ? 'ar-SA' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = function() {
        isVoiceSearchActive = true;
        document.querySelector('.voice-search i').className = 'fas fa-stop';
        showNotification('استمع... تحدث الآن', 'info');
    };
    
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('advanced-search').value = transcript;
        performSearch(transcript.toLowerCase());
    };
    
    recognition.onerror = function(event) {
        showNotification('حدث خطأ في البحث الصوتي', 'error');
    };
    
    recognition.onend = function() {
        isVoiceSearchActive = false;
        document.querySelector('.voice-search i').className = 'fas fa-microphone';
    };
    
    recognition.start();
}

// Course filtering
function applyFilter(filter) {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const difficulty = card.getAttribute('data-difficulty');
        const duration = parseInt(card.getAttribute('data-duration'));
        
        let shouldShow = false;
        
        switch(filter) {
            case 'all':
                shouldShow = true;
                break;
            case 'web':
                shouldShow = category && category.includes('web');
                break;
            case 'mobile':
                shouldShow = category && category.includes('mobile');
                break;
            case 'data':
                shouldShow = category && category.includes('data');
                break;
            case 'ai':
                shouldShow = category && category.includes('ai');
                break;
            case 'beginner':
                shouldShow = difficulty === 'beginner';
                break;
            case 'intermediate':
                shouldShow = difficulty === 'intermediate';
                break;
            case 'advanced':
                shouldShow = difficulty === 'advanced';
                break;
            case 'short':
                shouldShow = duration < 10;
                break;
            case 'medium':
                shouldShow = duration >= 10 && duration <= 20;
                break;
            case 'long':
                shouldShow = duration > 20;
                break;
        }
        
        if (shouldShow) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.3s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Bookmark functionality
function initializeBookmarks() {
    updateBookmarkUI();
}

function toggleBookmark(courseKey) {
    const index = bookmarkedCourses.indexOf(courseKey);
    
    if (index > -1) {
        bookmarkedCourses.splice(index, 1);
        showNotification('تم إزالة الدورة من المفضلة', 'info');
    } else {
        bookmarkedCourses.push(courseKey);
        showNotification('تم إضافة الدورة إلى المفضلة', 'success');
    }
    
    localStorage.setItem('bookmarkedCourses', JSON.stringify(bookmarkedCourses));
    updateBookmarkUI();
}

function updateBookmarkUI() {
    // Update bookmark count
    const bookmarkCount = document.querySelector('.bookmark-count');
    if (bookmarkCount) {
        bookmarkCount.textContent = bookmarkedCourses.length;
    }
    
    // Update bookmark buttons
    bookmarkedCourses.forEach(courseKey => {
        const bookmarkBtn = document.querySelector(`[data-language="${courseKey}"] .bookmark-btn`);
        if (bookmarkBtn) {
            bookmarkBtn.classList.add('active');
            bookmarkBtn.querySelector('i').className = 'fas fa-bookmark';
        }
    });
}

function toggleBookmarks() {
    // Show bookmarked courses
    const courseCards = document.querySelectorAll('.course-card');
    let hasBookmarks = false;
    
    courseCards.forEach(card => {
        const courseKey = card.getAttribute('data-language');
        if (bookmarkedCourses.includes(courseKey)) {
            card.style.display = 'block';
            hasBookmarks = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    if (!hasBookmarks) {
        showNotification('لا توجد دورات في المفضلة', 'info');
    }
}

// Progress tracking
function initializeProgressTracking() {
    Object.keys(coursesData).forEach(courseKey => {
        updateProgressDisplay(courseKey);
    });
}

function trackCourseProgress(courseKey, lessonIndex) {
    if (!userProgress[courseKey]) {
        userProgress[courseKey] = [];
    }
    
    if (!userProgress[courseKey].includes(lessonIndex)) {
        userProgress[courseKey].push(lessonIndex);
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
        
        const course = coursesData[courseKey];
        const completedLessons = userProgress[courseKey].length;
        const totalLessons = course.lessons.length;
        const progressPercentage = Math.round((completedLessons / totalLessons) * 100);
        
        showNotification(`تقدمك في ${course.title}: ${progressPercentage}%`, 'success');
        
        if (completedLessons === totalLessons) {
            showCourseCompletionCelebration(courseKey);
        }
    }
    
    updateProgressDisplay(courseKey);
}

function updateProgressDisplay(courseKey) {
    const progress = userProgress[courseKey] || [];
    const course = coursesData[courseKey];
    if (!course) return;
    
    const totalLessons = course.lessons.length;
    const completedLessons = progress.length;
    const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    
    // Update progress bar in course card
    const courseCard = document.querySelector(`[data-language="${courseKey}"]`);
    if (courseCard) {
        const progressFill = courseCard.querySelector('.progress-fill');
        const progressText = courseCard.querySelector('.progress-text');
        const courseButton = courseCard.querySelector('.course-button span');
        
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${Math.round(progressPercentage)}% مكتمل`;
        }
        
        if (courseButton && progressPercentage > 0) {
            courseButton.textContent = progressPercentage === 100 ? 'مراجعة الدورة' : 'متابعة التعلم';
        }
    }
}

// Course completion celebration
function showCourseCompletionCelebration(courseKey) {
    const course = coursesData[courseKey];
    
    const celebrationModal = document.createElement('div');
    celebrationModal.className = 'celebration-modal';
    celebrationModal.innerHTML = `
        <div class="celebration-content">
            <div class="celebration-animation">
                <i class="fas fa-trophy"></i>
                <div class="confetti"></div>
            </div>
            <h2>مبروك! 🎉</h2>
            <p>لقد أكملت دورة ${course.title} بنجاح!</p>
            <div class="celebration-actions">
                <button onclick="subscribeToPremium()" class="premium-celebration-btn">
                    <i class="fas fa-crown"></i>
                    احصل على شهادة بريميوم
                </button>
                <button onclick="this.closest('.celebration-modal').remove()" class="close-celebration-btn">
                    متابعة التعلم
                </button>
            </div>
        </div>
    `;
    
    celebrationModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        animation: fadeIn 0.3s ease-out;
    `;
    
    document.body.appendChild(celebrationModal);
}

// Chat functionality
function initializeChat() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function toggleChat() {
    if (chatWidget) {
        chatWidget.classList.toggle('active');
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !chatMessages) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `
        <div class="message-avatar">أ</div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    chatMessages.appendChild(userMessage);
    
    // Clear input
    chatInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>${botResponse}</p>
            </div>
        `;
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        'مرحبا': 'مرحباً بك! كيف يمكنني مساعدتك في رحلتك التعليمية؟',
        'دورات': 'لدينا أكثر من 25 دورة في مختلف لغات البرمجة. أي مجال يهمك؟',
        'javascript': 'دورة JavaScript رائعة للمبتدئين! تتضمن 12 ساعة من المحتوى التفاعلي.',
        'python': 'Python مثالي لعلوم البيانات والذكاء الاصطناعي. هل تريد البدء؟',
        'شهادة': 'يمكنك الحصول على شهادة معتمدة بعد إكمال الدورة مع الاشتراك البريميوم.',
        'مساعدة': 'أنا هنا لمساعدتك! يمكنك سؤالي عن الدورات أو التقنيات أو أي شيء متعلق بالبرمجة.'
    };
    
    const lowerMessage = message.toLowerCase();
    
    for (const key in responses) {
        if (lowerMessage.includes(key)) {
            return responses[key];
        }
    }
    
    return 'شكراً لك على رسالتك! فريق الدعم سيتواصل معك قريباً. في الوقت الحالي، يمكنك استكشاف دوراتنا المتنوعة.';
}

// Course modal functionality
function openCourse(courseKey) {
    const course = coursesData[courseKey];
    
    if (!course) {
        console.error('Course not found:', courseKey);
        return;
    }
    
    currentCourse = courseKey;
    
    // Update modal content
    modalTitle.textContent = course.title;
    document.getElementById('modalStudents').textContent = course.students.toLocaleString();
    document.getElementById('modalRating').textContent = course.rating;
    
    // Clear previous content
    videoPlayer.innerHTML = `
        <div class="video-placeholder">
            <i class="fas fa-play-circle"></i>
            <p>اختر درساً من القائمة لبدء المشاهدة</p>
        </div>
    `;
    
    // Populate lessons list
    populateLessonsList(course);
    
    // Populate overview tab
    populateOverviewTab(course);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Initialize modal tabs
    initializeModalTabs();
}

function populateLessonsList(course) {
    const progress = userProgress[currentCourse] || [];
    
    document.getElementById('lessonsCompleted').textContent = progress.length;
    document.getElementById('totalLessons').textContent = course.lessons.length;
    
    lessonsList.innerHTML = '';
    
    course.lessons.forEach((lesson, index) => {
        const isCompleted = progress.includes(index);
        const lessonElement = document.createElement('div');
        lessonElement.className = `lesson-item ${isCompleted ? 'completed' : ''}`;
        lessonElement.innerHTML = `
            <div>
                <div class="lesson-title">
                    ${isCompleted ? '<i class="fas fa-check-circle"></i>' : ''} 
                    ${lesson.title}
                </div>
                <div class="lesson-duration">${lesson.duration}</div>
            </div>
            <button class="play-button" onclick="playLesson(${index})">
                <i class="fas fa-play"></i>
            </button>
        `;
        
        lessonsList.appendChild(lessonElement);
    });
}

function populateOverviewTab(course) {
    // Populate objectives
    const objectivesList = document.getElementById('courseObjectives');
    if (objectivesList && course.objectives) {
        objectivesList.innerHTML = course.objectives.map(obj => `<li>${obj}</li>`).join('');
    }
    
    // Populate requirements
    const requirementsList = document.getElementById('courseRequirements');
    if (requirementsList && course.requirements) {
        requirementsList.innerHTML = course.requirements.map(req => `<li>${req}</li>`).join('');
    }
}

function initializeModalTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

function playLesson(lessonIndex) {
    if (!currentCourse || !coursesData[currentCourse]) {
        console.error('No course selected');
        return;
    }
    
    const course = coursesData[currentCourse];
    const lesson = course.lessons[lessonIndex];
    
    if (!lesson) {
        console.error('Lesson not found:', lessonIndex);
        return;
    }
    
    currentLesson = lessonIndex;
    
    // Create YouTube embed
    const embedUrl = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=1&rel=0&modestbranding=1`;
    
    videoPlayer.innerHTML = `
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
            <iframe 
                src="${embedUrl}"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: var(--border-color); border-radius: 12px;">
            <h4>${lesson.title}</h4>
            <p style="color: var(--text-secondary); margin-top: 0.5rem;">${lesson.description}</p>
        </div>
    `;
    
    // Update lesson items to show current playing
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((item, index) => {
        if (index === lessonIndex) {
            item.style.background = 'var(--glass-bg)';
            item.style.borderColor = 'var(--primary-color)';
        } else {
            item.style.background = 'var(--border-color)';
            item.style.borderColor = 'transparent';
        }
    });
    
    // Track progress
    trackCourseProgress(currentCourse, lessonIndex);
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Stop video by clearing the iframe
    videoPlayer.innerHTML = `
        <div class="video-placeholder">
            <i class="fas fa-play-circle"></i>
            <p>اضغط على زر التشغيل لبدء الفيديو</p>
        </div>
    `;
    
    currentCourse = null;
    currentLesson = null;
}

// Course preview functionality
function previewCourse(courseKey) {
    const course = coursesData[courseKey];
    if (!course || !course.lessons.length) return;
    
    // Play first lesson preview
    const firstLesson = course.lessons[0];
    const previewUrl = `https://www.youtube.com/embed/${firstLesson.videoId}?start=0&end=30&autoplay=1`;
    
    // Create preview modal
    const previewModal = document.createElement('div');
    previewModal.className = 'preview-modal';
    previewModal.innerHTML = `
        <div class="preview-content">
            <div class="preview-header">
                <h3>معاينة: ${course.title}</h3>
                <button onclick="this.closest('.preview-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="preview-video">
                <iframe src="${previewUrl}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="preview-actions">
                <button onclick="openCourse('${courseKey}')" class="start-course-btn">
                    ابدأ الدورة كاملة
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(previewModal);
}

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function playIntroVideo() {
    // Create intro video modal
    const introModal = document.createElement('div');
    introModal.className = 'intro-modal';
    introModal.innerHTML = `
        <div class="intro-content">
            <div class="intro-header">
                <h3>فيديو تعريفي - أكاديميه ديفڪس</h3>
                <button onclick="this.closest('.intro-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="intro-video">
                <iframe src="https://santadevx7.github.io/music-host/VID_20250629_161947_566.mp4=1" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(introModal);
}

function loadMoreCourses() {
    // Simulate loading more courses
    showNotification('جاري تحميل المزيد من الدورات...', 'info');
    
    setTimeout(() => {
        showNotification('تم تحميل جميع الدورات المتاحة', 'success');
    }, 2000);
}

function shareCourse(courseKey) {
    const course = coursesData[courseKey];
    if (!course) return;
    
    if (navigator.share) {
        navigator.share({
            title: course.title,
            text: course.description,
            url: window.location.href
        });
    } else {
        // Fallback to clipboard
        const shareText = `${course.title}\n${course.description}\n${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('تم نسخ رابط الدورة', 'success');
        });
    }
}

// Premium and support functions
function subscribeToPremium() {
    showNotification('جاري توجيهك لصفحة الاشتراك...', 'info');
    
    setTimeout(() => {
        window.open('https://wa.me/+201500461923?text=مرحباً، أريد الاشتراك في الباقة البريميوم لأكاديميه ديفڪس', '_blank');
    }, 1000);
}

function contactSupport() {
    showNotification('جاري توجيهك للدعم الفني...', 'info');
    
    setTimeout(() => {
        window.open('https://wa.me/+201500461923?text=مرحباً، أحتاج مساعدة في أكاديميه ديفڪس', '_blank');
    }, 1000);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: var(--card-bg);
        color: var(--text-color);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 15px 35px var(--shadow);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-width: 320px;
        border-left: 4px solid ${getNotificationColor(type)};
        animation: slideInRight 0.4s ease-out;
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.4s ease-in';
            setTimeout(() => notification.remove(), 400);
        }
    }, 4000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    return colors[type] || '#3b82f6';
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Ctrl/Cmd + D for dark mode toggle
        if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
            event.preventDefault();
            toggleTheme();
        }
        
        // Ctrl/Cmd + K for search
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            toggleSearch();
        }
        
        // Ctrl/Cmd + P for premium
        if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
            event.preventDefault();
            subscribeToPremium();
        }
        
        // Escape to close modals
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="block"]');
            const searchOverlay = document.querySelector('.search-overlay.active');
            const chatWidget = document.querySelector('.chat-widget.active');
            
            if (openModal) {
                closeModal();
            } else if (searchOverlay) {
                toggleSearch();
            } else if (chatWidget) {
                toggleChat();
            }
        }
        
        // Arrow keys for lesson navigation in modal
        if (modal && modal.style.display === 'block') {
            if (event.key === 'ArrowUp' && currentLesson > 0) {
                event.preventDefault();
                playLesson(currentLesson - 1);
            } else if (event.key === 'ArrowDown' && currentCourse && currentLesson < coursesData[currentCourse].lessons.length - 1) {
                event.preventDefault();
                playLesson(currentLesson + 1);
            }
        }
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
    
    if (event.target === searchOverlay) {
        toggleSearch();
    }
});

// Smooth scrolling for CTA button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button[href="#courses"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#courses').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Online users simulation
function updateOnlineUsers() {
    const onlineUsersElement = document.getElementById('online-users');
    if (onlineUsersElement) {
        const baseUsers = 1200;
        const variation = Math.floor(Math.random() * 100);
        onlineUsersElement.textContent = (baseUsers + variation).toLocaleString();
    }
}

// Update online users every 30 seconds
setInterval(updateOnlineUsers, 30000);

// Console welcome message
console.log(`
🎓 أكاديميه ديفڪس - منصة التعلم المتقدمة
📚 ${Object.keys(coursesData).length} دورة متاحة
🎯 تعلم من الصفر إلى الاحتراف
💻 جميع الدورات مجانية ومتاحة الآن

⌨️ اختصارات لوحة المفاتيح:
- Ctrl/Cmd + D: تبديل الوضع الداكن
- Ctrl/Cmd + K: فتح البحث المتقدم
- Ctrl/Cmd + P: اشتراك بريميوم
- Escape: إغلاق النوافذ المنبثقة
- ↑/↓: التنقل بين الدروس في المودال

🔗 روابط التواصل:
- واتساب: https://wa.me/+201500461923
- ديسكورد: https://discord.gg/RjpyFdkG
- الموقع الشخصي: https://santadevx7.github.io/SantaDevX/

🚀 مطور بواسطة: أكاديميه ديفڪس
للمطورين: يمكنك الوصول إلى بيانات الدورات عبر coursesData
`);

// Export functions for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        coursesData, 
        openCourse, 
        playLesson, 
        closeModal, 
        toggleTheme, 
        subscribeToPremium, 
        contactSupport,
        toggleSearch,
        toggleBookmark,
        trackCourseProgress
    };
}

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                if (loadTime > 3000) {
                    console.warn('Page load time is high:', loadTime + 'ms');
                }
            }, 0);
        });
    }
}

monitorPerformance();

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Add CSS animations for notifications and celebrations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .celebration-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        animation: fadeIn 0.3s ease-out;
        backdrop-filter: blur(10px);
    }
    
    .celebration-content {
        background: var(--card-bg);
        padding: 3rem;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        margin: 0 auto;
        box-shadow: 0 25px 80px var(--shadow-lg);
        border: 1px solid var(--border-color);
    }
    
    .celebration-animation {
        font-size: 5rem;
        color: #ffd700;
        margin-bottom: 2rem;
        position: relative;
    }
    
    .celebration-animation i {
        animation: bounce 1s infinite;
    }
    
    .celebration-content h2 {
        color: var(--text-color);
        margin-bottom: 1rem;
        font-size: 2.5rem;
        font-weight: 800;
    }
    
    .celebration-content p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        font-size: 1.2rem;
        line-height: 1.6;
    }
    
    .celebration-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .premium-celebration-btn {
        background: linear-gradient(45deg, #ffd700, #ffed4e);
        color: #333;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1rem;
    }
    
    .premium-celebration-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);
    }
    
    .close-celebration-btn {
        background: var(--border-color);
        color: var(--text-color);
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
    }
    
    .close-celebration-btn:hover {
        background: var(--primary-color);
        color: white;
        transform: translateY(-2px);
    }
    
    .preview-modal, .intro-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        animation: fadeIn 0.3s ease-out;
    }
    
    .preview-content, .intro-content {
        background: var(--card-bg);
        border-radius: 20px;
        overflow: hidden;
        width: 90%;
        max-width: 800px;
        box-shadow: 0 25px 80px var(--shadow-lg);
    }
    
    .preview-header, .intro-header {
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .preview-header h3, .intro-header h3 {
        font-size: 1.5rem;
        font-weight: 700;
    }
    
    .preview-header button, .intro-header button {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .preview-header button:hover, .intro-header button:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .preview-video, .intro-video {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
    }
    
    .preview-video iframe, .intro-video iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    .preview-actions {
        padding: 2rem;
        text-align: center;
    }
    
    .start-course-btn {
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.1rem;
    }
    
    .start-course-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    }
    
    .search-result-item {
        background: var(--card-bg);
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid var(--border-color);
    }
    
    .search-result-item:hover {
        background: var(--glass-bg);
        transform: translateY(-2px);
        box-shadow: 0 10px 25px var(--shadow);
    }
    
    .result-icon {
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        flex-shrink: 0;
    }
    
    .result-content h4 {
        color: var(--text-color);
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    
    .result-content p {
        color: var(--text-secondary);
        margin-bottom: 0.8rem;
        line-height: 1.5;
    }
    
    .result-meta {
        display: flex;
        gap: 1rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    
    .result-meta span {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
    
    .no-results {
        text-align: center;
        color: var(--text-secondary);
        padding: 2rem;
        font-style: italic;
    }
`;

document.head.appendChild(additionalStyles);

