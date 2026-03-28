// ===== 数据文件 =====
// 直接在这里修改数据即可，修改后刷新页面
// 或者修改 data/ 文件夹下的 JSON 文件（需要通过 HTTP 服务访问）

const DATA = {
  profile: {
    name: "王千一",
    title: "物理学院 · 本科生",
    avatar: "",
    bio: "北京大学物理学院本科生，主要研究方向为 “未定义”。热爱探索，但还没想好探索什么。",
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
          review: { grading: 4, content: 5, teaching: 5, homework: 3, exam: 4 }
        },
        {
          name: "数学物理方法（下）",
          instructor: "高春媛",
          grade: "",
          description: "",
          review: { grading: 5, content: 5, teaching: 5, homework: 4, exam: 4 }
        },
        {
          name: "热学",
          instructor: "刘玉鑫",
          grade: "",
          description: "",
          review: { grading: 4, content: 4, teaching: 4, homework: 3, exam: 3 }
        },
        {
          name: "理论力学",
          instructor: "邵立晶",
          grade: "",
          description: "",
          review: { grading: 4, content: 4, teaching: 5, homework: 3, exam: 4 }
        },
        {
          name: "理论物理基础II",
          instructor: "王垡",
          grade: "",
          description: "",
          review: { grading: 4, content: 4, teaching: 4, homework: 3, exam: 4 }
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
          review: { grading: 4, content: 3, teaching: 3, homework: 4, exam: 4 }
        }
      ],
      phys: [
        {
          name: "数学物理方法（上）",
          instructor: "高春媛",
          grade: "A+",
          description: "媛神！",
          review: { grading: 5, content: 5, teaching: 5, homework: 4, exam: 4 }
        },
        {
          name: "理论物理基础I",
          instructor: "孟策",
          grade: "A+",
          description: "孟到哪里策哪里",
          review: { grading: 5, content: 5, teaching: 5, homework: 3, exam: 4 }
        },
        {
          name: "普通物理实验（1）",
          instructor: "普通物理实验教学组",
          grade: "A+",
          description: "好实验课",
          review: { grading: 5, content: 4, teaching: 3, homework: 3, exam: 2 }
        },
        {
          name: "普通物理实验（2）",
          instructor: "普通物理实验教学组",
          grade: "A",
          description: "实验报告难写",
          review: { grading: 4, content: 4, teaching: 3, homework: 4, exam: 2 }
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
          review: { grading: 4, content: 5, teaching: 5, homework: 2, exam: 3 }
        },
        {
          name: "光学",
          instructor: "李焱",
          grade: "A+",
          description: "今晚没有习题课！",
          review: { grading: 5, content: 5, teaching: 5, homework: 2, exam: 4 }
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
    },
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
