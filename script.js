// Enhanced DevX Academy JavaScript - Fixed Version
// Configuration
const CONFIG = {
    theme: {
        default: 'light',
        storageKey: 'devx-theme',
        autoDetect: true
    },
    language: {
        default: 'ar',
        storageKey: 'devx-language'
    },
    animations: {
        duration: 300,
        easing: 'ease-in-out'
    },
    api: {
        baseUrl: '/api',
        timeout: 10000
    }
};

// Global utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Course Data with Video Info
const courseData = {
    'web-development': {
        id: 'web-development',
        title: 'تطوير مواقع الويب الحديثة',
        titleEn: 'Modern Web Development',
        description: 'تعلم تطوير مواقع الويب باستخدام أحدث التقنيات والأدوات',
        descriptionEn: 'Learn modern web development using the latest technologies and tools',
        instructor: 'أحمد محمد',
        instructorEn: 'Ahmed Mohamed',
        duration: '7 ساعات',
        durationEn: '7 hours',
        lessons: 23,
        students: generateRandomNumber(150, 400),
        views: generateRandomNumber(50, 400),
        rating: 4.1,
        reviews: generateRandomNumber(20, 300),
        level: 'مبتدئ',
        levelEn: 'Beginner',
        price: 'مجاني',
        priceEn: 'Free',
        featured: true,
        progress: 0,
        videos: [
            {
                id: 1,
                title: 'مقدمة في HTML',
                titleEn: 'Introduction to HTML',
                duration: '15:30',
                url: 'https://www.youtube.com/embed/UB1O30fR-EE',
                description: 'تعلم أساسيات HTML وكيفية إنشاء صفحات الويب',
                descriptionEn: 'Learn HTML basics and how to create web pages'
            },
            {
                id: 2,
                title: 'تنسيق الصفحات بـ CSS',
                titleEn: 'Styling with CSS',
                duration: '20:45',
                url: 'https://www.youtube.com/embed/yfoY53QXEnI',
                description: 'تعلم كيفية تنسيق وتجميل صفحات الويب باستخدام CSS',
                descriptionEn: 'Learn how to style and beautify web pages using CSS'
            },
            {
                id: 3,
                title: 'التفاعل مع JavaScript',
                titleEn: 'Interactivity with JavaScript',
                duration: '25:15',
                url: 'https://www.youtube.com/embed/hdI2bqOjy3c',
                description: 'إضافة التفاعل والحركة لصفحات الويب',
                descriptionEn: 'Add interactivity and animation to web pages'
            }
        ]
    },
    'mobile-development': {
        id: 'mobile-development',
        title: 'تطوير تطبيقات الهاتف المحمول',
        titleEn: 'Mobile App Development',
        description: 'تعلم تطوير تطبيقات iOS و Android باستخدام React Native',
        descriptionEn: 'Learn iOS and Android app development using React Native',
        instructor: 'سارة أحمد',
        instructorEn: 'Sara Ahmed',
        duration: '5 ساعات',
        durationEn: '5 hours',
        lessons: 23,
        students: generateRandomNumber(150, 400),
        views: generateRandomNumber(50, 400),
        rating: 4.7,
        reviews: generateRandomNumber(20, 300),
        level: 'متوسط',
        levelEn: 'Intermediate',
        price: 'مدفوع',
        priceEn: 'Paid',
        featured: false,
        progress: 25,
        videos: [
            {
                id: 1,
                title: 'مقدمة في React Native',
                titleEn: 'Introduction to React Native',
                duration: '18:20',
                url: 'https://www.youtube.com/embed/0-S5a0eXPoc',
                description: 'تعلم أساسيات React Native لتطوير التطبيقات',
                descriptionEn: 'Learn React Native basics for app development'
            },
            {
                id: 2,
                title: 'إنشاء واجهات المستخدم',
                titleEn: 'Creating User Interfaces',
                duration: '22:10',
                url: 'https://www.youtube.com/embed/ur6I5m2nTvk',
                description: 'تصميم واجهات مستخدم جذابة للتطبيقات',
                descriptionEn: 'Design attractive user interfaces for apps'
            }
        ]
    }
};

// Enhanced Translation System
class TranslationManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage();
        this.translations = this.getTranslations();
        this.initializeTranslations();
        this.initializeLanguageToggle();
    }
    
    getStoredLanguage() {
        return localStorage.getItem(CONFIG.language.storageKey) || 
               (navigator.language.startsWith('ar') ? 'ar' : 'en');
    }
    
    getTranslations() {
        return {
            ar: {
                welcome: "مرحباً بك في أكاديمية DevX",
                home: "الرئيسية",
                courses: "الدورات",
                about: "حول",
                contact: "اتصل بنا",
                search: "البحث",
                bookmarks: "المفضلة",
                theme: "تبديل المظهر",
                language: "تبديل اللغة",
                premium: "مميز",
                support: "الدعم",
                heroTitle: "تعلم البرمجة مع أفضل المطورين",
                heroSubtitle: "انضم إلى آلاف المطورين واكتسب مهارات جديدة في البرمجة والتطوير",
                startLearning: "ابدأ التعلم",
                exploreCourses: "استكشف الدورات",
                startCourse: "ابدأ الدورة",
                watchVideo: "شاهد الفيديو",
                closeModal: "إغلاق",
                lessons: "دروس",
                videos: "فيديوهات",
                overview: "نظرة عامة",
                instructor: "المدرب",
                duration: "المدة",
                level: "المستوى",
                students: "طالب",
                views: "مشاهدة",
                rating: "تقييم"
            },
            en: {
                welcome: "Welcome to DevX Academy",
                home: "Home",
                courses: "Courses",
                about: "About",
                contact: "Contact",
                search: "Search",
                bookmarks: "Bookmarks",
                theme: "Toggle Theme",
                language: "Toggle Language",
                premium: "Premium",
                support: "Support",
                heroTitle: "Learn Programming with the Best Developers",
                heroSubtitle: "Join thousands of developers and gain new skills in programming and development",
                startLearning: "Start Learning",
                exploreCourses: "Explore Courses",
                startCourse: "Start Course",
                watchVideo: "Watch Video",
                closeModal: "Close",
                lessons: "Lessons",
                videos: "Videos",
                overview: "Overview",
                instructor: "Instructor",
                duration: "Duration",
                level: "Level",
                students: "Students",
                views: "Views",
                rating: "Rating"
            }
        };
    }
    
    initializeTranslations() {
        this.updatePageLanguage();
        this.updateAllTranslations();
        this.updateDirection();
    }
    
    translate(key) {
        return this.translations[this.currentLanguage]?.[key] || 
               this.translations['ar']?.[key] || 
               key;
    }
    
    setLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem(CONFIG.language.storageKey, language);
        this.updatePageLanguage();
        this.updateAllTranslations();
        this.updateDirection();
        this.dispatchLanguageChange();
    }
    
    updatePageLanguage() {
        document.documentElement.lang = this.currentLanguage;
        document.body.className = document.body.className.replace(/lang-\w+/, '');
        document.body.classList.add(`lang-${this.currentLanguage}`);
    }
    
    updateDirection() {
        document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }
    
    updateAllTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
    }
    
    initializeLanguageToggle() {
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                const newLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
                this.setLanguage(newLanguage);
                this.updateLanguageToggleIcon();
            });
        }
    }
    
    updateLanguageToggleIcon() {
        const languageToggle = document.querySelector('.language-toggle i');
        if (languageToggle) {
            languageToggle.className = this.currentLanguage === 'ar' ? 'fas fa-globe' : 'fas fa-language';
        }
    }
    
    dispatchLanguageChange() {
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }
}

// Enhanced Theme Manager
class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme();
        this.initializeTheme();
        this.initializeThemeToggle();
        this.watchSystemTheme();
    }
    
    getStoredTheme() {
        const stored = localStorage.getItem(CONFIG.theme.storageKey);
        if (stored) return stored;
        
        if (CONFIG.theme.autoDetect && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        return CONFIG.theme.default;
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem(CONFIG.theme.storageKey, theme);
        this.applyTheme();
        this.updateThemeToggleIcon();
        this.dispatchThemeChange();
    }
    
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        document.body.className = document.body.className.replace(/theme-\w+/, '');
        document.body.classList.add(`theme-${this.currentTheme}`);
    }
    
    initializeTheme() {
        this.applyTheme();
        this.updateThemeToggleIcon();
    }
    
    initializeThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        }
    }
    
    updateThemeToggleIcon() {
        const themeToggle = document.querySelector('.theme-toggle i');
        if (themeToggle) {
            themeToggle.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    watchSystemTheme() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addListener((e) => {
                if (CONFIG.theme.autoDetect && !localStorage.getItem(CONFIG.theme.storageKey)) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
    
    dispatchThemeChange() {
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: this.currentTheme }
        }));
    }
}

// Course Modal Manager
class CourseModalManager {
    constructor() {
        this.currentCourse = null;
        this.currentVideo = null;
        this.modal = null;
        this.createModal();
        this.initializeEventListeners();
    }
    
    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'course-modal';
        this.modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title"></h2>
                    <button class="modal-close" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-tabs">
                        <button class="tab-btn active" data-tab="overview">نظرة عامة</button>
                        <button class="tab-btn" data-tab="videos">الفيديوهات</button>
                        <button class="tab-btn" data-tab="lessons">الدروس</button>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane active" id="overview">
                            <div class="course-info">
                                <div class="course-meta">
                                    <span class="instructor"></span>
                                    <span class="duration"></span>
                                    <span class="level"></span>
                                </div>
                                <p class="course-description"></p>
                            </div>
                        </div>
                        <div class="tab-pane" id="videos">
                            <div class="video-player">
                                <iframe src="" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div class="video-list"></div>
                        </div>
                        <div class="tab-pane" id="lessons">
                            <div class="lessons-list">
                                <p>قائمة الدروس ستكون متاحة قريباً</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary start-course">ابدأ الدورة</button>
                    <button class="btn btn-secondary bookmark-course">إضافة للمفضلة</button>
                </div>
            </div>
        `;
        document.body.appendChild(this.modal);
    }
    
    initializeEventListeners() {
        // Close modal
        this.modal.querySelector('.modal-close').addEventListener('click', () => {
            this.closeModal();
        });
        
        this.modal.querySelector('.modal-overlay').addEventListener('click', () => {
            this.closeModal();
        });
        
        // Tab switching
        this.modal.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openCourse(courseId) {
        const course = courseData[courseId];
        if (!course) return;
        
        this.currentCourse = course;
        this.populateModal(course);
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    populateModal(course) {
        // Set title
        this.modal.querySelector('.modal-title').textContent = course.title;
        
        // Set course info
        this.modal.querySelector('.instructor').textContent = `المدرب: ${course.instructor}`;
        this.modal.querySelector('.duration').textContent = `المدة: ${course.duration}`;
        this.modal.querySelector('.level').textContent = `المستوى: ${course.level}`;
        this.modal.querySelector('.course-description').textContent = course.description;
        
        // Populate videos
        this.populateVideos(course.videos);
    }
    
    populateVideos(videos) {
        const videoList = this.modal.querySelector('.video-list');
        videoList.innerHTML = '';
        
        videos.forEach((video, index) => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `
                <div class="video-thumbnail">
                    <i class="fas fa-play"></i>
                </div>
                <div class="video-info">
                    <h4>${video.title}</h4>
                    <p>${video.description}</p>
                    <span class="video-duration">${video.duration}</span>
                </div>
            `;
            
            videoItem.addEventListener('click', () => {
                this.playVideo(video);
            });
            
            videoList.appendChild(videoItem);
        });
        
        // Play first video by default
        if (videos.length > 0) {
            this.playVideo(videos[0]);
        }
    }
    
    playVideo(video) {
        const iframe = this.modal.querySelector('iframe');
        iframe.src = video.url;
        this.currentVideo = video;
        
        // Update active video in list
        this.modal.querySelectorAll('.video-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const videoItems = this.modal.querySelectorAll('.video-item');
        const currentIndex = this.currentCourse.videos.findIndex(v => v.id === video.id);
        if (videoItems[currentIndex]) {
            videoItems[currentIndex].classList.add('active');
        }
    }
    
    switchTab(tabName) {
        // Update tab buttons
        this.modal.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.modal.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Update tab content
        this.modal.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        this.modal.querySelector(`#${tabName}`).classList.add('active');
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Stop video
        const iframe = this.modal.querySelector('iframe');
        iframe.src = '';
        this.currentVideo = null;
    }
}

// Enhanced DevX Academy Main Class
class DevXAcademy {
    constructor() {
        this.translationManager = new TranslationManager();
        this.themeManager = new ThemeManager();
        this.courseModalManager = new CourseModalManager();
        this.initializeApp();
    }
    
    initializeApp() {
        this.initializeNavigation();
        this.initializeCourseCards();
        this.initializeAnimations();
        this.initializeScrollEffects();
        this.initializeSearch();
        this.initializeChat();
        this.updateStats();
    }
    
    initializeNavigation() {
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
    }
    
    initializeCourseCards() {
        document.querySelectorAll('.course-card').forEach(card => {
            const courseId = card.dataset.courseId;
            
            // Add click event to open modal
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.course-actions')) {
                    this.courseModalManager.openCourse(courseId);
                }
            });
            
            // Add hover effects
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
    
    initializeAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
    
    initializeScrollEffects() {
        let lastScrollTop = 0;
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Header hide/show on scroll
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header?.classList.add('header-hidden');
            } else {
                header?.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
            
            // Parallax effect for hero section
            const hero = document.querySelector('.hero');
            if (hero && scrollTop < hero.offsetHeight) {
                hero.style.transform = `translateY(${scrollTop * 0.5}px)`;
            }
        });
    }
    
    initializeSearch() {
        const searchBtn = document.querySelector('.search-btn');
        const searchModal = document.querySelector('.search-modal');
        
        if (searchBtn && searchModal) {
            searchBtn.addEventListener('click', () => {
                searchModal.classList.add('active');
                searchModal.querySelector('input')?.focus();
            });
        }
    }
    
    initializeChat() {
        const chatBtn = document.querySelector('.chat-btn');
        const chatModal = document.querySelector('.chat-modal');
        
        if (chatBtn && chatModal) {
            chatBtn.addEventListener('click', () => {
                chatModal.classList.toggle('active');
            });
        }
    }
    
    updateStats() {
        // Animate counters
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target) || 0;
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current).toLocaleString();
            }, 16);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.devxAcademy = new DevXAcademy();
    
    // Update course stats with random numbers
    document.querySelectorAll('.course-card').forEach(card => {
        const viewsElement = card.querySelector('.course-views');
        const ratingsElement = card.querySelector('.course-ratings');
        
        if (viewsElement) {
            const views = generateRandomNumber(50, 400);
            viewsElement.textContent = `${views} مشاهدة`;
        }
        
        if (ratingsElement) {
            const ratings = generateRandomNumber(20, 300);
            ratingsElement.textContent = `(${ratings} تقييم)`;
        }
    });
});

// Enhanced Console Welcome Message
console.log(`
%c🚀 DevX Academy %c
%cWelcome to DevX Academy!
Built with ❤️ using modern web technologies.
%cFeatures:
• Advanced course modal system
• Multi-language support (Arabic/English)
• Dark/Light theme switching
• Responsive design
• Interactive animations
• Video player integration

%cHappy Learning! 🎓
`, 
'color: #6366f1; font-size: 20px; font-weight: bold;',
'',
'color: #10b981; font-size: 14px;',
'color: #8b5cf6; font-size: 12px;',
'color: #f59e0b; font-size: 12px;'
);

