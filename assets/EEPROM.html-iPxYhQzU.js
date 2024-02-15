import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-fbiCp83H.js";const t={},p=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>EEPROM 是一种存储器，其值在电路板断电时保留。在 PY32Duino 中，没有内置的 EEPROM，但是可以使用 Flash 模拟 EEPROM。一般来说，我们采用内置 flash 的最后一个 page 扇区（或者是其它可擦写的最小单位）来模拟。</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>要使用此库，请在代码顶部包含头文件：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;EEPROM.h&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read()</h3><p>从 EEPROM 读取一个字节。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>EEPROM<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>address</code>：要读取的地址，从 0 开始。</li><li>返回值：读取的字节。</li></ul><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;EEPROM.h&gt;</span></span>

<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> value<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  Serial<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token number">9600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  value <span class="token operator">=</span> EEPROM<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

  Serial<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">512</span><span class="token punctuation">)</span>
    a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="write" tabindex="-1"><a class="header-anchor" href="#write" aria-hidden="true">#</a> write()</h3><p>将一个字节写入 EEPROM。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>EEPROM<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>address</code>：要写入的地址，从 0 开始。</li><li><code>value</code>：要写入的值。</li></ul><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;EEPROM.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">255</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    EEPROM<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update()</h3><p>将一个字节写入 EEPROM，但仅在值不同的情况下才写入。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>EEPROM<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>address</code>：要写入的地址，从 0 开始。</li><li><code>value</code>：要写入的值。</li></ul><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;EEPROM.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">255</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this performs as EEPROM.write(i, i)</span>
    EEPROM<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">255</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// write value &quot;12&quot; to cell 3 only the first time</span>
    <span class="token comment">// will not write the cell the remaining 254 times</span>
    EEPROM<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get()</h3><p>从 EEPROM 读取一个值。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>EEPROM<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>address</code>：要读取的地址，从 0 开始。</li><li><code>value</code>要读取的数据，可以是原始类型（例如 float）或自定义结构。</li><li>返回值：对传入数据的引用</li></ul><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;EEPROM.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">MyObject</span><span class="token punctuation">{</span>
  <span class="token keyword">float</span> field1<span class="token punctuation">;</span>
  byte field2<span class="token punctuation">;</span>
  <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">0.00f</span><span class="token punctuation">;</span>   <span class="token comment">//Variable to store data read from EEPROM.</span>
  <span class="token keyword">int</span> eeAddress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//EEPROM address to start reading from</span>

  Serial<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span> <span class="token number">9600</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>Serial<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">;</span> <span class="token comment">// wait for serial port to connect. Needed for Leonardo only</span>
  <span class="token punctuation">}</span>
  Serial<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span> <span class="token string">&quot;Read float from EEPROM: &quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//Get the float data from the EEPROM at position &#39;eeAddress&#39;</span>
  EEPROM<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span> eeAddress<span class="token punctuation">,</span> f <span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> f<span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//This may print &#39;ovf, nan&#39; if the data inside the EEPROM is not a valid float.</span>

  <span class="token comment">// get() can be used with custom structures too.</span>
  eeAddress <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Move address to the next byte after float &#39;f&#39;.</span>
  MyObject customVar<span class="token punctuation">;</span> <span class="token comment">//Variable to store custom object read from EEPROM.</span>
  EEPROM<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span> eeAddress<span class="token punctuation">,</span> customVar <span class="token punctuation">)</span><span class="token punctuation">;</span>

  Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token string">&quot;Read custom object from EEPROM: &quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> customVar<span class="token punctuation">.</span>field1 <span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> customVar<span class="token punctuation">.</span>field2 <span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> customVar<span class="token punctuation">.</span>name <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* Empty loop */</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> put()</h3><p>将一个值写入 EEPROM。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>EEPROM<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>address<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>address</code>：要写入的地址，从 0 开始。</li><li><code>value</code>要写入的数据，可以是原始类型（例如 float）或自定义结构。</li><li>返回值：对传入数据的引用</li></ul><div class="hint-container note"><p class="hint-container-title">注</p><p>注意：此函数使用 EEPROM.update() 执行写入，因此如果值没有更改，则不会重写该值。</p></div><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;EEPROM.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">MyObject</span> <span class="token punctuation">{</span>
  <span class="token keyword">float</span> field1<span class="token punctuation">;</span>
  byte field2<span class="token punctuation">;</span>
  <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  Serial<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token number">9600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>Serial<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">;</span> <span class="token comment">// wait for serial port to connect. Needed for native USB port only</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">123.456f</span><span class="token punctuation">;</span>  <span class="token comment">//Variable to store in EEPROM.</span>
  <span class="token keyword">int</span> eeAddress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>   <span class="token comment">//Location we want the data to be put.</span>

  <span class="token comment">//One simple call, with the address first and the object second.</span>
  EEPROM<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>eeAddress<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>

  Serial<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Written float data type!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/** Put is designed for use with custom structures also. **/</span>

  <span class="token comment">//Data to store.</span>
  MyObject customVar <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">3.14f</span><span class="token punctuation">,</span>
    <span class="token number">65</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Working!&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  eeAddress <span class="token operator">+=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Move address to the next byte after float &#39;f&#39;.</span>

  EEPROM<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>eeAddress<span class="token punctuation">,</span> customVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Serial<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Written custom data type! \\n\\nView the example sketch eeprom_get to see how you can retrieve the values!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">/* Empty loop */</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eeprom" tabindex="-1"><a class="header-anchor" href="#eeprom" aria-hidden="true">#</a> EEPROM[]</h3><p>EEPROM[] 是一个重载了<code>EEPROM</code>类的<code>operator[]</code>运算符，可以像数组一样使用。</p><p>该运算符允许像数组一样使用标识符。使用这种方法可以直接读写 EEPROM 单元。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>EEPROM<span class="token punctuation">[</span>address<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>address</code>：要读取的地址，从 0 开始。</li><li>返回值：EEPROM 自身的引用</li></ul><h4 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例</h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;EEPROM.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token keyword">unsigned</span> <span class="token keyword">char</span> val<span class="token punctuation">;</span>

  <span class="token comment">//Read first EEPROM cell.</span>
  val <span class="token operator">=</span> EEPROM<span class="token punctuation">[</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">//Write first EEPROM cell.</span>
  EEPROM<span class="token punctuation">[</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>

  <span class="token comment">//Compare contents</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span> val <span class="token operator">==</span> EEPROM<span class="token punctuation">[</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//Do something...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* Empty loop */</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="length" tabindex="-1"><a class="header-anchor" href="#length" aria-hidden="true">#</a> length()</h3><p>该函数返回一个无符号整数，其中包含 EEPROM 中的单元数。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>EEPROM<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回值：EEPROM 中的单元数。类型为<code>unsigned int</code>。</li></ul>`,47),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","EEPROM.html.vue"]]);export{r as default};
