import{_ as n,c as s,o as a,a as e}from"./app.f0844215.js";const k='{"title":"9,\u5206\u9875Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"\u77E5\u8BC6\u5E93/\u540E\u7AEF\u50A8\u5907/21url\u53EF\u9009\u53C2\u6570\u8BBE\u7F6E.md","lastUpdated":1643984000085}',p={},l=e(`<h4 id="_9-\u5206\u9875pagination" tabindex="-1">9,\u5206\u9875Pagination <a class="header-anchor" href="#_9-\u5206\u9875pagination" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u6587\u6863, \u8BBE\u7F6E\u5206\u9875\u8FD4\u56DE</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u914D\u7F6E</p><ul><li><div class="language-python line-numbers-mode"><pre><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  
    <span class="token comment">#5,\u5168\u5C40\u5206\u9875</span>
    <span class="token string">&#39;DEFAULT_PAGINATION_CLASS&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;rest_framework.pagination.LimitOffsetPagination&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;PAGE_SIZE&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li><li><p>2, \u5C40\u90E8\u914D\u7F6E</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    
    <span class="token comment">#5,\u5C40\u90E8\u5206\u9875</span>
    <span class="token comment"># pagination_class = LimitOffsetPagination # ?limit=100 \u6216\u8005 ?offset=400&amp;limit=100</span>
    pagination_class <span class="token operator">=</span> PageNumberPagination <span class="token comment"># ?page=4</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_10-\u81EA\u5B9A\u4E49\u5206\u9875\u7C7B" tabindex="-1">10, \u81EA\u5B9A\u4E49\u5206\u9875\u7C7B <a class="header-anchor" href="#_10-\u81EA\u5B9A\u4E49\u5206\u9875\u7C7B" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u81EA\u5B9A\u4E49\u7C7B, \u5B9E\u73B0\u6307\u5B9A\u5206\u9875\u5927\u5C0F\u6548\u679C</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment">#\u81EA\u5B9A\u4E49\u5206\u9875\u5BF9\u8C61</span>
<span class="token keyword">class</span> <span class="token class-name">MyPageNumberPagination</span><span class="token punctuation">(</span>PageNumberPagination<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment">#1,\u9ED8\u8BA4\u7684\u5927\u5C0F</span>
    page_size <span class="token operator">=</span> <span class="token number">3</span>

    <span class="token comment">#2,\u524D\u7AEF\u53EF\u4EE5\u6307\u5B9A\u9875\u9762\u5927\u5C0F</span>
    page_size_query_param <span class="token operator">=</span> <span class="token string">&#39;page_size&#39;</span>

    <span class="token comment">#3,\u9875\u9762\u7684\u6700\u5927\u5927\u5C0F</span>
    max_page_size <span class="token operator">=</span> <span class="token number">5</span>


<span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#6,\u81EA\u5B9A\u4E49\u5206\u9875\u5BF9\u8C61</span>
    pagination_class <span class="token operator">=</span> MyPageNumberPagination <span class="token comment"># ?page=4 \u6216\u8005 ?page=4&amp;page_size=100</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_11-\u8FC7\u6EE4filtering" tabindex="-1">11,\u8FC7\u6EE4Filtering <a class="header-anchor" href="#_11-\u8FC7\u6EE4filtering" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u6839\u636E\u6587\u6863\u914D\u7F6E,\u8FDB\u884C\u8FC7\u6EE4\u6570\u636E\u83B7\u53D6</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B89\u88C5\u6269\u5C55django-filters</p><ul><li>pip install django-filter</li></ul></li><li><p>2, \u6CE8\u518C\u5B50\u5E94\u7528</p><ul><li><div class="language-"><pre><code>INSTALLED_APPS = [
    ...
    &#39;django_filters&#39;,
]
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></li><li><p>3, \u5168\u5C40\u914D\u7F6E</p><ul><li><div class="language-python line-numbers-mode"><pre><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token string">&#39;DEFAULT_FILTER_BACKENDS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;django_filters.rest_framework.DjangoFilterBackend&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></li><li><p>4, \u5168\u5C40\u914D\u7F6E(<a href="http://views.py" target="_blank" rel="noopener noreferrer">views.py</a>)</p><ul><li><div class="language-"><pre><code>class BookInfoModelViewSet(ModelViewSet):
	....
  #7,\u5C40\u90E8\u8FC7\u6EE4
  filter_backends = [DjangoFilterBackend]
  filterset_fields = [&#39;id&#39;, &#39;btitle&#39;,&quot;is_delete&quot;]
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_12-\u6392\u5E8Forderingfilter" tabindex="-1">12,\u6392\u5E8FOrderingFilter <a class="header-anchor" href="#_12-\u6392\u5E8Forderingfilter" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u6587\u6863, \u4F7F\u7528\u6307\u5B9A\u7684\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
      <span class="token comment">#8,\u5C40\u90E8\u6392\u5E8F</span>
    filter_backends <span class="token operator">=</span> <span class="token punctuation">[</span>filters<span class="token punctuation">.</span>OrderingFilter<span class="token punctuation">]</span> <span class="token comment"># \u5BFC\u5305\u8DEF\u5F84: from rest_framework import filters</span>
    
    ordering_fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;btitle&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;bread&#39;</span><span class="token punctuation">]</span> <span class="token comment">#\u67E5\u8BE2\u683C\u5F0F: ?ordering=-bread,id</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li></ul></li></ul>`,8),t=[l];function i(r,o,c,u,b,m){return a(),s("div",null,t)}var _=n(p,[["render",i]]);export{k as __pageData,_ as default};
