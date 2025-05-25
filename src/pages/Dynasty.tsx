
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, Grid, List, MapPin, Calendar, Star } from 'lucide-react';

const Dynasty = () => {
  const { dynastyId } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const dynastyData = {
    shang: {
      name: '商朝',
      period: '约公元前1600-1046年',
      description: '中国历史上第一个有文字记载的朝代，以其发达的青铜文明和甲骨文而闻名于世。商朝建立了完整的国家制度，创造了灿烂的青铜文化。',
      background: 'from-amber-900 to-yellow-900',
      treasures: [
        {
          id: 't1',
          name: '司母戊鼎',
          category: '青铜器',
          location: '河南安阳',
          year: '约公元前1300年',
          rarity: '国宝级',
          description: '商朝后期王室用鼎，重达832.84公斤，是世界上现存最大最重的青铜礼器。鼎腹内壁铸有"司母戊"三字，为商王祖庚或祖甲为祭祀母亲戊而铸造。鼎形制雄伟，纹饰庄重，体现了商代青铜铸造技术的最高水平。',
          image: '/placeholder.svg',
          details: {
            material: '青铜',
            dimensions: '高133厘米，口长110厘米，口宽79厘米',
            weight: '832.84公斤',
            discoveryDate: '1939年',
            currentLocation: '中国国家博物馆'
          }
        },
        {
          id: 't2',
          name: '妇好鸮尊',
          category: '青铜器',
          location: '河南安阳',
          year: '约公元前1200年',
          rarity: '国宝级',
          description: '商代青铜酒器，以鸮（猫头鹰）为造型，线条流畅，纹饰精美。鸮在商代被视为战神，此尊出土于妇好墓，体现了商代女性的崇高地位和精湛的青铜铸造工艺。',
          image: '/placeholder.svg',
          details: {
            material: '青铜',
            dimensions: '高45.9厘米',
            weight: '16.7公斤',
            discoveryDate: '1976年',
            currentLocation: '中国社会科学院考古研究所'
          }
        },
        {
          id: 't3',
          name: '商代甲骨文',
          category: '文献',
          location: '河南安阳',
          year: '约公元前1300年',
          rarity: '一级文物',
          description: '商王室用于占卜的龟甲和牛骨，上面刻有汉字的早期形式。甲骨文的发现证实了商朝的存在，为研究商代历史提供了第一手资料。',
          image: '/placeholder.svg',
          details: {
            material: '龟甲、牛骨',
            discoveryDate: '1899年',
            totalPieces: '约15万片',
            currentLocation: '多家博物馆收藏'
          }
        }
      ]
    },
    tang: {
      name: '唐朝',
      period: '618-907年',
      description: '中国历史上最为辉煌的朝代之一，政治开明，经济繁荣，文化昌盛，对外交流频繁，被誉为中华文明的黄金时代。',
      background: 'from-purple-900 to-violet-900',
      treasures: [
        {
          id: 't4',
          name: '唐三彩骆驼载乐俑',
          category: '陶瓷',
          location: '陕西西安',
          year: '约公元700年',
          rarity: '一级文物',
          description: '盛唐三彩陶俑，骆驼背上载有乐队，展现了丝绸之路上的音乐文化交流。俑身施黄、绿、白三色釉，色彩绚丽，造型生动，是唐代对外文化交流的重要见证。',
          image: '/placeholder.svg',
          details: {
            material: '陶瓷',
            dimensions: '高58.5厘米',
            discoveryDate: '20世纪初',
            currentLocation: '中国国家博物馆'
          }
        },
        {
          id: 't5',
          name: '何家村金银器',
          category: '金银器',
          location: '陕西西安',
          year: '约公元800年',
          rarity: '国宝级',
          description: '唐代金银器窖藏，包含各类金银器皿270余件，工艺精美，装饰华丽。其中鎏金银盒、八瓣团花金杯等展现了唐代金银器制作的最高水平，反映了盛唐时期的繁荣。',
          image: '/placeholder.svg',
          details: {
            material: '金、银',
            totalPieces: '270余件',
            discoveryDate: '1970年',
            currentLocation: '陕西历史博物馆'
          }
        }
      ]
    }
  };

  const dynasty = dynastyData[dynastyId] || dynastyData.shang;

  const categories = ['all', '青铜器', '陶瓷', '金银器', '玉器', '文献', '绘画'];

  const filteredTreasures = dynasty.treasures.filter(treasure => {
    const matchesCategory = filterCategory === 'all' || treasure.category === filterCategory;
    const matchesSearch = treasure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treasure.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case '国宝级': return 'text-yellow-400 bg-yellow-400/20';
      case '一级文物': return 'text-red-400 bg-red-400/20';
      case '二级文物': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${dynasty.background} text-white`}>
      {/* 导航栏 */}
      <nav className="p-6 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300">
            <ArrowLeft size={20} />
            <span>返回首页</span>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold">{dynasty.name}</h1>
            <p className="text-gray-300">{dynasty.period}</p>
          </div>
          <Link to="/timeline" className="text-yellow-400 hover:text-yellow-300">
            时间轴
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* 朝代介绍 */}
        <div className="mb-12 text-center">
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {dynasty.description}
          </p>
        </div>

        {/* 搜索和筛选栏 */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="搜索文物..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? '全部类别' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* 文物展示 */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreasures.map((treasure) => (
              <div
                key={treasure.id}
                className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={treasure.image}
                    alt={treasure.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRarityColor(treasure.rarity)}`}>
                      {treasure.rarity}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black bg-opacity-70 rounded-full text-sm">
                      {treasure.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">{treasure.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{treasure.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{treasure.year}</span>
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-3">{treasure.description}</p>
                  <Link
                    to={`/treasure/${treasure.id}`}
                    className="inline-block w-full text-center bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold py-2 px-4 rounded-lg hover:scale-105 transition-transform"
                  >
                    详细了解
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTreasures.map((treasure) => (
              <div
                key={treasure.id}
                className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 flex flex-col lg:flex-row gap-6"
              >
                <div className="lg:w-1/3">
                  <img
                    src={treasure.image}
                    alt={treasure.name}
                    className="w-full h-48 lg:h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="lg:w-2/3">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-yellow-400">{treasure.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRarityColor(treasure.rarity)}`}>
                      {treasure.rarity}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{treasure.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{treasure.year}</span>
                    </span>
                    <span className="bg-gray-700 px-2 py-1 rounded">{treasure.category}</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{treasure.description}</p>
                  <Link
                    to={`/treasure/${treasure.id}`}
                    className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold py-2 px-6 rounded-lg hover:scale-105 transition-transform"
                  >
                    详细了解
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredTreasures.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">未找到相关文物</h3>
            <p className="text-gray-400">请尝试其他搜索条件或筛选选项</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dynasty;
