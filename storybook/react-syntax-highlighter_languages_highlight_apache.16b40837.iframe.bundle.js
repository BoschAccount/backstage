(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{3193:function(module,exports){module.exports=function apache(hljs){var IP_ADDRESS={className:"number",begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/};return{name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,contains:[hljs.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,contains:[IP_ADDRESS,{className:"number",begin:/:\d{1,5}/},hljs.inherit(hljs.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",begin:/\w+/,relevance:0,keywords:{nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",begin:/[\$%]\{/,end:/\}/,contains:["self",{className:"number",begin:/[$%]\d+/}]},IP_ADDRESS,{className:"number",begin:/\d+/},hljs.QUOTE_STRING_MODE]}}],illegal:/\S/}}}}]);