
// 画廊页面功能
const treasuresData = [
    // 商朝文物
    {
        id: 1,
        name: '司母戊鼎',
        dynasty: '商朝',
        period: '约公元前1300年',
        category: '青铜器',
        location: '河南安阳',
        description: '商朝后期王室用鼎，重达832.84公斤，是世界上现存最大最重的青铜礼器。鼎腹内壁铸有"司母戊"三字，为商王祖庚或祖甲为祭祀母亲戊而铸造。鼎形制雄伟，纹饰庄重，体现了商代青铜铸造技术的最高水平。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        detailedInfo: {
            material: '青铜',
            dimensions: '高133厘米，口长110厘米，口宽79厘米',
            weight: '832.84公斤',
            discovery: '1939年河南安阳出土',
            currentLocation: '中国国家博物馆'
        }
    },
    {
        id: 2,
        name: '妇好鸮尊',
        dynasty: '商朝',
        period: '约公元前1200年',
        category: '青铜器',
        location: '河南安阳',
        description: '商代青铜酒器，以鸮（猫头鹰）为造型，线条流畅，纹饰精美。鸮在商代被视为战神，此尊出土于妇好墓，体现了商代女性的崇高地位和精湛的青铜铸造工艺。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    // 周朝文物
    {
        id: 3,
        name: '毛公鼎',
        dynasty: '周朝',
        period: '约公元前9世纪',
        category: '青铜器',
        location: '陕西岐山',
        description: '西周晚期青铜器，因铭文中有"毛公"字样而得名。铭文共32行，497字，是已知西周青铜器铭文中最长的一篇，记录了周宣王册命毛公的史实。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 秦朝文物
    {
        id: 4,
        name: '兵马俑',
        dynasty: '秦朝',
        period: '约公元前210年',
        category: '陶俑',
        location: '陕西西安',
        description: '秦始皇陵兵马俑是世界考古史上最伟大的发现之一。数千个陶制士兵、战马和战车排列整齐，形态各异，栩栩如生，被誉为"世界第八大奇迹"。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    // 汉朝文物
    {
        id: 5,
        name: '马踏飞燕',
        dynasty: '汉朝',
        period: '约公元2世纪',
        category: '青铜器',
        location: '甘肃武威',
        description: '又称"铜奔马"，是汉代青铜艺术的杰作。马身体修长，昂首嘶鸣，三足腾空，一足踏在飞燕背上，表现了骏马凌空飞驰的雄姿，体现了汉代高超的铸造工艺和艺术想象力。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 唐朝文物
    {
        id: 6,
        name: '唐三彩骆驼载乐俑',
        dynasty: '唐朝',
        period: '约公元8世纪',
        category: '陶瓷',
        location: '陕西西安',
        description: '盛唐时期的三彩陶俑，以骆驼为载体，上有胡人乐队演奏。色彩绚丽，造型生动，展现了丝绸之路上的音乐文化交流，体现了唐代开放包容的文化特色。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    // 宋朝文物
    {
        id: 7,
        name: '清明上河图',
        dynasty: '宋朝',
        period: '约公元12世纪',
        category: '绘画',
        location: '开封',
        description: '北宋画家张择端的传世名作，以长卷形式生动记录了北宋都城汴京清明时节的繁华景象。画中人物众多，建筑精美，是研究宋代社会生活的重要史料。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 明朝文物
    {
        id: 8,
        name: '永乐大典',
        dynasty: '明朝',
        period: '约公元15世纪',
        category: '典籍',
        location: '北京',
        description: '明成祖时期编纂的大型类书，共22937卷，是中国古代最大的百科全书。汇集了中国古代重要典籍，对保存和传承中华文化发挥了重要作用。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    // 清朝文物
    {
        id: 9,
        name: '翡翠白菜',
        dynasty: '清朝',
        period: '约公元19世纪',
        category: '玉器',
        location: '北京故宫',
        description: '清代玉雕精品，以翡翠雕成白菜形状，菜叶上还趴着两只昆虫。工艺精湛，寓意清白，是清代宫廷艺术的代表作品。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    }
];

class GalleryManager {
    constructor() {
        this.treasures = treasuresData;
        this.filteredTreasures = [...this.treasures];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderGallery();
        this.initFilters();
        this.initModal();
    }

    renderGallery() {
        const grid = document.getElementById('galleryGrid');
        if (!grid) return;

        grid.innerHTML = '';

        this.filteredTreasures.forEach(treasure => {
            const card = this.createTreasureCard(treasure);
            grid.appendChild(card);
        });
    }

    createTreasureCard(treasure) {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.dataset.treasureId = treasure.id;
        
        card.innerHTML = `
            <img src="${treasure.image}" alt="${treasure.name}">
            <div class="gallery-card-content">
                <h3>${treasure.name}</h3>
                <div class="dynasty">${treasure.dynasty}</div>
                <div class="period">${treasure.period}</div>
                <div class="description">${treasure.description.substring(0, 100)}...</div>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showTreasureDetail(treasure);
        });

        return card;
    }

    initFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 移除其他按钮的active类
                filterButtons.forEach(b => b.classList.remove('active'));
                // 添加当前按钮的active类
                btn.classList.add('active');
                
                const dynasty = btn.dataset.dynasty;
                this.filterByDynasty(dynasty);
            });
        });
    }

    filterByDynasty(dynasty) {
        this.currentFilter = dynasty;
        
        if (dynasty === 'all') {
            this.filteredTreasures = [...this.treasures];
        } else {
            this.filteredTreasures = this.treasures.filter(t => t.dynasty === dynasty);
        }
        
        this.renderGallery();
    }

    initModal() {
        const modal = document.getElementById('treasureModal');
        const closeBtn = modal?.querySelector('.close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        // 点击模态框外部关闭
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    showTreasureDetail(treasure) {
        const modal = document.getElementById('treasureModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody) return;

        modalBody.innerHTML = `
            <img src="${treasure.image}" alt="${treasure.name}" class="modal-treasure-image">
            <h2 class="modal-treasure-title">${treasure.name}</h2>
            <div class="modal-treasure-meta">
                <div class="meta-item">
                    <div class="meta-label">朝代</div>
                    <div class="meta-value">${treasure.dynasty}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">年代</div>
                    <div class="meta-value">${treasure.period}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">类别</div>
                    <div class="meta-value">${treasure.category}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">出土地</div>
                    <div class="meta-value">${treasure.location}</div>
                </div>
            </div>
            <div class="modal-treasure-description">
                ${treasure.description}
            </div>
        `;

        modal.style.display = 'block';
    }
}

// 初始化画廊
document.addEventListener('DOMContentLoaded', () => {
    new GalleryManager();
});
