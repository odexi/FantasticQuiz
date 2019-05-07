(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,n){e.exports=n(321)},214:function(e,t,n){},321:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(27),i=n.n(s),o=n(95),c=n(16),l=n(17),u=n(19),m=n(18),p=n(20),d=n(93),h=n(30);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},y=function(){return r.a.createElement("header",{style:f},r.a.createElement("h1",null,"Fantastic Quiz"),r.a.createElement("p",{style:{color:"white",fontSize:"9px"}},"version 1.0"))};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of a React example"))},E=n(91),b=n.n(E),v=(n(214),n(43)),w=n(12),x=n(29),A=n.n(x),O=n(28),C=n.n(O),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selectedCategory:""},n.changeCategory=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value)),n.props.selectCategory(e.target.value,Q.find(function(t){return t.id===parseInt(e.target.value)}).name)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{value:this.state.selectedCategory,name:"selectedCategory",onChange:this.changeCategory},Q.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))}}]),t}(a.Component),Q=[{name:"Any Category",id:0},{name:"General Knowledge",id:9},{name:"Entertainment: Books",id:10},{name:"Entertainment: Film",id:11},{name:"Entertainment: Music",id:12},{name:"Entertainment: Musical & Theatres",id:13},{name:"Entertainment: Television",id:14},{name:"Entertainment: Video Games",id:15},{name:"Entertainment: Board Games",id:16},{name:"Science & Nature",id:17},{name:"Science: Computers",id:18},{name:"Science: Mathematics",id:19},{name:"Mythology",id:20},{name:"Sports",id:21},{name:"Geography",id:22},{name:"History",id:23},{name:"Politics",id:24},{name:"Art",id:25},{name:"Celebrities",id:26},{name:"Animals",id:27},{name:"Vehicles",id:28},{name:"Entertainment: Comics",id:29},{name:"Science: Gadgets",id:30},{name:"Entertainment: Japanese Anime & Manga",id:31},{name:"Entertainment: Cartoon & Animations",id:32}],j=k,S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={nickname:"",numberOfQuestions:5,category:0,categoryName:"",difficulty:"any"},n.onChange=function(e){return n.setState(Object(v.a)({},e.target.name,e.target.value))},n.selectCategory=function(e,t){n.setState({category:e.toString(),categoryName:t})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:q},r.a.createElement(A.a,{style:N},r.a.createElement("span",null,"Nickname:"),r.a.createElement("br",null),r.a.createElement(w.d,{type:"text",name:"nickname",value:this.state.nickname,onChange:this.onChange})),r.a.createElement("br",null),r.a.createElement(A.a,{style:N},r.a.createElement("span",null,"Number of questions:"),r.a.createElement("br",null),r.a.createElement(C.a,{name:"numberOfQuestions",value:this.state.numberOfQuestions,onChange:this.onChange},r.a.createElement("option",{value:5},"5"),r.a.createElement("option",{value:10},"10"),r.a.createElement("option",{value:20},"20"),r.a.createElement("option",{value:30},"30"))),r.a.createElement("br",null),r.a.createElement(A.a,{style:N},r.a.createElement("span",null,"Select category:"),r.a.createElement("br",null),r.a.createElement(j,{selectCategory:this.selectCategory})),r.a.createElement("br",null),r.a.createElement(A.a,{style:N},r.a.createElement("span",null,"Select difficulty:"),r.a.createElement("br",null),r.a.createElement(C.a,{name:"difficulty",value:this.state.difficulty,onChange:this.onChange},r.a.createElement("option",{value:"any"},"Any"),r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard")),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"contained",color:"primary",onClick:this.props.getQuestions.bind(this,this.state.nickname,this.state.numberOfQuestions,this.state.category,this.state.categoryName,this.state.difficulty)},"Start"))}}]),t}(a.Component),q={textAlign:"center",padding:"10px"},N={margin:"2em"},I=S,M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).reset=function(){n.props.resetQuizState(),n.props.resetGame()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(w.c,null,r.a.createElement("span",{style:{}},"Category: ",0!==this.props.options.categoryId?this.props.options.categoryName:"any",", Difficulty: ",this.props.options.difficulty),r.a.createElement(w.e,{style:{paddingTop:"1em",paddingBottom:"1em"},variant:"h5",component:"h2"},"Congratulations ",this.props.options.nickname,", you got ",this.props.data.rightAnswers," out of ",this.props.data.questionAmount," right!"),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"contained",color:"primary",onClick:this.reset},"Back to main menu"))}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentQuestionNumberIndex:0,rightAnswers:0,showResults:!1},n.randomizeAnswerOrder=function(e,t){return e.push(t),n.shuffleArray(e)},n.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},n.checkTheAnswer=function(e){e.id===n.props.questions[n.state.currentQuestionNumberIndex].correct_answer.id?(document.querySelector("#".concat(e.id)).style.backgroundColor="#88E823",setTimeout(function(){var e=n.state.rightAnswers+1,t=n.state.currentQuestionNumberIndex+1;t<n.props.questions.length?n.setState({currentQuestionNumberIndex:t,rightAnswers:e}):n.setState({currentQuestionNumberIndex:t,rightAnswers:e,showResults:!0})},2e3)):(document.querySelector("#".concat(n.props.questions[n.state.currentQuestionNumberIndex].correct_answer.id)).style.backgroundColor="#88E823",document.querySelector("#".concat(e.id)).style.backgroundColor="#FF121F",setTimeout(function(){var e=n.state.currentQuestionNumberIndex+1;e<n.props.questions.length?n.setState({currentQuestionNumberIndex:e}):n.setState({currentQuestionNumberIndex:e,showResults:!0})},2e3))},n.resetQuizState=function(){n.setState({currentQuestionNumberIndex:0,rightAnswer:0,showResults:!1})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(w.b,{style:_},r.a.createElement("header",null,r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),this.state.showResults?r.a.createElement(M,{options:this.props.options,data:{rightAnswers:this.state.rightAnswers,questionAmount:this.props.questions.length},resetGame:this.props.resetGame,resetQuizState:this.resetQuizState}):r.a.createElement(w.c,null,r.a.createElement("div",null,r.a.createElement("span",{style:{float:"right"}},this.state.currentQuestionNumberIndex+1+"/"+this.props.questions.length),r.a.createElement("span",{style:{float:"left"}},this.props.questions[this.state.currentQuestionNumberIndex].category)),r.a.createElement(w.e,{style:{paddingTop:"2em",paddingBottom:"1em"},variant:"h5",component:"h2"},this.props.questions[this.state.currentQuestionNumberIndex].question),this.randomizeAnswerOrder(this.props.questions[this.state.currentQuestionNumberIndex].incorrect_answers,this.props.questions[this.state.currentQuestionNumberIndex].correct_answer).map(function(t){return r.a.createElement(w.a,{style:G,size:"large",color:"primary",key:t.id,id:t.id,onClick:e.checkTheAnswer.bind(e,t)},t.text)}),r.a.createElement("span",{style:{textAlign:"center",paddingTop:"2em"}},"Difficulty: ",this.props.questions[this.state.currentQuestionNumberIndex].difficulty))))}}]),t}(a.Component),G={width:"100%",flex:"10",border:"1px solid black",marginBottom:"1em"},_={textAlign:"center",padding:"10px"},z=T,H=n(58),R=n.n(H),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[],options:{}},n.getQuestions=function(e,t,a,r,s){var i="https://opentdb.com/api.php?type=multiple&amount=".concat(t);"any"!==a&&(i+="&category=".concat(a)),"any"!==s&&(i+="&difficulty=".concat(s)),b.a.get(i).then(function(t){if(200===t.status){t.data.results.map(function(e){return n.createAnswerObjects(e)});var i={nickname:e,categoryId:a,categoryName:r,difficulty:s};n.setState({questions:n.decodeQuestionsHtmlEntity(t.data.results),options:i})}else console.log("Api call was unsuccessfull!")})},n.createAnswerObjects=function(e){var t=e.correct_answer,n=[],a=!0,r=!1,s=void 0;try{for(var i,c=e.incorrect_answers.entries()[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value,u=Object(o.a)(l,2),m=(u[0],{text:u[1],id:"i"+R()()});n.push(m)}}catch(p){r=!0,s=p}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}return e.incorrect_answers=n,e.correct_answer={text:t,id:"i"+R()()},e},n.decodeHtml=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value},n.decodeQuestionsHtmlEntity=function(e){return e=e.map(function(e){return e.question=n.decodeHtml(e.question),e.correct_answer.text=n.decodeHtml(e.correct_answer.text),e.incorrect_answers.map(function(e){return n.decodeHtml(e.text)}),e})},n.resetGame=function(){n.setState({questions:[]})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("header",null,r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},0===this.state.questions.length?r.a.createElement(y,null):null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(r.a.Fragment,null,e.state.questions.length>0?r.a.createElement(z,{questions:e.state.questions,options:e.state.options,resetGame:e.resetGame}):r.a.createElement(I,{getQuestions:e.getQuestions}))}}),r.a.createElement(h.a,{path:"/about",component:g}))))}}]),t}(a.Component);i.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.baf89895.chunk.js.map