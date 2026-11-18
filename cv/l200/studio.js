var Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eh=0,ic=1,Ah=2;var Qi=1,Ch=2,zs=3,Ni=0,rn=1,hn=2,hi=0,Gs=1,ts=2,sc=3,rc=4,Rh=5;var es=100,Ph=101,Ih=102,Lh=103,Dh=104,Nh=200,Uh=201,Fh=202,Oh=203,ac=204,oc=205,Bh=206,kh=207,zh=208,Gh=209,Vh=210,Hh=211,Wh=212,Xh=213,qh=214,Oa=0,Ba=1,ka=2,Ts=3,za=4,Ga=5,Va=6,Ha=7,lc=0,Yh=1,Zh=2,Yn=0,Hr=1,Wr=2,Xr=3,ns=4,qr=5,Yr=6,Zr=7;var cc=300,is=301,Vs=302,go=303,_o=304,In=1e3,Xn=1001,Wa=1002,Qe=1003,Kh=1004;var Kr=1005;var pn=1006,xo=1007;var ui=1008;var gn=1009,hc=1010,uc=1011,Hs=1012,vo=1013,Gn=1014,Nn=1015,Xe=1016,yo=1017,Mo=1018,ss=1020,dc=35902,fc=35899,pc=1021,mc=1022,Vn=1023,ii=1026,di=1027,So=1028,bo=1029,Ui=1030,wo=1031;var To=1033,Jr=33776,$r=33777,jr=33778,Qr=33779,Eo=35840,Ao=35841,Co=35842,Ro=35843,Po=36196,Io=37492,Lo=37496,Do=37488,No=37489,ta=37490,Uo=37491,Fo=37808,Oo=37809,Bo=37810,ko=37811,zo=37812,Go=37813,Vo=37814,Ho=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Zo=37820,Ko=37821,Jo=36492,$o=36494,jo=36495,Qo=36283,tl=36284,ea=36285,el=36286;var hr=2300,Xa=2301,Ua=2302,Vl=2303,Hl=2400,Wl=2401,Xl=2402;var Jh=3200;var nl=0,$h=1,Hn="",nn="srgb",ur="srgb-linear",dr="linear",Ae="srgb";var Fa=7680;var jh=519,Qh=512,tu=513,eu=514,gc=515,nu=516,iu=517,_c=518,xc=519,su=35044;var vc="300 es",Pn=2e3,Es=2001;function dd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=fr("canvas");return i.style.display="block",i}var Wc={},As=null;function yc(...i){let t="THREE."+i.shift();As?As("log",t,...i):console.log(t,...i)}function au(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=au(i);let t="THREE."+i.shift();if(As)As("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=au(i);let t="THREE."+i.shift();if(As)As("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xi(...i){let t=i.join(" ");t in Wc||(Wc[t]=!0,oe(...i))}function ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lu={[Oa]:Oa,[ka]:Va,[za]:za,[Ts]:Ga,[Ba]:Ba,[Va]:ka,[Ha]:Ha,[Ga]:Ts},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,ar=Math.PI/180,qi=180/Math.PI;function rs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Mc(i,t){return(i%t+t)%t}function pd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function md(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function gd(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function _d(i,t=1){return t-Math.abs(Mc(i,t*2)-t)}function xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Md(i,t){return i+Math.random()*(t-i)}function Sd(i){return i*(.5-Math.random())}function bd(i){i!==void 0&&(Xc=i);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wd(i){return i*ar}function Td(i){return i*qi}function Ed(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function cu(i,t){if(t.constructor===Float32Array)return i;let e=bc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function hu(i,t){if(t.constructor===Float32Array)return i;let e=bc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var fi={DEG2RAD:ar,RAD2DEG:qi,generateUUID:rs,clamp:me,euclideanModulo:Mc,mapLinear:pd,inverseLerp:md,lerp:or,damp:gd,pingpong:_d,smoothstep:xd,smootherstep:vd,randInt:yd,randFloat:Md,randFloatSpread:Sd,seededRandom:bd,degToRad:wd,radToDeg:Td,isPowerOfTwo:Ed,ceilPowerOfTwo:Ad,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:Cd,normalize:hu,denormalize:cu},xt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],b=r[a+3];if(f!==b||l!==h||c!==p||u!==_){let d=l*h+c*p+u*_+f*b;d<0&&(h=-h,p=-p,_=-_,b=-b,d=-d);let m=1-o;if(d<.9995){let y=Math.acos(d),w=Math.sin(y);m=Math.sin(m*y)/w,o=Math.sin(o*y)/w,l=l*m+h*o,c=c*m+p*o,u=u*m+_*o,f=f*m+b*o}else{l=l*m+h*o,c=c*m+p*o,u=u*m+_*o,f=f*m+b*o;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*f+l*p-c*h,t[e+1]=l*_+u*h+c*f-o*p,t[e+2]=c*_+u*p+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new N,qc=new tn,de=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],b=s[0],d=s[3],m=s[6],y=s[1],w=s[4],M=s[7],C=s[2],E=s[5],g=s[8];return r[0]=a*b+o*y+l*C,r[3]=a*d+o*w+l*E,r[6]=a*m+o*M+l*g,r[1]=c*b+u*y+f*C,r[4]=c*d+u*w+f*E,r[7]=c*m+u*M+f*g,r[2]=h*b+p*y+_*C,r[5]=h*d+p*w+_*E,r[8]=h*m+p*M+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=e*f+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return t[0]=f*b,t[1]=(s*c-u*n)*b,t[2]=(o*n-s*a)*b,t[3]=h*b,t[4]=(u*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=p*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(t,e)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new de,Yc=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){let i={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ur]:{primaries:t,whitePoint:n,transfer:dr,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}var ve=Rd();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=fr("canvas")),hs.width=t.width,hs.height=t.height;let s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pd=0,Cs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ml(s[a].image)):r.push(Ml(s[a]))}else r=Ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var Id=0,Sl=new N,mn=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=pn,a=ui,o=Vn,l=gn,c=i.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=rs(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case In:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case In:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=cc;mn.DEFAULT_ANISOTROPY=1;var Le=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],b=l[2],d=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,M=(p+1)/2,C=(m+1)/2,E=(u+h)/4,g=(f+b)/4,S=(_+d)/4;return w>M&&w>C?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=g/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=g/r,s=S/r),this.set(n,s,r,e),this}let y=Math.sqrt((d-_)*(d-_)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-_)/y,this.y=(f-b)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ya=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new mn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends Ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pr=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Za=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Se=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,f,h,p,_,b,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,p,_,b,d)}set(t,e,n,s,r,a,o,l,c,u,f,h,p,_,b,d){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=_,m[11]=b,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*f,_=o*u,b=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=h-b*c,e[9]=-o*l,e[2]=b-h*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*f,_=c*u,b=c*f;e[0]=h+b*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=b+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*f,_=c*u,b=c*f;e[0]=h-b*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=b-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*f,_=o*u,b=o*f;e[0]=l*u,e[4]=_*c-p,e[8]=h*c+b,e[1]=l*f,e[5]=b*c+h,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,_=o*l,b=o*c;e[0]=l*u,e[4]=b-h*f,e[8]=_*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+_,e[10]=h-b*f}else if(t.order==="XZY"){let h=a*l,p=a*c,_=o*l,b=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+b,e[5]=a*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*u,e[10]=b*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Dd)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),_i.crossVectors(n,yn),_i.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),_i.crossVectors(n,yn)),_i.normalize(),ha.crossVectors(yn,_i),s[0]=_i.x,s[4]=ha.x,s[8]=yn.x,s[1]=_i.y,s[5]=ha.y,s[9]=yn.y,s[2]=_i.z,s[6]=ha.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],b=n[6],d=n[10],m=n[14],y=n[3],w=n[7],M=n[11],C=n[15],E=s[0],g=s[4],S=s[8],F=s[12],A=s[1],I=s[5],B=s[9],j=s[13],L=s[2],G=s[6],q=s[10],Z=s[14],at=s[3],rt=s[7],ht=s[11],dt=s[15];return r[0]=a*E+o*A+l*L+c*at,r[4]=a*g+o*I+l*G+c*rt,r[8]=a*S+o*B+l*q+c*ht,r[12]=a*F+o*j+l*Z+c*dt,r[1]=u*E+f*A+h*L+p*at,r[5]=u*g+f*I+h*G+p*rt,r[9]=u*S+f*B+h*q+p*ht,r[13]=u*F+f*j+h*Z+p*dt,r[2]=_*E+b*A+d*L+m*at,r[6]=_*g+b*I+d*G+m*rt,r[10]=_*S+b*B+d*q+m*ht,r[14]=_*F+b*j+d*Z+m*dt,r[3]=y*E+w*A+M*L+C*at,r[7]=y*g+w*I+M*G+C*rt,r[11]=y*S+w*B+M*q+C*ht,r[15]=y*F+w*j+M*Z+C*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],_=t[3],b=t[7],d=t[11],m=t[15],y=l*p-c*h,w=o*p-c*f,M=o*h-l*f,C=a*p-c*u,E=a*h-l*u,g=a*f-o*u;return e*(b*y-d*w+m*M)-n*(_*y-d*C+m*E)+s*(_*w-b*C+m*g)-r*(_*M-b*E+d*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],_=t[12],b=t[13],d=t[14],m=t[15],y=e*o-n*a,w=e*l-s*a,M=e*c-r*a,C=n*l-s*o,E=n*c-r*o,g=s*c-r*l,S=u*b-f*_,F=u*d-h*_,A=u*m-p*_,I=f*d-h*b,B=f*m-p*b,j=h*m-p*d,L=y*j-w*B+M*I+C*A-E*F+g*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/L;return t[0]=(o*j-l*B+c*I)*G,t[1]=(s*B-n*j-r*I)*G,t[2]=(b*g-d*E+m*C)*G,t[3]=(h*E-f*g-p*C)*G,t[4]=(l*A-a*j-c*F)*G,t[5]=(e*j-s*A+r*F)*G,t[6]=(d*M-_*g-m*w)*G,t[7]=(u*g-h*M+p*w)*G,t[8]=(a*B-o*A+c*S)*G,t[9]=(n*A-e*B-r*S)*G,t[10]=(_*E-b*M+m*y)*G,t[11]=(f*M-u*E-p*y)*G,t[12]=(o*F-a*I-l*S)*G,t[13]=(e*I-n*F+s*S)*G,t[14]=(b*w-_*C-d*y)*G,t[15]=(u*C-f*w+h*y)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,_=r*f,b=a*u,d=a*f,m=o*f,y=l*c,w=l*u,M=l*f,C=n.x,E=n.y,g=n.z;return s[0]=(1-(b+m))*C,s[1]=(p+M)*C,s[2]=(_-w)*C,s[3]=0,s[4]=(p-M)*E,s[5]=(1-(h+m))*E,s[6]=(d+y)*E,s[7]=0,s[8]=(_+w)*g,s[9]=(d-y)*g,s[10]=(1-(h+b))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=us.set(s[0],s[1],s[2]).length(),o=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,u=1/o,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,e.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),_,b;if(l)_=r/(a-r),b=a*r/(a-r);else if(o===Pn)_=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Es)_=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),_,b;if(l)_=1/(a-r),b=a/(a-r);else if(o===Pn)_=-2/(a-r),b=-(a+r)/(a-r);else if(o===Es)_=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new N,On=new Se,Ld=new N(0,0,0),Dd=new N(1,1,1),_i=new N,ha=new N,yn=new N,Kc=new Se,Jc=new tn,si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Rs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nd=0,$c=new N,ds=new tn,$n=new Se,ua=new N,Qs=new N,Ud=new N,Fd=new tn,jc=new N(1,0,0),Qc=new N(0,1,0),th=new N(0,0,1),eh={type:"added"},Od={type:"removed"},fs={type:"childadded",child:null},bl={type:"childremoved",child:null},He=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new si,n=new tn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new de}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Qs,ua,this.up):$n.lookAt(ua,Qs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ds.setFromRotationMatrix($n),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),fs.child=t,this.dispatchEvent(fs),fs.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new N(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let d=e.getJointPose(b,n),m=this._getHandJoint(c,b);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},da={h:0,s:0,l:0};function wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=Mc(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wl(a,r,t+1/3),this.g=wl(a,r,t),this.b=wl(a,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return ve.workingToColorSpace(cn.copy(this),t),Math.round(me(cn.r*255,0,255))*65536+Math.round(me(cn.g*255,0,255))*256+Math.round(me(cn.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=nn){ve.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(da);let n=or(xi.h,da.h,e),s=or(xi.s,da.s,e),r=or(xi.l,da.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new ee;ee.NAMES=uu;var mr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var bi=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new N,jn=new N,Tl=new N,Qn=new N,ps=new N,ms=new N,nh=new N,El=new N,Al=new N,Cl=new N,Rl=new Le,Pl=new Le,Il=new Le,Si=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),jn.subVectors(n,e),Tl.subVectors(t,e);let a=Bn.dot(Bn),o=Bn.dot(jn),l=Bn.dot(Tl),c=jn.dot(jn),u=jn.dot(Tl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Rl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Rl.fromBufferAttribute(t,e),Pl.fromBufferAttribute(t,n),Il.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Pl,r.y),a.addScaledVector(Il,r.z),a}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),jn.subVectors(t,e),Bn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Bn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,n),ms.subVectors(r,n),El.subVectors(t,n);let l=ps.dot(El),c=ms.dot(El);if(l<=0&&c<=0)return e.copy(n);Al.subVectors(t,s);let u=ps.dot(Al),f=ms.dot(Al);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(ps,a);Cl.subVectors(t,r);let p=ps.dot(Cl),_=ms.dot(Cl);if(_>=0&&p<=_)return e.copy(r);let b=p*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ms,o);let d=u*_-p*f;if(d<=0&&f-u>=0&&p-_>=0)return nh.subVectors(r,s),o=(f-u)/(f-u+(p-_)),e.copy(s).addScaledVector(nh,o);let m=1/(d+b+h);return a=b*m,o=h*m,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),pa.subVectors(this.max,tr),gs.subVectors(t.a,tr),_s.subVectors(t.b,tr),xs.subVectors(t.c,tr),vi.subVectors(_s,gs),yi.subVectors(xs,_s),zi.subVectors(gs,xs);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-zi.z,zi.y,vi.z,0,-vi.x,yi.z,0,-yi.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-zi.y,zi.x,0];return!Ll(e,gs,_s,xs,pa)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,gs,_s,xs,pa))?!1:(ma.crossVectors(vi,yi),e=[ma.x,ma.y,ma.z],Ll(e,gs,_s,xs,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,fa=new qn,gs=new N,_s=new N,xs=new N,vi=new N,yi=new N,zi=new N,tr=new N,pa=new N,ma=new N,Gi=new N;function Ll(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gi.fromArray(i,r);let o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ve=new N,ga=new xt,kd=0,Sn=class extends zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=t!==void 0?bc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):cu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):hu(t,this.array)}};var gr=class extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _r=class extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},zd=new qn,er=new N,Dl=new N,ri=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Dl)),this.expandByPoint(er.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gd=0,Rn=new Se,Nl=new He,vs=new N,Mn=new qn,nr=new qn,$e=new N,Be=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dd(t)?_r:gr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Mn.min,nr.min),Mn.expandByPoint($e),$e.addVectors(Mn.max,nr.max),Mn.expandByPoint($e)):(Mn.expandByPoint(nr.min),Mn.expandByPoint(nr.max))}Mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$e.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(t,c),$e.add(vs)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new N,l[F]=new N;let u=new N,f=new N,h=new N,p=new xt,_=new xt,b=new xt,d=new N,m=new N;function y(F,A,I){c[F]=c[A]=c[I]=1,u.fromBufferAttribute(n,F),f.fromBufferAttribute(n,A),h.fromBufferAttribute(n,I),p.fromBufferAttribute(r,F),_.fromBufferAttribute(r,A),b.fromBufferAttribute(r,I),f.sub(u),h.sub(u),_.sub(p),b.sub(p);let B=1/(_.x*b.y-b.x*_.y);isFinite(B)&&(d.copy(f).multiplyScalar(b.y).addScaledVector(h,-_.y).multiplyScalar(B),m.copy(h).multiplyScalar(_.x).addScaledVector(f,-b.x).multiplyScalar(B),o[F].add(d),o[A].add(d),o[I].add(d),l[F].add(m),l[A].add(m),l[I].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,A=w.length;F<A;++F){let I=w[F],B=I.start,j=I.count;for(let L=B,G=B+j;L<G;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let M=new N,C=new N,E=new N,g=new N;function S(F){E.fromBufferAttribute(s,F),g.copy(E);let A=o[F];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),C.crossVectors(g,A);let B=C.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,B)}for(let F=0,A=n.count;F<A;++F)c[F]&&S(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),b=t.getX(h+1),d=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,d),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let b=0,d=l.length;b<d;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let m=0;m<u;m++)h[_++]=c[p++]}return new Sn(h,u,f)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ul=new N,Vd=new N,Hd=new de,fn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ul.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ul),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(Ul).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wd=0,ai=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Gs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ei=new N,Fl=new N,_a=new N,xa=new N,wi=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fl.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),xa.copy(this.origin).sub(Fl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_a),o=xa.dot(this.direction),l=-xa.dot(_a),c=xa.lengthSq(),u=Math.abs(1-a*a),f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let b=1/u;f*=b,h*=b,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fl).addScaledVector(_a,h),p}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,p=t.z-a.z,_=e.x-a.x,b=e.y-a.y,d=e.z-a.z,m=n.x-a.x,y=n.y-a.y,w=n.z-a.z,M=Math.abs(l),C=Math.abs(c),E=Math.abs(u),g,S,F,A,I,B,j,L,G,q,Z,at;if(M>=C&&M>=E?(F=l,B=f,G=_,at=m,l>=0?(g=c,S=u,A=h,I=p,j=b,L=d,q=y,Z=w):(g=u,S=c,A=p,I=h,j=d,L=b,q=w,Z=y)):C>=E?(F=c,B=h,G=b,at=y,c>=0?(g=u,S=l,A=p,I=f,j=d,L=_,q=w,Z=m):(g=l,S=u,A=f,I=p,j=_,L=d,q=m,Z=w)):(F=u,B=p,G=d,at=w,u>=0?(g=l,S=c,A=f,I=h,j=_,L=b,q=m,Z=y):(g=c,S=l,A=h,I=f,j=b,L=_,q=y,Z=m)),F===0)return null;let rt=g/F,ht=S/F,dt=1/F,nt=A-rt*B,ot=I-ht*B,X=j-rt*G,gt=L-ht*G,yt=q-rt*at,Bt=Z-ht*at,_t=yt*gt-Bt*X,Nt=nt*Bt-ot*yt,fe=X*ot-gt*nt;if(s){if(_t<0||Nt<0||fe<0)return null}else if((_t<0||Nt<0||fe<0)&&(_t>0||Nt>0||fe>0))return null;let Xt=_t+Nt+fe;if(Xt===0)return null;let qt=dt*(_t*B+Nt*G+fe*at);return(Xt>0?qt<0:qt>0)?null:this.at(qt/Xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ih=new Se,Vi=new wi,va=new ri,sh=new N,ya=new N,Ma=new N,Sa=new N,Ol=new N,ba=new N,rh=new N,wa=new N,ie=class extends He{constructor(t=new Be,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Ol.fromBufferAttribute(f,t),a?ba.addScaledVector(Ol,u):ba.addScaledVector(Ol.sub(e),u))}e.add(ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(va.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(va,sh)===null||Vi.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=h.length;_<b;_++){let d=h[_],m=a[d.materialIndex],y=Math.max(d.start,p.start),w=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let M=y,C=w;M<C;M+=3){let E=o.getX(M),g=o.getX(M+1),S=o.getX(M+2);s=Ta(this,m,t,n,c,u,f,E,g,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let d=_,m=b;d<m;d+=3){let y=o.getX(d),w=o.getX(d+1),M=o.getX(d+2);s=Ta(this,a,t,n,c,u,f,y,w,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=h.length;_<b;_++){let d=h[_],m=a[d.materialIndex],y=Math.max(d.start,p.start),w=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let M=y,C=w;M<C;M+=3){let E=M,g=M+1,S=M+2;s=Ta(this,m,t,n,c,u,f,E,g,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let d=_,m=b;d<m;d+=3){let y=d,w=d+1,M=d+2;s=Ta(this,a,t,n,c,u,f,y,w,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Xd(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ni,o),l===null)return null;wa.copy(o),wa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wa);return c<e.near||c>e.far?null:{distance:c,point:wa.clone(),object:i}}function Ta(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ya),i.getVertexPosition(l,Ma),i.getVertexPosition(c,Sa);let u=Xd(i,t,e,n,ya,Ma,Sa,rh);if(u){let f=new N;Si.getBarycoord(rh,ya,Ma,Sa,f),s&&(u.uv=Si.getInterpolatedAttribute(s,o,l,c,f,new xt)),r&&(u.uv1=Si.getInterpolatedAttribute(r,o,l,c,f,new xt)),a&&(u.normal=Si.getInterpolatedAttribute(a,o,l,c,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new N,materialIndex:0};Si.getNormal(ya,Ma,Sa,h.normal),u.face=h,u.barycoord=f}return u}var xr=class extends mn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Qe,u=Qe,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends Sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new Se,ah=new Se,Ea=[],oh=new qn,qd=new Se,ir=new ie,sr=new ri,oi=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),oh.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(oh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),sr.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),ah.multiplyMatrices(n,ys),ir.matrixWorld=ah,ir.raycast(t,Ea);for(let a=0,o=Ea.length;a<o;a++){let l=Ea[a];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(s*this.count),s,this.count,So,Nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new ri,Yd=new xt(.5,.5),Aa=new N,Ti=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],b=r[9],d=r[10],m=r[11],y=r[12],w=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,m-_,C-y).normalize(),s[1].setComponents(c+a,p+u,m+_,C+y).normalize(),s[2].setComponents(c+o,p+f,m+b,C+w).normalize(),s[3].setComponents(c-o,p-f,m-b,C-w).normalize(),n)s[4].setComponents(l,h,d,M).normalize(),s[5].setComponents(c-l,p-h,m-d,C-M).normalize();else if(s[4].setComponents(c-l,p-h,m-d,C-M).normalize(),e===Pn)s[5].setComponents(c+l,p+h,m+d,C+M).normalize();else if(e===Es)s[5].setComponents(l,h,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=Yd.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Aa.x=s.normal.x>0?t.max.x:t.min.x,Aa.y=s.normal.y>0?t.max.y:t.min.y,Aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lh=new Se,Ka=class i{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];lh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(lh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ti),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Is=class extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ch=new Se,ql=new wi,Ca=new ri,Ra=new N,yr=class extends He{constructor(t=new Be,e=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;ch.copy(s).invert(),ql.copy(t.ray).applyMatrix4(ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,b=p;_<b;_++){let d=c.getX(_);Ra.fromBufferAttribute(f,d),hh(Ra,d,l,s,t,e,this)}}else{let h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,b=p;_<b;_++)Ra.fromBufferAttribute(f,_),hh(Ra,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hh(i,t,e,n,s,r,a){let o=ql.distanceSqToPoint(i);if(o<e){let l=new N;ql.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Mr=class extends mn{constructor(t=[],e=is,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yi=class extends mn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends mn{constructor(t,e,n=Gn,s,r,a,o=Qe,l=Qe,c,u=ii,f=1){if(u!==ii&&u!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Sr=class extends li{constructor(t,e=Gn,n=is,s,r,a=Qe,o=Qe,l,c=ii){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},br=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},We=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function _(b,d,m,y,w,M,C,E,g,S,F){let A=M/g,I=C/S,B=M/2,j=C/2,L=E/2,G=g+1,q=S+1,Z=0,at=0,rt=new N;for(let ht=0;ht<q;ht++){let dt=ht*I-j;for(let nt=0;nt<G;nt++){let ot=nt*A-B;rt[b]=ot*y,rt[d]=dt*w,rt[m]=L,c.push(rt.x,rt.y,rt.z),rt[b]=0,rt[d]=0,rt[m]=E>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(nt/g),f.push(1-ht/S),Z+=1}}for(let ht=0;ht<S;ht++)for(let dt=0;dt<g;dt++){let nt=h+dt+G*ht,ot=h+dt+G*(ht+1),X=h+(dt+1)+G*(ht+1),gt=h+(dt+1)+G*ht;l.push(nt,ot,gt),l.push(ot,X,gt),at+=6}o.addGroup(p,at,F),p+=at,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wr=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new N,u=new xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Dn=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],p=[],_=0,b=[],d=n/2,m=0;y(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(p,2));function y(){let M=new N,C=new N,E=0,g=(e-t)/n;for(let S=0;S<=r;S++){let F=[],A=S/r,I=A*(e-t)+t;for(let B=0;B<=s;B++){let j=B/s,L=j*l+o,G=Math.sin(L),q=Math.cos(L);C.x=I*G,C.y=-A*n+d,C.z=I*q,f.push(C.x,C.y,C.z),M.set(G,g,q).normalize(),h.push(M.x,M.y,M.z),p.push(j,1-A),F.push(_++)}b.push(F)}for(let S=0;S<s;S++)for(let F=0;F<r;F++){let A=b[F][S],I=b[F+1][S],B=b[F+1][S+1],j=b[F][S+1];(t>0||F!==0)&&(u.push(A,I,j),E+=3),(e>0||F!==r-1)&&(u.push(I,B,j),E+=3)}c.addGroup(m,E,0),m+=E}function w(M){let C=_,E=new xt,g=new N,S=0,F=M===!0?t:e,A=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,d*A,0),h.push(0,A,0),p.push(.5,.5),_++;let I=_;for(let B=0;B<=s;B++){let L=B/s*l+o,G=Math.cos(L),q=Math.sin(L);g.x=F*q,g.y=d*A,g.z=F*G,f.push(g.x,g.y,g.z),h.push(0,A,0),E.x=G*.5+.5,E.y=q*.5*A+.5,p.push(E.x,E.y),_++}for(let B=0;B<s;B++){let j=C+B,L=I+B;M===!0?u.push(L,L+1,j):u.push(L+1,L,j),S+=3}c.addGroup(m,S,M===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tr=class i extends Dn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ja=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let w=new N,M=new N,C=new N;for(let E=0;E<e.length;E+=3)p(e[E+0],w),p(e[E+1],M),p(e[E+2],C),l(w,M,C,y)}function l(y,w,M,C){let E=C+1,g=[];for(let S=0;S<=E;S++){g[S]=[];let F=y.clone().lerp(M,S/E),A=w.clone().lerp(M,S/E),I=E-S;for(let B=0;B<=I;B++)B===0&&S===E?g[S][B]=F:g[S][B]=F.clone().lerp(A,B/I)}for(let S=0;S<E;S++)for(let F=0;F<2*(E-S)-1;F++){let A=Math.floor(F/2);F%2===0?(h(g[S][A+1]),h(g[S+1][A]),h(g[S][A])):(h(g[S][A+1]),h(g[S+1][A+1]),h(g[S+1][A]))}}function c(y){let w=new N;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(y),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function u(){let y=new N;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let M=d(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;a.push(M,1-C)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){let w=a[y+0],M=a[y+2],C=a[y+4],E=Math.max(w,M,C),g=Math.min(w,M,C);E>.9&&g<.1&&(w<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function p(y,w){let M=y*3;w.x=t[M+0],w.y=t[M+1],w.z=t[M+2]}function _(){let y=new N,w=new N,M=new N,C=new N,E=new xt,g=new xt,S=new xt;for(let F=0,A=0;F<r.length;F+=9,A+=6){y.set(r[F+0],r[F+1],r[F+2]),w.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),E.set(a[A+0],a[A+1]),g.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),C.copy(y).add(w).add(M).divideScalar(3);let I=d(C);b(E,A+0,y,I),b(g,A+2,w,I),b(S,A+4,M,I)}}function b(y,w,M,C){C<0&&y.x===1&&(a[w]=y.x-1),M.x===0&&M.z===0&&(a[w]=C/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xt:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new Se;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(me(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(me(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ls=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends Ls{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var uh=new N,dh=new N,Bl=new wc,kl=new wc,zl=new wc,Zi=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(dh.subVectors(s[0],s[1]).add(s[0]),c=dh);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(uh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(h),p),d=Math.pow(h.distanceToSquared(u),p);b<1e-4&&(b=1),_<1e-4&&(_=b),d<1e-4&&(d=b),Bl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,b,d),kl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,b,d),zl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,b,d)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),kl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),zl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Bl.calc(l),kl.calc(l),zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Zd(i,t){let e=1-i;return e*e*t}function Kd(i,t){return 2*(1-i)*i*t}function Jd(i,t){return i*i*t}function lr(i,t,e,n){return Zd(i,t)+Kd(i,e)+Jd(i,n)}function $d(i,t){let e=1-i;return e*e*e*t}function jd(i,t){let e=1-i;return 3*e*e*i*t}function Qd(i,t){return 3*(1-i)*i*i*t}function tf(i,t){return i*i*i*t}function cr(i,t,e,n,s){return $d(i,t)+jd(i,e)+Qd(i,n)+tf(i,s)}var Er=class extends bn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,s.x,r.x,a.x,o.x),cr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends bn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,s.x,r.x,a.x,o.x),cr(t,s.y,r.y,a.y,o.y),cr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends bn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends bn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends bn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(lr(t,s.x,r.x,a.x),lr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends bn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(lr(t,s.x,r.x,a.x),lr(t,s.y,r.y,a.y),lr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(fh(o,l.x,c.x,u.x,f.x),fh(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},Yl=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Zi,CubicBezierCurve:Er,CubicBezierCurve3:ja,EllipseCurve:Ls,LineCurve:Ar,LineCurve3:Qa,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:to,SplineCurve:Rr}),eo=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Pr=class extends eo{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ar(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cr(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Er(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ls(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ds=class extends Pr{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Pr().fromJSON(s))}return this}};function ef(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=du(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=of(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){let p=i[h],_=i[h+1];p<o&&(o=p),_<l&&(l=_),p>u&&(u=p),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ir(r,a,e,o,l,c,0),a}function du(i,t,e,n,s){let r;if(s===xf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ph(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ph(a/n|0,i[a],i[a+1],r);return r&&Ns(r,r.next)&&(Dr(r),r=r.next),r}function Ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ns(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,a){if(!i)return;!a&&r&&df(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sf(i,n,s,r):nf(i)){t.push(l.i,i.i,c.i),Dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rf(Ki(i),t),Ir(i,t,e,n,s,r,2)):a===2&&af(i,t,e,n,s,r):Ir(Ki(i),t,e,n,s,r,1);break}}}function nf(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),p=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=p&&rr(s,o,r,l,a,c,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function sf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Oe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,p=Math.min(o,l,c),_=Math.min(u,f,h),b=Math.max(o,l,c),d=Math.max(u,f,h),m=Zl(p,_,t,e,n),y=Zl(b,d,t,e,n),w=i.prevZ,M=i.nextZ;for(;w&&w.z>=m&&M&&M.z<=y;){if(w.x>=p&&w.x<=b&&w.y>=_&&w.y<=d&&w!==s&&w!==a&&rr(o,u,l,f,c,h,w.x,w.y)&&Oe(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=p&&M.x<=b&&M.y>=_&&M.y<=d&&M!==s&&M!==a&&rr(o,u,l,f,c,h,M.x,M.y)&&Oe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=m;){if(w.x>=p&&w.x<=b&&w.y>=_&&w.y<=d&&w!==s&&w!==a&&rr(o,u,l,f,c,h,w.x,w.y)&&Oe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=y;){if(M.x>=p&&M.x<=b&&M.y>=_&&M.y<=d&&M!==s&&M!==a&&rr(o,u,l,f,c,h,M.x,M.y)&&Oe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function rf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ns(n,s)&&pu(n,e,e.next,s)&&Lr(n,s)&&Lr(s,n)&&(t.push(n.i,e.i,s.i),Dr(e),Dr(e.next),e=i=s),e=e.next}while(e!==i);return Ki(e)}function af(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mf(a,o)){let l=mu(a,o);a=Ki(a,a.next),l=Ki(l,l.next),Ir(a,t,e,n,s,r,0),Ir(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function of(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=du(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pf(c))}s.sort(lf);for(let r=0;r<s.length;r++)e=cf(s[r],e);return e}function lf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cf(i,t){let e=hf(i,t);if(!e)return t;let n=mu(e,i);return Ki(n,n.next),Ki(e,e.next)}function hf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ns(i,e))return e;do{if(Ns(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&fu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Lr(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&uf(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function uf(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function df(i,t,e,n){let s=i;do s.z===0&&(s.z=Zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ff(s)}function ff(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function rr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&fu(i,t,e,n,s,r,a,o)}function mf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gf(i,t)&&(Lr(i,t)&&Lr(t,i)&&_f(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||Ns(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ns(i,t){return i.x===t.x&&i.y===t.y}function pu(i,t,e,n){let s=Ia(Oe(i,t,e)),r=Ia(Oe(i,t,n)),a=Ia(Oe(e,n,i)),o=Ia(Oe(e,n,t));return!!(s!==r&&a!==o||s===0&&Pa(i,e,t)||r===0&&Pa(i,n,t)||a===0&&Pa(e,i,n)||o===0&&Pa(e,t,n))}function Pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ia(i){return i>0?1:i<0?-1:0}function gf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function _f(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mu(i,t){let e=Kl(i.i,i.x,i.y),n=Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ph(i,t,e,n){let s=Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Jl=class{static triangulate(t,e,n=2){return ef(t,e,n)}},Wi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];mh(t),gh(n,t);let a=t.length;e.forEach(mh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,gh(n,e[l]);let o=Jl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function mh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Nr=class i extends Be{constructor(t=new Ds([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:vf,w,M=!1,C,E,g,S;if(m){w=m.getSpacedPoints(u),M=!0,h=!1;let ct=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(u,ct),E=new N,g=new N,S=new N}h||(d=0,p=0,_=0,b=0);let F=o.extractPoints(c),A=F.shape,I=F.holes;if(!Wi.isClockWise(A)){A=A.reverse();for(let ct=0,pt=I.length;ct<pt;ct++){let Tt=I[ct];Wi.isClockWise(Tt)&&(I[ct]=Tt.reverse())}}function j(ct){let Tt=10000000000000001e-36,Ft=ct[0];for(let Pt=1;Pt<=ct.length;Pt++){let Gt=Pt%ct.length,kt=ct[Gt],jt=kt.x-Ft.x,ne=kt.y-Ft.y,se=jt*jt+ne*ne,H=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(Ft.x),Math.abs(Ft.y)),Zt=Tt*H*H;if(se<=Zt){ct.splice(Gt,1),Pt--;continue}Ft=kt}}j(A),I.forEach(j);let L=I.length,G=A;for(let ct=0;ct<L;ct++){let pt=I[ct];A=A.concat(pt)}function q(ct,pt,Tt){return pt||ce("ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(pt,Tt)}let Z=A.length;function at(ct,pt,Tt){let Ft,Pt,Gt,kt=ct.x-pt.x,jt=ct.y-pt.y,ne=Tt.x-ct.x,se=Tt.y-ct.y,H=kt*kt+jt*jt,Zt=kt*se-jt*ne;if(Math.abs(Zt)>Number.EPSILON){let re=Math.sqrt(H),he=Math.sqrt(ne*ne+se*se),It=pt.x-jt/re,_e=pt.y+kt/re,zt=Tt.x-se/he,Jt=Tt.y+ne/he,P=((zt-It)*se-(Jt-_e)*ne)/(kt*se-jt*ne);Ft=It+kt*P-ct.x,Pt=_e+jt*P-ct.y;let x=Ft*Ft+Pt*Pt;if(x<=2)return new xt(Ft,Pt);Gt=Math.sqrt(x/2)}else{let re=!1;kt>Number.EPSILON?ne>Number.EPSILON&&(re=!0):kt<-Number.EPSILON?ne<-Number.EPSILON&&(re=!0):Math.sign(jt)===Math.sign(se)&&(re=!0),re?(Ft=-jt,Pt=kt,Gt=Math.sqrt(H)):(Ft=kt,Pt=jt,Gt=Math.sqrt(H/2))}return new xt(Ft/Gt,Pt/Gt)}let rt=[];for(let ct=0,pt=G.length,Tt=pt-1,Ft=ct+1;ct<pt;ct++,Tt++,Ft++)Tt===pt&&(Tt=0),Ft===pt&&(Ft=0),rt[ct]=at(G[ct],G[Tt],G[Ft]);let ht=[],dt,nt=rt.concat();for(let ct=0,pt=L;ct<pt;ct++){let Tt=I[ct];dt=[];for(let Ft=0,Pt=Tt.length,Gt=Pt-1,kt=Ft+1;Ft<Pt;Ft++,Gt++,kt++)Gt===Pt&&(Gt=0),kt===Pt&&(kt=0),dt[Ft]=at(Tt[Ft],Tt[Gt],Tt[kt]);ht.push(dt),nt=nt.concat(dt)}let ot;if(d===0)ot=Wi.triangulateShape(G,I);else{let ct=[],pt=[];for(let Tt=0;Tt<d;Tt++){let Ft=Tt/d,Pt=p*Math.cos(Ft*Math.PI/2),Gt=_*Math.sin(Ft*Math.PI/2)+b;for(let kt=0,jt=G.length;kt<jt;kt++){let ne=q(G[kt],rt[kt],Gt);Nt(ne.x,ne.y,-Pt),Ft===0&&ct.push(ne)}for(let kt=0,jt=L;kt<jt;kt++){let ne=I[kt];dt=ht[kt];let se=[];for(let H=0,Zt=ne.length;H<Zt;H++){let re=q(ne[H],dt[H],Gt);Nt(re.x,re.y,-Pt),Ft===0&&se.push(re)}Ft===0&&pt.push(se)}}ot=Wi.triangulateShape(ct,pt)}let X=ot.length,gt=_+b;for(let ct=0;ct<Z;ct++){let pt=h?q(A[ct],nt[ct],gt):A[ct];M?(g.copy(C.normals[0]).multiplyScalar(pt.x),E.copy(C.binormals[0]).multiplyScalar(pt.y),S.copy(w[0]).add(g).add(E),Nt(S.x,S.y,S.z)):Nt(pt.x,pt.y,0)}for(let ct=1;ct<=u;ct++)for(let pt=0;pt<Z;pt++){let Tt=h?q(A[pt],nt[pt],gt):A[pt];M?(g.copy(C.normals[ct]).multiplyScalar(Tt.x),E.copy(C.binormals[ct]).multiplyScalar(Tt.y),S.copy(w[ct]).add(g).add(E),Nt(S.x,S.y,S.z)):Nt(Tt.x,Tt.y,f/u*ct)}for(let ct=d-1;ct>=0;ct--){let pt=ct/d,Tt=p*Math.cos(pt*Math.PI/2),Ft=_*Math.sin(pt*Math.PI/2)+b;for(let Pt=0,Gt=G.length;Pt<Gt;Pt++){let kt=q(G[Pt],rt[Pt],Ft);Nt(kt.x,kt.y,f+Tt)}for(let Pt=0,Gt=I.length;Pt<Gt;Pt++){let kt=I[Pt];dt=ht[Pt];for(let jt=0,ne=kt.length;jt<ne;jt++){let se=q(kt[jt],dt[jt],Ft);M?Nt(se.x,se.y+w[u-1].y,w[u-1].x+Tt):Nt(se.x,se.y,f+Tt)}}}yt(),Bt();function yt(){let ct=s.length/3;if(h){let pt=0,Tt=Z*pt;for(let Ft=0;Ft<X;Ft++){let Pt=ot[Ft];fe(Pt[2]+Tt,Pt[1]+Tt,Pt[0]+Tt)}pt=u+d*2,Tt=Z*pt;for(let Ft=0;Ft<X;Ft++){let Pt=ot[Ft];fe(Pt[0]+Tt,Pt[1]+Tt,Pt[2]+Tt)}}else{for(let pt=0;pt<X;pt++){let Tt=ot[pt];fe(Tt[2],Tt[1],Tt[0])}for(let pt=0;pt<X;pt++){let Tt=ot[pt];fe(Tt[0]+Z*u,Tt[1]+Z*u,Tt[2]+Z*u)}}n.addGroup(ct,s.length/3-ct,0)}function Bt(){let ct=s.length/3,pt=0;_t(G,pt),pt+=G.length;for(let Tt=0,Ft=I.length;Tt<Ft;Tt++){let Pt=I[Tt];_t(Pt,pt),pt+=Pt.length}n.addGroup(ct,s.length/3-ct,1)}function _t(ct,pt){let Tt=ct.length;for(;--Tt>=0;){let Ft=Tt,Pt=Tt-1;Pt<0&&(Pt=ct.length-1);for(let Gt=0,kt=u+d*2;Gt<kt;Gt++){let jt=Z*Gt,ne=Z*(Gt+1),se=pt+Ft+jt,H=pt+Pt+jt,Zt=pt+Pt+ne,re=pt+Ft+ne;Xt(se,H,Zt,re)}}}function Nt(ct,pt,Tt){l.push(ct),l.push(pt),l.push(Tt)}function fe(ct,pt,Tt){qt(ct),qt(pt),qt(Tt);let Ft=s.length/3,Pt=y.generateTopUV(n,s,Ft-3,Ft-2,Ft-1);le(Pt[0]),le(Pt[1]),le(Pt[2])}function Xt(ct,pt,Tt,Ft){qt(ct),qt(pt),qt(Ft),qt(pt),qt(Tt),qt(Ft);let Pt=s.length/3,Gt=y.generateSideWallUV(n,s,Pt-6,Pt-3,Pt-2,Pt-1);le(Gt[0]),le(Gt[1]),le(Gt[3]),le(Gt[1]),le(Gt[2]),le(Gt[3])}function qt(ct){s.push(l[ct*3+0]),s.push(l[ct*3+1]),s.push(l[ct*3+2])}function le(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yl[s.type]().fromJSON(s)),new i(n,t.options)}},vf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new xt(r,a),new xt(o,l),new xt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],p=t[s*3+1],_=t[s*3+2],b=t[r*3],d=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new xt(a,1-l),new xt(c,1-f),new xt(h,1-_),new xt(b,1-m)]:[new xt(o,1-l),new xt(u,1-f),new xt(p,1-_),new xt(d,1-m)]}};function yf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ur=class i extends Ja{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fr=class i extends Be{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,f=new N,h=new xt,p=new N,_=new N,b=new N,d=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:d=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-d,p.z=m*0,b.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:b.normalize(),l.push(b.x,b.y,b.z);break;default:d=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,p.x=m*1,p.y=-d,p.z=m*0,_.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),l.push(p.x,p.y,p.z),b.copy(_)}for(let y=0;y<=e;y++){let w=n+y*u*s,M=Math.sin(w),C=Math.cos(w);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*M,f.y=t[E].y,f.z=t[E].x*C,a.push(f.x,f.y,f.z),h.x=y/e,h.y=E/(t.length-1),o.push(h.x,h.y);let g=l[3*E+0]*M,S=l[3*E+1],F=l[3*E+0]*C;c.push(g,S,F)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){let M=w+y*t.length,C=M,E=M+t.length,g=M+t.length+1,S=M+1;r.push(C,E,S),r.push(g,S,E)}this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ne=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,p=[],_=[],b=[],d=[];for(let m=0;m<u;m++){let y=m*h-a;for(let w=0;w<c;w++){let M=w*f-r;_.push(M,-y,0),b.push(0,0,1),d.push(w/o),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let w=y+c*m,M=y+c*(m+1),C=y+1+c*(m+1),E=y+1+c*m;p.push(w,M,E),p.push(M,C,E)}this.setIndex(p),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(b,3)),this.setAttribute("uv",new ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ji=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new N,h=new N,p=[],_=[],b=[],d=[];for(let m=0;m<=n;m++){let y=[],w=m/n,M=a+w*o,C=t*Math.cos(M),E=Math.sqrt(t*t-C*C),g=0;m===0&&a===0?g=.5/e:m===n&&l===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){let F=S/e,A=s+F*r;f.x=-E*Math.cos(A),f.y=C,f.z=E*Math.sin(A),_.push(f.x,f.y,f.z),h.copy(f).normalize(),b.push(h.x,h.y,h.z),d.push(F+g,1-w),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let w=u[m][y+1],M=u[m][y],C=u[m+1][y],E=u[m+1][y+1];(m!==0||a>0)&&p.push(w,M,E),(m!==n-1||l<Math.PI)&&p.push(M,C,E)}this.setIndex(p),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(b,3)),this.setAttribute("uv",new ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ei=class i extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new N,p=new N,_=new N;for(let b=0;b<=n;b++){let d=a+b/n*o;for(let m=0;m<=s;m++){let y=m/s*r;p.x=(t+e*Math.cos(d))*Math.cos(y),p.y=(t+e*Math.cos(d))*Math.sin(y),p.z=e*Math.sin(d),c.push(p.x,p.y,p.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),f.push(m/s),f.push(b/n)}}for(let b=1;b<=n;b++)for(let d=1;d<=s;d++){let m=(s+1)*b+d-1,y=(s+1)*(b-1)+d-1,w=(s+1)*(b-1)+d,M=(s+1)*b+d;l.push(m,y,M),l.push(y,w,M)}this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function as(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(_h(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_h(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=as(i[e]);for(let s in n)t[s]=n[s]}return t}function _h(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var Tn={clone:as,merge:un},Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new de().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Us=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ee=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ai=class extends Ee{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var no=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},io=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function La(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},so=class extends Ci{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wl:r=t,o=2*e-n;break;case Xl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:a=t,l=2*n-e;break;case Xl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),b=_*_,d=b*_,m=-h*d+2*h*b-h*_,y=(1+h)*d+(-1.5-2*h)*b+(-.5+h)*_+1,w=(-1-p)*d+(1.5+p)*b+.5*_,M=p*d-p*b;for(let C=0;C!==o;++C)r[C]=m*a[u+C]+y*a[c+C]+w*a[l+C]+M*a[f+C];return r}},ro=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},ao=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},oo=class extends Ci{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-e)/(s-e),b=1-_;for(let d=0;d!==o;++d)r[d]=a[c+d]*b+a[l+d]*_;return r}let h=o*2,p=t-1;for(let _=0;_!==o;++_){let b=a[c+_],d=a[l+_],m=p*h+_*2,y=f[m],w=f[m+1],M=t*h+_*2,C=u[M],E=u[M+1],g=Tf(n,e,y,C,s);r[_]=gu(g,b,w,E,d)}return r}};function gu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Tf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=gu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=wf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ms(e,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ms(t.times,Array),values:Ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),La(t.settings)&&(n.settings={inTangents:Ms(t.settings.inTangents,Array),outTangents:Ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case hr:e=this.InterpolantFactoryMethodDiscrete;break;case Xa:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break;case Vl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;La(this.settings)&&(xh(this.settings.inTangents,t),xh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;La(this.settings)&&(vh(this.settings.inTangents,t),vh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&fd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ua,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,h=f-n,p=f+n;for(let _=0;_!==n;++_){let b=e[f+_];if(b!==e[h+_]||b!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,La(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function vh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Xa;var Ri=class extends wn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=hr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="color";var co=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="number";var ho=class extends Ci{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Or=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends wn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=hr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};uo.prototype.ValueTypeName="vector";var fo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_u=new fo,po=class{constructor(t){this.manager=t!==void 0?t:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};po.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i=class extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Fs=class extends $i{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gl=new Se,yh=new N,Mh=new N,Os=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Es||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Da=new N,Na=new tn,Wn=new N,Br=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Da,Na,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,Wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Da,Na,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new N,Sh=new xt,bh=new xt,sn=class extends Br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Sh,bh),e.subVectors(bh,Sh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$l=class extends Os{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=qi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ci=class extends $i{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $l}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},jl=class extends Os{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Ii=class extends $i{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ji=class extends Br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ql=class extends Os{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends $i{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Ql}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ss=-90,bs=1,Bs=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Ss,bs,t,e);s.layers=this.layers,this.add(s);let r=new sn(Ss,bs,t,e);r.layers=this.layers,this.add(r);let a=new sn(Ss,bs,t,e);a.layers=this.layers,this.add(a);let o=new sn(Ss,bs,t,e);o.layers=this.layers,this.add(o);let l=new sn(Ss,bs,t,e);l.layers=this.layers,this.add(l);let c=new sn(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=b,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},mo=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},zr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ef.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ef(){this._document.hidden===!1&&this.reset()}var Ec="\\[\\]\\.:\\/",Af=new RegExp("["+Ec+"]","g"),Ac="[^"+Ec+"]",Cf="[^"+Ec.replace("\\.","")+"]",Rf=/((?:WC+[\/:])*)/.source.replace("WC",Ac),Pf=/(WCOD+)?/.source.replace("WCOD",Cf),If=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),Lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),Df=new RegExp("^"+Rf+Pf+If+Lf+"$"),Nf=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Af,"")}static parseTrackName(t){let e=Df.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=tc;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k_=new Float32Array(1);var wh=new Se,Gr=class{constructor(t,e,n=0,s=1/0){this.ray=new wi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wh),this}intersectObject(t,e=!0,n=[]){return ec(t,this,n,e),n.sort(Th),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,n,e);return n.sort(Th),n}};function Th(i,t){return i.distance-t.distance}function ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ec(r[a],t,e,!0)}}var ks=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Vr=class extends zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Cc(i,t,e,n){let s=Uf(n);switch(e){case pc:return i*t;case So:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case Ui:return i*t*2/s.components*s.byteLength;case wo:return i*t*2/s.components*s.byteLength;case mc:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case Eo:case Co:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Io:case Do:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case ta:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case $o:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uf(i){switch(i){case gn:case hc:return{byteLength:1,components:1};case Hs:case uc:case Xe:return{byteLength:2,components:1};case yo:case Mo:return{byteLength:2,components:4};case Gn:case vo:case Nn:return{byteLength:4,components:1};case dc:case fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ku(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Of(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],b=f[p];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let b=f[p];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
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
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
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
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,op=`#define PI 3.141592653589793
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
} // validated`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
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
#endif`,Up=`uniform sampler2D dfgLUT;
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
}`,Fp=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
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
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform float backgroundBlurriness;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,jm=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define MATCAP
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
}`,n0=`#define MATCAP
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
}`,i0=`#define NORMAL
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
}`,s0=`#define NORMAL
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
}`,r0=`#define PHONG
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
}`,a0=`#define PHONG
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
}`,o0=`#define STANDARD
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
}`,l0=`#define STANDARD
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
}`,c0=`#define TOON
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
}`,h0=`#define TOON
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
}`,u0=`uniform float size;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 color;
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
}`,m0=`uniform float rotation;
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
}`,g0=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Bf,alphahash_pars_fragment:kf,alphamap_fragment:zf,alphamap_pars_fragment:Gf,alphatest_fragment:Vf,alphatest_pars_fragment:Hf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:qf,batching_vertex:Yf,begin_vertex:Zf,beginnormal_vertex:Kf,bsdfs:Jf,iridescence_fragment:$f,bumpmap_pars_fragment:jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:ep,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:ap,common:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Rp,envmap_vertex:vp,fog_vertex:yp,fog_pars_vertex:Mp,fog_fragment:Sp,fog_pars_fragment:bp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Ap,lights_pars_begin:Cp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Np,lights_physical_pars_fragment:Up,lights_fragment_begin:Fp,lights_fragment_maps:Op,lights_fragment_end:Bp,lightprobes_pars_fragment:kp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Hp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Kp,morphinstance_vertex:Jp,morphcolor_vertex:$p,morphnormal_vertex:jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:tm,normal_fragment_begin:em,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:ym,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:bm,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:Em,specularmap_fragment:Am,specularmap_pars_fragment:Cm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Pm,transmission_fragment:Im,transmission_pars_fragment:Lm,uv_pars_fragment:Dm,uv_pars_vertex:Nm,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:km,backgroundCube_frag:zm,cube_vert:Gm,cube_frag:Vm,depth_vert:Hm,depth_frag:Wm,distance_vert:Xm,distance_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Km,linedashed_frag:Jm,meshbasic_vert:$m,meshbasic_frag:jm,meshlambert_vert:Qm,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:u0,points_frag:d0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},Ht={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Kn={basic:{uniforms:un([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:un([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:un([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:un([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:un([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:un([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:un([Ht.points,Ht.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:un([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:un([Ht.common,Ht.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:un([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:un([Ht.sprite,Ht.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:un([Ht.common,Ht.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:un([Ht.lights,Ht.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Kn.physical={uniforms:un([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new de},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var il={r:0,b:0,g:0},_0=new Se,zu=new de;zu.set(-1,0,0,0,1,0,0,0,1);function x0(i,t,e,n,s,r){let a=new ee(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let M=y.backgroundBlurriness>0;w=t.get(w,M)}return w}function _(y){let w=!1,M=p(y);M===null?d(a,o):M&&M.isColor&&(d(M,1),w=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,w){let M=p(w);M&&M.isCubeTexture?(c===void 0&&(c=new ie(new We(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:as(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=ve.getTransfer(M.colorSpace)!==Ae,(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ie(new Ne(2,2),new ke({name:"BackgroundMaterial",uniforms:as(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ve.getTransfer(M.colorSpace)!==Ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,w){y.getRGB(il,Tc(i)),e.buffers.color.setClear(il.r,il.g,il.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,d(a,o)},render:_,addToRenderList:b,dispose:m}}function v0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,B,j,L,G){let q=!1,Z=f(I,L,j,B);r!==Z&&(r=Z,c(r.object)),q=p(I,L,j,G),q&&_(I,L,j,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(I,B,j,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,B,j,L){let G=L.wireframe===!0,q=n[B.id];q===void 0&&(q={},n[B.id]=q);let Z=I.isInstancedMesh===!0?I.id:0,at=q[Z];at===void 0&&(at={},q[Z]=at);let rt=at[j.id];rt===void 0&&(rt={},at[j.id]=rt);let ht=rt[G];return ht===void 0&&(ht=h(l()),rt[G]=ht),ht}function h(I){let B=[],j=[],L=[];for(let G=0;G<e;G++)B[G]=0,j[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,B,j,L){let G=r.attributes,q=B.attributes,Z=0,at=j.getAttributes();for(let rt in at)if(at[rt].location>=0){let dt=G[rt],nt=q[rt];if(nt===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),dt===void 0||dt.attribute!==nt||nt&&dt.data!==nt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==L}function _(I,B,j,L){let G={},q=B.attributes,Z=0,at=j.getAttributes();for(let rt in at)if(at[rt].location>=0){let dt=q[rt];dt===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor));let nt={};nt.attribute=dt,dt&&dt.data&&(nt.data=dt.data),G[rt]=nt,Z++}r.attributes=G,r.attributesNum=Z,r.index=L}function b(){let I=r.newAttributes;for(let B=0,j=I.length;B<j;B++)I[B]=0}function d(I){m(I,0)}function m(I,B){let j=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;j[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),G[I]!==B&&(i.vertexAttribDivisor(I,B),G[I]=B)}function y(){let I=r.newAttributes,B=r.enabledAttributes;for(let j=0,L=B.length;j<L;j++)B[j]!==I[j]&&(i.disableVertexAttribArray(j),B[j]=0)}function w(I,B,j,L,G,q,Z){Z===!0?i.vertexAttribIPointer(I,B,j,G,q):i.vertexAttribPointer(I,B,j,L,G,q)}function M(I,B,j,L){b();let G=L.attributes,q=j.getAttributes(),Z=B.defaultAttributeValues;for(let at in q){let rt=q[at];if(rt.location>=0){let ht=G[at];if(ht===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor)),ht!==void 0){let dt=ht.normalized,nt=ht.itemSize,ot=t.get(ht);if(ot===void 0)continue;let X=ot.buffer,gt=ot.type,yt=ot.bytesPerElement,Bt=gt===i.INT||gt===i.UNSIGNED_INT||ht.gpuType===vo;if(ht.isInterleavedBufferAttribute){let _t=ht.data,Nt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,fe=ht.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Xt=0;Xt<rt.locationSize;Xt++)m(rt.location+Xt,_t.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Xt=0;Xt<rt.locationSize;Xt++)d(rt.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Xt=0;Xt<rt.locationSize;Xt++)w(rt.location+Xt,nt/rt.locationSize,gt,dt,Nt*yt,(fe+nt/rt.locationSize*Xt)*yt,Bt)}else{if(ht.isInstancedBufferAttribute){for(let _t=0;_t<rt.locationSize;_t++)m(rt.location+_t,ht.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<rt.locationSize;_t++)d(rt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,X);for(let _t=0;_t<rt.locationSize;_t++)w(rt.location+_t,nt/rt.locationSize,gt,dt,nt*yt,nt/rt.locationSize*_t*yt,Bt)}}else if(Z!==void 0){let dt=Z[at];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(rt.location,dt);break;case 3:i.vertexAttrib3fv(rt.location,dt);break;case 4:i.vertexAttrib4fv(rt.location,dt);break;default:i.vertexAttrib1fv(rt.location,dt)}}}}y()}function C(){F();for(let I in n){let B=n[I];for(let j in B){let L=B[j];for(let G in L){let q=L[G];for(let Z in q)u(q[Z].object),delete q[Z];delete L[G]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let B=n[I.id];for(let j in B){let L=B[j];for(let G in L){let q=L[G];for(let Z in q)u(q[Z].object),delete q[Z];delete L[G]}}delete n[I.id]}function g(I){for(let B in n){let j=n[B];for(let L in j){let G=j[L];if(G[I.id]===void 0)continue;let q=G[I.id];for(let Z in q)u(q[Z].object),delete q[Z];delete G[I.id]}}}function S(I){for(let B in n){let j=n[B],L=I.isInstancedMesh===!0?I.id:0,G=j[L];if(G!==void 0){for(let q in G){let Z=G[q];for(let at in Z)u(Z[at].object),delete Z[at];delete G[q]}delete j[L],Object.keys(j).length===0&&delete n[B]}}}function F(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:d,disableUnusedAttributes:y}}function y0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function M0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Vn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===Xe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==gn&&g!==Nn&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:C,samples:E}}function S0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,b=f.clipIntersection,d=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!d)r?u(null):c();else{let y=r?0:n,w=y*4,M=m.clippingState||null;l.value=M,M=u(_,h,w,p);for(let C=0;C!==w;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,_){let b=f!==null?f.length:0,d=null;if(b!==0){if(d=l.value,_!==!0||d===null){let m=p+b*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<m)&&(d=new Float32Array(m));for(let w=0,M=p;w!==b;++w,M+=4)a.copy(f[w]).applyMatrix4(y,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,d}}var sa=class extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:hi});r.uniforms.tEquirect.value=e;let a=new ie(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=pn),new Bs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},xu=256,b0=3,w0=20,Gu=256,Vu=16,T0=3,E0=new N,A0=new ee,Xs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bs(1,10,null),this._boxMesh=new ie(new We(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=E0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(A0));let d=new Bs(n,s,u);return d.position.copy(o),d.update(l,t),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=_,t.background=b,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(xu,Sc(t))}_fromTexture(t,e){t.mapping===is||t.mapping===Vs?this._setSize(t.image.length===0?xu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=vu(t,!1,!1),n=Math.log2(t)-b0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===is||t.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=C0(),this._integrationMaterial=R0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Vu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-T0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Gu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=P0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function vu(i,t,e){return new sa(i,{minFilter:ui,generateMipmaps:t,type:Xe,colorSpace:ur,depthBuffer:e})}function ra(i,t,e){return new ke({name:i,uniforms:t,vertexShader:ye.cube_vert,fragmentShader:e,side:rn,blending:hi,depthTest:!1,depthWrite:!1})}function C0(){return ra("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gu}u

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
	`)}function R0(){return ra("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vu}},`

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
	`)}function P0(){return ra("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${w0}
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
	`)}function yu(){return ra("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Mu(){return ra("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function I0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===go||p===_o)if(t.has(h)){let _=t.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let b=new sa(_.height);return b.fromEquirectangularTexture(i,h),t.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,_=p===go||p===_o,b=p===is||p===Vs;if(_||b){let d=e.get(h),m=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Xs(i)),d=_?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),d.texture;if(d!==void 0)return d.texture;{let y=h.image;return _&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new Xs(i)),d=_?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),h.addEventListener("dispose",u),d.texture):null}}}return h}function o(h,p){return p===go?h.mapping=is:p===_o&&(h.mapping=Vs),h}function l(h){let p=0,_=6;for(let b=0;b<_;b++)h[b]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function L0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let d in _.attributes)t.remove(_.attributes[d]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let b=r.get(_);b&&(t.remove(b),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),e.memory.geometries++),b}function u(_){let b=_.attributes;for(let d in b)t.update(b[d],i.ARRAY_BUFFER)}function f(_){let b=_.index,d=_.attributes.position,m=0;if(d===void 0)return;let y=b!==null?b.array.length:d.array.length/3-1,w=d.count>=65535?_r:gr,M=new w(Math.ceil(y/3)*6,1),C=M.array;if(b!==null){let g=b.array;m=b.version;for(let S=0,F=0;S<y;S+=3){let A=g[S+0],I=g[S+1],B=g[S+2];C[F++]=A,C[F++]=I,C[F++]=I,C[F++]=B,C[F++]=B,C[F++]=A}}else{m=d.version;for(let g=0,S=0;g<y;g+=3){let F=g+0,A=g+1,I=g+2;C[S++]=F,C[S++]=A,C[S++]=A,C[S++]=I,C[S++]=I,C[S++]=F}}M.version=m;let E=r.get(_);E&&t.remove(E),r.set(_,M)}function h(_){let b=r.get(_);if(b){let d=_.index;d!==null&&b.version<d.version&&f(_)}else f(_);return r.get(_)}function p(){for(let _ in s){let b=s[_].deref();b!==void 0&&l(b)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function N0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let b=0;for(let d=0;d<p;d++)b+=h[d];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function U0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F0(i,t,e){let n=new WeakMap,s=new Le;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let F=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;p===!0&&(w=1),_===!0&&(w=2),b===!0&&(w=3);let M=o.attributes.position.count*w,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*C*4*f),g=new pr(E,M,C,f);g.type=Nn,g.needsUpdate=!0;let S=w*4;for(let A=0;A<f;A++){let I=d[A],B=m[A],j=y[A],L=M*C*4*A;for(let G=0;G<I.count;G++){let q=G*S;p===!0&&(s.fromBufferAttribute(I,G),E[L+q+0]=s.x,E[L+q+1]=s.y,E[L+q+2]=s.z,E[L+q+3]=0),_===!0&&(s.fromBufferAttribute(B,G),E[L+q+4]=s.x,E[L+q+5]=s.y,E[L+q+6]=s.z,E[L+q+7]=0),b===!0&&(s.fromBufferAttribute(j,G),E[L+q+8]=s.x,E[L+q+9]=s.y,E[L+q+10]=s.z,E[L+q+11]=j.itemSize===4?s.w:1)}}h={count:f,texture:g,size:new xt(M,C)},n.set(o,h),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function O0(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var B0={[Hr]:"LINEAR_TONE_MAPPING",[Wr]:"REINHARD_TONE_MAPPING",[Xr]:"CINEON_TONE_MAPPING",[ns]:"ACES_FILMIC_TONE_MAPPING",[Yr]:"AGX_TONE_MAPPING",[Zr]:"NEUTRAL_TONE_MAPPING",[qr]:"CUSTOM_TONE_MAPPING"};function k0(i,t,e,n,s,r){let a=new ze(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Be;u.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ge([0,2,0,0,2,0],2));let f=new Us({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ie(u,f),p=new ji(-1,1,1,-1,0,1),_=null,b=null,d=!1,m,y=null,w=[],M=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),l!==null&&l.setSize(C,E);for(let g=0;g<w.length;g++){let S=w[g];S.setSize&&S.setSize(C,E)}},this.setEffects=function(C){w=C,M=w.length>0&&w[0].isRenderPass===!0;let E=a.width,g=a.height;w.length>0&&o===null&&(o=new ze(E,g,{type:Xe,depthBuffer:!1,stencilBuffer:!1}),l=new ze(E,g,{type:Xe,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(F=>F.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new li(E,g),r===!0&&(c.format=di,c.type=ss)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let F=0;F<w.length;F++){let A=w[F];A.setSize&&A.setSize(E,g),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(C,E){if(d||C.toneMapping===Yn&&w.length===0)return!1;if(y=E,E!==null){let g=E.width,S=E.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return M===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=Yn,!0},this.hasRenderPass=function(){return M},this.end=function(C,E){C.toneMapping=m,d=!0;let g=a,S=o;for(let F=0;F<w.length;F++){let A=w[F];A.enabled!==!1&&(A.render(C,S,g,E),A.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(_!==C.outputColorSpace||b!==C.toneMapping){_=C.outputColorSpace,b=C.toneMapping,f.defines={},ve.getTransfer(_)===Ae&&(f.defines.SRGB_TRANSFER="");let F=B0[b];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(y),C.render(h,p),y=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var Hu=new mn,Wu=new li(1,1),Xu=new Sr(1),qu=new pr,Yu=new Za,Zu=new Mr,Su=[],bu=[],wu=new Float32Array(16),Tu=new Float32Array(9),Eu=new Float32Array(4);function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function al(i,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Eu.set(n),i.uniformMatrix2fv(this.addr,!1,Eu),Ye(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Ye(e,n)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;wu.set(n),i.uniformMatrix4fv(this.addr,!1,wu),Ye(e,n)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function ol(i){return i.version===0&&(i.compareFunction=xc,i.needsUpdate=!0),i}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ol(Wu):r=Hu,e.setTexture2D(t||r,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yu,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ol(Xu):r=Zu,e.setTextureCube(t||r,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function rg(i){switch(i){case 5126:return z0;case 35664:return G0;case 35665:return V0;case 35666:return H0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return K0;case 35669:case 35673:return J0;case 5125:return $0;case 36294:return j0;case 36295:return Q0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}function ag(i,t){i.uniform1fv(this.addr,t)}function og(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function lg(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function cg(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function hg(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ug(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dg(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fg(i,t){i.uniform1iv(this.addr,t)}function pg(i,t){i.uniform2iv(this.addr,t)}function mg(i,t){i.uniform3iv(this.addr,t)}function gg(i,t){i.uniform4iv(this.addr,t)}function _g(i,t){i.uniform1uiv(this.addr,t)}function xg(i,t){i.uniform2uiv(this.addr,t)}function vg(i,t){i.uniform3uiv(this.addr,t)}function yg(i,t){i.uniform4uiv(this.addr,t)}function Mg(i,t,e){let n=this.cache,s=t.length,r=al(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ol(Wu):a=Hu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Sg(i,t,e){let n=this.cache,s=t.length,r=al(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yu,r[a])}function bg(i,t,e){let n=this.cache,s=t.length,r=al(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ol(Xu):a=Zu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function wg(i,t,e){let n=this.cache,s=t.length,r=al(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qu,r[a])}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return vg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return wg}}var Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}},Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},Dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function Au(i,t){i.seq.push(t),i.map[t.id]=t}function Eg(i,t,e){let n=i.name,s=n.length;for(Rc.lastIndex=0;;){let r=Rc.exec(n),a=Rc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Au(e,c===void 0?new Ic(o,i,t):new Lc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Dc(o),Au(e,f)),e=f}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Eg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ag=37297,Cg=0;function Rg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ru=new de;function Pg(i){ve._getMatrix(Ru,ve.workingColorSpace,i);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Rg(i.getShaderSource(t),o)}else return r}function Ig(i,t){let e=Pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Lg={[Hr]:"Linear",[Wr]:"Reinhard",[Xr]:"Cineon",[ns]:"ACESFilmic",[Yr]:"AgX",[Zr]:"Neutral",[qr]:"Custom"};function Dg(i,t){let e=Lg[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new N;function Ng(){ve.getLuminanceCoefficients(sl);let i=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function Fg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ia(i){return i!==""}function Iu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Lu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(Bg,kg)}function kg(i,t){let e=ye[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Nc(e)}var zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(zg,Gg)}function Gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Vg={[Qi]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function Hg(i){return Vg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wg={[Vs]:"ENVMAP_MODE_REFRACTION"};function Xg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qg={[lc]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function Yg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qg[i.combine]||"ENVMAP_BLENDING_NONE"}function Zg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Hg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Xg(e),f=Yg(e),h=Ug(e),p=Fg(r),_=s.createProgram(),b,d,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),b.length>0&&(b+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(b=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?ye.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Ig("linearToOutputTexel",e.outputColorSpace),Ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),a=Nc(a),a=Iu(a,e),a=Lu(a,e),o=Nc(o),o=Iu(o,e),o=Lu(o,e),a=Du(a),o=Du(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,d=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=m+b+a,w=m+d+o,M=Cu(s,s.VERTEX_SHADER,y),C=Cu(s,s.FRAGMENT_SHADER,w);s.attachShader(_,M),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(M)||"",j=s.getShaderInfoLog(C)||"",L=I.trim(),G=B.trim(),q=j.trim(),Z=!0,at=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,C);else{let rt=Pu(s,M,"vertex"),ht=Pu(s,C,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+rt+`
`+ht)}else L!==""?oe("WebGLProgram: Program Info Log:",L):(G===""||q==="")&&(at=!1);at&&(A.diagnostics={runnable:Z,programLog:L,vertexShader:{log:G,prefix:b},fragmentShader:{log:q,prefix:d}})}s.deleteShader(M),s.deleteShader(C),g=new Ws(s,_),S=Og(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(_,Ag)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=C,this}var Kg=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=Kg++,this.code=t,this.usedTimes=0}};function Jg(i){return i===Ui||i===ta||i===ea}function $g(i,t,e,n,s,r){let a=new Rs,o=new Uc,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,F,A,I,B){let j=A.fog,L=I.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Z=t.get(g.envMap||G,q),at=h[g.type],rt=n.precision;g.precision!==null&&(rt=n.getMaxPrecision(g.precision),rt!==g.precision&&oe("WebGLProgram.getParameters:",g.precision,"not supported, using",rt,"instead."));let ht=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,dt=ht!==void 0?ht.length:0,nt=0;L.morphAttributes.position!==void 0&&(nt=1),L.morphAttributes.normal!==void 0&&(nt=2),L.morphAttributes.color!==void 0&&(nt=3);let ot,X,gt,yt;if(at){let Ot=Kn[at];ot=Ot.vertexShader,X=Ot.fragmentShader}else{ot=g.vertexShader,X=g.fragmentShader;let Ot=o.getVertexShaderStage(g),we=o.getFragmentShaderStage(g);o.update(g,Ot,we),gt=Ot.id,yt=we.id}let Bt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Nt=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,Xt=!!g.map,qt=!!g.matcap,le=!!Z,ct=le&&Z.isPMREMTexture===!0,pt=!!g.aoMap,Tt=!!g.lightMap,Ft=!!g.bumpMap&&g.wireframe===!1,Pt=!!g.normalMap,Gt=!!g.displacementMap,kt=!!g.emissiveMap,jt=!!g.metalnessMap,ne=!!g.roughnessMap,se=g.anisotropy>0,H=g.clearcoat>0,Zt=g.diffuseRoughness>0,re=g.dispersion>0,he=g.retroreflectivity>0,It=g.iridescence>0,_e=g.sheen>0,zt=g.transmission>0,Jt=se&&!!g.anisotropyMap,P=H&&!!g.clearcoatMap,x=H&&!!g.clearcoatNormalMap,D=H&&!!g.clearcoatRoughnessMap,Q=Zt&&!!g.diffuseRoughnessMap,W=It&&!!g.iridescenceMap,ut=It&&!!g.iridescenceThicknessMap,ft=_e&&!!g.sheenColorMap,Y=_e&&!!g.sheenRoughnessMap,et=!!g.specularMap,St=!!g.specularColorMap,O=!!g.specularIntensityMap,it=zt&&!!g.transmissionMap,st=zt&&!!g.thicknessMap,vt=!!g.gradientMap,bt=!!g.alphaMap,Lt=g.alphaTest>0,Kt=!!g.alphaHash,ae=!!g.extensions,Et=Yn;g.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Qt=ct?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,ue={shaderID:at,shaderType:g.type,shaderName:g.name,vertexShader:ot,fragmentShader:X,defines:g.defines,customVertexShaderID:gt,customFragmentShaderID:yt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:rt,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&I.instanceColor!==null,instancingMorph:Nt&&I.morphTexture!==null,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Xt,matcap:qt,envMap:le,envMapMode:le&&Z.mapping,envMapPMREM:ct,envMapMaxLod:ct?Qt.length-1:null,envMapSize:ct?Qt[0].width:null,aoMap:pt,lightMap:Tt,bumpMap:Ft,normalMap:Pt,displacementMap:Gt,emissiveMap:kt,normalMapObjectSpace:Pt&&g.normalMapType===$h,normalMapTangentSpace:Pt&&g.normalMapType===nl,packedNormalMap:Pt&&g.normalMapType===nl&&Jg(g.normalMap.format),metalnessMap:jt,roughnessMap:ne,anisotropy:se,anisotropyMap:Jt,clearcoat:H,clearcoatMap:P,clearcoatNormalMap:x,clearcoatRoughnessMap:D,diffuseRoughness:Zt,diffuseRoughnessMap:Q,dispersion:re,retroreflection:he,iridescence:It,iridescenceMap:W,iridescenceThicknessMap:ut,sheen:_e,sheenColorMap:ft,sheenRoughnessMap:Y,specularMap:et,specularColorMap:St,specularIntensityMap:O,transmission:zt,transmissionMap:it,thicknessMap:st,gradientMap:vt,opaque:g.transparent===!1&&g.blending===Gs&&g.alphaToCoverage===!1,alphaMap:bt,alphaTest:Lt,alphaHash:Kt,combine:g.combine,mapUv:Xt&&p(g.map.channel),aoMapUv:pt&&p(g.aoMap.channel),lightMapUv:Tt&&p(g.lightMap.channel),bumpMapUv:Ft&&p(g.bumpMap.channel),normalMapUv:Pt&&p(g.normalMap.channel),displacementMapUv:Gt&&p(g.displacementMap.channel),emissiveMapUv:kt&&p(g.emissiveMap.channel),metalnessMapUv:jt&&p(g.metalnessMap.channel),roughnessMapUv:ne&&p(g.roughnessMap.channel),anisotropyMapUv:Jt&&p(g.anisotropyMap.channel),clearcoatMapUv:P&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Q&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:W&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&p(g.sheenRoughnessMap.channel),specularMapUv:et&&p(g.specularMap.channel),specularColorMapUv:St&&p(g.specularColorMap.channel),specularIntensityMapUv:O&&p(g.specularIntensityMap.channel),transmissionMapUv:it&&p(g.transmissionMap.channel),thicknessMapUv:st&&p(g.thicknessMap.channel),alphaMapUv:bt&&p(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Pt||se),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Xt||bt),fog:!!j,useFog:g.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&Pt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_t,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:nt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.filter(Ot=>Ot.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Xt&&g.map.isVideoTexture===!0&&ve.getTransfer(g.map.colorSpace)===Ae,decodeVideoTextureEmissive:kt&&g.emissiveMap.isVideoTexture===!0&&ve.getTransfer(g.emissiveMap.colorSpace)===Ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===hn,flipSided:g.side===rn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ae&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&g.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function b(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let F in g.defines)S.push(F),S.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(d(S,g),m(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function d(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function m(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){let S=h[g.type],F;if(S){let A=Kn[S];F=Tn.clone(A.uniforms)}else F=g.uniforms;return F}function w(g,S){let F=u.get(S);return F!==void 0?++F.usedTimes:(F=new Zg(i,S,g,s),c.push(F),u.set(S,F)),F}function M(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function C(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:E}}function jg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Uu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,b,d,m){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:d,group:m},i[t]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=_,y.materialVariant=a(h),y.groupOrder=b,y.renderOrder=h.renderOrder,y.z=d,y.group=m),t++,y}function l(h,p,_,b,d,m,y){y.reversedDepth===!0&&(d=-d);let w=o(h,p,_,b,d,m);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):e.push(w)}function c(h,p,_,b,d,m){let y=o(h,p,_,b,d,m);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,p){e.length>1&&e.sort(h||Qg),n.length>1&&n.sort(p||Uu),s.length>1&&s.sort(p||Uu)}function f(){for(let h=t,p=i.length;h<p;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function t_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Fu,i.set(n,[a])):s>=r.length?(a=new Fu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new ee};break;case"SpotLight":e={position:new N,direction:new N,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){let t=new e_,e=n_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Se,a=new Se;function o(c){let u=0,f=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,_=0,b=0,d=0,m=0,y=0,w=0,M=0,C=0,E=0,g=0,S=0,F=0,A=0;c.sort(s_);for(let B=0,j=c.length;B<j;B++){let L=c[B],G=L.color,q=L.intensity,Z=L.distance,at=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ui?at=L.shadow.map.texture:at=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=G.r*q,f+=G.g*q,h+=G.b*q;else if(L.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(L.sh.coefficients[rt],q);A++}else if(L.isSunLight){let rt=t.get(L);if(rt.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ht=L.shadow,dt=e.get(L);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[_]=dt,n.sunShadowMap[_]=at;let nt=ht.getViewportCount();for(let ot=0;ot<nt;ot++)n.sunShadowMatrix[b+ot]=ht.getMatrix(ot),n.sunShadowCascade[b+ot]=ht._cascadeData[ot];b+=nt,_++}n.sun[p]=rt,p++}else if(L.isDirectionalLight){let rt=t.get(L);if(rt.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ht=L.shadow,dt=e.get(L);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,n.directionalShadow[d]=dt,n.directionalShadowMap[d]=at,n.directionalShadowMatrix[d]=L.shadow.matrix,C++}n.directional[d]=rt,d++}else if(L.isSpotLight){let rt=t.get(L);rt.position.setFromMatrixPosition(L.matrixWorld),rt.color.copy(G).multiplyScalar(q),rt.distance=Z,rt.coneCos=Math.cos(L.angle),rt.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),rt.decay=L.decay,n.spot[y]=rt;let ht=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,ht.updateMatrices(L),L.castShadow&&F++),n.spotLightMatrix[y]=ht.matrix,L.castShadow){let dt=e.get(L);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,n.spotShadow[y]=dt,n.spotShadowMap[y]=at,g++}y++}else if(L.isRectAreaLight){let rt=t.get(L);rt.color.copy(G).multiplyScalar(q),rt.halfWidth.set(L.width*.5,0,0),rt.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=rt,w++}else if(L.isPointLight){let rt=t.get(L);if(rt.color.copy(L.color).multiplyScalar(L.intensity),rt.distance=L.distance,rt.decay=L.decay,L.castShadow){let ht=L.shadow,dt=e.get(L);dt.shadowIntensity=ht.intensity,dt.shadowBias=ht.bias,dt.shadowNormalBias=ht.normalBias,dt.shadowRadius=ht.radius,dt.shadowMapSize=ht.mapSize,dt.shadowCameraNear=ht.camera.near,dt.shadowCameraFar=ht.camera.far,n.pointShadow[m]=dt,n.pointShadowMap[m]=at,n.pointShadowMatrix[m]=L.shadow.matrix,E++}n.point[m]=rt,m++}else if(L.isHemisphereLight){let rt=t.get(L);rt.skyColor.copy(L.color).multiplyScalar(q),rt.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[M]=rt,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==p||I.directionalLength!==d||I.pointLength!==m||I.spotLength!==y||I.rectAreaLength!==w||I.hemiLength!==M||I.numSunShadows!==_||I.numDirectionalShadows!==C||I.numPointShadows!==E||I.numSpotShadows!==g||I.numSpotMaps!==S||I.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=d,n.spot.length=y,n.rectArea.length=w,n.point.length=m,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-F,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=A,I.sunLength=p,I.directionalLength=d,I.pointLength=m,I.spotLength=y,I.rectAreaLength=w,I.hemiLength=M,I.numSunShadows=_,I.numDirectionalShadows=C,I.numPointShadows=E,I.numSpotShadows=g,I.numSpotMaps=S,I.numLightProbes=A,n.version=i_++)}function l(c,u){let f=0,h=0,p=0,_=0,b=0,d=0,m=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let M=c[y];if(M.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),f++}else if(M.isDirectionalLight){let C=n.directional[h];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),h++}else if(M.isSpotLight){let C=n.spot[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),_++}else if(M.isRectAreaLight){let C=n.rectArea[b];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let C=n.hemi[d];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),d++}}}return{setup:o,setupView:l,state:n}}function Ou(i){let t=new r_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function a_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ou(i),t.set(s,[o])):r>=a.length?(o=new Ou(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`,c_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],h_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Bu=new Se,na=new N,Pc=new N;function u_(i,t,e){let n=new Ti,s=new xt,r=new xt,a=new Le,o=new no,l=new io,c={},u=e.maxTextureSize,f={[Ni]:rn,[rn]:Ni,[hn]:hn},h=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:o_,fragmentShader:l_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Be;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ie(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qi;let m=this.type;this.render=function(E,g,S){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;this.type===Ch&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qi);let F=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(hi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let j=m!==this.type;j&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=E.length;L<G;L++){let q=E[L],Z=q.shadow;if(Z===void 0){oe("WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let at=Z.getFrameExtents();s.multiply(at),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,Z.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=rt,Z.map===null||j===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===zs){if(q.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new ze(s.x,s.y,{format:Ui,type:Xe,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Z.map.texture.name=q.name+".shadowMap",Z.map.depthTexture=new li(s.x,s.y,Nn),Z.map.depthTexture.name=q.name+".shadowMapDepth",Z.map.depthTexture.format=ii,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Qe,Z.map.depthTexture.magFilter=Qe}else q.isPointLight?(Z.map=new sa(s.x),Z.map.depthTexture=new Sr(s.x,Gn)):(Z.map=new ze(s.x,s.y),Z.map.depthTexture=new li(s.x,s.y,Gn)),Z.map.depthTexture.name=q.name+".shadowMap",Z.map.depthTexture.format=ii,this.type===Qi?(Z.map.depthTexture.compareFunction=rt?_c:gc,Z.map.depthTexture.minFilter=pn,Z.map.depthTexture.magFilter=pn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Qe,Z.map.depthTexture.magFilter=Qe);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let ht=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();q.isPointLight!==!0&&Z.updateMatrices(q,S);let dt=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:S.layers;for(let nt=0;nt<ht;nt++){let ot=Z.getCamera(nt);if(q.isPointLight){let X=Z.camera,gt=Z.matrix,yt=q.distance||X.far;yt!==X.far&&(X.far=yt,X.updateProjectionMatrix()),na.setFromMatrixPosition(q.matrixWorld),X.position.copy(na),Pc.copy(X.position),Pc.add(c_[nt]),X.up.copy(h_[nt]),X.lookAt(Pc),X.updateMatrixWorld(),gt.makeTranslation(-na.x,-na.y,-na.z),Bu.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Bu,X.coordinateSystem,X.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(Z.map),i.clear());let X=Z.getViewport(nt);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),B.viewport(a)}n=Z.getFrustum(nt),M(g,S,ot,q,dt,this.type)}Z.isPointLightShadow!==!0&&this.type===zs&&y(Z,S),Z.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(F,A,I)};function y(E,g){let S=t.update(b);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new ze(s.x,s.y,{format:Ui,type:Xe}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,S,h,b,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,S,p,b,null)}function w(E,g,S,F){let A=null,I=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)A=I;else if(A=S.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let B=A.uuid,j=g.uuid,L=c[B];L===void 0&&(L={},c[B]=L);let G=L[j];G===void 0&&(G=A.clone(),L[j]=G,g.addEventListener("dispose",C)),A=G}if(A.visible=g.visible,A.wireframe=g.wireframe,F===zs?A.side=g.shadowSide!==null?g.shadowSide:g.side:A.side=g.shadowSide!==null?g.shadowSide:f[g.side],A.alphaMap=g.alphaMap,A.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,A.map=g.map,A.clipShadows=g.clipShadows,A.clippingPlanes=g.clippingPlanes,A.clipIntersection=g.clipIntersection,A.displacementMap=g.displacementMap,A.displacementScale=g.displacementScale,A.displacementBias=g.displacementBias,A.wireframeLinewidth=g.wireframeLinewidth,A.linewidth=g.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=i.properties.get(A);B.light=S}return A}function M(E,g,S,F,A,I){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===zs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let L=t.update(E),G=E.material;if(Array.isArray(G)){let q=L.groups;for(let Z=0,at=q.length;Z<at;Z++){let rt=q[Z],ht=G[rt.materialIndex];if(ht&&ht.visible){let dt=w(E,ht,F,I);E.onBeforeShadow(i,E,g,S,L,dt,rt),i.renderBufferDirect(S,null,L,dt,E,rt),E.onAfterShadow(i,E,g,S,L,dt,rt)}}}else if(G.visible){let q=w(E,G,F,I);E.onBeforeShadow(i,E,g,S,L,q,null),i.renderBufferDirect(S,null,L,q,E,null),E.onAfterShadow(i,E,g,S,L,q,null)}}let j=E.children;for(let L=0,G=j.length;L<G;L++)M(j[L],g,S,F,A,I)}function C(E){E.target.removeEventListener("dispose",C);for(let S in c){let F=c[S],A=E.target.uuid;A in F&&(F[A].dispose(),delete F[A])}}}function d_(i,t){function e(){let O=!1,it=new Le,st=null,vt=new Le(0,0,0,0);return{setMask:function(bt){st!==bt&&!O&&(i.colorMask(bt,bt,bt,bt),st=bt)},setLocked:function(bt){O=bt},setClear:function(bt,Lt,Kt,ae,Et){Et===!0&&(bt*=ae,Lt*=ae,Kt*=ae),it.set(bt,Lt,Kt,ae),vt.equals(it)===!1&&(i.clearColor(bt,Lt,Kt,ae),vt.copy(it))},reset:function(){O=!1,st=null,vt.set(-1,0,0,0)}}}function n(){let O=!1,it=!1,st=null,vt=null,bt=null;return{setReversed:function(Lt){if(it!==Lt){let Kt=t.get("EXT_clip_control");Lt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),it=Lt;let ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return it},setTest:function(Lt){Lt?_t(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(Lt){st!==Lt&&!O&&(i.depthMask(Lt),st=Lt)},setFunc:function(Lt){if(it&&(Lt=lu[Lt]),vt!==Lt){switch(Lt){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Lt}},setLocked:function(Lt){O=Lt},setClear:function(Lt){bt!==Lt&&(bt=Lt,it&&(Lt=1-Lt),i.clearDepth(Lt))},reset:function(){O=!1,st=null,vt=null,bt=null,it=!1}}}function s(){let O=!1,it=null,st=null,vt=null,bt=null,Lt=null,Kt=null,ae=null,Et=null;return{setTest:function(Qt){O||(Qt?_t(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!O&&(i.stencilMask(Qt),it=Qt)},setFunc:function(Qt,ue,Ot){(st!==Qt||vt!==ue||bt!==Ot)&&(i.stencilFunc(Qt,ue,Ot),st=Qt,vt=ue,bt=Ot)},setOp:function(Qt,ue,Ot){(Lt!==Qt||Kt!==ue||ae!==Ot)&&(i.stencilOp(Qt,ue,Ot),Lt=Qt,Kt=ue,ae=Ot)},setLocked:function(Qt){O=Qt},setClear:function(Qt){Et!==Qt&&(i.clearStencil(Qt),Et=Qt)},reset:function(){O=!1,it=null,st=null,vt=null,bt=null,Lt=null,Kt=null,ae=null,Et=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},f={},h={},p=new WeakMap,_=[],b=null,d=!1,m=null,y=null,w=null,M=null,C=null,E=null,g=null,S=new ee(0,0,0),F=0,A=!1,I=null,B=null,j=null,L=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,at=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Z=at>=1):rt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Z=at>=2);let ht=null,dt={},nt=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),X=new Le().fromArray(nt),gt=new Le().fromArray(ot);function yt(O,it,st,vt){let bt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(O,Lt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<st;Kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(it+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Lt}let Bt={};Bt[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Ts),Ft(!1),Pt(ic),_t(i.CULL_FACE),pt(hi);function _t(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Nt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function fe(O,it){return h[O]!==it?(i.bindFramebuffer(O,it),h[O]=it,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Xt(O,it){let st=_,vt=!1;if(O){st=p.get(it),st===void 0&&(st=[],p.set(it,st));let bt=O.textures;if(st.length!==bt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,Kt=bt.length;Lt<Kt;Lt++)st[Lt]=i.COLOR_ATTACHMENT0+Lt;st.length=bt.length,vt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,vt=!0);vt&&i.drawBuffers(st)}function qt(O){return b!==O?(i.useProgram(O),b=O,!0):!1}let le={[es]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};le[Lh]=i.MIN,le[Dh]=i.MAX;let ct={[Nh]:i.ZERO,[Uh]:i.ONE,[Fh]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(O,it,st,vt,bt,Lt,Kt,ae,Et,Qt){if(O===hi){d===!0&&(Nt(i.BLEND),d=!1);return}if(d===!1&&(_t(i.BLEND),d=!0),O!==Rh){if(O!==m||Qt!==A){if((y!==es||C!==es)&&(i.blendEquation(i.FUNC_ADD),y=es,C=es),Qt)switch(O){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",O);break}w=null,M=null,E=null,g=null,S.set(0,0,0),F=0,m=O,A=Qt}return}bt=bt||it,Lt=Lt||st,Kt=Kt||vt,(it!==y||bt!==C)&&(i.blendEquationSeparate(le[it],le[bt]),y=it,C=bt),(st!==w||vt!==M||Lt!==E||Kt!==g)&&(i.blendFuncSeparate(ct[st],ct[vt],ct[Lt],ct[Kt]),w=st,M=vt,E=Lt,g=Kt),(ae.equals(S)===!1||Et!==F)&&(i.blendColor(ae.r,ae.g,ae.b,Et),S.copy(ae),F=Et),m=O,A=!1}function Tt(O,it){O.side===hn?Nt(i.CULL_FACE):_t(i.CULL_FACE);let st=O.side===rn;it&&(st=!st),Ft(st),O.blending===Gs&&O.transparent===!1?pt(hi):pt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let vt=O.stencilWrite;o.setTest(vt),vt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function Pt(O){O!==Eh?(_t(i.CULL_FACE),O!==B&&(O===ic?i.cullFace(i.BACK):O===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),B=O}function Gt(O){O!==j&&(Z&&i.lineWidth(O),j=O)}function kt(O,it,st){O?(_t(i.POLYGON_OFFSET_FILL),(L!==it||G!==st)&&(L=it,G=st,a.getReversed()&&(it=-it,st=-st),i.polygonOffset(it,st))):Nt(i.POLYGON_OFFSET_FILL)}function jt(O){O?_t(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function ne(O){O===void 0&&(O=i.TEXTURE0+q-1),ht!==O&&(i.activeTexture(O),ht=O)}function se(O,it,st){st===void 0&&(ht===null?st=i.TEXTURE0+q-1:st=ht);let vt=dt[st];vt===void 0&&(vt={type:void 0,texture:void 0},dt[st]=vt),(vt.type!==O||vt.texture!==it)&&(ht!==st&&(i.activeTexture(st),ht=st),i.bindTexture(O,it||Bt[O]),vt.type=O,vt.texture=it)}function H(){let O=dt[ht];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Zt(){try{i.compressedTexImage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function re(){try{i.compressedTexImage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function he(){try{i.texSubImage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function It(){try{i.texSubImage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function Jt(){try{i.texStorage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function P(){try{i.texStorage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function x(){try{i.texImage2D(...arguments)}catch(O){ce("WebGLState:",O)}}function D(){try{i.texImage3D(...arguments)}catch(O){ce("WebGLState:",O)}}function Q(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function W(O,it){f[O]!==it&&(i.pixelStorei(O,it),f[O]=it)}function ut(O){X.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),X.copy(O))}function ft(O){gt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),gt.copy(O))}function Y(O,it){let st=c.get(it);st===void 0&&(st=new WeakMap,c.set(it,st));let vt=st.get(O);vt===void 0&&(vt=i.getUniformBlockIndex(it,O.name),i.uniformBlockBinding(it,vt,vt),st.set(O,vt))}function et(O,it,st){let bt=c.get(it).get(O);l[bt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,bt,st),l[bt]=st)}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ht=null,dt={},h={},l={},p=new WeakMap,_=[],b=null,d=!1,m=null,y=null,w=null,M=null,C=null,E=null,g=null,S=new ee(0,0,0),F=0,A=!1,I=null,B=null,j=null,L=null,G=null,X.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Nt,bindFramebuffer:fe,drawBuffers:Xt,useProgram:qt,setBlending:pt,setMaterial:Tt,setFlipSided:Ft,setCullFace:Pt,setLineWidth:Gt,setPolygonOffset:kt,setScissorTest:jt,activeTexture:ne,bindTexture:se,unbindTexture:H,compressedTexImage2D:Zt,compressedTexImage3D:re,texImage2D:x,texImage3D:D,pixelStorei:W,getParameter:Q,updateUBOMapping:Y,uniformBlockBinding:et,texStorage2D:Jt,texStorage3D:P,texSubImage2D:he,texSubImage3D:It,compressedTexSubImage2D:_e,compressedTexSubImage3D:zt,scissor:ut,viewport:ft,reset:St}}function f_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap,f=new Set,h,p=new WeakMap,_=new Set,b=new FinalizationRegistry(P=>_.delete(P)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,x){return d?new OffscreenCanvas(P,x):fr("canvas")}function y(P,x,D){let Q=1,W=Jt(P);if((W.width>D||W.height>D)&&(Q=D/Math.max(W.width,W.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ut=Math.floor(Q*W.width),ft=Math.floor(Q*W.height);h===void 0&&(h=m(ut,ft));let Y=x?m(ut,ft):h;return Y.width=ut,Y.height=ft,Y.getContext("2d").drawImage(P,0,0,ut,ft),oe("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ut+"x"+ft+")."),Y}else return"data"in P&&oe("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),P;return P}function w(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(P,x,D,Q,W,ut=!1){if(P!==null){if(i[P]!==void 0)return i[P];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft;Q&&(ft=t.get("EXT_texture_norm16"),ft||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(D===i.FLOAT&&(Y=i.R32F),D===i.HALF_FLOAT&&(Y=i.R16F),D===i.UNSIGNED_BYTE&&(Y=i.R8),D===i.UNSIGNED_SHORT&&ft&&(Y=ft.R16_EXT),D===i.SHORT&&ft&&(Y=ft.R16_SNORM_EXT)),x===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.R8UI),D===i.UNSIGNED_SHORT&&(Y=i.R16UI),D===i.UNSIGNED_INT&&(Y=i.R32UI),D===i.BYTE&&(Y=i.R8I),D===i.SHORT&&(Y=i.R16I),D===i.INT&&(Y=i.R32I)),x===i.RG&&(D===i.FLOAT&&(Y=i.RG32F),D===i.HALF_FLOAT&&(Y=i.RG16F),D===i.UNSIGNED_BYTE&&(Y=i.RG8),D===i.UNSIGNED_SHORT&&ft&&(Y=ft.RG16_EXT),D===i.SHORT&&ft&&(Y=ft.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RG8UI),D===i.UNSIGNED_SHORT&&(Y=i.RG16UI),D===i.UNSIGNED_INT&&(Y=i.RG32UI),D===i.BYTE&&(Y=i.RG8I),D===i.SHORT&&(Y=i.RG16I),D===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),D===i.UNSIGNED_INT&&(Y=i.RGB32UI),D===i.BYTE&&(Y=i.RGB8I),D===i.SHORT&&(Y=i.RGB16I),D===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),D===i.UNSIGNED_INT&&(Y=i.RGBA32UI),D===i.BYTE&&(Y=i.RGBA8I),D===i.SHORT&&(Y=i.RGBA16I),D===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(D===i.UNSIGNED_SHORT&&ft&&(Y=ft.RGB16_EXT),D===i.SHORT&&ft&&(Y=ft.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let et=ut?dr:ve.getTransfer(W);D===i.FLOAT&&(Y=i.RGBA32F),D===i.HALF_FLOAT&&(Y=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Y=et===Ae?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&ft&&(Y=ft.RGBA16_EXT),D===i.SHORT&&ft&&(Y=ft.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(P,x){let D;return P?x===null||x===Gn||x===ss?D=i.DEPTH24_STENCIL8:x===Nn?D=i.DEPTH32F_STENCIL8:x===Hs&&(D=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===ss?D=i.DEPTH_COMPONENT24:x===Nn?D=i.DEPTH_COMPONENT32F:x===Hs&&(D=i.DEPTH_COMPONENT16),D}function S(P,x){return w(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qe&&P.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function F(P){let x=new WeakRef(P);n.get(P).__ref=x,_.add(x),b.register(P,x,x)}function A(P){let x=n.get(P).__ref;x!==void 0&&(_.delete(x),b.unregister(x))}function I(P){j(P.target)}function B(P){L(P.target)}function j(P){P.removeEventListener("dispose",I),A(P),q(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&f.delete(P)}function L(P){P.removeEventListener("dispose",B),A(P),at(P)}function G(){for(let P of _){let x=P.deref();x!==void 0&&(x.isRenderTarget===!0?L(x):j(x))}_.clear(),f.clear()}function q(P){let x=n.get(P);if(x.__webglInit===void 0)return;let D=P.source,Q=p.get(D);if(Q){let W=Q[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&Z(P),Object.keys(Q).length===0&&p.delete(D)}n.remove(P)}function Z(P){let x=n.get(P);i.deleteTexture(x.__webglTexture);let D=P.source,Q=p.get(D);delete Q[x.__cacheKey],a.memory.textures--}function at(P){let x=n.get(P);x.__depthDisposeCallback&&x.__depthDisposeCallback();let D=P.depthTexture;if(D&&D.renderTarget===P&&j(D),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let ut=0;ut<x.__webglFramebuffer[W].length;ut++)i.deleteFramebuffer(x.__webglFramebuffer[W][ut]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let Q=P.textures;for(let W=0,ut=Q.length;W<ut;W++){let ft=n.get(Q[W]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(Q[W])}n.remove(P)}let rt=0;function ht(){rt=0}function dt(){return rt}function nt(P){rt=P}function ot(){let P=rt;return P>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),rt+=1,P}function X(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.mipmapsAutoUpdate),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function gt(P,x){let D=n.get(P);if(P.isVideoTexture&&_e(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&D.__version!==P.version){let Q=P.image;if(Q===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(D,P,x);return}}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+x)}function yt(P,x){let D=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){Tt(D,P,x);return}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+x)}function Bt(P,x){let D=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){Tt(D,P,x);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+x)}function _t(P,x){let D=n.get(P);if(P.version>0&&D.__version!==P.version){Ft(D,P,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+x)}let Nt={[In]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},fe={[Qe]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},Xt={[Qh]:i.NEVER,[xc]:i.ALWAYS,[tu]:i.LESS,[gc]:i.LEQUAL,[eu]:i.EQUAL,[_c]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function qt(P,x){if(x.type===Nn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===xo||x.magFilter===Kr||x.magFilter===ui||x.minFilter===pn||x.minFilter===xo||x.minFilter===Kr||x.minFilter===ui)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Nt[x.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Nt[x.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Nt[x.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,fe[x.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qe||x.minFilter!==Kr&&x.minFilter!==ui||x.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function le(P,x){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",I),F(x));let Q=x.source,W=p.get(Q);W===void 0&&(W={},p.set(Q,W));let ut=X(x);if(ut!==P.__cacheKey){W[ut]===void 0&&(W[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),W[ut].usedTimes++;let ft=W[P.__cacheKey];ft!==void 0&&(W[P.__cacheKey].usedTimes--,ft.usedTimes===0&&Z(x)),P.__cacheKey=ut,P.__webglTexture=W[ut].texture}return D}function ct(P,x,D){return Math.floor(Math.floor(P/D)/x)}function pt(P,x,D,Q){let ut=P.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,D,Q,x.data);else{ut.sort((O,it)=>O.start-it.start);let ft=0;for(let O=1;O<ut.length;O++){let it=ut[ft],st=ut[O],vt=it.start+it.count,bt=ct(st.start,x.width,4),Lt=ct(it.start,x.width,4);st.start<=vt+1&&bt===Lt&&ct(st.start+st.count-1,x.width,4)===bt?it.count=Math.max(it.count,st.start+st.count-it.start):(++ft,ut[ft]=st)}ut.length=ft+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let O=0,it=ut.length;O<it;O++){let st=ut[O],vt=Math.floor(st.start/4),bt=Math.ceil(st.count/4),Lt=vt%x.width,Kt=Math.floor(vt/x.width),ae=bt,Et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Kt),e.texSubImage2D(i.TEXTURE_2D,0,Lt,Kt,ae,Et,D,Q,x.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function Tt(P,x,D){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let W=le(P,x),ut=x.source;e.bindTexture(Q,P.__webglTexture,i.TEXTURE0+D);let ft=n.get(ut);if(ut.version!==ft.__version||W===!0){if(e.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Et=ve.getPrimaries(ve.workingColorSpace),Qt=x.colorSpace===Hn?null:ve.getPrimaries(x.colorSpace),ue=x.colorSpace===Hn||Et===Qt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=y(x.image,!1,s.maxTextureSize);et=zt(x,et);let St=r.convert(x.format,x.colorSpace),O=r.convert(x.type),it=E(x.internalFormat,St,O,x.normalized,x.colorSpace,x.isVideoTexture);qt(Q,x);let st,vt=x.mipmaps,bt=x.isVideoTexture!==!0,Lt=ft.__version===void 0||W===!0,Kt=ut.dataReady,ae=S(x,et);if(x.isDepthTexture)it=g(x.format===di,x.type),Lt&&(bt?e.texStorage2D(i.TEXTURE_2D,1,it,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,it,et.width,et.height,0,St,O,null));else if(x.isDataTexture)if(vt.length>0){bt&&Lt&&e.texStorage2D(i.TEXTURE_2D,ae,it,vt[0].width,vt[0].height);for(let Et=0,Qt=vt.length;Et<Qt;Et++)st=vt[Et],bt?Kt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,St,O,st.data):e.texImage2D(i.TEXTURE_2D,Et,it,st.width,st.height,0,St,O,st.data);x.generateMipmaps=!1}else bt?(Lt&&e.texStorage2D(i.TEXTURE_2D,ae,it,et.width,et.height),Kt&&pt(x,et,St,O)):e.texImage2D(i.TEXTURE_2D,0,it,et.width,et.height,0,St,O,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){bt&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,it,vt[0].width,vt[0].height,et.depth);for(let Et=0,Qt=vt.length;Et<Qt;Et++)if(st=vt[Et],x.format!==Vn)if(St!==null)if(bt){if(Kt)if(x.layerUpdates.size>0){let ue=Cc(st.width,st.height,x.format,x.type);for(let Ot of x.layerUpdates){let we=st.data.subarray(Ot*ue/st.data.BYTES_PER_ELEMENT,(Ot+1)*ue/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,Ot,st.width,st.height,1,St,we)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,st.width,st.height,et.depth,St,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,it,st.width,st.height,et.depth,0,st.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?Kt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,st.width,st.height,et.depth,St,O,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,it,st.width,st.height,et.depth,0,St,O,st.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{bt&&Lt&&e.texStorage2D(i.TEXTURE_2D,ae,it,vt[0].width,vt[0].height);for(let Et=0,Qt=vt.length;Et<Qt;Et++)st=vt[Et],x.format!==Vn?St!==null?bt?Kt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,St,st.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,it,st.width,st.height,0,st.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?Kt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,St,O,st.data):e.texImage2D(i.TEXTURE_2D,Et,it,st.width,st.height,0,St,O,st.data)}else if(x.isDataArrayTexture)if(bt){if(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,it,et.width,et.height,et.depth),Kt)if(x.layerUpdates.size>0){let Et=Cc(et.width,et.height,x.format,x.type);for(let Qt of x.layerUpdates){let ue=et.data.subarray(Qt*Et/et.data.BYTES_PER_ELEMENT,(Qt+1)*Et/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Qt,et.width,et.height,1,St,O,ue)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,St,O,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,it,et.width,et.height,et.depth,0,St,O,et.data);else if(x.isData3DTexture)bt?(Lt&&e.texStorage3D(i.TEXTURE_3D,ae,it,et.width,et.height,et.depth),Kt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,St,O,et.data)):e.texImage3D(i.TEXTURE_3D,0,it,et.width,et.height,et.depth,0,St,O,et.data);else if(x.isFramebufferTexture){if(Lt)if(bt)e.texStorage2D(i.TEXTURE_2D,ae,it,et.width,et.height);else{let Et=et.width,Qt=et.height;for(let ue=0;ue<ae;ue++)e.texImage2D(i.TEXTURE_2D,ue,it,Et,Qt,0,St,O,null),Et>>=1,Qt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let Et=i.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),et.parentNode!==Et){Et.appendChild(et),f.add(x),Et.onpaint=Qt=>{let ue=Qt.changedElements;for(let Ot of f)ue.includes(Ot.image)&&(Ot.needsUpdate=!0)},Et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let ue=i.RGBA,Ot=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ue,Ot,we,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(vt.length>0){if(bt&&Lt){let Et=Jt(vt[0]);e.texStorage2D(i.TEXTURE_2D,ae,it,Et.width,Et.height)}for(let Et=0,Qt=vt.length;Et<Qt;Et++)st=vt[Et],bt?Kt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,St,O,st):e.texImage2D(i.TEXTURE_2D,Et,it,St,O,st);x.generateMipmaps=!1}else if(bt){if(Lt){let Et=Jt(et);e.texStorage2D(i.TEXTURE_2D,ae,it,Et.width,Et.height)}Kt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,O,et)}else e.texImage2D(i.TEXTURE_2D,0,it,St,O,et);w(x)&&x.mipmapsAutoUpdate===!0&&M(Q),ft.__version=ut.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Ft(P,x,D){if(x.image.length!==6)return;let Q=le(P,x),W=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+D);let ut=n.get(W);if(W.version!==ut.__version||Q===!0){e.activeTexture(i.TEXTURE0+D);let ft=ve.getPrimaries(ve.workingColorSpace),Y=x.colorSpace===Hn?null:ve.getPrimaries(x.colorSpace),et=x.colorSpace===Hn||ft===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let St=x.isCompressedTexture||x.image[0].isCompressedTexture,O=x.image[0]&&x.image[0].isDataTexture,it=[];for(let Ot=0;Ot<6;Ot++)!St&&!O?it[Ot]=y(x.image[Ot],!0,s.maxCubemapSize):it[Ot]=O?x.image[Ot].image:x.image[Ot],it[Ot]=zt(x,it[Ot]);let st=it[0],vt=r.convert(x.format,x.colorSpace),bt=r.convert(x.type),Lt=E(x.internalFormat,vt,bt,x.normalized,x.colorSpace),Kt=x.isVideoTexture!==!0,ae=ut.__version===void 0||Q===!0,Et=W.dataReady,Qt=S(x,st);qt(i.TEXTURE_CUBE_MAP,x);let ue;if(x.isDepthTexture){if(Lt=g(x.format===di,x.type),ae)if(Kt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Lt,st.width,st.height);else for(let Ot=0;Ot<6;Ot++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Lt,st.width,st.height,0,vt,bt,null)}else if(St){Kt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Qt,Lt,st.width,st.height);for(let Ot=0;Ot<6;Ot++){ue=it[Ot].mipmaps;for(let we=0;we<ue.length;we++){let Ce=ue[we];x.format!==Vn?vt!==null?Kt?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,we,0,0,Ce.width,Ce.height,vt,Ce.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,we,Lt,Ce.width,Ce.height,0,Ce.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,we,0,0,Ce.width,Ce.height,vt,bt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,we,Lt,Ce.width,Ce.height,0,vt,bt,Ce.data)}}}else{if(ue=x.mipmaps,Kt&&ae){ue.length>0&&Qt++;let Ot=Jt(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Qt,Lt,Ot.width,Ot.height)}for(let Ot=0;Ot<6;Ot++)if(O){Kt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,0,0,it[Ot].width,it[Ot].height,vt,bt,it[Ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Lt,it[Ot].width,it[Ot].height,0,vt,bt,it[Ot].data);for(let we=0;we<ue.length;we++){let Cn=ue[we].image[Ot].image;Kt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,we+1,0,0,Cn.width,Cn.height,vt,bt,Cn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,we+1,Lt,Cn.width,Cn.height,0,vt,bt,Cn.data)}}else{Kt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,0,0,vt,bt,it[Ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Lt,vt,bt,it[Ot]);for(let we=0;we<ue.length;we++){let Ce=ue[we];Kt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,we+1,0,0,vt,bt,Ce.image[Ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,we+1,Lt,vt,bt,Ce.image[Ot])}}}w(x)&&x.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ut.__version=W.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Pt(P,x,D,Q,W,ut){let ft=r.convert(D.format,D.colorSpace),Y=r.convert(D.type),et=E(D.internalFormat,ft,Y,D.normalized,D.colorSpace),St=n.get(x),O=n.get(D);if(O.__renderTarget=x,!St.__hasExternalTextures){let it=Math.max(1,x.width>>ut),st=Math.max(1,x.height>>ut);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,ut,et,it,st,x.depth,0,ft,Y,null):e.texImage2D(W,ut,et,it,st,0,ft,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),It(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,W,O.__webglTexture,0,he(x)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,W,O.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(P,x,D){if(i.bindRenderbuffer(i.RENDERBUFFER,P),x.depthBuffer){let Q=x.depthTexture,W=Q&&Q.isDepthTexture?Q.type:null,ut=g(x.stencilBuffer,W),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(x),ut,x.width,x.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(x),ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,P)}else{let Q=x.textures;for(let W=0;W<Q.length;W++){let ut=Q[W],ft=r.convert(ut.format,ut.colorSpace),Y=r.convert(ut.type),et=E(ut.internalFormat,ft,Y,ut.normalized,ut.colorSpace);It(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(x),et,x.width,x.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(P,x,D){let Q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(x.depthTexture);W.__renderTarget=x;let ut=Q?x.depthTexture.image[0]:x.depthTexture.image;(!W.__webglTexture||ut.width!==x.width||ut.height!==x.height)&&(ut.width=x.width,ut.height=x.height,x.depthTexture.needsUpdate=!0),Q?_t(x.depthTexture,0):gt(x.depthTexture,0);let ft=W.__webglTexture,Y=he(x),et=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,St=x.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ii)It(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,et,ft,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,St,et,ft,0);else if(x.depthTexture.format===di)It(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,et,ft,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,St,et,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(P){let x=n.get(P),D=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let Q=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){let W=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",W)};Q.addEventListener("dispose",W),x.__depthDisposeCallback=W}x.__boundDepthTexture=Q}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let Q=0;Q<6;Q++)kt(x.__webglFramebuffer[Q],P,Q);else P.texture.mipmaps.length>0?kt(x.__webglFramebuffer[0],P,0):kt(x.__webglFramebuffer,P,0);else if(D){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),Gt(x.__webglDepthbuffer[Q],P,!1);else{let W=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ut)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Gt(x.__webglDepthbuffer,P,!1);else{let W=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(P,x,D){let Q=n.get(P);x!==void 0&&Pt(Q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&jt(P)}function se(P){let x=P.texture,D=n.get(P),Q=n.get(x);P.addEventListener("dispose",B),F(P);let W=P.textures,ut=P.isWebGLCubeRenderTarget===!0,ft=W.length>1;if(ft||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,a.memory.textures++),ut){D.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){D.__webglFramebuffer[Y]=[];for(let et=0;et<x.mipmaps.length;et++)D.__webglFramebuffer[Y][et]=i.createFramebuffer()}else D.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps.length>0){D.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)D.__webglFramebuffer[Y]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Y=0,et=W.length;Y<et;Y++){let St=n.get(W[Y]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&It(P)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let et=W[Y];D.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[Y]);let St=r.convert(et.format,et.colorSpace),O=r.convert(et.type),it=E(et.internalFormat,St,O,et.normalized,et.colorSpace,P.isXRRenderTarget===!0),st=he(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,it,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,D.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(D.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),qt(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Pt(D.__webglFramebuffer[Y][et],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et);else Pt(D.__webglFramebuffer[Y],P,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);w(x)?M(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let Y=0,et=W.length;Y<et;Y++){let St=W[Y],O=n.get(St),it=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(it=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,O.__webglTexture),qt(it,St),Pt(D.__webglFramebuffer,P,St,i.COLOR_ATTACHMENT0+Y,it,0),w(St)&&M(it)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Y=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,Q.__webglTexture),qt(Y,x),x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)Pt(D.__webglFramebuffer[et],P,x,i.COLOR_ATTACHMENT0,Y,et);else Pt(D.__webglFramebuffer,P,x,i.COLOR_ATTACHMENT0,Y,0);w(x)?M(Y):x.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&jt(P)}function H(P){let x=P.textures;for(let D=0,Q=x.length;D<Q;D++){let W=x[D];if(w(W)&&W.mipmapsAutoUpdate===!0){let ut=C(P),ft=n.get(W).__webglTexture;e.bindTexture(ut,ft),M(ut),e.unbindTexture()}}}let Zt=[];function re(P){if(P.samples>0){if(It(P)===!1){let x=P.textures,D=P.width,Q=P.height,W=i.COLOR_BUFFER_BIT,ut=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(P),Y=x.length>1;if(Y)for(let St=0;St<x.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let St=0;St<x.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[St]);let O=n.get(x[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,D,Q,0,0,D,Q,W,i.NEAREST),l===!0&&(Zt.length=0,Zt.push(i.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Zt.push(ut),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let St=0;St<x.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,ft.__webglColorRenderbuffer[St]);let O=n.get(x[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,O,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function he(P){return Math.min(s.maxSamples,P.samples)}function It(P){let x=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _e(P){let x=a.render.frame;u.get(P)!==x&&(u.set(P,x),P.update())}function zt(P,x){let D=P.colorSpace,Q=P.format,W=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!==ur&&D!==Hn&&(ve.getTransfer(D)===Ae?(Q!==Vn||W!==gn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",D)),x}function Jt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=ht,this.getTextureUnits=dt,this.setTextureUnits=nt,this.setTexture2D=gt,this.setTexture2DArray=yt,this.setTexture3D=Bt,this.setTextureCube=_t,this.rebindTextures=ne,this.setupRenderTarget=se,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=It,this.dispose=G}function p_(i,t){function e(n,s=Hn){let r,a=ve.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Xe)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===Vn)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===Jr||n===$r||n===jr||n===Qr)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===Ao||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Io||n===Lo||n===Do||n===No||n===ta||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Io)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===$o||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===tl||n===ea||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
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

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new Ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null,b=typeof XRWebGLBinding<"u",d=new Oc,m={},y=e.getContextAttributes(),w=null,M=null,C=[],E=[],g=new xt,S=null,F=null,A=new sn;A.viewport=new Le;let I=new sn;I.viewport=new Le;let B=[A,I],j=new mo,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let gt=C[X];return gt===void 0&&(gt=new Ps,C[X]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(X){let gt=C[X];return gt===void 0&&(gt=new Ps,C[X]=gt),gt.getGripSpace()},this.getHand=function(X){let gt=C[X];return gt===void 0&&(gt=new Ps,C[X]=gt),gt.getHandSpace()};function q(X){let gt=E.indexOf(X.inputSource);if(gt===-1)return;let yt=C[gt];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||a),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",at);for(let X=0;X<C.length;X++){let gt=E[X];gt!==null&&(E[X]=null,C[X].disconnect(gt))}L=null,G=null,d.reset();for(let X in m)delete m[X];if(t.setRenderTarget(w),p=null,h=null,f=null,s=null,M=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),F!==null){let X=F.camera;X.fov=F.fov,X.zoom=F.zoom,X.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",at),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Bt=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=y.stencil?di:ii,Bt=y.stencil?ss:Gn);let Nt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Nt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new ze(h.textureWidth,h.textureHeight,{format:Vn,type:gn,depthTexture:new li(h.textureWidth,h.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let yt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ze(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function at(X){for(let gt=0;gt<X.removed.length;gt++){let yt=X.removed[gt],Bt=E.indexOf(yt);Bt>=0&&(E[Bt]=null,C[Bt].disconnect(yt))}for(let gt=0;gt<X.added.length;gt++){let yt=X.added[gt],Bt=E.indexOf(yt);if(Bt===-1){for(let Nt=0;Nt<C.length;Nt++)if(Nt>=E.length){E.push(yt),Bt=Nt;break}else if(E[Nt]===null){E[Nt]=yt,Bt=Nt;break}if(Bt===-1)break}let _t=C[Bt];_t&&_t.connect(yt)}}function rt(X,gt){gt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(gt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let gt=X.near,yt=X.far;d.texture!==null&&(d.depthNear>0&&(gt=d.depthNear),d.depthFar>0&&(yt=d.depthFar)),j.near=I.near=A.near=gt,j.far=I.far=A.far=yt,(L!==j.near||G!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),L=j.near,G=j.far),j.layers.mask=X.layers.mask|6,A.layers.mask=j.layers.mask&-5,I.layers.mask=j.layers.mask&-3;let Bt=X.parent,_t=j.cameras;rt(j,Bt);for(let Nt=0;Nt<_t.length;Nt++)rt(_t[Nt],Bt);j.projectionMatrix.copy(A.projectionMatrix),j.projectionMatrixInverse.copy(A.projectionMatrixInverse),F===null&&X.isPerspectiveCamera&&(F={camera:X,fov:X.fov,zoom:X.zoom}),ht(X,j,Bt)};function ht(X,gt,yt){yt===null?X.matrix.copy(gt.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(gt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(gt.projectionMatrix),X.projectionMatrixInverse.copy(gt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=qi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(j)},this.getCameraTexture=function(X){return m[X]};let dt=null;function nt(X,gt){if(u=gt.getViewerPose(c||a),_=gt,u!==null){let yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Bt=!1;yt.length!==j.cameras.length&&(j.cameras.length=0,Bt=!0);for(let Xt=0;Xt<yt.length;Xt++){let qt=yt[Xt],le=null;if(p!==null)le=p.getViewport(qt);else{let pt=f.getViewSubImage(h,qt);le=pt.viewport,Xt===0&&(t.setRenderTargetTextures(M,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(M))}let ct=B[Xt];ct===void 0&&(ct=new sn,ct.layers.enable(Xt),ct.viewport=new Le,B[Xt]=ct),ct.matrix.fromArray(qt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(qt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(le.x,le.y,le.width,le.height),Xt===0&&(j.matrix.copy(ct.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Bt===!0&&j.cameras.push(ct)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let Xt=f.getDepthInformation(yt[0]);Xt&&Xt.isValid&&Xt.texture&&d.init(Xt,s.renderState)}if(_t&&_t.includes("camera-access")&&b){t.state.unbindTexture(),f=n.getBinding();for(let Xt=0;Xt<yt.length;Xt++){let qt=yt[Xt].camera;if(qt){let le=m[qt];le||(le=new br,m[qt]=le);let ct=f.getCameraImage(qt);le.sourceTexture=ct}}}}for(let yt=0;yt<C.length;yt++){let Bt=E[yt],_t=C[yt];Bt!==null&&_t!==void 0&&_t.update(Bt,gt,c||a)}dt&&dt(X,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),_=null}let ot=new ku;ot.setAnimationLoop(nt),this.setAnimationLoop=function(X){dt=X},this.dispose=function(){}}},__=new Se,Ku=new de;Ku.set(-1,0,0,0,1,0,0,0,1);function x_(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,Tc(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,y,w,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),f(d,m)):m.isMeshPhongMaterial?(r(d,m),u(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),h(d,m),m.isMeshPhysicalMaterial&&p(d,m,M)):m.isMeshMatcapMaterial?(r(d,m),_(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),b(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?l(d,m,y,w):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===rn&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===rn&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let y=t.get(m),w=y.envMap,M=y.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Ku),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,y,w){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*y,d.scale.value=w*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,y){d.ior.value=m.ior,m.diffuseRoughness>0&&(d.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.retroreflectivity>0&&(d.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function b(d,m){let y=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v_(i,t,e,n){let s={},r={};function a(y,w){let M=w.program;n.uniformBlockBinding(y,M,s[y.id])}function o(y,w){let M=s[y.id];M===void 0&&(_(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",d));let C=w.program;n.updateUBOMapping(y,C);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let w=i.createBuffer(),M=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,C),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,g=M.length;E<g;E++){let S=M[E];if(Array.isArray(S))for(let F=0,A=S.length;F<A;F++)u(S[F],E,F,C);else u(S,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,w,M,C){if(h(y,w,M,C)===!0){let E=y.__offset,g=y.value;if(Array.isArray(g)){let S=0;for(let F=0;F<g.length;F++){let A=g[F],I=b(A,!0);f(A,y.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function f(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}function h(y,w,M,C){let E=y.value,g=w+"_"+M;if(Array.isArray(E)){C[g]===void 0&&(C[g]=[]);let S=C[g],F=!1;for(let A=0;A<E.length;A++)p(E[A],S,A)===!0&&(F=!0);return F}return p(E,C,g)}function p(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{let C=w[M];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function _(y){let w=y.uniforms,M=0,C=16;for(let g=0,S=w.length;g<S;g++){let F=Array.isArray(w[g])?w[g]:[w[g]];for(let A=0,I=F.length;A<I;A++){let B=F[A],j=Array.isArray(B.value)?B.value:[B.value],L=Array.isArray(w[g])||Array.isArray(B.value),G=M;for(let Z=0,at=j.length;Z<at;Z++){let rt=j[Z],ht=b(rt,L),dt=M%C,nt=dt%ht.boundary,ot=dt+nt;M+=nt,ot!==0&&C-ot<ht.storage&&(M+=C-ot),Z===0&&(G=M),M+=ht.storage}let q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new q((M-G)/Float32Array.BYTES_PER_ELEMENT),B.__offset=G}}let E=M%C;return E>0&&(M+=C-E),y.__size=M,y.__cache={},this}function b(y,w){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function d(y){let w=y.target;w.removeEventListener("dispose",d),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:m}}var y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function M_(){return Zn===null&&(Zn=new xr(y_,16,16,Ui,Xe),Zn.name="DFG_LUT",Zn.minFilter=pn,Zn.magFilter=pn,Zn.wrapS=Xn,Zn.wrapT=Xn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var rl=class{constructor(t={}){let{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=gn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let b=p,d=new Set([To,wo,bo]),m=new Set([gn,Gn,Hs,ss,yo,Mo]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},C=null,E=null,g=[],S=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,B=null,j=null,L=null,G=null;this._outputColorSpace=nn;let q=0,Z=0,at=null,rt=-1,ht=null,dt=new Le,nt=new Le,ot=null,X=new ee(0),gt=0,yt=e.width,Bt=e.height,_t=1,Nt=null,fe=null,Xt=new Le(0,0,yt,Bt),qt=new Le(0,0,yt,Bt),le=!1,ct=new Ti,pt=new Ka,Tt=!1,Ft=!1,Pt=new Se,Gt=new N,kt=new Le,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function se(){return at===null?_t:1}let H=n;function Zt(v,T){return e.getContext(v,T)}let re,he,It,_e,zt,Jt,P,x,D,Q,W,ut,ft,Y,et,St,O,it,st,vt,bt,Lt,Kt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Qt,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),H===null){let T="webgl2";if(H=Zt(T,v),H===null)throw Zt(T)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(v){throw e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),ce("WebGLRenderer: "+v.message),v}function ae(){re=new L0(H),re.init(),bt=new p_(H,re),he=new M0(H,re,t,bt),It=new d_(H,re),he.reversedDepthBuffer&&h&&It.buffers.depth.setReversed(!0),j=H.createFramebuffer(),L=H.createFramebuffer(),G=H.createFramebuffer(),_e=new U0(H),zt=new jg,Jt=new f_(H,re,It,zt,he,bt,_e),P=new I0(A),x=new Of(H),Lt=new v0(H,x),D=new D0(H,x,_e,Lt),Q=new O0(H,D,x,Lt,_e),it=new F0(H,he,Jt),et=new S0(zt),W=new $g(A,P,re,he,Lt,et),ut=new x_(A,zt),ft=new t_,Y=new a_(re),O=new x0(A,P,It,Q,_,l),St=new u_(A,Q,he),Kt=new v_(H,_e,he,It),st=new y0(H,re,_e),vt=new N0(H,re,_e),_e.programs=W.programs,A.capabilities=he,A.extensions=re,A.properties=zt,A.renderLists=ft,A.shadowMap=St,A.state=It,A.info=_e}b!==gn&&(F=new k0(b,e.width,e.height,o,s,r));let Et=new Bc(A,H);this.xr=Et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let v=re.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=re.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(v){v!==void 0&&(_t=v,this.setSize(yt,Bt,!1))},this.getSize=function(v){return v.set(yt,Bt)},this.setSize=function(v,T,k=!0){if(Et.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=v,Bt=T,e.width=Math.floor(v*_t),e.height=Math.floor(T*_t),k===!0&&(e.style.width=v+"px",e.style.height=T+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,v,T)},this.getDrawingBufferSize=function(v){return v.set(yt*_t,Bt*_t).floor()},this.setDrawingBufferSize=function(v,T,k){yt=v,Bt=T,_t=k,e.width=Math.floor(v*k),e.height=Math.floor(T*k),this.setViewport(0,0,v,T)},this.setEffects=function(v){if(b===gn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let T=0;T<v.length;T++)if(v[T].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(dt)},this.getViewport=function(v){return v.copy(Xt)},this.setViewport=function(v,T,k,z){v.isVector4?Xt.set(v.x,v.y,v.z,v.w):Xt.set(v,T,k,z),It.viewport(dt.copy(Xt).multiplyScalar(se()).round())},this.getScissor=function(v){return v.copy(qt)},this.setScissor=function(v,T,k,z){v.isVector4?qt.set(v.x,v.y,v.z,v.w):qt.set(v,T,k,z),It.scissor(nt.copy(qt).multiplyScalar(se()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(v){It.setScissorTest(le=v)},this.setOpaqueSort=function(v){Nt=v},this.setTransparentSort=function(v){fe=v},this.getClearColor=function(v){return v.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(v=!0,T=!0,k=!0){let z=0;if(v){let U=!1;if(at!==null){let lt=at.texture.format;U=d.has(lt)}if(U){let lt=at.texture.type,Ct=m.has(lt),mt=O.getClearColor(),wt=O.getClearAlpha(),Dt=mt.r,te=mt.g,Yt=mt.b;Ct?(y[0]=Dt,y[1]=te,y[2]=Yt,y[3]=wt,H.clearBufferuiv(H.COLOR,0,y)):(w[0]=Dt,w[1]=te,w[2]=Yt,w[3]=wt,H.clearBufferiv(H.COLOR,0,w))}else z|=H.COLOR_BUFFER_BIT}T&&(z|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(z|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),B=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),O.dispose(),ft.dispose(),Y.dispose(),Jt.dispose(),zt.dispose(),P.dispose(),Q.dispose(),D.dispose(),Lt.dispose(),Kt.dispose(),W.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Ut),Et.removeEventListener("sessionend",Me),pe.stop()};function Qt(v){v.preventDefault(),yc("WebGLRenderer: Context Lost."),I=!0}function ue(){yc("WebGLRenderer: Context Restored."),I=!1;let v=_e.autoReset,T=St.enabled,k=St.autoUpdate,z=St.needsUpdate,U=St.type;ae(),_e.autoReset=v,St.enabled=T,St.autoUpdate=k,St.needsUpdate=z,St.type=U}function Ot(v){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function we(v){let T=v.target;T.removeEventListener("dispose",we),Ce(T)}function Ce(v){Cn(v),zt.remove(v)}function Cn(v){let T=zt.get(v).programs;T!==void 0&&(T.forEach(function(k){W.releaseProgram(k)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,T,k,z,U,lt){T===null&&(T=jt);let Ct=U.isMesh&&U.matrixWorld.determinantAffine()<0,mt=$(v,T,k,z,U);It.setMaterial(z,Ct);let wt=k.index,Dt=1;if(z.wireframe===!0){if(wt=D.getWireframeAttribute(k),wt===void 0)return;Dt=2}let te=k.drawRange,Yt=k.attributes.position,Vt=te.start*Dt,Wt=(te.start+te.count)*Dt;lt!==null&&(Vt=Math.max(Vt,lt.start*Dt),Wt=Math.min(Wt,(lt.start+lt.count)*Dt)),wt!==null?(Vt=Math.max(Vt,0),Wt=Math.min(Wt,wt.count)):Yt!=null&&(Vt=Math.max(Vt,0),Wt=Math.min(Wt,Yt.count));let xe=Wt-Vt;if(xe<0||xe===1/0)return;Lt.setup(U,z,mt,k,wt);let be,Ie=st;if(wt!==null&&(be=x.get(wt),Ie=vt,Ie.setIndex(be)),U.isMesh)z.wireframe===!0?(It.setLineWidth(z.wireframeLinewidth*se()),Ie.setMode(H.LINES)):Ie.setMode(H.TRIANGLES);else if(U.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),It.setLineWidth(Ge*se()),U.isLineSegments?Ie.setMode(H.LINES):U.isLineLoop?Ie.setMode(H.LINE_LOOP):Ie.setMode(H.LINE_STRIP)}else U.isPoints?Ie.setMode(H.POINTS):U.isSprite&&Ie.setMode(H.TRIANGLES);if(U.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Ie.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ge=U._multiDrawStarts,$t=U._multiDrawCounts,dn=U._multiDrawCount,Re=wt?x.get(wt).bytesPerElement:1,Bi=zt.get(z).currentProgram.getUniforms();for(let on=0;on<dn;on++)Bi.setValue(H,"_gl_DrawID",on),Ie.render(Ge[on]/Re,$t[on])}else if(U.isInstancedMesh)Ie.renderInstances(Vt,xe,U.count);else if(k.isInstancedBufferGeometry){let Ge=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,$t=Math.min(k.instanceCount,Ge);Ie.renderInstances(Vt,xe,$t)}else Ie.render(Vt,xe)};function pi(v,T,k,z){B!==null&&v.isNodeMaterial&&B.setObject(z,v),Tt===!0&&et.setState(v,k,!1),v.transparent===!0&&v.side===hn&&v.forceSinglePass===!1?(v.side=rn,v.needsUpdate=!0,Oi(v,T,z),v.side=Ni,v.needsUpdate=!0,Oi(v,T,z),v.side=hn):Oi(v,T,z)}this.compile=function(v,T,k=null){k===null&&(k=v),B!==null&&B.renderStart(v,T,k),E=Y.get(k),E.init(T),S.push(E),k.traverseVisible(function(U){U.isLight&&U.layers.test(T.layers)&&(E.pushLight(U),U.castShadow&&E.pushShadow(U))}),v!==k&&v.traverseVisible(function(U){U.isLight&&U.layers.test(T.layers)&&(E.pushLight(U),U.castShadow&&E.pushShadow(U))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),Ft=this.localClippingEnabled,Tt=et.init(this.clippingPlanes,Ft),Tt===!0&&et.setGlobalState(this.clippingPlanes,T),B!==null&&St.render(E.state.shadowsArray,k,T);let z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let lt=U.material;if(lt)if(Array.isArray(lt))for(let Ct=0;Ct<lt.length;Ct++){let mt=lt[Ct];pi(mt,k,T,U),z.add(mt)}else pi(lt,k,T,U),z.add(lt)}),E=S.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(v,T,k=null){let z=this.compile(v,T,k);return new Promise(U=>{function lt(){if(z.forEach(function(Ct){let wt=zt.get(Ct).currentProgram;(wt===void 0||wt.isReady())&&z.delete(Ct)}),z.size===0){U(v);return}setTimeout(lt,10)}re.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let K=null;function Mt(v){K&&K(v)}function Ut(){pe.stop()}function Me(){pe.start()}let pe=new ku;pe.setAnimationLoop(Mt),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(v){K=v,Et.setAnimationLoop(v),v===null?pe.stop():pe.start()},Et.addEventListener("sessionstart",Ut),Et.addEventListener("sessionend",Me),this.render=function(v,T){if(T!==void 0&&T.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(v,T);let k=Et.enabled===!0&&Et.isPresenting===!0,z=F!==null&&(at===null||k)&&F.begin(A,at);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(T),T=Et.getCamera()),v.isScene===!0&&v.onBeforeRender(A,v,T,at),E=Y.get(v,S.length),E.init(T),E.state.textureUnits=Jt.getTextureUnits(),S.push(E),Pt.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera?pt.setFromArrayCamera(T):ct.setFromProjectionMatrix(Pt,Pn,T.reversedDepth),Ft=this.localClippingEnabled,Tt=et.init(this.clippingPlanes,Ft),C=ft.get(v,g.length),C.init(),g.push(C),this.info.render.frame++,Et.enabled===!0&&Et.isPresenting===!0){let Ct=A.xr.getDepthSensingMesh();Ct!==null&&an(Ct,T,-1/0,A.sortObjects)}an(v,T,0,A.sortObjects),C.finish(),B!==null&&B.updateLights(E.state.lightsArray),A.sortObjects===!0&&C.sort(Nt,fe),ne=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,ne&&O.addToRenderList(C,v),this.info.autoReset===!0&&this.info.reset(),Tt===!0&&et.beginShadows();let U=E.state.shadowsArray;if(St.render(U,v,T),Tt===!0&&et.endShadows(),(z&&F.hasRenderPass())===!1){let Ct=C.opaque,mt=C.transmissive;if(E.setupLights(),T.isArrayCamera){let wt=T.cameras;if(mt.length>0)for(let Dt=0,te=wt.length;Dt<te;Dt++){let Yt=wt[Dt];Ke(Ct,mt,v,Yt)}ne&&O.render(v);for(let Dt=0,te=wt.length;Dt<te;Dt++){let Yt=wt[Dt];Un(C,v,Yt,Yt.viewport)}}else mt.length>0&&Ke(Ct,mt,v,T),ne&&O.render(v),Un(C,v,T)}at!==null&&Z===0&&(Jt.updateMultisampleRenderTarget(at),Jt.updateRenderTargetMipmap(at)),z&&F.end(A),v.isScene===!0&&v.onAfterRender(A,v,T),Lt.resetDefaultState(),rt=-1,ht=null,S.pop(),S.length>0?(E=S[S.length-1],Jt.setTextureUnits(E.state.textureUnits),Tt===!0&&et.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,B!==null&&B.renderEnd()};function an(v,T,k,z){if(v.visible===!1)return;if(v.layers.test(T.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(T);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let Ct=T.isArrayCamera?pt:ct;if(!v.frustumCulled||v.intersectsFrustum(Ct)){z&&kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Pt);let mt=Q.update(v),wt=v.material;wt.visible&&C.push(v,mt,wt,k,kt.z,null,T)}}else if(v.isMesh||v.isLine||v.isPoints){let Ct=T.isArrayCamera?pt:ct;if(!v.frustumCulled||v.intersectsFrustum(Ct)){let mt=Q.update(v),wt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),kt.copy(v.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),kt.copy(mt.boundingSphere.center)),kt.applyMatrix4(v.matrixWorld).applyMatrix4(Pt)),Array.isArray(wt)){let Dt=mt.groups;for(let te=0,Yt=Dt.length;te<Yt;te++){let Vt=Dt[te],Wt=wt[Vt.materialIndex];Wt&&Wt.visible&&C.push(v,mt,Wt,k,kt.z,Vt,T)}}else wt.visible&&C.push(v,mt,wt,k,kt.z,null,T)}}}let lt=v.children;for(let Ct=0,mt=lt.length;Ct<mt;Ct++)an(lt[Ct],T,k,z)}function Un(v,T,k,z){let{opaque:U,transmissive:lt,transparent:Ct}=v;E.setupLightsView(k),Tt===!0&&et.setGlobalState(A.clippingPlanes,k),z&&It.viewport(dt.copy(z)),U.length>0&&Ue(U,T,k),lt.length>0&&Ue(lt,T,k),Ct.length>0&&Ue(Ct,T,k),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Ke(v,T,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Vt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new ze(1,1,{generateMipmaps:!0,type:Vt?Xe:gn,minFilter:ui,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let lt=E.state.transmissionRenderTarget[z.id],Ct=z.viewport||dt;lt.setSize(Ct.z*A.transmissionResolutionScale,Ct.w*A.transmissionResolutionScale);let mt=A.getRenderTarget(),wt=A.getActiveCubeFace(),Dt=A.getActiveMipmapLevel();A.setRenderTarget(lt),A.getClearColor(X),gt=A.getClearAlpha(),gt<1&&A.setClearColor(16777215,.5),A.clear(),ne&&O.render(k);let te=A.toneMapping;A.toneMapping=Yn;let Yt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),Tt===!0&&et.setGlobalState(A.clippingPlanes,z),Ue(v,k,z),Jt.updateMultisampleRenderTarget(lt),Jt.updateRenderTargetMipmap(lt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Wt=0,xe=T.length;Wt<xe;Wt++){let be=T[Wt],{object:Ie,geometry:Ge,material:$t,group:dn}=be;if($t.side===hn&&Ie.layers.test(z.layers)){let Re=$t.side;$t.side=rn,$t.needsUpdate=!0,mi(Ie,k,z,Ge,$t,dn),$t.side=Re,$t.needsUpdate=!0,Vt=!0}}Vt===!0&&(Jt.updateMultisampleRenderTarget(lt),Jt.updateRenderTargetMipmap(lt))}A.setRenderTarget(mt,wt,Dt),A.setClearColor(X,gt),Yt!==void 0&&(z.viewport=Yt),A.toneMapping=te}function Ue(v,T,k){let z=T.isScene===!0?T.overrideMaterial:null;for(let U=0,lt=v.length;U<lt;U++){let Ct=v[U],{object:mt,geometry:wt,group:Dt}=Ct,te=Ct.material;te.allowOverride===!0&&z!==null&&(te=z),mt.layers.test(k.layers)&&mi(mt,T,k,wt,te,Dt)}}function mi(v,T,k,z,U,lt){B!==null&&U.isNodeMaterial&&B.setObject(v,U),v.onBeforeRender(A,T,k,z,U,lt),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(A,T,k,z,v,lt),U.transparent===!0&&U.side===hn&&U.forceSinglePass===!1?(U.side=rn,U.needsUpdate=!0,A.renderBufferDirect(k,T,z,U,v,lt),U.side=Ni,U.needsUpdate=!0,A.renderBufferDirect(k,T,z,U,v,lt),U.side=hn):A.renderBufferDirect(k,T,z,U,v,lt),v.onAfterRender(A,T,k,z,U,lt)}function js(v){let T=0;for(let k of v)k.texture!==null&&T++;return T}function Oi(v,T,k){T.isScene!==!0&&(T=jt);let z=zt.get(v),U=E.state.lights,lt=E.state.shadowsArray,Ct=U.state.version,mt=W.getParameters(v,U.state,lt,T,k,E.state.lightProbeGridArray),wt=W.getProgramCacheKey(mt),Dt=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?T.environment:null,z.fog=T.fog;let te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=P.get(v.envMap||z.environment,te),z.envMapRotation=z.environment!==null&&v.envMap===null?T.environmentRotation:v.envMapRotation,Dt===void 0&&(v.addEventListener("dispose",we),Dt=new Map,z.programs=Dt,z.programVariants=new Map);let Yt=Dt.get(wt);if(Yt!==void 0){if(z.currentProgram===Yt&&z.lightsStateVersion===Ct)return J(v,mt),Yt}else mt.uniforms=W.getUniforms(v),B!==null&&v.isNodeMaterial&&B.build(v,k,mt),v.onBeforeCompile(mt,A),Yt=W.acquireProgram(mt,wt),Dt.set(wt,Yt),z.uniforms=mt.uniforms;let Vt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Vt.clippingPlanes=et.uniform),J(v,mt),z.needsLights=At(v),z.lightsStateVersion=Ct,z.needsLights&&(Vt.ambientLightColor.value=U.state.ambient,Vt.lightProbe.value=U.state.probe,Vt.sunLights.value=U.state.sun,Vt.sunLightShadows.value=U.state.sunShadow,Vt.directionalLights.value=U.state.directional,Vt.directionalLightShadows.value=U.state.directionalShadow,Vt.spotLights.value=U.state.spot,Vt.spotLightShadows.value=U.state.spotShadow,Vt.rectAreaLights.value=U.state.rectArea,Vt.ltc_1.value=U.state.rectAreaLTC1,Vt.ltc_2.value=U.state.rectAreaLTC2,Vt.pointLights.value=U.state.point,Vt.pointLightShadows.value=U.state.pointShadow,Vt.hemisphereLights.value=U.state.hemi,Vt.sunShadowMatrix.value=U.state.sunShadowMatrix,Vt.sunShadowCascade.value=U.state.sunShadowCascade,Vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Vt.spotLightMatrix.value=U.state.spotLightMatrix,Vt.spotLightMap.value=U.state.spotLightMap,Vt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.numLightProbeGrids=js(E.state.lightProbeGridArray),z.currentProgram=Yt,z.uniformsList=null,Yt}function R(v,T,k,z,U){let lt=zt.get(v),Ct=lt.currentProgram.id+","+z+","+U,mt=lt.programVariants.get(Ct);return mt===void 0?(mt=Oi(v,T,k),lt.programVariants.set(Ct,mt)):(lt.currentProgram=mt,lt.uniformsList=null,lt.outputColorSpace=z,lt.toneMapping=U),mt}function V(v){if(v.uniformsList===null){let T=v.currentProgram.getUniforms();v.uniformsList=Ws.seqWithValue(T.seq,v.uniforms)}return v.uniformsList}function J(v,T){let k=zt.get(v);k.outputColorSpace=T.outputColorSpace,k.batching=T.batching,k.batchingColor=T.batchingColor,k.instancing=T.instancing,k.instancingColor=T.instancingColor,k.instancingMorph=T.instancingMorph,k.skinning=T.skinning,k.morphTargets=T.morphTargets,k.morphNormals=T.morphNormals,k.morphColors=T.morphColors,k.morphTargetsCount=T.morphTargetsCount,k.numClippingPlanes=T.numClippingPlanes,k.numIntersection=T.numClipIntersection,k.vertexAlphas=T.vertexAlphas,k.vertexTangents=T.vertexTangents,k.toneMapping=T.toneMapping}function $(v,T,k,z,U){T.isScene!==!0&&(T=jt),Jt.resetTextureUnits();let lt=T.fog,Ct=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?T.environment:null,mt=at===null?A.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ve.workingColorSpace,wt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Dt=P.get(z.envMap||Ct,wt),te=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Yt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Vt=!!k.morphAttributes.position,Wt=!!k.morphAttributes.normal,xe=!!k.morphAttributes.color,be=Yn;z.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(be=A.toneMapping);let Ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ge=Ie!==void 0?Ie.length:0,$t=zt.get(z),dn=E.state.lights;if(Tt===!0&&(Ft===!0||v!==ht)){let Fe=v===ht&&z.id===rt;et.setState(z,v,Fe)}let Re=!1,Bi=!1;z.version===$t.__version?$t.needsLights&&$t.lightsStateVersion!==dn.state.version||U.isBatchedMesh&&$t.batching===!1||!U.isBatchedMesh&&$t.batching===!0||U.isBatchedMesh&&$t.batchingColor===!0&&U._colorsTexture===null||U.isBatchedMesh&&$t.batchingColor===!1&&U._colorsTexture!==null||U.isInstancedMesh&&$t.instancing===!1||!U.isInstancedMesh&&$t.instancing===!0||U.isSkinnedMesh&&$t.skinning===!1||!U.isSkinnedMesh&&$t.skinning===!0||U.isInstancedMesh&&$t.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&$t.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&$t.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&$t.instancingMorph===!1&&U.morphTexture!==null||$t.envMap!==Dt||z.fog===!0&&$t.fog!==lt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==et.numPlanes||$t.numIntersection!==et.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==Yt||$t.morphTargets!==Vt||$t.morphNormals!==Wt||$t.morphColors!==xe||$t.morphTargetsCount!==Ge||$t.numLightProbeGrids!==js(E.state.lightProbeGridArray)?Re=!0:($t.outputColorSpace!==mt||$t.toneMapping!==be)&&(Bi=!0):(Re=!0,$t.__version=z.version);let on=$t.currentProgram;(Re===!0||Bi===!0)&&(on=Bi===!0?R(z,T,U,mt,be):Oi(z,T,U),B&&z.isNodeMaterial&&B.onUpdateProgram(z,on,$t));let ca=!1,gi=!1,ki=!1,Te=on.getUniforms(),en=$t.uniforms;if(It.useProgram(on.program)&&(ca=!0,gi=!0,ki=!0),z.id!==rt&&(rt=z.id,gi=!0),ca||ht!==v){It.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Te.setValue(H,"projectionMatrix",v.projectionMatrix),Te.setValue(H,"viewMatrix",v.matrixWorldInverse);let Je=Te.map.cameraPosition;Je!==void 0&&Je.setValue(H,Gt.setFromMatrixPosition(v.matrixWorld)),he.logarithmicDepthBuffer&&Te.setValue(H,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Te.setValue(H,"isOrthographic",v.isOrthographicCamera===!0),ht!==v&&(ht=v,gi=!0,ki=!0)}if($t.needsLights&&(dn.state.sunShadowMap.length>0&&Te.setValue(H,"sunShadowMap",dn.state.sunShadowMap,Jt),dn.state.directionalShadowMap.length>0&&Te.setValue(H,"directionalShadowMap",dn.state.directionalShadowMap,Jt),dn.state.spotShadowMap.length>0&&Te.setValue(H,"spotShadowMap",dn.state.spotShadowMap,Jt),dn.state.pointShadowMap.length>0&&Te.setValue(H,"pointShadowMap",dn.state.pointShadowMap,Jt)),U.isSkinnedMesh){Te.setOptional(H,U,"bindMatrix"),Te.setOptional(H,U,"bindMatrixInverse");let Fe=U.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Te.setValue(H,"boneTexture",Fe.boneTexture,Jt))}U.isBatchedMesh&&(Te.setOptional(H,U,"batchingTexture"),Te.setValue(H,"batchingTexture",U._matricesTexture,Jt),Te.setOptional(H,U,"batchingIdTexture"),Te.setValue(H,"batchingIdTexture",U._indirectTexture,Jt),Te.setOptional(H,U,"batchingColorTexture"),U._colorsTexture!==null&&Te.setValue(H,"batchingColorTexture",U._colorsTexture,Jt));let Fn=k.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&it.update(U,k,on),(gi||$t.receiveShadow!==U.receiveShadow)&&($t.receiveShadow=U.receiveShadow,Te.setValue(H,"receiveShadow",U.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&T.environment!==null&&(en.envMapIntensity.value=T.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=M_()),gi){if(Te.setValue(H,"toneMappingExposure",A.toneMappingExposure),$t.needsLights&&tt(en,ki),lt&&z.fog===!0&&ut.refreshFogUniforms(en,lt),ut.refreshMaterialUniforms(en,z,_t,Bt,E.state.transmissionRenderTarget[v.id]),$t.needsLights&&$t.numLightProbeGrids>0){let Fe=M,Je=0;for(let Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(Fe.textures[Je]=Jn.texture,Fe.min[Je]=Jn.boundingBox.min,Fe.max[Je]=Jn.boundingBox.max,Fe.resolution[Je]=Jn.resolution,Je++);for(let Jn in Fe)Fe[Jn].length=Je;en.probesSH.value=Fe.textures,en.probesMin.value=Fe.min,en.probesMax.value=Fe.max,en.probesResolution.value=Fe.resolution}Ws.upload(H,V($t),en,Jt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ws.upload(H,V($t),en,Jt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Te.setValue(H,"center",U.center),Te.setValue(H,"modelViewMatrix",U.modelViewMatrix),Te.setValue(H,"normalMatrix",U.normalMatrix),Te.setValue(H,"modelMatrix",U.matrixWorld),z.uniformsGroups!==void 0){let Fe=z.uniformsGroups;for(let Je=0,Jn=Fe.length;Je<Jn;Je++){let Hc=Fe[Je];Kt.update(Hc,on),Kt.bind(Hc,on)}}return on}function tt(v,T){v.ambientLightColor.needsUpdate=T,v.lightProbe.needsUpdate=T,v.sunLights.needsUpdate=T,v.sunLightShadows.needsUpdate=T,v.directionalLights.needsUpdate=T,v.directionalLightShadows.needsUpdate=T,v.pointLights.needsUpdate=T,v.pointLightShadows.needsUpdate=T,v.spotLights.needsUpdate=T,v.spotLightShadows.needsUpdate=T,v.rectAreaLights.needsUpdate=T,v.hemisphereLights.needsUpdate=T}function At(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(v,T,k){let z=zt.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),zt.get(v.texture).__webglTexture=T,zt.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,T){let k=zt.get(v);k.__webglFramebuffer=T,k.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(v,T=0,k=0){at=v,q=T,Z=k;let z=null,U=!1,lt=!1;if(v){let mt=zt.get(v);if(mt.__useDefaultFramebuffer!==void 0){It.bindFramebuffer(H.FRAMEBUFFER,mt.__webglFramebuffer),dt.copy(v.viewport),nt.copy(v.scissor),ot=v.scissorTest,It.viewport(dt),It.scissor(nt),It.setScissorTest(ot),rt=-1;return}else if(mt.__webglFramebuffer===void 0)Jt.setupRenderTarget(v);else if(mt.__hasExternalTextures)Jt.rebindTextures(v,zt.get(v.texture).__webglTexture,zt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let te=v.depthTexture;if(mt.__boundDepthTexture!==te){if(te!==null&&zt.has(te)&&(v.width!==te.image.width||v.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(v)}}let wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(lt=!0);let Dt=zt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[T])?z=Dt[T][k]:z=Dt[T],U=!0):v.samples>0&&Jt.useMultisampledRTT(v)===!1?z=zt.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[k]:z=Dt,dt.copy(v.viewport),nt.copy(v.scissor),ot=v.scissorTest}else dt.copy(Xt).multiplyScalar(_t).floor(),nt.copy(qt).multiplyScalar(_t).floor(),ot=le;if(k!==0&&(z=j),It.bindFramebuffer(H.FRAMEBUFFER,z)&&It.drawBuffers(v,z),It.viewport(dt),It.scissor(nt),It.setScissorTest(ot),U){let mt=zt.get(v.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+T,mt.__webglTexture,k)}else if(lt){let mt=T;for(let wt=0;wt<v.textures.length;wt++){let Dt=zt.get(v.textures[wt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+wt,Dt.__webglTexture,k,mt)}}else if(v!==null&&k!==0){let mt=zt.get(v.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mt.__webglTexture,k)}rt=-1};function Rt(v){let T=zt.get(v);return(T.__readFormat!==v.format||T.__readType!==v.type)&&(T.__readFormat=v.format,T.__readType=v.type,T.__formatReadable=he.textureFormatReadable(v.format),T.__typeReadable=he.textureTypeReadable(v.type)),T}this.readRenderTargetPixels=function(v,T,k,z,U,lt,Ct,mt=0){if(!(v&&v.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=zt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt){It.bindFramebuffer(H.FRAMEBUFFER,wt);try{let Dt=v.textures[mt],te=Dt.format,Yt=Dt.type;v.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+mt);let Vt=Rt(Dt);if(Vt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=v.width-z&&k>=0&&k<=v.height-U&&H.readPixels(T,k,z,U,bt.convert(te),bt.convert(Yt),lt)}finally{let Dt=at!==null?zt.get(at).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(v,T,k,z,U,lt,Ct,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=zt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt)if(T>=0&&T<=v.width-z&&k>=0&&k<=v.height-U){It.bindFramebuffer(H.FRAMEBUFFER,wt);let Dt=v.textures[mt],te=Dt.format,Yt=Dt.type;v.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+mt);let Vt=Rt(Dt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Wt),H.bufferData(H.PIXEL_PACK_BUFFER,lt.byteLength,H.STREAM_READ),H.readPixels(T,k,z,U,bt.convert(te),bt.convert(Yt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let xe=at!==null?zt.get(at).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,xe);let be=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ou(H,be,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Wt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,lt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Wt),H.deleteSync(be),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,T=null,k=0){let z=Math.pow(2,-k),U=Math.floor(v.image.width*z),lt=Math.floor(v.image.height*z),Ct=T!==null?T.x:0,mt=T!==null?T.y:0;Jt.setTexture2D(v,0),H.copyTexSubImage2D(H.TEXTURE_2D,k,0,0,Ct,mt,U,lt),It.unbindTexture()},this.copyTextureToTexture=function(v,T,k=null,z=null,U=0,lt=0){let Ct,mt,wt,Dt,te,Yt,Vt,Wt,xe,be=v.isCompressedTexture?v.mipmaps[lt]:v.image;if(k!==null)Ct=k.max.x-k.min.x,mt=k.max.y-k.min.y,wt=k.isBox3?k.max.z-k.min.z:1,Dt=k.min.x,te=k.min.y,Yt=k.isBox3?k.min.z:0;else{let Te=Math.pow(2,-U);Ct=Math.floor(be.width*Te),mt=Math.floor(be.height*Te),v.isDataArrayTexture?wt=be.depth:v.isData3DTexture?wt=Math.floor(be.depth*Te):wt=1,Dt=0,te=0,Yt=0}z!==null?(Vt=z.x,Wt=z.y,xe=z.z):(Vt=0,Wt=0,xe=0);let Ie=bt.convert(T.format),Ge=bt.convert(T.type),$t;T.isData3DTexture?(Jt.setTexture3D(T,0),$t=H.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(Jt.setTexture2DArray(T,0),$t=H.TEXTURE_2D_ARRAY):(Jt.setTexture2D(T,0),$t=H.TEXTURE_2D),It.activeTexture(H.TEXTURE0),It.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,T.flipY),It.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),It.pixelStorei(H.UNPACK_ALIGNMENT,T.unpackAlignment);let dn=It.getParameter(H.UNPACK_ROW_LENGTH),Re=It.getParameter(H.UNPACK_IMAGE_HEIGHT),Bi=It.getParameter(H.UNPACK_SKIP_PIXELS),on=It.getParameter(H.UNPACK_SKIP_ROWS),ca=It.getParameter(H.UNPACK_SKIP_IMAGES);It.pixelStorei(H.UNPACK_ROW_LENGTH,be.width),It.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be.height),It.pixelStorei(H.UNPACK_SKIP_PIXELS,Dt),It.pixelStorei(H.UNPACK_SKIP_ROWS,te),It.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);let gi=v.isDataArrayTexture||v.isData3DTexture,ki=T.isDataArrayTexture||T.isData3DTexture;if(v.isDepthTexture){let Te=zt.get(v),en=zt.get(T),Fn=zt.get(Te.__renderTarget),Fe=zt.get(en.__renderTarget);It.bindFramebuffer(H.READ_FRAMEBUFFER,Fn.__webglFramebuffer),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Je=0;Je<wt;Je++)gi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(v).__webglTexture,U,Yt+Je),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(T).__webglTexture,lt,xe+Je)),H.blitFramebuffer(Dt,te,Dt+Ct,te+mt,Vt,Wt,Vt+Ct,Wt+mt,H.DEPTH_BUFFER_BIT,H.NEAREST);It.bindFramebuffer(H.READ_FRAMEBUFFER,null),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||zt.has(v)){let Te=zt.get(v),en=zt.get(T);It.bindFramebuffer(H.READ_FRAMEBUFFER,L),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,G);for(let Fn=0;Fn<wt;Fn++)gi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Te.__webglTexture,U,Yt+Fn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Te.__webglTexture,U),ki?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,lt,xe+Fn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,lt),U!==0?H.blitFramebuffer(Dt,te,Dt+Ct,te+mt,Vt,Wt,Vt+Ct,Wt+mt,H.COLOR_BUFFER_BIT,H.NEAREST):ki?H.copyTexSubImage3D($t,lt,Vt,Wt,xe+Fn,Dt,te,Ct,mt):H.copyTexSubImage2D($t,lt,Vt,Wt,Dt,te,Ct,mt);It.bindFramebuffer(H.READ_FRAMEBUFFER,null),It.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ki?v.isDataTexture||v.isData3DTexture?H.texSubImage3D($t,lt,Vt,Wt,xe,Ct,mt,wt,Ie,Ge,be.data):T.isCompressedArrayTexture?H.compressedTexSubImage3D($t,lt,Vt,Wt,xe,Ct,mt,wt,Ie,be.data):H.texSubImage3D($t,lt,Vt,Wt,xe,Ct,mt,wt,Ie,Ge,be):v.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,lt,Vt,Wt,Ct,mt,Ie,Ge,be.data):v.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,lt,Vt,Wt,be.width,be.height,Ie,be.data):H.texSubImage2D(H.TEXTURE_2D,lt,Vt,Wt,Ct,mt,Ie,Ge,be);It.pixelStorei(H.UNPACK_ROW_LENGTH,dn),It.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Re),It.pixelStorei(H.UNPACK_SKIP_PIXELS,Bi),It.pixelStorei(H.UNPACK_SKIP_ROWS,on),It.pixelStorei(H.UNPACK_SKIP_IMAGES,ca),lt===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0&&H.generateMipmap($t),It.unbindTexture()},this.initRenderTarget=function(v){zt.get(v).__webglFramebuffer===void 0&&Jt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Jt.setTextureCube(v,0):v.isData3DTexture?Jt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Jt.setTexture2DArray(v,0):Jt.setTexture2D(v,0),It.unbindTexture()},this.resetState=function(){q=0,Z=0,at=null,It.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var $u={type:"change"},zc={type:"start"},Qu={type:"end"},ll=new wi,ju=new fn,S_=Math.cos(70*fi.DEG2RAD),Ze=new N,_n=2*Math.PI,Pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kc=1e-6,cl=class extends Vr{constructor(t,e=null){super(t,e),this.state=Pe.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new tn,this._lastTargetPosition=new N,this._quat=new tn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ks,this._sphericalDelta=new ks,this._scale=1,this._panOffset=new N,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new N,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w_.bind(this),this._onPointerDown=b_.bind(this),this._onPointerUp=T_.bind(this),this._onContextMenu=L_.bind(this),this._onMouseWheel=C_.bind(this),this._onKeyDown=R_.bind(this),this._onTouchStart=P_.bind(this),this._onTouchMove=I_.bind(this),this._onMouseDown=E_.bind(this),this._onMouseMove=A_.bind(this),this._interceptControlDown=D_.bind(this),this._interceptControlUp=N_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Pe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($u),this.update(),this.state=Pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ze.copy(e).sub(this.target),Ze.applyQuaternion(this._quat),this._spherical.setFromVector3(Ze),this.autoRotate&&this.state===Pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ze.setFromSpherical(this._spherical),Ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ze.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ll.origin.copy(this.object.position),ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ll.direction))<S_?this.object.lookAt(this.target):(ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),ll.intersectPlane(ju,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kc||this._lastTargetPosition.distanceToSquared(this.target)>kc?(this.dispatchEvent($u),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ze.setFromMatrixColumn(e,0),Ze.multiplyScalar(-t),this._panOffset.add(Ze)}_panUp(t,e){this.screenSpacePanning===!0?Ze.setFromMatrixColumn(e,1):(Ze.setFromMatrixColumn(e,0),Ze.crossVectors(this.object.up,Ze)),Ze.multiplyScalar(t),this._panOffset.add(Ze)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ze.copy(s).sub(this.target);let r=Ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function b_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function w_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function T_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qu),this.state=Pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function E_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Pe.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pe.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pe.PAN}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(zc)}function A_(i){switch(this.state){case Pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function C_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Pe.NONE||(i.preventDefault(),this.dispatchEvent(zc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qu))}function R_(i){this.enabled!==!1&&this._handleKeyDown(i)}function P_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1){this.state=Pe.NONE;break}this._handleTouchStartRotate(i),this.state=Pe.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1){this.state=Pe.NONE;break}this._handleTouchStartPan(i),this.state=Pe.TOUCH_PAN;break;default:this.state=Pe.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Pe.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Pe.TOUCH_DOLLY_ROTATE;break;default:this.state=Pe.NONE}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(zc)}function I_(i){switch(this._trackPointer(i),this.state){case Pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Pe.NONE}}function L_(i){this.enabled!==!1&&i.preventDefault()}function D_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function N_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ys={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},U_=new ji(-1,1,1,-1,0,1),Gc=class extends Be{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}},F_=new Gc,Fi=class{constructor(t){this._mesh=new ie(F_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,U_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hl=class extends En{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Tn.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Fi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var aa=class extends En{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ul=class extends En{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var dl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hl(Ys),this.copyPass.material.blending=hi,this.timer=new zr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}aa!==void 0&&(a instanceof aa?n=!0:a instanceof ul&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fl=class extends En{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ee}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var td={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Zs=class i extends En{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ze(r,a,{type:Xe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new ze(r,a,{type:Xe,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new ze(r,a,{type:Xe,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=td;this.highPassUniforms=Tn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new xt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Tn.clone(Ys.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:Ys.vertexShader,fragmentShader:Ys.fragmentShader,premultipliedAlpha:!0,blending:ts,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ee,this._oldClearAlpha=1,this._basic=new Ln,this._fsQuad=new Fi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ke({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Zs.BlurDirectionX=new xt(1,0);Zs.BlurDirectionY=new xt(0,1);var oa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var pl=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=Tn.clone(oa.uniforms),this.material=new Us({name:oa.name,uniforms:this.uniforms,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader}),this._fsQuad=new Fi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ve.getTransfer(this._outputColorSpace)===Ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ns?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vc={volta:{id:"volta",brand:"PKM Motors",name:"Volta",trim:"Double Cab 2.8D 4x4",tagline:"Built for laterite, loads and long weekends.",chips:["2.8L turbo-diesel","150 kW \xB7 500 Nm","6-speed auto","Shift-on-the-fly 4WD"],width:1.88,wheelbase:3.08,front:2.52,rear:-2.8,track:1.58,tyreR:.392,tyreW:.27,archR:.49,archY:.42,sill:.47,belt:1.18,roof:1.84,mass:2150,power:150,torque:500,idle:780,redline:4e3,shiftUp:3300,shiftDown:1500,gears:[4.71,2.84,1.79,1.39,1,.78],finalDrive:3.73,top:49,engine:"diesel",horn:[404,508],paints:[{name:"Savanna Olive",hex:"#5d6449",metal:.35},{name:"Laterite Red",hex:"#7a2f22",metal:.45},{name:"Harmattan White",hex:"#e9e7e1",metal:.05},{name:"Graphite",hex:"#2f3236",metal:.6},{name:"Volta Blue",hex:"#1e3d5c",metal:.55},{name:"Kente Gold",hex:"#a9884a",metal:.7}]},regent:{id:"regent",brand:"PKM Motors",name:"Regent",trim:"Platinum V8 AWD",tagline:"Quiet power for state visits and school runs.",chips:["6.2L V8","313 kW \xB7 624 Nm","10-speed auto","Air ride suspension"],width:2.06,wheelbase:3.07,front:2.52,rear:-2.88,track:1.74,tyreR:.405,tyreW:.285,archR:.475,archY:.43,sill:.44,belt:1.25,roof:1.93,mass:2700,power:313,torque:624,idle:620,redline:6e3,shiftUp:5400,shiftDown:2e3,gears:[4.7,2.99,2.15,1.77,1.52,1.28,1,.85,.69,.64],finalDrive:3.23,top:59,engine:"v8",horn:[350,440],paints:[{name:"Obsidian Black",hex:"#0d0e10",metal:.4},{name:"Ridge Silver",hex:"#a7abae",metal:.85},{name:"Pearl White",hex:"#eeece6",metal:.15},{name:"Midnight Navy",hex:"#141e30",metal:.6},{name:"Cocoa Bronze",hex:"#4a3428",metal:.7},{name:"Jubilee Green",hex:"#1d3b2c",metal:.55}]}},ml=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function ed(i,t,e={}){let n=Vc[t],s=!!i.ColorManagement,r=s?1:.06,a=R=>{let V=new i.Color(R);return s||V.convertSRGBToLinear(),V},o=R=>("colorSpace"in R?R.colorSpace=i.SRGBColorSpace:R.encoding=i.sRGBEncoding,R),l=(R,V,J)=>{let $=document.createElement("canvas");return $.width=R,$.height=V,J($.getContext("2d"),R,V),$},c=t==="regent",u=n.width,f=u/2,h=n.belt,p=n.roof,_=n.wheelbase/2,b=new i.MeshPhysicalMaterial({color:a(n.paints[0].hex),metalness:n.paints[0].metal,roughness:.32,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),d={paint:b,black:new i.MeshStandardMaterial({color:a("#121314"),roughness:.55,metalness:.1}),piano:new i.MeshPhysicalMaterial({color:a("#050506"),roughness:.12,metalness:.2,clearcoat:1,clearcoatRoughness:.05}),trim:new i.MeshStandardMaterial({color:a("#1b1c1d"),roughness:.85,metalness:0}),chrome:new i.MeshStandardMaterial({color:a("#dfe3e6"),roughness:.06,metalness:1,envMapIntensity:1.6}),satin:new i.MeshStandardMaterial({color:a("#9ea3a6"),roughness:.32,metalness:1}),glass:new i.MeshPhysicalMaterial({color:a("#05080a"),roughness:.02,metalness:.3,transparent:!0,opacity:.86,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:0}),lens:new i.MeshPhysicalMaterial({color:a("#e8eef2"),roughness:.02,metalness:0,transparent:!0,opacity:.35,clearcoat:1}),head:new i.MeshStandardMaterial({color:a("#f4f7fb"),emissive:a("#ffffff"),emissiveIntensity:.6,roughness:.25,metalness:.4}),drl:new i.MeshStandardMaterial({color:a("#ffffff"),emissive:a("#eef4ff"),emissiveIntensity:2.2,roughness:.3}),tail:new i.MeshStandardMaterial({color:a("#5a0b0b"),emissive:a("#ff1a10"),emissiveIntensity:.55,roughness:.2,metalness:.2}),amber:new i.MeshStandardMaterial({color:a("#6b3d07"),emissive:a("#ff8a00"),emissiveIntensity:0,roughness:.25}),reverse:new i.MeshStandardMaterial({color:a("#bfc4c8"),emissive:a("#ffffff"),emissiveIntensity:0,roughness:.2}),tyre:null,rim:null,interior:new i.MeshStandardMaterial({color:a(c?"#3a2a20":"#232425"),roughness:.78}),leather:new i.MeshStandardMaterial({color:a(c?"#8b6a4f":"#36383a"),roughness:.6}),aperture:new i.MeshStandardMaterial({color:a("#141414"),roughness:.9}),under:new i.MeshStandardMaterial({color:a("#0b0b0b"),roughness:.95}),disc:new i.MeshStandardMaterial({color:a("#6d6f70"),roughness:.45,metalness:.9}),caliper:new i.MeshStandardMaterial({color:a(c?"#141414":"#8f1d18"),roughness:.4,metalness:.3})},m=l(2048,256,(R,V,J)=>{R.fillStyle="#7a7a7a",R.fillRect(0,0,V,J);let $=72;for(let tt=0;tt<$;tt++){let At=tt/$*V;R.fillStyle="#2a2a2a",R.fillRect(At+4,J*.36,V/$*.42,J*.11),R.fillRect(At+V/$*.45,J*.49,V/$*.42,J*.11),c||R.fillRect(At+2,J*.3,V/$*.2,J*.38)}}),y=l(2048,256,(R,V,J)=>{R.fillStyle="#191919",R.fillRect(0,0,V,J),R.fillStyle="#2b2b2b",R.font="700 46px Inter, Arial, sans-serif",R.textBaseline="middle";let $=c?"PKM GRAND TOURING  \xB7  285/45 R22  \xB7  ":"PKM TERRA A/T  \xB7  265/65 R17  \xB7  ";for(let tt=0;tt<2;tt++)R.fillText($,tt*V/2+40,J*.15);for(let tt=0;tt<2;tt++)R.fillText($,tt*V/2+40,J*.85)}),w=new i.CanvasTexture(m);w.wrapS=i.RepeatWrapping;let M=o(new i.CanvasTexture(y));M.wrapS=i.RepeatWrapping,d.tyre=new i.MeshStandardMaterial({color:a("#1c1c1c"),roughness:.9,bumpMap:w,bumpScale:2.5,map:M}),d.rim=new i.MeshPhysicalMaterial({color:a(c?"#d9dcdf":"#3a3d40"),metalness:1,roughness:c?.12:.35,clearcoat:.6});let C=o(new i.CanvasTexture(l(256,256,(R,V)=>{let J=V/2,$=R.createLinearGradient(0,0,V,V);$.addColorStop(0,"#f3f3f3"),$.addColorStop(.5,"#9b9b9b"),$.addColorStop(1,"#e8e8e8"),R.fillStyle=$,R.beginPath(),R.arc(J,J,J-4,0,7),R.fill(),R.fillStyle="#121212",R.beginPath(),R.arc(J,J,J-22,0,7),R.fill(),R.fillStyle="#d9c7a3",R.font="800 82px Inter, Arial, sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText("PKM",J,J+4)})));d.emblem=new i.MeshStandardMaterial({map:C,metalness:.6,roughness:.25});let E=new i.Group;E.name="PKM "+n.name;let g=new i.Group;g.rotation.y=-Math.PI/2,E.add(g);let S=new i.Group;g.add(S);let F=[],A=(R,V,J=S,$=!0)=>{let tt=new i.Mesh(R,V);return tt.castShadow=$,tt.receiveShadow=!0,J.add(tt),tt},I=(R,V,J,$,tt,At,Rt,v=S)=>{let T=A(new i.BoxGeometry(R,V,J),Rt,v);return T.position.set($,tt,At),T},B=(R,V,J,$,tt,At=S)=>{let Rt=new i.Shape,v=-R/2,T=-V/2;$=Math.min($,R/2-.001,V/2-.001),Rt.moveTo(v+$,T),Rt.lineTo(v+R-$,T),Rt.quadraticCurveTo(v+R,T,v+R,T+$),Rt.lineTo(v+R,T+V-$),Rt.quadraticCurveTo(v+R,T+V,v+R-$,T+V),Rt.lineTo(v+$,T+V),Rt.quadraticCurveTo(v,T+V,v,T+V-$),Rt.lineTo(v,T+$),Rt.quadraticCurveTo(v,T,v+$,T);let k=Math.min($,J/2-.001)*.9,z=new i.ExtrudeGeometry(Rt,{depth:Math.max(.001,J-2*k),bevelEnabled:!0,bevelThickness:k,bevelSize:k,bevelOffset:-k,bevelSegments:3,curveSegments:6});return z.translate(0,0,-(J-2*k)/2),A(z,tt,At)};function j(R){let V=R.index?R.toNonIndexed():R,J=V.attributes.position,$=J.count,tt=new Float32Array($),At=new Map,Rt=new Array($),v=new i.Vector3,T=new i.Vector3,k=new i.Vector3,z=[];for(let wt=0;wt<$/3;wt++)v.fromBufferAttribute(J,wt*3),T.fromBufferAttribute(J,wt*3+1),k.fromBufferAttribute(J,wt*3+2),z.push(new i.Vector3().subVectors(k,T).cross(new i.Vector3().subVectors(v,T)));for(let wt=0;wt<$;wt++){let Dt=Math.round(J.getX(wt)*2e3)+"_"+Math.round(J.getY(wt)*2e3)+"_"+Math.round(J.getZ(wt)*2e3);Rt[wt]=Dt;let te=At.get(Dt);te||At.set(Dt,te=[]),te.push(wt)}let U=new Float32Array($*3),lt=Math.cos(.62),Ct=new i.Vector3,mt=new i.Vector3;for(let wt=0;wt<$;wt++){let Dt=z[wt/3|0];mt.copy(Dt).normalize(),Ct.set(0,0,0);for(let te of At.get(Rt[wt])){let Yt=z[te/3|0];mt.dot(k.copy(Yt).normalize())>lt&&Ct.add(Yt)}Ct.normalize(),U[wt*3]=Ct.x,U[wt*3+1]=Ct.y,U[wt*3+2]=Ct.z}return V.setAttribute("normal",new i.BufferAttribute(U,3)),V}function L(R){let V=R.attributes.position,J=new Map,$=[],tt=[],At=R.index?R.index.array:null,Rt=At?At.length:V.count;for(let T=0;T<Rt;T++){let k=At?At[T]:T,z=V.getX(k),U=V.getY(k),lt=V.getZ(k),Ct=Math.round(z*2e3)+"_"+Math.round(U*2e3)+"_"+Math.round(lt*2e3),mt=J.get(Ct);mt===void 0&&(mt=tt.length/3,tt.push(z,U,lt),J.set(Ct,mt)),$.push(mt)}let v=new i.BufferGeometry;return v.setAttribute("position",new i.Float32BufferAttribute(tt,3)),v.setIndex($),v.computeVertexNormals(),v}let G=n.front,q=n.rear;function Z(R,V,J){let $=1;return $-=.11*ml(G-.55,G,R)**1.4,$-=.06*ml(q+.45,q,R)**1.4,J?$-=.15*Math.max(0,Math.min(1,(V-h)/(p-h))):($-=.035*ml(h-.3,h,V),$-=.03*ml(.7,n.sill,V)),f*$}function at(R,V){let J=R.getPoints(V),$=[];for(let tt=0;tt<J.length;tt++){let At=J[tt],Rt=J[(tt+1)%J.length];$.push(At);let v=At.distanceTo(Rt),T=Math.floor(v/.1);for(let k=1;k<T;k++)$.push(At.clone().lerp(Rt,k/T))}return $.length>1&&$[0].distanceTo($[$.length-1])<1e-4&&$.pop(),new i.Shape($)}function rt(R,V,J){let $=Array.from((R.index?R.toNonIndexed():R).attributes.position.array);for(let At=0;At<J;At++){let Rt=[],v=U=>[$[U*3],$[U*3+1],$[U*3+2]],T=(U,lt)=>[(U[0]+lt[0])/2,(U[1]+lt[1])/2,(U[2]+lt[2])/2],k=(U,lt)=>Math.hypot(U[0]-lt[0],U[1]-lt[1],U[2]-lt[2]),z=!1;for(let U=0;U<$.length/9;U++){let lt=v(U*3),Ct=v(U*3+1),mt=v(U*3+2),wt=k(lt,Ct)>V,Dt=k(Ct,mt)>V,te=k(mt,lt)>V,Yt=(Wt,xe,be)=>Rt.push(...Wt,...xe,...be),Vt=wt+Dt+te;if(Vt&&(z=!0),Vt===0)Yt(lt,Ct,mt);else if(Vt===3){let Wt=T(lt,Ct),xe=T(Ct,mt),be=T(mt,lt);Yt(lt,Wt,be),Yt(Wt,Ct,xe),Yt(be,xe,mt),Yt(Wt,xe,be)}else if(Vt===1)if(wt){let Wt=T(lt,Ct);Yt(lt,Wt,mt),Yt(Wt,Ct,mt)}else if(Dt){let Wt=T(Ct,mt);Yt(lt,Ct,Wt),Yt(lt,Wt,mt)}else{let Wt=T(mt,lt);Yt(lt,Ct,Wt),Yt(Wt,Ct,mt)}else if(wt)if(Dt){let Wt=T(lt,Ct),xe=T(Ct,mt);Yt(lt,Wt,mt),Yt(Wt,xe,mt),Yt(Wt,Ct,xe)}else{let Wt=T(lt,Ct),xe=T(mt,lt);Yt(lt,Wt,xe),Yt(Wt,Ct,mt),Yt(Wt,mt,xe)}else{let Wt=T(Ct,mt),xe=T(mt,lt);Yt(lt,Ct,Wt),Yt(lt,Wt,xe),Yt(xe,Wt,mt)}}if($=Rt,!z)break}let tt=new i.BufferGeometry;return tt.setAttribute("position",new i.Float32BufferAttribute($,3)),tt}function ht(R,V,J,$=28){let tt=J?.05:.075,At=at(R,$),Rt=new i.ExtrudeGeometry(At,{depth:V-2*tt,steps:1,bevelEnabled:!0,bevelThickness:tt,bevelSize:tt*.85,bevelOffset:-tt*.85,bevelSegments:5,curveSegments:$}),v=rt(Rt,.2,6),T=v.attributes.position,k=V/2,z=V/u,U=new Int8Array(T.count);for(let Dt=0;Dt<T.count;Dt++){let te=T.getX(Dt),Yt=T.getY(Dt),Vt=T.getZ(Dt)-(V-2*tt)/2;Math.abs(Math.abs(Vt)-k)<1e-4&&(U[Dt]=Math.sign(Vt)),T.setZ(Dt,Vt/k*Z(te,Yt,J)*z)}let lt=j(v),Ct=lt.attributes.normal,mt=.01,wt=new i.Vector3;for(let Dt=0;Dt<T.count;Dt++)if(U[Dt]){let te=T.getX(Dt),Yt=T.getY(Dt),Vt=(Z(te+mt,Yt,J)-Z(te-mt,Yt,J))/(2*mt)*z,Wt=(Z(te,Yt+mt,J)-Z(te,Yt-mt,J))/(2*mt)*z;wt.set(-Vt*U[Dt],-Wt*U[Dt],1*U[Dt]).normalize(),Ct.setXYZ(Dt,wt.x,wt.y,wt.z)}return lt}let dt=(R,V,J)=>{let $=n.archR,tt=n.archY,At=Math.asin(Math.min(1,(n.sill-tt)/$));J>0?R.absarc(V,tt,$,Math.PI-At,At,!0):R.absarc(V,tt,$,At,Math.PI-At,!1)},nt=(R,V,J,$,tt,At,Rt)=>{let v=new i.Shape,T=n.sill;return tt?v.moveTo(R+.08,T-.02):v.moveTo(R,T),Rt&&(v.lineTo(-_-n.archR-.01,T),dt(v,-_,1)),At&&(v.lineTo(_-n.archR-.01,T),dt(v,_,1)),$?(v.lineTo(V-.1,T-.04),v.quadraticCurveTo(V+.005,T-.02,V+.01,T+.14),J.front(v)):(v.lineTo(V,T),v.lineTo(V,J.h1)),J.top(v),tt?(v.lineTo(R+.005,J.h0-.06),v.quadraticCurveTo(R-.01,(J.h0+T)/2,R+.01,T+.12),v.quadraticCurveTo(R,T-.02,R+.08,T-.02)):v.lineTo(R,T),v},ot=c?1.16:1.06,X=c?.92:.96,gt={front:R=>{R.lineTo(G+.02,c?.96:.86),R.quadraticCurveTo(G+.02,ot+.02,G-.08,ot)}},yt;if(c){yt=q;let R=new i.Shape;R.moveTo(q+.08,n.sill-.02),R.lineTo(-_-n.archR-.01,n.sill),dt(R,-_,1),R.lineTo(_-n.archR-.01,n.sill),dt(R,_,1),R.lineTo(G-.1,n.sill-.04),R.quadraticCurveTo(G+.005,n.sill-.02,G+.01,n.sill+.14),gt.front(R),R.lineTo(X,h),R.lineTo(q+.04,h-.01),R.quadraticCurveTo(q-.01,h-.03,q-.005,h-.12),R.lineTo(q-.01,n.sill+.12),R.quadraticCurveTo(q,n.sill-.02,q+.08,n.sill-.02),A(ht(R,u,!1),b)}else{yt=-1.32,gt.h0=h,gt.h1=h,gt.top=Rt=>{Rt.quadraticCurveTo(X+.6,h+.03,X,h),Rt.lineTo(yt,h)};let R=new i.Shape;R.moveTo(yt,n.sill),R.lineTo(_-n.archR-.01,n.sill),dt(R,_,1),R.lineTo(G-.1,n.sill-.04),R.quadraticCurveTo(G+.005,n.sill-.02,G+.01,n.sill+.14),gt.front(R),R.lineTo(X,h),R.lineTo(yt,h),R.lineTo(yt,n.sill),A(ht(R,u,!1),b);let V=.94,J=q,$=yt-.03,tt=new i.Shape;tt.moveTo(J+.06,n.sill),tt.lineTo(-_-n.archR-.01,n.sill),dt(tt,-_,1),tt.lineTo($,n.sill),tt.lineTo($,V),tt.lineTo(J+.02,V),tt.quadraticCurveTo(J,V,J,V-.05),tt.lineTo(J,n.sill+.06),tt.quadraticCurveTo(J,n.sill,J+.06,n.sill),A(ht(tt,u,!1),b);for(let Rt of[-1,1]){let v=new i.Shape;v.moveTo(J+.03,V-.02),v.lineTo($,V-.02),v.lineTo($,h),v.lineTo(J+.03,h-.01);let T=new i.ExtrudeGeometry(v,{depth:.05,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelOffset:-.015,bevelSegments:2}),k=A(T,b);k.position.z=Rt>0?Z(-2,1)-.065:-Z(-2,1)+.015,I($-J-.05,.035,.09,(J+$)/2,h+.01,Rt*(Z(-2,1)-.04),d.black)}I(.06,h-V,u-.16,$-.02,(h+V)/2,0,b),I($-J-.1,.012,u-.2,(J+$)/2,V+.006,0,d.trim);for(let Rt=0;Rt<6;Rt++)I($-J-.12,.02,.05,(J+$)/2,V+.02,-.65+Rt*.26,d.trim);for(let Rt of[-1,1])A(new i.CylinderGeometry(.035,.035,.42,12),d.black).position.set($-.12,h+.2,Rt*(f-.14));let At=A(new i.CylinderGeometry(.035,.035,u-.28,12),d.black);At.rotation.x=Math.PI/2,At.position.set($-.12,h+.41,0);for(let Rt of[_,-_])for(let v of[-1,1]){let T=new i.Shape,k=n.archR+.005,z=n.archR+.075;T.absarc(0,0,z,Math.PI+.12,-.12,!0),T.absarc(0,0,k,-.12,Math.PI+.12,!1);let U=new i.ExtrudeGeometry(T,{depth:.05,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelOffset:-.012,bevelSegments:2,curveSegments:24});A(U,d.trim).position.set(Rt,n.archY,v>0?Z(Rt,.8)-.03:-Z(Rt,.8)-.03)}}let Bt=new i.Shape,_t=c?.06:.16,Nt=c?q+.2:yt+.12,fe=c?q+.04:yt+.02;Bt.moveTo(fe,h-.02),Bt.lineTo(X-.02,h-.02),Bt.quadraticCurveTo((X+_t)/2+.05,(h+p)/2-.02,_t,p-.04),Bt.quadraticCurveTo(_t-.18,p+.005,_t-.4,p),Bt.lineTo(Nt+.25,p-.005),Bt.quadraticCurveTo(Nt,p-.01,Nt-(c?.1:.06),p-.08),Bt.lineTo(fe,h-.02);let Xt=u-.06;A(ht(Bt,Xt,!0,24),d.glass);let qt=new i.Shape;qt.moveTo(_t-.05,p-.05),qt.quadraticCurveTo(_t-.18,p+.012,_t-.4,p+.008),qt.lineTo(Nt+.25,p+.003),qt.quadraticCurveTo(Nt+.005,p-.004,Nt-(c?.09:.05),p-.08),qt.lineTo(Nt-(c?.06:.02),p-.1),qt.lineTo(_t-.05,p-.1),A(ht(qt,Xt+.012,!0,16),b);let le=(R,V)=>Z(R,V,!0)*(Xt/u)+.004,ct=(R,V,J,$,tt,At,Rt)=>{let v=new i.Vector3(R,V,Rt*le(R,V)),T=new i.Vector3(J,$,Rt*le(J,$)),k=v.distanceTo(T),z=A(new i.BoxGeometry(k,tt,.012),At);z.position.copy(v).add(T).multiplyScalar(.5),z.quaternion.setFromUnitVectors(new i.Vector3(1,0,0),T.clone().sub(v).normalize());let U=new i.Vector3(0,0,Rt);return z.rotation.x+=Rt*-.14*0,z},pt=c?[.98,-.25,-1.5]:[.98,-.2,yt];for(let R of[-1,1]){ct(X-.03,h+.02,_t-.03,p-.06,.07,b,R),ct(pt[1]+.02,h+.02,pt[1]-.04,p-.06,.09,d.piano,R),c?(ct(pt[2],h+.02,pt[2]-.05,p-.06,.12,d.piano,R),ct(q+.3,h+.02,Nt+.05,p-.06,.22,b,R)):ct(yt+.07,h+.02,Nt-.02,p-.07,.12,b,R);let V=I(X-fe-.06,.03,.02,(X+fe)/2,h+.008,R*(Z(0,h)-.01),c?d.chrome:d.black);V.position.z=R*(le(0,h+.01)+.012),c&&ct(_t-.45,p-.085,q+.45,p-.095,.022,d.chrome,R)}for(let R of[-.45,.15]){let V=I(.02,.012,.62,X+.02,h+.03,R,d.black);V.rotation.y=.18}let Tt={};function Ft(R,V,J,$,tt){let At=new i.Group,Rt=$*(Z((V+J)/2,.85)+.002);At.position.set(tt?J:V,0,Rt),S.add(At);let v=n.sill+.04,T=h-.03,k=new i.Shape,z=tt?-(J-V):0,U=tt?0:J-V,lt=tt?J:V,Ct=Wt=>{let xe=Wt+lt,be=v;for(let Ie of[_,-_]){let Ge=xe-Ie;Math.abs(Ge)<n.archR+.05&&(be=Math.max(be,n.archY+Math.sqrt(Math.max(0,(n.archR+.05)**2-Ge*Ge))+.015))}return Math.min(be,T-.15)};k.moveTo(z+.01,Ct(z+.01));for(let Wt=1;Wt<=24;Wt++){let xe=z+.01+(U-z-.02)*Wt/24;k.lineTo(xe,Ct(xe))}k.lineTo(U-.005,T),k.lineTo(z+.005,T),k.lineTo(z+.01,Ct(z+.01));let mt=new i.ExtrudeGeometry(k,{depth:.022,bevelEnabled:!0,bevelThickness:.008,bevelSize:.01,bevelOffset:-.01,bevelSegments:2});mt.translate(0,0,$>0?-.012:-.01);let wt=A(mt,b,At);A(new i.BoxGeometry(J-V-.06,T-v-.06,.04),d.interior,At).position.set((z+U)/2,(v+T)/2,-$*.03);let te=tt?z+.22:U-.22;A(new i.BoxGeometry(.2,.035,.03),c?d.chrome:d.black,At).position.set(te,T-.13,$*.022);let Vt=A(new i.PlaneGeometry(J-V-.08,T-v-.04),d.aperture);return Vt.position.set((V+J)/2,(v+T)/2,Rt-$*.006),Vt.rotation.y=$>0?0:Math.PI,At.userData={axis:"y",open:0,target:0,max:$*(tt?-1.1:1.1)*-1},wt.userData.panel=R,F.push(wt),Tt[R]=At,At}Ft("frontLeft",pt[1]+.01,pt[0],-1,!0),Ft("frontRight",pt[1]+.01,pt[0],1,!0),Ft("rearLeft",pt[2]+.02,pt[1]-.01,-1,!0),Ft("rearRight",pt[2]+.02,pt[1]-.01,1,!0);for(let R of["frontLeft","frontRight","rearLeft","rearRight"]){let V=Tt[R],J=R.endsWith("Left")?-1:1;V.userData.max=J*1.15,V.userData.sign=1}{let R=new i.Group;R.position.set(X-.02,h+.004,0),S.add(R);let V=G-.12-X,J=Math.atan2(ot-h,V),$=new i.Shape,tt=Z(X+V/2,h)-.06;$.moveTo(0,-tt),$.lineTo(V,-tt+.07),$.quadraticCurveTo(V+.04,0,V,tt-.07),$.lineTo(0,tt),$.lineTo(0,-tt);let At=new i.ExtrudeGeometry($,{depth:.02,bevelEnabled:!0,bevelThickness:.01,bevelSize:.02,bevelOffset:-.02,bevelSegments:3});At.rotateX(Math.PI/2),At.translate(0,.02,0);let Rt=A(At,b,R);Rt.rotation.z=J;let v=B(V*.6,.02,c?.9:.75,.02,b,R);v.position.set(V*.45,.025+Math.sin(J)*V*.45,0),v.rotation.z=J,R.userData={axis:"z",open:0,target:0,max:.9},Rt.userData.panel="hood",F.push(Rt,v),Tt.hood=R;let T=I(V-.2,.2,u-.5,X+V/2,Math.min(h,ot)-.16,0,d.under);B(.6,.18,.7,.04,d.satin).position.set(X+V*.55,h-.16,0),B(.48,.05,.56,.03,d.piano).position.set(X+V*.55,h-.07,0)}if(c){let R=new i.Group;R.position.set(Nt-.05,p-.07,0),S.add(R);let V=p-.07-.58,J=B(.07,V,u-.16,.04,b,R);J.position.set(-.13,-V/2,0),J.rotation.z=-.06;let $=B(.02,V*.36,u-.46,.04,d.glass,R);$.position.set(-.17,-V*.25,0),$.rotation.z=-.06;let tt=Pt("REGENT",.7,.09);tt.position.set(-.175,-V*.62,0),tt.rotation.y=-Math.PI/2,R.add(tt);let At=A(new i.CircleGeometry(.065,32),d.emblem,R);At.position.set(-.176,-V*.52,0),At.rotation.y=-Math.PI/2,R.userData={axis:"z",open:0,target:0,max:-1.2},J.userData.panel="tailgate",F.push(J),Tt.tailgate=R}else{let R=new i.Group;R.position.set(q+.02,.96,0),S.add(R);let V=B(.06,h-.96,u-.08,.02,b,R);V.position.set(0,(h-.96)/2,0);let J=I(.03,.04,.24,-.03,h-.96-.08,0,d.black,R),$=Pt("VOLTA",.6,.09);$.position.set(-.032,.11,0),$.rotation.y=-Math.PI/2,R.add($),R.userData={axis:"z",open:0,target:0,max:Math.PI/2},V.userData.panel="tailgate",F.push(V),Tt.tailgate=R}function Pt(R,V,J){let $=o(new i.CanvasTexture(l(512,80,(tt,At,Rt)=>{tt.clearRect(0,0,At,Rt),tt.fillStyle="#ffffff",tt.font="700 58px Inter, Arial, sans-serif",tt.textAlign="center",tt.textBaseline="middle","letterSpacing"in tt&&(tt.letterSpacing="22px"),tt.fillText(R,At/2,Rt/2+2)})));return new i.Mesh(new i.PlaneGeometry(V,J),new i.MeshStandardMaterial({map:$,transparent:!0,metalness:1,roughness:.15,color:a("#e8e8e8")}))}let Gt=new i.Group;Gt.position.set(G+.012,0,0),S.add(Gt);let kt=c?.62:.58,jt=ot-.05;if(c){let R=new i.CanvasTexture(l(512,256,(T,k,z)=>{T.fillStyle="#050505",T.fillRect(0,0,k,z),T.strokeStyle="#ffffff",T.lineWidth=5;for(let U=-z;U<k+z;U+=26)T.beginPath(),T.moveTo(U,0),T.lineTo(U+z,z),T.stroke(),T.beginPath(),T.moveTo(U,z),T.lineTo(U+z,0),T.stroke()})),V=new i.MeshStandardMaterial({color:a("#9c9fa2"),metalnessMap:R,metalness:1,roughness:.18,map:o(R)}),J=1.25,$=jt-kt-.05,tt=A(new i.PlaneGeometry(J,$),V,Gt);tt.rotation.y=Math.PI/2,tt.position.set(.004,(kt+jt)/2,0);for(let[T,k,z,U]of[[J+.06,.035,jt-.02,0],[J+.06,.035,kt+.02,0]])I(.03,k,T,.01,z,U,d.chrome,Gt);for(let T of[-J/2-.015,J/2+.015])I(.03,$+.06,.035,.01,(kt+jt)/2,T,d.chrome,Gt);let At=A(new i.CircleGeometry(.075,40),d.emblem,Gt);At.rotation.y=Math.PI/2,At.position.set(.03,(kt+jt)/2+.03,0);for(let T of[-1,1]){let k=I(.03,.42,.045,-.005,jt-.2,T*(f-.14),d.drl,Gt);B(.05,.1,.32,.03,d.piano,Gt).position.set(-.01,jt-.06,T*(f-.3));for(let U=0;U<3;U++){let lt=A(new i.CylinderGeometry(.03,.03,.02,20),d.head,Gt);lt.rotation.z=Math.PI/2,lt.position.set(.02,jt-.06,T*(f-.4+U*.09))}I(.03,.18,.03,-.004,jt-.4,T*(f-.14),d.amber,Gt).userData.ind=T}B(.12,.26,u-.12,.06,b,Gt).position.set(-.04,.5,0),I(.02,.025,u-.5,.025,.47,0,d.chrome,Gt),B(.04,.1,1.2,.03,d.black,Gt).position.set(0,.43,0)}else{B(.06,jt-kt,1.12,.05,d.piano,Gt).position.set(0,(kt+jt)/2,0);for(let tt=0;tt<4;tt++)I(.025,.035,1,.025,kt+.08+tt*.1,0,tt===1?d.chrome:d.black,Gt);let V=A(new i.CircleGeometry(.07,40),d.emblem,Gt);V.rotation.y=Math.PI/2,V.position.set(.045,kt+.21,0);for(let tt of[-1,1]){let At=B(.05,.13,.4,.04,d.piano,Gt);At.position.set(-.02,jt-.07,tt*(f-.29)),At.rotation.y=tt*.18;let Rt=I(.02,.022,.38,.012,jt-.015,tt*(f-.3),d.drl,Gt);Rt.rotation.y=tt*.18;for(let T=0;T<2;T++){let k=A(new i.CylinderGeometry(.034,.034,.02,20),d.head,Gt);k.rotation.z=Math.PI/2,k.position.set(.012,jt-.08,tt*(f-.36+T*.12))}I(.02,.03,.12,0,jt-.15,tt*(f-.2),d.amber,Gt).userData.ind=tt;let v=A(new i.CylinderGeometry(.04,.04,.03,20),d.head,Gt);v.rotation.z=Math.PI/2,v.position.set(-.03,.47,tt*(f-.3))}B(.14,.24,u-.08,.05,d.trim,Gt).position.set(-.04,.48,0);let $=B(.08,.1,.9,.04,d.satin,Gt);$.position.set(-.02,.36,0),$.rotation.z=-.4;for(let tt of[-.4,.4]){let At=A(new i.TorusGeometry(.035,.012,8,16),d.caliper,Gt);At.position.set(.04,.42,tt),At.rotation.y=Math.PI/2}}let ne=o(new i.CanvasTexture(l(1040,224,(R,V,J)=>{R.fillStyle="#fbfbf7",R.beginPath(),R.moveTo(18,0),R.arcTo(V,0,V,J,18),R.arcTo(V,J,0,J,18),R.arcTo(0,J,0,0,18),R.arcTo(0,0,V,0,18),R.fill();let tt=R.createLinearGradient(0,0,0,J);tt.addColorStop(0,"rgba(255,255,255,.6)"),tt.addColorStop(1,"rgba(0,0,0,.06)"),R.fillStyle=tt,R.fillRect(0,0,V,J),R.strokeStyle="#111",R.lineWidth=10,R.strokeRect(14,14,V-28,J-28),R.fillStyle="#ce1126",R.fillRect(30,30,92,54),R.fillStyle="#fcd116",R.fillRect(30,84,92,54),R.fillStyle="#006b3f",R.fillRect(30,138,92,54),R.fillStyle="#000",R.beginPath();for(let At=0;At<10;At++){let Rt=-Math.PI/2+At*Math.PI/5,v=At%2?7:17;R.lineTo(76+Math.cos(Rt)*v,111+Math.sin(Rt)*v)}R.fill(),R.fillStyle="#111",R.font="800 30px Inter, Arial, sans-serif",R.textAlign="center",R.fillText("GH",76,208),R.font="800 138px Inter, Arial, sans-serif",R.textBaseline="middle","letterSpacing"in R&&(R.letterSpacing="4px"),R.fillStyle="rgba(0,0,0,.18)",R.fillText("BU 0858-26",V/2+72,J/2+10),R.fillStyle="#111",R.fillText("BU 0858-26",V/2+70,J/2+7)}))),se=new i.MeshStandardMaterial({map:ne,roughness:.4}),H=A(new i.PlaneGeometry(.52,.112),se,Gt,!1);H.rotation.y=Math.PI/2,H.position.set(.075,.5,0);let Zt=new i.Group;Zt.position.set(q-.012,0,0),S.add(Zt);let re=[],he=[];if(c){for(let V of[-1,1]){let J=I(.04,.62,.08,0,h+.05,V*(f-.07),d.tail,Zt);re.push(J);let $=I(.04,.05,.28,0,h+.33,V*(f-.2),d.tail,Zt);re.push($),I(.042,.12,.05,.003,h-.12,V*(f-.08),d.amber,Zt).userData.ind=V,I(.042,.08,.05,.003,h-.22,V*(f-.08),d.reverse,Zt);let tt=A(new i.CylinderGeometry(.045,.045,.14,18,1,!0),d.chrome,Zt);tt.rotation.z=Math.PI/2,tt.position.set(0,.4,V*.55)}B(.14,.24,u-.1,.06,b,Zt).position.set(.04,.52,0),I(.02,.025,u-.6,-.03,.6,0,d.chrome,Zt)}else{for(let tt of[-1,1]){let At=B(.05,.42,.11,.03,d.tail,Zt);At.position.set(0,h-.2,tt*(f-.06)),re.push(At),I(.052,.08,.08,.004,h-.34,tt*(f-.06),d.amber,Zt).userData.ind=tt,I(.052,.06,.08,.004,h-.07,tt*(f-.06),d.reverse,Zt)}B(.16,.18,u-.1,.04,d.satin,Zt).position.set(.03,.52,0);let V=I(.1,.03,.4,.02,.62,0,d.black,Zt),J=A(new i.CylinderGeometry(.035,.035,.2,14,1,!0),d.satin,Zt);J.rotation.z=Math.PI/2,J.position.set(.05,.36,.55);let $=I(.03,.03,.42,yt+.05-(q-.012),p-.02,0,d.tail,Zt);he.push($)}let It=A(new i.PlaneGeometry(.52,.112),se,Zt,!1);It.rotation.y=-Math.PI/2,It.position.set(c?-.04:-.06,c?.72:.7,0);for(let R of[-1,1]){let V=new i.Group;V.position.set(X-.2,h+.1,R*(Z(X,h)+.04)),S.add(V);let J=I(.06,.04,.08,0,-.03,0,d.black,V);B(.12,.2,.26,.05,c?d.chrome:b,V).position.set(-.01,.04,R*.15);let tt=A(new i.PlaneGeometry(.22,.16),d.chrome,V);tt.rotation.y=-Math.PI/2,tt.position.set(-.075,.04,R*.15),I(.04,.015,.12,.03,-.045,R*.2,d.amber,V).userData.ind=R,V.userData.side=R,Tt["mirror"+(R<0?"Left":"Right")]=V;let At=c?B(pt[0]-pt[2]+.05,.04,.17,.02,d.piano):A(new i.CylinderGeometry(.03,.03,pt[0]-pt[2],14),d.black);if(c||(At.rotation.z=Math.PI/2),At.position.set((pt[0]+pt[2])/2,n.sill-.08,R*(f-.07)),c){let Rt=A(new i.CylinderGeometry(.018,.018,2.3,10),d.chrome);Rt.rotation.z=Math.PI/2,Rt.position.set(-1,p+.05,R*(f-.22));for(let v of[-2.1,.1])I(.06,.05,.04,v,p+.025,R*(f-.22),d.black)}}if(B(.18,.06,.06,.025,d.piano).position.set(Nt+.25,p+.03,0),I(G-q-.6,.12,u-.5,(G+q)/2,n.sill-.02,0,d.under),!c){let R=A(new i.CylinderGeometry(.05,.05,n.track-.2,12),d.under);R.rotation.x=Math.PI/2,R.position.set(-_,n.tyreR,0),A(new i.SphereGeometry(.14,16,12),d.under).position.set(-_,n.tyreR,0)}let zt=new i.Group;S.add(zt);let Jt=X-.28;B(.42,.22,u-.26,.08,d.interior,zt).position.set(Jt,h+.02,0),B(.3,.05,u-.3,.02,d.trim,zt).position.set(Jt+.05,h+.14,0);let D=document.createElement("canvas");D.width=512,D.height=192;let Q=o(new i.CanvasTexture(D)),W=new i.MeshStandardMaterial({map:Q,emissive:a("#ffffff"),emissiveMap:Q,emissiveIntensity:.9,roughness:.3}),ut=A(new i.PlaneGeometry(.34,.13),W,zt,!1);ut.position.set(Jt-.17,h+.12,-.38),ut.rotation.y=-Math.PI/2,ut.rotation.x=-.15;let ft=A(new i.PlaneGeometry(.3,.17),W.clone(),zt,!1);ft.position.set(Jt-.2,h+.12,.05),ft.rotation.y=-Math.PI/2,ft.material.map=ft.material.emissiveMap=o(new i.CanvasTexture(l(512,290,(R,V,J)=>{let $=R.createLinearGradient(0,0,V,J);$.addColorStop(0,"#0f1412"),$.addColorStop(1,"#1b2420"),R.fillStyle=$,R.fillRect(0,0,V,J),R.strokeStyle="#93AE7C",R.lineWidth=6,R.beginPath(),R.moveTo(30,230),R.bezierCurveTo(160,210,200,90,330,110),R.lineTo(480,60),R.stroke(),R.fillStyle="#BBA783",R.beginPath(),R.arc(330,110,10,0,7),R.fill(),R.fillStyle="#F2F0EA",R.font="600 28px Inter, Arial",R.fillText("Jubilee House \u2192 Temple",30,50),R.fillStyle="#B3ACA1",R.font="400 22px Inter, Arial",R.fillText("Liberation Road \xB7 4.2 km",30,84)})));let Y=new i.Group;Y.position.set(Jt-.3,h+.06,-.38),Y.rotation.z=-.42,zt.add(Y);let et=new i.Group;Y.add(et);let St=A(new i.TorusGeometry(.185,.018,12,40),d.leather,et);St.rotation.y=Math.PI/2;let O=B(.05,.1,.12,.03,d.interior,et);for(let R of[0,2.1,-2.1]){let V=I(.02,.17,.035,0,0,0,d.satin,et);V.position.set(0,Math.cos(R)*-.09,Math.sin(R)*.09),V.rotation.x=R}let it=A(new i.CircleGeometry(.032,24),d.emblem,et);it.position.x=-.03,it.rotation.y=-Math.PI/2;let st=A(new i.CylinderGeometry(.03,.04,.3,10),d.trim,Y);st.rotation.z=Math.PI/2,st.position.x=.15;let vt=(R,V,J)=>{let $=new i.Group;$.position.set(R,0,V),zt.add($),B(.5,.12,J,.05,d.leather,$).position.set(0,n.sill+.25,0);let At=B(.12,.6,J,.05,d.leather,$);if(At.position.set(-.25,n.sill+.55,0),At.rotation.z=.2,J<.7){let Rt=B(.08,.16,.26,.04,d.leather,$);Rt.position.set(-.32,n.sill+.92,0),Rt.rotation.z=.2}return $},bt=pt[1]+.48;vt(bt,-.38,.52),vt(bt,.38,.52),c?(vt(-.55,-.4,.54),vt(-.55,.4,.54),vt(-1.75,0,1.5)):vt(pt[1]-.45,0,1.45),B(.9,.18,.22,.05,d.interior,zt).position.set(bt+.1,n.sill+.3,0),B(.07,.08,.05,.02,d.chrome,zt).position.set(bt+.35,n.sill+.42,0);let ae=I(X-yt-.2,.02,u-.25,(X+yt)/2,n.sill+.05,0,d.trim,zt),Et=I(X-fe-.7,.02,Xt-.35,(_t+Nt)/2,p-.12,0,d.leather,zt);Et.material=new i.MeshStandardMaterial({color:a(c?"#cdbfae":"#3c3d3e"),roughness:.9});let Qt=new i.PointLight(16771532,0,2.6,1.5);Qt.position.set(bt-.2,p-.25,0),zt.add(Qt);let ue=I(.01,.006,u-.45,Jt-.2,h-.02,0,new i.MeshStandardMaterial({color:a("#BBA783"),emissive:a("#BBA783"),emissiveIntensity:0}),zt),Ot=[],we=(()=>{let R=n.tyreR,V=n.tyreW,J=R*(c?.72:.62),$=[],tt=18;$.push(new i.Vector2(J,-V/2+.02));for(let v=0;v<=tt;v++){let T=v/tt,k=J+(R-.02-J)*T,z=Math.sin(T*Math.PI)*.018+.01*T;$.push(new i.Vector2(k,-V/2-z))}$.push(new i.Vector2(R-.005,-V/2+.01),new i.Vector2(R,-V/2+.03),new i.Vector2(R,V/2-.03),new i.Vector2(R-.005,V/2-.01));for(let v=tt;v>=0;v--){let T=v/tt,k=J+(R-.02-J)*T,z=Math.sin(T*Math.PI)*.018+.01*T;$.push(new i.Vector2(k,V/2+z))}$.push(new i.Vector2(J,V/2-.02));let At=new i.LatheGeometry($,64),Rt=At.attributes.uv;for(let v=0;v<Rt.count;v++)Rt.setX(v,Rt.getX(v)*1);return At.rotateX(Math.PI/2),At})(),Ce=n.tyreR*(c?.72:.62);function Cn(R){let V=new i.Group,J=A(we,d.tyre,V),$=A(new i.CylinderGeometry(Ce,Ce,n.tyreW-.03,40,1,!0),d.rim,V);$.rotation.x=Math.PI/2;let tt=A(new i.TorusGeometry(Ce-.004,.008,8,48),d.rim,V);tt.position.z=R*(n.tyreW/2-.02);let At=A(new i.CylinderGeometry(Ce-.01,Ce*.5,.05,40,1,!0),d.under,V);At.rotation.x=Math.PI/2,At.position.z=R*(n.tyreW/2-.06);let Rt=c?10:6;for(let k=0;k<Rt;k++){let z=k/Rt*Math.PI*2,U=new i.Mesh(new i.BoxGeometry(c?.028:.06,Ce-.06,.035),d.rim);if(U.geometry.translate(0,(Ce-.06)/2+.05,0),U.rotation.z=z,U.position.z=R*(n.tyreW/2-.035),U.castShadow=!0,V.add(U),c&&k%2===0){let lt=U.clone();lt.rotation.z=z+.18,V.add(lt)}}let v=A(new i.CylinderGeometry(.065,.07,.03,32),d.rim,V);v.rotation.x=Math.PI/2,v.position.z=R*(n.tyreW/2-.025);let T=A(new i.CircleGeometry(.05,32),d.emblem,V);T.position.z=R*(n.tyreW/2-.008),R<0&&(T.rotation.y=Math.PI);for(let k=0;k<6;k++){let z=k/6*Math.PI*2,U=A(new i.CylinderGeometry(.011,.011,.02,6),d.chrome,V);U.rotation.x=Math.PI/2,U.position.set(Math.cos(z)*.085,Math.sin(z)*.085,R*(n.tyreW/2-.035))}return V}for(let[R,V,J]of[[_,-1,!0],[_,1,!0],[-_,-1,!1],[-_,1,!1]]){let $=new i.Group;$.position.set(R,n.tyreR,V*n.track/2),g.add($);let tt=Cn(V);$.add(tt);let At=A(new i.CylinderGeometry(Ce-.04,Ce-.04,.03,32),d.disc,$);At.rotation.x=Math.PI/2,At.position.z=V*.01;let Rt=B(.12,.08,.06,.02,d.caliper,$);Rt.position.set(J?-.02:.02,Ce-.07,V*.02),Rt.rotation.z=J?.6:-.6,Ot.push({pivot:$,spin:tt,front:J,side:V,baseY:n.tyreR,x:R,z:V*n.track/2})}let pi=[];if(e.lights!==!1)for(let R of[-1,1]){let V=new i.SpotLight(16774890,0,70,.48,.5,1.6);V.position.set(G-.05,jt-.06,R*(f-.3)),V.target.position.set(G+12,0,R*1.2),S.add(V,V.target),pi.push(V)}let K=e.lights!==!1?new i.PointLight(16719888,0,4,2):null;K&&(K.position.set(q-.4,.8,0),S.add(K));let Mt={"-1":d.amber.clone(),1:d.amber.clone()};S.traverse(R=>{R.isMesh&&R.userData.ind&&(R.material=Mt[R.userData.ind])});let Ut=d.tail.clone();for(let R of he)R.material=Ut;{let R=G-q+.7,V=u+.55,J=new i.CanvasTexture(l(256,128,(tt,At,Rt)=>{tt.fillStyle="#000",tt.fillRect(0,0,At,Rt);let v=(T,k,z,U,lt)=>{let Ct=tt.createRadialGradient(T,k,0,T,k,1);Ct.addColorStop(0,`rgba(255,255,255,${lt})`),Ct.addColorStop(1,"rgba(255,255,255,0)"),tt.save(),tt.translate(T,k),tt.scale(z,U),tt.translate(-T,-k),tt.fillStyle=Ct,tt.beginPath(),tt.arc(T,k,1,0,7),tt.fill(),tt.restore()};v(At/2,Rt/2,At*.5,Rt*.48,.55);for(let T of[.5+_/R,.5-_/R])for(let k of[.2,.8])v(At*T+(G+q)/2/R*-At,Rt*k,At*.09,Rt*.16,.9)})),$=new i.Mesh(new i.PlaneGeometry(R,V),new i.MeshBasicMaterial({color:0,alphaMap:J,transparent:!0,depthWrite:!1,opacity:.78,polygonOffset:!0,polygonOffsetFactor:-4}));$.rotation.x=-Math.PI/2,$.position.set((G+q)/2,.012,0),$.renderOrder=2,g.add($)}function Me(R){for(let J of[...R.children])!J.isMesh&&J.children.length&&Me(J);let V=new Map;for(let J of R.children){if(!J.isMesh||J.userData.panel||Array.isArray(J.material)||J.material.transparent)continue;let $=J.material.uuid+(J.castShadow?"s":"n");V.has($)||V.set($,[]),V.get($).push(J)}for(let J of V.values()){if(J.length<2)continue;let $=J.map(U=>{U.updateMatrix();let lt=U.geometry.index?U.geometry.toNonIndexed():U.geometry.clone();return lt.applyMatrix4(U.matrix),lt.attributes.normal||lt.computeVertexNormals(),lt}),tt=$.reduce((U,lt)=>U+lt.attributes.position.count,0),At=new Float32Array(tt*3),Rt=new Float32Array(tt*3),v=new Float32Array(tt*2),T=0;for(let U of $){let lt=U.attributes.position.count;At.set(U.attributes.position.array,T*3),Rt.set(U.attributes.normal.array,T*3),U.attributes.uv&&v.set(U.attributes.uv.array,T*2),T+=lt,U.dispose()}let k=new i.BufferGeometry;k.setAttribute("position",new i.BufferAttribute(At,3)),k.setAttribute("normal",new i.BufferAttribute(Rt,3)),k.setAttribute("uv",new i.BufferAttribute(v,2));let z=new i.Mesh(k,J[0].material);z.castShadow=J[0].castShadow,z.receiveShadow=!0;for(let U of J)R.remove(U);R.add(z)}}Me(g);let pe={head:!1,brake:!1,reverse:!1,left:!1,right:!1,hazard:!1,interiorGlow:0};function an(R,V){b.color.copy(a(R)),b.metalness=V??b.metalness,b.roughness=V>.5?.28:.35}function Un(R,V){let J=Tt[R];return J?R.startsWith("mirror")?(J.userData.target=V??!J.userData.target?1:0,!!J.userData.target):(J.userData.target=V??J.userData.target===0?1:0,J.userData.target===1):!1}for(let R of["mirrorLeft","mirrorRight"])Tt[R].userData={side:Tt[R].userData.side,open:0,target:0};let Ke=0;function Ue(R,V={}){for(let[v,T]of Object.entries(Tt)){let k=T.userData;if(k.open===void 0)continue;let z=v==="hood"||v==="tailgate"?2.2:3.2;if(k.open+=(k.target-k.open)*Math.min(1,R*z),v.startsWith("mirror"))T.rotation.y=k.side*1.1*k.open;else if(k.axis==="y"){let U=v.endsWith("Left")?1:-1;T.rotation.y=U*1.1*mi(k.open)}else T.rotation.z=k.max*mi(k.open)}let J=V.night?1:0;d.head.emissiveIntensity=pe.head?3:.4,d.drl.emissiveIntensity=V.engine===!1?.15:3.2;for(let v of pi)v.intensity=pe.head?(V.lightScale??1)*60*r:0;let $=pe.brake;d.tail.emissiveIntensity=$?5:pe.head||V.engine?1.2:.15,Ut.emissiveIntensity=$?6:.05,K&&(K.intensity=$?2.5*r*10:0),d.reverse.emissiveIntensity=pe.reverse?4:0,Ke+=R;let tt=Ke%.74<.4,At=(pe.left||pe.hazard)&&tt,Rt=(pe.right||pe.hazard)&&tt;return Mt[-1].emissiveIntensity=At?6:0,Mt[1].emissiveIntensity=Rt?6:0,ue.material.emissiveIntensity=V.engine?1.5:0,Qt.intensity=pe.interiorGlow?6*r:0,pe.left||pe.right||pe.hazard?tt:null}let mi=R=>1-Math.pow(1-R,3),js=0;function Oi(R,V,J){let $=performance.now();if($-js<100)return;js=$;let tt=D.getContext("2d"),At=512,Rt=192;tt.fillStyle="#07090a",tt.fillRect(0,0,At,Rt);let v=(T,k,z,U)=>{tt.strokeStyle="#222",tt.lineWidth=12,tt.beginPath(),tt.arc(T,110,70,Math.PI*.8,Math.PI*2.2),tt.stroke(),tt.strokeStyle="#BBA783",tt.beginPath(),tt.arc(T,110,70,Math.PI*.8,Math.PI*(.8+1.4*Math.max(0,Math.min(1,k)))),tt.stroke(),tt.fillStyle="#F2F0EA",tt.font="700 40px Inter, Arial",tt.textAlign="center",tt.fillText(U,T,122),tt.fillStyle="#9A948B",tt.font="500 16px Inter, Arial",tt.fillText(z,T,150)};v(120,R/(c?220:180),"km/h",Math.round(R)),v(392,V/n.redline,"rpm \xD71000",(V/1e3).toFixed(1)),tt.fillStyle="#93AE7C",tt.font="700 46px Inter, Arial",tt.textAlign="center",tt.fillText(J,256,112),Q.needsUpdate=!0}return{spec:n,root:E,car:g,body:S,wheels:Ot,steer:et,interior:zt,panels:Tt,clickable:F,state:pe,materials:d,setPaint:an,togglePanel:Un,update:Ue,drawCluster:Oi,driverEye:new i.Vector3(bt-.34,h+.33,-.38),dims:{length:G-q,width:u,height:p,front:G,rear:q}}}var gl=class{constructor(){this.ctx=null,this.kind="diesel",this.on=!1,this.cabin=0,this.muted=!1}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.7;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,this.cabinFilter=e.createBiquadFilter(),this.cabinFilter.type="lowpass",this.cabinFilter.frequency.value=18e3,this.master.connect(this.cabinFilter).connect(n).connect(e.destination),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;this._buildEngine(),this._buildEnv()}return this.ctx.state!=="running"&&await this.ctx.resume(),!0}_noise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.05)}_buildEngine(){let t=this.ctx;this.eng=t.createGain(),this.eng.gain.value=0;let e=t.createWaveShaper(),n=new Float32Array(1024);for(let l=0;l<1024;l++){let c=l/512-1;n[l]=Math.tanh(c*2.6)}e.curve=n,this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.Q.value=.8,this.eng.connect(e).connect(this.engLP).connect(this.master),this.osc=[];let s=(l,c)=>{let u=t.createOscillator();u.type=l;let f=t.createGain();return f.gain.value=c,u.connect(f).connect(this.eng),u.start(),this.osc.push({o:u,g:f,base:c}),u};this.o1=s("sawtooth",.5),this.o2=s("square",.18),this.o3=s("triangle",.35),this.oSub=s("sine",.6),this.am=t.createGain(),this.am.gain.value=1,this.eng.disconnect(),this.eng.connect(this.am).connect(e),this.lfo=t.createOscillator(),this.lfo.type="square",this.lfoGain=t.createGain(),this.lfoGain.gain.value=.35,this.lfo.connect(this.lfoGain).connect(this.am.gain),this.lfo.start();let r=this._noise();this.clatBP=t.createBiquadFilter(),this.clatBP.type="bandpass",this.clatBP.frequency.value=2600,this.clatBP.Q.value=1.6,this.clat=t.createGain(),this.clat.gain.value=0,this.clatGate=t.createGain(),this.clatGate.gain.value=0,this.clatLfo=t.createOscillator(),this.clatLfo.type="square";let a=t.createGain();a.gain.value=.5,this.clatLfo.connect(a).connect(this.clatGate.gain),this.clatLfo.start(),r.connect(this.clatBP).connect(this.clatGate).connect(this.clat).connect(this.master);let o=this._noise();this.roarBP=t.createBiquadFilter(),this.roarBP.type="bandpass",this.roarBP.Q.value=.7,this.roar=t.createGain(),this.roar.gain.value=0,o.connect(this.roarBP).connect(this.roar).connect(this.master),this.turbo=t.createOscillator(),this.turbo.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turbo.connect(this.turboG).connect(this.master),this.turbo.start()}_buildEnv(){let t=this.ctx,e=this._noise();this.windLP=t.createBiquadFilter(),this.windLP.type="lowpass",this.windLP.frequency.value=600,this.wind=t.createGain(),this.wind.gain.value=0,e.connect(this.windLP).connect(this.wind).connect(this.master);let n=this._noise();this.sqBP=t.createBiquadFilter(),this.sqBP.type="bandpass",this.sqBP.frequency.value=1300,this.sqBP.Q.value=9,this.sq=t.createGain(),this.sq.gain.value=0,n.connect(this.sqBP).connect(this.sq).connect(this.master);let s=this._noise();this.grLP=t.createBiquadFilter(),this.grLP.type="lowpass",this.grLP.frequency.value=260,this.gravel=t.createGain(),this.gravel.gain.value=0,s.connect(this.grLP).connect(this.gravel).connect(this.master)}setKind(t){this.kind=t}_env(t,e,n,s,r){let a=t.gain;a.cancelScheduledValues(e),a.setValueAtTime(1e-4,e),a.exponentialRampToValueAtTime(s,e+n),a.exponentialRampToValueAtTime(1e-4,e+n+r)}click(t=3200,e=.25,n=.02){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=s.createBufferSource();a.buffer=this.noiseBuf;let o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=t,o.Q.value=3;let l=s.createGain();a.connect(o).connect(l).connect(this.master),this._env(l,r,.002,e,n),a.start(r),a.stop(r+n+.05)}thunk(t=.6){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(110,n),s.frequency.exponentialRampToValueAtTime(48,n+.18);let r=e.createGain();s.connect(r).connect(this.master),this._env(r,n,.004,t,.25),s.start(n),s.stop(n+.35),this.click(900,t*.4,.06)}latch(){this.click(2400,.18,.03),setTimeout(()=>this.click(1700,.12,.03),60)}tick(t){this.click(t?3800:2600,.12,.012)}horn(t,e=.5){if(!this.ctx)return;let n=this.ctx,s=n.currentTime,r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.7;let a=n.createGain();r.connect(a).connect(this.master),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.32,s+.02),a.gain.setValueAtTime(.32,s+e),a.gain.exponentialRampToValueAtTime(1e-4,s+e+.08);for(let o of t.horn){let l=n.createOscillator();l.type="square",l.frequency.value=o,l.connect(r),l.start(s),l.stop(s+e+.1)}}chime(t=[660,880,1320]){if(!this.ctx)return;let e=this.ctx;t.forEach((n,s)=>{let r=e.currentTime+s*.11,a=e.createOscillator();a.type="sine",a.frequency.value=n;let o=e.createGain();a.connect(o).connect(this.master),this._env(o,r,.01,.2,.5),a.start(r),a.stop(r+.6)})}starter(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sawtooth",s.frequency.value=160;let r=e.createOscillator();r.frequency.value=t.engine==="diesel"?9:11;let a=e.createGain();a.gain.value=40,r.connect(a).connect(s.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=900;let l=e.createGain();return s.connect(o).connect(l).connect(this.master),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.2,n+.05),l.gain.setValueAtTime(.2,n+.75),l.gain.exponentialRampToValueAtTime(1e-4,n+.9),s.start(n),r.start(n),s.stop(n+1),r.stop(n+1),()=>{l.gain.cancelScheduledValues(e.currentTime),l.gain.setTargetAtTime(0,e.currentTime,.02)}}blowoff(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="bandpass",s.Q.value=1.2,s.frequency.setValueAtTime(3500,e),s.frequency.exponentialRampToValueAtTime(900,e+.35);let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.01,.14,.35),n.start(e),n.stop(e+.5)}pop(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=700;let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.002,.5,.07),n.start(e),n.stop(e+.15)}crash(t){this.thunk(Math.min(1,.3+t)),this.click(600,Math.min(.6,t),.15)}update(t,e,n){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=.03,o=e.engine==="diesel",l=t.engine?Math.max(t.rpm,1):0,c=o?4:8,u=l/60*c/2,f=t.throttle??0,h=t.engine?1:0,p=Math.max(u,1);this.o1.frequency.setTargetAtTime(o?p:p*.5,r,a),this.o2.frequency.setTargetAtTime(p*(o?2:1),r,a),this.o3.frequency.setTargetAtTime(p*(o?.5:1.5),r,a),this.oSub.frequency.setTargetAtTime(p*.5,r,a),this.lfo.frequency.setTargetAtTime(o?p:p*.25,r,a),this.lfoGain.gain.setTargetAtTime(o?.25:.55-Math.min(.35,l/e.redline*.4),r,.1);let _=l/e.redline;this.engLP.frequency.setTargetAtTime(o?260+_*1600+f*900:220+_*2600+f*1600,r,a);let b=(o?.32:.42)*(.55+.45*f+_*.3);this.eng.gain.setTargetAtTime(b*h,r,.06),this.clatLfo.frequency.setTargetAtTime(p,r,a),this.clat.gain.setTargetAtTime(o?h*(.06+.05*f)*(1.2-_*.6):0,r,.05),this.clatBP.frequency.setTargetAtTime(2200+_*1400,r,.1),this.roarBP.frequency.setTargetAtTime(o?300+_*900:140+_*700,r,a),this.roar.gain.setTargetAtTime(h*f*(o?.06:.16)*(.4+_),r,.05);let d=o?Math.max(0,_-.25)*f:0;this.turbo.frequency.setTargetAtTime(2400+d*5200,r,.15),this.turboG.gain.setTargetAtTime(h*d*.035,r,.12),o&&this._lastLoad>.6&&f<.15&&_>.45&&this.blowoff(),!o&&this._lastLoad>.6&&f<.1&&_>.5&&Math.random()<.7&&(this.pop(),setTimeout(()=>this.pop(),90+Math.random()*120)),this._lastLoad=f;let m=Math.hypot(t.vx,t.vy);this.wind.gain.setTargetAtTime(Math.min(.32,m*m*18e-5),r,.2),this.windLP.frequency.setTargetAtTime(400+m*40,r,.2);let y=t.surface==="asphalt"?Math.max(0,t.slip-.35):0;this.sq.gain.setTargetAtTime(Math.min(.28,y*.4),r,.05),this.sqBP.frequency.setTargetAtTime(1100+Math.sin(r*13)*120+m*8,r,.02),this.gravel.gain.setTargetAtTime(t.surface!=="asphalt"&&t.surface!=="floor"?Math.min(.4,m*.03):0,r,.1),this.cabinFilter.frequency.setTargetAtTime(this.cabin?1500:18e3,r,.1)}};var xn=(i,t,e)=>Math.max(t,Math.min(e,i)),os=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n);function O_(i,t){let e=t/i.redline;if(i.engine==="diesel"){let s=e<.2?.55+e*1.5:e<.37?.85+(e-.2)*.9:e<.72?1:1-(e-.72)*1.4;return i.torque*xn(s,.3,1)}let n=.62+.55*Math.sin(Math.min(1,e/.72)*Math.PI/2)-(e>.8?(e-.8)*1.2:0);return i.torque*xn(n,.4,1)}function nd(i){let t=i.mass,e=i.wheelbase,n=e*.48,s=e-n,r=.68,a=t*(e*e+i.width*i.width)/12*1.1;return{spec:i,m:t,a:n,b:s,h:r,Iz:a,x:0,z:0,yaw:0,vx:0,vy:0,r:0,steer:0,rpm:i.idle,gear:1,shiftT:0,engine:!1,starting:0,throttle:0,brake:0,ax:0,ay:0,slip:0,wheelSpin:0,wheelSpeed:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,distance:0,surface:"asphalt",hit:0,reverse:!1,lastShift:0}}function id(i,t,e,n){let s=i.spec,r=9.81,a=Math.hypot(i.vx,i.vy),o=e.grip?e.grip(i.x,i.z):{mu:1,rough:0,name:"asphalt"};i.surface=o.name;let l=.58/(1+Math.pow(Math.abs(i.vx)/14,1.4)*.9);i.steer=os(i.steer,t.steer*l,16,n);let c=t.brake,u=i.engine&&c<.15?t.throttle:0,f=i.vx,h=s.tyreR,p=s.gears,_=Math.abs(i.vx)/(2*Math.PI*h)*60;if(i.shiftT=Math.max(0,i.shiftT-n),!i.reverse&&i.shiftT===0){let Zt=_*p[i.gear-1]*s.finalDrive;Zt>s.shiftUp*(.75+.25*u)&&i.gear<p.length?(i.gear++,i.shiftT=s.engine==="v8"?.14:.22,i.lastShift=1):Zt<s.shiftDown&&i.gear>1&&(i.gear--,i.shiftT=.2,i.lastShift=-1)}let b=(i.reverse?4.1:p[i.gear-1])*s.finalDrive,d=_*b,m=i.engine?Math.max(s.idle+u*(s.engine==="v8"?2100:1400)*xn(1-Math.abs(i.vx)/6,0,1),d):0,y=i.shiftT>0?m*.82:m;i.starting>0&&(i.starting-=n),i.rpm=os(i.rpm,xn(y,0,s.redline*1.02),i.engine?9:2.5,n),i.rpm>s.redline&&(u*=.2);let M=(i.engine?O_(s,Math.max(i.rpm,s.idle))*u:0)*b*.92/h*(i.shiftT>0?.68:1);i.reverse&&(M=-M);let C=s.power*1e3/Math.max(2,Math.abs(i.vx));M=xn(M,-C*1.2,C*1.2);let E=Math.sign(i.vx)||0,g=c*B_(i)+(t.handbrake?6e3:0),S=i.m*r*(.013+o.rough*.02),F=.5*1.2*(s.engine==="v8"?1.25:1.1)*i.vx*Math.abs(i.vx),A=i.engine&&u<.05?i.rpm/s.redline*900*E:0,I=M-F-A,B=(g+S)*E;Math.abs(i.vx)<.15&&Math.abs(M)<g+S?(i.vx=0,I=0):I-=B;let j=xn(i.m*r*i.b/(i.a+i.b)-i.m*i.ax*i.h/(i.a+i.b),i.m*r*.1,i.m*r*.9),L=i.m*r-j,G=o.mu,q=G*i.m*r*.95,Z=xn(Math.abs(I)/q,0,1.4);Math.abs(I)>q&&(I=Math.sign(I)*q),i.wheelSpin=os(i.wheelSpin,Math.max(0,Z-.92)*6,8,n);let at=Math.max(Math.abs(i.vx),.5)*(i.vx<0?-1:1),rt=Math.atan2(i.vy+i.a*i.r,Math.abs(at))-i.steer*Math.sign(at),ht=Math.atan2(i.vy-i.b*i.r,Math.abs(at)),dt=9.5*j/1,nt=10.5*L/1,ot=t.handbrake?G*.45:G,X=Math.sqrt(1-xn(Z*.95,0,1)**2),gt=(Zt,re,he)=>he>1?he*Math.tanh(-re*Zt/he):0,yt=gt(rt,dt,G*j*X),Bt=gt(ht,nt,ot*L*X);i.slip=xn(Math.max(Math.abs(rt),Math.abs(ht))*Math.min(1,a/4)*3+i.wheelSpin*.6+(t.handbrake&&a>3?.5:0),0,1.5);let _t=(I-yt*Math.sin(i.steer))/i.m+i.vy*i.r,Nt=(yt*Math.cos(i.steer)+Bt)/i.m-i.vx*i.r,fe=(i.a*yt*Math.cos(i.steer)-i.b*Bt)/i.Iz,Xt=xn((a-1)/3,0,1),qt=Xt*Xt*(3-2*Xt);i.vx+=(qt*_t+(1-qt)*(I/i.m))*n,i.vy=qt*(i.vy+Nt*n)+(1-qt)*os(i.vy,0,10,n);let le=i.vx*Math.tan(i.steer)/(i.a+i.b);i.r=qt*(i.r+fe*n)+(1-qt)*le,i.ax=os(i.ax,qt*(_t-i.vy*i.r)+(1-qt)*(I/i.m),12,n),i.ay=os(i.ay,qt*(Nt+i.vx*i.r)+(1-qt)*i.vx*i.r,12,n),c>.15&&(f===0||f*i.vx<0)&&(i.vx=0),i.vx=xn(i.vx,-6,s.top);let ct=Math.sin(i.yaw),pt=Math.cos(i.yaw);if(i.x+=(i.vx*ct+i.vy*pt)*n,i.z+=(i.vx*pt-i.vy*ct)*n,i.yaw+=i.r*n,i.hit=Math.max(0,i.hit-n),e.collide){let Zt=e.collide(i.x,i.z,i.yaw);if(Zt){i.x+=Zt.nx*Zt.depth,i.z+=Zt.nz*Zt.depth;let re=i.vx*ct+i.vy*pt,he=i.vx*pt-i.vy*ct,It=re*Zt.nx+he*Zt.nz;if(It<0){let _e=-It;i.hit=Math.min(1,_e/8);let zt=(re-1.12*It*Zt.nx)*.86,Jt=(he-1.12*It*Zt.nz)*.86;i.vx=zt*ct+Jt*pt,i.vy=(zt*pt-Jt*ct)*.5;let P=Math.sin(i.yaw)*Zt.nz-Math.cos(i.yaw)*Zt.nx;i.r=i.r*.6+xn(P*_e*.06,-.8,.8),i.lastImpact=_e}}}let Tt=38,Ft=7.5,Pt=30,Gt=6,kt=55,jt=9,ne=xn(-i.ax*.0085,-.06,.06),se=xn(i.ay*.0072,-.065,.065);i.pitchV+=((ne-i.pitch)*Tt-i.pitchV*Ft)*n,i.pitch+=i.pitchV*n,i.rollV+=((se-i.roll)*Pt-i.rollV*Gt)*n,i.roll+=i.rollV*n,i.distance+=a*n;let H=o.rough*Math.min(1,a/6)*(Math.sin(i.distance*13)*.24+Math.sin(i.distance*5.3)*.14);return i.heaveV+=(-i.heave*kt-i.heaveV*jt+H*60)*n,i.heave+=i.heaveV*n,i.wheelSpeed=i.vx/h+i.wheelSpin*30*Math.sign(u||1)*(i.reverse?-1:1),i.throttle=os(i.throttle,u,10,n),i.brake=c,i}function B_(i){return i.m*9.81*.95}var Js=(i,t,e)=>Math.max(t,Math.min(e,i)),ls=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n),Ks=1/120,_l={throttle:0,brake:0,steer:0,handbrake:!1};function sd({bounds:i,circles:t=[],boxes:e=[],carR:n=.95,carHalf:s=1.7}){let r=e.map(h=>({...h,cs:Math.cos(h.rot||0),sn:Math.sin(h.rot||0),radius:Math.hypot(h.hx,h.hz)+n})),a=16,o=new Map,l=(h,p)=>h*73856093^p*19349663,c=(h,p,_,b)=>{for(let d=Math.floor((p-b)/a);d<=Math.floor((p+b)/a);d++)for(let m=Math.floor((_-b)/a);m<=Math.floor((_+b)/a);m++){let y=l(d,m),w=o.get(y);w||o.set(y,w={boxes:[],circles:[]}),h.r!==void 0&&!h.hx?w.circles.push(h):w.boxes.push(h)}};for(let h of r)c(h,h.x,h.z,h.radius);for(let h of t)c(h,h.x,h.z,h.r+n);let u={boxes:[],circles:[]},f=(h,p)=>o.get(l(Math.floor(h/a),Math.floor(p/a)))||u;return(h,p,_)=>{let b=Math.sin(_),d=Math.cos(_),m=null;for(let y of[-1,0,1]){let w=h+b*y*s,M=p+d*y*s,C=(g,S,F)=>{F>0&&(!m||F>m.depth)&&(m={nx:g,nz:S,depth:F})};i&&(C(1,0,i.minX-(w-n)),C(-1,0,w+n-i.maxX),C(0,1,i.minZ-(M-n)),C(0,-1,M+n-i.maxZ));let E=f(w,M);for(let g of E.circles){let S=w-g.x,F=M-g.z,A=g.r+n;if(S*S+F*F>=A*A)continue;let I=Math.hypot(S,F);I>1e-4?C(S/I,F/I,A-I):C(-b,-d,A)}for(let g of E.boxes){let S=w-g.x,F=M-g.z;if(S*S+F*F>=g.radius*g.radius)continue;let A=S*g.cs+F*g.sn,I=-S*g.sn+F*g.cs,B=Js(A,-g.hx,g.hx),j=Js(I,-g.hz,g.hz),L=A-B,G=I-j,q=Math.hypot(L,G);if(q<n)if(q<1e-4){let Z=g.hx-Math.abs(A),at=g.hz-Math.abs(I);Z<at?(L=Math.sign(A)||1,G=0,q=-Z):(L=0,G=Math.sign(I)||1,q=-at);let rt=L*g.cs-G*g.sn,ht=L*g.sn+G*g.cs;C(rt,ht,n-q)}else{let Z=L/q,at=G/q;C(Z*g.cs-at*g.sn,Z*g.sn+at*g.cs,n-q)}}}return m}}var xl=class{constructor({THREE:t,scene:e,camera:n,dom:s,vehicle:r,audio:a,env:o={},onEvent:l=()=>{}}){Object.assign(this,{THREE:t,scene:e,camera:n,dom:s,audio:a,env:o,onEvent:l}),this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)"),this.enabled=!1,this.camMode="chase",this.camModes=["chase","far","cabin","hood","cine","drone"],this.input={..._l},this.keys=new Set,this.touch={..._l},this.accumulator=0,this.lastPose={x:0,z:0,yaw:0},this.effectsTime=0,this.camPos=new t.Vector3,this.camLook=new t.Vector3,this.fov=n.fov,this.shake=0,this.orbitYaw=0,this.orbitPitch=0,this.dragging=!1,this.cine=null,this._tmp=new t.Vector3,this._tmp2=new t.Vector3,this._q=new t.Quaternion,this.cameraWant=new t.Vector3,this.cameraTarget=new t.Vector3,this.cameraHeading=new t.Vector3,this.markMatrix=new t.Matrix4,this.markScale=new t.Vector3(1,1,1),this.setVehicle(r),this._initFx(),this._bind()}setVehicle(t){let e=this.dyn?{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}:null;this.dyn&&this.toggleEngine(!1),this.clearInput(),this.vehicle=t,this.dyn=nd(t.spec),e&&Object.assign(this.dyn,e),Object.assign(this.lastPose,{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}),this.audio&&this.audio.setKind(t.spec.engine)}place(t,e,n=0){this.clearInput(),Object.assign(this.dyn,{x:t,z:e,yaw:n,vx:0,vy:0,r:0,steer:0,slip:0,wheelSpin:0,wheelSpeed:0}),Object.assign(this.lastPose,{x:t,z:e,yaw:n}),this._sync(0),this.snapCamera()}clearInput(){this.keys.clear(),Object.assign(this.touch,_l),Object.assign(this.input,_l),this.dragging=!1,this.accumulator=0,this.resetTouch?.()}setEnabled(t){this.clearInput(),this.enabled=t,t?this.dom.focus({preventScroll:!0}):(this.toggleEngine(!1),Object.assign(this.dyn,{vx:0,vy:0,r:0,slip:0,throttle:0}),this.audio?.update(this.dyn,this.vehicle.spec,0))}_bind(){let t=s=>{if(!this.enabled||document.hidden||s.altKey||s.ctrlKey||s.metaKey||s.defaultPrevented||s.target?.closest?.("button, a, input, select, textarea, summary, [contenteditable]"))return;let r=s.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(r)&&s.preventDefault(),!s.repeat&&(this.keys.add(r),r==="h"?this.horn():r==="l"?this.toggle("head"):r==="q"?this.toggle("left"):r==="e"?this.toggle("right"):r==="x"?this.toggle("hazard"):r==="c"?this.cycleCamera():r==="r"?this.recover():r==="v"?this.shiftDirection():r==="i"&&this.toggleEngine())},e=s=>this.keys.delete(s.key.toLowerCase()),n=()=>{this.audio?.muted||this.audio?.unlock().catch(()=>{})};this.dom.addEventListener("pointerdown",n,{passive:!0}),addEventListener("keydown",t),addEventListener("keyup",e),addEventListener("blur",()=>this.clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearInput()}),this.dom.addEventListener("pointerdown",s=>{this.enabled&&(this.dragging=!0,this._px=s.clientX,this._py=s.clientY,this._lookT=0)}),addEventListener("pointerup",()=>{this.dragging=!1}),addEventListener("pointercancel",()=>{this.dragging=!1}),addEventListener("pointermove",s=>{!this.enabled||!this.dragging||(this.orbitYaw-=(s.clientX-this._px)*.006,this.orbitPitch=Js(this.orbitPitch+(s.clientY-this._py)*.004,-.3,.9),this._px=s.clientX,this._py=s.clientY,this._lookT=0)})}setTouch(t){Object.assign(this.touch,t)}_readInput(){let t=this.keys,e=this.touch,n=t.has("w")||t.has("arrowup")?1:e.throttle,s=t.has("s")||t.has("arrowdown")?1:e.brake,r=(t.has("a")||t.has("arrowleft")?1:0)-(t.has("d")||t.has("arrowright")?1:0);r||(r=e.steer);let a=t.has(" ")||e.handbrake,o=navigator.getGamepads?navigator.getGamepads():[];for(let l of o)if(l){let c=l.axes[0]||0;Math.abs(c)>.12&&(r=-c),l.buttons[7]&&l.buttons[7].value>.05&&(n=l.buttons[7].value),l.buttons[6]&&l.buttons[6].value>.05&&(s=l.buttons[6].value),l.buttons[0]&&l.buttons[0].pressed&&(a=!0),l.buttons[3]&&l.buttons[3].pressed&&!this._padY&&this.cycleCamera(),this._padY=l.buttons[3]&&l.buttons[3].pressed,l.buttons[1]&&l.buttons[1].pressed&&!this._padB&&this.horn(),this._padB=l.buttons[1]&&l.buttons[1].pressed,l.buttons[2]?.pressed&&!this._padX&&this.shiftDirection(),this._padX=l.buttons[2]?.pressed;break}return{thr:n,brk:s,st:r,hb:a}}_smoothInput({thr:t,brk:e,st:n,hb:s},r){let a=this.input;if(this.dyn.reverse){let l=t;t=e,e=l}if(a.throttle=ls(a.throttle,t,t>a.throttle?11:14,r),a.brake=ls(a.brake,e,16,r),Math.abs(n)>0&&Math.abs(n)<.999)a.steer=ls(a.steer,n,18,r);else{let l=n===0?6.5:a.steer*n<0?9:3.6;a.steer+=Js(n-a.steer,-l*r,l*r)}a.handbrake=s}toggle(t){let e=this.vehicle.state;return t==="left"?(e.left=!e.left,e.right=!1):t==="right"?(e.right=!e.right,e.left=!1):e[t]=!e[t],this.audio&&this.audio.click(2e3,.1,.02),this.onEvent("lights",{...e}),e[t]}horn(){this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>this.audio.horn(this.vehicle.spec,.45)).catch(()=>{});let t=performance.now();this._horns=(this._horns||[]).filter(e=>t-e<1600),this._horns.push(t),this.onEvent("horn",this._horns.length)}toggleEngine(t){let e=this.dyn,n=t??!(e.engine||this.startTimer);if(n&&(e.engine||this.startTimer))return!0;if(!n)return clearTimeout(this.startTimer),this.startTimer=null,this.stopStarter?.(),this.stopStarter=null,e.engine=!1,e.starting=0,this.audio?.update(e,this.vehicle.spec,0),this.onEvent("engine","off"),!1;let s=this.vehicle.spec;this.startTimer=setTimeout(()=>{this.startTimer=null,e.engine=!0,e.starting=0,e.rpm=s.idle*1.4,this.onEvent("engine","running")},650),e.starting=.65;let r=this.startTimer;return this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>{this.startTimer===r&&(this.stopStarter=this.audio.starter(s))}).catch(()=>{}),this.onEvent("engine","starting"),n}_autoShift({thr:t,brk:e},n){let s=this.dyn,r=Math.hypot(s.vx,s.vy)<.3&&s.engine,a=!s.reverse&&e>.5&&t<.05,o=s.reverse&&t>.5&&e<.05;this._holdT=r&&(a||o)?(this._holdT||0)+n:0,this._holdT>.35&&(this._holdT=0,s.reverse=!s.reverse,s.gear=1,this.input.throttle=0,this.input.brake=0,this.onEvent("direction",s.reverse))}shiftDirection(){return Math.hypot(this.dyn.vx,this.dyn.vy)>.4||this.input.throttle>.08?(this.onEvent("shift-blocked"),!1):(this.clearInput(),this.dyn.reverse=!this.dyn.reverse,this.dyn.gear=1,this.onEvent("direction",this.dyn.reverse),!0)}cycleCamera(t){let e=this.camModes.indexOf(this.camMode),n=this.camModes[(e+1)%this.camModes.length];return this.camMode=t||(n==="cine"&&this.reducedMotion.matches?"drone":n),this.cine=null,this.orbitYaw=0,this.orbitPitch=0,this.snapCamera(),this.audio&&(this.audio.cabin=this.camMode==="cabin"?1:0),this.onEvent("camera",this.camMode),this.camMode}recover(){let t=this.dyn;if(t.vx=t.vy=t.r=0,this.env.respawn){let e=this.env.respawn(t);e&&this.place(e.x,e.z,e.yaw)}}_initFx(){let t=this.THREE,e=260,n=new t.BufferGeometry;this.pPos=new Float32Array(e*3),this.pVel=new Float32Array(e*3),this.pLife=new Float32Array(e),n.setAttribute("position",new t.BufferAttribute(this.pPos,3));let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64),this.dustMat=new t.PointsMaterial({size:1.6,map:new t.CanvasTexture(s),transparent:!0,depthWrite:!1,opacity:.55,color:11901560,sizeAttenuation:!0}),this.dust=new t.Points(n,this.dustMat),this.dust.frustumCulled=!1,this.dust.visible=!1,this.scene.add(this.dust);for(let u=0;u<e;u++)this.pPos[u*3+1]=-100;this.pIdx=0;let o=320,l=new t.PlaneGeometry(.26,.5);l.rotateX(-Math.PI/2),this.skid=new t.InstancedMesh(l,new t.MeshBasicMaterial({color:657930,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),o),this.skid.frustumCulled=!1,this.skidI=0;let c=new t.Matrix4().makeTranslation(0,-100,0);for(let u=0;u<o;u++)this.skid.setMatrixAt(u,c);this.scene.add(this.skid)}_emit(t,e,n){let s=this.pLife.length;for(let r=0;r<n;r++){let a=this.pIdx=(this.pIdx+1)%s;this.pPos[a*3]=t.x+(Math.random()-.5)*.3,this.pPos[a*3+1]=t.y+.15,this.pPos[a*3+2]=t.z+(Math.random()-.5)*.3,this.pVel[a*3]=(Math.random()-.5)*1.2,this.pVel[a*3+1]=.5+Math.random()*.9,this.pVel[a*3+2]=(Math.random()-.5)*1.2,this.pLife[a]=1.6+Math.random()}this.dustMat.color.set(e)}_fx(t){let e=this.pLife.length,n=!1,s=!1;for(let r=0;r<e;r++)this.pLife[r]<=0||(n=!0,this.pLife[r]-=t,this.pPos[r*3]+=this.pVel[r*3]*t,this.pPos[r*3+1]+=this.pVel[r*3+1]*t,this.pPos[r*3+2]+=this.pVel[r*3+2]*t,this.pVel[r*3+1]*=Math.exp(-1.8*t),this.pLife[r]<=0?this.pPos[r*3+1]=-100:s=!0);n&&(this.dust.geometry.attributes.position.needsUpdate=!0),this.dust.visible=s}update(t){if(!this.enabled||document.hidden)return;t=Math.min(t,.1);let e=this.dyn,n=this.vehicle,s=this._readInput();for(this.accumulator+=t;this.accumulator>=Ks;)this._autoShift(s,Ks),this._smoothInput(s,Ks),Object.assign(this.lastPose,{x:e.x,z:e.z,yaw:e.yaw}),id(e,this.input,this.env,Ks),this.accumulator-=Ks;e.lastImpact&&(this.audio&&this.audio.crash(e.lastImpact/10),this.shake=Math.min(1,e.lastImpact/8),this.onEvent("impact",e.lastImpact),e.lastImpact=0),e.lastShift&&(this.onEvent("shift",e.gear),e.lastShift=0),n.state.brake=this.input.brake>.1||this.input.handbrake,n.state.reverse=e.reverse,this._sync(t,this.accumulator/Ks);let r=n.update(t,{engine:e.engine,night:this.env.night});r!==null&&r!==this._lastBlink&&this.audio&&this.audio.tick(r),this._lastBlink=r,n.drawCluster(Math.abs(e.vx)*3.6,e.rpm,e.reverse?"R":e.engine?Math.abs(e.vx)<.2&&this.input.throttle<.05?"D":"D"+e.gear:"P"),this.audio&&this.audio.update(e,n.spec,t);let a=Math.hypot(e.vx,e.vy),o=e.surface!=="asphalt"&&e.surface!=="floor";this.effectsTime+=t;let l=o&&a>3||e.slip>.7||e.wheelSpin>.4,c=!o&&(e.slip>.75||e.wheelSpin>.5)&&a>2;if(this.effectsTime>=1/30){if(this.effectsTime%=1/30,c||l)for(let u of n.wheels){if(u.front)continue;let f=u.pivot.getWorldPosition(this._tmp2);if(l&&this._emit(f,o?this.env.dustColor||11569762:14211288,o?Math.ceil(a/9):1),c){f.y=(this.env.groundY?.(f.x,f.z)??0)+.012;let h=this.markMatrix.compose(f,this._q.setFromAxisAngle(this.cameraHeading.set(0,1,0),e.yaw),this.markScale);this.skid.setMatrixAt(this.skidI=(this.skidI+1)%this.skid.count,h)}}c&&(this.skid.instanceMatrix.needsUpdate=!0)}this._fx(t),this._camera(t)}_sync(t,e=1){let n=this.dyn,s=this.vehicle,r=this.lastPose.x+(n.x-this.lastPose.x)*e,a=this.lastPose.z+(n.z-this.lastPose.z)*e,o=this.lastPose.yaw+(n.yaw-this.lastPose.yaw)*e,l=this.env.groundY,c=l?.(r,a)??0,u=Math.sin(o),f=Math.cos(o);s.root.position.set(r,c,a),s.root.rotation.set(0,o,0),s.body.rotation.x=n.roll,s.body.rotation.z=-n.pitch,s.body.position.y=n.heave*.6;for(let h of s.wheels){if(h.spin.rotation.z-=n.wheelSpeed*t,h.front){let d=s.spec.wheelbase/Math.tan(n.steer);h.pivot.rotation.y=Math.atan(s.spec.wheelbase/(d+h.z))}let p=(h.front?1:-1)*s.spec.wheelbase*.5,b=(l?l(r+u*p+f*h.z,a+f*p-u*h.z)-c:0)-n.roll*h.z*.5+(h.front?-1:1)*n.pitch*.4+n.heave*.3;h.pivot.position.y=h.baseY+Js(b,-.12,.14)}s.steer.rotation.x=-n.steer*7}snapCamera(){this._camInit=!1}_camera(t){let e=this.THREE,n=this.dyn,s=this.vehicle,r=this.camera,a=this._tmp.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),o=s.root.position,l=Math.hypot(n.vx,n.vy);this.dragging||(this._lookT=(this._lookT||0)+t,this._lookT>1.2&&(this.orbitYaw=ls(this.orbitYaw,0,2.5,t),this.orbitPitch=ls(this.orbitPitch,0,2.5,t)));let c=this.cameraWant,u=this.cameraTarget,f=55,h=6,p=.1,_=s.root.rotation.y+this.orbitYaw,b=this.cameraHeading.set(Math.sin(_),0,Math.cos(_)),d=s.dims.length;switch(this.camMode){case"chase":case"far":{let M=this.camMode==="far",C=(M?d*1.9:d*1.25)+l*.05,E=(M?3.4:2.05)+this.orbitPitch*4,g=l>4?Math.atan2(n.vx*Math.sin(n.yaw)+n.vy*Math.cos(n.yaw),n.vx*Math.cos(n.yaw)-n.vy*Math.sin(n.yaw)):n.yaw,S=n.vx>2?g+(_-n.yaw):_;c.set(o.x-Math.sin(S)*C,o.y+E,o.z-Math.cos(S)*C),u.copy(o).addScaledVector(a,2.5+l*.06),u.y+=1.05,f=52+Math.min(16,l*.38),h=4.5;break}case"cabin":{let M=s.driverEye.clone();s.body.localToWorld(M),c.copy(M),h=60,p=.03;let C=n.yaw+this.orbitYaw*1.6+n.steer*.35;u.set(M.x+Math.sin(C)*10,M.y-.6+this.orbitPitch*-4,M.z+Math.cos(C)*10),f=64+Math.min(8,l*.15);break}case"hood":{let M=new e.Vector3(s.spec.wheelbase/2-.3,s.spec.roof+.1,0);s.body.localToWorld(M),c.copy(M),h=60,p=.05,u.copy(M).addScaledVector(b,12),u.y-=.9,f=62+Math.min(10,l*.2);break}case"drone":{c.set(o.x-a.x*18,o.y+34,o.z-a.z*18),u.copy(o).addScaledVector(a,8),f=50,h=2;break}case"cine":{if(!this.cine||this.cine.t>7||o.distanceTo(this.cine.p)>55){let M=Math.random()<.5?-1:1,C=18+Math.random()*20,E=new e.Vector3(a.z,0,-a.x),g=o.clone().addScaledVector(a,C).addScaledVector(E,M*(6+Math.random()*6));g.y=(this.env.groundY?this.env.groundY(g.x,g.z):0)+.6+Math.random()*2.5,this.env.cineOk&&!this.env.cineOk(g)&&g.copy(o).addScaledVector(a,-10).setY(o.y+3),this.cine={p:g,t:0,fov:28+Math.random()*18},this.camPos.copy(g),this._camInit=!0}this.cine.t+=t,c.copy(this.cine.p),u.copy(o),u.y+=.9,f=this.cine.fov,h=1e3;break}}this._camInit||(this.camPos.copy(c),this.camLook.copy(u),this._camInit=!0);let m=1-Math.exp(-h*t);if(this.camPos.lerp(c,m),this.camLook.lerp(u,Math.min(1,m*1.6)),this.env.groundY&&this.camMode!=="cabin"&&(this.camPos.y=Math.max(this.camPos.y,this.env.groundY(this.camPos.x,this.camPos.z)+.35)),r.position.copy(this.camPos),this.env.cameraCollision&&(this.camMode==="chase"||this.camMode==="far"))for(let M=1;M<=4;M++){let C=this._tmp2.copy(o).lerp(this.camPos,M/4);if(this.env.cameraCollision(C.x,C.z,_)){r.position.copy(o).lerp(this.camPos,Math.max(.2,(M-1)/4)),r.position.y=Math.max(r.position.y,o.y+s.dims.height+.2);break}}this.shake=ls(this.shake,0,3,t);let y=(this.camMode==="cabin"||this.camMode==="hood"?.6:1)*(Math.min(1,l/45)**2*.012+(n.surface!=="asphalt"&&n.surface!=="floor"?Math.min(1,l/15)*.02:0)+this.shake*.09);this._shakeT=(this._shakeT||0)+t*(8+l*.6);let w=(M,C)=>Math.sin(this._shakeT*M)*.6+Math.sin(this._shakeT*C+1.7)*.4;this.camMode!=="cine"&&!this.reducedMotion.matches&&r.position.add(this._tmp2.set(w(1.3,2.9)*y*.5,w(1.7,3.7)*y*.5,w(1.1,2.3)*y*.5)),r.lookAt(this.camLook),this.camMode==="cabin"&&!this.reducedMotion.matches&&r.rotateZ(-n.roll*.6),this.fov=ls(this.fov,f,3,t),(Math.abs(r.fov-this.fov)>.01||r.near!==p)&&(r.fov=this.fov,r.near=p,r.updateProjectionMatrix())}hud(){let t=this.dyn;return{kmh:Math.abs(t.vx)*3.6,rpm:t.rpm,redline:this.vehicle.spec.redline,gear:t.reverse?"R":t.engine?"D"+t.gear:"P",engine:t.engine,surface:t.surface,cam:this.camMode,lights:this.vehicle.state}}},rd=`
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
@media (pointer:coarse){.pkm-touch{display:flex}.pkm-hud{bottom:auto;top:76px;transform:translateX(-50%) scale(.82)}}
`;function ad(i){let t=document.createElement("div");t.className="pkm-hud",t.hidden=!0,t.innerHTML=`<div><div class="pkm-hud__spd" data-spd>0</div><div class="pkm-hud__unit">km/h</div></div>
    <div class="pkm-hud__gear" data-gear>P</div>
    <div class="pkm-hud__rev"><div class="pkm-hud__ind"><span class="amber" data-l>\u25C0</span><span class="blue" data-h>\u25C9</span><span data-e>\u23FB</span><span class="amber" data-r>\u25B6</span></div>
    <div class="pkm-hud__bar" style="margin-top:8px"><i data-rpm></i></div><div class="pkm-hud__meta"><span data-rpmt>0 rpm</span><span data-surf>Asphalt</span></div></div>`,i.appendChild(t);let[e,n,s,r,a,o,l,c,u]=t.querySelectorAll("[data-spd],[data-gear],[data-l],[data-h],[data-e],[data-r],[data-rpm],[data-rpmt],[data-surf]"),f=(_,b)=>{_.textContent!==b&&(_.textContent=b)},h=0,p=.1;return{el:t,update(_,b=.016){if(h+=b,p+=b,p<.05)return;p%=.05,f(e,String(Math.round(_.kmh))),f(n,_.gear),l.style.width=Math.min(100,_.rpm/_.redline*100).toFixed(1)+"%",f(c,Math.round(_.rpm/10)*10+" rpm"),f(u,{asphalt:"Asphalt",grass:"Grass",dirt:"Laterite",floor:"Showroom floor",kerb:"Kerb"}[_.surface]||_.surface);let d=h%.74<.4,m=_.lights;s.classList.toggle("on",(m.left||m.hazard)&&d),o.classList.toggle("on",(m.right||m.hazard)&&d),r.classList.toggle("on",!!m.head),a.classList.toggle("on",_.engine)}}}function od(i,t){let e=document.createElement("div");e.className="pkm-touch",e.innerHTML=`<div class="pkm-steer" role="slider" aria-label="Steering: slide left or right" aria-valuemin="-1" aria-valuemax="1" aria-valuenow="0"><i></i><span>\u25C0 steer \u25B6</span></div>
    <div><button data-k="brake" class="tall">Brake</button><button data-k="gas" class="tall" aria-label="Accelerate">Go</button></div>`,i.appendChild(e);let n={steer:0,gas:0,brake:0},s=()=>t.setTouch({steer:n.steer,throttle:n.gas,brake:n.brake}),r=[...e.querySelectorAll("button")],a=e.querySelector(".pkm-steer"),o=a.querySelector("i"),l=null,c=f=>{n.steer=Math.abs(f)<.06?0:Js(f,-.998,.998),o.style.transform=`translateX(${-n.steer*44}px)`,a.setAttribute("aria-valuenow",(-n.steer).toFixed(2)),s()};a.addEventListener("pointerdown",f=>{f.preventDefault(),a.setPointerCapture(f.pointerId),l=f.clientX,a.classList.add("down")}),a.addEventListener("pointermove",f=>{l!==null&&c(-(f.clientX-l)/60)});let u=()=>{l=null,a.classList.remove("down"),c(0)};a.addEventListener("pointerup",u),a.addEventListener("pointercancel",u),a.addEventListener("lostpointercapture",u),t.resetTouch=()=>{for(let f of r)n[f.dataset.k]=0,f.classList.remove("down");l=null,n.steer=0,o.style.transform="",a.classList.remove("down")};for(let f of r){let h=f.dataset.k,p=b=>{b.preventDefault(),f.setPointerCapture(b.pointerId),n[h]=1,f.classList.add("down"),s()},_=()=>{n[h]=0,f.classList.remove("down"),s()};f.addEventListener("pointerdown",p),f.addEventListener("lostpointercapture",_),f.addEventListener("pointerup",_),f.addEventListener("pointercancel",_)}return e}var cs=class i extends ie{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=e.color!==void 0?new ee(e.color):new ee(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new fn,f=new N,h=new N,p=new N,_=new Se,b=new N(0,0,-1),d=new Le,m=new N,y=new N,w=new Le,M=new Se,C=new ze(r,a,{samples:c,type:Xe}),E=new ke({name:l.name!==void 0?l.name:"unspecified",uniforms:Tn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=C.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=M,this.material=E,this.onBeforeRender=function(g,S,F){let A=this.getReflectionCamera(F);if(h.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(F.matrixWorld),_.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(_),m.subVectors(h,p),m.dot(f)>0===!0&&this.forceUpdate===!1)return;m.reflect(f).negate(),m.add(h),_.extractRotation(F.matrixWorld),b.set(0,0,-1),b.applyMatrix4(_),b.add(p),y.subVectors(h,b),y.reflect(f).negate(),y.add(h),A.position.copy(m),A.up.set(0,1,0),A.up.applyMatrix4(_),A.up.reflect(f),A.lookAt(y),A.far=F.far,A.updateMatrixWorld(),A.projectionMatrix.copy(F.projectionMatrix),A.projectionMatrix.elements[8]*=-1,A.projectionMatrix.elements[12]*=-1,M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(A.projectionMatrix),M.multiply(A.matrixWorldInverse),M.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,h),u.applyMatrix4(A.matrixWorldInverse),d.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let B=A.projectionMatrix;A.isOrthographicCamera?(w.x=(Math.sign(d.x)+B.elements[8])/B.elements[0],w.y=(Math.sign(d.y)+B.elements[9])/B.elements[5],w.z=-F.far,w.w=1):(w.x=(Math.sign(d.x)+B.elements[8])/B.elements[0],w.y=(Math.sign(d.y)+B.elements[9])/B.elements[5],w.z=-1,w.w=(1+B.elements[10])/B.elements[14]),d.multiplyScalar(2/d.dot(w)),B.elements[2]=d.x,B.elements[6]=d.y,A.isOrthographicCamera?(B.elements[10]=d.z-o,B.elements[14]=d.w-1):(B.elements[10]=d.z+1-o,B.elements[14]=d.w),n.visible=!1;let j=g.getRenderTarget(),L=g.xr.enabled,G=g.shadowMap.autoUpdate;g.xr.enabled=!1,g.shadowMap.autoUpdate=!1,g.setRenderTarget(C),g.state.buffers.depth.setMask(!0),g.autoClear===!1&&g.clear(),g.render(S,A),g.xr.enabled=L,g.shadowMap.autoUpdate=G,g.setRenderTarget(j);let q=F.viewport;q!==void 0&&g.state.viewport(q),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()},this.getReflectionCamera=function(g){let S=this._reflectionCameras.get(g);return S===void 0&&(S=g.clone(),this._reflectionCameras.set(g,S)),S}}};cs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var $s=class i extends ie{constructor(){let t=i.SkyShader,e=new ke({name:t.name,uniforms:Tn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:rn,depthWrite:!1});super(new We(1,1,1),e),this.isSky=!0}};$s.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var An=(i,t,e,n=!0)=>{let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Yi(s);return n&&(r.colorSpace=nn),r.anisotropy=8,r},ld=i=>()=>((i=Math.imul(i^i>>>15,2246822519)+2654435769|0)>>>0)/4294967296;function la(i,t,e,n,s=[1,1,1],r=1){let a=i.getImageData(0,0,t,e),o=a.data,l=r>>>0;for(let c=0;c<o.length;c+=4){l=Math.imul(l,1664525)+1013904223>>>0;let u=((l>>>8)/16777216-.5)*n;o[c]+=u*s[0],o[c+1]+=u*s[1],o[c+2]+=u*s[2]}i.putImageData(a,0,0)}var vn='"Inter", ui-sans-serif, system-ui, sans-serif';function cd({quality:i,reflections:t}){let e=new je;e.name="showroom";let n=[],s=ld(7),r=An(1024,1024,(nt,ot,X)=>{nt.fillStyle="#1e1e1e",nt.fillRect(0,0,ot,X),la(nt,ot,X,14,[1,1,1],7),nt.strokeStyle="#1b1b1b",nt.lineWidth=3;for(let gt=0;gt<=4;gt++)nt.beginPath(),nt.moveTo(gt*ot/4,0),nt.lineTo(gt*ot/4,X),nt.stroke(),nt.beginPath(),nt.moveTo(0,gt*X/4),nt.lineTo(ot,gt*X/4),nt.stroke()});r.wrapS=r.wrapT=In,r.repeat.set(10,10);let a=new ie(new Ne(40,40),new Ai({map:r,roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.45}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,e.add(a);let o=null;if(t){let nt={...cs.ReflectorShader,fragmentShader:cs.ReflectorShader.fragmentShader.replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor = vec4( base.rgb * color, 1.0 );")};o=new cs(new Ne(40,40),{textureWidth:512,textureHeight:512,multisample:0,color:1710618,shader:nt,clipBias:.003}),o.material.transparent=!0,o.material.blending=ts,o.material.depthWrite=!1,o.rotation.x=-Math.PI/2,o.position.y=.002,o.renderOrder=1,e.add(o)}let l=new Ee({color:"#141414",roughness:.92}),c=(nt,ot,X,gt,yt,Bt,_t)=>{let Nt=new ie(new We(nt,ot,X),_t);return Nt.position.set(gt,yt,Bt),Nt.receiveShadow=!0,e.add(Nt),Nt};c(40,10,.4,0,5,-14,l),c(.4,10,40,-16,5,0,l),c(.4,10,40,16,5,0,l),c(40,10,.4,0,5,16,l),c(40,.3,40,0,9.6,0,new Ee({color:"#0b0b0b",roughness:1}));let u=new Ee({color:"#6b4a2f",roughness:.6}),f=new oi(new We(.09,7.6,.12),u,120),h=new Se;for(let nt=0;nt<120;nt++)h.makeTranslation(-11.9+nt*.2,3.8,-13.72),f.setMatrixAt(nt,h);f.receiveShadow=!0,e.add(f);let p=An(1600,560,(nt,ot,X)=>{nt.clearRect(0,0,ot,X),nt.fillStyle="#fff",nt.textAlign="center",nt.textBaseline="middle",nt.font=`800 360px ${vn}`,"letterSpacing"in nt&&(nt.letterSpacing="-18px"),nt.fillText("PKM",ot/2,X*.42),nt.font=`600 58px ${vn}`,"letterSpacing"in nt&&(nt.letterSpacing="26px"),nt.fillText("DRIVE  STUDIO  \xB7  KUMASI",ot/2,X*.86)}),_=new Ee({color:"#000",emissive:"#F2E6CF",emissiveMap:p,emissiveIntensity:2.4,transparent:!0,alphaMap:p,roughness:1});p.colorSpace=Hn;let b=new ie(new Ne(9.6,3.36),_);b.position.set(0,5.5,-13.55),b.userData.click="sign",e.add(b),n.push(b);let d=new ie(new Ne(11,4.2),new Ln({color:"#BBA783",transparent:!0,opacity:.08,depthWrite:!1}));d.position.set(0,5.5,-13.62),e.add(d);let m=new Ee({color:"#fff",emissive:"#fff8ee",emissiveIntensity:1.4}),y=[];for(let nt of[-6,-3,0,3,6]){let ot=c(.18,.05,18,nt,9.3,0,m);y.push(ot)}let w=new ie(new Ei(4.6,.06,8,96),m);w.rotation.x=Math.PI/2,w.position.y=9.2,e.add(w);let M=new je;e.add(M);let C=new ie(new Dn(4.2,4.25,.1,96),new Ai({color:"#151515",roughness:.35,metalness:.3,clearcoat:.6}));C.position.y=.05,C.receiveShadow=!0,M.add(C);let E=new ie(new Ei(4.26,.018,6,160),new Ee({color:"#BBA783",emissive:"#BBA783",emissiveIntensity:1.6}));E.rotation.x=Math.PI/2,E.position.y=.06,M.add(E);let g=new je;g.position.set(9.5,0,-11),e.add(g);let S=new ie(new Dn(.42,.32,.8,32),new Ee({color:"#c9bba3",roughness:.7}));S.position.y=.4,S.castShadow=!0,g.add(S);let F=new Ee({color:"#4f7a3e",roughness:.6,side:hn}),A=[];for(let nt=0;nt<9;nt++){let ot=new ie(new Ji(.5,12,8,0,Math.PI*2,0,Math.PI/2),F);ot.scale.set(.35,1.6,.07);let X=nt/9*Math.PI*2;ot.position.set(Math.cos(X)*.12,.85,Math.sin(X)*.12),ot.rotation.set(Math.sin(X)*.5,-X,Math.cos(X)*.5),ot.castShadow=!0,g.add(ot),A.push(ot)}g.traverse(nt=>{nt.userData.click="plant"}),n.push(...g.children);let I=new ie(new Ne(2.2,3),new Ee({roughness:.5,map:An(440,600,(nt,ot,X)=>{nt.fillStyle="#0f0f0f",nt.fillRect(0,0,ot,X);let gt=nt.createLinearGradient(0,0,ot,X);gt.addColorStop(0,"#BBA783"),gt.addColorStop(1,"#93AE7C"),nt.fillStyle=gt,nt.fillRect(30,30,ot-60,X*.55),nt.fillStyle="#080808",nt.font=`800 92px ${vn}`,nt.fillText("Iconka",50,X*.42),nt.font=`500 30px ${vn}`,nt.fillText("Designs \xB7 since 2022",52,X*.5),nt.fillStyle="#F2F0EA",nt.font=`700 34px ${vn}`,nt.fillText("Design work \u2192",40,X*.75),nt.fillStyle="#9A948B",nt.font=`400 24px ${vn}`,nt.fillText("Brands, posters, menus",40,X*.82)})}));I.position.set(-15.75,3.4,-5),I.rotation.y=Math.PI/2,I.userData.click="poster",e.add(I),n.push(I);let B=c(.08,3.2,2.4,-15.8,3.4,-5,new Ee({color:"#BBA783",metalness:.8,roughness:.3})),j=new ie(new Ne(3.6,5),new Ee({roughness:.6,emissive:"#ffffff",emissiveIntensity:.9,emissiveMap:An(360,500,(nt,ot,X)=>{let gt=nt.createLinearGradient(0,0,0,X);gt.addColorStop(0,"#f0b26b"),gt.addColorStop(.55,"#d9774a"),gt.addColorStop(.56,"#3d4a3c"),gt.addColorStop(1,"#232a22"),nt.fillStyle=gt,nt.fillRect(0,0,ot,X),nt.fillStyle="#1b1f1a";for(let yt=0;yt<9;yt++){let Bt=20+yt*38,_t=40+yt*37%70;nt.fillRect(Bt,X*.56-_t,26,_t)}nt.fillStyle="#F2F0EA",nt.font=`800 46px ${vn}`,nt.fillText("Accra 3D",26,70),nt.font=`500 22px ${vn}`,nt.fillText("Drive Liberation Road \u2192",28,104)})}));j.position.set(15.75,2.5,-4),j.rotation.y=-Math.PI/2,j.userData.click="accra",e.add(j),n.push(j),c(.1,5.3,.15,15.75,2.65,-5.9,l),c(.1,5.3,.15,15.75,2.65,-2.1,l);let L=new je;e.add(L);let G=new ci(16777215,40,30,.55,.9,1.5);G.position.set(2.5,9,3),G.target.position.set(0,0,0),G.castShadow=!0,G.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),G.shadow.bias=-2e-4,G.shadow.normalBias=.02,G.shadow.radius=6,L.add(G,G.target);let q=new ci(14674175,70,30,.7,.8,1.5);q.position.set(-6,7,-7),L.add(q,q.target);let Z=new ci(16770760,35,30,.8,.9,1.5);Z.position.set(7,4,8),L.add(Z,Z.target);let at=new Fs(12568012,1709844,.35);L.add(at);let rt=new Ii(16769720,18,14,2);rt.position.set(0,5.5,-12.5),L.add(rt);function ht(nt){let ot=new bi;ot.background=new ee(nt==="night"?"#020305":"#0c0c0c");let X=(fe,Xt)=>new Ln({color:new ee(fe).multiplyScalar(Xt)}),gt=nt==="sunset"?"#ffcf9e":nt==="night"?"#9fb6ff":"#ffffff";for(let fe of[-6,-3,0,3,6]){let Xt=new ie(new We(.5,.1,18),X(gt,nt==="night"?2:8));Xt.position.set(fe,9,0),ot.add(Xt)}let yt=new ie(new Ne(10,5),X(nt==="sunset"?"#ffb070":"#eef2f6",nt==="night"?.6:3));yt.position.set(14,4,0),yt.rotation.y=-Math.PI/2,ot.add(yt);let Bt=new ie(new Ne(10,4),X("#d9d2c4",nt==="night"?.3:1.6));Bt.position.set(-14,3.5,4),Bt.rotation.y=Math.PI/2,ot.add(Bt);let _t=new ie(new Ne(9,3),X("#F2E6CF",2.5));_t.position.set(0,5.5,-13.5),ot.add(_t);let Nt=new ie(new Ne(40,40),X("#2a2a2a",1));return Nt.rotation.x=-Math.PI/2,ot.add(Nt),ot}function dt(nt){let ot=nt==="night",X=nt==="sunset";G.color.set(X?"#ffc890":ot?"#cdd6f5":"#ffffff"),G.intensity=ot?14:X?36:40,q.color.set(X?"#ff9a5a":ot?"#8ea4e8":"#dfe8ff"),q.intensity=ot?60:70,Z.intensity=ot?8:35,at.intensity=ot?.08:.35,m.emissiveIntensity=ot?.4:1.4,m.emissive.set(X?"#ffd9ae":ot?"#bcd0ff":"#fff8ee"),_.emissiveIntensity=ot?4:2.4,E.material.emissiveIntensity=ot?2.5:1.6,l.color.set(X?"#1a1612":"#141414")}return{group:e,clickables:n,table:M,sign:b,signM:_,led:E,leaves:A,plant:g,envScene:ht,setMood:dt,mirror:o,lights:{key:G}}}function hd({quality:i}){let t=new je;t.name="course",t.visible=!1;let e=[],n=[],s=ld(42),r=[[0,-60],[70,-70],[118,-40],[125,10],[100,55],[55,62],[20,40],[-10,70],[-60,78],[-112,50],[-120,0],[-95,-45],[-50,-62]].map(([x,D])=>new N(x,0,D)),a=new Zi(r,!0,"centripetal"),o=900,l=a.getSpacedPoints(o),c=9.5,u=An(512,512,(x,D,Q)=>{x.fillStyle="#3b3c3d",x.fillRect(0,0,D,Q),la(x,D,Q,46,[1,1,1.03],11),x.fillStyle="#e9e6dc",x.fillRect(10,0,14,Q),x.fillRect(D-24,0,14,Q),x.fillStyle="#e9c45a";for(let W=0;W<Q;W+=128)x.fillRect(D/2-5,W,10,64)});u.wrapS=u.wrapT=In;let f=(x,D,Q,W,ut=-x,ft=x)=>{let Y=[],et=[],St=[],O=0;for(let vt=0;vt<=o;vt++){let bt=l[vt%o],Lt=l[(vt+1)%o],Kt=new N().subVectors(Lt,bt).normalize(),ae=new N(-Kt.z,0,Kt.x);if(vt>0&&(O+=l[vt%o].distanceTo(l[(vt-1)%o])),Y.push(bt.x+ae.x*ut,Q,bt.z+ae.z*ut,bt.x+ae.x*ft,Q,bt.z+ae.z*ft),et.push(0,O/W,1,O/W),vt<o){let Et=vt*2;St.push(Et,Et+1,Et+2,Et+1,Et+3,Et+2)}}let it=new Be;it.setAttribute("position",new ge(Y,3)),it.setAttribute("uv",new ge(et,2)),it.setIndex(St),it.computeVertexNormals();let st=new ie(it,D);return st.receiveShadow=!0,t.add(st),st};f(c/2,new Ee({map:u,roughness:.82,side:hn}),.02,10);let h=An(64,64,(x,D,Q)=>{x.fillStyle="#c8302a",x.fillRect(0,0,D,Q/2),x.fillStyle="#f2f0ea",x.fillRect(0,Q/2,D,Q/2)});h.wrapS=h.wrapT=In;let p=new Ee({map:h,roughness:.6,side:hn});f(0,p,.035,2.2,c/2,c/2+.9),f(0,p,.035,2.2,-c/2-.9,-c/2);let _=An(512,512,(x,D,Q)=>{x.fillStyle="#4d6b33",x.fillRect(0,0,D,Q),la(x,D,Q,40,[.6,1,.45],13)});_.wrapS=_.wrapT=In,_.repeat.set(90,90);let b=new ie(new Ne(700,700),new Ee({map:_,roughness:.95}));b.rotation.x=-Math.PI/2,b.receiveShadow=!0,t.add(b);let d=An(1024,410,(x,D,Q)=>{x.fillStyle="#56763a",x.fillRect(0,0,D,Q);for(let W=0;W<16;W++)x.fillStyle=W%2?"rgba(130,160,90,.35)":"rgba(40,70,25,.25)",x.fillRect(W*D/16,0,D/16,Q);x.save(),x.font=`900 320px ${vn}`,x.textAlign="center",x.textBaseline="middle","letterSpacing"in x&&(x.letterSpacing="15px"),x.fillStyle="rgba(178,205,120,.95)",x.fillText("PKM",D/2,Q/2+20),x.globalCompositeOperation="source-atop";for(let W=0;W<40;W++)x.fillStyle=W%2?"rgba(255,255,220,.18)":"rgba(30,60,10,.12)",x.fillRect(0,W*Q/40,D,Q/40);x.restore(),la(x,D,Q,34,[.55,1,.4],17)}),m=8,y=74,w=30,M=new ie(new Ne(y,w),new Ee({map:d,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1}));M.rotation.x=-Math.PI/2,M.position.set(-10,.01,m),M.receiveShadow=!0,t.add(M);let C={x:-10,z:m,hw:y/2-6,hh:w/2-4},E=[[118,-40],[70,-20],[40,10],[20,40]].map(([x,D])=>new N(x,0,D)),g=new Zi(E),S=An(256,256,(x,D,Q)=>{x.fillStyle="#9a4f2c",x.fillRect(0,0,D,Q),la(x,D,Q,60,[1,.55,.32],19)});S.wrapS=S.wrapT=In;let F=g.getSpacedPoints(120);{let x=[],D=[],Q=[],W=0;for(let Y=0;Y<=120;Y++){let et=F[Y],St=F[Math.min(120,Y+1)],O=F[Math.max(0,Y-1)],it=new N().subVectors(St,O).normalize(),st=new N(-it.z,0,it.x);if(Y&&(W+=et.distanceTo(O)),x.push(et.x+st.x*3.4,.012,et.z+st.z*3.4,et.x-st.x*3.4,.012,et.z-st.z*3.4),D.push(0,W/6,1,W/6),Y<120){let vt=Y*2;Q.push(vt,vt+1,vt+2,vt+1,vt+3,vt+2)}}let ut=new Be;ut.setAttribute("position",new ge(x,3)),ut.setAttribute("uv",new ge(D,2)),ut.setIndex(Q),ut.computeVertexNormals();let ft=new ie(ut,new Ee({map:S,roughness:1,side:hn}));ft.receiveShadow=!0,t.add(ft)}let A=(x,D,Q)=>{let W=1e9,ut=0;for(let ft=0;ft<x.length;ft+=1){let Y=x[ft],et=(Y.x-D)**2+(Y.z-Q)**2;et<W&&(W=et,ut=ft)}return{d:Math.sqrt(W),i:ut}},I=l.filter((x,D)=>D%6===0),B=(x,D)=>{let Q=A(I,x,D),W=1e9,ut=0;for(let ft=-8;ft<=8;ft++){let Y=((Q.i*6+ft)%o+o)%o,et=l[Y],St=(et.x-x)**2+(et.z-D)**2;St<W&&(W=St,ut=Y)}return{d:Math.sqrt(W),i:ut}},j=new Dn(.18,.28,1,7);j.translate(0,.5,0);let L=new Ur(1,1),G=new oi(j,new Ee({color:"#5a4430",roughness:1}),260),q=new oi(L,new Ee({color:"#3f6b2c",roughness:.9,flatShading:!0}),260);G.castShadow=q.castShadow=!0;let Z=0,at=new Se,rt=new tn,ht=new ee;for(;Z<260;){let x=(s()-.5)*420,D=(s()-.5)*420;if(B(x,D).d<14||Math.abs(x-C.x)<C.hw+10&&Math.abs(D-C.z)<C.hh+10||A(F,x,D).d<8)continue;let Q=4+s()*6,W=2+s()*2.4;at.compose(new N(x,0,D),rt.identity(),new N(1,Q,1)),G.setMatrixAt(Z,at),at.compose(new N(x,Q+W*.4,D),rt.setFromAxisAngle(new N(0,1,0),s()*6),new N(W,W*.75,W)),q.setMatrixAt(Z,at),q.setColorAt(Z,ht.setHSL(.27+s()*.06,.4+s()*.2,.22+s()*.1)),n.push({x,z:D,r:.45}),Z++}t.add(G,q);let dt=l[0],nt=l[3],ot=new N().subVectors(nt,dt).normalize(),X=Math.atan2(ot.x,ot.z),gt=new je;gt.position.copy(dt),gt.rotation.y=X,t.add(gt);let yt=new Ee({color:"#2b2d2f",metalness:.7,roughness:.4});for(let x of[-1,1]){let D=new ie(new We(.4,6.4,.4),yt);D.position.set(x*(c/2+1.6),3.2,0),D.castShadow=!0,gt.add(D)}let Bt=An(2048,256,(x,D,Q)=>{x.fillStyle="#0d0d0d",x.fillRect(0,0,D,Q),x.fillStyle="#F2F0EA",x.font=`800 150px ${vn}`,x.textBaseline="middle",x.fillText("PKM",60,Q/2+6),x.fillStyle="#BBA783",x.font=`600 84px ${vn}`,x.fillText("KUMASI PROVING GROUND",470,Q/2+4)}),_t=new ie(new We(c+3.6,1.4,.5),[yt,yt,yt,yt,new Ee({map:Bt,emissive:"#fff",emissiveMap:Bt,emissiveIntensity:.25}),new Ee({map:Bt})]);_t.position.y=6.2,_t.castShadow=!0,gt.add(_t);let Nt=An(256,32,(x,D,Q)=>{for(let W=0;W<16;W++)for(let ut=0;ut<2;ut++)x.fillStyle=(W+ut)%2?"#111":"#eee",x.fillRect(W*16,ut*16,16,16)}),fe=new ie(new Ne(c,1.2),new Ee({map:Nt,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));fe.rotation.x=-Math.PI/2,fe.position.y=.03,gt.add(fe);let Xt=An(300,200,(x,D,Q)=>{x.fillStyle="#ce1126",x.fillRect(0,0,D,Q/3),x.fillStyle="#fcd116",x.fillRect(0,Q/3,D,Q/3),x.fillStyle="#006b3f",x.fillRect(0,2*Q/3,D,Q/3),x.fillStyle="#000",x.beginPath();let W=D/2,ut=Q/2,ft=26;for(let Y=0;Y<10;Y++){let et=-Math.PI/2+Y*Math.PI/5,St=Y%2?ft*.4:ft;x.lineTo(W+Math.cos(et)*St,ut+Math.sin(et)*St)}x.fill()}),qt=new Ne(3,2,20,4),le=new ie(qt,new Ee({map:Xt,side:hn,roughness:.8})),ct=new ie(new Dn(.06,.08,10,10),yt),pt=new je;pt.position.copy(dt).add(new N(ot.z,0,-ot.x).multiplyScalar(c/2+6)),t.add(pt),ct.position.y=5,pt.add(ct),le.position.set(1.55,8.8,0),pt.add(le),le.castShadow=!0,n.push({x:pt.position.x,z:pt.position.z,r:.2});let Tt=(x,D,Q,W,ut,ft)=>{let Y=new je;Y.position.copy(W),Y.rotation.y=ut,t.add(Y);let et=An(1024,512,(it,st,vt)=>{it.fillStyle="#0c0c0c",it.fillRect(0,0,st,vt),it.fillStyle=Q,it.fillRect(0,vt-22,st,22),it.fillStyle="#F2F0EA",it.font=`800 112px ${vn}`,it.fillText(x,60,200),it.fillStyle="#B3ACA1",it.font=`500 50px ${vn}`,it.fillText(D,64,300),it.fillStyle=Q,it.font=`700 46px ${vn}`,it.fillText("Tap to visit \u2192",64,420)}),St=new ie(new Ne(10,5),new Ee({map:et,emissive:"#fff",emissiveMap:et,emissiveIntensity:.18}));St.position.y=5,St.userData.click=ft,Y.add(St),e.push(St);for(let it of[-3,3]){let st=new ie(new We(.3,5,.3),yt);st.position.set(it,1.5,-.2),st.castShadow=!0,Y.add(st),n.push({x:W.x+Math.cos(ut)*it,z:W.z-Math.sin(ut)*it,r:.3})}let O=new ie(new We(10.2,5.2,.2),yt);return O.position.set(0,5,-.15),Y.add(O),Y};Tt("Papa Kojo","Back to the portfolio","#BBA783",new N(30,0,-82),0,"home"),Tt("Accra 3D","Drive Liberation Road","#93AE7C",new N(140,0,20),-Math.PI/2,"accra"),Tt("Iconka Designs","Brands, posters, menus","#d9774a",new N(-136,0,10),Math.PI/2,"design");let Ft=[],Pt=new Tr(.22,.7,16);Pt.translate(0,.35,0);let Gt=new Ee({color:"#ff6a1a",roughness:.5});for(let x=0;x<8;x++){let D=Math.round(o*.52)+x*7,Q=l[D],W=l[D+1],ut=new N().subVectors(W,Q).normalize(),ft=new N(-ut.z,0,ut.x),Y=new ie(Pt,Gt);Y.castShadow=!0,Y.position.copy(Q).addScaledVector(ft,(x%2?1:-1)*1.6),t.add(Y),Ft.push({mesh:Y,home:Y.position.clone(),v:new N,spin:new N,knocked:!1})}let kt=[];for(let x=0;x<7;x++){let D=Math.round(o*.06)+x*16,Q=l[D],W=l[D+1],ut=new N().subVectors(W,Q).normalize(),ft=new N(-ut.z,0,ut.x),Y=Q.clone().addScaledVector(ft,c/2+2.5),et=new ie(new Dn(.08,.12,8,8),yt);et.position.copy(Y).setY(4),et.castShadow=!0,t.add(et);let St=new ie(new We(1.2,.15,.4),new Ee({color:"#222",emissive:"#ffd9a0",emissiveIntensity:0}));St.position.copy(Y).addScaledVector(ft,-.6).setY(8),St.rotation.y=Math.atan2(ft.x,ft.z),t.add(St),kt.push(St),n.push({x:Y.x,z:Y.z,r:.2})}let jt=[];for(let x=0;x<3;x++){let D=new Ii(16767392,0,26,1.6);D.position.copy(kt[x*3].position).setY(7.6),t.add(D),jt.push(D)}let ne=new $s;ne.scale.setScalar(4500),t.add(ne);let se=new kr(16777215,2.6);se.castShadow=!0,se.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),Object.assign(se.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:300}),se.shadow.bias=-4e-4,se.shadow.normalBias=.03,t.add(se,se.target);let H=new Fs(13624319,4872752,.6);t.add(H);let Zt=new N;function re(x){let D=x==="night"?-6:x==="sunset"?4:42,Q=x==="sunset"?250:200,W=fi.degToRad(90-D),ut=fi.degToRad(Q);Zt.setFromSphericalCoords(1,W,ut);let ft=ne.material.uniforms;ft.sunPosition.value.copy(Zt),ft.turbidity.value=x==="sunset"?6:3,ft.rayleigh.value=x==="night"?.4:x==="sunset"?2.6:1.2,ft.mieCoefficient.value=.004,ft.mieDirectionalG.value=.85,se.intensity=x==="night"?.05:x==="sunset"?1.9:2.7,se.color.set(x==="sunset"?"#ffb27a":x==="night"?"#8aa0d8":"#fff4e6"),H.intensity=x==="night"?.14:x==="sunset"?.3:.45,H.color.set(x==="night"?"#38456a":"#cfe3ff");for(let Y of kt)Y.material.emissiveIntensity=x==="night"?4:0;for(let Y of jt)Y.intensity=x==="night"?120:0}function he(x){se.position.copy(x).addScaledVector(Zt.y>.05?Zt:new N(.3,1,.2).normalize(),120),se.target.position.copy(x)}function It(x){let D=new bi,Q=new $s;Q.scale.setScalar(1e3),Object.assign(Q.material.uniforms.sunPosition.value,Zt),Q.material.uniforms.sunPosition.value.copy(Zt),Q.material.uniforms.rayleigh.value=ne.material.uniforms.rayleigh.value,Q.material.uniforms.turbidity.value=ne.material.uniforms.turbidity.value,D.add(Q);let W=new ie(new Ne(2e3,2e3),new Ln({color:x==="night"?"#050806":"#3d5228"}));return W.rotation.x=-Math.PI/2,W.position.y=-1,D.add(W),D}let _e=0;function zt(x,D){_e+=x;let Q=qt.attributes.position;for(let W=0;W<Q.count;W++){let ut=Q.getX(W)+1.5;Q.setZ(W,Math.sin(ut*2.2-_e*6)*.12*ut/3)}Q.needsUpdate=!0,qt.computeVertexNormals();for(let W of Ft){if(D){let ut=W.mesh.position.x-D.x,ft=W.mesh.position.z-D.z,Y=Math.hypot(ut,ft),et=Math.hypot(D.vx,D.vy);Y<1.5&&et>1&&!W.knocked&&(W.knocked=!0,W.v.set(ut/Y*et*.7+Math.sin(D.yaw)*et*.5,2+et*.15,ft/Y*et*.7+Math.cos(D.yaw)*et*.5),W.spin.set(s()*8,s()*8,s()*8),W.onHit&&W.onHit())}W.knocked&&(W.v.y-=9.8*x,W.mesh.position.addScaledVector(W.v,x),W.mesh.rotation.x+=W.spin.x*x,W.mesh.rotation.z+=W.spin.z*x,W.mesh.position.y<0&&(W.mesh.position.y=0,W.v.multiplyScalar(.5),W.v.y=Math.abs(W.v.y)*.3,W.spin.multiplyScalar(.6)))}}function Jt(){for(let x of Ft)x.knocked=!1,x.mesh.position.copy(x.home),x.mesh.rotation.set(0,0,0)}let P=(x,D)=>{let Q=B(x,D).d;return Q<c/2?{mu:1.05,rough:.02,name:"asphalt"}:Q<c/2+.9?{mu:.95,rough:.35,name:"kerb"}:A(F,x,D).d<3.4?{mu:.68,rough:.5,name:"dirt"}:{mu:.6,rough:.6,name:"grass"}};return{group:t,clickables:e,circles:n,curve:a,samples:l,start:{x:dt.x,z:dt.z,yaw:X},grip:P,trackDist:B,pkmZone:C,setMood:re,follow:he,envScene:It,animate:zt,resetCones:Jt,cones:Ft,bounds:{minX:-200,maxX:200,minZ:-200,maxZ:200}}}var ud={BoxGeometry:We,BufferAttribute:Sn,BufferGeometry:Be,CanvasTexture:Yi,CircleGeometry:wr,Color:ee,ColorManagement:ve,CylinderGeometry:Dn,ExtrudeGeometry:Nr,Float32BufferAttribute:ge,Group:je,InstancedMesh:oi,LatheGeometry:Fr,Matrix4:Se,Mesh:ie,MeshBasicMaterial:Ln,MeshPhysicalMaterial:Ai,MeshStandardMaterial:Ee,PlaneGeometry:Ne,PointLight:Ii,Points:yr,PointsMaterial:Is,Quaternion:tn,RepeatWrapping:In,SRGBColorSpace:nn,Shape:Ds,SphereGeometry:Ji,SpotLight:ci,TorusGeometry:Ei,Vector2:xt,Vector3:N};async function UM(i){let t=(K,Mt=document)=>Mt.querySelector(K),e=(K,Mt=document)=>[...Mt.querySelectorAll(K)],n=new URLSearchParams(location.search),s={get(K,Mt){try{let Ut=localStorage.getItem(K);return Ut?JSON.parse(Ut):Mt}catch{return Mt}},set(K,Mt){try{localStorage.setItem(K,JSON.stringify(Mt))}catch{}}},r=document.createElement("style");r.textContent=rd,document.head.appendChild(r);let a=t("#view"),o=n.get("quality")||s.get("pkm.drive.quality","auto"),l=["auto","high","low"].includes(o)?o:"auto",c=matchMedia("(max-width: 900px)"),u=(()=>{try{let K=document.createElement("canvas").getContext("webgl"),Mt=K&&K.getExtension("WEBGL_debug_renderer_info");return Mt?String(K.getParameter(Mt.UNMASKED_RENDERER_WEBGL)):""}catch{return""}})(),h=/SwiftShader|llvmpipe|Mali-[GT][0-9]{1,2}\b|Adreno \(TM\) [1-5][0-9]{2}\b|PowerVR|Intel\(R\) (HD|UHD) Graphics( [1-6][0-9]{2})?\b/i.test(u)||(navigator.hardwareConcurrency||8)<=4||c.matches,p=l==="high",_=()=>p||l==="auto"&&!h&&!b?"high":"low",b=!1,d=new rl({canvas:a,antialias:!0,powerPreference:"high-performance"});i.watchCanvas(a),d.setPixelRatio(Math.min(devicePixelRatio,_()==="low"?1:1.5)),d.toneMapping=ns,d.toneMappingExposure=1,d.shadowMap.enabled=!0,d.shadowMap.type=Qi;let m=new bi,y=new sn(36,1,.1,6e3),w=new cl(y,a);Object.assign(w,{enableDamping:!0,dampingFactor:.07,minDistance:4,maxDistance:18,maxPolarAngle:Math.PI*.495,autoRotateSpeed:.6,enablePan:!1});let M=new Xs(d),C,E;p&&(C=new dl(d),C.addPass(new fl(m,y)),E=new Zs(new xt(256,256),.35,.4,1),C.addPass(E),C.addPass(new pl));let g=cd({quality:_(),reflections:p});m.add(g.group);let S=new gl;S.setMuted(s.get("pkm.drive.muted",!1));let F={};function A(K){if(F[K])return F[K];let Mt=ed(ud,K),Ut=s.get("pkm.drive.paint."+K,0);Mt.paintIndex=Number.isInteger(Ut)&&Mt.spec.paints[Ut]?Ut:0;let Me=Mt.spec.paints[Mt.paintIndex];return Mt.setPaint(Me.hex,Me.metal),Mt.root.traverse(pe=>{pe.isMesh&&(pe.userData.car=K)}),F[K]=Mt}let I=n.get("car")||s.get("pkm.drive.car","volta"),B=Object.hasOwn(Vc,I)?I:"volta",j="showroom",L="studio",G=()=>A(B),q=()=>B==="volta"?"regent":"volta";function Z(){for(let Ut of Object.values(F))Ut.root.removeFromParent();let K=G();g.table.add(K.root),K.root.position.set(0,.1,0),K.root.rotation.set(0,0,0);for(let Ut of Object.values(F)){Ut.body.rotation.set(0,0,0),Ut.body.position.set(0,0,0);for(let Me of Ut.wheels)Me.pivot.rotation.y=0,Me.pivot.position.y=Me.baseY}let Mt=F[q()];Mt&&(g.group.add(Mt.root),Mt.root.position.set(-9.2,0,1.5),Mt.root.rotation.set(0,.6,0))}let at,rt=0;function ht(){if(!at){at=hd({quality:_()}),m.add(at.group),dt.collide=sd({bounds:at.bounds,circles:at.circles,carR:1,carHalf:1.7});for(let K of at.cones)K.onHit=()=>{rt++,S.thunk(.25),rt>=at.cones.length&&_e("cones","Slalom","All eight cones down.")}}}let dt={grip:(K,Mt)=>j==="drive"?at.grip(K,Mt):{mu:1,rough:0,name:"floor"},respawn:K=>{let Mt=at.trackDist(K.x,K.z),Ut=at.samples[Mt.i],Me=at.samples[(Mt.i+3)%at.samples.length];return{x:Ut.x,z:Ut.z,yaw:Math.atan2(Me.x-Ut.x,Me.z-Ut.z)}},dustColor:10780762,night:!1},nt=ad(t("#stage")),ot=new xl({THREE:ud,scene:m,camera:y,dom:a,vehicle:G(),audio:S,env:dt,onEvent:ut});od(t("#stage"),ot);let X={};function gt(){let K=j+":"+L;if(!X[K]){let Mt=j==="drive"?at.envScene(L):g.envScene(L);X[K]=M.fromScene(Mt,.03,.1,100,{size:128}).texture,Mt.traverse(Ut=>{Ut.geometry?.dispose(),Ut.material?.dispose()})}m.environment=X[K],m.environmentIntensity=j==="drive"?L==="night"?.12:.45:L==="night"?.55:1,j==="drive"?(m.background=null,m.fog=new mr(L==="night"?"#05070c":L==="sunset"?"#c98f6a":"#9fb6c8",L==="night"?.004:.0011),d.toneMappingExposure=L==="night"?.9:L==="sunset"?.7:.55):(m.background=new ee(L==="night"?"#050505":"#0a0a0a"),m.fog=null,d.toneMappingExposure=1),E&&(E.strength=L==="night"?.6:.35,E.enabled=j==="showroom"||L==="night"),dt.night=L==="night"}function yt(K){L=K,g.setMood(K),at?.setMood(K),gt(),e("[data-mood]").forEach(Mt=>Mt.setAttribute("aria-pressed",Mt.dataset.mood===K)),K==="night"&&(G().state.head=!0,Pt())}let Bt={hero:[[7.4,1.85,8.2],[-.9,.8,.4]],front:[[.4,1.3,8.2],[0,.9,0]],rear:[[-1.2,1.9,-8.2],[0,.9,0]],side:[[8.6,1.2,.3],[0,.9,0]],top:[[.4,10.5,1.2],[0,0,0]],wheel:[[3.2,.55,3.6],[1.2,.4,1.5]],interior:null},_t=null,Nt=!1;function fe(){w.minDistance=.01,w.maxDistance=.6,y.near=.02,y.updateProjectionMatrix()}function Xt(K,Mt,Ut=!1){if(i.reducedMotion.matches){_t=null,Ut&&fe(),y.position.copy(K),w.target.copy(Mt),w.update();return}_t={from:y.position.clone(),to:K,tf:w.target.clone(),tt:Mt,t0:performance.now(),interior:Ut}}function qt(K){if(ct(!1),K==="interior")return le();let[Mt,Ut]=Bt[K],Me=g.table.rotation.y,pe=Ke=>new N(Ke[0],Ke[1],Ke[2]).applyAxisAngle(new N(0,1,0),Me),an=pe(Mt),Un=pe(Ut);if(c.matches){K==="hero"&&(Un.y-=.33);let Ke=fi.clamp(.9/y.aspect,1,1.72);an.sub(Un).multiplyScalar(Ke).add(Un)}Xt(an,Un),t("#interiorBtn").textContent="Interior",e("[data-cam]").forEach(Ke=>Ke.setAttribute("aria-pressed",Ke.dataset.cam===K))}function le(){Nt=!0,t("#interiorBtn").textContent="Exterior";let K=G();K.root.updateMatrixWorld(!0);let Mt=K.driverEye.clone();K.body.localToWorld(Mt);let Ut=new N(0,0,1).applyQuaternion(K.root.getWorldQuaternion(new tn));Xt(Mt.clone().addScaledVector(Ut,-.02),Mt.clone().addScaledVector(Ut,.4),!0),e("[data-cam]").forEach(Me=>Me.setAttribute("aria-pressed",Me.dataset.cam==="interior")),K.state.interiorGlow=1}function ct(K=!0){Nt&&(Nt=!1,w.minDistance=4,w.maxDistance=18,y.near=.1,y.updateProjectionMatrix(),G().state.interiorGlow=0,K&&qt("hero"))}let pt=!i.reducedMotion.matches&&s.get("pkm.drive.spin",!1)===!0;t("#spin").setAttribute("aria-pressed",pt),i.reducedMotion.addEventListener("change",K=>{K.matches&&Tt(!1)});function Tt(K){pt=K,t("#spin").setAttribute("aria-pressed",K),s.set("pkm.drive.spin",K)}function Ft(){let K=G().spec;t("#kicker").textContent=`${K.brand} \xB7 2027`,t("#vname").textContent=K.name,t("#trim").textContent=K.trim,t("#tagline").textContent=K.tagline,t("#chips").innerHTML=K.chips.map(Mt=>`<li>${Mt}</li>`).join(""),e("[data-car]").forEach(Mt=>Mt.setAttribute("aria-current",Mt.dataset.car===B)),t("#swatches").innerHTML=K.paints.map((Mt,Ut)=>`<button class="swatch" style="--sw:${Mt.hex}" data-paint="${Ut}" aria-pressed="${Ut===G().paintIndex}" aria-label="${Mt.name}" title="${Mt.name}"></button>`).join(""),t("#paintName").textContent=K.paints[G().paintIndex].name,t('[data-panel="tailgate"]').textContent=B==="volta"?"Tailgate":"Liftgate",t("#accraLink").href=`/accra3d/?drive=${B}&paint=${G().paintIndex}`,document.title=`PKM ${K.name} \xB7 Drive Studio \xB7 Papa Kojo`}function Pt(){let K=G().state;for(let Mt of["head","left","right","hazard"])for(let Ut of e(`[data-light="${Mt}"]`))Ut.setAttribute("aria-pressed",!!K[Mt]);for(let[Mt,Ut]of Object.entries(G().panels)){let Me=t(`[data-panel="${Mt}"]`);Me&&Ut.userData&&Me.setAttribute("aria-pressed",Ut.userData.target===1)}t("#engineBtn").textContent=ot.startTimer?"Cancel start":ot.dyn.engine?"Stop engine":"Start engine",t("#reverseBtn").textContent=ot.dyn.reverse?"Shift to drive":"Shift to reverse",t("#reverseBtn").setAttribute("aria-pressed",ot.dyn.reverse)}function Gt(K){K===B||j==="drive"||(ct(!1),B=K,s.set("pkm.drive.car",K),ot.setVehicle(G()),L==="night"&&(G().state.head=!0),Z(),qt("hero"),Ft(),Pt())}e("[data-car]").forEach(K=>K.addEventListener("click",()=>Gt(K.dataset.car))),t("#swatches").addEventListener("click",K=>{let Mt=K.target.closest("[data-paint]");if(!Mt)return;let Ut=+Mt.dataset.paint,Me=G().spec.paints[Ut];G().setPaint(Me.hex,Me.metal),G().paintIndex=Ut,s.set("pkm.drive.paint."+B,Ut),Ft(),S.click(2600,.08,.02),Me.name==="Kente Gold"&&_e("gold","Kente Gold","The only paint with a story woven in.")}),e("[data-panel]").forEach(K=>K.addEventListener("click",()=>kt(K.dataset.panel)));function kt(K){let Mt=G().togglePanel(K);K.startsWith("front")||K.startsWith("rear")?Mt?S.latch():setTimeout(()=>S.thunk(.5),260):K==="hood"||K==="tailgate"?Mt?S.latch():setTimeout(()=>S.thunk(.7),420):S.click(1200,.12,.08),Pt()}e("[data-light]").forEach(K=>K.addEventListener("click",()=>ot.toggle(K.dataset.light))),t("#horn").addEventListener("click",()=>ot.horn()),t("#engineBtn").addEventListener("click",()=>ot.toggleEngine()),t("#interiorBtn").addEventListener("click",()=>qt(Nt?"hero":"interior")),e("[data-cam]").forEach(K=>K.addEventListener("click",()=>qt(K.dataset.cam))),e("[data-mood]").forEach(K=>K.addEventListener("click",()=>yt(K.dataset.mood))),t("#spin").addEventListener("click",()=>Tt(!pt)),t("#quality").value=l,t("#quality").addEventListener("change",K=>{s.set("pkm.drive.quality",K.target.value);let Mt=new URL(location.href);Mt.searchParams.delete("quality"),Mt.searchParams.set("car",B),location.replace(Mt)});function jt(){t("#mute").setAttribute("aria-pressed",!S.muted),t("#mute").textContent=S.muted?"Sound off":"Sound on"}t("#mute").addEventListener("click",()=>{S.setMuted(!S.muted),s.set("pkm.drive.muted",S.muted),jt(),S.muted||S.unlock().catch(()=>{})}),jt(),t("#fullscreen").hidden=!document.fullscreenEnabled,t("#fullscreen").addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{})});function ne(K){t("#panel").dataset.open=K,t("#panelToggle").setAttribute("aria-expanded",K),t("#panelBody").inert=c.matches&&!K}ne(!1),c.addEventListener("change",()=>ne(!1)),t("#panelToggle").addEventListener("click",()=>ne(t("#panel").dataset.open!=="true")),t(".skip").addEventListener("click",K=>{K.preventDefault(),ne(!0),(j==="drive"?t("#exitDrive"):t("#panelBody").querySelector("button")).focus()}),t("#driveBtn").addEventListener("click",()=>{t("#driveBtn").disabled||(t("#driveBtn").disabled=!0,t("#driveBtn").textContent="Opening track\u2026",S.muted||S.unlock().catch(()=>{}),requestAnimationFrame(()=>requestAnimationFrame(()=>{if(i.running)try{H("drive")}catch{Y("The track couldn\u2019t open","Try again or drive through Accra.")}finally{t("#driveBtn").disabled=!1,t("#driveBtn").textContent="Test track"}})))}),t("#exitDrive").addEventListener("click",()=>H("showroom")),t("#camBtn").addEventListener("click",()=>ot.cycleCamera()),t("#reverseBtn").addEventListener("click",()=>{ot.shiftDirection(),a.focus({preventScroll:!0})}),t("#helpBtn").addEventListener("click",()=>{t("#keys").hidden=!t("#keys").hidden,t("#helpBtn").setAttribute("aria-expanded",!t("#keys").hidden)}),t("#resetBtn").addEventListener("click",()=>{ot.recover(),se()}),document.addEventListener("keydown",K=>{K.key==="Escape"&&(t("#secrets").hidden?j==="drive"?H("showroom"):t("#panel").dataset.open==="true"&&c.matches?(ne(!1),t("#panelToggle").focus()):Nt&&qt("hero"):(zt(!1),t("#secretsBtn").focus()))});function se(){rt=0,at.resetCones()}function H(K,Mt=!0){if(K!==j){if(K==="drive"&&ht(),j=K,document.body.dataset.mode=K,K==="drive"){ct(!1),_t=null,ne(!1),zt(!1),g.group.visible=!1,at.group.visible=!0,at.setMood(L),m.add(G().root),w.enabled=!1,ot.setEnabled(!0),ot.cycleCamera("chase");for(let Ut of Object.keys(G().panels))G().togglePanel(Ut,!1);ot.place(at.start.x,at.start.z,at.start.yaw),se(),nt.el.hidden=!1,ot.toggleEngine(!0),t("#keys").hidden=!0,t("#helpBtn").setAttribute("aria-expanded","false"),Y("Kumasi test track",matchMedia("(pointer: coarse)").matches?"Use the pedals and arrows below.":"W to go, S to brake, V to shift. C changes the camera."),a.setAttribute("aria-label","Kumasi test track. W to accelerate, S to brake, V to shift.")}else ot.setEnabled(!1),nt.el.hidden=!0,g.group.visible=!0,at.group.visible=!1,w.enabled=!0,y.near=.1,y.fov=36,y.updateProjectionMatrix(),S.cabin=0,Z(),qt("hero"),a.setAttribute("aria-label","3D showroom. Drag to orbit and use the controls to inspect the car."),Mt&&t("#driveBtn").focus({preventScroll:!0});gt(),Pt()}}let Zt={sign:["The sign","Click the PKM sign three times."],plant:["Akwaaba","Water the plant in the corner."],horn:["Beep beep","Honk three times quickly."],pkm:["Field work","Find the name mowed into the infield."],cones:["Slalom","Knock over all eight cones."],gold:["Kente Gold","Find the paint with a story."],konami:["Disco","The classic code. \u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA"],ton:["Ton-up","Hit 120 km/h on the proving ground."]},re=s.get("pkm.drive.secrets",[]),he=new Set(Array.isArray(re)?re.filter(K=>Object.hasOwn(Zt,K)):[]);function It(){for(let K of document.querySelectorAll("[data-secret-count], #secretCount"))K.textContent=`${he.size}/${Object.keys(Zt).length}`;t("#secretList").innerHTML=Object.entries(Zt).map(([K,[Mt,Ut]])=>`<li data-found="${he.has(K)}"><strong>${he.has(K)?Mt:"Hidden"}</strong><span>${Ut}</span></li>`).join("")}function _e(K,Mt,Ut){he.has(K)||(he.add(K),s.set("pkm.drive.secrets",[...he]),It(),S.chime(),Y(`Secret found \xB7 ${he.size}/${Object.keys(Zt).length}`,`${Mt}. ${Ut}`))}function zt(K){t("#secrets").hidden=!K,t("#secretsBtn").setAttribute("aria-expanded",K),K&&t("#closeSecrets").focus()}t("#secretsBtn").addEventListener("click",()=>zt(t("#secrets").hidden)),t("#closeSecrets").addEventListener("click",()=>{zt(!1),t("#secretsBtn").focus()}),It();let Jt=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"],P=0,x=0;addEventListener("keydown",K=>{P=K.key.toLowerCase()===Jt[P]?P+1:K.key.toLowerCase()===Jt[0]?1:0,P===Jt.length&&(P=0,i.reducedMotion.matches||(x=8),bt(),_e("konami","Disco","Eight seconds of showroom party."))});let D=0,Q=0,W=["#F2E6CF","#BBA783","#93AE7C","#ce1126","#fcd116","#006b3f"];function ut(K,Mt){K==="horn"&&Mt>=3&&_e("horn","Beep beep","Akwaaba! Kumasi heard you."),(K==="engine"||K==="direction")&&Pt(),K==="shift-blocked"&&Y("Stop before shifting","Bring the car to a stop and release the accelerator."),bt(),K==="camera"&&(t("#camBtn").textContent="Camera: "+{chase:"Chase",far:"Far chase",cabin:"Cockpit",hood:"Bonnet",cine:"Cinematic",drone:"Drone"}[Mt],Mt==="drone"&&j==="drive"&&Y("Drone camera","Look down at the infield.")),K==="lights"&&Pt()}let ft;function Y(K,Mt){let Ut=t("#toast");Ut.innerHTML=`<strong>${K}</strong><span>${Mt}</span>`,Ut.hidden=!1,Ut.classList.remove("show"),Ut.offsetWidth,Ut.classList.add("show"),clearTimeout(ft),ft=setTimeout(()=>Ut.classList.remove("show"),4200)}let et=new Gr,St=new xt,O=null;a.addEventListener("pointerdown",K=>{O=[K.clientX,K.clientY]}),a.addEventListener("pointerup",K=>{if(!O||Math.hypot(K.clientX-O[0],K.clientY-O[1])>6)return;let Mt=st(K);if(!Mt)return;let Ut=Mt.object,Me=Ut.userData.click;if(Ut.userData.panel&&Ut.userData.car===B&&j==="showroom")return kt(Ut.userData.panel);if(Ut.userData.car&&Ut.userData.car!==B&&j==="showroom")return Gt(Ut.userData.car);if(Me==="sign")D++,g.signM.emissive.set(W[D%W.length]),S.click(800+D*120,.15,.05),D>=3&&_e("sign","The sign","It cycles through the Ghana flag colours too.");else if(Me==="plant"){Q++,S.chime([520,660]);for(let pe of g.leaves)pe.scale.y=Math.min(2.6,pe.scale.y*1.08);Y("Watering the plants\u2026",Q<3?"It likes that.":"Look how it has grown."),Q>=3&&_e("plant","Akwaaba","Just like the portfolio\u2019s welcome screen.")}else Me==="poster"||Me==="design"?location.href="/design/":Me==="home"?location.href="/":Me==="accra"&&(location.href=t("#accraLink").href)});let it=0;a.addEventListener("pointermove",K=>{if(j!=="showroom"||K.pointerType==="touch")return;let Mt=performance.now();if(Mt-it<120)return;it=Mt;let Ut=st(K);a.style.cursor=Ut&&(Ut.object.userData.click||Ut.object.userData.car&&j==="showroom"&&(Ut.object.userData.panel||Ut.object.userData.car!==B))?"pointer":""});function st(K){let Mt=a.getBoundingClientRect();St.set((K.clientX-Mt.left)/Mt.width*2-1,-((K.clientY-Mt.top)/Mt.height)*2+1),et.setFromCamera(St,y);let Ut=j==="showroom"?[...g.clickables,...Object.values(F).map(Me=>Me.root)]:at.clickables;return et.intersectObjects(Ut,!0).find(Me=>Me.object.visible)||null}let vt=0;function bt(){vt=performance.now()+1600}function Lt(){let K=a.clientWidth,Mt=a.clientHeight;!K||!Mt||(d.setSize(K,Mt,!1),C?.setSize(K,Mt),y.aspect=K/Mt,y.updateProjectionMatrix(),bt())}new ResizeObserver(Lt).observe(a),w.addEventListener("change",bt),document.querySelector("[data-scene-controls]").addEventListener("click",bt),a.addEventListener("pointerup",bt);let Kt,ae=0,Et=0,Qt=0;function ue(K){C&&E.enabled?C.render(K):d.render(m,y)}function Ot(K){if(!i.running){ot.setEnabled(!1);return}requestAnimationFrame(Ot);let Mt=Kt===void 0?0:(K-Kt)/1e3;if(Kt=K,document.hidden||Mt>.5)return;let Ut=Math.min(Mt,.1);if(j==="showroom"){let pe=G(),an=pt&&!_t&&!Nt;if(an&&(g.table.rotation.y+=Ut*.12),_t){let Ue=Math.min(1,(K-_t.t0)/1e3),mi=1-Math.pow(1-Ue,3);y.position.lerpVectors(_t.from,_t.to,mi),w.target.lerpVectors(_t.tf,_t.tt,mi),_t.interior&&Ue>.62&&y.near!==.02&&fe(),Ue>=1&&(_t=null)}w.update();let Un=Object.values(pe.panels).some(Ue=>Math.abs(Ue.userData.open-Ue.userData.target)>.002),Ke=pe.state;if(K>vt&&!an&&!_t&&!Un&&!ot.dyn.engine&&!Ke.left&&!Ke.right&&!Ke.hazard&&x<=0)return;if(pe.update(Ut,{engine:ot.dyn.engine,night:L==="night"}),ot.dyn.engine){let Ue=ot.dyn;Ue.rpm+=(pe.spec.idle-Ue.rpm)*Math.min(1,Ut*3),Ue.throttle*=.9,pe.body.position.y=i.reducedMotion.matches?0:Math.sin(K*.05)*.0012,S.update(Ue,pe.spec,Ut),pe.drawCluster(0,Ue.rpm,"P")}if(x>0){x-=Ut;let Ue=K/600%1;g.signM.emissive.setHSL(Ue,.8,.6),g.led.material.emissive.setHSL((Ue+.5)%1,.8,.55),g.lights.key.color.setHSL(Ue,.7,.6),x<=0&&yt(L)}}else{ot.update(Ut);let pe=ot.dyn;at.follow(G().root.position),at.animate(Ut,pe),nt.update(ot.hud(),Ut),Math.abs(pe.vx)*3.6>120&&_e("ton","Ton-up","You reached 120 km/h on the test track.");let an=at.pkmZone;Math.abs(pe.x-an.x)<an.hw&&Math.abs(pe.z-an.z)<an.hh&&_e("pkm","Field work","You found the PKM in the grass. Try the drone camera.")}if(ue(Ut),Et++,ae+=Mt*1e3,ae<1400)return;Qt=Et/ae*1e3<30?Qt+1:0,Et=0,ae=0,l==="auto"&&!b&&Qt>=2&&(b=!0,d.setPixelRatio(Math.min(devicePixelRatio,.9)),Lt())}i.progress("Setting up the showroom\u2026"),Z(),Ft();let we=n.get("mood");yt(["studio","sunset","night"].includes(we)?we:"studio"),Lt();let[Ce,Cn]=Bt.hero;y.position.set(...Ce),w.target.set(...Cn),c.matches&&(w.target.y-=.33,y.position.sub(w.target).multiplyScalar(fi.clamp(.9/y.aspect,1,1.72)).add(w.target)),w.update(),i.progress("Preparing the paint and lights\u2026");try{d.compileAsync&&await d.compileAsync(m,y)}catch{}if(ue(0),!i.running)return;Pt(),i.ready();let pi=K=>window.requestIdleCallback?requestIdleCallback(K,{timeout:2500}):setTimeout(K,600);pi(()=>{if(!i.running)return;let K=A(q());K.root.traverse(Mt=>{Mt.isMesh&&(Mt.userData.car=K.spec.id)}),j==="showroom"&&Z(),bt(),pi(()=>{i.running&&!at&&!c.matches&&(ht(),at.group.visible=!1)})}),s.get("pkm.drive.tip",!1)||(setTimeout(()=>Y("Tip","Click a door, the bonnet or the PKM sign. The car beside the turntable swaps in when you click it."),1200),s.set("pkm.drive.tip",!0)),n.get("mode")==="drive"&&requestAnimationFrame(()=>{i.running&&H("drive",!1)}),requestAnimationFrame(Ot),window.__ds={scene:m,cars:F,drive:ot,setMode:H,selectCar:Gt,setMood:yt,flyTo:qt,get course(){return at},togglePanel:kt,secret:_e}}export{UM as startStudio};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
