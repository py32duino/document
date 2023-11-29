import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as r,c as t,a as n,b as e,d as i,e as a}from"./app-DeJs2Gxv.js";const o={},c=n("p",null,"我们欢迎任何关于文档的新贡献！",-1),u=n("h2",{id:"关于",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于","aria-hidden":"true"},"#"),e(" 关于")],-1),v={href:"https://github.com/Air-duino/document",target:"_blank",rel:"noopener noreferrer"},m={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://theme-hope.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},b=a(`<h2 id="文档结构" tabindex="-1"><a class="header-anchor" href="#文档结构" aria-hidden="true">#</a> 文档结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github  → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── docs → 文档文件夹
│    │
│    ├── .vuepress → VuePress 配置文件夹
│    │    │
│    │    ├── dist → 构建输出目录
│    │    │
│    │    ├── public → 静态资源目录
│    │    │
│    │    ├── styles → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} → 客户端文件
│    │
│    ├── ContributionsGuide → 贡献指南
│    │
│    ├── FAQ → 常见问题
│    │
│    ├── getting_started → 快速开始
│    │
│    ├── library → API参考
│    │
│    ├── tutorial-advanced → 进阶教程
│    │
│    ├── tutorial-extras → 应用示例
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，每个文件夹下的<code>README.md</code>和<code>index.md</code>将被作为主页，而其余的<code>.md</code>文档将被添加二级目录。</p><h2 id="格式要求" tabindex="-1"><a class="header-anchor" href="#格式要求" aria-hidden="true">#</a> 格式要求</h2>`,4),h={href:"https://fontawesome.com.cn/v4/icons",target:"_blank",rel:"noopener noreferrer"},_={href:"https://theme-hope.vuejs.press/zh/guide/markdown/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://tinify.cn/",target:"_blank",rel:"noopener noreferrer"},f=a("<li>为了观察方便，英文与汉字之间需要添加空格，例如<code>例子 example 例子</code>。</li><li>句末需要加上中文句号<code>。</code>。</li><li>一般习惯上来说，我们应当把图片或者静态资源放在<code>.vuepress/public</code>下，但是为了方便编写，我们也可以把图片放在相应文档目录下的<code>img</code>文件夹下，例如<code>docs/getting_started/img</code>。</li><li>每篇文档的头部类似如下的写法：</li>",4),g=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 标题
<span class="token key atrule">order</span><span class="token punctuation">:</span> 文章的顺序序列号
<span class="token key atrule">icon</span><span class="token punctuation">:</span> 图标名</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(y,w){const s=l("ExternalLinkIcon");return r(),t("div",null,[c,u,n("p",null,[e("PY32Duino 有一个专用于文档的仓库，位于"),n("a",v,[e("GitHub"),i(s)]),e("中。该文档使用了"),n("a",m,[e("VuePress"),i(s)]),e("进行配置，并使用了"),n("a",p,[e("VuePress Theme Hope"),i(s)]),e("作为主题。")]),b,n("ol",null,[n("li",null,[e("每篇文档的头部应当加上一个 icon 提高美观度，icon 名称可以在 "),n("a",h,[e("fontawesome v4 图标列表"),i(s)]),e("找到。")]),n("li",null,[e("文档排版需要合理，参考"),n("a",_,[e("https://theme-hope.vuejs.press/zh/guide/markdown/"),i(s)]),e("的附加组件和语法，其余参考 Markdown 标准语法。")]),n("li",null,[e("所有图片添加前都要经过"),n("a",k,[e("此网站"),i(s)]),e("的压缩，减小文件体积。")]),f]),g])}const V=d(o,[["render",x],["__file","document.html.vue"]]);export{V as default};
