// ===== 数据文件 =====
// 直接在这里修改数据即可，修改后刷新页面
// 或者修改 data/ 文件夹下的 JSON 文件（需要通过 HTTP 服务访问）

const DATA = {
  profile: {
    name: "王千一",
    title: "物理学院 · 本科生",
    avatar: "",
    bio: "北京大学物理学院本科生，主要研究方向为量子计算与人工智能。热爱探索前沿技术，喜欢将算法应用于实际问题。",
    interests: ["人工智能", "Python", "开源贡献"],
    location: "北京"
  },

  blog: [
    {
      id: 1,
      title: "Vibe Coding实践",
      date: "2026-03-20",
      summary: "利用Vibe Coding平台进行代码编写和调试的实践经验。",
      content: "在这篇文章中，我分享了我在Vibe Coding平台上的实践经验。Claude Code是一个命令行AI工具，提供了丰富的功能和工具，帮助开发者更高效地进行编程。在使用过程中，我发现它的界面简洁易用，支持多种编程语言，并且具有强大的调试功能，可以快速定位和解决代码中的问题。通过这次实践，我不仅提升了自己的编程能力，还学会了如何更好地利用在线工具来提高工作效率。"
    }
  ],

  courses: {
    now: {
      cs: [],
      phys: ["实验物理中的统计方法", "数学物理方法（下）", "热学", "理论力学", "理论物理基础II"]
    },
    history: {
      cs: ["计算概论A"],
      phys: ["数学物理方法（上）", "理论物理基础I", "近代物理", "光学"]
    }
  },

  projects: [
    {
      id: 1,
      name: "基于 CLIP 的图像检索系统",
      role: "项目负责人",
      period: "2025.09 - 2025.12",
      description: "利用 CLIP 模型的图文对齐能力，实现了一个支持自然语言查询的商品图像检索系统。用户可以用文本描述来搜索相似商品图片。",
      tech: ["Python", "PyTorch", "CLIP", "FastAPI", "Redis"],
      link: "https://github.com/linqiming/image-search"
    },
    {
      id: 2,
      name: "中文情感分析模型",
      role: "核心开发",
      period: "2025.06 - 2025.08",
      description: "使用预训练中文 BERT 模型进行情感分析，针对评论数据进行微调，最终准确率达到 92%。部署为 RESTful API 服务。",
      tech: ["Python", "BERT", "PyTorch", "Flask", "Docker"],
      link: "https://github.com/linqiming/sentiment-analysis"
    },
    {
      id: 3,
      name: "个人博客系统",
      role: "独立开发",
      period: "2025.01 - 2025.03",
      description: "用 Next.js 和 Markdown 开发的个人博客，支持 Markdown 写作、标签分类、搜索功能。采用静态生成，访问速度快。",
      tech: ["Next.js", "TypeScript", "Markdown", "Vercel"],
      link: ""
    },
    {
      id: 4,
      name: "TCP/UDP 网络抓包工具",
      role: "项目负责人",
      period: "2024.06 - 2024.08",
      description: "计算机网络课程项目，使用原始套接字实现了一个简易的网络抓包工具，支持 TCP 和 UDP 协议的解析。",
      tech: ["C", "Socket", "WinPcap"],
      link: "https://github.com/linqeming/network-sniffer"
    }
  ],

  contact: {
    email: "wangqianyi@pku.edu.cn",
    github: "https://github.com/wqy-lab",
    linkedin: "",
    twitter: "",
    scholar: "",
    location: "北京大学物理学院",
    available: true
  }
};
