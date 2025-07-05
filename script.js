// Enhanced DevX Academy JavaScript - Professional & Advanced Features

// Enhanced Global Configuration
const CONFIG = {
    // Animation settings
    animations: {
        enabled: true,
        duration: 300,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    
    // Theme settings
    theme: {
        default: 'light',
        storageKey: 'devx-theme',
        autoDetect: true
    },
    
    // Language settings
    language: {
        default: 'ar',
        storageKey: 'devx-language',
        autoDetect: true
    },
    
    // Performance settings
    performance: {
        debounceDelay: 300,
        throttleDelay: 100,
        lazyLoadOffset: 100
    },
    
    // Video stats limits (as requested)
    videoStats: {
        maxViews: 400,
        maxRatings: 300,
        minViews: 50,
        minRatings: 20
    },
    
    // API endpoints
    api: {
        baseUrl: '/api',
        timeout: 10000
    }
};

// Enhanced Translation System
class TranslationManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage();
        this.translations = {};
        this.loadTranslations();
        this.initializeLanguageToggle();
    }
    
    getStoredLanguage() {
        return localStorage.getItem(CONFIG.language.storageKey) || 
               (navigator.language.startsWith('ar') ? 'ar' : 'en');
    }
    
    async loadTranslations() {
        try {
            // Load translations from external file
            const response = await fetch('./translations.js');
            const translationsModule = await response.text();
            eval(translationsModule);
            this.translations = window.translations || {};
        } catch (error) {
            console.warn('Failed to load translations:', error);
            this.translations = this.getFallbackTranslations();
        }
    }
    
    getFallbackTranslations() {
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
                onlineStudents: "طالب متصل",
                activeCourses: "دورة نشطة",
                expertInstructors: "مدرب خبير",
                completionRate: "معدل الإنجاز",
                learningPath: "مسار التعلم",
                pathDescription: "خطة شاملة لتطوير مهاراتك البرمجية من المبتدئ إلى المحترف",
                allCourses: "جميع الدورات",
                webDevelopment: "تطوير الويب",
                mobileDevelopment: "تطوير التطبيقات",
                dataScience: "علم البيانات",
                aiMachineLearning: "الذكاء الاصطناعي",
                loadMore: "تحميل المزيد",
                aboutTitle: "لماذا تختار أكاديمية DevX؟",
                aboutDescription: "نحن نقدم تعليماً عالي الجودة في مجال البرمجة والتطوير مع مدربين خبراء ومناهج حديثة تواكب أحدث التقنيات في السوق.",
                interactiveLearning: "تعلم تفاعلي",
                expertSupport: "دعم الخبراء",
                flexibleSchedule: "جدول مرن",
                industryProjects: "مشاريع حقيقية",
                students: "طالب",
                courses_count: "دورة",
                instructors: "مدرب",
                satisfaction: "رضا الطلاب",
                quickLinks: "روابط سريعة",
                followUs: "تابعنا",
                newsletter: "النشرة الإخبارية",
                subscribeNewsletter: "اشترك في نشرتنا الإخبارية",
                subscribe: "اشتراك",
                copyright: "جميع الحقوق محفوظة",
                privacyPolicy: "سياسة الخصوصية",
                termsOfService: "شروط الخدمة",
                views: "مشاهدة",
                ratings: "تقييم",
                hours: "ساعة",
                lessons: "درس",
                students_enrolled: "طالب مسجل",
                rating: "التقييم",
                enroll: "التسجيل",
                preview: "معاينة",
                bookmark: "إضافة للمفضلة",
                share: "مشاركة",
                close: "إغلاق",
                overview: "نظرة عامة",
                curriculum: "المنهج",
                instructor: "المدرب",
                reviews: "التقييمات",
                playVideo: "تشغيل الفيديو",
                completed: "مكتمل",
                inProgress: "قيد التقدم",
                notStarted: "لم يبدأ",
                searchPlaceholder: "ابحث عن الدورات...",
                voiceSearch: "البحث الصوتي",
                filterBy: "تصفية حسب",
                level: "المستوى",
                duration: "المدة",
                price: "السعر",
                beginner: "مبتدئ",
                intermediate: "متوسط",
                advanced: "متقدم",
                free: "مجاني",
                paid: "مدفوع",
                shortCourse: "دورة قصيرة",
                mediumCourse: "دورة متوسطة",
                longCourse: "دورة طويلة",
                chatWithUs: "تحدث معنا",
                sendMessage: "إرسال رسالة",
                typingMessage: "اكتب رسالتك...",
                backToTop: "العودة للأعلى",
                scrollToTop: "انتقل للأعلى",
                darkMode: "الوضع المظلم",
                lightMode: "الوضع الفاتح",
                english: "English",
                arabic: "العربية"
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
                onlineStudents: "Online Students",
                activeCourses: "Active Courses",
                expertInstructors: "Expert Instructors",
                completionRate: "Completion Rate",
                learningPath: "Learning Path",
                pathDescription: "A comprehensive plan to develop your programming skills from beginner to professional",
                allCourses: "All Courses",
                webDevelopment: "Web Development",
                mobileDevelopment: "Mobile Development",
                dataScience: "Data Science",
                aiMachineLearning: "AI & Machine Learning",
                loadMore: "Load More",
                aboutTitle: "Why Choose DevX Academy?",
                aboutDescription: "We provide high-quality education in programming and development with expert instructors and modern curricula that keep up with the latest technologies in the market.",
                interactiveLearning: "Interactive Learning",
                expertSupport: "Expert Support",
                flexibleSchedule: "Flexible Schedule",
                industryProjects: "Real Projects",
                students: "Students",
                courses_count: "Courses",
                instructors: "Instructors",
                satisfaction: "Student Satisfaction",
                quickLinks: "Quick Links",
                followUs: "Follow Us",
                newsletter: "Newsletter",
                subscribeNewsletter: "Subscribe to our newsletter",
                subscribe: "Subscribe",
                copyright: "All rights reserved",
                privacyPolicy: "Privacy Policy",
                termsOfService: "Terms of Service",
                views: "Views",
                ratings: "Ratings",
                hours: "Hours",
                lessons: "Lessons",
                students_enrolled: "Students Enrolled",
                rating: "Rating",
                enroll: "Enroll",
                preview: "Preview",
                bookmark: "Bookmark",
                share: "Share",
                close: "Close",
                overview: "Overview",
                curriculum: "Curriculum",
                instructor: "Instructor",
                reviews: "Reviews",
                playVideo: "Play Video",
                completed: "Completed",
                inProgress: "In Progress",
                notStarted: "Not Started",
                searchPlaceholder: "Search for courses...",
                voiceSearch: "Voice Search",
                filterBy: "Filter By",
                level: "Level",
                duration: "Duration",
                price: "Price",
                beginner: "Beginner",
                intermediate: "Intermediate",
                advanced: "Advanced",
                free: "Free",
                paid: "Paid",
                shortCourse: "Short Course",
                mediumCourse: "Medium Course",
                longCourse: "Long Course",
                chatWithUs: "Chat with Us",
                sendMessage: "Send Message",
                typingMessage: "Type your message...",
                backToTop: "Back to Top",
                scrollToTop: "Scroll to Top",
                darkMode: "Dark Mode",
                lightMode: "Light Mode",
                english: "English",
                arabic: "العربية"
            }
        };
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
        const themeToggle = document.querySelector('.top-theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        }
    }
    
    updateThemeToggleIcon() {
        const themeToggle = document.querySelector('.top-theme-toggle i');
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

// Enhanced Video Stats Generator (with requested limits)
class VideoStatsGenerator {
    constructor() {
        this.usedStats = new Set();
    }
    
    generateUniqueStats() {
        let stats;
        let attempts = 0;
        const maxAttempts = 100;
        
        do {
            stats = this.generateStats();
            attempts++;
        } while (this.usedStats.has(this.statsToString(stats)) && attempts < maxAttempts);
        
        this.usedStats.add(this.statsToString(stats));
        return stats;
    }
    
    generateStats() {
        const { maxViews, maxRatings, minViews, minRatings } = CONFIG.videoStats;
        
        // Generate views between minViews and maxViews
        const views = Math.floor(Math.random() * (maxViews - minViews + 1)) + minViews;
        
        // Generate ratings between minRatings and maxRatings
        const ratings = Math.floor(Math.random() * (maxRatings - minRatings + 1)) + minRatings;
        
        // Generate rating score between 4.0 and 5.0
        const ratingScore = (Math.random() * 1 + 4).toFixed(1);
        
        // Generate duration between 1 and 8 hours
        const hours = Math.floor(Math.random() * 8) + 1;
        
        // Generate lessons between 8 and 25
        const lessons = Math.floor(Math.random() * 18) + 8;
        
        // Generate enrolled students (usually higher than views)
        const enrolled = Math.floor(views * (1.2 + Math.random() * 0.8));
        
        return {
            views: this.formatNumber(views),
            ratings: this.formatNumber(ratings),
            ratingScore: parseFloat(ratingScore),
            hours,
            lessons,
            enrolled: this.formatNumber(enrolled)
        };
    }
    
    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
    
    statsToString(stats) {
        return `${stats.views}-${stats.ratings}-${stats.ratingScore}`;
    }
    
    applyStatsToElement(element) {
        const stats = this.generateUniqueStats();
        
        // Apply views
        const viewsElement = element.querySelector('.views-count');
        if (viewsElement) {
            viewsElement.textContent = stats.views;
        }
        
        // Apply ratings
        const ratingsElement = element.querySelector('.ratings-count');
        if (ratingsElement) {
            ratingsElement.textContent = stats.ratings;
        }
        
        // Apply rating score
        const ratingElement = element.querySelector('.rating-score');
        if (ratingElement) {
            ratingElement.textContent = stats.ratingScore;
        }
        
        // Apply hours
        const hoursElement = element.querySelector('.course-hours');
        if (hoursElement) {
            hoursElement.textContent = stats.hours;
        }
        
        // Apply lessons
        const lessonsElement = element.querySelector('.course-lessons');
        if (lessonsElement) {
            lessonsElement.textContent = stats.lessons;
        }
        
        // Apply enrolled students
        const enrolledElement = element.querySelector('.students-enrolled');
        if (enrolledElement) {
            enrolledElement.textContent = stats.enrolled;
        }
        
        // Generate and apply star rating
        this.generateStarRating(element, stats.ratingScore);
        
        return stats;
    }
    
    generateStarRating(element, rating) {
        const starsContainer = element.querySelector('.stars');
        if (!starsContainer) return;
        
        starsContainer.innerHTML = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            const star = document.createElement('i');
            star.className = 'fas fa-star';
            starsContainer.appendChild(star);
        }
        
        // Add half star if needed
        if (hasHalfStar) {
            const halfStar = document.createElement('i');
            halfStar.className = 'fas fa-star-half-alt';
            starsContainer.appendChild(halfStar);
        }
        
        // Add empty stars
        const totalStars = 5;
        const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            const star = document.createElement('i');
            star.className = 'far fa-star';
            starsContainer.appendChild(star);
        }
    }
}

// Enhanced Course Manager
class CourseManager {
    constructor() {
        this.courses = [];
        this.filteredCourses = [];
        this.currentFilter = 'all';
        this.currentPage = 1;
        this.coursesPerPage = 6;
        this.bookmarkedCourses = this.getBookmarkedCourses();
        this.statsGenerator = new VideoStatsGenerator();
        this.initializeCourses();
        this.initializeFilters();
        this.initializeSearch();
        this.initializeBookmarks();
    }
    
    initializeCourses() {
        // Generate enhanced course data with proper stats
        this.courses = [
            {
                id: 1,
                title: 'تطوير مواقع الويب الحديثة',
                titleEn: 'Modern Web Development',
                description: 'تعلم تطوير مواقع الويب باستخدام أحدث التقنيات والأدوات',
                descriptionEn: 'Learn web development using the latest technologies and tools',
                category: 'web',
                level: 'beginner',
                price: 'free',
                duration: 'medium',
                icon: 'fas fa-code',
                featured: true,
                instructor: 'أحمد محمد',
                instructorEn: 'Ahmed Mohamed',
                progress: 0
            },
            {
                id: 2,
                title: 'تطوير تطبيقات الهاتف المحمول',
                titleEn: 'Mobile App Development',
                description: 'تعلم تطوير تطبيقات iOS و Android باستخدام React Native',
                descriptionEn: 'Learn iOS and Android app development using React Native',
                category: 'mobile',
                level: 'intermediate',
                price: 'paid',
                duration: 'long',
                icon: 'fas fa-mobile-alt',
                featured: false,
                instructor: 'سارة أحمد',
                instructorEn: 'Sara Ahmed',
                progress: 25
            },
            {
                id: 3,
                title: 'علم البيانات والتحليل',
                titleEn: 'Data Science & Analytics',
                description: 'تعلم تحليل البيانات والذكاء الاصطناعي باستخدام Python',
                descriptionEn: 'Learn data analysis and AI using Python',
                category: 'data',
                level: 'advanced',
                price: 'paid',
                duration: 'long',
                icon: 'fas fa-chart-bar',
                featured: true,
                instructor: 'محمد علي',
                instructorEn: 'Mohamed Ali',
                progress: 60
            },
            {
                id: 4,
                title: 'الذكاء الاصطناعي وتعلم الآلة',
                titleEn: 'AI & Machine Learning',
                description: 'دورة شاملة في الذكاء الاصطناعي وخوارزميات التعلم',
                descriptionEn: 'Comprehensive course in AI and machine learning algorithms',
                category: 'ai',
                level: 'advanced',
                price: 'paid',
                duration: 'long',
                icon: 'fas fa-brain',
                featured: false,
                instructor: 'فاطمة حسن',
                instructorEn: 'Fatima Hassan',
                progress: 0
            },
            {
                id: 5,
                title: 'تصميم واجهات المستخدم',
                titleEn: 'UI/UX Design',
                description: 'تعلم تصميم واجهات المستخدم وتجربة المستخدم',
                descriptionEn: 'Learn user interface and user experience design',
                category: 'design',
                level: 'beginner',
                price: 'free',
                duration: 'short',
                icon: 'fas fa-paint-brush',
                featured: false,
                instructor: 'ليلى محمود',
                instructorEn: 'Layla Mahmoud',
                progress: 100
            },
            {
                id: 6,
                title: 'أمن المعلومات والشبكات',
                titleEn: 'Cybersecurity & Networks',
                description: 'تعلم حماية الأنظمة والشبكات من التهديدات السيبرانية',
                descriptionEn: 'Learn to protect systems and networks from cyber threats',
                category: 'security',
                level: 'intermediate',
                price: 'paid',
                duration: 'medium',
                icon: 'fas fa-shield-alt',
                featured: true,
                instructor: 'عمر خالد',
                instructorEn: 'Omar Khaled',
                progress: 40
            }
        ];
        
        this.filteredCourses = [...this.courses];
        this.renderCourses();
    }
    
    renderCourses() {
        const coursesGrid = document.querySelector('.courses-grid');
        if (!coursesGrid) return;
        
        const startIndex = (this.currentPage - 1) * this.coursesPerPage;
        const endIndex = startIndex + this.coursesPerPage;
        const coursesToShow = this.filteredCourses.slice(startIndex, endIndex);
        
        if (this.currentPage === 1) {
            coursesGrid.innerHTML = '';
        }
        
        coursesToShow.forEach(course => {
            const courseCard = this.createCourseCard(course);
            coursesGrid.appendChild(courseCard);
            
            // Apply stats to the course card
            this.statsGenerator.applyStatsToElement(courseCard);
        });
        
        this.updateLoadMoreButton();
        this.updateBookmarkCounts();
    }
    
    createCourseCard(course) {
        const isBookmarked = this.bookmarkedCourses.includes(course.id);
        const currentLang = window.translationManager?.currentLanguage || 'ar';
        
        const title = currentLang === 'en' ? course.titleEn : course.title;
        const description = currentLang === 'en' ? course.descriptionEn : course.description;
        const instructor = currentLang === 'en' ? course.instructorEn : course.instructor;
        
        const card = document.createElement('div');
        card.className = `course-card ${course.featured ? 'featured' : ''}`;
        card.setAttribute('data-category', course.category);
        card.setAttribute('data-level', course.level);
        card.setAttribute('data-price', course.price);
        card.setAttribute('data-duration', course.duration);
        
        card.innerHTML = `
            ${course.featured ? '<div class="featured-badge"><i class="fas fa-star"></i><span data-translate="premium">مميز</span></div>' : ''}
            
            <div class="course-header">
                <div class="course-icon">
                    <i class="${course.icon}"></i>
                </div>
                <div class="course-actions">
                    <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-course-id="${course.id}">
                        <i class="fas fa-bookmark"></i>
                    </button>
                    <button class="preview-btn" data-course-id="${course.id}">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
            </div>
            
            <div class="course-content">
                <h3 class="course-title">${title}</h3>
                <p class="course-description">${description}</p>
                
                <div class="course-stats">
                    <div class="stat">
                        <i class="fas fa-eye"></i>
                        <span class="views-count">0</span>
                        <span data-translate="views">مشاهدة</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-clock"></i>
                        <span class="course-hours">0</span>
                        <span data-translate="hours">ساعة</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-play-circle"></i>
                        <span class="course-lessons">0</span>
                        <span data-translate="lessons">درس</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-users"></i>
                        <span class="students-enrolled">0</span>
                        <span data-translate="students_enrolled">طالب</span>
                    </div>
                </div>
                
                <div class="course-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${course.progress}%"></div>
                    </div>
                    <div class="progress-text">${course.progress}% <span data-translate="completed">مكتمل</span></div>
                </div>
            </div>
            
            <div class="course-footer">
                <div class="course-rating">
                    <div class="stars"></div>
                    <div class="rating-text">
                        <span class="rating-score">0</span> 
                        (<span class="ratings-count">0</span> <span data-translate="ratings">تقييم</span>)
                    </div>
                </div>
                <button class="course-button" data-course-id="${course.id}">
                    <span data-translate="enroll">التسجيل</span>
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        `;
        
        // Add event listeners
        this.addCourseCardListeners(card, course);
        
        return card;
    }
    
    addCourseCardListeners(card, course) {
        // Bookmark functionality
        const bookmarkBtn = card.querySelector('.bookmark-btn');
        bookmarkBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleBookmark(course.id);
        });
        
        // Preview functionality
        const previewBtn = card.querySelector('.preview-btn');
        previewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showCoursePreview(course);
        });
        
        // Enroll functionality
        const enrollBtn = card.querySelector('.course-button');
        enrollBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.enrollInCourse(course);
        });
        
        // Card click for details
        card.addEventListener('click', () => {
            this.showCourseDetails(course);
        });
    }
    
    initializeFilters() {
        const filterButtons = document.querySelectorAll('.course-filters .filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.applyFilter(filter);
                
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
    
    applyFilter(filter) {
        this.currentFilter = filter;
        this.currentPage = 1;
        
        if (filter === 'all') {
            this.filteredCourses = [...this.courses];
        } else {
            this.filteredCourses = this.courses.filter(course => course.category === filter);
        }
        
        this.renderCourses();
    }
    
    initializeSearch() {
        const searchInput = document.querySelector('#search-input');
        const searchButton = document.querySelector('.voice-search');
        
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce((e) => {
                this.searchCourses(e.target.value);
            }, CONFIG.performance.debounceDelay));
        }
        
        if (searchButton) {
            searchButton.addEventListener('click', () => {
                this.startVoiceSearch();
            });
        }
    }
    
    searchCourses(query) {
        const currentLang = window.translationManager?.currentLanguage || 'ar';
        
        if (!query.trim()) {
            this.applyFilter(this.currentFilter);
            return;
        }
        
        this.filteredCourses = this.courses.filter(course => {
            const title = currentLang === 'en' ? course.titleEn : course.title;
            const description = currentLang === 'en' ? course.descriptionEn : course.description;
            const instructor = currentLang === 'en' ? course.instructorEn : course.instructor;
            
            return title.toLowerCase().includes(query.toLowerCase()) ||
                   description.toLowerCase().includes(query.toLowerCase()) ||
                   instructor.toLowerCase().includes(query.toLowerCase());
        });
        
        this.currentPage = 1;
        this.renderCourses();
    }
    
    startVoiceSearch() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            this.showNotification('Voice search is not supported in this browser', 'warning');
            return;
        }
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.lang = window.translationManager?.currentLanguage === 'ar' ? 'ar-SA' : 'en-US';
        recognition.continuous = false;
        recognition.interimResults = false;
        
        const voiceButton = document.querySelector('.voice-search');
        voiceButton.classList.add('active');
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            const searchInput = document.querySelector('#search-input');
            if (searchInput) {
                searchInput.value = transcript;
                this.searchCourses(transcript);
            }
        };
        
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.showNotification('Voice search failed. Please try again.', 'error');
        };
        
        recognition.onend = () => {
            voiceButton.classList.remove('active');
        };
        
        recognition.start();
    }
    
    initializeBookmarks() {
        const bookmarkToggle = document.querySelector('.bookmark-toggle');
        if (bookmarkToggle) {
            bookmarkToggle.addEventListener('click', () => {
                this.showBookmarkedCourses();
            });
        }
    }
    
    getBookmarkedCourses() {
        const stored = localStorage.getItem('devx-bookmarks');
        return stored ? JSON.parse(stored) : [];
    }
    
    saveBookmarkedCourses() {
        localStorage.setItem('devx-bookmarks', JSON.stringify(this.bookmarkedCourses));
    }
    
    toggleBookmark(courseId) {
        const index = this.bookmarkedCourses.indexOf(courseId);
        
        if (index > -1) {
            this.bookmarkedCourses.splice(index, 1);
            this.showNotification('تم إزالة الدورة من المفضلة', 'success');
        } else {
            this.bookmarkedCourses.push(courseId);
            this.showNotification('تم إضافة الدورة للمفضلة', 'success');
        }
        
        this.saveBookmarkedCourses();
        this.updateBookmarkButtons();
        this.updateBookmarkCounts();
    }
    
    updateBookmarkButtons() {
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            const courseId = parseInt(btn.getAttribute('data-course-id'));
            const isBookmarked = this.bookmarkedCourses.includes(courseId);
            btn.classList.toggle('active', isBookmarked);
        });
    }
    
    updateBookmarkCounts() {
        const bookmarkCount = document.querySelector('.bookmark-count');
        if (bookmarkCount) {
            bookmarkCount.textContent = this.bookmarkedCourses.length;
            bookmarkCount.style.display = this.bookmarkedCourses.length > 0 ? 'flex' : 'none';
        }
    }
    
    showBookmarkedCourses() {
        const bookmarkedCourses = this.courses.filter(course => 
            this.bookmarkedCourses.includes(course.id)
        );
        
        if (bookmarkedCourses.length === 0) {
            this.showNotification('لا توجد دورات في المفضلة', 'info');
            return;
        }
        
        this.filteredCourses = bookmarkedCourses;
        this.currentPage = 1;
        this.renderCourses();
        
        // Update filter buttons
        document.querySelectorAll('.course-filters .filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
    }
    
    updateLoadMoreButton() {
        const loadMoreContainer = document.querySelector('.load-more-container');
        const loadMoreBtn = document.querySelector('.load-more-btn');
        
        if (!loadMoreContainer || !loadMoreBtn) return;
        
        const totalPages = Math.ceil(this.filteredCourses.length / this.coursesPerPage);
        const hasMore = this.currentPage < totalPages;
        
        loadMoreContainer.style.display = hasMore ? 'block' : 'none';
        
        if (hasMore) {
            loadMoreBtn.onclick = () => {
                this.currentPage++;
                this.renderCourses();
            };
        }
    }
    
    showCoursePreview(course) {
        // Implementation for course preview modal
        this.showNotification('معاينة الدورة قريباً', 'info');
    }
    
    showCourseDetails(course) {
        // Implementation for course details modal
        this.showNotification('تفاصيل الدورة قريباً', 'info');
    }
    
    enrollInCourse(course) {
        // Implementation for course enrollment
        this.showNotification('تم التسجيل في الدورة بنجاح', 'success');
    }
    
    showNotification(message, type = 'info') {
        // Implementation for notifications
        console.log(`${type.toUpperCase()}: ${message}`);
    }
    
    debounce(func, wait) {
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
}

// Enhanced Animation Manager
class AnimationManager {
    constructor() {
        this.observers = new Map();
        this.initializeScrollAnimations();
        this.initializeCounterAnimations();
        this.initializeParallaxEffects();
    }
    
    initializeScrollAnimations() {
        if (!window.IntersectionObserver) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });
        
        this.observers.set('scroll', observer);
    }
    
    initializeCounterAnimations() {
        const counterElements = document.querySelectorAll('.stat-number');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counterElements.forEach(el => {
            counterObserver.observe(el);
        });
        
        this.observers.set('counter', counterObserver);
    }
    
    animateCounter(element) {
        const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            const suffix = element.textContent.match(/[^\d]+$/)?.[0] || '';
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }
    
    initializeParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        if (parallaxElements.length === 0) return;
        
        const handleScroll = this.throttle(() => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        }, CONFIG.performance.throttleDelay);
        
        window.addEventListener('scroll', handleScroll);
    }
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }
}

// Enhanced Performance Manager
class PerformanceManager {
    constructor() {
        this.initializeLazyLoading();
        this.initializeImageOptimization();
        this.initializeResourceHints();
        this.monitorPerformance();
    }
    
    initializeLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    initializeImageOptimization() {
        // Add WebP support detection
        const supportsWebP = this.checkWebPSupport();
        if (supportsWebP) {
            document.documentElement.classList.add('webp');
        }
    }
    
    checkWebPSupport() {
        return new Promise((resolve) => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
                resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }
    
    initializeResourceHints() {
        // Add DNS prefetch for external resources
        const prefetchDomains = [
            'fonts.googleapis.com',
            'fonts.gstatic.com',
            'cdnjs.cloudflare.com'
        ];
        
        prefetchDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = `//${domain}`;
            document.head.appendChild(link);
        });
    }
    
    monitorPerformance() {
        if ('PerformanceObserver' in window) {
            // Monitor Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
            });
            
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            
            // Monitor First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            
            fidObserver.observe({ entryTypes: ['first-input'] });
        }
    }
}

// Enhanced Accessibility Manager
class AccessibilityManager {
    constructor() {
        this.initializeKeyboardNavigation();
        this.initializeFocusManagement();
        this.initializeScreenReaderSupport();
        this.initializeColorContrastToggle();
    }
    
    initializeKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Handle Escape key for modals
            if (e.key === 'Escape') {
                this.closeActiveModal();
            }
            
            // Handle Tab navigation
            if (e.key === 'Tab') {
                this.handleTabNavigation(e);
            }
            
            // Handle Enter/Space for custom buttons
            if (e.key === 'Enter' || e.key === ' ') {
                const target = e.target;
                if (target.hasAttribute('role') && target.getAttribute('role') === 'button') {
                    e.preventDefault();
                    target.click();
                }
            }
        });
    }
    
    initializeFocusManagement() {
        // Add focus indicators for keyboard users
        document.addEventListener('keydown', () => {
            document.body.classList.add('keyboard-navigation');
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    initializeScreenReaderSupport() {
        // Add ARIA labels and descriptions
        this.addAriaLabels();
        this.addLiveRegions();
    }
    
    addAriaLabels() {
        // Add labels to interactive elements without text
        document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])').forEach(button => {
            const icon = button.querySelector('i');
            if (icon && !button.textContent.trim()) {
                const ariaLabel = this.getAriaLabelFromIcon(icon.className);
                if (ariaLabel) {
                    button.setAttribute('aria-label', ariaLabel);
                }
            }
        });
    }
    
    getAriaLabelFromIcon(iconClass) {
        const iconMap = {
            'fa-search': 'Search',
            'fa-bookmark': 'Bookmark',
            'fa-play': 'Play',
            'fa-close': 'Close',
            'fa-menu': 'Menu',
            'fa-sun': 'Light mode',
            'fa-moon': 'Dark mode',
            'fa-globe': 'Language',
            'fa-language': 'Language'
        };
        
        for (const [icon, label] of Object.entries(iconMap)) {
            if (iconClass.includes(icon)) {
                return label;
            }
        }
        
        return null;
    }
    
    addLiveRegions() {
        // Add live region for notifications
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }
    
    announceToScreenReader(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }
    
    initializeColorContrastToggle() {
        // Add high contrast mode toggle
        const contrastToggle = document.createElement('button');
        contrastToggle.className = 'contrast-toggle sr-only';
        contrastToggle.textContent = 'Toggle High Contrast';
        contrastToggle.addEventListener('click', this.toggleHighContrast);
        document.body.appendChild(contrastToggle);
    }
    
    toggleHighContrast() {
        document.body.classList.toggle('high-contrast');
        const isHighContrast = document.body.classList.contains('high-contrast');
        localStorage.setItem('high-contrast', isHighContrast);
    }
    
    closeActiveModal() {
        const activeModal = document.querySelector('.modal:not([style*="display: none"])');
        if (activeModal) {
            activeModal.style.display = 'none';
        }
        
        const activeOverlay = document.querySelector('.search-overlay.active');
        if (activeOverlay) {
            activeOverlay.classList.remove('active');
        }
    }
    
    handleTabNavigation(e) {
        const focusableElements = document.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
}

// Enhanced Loading Manager
class LoadingManager {
    constructor() {
        this.loadingScreen = document.querySelector('.loading-screen');
        this.initializeLoading();
    }
    
    initializeLoading() {
        // Simulate loading progress
        this.simulateLoading();
        
        // Hide loading screen when page is fully loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 1000);
        });
    }
    
    simulateLoading() {
        const progressBar = document.querySelector('.loading-progress');
        if (!progressBar) return;
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            progressBar.style.width = `${progress}%`;
        }, 200);
    }
    
    hideLoadingScreen() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
            }, 500);
        }
    }
    
    showLoadingScreen() {
        if (this.loadingScreen) {
            this.loadingScreen.style.display = 'flex';
            this.loadingScreen.classList.remove('hidden');
        }
    }
}

// Enhanced Notification System
class NotificationManager {
    constructor() {
        this.notifications = [];
        this.container = this.createNotificationContainer();
    }
    
    createNotificationContainer() {
        const container = document.createElement('div');
        container.className = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 120px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(container);
        return container;
    }
    
    show(message, type = 'info', duration = 5000) {
        const notification = this.createNotification(message, type);
        this.container.appendChild(notification);
        this.notifications.push(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Auto remove
        setTimeout(() => {
            this.remove(notification);
        }, duration);
        
        return notification;
    }
    
    createNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            background: var(--card-bg);
            color: var(--text-color);
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius-md);
            box-shadow: var(--shadow-elevation-3);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            min-width: 320px;
            border-left: 4px solid var(--primary-color);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            pointer-events: auto;
        `;
        
        const iconMap = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        notification.innerHTML = `
            <div class="notification-content">
                <i class="${iconMap[type] || iconMap.info}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.remove(notification);
        });
        
        return notification;
    }
    
    remove(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            const index = this.notifications.indexOf(notification);
            if (index > -1) {
                this.notifications.splice(index, 1);
            }
        }, 300);
    }
    
    clear() {
        this.notifications.forEach(notification => {
            this.remove(notification);
        });
    }
}

// Enhanced Particle System
class ParticleSystem {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.animationId = null;
        this.initializeParticles();
    }
    
    initializeParticles() {
        // Check if particles.js is available
        if (typeof particlesJS !== 'undefined') {
            this.initializeParticlesJS();
        } else {
            this.createCustomParticles();
        }
    }
    
    initializeParticlesJS() {
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
                    value: '#667eea'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
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
                    color: '#667eea',
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
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
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
    
    createCustomParticles() {
        const particlesContainer = document.getElementById('particles-js');
        if (!particlesContainer) return;
        
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        particlesContainer.appendChild(this.canvas);
        
        this.resizeCanvas();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 10000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Enhanced Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = null;
        this.dot = null;
        this.outline = null;
        this.isVisible = false;
        this.initializeCursor();
    }
    
    initializeCursor() {
        // Check if device supports hover (not touch device)
        if (!window.matchMedia('(hover: hover)').matches) {
            return;
        }
        
        this.createCursor();
        this.addEventListeners();
    }
    
    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        
        this.dot = document.createElement('div');
        this.dot.className = 'cursor-dot';
        
        this.outline = document.createElement('div');
        this.outline.className = 'cursor-outline';
        
        this.cursor.appendChild(this.dot);
        this.cursor.appendChild(this.outline);
        document.body.appendChild(this.cursor);
    }
    
    addEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.updatePosition(e.clientX, e.clientY);
            if (!this.isVisible) {
                this.show();
            }
        });
        
        document.addEventListener('mouseenter', () => {
            this.show();
        });
        
        document.addEventListener('mouseleave', () => {
            this.hide();
        });
        
        // Add hover effects for interactive elements
        const interactiveElements = 'a, button, .course-card, .nav-link, .cta-button, [role="button"]';
        
        document.addEventListener('mouseover', (e) => {
            if (e.target.matches(interactiveElements)) {
                this.addHoverEffect();
            }
        });
        
        document.addEventListener('mouseout', (e) => {
            if (e.target.matches(interactiveElements)) {
                this.removeHoverEffect();
            }
        });
    }
    
    updatePosition(x, y) {
        if (this.cursor) {
            this.cursor.style.left = x + 'px';
            this.cursor.style.top = y + 'px';
        }
    }
    
    show() {
        if (this.cursor) {
            this.cursor.style.opacity = '1';
            this.isVisible = true;
        }
    }
    
    hide() {
        if (this.cursor) {
            this.cursor.style.opacity = '0';
            this.isVisible = false;
        }
    }
    
    addHoverEffect() {
        if (this.dot && this.outline) {
            this.dot.classList.add('hover');
            this.outline.classList.add('hover');
        }
    }
    
    removeHoverEffect() {
        if (this.dot && this.outline) {
            this.dot.classList.remove('hover');
            this.outline.classList.remove('hover');
        }
    }
}

// Enhanced Search System
class SearchSystem {
    constructor() {
        this.searchOverlay = document.querySelector('.search-overlay');
        this.searchInput = document.querySelector('#search-input');
        this.searchToggle = document.querySelector('.search-toggle');
        this.closeSearch = document.querySelector('.close-search');
        this.initializeSearch();
    }
    
    initializeSearch() {
        if (this.searchToggle) {
            this.searchToggle.addEventListener('click', () => {
                this.openSearch();
            });
        }
        
        if (this.closeSearch) {
            this.closeSearch.addEventListener('click', () => {
                this.closeSearchOverlay();
            });
        }
        
        if (this.searchOverlay) {
            this.searchOverlay.addEventListener('click', (e) => {
                if (e.target === this.searchOverlay) {
                    this.closeSearchOverlay();
                }
            });
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.openSearch();
            }
        });
    }
    
    openSearch() {
        if (this.searchOverlay) {
            this.searchOverlay.classList.add('active');
            if (this.searchInput) {
                setTimeout(() => {
                    this.searchInput.focus();
                }, 100);
            }
        }
    }
    
    closeSearchOverlay() {
        if (this.searchOverlay) {
            this.searchOverlay.classList.remove('active');
        }
    }
}

// Enhanced Chat System
class ChatSystem {
    constructor() {
        this.chatWidget = document.querySelector('.chat-widget');
        this.chatToggle = document.querySelector('.fab-btn[data-action="chat"]');
        this.chatClose = document.querySelector('.chat-close');
        this.chatInput = document.querySelector('.chat-input input');
        this.chatSend = document.querySelector('.chat-input button');
        this.chatMessages = document.querySelector('.chat-messages');
        this.isOpen = false;
        this.initializeChat();
    }
    
    initializeChat() {
        if (this.chatToggle) {
            this.chatToggle.addEventListener('click', () => {
                this.toggleChat();
            });
        }
        
        if (this.chatClose) {
            this.chatClose.addEventListener('click', () => {
                this.closeChat();
            });
        }
        
        if (this.chatSend) {
            this.chatSend.addEventListener('click', () => {
                this.sendMessage();
            });
        }
        
        if (this.chatInput) {
            this.chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
        
        // Add initial bot message
        this.addBotMessage('مرحباً! كيف يمكنني مساعدتك اليوم؟');
    }
    
    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }
    
    openChat() {
        if (this.chatWidget) {
            this.chatWidget.classList.add('active');
            this.isOpen = true;
            if (this.chatInput) {
                setTimeout(() => {
                    this.chatInput.focus();
                }, 100);
            }
        }
    }
    
    closeChat() {
        if (this.chatWidget) {
            this.chatWidget.classList.remove('active');
            this.isOpen = false;
        }
    }
    
    sendMessage() {
        if (!this.chatInput || !this.chatInput.value.trim()) return;
        
        const message = this.chatInput.value.trim();
        this.addUserMessage(message);
        this.chatInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            this.addBotMessage(this.generateBotResponse(message));
        }, 1000);
    }
    
    addUserMessage(message) {
        const messageElement = this.createMessageElement(message, 'user');
        this.chatMessages.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    addBotMessage(message) {
        const messageElement = this.createMessageElement(message, 'bot');
        this.chatMessages.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    createMessageElement(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = type === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.textContent = message;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        return messageDiv;
    }
    
    generateBotResponse(userMessage) {
        const responses = [
            'شكراً لك على سؤالك. سأقوم بمساعدتك قريباً.',
            'هذا سؤال رائع! دعني أفكر في الإجابة.',
            'يمكنني مساعدتك في هذا الموضوع. هل تريد المزيد من التفاصيل؟',
            'أفهم ما تقصده. هل يمكنك توضيح أكثر؟',
            'هذا موضوع مثير للاهتمام. دعني أقدم لك بعض المعلومات.'
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    scrollToBottom() {
        if (this.chatMessages) {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }
    }
}

// Enhanced Floating Action Buttons
class FloatingActionButtons {
    constructor() {
        this.initializeFABs();
    }
    
    initializeFABs() {
        const fabContainer = document.querySelector('.floating-actions');
        if (!fabContainer) {
            this.createFABContainer();
        }
        
        this.addScrollToTopFAB();
        this.addChatFAB();
        this.addBookmarksFAB();
    }
    
    createFABContainer() {
        const container = document.createElement('div');
        container.className = 'floating-actions';
        document.body.appendChild(container);
        return container;
    }
    
    addScrollToTopFAB() {
        const scrollFAB = document.createElement('button');
        scrollFAB.className = 'fab-btn scroll-to-top';
        scrollFAB.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollFAB.setAttribute('aria-label', 'Scroll to top');
        scrollFAB.style.display = 'none';
        
        scrollFAB.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollFAB.style.display = 'flex';
            } else {
                scrollFAB.style.display = 'none';
            }
        });
        
        document.querySelector('.floating-actions').appendChild(scrollFAB);
    }
    
    addChatFAB() {
        const chatFAB = document.createElement('button');
        chatFAB.className = 'fab-btn';
        chatFAB.setAttribute('data-action', 'chat');
        chatFAB.innerHTML = '<i class="fas fa-comments"></i>';
        chatFAB.setAttribute('aria-label', 'Open chat');
        
        document.querySelector('.floating-actions').appendChild(chatFAB);
    }
    
    addBookmarksFAB() {
        const bookmarksFAB = document.createElement('button');
        bookmarksFAB.className = 'fab-btn';
        bookmarksFAB.innerHTML = '<i class="fas fa-bookmark"></i>';
        bookmarksFAB.setAttribute('aria-label', 'View bookmarks');
        
        bookmarksFAB.addEventListener('click', () => {
            if (window.courseManager) {
                window.courseManager.showBookmarkedCourses();
            }
        });
        
        document.querySelector('.floating-actions').appendChild(bookmarksFAB);
    }
}

// Enhanced Header Scroll Effect
class HeaderScrollEffect {
    constructor() {
        this.header = document.querySelector('.header');
        this.topBar = document.querySelector('.top-bar');
        this.lastScrollY = window.pageYOffset;
        this.initializeScrollEffect();
    }
    
    initializeScrollEffect() {
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 10));
    }
    
    handleScroll() {
        const currentScrollY = window.pageYOffset;
        
        if (currentScrollY > 100) {
            this.header.classList.add('scrolled');
            if (this.topBar) {
                this.topBar.style.transform = 'translateY(-100%)';
            }
        } else {
            this.header.classList.remove('scrolled');
            if (this.topBar) {
                this.topBar.style.transform = 'translateY(0)';
            }
        }
        
        this.lastScrollY = currentScrollY;
    }
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Enhanced Roadmap Animation
class RoadmapAnimation {
    constructor() {
        this.roadmapSteps = document.querySelectorAll('.roadmap-step');
        this.initializeRoadmap();
    }
    
    initializeRoadmap() {
        this.setInitialStates();
        this.initializeIntersectionObserver();
        this.addClickHandlers();
    }
    
    setInitialStates() {
        this.roadmapSteps.forEach((step, index) => {
            if (index === 0) {
                step.classList.add('current');
            } else if (index < 2) {
                step.classList.add('completed');
            }
            
            // Set progress bar width
            const progressBar = step.querySelector('.progress-bar');
            if (progressBar) {
                const progress = step.classList.contains('completed') ? 100 : 
                               step.classList.contains('current') ? 60 : 0;
                progressBar.style.width = `${progress}%`;
            }
        });
    }
    
    initializeIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.3 });
        
        this.roadmapSteps.forEach(step => {
            observer.observe(step);
        });
    }
    
    addClickHandlers() {
        this.roadmapSteps.forEach((step, index) => {
            step.addEventListener('click', () => {
                this.updateRoadmapProgress(index);
            });
        });
    }
    
    updateRoadmapProgress(clickedIndex) {
        this.roadmapSteps.forEach((step, index) => {
            step.classList.remove('completed', 'current');
            
            if (index < clickedIndex) {
                step.classList.add('completed');
            } else if (index === clickedIndex) {
                step.classList.add('current');
            }
            
            // Update progress bar
            const progressBar = step.querySelector('.progress-bar');
            if (progressBar) {
                const progress = step.classList.contains('completed') ? 100 : 
                               step.classList.contains('current') ? 60 : 0;
                progressBar.style.width = `${progress}%`;
            }
        });
    }
}

// Enhanced Live Stats
class LiveStats {
    constructor() {
        this.stats = {
            onlineStudents: 1247,
            activeCourses: 156,
            expertInstructors: 89,
            completionRate: 94
        };
        this.initializeLiveStats();
    }
    
    initializeLiveStats() {
        this.updateStatsDisplay();
        this.startLiveUpdates();
    }
    
    updateStatsDisplay() {
        const onlineElement = document.querySelector('.online-count');
        const coursesElement = document.querySelector('.courses-count');
        const instructorsElement = document.querySelector('.instructors-count');
        const completionElement = document.querySelector('.completion-rate');
        
        if (onlineElement) onlineElement.textContent = this.stats.onlineStudents;
        if (coursesElement) coursesElement.textContent = this.stats.activeCourses;
        if (instructorsElement) instructorsElement.textContent = this.stats.expertInstructors;
        if (completionElement) completionElement.textContent = this.stats.completionRate + '%';
    }
    
    startLiveUpdates() {
        setInterval(() => {
            // Simulate live updates
            this.stats.onlineStudents += Math.floor(Math.random() * 10) - 5;
            this.stats.onlineStudents = Math.max(1200, Math.min(1300, this.stats.onlineStudents));
            
            this.updateStatsDisplay();
        }, 30000); // Update every 30 seconds
    }
}

// Enhanced Error Handler
class ErrorHandler {
    constructor() {
        this.initializeErrorHandling();
    }
    
    initializeErrorHandling() {
        window.addEventListener('error', (event) => {
            this.handleError(event.error, event.filename, event.lineno);
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            this.handlePromiseRejection(event.reason);
        });
    }
    
    handleError(error, filename, lineno) {
        console.error('JavaScript Error:', {
            message: error.message,
            filename: filename,
            line: lineno,
            stack: error.stack
        });
        
        // Show user-friendly error message
        if (window.notificationManager) {
            window.notificationManager.show(
                'حدث خطأ غير متوقع. يرجى إعادة تحميل الصفحة.',
                'error'
            );
        }
    }
    
    handlePromiseRejection(reason) {
        console.error('Unhandled Promise Rejection:', reason);
        
        if (window.notificationManager) {
            window.notificationManager.show(
                'فشل في تحميل بعض المحتوى. يرجى المحاولة مرة أخرى.',
                'warning'
            );
        }
    }
}

// Enhanced Main Application Class
class DevXAcademy {
    constructor() {
        this.components = {};
        this.isInitialized = false;
        this.initializeApp();
    }
    
    async initializeApp() {
        try {
            // Show loading screen
            this.components.loadingManager = new LoadingManager();
            
            // Initialize core systems
            this.components.errorHandler = new ErrorHandler();
            this.components.translationManager = new TranslationManager();
            this.components.themeManager = new ThemeManager();
            this.components.notificationManager = new NotificationManager();
            
            // Wait for translations to load
            await this.waitForTranslations();
            
            // Initialize UI components
            this.components.courseManager = new CourseManager();
            this.components.animationManager = new AnimationManager();
            this.components.performanceManager = new PerformanceManager();
            this.components.accessibilityManager = new AccessibilityManager();
            
            // Initialize interactive features
            this.components.particleSystem = new ParticleSystem();
            this.components.customCursor = new CustomCursor();
            this.components.searchSystem = new SearchSystem();
            this.components.chatSystem = new ChatSystem();
            this.components.floatingActionButtons = new FloatingActionButtons();
            
            // Initialize scroll effects
            this.components.headerScrollEffect = new HeaderScrollEffect();
            this.components.roadmapAnimation = new RoadmapAnimation();
            this.components.liveStats = new LiveStats();
            
            // Make components globally accessible
            this.exposeGlobalComponents();
            
            // Mark as initialized
            this.isInitialized = true;
            
            // Dispatch ready event
            this.dispatchReadyEvent();
            
            console.log('DevX Academy initialized successfully');
            
        } catch (error) {
            console.error('Failed to initialize DevX Academy:', error);
            this.handleInitializationError(error);
        }
    }
    
    async waitForTranslations() {
        return new Promise((resolve) => {
            if (this.components.translationManager.translations.ar) {
                resolve();
            } else {
                const checkTranslations = () => {
                    if (this.components.translationManager.translations.ar) {
                        resolve();
                    } else {
                        setTimeout(checkTranslations, 100);
                    }
                };
                checkTranslations();
            }
        });
    }
    
    exposeGlobalComponents() {
        // Make key components globally accessible
        window.translationManager = this.components.translationManager;
        window.themeManager = this.components.themeManager;
        window.courseManager = this.components.courseManager;
        window.notificationManager = this.components.notificationManager;
        window.devxAcademy = this;
    }
    
    dispatchReadyEvent() {
        window.dispatchEvent(new CustomEvent('devxAcademyReady', {
            detail: { app: this }
        }));
    }
    
    handleInitializationError(error) {
        document.body.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background: #f8fafc;
                color: #1a202c;
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 2rem;
            ">
                <div>
                    <h1 style="color: #e53e3e; margin-bottom: 1rem;">خطأ في التحميل</h1>
                    <p style="margin-bottom: 2rem;">عذراً، حدث خطأ أثناء تحميل الموقع.</p>
                    <button onclick="location.reload()" style="
                        background: #667eea;
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-size: 1rem;
                    ">إعادة تحميل الصفحة</button>
                </div>
            </div>
        `;
    }
    
    // Public API methods
    getComponent(name) {
        return this.components[name];
    }
    
    isReady() {
        return this.isInitialized;
    }
    
    destroy() {
        // Cleanup all components
        Object.values(this.components).forEach(component => {
            if (component && typeof component.destroy === 'function') {
                component.destroy();
            }
        });
        
        this.components = {};
        this.isInitialized = false;
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.devxAcademyApp = new DevXAcademy();
});

// Handle page visibility changes for performance optimization
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause non-essential animations
        document.body.classList.add('page-hidden');
    } else {
        // Page is visible, resume animations
        document.body.classList.remove('page-hidden');
    }
});

// Enhanced Service Worker Registration (if available)
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

// Enhanced Console Welcome Message
console.log(`
%c🚀 DevX Academy %c
%cWelcome to DevX Academy!
Built with ❤️ using modern web technologies.

%cFeatures:
✨ Advanced UI/UX Design
🌙 Dark/Light Theme Support
🌍 Multi-language Support (Arabic/English)
📱 Fully Responsive Design
⚡ High Performance Optimizations
♿ Accessibility Features
🎨 Custom Animations & Effects
🔍 Advanced Search System
💬 Interactive Chat System
📊 Real-time Statistics
🎯 Smart Course Management

%cDeveloped by: DevX Academy Team
Version: 2.0.0 Enhanced
`, 
'background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 10px 20px; border-radius: 10px; font-size: 16px; font-weight: bold;',
'',
'color: #667eea; font-size: 14px; font-weight: bold;',
'color: #4a5568; font-size: 12px; line-height: 1.5;',
'color: #2d3748; font-size: 11px; margin-top: 10px;'
);

