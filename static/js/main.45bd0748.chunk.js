(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,n){e.exports=n(25)},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),i=n.n(r),l=(n(21),n(22),n(5)),s=n(9);var c=function(){return Object(a.useEffect)((function(){var e=document.getElementById("canvas"),t=new l.j,n=new l.g(75,e.clientWidth/e.clientHeight,.1,1e3),a=new l.o;n.position.set(-2,0,10);var o=new l.c("white",1);o.position.set(5,0,3),t.add(o);var r=new l.m,i=new l.m(window.innerWidth/window.innerHeight),c=new l.m;document.addEventListener("mousemove",(function(e){r.x=e.clientX/8-i.x,r.y=e.clientY/4-i.y})),window.addEventListener("resize",(function(){a.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()}),!1),t.background=(new l.b).setPath("textures/").load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]),a.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas").appendChild(a.domElement);for(var d=(new l.l).load("sunbump.png"),m=(new l.l).load("sun.jpg"),u=new l.k(1,32,32),y=new l.f({map:m,alphaTest:.1,bumpMap:d,bumpScale:.005}),p=new l.e(u,y),g=new l.d,f=(new l.l).load("flare.png"),h=new l.i({color:"white",size:.3,map:f,alphaTest:.1,blending:l.a,transparent:!1}),v=0;v<2e3;v++){var E=53*(Math.random()-.5),w=53*(Math.random()-.5),x=53*(Math.random()-.5),N=new l.n(E,w,x);g.vertices.push(N)}var C=new l.h(g,h);C.name="particleSys",a.setAnimationLoop((function(){var e=t.getObjectByName("particleSys");e.geometry.vertices.forEach((function(t){t.z+=.1,t.z>10&&(t.z=-20),e.geometry.verticesNeedUpdate=!0})),a.render(t,n)})),t.add(p),t.add(C);new s.a.Tween(h.color).to({r:.2,g:0,b:1},5e3).yoyo(!0).repeat(99999).start();setTimeout((function(){return new s.a.Tween(n.position).to({x:2,y:0,z:3},5e3).start()}),2e4);!function e(){c.x=.002*(.5-r.x),c.y=.002*(.5-r.y),n.rotation.x+=.05*(c.y-n.rotation.x),n.rotation.y+=.05*(c.x-n.rotation.y),requestAnimationFrame(e),p.rotation.x+=.01,p.rotation.y+=.01,a.render(t,n)}(),requestAnimationFrame((function e(t){s.a.update(t),requestAnimationFrame(e)}))})),o.a.createElement("div",{id:"canvas",onWheel:function(e){!function(e){var t=e.deltaY,n=document.getElementById("grid1_intro"),a=document.getElementById("canvas");if(t>0&&(""===n.style.display||"grid"===n.style.display)){a.style.pointerEvents="none",function(){var e=document.getElementById("grid1_intro"),t=document.getElementById("overlay2"),n=document.getElementById("grid1_name_img"),a=document.getElementById("overlay"),o=document.getElementById("scrolldown"),r=document.getElementById("fillingBar");o.style.animation="popUpScroll 1s reverse ease-out",e.style.animation="nextDiv 2s normal forwards ease-out",t.style.animation="nextDiv 2s normal forwards ease-out",n.style.animation="nextDiv 2s normal forwards ease-out",a.style.animation="nextDiv 2s normal forwards ease-out",o.onanimationend=function(){o.style.display="none"},e.onanimationend=function(){e.style.display="none"},t.onanimationend=function(){t.style.display="none"},n.onanimationend=function(){n.style.display="none"},a.onanimationend=function(){a.style.display="none",r.style.animation="filling 2s ease-out"}}();var o=document.getElementById("grid2");setTimeout((function(){o.style.transform="scale(0, 0)",o.style.display="grid",o.style.animation="popGrid2 2s normal forwards ease-out",o.onanimationend=function(){o.style.display="grid",a.style.pointerEvents="auto"}}),1800)}if(t<0&&"none"===n.style.display){a.style.pointerEvents="none";var r=document.getElementById("grid2");r.style.animation="none",r.style.animation=null,r.style.animation="popGrid2reverse 1s normal forwards ease-out",r.onanimationend=function(){r.style.display="none"},setTimeout(function(){var e=document.getElementById("grid1_intro"),t=document.getElementById("fillingBar");e.style.display="grid";var n=document.getElementById("overlay2");n.style.display="grid";var o=document.getElementById("grid1_name_img");o.style.display="grid";var r=document.getElementById("overlay");r.style.display="grid",e.style.animation="nextDiv 2s reverse ease-out",n.style.animation="nextDiv 2s reverse ease-out",o.style.animation="nextDiv 2s reverse ease-out",r.style.animation="nextDiv 2s reverse ease-out",t.style.animation="",t.style.animation="oppositefilling 1.5s ease-out",e.onanimationend=function(){e.style.display="grid"},n.onanimationend=function(){n.style.display="grid"},o.onanimationend=function(){o.style.display="grid"},r.onanimationend=function(){r.style.display="grid",a.style.pointerEvents="auto"}}(),1e3)}}(e)},onMouseMove:function(e){!function(e){var t=document.getElementById("canvas"),n=.001*(.5-(e.clientX/8-t.clientWidth/2)),a=-.01*(.5-(e.clientY/4-t.clientHeight/2)),o=document.getElementById("overlay"),r=document.getElementById("overlay2"),i=document.getElementById("grid1_intro"),l=document.getElementById("grid1_name_img");o.style.transform="rotate3d("+n+","+a+", 0, 35deg)",r.style.transform="rotate3d("+n+","+a+", 0, 35deg)",i.style.transform="rotate3d("+n+","+a+", 0, 35deg)",l.style.transform="rotate3d("+n+","+a+", 0, 35deg)"}(e)}})},d=n(10),m=n.n(d),u=n(13),y=n(1),p=n(4),g=n(2),f=n(3),h=n(14),v=n.n(h),E=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).play=function(){var t=Object(u.a)(m.a.mark((function t(n){var a,o,r,i,l,s,c,d,u,y,p,g,f,h;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(g=function(){0===document.getElementById("won").childElementCount&&c("TIE")},u=function(e,t){var n=[0,4,8].every((function(t){return e.includes(t)})),a=[2,4,6].every((function(t){return e.includes(t)})),o=[0,1,2].every((function(t){return e.includes(t)})),r=[3,4,5].every((function(t){return e.includes(t)})),i=[6,7,8].every((function(t){return e.includes(t)})),l=[0,3,6].every((function(t){return e.includes(t)})),s=[1,4,7].every((function(t){return e.includes(t)})),d=[2,5,8].every((function(t){return e.includes(t)}));switch(!0){case n:case a:case o:case r:case i:case l:case s:case d:return c(t);default:return!1}},d=function(e,t){var n=[0,4].every((function(t){return e.includes(t)})),a=[2,4].every((function(t){return e.includes(t)})),r=[0,1].every((function(t){return e.includes(t)})),i=[3,4].every((function(t){return e.includes(t)})),l=[6,7].every((function(t){return e.includes(t)})),s=[0,3].every((function(t){return e.includes(t)})),c=[1,4].every((function(t){return e.includes(t)})),d=[2,5].every((function(t){return e.includes(t)})),m=[4,8].every((function(t){return e.includes(t)})),y=[4,6].every((function(t){return e.includes(t)})),p=[1,2].every((function(t){return e.includes(t)})),g=[4,5].every((function(t){return e.includes(t)})),f=[7,8].every((function(t){return e.includes(t)})),h=[3,6].every((function(t){return e.includes(t)})),v=[4,7].every((function(t){return e.includes(t)})),E=[5,8].every((function(t){return e.includes(t)})),w=[0,8].every((function(t){return e.includes(t)})),x=[2,6].every((function(t){return e.includes(t)})),N=[0,2].every((function(t){return e.includes(t)})),C=[3,5].every((function(t){return e.includes(t)})),b=[6,8].every((function(t){return e.includes(t)})),B=[0,6].every((function(t){return e.includes(t)})),O=[1,7].every((function(t){return e.includes(t)})),j=[2,8].every((function(t){return e.includes(t)}));switch(!0){case n:return""===o[8].textContent&&(document.getElementsByClassName("column")[8].appendChild(document.createTextNode("O")),t.push(8),u(t,"Player O won!"));case a:return""===o[6].textContent&&(document.getElementsByClassName("column")[6].appendChild(document.createTextNode("O")),t.push(6),u(t,"Player O won!"));case r:return""===o[2].textContent&&(document.getElementsByClassName("column")[2].appendChild(document.createTextNode("O")),t.push(2),u(t,"Player O won!"));case i:return""===o[5].textContent&&(document.getElementsByClassName("column")[5].appendChild(document.createTextNode("O")),t.push(5),u(t,"Player O won!"));case l:return""===o[8].textContent&&(document.getElementsByClassName("column")[8].appendChild(document.createTextNode("O")),t.push(8),u(t,"Player O won!"));case s:return""===o[6].textContent&&(document.getElementsByClassName("column")[6].appendChild(document.createTextNode("O")),t.push(6),u(t,"Player O won!"));case c:return""===o[7].textContent&&(document.getElementsByClassName("column")[7].appendChild(document.createTextNode("O")),t.push(7),u(t,"Player O won!"));case d:return""===o[8].textContent&&(document.getElementsByClassName("column")[8].appendChild(document.createTextNode("O")),t.push(8),u(t,"Player O won!"));case m:return""===o[0].textContent&&(document.getElementsByClassName("column")[0].appendChild(document.createTextNode("O")),t.push(0),u(t,"Player O won!"));case y:return""===o[7].textContent&&(document.getElementsByClassName("column")[7].appendChild(document.createTextNode("O")),t.push(7),u(t,"Player O won!"));case p:return""===o[0].textContent&&(document.getElementsByClassName("column")[0].appendChild(document.createTextNode("O")),t.push(0),u(t,"Player O won!"));case g:return""===o[3].textContent&&(document.getElementsByClassName("column")[3].appendChild(document.createTextNode("O")),t.push(3),u(t,"Player O won!"));case f:return""===o[6].textContent&&(document.getElementsByClassName("column")[6].appendChild(document.createTextNode("O")),t.push(6),u(t,"Player O won!"));case h:return""===o[0].textContent&&(document.getElementsByClassName("column")[0].appendChild(document.createTextNode("O")),t.push(0),u(t,"Player O won!"));case v:return""===o[1].textContent&&(document.getElementsByClassName("column")[1].appendChild(document.createTextNode("O")),t.push(1),u(t,"Player O won!"));case E:return""===o[2].textContent&&(document.getElementsByClassName("column")[2].appendChild(document.createTextNode("O")),t.push(2),u(t,"Player O won!"));case w:case x:return""===o[4].textContent&&(document.getElementsByClassName("column")[4].appendChild(document.createTextNode("O")),t.push(4),u(t,"Player O won!"));case N:return""===o[1].textContent&&(document.getElementsByClassName("column")[1].appendChild(document.createTextNode("O")),t.push(1),u(t,"Player O won!"));case C:return""===o[4].textContent&&(document.getElementsByClassName("column")[4].appendChild(document.createTextNode("O")),t.push(4),u(t,"Player O won!"));case b:return""===o[7].textContent&&(document.getElementsByClassName("column")[7].appendChild(document.createTextNode("O")),t.push(7),u(t,"Player O won!"));case B:return""===o[3].textContent&&(document.getElementsByClassName("column")[3].appendChild(document.createTextNode("O")),t.push(3),u(t,"Player O won!"));case O:return""===o[4].textContent&&(document.getElementsByClassName("column")[4].appendChild(document.createTextNode("O")),t.push(4),u(t,"Player O won!"));case j:return""===o[5].textContent&&(document.getElementsByClassName("column")[5].appendChild(document.createTextNode("O")),t.push(5),u(t,"Player O won!"));default:return!1}},c=function(e){var t=document.createElement("h3"),n=document.getElementById("won");if(!(n.childElementCount>=1))return t.innerHTML=e,n.appendChild(t)},a=n.target.id-1,o=document.getElementsByClassName("column"),r=0,i=0,l=0;l<o.length;l++)for(s=0;s<o.length;s++)"X"===o[s].textContent&&r++,"O"===o[s].textContent&&i++;if(y=[],p=[],r>i&&!0!==d(y,p)){for(function e(){var t=Math.floor(Math.random()*o.length);if(""!==o[t].textContent&&p.length<=3)for(var n=0;n<1;n++){for(var a=0,r=0;r<o.length;r++)""!==o[r].textContent&&a++;return 9===a?(u(p,"Player O won!"),u(y,"Player X won!"),setTimeout((function(){g()}),500)):e()}if(""===o[t].textContent)return document.getElementsByClassName("column")[t].appendChild(document.createTextNode("O"))}(),f=0;f<o.length;f++)"X"===o[f].textContent&&y.push(f),"O"===o[f].textContent&&p.push(f);u(p,"Player O won!"),u(y,"Player X won!")}if(0===r&&0===i||r===i&&""===o[a].textContent){for(document.getElementsByClassName("column")[a].appendChild(document.createTextNode("X")),h=0;h<o.length;h++)"X"===o[h].textContent&&y.push(h),"O"===o[h].textContent&&p.push(h);!0===d(y,p)?(u(p,"Player O won!"),u(y,"Player X won!"),e.play(n)):e.play(n)}case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"tictactoe"},o.a.createElement("div",{className:"column",id:this.props.num[0],play:this.props.player_won,onClick:this.play}),o.a.createElement("div",{className:"column",id:this.props.num[1],onClick:this.play}),o.a.createElement("div",{className:"column",id:this.props.num[2],onClick:this.play}))}}]),n}(o.a.Component),w=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"scores"},o.a.createElement("div",{className:"title"},o.a.createElement("h3",null,"Winner:")),o.a.createElement("div",{className:"won",id:"won"}))}}]),n}(E),x=function(e){Object(g.a)(n,e);var t=Object(f.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"TicTacToe",id:"TicTacToe"},o.a.createElement("i",{onClick:function(){var e=document.getElementById("TicTacToe"),t=document.getElementById("btn");e.style.animation="popGrid2reverse 1s normal forwards ease-out",t.style.pointerEvents="none",e.onanimationend=function(){e.style.animation="none",e.style.display="none",t.style.pointerEvents="auto"}},class:"fi-xwluxl-times-wide"}),o.a.createElement("header",{className:"TicTacToe2"},o.a.createElement("div",{className:"logodiv"},o.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}))),o.a.createElement("div",{className:"container"},o.a.createElement(w,null),o.a.createElement("div",{className:"columncontainer"},o.a.createElement(E,{num:[1,2,3]}),o.a.createElement(E,{num:[4,5,6]}),o.a.createElement(E,{num:[7,8,9]})),o.a.createElement("button",{onClick:function(){for(var e=document.getElementsByClassName("column"),t=0;t<e.length;t++)e[t].textContent="";var n=document.getElementById("won");n.childElementCount>0&&n.removeChild(n.firstChild)}},"Start Over!")))}}]),n}(E);var N=function(){return o.a.createElement("div",{className:"contain",id:"contain"},o.a.createElement("div",{className:"grid1_intro",onAnimationEnd:function(){!function(){var e=document.getElementById("grid1_intro"),t=document.getElementById("overlay2"),n=document.getElementById("grid1_name_img"),a=document.getElementById("overlay"),o=document.getElementById("scrolldown");e.style.animation="none",t.style.animation="none",n.style.animation="none",a.style.animation="none",o.style.animation="heartlikeAnim 2.5s forwards infinite ease-out"}()},id:"grid1_intro"},o.a.createElement("h4",null,"My name is Ignacio Diaz, i'm from Buenos Aires my main programming language is Javascript followed by Java. I am very passionate about web development thing which has led me to learn a variety of Javascript libraries and the React.js framework. Here are the frameworks, libraries and technologies i learned and used in my projects:"),o.a.createElement("div",{className:"links"},o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./Reactjslogo.png",alt:"reactlogo"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./nodejslogo.png",alt:"nodejs"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./postgresqllogo.png",alt:"postgresql"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./javalogo.png",alt:"java"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./gitlogo.png",alt:"git"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./herokulogo.png",alt:"heroku"}))),o.a.createElement("div",{className:"links"},o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./chartjslogo.png",alt:"chartjs"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./threejslogo.png",alt:"threejs"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./html5logo.png",alt:"html"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./csslogo.svg",alt:"css"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./googlecloudlogo.png",alt:"googlecloud"})),o.a.createElement("div",{className:"img_container"},o.a.createElement("img",{src:"./multerlogo.png",alt:"multer"}))),o.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("canvas");e.style.pointerEvents="none";var t=document.getElementById("grid1_intro"),n=document.getElementById("overlay2"),a=document.getElementById("grid1_name_img"),o=document.getElementById("overlay"),r=document.getElementById("scrolldown"),i=document.getElementById("fillingBar");r.style.animation="popUpScroll 1s reverse ease-out",t.style.animation="nextDiv 2s normal forwards ease-out",n.style.animation="nextDiv 2s normal forwards ease-out",a.style.animation="nextDiv 2s normal forwards ease-out",o.style.animation="nextDiv 2s normal forwards ease-out",r.onanimationend=function(){r.style.display="none"},t.onanimationend=function(){t.style.display="none"},n.onanimationend=function(){n.style.display="none"},a.onanimationend=function(){a.style.display="none"},o.onanimationend=function(){o.style.display="none",i.style.animation="filling 2s ease-out"};var l=document.getElementById("grid2");setTimeout((function(){l.style.transform="scale(0, 0)",l.style.display="grid",l.style.animation="popGrid2 2s normal forwards ease-out",l.onanimationend=function(){l.style.display="grid",e.style.pointerEvents="auto"}}),1800)}()}},"Projects")),o.a.createElement("div",{className:"grid1_name_img",id:"grid1_name_img"},o.a.createElement("img",{src:"./profile.jpg",alt:"Profile pic"})),o.a.createElement("div",{className:"scrolldown",id:"scrolldown"},o.a.createElement("h3",null,"Scroll Down!")),o.a.createElement("div",{className:"transparentOverlay",id:"overlay"}),o.a.createElement("div",{className:"transparentOverlay2",id:"overlay2"}),o.a.createElement("div",{className:"grid2",id:"grid2"},o.a.createElement("div",{className:"portfolioTitle",style:{color:"white",alignItems:"center",display:"grid",borderBottom:"2px solid white",padding:"2%"}},o.a.createElement("h2",{style:{margin:"2%"}},"Projects"),o.a.createElement("h4",{style:{textAlign:"left",margin:"0%"}},"Portfolio website: "),o.a.createElement("h5",{style:{textAlign:"left",margin:"0%"}},"This portfolio project was made using: ",o.a.createElement("br",null),"Three.js for the 3d modeling and the background scene.",o.a.createElement("br",null),"Tween.js for the camera animation and color switching of the particles and React.",o.a.createElement("br",null),"The code for this portfolio can be found on my Github account linked here:"),o.a.createElement("a",{href:"https://github.com/Rogerpeke97",rel:"noopener noreferrer",target:"_blank",style:{justifyContent:"center",display:"grid",textDecoration:"none",color:"white",cursor:"default",margin:"2%"}},o.a.createElement("i",{class:"fi-xnsuxl-github",style:{cursor:"pointer"}}))),o.a.createElement("div",{className:"grid2_project",id:"grid2_project1"},o.a.createElement("div",{className:"project_img"},o.a.createElement("img",{src:"project1.gif",alt:"project1"})),o.a.createElement("div",{className:"textAndGit"},o.a.createElement("h4",null,"This is my first project, it converts csv files and displays them in a canvas using chartjs. It has a lot of backend functionalities that allowed me to learn about backend and frontend requests, remote storage using googlecloud api, file storage using multer, downloading files from googlecloud and turning them from buffers into readable data to display on the frontend. Also, deploying the website using the heroku cli, creating a database for the login user data, setting up the remote database, hashing the password when you sign up and storing cookies for the specific user session. You can sign up, create a user and login."),o.a.createElement("div",{className:"project_wrapper_links"},o.a.createElement("button",null,o.a.createElement("a",{href:"https://csv-convrt.herokuapp.com",rel:"noopener noreferrer",target:"_blank"},"Visit Site")),o.a.createElement("a",{href:"https://github.com/Rogerpeke97/Csv-converter-server-config",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{class:"fi-xnsuxl-github"}))))),o.a.createElement("div",{className:"grid2_project",id:"grid2_project2"},o.a.createElement("div",{className:"project_img"},o.a.createElement("img",{src:"tictactoe.gif",alt:"project1"})),o.a.createElement("div",{className:"textAndGit"},o.a.createElement("h4",null,"This is my second project which i included as a react component in this portfolio website. This project wasn't difficult, however, what made it difficult was not using the min-max algorithm. This project mainly helped me to understand react more and implement classes. Later on i found out about Hooks and made them a staple when it comes to writing components."),o.a.createElement("div",{className:"project_wrapper_links"},o.a.createElement("button",null,o.a.createElement("a",{href:"#",id:"btn",onClick:function(){!function(){var e=document.getElementById("TicTacToe");e.style.display="grid",e.style.animation="popTic 1s normal forwards ease-out",e.onanimationend=function(){e.style.display="grid"}}()}},"Play!")),o.a.createElement("a",{href:"https://github.com/Rogerpeke97/tictactoe",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{class:"fi-xnsuxl-github"}))))),o.a.createElement("div",{className:"grid2_project",id:"grid2_project3"},o.a.createElement("div",{className:"project_img"},o.a.createElement("img",{src:"portfolio.gif",alt:"project1"})),o.a.createElement("div",{className:"textAndGit"},o.a.createElement("h4",null,"This project is a vector visualizer in which you can add your own input and it will calculate the resultant between the 2 vectors. It's interactive and you can modify the scene using the control panel. The link to the site is down below!"),o.a.createElement("div",{className:"project_wrapper_links"},o.a.createElement("button",null,o.a.createElement("a",{href:"https://rogerpeke97.github.io/EduwebReact/",rel:"noopener noreferrer",target:"_blank"},"Visit Site")),o.a.createElement("a",{href:"https://github.com/Rogerpeke97/EduwebReact",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{class:"fi-xnsuxl-github"}))))),o.a.createElement(x,null)))};var C=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c,null),o.a.createElement(N,null))},b=n(15);var B=function(){var e=Object(a.useRef)(0),t=Object(a.useRef)(0),n=Object(a.useRef)(0),r=Object(a.useRef)(0),i=Object(a.useState)("Show background"),l=Object(b.a)(i,2),s=l[0],c=l[1];return o.a.createElement("div",{className:"navwrapper"},o.a.createElement("h4",{style:{justifyContent:"center"}},o.a.createElement("a",{href:"LatestResume.pdf",download:!0}," ",o.a.createElement("i",{className:"fi-swsuxl-download-wide"})," Resume")),o.a.createElement("div",{className:"websitemap",style:{justifyContent:"center",alignItems:"center",display:"grid",gridTemplateColumns:"5% 20% 10%"}},o.a.createElement("i",{className:"fi-xnsuxl-house-solid",onClick:function(){!function(){var e=document.getElementById("grid1_intro");if("none"===e.style.display){var t=document.getElementById("canvas");t.style.pointerEvents="none";var n=document.getElementById("grid2");n.style.animation="none",n.style.animation=null,n.style.animation="popGrid2reverse 1s normal forwards ease-out",n.onanimationend=function(){n.style.display="none"},setTimeout((function(){e.style.display="grid";var n=document.getElementById("fillingBar"),a=document.getElementById("overlay2");a.style.display="grid";var o=document.getElementById("grid1_name_img");o.style.display="grid";var r=document.getElementById("overlay");r.style.display="grid",e.style.animation="nextDiv 2s reverse ease-out",a.style.animation="nextDiv 2s reverse ease-out",o.style.animation="nextDiv 2s reverse ease-out",r.style.animation="nextDiv 2s reverse ease-out",n.style.animation="",n.style.animation="oppositefilling 1.5s ease-out",e.onanimationend=function(){e.style.display="grid"},a.onanimationend=function(){a.style.display="grid"},o.onanimationend=function(){o.style.display="grid"},r.onanimationend=function(){r.style.display="grid",t.style.pointerEvents="auto"}}),1e3)}}()},ref:n,style:{display:"grid",alignItems:"center",justifyContent:"center",transition:"all 0.5s ease-out",cursor:"pointer",filter:"drop-shadow(0 0 3px whitesmoke)"},onMouseEnter:function(){n.current.style.filter="drop-shadow(0 0 3px whitesmoke)",n.current.style.opacity="1"},onMouseLeave:function(){"none"===document.getElementById("grid1_intro").style.display&&(n.current.style.filter="drop-shadow(0 0 0px whitesmoke)",n.current.style.opacity="0.4")}}),o.a.createElement("div",{style:{width:"100%",height:"0.5rem",backgroundColor:"black",borderRadius:"9%"}},o.a.createElement("div",{id:"fillingBar",style:{height:"100%",backgroundColor:"white",position:"relative",width:"50%",left:"-100%",borderRadius:"9%",filter:"drop-shadow(0 0 3px whitesmoke)",opacity:"0%",animation:""},onAnimationEnd:function(){"none"===document.getElementById("grid1_intro").style.display?(e.current.style.width="100%",t.current.style.opacity="1",t.current.style.filter="drop-shadow(0 0 3px whitesmoke)",e.current.style.left="50%"):(n.current.style.animation="none",n.current.style.animation="illuminateHouse 1s ease-out",n.current.style.filter="drop-shadow(0 0 3px whitesmoke)",n.current.style.opacity="1")},ref:e,onAnimationStart:function(){var e=document.getElementById("grid1_intro");n.current.style.animation="fadeHouse 1s ease-out",n.current.style.filter="drop-shadow(0 0 0px whitesmoke)",n.current.style.opacity="0.4","none"!==e.style.display&&(t.current.style.opacity="0.4",t.current.style.filter="drop-shadow(0 0 0px whitesmoke)")}})),o.a.createElement("h4",{style:{cursor:"default",opacity:"0.4",transition:"all 0.5s ease-out"},ref:t},"Projects")),o.a.createElement("div",{className:"buttonwrapper"},o.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("contain");"0"===e.style.opacity?(e.style.opacity="1",e.style.visibility="visible",c("Show background")):(e.style.opacity="0",e.style.visibility="hidden",c("Show homescreen"))}()},ref:r},s)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null),o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),document.getElementById("root").classList.add("js-loading");var O=document.createElement("div");O.className="LOADING",O.id="LOADING",document.body.appendChild(O);var j=document.createElement("div");j.className="LOADINGCONTAINER",j.id="LOADINGCONTAINER";for(var I=["L","O","A","D","I","N","G",".",".","."],T=0;T<I.length;T++){var k=document.createElement("span");k.id="Text",k.textContent=I[T],j.appendChild(k)}document.getElementById("LOADING").appendChild(j),document.getElementById("LOADING").addEventListener("animationend",(function(){O.style.animation="loadingDone 1s normal forwards ease-in-out",setTimeout((function(){O.style.display="none",document.getElementById("root").classList.remove("js-loading")}),1e3)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.45bd0748.chunk.js.map