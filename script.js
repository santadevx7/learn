// Course data with YouTube video links
const coursesData = {
    html: {
        title: "دورة HTML للمبتدئين",
        description: "تعلم أساسيات بناء صفحات الويب باستخدام HTML",
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
        description: "تعلم تصميم وتنسيق صفحات الويب باستخدام CSS",
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
        description: "تعلم البرمجة التفاعلية وتطوير تطبيقات الويب",
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
    java: {
        title: "دورة Java للمبتدئين",
        description: "تعلم البرمجة الكائنية وتطوير التطبيقات المتقدمة",
        lessons: [
            {
                title: "مقدمة في Java",
                duration: "30 دقيقة",
                videoId: "eIrMbAQSU34",
                description: "أساسيات لغة Java وبيئة التطوير"
            },
            {
                title: "الفئات والكائنات",
                duration: "45 دقيقة",
                videoId: "GoXwIVyNvX0",
                description: "فهم البرمجة الكائنية في Java"
            },
            {
                title: "الوراثة والتغليف",
                duration: "40 دقيقة",
                videoId: "xk4_1vDrzzo",
                description: "مفاهيم متقدمة في البرمجة الكائنية"
            },
            {
                title: "التعامل مع الملفات",
                duration: "35 دقيقة",
                videoId: "70qy6_gw1Hc",
                description: "قراءة وكتابة الملفات في Java"
            }
        ]
    },
    cpp: {
        title: "دورة C++ للمبتدئين",
        description: "تعلم البرمجة عالية الأداء وتطوير الألعاب",
        lessons: [
            {
                title: "أساسيات C++",
                duration: "35 دقيقة",
                videoId: "vLnPwxZdW4Y",
                description: "مقدمة في لغة C++ وخصائصها"
            },
            {
                title: "المؤشرات والمراجع",
                duration: "40 دقيقة",
                videoId: "zuegQmMdy8M",
                description: "فهم المؤشرات وإدارة الذاكرة"
            },
            {
                title: "الفئات والكائنات",
                duration: "45 دقيقة",
                videoId: "wN0x9eZLix4",
                description: "البرمجة الكائنية في C++"
            },
            {
                title: "STL والخوارزميات",
                duration: "50 دقيقة",
                videoId: "RRubcjpTkks",
                description: "استخدام مكتبة STL والخوارزميات"
            }
        ]
    },
    php: {
        title: "دورة PHP للمبتدئين",
        description: "تعلم تطوير الخادم وإنشاء مواقع ديناميكية",
        lessons: [
            {
                title: "مقدمة في PHP",
                duration: "25 دقيقة",
                videoId: "OK_JCtrrv-c",
                description: "أساسيات PHP وإعداد البيئة"
            },
            {
                title: "المتغيرات والدوال",
                duration: "30 دقيقة",
                videoId: "6EukZDFE_Zg",
                description: "التعامل مع المتغيرات والدوال"
            },
            {
                title: "قواعد البيانات MySQL",
                duration: "40 دقيقة",
                videoId: "9ylj9NR0Lcg",
                description: "ربط PHP بقواعد البيانات"
            },
            {
                title: "إنشاء نظام تسجيل الدخول",
                duration: "45 دقيقة",
                videoId: "gCo6JqGMi30",
                description: "بناء نظام مصادقة كامل"
            }
        ]
    },
    react: {
        title: "دورة React للمبتدئين",
        description: "تعلم بناء واجهات المستخدم التفاعلية",
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
    nodejs: {
        title: "دورة Node.js للمبتدئين",
        description: "تعلم تطوير الخادم باستخدام JavaScript",
        lessons: [
            {
                title: "مقدمة في Node.js",
                duration: "25 دقيقة",
                videoId: "TlB_eWDSMt4",
                description: "أساسيات Node.js وبيئة التشغيل"
            },
            {
                title: "النمائط والحزم",
                duration: "30 دقيقة",
                videoId: "ENrzD9HAZK4",
                description: "استخدام NPM والحزم"
            },
            {
                title: "إنشاء خادم HTTP",
                duration: "35 دقيقة",
                videoId: "VShtPwEkDD0",
                description: "بناء خادم ويب بسيط"
            },
            {
                title: "Express.js Framework",
                duration: "40 دقيقة",
                videoId: "L72fhGm1tfE",
                description: "استخدام إطار العمل Express"
            }
        ]
    },
    swift: {
        title: "دورة Swift للمبتدئين",
        description: "تعلم تطوير تطبيقات iOS و macOS",
        lessons: [
            {
                title: "أساسيات Swift",
                duration: "30 دقيقة",
                videoId: "comQ1-x2a1Q",
                description: "مقدمة في لغة Swift"
            },
            {
                title: "المتغيرات والثوابت",
                duration: "25 دقيقة",
                videoId: "mhE-Mp07RTo",
                description: "التعامل مع البيانات في Swift"
            },
            {
                title: "الدوال والإغلاقات",
                duration: "35 دقيقة",
                videoId: "KCgYDCKqato",
                description: "البرمجة الوظيفية في Swift"
            },
            {
                title: "تطوير تطبيق iOS",
                duration: "60 دقيقة",
                videoId: "09TeUXjzpKs",
                description: "إنشاء أول تطبيق iOS"
            }
        ]
    },
    kotlin: {
        title: "دورة Kotlin للمبتدئين",
        description: "تعلم تطوير تطبيقات Android الحديثة",
        lessons: [
            {
                title: "مقدمة في Kotlin",
                duration: "25 دقيقة",
                videoId: "F9UC9DY-vIU",
                description: "أساسيات لغة Kotlin"
            },
            {
                title: "البرمجة الكائنية",
                duration: "35 دقيقة",
                videoId: "6P20npkvcb8",
                description: "الفئات والكائنات في Kotlin"
            },
            {
                title: "تطوير تطبيق Android",
                duration: "50 دقيقة",
                videoId: "BCSlZIUj18Y",
                description: "إنشاء تطبيق Android بـ Kotlin"
            },
            {
                title: "واجهات المستخدم",
                duration: "45 دقيقة",
                videoId: "EOfCEhWq8sg",
                description: "تصميم واجهات المستخدم"
            }
        ]
    },
    go: {
        title: "دورة Go للمبتدئين",
        description: "تعلم البرمجة عالية الأداء للخوادم",
        lessons: [
            {
                title: "أساسيات Go",
                duration: "30 دقيقة",
                videoId: "YS4e4q9oBaU",
                description: "مقدمة في لغة Go"
            },
            {
                title: "الدوال والحزم",
                duration: "35 دقيقة",
                videoId: "8uiZC0l4Ajw",
                description: "تنظيم الكود في Go"
            },
            {
                title: "Goroutines والتزامن",
                duration: "40 دقيقة",
                videoId: "LvgVSSpwND8",
                description: "البرمجة المتزامنة في Go"
            },
            {
                title: "إنشاء خادم ويب",
                duration: "45 دقيقة",
                videoId: "yyUHQIec83I",
                description: "بناء خادم HTTP بـ Go"
            }
        ]
    }
};

// DOM Elements
const modal = document.getElementById('courseModal');
const modalTitle = document.getElementById('modalTitle');
const videoPlayer = document.getElementById('videoPlayer');
const lessonsList = document.getElementById('lessonsList');

// Current course and lesson
let currentCourse = null;
let currentLesson = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
});

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
        const sectionTop = section.offsetTop - 100;
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
    // Animate course cards on scroll
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
    
    // Observe course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Open course modal
function openCourse(courseKey) {
    const course = coursesData[courseKey];
    
    if (!course) {
        console.error('Course not found:', courseKey);
        return;
    }
    
    currentCourse = courseKey;
    modalTitle.textContent = course.title;
    
    // Clear previous content
    videoPlayer.innerHTML = `
        <div class="video-placeholder">
            <i class="fas fa-play-circle"></i>
            <p>اختر درساً من القائمة لبدء المشاهدة</p>
        </div>
    `;
    
    // Populate lessons list
    lessonsList.innerHTML = '';
    
    course.lessons.forEach((lesson, index) => {
        const lessonElement = document.createElement('div');
        lessonElement.className = 'lesson-item';
        lessonElement.innerHTML = `
            <div>
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-duration">${lesson.duration}</div>
            </div>
            <button class="play-button" onclick="playLesson(${index})">
                <i class="fas fa-play"></i>
            </button>
        `;
        
        lessonsList.appendChild(lessonElement);
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Play specific lesson
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
        <div style="margin-top: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
            <h4>${lesson.title}</h4>
            <p style="color: #666; margin-top: 0.5rem;">${lesson.description}</p>
        </div>
    `;
    
    // Update lesson items to show current playing
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((item, index) => {
        if (index === lessonIndex) {
            item.style.background = '#e3f2fd';
            item.style.borderLeft = '4px solid #667eea';
        } else {
            item.style.background = '#f8f9fa';
            item.style.borderLeft = 'none';
        }
    });
}

// Close modal
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

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (modal.style.display === 'block') {
        if (event.key === 'Escape') {
            closeModal();
        } else if (event.key === 'ArrowUp' && currentLesson > 0) {
            playLesson(currentLesson - 1);
        } else if (event.key === 'ArrowDown' && currentCourse && currentLesson < coursesData[currentCourse].lessons.length - 1) {
            playLesson(currentLesson + 1);
        }
    }
});

// Smooth scrolling for CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#courses').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

// Search functionality (bonus feature)
function searchCourses(query) {
    const courseCards = document.querySelectorAll('.course-card');
    const searchTerm = query.toLowerCase();
    
    courseCards.forEach(card => {
        const title = card.querySelector('.course-title').textContent.toLowerCase();
        const description = card.querySelector('.course-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Progress tracking (bonus feature)
function trackProgress(courseKey, lessonIndex) {
    const progressKey = `progress_${courseKey}`;
    let progress = JSON.parse(localStorage.getItem(progressKey)) || [];
    
    if (!progress.includes(lessonIndex)) {
        progress.push(lessonIndex);
        localStorage.setItem(progressKey, JSON.stringify(progress));
    }
    
    updateProgressDisplay(courseKey);
}

function updateProgressDisplay(courseKey) {
    const progress = JSON.parse(localStorage.getItem(`progress_${courseKey}`)) || [];
    const totalLessons = coursesData[courseKey]?.lessons.length || 0;
    const completedLessons = progress.length;
    const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    
    // Update progress bar if exists
    const progressBar = document.querySelector(`[data-language="${courseKey}"] .progress-bar`);
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }
}

// Initialize progress for all courses
Object.keys(coursesData).forEach(courseKey => {
    updateProgressDisplay(courseKey);
});

// Console welcome message
console.log(`
🎓 مرحباً بك في أكاديمية البرمجة!
📚 ${Object.keys(coursesData).length} دورة متاحة
🎯 تعلم من الصفر إلى الاحتراف
💻 جميع الدورات مجانية ومتاحة الآن

للمطورين: يمكنك الوصول إلى بيانات الدورات عبر coursesData
`);

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { coursesData, openCourse, playLesson, closeModal };
}

