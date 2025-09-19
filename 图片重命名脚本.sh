#!/bin/bash

# 设置源目录和目标目录
SOURCE_DIR="/root/dataarctech-website/pptx_extracted/ppt/media"
TARGET_DIR="/root/dataarctech-website/图片资源"

# 第1页 - 品牌标识
cp "$SOURCE_DIR/image1.png" "$TARGET_DIR/品牌标识/数创弧光-公司封面logo.png" 2>/dev/null

# 第2页 - 品牌标识  
cp "$SOURCE_DIR/image2.png" "$TARGET_DIR/品牌标识/公司简介页面设计.png" 2>/dev/null

# 第3页 - 概念图解 (11张图片)
cp "$SOURCE_DIR/image3.png" "$TARGET_DIR/概念图解/人工智能三要素示意图.png" 2>/dev/null
cp "$SOURCE_DIR/image4.png" "$TARGET_DIR/概念图解/算力数据算法关系图.png" 2>/dev/null
cp "$SOURCE_DIR/image5.png" "$TARGET_DIR/概念图解/ScaleAI对标图表.png" 2>/dev/null
cp "$SOURCE_DIR/image6.png" "$TARGET_DIR/概念图解/中国下一代ScaleAI定位.png" 2>/dev/null
cp "$SOURCE_DIR/image7.png" "$TARGET_DIR/概念图解/300亿美元估值展示.png" 2>/dev/null
cp "$SOURCE_DIR/image8.png" "$TARGET_DIR/概念图解/数创弧光定位示意图.png" 2>/dev/null
cp "$SOURCE_DIR/image9.png" "$TARGET_DIR/概念图解/装饰图标1.png" 2>/dev/null
cp "$SOURCE_DIR/image10.png" "$TARGET_DIR/概念图解/装饰图标2.png" 2>/dev/null
cp "$SOURCE_DIR/image11.png" "$TARGET_DIR/概念图解/装饰图标3.png" 2>/dev/null
cp "$SOURCE_DIR/image12.png" "$TARGET_DIR/概念图解/装饰图标4.png" 2>/dev/null
cp "$SOURCE_DIR/image13.png" "$TARGET_DIR/概念图解/装饰图标5.png" 2>/dev/null

# 第4页 - 品牌标识
cp "$SOURCE_DIR/image14.png" "$TARGET_DIR/品牌标识/公司介绍配图.png" 2>/dev/null

# 第5页 - 品牌标识
cp "$SOURCE_DIR/image15.png" "$TARGET_DIR/品牌标识/团队介绍页面设计.png" 2>/dev/null

# 第6页 - 业务进展
cp "$SOURCE_DIR/image16.png" "$TARGET_DIR/业务进展/团队规模介绍图1.png" 2>/dev/null
cp "$SOURCE_DIR/image17.png" "$TARGET_DIR/业务进展/团队规模介绍图2.png" 2>/dev/null

# 第7页 - 业务进展  
cp "$SOURCE_DIR/image18.png" "$TARGET_DIR/业务进展/团队特点展示图1.png" 2>/dev/null
cp "$SOURCE_DIR/image19.png" "$TARGET_DIR/业务进展/团队特点展示图2.png" 2>/dev/null
cp "$SOURCE_DIR/image20.png" "$TARGET_DIR/业务进展/项目顾问委员会.png" 2>/dev/null

# 第8页 - 品牌标识
cp "$SOURCE_DIR/image21.png" "$TARGET_DIR/品牌标识/项目背景页面设计.png" 2>/dev/null

# 第9页 - 概念图解
cp "$SOURCE_DIR/image22.png" "$TARGET_DIR/概念图解/数据是AI时代石油概念图.png" 2>/dev/null

# 第10页 - 市场分析 (2张图片)
cp "$SOURCE_DIR/image23.png" "$TARGET_DIR/市场分析/数据稀缺性趋势图.png" 2>/dev/null
cp "$SOURCE_DIR/image24.png" "$TARGET_DIR/市场分析/2028年数据耗尽预测图.png" 2>/dev/null

# 第11页 - 市场分析
cp "$SOURCE_DIR/image25.png" "$TARGET_DIR/市场分析/企业数据Agent落地关键图.png" 2>/dev/null

# 第12页 - 市场分析 (3张图片)
cp "$SOURCE_DIR/image26.png" "$TARGET_DIR/市场分析/供需双驱动市场分析图.png" 2>/dev/null
cp "$SOURCE_DIR/image27.png" "$TARGET_DIR/市场分析/合成数据破局点分析.png" 2>/dev/null
cp "$SOURCE_DIR/image28.png" "$TARGET_DIR/市场分析/行业领袖观点集合图.png" 2>/dev/null

# 第13页 - 市场分析 (3张图片)  
cp "$SOURCE_DIR/image29.png" "$TARGET_DIR/市场分析/45点7百分比市场增长率图.png" 2>/dev/null
cp "$SOURCE_DIR/image30.png" "$TARGET_DIR/市场分析/2000亿市场规模预测图.png" 2>/dev/null
cp "$SOURCE_DIR/image31.png" "$TARGET_DIR/市场分析/60百分比合成数据占比图.png" 2>/dev/null

echo "正在处理第14-35页的图片..."

# 第14页 - 品牌标识
cp "$SOURCE_DIR/image32.png" "$TARGET_DIR/品牌标识/技术介绍页面设计.png" 2>/dev/null

# 第15页 - 产品功能 (4张图片)
cp "$SOURCE_DIR/image33.png" "$TARGET_DIR/产品功能/产品矩阵概览图.png" 2>/dev/null
cp "$SOURCE_DIR/image34.png" "$TARGET_DIR/产品功能/动态知识库架构图.png" 2>/dev/null
cp "$SOURCE_DIR/image35.png" "$TARGET_DIR/产品功能/合成数据平台流程图.png" 2>/dev/null
cp "$SOURCE_DIR/image36.png" "$TARGET_DIR/产品功能/产品集成关系图.png" 2>/dev/null

echo "已完成前36张图片的分类..."

# 第16页 - 技术架构 (13张图片，image37-49)
for i in {37..49}; do
    case $i in
        37) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/语境图谱详细架构图.png" 2>/dev/null;;
        38) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/知识挖掘流程图.png" 2>/dev/null;;
        39) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/四步闭环示意图.png" 2>/dev/null;;
        40) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/原始数据处理模块.png" 2>/dev/null;;
        41) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/知识脉络挖掘模块.png" 2>/dev/null;;
        42) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/智能检索模块.png" 2>/dev/null;;
        43) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/合成生成模块.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/技术组件图$((i-36)).png" 2>/dev/null;;
    esac
done

# 第17页 - 性能对比 (25张图片，image50-74)
for i in {50..74}; do
    case $i in
        50) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/建图效率218倍提升对比图.png" 2>/dev/null;;
        51) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/资源消耗0点5百分比对比图.png" 2>/dev/null;;
        52) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/准确率15百分点提升图.png" 2>/dev/null;;
        53) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/通用图谱推理对比图.png" 2>/dev/null;;
        54) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/实战良品率对比图.png" 2>/dev/null;;
        55) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/GraphRAG vs DataArc性能表.png" 2>/dev/null;;
        56) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/72小时vs20分钟效率图.png" 2>/dev/null;;
        57) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/20000vs100Tokens消耗图.png" 2>/dev/null;;
        58) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/85vs90点2百分比准确率图.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/性能指标图$((i-49)).png" 2>/dev/null;;
    esac
done

# 第18页 - 产品功能 (12张图片，image75-86)
for i in {75..86}; do
    case $i in
        75) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/合成数据平台工作流程图.png" 2>/dev/null;;
        76) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/知识库驱动检索引擎.png" 2>/dev/null;;
        77) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/SoG基于图谱合成流程.png" 2>/dev/null;;
        78) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/SoE加密训练模块.png" 2>/dev/null;;
        79) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/Judge Agent自动标注.png" 2>/dev/null;;
        80) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/自然语言驱动检索.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/平台功能模块$((i-74)).png" 2>/dev/null;;
    esac
done

echo "已完成技术架构、性能对比、产品功能模块..."

# 第19页 - 性能对比 (39张图片，image87-125，这页图最多)
for i in {87..125}; do
    case $i in
        87) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/DataArc SoG vs EntiGraph总览.png" 2>/dev/null;;
        88) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/25点4百分比效果提升图.png" 2>/dev/null;;
        89) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/85点7百分比成本降低图.png" 2>/dev/null;;
        90) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/小数据场景对比图.png" 2>/dev/null;;
        91) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/大数据场景对比图.png" 2>/dev/null;;
        92) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/3跳复杂推理链示意图.png" 2>/dev/null;;
        93) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/RAG架构对比图.png" 2>/dev/null;;
        94) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/逻辑断层难题解决图.png" 2>/dev/null;;
        95) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/数据生成成本对比表.png" 2>/dev/null;;
        96) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/性价比碾压传统方案图.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/性能对比/详细对比数据$((i-86)).png" 2>/dev/null;;
    esac
done

# 第20页 - 产品功能 (9张图片，image126-134)
for i in {126..134}; do
    case $i in
        126) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/数据合成三步走流程图.png" 2>/dev/null;;
        127) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/步骤1选择模版调整参数.png" 2>/dev/null;;
        128) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/步骤2数据合成结果预览.png" 2>/dev/null;;
        129) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/步骤3完成训练界面.png" 2>/dev/null;;
        130) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/文档生成功能演示.png" 2>/dev/null;;
        131) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/表格生成功能演示.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/操作界面截图$((i-125)).png" 2>/dev/null;;
    esac
done

# 第21页 - 技术架构 (11张图片，image135-145)  
for i in {135..145}; do
    case $i in
        135) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/传统合成数据vs SoG对比.png" 2>/dev/null;;
        136) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/数据来源多样性对比.png" 2>/dev/null;;
        137) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/逻辑深度对比图.png" 2>/dev/null;;
        138) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/领域扩展性对比图.png" 2>/dev/null;;
        139) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/跨领域关联生成示意.png" 2>/dev/null;;
        140) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/92百分比高变异度图.png" 2>/dev/null;;
        141) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/全链路思维连展示图.png" 2>/dev/null;;
        142) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/法律加金融跨域示例.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/SoG核心优势$((i-134)).png" 2>/dev/null;;
    esac
done

echo "已完成第19-21页图片分类..."

# 第22页 - 技术架构 (14张图片，image146-159，SoE加密技术)
for i in {146..159}; do
    case $i in
        146) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/SoE加密技术暗语翻译官.png" 2>/dev/null;;
        147) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/私域数据安全利用流程.png" 2>/dev/null;;
        148) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/加密合成双平衡图.png" 2>/dev/null;;
        149) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/基础模型加密训练.png" 2>/dev/null;;
        150) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/合成数据加密处理.png" 2>/dev/null;;
        151) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/真实法律业务数据测评.png" 2>/dev/null;;
        152) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/F1值提升2百分比图.png" 2>/dev/null;;
        153) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/泄露风险0百分比保障.png" 2>/dev/null;;
        154) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/江旭晖博士介绍加密示例.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/技术架构/加密技术详情$((i-145)).png" 2>/dev/null;;
    esac
done

# 第23页 - 产品功能 (3张图片，image160-162)
for i in {160..162}; do
    cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品功能/Synthesis-on-Graph操作$((i-159)).png" 2>/dev/null
done

# 第24页 - 品牌标识 (2张图片，image163-164)
cp "$SOURCE_DIR/image163.png" "$TARGET_DIR/品牌标识/业务进展页面设计1.png" 2>/dev/null
cp "$SOURCE_DIR/image164.png" "$TARGET_DIR/品牌标识/业务进展页面设计2.png" 2>/dev/null

# 第25页 - 业务进展 (14张图片，image165-178)
for i in {165..178}; do
    case $i in
        165) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/业务进展/业务情况概览总图.png" 2>/dev/null;;
        166) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/业务进展/1项业务交付状态.png" 2>/dev/null;;
        167) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/业务进展/5项POC验证通过.png" 2>/dev/null;;
        168) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/业务进展/4项POC进行中.png" 2>/dev/null;;
        169) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/业务进展/布局出海业务对接.png" 2>/dev/null;;
        170) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/业务进展/PMF阶段标识.png" 2>/dev/null;;
        171) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/业务进展/三月开展业务时间线.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/业务进展/业务发展图表$((i-164)).png" 2>/dev/null;;
    esac
done

# 第26页 - 市场分析 (4张图片，image179-182，端云协同)
for i in {179..182}; do
    case $i in
        179) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/市场分析/端云协同AI赋能硬件.png" 2>/dev/null;;
        180) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/市场分析/GTM让端云企业变现.png" 2>/dev/null;;
        181) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/市场分析/2项标品2个方案矩阵.png" 2>/dev/null;;
        182) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/市场分析/3个头部硬件标杆机会.png" 2>/dev/null;;
    esac
done

echo "已完成第22-26页图片分类..."

# 第27页 - 客户案例 (18张图片，image183-200)
for i in {183..200}; do
    case $i in
        183) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/保险行业智能客服案例总览.png" 2>/dev/null;;
        184) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/保险良品率提升15点5百分比.png" 2>/dev/null;;
        185) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/罕见问题长尾知识处理.png" 2>/dev/null;;
        186) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/人工转接率显著降低.png" 2>/dev/null;;
        187) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/金融IDEA FinAI经济超脑.png" 2>/dev/null;;
        188) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/研报20点3倍数据增量.png" 2>/dev/null;;
        189) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/推理准确率提升21点2百分比.png" 2>/dev/null;;
        190) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/跨文档复杂推理能力.png" 2>/dev/null;;
        191) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/上海高金金融知识大模型.png" 2>/dev/null;;
        192) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/CPA教培优于GPT-4.png" 2>/dev/null;;
        193) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/Writer模型70万美元成本.png" 2>/dev/null;;
        194) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/工具调用准确率提升19点3百分比.png" 2>/dev/null;;
        195) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/Gretel数据合规风险规避.png" 2>/dev/null;;
        196) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/GDPR数据保护法规.png" 2>/dev/null;;
        197) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/1480万美元数据违规成本.png" 2>/dev/null;;
        198) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/392万美元数据泄露成本.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/客户案例/行业应用案例$((i-182)).png" 2>/dev/null;;
    esac
done

# 第28页 - 产业生态 (88张图片，image201-288，这是内容最丰富的一页)
for i in {201..288}; do
    case $((i-200)) in
        1) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/产业链技术链分析总图.png" 2>/dev/null;;
        2) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/上游数据供应商.png" 2>/dev/null;;
        3) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/数据标注早期阶段.png" 2>/dev/null;;
        4) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/云服务硬件算力.png" 2>/dev/null;;
        5) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/海外ScaleAI领衔.png" 2>/dev/null;;
        6) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/国内聚焦自动驾驶机器人.png" 2>/dev/null;;
        7) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/下游AI大模型应用.png" 2>/dev/null;;
        8) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/科研机构独立开发者.png" 2>/dev/null;;
        9) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/受监管行业政府部门.png" 2>/dev/null;;
        10) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/大模型技术链全流程图.png" 2>/dev/null;;
        [1-9][0-9]) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/技术流程模块$((i-200)).png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产业生态/生态系统组件$((i-200)).png" 2>/dev/null;;
    esac
done

echo "已完成客户案例和产业生态分类，这是最复杂的部分..."

# 第29页 - 品牌标识 (1张图片，image289)
cp "$SOURCE_DIR/image289.png" "$TARGET_DIR/品牌标识/融资情况介绍页面设计.png" 2>/dev/null

# 第30页 - 市场分析 (3张图片，image290-292)
cp "$SOURCE_DIR/image290.png" "$TARGET_DIR/市场分析/2025年上半年中国明星初创.png" 2>/dev/null
cp "$SOURCE_DIR/image291.png" "$TARGET_DIR/市场分析/Why Now时机分析1.png" 2>/dev/null
cp "$SOURCE_DIR/image292.png" "$TARGET_DIR/市场分析/Why Now时机分析2.png" 2>/dev/null

# 第31页 - 融资展示 (11张图片，image293-303，注意这里可能超过301)
for i in {293..301}; do
    case $((i-292)) in
        1) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/融资情况概览总图.png" 2>/dev/null;;
        2) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/种子轮8000万估值.png" 2>/dev/null;;
        3) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/种子加轮1点5亿估值.png" 2>/dev/null;;
        4) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/加加轮2点5亿估值.png" 2>/dev/null;;
        5) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/拟天使轮5亿估值.png" 2>/dev/null;;
        6) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/融资时间线图表.png" 2>/dev/null;;
        7) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/头部投资机构展示.png" 2>/dev/null;;
        8) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/产业集团投资方.png" 2>/dev/null;;
        9) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/三轮融资节奏图.png" 2>/dev/null;;
        *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/融资详情$((i-292)).png" 2>/dev/null;;
    esac
done

# 处理剩余的图片（如果有超过301的）
for i in {302..350}; do
    if [ -f "$SOURCE_DIR/image$i.png" ]; then
        case $i in
            [30-32][0-9]) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/融资展示/Why Now投资亮点$((i-301)).png" 2>/dev/null;;
            [33][0-5]) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品演示/总结页面图$((i-330)).png" 2>/dev/null;;
            *) cp "$SOURCE_DIR/image$i.png" "$TARGET_DIR/产品演示/产品演示截图$((i-335)).png" 2>/dev/null;;
        esac
    fi
done

# 处理JPEG格式的图片
for img in $(ls "$SOURCE_DIR"/image*.jpeg 2>/dev/null); do
    filename=$(basename "$img")
    number=$(echo "$filename" | sed 's/image\([0-9]*\)\.jpeg/\1/')
    case $number in
        39|52|77|88|134|144|289) cp "$img" "$TARGET_DIR/概念图解/特殊格式图片$number.jpeg" 2>/dev/null;;
        *) cp "$img" "$TARGET_DIR/产品演示/JPEG格式图片$number.jpeg" 2>/dev/null;;
    esac
done

# 处理视频文件
mkdir -p "$TARGET_DIR/产品演示/视频文件"
cp "$SOURCE_DIR/media1.mp4" "$TARGET_DIR/产品演示/视频文件/DataArc Living KB产品演示.mp4" 2>/dev/null
cp "$SOURCE_DIR/media2.mp4" "$TARGET_DIR/产品演示/视频文件/DataArc SynData Platform操作演示.mp4" 2>/dev/null

echo "===================="
echo "图片重命名和分类完成！"
echo "===================="
echo "总计处理："
echo "- PNG图片: $(find "$TARGET_DIR" -name "*.png" | wc -l) 张"
echo "- JPEG图片: $(find "$TARGET_DIR" -name "*.jpeg" | wc -l) 张" 
echo "- 视频文件: $(find "$TARGET_DIR" -name "*.mp4" | wc -l) 个"
echo "===================="
echo "分类统计："
for dir in "$TARGET_DIR"/*; do
    if [ -d "$dir" ]; then
        count=$(find "$dir" -name "*.png" -o -name "*.jpeg" -o -name "*.mp4" | wc -l)
        echo "- $(basename "$dir"): $count 个文件"
    fi
done
echo "===================="
