# 部署、回滚、域名

## 流水线

```
本地改代码
    ↓ git push origin main
GitHub (xinya0liu/andyautoacregas-site)
    ↓ webhook 触发
Vercel 自动构建（~1-2 分钟）
    ↓
andyautoacregas-site.vercel.app   ← 新版本上线
```

**不需要**手动跑 `vercel --prod` 或在 Vercel 后台点任何按钮。GitHub 集成在
第一次部署时已经建好了。

## 当前状态

- **临时生产域名**：<https://andyautoacregas-site.vercel.app>
- **真实域名**：`andyautoacregas.com.au` —— 当前仍指向旧的 Netlify 静态站，待迁移
- **Vercel 项目**：`xinyaliuau-8060s-projects/andyautoacregas-site`
- **Dashboard**：<https://vercel.com/xinyaliuau-8060s-projects/andyautoacregas-site>

## 看部署状态

### 命令行

```bash
vercel ls
```

显示最近几次部署。`● Ready` = 成功，`● Error` = 失败。

想看某次部署的详细日志：

```bash
vercel inspect <deployment-url>
vercel logs <deployment-url>
```

### Dashboard

<https://vercel.com/xinyaliuau-8060s-projects/andyautoacregas-site/deployments>

每一行是一次 commit 的部署。点进去能看构建日志。

## 确认线上是最新代码

有时候 `git push` 了但线上好像还是旧的，可能是：

1. **浏览器缓存**：按 Cmd+Shift+R 强刷
2. **部署还没跑完**：`vercel ls` 看最新那行是不是 `Ready`
3. **Vercel 没收到 webhook**（罕见）：`git commit --allow-empty -m "Redeploy"
   && git push` 手动触发

## 回滚

### 回滚到上一个版本（Dashboard）

1. 打开 Vercel Dashboard → Deployments
2. 找到你想回到的那次（Ready 状态）
3. 右边 `...` 菜单 → **Promote to Production**
4. 30 秒内该版本成为新的生产版本

### 回滚（命令行）

```bash
vercel ls                               # 找到想回退到的 deployment URL
vercel promote <那个 URL>
```

### Git 回滚（更彻底）

如果想让整个 `main` 分支回到某次 commit：

```bash
git log --oneline              # 找到那个 commit 的 hash
git revert HEAD                # 撤销最后一次 commit（保留历史）
# 或者
git reset --hard <hash>         # 硬回退（破坏性，要确认）
git push --force origin main    # ⚠️ 强推主分支，上一步 reset 过才用
```

> ⚠️ `--force` 要小心。只在你**确定**没人正在同一分支上工作时用。
> 通常 `git revert` 更安全，它是加一个"撤销 commit"而不是改写历史。

## 接真实域名 `andyautoacregas.com.au`

**目标**：把 `andyautoacregas.com.au` 从 Netlify 迁到 Vercel，零停机。

### 步骤

**1. 在 Vercel 里声明域名**

```bash
vercel domains add andyautoacregas.com.au
```

或 Dashboard → Project Settings → Domains → Add → 输入域名。

Vercel 会显示两种配置方式：
- **方式 A（推荐）**：A record 指向 Vercel IP
- **方式 B**：nameserver 完全交给 Vercel（Vercel 接管所有 DNS，包括 MX 等）

### 2. 确定域名在哪里管

查一下 `andyautoacregas.com.au` 的 nameserver 现在指哪里：

```bash
dig +short NS andyautoacregas.com.au
```

通常会看到 Netlify / Cloudflare / 注册商（Crazy Domains、GoDaddy 等）的 nameserver。

### 3. 改 DNS 记录（方式 A）

在管理 DNS 的那个地方（Netlify 或注册商），把 `A` 记录指向 Vercel 给出的 IP。
通常是：

```
@       A      76.76.21.21        # Vercel 的 Anycast IP
www     CNAME  cname.vercel-dns.com.
```

**先改 A 记录**，不要改 nameserver。这样原来 Netlify 的 CNAME/MX/其他记录（比如
邮件转发）都保留。

### 4. 等 DNS 生效 + Vercel 自动签 SSL

DNS 全球生效通常 5-60 分钟。Vercel 看到 A 记录指过来了会自动签 Let's Encrypt
证书。Dashboard 里域名旁边变 ✅ 就是好了。

验证：

```bash
dig +short andyautoacregas.com.au     # 应该返回 76.76.21.21
curl -sI https://andyautoacregas.com.au | head -5   # 应该是 Vercel 返回的 HTTP/2 200
```

### 5. 兜底期

Netlify 老站**不要立刻删**。保留 1 周观察：
- Google Search Console 看搜索抓取有没有问题
- 自己手机、朋友手机访问几次确认稳定
- 跑一次 Lighthouse 看性能分

1 周后确认一切 OK，才去 Netlify 后台停掉那个站。

### 6. 更新代码里的 URL 引用

部分地方硬编码了 vercel URL，迁完改成真实域名：

- `app/layout.tsx` 顶部 `SITE_URL` 常量
- `lib/schema.ts` 顶部 `SITE_URL` 常量
- `README.md` 的"生产地址"
- `docs/DEPLOY.md` 这里

## 紧急情况

### 生产站打不开 500 / 白屏

1. `vercel ls` 看最新 deployment 状态
2. 如果 Ready 但确实 500：`vercel logs <url>` 看 runtime 日志
3. 应急：在 Dashboard 回滚到上一个 Ready 的 Production deployment（见上文）
4. 回滚完再排查 commit 问题

### 部署一直卡在 Building

通常是依赖安装慢或 Vercel region 故障。

- 等 5 分钟再看
- `vercel logs <building-url>` 看构建日志
- Dashboard 右上角可以 Cancel + Redeploy

### Vercel 账号登录过期

```bash
vercel logout
vercel login
```

浏览器 OAuth 一次就好。

## 环境变量

目前**没有任何环境变量**。整站纯静态，不读取 secrets。

以后如果加（比如要存第三方 API key），命令：

```bash
vercel env add KEY_NAME              # 交互式，会问 Production/Preview/Development
vercel env ls                        # 列出所有
vercel env pull                      # 拉下来生成本地 .env.local
```

## 费用

目前在 Vercel **Hobby 免费层**。限制：
- 100 GB 流量/月（远超一个本地服务生意的访问量）
- 100 小时构建时间/月（每次构建 20-30 秒）
- 无自定义团队（个人账号就行）

一旦超限 Vercel 会邮件提醒，不会直接断服务。这个站不会达到任何上限。
