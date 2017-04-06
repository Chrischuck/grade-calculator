webpackJsonp([1],{121:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=[{category:"Homework",grade:"85%",weight:"30%"},{category:"Midterm 1",grade:"90%",weight:"15%"},{category:"Midterm 2",grade:"95%",weight:"15%"},{category:"Participation",grade:"100%",weight:"5%"},{category:"Clickers",grade:"98%",weight:"10%"},{category:"Essays",grade:"87%",weight:"15%"},{category:"Assignments",grade:"99%",weight:"25%"}];return e<t.length?t[e]:{category:"Memetics",grade:"100%",weight:"100%"}}function s(){var e=this.props.inputCount,t=this.renderCategories(e);return d.default.createElement("div",{className:"row"},d.default.createElement("div",{className:"form-group has-success is-empty col-md-4 col-sm-4 col-xs-4 col-sm-offset-1 col-md-offset-1 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},d.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"Category ",d.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),d.default.createElement("input",{type:"text",className:"form-control",id:e+"category",autoComplete:"off",value:this.state.category,onChange:this.onCategoryChange,placeholder:t.category,style:{fontSize:"1.6vh"}})),d.default.createElement("div",{className:"form-group has-success is-empty col-sm-3 col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},d.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"Current Grade"),d.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:e+"grade",autoComplete:"off",value:this.state.grade,onChange:this.onGradeChange,placeholder:t.grade,style:{fontSize:"1.6vh"}})),d.default.createElement("div",{className:"form-group has-success is-empty col-sm-3 col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},d.default.createElement("label",{htmlFor:e+"weight",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"Weight"),d.default.createElement("input",{type:"number",maxLength:"3",className:"form-control",id:e+"weight",autoComplete:"off",value:this.state.weight,onChange:this.onWeightChange,placeholder:t.weight,style:{fontSize:"1.6vh"}})))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),d=n(c),f=function(e){function t(e){function a(){return i.setInParent()}function n(){return i.setInParent()}function l(){return i.setInParent()}r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.onCategoryChange=function(e){i.setState({category:e.target.value},a)},i.onGradeChange=function(e){i.setState({grade:e.target.value},n)},i.onWeightChange=function(e){i.setState({weight:e.target.value},l)},i.setInParent=function(){var e=i.state,t=e.category,a=e.grade,n=e.weight;i.props.stateToParent(i.createId(),t,a,n)},i.createId=function(){return"weightedGrade"+i.props.inputCount},i.state={category:"",grade:"",weight:""},i}return l(t,e),u(t,[{key:"renderCategories",value:i},{key:"render",value:s}]),t}(d.default.Component);t.default=f},60:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){for(var e=this.state.inputCount,t=[],a=0;a<e;a+=1)t.push(c.default.createElement(h.default,{inputCount:a,stateToParent:this.stateFromChild}));return c.default.createElement("div",{className:"container col-md-12",style:{marginTop:"15vh",paddingLeft:"0",paddingRight:"0"}},c.default.createElement(f.default,{title:"Bare Minimum | Weighted Final Grade Calculator",meta:[{name:"description",content:"Weighted Final grade calculator to help you pass your classes!"}]}),c.default.createElement("div",{className:"well infobox"},c.default.createElement("div",null,c.default.createElement("h3",{className:"text-center",style:{marginTop:15,marginBottom:2,fontSize:"5vw 5h",color:"#2e2d2d"}},"Weighted Final Grade Calculator"),c.default.createElement("p",{className:"text-center",style:{marginBottom:8,marginTop:0,fontSize:"1.6vh",color:"#5d5d5d"}},"% sign is not neccesary"),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},c.default.createElement("label",{htmlFor:"requiredGrade",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"You want a:"),c.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:"requiredGrade",autoComplete:"off",value:this.state.requiredGrade,onChange:this.onRequiredGradeChange,placeholder:"93%",style:{fontSize:"1.6vh"}})),c.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 ",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},c.default.createElement("label",{htmlFor:"finalWeight",className:"form-label",style:{fontWeight:500,fontSize:"1.4vh"}},"Final's worth:"),c.default.createElement("input",{maxLength:"3",type:"number",className:"form-control",id:"finalWeight",autoComplete:"off",value:this.state.finalWeight,onChange:this.onFinalWeightChange,placeholder:"20%",style:{fontSize:"1.6vh"}}))),t,c.default.createElement("div",{className:"row",style:{paddingTop:"1px"}},c.default.createElement("div",{className:"col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1",style:{padding:0}},c.default.createElement("div",{className:"pull-left col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},c.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.addCategory,style:{backgroundColor:"#009688"}},"Add Category")),c.default.createElement("div",{className:"pull-right col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},c.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.calculate,style:{backgroundColor:"#009688"}},"Calculate")))))))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),d=a(15),f=n(d),g=a(121),h=n(g),m=a(56),p=n(m),y=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onRequiredGradeChange=function(e){a.setState({requiredGrade:e.target.value})},a.onFinalWeightChange=function(e){a.setState({finalWeight:e.target.value})},a.stateFromChild=function(e,t,n,r){var o=a.state.categories,l=o[e];o[e]={category:t,grade:n,weight:r},l&&l.category,a.setState({categories:o})},a.calculate=function(){var e=a.state,t=e.categories,n=e.requiredGrade,r=e.finalWeight,o=Object.keys(t),l=Number(n)/100,i=Number(r)/100,s=0,u=0,c=Number(r);if(!l)return void(0,p.default)("Ugh Oh!","The grade you want doesn't look right!","warning");if(!i)return void(0,p.default)("Ugh Oh!","The final's weight doesn't look right!","warning");for(var d=0;d<o.length;d+=1){var f=o[d],g=t[f],h=g.category,m=g.grade,y=g.weight,v=Number(m)/100,b=Number(y)/100;if(c+=Number(y),!v&&h)return void(0,p.default)("Oops!","Your grade for "+h+" doesn't look right!","warning");if(!b&&h)return void(0,p.default)("Oops!","Your weight for "+h+" doesn't look right!","warning");v&&b&&(u+=b,s+=v*b)}if(0===u)return void(0,p.default)("Oh no!","Looks like you haven't added any categories!","warning");if(100!==c)return void(0,p.default)("Oops!",c>100?"Your total percentage can't be greater than 100!":"Your total percentage can't be less than 100!","warning");var w=(l-s)/i*100,C=1e3*w%10>=5,x=C?Math.ceil(100*w)/100:Math.floor(100*w)/100;isNaN(x)?(0,p.default)("Ugh Oh!","Something went wrong, make sure your inputs are right!","warning"):(0,p.default)("You can do it!",a.calculatorStringBuilder(x),null)},a.calculatorStringBuilder=function(e){var t="";t+=Number(e)<=50?"You only need ":"You will need at least ",t+=e+"% on your final to get a "+a.state.requiredGrade+"% overall.";var n=Number(e);return n>100&&(t+=" May the force be with you!"),n<=100&&n>=90&&(t+=" You can do it!"),n<90&&n>=70&&(t+=" You got this in the bag!"),n<70&&n>=0&&(t+=" What's the point of studying honestly?"),n<0&&(t+=" Just stay in bed at this point!"),t},a.addCategory=function(){var e=a.state.inputCount;a.setState({inputCount:e+1})},a.state={categories:{},requiredGrade:"",finalWeight:"",inputCount:3},a}return l(t,e),s(t,[{key:"render",value:i}]),t}(c.default.Component);t.default=y}});