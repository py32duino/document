import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as c,c as d,a as e,b as a,d as o,e as l}from"./app-fbiCp83H.js";const t={},p=e("h2",{id:"关于",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#关于","aria-hidden":"true"},"#"),a(" 关于")],-1),r=e("p",null,"UART，即Universal Asynchronous Receiver/Transmitter（通用异步收发器），是一种串行、异步、全双工的通信协议，在嵌入式领域应用的非常广泛。",-1),u=e("h2",{id:"uart-通用api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uart-通用api","aria-hidden":"true"},"#"),a(" UART 通用API")],-1),v=e("code",null,"UART",-1),h=e("code",null,"Serial",-1),k={href:"https://www.arduino.cc/reference/en/language/functions/communication/serial/",target:"_blank",rel:"noopener noreferrer"},_=l(`<h3 id="begin" tabindex="-1"><a class="header-anchor" href="#begin" aria-hidden="true">#</a> begin</h3><p>此函数用于初始化串口，设置波特率。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">begin</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span> baud<span class="token punctuation">,</span> byte config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>baud</code>：波特率，单位为 bps</li><li><code>config</code>：配置，可选值为<code>SERIAL_8N1</code> <code>SERIAL_8N2</code> <code>SERIAL_7N1</code> <code>SERIAL_8E1</code> <code>SERIAL_7E2</code> <code>SERIAL_8E2</code> <code>SERIAL_7O1</code> <code>SERIAL_8O1</code> <code>SERIAL_7O2</code> <code>SERIAL_8O2</code></li></ul><p>当然，您也可以使用</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">begin</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span> baud<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来进行初始化，此时配置为<code>SERIAL_8N1</code>。</p><h3 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> end</h3><p>此函数用于关闭串口。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="available" tabindex="-1"><a class="header-anchor" href="#available" aria-hidden="true">#</a> available</h3><p>此函数用于获取串口接收缓冲区中的字节数。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回值：串口接收缓冲区中的字节数</li></ul><h3 id="read" tabindex="-1"><a class="header-anchor" href="#read" aria-hidden="true">#</a> read</h3><p>此函数用于从串口接收缓冲区中读取一个字节。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回值：读取到的字节，如果没有可读取的字节，则返回<code>-1</code></li></ul><h3 id="write" tabindex="-1"><a class="header-anchor" href="#write" aria-hidden="true">#</a> write</h3><p>此函数用于向串口发送数据。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>size_t <span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">uint8_t</span> data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回值：发送的字节数</li><li><code>data</code>：要发送的字节</li></ul><p>当然，您也可以使用</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>size_t <span class="token function">write</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">uint8_t</span> <span class="token operator">*</span>buffer<span class="token punctuation">,</span> size_t size<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来发送多个字节。</p><ul><li><code>buffer</code>：要发送的字节缓冲区</li><li><code>size</code>：要发送的字节数</li><li>返回值：发送的字节数</li></ul><h3 id="flush" tabindex="-1"><a class="header-anchor" href="#flush" aria-hidden="true">#</a> flush</h3><p>此函数用于清空串口接收缓冲区。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="peek" tabindex="-1"><a class="header-anchor" href="#peek" aria-hidden="true">#</a> peek</h3><p>此函数用于查看串口接收缓冲区中的下一个字节，但不会将其从缓冲区中删除。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>返回值：下一个字节，如果没有可读取的字节，则返回<code>-1</code></li></ul><h2 id="py32duino-专用api" tabindex="-1"><a class="header-anchor" href="#py32duino-专用api" aria-hidden="true">#</a> PY32Duino 专用API</h2><p>PY32Duino 有多个 U(S)ART 外设。为方便起见，U(S)ARTx 编号用于定义 Serialx 实例：</p><ul><li>Serial1 为 USART1</li><li>Serial2 为 USART2</li><li>Serial3 为 USART3</li><li>Serial4 为 UART4</li><li>...对于 LPUART1 ，为 SerialLP1</li></ul><p>默认情况下，只有一个 Serialx 实例可映射到通用 Serial 名称。需要注意的是，一般我们习惯上使用<code>Serial1</code>来作为全局的<code>Serial</code>对象。</p><p>要使用第二个串行端口，代码中应中在 <code>setup()</code> 函数之前声明 <code>HardwareSerial</code> 对象：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//                      RX    TX</span>
HardwareSerial <span class="token function">Serial2</span><span class="token punctuation">(</span>PA1<span class="token punctuation">,</span> PA0<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Serial1<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token number">115200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Serial1<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个解决方案是在主 <code>.ino</code> 文件旁边添加一个 <code>build_opt.h</code> 文件： <code>-DENABLE_HWSERIALx</code> 。这将使用变体的 <code>PeripheralPins.c</code> 中找到的第一个 <code>USARTx</code> 实例来定义 <code>Serialx</code> 实例。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>只用使用这种解决方案才能在代码中使用 <code>serialEventx()</code> 回调。</p></div><p>例如，如果您在 <code>build_opt.h</code> 中定义： <code>-DENABLE_HWSERIAL2</code></p><p>这将使用您的变体的 <code>PeripheralPins.c</code> 中的 <code>PinMap_UART_RX[]</code> 和 <code>PinMap_UART_TX[]</code> 数组中找到的第一个 Rx 和 Tx 引脚实例化 <code>Serial2</code> <code>serialEvent2()</code> 将被启用。</p><p>要指定应使用哪个 Rx 或 Tx 引脚而不是第一个找到的引脚，您可以指定 <code>PIN_SERIALn_RX</code> 或 <code>PIN_SERIALn_TX</code> ，其中 n 是串行实例的编号。</p><p><code>Serial2</code> 的示例：</p><ul><li>在 <code>variant.h</code> 中：</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PIN_SERIAL2_RX</span> <span class="token expression">PA1</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PIN_SERIAL2_TX</span> <span class="token expression">PA0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 <code>build_opt.h</code> 中： <code>-DPIN_SERIAL2_RX=PA1 -DPIN_SERIAL2_TX=PA0</code></li></ul><h3 id="更改默认-serial-实例引脚" tabindex="-1"><a class="header-anchor" href="#更改默认-serial-实例引脚" aria-hidden="true">#</a> 更改默认 Serial 实例引脚</h3><p>还可以使用下列 API 更改 <code>Serial</code> 实例使用的默认引脚：</p><ul><li><code>void setRx(PinName rxPin)</code></li><li><code>void setRx(uint32_t rxPin)</code></li><li><code>void setTx(PinName txPin)</code></li><li><code>void setTx(uint32_t txPin)</code></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这些API必须在 <code>begin()</code> 之前调用。</p></div><h3 id="启用半双工模式" tabindex="-1"><a class="header-anchor" href="#启用半双工模式" aria-hidden="true">#</a> 启用半双工模式</h3><p>U(S)ART 可配置为遵循单线半双工协议，其中 Tx 和 Rx 线路在内部连接。在此通信模式下，仅 Tx 引脚用于发送和接收。</p><ul><li><p>扩展 <code>HardwareSerial</code> 构造函数：</p><ul><li><code>HardwareSerial(uint32_t _rxtx)</code> ：用于半双工的 U(S)ART Tx 引脚号 ( PYn )</li><li><code>HardwareSerial(PinName _rxtx)</code> ：用于半双工的 U(S)ART Tx 引脚名称 ( PY_n )</li><li>如果 Rx == Tx 则采用半双工模式： <ul><li><code>HardwareSerial(uint32_t _rx, uint32_t _tx)</code> ：用于半双工的 U(S)ART Tx 引脚号 ( PYn )</li><li><code>HardwareSerial(PinName _rx, PinName tx)</code> ：用于半双工的 U(S)ART Tx 引脚名称 ( PY_n )</li></ul></li><li><code>HardwareSerial(void *peripheral, HalfDuplexMode_t halfDuplex = HALF_DUPLEX_DISABLED)</code> ：如果 <code>HALF_DUPLEX_ENABLED</code> 获取用于半双工的 <code>PeripheralPins.c</code> 中请求的外设的第一个Tx引脚</li></ul></li><li><p>添加 <code>enableHalfDuplexRx()</code> 以在 Rx 模式下启用串行。可以使用 <code>read()</code> ，但会避免执行读取。在 <code>available()</code> 使用之前有用</p></li><li><p><code>void setHalfDuplex()</code> ：当实例未以半双工模式实例化时，启用实例的半双工模式。在这种情况下，必须在 <code>begin()</code> 之前调用。</p></li></ul><h3 id="启用硬件流控制" tabindex="-1"><a class="header-anchor" href="#启用硬件流控制" aria-hidden="true">#</a> 启用硬件流控制</h3><p><code>HardwareSerial</code> 构造函数接受可选的 RTS/CTS 引脚：</p><ul><li><code>HardwareSerial(uint32_t _rx, uint32_t _tx, uint32_t _rts = NUM_DIGITAL_PINS, uint32_t _cts = NUM_DIGITAL_PINS)</code></li><li><code>HardwareSerial(PinName _rx, PinName _tx, PinName _rts = NC, PinName _cts = NC)</code></li></ul><p>您还可以在 <code>HardwareSerial</code> 实例上启用 RTS/CTS 引脚：</p><ul><li><code>void setRts(uint32_t _rts)</code></li><li><code>void setCts(uint32_t _cts)</code></li><li><code>void setRtsCts(uint32_t _rts, uint32_t _cts)</code></li><li><code>void setRts(PinName _rts)</code></li><li><code>void setCts(PinName _cts)</code></li><li><code>void setRtsCts(PinName _rts, PinName _cts)</code></li></ul>`,60);function m(b,x){const n=i("ExternalLinkIcon");return c(),d("div",null,[p,r,u,e("p",null,[a("在 Arduino 中，我们一般把"),v,a("称为"),h,a("。我们在此仅介绍一些常用的 API ，具体的通用 API 可以参考 "),e("a",k,[a("Arduino 官方文档"),o(n)]),a("。")]),_])}const A=s(t,[["render",m],["__file","uart.html.vue"]]);export{A as default};