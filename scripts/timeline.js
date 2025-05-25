
// 时间轴页面功能
const timelineData = [
    {
        year: '约公元前1600年',
        dynasty: '商朝建立',
        description: '中国历史上第一个有文字记载的朝代建立，标志着中华文明进入有文字记录的历史时期。',
        treasures: [
            { name: '司母戊鼎', description: '世界最大青铜鼎' },
            { name: '妇好鸮尊', description: '商代青铜酒器' },
            { name: '甲骨文', description: '最早的汉字' }
        ]
    },
    {
        year: '公元前1046年',
        dynasty: '周朝建立',
        description: '周武王伐纣成功，建立周朝，实行分封制，奠定了中国古代政治制度的基础。',
        treasures: [
            { name: '大盂鼎', description: '西周青铜重器' },
            { name: '毛公鼎', description: '铭文最长的青铜器' },
            { name: '散氏盘', description: '土地契约青铜器' }
        ]
    },
    {
        year: '公元前221年',
        dynasty: '秦朝统一',
        description: '秦始皇统一六国，建立了中国历史上第一个中央集权的封建王朝。',
        treasures: [
            { name: '兵马俑', description: '守护皇陵的千军万马' },
            { name: '青铜剑', description: '秦代制式兵器' },
            { name: '秦始皇印', description: '皇权的象征' }
        ]
    },
    {
        year: '公元前206年',
        dynasty: '汉朝建立',
        description: '刘邦建立汉朝，开创了长达400多年的汉朝盛世，奠定了汉民族的基础。',
        treasures: [
            { name: '马踏飞燕', description: '汉代青铜艺术杰作' },
            { name: '金缕玉衣', description: '汉代皇室葬服' },
            { name: '长信宫灯', description: '环保理念的古代明灯' }
        ]
    },
    {
        year: '618年',
        dynasty: '唐朝建立',
        description: '李渊建立唐朝，开创了中华文明的黄金时代，文化繁荣，对外开放。',
        treasures: [
            { name: '唐三彩', description: '盛唐陶瓷艺术' },
            { name: '步辇图', description: '展现外交场面的名画' },
            { name: '何家村金银器', description: '唐代金银工艺巅峰' }
        ]
    },
    {
        year: '960年',
        dynasty: '宋朝建立',
        description: '赵匡胤建立宋朝，虽然军事相对较弱，但文化科技达到了新的高度。',
        treasures: [
            { name: '清明上河图', description: '描绘宋代城市生活' },
            { name: '汝窑瓷器', description: '宋代瓷器之冠' },
            { name: '宋版书籍', description: '印刷术的完美体现' }
        ]
    },
    {
        year: '1368年',
        dynasty: '明朝建立',
        description: '朱元璋建立明朝，恢复了汉人统治，开创了明朝276年的统治。',
        treasures: [
            { name: '永乐大典', description: '世界最大的百科全书' },
            { name: '景德镇瓷器', description: '明代瓷器工艺巅峰' },
            { name: '郑和宝船', description: '海上丝绸之路的见证' }
        ]
    },
    {
        year: '1644年',
        dynasty: '清朝建立',
        description: '满族建立清朝，成为中国历史上最后一个封建王朝，统治了268年。',
        treasures: [
            { name: '四库全书', description: '中华文化的集大成' },
            { name: '翡翠白菜', description: '清代玉雕精品' },
            { name: '九龙壁', description: '皇家建筑装饰艺术' }
        ]
    }
];

class TimelineViewer {
    constructor() {
        this.container = document.getElementById('timelineContainer');
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.renderTimeline();
        this.addScrollAnimations();
    }

    renderTimeline() {
        // 创建时间轴线
        const timelineLine = document.createElement('div');
        timelineLine.className = 'timeline-line';
        this.container.appendChild(timelineLine);

        // 渲染每个时间节点
        timelineData.forEach((item, index) => {
            const timelineItem = this.createTimelineItem(item, index);
            this.container.appendChild(timelineItem);
        });
    }

    createTimelineItem(data, index) {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        
        content.innerHTML = `
            <div class="timeline-year">${data.year}</div>
            <div class="timeline-dynasty">${data.dynasty}</div>
            <div class="timeline-description">${data.description}</div>
            <div class="timeline-treasures">
                ${data.treasures.map(treasure => `
                    <div class="treasure-mini">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop" alt="${treasure.name}">
                        <h4>${treasure.name}</h4>
                        <p>${treasure.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        
        item.appendChild(content);
        item.appendChild(dot);
        
        return item;
    }

    addScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInTimeline 0.8s ease-out forwards';
                }
            });
        }, {
            threshold: 0.3
        });

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
            observer.observe(item);
        });
    }
}

// 添加时间轴动画样式
const timelineStyle = document.createElement('style');
timelineStyle.textContent = `
    @keyframes slideInTimeline {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .treasure-mini {
        transition: all 0.3s ease;
    }
    
    .treasure-mini:hover {
        transform: scale(1.05);
        background: rgba(255, 215, 0, 0.1) !important;
    }
`;
document.head.appendChild(timelineStyle);

// 初始化时间轴
document.addEventListener('DOMContentLoaded', () => {
    new TimelineViewer();
});
