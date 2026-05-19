import React from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { Link } from 'react-router-dom';
import { Terminal, Code2, Wrench, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">快速开始</span>
      <h1 className="text-4xl font-bold tracking-tight mt-2 mb-4">
        JMR API 概述
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        这份文档用于指导你使用 JMR API 的全流程。JMR API 是一个多模型 API 接入平台，目标是让顶级模型在国内场景也能稳定、低门槛使用。
      </p>

      <p>
        支持主流模型与多模态输入（文本 / 图片），强调稳定可用与透明计价。可对接 OpenClaw、OpenCode、Codex、Chatbox、Cherry Studio 等客户端。
      </p>

      <h2 id="intro" className="text-2xl font-semibold mt-12 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        开始使用
      </h2>
      <p className="mb-6">
        选择你的环境来开始使用。大多数界面需要配置 API 密钥。
      </p>

      <div className="grid md:grid-cols-2 gap-4 not-prose">
        <Link
          to="/openclaw/quickstart"
          className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all bg-white dark:bg-[#121212] flex flex-col h-full no-underline"
        >
          <div className="flex items-center gap-3 mb-3">
            <Terminal className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-orange-500 transition-colors" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500 transition-colors m-0">
              OpenClaw 部署
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm flex-grow m-0">
            查看 macOS / Linux 的最短可用路径，快速完成 OpenClaw 部署与 API 改接。
          </p>
        </Link>

        <Link
          to="/openclaw/troubleshooting"
          className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all bg-white dark:bg-[#121212] flex flex-col h-full no-underline"
        >
          <div className="flex items-center gap-3 mb-3">
            <Wrench className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-orange-500 transition-colors" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500 transition-colors m-0">
              错误修复
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm flex-grow m-0">
            按排障清单定位常见问题，解决 embedding 报错、网络不通等。
          </p>
        </Link>
        
        <Link
          to="/opencode/config"
          className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-orange-500 dark:hover:border-orange-500 transition-all bg-white dark:bg-[#121212] flex flex-col h-full no-underline md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-3">
            <Code2 className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-orange-500 transition-colors" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500 transition-colors m-0">
              OpenCode 配置
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm flex-grow m-0">
            获取完整的 OpenCode 配置文件，一键替换即可使用。
          </p>
        </Link>
      </div>

      <h2 id="base-url" className="text-2xl font-semibold mt-12 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        API Base URL
      </h2>
      <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-500/10 px-4 py-3 rounded-r-lg mt-4 mb-4 not-prose">
        <p className="text-orange-800 dark:text-orange-200 text-sm m-0">
          <strong>💡 提示</strong>：优先填写 <code>https://jmrai.net/</code>，不行再填 <code>https://jmrai.net/v1</code>
        </p>
      </blockquote>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">首选地址</p>
          <CodeBlock code="https://jmrai.net/" language="text" />
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">备选地址</p>
          <CodeBlock code="https://jmrai.net/v1" language="text" />
        </div>
      </div>
    </div>
  );
}
