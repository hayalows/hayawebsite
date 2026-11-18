var Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,ic=1,Ch=2;var $i=1,Rh=2,Fs=3,Li=0,on=1,tn=2,hi=0,Os=1,ji=2,sc=3,rc=4,Ph=5;var Qi=100,Ih=101,Lh=102,Dh=103,Nh=104,Uh=200,Fh=201,Oh=202,Bh=203,ac=204,oc=205,kh=206,zh=207,Gh=208,Vh=209,Hh=210,Wh=211,Xh=212,qh=213,Yh=214,Ua=0,Fa=1,Oa=2,Ms=3,Ba=4,ka=5,za=6,Ga=7,lc=0,Zh=1,Kh=2,qn=0,Gr=1,Vr=2,Hr=3,ts=4,Wr=5,Xr=6,qr=7;var cc=300,es=301,Bs=302,po=303,mo=304,Pn=1e3,Wn=1001,Va=1002,je=1003,Jh=1004;var Yr=1005;var dn=1006,go=1007;var ui=1008;var mn=1009,hc=1010,uc=1011,ks=1012,_o=1013,zn=1014,Dn=1015,Xe=1016,xo=1017,vo=1018,ns=1020,dc=35902,fc=35899,pc=1021,mc=1022,Gn=1023,ii=1026,di=1027,yo=1028,Mo=1029,Di=1030,So=1031;var bo=1033,Zr=33776,Kr=33777,Jr=33778,$r=33779,wo=35840,To=35841,Eo=35842,Ao=35843,Co=36196,Ro=37492,Po=37496,Io=37488,Lo=37489,jr=37490,Do=37491,No=37808,Uo=37809,Fo=37810,Oo=37811,Bo=37812,ko=37813,zo=37814,Go=37815,Vo=37816,Ho=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Zo=36492,Ko=36494,Jo=36495,$o=36283,jo=36284,Qr=36285,Qo=36286;var lr=2300,Ha=2301,Da=2302,Vl=2303,Hl=2400,Wl=2401,Xl=2402;var $h=3200;var tl=0,jh=1,Vn="",rn="srgb",cr="srgb-linear",hr="linear",Re="srgb";var Na=7680;var Qh=519,tu=512,eu=513,nu=514,gc=515,iu=516,su=517,_c=518,xc=519,ru=35044;var vc="300 es",Rn=2e3,Ss=2001;function fd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){let i=ur("canvas");return i.style.display="block",i}var Xc={},bs=null;function yc(...i){let t="THREE."+i.shift();bs?bs("log",t,...i):console.log(t,...i)}function ou(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=ou(i);let t="THREE."+i.shift();if(bs)bs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=ou(i);let t="THREE."+i.shift();if(bs)bs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in Xc||(Xc[t]=!0,oe(...i))}function lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var cu={[Ua]:Ua,[Oa]:za,[Ba]:Ba,[Ms]:ka,[Fa]:Fa,[za]:Oa,[Ga]:Ga,[ka]:Ms},kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=1234567,sr=Math.PI/180,Wi=180/Math.PI;function is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function Mc(i,t){return(i%t+t)%t}function md(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gd(i,t,e){return i!==t?(e-i)/(t-i):0}function rr(i,t,e){return(1-e)*i+e*t}function _d(i,t,e,n){return rr(i,t,1-Math.exp(-e*n))}function xd(i,t=1){return t-Math.abs(Mc(i,t*2)-t)}function vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Md(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sd(i,t){return i+Math.random()*(t-i)}function bd(i){return i*(.5-Math.random())}function wd(i){i!==void 0&&(qc=i);let t=qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Td(i){return i*sr}function Ed(i){return i*Wi}function Ad(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hu(i,t){if(t.constructor===Float32Array)return i;let e=bc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function uu(i,t){if(t.constructor===Float32Array)return i;let e=bc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var fi={DEG2RAD:sr,RAD2DEG:Wi,generateUUID:is,clamp:me,euclideanModulo:Mc,mapLinear:md,inverseLerp:gd,lerp:rr,damp:_d,pingpong:xd,smoothstep:vd,smootherstep:yd,randInt:Md,randFloat:Sd,randFloatSpread:bd,seededRandom:wd,degToRad:Td,radToDeg:Ed,isPowerOfTwo:Ad,ceilPowerOfTwo:Cd,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:Rd,normalize:uu,denormalize:hu},Mt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],S=r[a+3];if(p!==S||l!==d||c!==f||h!==m){let u=l*d+c*f+h*m+p*S;u<0&&(d=-d,f=-f,m=-m,S=-S,u=-u);let g=1-o;if(u<.9995){let y=Math.acos(u),T=Math.sin(y);g=Math.sin(g*y)/T,o=Math.sin(o*y)/T,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,p=p*g+S*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,p=p*g+S*o;let y=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=y,c*=y,h*=y,p*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*p+l*f-c*d,t[e+1]=l*m+h*d+c*p-o*f,t[e+2]=c*m+h*f+o*d-l*p,t[e+3]=h*m-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*p+c*f*m,this._y=c*f*p-d*h*m,this._z=c*h*m+d*f*p,this._w=c*h*p-d*f*m;break;case"YXZ":this._x=d*h*p+c*f*m,this._y=c*f*p-d*h*m,this._z=c*h*m-d*f*p,this._w=c*h*p+d*f*m;break;case"ZXY":this._x=d*h*p-c*f*m,this._y=c*f*p+d*h*m,this._z=c*h*m+d*f*p,this._w=c*h*p-d*f*m;break;case"ZYX":this._x=d*h*p-c*f*m,this._y=c*f*p+d*h*m,this._z=c*h*m-d*f*p,this._w=c*h*p+d*f*m;break;case"YZX":this._x=d*h*p+c*f*m,this._y=c*f*p+d*h*m,this._z=c*h*m-d*f*p,this._w=c*h*p-d*f*m;break;case"XZY":this._x=d*h*p-c*f*m,this._y=c*f*p-d*h*m,this._z=c*h*m+d*f*p,this._w=c*h*p+d*f*m;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new O,Yc=new Qe,ce=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],f=n[5],m=n[8],S=s[0],u=s[3],g=s[6],y=s[1],T=s[4],M=s[7],C=s[2],E=s[5],x=s[8];return r[0]=a*S+o*y+l*C,r[3]=a*u+o*T+l*E,r[6]=a*g+o*M+l*x,r[1]=c*S+h*y+p*C,r[4]=c*u+h*T+p*E,r[7]=c*g+h*M+p*x,r[2]=d*S+f*y+m*C,r[5]=d*u+f*T+m*E,r[8]=d*g+f*M+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*p+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/m;return t[0]=p*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=d*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new ce,Zc=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){let i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Re&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Re&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:t,whitePoint:n,transfer:hr,toXYZ:Zc,fromXYZ:Kc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:Zc,fromXYZ:Kc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var ve=Pd();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,Wa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=ur("canvas")),as.width=t.width,as.height=t.height;let s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Id=0,ws=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ml(s[a].image)):r.push(Ml(s[a]))}else r=Ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var Ld=0,Sl=new O,fn=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=dn,a=ui,o=Gn,l=mn,c=i.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=is(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=cc;fn.DEFAULT_ANISOTROPY=1;var De=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],f=l[5],m=l[9],S=l[2],u=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-S)<.01&&Math.abs(m-u)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+S)<.1&&Math.abs(m+u)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(f+1)/2,C=(g+1)/2,E=(h+d)/4,x=(p+S)/4,v=(m+u)/4;return T>M&&T>C?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=x/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=v/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((u-m)*(u-m)+(p-S)*(p-S)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(u-m)/y,this.y=(p-S)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xa=class extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new fn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Xa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},dr=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Me=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,p,d,f,m,S,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,d,f,m,S,u)}set(t,e,n,s,r,a,o,l,c,h,p,d,f,m,S,u){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=p,g[14]=d,g[3]=f,g[7]=m,g[11]=S,g[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),a=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*p,m=o*h,S=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=f+m*c,e[5]=d-S*c,e[9]=-o*l,e[2]=S-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*p,m=c*h,S=c*p;e[0]=d+S*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=S+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*p,m=c*h,S=c*p;e[0]=d-S*o,e[4]=-a*p,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=S-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*p,m=o*h,S=o*p;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+S,e[1]=l*p,e[5]=S*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,S=o*c;e[0]=l*h,e[4]=S-d*p,e[8]=m*p+f,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*p+m,e[10]=d-S*p}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,S=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+S,e[5]=a*h,e[9]=f*p-m,e[2]=m*p-f,e[6]=o*h,e[10]=S*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dd,t,Nd)}lookAt(t,e,n){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),mi.crossVectors(n,vn),mi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),mi.crossVectors(n,vn)),mi.normalize(),la.crossVectors(vn,mi),s[0]=mi.x,s[4]=la.x,s[8]=vn.x,s[1]=mi.y,s[5]=la.y,s[9]=vn.y,s[2]=mi.z,s[6]=la.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],f=n[13],m=n[2],S=n[6],u=n[10],g=n[14],y=n[3],T=n[7],M=n[11],C=n[15],E=s[0],x=s[4],v=s[8],k=s[12],A=s[1],L=s[5],B=s[9],Q=s[13],N=s[2],G=s[6],K=s[10],q=s[14],ct=s[3],rt=s[7],ft=s[11],dt=s[15];return r[0]=a*E+o*A+l*N+c*ct,r[4]=a*x+o*L+l*G+c*rt,r[8]=a*v+o*B+l*K+c*ft,r[12]=a*k+o*Q+l*q+c*dt,r[1]=h*E+p*A+d*N+f*ct,r[5]=h*x+p*L+d*G+f*rt,r[9]=h*v+p*B+d*K+f*ft,r[13]=h*k+p*Q+d*q+f*dt,r[2]=m*E+S*A+u*N+g*ct,r[6]=m*x+S*L+u*G+g*rt,r[10]=m*v+S*B+u*K+g*ft,r[14]=m*k+S*Q+u*q+g*dt,r[3]=y*E+T*A+M*N+C*ct,r[7]=y*x+T*L+M*G+C*rt,r[11]=y*v+T*B+M*K+C*ft,r[15]=y*k+T*Q+M*q+C*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],f=t[14],m=t[3],S=t[7],u=t[11],g=t[15],y=l*f-c*d,T=o*f-c*p,M=o*d-l*p,C=a*f-c*h,E=a*d-l*h,x=a*p-o*h;return e*(S*y-u*T+g*M)-n*(m*y-u*C+g*E)+s*(m*T-S*C+g*x)-r*(m*M-S*E+u*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],f=t[11],m=t[12],S=t[13],u=t[14],g=t[15],y=e*o-n*a,T=e*l-s*a,M=e*c-r*a,C=n*l-s*o,E=n*c-r*o,x=s*c-r*l,v=h*S-p*m,k=h*u-d*m,A=h*g-f*m,L=p*u-d*S,B=p*g-f*S,Q=d*g-f*u,N=y*Q-T*B+M*L+C*A-E*k+x*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/N;return t[0]=(o*Q-l*B+c*L)*G,t[1]=(s*B-n*Q-r*L)*G,t[2]=(S*x-u*E+g*C)*G,t[3]=(d*E-p*x-f*C)*G,t[4]=(l*A-a*Q-c*k)*G,t[5]=(e*Q-s*A+r*k)*G,t[6]=(u*M-m*x-g*T)*G,t[7]=(h*x-d*M+f*T)*G,t[8]=(a*B-o*A+c*v)*G,t[9]=(n*A-e*B-r*v)*G,t[10]=(m*E-S*M+g*y)*G,t[11]=(p*M-h*E-f*y)*G,t[12]=(o*k-a*L-l*v)*G,t[13]=(e*L-n*k+s*v)*G,t[14]=(S*T-m*C-u*y)*G,t[15]=(h*C-p*T+d*y)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,d=r*c,f=r*h,m=r*p,S=a*h,u=a*p,g=o*p,y=l*c,T=l*h,M=l*p,C=n.x,E=n.y,x=n.z;return s[0]=(1-(S+g))*C,s[1]=(f+M)*C,s[2]=(m-T)*C,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(d+g))*E,s[6]=(u+y)*E,s[7]=0,s[8]=(m+T)*x,s[9]=(u-y)*x,s[10]=(1-(d+S))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let c=1/a,h=1/o,p=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=p,Fn.elements[9]*=p,Fn.elements[10]*=p,e.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,S;if(l)m=r/(a-r),S=a*r/(a-r);else if(o===Rn)m=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ss)m=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,S;if(l)m=1/(a-r),S=a/(a-r);else if(o===Rn)m=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ss)m=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},os=new O,Fn=new Me,Dd=new O(0,0,0),Nd=new O(1,1,1),mi=new O,la=new O,vn=new O,Jc=new Me,$c=new Qe,si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ud=0,jc=new O,ls=new Qe,$n=new Me,ca=new O,$s=new O,Fd=new O,Od=new Qe,Qc=new O(1,0,0),th=new O(0,1,0),eh=new O(0,0,1),nh={type:"added"},Bd={type:"removed"},cs={type:"childadded",child:null},bl={type:"childremoved",child:null},He=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new si,n=new Qe,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ce}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Qc,t)}rotateY(t){return this.rotateOnAxis(th,t)}rotateZ(t){return this.rotateOnAxis(eh,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qc,t)}translateY(t){return this.translateOnAxis(th,t)}translateZ(t){return this.translateOnAxis(eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt($s,ca,this.up):$n.lookAt(ca,$s,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ls.setFromRotationMatrix($n),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nh),cs.child=t,this.dispatchEvent(cs),cs.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bd),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nh),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new O(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},kd={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let u=e.getJointPose(S,n),g=this._getHandJoint(c,S);u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=u.radius),g.visible=u!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=Mc(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wl(a,r,t+1/3),this.g=wl(a,r,t),this.b=wl(a,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ve.workingToColorSpace(cn.copy(this),t),Math.round(me(cn.r*255,0,255))*65536+Math.round(me(cn.g*255,0,255))*256+Math.round(me(cn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(cn.copy(this),e);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=rn){ve.workingToColorSpace(cn.copy(this),t);let e=cn.r,n=cn.g,s=cn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(ha);let n=rr(gi.h,ha.h,e),s=rr(gi.s,ha.s,e),r=rr(gi.l,ha.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new $t;$t.NAMES=du;var fr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Mi=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new O,jn=new O,Tl=new O,Qn=new O,hs=new O,us=new O,ih=new O,El=new O,Al=new O,Cl=new O,Rl=new De,Pl=new De,Il=new De,yi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),jn.subVectors(n,e),Tl.subVectors(t,e);let a=On.dot(On),o=On.dot(jn),l=On.dot(Tl),c=jn.dot(jn),h=jn.dot(Tl),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Rl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Rl.fromBufferAttribute(t,e),Pl.fromBufferAttribute(t,n),Il.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Pl,r.y),a.addScaledVector(Il,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),jn.subVectors(t,e),On.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),On.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;hs.subVectors(s,n),us.subVectors(r,n),El.subVectors(t,n);let l=hs.dot(El),c=us.dot(El);if(l<=0&&c<=0)return e.copy(n);Al.subVectors(t,s);let h=hs.dot(Al),p=us.dot(Al);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(hs,a);Cl.subVectors(t,r);let f=hs.dot(Cl),m=us.dot(Cl);if(m>=0&&f<=m)return e.copy(r);let S=f*c-l*m;if(S<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(us,o);let u=h*m-f*p;if(u<=0&&p-h>=0&&f-m>=0)return ih.subVectors(r,s),o=(p-h)/(p-h+(f-m)),e.copy(s).addScaledVector(ih,o);let g=1/(u+S+d);return a=S*g,o=d*g,e.copy(n).addScaledVector(hs,a).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),da.subVectors(this.max,js),ds.subVectors(t.a,js),fs.subVectors(t.b,js),ps.subVectors(t.c,js),_i.subVectors(fs,ds),xi.subVectors(ps,fs),Bi.subVectors(ds,ps);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Bi.y,Bi.x,0];return!Ll(e,ds,fs,ps,da)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,ds,fs,ps,da))?!1:(fa.crossVectors(_i,xi),e=[fa.x,fa.y,fa.z],Ll(e,ds,fs,ps,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new O,new O,new O,new O,new O,new O,new O,new O],Bn=new O,ua=new Xn,ds=new O,fs=new O,ps=new O,_i=new O,xi=new O,Bi=new O,js=new O,da=new O,fa=new O,ki=new O;function Ll(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ve=new O,pa=new Mt,zd=0,Mn=class extends kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=t!==void 0?bc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):hu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):uu(t,this.array)}};var pr=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gd=new Xn,Qs=new O,Dl=new O,ri=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Dl)),this.expandByPoint(Qs.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vd=0,Cn=new Me,Nl=new He,ms=new O,yn=new Xn,tr=new Xn,Je=new O,Oe=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fd(t)?mr:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(yn.min,tr.min),yn.expandByPoint(Je),Je.addVectors(yn.max,tr.max),yn.expandByPoint(Je)):(yn.expandByPoint(tr.min),yn.expandByPoint(tr.max))}yn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Je.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(t,c),Je.add(ms)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let k=0;k<n.count;k++)o[k]=new O,l[k]=new O;let h=new O,p=new O,d=new O,f=new Mt,m=new Mt,S=new Mt,u=new O,g=new O;function y(k,A,L){c[k]=c[A]=c[L]=1,h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,k),m.fromBufferAttribute(r,A),S.fromBufferAttribute(r,L),p.sub(h),d.sub(h),m.sub(f),S.sub(f);let B=1/(m.x*S.y-S.x*m.y);isFinite(B)&&(u.copy(p).multiplyScalar(S.y).addScaledVector(d,-m.y).multiplyScalar(B),g.copy(d).multiplyScalar(m.x).addScaledVector(p,-S.x).multiplyScalar(B),o[k].add(u),o[A].add(u),o[L].add(u),l[k].add(g),l[A].add(g),l[L].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let k=0,A=T.length;k<A;++k){let L=T[k],B=L.start,Q=L.count;for(let N=B,G=B+Q;N<G;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new O,C=new O,E=new O,x=new O;function v(k){E.fromBufferAttribute(s,k),x.copy(E);let A=o[k];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),C.crossVectors(x,A);let B=C.dot(l[k])<0?-1:1;a.setXYZW(k,M.x,M.y,M.z,B)}for(let k=0,A=n.count;k<A;++k)c[k]&&v(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),S=t.getX(d+1),u=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,u),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,u),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let S=0,u=l.length;S<u;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Mn(d,h,p)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,f=p.length;d<f;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ul=new O,Hd=new O,Wd=new ce,un=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ul.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ul),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wd.getNormalMatrix(t),s=this.coplanarPoint(Ul).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xd=0,ai=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Os,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ei=new O,Fl=new O,ma=new O,ga=new O,Si=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fl.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(Fl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ma),o=ga.dot(this.direction),l=-ga.dot(ma),c=ga.lengthSq(),h=Math.abs(1-a*a),p,d,f,m;if(h>0)if(p=a*l-o,d=a*o-l,m=r*h,p>=0)if(d>=-m)if(d<=m){let S=1/h;p*=S,d*=S,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-m?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=m?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Fl).addScaledVector(ma,d),f}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,S=e.y-a.y,u=e.z-a.z,g=n.x-a.x,y=n.y-a.y,T=n.z-a.z,M=Math.abs(l),C=Math.abs(c),E=Math.abs(h),x,v,k,A,L,B,Q,N,G,K,q,ct;if(M>=C&&M>=E?(k=l,B=p,G=m,ct=g,l>=0?(x=c,v=h,A=d,L=f,Q=S,N=u,K=y,q=T):(x=h,v=c,A=f,L=d,Q=u,N=S,K=T,q=y)):C>=E?(k=c,B=d,G=S,ct=y,c>=0?(x=h,v=l,A=f,L=p,Q=u,N=m,K=T,q=g):(x=l,v=h,A=p,L=f,Q=m,N=u,K=g,q=T)):(k=h,B=f,G=u,ct=T,h>=0?(x=l,v=c,A=p,L=d,Q=m,N=S,K=g,q=y):(x=c,v=l,A=d,L=p,Q=S,N=m,K=y,q=g)),k===0)return null;let rt=x/k,ft=v/k,dt=1/k,st=A-rt*B,ut=L-ft*B,X=Q-rt*G,xt=N-ft*G,Tt=K-rt*ct,zt=q-ft*ct,_t=Tt*xt-zt*X,Bt=st*zt-ut*Tt,he=X*ut-xt*st;if(s){if(_t<0||Bt<0||he<0)return null}else if((_t<0||Bt<0||he<0)&&(_t>0||Bt>0||he>0))return null;let qt=_t+Bt+he;if(qt===0)return null;let te=dt*(_t*B+Bt*G+he*ct);return(qt>0?te<0:te>0)?null:this.at(te/qt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sh=new Me,zi=new Si,_a=new ri,rh=new O,xa=new O,va=new O,ya=new O,Ol=new O,Ma=new O,ah=new O,Sa=new O,re=class extends He{constructor(t=new Oe,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Ol.fromBufferAttribute(p,t),a?Ma.addScaledVector(Ol,h):Ma.addScaledVector(Ol.sub(e),h))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(_a.containsPoint(zi.origin)===!1&&(zi.intersectSphere(_a,rh)===null||zi.origin.distanceToSquared(rh)>(t.far-t.near)**2))&&(sh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(sh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,S=d.length;m<S;m++){let u=d[m],g=a[u.materialIndex],y=Math.max(u.start,f.start),T=Math.min(o.count,Math.min(u.start+u.count,f.start+f.count));for(let M=y,C=T;M<C;M+=3){let E=o.getX(M),x=o.getX(M+1),v=o.getX(M+2);s=ba(this,g,t,n,c,h,p,E,x,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let u=m,g=S;u<g;u+=3){let y=o.getX(u),T=o.getX(u+1),M=o.getX(u+2);s=ba(this,a,t,n,c,h,p,y,T,M),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,S=d.length;m<S;m++){let u=d[m],g=a[u.materialIndex],y=Math.max(u.start,f.start),T=Math.min(l.count,Math.min(u.start+u.count,f.start+f.count));for(let M=y,C=T;M<C;M+=3){let E=M,x=M+1,v=M+2;s=ba(this,g,t,n,c,h,p,E,x,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let u=m,g=S;u<g;u+=3){let y=u,T=u+1,M=u+2;s=ba(this,a,t,n,c,h,p,y,T,M),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}};function qd(i,t,e,n,s,r,a,o){let l;if(t.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:i}}function ba(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,xa),i.getVertexPosition(l,va),i.getVertexPosition(c,ya);let h=qd(i,t,e,n,xa,va,ya,ah);if(h){let p=new O;yi.getBarycoord(ah,xa,va,ya,p),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,p,new Mt)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,p,new Mt)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,p,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};yi.getNormal(xa,va,ya,d.normal),h.face=d,h.barycoord=p}return h}var gr=class extends fn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=je,h=je,p,d){super(null,a,o,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gs=new Me,oh=new Me,wa=[],lh=new Xn,Yd=new Me,er=new re,nr=new ri,oi=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),lh.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(lh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),nr.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),oh.multiplyMatrices(n,gs),er.matrixWorld=oh,er.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){let l=wa[a];l.instanceId=r,l.object=this,e.push(l)}wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(s*this.count),s,this.count,yo,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new ri,Zd=new Mt(.5,.5),Ta=new O,bi=class{constructor(t=new un,e=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],d=r[6],f=r[7],m=r[8],S=r[9],u=r[10],g=r[11],y=r[12],T=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,g-m,C-y).normalize(),s[1].setComponents(c+a,f+h,g+m,C+y).normalize(),s[2].setComponents(c+o,f+p,g+S,C+T).normalize(),s[3].setComponents(c-o,f-p,g-S,C-T).normalize(),n)s[4].setComponents(l,d,u,M).normalize(),s[5].setComponents(c-l,f-d,g-u,C-M).normalize();else if(s[4].setComponents(c-l,f-d,g-u,C-M).normalize(),e===Rn)s[5].setComponents(c+l,f+d,g+u,C+M).normalize();else if(e===Ss)s[5].setComponents(l,d,u,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=Zd.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ta.x=s.normal.x>0?t.max.x:t.min.x,Ta.y=s.normal.y>0?t.max.y:t.min.y,Ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ch=new Me,Ya=class i{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ch.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new bi),n[s].setFromProjectionMatrix(ch,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new bi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var As=class extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hh=new Me,ql=new Si,Ea=new ri,Aa=new O,xr=class extends He{constructor(t=new Oe,e=new As){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;hh.copy(s).invert(),ql.copy(t.ray).applyMatrix4(hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,S=f;m<S;m++){let u=c.getX(m);Aa.fromBufferAttribute(p,u),uh(Aa,u,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let m=d,S=f;m<S;m++)Aa.fromBufferAttribute(p,m),uh(Aa,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uh(i,t,e,n,s,r,a){let o=ql.distanceSqToPoint(i);if(o<e){let l=new O;ql.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var vr=class extends fn{constructor(t=[],e=es,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xi=class extends fn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends fn{constructor(t,e,n=zn,s,r,a,o=je,l=je,c,h=ii,p=1){if(h!==ii&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yr=class extends li{constructor(t,e=zn,n=es,s,r,a=je,o=je,l,c=ii){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mr=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},We=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(p,2));function m(S,u,g,y,T,M,C,E,x,v,k){let A=M/x,L=C/v,B=M/2,Q=C/2,N=E/2,G=x+1,K=v+1,q=0,ct=0,rt=new O;for(let ft=0;ft<K;ft++){let dt=ft*L-Q;for(let st=0;st<G;st++){let ut=st*A-B;rt[S]=ut*y,rt[u]=dt*T,rt[g]=N,c.push(rt.x,rt.y,rt.z),rt[S]=0,rt[u]=0,rt[g]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),p.push(st/x),p.push(1-ft/v),q+=1}}for(let ft=0;ft<v;ft++)for(let dt=0;dt<x;dt++){let st=d+dt+G*ft,ut=d+dt+G*(ft+1),X=d+(dt+1)+G*(ft+1),xt=d+(dt+1)+G*ft;l.push(st,ut,xt),l.push(ut,X,xt),ct+=6}o.addGroup(f,ct,k),f+=ct,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Sr=class i extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new O,h=new Mt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=n+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ln=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],f=[],m=0,S=[],u=n/2,g=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ge(p,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function y(){let M=new O,C=new O,E=0,x=(e-t)/n;for(let v=0;v<=r;v++){let k=[],A=v/r,L=A*(e-t)+t;for(let B=0;B<=s;B++){let Q=B/s,N=Q*l+o,G=Math.sin(N),K=Math.cos(N);C.x=L*G,C.y=-A*n+u,C.z=L*K,p.push(C.x,C.y,C.z),M.set(G,x,K).normalize(),d.push(M.x,M.y,M.z),f.push(Q,1-A),k.push(m++)}S.push(k)}for(let v=0;v<s;v++)for(let k=0;k<r;k++){let A=S[k][v],L=S[k+1][v],B=S[k+1][v+1],Q=S[k][v+1];(t>0||k!==0)&&(h.push(A,L,Q),E+=3),(e>0||k!==r-1)&&(h.push(L,B,Q),E+=3)}c.addGroup(g,E,0),g+=E}function T(M){let C=m,E=new Mt,x=new O,v=0,k=M===!0?t:e,A=M===!0?1:-1;for(let B=1;B<=s;B++)p.push(0,u*A,0),d.push(0,A,0),f.push(.5,.5),m++;let L=m;for(let B=0;B<=s;B++){let N=B/s*l+o,G=Math.cos(N),K=Math.sin(N);x.x=k*K,x.y=u*A,x.z=k*G,p.push(x.x,x.y,x.z),d.push(0,A,0),E.x=G*.5+.5,E.y=K*.5*A+.5,f.push(E.x,E.y),m++}for(let B=0;B<s;B++){let Q=C+B,N=L+B;M===!0?h.push(N,N+1,Q):h.push(N+1,N,Q),v+=3}c.addGroup(g,v,M===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},br=class i extends Ln{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Za=class i extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new O,M=new O,C=new O;for(let E=0;E<e.length;E+=3)f(e[E+0],T),f(e[E+1],M),f(e[E+2],C),l(T,M,C,y)}function l(y,T,M,C){let E=C+1,x=[];for(let v=0;v<=E;v++){x[v]=[];let k=y.clone().lerp(M,v/E),A=T.clone().lerp(M,v/E),L=E-v;for(let B=0;B<=L;B++)B===0&&v===E?x[v][B]=k:x[v][B]=k.clone().lerp(A,B/L)}for(let v=0;v<E;v++)for(let k=0;k<2*(E-v)-1;k++){let A=Math.floor(k/2);k%2===0?(d(x[v][A+1]),d(x[v+1][A]),d(x[v][A])):(d(x[v][A+1]),d(x[v+1][A+1]),d(x[v+1][A]))}}function c(y){let T=new O;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(y),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){let y=new O;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let M=u(y)/2/Math.PI+.5,C=g(y)/Math.PI+.5;a.push(M,1-C)}m(),p()}function p(){for(let y=0;y<a.length;y+=6){let T=a[y+0],M=a[y+2],C=a[y+4],E=Math.max(T,M,C),x=Math.min(T,M,C);E>.9&&x<.1&&(T<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,T){let M=y*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function m(){let y=new O,T=new O,M=new O,C=new O,E=new Mt,x=new Mt,v=new Mt;for(let k=0,A=0;k<r.length;k+=9,A+=6){y.set(r[k+0],r[k+1],r[k+2]),T.set(r[k+3],r[k+4],r[k+5]),M.set(r[k+6],r[k+7],r[k+8]),E.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),v.set(a[A+4],a[A+5]),C.copy(y).add(T).add(M).divideScalar(3);let L=u(C);S(E,A+0,y,L),S(x,A+2,T,L),S(v,A+4,M,L)}}function S(y,T,M,C){C<0&&y.x===1&&(a[T]=y.x-1),M.x===0&&M.z===0&&(a[T]=C/2/Math.PI+.5)}function u(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Mt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],a=[],o=new O,l=new Me;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(me(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(me(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Cs=class extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*p+this.aX,c=d*p+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ka=class extends Cs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+p)+(l-o)/p;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var dh=new O,fh=new O,Bl=new wc,kl=new wc,zl=new wc,qi=class extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(fh.subVectors(s[0],s[1]).add(s[0]),c=fh);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(dh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(p),f),S=Math.pow(p.distanceToSquared(d),f),u=Math.pow(d.distanceToSquared(h),f);S<1e-4&&(S=1),m<1e-4&&(m=S),u<1e-4&&(u=S),Bl.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,m,S,u),kl.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,m,S,u),zl.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,m,S,u)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),kl.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),zl.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return n.set(Bl.calc(l),kl.calc(l),zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ph(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Kd(i,t){let e=1-i;return e*e*t}function Jd(i,t){return 2*(1-i)*i*t}function $d(i,t){return i*i*t}function ar(i,t,e,n){return Kd(i,t)+Jd(i,e)+$d(i,n)}function jd(i,t){let e=1-i;return e*e*e*t}function Qd(i,t){let e=1-i;return 3*e*e*i*t}function tf(i,t){return 3*(1-i)*i*i*t}function ef(i,t){return i*i*i*t}function or(i,t,e,n,s){return jd(i,t)+Qd(i,e)+tf(i,n)+ef(i,s)}var wr=class extends Sn{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends Sn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y),or(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tr=class extends Sn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends Sn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Er=class extends Sn{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ar(t,s.x,r.x,a.x),ar(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends Sn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ar(t,s.x,r.x,a.x),ar(t,s.y,r.y,a.y),ar(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(ph(o,l.x,c.x,h.x,p.x),ph(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Yl=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:qi,CubicBezierCurve:wr,CubicBezierCurve3:Ja,EllipseCurve:Cs,LineCurve:Tr,LineCurve3:$a,QuadraticBezierCurve:Er,QuadraticBezierCurve3:ja,SplineCurve:Ar}),Qa=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Cr=class extends Qa{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Tr(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Er(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new wr(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ar(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Cs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rs=class extends Cr{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Cr().fromJSON(s))}return this}};function nf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=fu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=lf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>p&&(p=m)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return Rr(r,a,e,o,l,c,0),a}function fu(i,t,e,n,s){let r;if(s===vf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=mh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=mh(a/n|0,i[a],i[a+1],r);return r&&Ps(r,r.next)&&(Ir(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ps(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ff(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?rf(i,n,s,r):sf(i)){t.push(l.i,i.i,c.i),Ir(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=af(Yi(i),t),Rr(i,t,e,n,s,r,2)):a===2&&of(i,t,e,n,s,r):Rr(Yi(i),t,e,n,s,r,1);break}}}function sf(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=p&&m.y<=f&&ir(s,o,r,l,a,c,m.x,m.y)&&Fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function rf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Fe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,p,d),S=Math.max(o,l,c),u=Math.max(h,p,d),g=Zl(f,m,t,e,n),y=Zl(S,u,t,e,n),T=i.prevZ,M=i.nextZ;for(;T&&T.z>=g&&M&&M.z<=y;){if(T.x>=f&&T.x<=S&&T.y>=m&&T.y<=u&&T!==s&&T!==a&&ir(o,h,l,p,c,d,T.x,T.y)&&Fe(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=f&&M.x<=S&&M.y>=m&&M.y<=u&&M!==s&&M!==a&&ir(o,h,l,p,c,d,M.x,M.y)&&Fe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=g;){if(T.x>=f&&T.x<=S&&T.y>=m&&T.y<=u&&T!==s&&T!==a&&ir(o,h,l,p,c,d,T.x,T.y)&&Fe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=S&&M.y>=m&&M.y<=u&&M!==s&&M!==a&&ir(o,h,l,p,c,d,M.x,M.y)&&Fe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function af(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ps(n,s)&&mu(n,e,e.next,s)&&Pr(n,s)&&Pr(s,n)&&(t.push(n.i,e.i,s.i),Ir(e),Ir(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function of(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gf(a,o)){let l=gu(a,o);a=Yi(a,a.next),l=Yi(l,l.next),Rr(a,t,e,n,s,r,0),Rr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function lf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=fu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(mf(c))}s.sort(cf);for(let r=0;r<s.length;r++)e=hf(s[r],e);return e}function cf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function hf(i,t){let e=uf(i,t);if(!e)return t;let n=gu(e,i);return Yi(n,n.next),Yi(e,e.next)}function uf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ps(i,e))return e;do{if(Ps(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Pr(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&df(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function df(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function ff(i,t,e,n){let s=i;do s.z===0&&(s.z=Zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pf(s)}function pf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function mf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ir(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&pu(i,t,e,n,s,r,a,o)}function gf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_f(i,t)&&(Pr(i,t)&&Pr(t,i)&&xf(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||Ps(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ps(i,t){return i.x===t.x&&i.y===t.y}function mu(i,t,e,n){let s=Ra(Fe(i,t,e)),r=Ra(Fe(i,t,n)),a=Ra(Fe(e,n,i)),o=Ra(Fe(e,n,t));return!!(s!==r&&a!==o||s===0&&Ca(i,e,t)||r===0&&Ca(i,n,t)||a===0&&Ca(e,i,n)||o===0&&Ca(e,t,n))}function Ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ra(i){return i>0?1:i<0?-1:0}function _f(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Pr(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function xf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gu(i,t){let e=Kl(i.i,i.x,i.y),n=Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function mh(i,t,e,n){let s=Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Jl=class{static triangulate(t,e,n=2){return nf(t,e,n)}},Vi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];gh(t),_h(n,t);let a=t.length;e.forEach(gh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,_h(n,e[l]);let o=Jl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function gh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _h(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Lr=class i extends Oe{constructor(t=new Rs([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,u=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:yf,T,M=!1,C,E,x,v;if(g){T=g.getSpacedPoints(h),M=!0,d=!1;let pt=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(h,pt),E=new O,x=new O,v=new O}d||(u=0,f=0,m=0,S=0);let k=o.extractPoints(c),A=k.shape,L=k.holes;if(!Vi.isClockWise(A)){A=A.reverse();for(let pt=0,Ct=L.length;pt<Ct;pt++){let vt=L[pt];Vi.isClockWise(vt)&&(L[pt]=vt.reverse())}}function Q(pt){let vt=10000000000000001e-36,Ut=pt[0];for(let It=1;It<=pt.length;It++){let ee=It%pt.length,Lt=pt[ee],jt=Lt.x-Ut.x,Gt=Lt.y-Ut.y,ae=jt*jt+Gt*Gt,V=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(Ut.x),Math.abs(Ut.y)),fe=vt*V*V;if(ae<=fe){pt.splice(ee,1),It--;continue}Ut=Lt}}Q(A),L.forEach(Q);let N=L.length,G=A;for(let pt=0;pt<N;pt++){let Ct=L[pt];A=A.concat(Ct)}function K(pt,Ct,vt){return Ct||le("ExtrudeGeometry: vec does not exist"),pt.clone().addScaledVector(Ct,vt)}let q=A.length;function ct(pt,Ct,vt){let Ut,It,ee,Lt=pt.x-Ct.x,jt=pt.y-Ct.y,Gt=vt.x-pt.x,ae=vt.y-pt.y,V=Lt*Lt+jt*jt,fe=Lt*ae-jt*Gt;if(Math.abs(fe)>Number.EPSILON){let Zt=Math.sqrt(V),de=Math.sqrt(Gt*Gt+ae*ae),Ft=Ct.x-jt/Zt,xe=Ct.y+Lt/Zt,Kt=vt.x-ae/de,Vt=vt.y+Gt/de,R=((Kt-Ft)*ae-(Vt-xe)*Gt)/(Lt*ae-jt*Gt);Ut=Ft+Lt*R-pt.x,It=xe+jt*R-pt.y;let _=Ut*Ut+It*It;if(_<=2)return new Mt(Ut,It);ee=Math.sqrt(_/2)}else{let Zt=!1;Lt>Number.EPSILON?Gt>Number.EPSILON&&(Zt=!0):Lt<-Number.EPSILON?Gt<-Number.EPSILON&&(Zt=!0):Math.sign(jt)===Math.sign(ae)&&(Zt=!0),Zt?(Ut=-jt,It=Lt,ee=Math.sqrt(V)):(Ut=Lt,It=jt,ee=Math.sqrt(V/2))}return new Mt(Ut/ee,It/ee)}let rt=[];for(let pt=0,Ct=G.length,vt=Ct-1,Ut=pt+1;pt<Ct;pt++,vt++,Ut++)vt===Ct&&(vt=0),Ut===Ct&&(Ut=0),rt[pt]=ct(G[pt],G[vt],G[Ut]);let ft=[],dt,st=rt.concat();for(let pt=0,Ct=N;pt<Ct;pt++){let vt=L[pt];dt=[];for(let Ut=0,It=vt.length,ee=It-1,Lt=Ut+1;Ut<It;Ut++,ee++,Lt++)ee===It&&(ee=0),Lt===It&&(Lt=0),dt[Ut]=ct(vt[Ut],vt[ee],vt[Lt]);ft.push(dt),st=st.concat(dt)}let ut;if(u===0)ut=Vi.triangulateShape(G,L);else{let pt=[],Ct=[];for(let vt=0;vt<u;vt++){let Ut=vt/u,It=f*Math.cos(Ut*Math.PI/2),ee=m*Math.sin(Ut*Math.PI/2)+S;for(let Lt=0,jt=G.length;Lt<jt;Lt++){let Gt=K(G[Lt],rt[Lt],ee);Bt(Gt.x,Gt.y,-It),Ut===0&&pt.push(Gt)}for(let Lt=0,jt=N;Lt<jt;Lt++){let Gt=L[Lt];dt=ft[Lt];let ae=[];for(let V=0,fe=Gt.length;V<fe;V++){let Zt=K(Gt[V],dt[V],ee);Bt(Zt.x,Zt.y,-It),Ut===0&&ae.push(Zt)}Ut===0&&Ct.push(ae)}}ut=Vi.triangulateShape(pt,Ct)}let X=ut.length,xt=m+S;for(let pt=0;pt<q;pt++){let Ct=d?K(A[pt],st[pt],xt):A[pt];M?(x.copy(C.normals[0]).multiplyScalar(Ct.x),E.copy(C.binormals[0]).multiplyScalar(Ct.y),v.copy(T[0]).add(x).add(E),Bt(v.x,v.y,v.z)):Bt(Ct.x,Ct.y,0)}for(let pt=1;pt<=h;pt++)for(let Ct=0;Ct<q;Ct++){let vt=d?K(A[Ct],st[Ct],xt):A[Ct];M?(x.copy(C.normals[pt]).multiplyScalar(vt.x),E.copy(C.binormals[pt]).multiplyScalar(vt.y),v.copy(T[pt]).add(x).add(E),Bt(v.x,v.y,v.z)):Bt(vt.x,vt.y,p/h*pt)}for(let pt=u-1;pt>=0;pt--){let Ct=pt/u,vt=f*Math.cos(Ct*Math.PI/2),Ut=m*Math.sin(Ct*Math.PI/2)+S;for(let It=0,ee=G.length;It<ee;It++){let Lt=K(G[It],rt[It],Ut);Bt(Lt.x,Lt.y,p+vt)}for(let It=0,ee=L.length;It<ee;It++){let Lt=L[It];dt=ft[It];for(let jt=0,Gt=Lt.length;jt<Gt;jt++){let ae=K(Lt[jt],dt[jt],Ut);M?Bt(ae.x,ae.y+T[h-1].y,T[h-1].x+vt):Bt(ae.x,ae.y,p+vt)}}}Tt(),zt();function Tt(){let pt=s.length/3;if(d){let Ct=0,vt=q*Ct;for(let Ut=0;Ut<X;Ut++){let It=ut[Ut];he(It[2]+vt,It[1]+vt,It[0]+vt)}Ct=h+u*2,vt=q*Ct;for(let Ut=0;Ut<X;Ut++){let It=ut[Ut];he(It[0]+vt,It[1]+vt,It[2]+vt)}}else{for(let Ct=0;Ct<X;Ct++){let vt=ut[Ct];he(vt[2],vt[1],vt[0])}for(let Ct=0;Ct<X;Ct++){let vt=ut[Ct];he(vt[0]+q*h,vt[1]+q*h,vt[2]+q*h)}}n.addGroup(pt,s.length/3-pt,0)}function zt(){let pt=s.length/3,Ct=0;_t(G,Ct),Ct+=G.length;for(let vt=0,Ut=L.length;vt<Ut;vt++){let It=L[vt];_t(It,Ct),Ct+=It.length}n.addGroup(pt,s.length/3-pt,1)}function _t(pt,Ct){let vt=pt.length;for(;--vt>=0;){let Ut=vt,It=vt-1;It<0&&(It=pt.length-1);for(let ee=0,Lt=h+u*2;ee<Lt;ee++){let jt=q*ee,Gt=q*(ee+1),ae=Ct+Ut+jt,V=Ct+It+jt,fe=Ct+It+Gt,Zt=Ct+Ut+Gt;qt(ae,V,fe,Zt)}}}function Bt(pt,Ct,vt){l.push(pt),l.push(Ct),l.push(vt)}function he(pt,Ct,vt){te(pt),te(Ct),te(vt);let Ut=s.length/3,It=y.generateTopUV(n,s,Ut-3,Ut-2,Ut-1);ie(It[0]),ie(It[1]),ie(It[2])}function qt(pt,Ct,vt,Ut){te(pt),te(Ct),te(Ut),te(Ct),te(vt),te(Ut);let It=s.length/3,ee=y.generateSideWallUV(n,s,It-6,It-3,It-2,It-1);ie(ee[0]),ie(ee[1]),ie(ee[3]),ie(ee[1]),ie(ee[2]),ie(ee[3])}function te(pt){s.push(l[pt*3+0]),s.push(l[pt*3+1]),s.push(l[pt*3+2])}function ie(pt){r.push(pt.x),r.push(pt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yl[s.type]().fromJSON(s)),new i(n,t.options)}},yf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Mt(r,a),new Mt(o,l),new Mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],S=t[r*3],u=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Mt(a,1-l),new Mt(c,1-p),new Mt(d,1-m),new Mt(S,1-g)]:[new Mt(o,1-l),new Mt(h,1-p),new Mt(f,1-m),new Mt(u,1-g)]}};function Mf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Dr=class i extends Za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Nr=class i extends Oe{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,p=new O,d=new Mt,f=new O,m=new O,S=new O,u=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:u=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-u,f.z=g*0,S.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:S.normalize(),l.push(S.x,S.y,S.z);break;default:u=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,f.x=g*1,f.y=-u,f.z=g*0,m.copy(f),f.x+=S.x,f.y+=S.y,f.z+=S.z,f.normalize(),l.push(f.x,f.y,f.z),S.copy(m)}for(let y=0;y<=e;y++){let T=n+y*h*s,M=Math.sin(T),C=Math.cos(T);for(let E=0;E<=t.length-1;E++){p.x=t[E].x*M,p.y=t[E].y,p.z=t[E].x*C,a.push(p.x,p.y,p.z),d.x=y/e,d.y=E/(t.length-1),o.push(d.x,d.y);let x=l[3*E+0]*M,v=l[3*E+1],k=l[3*E+0]*C;c.push(x,v,k)}}for(let y=0;y<e;y++)for(let T=0;T<t.length-1;T++){let M=T+y*t.length,C=M,E=M+t.length,x=M+t.length+1,v=M+1;r.push(C,E,v),r.push(x,v,E)}this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ue=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,d=e/l,f=[],m=[],S=[],u=[];for(let g=0;g<h;g++){let y=g*d-a;for(let T=0;T<c;T++){let M=T*p-r;m.push(M,-y,0),S.push(0,0,1),u.push(T/o),u.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let T=y+c*g,M=y+c*(g+1),C=y+1+c*(g+1),E=y+1+c*g;f.push(T,M,E),f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(S,3)),this.setAttribute("uv",new ge(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zi=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new O,d=new O,f=[],m=[],S=[],u=[];for(let g=0;g<=n;g++){let y=[],T=g/n,M=a+T*o,C=t*Math.cos(M),E=Math.sqrt(t*t-C*C),x=0;g===0&&a===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let v=0;v<=e;v++){let k=v/e,A=s+k*r;p.x=-E*Math.cos(A),p.y=C,p.z=E*Math.sin(A),m.push(p.x,p.y,p.z),d.copy(p).normalize(),S.push(d.x,d.y,d.z),u.push(k+x,1-T),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let T=h[g][y+1],M=h[g][y],C=h[g+1][y],E=h[g+1][y+1];(g!==0||a>0)&&f.push(T,M,E),(g!==n-1||l<Math.PI)&&f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(S,3)),this.setAttribute("uv",new ge(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wi=class i extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],d=new O,f=new O,m=new O;for(let S=0;S<=n;S++){let u=a+S/n*o;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(u))*Math.cos(y),f.y=(t+e*Math.cos(u))*Math.sin(y),f.z=e*Math.sin(u),c.push(f.x,f.y,f.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),p.push(g/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let u=1;u<=s;u++){let g=(s+1)*S+u-1,y=(s+1)*(S-1)+u-1,T=(s+1)*(S-1)+u,M=(s+1)*S+u;l.push(g,y,M),l.push(y,T,M)}this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(xh(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(xh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=ss(i[e]);for(let s in n)t[s]=n[s]}return t}function xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var wn={clone:ss,merge:hn},bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Is=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ae=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ti=class extends Ae{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var to=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _s(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},no=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wl:r=t,o=2*e-n;break;case Xl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:a=t,l=2*n-e;break;case Xl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),S=m*m,u=S*m,g=-d*u+2*d*S-d*m,y=(1+d)*u+(-1.5-2*d)*S+(-.5+d)*m+1,T=(-1-f)*u+(1.5+f)*S+.5*m,M=f*u-f*S;for(let C=0;C!==o;++C)r[C]=g*a[h+C]+y*a[c+C]+T*a[l+C]+M*a[p+C];return r}},io=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*h;return r}},so=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ro=class extends Ei{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let m=(n-e)/(s-e),S=1-m;for(let u=0;u!==o;++u)r[u]=a[c+u]*S+a[l+u]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let S=a[c+m],u=a[l+m],g=f*d+m*2,y=p[g],T=p[g+1],M=t*d+m*2,C=h[M],E=h[M+1],x=Ef(n,e,y,C,s);r[m]=_u(x,S,T,E,u)}return r}};function _u(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Tf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ef(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=_u(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Tf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_s(e,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_s(t.times,Array),values:_s(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Pa(t.settings)&&(n.settings={inTangents:_s(t.settings.inTangents,Array),outTangents:_s(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case Ha:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case Vl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Pa(this.settings)&&(vh(this.settings.inTangents,t),vh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Pa(this.settings)&&(yh(this.settings.inTangents,t),yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){le("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){le("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&pd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){le("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,d=p-n,f=p+n;for(let m=0;m!==n;++m){let S=e[p+m];if(S!==e[d+m]||S!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ha;var Ai=class extends bn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=lr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="color";var oo=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="number";var lo=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ur=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends bn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=lr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],m=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xu=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki=class extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ls=class extends Ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gl=new Me,Mh=new O,Sh=new O,Ds=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),Sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ss||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ia=new O,La=new Qe,Hn=new O,Fr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ia,La,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ia,La,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new O,bh=new Mt,wh=new Mt,an=class extends Fr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,bh,wh),e.subVectors(wh,bh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$l=class extends Ds{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Wi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ci=class extends Ki{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $l}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},jl=class extends Ds{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Ri=class extends Ki{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ji=class extends Fr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ql=class extends Ds{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends Ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Ql}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xs=-90,vs=1,Ns=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(xs,vs,t,e);s.layers=this.layers,this.add(s);let r=new an(xs,vs,t,e);r.layers=this.layers,this.add(r);let a=new an(xs,vs,t,e);a.layers=this.layers,this.add(a);let o=new an(xs,vs,t,e);o.layers=this.layers,this.add(o);let l=new an(xs,vs,t,e);l.layers=this.layers,this.add(l);let c=new an(xs,vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let u=!1;t.isWebGLRenderer===!0?u=t.state.buffers.depth.getReversed():u=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),u&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},fo=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Br=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Af.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Af(){this._document.hidden===!1&&this.reset()}var Ec="\\[\\]\\.:\\/",Cf=new RegExp("["+Ec+"]","g"),Ac="[^"+Ec+"]",Rf="[^"+Ec.replace("\\.","")+"]",Pf=/((?:WC+[\/:])*)/.source.replace("WC",Ac),If=/(WCOD+)?/.source.replace("WCOD",Rf),Lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),Df=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),Nf=new RegExp("^"+Pf+If+Lf+Df+"$"),Uf=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cf,"")}static parseTrackName(t){let e=Nf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Uf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=tc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z_=new Float32Array(1);var Th=new Me,kr=class{constructor(t,e,n=0,s=1/0){this.ray=new Si(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(t,e=!0,n=[]){return ec(t,this,n,e),n.sort(Eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,n,e);return n.sort(Eh),n}};function Eh(i,t){return i.distance-t.distance}function ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ec(r[a],t,e,!0)}}var Us=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var zr=class extends kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Cc(i,t,e,n){let s=Ff(n);switch(e){case pc:return i*t;case yo:return i*t/s.components*s.byteLength;case Mo:return i*t/s.components*s.byteLength;case Di:return i*t*2/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case mc:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case bo:return i*t*4/s.components*s.byteLength;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:case Ao:return Math.max(i,16)*Math.max(t,8)/4;case wo:case Eo:return Math.max(i,8)*Math.max(t,8)/2;case Co:case Ro:case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:case jr:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Ko:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $o:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qr:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ff(i){switch(i){case mn:case hc:return{byteLength:1,components:1};case ks:case uc:case Xe:return{byteLength:2,components:1};case xo:case vo:return{byteLength:2,components:4};case zn:case _o:case Dn:return{byteLength:4,components:1};case dc:case fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function zu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<p.length;f++){let m=p[d],S=p[f];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++d,p[d]=S)}p.length=d+1;for(let f=0,m=p.length;f<m;f++){let S=p[f];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Fp=`uniform sampler2D dfgLUT;
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
}`,Op=`
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform float backgroundBlurriness;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,i0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,o0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,c0=`#define STANDARD
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
}`,h0=`#define TOON
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
}`,u0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,g0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:kf,alphahash_pars_fragment:zf,alphamap_fragment:Gf,alphamap_pars_fragment:Vf,alphatest_fragment:Hf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:Zf,begin_vertex:Kf,beginnormal_vertex:Jf,bsdfs:$f,iridescence_fragment:jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:op,common:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:_p,envmap_pars_fragment:xp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Pp,envmap_vertex:yp,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:bp,fog_pars_fragment:wp,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ep,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Cp,lights_pars_begin:Rp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Lp,lights_phong_fragment:Dp,lights_phong_pars_fragment:Np,lights_physical_fragment:Up,lights_physical_pars_fragment:Fp,lights_fragment_begin:Op,lights_fragment_maps:Bp,lights_fragment_end:kp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:$p,morphcolor_vertex:jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:_m,roughnessmap_fragment:xm,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:bm,skinbase_vertex:wm,skinning_pars_vertex:Tm,skinning_vertex:Em,skinnormal_vertex:Am,specularmap_fragment:Cm,specularmap_pars_fragment:Rm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Im,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Nm,uv_pars_vertex:Um,uv_vertex:Fm,worldpos_vertex:Om,background_vert:Bm,background_frag:km,backgroundCube_vert:zm,backgroundCube_frag:Gm,cube_vert:Vm,cube_frag:Hm,depth_vert:Wm,depth_frag:Xm,distance_vert:qm,distance_frag:Ym,equirect_vert:Zm,equirect_frag:Km,linedashed_vert:Jm,linedashed_frag:$m,meshbasic_vert:jm,meshbasic_frag:Qm,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:a0,meshphong_frag:o0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:_0},Wt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Zn={basic:{uniforms:hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:hn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:hn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new $t(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:hn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:hn([Wt.points,Wt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:hn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:hn([Wt.common,Wt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:hn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:hn([Wt.sprite,Wt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:hn([Wt.common,Wt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:hn([Wt.lights,Wt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Zn.physical={uniforms:hn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var el={r:0,b:0,g:0},x0=new Me,Gu=new ce;Gu.set(-1,0,0,0,1,0,0,0,1);function v0(i,t,e,n,s,r){let a=new $t(0),o=s===!0?0:1,l,c,h=null,p=0,d=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let M=y.backgroundBlurriness>0;T=t.get(T,M)}return T}function m(y){let T=!1,M=f(y);M===null?u(a,o):M&&M.isColor&&(u(M,1),T=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,T){let M=f(T);M&&M.isCubeTexture?(c===void 0&&(c=new re(new We(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:ss(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(x0.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gu),c.material.toneMapped=ve.getTransfer(M.colorSpace)!==Re,(h!==M||p!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new re(new Ue(2,2),new ze({name:"BackgroundMaterial",uniforms:ss(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ve.getTransfer(M.colorSpace)!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,T){y.getRGB(el,Tc(i)),e.buffers.color.setClear(el.r,el.g,el.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,u(a,o)},render:m,addToRenderList:S,dispose:g}}function y0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,B,Q,N,G){let K=!1,q=p(L,N,Q,B);r!==q&&(r=q,c(r.object)),K=f(L,N,Q,G),K&&m(L,N,Q,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(L,B,Q,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function p(L,B,Q,N){let G=N.wireframe===!0,K=n[B.id];K===void 0&&(K={},n[B.id]=K);let q=L.isInstancedMesh===!0?L.id:0,ct=K[q];ct===void 0&&(ct={},K[q]=ct);let rt=ct[Q.id];rt===void 0&&(rt={},ct[Q.id]=rt);let ft=rt[G];return ft===void 0&&(ft=d(l()),rt[G]=ft),ft}function d(L){let B=[],Q=[],N=[];for(let G=0;G<e;G++)B[G]=0,Q[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,B,Q,N){let G=r.attributes,K=B.attributes,q=0,ct=Q.getAttributes();for(let rt in ct)if(ct[rt].location>=0){let dt=G[rt],st=K[rt];if(st===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),dt===void 0||dt.attribute!==st||st&&dt.data!==st.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function m(L,B,Q,N){let G={},K=B.attributes,q=0,ct=Q.getAttributes();for(let rt in ct)if(ct[rt].location>=0){let dt=K[rt];dt===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(dt=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(dt=L.instanceColor));let st={};st.attribute=dt,dt&&dt.data&&(st.data=dt.data),G[rt]=st,q++}r.attributes=G,r.attributesNum=q,r.index=N}function S(){let L=r.newAttributes;for(let B=0,Q=L.length;B<Q;B++)L[B]=0}function u(L){g(L,0)}function g(L,B){let Q=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;Q[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),G[L]!==B&&(i.vertexAttribDivisor(L,B),G[L]=B)}function y(){let L=r.newAttributes,B=r.enabledAttributes;for(let Q=0,N=B.length;Q<N;Q++)B[Q]!==L[Q]&&(i.disableVertexAttribArray(Q),B[Q]=0)}function T(L,B,Q,N,G,K,q){q===!0?i.vertexAttribIPointer(L,B,Q,G,K):i.vertexAttribPointer(L,B,Q,N,G,K)}function M(L,B,Q,N){S();let G=N.attributes,K=Q.getAttributes(),q=B.defaultAttributeValues;for(let ct in K){let rt=K[ct];if(rt.location>=0){let ft=G[ct];if(ft===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor)),ft!==void 0){let dt=ft.normalized,st=ft.itemSize,ut=t.get(ft);if(ut===void 0)continue;let X=ut.buffer,xt=ut.type,Tt=ut.bytesPerElement,zt=xt===i.INT||xt===i.UNSIGNED_INT||ft.gpuType===_o;if(ft.isInterleavedBufferAttribute){let _t=ft.data,Bt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,he=ft.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let qt=0;qt<rt.locationSize;qt++)g(rt.location+qt,_t.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let qt=0;qt<rt.locationSize;qt++)u(rt.location+qt);i.bindBuffer(i.ARRAY_BUFFER,X);for(let qt=0;qt<rt.locationSize;qt++)T(rt.location+qt,st/rt.locationSize,xt,dt,Bt*Tt,(he+st/rt.locationSize*qt)*Tt,zt)}else{if(ft.isInstancedBufferAttribute){for(let _t=0;_t<rt.locationSize;_t++)g(rt.location+_t,ft.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let _t=0;_t<rt.locationSize;_t++)u(rt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,X);for(let _t=0;_t<rt.locationSize;_t++)T(rt.location+_t,st/rt.locationSize,xt,dt,st*Tt,st/rt.locationSize*_t*Tt,zt)}}else if(q!==void 0){let dt=q[ct];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(rt.location,dt);break;case 3:i.vertexAttrib3fv(rt.location,dt);break;case 4:i.vertexAttrib4fv(rt.location,dt);break;default:i.vertexAttrib1fv(rt.location,dt)}}}}y()}function C(){k();for(let L in n){let B=n[L];for(let Q in B){let N=B[Q];for(let G in N){let K=N[G];for(let q in K)h(K[q].object),delete K[q];delete N[G]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let Q in B){let N=B[Q];for(let G in N){let K=N[G];for(let q in K)h(K[q].object),delete K[q];delete N[G]}}delete n[L.id]}function x(L){for(let B in n){let Q=n[B];for(let N in Q){let G=Q[N];if(G[L.id]===void 0)continue;let K=G[L.id];for(let q in K)h(K[q].object),delete K[q];delete G[L.id]}}}function v(L){for(let B in n){let Q=n[B],N=L.isInstancedMesh===!0?L.id:0,G=Q[N];if(G!==void 0){for(let K in G){let q=G[K];for(let ct in q)h(q[ct].object),delete q[ct];delete G[K]}delete Q[N],Object.keys(Q).length===0&&delete n[B]}}}function k(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:x,initAttributes:S,enableAttribute:u,disableUnusedAttributes:y}}function M0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function S0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Gn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let v=x===Xe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==mn&&x!==Dn&&!v&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:u,maxAttributes:g,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,maxSamples:C,samples:E}}function b0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new un,o=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,f){let m=p.clippingPlanes,S=p.clipIntersection,u=p.clipShadows,g=i.get(p);if(!s||m===null||m.length===0||r&&!u)r?h(null):c();else{let y=r?0:n,T=y*4,M=g.clippingState||null;l.value=M,M=h(m,d,T,f);for(let C=0;C!==T;++C)M[C]=e[C];g.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,f,m){let S=p!==null?p.length:0,u=null;if(S!==0){if(u=l.value,m!==!0||u===null){let g=f+S*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(u===null||u.length<g)&&(u=new Float32Array(g));for(let T=0,M=f;T!==S;++T,M+=4)a.copy(p[T]).applyMatrix4(y,o),a.normal.toArray(u,M),u[M+3]=a.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,u}}var na=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new We(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:hi});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=dn),new Ns(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},vu=256,w0=3,T0=20,Vu=256,Hu=16,E0=3,A0=new O,C0=new $t,Gs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ns(1,10,null),this._boxMesh=new re(new We(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=A0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(C0));let u=new Ns(n,s,h);return u.position.copy(o),u.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(vu,Sc(t))}_fromTexture(t,e){t.mapping===es||t.mapping===Bs?this._setSize(t.image.length===0?vu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=yu(t,!1,!1),n=Math.log2(t)-w0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===es||t.mapping===Bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=R0(),this._integrationMaterial=P0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Hu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-E0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Vu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=I0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function yu(i,t,e){return new na(i,{minFilter:ui,generateMipmaps:t,type:Xe,colorSpace:cr,depthBuffer:e})}function ia(i,t,e){return new ze({name:i,uniforms:t,vertexShader:ye.cube_vert,fragmentShader:e,side:on,blending:hi,depthTest:!1,depthWrite:!1})}function R0(){return ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vu}u

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
	`)}function P0(){return ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hu}},`

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
	`)}function I0(){return ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${T0}
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
	`)}function Mu(){return ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Su(){return ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function L0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===po||f===mo)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let S=new na(m.height);return S.fromEquirectangularTexture(i,d),t.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===po||f===mo,S=f===es||f===Bs;if(m||S){let u=e.get(d),g=u!==void 0?u.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Gs(i)),u=m?n.fromEquirectangular(d,u):n.fromCubemap(d,u),u.texture.pmremVersion=d.pmremVersion,e.set(d,u),u.texture;if(u!==void 0)return u.texture;{let y=d.image;return m&&y&&y.height>0||S&&y&&l(y)?(n===null&&(n=new Gs(i)),u=m?n.fromEquirectangular(d):n.fromCubemap(d),u.texture.pmremVersion=d.pmremVersion,e.set(d,u),d.addEventListener("dispose",h),u.texture):null}}}return d}function o(d,f){return f===po?d.mapping=es:f===mo&&(d.mapping=Bs),d}function l(d){let f=0,m=6;for(let S=0;S<m;S++)d[S]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function D0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function N0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let u in m.attributes)t.remove(m.attributes[u]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let S=r.get(m);S&&(t.remove(S),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function h(m){let S=m.attributes;for(let u in S)t.update(S[u],i.ARRAY_BUFFER)}function p(m){let S=m.index,u=m.attributes.position,g=0;if(u===void 0)return;let y=S!==null?S.array.length:u.array.length/3-1,T=u.count>=65535?mr:pr,M=new T(Math.ceil(y/3)*6,1),C=M.array;if(S!==null){let x=S.array;g=S.version;for(let v=0,k=0;v<y;v+=3){let A=x[v+0],L=x[v+1],B=x[v+2];C[k++]=A,C[k++]=L,C[k++]=L,C[k++]=B,C[k++]=B,C[k++]=A}}else{g=u.version;for(let x=0,v=0;x<y;x+=3){let k=x+0,A=x+1,L=x+2;C[v++]=k,C[v++]=A,C[v++]=A,C[v++]=L,C[v++]=L,C[v++]=k}}M.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,M)}function d(m){let S=r.get(m);if(S){let u=m.index;u!==null&&S.version<u.version&&p(m)}else p(m);return r.get(m)}function f(){for(let m in s){let S=s[m].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function U0(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,p*a,f),e.update(d,n,f))}function h(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,f);let S=0;for(let u=0;u<f;u++)S+=d[u];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function F0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function O0(i,t,e){let n=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==p){let k=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),S===!0&&(T=3);let M=o.attributes.position.count*T,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*C*4*p),x=new dr(E,M,C,p);x.type=Dn,x.needsUpdate=!0;let v=T*4;for(let A=0;A<p;A++){let L=u[A],B=g[A],Q=y[A],N=M*C*4*A;for(let G=0;G<L.count;G++){let K=G*v;f===!0&&(s.fromBufferAttribute(L,G),E[N+K+0]=s.x,E[N+K+1]=s.y,E[N+K+2]=s.z,E[N+K+3]=0),m===!0&&(s.fromBufferAttribute(B,G),E[N+K+4]=s.x,E[N+K+5]=s.y,E[N+K+6]=s.z,E[N+K+7]=0),S===!0&&(s.fromBufferAttribute(Q,G),E[N+K+8]=s.x,E[N+K+9]=s.y,E[N+K+10]=s.z,E[N+K+11]=Q.itemSize===4?s.w:1)}}d={count:p,texture:x,size:new Mt(M,C)},n.set(o,d),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function B0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var k0={[Gr]:"LINEAR_TONE_MAPPING",[Vr]:"REINHARD_TONE_MAPPING",[Hr]:"CINEON_TONE_MAPPING",[ts]:"ACES_FILMIC_TONE_MAPPING",[Xr]:"AGX_TONE_MAPPING",[qr]:"NEUTRAL_TONE_MAPPING",[Wr]:"CUSTOM_TONE_MAPPING"};function z0(i,t,e,n,s,r){let a=new Ge(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Oe;h.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ge([0,2,0,0,2,0],2));let p=new Is({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new re(h,p),f=new Ji(-1,1,1,-1,0,1),m=null,S=null,u=!1,g,y=null,T=[],M=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),l!==null&&l.setSize(C,E);for(let x=0;x<T.length;x++){let v=T[x];v.setSize&&v.setSize(C,E)}},this.setEffects=function(C){T=C,M=T.length>0&&T[0].isRenderPass===!0;let E=a.width,x=a.height;T.length>0&&o===null&&(o=new Ge(E,x,{type:Xe,depthBuffer:!1,stencilBuffer:!1}),l=new Ge(E,x,{type:Xe,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&T.some(k=>k.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new li(E,x),r===!0&&(c.format=di,c.type=ns)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let k=0;k<T.length;k++){let A=T[k];A.setSize&&A.setSize(E,x),v&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(C,E){if(u||C.toneMapping===qn&&T.length===0)return!1;if(y=E,E!==null){let x=E.width,v=E.height;(a.width!==x||a.height!==v)&&this.setSize(x,v)}return M===!1&&C.setRenderTarget(a),g=C.toneMapping,C.toneMapping=qn,!0},this.hasRenderPass=function(){return M},this.end=function(C,E){C.toneMapping=g,u=!0;let x=a,v=o;for(let k=0;k<T.length;k++){let A=T[k];A.enabled!==!1&&(A.render(C,v,x,E),A.needsSwap!==!1&&(x=v,v=v===o?l:o))}if(m!==C.outputColorSpace||S!==C.toneMapping){m=C.outputColorSpace,S=C.toneMapping,p.defines={},ve.getTransfer(m)===Re&&(p.defines.SRGB_TRANSFER="");let k=k0[S];k&&(p.defines[k]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(y),C.render(d,f),y=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var Wu=new fn,Xu=new li(1,1),qu=new yr(1),Yu=new dr,Zu=new qa,Ku=new vr,bu=[],wu=[],Tu=new Float32Array(16),Eu=new Float32Array(9),Au=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sl(i,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Ye(e,n)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Eu.set(n),i.uniformMatrix3fv(this.addr,!1,Eu),Ye(e,n)}}function Y0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),Ye(e,n)}}function Z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function rl(i){return i.version===0&&(i.compareFunction=xc,i.needsUpdate=!0),i}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=rl(Xu):r=Wu,e.setTexture2D(t||r,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zu,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=rl(qu):r=Ku,e.setTextureCube(t||r,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yu,s)}function ag(i){switch(i){case 5126:return G0;case 35664:return V0;case 35665:return H0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return Z0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return j0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,t){i.uniform1fv(this.addr,t)}function lg(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function cg(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function hg(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function ug(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dg(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fg(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pg(i,t){i.uniform1iv(this.addr,t)}function mg(i,t){i.uniform2iv(this.addr,t)}function gg(i,t){i.uniform3iv(this.addr,t)}function _g(i,t){i.uniform4iv(this.addr,t)}function xg(i,t){i.uniform1uiv(this.addr,t)}function vg(i,t){i.uniform2uiv(this.addr,t)}function yg(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function Sg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=rl(Xu):a=Wu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function bg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zu,r[a])}function wg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=rl(qu):a=Ku;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yu,r[a])}function Eg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return vg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}var Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}},Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}},Dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function Cu(i,t){i.seq.push(t),i.map[t.id]=t}function Ag(i,t,e){let n=i.name,s=n.length;for(Rc.lastIndex=0;;){let r=Rc.exec(n),a=Rc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cu(e,c===void 0?new Ic(o,i,t):new Lc(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Dc(o),Cu(e,p)),e=p}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ag(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Ru(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Cg=37297,Rg=0;function Pg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Pu=new ce;function Ig(i){ve._getMatrix(Pu,ve.workingColorSpace,i);let t=`mat3( ${Pu.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case hr:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Iu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Pg(i.getShaderSource(t),o)}else return r}function Lg(i,t){let e=Ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Dg={[Gr]:"Linear",[Vr]:"Reinhard",[Hr]:"Cineon",[ts]:"ACESFilmic",[Xr]:"AgX",[qr]:"Neutral",[Wr]:"Custom"};function Ng(i,t){let e=Dg[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nl=new O;function Ug(){ve.getLuminanceCoefficients(nl);let i=nl.x.toFixed(4),t=nl.y.toFixed(4),e=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Og(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ea(i){return i!==""}function Lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(kg,zg)}function zg(i,t){let e=ye[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Nc(e)}var Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(i){return i.replace(Gg,Vg)}function Vg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Hg={[$i]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Wg(i){return Hg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xg={[Bs]:"ENVMAP_MODE_REFRACTION"};function qg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yg={[lc]:"ENVMAP_BLENDING_MULTIPLY",[Zh]:"ENVMAP_BLENDING_MIX",[Kh]:"ENVMAP_BLENDING_ADD"};function Zg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yg[i.combine]||"ENVMAP_BLENDING_NONE"}function Kg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Wg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qg(e),p=Zg(e),d=Fg(e),f=Og(r),m=s.createProgram(),S,u,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ea).join(`
`),S.length>0&&(S+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ea).join(`
`),u.length>0&&(u+=`
`)):(S=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),u=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?ye.tonemapping_pars_fragment:"",e.toneMapping!==qn?Ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),Ug(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ea).join(`
`)),a=Nc(a),a=Lu(a,e),a=Du(a,e),o=Nc(o),o=Lu(o,e),o=Du(o,e),a=Nu(a),o=Nu(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,u=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=g+S+a,T=g+u+o,M=Ru(s,s.VERTEX_SHADER,y),C=Ru(s,s.FRAGMENT_SHADER,T);s.attachShader(m,M),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(m)||"",B=s.getShaderInfoLog(M)||"",Q=s.getShaderInfoLog(C)||"",N=L.trim(),G=B.trim(),K=Q.trim(),q=!0,ct=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,C);else{let rt=Iu(s,M,"vertex"),ft=Iu(s,C,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+rt+`
`+ft)}else N!==""?oe("WebGLProgram: Program Info Log:",N):(G===""||K==="")&&(ct=!1);ct&&(A.diagnostics={runnable:q,programLog:N,vertexShader:{log:G,prefix:S},fragmentShader:{log:K,prefix:u}})}s.deleteShader(M),s.deleteShader(C),x=new zs(s,m),v=Bg(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(m,Cg)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=C,this}var Jg=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function $g(i){return i===Di||i===jr||i===Qr}function jg(i,t,e,n,s,r){let a=new Ts,o=new Uc,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,v,k,A,L,B){let Q=A.fog,N=L.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=t.get(x.envMap||G,K),ct=d[x.type],rt=n.precision;x.precision!==null&&(rt=n.getMaxPrecision(x.precision),rt!==x.precision&&oe("WebGLProgram.getParameters:",x.precision,"not supported, using",rt,"instead."));let ft=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,dt=ft!==void 0?ft.length:0,st=0;N.morphAttributes.position!==void 0&&(st=1),N.morphAttributes.normal!==void 0&&(st=2),N.morphAttributes.color!==void 0&&(st=3);let ut,X,xt,Tt;if(ct){let kt=Zn[ct];ut=kt.vertexShader,X=kt.fragmentShader}else{ut=x.vertexShader,X=x.fragmentShader;let kt=o.getVertexShaderStage(x),Se=o.getFragmentShaderStage(x);o.update(x,kt,Se),xt=kt.id,Tt=Se.id}let zt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Bt=L.isInstancedMesh===!0,he=L.isBatchedMesh===!0,qt=!!x.map,te=!!x.matcap,ie=!!q,pt=ie&&q.isPMREMTexture===!0,Ct=!!x.aoMap,vt=!!x.lightMap,Ut=!!x.bumpMap&&x.wireframe===!1,It=!!x.normalMap,ee=!!x.displacementMap,Lt=!!x.emissiveMap,jt=!!x.metalnessMap,Gt=!!x.roughnessMap,ae=x.anisotropy>0,V=x.clearcoat>0,fe=x.diffuseRoughness>0,Zt=x.dispersion>0,de=x.retroreflectivity>0,Ft=x.iridescence>0,xe=x.sheen>0,Kt=x.transmission>0,Vt=ae&&!!x.anisotropyMap,R=V&&!!x.clearcoatMap,_=V&&!!x.clearcoatNormalMap,D=V&&!!x.clearcoatRoughnessMap,Y=fe&&!!x.diffuseRoughnessMap,H=Ft&&!!x.iridescenceMap,ht=Ft&&!!x.iridescenceThicknessMap,mt=xe&&!!x.sheenColorMap,Z=xe&&!!x.sheenRoughnessMap,et=!!x.specularMap,yt=!!x.specularColorMap,F=!!x.specularIntensityMap,nt=Kt&&!!x.transmissionMap,at=Kt&&!!x.thicknessMap,At=!!x.gradientMap,Rt=!!x.alphaMap,Dt=x.alphaTest>0,Xt=!!x.alphaHash,Qt=!!x.extensions,Pt=qn;x.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Jt=pt?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,ue={shaderID:ct,shaderType:x.type,shaderName:x.name,vertexShader:ut,fragmentShader:X,defines:x.defines,customVertexShaderID:xt,customFragmentShaderID:Tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:rt,batching:he,batchingColor:he&&L._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&L.instanceColor!==null,instancingMorph:Bt&&L.morphTexture!==null,outputColorSpace:zt===null?i.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qt,matcap:te,envMap:ie,envMapMode:ie&&q.mapping,envMapPMREM:pt,envMapMaxLod:pt?Jt.length-1:null,envMapSize:pt?Jt[0].width:null,aoMap:Ct,lightMap:vt,bumpMap:Ut,normalMap:It,displacementMap:ee,emissiveMap:Lt,normalMapObjectSpace:It&&x.normalMapType===jh,normalMapTangentSpace:It&&x.normalMapType===tl,packedNormalMap:It&&x.normalMapType===tl&&$g(x.normalMap.format),metalnessMap:jt,roughnessMap:Gt,anisotropy:ae,anisotropyMap:Vt,clearcoat:V,clearcoatMap:R,clearcoatNormalMap:_,clearcoatRoughnessMap:D,diffuseRoughness:fe,diffuseRoughnessMap:Y,dispersion:Zt,retroreflection:de,iridescence:Ft,iridescenceMap:H,iridescenceThicknessMap:ht,sheen:xe,sheenColorMap:mt,sheenRoughnessMap:Z,specularMap:et,specularColorMap:yt,specularIntensityMap:F,transmission:Kt,transmissionMap:nt,thicknessMap:at,gradientMap:At,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:Rt,alphaTest:Dt,alphaHash:Xt,combine:x.combine,mapUv:qt&&f(x.map.channel),aoMapUv:Ct&&f(x.aoMap.channel),lightMapUv:vt&&f(x.lightMap.channel),bumpMapUv:Ut&&f(x.bumpMap.channel),normalMapUv:It&&f(x.normalMap.channel),displacementMapUv:ee&&f(x.displacementMap.channel),emissiveMapUv:Lt&&f(x.emissiveMap.channel),metalnessMapUv:jt&&f(x.metalnessMap.channel),roughnessMapUv:Gt&&f(x.roughnessMap.channel),anisotropyMapUv:Vt&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Y&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:H&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(x.sheenRoughnessMap.channel),specularMapUv:et&&f(x.specularMap.channel),specularColorMapUv:yt&&f(x.specularColorMap.channel),specularIntensityMapUv:F&&f(x.specularIntensityMap.channel),transmissionMapUv:nt&&f(x.transmissionMap.channel),thicknessMapUv:at&&f(x.thicknessMap.channel),alphaMapUv:Rt&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(It||ae),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(qt||Rt),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&It===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_t,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:st,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:B.filter(kt=>kt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:qt&&x.map.isVideoTexture===!0&&ve.getTransfer(x.map.colorSpace)===Re,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&ve.getTransfer(x.emissiveMap.colorSpace)===Re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tn,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&x.extensions.multiDraw===!0||he)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function S(x){let v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)v.push(k),v.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(u(v,x),g(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function u(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapPMREM),x.push(v.envMapMaxLod),x.push(v.envMapSize),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.diffuseRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.numSunLights),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numSunLightShadows),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.numLightProbeGrids),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function g(x,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let v=d[x.type],k;if(v){let A=Zn[v];k=wn.clone(A.uniforms)}else k=x.uniforms;return k}function T(x,v){let k=h.get(v);return k!==void 0?++k.usedTimes:(k=new Kg(i,v,x,s),c.push(k),h.set(v,k)),k}function M(x){if(--x.usedTimes===0){let v=c.indexOf(x);c[v]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:y,acquireProgram:T,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:E}}function Qg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function t_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ou(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,S,u,g){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:u,group:g},i[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=a(d),y.groupOrder=S,y.renderOrder=d.renderOrder,y.z=u,y.group=g),t++,y}function l(d,f,m,S,u,g,y){y.reversedDepth===!0&&(u=-u);let T=o(d,f,m,S,u,g);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):e.push(T)}function c(d,f,m,S,u,g){let y=o(d,f,m,S,u,g);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||t_),n.length>1&&n.sort(f||Fu),s.length>1&&s.sort(f||Fu)}function p(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function e_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ou,i.set(n,[a])):s>=r.length?(a=new Ou,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new $t};break;case"SpotLight":e={position:new O,direction:new O,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function i_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var s_=0;function r_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function a_(i){let t=new n_,e=i_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new Me,a=new Me;function o(c){let h=0,p=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,m=0,S=0,u=0,g=0,y=0,T=0,M=0,C=0,E=0,x=0,v=0,k=0,A=0;c.sort(r_);for(let B=0,Q=c.length;B<Q;B++){let N=c[B],G=N.color,K=N.intensity,q=N.distance,ct=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Di?ct=N.shadow.map.texture:ct=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=G.r*K,p+=G.g*K,d+=G.b*K;else if(N.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(N.sh.coefficients[rt],K);A++}else if(N.isSunLight){let rt=t.get(N);if(rt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ft=N.shadow,dt=e.get(N);dt.shadowIntensity=ft.intensity,dt.shadowBias=ft.bias,dt.shadowNormalBias=ft.normalBias,dt.shadowRadius=ft.radius,dt.shadowMapSize.copy(ft.mapSize).multiply(ft.getFrameExtents()),n.sunShadow[m]=dt,n.sunShadowMap[m]=ct;let st=ft.getViewportCount();for(let ut=0;ut<st;ut++)n.sunShadowMatrix[S+ut]=ft.getMatrix(ut),n.sunShadowCascade[S+ut]=ft._cascadeData[ut];S+=st,m++}n.sun[f]=rt,f++}else if(N.isDirectionalLight){let rt=t.get(N);if(rt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ft=N.shadow,dt=e.get(N);dt.shadowIntensity=ft.intensity,dt.shadowBias=ft.bias,dt.shadowNormalBias=ft.normalBias,dt.shadowRadius=ft.radius,dt.shadowMapSize=ft.mapSize,n.directionalShadow[u]=dt,n.directionalShadowMap[u]=ct,n.directionalShadowMatrix[u]=N.shadow.matrix,C++}n.directional[u]=rt,u++}else if(N.isSpotLight){let rt=t.get(N);rt.position.setFromMatrixPosition(N.matrixWorld),rt.color.copy(G).multiplyScalar(K),rt.distance=q,rt.coneCos=Math.cos(N.angle),rt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),rt.decay=N.decay,n.spot[y]=rt;let ft=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,ft.updateMatrices(N),N.castShadow&&k++),n.spotLightMatrix[y]=ft.matrix,N.castShadow){let dt=e.get(N);dt.shadowIntensity=ft.intensity,dt.shadowBias=ft.bias,dt.shadowNormalBias=ft.normalBias,dt.shadowRadius=ft.radius,dt.shadowMapSize=ft.mapSize,n.spotShadow[y]=dt,n.spotShadowMap[y]=ct,x++}y++}else if(N.isRectAreaLight){let rt=t.get(N);rt.color.copy(G).multiplyScalar(K),rt.halfWidth.set(N.width*.5,0,0),rt.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=rt,T++}else if(N.isPointLight){let rt=t.get(N);if(rt.color.copy(N.color).multiplyScalar(N.intensity),rt.distance=N.distance,rt.decay=N.decay,N.castShadow){let ft=N.shadow,dt=e.get(N);dt.shadowIntensity=ft.intensity,dt.shadowBias=ft.bias,dt.shadowNormalBias=ft.normalBias,dt.shadowRadius=ft.radius,dt.shadowMapSize=ft.mapSize,dt.shadowCameraNear=ft.camera.near,dt.shadowCameraFar=ft.camera.far,n.pointShadow[g]=dt,n.pointShadowMap[g]=ct,n.pointShadowMatrix[g]=N.shadow.matrix,E++}n.point[g]=rt,g++}else if(N.isHemisphereLight){let rt=t.get(N);rt.skyColor.copy(N.color).multiplyScalar(K),rt.groundColor.copy(N.groundColor).multiplyScalar(K),n.hemi[M]=rt,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==u||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==T||L.hemiLength!==M||L.numSunShadows!==m||L.numDirectionalShadows!==C||L.numPointShadows!==E||L.numSpotShadows!==x||L.numSpotMaps!==v||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=u,n.spot.length=y,n.rectArea.length=T,n.point.length=g,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+v-k,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=A,L.sunLength=f,L.directionalLength=u,L.pointLength=g,L.spotLength=y,L.rectAreaLength=T,L.hemiLength=M,L.numSunShadows=m,L.numDirectionalShadows=C,L.numPointShadows=E,L.numSpotShadows=x,L.numSpotMaps=v,L.numLightProbes=A,n.version=s_++)}function l(c,h){let p=0,d=0,f=0,m=0,S=0,u=0,g=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let M=c[y];if(M.isSunLight){let C=n.sun[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(g),p++}else if(M.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(M.isSpotLight){let C=n.spot[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),m++}else if(M.isRectAreaLight){let C=n.rectArea[S];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let C=n.hemi[u];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(g),u++}}}return{setup:o,setupView:l,state:n}}function Bu(i){let t=new a_(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function o_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bu(i),t.set(s,[o])):r>=a.length?(o=new Bu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
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
}`,h_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],u_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ku=new Me,ta=new O,Pc=new O;function d_(i,t,e){let n=new bi,s=new Mt,r=new Mt,a=new De,o=new to,l=new eo,c={},h=e.maxTextureSize,p={[Li]:on,[on]:Li,[tn]:tn},d=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:l_,fragmentShader:c_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Oe;m.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new re(m,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$i;let g=this.type;this.render=function(E,x,v){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||E.length===0)return;this.type===Rh&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$i);let k=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(hi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Q=g!==this.type;Q&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=E.length;N<G;N++){let K=E[N],q=K.shadow;if(q===void 0){oe("WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ct=q.getFrameExtents();s.multiply(ct),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,q.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=rt,q.map===null||Q===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Fs){if(K.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ge(s.x,s.y,{format:Di,type:Xe,minFilter:dn,magFilter:dn,generateMipmaps:!1}),q.map.texture.name=K.name+".shadowMap",q.map.depthTexture=new li(s.x,s.y,Dn),q.map.depthTexture.name=K.name+".shadowMapDepth",q.map.depthTexture.format=ii,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=je,q.map.depthTexture.magFilter=je}else K.isPointLight?(q.map=new na(s.x),q.map.depthTexture=new yr(s.x,zn)):(q.map=new Ge(s.x,s.y),q.map.depthTexture=new li(s.x,s.y,zn)),q.map.depthTexture.name=K.name+".shadowMap",q.map.depthTexture.format=ii,this.type===$i?(q.map.depthTexture.compareFunction=rt?_c:gc,q.map.depthTexture.minFilter=dn,q.map.depthTexture.magFilter=dn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=je,q.map.depthTexture.magFilter=je);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ft=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();K.isPointLight!==!0&&q.updateMatrices(K,v);let dt=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:v.layers;for(let st=0;st<ft;st++){let ut=q.getCamera(st);if(K.isPointLight){let X=q.camera,xt=q.matrix,Tt=K.distance||X.far;Tt!==X.far&&(X.far=Tt,X.updateProjectionMatrix()),ta.setFromMatrixPosition(K.matrixWorld),X.position.copy(ta),Pc.copy(X.position),Pc.add(h_[st]),X.up.copy(u_[st]),X.lookAt(Pc),X.updateMatrixWorld(),xt.makeTranslation(-ta.x,-ta.y,-ta.z),ku.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ku,X.coordinateSystem,X.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,st),i.clear();else{st===0&&(i.setRenderTarget(q.map),i.clear());let X=q.getViewport(st);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),B.viewport(a)}n=q.getFrustum(st),M(x,v,ut,K,dt,this.type)}q.isPointLightShadow!==!0&&this.type===Fs&&y(q,v),q.needsUpdate=!1}g=this.type,u.needsUpdate=!1,i.setRenderTarget(k,A,L)};function y(E,x){let v=t.update(S);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ge(s.x,s.y,{format:Di,type:Xe}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,v,d,S,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,v,f,S,null)}function T(E,x,v,k){let A=null,L=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)A=L;else if(A=v.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let B=A.uuid,Q=x.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let G=N[Q];G===void 0&&(G=A.clone(),N[Q]=G,x.addEventListener("dispose",C)),A=G}if(A.visible=x.visible,A.wireframe=x.wireframe,k===Fs?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:p[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=i.properties.get(A);B.light=v}return A}function M(E,x,v,k,A,L){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Fs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let N=t.update(E),G=E.material;if(Array.isArray(G)){let K=N.groups;for(let q=0,ct=K.length;q<ct;q++){let rt=K[q],ft=G[rt.materialIndex];if(ft&&ft.visible){let dt=T(E,ft,k,L);E.onBeforeShadow(i,E,x,v,N,dt,rt),i.renderBufferDirect(v,null,N,dt,E,rt),E.onAfterShadow(i,E,x,v,N,dt,rt)}}}else if(G.visible){let K=T(E,G,k,L);E.onBeforeShadow(i,E,x,v,N,K,null),i.renderBufferDirect(v,null,N,K,E,null),E.onAfterShadow(i,E,x,v,N,K,null)}}let Q=E.children;for(let N=0,G=Q.length;N<G;N++)M(Q[N],x,v,k,A,L)}function C(E){E.target.removeEventListener("dispose",C);for(let v in c){let k=c[v],A=E.target.uuid;A in k&&(k[A].dispose(),delete k[A])}}}function f_(i,t){function e(){let F=!1,nt=new De,at=null,At=new De(0,0,0,0);return{setMask:function(Rt){at!==Rt&&!F&&(i.colorMask(Rt,Rt,Rt,Rt),at=Rt)},setLocked:function(Rt){F=Rt},setClear:function(Rt,Dt,Xt,Qt,Pt){Pt===!0&&(Rt*=Qt,Dt*=Qt,Xt*=Qt),nt.set(Rt,Dt,Xt,Qt),At.equals(nt)===!1&&(i.clearColor(Rt,Dt,Xt,Qt),At.copy(nt))},reset:function(){F=!1,at=null,At.set(-1,0,0,0)}}}function n(){let F=!1,nt=!1,at=null,At=null,Rt=null;return{setReversed:function(Dt){if(nt!==Dt){let Xt=t.get("EXT_clip_control");Dt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),nt=Dt;let Qt=Rt;Rt=null,this.setClear(Qt)}},getReversed:function(){return nt},setTest:function(Dt){Dt?_t(i.DEPTH_TEST):Bt(i.DEPTH_TEST)},setMask:function(Dt){at!==Dt&&!F&&(i.depthMask(Dt),at=Dt)},setFunc:function(Dt){if(nt&&(Dt=cu[Dt]),At!==Dt){switch(Dt){case Ua:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=Dt}},setLocked:function(Dt){F=Dt},setClear:function(Dt){Rt!==Dt&&(Rt=Dt,nt&&(Dt=1-Dt),i.clearDepth(Dt))},reset:function(){F=!1,at=null,At=null,Rt=null,nt=!1}}}function s(){let F=!1,nt=null,at=null,At=null,Rt=null,Dt=null,Xt=null,Qt=null,Pt=null;return{setTest:function(Jt){F||(Jt?_t(i.STENCIL_TEST):Bt(i.STENCIL_TEST))},setMask:function(Jt){nt!==Jt&&!F&&(i.stencilMask(Jt),nt=Jt)},setFunc:function(Jt,ue,kt){(at!==Jt||At!==ue||Rt!==kt)&&(i.stencilFunc(Jt,ue,kt),at=Jt,At=ue,Rt=kt)},setOp:function(Jt,ue,kt){(Dt!==Jt||Xt!==ue||Qt!==kt)&&(i.stencilOp(Jt,ue,kt),Dt=Jt,Xt=ue,Qt=kt)},setLocked:function(Jt){F=Jt},setClear:function(Jt){Pt!==Jt&&(i.clearStencil(Jt),Pt=Jt)},reset:function(){F=!1,nt=null,at=null,At=null,Rt=null,Dt=null,Xt=null,Qt=null,Pt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},p={},d={},f=new WeakMap,m=[],S=null,u=!1,g=null,y=null,T=null,M=null,C=null,E=null,x=null,v=new $t(0,0,0),k=0,A=!1,L=null,B=null,Q=null,N=null,G=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ct=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(rt)[1]),q=ct>=1):rt.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),q=ct>=2);let ft=null,dt={},st=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),X=new De().fromArray(st),xt=new De().fromArray(ut);function Tt(F,nt,at,At){let Rt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(F,Dt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<at;Xt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(nt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Dt}let zt={};zt[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),zt[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),zt[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),zt[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Ms),Ut(!1),It(ic),_t(i.CULL_FACE),Ct(hi);function _t(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Bt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function he(F,nt){return d[F]!==nt?(i.bindFramebuffer(F,nt),d[F]=nt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=nt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function qt(F,nt){let at=m,At=!1;if(F){at=f.get(nt),at===void 0&&(at=[],f.set(nt,at));let Rt=F.textures;if(at.length!==Rt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,Xt=Rt.length;Dt<Xt;Dt++)at[Dt]=i.COLOR_ATTACHMENT0+Dt;at.length=Rt.length,At=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,At=!0);At&&i.drawBuffers(at)}function te(F){return S!==F?(i.useProgram(F),S=F,!0):!1}let ie={[Qi]:i.FUNC_ADD,[Ih]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};ie[Dh]=i.MIN,ie[Nh]=i.MAX;let pt={[Uh]:i.ZERO,[Fh]:i.ONE,[Oh]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[Gh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[Vh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(F,nt,at,At,Rt,Dt,Xt,Qt,Pt,Jt){if(F===hi){u===!0&&(Bt(i.BLEND),u=!1);return}if(u===!1&&(_t(i.BLEND),u=!0),F!==Ph){if(F!==g||Jt!==A){if((y!==Qi||C!==Qi)&&(i.blendEquation(i.FUNC_ADD),y=Qi,C=Qi),Jt)switch(F){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",F);break}else switch(F){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",F);break}T=null,M=null,E=null,x=null,v.set(0,0,0),k=0,g=F,A=Jt}return}Rt=Rt||nt,Dt=Dt||at,Xt=Xt||At,(nt!==y||Rt!==C)&&(i.blendEquationSeparate(ie[nt],ie[Rt]),y=nt,C=Rt),(at!==T||At!==M||Dt!==E||Xt!==x)&&(i.blendFuncSeparate(pt[at],pt[At],pt[Dt],pt[Xt]),T=at,M=At,E=Dt,x=Xt),(Qt.equals(v)===!1||Pt!==k)&&(i.blendColor(Qt.r,Qt.g,Qt.b,Pt),v.copy(Qt),k=Pt),g=F,A=!1}function vt(F,nt){F.side===tn?Bt(i.CULL_FACE):_t(i.CULL_FACE);let at=F.side===on;nt&&(at=!at),Ut(at),F.blending===Os&&F.transparent===!1?Ct(hi):Ct(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let At=F.stencilWrite;o.setTest(At),At&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(F){L!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),L=F)}function It(F){F!==Ah?(_t(i.CULL_FACE),F!==B&&(F===ic?i.cullFace(i.BACK):F===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Bt(i.CULL_FACE),B=F}function ee(F){F!==Q&&(q&&i.lineWidth(F),Q=F)}function Lt(F,nt,at){F?(_t(i.POLYGON_OFFSET_FILL),(N!==nt||G!==at)&&(N=nt,G=at,a.getReversed()&&(nt=-nt,at=-at),i.polygonOffset(nt,at))):Bt(i.POLYGON_OFFSET_FILL)}function jt(F){F?_t(i.SCISSOR_TEST):Bt(i.SCISSOR_TEST)}function Gt(F){F===void 0&&(F=i.TEXTURE0+K-1),ft!==F&&(i.activeTexture(F),ft=F)}function ae(F,nt,at){at===void 0&&(ft===null?at=i.TEXTURE0+K-1:at=ft);let At=dt[at];At===void 0&&(At={type:void 0,texture:void 0},dt[at]=At),(At.type!==F||At.texture!==nt)&&(ft!==at&&(i.activeTexture(at),ft=at),i.bindTexture(F,nt||zt[F]),At.type=F,At.texture=nt)}function V(){let F=dt[ft];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(F){le("WebGLState:",F)}}function Zt(){try{i.compressedTexImage3D(...arguments)}catch(F){le("WebGLState:",F)}}function de(){try{i.texSubImage2D(...arguments)}catch(F){le("WebGLState:",F)}}function Ft(){try{i.texSubImage3D(...arguments)}catch(F){le("WebGLState:",F)}}function xe(){try{i.compressedTexSubImage2D(...arguments)}catch(F){le("WebGLState:",F)}}function Kt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){le("WebGLState:",F)}}function Vt(){try{i.texStorage2D(...arguments)}catch(F){le("WebGLState:",F)}}function R(){try{i.texStorage3D(...arguments)}catch(F){le("WebGLState:",F)}}function _(){try{i.texImage2D(...arguments)}catch(F){le("WebGLState:",F)}}function D(){try{i.texImage3D(...arguments)}catch(F){le("WebGLState:",F)}}function Y(F){return p[F]!==void 0?p[F]:i.getParameter(F)}function H(F,nt){p[F]!==nt&&(i.pixelStorei(F,nt),p[F]=nt)}function ht(F){X.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),X.copy(F))}function mt(F){xt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),xt.copy(F))}function Z(F,nt){let at=c.get(nt);at===void 0&&(at=new WeakMap,c.set(nt,at));let At=at.get(F);At===void 0&&(At=i.getUniformBlockIndex(nt,F.name),i.uniformBlockBinding(nt,At,At),at.set(F,At))}function et(F,nt,at){let Rt=c.get(nt).get(F);l[Rt]!==at&&(i.bindBufferBase(i.UNIFORM_BUFFER,Rt,at),l[Rt]=at)}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ft=null,dt={},d={},l={},f=new WeakMap,m=[],S=null,u=!1,g=null,y=null,T=null,M=null,C=null,E=null,x=null,v=new $t(0,0,0),k=0,A=!1,L=null,B=null,Q=null,N=null,G=null,X.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Bt,bindFramebuffer:he,drawBuffers:qt,useProgram:te,setBlending:Ct,setMaterial:vt,setFlipSided:Ut,setCullFace:It,setLineWidth:ee,setPolygonOffset:Lt,setScissorTest:jt,activeTexture:Gt,bindTexture:ae,unbindTexture:V,compressedTexImage2D:fe,compressedTexImage3D:Zt,texImage2D:_,texImage3D:D,pixelStorei:H,getParameter:Y,updateUBOMapping:Z,uniformBlockBinding:et,texStorage2D:Vt,texStorage3D:R,texSubImage2D:de,texSubImage3D:Ft,compressedTexSubImage2D:xe,compressedTexSubImage3D:Kt,scissor:ht,viewport:mt,reset:yt}}function p_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,p=new Set,d,f=new WeakMap,m=new Set,S=new FinalizationRegistry(R=>m.delete(R)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,_){return u?new OffscreenCanvas(R,_):ur("canvas")}function y(R,_,D){let Y=1,H=Vt(R);if((H.width>D||H.height>D)&&(Y=D/Math.max(H.width,H.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ht=Math.floor(Y*H.width),mt=Math.floor(Y*H.height);d===void 0&&(d=g(ht,mt));let Z=_?g(ht,mt):d;return Z.width=ht,Z.height=mt,Z.getContext("2d").drawImage(R,0,0,ht,mt),oe("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+ht+"x"+mt+")."),Z}else return"data"in R&&oe("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),R;return R}function T(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,_,D,Y,H,ht=!1){if(R!==null){if(i[R]!==void 0)return i[R];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let mt;Y&&(mt=t.get("EXT_texture_norm16"),mt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(D===i.FLOAT&&(Z=i.R32F),D===i.HALF_FLOAT&&(Z=i.R16F),D===i.UNSIGNED_BYTE&&(Z=i.R8),D===i.UNSIGNED_SHORT&&mt&&(Z=mt.R16_EXT),D===i.SHORT&&mt&&(Z=mt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.R8UI),D===i.UNSIGNED_SHORT&&(Z=i.R16UI),D===i.UNSIGNED_INT&&(Z=i.R32UI),D===i.BYTE&&(Z=i.R8I),D===i.SHORT&&(Z=i.R16I),D===i.INT&&(Z=i.R32I)),_===i.RG&&(D===i.FLOAT&&(Z=i.RG32F),D===i.HALF_FLOAT&&(Z=i.RG16F),D===i.UNSIGNED_BYTE&&(Z=i.RG8),D===i.UNSIGNED_SHORT&&mt&&(Z=mt.RG16_EXT),D===i.SHORT&&mt&&(Z=mt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RG8UI),D===i.UNSIGNED_SHORT&&(Z=i.RG16UI),D===i.UNSIGNED_INT&&(Z=i.RG32UI),D===i.BYTE&&(Z=i.RG8I),D===i.SHORT&&(Z=i.RG16I),D===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),D===i.UNSIGNED_INT&&(Z=i.RGB32UI),D===i.BYTE&&(Z=i.RGB8I),D===i.SHORT&&(Z=i.RGB16I),D===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),D===i.UNSIGNED_INT&&(Z=i.RGBA32UI),D===i.BYTE&&(Z=i.RGBA8I),D===i.SHORT&&(Z=i.RGBA16I),D===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(D===i.UNSIGNED_SHORT&&mt&&(Z=mt.RGB16_EXT),D===i.SHORT&&mt&&(Z=mt.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){let et=ht?hr:ve.getTransfer(H);D===i.FLOAT&&(Z=i.RGBA32F),D===i.HALF_FLOAT&&(Z=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Z=et===Re?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&mt&&(Z=mt.RGBA16_EXT),D===i.SHORT&&mt&&(Z=mt.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,_){let D;return R?_===null||_===zn||_===ns?D=i.DEPTH24_STENCIL8:_===Dn?D=i.DEPTH32F_STENCIL8:_===ks&&(D=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===ns?D=i.DEPTH_COMPONENT24:_===Dn?D=i.DEPTH_COMPONENT32F:_===ks&&(D=i.DEPTH_COMPONENT16),D}function v(R,_){return T(R)===!0||R.isFramebufferTexture&&R.minFilter!==je&&R.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function k(R){let _=new WeakRef(R);n.get(R).__ref=_,m.add(_),S.register(R,_,_)}function A(R){let _=n.get(R).__ref;_!==void 0&&(m.delete(_),S.unregister(_))}function L(R){Q(R.target)}function B(R){N(R.target)}function Q(R){R.removeEventListener("dispose",L),A(R),K(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&p.delete(R)}function N(R){R.removeEventListener("dispose",B),A(R),ct(R)}function G(){for(let R of m){let _=R.deref();_!==void 0&&(_.isRenderTarget===!0?N(_):Q(_))}m.clear(),p.clear()}function K(R){let _=n.get(R);if(_.__webglInit===void 0)return;let D=R.source,Y=f.get(D);if(Y){let H=Y[_.__cacheKey];H.usedTimes--,H.usedTimes===0&&q(R),Object.keys(Y).length===0&&f.delete(D)}n.remove(R)}function q(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let D=R.source,Y=f.get(D);delete Y[_.__cacheKey],a.memory.textures--}function ct(R){let _=n.get(R);_.__depthDisposeCallback&&_.__depthDisposeCallback();let D=R.depthTexture;if(D&&D.renderTarget===R&&Q(D),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let ht=0;ht<_.__webglFramebuffer[H].length;ht++)i.deleteFramebuffer(_.__webglFramebuffer[H][ht]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let Y=R.textures;for(let H=0,ht=Y.length;H<ht;H++){let mt=n.get(Y[H]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(Y[H])}n.remove(R)}let rt=0;function ft(){rt=0}function dt(){return rt}function st(R){rt=R}function ut(){let R=rt;return R>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),rt+=1,R}function X(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.mipmapsAutoUpdate),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function xt(R,_){let D=n.get(R);if(R.isVideoTexture&&xe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){let Y=R.image;if(Y===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(D,R,_);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+_)}function Tt(R,_){let D=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){vt(D,R,_);return}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+_)}function zt(R,_){let D=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){vt(D,R,_);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+_)}function _t(R,_){let D=n.get(R);if(R.version>0&&D.__version!==R.version){Ut(D,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+_)}let Bt={[Pn]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},he={[je]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},qt={[tu]:i.NEVER,[xc]:i.ALWAYS,[eu]:i.LESS,[gc]:i.LEQUAL,[nu]:i.EQUAL,[_c]:i.GEQUAL,[iu]:i.GREATER,[su]:i.NOTEQUAL};function te(R,_){if(_.type===Dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===go||_.magFilter===Yr||_.magFilter===ui||_.minFilter===dn||_.minFilter===go||_.minFilter===Yr||_.minFilter===ui)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Bt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Bt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Bt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,qt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===je||_.minFilter!==Yr&&_.minFilter!==ui||_.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ie(R,_){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",L),k(_));let Y=_.source,H=f.get(Y);H===void 0&&(H={},f.set(Y,H));let ht=X(_);if(ht!==R.__cacheKey){H[ht]===void 0&&(H[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),H[ht].usedTimes++;let mt=H[R.__cacheKey];mt!==void 0&&(H[R.__cacheKey].usedTimes--,mt.usedTimes===0&&q(_)),R.__cacheKey=ht,R.__webglTexture=H[ht].texture}return D}function pt(R,_,D){return Math.floor(Math.floor(R/D)/_)}function Ct(R,_,D,Y){let ht=R.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,D,Y,_.data);else{ht.sort((F,nt)=>F.start-nt.start);let mt=0;for(let F=1;F<ht.length;F++){let nt=ht[mt],at=ht[F],At=nt.start+nt.count,Rt=pt(at.start,_.width,4),Dt=pt(nt.start,_.width,4);at.start<=At+1&&Rt===Dt&&pt(at.start+at.count-1,_.width,4)===Rt?nt.count=Math.max(nt.count,at.start+at.count-nt.start):(++mt,ht[mt]=at)}ht.length=mt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let F=0,nt=ht.length;F<nt;F++){let at=ht[F],At=Math.floor(at.start/4),Rt=Math.ceil(at.count/4),Dt=At%_.width,Xt=Math.floor(At/_.width),Qt=Rt,Pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(i.TEXTURE_2D,0,Dt,Xt,Qt,Pt,D,Y,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function vt(R,_,D){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let H=ie(R,_),ht=_.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+D);let mt=n.get(ht);if(ht.version!==mt.__version||H===!0){if(e.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Pt=ve.getPrimaries(ve.workingColorSpace),Jt=_.colorSpace===Vn?null:ve.getPrimaries(_.colorSpace),ue=_.colorSpace===Vn||Pt===Jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let et=y(_.image,!1,s.maxTextureSize);et=Kt(_,et);let yt=r.convert(_.format,_.colorSpace),F=r.convert(_.type),nt=E(_.internalFormat,yt,F,_.normalized,_.colorSpace,_.isVideoTexture);te(Y,_);let at,At=_.mipmaps,Rt=_.isVideoTexture!==!0,Dt=mt.__version===void 0||H===!0,Xt=ht.dataReady,Qt=v(_,et);if(_.isDepthTexture)nt=x(_.format===di,_.type),Dt&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,nt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,nt,et.width,et.height,0,yt,F,null));else if(_.isDataTexture)if(At.length>0){Rt&&Dt&&e.texStorage2D(i.TEXTURE_2D,Qt,nt,At[0].width,At[0].height);for(let Pt=0,Jt=At.length;Pt<Jt;Pt++)at=At[Pt],Rt?Xt&&e.texSubImage2D(i.TEXTURE_2D,Pt,0,0,at.width,at.height,yt,F,at.data):e.texImage2D(i.TEXTURE_2D,Pt,nt,at.width,at.height,0,yt,F,at.data);_.generateMipmaps=!1}else Rt?(Dt&&e.texStorage2D(i.TEXTURE_2D,Qt,nt,et.width,et.height),Xt&&Ct(_,et,yt,F)):e.texImage2D(i.TEXTURE_2D,0,nt,et.width,et.height,0,yt,F,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Rt&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,nt,At[0].width,At[0].height,et.depth);for(let Pt=0,Jt=At.length;Pt<Jt;Pt++)if(at=At[Pt],_.format!==Gn)if(yt!==null)if(Rt){if(Xt)if(_.layerUpdates.size>0){let ue=Cc(at.width,at.height,_.format,_.type);for(let kt of _.layerUpdates){let Se=at.data.subarray(kt*ue/at.data.BYTES_PER_ELEMENT,(kt+1)*ue/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pt,0,0,kt,at.width,at.height,1,yt,Se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pt,0,0,0,at.width,at.height,et.depth,yt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pt,nt,at.width,at.height,et.depth,0,at.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?Xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Pt,0,0,0,at.width,at.height,et.depth,yt,F,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Pt,nt,at.width,at.height,et.depth,0,yt,F,at.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Rt&&Dt&&e.texStorage2D(i.TEXTURE_2D,Qt,nt,At[0].width,At[0].height);for(let Pt=0,Jt=At.length;Pt<Jt;Pt++)at=At[Pt],_.format!==Gn?yt!==null?Rt?Xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Pt,0,0,at.width,at.height,yt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,Pt,nt,at.width,at.height,0,at.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?Xt&&e.texSubImage2D(i.TEXTURE_2D,Pt,0,0,at.width,at.height,yt,F,at.data):e.texImage2D(i.TEXTURE_2D,Pt,nt,at.width,at.height,0,yt,F,at.data)}else if(_.isDataArrayTexture)if(Rt){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,nt,et.width,et.height,et.depth),Xt)if(_.layerUpdates.size>0){let Pt=Cc(et.width,et.height,_.format,_.type);for(let Jt of _.layerUpdates){let ue=et.data.subarray(Jt*Pt/et.data.BYTES_PER_ELEMENT,(Jt+1)*Pt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Jt,et.width,et.height,1,yt,F,ue)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,yt,F,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,et.width,et.height,et.depth,0,yt,F,et.data);else if(_.isData3DTexture)Rt?(Dt&&e.texStorage3D(i.TEXTURE_3D,Qt,nt,et.width,et.height,et.depth),Xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,yt,F,et.data)):e.texImage3D(i.TEXTURE_3D,0,nt,et.width,et.height,et.depth,0,yt,F,et.data);else if(_.isFramebufferTexture){if(Dt)if(Rt)e.texStorage2D(i.TEXTURE_2D,Qt,nt,et.width,et.height);else{let Pt=et.width,Jt=et.height;for(let ue=0;ue<Qt;ue++)e.texImage2D(i.TEXTURE_2D,ue,nt,Pt,Jt,0,yt,F,null),Pt>>=1,Jt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Pt=i.canvas;if(Pt.hasAttribute("layoutsubtree")||Pt.setAttribute("layoutsubtree","true"),et.parentNode!==Pt){Pt.appendChild(et),p.add(_),Pt.onpaint=Jt=>{let ue=Jt.changedElements;for(let kt of p)ue.includes(kt.image)&&(kt.needsUpdate=!0)},Pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let ue=i.RGBA,kt=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ue,kt,Se,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(Rt&&Dt){let Pt=Vt(At[0]);e.texStorage2D(i.TEXTURE_2D,Qt,nt,Pt.width,Pt.height)}for(let Pt=0,Jt=At.length;Pt<Jt;Pt++)at=At[Pt],Rt?Xt&&e.texSubImage2D(i.TEXTURE_2D,Pt,0,0,yt,F,at):e.texImage2D(i.TEXTURE_2D,Pt,nt,yt,F,at);_.generateMipmaps=!1}else if(Rt){if(Dt){let Pt=Vt(et);e.texStorage2D(i.TEXTURE_2D,Qt,nt,Pt.width,Pt.height)}Xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,F,et)}else e.texImage2D(i.TEXTURE_2D,0,nt,yt,F,et);T(_)&&_.mipmapsAutoUpdate===!0&&M(Y),mt.__version=ht.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ut(R,_,D){if(_.image.length!==6)return;let Y=ie(R,_),H=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+D);let ht=n.get(H);if(H.version!==ht.__version||Y===!0){e.activeTexture(i.TEXTURE0+D);let mt=ve.getPrimaries(ve.workingColorSpace),Z=_.colorSpace===Vn?null:ve.getPrimaries(_.colorSpace),et=_.colorSpace===Vn||mt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let yt=_.isCompressedTexture||_.image[0].isCompressedTexture,F=_.image[0]&&_.image[0].isDataTexture,nt=[];for(let kt=0;kt<6;kt++)!yt&&!F?nt[kt]=y(_.image[kt],!0,s.maxCubemapSize):nt[kt]=F?_.image[kt].image:_.image[kt],nt[kt]=Kt(_,nt[kt]);let at=nt[0],At=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type),Dt=E(_.internalFormat,At,Rt,_.normalized,_.colorSpace),Xt=_.isVideoTexture!==!0,Qt=ht.__version===void 0||Y===!0,Pt=H.dataReady,Jt=v(_,at);te(i.TEXTURE_CUBE_MAP,_);let ue;if(_.isDepthTexture){if(Dt=x(_.format===di,_.type),Qt)if(Xt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Dt,at.width,at.height);else for(let kt=0;kt<6;kt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Dt,at.width,at.height,0,At,Rt,null)}else if(yt){Xt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Dt,at.width,at.height);for(let kt=0;kt<6;kt++){ue=nt[kt].mipmaps;for(let Se=0;Se<ue.length;Se++){let Be=ue[Se];_.format!==Gn?At!==null?Xt?Pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Se,0,0,Be.width,Be.height,At,Be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Se,Dt,Be.width,Be.height,0,Be.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Se,0,0,Be.width,Be.height,At,Rt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Se,Dt,Be.width,Be.height,0,At,Rt,Be.data)}}}else{if(ue=_.mipmaps,Xt&&Qt){ue.length>0&&Jt++;let kt=Vt(nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Dt,kt.width,kt.height)}for(let kt=0;kt<6;kt++)if(F){Xt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,0,0,nt[kt].width,nt[kt].height,At,Rt,nt[kt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Dt,nt[kt].width,nt[kt].height,0,At,Rt,nt[kt].data);for(let Se=0;Se<ue.length;Se++){let Nn=ue[Se].image[kt].image;Xt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Se+1,0,0,Nn.width,Nn.height,At,Rt,Nn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Se+1,Dt,Nn.width,Nn.height,0,At,Rt,Nn.data)}}else{Xt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,0,0,At,Rt,nt[kt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Dt,At,Rt,nt[kt]);for(let Se=0;Se<ue.length;Se++){let Be=ue[Se];Xt?Pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Se+1,0,0,At,Rt,Be.image[kt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Se+1,Dt,At,Rt,Be.image[kt])}}}T(_)&&_.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ht.__version=H.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function It(R,_,D,Y,H,ht){let mt=r.convert(D.format,D.colorSpace),Z=r.convert(D.type),et=E(D.internalFormat,mt,Z,D.normalized,D.colorSpace),yt=n.get(_),F=n.get(D);if(F.__renderTarget=_,!yt.__hasExternalTextures){let nt=Math.max(1,_.width>>ht),at=Math.max(1,_.height>>ht);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?e.texImage3D(H,ht,et,nt,at,_.depth,0,mt,Z,null):e.texImage2D(H,ht,et,nt,at,0,mt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,H,F.__webglTexture,0,de(_)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,H,F.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(R,_,D){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let Y=_.depthTexture,H=Y&&Y.isDepthTexture?Y.type:null,ht=x(_.stencilBuffer,H),mt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(_),ht,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(_),ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,R)}else{let Y=_.textures;for(let H=0;H<Y.length;H++){let ht=Y[H],mt=r.convert(ht.format,ht.colorSpace),Z=r.convert(ht.type),et=E(ht.internalFormat,mt,Z,ht.normalized,ht.colorSpace);Ft(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(_),et,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(_),et,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,et,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(R,_,D){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(_.depthTexture);H.__renderTarget=_;let ht=Y?_.depthTexture.image[0]:_.depthTexture.image;(!H.__webglTexture||ht.width!==_.width||ht.height!==_.height)&&(ht.width=_.width,ht.height=_.height,_.depthTexture.needsUpdate=!0),Y?_t(_.depthTexture,0):xt(_.depthTexture,0);let mt=H.__webglTexture,Z=de(_),et=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,yt=_.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ii)Ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,et,mt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,yt,et,mt,0);else if(_.depthTexture.format===di)Ft(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,et,mt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,yt,et,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(R){let _=n.get(R),D=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let H=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",H)};Y.addEventListener("dispose",H),_.__depthDisposeCallback=H}_.__boundDepthTexture=Y}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let Y=0;Y<6;Y++)Lt(_.__webglFramebuffer[Y],R,Y);else R.texture.mipmaps.length>0?Lt(_.__webglFramebuffer[0],R,0):Lt(_.__webglFramebuffer,R,0);else if(D){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),ee(_.__webglDepthbuffer[Y],R,!1);else{let H=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,ht)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ee(_.__webglDepthbuffer,R,!1);else{let H=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(R,_,D){let Y=n.get(R);_!==void 0&&It(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&jt(R)}function ae(R){let _=R.texture,D=n.get(R),Y=n.get(_);R.addEventListener("dispose",B),k(R);let H=R.textures,ht=R.isWebGLCubeRenderTarget===!0,mt=H.length>1;if(mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),ht){D.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps.length>0){D.__webglFramebuffer[Z]=[];for(let et=0;et<_.mipmaps.length;et++)D.__webglFramebuffer[Z][et]=i.createFramebuffer()}else D.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps.length>0){D.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)D.__webglFramebuffer[Z]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(mt)for(let Z=0,et=H.length;Z<et;Z++){let yt=n.get(H[Z]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ft(R)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let Z=0;Z<H.length;Z++){let et=H[Z];D.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[Z]);let yt=r.convert(et.format,et.colorSpace),F=r.convert(et.type),nt=E(et.internalFormat,yt,F,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),at=de(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,nt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,D.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(D.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),te(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)It(D.__webglFramebuffer[Z][et],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et);else It(D.__webglFramebuffer[Z],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(_)?M(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let Z=0,et=H.length;Z<et;Z++){let yt=H[Z],F=n.get(yt),nt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,F.__webglTexture),te(nt,yt),It(D.__webglFramebuffer,R,yt,i.COLOR_ATTACHMENT0+Z,nt,0),T(yt)&&M(nt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,Y.__webglTexture),te(Z,_),_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)It(D.__webglFramebuffer[et],R,_,i.COLOR_ATTACHMENT0,Z,et);else It(D.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,Z,0);T(_)?M(Z):_.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&jt(R)}function V(R){let _=R.textures;for(let D=0,Y=_.length;D<Y;D++){let H=_[D];if(T(H)&&H.mipmapsAutoUpdate===!0){let ht=C(R),mt=n.get(H).__webglTexture;e.bindTexture(ht,mt),M(ht),e.unbindTexture()}}}let fe=[];function Zt(R){if(R.samples>0){if(Ft(R)===!1){let _=R.textures,D=R.width,Y=R.height,H=i.COLOR_BUFFER_BIT,ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(R),Z=_.length>1;if(Z)for(let yt=0;yt<_.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let yt=0;yt<_.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let F=n.get(_[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,D,Y,0,0,D,Y,H,i.NEAREST),l===!0&&(fe.length=0,fe.push(i.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&fe.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let yt=0;yt<_.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let F=n.get(_[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,F,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function de(R){return Math.min(s.maxSamples,R.samples)}function Ft(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xe(R){let _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Kt(R,_){let D=R.colorSpace,Y=R.format,H=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==cr&&D!==Vn&&(ve.getTransfer(D)===Re?(Y!==Gn||H!==mn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",D)),_}function Vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ut,this.resetTextureUnits=ft,this.getTextureUnits=dt,this.setTextureUnits=st,this.setTexture2D=xt,this.setTexture2DArray=Tt,this.setTexture3D=zt,this.setTextureCube=_t,this.rebindTextures=Gt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ft,this.dispose=G}function m_(i,t){function e(n,s=Vn){let r,a=ve.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Xe)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===Gn)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===yo)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===So)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===Zr||n===Kr||n===Jr||n===$r)if(a===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===To||n===Eo||n===Ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Ro||n===Po||n===Io||n===Lo||n===jr||n===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Co||n===Ro)return a===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Io)return r.COMPRESSED_R11_EAC;if(n===Lo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jr)return r.COMPRESSED_RG11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===No)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===Ko||n===Jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return a===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===jo||n===Qr||n===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var g_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:g_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,f=null,m=null,S=typeof XRWebGLBinding<"u",u=new Oc,g={},y=e.getContextAttributes(),T=null,M=null,C=[],E=[],x=new Mt,v=null,k=null,A=new an;A.viewport=new De;let L=new an;L.viewport=new De;let B=[A,L],Q=new fo,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let xt=C[X];return xt===void 0&&(xt=new Es,C[X]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(X){let xt=C[X];return xt===void 0&&(xt=new Es,C[X]=xt),xt.getGripSpace()},this.getHand=function(X){let xt=C[X];return xt===void 0&&(xt=new Es,C[X]=xt),xt.getHandSpace()};function K(X){let xt=E.indexOf(X.inputSource);if(xt===-1)return;let Tt=C[xt];Tt!==void 0&&(Tt.update(X.inputSource,X.frame,c||a),Tt.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ct);for(let X=0;X<C.length;X++){let xt=E[X];xt!==null&&(E[X]=null,C[X].disconnect(xt))}N=null,G=null,u.reset();for(let X in g)delete g[X];if(t.setRenderTarget(T),f=null,d=null,p=null,s=null,M=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(x.width,x.height,!1),k!==null){let X=k.camera;X.fov=k.fov,X.zoom=k.zoom,X.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ct),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(x),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,zt=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=y.stencil?di:ii,zt=y.stencil?ns:zn);let Bt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ge(d.textureWidth,d.textureHeight,{format:Gn,type:mn,depthTexture:new li(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ge(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function ct(X){for(let xt=0;xt<X.removed.length;xt++){let Tt=X.removed[xt],zt=E.indexOf(Tt);zt>=0&&(E[zt]=null,C[zt].disconnect(Tt))}for(let xt=0;xt<X.added.length;xt++){let Tt=X.added[xt],zt=E.indexOf(Tt);if(zt===-1){for(let Bt=0;Bt<C.length;Bt++)if(Bt>=E.length){E.push(Tt),zt=Bt;break}else if(E[Bt]===null){E[Bt]=Tt,zt=Bt;break}if(zt===-1)break}let _t=C[zt];_t&&_t.connect(Tt)}}function rt(X,xt){xt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(xt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let xt=X.near,Tt=X.far;u.texture!==null&&(u.depthNear>0&&(xt=u.depthNear),u.depthFar>0&&(Tt=u.depthFar)),Q.near=L.near=A.near=xt,Q.far=L.far=A.far=Tt,(N!==Q.near||G!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),N=Q.near,G=Q.far),Q.layers.mask=X.layers.mask|6,A.layers.mask=Q.layers.mask&-5,L.layers.mask=Q.layers.mask&-3;let zt=X.parent,_t=Q.cameras;rt(Q,zt);for(let Bt=0;Bt<_t.length;Bt++)rt(_t[Bt],zt);Q.projectionMatrix.copy(A.projectionMatrix),Q.projectionMatrixInverse.copy(A.projectionMatrixInverse),k===null&&X.isPerspectiveCamera&&(k={camera:X,fov:X.fov,zoom:X.zoom}),ft(X,Q,zt)};function ft(X,xt,Tt){Tt===null?X.matrix.copy(xt.matrixWorld):(X.matrix.copy(Tt.matrixWorld),X.matrix.invert(),X.matrix.multiply(xt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(xt.projectionMatrix),X.projectionMatrixInverse.copy(xt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Wi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(Q)},this.getCameraTexture=function(X){return g[X]};let dt=null;function st(X,xt){if(h=xt.getViewerPose(c||a),m=xt,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let zt=!1;Tt.length!==Q.cameras.length&&(Q.cameras.length=0,zt=!0);for(let qt=0;qt<Tt.length;qt++){let te=Tt[qt],ie=null;if(f!==null)ie=f.getViewport(te);else{let Ct=p.getViewSubImage(d,te);ie=Ct.viewport,qt===0&&(t.setRenderTargetTextures(M,Ct.colorTexture,Ct.depthStencilTexture),t.setRenderTarget(M))}let pt=B[qt];pt===void 0&&(pt=new an,pt.layers.enable(qt),pt.viewport=new De,B[qt]=pt),pt.matrix.fromArray(te.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(te.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ie.x,ie.y,ie.width,ie.height),qt===0&&(Q.matrix.copy(pt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),zt===!0&&Q.cameras.push(pt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let qt=p.getDepthInformation(Tt[0]);qt&&qt.isValid&&qt.texture&&u.init(qt,s.renderState)}if(_t&&_t.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let qt=0;qt<Tt.length;qt++){let te=Tt[qt].camera;if(te){let ie=g[te];ie||(ie=new Mr,g[te]=ie);let pt=p.getCameraImage(te);ie.sourceTexture=pt}}}}for(let Tt=0;Tt<C.length;Tt++){let zt=E[Tt],_t=C[Tt];zt!==null&&_t!==void 0&&_t.update(zt,xt,c||a)}dt&&dt(X,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),m=null}let ut=new zu;ut.setAnimationLoop(st),this.setAnimationLoop=function(X){dt=X},this.dispose=function(){}}},x_=new Me,Ju=new ce;Ju.set(-1,0,0,0,1,0,0,0,1);function v_(i,t){function e(u,g){u.matrixAutoUpdate===!0&&u.updateMatrix(),g.value.copy(u.matrix)}function n(u,g){g.color.getRGB(u.fogColor.value,Tc(i)),g.isFog?(u.fogNear.value=g.near,u.fogFar.value=g.far):g.isFogExp2&&(u.fogDensity.value=g.density)}function s(u,g,y,T,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(u,g):g.isMeshLambertMaterial?(r(u,g),g.envMap&&(u.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(u,g),p(u,g)):g.isMeshPhongMaterial?(r(u,g),h(u,g),g.envMap&&(u.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(u,g),d(u,g),g.isMeshPhysicalMaterial&&f(u,g,M)):g.isMeshMatcapMaterial?(r(u,g),m(u,g)):g.isMeshDepthMaterial?r(u,g):g.isMeshDistanceMaterial?(r(u,g),S(u,g)):g.isMeshNormalMaterial?r(u,g):g.isLineBasicMaterial?(a(u,g),g.isLineDashedMaterial&&o(u,g)):g.isPointsMaterial?l(u,g,y,T):g.isSpriteMaterial?c(u,g):g.isShadowMaterial?(u.color.value.copy(g.color),u.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(u,g){u.opacity.value=g.opacity,g.color&&u.diffuse.value.copy(g.color),g.emissive&&u.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(u.map.value=g.map,e(g.map,u.mapTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,e(g.alphaMap,u.alphaMapTransform)),g.bumpMap&&(u.bumpMap.value=g.bumpMap,e(g.bumpMap,u.bumpMapTransform),u.bumpScale.value=g.bumpScale,g.side===on&&(u.bumpScale.value*=-1)),g.normalMap&&(u.normalMap.value=g.normalMap,e(g.normalMap,u.normalMapTransform),u.normalScale.value.copy(g.normalScale),g.side===on&&u.normalScale.value.negate()),g.displacementMap&&(u.displacementMap.value=g.displacementMap,e(g.displacementMap,u.displacementMapTransform),u.displacementScale.value=g.displacementScale,u.displacementBias.value=g.displacementBias),g.emissiveMap&&(u.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,u.emissiveMapTransform)),g.specularMap&&(u.specularMap.value=g.specularMap,e(g.specularMap,u.specularMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest);let y=t.get(g),T=y.envMap,M=y.envMapRotation;T&&(u.envMap.value=T,u.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(Ju),u.reflectivity.value=g.reflectivity,u.ior.value=g.ior,u.refractionRatio.value=g.refractionRatio),g.lightMap&&(u.lightMap.value=g.lightMap,u.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,u.lightMapTransform)),g.aoMap&&(u.aoMap.value=g.aoMap,u.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,u.aoMapTransform))}function a(u,g){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,g.map&&(u.map.value=g.map,e(g.map,u.mapTransform))}function o(u,g){u.dashSize.value=g.dashSize,u.totalSize.value=g.dashSize+g.gapSize,u.scale.value=g.scale}function l(u,g,y,T){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,u.size.value=g.size*y,u.scale.value=T*.5,g.map&&(u.map.value=g.map,e(g.map,u.uvTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,e(g.alphaMap,u.alphaMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest)}function c(u,g){u.diffuse.value.copy(g.color),u.opacity.value=g.opacity,u.rotation.value=g.rotation,g.map&&(u.map.value=g.map,e(g.map,u.mapTransform)),g.alphaMap&&(u.alphaMap.value=g.alphaMap,e(g.alphaMap,u.alphaMapTransform)),g.alphaTest>0&&(u.alphaTest.value=g.alphaTest)}function h(u,g){u.specular.value.copy(g.specular),u.shininess.value=Math.max(g.shininess,1e-4)}function p(u,g){g.gradientMap&&(u.gradientMap.value=g.gradientMap)}function d(u,g){u.metalness.value=g.metalness,g.metalnessMap&&(u.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,u.metalnessMapTransform)),u.roughness.value=g.roughness,g.roughnessMap&&(u.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,u.roughnessMapTransform)),g.envMap&&(u.envMapIntensity.value=g.envMapIntensity)}function f(u,g,y){u.ior.value=g.ior,g.diffuseRoughness>0&&(u.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),g.sheen>0&&(u.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),u.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(u.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,u.sheenColorMapTransform)),g.sheenRoughnessMap&&(u.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,u.sheenRoughnessMapTransform))),g.clearcoat>0&&(u.clearcoat.value=g.clearcoat,u.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(u.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,u.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(u.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&u.clearcoatNormalScale.value.negate())),g.dispersion>0&&(u.dispersion.value=g.dispersion),g.retroreflectivity>0&&(u.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(u.iridescence.value=g.iridescence,u.iridescenceIOR.value=g.iridescenceIOR,u.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(u.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,u.iridescenceMapTransform)),g.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),g.transmission>0&&(u.transmission.value=g.transmission,u.transmissionSamplerMap.value=y.texture,u.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(u.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,u.transmissionMapTransform)),u.thickness.value=g.thickness,g.thicknessMap&&(u.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=g.attenuationDistance,u.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(u.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(u.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=g.specularIntensity,u.specularColor.value.copy(g.specularColor),g.specularColorMap&&(u.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,u.specularColorMapTransform)),g.specularIntensityMap&&(u.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,u.specularIntensityMapTransform))}function m(u,g){g.matcap&&(u.matcap.value=g.matcap)}function S(u,g){let y=t.get(g).light;u.referencePosition.value.setFromMatrixPosition(y.matrixWorld),u.nearDistance.value=y.shadow.camera.near,u.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y_(i,t,e,n){let s={},r={};function a(y,T){let M=T.program;n.uniformBlockBinding(y,M,s[y.id])}function o(y,T){let M=s[y.id];M===void 0&&(m(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",u));let C=T.program;n.updateUBOMapping(y,C);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let T=i.createBuffer(),M=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,M,C),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(y){let T=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,x=M.length;E<x;E++){let v=M[E];if(Array.isArray(v))for(let k=0,A=v.length;k<A;k++)h(v[k],E,k,C);else h(v,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,T,M,C){if(d(y,T,M,C)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let v=0;for(let k=0;k<x.length;k++){let A=x[k],L=S(A,!0);p(A,y.__data,v),v+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function p(y,T,M){typeof y=="number"||typeof y=="boolean"?T[M]=y:y.isMatrix3?(T[M]=y.elements[0],T[M+1]=y.elements[1],T[M+2]=y.elements[2],T[M+3]=0,T[M+4]=y.elements[3],T[M+5]=y.elements[4],T[M+6]=y.elements[5],T[M+7]=0,T[M+8]=y.elements[6],T[M+9]=y.elements[7],T[M+10]=y.elements[8],T[M+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-M),M):y.toArray(T,M)}function d(y,T,M,C){let E=y.value,x=T+"_"+M;if(Array.isArray(E)){C[x]===void 0&&(C[x]=[]);let v=C[x],k=!1;for(let A=0;A<E.length;A++)f(E[A],v,A)===!0&&(k=!0);return k}return f(E,C,x)}function f(y,T,M){if(T[M]===void 0)return typeof y=="number"||typeof y=="boolean"?T[M]=y:ArrayBuffer.isView(y)?T[M]=y.slice():T[M]=y.clone(),!0;{let C=T[M];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return T[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(y){let T=y.uniforms,M=0,C=16;for(let x=0,v=T.length;x<v;x++){let k=Array.isArray(T[x])?T[x]:[T[x]];for(let A=0,L=k.length;A<L;A++){let B=k[A],Q=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(T[x])||Array.isArray(B.value),G=M;for(let q=0,ct=Q.length;q<ct;q++){let rt=Q[q],ft=S(rt,N),dt=M%C,st=dt%ft.boundary,ut=dt+st;M+=st,ut!==0&&C-ut<ft.storage&&(M+=C-ut),q===0&&(G=M),M+=ft.storage}let K=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new K((M-G)/Float32Array.BYTES_PER_ELEMENT),B.__offset=G}}let E=M%C;return E>0&&(M+=C-E),y.__size=M,y.__cache={},this}function S(y,T){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function u(y){let T=y.target;T.removeEventListener("dispose",u),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}var M_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function S_(){return Yn===null&&(Yn=new gr(M_,16,16,Di,Xe),Yn.name="DFG_LUT",Yn.minFilter=dn,Yn.magFilter=dn,Yn.wrapS=Wn,Yn.wrapT=Wn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var il=class{constructor(t={}){let{canvas:e=au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let S=f,u=new Set([bo,So,Mo]),g=new Set([mn,zn,ks,ns,xo,vo]),y=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},C=null,E=null,x=[],v=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,B=null,Q=null,N=null,G=null;this._outputColorSpace=rn;let K=0,q=0,ct=null,rt=-1,ft=null,dt=new De,st=new De,ut=null,X=new $t(0),xt=0,Tt=e.width,zt=e.height,_t=1,Bt=null,he=null,qt=new De(0,0,Tt,zt),te=new De(0,0,Tt,zt),ie=!1,pt=new bi,Ct=new Ya,vt=!1,Ut=!1,It=new Me,ee=new O,Lt=new De,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function ae(){return ct===null?_t:1}let V=n;function fe(w,W){return e.getContext(w,W)}let Zt,de,Ft,xe,Kt,Vt,R,_,D,Y,H,ht,mt,Z,et,yt,F,nt,at,At,Rt,Dt,Xt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",kt,!1),V===null){let W="webgl2";if(V=fe(W,w),V===null)throw fe(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(w){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),le("WebGLRenderer: "+w.message),w}function Qt(){Zt=new D0(V),Zt.init(),Rt=new m_(V,Zt),de=new S0(V,Zt,t,Rt),Ft=new f_(V,Zt),de.reversedDepthBuffer&&d&&Ft.buffers.depth.setReversed(!0),Q=V.createFramebuffer(),N=V.createFramebuffer(),G=V.createFramebuffer(),xe=new F0(V),Kt=new Qg,Vt=new p_(V,Zt,Ft,Kt,de,Rt,xe),R=new L0(A),_=new Bf(V),Dt=new y0(V,_),D=new N0(V,_,xe,Dt),Y=new B0(V,D,_,Dt,xe),nt=new O0(V,de,Vt),et=new b0(Kt),H=new jg(A,R,Zt,de,Dt,et),ht=new v_(A,Kt),mt=new e_,Z=new o_(Zt),F=new v0(A,R,Ft,Y,m,l),yt=new d_(A,Y,de),Xt=new y_(V,xe,de,Ft),at=new M0(V,Zt,xe),At=new U0(V,Zt,xe),xe.programs=H.programs,A.capabilities=de,A.extensions=Zt,A.properties=Kt,A.renderLists=mt,A.shadowMap=yt,A.state=Ft,A.info=xe}S!==mn&&(k=new z0(S,e.width,e.height,o,s,r));let Pt=new Bc(A,V);this.xr=Pt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let w=Zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(Tt,zt,!1))},this.getSize=function(w){return w.set(Tt,zt)},this.setSize=function(w,W,ot=!0){if(Pt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=w,zt=W,e.width=Math.floor(w*_t),e.height=Math.floor(W*_t),ot===!0&&(e.style.width=w+"px",e.style.height=W+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(Tt*_t,zt*_t).floor()},this.setDrawingBufferSize=function(w,W,ot){Tt=w,zt=W,_t=ot,e.width=Math.floor(w*ot),e.height=Math.floor(W*ot),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(S===mn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(dt)},this.getViewport=function(w){return w.copy(qt)},this.setViewport=function(w,W,ot,tt){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,W,ot,tt),Ft.viewport(dt.copy(qt).multiplyScalar(ae()).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,W,ot,tt){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,W,ot,tt),Ft.scissor(st.copy(te).multiplyScalar(ae()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){Ft.setScissorTest(ie=w)},this.setOpaqueSort=function(w){Bt=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,ot=!0){let tt=0;if(w){let it=!1;if(ct!==null){let b=ct.texture.format;it=u.has(b)}if(it){let b=ct.texture.type,P=g.has(b),I=F.getClearColor(),U=F.getClearAlpha(),z=I.r,lt=I.g,gt=I.b;P?(y[0]=z,y[1]=lt,y[2]=gt,y[3]=U,V.clearBufferuiv(V.COLOR,0,y)):(T[0]=z,T[1]=lt,T[2]=gt,T[3]=U,V.clearBufferiv(V.COLOR,0,T))}else tt|=V.COLOR_BUFFER_BIT}W&&(tt|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(tt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&V.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),F.dispose(),mt.dispose(),Z.dispose(),Vt.dispose(),Kt.dispose(),R.dispose(),Y.dispose(),D.dispose(),Dt.dispose(),Xt.dispose(),H.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Ot),Pt.removeEventListener("sessionend",_e),Te.stop()};function Jt(w){w.preventDefault(),yc("WebGLRenderer: Context Lost."),L=!0}function ue(){yc("WebGLRenderer: Context Restored."),L=!1;let w=xe.autoReset,W=yt.enabled,ot=yt.autoUpdate,tt=yt.needsUpdate,it=yt.type;Qt(),xe.autoReset=w,yt.enabled=W,yt.autoUpdate=ot,yt.needsUpdate=tt,yt.type=it}function kt(w){le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Se(w){let W=w.target;W.removeEventListener("dispose",Se),Be(W)}function Be(w){Nn(w),Kt.remove(w)}function Nn(w){let W=Kt.get(w).programs;W!==void 0&&(W.forEach(function(ot){H.releaseProgram(ot)}),w.isShaderMaterial&&H.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ot,tt,it,b){W===null&&(W=jt);let P=it.isMesh&&it.matrixWorld.determinantAffine()<0,I=sn(w,W,ot,tt,it);Ft.setMaterial(tt,P);let U=ot.index,z=1;if(tt.wireframe===!0){if(U=D.getWireframeAttribute(ot),U===void 0)return;z=2}let lt=ot.drawRange,gt=ot.attributes.position,j=lt.start*z,$=(lt.start+lt.count)*z;b!==null&&(j=Math.max(j,b.start*z),$=Math.min($,(b.start+b.count)*z)),U!==null?(j=Math.max(j,0),$=Math.min($,U.count)):gt!=null&&(j=Math.max(j,0),$=Math.min($,gt.count));let bt=$-j;if(bt<0||bt===1/0)return;Dt.setup(it,tt,I,ot,U);let Nt,St=at;if(U!==null&&(Nt=_.get(U),St=At,St.setIndex(Nt)),it.isMesh)tt.wireframe===!0?(Ft.setLineWidth(tt.wireframeLinewidth*ae()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(it.isLine){let Ht=tt.linewidth;Ht===void 0&&(Ht=1),Ft.setLineWidth(Ht*ae()),it.isLineSegments?St.setMode(V.LINES):it.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else it.isPoints?St.setMode(V.POINTS):it.isSprite&&St.setMode(V.TRIANGLES);if(it.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))St.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{let Ht=it._multiDrawStarts,Et=it._multiDrawCounts,ne=it._multiDrawCount,Yt=U?_.get(U).bytesPerElement:1,be=Kt.get(tt).currentProgram.getUniforms();for(let Ee=0;Ee<ne;Ee++)be.setValue(V,"_gl_DrawID",Ee),St.render(Ht[Ee]/Yt,Et[Ee])}else if(it.isInstancedMesh)St.renderInstances(j,bt,it.count);else if(ot.isInstancedBufferGeometry){let Ht=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Et=Math.min(ot.instanceCount,Ht);St.renderInstances(j,bt,Et)}else St.render(j,bt)};function Fi(w,W,ot,tt){B!==null&&w.isNodeMaterial&&B.setObject(tt,w),vt===!0&&et.setState(w,ot,!1),w.transparent===!0&&w.side===tn&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,Un(w,W,tt),w.side=Li,w.needsUpdate=!0,Un(w,W,tt),w.side=tn):Un(w,W,tt)}this.compile=function(w,W,ot=null){ot===null&&(ot=w),B!==null&&B.renderStart(w,W,ot),E=Z.get(ot),E.init(W),v.push(E),ot.traverseVisible(function(it){it.isLight&&it.layers.test(W.layers)&&(E.pushLight(it),it.castShadow&&E.pushShadow(it))}),w!==ot&&w.traverseVisible(function(it){it.isLight&&it.layers.test(W.layers)&&(E.pushLight(it),it.castShadow&&E.pushShadow(it))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),Ut=this.localClippingEnabled,vt=et.init(this.clippingPlanes,Ut),vt===!0&&et.setGlobalState(this.clippingPlanes,W),B!==null&&yt.render(E.state.shadowsArray,ot,W);let tt=new Set;return w.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;let b=it.material;if(b)if(Array.isArray(b))for(let P=0;P<b.length;P++){let I=b[P];Fi(I,ot,W,it),tt.add(I)}else Fi(b,ot,W,it),tt.add(b)}),E=v.pop(),B!==null&&B.renderEnd(),tt},this.compileAsync=function(w,W,ot=null){let tt=this.compile(w,W,ot);return new Promise(it=>{function b(){if(tt.forEach(function(P){let U=Kt.get(P).currentProgram;(U===void 0||U.isReady())&&tt.delete(P)}),tt.size===0){it(w);return}setTimeout(b,10)}Zt.get("KHR_parallel_shader_compile")!==null?b():setTimeout(b,10)})};let J=null;function wt(w){J&&J(w)}function Ot(){Te.stop()}function _e(){Te.start()}let Te=new zu;Te.setAnimationLoop(wt),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(w){J=w,Pt.setAnimationLoop(w),w===null?Te.stop():Te.start()},Pt.addEventListener("sessionstart",Ot),Pt.addEventListener("sessionend",_e),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(w,W);let ot=Pt.enabled===!0&&Pt.isPresenting===!0,tt=k!==null&&(ct===null||ot)&&k.begin(A,ct);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(W),W=Pt.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,W,ct),E=Z.get(w,v.length),E.init(W),E.state.textureUnits=Vt.getTextureUnits(),v.push(E),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Ct.setFromArrayCamera(W):pt.setFromProjectionMatrix(It,Rn,W.reversedDepth),Ut=this.localClippingEnabled,vt=et.init(this.clippingPlanes,Ut),C=mt.get(w,x.length),C.init(),x.push(C),this.info.render.frame++,Pt.enabled===!0&&Pt.isPresenting===!0){let P=A.xr.getDepthSensingMesh();P!==null&&en(P,W,-1/0,A.sortObjects)}en(w,W,0,A.sortObjects),C.finish(),B!==null&&B.updateLights(E.state.lightsArray),A.sortObjects===!0&&C.sort(Bt,he),Gt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Gt&&F.addToRenderList(C,w),this.info.autoReset===!0&&this.info.reset(),vt===!0&&et.beginShadows();let it=E.state.shadowsArray;if(yt.render(it,w,W),vt===!0&&et.endShadows(),(tt&&k.hasRenderPass())===!1){let P=C.opaque,I=C.transmissive;if(E.setupLights(),W.isArrayCamera){let U=W.cameras;if(I.length>0)for(let z=0,lt=U.length;z<lt;z++){let gt=U[z];nn(P,I,w,gt)}Gt&&F.render(w);for(let z=0,lt=U.length;z<lt;z++){let gt=U[z];An(C,w,gt,gt.viewport)}}else I.length>0&&nn(P,I,w,W),Gt&&F.render(w),An(C,w,W)}ct!==null&&q===0&&(Vt.updateMultisampleRenderTarget(ct),Vt.updateRenderTargetMipmap(ct)),tt&&k.end(A),w.isScene===!0&&w.onAfterRender(A,w,W),Dt.resetDefaultState(),rt=-1,ft=null,v.pop(),v.length>0?(E=v[v.length-1],Vt.setTextureUnits(E.state.textureUnits),vt===!0&&et.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,B!==null&&B.renderEnd()};function en(w,W,ot,tt){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let P=W.isArrayCamera?Ct:pt;if(!w.frustumCulled||w.intersectsFrustum(P)){tt&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);let I=Y.update(w),U=w.material;U.visible&&C.push(w,I,U,ot,Lt.z,null,W)}}else if(w.isMesh||w.isLine||w.isPoints){let P=W.isArrayCamera?Ct:pt;if(!w.frustumCulled||w.intersectsFrustum(P)){let I=Y.update(w),U=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(I.boundingSphere===null&&I.computeBoundingSphere(),Lt.copy(I.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(U)){let z=I.groups;for(let lt=0,gt=z.length;lt<gt;lt++){let j=z[lt],$=U[j.materialIndex];$&&$.visible&&C.push(w,I,$,ot,Lt.z,j,W)}}else U.visible&&C.push(w,I,U,ot,Lt.z,null,W)}}}let b=w.children;for(let P=0,I=b.length;P<I;P++)en(b[P],W,ot,tt)}function An(w,W,ot,tt){let{opaque:it,transmissive:b,transparent:P}=w;E.setupLightsView(ot),vt===!0&&et.setGlobalState(A.clippingPlanes,ot),tt&&Ft.viewport(dt.copy(tt)),it.length>0&&Ce(it,W,ot),b.length>0&&Ce(b,W,ot),P.length>0&&Ce(P,W,ot),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function nn(w,W,ot,tt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[tt.id]===void 0){let j=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[tt.id]=new Ge(1,1,{generateMipmaps:!0,type:j?Xe:mn,minFilter:ui,samples:Math.max(4,de.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}let b=E.state.transmissionRenderTarget[tt.id],P=tt.viewport||dt;b.setSize(P.z*A.transmissionResolutionScale,P.w*A.transmissionResolutionScale);let I=A.getRenderTarget(),U=A.getActiveCubeFace(),z=A.getActiveMipmapLevel();A.setRenderTarget(b),A.getClearColor(X),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),Gt&&F.render(ot);let lt=A.toneMapping;A.toneMapping=qn;let gt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),E.setupLightsView(tt),vt===!0&&et.setGlobalState(A.clippingPlanes,tt),Ce(w,ot,tt),Vt.updateMultisampleRenderTarget(b),Vt.updateRenderTargetMipmap(b),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let $=0,bt=W.length;$<bt;$++){let Nt=W[$],{object:St,geometry:Ht,material:Et,group:ne}=Nt;if(Et.side===tn&&St.layers.test(tt.layers)){let Yt=Et.side;Et.side=on,Et.needsUpdate=!0,Oi(St,ot,tt,Ht,Et,ne),Et.side=Yt,Et.needsUpdate=!0,j=!0}}j===!0&&(Vt.updateMultisampleRenderTarget(b),Vt.updateRenderTargetMipmap(b))}A.setRenderTarget(I,U,z),A.setClearColor(X,xt),gt!==void 0&&(tt.viewport=gt),A.toneMapping=lt}function Ce(w,W,ot){let tt=W.isScene===!0?W.overrideMaterial:null;for(let it=0,b=w.length;it<b;it++){let P=w[it],{object:I,geometry:U,group:z}=P,lt=P.material;lt.allowOverride===!0&&tt!==null&&(lt=tt),I.layers.test(ot.layers)&&Oi(I,W,ot,U,lt,z)}}function Oi(w,W,ot,tt,it,b){B!==null&&it.isNodeMaterial&&B.setObject(w,it),w.onBeforeRender(A,W,ot,tt,it,b),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),it.onBeforeRender(A,W,ot,tt,w,b),it.transparent===!0&&it.side===tn&&it.forceSinglePass===!1?(it.side=on,it.needsUpdate=!0,A.renderBufferDirect(ot,W,tt,it,w,b),it.side=Li,it.needsUpdate=!0,A.renderBufferDirect(ot,W,tt,it,w,b),it.side=tn):A.renderBufferDirect(ot,W,tt,it,w,b),w.onAfterRender(A,W,ot,tt,it,b)}function Ys(w){let W=0;for(let ot of w)ot.texture!==null&&W++;return W}function Un(w,W,ot){W.isScene!==!0&&(W=jt);let tt=Kt.get(w),it=E.state.lights,b=E.state.shadowsArray,P=it.state.version,I=H.getParameters(w,it.state,b,W,ot,E.state.lightProbeGridArray),U=H.getProgramCacheKey(I),z=tt.programs;tt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,tt.fog=W.fog;let lt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;tt.envMap=R.get(w.envMap||tt.environment,lt),tt.envMapRotation=tt.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,z===void 0&&(w.addEventListener("dispose",Se),z=new Map,tt.programs=z,tt.programVariants=new Map);let gt=z.get(U);if(gt!==void 0){if(tt.currentProgram===gt&&tt.lightsStateVersion===P)return Js(w,I),gt}else I.uniforms=H.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,ot,I),w.onBeforeCompile(I,A),gt=H.acquireProgram(I,U),z.set(U,gt),tt.uniforms=I.uniforms;let j=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(j.clippingPlanes=et.uniform),Js(w,I),tt.needsLights=xl(w),tt.lightsStateVersion=P,tt.needsLights&&(j.ambientLightColor.value=it.state.ambient,j.lightProbe.value=it.state.probe,j.sunLights.value=it.state.sun,j.sunLightShadows.value=it.state.sunShadow,j.directionalLights.value=it.state.directional,j.directionalLightShadows.value=it.state.directionalShadow,j.spotLights.value=it.state.spot,j.spotLightShadows.value=it.state.spotShadow,j.rectAreaLights.value=it.state.rectArea,j.ltc_1.value=it.state.rectAreaLTC1,j.ltc_2.value=it.state.rectAreaLTC2,j.pointLights.value=it.state.point,j.pointLightShadows.value=it.state.pointShadow,j.hemisphereLights.value=it.state.hemi,j.sunShadowMatrix.value=it.state.sunShadowMatrix,j.sunShadowCascade.value=it.state.sunShadowCascade,j.directionalShadowMatrix.value=it.state.directionalShadowMatrix,j.spotLightMatrix.value=it.state.spotLightMatrix,j.spotLightMap.value=it.state.spotLightMap,j.pointShadowMatrix.value=it.state.pointShadowMatrix),tt.numLightProbeGrids=Ys(E.state.lightProbeGridArray),tt.currentProgram=gt,tt.uniformsList=null,gt}function Zs(w,W,ot,tt,it){let b=Kt.get(w),P=b.currentProgram.id+","+tt+","+it,I=b.programVariants.get(P);return I===void 0?(I=Un(w,W,ot),b.programVariants.set(P,I)):(b.currentProgram=I,b.uniformsList=null,b.outputColorSpace=tt,b.toneMapping=it),I}function Ks(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=zs.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Js(w,W){let ot=Kt.get(w);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function sn(w,W,ot,tt,it){W.isScene!==!0&&(W=jt),Vt.resetTextureUnits();let b=W.fog,P=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?W.environment:null,I=ct===null?A.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ve.workingColorSpace,U=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,z=R.get(tt.envMap||P,U),lt=tt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,gt=!!ot.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),j=!!ot.morphAttributes.position,$=!!ot.morphAttributes.normal,bt=!!ot.morphAttributes.color,Nt=qn;tt.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Nt=A.toneMapping);let St=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ht=St!==void 0?St.length:0,Et=Kt.get(tt),ne=E.state.lights;if(vt===!0&&(Ut===!0||w!==ft)){let Le=w===ft&&tt.id===rt;et.setState(tt,w,Le)}let Yt=!1,be=!1;tt.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==ne.state.version||it.isBatchedMesh&&Et.batching===!1||!it.isBatchedMesh&&Et.batching===!0||it.isBatchedMesh&&Et.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Et.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Et.instancing===!1||!it.isInstancedMesh&&Et.instancing===!0||it.isSkinnedMesh&&Et.skinning===!1||!it.isSkinnedMesh&&Et.skinning===!0||it.isInstancedMesh&&Et.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Et.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Et.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Et.instancingMorph===!1&&it.morphTexture!==null||Et.envMap!==z||tt.fog===!0&&Et.fog!==b||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==lt||Et.vertexTangents!==gt||Et.morphTargets!==j||Et.morphNormals!==$||Et.morphColors!==bt||Et.morphTargetsCount!==Ht||Et.numLightProbeGrids!==Ys(E.state.lightProbeGridArray)?Yt=!0:(Et.outputColorSpace!==I||Et.toneMapping!==Nt)&&(be=!0):(Yt=!0,Et.__version=tt.version);let Ee=Et.currentProgram;(Yt===!0||be===!0)&&(Ee=be===!0?Zs(tt,W,it,I,Nt):Un(tt,W,it),B&&tt.isNodeMaterial&&B.onUpdateProgram(tt,Ee,Et));let we=!1,ke=!1,pe=!1,se=Ee.getUniforms(),Ie=Et.uniforms;if(Ft.useProgram(Ee.program)&&(we=!0,ke=!0,pe=!0),tt.id!==rt&&(rt=tt.id,ke=!0),we||ft!==w){Ft.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),se.setValue(V,"projectionMatrix",w.projectionMatrix),se.setValue(V,"viewMatrix",w.matrixWorldInverse);let Ke=se.map.cameraPosition;Ke!==void 0&&Ke.setValue(V,ee.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&se.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&se.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),ft!==w&&(ft=w,ke=!0,pe=!0)}if(Et.needsLights&&(ne.state.sunShadowMap.length>0&&se.setValue(V,"sunShadowMap",ne.state.sunShadowMap,Vt),ne.state.directionalShadowMap.length>0&&se.setValue(V,"directionalShadowMap",ne.state.directionalShadowMap,Vt),ne.state.spotShadowMap.length>0&&se.setValue(V,"spotShadowMap",ne.state.spotShadowMap,Vt),ne.state.pointShadowMap.length>0&&se.setValue(V,"pointShadowMap",ne.state.pointShadowMap,Vt)),it.isSkinnedMesh){se.setOptional(V,it,"bindMatrix"),se.setOptional(V,it,"bindMatrixInverse");let Le=it.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),se.setValue(V,"boneTexture",Le.boneTexture,Vt))}it.isBatchedMesh&&(se.setOptional(V,it,"batchingTexture"),se.setValue(V,"batchingTexture",it._matricesTexture,Vt),se.setOptional(V,it,"batchingIdTexture"),se.setValue(V,"batchingIdTexture",it._indirectTexture,Vt),se.setOptional(V,it,"batchingColorTexture"),it._colorsTexture!==null&&se.setValue(V,"batchingColorTexture",it._colorsTexture,Vt));let xn=ot.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&nt.update(it,ot,Ee),(ke||Et.receiveShadow!==it.receiveShadow)&&(Et.receiveShadow=it.receiveShadow,se.setValue(V,"receiveShadow",it.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&W.environment!==null&&(Ie.envMapIntensity.value=W.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=S_()),ke){if(se.setValue(V,"toneMappingExposure",A.toneMappingExposure),Et.needsLights&&_l(Ie,pe),b&&tt.fog===!0&&ht.refreshFogUniforms(Ie,b),ht.refreshMaterialUniforms(Ie,tt,_t,zt,E.state.transmissionRenderTarget[w.id]),Et.needsLights&&Et.numLightProbeGrids>0){let Le=M,Ke=0;for(let Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(Le.textures[Ke]=Jn.texture,Le.min[Ke]=Jn.boundingBox.min,Le.max[Ke]=Jn.boundingBox.max,Le.resolution[Ke]=Jn.resolution,Ke++);for(let Jn in Le)Le[Jn].length=Ke;Ie.probesSH.value=Le.textures,Ie.probesMin.value=Le.min,Ie.probesMax.value=Le.max,Ie.probesResolution.value=Le.resolution}zs.upload(V,Ks(Et),Ie,Vt)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(zs.upload(V,Ks(Et),Ie,Vt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&se.setValue(V,"center",it.center),se.setValue(V,"modelViewMatrix",it.modelViewMatrix),se.setValue(V,"normalMatrix",it.normalMatrix),se.setValue(V,"modelMatrix",it.matrixWorld),tt.uniformsGroups!==void 0){let Le=tt.uniformsGroups;for(let Ke=0,Jn=Le.length;Ke<Jn;Ke++){let Wc=Le[Ke];Xt.update(Wc,Ee),Xt.bind(Wc,Ee)}}return Ee}function _l(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.sunLights.needsUpdate=W,w.sunLightShadows.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function xl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(w,W,ot){let tt=Kt.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Kt.get(w.texture).__webglTexture=W,Kt.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:ot,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){let ot=Kt.get(w);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,ot=0){ct=w,K=W,q=ot;let tt=null,it=!1,b=!1;if(w){let I=Kt.get(w);if(I.__useDefaultFramebuffer!==void 0){Ft.bindFramebuffer(V.FRAMEBUFFER,I.__webglFramebuffer),dt.copy(w.viewport),st.copy(w.scissor),ut=w.scissorTest,Ft.viewport(dt),Ft.scissor(st),Ft.setScissorTest(ut),rt=-1;return}else if(I.__webglFramebuffer===void 0)Vt.setupRenderTarget(w);else if(I.__hasExternalTextures)Vt.rebindTextures(w,Kt.get(w.texture).__webglTexture,Kt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let lt=w.depthTexture;if(I.__boundDepthTexture!==lt){if(lt!==null&&Kt.has(lt)&&(w.width!==lt.image.width||w.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(w)}}let U=w.texture;(U.isData3DTexture||U.isDataArrayTexture||U.isCompressedArrayTexture)&&(b=!0);let z=Kt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(z[W])?tt=z[W][ot]:tt=z[W],it=!0):w.samples>0&&Vt.useMultisampledRTT(w)===!1?tt=Kt.get(w).__webglMultisampledFramebuffer:Array.isArray(z)?tt=z[ot]:tt=z,dt.copy(w.viewport),st.copy(w.scissor),ut=w.scissorTest}else dt.copy(qt).multiplyScalar(_t).floor(),st.copy(te).multiplyScalar(_t).floor(),ut=ie;if(ot!==0&&(tt=Q),Ft.bindFramebuffer(V.FRAMEBUFFER,tt)&&Ft.drawBuffers(w,tt),Ft.viewport(dt),Ft.scissor(st),Ft.setScissorTest(ut),it){let I=Kt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,I.__webglTexture,ot)}else if(b){let I=W;for(let U=0;U<w.textures.length;U++){let z=Kt.get(w.textures[U]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+U,z.__webglTexture,ot,I)}}else if(w!==null&&ot!==0){let I=Kt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,I.__webglTexture,ot)}rt=-1};function oa(w){let W=Kt.get(w);return(W.__readFormat!==w.format||W.__readType!==w.type)&&(W.__readFormat=w.format,W.__readType=w.type,W.__formatReadable=de.textureFormatReadable(w.format),W.__typeReadable=de.textureTypeReadable(w.type)),W}this.readRenderTargetPixels=function(w,W,ot,tt,it,b,P,I=0){if(!(w&&w.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let U=Kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&P!==void 0&&(U=U[P],Array.isArray(U)&&(U=U[0])),U){Ft.bindFramebuffer(V.FRAMEBUFFER,U);try{let z=w.textures[I],lt=z.format,gt=z.type;w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+I);let j=oa(z);if(j.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(j.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-tt&&ot>=0&&ot<=w.height-it&&V.readPixels(W,ot,tt,it,Rt.convert(lt),Rt.convert(gt),b)}finally{let z=ct!==null?Kt.get(ct).__webglFramebuffer:null;Ft.bindFramebuffer(V.FRAMEBUFFER,z)}}},this.readRenderTargetPixelsAsync=async function(w,W,ot,tt,it,b,P,I=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let U=Kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&P!==void 0&&(U=U[P],Array.isArray(U)&&(U=U[0])),U)if(W>=0&&W<=w.width-tt&&ot>=0&&ot<=w.height-it){Ft.bindFramebuffer(V.FRAMEBUFFER,U);let z=w.textures[I],lt=z.format,gt=z.type;w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+I);let j=oa(z);if(j.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(j.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$),V.bufferData(V.PIXEL_PACK_BUFFER,b.byteLength,V.STREAM_READ),V.readPixels(W,ot,tt,it,Rt.convert(lt),Rt.convert(gt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let bt=ct!==null?Kt.get(ct).__webglFramebuffer:null;Ft.bindFramebuffer(V.FRAMEBUFFER,bt);let Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await lu(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,b),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer($),V.deleteSync(Nt),b}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,ot=0){let tt=Math.pow(2,-ot),it=Math.floor(w.image.width*tt),b=Math.floor(w.image.height*tt),P=W!==null?W.x:0,I=W!==null?W.y:0;Vt.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,P,I,it,b),Ft.unbindTexture()},this.copyTextureToTexture=function(w,W,ot=null,tt=null,it=0,b=0){let P,I,U,z,lt,gt,j,$,bt,Nt=w.isCompressedTexture?w.mipmaps[b]:w.image;if(ot!==null)P=ot.max.x-ot.min.x,I=ot.max.y-ot.min.y,U=ot.isBox3?ot.max.z-ot.min.z:1,z=ot.min.x,lt=ot.min.y,gt=ot.isBox3?ot.min.z:0;else{let se=Math.pow(2,-it);P=Math.floor(Nt.width*se),I=Math.floor(Nt.height*se),w.isDataArrayTexture?U=Nt.depth:w.isData3DTexture?U=Math.floor(Nt.depth*se):U=1,z=0,lt=0,gt=0}tt!==null?(j=tt.x,$=tt.y,bt=tt.z):(j=0,$=0,bt=0);let St=Rt.convert(W.format),Ht=Rt.convert(W.type),Et;W.isData3DTexture?(Vt.setTexture3D(W,0),Et=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Vt.setTexture2DArray(W,0),Et=V.TEXTURE_2D_ARRAY):(Vt.setTexture2D(W,0),Et=V.TEXTURE_2D),Ft.activeTexture(V.TEXTURE0),Ft.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),Ft.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Ft.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);let ne=Ft.getParameter(V.UNPACK_ROW_LENGTH),Yt=Ft.getParameter(V.UNPACK_IMAGE_HEIGHT),be=Ft.getParameter(V.UNPACK_SKIP_PIXELS),Ee=Ft.getParameter(V.UNPACK_SKIP_ROWS),we=Ft.getParameter(V.UNPACK_SKIP_IMAGES);Ft.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),Ft.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),Ft.pixelStorei(V.UNPACK_SKIP_PIXELS,z),Ft.pixelStorei(V.UNPACK_SKIP_ROWS,lt),Ft.pixelStorei(V.UNPACK_SKIP_IMAGES,gt);let ke=w.isDataArrayTexture||w.isData3DTexture,pe=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){let se=Kt.get(w),Ie=Kt.get(W),xn=Kt.get(se.__renderTarget),Le=Kt.get(Ie.__renderTarget);Ft.bindFramebuffer(V.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ft.bindFramebuffer(V.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ke=0;Ke<U;Ke++)ke&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Kt.get(w).__webglTexture,it,gt+Ke),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Kt.get(W).__webglTexture,b,bt+Ke)),V.blitFramebuffer(z,lt,z+P,lt+I,j,$,j+P,$+I,V.DEPTH_BUFFER_BIT,V.NEAREST);Ft.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(it!==0||w.isRenderTargetTexture||Kt.has(w)){let se=Kt.get(w),Ie=Kt.get(W);Ft.bindFramebuffer(V.READ_FRAMEBUFFER,N),Ft.bindFramebuffer(V.DRAW_FRAMEBUFFER,G);for(let xn=0;xn<U;xn++)ke?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,se.__webglTexture,it,gt+xn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,se.__webglTexture,it),pe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ie.__webglTexture,b,bt+xn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ie.__webglTexture,b),it!==0?V.blitFramebuffer(z,lt,z+P,lt+I,j,$,j+P,$+I,V.COLOR_BUFFER_BIT,V.NEAREST):pe?V.copyTexSubImage3D(Et,b,j,$,bt+xn,z,lt,P,I):V.copyTexSubImage2D(Et,b,j,$,z,lt,P,I);Ft.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else pe?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Et,b,j,$,bt,P,I,U,St,Ht,Nt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Et,b,j,$,bt,P,I,U,St,Nt.data):V.texSubImage3D(Et,b,j,$,bt,P,I,U,St,Ht,Nt):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,b,j,$,P,I,St,Ht,Nt.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,b,j,$,Nt.width,Nt.height,St,Nt.data):V.texSubImage2D(V.TEXTURE_2D,b,j,$,P,I,St,Ht,Nt);Ft.pixelStorei(V.UNPACK_ROW_LENGTH,ne),Ft.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Yt),Ft.pixelStorei(V.UNPACK_SKIP_PIXELS,be),Ft.pixelStorei(V.UNPACK_SKIP_ROWS,Ee),Ft.pixelStorei(V.UNPACK_SKIP_IMAGES,we),b===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&V.generateMipmap(Et),Ft.unbindTexture()},this.initRenderTarget=function(w){Kt.get(w).__webglFramebuffer===void 0&&Vt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Vt.setTextureCube(w,0):w.isData3DTexture?Vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Vt.setTexture2DArray(w,0):Vt.setTexture2D(w,0),Ft.unbindTexture()},this.resetState=function(){K=0,q=0,ct=null,Ft.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var ju={type:"change"},zc={type:"start"},td={type:"end"},al=new Si,Qu=new un,b_=Math.cos(70*fi.DEG2RAD),Ze=new O,gn=2*Math.PI,Pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kc=1e-6,ol=class extends zr{constructor(t,e=null){super(t,e),this.state=Pe.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Qe,this._lastTargetPosition=new O,this._quat=new Qe().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Us,this._sphericalDelta=new Us,this._scale=1,this._panOffset=new O,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new O,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T_.bind(this),this._onPointerDown=w_.bind(this),this._onPointerUp=E_.bind(this),this._onContextMenu=D_.bind(this),this._onMouseWheel=R_.bind(this),this._onKeyDown=P_.bind(this),this._onTouchStart=I_.bind(this),this._onTouchMove=L_.bind(this),this._onMouseDown=A_.bind(this),this._onMouseMove=C_.bind(this),this._interceptControlDown=N_.bind(this),this._interceptControlUp=U_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Pe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ju),this.update(),this.state=Pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ze.copy(e).sub(this.target),Ze.applyQuaternion(this._quat),this._spherical.setFromVector3(Ze),this.autoRotate&&this.state===Pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ze.setFromSpherical(this._spherical),Ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ze.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(al.origin.copy(this.object.position),al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(al.direction))<b_?this.object.lookAt(this.target):(Qu.setFromNormalAndCoplanarPoint(this.object.up,this.target),al.intersectPlane(Qu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kc||this._lastTargetPosition.distanceToSquared(this.target)>kc?(this.dispatchEvent(ju),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ze.setFromMatrixColumn(e,0),Ze.multiplyScalar(-t),this._panOffset.add(Ze)}_panUp(t,e){this.screenSpacePanning===!0?Ze.setFromMatrixColumn(e,1):(Ze.setFromMatrixColumn(e,0),Ze.crossVectors(this.object.up,Ze)),Ze.multiplyScalar(t),this._panOffset.add(Ze)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ze.copy(s).sub(this.target);let r=Ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function w_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function T_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function E_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(td),this.state=Pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function A_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Pe.DOLLY;break;case Pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pe.ROTATE}break;case Pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Pe.PAN}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(zc)}function C_(i){switch(this.state){case Pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function R_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Pe.NONE||(i.preventDefault(),this.dispatchEvent(zc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(td))}function P_(i){this.enabled!==!1&&this._handleKeyDown(i)}function I_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1){this.state=Pe.NONE;break}this._handleTouchStartRotate(i),this.state=Pe.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1){this.state=Pe.NONE;break}this._handleTouchStartPan(i),this.state=Pe.TOUCH_PAN;break;default:this.state=Pe.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Pe.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Pe.TOUCH_DOLLY_ROTATE;break;default:this.state=Pe.NONE}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(zc)}function L_(i){switch(this._trackPointer(i),this.state){case Pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Pe.NONE}}function D_(i){this.enabled!==!1&&i.preventDefault()}function N_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Hs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},F_=new Ji(-1,1,1,-1,0,1),Gc=class extends Oe{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}},O_=new Gc,Ni=class{constructor(t){this._mesh=new re(O_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,F_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ll=class extends Tn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wn.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ni(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sa=class extends Tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},cl=class extends Tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var hl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Mt);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ll(Hs),this.copyPass.material.blending=hi,this.timer=new Br}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}sa!==void 0&&(a instanceof sa?n=!0:a instanceof cl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ul=class extends Tn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $t}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ed={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ws=class i extends Tn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new $t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,a,{type:Xe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Ge(r,a,{type:Xe,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new Ge(r,a,{type:Xe,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=ed;this.highPassUniforms=wn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Mt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wn.clone(Hs.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:Hs.vertexShader,fragmentShader:Hs.fragmentShader,premultipliedAlpha:!0,blending:ji,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $t,this._oldClearAlpha=1,this._basic=new In,this._fsQuad=new Ni(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ze({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ws.BlurDirectionX=new Mt(1,0);Ws.BlurDirectionY=new Mt(0,1);var ra={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var dl=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=wn.clone(ra.uniforms),this.material=new Is({name:ra.name,uniforms:this.uniforms,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader}),this._fsQuad=new Ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ve.getTransfer(this._outputColorSpace)===Re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vc={volta:{id:"volta",brand:"PKM Motors",name:"Volta",trim:"Double Cab 2.8D 4x4",tagline:"Built for laterite, loads and long weekends.",chips:["2.8L turbo-diesel","150 kW \xB7 500 Nm","6-speed auto","Shift-on-the-fly 4WD"],width:1.88,wheelbase:3.08,front:2.52,rear:-2.8,track:1.58,tyreR:.392,tyreW:.27,archR:.49,archY:.42,sill:.47,belt:1.18,roof:1.84,mass:2150,power:150,torque:500,idle:780,redline:4e3,shiftUp:3300,shiftDown:1500,frontWeight:.56,cgHeight:.71,steeringLock:.6,driveFront:.38,springRate:49,springDamping:8,bodyRoll:.0078,gears:[4.71,2.84,1.79,1.39,1,.78],finalDrive:3.73,top:49,engine:"diesel",horn:[404,508],paints:[{name:"Savanna Olive",hex:"#5d6449",metal:.35},{name:"Laterite Red",hex:"#7a2f22",metal:.45},{name:"Harmattan White",hex:"#e9e7e1",metal:.05},{name:"Graphite",hex:"#2f3236",metal:.6},{name:"Volta Blue",hex:"#1e3d5c",metal:.55},{name:"Kente Gold",hex:"#a9884a",metal:.7}]},regent:{id:"regent",brand:"PKM Motors",name:"Regent",trim:"Platinum V8 AWD",tagline:"Quiet power for state visits and school runs.",chips:["6.2L V8","313 kW \xB7 624 Nm","10-speed auto","Air ride suspension"],width:2.06,wheelbase:3.07,front:2.52,rear:-2.88,track:1.74,tyreR:.405,tyreW:.285,archR:.475,archY:.43,sill:.44,belt:1.25,roof:1.93,mass:2700,power:313,torque:624,idle:620,redline:6e3,shiftUp:5400,shiftDown:2e3,frontWeight:.53,cgHeight:.73,steeringLock:.55,driveFront:.46,springRate:62,springDamping:12,bodyRoll:.0064,gears:[4.7,2.99,2.15,1.77,1.52,1.28,1,.85,.69,.64],finalDrive:3.23,top:59,engine:"v8",horn:[350,440],paints:[{name:"Obsidian Black",hex:"#0d0e10",metal:.4},{name:"Ridge Silver",hex:"#a7abae",metal:.85},{name:"Pearl White",hex:"#eeece6",metal:.15},{name:"Midnight Navy",hex:"#141e30",metal:.6},{name:"Cocoa Bronze",hex:"#4a3428",metal:.7},{name:"Jubilee Green",hex:"#1d3b2c",metal:.55}]}},fl=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function nd(i,t,e={}){let n=Vc[t],s=!!i.ColorManagement,r=s?1:.06,a=b=>{let P=new i.Color(b);return s||P.convertSRGBToLinear(),P},o=b=>("colorSpace"in b?b.colorSpace=i.SRGBColorSpace:b.encoding=i.sRGBEncoding,b),l=(b,P,I)=>{let U=document.createElement("canvas");return U.width=b,U.height=P,I(U.getContext("2d"),b,P),U},c=t==="regent",h=n.width,p=h/2,d=n.belt,f=n.roof,m=n.wheelbase/2,S=new i.MeshPhysicalMaterial({color:a(n.paints[0].hex),metalness:n.paints[0].metal,roughness:.32,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),u={paint:S,black:new i.MeshStandardMaterial({color:a("#121314"),roughness:.55,metalness:.1}),piano:new i.MeshPhysicalMaterial({color:a("#050506"),roughness:.12,metalness:.2,clearcoat:1,clearcoatRoughness:.05}),trim:new i.MeshStandardMaterial({color:a("#1b1c1d"),roughness:.85,metalness:0}),chrome:new i.MeshStandardMaterial({color:a("#dfe3e6"),roughness:.06,metalness:1,envMapIntensity:1.6}),satin:new i.MeshStandardMaterial({color:a("#9ea3a6"),roughness:.32,metalness:1}),glass:new i.MeshPhysicalMaterial({color:a("#05080a"),roughness:.02,metalness:.3,transparent:!0,opacity:.86,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:0}),lens:new i.MeshPhysicalMaterial({color:a("#e8eef2"),roughness:.02,metalness:0,transparent:!0,opacity:.35,clearcoat:1}),head:new i.MeshStandardMaterial({color:a("#f4f7fb"),emissive:a("#ffffff"),emissiveIntensity:.6,roughness:.25,metalness:.4}),drl:new i.MeshStandardMaterial({color:a("#ffffff"),emissive:a("#eef4ff"),emissiveIntensity:2.2,roughness:.3}),tail:new i.MeshStandardMaterial({color:a("#5a0b0b"),emissive:a("#ff1a10"),emissiveIntensity:.55,roughness:.2,metalness:.2}),amber:new i.MeshStandardMaterial({color:a("#6b3d07"),emissive:a("#ff8a00"),emissiveIntensity:0,roughness:.25}),reverse:new i.MeshStandardMaterial({color:a("#bfc4c8"),emissive:a("#ffffff"),emissiveIntensity:0,roughness:.2}),tyre:null,rim:null,interior:new i.MeshStandardMaterial({color:a(c?"#3a2a20":"#232425"),roughness:.78}),leather:new i.MeshStandardMaterial({color:a(c?"#8b6a4f":"#36383a"),roughness:.6}),aperture:new i.MeshStandardMaterial({color:a("#141414"),roughness:.9}),under:new i.MeshStandardMaterial({color:a("#0b0b0b"),roughness:.95}),disc:new i.MeshStandardMaterial({color:a("#6d6f70"),roughness:.45,metalness:.9}),caliper:new i.MeshStandardMaterial({color:a(c?"#141414":"#8f1d18"),roughness:.4,metalness:.3})},g=l(2048,256,(b,P,I)=>{b.fillStyle="#7a7a7a",b.fillRect(0,0,P,I);let U=72;for(let z=0;z<U;z++){let lt=z/U*P;b.fillStyle="#2a2a2a",b.fillRect(lt+4,I*.36,P/U*.42,I*.11),b.fillRect(lt+P/U*.45,I*.49,P/U*.42,I*.11),c||b.fillRect(lt+2,I*.3,P/U*.2,I*.38)}}),y=l(2048,256,(b,P,I)=>{b.fillStyle="#191919",b.fillRect(0,0,P,I),b.fillStyle="#2b2b2b",b.font="700 46px Inter, Arial, sans-serif",b.textBaseline="middle";let U=c?"PKM GRAND TOURING  \xB7  285/45 R22  \xB7  ":"PKM TERRA A/T  \xB7  265/65 R17  \xB7  ";for(let z=0;z<2;z++)b.fillText(U,z*P/2+40,I*.15);for(let z=0;z<2;z++)b.fillText(U,z*P/2+40,I*.85)}),T=new i.CanvasTexture(g);T.wrapS=i.RepeatWrapping;let M=o(new i.CanvasTexture(y));M.wrapS=i.RepeatWrapping,u.tyre=new i.MeshStandardMaterial({color:a("#1c1c1c"),roughness:.9,bumpMap:T,bumpScale:2.5,map:M}),u.rim=new i.MeshPhysicalMaterial({color:a(c?"#d9dcdf":"#3a3d40"),metalness:1,roughness:c?.12:.35,clearcoat:.6});let C=o(new i.CanvasTexture(l(256,256,(b,P)=>{let I=P/2,U=b.createLinearGradient(0,0,P,P);U.addColorStop(0,"#f3f3f3"),U.addColorStop(.5,"#9b9b9b"),U.addColorStop(1,"#e8e8e8"),b.fillStyle=U,b.beginPath(),b.arc(I,I,I-4,0,7),b.fill(),b.fillStyle="#121212",b.beginPath(),b.arc(I,I,I-22,0,7),b.fill(),b.fillStyle="#d9c7a3",b.font="800 82px Inter, Arial, sans-serif",b.textAlign="center",b.textBaseline="middle",b.fillText("PKM",I,I+4)})));u.emblem=new i.MeshStandardMaterial({map:C,metalness:.6,roughness:.25});let E=new i.Group;E.name="PKM "+n.name;let x=new i.Group;x.rotation.y=-Math.PI/2,E.add(x);let v=new i.Group;x.add(v);let k=[],A=(b,P,I=v,U=!0)=>{let z=new i.Mesh(b,P);return z.castShadow=U,z.receiveShadow=!0,I.add(z),z},L=(b,P,I,U,z,lt,gt,j=v)=>{let $=A(new i.BoxGeometry(b,P,I),gt,j);return $.position.set(U,z,lt),$},B=(b,P,I,U,z,lt=v)=>{let gt=new i.Shape,j=-b/2,$=-P/2;U=Math.min(U,b/2-.001,P/2-.001),gt.moveTo(j+U,$),gt.lineTo(j+b-U,$),gt.quadraticCurveTo(j+b,$,j+b,$+U),gt.lineTo(j+b,$+P-U),gt.quadraticCurveTo(j+b,$+P,j+b-U,$+P),gt.lineTo(j+U,$+P),gt.quadraticCurveTo(j,$+P,j,$+P-U),gt.lineTo(j,$+U),gt.quadraticCurveTo(j,$,j+U,$);let bt=Math.min(U,I/2-.001)*.9,Nt=new i.ExtrudeGeometry(gt,{depth:Math.max(.001,I-2*bt),bevelEnabled:!0,bevelThickness:bt,bevelSize:bt,bevelOffset:-bt,bevelSegments:3,curveSegments:6});return Nt.translate(0,0,-(I-2*bt)/2),A(Nt,z,lt)};function Q(b){let P=b.index?b.toNonIndexed():b,I=P.attributes.position,U=I.count,z=new Float32Array(U),lt=new Map,gt=new Array(U),j=new i.Vector3,$=new i.Vector3,bt=new i.Vector3,Nt=[];for(let Yt=0;Yt<U/3;Yt++)j.fromBufferAttribute(I,Yt*3),$.fromBufferAttribute(I,Yt*3+1),bt.fromBufferAttribute(I,Yt*3+2),Nt.push(new i.Vector3().subVectors(bt,$).cross(new i.Vector3().subVectors(j,$)));for(let Yt=0;Yt<U;Yt++){let be=Math.round(I.getX(Yt)*2e3)+"_"+Math.round(I.getY(Yt)*2e3)+"_"+Math.round(I.getZ(Yt)*2e3);gt[Yt]=be;let Ee=lt.get(be);Ee||lt.set(be,Ee=[]),Ee.push(Yt)}let St=new Float32Array(U*3),Ht=Math.cos(.62),Et=new i.Vector3,ne=new i.Vector3;for(let Yt=0;Yt<U;Yt++){let be=Nt[Yt/3|0];ne.copy(be).normalize(),Et.set(0,0,0);for(let Ee of lt.get(gt[Yt])){let we=Nt[Ee/3|0];ne.dot(bt.copy(we).normalize())>Ht&&Et.add(we)}Et.normalize(),St[Yt*3]=Et.x,St[Yt*3+1]=Et.y,St[Yt*3+2]=Et.z}return P.setAttribute("normal",new i.BufferAttribute(St,3)),P}function N(b){let P=b.attributes.position,I=new Map,U=[],z=[],lt=b.index?b.index.array:null,gt=lt?lt.length:P.count;for(let $=0;$<gt;$++){let bt=lt?lt[$]:$,Nt=P.getX(bt),St=P.getY(bt),Ht=P.getZ(bt),Et=Math.round(Nt*2e3)+"_"+Math.round(St*2e3)+"_"+Math.round(Ht*2e3),ne=I.get(Et);ne===void 0&&(ne=z.length/3,z.push(Nt,St,Ht),I.set(Et,ne)),U.push(ne)}let j=new i.BufferGeometry;return j.setAttribute("position",new i.Float32BufferAttribute(z,3)),j.setIndex(U),j.computeVertexNormals(),j}let G=n.front,K=n.rear;function q(b,P,I){let U=1;return U-=.11*fl(G-.55,G,b)**1.4,U-=.06*fl(K+.45,K,b)**1.4,I?U-=.15*Math.max(0,Math.min(1,(P-d)/(f-d))):(U-=.035*fl(d-.3,d,P),U-=.03*fl(.7,n.sill,P)),p*U}function ct(b,P){let I=b.getPoints(P),U=[];for(let z=0;z<I.length;z++){let lt=I[z],gt=I[(z+1)%I.length];U.push(lt);let j=lt.distanceTo(gt),$=Math.floor(j/.1);for(let bt=1;bt<$;bt++)U.push(lt.clone().lerp(gt,bt/$))}return U.length>1&&U[0].distanceTo(U[U.length-1])<1e-4&&U.pop(),new i.Shape(U)}function rt(b,P,I){let U=Array.from((b.index?b.toNonIndexed():b).attributes.position.array);for(let lt=0;lt<I;lt++){let gt=[],j=St=>[U[St*3],U[St*3+1],U[St*3+2]],$=(St,Ht)=>[(St[0]+Ht[0])/2,(St[1]+Ht[1])/2,(St[2]+Ht[2])/2],bt=(St,Ht)=>Math.hypot(St[0]-Ht[0],St[1]-Ht[1],St[2]-Ht[2]),Nt=!1;for(let St=0;St<U.length/9;St++){let Ht=j(St*3),Et=j(St*3+1),ne=j(St*3+2),Yt=bt(Ht,Et)>P,be=bt(Et,ne)>P,Ee=bt(ne,Ht)>P,we=(pe,se,Ie)=>gt.push(...pe,...se,...Ie),ke=Yt+be+Ee;if(ke&&(Nt=!0),ke===0)we(Ht,Et,ne);else if(ke===3){let pe=$(Ht,Et),se=$(Et,ne),Ie=$(ne,Ht);we(Ht,pe,Ie),we(pe,Et,se),we(Ie,se,ne),we(pe,se,Ie)}else if(ke===1)if(Yt){let pe=$(Ht,Et);we(Ht,pe,ne),we(pe,Et,ne)}else if(be){let pe=$(Et,ne);we(Ht,Et,pe),we(Ht,pe,ne)}else{let pe=$(ne,Ht);we(Ht,Et,pe),we(pe,Et,ne)}else if(Yt)if(be){let pe=$(Ht,Et),se=$(Et,ne);we(Ht,pe,ne),we(pe,se,ne),we(pe,Et,se)}else{let pe=$(Ht,Et),se=$(ne,Ht);we(Ht,pe,se),we(pe,Et,ne),we(pe,ne,se)}else{let pe=$(Et,ne),se=$(ne,Ht);we(Ht,Et,pe),we(Ht,pe,se),we(se,pe,ne)}}if(U=gt,!Nt)break}let z=new i.BufferGeometry;return z.setAttribute("position",new i.Float32BufferAttribute(U,3)),z}function ft(b,P,I,U=28){let z=I?.05:.075,lt=ct(b,U),gt=new i.ExtrudeGeometry(lt,{depth:P-2*z,steps:1,bevelEnabled:!0,bevelThickness:z,bevelSize:z*.85,bevelOffset:-z*.85,bevelSegments:5,curveSegments:U}),j=rt(gt,.2,6),$=j.attributes.position,bt=P/2,Nt=P/h,St=new Int8Array($.count);for(let be=0;be<$.count;be++){let Ee=$.getX(be),we=$.getY(be),ke=$.getZ(be)-(P-2*z)/2;Math.abs(Math.abs(ke)-bt)<1e-4&&(St[be]=Math.sign(ke)),$.setZ(be,ke/bt*q(Ee,we,I)*Nt)}let Ht=Q(j),Et=Ht.attributes.normal,ne=.01,Yt=new i.Vector3;for(let be=0;be<$.count;be++)if(St[be]){let Ee=$.getX(be),we=$.getY(be),ke=(q(Ee+ne,we,I)-q(Ee-ne,we,I))/(2*ne)*Nt,pe=(q(Ee,we+ne,I)-q(Ee,we-ne,I))/(2*ne)*Nt;Yt.set(-ke*St[be],-pe*St[be],1*St[be]).normalize(),Et.setXYZ(be,Yt.x,Yt.y,Yt.z)}return Ht}let dt=(b,P,I)=>{let U=n.archR,z=n.archY,lt=Math.asin(Math.min(1,(n.sill-z)/U));I>0?b.absarc(P,z,U,Math.PI-lt,lt,!0):b.absarc(P,z,U,lt,Math.PI-lt,!1)},st=(b,P,I,U,z,lt,gt)=>{let j=new i.Shape,$=n.sill;return z?j.moveTo(b+.08,$-.02):j.moveTo(b,$),gt&&(j.lineTo(-m-n.archR-.01,$),dt(j,-m,1)),lt&&(j.lineTo(m-n.archR-.01,$),dt(j,m,1)),U?(j.lineTo(P-.1,$-.04),j.quadraticCurveTo(P+.005,$-.02,P+.01,$+.14),I.front(j)):(j.lineTo(P,$),j.lineTo(P,I.h1)),I.top(j),z?(j.lineTo(b+.005,I.h0-.06),j.quadraticCurveTo(b-.01,(I.h0+$)/2,b+.01,$+.12),j.quadraticCurveTo(b,$-.02,b+.08,$-.02)):j.lineTo(b,$),j},ut=c?1.16:1.06,X=c?.92:.96,xt={front:b=>{b.lineTo(G+.02,c?.96:.86),b.quadraticCurveTo(G+.02,ut+.02,G-.08,ut)}},Tt;if(c){Tt=K;let b=new i.Shape;b.moveTo(K+.08,n.sill-.02),b.lineTo(-m-n.archR-.01,n.sill),dt(b,-m,1),b.lineTo(m-n.archR-.01,n.sill),dt(b,m,1),b.lineTo(G-.1,n.sill-.04),b.quadraticCurveTo(G+.005,n.sill-.02,G+.01,n.sill+.14),xt.front(b),b.lineTo(X,d),b.lineTo(K+.04,d-.01),b.quadraticCurveTo(K-.01,d-.03,K-.005,d-.12),b.lineTo(K-.01,n.sill+.12),b.quadraticCurveTo(K,n.sill-.02,K+.08,n.sill-.02),A(ft(b,h,!1),S)}else{Tt=-1.32,xt.h0=d,xt.h1=d,xt.top=gt=>{gt.quadraticCurveTo(X+.6,d+.03,X,d),gt.lineTo(Tt,d)};let b=new i.Shape;b.moveTo(Tt,n.sill),b.lineTo(m-n.archR-.01,n.sill),dt(b,m,1),b.lineTo(G-.1,n.sill-.04),b.quadraticCurveTo(G+.005,n.sill-.02,G+.01,n.sill+.14),xt.front(b),b.lineTo(X,d),b.lineTo(Tt,d),b.lineTo(Tt,n.sill),A(ft(b,h,!1),S);let P=.94,I=K,U=Tt-.03,z=new i.Shape;z.moveTo(I+.06,n.sill),z.lineTo(-m-n.archR-.01,n.sill),dt(z,-m,1),z.lineTo(U,n.sill),z.lineTo(U,P),z.lineTo(I+.02,P),z.quadraticCurveTo(I,P,I,P-.05),z.lineTo(I,n.sill+.06),z.quadraticCurveTo(I,n.sill,I+.06,n.sill),A(ft(z,h,!1),S);for(let gt of[-1,1]){let j=new i.Shape;j.moveTo(I+.03,P-.02),j.lineTo(U,P-.02),j.lineTo(U,d),j.lineTo(I+.03,d-.01);let $=new i.ExtrudeGeometry(j,{depth:.05,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelOffset:-.015,bevelSegments:2}),bt=A($,S);bt.position.z=gt>0?q(-2,1)-.065:-q(-2,1)+.015,L(U-I-.05,.035,.09,(I+U)/2,d+.01,gt*(q(-2,1)-.04),u.black)}L(.06,d-P,h-.16,U-.02,(d+P)/2,0,S),L(U-I-.1,.012,h-.2,(I+U)/2,P+.006,0,u.trim);for(let gt=0;gt<6;gt++)L(U-I-.12,.02,.05,(I+U)/2,P+.02,-.65+gt*.26,u.trim);for(let gt of[-1,1])A(new i.CylinderGeometry(.035,.035,.42,12),u.black).position.set(U-.12,d+.2,gt*(p-.14));let lt=A(new i.CylinderGeometry(.035,.035,h-.28,12),u.black);lt.rotation.x=Math.PI/2,lt.position.set(U-.12,d+.41,0);for(let gt of[m,-m])for(let j of[-1,1]){let $=new i.Shape,bt=n.archR+.005,Nt=n.archR+.075;$.absarc(0,0,Nt,Math.PI+.12,-.12,!0),$.absarc(0,0,bt,-.12,Math.PI+.12,!1);let St=new i.ExtrudeGeometry($,{depth:.05,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelOffset:-.012,bevelSegments:2,curveSegments:24});A(St,u.trim).position.set(gt,n.archY,j>0?q(gt,.8)-.03:-q(gt,.8)-.03)}}let zt=new i.Shape,_t=c?.06:.16,Bt=c?K+.2:Tt+.12,he=c?K+.04:Tt+.02;zt.moveTo(he,d-.02),zt.lineTo(X-.02,d-.02),zt.quadraticCurveTo((X+_t)/2+.05,(d+f)/2-.02,_t,f-.04),zt.quadraticCurveTo(_t-.18,f+.005,_t-.4,f),zt.lineTo(Bt+.25,f-.005),zt.quadraticCurveTo(Bt,f-.01,Bt-(c?.1:.06),f-.08),zt.lineTo(he,d-.02);let qt=h-.06,te=A(ft(zt,qt,!0,24),u.glass),ie=new i.Shape;ie.moveTo(_t-.05,f-.05),ie.quadraticCurveTo(_t-.18,f+.012,_t-.4,f+.008),ie.lineTo(Bt+.25,f+.003),ie.quadraticCurveTo(Bt+.005,f-.004,Bt-(c?.09:.05),f-.08),ie.lineTo(Bt-(c?.06:.02),f-.1),ie.lineTo(_t-.05,f-.1),A(ft(ie,qt+.012,!0,16),S);let pt=(b,P)=>q(b,P,!0)*(qt/h)+.004,Ct=(b,P,I,U,z,lt,gt)=>{let j=new i.Vector3(b,P,gt*pt(b,P)),$=new i.Vector3(I,U,gt*pt(I,U)),bt=j.distanceTo($),Nt=A(new i.BoxGeometry(bt,z,.012),lt);Nt.position.copy(j).add($).multiplyScalar(.5),Nt.quaternion.setFromUnitVectors(new i.Vector3(1,0,0),$.clone().sub(j).normalize());let St=new i.Vector3(0,0,gt);return Nt.rotation.x+=gt*-.14*0,Nt},vt=c?[.98,-.25,-1.5]:[.98,-.2,Tt];for(let b of[-1,1]){Ct(X-.03,d+.02,_t-.03,f-.06,.07,S,b),Ct(vt[1]+.02,d+.02,vt[1]-.04,f-.06,.09,u.piano,b),c?(Ct(vt[2],d+.02,vt[2]-.05,f-.06,.12,u.piano,b),Ct(K+.3,d+.02,Bt+.05,f-.06,.22,S,b)):Ct(Tt+.07,d+.02,Bt-.02,f-.07,.12,S,b);let P=L(X-he-.06,.03,.02,(X+he)/2,d+.008,b*(q(0,d)-.01),c?u.chrome:u.black);P.position.z=b*(pt(0,d+.01)+.012),c&&Ct(_t-.45,f-.085,K+.45,f-.095,.022,u.chrome,b)}for(let b of[-.45,.15]){let P=L(.02,.012,.62,X+.02,d+.03,b,u.black);P.rotation.y=.18}let Ut={};function It(b,P,I,U,z){let lt=new i.Group,gt=U*(q((P+I)/2,.85)+.002);lt.position.set(z?I:P,0,gt),v.add(lt);let j=n.sill+.04,$=d-.03,bt=new i.Shape,Nt=z?-(I-P):0,St=z?0:I-P,Ht=z?I:P,Et=pe=>{let se=pe+Ht,Ie=j;for(let xn of[m,-m]){let Le=se-xn;Math.abs(Le)<n.archR+.05&&(Ie=Math.max(Ie,n.archY+Math.sqrt(Math.max(0,(n.archR+.05)**2-Le*Le))+.015))}return Math.min(Ie,$-.15)};bt.moveTo(Nt+.01,Et(Nt+.01));for(let pe=1;pe<=24;pe++){let se=Nt+.01+(St-Nt-.02)*pe/24;bt.lineTo(se,Et(se))}bt.lineTo(St-.005,$),bt.lineTo(Nt+.005,$),bt.lineTo(Nt+.01,Et(Nt+.01));let ne=new i.ExtrudeGeometry(bt,{depth:.022,bevelEnabled:!0,bevelThickness:.008,bevelSize:.01,bevelOffset:-.01,bevelSegments:2});ne.translate(0,0,U>0?-.012:-.01);let Yt=A(ne,S,lt);A(new i.BoxGeometry(I-P-.06,$-j-.06,.04),u.interior,lt).position.set((Nt+St)/2,(j+$)/2,-U*.03);let Ee=z?Nt+.22:St-.22;A(new i.BoxGeometry(.2,.035,.03),c?u.chrome:u.black,lt).position.set(Ee,$-.13,U*.022);let ke=A(new i.PlaneGeometry(I-P-.08,$-j-.04),u.aperture);return ke.position.set((P+I)/2,(j+$)/2,gt-U*.006),ke.rotation.y=U>0?0:Math.PI,lt.userData={axis:"y",open:0,target:0,max:U*(z?-1.1:1.1)*-1},Yt.userData.panel=b,k.push(Yt),Ut[b]=lt,lt}It("frontLeft",vt[1]+.01,vt[0],-1,!0),It("frontRight",vt[1]+.01,vt[0],1,!0),It("rearLeft",vt[2]+.02,vt[1]-.01,-1,!0),It("rearRight",vt[2]+.02,vt[1]-.01,1,!0);for(let b of["frontLeft","frontRight","rearLeft","rearRight"]){let P=Ut[b],I=b.endsWith("Left")?-1:1;P.userData.max=I*1.15,P.userData.sign=1}{let b=new i.Group;b.position.set(X-.02,d+.004,0),v.add(b);let P=G-.12-X,I=Math.atan2(ut-d,P),U=new i.Shape,z=q(X+P/2,d)-.06;U.moveTo(0,-z),U.lineTo(P,-z+.07),U.quadraticCurveTo(P+.04,0,P,z-.07),U.lineTo(0,z),U.lineTo(0,-z);let lt=new i.ExtrudeGeometry(U,{depth:.02,bevelEnabled:!0,bevelThickness:.01,bevelSize:.02,bevelOffset:-.02,bevelSegments:3});lt.rotateX(Math.PI/2),lt.translate(0,.02,0);let gt=A(lt,S,b);gt.rotation.z=I;let j=B(P*.6,.02,c?.9:.75,.02,S,b);j.position.set(P*.45,.025+Math.sin(I)*P*.45,0),j.rotation.z=I,b.userData={axis:"z",open:0,target:0,max:.9},gt.userData.panel="hood",k.push(gt,j),Ut.hood=b;let $=L(P-.2,.2,h-.5,X+P/2,Math.min(d,ut)-.16,0,u.under);B(.6,.18,.7,.04,u.satin).position.set(X+P*.55,d-.16,0),B(.48,.05,.56,.03,u.piano).position.set(X+P*.55,d-.07,0)}if(c){let b=new i.Group;b.position.set(Bt-.05,f-.07,0),v.add(b);let P=f-.07-.58,I=B(.07,P,h-.16,.04,S,b);I.position.set(-.13,-P/2,0),I.rotation.z=-.06;let U=B(.02,P*.36,h-.46,.04,u.glass,b);U.position.set(-.17,-P*.25,0),U.rotation.z=-.06;let z=ee("REGENT",.7,.09);z.position.set(-.175,-P*.62,0),z.rotation.y=-Math.PI/2,b.add(z);let lt=A(new i.CircleGeometry(.065,32),u.emblem,b);lt.position.set(-.176,-P*.52,0),lt.rotation.y=-Math.PI/2,b.userData={axis:"z",open:0,target:0,max:-1.2},I.userData.panel="tailgate",k.push(I),Ut.tailgate=b}else{let b=new i.Group;b.position.set(K+.02,.96,0),v.add(b);let P=B(.06,d-.96,h-.08,.02,S,b);P.position.set(0,(d-.96)/2,0);let I=L(.03,.04,.24,-.03,d-.96-.08,0,u.black,b),U=ee("VOLTA",.6,.09);U.position.set(-.032,.11,0),U.rotation.y=-Math.PI/2,b.add(U),b.userData={axis:"z",open:0,target:0,max:Math.PI/2},P.userData.panel="tailgate",k.push(P),Ut.tailgate=b}function ee(b,P,I){let U=o(new i.CanvasTexture(l(512,80,(z,lt,gt)=>{z.clearRect(0,0,lt,gt),z.fillStyle="#ffffff",z.font="700 58px Inter, Arial, sans-serif",z.textAlign="center",z.textBaseline="middle","letterSpacing"in z&&(z.letterSpacing="22px"),z.fillText(b,lt/2,gt/2+2)})));return new i.Mesh(new i.PlaneGeometry(P,I),new i.MeshStandardMaterial({map:U,transparent:!0,metalness:1,roughness:.15,color:a("#e8e8e8")}))}let Lt=new i.Group;Lt.position.set(G+.012,0,0),v.add(Lt);let jt=c?.62:.58,Gt=ut-.05;if(c){let b=new i.CanvasTexture(l(512,256,($,bt,Nt)=>{$.fillStyle="#050505",$.fillRect(0,0,bt,Nt),$.strokeStyle="#ffffff",$.lineWidth=5;for(let St=-Nt;St<bt+Nt;St+=26)$.beginPath(),$.moveTo(St,0),$.lineTo(St+Nt,Nt),$.stroke(),$.beginPath(),$.moveTo(St,Nt),$.lineTo(St+Nt,0),$.stroke()})),P=new i.MeshStandardMaterial({color:a("#9c9fa2"),metalnessMap:b,metalness:1,roughness:.18,map:o(b)}),I=1.25,U=Gt-jt-.05,z=A(new i.PlaneGeometry(I,U),P,Lt);z.rotation.y=Math.PI/2,z.position.set(.004,(jt+Gt)/2,0);for(let[$,bt,Nt,St]of[[I+.06,.035,Gt-.02,0],[I+.06,.035,jt+.02,0]])L(.03,bt,$,.01,Nt,St,u.chrome,Lt);for(let $ of[-I/2-.015,I/2+.015])L(.03,U+.06,.035,.01,(jt+Gt)/2,$,u.chrome,Lt);let lt=A(new i.CircleGeometry(.075,40),u.emblem,Lt);lt.rotation.y=Math.PI/2,lt.position.set(.03,(jt+Gt)/2+.03,0);for(let $ of[-1,1]){let bt=L(.03,.42,.045,-.005,Gt-.2,$*(p-.14),u.drl,Lt);B(.05,.1,.32,.03,u.piano,Lt).position.set(-.01,Gt-.06,$*(p-.3));for(let St=0;St<3;St++){let Ht=A(new i.CylinderGeometry(.03,.03,.02,20),u.head,Lt);Ht.rotation.z=Math.PI/2,Ht.position.set(.02,Gt-.06,$*(p-.4+St*.09))}L(.03,.18,.03,-.004,Gt-.4,$*(p-.14),u.amber,Lt).userData.ind=$}B(.12,.26,h-.12,.06,S,Lt).position.set(-.04,.5,0),L(.02,.025,h-.5,.025,.47,0,u.chrome,Lt),B(.04,.1,1.2,.03,u.black,Lt).position.set(0,.43,0)}else{B(.06,Gt-jt,1.12,.05,u.piano,Lt).position.set(0,(jt+Gt)/2,0);for(let z=0;z<4;z++)L(.025,.035,1,.025,jt+.08+z*.1,0,z===1?u.chrome:u.black,Lt);let P=A(new i.CircleGeometry(.07,40),u.emblem,Lt);P.rotation.y=Math.PI/2,P.position.set(.045,jt+.21,0);for(let z of[-1,1]){let lt=B(.05,.13,.4,.04,u.piano,Lt);lt.position.set(-.02,Gt-.07,z*(p-.29)),lt.rotation.y=z*.18;let gt=L(.02,.022,.38,.012,Gt-.015,z*(p-.3),u.drl,Lt);gt.rotation.y=z*.18;for(let $=0;$<2;$++){let bt=A(new i.CylinderGeometry(.034,.034,.02,20),u.head,Lt);bt.rotation.z=Math.PI/2,bt.position.set(.012,Gt-.08,z*(p-.36+$*.12))}L(.02,.03,.12,0,Gt-.15,z*(p-.2),u.amber,Lt).userData.ind=z;let j=A(new i.CylinderGeometry(.04,.04,.03,20),u.head,Lt);j.rotation.z=Math.PI/2,j.position.set(-.03,.47,z*(p-.3))}B(.14,.24,h-.08,.05,u.trim,Lt).position.set(-.04,.48,0);let U=B(.08,.1,.9,.04,u.satin,Lt);U.position.set(-.02,.36,0),U.rotation.z=-.4;for(let z of[-.4,.4]){let lt=A(new i.TorusGeometry(.035,.012,8,16),u.caliper,Lt);lt.position.set(.04,.42,z),lt.rotation.y=Math.PI/2}}let ae=o(new i.CanvasTexture(l(1040,224,(b,P,I)=>{b.fillStyle="#fbfbf7",b.beginPath(),b.moveTo(18,0),b.arcTo(P,0,P,I,18),b.arcTo(P,I,0,I,18),b.arcTo(0,I,0,0,18),b.arcTo(0,0,P,0,18),b.fill();let z=b.createLinearGradient(0,0,0,I);z.addColorStop(0,"rgba(255,255,255,.6)"),z.addColorStop(1,"rgba(0,0,0,.06)"),b.fillStyle=z,b.fillRect(0,0,P,I),b.strokeStyle="#111",b.lineWidth=10,b.strokeRect(14,14,P-28,I-28),b.fillStyle="#ce1126",b.fillRect(30,30,92,54),b.fillStyle="#fcd116",b.fillRect(30,84,92,54),b.fillStyle="#006b3f",b.fillRect(30,138,92,54),b.fillStyle="#000",b.beginPath();for(let lt=0;lt<10;lt++){let gt=-Math.PI/2+lt*Math.PI/5,j=lt%2?7:17;b.lineTo(76+Math.cos(gt)*j,111+Math.sin(gt)*j)}b.fill(),b.fillStyle="#111",b.font="800 30px Inter, Arial, sans-serif",b.textAlign="center",b.fillText("GH",76,208),b.font="800 138px Inter, Arial, sans-serif",b.textBaseline="middle","letterSpacing"in b&&(b.letterSpacing="4px"),b.fillStyle="rgba(0,0,0,.18)",b.fillText("BU 0858-26",P/2+72,I/2+10),b.fillStyle="#111",b.fillText("BU 0858-26",P/2+70,I/2+7)}))),V=new i.MeshStandardMaterial({map:ae,roughness:.4}),fe=A(new i.PlaneGeometry(.52,.112),V,Lt,!1);fe.rotation.y=Math.PI/2,fe.position.set(.075,.5,0);let Zt=new i.Group;Zt.position.set(K-.012,0,0),v.add(Zt);let de=[],Ft=[];if(c){for(let P of[-1,1]){let I=L(.04,.62,.08,0,d+.05,P*(p-.07),u.tail,Zt);de.push(I);let U=L(.04,.05,.28,0,d+.33,P*(p-.2),u.tail,Zt);de.push(U),L(.042,.12,.05,.003,d-.12,P*(p-.08),u.amber,Zt).userData.ind=P,L(.042,.08,.05,.003,d-.22,P*(p-.08),u.reverse,Zt);let z=A(new i.CylinderGeometry(.045,.045,.14,18,1,!0),u.chrome,Zt);z.rotation.z=Math.PI/2,z.position.set(0,.4,P*.55)}B(.14,.24,h-.1,.06,S,Zt).position.set(.04,.52,0),L(.02,.025,h-.6,-.03,.6,0,u.chrome,Zt)}else{for(let z of[-1,1]){let lt=B(.05,.42,.11,.03,u.tail,Zt);lt.position.set(0,d-.2,z*(p-.06)),de.push(lt),L(.052,.08,.08,.004,d-.34,z*(p-.06),u.amber,Zt).userData.ind=z,L(.052,.06,.08,.004,d-.07,z*(p-.06),u.reverse,Zt)}B(.16,.18,h-.1,.04,u.satin,Zt).position.set(.03,.52,0);let P=L(.1,.03,.4,.02,.62,0,u.black,Zt),I=A(new i.CylinderGeometry(.035,.035,.2,14,1,!0),u.satin,Zt);I.rotation.z=Math.PI/2,I.position.set(.05,.36,.55);let U=L(.03,.03,.42,Tt+.05-(K-.012),f-.02,0,u.tail,Zt);Ft.push(U)}let xe=A(new i.PlaneGeometry(.52,.112),V,Zt,!1);xe.rotation.y=-Math.PI/2,xe.position.set(c?-.04:-.06,c?.72:.7,0);for(let b of[-1,1]){let P=new i.Group;P.position.set(X-.2,d+.1,b*(q(X,d)+.04)),v.add(P);let I=L(.06,.04,.08,0,-.03,0,u.black,P);B(.12,.2,.26,.05,c?u.chrome:S,P).position.set(-.01,.04,b*.15);let z=A(new i.PlaneGeometry(.22,.16),u.chrome,P);z.rotation.y=-Math.PI/2,z.position.set(-.075,.04,b*.15),L(.04,.015,.12,.03,-.045,b*.2,u.amber,P).userData.ind=b,P.userData.side=b,Ut["mirror"+(b<0?"Left":"Right")]=P;let lt=c?B(vt[0]-vt[2]+.05,.04,.17,.02,u.piano):A(new i.CylinderGeometry(.03,.03,vt[0]-vt[2],14),u.black);if(c||(lt.rotation.z=Math.PI/2),lt.position.set((vt[0]+vt[2])/2,n.sill-.08,b*(p-.07)),c){let gt=A(new i.CylinderGeometry(.018,.018,2.3,10),u.chrome);gt.rotation.z=Math.PI/2,gt.position.set(-1,f+.05,b*(p-.22));for(let j of[-2.1,.1])L(.06,.05,.04,j,f+.025,b*(p-.22),u.black)}}if(B(.18,.06,.06,.025,u.piano).position.set(Bt+.25,f+.03,0),L(G-K-.6,.12,h-.5,(G+K)/2,n.sill-.02,0,u.under),!c){let b=A(new i.CylinderGeometry(.05,.05,n.track-.2,12),u.under);b.rotation.x=Math.PI/2,b.position.set(-m,n.tyreR,0),A(new i.SphereGeometry(.14,16,12),u.under).position.set(-m,n.tyreR,0)}let Vt=new i.Group;v.add(Vt);let R=X-.28;B(.42,.22,h-.26,.08,u.interior,Vt).position.set(R,d+.02,0),B(.3,.05,h-.3,.02,u.trim,Vt).position.set(R+.05,d+.14,0);let Y=new i.MeshStandardMaterial({color:a(c?"#73523b":"#3e4845"),roughness:c?.38:.7});L(.028,.053,h-.38,R-.22,d+.02,0,Y,Vt);for(let b of[-.68,-.18,.27,.68]){L(.022,.078,.12,R-.236,d+.055,b,u.black,Vt);for(let P=-1;P<=1;P++)L(.012,.005,.105,R-.251,d+.055+P*.018,b,u.satin,Vt)}let H=document.createElement("canvas");H.width=512,H.height=192;let ht=o(new i.CanvasTexture(H)),mt=new i.MeshStandardMaterial({map:ht,emissive:a("#ffffff"),emissiveMap:ht,emissiveIntensity:.9,roughness:.3}),Z=A(new i.PlaneGeometry(c?.4:.34,.14),mt,Vt,!1);Z.position.set(R-.19,d+.13,-.38),Z.rotation.y=-Math.PI/2,B(.04,.18,c?.45:.39,.016,u.trim,Vt).position.set(R-.148,d+.13,-.38);let yt=A(new i.PlaneGeometry(.3,.17),mt.clone(),Vt,!1);yt.position.set(R-.2,d+.12,.05),yt.rotation.y=-Math.PI/2,yt.material.map=yt.material.emissiveMap=o(new i.CanvasTexture(l(512,290,(b,P,I)=>{let U=b.createLinearGradient(0,0,P,I);U.addColorStop(0,"#0f1412"),U.addColorStop(1,"#1b2420"),b.fillStyle=U,b.fillRect(0,0,P,I),b.strokeStyle="#93AE7C",b.lineWidth=6,b.beginPath(),b.moveTo(30,230),b.bezierCurveTo(160,210,200,90,330,110),b.lineTo(480,60),b.stroke(),b.fillStyle="#BBA783",b.beginPath(),b.arc(330,110,10,0,7),b.fill(),b.fillStyle="#F2F0EA",b.font="600 28px Inter, Arial",b.fillText("Jubilee House \u2192 Temple",30,50),b.fillStyle="#B3ACA1",b.font="400 22px Inter, Arial",b.fillText("Liberation Road \xB7 Accra",30,84)})));let F=new i.Group;F.position.set(R-.3,d+.06,-.38),F.rotation.z=-.42,Vt.add(F);let nt=new i.Group;F.add(nt);let at=A(new i.TorusGeometry(.185,.018,12,40),u.leather,nt);at.rotation.y=Math.PI/2;let At=B(.05,.1,.12,.03,u.interior,nt);for(let b of[0,2.1,-2.1]){let P=L(.02,.17,.035,0,0,0,u.satin,nt);P.position.set(0,Math.cos(b)*-.09,Math.sin(b)*.09),P.rotation.x=b}let Rt=A(new i.CircleGeometry(.032,24),u.emblem,nt);Rt.position.x=-.03,Rt.rotation.y=-Math.PI/2;let Dt=A(new i.CylinderGeometry(.03,.04,.3,10),u.trim,F);Dt.rotation.z=Math.PI/2,Dt.position.x=.15;let Xt=(b,P,I)=>{let U=new i.Group;U.position.set(b,0,P),Vt.add(U),B(.5,.12,I,.05,u.leather,U).position.set(0,n.sill+.25,0);let lt=B(.12,.6,I,.05,u.leather,U);if(lt.position.set(-.25,n.sill+.55,0),lt.rotation.z=.2,I<.7){let gt=B(.08,.16,.26,.04,u.leather,U);gt.position.set(-.32,n.sill+.92,0),gt.rotation.z=.2}return U},Qt=vt[1]+.48;Xt(Qt,-.38,.52),Xt(Qt,.38,.52),c?(Xt(-.55,-.4,.54),Xt(-.55,.4,.54),Xt(-1.75,0,1.5)):Xt(vt[1]-.45,0,1.45),B(.9,.18,.22,.05,u.interior,Vt).position.set(Qt+.1,n.sill+.3,0),B(.07,.08,.05,.02,u.chrome,Vt).position.set(Qt+.35,n.sill+.42,0);let ue=L(X-Tt-.2,.02,h-.25,(X+Tt)/2,n.sill+.05,0,u.trim,Vt),kt=L(X-he-.7,.02,qt-.35,(_t+Bt)/2,f-.12,0,u.leather,Vt);kt.material=new i.MeshStandardMaterial({color:a(c?"#cdbfae":"#3c3d3e"),roughness:.9});let Se=new i.PointLight(16771532,0,2.6,1.5);Se.position.set(Qt-.2,f-.25,0),Vt.add(Se);let Be=L(.01,.006,h-.45,R-.2,d-.02,0,new i.MeshStandardMaterial({color:a("#BBA783"),emissive:a("#BBA783"),emissiveIntensity:0}),Vt);B(.043,.075,.25,.02,u.black,Vt).position.set(_t-.13,f-.185,.02);let Fi=L(.004,.057,.216,_t-.154,f-.185,.02,u.satin,Vt);Fi.castShadow=!1;let J=new i.BufferGeometry,wt=d+.04,Ot=f-.1,_e=X-.05,Te=_t+.045;J.setAttribute("position",new i.Float32BufferAttribute([_e,wt,-pt(_e,wt),_e,wt,pt(_e,wt),Te,Ot,pt(Te,Ot),Te,Ot,-pt(Te,Ot)],3)),J.setIndex([0,1,2,0,2,3]),J.computeVertexNormals();let en=A(J,new i.MeshBasicMaterial({color:a("#aad4de"),side:i.DoubleSide,transparent:!0,opacity:.065,depthWrite:!1}),Vt,!1);en.visible=!1;let An=[],nn=(()=>{let b=n.tyreR,P=n.tyreW,I=b*(c?.72:.62),U=[],z=18;U.push(new i.Vector2(I,-P/2+.02));for(let j=0;j<=z;j++){let $=j/z,bt=I+(b-.02-I)*$,Nt=Math.sin($*Math.PI)*.018+.01*$;U.push(new i.Vector2(bt,-P/2-Nt))}U.push(new i.Vector2(b-.005,-P/2+.01),new i.Vector2(b,-P/2+.03),new i.Vector2(b,P/2-.03),new i.Vector2(b-.005,P/2-.01));for(let j=z;j>=0;j--){let $=j/z,bt=I+(b-.02-I)*$,Nt=Math.sin($*Math.PI)*.018+.01*$;U.push(new i.Vector2(bt,P/2+Nt))}U.push(new i.Vector2(I,P/2-.02));let lt=new i.LatheGeometry(U,64),gt=lt.attributes.uv;for(let j=0;j<gt.count;j++)gt.setX(j,gt.getX(j)*1);return lt.rotateX(Math.PI/2),lt})(),Ce=n.tyreR*(c?.72:.62);function Oi(b){let P=new i.Group,I=A(nn,u.tyre,P),U=A(new i.CylinderGeometry(Ce,Ce,n.tyreW-.03,40,1,!0),u.rim,P);U.rotation.x=Math.PI/2;let z=A(new i.TorusGeometry(Ce-.004,.008,8,48),u.rim,P);z.position.z=b*(n.tyreW/2-.02);let lt=A(new i.CylinderGeometry(Ce-.01,Ce*.5,.05,40,1,!0),u.under,P);lt.rotation.x=Math.PI/2,lt.position.z=b*(n.tyreW/2-.06);let gt=c?10:6;for(let bt=0;bt<gt;bt++){let Nt=bt/gt*Math.PI*2,St=new i.Mesh(new i.BoxGeometry(c?.028:.06,Ce-.06,.035),u.rim);if(St.geometry.translate(0,(Ce-.06)/2+.05,0),St.rotation.z=Nt,St.position.z=b*(n.tyreW/2-.035),St.castShadow=!0,P.add(St),c&&bt%2===0){let Ht=St.clone();Ht.rotation.z=Nt+.18,P.add(Ht)}}let j=A(new i.CylinderGeometry(.065,.07,.03,32),u.rim,P);j.rotation.x=Math.PI/2,j.position.z=b*(n.tyreW/2-.025);let $=A(new i.CircleGeometry(.05,32),u.emblem,P);$.position.z=b*(n.tyreW/2-.008),b<0&&($.rotation.y=Math.PI);for(let bt=0;bt<6;bt++){let Nt=bt/6*Math.PI*2,St=A(new i.CylinderGeometry(.011,.011,.02,6),u.chrome,P);St.rotation.x=Math.PI/2,St.position.set(Math.cos(Nt)*.085,Math.sin(Nt)*.085,b*(n.tyreW/2-.035))}return P}for(let[b,P,I]of[[m,-1,!0],[m,1,!0],[-m,-1,!1],[-m,1,!1]]){let U=new i.Group;U.position.set(b,n.tyreR,P*n.track/2),x.add(U);let z=Oi(P);U.add(z);let lt=A(new i.CylinderGeometry(Ce-.04,Ce-.04,.03,32),u.disc,U);lt.rotation.x=Math.PI/2,lt.position.z=P*.01;let gt=B(.12,.08,.06,.02,u.caliper,U);gt.position.set(I?-.02:.02,Ce-.07,P*.02),gt.rotation.z=I?.6:-.6,An.push({pivot:U,spin:z,front:I,side:P,baseY:n.tyreR,x:b,z:P*n.track/2})}let Ys=[];if(e.lights!==!1)for(let b of[-1,1]){let P=new i.SpotLight(16774890,0,70,.48,.5,1.6);P.position.set(G-.05,Gt-.06,b*(p-.3)),P.target.position.set(G+12,0,b*1.2),v.add(P,P.target),Ys.push(P)}let Un=e.lights!==!1?new i.PointLight(16719888,0,4,2):null;Un&&(Un.position.set(K-.4,.8,0),v.add(Un));let Zs={"-1":u.amber.clone(),1:u.amber.clone()};v.traverse(b=>{b.isMesh&&b.userData.ind&&(b.material=Zs[b.userData.ind])});let Ks=u.tail.clone();for(let b of Ft)b.material=Ks;{let b=G-K+.7,P=h+.55,I=new i.CanvasTexture(l(256,128,(z,lt,gt)=>{z.fillStyle="#000",z.fillRect(0,0,lt,gt);let j=($,bt,Nt,St,Ht)=>{let Et=z.createRadialGradient($,bt,0,$,bt,1);Et.addColorStop(0,`rgba(255,255,255,${Ht})`),Et.addColorStop(1,"rgba(255,255,255,0)"),z.save(),z.translate($,bt),z.scale(Nt,St),z.translate(-$,-bt),z.fillStyle=Et,z.beginPath(),z.arc($,bt,1,0,7),z.fill(),z.restore()};j(lt/2,gt/2,lt*.5,gt*.48,.55);for(let $ of[.5+m/b,.5-m/b])for(let bt of[.2,.8])j(lt*$+(G+K)/2/b*-lt,gt*bt,lt*.09,gt*.16,.9)})),U=new i.Mesh(new i.PlaneGeometry(b,P),new i.MeshBasicMaterial({color:0,alphaMap:I,transparent:!0,depthWrite:!1,opacity:.78,polygonOffset:!0,polygonOffsetFactor:-4}));U.rotation.x=-Math.PI/2,U.position.set((G+K)/2,.012,0),U.renderOrder=2,x.add(U)}function Js(b){for(let I of[...b.children])!I.isMesh&&I.children.length&&Js(I);let P=new Map;for(let I of b.children){if(!I.isMesh||I.userData.panel||Array.isArray(I.material)||I.material.transparent)continue;let U=I.material.uuid+(I.castShadow?"s":"n");P.has(U)||P.set(U,[]),P.get(U).push(I)}for(let I of P.values()){if(I.length<2)continue;let U=I.map(St=>{St.updateMatrix();let Ht=St.geometry.index?St.geometry.toNonIndexed():St.geometry.clone();return Ht.applyMatrix4(St.matrix),Ht.attributes.normal||Ht.computeVertexNormals(),Ht}),z=U.reduce((St,Ht)=>St+Ht.attributes.position.count,0),lt=new Float32Array(z*3),gt=new Float32Array(z*3),j=new Float32Array(z*2),$=0;for(let St of U){let Ht=St.attributes.position.count;lt.set(St.attributes.position.array,$*3),gt.set(St.attributes.normal.array,$*3),St.attributes.uv&&j.set(St.attributes.uv.array,$*2),$+=Ht,St.dispose()}let bt=new i.BufferGeometry;bt.setAttribute("position",new i.BufferAttribute(lt,3)),bt.setAttribute("normal",new i.BufferAttribute(gt,3)),bt.setAttribute("uv",new i.BufferAttribute(j,2));let Nt=new i.Mesh(bt,I[0].material);Nt.castShadow=I[0].castShadow,Nt.receiveShadow=!0;for(let St of I)b.remove(St);b.add(Nt)}}Js(x);let sn={head:!1,brake:!1,reverse:!1,left:!1,right:!1,hazard:!1,interiorGlow:0};function _l(b){te.visible=!b,en.visible=b,sn.interiorGlow=b}function xl(b,P){S.color.copy(a(b)),S.metalness=P??S.metalness,S.roughness=P>.5?.28:.35}function oa(b,P){let I=Ut[b];return I?b.startsWith("mirror")?(I.userData.target=P??!I.userData.target?1:0,!!I.userData.target):(I.userData.target=P??I.userData.target===0?1:0,I.userData.target===1):!1}for(let b of["mirrorLeft","mirrorRight"])Ut[b].userData={side:Ut[b].userData.side,open:0,target:0};let w=0;function W(b,P={}){for(let[j,$]of Object.entries(Ut)){let bt=$.userData;if(bt.open===void 0)continue;let Nt=j==="hood"||j==="tailgate"?2.2:3.2;if(bt.open+=(bt.target-bt.open)*Math.min(1,b*Nt),j.startsWith("mirror"))$.rotation.y=bt.side*1.1*bt.open;else if(bt.axis==="y"){let St=j.endsWith("Left")?1:-1;$.rotation.y=St*1.1*ot(bt.open)}else $.rotation.z=bt.max*ot(bt.open)}let I=P.night?1:0;u.head.emissiveIntensity=sn.head?3:.4,u.drl.emissiveIntensity=P.engine===!1?.15:3.2;for(let j of Ys)j.intensity=sn.head?(P.lightScale??1)*60*r:0;let U=sn.brake;u.tail.emissiveIntensity=U?5:sn.head||P.engine?1.2:.15,Ks.emissiveIntensity=U?6:.05,Un&&(Un.intensity=U?2.5*r*10:0),u.reverse.emissiveIntensity=sn.reverse?4:0,w+=b;let z=w%.74<.4,lt=(sn.left||sn.hazard)&&z,gt=(sn.right||sn.hazard)&&z;return Zs[-1].emissiveIntensity=lt?6:0,Zs[1].emissiveIntensity=gt?6:0,Be.material.emissiveIntensity=P.engine?1.5:0,Se.intensity=sn.interiorGlow?(I?2.6:1.6)*r:0,sn.left||sn.right||sn.hazard?z:null}let ot=b=>1-Math.pow(1-b,3),tt=-1/0;function it(b,P,I){let U=performance.now();if(U-tt<100)return;tt=U;let z=H.getContext("2d"),lt=512,gt=192;z.fillStyle="#07090a",z.fillRect(0,0,lt,gt);let j=c?"#a7c9e4":"#dab985",$=(bt,Nt,St,Ht)=>{let Et=Math.PI*(.8+1.4*Math.max(0,Math.min(1,Nt)));z.strokeStyle="#222",z.lineWidth=12,z.beginPath(),z.arc(bt,110,70,Math.PI*.8,Math.PI*2.2),z.stroke(),z.strokeStyle=Nt>.86?"#dc795e":j,z.beginPath(),z.arc(bt,110,70,Math.PI*.8,Et),z.stroke(),c||(z.strokeStyle="#fcf0db",z.lineWidth=3,z.beginPath(),z.moveTo(bt+Math.cos(Et)*53,110+Math.sin(Et)*53),z.lineTo(bt+Math.cos(Et)*80,110+Math.sin(Et)*80),z.stroke()),z.fillStyle="#F2F0EA",z.font="700 40px Inter, Arial",z.textAlign="center",z.fillText(Ht,bt,122),z.fillStyle="#9A948B",z.font="500 16px Inter, Arial",z.fillText(St,bt,150)};$(120,b/(c?220:180),"km/h",Math.round(b)),$(392,P/n.redline,"rpm \xD71000",(P/1e3).toFixed(1)),z.fillStyle=j,z.font="700 46px Inter, Arial",z.textAlign="center",z.fillText(I,256,112),z.font="600 15px Inter, Arial",z.fillText(n.name.toUpperCase(),256,145),ht.needsUpdate=!0}return{spec:n,root:E,car:x,body:v,wheels:An,steer:nt,interior:Vt,panels:Ut,clickable:k,state:sn,materials:u,setPaint:xl,togglePanel:oa,update:W,drawCluster:it,setCabinView:_l,driverEye:new i.Vector3(Qt-.12,Math.min(f-.19,d+.36),-.38),dims:{length:G-K,width:h,height:f,front:G,rear:K}}}var pl=class{constructor(){this.ctx=null,this.kind="diesel",this.on=!1,this.cabin=0,this.muted=!1}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.7;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,this.cabinFilter=e.createBiquadFilter(),this.cabinFilter.type="lowpass",this.cabinFilter.frequency.value=18e3,this.master.connect(this.cabinFilter).connect(n).connect(e.destination),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;this._buildEngine(),this._buildEnv()}return this.ctx.state!=="running"&&await this.ctx.resume(),!0}_noise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.05)}_buildEngine(){let t=this.ctx;this.eng=t.createGain(),this.eng.gain.value=0;let e=t.createWaveShaper(),n=new Float32Array(1024);for(let l=0;l<1024;l++){let c=l/512-1;n[l]=Math.tanh(c*2.6)}e.curve=n,this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.Q.value=.8,this.eng.connect(e).connect(this.engLP).connect(this.master),this.osc=[];let s=(l,c)=>{let h=t.createOscillator();h.type=l;let p=t.createGain();return p.gain.value=c,h.connect(p).connect(this.eng),h.start(),this.osc.push({o:h,g:p,base:c}),h};this.o1=s("sawtooth",.5),this.o2=s("square",.18),this.o3=s("triangle",.35),this.oSub=s("sine",.6),this.am=t.createGain(),this.am.gain.value=1,this.eng.disconnect(),this.eng.connect(this.am).connect(e),this.lfo=t.createOscillator(),this.lfo.type="square",this.lfoGain=t.createGain(),this.lfoGain.gain.value=.35,this.lfo.connect(this.lfoGain).connect(this.am.gain),this.lfo.start();let r=this._noise();this.clatBP=t.createBiquadFilter(),this.clatBP.type="bandpass",this.clatBP.frequency.value=2600,this.clatBP.Q.value=1.6,this.clat=t.createGain(),this.clat.gain.value=0,this.clatGate=t.createGain(),this.clatGate.gain.value=0,this.clatLfo=t.createOscillator(),this.clatLfo.type="square";let a=t.createGain();a.gain.value=.5,this.clatLfo.connect(a).connect(this.clatGate.gain),this.clatLfo.start(),r.connect(this.clatBP).connect(this.clatGate).connect(this.clat).connect(this.master);let o=this._noise();this.roarBP=t.createBiquadFilter(),this.roarBP.type="bandpass",this.roarBP.Q.value=.7,this.roar=t.createGain(),this.roar.gain.value=0,o.connect(this.roarBP).connect(this.roar).connect(this.master),this.turbo=t.createOscillator(),this.turbo.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turbo.connect(this.turboG).connect(this.master),this.turbo.start()}_buildEnv(){let t=this.ctx,e=this._noise();this.windLP=t.createBiquadFilter(),this.windLP.type="lowpass",this.windLP.frequency.value=600,this.wind=t.createGain(),this.wind.gain.value=0,e.connect(this.windLP).connect(this.wind).connect(this.master);let n=this._noise();this.sqBP=t.createBiquadFilter(),this.sqBP.type="bandpass",this.sqBP.frequency.value=1300,this.sqBP.Q.value=9,this.sq=t.createGain(),this.sq.gain.value=0,n.connect(this.sqBP).connect(this.sq).connect(this.master);let s=this._noise();this.grLP=t.createBiquadFilter(),this.grLP.type="lowpass",this.grLP.frequency.value=260,this.gravel=t.createGain(),this.gravel.gain.value=0,s.connect(this.grLP).connect(this.gravel).connect(this.master)}setKind(t){this.kind=t}_env(t,e,n,s,r){let a=t.gain;a.cancelScheduledValues(e),a.setValueAtTime(1e-4,e),a.exponentialRampToValueAtTime(s,e+n),a.exponentialRampToValueAtTime(1e-4,e+n+r)}click(t=3200,e=.25,n=.02){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=s.createBufferSource();a.buffer=this.noiseBuf;let o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=t,o.Q.value=3;let l=s.createGain();a.connect(o).connect(l).connect(this.master),this._env(l,r,.002,e,n),a.start(r),a.stop(r+n+.05)}thunk(t=.6){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(110,n),s.frequency.exponentialRampToValueAtTime(48,n+.18);let r=e.createGain();s.connect(r).connect(this.master),this._env(r,n,.004,t,.25),s.start(n),s.stop(n+.35),this.click(900,t*.4,.06)}latch(){this.click(2400,.18,.03),setTimeout(()=>this.click(1700,.12,.03),60)}tick(t){this.click(t?3800:2600,.12,.012)}horn(t,e=.5){if(!this.ctx)return;let n=this.ctx,s=n.currentTime,r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.7;let a=n.createGain();r.connect(a).connect(this.master),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.32,s+.02),a.gain.setValueAtTime(.32,s+e),a.gain.exponentialRampToValueAtTime(1e-4,s+e+.08);for(let o of t.horn){let l=n.createOscillator();l.type="square",l.frequency.value=o,l.connect(r),l.start(s),l.stop(s+e+.1)}}chime(t=[660,880,1320]){if(!this.ctx)return;let e=this.ctx;t.forEach((n,s)=>{let r=e.currentTime+s*.11,a=e.createOscillator();a.type="sine",a.frequency.value=n;let o=e.createGain();a.connect(o).connect(this.master),this._env(o,r,.01,.2,.5),a.start(r),a.stop(r+.6)})}starter(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sawtooth",s.frequency.value=160;let r=e.createOscillator();r.frequency.value=t.engine==="diesel"?9:11;let a=e.createGain();a.gain.value=40,r.connect(a).connect(s.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=900;let l=e.createGain();return s.connect(o).connect(l).connect(this.master),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.2,n+.05),l.gain.setValueAtTime(.2,n+.75),l.gain.exponentialRampToValueAtTime(1e-4,n+.9),s.start(n),r.start(n),s.stop(n+1),r.stop(n+1),()=>{l.gain.cancelScheduledValues(e.currentTime),l.gain.setTargetAtTime(0,e.currentTime,.02)}}blowoff(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="bandpass",s.Q.value=1.2,s.frequency.setValueAtTime(3500,e),s.frequency.exponentialRampToValueAtTime(900,e+.35);let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.01,.14,.35),n.start(e),n.stop(e+.5)}pop(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=700;let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.002,.5,.07),n.start(e),n.stop(e+.15)}crash(t){this.thunk(Math.min(1,.3+t)),this.click(600,Math.min(.6,t),.15)}update(t,e,n){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=.03,o=e.engine==="diesel",l=t.engine?Math.max(t.rpm,1):0,c=o?4:8,h=l/60*c/2,p=t.throttle??0,d=t.engine?1:0,f=Math.max(h,1);this.o1.frequency.setTargetAtTime(o?f:f*.5,r,a),this.o2.frequency.setTargetAtTime(f*(o?2:1),r,a),this.o3.frequency.setTargetAtTime(f*(o?.5:1.5),r,a),this.oSub.frequency.setTargetAtTime(f*.5,r,a),this.lfo.frequency.setTargetAtTime(o?f:f*.25,r,a),this.lfoGain.gain.setTargetAtTime(o?.25:.55-Math.min(.35,l/e.redline*.4),r,.1);let m=l/e.redline;this.engLP.frequency.setTargetAtTime(o?260+m*1600+p*900:220+m*2600+p*1600,r,a);let S=(o?.32:.42)*(.55+.45*p+m*.3);this.eng.gain.setTargetAtTime(S*d,r,.06),this.clatLfo.frequency.setTargetAtTime(f,r,a),this.clat.gain.setTargetAtTime(o?d*(.06+.05*p)*(1.2-m*.6):0,r,.05),this.clatBP.frequency.setTargetAtTime(2200+m*1400,r,.1),this.roarBP.frequency.setTargetAtTime(o?300+m*900:140+m*700,r,a),this.roar.gain.setTargetAtTime(d*p*(o?.06:.16)*(.4+m),r,.05);let u=o?Math.max(0,m-.25)*p:0;this.turbo.frequency.setTargetAtTime(2400+u*5200,r,.15),this.turboG.gain.setTargetAtTime(d*u*.035,r,.12),o&&this._lastLoad>.6&&p<.15&&m>.45&&this.blowoff(),!o&&this._lastLoad>.6&&p<.1&&m>.5&&Math.random()<.7&&(this.pop(),setTimeout(()=>this.pop(),90+Math.random()*120)),this._lastLoad=p;let g=Math.hypot(t.vx,t.vy);this.wind.gain.setTargetAtTime(Math.min(.32,g*g*18e-5),r,.2),this.windLP.frequency.setTargetAtTime(400+g*40,r,.2);let y=t.surface==="asphalt"?Math.max(0,t.slip-.35):0;this.sq.gain.setTargetAtTime(Math.min(.28,y*.4),r,.05),this.sqBP.frequency.setTargetAtTime(1100+Math.sin(r*13)*120+g*8,r,.02),this.gravel.gain.setTargetAtTime(t.surface!=="asphalt"&&t.surface!=="floor"?Math.min(.4,g*.03):0,r,.1),this.cabinFilter.frequency.setTargetAtTime(this.cabin?1500:18e3,r,.1)}};var pn=(i,t,e)=>Math.max(t,Math.min(e,i)),pi=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n),B_={mu:1,rough:0,name:"asphalt"};function k_(i,t){let e=t/i.redline;if(i.engine==="diesel"){let s=e<.2?.55+e*1.5:e<.37?.85+(e-.2)*.9:e<.72?1:1-(e-.72)*1.4;return i.torque*pn(s,.3,1)}let n=.62+.55*Math.sin(Math.min(1,e/.72)*Math.PI/2)-(e>.8?(e-.8)*1.2:0);return i.torque*pn(n,.4,1)}function id(i){let t=i.mass,e=i.wheelbase,n=e*(1-(i.frontWeight??.52)),s=e-n,r=i.cgHeight??.68,a=t*(e*e+i.width*i.width)/12*1.1;return{spec:i,m:t,a:n,b:s,h:r,Iz:a,x:0,z:0,yaw:0,vx:0,vy:0,r:0,steer:0,rpm:i.idle,gear:1,shiftT:0,engine:!1,starting:0,throttle:0,brake:0,ax:0,ay:0,slip:0,wheelSpin:0,wheelSpeed:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,distance:0,surface:"asphalt",hit:0,reverse:!1,lastShift:0,groundPitch:0,groundRoll:0}}function Hc(i,t,e,n,s,r){let a=Math.sin(s),o=Math.cos(s),l=t.wheelbase*.5,c=t.track*.5;return r.fl=i(e+l*a+c*o,n+l*o-c*a),r.fr=i(e+l*a-c*o,n+l*o+c*a),r.rl=i(e-l*a+c*o,n-l*o-c*a),r.rr=i(e-l*a-c*o,n-l*o+c*a),r}function sd(i,t,e,n){let s=i.spec,r=9.81,a=Math.hypot(i.vx,i.vy),o=e.tyreContact?.(i.x,i.z)??e.grip?.(i.x,i.z)??B_,l=e.tyreContact&&Hc(e.tyreContact,s,i.x,i.z,i.yaw,i.tyres??={}),c=l?(l.fl.mu+l.fr.mu)*.5:o.mu,h=l?(l.rl.mu+l.rr.mu)*.5:o.mu;if(l){let{fl:Y,fr:H,rl:ht,rr:mt}=l,Z=Math.atan2((Y.height+H.height-ht.height-mt.height)*.5,s.wheelbase),et=Math.atan2((Y.height+ht.height-H.height-mt.height)*.5,s.track);i.groundPitch=pi(i.groundPitch,Z,9,n),i.groundRoll=pi(i.groundRoll,et,9,n)}i.surface=o.name;let p=(s.steeringLock??.58)/(1+Math.pow(Math.abs(i.vx)/14,1.4)*.9);i.steer=pi(i.steer,t.steer*p,16,n);let d=t.brake,f=d>.15||t.handbrake,m=i.engine&&!f?t.throttle:0,S=i.vx,u=s.tyreR,g=s.gears,y=Math.abs(i.vx)/(2*Math.PI*u)*60;if(i.shiftT=Math.max(0,i.shiftT-n),!i.reverse&&i.shiftT===0){let Y=y*g[i.gear-1]*s.finalDrive;Y>s.shiftUp*(.75+.25*m)&&i.gear<g.length?(i.gear++,i.shiftT=s.engine==="v8"?.14:.22,i.lastShift=1):Y<s.shiftDown&&i.gear>1&&(i.gear--,i.shiftT=.2,i.lastShift=-1)}let T=(i.reverse?4.1:g[i.gear-1])*s.finalDrive,M=y*T,C=i.engine?Math.max(s.idle+m*(s.engine==="v8"?2100:1400)*pn(1-Math.abs(i.vx)/6,0,1),M):0,E=i.shiftT>0?C*.82:C;i.starting>0&&(i.starting-=n),i.rpm=pi(i.rpm,pn(E,0,s.redline*1.02),i.engine?9:2.5,n),i.rpm>s.redline&&(m*=.2);let v=(i.engine?k_(s,Math.max(i.rpm,s.idle))*m:0)*T*.92/u*(i.shiftT>0?.68:1);i.reverse&&(v=-v);let k=s.power*1e3/Math.max(2,Math.abs(i.vx));v=pn(v,-k*1.2,k*1.2);let A=Math.sign(i.vx)||0,L=d*i.m*r*.95+(t.handbrake?6e3:0),B=l?(l.fl.rough+l.fr.rough+l.rl.rough+l.rr.rough)*.25:o.rough,Q=i.m*r*(.013+B*.038),N=.5*1.2*(s.engine==="v8"?1.25:1.1)*i.vx*Math.abs(i.vx),G=i.engine&&m<.05?i.rpm/s.redline*900*A:0,K=i.m*r*Math.sin(i.groundPitch),q=v-N-G-K,ct=(L+Q)*A;Math.abs(i.vx)<.12&&Math.abs(v-K)<=L+Q?(i.vx=0,q=0):q-=ct;let rt=pn(i.m*r*i.b/(i.a+i.b)-i.m*i.ax*i.h/(i.a+i.b),i.m*r*.1,i.m*r*.9),ft=i.m*r-rt,dt=Math.max(1,c*rt),st=Math.max(1,h*ft),ut=f?.62:s.driveFront??.44,X=q,xt=pn(X*ut,-dt,dt),Tt=pn(X*(1-ut),-st,st);q=xt+Tt;let zt=Math.abs(v)-(dt+st);i.wheelSpin=pi(i.wheelSpin,pn(zt/(i.m*r),0,1)*5,8,n);let _t=Math.max(Math.abs(i.vx),.5)*(i.vx<0?-1:1),Bt=Math.atan2(i.vy+i.a*i.r,Math.abs(_t))-i.steer*Math.sign(_t),he=Math.atan2(i.vy-i.b*i.r,Math.abs(_t)),qt=8.2*rt,te=9.6*ft,ie=Math.sqrt(Math.max(0,dt**2-xt**2)),pt=Math.sqrt(Math.max(0,st**2-Tt**2))*(t.handbrake?.43:1),Ct=(Y,H,ht)=>ht>1?ht*Math.tanh(-H*Y/ht):0,vt=Ct(Bt,qt,ie),Ut=Ct(he,te,pt);i.slip=pn(Math.max(Math.abs(Bt),Math.abs(he))*Math.min(1,a/4)*3+i.wheelSpin*.6+(t.handbrake&&a>3?.5:0),0,1.5);let It=(q-vt*Math.sin(i.steer))/i.m+i.vy*i.r,ee=(vt*Math.cos(i.steer)+Ut)/i.m-i.vx*i.r,Lt=(i.a*vt*Math.cos(i.steer)-i.b*Ut)/i.Iz,jt=pn((a-1)/3,0,1),Gt=jt*jt*(3-2*jt);i.vx+=(Gt*It+(1-Gt)*(q/i.m))*n,i.vy=Gt*(i.vy+ee*n)+(1-Gt)*pi(i.vy,0,10,n);let ae=i.vx*Math.tan(i.steer)/(i.a+i.b);i.r=Gt*(i.r+Lt*n)+(1-Gt)*ae,i.ax=pi(i.ax,Gt*(It-i.vy*i.r)+(1-Gt)*(q/i.m),12,n),i.ay=pi(i.ay,Gt*(ee+i.vx*i.r)+(1-Gt)*i.vx*i.r,12,n),f&&(S===0||S*i.vx<0)&&(i.vx=0),i.vx=pn(i.vx,-6,s.top);let V=Math.sin(i.yaw),fe=Math.cos(i.yaw);if(i.x+=(i.vx*V+i.vy*fe)*n,i.z+=(i.vx*fe-i.vy*V)*n,i.yaw+=i.r*n,i.hit=Math.max(0,i.hit-n),e.collide){let Y=e.collide(i.x,i.z,i.yaw);if(Y){i.x+=Y.nx*Y.depth,i.z+=Y.nz*Y.depth;let H=i.vx*V+i.vy*fe,ht=i.vx*fe-i.vy*V,mt=(H-(Y.vx??0))*Y.nx+(ht-(Y.vz??0))*Y.nz;if(mt<0){let Z=-mt;i.hit=Math.min(1,Z/8);let et=Math.min(14,-1.06*mt),yt=(H+et*Y.nx)*.94,F=(ht+et*Y.nz)*.94;i.vx=yt*V+F*fe,i.vy=(yt*fe-F*V)*.5;let nt=Math.sin(i.yaw)*Y.nz-Math.cos(i.yaw)*Y.nx;i.r=i.r*.6+pn(nt*Z*.06,-.8,.8),i.lastImpact=Z}}}let Zt=38,de=7.5,Ft=30,xe=6,Kt=s.springRate??55,Vt=s.springDamping??9,R=pn(-i.ax*.0085,-.06,.06),_=pn(i.ay*(s.bodyRoll??.0072),-.078,.078);i.pitchV+=((R-i.pitch)*Zt-i.pitchV*de)*n,i.pitch+=i.pitchV*n,i.rollV+=((_-i.roll)*Ft-i.rollV*xe)*n,i.roll+=i.rollV*n,i.distance+=a*n;let D=B*Math.min(1,a/6)*(Math.sin(i.distance*13)*.24+Math.sin(i.distance*5.3)*.14);return i.heaveV+=(-i.heave*Kt-i.heaveV*Vt+D*60)*n,i.heave+=i.heaveV*n,i.wheelSpeed=i.vx/u+i.wheelSpin*30*Math.sign(m||1)*(i.reverse?-1:1),i.throttle=pi(i.throttle,m,10,n),i.brake=d,i}var Ui=(i,t,e)=>Math.max(t,Math.min(e,i)),Kn=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n),Xs=1/120,ml={throttle:0,brake:0,steer:0,handbrake:!1};function rd({bounds:i,circles:t=[],boxes:e=[],carR:n=.95,carHalf:s=1.7}){let r=e.map(f=>({...f,cs:Math.cos(f.rot||0),sn:Math.sin(f.rot||0),radius:Math.hypot(f.hx,f.hz)+n})),a=16,o=new Map,l=(f,m)=>f*73856093^m*19349663,c=(f,m,S,u)=>{for(let g=Math.floor((m-u)/a);g<=Math.floor((m+u)/a);g++)for(let y=Math.floor((S-u)/a);y<=Math.floor((S+u)/a);y++){let T=l(g,y),M=o.get(T);M||o.set(T,M={boxes:[],circles:[]}),f.r!==void 0&&!f.hx?M.circles.push(f):M.boxes.push(f)}};for(let f of r)c(f,f.x,f.z,f.radius);for(let f of t)c(f,f.x,f.z,f.r+n);let h={boxes:[],circles:[]},p=(f,m)=>o.get(l(Math.floor(f/a),Math.floor(m/a)))||h,d=s?[-s,0,s]:[0];return(f,m,S)=>{let u=Math.sin(S),g=Math.cos(S),y=null;for(let T of d){let M=f+u*T,C=m+g*T,E=(v,k,A)=>{A>0&&(!y||A>y.depth)&&(y={nx:v,nz:k,depth:A})};i&&(E(1,0,i.minX-(M-n)),E(-1,0,M+n-i.maxX),E(0,1,i.minZ-(C-n)),E(0,-1,C+n-i.maxZ));let x=p(M,C);for(let v of x.circles){let k=M-v.x,A=C-v.z,L=v.r+n;if(k*k+A*A>=L*L)continue;let B=Math.hypot(k,A);B>1e-4?E(k/B,A/B,L-B):E(-u,-g,L)}for(let v of x.boxes){let k=M-v.x,A=C-v.z;if(k*k+A*A>=v.radius*v.radius)continue;let L=k*v.cs+A*v.sn,B=-k*v.sn+A*v.cs,Q=Ui(L,-v.hx,v.hx),N=Ui(B,-v.hz,v.hz),G=L-Q,K=B-N,q=Math.hypot(G,K);if(q<n)if(q<1e-4){let ct=v.hx-Math.abs(L),rt=v.hz-Math.abs(B);ct<rt?(G=Math.sign(L)||1,K=0,q=-ct):(G=0,K=Math.sign(B)||1,q=-rt);let ft=G*v.cs-K*v.sn,dt=G*v.sn+K*v.cs;E(ft,dt,n-q)}else{let ct=G/q,rt=K/q;E(ct*v.cs-rt*v.sn,ct*v.sn+rt*v.cs,n-q)}}}return y}}var gl=class{constructor({THREE:t,scene:e,camera:n,dom:s,vehicle:r,audio:a,env:o={},onEvent:l=()=>{}}){Object.assign(this,{THREE:t,scene:e,camera:n,dom:s,audio:a,env:o,onEvent:l}),this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)"),this.enabled=!1,this.camMode="chase",this.camModes=["chase","far","cabin","hood","cine","drone"],this.input={...ml},this.keys=new Set,this.touch={...ml},this.accumulator=0,this.lastPose={x:0,z:0,yaw:0},this.effectsTime=0,this.camPos=new t.Vector3,this.camLook=new t.Vector3,this.fov=n.fov,this.shake=0,this.orbitYaw=0,this.orbitPitch=0,this.dragging=!1,this.cine=null,this._tmp=new t.Vector3,this._tmp2=new t.Vector3,this._q=new t.Quaternion,this.cameraWant=new t.Vector3,this.cameraTarget=new t.Vector3,this.cameraHeading=new t.Vector3,this.cabinDirection=new t.Vector3,this.cabinRotation=new t.Quaternion,this.renderTyres={},this.markMatrix=new t.Matrix4,this.markScale=new t.Vector3(1,1,1),this.setVehicle(r),this._initFx(),this._bind()}setVehicle(t){let e=this.dyn?{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}:null;this.dyn&&(this.toggleEngine(!1),this.vehicle.setCabinView(!1)),this.clearInput(),this.vehicle=t,this.dyn=id(t.spec),e&&Object.assign(this.dyn,e),Object.assign(this.lastPose,{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}),this.audio&&this.audio.setKind(t.spec.engine)}place(t,e,n=0){this.clearInput(),Object.assign(this.dyn,{x:t,z:e,yaw:n,vx:0,vy:0,r:0,steer:0,slip:0,wheelSpin:0,wheelSpeed:0,ax:0,ay:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,groundPitch:0,groundRoll:0}),Object.assign(this.lastPose,{x:t,z:e,yaw:n}),this._sync(0),this.snapCamera()}clearInput(){this.keys.clear(),Object.assign(this.touch,ml),Object.assign(this.input,ml),this.dragging=!1,this.accumulator=0,this._holdT=0,this.resetTouch?.()}setEnabled(t){this.clearInput(),this.enabled=t,t?this.dom.focus({preventScroll:!0}):(this.vehicle.setCabinView(!1),this.toggleEngine(!1),Object.assign(this.dyn,{vx:0,vy:0,r:0,slip:0,throttle:0}),this.audio?.update(this.dyn,this.vehicle.spec,0))}_bind(){let t=s=>{if(!this.enabled||document.hidden||s.altKey||s.ctrlKey||s.metaKey||s.defaultPrevented||s.target?.closest?.("button, a, input, select, textarea, summary, [contenteditable]"))return;let r=s.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(r)&&s.preventDefault(),!s.repeat&&(this.keys.add(r),r==="h"?this.horn():r==="l"?this.toggle("head"):r==="q"?this.toggle("left"):r==="e"?this.toggle("right"):r==="x"?this.toggle("hazard"):r==="c"?this.cycleCamera():r==="r"?this.recover():r==="v"?this.shiftDirection():r==="i"&&this.toggleEngine())},e=s=>this.keys.delete(s.key.toLowerCase()),n=()=>{this.audio?.muted||this.audio?.unlock().catch(()=>{})};this.dom.addEventListener("pointerdown",n,{passive:!0}),addEventListener("keydown",t),addEventListener("keyup",e),addEventListener("blur",()=>this.clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearInput()}),this.dom.addEventListener("pointerdown",s=>{this.enabled&&(this.dragging=!0,this._px=s.clientX,this._py=s.clientY,this._lookT=0)}),addEventListener("pointerup",()=>{this.dragging=!1}),addEventListener("pointercancel",()=>{this.dragging=!1}),addEventListener("pointermove",s=>{!this.enabled||!this.dragging||(this.orbitYaw=Ui(this.orbitYaw-(s.clientX-this._px)*.006,-Math.PI,Math.PI),this.orbitPitch=Ui(this.orbitPitch+(s.clientY-this._py)*.004,-.3,this.camMode==="cabin"?.42:.9),this._px=s.clientX,this._py=s.clientY,this._lookT=0)})}setTouch(t){Object.assign(this.touch,t)}_readInput(){let t=this.keys,e=this.touch,n=t.has("w")||t.has("arrowup")?1:e.throttle,s=t.has("s")||t.has("arrowdown")?1:e.brake,r=(t.has("a")||t.has("arrowleft")?1:0)-(t.has("d")||t.has("arrowright")?1:0);r||(r=e.steer);let a=t.has(" ")||e.handbrake,o=navigator.getGamepads?navigator.getGamepads():[];for(let l of o)if(l){let c=l.axes[0]||0;Math.abs(c)>.12&&(r=-c),l.buttons[7]&&l.buttons[7].value>.05&&(n=l.buttons[7].value),l.buttons[6]&&l.buttons[6].value>.05&&(s=l.buttons[6].value),l.buttons[0]&&l.buttons[0].pressed&&(a=!0),l.buttons[3]&&l.buttons[3].pressed&&!this._padY&&this.cycleCamera(),this._padY=l.buttons[3]&&l.buttons[3].pressed,l.buttons[1]&&l.buttons[1].pressed&&!this._padB&&this.horn(),this._padB=l.buttons[1]&&l.buttons[1].pressed,l.buttons[2]?.pressed&&!this._padX&&this.shiftDirection(),this._padX=l.buttons[2]?.pressed;break}return{thr:n,brk:s,st:r,hb:a}}_smoothInput({thr:t,brk:e,st:n,hb:s},r){let a=this.input;if(this.dyn.reverse&&this.env.autoShift!==!1){let l=t;t=e,e=l}if(a.throttle=Kn(a.throttle,t,t>a.throttle?11:14,r),a.brake=Kn(a.brake,e,16,r),Math.abs(n)>0&&Math.abs(n)<.999)a.steer=Kn(a.steer,n,18,r);else{let l=n===0?6.5:a.steer*n<0?9:3.6;a.steer+=Ui(n-a.steer,-l*r,l*r)}a.handbrake=s}toggle(t){let e=this.vehicle.state;return t==="left"?(e.left=!e.left,e.right=!1):t==="right"?(e.right=!e.right,e.left=!1):e[t]=!e[t],this.audio&&this.audio.click(2e3,.1,.02),this.onEvent("lights",{...e}),e[t]}horn(){this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>this.audio.horn(this.vehicle.spec,.45)).catch(()=>{});let t=performance.now();this._horns=(this._horns||[]).filter(e=>t-e<1600),this._horns.push(t),this.onEvent("horn",this._horns.length)}toggleEngine(t){let e=this.dyn,n=t??!(e.engine||this.startTimer);if(n&&(e.engine||this.startTimer))return!0;if(!n)return clearTimeout(this.startTimer),this.startTimer=null,this.stopStarter?.(),this.stopStarter=null,e.engine=!1,e.starting=0,this.audio?.update(e,this.vehicle.spec,0),this.onEvent("engine","off"),!1;let s=this.vehicle.spec;this.startTimer=setTimeout(()=>{this.startTimer=null,e.engine=!0,e.starting=0,e.rpm=s.idle*1.4,this.onEvent("engine","running")},650),e.starting=.65;let r=this.startTimer;return this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>{this.startTimer===r&&(this.stopStarter=this.audio.starter(s))}).catch(()=>{}),this.onEvent("engine","starting"),n}_autoShift({thr:t,brk:e},n){let s=this.dyn,r=Math.hypot(s.vx,s.vy)<.3&&s.engine,a=!s.reverse&&e>.5&&t<.05,o=s.reverse&&t>.5&&e<.05;this._holdT=r&&(a||o)?(this._holdT||0)+n:0,this._holdT>.35&&(this._holdT=0,s.reverse=!s.reverse,s.gear=1,this.input.throttle=0,this.input.brake=0,this.onEvent("direction",s.reverse))}shiftDirection(){return Math.hypot(this.dyn.vx,this.dyn.vy)>.4||this.input.throttle>.08?(this.onEvent("shift-blocked"),!1):(this.clearInput(),this.dyn.reverse=!this.dyn.reverse,this.dyn.gear=1,this.onEvent("direction",this.dyn.reverse),!0)}cycleCamera(t){let e=this.camModes.indexOf(this.camMode),n=this.camModes[(e+1)%this.camModes.length],s=this.camMode;return this.camMode=t||(n==="cine"&&this.reducedMotion.matches?"drone":n),this.cine=null,this.orbitYaw=0,this.orbitPitch=0,(["cabin","hood","cine"].includes(s)||["cabin","hood","cine"].includes(this.camMode))&&this.snapCamera(),this.vehicle.setCabinView(this.camMode==="cabin"),this.audio&&(this.audio.cabin=this.camMode==="cabin"?1:0),this.onEvent("camera",this.camMode),this.camMode}recover(){let t=this.dyn;if(t.vx=t.vy=t.r=0,this.env.respawn){let e=this.env.respawn(t);e&&this.place(e.x,e.z,e.yaw)}}_initFx(){let t=this.THREE,e=260,n=new t.BufferGeometry;this.pPos=new Float32Array(e*3),this.pVel=new Float32Array(e*3),this.pLife=new Float32Array(e),n.setAttribute("position",new t.BufferAttribute(this.pPos,3));let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64),this.dustMat=new t.PointsMaterial({size:1.6,map:new t.CanvasTexture(s),transparent:!0,depthWrite:!1,opacity:.55,color:11901560,sizeAttenuation:!0}),this.dust=new t.Points(n,this.dustMat),this.dust.frustumCulled=!1,this.dust.visible=!1,this.scene.add(this.dust);for(let h=0;h<e;h++)this.pPos[h*3+1]=-100;this.pIdx=0;let o=320,l=new t.PlaneGeometry(.26,.5);l.rotateX(-Math.PI/2),this.skid=new t.InstancedMesh(l,new t.MeshBasicMaterial({color:657930,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),o),this.skid.frustumCulled=!1,this.skidI=0;let c=new t.Matrix4().makeTranslation(0,-100,0);for(let h=0;h<o;h++)this.skid.setMatrixAt(h,c);this.scene.add(this.skid)}_emit(t,e,n){let s=this.pLife.length;for(let r=0;r<n;r++){let a=this.pIdx=(this.pIdx+1)%s;this.pPos[a*3]=t.x+(Math.random()-.5)*.3,this.pPos[a*3+1]=t.y+.15,this.pPos[a*3+2]=t.z+(Math.random()-.5)*.3,this.pVel[a*3]=(Math.random()-.5)*1.2,this.pVel[a*3+1]=.5+Math.random()*.9,this.pVel[a*3+2]=(Math.random()-.5)*1.2,this.pLife[a]=1.6+Math.random()}this.dustMat.color.set(e)}_fx(t){let e=this.pLife.length,n=!1,s=!1;for(let r=0;r<e;r++)this.pLife[r]<=0||(n=!0,this.pLife[r]-=t,this.pPos[r*3]+=this.pVel[r*3]*t,this.pPos[r*3+1]+=this.pVel[r*3+1]*t,this.pPos[r*3+2]+=this.pVel[r*3+2]*t,this.pVel[r*3+1]*=Math.exp(-1.8*t),this.pLife[r]<=0?this.pPos[r*3+1]=-100:s=!0);n&&(this.dust.geometry.attributes.position.needsUpdate=!0),this.dust.visible=s}update(t){if(!this.enabled||document.hidden)return;t=Math.min(t,.1);let e=this.dyn,n=this.vehicle,s=this._readInput();for(this.accumulator+=t;this.accumulator>=Xs;)this.env.autoShift!==!1&&this._autoShift(s,Xs),this._smoothInput(s,Xs),Object.assign(this.lastPose,{x:e.x,z:e.z,yaw:e.yaw}),sd(e,this.input,this.env,Xs),this.accumulator-=Xs;e.lastImpact&&(this.audio&&this.audio.crash(e.lastImpact/10),this.shake=Math.min(1,e.lastImpact/8),this.onEvent("impact",e.lastImpact),e.lastImpact=0),e.lastShift&&(this.onEvent("shift",e.gear),e.lastShift=0),n.state.brake=this.input.brake>.1||this.input.handbrake,n.state.reverse=e.reverse,this._sync(t,this.accumulator/Xs);let r=n.update(t,{engine:e.engine,night:this.env.night});r!==null&&r!==this._lastBlink&&this.audio&&this.audio.tick(r),this._lastBlink=r,this.camMode==="cabin"&&n.drawCluster(Math.abs(e.vx)*3.6,e.rpm,e.reverse?"R":e.engine?"D"+e.gear:"P"),this.audio&&this.audio.update(e,n.spec,t);let a=Math.hypot(e.vx,e.vy),o=e.surface!=="asphalt"&&e.surface!=="floor";this.effectsTime+=t;let l=o&&a>3||e.slip>.7||e.wheelSpin>.4,c=!o&&(e.slip>.75||e.wheelSpin>.5)&&a>2;if(this.effectsTime>=1/30){if(this.effectsTime%=1/30,c||l)for(let h of n.wheels){if(h.front)continue;let p=h.pivot.getWorldPosition(this._tmp2);if(l&&this._emit(p,o?this.env.dustColor||11569762:14211288,o?Math.ceil(a/9):1),c){p.y=(this.env.groundY?.(p.x,p.z)??0)+.012;let d=this.markMatrix.compose(p,this._q.setFromAxisAngle(this.cameraHeading.set(0,1,0),e.yaw),this.markScale);this.skid.setMatrixAt(this.skidI=(this.skidI+1)%this.skid.count,d)}}c&&(this.skid.instanceMatrix.needsUpdate=!0)}this._fx(t),this._camera(t)}_sync(t,e=1){let n=this.dyn,s=this.vehicle,r=this.lastPose.x+(n.x-this.lastPose.x)*e,a=this.lastPose.z+(n.z-this.lastPose.z)*e,o=this.lastPose.yaw+(n.yaw-this.lastPose.yaw)*e,l=this.env.groundY,c=this.env.tyreContact&&Hc(this.env.tyreContact,s.spec,r,a,o,this.renderTyres),h=c?(c.fl.height+c.fr.height+c.rl.height+c.rr.height)*.25:l?.(r,a)??0;this.rideHeight=c&&t?Kn(this.rideHeight??h,h,20,t):h,s.root.position.set(r,this.rideHeight,a),s.root.rotation.set(0,o,0),s.body.rotation.x=n.roll+n.groundRoll,s.body.rotation.z=n.groundPitch-n.pitch,s.body.position.y=n.heave*.6;for(let p of s.wheels){if(p.spin.rotation.z-=n.wheelSpeed*t,p.front){let S=s.spec.wheelbase/Math.tan(n.steer);p.pivot.rotation.y=Math.atan(s.spec.wheelbase/(S+p.z))}let f=(c?c[p.front?p.side<0?"fl":"fr":p.side<0?"rl":"rr"].height-this.rideHeight:0)-n.roll*p.z*.5+(p.front?-1:1)*n.pitch*.4+n.heave*.3,m=p.baseY+Ui(f,-.16,.19);p.pivot.position.y=t?Kn(p.pivot.position.y,m,22,t):m}s.steer.rotation.x=-n.steer*7}snapCamera(){this._camInit=!1,this.cameraArm=1}_camera(t){let e=this.THREE,n=this.dyn,s=this.vehicle,r=this.camera,a=this._tmp.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),o=s.root.position,l=Math.hypot(n.vx,n.vy);this.dragging||(this._lookT=(this._lookT||0)+t,this._lookT>1.2&&(this.orbitYaw=Kn(this.orbitYaw,0,2.5,t),this.orbitPitch=Kn(this.orbitPitch,0,2.5,t)));let c=this.cameraWant,h=this.cameraTarget,p=55,d=6,f=.1,m=s.root.rotation.y+this.orbitYaw,S=this.cameraHeading.set(Math.sin(m),0,Math.cos(m)),u=s.dims.length;switch(this.camMode){case"chase":case"far":{let M=this.camMode==="far",C=(M?u*1.9:u*1.25)+l*.05,E=(M?3.4:2.05)+this.orbitPitch*4,x=l>4?Math.atan2(n.vx*Math.sin(n.yaw)+n.vy*Math.cos(n.yaw),n.vx*Math.cos(n.yaw)-n.vy*Math.sin(n.yaw)):n.yaw,v=n.vx>2?x+(m-n.yaw):m;c.set(o.x-Math.sin(v)*C,o.y+E,o.z-Math.cos(v)*C),h.copy(o).addScaledVector(a,2.5+l*.06),h.y+=1.05,p=52+Math.min(16,l*.38),d=4.5;break}case"cabin":{s.body.localToWorld(c.copy(s.driverEye));let M=this.reducedMotion.matches,C=Ui(this.orbitYaw,-1.22,1.22)+(M?0:n.steer*.14),E=-.14-this.orbitPitch*.7;s.body.getWorldQuaternion(this.cabinRotation),this.cabinDirection.set(Math.cos(C),E,-Math.sin(C)).applyQuaternion(this.cabinRotation),h.copy(c).addScaledVector(this.cabinDirection,10),d=34,f=.018,p=r.aspect<.9?70:62+Math.min(3,l*.07);break}case"hood":{let M=new e.Vector3(s.spec.wheelbase/2-.3,s.spec.roof+.1,0);s.body.localToWorld(M),c.copy(M),d=60,f=.05,h.copy(M).addScaledVector(S,12),h.y-=.9,p=62+Math.min(10,l*.2);break}case"drone":{c.set(o.x-a.x*18,o.y+34,o.z-a.z*18),h.copy(o).addScaledVector(a,8),p=50,d=2;break}case"cine":{if(!this.cine||this.cine.t>7||o.distanceTo(this.cine.p)>55){let M=Math.random()<.5?-1:1,C=18+Math.random()*20,E=new e.Vector3(a.z,0,-a.x),x=o.clone().addScaledVector(a,C).addScaledVector(E,M*(6+Math.random()*6));x.y=(this.env.groundY?this.env.groundY(x.x,x.z):0)+.6+Math.random()*2.5,this.env.cineOk&&!this.env.cineOk(x)&&x.copy(o).addScaledVector(a,-10).setY(o.y+3),this.cine={p:x,t:0,fov:28+Math.random()*18},this.camPos.copy(x),this._camInit=!0}this.cine.t+=t,c.copy(this.cine.p),h.copy(o),h.y+=.9,p=this.cine.fov,d=1e3;break}}this._camInit||(this.camPos.copy(c),this.camLook.copy(h),this._camInit=!0);let g=1-Math.exp(-d*t);if(this.camPos.lerp(c,g),this.camLook.lerp(h,Math.min(1,g*1.6)),this.env.groundY&&this.camMode!=="cabin"&&(this.camPos.y=Math.max(this.camPos.y,this.env.groundY(this.camPos.x,this.camPos.z)+.35)),r.position.copy(this.camPos),this.env.cameraCollision&&(this.camMode==="chase"||this.camMode==="far")){let M=E=>{let x=this._tmp2.copy(o).lerp(this.camPos,E);return this.env.cameraCollision(x.x,x.z,m)},C=1;for(let E=2;E<=14;E++){if(!M(E/14))continue;let x=(E-1)/14,v=E/14;for(let k=0;k<4;k++){let A=(x+v)*.5;M(A)?v=A:x=A}C=Math.max(.14,x-.02);break}this.cameraArm=Math.min(C,Kn(this.cameraArm??1,C,6,t)),r.position.copy(o).lerp(this.camPos,this.cameraArm),this.cameraArm<.8&&(r.position.y=Math.max(r.position.y,o.y+s.dims.height+.25))}this.shake=Kn(this.shake,0,3,t);let y=(this.camMode==="cabin"||this.camMode==="hood"?.6:1)*(Math.min(1,l/45)**2*.012+(n.surface!=="asphalt"&&n.surface!=="floor"?Math.min(1,l/15)*.02:0)+this.shake*.09);this._shakeT=(this._shakeT||0)+t*(8+l*.6);let T=(M,C)=>Math.sin(this._shakeT*M)*.6+Math.sin(this._shakeT*C+1.7)*.4;!["cine","cabin"].includes(this.camMode)&&!this.reducedMotion.matches&&r.position.add(this._tmp2.set(T(1.3,2.9)*y*.5,T(1.7,3.7)*y*.5,T(1.1,2.3)*y*.5)),r.lookAt(this.camLook),this.camMode==="cabin"&&!this.reducedMotion.matches&&r.rotateZ(-n.roll*.36),this.fov=Kn(this.fov,p,3,t),(Math.abs(r.fov-this.fov)>.01||r.near!==f)&&(r.fov=this.fov,r.near=f,r.updateProjectionMatrix())}hud(){let t=this.dyn;return{kmh:Math.abs(t.vx)*3.6,rpm:t.rpm,redline:this.vehicle.spec.redline,gear:t.reverse?"R":t.engine?"D"+t.gear:"P",engine:t.engine,surface:t.surface,cam:this.camMode,lights:this.vehicle.state}}},ad=`
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
`;function od(i){let t=document.createElement("div");t.className="pkm-hud",t.hidden=!0,t.innerHTML=`<div><div class="pkm-hud__spd" data-spd>0</div><div class="pkm-hud__unit">km/h</div></div>
    <div class="pkm-hud__gear" data-gear>P</div>
    <div class="pkm-hud__rev"><div class="pkm-hud__ind"><span class="amber" data-l>\u25C0</span><span class="blue" data-h>\u25C9</span><span data-e>\u23FB</span><span class="amber" data-r>\u25B6</span></div>
    <div class="pkm-hud__bar" style="margin-top:8px"><i data-rpm></i></div><div class="pkm-hud__meta"><span data-rpmt>0 rpm</span><span data-surf>Asphalt</span></div></div>`,i.appendChild(t);let[e,n,s,r,a,o,l,c,h]=t.querySelectorAll("[data-spd],[data-gear],[data-l],[data-h],[data-e],[data-r],[data-rpm],[data-rpmt],[data-surf]"),p=(m,S)=>{m.textContent!==S&&(m.textContent=S)},d=0,f=.1;return{el:t,update(m,S=.016){if(d+=S,f+=S,f<.05)return;f%=.05,p(e,String(Math.round(m.kmh))),p(n,m.gear),l.style.width=Math.min(100,m.rpm/m.redline*100).toFixed(1)+"%",p(c,Math.round(m.rpm/10)*10+" rpm"),p(h,{asphalt:"Asphalt",grass:"Grass",dirt:"Laterite",floor:"Showroom floor",kerb:"Kerb",pavers:"Pavers",drain:"Drain"}[m.surface]||m.surface);let u=d%.74<.4,g=m.lights;s.classList.toggle("on",(g.left||g.hazard)&&u),o.classList.toggle("on",(g.right||g.hazard)&&u),r.classList.toggle("on",!!g.head),a.classList.toggle("on",m.engine)}}}function ld(i,t){let e=document.createElement("div");e.className="pkm-touch",e.innerHTML=`<div class="pkm-steer" role="slider" aria-label="Steering: slide left or right" aria-valuemin="-1" aria-valuemax="1" aria-valuenow="0"><i></i><span>\u25C0 steer \u25B6</span></div>
    <div><button data-k="brake" class="tall">Brake</button><button data-k="gas" class="tall" aria-label="Accelerate">Go</button></div>`,i.appendChild(e);let n={steer:0,gas:0,brake:0},s=()=>t.setTouch({steer:n.steer,throttle:n.gas,brake:n.brake}),r=[...e.querySelectorAll("button")],a=e.querySelector(".pkm-steer"),o=a.querySelector("i"),l=null,c=p=>{n.steer=Math.abs(p)<.06?0:Ui(p,-.998,.998),o.style.transform=`translateX(${-n.steer*44}px)`,a.setAttribute("aria-valuenow",(-n.steer).toFixed(2)),s()};a.addEventListener("pointerdown",p=>{p.preventDefault(),a.setPointerCapture(p.pointerId),l=p.clientX,a.classList.add("down")}),a.addEventListener("pointermove",p=>{l!==null&&c(-(p.clientX-l)/60)});let h=()=>{l=null,a.classList.remove("down"),c(0)};a.addEventListener("pointerup",h),a.addEventListener("pointercancel",h),a.addEventListener("lostpointercapture",h),t.resetTouch=()=>{for(let p of r)n[p.dataset.k]=0,p.classList.remove("down");l=null,n.steer=0,o.style.transform="",a.classList.remove("down")};for(let p of r){let d=p.dataset.k,f=S=>{S.preventDefault(),p.setPointerCapture(S.pointerId),n[d]=1,p.classList.add("down"),s()},m=()=>{n[d]=0,p.classList.remove("down"),s()};p.addEventListener("pointerdown",f),p.addEventListener("lostpointercapture",m),p.addEventListener("pointerup",m),p.addEventListener("pointercancel",m)}return e}var rs=class i extends re{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=e.color!==void 0?new $t(e.color):new $t(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new un,p=new O,d=new O,f=new O,m=new Me,S=new O(0,0,-1),u=new De,g=new O,y=new O,T=new De,M=new Me,C=new Ge(r,a,{samples:c,type:Xe}),E=new ze({name:l.name!==void 0?l.name:"unspecified",uniforms:wn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=C.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=M,this.material=E,this.onBeforeRender=function(x,v,k){let A=this.getReflectionCamera(k);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(k.matrixWorld),m.extractRotation(n.matrixWorld),p.set(0,0,1),p.applyMatrix4(m),g.subVectors(d,f),g.dot(p)>0===!0&&this.forceUpdate===!1)return;g.reflect(p).negate(),g.add(d),m.extractRotation(k.matrixWorld),S.set(0,0,-1),S.applyMatrix4(m),S.add(f),y.subVectors(d,S),y.reflect(p).negate(),y.add(d),A.position.copy(g),A.up.set(0,1,0),A.up.applyMatrix4(m),A.up.reflect(p),A.lookAt(y),A.far=k.far,A.updateMatrixWorld(),A.projectionMatrix.copy(k.projectionMatrix),A.projectionMatrix.elements[8]*=-1,A.projectionMatrix.elements[12]*=-1,M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(A.projectionMatrix),M.multiply(A.matrixWorldInverse),M.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(p,d),h.applyMatrix4(A.matrixWorldInverse),u.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let B=A.projectionMatrix;A.isOrthographicCamera?(T.x=(Math.sign(u.x)+B.elements[8])/B.elements[0],T.y=(Math.sign(u.y)+B.elements[9])/B.elements[5],T.z=-k.far,T.w=1):(T.x=(Math.sign(u.x)+B.elements[8])/B.elements[0],T.y=(Math.sign(u.y)+B.elements[9])/B.elements[5],T.z=-1,T.w=(1+B.elements[10])/B.elements[14]),u.multiplyScalar(2/u.dot(T)),B.elements[2]=u.x,B.elements[6]=u.y,A.isOrthographicCamera?(B.elements[10]=u.z-o,B.elements[14]=u.w-1):(B.elements[10]=u.z+1-o,B.elements[14]=u.w),n.visible=!1;let Q=x.getRenderTarget(),N=x.xr.enabled,G=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(C),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(v,A),x.xr.enabled=N,x.shadowMap.autoUpdate=G,x.setRenderTarget(Q);let K=k.viewport;K!==void 0&&x.state.viewport(K),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let v=this._reflectionCameras.get(x);return v===void 0&&(v=x.clone(),this._reflectionCameras.set(x,v)),v}}};rs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var qs=class i extends re{constructor(){let t=i.SkyShader,e=new ze({name:t.name,uniforms:wn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:on,depthWrite:!1});super(new We(1,1,1),e),this.isSky=!0}};qs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new O},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var En=(i,t,e,n=!0)=>{let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Xi(s);return n&&(r.colorSpace=rn),r.anisotropy=8,r},cd=i=>()=>((i=Math.imul(i^i>>>15,2246822519)+2654435769|0)>>>0)/4294967296;function aa(i,t,e,n,s=[1,1,1],r=1){let a=i.getImageData(0,0,t,e),o=a.data,l=r>>>0;for(let c=0;c<o.length;c+=4){l=Math.imul(l,1664525)+1013904223>>>0;let h=((l>>>8)/16777216-.5)*n;o[c]+=h*s[0],o[c+1]+=h*s[1],o[c+2]+=h*s[2]}i.putImageData(a,0,0)}var _n='"Inter", ui-sans-serif, system-ui, sans-serif';function hd({quality:i,reflections:t}){let e=new $e;e.name="showroom";let n=[],s=cd(7),r=En(1024,1024,(st,ut,X)=>{st.fillStyle="#1e1e1e",st.fillRect(0,0,ut,X),aa(st,ut,X,14,[1,1,1],7),st.strokeStyle="#1b1b1b",st.lineWidth=3;for(let xt=0;xt<=4;xt++)st.beginPath(),st.moveTo(xt*ut/4,0),st.lineTo(xt*ut/4,X),st.stroke(),st.beginPath(),st.moveTo(0,xt*X/4),st.lineTo(ut,xt*X/4),st.stroke()});r.wrapS=r.wrapT=Pn,r.repeat.set(10,10);let a=new re(new Ue(40,40),new Ti({map:r,roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.45}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,e.add(a);let o=null;if(t){let st={...rs.ReflectorShader,fragmentShader:rs.ReflectorShader.fragmentShader.replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor = vec4( base.rgb * color, 1.0 );")};o=new rs(new Ue(40,40),{textureWidth:512,textureHeight:512,multisample:0,color:1710618,shader:st,clipBias:.003}),o.material.transparent=!0,o.material.blending=ji,o.material.depthWrite=!1,o.rotation.x=-Math.PI/2,o.position.y=.002,o.renderOrder=1,e.add(o)}let l=new Ae({color:"#141414",roughness:.92}),c=(st,ut,X,xt,Tt,zt,_t)=>{let Bt=new re(new We(st,ut,X),_t);return Bt.position.set(xt,Tt,zt),Bt.receiveShadow=!0,e.add(Bt),Bt};c(40,10,.4,0,5,-14,l),c(.4,10,40,-16,5,0,l),c(.4,10,40,16,5,0,l),c(40,10,.4,0,5,16,l),c(40,.3,40,0,9.6,0,new Ae({color:"#0b0b0b",roughness:1}));let h=new Ae({color:"#6b4a2f",roughness:.6}),p=new oi(new We(.09,7.6,.12),h,120),d=new Me;for(let st=0;st<120;st++)d.makeTranslation(-11.9+st*.2,3.8,-13.72),p.setMatrixAt(st,d);p.receiveShadow=!0,e.add(p);let f=En(1600,560,(st,ut,X)=>{st.clearRect(0,0,ut,X),st.fillStyle="#fff",st.textAlign="center",st.textBaseline="middle",st.font=`800 360px ${_n}`,"letterSpacing"in st&&(st.letterSpacing="-18px"),st.fillText("PKM",ut/2,X*.42),st.font=`600 58px ${_n}`,"letterSpacing"in st&&(st.letterSpacing="26px"),st.fillText("DRIVE  STUDIO  \xB7  KUMASI",ut/2,X*.86)}),m=new Ae({color:"#000",emissive:"#F2E6CF",emissiveMap:f,emissiveIntensity:2.4,transparent:!0,alphaMap:f,roughness:1});f.colorSpace=Vn;let S=new re(new Ue(9.6,3.36),m);S.position.set(0,5.5,-13.55),S.userData.click="sign",e.add(S),n.push(S);let u=new re(new Ue(11,4.2),new In({color:"#BBA783",transparent:!0,opacity:.08,depthWrite:!1}));u.position.set(0,5.5,-13.62),e.add(u);let g=new Ae({color:"#fff",emissive:"#fff8ee",emissiveIntensity:1.4}),y=[];for(let st of[-6,-3,0,3,6]){let ut=c(.18,.05,18,st,9.3,0,g);y.push(ut)}let T=new re(new wi(4.6,.06,8,96),g);T.rotation.x=Math.PI/2,T.position.y=9.2,e.add(T);let M=new $e;e.add(M);let C=new re(new Ln(4.2,4.25,.1,96),new Ti({color:"#151515",roughness:.35,metalness:.3,clearcoat:.6}));C.position.y=.05,C.receiveShadow=!0,M.add(C);let E=new re(new wi(4.26,.018,6,160),new Ae({color:"#BBA783",emissive:"#BBA783",emissiveIntensity:1.6}));E.rotation.x=Math.PI/2,E.position.y=.06,M.add(E);let x=new $e;x.position.set(9.5,0,-11),e.add(x);let v=new re(new Ln(.42,.32,.8,32),new Ae({color:"#c9bba3",roughness:.7}));v.position.y=.4,v.castShadow=!0,x.add(v);let k=new Ae({color:"#4f7a3e",roughness:.6,side:tn}),A=[];for(let st=0;st<9;st++){let ut=new re(new Zi(.5,12,8,0,Math.PI*2,0,Math.PI/2),k);ut.scale.set(.35,1.6,.07);let X=st/9*Math.PI*2;ut.position.set(Math.cos(X)*.12,.85,Math.sin(X)*.12),ut.rotation.set(Math.sin(X)*.5,-X,Math.cos(X)*.5),ut.castShadow=!0,x.add(ut),A.push(ut)}x.traverse(st=>{st.userData.click="plant"}),n.push(...x.children);let L=new re(new Ue(2.2,3),new Ae({roughness:.5,map:En(440,600,(st,ut,X)=>{st.fillStyle="#0f0f0f",st.fillRect(0,0,ut,X);let xt=st.createLinearGradient(0,0,ut,X);xt.addColorStop(0,"#BBA783"),xt.addColorStop(1,"#93AE7C"),st.fillStyle=xt,st.fillRect(30,30,ut-60,X*.55),st.fillStyle="#080808",st.font=`800 92px ${_n}`,st.fillText("Iconka",50,X*.42),st.font=`500 30px ${_n}`,st.fillText("Designs \xB7 since 2022",52,X*.5),st.fillStyle="#F2F0EA",st.font=`700 34px ${_n}`,st.fillText("Design work \u2192",40,X*.75),st.fillStyle="#9A948B",st.font=`400 24px ${_n}`,st.fillText("Brands, posters, menus",40,X*.82)})}));L.position.set(-15.75,3.4,-5),L.rotation.y=Math.PI/2,L.userData.click="poster",e.add(L),n.push(L);let B=c(.08,3.2,2.4,-15.8,3.4,-5,new Ae({color:"#BBA783",metalness:.8,roughness:.3})),Q=new re(new Ue(3.6,5),new Ae({roughness:.6,emissive:"#ffffff",emissiveIntensity:.9,emissiveMap:En(360,500,(st,ut,X)=>{let xt=st.createLinearGradient(0,0,0,X);xt.addColorStop(0,"#f0b26b"),xt.addColorStop(.55,"#d9774a"),xt.addColorStop(.56,"#3d4a3c"),xt.addColorStop(1,"#232a22"),st.fillStyle=xt,st.fillRect(0,0,ut,X),st.fillStyle="#1b1f1a";for(let Tt=0;Tt<9;Tt++){let zt=20+Tt*38,_t=40+Tt*37%70;st.fillRect(zt,X*.56-_t,26,_t)}st.fillStyle="#F2F0EA",st.font=`800 46px ${_n}`,st.fillText("Accra 3D",26,70),st.font=`500 22px ${_n}`,st.fillText("Drive Liberation Road \u2192",28,104)})}));Q.position.set(15.75,2.5,-4),Q.rotation.y=-Math.PI/2,Q.userData.click="accra",e.add(Q),n.push(Q),c(.1,5.3,.15,15.75,2.65,-5.9,l),c(.1,5.3,.15,15.75,2.65,-2.1,l);let N=new $e;e.add(N);let G=new ci(16777215,40,30,.55,.9,1.5);G.position.set(2.5,9,3),G.target.position.set(0,0,0),G.castShadow=!0,G.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),G.shadow.bias=-2e-4,G.shadow.normalBias=.02,G.shadow.radius=6,N.add(G,G.target);let K=new ci(14674175,70,30,.7,.8,1.5);K.position.set(-6,7,-7),N.add(K,K.target);let q=new ci(16770760,35,30,.8,.9,1.5);q.position.set(7,4,8),N.add(q,q.target);let ct=new Ls(12568012,1709844,.35);N.add(ct);let rt=new Ri(16769720,18,14,2);rt.position.set(0,5.5,-12.5),N.add(rt);function ft(st){let ut=new Mi;ut.background=new $t(st==="night"?"#020305":"#0c0c0c");let X=(he,qt)=>new In({color:new $t(he).multiplyScalar(qt)}),xt=st==="sunset"?"#ffcf9e":st==="night"?"#9fb6ff":"#ffffff";for(let he of[-6,-3,0,3,6]){let qt=new re(new We(.5,.1,18),X(xt,st==="night"?2:8));qt.position.set(he,9,0),ut.add(qt)}let Tt=new re(new Ue(10,5),X(st==="sunset"?"#ffb070":"#eef2f6",st==="night"?.6:3));Tt.position.set(14,4,0),Tt.rotation.y=-Math.PI/2,ut.add(Tt);let zt=new re(new Ue(10,4),X("#d9d2c4",st==="night"?.3:1.6));zt.position.set(-14,3.5,4),zt.rotation.y=Math.PI/2,ut.add(zt);let _t=new re(new Ue(9,3),X("#F2E6CF",2.5));_t.position.set(0,5.5,-13.5),ut.add(_t);let Bt=new re(new Ue(40,40),X("#2a2a2a",1));return Bt.rotation.x=-Math.PI/2,ut.add(Bt),ut}function dt(st){let ut=st==="night",X=st==="sunset";G.color.set(X?"#ffc890":ut?"#cdd6f5":"#ffffff"),G.intensity=ut?14:X?36:40,K.color.set(X?"#ff9a5a":ut?"#8ea4e8":"#dfe8ff"),K.intensity=ut?60:70,q.intensity=ut?8:35,ct.intensity=ut?.08:.35,g.emissiveIntensity=ut?.4:1.4,g.emissive.set(X?"#ffd9ae":ut?"#bcd0ff":"#fff8ee"),m.emissiveIntensity=ut?4:2.4,E.material.emissiveIntensity=ut?2.5:1.6,l.color.set(X?"#1a1612":"#141414")}return{group:e,clickables:n,table:M,sign:S,signM:m,led:E,leaves:A,plant:x,envScene:ft,setMood:dt,mirror:o,lights:{key:G}}}function ud({quality:i}){let t=new $e;t.name="course",t.visible=!1;let e=[],n=[],s=cd(42),r=[[0,-60],[70,-70],[118,-40],[125,10],[100,55],[55,62],[20,40],[-10,70],[-60,78],[-112,50],[-120,0],[-95,-45],[-50,-62]].map(([_,D])=>new O(_,0,D)),a=new qi(r,!0,"centripetal"),o=900,l=a.getSpacedPoints(o),c=9.5,h=En(512,512,(_,D,Y)=>{_.fillStyle="#3b3c3d",_.fillRect(0,0,D,Y),aa(_,D,Y,46,[1,1,1.03],11),_.fillStyle="#e9e6dc",_.fillRect(10,0,14,Y),_.fillRect(D-24,0,14,Y),_.fillStyle="#e9c45a";for(let H=0;H<Y;H+=128)_.fillRect(D/2-5,H,10,64)});h.wrapS=h.wrapT=Pn;let p=(_,D,Y,H,ht=-_,mt=_)=>{let Z=[],et=[],yt=[],F=0;for(let At=0;At<=o;At++){let Rt=l[At%o],Dt=l[(At+1)%o],Xt=new O().subVectors(Dt,Rt).normalize(),Qt=new O(-Xt.z,0,Xt.x);if(At>0&&(F+=l[At%o].distanceTo(l[(At-1)%o])),Z.push(Rt.x+Qt.x*ht,Y,Rt.z+Qt.z*ht,Rt.x+Qt.x*mt,Y,Rt.z+Qt.z*mt),et.push(0,F/H,1,F/H),At<o){let Pt=At*2;yt.push(Pt,Pt+1,Pt+2,Pt+1,Pt+3,Pt+2)}}let nt=new Oe;nt.setAttribute("position",new ge(Z,3)),nt.setAttribute("uv",new ge(et,2)),nt.setIndex(yt),nt.computeVertexNormals();let at=new re(nt,D);return at.receiveShadow=!0,t.add(at),at};p(c/2,new Ae({map:h,roughness:.82,side:tn}),.02,10);let d=En(64,64,(_,D,Y)=>{_.fillStyle="#c8302a",_.fillRect(0,0,D,Y/2),_.fillStyle="#f2f0ea",_.fillRect(0,Y/2,D,Y/2)});d.wrapS=d.wrapT=Pn;let f=new Ae({map:d,roughness:.6,side:tn});p(0,f,.035,2.2,c/2,c/2+.9),p(0,f,.035,2.2,-c/2-.9,-c/2);let m=En(512,512,(_,D,Y)=>{_.fillStyle="#4d6b33",_.fillRect(0,0,D,Y),aa(_,D,Y,40,[.6,1,.45],13)});m.wrapS=m.wrapT=Pn,m.repeat.set(90,90);let S=new re(new Ue(700,700),new Ae({map:m,roughness:.95}));S.rotation.x=-Math.PI/2,S.receiveShadow=!0,t.add(S);let u=En(1024,410,(_,D,Y)=>{_.fillStyle="#56763a",_.fillRect(0,0,D,Y);for(let H=0;H<16;H++)_.fillStyle=H%2?"rgba(130,160,90,.35)":"rgba(40,70,25,.25)",_.fillRect(H*D/16,0,D/16,Y);_.save(),_.font=`900 320px ${_n}`,_.textAlign="center",_.textBaseline="middle","letterSpacing"in _&&(_.letterSpacing="15px"),_.fillStyle="rgba(178,205,120,.95)",_.fillText("PKM",D/2,Y/2+20),_.globalCompositeOperation="source-atop";for(let H=0;H<40;H++)_.fillStyle=H%2?"rgba(255,255,220,.18)":"rgba(30,60,10,.12)",_.fillRect(0,H*Y/40,D,Y/40);_.restore(),aa(_,D,Y,34,[.55,1,.4],17)}),g=8,y=74,T=30,M=new re(new Ue(y,T),new Ae({map:u,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1}));M.rotation.x=-Math.PI/2,M.position.set(-10,.01,g),M.receiveShadow=!0,t.add(M);let C={x:-10,z:g,hw:y/2-6,hh:T/2-4},E=[[118,-40],[70,-20],[40,10],[20,40]].map(([_,D])=>new O(_,0,D)),x=new qi(E),v=En(256,256,(_,D,Y)=>{_.fillStyle="#9a4f2c",_.fillRect(0,0,D,Y),aa(_,D,Y,60,[1,.55,.32],19)});v.wrapS=v.wrapT=Pn;let k=x.getSpacedPoints(120);{let _=[],D=[],Y=[],H=0;for(let Z=0;Z<=120;Z++){let et=k[Z],yt=k[Math.min(120,Z+1)],F=k[Math.max(0,Z-1)],nt=new O().subVectors(yt,F).normalize(),at=new O(-nt.z,0,nt.x);if(Z&&(H+=et.distanceTo(F)),_.push(et.x+at.x*3.4,.012,et.z+at.z*3.4,et.x-at.x*3.4,.012,et.z-at.z*3.4),D.push(0,H/6,1,H/6),Z<120){let At=Z*2;Y.push(At,At+1,At+2,At+1,At+3,At+2)}}let ht=new Oe;ht.setAttribute("position",new ge(_,3)),ht.setAttribute("uv",new ge(D,2)),ht.setIndex(Y),ht.computeVertexNormals();let mt=new re(ht,new Ae({map:v,roughness:1,side:tn}));mt.receiveShadow=!0,t.add(mt)}let A=(_,D,Y)=>{let H=1e9,ht=0;for(let mt=0;mt<_.length;mt+=1){let Z=_[mt],et=(Z.x-D)**2+(Z.z-Y)**2;et<H&&(H=et,ht=mt)}return{d:Math.sqrt(H),i:ht}},L=l.filter((_,D)=>D%6===0),B=(_,D)=>{let Y=A(L,_,D),H=1e9,ht=0;for(let mt=-8;mt<=8;mt++){let Z=((Y.i*6+mt)%o+o)%o,et=l[Z],yt=(et.x-_)**2+(et.z-D)**2;yt<H&&(H=yt,ht=Z)}return{d:Math.sqrt(H),i:ht}},Q=new Ln(.18,.28,1,7);Q.translate(0,.5,0);let N=new Dr(1,1),G=new oi(Q,new Ae({color:"#5a4430",roughness:1}),260),K=new oi(N,new Ae({color:"#3f6b2c",roughness:.9,flatShading:!0}),260);G.castShadow=K.castShadow=!0;let q=0,ct=new Me,rt=new Qe,ft=new $t;for(;q<260;){let _=(s()-.5)*420,D=(s()-.5)*420;if(B(_,D).d<14||Math.abs(_-C.x)<C.hw+10&&Math.abs(D-C.z)<C.hh+10||A(k,_,D).d<8)continue;let Y=4+s()*6,H=2+s()*2.4;ct.compose(new O(_,0,D),rt.identity(),new O(1,Y,1)),G.setMatrixAt(q,ct),ct.compose(new O(_,Y+H*.4,D),rt.setFromAxisAngle(new O(0,1,0),s()*6),new O(H,H*.75,H)),K.setMatrixAt(q,ct),K.setColorAt(q,ft.setHSL(.27+s()*.06,.4+s()*.2,.22+s()*.1)),n.push({x:_,z:D,r:.45}),q++}t.add(G,K);let dt=l[0],st=l[3],ut=new O().subVectors(st,dt).normalize(),X=Math.atan2(ut.x,ut.z),xt=new $e;xt.position.copy(dt),xt.rotation.y=X,t.add(xt);let Tt=new Ae({color:"#2b2d2f",metalness:.7,roughness:.4});for(let _ of[-1,1]){let D=new re(new We(.4,6.4,.4),Tt);D.position.set(_*(c/2+1.6),3.2,0),D.castShadow=!0,xt.add(D)}let zt=En(2048,256,(_,D,Y)=>{_.fillStyle="#0d0d0d",_.fillRect(0,0,D,Y),_.fillStyle="#F2F0EA",_.font=`800 150px ${_n}`,_.textBaseline="middle",_.fillText("PKM",60,Y/2+6),_.fillStyle="#BBA783",_.font=`600 84px ${_n}`,_.fillText("KUMASI PROVING GROUND",470,Y/2+4)}),_t=new re(new We(c+3.6,1.4,.5),[Tt,Tt,Tt,Tt,new Ae({map:zt,emissive:"#fff",emissiveMap:zt,emissiveIntensity:.25}),new Ae({map:zt})]);_t.position.y=6.2,_t.castShadow=!0,xt.add(_t);let Bt=En(256,32,(_,D,Y)=>{for(let H=0;H<16;H++)for(let ht=0;ht<2;ht++)_.fillStyle=(H+ht)%2?"#111":"#eee",_.fillRect(H*16,ht*16,16,16)}),he=new re(new Ue(c,1.2),new Ae({map:Bt,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));he.rotation.x=-Math.PI/2,he.position.y=.03,xt.add(he);let qt=En(300,200,(_,D,Y)=>{_.fillStyle="#ce1126",_.fillRect(0,0,D,Y/3),_.fillStyle="#fcd116",_.fillRect(0,Y/3,D,Y/3),_.fillStyle="#006b3f",_.fillRect(0,2*Y/3,D,Y/3),_.fillStyle="#000",_.beginPath();let H=D/2,ht=Y/2,mt=26;for(let Z=0;Z<10;Z++){let et=-Math.PI/2+Z*Math.PI/5,yt=Z%2?mt*.4:mt;_.lineTo(H+Math.cos(et)*yt,ht+Math.sin(et)*yt)}_.fill()}),te=new Ue(3,2,20,4),ie=new re(te,new Ae({map:qt,side:tn,roughness:.8})),pt=new re(new Ln(.06,.08,10,10),Tt),Ct=new $e;Ct.position.copy(dt).add(new O(ut.z,0,-ut.x).multiplyScalar(c/2+6)),t.add(Ct),pt.position.y=5,Ct.add(pt),ie.position.set(1.55,8.8,0),Ct.add(ie),ie.castShadow=!0,n.push({x:Ct.position.x,z:Ct.position.z,r:.2});let vt=(_,D,Y,H,ht,mt)=>{let Z=new $e;Z.position.copy(H),Z.rotation.y=ht,t.add(Z);let et=En(1024,512,(nt,at,At)=>{nt.fillStyle="#0c0c0c",nt.fillRect(0,0,at,At),nt.fillStyle=Y,nt.fillRect(0,At-22,at,22),nt.fillStyle="#F2F0EA",nt.font=`800 112px ${_n}`,nt.fillText(_,60,200),nt.fillStyle="#B3ACA1",nt.font=`500 50px ${_n}`,nt.fillText(D,64,300),nt.fillStyle=Y,nt.font=`700 46px ${_n}`,nt.fillText("Tap to visit \u2192",64,420)}),yt=new re(new Ue(10,5),new Ae({map:et,emissive:"#fff",emissiveMap:et,emissiveIntensity:.18}));yt.position.y=5,yt.userData.click=mt,Z.add(yt),e.push(yt);for(let nt of[-3,3]){let at=new re(new We(.3,5,.3),Tt);at.position.set(nt,1.5,-.2),at.castShadow=!0,Z.add(at),n.push({x:H.x+Math.cos(ht)*nt,z:H.z-Math.sin(ht)*nt,r:.3})}let F=new re(new We(10.2,5.2,.2),Tt);return F.position.set(0,5,-.15),Z.add(F),Z};vt("Papa Kojo","Back to the portfolio","#BBA783",new O(30,0,-82),0,"home"),vt("Accra 3D","Drive Liberation Road","#93AE7C",new O(140,0,20),-Math.PI/2,"accra"),vt("Iconka Designs","Brands, posters, menus","#d9774a",new O(-136,0,10),Math.PI/2,"design");let Ut=[],It=new br(.22,.7,16);It.translate(0,.35,0);let ee=new Ae({color:"#ff6a1a",roughness:.5});for(let _=0;_<8;_++){let D=Math.round(o*.52)+_*7,Y=l[D],H=l[D+1],ht=new O().subVectors(H,Y).normalize(),mt=new O(-ht.z,0,ht.x),Z=new re(It,ee);Z.castShadow=!0,Z.position.copy(Y).addScaledVector(mt,(_%2?1:-1)*1.6),t.add(Z),Ut.push({mesh:Z,home:Z.position.clone(),v:new O,spin:new O,knocked:!1})}let Lt=[];for(let _=0;_<7;_++){let D=Math.round(o*.06)+_*16,Y=l[D],H=l[D+1],ht=new O().subVectors(H,Y).normalize(),mt=new O(-ht.z,0,ht.x),Z=Y.clone().addScaledVector(mt,c/2+2.5),et=new re(new Ln(.08,.12,8,8),Tt);et.position.copy(Z).setY(4),et.castShadow=!0,t.add(et);let yt=new re(new We(1.2,.15,.4),new Ae({color:"#222",emissive:"#ffd9a0",emissiveIntensity:0}));yt.position.copy(Z).addScaledVector(mt,-.6).setY(8),yt.rotation.y=Math.atan2(mt.x,mt.z),t.add(yt),Lt.push(yt),n.push({x:Z.x,z:Z.z,r:.2})}let jt=[];for(let _=0;_<3;_++){let D=new Ri(16767392,0,26,1.6);D.position.copy(Lt[_*3].position).setY(7.6),t.add(D),jt.push(D)}let Gt=new qs;Gt.scale.setScalar(4500),t.add(Gt);let ae=new Or(16777215,2.6);ae.castShadow=!0,ae.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),Object.assign(ae.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:300}),ae.shadow.bias=-4e-4,ae.shadow.normalBias=.03,t.add(ae,ae.target);let V=new Ls(13624319,4872752,.6);t.add(V);let fe=new O;function Zt(_){let D=_==="night"?-6:_==="sunset"?4:42,Y=_==="sunset"?250:200,H=fi.degToRad(90-D),ht=fi.degToRad(Y);fe.setFromSphericalCoords(1,H,ht);let mt=Gt.material.uniforms;mt.sunPosition.value.copy(fe),mt.turbidity.value=_==="sunset"?6:3,mt.rayleigh.value=_==="night"?.4:_==="sunset"?2.6:1.2,mt.mieCoefficient.value=.004,mt.mieDirectionalG.value=.85,ae.intensity=_==="night"?.05:_==="sunset"?1.9:2.7,ae.color.set(_==="sunset"?"#ffb27a":_==="night"?"#8aa0d8":"#fff4e6"),V.intensity=_==="night"?.14:_==="sunset"?.3:.45,V.color.set(_==="night"?"#38456a":"#cfe3ff");for(let Z of Lt)Z.material.emissiveIntensity=_==="night"?4:0;for(let Z of jt)Z.intensity=_==="night"?120:0}function de(_){ae.position.copy(_).addScaledVector(fe.y>.05?fe:new O(.3,1,.2).normalize(),120),ae.target.position.copy(_)}function Ft(_){let D=new Mi,Y=new qs;Y.scale.setScalar(1e3),Object.assign(Y.material.uniforms.sunPosition.value,fe),Y.material.uniforms.sunPosition.value.copy(fe),Y.material.uniforms.rayleigh.value=Gt.material.uniforms.rayleigh.value,Y.material.uniforms.turbidity.value=Gt.material.uniforms.turbidity.value,D.add(Y);let H=new re(new Ue(2e3,2e3),new In({color:_==="night"?"#050806":"#3d5228"}));return H.rotation.x=-Math.PI/2,H.position.y=-1,D.add(H),D}let xe=0;function Kt(_,D){xe+=_;let Y=te.attributes.position;for(let H=0;H<Y.count;H++){let ht=Y.getX(H)+1.5;Y.setZ(H,Math.sin(ht*2.2-xe*6)*.12*ht/3)}Y.needsUpdate=!0,te.computeVertexNormals();for(let H of Ut){if(D){let ht=H.mesh.position.x-D.x,mt=H.mesh.position.z-D.z,Z=Math.hypot(ht,mt),et=Math.hypot(D.vx,D.vy);Z<1.5&&et>1&&!H.knocked&&(H.knocked=!0,H.v.set(ht/Z*et*.7+Math.sin(D.yaw)*et*.5,2+et*.15,mt/Z*et*.7+Math.cos(D.yaw)*et*.5),H.spin.set(s()*8,s()*8,s()*8),H.onHit&&H.onHit())}H.knocked&&(H.v.y-=9.8*_,H.mesh.position.addScaledVector(H.v,_),H.mesh.rotation.x+=H.spin.x*_,H.mesh.rotation.z+=H.spin.z*_,H.mesh.position.y<0&&(H.mesh.position.y=0,H.v.multiplyScalar(.5),H.v.y=Math.abs(H.v.y)*.3,H.spin.multiplyScalar(.6)))}}function Vt(){for(let _ of Ut)_.knocked=!1,_.mesh.position.copy(_.home),_.mesh.rotation.set(0,0,0)}let R=(_,D)=>{let Y=B(_,D).d;return Y<c/2?{mu:1.05,rough:.02,name:"asphalt"}:Y<c/2+.9?{mu:.95,rough:.35,name:"kerb"}:A(k,_,D).d<3.4?{mu:.68,rough:.5,name:"dirt"}:{mu:.6,rough:.6,name:"grass"}};return{group:t,clickables:e,circles:n,curve:a,samples:l,start:{x:dt.x,z:dt.z,yaw:X},grip:R,trackDist:B,pkmZone:C,setMood:Zt,follow:de,envScene:Ft,animate:Kt,resetCones:Vt,cones:Ut,bounds:{minX:-200,maxX:200,minZ:-200,maxZ:200}}}var dd={DoubleSide:tn,BoxGeometry:We,BufferAttribute:Mn,BufferGeometry:Oe,CanvasTexture:Xi,CircleGeometry:Sr,Color:$t,ColorManagement:ve,CylinderGeometry:Ln,ExtrudeGeometry:Lr,Float32BufferAttribute:ge,Group:$e,InstancedMesh:oi,LatheGeometry:Nr,Matrix4:Me,Mesh:re,MeshBasicMaterial:In,MeshPhysicalMaterial:Ti,MeshStandardMaterial:Ae,PlaneGeometry:Ue,PointLight:Ri,Points:xr,PointsMaterial:As,Quaternion:Qe,RepeatWrapping:Pn,SRGBColorSpace:rn,Shape:Rs,SphereGeometry:Zi,SpotLight:ci,TorusGeometry:wi,Vector2:Mt,Vector3:O};async function FM(i){let t=(J,wt=document)=>wt.querySelector(J),e=(J,wt=document)=>[...wt.querySelectorAll(J)],n=new URLSearchParams(location.search),s={get(J,wt){try{let Ot=localStorage.getItem(J);return Ot?JSON.parse(Ot):wt}catch{return wt}},set(J,wt){try{localStorage.setItem(J,JSON.stringify(wt))}catch{}}},r=document.createElement("style");r.textContent=ad,document.head.appendChild(r);let a=t("#view"),o=n.get("quality")||s.get("pkm.drive.quality","auto"),l=["auto","high","low"].includes(o)?o:"auto",c=matchMedia("(max-width: 900px)"),h=(()=>{try{let J=document.createElement("canvas").getContext("webgl"),wt=J&&J.getExtension("WEBGL_debug_renderer_info");return wt?String(J.getParameter(wt.UNMASKED_RENDERER_WEBGL)):""}catch{return""}})(),d=/SwiftShader|llvmpipe|Mali-[GT][0-9]{1,2}\b|Adreno \(TM\) [1-5][0-9]{2}\b|PowerVR|Intel\(R\) (HD|UHD) Graphics( [1-6][0-9]{2})?\b/i.test(h)||(navigator.hardwareConcurrency||8)<=4||c.matches,f=l==="high",m=()=>f||l==="auto"&&!d&&!S?"high":"low",S=!1,u=new il({canvas:a,antialias:!0,powerPreference:"high-performance"});i.watchCanvas(a),u.setPixelRatio(Math.min(devicePixelRatio,m()==="low"?1:1.5)),u.toneMapping=ts,u.toneMappingExposure=1,u.shadowMap.enabled=!0,u.shadowMap.type=$i;let g=new Mi,y=new an(36,1,.1,6e3),T=new ol(y,a);Object.assign(T,{enableDamping:!0,dampingFactor:.07,minDistance:4,maxDistance:18,maxPolarAngle:Math.PI*.495,autoRotateSpeed:.6,enablePan:!1});let M=new Gs(u),C,E;f&&(C=new hl(u),C.addPass(new ul(g,y)),E=new Ws(new Mt(256,256),.35,.4,1),C.addPass(E),C.addPass(new dl));let x=hd({quality:m(),reflections:f});g.add(x.group);let v=new pl;v.setMuted(s.get("pkm.drive.muted",!1));let k={};function A(J){if(k[J])return k[J];let wt=nd(dd,J),Ot=s.get("pkm.drive.paint."+J,0);wt.paintIndex=Number.isInteger(Ot)&&wt.spec.paints[Ot]?Ot:0;let _e=wt.spec.paints[wt.paintIndex];return wt.setPaint(_e.hex,_e.metal),wt.root.traverse(Te=>{Te.isMesh&&(Te.userData.car=J)}),k[J]=wt}let L=n.get("car")||s.get("pkm.drive.car","volta"),B=Object.hasOwn(Vc,L)?L:"volta",Q="showroom",N="studio",G=()=>A(B),K=()=>B==="volta"?"regent":"volta";function q(){for(let Ot of Object.values(k))Ot.root.removeFromParent();let J=G();x.table.add(J.root),J.root.position.set(0,.1,0),J.root.rotation.set(0,0,0);for(let Ot of Object.values(k)){Ot.body.rotation.set(0,0,0),Ot.body.position.set(0,0,0);for(let _e of Ot.wheels)_e.pivot.rotation.y=0,_e.pivot.position.y=_e.baseY}let wt=k[K()];wt&&(x.group.add(wt.root),wt.root.position.set(-9.2,0,1.5),wt.root.rotation.set(0,.6,0))}let ct,rt=0;function ft(){if(!ct){ct=ud({quality:m()}),g.add(ct.group),dt.collide=rd({bounds:ct.bounds,circles:ct.circles,carR:1,carHalf:1.7});for(let J of ct.cones)J.onHit=()=>{rt++,v.thunk(.25),rt>=ct.cones.length&&xe("cones","Slalom","All eight cones down.")}}}let dt={grip:(J,wt)=>Q==="drive"?ct.grip(J,wt):{mu:1,rough:0,name:"floor"},respawn:J=>{let wt=ct.trackDist(J.x,J.z),Ot=ct.samples[wt.i],_e=ct.samples[(wt.i+3)%ct.samples.length];return{x:Ot.x,z:Ot.z,yaw:Math.atan2(_e.x-Ot.x,_e.z-Ot.z)}},dustColor:10780762,night:!1},st=od(t("#stage")),ut=new gl({THREE:dd,scene:g,camera:y,dom:a,vehicle:G(),audio:v,env:dt,onEvent:ht});ld(t("#stage"),ut);let X={};function xt(){let J=Q+":"+N;if(!X[J]){let wt=Q==="drive"?ct.envScene(N):x.envScene(N);X[J]=M.fromScene(wt,.03,.1,100,{size:128}).texture,wt.traverse(Ot=>{Ot.geometry?.dispose(),Ot.material?.dispose()})}g.environment=X[J],g.environmentIntensity=Q==="drive"?N==="night"?.12:.45:N==="night"?.55:1,Q==="drive"?(g.background=null,g.fog=new fr(N==="night"?"#05070c":N==="sunset"?"#c98f6a":"#9fb6c8",N==="night"?.004:.0011),u.toneMappingExposure=N==="night"?.9:N==="sunset"?.7:.55):(g.background=new $t(N==="night"?"#050505":"#0a0a0a"),g.fog=null,u.toneMappingExposure=1),E&&(E.strength=N==="night"?.6:.35,E.enabled=Q==="showroom"||N==="night"),dt.night=N==="night"}function Tt(J){N=J,x.setMood(J),ct?.setMood(J),xt(),e("[data-mood]").forEach(wt=>wt.setAttribute("aria-pressed",wt.dataset.mood===J)),J==="night"&&(G().state.head=!0,It())}let zt={hero:[[7.4,1.85,8.2],[-.9,.8,.4]],front:[[.4,1.3,8.2],[0,.9,0]],rear:[[-1.2,1.9,-8.2],[0,.9,0]],side:[[8.6,1.2,.3],[0,.9,0]],top:[[.4,10.5,1.2],[0,0,0]],wheel:[[3.2,.55,3.6],[1.2,.4,1.5]],interior:null},_t=null,Bt=!1;function he(){T.minDistance=.01,T.maxDistance=.6,y.near=.02,y.updateProjectionMatrix()}function qt(J,wt,Ot=!1){if(i.reducedMotion.matches){_t=null,Ot&&he(),y.position.copy(J),T.target.copy(wt),T.update();return}_t={from:y.position.clone(),to:J,tf:T.target.clone(),tt:wt,t0:performance.now(),interior:Ot}}function te(J){if(pt(!1),J==="interior")return ie();let[wt,Ot]=zt[J],_e=x.table.rotation.y,Te=nn=>new O(nn[0],nn[1],nn[2]).applyAxisAngle(new O(0,1,0),_e),en=Te(wt),An=Te(Ot);if(c.matches){J==="hero"&&(An.y-=.33);let nn=fi.clamp(.9/y.aspect,1,1.72);en.sub(An).multiplyScalar(nn).add(An)}qt(en,An),t("#interiorBtn").textContent="Interior",e("[data-cam]").forEach(nn=>nn.setAttribute("aria-pressed",nn.dataset.cam===J))}function ie(){Bt=!0,t("#interiorBtn").textContent="Exterior";let J=G();J.root.updateMatrixWorld(!0);let wt=J.driverEye.clone();J.body.localToWorld(wt);let Ot=new O(0,0,1).applyQuaternion(J.root.getWorldQuaternion(new Qe));qt(wt.clone().addScaledVector(Ot,-.02),wt.clone().addScaledVector(Ot,.4),!0),e("[data-cam]").forEach(_e=>_e.setAttribute("aria-pressed",_e.dataset.cam==="interior")),J.setCabinView(!0)}function pt(J=!0){Bt&&(Bt=!1,T.minDistance=4,T.maxDistance=18,y.near=.1,y.updateProjectionMatrix(),G().setCabinView(!1),J&&te("hero"))}let Ct=!i.reducedMotion.matches&&s.get("pkm.drive.spin",!1)===!0;t("#spin").setAttribute("aria-pressed",Ct),i.reducedMotion.addEventListener("change",J=>{J.matches&&vt(!1)});function vt(J){Ct=J,t("#spin").setAttribute("aria-pressed",J),s.set("pkm.drive.spin",J)}function Ut(){let J=G().spec;t("#kicker").textContent=`${J.brand} \xB7 2027`,t("#vname").textContent=J.name,t("#trim").textContent=J.trim,t("#tagline").textContent=J.tagline,t("#chips").innerHTML=J.chips.map(wt=>`<li>${wt}</li>`).join(""),e("[data-car]").forEach(wt=>wt.setAttribute("aria-current",wt.dataset.car===B)),t("#swatches").innerHTML=J.paints.map((wt,Ot)=>`<button class="swatch" style="--sw:${wt.hex}" data-paint="${Ot}" aria-pressed="${Ot===G().paintIndex}" aria-label="${wt.name}" title="${wt.name}"></button>`).join(""),t("#paintName").textContent=J.paints[G().paintIndex].name,t('[data-panel="tailgate"]').textContent=B==="volta"?"Tailgate":"Liftgate",t("#accraLink").href=`/accra3d/?drive=${B}&paint=${G().paintIndex}`,document.title=`PKM ${J.name} \xB7 Drive Studio \xB7 Papa Kojo`}function It(){let J=G().state;for(let wt of["head","left","right","hazard"])for(let Ot of e(`[data-light="${wt}"]`))Ot.setAttribute("aria-pressed",!!J[wt]);for(let[wt,Ot]of Object.entries(G().panels)){let _e=t(`[data-panel="${wt}"]`);_e&&Ot.userData&&_e.setAttribute("aria-pressed",Ot.userData.target===1)}t("#engineBtn").textContent=ut.startTimer?"Cancel start":ut.dyn.engine?"Stop engine":"Start engine",t("#reverseBtn").textContent=ut.dyn.reverse?"Shift to drive":"Shift to reverse",t("#reverseBtn").setAttribute("aria-pressed",ut.dyn.reverse)}function ee(J){J===B||Q==="drive"||(pt(!1),B=J,s.set("pkm.drive.car",J),ut.setVehicle(G()),N==="night"&&(G().state.head=!0),q(),te("hero"),Ut(),It())}e("[data-car]").forEach(J=>J.addEventListener("click",()=>ee(J.dataset.car))),t("#swatches").addEventListener("click",J=>{let wt=J.target.closest("[data-paint]");if(!wt)return;let Ot=+wt.dataset.paint,_e=G().spec.paints[Ot];G().setPaint(_e.hex,_e.metal),G().paintIndex=Ot,s.set("pkm.drive.paint."+B,Ot),Ut(),v.click(2600,.08,.02),_e.name==="Kente Gold"&&xe("gold","Kente Gold","The only paint with a story woven in.")}),e("[data-panel]").forEach(J=>J.addEventListener("click",()=>Lt(J.dataset.panel)));function Lt(J){let wt=G().togglePanel(J);J.startsWith("front")||J.startsWith("rear")?wt?v.latch():setTimeout(()=>v.thunk(.5),260):J==="hood"||J==="tailgate"?wt?v.latch():setTimeout(()=>v.thunk(.7),420):v.click(1200,.12,.08),It()}e("[data-light]").forEach(J=>J.addEventListener("click",()=>ut.toggle(J.dataset.light))),t("#horn").addEventListener("click",()=>ut.horn()),t("#engineBtn").addEventListener("click",()=>ut.toggleEngine()),t("#interiorBtn").addEventListener("click",()=>te(Bt?"hero":"interior")),e("[data-cam]").forEach(J=>J.addEventListener("click",()=>te(J.dataset.cam))),e("[data-mood]").forEach(J=>J.addEventListener("click",()=>Tt(J.dataset.mood))),t("#spin").addEventListener("click",()=>vt(!Ct)),t("#quality").value=l,t("#quality").addEventListener("change",J=>{s.set("pkm.drive.quality",J.target.value);let wt=new URL(location.href);wt.searchParams.delete("quality"),wt.searchParams.set("car",B),location.replace(wt)});function jt(){t("#mute").setAttribute("aria-pressed",!v.muted),t("#mute").textContent=v.muted?"Sound off":"Sound on"}t("#mute").addEventListener("click",()=>{v.setMuted(!v.muted),s.set("pkm.drive.muted",v.muted),jt(),v.muted||v.unlock().catch(()=>{})}),jt(),t("#fullscreen").hidden=!document.fullscreenEnabled,t("#fullscreen").addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{})});function Gt(J){t("#panel").dataset.open=J,t("#panelToggle").setAttribute("aria-expanded",J),t("#panelBody").inert=c.matches&&!J}Gt(!1),c.addEventListener("change",()=>Gt(!1)),t("#panelToggle").addEventListener("click",()=>Gt(t("#panel").dataset.open!=="true")),t(".skip").addEventListener("click",J=>{J.preventDefault(),Gt(!0),(Q==="drive"?t("#exitDrive"):t("#panelBody").querySelector("button")).focus()}),t("#driveBtn").addEventListener("click",()=>{t("#driveBtn").disabled||(t("#driveBtn").disabled=!0,t("#driveBtn").textContent="Opening track\u2026",v.muted||v.unlock().catch(()=>{}),requestAnimationFrame(()=>requestAnimationFrame(()=>{if(i.running)try{V("drive")}catch{Z("The track couldn\u2019t open","Try again or drive through Accra.")}finally{t("#driveBtn").disabled=!1,t("#driveBtn").textContent="Test track"}})))}),t("#exitDrive").addEventListener("click",()=>V("showroom")),t("#camBtn").addEventListener("click",()=>ut.cycleCamera()),t("#reverseBtn").addEventListener("click",()=>{ut.shiftDirection(),a.focus({preventScroll:!0})}),t("#helpBtn").addEventListener("click",()=>{t("#keys").hidden=!t("#keys").hidden,t("#helpBtn").setAttribute("aria-expanded",!t("#keys").hidden)}),t("#resetBtn").addEventListener("click",()=>{ut.recover(),ae()}),document.addEventListener("keydown",J=>{J.key==="Escape"&&(t("#secrets").hidden?Q==="drive"?V("showroom"):t("#panel").dataset.open==="true"&&c.matches?(Gt(!1),t("#panelToggle").focus()):Bt&&te("hero"):(Kt(!1),t("#secretsBtn").focus()))});function ae(){rt=0,ct.resetCones()}function V(J,wt=!0){if(J!==Q){if(J==="drive"&&ft(),Q=J,document.body.dataset.mode=J,J==="drive"){pt(!1),_t=null,Gt(!1),Kt(!1),x.group.visible=!1,ct.group.visible=!0,ct.setMood(N),g.add(G().root),T.enabled=!1,ut.setEnabled(!0),ut.cycleCamera("chase");for(let Ot of Object.keys(G().panels))G().togglePanel(Ot,!1);ut.place(ct.start.x,ct.start.z,ct.start.yaw),ae(),st.el.hidden=!1,ut.toggleEngine(!0),t("#keys").hidden=!0,t("#helpBtn").setAttribute("aria-expanded","false"),Z("Kumasi test track",matchMedia("(pointer: coarse)").matches?"Use the pedals and arrows below.":"W to go, S to brake, V to shift. C changes the camera."),a.setAttribute("aria-label","Kumasi test track. W to accelerate, S to brake, V to shift.")}else ut.setEnabled(!1),st.el.hidden=!0,x.group.visible=!0,ct.group.visible=!1,T.enabled=!0,y.near=.1,y.fov=36,y.updateProjectionMatrix(),v.cabin=0,q(),te("hero"),a.setAttribute("aria-label","3D showroom. Drag to orbit and use the controls to inspect the car."),wt&&t("#driveBtn").focus({preventScroll:!0});xt(),It()}}let fe={sign:["The sign","Click the PKM sign three times."],plant:["Akwaaba","Water the plant in the corner."],horn:["Beep beep","Honk three times quickly."],pkm:["Field work","Find the name mowed into the infield."],cones:["Slalom","Knock over all eight cones."],gold:["Kente Gold","Find the paint with a story."],konami:["Disco","The classic code. \u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA"],ton:["Ton-up","Hit 120 km/h on the proving ground."]},Zt=s.get("pkm.drive.secrets",[]),de=new Set(Array.isArray(Zt)?Zt.filter(J=>Object.hasOwn(fe,J)):[]);function Ft(){for(let J of document.querySelectorAll("[data-secret-count], #secretCount"))J.textContent=`${de.size}/${Object.keys(fe).length}`;t("#secretList").innerHTML=Object.entries(fe).map(([J,[wt,Ot]])=>`<li data-found="${de.has(J)}"><strong>${de.has(J)?wt:"Hidden"}</strong><span>${Ot}</span></li>`).join("")}function xe(J,wt,Ot){de.has(J)||(de.add(J),s.set("pkm.drive.secrets",[...de]),Ft(),v.chime(),Z(`Secret found \xB7 ${de.size}/${Object.keys(fe).length}`,`${wt}. ${Ot}`))}function Kt(J){t("#secrets").hidden=!J,t("#secretsBtn").setAttribute("aria-expanded",J),J&&t("#closeSecrets").focus()}t("#secretsBtn").addEventListener("click",()=>Kt(t("#secrets").hidden)),t("#closeSecrets").addEventListener("click",()=>{Kt(!1),t("#secretsBtn").focus()}),Ft();let Vt=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"],R=0,_=0;addEventListener("keydown",J=>{R=J.key.toLowerCase()===Vt[R]?R+1:J.key.toLowerCase()===Vt[0]?1:0,R===Vt.length&&(R=0,i.reducedMotion.matches||(_=8),Rt(),xe("konami","Disco","Eight seconds of showroom party."))});let D=0,Y=0,H=["#F2E6CF","#BBA783","#93AE7C","#ce1126","#fcd116","#006b3f"];function ht(J,wt){J==="horn"&&wt>=3&&xe("horn","Beep beep","Akwaaba! Kumasi heard you."),(J==="engine"||J==="direction")&&It(),J==="shift-blocked"&&Z("Stop before shifting","Bring the car to a stop and release the accelerator."),Rt(),J==="camera"&&(t("#camBtn").textContent="Camera: "+{chase:"Chase",far:"Far chase",cabin:"Cockpit",hood:"Bonnet",cine:"Cinematic",drone:"Drone"}[wt],wt==="drone"&&Q==="drive"&&Z("Drone camera","Look down at the infield.")),J==="lights"&&It()}let mt;function Z(J,wt){let Ot=t("#toast");Ot.innerHTML=`<strong>${J}</strong><span>${wt}</span>`,Ot.hidden=!1,Ot.classList.remove("show"),Ot.offsetWidth,Ot.classList.add("show"),clearTimeout(mt),mt=setTimeout(()=>Ot.classList.remove("show"),4200)}let et=new kr,yt=new Mt,F=null;a.addEventListener("pointerdown",J=>{F=[J.clientX,J.clientY]}),a.addEventListener("pointerup",J=>{if(!F||Math.hypot(J.clientX-F[0],J.clientY-F[1])>6)return;let wt=at(J);if(!wt)return;let Ot=wt.object,_e=Ot.userData.click;if(Ot.userData.panel&&Ot.userData.car===B&&Q==="showroom")return Lt(Ot.userData.panel);if(Ot.userData.car&&Ot.userData.car!==B&&Q==="showroom")return ee(Ot.userData.car);if(_e==="sign")D++,x.signM.emissive.set(H[D%H.length]),v.click(800+D*120,.15,.05),D>=3&&xe("sign","The sign","It cycles through the Ghana flag colours too.");else if(_e==="plant"){Y++,v.chime([520,660]);for(let Te of x.leaves)Te.scale.y=Math.min(2.6,Te.scale.y*1.08);Z("Watering the plants\u2026",Y<3?"It likes that.":"Look how it has grown."),Y>=3&&xe("plant","Akwaaba","Just like the portfolio\u2019s welcome screen.")}else _e==="poster"||_e==="design"?location.href="/design/":_e==="home"?location.href="/":_e==="accra"&&(location.href=t("#accraLink").href)});let nt=0;a.addEventListener("pointermove",J=>{if(Q!=="showroom"||J.pointerType==="touch")return;let wt=performance.now();if(wt-nt<120)return;nt=wt;let Ot=at(J);a.style.cursor=Ot&&(Ot.object.userData.click||Ot.object.userData.car&&Q==="showroom"&&(Ot.object.userData.panel||Ot.object.userData.car!==B))?"pointer":""});function at(J){let wt=a.getBoundingClientRect();yt.set((J.clientX-wt.left)/wt.width*2-1,-((J.clientY-wt.top)/wt.height)*2+1),et.setFromCamera(yt,y);let Ot=Q==="showroom"?[...x.clickables,...Object.values(k).map(_e=>_e.root)]:ct.clickables;return et.intersectObjects(Ot,!0).find(_e=>_e.object.visible)||null}let At=0;function Rt(){At=performance.now()+1600}function Dt(){let J=a.clientWidth,wt=a.clientHeight;!J||!wt||(u.setSize(J,wt,!1),C?.setSize(J,wt),y.aspect=J/wt,y.updateProjectionMatrix(),Rt())}new ResizeObserver(Dt).observe(a),T.addEventListener("change",Rt),document.querySelector("[data-scene-controls]").addEventListener("click",Rt),a.addEventListener("pointerup",Rt);let Xt,Qt=0,Pt=0,Jt=0;function ue(J){C&&E.enabled?C.render(J):u.render(g,y)}function kt(J){if(!i.running){ut.setEnabled(!1);return}requestAnimationFrame(kt);let wt=Xt===void 0?0:(J-Xt)/1e3;if(Xt=J,document.hidden||wt>.5)return;let Ot=Math.min(wt,.1);if(Q==="showroom"){let Te=G(),en=Ct&&!_t&&!Bt;if(en&&(x.table.rotation.y+=Ot*.12),_t){let Ce=Math.min(1,(J-_t.t0)/1e3),Oi=1-Math.pow(1-Ce,3);y.position.lerpVectors(_t.from,_t.to,Oi),T.target.lerpVectors(_t.tf,_t.tt,Oi),_t.interior&&Ce>.62&&y.near!==.02&&he(),Ce>=1&&(_t=null)}T.update();let An=Object.values(Te.panels).some(Ce=>Math.abs(Ce.userData.open-Ce.userData.target)>.002),nn=Te.state;if(J>At&&!en&&!_t&&!An&&!ut.dyn.engine&&!nn.left&&!nn.right&&!nn.hazard&&_<=0)return;if(Te.update(Ot,{engine:ut.dyn.engine,night:N==="night"}),ut.dyn.engine){let Ce=ut.dyn;Ce.rpm+=(Te.spec.idle-Ce.rpm)*Math.min(1,Ot*3),Ce.throttle*=.9,Te.body.position.y=i.reducedMotion.matches?0:Math.sin(J*.05)*.0012,v.update(Ce,Te.spec,Ot),Te.drawCluster(0,Ce.rpm,"P")}if(_>0){_-=Ot;let Ce=J/600%1;x.signM.emissive.setHSL(Ce,.8,.6),x.led.material.emissive.setHSL((Ce+.5)%1,.8,.55),x.lights.key.color.setHSL(Ce,.7,.6),_<=0&&Tt(N)}}else{ut.update(Ot);let Te=ut.dyn;ct.follow(G().root.position),ct.animate(Ot,Te),st.update(ut.hud(),Ot),Math.abs(Te.vx)*3.6>120&&xe("ton","Ton-up","You reached 120 km/h on the test track.");let en=ct.pkmZone;Math.abs(Te.x-en.x)<en.hw&&Math.abs(Te.z-en.z)<en.hh&&xe("pkm","Field work","You found the PKM in the grass. Try the drone camera.")}if(ue(Ot),Pt++,Qt+=wt*1e3,Qt<1400)return;Jt=Pt/Qt*1e3<30?Jt+1:0,Pt=0,Qt=0,l==="auto"&&!S&&Jt>=2&&(S=!0,u.setPixelRatio(Math.min(devicePixelRatio,.9)),Dt())}i.progress("Setting up the showroom\u2026"),q(),Ut();let Se=n.get("mood");Tt(["studio","sunset","night"].includes(Se)?Se:"studio"),Dt();let[Be,Nn]=zt.hero;y.position.set(...Be),T.target.set(...Nn),c.matches&&(T.target.y-=.33,y.position.sub(T.target).multiplyScalar(fi.clamp(.9/y.aspect,1,1.72)).add(T.target)),T.update(),i.progress("Preparing the paint and lights\u2026");try{u.compileAsync&&await u.compileAsync(g,y)}catch{}if(ue(0),!i.running)return;It(),i.ready();let Fi=J=>window.requestIdleCallback?requestIdleCallback(J,{timeout:2500}):setTimeout(J,600);Fi(()=>{if(!i.running)return;let J=A(K());J.root.traverse(wt=>{wt.isMesh&&(wt.userData.car=J.spec.id)}),Q==="showroom"&&q(),Rt(),Fi(()=>{i.running&&!ct&&!c.matches&&(ft(),ct.group.visible=!1)})}),s.get("pkm.drive.tip",!1)||(setTimeout(()=>Z("Tip","Click a door, the bonnet or the PKM sign. The car beside the turntable swaps in when you click it."),1200),s.set("pkm.drive.tip",!0)),n.get("mode")==="drive"&&requestAnimationFrame(()=>{i.running&&V("drive",!1)}),requestAnimationFrame(kt),window.__ds={scene:g,cars:k,drive:ut,setMode:V,selectCar:ee,setMood:Tt,flyTo:te,get course(){return ct},togglePanel:Lt,secret:xe}}export{FM as startStudio};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
