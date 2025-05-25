
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Calendar, MapPin, Star } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [barrage, setBarrage] = useState<Array<{id: number, text: string, top: number, speed: number}>>([]);

  const dynasties = [
    {
      id: 'shang',
      name: '商朝',
      period: '约公元前1600-1046年',
      description: '青铜文明的辉煌时代',
      image: '/placeholder.svg',
      color: 'from-amber-600 to-yellow-700',
      treasures: 15
    },
    {
      id: 'zhou',
      name: '周朝',
      period: '公元前1046-256年',
      description: '礼乐文明的奠基时期',
      image: '/placeholder.svg',
      color: 'from-emerald-600 to-green-700',
      treasures: 12
    },
    {
      id: 'qin',
      name: '秦朝',
      period: '公元前221-206年',
      description: '统一六国的辉煌时代',
      image: '/placeholder.svg',
      color: 'from-slate-600 to-gray-700',
      treasures: 8
    },
    {
      id: 'han',
      name: '汉朝',
      period: '公元前206-220年',
      description: '丝绸之路的开拓者',
      image: '/placeholder.svg',
      color: 'from-red-600 to-rose-700',
      treasures: 18
    },
    {
      id: 'tang',
      name: '唐朝',
      period: '618-907年',
      description: '盛世王朝的文化巅峰',
      image: '/placeholder.svg',
      color: 'from-purple-600 to-violet-700',
      treasures: 25
    },
    {
      id: 'song',
      name: '宋朝',
      period: '960-1279年',
      description: '艺术与科技的黄金时代',
      image: '/placeholder.svg',
      color: 'from-blue-600 to-indigo-700',
      treasures: 22
    },
    {
      id: 'ming',
      name: '明朝',
      period: '1368-1644年',
      description: '海上丝绸之路的辉煌',
      image: '/placeholder.svg',
      color: 'from-orange-600 to-red-700',
      treasures: 20
    },
    {
      id: 'qing',
      name: '清朝',
      period: '1644-1912年',
      description: '多民族融合的盛世',
      image: '/placeholder.svg',
      color: 'from-teal-600 to-cyan-700',
      treasures: 16
    }
  ];

  const featuredTreasures = [
    {
      id: 1,
      name: '司母戊鼎',
      dynasty: '商朝',
      description: '世界上现存最大最重的青铜礼器',
      image: '/placeholder.svg',
      rarity: '国宝级'
    },
    {
      id: 2,
      name: '越王勾践剑',
      dynasty: '春秋',
      description: '千年不锈的神奇宝剑',
      image: '/placeholder.svg',
      rarity: '国宝级'
    },
    {
      id: 3,
      name: '唐三彩骆驼载乐俑',
      dynasty: '唐朝',
      description: '丝绸之路文化交流的见证',
      image: '/placeholder.svg',
      rarity: '一级文物'
    }
  ];

  const barrageComments = [
    '太震撼了！', '中华文明博大精深', '这就是文化自信', '穿越千年的美', 
    '工艺太精湛了', '古人的智慧', '传承千年的技艺', '文物会说话',
    '每一件都是瑰宝', '历史的厚重感', '艺术的巅峰', '文明的结晶'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredTreasures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const generateBarrage = () => {
      const newComment = {
        id: Date.now(),
        text: barrageComments[Math.floor(Math.random() * barrageComments.length)],
        top: Math.random() * 80 + 10,
        speed: Math.random() * 3 + 2
      };
      setBarrage(prev => [...prev.slice(-10), newComment]);
    };

    const barrageInterval = setInterval(generateBarrage, 3000);
    return () => clearInterval(barrageInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-amber-950 text-white overflow-hidden">
      {/* CSS styles for scroll animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100%); }
          }
        `
      }} />

      {/* 动态弹幕 */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {barrage.map((comment) => (
          <div
            key={comment.id}
            className="absolute text-yellow-300 text-sm opacity-70 animate-pulse"
            style={{
              top: `${comment.top}%`,
              animation: `scroll-left ${comment.speed}s linear infinite`
            }}
          >
            {comment.text}
          </div>
        ))}
      </div>

      {/* 顶部导航 */}
      <nav className="relative z-20 p-6 flex justify-between items-center bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-black">瑰</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            中华瑰宝回廊
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link to="/search" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
            <Search size={20} />
            <span>搜索</span>
          </Link>
          <Link to="/timeline" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
            <Calendar size={20} />
            <span>时间轴</span>
          </Link>
          <Link to="/map" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
            <MapPin size={20} />
            <span>文物地图</span>
          </Link>
        </div>
      </nav>

      {/* 英雄区域 */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            五千年文明瑰宝
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            踏上时光之旅，探索中华文明的璀璨宝藏，感受古代匠人的精湛技艺与无穷智慧
          </p>
          <Link 
            to="/timeline"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
          >
            开始探索之旅
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>

        {/* 特色文物轮播 */}
        <div className="relative mb-16 h-96 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
          {featuredTreasures.map((treasure, index) => (
            <div
              key={treasure.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={treasure.image}
                alt={treasure.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent z-20">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-yellow-400 font-semibold">{treasure.rarity}</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{treasure.name}</h3>
                <p className="text-gray-300 mb-2">{treasure.dynasty}</p>
                <p className="text-lg">{treasure.description}</p>
              </div>
            </div>
          ))}
          
          {/* 轮播指示器 */}
          <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
            {featuredTreasures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 朝代网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dynasties.map((dynasty) => (
            <Link
              key={dynasty.id}
              to={`/dynasty/${dynasty.id}`}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 hover:scale-105 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${dynasty.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{dynasty.name}</h3>
                  <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-full">
                    {dynasty.treasures}件
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">{dynasty.period}</p>
                <p className="text-gray-300">{dynasty.description}</p>
                <div className="mt-4 flex items-center text-yellow-400">
                  <span className="text-sm">探索更多</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
