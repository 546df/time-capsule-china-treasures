
// 主要JavaScript功能
console.log('中华瑰宝回廊已加载');

// 朝代数据
const dynastiesData = [
    {
        id: 'shang',
        name: '商朝',
        period: '约公元前1600-1046年',
        description: '青铜文明的辉煌时代，甲骨文的发源地',
        treasureCount: 8
    },
    {
        id: 'zhou',
        name: '周朝',
        period: '公元前1046-256年',
        description: '礼乐文明的奠基时期，分封制的建立',
        treasureCount: 6
    },
    {
        id: 'qin',
        name: '秦朝',
        period: '公元前221-206年',
        description: '统一六国的辉煌时代，万里长城的修建',
        treasureCount: 4
    },
    {
        id: 'han',
        name: '汉朝',
        period: '公元前206-220年',
        description: '丝绸之路的开拓者，汉文化的形成',
        treasureCount: 7
    },
    {
        id: 'tang',
        name: '唐朝',
        period: '618-907年',
        description: '盛世王朝的文化巅峰，开放包容的时代',
        treasureCount: 9
    },
    {
        id: 'song',
        name: '宋朝',
        period: '960-1279年',
        description: '艺术与科技的黄金时代，瓷器工艺的巅峰',
        treasureCount: 8
    },
    {
        id: 'ming',
        name: '明朝',
        period: '1368-1644年',
        description: '海上丝绸之路的辉煌，紫禁城的建造',
        treasureCount: 6
    },
    {
        id: 'qing',
        name: '清朝',
        period: '1644-1912年',
        description: '多民族融合的盛世，古典文化的集大成',
        treasureCount: 5
    }
];

// 初始化朝代网格
function initDynastyGrid() {
    const container = document.getElementById('dynastyContainer');
    if (!container) return;

    container.innerHTML = '';
    
    dynastiesData.forEach(dynasty => {
        const card = document.createElement('a');
        card.href = `dynasty.html?id=${dynasty.id}`;
        card.className = 'dynasty-card';
        card.innerHTML = `
            <h3>${dynasty.name}</h3>
            <div class="period">${dynasty.period}</div>
            <div class="description">${dynasty.description}</div>
            <div style="margin-top: 1rem; color: #ffd700; font-size: 0.9rem;">
                ${dynasty.treasureCount} 件珍宝
            </div>
        `;
        container.appendChild(card);
    });
}

// 精品文物数据
const featuredTreasures = [
    {
        id: 1,
        name: '司母戊鼎',
        dynasty: '商朝',
        description: '世界最大的青铜鼎，重达832.84公斤',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: '越王勾践剑',
        dynasty: '春秋',
        description: '千年不锈的神奇宝剑，工艺精湛',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: '唐三彩骆驼载乐俑',
        dynasty: '唐朝',
        description: '丝绸之路文化交流的见证',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        name: '清明上河图',
        dynasty: '北宋',
        description: '描绘北宋汴京繁华景象的传世名画',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: '兵马俑',
        dynasty: '秦朝',
        description: '守护秦始皇陵的千军万马',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    }
];

// 初始化旋转画廊
function initRotatingGallery() {
    const track = document.getElementById('galleryTrack');
    if (!track) return;

    track.innerHTML = '';
    
    featuredTreasures.forEach(treasure => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${treasure.image}" alt="${treasure.name}">
            <div class="gallery-item-info">
                <h3>${treasure.name}</h3>
                <p>${treasure.dynasty} · ${treasure.description}</p>
            </div>
        `;
        track.appendChild(item);
    });

    // 画廊控制
    let currentIndex = 0;
    const items = track.children;
    const itemWidth = 320; // 300px + 20px margin

    function updateGallery() {
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    document.getElementById('prevBtn')?.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateGallery();
    });

    document.getElementById('nextBtn')?.addEventListener('click', () => {
        currentIndex = Math.min(items.length - 3, currentIndex + 1);
        updateGallery();
    });

    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % (items.length - 2);
        updateGallery();
    }, 4000);
}

// 统计数字动画
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        let current = 0;
        const increment = target / 100;
        const suffix = stat.textContent.replace(/[\d]/g, '');
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 20);
    });
}

// 滚动监听
function handleScroll() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initDynastyGrid();
    initRotatingGallery();
    
    // 观察统计区域，进入视口时开始动画
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(statsSection);
    }
    
    // 滚动监听
    window.addEventListener('scroll', handleScroll);
    
    // 平滑滚动
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
});
