(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",function(){return s}),n.d(e,"rightToc",function(){return p}),n.d(e,"default",function(){return N});n(0);var t=n(115);n(116);function c(){return(c=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a}).apply(this,arguments)}function o(a,e){if(null==a)return{};var n,t,c=function(a,e){if(null==a)return{};var n,t,c={},o=Object.keys(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(c[n]=a[n]);return c}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(c[n]=a[n])}return c}var s={id:"uncategorized-forms",title:"Forms"},p=[{value:"Asynchronous validation",id:"asynchronous-validation",children:[]},{value:"Autosave",id:"autosave",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Change reactions",id:"change-reactions",children:[]},{value:"Model transformations",id:"model-transformations",children:[]},{value:"Post-submit handling",id:"post-submit-handling",children:[]},{value:"Validation options and modes",id:"validation-options-and-modes",children:[]}],m={rightToc:p},r="wrapper";function N(a){var e=a.components,n=o(a,["components"]);return Object(t.a)(r,c({},m,n,{components:e,mdxType:"MDXLayout"}),Object(t.a)("h2",null,Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"asynchronous-validation"})),Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#asynchronous-validation"}),"#"),"Asynchronous validation"),Object(t.a)("p",null,Object(t.a)("inlineCode",{parentName:"p"},"ValidatedForm")," (and so ",Object(t.a)("inlineCode",{parentName:"p"},"AutoForm"),") has an ",Object(t.a)("inlineCode",{parentName:"p"},"onValidate")," prop. It can be used to create an asynchronous validation:"),Object(t.a)("pre",{className:"language-js"},Object(t.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"const")," ",Object(t.a)("span",c({parentName:"code"},{className:"token function-variable function"}),"onValidate")," ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),"model",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),",")," error",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),",")," callback"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// You can either ignore validation error..."),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"omitValidation"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"model",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return")," ",Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"callback"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token keyword null nil"}),"null"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// ...or any additional validation if an error is already there..."),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"error",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return")," ",Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"callback"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// ...or feed it with another error."),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"MyAPI"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"validate"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"model",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),"error")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"callback"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"error ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"||")," ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword null nil"}),"null"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// Later..."),"\n\n",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"ValidatedForm")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token spread operator"}),"..."),"props",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," onValidate",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"onValidate",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(t.a)("h2",null,Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"autosave"})),Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#autosave"}),"#"),"Autosave"),Object(t.a)("p",null,"Every form has an autosave functionality. If you set an ",Object(t.a)("inlineCode",{parentName:"p"},"autosave")," prop, then every change will trigger a submit. There's also an ",Object(t.a)("inlineCode",{parentName:"p"},"autosaveDelay")," prop - a minimum time between saves in milliseconds (default: ",Object(t.a)("inlineCode",{parentName:"p"},"0"),")."),Object(t.a)("p",null,Object(t.a)("strong",{parentName:"p"},"Example:")),Object(t.a)("pre",{className:"language-js"},Object(t.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"AutoForm"),"\n  autosave\n  autosaveDelay",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"5000"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// 5 seconds"),"\n  schema",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"schema",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n  onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n")),Object(t.a)("h2",null,Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"hierarchy"})),Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#hierarchy"}),"#"),"Hierarchy"),Object(t.a)("p",{align:"center"},Object(t.a)("img",{src:"img/uniforms-graph.png"})),Object(t.a)("h2",null,Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"methods"})),Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#methods"}),"#"),"Methods"),Object(t.a)("p",null,"You can use ",Object(t.a)("a",c({parentName:"p"},{href:"https://facebook.github.io/react/docs/more-about-refs.html"}),"React ",Object(t.a)("inlineCode",{parentName:"a"},"ref")," prop")," to manually access form methods. Example usage:"),Object(t.a)("pre",{className:"language-js"},Object(t.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"const")," ",Object(t.a)("span",c({parentName:"code"},{className:"token function-variable function"}),Object(t.a)("span",c({parentName:"span"},{className:"token maybe-class-name"}),"MyForm"))," ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),"{"),"schema",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),",")," onSubmit",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),"}")),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"let")," formRef",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),"section",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"AutoForm")," ref",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),"ref")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"formRef ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ref",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," schema",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"schema",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),"small onClick",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," formRef",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"reset"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"Reset"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),"small",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),"small onClick",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," formRef",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"submit"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"Submit"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),"small",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),"section",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(t.a)("p",null,"All available methods:"),Object(t.a)("ul",null,Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"change(key, value)")),Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"reset()")),Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"submit()")),Object(t.a)("li",{parentName:"ul"},Object(t.a)("inlineCode",{parentName:"li"},"validate()")," ",Object(t.a)("em",{parentName:"li"},"(added in ",Object(t.a)("inlineCode",{parentName:"em"},"ValidatedForm"),")"))),Object(t.a)("h2",null,Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"change-reactions"})),Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#change-reactions"}),"#"),"Change reactions"),Object(t.a)("p",null,"If you want to make one field to influence others, simply extend ",Object(t.a)("inlineCode",{parentName:"p"},"AutoForm")," and override ",Object(t.a)("inlineCode",{parentName:"p"},"onChange")," method."),Object(t.a)("p",null,Object(t.a)("strong",{parentName:"p"},"Example:")),Object(t.a)("pre",{className:"language-js"},Object(t.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"class")," ",Object(t.a)("span",c({parentName:"code"},{className:"token class-name"}),"ChainForm")," ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"extends")," ",Object(t.a)("span",c({parentName:"code"},{className:"token class-name"}),"AutoForm")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"onChange"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),"key",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),",")," value"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"key ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"===")," ",Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'key_to_intercept'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"key ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"===")," ",Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'key_to_translate'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return")," ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"super"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"onChange"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'another_key'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," value",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"key ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"===")," ",Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'key_to_mutate'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"super"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"onChange"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'another_key1'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," value ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"*")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"2"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"super"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"onChange"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'another_key2'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," value ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/")," ",Object(t.a)("span",c({parentName:"code"},{className:"token number"}),"2"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"super"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"onChange"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"key",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," value",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(t.a)("p",null,"It can be easily applied multiple times to make your forms even more reusable."),Object(t.a)("p",null,Object(t.a)("strong",{parentName:"p"},"Example:")),Object(t.a)("pre",{className:"language-js"},Object(t.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"const")," ",Object(t.a)("span",c({parentName:"code"},{className:"token function-variable function"}),"withMultipliedField")," ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),"fieldA",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),",")," fieldB",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),",")," ",Object(t.a)("span",c({parentName:"span"},{className:"token maybe-class-name"}),"Form")),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"class")," ",Object(t.a)("span",c({parentName:"code"},{className:"token class-name"}),"withMultipliedFieldForm")," ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"extends")," ",Object(t.a)("span",c({parentName:"code"},{className:"token class-name"}),"Form")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"onChange"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),"key",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),",")," value"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// Multiply fieldA"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"key ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"===")," fieldA",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"super"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"onChange"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"fieldB",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," value ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"+")," value",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// Pass every change"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"super"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"onChange"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"key",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),",")," value",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(t.a)("h2",null,Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"model-transformations"})),Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#model-transformations"}),"#"),"Model transformations"),Object(t.a)("p",null,"If you need to transform model before it will be validated, submitted or passed down to the fields, there's a ",Object(t.a)("inlineCode",{parentName:"p"},"modelTransform")," prop, which should be used in those use cases."),Object(t.a)("p",null,Object(t.a)("strong",{parentName:"p"},"Example:")),Object(t.a)("pre",{className:"language-js"},Object(t.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"AutoForm"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// Do not mutate given model!"),"\n  modelTransform",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),"mode",Object(t.a)("span",c({parentName:"span"},{className:"token punctuation"}),",")," model"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// This model will be passed to the fields."),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"mode ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"===")," ",Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'form'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"/* ... */"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// This model will be submitted."),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"mode ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"===")," ",Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'submit'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"/* ... */"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// This model will be validated."),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"if")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"mode ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"===")," ",Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'validate'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"/* ... */"),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token comment"}),"// Otherwise, return unaltered model."),"\n    ",Object(t.a)("span",c({parentName:"code"},{className:"token keyword"}),"return")," model",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n  onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n  schema",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"schema",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n")),Object(t.a)("h2",null,Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"post-submit-handling"})),Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#post-submit-handling"}),"#"),"Post-submit handling"),Object(t.a)("p",null,"It's a good UX practice to tell your users that something failed or succeed. To make it simpler, there are ",Object(t.a)("inlineCode",{parentName:"p"},"onSubmitFailure")," and ",Object(t.a)("inlineCode",{parentName:"p"},"onSubmitSuccess")," props."),Object(t.a)("p",null,Object(t.a)("strong",{parentName:"p"},"Example:")),Object(t.a)("pre",{className:"language-js"},Object(t.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"AutoForm"),"\n  schema",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"schema",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n  onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token parameter"}),"doc")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," db",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(t.a)("span",c({parentName:"code"},{className:"token method function property-access"}),"saveThatReturnsPromise"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"doc",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n  onSubmitSuccess",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"alert"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'Promise resolved!'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n  onSubmitFailure",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(t.a)("span",c({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(t.a)("span",c({parentName:"code"},{className:"token function"}),"alert"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(t.a)("span",c({parentName:"code"},{className:"token string"}),"'Promise rejected!'"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n")),Object(t.a)("h2",null,Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"validation-options-and-modes"})),Object(t.a)("a",c({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#validation-options-and-modes"}),"#"),"Validation options and modes"),Object(t.a)("p",null,"Any form can be validated in one those three styles:"),Object(t.a)("ul",null,Object(t.a)("li",{parentName:"ul"},Object(t.a)("p",{parentName:"li"},Object(t.a)("inlineCode",{parentName:"p"},"onChange"),"\nValidate on every change.")),Object(t.a)("li",{parentName:"ul"},Object(t.a)("p",{parentName:"li"},Object(t.a)("inlineCode",{parentName:"p"},"onChangeAfterSubmit")," ",Object(t.a)("em",{parentName:"p"},"(default)"),"\nValidate on every change, but only after first submit.")),Object(t.a)("li",{parentName:"ul"},Object(t.a)("p",{parentName:"li"},Object(t.a)("inlineCode",{parentName:"p"},"onSubmit"),"\nValidate on every submit."))),Object(t.a)("p",null,"If your schema validator accepts any options, those can be passed in ",Object(t.a)("inlineCode",{parentName:"p"},"validator")," prop."),Object(t.a)("p",null,Object(t.a)("strong",{parentName:"p"},"Example:")),Object(t.a)("pre",{className:"language-js"},Object(t.a)("code",c({parentName:"pre"},{className:"language-js"}),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"<"),Object(t.a)("span",c({parentName:"code"},{className:"token maybe-class-name"}),"AutoForm")," validate",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token string"}),'"onChange"')," validator",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"validatorOptions",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," schema",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"schema",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"="),Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"onSubmit",Object(t.a)("span",c({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),"/"),Object(t.a)("span",c({parentName:"code"},{className:"token operator"}),">"),"\n")))}N.isMDXComponent=!0}}]);