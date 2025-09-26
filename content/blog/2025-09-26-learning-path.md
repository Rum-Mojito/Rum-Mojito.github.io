---
title: "self learning plan"
date: "2025-09-26"
tags: ["AI", "LangChain"]
summary: "通过一个实际项目案例介绍了如何利用 Kafka + Flink 实现实时数据处理，并给出一些性能优化的经验。"
---

- 周 1　文本切片 + 向量基础  
  - Day1　入门：LangChain 官方 TextSplitter 文档 30 min  
  - Day1　动手：用 `RecursiveCharacterTextSplitter` 切 10 篇 PDF，调 chunk_size=512 / overlap=150（1 h）  
  - Day1　输出：Git 仓库初始化，push 代码 & 样例文件（30 min）  
  - Day2　理论：tiktoken 计算 token 数、中文标点陷阱 30 min  
  - Day2　脚本：统计“完整句子边界”比例，目标 ≥ 90 %（1 h）  
  - Day2　博客：记 1 篇《如何优雅地给大文档切片》（30 min）  
  - Day3　向量 101：Embedding、ANN、cosine vs dot-product 30 min  
  - Day3　实践：调用 `sentence-transformers/all-mpnet-base-v2` 生成 1 万向量，Faiss 建索引（1 h）  
  - Day3　复盘：把索引落盘，写入 `README.md`（30 min）  
  - Day4　周末项目：把 Day1-3 串成 Pipeline　PDF→切→向量→Faiss 检索，跑通 top-5 结果（2 h）  

- 周 2　混合检索 + 重排  
  - Day5　ES 速成：Docker 起 Elasticsearch 8，开 dense_vector + BM25 30 min  
  - Day5　灌数据：Day4 的 1 万向量写进 ES，mapping 指定 768 维（1 h）  
  - Day5　查询：分别跑向量 / BM25 / RRF 融合，记录 Recall@20（30 min）  
  - Day6　重排模型：装 `cohere` Python 包，申请免费 API key 30 min  
  - Day6　脚本：对 ES 召回 top-40 重排，输出 MRR@10 提升柱状图（1 h）  
  - Day6　博客：《向量+关键词混合检索实战》（30 min）  
  - Day7　周末项目：把混合检索封装成 `hybrid_search.py`，命令行一键测指标（2 h）  

- 周 3　增量索引 + 流式更新  
  - Day8　Milvus 入门：Docker-Compose 起 Milvus 2.3 + Attu 30 min  
  - Day8　建集合：分区表 `partition_by_date`，索引 IVF_FLAT, nlist=1024（1 h）  
  - Day8　写脚本：批量插入 1 万向量，磁盘 < 2 GB（30 min）  
  - Day9　Kafka 速通：Docker 起 Kafka, 创建 topic `text-chunks` 30 min  
  - Day9　生产者：把 Day4 切分结果写成 JSON，推送到 Kafka（1 h）  
  - Day9　消费者：Flink-CDC 或 `kafka-python` 读流，每 5000 条批量写 Milvus（30 min）  
  - Day10　周末项目：造 5k 假数据→Kafka→Milvus，查询延迟 < 80 ms（2 h）  

- 周 4　Agent 状态 + 安全沙箱  
  - Day11　理论：Agent 多轮决策、树形回溯、Redis Stream 30 min  
  - Day11　Redis：设计 key `session:{id}` + `graph:{id}`，存消息 & 分支指针（1 h）  
  - Day11　脚本：实现 `save_turn()` / `rollback(branch_id)`（30 min）  
  - Day12　Neo4j 入门：Docker 起库，节点=Turn，关系=CALL_TOOL 30 min  
  - Day12　写入：每轮工具调用生成子节点，可可视化（1 h）  
  - Day12　博客：《用图数据库存 Agent 轨迹》（30 min）  
  - Day13　安全沙箱：Docker-in-Docker 镜像 `python:3.11-slim` + `seccomp` 白名单，禁止 `rm` / `sudo`（2 h）  

- 周 5　流式返回 + 集成 Demo  
  - Day14　FastAPI：SSE 接口 `/chat`，首 token < 300 ms（30 min）  
  - Day14　前端：HTML + JS `EventSource` 实时渲染（1 h）  
  - Day14　压测：`locust -u 200 -r 10` 截图 TPS & 延迟（30 min）  
  - Day15　整合：把 Week1-4 全部链路串成 `main.py`：上传 PDF→切片→增量索引→混合检索→重排→Agent 工具→流式返回答案（2 h）  
  - Day16　README：写一键启动命令 + 架构图 + 性能指标（2 h）  

- 周 6　包装 + 面试冲刺  
  - Day17　录屏：3 min GIF 展示“上传→问答→工具调用”全过程（2 h）  
  - Day18　简历：添加项目“RAG-Agent 数据管线，命中率+12%，首 token<300 ms，GitHub 300★” （2 h）  
  - Day19　面试题：背熟表中 7 个高频考点，自问自答录音（2 h）  
  - Day20　博客：汇总 6 周笔记，发知乎/掘金，附仓库链接（2 h）