import React from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { Link } from 'react-router-dom';

export function CodexCLIConfig() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8 not-prose">
        <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase">Codex 专区</span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2 mb-4">
          Codex CLI 安装与配置教程
        </h1>
      </div>

      <blockquote className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-500/10 px-4 py-3 rounded-r-lg mt-8 mb-8 not-prose">
        <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
          💡 温馨提示：
        </p>
        <p className="text-orange-800 dark:text-orange-200/80 text-sm">
          推荐您使用 <Link to="/ccswitch/config" className="underline font-medium hover:text-orange-600 dark:hover:text-orange-400">CC Switch</Link> 进行配置，不仅能避免由于手动编辑文件引发的格式错误，还方便您统一管理。
        </p>
      </blockquote>

      <h2 id="windows-tutorial" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        Windows 版本教程
      </h2>

      <h3 id="win-requirements" className="scroll-mt-24">系统要求</h3>
      <ul>
        <li>Windows 10 或 Windows 11</li>
        <li>Node.js 22+</li>
        <li>npm 10+</li>
        <li>网络连接</li>
      </ul>

      <h3 id="win-install" className="scroll-mt-24">安装步骤</h3>
      <p>
        <strong>前置步骤！！！</strong><br/>
        安装 Git Bash，请访问 <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git - Downloads</a> 下载对应您电脑系统的版本，之后一直点击“下一步”即可完成安装。
      </p>

      <p><strong>1. 安装 Node.js</strong><br/>
      访问 <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js 官网</a> 下载并安装最新 LTS 版本。</p>

      <p><strong>2. 安装 codex</strong><br/>
      打开命令提示符 (CMD) 或 PowerShell，运行：</p>
      <CodeBlock language="bash" code="npm install -g @openai/codex" />

      <p><strong>3. 验证安装</strong><br/>
      打开命令提示符 (CMD) 或 PowerShell，运行：</p>
      <CodeBlock language="bash" code="codex --version" />

      <h3 id="win-config" className="scroll-mt-24">配置 API</h3>

      <p><strong>1. 获取 Auth Token</strong><br/>
      访问 https://jmrai.net 站点页面进行以下操作：</p>
      <ul>
        <li>点击 <strong>控制台 → API令牌</strong> 页面</li>
        <li>点击 <strong>添加令牌</strong></li>
        <li>令牌分组请选择：<strong>codex分组</strong>（务必选择此分组，否则无法使用）</li>
        <li>令牌名称随意</li>
        <li>额度建议：设置为 <strong>无限额度</strong></li>
        <li>其他选项保持默认</li>
      </ul>

      <p><strong>2. 配置文件</strong></p>
      <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 px-4 py-3 rounded-r-lg mt-4 not-prose">
        <p className="text-zinc-800 dark:text-zinc-200 text-sm m-0">
          <strong>重要提示</strong>：请将下方的 <code>sk-xxx</code> 替换为您在 https://jmrai.net 生成的实际 API 密钥！
        </p>
      </blockquote>
      
      <ol>
        <li>进入当前用户的用户目录下的 <code>.codex</code> 文件夹中，例如：<code>C:\Users\testuser\.codex</code>。<br/>
        （<strong>注意</strong>：如果看不到该目录，说明您没有打开 Windows 的“显示隐藏的项目”，请先在文件资源管理器中开启。）</li>
        <li>如果没有 <code>.codex</code> 文件夹，请手动创建该文件夹，然后在其中创建 <code>config.toml</code> 以及 <code>auth.json</code> 两个文件。</li>
        <li><strong>填写配置</strong> (需要将 <code>sk-xxx</code> 替换成您自己创建的真实 SK)。
          <p>a. <code>auth.json</code> 中的配置：</p>
          <CodeBlock language="json" code='{"OPENAI_API_KEY": "sk-xxx"}' />
          <p>b. <code>config.toml</code> 中的配置（直接粘贴下面的内容即可）：<br/>
          <code>model_reasoning_effort</code> 可选值为 <code>high</code>, <code>medium</code>, <code>low</code>，分别代表模型思考的努力程度（高、中、低）。</p>
          <CodeBlock language="toml" code={`model_provider = "api111"
model = "gpt-5.5"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.api111]
name = "api111"
base_url = "https://jmrai.net"
wire_api = "responses"`} />
        </li>
      </ol>

      <h3 id="win-start" className="scroll-mt-24">启动 codex</h3>
      <p><strong>重启终端！重启终端！重启终端！</strong><br/>
      然后进入到您的工程目录：</p>
      <CodeBlock language="bash" code="cd your-project-folder" />
      <p>运行以下命令启动：</p>
      <CodeBlock language="bash" code="codex" />

      <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

      <h2 id="mac-tutorial" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        Mac 版本教程
      </h2>

      <h3 id="mac-requirements" className="scroll-mt-24">系统要求</h3>
      <ul>
        <li>macOS 12 或更高版本</li>
        <li>Node.js 22+</li>
        <li>npm 10+</li>
        <li>网络连接</li>
      </ul>

      <h3 id="mac-install" className="scroll-mt-24">安装步骤</h3>
      <p><strong>1. 安装 Node.js</strong></p>
      <ul>
        <li><strong>方式一</strong>：直接访问 <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js 官网</a> 下载并安装最新 LTS 版本。</li>
        <li><strong>方式二</strong>：使用 Homebrew（推荐）
          <CodeBlock language="bash" code={`# 如果尚未安装 Homebrew，请先运行此命令
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node`} />
        </li>
      </ul>

      <p><strong>2. 安装 codex</strong><br/>
      打开终端 (Terminal)，运行（可能需要加 <code>sudo</code>）：</p>
      <CodeBlock language="bash" code="npm install -g @openai/codex" />

      <p><strong>3. 验证安装</strong><br/>
      打开终端 (Terminal)，运行：</p>
      <CodeBlock language="bash" code="codex --version" />

      <h3 id="mac-config" className="scroll-mt-24">配置 API</h3>
      <p><strong>1. 获取 Auth Token</strong><br/>
      访问 https://jmrai.net 站点页面进行以下操作：</p>
      <ul>
        <li>点击 <strong>控制台 → API令牌</strong> 页面</li>
        <li>点击 <strong>添加令牌</strong></li>
        <li>令牌分组请选择：<strong>Default / User</strong></li>
        <li>令牌名称随意</li>
        <li>额度建议：设置为 <strong>无限额度</strong></li>
        <li>其他选项保持默认</li>
      </ul>

      <p><strong>2. 配置文件</strong></p>
      <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 px-4 py-3 rounded-r-lg mt-4 not-prose">
        <p className="text-zinc-800 dark:text-zinc-200 text-sm m-0">
          <strong>重要提示</strong>：请将下方的 <code>sk-xxx</code> 替换为您在 https://jmrai.net 生成的实际 API 密钥！
        </p>
      </blockquote>
      
      <ol>
        <li>创建目录和文件：<br/>
        在访达界面按下 “Command+Shift+G”，输入以下路径并回车，打开 Codex 配置目录
          <CodeBlock language="bash" code="~/.codex" />
          编辑或者创建以下三个配置文件：
          <ul>
            <li><code>config.toml</code>：Codex 的核心配置文件，中转服务与 MCP 等都在此文件配置</li>
            <li><code>auth.json</code>：存放中转站获取的 ApiKey 秘钥</li>
            <li><code>AGENTS.md</code>：Codex 全局工作的提示词</li>
          </ul>
          或者在终端输入以下创建命令：
          <CodeBlock language="bash" code={`mkdir -p ~/.codex
touch ~/.codex/auth.json
touch ~/.codex/config.toml`} />
        </li>
        <li>编辑 <code>auth.json</code> 文件：
          <CodeBlock language="bash" code="vi ~/.codex/auth.json" />
          按 <code>i</code> 进入插入模式，粘贴以下配置内容（将 <code>sk-xxx</code> 替换为您的密钥），然后按 <code>ESC</code> 键，输入 <code>:wq</code> 并回车保存退出。
          <CodeBlock language="json" code='{"OPENAI_API_KEY": "sk-xxx"}' />
        </li>
        <li>编辑 <code>config.toml</code> 文件：
          <CodeBlock language="bash" code="vi ~/.codex/config.toml" />
          按 <code>i</code> 进入插入模式，粘贴以下内容，然后按 <code>ESC</code> 键，输入 <code>:wq</code> 并回车保存退出。
          <CodeBlock language="toml" code={`model_provider = "api111"
model = "gpt-5.5"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.api111]
name = "api111"
base_url = "https://jmrai.net"
wire_api = "responses"`} />
        </li>
      </ol>

      <h3 id="mac-start" className="scroll-mt-24">启动 codex</h3>
      <p><strong>重启终端！重启终端！重启终端！</strong><br/>
      然后进入到您的工程目录：</p>
      <CodeBlock language="bash" code="cd your-project-folder" />
      <p>运行以下命令启动：</p>
      <CodeBlock language="bash" code="codex" />

      <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

      <h2 id="linux-tutorial" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        Linux 版本教程
      </h2>

      <h3 id="linux-requirements" className="scroll-mt-24">系统要求</h3>
      <ul>
        <li>主流 Linux 发行版 (Ubuntu 20.04+, Debian 10+, CentOS 7+, etc.)</li>
        <li>Node.js 22+</li>
        <li>npm 10+</li>
        <li>网络连接</li>
      </ul>

      <h3 id="linux-install" className="scroll-mt-24">安装步骤</h3>
      <p><strong>1. 安装 Node.js</strong></p>
      <ul>
        <li><strong>Ubuntu/Debian</strong>
          <CodeBlock language="bash" code={`sudo apt update
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs`} />
        </li>
        <li><strong>CentOS/RHEL/Fedora</strong>
          <CodeBlock language="bash" code={`# 使用 dnf (Fedora) 或 yum (CentOS/RHEL)
sudo dnf install nodejs npm
# 或
sudo yum install nodejs npm`} />
        </li>
        <li><strong>Arch Linux</strong>
          <CodeBlock language="bash" code="sudo pacman -S nodejs npm" />
        </li>
      </ul>

      <p><strong>2. 安装 codex</strong><br/>
      打开终端 (Terminal)，运行：</p>
      <CodeBlock language="bash" code="sudo npm install -g @openai/codex" />

      <p><strong>3. 验证安装</strong><br/>
      打开终端 (Terminal)，运行：</p>
      <CodeBlock language="bash" code="codex --version" />

      <h3 id="linux-config" className="scroll-mt-24">配置 API</h3>
      <p><strong>1. 获取 Auth Token</strong><br/>
      访问 https://jmrai.net 站点页面进行以下操作：</p>
      <ul>
        <li>点击 <strong>控制台 → API令牌</strong> 页面</li>
        <li>点击 <strong>添加令牌</strong></li>
        <li>令牌分组请选择：<strong>codex渠道-gpt</strong>（务必选择此分组，否则无法使用）</li>
        <li>令牌名称随意</li>
        <li>额度建议：设置为 <strong>无限额度</strong></li>
        <li>其他选项保持默认</li>
      </ul>

      <p><strong>2. 配置文件</strong></p>
      <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 px-4 py-3 rounded-r-lg mt-4 not-prose">
        <p className="text-zinc-800 dark:text-zinc-200 text-sm m-0">
          <strong>重要提示</strong>：请将下方的 <code>sk-xxx</code> 替换为您在 https://jmrai.net 生成的实际 API 密钥！
        </p>
      </blockquote>
      
      <ol>
        <li>创建目录和文件：
          <CodeBlock language="bash" code={`mkdir -p ~/.codex
touch ~/.codex/auth.json
touch ~/.codex/config.toml`} />
        </li>
        <li>编辑 <code>auth.json</code> 文件：
          <CodeBlock language="bash" code="vi ~/.codex/auth.json" />
          按 <code>i</code> 进入插入模式，粘贴以下内容（将 <code>sk-xxx</code> 替换为您的密钥），然后按 <code>ESC</code> 键，输入 <code>:wq</code> 并回车保存退出。
          <CodeBlock language="json" code='{"OPENAI_API_KEY": "sk-xxx"}' />
        </li>
        <li>编辑 <code>config.toml</code> 文件：
          <CodeBlock language="bash" code="vi ~/.codex/config.toml" />
          按 <code>i</code> 进入插入模式，粘贴以下内容，然后按 <code>ESC</code> 键，输入 <code>:wq</code> 并回车保存退出。
          <CodeBlock language="toml" code={`model_provider = "api111"
model = "gpt-5.5"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.api111]
name = "api111"
base_url = "https://jmrai.net"
wire_api = "responses"`} />
        </li>
      </ol>

      <h3 id="linux-start" className="scroll-mt-24">启动 codex</h3>
      <p><strong>重启终端！重启终端！重启终端！</strong><br/>
      然后进入到您的工程目录：</p>
      <CodeBlock language="bash" code="cd your-project-folder" />
      <p>运行以下命令启动：</p>
      <CodeBlock language="bash" code="codex" />

      <hr className="my-10 border-zinc-200 dark:border-zinc-800" />

      <h2 id="vscode-plugin" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 scroll-mt-24">
        VSCode 插件 codex
      </h2>
      <p>以上配置完成后，在 VSCode 扩展商店中搜索并安装 <code>codex</code> 即可。</p>
      <p>安装完成后会出现在侧边栏。</p>
      <p>找到并点击 Settings，以打开 VSCode 系 IDE 的 settings.json 文件。</p>
      
      <p>在 <code>settings.json</code> 文件末尾，添加以下配置。<br/>
      ⚠️注意：apikey 替换为你自己的API令牌！！ 其他内容原封不动粘贴即可！！</p>

      <CodeBlock language="json" code={`"chatgpt.apiBase": "https://deeprouter.top/v1",
"chatgpt.apiKey": "替换sk-你的令牌",
"chatgpt.config": "{\\"preferred_auth_method\\": \\"apikey\\"}",
"chatgpt.model": "gpt-5.2-Codex"`} />

      <h2 id="faq" className="border-b border-zinc-200 dark:border-zinc-800 pb-2 mt-10 scroll-mt-24">
        常见问题
      </h2>
      <p><strong>出现错误请按照如下步骤排查：</strong></p>
      <ol>
        <li>确认 API Key 创建是否正确：额度选择<strong>无限额度</strong>，不要限制模型，分组选择 <strong>codex渠道</strong>。</li>
      </ol>
      <p className="mt-4">更多 codex 配置及使用详情请参考 <strong>codex 官方教程</strong>。</p>

    </div>
  );
}
