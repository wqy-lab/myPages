# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

科技感学术风格个人主页。首页菜单 + 单内容页架构。支持直接双击打开，无需本地服务器。

## 文件结构

```
E:\myPages\
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 脚本文件
├── data.js             # 数据文件（主要修改这里）
├── data/               # JSON 数据（可选，需要 HTTP 服务）
└── assets/             # 资源文件夹（头像等）
```

## 页面结构

- **首页**：粒子+网格线背景，显示姓名 + 5个科技感按钮，点击进入对应内容
- **内容页**：顶部返回按钮 + 当前区块名称 + 内容，ESC 键返回

## 修改内容

### 主要方式：修改 `data.js`

打开 `data.js`，直接修改里面的数据，保存后刷新页面即可。

```javascript
const DATA = {
  profile: {
    name: "你的名字",
    title: "头衔/身份",
    avatar: "assets/avatar.jpg",  // 留空则显示首字母
    bio: "个人简介",
    interests: ["兴趣1", "兴趣2"],
    location: "所在地"
  },
  blog: [...],      // 博客文章数组
  courses: [...],   // 课程数组
  projects: [...],  // 项目数组
  contact: {...}    // 联系方式
};
```

### 可选方式：JSON 文件

如果需要分离数据，可将 `data/` 下的 JSON 文件通过 HTTP 服务访问（需要 `python -m http.server`）。

## 添加头像

将头像图片放入 `assets/avatar.jpg`，或在 `data.js` 的 `profile.avatar` 中指定路径。留空则显示姓名首字母。

## 本地预览

方式一：直接双击 `index.html`（推荐，已嵌入数据）

方式二：通过 HTTP 服务（需要 JSON 分离数据时）
```bash
cd E:/myPages
python -m http.server 8000
```

## 部署

可直接上传到 GitHub Pages、Netlify、Vercel 等静态托管服务。
