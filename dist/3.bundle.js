webpackJsonp([3],{118:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(){this.setState({randGrade:this.createRandGrades()})}function u(){return"courseGpa"+this.props.inputCount}function i(){switch(Math.floor(6*Math.random()+1)){case 1:return"A+";case 2:return"A";case 3:return"A-";case 4:return"B+";case 5:return"B";default:return"A-"}}function c(){var e=this.props.inputCount,t=this.renderCourses(e);return p.default.createElement("div",{className:"row"},p.default.createElement("div",{className:"form-group has-success is-empty col-md-4 col-xs-4 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},p.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Class ",p.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),p.default.createElement("input",{type:"text",className:"form-control",id:e+"grade",autoComplete:"off",onChange:this.onCourseChange,placeholder:t.name,style:{fontSize:"1.2vh"}})),p.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},p.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Grade"),p.default.createElement("input",{maxLength:"2",type:"text",className:"form-control",id:e+"grade",autoComplete:"off",onChange:this.onGradeChange,placeholder:t.grade,style:{fontSize:"1.2vh"}})),p.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},p.default.createElement("label",{htmlFor:e+"grade",className:"form-label",style:{fontWeight:550}},"Units"),p.default.createElement("input",{type:"number",maxLength:"1",className:"form-control",id:e+"grade",autoComplete:"off",onChange:this.onUnitsChange,placeholder:t.units,style:{fontSize:"1.2vh"}})))}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),p=n(f),m=function(e){function t(e){function a(){return l.setInParent()}function n(){return l.setInParent()}function s(){return l.setInParent()}r(this,t);var l=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.onCourseChange=function(e){l.setState({course:e.target.value},a)},l.onGradeChange=function(e){l.setState({grade:e.target.value},n)},l.onUnitsChange=function(e){l.setState({units:e.target.value},s)},l.setInParent=function(){var e=l.state,t=e.course,a=e.grade,n=e.units;l.props.stateToParent(l.createId(),t,a,n)},l.renderCourses=function(e){var t=l.state.randGrade,a=[{name:"Math 133A",grade:t,units:"3"},{name:"Astro 10",grade:t,units:"2"},{name:"Phys 50",grade:t,units:"4"},{name:"Math 129A",grade:t,units:"3"},{name:"Math 42",grade:t,units:"3"},{name:"CS 46B",grade:t,units:"4"},{name:"Engl 1B",grade:t,units:"2"},{name:"Kin 08",grade:t,units:"2"}];return e<a.length?a[e]:{name:"Classy McClassFace",grade:"A++",units:"4.20"}},l.state={course:"",grade:"",units:"",randGrade:""},l}return s(t,e),d(t,[{key:"componentWillMount",value:l},{key:"createId",value:u},{key:"createRandGrades",value:i},{key:"render",value:c}]),t}(p.default.Component);t.default=m},58:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){switch(e.toUpperCase()){case"A+":return 4;case"A":return 4;case"A-":return 3.7;case"B+":return 3.3;case"B":return 3;case"B-":return 2.7;case"C+":return 2.3;case"C":return 2;case"C-":return 1.7;case"D+":return 1.3;case"D":return 1;case"D-":return 0;case"F+":return 0;case"F":return 0;case"F-":return 0;default:return e}}function u(e){var t=Number(e);return t>=4?"Damn you're rocking a "+e:t<4&&t>=3.8?"Good job you have a solid "+e:t<3.8&&t>=3?"Awesome you got a "+e:t<3&&t>=2.5?"Not bad, you're getting a "+e:t<2.5?"You have a "+e:void 0}function i(){for(var e=this.state.inputCount,t=[],a=0;a<e;a+=1)t.push(f.default.createElement(h.default,{inputCount:a,stateToParent:this.stateFromChild}));return f.default.createElement("div",{className:"container col-md-12 wrapperClass",style:{marginTop:"15vh",paddingLeft:"0px",paddingRight:"0px",marginBottom:10}},f.default.createElement(m.default,{title:"Bare Minimum | GPA Calculator",meta:[{name:"description",content:"See how you've done so far!"}]}),f.default.createElement("div",{className:"well infobox"},f.default.createElement("h3",{className:"text-center",style:{marginTop:0,marginBottom:10,fontSize:"5vw 5h",color:"#2e2d2d"}},"GPA Calculator"),f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:"pastGPA",className:"form-label",style:{fontWeight:550}},"Past GPA ",f.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),f.default.createElement("input",{type:"number",className:"form-control",id:"pastGPA",autoComplete:"off",placeholder:"3.8",value:this.state.pastGpa,onChange:this.onPastGpaChange,style:{fontSize:"1.2vh"}})),f.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5",style:{paddingLeft:"5px",paddingRight:"5px",marginBottom:5}},f.default.createElement("label",{htmlFor:"pastUnits",className:"form-label",style:{fontWeight:550}},"Past Units ",f.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),f.default.createElement("input",{type:"number",className:"form-control",id:"pastUnits",autoComplete:"off",placeholder:"60",value:this.state.pastUnits,onChange:this.onUnitsChange,style:{fontSize:"1.2vh"}}))),t,f.default.createElement("div",{className:"row",style:{paddingTop:"1px"}},f.default.createElement("div",{className:"col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1",style:{padding:0}},f.default.createElement("div",{className:"pull-left col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},f.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.addClass,style:{backgroundColor:"#009688"}},"Add Class")),f.default.createElement("div",{className:"pull-right col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},f.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.showGpa,style:{backgroundColor:"#009688"}},"Calculate"))))))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(0),f=n(d),p=a(16),m=n(p),g=a(118),h=n(g),y=a(56),b=n(y),v=function(e){function t(e){function a(){return l.calculate()}function n(){return l.calculate()}function s(){return l.calculate()}r(this,t);var l=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.onPastGpaChange=function(e){Number(e.target.value)>4?(0,b.default)("Impossible!","You can't have a gpa higher than a 4.0!","warning"):Number(e.target.value)<0?(0,b.default)("Hmm!","I don't think anyone's gpa can be that bad!","warning"):l.setState({pastGpa:e.target.value},a)},l.onUnitsChange=function(e){Number(e.target.value)<0?(0,b.default)("Oh dear!","You can't have negative units!","warning"):l.setState({pastUnits:e.target.value},n)},l.stateFromChild=function(e,t,a,n){var r=l.state.courses,o=r[e];r[e]={course:t,grade:a,units:n},o&&o.course!==t?l.setState({courses:r}):l.setState({courses:r},s)},l.calculate=function(){for(var e=l.state,t=e.courses,a=e.pastGpa,n=e.pastUnits,r=Object.keys(t),o=0,s=0,u=0;u<r.length;u+=1){var i=r[u],c=t[i],d=c.grade,f=c.units,p=c.course,m=l.gradeToNumber(d);if("number"==typeof m&&d&&f)o+=m*Number(f),s+=Number(f);else if("number"!=typeof m&&d&&f)return void(0,b.default)("Oops!",p?"Your grade for "+p+" doesn't look right!":"One of your grades doesn't look right!","warning")}isNaN(Number(a))||isNaN(Number(n))||(o+=Number(a)*n,s+=Number(n));var g=o/s*1e3%10>=5,h=g?Math.ceil(o/s*100)/100:Math.floor(o/s*100)/100;if(!isNaN(h))if(10*h%10!=0){var y=h.toFixed(2);l.setState({gpa:y})}else{var v=h.toFixed(1);l.setState({gpa:v})}},l.addClass=function(){var e=l.state.inputCount;l.setState({inputCount:e+1})},l.showGpa=function(){var e=l.state.gpa;e?(0,b.default)("Nice!",l.gpaStringBuilder(e),null):(0,b.default)("Ugh oh!!","It appears you haven't added any classes!","warning")},l.state={courses:{},pastGpa:"",pastUnits:"",inputCount:4,gpa:""},l}return s(t,e),c(t,[{key:"gradeToNumber",value:l},{key:"gpaStringBuilder",value:u},{key:"render",value:i}]),t}(f.default.Component);t.default=v}});