webpackJsonp([2],{163:function(e,t,a){"use strict";function n(e){switch(e.toUpperCase()){case"A+":return 4;case"A":return 4;case"A-":return 3.7;case"B+":return 3.3;case"B":return 3;case"B-":return 2.7;case"C+":return 2.3;case"C":return 2;case"C-":return 1.7;case"D+":return 1.3;case"D":return 1;case"D-":return 0;case"F+":return 0;case"F":return 0;case"F-":return 0;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.gradeToNumber=n},166:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=[{name:"Math 133A",grade:"A+",units:"3"},{name:"Astro 10",grade:"A",units:"2"},{name:"Phys 50",grade:"B+",units:"4"},{name:"Math 129A",grade:"A-",units:"3"},{name:"Math 42",grade:"A-",units:"3"},{name:"CS 46B",grade:"A",units:"4"},{name:"Engl 1B",grade:"B",units:"2"},{name:"Kin 08",grade:"A",units:"2"}];return e<t.length?t[e]:{name:"Classy McClassFace",grade:"A++",units:"4.20"}}function u(){return"courseGpa"+this.props.inputCount}function c(){var e=this.props.inputCount,t=this.renderCourses(e);return f.default.createElement("div",{className:"row input-row"},f.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Class ",f.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"14px",fontWeight:500}},"(optional)")),f.default.createElement("input",{type:"text",className:"form-control",id:e+"grade",autoComplete:"off",name:"course",onChange:this.onInputChange,placeholder:t.name,style:{fontSize:"14px",fontWeight:"450",color:"#000000"}})),f.default.createElement("div",{className:"form-group has-success is-empty col-md-4 col-xs-4",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Grade"),f.default.createElement("input",{maxLength:"2",type:"text",className:"form-control",id:e+"grade",autoComplete:"off",name:"grade",onChange:this.onInputChange,placeholder:t.grade,style:{fontSize:"14px",fontWeight:"450",color:"#000000"}})),f.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Units"),f.default.createElement("input",{type:"number",maxLength:"1",className:"form-control",id:e+"grade",autoComplete:"off",name:"units",onChange:this.onInputChange,placeholder:t.units,style:{fontSize:"14px",fontWeight:"450",color:"#000000"}})))}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),m=function(e){function t(e){function a(){var e=n.state,t=e.course,a=e.grade,o=e.units;n.props.stateToParent(n.createId(),t,a,o)}r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onInputChange=function(e){n.setState(o({},e.target.name,e.target.value),a)},n.renderCourses=i,n.state={course:"",grade:"",units:""},n}return s(t,e),p(t,[{key:"createId",value:u},{key:"render",value:c}]),t}(f.default.Component);t.default=m},77:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return this.state.inputCount!==t.inputCount||this.state.isModalOpen!==t.isModalOpen}function i(){for(var e=this.state,t=e.inputCount,a=e.isModalOpen,n=e.title,o=e.message,r=e.type,l=[],s=0;s<t;s+=1)l.push(p.default.createElement(y.default,{inputCount:s,stateToParent:this.stateFromChild}));return p.default.createElement("div",{className:"container wrapperClass",style:{marginTop:"15vh",marginBottom:10}},a&&p.default.createElement(g.default,{closeModal:this.closeModal,title:n,message:o,type:r}),p.default.createElement(f.default,{title:"Bare Minimum | GPA Calculator",meta:[{name:"description",content:"See how you've done so far!"}]}),p.default.createElement("div",{className:"well infobox"},p.default.createElement("h3",{className:"text-center",style:{marginTop:0,marginBottom:10,fontSize:"5vw 5h",color:"#2e2d2d"}},"GPA Calculator"),p.default.createElement("div",{className:"row input-row"},p.default.createElement("div",{className:"form-group has-success is-empty col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},p.default.createElement("label",{htmlFor:"pastGPA",className:"form-label",style:{fontWeight:500}},"Past GPA ",p.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"14px",fontWeight:500}},"(optional)")),p.default.createElement("input",{type:"number",className:"form-control",id:"pastGPA",autoComplete:"off",placeholder:"3.8",value:this.state.pastGpa,onChange:this.onPastGpaChange,style:{fontSize:"14px",fontWeight:"450",color:"#000000"}})),p.default.createElement("div",{className:"form-group has-success is-empty col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},p.default.createElement("label",{htmlFor:"pastUnits",className:"form-label",style:{fontWeight:500}},"Past Units ",p.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"14px",fontWeight:500}},"(optional)")),p.default.createElement("input",{type:"number",className:"form-control",id:"pastUnits",autoComplete:"off",placeholder:"60",value:this.state.pastUnits,onChange:this.onUnitsChange,style:{fontSize:"14px",fontWeight:"450",color:"#000000"}}))),l,p.default.createElement("div",{className:"row input-row",style:{paddingTop:"1px"}},p.default.createElement("div",{className:"col-md-12 col-xs-12",style:{padding:0}},p.default.createElement("div",{className:"pull-left col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},p.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.addClass},"Add Class")),p.default.createElement("div",{className:"pull-right col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},p.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.showGpa},"Calculate"))))))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),p=n(c),d=a(15),f=n(d),m=a(67),g=n(m),h=a(166),y=n(h),b=a(163),v=a(66),C=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onPastGpaChange=function(e){Number(e.target.value)>4?a.openModal("Impossible!","You can't have a gpa higher than a 4.0!","warning"):Number(e.target.value)<0?a.openModal("Hmm!","I don't think anyone's gpa can be that bad!","warning"):a.setState({pastGpa:e.target.value})},a.onUnitsChange=function(e){Number(e.target.value)<0?a.openModal("Oh dear!","You can't have negative units!","warning"):a.setState({pastUnits:e.target.value})},a.stateFromChild=function(e,t,n,o){var r=a.state.courses,l=r[e];r[e]={course:t,grade:n,units:o},l&&l.course,a.setState({courses:r})},a.calculate=function(){for(var e=a.state,t=e.courses,n=e.pastGpa,o=e.pastUnits,r=Object.keys(t),l=0,s=0,i=0;i<r.length;i+=1){var u=r[i],c=t[u],p=c.grade,d=c.units,f=c.course,m=(0,b.gradeToNumber)(p);if("number"==typeof m&&p&&d)l+=m*Number(d),s+=Number(d);else if("number"!=typeof m&&p&&d)return a.openModal("Oops!",f?"Your grade for "+f+" doesn't look right!":"One of your grades doesn't look right!","warning"),0}isNaN(Number(n))||isNaN(Number(o))||(l+=Number(n)*o,s+=Number(o));var g=l/s*1e3%10>=5,h=g?Math.ceil(l/s*100)/100:Math.floor(l/s*100)/100;return isNaN(h)?0:10*h%10!=0?h.toFixed(2):h.toFixed(1)},a.openModal=function(e,t,n){a.setState({title:e,message:t,type:n,isModalOpen:!0})},a.closeModal=function(){a.setState({title:null,message:null,type:null,isModalOpen:!1})},a.showGpa=function(){var e=a.calculate();0!==e?a.openModal("Nice!",(0,v.gpaStringBuilder)(e),null):a.openModal("Oh no!","Oh my you haven't added any classes","warning")},a.addClass=function(){var e=a.state.inputCount;a.setState({inputCount:e+1})},a.state={courses:{},pastGpa:"",pastUnits:"",inputCount:4,isModalOpen:!1,title:null,message:null,type:null},a}return l(t,e),u(t,[{key:"shouldComponentUpdate",value:s},{key:"render",value:i}]),t}(p.default.Component);t.default=C}});