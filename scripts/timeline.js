
// 时间轴页面功能 - 扩展版
const timelineData = [
    {
        period: "新石器时代",
        year: "约8000-2000年前",
        dynasty: "史前文明",
        description: "中华文明的萌芽时期，出现了原始农业、陶器制作和早期聚落。",
        detailDescription: "新石器时代是中华文明的重要起源期，这一时期人类开始定居生活，发展农业，制作陶器和石器工具。仰韶文化、龙山文化等代表了这一时期的高度发展。考古发现表明，这一时期已经出现了复杂的社会组织和宗教信仰。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "仰韶文化彩陶",
                location: "河南",
                description: "精美的彩绘陶器，展现史前艺术",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "仰韶文化彩陶以其精美的几何纹样和动物纹饰而著称，反映了史前人类的审美意识。"
            },
            {
                name: "河姆渡骨耜",
                location: "浙江",
                description: "原始农业工具，稻作文明见证",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "河姆渡文化的骨耜是中国稻作农业起源的重要证据，展现了古代人类的智慧。"
            },
            {
                name: "红山文化玉龙",
                location: "内蒙古",
                description: "华夏第一龙，龙文化起源",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "红山文化玉龙被誉为"华夏第一龙"，是中华民族龙图腾信仰的最早实物见证。"
            }
        ]
    },
    {
        period: "夏朝",
        year: "约公元前2070-1600年",
        dynasty: "中国第一个王朝",
        description: "传说中的第一个世袭王朝，开创了中国古代政治制度的先河。",
        detailDescription: "夏朝是中国历史上第一个世袭王朝，虽然文献记载较少，但考古发现的二里头文化被认为与夏朝有密切关系。夏朝确立了王权世袭制度，为后来的商周王朝奠定了基础。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "二里头青铜器",
                location: "河南洛阳",
                description: "早期青铜文明代表",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "二里头遗址出土的青铜器标志着中国青铜时代的开始，工艺精湛。"
            },
            {
                name: "二里头绿松石龙形器",
                location: "河南洛阳",
                description: "早期龙形装饰艺术",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "用绿松石片拼接而成的龙形器，展现了夏代高超的工艺水平。"
            }
        ]
    },
    {
        period: "商朝",
        year: "约公元前1600-1046年",
        dynasty: "青铜文明的辉煌",
        description: "中国历史上第一个有文字记载的王朝，青铜器制作达到高峰，甲骨文成熟。",
        detailDescription: "商朝是中国历史上第一个有确切文字记录的王朝。商代青铜器制作工艺达到前所未有的高度，甲骨文的成熟标志着中国文字的正式形成。商代社会等级分明，祭祀文化发达。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "司母戊鼎",
                location: "河南安阳",
                description: "世界最大青铜鼎",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "司母戊鼎重达832.84公斤，是世界上现存最大最重的青铜礼器。"
            },
            {
                name: "妇好鸮尊",
                location: "河南安阳",
                description: "商代青铜酒器精品",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "妇好鸮尊以猫头鹰为造型，体现了商代精湛的青铜铸造工艺。"
            },
            {
                name: "甲骨文",
                location: "河南安阳",
                description: "最早的汉字记录",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "甲骨文是迄今为止发现的最早的成熟汉字，记录了商代的历史。"
            },
            {
                name: "四羊方尊",
                location: "湖南宁乡",
                description: "商代青铜艺术巅峰",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "四羊方尊造型独特，四角各有一羊首，工艺复杂精美。"
            },
            {
                name: "三星堆青铜大立人",
                location: "四川广汉",
                description: "古蜀文明神秘雕像",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "三星堆青铜大立人像高达180厘米，展现了古蜀文明的独特风格。"
            }
        ]
    },
    {
        period: "周朝",
        year: "约公元前1046-256年",
        dynasty: "礼乐文明的确立",
        description: "中国历史上最长的王朝，确立了分封制和礼乐制度，青铜器铭文发达。",
        detailDescription: "周朝是中国历史上存续时间最长的王朝，分为西周和东周两个时期。周朝确立了分封制和礼乐制度，对后世产生了深远影响。青铜器铭文在这一时期达到高度发展，成为重要的史料来源。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "毛公鼎",
                location: "陕西岐山",
                description: "铭文最长的青铜器",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "毛公鼎铭文共497字，是西周青铜器中铭文最长的一件。"
            },
            {
                name: "散氏盘",
                location: "陕西",
                description: "重要的土地契约铭文",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "散氏盘记录了西周时期的土地纠纷和解决过程，是珍贵的法律史料。"
            },
            {
                name: "大盂鼎",
                location: "陕西岐山",
                description: "西周重器",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "大盂鼎是西周康王时期的重要礼器，铭文记录了册命史实。"
            },
            {
                name: "虢季子白盘",
                location: "陕西宝鸡",
                description: "春秋时期重器",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "虢季子白盘铭文记录了虢季子白征战的功绩，是春秋史的重要资料。"
            }
        ]
    },
    {
        period: "春秋战国",
        year: "公元前770-221年",
        dynasty: "思想文化的繁荣",
        description: "百家争鸣的思想黄金期，铁器普及，各国文化艺术百花齐放。",
        detailDescription: "春秋战国时期是中国思想文化的黄金时代，出现了孔子、老子、墨子等伟大思想家。这一时期铁器普及，生产力大幅提高，各国在政治、军事、文化等方面都有重要发展。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "越王勾践剑",
                location: "湖北江陵",
                description: "千年不锈的神兵利器",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "越王勾践剑历经两千多年仍然锋利如新，体现了春秋时期高超的冶金技术。"
            },
            {
                name: "曾侯乙编钟",
                location: "湖北随州",
                description: "古代音乐的瑰宝",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "曾侯乙编钟共65件，音域宽广，音色优美，是中国古代音乐的杰作。"
            },
            {
                name: "战国水晶杯",
                location: "杭州",
                description: "神秘的古代水晶工艺",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "战国水晶杯工艺精湛，晶莹剔透，展现了古代工匠的高超技艺。"
            }
        ]
    },
    {
        period: "秦朝",
        year: "公元前221-206年",
        dynasty: "大一统帝国",
        description: "秦始皇统一六国，建立了中国第一个中央集权的封建王朝。",
        detailDescription: "秦朝虽然存续时间短暂，但对中国历史产生了深远影响。秦始皇统一六国，建立了中央集权制度，统一了文字、货币、度量衡，修建了万里长城，创造了许多历史奇迹。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "兵马俑",
                location: "陕西西安",
                description: "世界第八大奇迹",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "秦始皇陵兵马俑规模宏大，工艺精湛，被誉为世界第八大奇迹。"
            },
            {
                name: "秦始皇陵铜车马",
                location: "陕西西安",
                description: "精美的青铜工艺杰作",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "秦始皇陵铜车马由3000多个零部件组成，工艺之精湛令人惊叹。"
            },
            {
                name: "秦青铜剑",
                location: "陕西西安",
                description: "秦代制式兵器",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "秦青铜剑制作精良，标准化程度高，体现了秦朝的军事实力。"
            }
        ]
    },
    {
        period: "汉朝",
        year: "公元前206年-220年",
        dynasty: "丝绸之路的开拓",
        description: "汉朝开辟丝绸之路，促进了东西方文化交流，汉文化影响深远。",
        detailDescription: "汉朝是中国历史上的重要王朝，分为西汉和东汉。汉朝开辟了丝绸之路，促进了中外文化交流。汉代文化艺术繁荣，科技发达，对后世产生了深远影响。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "马踏飞燕",
                location: "甘肃武威",
                description: "汉代艺术的杰作",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "马踏飞燕造型优美，动感十足，是汉代青铜艺术的代表作。"
            },
            {
                name: "金缕玉衣",
                location: "河北满城",
                description: "汉代皇室殓服",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "金缕玉衣由2498片玉片用金丝连缀而成，工艺复杂精美。"
            },
            {
                name: "长信宫灯",
                location: "河北满城",
                description: "环保理念的古代明灯",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "长信宫灯设计科学，烟雾可通过宫女袖管进入腹腔，体现了环保理念。"
            },
            {
                name: "马王堆汉墓漆器",
                location: "湖南长沙",
                description: "汉代漆器工艺精品",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "马王堆汉墓出土的漆器保存完好，色彩鲜艳，工艺精湛。"
            }
        ]
    },
    {
        period: "魏晋南北朝",
        year: "220-589年",
        dynasty: "文化融合时期",
        description: "政治分裂但文化交流频繁，佛教传入，艺术风格多样化。",
        detailDescription: "魏晋南北朝时期虽然政治分裂，但文化艺术却异常繁荣。佛教在这一时期广泛传播，石窟艺术达到高峰。文学、绘画、雕塑等艺术形式都有重要发展。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "云冈石窟造像",
                location: "山西大同",
                description: "北魏佛教艺术杰作",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "云冈石窟是北魏皇室开凿的大型石窟群，造像精美，艺术价值极高。"
            },
            {
                name: "龙门石窟卢舍那大佛",
                location: "河南洛阳",
                description: "唐代佛教艺术巅峰",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "卢舍那大佛高17.14米，面容慈祥庄严，是唐代佛教艺术的杰作。"
            }
        ]
    },
    {
        period: "唐朝",
        year: "618-907年",
        dynasty: "盛世华章",
        description: "中国古代最鼎盛的时期，文化艺术空前繁荣，对外交流频繁。",
        detailDescription: "唐朝是中国历史上最辉煌的时期之一，国力强盛，文化繁荣，对外交流频繁。唐代诗歌、绘画、雕塑、建筑等艺术形式都达到了很高的水平，影响深远。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "唐三彩骆驼载乐俑",
                location: "陕西西安",
                description: "丝路文化交流的象征",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "唐三彩骆驼载乐俑生动再现了丝绸之路上的文化交流场景。"
            },
            {
                name: "何家村金银器",
                location: "陕西西安",
                description: "唐代金银工艺的巅峰",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "何家村金银器窖藏包含270余件精美器物，工艺精湛，装饰华丽。"
            },
            {
                name: "敦煌莫高窟壁画",
                location: "甘肃敦煌",
                description: "佛教艺术的宝库",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "敦煌莫高窟壁画历经千年，色彩依然鲜艳，是佛教艺术的瑰宝。"
            },
            {
                name: "阎立本《步辇图》",
                location: "北京故宫",
                description: "唐代绘画代表作",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "《步辇图》描绘了唐太宗接见吐蕃使者的场面，是唐代绘画的代表作。"
            }
        ]
    },
    {
        period: "宋朝",
        year: "960-1279年",
        dynasty: "科技文化的巅峰",
        description: "科技发达，文化繁荣，出现了四大发明，绘画艺术达到新高度。",
        detailDescription: "宋朝是中国科技和文化的高峰期，四大发明中的指南针、火药、活字印刷术都在这一时期得到发展。宋代绘画、瓷器、文学等都达到了很高的水平。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "清明上河图",
                location: "北京故宫",
                description: "北宋风俗画的杰作",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "《清明上河图》生动描绘了北宋汴京的繁华景象，是中国绘画史的瑰宝。"
            },
            {
                name: "汝窑青瓷",
                location: "河南宝丰",
                description: "宋代瓷器之冠",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "汝窑青瓷釉色如天青，质地温润如玉，是宋代瓷器的代表。"
            },
            {
                name: "定窑白瓷",
                location: "河北曲阳",
                description: "宋代白瓷精品",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "定窑白瓷胎质洁白细腻，装饰精美，是宋代瓷器的重要品种。"
            },
            {
                name: "张择端《清明上河图》",
                location: "北京故宫",
                description: "宋代市井生活画卷",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "这幅长卷详细描绘了北宋都城汴京的繁荣景象，是珍贵的历史资料。"
            }
        ]
    },
    {
        period: "元朝",
        year: "1271-1368年",
        dynasty: "多元文化融合",
        description: "蒙古族建立的王朝，促进了中外文化交流，青花瓷开始兴起。",
        detailDescription: "元朝是由蒙古族建立的王朝，疆域辽阔，促进了东西方文化交流。元代青花瓷开始兴起，戏曲艺术发达，涌现出关汉卿、马致远等伟大的戏曲家。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "元青花萧何月下追韩信图梅瓶",
                location: "江苏南京",
                description: "元代青花瓷精品",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "这件元青花梅瓶绘有萧何月下追韩信的故事，是元代青花瓷的代表作。"
            },
            {
                name: "元代景泰蓝",
                location: "北京",
                description: "金属工艺新技术",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "景泰蓝工艺在元代开始发展，色彩丰富，装饰华丽。"
            }
        ]
    },
    {
        period: "明朝",
        year: "1368-1644年",
        dynasty: "海上丝绸之路",
        description: "郑和下西洋开辟海上丝绸之路，建筑、瓷器、文学都有重要发展。",
        detailDescription: "明朝是中国历史上的重要王朝，郑和七下西洋展现了明朝的强大国力。明代建筑、瓷器、文学等都有重要发展，紫禁城、天坛等建筑至今仍是世界瑰宝。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "永乐大典",
                location: "北京故宫",
                description: "世界最大的百科全书",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "《永乐大典》共22877卷，是中国古代最大的类书，集中了丰富的文献资料。"
            },
            {
                name: "明青花瓷",
                location: "江西景德镇",
                description: "明代瓷器工艺的巅峰",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "明代青花瓷胎质洁白，青花发色浓艳，图案精美，是中国瓷器的代表。"
            },
            {
                name: "郑和宝船模型",
                location: "江苏南京",
                description: "海上丝绸之路的见证",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "郑和宝船是明代造船技术的杰作，见证了中国古代的海上丝绸之路。"
            },
            {
                name: "明代斗彩鸡缸杯",
                location: "北京故宫",
                description: "明代彩瓷珍品",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "斗彩鸡缸杯制作精美，色彩鲜艳，是明代成化年间的瓷器精品。"
            }
        ]
    },
    {
        period: "清朝",
        year: "1644-1912年",
        dynasty: "最后的封建王朝",
        description: "中国最后一个封建王朝，疆域辽阔，文物收藏丰富。",
        detailDescription: "清朝是中国历史上最后一个封建王朝，疆域辽阔，文化艺术繁荣。清代瓷器、玉器、书画等都有很高的成就，宫廷收藏极为丰富。",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        treasures: [
            {
                name: "翡翠白菜",
                location: "台北故宫",
                description: "清代玉雕的精品",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "翡翠白菜利用翡翠的天然颜色巧妙雕刻，形似白菜，工艺精湛。"
            },
            {
                name: "四库全书",
                location: "北京故宫",
                description: "中华文化的集大成",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "《四库全书》是中国古代最大的丛书，收录了大量珍贵的文献资料。"
            },
            {
                name: "清康熙珐琅彩瓷",
                location: "北京故宫",
                description: "清代瓷器工艺巅峰",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=80&fit=crop",
                detail: "康熙珐琅彩瓷色彩丰富，画工精细，是清代瓷器的代表作。"
            },
            {
                name: "清乾隆玉玺",
                location: "北京故宫",
                description: "皇权的象征",
                image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=80&fit=crop",
                detail: "乾隆玉玺雕刻精美，是清代皇权的重要象征。"
            }
        ]
    }
];

class TimelineViewer {
    constructor() {
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.renderTimeline();
        this.addScrollAnimations();
        this.addInteractions();
        this.createModal();
    }

    renderTimeline() {
        const container = document.getElementById('timelineContainer');
        if (!container) return;

        container.innerHTML = `
            <div class="timeline-line"></div>
            ${timelineData.map((period, index) => this.createTimelineItem(period, index)).join('')}
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
                    <button class="timeline-btn" onclick="timelineViewer.showPeriodDetail(${index})">
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

    createModal() {
        const modal = document.createElement('div');
        modal.id = 'periodModal';
        modal.className = 'period-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="timelineViewer.closeModal()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modalTitle"></h2>
                    <button class="modal-close" onclick="timelineViewer.closeModal()">×</button>
                </div>
                <div class="modal-body" id="modalBody">
                    <!-- 内容将在这里动态加载 -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    showPeriodDetail(index) {
        const period = timelineData[index];
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

    closeModal() {
        const modal = document.getElementById('periodModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
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

    addInteractions() {
        // 添加文物缩略图点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.treasure-mini')) {
                const treasureName = e.target.closest('.treasure-mini').dataset.treasure;
                this.showTreasureDetail(treasureName);
            }
        });

        // 添加时间轴导航
        this.addTimelineNavigation();

        // 添加键盘事件
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
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

        timelineData.forEach((period, index) => {
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
            
            // 添加朝代名称标签
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

    showTreasureDetail(treasureName) {
        // 在所有时期中查找文物
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
}

// 添加时间轴和模态框样式
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

// 全局变量供HTML调用
let timelineViewer;

// 初始化时间轴功能
document.addEventListener('DOMContentLoaded', () => {
    timelineViewer = new TimelineViewer();
});
