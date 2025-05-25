
// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    console.log('中华瑰宝回廊已加载');
    
    // 初始化所有功能
    initializeNavigation();
    initializeScrollEffects();
    loadTreasuresData();
});

// 导航功能
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage.replace('.html', ''))) {
            link.classList.add('active');
        }
    });
}

// 滚动效果
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// 加载文物数据
async function loadTreasuresData() {
    try {
        const response = await fetch('data/treasures.json');
        const data = await response.json();
        window.treasuresData = data.treasures;
        
        // 如果在首页，初始化特色展示
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            initializeHomePage();
        }
    } catch (error) {
        console.error('加载文物数据失败:', error);
        // 使用备用数据
        window.treasuresData = getBackupTreasures();
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
            initializeHomePage();
        }
    }
}

// 备用文物数据
function getBackupTreasures() {
    return [
        {
            id: 1,
            name: "司母戊鼎",
            dynasty: "shang",
            dynastyName: "商朝",
            category: "bronze",
            level: "national",
            description: "世界上现存最大最重的青铜礼器",
            image: "/placeholder.svg"
        },
        {
            id: 2,
            name: "越王勾践剑",
            dynasty: "zhou",
            dynastyName: "春秋时期",
            category: "weapons",
            level: "national",
            description: "千年不锈的神奇宝剑",
            image: "/placeholder.svg"
        },
        {
            id: 3,
            name: "兵马俑",
            dynasty: "qin",
            dynastyName: "秦朝",
            category: "stone",
            level: "national",
            description: "世界第八大奇迹",
            image: "/placeholder.svg"
        }
    ];
}

// 首页初始化
function initializeHomePage() {
    initializeRotatingTreasures();
    initializeFeaturedCarousel();
    initializeDynastiesGrid();
}

// 旋转文物展示
function initializeRotatingTreasures() {
    const container = document.getElementById('rotatingTreasures');
    if (!container || !window.treasuresData) return;
    
    const featuredTreasures = window.treasuresData.slice(0, 6);
    
    featuredTreasures.forEach((treasure, index) => {
        const treasureElement = document.createElement('div');
        treasureElement.className = 'rotating-treasure';
        treasureElement.style.cssText = `
            position: absolute;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(45deg, #ffd700, #ffb347);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            font-weight: bold;
            font-size: 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: orbit ${6 + index}s linear infinite;
            transform-origin: 200px 200px;
        `;
        
        const angle = (index * 60) * (Math.PI / 180);
        const x = 200 + 120 * Math.cos(angle);
        const y = 200 + 120 * Math.sin(angle);
        
        treasureElement.style.left = x + 'px';
        treasureElement.style.top = y + 'px';
        treasureElement.textContent = treasure.name.substring(0, 4);
        
        treasureElement.addEventListener('click', () => {
            showTreasureModal(treasure);
        });
        
        container.appendChild(treasureElement);
    });
}

// 特色轮播
function initializeFeaturedCarousel() {
    const track = document.getElementById('carouselTrack');
    const indicators = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!track || !window.treasuresData) return;
    
    const featuredTreasures = window.treasuresData.slice(0, 5);
    let currentSlide = 0;
    
    // 创建轮播项
    featuredTreasures.forEach((treasure, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
            <img src="${treasure.image}" alt="${treasure.name}" loading="lazy">
            <div class="carousel-content">
                <div class="treasure-level">${getLevelText(treasure.level)}</div>
                <h3>${treasure.name}</h3>
                <p class="treasure-dynasty">${treasure.dynastyName}</p>
                <p class="treasure-desc">${treasure.description}</p>
                <button class="learn-more-btn" onclick="showTreasureModal(${JSON.stringify(treasure).replace(/"/g, '&quot;')})">
                    了解更多
                </button>
            </div>
        `;
        track.appendChild(slide);
        
        // 创建指示器
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });
    
    // 轮播控制
    function goToSlide(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // 更新指示器
        indicators.querySelectorAll('.indicator').forEach((ind, i) => {
            ind.classList.toggle('active', i === currentSlide);
        });
    }
    
    // 按钮事件
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + featuredTreasures.length) % featuredTreasures.length;
        goToSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % featuredTreasures.length;
        goToSlide(currentSlide);
    });
    
    // 自动轮播
    setInterval(() => {
        currentSlide = (currentSlide + 1) % featuredTreasures.length;
        goToSlide(currentSlide);
    }, 5000);
}

// 朝代网格
function initializeDynastiesGrid() {
    const grid = document.getElementById('dynastiesGrid');
    if (!grid) return;
    
    const dynasties = [
        { id: 'shang', name: '商朝', period: '约公元前1600-1046年', description: '青铜文明的辉煌时代', count: 5 },
        { id: 'zhou', name: '周朝', period: '公元前1046-256年', description: '礼乐文明的奠基时期', count: 4 },
        { id: 'qin', name: '秦朝', period: '公元前221-206年', description: '统一六国的辉煌时代', count: 3 },
        { id: 'han', name: '汉朝', period: '公元前206-220年', description: '丝绸之路的开拓者', count: 6 },
        { id: 'tang', name: '唐朝', period: '618-907年', description: '盛世王朝的文化巅峰', count: 8 },
        { id: 'song', name: '宋朝', period: '960-1279年', description: '艺术与科技的黄金时代', count: 7 },
        { id: 'ming', name: '明朝', period: '1368-1644年', description: '海上丝绸之路的辉煌', count: 6 },
        { id: 'qing', name: '清朝', period: '1644-1912年', description: '多民族融合的盛世', count: 5 }
    ];
    
    dynasties.forEach(dynasty => {
        const card = document.createElement('div');
        card.className = 'dynasty-card';
        card.innerHTML = `
            <div class="dynasty-name">${dynasty.name}</div>
            <div class="dynasty-period">${dynasty.period}</div>
            <div class="dynasty-description">${dynasty.description}</div>
            <div class="dynasty-count">${dynasty.count} 件文物</div>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = `dynasty.html?id=${dynasty.id}`;
        });
        
        grid.appendChild(card);
    });
}

// 工具函数
function getLevelText(level) {
    const levels = {
        'national': '国宝级',
        'first': '一级文物',
        'second': '二级文物',
        'third': '三级文物'
    };
    return levels[level] || '珍贵文物';
}

// 显示文物详情模态框
function showTreasureModal(treasure) {
    // 这个函数会在各个页面中实现
    console.log('显示文物详情:', treasure.name);
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes orbit {
        0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
    }
    
    .learn-more-btn {
        background: linear-gradient(45deg, #ffd700, #ffb347);
        color: #000;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 1rem;
    }
    
    .learn-more-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
    }
    
    .treasure-level {
        background: rgba(255, 215, 0, 0.2);
        color: #ffd700;
        padding: 0.25rem 0.5rem;
        border-radius: 15px;
        font-size: 0.8rem;
        display: inline-block;
        margin-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);
