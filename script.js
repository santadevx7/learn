// Enhanced DevX Academy JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Global variables
let currentCourse = null;
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLanguage = localStorage.getItem('language') || 'ar';
let bookmarkedCourses = JSON.parse(localStorage.getItem('bookmarkedCourses')) || [];
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {};
let isVoiceSearchActive = false;

// Initialize website
function initializeWebsite() {
    // Initialize theme
    applyTheme(currentTheme);
    
    // Initialize particles
    initializeParticles();
    
    // Initialize custom cursor
    initializeCustomCursor();
    
    // Initialize loading screen
    initializeLoadingScreen();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize course filters
    initializeCourseFilters();
    
    // Initialize modal tabs
    initializeModalTabs();
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize statistics animation
    initializeStatsAnimation();
    
    // Initialize roadmap interactions
    initializeRoadmap();
    
    // Initialize chat functionality
    initializeChat();
    
    // Initialize notifications
    initializeNotifications();
    
    // Update online users count
    updateOnlineUsers();
    
    // Initialize course progress
    initializeCourseProgress();
    
    // Initialize keyboard shortcuts
    initializeKeyboardShortcuts();
    
    // Initialize intersection observer for animations
    initializeIntersectionObserver();
    
    console.log('🚀 DevX Academy initialized successfully!');
}

// Particles initialization
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: currentTheme === 'dark' ? '#8b9dc3' : '#667eea' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: currentTheme === 'dark' ? '#8b9dc3' : '#667eea',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
        });
    }
}

// Custom cursor
function initializeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursor || window.innerWidth <= 768) return;
    
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    
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
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .course-card, .nav-link');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Loading screen
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
}

// Smooth scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight + 
                                  document.querySelector('.top-bar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(link);
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Course filters
function initializeCourseFilters() {
    const filterButtons = document.querySelectorAll('.course-filters .filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter courses
            courseCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
            
            showNotification('تم تطبيق الفلتر بنجاح', 'success');
        });
    });
}

// Modal functionality
function initializeModalTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show target tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab + '-tab') {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('advanced-search');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
}

function performSearch() {
    const query = document.getElementById('advanced-search').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }
    
    const courses = [
        { name: 'HTML', description: 'تعلم أساسيات بناء صفحات الويب', category: 'web', level: 'beginner' },
        { name: 'CSS', description: 'تعلم تصميم وتنسيق صفحات الويب', category: 'web', level: 'beginner' },
        { name: 'JavaScript', description: 'تعلم البرمجة التفاعلية', category: 'web', level: 'intermediate' },
        { name: 'Python', description: 'تعلم البرمجة بـ Python', category: 'data', level: 'beginner' },
        { name: 'React', description: 'تعلم بناء واجهات المستخدم', category: 'web', level: 'advanced' },
        { name: 'Flutter', description: 'تطوير تطبيقات الجوال', category: 'mobile', level: 'intermediate' },
        { name: 'Java', description: 'تعلم البرمجة الكائنية', category: 'backend', level: 'intermediate' },
        { name: 'C++', description: 'تعلم البرمجة عالية الأداء', category: 'backend', level: 'advanced' },
        { name: 'PHP', description: 'تطوير مواقع الويب الديناميكية', category: 'web', level: 'intermediate' },
        { name: 'Swift', description: 'تطوير تطبيقات iOS', category: 'mobile', level: 'intermediate' },
        { name: 'Node.js', description: 'تطوير خوادم الويب', category: 'backend', level: 'intermediate' }
    ];
    
    const filteredCourses = courses.filter(course => 
        course.name.toLowerCase().includes(query) || 
        course.description.includes(query)
    );
    
    displaySearchResults(filteredCourses);
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">لم يتم العثور على نتائج</p>';
        return;
    }
    
    const resultsHTML = results.map(course => `
        <div class="search-result-item" onclick="openCourse('${course.name.toLowerCase()}')">
            <div class="result-info">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <div class="result-meta">
                    <span class="result-category">${getCategoryName(course.category)}</span>
                    <span class="result-level">${getLevelName(course.level)}</span>
                </div>
            </div>
            <div class="result-action">
                <i class="fas fa-arrow-left"></i>
            </div>
        </div>
    `).join('');
    
    searchResults.innerHTML = resultsHTML;
}

function getCategoryName(category) {
    const categories = {
        'web': 'تطوير الويب',
        'mobile': 'تطبيقات الجوال',
        'data': 'علوم البيانات',
        'backend': 'تطوير الخادم'
    };
    return categories[category] || category;
}

function getLevelName(level) {
    const levels = {
        'beginner': 'مبتدئ',
        'intermediate': 'متوسط',
        'advanced': 'متقدم'
    };
    return levels[level] || level;
}

// Statistics animation
function initializeStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const current = parseInt(stat.textContent) || 0;
            const increment = target / 100;
            
            if (current < target) {
                stat.textContent = Math.ceil(current + increment);
                setTimeout(animateStats, 20);
            } else {
                stat.textContent = target;
            }
        });
    };
    
    // Trigger animation when stats section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Roadmap interactions
function initializeRoadmap() {
    const roadmapSteps = document.querySelectorAll('.roadmap-step');
    
    roadmapSteps.forEach(step => {
        step.addEventListener('click', () => {
            const stepNumber = step.getAttribute('data-step');
            showStepDetails(stepNumber);
        });
    });
}

function showStepDetails(stepNumber) {
    const stepInfo = {
        '1': {
            title: 'أساسيات الويب',
            description: 'تعلم HTML و CSS لبناء صفحات الويب الأساسية',
            lessons: ['مقدمة في HTML', 'العناصر والخصائص', 'أساسيات CSS', 'التخطيط والتصميم'],
            duration: '4-6 ساعات'
        },
        '2': {
            title: 'البرمجة التفاعلية',
            description: 'تعلم JavaScript لإضافة التفاعل لصفحات الويب',
            lessons: ['متغيرات ووظائف', 'التحكم في DOM', 'الأحداث', 'AJAX والـ APIs'],
            duration: '8-12 ساعة'
        },
        '3': {
            title: 'تطوير التطبيقات',
            description: 'تعلم React و Node.js لبناء تطبيقات كاملة',
            lessons: ['مكونات React', 'إدارة الحالة', 'خادم Node.js', 'قواعد البيانات'],
            duration: '15-20 ساعة'
        },
        '4': {
            title: 'قواعد البيانات',
            description: 'تعلم SQL و NoSQL لإدارة البيانات',
            lessons: ['أساسيات SQL', 'تصميم قواعد البيانات', 'MongoDB', 'تحسين الأداء'],
            duration: '10-15 ساعة'
        },
        '5': {
            title: 'النشر والاستضافة',
            description: 'تعلم نشر التطبيقات على الخوادم السحابية',
            lessons: ['Git و GitHub', 'خوادم Linux', 'Docker', 'خدمات AWS'],
            duration: '8-12 ساعة'
        }
    };
    
    const info = stepInfo[stepNumber];
    if (info) {
        showNotification(`الخطوة ${stepNumber}: ${info.title} - ${info.duration}`, 'info');
    }
}

// Chat functionality
function initializeChat() {
    const chatInput = document.getElementById('chat-input');
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    const userMessage = createMessageElement(message, 'user');
    chatMessages.appendChild(userMessage);
    
    // Clear input
    chatInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        const botMessage = createMessageElement(botResponse, 'bot');
        chatMessages.appendChild(botMessage);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function createMessageElement(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = type === 'user' ? 'أ' : '<i class="fas fa-robot"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    return messageDiv;
}

function generateBotResponse(userMessage) {
    const responses = {
        'مرحبا': 'مرحباً بك في أكاديميه ديفكس! كيف يمكنني مساعدتك اليوم؟',
        'دورات': 'لدينا دورات متنوعة في HTML, CSS, JavaScript, Python, React, Flutter, Java, C++, PHP, Swift, و Node.js. أي دورة تهمك؟',
        'مساعدة': 'يمكنني مساعدتك في اختيار الدورة المناسبة، الإجابة على أسئلتك، أو توجيهك للموارد المناسبة.',
        'سعر': 'نقدم دورات مجانية ومدفوعة. يمكنك الاشتراك في البريميوم للحصول على محتوى إضافي وشهادات معتمدة.',
        'شهادة': 'نعم، نقدم شهادات معتمدة عند إكمال الدورات بنجاح. تحتاج للاشتراك في البريميوم للحصول على الشهادات.'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return 'شكراً لك على رسالتك. فريق الدعم سيتواصل معك قريباً. يمكنك أيضاً التواصل مباشرة عبر واتساب: +201500461923';
}

// Notifications system
function initializeNotifications() {
    // Create notifications container if it doesn't exist
    if (!document.querySelector('.notifications-container')) {
        const container = document.createElement('div');
        container.className = 'notifications-container';
        document.body.appendChild(container);
    }
}

function showNotification(message, type = 'info', duration = 5000) {
    const container = document.querySelector('.notifications-container') || document.body;
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icons[type]}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="closeNotification(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.4s ease-in';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 400);
        }
    }, duration);
}

function closeNotification(button) {
    const notification = button.closest('.notification');
    if (notification) {
        notification.style.animation = 'slideOutRight 0.4s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }
}

// Course progress management
function initializeCourseProgress() {
    updateCourseProgressDisplay();
}

function updateCourseProgressDisplay() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const language = card.getAttribute('data-language');
        const progress = userProgress[language] || 0;
        
        const progressBar = card.querySelector('.progress-fill');
        const progressText = card.querySelector('.progress-text');
        
        if (progressBar && progressText) {
            progressBar.style.width = progress + '%';
            progressText.textContent = progress + '% مكتمل';
            
            // Update button text based on progress
            const button = card.querySelector('.course-button span');
            if (button) {
                if (progress > 0) {
                    button.textContent = 'متابعة التعلم';
                } else {
                    button.textContent = 'ابدأ الدورة';
                }
            }
        }
    });
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleSearch();
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            closeModal();
            if (document.getElementById('search-overlay').classList.contains('active')) {
                toggleSearch();
            }
            if (document.getElementById('chat-widget').classList.contains('active')) {
                toggleChat();
            }
        }
        
        // Ctrl/Cmd + D for dark mode toggle
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

// Intersection Observer for animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.course-card, .feature, .stat, .roadmap-step');
    animatedElements.forEach(el => observer.observe(el));
}

// Update online users count
function updateOnlineUsers() {
    const onlineUsersElement = document.getElementById('online-users');
    if (onlineUsersElement) {
        // Simulate real-time user count
        setInterval(() => {
            const baseCount = 1200;
            const variation = Math.floor(Math.random() * 100);
            onlineUsersElement.textContent = (baseCount + variation).toLocaleString();
        }, 30000); // Update every 30 seconds
    }
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Main functions for user interactions

// Theme toggle
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // Update particles color
    if (typeof particlesJS !== 'undefined') {
        initializeParticles();
    }
    
    showNotification(`تم التبديل إلى الوضع ${currentTheme === 'dark' ? 'الداكن' : 'الفاتح'}`, 'success');
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme toggle icon
    const themeToggle = document.querySelector('.top-theme-toggle i');
    if (themeToggle) {
        themeToggle.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Language toggle
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLanguage);
    
    // Here you would implement language switching logic
    showNotification('Language switching feature coming soon!', 'info');
}

// Search toggle
function toggleSearch() {
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('advanced-search');
    
    if (searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
    } else {
        searchOverlay.classList.add('active');
        setTimeout(() => {
            if (searchInput) searchInput.focus();
        }, 100);
    }
}

// Voice search
function startVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showNotification('البحث الصوتي غير مدعوم في هذا المتصفح', 'error');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'ar-SA';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    const voiceButton = document.querySelector('.voice-search');
    const searchInput = document.getElementById('advanced-search');
    
    recognition.onstart = () => {
        isVoiceSearchActive = true;
        voiceButton.innerHTML = '<i class="fas fa-stop"></i>';
        voiceButton.style.background = '#ef4444';
        showNotification('استمع... تحدث الآن', 'info');
    };
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        performSearch();
        showNotification(`تم البحث عن: ${transcript}`, 'success');
    };
    
    recognition.onerror = (event) => {
        showNotification('حدث خطأ في البحث الصوتي', 'error');
    };
    
    recognition.onend = () => {
        isVoiceSearchActive = false;
        voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceButton.style.background = '';
    };
    
    if (isVoiceSearchActive) {
        recognition.stop();
    } else {
        recognition.start();
    }
}

// Bookmark toggle
function toggleBookmarks() {
    showNotification('عرض المفضلة قريباً!', 'info');
}

// Course functions
function openCourse(language) {
    currentCourse = language;
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    
    // Course data
    const courseData = {
        html: {
            title: 'دورة HTML',
            students: '2,100',
            rating: '4.9',
            objectives: [
                'فهم أساسيات HTML وهيكل الصفحات',
                'إنشاء صفحات ويب تفاعلية',
                'استخدام العناصر والخصائص المختلفة',
                'تطبيق أفضل الممارسات في كتابة الكود'
            ],
            requirements: [
                'لا توجد متطلبات مسبقة',
                'جهاز كمبيوتر مع متصفح حديث',
                'محرر نصوص (يُفضل VS Code)',
                'الرغبة في التعلم والممارسة'
            ],
            lessons: [
                { title: 'مقدمة في HTML', duration: '15 دقيقة', completed: true },
                { title: 'العناصر الأساسية', duration: '25 دقيقة', completed: true },
                { title: 'النماذج والجداول', duration: '30 دقيقة', completed: false },
                { title: 'الوسائط المتعددة', duration: '20 دقيقة', completed: false },
                { title: 'مشروع عملي', duration: '45 دقيقة', completed: false }
            ]
        },
        css: {
            title: 'دورة CSS',
            students: '1,850',
            rating: '4.8',
            objectives: [
                'تعلم أساسيات CSS والتصميم',
                'إنشاء تخطيطات متجاوبة',
                'استخدام Flexbox و Grid',
                'تطبيق الرسوم المتحركة والتأثيرات'
            ],
            requirements: [
                'معرفة أساسية بـ HTML',
                'جهاز كمبيوتر مع متصفح حديث',
                'محرر نصوص متقدم',
                'الصبر والممارسة المستمرة'
            ],
            lessons: [
                { title: 'أساسيات CSS', duration: '20 دقيقة', completed: false },
                { title: 'الألوان والخطوط', duration: '25 دقيقة', completed: false },
                { title: 'التخطيط والتموضع', duration: '35 دقيقة', completed: false },
                { title: 'التصميم المتجاوب', duration: '40 دقيقة', completed: false },
                { title: 'الرسوم المتحركة', duration: '30 دقيقة', completed: false }
            ]
        },
        javascript: {
            title: 'دورة JavaScript',
            students: '25,300',
            rating: '4.9',
            objectives: [
                'إتقان أساسيات JavaScript',
                'التعامل مع DOM والأحداث',
                'استخدام APIs والـ AJAX',
                'بناء تطبيقات تفاعلية'
            ],
            requirements: [
                'معرفة جيدة بـ HTML و CSS',
                'فهم أساسيات البرمجة',
                'بيئة تطوير متكاملة',
                'الاستعداد للتحدي'
            ],
            lessons: [
                { title: 'أساسيات JavaScript', duration: '30 دقيقة', completed: true },
                { title: 'المتغيرات والوظائف', duration: '35 دقيقة', completed: true },
                { title: 'التحكم في DOM', duration: '40 دقيقة', completed: true },
                { title: 'الأحداث والتفاعل', duration: '45 دقيقة', completed: false },
                { title: 'AJAX والـ APIs', duration: '50 دقيقة', completed: false },
                { title: 'مشروع متقدم', duration: '60 دقيقة', completed: false }
            ]
        }
    };
    
    const course = courseData[language] || courseData.html;
    
    // Update modal content
    modalTitle.textContent = course.title;
    document.getElementById('modalStudents').textContent = course.students;
    document.getElementById('modalRating').textContent = course.rating;
    
    // Update objectives
    const objectivesList = document.getElementById('courseObjectives');
    objectivesList.innerHTML = course.objectives.map(obj => `<li>${obj}</li>`).join('');
    
    // Update requirements
    const requirementsList = document.getElementById('courseRequirements');
    requirementsList.innerHTML = course.requirements.map(req => `<li>${req}</li>`).join('');
    
    // Update lessons
    const lessonsList = document.getElementById('lessonsList');
    const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
    
    document.getElementById('lessonsCompleted').textContent = completedLessons;
    document.getElementById('totalLessons').textContent = course.lessons.length;
    
    lessonsList.innerHTML = course.lessons.map((lesson, index) => `
        <div class="lesson-item ${lesson.completed ? 'completed' : ''}" onclick="playLesson(${index})">
            <div class="lesson-info">
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-duration">${lesson.duration}</div>
            </div>
            <button class="play-button">
                <i class="fas fa-${lesson.completed ? 'check' : 'play'}"></i>
            </button>
        </div>
    `).join('');
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    showNotification(`تم فتح ${course.title}`, 'success');
}

function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentCourse = null;
}

function previewCourse(language) {
    showNotification(`معاينة دورة ${language.toUpperCase()}`, 'info');
    // Here you would implement course preview functionality
}

function playLesson(lessonIndex) {
    showNotification(`تشغيل الدرس ${lessonIndex + 1}`, 'info');
    // Here you would implement lesson playback functionality
}

function toggleBookmark(courseId) {
    const index = bookmarkedCourses.indexOf(courseId);
    
    if (index > -1) {
        bookmarkedCourses.splice(index, 1);
        showNotification('تم إزالة الدورة من المفضلة', 'info');
    } else {
        bookmarkedCourses.push(courseId);
        showNotification('تم إضافة الدورة للمفضلة', 'success');
    }
    
    localStorage.setItem('bookmarkedCourses', JSON.stringify(bookmarkedCourses));
    updateBookmarkButtons();
}

function updateBookmarkButtons() {
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    
    bookmarkButtons.forEach(button => {
        const courseCard = button.closest('.course-card');
        const courseId = courseCard.getAttribute('data-language');
        
        if (bookmarkedCourses.includes(courseId)) {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-bookmark"></i>';
        } else {
            button.classList.remove('active');
            button.innerHTML = '<i class="far fa-bookmark"></i>';
        }
    });
    
    // Update bookmark count
    const bookmarkCount = document.querySelector('.bookmark-count');
    if (bookmarkCount) {
        bookmarkCount.textContent = bookmarkedCourses.length;
    }
}

function shareCourse(courseId) {
    if (navigator.share) {
        navigator.share({
            title: `دورة ${courseId.toUpperCase()} - أكاديميه ديفكس`,
            text: 'تعلم البرمجة مع أكاديميه ديفكس',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('تم نسخ رابط الدورة', 'success');
        });
    }
}

// Premium subscription
function subscribeToPremium() {
    showNotification('سيتم توجيهك لصفحة الاشتراك قريباً!', 'info');
    // Here you would implement premium subscription logic
}

// Support functions
function contactSupport() {
    const whatsappUrl = 'https://wa.me/+201500461923?text=أحتاج مساعدة في أكاديميه ديفكس';
    window.open(whatsappUrl, '_blank');
}

function playIntroVideo() {
    showNotification('سيتم تشغيل الفيديو التعريفي قريباً!', 'info');
    // Here you would implement video playback
}

// Chat toggle
function toggleChat() {
    const chatWidget = document.getElementById('chat-widget');
    chatWidget.classList.toggle('active');
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Load more courses
function loadMoreCourses() {
    showNotification('تحميل المزيد من الدورات...', 'info');
    
    // Simulate loading delay
    setTimeout(() => {
        showNotification('تم تحميل جميع الدورات المتاحة', 'success');
    }, 2000);
}

// Window scroll event for header effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const topBar = document.querySelector('.top-bar');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        topBar.style.transform = 'translateY(-100%)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        topBar.style.transform = 'translateY(0)';
    }
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('courseModal');
    const searchOverlay = document.getElementById('search-overlay');
    
    if (e.target === modal) {
        closeModal();
    }
    
    if (e.target === searchOverlay) {
        toggleSearch();
    }
});

// Initialize bookmark buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    updateBookmarkButtons();
});

// Console welcome message
console.log(`
🚀 مرحباً بك في أكاديميه ديفكس!
📚 منصة تعليمية متقدمة لتعلم البرمجة
💻 تم تطوير هذا الموقع بواسطة فريق DevX
🌟 نسخة محسنة مع ميزات متقدمة

للدعم الفني: +201500461923
الموقع الشخصي: https://santadevx7.github.io/SantaDevX/
ديسكورد: https://discord.gg/RjpyFdkG
`);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`⚡ تم تحميل الموقع في ${loadTime}ms`);
    });
}

// Service Worker registration for PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered successfully');
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed');
            });
    });
}

