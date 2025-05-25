
// 轮播功能增强
class CarouselEnhanced {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = {
            autoPlay: true,
            autoPlayInterval: 5000,
            showIndicators: true,
            showControls: true,
            loop: true,
            transition: 'slide', // slide, fade, scale
            ...options
        };
        
        this.currentIndex = 0;
        this.slides = [];
        this.isPlaying = false;
        this.autoPlayTimer = null;
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        this.setupSlides();
        this.setupControls();
        this.setupIndicators();
        this.setupTouchEvents();
        
        if (this.options.autoPlay) {
            this.startAutoPlay();
        }
    }
    
    setupSlides() {
        const slides = this.container.querySelectorAll('.carousel-slide');
        this.slides = Array.from(slides);
        
        if (this.slides.length === 0) return;
        
        // 设置初始状态
        this.slides.forEach((slide, index) => {
            slide.style.display = index === 0 ? 'block' : 'none';
            slide.style.opacity = index === 0 ? '1' : '0';
        });
    }
    
    setupControls() {
        if (!this.options.showControls) return;
        
        const prevBtn = this.container.querySelector('.carousel-btn.prev');
        const nextBtn = this.container.querySelector('.carousel-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
        }
    }
    
    setupIndicators() {
        if (!this.options.showIndicators) return;
        
        const indicators = this.container.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goTo(index));
        });
    }
    
    setupTouchEvents() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            
            // 水平滑动且滑动距离足够
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.prev();
                } else {
                    this.next();
                }
            }
        });
    }
    
    goTo(index) {
        if (index < 0 || index >= this.slides.length) return;
        
        const oldIndex = this.currentIndex;
        this.currentIndex = index;
        
        this.transition(oldIndex, this.currentIndex);
        this.updateIndicators();
        
        if (this.options.autoPlay) {
            this.resetAutoPlay();
        }
    }
    
    next() {
        const nextIndex = this.options.loop 
            ? (this.currentIndex + 1) % this.slides.length
            : Math.min(this.currentIndex + 1, this.slides.length - 1);
        
        this.goTo(nextIndex);
    }
    
    prev() {
        const prevIndex = this.options.loop
            ? (this.currentIndex - 1 + this.slides.length) % this.slides.length
            : Math.max(this.currentIndex - 1, 0);
        
        this.goTo(prevIndex);
    }
    
    transition(fromIndex, toIndex) {
        const fromSlide = this.slides[fromIndex];
        const toSlide = this.slides[toIndex];
        
        if (!fromSlide || !toSlide) return;
        
        switch (this.options.transition) {
            case 'fade':
                this.fadeTransition(fromSlide, toSlide);
                break;
            case 'scale':
                this.scaleTransition(fromSlide, toSlide);
                break;
            default:
                this.slideTransition(fromSlide, toSlide, fromIndex < toIndex);
        }
    }
    
    slideTransition(fromSlide, toSlide, isNext) {
        const track = this.container.querySelector('.carousel-track');
        if (track) {
            track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        } else {
            // 备用方案
            fromSlide.style.display = 'none';
            toSlide.style.display = 'block';
        }
    }
    
    fadeTransition(fromSlide, toSlide) {
        toSlide.style.display = 'block';
        toSlide.style.opacity = '0';
        
        // 淡入效果
        setTimeout(() => {
            fromSlide.style.opacity = '0';
            toSlide.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            fromSlide.style.display = 'none';
            fromSlide.style.opacity = '1';
        }, 500);
    }
    
    scaleTransition(fromSlide, toSlide) {
        toSlide.style.display = 'block';
        toSlide.style.transform = 'scale(0.8)';
        toSlide.style.opacity = '0';
        
        setTimeout(() => {
            fromSlide.style.transform = 'scale(1.2)';
            fromSlide.style.opacity = '0';
            toSlide.style.transform = 'scale(1)';
            toSlide.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            fromSlide.style.display = 'none';
            fromSlide.style.transform = 'scale(1)';
            fromSlide.style.opacity = '1';
        }, 500);
    }
    
    updateIndicators() {
        const indicators = this.container.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    startAutoPlay() {
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.autoPlayTimer = setInterval(() => {
            this.next();
        }, this.options.autoPlayInterval);
    }
    
    stopAutoPlay() {
        if (!this.isPlaying) return;
        
        this.isPlaying = false;
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }
    
    resetAutoPlay() {
        if (this.options.autoPlay) {
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    }
    
    // 添加鼠标悬停暂停功能
    addHoverPause() {
        this.container.addEventListener('mouseenter', () => {
            this.stopAutoPlay();
        });
        
        this.container.addEventListener('mouseleave', () => {
            if (this.options.autoPlay) {
                this.startAutoPlay();
            }
        });
    }
}

// 初始化轮播
document.addEventListener('DOMContentLoaded', function() {
    // 如果页面有轮播容器，自动初始化
    const carouselContainer = document.getElementById('featuredCarousel');
    if (carouselContainer) {
        window.carousel = new CarouselEnhanced('featuredCarousel', {
            autoPlay: true,
            autoPlayInterval: 5000,
            transition: 'slide'
        });
        
        // 添加鼠标悬停暂停
        window.carousel.addHoverPause();
    }
});

// 导出轮播类
window.CarouselEnhanced = CarouselEnhanced;
