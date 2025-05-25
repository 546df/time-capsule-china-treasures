
// 时间轴页面功能
const timelineData = [
    {
        period: "新石器时代",
        year: "约8000-2000年前",
        dynasty: "史前文明",
        description: "中华文明的萌芽时期，出现了原始农业、陶器制作和早期聚落。",
        treasures: [
            {
                name: "仰韶文化彩陶",
                location: "河南",
                description: "精美的彩绘陶器",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            },
            {
                name: "河姆渡骨耜",
                location: "浙江",
                description: "原始农业工具",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "夏朝",
        year: "约公元前2070-1600年",
        dynasty: "中国第一个王朝",
        description: "传说中的第一个世袭王朝，开创了中国古代政治制度的先河。",
        treasures: [
            {
                name: "二里头青铜器",
                location: "河南洛阳",
                description: "早期青铜文明",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "商朝",
        year: "约公元前1600-1046年",
        dynasty: "青铜文明的辉煌",
        description: "中国历史上第一个有文字记载的王朝，青铜器制作达到高峰，甲骨文成熟。",
        treasures: [
            {
                name: "司母戊鼎",
                location: "河南安阳",
                description: "世界最大青铜鼎",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            },
            {
                name: "妇好鸮尊",
                location: "河南安阳",
                description: "商代青铜酒器",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            },
            {
                name: "甲骨文",
                location: "河南安阳",
                description: "最早的汉字",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "周朝",
        year: "约公元前1046-256年",
        dynasty: "礼乐文明的确立",
        description: "中国历史上最长的王朝，确立了分封制和礼乐制度，青铜器铭文发达。",
        treasures: [
            {
                name: "毛公鼎",
                location: "陕西岐山",
                description: "铭文最长的青铜器",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            },
            {
                name: "散氏盘",
                location: "陕西",
                description: "土地契约铭文",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "春秋战国",
        year: "公元前770-221年",
        dynasty: "思想文化的繁荣",
        description: "百家争鸣的思想黄金期，铁器普及，各国文化艺术百花齐放。",
        treasures: [
            {
                name: "越王勾践剑",
                location: "湖北江陵",
                description: "千年不锈宝剑",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            },
            {
                name: "曾侯乙编钟",
                location: "湖北随州",
                description: "古代音乐瑰宝",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "秦朝",
        year: "公元前221-206年",
        dynasty: "大一统帝国",
        description: "秦始皇统一六国，建立了中国第一个中央集权的封建王朝。",
        treasures: [
            {
                name: "兵马俑",
                location: "陕西西安",
                description: "地下军阵奇迹",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            },
            {
                name: "秦始皇陵铜车马",
                location: "陕西西安",
                description: "精美的青铜工艺",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "汉朝",
        year: "公元前206年-220年",
        dynasty: "丝绸之路的开拓",
        description: "汉朝开辟丝绸之路，促进了东西方文化交流，汉文化影响深远。",
        treasures: [
            {
                name: "马踏飞燕",
                location: "甘肃武威",
                description: "汉代艺术杰作",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            },
            {
                name: "马王堆汉墓",
                location: "湖南长沙",
                description: "保存完好的汉墓",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "唐朝",
        year: "618-907年",
        dynasty: "盛世华章",
        description: "中国古代最鼎盛的时期，文化艺术空前繁荣，对外交流频繁。",
        treasures: [
            {
                name: "唐三彩骆驼载乐俑",
                location: "陕西西安",
                description: "丝路文化象征",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            },
            {
                name: "敦煌壁画",
                location: "甘肃敦煌",
                description: "佛教艺术宝库",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "宋朝",
        year: "960-1279年",
        dynasty: "科技文化的巅峰",
        description: "科技发达，文化繁荣，出现了四大发明，绘画艺术达到新高度。",
        treasures: [
            {
                name: "清明上河图",
                location: "北京故宫",
                description: "北宋风俗画杰作",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            },
            {
                name: "汝窑青瓷",
                location: "河南",
                description: "宋代瓷器之冠",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "明朝",
        year: "1368-1644年",
        dynasty: "海上丝绸之路",
        description: "郑和下西洋开辟海上丝绸之路，建筑、瓷器、文学都有重要发展。",
        treasures: [
            {
                name: "永乐大典",
                location: "北京",
                description: "世界最大百科全书",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            },
            {
                name: "青花瓷",
                location: "江西景德镇",
                description: "明代瓷器精品",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            }
        ]
    },
    {
        period: "清朝",
        year: "1644-1912年",
        dynasty: "最后的封建王朝",
        description: "中国最后一个封建王朝，疆域辽阔，文物收藏丰富。",
        treasures: [
            {
                name: "翡翠白菜",
                location: "北京故宫",
                description: "清代玉雕精品",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop"
            },
            {
                name: "四库全书",
                location: "北京",
                description: "古代最大丛书",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop"
            }
        ]
    }
];

class TimelineViewer {
    constructor() {
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.renderTimeline();
        this.addScrollAnimations();
        this.addInteractions();
    }

    renderTimeline() {
        const container = document.getElementById('timelineContainer');
        if (!container) return;

        container.innerHTML = `
            <div class="timeline-line"></div>
            ${timelineData.map((period, index) => this.createTimelineItem(period, index)).join('')}
        `;
    }

    createTimelineItem(period, index) {
        const isLeft = index % 2 === 0;
        return `
            <div class="timeline-item ${isLeft ? 'left' : 'right'}" data-index="${index}">
                <div class="timeline-content">
                    <div class="timeline-year">${period.year}</div>
                    <div class="timeline-dynasty">${period.period}</div>
                    <div class="timeline-subtitle">${period.dynasty}</div>
                    <div class="timeline-description">${period.description}</div>
                    <div class="timeline-treasures">
                        ${period.treasures.map(treasure => this.createTreasureMini(treasure)).join('')}
                    </div>
                    <button class="timeline-btn" onclick="timelineViewer.showPeriodDetail(${index})">
                        详细了解
                    </button>
                </div>
                <div class="timeline-dot"></div>
            </div>
        `;
    }

    createTreasureMini(treasure) {
        return `
            <div class="treasure-mini" data-treasure="${treasure.name}">
                <img src="${treasure.image}" alt="${treasure.name}">
                <h4>${treasure.name}</h4>
                <p>${treasure.location}</p>
            </div>
        `;
    }

    showPeriodDetail(index) {
        const period = timelineData[index];
        const detailHtml = `
            <div style="max-width: 600px; text-align: left;">
                <h2 style="color: #ffd700; margin-bottom: 1rem;">${period.period}</h2>
                <h3 style="color: #ff8c00; margin-bottom: 1rem;">${period.dynasty}</h3>
                <p style="color: #e0e0e0; margin-bottom: 2rem; line-height: 1.6;">${period.description}</p>
                
                <h4 style="color: #ffd700; margin-bottom: 1rem;">代表文物：</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    ${period.treasures.map(treasure => `
                        <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px;">
                            <img src="${treasure.image}" alt="${treasure.name}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 5px; margin-bottom: 0.5rem;">
                            <h5 style="color: #ffd700; margin-bottom: 0.3rem;">${treasure.name}</h5>
                            <p style="color: #ccc; font-size: 0.9rem; margin-bottom: 0.3rem;">📍 ${treasure.location}</p>
                            <p style="color: #e0e0e0; font-size: 0.8rem;">${treasure.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        alert(`${period.period}\n\n${period.dynasty}\n\n${period.description}\n\n代表文物：\n${period.treasures.map(t => `• ${t.name}（${t.location}）`).join('\n')}`);
    }

    addScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.3
        });

        setTimeout(() => {
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                observer.observe(item);
            });
        }, 100);
    }

    addInteractions() {
        // 添加文物缩略图点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.treasure-mini')) {
                const treasureName = e.target.closest('.treasure-mini').dataset.treasure;
                this.showTreasureDetail(treasureName);
            }
        });

        // 添加时间轴导航
        this.addTimelineNavigation();
    }

    addTimelineNavigation() {
        const container = document.getElementById('timelineContainer');
        if (!container) return;

        const nav = document.createElement('div');
        nav.className = 'timeline-nav';
        nav.style.cssText = `
            position: fixed;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            z-index: 100;
        `;

        timelineData.forEach((period, index) => {
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            dot.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: rgba(255, 215, 0, 0.3);
                cursor: pointer;
                transition: all 0.3s ease;
                border: 2px solid transparent;
            `;
            dot.title = period.period;
            
            dot.addEventListener('click', () => {
                this.scrollToPeriod(index);
            });

            dot.addEventListener('mouseenter', () => {
                dot.style.background = '#ffd700';
                dot.style.borderColor = '#ff8c00';
                dot.style.transform = 'scale(1.5)';
            });

            dot.addEventListener('mouseleave', () => {
                dot.style.background = 'rgba(255, 215, 0, 0.3)';
                dot.style.borderColor = 'transparent';
                dot.style.transform = 'scale(1)';
            });

            nav.appendChild(dot);
        });

        document.body.appendChild(nav);
    }

    scrollToPeriod(index) {
        const timelineItem = document.querySelector(`[data-index="${index}"]`);
        if (timelineItem) {
            timelineItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    showTreasureDetail(treasureName) {
        // 在所有时期中查找文物
        let foundTreasure = null;
        let foundPeriod = null;
        
        for (const period of timelineData) {
            foundTreasure = period.treasures.find(t => t.name === treasureName);
            if (foundTreasure) {
                foundPeriod = period;
                break;
            }
        }

        if (foundTreasure && foundPeriod) {
            alert(`${foundTreasure.name}\n\n${foundPeriod.period} · ${foundTreasure.location}\n\n${foundTreasure.description}`);
        }
    }
}

// 添加时间轴样式
const timelineStyle = document.createElement('style');
timelineStyle.textContent = `
    .timeline-item {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }

    .timeline-item.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .timeline-item.left.animate .timeline-content {
        animation: slideInLeft 0.8s ease;
    }

    .timeline-item.right.animate .timeline-content {
        animation: slideInRight 0.8s ease;
    }

    @keyframes slideInLeft {
        from {
            transform: translateX(-100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .timeline-subtitle {
        color: #ff8c00;
        font-size: 1rem;
        margin-bottom: 1rem;
        font-style: italic;
    }

    .timeline-btn {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background: linear-gradient(45deg, #ffd700, #ff8c00);
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .timeline-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
    }

    .treasure-mini {
        transition: all 0.3s ease;
    }

    .treasure-mini:hover {
        transform: scale(1.1);
        background: rgba(255, 215, 0, 0.1) !important;
    }

    @media (max-width: 768px) {
        .timeline-nav {
            display: none;
        }
    }
`;
document.head.appendChild(timelineStyle);

// 全局变量供HTML调用
let timelineViewer;

// 初始化时间轴功能
document.addEventListener('DOMContentLoaded', () => {
    timelineViewer = new TimelineViewer();
});
