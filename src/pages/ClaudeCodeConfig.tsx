import React from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { Link } from 'react-router-dom';

export function ClaudeCodeConfig() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8 not-prose">
        <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">Claude Code 专区</span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
          Claude Code 安装使用教程
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Claude Code 是一个强大的 AI 编程助手，让您可以直接在终端中与 AI 协作编程。本教程将指导您完成安装和配置过程。
        </p>
      </div>

      <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-500/10 px-4 py-3 rounded-r-lg mt-8 mb-8 not-prose">
        <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
          💡 温馨提示：
        </p>
        <p className="text-orange-800 dark:text-orange-200/80 text-sm">
          推荐您使用 <Link to="/ccswitch/config" className="underline font-medium hover:text-orange-600 dark:hover:text-orange-400">CC Switch</Link> 进行配置，不仅能避免由于手动编辑文件引发的格式错误，还方便您统一管理。
        </p>
      </blockquote>

      <h2 id="requirements" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        系统要求
      </h2>
      <ul>
        <li><strong>支持的操作系统</strong>：macOS 10.15+、Ubuntu 20.04+/Debian 10+ 或 Windows 10+（带 WSL 或 Git for Windows）</li>
        <li><strong>硬件</strong>：4GB+ RAM</li>
        <li><strong>软件</strong>：Git（Windows 安装需要）、 Node.js 18+（仅 NPM 安装需要）</li>
        <li><strong>网络</strong>：Anthropic 支持国家/地区的网络连接</li>
      </ul>

      <h2 id="install" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        安装 Claude Code
      </h2>
      <p>
        原生安装是最推荐的安装方法，并拥有多个优势：
      </p>
      <ul>
        <li>一个自包含的可执行文件</li>
        <li>无 Node.js 依赖</li>
        <li>改进的自动更新程序稳定性</li>
      </ul>
      <p>
        如果您已有 Claude Code 的现有安装，请使用 <code>claude install</code> 迁移到原生二进制安装。
      </p>

      <h3 id="install-windows" className="scroll-mt-24">Windows 系统：</h3>
      <h4>步骤1：安装 Git For Windows</h4>
      <p>在 Windows 上原生安装 Claude Code 需要通过 Git Bash</p>
      <ul>
        <li>Git For Windows 下载地址：<a href="https://git-scm.com/install/windows" target="_blank" rel="noopener noreferrer">https://git-scm.com/install/windows</a></li>
      </ul>
      <p>下载系统对应版本默认选项安装即可，验证安装命令：</p>
      <CodeBlock language="bash" code={`git --version`} />

      <h4>步骤2：安装 Claude Code</h4>
      <p>之后打开 PowerShell 或 CMD 终端运行以下安装命令即可。</p>
      <p>Windows PowerShell 安装命令:</p>
      <CodeBlock language="powershell" code={`irm https://claude.ai/install.ps1 | iex`} />
      <p>Windows CMD 安装命令:</p>
      <CodeBlock language="cmd" code={`curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`} />

      <h4>步骤3：添加 PATH 环境变量</h4>
      <p>Claude 可执行文件所在的目录需要加入系统 PATH，否则 PowerShell 目前无法识别 claude 命令，参考路径：</p>
      <p><code>C:\Users\你的用户名\.local\bin</code></p>
      <p>请通过以下步骤添加：打开系统属性 &rarr; 环境变量 &rarr; 编辑用户 PATH &rarr; 新建 &rarr; 添加上方的Claude安装路径。</p>
      <p>安装完成后，输入以下命令即可启动 <code>Claude Code</code> 客户端：</p>
      <CodeBlock language="bash" code={`claude`} />
      <p>如果正常进入机器人界面，就表示已经成功安装了，但目前还无法接入官方服务，需要完成下一步的令牌设置才可正常使用。</p>

      <h3 id="install-macos-linux" className="mt-8 scroll-mt-24">macOS / Linux / WSL：</h3>
      <p>macOS, Linux, WSL 安装指令:</p>
      <CodeBlock language="bash" code={`curl -fsSL https://claude.ai/install.sh | bash`} />
      <p>Homebrew (macOS, Linux) 安装命令:</p>
      <CodeBlock language="bash" code={`brew install --cask claude-code`} />
      <p>安装后提示 <code>~/.local/bin is not in your PATH.</code> 运行以下命令添加将程序到 PATH 中:</p>
      <CodeBlock language="bash" code={`echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc`} />

      <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 px-4 py-3 rounded-r-lg mt-4 not-prose">
        <p className="text-zinc-800 dark:text-zinc-200 text-sm m-0">
          <strong>💡 提示</strong>：如果您已经安装了 Node.js 18.0 或更高版本，也可以使用 NPM 方式进行安装
        </p>
      </blockquote>
      <p>NPM 安装指令：</p>
      <CodeBlock language="bash" code={`npm install -g @anthropic-ai/claude-code`} />
      <p>安装完成后，输入以下命令即可启动 <code>Claude Code</code> 客户端：</p>
      <CodeBlock language="bash" code={`claude`} />
      <p>如果正常进入机器人界面，就表示已经成功安装了，但目前还无法接入官方服务，需要完成下一步的令牌设置才可正常使用。</p>

      <h2 id="config" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        配置并开始使用
      </h2>
      <h4 id="config-step-1" className="scroll-mt-24">1. 您需要准备两个重要的配置项：</h4>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">配置项</th>
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">说明</th>
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">获取方式</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100"><strong>ANTHROPIC_AUTH_TOKEN</strong></td>
              <td className="py-3 px-4">API 认证令牌</td>
              <td className="py-3 px-4">注册后在 <code>API令牌</code> 页面点击 <code>添加令牌</code> 获得（以 <code>sk-</code> 开头）</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-zinc-900 dark:text-zinc-100"><strong>ANTHROPIC_BASE_URL</strong></td>
              <td className="py-3 px-4">API 服务地址</td>
              <td className="py-3 px-4">使用 <code className="text-orange-500">https://jmrai.net</code>（与主站地址相同）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-500/10 px-4 py-3 rounded-r-lg mt-4 not-prose">
        <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
          <strong>创建令牌时的建议设置</strong>：
        </p>
        <ul className="list-disc list-inside text-orange-800 dark:text-orange-200/80 space-y-1 text-sm">
          <li>名称：随意命名</li>
          <li>额度：设为无限额度</li>
          <li>分组：User分组或Default默认分组</li>
          <li>其他选项：保持默认设置</li>
        </ul>
      </blockquote>

      <h4 id="config-step-2" className="mt-8 scroll-mt-24">2. 新建或修改 <code>settings.json</code> 配置文件，配置文件位于：</h4>
      <ul>
        <li><strong>Windows:</strong> <code>C:\Users\用户文件夹\.claude\settings.json</code></li>
        <li><strong>Mac:</strong> <code>~/.claude/settings.json</code> 或 <code>.claude/settings.json</code></li>
        <li><strong>Linux:</strong> <code>~/.claude/settings.json</code></li>
      </ul>
      <p>写入以下配置信息，将 <code>ANTHROPIC_AUTH_TOKEN</code> 替换为你的API令牌，<code>ANTHROPIC_MODEL</code> 可以替换为您需要的其他模型ID</p>
      <CodeBlock 
        language="json"
        code={`{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-你的API令牌",
    "ANTHROPIC_BASE_URL": "https://jmrai.net",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  }
}`} 
      />
      <p>macOS 在访达界面按下 <code>Command+Shift+G</code>，输入路径 <code>~/.claude</code> 回车，即可打开配置目录。</p>
      <p>Ubuntu/macOS 也可通过 vi 或者 vim 命令直接创建或者修改 <code>settings.json</code> 文件。</p>
      <CodeBlock language="bash" code={`vim ~/.claude/settings.json`} />

      <h4 id="config-step-3" className="mt-8 scroll-mt-24">3. 在您的项目目录下输入 Claude 即可启动并运行 Claude Code：</h4>
      <CodeBlock 
        language="bash"
        code={`cd /path/to/your/project
claude`} 
      />
      
      <p>初次启动后，您将看到以下配置步骤：</p>
      <ol>
        <li><strong>选择主题</strong> &rarr; 选择您喜欢的主题 + 按 Enter</li>
        <li><strong>安全须知</strong> &rarr; 确认安全须知 + 按 Enter</li>
        <li><strong>Terminal 配置</strong> &rarr; 使用默认配置 + 按 Enter</li>
        <li><strong>工作目录信任</strong> &rarr; 信任当前目录 + 按 Enter</li>
      </ol>
      <p><strong>🎉 恭喜！</strong> 现在您可以开始与您的 AI 编程搭档一起写代码了！</p>

      <h2 id="troubleshooting-connection" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        无法连接到 Anthropic 服务
      </h2>
      <p>使用 npm 安装完 claude 之后。在命令行输入 <code>claude</code> 报了如下错误：</p>
      <CodeBlock 
        language="text"
        code={`Unable to connect to Anthropic services
Failed to connect to api.anthropic.com: ERR BAD REQUEST
Please check your internet connection and network settings.
Note: Claude Code might not be available in your country, Check supported countries at https://anthropic.com/supported-countries`} 
      />
      <p>或是在你初次配置时出现以下问题：</p>
      <ol>
        <li>按下键盘 <code>Win + R</code> 键，输入 cmd 后回车，打开命令行终端</li>
        <li>在命令行窗口运行以下自己<strong>对应系统</strong>命令后回车</li>
        <li>重启你的命令行终端，运行 <code>claude</code> CLI 正常使用</li>
      </ol>

      <p><strong>Windows PowerShell：</strong></p>
      <CodeBlock 
        language="powershell"
        code={`$f=Join-Path $env:USERPROFILE '.claude.json'
$j=Get-Content -Raw $f | ConvertFrom-Json
$j | Add-Member -NotePropertyName 'hasCompletedOnboarding' -NotePropertyValue $true -Force
$j | ConvertTo-Json -Depth 10 | Set-Content -Encoding UTF8 $f`} 
      />

      <p><strong>macOS / Linux / WSL:</strong></p>
      <CodeBlock 
        language="bash"
        code={`jq '. + {"hasCompletedOnboarding": true}' ~/.claude.json > /tmp/tmp.json && mv /tmp/tmp.json ~/.claude.json`} 
      />
      <p>注意：如果提示未找到 <code>jq</code>，可以输入 <code>brew install jq</code> 或 <code>sudo apt install jq</code> 进行安装。</p>


      <h2 id="faq" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        常见问题解答
      </h2>
      
      <div className="space-y-6 mt-6">
        <div>
          <h3 className="text-xl font-medium m-0">Q: 遇到 "Invalid API Key · Please run /login" 错误？</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400"><strong>A:</strong> 这表明 Claude Code 未检测到环境变量。请检查：</p>
          <ul className="mt-1">
            <li>是否正确设置了 <code>ANTHROPIC_AUTH_TOKEN</code> 和 <code>ANTHROPIC_BASE_URL</code></li>
            <li>环境变量值是否正确（令牌以 <code>sk-</code> 开头）</li>
            <li>如果使用了永久配置，是否重启了终端</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium m-0">Q: PowerShell 无法安装脚本，遇到执行策略报错问题？</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400"><strong>A:</strong> 以 管理员身份运行选项 启动 PowerShell，运行这行命令：<code>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned</code></p>
        </div>

        <div>
          <h3 className="text-xl font-medium m-0">Q: 为什么显示 "offline" 状态？</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400"><strong>A:</strong> Claude Code 通过连接 Google 来判断网络状态。显示 "offline" 不影响正常使用，只是表明无法连接到 Google。</p>
        </div>

        <div>
          <h3 className="text-xl font-medium m-0">Q: 为什么浏览网页的 Fetch 会失败？</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400"><strong>A:</strong> Claude Code 在访问网页前需要调用 Claude 服务进行安全检查。您需要：</p>
          <ul className="mt-1">
            <li>保持稳定的国际互联网连接</li>
            <li>必要时使用全局代理</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium m-0">Q: 请求总是显示 "fetch failed"？</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400"><strong>A:</strong> 可能是网络环境导致的问题。解决方案：</p>
          <ol className="mt-1">
            <li>尝试使用代理工具</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-medium m-0">Q: API 报错如何处理？</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400"><strong>A:</strong> 可能是转发代理不稳定导致的，建议：</p>
          <ul className="mt-1">
            <li>退出 Claude Code（<code>Ctrl+C</code>）</li>
            <li>重新运行 <code>claude</code> 命令</li>
            <li>如果问题持续，请稍后再试</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium m-0">Q: 网页登录错误？</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400"><strong>A:</strong> 尝试清除本站的 Cookie，然后重新登录。</p>
        </div>
      </div>

      <h2 id="commands" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        Claude Code 中常用命令
      </h2>
      <div className="overflow-x-auto not-prose my-6">
        <table className="min-w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">命令</th>
              <th className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/50">作用</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">claude</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">启动 Claude Code</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">claude "问题"</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">启动并提问</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">claude -p "任务"</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">一次性执行任务，适合脚本 / CI</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">claude -c</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">继续当前目录最近会话</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">claude -r &lt;会话ID&gt;</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">恢复指定历史会话</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">claude --model sonnet</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">指定模型</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">claude --add-dir &lt;目录&gt;</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">添加额外可访问目录</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">claude update</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">更新 Claude Code CLI</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/model</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">会话内切换模型</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/resume</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">恢复历史会话</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/compact</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">压缩上下文，释放空间</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/clear</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">清空当前上下文</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/usage</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">查看用量 / 费用</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/diff</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">查看 Claude 修改的代码差异</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/permissions</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">管理工具权限</td></tr>
            <tr><td className="py-3 px-4"><code className="font-mono text-orange-500 bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/mcp</code></td><td className="py-3 px-4 text-zinc-700 dark:text-zinc-300">管理 MCP 连接</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="related-links" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        相关链接
      </h2>
      <ul>
        <li><a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer">Claude Code 官方文档</a></li>
        <li><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js 官方网站</a></li>
      </ul>

      <p className="mt-8 text-zinc-500 dark:text-zinc-400 text-sm">
        <strong>提示</strong>：如遇到其他问题，请查看官方文档或联系技术支持。
      </p>

    </div>
  );
}
