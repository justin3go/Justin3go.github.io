import{_ as n,c as s,o as a,a as p}from"./app.f0844215.js";const d='{"title":"5,\u8BA4\u8BC1Authentication","description":"","frontmatter":{},"headers":[],"relativePath":"\u77E5\u8BC6\u5E93/\u540E\u7AEF\u50A8\u5907/20\u6743\u9650\u8BBE\u7F6E.md","lastUpdated":1643983994795}',e={},t=p(`<h4 id="_5-\u8BA4\u8BC1authentication" tabindex="-1">5,\u8BA4\u8BC1Authentication <a class="header-anchor" href="#_5-\u8BA4\u8BC1authentication" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863, \u914D\u7F6E\u8BA4\u8BC1\u5185\u5BB9</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u914D\u7F6E(<a href="http://setteings.py" target="_blank" rel="noopener noreferrer">setteings.py</a>)</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment"># DRF\u914D\u7F6E\u4FE1\u606F</span>
REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">#1,\u5168\u5C40\u8BA4\u8BC1</span>
    <span class="token string">&#39;DEFAULT_AUTHENTICATION_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;rest_framework.authentication.BasicAuthentication&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u6B64\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u6848\u4F7F\u7528HTTP\u57FA\u672C\u8EAB\u4EFD\u9A8C\u8BC1,\u7528\u4E8E\u6D4B\u8BD5\u4F7F\u7528</span>
        <span class="token string">&#39;rest_framework.authentication.SessionAuthentication&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u81EA\u5DF1\u670D\u52A1\u5668\u8BA4\u8BC1\u7528\u6237</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul></li><li><p>2, \u5C40\u90E8\u914D\u7F6E(<a href="http://views.py" target="_blank" rel="noopener noreferrer">views.py</a>)</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#1,\u5C40\u90E8\u8BA4\u8BC1</span>
    authentication_classes <span class="token operator">=</span> <span class="token punctuation">[</span>SessionAuthentication<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul></li></ul></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>\u5982\u679C\u914D\u7F6E\u4E86\u5168\u5C40\u548C\u5C40\u90E8, \u9ED8\u8BA4\u4F7F\u7528\u5C40\u90E8</li></ul></li></ul><h4 id="_6-\u6743\u9650permissions" tabindex="-1">6,\u6743\u9650Permissions <a class="header-anchor" href="#_6-\u6743\u9650permissions" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863, \u914D\u7F6E\u6743\u9650\u5185\u5BB9</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u6743\u9650\u914D\u7F6E(<a href="http://settings.py" target="_blank" rel="noopener noreferrer">settings.py</a>)</p><ul><li><div class="language-python line-numbers-mode"><pre><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">#1,\u5168\u5C40\u8BA4\u8BC1</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#2,\u5168\u5C40\u6743\u9650</span>
    <span class="token string">&#39;DEFAULT_PERMISSION_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment"># &#39;rest_framework.permissions.IsAuthenticated&#39;, #\u666E\u901A\u7528\u6237</span>
        <span class="token comment"># &#39;rest_framework.permissions.AllowAny&#39;, #\u6240\u6709\u7528\u6237</span>
        <span class="token string">&#39;rest_framework.permissions.IsAdminUser&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u7BA1\u7406\u5458\u6237</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul></li><li><p>2, \u5C40\u90E8\u6743\u9650\u914D\u7F6E(<a href="http://views.py" target="_blank" rel="noopener noreferrer">views.py</a>)</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#1,\u5C40\u90E8\u8BA4\u8BC1</span>
		<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#2,\u5C40\u90E8\u6743\u9650</span>
    <span class="token comment"># permission_classes = [AllowAny]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_7-\u9650\u6D41throttling" tabindex="-1">7,\u9650\u6D41Throttling <a class="header-anchor" href="#_7-\u9650\u6D41throttling" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E, \u9650\u5236\u4E0D\u540C\u7528\u6237\u7684\u8BBF\u95EE\u6B21\u6570</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u914D\u7F6E</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment"># DRF\u914D\u7F6E\u4FE1\u606F</span>
REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">#1,\u5168\u5C40\u8BA4\u8BC1</span>
    <span class="token string">&#39;DEFAULT_AUTHENTICATION_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;rest_framework.authentication.BasicAuthentication&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u6B64\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u6848\u4F7F\u7528HTTP\u57FA\u672C\u8EAB\u4EFD\u9A8C\u8BC1,\u7528\u4E8E\u6D4B\u8BD5\u4F7F\u7528</span>
        <span class="token string">&#39;rest_framework.authentication.SessionAuthentication&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u81EA\u5DF1\u670D\u52A1\u5668\u8BA4\u8BC1\u7528\u6237</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">#2,\u5168\u5C40\u6743\u9650</span>
    <span class="token comment"># &#39;DEFAULT_PERMISSION_CLASSES&#39;: [</span>
    <span class="token comment">#     # &#39;rest_framework.permissions.IsAuthenticated&#39;, #\u666E\u901A\u7528\u6237</span>
    <span class="token comment">#     # &#39;rest_framework.permissions.AllowAny&#39;, #\u6240\u6709\u7528\u6237</span>
    <span class="token comment">#     &#39;rest_framework.permissions.IsAdminUser&#39;, #\u7BA1\u7406\u5458\u6237</span>
    <span class="token comment"># ],</span>

    <span class="token comment">#3,\u5168\u5C40\u9650\u6D41</span>
    <span class="token string">&#39;DEFAULT_THROTTLE_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;rest_framework.throttling.AnonRateThrottle&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u533F\u540D\u7528\u6237</span>
        <span class="token string">&#39;rest_framework.throttling.UserRateThrottle&#39;</span> <span class="token comment"># \u8BA4\u8BC1\u7528\u6237</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;DEFAULT_THROTTLE_RATES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;anon&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;2/minute&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;user&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3/minute&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li></ul></li><li><p>2, \u5C40\u90E8\u914D\u7F6E</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer

    <span class="token comment">#1,\u5C40\u90E8\u8BA4\u8BC1</span>
    <span class="token comment"># authentication_classes = [SessionAuthentication]</span>

    <span class="token comment">#2,\u5C40\u90E8\u6743\u9650</span>
    <span class="token comment"># permission_classes = [AllowAny]</span>

    <span class="token comment">#3,\u5C40\u90E8\u9650\u6D41</span>
    throttle_classes <span class="token operator">=</span> <span class="token punctuation">[</span>AnonRateThrottle<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_8-\u53EF\u9009\u9650\u6D41" tabindex="-1">8, \u53EF\u9009\u9650\u6D41 <a class="header-anchor" href="#_8-\u53EF\u9009\u9650\u6D41" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5B9A\u4E49\u53EF\u9009\u9650\u6D41, \u7528\u5728\u4E0D\u540C\u7684\u7C7B\u89C6\u56FE\u4E2D</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u5B9A\u4E49</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment"># DRF\u914D\u7F6E\u4FE1\u606F</span>
REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">#4,\u53EF\u9009\u9650\u6D41</span>
    <span class="token string">&#39;DEFAULT_THROTTLE_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;rest_framework.throttling.ScopedRateThrottle&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&#39;DEFAULT_THROTTLE_RATES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;downloads&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3/minute&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;uploads&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;5/minute&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li></ul></li><li><p>2, \u5C40\u90E8\u4F7F\u7528</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">TestView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    throttle_scope <span class="token operator">=</span> <span class="token string">&quot;uploads&quot;</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token string">&quot;testing....&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></li></ul></li></ul>`,8),l=[t];function o(c,i,r,u,m,b){return a(),s("div",null,l)}var _=n(e,[["render",o]]);export{d as __pageData,_ as default};
