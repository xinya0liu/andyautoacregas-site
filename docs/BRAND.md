# 品牌视觉规范

Andy Auto AC Regas 的颜色、字体、Logo、斜体规则 —— 都是从**现有车贴和 engine bay
sticker 直接取**的，不是重新设计。网站、未来的 EDM、名片、单据都应该保持一致。

## 原稿出处

所有素材在 Mac 本地：

```
~/Desktop/ANDY AUTO AC REGAS/04 MARKETING 广告设计/
├─ Logo/
│  ├─ andy_auto_circle.png            圆形 logo（标准）
│  └─ andy_auto_circle_hd.png         圆形 logo（高清）
├─ Stickers & Signage/
│  ├─ andy_auto_engine_bay_sticker_EDITABLE.svg   ★ 品牌色源文件
│  ├─ andy_auto_engine_bay_sticker_PRINT (1).pdf  印刷稿
│  ├─ andy_auto_tailgate_100x20cm_ART.pdf         车尾贴
│  ├─ andy_auto_reardoor_47x48.8cm_ART.pdf        车后门贴
│  ├─ arc5919-licensedservicecorflute_600x450_web.pdf   ARCtick 执照牌
│  └─ ARC_AU63933_vehicle_decal_620x600mm.pdf     执照号车贴
└─ ...
```

网站用到的两个 logo 文件已经复制到 `public/brand/`。换版本直接覆盖同名文件即可。

## 配色

```
Navy  渐变  #01579B → #013A69    主色（header、hero 底、CTA 深底）
Yellow 亮  #FFC400               强调色（电话 pill、徽章、数字）
Yellow 浅  #FFDC33               渐变起始
Yellow 深  #F7B200               渐变终点
White               #FFFFFF       深底上的文字
```

**代码位置**：`app/page.tsx` 和 `app/opengraph-image.tsx` 顶部都有一组常量，
改了要**两份同步改**。详见 [CHANGES.md](CHANGES.md#调品牌色)。

### 配色用法规则

| 场景 | 用什么 |
|---|---|
| 页面大背景 | 白色 (`#fff`) |
| 顶栏、页脚、深色 banner section | Navy 渐变 |
| 主 CTA 按钮（Call xxx） | 黄底 + navy 字 |
| 次 CTA 按钮（Messenger） | 透明 + 白色描边（在 navy 底上） |
| 徽章 / 小标签 | 黄底 + navy 字 |
| 大数字 / 强调（$140, 45m） | 黄色 |
| 章节大标题 | Navy 深色 (`#013A69`) |
| 小标签文字（uppercase tracking） | Navy 中色 (`#01579B`) |
| 正文 | `text-slate-900` 或 `text-slate-600` |
| 雪花图案 | `currentColor` + opacity 0.05~0.1（白色在深底、navy 在浅底） |

## 字体

**字体族**：Inter（Google Fonts，通过 `next/font` 加载）

**代码位置**：`app/layout.tsx` 顶部 `Inter(...)` 配置。

### 斜体规则 ★

这是最容易违反的一条规则。

**斜体只用于两个地方**：

1. 品牌 wordmark "ANDY AUTO AC REGAS"
2. 电话号码显示 "0478 701 289"

**其他所有地方都是正体**（font-style: normal）：
- 章节大标题（即使是 `font-black uppercase`）→ 正体
- 按钮文字 → 正体
- 数字（$140, 45m, 7/7）→ 正体
- 服务名、优势名、郊区名 → 正体
- 正文 → 正体

**为什么**：
车贴上原稿只有 wordmark 和电话是斜体，其他都是正体粗体。V4 最初所有粗体都加了
italic，读起来太忙，Andy 直接指出了（2026-11-14）。这条规则适用于所有 Andy 品牌
物料，不只是官网。

在代码里：

```tsx
// ✅ 对的 —— wordmark + phone 斜体
<div className="font-black italic">ANDY AUTO AC REGAS</div>
<span className="italic">{site.phone}</span>

// ❌ 错的 —— 其他地方别加 italic
<h2 className="font-black italic uppercase">Services</h2>  {/* 别这样 */}
<button className="font-black italic">Book Now</button>    {/* 别这样 */}
```

### 字重

- `font-black`（900）—— 大标题、按钮、小标签、Hero H1
- `font-bold`（700）—— 按钮里的次要文字
- 默认（400）—— 正文段落

### 大小

Hero 大标题用 `text-4xl md:text-6xl`，手机 36px、桌面 60px。
Section 大标题用 `text-3xl md:text-4xl`。
不要出现超过 60px 的字体，太张扬。

## Logo 使用

### 圆形 logo（标准）

- Hero 右侧大图：`<Image src="/brand/logo-circle.png" />` 方形容器
- 顶栏 + 页脚：用 `logo-circle-sm.png` 更小更快

**Logo 背景规则**：

logo 本身的圆形里背景是浅色（白+淡灰纹）。所以：
- 放在**白底**上：直接用，看不出边缘
- 放在**深色底**上：外加白色圆形 `bg-white` padding 一圈，不然圆形外缘融进背景会变成方的

代码示例：

```tsx
<Image
  src="/brand/logo-circle-sm.png"
  width={44}
  height={44}
  className="rounded-full bg-white"  // bg-white 这句是关键
/>
```

## 装饰元素

### 雪花

贴纸右上角有两朵透明度很低的雪花。网站继承了这个元素，代码里有一个
`Snowflake` 组件（`app/page.tsx` 顶部）。

规则：
- 只放在 **深色 section 的四角**，或**浅色 section 的卡片右上角**
- `opacity` 0.05 ~ 0.10 之间，不能太抢眼
- 颜色用 `text-white`（在 navy 底）或 `text-[#01579B]`（在白底）
- 不要密集堆叠，一个 section 最多 2-3 朵不同大小的

### 黄色渐变条

贴纸的底边是一条黄色渐变。网站也有一条 `h-3` 的渐变条作为**深色和浅色 section
之间的过渡**。

代码：
```tsx
<div
  className="h-3"
  style={{ background: `linear-gradient(90deg, ${YELLOW_LIGHT} 0%, ${YELLOW} 50%, ${YELLOW_DARK} 100%)` }}
/>
```

出现位置：Hero 底部、Why 章节底部。

## 文案口吻

- 第一人称**不要**用（例如 "Hi, I'm Andy"）—— V3 用过，V4 刻意改成第三人称的工具调性
- CTA 动词：`Call`、`Message`、`Book`、`Get`、`Text`（用 Text 而不是 WhatsApp）
- 价格一律 `From $XXX` 或 `Quote on Site`
- 时间格式一律 `6:00 AM – 9:00 PM`（美式空格破折号）
- 郊区名用 Title Case（`Mount Warren Park`，不是 `mount warren park`）

## 禁区

- 不用 emoji 做装饰（功能性 icon 另说，比如 📞 可以）
- 不用 drop shadow 做"3D 立体感"
- 不用 glassmorphism / 极度磨砂
- 不要出现 Andy 的照片 + 第一人称自夸文（除非他本人同意）
- 不要在 navy 上写 navy 字（对比度太低）
- 不要在白色上用 100% YELLOW 文字（也是对比度太低，`WCAG AA` 不达标）—— 要黄字就加深色描边或放在深色框里
