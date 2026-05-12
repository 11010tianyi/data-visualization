# DataViz Studio（本仓库）— 全网高相关性项目集合

> **说明**：本文档以本仓库「浏览器端多图表类型、TSV/CSV/Excel 导入、AntV/GPT-Vis 引擎、学术/深色主题、PNG/PDF 导出」定位为锚点，汇总主题高度相关的网页工具、开源图表栈与科研/出版向资源，并补充同类高相关条目。  
> **排序规则**：按 **与本项目主题的相关性得分（10 分制，高→低）** 降序排列；同分按「即开即用的 Web 工具 → 开源组件/示例库 → 桌面或 BI 产品」大致分组。

**相关性打分维度（综合）**  
1. 是否覆盖 **多种标准统计/信息图表**（折线、柱、饼、散点、地图、桑基等与本仓库 26 类能力同簇）；  
2. 是否 **浏览器内完成导入—配置—导出**（与本仓库交互形态接近）；  
3. 技术栈或 **语法层是否与 AntV / G2 / Vega 系、D3 生态** 可对照；  
4. 是否强调 **学术出版、报告或无障碍配色**（与本仓库「学术风格」主题接近）。

---

## 相关性排序总表（含链接直达）

| 排序 | 相关性 | 名称 | 类型 | 链接直达 | 一句话定位 |
|:---:|:---:|:---|:---|:---|:---|
| 1 | **10/10** | **AntV GPT-Vis** | 开源库 | https://github.com/antvis/GPT-Vis | 本仓库图表引擎上游；G2 系声明式与可视化组件集合 |
| 2 | **10/10** | **AntV G2 / G2Plot** | 开源库 | https://github.com/antvis/G2 · https://github.com/antvis/G2Plot | 语法化统计图与常用封装；与本仓库能力模型直接同源 |
| 3 | **9.5/10** | **AntV 图表示例 / 所有图表** | 文档与示例 | https://g2plot.antv.antgroup.com/examples · https://g2.antv.antgroup.com/examples | 官方示例库，做图表类型与数据形态对照的首选 |
| 4 | **9.5/10** | **Observable Plot** | 网页/开源 | https://observablehq.com/plot/ · https://github.com/observablehq/plot | 基于 D3 的简洁 API；适合「语法 vs 交互面板」对照学习 |
| 5 | **9.5/10** | **Vega-Lite Editor** | 网页 | https://vega.github.io/editor/ | JSON 规格驱动图表；与本仓库「数据驱动配置」思路高度同构 |
| 6 | **9/10** | **RAWGraphs** | 网页 | https://www.rawgraphs.io/ | 拖放映射 + 学术风导出；无代码到 SVG/PNG 的经典工作流 |
| 7 | **9/10** | **Apache ECharts 示例** | 文档与示例 | https://echarts.apache.org/examples/en/index.html | 国产工业界事实标准之一；图表类型与地图能力极全，可作竞品图谱 |
| 8 | **9/10** | **Datawrapper** | SaaS 网页 | https://www.datawrapper.de/ | 新闻与出版向图表；无障碍与品牌导出成熟 |
| 9 | **8.5/10** | **Flourish** | SaaS 网页 | https://flourish.studio/ | 数据叙事与动效；与本仓库「单页多类型」部分重叠，偏故事板 |
| 10 | **8.5/10** | **Plotly Chart Studio** | 网页 | https://chart-studio.plotly.com/ | 在线编辑 + Python/R 生态联动；科学计算用户群重叠 |
| 11 | **8.5/10** | **D3.js Gallery / Observable** | 网页 | https://d3js.org/ · https://observablehq.com/@d3/gallery | 底层绑定与定制天花板；适合理解 GPT-Vis/G2 之下层能力边界 |
| 12 | **8/10** | **Google Looker Studio** | SaaS 网页 | https://lookerstudio.google.com/ | 连接器 + 仪表盘；偏 BI，但「浏览器内出图」路径相似 |
| 13 | **8/10** | **Metabase** | 开源 / 自托管 | https://www.metabase.com/ | 问句式探索 + SQL；图表为报告副产物，技术栈不同但用户场景相邻 |
| 14 | **8/10** | **Grafana Play** | 网页沙箱 | https://play.grafana.org/ | 时序与监控可视化标杆；与本仓库「时间序列」类图表需求强相关 |
| 15 | **7.5/10** | **Jupyter + Matplotlib / Seaborn** | 笔记本环境 | https://matplotlib.org/ · https://seaborn.pydata.org/ | 学术静态图标准栈；导出 PDF/矢量与本仓库出版诉求一致，交互形态不同 |
| 16 | **7.5/10** | **ggplot2（R）** | 语言包 | https://ggplot2.tidyverse.org/ | 语法化图形（Grammar of Graphics）理论同源；适合对照「声明式」设计 |
| 17 | **7.5/10** | **Vega**（全规格） | 开源 | https://vega.github.io/vega/ | Vega-Lite 的上位层；复杂交互与布局时进入视野 |
| 18 | **7/10** | **Recharts** | React 开源 | https://recharts.org/en-US/examples | React 声明式封装；若本仓库未来组件化可参考生态位 |
| 19 | **7/10** | **visx（Airbnb）** | React 开源 | https://airbnb.io/visx/ | 低层 primitive + React；与「无框架 HTML+JS」本仓库取舍不同 |
| 20 | **7/10** | **Infogram** | SaaS 网页 | https://infogram.com/ | 轻量信息图；类型少但上手快，偏传播而非分析 |
| 21 | **6.5/10** | **Tableau Public** | SaaS 桌面+网页 | https://public.tableau.com/ | 交互探索与故事板标杆；产品重、与本仓库轻量单页定位有距离 |
| 22 | **6/10** | **Mermaid Live Editor** | 网页 | https://mermaid.live/ | 流程图/时序图等 **示意性** 图表；与统计图表簇相邻但数据源模型不同 |
| 23 | **6/10** | **简道云 / 钉钉宜搭等零代码表单图表** | SaaS | （各厂商官网检索） | 企业表单驱动仪表盘；图表深度通常弱于专业可视化栈 |

---

## 分项链接与备忘

### 网页 / 即开即玩（含在线编辑器）

| 项目 | 主要入口（建议自行核验时效） |
|:---|:---|
| Vega-Lite Editor | https://vega.github.io/editor/ |
| Observable Plot 文档与示例 | https://observablehq.com/plot/ |
| RAWGraphs | https://www.rawgraphs.io/ |
| Datawrapper | https://www.datawrapper.de/ |
| Flourish | https://flourish.studio/ |
| Plotly Chart Studio | https://chart-studio.plotly.com/ |
| Grafana Play | https://play.grafana.org/ |
| Google Looker Studio | https://lookerstudio.google.com/ |
| ECharts 示例库 | https://echarts.apache.org/examples/en/index.html |
| AntV G2 示例 | https://g2.antv.antgroup.com/examples |
| AntV G2Plot 示例 | https://g2plot.antv.antgroup.com/examples |
| Mermaid Live | https://mermaid.live/ |

### 开源仓库 / 文档（集成与二次开发）

| 项目 | 备忘 |
|:---|:---|
| GPT-Vis | https://github.com/antvis/GPT-Vis |
| G2 | https://github.com/antvis/G2 |
| G2Plot | https://github.com/antvis/G2Plot |
| Observable Plot | https://github.com/observablehq/plot |
| Vega / Vega-Lite | https://github.com/vega/vega · https://github.com/vega/vega-lite |
| D3 | https://github.com/d3/d3 |
| Apache ECharts | https://github.com/apache/echarts |
| Recharts | https://github.com/recharts/recharts |
| visx | https://github.com/airbnb/visx |
| Metabase | https://github.com/metabase/metabase |

### 桌面 / 笔记本 / 语言环境（偏科研与批量出图）

| 项目 | 备忘 |
|:---|:---|
| Matplotlib | https://matplotlib.org/ |
| Seaborn | https://seaborn.pydata.org/ |
| ggplot2 | https://ggplot2.tidyverse.org/ |
| Tableau Public | https://public.tableau.com/ |

---

## 重点条目：与本仓库技术栈直接相关的三层结构

以下为 **AntV 系（G2 → G2Plot → GPT-Vis）** 与 **Grammar of Graphics 两条线（Vega-Lite / ggplot2）** 的补充说明，已反映在上文总表与分项链接表中。

### AntV 系（本仓库默认引擎路径）

- **GPT-Vis**：https://github.com/antvis/GPT-Vis — 面向「多图表类型集合 + 与大模型/结构化配置结合」场景的 AntV 官方可视化组件与约定。  
- **G2**：https://github.com/antvis/G2 — 核心语法与渲染；理解 scale、coordinate、mark 等概念有助于阅读本仓库前端逻辑。  
- **G2Plot**：https://github.com/antvis/G2Plot — 常见图表类型的开箱配置；与本仓库「26 种图表」清单可逐一对照官方示例目录。  
- **示例入口**：G2 / G2Plot 官网示例见上表「即开即玩」；版本与域名可能随 Ant Group 品牌调整，请以 **antv.antgroup.com** 或 GitHub 仓库说明为准。

### Vega-Lite / Vega（规格驱动图表）

- **在线编辑器**：https://vega.github.io/editor/ — 左侧 JSON、右侧图；适合将「数据 schema → 视觉编码」与本仓库的 JSON 请求体（如 `POST /api/generate`）做对照。  
- **Vega-Lite**：声明式子集，学习曲线低于完整 Vega。  
- **与 AntV 关系**：理念同为「数据 + 映射 → 视图」；实现栈不同，适合作为跨栈面试题或教学二选一基准。

### 出版与新闻向（导出与无障碍）

- **Datawrapper**：强调色盲安全、出版级 SVG/PNG；适合对照本仓库「学术风格主题」的色板与对比度。  
- **RAWGraphs**：从电子表格到矢量导出，工作流与本仓库「粘贴/上传表格 → 选图 → 导出」最接近之一。  
- **Flourish**：动效与模板化强；若扩展「故事模式」可参考信息架构，而非底层渲染。

---

## 扩展条目补充说明（为何入选）

- **ECharts**：图表类型与 **地理组件** 极全，国内工程引用率高；与本仓库「地图类」条目形成竞品与文档互查关系。  
- **Observable Plot / D3**：揭示 **JavaScript 生态内**「低代码封装 vs 全手动绑定」光谱；本仓库位于「封装好的 AntV + 轻量 UI」一侧。  
- **Grafana / Metabase / Looker Studio**：图表是 **监控或 BI 产品** 的一部分，数据源为数据库或连接器；入选因「时间序列与仪表盘」与本仓库部分图表类型需求重叠，但产品重心不同。  
- **ggplot2 / Matplotlib / Seaborn**：**静态学术图** 标准路径；与本仓库「PDF/PNG 导出」目标一致，交互与在线协作弱于 Web 工具。  
- **Mermaid**：非统计图表，但常与研究仓库 README、架构图同事出现；标低分以免与「统计图表工作室」混淆。

---

## 使用建议

- **扩展图表类型或校验数据格式**：优先对照 **AntV G2Plot 示例** 与本仓库 README 中的 TSV/CSV 约定。  
- **设计「数据 → JSON → 渲染」协议**：对照 **Vega-Lite** 与 **GPT-Vis** 的示例 payload，保持字段命名稳定、可版本化。  
- **提升出版与无障碍质量**：对标 **Datawrapper、RAWGraphs** 的导出设置与配色指南，并抽查 WCAG 对比度。  
- **评估是否引入地图或大屏**：查阅 **ECharts 地图示例** 与 **Grafana** 的时序模式，再决定是否在单页工具内增加复杂度。

---

## 与 Vercel 部署的关系（本仓库）

- 本文件位于 **`data-visualization/相关性资源集/`**，仅为 **Markdown 文档**，不参与 `node server.js` 的静态资源路径，也不被 `vercel.json` 或 `api/generate.js` 引用。  
- **不会修改** 构建入口（`index.html`、`api/`、`vercel.json`、`package.json`），对 Vercel 默认静态部署与 Serverless 路由无影响。  
- 若未来使用 `vercel.json` 的 `output` 或 monorepo 子目录根，请保持 **项目根仍为当前应用根目录**；文档目录可继续作为纯文档保留。

---

*整理说明：基于本仓库 DataViz Studio 定位与公开网络检索、领域常识汇编；链接与产品形态可能随时间变更，请以各项目官方页面为准。*
