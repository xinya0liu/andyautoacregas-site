# 怎么改每一块

这份文档专门写给"想改官网某个东西但不想读全部代码"的场景。90% 的改动只动一个
文件：`lib/site.ts`。

> 流程：改完 → `git commit` → `git push` → 等 1-2 分钟 Vercel 自动上线。

## 索引

- [改电话号码](#改电话号码)
- [改价格 / 加新服务 / 改服务描述](#改价格--加新服务--改服务描述)
- [加 / 删服务区域（郊区）](#加--删服务区域郊区)
- [改营业时间](#改营业时间)
- [改社交链接（FB / IG / Messenger / Google Map）](#改社交链接fb--ig--messenger--google-map)
- [改执照 / 证书信息](#改执照--证书信息)
- [改优势清单（Why Andy 6 条）](#改优势清单why-andy-6-条)
- [改 Hero 大标题 / 副标题](#改-hero-大标题--副标题)
- [改"On the Job"照片格 / 加真实照片视频](#改on-the-job照片格--加真实照片视频)
- [换 logo / 换 OG 分享图 / 换 favicon](#换-logo--换-og-分享图--换-favicon)
- [加新章节（整块新内容）](#加新章节整块新内容)
- [调品牌色](#调品牌色)
- [改 Google 搜索显示的描述](#改-google-搜索显示的描述)

---

## 改电话号码

**文件**：`lib/site.ts`

```ts
phone: "0478 701 289",
phoneDigits: "0478701289",  // 只有数字，拨号链接用
```

两个都要改，`phoneDigits` 一定是去掉所有空格/符号的纯数字。

全站所有 "Call 0478…" 按钮、顶栏、页脚、OG 图、schema 都会自动跟着变。

---

## 改价格 / 加新服务 / 改服务描述

**文件**：`lib/site.ts`

```ts
services: [
  {
    slug: "regas",            // 数据库 id，不要动
    name: "AC Regas Service",
    price: "From $140",       // 想改价格就改这里
    blurb: "Full regas ...",  // 服务描述
  },
  // ... 其他
],
```

**加新服务**：复制一整个 `{ ... }`，改 slug（英文短名，必须唯一）、name、
price、blurb，粘到数组里。首页会自动多出一张卡。

**删服务**：把整个 `{ ... }` 删掉就行。

> 💡 价格写 `From $XXX` 格式，Schema.org 会自动提取 $XXX 部分给 Google。
> 如果是 "Quote on Site" 这种，schema 里会显示空价格（Google 接受）。

---

## 加 / 删服务区域（郊区）

**文件**：`lib/site.ts`

```ts
areas: [
  {
    region: "Brisbane South",
    suburbs: ["Sunnybank", "Eight Mile Plains", "Calamvale", "Stretton"],
  },
  // ...
],
```

**加郊区**：直接在 `suburbs` 数组里加字符串。

**加新区域**：复制整个 `{ region: ..., suburbs: [...] }`。

> ⚠️ 加了之后 Schema.org 也会自动把每个郊区告诉 Google —— SEO 价值大。
> 不要瞎加，只写真的能去的地方。

---

## 改营业时间

**文件**：`lib/site.ts`

两处：

```ts
hours: [
  { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { days: "Saturday – Sunday", time: "8:00 AM – 5:00 PM" },
],
extendedHours: "Open 7 days. Can do 6:00 AM – 9:00 PM by booking — just call ahead.",
```

**hours** 是展示用的卡片数据。

**extendedHours** 是 Hours 卡片下面的蓝色小提示。

> 📅 改了之后也要改 Schema.org 里的时间（`lib/schema.ts` 的
> `openingHoursSpecification` 段，用 24 小时格式 `opens:"08:00"` `closes:"18:00"`）。
> 这两个要对齐，否则 Google Maps 的"营业中/已打烊"会显示错。

---

## 改社交链接（FB / IG / Messenger / Google Map）

**文件**：`lib/site.ts`

```ts
social: {
  facebook: "https://www.facebook.com/andy.auto.ac.regas/",
  instagram: "https://www.instagram.com/andy.auto.ac.regas/",
  googleMap: "https://maps.app.goo.gl/dYg1VcqxV72SwBXT6",
  messenger: "https://m.me/andy.auto.ac.regas",
},
```

- 想**隐藏某个图标**：把对应 URL 改成空字符串 `""`，页面上图标自动消失。
- 想**加新平台**（TikTok、YouTube 等）：需要改代码加对应图标组件，告诉我就行。

---

## 改执照 / 证书信息

**文件**：`lib/site.ts`

```ts
credentials: [
  {
    title: "ARCtick Certified",
    detail: "Authorisation No. AU63933",
    body: "Licensed by the Australian Refrigeration Council to handle automotive refrigerant.",
  },
  // ... 其他
],
```

显示在首页 "Licensed & Certified" 一节的三张卡。

执照号改了，**记得也改 `lib/schema.ts`** 里的 `identifier: "AU63933"`（Google
的 Schema 里的识别号要和展示一致）。

---

## 改优势清单（Why Andy 6 条）

**文件**：`lib/site.ts`

```ts
benefits: [
  { title: "Mobile Service", body: "We come to your location — …" },
  { title: "Experienced Technician", body: "…" },
  // ...
],
```

数组长度可以变，不一定非要 6 条。首页会按 3 列自适应排版。

---

## 改 Hero 大标题 / 副标题

**文件**：`app/page.tsx`（这个要动页面文件，不是 site.ts）

搜 `Cold air back`：

```tsx
<h1 className="...">
  Cold air back,
  <br />
  <span style={{ color: YELLOW }}>on-site in 45 minutes.</span>
</h1>
```

直接改文字。要换行用 `<br />`，要把一部分涂成黄色就用
`<span style={{ color: YELLOW }}>` 包起来。

副标题（下面那段 `<p>`）往下滚几行就能看到。

---

## 改"On the Job"照片格 / 加真实照片视频

**现状**：目前是 6 格空占位（深蓝色底 + 一句 "photo / video coming"）。

**改成真实照片**：

1. 把照片放到 `public/work/` 下（文件夹不存在就新建）。文件名随便，建议
   `regas-01.jpg` 这种，别用中文/空格。
2. 打开 `app/page.tsx`，找 `workGallery` 数组：
   ```ts
   const workGallery = [
     { tag: "On-site regas", label: "Driveway service" },
     // ...
   ];
   ```
3. 改成：
   ```ts
   const workGallery = [
     { tag: "On-site regas", label: "Driveway service", image: "/work/regas-01.jpg" },
     // ...
   ];
   ```
4. 再找到渲染这块的 JSX（搜 `workGallery.map`），把目前的占位 `<div>` 改成
   `<img src={item.image} className="w-full h-full object-cover" />`。

视频类似，用 `<video src="/work/xxx.mp4" autoPlay muted loop playsInline />`。

> ✋ 这一步需要改一点 JSX，不是改数据。你把照片放好，告诉我一声我 5 分钟改完。

---

## 换 logo / 换 OG 分享图 / 换 favicon

### 换 logo

**文件**：`public/brand/logo-circle.png` 和 `public/brand/logo-circle-sm.png`

直接用新文件覆盖同名文件。宽高比保持 1:1（正方形）。
`-sm` 建议 400×400 以内（文件小一点，顶栏/页脚用），大图 ≥ 800×800。

### 换 Apple / 浏览器 Icon

**文件**：`app/icon.png`（512×512）和 `app/apple-icon.png`（180×180）

同样直接覆盖。Mac 自带 `sips` 命令可以从大图裁出小图：

```bash
sips -Z 512 -o app/icon.png source-logo.png
sips -Z 180 -o app/apple-icon.png source-logo.png
```

### 换 OG 分享图

**文件**：`app/opengraph-image.tsx`

这个是**代码动态生成**的，不是静态图片。里面是 JSX，改文字直接改字符串，
改配色改 `NAVY_FROM` / `YELLOW` 等常量。改完存档，Vercel 自动重新生成。

想**完全换成一张设计好的图**？把图放 `public/og-image.png`（1200×630），
然后删掉 `app/opengraph-image.tsx`，在 `app/layout.tsx` 的 `openGraph` 段
加一行：

```ts
openGraph: {
  // ...
  images: ["/og-image.png"],
},
```

---

## 加新章节（整块新内容）

**文件**：`app/page.tsx`

页面结构从上到下是：

```
Top bar → Hero → Services → Credentials → Why → On the Job → Areas → CTA + Hours → Footer
```

想在中间插一节，找到对应的 `<section>` 边界，复制一个结构类似的 section 粘贴
到想要的位置，改标题和内容。基本模板：

```tsx
<section className="mx-auto max-w-6xl px-6 py-20">
  <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
    小标签（上面的灰色小字）
  </div>
  <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
    大标题
  </h2>
  <p className="mt-3 text-slate-600 max-w-2xl">
    描述段落。
  </p>
  {/* 下面放你的内容 */}
</section>
```

想要**深色章节**（navy 底白字）：外层 `<section>` 用：

```tsx
<section
  className="relative overflow-hidden text-white"
  style={{ background: `linear-gradient(135deg, ${NAVY_FROM} 0%, ${NAVY_TO} 100%)` }}
>
  ...
</section>
```

想要**黄色 CTA 章节**：

```tsx
<section
  className="relative overflow-hidden"
  style={{ background: `linear-gradient(135deg, ${YELLOW_LIGHT} 0%, ${YELLOW} 50%, ${YELLOW_DARK} 100%)` }}
>
  ...
</section>
```

---

## 调品牌色

**文件**：`app/page.tsx` 顶部 + `app/opengraph-image.tsx` 顶部

```ts
const NAVY_FROM = "#01579B";
const NAVY_TO = "#013A69";
const YELLOW = "#FFC400";
const YELLOW_LIGHT = "#FFDC33";
const YELLOW_DARK = "#F7B200";
```

**两个文件都要改一致**，否则 OG 图和页面颜色会对不上。

详细的品牌色出处和设计规则看 [BRAND.md](BRAND.md)。

---

## 改 Google 搜索显示的描述

**文件**：`app/layout.tsx`

```ts
const DESCRIPTION =
  "Mobile car AC regas, system check and repair across Brisbane, Logan, ...";
```

这段话是：
- 浏览器 tab 的描述
- Google 搜索结果里页面标题下面那段
- Facebook / WhatsApp 分享预览的描述

控制在 **150-160 字符**，前面放最重要的关键词。

同一个文件里的 `metadata.title` 是浏览器 tab 的标题 + Google 搜索结果的蓝色标题
那一行，也可以改。

---

## 还有问题？

- 改了但不知道有没有生效：看 [DEPLOY.md](DEPLOY.md) 的"确认线上是最新代码"
- 不知道某块代码对应页面哪里：浏览器右键 → Inspect，找到那块的 class，回代码里搜
- 改坏了想回滚：看 [DEPLOY.md](DEPLOY.md) 的"回滚部署"
- 不想自己动代码：把要改的内容写清楚告诉 Claude，一次改完
