
// Timeline viewer entry point
import { TimelineData } from './TimelineData.js';
import { TimelineModal } from './TimelineModal.js';
import { TimelineNavigation } from './TimelineNavigation.js';
import { TimelineAnimations } from './TimelineAnimations.js';

class TimelineViewer {
    constructor() {
        this.timelineData = TimelineData.getData();
        this.init();
    }

    init() {
        this.renderTimeline();
        this.initializeComponents();
        this.addInteractions();
    }

    initializeComponents() {
        this.modal = new TimelineModal();
        this.navigation = new TimelineNavigation(this.timelineData);
        this.animations = new TimelineAnimations();
    }

    renderTimeline() {
        const container = document.getElementById('timelineContainer');
        if (!container) return;

        container.innerHTML = `
            <div class="timeline-line"></div>
            ${this.timelineData.map((period, index) => this.createTimelineItem(period, index)).join('')}
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
                    <button class="timeline-btn" data-period-index="${index}">
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
                <img src="${treasure.image}" alt="${treasure.name}" loading="lazy">
                <h4>${treasure.name}</h4>
                <p>${treasure.location}</p>
            </div>
        `;
    }

    showPeriodDetail(index) {
        const period = this.timelineData[index];
        this.modal.showPeriodDetail(period);
    }

    addInteractions() {
        document.addEventListener('click', (e) => {
            // 处理详细了解按钮点击
            if (e.target.closest('.timeline-btn')) {
                const button = e.target.closest('.timeline-btn');
                const periodIndex = button.dataset.periodIndex;
                if (periodIndex !== undefined) {
                    this.showPeriodDetail(parseInt(periodIndex));
                }
            }
            
            // 处理文物缩略图点击
            if (e.target.closest('.treasure-mini')) {
                const treasureName = e.target.closest('.treasure-mini').dataset.treasure;
                this.modal.showTreasureDetail(treasureName, this.timelineData);
            }
        });
    }
}

// 全局变量供HTML调用
let timelineViewer;
let timelineModal;

// 初始化时间轴功能
document.addEventListener('DOMContentLoaded', () => {
    timelineViewer = new TimelineViewer();
    timelineModal = timelineViewer.modal;
});
