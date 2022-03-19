import{_ as n,c as s,o as a,a as t}from"./app.0b1f5e83.js";const b='{"title":"DRF\u5B66\u4E60\u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"restful\u4ECB\u7ECD","slug":"restful\u4ECB\u7ECD"},{"level":2,"title":"django\u57FA\u7840\u590D\u4E60","slug":"django\u57FA\u7840\u590D\u4E60"},{"level":2,"title":"\u5E8F\u5217\u5316\u5668","slug":"\u5E8F\u5217\u5316\u5668"},{"level":2,"title":"\u53CD\u5E8F\u5217\u5316\u5668","slug":"\u53CD\u5E8F\u5217\u5316\u5668"},{"level":3,"title":"\u53CD\u5E8F\u5217\u5316","slug":"\u53CD\u5E8F\u5217\u5316"},{"level":3,"title":"\u6570\u636E\u5165\u5E93","slug":"\u6570\u636E\u5165\u5E93"},{"level":2,"title":"ModelSerializer","slug":"modelserializer"},{"level":2,"title":"\u4E00\u7EA7\u89C6\u56FEAPIView","slug":"\u4E00\u7EA7\u89C6\u56FEapiview"},{"level":2,"title":"\u4E8C\u7EA7\u89C6\u56FE\u4E0EMixin","slug":"\u4E8C\u7EA7\u89C6\u56FE\u4E0Emixin"},{"level":2,"title":"\u4E09\u7EA7\u89C6\u56FE\u4E0E\u89C6\u56FE\u96C6","slug":"\u4E09\u7EA7\u89C6\u56FE\u4E0E\u89C6\u56FE\u96C6"},{"level":2,"title":"\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C","slug":"\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C"},{"level":2,"title":"router","slug":"router"},{"level":2,"title":"\u6743\u9650\u8BBE\u7F6E","slug":"\u6743\u9650\u8BBE\u7F6E"},{"level":2,"title":"url\u53EF\u9009\u53C2\u6570\u8BBE\u7F6E","slug":"url\u53EF\u9009\u53C2\u6570\u8BBE\u7F6E"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"\u77E5\u8BC6\u5E93/\u540E\u7AEF\u50A8\u5907/DRF\u5B66\u4E60\u7B14\u8BB0.md","lastUpdated":1647678063011}',p={},o=t(`<h1 id="drf\u5B66\u4E60\u7B14\u8BB0" tabindex="-1">DRF\u5B66\u4E60\u7B14\u8BB0 <a class="header-anchor" href="#drf\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a></h1><h2 id="restful\u4ECB\u7ECD" tabindex="-1">restful\u4ECB\u7ECD <a class="header-anchor" href="#restful\u4ECB\u7ECD" aria-hidden="true">#</a></h2><h4 id="_1-web\u5E94\u7528\u6A21\u5F0F-\u4E86\u89E3" tabindex="-1">1,web\u5E94\u7528\u6A21\u5F0F(\u4E86\u89E3) <a class="header-anchor" href="#_1-web\u5E94\u7528\u6A21\u5F0F-\u4E86\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u77E5\u9053web\u5F00\u53D1\u7684\u4E24\u79CD\u6A21\u5F0F</p></li><li><p>\u524D\u540E\u7AEF\u5206\u79BB:</p><ul><li>\u6CE8\u610F\u70B9: \u4E1A\u52A1\u670D\u52A1\u5668\u548C\u9759\u6001\u670D\u52A1\u5668\u662F\u5206\u5F00\u7684</li><li><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20191217085007969.png" alt="image-20191217085007969"></li></ul></li><li><p>\u524D\u540E\u7AEF\u4E0D\u5206\u79BB:</p><ul><li>\u6CE8\u610F\u70B9: \u9875\u9762\u548C\u6570\u636E\u90FD\u662F\u6709\u540E\u7AEF\u5904\u7406\u7684</li><li><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20191217085558447.png" alt="image-20191217085558447"></li></ul></li></ul><h4 id="_2-restful\u98CE\u683C\u4ECB\u7ECD-\u4E86\u89E3" tabindex="-1">2,restful\u98CE\u683C\u4ECB\u7ECD(\u4E86\u89E3) <a class="header-anchor" href="#_2-restful\u98CE\u683C\u4ECB\u7ECD-\u4E86\u89E3" aria-hidden="true">#</a></h4><ul><li>\u76EE\u7684: \u77E5\u9053\u4E3A\u4EC0\u4E48\u9700\u8981\u4F7F\u7528restful\u98CE\u683C\u8FDB\u884C\u5F00\u53D1</li><li>\u539F\u56E0 <ul><li>\u6BCF\u4E2A\u540E\u7AEF\u5F00\u53D1\u4EBA\u5458\u53EF\u80FD\u90FD\u6709\u81EA\u5DF1\u7684\u5B9A\u4E49\u65B9\u5F0F\uFF0C\u98CE\u683C\u8FE5\u5F02</li></ul></li><li>\u89E3\u51B3\u529E\u6CD5: <ul><li>restful</li></ul></li></ul><h4 id="_3-restful\u8BBE\u8BA1\u98CE\u683C-\u4E86\u89E3" tabindex="-1">3,restful\u8BBE\u8BA1\u98CE\u683C(\u4E86\u89E3) <a class="header-anchor" href="#_3-restful\u8BBE\u8BA1\u98CE\u683C-\u4E86\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u77E5\u9053\u5E38\u89C1\u7684restful\u98CE\u683C\u7684\u6807\u51C6</p></li><li><p>\u5177\u4F53\u7684\u6807\u51C6:</p><ul><li><p>api\u90E8\u7F72\u7684\u57DF\u540D, \u4E3B\u57DF\u540D\u6216\u8005\u4E13\u6709\u57DF\u540D</p><blockquote><p>\u628AAPI\u90E8\u7F72\u5728\u4E13\u6709\u57DF\u540D\u4E4B\u4E0B</p></blockquote><div class="language-"><pre><code>https://api.example.com //\u4E0D\u662Fwww\u5F00\u5934\u7684
</code></pre></div><blockquote><p>\u90E8\u7F72\u5728\u4E3B\u57DF\u540D\u4E4B\u4E0B</p></blockquote><div class="language-"><pre><code>\u57DF\u540D/api/
</code></pre></div></li><li><p>\u7248\u672C, \u901A\u8FC7url\u5730\u5740\u6216\u8005\u8BF7\u6C42\u5934accept</p><blockquote><p>\u5E94\u8BE5\u628A\u7248\u672C\u53F7\u653E\u5728URL\u4E2D</p></blockquote></li><li><p>\u8DEF\u5F84, \u53EA\u80FD\u6709\u540D\u8BCD, \u4E0D\u80FD\u6709\u52A8\u8BCD</p><div class="language-"><pre><code>//\u4E0D\u662F&#39;/getProducts&#39;

GET /products \uFF1A\u5C06\u8FD4\u56DE\u6240\u6709\u4EA7\u54C1\u6E05\u5355
POST /products \uFF1A\u5C06\u4EA7\u54C1\u65B0\u5EFA\u5230\u96C6\u5408
GET /products/4 \uFF1A\u5C06\u83B7\u53D6\u4EA7\u54C1 4
PATCH\uFF08\u6216\uFF09PUT /products/4 \uFF1A\u5C06\u66F4\u65B0\u4EA7\u54C1 4
</code></pre></div></li><li><p>http\u8BF7\u6C42\u52A8\u8BCD, get, post, update, delete</p><div class="language-"><pre><code>GET\uFF08SELECT\uFF09\uFF1A\u4ECE\u670D\u52A1\u5668\u53D6\u51FA\u8D44\u6E90\uFF08\u4E00\u9879\u6216\u591A\u9879\uFF09\u3002
POST\uFF08CREATE\uFF09\uFF1A\u5728\u670D\u52A1\u5668\u65B0\u5EFA\u4E00\u4E2A\u8D44\u6E90\u3002
PUT\uFF08UPDATE\uFF09\uFF1A\u5728\u670D\u52A1\u5668\u66F4\u65B0\u8D44\u6E90\uFF08\u5BA2\u6237\u7AEF\u63D0\u4F9B\u6539\u53D8\u540E\u7684\u5B8C\u6574\u8D44\u6E90\uFF09\u3002
DELETE\uFF08DELETE\uFF09\uFF1A\u4ECE\u670D\u52A1\u5668\u5220\u9664\u8D44\u6E90
</code></pre></div></li><li><p>\u8FC7\u6EE4\u4FE1\u606F</p><p>\u5982\u679C\u8BB0\u5F55\u6570\u91CF\u5F88\u591A\uFF0C\u670D\u52A1\u5668\u4E0D\u53EF\u80FD\u90FD\u5C06\u5B83\u4EEC\u8FD4\u56DE\u7ED9\u7528\u6237\u3002API\u5E94\u8BE5\u63D0\u4F9B\u53C2\u6570\uFF0C\u8FC7\u6EE4\u8FD4\u56DE\u7ED3\u679C\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u89C1\u7684\u53C2\u6570\u3002</p><div class="language-"><pre><code>?limit=10\uFF1A\u6307\u5B9A\u8FD4\u56DE\u8BB0\u5F55\u7684\u6570\u91CF
?offset=10\uFF1A\u6307\u5B9A\u8FD4\u56DE\u8BB0\u5F55\u7684\u5F00\u59CB\u4F4D\u7F6E\u3002
?page=2&amp;per_page=100\uFF1A\u6307\u5B9A\u7B2C\u51E0\u9875\uFF0C\u4EE5\u53CA\u6BCF\u9875\u7684\u8BB0\u5F55\u6570\u3002
?sortby=name&amp;order=asc\uFF1A\u6307\u5B9A\u8FD4\u56DE\u7ED3\u679C\u6309\u7167\u54EA\u4E2A\u5C5E\u6027\u6392\u5E8F\uFF0C\u4EE5\u53CA\u6392\u5E8F\u987A\u5E8F\u3002
?animal_type_id=1\uFF1A\u6307\u5B9A\u7B5B\u9009\u6761\u4EF6
</code></pre></div><blockquote><p>\u53C2\u6570\u7684\u8BBE\u8BA1\u5141\u8BB8\u5B58\u5728\u5197\u4F59\uFF0C\u5373\u5141\u8BB8API\u8DEF\u5F84\u548CURL\u53C2\u6570\u5076\u5C14\u6709\u91CD\u590D\u3002\u6BD4\u5982\uFF0CGET /zoos/ID/animals \u4E0E GET /animals?zoo_id=ID \u7684\u542B\u4E49\u662F\u76F8\u540C\u7684\u3002</p></blockquote></li><li><p>\u72B6\u6001, 200, 201, 204, 400, 401, 403, 404</p><div class="language-"><pre><code>200 OK - [GET]\uFF1A\u670D\u52A1\u5668\u6210\u529F\u8FD4\u56DE\u7528\u6237\u8BF7\u6C42\u7684\u6570\u636E
201 CREATED - [POST/PUT/PATCH]\uFF1A\u7528\u6237\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u6210\u529F\u3002
202 Accepted - [*]\uFF1A\u8868\u793A\u4E00\u4E2A\u8BF7\u6C42\u5DF2\u7ECF\u8FDB\u5165\u540E\u53F0\u6392\u961F\uFF08\u5F02\u6B65\u4EFB\u52A1\uFF09
204 NO CONTENT - [DELETE]\uFF1A\u7528\u6237\u5220\u9664\u6570\u636E\u6210\u529F\u3002
400 INVALID REQUEST - [POST/PUT/PATCH]\uFF1A\u7528\u6237\u53D1\u51FA\u7684\u8BF7\u6C42\u6709\u9519\u8BEF\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u7684\u64CD\u4F5C
401 Unauthorized - [*]\uFF1A\u8868\u793A\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09\u3002
403 Forbidden - [*] \u8868\u793A\u7528\u6237\u5F97\u5230\u6388\u6743\uFF08\u4E0E401\u9519\u8BEF\u76F8\u5BF9\uFF09\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684\u3002
404 NOT FOUND - [*]\uFF1A\u7528\u6237\u53D1\u51FA\u7684\u8BF7\u6C42\u9488\u5BF9\u7684\u662F\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8BE5\u64CD\u4F5C\u662F\u5E42\u7B49\u7684\u3002
406 Not Acceptable - [GET]\uFF1A\u7528\u6237\u8BF7\u6C42\u7684\u683C\u5F0F\u4E0D\u53EF\u5F97\uFF08\u6BD4\u5982\u7528\u6237\u8BF7\u6C42JSON\u683C\u5F0F\uFF0C\u4F46\u662F\u53EA\u6709XML\u683C\u5F0F\uFF09\u3002
410 Gone -[GET]\uFF1A\u7528\u6237\u8BF7\u6C42\u7684\u8D44\u6E90\u88AB\u6C38\u4E45\u5220\u9664\uFF0C\u4E14\u4E0D\u4F1A\u518D\u5F97\u5230\u7684\u3002
422 Unprocesable entity - [POST/PUT/PATCH] \u5F53\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u53D1\u751F\u4E00\u4E2A\u9A8C\u8BC1\u9519\u8BEF\u3002
500 INTERNAL SERVER ERROR - [*]\uFF1A\u670D\u52A1\u5668\u53D1\u751F\u9519\u8BEF\uFF0C\u7528\u6237\u5C06\u65E0\u6CD5\u5224\u65AD\u53D1\u51FA\u7684\u8BF7\u6C42\u662F\u5426\u6210\u529F\u3002
</code></pre></div></li><li><p>\u9519\u8BEF\u5904\u7406</p><p>\u5982\u679C\u72B6\u6001\u7801\u662F4xx\uFF0C\u670D\u52A1\u5668\u5C31\u5E94\u8BE5\u5411\u7528\u6237\u8FD4\u56DE\u51FA\u9519\u4FE1\u606F\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u8FD4\u56DE\u7684\u4FE1\u606F\u4E2D\u5C06error\u4F5C\u4E3A\u952E\u540D\uFF0C\u51FA\u9519\u4FE1\u606F\u4F5C\u4E3A\u952E\u503C\u5373\u53EF\u3002</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    error<span class="token operator">:</span> <span class="token string">&quot;Invalid API key&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u8FD4\u56DE\u7ED3\u679C</p><p>\u9488\u5BF9\u4E0D\u540C\u64CD\u4F5C\uFF0C\u670D\u52A1\u5668\u5411\u7528\u6237\u8FD4\u56DE\u7684\u7ED3\u679C\u5E94\u8BE5\u7B26\u5408\u4EE5\u4E0B\u89C4\u8303\u3002</p><ul><li>GET /collection\uFF1A\u8FD4\u56DE\u8D44\u6E90\u5BF9\u8C61\u7684\u5217\u8868\uFF08\u6570\u7EC4\uFF09</li><li>GET /collection/resource\uFF1A\u8FD4\u56DE\u5355\u4E2A\u8D44\u6E90\u5BF9\u8C61</li><li>POST /collection\uFF1A\u8FD4\u56DE\u65B0\u751F\u6210\u7684\u8D44\u6E90\u5BF9\u8C61</li><li>PUT /collection/resource\uFF1A\u8FD4\u56DE\u5B8C\u6574\u7684\u8D44\u6E90\u5BF9\u8C61</li><li>PATCH /collection/resource\uFF1A\u8FD4\u56DE\u5B8C\u6574\u7684\u8D44\u6E90\u5BF9\u8C61</li><li>DELETE /collection/resource\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6587\u6863</li></ul></li><li><p>\u5176\u4ED6</p><p>\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F\u5E94\u8BE5\u4F7F\u7528json\uFF0C\u907F\u514D\u4F7F\u7528xml</p></li></ul></li></ul><h2 id="django\u57FA\u7840\u590D\u4E60" tabindex="-1">django\u57FA\u7840\u590D\u4E60 <a class="header-anchor" href="#django\u57FA\u7840\u590D\u4E60" aria-hidden="true">#</a></h2><h4 id="_4-restful\u6848\u4F8B-\u4E86\u89E3" tabindex="-1">4,restful\u6848\u4F8B(\u4E86\u89E3) <a class="header-anchor" href="#_4-restful\u6848\u4F8B-\u4E86\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528restful\u98CE\u683C\u8BBE\u8BA1\u56FE\u4E66\u589E\u5220\u6539\u67E5\u7684\u6848\u4F8B</p></li><li><p>\u6848\u4F8B:</p><table><thead><tr><th>\u529F\u80FD</th><th>\u8DEF\u5F84</th><th>\u8BF7\u6C42\u65B9\u5F0F</th><th>\u54CD\u5E94\u72B6\u6001\u7801</th></tr></thead><tbody><tr><td>\u83B7\u53D6\u6240\u6709\u7684\u4E66\u7C4D</td><td>/books</td><td>get</td><td>200</td></tr><tr><td>\u521B\u5EFA\u4E66\u7C4D</td><td>/books</td><td>post</td><td>201</td></tr><tr><td>\u83B7\u53D6\u5355\u4E2A\u4E66\u7C4D</td><td id="">/books/</td><td>get</td><td>200</td></tr><tr><td>\u4FEE\u6539\u4E66\u7C4D</td><td id="">/books/</td><td>put</td><td>201</td></tr><tr><td>\u5220\u9664\u4E66\u7C4D</td><td id="">/books/</td><td>delete</td><td>204</td></tr></tbody></table></li></ul><h4 id="_5-\u6570\u636E\u51C6\u5907" tabindex="-1">5,\u6570\u636E\u51C6\u5907 <a class="header-anchor" href="#_5-\u6570\u636E\u51C6\u5907" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5C06\u56FE\u4E66\u548C\u82F1\u96C4\u7684\u4FE1\u606F\u6DFB\u52A0\u5230\u6570\u636E\u4E2D</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u521B\u5EFA\u9879\u76EE, \u521B\u5EFAbook\u5B50\u5E94\u7528</p></li><li><p>2, \u5728\u5B50\u5E94\u7528\u4E2D\u5B9A\u4E49\u6A21\u578B\u7C7B</p><div class="language-python"><pre><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models

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
</code></pre></div></li><li><p>3, \u6CE8\u518C\u5B50\u5E94\u7528, \u8BBE\u7F6E\u6570\u636E\u5E93\u914D\u7F6E</p></li><li><p>4, \u521B\u5EFA\u6570\u636E\u5E93, \u8FC1\u79FB</p></li></ul></li></ul><h4 id="_6-\u67E5\u8BE2\u6240\u6709\u6570\u636E-\u7406\u89E3" tabindex="-1">6,\u67E5\u8BE2\u6240\u6709\u6570\u636E(\u7406\u89E3) <a class="header-anchor" href="#_6-\u67E5\u8BE2\u6240\u6709\u6570\u636E-\u7406\u89E3" aria-hidden="true">#</a></h4><blockquote><p>\u67E5\u8BE2\u548C\u521B\u5EFA\u90FD\u5C5E\u4E8E\u5217\u8868\u89C6\u56FE\uFF0C\u800C\u4EE3\u5E26\u53C2\u6570\u7684\u8BF7\u6C42\u5C5E\u4E8E\u8BE6\u60C5\u89C6\u56FE</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u7F16\u5199\u89C6\u56FE\u67E5\u8BE2\u6240\u6709\u7684\u4E66\u7C4D\u4FE1\u606F</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>http.JsonResponse(books_list,safe=<strong>False</strong>) <ul><li>safe=False\u5141\u8BB8\u975E\u5B57\u5178\u6570\u636E\u53EF\u4EE5\u88AB\u8FD4\u56DE</li></ul></li></ul></li><li><p>\u4EE3\u7801</p><div class="language-python"><pre><code><span class="token comment"># /book/views.py</span>
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
</code></pre></div></li></ul><h4 id="_7-\u521B\u5EFA\u5BF9\u8C61-\u7406\u89E3" tabindex="-1">7,\u521B\u5EFA\u5BF9\u8C61(\u7406\u89E3) <a class="header-anchor" href="#_7-\u521B\u5EFA\u5BF9\u8C61-\u7406\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u6DFB\u52A0\u4E66\u7C4D\u5BF9\u8C61\u5230\u6570\u636E\u5E93\u4E2D</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>book = BookInfo.objects.create(**data_dict)</li></ul></li><li><p>\u5B8C\u6574\u4EE3\u7801</p><div class="language-python"><pre><code><span class="token comment"># \u8BF7\u6C42\u7684\u65F6\u5019\u53EA\u9700\u8981\u4FEE\u6539\u6E05\u8BF7\u6C42\u65B9\u5F0F\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8BF7\u6C42\u8DEF\u5F84\u662F\u4E0D\u53D8\u7684</span>
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
</code></pre></div></li></ul><h4 id="_8-\u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" tabindex="-1">8,\u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61(\u7406\u89E3) <a class="header-anchor" href="#_8-\u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u83B7\u53D6\u6307\u5B9A\u4E66\u7C4D\u5BF9\u8C61</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>book = BookInfo.objects.get(id=book_id)</li></ul></li><li><p>\u5B8C\u6574\u4EE3\u7801</p><div class="language-python"><pre><code><span class="token comment"># \u8BE6\u60C5\u89C6\u56FE</span>
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
</code></pre></div></li></ul><h4 id="_9-\u4FEE\u6539\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" tabindex="-1">9,\u4FEE\u6539\u5355\u4E2A\u5BF9\u8C61(\u7406\u89E3) <a class="header-anchor" href="#_9-\u4FEE\u6539\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4FEE\u6539\u6307\u5B9A\u4E66\u7C4D\u5BF9\u8C61</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>BookInfo.objects.filter(id=book_id).update(**data_dict)</li></ul></li><li><p>\u5B8C\u6574\u4EE3\u7801</p><div class="language-python"><pre><code><span class="token keyword">def</span> <span class="token function">put</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
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
</code></pre></div></li></ul><h4 id="_10-\u5220\u9664\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" tabindex="-1">10,\u5220\u9664\u5355\u4E2A\u5BF9\u8C61(\u7406\u89E3) <a class="header-anchor" href="#_10-\u5220\u9664\u5355\u4E2A\u5BF9\u8C61-\u7406\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5220\u9664\u6307\u5B9A\u4E66\u7C4D\u5BF9\u8C61</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>BookInfo.objects.get(id=book_id).delete()</li></ul></li><li><p>\u4EE3\u7801</p></li><li><div class="language-python"><pre><code><span class="token keyword">def</span> <span class="token function">delete</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 1.\u83B7\u53D6\u6570\u636E</span>
    book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span>pk<span class="token punctuation">)</span>
    <span class="token comment"># 2.\u5220\u9664\u6570\u636E</span>
    book<span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 3.\u8FD4\u56DE\u54CD\u5E94</span>
    <span class="token keyword">return</span> http<span class="token punctuation">.</span>HttpResponse<span class="token punctuation">(</span>status<span class="token operator">=</span><span class="token number">204</span><span class="token punctuation">)</span>
</code></pre></div></li></ul><h2 id="\u5E8F\u5217\u5316\u5668" tabindex="-1">\u5E8F\u5217\u5316\u5668 <a class="header-anchor" href="#\u5E8F\u5217\u5316\u5668" aria-hidden="true">#</a></h2><h4 id="_12-\u5E8F\u5217\u5316\u5668\u6982\u8FF0-\u4E86\u89E3" tabindex="-1">12,\u5E8F\u5217\u5316\u5668\u6982\u8FF0(\u4E86\u89E3) <a class="header-anchor" href="#_12-\u5E8F\u5217\u5316\u5668\u6982\u8FF0-\u4E86\u89E3" aria-hidden="true">#</a></h4><ul><li>\u76EE\u7684: \u77E5\u9053\u5E8F\u5217\u5316\u5668\u7684\u4F5C\u7528</li><li>\u5E8F\u5217\u5316\u5668\u7684\u4F5C\u7528: <ul><li>1, \u53CD\u5E8F\u5217\u5316: \u628Ajson(dict), \u8F6C\u6210\u6A21\u578B\u7C7B\u5BF9\u8C61 (\u6821\u9A8C,\u5165\u5E93)</li><li>2, \u5E8F\u5217\u5316: \u5C06\u6A21\u578B\u7C7B\u5BF9\u8C61, \u8F6C\u6210json(dict)\u6570\u636E</li></ul></li></ul><h4 id="_13-\u5E8F\u5217\u5316\u5668\u5B9A\u4E49-\u638C\u63E1" tabindex="-1">13,\u5E8F\u5217\u5316\u5668\u5B9A\u4E49(\u638C\u63E1) <a class="header-anchor" href="#_13-\u5E8F\u5217\u5316\u5668\u5B9A\u4E49-\u638C\u63E1" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5B9A\u4E49\u4E66\u7C4D\u7684\u5E8F\u5217\u5316\u5668</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token triple-quoted-string string">&quot;&quot;&quot;
\u5B9A\u4E49\u5E8F\u5217\u5316\u5668:
1, \u5B9A\u4E49\u7C7B, \u7EE7\u627F\u81EASerializer
2, \u7F16\u5199\u5B57\u6BB5\u540D\u79F0, \u548C\u6A21\u578B\u7C7B\u4E00\u6837
3, \u7F16\u5199\u5B57\u6BB5\u7C7B\u578B, \u548C\u6A21\u578B\u7C7B\u4E00\u6837
4, \u7F16\u5199\u5B57\u6BB5\u9009\u9879, \u548C\u6A21\u578B\u7C7B\u4E00\u6837
    read_only: \u53EA\u8BFB
    label: \u5B57\u6BB5\u8BF4\u660E

\u5E8F\u5217\u5316\u5668\u4F5C\u7528:
1, \u53CD\u5E8F\u5217\u5316: \u5C06json(dict)\u6570\u636E, \u8F6C\u6210\u6A21\u578B\u7C7B\u5BF9\u8C61
    \u2460: \u6821\u9A8C
    \u2461: \u5165\u5E93
    
2, \u5E8F\u5217\u5316: \u5C06\u6A21\u578B\u7C7B\u5BF9\u8C61, \u8F6C\u6210json(dict)\u6570\u636E
&quot;&quot;&quot;</span><span class="token string">&quot;&quot;</span>
<span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> serializers<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u4E66\u7C4D\u7F16\u53F7&quot;</span><span class="token punctuation">)</span>
    btitle <span class="token operator">=</span> serializers<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u540D\u79F0&quot;</span><span class="token punctuation">)</span>
    bpub_date <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&quot;\u53D1\u5E03\u65E5\u671F&quot;</span><span class="token punctuation">)</span>
    bread <span class="token operator">=</span> serializers<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u9605\u8BFB\u91CF&quot;</span><span class="token punctuation">)</span>
    bcomment <span class="token operator">=</span> serializers<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u8BC4\u8BBA\u91CF&quot;</span><span class="token punctuation">)</span>
    is_delete <span class="token operator">=</span> serializers<span class="token punctuation">.</span>BooleanField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u903B\u8F91\u5220\u9664&quot;</span><span class="token punctuation">)</span>

</code></pre></div></li></ul><h4 id="_14-\u5E8F\u5217\u5316\u5668-\u5E8F\u5217\u5316\u5355\u4E2A\u5BF9\u8C61-\u638C\u63E1" tabindex="-1">14,\u5E8F\u5217\u5316\u5668,\u5E8F\u5217\u5316\u5355\u4E2A\u5BF9\u8C61(\u638C\u63E1) <a class="header-anchor" href="#_14-\u5E8F\u5217\u5316\u5668-\u5E8F\u5217\u5316\u5355\u4E2A\u5BF9\u8C61-\u638C\u63E1" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5C06\u5355\u672C\u6570\u636E\u4F7F\u7528\u5E8F\u5217\u5316\u5668, \u8F6C\u6210json(dict)\u6570\u636E</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><div class="language-python"><pre><code><span class="token keyword">from</span> book<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo
<span class="token keyword">from</span> book<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u83B7\u53D6\u4E66\u7C4D\u5BF9\u8C61</span>
book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61, instance=book \u8868\u793A\u5C06\u54EA\u4E00\u672C\u6570\u636E\u8FDB\u884C\u5E8F\u5217\u5316</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">)</span>

<span class="token comment">#3,\u8F93\u51FA\u5E8F\u5217\u5316\u4E4B\u540E\u7684\u7ED3\u679C</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
{&#39;id&#39;: 1, &#39;btitle&#39;: &#39;\u5C04\u96D5\u82F1\u96C4\u4F20&#39;, &#39;bpub_date&#39;: &#39;1980-05-01&#39;, &#39;bread&#39;: 12, &#39;bcomment&#39;: 34, &#39;is_delete&#39;: False}
&quot;&quot;&quot;</span>
</code></pre></div></li></ul><h4 id="_15-\u5E8F\u5217\u5316\u5668-\u5E8F\u5217\u5316\u5217\u8868\u6570\u636E-\u638C\u63E1" tabindex="-1">15,\u5E8F\u5217\u5316\u5668,\u5E8F\u5217\u5316\u5217\u8868\u6570\u636E(\u638C\u63E1) <a class="header-anchor" href="#_15-\u5E8F\u5217\u5316\u5668-\u5E8F\u5217\u5316\u5217\u8868\u6570\u636E-\u638C\u63E1" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528\u5E8F\u5217\u5316\u5668,\u5BF9\u5217\u8868\u4E2D\u7684\u591A\u4E2A\u5BF9\u8C61\u8FDB\u884C\u5E8F\u5217\u5316</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><div class="language-python"><pre><code><span class="token keyword">from</span> book<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo
<span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u67E5\u8BE2\u6240\u6709\u7684\u4E66\u7C4D</span>
books <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61,many=True \u8868\u793A\u4F20\u5165\u7684\u662F\u5217\u8868\u5BF9\u8C61(\u591A\u4E2A\u6570\u636E)</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>books<span class="token punctuation">,</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment">#3,\u8F93\u51FA\u5E8F\u5217\u5316\u7684\u7ED3\u679C</span>
serializer<span class="token punctuation">.</span>data
<span class="token triple-quoted-string string">&quot;&quot;&quot;
[
OrderedDict([(&#39;id&#39;, 1), (&#39;btitle&#39;, &#39;\u5C04\u96D5\u82F1\u96C4\u4F20&#39;), (&#39;bpub_date&#39;, &#39;1980-05-01&#39;), (&#39;bread&#39;, 12), (&#39;bcomment&#39;, 34), (&#39;is_delete&#39;, False)]), 
OrderedDict([(&#39;id&#39; (&#39;btitle&#39;, &#39;\u5929\u9F99\u516B\u90E8&#39;), (&#39;bpub_date&#39;, &#39;1986-07-24&#39;), (&#39;bread&#39;, 36), (&#39;bcomment&#39;, 40), (&#39;is_delete&#39;, False)]), 
OrderedDict([(&#39;id&#39;, 3), (&#39;btitle&#39;, &#39;\u7B11\u50B2\u6C5F\u6E56&#39;), (&#39;bp, &#39;1995-12-24&#39;), (&#39;bread&#39;, 20), (&#39;bcomment&#39;, 80), (&#39;is_delete&#39;, False)]), 
OrderedDict([(&#39;id&#39;, 4), (&#39;btitle&#39;, &#39;\u96EA\u5C71\u98DE\u72D0&#39;), (&#39;bpub_date&#39;, &#39;1987-11-11&#39;), (&#39;bread&#39;, 58&#39;bcomment&#39;, 24), (&#39;is_delete&#39;, False)]), 
OrderedDict([(&#39;id&#39;, 6), (&#39;btitle&#39;, &#39;\u91D1\u74F6x2&#39;), (&#39;bpub_date&#39;, &#39;2019-01-01&#39;), (&#39;bread&#39;, 10), (&#39;bcomment&#39;, 5), (&#39;is_delete&#39;, Fse)])
]
&quot;&quot;&quot;</span>
<span class="token comment"># OrderedDict: \u6709\u5E8F\u5B57\u5178</span>
</code></pre></div><p>\u6CE8\u610F\u70B9:</p><ul><li>serializer = BookSerializer(instance=books,many=True)</li><li>instance: \u9700\u8981\u5E8F\u5217\u5316\u7684\u5BF9\u8C61</li><li>many=True: \u9ED8\u8BA4\u662FNone, \u5982\u679C\u4F20\u5165True, \u9700\u8981\u5E8F\u5217\u5316\u7684\u5BF9\u8C61\u662F\u5217\u8868</li><li>serializer.data: \u8868\u793A\u8F93\u51FA\u5E8F\u5217\u5316\u4E4B\u540E\u7684\u7ED3\u679C</li></ul></li></ul><h4 id="_16-\u82F1\u96C4\u5E8F\u5217\u5316\u5668\u5173\u8054\u5916\u952E-\u638C\u63E1" tabindex="-1">16,\u82F1\u96C4\u5E8F\u5217\u5316\u5668\u5173\u8054\u5916\u952E(\u638C\u63E1) <a class="header-anchor" href="#_16-\u82F1\u96C4\u5E8F\u5217\u5316\u5668\u5173\u8054\u5916\u952E-\u638C\u63E1" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5C06\u5173\u8054\u82F1\u96C4\u7684\u4E66\u7C4D\u4FE1\u606F, \u4E09\u79CD\u5F62\u5F0F\u8868\u793A\u51FA\u6765</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p><div class="language-python"><pre><code><span class="token comment">#2,\u5B9A\u4E49\u82F1\u96C4\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">HeroInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;\u82F1\u96C4\u6570\u636E\u5E8F\u5217\u5316\u5668&quot;&quot;&quot;</span>
    GENDER_CHOICES <span class="token operator">=</span> <span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> serializers<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    hname <span class="token operator">=</span> serializers<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;\u540D\u5B57&#39;</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
    hgender <span class="token operator">=</span> serializers<span class="token punctuation">.</span>ChoiceField<span class="token punctuation">(</span>choices<span class="token operator">=</span>GENDER_CHOICES<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;\u6027\u522B&#39;</span><span class="token punctuation">,</span> required<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span>
    hcomment <span class="token operator">=</span> serializers<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;\u63CF\u8FF0\u4FE1\u606F&#39;</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">,</span> required<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> allow_null<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

    <span class="token comment">#1,\u6DFB\u52A0\u5916\u952E,\u4E3B\u952E\u8868\u793A \u5FC5\u987B\u63D0\u4F9B\`queryset\` \u9009\u9879, \u6216\u8005\u8BBE\u7F6E read_only=\`True\`.</span>
    <span class="token comment"># queryset=BookInfo.objects.all()\u8868\u793A\u628A\u6240\u6709\u4E66\u7C4D\u5168\u90E8\u67E5\u51FA\u6765\u8BA9\u4ED6\u81EA\u5DF1\u53BB\u5339\u914D\u3002</span>
    
    <span class="token comment"># hbook = serializers.PrimaryKeyRelatedField(queryset=BookInfo.objects.all())</span>
    <span class="token comment"># hbook = serializers.PrimaryKeyRelatedField(read_only=True)</span>

    <span class="token comment">#2,\u6DFB\u52A0\u5916\u952E, \u6765\u81EA\u4E8E\u5173\u8054\u6A21\u578B\u7C7B, __str__\u7684\u8FD4\u56DE\u503C</span>
    <span class="token comment"># hbook = serializers.StringRelatedField(read_only=True)</span>

    <span class="token comment">#3,\u6DFB\u52A0\u5916\u952E,\u5173\u8054\u53E6\u5916\u4E00\u4E2A\u5E8F\u5217\u5316\u5668\uFF0C\u8FD4\u56DE\u6574\u672C\u4E66\u7684\u5168\u90E8\u4FE1\u606F\uFF08\u4E66\u5DF2\u7ECF\u5B9A\u4E49\u597D\u5E8F\u5217\u5316\u5668\uFF09</span>
    hbook <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>2, \u7C7B\u89C6\u56FE</p><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot; ===============3, \u82F1\u96C4\u5E8F\u5217\u5316\u5668, \u5173\u8054\u5916\u952E ================= &quot;&quot;&quot;</span><span class="token string">&quot;&quot;</span>
<span class="token keyword">from</span> book<span class="token punctuation">.</span>models <span class="token keyword">import</span> HeroInfo
<span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> HeroInfoSerializer

<span class="token comment">#1,\u83B7\u53D6\u5355\u4E2A\u82F1\u96C4</span>
hero <span class="token operator">=</span> HeroInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">#2,\u521B\u5EFA\u82F1\u96C4\u5E8F\u5217\u5316\u5668</span>
serializer <span class="token operator">=</span> HeroInfoSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>hero<span class="token punctuation">)</span>

<span class="token comment">#3,\u8F93\u51FA\u7ED3\u679C</span>
serializer<span class="token punctuation">.</span>data

</code></pre></div></li></ul></li></ul><h4 id="_17-\u4E66\u7C4D\u5E8F\u5217\u5316\u5668-\u5173\u8054many-\u638C\u63E1" tabindex="-1">17,\u4E66\u7C4D\u5E8F\u5217\u5316\u5668,\u5173\u8054many(\u638C\u63E1) <a class="header-anchor" href="#_17-\u4E66\u7C4D\u5E8F\u5217\u5316\u5668-\u5173\u8054many-\u638C\u63E1" aria-hidden="true">#</a></h4><ul><li><p>django\u5C0F\u590D\u4E60:</p><div class="language-python"><pre><code><span class="token comment"># \u77E5\u9053\u4E00\u4E2A\u82F1\u96C4\uFF0C\u5982\u4F55\u67E5\u51FA\u8FD9\u4E2A\u82F1\u96C4\u6240\u5728\u7684\u4E66\u7C4D</span>
hero <span class="token operator">=</span> HeroInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
hero<span class="token punctuation">.</span>hbook
<span class="token comment"># \u53CD\u8FC7\u6765\uFF0C\u77E5\u9053\u4E00\u672C\u4E66\uFF0C\u5982\u4F55\u67E5\u51FA\u8FD9\u672C\u4E66\u6240\u5173\u8054\u7684\u6240\u6709\u82F1\u96C4</span>
book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
book<span class="token punctuation">.</span>heroinfo_set
<span class="token comment"># \u6240\u4EE5\u5728DRF\u4E5F\u5DEE\u4E0D\u591A\u662F\u8FD9\u6837\u5199\u7684</span>
</code></pre></div></li><li><p>\u76EE\u7684: \u53EF\u4EE5\u5728\u5E8F\u5217\u5316\u4E66\u7C4D\u7684\u65F6\u5019, \u5C55\u793A\u5173\u8054\u7684\u82F1\u96C4\u7684\u4FE1\u606F</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><div class="language-python"><pre><code><span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#1,\u5173\u8054\u82F1\u96C4\u5B57\u6BB5, \u5728\u4E00\u65B9\u4E2D,\u8F93\u51FA\u591A\u65B9\u5185\u5BB9\u7684\u65F6\u5019\u52A0\u4E0Amany=True</span>
    <span class="token comment"># heroinfo_set = serializers.PrimaryKeyRelatedField(read_only=True,many=True)</span>
    heroinfo_set <span class="token operator">=</span> serializers<span class="token punctuation">.</span>StringRelatedField<span class="token punctuation">(</span>read_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre></div></li></ul><h4 id="\u4F7F\u7528\u5E8F\u5217\u5316\u5668\u6539\u8FDB\u4E4B\u524Ddjango\u5199\u7684\u4EE3\u7801" tabindex="-1">\u4F7F\u7528\u5E8F\u5217\u5316\u5668\u6539\u8FDB\u4E4B\u524Ddjango\u5199\u7684\u4EE3\u7801 <a class="header-anchor" href="#\u4F7F\u7528\u5E8F\u5217\u5316\u5668\u6539\u8FDB\u4E4B\u524Ddjango\u5199\u7684\u4EE3\u7801" aria-hidden="true">#</a></h4><div class="language-python"><pre><code><span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;\u83B7\u53D6\u6240\u6709\u4E66\u7C4D&#39;&#39;&#39;</span>
    <span class="token comment"># 1.\u67E5\u8BE2\u6240\u6709\u7684\u4E66\u7C4D</span>
    books <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 2.\u6570\u636E\u8F6C\u6362</span>
    <span class="token comment"># book_list = []</span>
    <span class="token comment"># for book in books:</span>
    <span class="token comment">#     book_dict = {</span>
    <span class="token comment">#         &#39;id&#39;: book.id,</span>
    <span class="token comment">#         &#39;btitle&#39;: book.btitle,</span>
    <span class="token comment">#         &#39;bpub_date&#39;: book.bpub_date,</span>
    <span class="token comment">#         &#39;bread&#39;: book.bread,</span>
    <span class="token comment">#         &#39;bcomment&#39;: book.bcomment,</span>
    <span class="token comment">#     }</span>
    <span class="token comment">#     book_list.append(book_dict)</span>
    <span class="token comment"># TODO \u5E8F\u5217\u5668\u6539\u8FDB</span>
    serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>books<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>


    <span class="token comment"># 3.\u8FD4\u56DE\u54CD\u5E94</span>
    <span class="token comment"># safe=False\u53EF\u4EE5\u5B89\u5168\u8FD4\u56DE\u975E\u5B57\u5178</span>
    <span class="token comment"># json_dumps_params={&#39;ensure_ascii&#39;: False}\u53EF\u4EE5\u89E3\u51B3\u8FD4\u56DE\u7684\u4E2D\u6587\u6570\u636E\u4E3A\u4E71\u7801</span>
    <span class="token keyword">return</span> http<span class="token punctuation">.</span>JsonResponse<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span> safe<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> json_dumps_params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;ensure_ascii&#39;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u53CD\u5E8F\u5217\u5316\u5668" tabindex="-1">\u53CD\u5E8F\u5217\u5316\u5668 <a class="header-anchor" href="#\u53CD\u5E8F\u5217\u5316\u5668" aria-hidden="true">#</a></h2><h3 id="\u53CD\u5E8F\u5217\u5316" tabindex="-1">\u53CD\u5E8F\u5217\u5316 <a class="header-anchor" href="#\u53CD\u5E8F\u5217\u5316" aria-hidden="true">#</a></h3><blockquote><p>\u6821\u9A8C\uFF1A</p><ol><li>\u5B57\u6BB5\u7C7B\u578B\u6821\u9A8C</li><li>\u5B57\u6BB5\u9009\u9879\u6821\u9A8C</li><li>\u5355\u5B57\u6BB5\uFF0C\u6821\u9A8C\uFF08\u65B9\u6CD5\uFF09</li><li>\u591A\u5B57\u6BB5\u6821\u9A8C\uFF08\u65B9\u6CD5\uFF09</li><li>\u81EA\u5B9A\u4E49\u6821\u9A8C\uFF08\u65B9\u6CD5\uFF09</li></ol></blockquote><h4 id="_18-\u53CD\u5E8F\u5217\u5316-\u5B57\u6BB5\u7C7B\u578B\u6821\u9A8C" tabindex="-1">18,\u53CD\u5E8F\u5217\u5316-\u5B57\u6BB5\u7C7B\u578B\u6821\u9A8C <a class="header-anchor" href="#_18-\u53CD\u5E8F\u5217\u5316-\u5B57\u6BB5\u7C7B\u578B\u6821\u9A8C" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528\u5E8F\u5217\u5316\u5668,\u5BF9\u6570\u636E\u8FDB\u884C\u6821\u9A8C\u64CD\u4F5C</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B: serializer.is_valid(raise_exception=True)</p><div class="language-Python"><pre><code><span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E</span>
data_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u91D1\u74F6x-\u63D2\u753B\u7248&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;2019-01-01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">25</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C, raise_exception=True, \u6821\u9A8C\u4E0D\u901A\u8FC7,\u629B\u51FA\u5F02\u5E38\u4FE1\u606F</span>
<span class="token comment"># \u4E5F\u53EF\u4EE5\u76F4\u63A5\u6253\u5370\u9519\u8BEF\u4FE1\u606Fprint(serializer.error_messages)</span>
<span class="token comment"># serializer.is_valid()</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre></div></li></ul><h4 id="_19-\u53CD\u5E8F\u5217\u5316-\u5B57\u6BB5\u9009\u9879\u6821\u9A8C" tabindex="-1">19,\u53CD\u5E8F\u5217\u5316-\u5B57\u6BB5\u9009\u9879\u6821\u9A8C <a class="header-anchor" href="#_19-\u53CD\u5E8F\u5217\u5316-\u5B57\u6BB5\u9009\u9879\u6821\u9A8C" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528\u5E8F\u5217\u5316\u5668,\u5BF9\u6570\u636E\u8FDB\u884C\u9009\u9879\u7EA6\u675F\u6821\u9A8C</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B: serializer.is_valid(raise_exception=True)</p><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p><ul><li><p>min_value=0</p></li><li><p>max_value=50</p></li><li><p>required: \u9ED8\u8BA4\u5C31\u662FTrue\uFF0C\u5FC5\u987B\u8981\u4F20\u9012\uFF0C\u9664\u975E\u8BBE\u7F6E\u4E86default | false | read_only</p></li><li><p>\u6709read_only=True\uFF0C\u4F1A\u8FDB\u884C\u5E8F\u5217\u5316\u64CD\u4F5C\uFF0C\u5E76\u4E14\u53CD\u5E8F\u5217\u5316\u65F6\u4E0D\u9700\u8981\u4F20\u8BE5\u53C2\u4E5F\u80FD\u6821\u9A8C\u901A\u8FC7\uFF08\u4E0D\u8FDB\u884C\u53CD\u5E8F\u5217\u5316\uFF09</p></li><li><p>\u7EA6\u675F\u6F14\u793A</p></li><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    bread <span class="token operator">=</span> serializers<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>min_value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u9605\u8BFB\u91CF&quot;</span><span class="token punctuation">)</span>
    bcomment <span class="token operator">=</span> serializers<span class="token punctuation">.</span>IntegerField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>max_value<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u8BC4\u8BBA\u91CF&quot;</span><span class="token punctuation">)</span>
    is_delete <span class="token operator">=</span> serializers<span class="token punctuation">.</span>BooleanField<span class="token punctuation">(</span>default<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u903B\u8F91\u5220\u9664&quot;</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E</span>
data_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u91D1\u74F6x&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;2019-01-01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">99</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C</span>
<span class="token comment"># serializer.is_valid()</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_20-\u53CD\u5E8F\u5217\u5316-\u5355\u5B57\u6BB5\u6821\u9A8C" tabindex="-1">20,\u53CD\u5E8F\u5217\u5316-\u5355\u5B57\u6BB5\u6821\u9A8C <a class="header-anchor" href="#_20-\u53CD\u5E8F\u5217\u5316-\u5355\u5B57\u6BB5\u6821\u9A8C" aria-hidden="true">#</a></h4><blockquote><p>\u5728\u8C03\u7528is_vaild\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u8FDB\u5165\u4F60\u7F16\u5199\u7684\u5355\u5B57\u6BB5\u68C0\u9A8C\u65B9\u6CD5</p><p>\u5176\u4E2Dvaildata()\u4EE3\u8868\u591A\u5B57\u6BB5\u6821\u9A8C\uFF0C\u800C\u540E\u9762\u8DDF\u4E0A\u4E0B\u5212\u7EBF\u52A0\u4E0A\u5B57\u6BB5\u540D\u4E3A\u65B9\u6CD5\u540D\u7684\u8BDD\u4EE3\u8868\u8BE5\u65B9\u6CD5\u4E3A\u5355\u5B57\u6BB5\u6821\u9A8C</p><p>attrs\u5C31\u662F\u4F20\u8FC7\u6765\u7684\u6570\u636E\uFF1A\u5728\u8FD9\u91CC\u662Fbtitle</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u7F16\u5199\u5355\u5B57\u6BB5\u6821\u9A8C\u65B9\u6CD5, \u5BF9btitle\u8FDB\u884C\u6821\u9A8C</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#3, \u5355\u5B57\u6BB5\u6821\u9A8C, \u65B9\u6CD5; \u9700\u6C42: \u6DFB\u52A0\u7684\u4E66\u7C4D\u5FC5\u987B\u5305\u542B&#39;\u91D1\u74F6&#39;</span>
    <span class="token keyword">def</span> <span class="token function">validate_btitle</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;value = {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment">#1,\u5224\u65AD\u4F20\u5165\u7684value\u4E2D\u662F\u5426\u5305\u542B\u91D1\u74F6</span>
        <span class="token keyword">if</span> <span class="token string">&quot;\u91D1\u74F6&quot;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> attrs<span class="token punctuation">:</span>
            <span class="token keyword">raise</span> serializers<span class="token punctuation">.</span>ValidationError<span class="token punctuation">(</span><span class="token string">&quot;\u4E66\u540D\u5FC5\u987B\u5305\u542B\u91D1\u74F6&quot;</span><span class="token punctuation">)</span>

        <span class="token comment">#2,\u8FD4\u56DE\u7ED3\u679C</span>
        <span class="token keyword">return</span> attrs
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E</span>
data_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u91D1\u74F6x&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;2019-01-01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C</span>
<span class="token comment"># serializer.is_valid()</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>\u5355\u5B57\u6BB5\u6821\u9A8C\u65B9\u6CD5 <ul><li>def validate_==\u5B57\u6BB5\u540D==(self,value): <ul><li>pass</li></ul></li></ul></li><li>\u5982\u679C\u6821\u9A8C\u4E0D\u901A\u8FC7,\u76F4\u63A5\u629B\u51FA\u5F02\u5E38\u5373\u53EF</li></ul></li></ul><h4 id="_21-\u53CD\u5E8F\u5217\u5316-\u591A\u5B57\u6BB5\u6821\u9A8C" tabindex="-1">21,\u53CD\u5E8F\u5217\u5316-\u591A\u5B57\u6BB5\u6821\u9A8C <a class="header-anchor" href="#_21-\u53CD\u5E8F\u5217\u5316-\u591A\u5B57\u6BB5\u6821\u9A8C" aria-hidden="true">#</a></h4><blockquote><p>\u8FD9\u91CC\u63A5\u6536\u7684attrs\u5C31\u662F\u4F20\u5165\u7684\u6574\u4E2A\u5B57\u5178\u4E86</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u7F16\u5199\u591A\u5B57\u6BB5\u6821\u9A8C\u65B9\u6CD5, \u5BF9\u9605\u8BFB\u91CF\u548C\u8BC4\u8BBA\u91CF\u8FDB\u884C\u5224\u65AD\uFF08\u4E24\u4E24\u4E4B\u95F4\u6BD4\u8F83\u5E38\u7528\u591A\u5B57\u6BB5\u6821\u9A8C\uFF09</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#4,\u591A\u5B57\u6BB5\u6821\u9A8C, \u65B9\u6CD5; \u6DFB\u52A0\u4E66\u7C4D\u7684\u65F6\u5019,\u8BC4\u8BBA\u91CF\u4E0D\u80FD\u5927\u4E8E\u9605\u8BFB\u91CF</span>
    <span class="token keyword">def</span> <span class="token function">validate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> attrs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :param attrs: \u5916\u754C\u4F20\u5165\u7684\u9700\u8981\u6821\u9A8C\u7684\u5B57\u5178
        :return:
        &quot;&quot;&quot;</span>
        <span class="token comment">#1,\u5224\u65AD\u8BC4\u8BBA\u91CF\u548C\u9605\u8BFB\u91CF\u7684\u5173\u7CFB</span>
        <span class="token keyword">if</span> attrs<span class="token punctuation">[</span><span class="token string">&quot;bread&quot;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> attrs<span class="token punctuation">[</span><span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> serializers<span class="token punctuation">.</span>ValidationError<span class="token punctuation">(</span><span class="token string">&quot;\u8BC4\u8BBA\u91CF\u4E0D\u80FD\u5927\u4E8E\u9605\u8BFB\u91CF&quot;</span><span class="token punctuation">)</span>

        <span class="token comment">#2,\u8FD4\u56DE\u7ED3\u679C</span>
        <span class="token keyword">return</span> attrs
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot; ===============7, \u53CD\u5E8F\u5217\u5316-\u591A\u5B57\u6BB5\u6821\u9A8C ================= &quot;&quot;&quot;</span><span class="token string">&quot;&quot;</span>
<span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E</span>
data_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u91D1\u74F6xxx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;2019-01-01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">33</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">22</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C</span>
<span class="token comment"># serializer.is_valid()</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_22-\u53CD\u5E8F\u5217\u5316-\u81EA\u5B9A\u4E49\u6821\u9A8C-\u7406\u89E3" tabindex="-1">22,\u53CD\u5E8F\u5217\u5316-\u81EA\u5B9A\u4E49\u6821\u9A8C(\u7406\u89E3) <a class="header-anchor" href="#_22-\u53CD\u5E8F\u5217\u5316-\u81EA\u5B9A\u4E49\u6821\u9A8C-\u7406\u89E3" aria-hidden="true">#</a></h4><blockquote><p>\u628A\u81EA\u5B9A\u4E49\u7684\u6821\u9A8C\u65B9\u6CD5\u540D\u52A0\u5165\u5230\u5B57\u6BB5\u7684\u9009\u9879validators\u4E2D</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u81EA\u5B9A\u4E49\u65B9\u6CD5,\u5BF9\u65E5\u671F\u8FDB\u884C\u6821\u9A8C</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token comment">#\u9700\u6C42: \u6DFB\u52A0\u7684\u4E66\u7C4D\u7684\u65E5\u671F\u4E0D\u80FD\u5C0F\u4E8E2015\u5E74</span>
<span class="token keyword">def</span> <span class="token function">check_bpub_date</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;date = {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> date<span class="token punctuation">.</span>year <span class="token operator">&lt;</span> <span class="token number">2015</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> serializers<span class="token punctuation">.</span>ValidationError<span class="token punctuation">(</span><span class="token string">&quot;\u65E5\u671F\u4E0D\u80FD\u5C0F\u4E8E2015\u5E74&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> date
  
<span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    bpub_date <span class="token operator">=</span> serializers<span class="token punctuation">.</span>DateField<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&quot;\u53D1\u5E03\u65E5\u671F&quot;</span><span class="token punctuation">,</span>validators<span class="token operator">=</span><span class="token punctuation">[</span>check_bpub_date<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot; ===============8, \u53CD\u5E8F\u5217\u5316-\u81EA\u5B9A\u4E49\u6821\u9A8C ================= &quot;&quot;&quot;</span><span class="token string">&quot;&quot;</span>
<span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E</span>
data_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u91D1\u74F6xxx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;2011-11-01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C</span>
<span class="token comment"># serializer.is_valid()</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

</code></pre></div></li></ul></li></ul></li></ul><h3 id="\u6570\u636E\u5165\u5E93" tabindex="-1">\u6570\u636E\u5165\u5E93 <a class="header-anchor" href="#\u6570\u636E\u5165\u5E93" aria-hidden="true">#</a></h3><ol><li>\u521B\u5EFA\u65B0\u7684\u5BF9\u8C61</li><li>\u66F4\u65B0 \u5BF9\u8C61</li></ol><h4 id="_23-\u53CD\u5E8F\u5217\u5316-\u6570\u636E\u5165\u5E93create-\u638C\u63E1" tabindex="-1">23,\u53CD\u5E8F\u5217\u5316-\u6570\u636E\u5165\u5E93create(\u638C\u63E1) <a class="header-anchor" href="#_23-\u53CD\u5E8F\u5217\u5316-\u6570\u636E\u5165\u5E93create-\u638C\u63E1" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5C06\u4E66\u7C4D\u5BF9\u8C61\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>    
  <span class="token comment">#5,\u91CD\u5199create\u65B9\u6CD5,\u5B9E\u73B0\u6570\u636E\u5165\u5E93</span>
    <span class="token keyword">def</span> <span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> validated_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># print(&quot;validated_data = {}&quot;.format(validated_data))</span>

        <span class="token comment">#1,\u521B\u5EFAbook\u5BF9\u8C61,\u5165\u5E93</span>
        book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token operator">**</span>validated_data<span class="token punctuation">)</span>

        <span class="token comment">#2,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> book
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E</span>
data_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u91D1\u74F6xxx-\u7CBE\u88C5\u7248&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;2015-11-01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C</span>
<span class="token comment"># serializer.is_valid()</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment">#4,\u5165\u5E93</span>
serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre></div></li></ul></li><li><p>\u6CE8\u610F\u70B9:</p></li><li><p><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20191217154212337-16347388278283.png" alt="image-20191217154212337"></p></li></ul></li></ul><h4 id="_24-\u53CD\u5E8F\u5217\u5316-\u6570\u636E\u66F4\u65B0update-\u638C\u63E1" tabindex="-1">24,\u53CD\u5E8F\u5217\u5316-\u6570\u636E\u66F4\u65B0update(\u638C\u63E1) <a class="header-anchor" href="#_24-\u53CD\u5E8F\u5217\u5316-\u6570\u636E\u66F4\u65B0update-\u638C\u63E1" aria-hidden="true">#</a></h4><blockquote><p>\u5F53\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u7684\u65F6\u5019\u4F20\u9012\u4E86\u4E24\u4E2A\u53C2\u6570\uFF0C\u5B83\u4F1A\u81EA\u52A8\u53BB\u627Eupdate()\u65B9\u6CD5</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u91CD\u5199update\u65B9\u6CD5, \u66F4\u65B0\u6570\u636E\u5E93\u4E2D\u6307\u5B9A\u7684\u4E66\u7C4D</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Serializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>   
  <span class="token comment">#6,\u91CD\u5199update\u65B9\u6CD5,\u5B9E\u73B0\u6570\u636E\u66F4\u65B0</span>
    <span class="token keyword">def</span> <span class="token function">update</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> validated_data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :param instance: \u9700\u8981\u66F4\u65B0\u7684\u5BF9\u8C61
        :param validated_data: \u9A8C\u8BC1\u6210\u529F\u4E4B\u540E\u7684\u6570\u636E
        :return:
        &quot;&quot;&quot;</span>
        <span class="token comment">#1,\u66F4\u65B0\u6570\u636E</span>
        instance<span class="token punctuation">.</span>btitle <span class="token operator">=</span> validated_data<span class="token punctuation">[</span><span class="token string">&quot;btitle&quot;</span><span class="token punctuation">]</span>
        instance<span class="token punctuation">.</span>bpub_date <span class="token operator">=</span> validated_data<span class="token punctuation">[</span><span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">]</span>
        instance<span class="token punctuation">.</span>bread <span class="token operator">=</span> validated_data<span class="token punctuation">[</span><span class="token string">&quot;bread&quot;</span><span class="token punctuation">]</span>
        instance<span class="token punctuation">.</span>bcomment <span class="token operator">=</span> validated_data<span class="token punctuation">[</span><span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">]</span>
        instance<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#2,\u8FD4\u56DE\u6570\u636E</span>
        book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span>instance<span class="token punctuation">.</span><span class="token builtin">id</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> book
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> book<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoSerializer
<span class="token keyword">from</span> book<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E</span>
book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
data_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u91D1\u74F6xxx-\u8FDE\u73AF\u753B&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;2019-11-11&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">20</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">,</span>data<span class="token operator">=</span>data_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C</span>
<span class="token comment"># serializer.is_valid()</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment">#4,\u5165\u5E93</span>
serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li><img src="https://webplus-cn-shenzhen-s-6130b804f968dd14cecc43e2.oss-cn-shenzhen.aliyuncs.com/blogs/image-20191217160603632-16347388187162.png" alt="image-20191217160603632"></li></ul></li></ul></li></ul><h2 id="modelserializer" tabindex="-1">ModelSerializer <a class="header-anchor" href="#modelserializer" aria-hidden="true">#</a></h2><h4 id="_1-modelserializer" tabindex="-1">1,ModelSerializer <a class="header-anchor" href="#_1-modelserializer" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528ModelSerializer\u6839\u636E\u6A21\u578B\u7C7B\u751F\u6210\u5B57\u6BB5</p></li><li><p><strong>\u4F5C\u7528:</strong></p><ul><li>1, \u53EF\u4EE5\u53C2\u8003\u6A21\u578B\u7C7B\u81EA\u52A8\u751F\u6210\u5B57\u6BB5, \u8FD8\u53EF\u4EE5\u81EA\u5DF1\u7F16\u5199\u5B57\u6BB5</li><li>2, \u63D0\u4F9B\u4E86create\u65B9\u6CD5,update\u65B9\u6CD5</li></ul></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B9A\u4E49\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> book<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo

<span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># mobile = serializers.CharField(max_length=11,min_length=11,label=&quot;\u624B\u673A\u53F7&quot;,write_only=True)</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> BookInfo <span class="token comment">#\u53C2\u8003\u6A21\u578B\u7C7B\u751F\u6210\u5B57\u6BB5</span>
        fields <span class="token operator">=</span> <span class="token string">&quot;__all__&quot;</span> <span class="token comment">#\u751F\u6210\u6240\u6709\u5B57\u6BB5</span>
</code></pre></div></li></ul></li><li><p>2, \u6D4B\u8BD5\u7ED3\u679C</p><p>1, \u4F7F\u7528\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668, \u6D4B\u8BD5\u5E8F\u5217\u5316</p><blockquote><p>\u4EBA\u4E3A\u5728\u5E8F\u5217\u5668\u6DFB\u52A0\u5B57\u6BB5\uFF0C\u800C\u6A21\u578B\u7C7B\u91CC\u9762\u4E0D\u6DFB\u52A0\u4E3B\u8981\u662F\u6709\u4E9B\u6570\u636E\u9700\u8981\u6821\u9A8C\uFF0C\u4F46\u4E0D\u9700\u8981\u5165\u5E93\uFF0C\u6BD4\u5982\u77ED\u4FE1\u9A8C\u8BC1\u7801\uFF1B</p><p>\u76F4\u63A5\u8F93\u51FA\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A\u5E8F\u5217\u5316\u5668\u91CC\u9762\u6709\u4EBA\u4E3A\u6DFB\u52A0\u7684mobile\u5B57\u6BB5\uFF0C\u800C\u6A21\u578B\u7C7B\u91CC\u9762\u6CA1\u6709\uFF0C\u89E3\u51B3\u65B9\u6848\u67091\u91CC\u9762\u7684\u4E0B\u9762\u51E0\u79CD\uFF1A</p></blockquote><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
1, \u6A21\u578B\u7C7B\u4E2D\u6DFB\u52A0mobile\u5B57\u6BB5
2, \u5220\u9664\u5E8F\u5217\u5316\u5668\u4E2D\u7684mobile
3, \u52A8\u6001\u6DFB\u52A0\u4E00mobile\u5C5E\u6027
4, \u5C06mobile\u5B57\u6BB5\u8BBE\u7F6E\u4E3Awrite_only(\u53EA\u5199,\u53EA\u8FDB\u884C\u53CD\u5E8F\u5217\u5316)
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookModelSerializer

<span class="token comment">#1,\u83B7\u53D6\u6A21\u578B\u7C7B\u5BF9\u8C61</span>
book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># book.mobile = &quot;13838389438&quot;</span>

<span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
serializer <span class="token operator">=</span> BookModelSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">)</span>

<span class="token comment">#3,\u8F93\u51FA\u7ED3\u679C</span>
serializer<span class="token punctuation">.</span>data
</code></pre></div><p>2, \u4F7F\u7528\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668, \u6D4B\u8BD5\u53CD\u5E8F\u5217\u5316, \u5165\u5E93\u64CD\u4F5C</p><blockquote><p>\u81EA\u52A8\u5E26\u6709create()\u65B9\u6CD5</p></blockquote><div class="language-python"><pre><code><span class="token keyword">from</span> book<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> BookInfoSerializer

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E</span>
book_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u9E7F\u9F0E\u8BB01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;1999-01-01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u5E8F\u5217\u5316\u5668\u5BF9\u8C61\u521B\u5EFA</span>
serializer <span class="token operator">=</span> BookInfoSerializer<span class="token punctuation">(</span>data<span class="token operator">=</span>book_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C,\u5165\u5E93</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>


</code></pre></div><p>3, \u4F7F\u7528\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668, \u6D4B\u8BD5\u53CD\u5E8F\u5217\u5316, \u66F4\u65B0\u64CD\u4F5C</p><blockquote><p>\u81EA\u52A8\u5E26\u6709update()\u65B9\u6CD5</p></blockquote><div class="language-python"><pre><code><span class="token keyword">from</span> booktest<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookModelSerializer
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo

<span class="token comment">#1,\u51C6\u5907\u5B57\u5178\u6570\u636E, \u4E66\u7C4D\u5BF9\u8C61</span>
book <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token builtin">id</span><span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">)</span>
book_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;btitle&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;\u9E7F\u9F0E\u8BB02&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;1999-01-01&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span><span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token comment">#2,\u5E8F\u5217\u5316\u5668\u5BF9\u8C61\u521B\u5EFA</span>
serializer <span class="token operator">=</span> BookModelSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">,</span>data<span class="token operator">=</span>book_dict<span class="token punctuation">)</span>

<span class="token comment">#3,\u6821\u9A8C,\u5165\u5E93</span>
serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul><h4 id="_2-fields" tabindex="-1">2, fields <a class="header-anchor" href="#_2-fields" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528fields\u751F\u6210\u6307\u5B9A\u7684\u5B57\u6BB5</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p></li><li><div class="language-python"><pre><code><span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookModelSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    mobile <span class="token operator">=</span> serializers<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">11</span><span class="token punctuation">,</span>min_length<span class="token operator">=</span><span class="token number">11</span><span class="token punctuation">,</span>label<span class="token operator">=</span><span class="token string">&quot;\u624B\u673A\u53F7&quot;</span><span class="token punctuation">,</span>write_only<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> BookInfo <span class="token comment">#\u53C2\u8003\u6A21\u578B\u7C7B\u751F\u6210\u5B57\u6BB5</span>
        <span class="token comment"># fields = &quot;__all__&quot; #\u751F\u6210\u6240\u6709\u5B57\u6BB5</span>

        <span class="token comment">#1,\u751F\u6210\u6307\u5B9A\u7684\u5B57\u6BB5</span>
        fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;btitle&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;mobile&quot;</span><span class="token punctuation">]</span>
</code></pre></div></li><li><p>fields: \u751F\u6210\u6307\u5B9A\u7684\u5B57\u6BB5</p></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>\u8FDB\u5165\u5230ModelSerializer\u7236\u7C7B, 1063\u884C\u6E90\u7801\u4E2D\u5B58\u5728</li></ul></li></ul></li></ul><h4 id="_3-read-only-fields" tabindex="-1">3,read_only_fields <a class="header-anchor" href="#_3-read-only-fields" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684:\u53EF\u4EE5\u4F7F\u7528read_only_fields\u8BBE\u7F6E\u53EA\u8BFB\u5B57\u6BB5</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1,\u5E8F\u5217\u5316\u5668</p></li><li><div class="language-python"><pre><code><span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookModelSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        
        <span class="token comment">#2,\u8BBE\u7F6E\u53EA\u8BFB\u5B57\u6BB5</span>
        read_only_fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;btitle&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;bpub_date&quot;</span><span class="token punctuation">]</span>
</code></pre></div></li></ul></li></ul><h4 id="_4-extra-kwargs" tabindex="-1">4,extra_kwargs <a class="header-anchor" href="#_4-extra-kwargs" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528extra_kwargs, \u7ED9\u751F\u6210\u7684\u5B57\u6BB5,\u6DFB\u52A0\u9009\u9879\u7EA6\u675F\uFF0C\u5C31\u662F\u5B83\u81EA\u52A8\u751F\u6210\u7684\u7EA6\u675F\u6EE1\u8DB3\u4E0D\u4E86\u5B9E\u9645\u9700\u6C42</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><blockquote><p>\u5BF9\u5E94\u7684\u5B57\u6BB5\u540D\u52A0\u4E0A\u9009\u9879\u540D\u7684\u5B57\u5178\u5C31\u53EF\u4EE5\u4E86</p></blockquote><ul><li><p>1, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookModelSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token comment">#3,\u7ED9\u751F\u6210\u7684\u5B57\u6BB5\u6DFB\u52A0\u989D\u5916\u7EA6\u675F</span>
        extra_kwargs <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;bread&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
                <span class="token string">&quot;max_value&quot;</span><span class="token punctuation">:</span><span class="token number">999999</span><span class="token punctuation">,</span>
                <span class="token string">&quot;min_value&quot;</span><span class="token punctuation">:</span><span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token string">&quot;bcomment&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;max_value&quot;</span><span class="token punctuation">:</span> <span class="token number">888888</span><span class="token punctuation">,</span>
                <span class="token string">&quot;min_value&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre></div></li></ul></li></ul></li></ul><h2 id="\u4E00\u7EA7\u89C6\u56FEapiview" tabindex="-1">\u4E00\u7EA7\u89C6\u56FEAPIView <a class="header-anchor" href="#\u4E00\u7EA7\u89C6\u56FEapiview" aria-hidden="true">#</a></h2><h4 id="_5-apiview\u4E4Brequest" tabindex="-1">5,APIView\u4E4Brequest <a class="header-anchor" href="#_5-apiview\u4E4Brequest" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u77E5\u9053APIView\u7684\u7279\u70B9, \u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7request\u83B7\u53D6\u53C2\u6570</p></li><li><p><strong>\u7279\u70B9:</strong></p><ul><li><p>1, \u7EE7\u627F\u81EAView</p></li><li><p>2, \u63D0\u4F9B\u4E86\u81EA\u5DF1\u7684request\u5BF9\u8C61</p><ul><li>get\u53C2\u6570: request.query_params</li><li>post\u53C2\u6570: request.data</li></ul></li><li><p>3, \u63D0\u4F9B\u4E86\u81EA\u5DF1\u7684response\u5BF9\u8C61</p></li><li><p>4, \u5E76\u4E14\u63D0\u4F9B\u4E86\u8BA4\u8BC1, \u6743\u9650, \u9650\u6D41\u7B49\u529F\u80FD</p><blockquote><p>\u83B7\u53D6\u6570\u636E\u7684\u65B9\u5F0F\u4E0D\u4E00\u6837\u4E86</p></blockquote></li></ul></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#1,\u5B9A\u4E49\u7C7B,\u96C6\u6210APIView</span>
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
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_6-apiview\u4E4Bresponse" tabindex="-1">6,APIView\u4E4BResponse <a class="header-anchor" href="#_6-apiview\u4E4Bresponse" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: <strong>\u53EF\u4EE5\u4F7F\u7528response\u54CD\u5E94\u5404\u79CD\u6570\u636E\u548C\u72B6\u6001</strong></p></li><li><p>\u597D\u5904:</p><ul><li>1,\u4F7F\u7528\u4E00\u4E2A\u7C7B, \u5C31\u53EF\u4EE5\u66FF\u4EE3\u4EE5\u524DView\u4E2D\u7684\u5404\u79CD\u7C7B\u578B\u7684Response(HttpResponse,JsonResponse\u2026.)</li><li>2, \u53EF\u4EE5\u914D\u5408\u72B6\u6001\u7801status\u4F7F\u7528</li></ul></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1,\u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> APIView
<span class="token keyword">from</span> django <span class="token keyword">import</span> http
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> status

<span class="token comment">#1,\u5B9A\u4E49\u7C7B,\u96C6\u6210APIView</span>
<span class="token keyword">class</span> <span class="token class-name">BookAPIView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

			<span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>	<span class="token punctuation">{</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token number">13</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>status<span class="token operator">=</span>status<span class="token punctuation">.</span>HTTP_404_NOT_FOUND<span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_7-apiview\u5B9E\u73B0\u5217\u8868\u89C6\u56FE" tabindex="-1">7,APIView\u5B9E\u73B0\u5217\u8868\u89C6\u56FE <a class="header-anchor" href="#_7-apiview\u5B9E\u73B0\u5217\u8868\u89C6\u56FE" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528\u5E8F\u5217\u5316\u5668\u548CAPIView\u5BF9\u5217\u8868\u89C6\u56FE\u8FDB\u884C<strong>\u6539\u5199</strong></p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment"># url(r&#39;^books/$&#39;,views.BookAPIView.as_view()),</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^books/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookListAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#2,\u5E8F\u5217\u5316\u5668\u548CAPIView\u5B9E\u73B0\u5217\u8868\u89C6\u56FE</span>
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
</code></pre></div></li></ul></li><li><p>3, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo

<span class="token comment">#1,\u5B9A\u4E49\u4E66\u7C4D\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> BookInfo
        fields <span class="token operator">=</span> <span class="token string">&quot;__all__&quot;</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_8-apiview\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE" tabindex="-1">8,APIView\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE <a class="header-anchor" href="#_8-apiview\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668\u548CAPVIew\u6539\u5199\u8BE6\u60C5\u89C6\u56FE</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  
    url<span class="token punctuation">(</span><span class="token string">r&#39;^books/(?P&lt;book_id&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookDetailAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment"># 3,\u5E8F\u5217\u5316\u5668\u548CAPIView\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE</span>
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
</code></pre></div></li></ul></li></ul></li></ul><h2 id="\u4E8C\u7EA7\u89C6\u56FE\u4E0Emixin" tabindex="-1">\u4E8C\u7EA7\u89C6\u56FE\u4E0EMixin <a class="header-anchor" href="#\u4E8C\u7EA7\u89C6\u56FE\u4E0Emixin" aria-hidden="true">#</a></h2><h4 id="_9-\u4E8C\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u5217\u8868\u89C6\u56FE" tabindex="-1">9,\u4E8C\u7EA7\u89C6\u56FE,\u5B9E\u73B0\u5217\u8868\u89C6\u56FE <a class="header-anchor" href="#_9-\u4E8C\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u5217\u8868\u89C6\u56FE" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u901A\u8FC7GenericAPIView\u6539\u5199\u5217\u8868\u89C6\u56FE</p><blockquote><p>\u4E3B\u8981\u5C31\u662F\u628A\u5404\u4E2A\u65B9\u6CD5\u8C03\u7528\u7684\u6A21\u578B\u7C7B\u653E\u5230\u7C7B\u7684\u5C5E\u6027\u4E0A\uFF0C\u8FD9\u6837\u6BD4\u5982\u6362\u6210\u82F1\u96C4\u7684\u65F6\u5019\u53EA\u9700\u8981\u6539\u6539\u7C7B\u5C5E\u6027\u5C31\u53EF\u4EE5\u4E86\uFF0C\u800C\u4E0D\u662F\u5230\u6BCF\u4E2A\u65B9\u6CD5\u91CC\u9762\u5355\u72EC\u4FEE\u6539\uFF0C\u76F8\u5BF9\u4E8E\u4E4B\u524D\u7684\uFF0C\u4EE3\u7801\u8FD8\u6CA1\u6709\u51CF\u5C11\u4F46\u590D\u7528\u6027\u66F4\u597D\uFF1B</p></blockquote></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1,\u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^generic_apiview_books/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookListGenericAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#4,\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u7279\u70B9</span>
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
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_10-\u4E8C\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE" tabindex="-1">10,\u4E8C\u7EA7\u89C6\u56FE,\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE <a class="header-anchor" href="#_10-\u4E8C\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u8BE6\u60C5\u89C6\u56FE" aria-hidden="true">#</a></h4><blockquote><p>\u8FD9\u91CC\u7528\u5230\u4E86get_object()\u65B9\u6CD5\uFF0C\u4E0B\u9762\u4F1A\u8BB2\uFF1B\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u56E0\u4E3A\u6E90\u7801\u5DF2\u7ECF\u5199\u6B7B\u4E86\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u56FA\u5B9A\u628A\u4F20\u8FDB\u6765\u7684\u53C2\u6570\u5199\u6210pk\uFF1B</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528GenericAPIView\u6539\u5199\u8BE6\u60C5\u89C6\u56FE</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code>url<span class="token punctuation">(</span><span class="token string">r&#39;^generic_apiview_books/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookDetailGenericAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#6,\u4F7F\u7528\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u5B9E\u73B0, \u8BE6\u60C5\u89C6\u56FE</span>
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
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_11-get-object\u65B9\u6CD5" tabindex="-1">11,get_object\u65B9\u6CD5 <a class="header-anchor" href="#_11-get-object\u65B9\u6CD5" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u7406\u89E3get_object\u5982\u4F55\u6839\u636Epk\u5728queryset\u83B7\u53D6\u7684\u5355\u4E2A\u5BF9\u8C61</p></li><li><p>\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u5C5E\u6027\u65B9\u6CD5\u603B\u7ED3</p><ul><li><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
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
</code></pre></div></li></ul></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookDetailGenericAPIView</span><span class="token punctuation">(</span>GenericAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

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

</code></pre></div></li></ul></li></ul></li></ul><h4 id="_12-mixin" tabindex="-1">12,MiXin <a class="header-anchor" href="#_12-mixin" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u77E5\u9053mixin\u7684\u4F5C\u7528, \u5E38\u89C1\u7684mixin\u7C7B</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
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
</code></pre></div></li></ul></li></ul><h4 id="_13-\u4E8C\u7EA7\u89C6\u56FE-mixin\u914D\u5408\u4F7F\u7528" tabindex="-1">13,\u4E8C\u7EA7\u89C6\u56FE,MiXin\u914D\u5408\u4F7F\u7528 <a class="header-anchor" href="#_13-\u4E8C\u7EA7\u89C6\u56FE-mixin\u914D\u5408\u4F7F\u7528" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528mixin\u548C\u4E8C\u7EA7\u89C6\u56FEGenericAPIView\u5BF9\u5217\u8868\u89C6\u56FE\u548C\u8BE6\u60C5\u89C6\u56FE\u505A\u6539\u5199</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^mixin_generic_apiview_books/$&#39;</span><span class="token punctuation">,</span>
        views<span class="token punctuation">.</span>BookListMixinGenericAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  
    url<span class="token punctuation">(</span><span class="token string">r&#39;^mixin_generic_apiview_books/(?P&lt;book_id&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>
        views<span class="token punctuation">.</span>BookDetailMixinGenericAPIView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div></li><li></li></ul></li><li><p>2,\u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>mixins <span class="token keyword">import</span> ListModelMixin<span class="token punctuation">,</span>CreateModelMixin<span class="token punctuation">,</span>RetrieveModelMixin<span class="token punctuation">,</span>UpdateModelMixin<span class="token punctuation">,</span>DestroyModelMixin
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
</code></pre></div></li></ul></li></ul></li></ul><h2 id="\u4E09\u7EA7\u89C6\u56FE\u4E0E\u89C6\u56FE\u96C6" tabindex="-1">\u4E09\u7EA7\u89C6\u56FE\u4E0E\u89C6\u56FE\u96C6 <a class="header-anchor" href="#\u4E09\u7EA7\u89C6\u56FE\u4E0E\u89C6\u56FE\u96C6" aria-hidden="true">#</a></h2><h4 id="_14-\u4E09\u7EA7\u89C6\u56FE" tabindex="-1">14,\u4E09\u7EA7\u89C6\u56FE <a class="header-anchor" href="#_14-\u4E09\u7EA7\u89C6\u56FE" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u77E5\u9053\u4E09\u7EA7\u89C6\u56FE\u7684\u4F5C\u7528, \u4EE5\u53CA\u5E38\u89C1\u7684\u4E09\u7EA7\u89C6\u56FE</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
\u7279\u70B9:
\u5982\u679C\u6CA1\u6709\u5927\u91CF\u81EA\u5B9A\u4E49\u7684\u884C\u4E3A, \u53EF\u4EE5\u4F7F\u7528\u901A\u7528\u89C6\u56FE(\u4E09\u7EA7\u89C6\u56FE)\u89E3\u51B3

\u5E38\u89C1\u7684\u4E09\u7EA7\u89C6\u56FE:
\u7C7B\u540D\u79F0                 \u7236\u7C7B              \u63D0\u4F9B\u65B9\u6CD5        \u4F5C\u7528
CreateAPIView       GenericAPIView\uFF0C   post           \u521B\u5EFA\u5355\u4E2A\u5BF9\u8C61
                    CreateModelMixin
                    
ListAPIView         GenericAPIView,    get            \u67E5\u8BE2\u6240\u6709\u7684\u6570\u636E
                    ListModelMixin

RetrieveAPIView     GenericAPIView,    get            \u83B7\u53D6\u5355\u4E2A\u5BF9\u8C61
                    RetrieveModelMixin 
                    
DestroyAPIView      GenericAPIView,    delete         \u5220\u9664\u5355\u4E2A\u5BF9\u8C61
                    DestroyModelMixin
                    
UpdateAPIView       GenericAPIView,    put            \u66F4\u65B0\u5355\u4E2A\u5BF9\u8C61
                    UpdateModelMixin             


&quot;&quot;&quot;</span>
</code></pre></div></li></ul></li></ul><h4 id="_15-\u4E09\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u5217\u8868-\u8BE6\u60C5\u89C6\u56FE" tabindex="-1">15,\u4E09\u7EA7\u89C6\u56FE,\u5B9E\u73B0\u5217\u8868,\u8BE6\u60C5\u89C6\u56FE <a class="header-anchor" href="#_15-\u4E09\u7EA7\u89C6\u56FE-\u5B9E\u73B0\u5217\u8868-\u8BE6\u60C5\u89C6\u56FE" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528\u4E09\u7EA7\u89C6\u56FE\u5B9E\u73B0\u5217\u8868\u89C6\u56FE,\u8BE6\u60C5\u89C6\u56FE\u529F\u80FD</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1,\u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^third_view/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookListThirdView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^third_view/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>
        views<span class="token punctuation">.</span>BookDetailThirdView<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div></li></ul></li><li><p>2,\u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#10,\u4E09\u7EA7\u89C6\u56FE,\u5B9E\u73B0\u5217\u8868,\u8BE6\u60C5\u89C6\u56FE</span>
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>generics <span class="token keyword">import</span> ListAPIView<span class="token punctuation">,</span>CreateAPIView
<span class="token keyword">class</span> <span class="token class-name">BookListThirdView</span><span class="token punctuation">(</span>ListAPIView<span class="token punctuation">,</span>CreateAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment">#1,\u63D0\u4F9B\u516C\u5171\u7684\u5C5E\u6027</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer

<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>generics <span class="token keyword">import</span> RetrieveAPIView<span class="token punctuation">,</span>UpdateAPIView<span class="token punctuation">,</span>DestroyAPIView
<span class="token keyword">class</span> <span class="token class-name">BookDetailThirdView</span><span class="token punctuation">(</span>RetrieveAPIView<span class="token punctuation">,</span>UpdateAPIView<span class="token punctuation">,</span>DestroyAPIView<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment">#1,\u63D0\u4F9B\u901A\u7528\u5C5E\u6027</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_16-\u89C6\u56FE\u96C6" tabindex="-1">16,\u89C6\u56FE\u96C6 <a class="header-anchor" href="#_16-\u89C6\u56FE\u96C6" aria-hidden="true">#</a></h4><blockquote><p>\u5C31\u662F\u6BD4\u5982\u4F60\u83B7\u53D6\u5355\u4E2A\uFF0C\u4EE5\u53CA\u83B7\u53D6\u6240\u6709\u4F7F\u7528\u7684\u90FD\u662Fget()\u65B9\u6CD5\uFF0C\u8FD9\u65F6\u5019\u5C31\u4E0D\u80FD\u628A\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5199\u5728\u4E00\u4E2A\u7C7B\u4E4B\u4E2D\uFF0C\u6240\u4EE5\u8FD9\u5C31\u662Fviewset\u9700\u8981\u89E3\u51B3\u7684\u95EE\u9898\uFF1B</p></blockquote><ul><li><p>\u76EE\u7684: \u77E5\u9053\u89C6\u56FE\u96C6\u7684\u4F5C\u7528, \u4EE5\u53CA\u5E38\u89C1\u7684\u89C6\u56FE\u96C6</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><div class="language-python"><pre><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
\u89C6\u56FE\u96C6
\u7279\u70B9:
    1,\u53EF\u4EE5\u5C06\u4E00\u7EC4\u76F8\u5173\u7684\u64CD\u4F5C, \u653E\u5728\u4E00\u4E2A\u7C7B\u4E2D\u8FDB\u884C\u5B8C\u6210
    2,\u4E0D\u63D0\u4F9Bget,post\u65B9\u6CD5, \u4F7F\u7528retrieve, create\u65B9\u6CD5\u6765\u66FF\u4EE3
    3,\u53EF\u4EE5\u5C06\u6807\u51C6\u7684\u8BF7\u6C42\u65B9\u5F0F(get,post,put,delete), \u548Cmixin\u4E2D\u7684\u65B9\u6CD5\u505A\u6620\u5C04
    
\u5E38\u89C1\u7684\u89C6\u56FE\u96C6:
\u7C7B\u540D\u79F0                 \u7236\u7C7B              \u4F5C\u7528
ViewSet               APIView          \u53EF\u4EE5\u505A\u8DEF\u7531\u6620\u5C04\uFF08\u6CA1\u6709\u5176\u4ED6\u4EC0\u4E48\u7528\uFF09
                      ViewSetMixin\uFF08\u63D0\u4F9B\u8DEF\u7531\u6620\u5C04\uFF09		
                      
GenericViewSet        GenericAPIView   \u53EF\u4EE5\u505A\u8DEF\u7531\u6620\u5C04,\u53EF\u4EE5\u4F7F\u7528\u4E09\u4E2A\u5C5E\u6027,\u4E09\u4E2A\u65B9\u6CD5
                      ViewSetMixin
                             
ModelViewSet          GenericAPIView   \u6240\u6709\u7684\u589E\u5220\u6539\u67E5\u529F\u80FD,\u53EF\u4EE5\u4F7F\u7528\u4E09\u4E2A\u5C5E\u6027,\u4E09\u4E2A\u65B9\u6CD5
                      5\u4E2Amixin\u7C7B

ReadOnlyModelViewSet  GenericAPIView   \u83B7\u53D6\u5355\u4E2A,\u6240\u6709\u6570\u636E,\u53EF\u4EE5\u4F7F\u7528\u4E09\u4E2A\u5C5E\u6027,\u4E09\u4E2A\u65B9\u6CD5
                      RetrieveModelMixin
                      ListModelMixin

&quot;&quot;&quot;</span>
</code></pre></div></li></ul></li></ul><h4 id="_17-viewset" tabindex="-1">17,ViewSet <a class="header-anchor" href="#_17-viewset" aria-hidden="true">#</a></h4><blockquote><p>\u9700\u8981\u6CE8\u610F\u8FD9\u91CC\u8DEF\u7531\u7684\u6620\u5C04\uFF1B</p></blockquote><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528ViewSet\u5B9E\u73B0\u83B7\u53D6\u6240\u6709,\u5355\u4E2A\u6570\u636E</p><blockquote><p>\u5982\u679C\u4E0D\u7528viewset\uFF0C\u4E00\u4E2A\u89C6\u56FE\u7C7B\u91CC\u9762\u662F\u65E0\u6CD5\u4F7F\u7528\u4E24\u4E2Aget\u65B9\u6CD5\u7684</p></blockquote></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1,\u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^viewset/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BooksViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^viewset/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BooksViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;retrieve&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li><li><p>2,\u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#12, \u4F7F\u7528viewset\u5B9E\u73B0\u83B7\u53D6\u6240\u6709\u548C\u5355\u4E2A</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> get_object_or_404
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>serializer <span class="token keyword">import</span> BookInfoModelSerializer
<span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> viewsets

<span class="token keyword">class</span> <span class="token class-name">BooksViewSet</span><span class="token punctuation">(</span>viewsets<span class="token punctuation">.</span>ViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    A simple ViewSet for listing or retrieving books.
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">list</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> BookInfoModelSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>queryset<span class="token punctuation">,</span> many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">retrieve</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> pk<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        book <span class="token operator">=</span> get_object_or_404<span class="token punctuation">(</span>queryset<span class="token punctuation">,</span> pk<span class="token operator">=</span>pk<span class="token punctuation">)</span>
        serializer <span class="token operator">=</span> BookInfoModelSerializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_18-readonlymodelviewset" tabindex="-1">18,ReadOnlyModelViewSet <a class="header-anchor" href="#_18-readonlymodelviewset" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u4F7F\u7528ReadOnlyModelViewSet\u83B7\u53D6\u6240\u6709, \u548C\u5355\u4E2A\u6570\u636E</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^readonly_viewset/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>BooksReadOnlyModelViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  
    url<span class="token punctuation">(</span><span class="token string">r&#39;^readonly_viewset/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span> views<span class="token punctuation">.</span>BooksReadOnlyModelViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;retrieve&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#13,\u4F7F\u7528ReadOnlyModelViewSet\u5B9E\u73B0\u83B7\u53D6\u5355\u4E2A\u548C\u6240\u6709</span>
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>viewsets <span class="token keyword">import</span> ReadOnlyModelViewSet
<span class="token keyword">class</span> <span class="token class-name">BooksReadOnlyModelViewSet</span><span class="token punctuation">(</span>ReadOnlyModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_19-modelviewset" tabindex="-1">19,ModelViewSet <a class="header-anchor" href="#_19-modelviewset" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u4F7F\u7528ModelViewSet\u5B9E\u73B0\u5217\u8868\u89C6\u56FE,\u8BE6\u60C5\u89C6\u56FE\u529F\u80FD</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^model_viewset/$&#39;</span><span class="token punctuation">,</span> 
        views<span class="token punctuation">.</span>BookModelViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;create&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  
    url<span class="token punctuation">(</span><span class="token string">r&#39;^model_viewset/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span> 
        views<span class="token punctuation">.</span>BookModelViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;retrieve&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;put&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;destroy&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#14,ModelViewSet\u5B9E\u73B0\u5217\u8868\u89C6\u56FE,\u8BE6\u60C5\u89C6\u56FE\u529F\u80FD</span>
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>viewsets <span class="token keyword">import</span> ModelViewSet
<span class="token keyword">class</span> <span class="token class-name">BookModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer
</code></pre></div></li></ul></li></ul></li></ul><h2 id="\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C" tabindex="-1">\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C <a class="header-anchor" href="#\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C" aria-hidden="true">#</a></h2><h4 id="_1-\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C" tabindex="-1">1,\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C <a class="header-anchor" href="#_1-\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u7ED9\u89C6\u56FE\u96C6\u6DFB\u52A0\u989D\u5916\u7684\u52A8\u4F5C(\u65B9\u6CD5)</p><blockquote><p>\u4E0D\u4FEE\u6539\u539F\u6709\u7684\u65B9\u6CD5\uFF0C\u4F46\u9700\u8981\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u65B9\u6CD5\uFF1A\u6BD4\u5982\u67E5\u51FA\u9605\u8BFB\u91CF\u5927\u4E8E20\u7684\u4E66\u7C4D</p><p>\u539F\u7406\uFF1A\u5C31\u662F\u628A\u81EA\u5DF1\u81EA\u5B9A\u4E49\u7684\u65B9\u6CD5\u4E0Eget\u6216\u5176\u4ED6\u505A\u4E00\u4E2A\u6620\u5C04\u5C31\u53EF\u4EE5\u4E86</p></blockquote></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>urls <span class="token keyword">import</span> url
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^books/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookInfoModelViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;post&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;create&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">(</span><span class="token string">r&#39;^books/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookInfoModelViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;retrieve&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;put&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;delete&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;destory&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    url<span class="token punctuation">(</span><span class="token string">r&#39;^books/bread/$&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookInfoModelViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;bread_book&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>viewsets <span class="token keyword">import</span> ModelViewSet
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>serializers <span class="token keyword">import</span> BookInfoModelSerializer
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response

<span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer

    <span class="token comment">#1,\u83B7\u53D6\u9605\u8BFB\u91CF\u5927\u4E8E20\u7684\u4E66\u7C4D</span>
    <span class="token keyword">def</span> <span class="token function">bread_book</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">#1,\u83B7\u53D6\u6307\u5B9A\u4E66\u7C4D</span>
        books <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>bread__gt<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>

        <span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668\u5BF9\u8C61</span>
        serializer <span class="token operator">=</span> self<span class="token punctuation">.</span>get_serializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>books<span class="token punctuation">,</span>many<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

        <span class="token comment">#3,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

    <span class="token comment">#2,\u4FEE\u6539\u4E66\u7C4D\u7F16\u53F7\u4E3A1\u7684, \u9605\u8BFB\u91CF\u4E3A99</span>

</code></pre></div></li></ul></li><li><p>3, \u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> booktest<span class="token punctuation">.</span>models <span class="token keyword">import</span> BookInfo

<span class="token comment">#1,\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> BookInfo
        fields <span class="token operator">=</span> <span class="token string">&quot;__all__&quot;</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_2-\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C-partial" tabindex="-1">2,\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C,partial <a class="header-anchor" href="#_2-\u89C6\u56FE\u96C6\u989D\u5916\u52A8\u4F5C-partial" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u7F16\u5199\u989D\u5916\u52A8\u4F5C\u6DFB\u52A0\u53C2\u6570, \u5E76\u4E14\u66F4\u65B0\u5C40\u90E8\u4FE1\u606F</p><blockquote><p>\u6BD4\u5982\u53EA\u4F20bread:99\u53BB\u4FEE\u6539\u5C31\u4F1A\u62A5\u9519\uFF0C\u52A0\u4E0A\u8FD9\u4E2A\u5B57\u6BB5\u5C31\u4E0D\u4F1A\u62A5\u9519</p></blockquote></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code>    url<span class="token punctuation">(</span><span class="token string">r&#39;^books/bread/(?P&lt;pk&gt;\\d+)/$&#39;</span><span class="token punctuation">,</span>
     views<span class="token punctuation">.</span>BookInfoModelViewSet<span class="token punctuation">.</span>as_view<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;put&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;update_book_bread&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

</code></pre></div></li></ul></li><li><p>2, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#2,\u4FEE\u6539\u4E66\u7C4D\u7F16\u53F7\u4E3A1\u7684, \u9605\u8BFB\u91CF\u4E3A99</span>
    <span class="token keyword">def</span> <span class="token function">update_book_bread</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment">#1,\u83B7\u53D6\u53C2\u6570</span>
        book <span class="token operator">=</span> self<span class="token punctuation">.</span>get_object<span class="token punctuation">(</span><span class="token punctuation">)</span>
        data <span class="token operator">=</span> request<span class="token punctuation">.</span>data

        <span class="token comment">#2,\u521B\u5EFA\u5E8F\u5217\u5316\u5668,partial=True\u53EF\u4EE5\u5C40\u90E8\u66F4\u65B0</span>
        serializer <span class="token operator">=</span> self<span class="token punctuation">.</span>get_serializer<span class="token punctuation">(</span>instance<span class="token operator">=</span>book<span class="token punctuation">,</span>data<span class="token operator">=</span>data<span class="token punctuation">,</span>partial<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

        <span class="token comment">#3,\u6821\u9A8C,\u5165\u5E93</span>
        serializer<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span>raise_exception<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        serializer<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">#4,\u8FD4\u56DE\u54CD\u5E94</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span>serializer<span class="token punctuation">.</span>data<span class="token punctuation">,</span>status<span class="token operator">=</span><span class="token number">201</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li></ul><h2 id="router" tabindex="-1">router <a class="header-anchor" href="#router" aria-hidden="true">#</a></h2><h4 id="_3-\u8DEF\u7531router" tabindex="-1">3,\u8DEF\u7531router <a class="header-anchor" href="#_3-\u8DEF\u7531router" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u901A\u8FC7DefaultRouter\u548CSimpleRouter\u4E24\u4E2A\u7C7B\u6765\u81EA\u52A8\u751F\u6210\u8DEF\u7531</p></li><li><p>DefautRouter\u751F\u6210\u8DEF\u7531\u683C\u5F0F:</p><ul><li><p>\u7279\u70B9: \u5171\u6709\u4E09\u5BF9\u8DEF\u7531</p><ul><li>1, \u5217\u8868\u8DEF\u7531</li><li>2, \u8BE6\u60C5\u8DEF\u7531</li><li>3, \u6839\u8DEF\u7531</li></ul></li><li><div class="language-python"><pre><code><span class="token punctuation">[</span>

<span class="token operator">&lt;</span>RegexURLPattern haha<span class="token operator">-</span><span class="token builtin">list</span> <span class="token operator">^</span>books<span class="token operator">/</span>$<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
<span class="token operator">&lt;</span>RegexURLPattern haha<span class="token operator">-</span><span class="token builtin">list</span> <span class="token operator">^</span>books\\<span class="token punctuation">.</span><span class="token punctuation">(</span>?P<span class="token operator">&lt;</span><span class="token builtin">format</span><span class="token operator">&gt;</span><span class="token punctuation">[</span>a<span class="token operator">-</span>z0<span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">/</span>?$<span class="token operator">&gt;</span><span class="token punctuation">,</span>

<span class="token operator">&lt;</span>RegexURLPattern haha<span class="token operator">-</span>detail <span class="token operator">^</span>books<span class="token operator">/</span><span class="token punctuation">(</span>?P<span class="token operator">&lt;</span>pk<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">/</span>$<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
<span class="token operator">&lt;</span>RegexURLPattern haha<span class="token operator">-</span>detail <span class="token operator">^</span>books<span class="token operator">/</span><span class="token punctuation">(</span>?P<span class="token operator">&lt;</span>pk<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span>\\<span class="token punctuation">.</span><span class="token punctuation">(</span>?P<span class="token operator">&lt;</span><span class="token builtin">format</span><span class="token operator">&gt;</span><span class="token punctuation">[</span>a<span class="token operator">-</span>z0<span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">/</span>?$<span class="token operator">&gt;</span><span class="token punctuation">,</span> 

<span class="token operator">&lt;</span>RegexURLPattern api<span class="token operator">-</span>root <span class="token operator">^</span>$<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
<span class="token operator">&lt;</span>RegexURLPattern api<span class="token operator">-</span>root <span class="token operator">^</span>\\<span class="token punctuation">.</span><span class="token punctuation">(</span>?P<span class="token operator">&lt;</span><span class="token builtin">format</span><span class="token operator">&gt;</span><span class="token punctuation">[</span>a<span class="token operator">-</span>z0<span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">/</span>?$<span class="token operator">&gt;</span>

<span class="token punctuation">]</span>

</code></pre></div></li><li><p>SimpleRouter\u751F\u6210\u8DEF\u7531\u683C\u5F0F:</p><ul><li><p>\u7279\u70B9: \u751F\u6210\u4E24\u4E2A\u8DEF\u7531</p><ul><li>1, \u5217\u8868\u8DEF\u7531</li><li>2, \u8BE6\u60C5\u8DEF\u7531</li></ul></li><li><div class="language-python"><pre><code><span class="token punctuation">[</span>
<span class="token operator">&lt;</span>RegexURLPattern haha<span class="token operator">-</span><span class="token builtin">list</span> <span class="token operator">^</span>books<span class="token operator">/</span>$<span class="token operator">&gt;</span><span class="token punctuation">,</span> 
<span class="token operator">&lt;</span>RegexURLPattern haha<span class="token operator">-</span>detail <span class="token operator">^</span>books<span class="token operator">/</span><span class="token punctuation">(</span>?P<span class="token operator">&lt;</span>pk<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">/</span>$<span class="token operator">&gt;</span>
<span class="token punctuation">]</span>
</code></pre></div></li></ul></li></ul></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B50\u8DEF\u7531</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>routers <span class="token keyword">import</span> SimpleRouter<span class="token punctuation">,</span>DefaultRouter
<span class="token comment">#1,\u521B\u5EFA\u8DEF\u7531\u5BF9\u8C61</span>
router <span class="token operator">=</span> SimpleRouter<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#2,\u6CE8\u518C\u89C6\u56FE\u96C6</span>
router<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">&#39;books&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>BookInfoModelViewSet<span class="token punctuation">,</span>base_name<span class="token operator">=</span><span class="token string">&quot;haha&quot;</span><span class="token punctuation">)</span>
urlpatterns <span class="token operator">+=</span> router<span class="token punctuation">.</span>urls

<span class="token comment">#3,\u8F93\u51FA\u7ED3\u679C</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>urlpatterns<span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>1, \u4F7F\u7528DRF\u53EF\u4EE5\u81EA\u52A8\u6839\u636E\u524D\u7AEF\u9700\u8981\u7684\u7C7B\u578B, \u8FD4\u56DE\u5BF9\u5E94\u683C\u5F0F\u7684\u6570\u636E</li><li>2, \u8BF7\u6C42\u7684\u65F6\u5019\u5728\u8BF7\u6C42\u5934\u4E2D\u6807\u8BB0, Accept\u5373\u53EF</li><li>3, \u53EA\u6709\u89C6\u56FE\u96C6,\u624D\u80FD\u81EA\u52A8\u751F\u6210\u8DEF\u7531</li></ul></li></ul><h4 id="_4-\u88C5\u9970action" tabindex="-1">4,\u88C5\u9970action <a class="header-anchor" href="#_4-\u88C5\u9970action" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u901A\u8FC7action\u88C5\u9970\u65B9\u6CD5, \u81EA\u52A8\u751F\u6210\u8DEF\u7531</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p></li><li><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>decorators <span class="token keyword">import</span> action

<span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#1,\u83B7\u53D6\u9605\u8BFB\u91CF\u5927\u4E8E20\u7684\u4E66\u7C4D</span>
    <span class="token decorator annotation punctuation">@action</span><span class="token punctuation">(</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>detail<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token comment">#\u751F\u6210\u8DEF\u7531\u89C4\u5219: \u524D\u7F00/\u65B9\u6CD5\u540D/</span>
    <span class="token keyword">def</span> <span class="token function">bread_book</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#2,\u4FEE\u6539\u4E66\u7C4D\u7F16\u53F7\u4E3A1\u7684, \u9605\u8BFB\u91CF\u4E3A99</span>
    <span class="token decorator annotation punctuation">@action</span><span class="token punctuation">(</span>methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;PUT&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>detail<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span> <span class="token comment">#\u751F\u6210\u8DEF\u7531\u89C4\u5219: \u524D\u7F00/{pk}/\u65B9\u6CD5\u540D/</span>
    <span class="token keyword">def</span> <span class="token function">update_book_bread</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">,</span>pk<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

</code></pre></div></li></ul></li></ul><h2 id="\u6743\u9650\u8BBE\u7F6E" tabindex="-1">\u6743\u9650\u8BBE\u7F6E <a class="header-anchor" href="#\u6743\u9650\u8BBE\u7F6E" aria-hidden="true">#</a></h2><h4 id="_5-\u8BA4\u8BC1authentication" tabindex="-1">5,\u8BA4\u8BC1Authentication <a class="header-anchor" href="#_5-\u8BA4\u8BC1authentication" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863, \u914D\u7F6E\u8BA4\u8BC1\u5185\u5BB9</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u914D\u7F6E(<a href="http://setteings.py" target="_blank" rel="noopener noreferrer">setteings.py</a>)</p><ul><li><div class="language-python"><pre><code><span class="token comment"># DRF\u914D\u7F6E\u4FE1\u606F</span>
REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">#1,\u5168\u5C40\u8BA4\u8BC1</span>
    <span class="token string">&#39;DEFAULT_AUTHENTICATION_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;rest_framework.authentication.BasicAuthentication&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u6B64\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u6848\u4F7F\u7528HTTP\u57FA\u672C\u8EAB\u4EFD\u9A8C\u8BC1,\u7528\u4E8E\u6D4B\u8BD5\u4F7F\u7528</span>
        <span class="token string">&#39;rest_framework.authentication.SessionAuthentication&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u81EA\u5DF1\u670D\u52A1\u5668\u8BA4\u8BC1\u7528\u6237</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul></li><li><p>2, \u5C40\u90E8\u914D\u7F6E(<a href="http://views.py" target="_blank" rel="noopener noreferrer">views.py</a>)</p><ul><li><div class="language-python"><pre><code><span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#1,\u5C40\u90E8\u8BA4\u8BC1</span>
    authentication_classes <span class="token operator">=</span> <span class="token punctuation">[</span>SessionAuthentication<span class="token punctuation">]</span>
</code></pre></div></li></ul></li></ul></li><li><p>\u6CE8\u610F\u70B9:</p><ul><li>\u5982\u679C\u914D\u7F6E\u4E86\u5168\u5C40\u548C\u5C40\u90E8, \u9ED8\u8BA4\u4F7F\u7528\u5C40\u90E8</li></ul></li></ul><h4 id="_6-\u6743\u9650permissions" tabindex="-1">6,\u6743\u9650Permissions <a class="header-anchor" href="#_6-\u6743\u9650permissions" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863, \u914D\u7F6E\u6743\u9650\u5185\u5BB9</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u6743\u9650\u914D\u7F6E(<a href="http://settings.py" target="_blank" rel="noopener noreferrer">settings.py</a>)</p><ul><li><div class="language-python"><pre><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">#1,\u5168\u5C40\u8BA4\u8BC1</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#2,\u5168\u5C40\u6743\u9650</span>
    <span class="token string">&#39;DEFAULT_PERMISSION_CLASSES&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token comment"># &#39;rest_framework.permissions.IsAuthenticated&#39;, #\u666E\u901A\u7528\u6237</span>
        <span class="token comment"># &#39;rest_framework.permissions.AllowAny&#39;, #\u6240\u6709\u7528\u6237</span>
        <span class="token string">&#39;rest_framework.permissions.IsAdminUser&#39;</span><span class="token punctuation">,</span> <span class="token comment">#\u7BA1\u7406\u5458\u6237</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul></li><li><p>2, \u5C40\u90E8\u6743\u9650\u914D\u7F6E(<a href="http://views.py" target="_blank" rel="noopener noreferrer">views.py</a>)</p><ul><li><div class="language-python"><pre><code><span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#1,\u5C40\u90E8\u8BA4\u8BC1</span>
		<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">#2,\u5C40\u90E8\u6743\u9650</span>
    <span class="token comment"># permission_classes = [AllowAny]</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_7-\u9650\u6D41throttling" tabindex="-1">7,\u9650\u6D41Throttling <a class="header-anchor" href="#_7-\u9650\u6D41throttling" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E, \u9650\u5236\u4E0D\u540C\u7528\u6237\u7684\u8BBF\u95EE\u6B21\u6570</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u914D\u7F6E</p><ul><li><div class="language-python"><pre><code><span class="token comment"># DRF\u914D\u7F6E\u4FE1\u606F</span>
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
</code></pre></div></li></ul></li><li><p>2, \u5C40\u90E8\u914D\u7F6E</p><ul><li><div class="language-python"><pre><code><span class="token comment">#1,\u89C6\u56FE\u96C6</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    queryset <span class="token operator">=</span> BookInfo<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    serializer_class <span class="token operator">=</span> BookInfoModelSerializer

    <span class="token comment">#1,\u5C40\u90E8\u8BA4\u8BC1</span>
    <span class="token comment"># authentication_classes = [SessionAuthentication]</span>

    <span class="token comment">#2,\u5C40\u90E8\u6743\u9650</span>
    <span class="token comment"># permission_classes = [AllowAny]</span>

    <span class="token comment">#3,\u5C40\u90E8\u9650\u6D41</span>
    throttle_classes <span class="token operator">=</span> <span class="token punctuation">[</span>AnonRateThrottle<span class="token punctuation">]</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_8-\u53EF\u9009\u9650\u6D41" tabindex="-1">8, \u53EF\u9009\u9650\u6D41 <a class="header-anchor" href="#_8-\u53EF\u9009\u9650\u6D41" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u5B9A\u4E49\u53EF\u9009\u9650\u6D41, \u7528\u5728\u4E0D\u540C\u7684\u7C7B\u89C6\u56FE\u4E2D</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u5B9A\u4E49</p><ul><li><div class="language-python"><pre><code><span class="token comment"># DRF\u914D\u7F6E\u4FE1\u606F</span>
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
</code></pre></div></li></ul></li><li><p>2, \u5C40\u90E8\u4F7F\u7528</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">TestView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    throttle_scope <span class="token operator">=</span> <span class="token string">&quot;uploads&quot;</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token string">&quot;testing....&quot;</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li></ul><h2 id="url\u53EF\u9009\u53C2\u6570\u8BBE\u7F6E" tabindex="-1">url\u53EF\u9009\u53C2\u6570\u8BBE\u7F6E <a class="header-anchor" href="#url\u53EF\u9009\u53C2\u6570\u8BBE\u7F6E" aria-hidden="true">#</a></h2><h4 id="_9-\u5206\u9875pagination" tabindex="-1">9,\u5206\u9875Pagination <a class="header-anchor" href="#_9-\u5206\u9875pagination" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u6587\u6863, \u8BBE\u7F6E\u5206\u9875\u8FD4\u56DE</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5168\u5C40\u914D\u7F6E</p><ul><li><div class="language-python"><pre><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  
    <span class="token comment">#5,\u5168\u5C40\u5206\u9875</span>
    <span class="token string">&#39;DEFAULT_PAGINATION_CLASS&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;rest_framework.pagination.LimitOffsetPagination&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;PAGE_SIZE&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul></li><li><p>2, \u5C40\u90E8\u914D\u7F6E</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    
    <span class="token comment">#5,\u5C40\u90E8\u5206\u9875</span>
    <span class="token comment"># pagination_class = LimitOffsetPagination # ?limit=100 \u6216\u8005 ?offset=400&amp;limit=100</span>
    pagination_class <span class="token operator">=</span> PageNumberPagination <span class="token comment"># ?page=4</span>

</code></pre></div></li></ul></li></ul></li></ul><h4 id="_10-\u81EA\u5B9A\u4E49\u5206\u9875\u7C7B" tabindex="-1">10, \u81EA\u5B9A\u4E49\u5206\u9875\u7C7B <a class="header-anchor" href="#_10-\u81EA\u5B9A\u4E49\u5206\u9875\u7C7B" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u81EA\u5B9A\u4E49\u7C7B, \u5B9E\u73B0\u6307\u5B9A\u5206\u9875\u5927\u5C0F\u6548\u679C</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token comment">#\u81EA\u5B9A\u4E49\u5206\u9875\u5BF9\u8C61</span>
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

</code></pre></div></li></ul></li></ul></li></ul><h4 id="_11-\u8FC7\u6EE4filtering" tabindex="-1">11,\u8FC7\u6EE4Filtering <a class="header-anchor" href="#_11-\u8FC7\u6EE4filtering" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u6839\u636E\u6587\u6863\u914D\u7F6E,\u8FDB\u884C\u8FC7\u6EE4\u6570\u636E\u83B7\u53D6</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B89\u88C5\u6269\u5C55django-filters</p><ul><li>pip install django-filter</li></ul></li><li><p>2, \u6CE8\u518C\u5B50\u5E94\u7528</p><ul><li><div class="language-"><pre><code>INSTALLED_APPS = [
    ...
    &#39;django_filters&#39;,
]
</code></pre></div></li></ul></li><li><p>3, \u5168\u5C40\u914D\u7F6E</p><ul><li><div class="language-python"><pre><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token string">&#39;DEFAULT_FILTER_BACKENDS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;django_filters.rest_framework.DjangoFilterBackend&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul></li><li><p>4, \u5168\u5C40\u914D\u7F6E(<a href="http://views.py" target="_blank" rel="noopener noreferrer">views.py</a>)</p><ul><li><div class="language-"><pre><code>class BookInfoModelViewSet(ModelViewSet):
	....
  #7,\u5C40\u90E8\u8FC7\u6EE4
  filter_backends = [DjangoFilterBackend]
  filterset_fields = [&#39;id&#39;, &#39;btitle&#39;,&quot;is_delete&quot;]
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_12-\u6392\u5E8Forderingfilter" tabindex="-1">12,\u6392\u5E8FOrderingFilter <a class="header-anchor" href="#_12-\u6392\u5E8Forderingfilter" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u6587\u6863, \u4F7F\u7528\u6307\u5B9A\u7684\u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u7C7B\u89C6\u56FE</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">BookInfoModelViewSet</span><span class="token punctuation">(</span>ModelViewSet<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
      <span class="token comment">#8,\u5C40\u90E8\u6392\u5E8F</span>
    filter_backends <span class="token operator">=</span> <span class="token punctuation">[</span>filters<span class="token punctuation">.</span>OrderingFilter<span class="token punctuation">]</span> <span class="token comment"># \u5BFC\u5305\u8DEF\u5F84: from rest_framework import filters</span>
    
    ordering_fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;btitle&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;bread&#39;</span><span class="token punctuation">]</span> <span class="token comment">#\u67E5\u8BE2\u683C\u5F0F: ?ordering=-bread,id</span>

</code></pre></div></li></ul></li></ul></li></ul><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><h4 id="_13-\u5F02\u5E38\u5904\u7406exceptions" tabindex="-1">13,\u5F02\u5E38\u5904\u7406Exceptions <a class="header-anchor" href="#_13-\u5F02\u5E38\u5904\u7406exceptions" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u6587\u6863, \u5904\u7406\u7A0B\u5E8F\u4E2D\u7684\u5F02\u5E38\u4FE1\u606F</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1, \u5B9A\u4E49\u81EA\u5B9A\u4E49\u5904\u7406\u65B9\u6CD5(booktest/my_exception.py)</p><ul><li><div class="language-python"><pre><code><span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>views <span class="token keyword">import</span> exception_handler
<span class="token keyword">from</span> rest_framework<span class="token punctuation">.</span>response <span class="token keyword">import</span> Response
<span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> DatabaseError

<span class="token keyword">def</span> <span class="token function">custom_exception_handler</span><span class="token punctuation">(</span>exc<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment">#1,\u8C03\u7528\u7CFB\u7EDF\u65B9\u6CD5,\u5904\u7406\u4E86APIException\u7684\u5F02\u5E38,\u6216\u8005\u5176\u5B50\u7C7B\u5F02\u5E38</span>
    response <span class="token operator">=</span> exception_handler<span class="token punctuation">(</span>exc<span class="token punctuation">,</span> context<span class="token punctuation">)</span>

    <span class="token comment">#2,\u5224\u65ADresponse\u662F\u5426\u6709\u503C</span>
    <span class="token keyword">if</span> response <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        response<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token string">&#39;status_code&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> response<span class="token punctuation">.</span>status_code
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>exc<span class="token punctuation">,</span> DatabaseError<span class="token punctuation">)</span><span class="token punctuation">:</span>
            response <span class="token operator">=</span> Response<span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u5E93\u5927\u51FA\u8840&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            response <span class="token operator">=</span> Response<span class="token punctuation">(</span><span class="token string">&quot;\u5176\u4ED6\u5F02\u5E38!&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> response
</code></pre></div></li></ul></li><li><p>2, \u5168\u5C40\u914D\u7F6E(<a href="http://settings.py" target="_blank" rel="noopener noreferrer">settings.py</a>)</p><ul><li><div class="language-python"><pre><code>REST_FRAMEWORK <span class="token operator">=</span> <span class="token punctuation">{</span>
  	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token string">&#39;EXCEPTION_HANDLER&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;booktest.my_exception.custom_exception_handler&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul></li><li><p>3, \u6D4B\u8BD5(<a href="http://views.py" target="_blank" rel="noopener noreferrer">views.py</a>)</p><ul><li><div class="language-python"><pre><code><span class="token keyword">class</span> <span class="token class-name">TestView</span><span class="token punctuation">(</span>APIView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># throttle_scope = &quot;uploads&quot;</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>

        <span class="token comment"># raise DatabaseError(&quot;DatabaseError!!!&quot;)</span>
        <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">&quot;\u62A5\u9519\u4E86!!!&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># raise APIException(&quot;APIException!!!&quot;)</span>
        <span class="token comment"># raise ValidationError(&quot;ValidationError!!!&quot;)</span>

        <span class="token keyword">return</span> Response<span class="token punctuation">(</span><span class="token string">&quot;testing....&quot;</span><span class="token punctuation">)</span>
</code></pre></div></li></ul></li></ul></li></ul><h4 id="_14-\u63A5\u53E3\u6587\u6863-\u4E86\u89E3" tabindex="-1">14,\u63A5\u53E3\u6587\u6863(\u4E86\u89E3) <a class="header-anchor" href="#_14-\u63A5\u53E3\u6587\u6863-\u4E86\u89E3" aria-hidden="true">#</a></h4><ul><li><p>\u76EE\u7684: \u53EF\u4EE5\u53C2\u8003\u6587\u6863, \u914D\u7F6E\u540E\u7AEF\u6570\u636E\u7684\u5165\u53E3\u6587\u6863</p></li><li><p>\u64CD\u4F5C\u6D41\u7A0B:</p><ul><li><p>1,\u5B89\u88C5\u6269\u5C55</p><ul><li>pip install coreapi</li></ul></li><li><p>2, \u6839\u8DEF\u7531</p><ul><li>url(<strong>r&#39;^docs/&#39;</strong>, include_docs_urls(title=<strong>&#39;\u6211\u7684API\u6587\u6863&#39;</strong>))</li></ul></li><li><p>3, \u4FEE\u6539\u5B57\u6BB5\u8BF4\u660E\u4FE1\u606F</p><ul><li><p>\u6A21\u578B\u7C7B</p><ul><li>btitle = models.CharField(max_length=20, verbose_name=<strong>&#39;\u540D\u79F0&#39;</strong>,help_text=<strong>&quot;\u4E66\u7C4D\u6807\u9898&quot;</strong>)</li></ul></li><li><p>\u5E8F\u5217\u5316\u5668</p><ul><li><div class="language-python"><pre><code><span class="token comment">#1,\u6A21\u578B\u7C7B\u5E8F\u5217\u5316\u5668</span>
<span class="token keyword">class</span> <span class="token class-name">BookInfoModelSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

        extra_kwargs <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;bread&#39;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
                <span class="token string">&#39;help_text&#39;</span><span class="token punctuation">:</span><span class="token string">&quot;\u4E66\u7C4D\u9605\u8BFB\u91CF&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre></div></li></ul></li></ul></li></ul></li></ul>`,140),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{b as __pageData,g as default};
