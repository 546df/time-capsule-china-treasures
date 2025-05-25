
// 搜索页面功能
const treasuresData = [
    {
        id: 1,
        name: "司母戊鼎",
        dynasty: "商朝",
        category: "青铜器",
        location: "河南安阳",
        description: "世界上现存最大最重的青铜礼器，重达832.84公斤",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
        id: 2,
        name: "妇好鸮尊",
        dynasty: "商朝",
        category: "青铜器",
        location: "河南安阳",
        description: "商代青铜酒器，以鸮（猫头鹰）为造型",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop"
    },
    {
        id: 3,
        name: "毛公鼎",
        dynasty: "周朝",
        category: "青铜器",
        location: "陕西岐山",
        description: "西周晚期青铜器，铭文共32行497字",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
        id: 4,
        name: "兵马俑",
        dynasty: "秦朝",
        category: "陶俑",
        location: "陕西西安",
        description: "秦始皇陵兵马俑，世界第八大奇迹",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop"
    },
    {
        id: 5,
        name: "马踏飞燕",
        dynasty: "汉朝",
        category: "青铜器",
        location: "甘肃武威",
        description: "汉代青铜艺术杰作，中国旅游标志",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
        id: 6,
        name: "唐三彩骆驼载乐俑",
        dynasty: "唐朝",
        category: "陶瓷",
        location: "陕西西安",
        description: "展现丝绸之路文化交流的精美陶俑",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop"
    },
    {
        id: 7,
        name: "清明上河图",
        dynasty: "宋朝",
        category: "书画",
        location: "北京故宫",
        description: "描绘北宋汴京繁华景象的传世名画",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
        id: 8,
        name: "永乐大典",
        dynasty: "明朝",
        category: "典籍",
        location: "北京故宫",
        description: "世界最大的百科全书",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop"
    },
    {
        id: 9,
        name: "翡翠白菜",
        dynasty: "清朝",
        category: "玉器",
        location: "北京故宫",
        description: "清代玉雕艺术精品",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
        id: 10,
        name: "四羊方尊",
        dynasty: "商朝",
        category: "青铜器",
        location: "湖南宁乡",
        description: "商代青铜礼器的杰出代表",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop"
    }
];

class SearchEngine {
    constructor() {
        this.treasures = treasuresData;
        this.searchResults = [];
        this.init();
    }

    init() {
        this.initSearchControls();
        this.showInitialMessage();
    }

    initSearchControls() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const dynastyFilter = document.getElementById('dynastyFilter');
        const categoryFilter = document.getElementById('categoryFilter');

        // 搜索按钮点击事件
        searchBtn?.addEventListener('click', () => {
            this.performSearch();
        });

        // 回车键搜索
        searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // 筛选器变化事件
        dynastyFilter?.addEventListener('change', () => {
            this.performSearch();
        });

        categoryFilter?.addEventListener('change', () => {
            this.performSearch();
        });

        // 实时搜索（输入时）
        searchInput?.addEventListener('input', () => {
            if (searchInput.value.length > 2) {
                this.performSearch();
            } else if (searchInput.value.length === 0) {
                this.showInitialMessage();
            }
        });
    }

    performSearch() {
        const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
        const dynastyFilter = document.getElementById('dynastyFilter')?.value || '';
        const categoryFilter = document.getElementById('categoryFilter')?.value || '';

        // 执行搜索
        this.searchResults = this.treasures.filter(treasure => {
            const matchesSearch = !searchTerm || 
                treasure.name.toLowerCase().includes(searchTerm) ||
                treasure.description.toLowerCase().includes(searchTerm) ||
                treasure.dynasty.toLowerCase().includes(searchTerm) ||
                treasure.location.toLowerCase().includes(searchTerm);

            const matchesDynasty = !dynastyFilter || treasure.dynasty === dynastyFilter;
            const matchesCategory = !categoryFilter || treasure.category === categoryFilter;

            return matchesSearch && matchesDynasty && matchesCategory;
        });

        this.renderResults();
    }

    renderResults() {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        if (this.searchResults.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <h3>未找到相关文物</h3>
                    <p>请尝试使用其他关键词或调整筛选条件</p>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = `
            <div class="results-header">
                <div class="results-count">找到 ${this.searchResults.length} 件相关文物</div>
            </div>
            <div class="results-grid">
                ${this.searchResults.map(treasure => this.createResultCard(treasure)).join('')}
            </div>
        `;

        // 绑定结果卡片点击事件
        this.bindResultEvents();
    }

    createResultCard(treasure) {
        return `
            <div class="result-card" data-treasure-id="${treasure.id}">
                <img src="${treasure.image}" alt="${treasure.name}">
                <div class="result-card-content">
                    <h3>${treasure.name}</h3>
                    <div class="dynasty">${treasure.dynasty}</div>
                    <div class="category">${treasure.category}</div>
                    <div class="location">📍 ${treasure.location}</div>
                    <div class="description">${treasure.description}</div>
                </div>
            </div>
        `;
    }

    bindResultEvents() {
        const resultCards = document.querySelectorAll('.result-card');
        resultCards.forEach(card => {
            card.addEventListener('click', () => {
                const treasureId = parseInt(card.dataset.treasureId);
                const treasure = this.treasures.find(t => t.id === treasureId);
                if (treasure) {
                    this.showTreasureDetail(treasure);
                }
            });
        });
    }

    showInitialMessage() {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>🔍 开始探索文物宝藏</h3>
                <p>请输入文物名称、朝代或关键词进行搜索</p>
                <div style="margin-top: 2rem;">
                    <h4 style="color: #ffd700; margin-bottom: 1rem;">热门搜索：</h4>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <span class="hot-search" data-term="司母戊鼎">司母戊鼎</span>
                        <span class="hot-search" data-term="兵马俑">兵马俑</span>
                        <span class="hot-search" data-term="清明上河图">清明上河图</span>
                        <span class="hot-search" data-term="唐三彩">唐三彩</span>
                    </div>
                </div>
            </div>
        `;

        // 绑定热门搜索点击事件
        this.bindHotSearchEvents();
    }

    bindHotSearchEvents() {
        const hotSearches = document.querySelectorAll('.hot-search');
        hotSearches.forEach(search => {
            search.style.cssText = `
                background: rgba(255, 215, 0, 0.2);
                color: #ffd700;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            
            search.addEventListener('click', () => {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.value = search.dataset.term;
                    this.performSearch();
                }
            });

            search.addEventListener('mouseenter', () => {
                search.style.background = 'rgba(255, 215, 0, 0.4)';
            });

            search.addEventListener('mouseleave', () => {
                search.style.background = 'rgba(255, 215, 0, 0.2)';
            });
        });
    }

    showTreasureDetail(treasure) {
        alert(`${treasure.name}\n\n${treasure.dynasty}\n${treasure.location}\n\n${treasure.description}`);
    }
}

// 初始化搜索功能
document.addEventListener('DOMContentLoaded', () => {
    new SearchEngine();
});
