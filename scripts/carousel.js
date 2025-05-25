// 轮播图功能
class CarouselSystem {
    constructor() {
        this.init();
    }

    init() {
        // 英雄区域背景轮播
        this.initHeroCarousel();
        
        // 文物画廊轮播
        this.initGalleryCarousel();
    }

    initHeroCarousel() {
        const heroBackgrounds = [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop',
            'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop'
        ];

        const heroBackground = document.querySelector('.hero-background');
        if (!heroBackground) return;

        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % heroBackgrounds.length;
            heroBackground.style.backgroundImage = `url('${heroBackgrounds[currentIndex]}')`;
        }, 8000);
    }

    initGalleryCarousel() {
        // 这个功能已在main.js中实现
        console.log('Gallery carousel initialized in main.js');
    }
}

// 视差滚动效果
class ParallaxEffect {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
}

// 页面加载动画
class LoadingAnimation {
    constructor() {
        this.init();
    }

    init() {
        // 添加淡入动画
        document.addEventListener('DOMContentLoaded', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 1s ease-in-out';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // 滚动时的元素动画
        this.observeElements();
    }

    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                }
            });
        }, observerOptions);

        // 观察需要动画的元素
        const animatedElements = document.querySelectorAll('.dynasty-card, .gallery-item, .stat-item');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-scrolled {
        background: rgba(0, 0, 0, 0.95) !important;
        box-shadow: 0 2px 20px rgba(255, 215, 0, 0.3);
    }
`;
document.head.appendChild(style);

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    new CarouselSystem();
    new ParallaxEffect();
    new LoadingAnimation();
});
