
# 中华瑰宝回廊 - Chinese Treasure Gallery

## 项目简介
中华瑰宝回廊是一个展示中华五千年文明瑰宝的在线文化平台，通过现代网页技术呈现珍贵文物的历史价值与艺术魅力。

## 本地部署指南

### 🚀 快速开始
本项目采用纯静态网页技术，无需复杂的构建工具，可直接在本地运行。

### 📁 项目文件说明

#### 🔴 下载后需要删除的文件和目录
这些文件是用于在线开发环境的，本地部署时不需要：

```
删除以下目录：
├── src/                     # React开发环境目录（完整删除）
├── node_modules/            # 依赖包目录（如果存在）

删除以下文件：
├── .gitignore              # Git版本控制配置
├── bun.lockb              # 包管理器锁定文件
├── components.json         # 组件配置文件
├── eslint.config.js       # 代码规范配置
├── package-lock.json      # NPM锁定文件
├── package.json           # Node.js项目配置
├── postcss.config.js      # CSS处理器配置
├── tailwind.config.ts     # Tailwind CSS配置
├── tsconfig.app.json      # TypeScript配置
├── tsconfig.json          # TypeScript主配置
├── tsconfig.node.json     # TypeScript Node配置
└── vite.config.ts         # Vite构建工具配置
```

#### ✅ 需要保留的核心文件
这些是网站运行的核心文件：

```
保留文件结构：
中华瑰宝回廊/
├── index.html                 # 首页 ⭐
├── timeline.html              # 时间轴页面 ⭐
├── search.html               # 搜索页面 ⭐
├── gallery.html              # 画廊页面 ⭐
├── map.html                  # 文物地图页面 ⭐
├── README.md                 # 项目说明文档
│
├── styles/                   # 样式文件目录 ⭐
│   ├── main.css             # 主样式文件
│   ├── timeline.css         # 时间轴专用样式
│   ├── search.css           # 搜索页面样式
│   ├── gallery.css          # 画廊页面样式
│   ├── map.css              # 地图页面样式
│   └── barrage.css          # 弹幕组件样式
│
├── scripts/                 # JavaScript文件目录 ⭐
│   ├── main.js              # 主脚本文件
│   ├── search.js            # 搜索功能脚本
│   ├── gallery.js           # 画廊功能脚本
│   ├── map.js               # 地图功能脚本
│   ├── carousel.js          # 轮播组件
│   ├── barrage.js           # 弹幕组件
│   │
│   ├── components/          # 组件目录
│   │   ├── TimelineViewer.js    # 时间轴主组件
│   │   ├── TimelineModal.js     # 时间轴模态框组件
│   │   ├── TimelineNavigation.js # 时间轴导航组件
│   │   ├── TimelineAnimations.js # 时间轴动画组件
│   │   └── TimelineData.js      # 时间轴数据管理
│   │
│   └── data/                # 数据目录
│       └── timelineData.js  # 时间轴原始数据
│
├── data/                    # JSON数据文件 ⭐
│   ├── treasures.json       # 文物数据库(38+件文物)
│   └── dynasties.json       # 朝代信息数据
│
└── public/                  # 静态资源 ⭐
    ├── robots.txt
    ├── favicon.ico
    └── placeholder.svg
```

### 🌐 本地运行方法

#### 方法一：直接双击打开（推荐）
1. 删除上述不需要的文件和目录
2. 直接双击 `index.html` 文件
3. 网站将在默认浏览器中打开

#### 方法二：使用本地服务器
如果遇到跨域问题，可以使用简单的HTTP服务器：

**Python方式：**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js方式：**
```bash
# 安装http-server
npm install -g http-server

# 启动服务器
http-server -p 8000
```

**VS Code方式：**
安装 "Live Server" 插件，右键点击 `index.html` 选择 "Open with Live Server"

### 📱 浏览器兼容性
- **现代浏览器**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **移动端**: iOS Safari 12+, Chrome Mobile 60+

### 🎯 核心功能概览

#### 🏛️ 时间轴浏览
- 从新石器时代到清朝的完整历史脉络
- 每个时期的文化特色和代表文物
- 点击"详细了解"查看朝代详细信息
- 包含历史纪录片和文物详情

#### 🔍 智能搜索
- 按文物名称、朝代、地区搜索
- 实时搜索结果显示
- 高级筛选功能

#### 🗺️ 文物地图
- 34个省市自治区的文物分布
- 交互式地图点击查看
- 地理位置精确定位

#### 🎨 数字画廊
- 38+ 件珍贵文物展示
- 按朝代分类浏览
- 高清图片和详细信息

### 📊 数据规模
- **文物总数**: 38+ 件珍贵文物
- **时间跨度**: 新石器时代 - 清朝(约7000年)
- **地理覆盖**: 全国主要省市自治区
- **朝代覆盖**: 12个主要历史时期

### 🛠️ 技术特色
- **纯静态技术**: HTML5 + CSS3 + JavaScript ES6+
- **响应式设计**: 适配各种屏幕尺寸
- **模块化架构**: ES6 Modules组件化开发
- **现代视觉**: 流畅动画和现代CSS特性

### ⚠️ 注意事项
1. **文件完整性**: 确保保留所有 ⭐ 标记的核心文件
2. **目录结构**: 不要改变文件和目录的相对位置
3. **编码格式**: 所有文件均为 UTF-8 编码
4. **图片资源**: 文物图片使用占位符，可替换为实际图片

### 🔧 自定义配置
- **修改文物数据**: 编辑 `data/treasures.json`
- **添加朝代信息**: 编辑 `data/dynasties.json`
- **调整样式**: 修改 `styles/` 目录下的CSS文件
- **扩展功能**: 在 `scripts/` 目录添加新的JavaScript文件

### 📞 技术支持
如果遇到问题：
1. 检查浏览器控制台是否有错误信息
2. 确认所有必需文件都已保留
3. 尝试使用本地HTTP服务器运行

---

*探索中华五千年文明，感受文物背后的历史故事*
