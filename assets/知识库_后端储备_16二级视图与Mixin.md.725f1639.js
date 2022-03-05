import{_ as n,c as s,o as a,b as p}from"./app.bc4d709e.js";const d='{"title":"9,\u4E8C\u7EA7\u89C6\u56FE,\u5B9E\u73B0\u5217\u8868\u89C6\u56FE","description":"","frontmatter":{},"headers":[],"relativePath":"\u77E5\u8BC6\u5E93/\u540E\u7AEF\u50A8\u5907/16\u4E8C\u7EA7\u89C6\u56FE\u4E0EMixin.md","lastUpdated":1643983982151}',e={},t=p(`<h4 id="_9-\u4E8C\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u5217\u8868\u89C6\u56FE" tabindex="-1">9,\u4E8C\u7EA7\u89C6\u56FE,\u5B9E\u73B0\u5217\u8868\u89C6\u56FE <a class="header-anchor" href="#_9-\u4E8C\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u5217\u8868\u89C6\u56FE" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u901A\u8FC7GenericAPIView\u6539\u5199\u5217\u8868\u89C6\u56FE</p><blockquote><p>\u4E3B\u8981\u5C31\u662F\u628A\u5404\u4E2A\u65B9\u6CD5\u8C03\u7528\u7684\u6A21\u578B\u7C7B\u653E\u5230\u7C7B\u7684\u5C5E\u6027\u4E0A\uFF0C\u8FD9\u6837\u6BD4\u5982\u6362\u6210\u82F1\u96C4\u7684\u65F6\u5019\u53EA\u9700\u8981\u6539\u6539\u7C7B\u5C5E\u6027\u5C31\u53EF\u4EE5\u4E86\uFF0C\u800C\u4E0D\u662F\u5230\u6BCF\u4E2A\u65B9\u6CD5\u91CC\u9762\u5355\u72EC\u4FEE\u6539\uFF0C\u76F8\u5BF9\u4E8E\u4E4B\u524D\u7684\uFF0C\u4EE3\u7801\u8FD8\u6CA1\u6709\u51CF\u5C11\u4F46\u590D\u7528\u6027\u66F4\u597D\uFF1B</p></blockquote></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1,\u5B50\u8DEF\u7531</p><ul><li><div class="language-python line-numbers-mode"><pre><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^generic_apiview_books/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookListGenericAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment">#4,\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u7279\u70B9</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
\u7279\u70B9: 
1, GenericAPIView,\u7EE7\u627F\u81EAAPIView\u7C7B\uFF0C\u4E3A\u5217\u8868\u89C6\u56FE, \u548C\u8BE6\u60C5\u89C6\u56FE,\u6DFB\u52A0\u4E86\u5E38\u7528\u7684\u884C\u4E3A\u548C\u5C5E\u6027\u3002
    \u884C\u4E3A(\u65B9\u6CD5)
        get_queryset
        get_serializer
    
    \u5C5E\u6027
        queryset
        serializer_class

2, \u53EF\u4EE5\u548C\u4E00\u4E2A\u6216\u591A\u4E2Amixin\u7C7B\u914D\u5408\u4F7F\u7528\u3002
&quot;&quot;&quot;</span>

<span class="token comment">#5,\u4F7F\u7528\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u5B9E\u73B0, \u5217\u8868\u89C6\u56FE</span>
<span class="token keyword">class</span> <span class="token class-name">BookListGenericAPIView</span><span class="token punctuation">(</span>GenericAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment">#1,\u63D0\u4F9B\u516C\u5171\u7684\u5C5E\u6027</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer


    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">#1,\u67E5\u8BE2\u6240\u6709\u7684\u4E66\u7C4D</span>
        <span class="token comment"># books = self.queryset</span>
        books <span class="token operator">=</span> self<span class="token punctuation">.</span>get_queryset<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#2,\u5C06\u5BF9\u8C61\u5217\u8868\u8F6C\u6210\u5B57\u5178\u5217\u8868</span>
        <span class="token comment"># serializr = BookInfoModelSerializer(instance=books,many=True)</span>
        <span class="token comment"># serializr = self.serializer_class(instance=books,many=True)</span>
        <span class="token comment"># serializr = self.get_serializer_class()(instance=books,many=True)</span>
        serializr <span class="token operator">=</span> self<span class="token punctuation">.</span>get_serializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>books<span class="token punctuation">,</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

        <span class="token comment">#3,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializr<span class="token punctuation">.</span>data<span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">#1,\u83B7\u53D6\u53C2\u6570</span>
        data_dict <span class="token operator">=</span> request<span class="token punctuation">.</span>data

        <span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668</span>
        <span class="token comment"># serializer = BookInfoModelSerializer(data=data_dict)</span>
        serializer <span class="token operator">=</span> self<span class="token punctuation">.</span>get_serializer<span class="token punctuation">(</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

        <span class="token comment">#3,\u6821\u9A8C,\u5165\u5E93</span>
        serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#4,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_10-\u4E8C\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE" tabindex="-1">10,\u4E8C\u7EA7\u89C6\u56FE,\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE <a class="header-anchor" href="#_10-\u4E8C\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE" aria-hidden="true">#</a></h4><blockquote><p>\u8FD9\u91CC\u7528\u5230\u4E86get_object()\u65B9\u6CD5\uFF0C\u4E0B\u9762\u4F1A\u8BB2\uFF1B\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u56E0\u4E3A\u6E90\u7801\u5DF2\u7ECF\u5199\u6B7B\u4E86\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u56FA\u5B9A\u628A\u4F20\u8FDB\u6765\u7684\u53C2\u6570\u5199\u6210pk\uFF1B</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528GenericAPIView\u6539\u5199\u8BE6\u60C5\u89C6\u56FE</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python line-numbers-mode"><pre><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^generic_apiview_books/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookDetailGenericAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment">#6,\u4F7F\u7528\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u5B9E\u73B0, \u8BE6\u60C5\u89C6\u56FE</span>
<span class="token keyword">class</span> <span class="token class-name">BookDetailGenericAPIView</span><span class="token punctuation">(</span>GenericAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment">#1,\u63D0\u4F9B\u901A\u7528\u5C5E\u6027</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment">#1,\u83B7\u53D6\u4E66\u7C4D</span>
        <span class="token comment"># book = BookInfo.objects.get(id=book_id)</span>
        book <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#\u6839\u636Ebook_id\u5230queryset\u4E2D\u53D6\u51FA\u4E66\u7C4D\u5BF9\u8C61</span>

        <span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
        serializer <span class="token operator">=</span> self<span class="token punctuation">.</span>get_serializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">)</span>

        <span class="token comment">#4,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_200_OK<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment">#1,\u83B7\u53D6\u6570\u636E,\u83B7\u53D6\u5BF9\u8C61</span>
        data_dict <span class="token operator">=</span> request<span class="token punctuation">.</span>data
        book <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
        serializer <span class="token operator">=</span> self<span class="token punctuation">.</span>get_serializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">,</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

        <span class="token comment">#3,\u6821\u9A8C,\u5165\u5E93</span>
        serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#4,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment">#1,\u5220\u9664\u4E66\u7C4D</span>
        self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#2,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_204_NO_CONTENT<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_11-get-object\u65B9\u6CD5" tabindex="-1">11,get_object\u65B9\u6CD5 <a class="header-anchor" href="#_11-get-object\u65B9\u6CD5" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u7406\u89E3get_object\u5982\u4F55\u6839\u636Epk\u5728queryset\u83B7\u53D6\u7684\u5355\u4E2A\u5BF9\u8C61</p></li><li><p>\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u5C5E\u6027\u65B9\u6CD5\u603B\u7ED3</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
\u7279\u70B9: 
1, GenericAPIView,\u7EE7\u627F\u81EAAPIView\u7C7B\uFF0C\u4E3A\u5217\u8868\u89C6\u56FE, \u548C\u8BE6\u60C5\u89C6\u56FE,\u6DFB\u52A0\u4E86\u5E38\u7528\u7684\u884C\u4E3A\u548C\u5C5E\u6027\u3002
    \u884C\u4E3A(\u65B9\u6CD5)
        get_queryset:  \u83B7\u53D6queryset\u7684\u6570\u636E\u96C6
        get_serializer: \u83B7\u53D6serializer_class\u5E8F\u5217\u5316\u5668\u5BF9\u8C61
        get_object:    \u6839\u636Elookup_field\u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61
    
    \u5C5E\u6027
        queryset:   \u901A\u7528\u7684\u6570\u636E\u96C6
        serializer_class: \u901A\u7528\u7684\u5E8F\u5217\u5316\u5668
        lookup_field:   \u9ED8\u8BA4\u662Fpk,\u53EF\u4EE5\u624B\u52A8\u4FEE\u6539id

2, \u53EF\u4EE5\u548C\u4E00\u4E2A\u6216\u591A\u4E2Amixin\u7C7B\u914D\u5408\u4F7F\u7528\u3002
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li></ul></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookDetailGenericAPIView</span><span class="token punctuation">(</span>GenericAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment">#1,\u63D0\u4F9B\u901A\u7528\u5C5E\u6027</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    lookup_field <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span><span class="token builtin">id</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment">#1,\u83B7\u53D6\u4E66\u7C4D</span>
        book <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#\u6839\u636Eid\u5230queryset\u4E2D\u53D6\u51FA\u4E66\u7C4D\u5BF9\u8C61</span>

        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span><span class="token builtin">id</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment">#1,\u83B7\u53D6\u6570\u636E,\u83B7\u53D6\u5BF9\u8C61</span>
				<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        book <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span><span class="token builtin">id</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment">#1,\u5220\u9664\u4E66\u7C4D</span>
        self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_12-mixin" tabindex="-1">12,MiXin <a class="header-anchor" href="#_12-mixin" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u77E5\u9053mixin\u7684\u4F5C\u7528, \u5E38\u89C1\u7684mixin\u7C7B</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
Mixin,\u7279\u70B9: 
1, mixin\u7C7B\u63D0\u4F9B\u7528\u4E8E\u63D0\u4F9B\u57FA\u672C\u89C6\u56FE\u884C\u4E3A(\u5217\u8868\u89C6\u56FE, \u8BE6\u60C5\u89C6\u56FE)\u7684\u64CD\u4F5C--\u589E\u5220\u6539\u67E5
2, \u914D\u5408\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u4F7F\u7528\u7684

\u7C7B\u540D\u79F0                 \u63D0\u4F9B\u65B9\u6CD5        \u529F\u80FD
ListModelMixin        list          \u67E5\u8BE2\u6240\u6709\u7684\u6570\u636E
CreateModelMixin      create        \u521B\u5EFA\u5355\u4E2A\u5BF9\u8C61
RetrieveModelMixin    retrieve      \u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61
UpdateModelMixin      update        \u66F4\u65B0\u5355\u4E2A\u5BF9\u8C61
DestroyModelMixin     destroy       \u5220\u9664\u5355\u4E2A\u5BF9\u8C61

&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul></li></ul><h4 id="_13-\u4E8C\u7EA7\u89C6\u56FE-mixin\u914D\u5408\u4F7F\u7528" tabindex="-1">13,\u4E8C\u7EA7\u89C6\u56FE,MiXin\u914D\u5408\u4F7F\u7528 <a class="header-anchor" href="#_13-\u4E8C\u7EA7\u89C6\u56FE-mixin\u914D\u5408\u4F7F\u7528" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528mixin\u548C\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u5BF9\u5217\u8868\u89C6\u56FE\u548C\u8BE6\u60C5\u89C6\u56FE\u505A\u6539\u5199</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python line-numbers-mode"><pre><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^mixin_generic_apiview_books/$&#39;</span><span class="token punctuation">,</span>
        views<span class="token punctuation">.</span>BookListMixinGenericAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  
    url<span class="token punctuation">(</span><span class="token string">r&#39;^mixin_generic_apiview_books/(?P&lt;book_id&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>
        views<span class="token punctuation">.</span>BookDetailMixinGenericAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li></li></ul></li><li><p>2,\u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>mixins <span class="token keyword">import</span> ListModelMixin<span class="token punctuation">,</span>CreateModelMixin<span class="token punctuation">,</span>RetrieveModelMixin<span class="token punctuation">,</span>UpdateModelMixin<span class="token punctuation">,</span>DestroyModelMixin
<span class="token comment">#8,mixin\u548C\u4E8C\u7EA7\u89C6\u56FEGenericAPIView, \u5B9E\u73B0\u5217\u8868\u89C6\u56FE, \u8BE6\u60C5\u89C6\u56FE</span>
<span class="token keyword">class</span> <span class="token class-name">BookListMixinGenericAPIView</span><span class="token punctuation">(</span>GenericAPIView<span class="token punctuation">,</span>ListModelMixin<span class="token punctuation">,</span>CreateModelMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment">#1,\u63D0\u4F9B\u516C\u5171\u7684\u5C5E\u6027</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">list</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>create<span class="token punctuation">(</span>request<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">BookDetailMixinGenericAPIView</span><span class="token punctuation">(</span>GenericAPIView<span class="token punctuation">,</span>RetrieveModelMixin<span class="token punctuation">,</span>UpdateModelMixin<span class="token punctuation">,</span>DestroyModelMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment">#1,\u63D0\u4F9B\u901A\u7528\u5C5E\u6027</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer
    <span class="token comment"># lookup_field = &quot;id&quot;</span>
    lookup_url_kwarg <span class="token operator">=</span> <span class="token string">&quot;book_id&quot;</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>retrieve<span class="token punctuation">(</span>request<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>update<span class="token punctuation">(</span>request<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>destroy<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></li></ul></li></ul></li></ul>`,11),l=[t];function o(c,i,u,r,k,b){return a(),s("div",null,l)}var _=n(e,[["render",o]]);export{d as __pageData,_ as default};
