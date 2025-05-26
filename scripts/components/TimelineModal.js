
// Timeline modal functionality
export class TimelineModal {
    constructor() {
        this.init();
    }

    init() {
        this.createModal();
        this.addEventListeners();
    }

    createModal() {
        const modal = document.createElement('div');
        modal.id = 'periodModal';
        modal.className = 'period-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="timelineModal.closeModal()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modalTitle"></h2>
                    <button class="modal-close" onclick="timelineModal.closeModal()">×</button>
                </div>
                <div class="modal-body" id="modalBody">
                    <!-- 内容将在这里动态加载 -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    addEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    showPeriodDetail(period) {
        const modal = document.getElementById('periodModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = `${period.period} - ${period.dynasty}`;
        
        modalBody.innerHTML = `
            <div class="period-detail">
                <div class="period-intro">
                    <h3>📜 历史概述</h3>
                    <p>${period.detailDescription}</p>
                </div>
                
                <div class="period-video">
                    <h3>🎬 历史纪录片</h3>
                    <div class="video-container">
                        <iframe 
                            src="${period.videoUrl}" 
                            frameborder="0" 
                            allowfullscreen
                            title="${period.period}相关视频">
                        </iframe>
                    </div>
                    <p class="video-description">探索${period.period}的辉煌历史与文化成就</p>
                </div>
                
                <div class="period-treasures-detail">
                    <h3>💎 代表文物详情</h3>
                    <div class="treasures-grid">
                        ${period.treasures.map(treasure => `
                            <div class="treasure-detail-card">
                                <div class="treasure-image-container">
                                    <img src="${treasure.image}" alt="${treasure.name}" loading="lazy">
                                    <div class="treasure-overlay">
                                        <span class="treasure-period">${period.period}</span>
                                    </div>
                                </div>
                                <div class="treasure-info">
                                    <h4>${treasure.name}</h4>
                                    <p class="location">📍 ${treasure.location}</p>
                                    <p class="description">${treasure.description}</p>
                                    <p class="detail">${treasure.detail}</p>
                                    <div class="treasure-tags">
                                        <span class="tag tag-era">${period.period}</span>
                                        <span class="tag tag-location">${treasure.location}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="period-stats">
                    <h3>📊 时代特色</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number">${period.treasures.length}</span>
                            <span class="stat-label">代表文物</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${period.year.replace(/[^0-9]/g, '').slice(0, 4) || '未知'}</span>
                            <span class="stat-label">历史年代</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${new Set(period.treasures.map(t => t.location)).size}</span>
                            <span class="stat-label">发现地区</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // 添加入场动画
        setTimeout(() => {
            modal.classList.add('modal-active');
        }, 10);
    }

    showTreasureDetail(treasureName, timelineData) {
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
            const modal = document.getElementById('periodModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');

            modalTitle.textContent = foundTreasure.name;
            
            modalBody.innerHTML = `
                <div class="treasure-single-detail">
                    <div class="treasure-main-content">
                        <div class="treasure-image-section">
                            <img src="${foundTreasure.image}" alt="${foundTreasure.name}" loading="lazy">
                            <div class="image-caption">
                                <p>${foundTreasure.description}</p>
                            </div>
                        </div>
                        <div class="treasure-info-section">
                            <div class="treasure-basic-info">
                                <h3>${foundTreasure.name}</h3>
                                <div class="info-tags">
                                    <span class="tag tag-period">${foundPeriod.period}</span>
                                    <span class="tag tag-location">📍 ${foundTreasure.location}</span>
                                </div>
                            </div>
                            
                            <div class="treasure-description">
                                <h4>文物简介</h4>
                                <p>${foundTreasure.description}</p>
                            </div>
                            
                            <div class="treasure-detail">
                                <h4>详细信息</h4>
                                <p>${foundTreasure.detail}</p>
                            </div>
                            
                            <div class="treasure-context">
                                <h4>历史背景</h4>
                                <p>这件珍贵文物出土于${foundTreasure.location}，属于${foundPeriod.period}时期。${foundPeriod.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // 添加入场动画
            setTimeout(() => {
                modal.classList.add('modal-active');
            }, 10);
        }
    }

    closeModal() {
        const modal = document.getElementById('periodModal');
        modal.classList.remove('modal-active');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}
