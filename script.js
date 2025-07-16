// Enhanced DevX Academy JavaScript - Optimized Version
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
let videoPlayer = null;
let currentVideoIndex = 0;

// Course data with video information
const coursesData = {
    html: {
        title: 'HTML',
        description: 'تعلم أساسيات بناء صفحات الويب باستخدام HTML مع أحدث المعايير',
        duration: '4 ساعات',
        level: 'مبتدئ',
        students: '2.1k',
        rating: 4.9,
        videos: [
            { title: 'مقدمة في HTML', duration: '15:30', url: 'https://www.youtube.com/embed/UB1O30fR-EE', completed: false },
            { title: 'العناصر الأساسية', duration: '22:45', url: 'https://www.youtube.com/embed/ok-plXXHlWw', completed: false },
            { title: 'النماذج والجداول', duration: '18:20', url: 'https://www.youtube.com/embed/YwbIeMlxZAU', completed: false },
            { title: 'HTML5 الجديد', duration: '25:10', url: 'https://www.youtube.com/embed/pQN-pnXPaVg', completed: false },
            { title: 'مشروع عملي', duration: '35:15', url: 'https://www.youtube.com/embed/Wm6CUkswsNw', completed: false }
        ],
        objectives: [
            'فهم بنية HTML الأساسية',
            'إنشاء صفحات ويب متكاملة',
            'استخدام العناصر الدلالية',
            'تطبيق أفضل الممارسات'
        ],
        requirements: [
            'لا توجد متطلبات مسبقة',
            'حاسوب مع متصفح حديث',
            'محرر نصوص بسيط'
        ]
    },
    css: {
        title: 'CSS',
        description: 'تعلم تصميم وتنسيق صفحات الويب باستخدام CSS مع التقنيات الحديثة',
        duration: '6 ساعات',
        level: 'مبتدئ',
        students: '1.9k',
        rating: 4.8,
        videos: [
            { title: 'أساسيات CSS', duration: '20:15', url: 'https://www.youtube.com/embed/yfoY53QXEnI', completed: false },
            { title: 'التخطيط والتموضع', duration: '28:30', url: 'https://www.youtube.com/embed/jx5jmI0UlXU', completed: false },
            { title: 'Flexbox و Grid', duration: '32:45', url: 'https://www.youtube.com/embed/JJSoEo8JSnc', completed: false },
            { title: 'الرسوم المتحركة', duration: '24:20', url: 'https://www.youtube.com/embed/zHUpx90NerM', completed: false },
            { title: 'التصميم المتجاوب', duration: '30:10', url: 'https://www.youtube.com/embed/srvUrASNdxk', completed: false },
            { title: 'مشروع متكامل', duration: '45:30', url: 'https://www.youtube.com/embed/p0bGHP-PXD4', completed: false }
        ],
        objectives: [
            'تصميم واجهات جذابة',
            'إنشاء تخطيطات متجاوبة',
            'استخدام Flexbox و Grid',
            'تطبيق الرسوم المتحركة'
        ],
        requirements: [
            'معرفة أساسية بـ HTML',
            'فهم مبادئ التصميم',
            'محرر نصوص متقدم'
        ]
    },
    javascript: {
        title: 'JavaScript',
        description: 'تعلم البرمجة التفاعلية وتطوير تطبيقات الويب الحديثة',
        duration: '12 ساعة',
        level: 'متوسط',
        students: '5.2k',
        rating: 4.9,
        videos: [
            { title: 'مقدمة في JavaScript', duration: '25:45', url: 'https://www.youtube.com/embed/PkZNo7MFNFg', completed: true },
            { title: 'المتغيرات والدوال', duration: '30:20', url: 'https://www.youtube.com/embed/hdI2bqOjy3c', completed: true },
            { title: 'التحكم في DOM', duration: '35:15', url: 'https://www.youtube.com/embed/0ik6X4DJKCc', completed: true },
            { title: 'الأحداث والتفاعل', duration: '28:30', url: 'https://www.youtube.com/embed/XF1_MlZ5l6M', completed: false },
            { title: 'AJAX و Fetch API', duration: '32:45', url: 'https://www.youtube.com/embed/cuEtnrL9-H0', completed: false },
            { title: 'ES6+ الحديث', duration: '40:20', url: 'https://www.youtube.com/embed/nZ1DMMsyVyI', completed: false },
            { title: 'مشروع تطبيق تفاعلي', duration: '55:30', url: 'https://www.youtube.com/embed/jaVNP3nIAv0', completed: false }
        ],
        objectives: [
            'البرمجة بـ JavaScript الحديث',
            'التفاعل مع DOM',
            'استخدام APIs الخارجية',
            'بناء تطبيقات تفاعلية'
        ],
        requirements: [
            'معرفة جيدة بـ HTML و CSS',
            'فهم أساسيات البرمجة',
            'بيئة تطوير متكاملة'
        ]
    },
    python: {
        title: 'Python',
        description: 'تعلم البرمجة بـ Python للذكاء الاصطناعي وتحليل البيانات',
        duration: '15 ساعة',
        level: 'مبتدئ',
        students: '4k',
        rating: 4.8,
        videos: [
            { title: 'مقدمة في Python', duration: '22:30', url: 'https://www.youtube.com/embed/_uQrJ0TkZlc', completed: false },
            { title: 'أساسيات البرمجة', duration: '28:45', url: 'https://www.youtube.com/embed/kqtD5dpn9C8', completed: false },
            { title: 'البيانات والمتغيرات', duration: '25:20', url: 'https://www.youtube.com/embed/YYXdXT2l-Gg', completed: false },
            { title: 'الدوال والوحدات', duration: '32:15', url: 'https://www.youtube.com/embed/9Os0o3wzS_I', completed: false },
            { title: 'البرمجة الكائنية', duration: '38:30', url: 'https://www.youtube.com/embed/ZDa-Z5JzLYM', completed: false },
            { title: 'مكتبات Python', duration: '35:45', url: 'https://www.youtube.com/embed/tc8rHwHzm7Q', completed: false },
            { title: 'مشروع تحليل البيانات', duration: '48:20', url: 'https://www.youtube.com/embed/r-uOLxNrNk8', completed: false }
        ],
        objectives: [
            'أساسيات البرمجة بـ Python',
            'التعامل مع البيانات',
            'استخدام المكتبات الشائعة',
            'بناء مشاريع عملية'
        ],
        requirements: [
            'لا توجد متطلبات مسبقة',
            'تثبيت Python على الحاسوب',
            'محرر نصوص أو IDE'
        ]
    },
    react: {
        title: 'React',
        description: 'تعلم بناء واجهات المستخدم التفاعلية مع React',
        duration: '16 ساعة',
        level: 'متقدم',
        students: '800',
        rating: 4.9,
        videos: [
            { title: 'مقدمة في React', duration: '30:15', url: 'https://www.youtube.com/embed/Ke90Tje7VS0', completed: false },
            { title: 'المكونات والخصائص', duration: '35:30', url: 'https://www.youtube.com/embed/sBws8MSXN7A', completed: false },
            { title: 'الحالة والأحداث', duration: '32:45', url: 'https://www.youtube.com/embed/4UZrsTqkcW4', completed: false },
            { title: 'React Hooks', duration: '40:20', url: 'https://www.youtube.com/embed/O6P86uwfdR0', completed: false },
            { title: 'إدارة الحالة', duration: '38:15', url: 'https://www.youtube.com/embed/35lXWvCuM8o', completed: false },
            { title: 'التوجيه والملاحة', duration: '35:45', url: 'https://www.youtube.com/embed/Law7wfdg_ls', completed: false },
            { title: 'مشروع تطبيق كامل', duration: '65:30', url: 'https://www.youtube.com/embed/b9eMGE7QtTk', completed: false }
        ],
        objectives: [
            'بناء مكونات React قابلة للإعادة',
            'إدارة الحالة بفعالية',
            'استخدام React Hooks',
            'تطوير تطبيقات كاملة'
        ],
        requirements: [
            'إتقان JavaScript الحديث',
            'فهم ES6+ والمفاهيم المتقدمة',
            'معرفة بـ Node.js و npm'
        ]
    },
    flutter: {
        title: 'Flutter',
        description: 'تطوير تطبيقات الجوال متعددة المنصات باستخدام Flutter',
        duration: '20 ساعة',
        level: 'متوسط',
        students: '1.5k',
        rating: 4.7,
        videos: [
            { title: 'مقدمة في Flutter', duration: '28:30', url: 'https://www.youtube.com/embed/1ukSR1GRtMU', completed: false },
            { title: 'Dart Programming', duration: '35:45', url: 'https://www.youtube.com/embed/Ej_Pcr4uC2Q', completed: false },
            { title: 'Widgets الأساسية', duration: '32:20', url: 'https://www.youtube.com/embed/AqCMFXEmf3w', completed: false },
            { title: 'التخطيط والتصميم', duration: '38:15', url: 'https://www.youtube.com/embed/RJEnTRBxaSg', completed: false },
            { title: 'إدارة الحالة', duration: '42:30', url: 'https://www.youtube.com/embed/d_m5csmrf7I', completed: false },
            { title: 'التنقل بين الشاشات', duration: '35:45', url: 'https://www.youtube.com/embed/nyvwx7o277U', completed: false },
            { title: 'مشروع تطبيق كامل', duration: '75:20', url: 'https://www.youtube.com/embed/VPvVD8t02U8', completed: false }
        ],
        objectives: [
            'تطوير تطبيقات متعددة المنصات',
            'إتقان لغة Dart',
            'استخدام Flutter Widgets',
            'نشر التطبيقات'
        ],
        requirements: [
            'معرفة أساسية بالبرمجة',
            'تثبيت Flutter SDK',
            'Android Studio أو VS Code'
        ]
    }
};

// Initialize website
function initializeWebsite() {
    // Apply theme
    applyTheme(currentTheme);
    
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
    
    // Update online users count
    updateOnlineUsers();
    
    // Initialize course progress
    initializeCourseProgress();
    
    // Initialize keyboard shortcuts
    initializeKeyboardShortcuts();
    
    // Initialize intersection observer for animations
    initializeIntersectionObserver();
    
    // Initialize video player
    initializeVideoPlayer();
    
    console.log('🚀 DevX Academy initialized successfully!');
}

// Loading screen
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after animation
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2000);
}

// Theme management
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme toggle icon
    const themeToggle = document.querySelector('.top-theme-toggle i');
    if (themeToggle) {
        themeToggle.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                updateActiveNavLink(this.getAttribute('href').substring(1));
            }
        });
    });
}

function updateActiveNavLink(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Course filters
function initializeCourseFilters() {
    const filterButtons = document.querySelectorAll('.course-filters .filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter courses
            const filter = this.getAttribute('data-filter');
            filterCourses(filter);
        });
    });
}

function filterCourses(filter) {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Modal functionality
function initializeModalTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('advanced-search');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            if (query.length > 2) {
                performSearch(query);
            } else {
                searchResults.innerHTML = '';
            }
        });
    }
}

function performSearch(query) {
    const searchResults = document.getElementById('search-results');
    const results = [];
    
    // Search through courses
    Object.keys(coursesData).forEach(courseKey => {
        const course = coursesData[courseKey];
        if (course.title.toLowerCase().includes(query) || 
            course.description.toLowerCase().includes(query)) {
            results.push({
                type: 'course',
                title: course.title,
                description: course.description,
                action: () => openCourse(courseKey)
            });
        }
    });
    
    // Display results
    if (results.length > 0) {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="result.action()">
                <h5>${result.title}</h5>
                <p>${result.description}</p>
            </div>
        `).join('');
    } else {
        searchResults.innerHTML = '<p>لم يتم العثور على نتائج</p>';
    }
}

function toggleSearch() {
    const searchOverlay = document.getElementById('search-overlay');
    searchOverlay.classList.toggle('active');
    
    if (searchOverlay.classList.contains('active')) {
        document.getElementById('advanced-search').focus();
    }
}

// Statistics animation
function initializeStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const current = parseInt(stat.textContent);
            
            if (current < target) {
                const increment = Math.ceil(target / 100);
                stat.textContent = Math.min(current + increment, target);
                
                if (current + increment < target) {
                    setTimeout(animateStats, 50);
                }
            }
        });
    };
    
    // Start animation when stats come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Roadmap interactions
function initializeRoadmap() {
    const roadmapSteps = document.querySelectorAll('.roadmap-step');
    
    roadmapSteps.forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.getAttribute('data-step');
            showStepDetails(stepNumber);
        });
    });
}

function showStepDetails(stepNumber) {
    // Implementation for showing step details
    console.log(`Showing details for step ${stepNumber}`);
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
    const chatWidget = document.getElementById('chat-widget');
    chatWidget.classList.toggle('active');
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const message = chatInput.value.trim();
    
    if (message) {
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
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot-message';
            botMessage.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>شكراً لك على رسالتك! سيقوم فريق الدعم بالرد عليك قريباً. يمكنك أيضاً التواصل مباشرة عبر واتساب: +201500461923</p>
                </div>
            `;
            chatMessages.appendChild(botMessage);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Course management
function openCourse(courseId) {
    currentCourse = courseId;
    const course = coursesData[courseId];
    
    if (!course) {
        console.error('Course not found:', courseId);
        return;
    }
    
    // Update modal content
    document.getElementById('modalTitle').textContent = `دورة ${course.title}`;
    document.getElementById('modalStudents').textContent = course.students;
    document.getElementById('modalRating').textContent = course.rating;
    
    // Update lessons list
    updateLessonsList(course);
    
    // Update course objectives
    updateCourseObjectives(course);
    
    // Update course requirements
    updateCourseRequirements(course);
    
    // Show modal
    const modal = document.getElementById('courseModal');
    modal.classList.add('active');
    modal.style.display = 'flex';
    
    // Load first video if available
    if (course.videos && course.videos.length > 0) {
        loadVideo(0);
    }
}

function updateLessonsList(course) {
    const lessonsList = document.getElementById('lessonsList');
    const totalLessons = document.getElementById('totalLessons');
    const lessonsCompleted = document.getElementById('lessonsCompleted');
    
    if (!lessonsList || !course.videos) return;
    
    totalLessons.textContent = course.videos.length;
    
    const completedCount = course.videos.filter(video => video.completed).length;
    lessonsCompleted.textContent = completedCount;
    
    lessonsList.innerHTML = course.videos.map((video, index) => `
        <div class="lesson-item ${video.completed ? 'completed' : ''}" onclick="loadVideo(${index})">
            <div class="lesson-info">
                <div class="lesson-number">${index + 1}</div>
                <div class="lesson-details">
                    <h5>${video.title}</h5>
                    <span class="lesson-duration">
                        <i class="fas fa-clock"></i> ${video.duration}
                    </span>
                </div>
            </div>
            <div class="lesson-status">
                ${video.completed ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-play-circle"></i>'}
            </div>
        </div>
    `).join('');
}

function updateCourseObjectives(course) {
    const objectivesList = document.getElementById('courseObjectives');
    if (!objectivesList || !course.objectives) return;
    
    objectivesList.innerHTML = course.objectives.map(objective => `
        <li><i class="fas fa-check"></i> ${objective}</li>
    `).join('');
}

function updateCourseRequirements(course) {
    const requirementsList = document.getElementById('courseRequirements');
    if (!requirementsList || !course.requirements) return;
    
    requirementsList.innerHTML = course.requirements.map(requirement => `
        <li><i class="fas fa-info-circle"></i> ${requirement}</li>
    `).join('');
}

// Video player functionality
function initializeVideoPlayer() {
    // Initialize video player settings
    videoPlayer = {
        currentTime: 0,
        duration: 0,
        isPlaying: false
    };
}

function loadVideo(videoIndex) {
    const course = coursesData[currentCourse];
    if (!course || !course.videos || !course.videos[videoIndex]) return;
    
    currentVideoIndex = videoIndex;
    const video = course.videos[videoIndex];
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Create iframe for YouTube video
    videoPlayer.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="${video.url}?autoplay=1&rel=0&modestbranding=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <div class="video-overlay">
            <div class="video-info">
                <h4>${video.title}</h4>
                <span class="video-duration">
                    <i class="fas fa-clock"></i> ${video.duration}
                </span>
            </div>
            <div class="video-controls">
                <button class="video-btn" onclick="markVideoCompleted(${videoIndex})">
                    <i class="fas fa-check"></i> تم المشاهدة
                </button>
                <button class="video-btn" onclick="nextVideo()">
                    <i class="fas fa-forward"></i> التالي
                </button>
            </div>
        </div>
    `;
    
    // Update lesson item active state
    document.querySelectorAll('.lesson-item').forEach((item, index) => {
        item.classList.toggle('active', index === videoIndex);
    });
    
    // Track video view
    trackVideoView(currentCourse, videoIndex);
}

function markVideoCompleted(videoIndex) {
    const course = coursesData[currentCourse];
    if (!course || !course.videos || !course.videos[videoIndex]) return;
    
    course.videos[videoIndex].completed = true;
    
    // Update UI
    updateLessonsList(course);
    
    // Save progress
    saveUserProgress();
    
    // Show completion message
    showNotification('تم تسجيل إكمال الدرس بنجاح!', 'success');
    
    // Auto-play next video
    setTimeout(() => {
        nextVideo();
    }, 2000);
}

function nextVideo() {
    const course = coursesData[currentCourse];
    if (!course || !course.videos) return;
    
    const nextIndex = currentVideoIndex + 1;
    if (nextIndex < course.videos.length) {
        loadVideo(nextIndex);
    } else {
        showNotification('تهانينا! لقد أكملت جميع دروس الدورة', 'success');
    }
}

function previousVideo() {
    const prevIndex = currentVideoIndex - 1;
    if (prevIndex >= 0) {
        loadVideo(prevIndex);
    }
}

// Progress tracking
function saveUserProgress() {
    userProgress[currentCourse] = coursesData[currentCourse];
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
}

function trackVideoView(courseId, videoIndex) {
    // Track video view for analytics
    console.log(`Video viewed: ${courseId} - Video ${videoIndex + 1}`);
}

// Course progress initialization
function initializeCourseProgress() {
    // Load saved progress
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
        
        // Update courses data with saved progress
        Object.keys(userProgress).forEach(courseId => {
            if (coursesData[courseId]) {
                coursesData[courseId] = { ...coursesData[courseId], ...userProgress[courseId] };
            }
        });
        
        // Update UI progress indicators
        updateCourseProgressUI();
    }
}

function updateCourseProgressUI() {
    Object.keys(coursesData).forEach(courseId => {
        const course = coursesData[courseId];
        const courseCard = document.querySelector(`[data-language="${courseId}"]`);
        
        if (courseCard && course.videos) {
            const completedVideos = course.videos.filter(video => video.completed).length;
            const totalVideos = course.videos.length;
            const progressPercentage = Math.round((completedVideos / totalVideos) * 100);
            
            // Update progress bar
            const progressFill = courseCard.querySelector('.progress-fill');
            const progressText = courseCard.querySelector('.progress-text');
            
            if (progressFill && progressText) {
                progressFill.style.width = `${progressPercentage}%`;
                progressText.textContent = `${progressPercentage}% مكتمل`;
            }
            
            // Update button text
            const courseButton = courseCard.querySelector('.course-button span');
            if (courseButton) {
                courseButton.textContent = progressPercentage > 0 ? 'متابعة التعلم' : 'ابدأ الدورة';
            }
        }
    });
}

// Keyboard shortcuts
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // ESC to close modal
        if (e.key === 'Escape') {
            closeModal();
            toggleSearch();
        }
        
        // Ctrl/Cmd + K to open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleSearch();
        }
        
        // Space to play/pause video (when modal is open)
        if (e.key === ' ' && document.getElementById('courseModal').classList.contains('active')) {
            e.preventDefault();
            // Toggle video play/pause
        }
        
        // Arrow keys for video navigation
        if (document.getElementById('courseModal').classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                previousVideo();
            } else if (e.key === 'ArrowRight') {
                nextVideo();
            }
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
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.course-card, .roadmap-step, .feature, .about-stats .stat').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function closeModal() {
    const modal = document.getElementById('courseModal');
    modal.classList.remove('active');
    modal.style.display = 'none';
    
    // Stop video playback
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.innerHTML = `
        <div class="video-placeholder">
            <i class="fas fa-play-circle"></i>
            <p>اختر درساً من القائمة لبدء المشاهدة</p>
        </div>
    `;
}

function toggleBookmark(courseId) {
    const index = bookmarkedCourses.indexOf(courseId);
    
    if (index > -1) {
        bookmarkedCourses.splice(index, 1);
        showNotification('تم إزالة الدورة من المفضلة', 'info');
    } else {
        bookmarkedCourses.push(courseId);
        showNotification('تم إضافة الدورة إلى المفضلة', 'success');
    }
    
    localStorage.setItem('bookmarkedCourses', JSON.stringify(bookmarkedCourses));
    updateBookmarkUI();
}

function updateBookmarkUI() {
    const bookmarkCount = document.querySelector('.bookmark-count');
    if (bookmarkCount) {
        bookmarkCount.textContent = bookmarkedCourses.length;
    }
    
    // Update bookmark buttons
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        const courseCard = btn.closest('.course-card');
        const courseId = courseCard.getAttribute('data-language');
        const icon = btn.querySelector('i');
        
        if (bookmarkedCourses.includes(courseId)) {
            icon.className = 'fas fa-bookmark';
            btn.style.color = '#ff6b6b';
        } else {
            icon.className = 'far fa-bookmark';
            btn.style.color = '';
        }
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function updateOnlineUsers() {
    const onlineUsersElement = document.getElementById('online-users');
    if (onlineUsersElement) {
        // Simulate dynamic user count
        const baseCount = 1200;
        const variation = Math.floor(Math.random() * 100);
        onlineUsersElement.textContent = (baseCount + variation).toLocaleString();
    }
    
    // Update every 30 seconds
    setTimeout(updateOnlineUsers, 30000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function loadMoreCourses() {
    // Implementation for loading more courses
    showNotification('جاري تحميل المزيد من الدورات...', 'info');
    
    // Simulate loading delay
    setTimeout(() => {
        showNotification('تم تحميل دورات إضافية!', 'success');
    }, 2000);
}

function previewCourse(courseId) {
    // Show course preview
    showNotification(`معاينة دورة ${coursesData[courseId]?.title || courseId}`, 'info');
}

function subscribeToPremium() {
    showNotification('سيتم توجيهك إلى صفحة الاشتراك قريباً', 'info');
}

function contactSupport() {
    window.open('https://wa.me/+201500461923?text=أحتاج مساعدة في أكاديميه ديفكس', '_blank');
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLanguage);
    showNotification('سيتم تطبيق تغيير اللغة قريباً', 'info');
}

function playIntroVideo() {
    // Play introduction video
    const modal = document.getElementById('courseModal');
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/UB1O30fR-EE?autoplay=1&rel=0" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    `;
    
    modal.classList.add('active');
    modal.style.display = 'flex';
}

function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'ar-SA';
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onstart = function() {
            isVoiceSearchActive = true;
            document.querySelector('.voice-search i').className = 'fas fa-microphone-slash';
            showNotification('جاري الاستماع...', 'info');
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('advanced-search').value = transcript;
            performSearch(transcript.toLowerCase());
        };
        
        recognition.onend = function() {
            isVoiceSearchActive = false;
            document.querySelector('.voice-search i').className = 'fas fa-microphone';
        };
        
        recognition.onerror = function(event) {
            showNotification('حدث خطأ في التعرف على الصوت', 'error');
            isVoiceSearchActive = false;
            document.querySelector('.voice-search i').className = 'fas fa-microphone';
        };
        
        recognition.start();
    } else {
        showNotification('المتصفح لا يدعم التعرف على الصوت', 'error');
    }
}

function toggleBookmarks() {
    if (bookmarkedCourses.length === 0) {
        showNotification('لا توجد دورات في المفضلة', 'info');
        return;
    }
    
    // Show bookmarked courses
    const bookmarkedCoursesHtml = bookmarkedCourses.map(courseId => {
        const course = coursesData[courseId];
        return `
            <div class="bookmark-item" onclick="openCourse('${courseId}')">
                <h5>${course.title}</h5>
                <p>${course.description}</p>
            </div>
        `;
    }).join('');
    
    showNotification(`المفضلة (${bookmarkedCourses.length}): ${bookmarkedCoursesHtml}`, 'info');
}

function shareCourse(courseId) {
    const course = coursesData[courseId];
    const shareText = `تعلم ${course.title} مع أكاديميه ديفكس - ${course.description}`;
    
    if (navigator.share) {
        navigator.share({
            title: `دورة ${course.title}`,
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('تم نسخ رابط الدورة', 'success');
        });
    }
}

// Add CSS for notifications
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 4px 20px var(--shadow);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        animation: slideInRight 0.3s ease-out;
    }
    
    .notification-success { border-left: 4px solid var(--success-color); }
    .notification-error { border-left: 4px solid var(--error-color); }
    .notification-info { border-left: 4px solid var(--primary-color); }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-color);
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .notification-close:hover {
        background: var(--border-color);
        color: var(--text-color);
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .lesson-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 10px;
        margin-bottom: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid var(--border-color);
    }
    
    .lesson-item:hover {
        background: var(--border-color);
        transform: translateX(-5px);
    }
    
    .lesson-item.active {
        background: var(--primary-color);
        color: white;
    }
    
    .lesson-item.completed {
        background: var(--success-color);
        color: white;
    }
    
    .lesson-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .lesson-number {
        width: 30px;
        height: 30px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .lesson-item.completed .lesson-number {
        background: var(--success-color);
    }
    
    .lesson-details h5 {
        margin-bottom: 0.25rem;
        font-weight: 600;
    }
    
    .lesson-duration {
        font-size: 0.8rem;
        opacity: 0.8;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    
    .lesson-status i {
        font-size: 1.2rem;
        opacity: 0.7;
    }
    
    .video-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        color: white;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    
    .video-info h4 {
        margin-bottom: 0.5rem;
    }
    
    .video-controls {
        display: flex;
        gap: 0.5rem;
    }
    
    .video-btn {
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .video-btn:hover {
        background: rgba(255,255,255,0.3);
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize everything when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}

