
// 弹幕系统
class BarrageSystem {
    constructor() {
        this.container = document.getElementById('barrage-container');
        this.comments = [
            '太震撼了！', '中华文明博大精深！', '这就是文化自信！', '穿越千年的美！',
            '工艺太精湛了！', '古人的智慧！', '传承千年的技艺！', '文物会说话！',
            '每一件都是瑰宝！', '历史的厚重感！', '艺术的巅峰！', '文明的结晶！',
            '匠心独运！', '巧夺天工！', '惊叹不已！', '叹为观止！',
            '中华之光！', '民族骄傲！', '文化瑰宝！', '历史见证！',
            '精美绝伦！', '技艺超群！', '美轮美奂！', '鬼斧神工！'
        ];
        this.isActive = true;
        this.maxBarrages = 15;
        this.currentBarrages = [];
        
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        // 创建弹幕
        this.createBarrage();
        
        // 定期创建新弹幕
        setInterval(() => {
            if (this.isActive && this.currentBarrages.length < this.maxBarrages) {
                this.createBarrage();
            }
        }, 2000 + Math.random() * 3000);
        
        // 清理过期弹幕
        setInterval(() => {
            this.cleanupBarrages();
        }, 1000);
    }
    
    createBarrage() {
        if (!this.container) return;
        
        const comment = this.comments[Math.floor(Math.random() * this.comments.length)];
        const barrage = document.createElement('div');
        
        barrage.className = 'barrage-item';
        barrage.textContent = comment;
        
        // 随机样式
        const styles = this.getRandomStyles();
        Object.assign(barrage.style, styles);
        
        // 随机类名
        const classes = this.getRandomClasses();
        barrage.className += ' ' + classes.join(' ');
        
        // 设置位置和动画
        const top = Math.random() * 60 + 10; // 10% to 70%
        barrage.style.top = top + '%';
        
        const duration = 8 + Math.random() * 7; // 8-15秒
        barrage.style.animationDuration = duration + 's';
        
        // 添加到容器
        this.container.appendChild(barrage);
        this.currentBarrages.push({
            element: barrage,
            startTime: Date.now(),
            duration: duration * 1000
        });
        
        // 自动移除
        setTimeout(() => {
            if (barrage.parentNode) {
                barrage.parentNode.removeChild(barrage);
            }
        }, duration * 1000);
    }
    
    getRandomStyles() {
        const colors = [
            'rgba(255, 215, 0, 0.8)',
            'rgba(255, 179, 71, 0.8)',
            'rgba(255, 107, 53, 0.8)',
            'rgba(255, 255, 255, 0.7)',
            'rgba(135, 206, 235, 0.8)',
            'rgba(255, 182, 193, 0.8)',
            'rgba(144, 238, 144, 0.8)'
        ];
        
        return {
            color: colors[Math.floor(Math.random() * colors.length)],
            fontSize: (12 + Math.random() * 4) + 'px',
            fontWeight: Math.random() > 0.7 ? 'bold' : 'normal'
        };
    }
    
    getRandomClasses() {
        const classes = [];
        
        // 速度类
        const speeds = ['speed-slow', 'speed-normal', 'speed-fast'];
        classes.push(speeds[Math.floor(Math.random() * speeds.length)]);
        
        // 特效类
        if (Math.random() > 0.7) {
            classes.push('glow');
        }
        
        // 大小类
        if (Math.random() > 0.8) {
            classes.push('large');
        } else if (Math.random() > 0.9) {
            classes.push('small');
        }
        
        return classes;
    }
    
    cleanupBarrages() {
        const now = Date.now();
        this.currentBarrages = this.currentBarrages.filter(barrage => {
            const elapsed = now - barrage.startTime;
            if (elapsed >= barrage.duration) {
                if (barrage.element.parentNode) {
                    barrage.element.parentNode.removeChild(barrage.element);
                }
                return false;
            }
            return true;
        });
    }
    
    pause() {
        this.isActive = false;
        this.container.classList.add('barrage-paused');
    }
    
    resume() {
        this.isActive = true;
        this.container.classList.remove('barrage-paused');
    }
    
    clear() {
        this.currentBarrages.forEach(barrage => {
            if (barrage.element.parentNode) {
                barrage.element.parentNode.removeChild(barrage.element);
            }
        });
        this.currentBarrages = [];
    }
    
    addCustomComment(comment) {
        if (comment && comment.trim()) {
            this.comments.push(comment.trim());
        }
    }
}

// 初始化弹幕系统
document.addEventListener('DOMContentLoaded', function() {
    window.barrageSystem = new BarrageSystem();
    
    // 页面可见性API - 页面不可见时暂停弹幕
    document.addEventListener('visibilitychange', function() {
        if (window.barrageSystem) {
            if (document.hidden) {
                window.barrageSystem.pause();
            } else {
                window.barrageSystem.resume();
            }
        }
    });
});

// 导出弹幕系统供其他脚本使用
window.BarrageSystem = BarrageSystem;
