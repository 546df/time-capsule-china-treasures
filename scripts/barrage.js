
// 弹幕系统
class BarrageSystem {
    constructor() {
        this.container = document.getElementById('barrage-container');
        this.comments = [
            '太震撼了！', '中华文明博大精深', '这就是文化自信', '穿越千年的美',
            '工艺太精湛了', '古人的智慧', '传承千年的技艺', '文物会说话',
            '每一件都是瑰宝', '历史的厚重感', '艺术的巅峰', '文明的结晶',
            '华夏文化源远流长', '匠心独运', '巧夺天工', '国之重器',
            '见证历史变迁', '文化的传承', '智慧的结晶', '艺术的瑰宝',
            '千年不朽', '精美绝伦', '叹为观止', '无价之宝',
            '历史的见证', '文明的印记', '时代的象征', '民族的骄傲'
        ];
        this.isActive = true;
        this.init();
    }

    init() {
        if (!this.container) return;
        
        // 每3秒生成一条弹幕
        setInterval(() => {
            if (this.isActive) {
                this.createBarrage();
            }
        }, 3000);

        // 鼠标悬停暂停弹幕
        document.addEventListener('mouseenter', () => {
            this.container.classList.add('barrage-paused');
        });

        document.addEventListener('mouseleave', () => {
            this.container.classList.remove('barrage-paused');
        });
    }

    createBarrage() {
        const comment = this.comments[Math.floor(Math.random() * this.comments.length)];
        const barrage = document.createElement('div');
        barrage.className = 'barrage-item';
        barrage.textContent = comment;
        
        // 随机垂直位置（避免导航栏区域）
        const top = Math.random() * 70 + 15; // 15% 到 85% 的位置
        barrage.style.top = `${top}%`;
        
        // 随机动画持续时间
        const duration = Math.random() * 4 + 6; // 6-10秒
        barrage.style.animationDuration = `${duration}s`;
        
        this.container.appendChild(barrage);
        
        // 动画结束后移除元素
        setTimeout(() => {
            if (barrage.parentNode) {
                barrage.parentNode.removeChild(barrage);
            }
        }, duration * 1000);
    }

    toggle() {
        this.isActive = !this.isActive;
    }

    pause() {
        this.isActive = false;
        this.container.classList.add('barrage-paused');
    }

    resume() {
        this.isActive = true;
        this.container.classList.remove('barrage-paused');
    }
}

// 初始化弹幕系统
document.addEventListener('DOMContentLoaded', () => {
    const barrageSystem = new BarrageSystem();
    
    // 暴露到全局，方便其他脚本控制
    window.barrageSystem = barrageSystem;
});
