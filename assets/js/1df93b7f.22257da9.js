"use strict";(self.webpackChunksaga_docs=self.webpackChunksaga_docs||[]).push([[237],{864:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(7294),r=a(2600),s=a(9960),i={features:"features_t9lD",gettingStarted:"gettingStarted_ekrB"},o=function(e,t,a){var n,r=2e-5*a;t.save(),t.globalCompositeOperation="lighter",t.clearRect(0,0,e.width,e.height),t.translate(e.width/2,e.height/2);for(var s=0;s<3;s++){var i=void 0;0===s&&(i="#F39200"),1===s&&(i="#DADAD9"),2===s&&(i="#434F55");for(var o=0;o<e.shapes.length;o++){t.save();var m=void 0;m=o%2==0?(r-.01*s-(e.shapes.length-e.shapes[o].i)/e.shapes.length)%1:(r+.01*s+(e.shapes.length-e.shapes[o].i)/e.shapes.length)%1;var c=0,l=0;(m=0===(n=Math.abs(m))?0:1===n?1:n<.5?Math.pow(2,20*n-10)/2:(2-Math.pow(2,-20*n+10))/2)<.25?(l=u.map(m,0,.25,0,e.size),c=u.map(m,0,.25,0,0)):m>=.25&&m<.5?(l=u.map(m,.25,.5,e.size,e.size),c=u.map(m,.25,.5,0,e.size)):m>=.5&&m<.75?(l=u.map(m,.5,.75,e.size,0),c=u.map(m,.5,.75,e.size,e.size)):(l=u.map(m,.75,1,0,0),c=u.map(m,.75,1,e.size,0)),t.fillStyle=i,t.beginPath(),t.arc(e.shapes[o].x+l,e.shapes[o].y+c,e.size/3+s,0,2*Math.PI,!1),t.fill(),t.restore()}}return t.restore(),r},u=function(){function e(){}return e.norm=function(e,t,a){return(e-t)/(a-t)},e.lerp=function(e,t,a){return(a-t)*e+t},e.map=function(e,t,a,n,r){return this.lerp(this.norm(e,t,a),n,r)},e.clamp=function(e,t,a){return Math.min(Math.max(e,t),a)},e.distance=function(e,t,a,n){var r=a-e,s=n-t;return Math.sqrt(r*r+s*s)},e.randomRange=function(e,t){return e+Math.random()*(t-e)},e.randomInt=function(e,t){return Math.floor(e+Math.random()*(t-e+1))},e.randomDist=function(e,t,a){for(var n=0,r=0;r<a;r++)n+=this.randomRange(e,t);return n/a},e.degreesToRads=function(e){return e/180*Math.PI},e.radsToDegrees=function(e){return 180*e/Math.PI},e.roundToPlaces=function(e,t){var a=Math.pow(10,t);return Math.round(e*a)/a},e.roundNearest=function(e,t){return Math.round(e/t)*t},e}();function m(e){e.className;var t=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e,a=t.current,n=a.getContext("2d"),r=function(e){for(var t={width:e.width,height:e.height,shapes:new Array,size:50,num:10,maxDist:0},a=t.num*t.size/2-t.size/2,n=0;n<t.num;n++)for(var r=0;r<t.num;r++){var s=t.size*n-a,i=t.size*r-a,o={y:s,x:i,d:Math.sqrt(i*i+s*s),a:Math.atan2(s,i),i:n*t.num+r};t.maxDist=Math.max(o.d,t.maxDist),t.shapes.push(o)}return t}(a);return function t(a){o(r,n,a),e=window.requestAnimationFrame(t)}(0),function(){window.cancelAnimationFrame(e)}}),[o]),n.createElement("canvas",{className:"animation",ref:t,width:"600",height:"600"})}function c(){return n.createElement("section",{className:i.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"landing-page"},n.createElement("div",{className:"information"},n.createElement("h1",{className:"hero__title"},"Saga"),n.createElement("h1",{className:"hero__title"},"dokumentasjon"),n.createElement("p",{className:"hero__subtitle margin-bottom--lg"},"Vi senker terskelen for \xe5 komme i gang med dataanalyse p\xe5 tvers av Vegvesenet."),n.createElement("div",{className:i.buttons},n.createElement(s.Z,{className:"button button--secondary button--lg",to:"/intro"},"Les dokumentasjonen"))),n.createElement(m,{className:"animation"}))))}function l(){return n.createElement(n.Fragment,null,n.createElement(r.Z,{title:"Dokumentasjon",description:""},n.createElement(c,null)))}}}]);