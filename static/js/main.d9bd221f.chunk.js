(this.webpackJsonppages_portfolio=this.webpackJsonppages_portfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(16),n(2)),s=n(3),i=n(5),u=n(4),m=n(1),d=n(6),g=(n(17),n(18),n(19),function(e){var t=e.rotate,n=void 0===t?0:t,a=e.onClick;return r.a.createElement("svg",{className:"next-arrow",width:"16px",height:"16px",viewBox:"0 0 451.847 451.847",style:{transform:"rotate(".concat(n,"deg)")},onClick:a},r.a.createElement("path",{fill:"black",d:"M225.923 354.706c-8.098 0-16.195-3.092-22.37-9.263L9.27 151.157c-12.36-12.36-12.36-32.397 0-44.75 12.354-12.355 32.388-12.355 44.748 0L225.923 278.32 397.83 106.413c12.358-12.354 32.39-12.354 44.743 0 12.365 12.354 12.365 32.392 0 44.75L248.293 345.45c-6.178 6.17-14.275 9.256-22.37 9.256z"}))}),h=n(9),p=n.n(h),b=(n(32),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){p()(".garden","jonbent",{responsive:!0}).then((function(){document.querySelectorAll('rect[fill="#ebedf0"]').forEach((function(e){return e.style.fill="rgba(0,0,0,0.5)"})),document.querySelector('li[style="background-color: #ebedf0"]').style.backgroundColor="rgba(0,0,0,0.5)",document.querySelectorAll('rect[fill="#c6e48b"]').forEach((function(e){return e.style.fill="#BFCDE0"})),document.querySelector('li[style="background-color: #c6e48b"]').style.backgroundColor="#BFCDE0",document.querySelectorAll('rect[fill="#7bc96f"]').forEach((function(e){return e.style.fill="#5D5D81"})),document.querySelector('li[style="background-color: #7bc96f"]').style.backgroundColor="#5D5D81",document.querySelectorAll('rect[fill="#239a3b"]').forEach((function(e){return e.style.fill="#3B3355"})),document.querySelector('li[style="background-color: #239a3b"]').style.backgroundColor="#3B3355",document.querySelectorAll('rect[fill="#196127"]').forEach((function(e){return e.style.fill="#2f2842"})),document.querySelector('li[style="background-color: #196127"]').style.backgroundColor="#2f2842"}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Begin"},r.a.createElement("div",{className:"headshot"},r.a.createElement("img",{src:"images/headshot_small.png",alt:"Jon Bent"})),r.a.createElement("div",{className:"description-container"},r.a.createElement("div",{className:"description"},r.a.createElement("div",null,"Hey, I'm Jon"),r.a.createElement("div",null,"A Software Engineer with a nack for troubleshooting, and an interest in anything technology"),r.a.createElement("div",null,"Check out my projects!")),r.a.createElement("div",null,r.a.createElement(g,{rotate:270,onClick:function(){return e.props.changeIndex(1)}})),r.a.createElement("div",{className:"garden"})))}}]),t}(a.Component)),f=n(10),k=(n(33),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={currentPicture:0,github:!1,linkedin:!1},n.changePicture=n.changePicture.bind(Object(m.a)(n)),n.handleMouse=n.handleMouse.bind(Object(m.a)(n)),n.startChange=n.startChange.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.changeStarted=!1,this.startChange()}},{key:"startChange",value:function(){var e=Math.floor(3001*Math.random()+5e3);this.changeStarted?this.changePicture():this.changeStarted=!0,setTimeout(this.startChange,e)}},{key:"changePicture",value:function(){this.setState({currentPicture:(this.state.currentPicture+1)%this.props.project.images.length})}},{key:"handleMouse",value:function(e,t){this.setState(Object(f.a)({},e,t))}},{key:"render",value:function(){var e=this.props.project;return r.a.createElement("div",{className:"ProjectItem"},r.a.createElement("div",{className:"picture",style:{backgroundImage:"url(".concat(e.images[this.state.currentPicture],")")}}),r.a.createElement("div",{className:"title-and-desc"},r.a.createElement("div",{className:"title"},e.name),r.a.createElement("div",{className:"description"},e.description),r.a.createElement("div",{className:"actions"},r.a.createElement("div",{className:"github-link"},r.a.createElement("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer"},"Github")),r.a.createElement("div",{className:"linked-link"},r.a.createElement("a",{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer"},"Live Site")))))}}]),t}(a.Component)),v=(n(34),[{name:"BakedMaps",description:"A pixel perfect clone of weedmaps, using an undocumented API to fetch real time data.",liveUrl:"https://baked-maps.com",githubUrl:"https://github.com/jonbent/bakedmaps",images:["images/projects/baked-maps/baked-maps-splash.png","images/projects/baked-maps/bakery-show.gif","images/projects/baked-maps/baked-maps-map.png"]},{name:"Dumbells N Donuts",description:"Dumbells-N-Donuts is a mobile friendly fitness website, which hopes to help manage user's workouts and meals in a flexible way.\n\nA user can decide to choose from already defined exhaustive list of meals and exercises or have their own custom meals and form a routine.",liveUrl:"https://dumbells-n-donuts.herokuapp.com",githubUrl:"https://github.com/jonbent/dumbells-n-donuts",images:["images/projects/dumbells-n-donuts/dumbells-splash.gif","images/projects/dumbells-n-donuts/user-show.png","images/projects/dumbells-n-donuts/muscle-selector.png"]},{name:"BuildAVirus",description:"Upgrade a sample virus until you either kill off the entire world, or the world builds immunity to you. Users are given a couple viruses to choose to start from.\n\nKilling off more people will award more points, which in turn allows upgrades to be purchased.",liveUrl:"https://jonbent.github.io/BuildAVirus/",githubUrl:"https://github.com/jonbent/buildavirus",images:["images/projects/build-a-virus/map-show.png","images/projects/build-a-virus/map-gif.gif","images/projects/build-a-virus/world-news.gif"]},{name:"Ask Jon",description:"I built an app for my fellow cohort mates to use when stuck on a coding problem at AppAcademy.\n\nAs soon as you ask a question, I get a text, and I head right to you!",liveUrl:"https://ask-jon.herokuapp.com/#/",githubUrl:"https://github.com/jonbent/AskAQuestion",images:["images/projects/ask-jon/queue.png","images/projects/ask-jon/splash.gif"]}]),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".nav");document.querySelector(".Projects").addEventListener("scroll",(function(){this.scrollTop>0&&e?e.style.backgroundColor="rgba(0,0,0,0.5)":e&&(e.style.backgroundColor=null)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Projects"},v.map((function(e){return r.a.createElement(k,{key:e.name,project:e})})))}}]),t}(a.Component),j=(n(35),function(){return r.a.createElement("div",{className:"Resume"},r.a.createElement("iframe",{src:"files/jon_bent_resume.pdf"}))}),E=function(e){var t=e.currentPageIndex,n=e.changeIndex,a=document.querySelector(".nav");return 2===t&&a?a.style.backgroundColor="rgba(0,0,0,0.5)":a&&(a.style.backgroundColor=null),r.a.createElement("div",{className:"Splash",style:{transform:"translateX(-".concat(100*t,"%)")}},r.a.createElement(b,{changeIndex:n}),r.a.createElement(y,null),r.a.createElement(j,null))},w=["bird-shadow.jpg","galaxy.jpg","war.jpg","cant-swim.jpg","cpus.jpg","my-comp.jpeg","eye-with-person.jpg","lord-ring.jpg","never-failed-never-tried.jpg","keep-on-digging.jpg","tomb-raider.jpg","up.jpg"],I=["Home","Projects"],x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={backgroundImage:0,currentPageIndex:0},n.updateBackgroundImage=n.updateBackgroundImage.bind(Object(m.a)(n)),n.changeIndex=n.changeIndex.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.updateBackgroundImage,1e4)}},{key:"changeIndex",value:function(e){this.setState({currentPageIndex:e})}},{key:"updateBackgroundImage",value:function(){this.setState({backgroundImage:(this.state.backgroundImage+1)%w.length})}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentPageIndex,a=t.backgroundImage;return r.a.createElement("div",{className:"App",style:{backgroundImage:"url(images/".concat(w[a],")")}},r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"same-page"},I.map((function(t,a){return r.a.createElement("span",{key:a,className:n===a?"selected":"",onClick:function(){return e.changeIndex(a)}},t)}))),r.a.createElement("div",{className:"download"},r.a.createElement("span",{onClick:function(){return e.changeIndex(2)}},r.a.createElement("img",{src:"images/social/resume.svg",alt:"Resume"}),"Resume")),r.a.createElement("div",{className:"new-page"},r.a.createElement("a",{href:"https://github.com/jonbent",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/social/octicon.svg",alt:"Github"}),"Github"),r.a.createElement("a",{href:"https://www.linkedin.com/in/jon-bent/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/social/linkedin.svg",alt:"LinkedIn"}),"LinkedIn"),r.a.createElement("a",{href:"https://angel.co/jon-bent-1",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"images/social/angellist.svg",alt:"AngelList"}),"AngelList"))),r.a.createElement(E,{currentPageIndex:n,changeIndex:this.changeIndex}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.d9bd221f.chunk.js.map