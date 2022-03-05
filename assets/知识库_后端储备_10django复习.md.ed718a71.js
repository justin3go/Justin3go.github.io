import{_ as n,c as s,o as a,b as p}from"./app.bc4d709e.js";const d='{"title":"4,restful\u6848\u4F8B(\u4E86\u89E3)","description":"","frontmatter":{},"headers":[],"relativePath":"\u77E5\u8BC6\u5E93/\u540E\u7AEF\u50A8\u5907/10django\u590D\u4E60.md","lastUpdated":1643984183500}',t={},e=p(`<h4 id="_4-restful\u6848\u4F8B-\u4E86\u89E3" tabindex="-1">4,restful\u6848\u4F8B(\u4E86\u89E3) <a class="header-anchor" href="#_4-restful\u6848\u4F8B-\u4E86\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528restful\u98CE\u683C\u8BBE\u8BA1\u56FE\u4E66\u589E\u5220\u6539\u67E5\u7684\u6848\u4F8B</p></li><li><p>\u6848\u4F8B:</p><table><thead><tr><th>\u529F\u80FD</th><th>\u8DEF\u5F84</th><th>\u8BF7\u6C42\u65B9\u5F0F</th><th>\u54CD\u5E94\u72B6\u6001\u7801</th></tr></thead><tbody><tr><td>\u83B7\u53D6\u6240\u6709\u7684\u4E66\u7C4D</td><td>/books</td><td>get</td><td>200</td></tr><tr><td>\u521B\u5EFA\u4E66\u7C4D</td><td>/books</td><td>post</td><td>201</td></tr><tr><td>\u83B7\u53D6\u5355\u4E2A\u4E66\u7C4D</td><td id="">/books/</td><td>get</td><td>200</td></tr><tr><td>\u4FEE\u6539\u4E66\u7C4D</td><td id="">/books/</td><td>put</td><td>201</td></tr><tr><td>\u5220\u9664\u4E66\u7C4D</td><td id="">/books/</td><td>delete</td><td>204</td></tr></tbody></table></li></ul><h4 id="_5-\u6570\u636E\u51C6\u5907" tabindex="-1">5,\u6570\u636E\u51C6\u5907 <a class="header-anchor" href="#_5-\u6570\u636E\u51C6\u5907" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5C06\u56FE\u4E66\u548C\u82F1\u96C4\u7684\u4FE1\u606F\u6DFB\u52A0\u5230\u6570\u636E\u4E2D</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u521B\u5EFA\u9879\u76EE, \u521B\u5EFAbook\u5B50\u5E94\u7528</p></li><li><p>2, \u5728\u5B50\u5E94\u7528\u4E2D\u5B9A\u4E49\u6A21\u578B\u7C7B</p><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models

<span class="token comment"># \u5B9A\u4E49\u56FE\u4E66\u6A21\u578B\u7C7BBookInfo</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfo</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    btitle <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u540D\u79F0&#39;</span><span class="token punctuation">)</span>
    bpub_date <span class="token operator">=</span> models<span class="token punctuation">.</span>DateField<span class="token punctuation">(</span>verbose_name<span class="token operator">=</span><span class="token string">&#39;\u53D1\u5E03\u65E5\u671F&#39;</span><span class="token punctuation">)</span>
    bread <span class="token operator">=</span> models<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u9605\u8BFB\u91CF&#39;</span><span class="token punctuation">)</span>
    bcomment <span class="token operator">=</span> models<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u8BC4\u8BBA\u91CF&#39;</span><span class="token punctuation">)</span>
    is_delete <span class="token operator">=</span> models<span class="token punctuation">.</span>BooleanField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u903B\u8F91\u5220\u9664&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        db_table <span class="token operator">=</span> <span class="token string">&#39;tb_books&#39;</span>  <span class="token comment"># \u6307\u660E\u6570\u636E\u5E93\u8868\u540D</span>
        verbose_name <span class="token operator">=</span> <span class="token string">&#39;\u56FE\u4E66&#39;</span>  <span class="token comment"># \u5728admin\u7AD9\u70B9\u4E2D\u663E\u793A\u7684\u540D\u79F0</span>
        verbose_name_plural <span class="token operator">=</span> verbose_name  <span class="token comment"># \u663E\u793A\u7684\u590D\u6570\u540D\u79F0</span>

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;\u5B9A\u4E49\u6BCF\u4E2A\u6570\u636E\u5BF9\u8C61\u7684\u663E\u793A\u4FE1\u606F&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>btitle

<span class="token comment"># \u5B9A\u4E49\u82F1\u96C4\u6A21\u578B\u7C7BHeroInfo</span>
<span class="token keyword">class</span> <span class="token class-name">HeroInfo</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    GENDER_CHOICES <span class="token operator">=</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    hname <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u540D\u79F0&#39;</span><span class="token punctuation">)</span>
    hgender <span class="token operator">=</span> models<span class="token punctuation">.</span>SmallIntegerField<span class="token punctuation">(</span>choices<span class="token operator">=</span>GENDER_CHOICES<span class="token punctuation">,</span> default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u6027\u522B&#39;</span><span class="token punctuation">)</span>
    hcomment <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">,</span> null<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u63CF\u8FF0\u4FE1\u606F&#39;</span><span class="token punctuation">)</span>
    hbook <span class="token operator">=</span> models<span class="token punctuation">.</span>ForeignKey<span class="token punctuation">(</span>BookInfo<span class="token punctuation">,</span> on_delete<span class="token operator">=</span>models<span class="token punctuation">.</span>CASCADE<span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u56FE\u4E66&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># \u5916\u952E</span>
    is_delete <span class="token operator">=</span> models<span class="token punctuation">.</span>BooleanField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> verbose_name<span class="token operator">=</span><span class="token string">&#39;\u903B\u8F91\u5220\u9664&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        db_table <span class="token operator">=</span> <span class="token string">&#39;tb_heros&#39;</span>
        verbose_name <span class="token operator">=</span> <span class="token string">&#39;\u82F1\u96C4&#39;</span>
        verbose_name_plural <span class="token operator">=</span> verbose_name

    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>hname
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></li><li><p>3, \u6CE8\u518C\u5B50\u5E94\u7528, \u8BBE\u7F6E\u6570\u636E\u5E93\u914D\u7F6E</p></li><li><p>4, \u521B\u5EFA\u6570\u636E\u5E93, \u8FC1\u79FB</p></li></ul></li></ul><h4 id="_6-\u67E5\u8BE2\u6240\u6709\u6570\u636E-\u7406\u89E3" tabindex="-1">6,\u67E5\u8BE2\u6240\u6709\u6570\u636E(\u7406\u89E3) <a class="header-anchor" href="#_6-\u67E5\u8BE2\u6240\u6709\u6570\u636E-\u7406\u89E3" aria-hidden="true">#</a></h4><blockquote><p>\u67E5\u8BE2\u548C\u521B\u5EFA\u90FD\u5C5E\u4E8E\u5217\u8868\u89C6\u56FE\uFF0C\u800C\u4EE3\u5E26\u53C2\u6570\u7684\u8BF7\u6C42\u5C5E\u4E8E\u8BE6\u60C5\u89C6\u56FE</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u7F16\u5199\u89C6\u56FE\u67E5\u8BE2\u6240\u6709\u7684\u4E66\u7C4D\u4FE1\u606F</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>http.JsonResponse(books_list,safe=<strong>False</strong>) <ul><li>safe=False\u5141\u8BB8\u975E\u5B57\u5178\u6570\u636E\u53EF\u4EE5\u88AB\u8FD4\u56DE</li></ul></li></ul></li><li><p>\u4EE3\u7801</p><div class="language-python line-numbers-mode"><pre><code><span class="token comment"># /book/views.py</span>
<span class="token comment"># \u5217\u8868\u89C6\u56FE</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoView</span><span class="token punctuation">(</span>View<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&#39;&#39;&#39;\u83B7\u53D6\u6240\u6709\u4E66\u7C4D&#39;&#39;&#39;</span>
        <span class="token comment"># 1.\u67E5\u8BE2\u6240\u6709\u7684\u4E66\u7C4D</span>
        books <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 2.\u6570\u636E\u8F6C\u6362</span>
        book_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> book <span class="token keyword">in</span> books<span class="token punctuation">:</span>
            book_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span>
                <span class="token string">&#39;btitle&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>btitle<span class="token punctuation">,</span>
                <span class="token string">&#39;bpub_date&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bpub_date<span class="token punctuation">,</span>
                <span class="token string">&#39;bread&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bread<span class="token punctuation">,</span>
                <span class="token string">&#39;bcomment&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bcomment<span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            book_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>book_dict<span class="token punctuation">)</span>

        <span class="token comment"># 3.\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token comment"># safe=False\u53EF\u4EE5\u5B89\u5168\u8FD4\u56DE\u975E\u5B57\u5178</span>
        <span class="token comment"># json_dumps_params={&#39;ensure_ascii&#39;: False}\u53EF\u4EE5\u89E3\u51B3\u8FD4\u56DE\u7684\u4E2D\u6587\u6570\u636E\u4E3A\u4E71\u7801</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span>JsonResponse<span class="token punctuation">(</span>book_list<span class="token punctuation">,</span> safe<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> json_dumps_params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;ensure_ascii&#39;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    
other<span class="token punctuation">:</span>
<span class="token comment"># /book/urls</span>
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">&#39;books/&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>BookInfoView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
<span class="token comment"># /project/urls</span>
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;admin/&#39;</span><span class="token punctuation">,</span> admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>urls<span class="token punctuation">)</span><span class="token punctuation">,</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> include<span class="token punctuation">(</span><span class="token string">&#39;book.urls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></li></ul><h4 id="_7-\u521B\u5EFA\u5BF9\u8C61-\u7406\u89E3" tabindex="-1">7,\u521B\u5EFA\u5BF9\u8C61(\u7406\u89E3) <a class="header-anchor" href="#_7-\u521B\u5EFA\u5BF9\u8C61-\u7406\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u6DFB\u52A0\u4E66\u7C4D\u5BF9\u8C61\u5230\u6570\u636E\u5E93\u4E2D</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>book = BookInfo.objects.create(**data_dict)</li></ul></li><li><p>\u5B8C\u6574\u4EE3\u7801</p><div class="language-python line-numbers-mode"><pre><code><span class="token comment"># \u8BF7\u6C42\u7684\u65F6\u5019\u53EA\u9700\u8981\u4FEE\u6539\u6E05\u8BF7\u6C42\u65B9\u5F0F\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8BF7\u6C42\u8DEF\u5F84\u662F\u4E0D\u53D8\u7684</span>
<span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;\u521B\u5EFA\u5355\u672C\u4E66\u7C4D&#39;&#39;&#39;</span>
    <span class="token comment"># 1.\u83B7\u53D6\u53C2\u6570,\u628Ajson\u8F6C\u6362\u4E3A\u5B57\u5178</span>
    dict_data <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>request<span class="token punctuation">.</span>body<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    btitle <span class="token operator">=</span> dict_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;btitle&#39;</span><span class="token punctuation">)</span>
    bpub_date <span class="token operator">=</span> dict_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;bpub_date&#39;</span><span class="token punctuation">)</span>
    bread <span class="token operator">=</span> dict_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;bread&#39;</span><span class="token punctuation">)</span>
    bcomment <span class="token operator">=</span> dict_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;bcomment&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 2.\u6821\u9A8C\u53C2\u6570(\u7701\u7565)</span>

    <span class="token comment"># 3.\u6570\u636E\u5165\u5E93</span>
    book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token operator">**</span>dict_data<span class="token punctuation">)</span>
    <span class="token comment"># 4.\u8FD4\u56DE\u54CD\u5E94</span>
    book_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span>
        <span class="token string">&#39;btitle&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>btitle<span class="token punctuation">,</span>
        <span class="token string">&#39;bpub_date&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bpub_date<span class="token punctuation">,</span>
        <span class="token string">&#39;bread&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bread<span class="token punctuation">,</span>
        <span class="token string">&#39;bcomment&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bcomment<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> http<span class="token punctuation">.</span>JsonResponse<span class="token punctuation">(</span>book_dict<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li></ul><h4 id="_8-\u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" tabindex="-1">8,\u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61(\u7406\u89E3) <a class="header-anchor" href="#_8-\u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u83B7\u53D6\u6307\u5B9A\u4E66\u7C4D\u5BF9\u8C61</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>book = BookInfo.objects.get(id=book_id)</li></ul></li><li><p>\u5B8C\u6574\u4EE3\u7801</p><div class="language-python line-numbers-mode"><pre><code><span class="token comment"># \u8BE6\u60C5\u89C6\u56FE</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoDetailView</span><span class="token punctuation">(</span>View<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 1.\u901A\u8FC7pk\u83B7\u53D6\u5BF9\u8C61</span>
        book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
        <span class="token comment"># 2.\u8F6C\u6362\u6570\u636E</span>
        book_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span>
            <span class="token string">&#39;btitle&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>btitle<span class="token punctuation">,</span>
            <span class="token string">&#39;bpub_date&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bpub_date<span class="token punctuation">,</span>
            <span class="token string">&#39;bread&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bread<span class="token punctuation">,</span>
            <span class="token string">&#39;bcomment&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bcomment<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token comment"># 3.\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span>JsonResponse<span class="token punctuation">(</span>book_dict<span class="token punctuation">)</span>
    
<span class="token comment"># \u6CE8\u610F\u8FD9\u91CC\u7684url\u2014\u2014path</span>
urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">&#39;^books/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>BookInfoView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">&#39;^books/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>BookInfoDetailView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
<span class="token comment"># \u5176\u4E2D^\u4EE3\u8868\u8D77\u59CB\u7B26\uFF0C$\u4EE3\u8868\u7ED3\u675F\u7B26</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li></ul><h4 id="_9-\u4FEE\u6539\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" tabindex="-1">9,\u4FEE\u6539\u5355\u4E2A\u5BF9\u8C61(\u7406\u89E3) <a class="header-anchor" href="#_9-\u4FEE\u6539\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4FEE\u6539\u6307\u5B9A\u4E66\u7C4D\u5BF9\u8C61</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>BookInfo.objects.filter(id=book_id).update(**data_dict)</li></ul></li><li><p>\u5B8C\u6574\u4EE3\u7801</p><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 1.\u83B7\u53D6\u53C2\u6570</span>
    dict_data <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>request<span class="token punctuation">.</span>body<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
    <span class="token comment"># 2.\u6821\u9A8C\u53C2\u6570</span>

    <span class="token comment"># 3.\u6570\u636E\u5165\u5E93</span>
    BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span><span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token operator">**</span>dict_data<span class="token punctuation">)</span>
    <span class="token comment"># \u628A\u66F4\u65B0\u4E4B\u540E\u7684\u6570\u636E\u62FF\u51FA\u6765\u8FD4\u56DE</span>
    book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
    book_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;id&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">,</span>
        <span class="token string">&#39;btitle&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>btitle<span class="token punctuation">,</span>
        <span class="token string">&#39;bpub_date&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bpub_date<span class="token punctuation">,</span>
        <span class="token string">&#39;bread&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bread<span class="token punctuation">,</span>
        <span class="token string">&#39;bcomment&#39;</span><span class="token punctuation">:</span> book<span class="token punctuation">.</span>bcomment<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 4.\u8FD4\u56DE\u54CD\u5E94</span>
    <span class="token keyword">return</span> http<span class="token punctuation">.</span>JsonResponse<span class="token punctuation">(</span>book_dict<span class="token punctuation">,</span> status<span class="token operator">=</span><span class="token number">201</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li></ul><h4 id="_10-\u5220\u9664\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" tabindex="-1">10,\u5220\u9664\u5355\u4E2A\u5BF9\u8C61(\u7406\u89E3) <a class="header-anchor" href="#_10-\u5220\u9664\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5220\u9664\u6307\u5B9A\u4E66\u7C4D\u5BF9\u8C61</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>BookInfo.objects.get(id=book_id).delete()</li></ul></li><li><p>\u4EE3\u7801</p></li><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 1.\u83B7\u53D6\u6570\u636E</span>
    book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span>pk<span class="token punctuation">)</span>
    <span class="token comment"># 2.\u5220\u9664\u6570\u636E</span>
    book<span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 3.\u8FD4\u56DE\u54CD\u5E94</span>
    <span class="token keyword">return</span> http<span class="token punctuation">.</span>HttpResponse<span class="token punctuation">(</span>status<span class="token operator">=</span><span class="token number">204</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul>`,15),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var _=n(t,[["render",c]]);export{d as __pageData,_ as default};
