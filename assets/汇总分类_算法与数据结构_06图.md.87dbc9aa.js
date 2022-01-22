import{_ as n,c as s,o as a,a as t}from"./app.d0b9bdbd.js";const h='{"title":"\u56FE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u56FE\u7684\u5173\u952E\u8BCD","slug":"\u56FE\u7684\u5173\u952E\u8BCD"},{"level":2,"title":"\u56FE\u7684\u5B58\u50A8","slug":"\u56FE\u7684\u5B58\u50A8"},{"level":3,"title":"\u90BB\u63A5\u77E9\u9635","slug":"\u90BB\u63A5\u77E9\u9635"},{"level":3,"title":"\u90BB\u63A5\u8868","slug":"\u90BB\u63A5\u8868"},{"level":3,"title":"\u5341\u5B57\u94FE\u8868","slug":"\u5341\u5B57\u94FE\u8868"},{"level":3,"title":"\u8FB9\u96C6\u6570\u7EC4","slug":"\u8FB9\u96C6\u6570\u7EC4"},{"level":2,"title":"\u56FE\u7684\u904D\u5386","slug":"\u56FE\u7684\u904D\u5386"},{"level":2,"title":"\u56FE\u7684\u62D3\u6251\u6392\u5E8F","slug":"\u56FE\u7684\u62D3\u6251\u6392\u5E8F"},{"level":2,"title":"\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811","slug":"\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811"},{"level":3,"title":"\u751F\u6210\u6811","slug":"\u751F\u6210\u6811"},{"level":3,"title":"\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811","slug":"\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811-1"},{"level":3,"title":"PRIM\u7B97\u6CD5","slug":"prim\u7B97\u6CD5"},{"level":3,"title":"Kruskal\u7B97\u6CD5","slug":"kruskal\u7B97\u6CD5"}],"relativePath":"\u6C47\u603B\u5206\u7C7B/\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784/06\u56FE.md","lastUpdated":1642681244501}',p={},e=t(`<h1 id="\u56FE" tabindex="-1">\u56FE <a class="header-anchor" href="#\u56FE" aria-hidden="true">#</a></h1><h2 id="\u56FE\u7684\u5173\u952E\u8BCD" tabindex="-1">\u56FE\u7684\u5173\u952E\u8BCD <a class="header-anchor" href="#\u56FE\u7684\u5173\u952E\u8BCD" aria-hidden="true">#</a></h2><ul><li>\u5B8C\u5168\u56FE <ul><li>\u65E0\u5411\u56FE\u9700\u8981\u6709n(n-1)/2\u6761\u8FB9\u3002</li><li>\u6709\u5411\u56FE\u9700\u8981\u6709n(n-1)\u6761\u5F27\u3002</li></ul></li><li>\u90BB\u63A5\u70B9</li><li>\u5EA6\uFF08\u6709\u5411\u56FE\u8FD8\u6709\u51FA\u5EA6\u548C\u5165\u5EA6\uFF09</li><li>\u5B50\u56FE</li><li>\u8DEF\u5F84</li><li>\u8DEF\u5F84\u957F\u5EA6</li><li>\u7B80\u5355\u8DEF\u5F84\uFF1A\u9876\u70B9\u4E0D\u91CD\u590D\u51FA\u73B0\u7684\u8DEF\u5F84\u3002</li><li>\u56DE\u8DEF\uFF1A\u7B2C\u4E00\u4E2A\u9876\u70B9\u548C\u6700\u540E\u4E00\u4E2A\u9876\u70B9\u76F8\u540C\u7684\u8DEF\u5F84\u3002</li><li>\u7B80\u5355\u56DE\u8DEF\uFF1A\u9664\u7B2C\u4E00\u9876\u70B9\u548C\u6700\u540E\u4EE5\u9876\u70B9\u5916\uFF0C\u5176\u4F59\u9876\u70B9\u4E0D\u91CD\u590D\u51FA\u73B0\u7684\u56DE\u8DEF\u3002</li><li>\u6743\uFF1A\u5728\u56FE\u7684\u6BCF\u6761\u8FB9\u4E0A\u52A0\u6570\u5B57\u4F5C\u6743\u3002</li><li>\u7F51\uFF1A\u5E26\u6743\u7684\u56FE\u79F0\u4E3A\u7F51\u3002</li></ul><hr><ul><li><p>\u8FDE\u901A\uFF1A\u65E0\u5411\u56FE\u4E2D\uFF0C\u5982\u679C\u4ECE\u9876\u70B9v\u5230\u9876\u70B9v~\u6709\u8DEF\u5F84\uFF0C\u5219\u79F0v\u548Cv~\u662F\u8FDE\u901A\u7684\u3002</p></li><li><p><strong>\u8FDE\u901A\u56FE</strong>\uFF1A\u5982\u679C\u56FE\u4E2D\u4EFB\u610F\u4E24\u4E2A\u9876\u70B9\u90FD\u662F\u8FDE\u901A\u7684\uFF0C\u5219\u662F\u8FDE\u901A\u56FE\u3002</p></li><li><p><strong>\u8FDE\u901A\u5206\u91CF</strong>\u76F8\u5173\uFF1A</p><ul><li>\u4E5F\u53EB\u65E0\u5411\u56FE\u7684<strong>\u6781\u5927\u8FDE\u901A\u5B50\u56FE</strong></li><li>\u8FDE\u901A\u56FE\u53EA\u6709\u4E00\u4E2A\u8FDE\u901A\u5206\u91CF\uFF0C\u5373\u5176\u81EA\u8EAB</li><li>\u975E\u8FDE\u901A\u7684\u65E0\u5411\u56FE\u6709\u591A\u4E2A\u8FDE\u901A\u5206\u91CF</li></ul></li><li><p><strong>\u5F3A\u8FDE\u901A\u56FE</strong>\uFF1A\u6709\u5411\u56FE\u4E2D\u6BCF\u4E00\u5BF9\u9876\u70B9\u90FD\u5B58\u5728\u8DEF\u5F84\uFF0C\u5219\u79F0G\u662F\u5F3A\u8FDE\u901A\u56FE\u3002</p></li><li><p><strong>\u5F3A\u8FDE\u901A\u5206\u91CF</strong>\uFF1A</p><ul><li>\u6709\u5411\u56FE\u7684\u6781\u5927\u8FDE\u901A\u5B50\u56FE\u79F0\u4F5C\u5F3A\u8FDE\u901A\u5206\u91CF\u3002</li><li>\u5F3A\u8FDE\u901A\u56FE\u7684\u5F3A\u8FDE\u901A\u5206\u91CF\u662F\u5176\u81EA\u8EAB</li><li>\u975E\u5F3A\u8FDE\u901A\u7684\u6709\u5411\u56FE\u53EF\u80FD\u6709\u591A\u4E2A\u5F3A\u8FDE\u901A\u5206\u91CF</li></ul></li><li><p>\u751F\u6210\u6811</p><ul><li>\u4E00\u4E2A\u8FDE\u901A\u56FE\u7684<strong>\u6781\u5C0F\u8FDE\u901A\u5B50\u56FE</strong></li><li>\u542B\u6709\u56FE\u4E2D\u5168\u90E8n\u4E2A\u9876\u70B9\uFF0C\u4F46\u53EA\u6709\u80FD\u4EE4\u56FE\u8FDE\u901A\u7684n-1\u6761\u8FB9</li></ul><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609191424667.png" alt="image-20210609191424667" style="zoom:50%;"></li></ul><h2 id="\u56FE\u7684\u5B58\u50A8" tabindex="-1">\u56FE\u7684\u5B58\u50A8 <a class="header-anchor" href="#\u56FE\u7684\u5B58\u50A8" aria-hidden="true">#</a></h2><h3 id="\u90BB\u63A5\u77E9\u9635" tabindex="-1">\u90BB\u63A5\u77E9\u9635 <a class="header-anchor" href="#\u90BB\u63A5\u77E9\u9635" aria-hidden="true">#</a></h3><p>\u521B\u5EFA<strong>\u9876\u70B9\u96C6</strong>\u548C\u521B\u5EFA<strong>\u5173\u7CFB\u96C6</strong></p><div class="language-cpp"><pre><code><span class="token comment">//\u56FE\u7684\u90BB\u63A5\u77E9\u9635\u5B58\u50A8</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NMAX</span> <span class="token expression"><span class="token number">100</span></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> datatype<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    datatype vexes<span class="token punctuation">[</span>NMAX<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> edge<span class="token punctuation">[</span>NMAX<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>NMAX<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span>e
<span class="token punctuation">}</span>graph<span class="token punctuation">;</span>
graph <span class="token operator">*</span>ga<span class="token punctuation">;</span>
</code></pre></div><p>\u7B97\u6CD5\u601D\u8DEF\uFF1A</p><div class="language-"><pre><code>step1:\u521B\u5EFAga\u7684\u5B58\u50A8\u7A7A\u95F4
step2:\u8F93\u5165\u8FB9\u6570ga-&gt;e
step3:\u8F93\u5165\u9876\u70B9\u6570ga-&gt;n
step4:\u521D\u59CB\u5316\u9876\u70B9\u96C6ga-&gt;vexes
	foreach k in (1~ga-&gt;n)
		\u8F93\u5165\u9876\u70B9\u7684\u6570\u636Edata
		ga-&gt;vexes[k]=data
step5:\u521D\u59CB\u5316\u90BB\u63A5\u77E9\u9635ga-&gt;edges\u4E3A\u51680
step6:\u521B\u5EFA\u8FB9\u96C6
	foreach k in (1~ga-&gt;e)
		\u8F93\u5165\u8FB9\u7684\u9876\u70B9\u5076\u5BF9\uFF1A\uFF08i,j\uFF09
		ga-&gt;edges[i][j]=1
		ga-&gt;edges[j][i]=1
step7:return ga
</code></pre></div><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609194316082.png" alt="image-20210609194316082" style="zoom:50%;"><h3 id="\u90BB\u63A5\u8868" tabindex="-1">\u90BB\u63A5\u8868 <a class="header-anchor" href="#\u90BB\u63A5\u8868" aria-hidden="true">#</a></h3><p>\u9876\u70B9\u8868</p><p><strong>\u8FB9\u8868\uFF1A\u8FB9\u8868\u7ED3\u70B9\u4FDD\u5B58\u7740\u4E0E\u67D0\u9876\u70B9\u5173\u8054\u7684\u53E6\u4E00\u9876\u70B9\u548C\u6307\u5411\u4E0B\u4E00\u8868\u7ED3\u70B9\u7684\u6307\u9488</strong></p><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609194419001.png" alt="image-20210609194419001" style="zoom:50%;"><p><strong>\u90BB\u63A5\u8868\u7ED3\u6784</strong>\u5B9A\u4E49\uFF1A</p><div class="language-cpp"><pre><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NMAX</span> <span class="token expression"><span class="token number">100</span>  </span><span class="token comment">//\u9876\u70B9\u7684\u6700\u5927\u6570</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">node</span><span class="token punctuation">{</span>  <span class="token comment">//\u8FB9\u8868\u7ED3\u70B9</span>
    <span class="token keyword">int</span> vertex<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">node</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>edgenode<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>  <span class="token comment">//\u9876\u70B9\u8868\u7ED3\u70B9</span>
    vextype data<span class="token punctuation">;</span>
    edgenode<span class="token operator">*</span> head<span class="token punctuation">;</span>  <span class="token comment">//\u8FB9\u8868\u5934\u6307\u9488</span>
<span class="token punctuation">}</span>vexnode<span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>  <span class="token comment">//\u56FE\u7684\u5B9A\u4E49</span>
    vexnode vexes<span class="token punctuation">[</span>NMAX<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//\u9876\u70B9\u8868</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span> e<span class="token punctuation">;</span>  <span class="token comment">//\u9876\u70B9\u6570\u3001\u8FB9\u6570</span>
<span class="token punctuation">}</span>graph<span class="token punctuation">;</span>
graph <span class="token operator">*</span>ga<span class="token punctuation">;</span>
</code></pre></div><p>\u7B97\u6CD5\u601D\u8DEF\uFF1A</p><div class="language-python"><pre><code><span class="token comment">#\u521D\u59CB\u5316\u9876\u70B9\u8868ga-&gt;vexes</span>
<span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">~</span>ga<span class="token operator">-</span><span class="token operator">&gt;</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8F93\u5165\u6570\u636Edata</span>
    ga<span class="token operator">-</span><span class="token operator">&gt;</span>vexes<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
    ga<span class="token operator">-</span><span class="token operator">&gt;</span>vexes<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">.</span>head <span class="token operator">=</span> NULL
<span class="token comment">#\u521B\u5EFA\u8FB9\u8868\u96C6</span>
<span class="token keyword">for</span> k <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">~</span>ga<span class="token operator">-</span><span class="token operator">&gt;</span>e<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8F93\u5165\u8FB9\u7684\u9876\u70B9\u5BF9\uFF08i\uFF0Cj\uFF09</span>
    <span class="token comment"># \u5C06\u9876\u70B9j\u6DFB\u52A0\u5230\u9876\u70B9i\u7684\u8FB9\u8868\u4E2D</span>
    	<span class="token comment"># \u751F\u6210\u8FB9\u8868\u7ED3\u70B9p</span>
        <span class="token comment"># \u7ED3\u70B9\u6570\u636E\u57DF\u8D4B\u503C\uFF1Ap-&gt;vertex=j</span>
        <span class="token comment"># \u5728\u8FB9\u8868\u4E2D\u52A0\u5165\u7ED3\u70B9p</span>
        	<span class="token comment"># p-&gt;next=ga-&gt;vertex[i].head</span>
            <span class="token comment"># ga-&gt;vertex[i].head=p</span>
    <span class="token comment"># \u5C06\u9876\u70B9i\u6DFB\u52A0\u5230\u9876\u70B9j\u7684\u8FB9\u8868\u4E2D</span>
</code></pre></div><h3 id="\u5341\u5B57\u94FE\u8868" tabindex="-1">\u5341\u5B57\u94FE\u8868 <a class="header-anchor" href="#\u5341\u5B57\u94FE\u8868" aria-hidden="true">#</a></h3><div class="language-cpp"><pre><code><span class="token comment">//\u8FB9\u8868\u7ED3\u70B9</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">arctype</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> tailvex<span class="token punctuation">,</span> headvex<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">arctype</span> <span class="token operator">*</span>hlink<span class="token punctuation">,</span><span class="token operator">*</span>tlink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>arclink<span class="token punctuation">;</span>

<span class="token comment">//\u9876\u70B9\u8868\u7ED3\u70B9</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">vnode</span><span class="token punctuation">{</span>
    vertex data<span class="token punctuation">;</span>
    arclink <span class="token operator">*</span>firstin<span class="token punctuation">,</span> <span class="token operator">*</span>firstout<span class="token punctuation">;</span>
<span class="token punctuation">}</span>ortholistNode
ortholistNode graph<span class="token punctuation">[</span>NMAX<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20220120202043847.png" alt="image-20220120202043847"></p><h3 id="\u8FB9\u96C6\u6570\u7EC4" tabindex="-1">\u8FB9\u96C6\u6570\u7EC4 <a class="header-anchor" href="#\u8FB9\u96C6\u6570\u7EC4" aria-hidden="true">#</a></h3><div class="language-cpp"><pre><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> fromvex<span class="token punctuation">;</span><span class="token comment">//\u8FB9\u7684\u8D77\u70B9</span>
    <span class="token keyword">int</span> endvex<span class="token punctuation">;</span><span class="token comment">//\u8FB9\u7684\u7EC8\u70B9</span>
    <span class="token keyword">int</span> weight<span class="token punctuation">;</span><span class="token comment">//\u8FB9\u7684\u6743\u503C</span>
<span class="token punctuation">}</span>EDGE<span class="token punctuation">;</span>
EDGE edgeet<span class="token punctuation">[</span>MaxEDGEnUM<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20220120202023107.png" alt="image-20220120202023107"></p><h2 id="\u56FE\u7684\u904D\u5386" tabindex="-1">\u56FE\u7684\u904D\u5386 <a class="header-anchor" href="#\u56FE\u7684\u904D\u5386" aria-hidden="true">#</a></h2><p>\u8981\u6C42\uFF1A<strong>\u65E0\u91CD\u590D\u3001\u65E0\u9057\u6F0F</strong>\u3002</p><p>\u5173\u952E\u70B9\uFF1A</p><ul><li>\u56FE\u4E2D\u53EF\u80FD<strong>\u5B58\u5728\u56DE\u8DEF</strong>\u3002</li><li>\u9876\u70B9\u53EF\u80FD\u4E0E\u5176\u5B83\u9876\u70B9\u76F8\u901A\uFF0C\u8BBF\u95EE\u5B8C\u67D0\u9876\u70B9\u540E\uFF0C\u53EF\u80FD\u6CBF\u7740\u67D0\u4E9B\u8FB9\u56DE\u5230\u66FE\u7ECF\u8BBF\u95EE\u8FC7\u7684\u9876\u70B9\u3002</li><li>\u4E3A<strong>\u907F\u514D\u91CD\u590D\u8BBF\u95EE</strong>\uFF0C\u53EF\u8BBE\u8F85\u52A9\u6570\u7EC4visited[] <ul><li>\u5C06\u5176\u521D\u59CB\u5316\u4E3A0.</li><li>\u904D\u5386\u65F6\uFF0C\u5982\u679C\u67D0\u9876\u70B9i\u88AB\u8BBF\u95EE\uFF0C\u5C06visited[i]\u7F6E\u4E3A1\u3002</li><li>\u4EE5\u6B64\u9632\u6B62\u9876\u70B9i\u88AB\u591A\u6B21\u8BBF\u95EE\u3002</li></ul></li></ul><p><strong>\u6DF1\u5EA6\u4F18\u5148</strong>(\u9012\u5F52\u89E3\u6CD5)\uFF1A</p><div class="language-cpp"><pre><code><span class="token comment">//\u90BB\u63A5\u77E9\u9635\uFF1A</span>
<span class="token keyword">for</span> k <span class="token function">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">~</span>n<span class="token punctuation">)</span>
    visied<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token function">DFS</span><span class="token punctuation">(</span>ga<span class="token punctuation">,</span> vi<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">visit</span><span class="token punctuation">(</span>vi<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BBF\u95EE\u7ED3\u70B9vi</span>
    visited<span class="token punctuation">[</span>vi<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> k <span class="token function">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">~</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>ga<span class="token operator">-&gt;</span>edges<span class="token punctuation">[</span>vi<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>visited<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">DFS</span><span class="token punctuation">(</span>ga<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-cpp"><pre><code><span class="token comment">//\u90BB\u63A5\u8868\uFF1A</span>
<span class="token keyword">for</span> k <span class="token function">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">~</span>n<span class="token punctuation">)</span>
    visied<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token function">DFS</span><span class="token punctuation">(</span>ga<span class="token punctuation">,</span> vi<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">visit</span><span class="token punctuation">(</span>vi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    visited<span class="token punctuation">[</span>vi<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    p<span class="token operator">=</span><span class="token punctuation">(</span>ga<span class="token operator">-&gt;</span>vexes<span class="token punctuation">[</span>vi<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>p<span class="token operator">-&gt;</span>vertex<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">DFS</span><span class="token punctuation">(</span>ga<span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>vertex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        p<span class="token operator">=</span>p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6DF1\u5EA6\u4F18\u5148\uFF08\u6808\uFF09\uFF1A</p><div class="language-"><pre><code>step1:\u8BBE\u521D\u59CB\u72B6\u6001\uFF1A\u56FE\u4E2D\u6240\u6709\u9876\u70B9\u90FD\u6CA1\u88AB\u8BBF\u95EE\u8FC7
foreach i in (1~n)
	visited[i] = 0;
step2:\u521D\u59CB\u5316\u6808stack
step3:c=r,push(stack,c) //r\u4E3A\u51FA\u53D1\u9876\u70B9\u7684\u7F16\u53F7
step4:\u8BBF\u95EE\u9876\u70B9vc,\u4EE4visited[c]=1
step5:\u627E\u5230\u5E76\u8BBF\u95EE\u4E0E\u9876\u70B9vc\u90BB\u63A5\uFF0C\u4F46\u672A\u88AB\u8BBF\u95EE\u8FC7\u7684\u9876\u70B9v_j
for(j:1~n)
	if(ga[c][j] == 1 and visited[j] == 0)
		c = j, push(stack, j)\u8F6Cstep4
step6:\u5F53vc\u6240\u6709\u7684\u90BB\u63A5\u70B9\u5747\u88AB\u8BBF\u95EE\u8FC7\uFF0C\u5219\u9000\u56DE\u5230\u6700\u8FD1\u88AB\u8BBF\u95EE\u7684\u524D\u4E00\u9876\u70B9\u3002
	if(!emptystack(stack))
		c=pop(stack),\u8F6Cstep5
    else return;
</code></pre></div><p><strong>\u5E7F\u5EA6\u4F18\u5148</strong>\uFF1A\u7C7B\u4F3C\u4E8E<strong>\u6811\u7684\u5C42\u6B21\u904D\u5386</strong>\uFF0C\u4F7F\u7528<strong>\u961F\u5217</strong>\u8F85\u52A9\u5B58\u50A8\u3002</p><p><strong>\u56FE\u7684\u8FDE\u901A\u6027</strong>\uFF1A\u5982\u679C\u904D\u5386\u5B8C\u6210\u65F6DFS\u6216BFS\u4EC5\u8C03\u7528\u4E00\u6B21\uFF0C\u5219\u56FE\u662F\u8FDE\u901A\u56FE\uFF1B\u82E5\u88AB\u8C03\u7528\u591A\u6B21\uFF0C\u5219\u56FE\u662F\u975E\u8FDE\u901A\u56FE\uFF0C\u5206\u522B\u8BBF\u95EE\u591A\u4E2A\u8FDE\u901A\u5206\u91CF\u3002</p><h2 id="\u56FE\u7684\u62D3\u6251\u6392\u5E8F" tabindex="-1">\u56FE\u7684\u62D3\u6251\u6392\u5E8F <a class="header-anchor" href="#\u56FE\u7684\u62D3\u6251\u6392\u5E8F" aria-hidden="true">#</a></h2><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609210740434.png" alt="image-20210609210740434" style="zoom:50%;"><p><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20220120202006590.png" alt="image-20220120202006590"></p><p>AOV\uFF1A</p><ul><li>\u9876\u70B9\u8868\u793A\u6D3B\u52A8\uFF0C\u5F27\u8868\u793A\u6D3B\u52A8\u95F4\u7684\u5148\u540E\u5173\u7CFB\u3002</li><li>AOV\u7F51\u4E2D\u4E0D\u80FD\u6709\u56DE\u8DEF\uFF0C\u56DE\u8DEF\u610F\u5473\u7740\u67D0\u9879\u6D3B\u52A8\u4EE5\u81EA\u5DF1\u4E3A\u5148\u51B3\u6761\u4EF6\u3002</li><li>\u6B7B\u9501\u3002</li></ul><p>\u62D3\u6251\u6392\u5E8F\uFF1A</p><ul><li>\u628AAOV\u7F51\u4E2D\u5404\u9876\u70B9\u6309\u5176\u6D3B\u52A8\u7684\u5148\u540E\u5173\u7CFB\uFF0C\u6392\u5217\u6210\u4E00\u4E2A\u7EBF\u6027\u5E8F\u5217\u7684\u8FC7\u7A0B\u3002</li><li>\u62D3\u6251\u5E8F\u5217</li><li>AOV\u7F51\u7528\u90BB\u63A5\u8868\u5B58\u50A8</li><li>\u5728\u90BB\u63A5\u8868\u7684\u8868\u5934\u7ED3\u70B9\u589E\u52A0\u5B58\u653E\u9876\u70B9\u5165\u5EA6\u7684\u57DF\u3002</li><li><strong>\u6808\u6216\u961F\u5217\u5B58\u653E\u5165\u5EA6\u4E3A\u96F6\u7684\u9876\u70B9</strong>\u3002</li></ul><div class="language-"><pre><code>\u62D3\u6251\u6392\u5E8F\uFF1A\u5BF9\u6709n\u4E2A\u9876\u70B9\u7684\u6709\u5411\u56FEga\uFF0C\u4EE5\u90BB\u63A5\u8868\u65B9\u5F0F\u5B58\u50A8\uFF0C\u627E\u51FA\u4E00\u6761\u62D3\u6251\u5E8F\u5217\u3002
step1:\u521D\u59CB\u5316\u6808stack\uFF0C\u4EE4count=0
step2:\u521B\u5EFAga\u7684\u90BB\u63A5\u8868\uFF0C\u521D\u59CB\u5316\u6BCF\u4E2A\u9876\u70B9\u7684\u5165\u5EA6\u4E3A0
step3:\u5C06\u5F53\u524D\u53EF\u5F00\u59CB\u7684\u6D3B\u52A8\u5165\u6808
	foreach k in 1~n
		if(ga-&gt;vexes[k].indegree==0)
			push(stack, k)
step4:while(!empty(stack))
	vi = pop(stack)
	visit(vi),count++
	\u5C06\u540E\u7EED\u6D3B\u52A8\u7684\u5165\u5EA6\u51CF1\uFF0C\u5E76\u8BB0\u5F55\u65B0\u7684\u53EF\u5F00\u59CB\u7684\u6D3B\u52A8\u3002
		p=ga-&gt;vexes[vi].head
		while(p)
			ga-&gt;vexes[p-&gt;data].indegree--
			if(ga-&gt;vexes[p-&gt;data].indegree==0)
				push(stack,p-&gt;data)
            p = p-&gt;next;
step3:\u5982\u4ECD\u6709\u6D3B\u52A8\u672A\u8FDB\u884C\uFF0Creturn FALSE,\u5426\u5219return TRUE
	if(count&lt;n)
		return FALSE;
</code></pre></div><h2 id="\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811" tabindex="-1">\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811 <a class="header-anchor" href="#\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811" aria-hidden="true">#</a></h2><h3 id="\u751F\u6210\u6811" tabindex="-1">\u751F\u6210\u6811 <a class="header-anchor" href="#\u751F\u6210\u6811" aria-hidden="true">#</a></h3><ul><li>\u8FDE\u901A\u56FEG\u7684\u6781\u5C0F\u8FDE\u901A\u5B50\u56FE\uFF0C\u79F0\u4E3A\u56FE\u7684\u751F\u6210\u6811</li><li>\u5305\u542B\u56FE\u4E2D\u6240\u6709\u9876\u70B9</li><li>\u65E0\u56DE\u8DEF <ul><li><strong>n\u4E2A\u9876\u70B9\uFF0C\u53EA\u6709n-1\u6761\u8FB9\u3002</strong></li><li>\u4EFB\u610F\u53BB\u6389\u4E00\u6761\u8FB9\uFF0C\u56FE\u5C06\u53D8\u4E3A\u975E\u8FDE\u901A\u56FE</li><li>\u6DFB\u52A0\u4E00\u6761\u8FB9\uFF0C\u56FE\u4E2D\u5C06\u51FA\u73B0\u56DE\u8DEF</li></ul></li><li><strong>\u542Bn\u4E2A\u9876\u70B9n-1\u7684\u56FE\u4E0D\u4E00\u5B9A\u662F\u6700\u5C0F\u751F\u6210\u6811</strong></li><li>\u6DF1\u5EA6\u4F18\u5148\u751F\u6210\u6811</li><li>\u5E7F\u5EA6\u4F18\u5148\u751F\u6210\u6811</li><li>\u56FE\u7684\u751F\u6210\u6811\u4E0D\u662F\u552F\u4E00\u7684</li><li>\u4ECE\u4E0D\u540C\u7684\u9876\u70B9\u51FA\u53D1\uFF0C\u53EF\u5F97\u5230\u4E0D\u540C\u7684\u751F\u6210\u6811\u3002</li></ul><h3 id="\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811-1" tabindex="-1">\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811 <a class="header-anchor" href="#\u56FE\u7684\u6700\u5C0F\u751F\u6210\u6811-1" aria-hidden="true">#</a></h3><ul><li>\u8FDE\u901A\u7F51\u7EDCG=\uFF08V\uFF0CE\uFF09\u7684\u5404\u8FB9\u5E26\u6743</li><li>\u56E0\u6B64\u5176\u751F\u6210\u6811\u5404\u8FB9\u5E26\u6743</li><li>\u751F\u6210\u6811\u7684\u6743 <ul><li>\u751F\u6210\u6811\u5404\u8FB9\u6743\u503C\u7684\u548C</li></ul></li><li><strong>\u6700\u5C0F\u751F\u6210\u6811\uFF08MST\uFF09</strong><ul><li>\u6743\u503C\u6700\u5C0F\u7684\u751F\u6210\u6811</li></ul></li></ul><h3 id="prim\u7B97\u6CD5" tabindex="-1">PRIM\u7B97\u6CD5 <a class="header-anchor" href="#prim\u7B97\u6CD5" aria-hidden="true">#</a></h3><p>\u521D\u59CBU\u4E2D\u542B\u4EFB\u610F\u4E00\u4E2A\u9876\u70B9u0\uFF0C\u521D\u59CB\u5019\u9009\u8FB9\u96C6<img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609213706268.png" alt="image-20210609213706268" style="zoom:50%;"></p><ul><li>numv=1</li><li>while(numv=1){</li><li>\u200B \u4ECEC\u4E2D\u9009\u6700\u77ED\u8FB9\u5E76\u5165\u8FB9\u96C6E\uFF0C\u70B9\u96C6U</li><li>\u200B numv++</li><li>\u200B \u8C03\u6574\u5019\u9009\u8FB9\u96C6C<img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609214143152.png" alt="image-20210609214143152" style="zoom:50%;"></li><li>}</li></ul><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609214218953.png" alt="image-20210609214218953" style="zoom:50%;"><h3 id="kruskal\u7B97\u6CD5" tabindex="-1">Kruskal\u7B97\u6CD5 <a class="header-anchor" href="#kruskal\u7B97\u6CD5" aria-hidden="true">#</a></h3><p>\u7B97\u6CD5\u601D\u60F3\uFF1A\u6743\u503C\u7531\u5C0F\u5230\u5927\u5F00\u59CB\u6765\u8FDE\u63A5\uFF0C\u8FDE\u901A\u7684\u4E0D\u8981\uFF0C\u76F4\u5230\u751F\u6210\u751F\u6210\u6811\uFF0C\u5373\u6700\u5C0F\u751F\u6210\u6811\u3002</p><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609214529186.png" alt="image-20210609214529186" style="zoom:50%;"><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20210609214547290.png" alt="image-20210609214547290" style="zoom:50%;">`,58),o=[e];function c(l,i,u,r,k,d){return a(),s("div",null,o)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
