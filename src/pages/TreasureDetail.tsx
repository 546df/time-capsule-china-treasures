
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Ruler, Weight, Eye, Share2, Heart, Download } from 'lucide-react';

const TreasureDetail = () => {
  const { treasureId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [is3DView, setIs3DView] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  // 模拟文物详细数据
  const treasureData = {
    't3': {
      name: '司母戊鼎',
      dynasty: '商朝',
      period: '约公元前1300年',
      location: '河南安阳',
      rarity: '国宝级',
      category: '青铜器',
      currentLocation: '中国国家博物馆',
      description: '司母戊鼎是商朝后期王室用鼎，重达832.84公斤，是世界上现存最大最重的青铜礼器。鼎腹内壁铸有"司母戊"三字，为商王祖庚或祖甲为祭祀母亲戊而铸造。',
      detailedDescription: `司母戊鼎，又称后母戊鼎，是中国商朝晚期的青铜器皿，因鼎腹内壁铸有"司母戊"（一说"后母戊"）三字而得名。该鼎是为了祭祀商王祖庚或祖甲的母亲戊而特制的祭器。

鼎的造型雄伟厚重，立耳、方腹、四足中空，便于移动。鼎腹长方形，上竖两耳。鼎壁厚达6厘米，表面有精美的饕餮纹和其他装饰纹样，工艺精湛，纹饰繁复。

该鼎的发现具有重大历史意义，它不仅证明了商代青铜铸造技术的高度发展，也反映了商代王室的权势和地位。作为目前世界上发现的最大的青铜器，司母戊鼎堪称青铜时代的杰作。`,
      specifications: {
        material: '青铜（铜锡合金）',
        dimensions: '高133厘米，口长110厘米，口宽79厘米，壁厚6厘米',
        weight: '832.84公斤',
        craftsmanship: '失蜡法铸造',
        decorations: '饕餮纹、夔纹、雷纹'
      },
      history: {
        creation: '约公元前1300年，商朝晚期',
        discovery: '1939年在河南省安阳市武官村发现',
        excavation: '1946年正式出土',
        significance: '证实了商朝的存在和高度发达的青铜文明'
      },
      culturalSignificance: [
        '体现了商代青铜铸造技术的最高水平',
        '反映了商代严格的等级制度和祭祀文化',
        '展现了古代中国的艺术审美和设计理念',
        '是中华文明连续性的重要见证'
      ],
      images: [
        { url: '/placeholder.svg', caption: '司母戊鼎全貌' },
        { url: '/placeholder.svg', caption: '鼎内"司母戊"铭文' },
        { url: '/placeholder.svg', caption: '饕餮纹细节' },
        { url: '/placeholder.svg', caption: '鼎足造型' }
      ],
      relatedTreasures: [
        { id: 't4', name: '妇好鸮尊', dynasty: '商朝' },
        { id: 't5', name: '大盂鼎', dynasty: '周朝' },
        { id: 't6', name: '毛公鼎', dynasty: '周朝' }
      ]
    }
  };

  const treasure = treasureData[treasureId] || treasureData['t3'];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `中华瑰宝回廊 - ${treasure.name}`,
        text: treasure.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('链接已复制到剪贴板');
    }
  };

  const handleDownload = () => {
    // 模拟下载高清图片
    alert('高清图片下载功能暂未开放，请联系管理员');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-amber-950 text-white">
      {/* 导航栏 */}
      <nav className="p-6 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link to="/timeline" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300">
            <ArrowLeft size={20} />
            <span>返回时间轴</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`p-2 rounded-full transition-colors ${
                isFavorited ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300 hover:text-red-400'
              }`}
            >
              <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 bg-gray-700 text-gray-300 rounded-full hover:text-yellow-400 transition-colors"
            >
              <Share2 size={20} />
            </button>
            <button
              onClick={handleDownload}
              className="p-2 bg-gray-700 text-gray-300 rounded-full hover:text-green-400 transition-colors"
            >
              <Download size={20} />
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* 文物标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {treasure.name}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-lg text-gray-300">
            <span className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>{treasure.dynasty} · {treasure.period}</span>
            </span>
            <span className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>{treasure.location}</span>
            </span>
            <span className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold">
              {treasure.rarity}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左侧：图片展示 */}
          <div className="space-y-6">
            {/* 主图片 */}
            <div className="relative">
              <img
                src={treasure.images[currentImageIndex].url}
                alt={treasure.images[currentImageIndex].caption}
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-3">
                <p className="text-white text-center">{treasure.images[currentImageIndex].caption}</p>
              </div>
              
              {/* 3D查看按钮 */}
              <button
                onClick={() => setIs3DView(!is3DView)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                  is3DView ? 'bg-yellow-400 text-black' : 'bg-black bg-opacity-70 text-white hover:bg-yellow-400 hover:text-black'
                }`}
              >
                <Eye size={20} />
              </button>
            </div>

            {/* 图片缩略图 */}
            <div className="grid grid-cols-4 gap-4">
              {treasure.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg transition-all ${
                    index === currentImageIndex ? 'ring-2 ring-yellow-400' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 右侧：详细信息 */}
          <div className="space-y-8">
            {/* 基本信息 */}
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">基本信息</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">朝代：</span>
                  <span>{treasure.dynasty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">年代：</span>
                  <span>{treasure.period}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">出土地：</span>
                  <span>{treasure.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">类别：</span>
                  <span>{treasure.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">现藏地：</span>
                  <span>{treasure.currentLocation}</span>
                </div>
              </div>
            </div>

            {/* 规格参数 */}
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">规格参数</h2>
              <div className="space-y-3">
                {Object.entries(treasure.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-400">{key === 'material' ? '材质' : 
                                                     key === 'dimensions' ? '尺寸' :
                                                     key === 'weight' ? '重量' :
                                                     key === 'craftsmanship' ? '工艺' :
                                                     key === 'decorations' ? '纹饰' : key}：</span>
                    <span className="text-right max-w-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 历史沿革 */}
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">历史沿革</h2>
              <div className="space-y-3">
                {Object.entries(treasure.history).map(([key, value]) => (
                  <div key={key} className="border-l-2 border-yellow-400 pl-4">
                    <div className="font-semibold text-yellow-300 mb-1">
                      {key === 'creation' ? '制作时期' :
                       key === 'discovery' ? '发现时间' :
                       key === 'excavation' ? '出土时间' :
                       key === 'significance' ? '历史意义' : key}
                    </div>
                    <div className="text-gray-300">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 详细描述 */}
        <div className="mt-12 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">详细介绍</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">{treasure.detailedDescription}</p>
          </div>
        </div>

        {/* 文化意义 */}
        <div className="mt-12 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">文化意义</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treasure.culturalSignificance.map((significance, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">{significance}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 相关文物 */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">相关文物</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treasure.relatedTreasures.map((related) => (
              <Link
                key={related.id}
                to={`/treasure/${related.id}`}
                className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <img
                  src="/placeholder.svg"
                  alt={related.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{related.name}</h3>
                <p className="text-gray-400">{related.dynasty}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureDetail;
