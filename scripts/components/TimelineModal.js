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
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modalTitle"></h2>
                    <button class="modal-close">×</button>
                </div>
                <div class="modal-body" id="modalBody">
                    <!-- 内容将在这里动态加载 -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    addEventListeners() {
        // 监听ESC键关闭模态框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // 监听模态框内的点击事件
        const modal = document.getElementById('periodModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                // 点击遮罩层关闭
                if (e.target.classList.contains('modal-overlay')) {
                    this.closeModal();
                }
                // 点击关闭按钮
                if (e.target.classList.contains('modal-close')) {
                    this.closeModal();
                }
            });
        }
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
                    <div class="historical-facts">
                        <h4>重要历史事件</h4>
                        <ul>
                            ${this.getHistoricalEvents(period.period).map(event => `<li>${event}</li>`).join('')}
                        </ul>
                    </div>
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
                                    <div class="treasure-significance">
                                        <h5>文化意义</h5>
                                        <p>${this.getTreasureSignificance(treasure.name)}</p>
                                    </div>
                                    <div class="treasure-tags">
                                        <span class="tag tag-era">${period.period}</span>
                                        <span class="tag tag-location">${treasure.location}</span>
                                        <span class="tag tag-material">${this.getMaterial(treasure.name)}</span>
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
                            <span class="stat-number">${this.getYearRange(period.year)}</span>
                            <span class="stat-label">历史跨度</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${new Set(period.treasures.map(t => t.location.split(' ')[0])).size}</span>
                            <span class="stat-label">发现省份</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${this.getTechAchievements(period.period).length}</span>
                            <span class="stat-label">技术成就</span>
                        </div>
                    </div>
                </div>

                <div class="period-technology">
                    <h3>🔬 科技成就</h3>
                    <div class="tech-achievements">
                        ${this.getTechAchievements(period.period).map(tech => `
                            <div class="tech-item">
                                <h4>${tech.name}</h4>
                                <p>${tech.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="period-culture">
                    <h3>🎭 文化特色</h3>
                    <div class="culture-aspects">
                        ${this.getCultureAspects(period.period).map(aspect => `
                            <div class="culture-item">
                                <span class="culture-icon">${aspect.icon}</span>
                                <div class="culture-content">
                                    <h4>${aspect.title}</h4>
                                    <p>${aspect.description}</p>
                                </div>
                            </div>
                        `).join('')}
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

    getHistoricalEvents(period) {
        const events = {
            '新石器时代': [
                '原始农业的兴起，开始种植粟和稻',
                '陶器制作技术的发展',
                '原始宗教和图腾崇拜的形成',
                '氏族社会的发展和母系社会向父系社会的转变'
            ],
            '夏朝': [
                '大禹治水，奠定王朝基础',
                '世袭制的确立，启继承禹位',
                '青铜器制作技术的初步发展',
                '城市和宫殿建筑的出现'
            ],
            '商朝': [
                '成汤灭夏，建立商朝',
                '甲骨文的成熟和使用',
                '青铜器制作达到高峰',
                '商王武丁时期的鼎盛',
                '妇好等女性政治家的出现'
            ],
            '周朝': [
                '武王伐纣，推翻商朝',
                '分封制和井田制的建立',
                '礼乐制度的完善',
                '春秋五霸和战国七雄的争霸',
                '百家争鸣思想的繁荣'
            ],
            '秦朝': [
                '秦始皇统一六国',
                '书同文，车同轨的统一政策',
                '万里长城的修建',
                '郡县制的建立',
                '焚书坑儒事件'
            ],
            '汉朝': [
                '刘邦建立西汉',
                '文景之治的繁荣',
                '汉武帝开疆拓土',
                '丝绸之路的开辟',
                '造纸术的发明'
            ],
            '唐朝': [
                '贞观之治的盛世',
                '武则天称帝',
                '开元盛世的辉煌',
                '安史之乱的转折',
                '诗歌艺术的黄金时代'
            ],
            '宋朝': [
                '陈桥兵变，赵匡胤建宋',
                '活字印刷术的发明',
                '指南针的广泛使用',
                '火药武器的发展',
                '理学思想的兴起'
            ],
            '明朝': [
                '朱元璋建立明朝',
                '永乐大典的编纂',
                '郑和七下西洋',
                '紫禁城的建造',
                '科举制度的完善'
            ],
            '清朝': [
                '康乾盛世的繁荣',
                '《四库全书》的编纂',
                '疆域的最大扩展',
                '闭关锁国政策',
                '鸦片战争的开始'
            ]
        };
        return events[period] || ['历史记录有待考证'];
    }

    getTreasureSignificance(treasureName) {
        const significance = {
            '仰韶文化彩陶': '代表了中国彩陶艺术的最高成就，反映了史前人类的审美观念和精神世界',
            '河姆渡骨耜': '是中国稻作农业起源的重要证据，证明了长江流域是世界稻作农业的发源地之一',
            '红山文化玉龙': '被誉为"华夏第一龙"，是中华民族龙图腾文化的源头，具有重要的文化象征意义',
            '二里头青铜器': '标志着中国进入青铜时代，代表了早期国家政权的物质文化特征',
            '司母戊鼎': '体现了商代青铜铸造技术的最高水平，是王权和礼制文化的重要象征',
            '甲骨文': '是现存最早的成熟汉字系统，为研究商代历史提供了珍贵的第一手资料',
            '四羊方尊': '展现了商代青铜器装饰艺术的巅峰水平，体现了古代工匠的卓越技艺',
            '三星堆青铜大立人': '展现了古蜀文明的独特风格，证明了中华文明的多元一体格局',
            '毛公鼎': '其铭文是研究西周历史的重要史料，体现了西周的政治制度和社会关系',
            '越王勾践剑': '展现了春秋时期高超的冶金技术，是古代兵器制作的杰作',
            '曾侯乙编钟': '代表了中国古代音乐文化的最高成就，展现了先秦时期的礼乐文明',
            '兵马俑': '展现了秦朝的军事实力和艺术水平，是世界考古史上的伟大发现',
            '马踏飞燕': '体现了汉代雕塑艺术的高度成就，象征着汉民族奋发向上的精神',
            '金缕玉衣': '反映了汉代的丧葬观念和玉器工艺，体现了古人对永生的追求',
            '长信宫灯': '展现了汉代科技与艺术的完美结合，体现了古代的环保理念',
            '唐三彩骆驼载乐俑': '反映了唐代丝绸之路的繁荣和多元文化交流',
            '清明上河图': '是研究宋代社会生活的百科全书，展现了北宋都城的繁华景象',
            '汝窑青瓷': '代表了宋代瓷器烧制技术的最高水平，体现了宋人的审美追求',
            '永乐大典': '是中国古代最大的类书，集中了中华文明的精华',
            '翡翠白菜': '展现了清代玉雕工艺的精湛技艺，寓意清白廉洁'
        };
        return significance[treasureName] || '具有重要的历史文化价值，是中华文明的瑰宝';
    }

    getMaterial(treasureName) {
        const materials = {
            '仰韶文化彩陶': '陶土',
            '河姆渡骨耜': '动物骨骼',
            '红山文化玉龙': '岫岩玉',
            '二里头青铜器': '青铜',
            '司母戊鼎': '青铜',
            '甲骨文': '龟甲兽骨',
            '四羊方尊': '青铜',
            '三星堆青铜大立人': '青铜',
            '毛公鼎': '青铜',
            '越王勾践剑': '青铜',
            '曾侯乙编钟': '青铜',
            '兵马俑': '陶土',
            '马踏飞燕': '青铜',
            '金缕玉衣': '玉石金丝',
            '长信宫灯': '青铜',
            '唐三彩骆驼载乐俑': '陶瓷',
            '清明上河图': '绢本',
            '汝窑青瓷': '瓷器',
            '永乐大典': '纸质',
            '翡翠白菜': '翡翠'
        };
        return materials[treasureName] || '综合材质';
    }

    getYearRange(yearStr) {
        const matches = yearStr.match(/(\d+)/g);
        if (matches && matches.length >= 2) {
            return `${Math.abs(matches[1] - matches[0])}年`;
        }
        return '数千年';
    }

    getTechAchievements(period) {
        const achievements = {
            '新石器时代': [
                { name: '陶器制作', description: '掌握了火的使用和陶土烧制技术' },
                { name: '农业技术', description: '驯化作物，发展原始农业' },
                { name: '石器加工', description: '磨制石器技术的发展' }
            ],
            '夏朝': [
                { name: '青铜冶炼', description: '早期青铜器制作技术的出现' },
                { name: '城市规划', description: '大型聚落和城市的规划建设' },
                { name: '水利工程', description: '大规模治水工程的实施' }
            ],
            '商朝': [
                { name: '青铜铸造', description: '青铜器制作技术达到高峰' },
                { name: '文字系统', description: '甲骨文成熟，形成完整文字体系' },
                { name: '历法天文', description: '十天干、十二地支的历法系统' }
            ],
            '周朝': [
                { name: '铁器技术', description: '铁器制作和使用的普及' },
                { name: '农业工具', description: '铁制农具大大提高生产效率' },
                { name: '建筑技术', description: '大型宫殿和城市建筑技术' }
            ],
            '秦朝': [
                { name: '统一标准', description: '度量衡、货币、文字的统一' },
                { name: '工程建设', description: '万里长城等大型工程的建造' },
                { name: '交通网络', description: '全国道路交通网络的建立' }
            ],
            '汉朝': [
                { name: '造纸术', description: '蔡伦改进造纸术，促进文化传播' },
                { name: '冶铁技术', description: '炼铁和制钢技术的重大进步' },
                { name: '医学发展', description: '《黄帝内经》等医学经典的形成' }
            ],
            '唐朝': [
                { name: '雕版印刷', description: '印刷术的发明和广泛应用' },
                { name: '火药技术', description: '火药的发明和军事应用' },
                { name: '建筑工程', description: '大型宫殿和寺庙建筑技术' }
            ],
            '宋朝': [
                { name: '活字印刷', description: '毕昇发明活字印刷术' },
                { name: '指南针', description: '指南针在航海中的广泛应用' },
                { name: '火药武器', description: '火药武器的发展和改进' }
            ],
            '明朝': [
                { name: '航海技术', description: '郑和下西洋的先进航海技术' },
                { name: '建筑工艺', description: '紫禁城等大型建筑群的建造' },
                { name: '瓷器工艺', description: '青花瓷等瓷器制作技术的完善' }
            ],
            '清朝': [
                { name: '编纂技术', description: '大型丛书编纂和刻印技术' },
                { name: '工艺美术', description: '珐琅、景泰蓝等工艺的发展' },
                { name: '测绘技术', description: '全国地图测绘和制图技术' }
            ]
        };
        return achievements[period] || [];
    }

    getCultureAspects(period) {
        const aspects = {
            '新石器时代': [
                { icon: '🏺', title: '陶器艺术', description: '彩陶文化展现了史前人类的艺术创造力' },
                { icon: '🌾', title: '农业文明', description: '从采集狩猎向农业生产的重大转变' },
                { icon: '⛩️', title: '原始宗教', description: '图腾崇拜和祖先崇拜的早期形式' }
            ],
            '夏朝': [
                { icon: '👑', title: '王权政治', description: '世袭制度的确立和王权的神圣化' },
                { icon: '🏛️', title: '礼制文化', description: '早期礼制和等级秩序的形成' },
                { icon: '💧', title: '治水文化', description: '大禹治水传说体现的民族精神' }
            ],
            '商朝': [
                { icon: '📜', title: '文字文化', description: '甲骨文的使用标志着文明的成熟' },
                { icon: '🔮', title: '占卜文化', description: '通过占卜与神灵沟通的宗教实践' },
                { icon: '⚱️', title: '青铜文明', description: '青铜器在礼仪和日常生活中的重要地位' }
            ],
            '周朝': [
                { icon: '🎵', title: '礼乐文化', description: '礼乐制度成为社会秩序的重要基础' },
                { icon: '🤔', title: '哲学思想', description: '百家争鸣，思想文化的空前繁荣' },
                { icon: '⚔️', title: '武士文化', description: '贵族武士阶层的形成和发展' }
            ],
            '秦朝': [
                { icon: '🏛️', title: '帝制文化', description: '皇帝制度的建立和中央集权文化' },
                { icon: '📏', title: '统一文化', description: '书同文车同轨的文化统一政策' },
                { icon: '🛡️', title: '法制文化', description: '严刑峻法的法家思想实践' }
            ],
            '汉朝': [
                { icon: '🌏', title: '开放文化', description: '丝绸之路促进的中外文化交流' },
                { icon: '📚', title: '经学文化', description: '儒家经典的整理和传承' },
                { icon: '🎭', title: '民俗文化', description: '汉族文化特色和民俗传统的形成' }
            ],
            '唐朝': [
                { icon: '🌟', title: '盛世文化', description: '国力强盛带来的文化自信和开放' },
                { icon: '📝', title: '诗歌文化', description: '唐诗达到中国古典诗歌的最高峰' },
                { icon: '🌍', title: '国际文化', description: '长安作为国际大都市的文化辐射' }
            ],
            '宋朝': [
                { icon: '🔬', title: '理学文化', description: '程朱理学对后世的深远影响' },
                { icon: '🎨', title: '雅致文化', description: '文人雅士追求的精致生活方式' },
                { icon: '💡', title: '科技文化', description: '四大发明推动的技术文明进步' }
            ],
            '明朝': [
                { icon: '🚢', title: '海洋文化', description: '郑和下西洋展现的海洋探索精神' },
                { icon: '🏰', title: '宫廷文化', description: '紫禁城代表的皇家建筑文化' },
                { icon: '📖', title: '典籍文化', description: '大型类书编纂和文献整理传统' }
            ],
            '清朝': [
                { icon: '🤝', title: '融合文化', description: '满汉文化的交流融合' },
                { icon: '🎯', title: '考据文化', description: '清代朴学和考据学的发展' },
                { icon: '🎪', title: '民间文化', description: '戏曲小说等民间文艺的繁荣' }
            ]
        };
        return aspects[period] || [];
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
        if (modal) {
            modal.classList.remove('modal-active');
            
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
}
