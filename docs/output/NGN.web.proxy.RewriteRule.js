Ext.data.JsonP.NGN_web_proxy_RewriteRule({"subclasses":[],"meta":{"author":["Corey Butler"]},"linenr":2,"inheritdoc":null,"enum":null,"uses":[],"aliases":{},"requires":[],"component":false,"inheritable":null,"override":null,"extends":"NGN.core","mixedInto":[],"alternateClassNames":[],"members":{"css_mixin":[],"method":[{"meta":{},"owner":"NGN.core","tagname":"method","name":"constructor","id":"method-constructor"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"addEventListeners","id":"method-addEventListeners"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"emit","id":"method-emit"},{"meta":{},"owner":"Class","tagname":"method","name":"extend","id":"method-extend"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"fireError","id":"method-fireError"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"fireEvent","id":"method-fireEvent"},{"meta":{"preventable":true},"owner":"NGN.core","tagname":"method","name":"fireWarning","id":"method-fireWarning"},{"meta":{},"owner":"NGN.web.proxy.RewriteRule","tagname":"method","name":"forMethod","id":"method-forMethod"},{"meta":{},"owner":"NGN.web.proxy.RewriteRule","tagname":"method","name":"getConfiguration","id":"method-getConfiguration"},{"meta":{"private":true},"owner":"Class","tagname":"method","name":"merge","id":"method-merge"},{"meta":{},"owner":"NGN.core","tagname":"method","name":"on","id":"method-on"},{"meta":{},"owner":"NGN.web.proxy.RewriteRule","tagname":"method","name":"rewrite","id":"method-rewrite"}],"cfg":[{"meta":{},"owner":"NGN.web.proxy.RewriteRule","tagname":"cfg","name":"acceptMethod","id":"cfg-acceptMethod"},{"meta":{},"owner":"NGN.web.proxy.RewriteRule","tagname":"cfg","name":"last","id":"cfg-last"},{"meta":{},"owner":"NGN.web.proxy.RewriteRule","tagname":"cfg","name":"path","id":"cfg-path"},{"meta":{"required":true},"owner":"NGN.web.proxy.RewriteRule","tagname":"cfg","name":"pattern","id":"cfg-pattern"},{"meta":{"required":true},"owner":"NGN.web.proxy.RewriteRule","tagname":"cfg","name":"substitute","id":"cfg-substitute"}],"property":[{"meta":{"protected":true},"owner":"NGN.core","tagname":"property","name":"_emitter","id":"property-_emitter"},{"meta":{"protected":true},"owner":"Class","tagname":"property","name":"prototype","id":"property-prototype"},{"meta":{"readonly":true},"owner":"NGN.web.proxy.RewriteRule","tagname":"property","name":"rewritten","id":"property-rewritten"},{"meta":{"protected":true},"owner":"Class","tagname":"property","name":"super","id":"property-super"}],"css_var":[],"event":[{"meta":{},"owner":"NGN.core","tagname":"event","name":"error","id":"event-error"},{"meta":{},"owner":"NGN.web.proxy.RewriteRule","tagname":"event","name":"rewrite","id":"event-rewrite"}]},"superclasses":["Class","NGN.core"],"private":null,"singleton":false,"tagname":"class","statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"css_var":[],"event":[]},"parentMixins":[],"name":"NGN.web.proxy.RewriteRule","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Class' rel='Class' class='docClass'>Class</a><div class='subclass '><a href='#!/api/NGN.core' rel='NGN.core' class='docClass'>NGN.core</a><div class='subclass '><strong>NGN.web.proxy.RewriteRule</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule' target='_blank'>RewriteRule.js</a></div></pre><div class='doc-contents'><p>Represents a rewrite rule for specified HTTP verbs.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required Config options</h3><div id='cfg-pattern' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-cfg-pattern' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-cfg-pattern' class='name not-expandable'>pattern</a><span> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a></span><strong class='required signature' >required</strong></div><div class='description'><div class='short'><p>The regular expression used to detect a specific URL pattern.</p>\n</div><div class='long'><p>The regular expression used to detect a specific URL pattern.</p>\n</div></div></div><div id='cfg-substitute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-cfg-substitute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-cfg-substitute' class='name expandable'>substitute</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='required signature' >required</strong></div><div class='description'><div class='short'>The substitution pattern. ...</div><div class='long'><p>The substitution pattern. This uses a simple find/replace to rewrite the URL.\nEach argument is determined by a <code>$</code> and number in a 1-based pattern. In other\nwords <code>$1</code> represents the first value found.</p>\n\n<p><strong>Example</strong>\nIf the full URL is</p>\n\n<pre><code>    http://mydomain.com/person/jdoe/update/address\n</code></pre>\n\n<p>and the pattern is</p>\n\n<pre><code>RegExp(\"/person/(.*)/(.*)/(.*)\")\n</code></pre>\n\n<p>and this value, substitute, is</p>\n\n<pre><code>    \"/$2.php?username=$1&amp;what=$3\"\n</code></pre>\n\n<p>the result would be</p>\n\n<pre><code>    http://mydomain.com/update.php?username=jdoe&amp;what=address\n</code></pre>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional Config options</h3><div id='cfg-acceptMethod' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-cfg-acceptMethod' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-cfg-acceptMethod' class='name expandable'>acceptMethod</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>The HTTP method for which the rewrite rule should be applied. ...</div><div class='long'><p>The HTTP method for which the rewrite rule should be applied.</p>\n\n<p>By default, this rule is applied to all methods. Valid values\ncan be a comma delimited list or an array containing one or more\nof the following:</p>\n\n<ul>\n<li>GET</li>\n<li>POST</li>\n<li>PUT</li>\n<li>DELETE</li>\n<li>HEAD</li>\n<li>TRACE</li>\n<li>All</li>\n</ul>\n\n<p>Defaults to: <code>*</code></p></div></div></div><div id='cfg-last' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-cfg-last' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-cfg-last' class='name expandable'>last</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>If set to true, no further processing will occur if this rule is matched. ...</div><div class='long'><p>If set to <code>true</code>, no further processing will occur if this rule is matched.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-path' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-cfg-path' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-cfg-path' class='name expandable'>path</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The source URL path that should be rewritten. ...</div><div class='long'><p>The source URL path that should be rewritten.</p>\n\n<p>For example, if the full URL is:</p>\n\n<pre><code>    http://www.mdomain.com/some/path/index.html?show=true\n</code></pre>\n\n<p>then the URL path is:</p>\n\n<pre><code>    /some/path/index.html?show=true\n</code></pre>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_emitter' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-property-_emitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-property-_emitter' class='name expandable'>_emitter</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>An event emitter for the class. ...</div><div class='long'><p>An event emitter for the class. Used internally.</p>\n</div></div></div><div id='property-prototype' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-prototype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-prototype' class='name not-expandable'>prototype</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-rewritten' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-property-rewritten' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-property-rewritten' class='name expandable'>rewritten</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Indicates the path was rewritten. ...</div><div class='long'><p>Indicates the <a href=\"#!/api/NGN.web.proxy.RewriteRule-cfg-path\" rel=\"NGN.web.proxy.RewriteRule-cfg-path\" class=\"docClass\">path</a> was rewritten.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-super' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-property-super' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-property-super' class='name not-expandable'>super</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'><p>Refers to the parent class.</p>\n</div><div class='long'><p>Refers to the parent class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/NGN.core-method-constructor' class='name expandable'>NGN.web.proxy.RewriteRule</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Create an NGN core class. ...</div><div class='long'><p>Create an NGN core class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEventListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-addEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-addEventListeners' class='name expandable'>addEventListeners</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> evt</span> )</div><div class='description'><div class='short'>Adds multiple event listeners ...</div><div class='long'><p>Adds multiple event listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-emit' class='name expandable'>emit</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Emits an event respective of the object context (i.e. ...</div><div class='long'><p>Emits an event respective of the object context (i.e. not bubbled to a global level event)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-extend' class='name expandable'>extend</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>The properties of the object being extended. ...</div><div class='long'><p>The properties of the object being extended.\n   // Subclass</p>\n\n<pre><code>var Car = Vehicle.extend({\n    constructor: function (doors) {\n         Car.super.constructor.call(this, 'car');\n\n         Object.defineProperty(this,'doors',{\n             value:      doors || 4,\n             writable:   true,\n             enumerable: true\n         });\n    },\n    accelerate: function () {\n        console.log('The '+this.doors+'-door '+ Car.super.accelerate.call(this));\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireError' class='name expandable'>fireError</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Error error]</span> )</div><div class='description'><div class='short'>Fires the specified error. ...</div><div class='long'><p>Fires the specified error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Error (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, [<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> metadata]</span> )</div><div class='description'><div class='short'>Fires the specified event. ...</div><div class='long'><p>Fires the specified event. Unlike <a href=\"#!/api/NGN.core-method-emit\" rel=\"NGN.core-method-emit\" class=\"docClass\">emit</a>, this event is bubbled to the NGN#BUS.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>metadata</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireWarning' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-fireWarning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-fireWarning' class='name expandable'>fireWarning</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> warning, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )<strong class='preventable signature' >preventable</strong></div><div class='description'><div class='short'>Fires a warning event. ...</div><div class='long'><p>Fires a warning event.</p>\n        <div class='signature-box preventable'>\n        <p>This action following this event is <b>preventable</b>.\n        When any of the listeners returns false, the action is cancelled.</p>\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>warning</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The warning message.</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>If the callback returns false, the event is prevented.</p>\n</div></li></ul></div></div></div><div id='method-forMethod' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-method-forMethod' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-method-forMethod' class='name expandable'>forMethod</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> method</span> )</div><div class='description'><div class='short'>Test to see if a specific HTTP method is accepted by this rule. ...</div><div class='long'><p>Test to see if a specific HTTP method is accepted by this rule.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>method</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The HTTP method to test.</p>\n</div></li></ul></div></div></div><div id='method-getConfiguration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-method-getConfiguration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-method-getConfiguration' class='name expandable'>getConfiguration</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Get the configuration of the rule. ...</div><div class='long'><p>Get the configuration of the rule.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-merge' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Class' rel='Class' class='defined-in docClass'>Class</a><br/><a href='source/BaseClass.html#Class-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Class-method-merge' class='name expandable'>merge</a>( <span class='pre'>[<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> source], <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> target, [<a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> force]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Merges the source to target ...</div><div class='long'><p>Merges the source to target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Original object.</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New object (this).</p>\n</div></li><li><span class='pre'>force</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-method-on' class='name expandable'>on</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> eventName, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> callback</span> )</div><div class='description'><div class='short'>Listens for an event name and runs the callback when it is recognized. ...</div><div class='long'><p>Listens for an event name and runs the callback when it is recognized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-rewrite' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-method-rewrite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-method-rewrite' class='name expandable'>rewrite</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> urlpath], [<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> method]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Rewrite the URL path using the specified #rule. ...</div><div class='long'><p>Rewrite the URL <a href=\"#!/api/NGN.web.proxy.RewriteRule-cfg-path\" rel=\"NGN.web.proxy.RewriteRule-cfg-path\" class=\"docClass\">path</a> using the specified #rule.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>urlpath</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>A specific URL path to use instead of the one specified in <a href=\"#!/api/NGN.web.proxy.RewriteRule-cfg-path\" rel=\"NGN.web.proxy.RewriteRule-cfg-path\" class=\"docClass\">path</a>.</p>\n</div></li><li><span class='pre'>method</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The method</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>Returns the value of <a href=\"#!/api/NGN.web.proxy.RewriteRule-cfg-path\" rel=\"NGN.web.proxy.RewriteRule-cfg-path\" class=\"docClass\">path</a>.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-error' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/NGN.core' rel='NGN.core' class='defined-in docClass'>NGN.core</a><br/><a href='source/NGN.core.html#NGN-core-event-error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.core-event-error' class='name expandable'>error</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> e</span> )</div><div class='description'><div class='short'>Fired when an error occurs ...</div><div class='long'><p>Fired when an error occurs</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-rewrite' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='NGN.web.proxy.RewriteRule'>NGN.web.proxy.RewriteRule</span><br/><a href='source/RewriteRule.html#NGN-web-proxy-RewriteRule-event-rewrite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/NGN.web.proxy.RewriteRule-event-rewrite' class='name expandable'>rewrite</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Fired when the path is rewritten. ...</div><div class='long'><p>Fired when the path is rewritten.</p>\n</div></div></div></div></div></div></div>","mixins":[],"id":"class-NGN.web.proxy.RewriteRule","html_meta":{"author":null},"files":[{"href":"RewriteRule.html#NGN-web-proxy-RewriteRule","filename":"RewriteRule.js"}]});