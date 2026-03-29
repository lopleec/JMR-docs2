import React, { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';

export function OpenClawQuickStart() {
  const [apiKey, setApiKey] = useState('');
  const [modelId, setModelId] = useState('');
  const [workspacePath, setWorkspacePath] = useState('');

  const displayApiKey = apiKey || '⚠️此处填您的API密钥⚠️';
  const displayModelId = modelId || '⚠️此处填您的模型ID⚠️';
  const displayWorkspace = workspacePath || '⚠️此处填您的OpenClaw工作目录，可在原配置文件中查看⚠️';

  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8 not-prose">
        <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">OpenClaw 专区</span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
          快速开始
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          跟随以下步骤，快速安装并配置 OpenClaw 以使用 JMR API。
        </p>
      </div>

      <h2 id="install" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">1. 安装 OpenClaw</h2>
      <CodeBlock 
        language="bash"
        code={`# 方式一：一键脚本（推荐）
curl -fsSL https://openclaw.ai/install.sh | bash

# 方式二：npm 全局安装
# 安装 brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node@24

# 安装 OpenClaw
npm install -g openclaw@latest`} 
      />

      <h2 id="onboard" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">2. 运行配置向导</h2>
      <CodeBlock language="bash" code="openclaw onboard" />

      <h2 id="edit-config" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">3. 编辑配置文件</h2>
      <p>路径：</p>
      <CodeBlock language="text" code="~/.openclaw/openclaw.json" />
      
      <p id="api-key" className="scroll-mt-24">填下面 3 项后，会自动生成可复制配置：</p>
      
      <div className="flex flex-col gap-4 my-6 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl not-prose">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">API 密钥</label>
          <input type="text" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="输入你的 JMR API 密钥" className="w-full px-3 py-2 bg-white dark:bg-[#0d0d0d] border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">模型 ID</label>
          <input type="text" value={modelId} onChange={e => setModelId(e.target.value)} placeholder="例如 gpt-5.3-codex" className="w-full px-3 py-2 bg-white dark:bg-[#0d0d0d] border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">WORKSPACE_PATH</label>
          <input type="text" value={workspacePath} onChange={e => setWorkspacePath(e.target.value)} placeholder="例如 /Users/xxx/.openclaw/workspace" className="w-full px-3 py-2 bg-white dark:bg-[#0d0d0d] border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 dark:text-zinc-100" />
        </div>
      </div>

      <h3 id="copy-config" className="scroll-mt-24">复制配置</h3>
      <CodeBlock 
        language="json"
        code={`{
  "models": {
    "mode": "merge",
    "providers": {
      "jmr": {
        "baseUrl": "https://jmrai.net/",
        "apiKey": "${displayApiKey}",
        "api": "openai-completions",
        "models": [
          {
            "id": "${displayModelId}",
            "name": "${displayModelId}",
            "reasoning": true,
            "contextWindow": 200000,
            "maxTokens": 32000
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "jmr/${displayModelId}"
      },
      "workspace": "${displayWorkspace}"
    }
  }
}`} 
      />

      <h3 id="best-practice" className="scroll-mt-24">目前最佳配置文件方法</h3>
      <p>
        发送此提示词至任意 AI，发送前需填写“⚠️粘贴原配置文件（onboard后未改动的）于此处⚠️”，不要填写 API 密钥以免泄露。
      </p>
      
      <CodeBlock 
        language="text"
        code={`You are a configuration file merge tool for OpenClaw — a locally-running AI assistant framework whose core config file openclaw.json controls model providers, workspace, gateway, and plugins. The goal is to replace the default OpenAI API with a third-party OpenAI-compatible API provider.
Merge rules:
 1. Use the “original config” as the base structure
 2. Remove all entries under auth.profiles, keep "profiles": {}
 3. Insert the entire top-level models block from the “fields to add/replace” into the original
 4. Override agents.defaults.model.primary with the value from the fields to add/replace
 5. Override agents.defaults.workspace with the value from the fields to add/replace
 6. Leave all other fields in the original config untouched
 7. Output only a complete, valid JSON — no explanation, no markdown, no extra text
Original config:

⚠️粘贴原配置文件（onboard后未改动的）于此处⚠️

Fields to add/replace:

{
 "models": {
 "mode": "merge",
 "providers": {
 "jmr": {
 "baseUrl": "https://jmrai.net/",
 "apiKey": "${displayApiKey}",
 "api": "openai-completions",
 "models": [
 {
 "id": "${displayModelId}",
 "name": "${displayModelId}",
 "reasoning": true,
 "contextWindow": 200000,
 "maxTokens": 32000
 }
 ]
 }
 }
 },
 "agents": {
 "defaults": {
 "model": {
 "primary": "jmr/${displayModelId}"
 },
 "workspace": "${displayWorkspace}"
 }
 }
}`} 
      />

      <h2 id="restart" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">4. 重启并验证</h2>
      <CodeBlock 
        language="bash"
        code={`openclaw gateway restart
openclaw status --deep
openclaw models list --json`} 
      />
    </div>
  );
}
