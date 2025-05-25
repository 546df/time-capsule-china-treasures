
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, Filter, ArrowLeft, Calendar, MapPin, Star, Grid, List } from 'lucide-react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDynasty, setSelectedDynasty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 模拟搜索数据
  const allTreasures = [
    {
      id: 't1',
      name: '司母戊鼎',
      dynasty: '商朝',
      category: '青铜器',
      location: '河南安阳',
      year: '约公元前1300年',
      rarity: '国宝级',
      description: '世界上现存最大最重的青铜礼器，重达832.84公斤。',
      image: '/placeholder.svg',
      keywords: ['青铜', '祭器', '商王室', '母亲戊']
    },
    {
      id: 't2',
      name: '越王勾践剑',
      dynasty: '春秋',
      category: '兵器',
      location: '湖北江陵',
      year: '约公元前500年',
      rarity: '国宝级',
      description: '千年不锈的神奇宝剑，展现了春秋时期的冶金技术成就。',
      image: '/placeholder.svg',
      keywords: ['青铜剑', '越国', '勾践', '冶金技术']
    },
    {
      id: 't3',
      name: '唐三彩骆驼载乐俑',
      dynasty: '唐朝',
      category: '陶瓷',
      location: '陕西西安',
      year: '约公元700年',
      rarity: '一级文物',
      description: '展现丝绸之路文化交流的精美陶俑。',
      image: '/placeholder.svg',
      keywords: ['三彩', '丝绸之路', '骆驼', '音乐']
    },
    {
      id: 't4',
      name: '清明上河图',
      dynasty: '宋朝',
      category: '绘画',
      location: '北京故宫',
      year: '约公元1100年',
      rarity: '国宝级',
      description: '描绘北宋汴京繁华景象的传世名画。',
      image: '/placeholder.svg',
      keywords: ['风俗画', '张择端', '汴京', '市井生活']
    },
    {
      id: 't5',
      name: '马踏飞燕',
      dynasty: '汉朝',
      category: '青铜器',
      location: '甘肃武威',
      year: '约公元200年',
      rarity: '国宝级',
      description: '中国古代雕塑艺术的杰出代表。',
      image: '/placeholder.svg',
      keywords: ['青铜马', '飞燕', '雕塑', '动感']
    }
  ];

  const dynasties = ['all', '商朝', '周朝', '春秋', '战国', '秦朝', '汉朝', '唐朝', '宋朝', '明朝', '清朝'];
  const categories = ['all', '青铜器', '陶瓷', '玉器', '绘画', '书法', '金银器', '兵器', '文献'];
  const rarities = ['all', '国宝级', '一级文物', '二级文物', '三级文物'];

  // 搜索功能
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      let filtered = allTreasures.filter(treasure => {
        const matchesSearch = searchTerm === '' || 
          treasure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          treasure.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          treasure.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesDynasty = selectedDynasty === 'all' || treasure.dynasty === selectedDynasty;
        const matchesCategory = selectedCategory === 'all' || treasure.category === selectedCategory;
        const matchesRarity = selectedRarity === 'all' || treasure.rarity === selectedRarity;
        
        return matchesSearch && matchesDynasty && matchesCategory && matchesRarity;
      });
      
      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedDynasty, selectedCategory, selectedRarity]);

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={i} className="bg-yellow-400 text-black px-1 rounded">{part}</span> : part
    );
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case '国宝级': return 'text-yellow-400 bg-yellow-400/20';
      case '一级文物': return 'text-red-400 bg-red-400/20';
      case '二级文物': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
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
            文物搜索
          </h1>
          <div className="w-20"></div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* 搜索栏 */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="搜索文物名称、描述或关键词..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 text-lg"
            />
          </div>
        </div>

        {/* 筛选器 */}
        <div className="mb-8 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Filter size={20} className="text-yellow-400 mr-2" />
            <h2 className="text-xl font-bold text-yellow-400">筛选条件</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">朝代</label>
              <select
                value={selectedDynasty}
                onChange={(e) => setSelectedDynasty(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400"
              >
                {dynasties.map(dynasty => (
                  <option key={dynasty} value={dynasty}>
                    {dynasty === 'all' ? '全部朝代' : dynasty}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">类别</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? '全部类别' : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">珍贵程度</label>
              <select
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-yellow-400"
              >
                {rarities.map(rarity => (
                  <option key={rarity} value={rarity}>
                    {rarity === 'all' ? '全部等级' : rarity}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end space-x-2">
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
        </div>

        {/* 搜索结果 */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-yellow-400">
            搜索结果 {!isLoading && `(${results.length}件)`}
          </h2>
          {searchTerm && (
            <div className="text-gray-300">
              搜索关键词: <span className="text-yellow-400">"{searchTerm}"</span>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="text-center py-16">
            <div className="animate-spin w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400">正在搜索...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">未找到相关文物</h3>
            <p className="text-gray-400 mb-4">请尝试其他搜索条件</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDynasty('all');
                setSelectedCategory('all');
                setSelectedRarity('all');
              }}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              清除所有筛选条件
            </button>
          </div>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {results.map((treasure) => (
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
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">
                        {highlightText(treasure.name, searchTerm)}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span>{treasure.dynasty}</span>
                        <span className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{treasure.location}</span>
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {highlightText(treasure.description, searchTerm)}
                      </p>
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
                {results.map((treasure) => (
                  <div
                    key={treasure.id}
                    className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 flex flex-col lg:flex-row gap-6"
                  >
                    <div className="lg:w-1/4">
                      <img
                        src={treasure.image}
                        alt={treasure.name}
                        className="w-full h-48 lg:h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="lg:w-3/4">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-yellow-400">
                          {highlightText(treasure.name, searchTerm)}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRarityColor(treasure.rarity)}`}>
                          {treasure.rarity}
                        </span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                        <span>{treasure.dynasty}</span>
                        <span className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{treasure.location}</span>
                        </span>
                        <span className="bg-gray-700 px-2 py-1 rounded">{treasure.category}</span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {highlightText(treasure.description, searchTerm)}
                      </p>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
