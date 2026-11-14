# Andy Auto AC Regas — Official Website

生产地址：<https://andyautoacregas-site.vercel.app>
（真实域名 `andyautoacregas.com.au` 待迁 DNS，见 [docs/DEPLOY.md](docs/DEPLOY.md)）

GitHub：<https://github.com/xinya0liu/andyautoacregas-site>

---

## 这是什么

Andy Auto AC Regas 的官网（取代 Netlify 上原来的静态站）。移动上门汽车空调服务，覆盖
Brisbane、Logan、Gold Coast North 等地。

品牌视觉和现有的车贴、engine bay sticker、圆形 logo 完全一致（配色从
`andy_auto_engine_bay_sticker_EDITABLE.svg` 直接取色）。

## 技术栈

| 层 | 选择 |
|---|---|
| 框架 | Next.js 16（App Router，Turbopack） |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4 |
| 字体 | Inter（Google Fonts via `next/font`） |
| 部署 | Vercel（GitHub 集成，`git push` 自动部署） |
| 域名（临时） | `andyautoacregas-site.vercel.app` |
| 域名（目标） | `andyautoacregas.com.au`（待迁） |

没有后端、没有数据库、没有登录。整站是**静态渲染**（部分 edge 动态只用于 OG 图），
加载极快，SEO 友好。

## 项目结构

```
andyautoacregas-site/
├─ app/
│  ├─ layout.tsx              页面外壳 + 全局 metadata + JSON-LD 注入
│  ├─ page.tsx                首页（所有内容在这一个文件里）
│  ├─ globals.css             Tailwind 入口 + 字体变量
│  ├─ icon.png                favicon（512×512 自动生成多尺寸）
│  ├─ apple-icon.png          iOS 加到主屏幕用的图标（180×180）
│  └─ opengraph-image.tsx     分享预览图（1200×630 动态生成）
├─ lib/
│  ├─ site.ts                 ★ 所有可编辑内容：电话、服务、价格、区域、社交链接
│  └─ schema.ts               Schema.org AutoRepair JSON-LD 生成器
├─ public/
│  └─ brand/
│     ├─ logo-circle.png      大图圆形 logo（Hero 用）
│     └─ logo-circle-sm.png   小图圆形 logo（顶栏、页脚用）
├─ docs/
│  ├─ CHANGES.md              ★ 怎么改每一块（最常看）
│  ├─ BRAND.md                品牌色、字体、斜体规则
│  └─ DEPLOY.md               部署、回滚、域名迁移
└─ package.json
```

**几乎所有文案改动只需要动 `lib/site.ts`。** 价格、服务、区域、营业时间、社交链接
全部在那里，改完 `git push` 就自动部署。

## 本地跑

前提：`node -v` ≥ 20

```bash
npm install     # 第一次
npm run dev     # 本地 http://localhost:3000
```

Mac 的 IP 也会打印出来，手机连同 WiFi 可以用 `http://192.168.x.x:3000` 测移动端。

## 改完发布

```bash
git add -A
git commit -m "<简短说明>"
git push
```

Vercel 看到推送，1-2 分钟后 `andyautoacregas-site.vercel.app` 就是新版本。
不用进 Vercel 后台点任何按钮。

## 常见任务 → 看哪份文档

| 想做的事 | 看哪份 |
|---|---|
| 改价格 / 服务 / 区域 / 营业时间 / 社交链接 | [docs/CHANGES.md](docs/CHANGES.md) |
| 换 logo / 调品牌色 / 新图标 | [docs/BRAND.md](docs/BRAND.md) |
| 回滚某个坏版本 / 接真实域名 / 看部署状态 | [docs/DEPLOY.md](docs/DEPLOY.md) |
| 整个工程为什么这么做、有什么坑 | 本文件（README） |

## 已完成 / 待办

### 已完成
- V4 on-brand 首页（navy + 金黄 + 雪花 + 圆 logo）
- 服务 / 价格 / 区域 / 优势 / 执照 / Hours / 社交联系
- Schema.org `AutoRepair` 结构化数据（Google 本地 SEO 用）
- 1200×630 OG 分享预览图（iMessage / FB / Messenger / IG 自动展开）
- Favicon + Apple Home screen icon
- GitHub + Vercel 自动部署流水线

### 待办
- 实拍照片 / 视频替换 `On the Job` 的 6 格占位
- 文案 / 布局继续迭代（Andy 手机验收后列清单）
- `andyautoacregas.com.au` DNS 从 Netlify 迁到 Vercel（见 [docs/DEPLOY.md](docs/DEPLOY.md)）
- Netlify 原站保留 1 周作为兜底，确认无误后下架
