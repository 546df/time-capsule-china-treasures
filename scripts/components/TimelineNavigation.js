
// Timeline navigation functionality
export class TimelineNavigation {
    constructor(timelineData) {
        this.timelineData = timelineData;
        this.init();
    }

    init() {
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
            background: rgba(0, 0, 0, 0.8);
            padding: 1rem;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        `;

        this.timelineData.forEach((period, index) => {
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
                position: relative;
            `;
            dot.title = period.period;
            
            const label = document.createElement('span');
            label.textContent = period.period;
            label.style.cssText = `
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: #ffd700;
                padding: 2px 8px;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            `;
            dot.appendChild(label);
            
            dot.addEventListener('click', () => {
                this.scrollToPeriod(index);
            });

            dot.addEventListener('mouseenter', () => {
                dot.style.background = '#ffd700';
                dot.style.borderColor = '#ff8c00';
                dot.style.transform = 'scale(1.5)';
                label.style.opacity = '1';
            });

            dot.addEventListener('mouseleave', () => {
                dot.style.background = 'rgba(255, 215, 0, 0.3)';
                dot.style.borderColor = 'transparent';
                dot.style.transform = 'scale(1)';
                label.style.opacity = '0';
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
}
