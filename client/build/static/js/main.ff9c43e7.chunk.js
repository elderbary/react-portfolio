(this.webpackJsonpola1=this.webpackJsonpola1||[]).push([[0],{102:function(e,a,t){e.exports=t.p+"static/media/recenzja-sucession.5cd903ce.png"},103:function(e,a,t){e.exports=t.p+"static/media/polacy-nie-czytaja.b52f89f8.png"},104:function(e,a,t){e.exports=t.p+"static/media/czlowiek-spoiler.bbb62dfd.png"},105:function(e,a,t){e.exports=t.p+"static/media/shitshow.aad2c8af.png"},106:function(e,a,t){e.exports=t.p+"static/media/szczygiel.c2836667.png"},107:function(e,a,t){e.exports=t.p+"static/media/the-morning-show.7d5522f7.png"},109:function(e,a,t){e.exports=t.p+"static/media/aleksandra-wolna.e4fdf3a7.jpg"},110:function(e,a,t){e.exports=t.p+"static/media/timeline.297d239d.svg"},118:function(e,a,t){e.exports=t(174)},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},152:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){},156:function(e,a,t){},174:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(77),s=t.n(c),r=(t(123),t(6)),o=t(4),i=t(8),m=t(7),d=(t(124),t(175)),u=t(177),p=t(116),E=(t(37),t(12)),w=(t(58),t(21)),h=t(3),f=t(2),z=(t(125),t(176)),v=[{name:"portfolio",path:"/",exact:!0},{name:"o mnie",path:"/o-mnie"},{name:"moje cv",path:"/cv"},{name:"kontakt",path:"/kontakt"}],N=function(){var e=v.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement(z.a,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return l.a.createElement("nav",{className:"navigation"},l.a.createElement("ul",null,e))},g=(t(129),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).paginationPosition=1,n.handleScroll=function(e){e.deltaY<0?n.paginationPosition>1&&(document.getElementById("page-"+n.paginationPosition).classList.remove("square-active"),--n.paginationPosition,document.getElementById("page-"+n.paginationPosition).classList.add("square-active"),window.removeEventListener("wheel",n.handleScroll),setTimeout(n.enableScroll,800)):e.deltaY>0&&n.paginationPosition<6&&(document.getElementById("page-"+n.paginationPosition).classList.remove("square-active"),++n.paginationPosition,document.getElementById("page-"+n.paginationPosition).classList.add("square-active"),window.removeEventListener("wheel",n.handleScroll),setTimeout(n.enableScroll,800))},n.enableScroll=function(){window.addEventListener("wheel",n.handleScroll)},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("wheel",this.handleScroll),document.getElementById("page-1").classList.add("square-active")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("wheel",this.handleScroll)}}]),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pagination"},l.a.createElement("div",{className:"pagination-square",id:"page-1"}),l.a.createElement("div",{className:"pagination-square",id:"page-2"}),l.a.createElement("div",{className:"pagination-square",id:"page-3"}),l.a.createElement("div",{className:"pagination-square",id:"page-4"}),l.a.createElement("div",{className:"pagination-square",id:"page-5"}),l.a.createElement("div",{className:"pagination-square",id:"page-6"}))}}]),t}(n.Component)),k=(t(130),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).currentURL=n.props.href,n}return Object(o.a)(t,[{key:"setURL",value:function(e){this.currentURL=e,document.getElementById("see-more").addEventListener("click",(function(){window.location.href=e}))}},{key:"unsetURL",value:function(e){document.getElementById("see-more").removeEventListener("click",(function(){window.location.href=e}))}},{key:"componentDidMount",value:function(){this.setURL(this.props.href)}},{key:"componentWillUnmount",value:function(){this.unsetURL(this.currentURL)}},{key:"render",value:function(){return l.a.createElement("div",{className:"btn-container"},l.a.createElement("button",{type:"button",className:"button",id:"see-more"},this.props.btntext))}}]),t}(n.Component)),y=(t(131),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"statistics-container"},l.a.createElement("h2",null,this.props.score),l.a.createElement("p",null,this.props.description))}}]),t}(n.Component)),j=(t(132),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,this.props.title)," "),l.a.createElement("div",{className:"text"},l.a.createElement("p",null,this.props.text)))}}]),t}(n.Component)),b=(t(133),n.Component,t(134),t(94)),x=t.n(b),S=t(95),O=t.n(S),L=t(96),P=t.n(L),U=function(){return l.a.createElement("div",{className:"social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/AleksandraWolna"},l.a.createElement("img",{src:x.a,alt:"facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/woln_a"},l.a.createElement("img",{src:O.a,alt:"twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/woln_a/"},l.a.createElement("img",{src:P.a,alt:"instagram"})))))},C=t(97),R=(t(152),l.a.Component,t(98));function M(){var e=Object(R.a)(["\n\n"]);return M=function(){return e},e}var T=t(22).a.div(M()),W=t(73),q=t(102),I=t.n(q),A=t(103),B=t.n(A),Y=t(104),D=t.n(Y),F=t(105),Z=t.n(F),J=t(106),K=t.n(J),V=t(107),_=t.n(V),G=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).btnURL=["https://serialomaniak.pl/recenzja/succession-sukcesja-serial-hbo-recenzja","https://igimag.pl/2019/04/polacy-nie-czytaja/","https://igimag.pl/2019/06/czlowiek-czlowiekowi-spoilerem-zlo-plynace-z-serwisow-streamingowych/","http://myslizaczytanej.pl/shitshow-ameryka-sie-sypie-a-ogladalnosc-szybuje-charlie-leduff/","http://myslizaczytanej.pl/szczygiel-donna-tartt/","https://serialomaniak.pl/recenzja/themorningshow-finalsezonu-pierwszysezon"],e.currentURLiterator=0,e.handleScroll=function(a){a.deltaY<0?e.currentURLiterator>0&&(e.carouselText.slidePrev(),e.carouselStats.slidePrev(),e.carouselPic.slidePrev(),window.removeEventListener("wheel",e.handleScroll),setTimeout(e.enableScroll,800),--e.currentURLiterator,e.seeMore.unsetURL(e.seeMore.currentURL),e.seeMore.setURL(e.btnURL[e.currentURLiterator])):a.deltaY>0&&(e.currentURLiterator<5?(e.carouselText.slideNext(),e.carouselStats.slideNext(),e.carouselPic.slideNext(),window.removeEventListener("wheel",e.handleScroll),setTimeout(e.enableScroll,800),++e.currentURLiterator,e.seeMore.unsetURL(e.seeMore.currentURL),e.seeMore.setURL(e.btnURL[e.currentURLiterator])):window.location.href="/o-mnie")},e.enableScroll=function(){window.addEventListener("wheel",e.handleScroll)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("wheel",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("wheel",this.handleScroll)}},{key:"render",value:function(){var e,a,t,n=this;return l.a.createElement("div",{className:"div-main"},l.a.createElement(w.a,{className:"container-std"},l.a.createElement(h.a,{className:"row-main"},l.a.createElement(f.a,{className:"col-std col-toggle",md:1},l.a.createElement("div",{className:"div-toggle"},l.a.createElement("div",{className:"div-inner-toggle"},l.a.createElement(g,null)))),l.a.createElement(f.a,{className:"col-std col-left",md:5},l.a.createElement("div",{className:"div-left"},l.a.createElement(w.a,{className:"container-left"},l.a.createElement(h.a,{className:"row-text"},l.a.createElement(W.a,(e={easing:"cubic-bezier(0.7,.15,.55,1.0)",transitionMs:700,enableSwipe:!1,enableMouseSwipe:!1,itemsToShow:1,itemsToScroll:1},Object(E.a)(e,"enableSwipe",!0),Object(E.a)(e,"verticalMode",!0),Object(E.a)(e,"showArrows",!1),Object(E.a)(e,"pagination",!1),Object(E.a)(e,"ref",(function(e){return n.carouselText=e})),e),l.a.createElement(T,{className:"item-text"}," ",l.a.createElement(f.a,{className:"col-std col-text"},l.a.createElement(j,{title:"Recenzja serialu 'Sukcesja'",text:"Sukcesja to serial w kt\xf3rym chodzi przede wszystkim o w\u0142adz\u0119. Bohaterowie w ko\u0144cu posiadaj\u0105 wszystko, o czym tylko zamarz\u0105. Opr\xf3cz tego jednego \u2013 kompletnej w\u0142adzy nad przedsi\u0119biorstwem, nad kt\xf3rym piecz\u0119 trzyma ich osiemdziesi\u0119cioletni ojciec. Kiedy zdrowie nestora rodu zaczyna niedomaga\u0107, mi\u0119dzy rodze\u0144stwem zaczyna si\u0119 walka o to wielkie, najwa\u017cniejsze wr\u0119cz stanowisko. Walka po trupach? Zaprzepaszczenie rodzinnych wi\u0119zi na rzecz pieni\u0119dzy?\u201d "}))," "),l.a.createElement(T,{className:"item-text"}," ",l.a.createElement(f.a,{className:"col-std col-text"},l.a.createElement(j,{title:"Dlaczego Polacy nie czytaj\u0105?",text:"Chocia\u017c na Facebooku g\u0119sto od stron o wznios\u0142ych tytu\u0142ach nobilituj\u0105cych czytanie (nie czytasz, nie id\u0119 z Tob\u0105 do \u0142\xf3\u017cka) m\xf3wi\u0105cych, \u017ce je\u015bli czytasz, to jeste\u015b wy\u017csz\u0105 klas\u0105, ale je\u015bli nie, o lepiej \u201enie m\xf3w do mnie teraz\u201d. [\u2026] Czytanie ma by\u0107 przyjemno\u015bci\u0105, tak\u0105 sam\u0105 jak ogl\u0105danie ulubionego serialu, \u015bledzenie los\xf3w bohater\xf3w czy granie w simsy. Gdy czuj\u0119 presj\u0119, ca\u0142a rado\u015b\u0107 znika, ust\u0119puj\u0105c miejsce p\u0119kni\u0119temu i zniech\u0119conemu balonowi smutku."}))," "),l.a.createElement(T,{className:"item-text"}," ",l.a.createElement(f.a,{className:"col-std col-text"},l.a.createElement(j,{title:"Cz\u0142owiek cz\u0142owiekowi spoilerem",text:"\u201e[\u2026] kiedy serwisy streamingowe decyduj\u0105 si\u0119 na publikowanie ca\u0142ych sezon\xf3w swoich seriali, w spo\u0142ecze\u0144stwie odzywaj\u0105 si\u0119 najgro\u017aniejsze instynkty. Cz\u0142owiek cz\u0142owiekowi ju\u017c nie wilkiem, a spoilerem. [\u2026] internet oraz dzielenie si\u0119 tre\u015bciami z lud\u017ami cz\u0119sto mieszkaj\u0105cymi po drugiej stronie kuli ziemskiej jest genialne, ale jednocze\u015bnie mo\u017ce prowadzi\u0107 do poczucia wykluczenia. Bo je\u015bli nie nad\u0105\u017casz, to jeste\u015b gorszy, [\u2026] co\u015b schrzani\u0142e\u015b."}))," "),l.a.createElement(T,{className:"item-text"}," ",l.a.createElement(f.a,{className:"col-std col-text"},l.a.createElement(j,{title:"Recenzja 'Shitshow'",text:"LeDuff oraz jego ekipa telewizyjna ruszyli w podr\xf3\u017c po Stanach Zjednoczonych. Podr\xf3\u017c, kt\xf3ra najpierw przerodzi\u0142a si\u0119 w program, p\xf3\u017aniej w niniejsz\u0105 ksi\u0105\u017ck\u0119. [...] Pokazanie dw\xf3ch skrajnych \u015bwiat\xf3w boli, ale przez to dociera do g\u0142owy i si\u0119 w niej zadomawia. Nie ma r\xf3wno\u015bci, nie ma sprawiedliwo\u015bci "}))," "),l.a.createElement(T,{className:"item-text"}," ",l.a.createElement(f.a,{className:"col-std col-text"},l.a.createElement(j,{title:"Recenzja 'Szczygie\u0142'",text:"Autorka dzia\u0142a na czytelnika s\u0142owem. Kilkoma sklekoconymi w jedno zdanie s\u0142owami, kt\xf3re za pierwszym czytaniem do nas nie docieraj\u0105. Mo\u017ce wydaje si\u0119 nam, \u017ce nie maj\u0105 wi\u0119kszego sensu, s\u0105 tylko bredniami, kt\xf3re nie maj\u0105 konkretnego sensu. Ksi\u0105\u017cka, mimo tego \u017ce nic si\u0119 w niej nie dzieje, nie ma akcji lec\u0105cej na \u0142eb i szyj\u0119, wci\u0105ga od pierwszego zdania."}))," "),l.a.createElement(T,{className:"item-text"}," ",l.a.createElement(f.a,{className:"col-std col-text"},l.a.createElement(j,{title:"Recenzja 'The Morning Show'",text:"Anonimowy donos okazuje si\u0119 zaledwie wierzcho\u0142kiem g\xf3ry problem\xf3w, kt\xf3re raz po raz b\u0119d\u0105 spada\u0107 na bohater\xf3w, sprawi \u017ce akcja nabiera tempa a bohaterowie przez wi\u0119kszo\u015b\u0107 czasu ekranowego chc\u0105 wydrapa\u0107 sobie oczy. Kiedy wpadaj\u0105 na dobry pomys\u0142, niekoniecznie z wielkodusznych intencji. Akcja, im dalej w las, nabiera tempa, do tego stopnia, \u017ce nuda z wlek\u0105cego si\u0119 pierwszego odcinka odchodzi w totaln\u0105 i zupe\u0142n\u0105 niepami\u0119\u0107."}))," "))),l.a.createElement(W.a,(a={easing:"cubic-bezier(0.7,.15,.55,1.0)",transitionMs:700,enableSwipe:!1,enableMouseSwipe:!1,itemsToShow:1,itemsToScroll:1},Object(E.a)(a,"enableSwipe",!0),Object(E.a)(a,"verticalMode",!0),Object(E.a)(a,"showArrows",!1),Object(E.a)(a,"pagination",!1),Object(E.a)(a,"ref",(function(e){return n.carouselStats=e})),a),l.a.createElement(T,{className:"item-stats"}," ",l.a.createElement(h.a,{className:"row-stats"},l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"5,823",description:"znak\xf3w"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"200",description:"wy\u015bwietle\u0144"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})))),l.a.createElement(T,{className:"item-stats"}," ",l.a.createElement(h.a,{className:"row-stats"},l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"3,155",description:"znak\xf3w"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"600",description:"wy\u015bwietle\u0144"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})))),l.a.createElement(T,{className:"item-stats"}," ",l.a.createElement(h.a,{className:"row-stats"},l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"6,139",description:"znak\xf3w"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"500",description:"wy\u015bwietle\u0144"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})))),l.a.createElement(T,{className:"item-stats"}," ",l.a.createElement(h.a,{className:"row-stats"},l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"2,899",description:"znak\xf3w"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"73",description:"wy\u015bwietle\u0144"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})))),l.a.createElement(T,{className:"item-stats"}," ",l.a.createElement(h.a,{className:"row-stats"},l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"4,136",description:"znak\xf3w"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"150",description:"wy\u015bwietle\u0144"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})))),l.a.createElement(T,{className:"item-stats"}," ",l.a.createElement(h.a,{className:"row-stats"},l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"6,080",description:"znak\xf3w"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"150",description:"wy\u015bwietle\u0144"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"",description:""})))))))),l.a.createElement(f.a,{className:"col-std col-right",md:5},l.a.createElement("div",{className:"div-right"},l.a.createElement(W.a,(t={easing:"cubic-bezier(0.7,.15,.55,1.0)",transitionMs:700,enableSwipe:!1,enableMouseSwipe:!1,itemsToShow:1,itemsToScroll:1},Object(E.a)(t,"enableSwipe",!0),Object(E.a)(t,"verticalMode",!0),Object(E.a)(t,"showArrows",!1),Object(E.a)(t,"pagination",!1),Object(E.a)(t,"ref",(function(e){return n.carouselPic=e})),t),l.a.createElement(T,{className:"item-picture"},l.a.createElement("img",{src:I.a,alt:"pc"})),l.a.createElement(T,{className:"item-picture"},l.a.createElement("img",{src:B.a,alt:"pc"})),l.a.createElement(T,{className:"item-picture"},l.a.createElement("img",{src:D.a,alt:"pc"})),l.a.createElement(T,{className:"item-picture"},l.a.createElement("img",{src:Z.a,alt:"pc"})),l.a.createElement(T,{className:"item-picture"},l.a.createElement("img",{src:K.a,alt:"pc"})),l.a.createElement(T,{className:"item-picture"},l.a.createElement("img",{src:_.a,alt:"pc"}))))),l.a.createElement(f.a,{className:"col-std col-nav",md:1},l.a.createElement(N,null),l.a.createElement(U,null))),l.a.createElement(h.a,{className:"row-bottom"},l.a.createElement(f.a,{className:"col-std col-btn",md:{span:4,offset:4}},l.a.createElement(k,{ref:function(e){return n.seeMore=e},btntext:"Zobacz wi\u0119cej",href:"https://serialomaniak.pl/recenzja/succession-sukcesja-serial-hbo-recenzja"})),l.a.createElement(f.a,{className:"col-std col-footer",md:{span:3,offset:9}},l.a.createElement("p",null,"Projekt i realizacja: ",l.a.createElement("a",{href:"https://dosoft.pl"},"dosoft.pl"),"  Icon made by Freepik from ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik"},"flaticon"))))))}}]),t}(n.Component),H=(t(154),t(109)),Q=t.n(H),X=function(){return l.a.createElement("div",{className:"cvpicture-container"},l.a.createElement("img",{src:Q.a,alt:"aleksandra-wolna"}))},$=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).handleScroll=function(e){e.deltaY<0?window.location.href="/":e.deltaY>0&&(window.location.href="/cv")},e.enableScroll=function(){window.addEventListener("wheel",e.handleScroll)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.enableScroll,800)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("wheel",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("div",{className:"div-main"},l.a.createElement(w.a,{className:"container-std"},l.a.createElement(h.a,{className:"row-main"},l.a.createElement(f.a,{className:"col-std col-toogle",md:1}),l.a.createElement(f.a,{className:"col-std col-left",md:5},l.a.createElement("div",{className:"div-left"},l.a.createElement(w.a,{className:"container-left"},l.a.createElement(h.a,{className:"row-text"},l.a.createElement(f.a,{className:"col-std col-text",md:12},l.a.createElement(j,{title:"Cze\u015b\u0107, jestem Ola",text:"Mam 26 lat a \u015brodowisko, kt\xf3re mnie otacza, stanowi\u0105 puste kubki po herbacie oraz sterty (nie)przeczytanych ksi\u0105\u017cek, od ci\u0119\u017caru kt\xf3rych uginaj\u0105 si\u0119 ju\u017c p\xf3\u0142ki. Pisz\u0119 o ksi\u0105\u017ckach i serialach od 6 lat, od momentu w kt\xf3rym stwierdzi\u0142am, \u017ce to ju\u017c czas. Czytam krymina\u0142y (szwedzkie), reporta\u017ce (wydawnictwa Czarnego) oraz obyczaj\xf3wki (ciekawe). "}))),l.a.createElement(h.a,{className:"row-stats"},l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"6 lat",description:"do\u015bwiadczenia"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"10",description:"klient\xf3w"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"450",description:"artyku\u0142\xf3w"})),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(y,{score:"400,000",description:"znak\xf3w"})))))),l.a.createElement(f.a,{className:"col-std col-right",md:5},l.a.createElement("div",{className:"div-right"},l.a.createElement(X,null))),l.a.createElement(f.a,{className:"col-std col-nav",md:1},l.a.createElement(N,null),l.a.createElement(U,null))),l.a.createElement(h.a,{className:"row-bottom"},l.a.createElement(f.a,{className:"col-std col-btn",md:{span:4,offset:4}},l.a.createElement(k,{href:"./kontakt",btntext:"Napisz do mnie"})),l.a.createElement(f.a,{className:"col-std col-footer",md:{span:3,offset:9}},l.a.createElement("p",null,"Projekt i realizacja: ",l.a.createElement("a",{href:"https://dosoft.pl"},"dosoft.pl"),"  Icon made by Freepik from ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik"},"flaticon"))))))}}]),t}(n.Component),ee=(t(155),t(110)),ae=t.n(ee),te=function(){return l.a.createElement("div",{className:"timeline-container"},l.a.createElement("img",{src:ae.a,alt:"timeline"}))},ne=(t(59),function(){return l.a.createElement("div",{className:"name-container"},l.a.createElement("h2",null,"J\u0119zyk angielski"),l.a.createElement("div",{className:"progress-container"},l.a.createElement("li",null,l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null,l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress-null"}))))}),le=function(){return l.a.createElement("div",{className:"name-container"},l.a.createElement("h2",null,"Pakiet Office"),l.a.createElement("div",{className:"progress-container"},l.a.createElement("li",null,l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null,l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress-null"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress-null"}))))},ce=function(){return l.a.createElement("div",{className:"name-container"},l.a.createElement("h2",null,"Pakiet Adobe"),l.a.createElement("div",{className:"progress-container"},l.a.createElement("li",null,l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null,l.a.createElement("div",{className:"progress-null"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress-null"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress-null"}))))},se=function(){return l.a.createElement("div",{className:"name-container"},l.a.createElement("h2",null,"J\u0119zyk Norweski"),l.a.createElement("div",{className:"progress-container"},l.a.createElement("li",null,l.a.createElement("div",{className:"progress"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress-null"})),l.a.createElement("li",null,l.a.createElement("div",{className:"progress-null"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress-null"})),l.a.createElement("li",null," ",l.a.createElement("div",{className:"progress-null"}))))},re=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).handleScroll=function(e){e.deltaY<0?window.location.href="/o-mnie":e.deltaY>0&&(window.location.href="/kontakt")},e.enableScroll=function(){window.addEventListener("wheel",e.handleScroll)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.enableScroll,800)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("wheel",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("div",{className:"div-main"},l.a.createElement(w.a,{className:"container-std"},l.a.createElement(h.a,{className:"row-main"},l.a.createElement(f.a,{className:"col-std col-toogle",md:1}),l.a.createElement(f.a,{className:"col-std col-center",md:10},l.a.createElement("div",{className:"div-center"},l.a.createElement(h.a,{className:"row-stats"},l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(ne,null)),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(le,null)),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(ce,null)),l.a.createElement(f.a,{className:"col-std col-stats"},l.a.createElement(se,null))),l.a.createElement(h.a,{className:"row-cv"},l.a.createElement(te,null)))),l.a.createElement(f.a,{className:"col-std col-nav",md:1},l.a.createElement(N,null),l.a.createElement(U,null))),l.a.createElement(h.a,{className:"row-bottom"},l.a.createElement(f.a,{className:"col-std col-btn",md:{span:4,offset:4}},l.a.createElement(k,{btntext:"Pobierz CV"})),l.a.createElement(f.a,{className:"col-std col-footer",md:{span:3,offset:9}},l.a.createElement("p",null,"Projekt i realizacja: ",l.a.createElement("a",{href:"https://dosoft.pl"},"dosoft.pl"),"  Icon made by Freepik from ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik"},"flaticon"))))))}}]),t}(n.Component),oe=(t(156),t(115)),ie=t(57),me=t(114),de=t.n(me);function ue(){var e=Object(oe.a)({initialValues:{name:"",surname:"",email:"",message:""},validationSchema:ie.a({name:ie.b().min(3,"Za kr\xf3tkie imi\u0119").required("Wymagane pole"),surname:ie.b().min(3,"Za kr\xf3tkie nazwisko").required("Wymagane pole"),email:ie.b().email().required("Wymagane pole")}),onSubmit:function(e){de()({method:"POST",url:"http://localhost:3002/send",data:{firstname:e.name,surname:e.surname,email:e.email,message:e.message}}).then((function(e){"success"===e.data.msg?alert("Message Sent."):(alert("Failed."),console.log(e.data.msg))}))}});return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("input",{type:"text",name:"name",placeholder:"Imi\u0119",className:e.errors.name?"error":null,onChange:e.handleChange,value:e.values.name}),e.errors.name?l.a.createElement("span",{className:"errorText"},e.errors.name):null,l.a.createElement("input",{type:"text",name:"surname",placeholder:"Nazwisko",className:e.errors.surname?"error":null,onChange:e.handleChange,value:e.values.surname}),e.errors.surname?l.a.createElement("span",{className:"errorText"},e.errors.surname):null,l.a.createElement("input",{type:"text",name:"email",placeholder:"E-mail",className:e.errors.email?"error":null,onChange:e.handleChange,value:e.values.email}),e.errors.email?l.a.createElement("span",{className:"errorText"},e.errors.email):null,l.a.createElement("textarea",{name:"message",placeholder:"Wiadomo\u015b\u0107",className:e.errors.message?"error":null,onChange:e.handleChange,value:e.values.message}),e.errors.message?l.a.createElement("span",{className:"errorText"},e.errors.message):null,l.a.createElement("button",{type:"submit"},"Wy\u015blij wiadomo\u015b\u0107"))}var pe=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).handleScroll=function(e){e.deltaY<0&&(window.location.href="/cv")},e.enableScroll=function(){window.addEventListener("wheel",e.handleScroll)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.enableScroll,800)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("wheel",this.handleScroll)}},{key:"render",value:function(){return l.a.createElement("div",{className:"div-main"},l.a.createElement(w.a,{className:"container-std"},l.a.createElement(h.a,{className:"row-main"},l.a.createElement(f.a,{className:"col-std col-toogle",md:1}),l.a.createElement(f.a,{className:"col-std col-left",md:5},l.a.createElement("div",{className:"div-left"},l.a.createElement(w.a,{className:"container-left"},l.a.createElement(h.a,{className:"row-text"},l.a.createElement(f.a,{className:"col-std col-text",md:12},l.a.createElement(j,{title:"Napisz do mnie",text:"Pisanie jest moj\u0105 pasj\u0105, kt\xf3r\u0105 ci\u0105gle rozwijam. W ci\u0105gu 6 lat zaufa\u0142o mi wiele wydawnictw, decyduj\u0105c si\u0119 podj\u0105\u0107 ze mn\u0105 wsp\xf3\u0142prac\u0119. Przez dwa lata pisa\u0142am dla Serialomaniaka, od roku moje teksty pojawiaj\u0105 si\u0119 r\xf3wnie\u017c na http://igimag.pl  W pisanych przez siebie tekstach jestem rzetelna, dotrzymuj\u0119 termin\xf3w (je\u015bli nie \u2013 lojalnie uprzedzam) i ch\u0119tnie pr\xf3buj\u0119 nowych rzeczy.  W przysz\u0142o\u015bci chcia\u0142abym wyda\u0107 swoj\u0105 ksi\u0105\u017ck\u0119 "})))))),l.a.createElement(f.a,{className:"col-std col-right",md:5},l.a.createElement("div",{className:"div-right"},l.a.createElement(ue,null))),l.a.createElement(f.a,{className:"col-std col-nav",md:1},l.a.createElement(N,null),l.a.createElement(U,null))),l.a.createElement(h.a,{className:"row-bottom"},l.a.createElement(f.a,{className:"col-std col-btn",md:{span:4,offset:4}},l.a.createElement(k,{href:"./",btntext:"Portfolio"})),l.a.createElement(f.a,{className:"col-std col-footer",md:{span:3,offset:9}},l.a.createElement("p",null,"Projekt i realizacja: ",l.a.createElement("a",{href:"https://dosoft.pl"},"dosoft.pl"),"  Icon made by Freepik from ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik"},"flaticon"))))))}}]),t}(n.Component),Ee=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/react-portfolio"},l.a.createElement(u.a,null,l.a.createElement(p.a,{path:"/",exact:!0,component:G}),l.a.createElement(p.a,{path:"/o-mnie",exact:!0,component:$}),l.a.createElement(p.a,{path:"/cv",exact:!0,component:re}),l.a.createElement(p.a,{path:"/kontakt",exact:!0,component:pe})))}}]),t}(n.Component);s.a.render(l.a.createElement(Ee,null),document.getElementById("root"))},58:function(e,a,t){},59:function(e,a,t){},94:function(e,a,t){e.exports=t.p+"static/media/facebook.75eb8f03.svg"},95:function(e,a,t){e.exports=t.p+"static/media/twitter.bd08eed1.svg"},96:function(e,a,t){e.exports=t.p+"static/media/instagram.ffceac7b.svg"}},[[118,1,2]]]);
//# sourceMappingURL=main.ff9c43e7.chunk.js.map