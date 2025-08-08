# 哪吒2壁纸网站 - Netlify部署指南

## 🚀 部署到Netlify

这个Next.js项目已经配置好可以在Netlify上完美运行。

### 部署步骤：

1. **准备代码**
   - 确保所有代码已提交到Git仓库
   - 项目根目录包含 `netlify.toml` 配置文件

2. **连接Netlify**
   - 登录 [Netlify](https://netlify.com)
   - 点击 "New site from Git"
   - 选择你的Git仓库

3. **配置构建设置**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 (已在netlify.toml中配置)

4. **环境变量（可选）**
   - 如果需要，可以在Netlify设置中添加环境变量

### 📁 项目结构

```
nezha2_wallpapers_web/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx        # 首页
│   │   ├── download/[id]/  # 下载页面
│   │   └── layout.tsx      # 布局
│   ├── components/         # React组件
│   ├── data/              # 数据文件
│   └── lib/               # 工具函数
├── public/
│   └── wallpapers/        # 壁纸图片
├── netlify.toml           # Netlify配置
└── package.json           # 项目依赖
```

### ⚡ 特性

- ✅ Next.js 15 App Router
- ✅ TypeScript支持
- ✅ Tailwind CSS样式
- ✅ 响应式设计
- ✅ 动态路由
- ✅ 图片优化
- ✅ SEO友好

### 🔧 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Netlify
- **图片**: Next.js Image组件

### 📝 注意事项

1. **图片路径**: 确保所有壁纸图片都在 `public/wallpapers/` 目录下
2. **数据文件**: `src/data/wallpapers.json` 包含所有壁纸信息
3. **构建时间**: 首次构建可能需要几分钟，因为要处理大量图片

### 🎯 部署后检查

- [ ] 首页正常显示
- [ ] 壁纸图片正常加载
- [ ] 下载功能正常
- [ ] 响应式设计正常
- [ ] 火花背景动画正常

### 📞 支持

如有问题，请检查：
1. Netlify构建日志
2. 浏览器控制台错误
3. 图片路径是否正确
4. 数据文件格式是否正确

---

**哪吒2壁纸宇宙** - 精选《哪吒2》电影中的精美壁纸 🎬
