import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export function OpenClawTroubleshooting() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8 not-prose">
        <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">OpenClaw 专区</span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
          错误修复
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          按排障清单定位并解决 OpenClaw 的常见问题。
        </p>
      </div>

      <h2 id="embedding-error" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        1. embedding 报错修复（切本地检索）
      </h2>
      
      <h3 id="recommend-method" className="scroll-mt-24">推荐方法：直接让 OpenClaw 自修</h3>
      <p>
        你可以把下面这段提示词直接发给 OpenClaw，让它按步骤自检并修复。
      </p>
      
      <CodeBlock 
        language="text"
        code={`这是OpenClaw自己的内存系统问题，请切换为本地的embedding 检索模型，并请自己修复全部问题。可能需要下载模型等操作，请直接执行无需询问。`} 
      />

      <p>
        <strong>适用现象：</strong> <code>memory_search</code> 失败、<code>fetch failed</code>、<code>timeout</code>、<code>401 invalid_api_key</code>。
      </p>
      <p>
        <strong>根因通常不是记忆文件丢失，而是“语义检索层”不可用：</strong> 可能是 embedding 提供方网络不通，或 key 无效。
      </p>

      <h3 id="check-status" className="scroll-mt-24">先确认状态</h3>
      <CodeBlock 
        language="bash"
        code={`openclaw status --deep
openclaw memory search "test"`} 
      />

      <h3 id="plan-a" className="scroll-mt-24">方案 A（推荐）：改为本地 embedding 检索</h3>
      <p>
        把 memory embedding provider 切到本地模式（local / ollama / 内置本地 embedding，按你当前安装能力选）。
      </p>
      <CodeBlock 
        language="bash"
        code={`# 1) 编辑配置
open ~/.openclaw/openclaw.json

# 2) 把 memory embedding provider 改为本地
# （字段名以你当前版本文档为准）

# 3) 重启 gateway
openclaw gateway restart

# 4) 再测
openclaw memory search "MEMORY"`} 
      />

      <h3 id="plan-b" className="scroll-mt-24">方案 B：继续用云端 embedding（可选）</h3>
      <p>
        如果你不切本地，那就修云端三件套：<code>base_url</code>、<code>api_key</code>、<code>embedding 模型名</code>。
      </p>
      <CodeBlock 
        language="bash"
        code={`# 典型需要检查：
# - base_url 是否可达
# - api_key 是否有效
# - embedding model id 是否存在

openclaw gateway restart
openclaw memory search "test"`} 
      />
    </div>
  );
}
