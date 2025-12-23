这是一个使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 引导创建的 [Next.js](https://nextjs.org) 滑雪攻略项目。

## 项目简介

这是一个全面的滑雪攻略网站，为滑雪爱好者提供从新手入门到高手进阶的完整指南。内容包括装备推荐、技巧教学、雪场推荐和安全须知等。

## 开始使用

首先，运行开发服务器：

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
# 或者
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

你可以通过修改 `app/page.tsx` 来开始编辑页面。当你编辑文件时，页面会自动更新。

本项目使用 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) 自动优化和加载 [Geist](https://vercel.com/font) 字体，这是 Vercel 的新字体族。

## 了解更多

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 的功能和 API
- [Learn Next.js](https://nextjs.org/learn) - 交互式的 Next.js 教程

你可以查看 [Next.js GitHub 仓库](https://github.com/vercel/next.js) - 欢迎你的反馈和贡献！

## 在 Vercel 上部署

部署你的 Next.js 应用最简单的方法是使用 Next.js 创建者提供的 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

查看我们的 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。

## 项目结构

```
src/
├── app/              # Next.js 应用路由
├── components/       # React 组件
│   ├── Header.tsx    # 页头导航组件
│   ├── Hero.tsx      # 主页横幅组件
│   ├── EquipmentSection.tsx    # 装备推荐组件
│   ├── TechniquesSection.tsx   # 技巧教学组件
│   ├── ResortsSection.tsx      # 雪场推荐组件
│   ├── SafetySection.tsx       # 安全须知组件
│   ├── FAQsSection.tsx         # 常见问题组件
│   ├── Footer.tsx      # 页脚组件
│   └── GuideContent.tsx # 指南内容组件
└── hooks/            # 自定义 React Hooks
```

## 技术栈

- **前端框架**: Next.js 16
- **UI 库**: React 19
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **字体**: Geist (通过 next/font 优化)
