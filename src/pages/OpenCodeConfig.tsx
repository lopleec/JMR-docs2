import React, { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';

export function OpenCodeConfig() {
  const [apiKey, setApiKey] = useState('');
  const displayApiKey = apiKey || '⚠️此处填写您的API Key ⚠️';

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

      <h2 id="api-key" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">3. 填写 API Key 并复制配置</h2>
      
      <div className="my-6 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl not-prose">
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">API Key</label>
        <input type="text" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="输入你的 JMR API 密钥" className="w-full px-3 py-2 bg-white dark:bg-[#0d0d0d] border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-zinc-900 dark:text-zinc-100" />
      </div>

      <h3 id="copy-config" className="scroll-mt-24">复制配置</h3>
      <CodeBlock 
        language="json"
        code={`{
  "provider": {
    "openai": {
      "options": {
        "baseURL": "https://jmrai.net",
        "apiKey": "${displayApiKey}"
      },
      "models": {
        "gpt-5-codex": {
          "name": "GPT-5 Codex",
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
        },
        "gpt-5.1-codex": {
          "name": "GPT-5.1 Codex",
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
        },
        "gpt-5.1-codex-max": {
          "name": "GPT-5.1 Codex Max",
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
        },
        "gpt-5.1-codex-mini": {
          "name": "GPT-5.1 Codex Mini",
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
        },
        "gpt-5.2": {
          "name": "GPT-5.2",
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
            "high": {},
            "xhigh": {}
          }
        },
        "gpt-5.3-codex-spark": {
          "name": "GPT-5.3 Codex Spark",
          "limit": {
            "context": 128000,
            "output": 32000
          },
          "options": {
            "store": false
          },
          "variants": {
            "low": {},
            "medium": {},
            "high": {},
            "xhigh": {}
          }
        },
        "gpt-5.3-codex": {
          "name": "GPT-5.3 Codex",
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
            "high": {},
            "xhigh": {}
          }
        },
        "gpt-5.2-codex": {
          "name": "GPT-5.2 Codex",
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
            "high": {},
            "xhigh": {}
          }
        },
        "codex-mini-latest": {
          "name": "Codex Mini",
          "limit": {
            "context": 200000,
            "output": 100000
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
