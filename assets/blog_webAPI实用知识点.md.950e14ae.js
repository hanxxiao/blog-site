import{_ as t,o as e,c as l,U as a}from"./chunks/framework.32b227f7.js";const m=JSON.parse('{"title":"webAPI实用知识点","description":"","frontmatter":{},"headers":[],"relativePath":"blog/webAPI实用知识点.md","filePath":"blog/webAPI实用知识点.md"}'),n={name:"blog/webAPI实用知识点.md"},d=a(`<h1 id="webapi实用知识点" tabindex="-1">webAPI实用知识点 <a class="header-anchor" href="#webapi实用知识点" aria-label="Permalink to &quot;webAPI实用知识点&quot;">​</a></h1><h2 id="获取页面元素" tabindex="-1">获取页面元素 <a class="header-anchor" href="#获取页面元素" aria-label="Permalink to &quot;获取页面元素&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 根据类名返回元素对象集合 </span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementsByClassName</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">类名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取指定选择器返回第一个元素对象</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">选择器</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 根据指定选择器返回</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelectorAll</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">选择器</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意：</p><p><code>querySelector</code> 和 <code>querySelectorAll</code> 里面的选择器需要加符号，比如：<code>document.querySelector(&#39;#nav&#39;)</code></p></div><h2 id="节点操作" tabindex="-1">节点操作 <a class="header-anchor" href="#节点操作" aria-label="Permalink to &quot;节点操作&quot;">​</a></h2><ol><li><p>父节点: <code>node.parentNode</code></p></li><li><p>子节点: <code>parentNode.children</code></p><ul><li>如果想要第一个子元素节点，可以使用 <code>parentNode.chilren[0]</code></li><li>如果想要最后一个子元素节点，可以使用 <code>parentNode.chilren[parentNode.chilren.length - 1]</code></li></ul></li><li><p>创建节点: <code>document.createElement(&#39;tagName&#39;)</code></p></li><li><p>添加节点: <code>node.appendChild(child)</code></p><ul><li><code>node.appendChild()</code> 方法将一个节点添加到指定父节点的子节点列表末尾。类似于 CSS 里面的 after 伪元素。,这里可以简写为 <code>node.append()</code></li></ul></li><li><p>添加节点: <code>node.insertBefore(child)</code></p><ul><li><code>node.insertBefore()</code> 方法将一个节点添加到指定父节点的子节点列表前面。类似于 CSS 里面的 before 伪元素。</li></ul></li><li><p>删除节点: <code>node.removeChild(child)</code></p><ul><li><code>node.removeChild()</code> 方法从 DOM 中删除一个子节点，返回删除的节点。</li></ul></li><li><p>复制节点: <code>node.cloneNode()</code></p><div class="tip custom-block"><p class="custom-block-title">提示：</p><pre><code> 如果括号参数为空或者为 false ，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点
 如果括号参数为 true ，则是深度拷贝，会复制节点本身以及里面所有的子节点。
</code></pre></div></li><li><p>替换节点: <code>parentNode.replaceChild(newChild, oldChild)</code>; 用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。</p></li></ol><h2 id="鼠标事件对象" tabindex="-1">鼠标事件对象 <a class="header-anchor" href="#鼠标事件对象" aria-label="Permalink to &quot;鼠标事件对象&quot;">​</a></h2><table><thead><tr><th>鼠标事件对象</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>e.clientX</td><td style="text-align:center;">返回鼠标相对于浏览器窗口可视区的X坐标</td></tr><tr><td>e.clientY</td><td style="text-align:center;">返回鼠标相对于浏览器窗口可视区的Y坐标</td></tr><tr><td>e.pageX</td><td style="text-align:center;">返回鼠标相对于文档页面的X坐标IE9+支持</td></tr><tr><td>e.pageY</td><td style="text-align:center;">返回鼠标相对于文档页面的Y坐标E9+支持</td></tr><tr><td>e.screenX</td><td style="text-align:center;">返回鼠标相对于电脑屏幕的X坐标</td></tr><tr><td>e.screenY</td><td style="text-align:center;">返回鼠标相对于电脑屏幕的Y坐标</td></tr></tbody></table><h2 id="键盘事件" tabindex="-1">键盘事件 <a class="header-anchor" href="#键盘事件" aria-label="Permalink to &quot;键盘事件&quot;">​</a></h2><table><thead><tr><th>键盘事件</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>onkeyup</td><td style="text-align:center;">某个键盘按键被松开时触发</td></tr><tr><td>onkeydown</td><td style="text-align:center;">某个键盘按键被按下时触发</td></tr><tr><td>onkeypress</td><td style="text-align:center;">某个键盘按键被按下时并弹起时触发</td></tr></tbody></table><div class="danger custom-block"><p class="custom-block-title">注意：</p><p>onkeypress和前面2个的区别是，它不识别功能键，比如左右箭头，shift等</p></div><h2 id="history对象" tabindex="-1">history对象 <a class="header-anchor" href="#history对象" aria-label="Permalink to &quot;history对象&quot;">​</a></h2><table><thead><tr><th>history对象</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>back()</td><td style="text-align:center;">可以后退功能</td></tr><tr><td>forward()</td><td style="text-align:center;">前进功能</td></tr><tr><td>go(参数)</td><td style="text-align:center;">前进后退功能参数如果是1前进1个页面如果是-1后退1个页面</td></tr></tbody></table><h2 id="元素偏移量offset系列" tabindex="-1">元素偏移量offset系列 <a class="header-anchor" href="#元素偏移量offset系列" aria-label="Permalink to &quot;元素偏移量offset系列&quot;">​</a></h2><table><thead><tr><th>offset系列属性</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td>element.offsetParent</td><td style="text-align:center;">返回作为该元素带有定位的父级元素如果父级都没有定位则返回body</td></tr><tr><td>element.offsepTop</td><td style="text-align:center;">返回元素相对带有定位父元素上方的偏移</td></tr><tr><td>element.offsetLeft</td><td style="text-align:center;">返回元素相对带有定位父元素左边框的偏移</td></tr><tr><td>element.offsetWidth</td><td style="text-align:center;">返回自身包括padding、边框、内容区的宽度，返回数值不带单位</td></tr><tr><td>element.offsetHeight</td><td style="text-align:center;">返回自身包括padding、边框、内容区的高度，返回数值不带单位</td></tr></tbody></table><h2 id="元素可视区client系列" tabindex="-1">元素可视区client系列 <a class="header-anchor" href="#元素可视区client系列" aria-label="Permalink to &quot;元素可视区client系列&quot;">​</a></h2><table><thead><tr><th>client系列属性</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td>element.clientTop</td><td style="text-align:center;">返回元素上边框的大小</td></tr><tr><td>element.clientLeft</td><td style="text-align:center;">返回元素左边框的大小</td></tr><tr><td>element.clientWidth</td><td style="text-align:center;">返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位</td></tr><tr><td>element.clientHeight</td><td style="text-align:center;">返回自身包括padding、内容区的高度，不含边框，返回数值不带单位</td></tr></tbody></table><h2 id="元素滚动scroll川系列" tabindex="-1">元素滚动scroll川系列 <a class="header-anchor" href="#元素滚动scroll川系列" aria-label="Permalink to &quot;元素滚动scroll川系列&quot;">​</a></h2><table><thead><tr><th>scroll系列属性</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td>element.scrollTop</td><td style="text-align:center;">返回被卷去的上侧距离，返回数值不带单位</td></tr><tr><td>element.scrollLeft</td><td style="text-align:center;">返回被卷去的左侧距离，返回数值不带单位</td></tr><tr><td>element.scrollWidth</td><td style="text-align:center;">返回自身实际的宽度，不含边框，返回数值不带单位</td></tr><tr><td>element.scrollHeight</td><td style="text-align:center;">返回自身实际的高度，不含边框，返回数值不带单位</td></tr></tbody></table><h2 id="三大系列大小对比" tabindex="-1">三大系列大小对比 <a class="header-anchor" href="#三大系列大小对比" aria-label="Permalink to &quot;三大系列大小对比&quot;">​</a></h2><table><thead><tr><th>三大系列大小对比</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td>element.offsetWidth</td><td style="text-align:center;">返回自身包括padding、边框、内容区的宽度，返回数值不带单位</td></tr><tr><td>element.clientWidth</td><td style="text-align:center;">返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位</td></tr><tr><td>element.scrollWidth</td><td style="text-align:center;">返回自身实际的宽度，不含边框，返回数值不带单位</td></tr></tbody></table>`,21),s=[d];function r(o,c,i,p,h,y){return e(),l("div",null,s)}const u=t(n,[["render",r]]);export{m as __pageData,u as default};
