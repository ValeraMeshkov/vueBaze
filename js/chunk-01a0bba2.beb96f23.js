(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01a0bba2"],{5725:function(t,i,s){"use strict";s("a506")},a506:function(t,i,s){},bc72:function(t,i,s){"use strict";s.r(i);var e=s("7a23");const c={id:"canvas1"};function a(t,i,s,a,h,l){return Object(e["F"])(),Object(e["i"])("canvas",c)}var h=s("5502"),l={name:"AnimateFirst",components:{},data(){return{canvas:null,ctx:null,mouse:null,colorLines:{hue:186,saturation:56,luminosity:45,alpha:1},heightHeader:80}},mounted(){this.startCanvas()},unmounted(){this.closeCanvas()},computed:{...Object(h["c"])({WINDOW_WIDTH:t=>t.WINDOW_WIDTH,WINDOW_HEIGHT:t=>t.WINDOW_HEIGHT,MOUSE_COORDINATES:t=>t.MOUSE_COORDINATES,styleWebsiteColor:t=>t.styleWebsiteColor,circlesCount:t=>t.canvas1.circlesCount,circles:t=>t.canvas1.circles,lines:t=>t.canvas1.lines,localStorageApp:t=>t.localStorageApp})},methods:{...Object(h["b"])("canvas1",["addCircle","addLine","clearAllCircles","clearAllLines"]),closeCanvas(){this.canvas=null,this.ctx=null,this.clearAllCircles(),this.clearAllLines()},updateCanvas(){this.closeCanvas(),this.$router.go(0)},startCanvas(){this.loadCanvas(),this.createCircles();for(let t=0;t<this.circles.length-1;t++)for(let i=t+1;i<this.circles.length;i++)this.createLines(t,i);this.createMouse();for(let t=0;t<this.circles.length;t++)this.createLines(this.circles.length,t);this.init()},loadCanvas(){this.canvas=document.querySelector("#canvas1"),this.canvas.width=this.WINDOW_WIDTH,this.canvas.height=this.WINDOW_HEIGHT-this.heightHeader},createCircles(){for(let t=0;t<this.circlesCount;t++)this.addCircle({w:this.canvas.width,h:this.canvas.height})},createLines(t,i){this.addLine({i:t,j:i})},createMouse(){this.mouse={r:.5,x:this.MOUSE_COORDINATES.x,y:this.MOUSE_COORDINATES.y+100,color:"white"}},init(){this.ctx=this.canvas.getContext("2d"),this.drawAllComponents()},drawAllComponents(){null!==this.ctx?(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.circles.forEach(t=>{this.drawCircle(t)}),this.lines.forEach(t=>{this.drawLine(t)}),this.drawMouse(),window.requestAnimationFrame(this.drawAllComponents.bind(this))):window.cancelAnimationFrame(this.drawAllComponents.bind(this))},drawCircle(t){this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.localStorageApp.styleWebsiteColor?t.color:"#2c3e50",this.ctx.fill(),this.circleUpdate(t)},drawLine(t){let i;function s(t,i){return Math.sqrt((i.x-t.x)**2+(i.y-t.y)**2)}this.ctx.beginPath(),t.circleI===this.circles.length?(this.ctx.moveTo(this.MOUSE_COORDINATES.x,this.MOUSE_COORDINATES.y-this.heightHeader),this.ctx.lineTo(this.circles[t.circleJ].x,this.circles[t.circleJ].y),i=s(this.MOUSE_COORDINATES,this.circles[t.circleJ])):(this.ctx.moveTo(this.circles[t.circleI].x,this.circles[t.circleI].y),this.ctx.lineTo(this.circles[t.circleJ].x,this.circles[t.circleJ].y),i=s(this.circles[t.circleI],this.circles[t.circleJ])),this.ctx.strokeStyle=`hsla(${this.colorLines.hue}, 100%, 50%,${1-i/200})`,this.ctx.lineWidth=2,this.ctx.fill(),this.ctx.stroke()},drawMouse(){this.ctx.beginPath(),this.ctx.arc(this.mouse.x,this.mouse.y-this.heightHeader,this.mouse.r,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.ctx.fill()},circleUpdate(t){(t.x+t.radius>=this.canvas.width||t.x-t.radius<=0)&&(t.dx=-t.dx),(t.y+t.radius>=this.canvas.height||t.y-t.radius<=0)&&(t.dy=-t.dy),t.x+=t.dx,t.y+=t.dy}},watch:{WINDOW_WIDTH(t){this.canvas.width=t,this.updateCanvas()},WINDOW_HEIGHT(t){this.canvas.height=t},MOUSE_COORDINATES(t){this.mouse.x=t.x,this.mouse.y=t.y}}},r=(s("5725"),s("6b0d")),n=s.n(r);const o=n()(l,[["render",a]]);i["default"]=o}}]);
//# sourceMappingURL=chunk-01a0bba2.beb96f23.js.map