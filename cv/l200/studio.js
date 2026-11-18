var Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lh=0,cc=1,Dh=2;var ns=1,Nh=2,Gs=3,Oi=0,dn=1,cn=2,mi=0,Vs=1,is=2,hc=3,uc=4,Uh=5;var ss=100,Fh=101,Oh=102,Bh=103,kh=104,zh=200,Gh=201,Vh=202,Hh=203,dc=204,fc=205,Wh=206,Xh=207,qh=208,Yh=209,Zh=210,Kh=211,$h=212,Jh=213,jh=214,ka=0,za=1,Ga=2,Es=3,Va=4,Ha=5,Wa=6,Xa=7,pc=0,Qh=1,tu=2,$n=0,Wr=1,Xr=2,qr=3,rs=4,Yr=5,Zr=6,Kr=7;var mc=300,as=301,Hs=302,xo=303,vo=304,Un=1e3,Zn=1001,qa=1002,on=1003,eu=1004;var $r=1005;var xn=1006,yo=1007;var gi=1008;var Mn=1009,gc=1010,_c=1011,Ws=1012,Mo=1013,Wn=1014,Bn=1015,tn=1016,So=1017,bo=1018,os=1020,xc=35902,vc=35899,yc=1021,Mc=1022,Xn=1023,li=1026,_i=1027,wo=1028,To=1029,Bi=1030,Eo=1031;var Ao=1033,Jr=33776,jr=33777,Qr=33778,ta=33779,Co=35840,Ro=35841,Po=35842,Io=35843,Lo=36196,Do=37492,No=37496,Uo=37488,Fo=37489,ea=37490,Oo=37491,Bo=37808,ko=37809,zo=37810,Go=37811,Vo=37812,Ho=37813,Wo=37814,Xo=37815,qo=37816,Yo=37817,Zo=37818,Ko=37819,$o=37820,Jo=37821,jo=36492,Qo=36494,tl=36495,el=36283,nl=36284,na=36285,il=36286;var ur=2300,Ya=2301,Oa=2302,Zl=2303,Kl=2400,$l=2401,Jl=2402;var nu=3200;var sl=0,iu=1,qn="",hn="srgb",dr="srgb-linear",fr="linear",Ue="srgb";var Ba=7680;var su=519,ru=512,au=513,ou=514,Sc=515,lu=516,cu=517,bc=518,wc=519,hu=35044;var Tc="300 es",Nn=2e3,As=2001;function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){let i=pr("canvas");return i.style.display="block",i}var $c={},Cs=null;function Ec(...i){let t="THREE."+i.shift();Cs?Cs("log",t,...i):console.log(t,...i)}function du(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function he(...i){i=du(i);let t="THREE."+i.shift();if(Cs)Cs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function pe(...i){i=du(i);let t="THREE."+i.shift();if(Cs)Cs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Zi(...i){let t=i.join(" ");t in $c||($c[t]=!0,he(...i))}function fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pu={[ka]:ka,[Ga]:Wa,[Va]:Va,[Es]:Ha,[za]:za,[Wa]:Ga,[Xa]:Xa,[Ha]:Es},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=1234567,or=Math.PI/180,Ki=180/Math.PI;function ls(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ye(i,t,e){return Math.max(t,Math.min(e,i))}function Ac(i,t){return(i%t+t)%t}function wd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Td(i,t,e){return i!==t?(e-i)/(t-i):0}function lr(i,t,e){return(1-e)*i+e*t}function Ed(i,t,e,n){return lr(i,t,1-Math.exp(-e*n))}function Ad(i,t=1){return t-Math.abs(Ac(i,t*2)-t)}function Cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Id(i,t){return i+Math.random()*(t-i)}function Ld(i){return i*(.5-Math.random())}function Dd(i){i!==void 0&&(Jc=i);let t=Jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(i){return i*or}function Ud(i){return i*Ki}function Fd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:he("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mu(i,t){if(t.constructor===Float32Array)return i;let e=Rc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function gu(i,t){if(t.constructor===Float32Array)return i;let e=Rc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var xi={DEG2RAD:or,RAD2DEG:Ki,generateUUID:ls,clamp:ye,euclideanModulo:Ac,mapLinear:wd,inverseLerp:Td,lerp:lr,damp:Ed,pingpong:Ad,smoothstep:Cd,smootherstep:Rd,randInt:Pd,randFloat:Id,randFloatSpread:Ld,seededRandom:Dd,degToRad:Nd,radToDeg:Ud,isPowerOfTwo:Fd,ceilPowerOfTwo:Od,floorPowerOfTwo:Cc,setQuaternionFromProperEuler:Bd,normalize:gu,denormalize:mu},Mt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||l!==d||c!==p||u!==g){let h=l*d+c*p+u*g+f*M;h<0&&(d=-d,p=-p,g=-g,M=-M,h=-h);let m=1-o;if(h<.9995){let v=Math.acos(h),w=Math.sin(v);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w,l=l*m+d*o,c=c*m+p*o,u=u*m+g*o,f=f*m+M*o}else{l=l*m+d*o,c=c*m+p*o,u=u*m+g*o,f=f*m+M*o;let v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*f+l*p-c*d,t[e+1]=l*g+u*d+c*f-o*p,t[e+2]=c*g+u*p+o*d-l*f,t[e+3]=u*g-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tl.copy(this).projectOnVector(t),this.sub(Tl)}reflect(t){return this.sub(Tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tl=new U,jc=new ln,ve=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],g=n[8],M=s[0],h=s[3],m=s[6],v=s[1],w=s[4],S=s[7],C=s[2],E=s[5],x=s[8];return r[0]=a*M+o*v+l*C,r[3]=a*h+o*w+l*E,r[6]=a*m+o*S+l*x,r[1]=c*M+u*v+f*C,r[4]=c*h+u*w+f*E,r[7]=c*m+u*S+f*x,r[2]=d*M+p*v+g*C,r[5]=d*h+p*w+g*E,r[8]=d*m+p*S+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=e*f+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=f*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(El.makeScale(t,e)),this}rotate(t){return Zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(El.makeRotation(-t)),this}translate(t,e){return Zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(El.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},El=new ve,Qc=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kd(){let i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ue&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ue&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:Ue,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}var Te=kd();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,Za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{us===void 0&&(us=pr("canvas")),us.width=t.width,us.height=t.height;let s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zd=0,Rs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Al(s[a].image)):r.push(Al(s[a]))}else r=Al(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}var Gd=0,Cl=new U,vn=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=xn,a=gi,o=Xn,l=Mn,c=i.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ls(),this.name="",this.source=new Rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){he(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Un:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Un:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=mc;vn.DEFAULT_ANISOTROPY=1;var ze=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],M=l[2],h=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(g+h)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,S=(p+1)/2,C=(m+1)/2,E=(u+d)/4,x=(f+M)/4,y=(g+h)/4;return w>S&&w>C?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=x/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=y/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((h-g)*(h-g)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(h-g)/v,this.y=(f-M)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new vn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},mr=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Pe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,f,d,p,g,M,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,d,p,g,M,h)}set(t,e,n,s,r,a,o,l,c,u,f,d,p,g,M,h){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=p,m[7]=g,m[11]=M,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*u,p=a*f,g=o*u,M=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,p=l*f,g=c*u,M=c*f;e[0]=d+M*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,p=l*f,g=c*u,M=c*f;e[0]=d-M*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,p=a*f,g=o*u,M=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+M,e[1]=l*f,e[5]=M*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=M-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=d-M*f}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+M,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Hd)}lookAt(t,e,n){let s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),yi.crossVectors(n,wn),yi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),yi.crossVectors(n,wn)),yi.normalize(),da.crossVectors(wn,yi),s[0]=yi.x,s[4]=da.x,s[8]=wn.x,s[1]=yi.y,s[5]=da.y,s[9]=wn.y,s[2]=yi.z,s[6]=da.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],g=n[2],M=n[6],h=n[10],m=n[14],v=n[3],w=n[7],S=n[11],C=n[15],E=s[0],x=s[4],y=s[8],O=s[12],A=s[1],I=s[5],F=s[9],j=s[13],N=s[2],B=s[6],Y=s[10],q=s[14],ot=s[3],it=s[7],pt=s[11],ut=s[15];return r[0]=a*E+o*A+l*N+c*ot,r[4]=a*x+o*I+l*B+c*it,r[8]=a*y+o*F+l*Y+c*pt,r[12]=a*O+o*j+l*q+c*ut,r[1]=u*E+f*A+d*N+p*ot,r[5]=u*x+f*I+d*B+p*it,r[9]=u*y+f*F+d*Y+p*pt,r[13]=u*O+f*j+d*q+p*ut,r[2]=g*E+M*A+h*N+m*ot,r[6]=g*x+M*I+h*B+m*it,r[10]=g*y+M*F+h*Y+m*pt,r[14]=g*O+M*j+h*q+m*ut,r[3]=v*E+w*A+S*N+C*ot,r[7]=v*x+w*I+S*B+C*it,r[11]=v*y+w*F+S*Y+C*pt,r[15]=v*O+w*j+S*q+C*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],p=t[14],g=t[3],M=t[7],h=t[11],m=t[15],v=l*p-c*d,w=o*p-c*f,S=o*d-l*f,C=a*p-c*u,E=a*d-l*u,x=a*f-o*u;return e*(M*v-h*w+m*S)-n*(g*v-h*C+m*E)+s*(g*w-M*C+m*x)-r*(g*S-M*E+h*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],p=t[11],g=t[12],M=t[13],h=t[14],m=t[15],v=e*o-n*a,w=e*l-s*a,S=e*c-r*a,C=n*l-s*o,E=n*c-r*o,x=s*c-r*l,y=u*M-f*g,O=u*h-d*g,A=u*m-p*g,I=f*h-d*M,F=f*m-p*M,j=d*m-p*h,N=v*j-w*F+S*I+C*A-E*O+x*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/N;return t[0]=(o*j-l*F+c*I)*B,t[1]=(s*F-n*j-r*I)*B,t[2]=(M*x-h*E+m*C)*B,t[3]=(d*E-f*x-p*C)*B,t[4]=(l*A-a*j-c*O)*B,t[5]=(e*j-s*A+r*O)*B,t[6]=(h*S-g*x-m*w)*B,t[7]=(u*x-d*S+p*w)*B,t[8]=(a*F-o*A+c*y)*B,t[9]=(n*A-e*F-r*y)*B,t[10]=(g*E-M*S+m*v)*B,t[11]=(f*S-u*E-p*v)*B,t[12]=(o*O-a*I-l*y)*B,t[13]=(e*I-n*O+s*y)*B,t[14]=(M*w-g*C-h*v)*B,t[15]=(u*C-f*w+d*v)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,g=r*f,M=a*u,h=a*f,m=o*f,v=l*c,w=l*u,S=l*f,C=n.x,E=n.y,x=n.z;return s[0]=(1-(M+m))*C,s[1]=(p+S)*C,s[2]=(g-w)*C,s[3]=0,s[4]=(p-S)*E,s[5]=(1-(d+m))*E,s[6]=(h+v)*E,s[7]=0,s[8]=(g+w)*x,s[9]=(h-v)*x,s[10]=(1-(d+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ds.set(s[0],s[1],s[2]).length(),o=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);let c=1/a,u=1/o,f=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,e.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Nn,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===As)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Nn,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Nn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===As)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ds=new U,zn=new Pe,Vd=new U(0,0,0),Hd=new U(1,1,1),yi=new U,da=new U,wn=new U,eh=new Pe,nh=new ln,ci=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wd=0,ih=new U,fs=new ln,ni=new Pe,fa=new U,tr=new U,Xd=new U,qd=new ln,sh=new U(1,0,0),rh=new U(0,1,0),ah=new U(0,0,1),oh={type:"added"},Yd={type:"removed"},ps={type:"childadded",child:null},Rl={type:"childremoved",child:null},je=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new ci,n=new ln,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ve}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(rh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(rh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fa.copy(t):fa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(tr,fa,this.up):ni.lookAt(fa,tr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ni),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),ps.child=t,this.dispatchEvent(ps),ps.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};je.DEFAULT_UP=new U(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=class extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zd={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let h=e.getJointPose(M,n),m=this._getHandJoint(c,M);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Pl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=Ac(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Pl(a,r,t+1/3),this.g=Pl(a,r,t),this.b=Pl(a,r,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:he("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Te.workingToColorSpace(pn.copy(this),t),Math.round(ye(pn.r*255,0,255))*65536+Math.round(ye(pn.g*255,0,255))*256+Math.round(ye(pn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=hn){Te.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(pa);let n=lr(Mi.h,pa.h,e),s=lr(Mi.s,pa.s,e),r=lr(Mi.l,pa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new ne;ne.NAMES=_u;var gr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ei=class extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new U,ii=new U,Il=new U,si=new U,ms=new U,gs=new U,lh=new U,Ll=new U,Dl=new U,Nl=new U,Ul=new ze,Fl=new ze,Ol=new ze,Ti=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gn.subVectors(s,e),ii.subVectors(n,e),Il.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(ii),l=Gn.dot(Il),c=ii.dot(ii),u=ii.dot(Il),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ul.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Ul.fromBufferAttribute(t,e),Fl.fromBufferAttribute(t,n),Ol.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ul,r.x),a.addScaledVector(Fl,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(t,e,n,s){return Gn.subVectors(n,e),ii.subVectors(t,e),Gn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Gn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ms.subVectors(s,n),gs.subVectors(r,n),Ll.subVectors(t,n);let l=ms.dot(Ll),c=gs.dot(Ll);if(l<=0&&c<=0)return e.copy(n);Dl.subVectors(t,s);let u=ms.dot(Dl),f=gs.dot(Dl);if(u>=0&&f<=u)return e.copy(s);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(ms,a);Nl.subVectors(t,r);let p=ms.dot(Nl),g=gs.dot(Nl);if(g>=0&&p<=g)return e.copy(r);let M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(gs,o);let h=u*g-p*f;if(h<=0&&f-u>=0&&p-g>=0)return lh.subVectors(r,s),o=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(lh,o);let m=1/(h+M+d);return a=M*m,o=d*m,e.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),ga.subVectors(this.max,er),_s.subVectors(t.a,er),xs.subVectors(t.b,er),vs.subVectors(t.c,er),Si.subVectors(xs,_s),bi.subVectors(vs,xs),Hi.subVectors(_s,vs);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Hi.z,Hi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Hi.z,0,-Hi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Hi.y,Hi.x,0];return!Bl(e,_s,xs,vs,ga)||(e=[1,0,0,0,1,0,0,0,1],!Bl(e,_s,xs,vs,ga))?!1:(_a.crossVectors(Si,bi),e=[_a.x,_a.y,_a.z],Bl(e,_s,xs,vs,ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,ma=new Kn,_s=new U,xs=new U,vs=new U,Si=new U,bi=new U,Hi=new U,er=new U,ga=new U,_a=new U,Wi=new U;function Bl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var $e=new U,xa=new Mt,Kd=0,En=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=t!==void 0?Rc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):mu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):gu(t,this.array)}};var _r=class extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xr=class extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}},$d=new Kn,nr=new U,kl=new U,hi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(kl)),this.expandByPoint(nr.copy(t.center).sub(kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jd=0,Dn=new Pe,zl=new je,ys=new U,Tn=new Kn,ir=new Kn,rn=new U,Xe=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?xr:_r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return zl.lookAt(t),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Tn.min,ir.min),Tn.expandByPoint(rn),rn.addVectors(Tn.max,ir.max),Tn.expandByPoint(rn)):(Tn.expandByPoint(ir.min),Tn.expandByPoint(ir.max))}Tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rn.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),rn.add(ys)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new U,l[O]=new U;let u=new U,f=new U,d=new U,p=new Mt,g=new Mt,M=new Mt,h=new U,m=new U;function v(O,A,I){c[O]=c[A]=c[I]=1,u.fromBufferAttribute(n,O),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,I),p.fromBufferAttribute(r,O),g.fromBufferAttribute(r,A),M.fromBufferAttribute(r,I),f.sub(u),d.sub(u),g.sub(p),M.sub(p);let F=1/(g.x*M.y-M.x*g.y);isFinite(F)&&(h.copy(f).multiplyScalar(M.y).addScaledVector(d,-g.y).multiplyScalar(F),m.copy(d).multiplyScalar(g.x).addScaledVector(f,-M.x).multiplyScalar(F),o[O].add(h),o[A].add(h),o[I].add(h),l[O].add(m),l[A].add(m),l[I].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,A=w.length;O<A;++O){let I=w[O],F=I.start,j=I.count;for(let N=F,B=F+j;N<B;N+=3)v(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let S=new U,C=new U,E=new U,x=new U;function y(O){E.fromBufferAttribute(s,O),x.copy(E);let A=o[O];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),C.crossVectors(x,A);let F=C.dot(l[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,F)}for(let O=0,A=n.count;O<A;++O)c[O]&&y(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),M=t.getX(d+1),h=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,h),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,h),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let M=0,h=l.length;M<h;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new En(d,u,f)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gl=new U,jd=new U,Qd=new ve,_n=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Gl.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qd.getNormalMatrix(t),s=this.coplanarPoint(Gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},tf=0,ui=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Vs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){he(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){he(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ai=new U,Vl=new U,va=new U,ya=new U,Ai=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vl.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),ya.copy(this.origin).sub(Vl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(va),o=ya.dot(this.direction),l=-ya.dot(va),c=ya.lengthSq(),u=Math.abs(1-a*a),f,d,p,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){let M=1/u;f*=M,d*=M,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Vl).addScaledVector(va,d),p}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,d=t.y-a.y,p=t.z-a.z,g=e.x-a.x,M=e.y-a.y,h=e.z-a.z,m=n.x-a.x,v=n.y-a.y,w=n.z-a.z,S=Math.abs(l),C=Math.abs(c),E=Math.abs(u),x,y,O,A,I,F,j,N,B,Y,q,ot;if(S>=C&&S>=E?(O=l,F=f,B=g,ot=m,l>=0?(x=c,y=u,A=d,I=p,j=M,N=h,Y=v,q=w):(x=u,y=c,A=p,I=d,j=h,N=M,Y=w,q=v)):C>=E?(O=c,F=d,B=M,ot=v,c>=0?(x=u,y=l,A=p,I=f,j=h,N=g,Y=w,q=m):(x=l,y=u,A=f,I=p,j=g,N=h,Y=m,q=w)):(O=u,F=p,B=h,ot=w,u>=0?(x=l,y=c,A=f,I=d,j=g,N=M,Y=m,q=v):(x=c,y=l,A=d,I=f,j=M,N=g,Y=v,q=m)),O===0)return null;let it=x/O,pt=y/O,ut=1/O,rt=A-it*F,ct=I-pt*F,W=j-it*B,xt=N-pt*B,Tt=Y-it*ot,Gt=q-pt*ot,bt=Tt*xt-Gt*W,Pt=rt*Gt-ct*Tt,fe=W*ct-xt*rt;if(s){if(bt<0||Pt<0||fe<0)return null}else if((bt<0||Pt<0||fe<0)&&(bt>0||Pt>0||fe>0))return null;let Zt=bt+Pt+fe;if(Zt===0)return null;let ue=ut*(bt*F+Pt*B+fe*ot);return(Zt>0?ue<0:ue>0)?null:this.at(ue/Zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fn=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ch=new Pe,Xi=new Ai,Ma=new hi,hh=new U,Sa=new U,ba=new U,wa=new U,Hl=new U,Ta=new U,uh=new U,Ea=new U,le=class extends je{constructor(t=new Xe,e=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Hl.fromBufferAttribute(f,t),a?Ta.addScaledVector(Hl,u):Ta.addScaledVector(Hl.sub(e),u))}e.add(Ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Ma.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Ma,hh)===null||Xi.origin.distanceToSquared(hh)>(t.far-t.near)**2))&&(ch.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let h=d[g],m=a[h.materialIndex],v=Math.max(h.start,p.start),w=Math.min(o.count,Math.min(h.start+h.count,p.start+p.count));for(let S=v,C=w;S<C;S+=3){let E=o.getX(S),x=o.getX(S+1),y=o.getX(S+2);s=Aa(this,m,t,n,c,u,f,E,x,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let h=g,m=M;h<m;h+=3){let v=o.getX(h),w=o.getX(h+1),S=o.getX(h+2);s=Aa(this,a,t,n,c,u,f,v,w,S),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let h=d[g],m=a[h.materialIndex],v=Math.max(h.start,p.start),w=Math.min(l.count,Math.min(h.start+h.count,p.start+p.count));for(let S=v,C=w;S<C;S+=3){let E=S,x=S+1,y=S+2;s=Aa(this,m,t,n,c,u,f,E,x,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let h=g,m=M;h<m;h+=3){let v=h,w=h+1,S=h+2;s=Aa(this,a,t,n,c,u,f,v,w,S),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}};function ef(i,t,e,n,s,r,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Oi,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:i}}function Aa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Sa),i.getVertexPosition(l,ba),i.getVertexPosition(c,wa);let u=ef(i,t,e,n,Sa,ba,wa,uh);if(u){let f=new U;Ti.getBarycoord(uh,Sa,ba,wa,f),s&&(u.uv=Ti.getInterpolatedAttribute(s,o,l,c,f,new Mt)),r&&(u.uv1=Ti.getInterpolatedAttribute(r,o,l,c,f,new Mt)),a&&(u.normal=Ti.getInterpolatedAttribute(a,o,l,c,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new U,materialIndex:0};Ti.getNormal(Sa,ba,wa,d.normal),u.face=d,u.barycoord=f}return u}var vr=class extends vn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=on,u=on,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yr=class extends En{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new Pe,dh=new Pe,Ca=[],fh=new Kn,nf=new Pe,sr=new le,rr=new hi,di=class extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),fh.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(fh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),rr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),t.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),dh.multiplyMatrices(n,Ms),sr.matrixWorld=dh,sr.raycast(t,Ca);for(let a=0,o=Ca.length;a<o;a++){let l=Ca[a];l.instanceId=r,l.object=this,e.push(l)}Ca.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,wo,Bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qi=new hi,sf=new Mt(.5,.5),Ra=new U,Ci=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],g=r[8],M=r[9],h=r[10],m=r[11],v=r[12],w=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,m-g,C-v).normalize(),s[1].setComponents(c+a,p+u,m+g,C+v).normalize(),s[2].setComponents(c+o,p+f,m+M,C+w).normalize(),s[3].setComponents(c-o,p-f,m-M,C-w).normalize(),n)s[4].setComponents(l,d,h,S).normalize(),s[5].setComponents(c-l,p-d,m-h,C-S).normalize();else if(s[4].setComponents(c-l,p-d,m-h,C-S).normalize(),e===Nn)s[5].setComponents(c+l,p+d,m+h,C+S).normalize();else if(e===As)s[5].setComponents(l,d,h,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=sf.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ra.x=s.normal.x>0?t.max.x:t.min.x,Ra.y=s.normal.y>0?t.max.y:t.min.y,Ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ph=new Pe,Ja=class i{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ph.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ci),n[s].setFromProjectionMatrix(ph,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ci),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ls=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mh=new Pe,jl=new Ai,Pa=new hi,Ia=new U,Mr=class extends je{constructor(t=new Xe,e=new Ls){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;mh.copy(s).invert(),jl.copy(t.ray).applyMatrix4(mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,M=p;g<M;g++){let h=c.getX(g);Ia.fromBufferAttribute(f,h),gh(Ia,h,l,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,M=p;g<M;g++)Ia.fromBufferAttribute(f,g),gh(Ia,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gh(i,t,e,n,s,r,a){let o=jl.distanceSqToPoint(i);if(o<e){let l=new U;jl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Sr=class extends vn{constructor(t=[],e=as,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$i=class extends vn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends vn{constructor(t,e,n=Wn,s,r,a,o=on,l=on,c,u=li,f=1){if(u!==li&&u!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},br=class extends fi{constructor(t,e=Wn,n=as,s,r,a=on,o=on,l,c=li){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wr=class extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qe=class i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function g(M,h,m,v,w,S,C,E,x,y,O){let A=S/x,I=C/y,F=S/2,j=C/2,N=E/2,B=x+1,Y=y+1,q=0,ot=0,it=new U;for(let pt=0;pt<Y;pt++){let ut=pt*I-j;for(let rt=0;rt<B;rt++){let ct=rt*A-F;it[M]=ct*v,it[h]=ut*w,it[m]=N,c.push(it.x,it.y,it.z),it[M]=0,it[h]=0,it[m]=E>0?1:-1,u.push(it.x,it.y,it.z),f.push(rt/x),f.push(1-pt/y),q+=1}}for(let pt=0;pt<y;pt++)for(let ut=0;ut<x;ut++){let rt=d+ut+B*pt,ct=d+ut+B*(pt+1),W=d+(ut+1)+B*(pt+1),xt=d+(ut+1)+B*pt;l.push(rt,ct,xt),l.push(ct,W,xt),ot+=6}o.addGroup(p,ot,O),p+=ot,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Tr=class i extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,u=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},On=class i extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],p=[],g=0,M=[],h=n/2,m=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(p,2));function v(){let S=new U,C=new U,E=0,x=(e-t)/n;for(let y=0;y<=r;y++){let O=[],A=y/r,I=A*(e-t)+t;for(let F=0;F<=s;F++){let j=F/s,N=j*l+o,B=Math.sin(N),Y=Math.cos(N);C.x=I*B,C.y=-A*n+h,C.z=I*Y,f.push(C.x,C.y,C.z),S.set(B,x,Y).normalize(),d.push(S.x,S.y,S.z),p.push(j,1-A),O.push(g++)}M.push(O)}for(let y=0;y<s;y++)for(let O=0;O<r;O++){let A=M[O][y],I=M[O+1][y],F=M[O+1][y+1],j=M[O][y+1];(t>0||O!==0)&&(u.push(A,I,j),E+=3),(e>0||O!==r-1)&&(u.push(I,F,j),E+=3)}c.addGroup(m,E,0),m+=E}function w(S){let C=g,E=new Mt,x=new U,y=0,O=S===!0?t:e,A=S===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,h*A,0),d.push(0,A,0),p.push(.5,.5),g++;let I=g;for(let F=0;F<=s;F++){let N=F/s*l+o,B=Math.cos(N),Y=Math.sin(N);x.x=O*Y,x.y=h*A,x.z=O*B,f.push(x.x,x.y,x.z),d.push(0,A,0),E.x=B*.5+.5,E.y=Y*.5*A+.5,p.push(E.x,E.y),g++}for(let F=0;F<s;F++){let j=C+F,N=I+F;S===!0?u.push(N,N+1,j):u.push(N+1,N,j),y+=3}c.addGroup(m,y,S===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Er=class i extends On{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ja=class i extends Xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new U,S=new U,C=new U;for(let E=0;E<e.length;E+=3)p(e[E+0],w),p(e[E+1],S),p(e[E+2],C),l(w,S,C,v)}function l(v,w,S,C){let E=C+1,x=[];for(let y=0;y<=E;y++){x[y]=[];let O=v.clone().lerp(S,y/E),A=w.clone().lerp(S,y/E),I=E-y;for(let F=0;F<=I;F++)F===0&&y===E?x[y][F]=O:x[y][F]=O.clone().lerp(A,F/I)}for(let y=0;y<E;y++)for(let O=0;O<2*(E-y)-1;O++){let A=Math.floor(O/2);O%2===0?(d(x[y][A+1]),d(x[y+1][A]),d(x[y][A])):(d(x[y][A+1]),d(x[y+1][A+1]),d(x[y+1][A]))}}function c(v){let w=new U;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(v),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function u(){let v=new U;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let S=h(v)/2/Math.PI+.5,C=m(v)/Math.PI+.5;a.push(S,1-C)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){let w=a[v+0],S=a[v+2],C=a[v+4],E=Math.max(w,S,C),x=Math.min(w,S,C);E>.9&&x<.1&&(w<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,w){let S=v*3;w.x=t[S+0],w.y=t[S+1],w.z=t[S+2]}function g(){let v=new U,w=new U,S=new U,C=new U,E=new Mt,x=new Mt,y=new Mt;for(let O=0,A=0;O<r.length;O+=9,A+=6){v.set(r[O+0],r[O+1],r[O+2]),w.set(r[O+3],r[O+4],r[O+5]),S.set(r[O+6],r[O+7],r[O+8]),E.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),C.copy(v).add(w).add(S).divideScalar(3);let I=h(C);M(E,A+0,v,I),M(x,A+2,w,I),M(y,A+4,S,I)}}function M(v,w,S,C){C<0&&v.x===1&&(a[w]=v.x-1),S.x===0&&S.z===0&&(a[w]=C/2/Math.PI+.5)}function h(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Mt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new Pe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ye(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ye(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ds=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qa=class extends Ds{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,p*=u,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _h=new U,xh=new U,Wl=new Pc,Xl=new Pc,ql=new Pc,Ji=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(xh.subVectors(s[0],s[1]).add(s[0]),c=xh);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(_h.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_h),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(d),p),h=Math.pow(d.distanceToSquared(u),p);M<1e-4&&(M=1),g<1e-4&&(g=M),h<1e-4&&(h=M),Wl.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,M,h),Xl.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,M,h),ql.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,M,h)}else this.curveType==="catmullrom"&&(Wl.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Xl.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),ql.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(Wl.calc(l),Xl.calc(l),ql.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function rf(i,t){let e=1-i;return e*e*t}function af(i,t){return 2*(1-i)*i*t}function of(i,t){return i*i*t}function cr(i,t,e,n){return rf(i,t)+af(i,e)+of(i,n)}function lf(i,t){let e=1-i;return e*e*e*t}function cf(i,t){let e=1-i;return 3*e*e*i*t}function hf(i,t){return 3*(1-i)*i*i*t}function uf(i,t){return i*i*i*t}function hr(i,t,e,n,s){return lf(i,t)+cf(i,e)+hf(i,n)+uf(i,s)}var Ar=class extends An{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends An{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y),hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cr=class extends An{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends An{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends An{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends An{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y),cr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(vh(o,l.x,c.x,u.x,f.x),vh(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Ql=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:Ji,CubicBezierCurve:Ar,CubicBezierCurve3:to,EllipseCurve:Ds,LineCurve:Cr,LineCurve3:eo,QuadraticBezierCurve:Rr,QuadraticBezierCurve3:no,SplineCurve:Pr}),io=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ql[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ir=class extends io{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Cr(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Rr(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ar(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ds(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ns=class extends Ir{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}};function df(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=xu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=_f(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let d=e;d<s;d+=e){let p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Lr(r,a,e,o,l,c,0),a}function xu(i,t,e,n,s){let r;if(s===Cf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=yh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=yh(a/n|0,i[a],i[a+1],r);return r&&Us(r,r.next)&&(Nr(r),r=r.next),r}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Us(e,e.next)||We(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Sf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?pf(i,n,s,r):ff(i)){t.push(l.i,i.i,c.i),Nr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=mf(ji(i),t),Lr(i,t,e,n,s,r,2)):a===2&&gf(i,t,e,n,s,r):Lr(ji(i),t,e,n,s,r,1);break}}}function ff(i){let t=i.prev,e=i,n=i.next;if(We(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&ar(s,o,r,l,a,c,g.x,g.y)&&We(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(We(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(u,f,d),M=Math.max(o,l,c),h=Math.max(u,f,d),m=tc(p,g,t,e,n),v=tc(M,h,t,e,n),w=i.prevZ,S=i.nextZ;for(;w&&w.z>=m&&S&&S.z<=v;){if(w.x>=p&&w.x<=M&&w.y>=g&&w.y<=h&&w!==s&&w!==a&&ar(o,u,l,f,c,d,w.x,w.y)&&We(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=p&&S.x<=M&&S.y>=g&&S.y<=h&&S!==s&&S!==a&&ar(o,u,l,f,c,d,S.x,S.y)&&We(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=m;){if(w.x>=p&&w.x<=M&&w.y>=g&&w.y<=h&&w!==s&&w!==a&&ar(o,u,l,f,c,d,w.x,w.y)&&We(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=M&&S.y>=g&&S.y<=h&&S!==s&&S!==a&&ar(o,u,l,f,c,d,S.x,S.y)&&We(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function mf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Us(n,s)&&yu(n,e,e.next,s)&&Dr(n,s)&&Dr(s,n)&&(t.push(n.i,e.i,s.i),Nr(e),Nr(e.next),e=i=s),e=e.next}while(e!==i);return ji(e)}function gf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tf(a,o)){let l=Mu(a,o);a=ji(a,a.next),l=ji(l,l.next),Lr(a,t,e,n,s,r,0),Lr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _f(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=xu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wf(c))}s.sort(xf);for(let r=0;r<s.length;r++)e=vf(s[r],e);return e}function xf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function vf(i,t){let e=yf(i,t);if(!e)return t;let n=Mu(e,i);return ji(n,n.next),ji(e,e.next)}function yf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Us(i,e))return e;do{if(Us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&vu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Dr(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&Mf(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function Mf(i,t){return We(i.prev,i,t.prev)<0&&We(t.next,i,i.next)<0}function Sf(i,t,e,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bf(s)}function bf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function tc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ar(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&vu(i,t,e,n,s,r,a,o)}function Tf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ef(i,t)&&(Dr(i,t)&&Dr(t,i)&&Af(i,t)&&(We(i.prev,i,t.prev)||We(i,t.prev,t))||Us(i,t)&&We(i.prev,i,i.next)>0&&We(t.prev,t,t.next)>0)}function We(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Us(i,t){return i.x===t.x&&i.y===t.y}function yu(i,t,e,n){let s=Da(We(i,t,e)),r=Da(We(i,t,n)),a=Da(We(e,n,i)),o=Da(We(e,n,t));return!!(s!==r&&a!==o||s===0&&La(i,e,t)||r===0&&La(i,n,t)||a===0&&La(e,i,n)||o===0&&La(e,t,n))}function La(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Da(i){return i>0?1:i<0?-1:0}function Ef(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return We(i.prev,i,i.next)<0?We(i,t,i.next)>=0&&We(i,i.prev,t)>=0:We(i,t,i.prev)<0||We(i,i.next,t)<0}function Af(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mu(i,t){let e=ec(i.i,i.x,i.y),n=ec(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yh(i,t,e,n){let s=ec(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ec(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var nc=class{static triangulate(t,e,n=2){return df(t,e,n)}},Yi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Mh(t),Sh(n,t);let a=t.length;e.forEach(Mh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Sh(n,e[l]);let o=nc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ur=class i extends Xe{constructor(t=new Ns([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,h=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Rf,w,S=!1,C,E,x,y;if(m){w=m.getSpacedPoints(u),S=!0,d=!1;let ft=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(u,ft),E=new U,x=new U,y=new U}d||(h=0,p=0,g=0,M=0);let O=o.extractPoints(c),A=O.shape,I=O.holes;if(!Yi.isClockWise(A)){A=A.reverse();for(let ft=0,At=I.length;ft<At;ft++){let yt=I[ft];Yi.isClockWise(yt)&&(I[ft]=yt.reverse())}}function j(ft){let yt=10000000000000001e-36,Nt=ft[0];for(let Dt=1;Dt<=ft.length;Dt++){let ie=Dt%ft.length,Lt=ft[ie],se=Lt.x-Nt.x,jt=Lt.y-Nt.y,ae=se*se+jt*jt,k=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(Nt.x),Math.abs(Nt.y)),Ce=yt*k*k;if(ae<=Ce){ft.splice(ie,1),Dt--;continue}Nt=Lt}}j(A),I.forEach(j);let N=I.length,B=A;for(let ft=0;ft<N;ft++){let At=I[ft];A=A.concat(At)}function Y(ft,At,yt){return At||pe("ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(At,yt)}let q=A.length;function ot(ft,At,yt){let Nt,Dt,ie,Lt=ft.x-At.x,se=ft.y-At.y,jt=yt.x-ft.x,ae=yt.y-ft.y,k=Lt*Lt+se*se,Ce=Lt*ae-se*jt;if(Math.abs(Ce)>Number.EPSILON){let Kt=Math.sqrt(k),me=Math.sqrt(jt*jt+ae*ae),It=At.x-se/Kt,Le=At.y+Lt/Kt,Xt=yt.x-ae/me,Bt=yt.y+jt/me,R=((Xt-It)*ae-(Bt-Le)*jt)/(Lt*ae-se*jt);Nt=It+Lt*R-ft.x,Dt=Le+se*R-ft.y;let _=Nt*Nt+Dt*Dt;if(_<=2)return new Mt(Nt,Dt);ie=Math.sqrt(_/2)}else{let Kt=!1;Lt>Number.EPSILON?jt>Number.EPSILON&&(Kt=!0):Lt<-Number.EPSILON?jt<-Number.EPSILON&&(Kt=!0):Math.sign(se)===Math.sign(ae)&&(Kt=!0),Kt?(Nt=-se,Dt=Lt,ie=Math.sqrt(k)):(Nt=Lt,Dt=se,ie=Math.sqrt(k/2))}return new Mt(Nt/ie,Dt/ie)}let it=[];for(let ft=0,At=B.length,yt=At-1,Nt=ft+1;ft<At;ft++,yt++,Nt++)yt===At&&(yt=0),Nt===At&&(Nt=0),it[ft]=ot(B[ft],B[yt],B[Nt]);let pt=[],ut,rt=it.concat();for(let ft=0,At=N;ft<At;ft++){let yt=I[ft];ut=[];for(let Nt=0,Dt=yt.length,ie=Dt-1,Lt=Nt+1;Nt<Dt;Nt++,ie++,Lt++)ie===Dt&&(ie=0),Lt===Dt&&(Lt=0),ut[Nt]=ot(yt[Nt],yt[ie],yt[Lt]);pt.push(ut),rt=rt.concat(ut)}let ct;if(h===0)ct=Yi.triangulateShape(B,I);else{let ft=[],At=[];for(let yt=0;yt<h;yt++){let Nt=yt/h,Dt=p*Math.cos(Nt*Math.PI/2),ie=g*Math.sin(Nt*Math.PI/2)+M;for(let Lt=0,se=B.length;Lt<se;Lt++){let jt=Y(B[Lt],it[Lt],ie);Pt(jt.x,jt.y,-Dt),Nt===0&&ft.push(jt)}for(let Lt=0,se=N;Lt<se;Lt++){let jt=I[Lt];ut=pt[Lt];let ae=[];for(let k=0,Ce=jt.length;k<Ce;k++){let Kt=Y(jt[k],ut[k],ie);Pt(Kt.x,Kt.y,-Dt),Nt===0&&ae.push(Kt)}Nt===0&&At.push(ae)}}ct=Yi.triangulateShape(ft,At)}let W=ct.length,xt=g+M;for(let ft=0;ft<q;ft++){let At=d?Y(A[ft],rt[ft],xt):A[ft];S?(x.copy(C.normals[0]).multiplyScalar(At.x),E.copy(C.binormals[0]).multiplyScalar(At.y),y.copy(w[0]).add(x).add(E),Pt(y.x,y.y,y.z)):Pt(At.x,At.y,0)}for(let ft=1;ft<=u;ft++)for(let At=0;At<q;At++){let yt=d?Y(A[At],rt[At],xt):A[At];S?(x.copy(C.normals[ft]).multiplyScalar(yt.x),E.copy(C.binormals[ft]).multiplyScalar(yt.y),y.copy(w[ft]).add(x).add(E),Pt(y.x,y.y,y.z)):Pt(yt.x,yt.y,f/u*ft)}for(let ft=h-1;ft>=0;ft--){let At=ft/h,yt=p*Math.cos(At*Math.PI/2),Nt=g*Math.sin(At*Math.PI/2)+M;for(let Dt=0,ie=B.length;Dt<ie;Dt++){let Lt=Y(B[Dt],it[Dt],Nt);Pt(Lt.x,Lt.y,f+yt)}for(let Dt=0,ie=I.length;Dt<ie;Dt++){let Lt=I[Dt];ut=pt[Dt];for(let se=0,jt=Lt.length;se<jt;se++){let ae=Y(Lt[se],ut[se],Nt);S?Pt(ae.x,ae.y+w[u-1].y,w[u-1].x+yt):Pt(ae.x,ae.y,f+yt)}}}Tt(),Gt();function Tt(){let ft=s.length/3;if(d){let At=0,yt=q*At;for(let Nt=0;Nt<W;Nt++){let Dt=ct[Nt];fe(Dt[2]+yt,Dt[1]+yt,Dt[0]+yt)}At=u+h*2,yt=q*At;for(let Nt=0;Nt<W;Nt++){let Dt=ct[Nt];fe(Dt[0]+yt,Dt[1]+yt,Dt[2]+yt)}}else{for(let At=0;At<W;At++){let yt=ct[At];fe(yt[2],yt[1],yt[0])}for(let At=0;At<W;At++){let yt=ct[At];fe(yt[0]+q*u,yt[1]+q*u,yt[2]+q*u)}}n.addGroup(ft,s.length/3-ft,0)}function Gt(){let ft=s.length/3,At=0;bt(B,At),At+=B.length;for(let yt=0,Nt=I.length;yt<Nt;yt++){let Dt=I[yt];bt(Dt,At),At+=Dt.length}n.addGroup(ft,s.length/3-ft,1)}function bt(ft,At){let yt=ft.length;for(;--yt>=0;){let Nt=yt,Dt=yt-1;Dt<0&&(Dt=ft.length-1);for(let ie=0,Lt=u+h*2;ie<Lt;ie++){let se=q*ie,jt=q*(ie+1),ae=At+Nt+se,k=At+Dt+se,Ce=At+Dt+jt,Kt=At+Nt+jt;Zt(ae,k,Ce,Kt)}}}function Pt(ft,At,yt){l.push(ft),l.push(At),l.push(yt)}function fe(ft,At,yt){ue(ft),ue(At),ue(yt);let Nt=s.length/3,Dt=v.generateTopUV(n,s,Nt-3,Nt-2,Nt-1);te(Dt[0]),te(Dt[1]),te(Dt[2])}function Zt(ft,At,yt,Nt){ue(ft),ue(At),ue(Nt),ue(At),ue(yt),ue(Nt);let Dt=s.length/3,ie=v.generateSideWallUV(n,s,Dt-6,Dt-3,Dt-2,Dt-1);te(ie[0]),te(ie[1]),te(ie[3]),te(ie[1]),te(ie[2]),te(ie[3])}function ue(ft){s.push(l[ft*3+0]),s.push(l[ft*3+1]),s.push(l[ft*3+2])}function te(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Pf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ql[s.type]().fromJSON(s)),new i(n,t.options)}},Rf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Mt(r,a),new Mt(o,l),new Mt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],M=t[r*3],h=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Mt(a,1-l),new Mt(c,1-f),new Mt(d,1-g),new Mt(M,1-m)]:[new Mt(o,1-l),new Mt(u,1-f),new Mt(p,1-g),new Mt(h,1-m)]}};function Pf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fr=class i extends ja{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Or=class i extends Xe{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ye(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,f=new U,d=new Mt,p=new U,g=new U,M=new U,h=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:h=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=m*1,p.y=-h,p.z=m*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:h=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,p.x=m*1,p.y=-h,p.z=m*0,g.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(g)}for(let v=0;v<=e;v++){let w=n+v*u*s,S=Math.sin(w),C=Math.cos(w);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*S,f.y=t[E].y,f.z=t[E].x*C,a.push(f.x,f.y,f.z),d.x=v/e,d.y=E/(t.length-1),o.push(d.x,d.y);let x=l[3*E+0]*S,y=l[3*E+1],O=l[3*E+0]*C;c.push(x,y,O)}}for(let v=0;v<e;v++)for(let w=0;w<t.length-1;w++){let S=w+v*t.length,C=S,E=S+t.length,x=S+t.length+1,y=S+1;r.push(C,E,y),r.push(x,y,E)}this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ve=class i extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,d=e/l,p=[],g=[],M=[],h=[];for(let m=0;m<u;m++){let v=m*d-a;for(let w=0;w<c;w++){let S=w*f-r;g.push(S,-v,0),M.push(0,0,1),h.push(w/o),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let w=v+c*m,S=v+c*(m+1),C=v+1+c*(m+1),E=v+1+c*m;p.push(w,S,E),p.push(S,C,E)}this.setIndex(p),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(M,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qi=class i extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new U,d=new U,p=[],g=[],M=[],h=[];for(let m=0;m<=n;m++){let v=[],w=m/n,S=a+w*o,C=t*Math.cos(S),E=Math.sqrt(t*t-C*C),x=0;m===0&&a===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){let O=y/e,A=s+O*r;f.x=-E*Math.cos(A),f.y=C,f.z=E*Math.sin(A),g.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),h.push(O+x,1-w),v.push(c++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let w=u[m][v+1],S=u[m][v],C=u[m+1][v],E=u[m+1][v+1];(m!==0||a>0)&&p.push(w,S,E),(m!==n-1||l<Math.PI)&&p.push(S,C,E)}this.setIndex(p),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(M,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ri=class i extends Xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],d=new U,p=new U,g=new U;for(let M=0;M<=n;M++){let h=a+M/n*o;for(let m=0;m<=s;m++){let v=m/s*r;p.x=(t+e*Math.cos(h))*Math.cos(v),p.y=(t+e*Math.cos(h))*Math.sin(v),p.z=e*Math.sin(h),c.push(p.x,p.y,p.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),g.subVectors(p,d).normalize(),u.push(g.x,g.y,g.z),f.push(m/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let h=1;h<=s;h++){let m=(s+1)*M+h-1,v=(s+1)*(M-1)+h-1,w=(s+1)*(M-1)+h,S=(s+1)*M+h;l.push(m,v,S),l.push(v,w,S)}this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bh(s))s.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function bh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function If(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ic(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var Rn={clone:cs,merge:mn},Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=If(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fs=class extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ne=class extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pi=class extends Ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var so=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ro=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Na(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ao=class extends Ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $l:r=t,o=2*e-n;break;case Jl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:a=t,l=2*n-e;break;case Jl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),M=g*g,h=M*g,m=-d*h+2*d*M-d*g,v=(1+d)*h+(-1.5-2*d)*M+(-.5+d)*g+1,w=(-1-p)*h+(1.5+p)*M+.5*g,S=p*h-p*M;for(let C=0;C!==o;++C)r[C]=m*a[u+C]+v*a[c+C]+w*a[l+C]+S*a[f+C];return r}},oo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}},lo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},co=class extends Ii{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),M=1-g;for(let h=0;h!==o;++h)r[h]=a[c+h]*M+a[l+h]*g;return r}let d=o*2,p=t-1;for(let g=0;g!==o;++g){let M=a[c+g],h=a[l+g],m=p*d+g*2,v=f[m],w=f[m+1],S=t*d+g*2,C=u[S],E=u[S+1],x=Uf(n,e,v,C,s);r[g]=Su(x,M,w,E,h)}return r}};function Su(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Nf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Uf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Su(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Nf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Na(t.settings)&&(n.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new co(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ur:e=this.InterpolantFactoryMethodDiscrete;break;case Ya:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break;case Zl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return he("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return Zl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Na(this.settings)&&(wh(this.settings.inTangents,t),wh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Na(this.settings)&&(Th(this.settings.inTangents,t),Th(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(pe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(pe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){pe("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){pe("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&bd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){pe("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,d=f-n,p=f+n;for(let g=0;g!==n;++g){let M=e[f+g];if(M!==e[d+g]||M!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Na(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Th(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ya;var Li=class extends Cn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ur;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};ho.prototype.ValueTypeName="color";var uo=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};uo.prototype.ValueTypeName="number";var fo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},Br=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new fo(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends Cn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ur;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};po.prototype.ValueTypeName="vector";var mo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bu=new mo,go=class{constructor(t){this.manager=t!==void 0?t:bu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};go.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=class extends je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Os=class extends ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Yl=new Pe,Eh=new U,Ah=new U,Bs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Yl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===As||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ua=new U,Fa=new ln,Yn=new U,kr=class extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ua,Fa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ua,Fa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new U,Ch=new Mt,Rh=new Mt,un=class extends kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Rh),e.subVectors(Rh,Ch)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(or*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ic=class extends Bs{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ki*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},pi=class extends ts{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ic}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},sc=class extends Bs{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},Ni=class extends ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},es=class extends kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rc=class extends Bs{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zr=class extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new rc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var bs=-90,ws=1,ks=class extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(bs,ws,t,e);s.layers=this.layers,this.add(s);let r=new un(bs,ws,t,e);r.layers=this.layers,this.add(r);let a=new un(bs,ws,t,e);a.layers=this.layers,this.add(a);let o=new un(bs,ws,t,e);o.layers=this.layers,this.add(o);let l=new un(bs,ws,t,e);l.layers=this.layers,this.add(l);let c=new un(bs,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;t.isWebGLRenderer===!0?h=t.state.buffers.depth.getReversed():h=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_o=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Gr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ff.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ff(){this._document.hidden===!1&&this.reset()}var Lc="\\[\\]\\.:\\/",Of=new RegExp("["+Lc+"]","g"),Dc="[^"+Lc+"]",Bf="[^"+Lc.replace("\\.","")+"]",kf=/((?:WC+[\/:])*)/.source.replace("WC",Dc),zf=/(WCOD+)?/.source.replace("WCOD",Bf),Gf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),Vf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),Hf=new RegExp("^"+kf+zf+Gf+Vf+"$"),Wf=["material","materials","bones","map"],ac=class{constructor(t,e,n){let s=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Of,"")}static parseTrackName(t){let e=Hf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){he("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;pe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=ac;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J_=new Float32Array(1);var Ph=new Pe,Vr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ai(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):pe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(t,e=!0,n=[]){return oc(t,this,n,e),n.sort(Ih),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oc(t[s],this,n,e);return n.sort(Ih),n}};function Ih(i,t){return i.distance-t.distance}function oc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)oc(r[a],t,e,!0)}}var zs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var lc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Hr=class extends Hn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Nc(i,t,e,n){let s=Xf(n);switch(e){case yc:return i*t;case wo:return i*t/s.components*s.byteLength;case To:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case Eo:return i*t*2/s.components*s.byteLength;case Mc:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case Ao:return i*t*4/s.components*s.byteLength;case Jr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:case Io:return Math.max(i,16)*Math.max(t,8)/4;case Co:case Po:return Math.max(i,8)*Math.max(t,8)/2;case Lo:case Do:case Uo:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:case ea:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jo:case Qo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case na:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xf(i){switch(i){case Mn:case gc:return{byteLength:1,components:1};case Ws:case _c:case tn:return{byteLength:2,components:1};case So:case bo:return{byteLength:2,components:4};case Wn:case Mo:case Bn:return{byteLength:4,components:1};case xc:case vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Xu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yf(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],M=f[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,f[d]=M)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let M=f[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:Zf,alphahash_pars_fragment:Kf,alphamap_fragment:$f,alphamap_pars_fragment:Jf,alphatest_fragment:jf,alphatest_pars_fragment:Qf,aomap_fragment:tp,aomap_pars_fragment:ep,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:sp,beginnormal_vertex:rp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:hp,clipping_planes_pars_vertex:up,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:yp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:bp,colorspace_pars_fragment:wp,envmap_fragment:Tp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Ap,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:kp,envmap_vertex:Rp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Np,lightmap_pars_fragment:Up,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Op,lights_pars_begin:Bp,lights_toon_fragment:zp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:qp,lights_fragment_maps:Yp,lights_fragment_end:Zp,lightprobes_pars_fragment:Kp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Qp,map_fragment:tm,map_pars_fragment:em,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:sm,metalnessmap_pars_fragment:rm,morphinstance_vertex:am,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:hm,normal_fragment_begin:um,normal_fragment_maps:dm,normal_pars_fragment:fm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:ym,opaque_fragment:Mm,packing:Sm,premultiplied_alpha_fragment:bm,project_vertex:wm,dithering_fragment:Tm,dithering_pars_fragment:Em,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Im,shadowmask_pars_fragment:Lm,skinbase_vertex:Dm,skinning_pars_vertex:Nm,skinning_vertex:Um,skinnormal_vertex:Fm,specularmap_fragment:Om,specularmap_pars_fragment:Bm,tonemapping_fragment:km,tonemapping_pars_fragment:zm,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Hm,uv_pars_vertex:Wm,uv_vertex:Xm,worldpos_vertex:qm,background_vert:Ym,background_frag:Zm,backgroundCube_vert:Km,backgroundCube_frag:$m,cube_vert:Jm,cube_frag:jm,depth_vert:Qm,depth_frag:t0,distance_vert:e0,distance_frag:n0,equirect_vert:i0,equirect_frag:s0,linedashed_vert:r0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:u0,meshmatcap_frag:d0,meshnormal_vert:f0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:x0,meshtoon_vert:v0,meshtoon_frag:y0,points_vert:M0,points_frag:S0,shadow_vert:b0,shadow_frag:w0,sprite_vert:T0,sprite_frag:E0},Wt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},jn={basic:{uniforms:mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:mn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:mn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:mn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:mn([Wt.points,Wt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:mn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:mn([Wt.common,Wt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:mn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:mn([Wt.sprite,Wt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:mn([Wt.common,Wt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:mn([Wt.lights,Wt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};jn.physical={uniforms:mn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};var rl={r:0,b:0,g:0},A0=new Pe,qu=new ve;qu.set(-1,0,0,0,1,0,0,0,1);function C0(i,t,e,n,s,r){let a=new ne(0),o=s===!0?0:1,l,c,u=null,f=0,d=null;function p(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let S=v.backgroundBlurriness>0;w=t.get(w,S)}return w}function g(v){let w=!1,S=p(v);S===null?h(a,o):S&&S.isColor&&(h(S,1),w=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(v,w){let S=p(w);S&&S.isCubeTexture?(c===void 0&&(c=new le(new Qe(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:cs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qu),c.material.toneMapped=Te.getTransfer(S.colorSpace)!==Ue,(u!==S||f!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new le(new Ve(2,2),new qe({name:"BackgroundMaterial",uniforms:cs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Te.getTransfer(S.colorSpace)!==Ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function h(v,w){v.getRGB(rl,Ic(i)),e.buffers.color.setClear(rl.r,rl.g,rl.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,h(a,o)},render:g,addToRenderList:M,dispose:m}}function R0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(I,F,j,N,B){let Y=!1,q=f(I,N,j,F);r!==q&&(r=q,c(r.object)),Y=p(I,N,j,B),Y&&g(I,N,j,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(I,F,j,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,F,j,N){let B=N.wireframe===!0,Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);let q=I.isInstancedMesh===!0?I.id:0,ot=Y[q];ot===void 0&&(ot={},Y[q]=ot);let it=ot[j.id];it===void 0&&(it={},ot[j.id]=it);let pt=it[B];return pt===void 0&&(pt=d(l()),it[B]=pt),pt}function d(I){let F=[],j=[],N=[];for(let B=0;B<e;B++)F[B]=0,j[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:N,object:I,attributes:{},index:null}}function p(I,F,j,N){let B=r.attributes,Y=F.attributes,q=0,ot=j.getAttributes();for(let it in ot)if(ot[it].location>=0){let ut=B[it],rt=Y[it];if(rt===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),ut===void 0||ut.attribute!==rt||rt&&ut.data!==rt.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function g(I,F,j,N){let B={},Y=F.attributes,q=0,ot=j.getAttributes();for(let it in ot)if(ot[it].location>=0){let ut=Y[it];ut===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor));let rt={};rt.attribute=ut,ut&&ut.data&&(rt.data=ut.data),B[it]=rt,q++}r.attributes=B,r.attributesNum=q,r.index=N}function M(){let I=r.newAttributes;for(let F=0,j=I.length;F<j;F++)I[F]=0}function h(I){m(I,0)}function m(I,F){let j=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;j[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),B[I]!==F&&(i.vertexAttribDivisor(I,F),B[I]=F)}function v(){let I=r.newAttributes,F=r.enabledAttributes;for(let j=0,N=F.length;j<N;j++)F[j]!==I[j]&&(i.disableVertexAttribArray(j),F[j]=0)}function w(I,F,j,N,B,Y,q){q===!0?i.vertexAttribIPointer(I,F,j,B,Y):i.vertexAttribPointer(I,F,j,N,B,Y)}function S(I,F,j,N){M();let B=N.attributes,Y=j.getAttributes(),q=F.defaultAttributeValues;for(let ot in Y){let it=Y[ot];if(it.location>=0){let pt=B[ot];if(pt===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(pt=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(pt=I.instanceColor)),pt!==void 0){let ut=pt.normalized,rt=pt.itemSize,ct=t.get(pt);if(ct===void 0)continue;let W=ct.buffer,xt=ct.type,Tt=ct.bytesPerElement,Gt=xt===i.INT||xt===i.UNSIGNED_INT||pt.gpuType===Mo;if(pt.isInterleavedBufferAttribute){let bt=pt.data,Pt=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,fe=pt.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let Zt=0;Zt<it.locationSize;Zt++)m(it.location+Zt,bt.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Zt=0;Zt<it.locationSize;Zt++)h(it.location+Zt);i.bindBuffer(i.ARRAY_BUFFER,W);for(let Zt=0;Zt<it.locationSize;Zt++)w(it.location+Zt,rt/it.locationSize,xt,ut,Pt*Tt,(fe+rt/it.locationSize*Zt)*Tt,Gt)}else{if(pt.isInstancedBufferAttribute){for(let bt=0;bt<it.locationSize;bt++)m(it.location+bt,pt.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let bt=0;bt<it.locationSize;bt++)h(it.location+bt);i.bindBuffer(i.ARRAY_BUFFER,W);for(let bt=0;bt<it.locationSize;bt++)w(it.location+bt,rt/it.locationSize,xt,ut,rt*Tt,rt/it.locationSize*bt*Tt,Gt)}}else if(q!==void 0){let ut=q[ot];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(it.location,ut);break;case 3:i.vertexAttrib3fv(it.location,ut);break;case 4:i.vertexAttrib4fv(it.location,ut);break;default:i.vertexAttrib1fv(it.location,ut)}}}}v()}function C(){O();for(let I in n){let F=n[I];for(let j in F){let N=F[j];for(let B in N){let Y=N[B];for(let q in Y)u(Y[q].object),delete Y[q];delete N[B]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let j in F){let N=F[j];for(let B in N){let Y=N[B];for(let q in Y)u(Y[q].object),delete Y[q];delete N[B]}}delete n[I.id]}function x(I){for(let F in n){let j=n[F];for(let N in j){let B=j[N];if(B[I.id]===void 0)continue;let Y=B[I.id];for(let q in Y)u(Y[q].object),delete Y[q];delete B[I.id]}}}function y(I){for(let F in n){let j=n[F],N=I.isInstancedMesh===!0?I.id:0,B=j[N];if(B!==void 0){for(let Y in B){let q=B[Y];for(let ot in q)u(q[ot].object),delete q[ot];delete B[Y]}delete j[N],Object.keys(j).length===0&&delete n[F]}}}function O(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:h,disableUnusedAttributes:v}}function P0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function I0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Xn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let y=x===tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Mn&&x!==Bn&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(he("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&he("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:S,maxSamples:C,samples:E}}function L0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,M=f.clipIntersection,h=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!h)r?u(null):c();else{let v=r?0:n,w=v*4,S=m.clippingState||null;l.value=S,S=u(g,d,w,p);for(let C=0;C!==w;++C)S[C]=e[C];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,p,g){let M=f!==null?f.length:0,h=null;if(M!==0){if(h=l.value,g!==!0||h===null){let m=p+M*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let w=0,S=p;w!==M;++w,S+=4)a.copy(f[w]).applyMatrix4(v,o),a.normal.toArray(h,S),h[S+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,h}}var ra=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qe(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:mi});r.uniforms.tEquirect.value=e;let a=new le(s,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=xn),new ks(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},wu=256,D0=3,N0=20,Yu=256,Zu=16,U0=3,F0=new U,O0=new ne,qs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ks(1,10,null),this._boxMesh=new le(new Qe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=F0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(O0));let h=new ks(n,s,u);return h.position.copy(o),h.update(l,t),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=g,t.background=M,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(wu,Cc(t))}_fromTexture(t,e){t.mapping===as||t.mapping===Hs?this._setSize(t.image.length===0?wu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Tu(t,!1,!1),n=Math.log2(t)-D0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Tu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===as||t.mapping===Hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Eu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=B0(),this._integrationMaterial=k0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Zu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-U0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Yu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=z0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Tu(i,t,e){return new ra(i,{minFilter:gi,generateMipmaps:t,type:tn,colorSpace:dr,depthBuffer:e})}function aa(i,t,e){return new qe({name:i,uniforms:t,vertexShader:Ee.cube_vert,fragmentShader:e,side:dn,blending:mi,depthTest:!1,depthWrite:!1})}function B0(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function k0(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function z0(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${N0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Eu(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Au(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function G0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===xo||p===vo)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let M=new ra(g.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,g=p===xo||p===vo,M=p===as||p===Hs;if(g||M){let h=e.get(d),m=h!==void 0?h.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new qs(i)),h=g?n.fromEquirectangular(d,h):n.fromCubemap(d,h),h.texture.pmremVersion=d.pmremVersion,e.set(d,h),h.texture;if(h!==void 0)return h.texture;{let v=d.image;return g&&v&&v.height>0||M&&v&&l(v)?(n===null&&(n=new qs(i)),h=g?n.fromEquirectangular(d):n.fromCubemap(d),h.texture.pmremVersion=d.pmremVersion,e.set(d,h),d.addEventListener("dispose",u),h.texture):null}}}return d}function o(d,p){return p===xo?d.mapping=as:p===vo&&(d.mapping=Hs),d}function l(d){let p=0,g=6;for(let M=0;M<g;M++)d[M]!==void 0&&p++;return p===g}function c(d){let p=d.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function V0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zi("WebGLRenderer: "+n+" extension not supported."),s}}}function H0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let h in g.attributes)t.remove(g.attributes[h]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function u(g){let M=g.attributes;for(let h in M)t.update(M[h],i.ARRAY_BUFFER)}function f(g){let M=g.index,h=g.attributes.position,m=0;if(h===void 0)return;let v=M!==null?M.array.length:h.array.length/3-1,w=h.count>=65535?xr:_r,S=new w(Math.ceil(v/3)*6,1),C=S.array;if(M!==null){let x=M.array;m=M.version;for(let y=0,O=0;y<v;y+=3){let A=x[y+0],I=x[y+1],F=x[y+2];C[O++]=A,C[O++]=I,C[O++]=I,C[O++]=F,C[O++]=F,C[O++]=A}}else{m=h.version;for(let x=0,y=0;x<v;x+=3){let O=x+0,A=x+1,I=x+2;C[y++]=O,C[y++]=A,C[y++]=A,C[y++]=I,C[y++]=I,C[y++]=O}}S.version=m;let E=r.get(g);E&&t.remove(E),r.set(g,S)}function d(g){let M=r.get(g);if(M){let h=g.index;h!==null&&M.version<h.version&&f(g)}else f(g);return r.get(g)}function p(){for(let g in s){let M=s[g].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function W0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),e.update(d,n,p))}function u(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let M=0;for(let h=0;h<p;h++)M+=d[h];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function X0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function q0(i,t,e){let n=new WeakMap,s=new ze;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let O=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),M===!0&&(w=3);let S=o.attributes.position.count*w,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*C*4*f),x=new mr(E,S,C,f);x.type=Bn,x.needsUpdate=!0;let y=w*4;for(let A=0;A<f;A++){let I=h[A],F=m[A],j=v[A],N=S*C*4*A;for(let B=0;B<I.count;B++){let Y=B*y;p===!0&&(s.fromBufferAttribute(I,B),E[N+Y+0]=s.x,E[N+Y+1]=s.y,E[N+Y+2]=s.z,E[N+Y+3]=0),g===!0&&(s.fromBufferAttribute(F,B),E[N+Y+4]=s.x,E[N+Y+5]=s.y,E[N+Y+6]=s.z,E[N+Y+7]=0),M===!0&&(s.fromBufferAttribute(j,B),E[N+Y+8]=s.x,E[N+Y+9]=s.y,E[N+Y+10]=s.z,E[N+Y+11]=j.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new Mt(S,C)},n.set(o,d),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Y0(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Z0={[Wr]:"LINEAR_TONE_MAPPING",[Xr]:"REINHARD_TONE_MAPPING",[qr]:"CINEON_TONE_MAPPING",[rs]:"ACES_FILMIC_TONE_MAPPING",[Zr]:"AGX_TONE_MAPPING",[Kr]:"NEUTRAL_TONE_MAPPING",[Yr]:"CUSTOM_TONE_MAPPING"};function K0(i,t,e,n,s,r){let a=new Ye(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Xe;u.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Me([0,2,0,0,2,0],2));let f=new Fs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new le(u,f),p=new es(-1,1,1,-1,0,1),g=null,M=null,h=!1,m,v=null,w=[],S=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),l!==null&&l.setSize(C,E);for(let x=0;x<w.length;x++){let y=w[x];y.setSize&&y.setSize(C,E)}},this.setEffects=function(C){w=C,S=w.length>0&&w[0].isRenderPass===!0;let E=a.width,x=a.height;w.length>0&&o===null&&(o=new Ye(E,x,{type:tn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(E,x,{type:tn,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&w.some(O=>O.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new fi(E,x),r===!0&&(c.format=_i,c.type=os)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let O=0;O<w.length;O++){let A=w[O];A.setSize&&A.setSize(E,x),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(C,E){if(h||C.toneMapping===$n&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,y=E.height;(a.width!==x||a.height!==y)&&this.setSize(x,y)}return S===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=$n,!0},this.hasRenderPass=function(){return S},this.end=function(C,E){C.toneMapping=m,h=!0;let x=a,y=o;for(let O=0;O<w.length;O++){let A=w[O];A.enabled!==!1&&(A.render(C,y,x,E),A.needsSwap!==!1&&(x=y,y=y===o?l:o))}if(g!==C.outputColorSpace||M!==C.toneMapping){g=C.outputColorSpace,M=C.toneMapping,f.defines={},Te.getTransfer(g)===Ue&&(f.defines.SRGB_TRANSFER="");let O=Z0[M];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(v),C.render(d,p),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var Ku=new vn,$u=new fi(1,1),Ju=new br(1),ju=new mr,Qu=new $a,td=new Sr,Cu=[],Ru=[],Pu=new Float32Array(16),Iu=new Float32Array(9),Lu=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Cu[s];if(r===void 0&&(r=new Float32Array(s),Cu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ll(i,t){let e=Ru[t];e===void 0&&(e=new Int32Array(t),Ru[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Lu.set(n),i.uniformMatrix2fv(this.addr,!1,Lu),nn(e,n)}}function eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Iu.set(n),i.uniformMatrix3fv(this.addr,!1,Iu),nn(e,n)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),nn(e,n)}}function ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function cl(i){return i.version===0&&(i.compareFunction=wc,i.needsUpdate=!0),i}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=cl($u):r=Ku,e.setTexture2D(t||r,s)}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qu,s)}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=cl(Ju):r=td,e.setTextureCube(t||r,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ju,s)}function mg(i){switch(i){case 5126:return $0;case 35664:return J0;case 35665:return j0;case 35666:return Q0;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,t){i.uniform1fv(this.addr,t)}function _g(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function xg(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function vg(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function yg(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mg(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sg(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bg(i,t){i.uniform1iv(this.addr,t)}function wg(i,t){i.uniform2iv(this.addr,t)}function Tg(i,t){i.uniform3iv(this.addr,t)}function Eg(i,t){i.uniform4iv(this.addr,t)}function Ag(i,t){i.uniform1uiv(this.addr,t)}function Cg(i,t){i.uniform2uiv(this.addr,t)}function Rg(i,t){i.uniform3uiv(this.addr,t)}function Pg(i,t){i.uniform4uiv(this.addr,t)}function Ig(i,t,e){let n=this.cache,s=t.length,r=ll(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=cl($u):a=Ku;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Lg(i,t,e){let n=this.cache,s=t.length,r=ll(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qu,r[a])}function Dg(i,t,e){let n=this.cache,s=t.length,r=ll(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=cl(Ju):a=td;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Ng(i,t,e){let n=this.cache,s=t.length,r=ll(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ju,r[a])}function Ug(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return xg;case 35666:return vg;case 35674:return yg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return bg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Eg;case 5125:return Ag;case 36294:return Cg;case 36295:return Rg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ng}}var Oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mg(e.type)}},Bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ug(e.type)}},kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Du(i,t){i.seq.push(t),i.map[t.id]=t}function Fg(i,t,e){let n=i.name,s=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),a=Uc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Du(e,c===void 0?new Oc(o,i,t):new Bc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new kc(o),Du(e,f)),e=f}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Fg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Nu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Og=37297,Bg=0;function kg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Uu=new ve;function zg(i){Te._getMatrix(Uu,Te.workingColorSpace,i);let t=`mat3( ${Uu.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+kg(i.getShaderSource(t),o)}else return r}function Gg(i,t){let e=zg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Vg={[Wr]:"Linear",[Xr]:"Reinhard",[qr]:"Cineon",[rs]:"ACESFilmic",[Zr]:"AgX",[Kr]:"Neutral",[Yr]:"Custom"};function Hg(i,t){let e=Vg[t];return e===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var al=new U;function Wg(){Te.getLuminanceCoefficients(al);let i=al.x.toFixed(4),t=al.y.toFixed(4),e=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function qg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sa(i){return i!==""}function Ou(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(Zg,Kg)}function Kg(i,t){let e=Ee[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return zc(e)}var $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(i){return i.replace($g,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var jg={[ns]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function Qg(i){return jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t_={[Hs]:"ENVMAP_MODE_REFRACTION"};function e_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n_={[pc]:"ENVMAP_BLENDING_MULTIPLY",[Qh]:"ENVMAP_BLENDING_MIX",[tu]:"ENVMAP_BLENDING_ADD"};function i_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n_[i.combine]||"ENVMAP_BLENDING_NONE"}function s_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Qg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=e_(e),f=i_(e),d=Xg(e),p=qg(r),g=s.createProgram(),M,h,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(sa).join(`
`),M.length>0&&(M+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(sa).join(`
`),h.length>0&&(h+=`
`)):(M=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),h=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Ee.tonemapping_pars_fragment:"",e.toneMapping!==$n?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),a=zc(a),a=Ou(a,e),a=Bu(a,e),o=zc(o),o=Ou(o,e),o=Bu(o,e),a=ku(a),o=ku(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,h=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let v=m+M+a,w=m+h+o,S=Nu(s,s.VERTEX_SHADER,v),C=Nu(s,s.FRAGMENT_SHADER,w);s.attachShader(g,S),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(S)||"",j=s.getShaderInfoLog(C)||"",N=I.trim(),B=F.trim(),Y=j.trim(),q=!0,ot=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,C);else{let it=Fu(s,S,"vertex"),pt=Fu(s,C,"fragment");pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+it+`
`+pt)}else N!==""?he("WebGLProgram: Program Info Log:",N):(B===""||Y==="")&&(ot=!1);ot&&(A.diagnostics={runnable:q,programLog:N,vertexShader:{log:B,prefix:M},fragmentShader:{log:Y,prefix:h}})}s.deleteShader(S),s.deleteShader(C),x=new Xs(s,g),y=Yg(s,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,Og)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var r_=0,Gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vc(t),e.set(t,n)),n}},Vc=class{constructor(t){this.id=r_++,this.code=t,this.usedTimes=0}};function a_(i){return i===Bi||i===ea||i===na}function o_(i,t,e,n,s,r){let a=new Ps,o=new Gc,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,y,O,A,I,F){let j=A.fog,N=I.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=t.get(x.envMap||B,Y),ot=d[x.type],it=n.precision;x.precision!==null&&(it=n.getMaxPrecision(x.precision),it!==x.precision&&he("WebGLProgram.getParameters:",x.precision,"not supported, using",it,"instead."));let pt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ut=pt!==void 0?pt.length:0,rt=0;N.morphAttributes.position!==void 0&&(rt=1),N.morphAttributes.normal!==void 0&&(rt=2),N.morphAttributes.color!==void 0&&(rt=3);let ct,W,xt,Tt;if(ot){let Vt=jn[ot];ct=Vt.vertexShader,W=Vt.fragmentShader}else{ct=x.vertexShader,W=x.fragmentShader;let Vt=o.getVertexShaderStage(x),Ae=o.getFragmentShaderStage(x);o.update(x,Vt,Ae),xt=Vt.id,Tt=Ae.id}let Gt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Pt=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,Zt=!!x.map,ue=!!x.matcap,te=!!q,ft=te&&q.isPMREMTexture===!0,At=!!x.aoMap,yt=!!x.lightMap,Nt=!!x.bumpMap&&x.wireframe===!1,Dt=!!x.normalMap,ie=!!x.displacementMap,Lt=!!x.emissiveMap,se=!!x.metalnessMap,jt=!!x.roughnessMap,ae=x.anisotropy>0,k=x.clearcoat>0,Ce=x.diffuseRoughness>0,Kt=x.dispersion>0,me=x.retroreflectivity>0,It=x.iridescence>0,Le=x.sheen>0,Xt=x.transmission>0,Bt=ae&&!!x.anisotropyMap,R=k&&!!x.clearcoatMap,_=k&&!!x.clearcoatNormalMap,L=k&&!!x.clearcoatRoughnessMap,J=Ce&&!!x.diffuseRoughnessMap,z=It&&!!x.iridescenceMap,dt=It&&!!x.iridescenceThicknessMap,gt=Le&&!!x.sheenColorMap,Z=Le&&!!x.sheenRoughnessMap,et=!!x.specularMap,ht=!!x.specularColorMap,D=!!x.specularIntensityMap,tt=Xt&&!!x.transmissionMap,nt=Xt&&!!x.thicknessMap,vt=!!x.gradientMap,wt=!!x.alphaMap,Ct=x.alphaTest>0,qt=!!x.alphaHash,re=!!x.extensions,Et=$n;x.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(Et=i.toneMapping);let ee=ft?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,ge={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:ct,fragmentShader:W,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:Tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:it,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&I.instanceColor!==null,instancingMorph:Pt&&I.morphTexture!==null,outputColorSpace:Gt===null?i.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Zt,matcap:ue,envMap:te,envMapMode:te&&q.mapping,envMapPMREM:ft,envMapMaxLod:ft?ee.length-1:null,envMapSize:ft?ee[0].width:null,aoMap:At,lightMap:yt,bumpMap:Nt,normalMap:Dt,displacementMap:ie,emissiveMap:Lt,normalMapObjectSpace:Dt&&x.normalMapType===iu,normalMapTangentSpace:Dt&&x.normalMapType===sl,packedNormalMap:Dt&&x.normalMapType===sl&&a_(x.normalMap.format),metalnessMap:se,roughnessMap:jt,anisotropy:ae,anisotropyMap:Bt,clearcoat:k,clearcoatMap:R,clearcoatNormalMap:_,clearcoatRoughnessMap:L,diffuseRoughness:Ce,diffuseRoughnessMap:J,dispersion:Kt,retroreflection:me,iridescence:It,iridescenceMap:z,iridescenceThicknessMap:dt,sheen:Le,sheenColorMap:gt,sheenRoughnessMap:Z,specularMap:et,specularColorMap:ht,specularIntensityMap:D,transmission:Xt,transmissionMap:tt,thicknessMap:nt,gradientMap:vt,opaque:x.transparent===!1&&x.blending===Vs&&x.alphaToCoverage===!1,alphaMap:wt,alphaTest:Ct,alphaHash:qt,combine:x.combine,mapUv:Zt&&p(x.map.channel),aoMapUv:At&&p(x.aoMap.channel),lightMapUv:yt&&p(x.lightMap.channel),bumpMapUv:Nt&&p(x.bumpMap.channel),normalMapUv:Dt&&p(x.normalMap.channel),displacementMapUv:ie&&p(x.displacementMap.channel),emissiveMapUv:Lt&&p(x.emissiveMap.channel),metalnessMapUv:se&&p(x.metalnessMap.channel),roughnessMapUv:jt&&p(x.roughnessMap.channel),anisotropyMapUv:Bt&&p(x.anisotropyMap.channel),clearcoatMapUv:R&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:J&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:z&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&p(x.sheenRoughnessMap.channel),specularMapUv:et&&p(x.specularMap.channel),specularColorMapUv:ht&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:tt&&p(x.transmissionMap.channel),thicknessMapUv:nt&&p(x.thicknessMap.channel),alphaMapUv:wt&&p(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Dt||ae),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Zt||wt),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:rt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.filter(Vt=>Vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Zt&&x.map.isVideoTexture===!0&&Te.getTransfer(x.map.colorSpace)===Ue,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&Te.getTransfer(x.emissiveMap.colorSpace)===Ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===cn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function M(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)y.push(O),y.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(h(y,x),m(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function h(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function m(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let y=d[x.type],O;if(y){let A=jn[y];O=Rn.clone(A.uniforms)}else O=x.uniforms;return O}function w(x,y){let O=u.get(y);return O!==void 0?++O.usedTimes:(O=new s_(i,y,x,s),c.push(O),u.set(y,O)),O}function S(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:E}}function l_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function c_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Gu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,M,h,m){let v=i[t];return v===void 0?(v={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:h,group:m},i[t]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=g,v.materialVariant=a(d),v.groupOrder=M,v.renderOrder=d.renderOrder,v.z=h,v.group=m),t++,v}function l(d,p,g,M,h,m,v){v.reversedDepth===!0&&(h=-h);let w=o(d,p,g,M,h,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(d,p,g,M,h,m){let v=o(d,p,g,M,h,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(d,p){e.length>1&&e.sort(d||c_),n.length>1&&n.sort(p||Gu),s.length>1&&s.sort(p||Gu)}function f(){for(let d=t,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function h_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Vu,i.set(n,[a])):s>=r.length?(a=new Vu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ne};break;case"SpotLight":e={position:new U,direction:new U,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f_=0;function p_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m_(i){let t=new u_,e=d_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new Pe,a=new Pe;function o(c){let u=0,f=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,g=0,M=0,h=0,m=0,v=0,w=0,S=0,C=0,E=0,x=0,y=0,O=0,A=0;c.sort(p_);for(let F=0,j=c.length;F<j;F++){let N=c[F],B=N.color,Y=N.intensity,q=N.distance,ot=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Bi?ot=N.shadow.map.texture:ot=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=B.r*Y,f+=B.g*Y,d+=B.b*Y;else if(N.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(N.sh.coefficients[it],Y);A++}else if(N.isSunLight){let it=t.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let pt=N.shadow,ut=e.get(N);ut.shadowIntensity=pt.intensity,ut.shadowBias=pt.bias,ut.shadowNormalBias=pt.normalBias,ut.shadowRadius=pt.radius,ut.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),n.sunShadow[g]=ut,n.sunShadowMap[g]=ot;let rt=pt.getViewportCount();for(let ct=0;ct<rt;ct++)n.sunShadowMatrix[M+ct]=pt.getMatrix(ct),n.sunShadowCascade[M+ct]=pt._cascadeData[ct];M+=rt,g++}n.sun[p]=it,p++}else if(N.isDirectionalLight){let it=t.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let pt=N.shadow,ut=e.get(N);ut.shadowIntensity=pt.intensity,ut.shadowBias=pt.bias,ut.shadowNormalBias=pt.normalBias,ut.shadowRadius=pt.radius,ut.shadowMapSize=pt.mapSize,n.directionalShadow[h]=ut,n.directionalShadowMap[h]=ot,n.directionalShadowMatrix[h]=N.shadow.matrix,C++}n.directional[h]=it,h++}else if(N.isSpotLight){let it=t.get(N);it.position.setFromMatrixPosition(N.matrixWorld),it.color.copy(B).multiplyScalar(Y),it.distance=q,it.coneCos=Math.cos(N.angle),it.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),it.decay=N.decay,n.spot[v]=it;let pt=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,pt.updateMatrices(N),N.castShadow&&O++),n.spotLightMatrix[v]=pt.matrix,N.castShadow){let ut=e.get(N);ut.shadowIntensity=pt.intensity,ut.shadowBias=pt.bias,ut.shadowNormalBias=pt.normalBias,ut.shadowRadius=pt.radius,ut.shadowMapSize=pt.mapSize,n.spotShadow[v]=ut,n.spotShadowMap[v]=ot,x++}v++}else if(N.isRectAreaLight){let it=t.get(N);it.color.copy(B).multiplyScalar(Y),it.halfWidth.set(N.width*.5,0,0),it.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=it,w++}else if(N.isPointLight){let it=t.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity),it.distance=N.distance,it.decay=N.decay,N.castShadow){let pt=N.shadow,ut=e.get(N);ut.shadowIntensity=pt.intensity,ut.shadowBias=pt.bias,ut.shadowNormalBias=pt.normalBias,ut.shadowRadius=pt.radius,ut.shadowMapSize=pt.mapSize,ut.shadowCameraNear=pt.camera.near,ut.shadowCameraFar=pt.camera.far,n.pointShadow[m]=ut,n.pointShadowMap[m]=ot,n.pointShadowMatrix[m]=N.shadow.matrix,E++}n.point[m]=it,m++}else if(N.isHemisphereLight){let it=t.get(N);it.skyColor.copy(N.color).multiplyScalar(Y),it.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[S]=it,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let I=n.hash;(I.sunLength!==p||I.directionalLength!==h||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==w||I.hemiLength!==S||I.numSunShadows!==g||I.numDirectionalShadows!==C||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==y||I.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=h,n.spot.length=v,n.rectArea.length=w,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-O,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=A,I.sunLength=p,I.directionalLength=h,I.pointLength=m,I.spotLength=v,I.rectAreaLength=w,I.hemiLength=S,I.numSunShadows=g,I.numDirectionalShadows=C,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=y,I.numLightProbes=A,n.version=f_++)}function l(c,u){let f=0,d=0,p=0,g=0,M=0,h=0,m=u.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let S=c[v];if(S.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),f++}else if(S.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(S.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let C=n.rectArea[M];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){let C=n.hemi[h];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),h++}}}return{setup:o,setupView:l,state:n}}function Hu(i){let t=new m_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function g_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Hu(i),t.set(s,[o])):r>=a.length?(o=new Hu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],y_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Wu=new Pe,ia=new U,Fc=new U;function M_(i,t,e){let n=new Ci,s=new Mt,r=new Mt,a=new ze,o=new so,l=new ro,c={},u=e.maxTextureSize,f={[Oi]:dn,[dn]:Oi,[cn]:cn},d=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:__,fragmentShader:x_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new le(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let m=this.type;this.render=function(E,x,y){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||E.length===0)return;this.type===Nh&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let O=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending(mi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let j=m!==this.type;j&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=E.length;N<B;N++){let Y=E[N],q=Y.shadow;if(q===void 0){he("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ot=q.getFrameExtents();s.multiply(ot),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,q.mapSize.y=r.y));let it=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=it,q.map===null||j===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Gs){if(Y.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ye(s.x,s.y,{format:Bi,type:tn,minFilter:xn,magFilter:xn,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new fi(s.x,s.y,Bn),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=li,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=on,q.map.depthTexture.magFilter=on}else Y.isPointLight?(q.map=new ra(s.x),q.map.depthTexture=new br(s.x,Wn)):(q.map=new Ye(s.x,s.y),q.map.depthTexture=new fi(s.x,s.y,Wn)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=li,this.type===ns?(q.map.depthTexture.compareFunction=it?bc:Sc,q.map.depthTexture.minFilter=xn,q.map.depthTexture.magFilter=xn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=on,q.map.depthTexture.magFilter=on);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let pt=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Y.isPointLight!==!0&&q.updateMatrices(Y,y);let ut=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:y.layers;for(let rt=0;rt<pt;rt++){let ct=q.getCamera(rt);if(Y.isPointLight){let W=q.camera,xt=q.matrix,Tt=Y.distance||W.far;Tt!==W.far&&(W.far=Tt,W.updateProjectionMatrix()),ia.setFromMatrixPosition(Y.matrixWorld),W.position.copy(ia),Fc.copy(W.position),Fc.add(v_[rt]),W.up.copy(y_[rt]),W.lookAt(Fc),W.updateMatrixWorld(),xt.makeTranslation(-ia.x,-ia.y,-ia.z),Wu.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Wu,W.coordinateSystem,W.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(q.map),i.clear());let W=q.getViewport(rt);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),F.viewport(a)}n=q.getFrustum(rt),S(x,y,ct,Y,ut,this.type)}q.isPointLightShadow!==!0&&this.type===Gs&&v(q,y),q.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(O,A,I)};function v(E,x){let y=t.update(M);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ye(s.x,s.y,{format:Bi,type:tn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,y,d,M,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,y,p,M,null)}function w(E,x,y,O){let A=null,I=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)A=I;else if(A=y.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=A.uuid,j=x.uuid,N=c[F];N===void 0&&(N={},c[F]=N);let B=N[j];B===void 0&&(B=A.clone(),N[j]=B,x.addEventListener("dispose",C)),A=B}if(A.visible=x.visible,A.wireframe=x.wireframe,O===Gs?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=i.properties.get(A);F.light=y}return A}function S(E,x,y,O,A,I){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Gs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let N=t.update(E),B=E.material;if(Array.isArray(B)){let Y=N.groups;for(let q=0,ot=Y.length;q<ot;q++){let it=Y[q],pt=B[it.materialIndex];if(pt&&pt.visible){let ut=w(E,pt,O,I);E.onBeforeShadow(i,E,x,y,N,ut,it),i.renderBufferDirect(y,null,N,ut,E,it),E.onAfterShadow(i,E,x,y,N,ut,it)}}}else if(B.visible){let Y=w(E,B,O,I);E.onBeforeShadow(i,E,x,y,N,Y,null),i.renderBufferDirect(y,null,N,Y,E,null),E.onAfterShadow(i,E,x,y,N,Y,null)}}let j=E.children;for(let N=0,B=j.length;N<B;N++)S(j[N],x,y,O,A,I)}function C(E){E.target.removeEventListener("dispose",C);for(let y in c){let O=c[y],A=E.target.uuid;A in O&&(O[A].dispose(),delete O[A])}}}function S_(i,t){function e(){let D=!1,tt=new ze,nt=null,vt=new ze(0,0,0,0);return{setMask:function(wt){nt!==wt&&!D&&(i.colorMask(wt,wt,wt,wt),nt=wt)},setLocked:function(wt){D=wt},setClear:function(wt,Ct,qt,re,Et){Et===!0&&(wt*=re,Ct*=re,qt*=re),tt.set(wt,Ct,qt,re),vt.equals(tt)===!1&&(i.clearColor(wt,Ct,qt,re),vt.copy(tt))},reset:function(){D=!1,nt=null,vt.set(-1,0,0,0)}}}function n(){let D=!1,tt=!1,nt=null,vt=null,wt=null;return{setReversed:function(Ct){if(tt!==Ct){let qt=t.get("EXT_clip_control");Ct?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),tt=Ct;let re=wt;wt=null,this.setClear(re)}},getReversed:function(){return tt},setTest:function(Ct){Ct?bt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Ct){nt!==Ct&&!D&&(i.depthMask(Ct),nt=Ct)},setFunc:function(Ct){if(tt&&(Ct=pu[Ct]),vt!==Ct){switch(Ct){case ka:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Ct}},setLocked:function(Ct){D=Ct},setClear:function(Ct){wt!==Ct&&(wt=Ct,tt&&(Ct=1-Ct),i.clearDepth(Ct))},reset:function(){D=!1,nt=null,vt=null,wt=null,tt=!1}}}function s(){let D=!1,tt=null,nt=null,vt=null,wt=null,Ct=null,qt=null,re=null,Et=null;return{setTest:function(ee){D||(ee?bt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ee){tt!==ee&&!D&&(i.stencilMask(ee),tt=ee)},setFunc:function(ee,ge,Vt){(nt!==ee||vt!==ge||wt!==Vt)&&(i.stencilFunc(ee,ge,Vt),nt=ee,vt=ge,wt=Vt)},setOp:function(ee,ge,Vt){(Ct!==ee||qt!==ge||re!==Vt)&&(i.stencilOp(ee,ge,Vt),Ct=ee,qt=ge,re=Vt)},setLocked:function(ee){D=ee},setClear:function(ee){Et!==ee&&(i.clearStencil(ee),Et=ee)},reset:function(){D=!1,tt=null,nt=null,vt=null,wt=null,Ct=null,qt=null,re=null,Et=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},f={},d={},p=new WeakMap,g=[],M=null,h=!1,m=null,v=null,w=null,S=null,C=null,E=null,x=null,y=new ne(0,0,0),O=0,A=!1,I=null,F=null,j=null,N=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ot=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(it)[1]),q=ot>=1):it.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),q=ot>=2);let pt=null,ut={},rt=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),W=new ze().fromArray(rt),xt=new ze().fromArray(ct);function Tt(D,tt,nt,vt){let wt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(D,Ct),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<nt;qt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(tt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Ct}let Gt={};Gt[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),a.setFunc(Es),Nt(!1),Dt(cc),bt(i.CULL_FACE),At(mi);function bt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Pt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function fe(D,tt){return d[D]!==tt?(i.bindFramebuffer(D,tt),d[D]=tt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Zt(D,tt){let nt=g,vt=!1;if(D){nt=p.get(tt),nt===void 0&&(nt=[],p.set(tt,nt));let wt=D.textures;if(nt.length!==wt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,qt=wt.length;Ct<qt;Ct++)nt[Ct]=i.COLOR_ATTACHMENT0+Ct;nt.length=wt.length,vt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(nt)}function ue(D){return M!==D?(i.useProgram(D),M=D,!0):!1}let te={[ss]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};te[Bh]=i.MIN,te[kh]=i.MAX;let ft={[zh]:i.ZERO,[Gh]:i.ONE,[Vh]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Hh]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Jh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function At(D,tt,nt,vt,wt,Ct,qt,re,Et,ee){if(D===mi){h===!0&&(Pt(i.BLEND),h=!1);return}if(h===!1&&(bt(i.BLEND),h=!0),D!==Uh){if(D!==m||ee!==A){if((v!==ss||C!==ss)&&(i.blendEquation(i.FUNC_ADD),v=ss,C=ss),ee)switch(D){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pe("WebGLState: Invalid blending: ",D);break}else switch(D){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hc:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uc:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",D);break}w=null,S=null,E=null,x=null,y.set(0,0,0),O=0,m=D,A=ee}return}wt=wt||tt,Ct=Ct||nt,qt=qt||vt,(tt!==v||wt!==C)&&(i.blendEquationSeparate(te[tt],te[wt]),v=tt,C=wt),(nt!==w||vt!==S||Ct!==E||qt!==x)&&(i.blendFuncSeparate(ft[nt],ft[vt],ft[Ct],ft[qt]),w=nt,S=vt,E=Ct,x=qt),(re.equals(y)===!1||Et!==O)&&(i.blendColor(re.r,re.g,re.b,Et),y.copy(re),O=Et),m=D,A=!1}function yt(D,tt){D.side===cn?Pt(i.CULL_FACE):bt(i.CULL_FACE);let nt=D.side===dn;tt&&(nt=!nt),Nt(nt),D.blending===Vs&&D.transparent===!1?At(mi):At(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let vt=D.stencilWrite;o.setTest(vt),vt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function Dt(D){D!==Lh?(bt(i.CULL_FACE),D!==F&&(D===cc?i.cullFace(i.BACK):D===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),F=D}function ie(D){D!==j&&(q&&i.lineWidth(D),j=D)}function Lt(D,tt,nt){D?(bt(i.POLYGON_OFFSET_FILL),(N!==tt||B!==nt)&&(N=tt,B=nt,a.getReversed()&&(tt=-tt,nt=-nt),i.polygonOffset(tt,nt))):Pt(i.POLYGON_OFFSET_FILL)}function se(D){D?bt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function jt(D){D===void 0&&(D=i.TEXTURE0+Y-1),pt!==D&&(i.activeTexture(D),pt=D)}function ae(D,tt,nt){nt===void 0&&(pt===null?nt=i.TEXTURE0+Y-1:nt=pt);let vt=ut[nt];vt===void 0&&(vt={type:void 0,texture:void 0},ut[nt]=vt),(vt.type!==D||vt.texture!==tt)&&(pt!==nt&&(i.activeTexture(nt),pt=nt),i.bindTexture(D,tt||Gt[D]),vt.type=D,vt.texture=tt)}function k(){let D=ut[pt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ce(){try{i.compressedTexImage2D(...arguments)}catch(D){pe("WebGLState:",D)}}function Kt(){try{i.compressedTexImage3D(...arguments)}catch(D){pe("WebGLState:",D)}}function me(){try{i.texSubImage2D(...arguments)}catch(D){pe("WebGLState:",D)}}function It(){try{i.texSubImage3D(...arguments)}catch(D){pe("WebGLState:",D)}}function Le(){try{i.compressedTexSubImage2D(...arguments)}catch(D){pe("WebGLState:",D)}}function Xt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){pe("WebGLState:",D)}}function Bt(){try{i.texStorage2D(...arguments)}catch(D){pe("WebGLState:",D)}}function R(){try{i.texStorage3D(...arguments)}catch(D){pe("WebGLState:",D)}}function _(){try{i.texImage2D(...arguments)}catch(D){pe("WebGLState:",D)}}function L(){try{i.texImage3D(...arguments)}catch(D){pe("WebGLState:",D)}}function J(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function z(D,tt){f[D]!==tt&&(i.pixelStorei(D,tt),f[D]=tt)}function dt(D){W.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),W.copy(D))}function gt(D){xt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),xt.copy(D))}function Z(D,tt){let nt=c.get(tt);nt===void 0&&(nt=new WeakMap,c.set(tt,nt));let vt=nt.get(D);vt===void 0&&(vt=i.getUniformBlockIndex(tt,D.name),i.uniformBlockBinding(tt,vt,vt),nt.set(D,vt))}function et(D,tt,nt){let wt=c.get(tt).get(D);l[wt]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,wt,nt),l[wt]=nt)}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},pt=null,ut={},d={},l={},p=new WeakMap,g=[],M=null,h=!1,m=null,v=null,w=null,S=null,C=null,E=null,x=null,y=new ne(0,0,0),O=0,A=!1,I=null,F=null,j=null,N=null,B=null,W.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:Pt,bindFramebuffer:fe,drawBuffers:Zt,useProgram:ue,setBlending:At,setMaterial:yt,setFlipSided:Nt,setCullFace:Dt,setLineWidth:ie,setPolygonOffset:Lt,setScissorTest:se,activeTexture:jt,bindTexture:ae,unbindTexture:k,compressedTexImage2D:Ce,compressedTexImage3D:Kt,texImage2D:_,texImage3D:L,pixelStorei:z,getParameter:J,updateUBOMapping:Z,uniformBlockBinding:et,texStorage2D:Bt,texStorage3D:R,texSubImage2D:me,texSubImage3D:It,compressedTexSubImage2D:Le,compressedTexSubImage3D:Xt,scissor:dt,viewport:gt,reset:ht}}function b_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap,f=new Set,d,p=new WeakMap,g=new Set,M=new FinalizationRegistry(R=>g.delete(R)),h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,_){return h?new OffscreenCanvas(R,_):pr("canvas")}function v(R,_,L){let J=1,z=Bt(R);if((z.width>L||z.height>L)&&(J=L/Math.max(z.width,z.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let dt=Math.floor(J*z.width),gt=Math.floor(J*z.height);d===void 0&&(d=m(dt,gt));let Z=_?m(dt,gt):d;return Z.width=dt,Z.height=gt,Z.getContext("2d").drawImage(R,0,0,dt,gt),he("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+dt+"x"+gt+")."),Z}else return"data"in R&&he("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),R;return R}function w(R){return R.generateMipmaps}function S(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,_,L,J,z,dt=!1){if(R!==null){if(i[R]!==void 0)return i[R];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;J&&(gt=t.get("EXT_texture_norm16"),gt||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(L===i.FLOAT&&(Z=i.R32F),L===i.HALF_FLOAT&&(Z=i.R16F),L===i.UNSIGNED_BYTE&&(Z=i.R8),L===i.UNSIGNED_SHORT&&gt&&(Z=gt.R16_EXT),L===i.SHORT&&gt&&(Z=gt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Z=i.R8UI),L===i.UNSIGNED_SHORT&&(Z=i.R16UI),L===i.UNSIGNED_INT&&(Z=i.R32UI),L===i.BYTE&&(Z=i.R8I),L===i.SHORT&&(Z=i.R16I),L===i.INT&&(Z=i.R32I)),_===i.RG&&(L===i.FLOAT&&(Z=i.RG32F),L===i.HALF_FLOAT&&(Z=i.RG16F),L===i.UNSIGNED_BYTE&&(Z=i.RG8),L===i.UNSIGNED_SHORT&&gt&&(Z=gt.RG16_EXT),L===i.SHORT&&gt&&(Z=gt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Z=i.RG8UI),L===i.UNSIGNED_SHORT&&(Z=i.RG16UI),L===i.UNSIGNED_INT&&(Z=i.RG32UI),L===i.BYTE&&(Z=i.RG8I),L===i.SHORT&&(Z=i.RG16I),L===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),L===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),L===i.UNSIGNED_INT&&(Z=i.RGB32UI),L===i.BYTE&&(Z=i.RGB8I),L===i.SHORT&&(Z=i.RGB16I),L===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),L===i.UNSIGNED_INT&&(Z=i.RGBA32UI),L===i.BYTE&&(Z=i.RGBA8I),L===i.SHORT&&(Z=i.RGBA16I),L===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_SHORT&&gt&&(Z=gt.RGB16_EXT),L===i.SHORT&&gt&&(Z=gt.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){let et=dt?fr:Te.getTransfer(z);L===i.FLOAT&&(Z=i.RGBA32F),L===i.HALF_FLOAT&&(Z=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Z=et===Ue?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&gt&&(Z=gt.RGBA16_EXT),L===i.SHORT&&gt&&(Z=gt.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,_){let L;return R?_===null||_===Wn||_===os?L=i.DEPTH24_STENCIL8:_===Bn?L=i.DEPTH32F_STENCIL8:_===Ws&&(L=i.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===os?L=i.DEPTH_COMPONENT24:_===Bn?L=i.DEPTH_COMPONENT32F:_===Ws&&(L=i.DEPTH_COMPONENT16),L}function y(R,_){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function O(R){let _=new WeakRef(R);n.get(R).__ref=_,g.add(_),M.register(R,_,_)}function A(R){let _=n.get(R).__ref;_!==void 0&&(g.delete(_),M.unregister(_))}function I(R){j(R.target)}function F(R){N(R.target)}function j(R){R.removeEventListener("dispose",I),A(R),Y(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function N(R){R.removeEventListener("dispose",F),A(R),ot(R)}function B(){for(let R of g){let _=R.deref();_!==void 0&&(_.isRenderTarget===!0?N(_):j(_))}g.clear(),f.clear()}function Y(R){let _=n.get(R);if(_.__webglInit===void 0)return;let L=R.source,J=p.get(L);if(J){let z=J[_.__cacheKey];z.usedTimes--,z.usedTimes===0&&q(R),Object.keys(J).length===0&&p.delete(L)}n.remove(R)}function q(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let L=R.source,J=p.get(L);delete J[_.__cacheKey],a.memory.textures--}function ot(R){let _=n.get(R);_.__depthDisposeCallback&&_.__depthDisposeCallback();let L=R.depthTexture;if(L&&L.renderTarget===R&&j(L),R.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let dt=0;dt<_.__webglFramebuffer[z].length;dt++)i.deleteFramebuffer(_.__webglFramebuffer[z][dt]);else i.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)i.deleteFramebuffer(_.__webglFramebuffer[z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let J=R.textures;for(let z=0,dt=J.length;z<dt;z++){let gt=n.get(J[z]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(J[z])}n.remove(R)}let it=0;function pt(){it=0}function ut(){return it}function rt(R){it=R}function ct(){let R=it;return R>=s.maxTextures&&he("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),it+=1,R}function W(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.mipmapsAutoUpdate),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function xt(R,_){let L=n.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&L.__version!==R.version){let J=R.image;if(J===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(L,R,_);return}}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function Tt(R,_){let L=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){yt(L,R,_);return}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function Gt(R,_){let L=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){yt(L,R,_);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function bt(R,_){let L=n.get(R);if(R.version>0&&L.__version!==R.version){Nt(L,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}let Pt={[Un]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},fe={[on]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},Zt={[ru]:i.NEVER,[wc]:i.ALWAYS,[au]:i.LESS,[Sc]:i.LEQUAL,[ou]:i.EQUAL,[bc]:i.GEQUAL,[lu]:i.GREATER,[cu]:i.NOTEQUAL};function ue(R,_){if(_.type===Bn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===yo||_.magFilter===$r||_.magFilter===gi||_.minFilter===xn||_.minFilter===yo||_.minFilter===$r||_.minFilter===gi)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Pt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Pt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Pt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,fe[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===on||_.minFilter!==$r&&_.minFilter!==gi||_.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(R,_){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",I),O(_));let J=_.source,z=p.get(J);z===void 0&&(z={},p.set(J,z));let dt=W(_);if(dt!==R.__cacheKey){z[dt]===void 0&&(z[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),z[dt].usedTimes++;let gt=z[R.__cacheKey];gt!==void 0&&(z[R.__cacheKey].usedTimes--,gt.usedTimes===0&&q(_)),R.__cacheKey=dt,R.__webglTexture=z[dt].texture}return L}function ft(R,_,L){return Math.floor(Math.floor(R/L)/_)}function At(R,_,L,J){let dt=R.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,J,_.data);else{dt.sort((D,tt)=>D.start-tt.start);let gt=0;for(let D=1;D<dt.length;D++){let tt=dt[gt],nt=dt[D],vt=tt.start+tt.count,wt=ft(nt.start,_.width,4),Ct=ft(tt.start,_.width,4);nt.start<=vt+1&&wt===Ct&&ft(nt.start+nt.count-1,_.width,4)===wt?tt.count=Math.max(tt.count,nt.start+nt.count-tt.start):(++gt,dt[gt]=nt)}dt.length=gt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let D=0,tt=dt.length;D<tt;D++){let nt=dt[D],vt=Math.floor(nt.start/4),wt=Math.ceil(nt.count/4),Ct=vt%_.width,qt=Math.floor(vt/_.width),re=wt,Et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,qt),e.texSubImage2D(i.TEXTURE_2D,0,Ct,qt,re,Et,L,J,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function yt(R,_,L){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let z=te(R,_),dt=_.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+L);let gt=n.get(dt);if(dt.version!==gt.__version||z===!0){if(e.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Et=Te.getPrimaries(Te.workingColorSpace),ee=_.colorSpace===qn?null:Te.getPrimaries(_.colorSpace),ge=_.colorSpace===qn||Et===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let et=v(_.image,!1,s.maxTextureSize);et=Xt(_,et);let ht=r.convert(_.format,_.colorSpace),D=r.convert(_.type),tt=E(_.internalFormat,ht,D,_.normalized,_.colorSpace,_.isVideoTexture);ue(J,_);let nt,vt=_.mipmaps,wt=_.isVideoTexture!==!0,Ct=gt.__version===void 0||z===!0,qt=dt.dataReady,re=y(_,et);if(_.isDepthTexture)tt=x(_.format===_i,_.type),Ct&&(wt?e.texStorage2D(i.TEXTURE_2D,1,tt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,tt,et.width,et.height,0,ht,D,null));else if(_.isDataTexture)if(vt.length>0){wt&&Ct&&e.texStorage2D(i.TEXTURE_2D,re,tt,vt[0].width,vt[0].height);for(let Et=0,ee=vt.length;Et<ee;Et++)nt=vt[Et],wt?qt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,nt.width,nt.height,ht,D,nt.data):e.texImage2D(i.TEXTURE_2D,Et,tt,nt.width,nt.height,0,ht,D,nt.data);_.generateMipmaps=!1}else wt?(Ct&&e.texStorage2D(i.TEXTURE_2D,re,tt,et.width,et.height),qt&&At(_,et,ht,D)):e.texImage2D(i.TEXTURE_2D,0,tt,et.width,et.height,0,ht,D,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){wt&&Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,re,tt,vt[0].width,vt[0].height,et.depth);for(let Et=0,ee=vt.length;Et<ee;Et++)if(nt=vt[Et],_.format!==Xn)if(ht!==null)if(wt){if(qt)if(_.layerUpdates.size>0){let ge=Nc(nt.width,nt.height,_.format,_.type);for(let Vt of _.layerUpdates){let Ae=nt.data.subarray(Vt*ge/nt.data.BYTES_PER_ELEMENT,(Vt+1)*ge/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,Vt,nt.width,nt.height,1,ht,Ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,nt.width,nt.height,et.depth,ht,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,tt,nt.width,nt.height,et.depth,0,nt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?qt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,nt.width,nt.height,et.depth,ht,D,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,tt,nt.width,nt.height,et.depth,0,ht,D,nt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{wt&&Ct&&e.texStorage2D(i.TEXTURE_2D,re,tt,vt[0].width,vt[0].height);for(let Et=0,ee=vt.length;Et<ee;Et++)nt=vt[Et],_.format!==Xn?ht!==null?wt?qt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,nt.width,nt.height,ht,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,tt,nt.width,nt.height,0,nt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?qt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,nt.width,nt.height,ht,D,nt.data):e.texImage2D(i.TEXTURE_2D,Et,tt,nt.width,nt.height,0,ht,D,nt.data)}else if(_.isDataArrayTexture)if(wt){if(Ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,re,tt,et.width,et.height,et.depth),qt)if(_.layerUpdates.size>0){let Et=Nc(et.width,et.height,_.format,_.type);for(let ee of _.layerUpdates){let ge=et.data.subarray(ee*Et/et.data.BYTES_PER_ELEMENT,(ee+1)*Et/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,et.width,et.height,1,ht,D,ge)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,D,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,et.width,et.height,et.depth,0,ht,D,et.data);else if(_.isData3DTexture)wt?(Ct&&e.texStorage3D(i.TEXTURE_3D,re,tt,et.width,et.height,et.depth),qt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,D,et.data)):e.texImage3D(i.TEXTURE_3D,0,tt,et.width,et.height,et.depth,0,ht,D,et.data);else if(_.isFramebufferTexture){if(Ct)if(wt)e.texStorage2D(i.TEXTURE_2D,re,tt,et.width,et.height);else{let Et=et.width,ee=et.height;for(let ge=0;ge<re;ge++)e.texImage2D(i.TEXTURE_2D,ge,tt,Et,ee,0,ht,D,null),Et>>=1,ee>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Et=i.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),et.parentNode!==Et){Et.appendChild(et),f.add(_),Et.onpaint=ee=>{let ge=ee.changedElements;for(let Vt of f)ge.includes(Vt.image)&&(Vt.needsUpdate=!0)},Et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let ge=i.RGBA,Vt=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,Vt,Ae,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(vt.length>0){if(wt&&Ct){let Et=Bt(vt[0]);e.texStorage2D(i.TEXTURE_2D,re,tt,Et.width,Et.height)}for(let Et=0,ee=vt.length;Et<ee;Et++)nt=vt[Et],wt?qt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,ht,D,nt):e.texImage2D(i.TEXTURE_2D,Et,tt,ht,D,nt);_.generateMipmaps=!1}else if(wt){if(Ct){let Et=Bt(et);e.texStorage2D(i.TEXTURE_2D,re,tt,Et.width,Et.height)}qt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,D,et)}else e.texImage2D(i.TEXTURE_2D,0,tt,ht,D,et);w(_)&&_.mipmapsAutoUpdate===!0&&S(J),gt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Nt(R,_,L){if(_.image.length!==6)return;let J=te(R,_),z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+L);let dt=n.get(z);if(z.version!==dt.__version||J===!0){e.activeTexture(i.TEXTURE0+L);let gt=Te.getPrimaries(Te.workingColorSpace),Z=_.colorSpace===qn?null:Te.getPrimaries(_.colorSpace),et=_.colorSpace===qn||gt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ht=_.isCompressedTexture||_.image[0].isCompressedTexture,D=_.image[0]&&_.image[0].isDataTexture,tt=[];for(let Vt=0;Vt<6;Vt++)!ht&&!D?tt[Vt]=v(_.image[Vt],!0,s.maxCubemapSize):tt[Vt]=D?_.image[Vt].image:_.image[Vt],tt[Vt]=Xt(_,tt[Vt]);let nt=tt[0],vt=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),Ct=E(_.internalFormat,vt,wt,_.normalized,_.colorSpace),qt=_.isVideoTexture!==!0,re=dt.__version===void 0||J===!0,Et=z.dataReady,ee=y(_,nt);ue(i.TEXTURE_CUBE_MAP,_);let ge;if(_.isDepthTexture){if(Ct=x(_.format===_i,_.type),re)if(qt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ct,nt.width,nt.height);else for(let Vt=0;Vt<6;Vt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Ct,nt.width,nt.height,0,vt,wt,null)}else if(ht){qt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Ct,nt.width,nt.height);for(let Vt=0;Vt<6;Vt++){ge=tt[Vt].mipmaps;for(let Ae=0;Ae<ge.length;Ae++){let ke=ge[Ae];_.format!==Xn?vt!==null?qt?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ae,0,0,ke.width,ke.height,vt,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ae,Ct,ke.width,ke.height,0,ke.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ae,0,0,ke.width,ke.height,vt,wt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ae,Ct,ke.width,ke.height,0,vt,wt,ke.data)}}}else{if(ge=_.mipmaps,qt&&re){ge.length>0&&ee++;let Vt=Bt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Ct,Vt.width,Vt.height)}for(let Vt=0;Vt<6;Vt++)if(D){qt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,0,0,tt[Vt].width,tt[Vt].height,vt,wt,tt[Vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Ct,tt[Vt].width,tt[Vt].height,0,vt,wt,tt[Vt].data);for(let Ae=0;Ae<ge.length;Ae++){let kn=ge[Ae].image[Vt].image;qt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ae+1,0,0,kn.width,kn.height,vt,wt,kn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ae+1,Ct,kn.width,kn.height,0,vt,wt,kn.data)}}else{qt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,0,0,vt,wt,tt[Vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Ct,vt,wt,tt[Vt]);for(let Ae=0;Ae<ge.length;Ae++){let ke=ge[Ae];qt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ae+1,0,0,vt,wt,ke.image[Vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ae+1,Ct,vt,wt,ke.image[Vt])}}}w(_)&&_.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),dt.__version=z.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Dt(R,_,L,J,z,dt){let gt=r.convert(L.format,L.colorSpace),Z=r.convert(L.type),et=E(L.internalFormat,gt,Z,L.normalized,L.colorSpace),ht=n.get(_),D=n.get(L);if(D.__renderTarget=_,!ht.__hasExternalTextures){let tt=Math.max(1,_.width>>dt),nt=Math.max(1,_.height>>dt);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?e.texImage3D(z,dt,et,tt,nt,_.depth,0,gt,Z,null):e.texImage2D(z,dt,et,tt,nt,0,gt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),It(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,z,D.__webglTexture,0,me(_)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,z,D.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(R,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let J=_.depthTexture,z=J&&J.isDepthTexture?J.type:null,dt=x(_.stencilBuffer,z),gt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(_),dt,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(_),dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,R)}else{let J=_.textures;for(let z=0;z<J.length;z++){let dt=J[z],gt=r.convert(dt.format,dt.colorSpace),Z=r.convert(dt.type),et=E(dt.internalFormat,gt,Z,dt.normalized,dt.colorSpace);It(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(_),et,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(_),et,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,et,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(R,_,L){let J=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let z=n.get(_.depthTexture);z.__renderTarget=_;let dt=J?_.depthTexture.image[0]:_.depthTexture.image;(!z.__webglTexture||dt.width!==_.width||dt.height!==_.height)&&(dt.width=_.width,dt.height=_.height,_.depthTexture.needsUpdate=!0),J?bt(_.depthTexture,0):xt(_.depthTexture,0);let gt=z.__webglTexture,Z=me(_),et=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,ht=_.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===li)It(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,et,gt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ht,et,gt,0);else if(_.depthTexture.format===_i)It(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,et,gt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ht,et,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(R){let _=n.get(R),L=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",z)};J.addEventListener("dispose",z),_.__depthDisposeCallback=z}_.__boundDepthTexture=J}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let J=0;J<6;J++)Lt(_.__webglFramebuffer[J],R,J);else R.texture.mipmaps.length>0?Lt(_.__webglFramebuffer[0],R,0):Lt(_.__webglFramebuffer,R,0);else if(L){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),ie(_.__webglDepthbuffer[J],R,!1);else{let z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,dt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ie(_.__webglDepthbuffer,R,!1);else{let z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(R,_,L){let J=n.get(R);_!==void 0&&Dt(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&se(R)}function ae(R){let _=R.texture,L=n.get(R),J=n.get(_);R.addEventListener("dispose",F),O(R);let z=R.textures,dt=R.isWebGLCubeRenderTarget===!0,gt=z.length>1;if(gt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),dt){L.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps.length>0){L.__webglFramebuffer[Z]=[];for(let et=0;et<_.mipmaps.length;et++)L.__webglFramebuffer[Z][et]=i.createFramebuffer()}else L.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps.length>0){L.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)L.__webglFramebuffer[Z]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(gt)for(let Z=0,et=z.length;Z<et;Z++){let ht=n.get(z[Z]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&It(R)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Z=0;Z<z.length;Z++){let et=z[Z];L.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[Z]);let ht=r.convert(et.format,et.colorSpace),D=r.convert(et.type),tt=E(et.internalFormat,ht,D,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),nt=me(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,L.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(L.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ue(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)Dt(L.__webglFramebuffer[Z][et],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et);else Dt(L.__webglFramebuffer[Z],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(_)?S(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Z=0,et=z.length;Z<et;Z++){let ht=z[Z],D=n.get(ht),tt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,D.__webglTexture),ue(tt,ht),Dt(L.__webglFramebuffer,R,ht,i.COLOR_ATTACHMENT0+Z,tt,0),w(ht)&&S(tt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,J.__webglTexture),ue(Z,_),_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)Dt(L.__webglFramebuffer[et],R,_,i.COLOR_ATTACHMENT0,Z,et);else Dt(L.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,Z,0);w(_)?S(Z):_.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&se(R)}function k(R){let _=R.textures;for(let L=0,J=_.length;L<J;L++){let z=_[L];if(w(z)&&z.mipmapsAutoUpdate===!0){let dt=C(R),gt=n.get(z).__webglTexture;e.bindTexture(dt,gt),S(dt),e.unbindTexture()}}}let Ce=[];function Kt(R){if(R.samples>0){if(It(R)===!1){let _=R.textures,L=R.width,J=R.height,z=i.COLOR_BUFFER_BIT,dt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(R),Z=_.length>1;if(Z)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);let D=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,L,J,0,0,L,J,z,i.NEAREST),l===!0&&(Ce.length=0,Ce.push(i.COLOR_ATTACHMENT0+ht),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ce.push(dt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ht]);let D=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function me(R){return Math.min(s.maxSamples,R.samples)}function It(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Le(R){let _=a.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function Xt(R,_){let L=R.colorSpace,J=R.format,z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==dr&&L!==qn&&(Te.getTransfer(L)===Ue?(J!==Xn||z!==Mn)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",L)),_}function Bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ct,this.resetTextureUnits=pt,this.getTextureUnits=ut,this.setTextureUnits=rt,this.setTexture2D=xt,this.setTexture2DArray=Tt,this.setTexture3D=Gt,this.setTextureCube=bt,this.rebindTextures=jt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=It,this.dispose=B}function w_(i,t){function e(n,s=qn){let r,a=Te.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===So)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gc)return i.BYTE;if(n===_c)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===Mo)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===yc)return i.ALPHA;if(n===Mc)return i.RGB;if(n===Xn)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===wo)return i.RED;if(n===To)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===Jr||n===jr||n===Qr||n===ta)if(a===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Ro||n===Po||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Do||n===No||n===Uo||n===Fo||n===ea||n===Oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Do)return a===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uo)return r.COMPRESSED_R11_EAC;if(n===Fo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return r.COMPRESSED_RG11_EAC;if(n===Oo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bo||n===ko||n===zo||n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Ko||n===$o||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Qo||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return a===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===nl||n===na||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===el)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:T_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null,M=typeof XRWebGLBinding<"u",h=new Hc,m={},v=e.getContextAttributes(),w=null,S=null,C=[],E=[],x=new Mt,y=null,O=null,A=new un;A.viewport=new ze;let I=new un;I.viewport=new ze;let F=[A,I],j=new _o,N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let xt=C[W];return xt===void 0&&(xt=new Is,C[W]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(W){let xt=C[W];return xt===void 0&&(xt=new Is,C[W]=xt),xt.getGripSpace()},this.getHand=function(W){let xt=C[W];return xt===void 0&&(xt=new Is,C[W]=xt),xt.getHandSpace()};function Y(W){let xt=E.indexOf(W.inputSource);if(xt===-1)return;let Tt=C[xt];Tt!==void 0&&(Tt.update(W.inputSource,W.frame,c||a),Tt.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ot);for(let W=0;W<C.length;W++){let xt=E[W];xt!==null&&(E[W]=null,C[W].disconnect(xt))}N=null,B=null,h.reset();for(let W in m)delete m[W];if(t.setRenderTarget(w),p=null,d=null,f=null,s=null,S=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(x.width,x.height,!1),O!==null){let W=O.camera;W.fov=O.fov,W.zoom=O.zoom,W.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ot),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Gt=null,bt=null;v.depth&&(bt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=v.stencil?_i:li,Gt=v.stencil?os:Wn);let Pt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ye(d.textureWidth,d.textureHeight,{format:Xn,type:Mn,depthTexture:new fi(d.textureWidth,d.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ye(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ot(W){for(let xt=0;xt<W.removed.length;xt++){let Tt=W.removed[xt],Gt=E.indexOf(Tt);Gt>=0&&(E[Gt]=null,C[Gt].disconnect(Tt))}for(let xt=0;xt<W.added.length;xt++){let Tt=W.added[xt],Gt=E.indexOf(Tt);if(Gt===-1){for(let Pt=0;Pt<C.length;Pt++)if(Pt>=E.length){E.push(Tt),Gt=Pt;break}else if(E[Pt]===null){E[Pt]=Tt,Gt=Pt;break}if(Gt===-1)break}let bt=C[Gt];bt&&bt.connect(Tt)}}function it(W,xt){xt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(xt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let xt=W.near,Tt=W.far;h.texture!==null&&(h.depthNear>0&&(xt=h.depthNear),h.depthFar>0&&(Tt=h.depthFar)),j.near=I.near=A.near=xt,j.far=I.far=A.far=Tt,(N!==j.near||B!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),N=j.near,B=j.far),j.layers.mask=W.layers.mask|6,A.layers.mask=j.layers.mask&-5,I.layers.mask=j.layers.mask&-3;let Gt=W.parent,bt=j.cameras;it(j,Gt);for(let Pt=0;Pt<bt.length;Pt++)it(bt[Pt],Gt);j.projectionMatrix.copy(A.projectionMatrix),j.projectionMatrixInverse.copy(A.projectionMatrixInverse),O===null&&W.isPerspectiveCamera&&(O={camera:W,fov:W.fov,zoom:W.zoom}),pt(W,j,Gt)};function pt(W,xt,Tt){Tt===null?W.matrix.copy(xt.matrixWorld):(W.matrix.copy(Tt.matrixWorld),W.matrix.invert(),W.matrix.multiply(xt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(xt.projectionMatrix),W.projectionMatrixInverse.copy(xt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ki*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(W){return m[W]};let ut=null;function rt(W,xt){if(u=xt.getViewerPose(c||a),g=xt,u!==null){let Tt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Gt=!1;Tt.length!==j.cameras.length&&(j.cameras.length=0,Gt=!0);for(let Zt=0;Zt<Tt.length;Zt++){let ue=Tt[Zt],te=null;if(p!==null)te=p.getViewport(ue);else{let At=f.getViewSubImage(d,ue);te=At.viewport,Zt===0&&(t.setRenderTargetTextures(S,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(S))}let ft=F[Zt];ft===void 0&&(ft=new un,ft.layers.enable(Zt),ft.viewport=new ze,F[Zt]=ft),ft.matrix.fromArray(ue.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ue.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(te.x,te.y,te.width,te.height),Zt===0&&(j.matrix.copy(ft.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Gt===!0&&j.cameras.push(ft)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let Zt=f.getDepthInformation(Tt[0]);Zt&&Zt.isValid&&Zt.texture&&h.init(Zt,s.renderState)}if(bt&&bt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let Zt=0;Zt<Tt.length;Zt++){let ue=Tt[Zt].camera;if(ue){let te=m[ue];te||(te=new wr,m[ue]=te);let ft=f.getCameraImage(ue);te.sourceTexture=ft}}}}for(let Tt=0;Tt<C.length;Tt++){let Gt=E[Tt],bt=C[Tt];Gt!==null&&bt!==void 0&&bt.update(Gt,xt,c||a)}ut&&ut(W,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),g=null}let ct=new Xu;ct.setAnimationLoop(rt),this.setAnimationLoop=function(W){ut=W},this.dispose=function(){}}},A_=new Pe,ed=new ve;ed.set(-1,0,0,0,1,0,0,0,1);function C_(i,t){function e(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,Ic(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function s(h,m,v,w,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(h,m):m.isMeshLambertMaterial?(r(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(h,m),f(h,m)):m.isMeshPhongMaterial?(r(h,m),u(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(h,m),d(h,m),m.isMeshPhysicalMaterial&&p(h,m,S)):m.isMeshMatcapMaterial?(r(h,m),g(h,m)):m.isMeshDepthMaterial?r(h,m):m.isMeshDistanceMaterial?(r(h,m),M(h,m)):m.isMeshNormalMaterial?r(h,m):m.isLineBasicMaterial?(a(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?l(h,m,v,w):m.isSpriteMaterial?c(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,e(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===dn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,e(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===dn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,e(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,e(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let v=t.get(m),w=v.envMap,S=v.envMapRotation;w&&(h.envMap.value=w,h.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(ed),h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,h.aoMapTransform))}function a(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform))}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,v,w){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*v,h.scale.value=w*.5,m.map&&(h.map.value=m.map,e(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function f(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function p(h,m,v){h.ior.value=m.ior,m.diffuseRoughness>0&&(h.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.retroreflectivity>0&&(h.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=v.texture,h.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function M(h,m){let v=t.get(m).light;h.referencePosition.value.setFromMatrixPosition(v.matrixWorld),h.nearDistance.value=v.shadow.camera.near,h.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R_(i,t,e,n){let s={},r={};function a(v,w){let S=w.program;n.uniformBlockBinding(v,S,s[v.id])}function o(v,w){let S=s[v.id];S===void 0&&(g(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",h));let C=w.program;n.updateUBOMapping(v,C);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let w=i.createBuffer(),S=v.__size,C=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,x=S.length;E<x;E++){let y=S[E];if(Array.isArray(y))for(let O=0,A=y.length;O<A;O++)u(y[O],E,O,C);else u(y,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,w,S,C){if(d(v,w,S,C)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let y=0;for(let O=0;O<x.length;O++){let A=x[O],I=M(A,!0);f(A,v.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function f(v,w,S){typeof v=="number"||typeof v=="boolean"?w[S]=v:v.isMatrix3?(w[S]=v.elements[0],w[S+1]=v.elements[1],w[S+2]=v.elements[2],w[S+3]=0,w[S+4]=v.elements[3],w[S+5]=v.elements[4],w[S+6]=v.elements[5],w[S+7]=0,w[S+8]=v.elements[6],w[S+9]=v.elements[7],w[S+10]=v.elements[8],w[S+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-S),S):v.toArray(w,S)}function d(v,w,S,C){let E=v.value,x=w+"_"+S;if(Array.isArray(E)){C[x]===void 0&&(C[x]=[]);let y=C[x],O=!1;for(let A=0;A<E.length;A++)p(E[A],y,A)===!0&&(O=!0);return O}return p(E,C,x)}function p(v,w,S){if(w[S]===void 0)return typeof v=="number"||typeof v=="boolean"?w[S]=v:ArrayBuffer.isView(v)?w[S]=v.slice():w[S]=v.clone(),!0;{let C=w[S];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return w[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(v){let w=v.uniforms,S=0,C=16;for(let x=0,y=w.length;x<y;x++){let O=Array.isArray(w[x])?w[x]:[w[x]];for(let A=0,I=O.length;A<I;A++){let F=O[A],j=Array.isArray(F.value)?F.value:[F.value],N=Array.isArray(w[x])||Array.isArray(F.value),B=S;for(let q=0,ot=j.length;q<ot;q++){let it=j[q],pt=M(it,N),ut=S%C,rt=ut%pt.boundary,ct=ut+rt;S+=rt,ct!==0&&C-ct<pt.storage&&(S+=C-ct),q===0&&(B=S),S+=pt.storage}let Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((S-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let E=S%C;return E>0&&(S+=C-E),v.__size=S,v.__cache={},this}function M(v,w){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):he("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function h(v){let w=v.target;w.removeEventListener("dispose",h),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var P_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function I_(){return Jn===null&&(Jn=new vr(P_,16,16,Bi,tn),Jn.name="DFG_LUT",Jn.minFilter=xn,Jn.magFilter=xn,Jn.wrapS=Zn,Jn.wrapT=Zn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var ol=class{constructor(t={}){let{canvas:e=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=p,h=new Set([Ao,Eo,To]),m=new Set([Mn,Wn,Ws,os,So,bo]),v=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},C=null,E=null,x=[],y=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,F=null,j=null,N=null,B=null;this._outputColorSpace=hn;let Y=0,q=0,ot=null,it=-1,pt=null,ut=new ze,rt=new ze,ct=null,W=new ne(0),xt=0,Tt=e.width,Gt=e.height,bt=1,Pt=null,fe=null,Zt=new ze(0,0,Tt,Gt),ue=new ze(0,0,Tt,Gt),te=!1,ft=new Ci,At=new Ja,yt=!1,Nt=!1,Dt=new Pe,ie=new U,Lt=new ze,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function ae(){return ot===null?bt:1}let k=n;function Ce(T,G){return e.getContext(T,G)}let Kt,me,It,Le,Xt,Bt,R,_,L,J,z,dt,gt,Z,et,ht,D,tt,nt,vt,wt,Ct,qt;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),k===null){let G="webgl2";if(k=Ce(G,T),k===null)throw Ce(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(T){throw e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),pe("WebGLRenderer: "+T.message),T}function re(){Kt=new V0(k),Kt.init(),wt=new w_(k,Kt),me=new I0(k,Kt,t,wt),It=new S_(k,Kt),me.reversedDepthBuffer&&d&&It.buffers.depth.setReversed(!0),j=k.createFramebuffer(),N=k.createFramebuffer(),B=k.createFramebuffer(),Le=new X0(k),Xt=new l_,Bt=new b_(k,Kt,It,Xt,me,wt,Le),R=new G0(A),_=new Yf(k),Ct=new R0(k,_),L=new H0(k,_,Le,Ct),J=new Y0(k,L,_,Ct,Le),tt=new q0(k,me,Bt),et=new L0(Xt),z=new o_(A,R,Kt,me,Ct,et),dt=new C_(A,Xt),gt=new h_,Z=new g_(Kt),D=new C0(A,R,It,J,g,l),ht=new M_(A,J,me),qt=new R_(k,Le,me,It),nt=new P0(k,Kt,Le),vt=new W0(k,Kt,Le),Le.programs=z.programs,A.capabilities=me,A.extensions=Kt,A.properties=Xt,A.renderLists=gt,A.shadowMap=ht,A.state=It,A.info=Le}M!==Mn&&(O=new K0(M,e.width,e.height,o,s,r));let Et=new Wc(A,k);this.xr=Et,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=Kt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Kt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(T){T!==void 0&&(bt=T,this.setSize(Tt,Gt,!1))},this.getSize=function(T){return T.set(Tt,Gt)},this.setSize=function(T,G,lt=!0){if(Et.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=T,Gt=G,e.width=Math.floor(T*bt),e.height=Math.floor(G*bt),lt===!0&&(e.style.width=T+"px",e.style.height=G+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(Tt*bt,Gt*bt).floor()},this.setDrawingBufferSize=function(T,G,lt){Tt=T,Gt=G,bt=lt,e.width=Math.floor(T*lt),e.height=Math.floor(G*lt),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(M===Mn){pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ut)},this.getViewport=function(T){return T.copy(Zt)},this.setViewport=function(T,G,lt,$){T.isVector4?Zt.set(T.x,T.y,T.z,T.w):Zt.set(T,G,lt,$),It.viewport(ut.copy(Zt).multiplyScalar(ae()).round())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,G,lt,$){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,G,lt,$),It.scissor(rt.copy(ue).multiplyScalar(ae()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){It.setScissorTest(te=T)},this.setOpaqueSort=function(T){Pt=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,lt=!0){let $=0;if(T){let st=!1;if(ot!==null){let kt=ot.texture.format;st=h.has(kt)}if(st){let kt=ot.texture.type,Jt=m.has(kt),Ot=D.getClearColor(),Ht=D.getClearAlpha(),Qt=Ot.r,_e=Ot.g,Re=Ot.b;Jt?(v[0]=Qt,v[1]=_e,v[2]=Re,v[3]=Ht,k.clearBufferuiv(k.COLOR,0,v)):(w[0]=Qt,w[1]=_e,w[2]=Re,w[3]=Ht,k.clearBufferiv(k.COLOR,0,w))}else $|=k.COLOR_BUFFER_BIT}G&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),D.dispose(),gt.dispose(),Z.dispose(),Bt.dispose(),Xt.dispose(),R.dispose(),J.dispose(),L.dispose(),Ct.dispose(),qt.dispose(),z.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",St),Et.removeEventListener("sessionend",Ft),xe.stop()};function ee(T){T.preventDefault(),Ec("WebGLRenderer: Context Lost."),I=!0}function ge(){Ec("WebGLRenderer: Context Restored."),I=!1;let T=Le.autoReset,G=ht.enabled,lt=ht.autoUpdate,$=ht.needsUpdate,st=ht.type;re(),Le.autoReset=T,ht.enabled=G,ht.autoUpdate=lt,ht.needsUpdate=$,ht.type=st}function Vt(T){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ae(T){let G=T.target;G.removeEventListener("dispose",Ae),ke(G)}function ke(T){kn(T),Xt.remove(T)}function kn(T){let G=Xt.get(T).programs;G!==void 0&&(G.forEach(function(lt){z.releaseProgram(lt)}),T.isShaderMaterial&&z.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,lt,$,st,kt){G===null&&(G=se);let Jt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Ot=Ln(T,G,lt,$,st);It.setMaterial($,Jt);let Ht=lt.index,Qt=1;if($.wireframe===!0){if(Ht=L.getWireframeAttribute(lt),Ht===void 0)return;Qt=2}let _e=lt.drawRange,Re=lt.attributes.position,b=_e.start*Qt,P=(_e.start+_e.count)*Qt;kt!==null&&(b=Math.max(b,kt.start*Qt),P=Math.min(P,(kt.start+kt.count)*Qt)),Ht!==null?(b=Math.max(b,0),P=Math.min(P,Ht.count)):Re!=null&&(b=Math.max(b,0),P=Math.min(P,Re.count));let V=P-b;if(V<0||V===1/0)return;Ct.setup(st,$,Ot,lt,Ht);let X,H=nt;if(Ht!==null&&(X=_.get(Ht),H=vt,H.setIndex(X)),st.isMesh)$.wireframe===!0?(It.setLineWidth($.wireframeLinewidth*ae()),H.setMode(k.LINES)):H.setMode(k.TRIANGLES);else if(st.isLine){let _t=$.linewidth;_t===void 0&&(_t=1),It.setLineWidth(_t*ae()),st.isLineSegments?H.setMode(k.LINES):st.isLineLoop?H.setMode(k.LINE_LOOP):H.setMode(k.LINE_STRIP)}else st.isPoints?H.setMode(k.POINTS):st.isSprite&&H.setMode(k.TRIANGLES);if(st.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))H.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let _t=st._multiDrawStarts,at=st._multiDrawCounts,mt=st._multiDrawCount,Q=Ht?_.get(Ht).bytesPerElement:1,Rt=Xt.get($).currentProgram.getUniforms();for(let zt=0;zt<mt;zt++)Rt.setValue(k,"_gl_DrawID",zt),H.render(_t[zt]/Q,at[zt])}else if(st.isInstancedMesh)H.renderInstances(b,V,st.count);else if(lt.isInstancedBufferGeometry){let _t=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,at=Math.min(lt.instanceCount,_t);H.renderInstances(b,V,at)}else H.render(b,V)};function js(T,G,lt,$){F!==null&&T.isNodeMaterial&&F.setObject($,T),yt===!0&&et.setState(T,lt,!1),T.transparent===!0&&T.side===cn&&T.forceSinglePass===!1?(T.side=dn,T.needsUpdate=!0,yn(T,G,$),T.side=Oi,T.needsUpdate=!0,yn(T,G,$),T.side=cn):yn(T,G,$)}this.compile=function(T,G,lt=null){lt===null&&(lt=T),F!==null&&F.renderStart(T,G,lt),E=Z.get(lt),E.init(G),y.push(E),lt.traverseVisible(function(st){st.isLight&&st.layers.test(G.layers)&&(E.pushLight(st),st.castShadow&&E.pushShadow(st))}),T!==lt&&T.traverseVisible(function(st){st.isLight&&st.layers.test(G.layers)&&(E.pushLight(st),st.castShadow&&E.pushShadow(st))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Nt=this.localClippingEnabled,yt=et.init(this.clippingPlanes,Nt),yt===!0&&et.setGlobalState(this.clippingPlanes,G),F!==null&&ht.render(E.state.shadowsArray,lt,G);let $=new Set;return T.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let kt=st.material;if(kt)if(Array.isArray(kt))for(let Jt=0;Jt<kt.length;Jt++){let Ot=kt[Jt];js(Ot,lt,G,st),$.add(Ot)}else js(kt,lt,G,st),$.add(kt)}),E=y.pop(),F!==null&&F.renderEnd(),$},this.compileAsync=function(T,G,lt=null){let $=this.compile(T,G,lt);return new Promise(st=>{function kt(){if($.forEach(function(Jt){let Ht=Xt.get(Jt).currentProgram;(Ht===void 0||Ht.isReady())&&$.delete(Jt)}),$.size===0){st(T);return}setTimeout(kt,10)}Kt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Vi=null;function K(T){Vi&&Vi(T)}function St(){xe.stop()}function Ft(){xe.start()}let xe=new Xu;xe.setAnimationLoop(K),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(T){Vi=T,Et.setAnimationLoop(T),T===null?xe.stop():xe.start()},Et.addEventListener("sessionstart",St),Et.addEventListener("sessionend",Ft),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(T,G);let lt=Et.enabled===!0&&Et.isPresenting===!0,$=O!==null&&(ot===null||lt)&&O.begin(A,ot);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(G),G=Et.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,G,ot),E=Z.get(T,y.length),E.init(G),E.state.textureUnits=Bt.getTextureUnits(),y.push(E),Dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?At.setFromArrayCamera(G):ft.setFromProjectionMatrix(Dt,Nn,G.reversedDepth),Nt=this.localClippingEnabled,yt=et.init(this.clippingPlanes,Nt),C=gt.get(T,x.length),C.init(),x.push(C),this.info.render.frame++,Et.enabled===!0&&Et.isPresenting===!0){let Jt=A.xr.getDepthSensingMesh();Jt!==null&&Oe(Jt,G,-1/0,A.sortObjects)}Oe(T,G,0,A.sortObjects),C.finish(),F!==null&&F.updateLights(E.state.lightsArray),A.sortObjects===!0&&C.sort(Pt,fe),jt=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,jt&&D.addToRenderList(C,T),this.info.autoReset===!0&&this.info.reset(),yt===!0&&et.beginShadows();let st=E.state.shadowsArray;if(ht.render(st,T,G),yt===!0&&et.endShadows(),($&&O.hasRenderPass())===!1){let Jt=C.opaque,Ot=C.transmissive;if(E.setupLights(),G.isArrayCamera){let Ht=G.cameras;if(Ot.length>0)for(let Qt=0,_e=Ht.length;Qt<_e;Qt++){let Re=Ht[Qt];Se(Jt,Ot,T,Re)}jt&&D.render(T);for(let Qt=0,_e=Ht.length;Qt<_e;Qt++){let Re=Ht[Qt];Ze(C,T,Re,Re.viewport)}}else Ot.length>0&&Se(Jt,Ot,T,G),jt&&D.render(T),Ze(C,T,G)}ot!==null&&q===0&&(Bt.updateMultisampleRenderTarget(ot),Bt.updateRenderTargetMipmap(ot)),$&&O.end(A),T.isScene===!0&&T.onAfterRender(A,T,G),Ct.resetDefaultState(),it=-1,pt=null,y.pop(),y.length>0?(E=y[y.length-1],Bt.setTextureUnits(E.state.textureUnits),yt===!0&&et.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,F!==null&&F.renderEnd()};function Oe(T,G,lt,$){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)lt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Jt=G.isArrayCamera?At:ft;if(!T.frustumCulled||T.intersectsFrustum(Jt)){$&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);let Ot=J.update(T),Ht=T.material;Ht.visible&&C.push(T,Ot,Ht,lt,Lt.z,null,G)}}else if(T.isMesh||T.isLine||T.isPoints){let Jt=G.isArrayCamera?At:ft;if(!T.frustumCulled||T.intersectsFrustum(Jt)){let Ot=J.update(T),Ht=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Lt.copy(Ot.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ht)){let Qt=Ot.groups;for(let _e=0,Re=Qt.length;_e<Re;_e++){let b=Qt[_e],P=Ht[b.materialIndex];P&&P.visible&&C.push(T,Ot,P,lt,Lt.z,b,G)}}else Ht.visible&&C.push(T,Ot,Ht,lt,Lt.z,null,G)}}}let kt=T.children;for(let Jt=0,Ot=kt.length;Jt<Ot;Jt++)Oe(kt[Jt],G,lt,$)}function Ze(T,G,lt,$){let{opaque:st,transmissive:kt,transparent:Jt}=T;E.setupLightsView(lt),yt===!0&&et.setGlobalState(A.clippingPlanes,lt),$&&It.viewport(ut.copy($)),st.length>0&&Be(st,G,lt),kt.length>0&&Be(kt,G,lt),Jt.length>0&&Be(Jt,G,lt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Se(T,G,lt,$){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){let b=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new Ye(1,1,{generateMipmaps:!0,type:b?tn:Mn,minFilter:gi,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let kt=E.state.transmissionRenderTarget[$.id],Jt=$.viewport||ut;kt.setSize(Jt.z*A.transmissionResolutionScale,Jt.w*A.transmissionResolutionScale);let Ot=A.getRenderTarget(),Ht=A.getActiveCubeFace(),Qt=A.getActiveMipmapLevel();A.setRenderTarget(kt),A.getClearColor(W),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),jt&&D.render(lt);let _e=A.toneMapping;A.toneMapping=$n;let Re=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),yt===!0&&et.setGlobalState(A.clippingPlanes,$),Be(T,lt,$),Bt.updateMultisampleRenderTarget(kt),Bt.updateRenderTargetMipmap(kt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let b=!1;for(let P=0,V=G.length;P<V;P++){let X=G[P],{object:H,geometry:_t,material:at,group:mt}=X;if(at.side===cn&&H.layers.test($.layers)){let Q=at.side;at.side=dn,at.needsUpdate=!0,De(H,lt,$,_t,at,mt),at.side=Q,at.needsUpdate=!0,b=!0}}b===!0&&(Bt.updateMultisampleRenderTarget(kt),Bt.updateRenderTargetMipmap(kt))}A.setRenderTarget(Ot,Ht,Qt),A.setClearColor(W,xt),Re!==void 0&&($.viewport=Re),A.toneMapping=_e}function Be(T,G,lt){let $=G.isScene===!0?G.overrideMaterial:null;for(let st=0,kt=T.length;st<kt;st++){let Jt=T[st],{object:Ot,geometry:Ht,group:Qt}=Jt,_e=Jt.material;_e.allowOverride===!0&&$!==null&&(_e=$),Ot.layers.test(lt.layers)&&De(Ot,G,lt,Ht,_e,Qt)}}function De(T,G,lt,$,st,kt){F!==null&&st.isNodeMaterial&&F.setObject(T,st),T.onBeforeRender(A,G,lt,$,st,kt),T.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),st.onBeforeRender(A,G,lt,$,T,kt),st.transparent===!0&&st.side===cn&&st.forceSinglePass===!1?(st.side=dn,st.needsUpdate=!0,A.renderBufferDirect(lt,G,$,st,T,kt),st.side=Oi,st.needsUpdate=!0,A.renderBufferDirect(lt,G,$,st,T,kt),st.side=cn):A.renderBufferDirect(lt,G,$,st,T,kt),T.onAfterRender(A,G,lt,$,st,kt)}function Ke(T){let G=0;for(let lt of T)lt.texture!==null&&G++;return G}function yn(T,G,lt){G.isScene!==!0&&(G=se);let $=Xt.get(T),st=E.state.lights,kt=E.state.shadowsArray,Jt=st.state.version,Ot=z.getParameters(T,st.state,kt,G,lt,E.state.lightProbeGridArray),Ht=z.getProgramCacheKey(Ot),Qt=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let _e=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=R.get(T.envMap||$.environment,_e),$.envMapRotation=$.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Qt===void 0&&(T.addEventListener("dispose",Ae),Qt=new Map,$.programs=Qt,$.programVariants=new Map);let Re=Qt.get(Ht);if(Re!==void 0){if($.currentProgram===Re&&$.lightsStateVersion===Jt)return ha(T,Ot),Re}else Ot.uniforms=z.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,lt,Ot),T.onBeforeCompile(Ot,A),Re=z.acquireProgram(Ot,Ht),Qt.set(Ht,Re),$.uniforms=Ot.uniforms;let b=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(b.clippingPlanes=et.uniform),ha(T,Ot),$.needsLights=ua(T),$.lightsStateVersion=Jt,$.needsLights&&(b.ambientLightColor.value=st.state.ambient,b.lightProbe.value=st.state.probe,b.sunLights.value=st.state.sun,b.sunLightShadows.value=st.state.sunShadow,b.directionalLights.value=st.state.directional,b.directionalLightShadows.value=st.state.directionalShadow,b.spotLights.value=st.state.spot,b.spotLightShadows.value=st.state.spotShadow,b.rectAreaLights.value=st.state.rectArea,b.ltc_1.value=st.state.rectAreaLTC1,b.ltc_2.value=st.state.rectAreaLTC2,b.pointLights.value=st.state.point,b.pointLightShadows.value=st.state.pointShadow,b.hemisphereLights.value=st.state.hemi,b.sunShadowMatrix.value=st.state.sunShadowMatrix,b.sunShadowCascade.value=st.state.sunShadowCascade,b.directionalShadowMatrix.value=st.state.directionalShadowMatrix,b.spotLightMatrix.value=st.state.spotLightMatrix,b.spotLightMap.value=st.state.spotLightMap,b.pointShadowMatrix.value=st.state.pointShadowMatrix),$.numLightProbeGrids=Ke(E.state.lightProbeGridArray),$.currentProgram=Re,$.uniformsList=null,Re}function Sl(T,G,lt,$,st){let kt=Xt.get(T),Jt=kt.currentProgram.id+","+$+","+st,Ot=kt.programVariants.get(Jt);return Ot===void 0?(Ot=yn(T,G,lt),kt.programVariants.set(Jt,Ot)):(kt.currentProgram=Ot,kt.uniformsList=null,kt.outputColorSpace=$,kt.toneMapping=st),Ot}function Qs(T){if(T.uniformsList===null){let G=T.currentProgram.getUniforms();T.uniformsList=Xs.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function ha(T,G){let lt=Xt.get(T);lt.outputColorSpace=G.outputColorSpace,lt.batching=G.batching,lt.batchingColor=G.batchingColor,lt.instancing=G.instancing,lt.instancingColor=G.instancingColor,lt.instancingMorph=G.instancingMorph,lt.skinning=G.skinning,lt.morphTargets=G.morphTargets,lt.morphNormals=G.morphNormals,lt.morphColors=G.morphColors,lt.morphTargetsCount=G.morphTargetsCount,lt.numClippingPlanes=G.numClippingPlanes,lt.numIntersection=G.numClipIntersection,lt.vertexAlphas=G.vertexAlphas,lt.vertexTangents=G.vertexTangents,lt.toneMapping=G.toneMapping}function Ln(T,G,lt,$,st){G.isScene!==!0&&(G=se),Bt.resetTextureUnits();let kt=G.fog,Jt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,Ot=ot===null?A.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Te.workingColorSpace,Ht=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Qt=R.get($.envMap||Jt,Ht),_e=$.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Re=!!lt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),b=!!lt.morphAttributes.position,P=!!lt.morphAttributes.normal,V=!!lt.morphAttributes.color,X=$n;$.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(X=A.toneMapping);let H=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,_t=H!==void 0?H.length:0,at=Xt.get($),mt=E.state.lights;if(yt===!0&&(Nt===!0||T!==pt)){let we=T===pt&&$.id===it;et.setState($,T,we)}let Q=!1,Rt=!1;$.version===at.__version?at.needsLights&&at.lightsStateVersion!==mt.state.version||st.isBatchedMesh&&at.batching===!1||!st.isBatchedMesh&&at.batching===!0||st.isBatchedMesh&&at.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&at.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&at.instancing===!1||!st.isInstancedMesh&&at.instancing===!0||st.isSkinnedMesh&&at.skinning===!1||!st.isSkinnedMesh&&at.skinning===!0||st.isInstancedMesh&&at.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&at.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&at.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&at.instancingMorph===!1&&st.morphTexture!==null||at.envMap!==Qt||$.fog===!0&&at.fog!==kt||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==et.numPlanes||at.numIntersection!==et.numIntersection)||at.vertexAlphas!==_e||at.vertexTangents!==Re||at.morphTargets!==b||at.morphNormals!==P||at.morphColors!==V||at.morphTargetsCount!==_t||at.numLightProbeGrids!==Ke(E.state.lightProbeGridArray)?Q=!0:(at.outputColorSpace!==Ot||at.toneMapping!==X)&&(Rt=!0):(Q=!0,at.__version=$.version);let zt=at.currentProgram;(Q===!0||Rt===!0)&&(zt=Rt===!0?Sl($,G,st,Ot,X):yn($,G,st),F&&$.isNodeMaterial&&F.onUpdateProgram($,zt,at));let Ut=!1,$t=!1,oe=!1,Yt=zt.getUniforms(),ce=at.uniforms;if(It.useProgram(zt.program)&&(Ut=!0,$t=!0,oe=!0),$.id!==it&&(it=$.id,$t=!0),Ut||pt!==T){It.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Yt.setValue(k,"projectionMatrix",T.projectionMatrix),Yt.setValue(k,"viewMatrix",T.matrixWorldInverse);let de=Yt.map.cameraPosition;de!==void 0&&de.setValue(k,ie.setFromMatrixPosition(T.matrixWorld)),me.logarithmicDepthBuffer&&Yt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Yt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),pt!==T&&(pt=T,$t=!0,oe=!0)}if(at.needsLights&&(mt.state.sunShadowMap.length>0&&Yt.setValue(k,"sunShadowMap",mt.state.sunShadowMap,Bt),mt.state.directionalShadowMap.length>0&&Yt.setValue(k,"directionalShadowMap",mt.state.directionalShadowMap,Bt),mt.state.spotShadowMap.length>0&&Yt.setValue(k,"spotShadowMap",mt.state.spotShadowMap,Bt),mt.state.pointShadowMap.length>0&&Yt.setValue(k,"pointShadowMap",mt.state.pointShadowMap,Bt)),st.isSkinnedMesh){Yt.setOptional(k,st,"bindMatrix"),Yt.setOptional(k,st,"bindMatrixInverse");let we=st.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Yt.setValue(k,"boneTexture",we.boneTexture,Bt))}st.isBatchedMesh&&(Yt.setOptional(k,st,"batchingTexture"),Yt.setValue(k,"batchingTexture",st._matricesTexture,Bt),Yt.setOptional(k,st,"batchingIdTexture"),Yt.setValue(k,"batchingIdTexture",st._indirectTexture,Bt),Yt.setOptional(k,st,"batchingColorTexture"),st._colorsTexture!==null&&Yt.setValue(k,"batchingColorTexture",st._colorsTexture,Bt));let be=lt.morphAttributes;if((be.position!==void 0||be.normal!==void 0||be.color!==void 0)&&tt.update(st,lt,zt),($t||at.receiveShadow!==st.receiveShadow)&&(at.receiveShadow=st.receiveShadow,Yt.setValue(k,"receiveShadow",st.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(ce.envMapIntensity.value=G.environmentIntensity),ce.dfgLUT!==void 0&&(ce.dfgLUT.value=I_()),$t){if(Yt.setValue(k,"toneMappingExposure",A.toneMappingExposure),at.needsLights&&bl(ce,oe),kt&&$.fog===!0&&dt.refreshFogUniforms(ce,kt),dt.refreshMaterialUniforms(ce,$,bt,Gt,E.state.transmissionRenderTarget[T.id]),at.needsLights&&at.numLightProbeGrids>0){let we=S,de=0;for(let He of E.state.lightProbeGridArray)He.texture!==null&&(we.textures[de]=He.texture,we.min[de]=He.boundingBox.min,we.max[de]=He.boundingBox.max,we.resolution[de]=He.resolution,de++);for(let He in we)we[He].length=de;ce.probesSH.value=we.textures,ce.probesMin.value=we.min,ce.probesMax.value=we.max,ce.probesResolution.value=we.resolution}Xs.upload(k,Qs(at),ce,Bt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Xs.upload(k,Qs(at),ce,Bt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Yt.setValue(k,"center",st.center),Yt.setValue(k,"modelViewMatrix",st.modelViewMatrix),Yt.setValue(k,"normalMatrix",st.normalMatrix),Yt.setValue(k,"modelMatrix",st.matrixWorld),$.uniformsGroups!==void 0){let we=$.uniformsGroups;for(let de=0,He=we.length;de<He;de++){let Ie=we[de];qt.update(Ie,zt),qt.bind(Ie,zt)}}return zt}function bl(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.sunLights.needsUpdate=G,T.sunLightShadows.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function ua(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(T,G,lt){let $=Xt.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Xt.get(T.texture).__webglTexture=G,Xt.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:lt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){let lt=Xt.get(T);lt.__webglFramebuffer=G,lt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,lt=0){ot=T,Y=G,q=lt;let $=null,st=!1,kt=!1;if(T){let Ot=Xt.get(T);if(Ot.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(k.FRAMEBUFFER,Ot.__webglFramebuffer),ut.copy(T.viewport),rt.copy(T.scissor),ct=T.scissorTest,It.viewport(ut),It.scissor(rt),It.setScissorTest(ct),it=-1;return}else if(Ot.__webglFramebuffer===void 0)Bt.setupRenderTarget(T);else if(Ot.__hasExternalTextures)Bt.rebindTextures(T,Xt.get(T.texture).__webglTexture,Xt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let _e=T.depthTexture;if(Ot.__boundDepthTexture!==_e){if(_e!==null&&Xt.has(_e)&&(T.width!==_e.image.width||T.height!==_e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(T)}}let Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(kt=!0);let Qt=Xt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qt[G])?$=Qt[G][lt]:$=Qt[G],st=!0):T.samples>0&&Bt.useMultisampledRTT(T)===!1?$=Xt.get(T).__webglMultisampledFramebuffer:Array.isArray(Qt)?$=Qt[lt]:$=Qt,ut.copy(T.viewport),rt.copy(T.scissor),ct=T.scissorTest}else ut.copy(Zt).multiplyScalar(bt).floor(),rt.copy(ue).multiplyScalar(bt).floor(),ct=te;if(lt!==0&&($=j),It.bindFramebuffer(k.FRAMEBUFFER,$)&&It.drawBuffers(T,$),It.viewport(ut),It.scissor(rt),It.setScissorTest(ct),st){let Ot=Xt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,lt)}else if(kt){let Ot=G;for(let Ht=0;Ht<T.textures.length;Ht++){let Qt=Xt.get(T.textures[Ht]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ht,Qt.__webglTexture,lt,Ot)}}else if(T!==null&&lt!==0){let Ot=Xt.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ot.__webglTexture,lt)}it=-1};function vi(T){let G=Xt.get(T);return(G.__readFormat!==T.format||G.__readType!==T.type)&&(G.__readFormat=T.format,G.__readType=T.type,G.__formatReadable=me.textureFormatReadable(T.format),G.__typeReadable=me.textureTypeReadable(T.type)),G}this.readRenderTargetPixels=function(T,G,lt,$,st,kt,Jt,Ot=0){if(!(T&&T.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Jt!==void 0&&(Ht=Ht[Jt],Array.isArray(Ht)&&(Ht=Ht[0])),Ht){It.bindFramebuffer(k.FRAMEBUFFER,Ht);try{let Qt=T.textures[Ot],_e=Qt.format,Re=Qt.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot);let b=vi(Qt);if(b.__formatReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(b.__typeReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-$&&lt>=0&&lt<=T.height-st&&k.readPixels(G,lt,$,st,wt.convert(_e),wt.convert(Re),kt)}finally{let Qt=ot!==null?Xt.get(ot).__webglFramebuffer:null;It.bindFramebuffer(k.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(T,G,lt,$,st,kt,Jt,Ot=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Jt!==void 0&&(Ht=Ht[Jt],Array.isArray(Ht)&&(Ht=Ht[0])),Ht)if(G>=0&&G<=T.width-$&&lt>=0&&lt<=T.height-st){It.bindFramebuffer(k.FRAMEBUFFER,Ht);let Qt=T.textures[Ot],_e=Qt.format,Re=Qt.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot);let b=vi(Qt);if(b.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(b.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let P=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,P),k.bufferData(k.PIXEL_PACK_BUFFER,kt.byteLength,k.STREAM_READ),k.readPixels(G,lt,$,st,wt.convert(_e),wt.convert(Re),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let V=ot!==null?Xt.get(ot).__webglFramebuffer:null;It.bindFramebuffer(k.FRAMEBUFFER,V);let X=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await fu(k,X,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,P),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,kt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(P),k.deleteSync(X),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,lt=0){let $=Math.pow(2,-lt),st=Math.floor(T.image.width*$),kt=Math.floor(T.image.height*$),Jt=G!==null?G.x:0,Ot=G!==null?G.y:0;Bt.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,lt,0,0,Jt,Ot,st,kt),It.unbindTexture()},this.copyTextureToTexture=function(T,G,lt=null,$=null,st=0,kt=0){let Jt,Ot,Ht,Qt,_e,Re,b,P,V,X=T.isCompressedTexture?T.mipmaps[kt]:T.image;if(lt!==null)Jt=lt.max.x-lt.min.x,Ot=lt.max.y-lt.min.y,Ht=lt.isBox3?lt.max.z-lt.min.z:1,Qt=lt.min.x,_e=lt.min.y,Re=lt.isBox3?lt.min.z:0;else{let Yt=Math.pow(2,-st);Jt=Math.floor(X.width*Yt),Ot=Math.floor(X.height*Yt),T.isDataArrayTexture?Ht=X.depth:T.isData3DTexture?Ht=Math.floor(X.depth*Yt):Ht=1,Qt=0,_e=0,Re=0}$!==null?(b=$.x,P=$.y,V=$.z):(b=0,P=0,V=0);let H=wt.convert(G.format),_t=wt.convert(G.type),at;G.isData3DTexture?(Bt.setTexture3D(G,0),at=k.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Bt.setTexture2DArray(G,0),at=k.TEXTURE_2D_ARRAY):(Bt.setTexture2D(G,0),at=k.TEXTURE_2D),It.activeTexture(k.TEXTURE0),It.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),It.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),It.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment);let mt=It.getParameter(k.UNPACK_ROW_LENGTH),Q=It.getParameter(k.UNPACK_IMAGE_HEIGHT),Rt=It.getParameter(k.UNPACK_SKIP_PIXELS),zt=It.getParameter(k.UNPACK_SKIP_ROWS),Ut=It.getParameter(k.UNPACK_SKIP_IMAGES);It.pixelStorei(k.UNPACK_ROW_LENGTH,X.width),It.pixelStorei(k.UNPACK_IMAGE_HEIGHT,X.height),It.pixelStorei(k.UNPACK_SKIP_PIXELS,Qt),It.pixelStorei(k.UNPACK_SKIP_ROWS,_e),It.pixelStorei(k.UNPACK_SKIP_IMAGES,Re);let $t=T.isDataArrayTexture||T.isData3DTexture,oe=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){let Yt=Xt.get(T),ce=Xt.get(G),be=Xt.get(Yt.__renderTarget),we=Xt.get(ce.__renderTarget);It.bindFramebuffer(k.READ_FRAMEBUFFER,be.__webglFramebuffer),It.bindFramebuffer(k.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let de=0;de<Ht;de++)$t&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xt.get(T).__webglTexture,st,Re+de),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xt.get(G).__webglTexture,kt,V+de)),k.blitFramebuffer(Qt,_e,Qt+Jt,_e+Ot,b,P,b+Jt,P+Ot,k.DEPTH_BUFFER_BIT,k.NEAREST);It.bindFramebuffer(k.READ_FRAMEBUFFER,null),It.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(st!==0||T.isRenderTargetTexture||Xt.has(T)){let Yt=Xt.get(T),ce=Xt.get(G);It.bindFramebuffer(k.READ_FRAMEBUFFER,N),It.bindFramebuffer(k.DRAW_FRAMEBUFFER,B);for(let be=0;be<Ht;be++)$t?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Yt.__webglTexture,st,Re+be):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Yt.__webglTexture,st),oe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ce.__webglTexture,kt,V+be):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ce.__webglTexture,kt),st!==0?k.blitFramebuffer(Qt,_e,Qt+Jt,_e+Ot,b,P,b+Jt,P+Ot,k.COLOR_BUFFER_BIT,k.NEAREST):oe?k.copyTexSubImage3D(at,kt,b,P,V+be,Qt,_e,Jt,Ot):k.copyTexSubImage2D(at,kt,b,P,Qt,_e,Jt,Ot);It.bindFramebuffer(k.READ_FRAMEBUFFER,null),It.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else oe?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(at,kt,b,P,V,Jt,Ot,Ht,H,_t,X.data):G.isCompressedArrayTexture?k.compressedTexSubImage3D(at,kt,b,P,V,Jt,Ot,Ht,H,X.data):k.texSubImage3D(at,kt,b,P,V,Jt,Ot,Ht,H,_t,X):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,kt,b,P,Jt,Ot,H,_t,X.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,kt,b,P,X.width,X.height,H,X.data):k.texSubImage2D(k.TEXTURE_2D,kt,b,P,Jt,Ot,H,_t,X);It.pixelStorei(k.UNPACK_ROW_LENGTH,mt),It.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Q),It.pixelStorei(k.UNPACK_SKIP_PIXELS,Rt),It.pixelStorei(k.UNPACK_SKIP_ROWS,zt),It.pixelStorei(k.UNPACK_SKIP_IMAGES,Ut),kt===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&k.generateMipmap(at),It.unbindTexture()},this.initRenderTarget=function(T){Xt.get(T).__webglFramebuffer===void 0&&Bt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Bt.setTextureCube(T,0):T.isData3DTexture?Bt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Bt.setTexture2DArray(T,0):Bt.setTexture2D(T,0),It.unbindTexture()},this.resetState=function(){Y=0,q=0,ot=null,It.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var id={type:"change"},qc={type:"start"},rd={type:"end"},hl=new Ai,sd=new _n,L_=Math.cos(70*xi.DEG2RAD),sn=new U,Sn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xc=1e-6,ul=class extends Hr{constructor(t,e=null){super(t,e),this.state=Fe.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new ln,this._lastTargetPosition=new U,this._quat=new ln().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zs,this._sphericalDelta=new zs,this._scale=1,this._panOffset=new U,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new U,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N_.bind(this),this._onPointerDown=D_.bind(this),this._onPointerUp=U_.bind(this),this._onContextMenu=V_.bind(this),this._onMouseWheel=B_.bind(this),this._onKeyDown=k_.bind(this),this._onTouchStart=z_.bind(this),this._onTouchMove=G_.bind(this),this._onMouseDown=F_.bind(this),this._onMouseMove=O_.bind(this),this._interceptControlDown=H_.bind(this),this._interceptControlUp=W_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(id),this.update(),this.state=Fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Sn:n>Math.PI&&(n-=Sn),s<-Math.PI?s+=Sn:s>Math.PI&&(s-=Sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=sn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(hl.origin.copy(this.object.position),hl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hl.direction))<L_?this.object.lookAt(this.target):(sd.setFromNormalAndCoplanarPoint(this.object.up,this.target),hl.intersectPlane(sd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xc||this._lastTargetPosition.distanceToSquared(this.target)>Xc?(this.dispatchEvent(id),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Sn/60*this.autoRotateSpeed*t:Sn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function D_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function N_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function U_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rd),this.state=Fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function F_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Fe.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Fe.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(qc)}function O_(i){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function B_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(i.preventDefault(),this.dispatchEvent(qc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(rd))}function k_(i){this.enabled!==!1&&this._handleKeyDown(i)}function z_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1){this.state=Fe.NONE;break}this._handleTouchStartRotate(i),this.state=Fe.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1){this.state=Fe.NONE;break}this._handleTouchStartPan(i),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Fe.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(qc)}function G_(i){switch(this._trackPointer(i),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Fe.NONE}}function V_(i){this.enabled!==!1&&i.preventDefault()}function H_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Zs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},X_=new es(-1,1,1,-1,0,1),Yc=class extends Xe{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}},q_=new Yc,ki=class{constructor(t){this._mesh=new le(q_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,X_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var dl=class extends Pn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rn.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ki(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oa=class extends Pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fl=class extends Pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var pl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Mt);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dl(Zs),this.copyPass.material.blending=mi,this.timer=new Gr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oa!==void 0&&(a instanceof oa?n=!0:a instanceof fl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ml=class extends Pn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ne}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ad={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ks=class i extends Pn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(r,a,{type:tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ye(r,a,{type:tn,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ye(r,a,{type:tn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=ad;this.highPassUniforms=Rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Mt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(Zs.uniforms),this.blendMaterial=new qe({uniforms:this.copyUniforms,vertexShader:Zs.vertexShader,fragmentShader:Zs.fragmentShader,premultipliedAlpha:!0,blending:is,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ne,this._oldClearAlpha=1,this._basic=new Fn,this._fsQuad=new ki(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new qe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ks.BlurDirectionX=new Mt(1,0);Ks.BlurDirectionY=new Mt(0,1);var la={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var gl=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rn.clone(la.uniforms),this.material=new Fs({name:la.name,uniforms:this.uniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this._fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Te.getTransfer(this._outputColorSpace)===Ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Yr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zc={volta:{id:"volta",brand:"PKM Motors",name:"Volta",trim:"Double Cab 2.8D 4x4",tagline:"Built for laterite, loads and long weekends.",chips:["2.8L turbo-diesel","150 kW \xB7 500 Nm","6-speed auto","Shift-on-the-fly 4WD"],width:1.88,wheelbase:3.08,front:2.52,rear:-2.8,track:1.58,tyreR:.392,tyreW:.27,archR:.49,archY:.42,sill:.47,belt:1.18,roof:1.84,mass:2150,power:150,torque:500,idle:780,redline:4e3,shiftUp:3300,shiftDown:1500,frontWeight:.56,cgHeight:.71,steeringLock:.6,driveFront:.38,springRate:49,springDamping:8,bodyRoll:.0078,gears:[4.71,2.84,1.79,1.39,1,.78],finalDrive:3.73,top:49,engine:"diesel",horn:[404,508],paints:[{name:"Savanna Olive",hex:"#5d6449",metal:.35},{name:"Laterite Red",hex:"#7a2f22",metal:.45},{name:"Harmattan White",hex:"#e9e7e1",metal:.05},{name:"Graphite",hex:"#2f3236",metal:.6},{name:"Volta Blue",hex:"#1e3d5c",metal:.55},{name:"Kente Gold",hex:"#a9884a",metal:.7}]},regent:{id:"regent",brand:"PKM Motors",name:"Regent",trim:"Platinum V8 AWD",tagline:"Quiet power for state visits and school runs.",chips:["6.2L V8","313 kW \xB7 624 Nm","10-speed auto","Air ride suspension"],width:2.06,wheelbase:3.07,front:2.52,rear:-2.88,track:1.74,tyreR:.405,tyreW:.285,archR:.475,archY:.43,sill:.44,belt:1.25,roof:1.93,mass:2700,power:313,torque:624,idle:620,redline:6e3,shiftUp:5400,shiftDown:2e3,frontWeight:.53,cgHeight:.73,steeringLock:.55,driveFront:.46,springRate:62,springDamping:12,bodyRoll:.0064,gears:[4.7,2.99,2.15,1.77,1.52,1.28,1,.85,.69,.64],finalDrive:3.23,top:59,engine:"v8",horn:[350,440],paints:[{name:"Obsidian Black",hex:"#0d0e10",metal:.4},{name:"Ridge Silver",hex:"#a7abae",metal:.85},{name:"Pearl White",hex:"#eeece6",metal:.15},{name:"Midnight Navy",hex:"#141e30",metal:.6},{name:"Cocoa Bronze",hex:"#4a3428",metal:.7},{name:"Jubilee Green",hex:"#1d3b2c",metal:.55}]}},_l=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function od(i,t,e={}){let n=Zc[t],s=!!i.ColorManagement,r=s?1:.06,a=b=>{let P=new i.Color(b);return s||P.convertSRGBToLinear(),P},o=b=>("colorSpace"in b?b.colorSpace=i.SRGBColorSpace:b.encoding=i.sRGBEncoding,b),l=(b,P,V)=>{let X=document.createElement("canvas");return X.width=b,X.height=P,V(X.getContext("2d"),b,P),X},c=t==="regent",u=n.width,f=u/2,d=n.belt,p=n.roof,g=n.wheelbase/2,M=new i.MeshPhysicalMaterial({color:a(n.paints[0].hex),metalness:n.paints[0].metal,roughness:.32,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),h={paint:M,black:new i.MeshStandardMaterial({color:a("#121314"),roughness:.55,metalness:.1}),piano:new i.MeshPhysicalMaterial({color:a("#050506"),roughness:.12,metalness:.2,clearcoat:1,clearcoatRoughness:.05}),trim:new i.MeshStandardMaterial({color:a("#1b1c1d"),roughness:.85,metalness:0}),chrome:new i.MeshStandardMaterial({color:a("#dfe3e6"),roughness:.06,metalness:1,envMapIntensity:1.6}),satin:new i.MeshStandardMaterial({color:a("#9ea3a6"),roughness:.32,metalness:1}),glass:new i.MeshPhysicalMaterial({color:a("#05080a"),roughness:.02,metalness:.3,transparent:!0,opacity:.86,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:0}),lens:new i.MeshPhysicalMaterial({color:a("#e8eef2"),roughness:.02,metalness:0,transparent:!0,opacity:.35,clearcoat:1}),head:new i.MeshStandardMaterial({color:a("#f4f7fb"),emissive:a("#ffffff"),emissiveIntensity:.6,roughness:.25,metalness:.4}),drl:new i.MeshStandardMaterial({color:a("#ffffff"),emissive:a("#eef4ff"),emissiveIntensity:2.2,roughness:.3}),tail:new i.MeshStandardMaterial({color:a("#5a0b0b"),emissive:a("#ff1a10"),emissiveIntensity:.55,roughness:.2,metalness:.2}),amber:new i.MeshStandardMaterial({color:a("#6b3d07"),emissive:a("#ff8a00"),emissiveIntensity:0,roughness:.25}),reverse:new i.MeshStandardMaterial({color:a("#bfc4c8"),emissive:a("#ffffff"),emissiveIntensity:0,roughness:.2}),tyre:null,rim:null,interior:new i.MeshStandardMaterial({color:a(c?"#3a2a20":"#232425"),roughness:.78}),leather:new i.MeshStandardMaterial({color:a(c?"#8b6a4f":"#36383a"),roughness:.6}),aperture:new i.MeshStandardMaterial({color:a("#141414"),roughness:.9}),under:new i.MeshStandardMaterial({color:a("#0b0b0b"),roughness:.95}),disc:new i.MeshStandardMaterial({color:a("#6d6f70"),roughness:.45,metalness:.9}),caliper:new i.MeshStandardMaterial({color:a(c?"#141414":"#8f1d18"),roughness:.4,metalness:.3})},m=l(2048,256,(b,P,V)=>{b.fillStyle="#7a7a7a",b.fillRect(0,0,P,V);let X=72;for(let H=0;H<X;H++){let _t=H/X*P;b.fillStyle="#2a2a2a",b.fillRect(_t+4,V*.36,P/X*.42,V*.11),b.fillRect(_t+P/X*.45,V*.49,P/X*.42,V*.11),c||b.fillRect(_t+2,V*.3,P/X*.2,V*.38)}}),v=l(2048,256,(b,P,V)=>{b.fillStyle="#191919",b.fillRect(0,0,P,V),b.fillStyle="#2b2b2b",b.font="700 46px Inter, Arial, sans-serif",b.textBaseline="middle";let X=c?"PKM GRAND TOURING  \xB7  285/45 R22  \xB7  ":"PKM TERRA A/T  \xB7  265/65 R17  \xB7  ";for(let H=0;H<2;H++)b.fillText(X,H*P/2+40,V*.15);for(let H=0;H<2;H++)b.fillText(X,H*P/2+40,V*.85)}),w=new i.CanvasTexture(m);w.wrapS=i.RepeatWrapping;let S=o(new i.CanvasTexture(v));S.wrapS=i.RepeatWrapping,h.tyre=new i.MeshStandardMaterial({color:a("#1c1c1c"),roughness:.9,bumpMap:w,bumpScale:2.5,map:S}),h.rim=new i.MeshPhysicalMaterial({color:a(c?"#d9dcdf":"#3a3d40"),metalness:1,roughness:c?.12:.35,clearcoat:.6});let C=o(new i.CanvasTexture(l(256,256,(b,P)=>{let V=P/2,X=b.createLinearGradient(0,0,P,P);X.addColorStop(0,"#f3f3f3"),X.addColorStop(.5,"#9b9b9b"),X.addColorStop(1,"#e8e8e8"),b.fillStyle=X,b.beginPath(),b.arc(V,V,V-4,0,7),b.fill(),b.fillStyle="#121212",b.beginPath(),b.arc(V,V,V-22,0,7),b.fill(),b.fillStyle="#d9c7a3",b.font="800 82px Inter, Arial, sans-serif",b.textAlign="center",b.textBaseline="middle",b.fillText("PKM",V,V+4)})));h.emblem=new i.MeshStandardMaterial({map:C,metalness:.6,roughness:.25});let E=new i.Group;E.name="PKM "+n.name;let x=new i.Group;x.rotation.y=-Math.PI/2,E.add(x);let y=new i.Group;x.add(y);let O=[],A=(b,P,V=y,X=!0)=>{let H=new i.Mesh(b,P);return H.castShadow=X,H.receiveShadow=!0,V.add(H),H},I=(b,P,V,X,H,_t,at,mt=y)=>{let Q=A(new i.BoxGeometry(b,P,V),at,mt);return Q.position.set(X,H,_t),Q},F=(b,P,V,X,H,_t=y)=>{let at=new i.Shape,mt=-b/2,Q=-P/2;X=Math.min(X,b/2-.001,P/2-.001),at.moveTo(mt+X,Q),at.lineTo(mt+b-X,Q),at.quadraticCurveTo(mt+b,Q,mt+b,Q+X),at.lineTo(mt+b,Q+P-X),at.quadraticCurveTo(mt+b,Q+P,mt+b-X,Q+P),at.lineTo(mt+X,Q+P),at.quadraticCurveTo(mt,Q+P,mt,Q+P-X),at.lineTo(mt,Q+X),at.quadraticCurveTo(mt,Q,mt+X,Q);let Rt=Math.min(X,V/2-.001)*.9,zt=new i.ExtrudeGeometry(at,{depth:Math.max(.001,V-2*Rt),bevelEnabled:!0,bevelThickness:Rt,bevelSize:Rt,bevelOffset:-Rt,bevelSegments:3,curveSegments:6});return zt.translate(0,0,-(V-2*Rt)/2),A(zt,H,_t)};function j(b){let P=b.index?b.toNonIndexed():b,V=P.attributes.position,X=V.count,H=new Float32Array(X),_t=new Map,at=new Array(X),mt=new i.Vector3,Q=new i.Vector3,Rt=new i.Vector3,zt=[];for(let ce=0;ce<X/3;ce++)mt.fromBufferAttribute(V,ce*3),Q.fromBufferAttribute(V,ce*3+1),Rt.fromBufferAttribute(V,ce*3+2),zt.push(new i.Vector3().subVectors(Rt,Q).cross(new i.Vector3().subVectors(mt,Q)));for(let ce=0;ce<X;ce++){let be=Math.round(V.getX(ce)*2e3)+"_"+Math.round(V.getY(ce)*2e3)+"_"+Math.round(V.getZ(ce)*2e3);at[ce]=be;let we=_t.get(be);we||_t.set(be,we=[]),we.push(ce)}let Ut=new Float32Array(X*3),$t=Math.cos(.62),oe=new i.Vector3,Yt=new i.Vector3;for(let ce=0;ce<X;ce++){let be=zt[ce/3|0];Yt.copy(be).normalize(),oe.set(0,0,0);for(let we of _t.get(at[ce])){let de=zt[we/3|0];Yt.dot(Rt.copy(de).normalize())>$t&&oe.add(de)}oe.normalize(),Ut[ce*3]=oe.x,Ut[ce*3+1]=oe.y,Ut[ce*3+2]=oe.z}return P.setAttribute("normal",new i.BufferAttribute(Ut,3)),P}function N(b){let P=b.attributes.position,V=new Map,X=[],H=[],_t=b.index?b.index.array:null,at=_t?_t.length:P.count;for(let Q=0;Q<at;Q++){let Rt=_t?_t[Q]:Q,zt=P.getX(Rt),Ut=P.getY(Rt),$t=P.getZ(Rt),oe=Math.round(zt*2e3)+"_"+Math.round(Ut*2e3)+"_"+Math.round($t*2e3),Yt=V.get(oe);Yt===void 0&&(Yt=H.length/3,H.push(zt,Ut,$t),V.set(oe,Yt)),X.push(Yt)}let mt=new i.BufferGeometry;return mt.setAttribute("position",new i.Float32BufferAttribute(H,3)),mt.setIndex(X),mt.computeVertexNormals(),mt}let B=n.front,Y=n.rear;function q(b,P,V){let X=1;return X-=.11*_l(B-.55,B,b)**1.4,X-=.06*_l(Y+.45,Y,b)**1.4,V?X-=.15*Math.max(0,Math.min(1,(P-d)/(p-d))):(X-=.035*_l(d-.3,d,P),X-=.03*_l(.7,n.sill,P)),f*X}function ot(b,P){let V=b.getPoints(P),X=[];for(let H=0;H<V.length;H++){let _t=V[H],at=V[(H+1)%V.length];X.push(_t);let mt=_t.distanceTo(at),Q=Math.floor(mt/.1);for(let Rt=1;Rt<Q;Rt++)X.push(_t.clone().lerp(at,Rt/Q))}return X.length>1&&X[0].distanceTo(X[X.length-1])<1e-4&&X.pop(),new i.Shape(X)}function it(b,P,V){let X=Array.from((b.index?b.toNonIndexed():b).attributes.position.array);for(let _t=0;_t<V;_t++){let at=[],mt=Ut=>[X[Ut*3],X[Ut*3+1],X[Ut*3+2]],Q=(Ut,$t)=>[(Ut[0]+$t[0])/2,(Ut[1]+$t[1])/2,(Ut[2]+$t[2])/2],Rt=(Ut,$t)=>Math.hypot(Ut[0]-$t[0],Ut[1]-$t[1],Ut[2]-$t[2]),zt=!1;for(let Ut=0;Ut<X.length/9;Ut++){let $t=mt(Ut*3),oe=mt(Ut*3+1),Yt=mt(Ut*3+2),ce=Rt($t,oe)>P,be=Rt(oe,Yt)>P,we=Rt(Yt,$t)>P,de=(Ie,Je,ei)=>at.push(...Ie,...Je,...ei),He=ce+be+we;if(He&&(zt=!0),He===0)de($t,oe,Yt);else if(He===3){let Ie=Q($t,oe),Je=Q(oe,Yt),ei=Q(Yt,$t);de($t,Ie,ei),de(Ie,oe,Je),de(ei,Je,Yt),de(Ie,Je,ei)}else if(He===1)if(ce){let Ie=Q($t,oe);de($t,Ie,Yt),de(Ie,oe,Yt)}else if(be){let Ie=Q(oe,Yt);de($t,oe,Ie),de($t,Ie,Yt)}else{let Ie=Q(Yt,$t);de($t,oe,Ie),de(Ie,oe,Yt)}else if(ce)if(be){let Ie=Q($t,oe),Je=Q(oe,Yt);de($t,Ie,Yt),de(Ie,Je,Yt),de(Ie,oe,Je)}else{let Ie=Q($t,oe),Je=Q(Yt,$t);de($t,Ie,Je),de(Ie,oe,Yt),de(Ie,Yt,Je)}else{let Ie=Q(oe,Yt),Je=Q(Yt,$t);de($t,oe,Ie),de($t,Ie,Je),de(Je,Ie,Yt)}}if(X=at,!zt)break}let H=new i.BufferGeometry;return H.setAttribute("position",new i.Float32BufferAttribute(X,3)),H}function pt(b,P,V,X=28){let H=V?.05:.075,_t=ot(b,X),at=new i.ExtrudeGeometry(_t,{depth:P-2*H,steps:1,bevelEnabled:!0,bevelThickness:H,bevelSize:H*.85,bevelOffset:-H*.85,bevelSegments:5,curveSegments:X}),mt=it(at,.2,6),Q=mt.attributes.position,Rt=P/2,zt=P/u,Ut=new Int8Array(Q.count);for(let be=0;be<Q.count;be++){let we=Q.getX(be),de=Q.getY(be),He=Q.getZ(be)-(P-2*H)/2;Math.abs(Math.abs(He)-Rt)<1e-4&&(Ut[be]=Math.sign(He)),Q.setZ(be,He/Rt*q(we,de,V)*zt)}let $t=j(mt),oe=$t.attributes.normal,Yt=.01,ce=new i.Vector3;for(let be=0;be<Q.count;be++)if(Ut[be]){let we=Q.getX(be),de=Q.getY(be),He=(q(we+Yt,de,V)-q(we-Yt,de,V))/(2*Yt)*zt,Ie=(q(we,de+Yt,V)-q(we,de-Yt,V))/(2*Yt)*zt;ce.set(-He*Ut[be],-Ie*Ut[be],1*Ut[be]).normalize(),oe.setXYZ(be,ce.x,ce.y,ce.z)}return $t}let ut=(b,P,V)=>{let X=n.archR,H=n.archY,_t=Math.asin(Math.min(1,(n.sill-H)/X));V>0?b.absarc(P,H,X,Math.PI-_t,_t,!0):b.absarc(P,H,X,_t,Math.PI-_t,!1)},rt=(b,P,V,X,H,_t,at)=>{let mt=new i.Shape,Q=n.sill;return H?mt.moveTo(b+.08,Q-.02):mt.moveTo(b,Q),at&&(mt.lineTo(-g-n.archR-.01,Q),ut(mt,-g,1)),_t&&(mt.lineTo(g-n.archR-.01,Q),ut(mt,g,1)),X?(mt.lineTo(P-.1,Q-.04),mt.quadraticCurveTo(P+.005,Q-.02,P+.01,Q+.14),V.front(mt)):(mt.lineTo(P,Q),mt.lineTo(P,V.h1)),V.top(mt),H?(mt.lineTo(b+.005,V.h0-.06),mt.quadraticCurveTo(b-.01,(V.h0+Q)/2,b+.01,Q+.12),mt.quadraticCurveTo(b,Q-.02,b+.08,Q-.02)):mt.lineTo(b,Q),mt},ct=c?1.16:1.06,W=c?.92:.96,xt={front:b=>{b.lineTo(B+.02,c?.96:.86),b.quadraticCurveTo(B+.02,ct+.02,B-.08,ct)}},Tt;if(c){Tt=Y;let b=new i.Shape;b.moveTo(Y+.08,n.sill-.02),b.lineTo(-g-n.archR-.01,n.sill),ut(b,-g,1),b.lineTo(g-n.archR-.01,n.sill),ut(b,g,1),b.lineTo(B-.1,n.sill-.04),b.quadraticCurveTo(B+.005,n.sill-.02,B+.01,n.sill+.14),xt.front(b),b.lineTo(W,d),b.lineTo(Y+.04,d-.01),b.quadraticCurveTo(Y-.01,d-.03,Y-.005,d-.12),b.lineTo(Y-.01,n.sill+.12),b.quadraticCurveTo(Y,n.sill-.02,Y+.08,n.sill-.02),A(pt(b,u,!1),M)}else{Tt=-1.32,xt.h0=d,xt.h1=d,xt.top=at=>{at.quadraticCurveTo(W+.6,d+.03,W,d),at.lineTo(Tt,d)};let b=new i.Shape;b.moveTo(Tt,n.sill),b.lineTo(g-n.archR-.01,n.sill),ut(b,g,1),b.lineTo(B-.1,n.sill-.04),b.quadraticCurveTo(B+.005,n.sill-.02,B+.01,n.sill+.14),xt.front(b),b.lineTo(W,d),b.lineTo(Tt,d),b.lineTo(Tt,n.sill),A(pt(b,u,!1),M);let P=.94,V=Y,X=Tt-.03,H=new i.Shape;H.moveTo(V+.06,n.sill),H.lineTo(-g-n.archR-.01,n.sill),ut(H,-g,1),H.lineTo(X,n.sill),H.lineTo(X,P),H.lineTo(V+.02,P),H.quadraticCurveTo(V,P,V,P-.05),H.lineTo(V,n.sill+.06),H.quadraticCurveTo(V,n.sill,V+.06,n.sill),A(pt(H,u,!1),M);for(let at of[-1,1]){let mt=new i.Shape;mt.moveTo(V+.03,P-.02),mt.lineTo(X,P-.02),mt.lineTo(X,d),mt.lineTo(V+.03,d-.01);let Q=new i.ExtrudeGeometry(mt,{depth:.05,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelOffset:-.015,bevelSegments:2}),Rt=A(Q,M);Rt.position.z=at>0?q(-2,1)-.065:-q(-2,1)+.015,I(X-V-.05,.035,.09,(V+X)/2,d+.01,at*(q(-2,1)-.04),h.black)}I(.06,d-P,u-.16,X-.02,(d+P)/2,0,M),I(X-V-.1,.012,u-.2,(V+X)/2,P+.006,0,h.trim);for(let at=0;at<6;at++)I(X-V-.12,.02,.05,(V+X)/2,P+.02,-.65+at*.26,h.trim);for(let at of[-1,1])A(new i.CylinderGeometry(.035,.035,.42,12),h.black).position.set(X-.12,d+.2,at*(f-.14));let _t=A(new i.CylinderGeometry(.035,.035,u-.28,12),h.black);_t.rotation.x=Math.PI/2,_t.position.set(X-.12,d+.41,0);for(let at of[g,-g])for(let mt of[-1,1]){let Q=new i.Shape,Rt=n.archR+.005,zt=n.archR+.075;Q.absarc(0,0,zt,Math.PI+.12,-.12,!0),Q.absarc(0,0,Rt,-.12,Math.PI+.12,!1);let Ut=new i.ExtrudeGeometry(Q,{depth:.05,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelOffset:-.012,bevelSegments:2,curveSegments:24});A(Ut,h.trim).position.set(at,n.archY,mt>0?q(at,.8)-.03:-q(at,.8)-.03)}}let Gt=new i.Shape,bt=c?.06:.16,Pt=c?Y+.2:Tt+.12,fe=c?Y+.04:Tt+.02;Gt.moveTo(fe,d-.02),Gt.lineTo(W-.02,d-.02),Gt.quadraticCurveTo((W+bt)/2+.05,(d+p)/2-.02,bt,p-.04),Gt.quadraticCurveTo(bt-.18,p+.005,bt-.4,p),Gt.lineTo(Pt+.25,p-.005),Gt.quadraticCurveTo(Pt,p-.01,Pt-(c?.1:.06),p-.08),Gt.lineTo(fe,d-.02);let Zt=u-.06,ue=A(pt(Gt,Zt,!0,24),h.glass),te=new i.Shape;te.moveTo(bt-.05,p-.05),te.quadraticCurveTo(bt-.18,p+.012,bt-.4,p+.008),te.lineTo(Pt+.25,p+.003),te.quadraticCurveTo(Pt+.005,p-.004,Pt-(c?.09:.05),p-.08),te.lineTo(Pt-(c?.06:.02),p-.1),te.lineTo(bt-.05,p-.1),A(pt(te,Zt+.012,!0,16),M);let ft=(b,P)=>q(b,P,!0)*(Zt/u)+.004,At=(b,P,V,X,H,_t,at)=>{let mt=new i.Vector3(b,P,at*ft(b,P)),Q=new i.Vector3(V,X,at*ft(V,X)),Rt=mt.distanceTo(Q),zt=A(new i.BoxGeometry(Rt,H,.012),_t);zt.position.copy(mt).add(Q).multiplyScalar(.5),zt.quaternion.setFromUnitVectors(new i.Vector3(1,0,0),Q.clone().sub(mt).normalize());let Ut=new i.Vector3(0,0,at);return zt.rotation.x+=at*-.14*0,zt},yt=c?[.98,-.25,-1.5]:[.98,-.2,Tt];for(let b of[-1,1]){At(W-.03,d+.02,bt-.03,p-.06,.07,M,b),At(yt[1]+.02,d+.02,yt[1]-.04,p-.06,.09,h.piano,b),c?(At(yt[2],d+.02,yt[2]-.05,p-.06,.12,h.piano,b),At(Y+.3,d+.02,Pt+.05,p-.06,.22,M,b)):At(Tt+.07,d+.02,Pt-.02,p-.07,.12,M,b);let P=I(W-fe-.06,.03,.02,(W+fe)/2,d+.008,b*(q(0,d)-.01),c?h.chrome:h.black);P.position.z=b*(ft(0,d+.01)+.012),c&&At(bt-.45,p-.085,Y+.45,p-.095,.022,h.chrome,b)}for(let b of[-.45,.15]){let P=I(.02,.012,.62,W+.02,d+.03,b,h.black);P.rotation.y=.18}let Nt={};function Dt(b,P,V,X,H){let _t=new i.Group,at=X*(q((P+V)/2,.85)+.002);_t.position.set(H?V:P,0,at),y.add(_t);let mt=n.sill+.04,Q=d-.03,Rt=new i.Shape,zt=H?-(V-P):0,Ut=H?0:V-P,$t=H?V:P,oe=Ie=>{let Je=Ie+$t,ei=mt;for(let Md of[g,-g]){let wl=Je-Md;Math.abs(wl)<n.archR+.05&&(ei=Math.max(ei,n.archY+Math.sqrt(Math.max(0,(n.archR+.05)**2-wl*wl))+.015))}return Math.min(ei,Q-.15)};Rt.moveTo(zt+.01,oe(zt+.01));for(let Ie=1;Ie<=24;Ie++){let Je=zt+.01+(Ut-zt-.02)*Ie/24;Rt.lineTo(Je,oe(Je))}Rt.lineTo(Ut-.005,Q),Rt.lineTo(zt+.005,Q),Rt.lineTo(zt+.01,oe(zt+.01));let Yt=new i.ExtrudeGeometry(Rt,{depth:.022,bevelEnabled:!0,bevelThickness:.008,bevelSize:.01,bevelOffset:-.01,bevelSegments:2});Yt.translate(0,0,X>0?-.012:-.01);let ce=A(Yt,M,_t);A(new i.BoxGeometry(V-P-.06,Q-mt-.06,.04),h.interior,_t).position.set((zt+Ut)/2,(mt+Q)/2,-X*.03);let we=H?zt+.22:Ut-.22;A(new i.BoxGeometry(.2,.035,.03),c?h.chrome:h.black,_t).position.set(we,Q-.13,X*.022);let He=A(new i.PlaneGeometry(V-P-.08,Q-mt-.04),h.aperture);return He.position.set((P+V)/2,(mt+Q)/2,at-X*.006),He.rotation.y=X>0?0:Math.PI,_t.userData={axis:"y",open:0,target:0,max:X*(H?-1.1:1.1)*-1},ce.userData.panel=b,O.push(ce),Nt[b]=_t,_t}Dt("frontLeft",yt[1]+.01,yt[0],-1,!0),Dt("frontRight",yt[1]+.01,yt[0],1,!0),Dt("rearLeft",yt[2]+.02,yt[1]-.01,-1,!0),Dt("rearRight",yt[2]+.02,yt[1]-.01,1,!0);for(let b of["frontLeft","frontRight","rearLeft","rearRight"]){let P=Nt[b],V=b.endsWith("Left")?-1:1;P.userData.max=V*1.15,P.userData.sign=1}{let b=new i.Group;b.position.set(W-.02,d+.004,0),y.add(b);let P=B-.12-W,V=Math.atan2(ct-d,P),X=new i.Shape,H=q(W+P/2,d)-.06;X.moveTo(0,-H),X.lineTo(P,-H+.07),X.quadraticCurveTo(P+.04,0,P,H-.07),X.lineTo(0,H),X.lineTo(0,-H);let _t=new i.ExtrudeGeometry(X,{depth:.02,bevelEnabled:!0,bevelThickness:.01,bevelSize:.02,bevelOffset:-.02,bevelSegments:3});_t.rotateX(Math.PI/2),_t.translate(0,.02,0);let at=A(_t,M,b);at.rotation.z=V;let mt=F(P*.6,.02,c?.9:.75,.02,M,b);mt.position.set(P*.45,.025+Math.sin(V)*P*.45,0),mt.rotation.z=V,b.userData={axis:"z",open:0,target:0,max:.9},at.userData.panel="hood",O.push(at,mt),Nt.hood=b;let Q=I(P-.2,.2,u-.5,W+P/2,Math.min(d,ct)-.16,0,h.under);F(.6,.18,.7,.04,h.satin).position.set(W+P*.55,d-.16,0),F(.48,.05,.56,.03,h.piano).position.set(W+P*.55,d-.07,0)}if(c){let b=new i.Group;b.position.set(Pt-.05,p-.07,0),y.add(b);let P=p-.07-.58,V=F(.07,P,u-.16,.04,M,b);V.position.set(-.13,-P/2,0),V.rotation.z=-.06;let X=F(.02,P*.36,u-.46,.04,h.glass,b);X.position.set(-.17,-P*.25,0),X.rotation.z=-.06;let H=ie("REGENT",.7,.09);H.position.set(-.175,-P*.62,0),H.rotation.y=-Math.PI/2,b.add(H);let _t=A(new i.CircleGeometry(.065,32),h.emblem,b);_t.position.set(-.176,-P*.52,0),_t.rotation.y=-Math.PI/2,b.userData={axis:"z",open:0,target:0,max:-1.2},V.userData.panel="tailgate",O.push(V),Nt.tailgate=b}else{let b=new i.Group;b.position.set(Y+.02,.96,0),y.add(b);let P=F(.06,d-.96,u-.08,.02,M,b);P.position.set(0,(d-.96)/2,0);let V=I(.03,.04,.24,-.03,d-.96-.08,0,h.black,b),X=ie("VOLTA",.6,.09);X.position.set(-.032,.11,0),X.rotation.y=-Math.PI/2,b.add(X),b.userData={axis:"z",open:0,target:0,max:Math.PI/2},P.userData.panel="tailgate",O.push(P),Nt.tailgate=b}function ie(b,P,V){let X=o(new i.CanvasTexture(l(512,80,(H,_t,at)=>{H.clearRect(0,0,_t,at),H.fillStyle="#ffffff",H.font="700 58px Inter, Arial, sans-serif",H.textAlign="center",H.textBaseline="middle","letterSpacing"in H&&(H.letterSpacing="22px"),H.fillText(b,_t/2,at/2+2)})));return new i.Mesh(new i.PlaneGeometry(P,V),new i.MeshStandardMaterial({map:X,transparent:!0,metalness:1,roughness:.15,color:a("#e8e8e8")}))}let Lt=new i.Group;Lt.position.set(B+.012,0,0),y.add(Lt);let se=c?.62:.58,jt=ct-.05;if(c){let b=new i.CanvasTexture(l(512,256,(Q,Rt,zt)=>{Q.fillStyle="#050505",Q.fillRect(0,0,Rt,zt),Q.strokeStyle="#ffffff",Q.lineWidth=5;for(let Ut=-zt;Ut<Rt+zt;Ut+=26)Q.beginPath(),Q.moveTo(Ut,0),Q.lineTo(Ut+zt,zt),Q.stroke(),Q.beginPath(),Q.moveTo(Ut,zt),Q.lineTo(Ut+zt,0),Q.stroke()})),P=new i.MeshStandardMaterial({color:a("#9c9fa2"),metalnessMap:b,metalness:1,roughness:.18,map:o(b)}),V=1.25,X=jt-se-.05,H=A(new i.PlaneGeometry(V,X),P,Lt);H.rotation.y=Math.PI/2,H.position.set(.004,(se+jt)/2,0);for(let[Q,Rt,zt,Ut]of[[V+.06,.035,jt-.02,0],[V+.06,.035,se+.02,0]])I(.03,Rt,Q,.01,zt,Ut,h.chrome,Lt);for(let Q of[-V/2-.015,V/2+.015])I(.03,X+.06,.035,.01,(se+jt)/2,Q,h.chrome,Lt);let _t=A(new i.CircleGeometry(.075,40),h.emblem,Lt);_t.rotation.y=Math.PI/2,_t.position.set(.03,(se+jt)/2+.03,0);for(let Q of[-1,1]){let Rt=I(.03,.42,.045,-.005,jt-.2,Q*(f-.14),h.drl,Lt);F(.05,.1,.32,.03,h.piano,Lt).position.set(-.01,jt-.06,Q*(f-.3));for(let Ut=0;Ut<3;Ut++){let $t=A(new i.CylinderGeometry(.03,.03,.02,20),h.head,Lt);$t.rotation.z=Math.PI/2,$t.position.set(.02,jt-.06,Q*(f-.4+Ut*.09))}I(.03,.18,.03,-.004,jt-.4,Q*(f-.14),h.amber,Lt).userData.ind=Q}F(.12,.26,u-.12,.06,M,Lt).position.set(-.04,.5,0),I(.02,.025,u-.5,.025,.47,0,h.chrome,Lt),F(.04,.1,1.2,.03,h.black,Lt).position.set(0,.43,0)}else{F(.06,jt-se,1.12,.05,h.piano,Lt).position.set(0,(se+jt)/2,0);for(let H=0;H<4;H++)I(.025,.035,1,.025,se+.08+H*.1,0,H===1?h.chrome:h.black,Lt);let P=A(new i.CircleGeometry(.07,40),h.emblem,Lt);P.rotation.y=Math.PI/2,P.position.set(.045,se+.21,0);for(let H of[-1,1]){let _t=F(.05,.13,.4,.04,h.piano,Lt);_t.position.set(-.02,jt-.07,H*(f-.29)),_t.rotation.y=H*.18;let at=I(.02,.022,.38,.012,jt-.015,H*(f-.3),h.drl,Lt);at.rotation.y=H*.18;for(let Q=0;Q<2;Q++){let Rt=A(new i.CylinderGeometry(.034,.034,.02,20),h.head,Lt);Rt.rotation.z=Math.PI/2,Rt.position.set(.012,jt-.08,H*(f-.36+Q*.12))}I(.02,.03,.12,0,jt-.15,H*(f-.2),h.amber,Lt).userData.ind=H;let mt=A(new i.CylinderGeometry(.04,.04,.03,20),h.head,Lt);mt.rotation.z=Math.PI/2,mt.position.set(-.03,.47,H*(f-.3))}F(.14,.24,u-.08,.05,h.trim,Lt).position.set(-.04,.48,0);let X=F(.08,.1,.9,.04,h.satin,Lt);X.position.set(-.02,.36,0),X.rotation.z=-.4;for(let H of[-.4,.4]){let _t=A(new i.TorusGeometry(.035,.012,8,16),h.caliper,Lt);_t.position.set(.04,.42,H),_t.rotation.y=Math.PI/2}}let ae=o(new i.CanvasTexture(l(1040,224,(b,P,V)=>{b.fillStyle="#fbfbf7",b.beginPath(),b.moveTo(18,0),b.arcTo(P,0,P,V,18),b.arcTo(P,V,0,V,18),b.arcTo(0,V,0,0,18),b.arcTo(0,0,P,0,18),b.fill();let H=b.createLinearGradient(0,0,0,V);H.addColorStop(0,"rgba(255,255,255,.6)"),H.addColorStop(1,"rgba(0,0,0,.06)"),b.fillStyle=H,b.fillRect(0,0,P,V),b.strokeStyle="#111",b.lineWidth=10,b.strokeRect(14,14,P-28,V-28),b.fillStyle="#ce1126",b.fillRect(30,30,92,54),b.fillStyle="#fcd116",b.fillRect(30,84,92,54),b.fillStyle="#006b3f",b.fillRect(30,138,92,54),b.fillStyle="#000",b.beginPath();for(let _t=0;_t<10;_t++){let at=-Math.PI/2+_t*Math.PI/5,mt=_t%2?7:17;b.lineTo(76+Math.cos(at)*mt,111+Math.sin(at)*mt)}b.fill(),b.fillStyle="#111",b.font="800 30px Inter, Arial, sans-serif",b.textAlign="center",b.fillText("GH",76,208),b.font="800 138px Inter, Arial, sans-serif",b.textBaseline="middle","letterSpacing"in b&&(b.letterSpacing="4px"),b.fillStyle="rgba(0,0,0,.18)",b.fillText("BU 0858-26",P/2+72,V/2+10),b.fillStyle="#111",b.fillText("BU 0858-26",P/2+70,V/2+7)}))),k=new i.MeshStandardMaterial({map:ae,roughness:.4}),Ce=A(new i.PlaneGeometry(.52,.112),k,Lt,!1);Ce.rotation.y=Math.PI/2,Ce.position.set(.075,.5,0);let Kt=new i.Group;Kt.position.set(Y-.012,0,0),y.add(Kt);let me=[],It=[];if(c){for(let P of[-1,1]){let V=I(.04,.62,.08,0,d+.05,P*(f-.07),h.tail,Kt);me.push(V);let X=I(.04,.05,.28,0,d+.33,P*(f-.2),h.tail,Kt);me.push(X),I(.042,.12,.05,.003,d-.12,P*(f-.08),h.amber,Kt).userData.ind=P,I(.042,.08,.05,.003,d-.22,P*(f-.08),h.reverse,Kt);let H=A(new i.CylinderGeometry(.045,.045,.14,18,1,!0),h.chrome,Kt);H.rotation.z=Math.PI/2,H.position.set(0,.4,P*.55)}F(.14,.24,u-.1,.06,M,Kt).position.set(.04,.52,0),I(.02,.025,u-.6,-.03,.6,0,h.chrome,Kt)}else{for(let H of[-1,1]){let _t=F(.05,.42,.11,.03,h.tail,Kt);_t.position.set(0,d-.2,H*(f-.06)),me.push(_t),I(.052,.08,.08,.004,d-.34,H*(f-.06),h.amber,Kt).userData.ind=H,I(.052,.06,.08,.004,d-.07,H*(f-.06),h.reverse,Kt)}F(.16,.18,u-.1,.04,h.satin,Kt).position.set(.03,.52,0);let P=I(.1,.03,.4,.02,.62,0,h.black,Kt),V=A(new i.CylinderGeometry(.035,.035,.2,14,1,!0),h.satin,Kt);V.rotation.z=Math.PI/2,V.position.set(.05,.36,.55);let X=I(.03,.03,.42,Tt+.05-(Y-.012),p-.02,0,h.tail,Kt);It.push(X)}let Le=A(new i.PlaneGeometry(.52,.112),k,Kt,!1);Le.rotation.y=-Math.PI/2,Le.position.set(c?-.04:-.06,c?.72:.7,0);for(let b of[-1,1]){let P=new i.Group;P.position.set(W-.2,d+.1,b*(q(W,d)+.04)),y.add(P);let V=I(.06,.04,.08,0,-.03,0,h.black,P);F(.12,.2,.26,.05,c?h.chrome:M,P).position.set(-.01,.04,b*.15);let H=A(new i.PlaneGeometry(.22,.16),h.chrome,P);H.rotation.y=-Math.PI/2,H.position.set(-.075,.04,b*.15),I(.04,.015,.12,.03,-.045,b*.2,h.amber,P).userData.ind=b,P.userData.side=b,Nt["mirror"+(b<0?"Left":"Right")]=P;let _t=c?F(yt[0]-yt[2]+.05,.04,.17,.02,h.piano):A(new i.CylinderGeometry(.03,.03,yt[0]-yt[2],14),h.black);if(c||(_t.rotation.z=Math.PI/2),_t.position.set((yt[0]+yt[2])/2,n.sill-.08,b*(f-.07)),c){let at=A(new i.CylinderGeometry(.018,.018,2.3,10),h.chrome);at.rotation.z=Math.PI/2,at.position.set(-1,p+.05,b*(f-.22));for(let mt of[-2.1,.1])I(.06,.05,.04,mt,p+.025,b*(f-.22),h.black)}}if(F(.18,.06,.06,.025,h.piano).position.set(Pt+.25,p+.03,0),I(B-Y-.6,.12,u-.5,(B+Y)/2,n.sill-.02,0,h.under),!c){let b=A(new i.CylinderGeometry(.05,.05,n.track-.2,12),h.under);b.rotation.x=Math.PI/2,b.position.set(-g,n.tyreR,0),A(new i.SphereGeometry(.14,16,12),h.under).position.set(-g,n.tyreR,0)}let Bt=new i.Group;y.add(Bt);let R=W-.28;F(.42,.22,u-.26,.08,h.interior,Bt).position.set(R,d+.02,0),F(.3,.05,u-.3,.02,h.trim,Bt).position.set(R+.05,d+.14,0);let J=new i.MeshStandardMaterial({color:a(c?"#73523b":"#3e4845"),roughness:c?.38:.7});I(.028,.053,u-.38,R-.22,d+.02,0,J,Bt);for(let b of[-.68,-.18,.27,.68]){I(.022,.078,.12,R-.236,d+.055,b,h.black,Bt);for(let P=-1;P<=1;P++)I(.012,.005,.105,R-.251,d+.055+P*.018,b,h.satin,Bt)}let z=document.createElement("canvas");z.width=512,z.height=192;let dt=o(new i.CanvasTexture(z)),gt=new i.MeshStandardMaterial({map:dt,emissive:a("#ffffff"),emissiveMap:dt,emissiveIntensity:.9,roughness:.3}),Z=A(new i.PlaneGeometry(c?.4:.34,.14),gt,Bt,!1);Z.position.set(R-.19,d+.13,-.38),Z.rotation.y=-Math.PI/2,F(.04,.18,c?.45:.39,.016,h.trim,Bt).position.set(R-.148,d+.13,-.38);let ht=document.createElement("canvas");ht.width=512,ht.height=290;let D=o(new i.CanvasTexture(ht)),tt=A(new i.PlaneGeometry(.3,.17),gt.clone(),Bt,!1);tt.position.set(R-.2,d+.12,-.03),tt.rotation.y=-Math.PI/2-.32,tt.material.map=tt.material.emissiveMap=D,tt.material.emissiveIntensity=.75;let nt=(b,P,V)=>{let X=b.createLinearGradient(0,0,P,V);X.addColorStop(0,"#0e1211"),X.addColorStop(1,"#192019"),b.fillStyle=X,b.fillRect(0,0,P,V),b.fillStyle="#BBA783",b.font="600 18px Inter, Arial",b.textAlign="left",b.fillText("PKM MOTORS",34,58),b.fillStyle="#F2F0EA",b.font="700 46px Inter, Arial",b.fillText(n.name,32,118),b.fillStyle="#9A948B",b.font="500 20px Inter, Arial",b.fillText(c?"V8 \xB7 10-speed \xB7 AWD":"2.8 turbo-diesel \xB7 4\xD74",34,154),b.strokeStyle="#2b342e",b.lineWidth=2,b.beginPath(),b.moveTo(34,196),b.lineTo(P-34,196),b.stroke(),b.fillStyle="#93AE7C",b.font="500 18px Inter, Arial",b.fillText("Map starts when you drive",34,238)},vt=-1/0,wt=!1;function Ct(b){let P=performance.now();if(!b){wt&&(wt=!1,nt(ht.getContext("2d"),512,290),D.needsUpdate=!0);return}if(P-vt<110)return;vt=P,wt=!0;let V=ht.getContext("2d");V.save(),b(V,512,290),V.restore(),D.needsUpdate=!0}nt(ht.getContext("2d"),512,290),D.needsUpdate=!0;let qt=new i.Group;qt.position.set(R-.3,d+.06,-.38),qt.rotation.z=-.42,Bt.add(qt);let re=new i.Group;qt.add(re);let Et=A(new i.TorusGeometry(.185,.018,12,40),h.leather,re);Et.rotation.y=Math.PI/2;let ee=F(.05,.1,.12,.03,h.interior,re);for(let b of[0,2.1,-2.1]){let P=I(.018,.15,.026,0,0,0,h.trim,re);P.position.set(0,Math.cos(b)*-.09,Math.sin(b)*.09),P.rotation.x=b}let ge=A(new i.CircleGeometry(.032,24),h.emblem,re);ge.position.x=-.03,ge.rotation.y=-Math.PI/2;let Vt=A(new i.CylinderGeometry(.03,.04,.3,10),h.trim,qt);Vt.rotation.z=Math.PI/2,Vt.position.x=.15;let Ae=(b,P,V)=>{let X=new i.Group;X.position.set(b,0,P),Bt.add(X),F(.5,.12,V,.05,h.leather,X).position.set(0,n.sill+.25,0);let _t=F(.12,.6,V,.05,h.leather,X);if(_t.position.set(-.25,n.sill+.55,0),_t.rotation.z=.2,V<.7){let at=F(.08,.16,.26,.04,h.leather,X);at.position.set(-.32,n.sill+.92,0),at.rotation.z=.2}return X},ke=yt[1]+.48;Ae(ke,-.38,.52),Ae(ke,.38,.52),c?(Ae(-.55,-.4,.54),Ae(-.55,.4,.54),Ae(-1.75,0,1.5)):Ae(yt[1]-.45,0,1.45),F(.9,.18,.22,.05,h.interior,Bt).position.set(ke+.1,n.sill+.3,0),F(.07,.08,.05,.02,h.chrome,Bt).position.set(ke+.35,n.sill+.42,0);let Vi=I(W-Tt-.2,.02,u-.25,(W+Tt)/2,n.sill+.05,0,h.trim,Bt),K=I(W-fe-.7,.02,Zt-.35,(bt+Pt)/2,p-.12,0,h.leather,Bt);K.material=new i.MeshStandardMaterial({color:a(c?"#cdbfae":"#3c3d3e"),roughness:.9});let St=new i.PointLight(16771532,0,2.6,1.5);St.position.set(ke-.2,p-.25,0),Bt.add(St);let Ft=I(.01,.006,u-.45,R-.2,d-.02,0,new i.MeshStandardMaterial({color:a("#BBA783"),emissive:a("#BBA783"),emissiveIntensity:0}),Bt);F(.043,.075,.25,.02,h.black,Bt).position.set(bt-.13,p-.185,.02);let Oe=I(.004,.057,.216,bt-.154,p-.185,.02,h.satin,Bt);Oe.castShadow=!1;let Ze=new i.BufferGeometry,Se=d+.04,Be=p-.1,De=W-.05,Ke=bt+.045;Ze.setAttribute("position",new i.Float32BufferAttribute([De,Se,-ft(De,Se),De,Se,ft(De,Se),Ke,Be,ft(Ke,Be),Ke,Be,-ft(Ke,Be)],3)),Ze.setIndex([0,1,2,0,2,3]),Ze.computeVertexNormals();let yn=A(Ze,new i.MeshBasicMaterial({color:a("#aad4de"),side:i.DoubleSide,transparent:!0,opacity:.065,depthWrite:!1}),Bt,!1);yn.visible=!1;let Sl=new i.MeshStandardMaterial({color:a(c?"#b7a994":"#2f3231"),roughness:.85});for(let b of[-1,1]){let P=new i.Vector3(W-.05,d+.03,b*(ft(W-.05,d+.03)-.04)),V=new i.Vector3(bt-.01,p-.09,b*(ft(bt-.01,p-.09)-.04)),X=A(new i.BoxGeometry(P.distanceTo(V),.075,.03),Sl,Bt,!1);X.position.copy(P).add(V).multiplyScalar(.5),X.quaternion.setFromUnitVectors(new i.Vector3(1,0,0),V.sub(P).normalize())}let Qs=[],ha=(()=>{let b=n.tyreR,P=n.tyreW,V=b*(c?.72:.62),X=[],H=18;X.push(new i.Vector2(V,-P/2+.02));for(let mt=0;mt<=H;mt++){let Q=mt/H,Rt=V+(b-.02-V)*Q,zt=Math.sin(Q*Math.PI)*.018+.01*Q;X.push(new i.Vector2(Rt,-P/2-zt))}X.push(new i.Vector2(b-.005,-P/2+.01),new i.Vector2(b,-P/2+.03),new i.Vector2(b,P/2-.03),new i.Vector2(b-.005,P/2-.01));for(let mt=H;mt>=0;mt--){let Q=mt/H,Rt=V+(b-.02-V)*Q,zt=Math.sin(Q*Math.PI)*.018+.01*Q;X.push(new i.Vector2(Rt,P/2+zt))}X.push(new i.Vector2(V,P/2-.02));let _t=new i.LatheGeometry(X,64),at=_t.attributes.uv;for(let mt=0;mt<at.count;mt++)at.setX(mt,at.getX(mt)*1);return _t.rotateX(Math.PI/2),_t})(),Ln=n.tyreR*(c?.72:.62);function bl(b){let P=new i.Group,V=A(ha,h.tyre,P),X=A(new i.CylinderGeometry(Ln,Ln,n.tyreW-.03,40,1,!0),h.rim,P);X.rotation.x=Math.PI/2;let H=A(new i.TorusGeometry(Ln-.004,.008,8,48),h.rim,P);H.position.z=b*(n.tyreW/2-.02);let _t=A(new i.CylinderGeometry(Ln-.01,Ln*.5,.05,40,1,!0),h.under,P);_t.rotation.x=Math.PI/2,_t.position.z=b*(n.tyreW/2-.06);let at=c?10:6;for(let Rt=0;Rt<at;Rt++){let zt=Rt/at*Math.PI*2,Ut=new i.Mesh(new i.BoxGeometry(c?.028:.06,Ln-.06,.035),h.rim);if(Ut.geometry.translate(0,(Ln-.06)/2+.05,0),Ut.rotation.z=zt,Ut.position.z=b*(n.tyreW/2-.035),Ut.castShadow=!0,P.add(Ut),c&&Rt%2===0){let $t=Ut.clone();$t.rotation.z=zt+.18,P.add($t)}}let mt=A(new i.CylinderGeometry(.065,.07,.03,32),h.rim,P);mt.rotation.x=Math.PI/2,mt.position.z=b*(n.tyreW/2-.025);let Q=A(new i.CircleGeometry(.05,32),h.emblem,P);Q.position.z=b*(n.tyreW/2-.008),b<0&&(Q.rotation.y=Math.PI);for(let Rt=0;Rt<6;Rt++){let zt=Rt/6*Math.PI*2,Ut=A(new i.CylinderGeometry(.011,.011,.02,6),h.chrome,P);Ut.rotation.x=Math.PI/2,Ut.position.set(Math.cos(zt)*.085,Math.sin(zt)*.085,b*(n.tyreW/2-.035))}return P}for(let[b,P,V]of[[g,-1,!0],[g,1,!0],[-g,-1,!1],[-g,1,!1]]){let X=new i.Group;X.position.set(b,n.tyreR,P*n.track/2),x.add(X);let H=bl(P);X.add(H);let _t=A(new i.CylinderGeometry(Ln-.04,Ln-.04,.03,32),h.disc,X);_t.rotation.x=Math.PI/2,_t.position.z=P*.01;let at=F(.12,.08,.06,.02,h.caliper,X);at.position.set(V?-.02:.02,Ln-.07,P*.02),at.rotation.z=V?.6:-.6,Qs.push({pivot:X,spin:H,front:V,side:P,baseY:n.tyreR,x:b,z:P*n.track/2})}let ua=[];if(e.lights!==!1)for(let b of[-1,1]){let P=new i.SpotLight(16774890,0,70,.48,.5,1.6);P.position.set(B-.05,jt-.06,b*(f-.3)),P.target.position.set(B+12,0,b*1.2),y.add(P,P.target),ua.push(P)}let vi=e.lights!==!1?new i.PointLight(16719888,0,4,2):null;vi&&(vi.position.set(Y-.4,.8,0),y.add(vi));let T={"-1":h.amber.clone(),1:h.amber.clone()};y.traverse(b=>{b.isMesh&&b.userData.ind&&(b.material=T[b.userData.ind])});let G=h.tail.clone();for(let b of It)b.material=G;{let b=B-Y+.7,P=u+.55,V=new i.CanvasTexture(l(256,128,(H,_t,at)=>{H.fillStyle="#000",H.fillRect(0,0,_t,at);let mt=(Q,Rt,zt,Ut,$t)=>{let oe=H.createRadialGradient(Q,Rt,0,Q,Rt,1);oe.addColorStop(0,`rgba(255,255,255,${$t})`),oe.addColorStop(1,"rgba(255,255,255,0)"),H.save(),H.translate(Q,Rt),H.scale(zt,Ut),H.translate(-Q,-Rt),H.fillStyle=oe,H.beginPath(),H.arc(Q,Rt,1,0,7),H.fill(),H.restore()};mt(_t/2,at/2,_t*.5,at*.48,.55);for(let Q of[.5+g/b,.5-g/b])for(let Rt of[.2,.8])mt(_t*Q+(B+Y)/2/b*-_t,at*Rt,_t*.09,at*.16,.9)})),X=new i.Mesh(new i.PlaneGeometry(b,P),new i.MeshBasicMaterial({color:0,alphaMap:V,transparent:!0,depthWrite:!1,opacity:.78,polygonOffset:!0,polygonOffsetFactor:-4}));X.rotation.x=-Math.PI/2,X.position.set((B+Y)/2,.012,0),X.renderOrder=2,x.add(X)}function lt(b){for(let V of[...b.children])!V.isMesh&&V.children.length&&lt(V);let P=new Map;for(let V of b.children){if(!V.isMesh||V.userData.panel||Array.isArray(V.material)||V.material.transparent)continue;let X=V.material.uuid+(V.castShadow?"s":"n");P.has(X)||P.set(X,[]),P.get(X).push(V)}for(let V of P.values()){if(V.length<2)continue;let X=V.map(Ut=>{Ut.updateMatrix();let $t=Ut.geometry.index?Ut.geometry.toNonIndexed():Ut.geometry.clone();return $t.applyMatrix4(Ut.matrix),$t.attributes.normal||$t.computeVertexNormals(),$t}),H=X.reduce((Ut,$t)=>Ut+$t.attributes.position.count,0),_t=new Float32Array(H*3),at=new Float32Array(H*3),mt=new Float32Array(H*2),Q=0;for(let Ut of X){let $t=Ut.attributes.position.count;_t.set(Ut.attributes.position.array,Q*3),at.set(Ut.attributes.normal.array,Q*3),Ut.attributes.uv&&mt.set(Ut.attributes.uv.array,Q*2),Q+=$t,Ut.dispose()}let Rt=new i.BufferGeometry;Rt.setAttribute("position",new i.BufferAttribute(_t,3)),Rt.setAttribute("normal",new i.BufferAttribute(at,3)),Rt.setAttribute("uv",new i.BufferAttribute(mt,2));let zt=new i.Mesh(Rt,V[0].material);zt.castShadow=V[0].castShadow,zt.receiveShadow=!0;for(let Ut of V)b.remove(Ut);b.add(zt)}}lt(x);let $={head:!1,brake:!1,reverse:!1,left:!1,right:!1,hazard:!1,interiorGlow:0};function st(b){ue.visible=!b,yn.visible=b,$.interiorGlow=b}function kt(b,P){M.color.copy(a(b)),M.metalness=P??M.metalness,M.roughness=P>.5?.28:.35}function Jt(b,P){let V=Nt[b];return V?b.startsWith("mirror")?(V.userData.target=P??!V.userData.target?1:0,!!V.userData.target):(V.userData.target=P??V.userData.target===0?1:0,V.userData.target===1):!1}for(let b of["mirrorLeft","mirrorRight"])Nt[b].userData={side:Nt[b].userData.side,open:0,target:0};let Ot=0;function Ht(b,P={}){for(let[mt,Q]of Object.entries(Nt)){let Rt=Q.userData;if(Rt.open===void 0)continue;let zt=mt==="hood"||mt==="tailgate"?2.2:3.2;if(Rt.open+=(Rt.target-Rt.open)*Math.min(1,b*zt),mt.startsWith("mirror"))Q.rotation.y=Rt.side*1.1*Rt.open;else if(Rt.axis==="y"){let Ut=mt.endsWith("Left")?1:-1;Q.rotation.y=Ut*1.1*Qt(Rt.open)}else Q.rotation.z=Rt.max*Qt(Rt.open)}let V=P.night?1:0;h.head.emissiveIntensity=$.head?3:.4,h.drl.emissiveIntensity=P.engine===!1?.15:3.2;for(let mt of ua)mt.intensity=$.head?(P.lightScale??1)*60*r:0;let X=$.brake;h.tail.emissiveIntensity=X?5:$.head||P.engine?1.2:.15,G.emissiveIntensity=X?6:.05,vi&&(vi.intensity=X?2.5*r*10:0),h.reverse.emissiveIntensity=$.reverse?4:0,Ot+=b;let H=Ot%.74<.4,_t=($.left||$.hazard)&&H,at=($.right||$.hazard)&&H;return T[-1].emissiveIntensity=_t?6:0,T[1].emissiveIntensity=at?6:0,Ft.material.emissiveIntensity=P.engine?1.5:0,St.intensity=$.interiorGlow?(V?2.6:1.6)*r:0,$.left||$.right||$.hazard?H:null}let Qt=b=>1-Math.pow(1-b,3),_e=-1/0;function Re(b,P,V){let X=performance.now();if(X-_e<100)return;_e=X;let H=z.getContext("2d"),_t=512,at=192;H.fillStyle="#07090a",H.fillRect(0,0,_t,at);let mt=c?"#a7c9e4":"#dab985",Q=(Rt,zt,Ut,$t)=>{let oe=Math.PI*(.8+1.4*Math.max(0,Math.min(1,zt)));H.strokeStyle="#222",H.lineWidth=12,H.beginPath(),H.arc(Rt,110,70,Math.PI*.8,Math.PI*2.2),H.stroke(),H.strokeStyle=zt>.86?"#dc795e":mt,H.beginPath(),H.arc(Rt,110,70,Math.PI*.8,oe),H.stroke(),c||(H.strokeStyle="#fcf0db",H.lineWidth=3,H.beginPath(),H.moveTo(Rt+Math.cos(oe)*53,110+Math.sin(oe)*53),H.lineTo(Rt+Math.cos(oe)*80,110+Math.sin(oe)*80),H.stroke()),H.fillStyle="#F2F0EA",H.font="700 40px Inter, Arial",H.textAlign="center",H.fillText($t,Rt,122),H.fillStyle="#9A948B",H.font="500 16px Inter, Arial",H.fillText(Ut,Rt,150)};Q(120,b/(c?220:180),"km/h",Math.round(b)),Q(392,P/n.redline,"rpm \xD71000",(P/1e3).toFixed(1)),H.fillStyle=mt,H.font="700 46px Inter, Arial",H.textAlign="center",H.fillText(V,256,112),H.font="600 15px Inter, Arial",H.fillText(n.name.toUpperCase(),256,145),dt.needsUpdate=!0}return{spec:n,root:E,car:x,body:y,wheels:Qs,steer:re,interior:Bt,panels:Nt,clickable:O,state:$,materials:h,setPaint:kt,togglePanel:Jt,update:Ht,drawCluster:Re,drawNav:Ct,setCabinView:st,driverEye:new i.Vector3(ke-.12,Math.min(p-.19,d+.36),-.38),dims:{length:B-Y,width:u,height:p,front:B,rear:Y}}}var xl=class{constructor(){this.ctx=null,this.kind="diesel",this.on=!1,this.cabin=0,this.muted=!1}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.7;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,this.cabinFilter=e.createBiquadFilter(),this.cabinFilter.type="lowpass",this.cabinFilter.frequency.value=18e3,this.master.connect(this.cabinFilter).connect(n).connect(e.destination),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;this._buildEngine(),this._buildEnv()}return this.ctx.state!=="running"&&await this.ctx.resume(),!0}_noise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.05)}_buildEngine(){let t=this.ctx;this.eng=t.createGain(),this.eng.gain.value=0;let e=t.createWaveShaper(),n=new Float32Array(1024);for(let l=0;l<1024;l++){let c=l/512-1;n[l]=Math.tanh(c*2.6)}e.curve=n,this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.Q.value=.8,this.eng.connect(e).connect(this.engLP).connect(this.master),this.osc=[];let s=(l,c)=>{let u=t.createOscillator();u.type=l;let f=t.createGain();return f.gain.value=c,u.connect(f).connect(this.eng),u.start(),this.osc.push({o:u,g:f,base:c}),u};this.o1=s("sawtooth",.5),this.o2=s("square",.18),this.o3=s("triangle",.35),this.oSub=s("sine",.6),this.am=t.createGain(),this.am.gain.value=1,this.eng.disconnect(),this.eng.connect(this.am).connect(e),this.lfo=t.createOscillator(),this.lfo.type="square",this.lfoGain=t.createGain(),this.lfoGain.gain.value=.35,this.lfo.connect(this.lfoGain).connect(this.am.gain),this.lfo.start();let r=this._noise();this.clatBP=t.createBiquadFilter(),this.clatBP.type="bandpass",this.clatBP.frequency.value=2600,this.clatBP.Q.value=1.6,this.clat=t.createGain(),this.clat.gain.value=0,this.clatGate=t.createGain(),this.clatGate.gain.value=0,this.clatLfo=t.createOscillator(),this.clatLfo.type="square";let a=t.createGain();a.gain.value=.5,this.clatLfo.connect(a).connect(this.clatGate.gain),this.clatLfo.start(),r.connect(this.clatBP).connect(this.clatGate).connect(this.clat).connect(this.master);let o=this._noise();this.roarBP=t.createBiquadFilter(),this.roarBP.type="bandpass",this.roarBP.Q.value=.7,this.roar=t.createGain(),this.roar.gain.value=0,o.connect(this.roarBP).connect(this.roar).connect(this.master),this.turbo=t.createOscillator(),this.turbo.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turbo.connect(this.turboG).connect(this.master),this.turbo.start()}_buildEnv(){let t=this.ctx,e=this._noise();this.windLP=t.createBiquadFilter(),this.windLP.type="lowpass",this.windLP.frequency.value=600,this.wind=t.createGain(),this.wind.gain.value=0,e.connect(this.windLP).connect(this.wind).connect(this.master);let n=this._noise();this.sqBP=t.createBiquadFilter(),this.sqBP.type="bandpass",this.sqBP.frequency.value=1300,this.sqBP.Q.value=9,this.sq=t.createGain(),this.sq.gain.value=0,n.connect(this.sqBP).connect(this.sq).connect(this.master);let s=this._noise();this.grLP=t.createBiquadFilter(),this.grLP.type="lowpass",this.grLP.frequency.value=260,this.gravel=t.createGain(),this.gravel.gain.value=0,s.connect(this.grLP).connect(this.gravel).connect(this.master)}setKind(t){this.kind=t}_env(t,e,n,s,r){let a=t.gain;a.cancelScheduledValues(e),a.setValueAtTime(1e-4,e),a.exponentialRampToValueAtTime(s,e+n),a.exponentialRampToValueAtTime(1e-4,e+n+r)}click(t=3200,e=.25,n=.02){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=s.createBufferSource();a.buffer=this.noiseBuf;let o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=t,o.Q.value=3;let l=s.createGain();a.connect(o).connect(l).connect(this.master),this._env(l,r,.002,e,n),a.start(r),a.stop(r+n+.05)}thunk(t=.6){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(110,n),s.frequency.exponentialRampToValueAtTime(48,n+.18);let r=e.createGain();s.connect(r).connect(this.master),this._env(r,n,.004,t,.25),s.start(n),s.stop(n+.35),this.click(900,t*.4,.06)}latch(){this.click(2400,.18,.03),setTimeout(()=>this.click(1700,.12,.03),60)}tick(t){this.click(t?3800:2600,.12,.012)}horn(t,e=.5){if(!this.ctx)return;let n=this.ctx,s=n.currentTime,r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.7;let a=n.createGain();r.connect(a).connect(this.master),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.32,s+.02),a.gain.setValueAtTime(.32,s+e),a.gain.exponentialRampToValueAtTime(1e-4,s+e+.08);for(let o of t.horn){let l=n.createOscillator();l.type="square",l.frequency.value=o,l.connect(r),l.start(s),l.stop(s+e+.1)}}chime(t=[660,880,1320]){if(!this.ctx)return;let e=this.ctx;t.forEach((n,s)=>{let r=e.currentTime+s*.11,a=e.createOscillator();a.type="sine",a.frequency.value=n;let o=e.createGain();a.connect(o).connect(this.master),this._env(o,r,.01,.2,.5),a.start(r),a.stop(r+.6)})}starter(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sawtooth",s.frequency.value=160;let r=e.createOscillator();r.frequency.value=t.engine==="diesel"?9:11;let a=e.createGain();a.gain.value=40,r.connect(a).connect(s.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=900;let l=e.createGain();return s.connect(o).connect(l).connect(this.master),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.2,n+.05),l.gain.setValueAtTime(.2,n+.75),l.gain.exponentialRampToValueAtTime(1e-4,n+.9),s.start(n),r.start(n),s.stop(n+1),r.stop(n+1),()=>{l.gain.cancelScheduledValues(e.currentTime),l.gain.setTargetAtTime(0,e.currentTime,.02)}}blowoff(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="bandpass",s.Q.value=1.2,s.frequency.setValueAtTime(3500,e),s.frequency.exponentialRampToValueAtTime(900,e+.35);let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.01,.14,.35),n.start(e),n.stop(e+.5)}pop(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=700;let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.002,.5,.07),n.start(e),n.stop(e+.15)}crash(t){this.thunk(Math.min(1,.3+t)),this.click(600,Math.min(.6,t),.15)}update(t,e,n){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=.03,o=e.engine==="diesel",l=t.engine?Math.max(t.rpm,1):0,c=o?4:8,u=l/60*c/2,f=t.throttle??0,d=t.engine?1:0,p=Math.max(u,1);this.o1.frequency.setTargetAtTime(o?p:p*.5,r,a),this.o2.frequency.setTargetAtTime(p*(o?2:1),r,a),this.o3.frequency.setTargetAtTime(p*(o?.5:1.5),r,a),this.oSub.frequency.setTargetAtTime(p*.5,r,a),this.lfo.frequency.setTargetAtTime(o?p:p*.25,r,a),this.lfoGain.gain.setTargetAtTime(o?.25:.55-Math.min(.35,l/e.redline*.4),r,.1);let g=l/e.redline;this.engLP.frequency.setTargetAtTime(o?260+g*1600+f*900:220+g*2600+f*1600,r,a);let M=(o?.32:.42)*(.55+.45*f+g*.3);this.eng.gain.setTargetAtTime(M*d,r,.06),this.clatLfo.frequency.setTargetAtTime(p,r,a),this.clat.gain.setTargetAtTime(o?d*(.06+.05*f)*(1.2-g*.6):0,r,.05),this.clatBP.frequency.setTargetAtTime(2200+g*1400,r,.1),this.roarBP.frequency.setTargetAtTime(o?300+g*900:140+g*700,r,a),this.roar.gain.setTargetAtTime(d*f*(o?.06:.16)*(.4+g),r,.05);let h=o?Math.max(0,g-.25)*f:0;this.turbo.frequency.setTargetAtTime(2400+h*5200,r,.15),this.turboG.gain.setTargetAtTime(d*h*.035,r,.12),o&&this._lastLoad>.6&&f<.15&&g>.45&&this.blowoff(),!o&&this._lastLoad>.6&&f<.1&&g>.5&&Math.random()<.7&&(this.pop(),setTimeout(()=>this.pop(),90+Math.random()*120)),this._lastLoad=f;let m=Math.hypot(t.vx,t.vy);this.wind.gain.setTargetAtTime(Math.min(.32,m*m*18e-5),r,.2),this.windLP.frequency.setTargetAtTime(400+m*40,r,.2);let v=t.surface==="asphalt"?Math.max(0,t.slip-.35):0;this.sq.gain.setTargetAtTime(Math.min(.28,v*.4),r,.05),this.sqBP.frequency.setTargetAtTime(1100+Math.sin(r*13)*120+m*8,r,.02),this.gravel.gain.setTargetAtTime(t.surface!=="asphalt"&&t.surface!=="floor"?Math.min(.4,m*.03):0,r,.1),this.cabinFilter.frequency.setTargetAtTime(this.cabin?1500:18e3,r,.1)}};var gn=(i,t,e)=>Math.max(t,Math.min(e,i)),Qn=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n),Y_={mu:1,rough:0,name:"asphalt"};function Z_(i,t){let e=t/i.redline;if(i.engine==="diesel"){let s=e<.2?.55+e*1.5:e<.37?.85+(e-.2)*.9:e<.72?1:1-(e-.72)*1.4;return i.torque*gn(s,.3,1)}let n=.62+.55*Math.sin(Math.min(1,e/.72)*Math.PI/2)-(e>.8?(e-.8)*1.2:0);return i.torque*gn(n,.4,1)}function ld(i){let t=i.mass,e=i.wheelbase,n=e*(1-(i.frontWeight??.52)),s=e-n,r=i.cgHeight??.68,a=t*(e*e+i.width*i.width)/12*1.1;return{spec:i,m:t,a:n,b:s,h:r,Iz:a,x:0,z:0,yaw:0,vx:0,vy:0,r:0,steer:0,rpm:i.idle,gear:1,shiftT:0,engine:!1,starting:0,throttle:0,brake:0,ax:0,ay:0,slip:0,wheelSpin:0,wheelSpeed:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,distance:0,surface:"asphalt",hit:0,reverse:!1,lastShift:0,groundPitch:0,groundRoll:0}}function Kc(i,t,e,n,s,r){let a=Math.sin(s),o=Math.cos(s),l=t.wheelbase*.5,c=t.track*.5;return r.fl=i(e+l*a+c*o,n+l*o-c*a),r.fr=i(e+l*a-c*o,n+l*o+c*a),r.rl=i(e-l*a+c*o,n-l*o-c*a),r.rr=i(e-l*a-c*o,n-l*o+c*a),r}function cd(i,t,e,n){let s=i.spec,r=9.81,a=Math.hypot(i.vx,i.vy),o=e.tyreContact?.(i.x,i.z)??e.grip?.(i.x,i.z)??Y_,l=e.tyreContact&&Kc(e.tyreContact,s,i.x,i.z,i.yaw,i.tyres??={}),c=l?(l.fl.mu+l.fr.mu)*.5:o.mu,u=l?(l.rl.mu+l.rr.mu)*.5:o.mu;if(l){let{fl:ht,fr:D,rl:tt,rr:nt}=l,vt=Math.atan2((ht.height+D.height-tt.height-nt.height)*.5,s.wheelbase),wt=Math.atan2((ht.height+tt.height-D.height-nt.height)*.5,s.track);i.groundPitch=Qn(i.groundPitch,vt,9,n),i.groundRoll=Qn(i.groundRoll,wt,9,n)}i.surface=o.name;let f=(s.steeringLock??.58)/(1+Math.pow(Math.abs(i.vx)/14,1.4)*.9),d=Math.atan((s.steerReserve??1.3)*o.mu*r*s.wheelbase/Math.max(1,i.vx*i.vx)),p=t.handbrake?f:Math.min(f,d);i.steer=Qn(i.steer,t.steer*p,16,n);let g=t.brake,M=g>.15||t.handbrake,h=i.engine&&!M?t.throttle:0,m=i.vx,v=s.tyreR,w=s.gears,S=Math.abs(i.vx)/(2*Math.PI*v)*60;if(i.shiftT=Math.max(0,i.shiftT-n),!i.reverse&&i.shiftT===0){let ht=S*w[i.gear-1]*s.finalDrive;ht>s.shiftUp*(.75+.25*h)&&i.gear<w.length?(i.gear++,i.shiftT=s.engine==="v8"?.14:.22,i.lastShift=1):ht<s.shiftDown&&i.gear>1&&(i.gear--,i.shiftT=.2,i.lastShift=-1)}let C=(i.reverse?4.1:w[i.gear-1])*s.finalDrive,E=S*C,x=i.engine?Math.max(s.idle+h*(s.engine==="v8"?2100:1400)*gn(1-Math.abs(i.vx)/6,0,1),E):0,y=i.shiftT>0?x*.82:x;i.starting>0&&(i.starting-=n),i.rpm=Qn(i.rpm,gn(y,0,s.redline*1.02),i.engine?9:2.5,n),i.rpm>s.redline&&(h*=.2);let A=(i.engine?Z_(s,Math.max(i.rpm,s.idle))*h:0)*C*.92/v*(i.shiftT>0?.68:1);i.reverse&&(A=-A);let I=s.power*1e3/Math.max(2,Math.abs(i.vx));A=gn(A,-I*1.2,I*1.2);let F=Math.sign(i.vx)||0,j=g*i.m*r*.95+(t.handbrake?6e3:0),N=l?(l.fl.rough+l.fr.rough+l.rl.rough+l.rr.rough)*.25:o.rough,B=i.m*r*(.013+N*.038),Y=.5*1.2*(s.engine==="v8"?1.25:1.1)*i.vx*Math.abs(i.vx),q=i.engine&&h<.05?i.rpm/s.redline*900*F:0,ot=i.m*r*Math.sin(i.groundPitch),it=A-Y-q-ot,pt=(j+B)*F;Math.abs(i.vx)<.12&&Math.abs(A-ot)<=j+B?(i.vx=0,it=0):it-=pt;let ut=gn(i.m*r*i.b/(i.a+i.b)-i.m*i.ax*i.h/(i.a+i.b),i.m*r*.1,i.m*r*.9),rt=i.m*r-ut,ct=Math.max(1,c*ut),W=Math.max(1,u*rt),xt=M?.62:s.driveFront??.44,Tt=it,Gt=M&&Tt*(i.vx||1)<0&&!t.handbrake,bt=ct*(Gt?.9:1),Pt=W*(Gt?.62:1),fe=gn(Tt*xt,-bt,bt),Zt=gn(Tt*(1-xt),-Pt,Pt);it=fe+Zt;let ue=Math.abs(A)-(ct+W);i.wheelSpin=Qn(i.wheelSpin,gn(ue/(i.m*r),0,1)*5,8,n);let te=Math.max(Math.abs(i.vx),.5)*(i.vx<0?-1:1),ft=Math.atan2(i.vy+i.a*i.r,Math.abs(te))-i.steer*Math.sign(te),At=Math.atan2(i.vy-i.b*i.r,Math.abs(te)),yt=8.2*ut,Nt=9.6*rt,Dt=Math.sqrt(Math.max(0,ct**2-fe**2)),ie=Math.sqrt(Math.max(0,W**2-Zt**2))*(t.handbrake?.43:1),Lt=(ht,D,tt)=>tt>1?tt*Math.tanh(-D*ht/tt):0,se=Lt(ft,yt,Dt),jt=Lt(At,Nt,ie);i.slip=gn(Math.max(Math.abs(ft),Math.abs(At))*Math.min(1,a/4)*3+i.wheelSpin*.6+(t.handbrake&&a>3?.5:0),0,1.5);let ae=(it-se*Math.sin(i.steer))/i.m+i.vy*i.r,k=(se*Math.cos(i.steer)+jt)/i.m-i.vx*i.r,Ce=(i.a*se*Math.cos(i.steer)-i.b*jt)/i.Iz,Kt=gn((a-1)/3,0,1),me=Kt*Kt*(3-2*Kt);i.vx+=(me*ae+(1-me)*(it/i.m))*n,i.vy=me*(i.vy+k*n)+(1-me)*Qn(i.vy,0,10,n);let It=i.vx*Math.tan(i.steer)/(i.a+i.b);i.r=me*(i.r+Ce*n)+(1-me)*It;let Le=t.handbrake?0:(s.assist??1)*me;if(Le>0){let D=(c+u)*.5*r*1.15/Math.max(3,Math.abs(i.vx)),tt=gn(It,-D,D),nt=i.r-tt,vt=.06;Math.abs(nt)>vt&&(i.r-=Math.sign(nt)*(Math.abs(nt)-vt)*(1-Math.exp(-12*Le*n)));let wt=Math.atan2(i.vy,Math.max(1,Math.abs(i.vx))),Ct=.12;Math.abs(wt)>Ct&&(i.vy=Qn(i.vy,Math.tan(Math.sign(wt)*Ct)*Math.max(1,Math.abs(i.vx)),8*Le,n))}i.ax=Qn(i.ax,me*(ae-i.vy*i.r)+(1-me)*(it/i.m),12,n),i.ay=Qn(i.ay,me*(k+i.vx*i.r)+(1-me)*i.vx*i.r,12,n),M&&(m===0||m*i.vx<0)&&(i.vx=0),i.vx=gn(i.vx,-6,s.top);let Xt=Math.sin(i.yaw),Bt=Math.cos(i.yaw);if(i.x+=(i.vx*Xt+i.vy*Bt)*n,i.z+=(i.vx*Bt-i.vy*Xt)*n,i.yaw+=i.r*n,i.hit=Math.max(0,i.hit-n),e.collide){let ht=e.collide(i.x,i.z,i.yaw);if(ht){i.x+=ht.nx*ht.depth,i.z+=ht.nz*ht.depth;let D=i.vx*Xt+i.vy*Bt,tt=i.vx*Bt-i.vy*Xt,nt=(D-(ht.vx??0))*ht.nx+(tt-(ht.vz??0))*ht.nz;if(nt<0){let vt=-nt;i.hit=Math.min(1,vt/8);let wt=Math.min(14,-1.06*nt),Ct=(D+wt*ht.nx)*.94,qt=(tt+wt*ht.nz)*.94;i.vx=Ct*Xt+qt*Bt,i.vy=(Ct*Bt-qt*Xt)*.5;let re=Math.sin(i.yaw)*ht.nz-Math.cos(i.yaw)*ht.nx;i.r=i.r*.6+gn(re*vt*.06,-.8,.8),i.lastImpact=vt}}}let R=38,_=7.5,L=30,J=6,z=s.springRate??55,dt=s.springDamping??9,gt=gn(-i.ax*.0085,-.06,.06),Z=gn(i.ay*(s.bodyRoll??.0072),-.078,.078);i.pitchV+=((gt-i.pitch)*R-i.pitchV*_)*n,i.pitch+=i.pitchV*n,i.rollV+=((Z-i.roll)*L-i.rollV*J)*n,i.roll+=i.rollV*n,i.distance+=a*n;let et=N*Math.min(1,a/6)*(Math.sin(i.distance*13)*.24+Math.sin(i.distance*5.3)*.14);return i.heaveV+=(-i.heave*z-i.heaveV*dt+et*60)*n,i.heave+=i.heaveV*n,i.wheelSpeed=i.vx/v+i.wheelSpin*30*Math.sign(h||1)*(i.reverse?-1:1),i.throttle=Qn(i.throttle,h,10,n),i.brake=g,i}var Gi=(i,t,e)=>Math.max(t,Math.min(e,i)),ti=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n),$s=1/120,vl={throttle:0,brake:0,steer:0,handbrake:!1};function hd({bounds:i,circles:t=[],boxes:e=[],carR:n=.95,carHalf:s=1.7}){let r=e.map(p=>({...p,cs:Math.cos(p.rot||0),sn:Math.sin(p.rot||0),radius:Math.hypot(p.hx,p.hz)+n})),a=16,o=new Map,l=(p,g)=>p*73856093^g*19349663,c=(p,g,M,h)=>{for(let m=Math.floor((g-h)/a);m<=Math.floor((g+h)/a);m++)for(let v=Math.floor((M-h)/a);v<=Math.floor((M+h)/a);v++){let w=l(m,v),S=o.get(w);S||o.set(w,S={boxes:[],circles:[]}),p.r!==void 0&&!p.hx?S.circles.push(p):S.boxes.push(p)}};for(let p of r)c(p,p.x,p.z,p.radius);for(let p of t)c(p,p.x,p.z,p.r+n);let u={boxes:[],circles:[]},f=(p,g)=>o.get(l(Math.floor(p/a),Math.floor(g/a)))||u,d=s?[-s,0,s]:[0];return(p,g,M)=>{let h=Math.sin(M),m=Math.cos(M),v=null;for(let w of d){let S=p+h*w,C=g+m*w,E=(y,O,A)=>{A>0&&(!v||A>v.depth)&&(v={nx:y,nz:O,depth:A})};i&&(E(1,0,i.minX-(S-n)),E(-1,0,S+n-i.maxX),E(0,1,i.minZ-(C-n)),E(0,-1,C+n-i.maxZ));let x=f(S,C);for(let y of x.circles){let O=S-y.x,A=C-y.z,I=y.r+n;if(O*O+A*A>=I*I)continue;let F=Math.hypot(O,A);F>1e-4?E(O/F,A/F,I-F):E(-h,-m,I)}for(let y of x.boxes){let O=S-y.x,A=C-y.z;if(O*O+A*A>=y.radius*y.radius)continue;let I=O*y.cs+A*y.sn,F=-O*y.sn+A*y.cs,j=Gi(I,-y.hx,y.hx),N=Gi(F,-y.hz,y.hz),B=I-j,Y=F-N,q=Math.hypot(B,Y);if(q<n)if(q<1e-4){let ot=y.hx-Math.abs(I),it=y.hz-Math.abs(F);ot<it?(B=Math.sign(I)||1,Y=0,q=-ot):(B=0,Y=Math.sign(F)||1,q=-it);let pt=B*y.cs-Y*y.sn,ut=B*y.sn+Y*y.cs;E(pt,ut,n-q)}else{let ot=B/q,it=Y/q;E(ot*y.cs-it*y.sn,ot*y.sn+it*y.cs,n-q)}}}return v}}var yl=class{constructor({THREE:t,scene:e,camera:n,dom:s,vehicle:r,audio:a,env:o={},onEvent:l=()=>{}}){Object.assign(this,{THREE:t,scene:e,camera:n,dom:s,audio:a,env:o,onEvent:l}),this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)"),this.enabled=!1,this.camMode="chase",this.camModes=["chase","far","cabin","hood","cine","drone"],this.input={...vl},this.keys=new Set,this.touch={...vl},this.accumulator=0,this.lastPose={x:0,z:0,yaw:0},this.effectsTime=0,this.camPos=new t.Vector3,this.camLook=new t.Vector3,this.fov=n.fov,this.shake=0,this.orbitYaw=0,this.orbitPitch=0,this.dragging=!1,this.cine=null,this._tmp=new t.Vector3,this._tmp2=new t.Vector3,this._q=new t.Quaternion,this.cameraWant=new t.Vector3,this.cameraTarget=new t.Vector3,this.cameraHeading=new t.Vector3,this.cabinDirection=new t.Vector3,this.cabinRotation=new t.Quaternion,this.renderTyres={},this.markMatrix=new t.Matrix4,this.markScale=new t.Vector3(1,1,1),this.setVehicle(r),this._initFx(),this._bind()}setVehicle(t){let e=this.dyn?{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}:null;this.dyn&&(this.toggleEngine(!1),this.vehicle.setCabinView(!1)),this.clearInput(),this.vehicle=t,this.dyn=ld(t.spec),e&&Object.assign(this.dyn,e),Object.assign(this.lastPose,{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}),this.audio&&this.audio.setKind(t.spec.engine)}place(t,e,n=0){this.clearInput(),Object.assign(this.dyn,{x:t,z:e,yaw:n,vx:0,vy:0,r:0,steer:0,slip:0,wheelSpin:0,wheelSpeed:0,ax:0,ay:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,groundPitch:0,groundRoll:0}),Object.assign(this.lastPose,{x:t,z:e,yaw:n}),this._sync(0),this.snapCamera()}clearInput(){this.keys.clear(),Object.assign(this.touch,vl),Object.assign(this.input,vl),this.dragging=!1,this.accumulator=0,this._holdT=0,this.resetTouch?.()}setEnabled(t){this.clearInput(),this.enabled=t,t?(this.dom.focus({preventScroll:!0}),document.body.dataset.driveCamera=this.camMode,this.vehicle.setCabinView(this.camMode==="cabin")):(this.vehicle.setCabinView(!1),delete document.body.dataset.driveCamera,this.toggleEngine(!1),Object.assign(this.dyn,{vx:0,vy:0,r:0,slip:0,throttle:0}),this.audio?.update(this.dyn,this.vehicle.spec,0))}_bind(){let t=s=>{if(!this.enabled||document.hidden||s.altKey||s.ctrlKey||s.metaKey||s.defaultPrevented||s.target?.closest?.("button, a, input, select, textarea, summary, [contenteditable]"))return;let r=s.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(r)&&s.preventDefault(),!s.repeat&&(this.keys.add(r),r==="h"?this.horn():r==="l"?this.toggle("head"):r==="q"?this.toggle("left"):r==="e"?this.toggle("right"):r==="x"?this.toggle("hazard"):r==="c"?this.cycleCamera():r==="r"?this.recover():r==="v"?this.shiftDirection():r==="i"&&this.toggleEngine())},e=s=>this.keys.delete(s.key.toLowerCase()),n=()=>{this.audio?.muted||this.audio?.unlock().catch(()=>{})};this.dom.addEventListener("pointerdown",n,{passive:!0}),addEventListener("keydown",t),addEventListener("keyup",e),addEventListener("blur",()=>this.clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearInput()}),this.dom.addEventListener("pointerdown",s=>{this.enabled&&(this.dragging=!0,this._px=s.clientX,this._py=s.clientY,this._lookT=0)}),addEventListener("pointerup",()=>{this.dragging=!1}),addEventListener("pointercancel",()=>{this.dragging=!1}),addEventListener("pointermove",s=>{!this.enabled||!this.dragging||(this.orbitYaw=Gi(this.orbitYaw-(s.clientX-this._px)*.006,-Math.PI,Math.PI),this.orbitPitch=Gi(this.orbitPitch+(s.clientY-this._py)*.004,-.3,this.camMode==="cabin"?.42:.9),this._px=s.clientX,this._py=s.clientY,this._lookT=0)})}setTouch(t){Object.assign(this.touch,t)}_readInput(){let t=this.keys,e=this.touch,n=t.has("w")||t.has("arrowup")?1:e.throttle,s=t.has("s")||t.has("arrowdown")?1:e.brake,r=(t.has("a")||t.has("arrowleft")?1:0)-(t.has("d")||t.has("arrowright")?1:0);r||(r=e.steer);let a=t.has(" ")||e.handbrake,o=navigator.getGamepads?navigator.getGamepads():[];for(let l of o)if(l){let c=l.axes[0]||0;Math.abs(c)>.12&&(r=-c),l.buttons[7]&&l.buttons[7].value>.05&&(n=l.buttons[7].value),l.buttons[6]&&l.buttons[6].value>.05&&(s=l.buttons[6].value),l.buttons[0]&&l.buttons[0].pressed&&(a=!0),l.buttons[3]&&l.buttons[3].pressed&&!this._padY&&this.cycleCamera(),this._padY=l.buttons[3]&&l.buttons[3].pressed,l.buttons[1]&&l.buttons[1].pressed&&!this._padB&&this.horn(),this._padB=l.buttons[1]&&l.buttons[1].pressed,l.buttons[2]?.pressed&&!this._padX&&this.shiftDirection(),this._padX=l.buttons[2]?.pressed;break}return{thr:n,brk:s,st:r,hb:a}}_smoothInput({thr:t,brk:e,st:n,hb:s},r){let a=this.input;if(this.dyn.reverse&&this.env.autoShift!==!1){let l=t;t=e,e=l}if(a.throttle=ti(a.throttle,t,t>a.throttle?11:14,r),a.brake=ti(a.brake,e,16,r),Math.abs(n)>0&&Math.abs(n)<.999)a.steer=ti(a.steer,n,18,r);else{let l=n===0?6.5:a.steer*n<0?9:3.6;a.steer+=Gi(n-a.steer,-l*r,l*r)}a.handbrake=s}toggle(t){let e=this.vehicle.state;return t==="left"?(e.left=!e.left,e.right=!1):t==="right"?(e.right=!e.right,e.left=!1):e[t]=!e[t],this.audio&&this.audio.click(2e3,.1,.02),this.onEvent("lights",{...e}),e[t]}horn(){this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>this.audio.horn(this.vehicle.spec,.45)).catch(()=>{});let t=performance.now();this._horns=(this._horns||[]).filter(e=>t-e<1600),this._horns.push(t),this.onEvent("horn",this._horns.length)}toggleEngine(t){let e=this.dyn,n=t??!(e.engine||this.startTimer);if(n&&(e.engine||this.startTimer))return!0;if(!n)return clearTimeout(this.startTimer),this.startTimer=null,this.stopStarter?.(),this.stopStarter=null,e.engine=!1,e.starting=0,this.audio?.update(e,this.vehicle.spec,0),this.onEvent("engine","off"),!1;let s=this.vehicle.spec;this.startTimer=setTimeout(()=>{this.startTimer=null,e.engine=!0,e.starting=0,e.rpm=s.idle*1.4,this.onEvent("engine","running")},650),e.starting=.65;let r=this.startTimer;return this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>{this.startTimer===r&&(this.stopStarter=this.audio.starter(s))}).catch(()=>{}),this.onEvent("engine","starting"),n}_autoShift({thr:t,brk:e},n){let s=this.dyn,r=Math.hypot(s.vx,s.vy)<.3&&s.engine,a=!s.reverse&&e>.5&&t<.05,o=s.reverse&&t>.5&&e<.05;this._holdT=r&&(a||o)?(this._holdT||0)+n:0,this._holdT>.35&&(this._holdT=0,s.reverse=!s.reverse,s.gear=1,this.input.throttle=0,this.input.brake=0,this.onEvent("direction",s.reverse))}shiftDirection(){return Math.hypot(this.dyn.vx,this.dyn.vy)>.4||this.input.throttle>.08?(this.onEvent("shift-blocked"),!1):(this.clearInput(),this.dyn.reverse=!this.dyn.reverse,this.dyn.gear=1,this.onEvent("direction",this.dyn.reverse),!0)}cycleCamera(t){let e=this.camModes.indexOf(this.camMode),n=this.camModes[(e+1)%this.camModes.length],s=this.camMode;return this.camMode=t||(n==="cine"&&this.reducedMotion.matches?"drone":n),this.cine=null,this.orbitYaw=0,this.orbitPitch=0,(["cabin","hood","cine"].includes(s)||["cabin","hood","cine"].includes(this.camMode))&&this.snapCamera(),this.vehicle.setCabinView(this.camMode==="cabin"),this.audio&&(this.audio.cabin=this.camMode==="cabin"?1:0),document.body.dataset.driveCamera=this.camMode,this.onEvent("camera",this.camMode),this.camMode}recover(){let t=this.dyn;if(t.vx=t.vy=t.r=0,this.env.respawn){let e=this.env.respawn(t);e&&this.place(e.x,e.z,e.yaw)}}_initFx(){let t=this.THREE,e=260,n=new t.BufferGeometry;this.pPos=new Float32Array(e*3),this.pVel=new Float32Array(e*3),this.pLife=new Float32Array(e),n.setAttribute("position",new t.BufferAttribute(this.pPos,3));let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64),this.dustMat=new t.PointsMaterial({size:1.6,map:new t.CanvasTexture(s),transparent:!0,depthWrite:!1,opacity:.55,color:11901560,sizeAttenuation:!0}),this.dust=new t.Points(n,this.dustMat),this.dust.frustumCulled=!1,this.dust.visible=!1,this.scene.add(this.dust);for(let u=0;u<e;u++)this.pPos[u*3+1]=-100;this.pIdx=0;let o=320,l=new t.PlaneGeometry(.26,.5);l.rotateX(-Math.PI/2),this.skid=new t.InstancedMesh(l,new t.MeshBasicMaterial({color:657930,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),o),this.skid.frustumCulled=!1,this.skidI=0;let c=new t.Matrix4().makeTranslation(0,-100,0);for(let u=0;u<o;u++)this.skid.setMatrixAt(u,c);this.scene.add(this.skid)}_emit(t,e,n){let s=this.pLife.length;for(let r=0;r<n;r++){let a=this.pIdx=(this.pIdx+1)%s;this.pPos[a*3]=t.x+(Math.random()-.5)*.3,this.pPos[a*3+1]=t.y+.15,this.pPos[a*3+2]=t.z+(Math.random()-.5)*.3,this.pVel[a*3]=(Math.random()-.5)*1.2,this.pVel[a*3+1]=.5+Math.random()*.9,this.pVel[a*3+2]=(Math.random()-.5)*1.2,this.pLife[a]=1.6+Math.random()}this.dustMat.color.set(e)}_fx(t){let e=this.pLife.length,n=!1,s=!1;for(let r=0;r<e;r++)this.pLife[r]<=0||(n=!0,this.pLife[r]-=t,this.pPos[r*3]+=this.pVel[r*3]*t,this.pPos[r*3+1]+=this.pVel[r*3+1]*t,this.pPos[r*3+2]+=this.pVel[r*3+2]*t,this.pVel[r*3+1]*=Math.exp(-1.8*t),this.pLife[r]<=0?this.pPos[r*3+1]=-100:s=!0);n&&(this.dust.geometry.attributes.position.needsUpdate=!0),this.dust.visible=s}update(t){if(!this.enabled||document.hidden)return;t=Math.min(t,.1);let e=this.dyn,n=this.vehicle,s=this._readInput();for(this.accumulator+=t;this.accumulator>=$s;)this.env.autoShift!==!1&&this._autoShift(s,$s),this._smoothInput(s,$s),Object.assign(this.lastPose,{x:e.x,z:e.z,yaw:e.yaw}),cd(e,this.input,this.env,$s),this.accumulator-=$s;e.lastImpact&&(this.audio&&this.audio.crash(e.lastImpact/10),this.shake=Math.min(1,e.lastImpact/8),this.onEvent("impact",e.lastImpact),e.lastImpact=0),e.lastShift&&(this.onEvent("shift",e.gear),e.lastShift=0),n.state.brake=this.input.brake>.1||this.input.handbrake,n.state.reverse=e.reverse,this._sync(t,this.accumulator/$s);let r=n.update(t,{engine:e.engine,night:this.env.night});r!==null&&r!==this._lastBlink&&this.audio&&this.audio.tick(r),this._lastBlink=r,n.drawNav?.(this.camMode==="cabin"&&this.env.navMap?this._navPaint??=(u,f,d)=>this.env.navMap(u,f,d,this.dyn):null),this.camMode==="cabin"&&n.drawCluster(Math.abs(e.vx)*3.6,e.rpm,e.reverse?"R":e.engine?"D"+e.gear:"P"),this.audio&&this.audio.update(e,n.spec,t);let a=Math.hypot(e.vx,e.vy),o=e.surface!=="asphalt"&&e.surface!=="floor";this.effectsTime+=t;let l=o&&a>3||e.slip>.7||e.wheelSpin>.4,c=!o&&(e.slip>.75||e.wheelSpin>.5)&&a>2;if(this.effectsTime>=1/30){if(this.effectsTime%=1/30,c||l)for(let u of n.wheels){if(u.front)continue;let f=u.pivot.getWorldPosition(this._tmp2);if(l&&this._emit(f,o?this.env.dustColor||11569762:14211288,o?Math.ceil(a/9):1),c){f.y=(this.env.groundY?.(f.x,f.z)??0)+.012;let d=this.markMatrix.compose(f,this._q.setFromAxisAngle(this.cameraHeading.set(0,1,0),e.yaw),this.markScale);this.skid.setMatrixAt(this.skidI=(this.skidI+1)%this.skid.count,d)}}c&&(this.skid.instanceMatrix.needsUpdate=!0)}this._fx(t),this._camera(t)}_sync(t,e=1){let n=this.dyn,s=this.vehicle,r=this.lastPose.x+(n.x-this.lastPose.x)*e,a=this.lastPose.z+(n.z-this.lastPose.z)*e,o=this.lastPose.yaw+(n.yaw-this.lastPose.yaw)*e,l=this.env.groundY,c=this.env.tyreContact&&Kc(this.env.tyreContact,s.spec,r,a,o,this.renderTyres),u=c?(c.fl.height+c.fr.height+c.rl.height+c.rr.height)*.25:l?.(r,a)??0;this.rideHeight=c&&t?ti(this.rideHeight??u,u,20,t):u,s.root.position.set(r,this.rideHeight,a),s.root.rotation.set(0,o,0),s.body.rotation.x=n.roll+n.groundRoll,s.body.rotation.z=n.groundPitch-n.pitch,s.body.position.y=n.heave*.6;for(let f of s.wheels){if(f.spin.rotation.z-=n.wheelSpeed*t,f.front){let M=s.spec.wheelbase/Math.tan(n.steer);f.pivot.rotation.y=Math.atan(s.spec.wheelbase/(M+f.z))}let p=(c?c[f.front?f.side<0?"fl":"fr":f.side<0?"rl":"rr"].height-this.rideHeight:0)-n.roll*f.z*.5+(f.front?-1:1)*n.pitch*.4+n.heave*.3,g=f.baseY+Gi(p,-.16,.19);f.pivot.position.y=t?ti(f.pivot.position.y,g,22,t):g}s.steer.rotation.x=-n.steer*7}snapCamera(){this._camInit=!1,this.cameraArm=1}_camera(t){let e=this.THREE,n=this.dyn,s=this.vehicle,r=this.camera,a=this._tmp.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),o=s.root.position,l=Math.hypot(n.vx,n.vy);this.dragging||(this._lookT=(this._lookT||0)+t,this._lookT>1.2&&(this.orbitYaw=ti(this.orbitYaw,0,2.5,t),this.orbitPitch=ti(this.orbitPitch,0,2.5,t)));let c=this.cameraWant,u=this.cameraTarget,f=55,d=6,p=.1,g=s.root.rotation.y+this.orbitYaw,M=this.cameraHeading.set(Math.sin(g),0,Math.cos(g)),h=s.dims.length;switch(this.camMode){case"chase":case"far":{let S=this.camMode==="far",C=(S?h*1.9:h*1.25)+l*.05,E=(S?3.4:2.05)+this.orbitPitch*4,x=l>4?Math.atan2(n.vx*Math.sin(n.yaw)+n.vy*Math.cos(n.yaw),n.vx*Math.cos(n.yaw)-n.vy*Math.sin(n.yaw)):n.yaw,y=n.vx>2?x+(g-n.yaw):g;c.set(o.x-Math.sin(y)*C,o.y+E,o.z-Math.cos(y)*C),u.copy(o).addScaledVector(a,2.5+l*.06),u.y+=1.05,f=52+Math.min(16,l*.38),d=4.5;break}case"cabin":{s.body.localToWorld(c.copy(s.driverEye));let S=this.reducedMotion.matches,C=Gi(this.orbitYaw-.1,-1.22,1.22)+(S?0:n.steer*.14),E=-.18-this.orbitPitch*.7;s.body.getWorldQuaternion(this.cabinRotation),this.cabinDirection.set(Math.cos(C),E,-Math.sin(C)).applyQuaternion(this.cabinRotation),u.copy(c).addScaledVector(this.cabinDirection,10),d=34,p=.018,f=r.aspect<.9?70:62+Math.min(3,l*.07);break}case"hood":{let S=new e.Vector3(s.spec.wheelbase/2-.3,s.spec.roof+.1,0);s.body.localToWorld(S),c.copy(S),d=60,p=.05,u.copy(S).addScaledVector(M,12),u.y-=.9,f=62+Math.min(10,l*.2);break}case"drone":{c.set(o.x-a.x*18,o.y+34,o.z-a.z*18),u.copy(o).addScaledVector(a,8),f=50,d=2;break}case"cine":{if(!this.cine||this.cine.t>7||o.distanceTo(this.cine.p)>55){let S=Math.random()<.5?-1:1,C=18+Math.random()*20,E=new e.Vector3(a.z,0,-a.x),x=o.clone().addScaledVector(a,C).addScaledVector(E,S*(6+Math.random()*6));x.y=(this.env.groundY?this.env.groundY(x.x,x.z):0)+.6+Math.random()*2.5,this.env.cineOk&&!this.env.cineOk(x)&&x.copy(o).addScaledVector(a,-10).setY(o.y+3),this.cine={p:x,t:0,fov:28+Math.random()*18},this.camPos.copy(x),this._camInit=!0}this.cine.t+=t,c.copy(this.cine.p),u.copy(o),u.y+=.9,f=this.cine.fov,d=1e3;break}}this._camInit||(this.camPos.copy(c),this.camLook.copy(u),this.fov=f,this._camInit=!0);let m=1-Math.exp(-d*t);if(this.camPos.lerp(c,m),this.camLook.lerp(u,Math.min(1,m*1.6)),this.env.groundY&&this.camMode!=="cabin"&&(this.camPos.y=Math.max(this.camPos.y,this.env.groundY(this.camPos.x,this.camPos.z)+.35)),r.position.copy(this.camPos),this.env.cameraCollision&&(this.camMode==="chase"||this.camMode==="far")){let S=E=>{let x=this._tmp2.copy(o).lerp(this.camPos,E);return this.env.cameraCollision(x.x,x.z,g)},C=1;for(let E=2;E<=14;E++){if(!S(E/14))continue;let x=(E-1)/14,y=E/14;for(let O=0;O<4;O++){let A=(x+y)*.5;S(A)?y=A:x=A}C=Math.max(.14,x-.02);break}this.cameraArm=Math.min(C,ti(this.cameraArm??1,C,6,t)),r.position.copy(o).lerp(this.camPos,this.cameraArm),this.cameraArm<.8&&(r.position.y=Math.max(r.position.y,o.y+s.dims.height+.25))}this.shake=ti(this.shake,0,3,t);let v=(this.camMode==="cabin"||this.camMode==="hood"?.6:1)*(Math.min(1,l/45)**2*.012+(n.surface!=="asphalt"&&n.surface!=="floor"?Math.min(1,l/15)*.02:0)+this.shake*.09);this._shakeT=(this._shakeT||0)+t*(8+l*.6);let w=(S,C)=>Math.sin(this._shakeT*S)*.6+Math.sin(this._shakeT*C+1.7)*.4;!["cine","cabin"].includes(this.camMode)&&!this.reducedMotion.matches&&r.position.add(this._tmp2.set(w(1.3,2.9)*v*.5,w(1.7,3.7)*v*.5,w(1.1,2.3)*v*.5)),r.lookAt(this.camLook),this.camMode==="cabin"&&!this.reducedMotion.matches&&r.rotateZ(-n.roll*.36),this.fov=ti(this.fov,f,3,t),(Math.abs(r.fov-this.fov)>.01||r.near!==p)&&(r.fov=this.fov,r.near=p,r.updateProjectionMatrix())}hud(){let t=this.dyn;return{kmh:Math.abs(t.vx)*3.6,rpm:t.rpm,redline:this.vehicle.spec.redline,gear:t.reverse?"R":t.engine?"D"+t.gear:"P",engine:t.engine,surface:t.surface,cam:this.camMode,lights:this.vehicle.state}}},ud=`
.pkm-hud{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);display:flex;align-items:flex-end;gap:18px;padding:14px 20px 12px;border-radius:22px;background:rgb(8 8 8 / .62);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid #2b2b2b;color:#F2F0EA;font-family:Inter,ui-sans-serif,system-ui,sans-serif;pointer-events:none;z-index:6}
.pkm-hud__spd{font-size:46px;font-weight:740;letter-spacing:-.05em;line-height:.9;font-variant-numeric:tabular-nums;min-width:2.4ch;text-align:right}
.pkm-hud__unit{font-size:11px;color:#9A948B;letter-spacing:.12em;text-transform:uppercase;margin-top:4px;text-align:right}
.pkm-hud__gear{font-size:28px;font-weight:700;color:#BBA783;width:1.6ch;text-align:center;line-height:1}
.pkm-hud__rev{width:150px}.pkm-hud__bar{height:6px;border-radius:6px;background:#232323;overflow:hidden}.pkm-hud__bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#93AE7C,#BBA783 70%,#d0654f);transition:width .08s linear}
.pkm-hud__meta{display:flex;justify-content:space-between;font-size:11px;color:#9A948B;margin-top:6px;letter-spacing:.04em}
.pkm-hud__ind{display:flex;gap:8px;font-size:15px;color:#3a3a3a}.pkm-hud__ind .on{color:#93AE7C}.pkm-hud__ind .amber.on{color:#f0a330}.pkm-hud__ind .blue.on{color:#7fb2ff}
.pkm-touch{position:absolute;inset:auto 0 max(14px,env(safe-area-inset-bottom)) 0;display:none;justify-content:space-between;padding:0 12px;z-index:7;pointer-events:none;user-select:none}
.pkm-touch>div{display:flex;gap:8px;align-items:flex-end}.pkm-touch button{pointer-events:auto;touch-action:none;min-width:50px;height:60px;border-radius:16px;border:1px solid #575148;background:rgb(17 17 17 / .84);color:#F2F0EA;font:650 13px Inter,system-ui}
.pkm-touch button.tall{height:78px;min-width:58px}
.pkm-steer{pointer-events:auto;touch-action:none;position:relative;width:150px;height:64px;border-radius:32px;border:1px solid #575148;background:rgb(17 17 17 / .84);display:grid;place-items:center;color:#9A948B;font:600 11px Inter,system-ui;letter-spacing:.06em}
.pkm-steer i{position:absolute;left:50%;top:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#F2F0EA;box-shadow:0 4px 14px #0008;transition:transform .12s}
.pkm-steer.down i{background:#BBA783;transition:none}.pkm-touch button:active,.pkm-touch button.down{background:#BBA783;color:#080808}
.pkm-bar{position:fixed;z-index:20;top:var(--pkm-bar-top,76px);left:14px;display:flex;gap:6px;align-items:center;flex-wrap:wrap;max-width:calc(100vw - 28px);font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:#F2F0EA}
.pkm-bar[hidden]{display:none}
.pkm-bar button,.pkm-bar summary,.pkm-bar__sel{min-height:42px;display:inline-flex;align-items:center;gap:6px;padding:0 14px;border-radius:999px;border:1px solid #3a3833;background:rgb(12 12 11 / .72);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:inherit;font:600 13px Inter,system-ui,sans-serif;cursor:pointer;white-space:nowrap;transition:background .2s,border-color .2s}
.pkm-bar button:hover,.pkm-bar summary:hover,.pkm-bar__sel:hover{border-color:#6b655b;background:rgb(24 23 21 / .82)}
.pkm-bar .pkm-bar__exit{background:#F2F0EA;color:#0b0b0a;border-color:#F2F0EA}.pkm-bar .pkm-bar__exit:hover{background:#fff}
.pkm-bar__sel{padding:0 4px 0 14px;cursor:default}.pkm-bar__sel span{color:#9A948B;font-weight:550}
.pkm-bar__sel select{appearance:none;-webkit-appearance:none;background:transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%23BBA783' stroke-width='1.6'/%3E%3C/svg%3E") no-repeat right 10px center;border:0;color:#F2F0EA;font:inherit;padding:10px 28px 10px 2px;cursor:pointer;color-scheme:dark}
.pkm-bar__sel select:focus-visible{outline:2px solid #e8cf98;outline-offset:2px;border-radius:999px}
.pkm-bar [aria-pressed="true"]{border-color:#BBA783;background:#2a2620;color:#fff3dc}
.pkm-bar__more{position:relative}.pkm-bar__more summary{list-style:none}.pkm-bar__more summary::-webkit-details-marker{display:none}
.pkm-bar__more[open] summary{border-color:#BBA783}
.pkm-bar__more.flip .pkm-bar__menu{left:auto;right:0}
.pkm-bar__menu{position:absolute;top:calc(100% + 8px);left:0;right:auto;width:min(300px,calc(100vw - 28px));padding:10px;border-radius:18px;border:1px solid #3a3833;background:rgb(14 14 13 / .94);box-shadow:0 18px 50px #0008;display:grid;grid-template-columns:1fr 1fr;gap:6px;animation:pkm-pop .18s ease}
.pkm-bar__menu button{justify-content:center;border-radius:12px;padding:0 10px;background:#1a1916}
.pkm-bar__menu .wide{grid-column:1/-1}
.pkm-bar__keys{grid-column:1/-1;margin-top:4px;padding:10px 4px 2px;border-top:1px solid #2c2a26;font-size:12px;line-height:1.95;color:#a49d92}
.pkm-bar__keys b{display:inline-block;min-width:21px;text-align:center;padding:0 5px;margin-right:2px;border-radius:6px;background:#1f1e1b;border:1px solid #3a3833;color:#F2F0EA;font-weight:600;font-size:11px;line-height:19px}
@keyframes pkm-pop{from{opacity:0;transform:translateY(-4px)}}
@media (pointer:coarse){.pkm-bar__keys{display:none}.pkm-bar button,.pkm-bar summary,.pkm-bar__sel{min-height:40px;font-size:12.5px;padding:0 12px}}
@media (max-width:600px){.pkm-bar{left:10px;max-width:calc(100vw - 20px)}.pkm-bar__sel{padding-left:12px}}
.pkm-veil{position:fixed;inset:0;z-index:60;background:#090908;opacity:0;pointer-events:none;transition:opacity .22s ease}.pkm-veil.on{opacity:1}
@media (prefers-reduced-motion:reduce){.pkm-veil,.pkm-bar__menu{transition:none;animation:none}}
.pkm-hud{transition:opacity .35s ease}
@media (pointer:fine){body[data-drive-camera="cabin"] .pkm-hud{opacity:0}}
@media (pointer:coarse){.pkm-touch{display:flex}.pkm-hud{bottom:auto;top:76px;transform:translateX(-50%) scale(.82)}}
`;function dd(i){let t=document.createElement("div");t.className="pkm-hud",t.hidden=!0,t.innerHTML=`<div><div class="pkm-hud__spd" data-spd>0</div><div class="pkm-hud__unit">km/h</div></div>
    <div class="pkm-hud__gear" data-gear>P</div>
    <div class="pkm-hud__rev"><div class="pkm-hud__ind"><span class="amber" data-l>\u25C0</span><span class="blue" data-h>\u25C9</span><span data-e>\u23FB</span><span class="amber" data-r>\u25B6</span></div>
    <div class="pkm-hud__bar" style="margin-top:8px"><i data-rpm></i></div><div class="pkm-hud__meta"><span data-rpmt>0 rpm</span><span data-surf>Asphalt</span></div></div>`,i.appendChild(t);let[e,n,s,r,a,o,l,c,u]=t.querySelectorAll("[data-spd],[data-gear],[data-l],[data-h],[data-e],[data-r],[data-rpm],[data-rpmt],[data-surf]"),f=(g,M)=>{g.textContent!==M&&(g.textContent=M)},d=0,p=.1;return{el:t,update(g,M=.016){if(d+=M,p+=M,p<.05)return;p%=.05,f(e,String(Math.round(g.kmh))),f(n,g.gear),l.style.width=Math.min(100,g.rpm/g.redline*100).toFixed(1)+"%",f(c,Math.round(g.rpm/10)*10+" rpm"),f(u,{asphalt:"Asphalt",grass:"Grass",dirt:"Laterite",floor:"Showroom floor",kerb:"Kerb",pavers:"Pavers",drain:"Drain"}[g.surface]||g.surface);let h=d%.74<.4,m=g.lights;s.classList.toggle("on",(m.left||m.hazard)&&h),o.classList.toggle("on",(m.right||m.hazard)&&h),r.classList.toggle("on",!!m.head),a.classList.toggle("on",g.engine)}}}function fd(i,t){let e=document.createElement("div");e.className="pkm-touch",e.innerHTML=`<div class="pkm-steer" role="slider" aria-label="Steering: slide left or right" aria-valuemin="-1" aria-valuemax="1" aria-valuenow="0"><i></i><span>\u25C0 steer \u25B6</span></div>
    <div><button data-k="brake" class="tall">Brake</button><button data-k="gas" class="tall" aria-label="Accelerate">Go</button></div>`,i.appendChild(e);let n={steer:0,gas:0,brake:0},s=()=>t.setTouch({steer:n.steer,throttle:n.gas,brake:n.brake}),r=[...e.querySelectorAll("button")],a=e.querySelector(".pkm-steer"),o=a.querySelector("i"),l=null,c=f=>{n.steer=Math.abs(f)<.06?0:Gi(f,-.998,.998),o.style.transform=`translateX(${-n.steer*44}px)`,a.setAttribute("aria-valuenow",(-n.steer).toFixed(2)),s()};a.addEventListener("pointerdown",f=>{f.preventDefault(),a.setPointerCapture(f.pointerId),l=f.clientX,a.classList.add("down")}),a.addEventListener("pointermove",f=>{l!==null&&c(-(f.clientX-l)/60)});let u=()=>{l=null,a.classList.remove("down"),c(0)};a.addEventListener("pointerup",u),a.addEventListener("pointercancel",u),a.addEventListener("lostpointercapture",u),t.resetTouch=()=>{for(let f of r)n[f.dataset.k]=0,f.classList.remove("down");l=null,n.steer=0,o.style.transform="",a.classList.remove("down")};for(let f of r){let d=f.dataset.k,p=M=>{M.preventDefault(),f.setPointerCapture(M.pointerId),n[d]=1,f.classList.add("down"),s()},g=()=>{n[d]=0,f.classList.remove("down"),s()};f.addEventListener("pointerdown",p),f.addEventListener("lostpointercapture",g),f.addEventListener("pointerup",g),f.addEventListener("pointercancel",g)}return e}var pd={fine:"W to drive \xB7 S to brake, hold it to reverse \xB7 C to change the view",coarse:"Slide to steer \xB7 hold Brake at a stop to reverse"},K_={chase:"Chase",cabin:"Cockpit",hood:"Bonnet",far:"Far chase",drone:"Drone",cine:"Cinematic"},$_=`<div><b>W</b><b>\u2191</b> drive \xB7 <b>S</b><b>\u2193</b> brake, hold to reverse</div>
  <div><b>A</b><b>D</b> steer \xB7 <b>Space</b> handbrake</div>
  <div><b>C</b> view \xB7 <b>H</b> horn \xB7 <b>L</b> lights \xB7 <b>R</b> reset</div>
  <div><b>Q</b><b>E</b> indicators \xB7 <b>X</b> hazards \xB7 <b>V</b> shift</div>`;function md(i,t,{exitLabel:e,onExit:n,resetLabel:s="Reset car",onReset:r,places:a,onPlace:o,sound:l}={}){let c=document.createElement("nav");c.className="pkm-bar",c.hidden=!0,c.setAttribute("aria-label","Driving controls");let u=(h,m)=>`<option value="${h}">${m}</option>`;c.innerHTML=`<button type="button" class="pkm-bar__exit" data-act="exit">\u2190 ${e}</button>
    <label class="pkm-bar__sel"><span>View</span><select data-cam aria-label="Camera view">${Object.entries(K_).map(([h,m])=>u(h,m)).join("")}</select></label>
    ${a?`<label class="pkm-bar__sel"><select data-go aria-label="Go to a place">${u("","Go to\u2026")}${a.map(h=>u(h.id,h.label)).join("")}</select></label>`:""}
    ${l?'<button type="button" data-act="sound" aria-pressed="false">Sound</button>':""}
    <details class="pkm-bar__more"><summary aria-label="More driving controls">More</summary>
      <div class="pkm-bar__menu">
        <button type="button" data-act="lights" aria-pressed="false">Headlights</button>
        <button type="button" data-act="shift" aria-pressed="false">Shift to reverse</button>
        <button type="button" class="wide" data-act="reset">${s}</button>
        <div class="pkm-bar__keys">${$_}</div>
      </div></details>`,i.appendChild(c);let f=h=>c.querySelector(h),d=f(".pkm-bar__more"),p=()=>t.dom.focus({preventScroll:!0}),g={exit:()=>n?.(),sound:()=>{l.toggle(),M()},lights:()=>t.toggle("head"),shift:()=>{t.shiftDirection(),d.open=!1,p()},reset:()=>{(r??(()=>t.recover()))(),d.open=!1,p()}};c.addEventListener("click",h=>{let m=h.target.closest("[data-act]");m&&g[m.dataset.act]()}),f("[data-cam]").addEventListener("change",h=>{t.cycleCamera(h.target.value),p()}),f("[data-go]")?.addEventListener("change",h=>{let m=h.target.value;h.target.value="",m&&(o(m),p())}),addEventListener("pointerdown",h=>{d.open&&!d.contains(h.target)&&(d.open=!1)}),d.addEventListener("toggle",()=>{d.open&&d.classList.toggle("flip",d.getBoundingClientRect().left+300>innerWidth-10)}),c.addEventListener("keydown",h=>{h.key==="Escape"&&d.open&&(h.stopPropagation(),d.open=!1,f("summary").focus())});function M(){let h=t.vehicle.state,m=!!t.dyn.reverse;f("[data-cam]").value=t.camMode,f('[data-act="lights"]').setAttribute("aria-pressed",!!h.head);let v=f('[data-act="shift"]');if(v.textContent=m?"Shift to drive":"Shift to reverse",v.setAttribute("aria-pressed",m),l){let w=f('[data-act="sound"]');w.textContent=l.muted()?"Sound off":"Sound on",w.setAttribute("aria-pressed",!l.muted())}}return{el:c,sync:M,show(h){c.hidden=!h,d.open=!1,h&&M()}}}var zi;function Ml(i){return matchMedia("(prefers-reduced-motion: reduce)").matches?(i(),Promise.resolve()):(zi||(zi=document.createElement("div"),zi.className="pkm-veil",zi.setAttribute("aria-hidden","true"),document.body.appendChild(zi)),zi.offsetWidth,zi.classList.add("on"),new Promise(t=>setTimeout(()=>{try{i()}finally{requestAnimationFrame(()=>requestAnimationFrame(()=>{zi.classList.remove("on"),t()}))}},230)))}function gd(i,t,e,n,{scale:s=.9,title:r="",detail:a="",world:o,labels:l=[]}){let c=t/2,u=e*.66,f=Math.PI+n.yaw,d=i.createLinearGradient(0,0,0,e);d.addColorStop(0,"#111614"),d.addColorStop(1,"#0c100e"),i.fillStyle=d,i.fillRect(0,0,t,e),i.save(),i.translate(c,u),i.rotate(f),i.scale(s,s),i.translate(-n.x,-n.z),i.lineCap="round",i.lineJoin="round",o(i,1/s),i.restore();let p=Math.cos(f),g=Math.sin(f);i.font="600 17px Inter, Arial",i.textAlign="center";for(let w of l){let S=(w.x-n.x)*s,C=(w.z-n.z)*s,E=c+S*p-C*g,x=u+S*g+C*p;E<20||E>t-20||x<70||x>e-14||(i.fillStyle=w.color||"#e9dcc3",i.fillText(w.text,E,x))}i.save(),i.translate(c,u);let M=i.createRadialGradient(0,0,0,0,0,38);M.addColorStop(0,"rgba(232,200,130,.35)"),M.addColorStop(1,"rgba(232,200,130,0)"),i.fillStyle=M,i.beginPath(),i.arc(0,0,38,0,Math.PI*2),i.fill(),i.fillStyle="#f4d58f",i.strokeStyle="#0c100e",i.lineWidth=3,i.beginPath(),i.moveTo(0,-17),i.lineTo(11,11),i.lineTo(0,5),i.lineTo(-11,11),i.closePath(),i.fill(),i.stroke(),i.restore();let h=i.createLinearGradient(0,0,0,74);h.addColorStop(0,"rgba(10,13,12,.95)"),h.addColorStop(1,"rgba(10,13,12,0)"),i.fillStyle=h,i.fillRect(0,0,t,74),i.textAlign="left",i.fillStyle="#F2F0EA",i.font="700 25px Inter, Arial",i.fillText(r,26,40),i.fillStyle="#a7c38f",i.font="500 17px Inter, Arial",i.fillText(a,26,64);let m=t-40,v=38;i.strokeStyle="#3a443d",i.lineWidth=2,i.beginPath(),i.arc(m,v,18,0,Math.PI*2),i.stroke(),i.save(),i.translate(m,v),i.rotate(f),i.fillStyle="#d0654f",i.beginPath(),i.moveTo(0,-15),i.lineTo(5,-3),i.lineTo(-5,-3),i.closePath(),i.fill(),i.restore(),i.fillStyle="#9A948B",i.font="600 12px Inter, Arial",i.textAlign="center",i.fillText("N",m,v+34)}var hs=class i extends le{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=e.color!==void 0?new ne(e.color):new ne(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new _n,f=new U,d=new U,p=new U,g=new Pe,M=new U(0,0,-1),h=new ze,m=new U,v=new U,w=new ze,S=new Pe,C=new Ye(r,a,{samples:c,type:tn}),E=new qe({name:l.name!==void 0?l.name:"unspecified",uniforms:Rn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=C.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=S,this.material=E,this.onBeforeRender=function(x,y,O){let A=this.getReflectionCamera(O);if(d.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(O.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),m.subVectors(d,p),m.dot(f)>0===!0&&this.forceUpdate===!1)return;m.reflect(f).negate(),m.add(d),g.extractRotation(O.matrixWorld),M.set(0,0,-1),M.applyMatrix4(g),M.add(p),v.subVectors(d,M),v.reflect(f).negate(),v.add(d),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(g),A.up.reflect(f),A.lookAt(v),A.far=O.far,A.updateMatrixWorld(),A.projectionMatrix.copy(O.projectionMatrix),A.projectionMatrix.elements[8]*=-1,A.projectionMatrix.elements[12]*=-1,S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(A.projectionMatrix),S.multiply(A.matrixWorldInverse),S.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(A.matrixWorldInverse),h.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let F=A.projectionMatrix;A.isOrthographicCamera?(w.x=(Math.sign(h.x)+F.elements[8])/F.elements[0],w.y=(Math.sign(h.y)+F.elements[9])/F.elements[5],w.z=-O.far,w.w=1):(w.x=(Math.sign(h.x)+F.elements[8])/F.elements[0],w.y=(Math.sign(h.y)+F.elements[9])/F.elements[5],w.z=-1,w.w=(1+F.elements[10])/F.elements[14]),h.multiplyScalar(2/h.dot(w)),F.elements[2]=h.x,F.elements[6]=h.y,A.isOrthographicCamera?(F.elements[10]=h.z-o,F.elements[14]=h.w-1):(F.elements[10]=h.z+1-o,F.elements[14]=h.w),n.visible=!1;let j=x.getRenderTarget(),N=x.xr.enabled,B=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(C),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(y,A),x.xr.enabled=N,x.shadowMap.autoUpdate=B,x.setRenderTarget(j);let Y=O.viewport;Y!==void 0&&x.state.viewport(Y),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let y=this._reflectionCameras.get(x);return y===void 0&&(y=x.clone(),this._reflectionCameras.set(x,y)),y}}};hs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Js=class i extends le{constructor(){let t=i.SkyShader,e=new qe({name:t.name,uniforms:Rn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:dn,depthWrite:!1});super(new Qe(1,1,1),e),this.isSky=!0}};Js.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var In=(i,t,e,n=!0)=>{let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new $i(s);return n&&(r.colorSpace=hn),r.anisotropy=8,r},_d=i=>()=>((i=Math.imul(i^i>>>15,2246822519)+2654435769|0)>>>0)/4294967296;function ca(i,t,e,n,s=[1,1,1],r=1){let a=i.getImageData(0,0,t,e),o=a.data,l=r>>>0;for(let c=0;c<o.length;c+=4){l=Math.imul(l,1664525)+1013904223>>>0;let u=((l>>>8)/16777216-.5)*n;o[c]+=u*s[0],o[c+1]+=u*s[1],o[c+2]+=u*s[2]}i.putImageData(a,0,0)}var bn='"Inter", ui-sans-serif, system-ui, sans-serif';function xd({quality:i,reflections:t}){let e=new an;e.name="showroom";let n=[],s=_d(7),r=In(1024,1024,(rt,ct,W)=>{rt.fillStyle="#1e1e1e",rt.fillRect(0,0,ct,W),ca(rt,ct,W,14,[1,1,1],7),rt.strokeStyle="#1b1b1b",rt.lineWidth=3;for(let xt=0;xt<=4;xt++)rt.beginPath(),rt.moveTo(xt*ct/4,0),rt.lineTo(xt*ct/4,W),rt.stroke(),rt.beginPath(),rt.moveTo(0,xt*W/4),rt.lineTo(ct,xt*W/4),rt.stroke()});r.wrapS=r.wrapT=Un,r.repeat.set(10,10);let a=new le(new Ve(40,40),new Pi({map:r,roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.45}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,e.add(a);let o=null;if(t){let rt={...hs.ReflectorShader,fragmentShader:hs.ReflectorShader.fragmentShader.replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor = vec4( base.rgb * color, 1.0 );")};o=new hs(new Ve(40,40),{textureWidth:512,textureHeight:512,multisample:0,color:1710618,shader:rt,clipBias:.003}),o.material.transparent=!0,o.material.blending=is,o.material.depthWrite=!1,o.rotation.x=-Math.PI/2,o.position.y=.002,o.renderOrder=1,e.add(o)}let l=new Ne({color:"#141414",roughness:.92}),c=(rt,ct,W,xt,Tt,Gt,bt)=>{let Pt=new le(new Qe(rt,ct,W),bt);return Pt.position.set(xt,Tt,Gt),Pt.receiveShadow=!0,e.add(Pt),Pt};c(40,10,.4,0,5,-14,l),c(.4,10,40,-16,5,0,l),c(.4,10,40,16,5,0,l),c(40,10,.4,0,5,16,l),c(40,.3,40,0,9.6,0,new Ne({color:"#0b0b0b",roughness:1}));let u=new Ne({color:"#6b4a2f",roughness:.6}),f=new di(new Qe(.09,7.6,.12),u,120),d=new Pe;for(let rt=0;rt<120;rt++)d.makeTranslation(-11.9+rt*.2,3.8,-13.72),f.setMatrixAt(rt,d);f.receiveShadow=!0,e.add(f);let p=In(1600,560,(rt,ct,W)=>{rt.clearRect(0,0,ct,W),rt.fillStyle="#fff",rt.textAlign="center",rt.textBaseline="middle",rt.font=`800 360px ${bn}`,"letterSpacing"in rt&&(rt.letterSpacing="-18px"),rt.fillText("PKM",ct/2,W*.42),rt.font=`600 58px ${bn}`,"letterSpacing"in rt&&(rt.letterSpacing="26px"),rt.fillText("DRIVE  STUDIO  \xB7  KUMASI",ct/2,W*.86)}),g=new Ne({color:"#000",emissive:"#F2E6CF",emissiveMap:p,emissiveIntensity:2.4,transparent:!0,alphaMap:p,roughness:1});p.colorSpace=qn;let M=new le(new Ve(9.6,3.36),g);M.position.set(0,5.5,-13.55),M.userData.click="sign",e.add(M),n.push(M);let h=new le(new Ve(11,4.2),new Fn({color:"#BBA783",transparent:!0,opacity:.08,depthWrite:!1}));h.position.set(0,5.5,-13.62),e.add(h);let m=new Ne({color:"#fff",emissive:"#fff8ee",emissiveIntensity:1.4}),v=[];for(let rt of[-6,-3,0,3,6]){let ct=c(.18,.05,18,rt,9.3,0,m);v.push(ct)}let w=new le(new Ri(4.6,.06,8,96),m);w.rotation.x=Math.PI/2,w.position.y=9.2,e.add(w);let S=new an;e.add(S);let C=new le(new On(4.2,4.25,.1,96),new Pi({color:"#151515",roughness:.35,metalness:.3,clearcoat:.6}));C.position.y=.05,C.receiveShadow=!0,S.add(C);let E=new le(new Ri(4.26,.018,6,160),new Ne({color:"#BBA783",emissive:"#BBA783",emissiveIntensity:1.6}));E.rotation.x=Math.PI/2,E.position.y=.06,S.add(E);let x=new an;x.position.set(9.5,0,-11),e.add(x);let y=new le(new On(.42,.32,.8,32),new Ne({color:"#c9bba3",roughness:.7}));y.position.y=.4,y.castShadow=!0,x.add(y);let O=new Ne({color:"#4f7a3e",roughness:.6,side:cn}),A=[];for(let rt=0;rt<9;rt++){let ct=new le(new Qi(.5,12,8,0,Math.PI*2,0,Math.PI/2),O);ct.scale.set(.35,1.6,.07);let W=rt/9*Math.PI*2;ct.position.set(Math.cos(W)*.12,.85,Math.sin(W)*.12),ct.rotation.set(Math.sin(W)*.5,-W,Math.cos(W)*.5),ct.castShadow=!0,x.add(ct),A.push(ct)}x.traverse(rt=>{rt.userData.click="plant"}),n.push(...x.children);let I=new le(new Ve(2.2,3),new Ne({roughness:.5,map:In(440,600,(rt,ct,W)=>{rt.fillStyle="#0f0f0f",rt.fillRect(0,0,ct,W);let xt=rt.createLinearGradient(0,0,ct,W);xt.addColorStop(0,"#BBA783"),xt.addColorStop(1,"#93AE7C"),rt.fillStyle=xt,rt.fillRect(30,30,ct-60,W*.55),rt.fillStyle="#080808",rt.font=`800 92px ${bn}`,rt.fillText("Iconka",50,W*.42),rt.font=`500 30px ${bn}`,rt.fillText("Designs \xB7 since 2022",52,W*.5),rt.fillStyle="#F2F0EA",rt.font=`700 34px ${bn}`,rt.fillText("Design work \u2192",40,W*.75),rt.fillStyle="#9A948B",rt.font=`400 24px ${bn}`,rt.fillText("Brands, posters, menus",40,W*.82)})}));I.position.set(-15.75,3.4,-5),I.rotation.y=Math.PI/2,I.userData.click="poster",e.add(I),n.push(I);let F=c(.08,3.2,2.4,-15.8,3.4,-5,new Ne({color:"#BBA783",metalness:.8,roughness:.3})),j=new le(new Ve(3.6,5),new Ne({roughness:.6,emissive:"#ffffff",emissiveIntensity:.9,emissiveMap:In(360,500,(rt,ct,W)=>{let xt=rt.createLinearGradient(0,0,0,W);xt.addColorStop(0,"#f0b26b"),xt.addColorStop(.55,"#d9774a"),xt.addColorStop(.56,"#3d4a3c"),xt.addColorStop(1,"#232a22"),rt.fillStyle=xt,rt.fillRect(0,0,ct,W),rt.fillStyle="#1b1f1a";for(let Tt=0;Tt<9;Tt++){let Gt=20+Tt*38,bt=40+Tt*37%70;rt.fillRect(Gt,W*.56-bt,26,bt)}rt.fillStyle="#F2F0EA",rt.font=`800 46px ${bn}`,rt.fillText("Accra 3D",26,70),rt.font=`500 22px ${bn}`,rt.fillText("Drive Liberation Road \u2192",28,104)})}));j.position.set(15.75,2.5,-4),j.rotation.y=-Math.PI/2,j.userData.click="accra",e.add(j),n.push(j),c(.1,5.3,.15,15.75,2.65,-5.9,l),c(.1,5.3,.15,15.75,2.65,-2.1,l);let N=new an;e.add(N);let B=new pi(16777215,40,30,.55,.9,1.5);B.position.set(2.5,9,3),B.target.position.set(0,0,0),B.castShadow=!0,B.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),B.shadow.bias=-2e-4,B.shadow.normalBias=.02,B.shadow.radius=6,N.add(B,B.target);let Y=new pi(14674175,70,30,.7,.8,1.5);Y.position.set(-6,7,-7),N.add(Y,Y.target);let q=new pi(16770760,35,30,.8,.9,1.5);q.position.set(7,4,8),N.add(q,q.target);let ot=new Os(12568012,1709844,.35);N.add(ot);let it=new Ni(16769720,18,14,2);it.position.set(0,5.5,-12.5),N.add(it);function pt(rt){let ct=new Ei;ct.background=new ne(rt==="night"?"#020305":"#0c0c0c");let W=(fe,Zt)=>new Fn({color:new ne(fe).multiplyScalar(Zt)}),xt=rt==="sunset"?"#ffcf9e":rt==="night"?"#9fb6ff":"#ffffff";for(let fe of[-6,-3,0,3,6]){let Zt=new le(new Qe(.5,.1,18),W(xt,rt==="night"?2:8));Zt.position.set(fe,9,0),ct.add(Zt)}let Tt=new le(new Ve(10,5),W(rt==="sunset"?"#ffb070":"#eef2f6",rt==="night"?.6:3));Tt.position.set(14,4,0),Tt.rotation.y=-Math.PI/2,ct.add(Tt);let Gt=new le(new Ve(10,4),W("#d9d2c4",rt==="night"?.3:1.6));Gt.position.set(-14,3.5,4),Gt.rotation.y=Math.PI/2,ct.add(Gt);let bt=new le(new Ve(9,3),W("#F2E6CF",2.5));bt.position.set(0,5.5,-13.5),ct.add(bt);let Pt=new le(new Ve(40,40),W("#2a2a2a",1));return Pt.rotation.x=-Math.PI/2,ct.add(Pt),ct}function ut(rt){let ct=rt==="night",W=rt==="sunset";B.color.set(W?"#ffc890":ct?"#cdd6f5":"#ffffff"),B.intensity=ct?14:W?36:40,Y.color.set(W?"#ff9a5a":ct?"#8ea4e8":"#dfe8ff"),Y.intensity=ct?60:70,q.intensity=ct?8:35,ot.intensity=ct?.08:.35,m.emissiveIntensity=ct?.4:1.4,m.emissive.set(W?"#ffd9ae":ct?"#bcd0ff":"#fff8ee"),g.emissiveIntensity=ct?4:2.4,E.material.emissiveIntensity=ct?2.5:1.6,l.color.set(W?"#1a1612":"#141414")}return{group:e,clickables:n,table:S,sign:M,signM:g,led:E,leaves:A,plant:x,envScene:pt,setMood:ut,mirror:o,lights:{key:B}}}function vd({quality:i}){let t=new an;t.name="course",t.visible=!1;let e=[],n=[],s=_d(42),r=[[0,-60],[70,-70],[118,-40],[125,10],[100,55],[55,62],[20,40],[-10,70],[-60,78],[-112,50],[-120,0],[-95,-45],[-50,-62]].map(([_,L])=>new U(_,0,L)),a=new Ji(r,!0,"centripetal"),o=900,l=a.getSpacedPoints(o),c=9.5,u=In(512,512,(_,L,J)=>{_.fillStyle="#3b3c3d",_.fillRect(0,0,L,J),ca(_,L,J,46,[1,1,1.03],11),_.fillStyle="#e9e6dc",_.fillRect(10,0,14,J),_.fillRect(L-24,0,14,J),_.fillStyle="#e9c45a";for(let z=0;z<J;z+=128)_.fillRect(L/2-5,z,10,64)});u.wrapS=u.wrapT=Un;let f=(_,L,J,z,dt=-_,gt=_)=>{let Z=[],et=[],ht=[],D=0;for(let vt=0;vt<=o;vt++){let wt=l[vt%o],Ct=l[(vt+1)%o],qt=new U().subVectors(Ct,wt).normalize(),re=new U(-qt.z,0,qt.x);if(vt>0&&(D+=l[vt%o].distanceTo(l[(vt-1)%o])),Z.push(wt.x+re.x*dt,J,wt.z+re.z*dt,wt.x+re.x*gt,J,wt.z+re.z*gt),et.push(0,D/z,1,D/z),vt<o){let Et=vt*2;ht.push(Et,Et+1,Et+2,Et+1,Et+3,Et+2)}}let tt=new Xe;tt.setAttribute("position",new Me(Z,3)),tt.setAttribute("uv",new Me(et,2)),tt.setIndex(ht),tt.computeVertexNormals();let nt=new le(tt,L);return nt.receiveShadow=!0,t.add(nt),nt};f(c/2,new Ne({map:u,roughness:.82,side:cn}),.02,10);let d=In(64,64,(_,L,J)=>{_.fillStyle="#c8302a",_.fillRect(0,0,L,J/2),_.fillStyle="#f2f0ea",_.fillRect(0,J/2,L,J/2)});d.wrapS=d.wrapT=Un;let p=new Ne({map:d,roughness:.6,side:cn});f(0,p,.035,2.2,c/2,c/2+.9),f(0,p,.035,2.2,-c/2-.9,-c/2);let g=In(512,512,(_,L,J)=>{_.fillStyle="#4d6b33",_.fillRect(0,0,L,J),ca(_,L,J,40,[.6,1,.45],13)});g.wrapS=g.wrapT=Un,g.repeat.set(90,90);let M=new le(new Ve(700,700),new Ne({map:g,roughness:.95}));M.rotation.x=-Math.PI/2,M.receiveShadow=!0,t.add(M);let h=In(1024,410,(_,L,J)=>{_.fillStyle="#56763a",_.fillRect(0,0,L,J);for(let z=0;z<16;z++)_.fillStyle=z%2?"rgba(130,160,90,.35)":"rgba(40,70,25,.25)",_.fillRect(z*L/16,0,L/16,J);_.save(),_.font=`900 320px ${bn}`,_.textAlign="center",_.textBaseline="middle","letterSpacing"in _&&(_.letterSpacing="15px"),_.fillStyle="rgba(178,205,120,.95)",_.fillText("PKM",L/2,J/2+20),_.globalCompositeOperation="source-atop";for(let z=0;z<40;z++)_.fillStyle=z%2?"rgba(255,255,220,.18)":"rgba(30,60,10,.12)",_.fillRect(0,z*J/40,L,J/40);_.restore(),ca(_,L,J,34,[.55,1,.4],17)}),m=8,v=74,w=30,S=new le(new Ve(v,w),new Ne({map:h,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1}));S.rotation.x=-Math.PI/2,S.position.set(-10,.01,m),S.receiveShadow=!0,t.add(S);let C={x:-10,z:m,hw:v/2-6,hh:w/2-4},E=[[118,-40],[70,-20],[40,10],[20,40]].map(([_,L])=>new U(_,0,L)),x=new Ji(E),y=In(256,256,(_,L,J)=>{_.fillStyle="#9a4f2c",_.fillRect(0,0,L,J),ca(_,L,J,60,[1,.55,.32],19)});y.wrapS=y.wrapT=Un;let O=x.getSpacedPoints(120);{let _=[],L=[],J=[],z=0;for(let Z=0;Z<=120;Z++){let et=O[Z],ht=O[Math.min(120,Z+1)],D=O[Math.max(0,Z-1)],tt=new U().subVectors(ht,D).normalize(),nt=new U(-tt.z,0,tt.x);if(Z&&(z+=et.distanceTo(D)),_.push(et.x+nt.x*3.4,.012,et.z+nt.z*3.4,et.x-nt.x*3.4,.012,et.z-nt.z*3.4),L.push(0,z/6,1,z/6),Z<120){let vt=Z*2;J.push(vt,vt+1,vt+2,vt+1,vt+3,vt+2)}}let dt=new Xe;dt.setAttribute("position",new Me(_,3)),dt.setAttribute("uv",new Me(L,2)),dt.setIndex(J),dt.computeVertexNormals();let gt=new le(dt,new Ne({map:y,roughness:1,side:cn}));gt.receiveShadow=!0,t.add(gt)}let A=(_,L,J)=>{let z=1e9,dt=0;for(let gt=0;gt<_.length;gt+=1){let Z=_[gt],et=(Z.x-L)**2+(Z.z-J)**2;et<z&&(z=et,dt=gt)}return{d:Math.sqrt(z),i:dt}},I=l.filter((_,L)=>L%6===0),F=(_,L)=>{let J=A(I,_,L),z=1e9,dt=0;for(let gt=-8;gt<=8;gt++){let Z=((J.i*6+gt)%o+o)%o,et=l[Z],ht=(et.x-_)**2+(et.z-L)**2;ht<z&&(z=ht,dt=Z)}return{d:Math.sqrt(z),i:dt}},j=new On(.18,.28,1,7);j.translate(0,.5,0);let N=new Fr(1,1),B=new di(j,new Ne({color:"#5a4430",roughness:1}),260),Y=new di(N,new Ne({color:"#3f6b2c",roughness:.9,flatShading:!0}),260);B.castShadow=Y.castShadow=!0;let q=0,ot=new Pe,it=new ln,pt=new ne;for(;q<260;){let _=(s()-.5)*420,L=(s()-.5)*420;if(F(_,L).d<14||Math.abs(_-C.x)<C.hw+10&&Math.abs(L-C.z)<C.hh+10||A(O,_,L).d<8)continue;let J=4+s()*6,z=2+s()*2.4;ot.compose(new U(_,0,L),it.identity(),new U(1,J,1)),B.setMatrixAt(q,ot),ot.compose(new U(_,J+z*.4,L),it.setFromAxisAngle(new U(0,1,0),s()*6),new U(z,z*.75,z)),Y.setMatrixAt(q,ot),Y.setColorAt(q,pt.setHSL(.27+s()*.06,.4+s()*.2,.22+s()*.1)),n.push({x:_,z:L,r:.45}),q++}t.add(B,Y);let ut=l[0],rt=l[3],ct=new U().subVectors(rt,ut).normalize(),W=Math.atan2(ct.x,ct.z),xt=new an;xt.position.copy(ut),xt.rotation.y=W,t.add(xt);let Tt=new Ne({color:"#2b2d2f",metalness:.7,roughness:.4});for(let _ of[-1,1]){let L=new le(new Qe(.4,6.4,.4),Tt);L.position.set(_*(c/2+1.6),3.2,0),L.castShadow=!0,xt.add(L)}let Gt=In(2048,256,(_,L,J)=>{_.fillStyle="#0d0d0d",_.fillRect(0,0,L,J),_.fillStyle="#F2F0EA",_.font=`800 150px ${bn}`,_.textBaseline="middle",_.fillText("PKM",60,J/2+6),_.fillStyle="#BBA783",_.font=`600 84px ${bn}`,_.fillText("KUMASI PROVING GROUND",470,J/2+4)}),bt=new le(new Qe(c+3.6,1.4,.5),[Tt,Tt,Tt,Tt,new Ne({map:Gt,emissive:"#fff",emissiveMap:Gt,emissiveIntensity:.25}),new Ne({map:Gt})]);bt.position.y=6.2,bt.castShadow=!0,xt.add(bt);let Pt=In(256,32,(_,L,J)=>{for(let z=0;z<16;z++)for(let dt=0;dt<2;dt++)_.fillStyle=(z+dt)%2?"#111":"#eee",_.fillRect(z*16,dt*16,16,16)}),fe=new le(new Ve(c,1.2),new Ne({map:Pt,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));fe.rotation.x=-Math.PI/2,fe.position.y=.03,xt.add(fe);let Zt=In(300,200,(_,L,J)=>{_.fillStyle="#ce1126",_.fillRect(0,0,L,J/3),_.fillStyle="#fcd116",_.fillRect(0,J/3,L,J/3),_.fillStyle="#006b3f",_.fillRect(0,2*J/3,L,J/3),_.fillStyle="#000",_.beginPath();let z=L/2,dt=J/2,gt=26;for(let Z=0;Z<10;Z++){let et=-Math.PI/2+Z*Math.PI/5,ht=Z%2?gt*.4:gt;_.lineTo(z+Math.cos(et)*ht,dt+Math.sin(et)*ht)}_.fill()}),ue=new Ve(3,2,20,4),te=new le(ue,new Ne({map:Zt,side:cn,roughness:.8})),ft=new le(new On(.06,.08,10,10),Tt),At=new an;At.position.copy(ut).add(new U(ct.z,0,-ct.x).multiplyScalar(c/2+6)),t.add(At),ft.position.y=5,At.add(ft),te.position.set(1.55,8.8,0),At.add(te),te.castShadow=!0,n.push({x:At.position.x,z:At.position.z,r:.2});let yt=(_,L,J,z,dt,gt)=>{let Z=new an;Z.position.copy(z),Z.rotation.y=dt,t.add(Z);let et=In(1024,512,(tt,nt,vt)=>{tt.fillStyle="#0c0c0c",tt.fillRect(0,0,nt,vt),tt.fillStyle=J,tt.fillRect(0,vt-22,nt,22),tt.fillStyle="#F2F0EA",tt.font=`800 112px ${bn}`,tt.fillText(_,60,200),tt.fillStyle="#B3ACA1",tt.font=`500 50px ${bn}`,tt.fillText(L,64,300),tt.fillStyle=J,tt.font=`700 46px ${bn}`,tt.fillText("Tap to visit \u2192",64,420)}),ht=new le(new Ve(10,5),new Ne({map:et,emissive:"#fff",emissiveMap:et,emissiveIntensity:.18}));ht.position.y=5,ht.userData.click=gt,Z.add(ht),e.push(ht);for(let tt of[-3,3]){let nt=new le(new Qe(.3,5,.3),Tt);nt.position.set(tt,1.5,-.2),nt.castShadow=!0,Z.add(nt),n.push({x:z.x+Math.cos(dt)*tt,z:z.z-Math.sin(dt)*tt,r:.3})}let D=new le(new Qe(10.2,5.2,.2),Tt);return D.position.set(0,5,-.15),Z.add(D),Z};yt("Papa Kojo","Back to the portfolio","#BBA783",new U(30,0,-82),0,"home"),yt("Accra 3D","Drive Liberation Road","#93AE7C",new U(140,0,20),-Math.PI/2,"accra"),yt("Iconka Designs","Brands, posters, menus","#d9774a",new U(-136,0,10),Math.PI/2,"design");let Nt=[],Dt=new Er(.22,.7,16);Dt.translate(0,.35,0);let ie=new Ne({color:"#ff6a1a",roughness:.5});for(let _=0;_<8;_++){let L=Math.round(o*.52)+_*7,J=l[L],z=l[L+1],dt=new U().subVectors(z,J).normalize(),gt=new U(-dt.z,0,dt.x),Z=new le(Dt,ie);Z.castShadow=!0,Z.position.copy(J).addScaledVector(gt,(_%2?1:-1)*1.6),t.add(Z),Nt.push({mesh:Z,home:Z.position.clone(),v:new U,spin:new U,knocked:!1})}let Lt=[];for(let _=0;_<7;_++){let L=Math.round(o*.06)+_*16,J=l[L],z=l[L+1],dt=new U().subVectors(z,J).normalize(),gt=new U(-dt.z,0,dt.x),Z=J.clone().addScaledVector(gt,c/2+2.5),et=new le(new On(.08,.12,8,8),Tt);et.position.copy(Z).setY(4),et.castShadow=!0,t.add(et);let ht=new le(new Qe(1.2,.15,.4),new Ne({color:"#222",emissive:"#ffd9a0",emissiveIntensity:0}));ht.position.copy(Z).addScaledVector(gt,-.6).setY(8),ht.rotation.y=Math.atan2(gt.x,gt.z),t.add(ht),Lt.push(ht),n.push({x:Z.x,z:Z.z,r:.2})}let se=[];for(let _=0;_<3;_++){let L=new Ni(16767392,0,26,1.6);L.position.copy(Lt[_*3].position).setY(7.6),t.add(L),se.push(L)}let jt=new Js;jt.scale.setScalar(4500),t.add(jt);let ae=new zr(16777215,2.6);ae.castShadow=!0,ae.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),Object.assign(ae.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:300}),ae.shadow.bias=-4e-4,ae.shadow.normalBias=.03,t.add(ae,ae.target);let k=new Os(13624319,4872752,.6);t.add(k);let Ce=new U;function Kt(_){let L=_==="night"?-6:_==="sunset"?4:42,J=_==="sunset"?250:200,z=xi.degToRad(90-L),dt=xi.degToRad(J);Ce.setFromSphericalCoords(1,z,dt);let gt=jt.material.uniforms;gt.sunPosition.value.copy(Ce),gt.turbidity.value=_==="sunset"?6:3,gt.rayleigh.value=_==="night"?.4:_==="sunset"?2.6:1.2,gt.mieCoefficient.value=.004,gt.mieDirectionalG.value=.85,ae.intensity=_==="night"?.05:_==="sunset"?1.9:2.7,ae.color.set(_==="sunset"?"#ffb27a":_==="night"?"#8aa0d8":"#fff4e6"),k.intensity=_==="night"?.14:_==="sunset"?.3:.45,k.color.set(_==="night"?"#38456a":"#cfe3ff");for(let Z of Lt)Z.material.emissiveIntensity=_==="night"?4:0;for(let Z of se)Z.intensity=_==="night"?120:0}function me(_){ae.position.copy(_).addScaledVector(Ce.y>.05?Ce:new U(.3,1,.2).normalize(),120),ae.target.position.copy(_)}function It(_){let L=new Ei,J=new Js;J.scale.setScalar(1e3),Object.assign(J.material.uniforms.sunPosition.value,Ce),J.material.uniforms.sunPosition.value.copy(Ce),J.material.uniforms.rayleigh.value=jt.material.uniforms.rayleigh.value,J.material.uniforms.turbidity.value=jt.material.uniforms.turbidity.value,L.add(J);let z=new le(new Ve(2e3,2e3),new Fn({color:_==="night"?"#050806":"#3d5228"}));return z.rotation.x=-Math.PI/2,z.position.y=-1,L.add(z),L}let Le=0;function Xt(_,L){Le+=_;let J=ue.attributes.position;for(let z=0;z<J.count;z++){let dt=J.getX(z)+1.5;J.setZ(z,Math.sin(dt*2.2-Le*6)*.12*dt/3)}J.needsUpdate=!0,ue.computeVertexNormals();for(let z of Nt){if(L){let dt=z.mesh.position.x-L.x,gt=z.mesh.position.z-L.z,Z=Math.hypot(dt,gt),et=Math.hypot(L.vx,L.vy);Z<1.5&&et>1&&!z.knocked&&(z.knocked=!0,z.v.set(dt/Z*et*.7+Math.sin(L.yaw)*et*.5,2+et*.15,gt/Z*et*.7+Math.cos(L.yaw)*et*.5),z.spin.set(s()*8,s()*8,s()*8),z.onHit&&z.onHit())}z.knocked&&(z.v.y-=9.8*_,z.mesh.position.addScaledVector(z.v,_),z.mesh.rotation.x+=z.spin.x*_,z.mesh.rotation.z+=z.spin.z*_,z.mesh.position.y<0&&(z.mesh.position.y=0,z.v.multiplyScalar(.5),z.v.y=Math.abs(z.v.y)*.3,z.spin.multiplyScalar(.6)))}}function Bt(){for(let _ of Nt)_.knocked=!1,_.mesh.position.copy(_.home),_.mesh.rotation.set(0,0,0)}let R=(_,L)=>{let J=F(_,L).d;return J<c/2?{mu:1.05,rough:.02,name:"asphalt"}:J<c/2+.9?{mu:.95,rough:.35,name:"kerb"}:A(O,_,L).d<3.4?{mu:.68,rough:.5,name:"dirt"}:{mu:.6,rough:.6,name:"grass"}};return{group:t,clickables:e,circles:n,curve:a,samples:l,start:{x:ut.x,z:ut.z,yaw:W},grip:R,trackDist:F,pkmZone:C,setMood:Kt,follow:me,envScene:It,animate:Xt,resetCones:Bt,cones:Nt,bounds:{minX:-200,maxX:200,minZ:-200,maxZ:200}}}var yd={DoubleSide:cn,BoxGeometry:Qe,BufferAttribute:En,BufferGeometry:Xe,CanvasTexture:$i,CircleGeometry:Tr,Color:ne,ColorManagement:Te,CylinderGeometry:On,ExtrudeGeometry:Ur,Float32BufferAttribute:Me,Group:an,InstancedMesh:di,LatheGeometry:Or,Matrix4:Pe,Mesh:le,MeshBasicMaterial:Fn,MeshPhysicalMaterial:Pi,MeshStandardMaterial:Ne,PlaneGeometry:Ve,PointLight:Ni,Points:Mr,PointsMaterial:Ls,Quaternion:ln,RepeatWrapping:Un,SRGBColorSpace:hn,Shape:Ns,SphereGeometry:Qi,SpotLight:pi,TorusGeometry:Ri,Vector2:Mt,Vector3:U};async function YM(i){let t=(K,St=document)=>St.querySelector(K),e=(K,St=document)=>[...St.querySelectorAll(K)],n=new URLSearchParams(location.search),s={get(K,St){try{let Ft=localStorage.getItem(K);return Ft?JSON.parse(Ft):St}catch{return St}},set(K,St){try{localStorage.setItem(K,JSON.stringify(St))}catch{}}},r=document.createElement("style");r.textContent=ud,document.head.appendChild(r);let a=t("#view"),o=n.get("quality")||s.get("pkm.drive.quality","auto"),l=["auto","high","low"].includes(o)?o:"auto",c=matchMedia("(max-width: 900px)"),u=(()=>{try{let K=document.createElement("canvas").getContext("webgl"),St=K&&K.getExtension("WEBGL_debug_renderer_info");return St?String(K.getParameter(St.UNMASKED_RENDERER_WEBGL)):""}catch{return""}})(),d=/SwiftShader|llvmpipe|Mali-[GT][0-9]{1,2}\b|Adreno \(TM\) [1-5][0-9]{2}\b|PowerVR|Intel\(R\) (HD|UHD) Graphics( [1-6][0-9]{2})?\b/i.test(u)||(navigator.hardwareConcurrency||8)<=4||c.matches,p=l==="high",g=()=>p||l==="auto"&&!d&&!M?"high":"low",M=!1,h=new ol({canvas:a,antialias:!0,powerPreference:"high-performance"});i.watchCanvas(a),h.setPixelRatio(Math.min(devicePixelRatio,g()==="low"?1:1.5)),h.toneMapping=rs,h.toneMappingExposure=1,h.shadowMap.enabled=!0,h.shadowMap.type=ns;let m=new Ei,v=new un(36,1,.1,6e3),w=new ul(v,a);Object.assign(w,{enableDamping:!0,dampingFactor:.07,minDistance:4,maxDistance:18,maxPolarAngle:Math.PI*.495,autoRotateSpeed:.6,enablePan:!1});let S=new qs(h),C,E;p&&(C=new pl(h),C.addPass(new ml(m,v)),E=new Ks(new Mt(256,256),.35,.4,1),C.addPass(E),C.addPass(new gl));let x=xd({quality:g(),reflections:p});m.add(x.group);let y=new xl;y.setMuted(s.get("pkm.drive.muted",!1));let O={};function A(K){if(O[K])return O[K];let St=od(yd,K),Ft=s.get("pkm.drive.paint."+K,0);St.paintIndex=Number.isInteger(Ft)&&St.spec.paints[Ft]?Ft:0;let xe=St.spec.paints[St.paintIndex];return St.setPaint(xe.hex,xe.metal),St.root.traverse(Oe=>{Oe.isMesh&&(Oe.userData.car=K)}),O[K]=St}let I=n.get("car")||s.get("pkm.drive.car","volta"),F=Object.hasOwn(Zc,I)?I:"volta",j="showroom",N="studio",B=()=>A(F),Y=()=>F==="volta"?"regent":"volta";function q(){for(let Ft of Object.values(O))Ft.root.removeFromParent();let K=B();x.table.add(K.root),K.root.position.set(0,.1,0),K.root.rotation.set(0,0,0);for(let Ft of Object.values(O)){Ft.body.rotation.set(0,0,0),Ft.body.position.set(0,0,0);for(let xe of Ft.wheels)xe.pivot.rotation.y=0,xe.pivot.position.y=xe.baseY}let St=O[Y()];St&&(x.group.add(St.root),St.root.position.set(-9.2,0,1.5),St.root.rotation.set(0,.6,0))}let ot,it=0;function pt(){if(!ot){ot=vd({quality:g()}),m.add(ot.group),ut.collide=hd({bounds:ot.bounds,circles:ot.circles,carR:1,carHalf:1.7});for(let K of ot.cones)K.onHit=()=>{it++,y.thunk(.25),it>=ot.cones.length&&Xt("cones","Slalom","All eight cones down.")}}}let ut={grip:(K,St)=>j==="drive"?ot.grip(K,St):{mu:1,rough:0,name:"floor"},respawn:K=>{let St=ot.trackDist(K.x,K.z),Ft=ot.samples[St.i],xe=ot.samples[(St.i+3)%ot.samples.length];return{x:Ft.x,z:Ft.z,yaw:Math.atan2(xe.x-Ft.x,xe.z-Ft.z)}},dustColor:10780762,night:!1,navMap(K,St,Ft,xe){let Oe=ot.trackDist(xe.x,xe.z),Ze=ot.samples.length;gd(K,St,Ft,xe,{scale:2.1,title:"Kumasi test track",detail:`${Math.round(Oe.i/Ze*100)}% round the lap`,world(Se,Be){Se.beginPath(),ot.samples.forEach((Ke,yn)=>yn?Se.lineTo(Ke.x,Ke.z):Se.moveTo(Ke.x,Ke.z)),Se.closePath(),Se.strokeStyle="#26302a",Se.lineWidth=34*Be,Se.stroke(),Se.strokeStyle="#8e8a80",Se.lineWidth=20*Be,Se.stroke(),Se.strokeStyle="#c9c3b5",Se.setLineDash([8*Be,10*Be]),Se.lineWidth=1.5*Be,Se.stroke(),Se.setLineDash([]);let De=ot.start;Se.strokeStyle="#f2f0ea",Se.lineWidth=5*Be,Se.beginPath(),Se.moveTo(De.x-Math.cos(De.yaw)*5,De.z+Math.sin(De.yaw)*5),Se.lineTo(De.x+Math.cos(De.yaw)*5,De.z-Math.sin(De.yaw)*5),Se.stroke(),Se.fillStyle="#d9a441";for(let Ke of ot.cones){let yn=Ke.position??Ke.mesh?.position??Ke;yn?.x!==void 0&&(Se.beginPath(),Se.arc(yn.x,yn.z,1.2,0,7),Se.fill())}}})}},rt=dd(t("#stage")),ct=new yl({THREE:yd,scene:m,camera:v,dom:a,vehicle:B(),audio:y,env:ut,onEvent:gt});fd(t("#stage"),ct);let W=md(t("#stage"),ct,{exitLabel:"Showroom",onExit:()=>Ml(()=>Ce("showroom")),resetLabel:"Reset car and cones",onReset:()=>{ct.recover(),k()}});n.has("debug")&&(window.__pkm={camera:v,controls:w,drive:ct,car:()=>B()});let xt={};function Tt(){let K=j+":"+N;if(!xt[K]){let St=j==="drive"?ot.envScene(N):x.envScene(N);xt[K]=S.fromScene(St,.03,.1,100,{size:128}).texture,St.traverse(Ft=>{Ft.geometry?.dispose(),Ft.material?.dispose()})}m.environment=xt[K],m.environmentIntensity=j==="drive"?N==="night"?.12:.45:N==="night"?.55:1,j==="drive"?(m.background=null,m.fog=new gr(N==="night"?"#05070c":N==="sunset"?"#c98f6a":"#9fb6c8",N==="night"?.004:.0011),h.toneMappingExposure=N==="night"?.9:N==="sunset"?.7:.55):(m.background=new ne(N==="night"?"#050505":"#0a0a0a"),m.fog=null,h.toneMappingExposure=1),E&&(E.strength=N==="night"?.6:.35,E.enabled=j==="showroom"||N==="night"),ut.night=N==="night"}function Gt(K){N=K,x.setMood(K),ot?.setMood(K),Tt(),e("[data-mood]").forEach(St=>St.setAttribute("aria-pressed",St.dataset.mood===K)),K==="night"&&(B().state.head=!0,ie())}let bt={hero:[[7.4,1.85,8.2],[-.9,.8,.4]],front:[[.4,1.3,8.2],[0,.9,0]],rear:[[-1.2,1.9,-8.2],[0,.9,0]],side:[[8.6,1.2,.3],[0,.9,0]],top:[[.4,10.5,1.2],[0,0,0]],wheel:[[3.2,.55,3.6],[1.2,.4,1.5]],interior:null},Pt=null,fe=!1;function Zt(){w.minDistance=.01,w.maxDistance=.6,v.near=.02,v.updateProjectionMatrix()}function ue(K,St,Ft=!1){if(i.reducedMotion.matches){Pt=null,Ft&&Zt(),v.fov=Ft?62:36,v.updateProjectionMatrix(),v.position.copy(K),w.target.copy(St),w.update();return}Pt={from:v.position.clone(),to:K,tf:w.target.clone(),tt:St,t0:performance.now(),interior:Ft,fov0:v.fov,fov1:Ft?62:36}}function te(K){if(At(!1),K==="interior")return ft();let[St,Ft]=bt[K],xe=x.table.rotation.y,Oe=Be=>new U(Be[0],Be[1],Be[2]).applyAxisAngle(new U(0,1,0),xe),Ze=Oe(St),Se=Oe(Ft);if(c.matches){K==="hero"&&(Se.y-=.33);let Be=xi.clamp(.9/v.aspect,1,1.72);Ze.sub(Se).multiplyScalar(Be).add(Se)}ue(Ze,Se),t("#interiorBtn").textContent="Interior",e("[data-cam]").forEach(Be=>Be.setAttribute("aria-pressed",Be.dataset.cam===K))}function ft(){fe=!0,t("#interiorBtn").textContent="Exterior";let K=B();K.root.updateMatrixWorld(!0);let St=K.driverEye.clone();K.body.localToWorld(St);let Ft=new U(1,-.16,0).normalize().applyQuaternion(K.body.getWorldQuaternion(new ln));ue(St.clone().addScaledVector(Ft,-.02),St.clone().addScaledVector(Ft,.45),!0),e("[data-cam]").forEach(xe=>xe.setAttribute("aria-pressed",xe.dataset.cam==="interior")),K.setCabinView(!0),K.drawCluster(0,ct.dyn.engine?ct.dyn.rpm:0,"P")}function At(K=!0){fe&&(fe=!1,w.minDistance=4,w.maxDistance=18,v.near=.1,v.updateProjectionMatrix(),B().setCabinView(!1),K&&te("hero"))}let yt=!i.reducedMotion.matches&&s.get("pkm.drive.spin",!1)===!0;t("#spin").setAttribute("aria-pressed",yt),i.reducedMotion.addEventListener("change",K=>{K.matches&&Nt(!1)});function Nt(K){yt=K,t("#spin").setAttribute("aria-pressed",K),s.set("pkm.drive.spin",K)}function Dt(){let K=B().spec;t("#kicker").textContent=`${K.brand} \xB7 2027`,t("#vname").textContent=K.name,t("#trim").textContent=K.trim,t("#tagline").textContent=K.tagline,t("#chips").innerHTML=K.chips.map(St=>`<li>${St}</li>`).join(""),e("[data-car]").forEach(St=>St.setAttribute("aria-current",St.dataset.car===F)),t("#swatches").innerHTML=K.paints.map((St,Ft)=>`<button class="swatch" style="--sw:${St.hex}" data-paint="${Ft}" aria-pressed="${Ft===B().paintIndex}" aria-label="${St.name}" title="${St.name}"></button>`).join(""),t("#paintName").textContent=K.paints[B().paintIndex].name,t('[data-panel="tailgate"]').textContent=F==="volta"?"Tailgate":"Liftgate",t("#accraLink").href=`/accra3d/?drive=${F}&paint=${B().paintIndex}`,document.title=`PKM ${K.name} \xB7 Drive Studio \xB7 Papa Kojo`}function ie(){let K=B().state;for(let St of["head","left","right","hazard"])for(let Ft of e(`[data-light="${St}"]`))Ft.setAttribute("aria-pressed",!!K[St]);for(let[St,Ft]of Object.entries(B().panels)){let xe=t(`[data-panel="${St}"]`);xe&&Ft.userData&&xe.setAttribute("aria-pressed",Ft.userData.target===1)}t("#engineBtn").textContent=ct.startTimer?"Cancel start":ct.dyn.engine?"Stop engine":"Start engine",W.sync()}function Lt(K){K===F||j==="drive"||(At(!1),F=K,s.set("pkm.drive.car",K),ct.setVehicle(B()),N==="night"&&(B().state.head=!0),q(),te("hero"),Dt(),ie())}e("[data-car]").forEach(K=>K.addEventListener("click",()=>Lt(K.dataset.car))),t("#swatches").addEventListener("click",K=>{let St=K.target.closest("[data-paint]");if(!St)return;let Ft=+St.dataset.paint,xe=B().spec.paints[Ft];B().setPaint(xe.hex,xe.metal),B().paintIndex=Ft,s.set("pkm.drive.paint."+F,Ft),Dt(),y.click(2600,.08,.02),xe.name==="Kente Gold"&&Xt("gold","Kente Gold","The only paint with a story woven in.")}),e("[data-panel]").forEach(K=>K.addEventListener("click",()=>se(K.dataset.panel)));function se(K){let St=B().togglePanel(K);K.startsWith("front")||K.startsWith("rear")?St?y.latch():setTimeout(()=>y.thunk(.5),260):K==="hood"||K==="tailgate"?St?y.latch():setTimeout(()=>y.thunk(.7),420):y.click(1200,.12,.08),ie()}e("[data-light]").forEach(K=>K.addEventListener("click",()=>ct.toggle(K.dataset.light))),t("#horn").addEventListener("click",()=>ct.horn()),t("#engineBtn").addEventListener("click",()=>ct.toggleEngine()),t("#interiorBtn").addEventListener("click",()=>te(fe?"hero":"interior")),e("[data-cam]").forEach(K=>K.addEventListener("click",()=>te(K.dataset.cam))),e("[data-mood]").forEach(K=>K.addEventListener("click",()=>Gt(K.dataset.mood))),t("#spin").addEventListener("click",()=>Nt(!yt)),t("#quality").value=l,t("#quality").addEventListener("change",K=>{s.set("pkm.drive.quality",K.target.value);let St=new URL(location.href);St.searchParams.delete("quality"),St.searchParams.set("car",F),location.replace(St)});function jt(){t("#mute").setAttribute("aria-pressed",!y.muted),t("#mute").textContent=y.muted?"Sound off":"Sound on"}t("#mute").addEventListener("click",()=>{y.setMuted(!y.muted),s.set("pkm.drive.muted",y.muted),jt(),y.muted||y.unlock().catch(()=>{})}),jt(),t("#fullscreen").hidden=!document.fullscreenEnabled,t("#fullscreen").addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{})});function ae(K){t("#panel").dataset.open=K,t("#panelToggle").setAttribute("aria-expanded",K),t("#panelBody").inert=c.matches&&!K}ae(!1),c.addEventListener("change",()=>ae(!1)),t("#panelToggle").addEventListener("click",()=>ae(t("#panel").dataset.open!=="true")),t(".skip").addEventListener("click",K=>{K.preventDefault(),ae(!0),(j==="drive"?W.el.querySelector(".pkm-bar__exit"):t("#panelBody").querySelector("button")).focus()}),t("#driveBtn").addEventListener("click",()=>{t("#driveBtn").disabled||(t("#driveBtn").disabled=!0,t("#driveBtn").textContent="Opening track\u2026",y.muted||y.unlock().catch(()=>{}),requestAnimationFrame(()=>requestAnimationFrame(()=>{i.running&&Ml(()=>{try{Ce("drive")}catch{et("The track couldn\u2019t open","Try again or drive through Accra.")}finally{t("#driveBtn").disabled=!1,t("#driveBtn").textContent="Test track"}})})))}),document.addEventListener("keydown",K=>{K.key==="Escape"&&(t("#secrets").hidden?j==="drive"?Ml(()=>Ce("showroom")):t("#panel").dataset.open==="true"&&c.matches?(ae(!1),t("#panelToggle").focus()):fe&&te("hero"):(Bt(!1),t("#secretsBtn").focus()))});function k(){it=0,ot.resetCones()}function Ce(K,St=!0){if(K!==j){if(K==="drive"&&pt(),j=K,document.body.dataset.mode=K,K==="drive"){At(!1),Pt=null,ae(!1),Bt(!1),x.group.visible=!1,ot.group.visible=!0,ot.setMood(N),m.add(B().root),w.enabled=!1,ct.setEnabled(!0),ct.cycleCamera("chase");for(let Ft of Object.keys(B().panels))B().togglePanel(Ft,!1);ct.place(ot.start.x,ot.start.z,ot.start.yaw),k(),rt.el.hidden=!1,ct.toggleEngine(!0),W.show(!0),et("Kumasi test track",pd[matchMedia("(pointer: coarse)").matches?"coarse":"fine"]),a.setAttribute("aria-label","Kumasi test track. W to accelerate, S to brake, V to shift.")}else ct.setEnabled(!1),rt.el.hidden=!0,W.show(!1),x.group.visible=!0,ot.group.visible=!1,w.enabled=!0,v.near=.1,v.fov=36,v.updateProjectionMatrix(),y.cabin=0,q(),te("hero"),a.setAttribute("aria-label","3D showroom. Drag to orbit and use the controls to inspect the car."),St&&t("#driveBtn").focus({preventScroll:!0});Tt(),ie()}}let Kt={sign:["The sign","Click the PKM sign three times."],plant:["Akwaaba","Water the plant in the corner."],horn:["Beep beep","Honk three times quickly."],pkm:["Field work","Find the name mowed into the infield."],cones:["Slalom","Knock over all eight cones."],gold:["Kente Gold","Find the paint with a story."],konami:["Disco","The classic code. \u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA"],ton:["Ton-up","Hit 120 km/h on the proving ground."]},me=s.get("pkm.drive.secrets",[]),It=new Set(Array.isArray(me)?me.filter(K=>Object.hasOwn(Kt,K)):[]);function Le(){for(let K of document.querySelectorAll("[data-secret-count], #secretCount"))K.textContent=`${It.size}/${Object.keys(Kt).length}`;t("#secretList").innerHTML=Object.entries(Kt).map(([K,[St,Ft]])=>`<li data-found="${It.has(K)}"><strong>${It.has(K)?St:"Hidden"}</strong><span>${Ft}</span></li>`).join("")}function Xt(K,St,Ft){It.has(K)||(It.add(K),s.set("pkm.drive.secrets",[...It]),Le(),y.chime(),et(`Secret found \xB7 ${It.size}/${Object.keys(Kt).length}`,`${St}. ${Ft}`))}function Bt(K){t("#secrets").hidden=!K,t("#secretsBtn").setAttribute("aria-expanded",K),K&&t("#closeSecrets").focus()}t("#secretsBtn").addEventListener("click",()=>Bt(t("#secrets").hidden)),t("#closeSecrets").addEventListener("click",()=>{Bt(!1),t("#secretsBtn").focus()}),Le();let R=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"],_=0,L=0;addEventListener("keydown",K=>{_=K.key.toLowerCase()===R[_]?_+1:K.key.toLowerCase()===R[0]?1:0,_===R.length&&(_=0,i.reducedMotion.matches||(L=8),Ct(),Xt("konami","Disco","Eight seconds of showroom party."))});let J=0,z=0,dt=["#F2E6CF","#BBA783","#93AE7C","#ce1126","#fcd116","#006b3f"];function gt(K,St){K==="horn"&&St>=3&&Xt("horn","Beep beep","Akwaaba! Kumasi heard you."),(K==="engine"||K==="direction")&&ie(),K==="shift-blocked"&&et("Stop before shifting","Bring the car to a stop and release the accelerator."),Ct(),K==="camera"&&(W.sync(),St==="drone"&&j==="drive"&&et("Drone camera","Look down at the infield.")),K==="lights"&&ie()}let Z;function et(K,St){let Ft=t("#toast");Ft.innerHTML=`<strong>${K}</strong><span>${St}</span>`,Ft.hidden=!1,Ft.classList.remove("show"),Ft.offsetWidth,Ft.classList.add("show"),clearTimeout(Z),Z=setTimeout(()=>Ft.classList.remove("show"),4200)}let ht=new Vr,D=new Mt,tt=null;a.addEventListener("pointerdown",K=>{tt=[K.clientX,K.clientY]}),a.addEventListener("pointerup",K=>{if(!tt||Math.hypot(K.clientX-tt[0],K.clientY-tt[1])>6)return;let St=vt(K);if(!St)return;let Ft=St.object,xe=Ft.userData.click;if(Ft.userData.panel&&Ft.userData.car===F&&j==="showroom")return se(Ft.userData.panel);if(Ft.userData.car&&Ft.userData.car!==F&&j==="showroom")return Lt(Ft.userData.car);if(xe==="sign")J++,x.signM.emissive.set(dt[J%dt.length]),y.click(800+J*120,.15,.05),J>=3&&Xt("sign","The sign","It cycles through the Ghana flag colours too.");else if(xe==="plant"){z++,y.chime([520,660]);for(let Oe of x.leaves)Oe.scale.y=Math.min(2.6,Oe.scale.y*1.08);et("Watering the plants\u2026",z<3?"It likes that.":"Look how it has grown."),z>=3&&Xt("plant","Akwaaba","Just like the portfolio\u2019s welcome screen.")}else xe==="poster"||xe==="design"?location.href="/design/":xe==="home"?location.href="/":xe==="accra"&&(location.href=t("#accraLink").href)});let nt=0;a.addEventListener("pointermove",K=>{if(j!=="showroom"||K.pointerType==="touch")return;let St=performance.now();if(St-nt<120)return;nt=St;let Ft=vt(K);a.style.cursor=Ft&&(Ft.object.userData.click||Ft.object.userData.car&&j==="showroom"&&(Ft.object.userData.panel||Ft.object.userData.car!==F))?"pointer":""});function vt(K){let St=a.getBoundingClientRect();D.set((K.clientX-St.left)/St.width*2-1,-((K.clientY-St.top)/St.height)*2+1),ht.setFromCamera(D,v);let Ft=j==="showroom"?[...x.clickables,...Object.values(O).map(xe=>xe.root)]:ot.clickables;return ht.intersectObjects(Ft,!0).find(xe=>xe.object.visible)||null}let wt=0;function Ct(){wt=performance.now()+1600}function qt(){let K=a.clientWidth,St=a.clientHeight;!K||!St||(h.setSize(K,St,!1),C?.setSize(K,St),v.aspect=K/St,v.updateProjectionMatrix(),Ct())}new ResizeObserver(qt).observe(a),w.addEventListener("change",Ct),document.querySelector("[data-scene-controls]").addEventListener("click",Ct),a.addEventListener("pointerup",Ct);let re,Et=0,ee=0,ge=0;function Vt(K){C&&E.enabled?C.render(K):h.render(m,v)}function Ae(K){if(!i.running){ct.setEnabled(!1);return}requestAnimationFrame(Ae);let St=re===void 0?0:(K-re)/1e3;if(re=K,document.hidden||St>.5)return;let Ft=Math.min(St,.1);if(j==="showroom"){let Oe=B(),Ze=yt&&!Pt&&!fe;if(Ze&&(x.table.rotation.y+=Ft*.12),Pt){let De=Math.min(1,(K-Pt.t0)/1e3),Ke=1-Math.pow(1-De,3);v.position.lerpVectors(Pt.from,Pt.to,Ke),w.target.lerpVectors(Pt.tf,Pt.tt,Ke),Pt.fov0!==Pt.fov1&&(v.fov=Pt.fov0+(Pt.fov1-Pt.fov0)*Ke,v.updateProjectionMatrix()),Pt.interior&&De>.62&&v.near!==.02&&Zt(),De>=1&&(Pt=null)}w.update();let Se=Object.values(Oe.panels).some(De=>Math.abs(De.userData.open-De.userData.target)>.002),Be=Oe.state;if(K>wt&&!Ze&&!Pt&&!Se&&!ct.dyn.engine&&!Be.left&&!Be.right&&!Be.hazard&&L<=0)return;if(Oe.update(Ft,{engine:ct.dyn.engine,night:N==="night"}),ct.dyn.engine){let De=ct.dyn;De.rpm+=(Oe.spec.idle-De.rpm)*Math.min(1,Ft*3),De.throttle*=.9,Oe.body.position.y=i.reducedMotion.matches?0:Math.sin(K*.05)*.0012,y.update(De,Oe.spec,Ft),Oe.drawCluster(0,De.rpm,"P")}if(L>0){L-=Ft;let De=K/600%1;x.signM.emissive.setHSL(De,.8,.6),x.led.material.emissive.setHSL((De+.5)%1,.8,.55),x.lights.key.color.setHSL(De,.7,.6),L<=0&&Gt(N)}}else{ct.update(Ft);let Oe=ct.dyn;ot.follow(B().root.position),ot.animate(Ft,Oe),rt.update(ct.hud(),Ft),Math.abs(Oe.vx)*3.6>120&&Xt("ton","Ton-up","You reached 120 km/h on the test track.");let Ze=ot.pkmZone;Math.abs(Oe.x-Ze.x)<Ze.hw&&Math.abs(Oe.z-Ze.z)<Ze.hh&&Xt("pkm","Field work","You found the PKM in the grass. Try the drone camera.")}if(Vt(Ft),ee++,Et+=St*1e3,Et<1400)return;ge=ee/Et*1e3<30?ge+1:0,ee=0,Et=0,l==="auto"&&!M&&ge>=2&&(M=!0,h.setPixelRatio(Math.min(devicePixelRatio,.9)),qt())}i.progress("Setting up the showroom\u2026"),q(),Dt();let ke=n.get("mood");Gt(["studio","sunset","night"].includes(ke)?ke:"studio"),qt();let[kn,js]=bt.hero;v.position.set(...kn),w.target.set(...js),c.matches&&(w.target.y-=.33,v.position.sub(w.target).multiplyScalar(xi.clamp(.9/v.aspect,1,1.72)).add(w.target)),w.update(),i.progress("Preparing the paint and lights\u2026");try{h.compileAsync&&await h.compileAsync(m,v)}catch{}if(Vt(0),!i.running)return;ie(),i.ready();let Vi=K=>window.requestIdleCallback?requestIdleCallback(K,{timeout:2500}):setTimeout(K,600);Vi(()=>{if(!i.running)return;let K=A(Y());K.root.traverse(St=>{St.isMesh&&(St.userData.car=K.spec.id)}),j==="showroom"&&q(),Ct(),Vi(()=>{i.running&&!ot&&!c.matches&&(pt(),ot.group.visible=!1)})}),s.get("pkm.drive.tip",!1)||(setTimeout(()=>et("Tip","Click a door, the bonnet or the PKM sign. The car beside the turntable swaps in when you click it."),1200),s.set("pkm.drive.tip",!0)),n.get("mode")==="drive"&&requestAnimationFrame(()=>{i.running&&Ce("drive",!1)}),requestAnimationFrame(Ae),window.__ds={scene:m,cars:O,drive:ct,setMode:Ce,selectCar:Lt,setMood:Gt,flyTo:te,get course(){return ot},togglePanel:se,secret:Xt}}export{YM as startStudio};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
