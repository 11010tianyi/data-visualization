# DataViz Studio

一个支持 26 种专业图表类型的数据可视化工具，基于 AntV 图表引擎。

![图表预览](https://mdn.alipayobjects.com/one_clip/afts/img/92hOS6_61tYAAAAARdAAAAgAoEACAQFr/original)

## 功能特性

- 📊 **26 种图表类型**：折线图、柱状图、饼图、散点图、雷达图、桑基图、漏斗图、地图等
- 📁 **多格式支持**：TSV、CSV、Excel (.xlsx/.xls)
- 🎨 **3 种主题**：默认浅色、学术风格、深色主题
- 📥 **模板下载**：每种图表都有对应的 TSV 模板
- 💾 **导出功能**：支持 PNG 和 PDF 格式下载

## 本地开发

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/data-visualization.git
cd data-visualization
```

### 2. 启动本地服务器

```bash
node server.js
```

访问 http://localhost:8080

### 3. 停止服务器

```bash
# 如果端口被占用，先杀掉进程
kill $(lsof -t -i:8080)
```

## 部署到 Vercel（推荐）

### 方案一：使用 Vercel CLI

#### 1. 安装 Vercel CLI

```bash
npm i -g vercel
```

#### 2. 登录 Vercel

```bash
vercel login
```

#### 3. 部署

```bash
vercel
```

按提示操作，Vercel 会自动识别 `api/` 目录下的 Serverless Functions。

### 方案二：GitHub 集成（自动部署）

#### 1. 推送代码到 GitHub

```bash
# 初始化 git（如果还没做）
git init
git add .
git commit -m "Initial commit"

# 创建 GitHub 仓库并推送
git remote add origin https://github.com/yourusername/data-visualization.git
git push -u origin main
```

#### 2. 连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Add New Project"
3. 选择你的 GitHub 仓库
4. 点击 "Deploy"，Vercel 会自动配置好一切

#### 3. 自动更新

每次推送到 GitHub，Vercel 会自动重新部署。

## 项目结构

```
data-visualization/
├── index.html          # 前端页面
├── server.js           # 本地开发服务器
├── api/
│   └── generate.js     # Vercel Serverless Function
├── vercel.json         # Vercel 配置
├── 相关性资源集/
│   └── DataViz_Studio_全网高相关性项目清单.md  # 全网高相关性项目与文档索引（纯 Markdown，不参与构建与部署路由）
└── README.md           # 本文档
```

相关性资源集说明：[`相关性资源集/DataViz_Studio_全网高相关性项目清单.md`](相关性资源集/DataViz_Studio_全网高相关性项目清单.md) 根据本工具的定位（AntV/GPT-Vis、多图表类型、表格导入与导出等）整理，便于调研与对照；该目录仅为文档，不影响 Vercel 构建与 `api/` 行为。

## API 说明

### POST /api/generate

生成图表的 API 端点。

**请求体：**

```json
{
  "type": "line",
  "title": "月度销售趋势",
  "data": [
    {"time": "2024-01", "value": 120},
    {"time": "2024-02", "value": 150}
  ],
  "width": 800,
  "height": 500
}
```

**响应：**

```json
{
  "success": true,
  "resultObj": "https://mdn.alipayobjects.com/.../chart.png"
}
```

## 支持的图表类型

| 类别 | 图表 |
|------|------|
| 时间序列 | 折线图、面积图、双轴图 |
| 比较分析 | 条形图、柱状图、直方图、雷达图 |
| 占比分析 | 饼图、矩形树图、水波图 |
| 关系分析 | 散点图、桑基图、韦恩图、网络图 |
| 分布分析 | 箱线图、小提琴图 |
| 流程分析 | 漏斗图、流程图、鱼骨图 |
| 层级结构 | 组织架构图、思维导图 |
| 地理可视化 | 区域地图、标记地图、路径地图 |
| 其他 | 词云图、数据表格 |

## 数据格式

### 标准格式（TSV/CSV）

```tsv
time	value	group
2024-01	120	系列A
2024-02	150	系列A
```

### 特殊格式

- **直方图**：单列数值
- **水波图**：`metric` + `percent`（0-1）
- **双轴图**：`month` + 多列数值
- **桑基图**：`source` + `target` + `value`

更多格式请参考页面中的模板下载。

## 技术栈

- 前端：原生 HTML + CSS + JavaScript
- 图表引擎：[AntV/GPT-Vis](https://github.com/antvis/GPT-Vis)
- 后端：Node.js / Vercel Serverless Function
- 字体：Google Fonts (Poppins + Lora)


## 相关性资源集

[`相关性资源集/DataViz_Studio_全网高相关性项目清单.md`](相关性资源集/DataViz_Studio_全网高相关性项目清单.md) 根据本工具的定位（AntV/GPT-Vis、多图表类型、表格导入与导出等）整理，便于调研与对照；该目录仅为文档，不影响 Vercel 构建与 `api/` 行为。

## License

MIT
