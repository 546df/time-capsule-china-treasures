
// Timeline scroll animations
export class TimelineAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.addScrollAnimations();
        this.addStyles();
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

    addStyles() {
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
                cursor: pointer;
            }

            .treasure-mini:hover {
                transform: scale(1.1);
                background: rgba(255, 215, 0, 0.1) !important;
            }

            /* 模态框样式 */
            .period-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
                align-items: center;
                justify-content: center;
            }

            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
            }

            .modal-content {
                position: relative;
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border-radius: 20px;
                max-width: 90vw;
                max-height: 90vh;
                overflow-y: auto;
                border: 1px solid rgba(255, 215, 0, 0.3);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            }

            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;
                border-bottom: 1px solid rgba(255, 215, 0, 0.3);
                background: rgba(255, 215, 0, 0.1);
            }

            .modal-header h2 {
                color: #ffd700;
                font-size: 2rem;
                margin: 0;
            }

            .modal-close {
                background: none;
                border: none;
                color: #ffd700;
                font-size: 2rem;
                cursor: pointer;
                transition: color 0.3s ease;
            }

            .modal-close:hover {
                color: #ff8c00;
            }

            .modal-body {
                padding: 2rem;
            }

            .period-detail h3 {
                color: #ffd700;
                margin-bottom: 1rem;
                font-size: 1.5rem;
            }

            .period-intro {
                margin-bottom: 2rem;
            }

            .period-intro p {
                color: #e0e0e0;
                line-height: 1.8;
                font-size: 1.1rem;
            }

            .period-video {
                margin-bottom: 2rem;
            }

            .video-container {
                position: relative;
                width: 100%;
                height: 0;
                padding-bottom: 56.25%;
                background: rgba(0, 0, 0, 0.5);
                border-radius: 10px;
                overflow: hidden;
            }

            .video-container iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            .treasures-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
            }

            .treasure-detail-card {
                background: rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                overflow: hidden;
                transition: transform 0.3s ease;
            }

            .treasure-detail-card:hover {
                transform: scale(1.02);
            }

            .treasure-detail-card img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }

            .treasure-info {
                padding: 1.5rem;
            }

            .treasure-info h4 {
                color: #ffd700;
                margin-bottom: 0.5rem;
                font-size: 1.2rem;
            }

            .treasure-info .location {
                color: #ff8c00;
                margin-bottom: 0.5rem;
            }

            .treasure-info .description {
                color: #ccc;
                margin-bottom: 1rem;
            }

            .treasure-info .detail {
                color: #e0e0e0;
                font-size: 0.9rem;
                line-height: 1.6;
            }

            .treasure-single-detail {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                align-items: start;
            }

            .treasure-single-detail .treasure-image img {
                width: 100%;
                height: 400px;
                object-fit: cover;
                border-radius: 10px;
            }

            .treasure-single-detail .treasure-content h3 {
                color: #ffd700;
                font-size: 2rem;
                margin-bottom: 1rem;
            }

            .treasure-single-detail .period {
                color: #ff8c00;
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }

            .treasure-single-detail .location {
                color: #ccc;
                margin-bottom: 1rem;
            }

            .treasure-single-detail .description {
                color: #e0e0e0;
                margin-bottom: 1rem;
                font-size: 1.1rem;
            }

            .treasure-single-detail .detail {
                color: #e0e0e0;
                line-height: 1.8;
            }

            @media (max-width: 768px) {
                .timeline-nav {
                    display: none;
                }

                .modal-content {
                    max-width: 95vw;
                    max-height: 95vh;
                }

                .modal-header {
                    padding: 1rem;
                }

                .modal-header h2 {
                    font-size: 1.5rem;
                }

                .modal-body {
                    padding: 1rem;
                }

                .treasures-grid {
                    grid-template-columns: 1fr;
                }

                .treasure-single-detail {
                    grid-template-columns: 1fr;
                }

                .video-container {
                    padding-bottom: 75%;
                }
            }
        `;
        document.head.appendChild(timelineStyle);
    }
}
