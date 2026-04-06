import React from 'react';

export function GettingStarted() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8 not-prose">
        <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">快速开始</span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
          🚀 开始使用
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          欢迎使用 JMRAI，只需简单几步，即可开始体验顶尖 AI 模型的极速响应。
        </p>
      </div>

      <h2 id="step-1" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        1. 注册账号
      </h2>
      <p>访问注册页面：<a href="https://jmrai.net/register" target="_blank" rel="noopener noreferrer">https://jmrai.net/register</a></p>
      <ul>
        <li><strong>方式一：微信注册（推荐）</strong><br/>点击 <strong>使用微信继续</strong> ➡️ 扫码关注微信公众号 ➡️ 回复验证码 ➡️ 输入验证码完成注册。</li>
        <li><strong>方式二：邮箱注册</strong><br/>点击 <strong>使用用户名注册</strong> ➡️ 填写用户名与密码 ➡️ 输入邮箱获取并填写验证码 ➡️ 点击 <strong>注册</strong>。</li>
      </ul>

      <h2 id="step-2" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        2. 登录账号
      </h2>
      <p>访问登录页面：<a href="https://jmrai.net/login" target="_blank" rel="noopener noreferrer">https://jmrai.net/login</a></p>
      <ul>
        <li><strong>方式一：微信登录</strong><br/>点击 <strong>使用微信继续</strong> ➡️ 扫码关注微信公众号 ➡️ 输入验证码即可快捷登录。</li>
        <li><strong>方式二：账号登录</strong><br/>点击 <strong>使用邮箱和用户名登录</strong> ➡️ 输入您的邮箱/用户名及密码 ➡️ 点击 <strong>继续</strong> 完成登录。</li>
      </ul>

      <h2 id="step-3" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        3. 购买额度
      </h2>
      <p>登录控制台后，进入 <strong>[钱包管理]</strong> 页面即可在线充值。</p>
      <ul>
        <li><strong>充值比例</strong>：<strong>1:10</strong>（即 1元人民币 = 10积分）。</li>
        <li><strong>计费参考</strong>（以 Claude-3-Opus 为例）：
          <ul>
            <li>输入价格：<code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">45.0000 积分 / 1M Tokens</code></li>
            <li>补全价格：<code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">225.0000 积分 / 1M Tokens</code></li>
          </ul>
        </li>
      </ul>

      <h2 id="step-4" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        4. 创建 API 令牌 (API Key)
      </h2>
      <p>登录控制台 ➡️ 点击左侧菜单 <strong>[令牌管理]</strong> ➡️ 点击 <strong>[添加令牌]</strong>。</p>
      <ul>
        <li><strong>令牌名称</strong>：自定义名称（如：开发测试）。</li>
        <li><strong>令牌分组</strong>：默认选择 <code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">auto</code>。</li>
        <li><strong>过期时间</strong>：可选，不填则永不过期。</li>
        <li><strong>额度设置</strong>：可选，支持限制最大调用额度。</li>
        <li><strong>访问限制</strong>：可选，建议保持默认（不设置）以确保模型兼容性。</li>
      </ul>

      <h2 id="step-5" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        5. 接口配置 (BASE_URL)
      </h2>
      <p>请根据您使用的客户端工具选择对应的接口地址：</p>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">场景</th>
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">API 接口地址 (BASE_URL)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100"><strong>Claude Code + Claude 模型</strong></td>
              <td className="py-3 px-4"><code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">https://jmrai.net</code></td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100"><strong>通用工具 (NextChat, CLI, etc.)</strong></td>
              <td className="py-3 px-4"><code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-orange-500 font-mono text-sm">https://jmrai.net/v1</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-500/10 px-4 py-3 rounded-r-lg mt-8 not-prose">
        <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
          💡 提示：
        </p>
        <p className="text-orange-800 dark:text-orange-200/80 text-sm">
          完成以上步骤后，您即可将 API Key 填入您的应用程序中开始调用。如有疑问，请咨询官方客服或查看进阶文档。
        </p>
      </blockquote>
    </div>
  );
}
