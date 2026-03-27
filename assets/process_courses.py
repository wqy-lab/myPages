# 课程数据处理脚本
# 过滤规则：去掉思政课、通识课、体育课、习题课/上机
# 分类：现在课程(25-26第2学期) vs 历史课程(25-26第1学期及更早)
# 分类：信科(计算机) vs 物院(物理)

import re

with open('E:/myPages/assets/course.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 排除关键词
exclude_keywords = [
    '思政', '通识', '体育', '篮球', '军训', '形势与政策',
    '思想道德与法治', '军事理论', '中国近现代史纲要',
    '智识与审美', '人类的性',
    '习题课', '上机', '实习', '普通物理实验',
    '高等数学', '线性代数'
]

def should_exclude(name):
    for kw in exclude_keywords:
        if kw in name:
            return True
    return False

# 信科课程关键词
cs_keywords = ['计算概论', '程序设计', '计算机']

# 物院课程关键词
phys_keywords = ['物理', '热学', '力学', '光学', '近代物理', '理论物理', '数学物理方法']

current_courses = []
history_courses = []

for line in lines:
    line = line.strip()
    if not line or line.startswith('#') or line.startswith('历史课程') or line.startswith('在以下'):
        continue

    # 解析课程名（提取冒号后面的部分）
    if ':' in line:
        parts = line.split(':', 1)
        code_part = parts[0]
        rest = parts[1].strip()

        # 提取课程名（去掉教师、学期等信息）
        # 格式: 课程名 (学期) 教师名  或  课程名 (学期)
        name_match = re.match(r'([^()]+)', rest)
        if name_match:
            name = name_match.group(1).strip()
        else:
            name = rest.split('(')[0].strip()
    else:
        # 没有代码的课程名（如 近代物理 高原宁）
        name = line.split()[0] if line.split() else line

    # 跳过空行和标题行
    if not name or name in ['历史课程', '在以下课程中，您是学生：']:
        continue

    # 排除
    if should_exclude(name):
        continue

    # 判断是现在课程还是历史课程
    if '25-26学年第2学期' in line:
        period = 'now'
    elif '25-26学年第1学期' in line or '近代物理' in name or '光学' in name:
        period = 'history'
    else:
        period = 'history'

    # 判断信科还是物院
    if any(kw in name for kw in cs_keywords):
        dept = 'cs'
    elif any(kw in name for kw in phys_keywords):
        dept = 'phys'
    else:
        # 其他默认为物院（高数、线代归属存疑，这里默认不算专业）
        continue  # 跳过无法分类的

    entry = {'name': name, 'dept': dept}

    if period == 'now':
        if entry not in current_courses:
            current_courses.append(entry)
    else:
        if entry not in history_courses:
            history_courses.append(entry)

print("=== 现在课程 ===")
print("信科:")
for c in current_courses:
    if c['dept'] == 'cs':
        print(f"  {c['name']}")
print("物院:")
for c in current_courses:
    if c['dept'] == 'phys':
        print(f"  {c['name']}")

print("\n=== 历史课程 ===")
print("信科:")
for c in history_courses:
    if c['dept'] == 'cs':
        print(f"  {c['name']}")
print("物院:")
for c in history_courses:
    if c['dept'] == 'phys':
        print(f"  {c['name']}")
