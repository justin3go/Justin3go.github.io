import{_ as n,c as s,o as a,a as p}from"./app.f0844215.js";const d='{"title":"5,APIView\u4E4Brequest","description":"","frontmatter":{},"headers":[],"relativePath":"\u77E5\u8BC6\u5E93/\u540E\u7AEF\u50A8\u5907/15\u4E00\u7EA7\u89C6\u56FE--APIView.md","lastUpdated":1643983979122}',e={},t=p(`<h4 id="_5-apiview\u4E4Brequest" tabindex="-1">5,APIView\u4E4Brequest <a class="header-anchor" href="#_5-apiview\u4E4Brequest" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u77E5\u9053APIView\u7684\u7279\u70B9, \u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7request\u83B7\u53D6\u53C2\u6570</p></li><li><p><strong>\u7279\u70B9:</strong></p><ul><li><p>1, \u7EE7\u627F\u81EAView</p></li><li><p>2, \u63D0\u4F9B\u4E86\u81EA\u5DF1\u7684request\u5BF9\u8C61</p><ul><li>get\u53C2\u6570: request.query_params</li><li>post\u53C2\u6570: request.data</li></ul></li><li><p>3, \u63D0\u4F9B\u4E86\u81EA\u5DF1\u7684response\u5BF9\u8C61</p></li><li><p>4, \u5E76\u4E14\u63D0\u4F9B\u4E86\u8BA4\u8BC1, \u6743\u9650, \u9650\u6D41\u7B49\u529F\u80FD</p><blockquote><p>\u83B7\u53D6\u6570\u636E\u7684\u65B9\u5F0F\u4E0D\u4E00\u6837\u4E86</p></blockquote></li></ul></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment">#1,\u5B9A\u4E49\u7C7B,\u96C6\u6210APIView</span>
<span class="token keyword">class</span> <span class="token class-name">BookAPIView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        View\u83B7\u53D6\u6570\u636E\u65B9\u5F0F:
            GET:
                request.GET
            POST:
                request.POST
                request.body

        APIView\u83B7\u53D6\u6570\u636E\u65B9\u5F0F
            GET:
                reqeust.query_params
            POST:
                request.data

        :param request:
        :return:
        &quot;&quot;&quot;</span>
        <span class="token comment">#1,\u83B7\u53D6APIVIew\u4E2D\u7684get\u8BF7\u6C42\u53C2\u6570</span>
        <span class="token comment"># print(request.query_params)</span>

        <span class="token keyword">return</span> http<span class="token punctuation">.</span>HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 2,\u83B7\u53D6APIView\u4E2D\u7684post\u7684\u53C2\u6570</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

        <span class="token keyword">return</span> http<span class="token punctuation">.</span>HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_6-apiview\u4E4Bresponse" tabindex="-1">6,APIView\u4E4BResponse <a class="header-anchor" href="#_6-apiview\u4E4Bresponse" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: <strong>\u53EF\u4EE5\u4F7F\u7528response\u54CD\u5E94\u5404\u79CD\u6570\u636E\u548C\u72B6\u6001</strong></p></li><li><p>\u597D\u5904:</p><ul><li>1,\u4F7F\u7528\u4E00\u4E2A\u7C7B, \u5C31\u53EF\u4EE5\u66FF\u4EE3\u4EE5\u524DView\u4E2D\u7684\u5404\u79CD\u7C7B\u578B\u7684Response(HttpResponse,JsonResponse\u2026.)</li><li>2, \u53EF\u4EE5\u914D\u5408\u72B6\u6001\u7801status\u4F7F\u7528</li></ul></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1,\u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token keyword">from</span> django <span class="token keyword">import</span> http
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status

<span class="token comment">#1,\u5B9A\u4E49\u7C7B,\u96C6\u6210APIView</span>
<span class="token keyword">class</span> <span class="token class-name">BookAPIView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

			<span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>	<span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">13</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_404_NOT_FOUND<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_7-apiview\u5B9E\u73B0\u5217\u8868\u89C6\u56FE" tabindex="-1">7,APIView\u5B9E\u73B0\u5217\u8868\u89C6\u56FE <a class="header-anchor" href="#_7-apiview\u5B9E\u73B0\u5217\u8868\u89C6\u56FE" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528\u5E8F\u5217\u5316\u5668\u548CAPIView\u5BF9\u5217\u8868\u89C6\u56FE\u8FDB\u884C<strong>\u6539\u5199</strong></p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment"># url(r&#39;^books/$&#39;,views.BookAPIView.as_view()),</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^books/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookListAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment">#2,\u5E8F\u5217\u5316\u5668\u548CAPIView\u5B9E\u73B0\u5217\u8868\u89C6\u56FE</span>
<span class="token keyword">class</span> <span class="token class-name">BookListAPIView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">#1,\u67E5\u8BE2\u6240\u6709\u7684\u4E66\u7C4D</span>
        books <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#2,\u5C06\u5BF9\u8C61\u5217\u8868\u8F6C\u6210\u5B57\u5178\u5217\u8868</span>
        serializr <span class="token operator">=</span> BookInfoModelSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>books<span class="token punctuation">,</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

        <span class="token comment">#3,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializr<span class="token punctuation">.</span>data<span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">#1,\u83B7\u53D6\u53C2\u6570</span>
        data_dict <span class="token operator">=</span> request<span class="token punctuation">.</span>data

        <span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668</span>
        serializer <span class="token operator">=</span> BookInfoModelSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

        <span class="token comment">#3,\u6821\u9A8C,\u5165\u5E93</span>
        serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#4,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></li></ul></li><li><p>3, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo

<span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> BookInfo
        fields <span class="token operator">=</span> <span class="token string">&quot;__all__&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul></li></ul></li></ul><h4 id="_8-apiview\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE" tabindex="-1">8,APIView\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE <a class="header-anchor" href="#_8-apiview\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668\u548CAPVIew\u6539\u5199\u8BE6\u60C5\u89C6\u56FE</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  
    url<span class="token punctuation">(</span><span class="token string">r&#39;^books/(?P&lt;book_id&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookDetailAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python line-numbers-mode"><pre><code><span class="token comment"># 3,\u5E8F\u5217\u5316\u5668\u548CAPIView\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE</span>
<span class="token keyword">class</span> <span class="token class-name">BookDetailAPIView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 1,\u83B7\u53D6\u4E66\u7C4D</span>
        book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span>book_id<span class="token punctuation">)</span>

        <span class="token comment"># 2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
        serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">)</span>

        <span class="token comment"># 4,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_200_OK<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 1,\u83B7\u53D6\u6570\u636E,\u83B7\u53D6\u5BF9\u8C61</span>
        data_dict <span class="token operator">=</span> request<span class="token punctuation">.</span>data
        book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span>book_id<span class="token punctuation">)</span>

        <span class="token comment"># 2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
        serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">,</span> data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

        <span class="token comment"># 3,\u6821\u9A8C,\u5165\u5E93</span>
        serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 4,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span> status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_201_CREATED<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> book_id<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># 1,\u5220\u9664\u4E66\u7C4D</span>
        BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span>book_id<span class="token punctuation">)</span><span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 2,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_204_NO_CONTENT<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div></li></ul></li></ul></li></ul>`,8),o=[t];function l(c,u,r,i,k,b){return a(),s("div",null,o)}var w=n(e,[["render",l]]);export{d as __pageData,w as default};
