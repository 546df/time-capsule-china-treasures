
// 画廊页面功能
const treasuresData = [
    // 新石器时代文物
    {
        id: 1,
        name: '仰韶文化彩陶',
        dynasty: '新石器时代',
        period: '约5000-7000年前',
        category: '陶器',
        location: '河南',
        description: '仰韶文化的代表性彩陶，以其精美的几何纹样和鱼纹、鸟纹等动物纹饰而著称。这些彩陶不仅是实用器具，更是史前艺术的杰作，反映了原始社会的审美观念和精神世界。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        detailedInfo: {
            material: '陶土、矿物颜料',
            dimensions: '高20-40厘米不等',
            weight: '1-3公斤',
            discovery: '1921年河南渑池仰韶村遗址',
            currentLocation: '中国国家博物馆'
        }
    },
    {
        id: 2,
        name: '河姆渡骨耜',
        dynasty: '新石器时代',
        period: '约7000年前',
        category: '农具',
        location: '浙江',
        description: '河姆渡文化的典型农具，用动物肩胛骨制成，是中国稻作农业起源的重要证据。这些骨耜证明了长江流域是世界稻作农业的发源地之一。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: '红山文化玉龙',
        dynasty: '新石器时代',
        period: '约5000年前',
        category: '玉器',
        location: '内蒙古',
        description: '被誉为"华夏第一龙"的红山文化玉龙，呈C形蜷曲状，造型古朴神秘。这件玉龙是中华民族龙图腾文化的源头，具有重要的文化象征意义。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 夏朝文物
    {
        id: 4,
        name: '二里头青铜器',
        dynasty: '夏朝',
        period: '约公元前1800年',
        category: '青铜器',
        location: '河南洛阳',
        description: '二里头遗址出土的青铜器，标志着中国青铜时代的开始。这些早期青铜器虽然造型简单，但工艺已相当成熟，为商周青铜文明奠定了基础。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: '二里头绿松石龙形器',
        dynasty: '夏朝',
        period: '约公元前1700年',
        category: '装饰品',
        location: '河南洛阳',
        description: '用绿松石片拼接而成的龙形装饰器，长64厘米，由2000多片绿松石组成。这件器物展现了夏代高超的工艺水平和龙崇拜文化。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    // 商朝文物
    {
        id: 6,
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
        id: 7,
        name: '妇好鸮尊',
        dynasty: '商朝',
        period: '约公元前1200年',
        category: '青铜器',
        location: '河南安阳',
        description: '商代青铜酒器，以鸮（猫头鹰）为造型，线条流畅，纹饰精美。鸮在商代被视为战神，此尊出土于妇好墓，体现了商代女性的崇高地位和精湛的青铜铸造工艺。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 8,
        name: '甲骨文',
        dynasty: '商朝',
        period: '约公元前1300年',
        category: '文字',
        location: '河南安阳',
        description: '中国现存最早的成熟文字系统，刻在龟甲和兽骨上，主要用于占卜和记录。甲骨文的发现证实了商朝的存在，为研究商代历史提供了珍贵资料。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 9,
        name: '四羊方尊',
        dynasty: '商朝',
        period: '约公元前1300年',
        category: '青铜器',
        location: '湖南宁乡',
        description: '商代青铜艺术的巅峰之作，尊的四角各有一羊首，造型独特，工艺复杂。整器采用分铸法制作，体现了商代工匠的卓越技艺和艺术创造力。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 10,
        name: '三星堆青铜大立人',
        dynasty: '商朝',
        period: '约公元前1200年',
        category: '青铜器',
        location: '四川广汉',
        description: '三星堆文化的代表作品，高达180厘米的青铜立人像，双手环握中空，神态庄严肃穆。这件作品展现了古蜀文明的独特风格，证明了中华文明的多元一体格局。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    // 周朝文物
    {
        id: 11,
        name: '毛公鼎',
        dynasty: '周朝',
        period: '约公元前9世纪',
        category: '青铜器',
        location: '陕西岐山',
        description: '西周晚期青铜器，因铭文中有"毛公"字样而得名。铭文共32行，497字，是已知西周青铜器铭文中最长的一篇，记录了周宣王册命毛公的史实。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 12,
        name: '大盂鼎',
        dynasty: '周朝',
        period: '约公元前1000年',
        category: '青铜器',
        location: '陕西岐山',
        description: '西周康王时期的重要礼器，腹内铸有291字铭文，记述了册命盂的史实。铭文内容丰富，是研究西周历史和金文书法的重要资料。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 13,
        name: '虢季子白盘',
        dynasty: '周朝',
        period: '约公元前800年',
        category: '青铜器',
        location: '陕西宝鸡',
        description: '春秋时期虢国重器，盘内铸有111字铭文，记录了虢季子白征战的功绩。盘形制宏大，纹饰精美，工艺精湛，是春秋青铜器的代表作。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 14,
        name: '越王勾践剑',
        dynasty: '周朝',
        period: '约公元前500年',
        category: '兵器',
        location: '湖北江陵',
        description: '春秋晚期越国青铜剑，剑身布满菱形纹饰，剑刃锋利无比，历经两千多年仍然寒光闪闪，被誉为"天下第一剑"。剑格正面嵌蓝色琉璃，背面嵌绿松石。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 15,
        name: '曾侯乙编钟',
        dynasty: '周朝',
        period: '约公元前400年',
        category: '乐器',
        location: '湖北随州',
        description: '战国早期的大型青铜乐器，共65件，分三层八组悬挂。编钟音域宽广，音色优美，能演奏五声、六声和七声音阶，是中国古代音乐文化的杰作。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 秦朝文物
    {
        id: 16,
        name: '兵马俑',
        dynasty: '秦朝',
        period: '约公元前210年',
        category: '陶俑',
        location: '陕西西安',
        description: '秦始皇陵兵马俑是世界考古史上最伟大的发现之一。数千个陶制士兵、战马和战车排列整齐，形态各异，栩栩如生，被誉为"世界第八大奇迹"。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 17,
        name: '秦始皇陵铜车马',
        dynasty: '秦朝',
        period: '约公元前210年',
        category: '青铜器',
        location: '陕西西安',
        description: '秦始皇陵出土的大型彩绘铜车马，车马通长317厘米，由3000多个零部件组成。车马造型逼真，工艺精湛，彩绘绚丽，是古代金属工艺的杰作。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 汉朝文物
    {
        id: 18,
        name: '马踏飞燕',
        dynasty: '汉朝',
        period: '约公元2世纪',
        category: '青铜器',
        location: '甘肃武威',
        description: '又称"铜奔马"，是汉代青铜艺术的杰作。马身体修长，昂首嘶鸣，三足腾空，一足踏在飞燕背上，表现了骏马凌空飞驰的雄姿，体现了汉代高超的铸造工艺和艺术想象力。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 19,
        name: '金缕玉衣',
        dynasty: '汉朝',
        period: '约公元前100年',
        category: '丧葬用品',
        location: '河北满城',
        description: '西汉中山靖王刘胜的殓服，由2498片玉片用金丝连缀而成。玉衣制作工艺复杂，反映了汉代人对玉石的崇拜和对永生的追求。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 20,
        name: '长信宫灯',
        dynasty: '汉朝',
        period: '约公元前150年',
        category: '青铜器',
        location: '河北满城',
        description: '西汉青铜宫灯，宫女手执灯具，衣袖可转动调节光线方向，烟雾通过中空的躯体进入腹腔，设计科学，环保节能，体现了古代科技与艺术的完美结合。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 21,
        name: '马王堆汉墓漆器',
        dynasty: '汉朝',
        period: '约公元前100年',
        category: '漆器',
        location: '湖南长沙',
        description: '马王堆汉墓出土的精美漆器，包括鼎、壶、盒、案等多种器形。这些漆器保存完好，色彩鲜艳，纹饰精美，展现了汉代漆器工艺的高度成就。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 魏晋南北朝文物
    {
        id: 22,
        name: '云冈石窟造像',
        dynasty: '魏晋南北朝',
        period: '约公元460年',
        category: '石雕',
        location: '山西大同',
        description: '北魏皇室开凿的大型石窟群，现存主要洞窟45个，造像51000余躯。云冈石窟是中国规模最大的古代石窟群之一，代表了公元5-6世纪佛教艺术的最高成就。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 23,
        name: '龙门石窟卢舍那大佛',
        dynasty: '魏晋南北朝',
        period: '约公元675年',
        category: '石雕',
        location: '河南洛阳',
        description: '奉先寺的主尊卢舍那大佛，通高17.14米，头高4米，面容慈祥庄严。据说佛像面部参照了武则天的容貌，是龙门石窟最具代表性的作品。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 唐朝文物
    {
        id: 24,
        name: '唐三彩骆驼载乐俑',
        dynasty: '唐朝',
        period: '约公元8世纪',
        category: '陶瓷',
        location: '陕西西安',
        description: '盛唐时期的三彩陶俑，以骆驼为载体，上有胡人乐队演奏。色彩绚丽，造型生动，展现了丝绸之路上的音乐文化交流，体现了唐代开放包容的文化特色。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 25,
        name: '何家村金银器',
        dynasty: '唐朝',
        period: '约公元8世纪',
        category: '金银器',
        location: '陕西西安',
        description: '1970年发现的唐代金银器窖藏，包含各类金银器皿270余件，工艺精美，装饰华丽。其中鎏金银盒、八瓣团花金杯等展现了唐代金银器制作的最高水平。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 26,
        name: '敦煌莫高窟壁画',
        dynasty: '唐朝',
        period: '约公元7-8世纪',
        category: '壁画',
        location: '甘肃敦煌',
        description: '莫高窟是世界上现存规模最大、内容最丰富的佛教艺术圣地。唐代壁画以其绚丽的色彩、精美的技法和丰富的题材而著称，是佛教艺术的瑰宝。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 宋朝文物
    {
        id: 27,
        name: '清明上河图',
        dynasty: '宋朝',
        period: '约公元12世纪',
        category: '绘画',
        location: '开封',
        description: '北宋画家张择端的传世名作，以长卷形式生动记录了北宋都城汴京清明时节的繁华景象。画中人物众多，建筑精美，是研究宋代社会生活的重要史料。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 28,
        name: '汝窑天青釉茶盏',
        dynasty: '宋朝',
        period: '约公元1100年',
        category: '瓷器',
        location: '河南宝丰',
        description: '北宋汝窑瓷器，釉色如天青色，质地温润如玉。汝窑是宋代五大名窑之首，烧制时间短，传世品极为珍贵，被誉为"汝窑为魁"。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 29,
        name: '定窑白瓷刻花萱草纹碗',
        dynasty: '宋朝',
        period: '约公元1000年',
        category: '瓷器',
        location: '河北曲阳',
        description: '北宋定窑白瓷，胎质洁白细腻，釉色莹润如玉。碗内刻有萱草纹，线条流畅，刀法娴熟，体现了宋代瓷器的审美追求和高超工艺。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 元朝文物
    {
        id: 30,
        name: '元青花萧何月下追韩信图梅瓶',
        dynasty: '元朝',
        period: '约公元14世纪',
        category: '瓷器',
        location: '江苏南京',
        description: '元代青花瓷的代表作，梅瓶上绘有萧何月下追韩信的历史故事。青花发色浓艳，画工精细，是元代青花瓷中的极品。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    // 明朝文物
    {
        id: 31,
        name: '永乐大典',
        dynasty: '明朝',
        period: '约公元15世纪',
        category: '典籍',
        location: '北京',
        description: '明成祖时期编纂的大型类书，共22937卷，是中国古代最大的百科全书。汇集了中国古代重要典籍，对保存和传承中华文化发挥了重要作用。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 32,
        name: '明宣德青花瓷',
        dynasty: '明朝',
        period: '约公元1430年',
        category: '瓷器',
        location: '江西景德镇',
        description: '明宣德年间烧制的青花瓷器，以其浓艳的青花色彩和精美的纹饰而著称。胎质洁白，釉面莹润，青花发色浓艳，被誉为青花瓷的黄金时代。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 33,
        name: '郑和宝船模型',
        dynasty: '明朝',
        period: '约公元1405年',
        category: '船舶',
        location: '江苏南京',
        description: '明代郑和下西洋时使用的宝船模型，船体庞大，设备完善。郑和七下西洋，促进了中外文化交流，展现了明代的造船技术和航海实力。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 34,
        name: '明代斗彩鸡缸杯',
        dynasty: '明朝',
        period: '约公元1470年',
        category: '瓷器',
        location: '江西景德镇',
        description: '明成化年间烧制的斗彩瓷器珍品，杯上绘有公鸡、母鸡和雏鸡，色彩鲜艳，画工精细。斗彩是明代创烧的新工艺，此杯是其代表作。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    // 清朝文物
    {
        id: 35,
        name: '翡翠白菜',
        dynasty: '清朝',
        period: '约公元19世纪',
        category: '玉器',
        location: '北京故宫',
        description: '清代玉雕精品，以翡翠雕成白菜形状，菜叶上还趴着两只昆虫。工艺精湛，利用翡翠的天然颜色，寓意清白，是清代宫廷艺术的代表作品。',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
        id: 36,
        name: '康熙粉彩瓷',
        dynasty: '清朝',
        period: '约公元1700年',
        category: '瓷器',
        location: '江西景德镇',
        description: '清康熙年间创烧的粉彩瓷器，以其淡雅的色彩和精美的纹饰而著称。粉彩技法将中国传统绘画技法与瓷器装饰完美结合，开创了瓷器装饰的新纪元。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 37,
        name: '四库全书',
        dynasty: '清朝',
        period: '约公元1782年',
        category: '典籍',
        location: '北京故宫',
        description: '清乾隆时期编纂的大型丛书，全书共3503种，79337卷，是中国古代最大的丛书。四库全书的编纂是中国文献整理史上的一项伟大工程。',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop'
    },
    {
        id: 38,
        name: '乾隆款金桃皮鞘腰刀',
        dynasty: '清朝',
        period: '约公元1750年',
        category: '兵器',
        location: '北京故宫',
        description: '清乾隆时期御用腰刀，刀身钢制，刀柄用金丝缠绕，刀鞘以桃皮制成。刀身刻有乾隆御制诗，工艺精美，体现了清代宫廷工艺的精湛水平。',
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
        this.updateStats();
    }

    updateStats() {
        const statsContainer = document.querySelector('.gallery-stats');
        if (statsContainer) {
            const totalTreasures = this.treasures.length;
            const dynastyCount = new Set(this.treasures.map(t => t.dynasty)).size;
            const locationCount = new Set(this.treasures.map(t => t.location.split(' ')[0])).size;
            
            statsContainer.innerHTML = `
                <div class="stat-item">
                    <span class="stat-number">${totalTreasures}</span>
                    <span class="stat-label">珍贵文物</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${dynastyCount}</span>
                    <span class="stat-label">历史朝代</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${locationCount}</span>
                    <span class="stat-label">发现地区</span>
                </div>
            `;
        }
    }

    renderGallery() {
        const grid = document.getElementById('galleryGrid');
        if (!grid) return;

        grid.innerHTML = '';

        this.filteredTreasures.forEach(treasure => {
            const card = this.createTreasureCard(treasure);
            grid.appendChild(card);
        });

        // 更新显示数量
        this.updateDisplayCount();
    }

    updateDisplayCount() {
        const countElement = document.querySelector('.display-count');
        if (countElement) {
            countElement.textContent = `显示 ${this.filteredTreasures.length} 件文物`;
        }
    }

    createTreasureCard(treasure) {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.dataset.treasureId = treasure.id;
        
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${treasure.image}" alt="${treasure.name}">
                <div class="card-overlay">
                    <span class="dynasty-tag">${treasure.dynasty}</span>
                    <span class="category-tag">${treasure.category}</span>
                </div>
            </div>
            <div class="gallery-card-content">
                <h3>${treasure.name}</h3>
                <div class="treasure-meta">
                    <div class="dynasty">${treasure.dynasty}</div>
                    <div class="period">${treasure.period}</div>
                    <div class="location">📍 ${treasure.location}</div>
                </div>
                <div class="description">${treasure.description.substring(0, 120)}...</div>
                <div class="card-footer">
                    <button class="view-detail-btn">详细了解</button>
                </div>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-detail-btn')) {
                e.stopPropagation();
                this.showTreasureDetail(treasure);
            }
        });

        // 卡片悬停效果
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
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

        // 添加搜索功能
        this.initSearch();
    }

    initSearch() {
        const searchInput = document.getElementById('treasureSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTreasures(e.target.value);
            });
        }
    }

    searchTreasures(query) {
        if (!query) {
            this.filteredTreasures = [...this.treasures];
        } else {
            this.filteredTreasures = this.treasures.filter(treasure => 
                treasure.name.toLowerCase().includes(query.toLowerCase()) ||
                treasure.dynasty.toLowerCase().includes(query.toLowerCase()) ||
                treasure.location.toLowerCase().includes(query.toLowerCase()) ||
                treasure.category.toLowerCase().includes(query.toLowerCase())
            );
        }
        this.renderGallery();
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
                this.closeModal();
            });
        }

        // 点击模态框外部关闭
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    showTreasureDetail(treasure) {
        const modal = document.getElementById('treasureModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="treasure-detail-container">
                <div class="treasure-main-info">
                    <div class="treasure-image-section">
                        <img src="${treasure.image}" alt="${treasure.name}" class="modal-treasure-image">
                        <div class="image-tags">
                            <span class="tag dynasty-tag">${treasure.dynasty}</span>
                            <span class="tag category-tag">${treasure.category}</span>
                        </div>
                    </div>
                    <div class="treasure-info-section">
                        <h2 class="modal-treasure-title">${treasure.name}</h2>
                        <div class="modal-treasure-meta">
                            <div class="meta-row">
                                <div class="meta-item">
                                    <div class="meta-label">历史朝代</div>
                                    <div class="meta-value">${treasure.dynasty}</div>
                                </div>
                                <div class="meta-item">
                                    <div class="meta-label">年代时期</div>
                                    <div class="meta-value">${treasure.period}</div>
                                </div>
                            </div>
                            <div class="meta-row">
                                <div class="meta-item">
                                    <div class="meta-label">文物类别</div>
                                    <div class="meta-value">${treasure.category}</div>
                                </div>
                                <div class="meta-item">
                                    <div class="meta-label">出土地点</div>
                                    <div class="meta-value">${treasure.location}</div>
                                </div>
                            </div>
                        </div>
                        
                        ${treasure.detailedInfo ? `
                        <div class="detailed-info">
                            <h3>详细信息</h3>
                            <div class="detail-grid">
                                <div class="detail-item">
                                    <span class="detail-label">材质：</span>
                                    <span class="detail-value">${treasure.detailedInfo.material}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">尺寸：</span>
                                    <span class="detail-value">${treasure.detailedInfo.dimensions}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">重量：</span>
                                    <span class="detail-value">${treasure.detailedInfo.weight}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">发现时间：</span>
                                    <span class="detail-value">${treasure.detailedInfo.discovery}</span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">收藏地：</span>
                                    <span class="detail-value">${treasure.detailedInfo.currentLocation}</span>
                                </div>
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="treasure-description-section">
                    <h3>文物介绍</h3>
                    <p class="modal-treasure-description">${treasure.description}</p>
                </div>
                
                <div class="related-treasures">
                    <h3>相关文物</h3>
                    <div class="related-grid">
                        ${this.getRelatedTreasures(treasure).map(related => `
                            <div class="related-item" data-treasure-id="${related.id}">
                                <img src="${related.image}" alt="${related.name}">
                                <div class="related-info">
                                    <h4>${related.name}</h4>
                                    <p>${related.dynasty}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // 添加相关文物点击事件
        modalBody.querySelectorAll('.related-item').forEach(item => {
            item.addEventListener('click', () => {
                const treasureId = parseInt(item.dataset.treasureId);
                const relatedTreasure = this.treasures.find(t => t.id === treasureId);
                if (relatedTreasure) {
                    this.showTreasureDetail(relatedTreasure);
                }
            });
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 添加入场动画
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }

    getRelatedTreasures(treasure) {
        return this.treasures
            .filter(t => t.dynasty === treasure.dynasty && t.id !== treasure.id)
            .slice(0, 3);
    }

    closeModal() {
        const modal = document.getElementById('treasureModal');
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// 初始化画廊
document.addEventListener('DOMContentLoaded', () => {
    new GalleryManager();
});
