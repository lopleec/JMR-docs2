import React, { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { Link } from 'react-router-dom';

export function OpenCodeConfig() {
  const [apiKey, setApiKey] = useState('');
  const [modelId, setModelId] = useState('');
  const displayApiKey = apiKey || '⚠️此处填写您的API Key ⚠️';
  const displayModelId = modelId || '⚠️此处填写您的模型ID⚠️';

  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8 not-prose">
        <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">OpenCode 专区</span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
          OpenCode 配置文档
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          一个 API Key，直接生成可复制的完整配置文件。
        </p>
      </div>

      <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-500/10 px-4 py-3 rounded-r-lg mt-8 mb-8 not-prose">
        <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
          💡 温馨提示：
        </p>
        <p className="text-orange-800 dark:text-orange-200/80 text-sm">
          建议您使用 <Link to="/ccswitch/config" className="underline font-medium hover:text-orange-600 dark:hover:text-orange-400">CC Switch</Link> 进行配置，操作更简单快捷。
        </p>
      </blockquote>

      <h2 id="config-path" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">1. 配置文件路径</h2>
      <CodeBlock 
        language="bash"
        code={`~/.config/opencode/opencode.json
# 或
~/.config/opencode/opencode.jsonc

# 不存在需手动创建`} 
      />

      <h2 id="replace-method" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">2. 替换方式</h2>
      <p>
        全部替换原文件中的内容。
      </p>

      <h2 id="api-key" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">3. 填写信息并复制配置</h2>
      
      <div className="my-6 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl not-prose space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">API Key</label>
          <input type="text" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="输入你的 JMR API 密钥" className="w-full px-3 py-2 bg-white dark:bg-[#0d0d0d] border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">模型 ID</label>
          <input type="text" value={modelId} onChange={e => setModelId(e.target.value)} placeholder="输入你需要使用的模型 ID" className="w-full px-3 py-2 bg-white dark:bg-[#0d0d0d] border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 dark:text-zinc-100" />
        </div>
      </div>

      <h3 id="copy-config" className="scroll-mt-24">复制配置</h3>
      <CodeBlock 
        language="json"
        code={`{
  "provider": {
    "openai": {
      "options": {
        "baseURL": "https://jmrai.net/v1",
        "apiKey": "${displayApiKey}"
      },
      "models": {
        "${displayModelId}": {
          "name": "${displayModelId}",
          "limit": {
            "context": 400000,
            "output": 128000
          },
          "options": {
            "store": false
          },
          "variants": {
            "low": {},
            "medium": {},
            "high": {}
          }
        }
      }
    }
  },
  "agent": {
    "build": {
      "options": {
        "store": false
      }
    },
    "plan": {
      "options": {
        "store": false
      }
    }
  },
  "$schema": "https://opencode.ai/config.json"
}`} 
      />
    </div>
  );
}
