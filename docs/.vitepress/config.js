

module.exports = {
    title: "Justin3go's Blog-🖊",// 网站标题
    description: '我的技术博客，用心记录知识碎片，汇总整理程序员知识。', //网站描述
    // base: '/', 
    lang: 'zh-CH', //语言
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/ava.ico',//图片放在public文件夹下
            },
        ],
        // 公式渲染样式
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css'
        }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
        }]
    ],
    // 主题配置
    themeConfig: {
        // 启动页面丝滑滚动
        smoothScroll: true,
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '汇总分类', link: '/汇总分类/' },
            { text: '站长推荐', link: '/推荐/' },
            { text: 'B站', link: 'https://space.bilibili.com/434542518' },
            { text: 'GitHub', link: 'https://github.com/Justin3go' },
        ],
        //   侧边导航
        sidebar: [
            {
                text: '算法与数据结构', link: '/汇总分类/算法与数据结构/', children: [
                    { text: '基础概念', link: '/汇总分类/算法与数据结构/01基础概念' },
                    { text: '线性表', link: '/汇总分类/算法与数据结构/02线性表' },
                    { text: '栈和队列', link: '/汇总分类/算法与数据结构/03栈和队列' },
                    { text: '数组', link: '/汇总分类/算法与数据结构/04数组' },
                    { text: '树', link: '/汇总分类/算法与数据结构/05树' },
                    { text: '图', link: '/汇总分类/算法与数据结构/06图' },
                    { text: '查找', link: '/汇总分类/算法与数据结构/07查找' },
                    { text: '排序', link: '/汇总分类/算法与数据结构/08排序' },
                    { text: '散列表实现查找', link: '/汇总分类/算法与数据结构/09散列表实现查找' },
                ]
            },
            { text: '计算机基础知识', link: '/汇总分类/计算机基础知识/' },
            { text: 'JavaScript', link: '/汇总分类/JavaScript/' },
            { text: 'CSS相关', link: '/汇总分类/CSS相关/' },
            { text: '前端框架', link: '/汇总分类/前端框架/' },
            { text: 'UI组件库', link: '/汇总分类/UI组件库/' },
            { text: '数据相关', link: '/汇总分类/数据相关/' },
            { text: '后端储备', link: '/汇总分类/后端储备/' },
            { text: 'AI相关', link: '/汇总分类/AI相关/' },
        ]
    },
    markdown: {
        config: (md) => {
            // md.use(require('markdown-it-latex2img'))
            md.use(require('markdown-it-katex'), { "throwOnError": false, "errorColor": " #cc0000" });
            // 构建时会不支持某些特殊标签，这里需要替换
            const originalRender = md.render
            const REG_MATH_MUSTACHE_TAG = /<span class="katex">/g
            const replacer = '<span v-pre class="katex">'
            md.render = function () {
              return originalRender
                .apply(this, arguments)
                .replace(REG_MATH_MUSTACHE_TAG, replacer)
            }
        },

    }

}