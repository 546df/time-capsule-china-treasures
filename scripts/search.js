
// 搜索页面功能
class SearchEngine {
    constructor() {
        this.treasures = treasuresData; // 使用gallery.js中的数据
        this.searchResults = [];
        this.currentSort = 'relevance';
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
                <div class="results-sort">
                    <button class="sort-btn active" data-sort="relevance">相关性</button>
                    <button class="sort-btn" data-sort="dynasty">朝代</button>
                    <button class="sort-btn" data-sort="name">名称</button>
                </div>
            </div>
            <div class="results-grid">
                ${this.searchResults.map(treasure => this.createResultCard(treasure)).join('')}
            </div>
        `;

        // 绑定排序按钮事件
        this.initSortButtons();
    }

    createResultCard(treasure) {
        return `
            <div class="result-card" data-treasure-id="${treasure.id}">
                <img src="${treasure.image}" alt="${treasure.name}">
                <div class="result-card-content">
                    <h3>${treasure.name}</h3>
                    <div class="dynasty">${treasure.dynasty} · ${treasure.period}</div>
                    <div class="category">${treasure.category}</div>
                    <div class="description">${treasure.description.substring(0, 150)}...</div>
                </div>
            </div>
        `;
    }

    initSortButtons() {
        const sortButtons = document.querySelectorAll('.sort-btn');
        
        sortButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 更新active状态
                sortButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // 执行排序
                const sortType = btn.dataset.sort;
                this.sortResults(sortType);
            });
        });

        // 绑定结果卡片点击事件
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

    sortResults(sortType) {
        switch (sortType) {
            case 'dynasty':
                this.searchResults.sort((a, b) => a.dynasty.localeCompare(b.dynasty));
                break;
            case 'name':
                this.searchResults.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'relevance':
            default:
                // 保持搜索相关性排序
                break;
        }
        
        this.renderResults();
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
        // 可以在这里实现详情页跳转或模态框显示
        console.log('显示文物详情:', treasure.name);
        
        // 简单的alert显示，实际项目中可以改为模态框或页面跳转
        alert(`${treasure.name}\n\n${treasure.dynasty} · ${treasure.period}\n\n${treasure.description}`);
    }
}

// 高级搜索功能
class AdvancedSearch {
    constructor() {
        this.searchHistory = this.loadSearchHistory();
        this.init();
    }

    init() {
        this.showSearchSuggestions();
    }

    showSearchSuggestions() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        // 创建搜索建议下拉框
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 0 0 10px 10px;
            max-height: 200px;
            overflow-y: auto;
            display: none;
            z-index: 1000;
        `;

        searchInput.parentElement.style.position = 'relative';
        searchInput.parentElement.appendChild(suggestionsContainer);

        // 监听输入事件
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase();
            if (value.length > 1) {
                this.showSuggestions(value, suggestionsContainer);
            } else {
                suggestionsContainer.style.display = 'none';
            }
        });

        // 点击外部隐藏建议
        document.addEventListener('click', (e) => {
            if (!searchInput.parentElement.contains(e.target)) {
                suggestionsContainer.style.display = 'none';
            }
        });
    }

    showSuggestions(searchTerm, container) {
        const suggestions = this.getSuggestions(searchTerm);
        
        if (suggestions.length === 0) {
            container.style.display = 'none';
            return;
        }

        container.innerHTML = suggestions.map(suggestion => `
            <div class="suggestion-item" style="
                padding: 0.8rem;
                cursor: pointer;
                transition: all 0.3s ease;
                border-bottom: 1px solid rgba(255, 215, 0, 0.1);
            " data-suggestion="${suggestion}">
                ${suggestion}
            </div>
        `).join('');

        // 绑定点击事件
        container.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.background = 'rgba(255, 215, 0, 0.1)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.background = 'transparent';
            });

            item.addEventListener('click', () => {
                const searchInput = document.getElementById('searchInput');
                searchInput.value = item.dataset.suggestion;
                container.style.display = 'none';
                
                // 触发搜索
                const searchEvent = new Event('click');
                document.getElementById('searchBtn').dispatchEvent(searchEvent);
            });
        });

        container.style.display = 'block';
    }

    getSuggestions(searchTerm) {
        const allTerms = [
            '司母戊鼎', '妇好鸮尊', '毛公鼎', '兵马俑', '马踏飞燕',
            '唐三彩骆驼载乐俑', '清明上河图', '永乐大典', '翡翠白菜',
            '商朝', '周朝', '秦朝', '汉朝', '唐朝', '宋朝', '明朝', '清朝',
            '青铜器', '陶瓷', '绘画', '玉器', '典籍', '陶俑'
        ];

        return allTerms
            .filter(term => term.toLowerCase().includes(searchTerm))
            .slice(0, 5);
    }

    saveSearchHistory(term) {
        if (!this.searchHistory.includes(term)) {
            this.searchHistory.unshift(term);
            this.searchHistory = this.searchHistory.slice(0, 10); // 保留最近10次搜索
            localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
        }
    }

    loadSearchHistory() {
        try {
            return JSON.parse(localStorage.getItem('searchHistory')) || [];
        } catch {
            return [];
        }
    }
}

// 初始化搜索功能
document.addEventListener('DOMContentLoaded', () => {
    new SearchEngine();
    new AdvancedSearch();
});
