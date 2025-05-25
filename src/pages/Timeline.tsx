
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Eye, Heart } from 'lucide-react';

const Timeline = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const timelinePeriods = [
    {
      id: 'neolithic',
      name: '新石器时代',
      period: '约10000-2000 BCE',
      color: 'bg-stone-600',
      treasures: [
        {
          id: 't1',
          name: '红山文化玉龙',
          location: '内蒙古',
          year: '约5000年前',
          description: '中华第一龙，红山文化的杰出代表，呈C形蜷曲状，造型古朴神秘。此玉龙采用岫岩玉雕琢而成，表面光滑细腻，龙首高昂，身躯修长，被誉为"华夏第一龙"。',
          significance: '证明了中华民族龙图腾崇拜的悠久历史',
          image: '/placeholder.svg'
        },
        {
          id: 't2',
          name: '河姆渡文化骨笛',
          location: '浙江',
          year: '约7000年前',
          description: '世界上最早的管乐器之一，由鸟骨制成，能吹奏简单的音律。河姆渡文化骨笛的发现，证明了早期人类已经具备了音乐审美能力和制作技艺。',
          significance: '展现了史前人类的音乐文明成就',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'shang',
      name: '商朝',
      period: '约1600-1046 BCE',
      color: 'bg-amber-600',
      treasures: [
        {
          id: 't3',
          name: '司母戊鼎',
          location: '河南安阳',
          year: '约公元前1300年',
          description: '商朝后期王室用鼎，重达832.84公斤，是世界上现存最大最重的青铜礼器。鼎腹内壁铸有"司母戊"三字，为商王祖庚或祖甲为祭祀母亲戊而铸造。',
          significance: '代表了商代青铜铸造技术的最高水平',
          image: '/placeholder.svg'
        },
        {
          id: 't4',
          name: '妇好鸮尊',
          location: '河南安阳',
          year: '约公元前1200年',
          description: '商代青铜酒器，以鸮（猫头鹰）为造型，线条流畅，纹饰精美。鸮在商代被视为战神，此尊出土于妇好墓，体现了商代女性的崇高地位。',
          significance: '反映了商代的动物崇拜和精湛工艺',
          image: '/placeholder.svg'
        },
        {
          id: 't5',
          name: '三星堆青铜大立人',
          location: '四川广汉',
          year: '约公元前1200年',
          description: '高达180厘米的青铜立人像，双手环握中空，可能原来握有权杖等器物。人像戴冠，着长袍，赤足立于高台之上，神态庄严肃穆。',
          significance: '展现了古蜀文明的独特艺术风格',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'zhou',
      name: '周朝',
      period: '1046-256 BCE',
      color: 'bg-emerald-600',
      treasures: [
        {
          id: 't6',
          name: '大盂鼎',
          location: '陕西岐山',
          year: '约公元前1000年',
          description: '西周康王时期重器，腹内铸有291字铭文，记述了册命盂的史实。铭文内容丰富，是研究西周历史和金文书法的重要资料。',
          significance: '保存了珍贵的西周历史文献',
          image: '/placeholder.svg'
        },
        {
          id: 't7',
          name: '虢季子白盘',
          location: '陕西宝鸡',
          year: '约公元前800年',
          description: '春秋时期虢国重器，盘内铸有111字铭文，记录了虢季子白征战的功绩。盘形制宏大，纹饰精美，工艺精湛。',
          significance: '反映了春秋时期的战争与政治',
          image: '/placeholder.svg'
        },
        {
          id: 't8',
          name: '越王勾践剑',
          location: '湖北江陵',
          year: '约公元前500年',
          description: '春秋晚期越国青铜剑，剑身布满菱形纹饰，剑刃锋利无比，历经两千多年仍然寒光闪闪，被誉为"天下第一剑"。剑格正面嵌蓝色琉璃，背面嵌绿松石。',
          significance: '展现了春秋时期的冶金技术成就',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'qin',
      name: '秦朝',
      period: '221-206 BCE',
      color: 'bg-slate-600',
      treasures: [
        {
          id: 't9',
          name: '兵马俑一号坑兵俑',
          location: '陕西西安',
          year: '约公元前210年',
          description: '秦始皇帝陵兵马俑，每个俑人高约1.8米，神态各异，服饰装备详实。兵俑按兵种不同分为步兵俑、骑兵俑、车兵俑等，展现了秦军的强大阵容。',
          significance: '体现了秦朝的军事实力和艺术水平',
          image: '/placeholder.svg'
        },
        {
          id: 't10',
          name: '秦始皇陵铜车马',
          location: '陕西西安',
          year: '约公元前210年',
          description: '秦始皇陵出土的大型彩绘铜车马，车马通长317厘米，由3000多个零部件组成。车马造型逼真，工艺精湛，彩绘绚丽，是古代金属工艺的杰作。',
          significance: '展现了秦代车马制造的最高水准',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'han',
      name: '汉朝',
      period: '206 BCE - 220 CE',
      color: 'bg-red-600',
      treasures: [
        {
          id: 't11',
          name: '马踏飞燕',
          location: '甘肃武威',
          year: '约公元200年',
          description: '东汉青铜奔马，马呈飞奔状，右后蹄踏在一只飞燕上，设计巧妙，动感十足。此作品展现了汉代艺术家对速度和美的完美诠释。',
          significance: '中国古代雕塑艺术的杰出代表',
          image: '/placeholder.svg'
        },
        {
          id: 't12',
          name: '金缕玉衣',
          location: '河北满城',
          year: '约公元前100年',
          description: '西汉中山靖王刘胜的殓服，由2498片玉片用金丝连缀而成。玉衣制作工艺复杂，反映了汉代人对玉石的崇拜和对永生的追求。',
          significance: '体现了汉代高超的工艺技术',
          image: '/placeholder.svg'
        },
        {
          id: 't13',
          name: '长信宫灯',
          location: '河北满城',
          year: '约公元前150年',
          description: '西汉青铜宫灯，宫女手执灯具，衣袖可转动调节光线方向，烟雾通过中空的躯体进入腹腔，设计科学，环保节能。',
          significance: '古代科技与艺术结合的典范',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'tang',
      name: '唐朝',
      period: '618-907 CE',
      color: 'bg-purple-600',
      treasures: [
        {
          id: 't14',
          name: '唐三彩骆驼载乐俑',
          location: '陕西西安',
          year: '约公元700年',
          description: '盛唐三彩陶俑，骆驼背上载有乐队，展现了丝绸之路上的音乐文化交流。俑身施黄、绿、白三色釉，色彩绚丽，造型生动。',
          significance: '反映了唐代丝路贸易的繁荣',
          image: '/placeholder.svg'
        },
        {
          id: 't15',
          name: '何家村金银器',
          location: '陕西西安',
          year: '约公元800年',
          description: '唐代金银器窖藏，包含各类金银器皿270余件，工艺精美，装饰华丽。其中鎏金银盒、八瓣团花金杯等展现了唐代金银器制作的最高水平。',
          significance: '展示了唐代金银工艺的辉煌成就',
          image: '/placeholder.svg'
        },
        {
          id: 't16',
          name: '阿斯塔那出土绢画',
          location: '新疆吐鲁番',
          year: '约公元700年',
          description: '唐代丝绸绢画，描绘了当时的社会生活场景。画面色彩鲜艳，人物生动，反映了唐代绘画艺术的高度发展。',
          significance: '保存了唐代珍贵的绘画作品',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'song',
      name: '宋朝',
      period: '960-1279 CE',
      color: 'bg-blue-600',
      treasures: [
        {
          id: 't17',
          name: '清明上河图',
          location: '北京故宫',
          year: '约公元1100年',
          description: '北宋张择端绘制的长卷风俗画，描绘了汴京清明时节的繁华景象。画中有500多个人物，展现了宋代社会的各个层面。',
          significance: '中国古代绘画艺术的巅峰之作',
          image: '/placeholder.svg'
        },
        {
          id: 't18',
          name: '汝窑天青釉茶盏',
          location: '河南宝丰',
          year: '约公元1100年',
          description: '北宋汝窑瓷器，釉色如天青色，质地温润如玉。汝窑是宋代五大名窑之首，传世品极为珍贵。',
          significance: '代表了宋代制瓷工艺的最高成就',
          image: '/placeholder.svg'
        },
        {
          id: 't19',
          name: '定窑白瓷刻花萱草纹碗',
          location: '河北曲阳',
          year: '约公元1000年',
          description: '北宋定窑白瓷，胎质洁白细腻，釉色莹润如玉。碗内刻有萱草纹，线条流畅，寓意美好。',
          significance: '体现了宋代瓷器的审美追求',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'ming',
      name: '明朝',
      period: '1368-1644 CE',
      color: 'bg-orange-600',
      treasures: [
        {
          id: 't20',
          name: '永乐大典',
          location: '北京',
          year: '约公元1408年',
          description: '明成祖时期编纂的大型类书，共22877卷，是当时世界上最大的百科全书。虽大部分已佚失，现存卷册仍是珍贵的文献资料。',
          significance: '体现了明代学术文化的繁荣',
          image: '/placeholder.svg'
        },
        {
          id: 't21',
          name: '明宣德青花瓷',
          location: '江西景德镇',
          year: '约公元1430年',
          description: '明宣德年间烧制的青花瓷器，以其浓艳的青花色彩和精美的纹饰而著称。胎质洁白，釉面莹润，青花发色浓艳。',
          significance: '明代青花瓷烧制技术的高峰',
          image: '/placeholder.svg'
        },
        {
          id: 't22',
          name: '郑和宝船模型',
          location: '江苏南京',
          year: '约公元1405年',
          description: '明代郑和下西洋时使用的宝船模型，船体庞大，设备完善。郑和七下西洋，促进了中外文化交流。',
          significance: '见证了明代海上丝绸之路的辉煌',
          image: '/placeholder.svg'
        }
      ]
    },
    {
      id: 'qing',
      name: '清朝',
      period: '1644-1912 CE',
      color: 'bg-teal-600',
      treasures: [
        {
          id: 't23',
          name: '康熙粉彩瓷',
          location: '江西景德镇',
          year: '约公元1700年',
          description: '清康熙年间创烧的粉彩瓷器，以其淡雅的色彩和精美的纹饰而著称。粉彩技法将中国传统绘画技法与瓷器装饰完美结合。',
          significance: '清代瓷器装饰技术的重大创新',
          image: '/placeholder.svg'
        },
        {
          id: 't24',
          name: '翠玉白菜',
          location: '台北故宫',
          year: '约公元1800年',
          description: '清代玉雕作品，利用翡翠的天然颜色雕刻而成，形似白菜，上有蝗虫和螽斯，寓意多子多福。',
          significance: '清代玉雕工艺的精湛体现',
          image: '/placeholder.svg'
        },
        {
          id: 't25',
          name: '乾隆款金桃皮鞘腰刀',
          location: '北京故宫',
          year: '约公元1750年',
          description: '清乾隆时期御用腰刀，刀身钢制，刀柄用金丝缠绕，刀鞘以桃皮制成。刀身刻有乾隆御制诗，工艺精美。',
          significance: '体现了清代宫廷工艺的精湛水平',
          image: '/placeholder.svg'
        }
      ]
    }
  ];

  const toggleFavorite = (treasureId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(treasureId)) {
        newFavorites.delete(treasureId);
      } else {
        newFavorites.add(treasureId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-amber-950 text-white">
      {/* 导航栏 */}
      <nav className="p-6 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300">
            <ArrowLeft size={20} />
            <span>返回首页</span>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            中华文明时间轴
          </h1>
          <div className="w-24"></div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* 时间轴导航 */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {timelinePeriods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(selectedPeriod === period.id ? null : period.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPeriod === period.id
                    ? `${period.color} text-white scale-105`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{period.name}</span>
                </div>
                <div className="text-xs opacity-75">{period.period}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 时间轴内容 */}
        <div className="relative">
          {/* 中央时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 to-orange-500 h-full"></div>

          {timelinePeriods.map((period, periodIndex) => (
            <div
              key={period.id}
              className={`mb-16 transition-all duration-500 ${
                selectedPeriod && selectedPeriod !== period.id ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {/* 朝代标题 */}
              <div className="relative z-10 flex justify-center mb-8">
                <div className={`${period.color} px-8 py-4 rounded-full text-center`}>
                  <h2 className="text-2xl font-bold">{period.name}</h2>
                  <p className="text-sm opacity-90">{period.period}</p>
                </div>
              </div>

              {/* 文物网格 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {period.treasures.map((treasure, treasureIndex) => (
                  <div
                    key={treasure.id}
                    className={`${
                      treasureIndex % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-3'
                    } bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300`}
                  >
                    <div className="relative">
                      <img
                        src={treasure.image}
                        alt={treasure.name}
                        className="w-full h-48 object-cover"
                      />
                      <button
                        onClick={() => toggleFavorite(treasure.id)}
                        className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                          favorites.has(treasure.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-black bg-opacity-50 text-gray-300 hover:text-red-400'
                        }`}
                      >
                        <Heart size={20} fill={favorites.has(treasure.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">{treasure.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{treasure.location}</span>
                        </span>
                        <span>{treasure.year}</span>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{treasure.description}</p>
                      <div className="border-t border-gray-600 pt-4">
                        <p className="text-sm text-yellow-300 italic">{treasure.significance}</p>
                      </div>
                      <Link
                        to={`/treasure/${treasure.id}`}
                        className="inline-flex items-center mt-4 text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <Eye size={16} className="mr-1" />
                        <span>详细了解</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
