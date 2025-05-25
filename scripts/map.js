
// 地图页面功能
const provincesData = {
    '河南': {
        name: '河南省',
        description: '中华文明的重要发源地',
        treasures: [
            {
                name: '司母戊鼎',
                location: '安阳',
                dynasty: '商朝',
                description: '世界最大的青铜鼎，重达832.84公斤'
            },
            {
                name: '妇好鸮尊',
                location: '安阳',
                dynasty: '商朝',
                description: '商代青铜酒器，造型精美'
            },
            {
                name: '甲骨文',
                location: '安阳',
                dynasty: '商朝',
                description: '中国最早的文字记录'
            }
        ]
    },
    '陕西': {
        name: '陕西省',
        description: '十三朝古都，文物荟萃之地',
        treasures: [
            {
                name: '兵马俑',
                location: '西安',
                dynasty: '秦朝',
                description: '守护秦始皇陵的千军万马'
            },
            {
                name: '唐三彩',
                location: '西安',
                dynasty: '唐朝',
                description: '盛唐时期的陶瓷艺术杰作'
            },
            {
                name: '何家村金银器',
                location: '西安',
                dynasty: '唐朝',
                description: '唐代金银工艺的巅峰之作'
            }
        ]
    },
    '北京': {
        name: '北京市',
        description: '明清两朝首都，皇家文物集中地',
        treasures: [
            {
                name: '永乐大典',
                location: '故宫',
                dynasty: '明朝',
                description: '世界最大的百科全书'
            },
            {
                name: '翡翠白菜',
                location: '故宫',
                dynasty: '清朝',
                description: '清代玉雕艺术精品'
            },
            {
                name: '九龙壁',
                location: '北海公园',
                dynasty: '清朝',
                description: '皇家建筑装饰艺术'
            }
        ]
    },
    '甘肃': {
        name: '甘肃省',
        description: '丝绸之路的重要节点',
        treasures: [
            {
                name: '马踏飞燕',
                location: '武威',
                dynasty: '汉朝',
                description: '汉代青铜艺术杰作，中国旅游标志'
            },
            {
                name: '敦煌壁画',
                location: '敦煌',
                dynasty: '唐朝',
                description: '佛教艺术的宝库'
            }
        ]
    },
    '山东': {
        name: '山东省',
        description: '齐鲁文化的发源地',
        treasures: [
            {
                name: '大汶口文化陶器',
                location: '泰安',
                dynasty: '新石器时代',
                description: '史前文化的重要遗存'
            },
            {
                name: '孔子画像石',
                location: '曲阜',
                dynasty: '汉朝',
                description: '儒家文化的艺术体现'
            }
        ]
    },
    '湖南': {
        name: '湖南省',
        description: '楚文化的重要传承地',
        treasures: [
            {
                name: '马王堆汉墓帛书',
                location: '长沙',
                dynasty: '汉朝',
                description: '珍贵的古代文献资料'
            },
            {
                name: '辛追夫人',
                location: '长沙',
                dynasty: '汉朝',
                description: '保存完好的汉代女尸'
            }
        ]
    }
};

class MapViewer {
    constructor() {
        this.currentProvince = null;
        this.init();
    }

    init() {
        this.renderProvinceButtons();
        this.showInitialInfo();
    }

    renderProvinceButtons() {
        const container = document.getElementById('provinceButtons');
        if (!container) return;

        container.innerHTML = '';

        Object.keys(provincesData).forEach(provinceKey => {
            const province = provincesData[provinceKey];
            const button = document.createElement('button');
            button.className = 'province-btn';
            button.textContent = province.name;
            button.dataset.province = provinceKey;
            
            button.addEventListener('click', () => {
                this.selectProvince(provinceKey);
            });
            
            container.appendChild(button);
        });
    }

    selectProvince(provinceKey) {
        // 更新按钮状态
        document.querySelectorAll('.province-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const selectedBtn = document.querySelector(`[data-province="${provinceKey}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('active');
        }

        // 显示省份信息
        this.showProvinceInfo(provinceKey);
        this.currentProvince = provinceKey;
    }

    showProvinceInfo(provinceKey) {
        const province = provincesData[provinceKey];
        const infoContainer = document.getElementById('mapInfo');
        
        if (!infoContainer || !province) return;

        infoContainer.innerHTML = `
            <h3>${province.name}</h3>
            <p style="color: #e0e0e0; margin-bottom: 2rem; text-align: center;">
                ${province.description}
            </p>
            <div class="province-treasures">
                ${province.treasures.map(treasure => this.createTreasureCard(treasure)).join('')}
            </div>
        `;
    }

    createTreasureCard(treasure) {
        return `
            <div class="province-treasure">
                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=150&fit=crop" alt="${treasure.name}">
                <h4>${treasure.name}</h4>
                <div class="location">${treasure.location} · ${treasure.dynasty}</div>
                <div class="description">${treasure.description}</div>
            </div>
        `;
    }

    showInitialInfo() {
        const infoContainer = document.getElementById('mapInfo');
        if (!infoContainer) return;

        infoContainer.innerHTML = `
            <h3>中华文物地图</h3>
            <p style="color: #e0e0e0; margin-bottom: 2rem; text-align: center;">
                点击下方省份按钮，探索该地区的珍贵文物
            </p>
            <div class="map-legend">
                <div class="legend-item">
                    <div class="legend-color shang"></div>
                    <span>商朝文物</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color zhou"></div>
                    <span>周朝文物</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color qin"></div>
                    <span>秦朝文物</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color han"></div>
                    <span>汉朝文物</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color tang"></div>
                    <span>唐朝文物</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color song"></div>
                    <span>宋朝文物</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color ming"></div>
                    <span>明朝文物</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color qing"></div>
                    <span>清朝文物</span>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem; color: #ccc;">
                <p>🗺️ 互动式地图功能</p>
                <p>探索中华大地上的文物宝藏分布</p>
            </div>
        `;
    }
}

// 地图动画效果
class MapAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.addHoverEffects();
        this.addScrollAnimations();
    }

    addHoverEffects() {
        // 为省份按钮添加悬停效果
        document.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('province-btn')) {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 215, 0, 0.3)';
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('province-btn') && !e.target.classList.contains('active')) {
                e.target.style.transform = '';
                e.target.style.boxShadow = '';
            }
        });
    }

    addScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, {
            threshold: 0.1
        });

        // 观察需要动画的元素
        const mapElements = document.querySelectorAll('.map-container, .map-info');
        mapElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }
}

// 统计信息
class MapStatistics {
    constructor() {
        this.totalTreasures = this.calculateTotalTreasures();
        this.init();
    }

    calculateTotalTreasures() {
        let total = 0;
        Object.values(provincesData).forEach(province => {
            total += province.treasures.length;
        });
        return total;
    }

    init() {
        this.addStatisticsToMap();
    }

    addStatisticsToMap() {
        const mapCanvas = document.getElementById('mapCanvas');
        if (!mapCanvas) return;

        // 在地图画布中添加统计信息
        const statsOverlay = document.createElement('div');
        statsOverlay.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            padding: 1rem;
            border-radius: 10px;
            border: 1px solid rgba(255, 215, 0, 0.3);
            color: #fff;
            font-size: 0.9rem;
        `;

        statsOverlay.innerHTML = `
            <div style="color: #ffd700; font-weight: bold; margin-bottom: 0.5rem;">
                地图统计
            </div>
            <div>覆盖省份: ${Object.keys(provincesData).length}</div>
            <div>文物总数: ${this.totalTreasures}</div>
            <div>朝代跨度: 3000+ 年</div>
        `;

        mapCanvas.appendChild(statsOverlay);
    }
}

// 添加地图相关的CSS动画
const mapStyle = document.createElement('style');
mapStyle.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .province-btn.active {
        transform: translateY(-2px) scale(1.05) !important;
        box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4) !important;
    }
    
    .province-treasure {
        animation: treasureSlideIn 0.6s ease-out forwards;
        opacity: 0;
        transform: translateX(-20px);
    }
    
    .province-treasure:nth-child(2) { animation-delay: 0.1s; }
    .province-treasure:nth-child(3) { animation-delay: 0.2s; }
    .province-treasure:nth-child(4) { animation-delay: 0.3s; }
    
    @keyframes treasureSlideIn {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(mapStyle);

// 初始化地图功能
document.addEventListener('DOMContentLoaded', () => {
    new MapViewer();
    new MapAnimations();
    new MapStatistics();
});
