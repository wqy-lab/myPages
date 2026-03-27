// ===== 数据文件 =====
// 直接在这里修改数据即可，修改后刷新页面
// 或者修改 data/ 文件夹下的 JSON 文件（需要通过 HTTP 服务访问）

const DATA = {
  profile: {
    name: "林启明",
    title: "计算机科学 · 研究生",
    avatar: "",
    bio: "北京邮电大学计算机科学与技术专业研究生，主要研究方向为机器学习与计算机视觉。热爱探索前沿技术，喜欢将算法应用于实际问题。目前正在研究基于深度学习的图像生成模型。",
    interests: ["深度学习", "计算机视觉", "图像生成", "Python", "开源贡献"],
    location: "北京"
  },

  blog: [
    {
      id: 1,
      title: "从零理解 Transformer 架构",
      date: "2026-03-20",
      summary: "最近重新系统地学习了 Transformer 的原论文，有些之前忽略的细节这次有了更深的理解。",
      content: "Self-Attention 机制的核心是计算序列中每个位置与其他位置的关联程度。\n\n通过 Q、K、V 三个矩阵的线性变换，我们可以学习到不同位置之间的依赖关系。\n\n多头注意力机制允许模型在不同的子空间学习关注不同的信息，这对于捕捉多样化的模式非常重要。\n\n残差连接和 Layer Normalization 使得深层网络的训练更加稳定。"
    },
    {
      id: 2,
      title: "我的第一个 Kaggle 比赛总结",
      date: "2026-03-15",
      summary: "参加了一次图像分类比赛，最终排名在前 10%，记录一下比赛中的经验教训。",
      content: "这次比赛我尝试了多种数据增强方法，包括随机裁剪、翻转、色彩抖动等。\n\n模型方面使用了预训练的 ResNet50 作为 backbone，配合轻微的微调取得了不错的效果。\n\n最大的收获是要多看别人的方案，有时候灵感和思路就在一瞬间。"
    },
    {
      id: 3,
      title: "为什么我喜欢用 Linux 桌面",
      date: "2026-02-28",
      summary: "从 Windows 切换到 Linux 已经两年了，聊聊我的使用体验和感受。",
      content: "最开始是因为需要用深度学习，Linux 对 GPU 的支持更好。后来发现命令行 + 脚本的组合让很多重复工作变得简单。\n\n最吸引我的是高度可定制性，从窗口管理器到状态栏，都可以按照自己的喜好来配置。\n\n当然，游戏体验确实不如 Windows，这是实话。"
    }
  ],

  courses: [
    {
      id: 1,
      name: "机器学习",
      instructor: "李明华 教授",
      semester: "2024 秋季",
      grade: "A",
      description: "系统学习了主流的机器学习算法，包括 SVM、决策树、随机森林、神经网络等。期末项目实现了手写数字识别系统。"
    },
    {
      id: 2,
      name: "深度学习",
      instructor: "王芳 教授",
      semester: "2025 春季",
      grade: "A",
      description: "深入学习了 CNN、RNN、LSTM、Transformer 等深度学习模型。课程项目是用 PyTorch 实现了一个文本生成模型。"
    },
    {
      id: 3,
      name: "计算机视觉",
      instructor: "张伟 副教授",
      semester: "2025 秋季",
      grade: "A-",
      description: "学习了图像处理的基础知识和经典算法，以及目标检测、语义分割等视觉任务的前沿方法。"
    },
    {
      id: 4,
      name: "数据结构与算法",
      instructor: "刘强 教授",
      semester: "2023 秋季",
      grade: "A",
      description: "掌握了常用数据结构和算法的设计思想，包括链表、树、图、以及各种排序和搜索算法。"
    }
  ],

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
    email: "linqiming@bupt.edu.cn",
    github: "https://github.com/linqiming",
    linkedin: "https://linkedin.com/in/linqiming",
    twitter: "",
    scholar: "",
    location: "北京邮电大学",
    available: true
  }
};
