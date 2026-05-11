import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = (e?: MediaQueryListEvent) => {
      const isDarkSystem = e ? e.matches : mediaQuery.matches;
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && isDarkSystem)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme();

    const listener = (e: MediaQueryListEvent) => {
      if (!('theme' in localStorage)) {
        applyTheme(e);
      }
    };
    
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    const isDarkNew = !isDark;

    const updateDOM = () => {
      if (isDarkNew) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
      setIsDark(isDarkNew);
    };

    if (!('startViewTransition' in document)) {
      updateDOM();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = (document as any).startViewTransition(updateDOM);

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll to hash or top on route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Wait for the page transition animation to complete (200ms) before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const sidebarSections = [
    {
      title: '快速开始',
      items: [
        { title: '概述', path: '/' },
        { title: '开始使用', path: '/getting-started' },
      ]
    },
    {
      title: 'OpenClaw 专区',
      items: [
        { title: '快速开始', path: '/openclaw/quickstart' },
        { title: '错误修复', path: '/openclaw/troubleshooting' },
      ]
    },
    {
      title: 'OpenCode 专区',
      items: [
        { title: '配置文档', path: '/opencode/config' },
      ]
    },
    {
      title: 'Claude Code 专区',
      items: [
        { title: '安装使用教程', path: '/claudecode/config' },
      ]
    },
    {
      title: 'CC Switch 专区',
      items: [
        { title: '配置文档', path: '/ccswitch/config' },
      ]
    }
  ];

  const searchData = [
    { title: 'JMR API 概述', path: '/', description: 'JMR API 介绍、API Base URL 及文档结构', keywords: ['home', '首页', '介绍', '基础'] },
    { title: '概述: 开始使用', path: '/#intro', description: '选择你的环境来开始使用', keywords: ['开始', 'start', '环境'] },
    { title: 'API Base URL', path: '/#base-url', description: 'JMR API 的基础请求地址', keywords: ['url', 'base', '地址', '接口'] },
    
    { title: '开始使用', path: '/getting-started', description: '注册、登录、购买额度、创建 API Key 及接口配置', keywords: ['开始', 'start', '注册', '登录', '充值', 'api key'] },
    { title: '开始使用: 注册账号', path: '/getting-started#step-1', description: '微信注册或邮箱注册', keywords: ['注册', 'register', '微信', '邮箱'] },
    { title: '开始使用: 登录账号', path: '/getting-started#step-2', description: '微信登录或账号登录', keywords: ['登录', 'login', '微信', '账号'] },
    { title: '开始使用: 购买额度', path: '/getting-started#step-3', description: '在线充值与计费参考', keywords: ['购买', '充值', '额度', '积分', '价格'] },
    { title: '开始使用: 创建 API 令牌', path: '/getting-started#step-4', description: '在控制台添加令牌', keywords: ['api', 'key', '令牌', '创建'] },
    { title: '开始使用: 接口配置', path: '/getting-started#step-5', description: '不同场景的 BASE_URL 配置', keywords: ['接口', '配置', 'base_url', 'url'] },

    { title: 'OpenClaw 快速开始', path: '/openclaw/quickstart', description: '安装 OpenClaw、运行配置向导、编辑配置文件', keywords: ['openclaw', '安装', '配置', 'install', 'setup'] },
    { title: 'OpenClaw: 安装', path: '/openclaw/quickstart#install', description: '通过一键脚本或 npm 安装 OpenClaw', keywords: ['安装', 'install', 'npm', 'brew', '脚本'] },
    { title: 'OpenClaw: 运行配置向导', path: '/openclaw/quickstart#onboard', description: '运行 openclaw onboard 命令', keywords: ['onboard', '向导', '初始化'] },
    { title: 'OpenClaw: 编辑配置文件', path: '/openclaw/quickstart#edit-config', description: '修改 ~/.openclaw/openclaw.json', keywords: ['编辑', '配置', 'json', '修改'] },
    { title: 'OpenClaw: 填写 API 密钥', path: '/openclaw/quickstart#api-key', description: '生成 OpenClaw 配置文件', keywords: ['api', 'key', '密钥', '配置'] },
    { title: 'OpenClaw: 复制配置', path: '/openclaw/quickstart#copy-config', description: '复制生成的 JSON 配置', keywords: ['复制', 'copy', 'json'] },
    { title: 'OpenClaw: 最佳配置文件方法', path: '/openclaw/quickstart#best-practice', description: '使用 AI 辅助合并配置文件', keywords: ['最佳实践', '合并', 'ai', '提示词'] },
    { title: 'OpenClaw: 重启并验证', path: '/openclaw/quickstart#restart', description: '重启 gateway 并验证配置', keywords: ['重启', '验证', 'restart', '测试'] },
    
    { title: 'OpenClaw 错误修复', path: '/openclaw/troubleshooting', description: '解决常见问题，如 embedding 报错等', keywords: ['error', 'bug', '修复', '排障', '问题', 'embedding'] },
    { title: 'OpenClaw: embedding 报错修复', path: '/openclaw/troubleshooting#embedding-error', description: '解决 memory_search 失败、fetch failed 等问题', keywords: ['embedding', '报错', 'memory', 'search', '失败'] },
    { title: 'OpenClaw: 推荐修复方法', path: '/openclaw/troubleshooting#recommend-method', description: '让 OpenClaw 自修', keywords: ['自修', '自动', '修复'] },
    { title: 'OpenClaw: 切换本地 embedding', path: '/openclaw/troubleshooting#plan-a', description: '将 memory embedding provider 切到本地模式', keywords: ['本地', 'local', 'ollama'] },
    { title: 'OpenClaw: 继续用云端 embedding', path: '/openclaw/troubleshooting#plan-b', description: '检查 base_url、api_key 和模型名', keywords: ['云端', 'cloud', '检查'] },
    
    { title: 'OpenCode 配置文档', path: '/opencode/config', description: 'OpenCode 配置文件路径及替换方式', keywords: ['opencode', '配置', 'config', 'json', '替换'] },
    { title: 'OpenCode: 配置文件路径', path: '/opencode/config#config-path', description: '查找 opencode.json 或 opencode.jsonc', keywords: ['路径', 'path', '位置'] },
    { title: 'OpenCode: 替换方式', path: '/opencode/config#replace-method', description: '全部替换原文件中的内容', keywords: ['替换', 'replace', '全部'] },
    { title: 'OpenCode: 填写 API Key', path: '/opencode/config#api-key', description: '生成 OpenCode 配置文件', keywords: ['api', 'key', '密钥', '配置'] },
    { title: 'OpenCode: 复制配置', path: '/opencode/config#copy-config', description: '复制生成的 JSON 配置', keywords: ['复制', 'copy', 'json'] },

    { title: 'Claude Code 安装使用教程', path: '/claudecode/config', description: 'Claude Code 命令行工具的安装与配置', keywords: ['claude', 'code', 'cli', '配置', '安装'] },
    { title: 'Claude Code: 系统要求', path: '/claudecode/config#requirements', description: '操作系统的硬件与软件要求', keywords: ['系统要求', '依赖', 'mac', 'windows'] },
    { title: 'Claude Code: 安装', path: '/claudecode/config#install', description: '支持跨平台的原生及 NPM 安装方式', keywords: ['安装', 'install', 'windows', 'macos', 'linux'] },
    { title: 'Claude Code: 配置使用', path: '/claudecode/config#config', description: '配置 API Token 与 BASE_URL', keywords: ['配置', 'token', 'url', 'settings', 'json'] },
    { title: 'Claude Code: 无法连接服务修复', path: '/claudecode/config#troubleshooting-connection', description: '修复无法连接 Anthropic API 的方法', keywords: ['连接', '报错', '修复', 'offline'] },
    { title: 'Claude Code: 常见问题', path: '/claudecode/config#faq', description: '常见 FAQ 及报错解决', keywords: ['faq', '问题', '解答', 'login', '出错'] },
    { title: 'Claude Code: 常用命令', path: '/claudecode/config#commands', description: 'Claude Code CLI 的命令速查表', keywords: ['命令', 'command', 'cli', '用法'] },

    { title: 'CC Switch 配置文档', path: '/ccswitch/config', description: 'JMRAI 接入 CC Switch 配置指南', keywords: ['ccswitch', 'cc', 'switch', '配置', 'claude', 'code', 'gemini', 'codex'] },
    { title: 'CC Switch: 下载与安装', path: '/ccswitch/config#step-1', description: '下载并安装 CC Switch', keywords: ['下载', '安装', 'download', 'install'] },
    { title: 'CC Switch: 配置供应商信息', path: '/ccswitch/config#step-2', description: '在 CC Switch 中配置 JMRAI 供应商', keywords: ['配置', '供应商', 'provider', '参数'] },
    { title: 'CC Switch: 运行 CLI', path: '/ccswitch/config#step-3', description: '保存配置并运行命令行工具', keywords: ['运行', 'cli', '命令', '激活'] },
  ];

  const searchResults = searchQuery.trim() === '' 
    ? searchData 
    : searchData.filter(item => {
        const query = searchQuery.toLowerCase();
        return item.title.toLowerCase().includes(query) || 
               item.description.toLowerCase().includes(query) ||
               item.keywords.some(k => k.toLowerCase().includes(query));
      });

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-zinc-900 dark:text-zinc-100 font-sans flex flex-col transition-colors duration-200">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0d0d0d] px-4 md:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 -ml-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <Sparkles className="h-5 w-5 text-orange-500" />
            <span>JMR API Docs</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center relative">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center relative text-left w-64"
            >
              <Search className="w-4 h-4 absolute left-3 text-zinc-400" />
              <div className="pl-9 pr-4 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-transparent dark:border-zinc-800 rounded-md text-sm text-zinc-500 dark:text-zinc-400 w-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                搜索...
              </div>
              <div className="absolute right-2 flex items-center gap-1">
                <kbd className="hidden sm:inline-block text-[10px] font-sans px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">⌘K</kbd>
              </div>
            </button>
          </div>
          
          <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block"></div>

          <button
            onClick={toggleTheme}
            className="p-2 -mr-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 max-w-[90rem] mx-auto w-full">
        {/* Sidebar */}
        <aside
          className={`
            fixed md:sticky top-14 left-0 z-20 h-[calc(100vh-3.5rem)] w-64 border-r border-zinc-200 dark:border-zinc-800 
            bg-white dark:bg-[#0d0d0d] transform transition-transform duration-200 ease-in-out overflow-y-auto
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <nav className="px-4 py-6">
            {sidebarSections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="px-3 mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <NavLink
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm rounded-md transition-colors ${
                            isActive
                              ? 'bg-zinc-100 text-zinc-900 font-medium dark:bg-zinc-800 dark:text-zinc-100'
                              : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-zinc-900/50 dark:bg-black/50 z-10 md:hidden top-14"
            onClick={closeMobileMenu}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-3xl mx-auto px-6 py-8 md:py-12"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm" 
              onClick={() => setIsSearchOpen(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: -20 }} 
              transition={{ duration: 0.2, ease: 'easeOut' }} 
              className="relative w-full max-w-lg transform overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 m-4"
            >
              <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-4">
                <Search className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                <input
                  type="text"
                  className="h-14 w-full border-0 bg-transparent pl-4 pr-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:ring-0 outline-none"
                  placeholder="搜索文档..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300">
                  <kbd className="hidden sm:inline-block text-[10px] font-sans px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">ESC</kbd>
                </button>
              </div>
              {searchResults.length > 0 ? (
                <ul className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-zinc-800 dark:text-zinc-200">
                  {searchResults.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => {
                          navigate(item.path);
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="w-full cursor-default select-none px-4 py-3 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 text-left flex flex-col gap-1 group"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-orange-100 transition-colors line-clamp-1">{item.description}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="p-4 text-sm text-zinc-500 dark:text-zinc-400 text-center">未找到结果。</p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
