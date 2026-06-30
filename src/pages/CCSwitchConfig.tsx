import React from 'react';

export function CCSwitchConfig() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8 not-prose">
        <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">CC Switch 专区</span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
          JMRAI 接入 CC Switch 配置文档
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          本指南将帮助您通过 <strong>CC Switch</strong> 轻松将 <strong>JMRAI</strong> 的 API 服务接入到 Claude Code、OpenCode、Gemini CLI 或 Codex 等命令行工具中。
        </p>
      </div>

      <h2 id="step-1" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        🛠️ 第一步：下载与安装
      </h2>
      <ol>
        <li><strong>下载软件</strong>：访问 <a href="https://github.com/farion1231/cc-switch/releases" target="_blank" rel="noopener noreferrer">CC Switch GitHub Releases</a> 页面。</li>
        <li><strong>选择版本</strong>：根据您的操作系统（Windows、macOS 或 Linux）下载对应安装包。</li>
        <li><strong>安装启动</strong>：完成安装后打开 <strong>CC Switch</strong> 应用程序。</li>
      </ol>

      <h2 id="step-2" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        ⚙️ 第二步：配置供应商信息
      </h2>
      <ol>
        <li><strong>选择工具</strong>：在软件上方菜单栏，点击您想要使用的工具（如 <strong>Claude code</strong> / <strong>OpenCode</strong> / <strong>GeminiCLI</strong> / <strong>Codex</strong>）。</li>
        <li><strong>新建供应商</strong>：点击界面右上角的 <strong>“+” (加号)</strong> 图标。</li>
        <li><strong>填写以下参数</strong>：</li>
      </ol>

      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">配置项</th>
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">填写内容</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">供应商名称</td>
              <td className="py-3 px-4"><code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">JMRAI</code></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">官网链接</td>
              <td className="py-3 px-4"><code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">https://jmrai.net</code></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">API 格式</td>
              <td className="py-3 px-4">
                <div className="flex flex-col space-y-1">
                  <div><code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">OpenAI Chat Completions</code></div>
                  <div><code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">Responses</code> <span className="text-zinc-500 dark:text-zinc-400 text-sm ml-1">（如果使用 Codex 请使用 Responses 格式）</span></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">认证字段</td>
              <td className="py-3 px-4"><code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">API_KEY</code></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">API Key</td>
              <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">前往 <a href="https://jmrai.net/console/token" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">JMRAI 控制台</a> 生成并粘贴</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">API 请求地址</td>
              <td className="py-3 px-4"><code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">https://jmrai.net</code></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100">模型名称/ID</td>
              <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">前往 <a href="https://jmrai.net" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">模型广场</a> 查找并复制您需要的模型 ID</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="step-3" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        🚀 第三步：运行 CLI
      </h2>
      <ol>
        <li><strong>保存配置</strong>：检查信息无误后点击保存。</li>
        <li><strong>激活环境</strong>：在 CC Switch 列表中选中 <strong>JMRAI</strong>。</li>
        <li><strong>执行命令</strong>：打开您的终端（Terminal/Command Prompt），直接运行您的 CLI 命令即可享受 JMRAI 提供的稳定加速服务。</li>
      </ol>

      <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-500/10 px-4 py-3 rounded-r-lg mt-8 not-prose">
        <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
          💡 温馨提示：
        </p>
        <ul className="list-disc list-inside text-orange-800 dark:text-orange-200/80 space-y-1 text-sm">
          <li>确保您的 API Key 具有相应模型的访问权限。</li>
          <li>如遇连接问题，请确认 <strong>API 请求地址</strong> 已正确填写为 <code className="px-1.5 py-0.5 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 font-mono">https://jmrai.net</code>。</li>
        </ul>
      </blockquote>
    </div>
  );
}
