
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
                    <h3>历史概述</h3>
                    <p>${period.detailDescription}</p>
                </div>
                
                <div class="period-video">
                    <h3>相关视频</h3>
                    <div class="video-container">
                        <iframe 
                            src="${period.videoUrl}" 
                            frameborder="0" 
                            allowfullscreen
                            title="${period.period}相关视频">
                        </iframe>
                    </div>
                </div>
                
                <div class="period-treasures-detail">
                    <h3>代表文物详情</h3>
                    <div class="treasures-grid">
                        ${period.treasures.map(treasure => `
                            <div class="treasure-detail-card">
                                <img src="${treasure.image}" alt="${treasure.name}" loading="lazy">
                                <div class="treasure-info">
                                    <h4>${treasure.name}</h4>
                                    <p class="location">📍 ${treasure.location}</p>
                                    <p class="description">${treasure.description}</p>
                                    <p class="detail">${treasure.detail}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
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
                    <div class="treasure-image">
                        <img src="${foundTreasure.image}" alt="${foundTreasure.name}" loading="lazy">
                    </div>
                    <div class="treasure-content">
                        <h3>${foundTreasure.name}</h3>
                        <p class="period">${foundPeriod.period}</p>
                        <p class="location">📍 ${foundTreasure.location}</p>
                        <p class="description">${foundTreasure.description}</p>
                        <p class="detail">${foundTreasure.detail}</p>
                    </div>
                </div>
            `;

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        const modal = document.getElementById('periodModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
