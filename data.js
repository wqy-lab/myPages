// ===== 数据文件 =====
// 直接在这里修改数据即可，修改后刷新页面
// 或者修改 data/ 文件夹下的 JSON 文件（需要通过 HTTP 服务访问）

const DATA = {
  profile: {
    name: "王千一",
    title: "物理学院 · 本科生",
    avatar: "",
    bio: "北京大学物理学院本科生，主要研究方向为 "未定义"。热爱探索，但还没想好探索什么。",
    interests: ["人工智能", "理论物理", "代数"],
    location: "北京"
  },

  blog: [
    {
      id: 1,
      title: "Vibe Coding实践",
      date: "2026-03-28",
      summary: "利用Vibe Coding平台进行代码编写和调试的实践经验。",
      content: "Claude Code是一个命令行AI工具，提供了丰富的功能和工具，帮助开发者更高效地进行编程。在使用过程中，我发现它的界面简洁易用，支持多种编程语言，并且具有强大的调试功能，可以快速定位和解决代码中的问题。通过这次实践，我不仅提升了自己的编程能力，还学会了如何更好地利用在线工具来提高工作效率。"
    }
  ],

  courses: [
    {
      semester: "25-26 第2学期",
      cs: [
        {
          name: "程序设计实习",
          instructor: "杨帅",
          grade: "",
          description: "",
          review: null
        }
      ],
      phys: [
        {
          name: "实验物理中的统计方法",
          instructor: "杨振伟",
          grade: "",
          description: "",
          review: { grading: {score: 4, comment: ""}, content: {score: 5, comment: ""}, teaching: {score: 5, comment: ""}, homework: {score: 3, comment: ""}, exam: {score: 4, comment: ""} }
        },
        {
          name: "数学物理方法（下）",
          instructor: "高春媛",
          grade: "",
          description: "",
          review: { grading: {score: 5, comment: ""}, content: {score: 5, comment: ""}, teaching: {score: 5, comment: ""}, homework: {score: 4, comment: ""}, exam: {score: 4, comment: ""} }
        },
        {
          name: "热学",
          instructor: "刘玉鑫",
          grade: "",
          description: "",
          review: { grading: {score: 4, comment: ""}, content: {score: 4, comment: ""}, teaching: {score: 4, comment: ""}, homework: {score: 3, comment: ""}, exam: {score: 3, comment: ""} }
        },
        {
          name: "理论力学",
          instructor: "邵立晶",
          grade: "",
          description: "",
          review: { grading: {score: 4, comment: ""}, content: {score: 4, comment: ""}, teaching: {score: 5, comment: ""}, homework: {score: 3, comment: ""}, exam: {score: 4, comment: ""} }
        },
        {
          name: "理论物理基础II",
          instructor: "王垡",
          grade: "",
          description: "",
          review: { grading: {score: 4, comment: ""}, content: {score: 4, comment: ""}, teaching: {score: 4, comment: ""}, homework: {score: 3, comment: ""}, exam: {score: 4, comment: ""} }
        }
      ]
    },
    {
      semester: "25-26 第1学期",
      cs: [
        {
          name: "计算概论A",
          instructor: "王厚峰",
          grade: "A",
          description: "大作业难写qwq",
          review: {
            grading: { score: 4, comment: "" },
            content: { score: 3, comment: "内容与作业考试基本脱钩，需要自学" },
            teaching: { score: 5, comment: "讲得很好，每个知识点都有大量例子" },
            homework: { score: 4, comment: "课后题有蓝题紫题，很吃OI基础" },
            exam: { score: 3, comment: "期末较难，期中简单" }
          }
        }
      ],
      phys: [
        {
          name: "数学物理方法（上）",
          instructor: "高春媛",
          grade: "A+",
          description: "媛神！",
          review: {
            grading: { score: 5, comment: "媛神大捞特捞，期末很难也捞上90" },
            content: { score: 5, comment: "复分析与常微分方程，教材很好（吴崇试）" },
            teaching: { score: 5, comment: "细致证明每个重要结论，会补充Ahlfors内容" },
            homework: { score: 3, comment: "留数定理部分很难，作业量不大" },
            exam: { score: 4, comment: "期中简单，期末困难" }
          }
        },
        {
          name: "理论物理基础I",
          instructor: "孟策",
          grade: "A+",
          description: "孟到哪里策哪里",
          review: {
            grading: { score: 5, comment: "给分好" },
            content: { score: 5, comment: "理论力学+电动力学基础，节奏快笔记多" },
            teaching: { score: 5, comment: "讲得清晰，指标计算和球谐函数部分讲得很好" },
            homework: { score: 3, comment: "节奏快，作业量适中" },
            exam: { score: 4, comment: "偏向计算，不需要很大思考量" }
          }
        },
        {
          name: "普通物理实验（1）",
          instructor: "普通物理实验教学组",
          grade: "A+",
          description: "好实验课",
          review: {
            grading: { score: 5, comment: "给分好" },
            content: { score: 4, comment: "自主实验+课堂实验，提高处理数据能力" },
            teaching: { score: 3, comment: "有好助教" },
            homework: { score: 3, comment: "有预习报告" },
            exam: { score: 2, comment: "" }
          }
        },
        {
          name: "普通物理实验（2）",
          instructor: "普通物理实验教学组",
          grade: "A",
          description: "实验报告难写",
          review: {
            grading: { score: 4, comment: "努力与回报正相关" },
            content: { score: 4, comment: "时间紧张，Cupt部分力不从心" },
            teaching: { score: 3, comment: "有好助教" },
            homework: { score: 4, comment: "课堂实验要交实验报告" },
            exam: { score: 2, comment: "" }
          }
        }
      ]
    },
    {
      semester: "24-25 第2学期",
      cs: [],
      phys: [
        {
          name: "近代物理",
          instructor: "高原宁",
          grade: "A-",
          description: "高院😭",
          review: {
            grading: { score: 4, comment: "给分不错" },
            content: { score: 5, comment: "高院讲得很好" },
            teaching: { score: 5, comment: "讲得很好" },
            homework: { score: 2, comment: "作业量很少" },
            exam: { score: 3, comment: "" }
          }
        },
        {
          name: "光学",
          instructor: "李焱",
          grade: "A+",
          description: "今晚没有习题课！",
          review: {
            grading: { score: 5, comment: "给分好" },
            content: { score: 5, comment: "光学内容" },
            teaching: { score: 5, comment: "讲得很好，今晚没有习题课！" },
            homework: { score: 2, comment: "作业量很少" },
            exam: { score: 4, comment: "" }
          }
        }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: "基于 MCTS 的Amazons棋程序",
      role: "独立开发",
      period: "2025.09 - 2026.01",
      description: "实现了简单的蒙特卡洛模拟，使用了基本的启发式评估函数和剪枝策略，最终在Amazons棋平台上达到了中等水平。",
      tech: ["C++", "MCTS", "Queen-King Move", "Searching"],
      link: "https://github.com/wqy-lab/Amazons"
    },
    {
      id: 2,
      name: "魔兽世界大作业",
      role: "独立开发",
      period: "2026.03 - 2026.04",
      description: "使用C++实现了基于面向对象程序设计的魔兽世界大作业，包含武士类、装备类、城市类、模拟类等，支持基本的战斗模拟和属性计算。",
      tech: ["C++", "OOP"],
      link: "https://github.com/wqy-lab/WarCraft"
    },
    {
      id: 3,
      name: "个人教学网系统",
      role: "独立开发(vibe coding)",
      period: "2026.03 - 2026.03",
      description: "利用Claude Code完成了简单的课程管理、作业提交和日程管理。",
      tech: ["HTML5", "CSS", "JavaScript"],
      link: "https://github.com/wqy-lab/myWeb"
    }
  ],

  contact: {
    email: "qianyiwang25@stu.pku.edu.cn",
    github: "https://github.com/wqy-lab",
    linkedin: "",
    twitter: "",
    scholar: "",
    location: "北京大学物理学院",
    available: true
  }
};
