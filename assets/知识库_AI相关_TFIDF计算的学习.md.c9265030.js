import{_ as n,c as s,o as a,a as t}from"./app.0b1f5e83.js";const f='{"title":"TFIDF\u8BA1\u7B97\u7684\u5B66\u4E60","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8F6C\u7801","slug":"\u8F6C\u7801"},{"level":3,"title":"\u5B9A\u4E49\u8F6C\u7801\u51FD\u6570","slug":"\u5B9A\u4E49\u8F6C\u7801\u51FD\u6570"},{"level":3,"title":"\u8BFB\u5165\u6587\u4EF6\u5E76\u8F6C\u7801","slug":"\u8BFB\u5165\u6587\u4EF6\u5E76\u8F6C\u7801"},{"level":2,"title":"\u751F\u6210\u8BCD\u5178","slug":"\u751F\u6210\u8BCD\u5178"},{"level":2,"title":"\u751F\u6210TF\u77E9\u9635","slug":"\u751F\u6210tf\u77E9\u9635"},{"level":2,"title":"\u9010\u6B65\u8BA1\u7B97IDF\u503C","slug":"\u9010\u6B65\u8BA1\u7B97idf\u503C"},{"level":2,"title":"\u4F7F\u7528SKlearn\u8BA1\u7B97TFIDF\u503C","slug":"\u4F7F\u7528sklearn\u8BA1\u7B97tfidf\u503C"},{"level":2,"title":"\u8BA1\u7B97\u4F59\u5F26\u76F8\u4F3C\u5EA6","slug":"\u8BA1\u7B97\u4F59\u5F26\u76F8\u4F3C\u5EA6"}],"relativePath":"\u77E5\u8BC6\u5E93/AI\u76F8\u5173/TFIDF\u8BA1\u7B97\u7684\u5B66\u4E60.md","lastUpdated":1647679165913}',p={},o=t(`<h1 id="tfidf\u8BA1\u7B97\u7684\u5B66\u4E60" tabindex="-1">TFIDF\u8BA1\u7B97\u7684\u5B66\u4E60 <a class="header-anchor" href="#tfidf\u8BA1\u7B97\u7684\u5B66\u4E60" aria-hidden="true">#</a></h1><h2 id="\u8F6C\u7801" tabindex="-1">\u8F6C\u7801 <a class="header-anchor" href="#\u8F6C\u7801" aria-hidden="true">#</a></h2><h3 id="\u5B9A\u4E49\u8F6C\u7801\u51FD\u6570" tabindex="-1">\u5B9A\u4E49\u8F6C\u7801\u51FD\u6570 <a class="header-anchor" href="#\u5B9A\u4E49\u8F6C\u7801\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-python"><pre><code><span class="token comment"># ! pip install codecs</span>
<span class="token comment"># ! pip install chardet</span>

<span class="token keyword">import</span> codecs
<span class="token keyword">import</span> chardet

<span class="token keyword">def</span> <span class="token function">convert</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> out_enc<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    content <span class="token operator">=</span> codecs<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    source_encoding <span class="token operator">=</span> chardet<span class="token punctuation">.</span>detect<span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;encoding&#39;</span><span class="token punctuation">]</span>
    content <span class="token operator">=</span> content<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>source_encoding<span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span>out_enc<span class="token punctuation">)</span>
    codecs<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token comment"># \u83B7\u53D6\u7F16\u7801</span>
<span class="token keyword">def</span> <span class="token function">get_encoding</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
		<span class="token keyword">return</span> chardet<span class="token punctuation">.</span>detect<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;encoding&#39;</span><span class="token punctuation">]</span>

</code></pre></div><pre><code>ERROR: Could not find a version that satisfies the requirement codecs
ERROR: No matching distribution found for codecs


Requirement already satisfied: chardet in c:\\users\\justin3go\\appdata\\roaming\\python\\python38\\site-packages (3.0.4)
</code></pre><h3 id="\u8BFB\u5165\u6587\u4EF6\u5E76\u8F6C\u7801" tabindex="-1">\u8BFB\u5165\u6587\u4EF6\u5E76\u8F6C\u7801 <a class="header-anchor" href="#\u8BFB\u5165\u6587\u4EF6\u5E76\u8F6C\u7801" aria-hidden="true">#</a></h3><div class="language-python"><pre><code><span class="token keyword">import</span> chardet
<span class="token keyword">import</span> codecs
<span class="token keyword">import</span> os

<span class="token comment"># \u8BFB\u53D6\u6587\u4EF6</span>
file_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> root<span class="token punctuation">,</span> _<span class="token punctuation">,</span> files <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span><span class="token string">&quot;./\u5B9E\u9A8C\u516D\u6240\u7528\u8BED\u6599\u5E93&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files<span class="token punctuation">:</span>
        <span class="token comment"># print(os.path.join(root, file))</span>
        file_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> file_list<span class="token punctuation">:</span>
    convert<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>

get_encoding<span class="token punctuation">(</span>file_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><pre><code>&#39;ascii&#39;
</code></pre><h2 id="\u751F\u6210\u8BCD\u5178" tabindex="-1">\u751F\u6210\u8BCD\u5178 <a class="header-anchor" href="#\u751F\u6210\u8BCD\u5178" aria-hidden="true">#</a></h2><div class="language-python"><pre><code><span class="token keyword">import</span> re
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

<span class="token comment"># \u5206\u8BCD\u5EFA\u7ACB\u8BCD\u5178,\u5F97\u5230\u8BCD\u9891</span>
dict_words <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
files_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> file_list<span class="token punctuation">:</span>
	<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;ascii&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
		text <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
		files_<span class="token punctuation">.</span>append<span class="token punctuation">(</span>text<span class="token punctuation">)</span>
	
	text_ <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;[a-z]+&#39;</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span>
	files<span class="token punctuation">.</span>append<span class="token punctuation">(</span>text_<span class="token punctuation">)</span>

	<span class="token keyword">for</span> t <span class="token keyword">in</span> text_<span class="token punctuation">:</span>
		dict_words<span class="token punctuation">[</span>t<span class="token punctuation">]</span> <span class="token operator">=</span> dict_words<span class="token punctuation">.</span>get<span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
</code></pre></div><h2 id="\u751F\u6210tf\u77E9\u9635" tabindex="-1">\u751F\u6210TF\u77E9\u9635 <a class="header-anchor" href="#\u751F\u6210tf\u77E9\u9635" aria-hidden="true">#</a></h2><div class="language-python"><pre><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
words2index <span class="token operator">=</span> <span class="token punctuation">{</span>w<span class="token punctuation">:</span> i <span class="token keyword">for</span> i<span class="token punctuation">,</span>w <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>dict_words<span class="token punctuation">)</span><span class="token punctuation">}</span>
index2words <span class="token operator">=</span> <span class="token punctuation">{</span>i<span class="token punctuation">:</span> w <span class="token keyword">for</span> i<span class="token punctuation">,</span>w <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>dict_words<span class="token punctuation">)</span><span class="token punctuation">}</span>
zeros_m <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">(</span>words2index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span> f <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">for</span> t <span class="token keyword">in</span> f<span class="token punctuation">:</span>
		<span class="token comment"># print(t)</span>
		<span class="token comment"># print(words.index(f))</span>
		zeros_m<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>words2index<span class="token punctuation">[</span>t<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token comment"># tf\u5728\u4E2A\u6587\u6863\u4E2D\u7684\u77E9\u9635</span>
zeros_m
</code></pre></div><pre><code>array([[1., 5., 5., ..., 0., 0., 0.],
       [0., 0., 0., ..., 0., 0., 0.],
       [0., 1., 0., ..., 0., 0., 0.],
       ...,
       [0., 4., 0., ..., 0., 0., 0.],
       [1., 5., 0., ..., 0., 0., 0.],
       [0., 1., 0., ..., 1., 1., 1.]])
</code></pre><h2 id="\u9010\u6B65\u8BA1\u7B97idf\u503C" tabindex="-1">\u9010\u6B65\u8BA1\u7B97IDF\u503C <a class="header-anchor" href="#\u9010\u6B65\u8BA1\u7B97idf\u503C" aria-hidden="true">#</a></h2><div class="language-python"><pre><code>df1 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>dict_words<span class="token punctuation">,</span>index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;TF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>T
df1<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><pre><code>.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
</code></pre><table border="1" class="dataframe"><thead><tr style="text-align:right;"><th></th><th>TF</th></tr></thead><tbody><tr><th>call</th><td>2</td></tr><tr><th>for</th><td>20</td></tr><tr><th>presentations</th><td>5</td></tr><tr><th>navy</th><td>9</td></tr><tr><th>scientific</th><td>6</td></tr></tbody></table><div class="language-python"><pre><code><span class="token comment"># print(dict_words)</span>
dict_words_idf <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> key <span class="token keyword">in</span> dict_words<span class="token punctuation">:</span>
	count <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token comment"># files\u8981\u4E0A\u9762\u90A3\u4E2A\u5355\u5143\u8FD0\u884C\u4E4B\u540E\u5B58\u5165\u5185\u5B58\u624D\u6709</span>
	<span class="token keyword">for</span> text_ <span class="token keyword">in</span> files<span class="token punctuation">:</span>
		<span class="token keyword">if</span> key <span class="token keyword">in</span> text_<span class="token punctuation">:</span>
			count <span class="token operator">+=</span> <span class="token number">1</span>
	dict_words_idf<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> count

df2 <span class="token operator">=</span> pd<span class="token punctuation">.</span>DataFrame<span class="token punctuation">(</span>dict_words_idf<span class="token punctuation">,</span>index<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;DF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>T
df <span class="token operator">=</span> pd<span class="token punctuation">.</span>concat<span class="token punctuation">(</span><span class="token punctuation">[</span>df1<span class="token punctuation">,</span>df2<span class="token punctuation">]</span><span class="token punctuation">,</span> axis<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre></div><pre><code>.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
</code></pre><table border="1" class="dataframe"><thead><tr style="text-align:right;"><th></th><th>TF</th><th>DF</th></tr></thead><tbody><tr><th>call</th><td>2</td><td>2</td></tr><tr><th>for</th><td>20</td><td>8</td></tr><tr><th>presentations</th><td>5</td><td>1</td></tr><tr><th>navy</th><td>9</td><td>1</td></tr><tr><th>scientific</th><td>6</td><td>2</td></tr><tr><th>visualization</th><td>9</td><td>4</td></tr><tr><th>and</th><td>50</td><td>9</td></tr><tr><th>virtual</th><td>5</td><td>1</td></tr><tr><th>reality</th><td>5</td><td>1</td></tr><tr><th>seminar</th><td>5</td><td>1</td></tr></tbody></table><div class="language-python"><pre><code><span class="token keyword">import</span> math
<span class="token comment"># log(len(files)/df,2)</span>

df<span class="token punctuation">[</span><span class="token string">&#39;IDF&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> df<span class="token punctuation">[</span><span class="token string">&#39;DF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> math<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token operator">/</span>x<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
df<span class="token punctuation">.</span>head<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre></div><pre><code>.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
</code></pre><table border="1" class="dataframe"><thead><tr style="text-align:right;"><th></th><th>TF</th><th>DF</th><th>IDF</th></tr></thead><tbody><tr><th>call</th><td>2</td><td>2</td><td>2.321928</td></tr><tr><th>for</th><td>20</td><td>8</td><td>0.321928</td></tr><tr><th>presentations</th><td>5</td><td>1</td><td>3.321928</td></tr><tr><th>navy</th><td>9</td><td>1</td><td>3.321928</td></tr><tr><th>scientific</th><td>6</td><td>2</td><td>2.321928</td></tr><tr><th>visualization</th><td>9</td><td>4</td><td>1.321928</td></tr><tr><th>and</th><td>50</td><td>9</td><td>0.152003</td></tr><tr><th>virtual</th><td>5</td><td>1</td><td>3.321928</td></tr><tr><th>reality</th><td>5</td><td>1</td><td>3.321928</td></tr><tr><th>seminar</th><td>5</td><td>1</td><td>3.321928</td></tr></tbody></table> ## \u8BA1\u7B97TFIDF\u503C <div class="language-python"><pre><code>idf <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>df<span class="token punctuation">[</span><span class="token string">&#39;IDF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> zeros_m<span class="token operator">*</span>idf
result
</code></pre></div><pre><code>array([[ 2.32192809,  1.60964047, 16.60964047, ...,  0.        ,
         0.        ,  0.        ],
       [ 0.        ,  0.        ,  0.        , ...,  0.        ,
         0.        ,  0.        ],
       [ 0.        ,  0.32192809,  0.        , ...,  0.        ,
         0.        ,  0.        ],
       ...,
       [ 0.        ,  1.28771238,  0.        , ...,  0.        ,
         0.        ,  0.        ],
       [ 2.32192809,  1.60964047,  0.        , ...,  0.        ,
         0.        ,  0.        ],
       [ 0.        ,  0.32192809,  0.        , ...,  3.32192809,
         3.32192809,  3.32192809]])
</code></pre><h2 id="\u4F7F\u7528sklearn\u8BA1\u7B97tfidf\u503C" tabindex="-1">\u4F7F\u7528SKlearn\u8BA1\u7B97TFIDF\u503C <a class="header-anchor" href="#\u4F7F\u7528sklearn\u8BA1\u7B97tfidf\u503C" aria-hidden="true">#</a></h2><div class="language-python"><pre><code><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>feature_extraction<span class="token punctuation">.</span>text <span class="token keyword">import</span> TfidfTransformer
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>feature_extraction<span class="token punctuation">.</span>text <span class="token keyword">import</span> CountVectorizer

vectorizer <span class="token operator">=</span> CountVectorizer<span class="token punctuation">(</span><span class="token punctuation">)</span>
transformer <span class="token operator">=</span> TfidfTransformer<span class="token punctuation">(</span><span class="token punctuation">)</span>

tfidf <span class="token operator">=</span> transformer<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>vectorizer<span class="token punctuation">.</span>fit_transform<span class="token punctuation">(</span>files_<span class="token punctuation">)</span><span class="token punctuation">)</span>
word <span class="token operator">=</span> vectorizer<span class="token punctuation">.</span>get_feature_names<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">:</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
weight <span class="token operator">=</span> tfidf<span class="token punctuation">.</span>toarray<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>T
<span class="token keyword">print</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span>

</code></pre></div><pre><code>[&#39;accepted&#39;, &#39;accessible&#39;, &#39;across&#39;, &#39;add&#39;, &#39;address&#39;, &#39;addresses&#39;, &#39;adresses&#39;, &#39;advance&#39;, &#39;advises&#39;, &#39;affiliated&#39;]
[[0.         0.11537929 0.         ... 0.         0.         0.        ]
 [0.03906779 0.         0.         ... 0.         0.         0.        ]
 [0.         0.         0.         ... 0.         0.         0.        ]
 ...
 [0.         0.         0.         ... 0.         0.         0.        ]
 [0.         0.         0.15731715 ... 0.04130626 0.09597341 0.05024117]
 [0.         0.         0.         ... 0.         0.11918574 0.        ]]
</code></pre><h2 id="\u8BA1\u7B97\u4F59\u5F26\u76F8\u4F3C\u5EA6" tabindex="-1">\u8BA1\u7B97\u4F59\u5F26\u76F8\u4F3C\u5EA6 <a class="header-anchor" href="#\u8BA1\u7B97\u4F59\u5F26\u76F8\u4F3C\u5EA6" aria-hidden="true">#</a></h2><div class="language-python"><pre><code><span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>pairwise <span class="token keyword">import</span> cosine_similarity

test <span class="token operator">=</span> weight<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment"># \u5047\u8BBE\u5176\u4ED6\u7684\u4E00\u7BC7\u6587\u6863\u5C31\u662F\u7B2C\u4E00\u7BC7\u6587\u6863</span>
cos_sim <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	cos_sim<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cosine_similarity<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">list</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">list</span><span class="token punctuation">(</span>weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>cos_sim<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">#\u7B2C\u4E00\u884C\u7684\u503C\u662Fa1\u4E2D\u7684\u7B2C\u4E00\u4E2A\u884C\u5411\u91CF\u4E0Ea2\u4E2D\u6240\u6709\u7684\u884C\u5411\u91CF\u4E4B\u95F4\u7684\u4F59\u5F26\u76F8\u4F3C\u5EA6</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cos_sim<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><pre><code>[[1. 1.]
 [1. 1.]]
[[1. 0.]
 [0. 1.]]
</code></pre>`,32),e=[o];function c(i,l,u,r,k,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
