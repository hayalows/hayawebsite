var Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eh=0,ic=1,Ah=2;var $i=1,Ch=2,ks=3,Li=0,an=1,un=2,ci=0,zs=1,ji=2,sc=3,rc=4,Rh=5;var Qi=100,Ph=101,Ih=102,Lh=103,Dh=104,Nh=200,Uh=201,Fh=202,Oh=203,ac=204,oc=205,Bh=206,kh=207,zh=208,Gh=209,Vh=210,Hh=211,Wh=212,Xh=213,qh=214,Oa=0,Ba=1,ka=2,ws=3,za=4,Ga=5,Va=6,Ha=7,lc=0,Yh=1,Zh=2,qn=0,Hr=1,Wr=2,Xr=3,ts=4,qr=5,Yr=6,Zr=7;var cc=300,es=301,Gs=302,go=303,_o=304,In=1e3,Wn=1001,Wa=1002,tn=1003,Kh=1004;var Kr=1005;var mn=1006,xo=1007;var hi=1008;var _n=1009,hc=1010,uc=1011,Vs=1012,vo=1013,zn=1014,Nn=1015,qe=1016,yo=1017,Mo=1018,ns=1020,dc=35902,fc=35899,pc=1021,mc=1022,Gn=1023,ni=1026,ui=1027,So=1028,bo=1029,Di=1030,wo=1031;var To=1033,Jr=33776,$r=33777,jr=33778,Qr=33779,Eo=35840,Ao=35841,Co=35842,Ro=35843,Po=36196,Io=37492,Lo=37496,Do=37488,No=37489,ta=37490,Uo=37491,Fo=37808,Oo=37809,Bo=37810,ko=37811,zo=37812,Go=37813,Vo=37814,Ho=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Zo=37820,Ko=37821,Jo=36492,$o=36494,jo=36495,Qo=36283,tl=36284,ea=36285,el=36286;var hr=2300,Xa=2301,Ua=2302,Vl=2303,Hl=2400,Wl=2401,Xl=2402;var Jh=3200;var nl=0,$h=1,Vn="",sn="srgb",ur="srgb-linear",dr="linear",Ae="srgb";var Fa=7680;var jh=519,Qh=512,tu=513,eu=514,gc=515,nu=516,iu=517,_c=518,xc=519,su=35044;var vc="300 es",Pn=2e3,Ts=2001;function dd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=fr("canvas");return i.style.display="block",i}var Wc={},Es=null;function yc(...i){let t="THREE."+i.shift();Es?Es("log",t,...i):console.log(t,...i)}function au(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=au(i);let t="THREE."+i.shift();if(Es)Es("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ue(...i){i=au(i);let t="THREE."+i.shift();if(Es)Es("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in Wc||(Wc[t]=!0,oe(...i))}function ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lu={[Oa]:Oa,[ka]:Va,[za]:za,[ws]:Ga,[Ba]:Ba,[Va]:ka,[Ha]:Ha,[Ga]:ws},kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,ar=Math.PI/180,Wi=180/Math.PI;function is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function Mc(i,t){return(i%t+t)%t}function pd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function md(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function gd(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function _d(i,t=1){return t-Math.abs(Mc(i,t*2)-t)}function xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Md(i,t){return i+Math.random()*(t-i)}function Sd(i){return i*(.5-Math.random())}function bd(i){i!==void 0&&(Xc=i);let t=Xc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wd(i){return i*ar}function Td(i){return i*Wi}function Ed(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),f=r((t-n)/2),h=a((t-n)/2),p=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*u,o*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function cu(i,t){if(t.constructor===Float32Array)return i;let e=bc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function hu(i,t){if(t.constructor===Float32Array)return i;let e=bc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var di={DEG2RAD:ar,RAD2DEG:Wi,generateUUID:is,clamp:pe,euclideanModulo:Mc,mapLinear:pd,inverseLerp:md,lerp:or,damp:gd,pingpong:_d,smoothstep:xd,smootherstep:vd,randInt:yd,randFloat:Md,randFloatSpread:Sd,seededRandom:bd,degToRad:wd,radToDeg:Td,isPowerOfTwo:Ed,ceilPowerOfTwo:Ad,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:Cd,normalize:hu,denormalize:cu},vt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],m=r[a+2],M=r[a+3];if(f!==M||l!==h||c!==p||u!==m){let d=l*h+c*p+u*m+f*M;d<0&&(h=-h,p=-p,m=-m,M=-M,d=-d);let g=1-o;if(d<.9995){let S=Math.acos(d),w=Math.sin(S);g=Math.sin(g*S)/w,o=Math.sin(o*S)/w,l=l*g+h*o,c=c*g+p*o,u=u*g+m*o,f=f*g+M*o}else{l=l*g+h*o,c=c*g+p*o,u=u*g+m*o,f=f*g+M*o;let S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+u*f+l*p-c*h,t[e+1]=l*m+u*h+c*f-o*p,t[e+2]=c*m+u*p+o*h-l*f,t[e+3]=u*m-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f-h*p*m;break;case"YXZ":this._x=h*u*f+c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f+h*p*m;break;case"ZXY":this._x=h*u*f-c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f-h*p*m;break;case"ZYX":this._x=h*u*f-c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f+h*p*m;break;case"YZX":this._x=h*u*f+c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f-h*p*m;break;case"XZY":this._x=h*u*f-c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f+h*p*m;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new D,qc=new en,fe=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],m=n[8],M=s[0],d=s[3],g=s[6],S=s[1],w=s[4],y=s[7],C=s[2],E=s[5],x=s[8];return r[0]=a*M+o*S+l*C,r[3]=a*d+o*w+l*E,r[6]=a*g+o*y+l*x,r[1]=c*M+u*S+f*C,r[4]=c*d+u*w+f*E,r[7]=c*g+u*y+f*x,r[2]=h*M+p*S+m*C,r[5]=h*d+p*w+m*E,r[8]=h*g+p*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,m=e*f+n*h+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return t[0]=f*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=p*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new fe,Yc=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){let i={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ur]:{primaries:t,whitePoint:n,transfer:dr,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var _e=Rd();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cs,qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cs===void 0&&(cs=fr("canvas")),cs.width=t.width,cs.height=t.height;let s=cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pd=0,As=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ml(s[a].image)):r.push(Ml(s[a]))}else r=Ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var Id=0,Sl=new D,gn=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=mn,a=hi,o=Gn,l=_n,c=i.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=is(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case In:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case In:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=cc;gn.DEFAULT_ANISOTROPY=1;var De=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],m=l[9],M=l[2],d=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(m-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(m+d)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(p+1)/2,C=(g+1)/2,E=(u+h)/4,x=(f+M)/4,b=(m+d)/4;return w>y&&w>C?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=x/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=b/r),this.set(n,s,r,e),this}let S=Math.sqrt((d-m)*(d-m)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-m)/S,this.y=(f-M)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ya=class extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new gn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new As(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends Ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},pr=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Za=class extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ye=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,f,h,p,m,M,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,f,h,p,m,M,d)}set(t,e,n,s,r,a,o,l,c,u,f,h,p,m,M,d){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=p,g[7]=m,g[11]=M,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=a*u,p=a*f,m=o*u,M=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+m*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=m+p*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,p=l*f,m=c*u,M=c*f;e[0]=h+M*o,e[4]=m*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-m,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,p=l*f,m=c*u,M=c*f;e[0]=h-M*o,e[4]=-a*f,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,p=a*f,m=o*u,M=o*f;e[0]=l*u,e[4]=m*c-p,e[8]=h*c+M,e[1]=l*f,e[5]=M*c+h,e[9]=p*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,p=a*c,m=o*l,M=o*c;e[0]=l*u,e[4]=M-h*f,e[8]=m*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+m,e[10]=h-M*f}else if(t.order==="XZY"){let h=a*l,p=a*c,m=o*l,M=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+M,e[5]=a*u,e[9]=p*f-m,e[2]=m*f-p,e[6]=o*u,e[10]=M*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Dd)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),mi.crossVectors(n,Mn),mi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),mi.crossVectors(n,Mn)),mi.normalize(),ha.crossVectors(Mn,mi),s[0]=mi.x,s[4]=ha.x,s[8]=Mn.x,s[1]=mi.y,s[5]=ha.y,s[9]=Mn.y,s[2]=mi.z,s[6]=ha.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],m=n[2],M=n[6],d=n[10],g=n[14],S=n[3],w=n[7],y=n[11],C=n[15],E=s[0],x=s[4],b=s[8],B=s[12],A=s[1],I=s[5],N=s[9],$=s[13],F=s[2],X=s[6],V=s[10],Y=s[14],pt=s[3],rt=s[7],ht=s[11],at=s[15];return r[0]=a*E+o*A+l*F+c*pt,r[4]=a*x+o*I+l*X+c*rt,r[8]=a*b+o*N+l*V+c*ht,r[12]=a*B+o*$+l*Y+c*at,r[1]=u*E+f*A+h*F+p*pt,r[5]=u*x+f*I+h*X+p*rt,r[9]=u*b+f*N+h*V+p*ht,r[13]=u*B+f*$+h*Y+p*at,r[2]=m*E+M*A+d*F+g*pt,r[6]=m*x+M*I+d*X+g*rt,r[10]=m*b+M*N+d*V+g*ht,r[14]=m*B+M*$+d*Y+g*at,r[3]=S*E+w*A+y*F+C*pt,r[7]=S*x+w*I+y*X+C*rt,r[11]=S*b+w*N+y*V+C*ht,r[15]=S*B+w*$+y*Y+C*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],m=t[3],M=t[7],d=t[11],g=t[15],S=l*p-c*h,w=o*p-c*f,y=o*h-l*f,C=a*p-c*u,E=a*h-l*u,x=a*f-o*u;return e*(M*S-d*w+g*y)-n*(m*S-d*C+g*E)+s*(m*w-M*C+g*x)-r*(m*y-M*E+d*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],m=t[12],M=t[13],d=t[14],g=t[15],S=e*o-n*a,w=e*l-s*a,y=e*c-r*a,C=n*l-s*o,E=n*c-r*o,x=s*c-r*l,b=u*M-f*m,B=u*d-h*m,A=u*g-p*m,I=f*d-h*M,N=f*g-p*M,$=h*g-p*d,F=S*$-w*N+y*I+C*A-E*B+x*b;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/F;return t[0]=(o*$-l*N+c*I)*X,t[1]=(s*N-n*$-r*I)*X,t[2]=(M*x-d*E+g*C)*X,t[3]=(h*E-f*x-p*C)*X,t[4]=(l*A-a*$-c*B)*X,t[5]=(e*$-s*A+r*B)*X,t[6]=(d*y-m*x-g*w)*X,t[7]=(u*x-h*y+p*w)*X,t[8]=(a*N-o*A+c*b)*X,t[9]=(n*A-e*N-r*b)*X,t[10]=(m*E-M*y+g*S)*X,t[11]=(f*y-u*E-p*S)*X,t[12]=(o*B-a*I-l*b)*X,t[13]=(e*I-n*B+s*b)*X,t[14]=(M*w-m*C-d*S)*X,t[15]=(u*C-f*w+h*S)*X,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,m=r*f,M=a*u,d=a*f,g=o*f,S=l*c,w=l*u,y=l*f,C=n.x,E=n.y,x=n.z;return s[0]=(1-(M+g))*C,s[1]=(p+y)*C,s[2]=(m-w)*C,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(h+g))*E,s[6]=(d+S)*E,s[7]=0,s[8]=(m+w)*x,s[9]=(d-S)*x,s[10]=(1-(h+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let c=1/a,u=1/o,f=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,e.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),m,M;if(l)m=r/(a-r),M=a*r/(a-r);else if(o===Pn)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ts)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),m,M;if(l)m=1/(a-r),M=a/(a-r);else if(o===Pn)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ts)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new D,Fn=new ye,Ld=new D(0,0,0),Dd=new D(1,1,1),mi=new D,ha=new D,Mn=new D,Kc=new ye,Jc=new en,ii=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nd=0,$c=new D,us=new en,Jn=new ye,ua=new D,Qs=new D,Ud=new D,Fd=new en,jc=new D(1,0,0),Qc=new D(0,1,0),th=new D(0,0,1),eh={type:"added"},Od={type:"removed"},ds={type:"childadded",child:null},bl={type:"childremoved",child:null},We=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ii,n=new en,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new fe}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Qs,ua,this.up):Jn.lookAt(ua,Qs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Jn),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),ds.child=t,this.dispatchEvent(ds),ds.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new D(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let d=e.getJointPose(M,n),g=this._getHandJoint(c,M);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&h>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},da={h:0,s:0,l:0};function wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=_e.workingColorSpace){if(t=Mc(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wl(a,r,t+1/3),this.g=wl(a,r,t),this.b=wl(a,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=sn){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){let n=uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return _e.workingToColorSpace(hn.copy(this),t),Math.round(pe(hn.r*255,0,255))*65536+Math.round(pe(hn.g*255,0,255))*256+Math.round(pe(hn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=sn){_e.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(da);let n=or(gi.h,da.h,e),s=or(gi.s,da.s,e),r=or(gi.l,da.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ee;ee.NAMES=uu;var mr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Mi=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new D,$n=new D,Tl=new D,jn=new D,fs=new D,ps=new D,nh=new D,El=new D,Al=new D,Cl=new D,Rl=new De,Pl=new De,Il=new De,yi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),$n.subVectors(n,e),Tl.subVectors(t,e);let a=On.dot(On),o=On.dot($n),l=On.dot(Tl),c=$n.dot($n),u=$n.dot(Tl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Rl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Rl.fromBufferAttribute(t,e),Pl.fromBufferAttribute(t,n),Il.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Pl,r.y),a.addScaledVector(Il,r.z),a}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),$n.subVectors(t,e),On.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),On.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;fs.subVectors(s,n),ps.subVectors(r,n),El.subVectors(t,n);let l=fs.dot(El),c=ps.dot(El);if(l<=0&&c<=0)return e.copy(n);Al.subVectors(t,s);let u=fs.dot(Al),f=ps.dot(Al);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(fs,a);Cl.subVectors(t,r);let p=fs.dot(Cl),m=ps.dot(Cl);if(m>=0&&p<=m)return e.copy(r);let M=p*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ps,o);let d=u*m-p*f;if(d<=0&&f-u>=0&&p-m>=0)return nh.subVectors(r,s),o=(f-u)/(f-u+(p-m)),e.copy(s).addScaledVector(nh,o);let g=1/(d+M+h);return a=M*g,o=h*g,e.copy(n).addScaledVector(fs,a).addScaledVector(ps,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),pa.subVectors(this.max,tr),ms.subVectors(t.a,tr),gs.subVectors(t.b,tr),_s.subVectors(t.c,tr),_i.subVectors(gs,ms),xi.subVectors(_s,gs),Bi.subVectors(ms,_s);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Bi.y,Bi.x,0];return!Ll(e,ms,gs,_s,pa)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,ms,gs,_s,pa))?!1:(ma.crossVectors(_i,xi),e=[ma.x,ma.y,ma.z],Ll(e,ms,gs,_s,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,fa=new Xn,ms=new D,gs=new D,_s=new D,_i=new D,xi=new D,Bi=new D,tr=new D,pa=new D,ma=new D,ki=new D;function Ll(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var He=new D,ga=new vt,kd=0,bn=class extends kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=t!==void 0?bc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):cu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):hu(t,this.array)}};var gr=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _r=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},zd=new Xn,er=new D,Dl=new D,si=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Dl)),this.expandByPoint(er.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gd=0,Rn=new ye,Nl=new We,xs=new D,Sn=new Xn,nr=new Xn,je=new D,Be=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dd(t)?_r:gr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Sn.min,nr.min),Sn.expandByPoint(je),je.addVectors(Sn.max,nr.max),Sn.expandByPoint(je)):(Sn.expandByPoint(nr.min),Sn.expandByPoint(nr.max))}Sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)je.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),je.add(xs)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new D,l[B]=new D;let u=new D,f=new D,h=new D,p=new vt,m=new vt,M=new vt,d=new D,g=new D;function S(B,A,I){c[B]=c[A]=c[I]=1,u.fromBufferAttribute(n,B),f.fromBufferAttribute(n,A),h.fromBufferAttribute(n,I),p.fromBufferAttribute(r,B),m.fromBufferAttribute(r,A),M.fromBufferAttribute(r,I),f.sub(u),h.sub(u),m.sub(p),M.sub(p);let N=1/(m.x*M.y-M.x*m.y);isFinite(N)&&(d.copy(f).multiplyScalar(M.y).addScaledVector(h,-m.y).multiplyScalar(N),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(N),o[B].add(d),o[A].add(d),o[I].add(d),l[B].add(g),l[A].add(g),l[I].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let B=0,A=w.length;B<A;++B){let I=w[B],N=I.start,$=I.count;for(let F=N,X=N+$;F<X;F+=3)S(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new D,C=new D,E=new D,x=new D;function b(B){E.fromBufferAttribute(s,B),x.copy(E);let A=o[B];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),C.crossVectors(x,A);let N=C.dot(l[B])<0?-1:1;a.setXYZW(B,y.x,y.y,y.z,N)}for(let B=0,A=n.count;B<A;++B)c[B]&&b(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,f=new D;if(t)for(let h=0,p=t.count;h<p;h+=3){let m=t.getX(h+0),M=t.getX(h+1),d=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,d),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,m=0;for(let M=0,d=l.length;M<d;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let g=0;g<u;g++)h[m++]=c[p++]}return new bn(h,u,f)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ul=new D,Vd=new D,Hd=new fe,pn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ul.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ul),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(Ul).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wd=0,ri=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=is(),this.name="",this.type="Material",this.blending=zs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ti=new D,Fl=new D,_a=new D,xa=new D,Si=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fl.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),xa.copy(this.origin).sub(Fl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_a),o=xa.dot(this.direction),l=-xa.dot(_a),c=xa.lengthSq(),u=Math.abs(1-a*a),f,h,p,m;if(u>0)if(f=a*l-o,h=a*o-l,m=r*u,f>=0)if(h>=-m)if(h<=m){let M=1/u;f*=M,h*=M,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fl).addScaledVector(_a,h),p}intersectSphere(t,e){if(t.radius<0)return null;ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,p=t.z-a.z,m=e.x-a.x,M=e.y-a.y,d=e.z-a.z,g=n.x-a.x,S=n.y-a.y,w=n.z-a.z,y=Math.abs(l),C=Math.abs(c),E=Math.abs(u),x,b,B,A,I,N,$,F,X,V,Y,pt;if(y>=C&&y>=E?(B=l,N=f,X=m,pt=g,l>=0?(x=c,b=u,A=h,I=p,$=M,F=d,V=S,Y=w):(x=u,b=c,A=p,I=h,$=d,F=M,V=w,Y=S)):C>=E?(B=c,N=h,X=M,pt=S,c>=0?(x=u,b=l,A=p,I=f,$=d,F=m,V=w,Y=g):(x=l,b=u,A=f,I=p,$=m,F=d,V=g,Y=w)):(B=u,N=p,X=d,pt=w,u>=0?(x=l,b=c,A=f,I=h,$=m,F=M,V=g,Y=S):(x=c,b=l,A=h,I=f,$=M,F=m,V=S,Y=g)),B===0)return null;let rt=x/B,ht=b/B,at=1/B,it=A-rt*N,_t=I-ht*N,q=$-rt*X,gt=F-ht*X,mt=V-rt*pt,Ut=Y-ht*pt,wt=mt*gt-Ut*q,Ot=it*Ut-_t*mt,ce=q*_t-gt*it;if(s){if(wt<0||Ot<0||ce<0)return null}else if((wt<0||Ot<0||ce<0)&&(wt>0||Ot>0||ce>0))return null;let qt=wt+Ot+ce;if(qt===0)return null;let Zt=at*(wt*N+Ot*X+ce*pt);return(qt>0?Zt<0:Zt>0)?null:this.at(Zt/qt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ih=new ye,zi=new Si,va=new si,sh=new D,ya=new D,Ma=new D,Sa=new D,Ol=new D,ba=new D,rh=new D,wa=new D,ie=class extends We{constructor(t=new Be,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Ol.fromBufferAttribute(f,t),a?ba.addScaledVector(Ol,u):ba.addScaledVector(Ol.sub(e),u))}e.add(ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(va.containsPoint(zi.origin)===!1&&(zi.intersectSphere(va,sh)===null||zi.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),zi.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=h.length;m<M;m++){let d=h[m],g=a[d.materialIndex],S=Math.max(d.start,p.start),w=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let y=S,C=w;y<C;y+=3){let E=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=Ta(this,g,t,n,c,u,f,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let d=m,g=M;d<g;d+=3){let S=o.getX(d),w=o.getX(d+1),y=o.getX(d+2);s=Ta(this,a,t,n,c,u,f,S,w,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=h.length;m<M;m++){let d=h[m],g=a[d.materialIndex],S=Math.max(d.start,p.start),w=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let y=S,C=w;y<C;y+=3){let E=y,x=y+1,b=y+2;s=Ta(this,g,t,n,c,u,f,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let d=m,g=M;d<g;d+=3){let S=d,w=d+1,y=d+2;s=Ta(this,a,t,n,c,u,f,S,w,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function Xd(i,t,e,n,s,r,a,o){let l;if(t.side===an?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;wa.copy(o),wa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wa);return c<e.near||c>e.far?null:{distance:c,point:wa.clone(),object:i}}function Ta(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ya),i.getVertexPosition(l,Ma),i.getVertexPosition(c,Sa);let u=Xd(i,t,e,n,ya,Ma,Sa,rh);if(u){let f=new D;yi.getBarycoord(rh,ya,Ma,Sa,f),s&&(u.uv=yi.getInterpolatedAttribute(s,o,l,c,f,new vt)),r&&(u.uv1=yi.getInterpolatedAttribute(r,o,l,c,f,new vt)),a&&(u.normal=yi.getInterpolatedAttribute(a,o,l,c,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};yi.getNormal(ya,Ma,Sa,h.normal),u.face=h,u.barycoord=f}return u}var xr=class extends gn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=tn,u=tn,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new ye,ah=new ye,Ea=[],oh=new Xn,qd=new ye,ir=new ie,sr=new si,ai=class extends ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),oh.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(oh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),sr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),ah.multiplyMatrices(n,vs),ir.matrixWorld=ah,ir.raycast(t,Ea);for(let a=0,o=Ea.length;a<o;a++){let l=Ea[a];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(s*this.count),s,this.count,So,Nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new si,Yd=new vt(.5,.5),Aa=new D,bi=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],m=r[8],M=r[9],d=r[10],g=r[11],S=r[12],w=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,g-m,C-S).normalize(),s[1].setComponents(c+a,p+u,g+m,C+S).normalize(),s[2].setComponents(c+o,p+f,g+M,C+w).normalize(),s[3].setComponents(c-o,p-f,g-M,C-w).normalize(),n)s[4].setComponents(l,h,d,y).normalize(),s[5].setComponents(c-l,p-h,g-d,C-y).normalize();else if(s[4].setComponents(c-l,p-h,g-d,C-y).normalize(),e===Pn)s[5].setComponents(c+l,p+h,g+d,C+y).normalize();else if(e===Ts)s[5].setComponents(l,h,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=Yd.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Aa.x=s.normal.x>0?t.max.x:t.min.x,Aa.y=s.normal.y>0?t.max.y:t.min.y,Aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lh=new ye,Ka=class i{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];lh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new bi),n[s].setFromProjectionMatrix(lh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new bi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ps=class extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ch=new ye,ql=new Si,Ca=new si,Ra=new D,yr=class extends We{constructor(t=new Be,e=new Ps){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;ch.copy(s).invert(),ql.copy(t.ray).applyMatrix4(ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=h,M=p;m<M;m++){let d=c.getX(m);Ra.fromBufferAttribute(f,d),hh(Ra,d,l,s,t,e,this)}}else{let h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let m=h,M=p;m<M;m++)Ra.fromBufferAttribute(f,m),hh(Ra,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hh(i,t,e,n,s,r,a){let o=ql.distanceSqToPoint(i);if(o<e){let l=new D;ql.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Mr=class extends gn{constructor(t=[],e=es,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xi=class extends gn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends gn{constructor(t,e,n=zn,s,r,a,o=tn,l=tn,c,u=ni,f=1){if(u!==ni&&u!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Sr=class extends oi{constructor(t,e=zn,n=es,s,r,a=tn,o=tn,l,c=ni){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},br=class extends gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xe=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function m(M,d,g,S,w,y,C,E,x,b,B){let A=y/x,I=C/b,N=y/2,$=C/2,F=E/2,X=x+1,V=b+1,Y=0,pt=0,rt=new D;for(let ht=0;ht<V;ht++){let at=ht*I-$;for(let it=0;it<X;it++){let _t=it*A-N;rt[M]=_t*S,rt[d]=at*w,rt[g]=F,c.push(rt.x,rt.y,rt.z),rt[M]=0,rt[d]=0,rt[g]=E>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(it/x),f.push(1-ht/b),Y+=1}}for(let ht=0;ht<b;ht++)for(let at=0;at<x;at++){let it=h+at+X*ht,_t=h+at+X*(ht+1),q=h+(at+1)+X*(ht+1),gt=h+(at+1)+X*ht;l.push(it,_t,gt),l.push(_t,q,gt),pt+=6}o.addGroup(p,pt,B),p+=pt,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var wr=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,u=new vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Dn=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],p=[],m=0,M=[],d=n/2,g=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(p,2));function S(){let y=new D,C=new D,E=0,x=(e-t)/n;for(let b=0;b<=r;b++){let B=[],A=b/r,I=A*(e-t)+t;for(let N=0;N<=s;N++){let $=N/s,F=$*l+o,X=Math.sin(F),V=Math.cos(F);C.x=I*X,C.y=-A*n+d,C.z=I*V,f.push(C.x,C.y,C.z),y.set(X,x,V).normalize(),h.push(y.x,y.y,y.z),p.push($,1-A),B.push(m++)}M.push(B)}for(let b=0;b<s;b++)for(let B=0;B<r;B++){let A=M[B][b],I=M[B+1][b],N=M[B+1][b+1],$=M[B][b+1];(t>0||B!==0)&&(u.push(A,I,$),E+=3),(e>0||B!==r-1)&&(u.push(I,N,$),E+=3)}c.addGroup(g,E,0),g+=E}function w(y){let C=m,E=new vt,x=new D,b=0,B=y===!0?t:e,A=y===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,d*A,0),h.push(0,A,0),p.push(.5,.5),m++;let I=m;for(let N=0;N<=s;N++){let F=N/s*l+o,X=Math.cos(F),V=Math.sin(F);x.x=B*V,x.y=d*A,x.z=B*X,f.push(x.x,x.y,x.z),h.push(0,A,0),E.x=X*.5+.5,E.y=V*.5*A+.5,p.push(E.x,E.y),m++}for(let N=0;N<s;N++){let $=C+N,F=I+N;y===!0?u.push(F,F+1,$):u.push(F+1,F,$),b+=3}c.addGroup(g,b,y===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tr=class i extends Dn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ja=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new D,y=new D,C=new D;for(let E=0;E<e.length;E+=3)p(e[E+0],w),p(e[E+1],y),p(e[E+2],C),l(w,y,C,S)}function l(S,w,y,C){let E=C+1,x=[];for(let b=0;b<=E;b++){x[b]=[];let B=S.clone().lerp(y,b/E),A=w.clone().lerp(y,b/E),I=E-b;for(let N=0;N<=I;N++)N===0&&b===E?x[b][N]=B:x[b][N]=B.clone().lerp(A,N/I)}for(let b=0;b<E;b++)for(let B=0;B<2*(E-b)-1;B++){let A=Math.floor(B/2);B%2===0?(h(x[b][A+1]),h(x[b+1][A]),h(x[b][A])):(h(x[b][A+1]),h(x[b+1][A+1]),h(x[b+1][A]))}}function c(S){let w=new D;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(S),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function u(){let S=new D;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let y=d(S)/2/Math.PI+.5,C=g(S)/Math.PI+.5;a.push(y,1-C)}m(),f()}function f(){for(let S=0;S<a.length;S+=6){let w=a[S+0],y=a[S+2],C=a[S+4],E=Math.max(w,y,C),x=Math.min(w,y,C);E>.9&&x<.1&&(w<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function p(S,w){let y=S*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function m(){let S=new D,w=new D,y=new D,C=new D,E=new vt,x=new vt,b=new vt;for(let B=0,A=0;B<r.length;B+=9,A+=6){S.set(r[B+0],r[B+1],r[B+2]),w.set(r[B+3],r[B+4],r[B+5]),y.set(r[B+6],r[B+7],r[B+8]),E.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),C.copy(S).add(w).add(y).divideScalar(3);let I=d(C);M(E,A+0,S,I),M(x,A+2,w,I),M(b,A+4,y,I)}}function M(S,w,y,C){C<0&&S.x===1&&(a[w]=S.x-1),y.x===0&&y.z===0&&(a[w]=C/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new vt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new ye;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(pe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Is=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends Is{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var uh=new D,dh=new D,Bl=new wc,kl=new wc,zl=new wc,qi=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(dh.subVectors(s[0],s[1]).add(s[0]),c=dh);let f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(uh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(h),p),d=Math.pow(h.distanceToSquared(u),p);M<1e-4&&(M=1),m<1e-4&&(m=M),d<1e-4&&(d=M),Bl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,m,M,d),kl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,m,M,d),zl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,m,M,d)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),kl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),zl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Bl.calc(l),kl.calc(l),zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Zd(i,t){let e=1-i;return e*e*t}function Kd(i,t){return 2*(1-i)*i*t}function Jd(i,t){return i*i*t}function lr(i,t,e,n){return Zd(i,t)+Kd(i,e)+Jd(i,n)}function $d(i,t){let e=1-i;return e*e*e*t}function jd(i,t){let e=1-i;return 3*e*e*i*t}function Qd(i,t){return 3*(1-i)*i*i*t}function tf(i,t){return i*i*i*t}function cr(i,t,e,n,s){return $d(i,t)+jd(i,e)+Qd(i,n)+tf(i,s)}var Er=class extends wn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,s.x,r.x,a.x,o.x),cr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends wn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,s.x,r.x,a.x,o.x),cr(t,s.y,r.y,a.y,o.y),cr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends wn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends wn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends wn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(lr(t,s.x,r.x,a.x),lr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends wn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(lr(t,s.x,r.x,a.x),lr(t,s.y,r.y,a.y),lr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(fh(o,l.x,c.x,u.x,f.x),fh(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},Yl=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:qi,CubicBezierCurve:Er,CubicBezierCurve3:ja,EllipseCurve:Is,LineCurve:Ar,LineCurve3:Qa,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:to,SplineCurve:Rr}),eo=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Pr=class extends eo{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ar(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cr(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Er(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Is(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ls=class extends Pr{constructor(t){super(t),this.uuid=is(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Pr().fromJSON(s))}return this}};function ef(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=du(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=of(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,f=l;for(let h=e;h<s;h+=e){let p=i[h],m=i[h+1];p<o&&(o=p),m<l&&(l=m),p>u&&(u=p),m>f&&(f=m)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ir(r,a,e,o,l,c,0),a}function du(i,t,e,n,s){let r;if(s===xf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ph(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ph(a/n|0,i[a],i[a+1],r);return r&&Ds(r,r.next)&&(Dr(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ds(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,a){if(!i)return;!a&&r&&df(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sf(i,n,s,r):nf(i)){t.push(l.i,i.i,c.i),Dr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rf(Yi(i),t),Ir(i,t,e,n,s,r,2)):a===2&&af(i,t,e,n,s,r):Ir(Yi(i),t,e,n,s,r,1);break}}}function nf(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),p=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=p&&rr(s,o,r,l,a,c,m.x,m.y)&&Oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function sf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Oe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,p=Math.min(o,l,c),m=Math.min(u,f,h),M=Math.max(o,l,c),d=Math.max(u,f,h),g=Zl(p,m,t,e,n),S=Zl(M,d,t,e,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=g&&y&&y.z<=S;){if(w.x>=p&&w.x<=M&&w.y>=m&&w.y<=d&&w!==s&&w!==a&&rr(o,u,l,f,c,h,w.x,w.y)&&Oe(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=p&&y.x<=M&&y.y>=m&&y.y<=d&&y!==s&&y!==a&&rr(o,u,l,f,c,h,y.x,y.y)&&Oe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=g;){if(w.x>=p&&w.x<=M&&w.y>=m&&w.y<=d&&w!==s&&w!==a&&rr(o,u,l,f,c,h,w.x,w.y)&&Oe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=M&&y.y>=m&&y.y<=d&&y!==s&&y!==a&&rr(o,u,l,f,c,h,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ds(n,s)&&pu(n,e,e.next,s)&&Lr(n,s)&&Lr(s,n)&&(t.push(n.i,e.i,s.i),Dr(e),Dr(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function af(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mf(a,o)){let l=mu(a,o);a=Yi(a,a.next),l=Yi(l,l.next),Ir(a,t,e,n,s,r,0),Ir(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function of(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=du(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pf(c))}s.sort(lf);for(let r=0;r<s.length;r++)e=cf(s[r],e);return e}function lf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cf(i,t){let e=hf(i,t);if(!e)return t;let n=mu(e,i);return Yi(n,n.next),Yi(e,e.next)}function hf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ds(i,e))return e;do{if(Ds(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&fu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Lr(e,i)&&(f<u||f===u&&(e.x>a.x||e.x===a.x&&uf(a,e)))&&(a=e,u=f)}e=e.next}while(e!==o);return a}function uf(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function df(i,t,e,n){let s=i;do s.z===0&&(s.z=Zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ff(s)}function ff(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function rr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&fu(i,t,e,n,s,r,a,o)}function mf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gf(i,t)&&(Lr(i,t)&&Lr(t,i)&&_f(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||Ds(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ds(i,t){return i.x===t.x&&i.y===t.y}function pu(i,t,e,n){let s=Ia(Oe(i,t,e)),r=Ia(Oe(i,t,n)),a=Ia(Oe(e,n,i)),o=Ia(Oe(e,n,t));return!!(s!==r&&a!==o||s===0&&Pa(i,e,t)||r===0&&Pa(i,n,t)||a===0&&Pa(e,i,n)||o===0&&Pa(e,t,n))}function Pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ia(i){return i>0?1:i<0?-1:0}function gf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function _f(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mu(i,t){let e=Kl(i.i,i.x,i.y),n=Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ph(i,t,e,n){let s=Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Jl=class{static triangulate(t,e,n=2){return ef(t,e,n)}},Vi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];mh(t),gh(n,t);let a=t.length;e.forEach(mh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,gh(n,e[l]);let o=Jl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function mh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Nr=class i extends Be{constructor(t=new Ls([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:vf,w,y=!1,C,E,x,b;if(g){w=g.getSpacedPoints(u),y=!0,h=!1;let ct=g.isCatmullRomCurve3?g.closed:!1;C=g.computeFrenetFrames(u,ct),E=new D,x=new D,b=new D}h||(d=0,p=0,m=0,M=0);let B=o.extractPoints(c),A=B.shape,I=B.holes;if(!Vi.isClockWise(A)){A=A.reverse();for(let ct=0,dt=I.length;ct<dt;ct++){let yt=I[ct];Vi.isClockWise(yt)&&(I[ct]=yt.reverse())}}function $(ct){let yt=10000000000000001e-36,Ft=ct[0];for(let It=1;It<=ct.length;It++){let Vt=It%ct.length,Bt=ct[Vt],jt=Bt.x-Ft.x,re=Bt.y-Ft.y,ne=jt*jt+re*re,H=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(Ft.x),Math.abs(Ft.y)),Xt=yt*H*H;if(ne<=Xt){ct.splice(Vt,1),It--;continue}Ft=Bt}}$(A),I.forEach($);let F=I.length,X=A;for(let ct=0;ct<F;ct++){let dt=I[ct];A=A.concat(dt)}function V(ct,dt,yt){return dt||ue("ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(dt,yt)}let Y=A.length;function pt(ct,dt,yt){let Ft,It,Vt,Bt=ct.x-dt.x,jt=ct.y-dt.y,re=yt.x-ct.x,ne=yt.y-ct.y,H=Bt*Bt+jt*jt,Xt=Bt*ne-jt*re;if(Math.abs(Xt)>Number.EPSILON){let ae=Math.sqrt(H),he=Math.sqrt(re*re+ne*ne),Rt=dt.x-jt/ae,Se=dt.y+Bt/ae,zt=yt.x-ne/he,Kt=yt.y+re/he,P=((zt-Rt)*ne-(Kt-Se)*re)/(Bt*ne-jt*re);Ft=Rt+Bt*P-ct.x,It=Se+jt*P-ct.y;let _=Ft*Ft+It*It;if(_<=2)return new vt(Ft,It);Vt=Math.sqrt(_/2)}else{let ae=!1;Bt>Number.EPSILON?re>Number.EPSILON&&(ae=!0):Bt<-Number.EPSILON?re<-Number.EPSILON&&(ae=!0):Math.sign(jt)===Math.sign(ne)&&(ae=!0),ae?(Ft=-jt,It=Bt,Vt=Math.sqrt(H)):(Ft=Bt,It=jt,Vt=Math.sqrt(H/2))}return new vt(Ft/Vt,It/Vt)}let rt=[];for(let ct=0,dt=X.length,yt=dt-1,Ft=ct+1;ct<dt;ct++,yt++,Ft++)yt===dt&&(yt=0),Ft===dt&&(Ft=0),rt[ct]=pt(X[ct],X[yt],X[Ft]);let ht=[],at,it=rt.concat();for(let ct=0,dt=F;ct<dt;ct++){let yt=I[ct];at=[];for(let Ft=0,It=yt.length,Vt=It-1,Bt=Ft+1;Ft<It;Ft++,Vt++,Bt++)Vt===It&&(Vt=0),Bt===It&&(Bt=0),at[Ft]=pt(yt[Ft],yt[Vt],yt[Bt]);ht.push(at),it=it.concat(at)}let _t;if(d===0)_t=Vi.triangulateShape(X,I);else{let ct=[],dt=[];for(let yt=0;yt<d;yt++){let Ft=yt/d,It=p*Math.cos(Ft*Math.PI/2),Vt=m*Math.sin(Ft*Math.PI/2)+M;for(let Bt=0,jt=X.length;Bt<jt;Bt++){let re=V(X[Bt],rt[Bt],Vt);Ot(re.x,re.y,-It),Ft===0&&ct.push(re)}for(let Bt=0,jt=F;Bt<jt;Bt++){let re=I[Bt];at=ht[Bt];let ne=[];for(let H=0,Xt=re.length;H<Xt;H++){let ae=V(re[H],at[H],Vt);Ot(ae.x,ae.y,-It),Ft===0&&ne.push(ae)}Ft===0&&dt.push(ne)}}_t=Vi.triangulateShape(ct,dt)}let q=_t.length,gt=m+M;for(let ct=0;ct<Y;ct++){let dt=h?V(A[ct],it[ct],gt):A[ct];y?(x.copy(C.normals[0]).multiplyScalar(dt.x),E.copy(C.binormals[0]).multiplyScalar(dt.y),b.copy(w[0]).add(x).add(E),Ot(b.x,b.y,b.z)):Ot(dt.x,dt.y,0)}for(let ct=1;ct<=u;ct++)for(let dt=0;dt<Y;dt++){let yt=h?V(A[dt],it[dt],gt):A[dt];y?(x.copy(C.normals[ct]).multiplyScalar(yt.x),E.copy(C.binormals[ct]).multiplyScalar(yt.y),b.copy(w[ct]).add(x).add(E),Ot(b.x,b.y,b.z)):Ot(yt.x,yt.y,f/u*ct)}for(let ct=d-1;ct>=0;ct--){let dt=ct/d,yt=p*Math.cos(dt*Math.PI/2),Ft=m*Math.sin(dt*Math.PI/2)+M;for(let It=0,Vt=X.length;It<Vt;It++){let Bt=V(X[It],rt[It],Ft);Ot(Bt.x,Bt.y,f+yt)}for(let It=0,Vt=I.length;It<Vt;It++){let Bt=I[It];at=ht[It];for(let jt=0,re=Bt.length;jt<re;jt++){let ne=V(Bt[jt],at[jt],Ft);y?Ot(ne.x,ne.y+w[u-1].y,w[u-1].x+yt):Ot(ne.x,ne.y,f+yt)}}}mt(),Ut();function mt(){let ct=s.length/3;if(h){let dt=0,yt=Y*dt;for(let Ft=0;Ft<q;Ft++){let It=_t[Ft];ce(It[2]+yt,It[1]+yt,It[0]+yt)}dt=u+d*2,yt=Y*dt;for(let Ft=0;Ft<q;Ft++){let It=_t[Ft];ce(It[0]+yt,It[1]+yt,It[2]+yt)}}else{for(let dt=0;dt<q;dt++){let yt=_t[dt];ce(yt[2],yt[1],yt[0])}for(let dt=0;dt<q;dt++){let yt=_t[dt];ce(yt[0]+Y*u,yt[1]+Y*u,yt[2]+Y*u)}}n.addGroup(ct,s.length/3-ct,0)}function Ut(){let ct=s.length/3,dt=0;wt(X,dt),dt+=X.length;for(let yt=0,Ft=I.length;yt<Ft;yt++){let It=I[yt];wt(It,dt),dt+=It.length}n.addGroup(ct,s.length/3-ct,1)}function wt(ct,dt){let yt=ct.length;for(;--yt>=0;){let Ft=yt,It=yt-1;It<0&&(It=ct.length-1);for(let Vt=0,Bt=u+d*2;Vt<Bt;Vt++){let jt=Y*Vt,re=Y*(Vt+1),ne=dt+Ft+jt,H=dt+It+jt,Xt=dt+It+re,ae=dt+Ft+re;qt(ne,H,Xt,ae)}}}function Ot(ct,dt,yt){l.push(ct),l.push(dt),l.push(yt)}function ce(ct,dt,yt){Zt(ct),Zt(dt),Zt(yt);let Ft=s.length/3,It=S.generateTopUV(n,s,Ft-3,Ft-2,Ft-1);se(It[0]),se(It[1]),se(It[2])}function qt(ct,dt,yt,Ft){Zt(ct),Zt(dt),Zt(Ft),Zt(dt),Zt(yt),Zt(Ft);let It=s.length/3,Vt=S.generateSideWallUV(n,s,It-6,It-3,It-2,It-1);se(Vt[0]),se(Vt[1]),se(Vt[3]),se(Vt[1]),se(Vt[2]),se(Vt[3])}function Zt(ct){s.push(l[ct*3+0]),s.push(l[ct*3+1]),s.push(l[ct*3+2])}function se(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yl[s.type]().fromJSON(s)),new i(n,t.options)}},vf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new vt(r,a),new vt(o,l),new vt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],p=t[s*3+1],m=t[s*3+2],M=t[r*3],d=t[r*3+1],g=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new vt(a,1-l),new vt(c,1-f),new vt(h,1-m),new vt(M,1-g)]:[new vt(o,1-l),new vt(u,1-f),new vt(p,1-m),new vt(d,1-g)]}};function yf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ur=class i extends Ja{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fr=class i extends Be{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,f=new D,h=new vt,p=new D,m=new D,M=new D,d=0,g=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:d=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,p.x=g*1,p.y=-d,p.z=g*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:d=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,p.x=g*1,p.y=-d,p.z=g*0,m.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(m)}for(let S=0;S<=e;S++){let w=n+S*u*s,y=Math.sin(w),C=Math.cos(w);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*y,f.y=t[E].y,f.z=t[E].x*C,a.push(f.x,f.y,f.z),h.x=S/e,h.y=E/(t.length-1),o.push(h.x,h.y);let x=l[3*E+0]*y,b=l[3*E+1],B=l[3*E+0]*C;c.push(x,b,B)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){let y=w+S*t.length,C=y,E=y+t.length,x=y+t.length+1,b=y+1;r.push(C,E,b),r.push(x,b,E)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ue=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=t/o,h=e/l,p=[],m=[],M=[],d=[];for(let g=0;g<u;g++){let S=g*h-a;for(let w=0;w<c;w++){let y=w*f-r;m.push(y,-S,0),M.push(0,0,1),d.push(w/o),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){let w=S+c*g,y=S+c*(g+1),C=S+1+c*(g+1),E=S+1+c*g;p.push(w,y,E),p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Zi=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new D,h=new D,p=[],m=[],M=[],d=[];for(let g=0;g<=n;g++){let S=[],w=g/n,y=a+w*o,C=t*Math.cos(y),E=Math.sqrt(t*t-C*C),x=0;g===0&&a===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let B=b/e,A=s+B*r;f.x=-E*Math.cos(A),f.y=C,f.z=E*Math.sin(A),m.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),d.push(B+x,1-w),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){let w=u[g][S+1],y=u[g][S],C=u[g+1][S],E=u[g+1][S+1];(g!==0||a>0)&&p.push(w,y,E),(g!==n-1||l<Math.PI)&&p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wi=class i extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new D,p=new D,m=new D;for(let M=0;M<=n;M++){let d=a+M/n*o;for(let g=0;g<=s;g++){let S=g/s*r;p.x=(t+e*Math.cos(d))*Math.cos(S),p.y=(t+e*Math.cos(d))*Math.sin(S),p.z=e*Math.sin(d),c.push(p.x,p.y,p.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),m.subVectors(p,h).normalize(),u.push(m.x,m.y,m.z),f.push(g/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let d=1;d<=s;d++){let g=(s+1)*M+d-1,S=(s+1)*(M-1)+d-1,w=(s+1)*(M-1)+d,y=(s+1)*M+d;l.push(g,S,y),l.push(S,w,y)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(_h(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_h(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=ss(i[e]);for(let s in n)t[s]=n[s]}return t}function _h(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var En={clone:ss,merge:dn},Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new De().fromArray(s.value);break;case"m3":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ns=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ti=class extends Te{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var no=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},io=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ys(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function La(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ei=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},so=class extends Ei{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wl:r=t,o=2*e-n;break;case Xl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:a=t,l=2*n-e;break;case Xl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),M=m*m,d=M*m,g=-h*d+2*h*M-h*m,S=(1+h)*d+(-1.5-2*h)*M+(-.5+h)*m+1,w=(-1-p)*d+(1.5+p)*M+.5*m,y=p*d-p*M;for(let C=0;C!==o;++C)r[C]=g*a[u+C]+S*a[c+C]+w*a[l+C]+y*a[f+C];return r}},ro=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},ao=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},oo=class extends Ei{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(s-e),M=1-m;for(let d=0;d!==o;++d)r[d]=a[c+d]*M+a[l+d]*m;return r}let h=o*2,p=t-1;for(let m=0;m!==o;++m){let M=a[c+m],d=a[l+m],g=p*h+m*2,S=f[g],w=f[g+1],y=t*h+m*2,C=u[y],E=u[y+1],x=Tf(n,e,S,C,s);r[m]=gu(x,M,w,E,d)}return r}};function gu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Tf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=gu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=wf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ys(e,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ys(t.times,Array),values:ys(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),La(t.settings)&&(n.settings={inTangents:ys(t.settings.inTangents,Array),outTangents:ys(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case hr:e=this.InterpolantFactoryMethodDiscrete;break;case Xa:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break;case Vl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;La(this.settings)&&(xh(this.settings.inTangents,t),xh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;La(this.settings)&&(vh(this.settings.inTangents,t),vh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ue("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ue("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ue("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ue("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&fd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ue("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ua,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,h=f-n,p=f+n;for(let m=0;m!==n;++m){let M=e[f+m];if(M!==e[h+m]||M!==e[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,La(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function vh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Xa;var Ai=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=hr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="color";var co=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="number";var ho=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},Or=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=hr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};uo.prototype.ValueTypeName="vector";var fo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],m=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_u=new fo,po=class{constructor(t){this.manager=t!==void 0?t:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};po.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki=class extends We{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Us=class extends Ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gl=new ye,yh=new D,Mh=new D,Fs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ts||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Da=new D,Na=new en,Hn=new D,Br=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Da,Na,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Da,Na,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Na,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new D,Sh=new vt,bh=new vt,rn=class extends Br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Sh,bh),e.subVectors(bh,Sh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$l=class extends Fs{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Wi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},li=class extends Ki{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $l}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},jl=class extends Fs{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Ri=class extends Ki{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ji=class extends Br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ql=class extends Fs{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Ql}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ms=-90,Ss=1,Os=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Ms,Ss,t,e);s.layers=this.layers,this.add(s);let r=new rn(Ms,Ss,t,e);r.layers=this.layers,this.add(r);let a=new rn(Ms,Ss,t,e);a.layers=this.layers,this.add(a);let o=new rn(Ms,Ss,t,e);o.layers=this.layers,this.add(o);let l=new rn(Ms,Ss,t,e);l.layers=this.layers,this.add(l);let c=new rn(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},mo=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},zr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ef.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ef(){this._document.hidden===!1&&this.reset()}var Ec="\\[\\]\\.:\\/",Af=new RegExp("["+Ec+"]","g"),Ac="[^"+Ec+"]",Cf="[^"+Ec.replace("\\.","")+"]",Rf=/((?:WC+[\/:])*)/.source.replace("WC",Ac),Pf=/(WCOD+)?/.source.replace("WCOD",Cf),If=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),Lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),Df=new RegExp("^"+Rf+Pf+If+Lf+"$"),Nf=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Af,"")}static parseTrackName(t){let e=Df.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=tc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k_=new Float32Array(1);var wh=new ye,Gr=class{constructor(t,e,n=0,s=1/0){this.ray=new Si(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wh),this}intersectObject(t,e=!0,n=[]){return ec(t,this,n,e),n.sort(Th),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,n,e);return n.sort(Th),n}};function Th(i,t){return i.distance-t.distance}function ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ec(r[a],t,e,!0)}}var Bs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Vr=class extends kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Cc(i,t,e,n){let s=Uf(n);switch(e){case pc:return i*t;case So:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case Di:return i*t*2/s.components*s.byteLength;case wo:return i*t*2/s.components*s.byteLength;case mc:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case Eo:case Co:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Io:case Do:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case ta:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case $o:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uf(i){switch(i){case _n:case hc:return{byteLength:1,components:1};case Vs:case uc:case qe:return{byteLength:2,components:1};case yo:case Mo:return{byteLength:2,components:4};case zn:case vo:case Nn:return{byteLength:4,components:1};case dc:case fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ku(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Of(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<f.length;p++){let m=f[h],M=f[p];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,m=f.length;p<m;p++){let M=f[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bf=`#ifdef USE_ALPHAHASH
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
}`,xe={alphahash_fragment:Bf,alphahash_pars_fragment:kf,alphamap_fragment:zf,alphamap_pars_fragment:Gf,alphatest_fragment:Vf,alphatest_pars_fragment:Hf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:qf,batching_vertex:Yf,begin_vertex:Zf,beginnormal_vertex:Kf,bsdfs:Jf,iridescence_fragment:$f,bumpmap_pars_fragment:jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:ep,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:ap,common:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Rp,envmap_vertex:vp,fog_vertex:yp,fog_pars_vertex:Mp,fog_fragment:Sp,fog_pars_fragment:bp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Ap,lights_pars_begin:Cp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Np,lights_physical_pars_fragment:Up,lights_fragment_begin:Fp,lights_fragment_maps:Op,lights_fragment_end:Bp,lightprobes_pars_fragment:kp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Hp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Kp,morphinstance_vertex:Jp,morphcolor_vertex:$p,morphnormal_vertex:jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:tm,normal_fragment_begin:em,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:ym,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:bm,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:Em,specularmap_fragment:Am,specularmap_pars_fragment:Cm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Pm,transmission_fragment:Im,transmission_pars_fragment:Lm,uv_pars_fragment:Dm,uv_pars_vertex:Nm,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:km,backgroundCube_frag:zm,cube_vert:Gm,cube_frag:Vm,depth_vert:Hm,depth_frag:Wm,distance_vert:Xm,distance_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Km,linedashed_frag:Jm,meshbasic_vert:$m,meshbasic_frag:jm,meshlambert_vert:Qm,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:u0,points_frag:d0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},Ht={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Zn={basic:{uniforms:dn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:dn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:dn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:dn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:dn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ee(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:dn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:dn([Ht.points,Ht.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:dn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:dn([Ht.common,Ht.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:dn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:dn([Ht.sprite,Ht.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:dn([Ht.common,Ht.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:dn([Ht.lights,Ht.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Zn.physical={uniforms:dn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var il={r:0,b:0,g:0},_0=new ye,zu=new fe;zu.set(-1,0,0,0,1,0,0,0,1);function x0(i,t,e,n,s,r){let a=new ee(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let y=S.backgroundBlurriness>0;w=t.get(w,y)}return w}function m(S){let w=!1,y=p(S);y===null?d(a,o):y&&y.isColor&&(d(y,1),w=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,w){let y=p(w);y&&y.isCubeTexture?(c===void 0&&(c=new ie(new Xe(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:ss(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=_e.getTransfer(y.colorSpace)!==Ae,(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ie(new Ue(2,2),new ke({name:"BackgroundMaterial",uniforms:ss(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=_e.getTransfer(y.colorSpace)!==Ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,w){S.getRGB(il,Tc(i)),e.buffers.color.setClear(il.r,il.g,il.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,d(a,o)},render:m,addToRenderList:M,dispose:g}}function v0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,N,$,F,X){let V=!1,Y=f(I,F,$,N);r!==Y&&(r=Y,c(r.object)),V=p(I,F,$,X),V&&m(I,F,$,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(I,N,$,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,N,$,F){let X=F.wireframe===!0,V=n[N.id];V===void 0&&(V={},n[N.id]=V);let Y=I.isInstancedMesh===!0?I.id:0,pt=V[Y];pt===void 0&&(pt={},V[Y]=pt);let rt=pt[$.id];rt===void 0&&(rt={},pt[$.id]=rt);let ht=rt[X];return ht===void 0&&(ht=h(l()),rt[X]=ht),ht}function h(I){let N=[],$=[],F=[];for(let X=0;X<e;X++)N[X]=0,$[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:$,attributeDivisors:F,object:I,attributes:{},index:null}}function p(I,N,$,F){let X=r.attributes,V=N.attributes,Y=0,pt=$.getAttributes();for(let rt in pt)if(pt[rt].location>=0){let at=X[rt],it=V[rt];if(it===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),at===void 0||at.attribute!==it||it&&at.data!==it.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function m(I,N,$,F){let X={},V=N.attributes,Y=0,pt=$.getAttributes();for(let rt in pt)if(pt[rt].location>=0){let at=V[rt];at===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(at=I.instanceColor));let it={};it.attribute=at,at&&at.data&&(it.data=at.data),X[rt]=it,Y++}r.attributes=X,r.attributesNum=Y,r.index=F}function M(){let I=r.newAttributes;for(let N=0,$=I.length;N<$;N++)I[N]=0}function d(I){g(I,0)}function g(I,N){let $=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;$[I]=1,F[I]===0&&(i.enableVertexAttribArray(I),F[I]=1),X[I]!==N&&(i.vertexAttribDivisor(I,N),X[I]=N)}function S(){let I=r.newAttributes,N=r.enabledAttributes;for(let $=0,F=N.length;$<F;$++)N[$]!==I[$]&&(i.disableVertexAttribArray($),N[$]=0)}function w(I,N,$,F,X,V,Y){Y===!0?i.vertexAttribIPointer(I,N,$,X,V):i.vertexAttribPointer(I,N,$,F,X,V)}function y(I,N,$,F){M();let X=F.attributes,V=$.getAttributes(),Y=N.defaultAttributeValues;for(let pt in V){let rt=V[pt];if(rt.location>=0){let ht=X[pt];if(ht===void 0&&(pt==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),pt==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor)),ht!==void 0){let at=ht.normalized,it=ht.itemSize,_t=t.get(ht);if(_t===void 0)continue;let q=_t.buffer,gt=_t.type,mt=_t.bytesPerElement,Ut=gt===i.INT||gt===i.UNSIGNED_INT||ht.gpuType===vo;if(ht.isInterleavedBufferAttribute){let wt=ht.data,Ot=wt.isInterleavedBuffer===!0?wt.stride:wt.itemSize,ce=ht.offset;if(wt.isInstancedInterleavedBuffer||wt.isInstancedBufferAttribute){for(let qt=0;qt<rt.locationSize;qt++)g(rt.location+qt,wt.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let qt=0;qt<rt.locationSize;qt++)d(rt.location+qt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let qt=0;qt<rt.locationSize;qt++)w(rt.location+qt,it/rt.locationSize,gt,at,Ot*mt,(ce+it/rt.locationSize*qt)*mt,Ut)}else{if(ht.isInstancedBufferAttribute){for(let wt=0;wt<rt.locationSize;wt++)g(rt.location+wt,ht.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let wt=0;wt<rt.locationSize;wt++)d(rt.location+wt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let wt=0;wt<rt.locationSize;wt++)w(rt.location+wt,it/rt.locationSize,gt,at,it*mt,it/rt.locationSize*wt*mt,Ut)}}else if(Y!==void 0){let at=Y[pt];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(rt.location,at);break;case 3:i.vertexAttrib3fv(rt.location,at);break;case 4:i.vertexAttrib4fv(rt.location,at);break;default:i.vertexAttrib1fv(rt.location,at)}}}}S()}function C(){B();for(let I in n){let N=n[I];for(let $ in N){let F=N[$];for(let X in F){let V=F[X];for(let Y in V)u(V[Y].object),delete V[Y];delete F[X]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let $ in N){let F=N[$];for(let X in F){let V=F[X];for(let Y in V)u(V[Y].object),delete V[Y];delete F[X]}}delete n[I.id]}function x(I){for(let N in n){let $=n[N];for(let F in $){let X=$[F];if(X[I.id]===void 0)continue;let V=X[I.id];for(let Y in V)u(V[Y].object),delete V[Y];delete X[I.id]}}}function b(I){for(let N in n){let $=n[N],F=I.isInstancedMesh===!0?I.id:0,X=$[F];if(X!==void 0){for(let V in X){let Y=X[V];for(let pt in Y)u(Y[pt].object),delete Y[pt];delete X[V]}delete $[F],Object.keys($).length===0&&delete n[N]}}}function B(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:d,disableUnusedAttributes:S}}function y0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function M0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Gn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==_n&&x!==Nn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:d,maxAttributes:g,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:C,samples:E}}function S0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new pn,o=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){let m=f.clippingPlanes,M=f.clipIntersection,d=f.clipShadows,g=i.get(f);if(!s||m===null||m.length===0||r&&!d)r?u(null):c();else{let S=r?0:n,w=S*4,y=g.clippingState||null;l.value=y,y=u(m,h,w,p);for(let C=0;C!==w;++C)y[C]=e[C];g.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,m){let M=f!==null?f.length:0,d=null;if(M!==0){if(d=l.value,m!==!0||d===null){let g=p+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let w=0,y=p;w!==M;++w,y+=4)a.copy(f[w]).applyMatrix4(S,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,d}}var sa=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ci});r.uniforms.tEquirect.value=e;let a=new ie(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=mn),new Os(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},xu=256,b0=3,w0=20,Gu=256,Vu=16,T0=3,E0=new D,A0=new ee,Ws=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Os(1,10,null),this._boxMesh=new ie(new Xe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=E0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(A0));let d=new Os(n,s,u);return d.position.copy(o),d.update(l,t),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=m,t.background=M,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(xu,Sc(t))}_fromTexture(t,e){t.mapping===es||t.mapping===Gs?this._setSize(t.image.length===0?xu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=vu(t,!1,!1),n=Math.log2(t)-b0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===es||t.mapping===Gs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=C0(),this._integrationMaterial=R0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Vu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-T0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Gu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=P0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function vu(i,t,e){return new sa(i,{minFilter:hi,generateMipmaps:t,type:qe,colorSpace:ur,depthBuffer:e})}function ra(i,t,e){return new ke({name:i,uniforms:t,vertexShader:xe.cube_vert,fragmentShader:e,side:an,blending:ci,depthTest:!1,depthWrite:!1})}function C0(){return ra("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function I0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===go||p===_o)if(t.has(h)){let m=t.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let M=new sa(m.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,m=p===go||p===_o,M=p===es||p===Gs;if(m||M){let d=e.get(h),g=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Ws(i)),d=m?n.fromEquirectangular(h,d):n.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),d.texture;if(d!==void 0)return d.texture;{let S=h.image;return m&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Ws(i)),d=m?n.fromEquirectangular(h):n.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,e.set(h,d),h.addEventListener("dispose",u),d.texture):null}}}return h}function o(h,p){return p===go?h.mapping=es:p===_o&&(h.mapping=Gs),h}function l(h){let p=0,m=6;for(let M=0;M<m;M++)h[M]!==void 0&&p++;return p===m}function c(h){let p=h.target;p.removeEventListener("dispose",c);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function L0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let d in m.attributes)t.remove(m.attributes[d]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let M=r.get(m);M&&(t.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function u(m){let M=m.attributes;for(let d in M)t.update(M[d],i.ARRAY_BUFFER)}function f(m){let M=m.index,d=m.attributes.position,g=0;if(d===void 0)return;let S=M!==null?M.array.length:d.array.length/3-1,w=d.count>=65535?_r:gr,y=new w(Math.ceil(S/3)*6,1),C=y.array;if(M!==null){let x=M.array;g=M.version;for(let b=0,B=0;b<S;b+=3){let A=x[b+0],I=x[b+1],N=x[b+2];C[B++]=A,C[B++]=I,C[B++]=I,C[B++]=N,C[B++]=N,C[B++]=A}}else{g=d.version;for(let x=0,b=0;x<S;x+=3){let B=x+0,A=x+1,I=x+2;C[b++]=B,C[b++]=A,C[b++]=A,C[b++]=I,C[b++]=I,C[b++]=B}}y.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,y)}function h(m){let M=r.get(m);if(M){let d=m.index;d!==null&&M.version<d.version&&f(m)}else f(m);return r.get(m)}function p(){for(let m in s){let M=s[m].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function N0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),e.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let M=0;for(let d=0;d<p;d++)M+=h[d];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function U0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F0(i,t,e){let n=new WeakMap,s=new De;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let B=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",B)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;p===!0&&(w=1),m===!0&&(w=2),M===!0&&(w=3);let y=o.attributes.position.count*w,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*C*4*f),x=new pr(E,y,C,f);x.type=Nn,x.needsUpdate=!0;let b=w*4;for(let A=0;A<f;A++){let I=d[A],N=g[A],$=S[A],F=y*C*4*A;for(let X=0;X<I.count;X++){let V=X*b;p===!0&&(s.fromBufferAttribute(I,X),E[F+V+0]=s.x,E[F+V+1]=s.y,E[F+V+2]=s.z,E[F+V+3]=0),m===!0&&(s.fromBufferAttribute(N,X),E[F+V+4]=s.x,E[F+V+5]=s.y,E[F+V+6]=s.z,E[F+V+7]=0),M===!0&&(s.fromBufferAttribute($,X),E[F+V+8]=s.x,E[F+V+9]=s.y,E[F+V+10]=s.z,E[F+V+11]=$.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new vt(y,C)},n.set(o,h),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function O0(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var B0={[Hr]:"LINEAR_TONE_MAPPING",[Wr]:"REINHARD_TONE_MAPPING",[Xr]:"CINEON_TONE_MAPPING",[ts]:"ACES_FILMIC_TONE_MAPPING",[Yr]:"AGX_TONE_MAPPING",[Zr]:"NEUTRAL_TONE_MAPPING",[qr]:"CUSTOM_TONE_MAPPING"};function k0(i,t,e,n,s,r){let a=new Ge(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Be;u.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new me([0,2,0,0,2,0],2));let f=new Ns({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ie(u,f),p=new Ji(-1,1,1,-1,0,1),m=null,M=null,d=!1,g,S=null,w=[],y=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),l!==null&&l.setSize(C,E);for(let x=0;x<w.length;x++){let b=w[x];b.setSize&&b.setSize(C,E)}},this.setEffects=function(C){w=C,y=w.length>0&&w[0].isRenderPass===!0;let E=a.width,x=a.height;w.length>0&&o===null&&(o=new Ge(E,x,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new Ge(E,x,{type:qe,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(B=>B.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new oi(E,x),r===!0&&(c.format=ui,c.type=ns)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let B=0;B<w.length;B++){let A=w[B];A.setSize&&A.setSize(E,x),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(C,E){if(d||C.toneMapping===qn&&w.length===0)return!1;if(S=E,E!==null){let x=E.width,b=E.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return y===!1&&C.setRenderTarget(a),g=C.toneMapping,C.toneMapping=qn,!0},this.hasRenderPass=function(){return y},this.end=function(C,E){C.toneMapping=g,d=!0;let x=a,b=o;for(let B=0;B<w.length;B++){let A=w[B];A.enabled!==!1&&(A.render(C,b,x,E),A.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(m!==C.outputColorSpace||M!==C.toneMapping){m=C.outputColorSpace,M=C.toneMapping,f.defines={},_e.getTransfer(m)===Ae&&(f.defines.SRGB_TRANSFER="");let B=B0[M];B&&(f.defines[B]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(S),C.render(h,p),S=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var Hu=new gn,Wu=new oi(1,1),Xu=new Sr(1),qu=new pr,Yu=new Za,Zu=new Mr,Su=[],bu=[],wu=new Float32Array(16),Tu=new Float32Array(9),Eu=new Float32Array(4);function Xs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function al(i,t){let e=bu[t];e===void 0&&(e=new Int32Array(t),bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Eu.set(n),i.uniformMatrix2fv(this.addr,!1,Eu),Ze(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Ze(e,n)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;wu.set(n),i.uniformMatrix4fv(this.addr,!1,wu),Ze(e,n)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function ol(i){return i.version===0&&(i.compareFunction=xc,i.needsUpdate=!0),i}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ol(Wu):r=Hu,e.setTexture2D(t||r,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yu,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ol(Xu):r=Zu,e.setTextureCube(t||r,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function rg(i){switch(i){case 5126:return z0;case 35664:return G0;case 35665:return V0;case 35666:return H0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return K0;case 35669:case 35673:return J0;case 5125:return $0;case 36294:return j0;case 36295:return Q0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}function ag(i,t){i.uniform1fv(this.addr,t)}function og(i,t){let e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function lg(i,t){let e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function cg(i,t){let e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function hg(i,t){let e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ug(i,t){let e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dg(i,t){let e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fg(i,t){i.uniform1iv(this.addr,t)}function pg(i,t){i.uniform2iv(this.addr,t)}function mg(i,t){i.uniform3iv(this.addr,t)}function gg(i,t){i.uniform4iv(this.addr,t)}function _g(i,t){i.uniform1uiv(this.addr,t)}function xg(i,t){i.uniform2uiv(this.addr,t)}function vg(i,t){i.uniform3uiv(this.addr,t)}function yg(i,t){i.uniform4uiv(this.addr,t)}function Mg(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ol(Wu):a=Hu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Sg(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yu,r[a])}function bg(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ol(Xu):a=Zu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function wg(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qu,r[a])}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return vg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return wg}}var Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}},Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},Dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function Au(i,t){i.seq.push(t),i.map[t.id]=t}function Eg(i,t,e){let n=i.name,s=n.length;for(Rc.lastIndex=0;;){let r=Rc.exec(n),a=Rc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Au(e,c===void 0?new Ic(o,i,t):new Lc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Dc(o),Au(e,f)),e=f}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Eg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ag=37297,Cg=0;function Rg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ru=new fe;function Pg(i){_e._getMatrix(Ru,_e.workingColorSpace,i);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Rg(i.getShaderSource(t),o)}else return r}function Ig(i,t){let e=Pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Lg={[Hr]:"Linear",[Wr]:"Reinhard",[Xr]:"Cineon",[ts]:"ACESFilmic",[Yr]:"AgX",[Zr]:"Neutral",[qr]:"Custom"};function Dg(i,t){let e=Lg[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new D;function Ng(){_e.getLuminanceCoefficients(sl);let i=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function Fg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ia(i){return i!==""}function Iu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Lu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(Bg,kg)}function kg(i,t){let e=xe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Nc(e)}var zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(zg,Gg)}function Gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Vg={[$i]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function Hg(i){return Vg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wg={[Gs]:"ENVMAP_MODE_REFRACTION"};function Xg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qg={[lc]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function Yg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qg[i.combine]||"ENVMAP_BLENDING_NONE"}function Zg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Hg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Xg(e),f=Yg(e),h=Ug(e),p=Fg(r),m=s.createProgram(),M,d,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),M.length>0&&(M+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(M=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[Nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?xe.tonemapping_pars_fragment:"",e.toneMapping!==qn?Dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,Ig("linearToOutputTexel",e.outputColorSpace),Ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),a=Nc(a),a=Iu(a,e),a=Lu(a,e),o=Nc(o),o=Iu(o,e),o=Lu(o,e),a=Du(a),o=Du(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,d=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=g+M+a,w=g+d+o,y=Cu(s,s.VERTEX_SHADER,S),C=Cu(s,s.FRAGMENT_SHADER,w);s.attachShader(m,y),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(A){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(m)||"",N=s.getShaderInfoLog(y)||"",$=s.getShaderInfoLog(C)||"",F=I.trim(),X=N.trim(),V=$.trim(),Y=!0,pt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,C);else{let rt=Pu(s,y,"vertex"),ht=Pu(s,C,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+rt+`
`+ht)}else F!==""?oe("WebGLProgram: Program Info Log:",F):(X===""||V==="")&&(pt=!1);pt&&(A.diagnostics={runnable:Y,programLog:F,vertexShader:{log:X,prefix:M},fragmentShader:{log:V,prefix:d}})}s.deleteShader(y),s.deleteShader(C),x=new Hs(s,m),b=Og(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,Ag)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=C,this}var Kg=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=Kg++,this.code=t,this.usedTimes=0}};function Jg(i){return i===Di||i===ta||i===ea}function $g(i,t,e,n,s,r){let a=new Cs,o=new Uc,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,B,A,I,N){let $=A.fog,F=I.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||X,V),pt=h[x.type],rt=n.precision;x.precision!==null&&(rt=n.getMaxPrecision(x.precision),rt!==x.precision&&oe("WebGLProgram.getParameters:",x.precision,"not supported, using",rt,"instead."));let ht=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,at=ht!==void 0?ht.length:0,it=0;F.morphAttributes.position!==void 0&&(it=1),F.morphAttributes.normal!==void 0&&(it=2),F.morphAttributes.color!==void 0&&(it=3);let _t,q,gt,mt;if(pt){let kt=Zn[pt];_t=kt.vertexShader,q=kt.fragmentShader}else{_t=x.vertexShader,q=x.fragmentShader;let kt=o.getVertexShaderStage(x),be=o.getFragmentShaderStage(x);o.update(x,kt,be),gt=kt.id,mt=be.id}let Ut=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,ce=I.isBatchedMesh===!0,qt=!!x.map,Zt=!!x.matcap,se=!!Y,ct=se&&Y.isPMREMTexture===!0,dt=!!x.aoMap,yt=!!x.lightMap,Ft=!!x.bumpMap&&x.wireframe===!1,It=!!x.normalMap,Vt=!!x.displacementMap,Bt=!!x.emissiveMap,jt=!!x.metalnessMap,re=!!x.roughnessMap,ne=x.anisotropy>0,H=x.clearcoat>0,Xt=x.diffuseRoughness>0,ae=x.dispersion>0,he=x.retroreflectivity>0,Rt=x.iridescence>0,Se=x.sheen>0,zt=x.transmission>0,Kt=ne&&!!x.anisotropyMap,P=H&&!!x.clearcoatMap,_=H&&!!x.clearcoatNormalMap,L=H&&!!x.clearcoatRoughnessMap,j=Xt&&!!x.diffuseRoughnessMap,W=Rt&&!!x.iridescenceMap,ot=Rt&&!!x.iridescenceThicknessMap,ut=Se&&!!x.sheenColorMap,Z=Se&&!!x.sheenRoughnessMap,tt=!!x.specularMap,Mt=!!x.specularColorMap,O=!!x.specularIntensityMap,st=zt&&!!x.transmissionMap,nt=zt&&!!x.thicknessMap,xt=!!x.gradientMap,Tt=!!x.alphaMap,Pt=x.alphaTest>0,Jt=!!x.alphaHash,le=!!x.extensions,Et=qn;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Qt=ct?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,de={shaderID:pt,shaderType:x.type,shaderName:x.name,vertexShader:_t,fragmentShader:q,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:rt,batching:ce,batchingColor:ce&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qt,matcap:Zt,envMap:se,envMapMode:se&&Y.mapping,envMapPMREM:ct,envMapMaxLod:ct?Qt.length-1:null,envMapSize:ct?Qt[0].width:null,aoMap:dt,lightMap:yt,bumpMap:Ft,normalMap:It,displacementMap:Vt,emissiveMap:Bt,normalMapObjectSpace:It&&x.normalMapType===$h,normalMapTangentSpace:It&&x.normalMapType===nl,packedNormalMap:It&&x.normalMapType===nl&&Jg(x.normalMap.format),metalnessMap:jt,roughnessMap:re,anisotropy:ne,anisotropyMap:Kt,clearcoat:H,clearcoatMap:P,clearcoatNormalMap:_,clearcoatRoughnessMap:L,diffuseRoughness:Xt,diffuseRoughnessMap:j,dispersion:ae,retroreflection:he,iridescence:Rt,iridescenceMap:W,iridescenceThicknessMap:ot,sheen:Se,sheenColorMap:ut,sheenRoughnessMap:Z,specularMap:tt,specularColorMap:Mt,specularIntensityMap:O,transmission:zt,transmissionMap:st,thicknessMap:nt,gradientMap:xt,opaque:x.transparent===!1&&x.blending===zs&&x.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Pt,alphaHash:Jt,combine:x.combine,mapUv:qt&&p(x.map.channel),aoMapUv:dt&&p(x.aoMap.channel),lightMapUv:yt&&p(x.lightMap.channel),bumpMapUv:Ft&&p(x.bumpMap.channel),normalMapUv:It&&p(x.normalMap.channel),displacementMapUv:Vt&&p(x.displacementMap.channel),emissiveMapUv:Bt&&p(x.emissiveMap.channel),metalnessMapUv:jt&&p(x.metalnessMap.channel),roughnessMapUv:re&&p(x.roughnessMap.channel),anisotropyMapUv:Kt&&p(x.anisotropyMap.channel),clearcoatMapUv:P&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:W&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&p(x.sheenRoughnessMap.channel),specularMapUv:tt&&p(x.specularMap.channel),specularColorMapUv:Mt&&p(x.specularColorMap.channel),specularIntensityMapUv:O&&p(x.specularIntensityMap.channel),transmissionMapUv:st&&p(x.transmissionMap.channel),thicknessMapUv:nt&&p(x.thicknessMap.channel),alphaMapUv:Tt&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(It||ne),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(qt||Tt),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&It===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:it,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(kt=>kt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:qt&&x.map.isVideoTexture===!0&&_e.getTransfer(x.map.colorSpace)===Ae,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&_e.getTransfer(x.emissiveMap.colorSpace)===Ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function M(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)b.push(B),b.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(d(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function d(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let b=h[x.type],B;if(b){let A=Zn[b];B=En.clone(A.uniforms)}else B=x.uniforms;return B}function w(x,b){let B=u.get(b);return B!==void 0?++B.usedTimes:(B=new Zg(i,b,x,s),c.push(B),u.set(b,B)),B}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:S,acquireProgram:w,releaseProgram:y,releaseShaderCache:C,programs:c,dispose:E}}function jg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Uu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,m,M,d,g){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:p,material:m,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:d,group:g},i[t]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=m,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=d,S.group=g),t++,S}function l(h,p,m,M,d,g,S){S.reversedDepth===!0&&(d=-d);let w=o(h,p,m,M,d,g);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):e.push(w)}function c(h,p,m,M,d,g){let S=o(h,p,m,M,d,g);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,p){e.length>1&&e.sort(h||Qg),n.length>1&&n.sort(p||Uu),s.length>1&&s.sort(p||Uu)}function f(){for(let h=t,p=i.length;h<p;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function t_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Fu,i.set(n,[a])):s>=r.length?(a=new Fu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new ee};break;case"SpotLight":e={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){let t=new e_,e=n_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ye,a=new ye;function o(c){let u=0,f=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,m=0,M=0,d=0,g=0,S=0,w=0,y=0,C=0,E=0,x=0,b=0,B=0,A=0;c.sort(s_);for(let N=0,$=c.length;N<$;N++){let F=c[N],X=F.color,V=F.intensity,Y=F.distance,pt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Di?pt=F.shadow.map.texture:pt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=X.r*V,f+=X.g*V,h+=X.b*V;else if(F.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(F.sh.coefficients[rt],V);A++}else if(F.isSunLight){let rt=t.get(F);if(rt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ht=F.shadow,at=e.get(F);at.shadowIntensity=ht.intensity,at.shadowBias=ht.bias,at.shadowNormalBias=ht.normalBias,at.shadowRadius=ht.radius,at.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[m]=at,n.sunShadowMap[m]=pt;let it=ht.getViewportCount();for(let _t=0;_t<it;_t++)n.sunShadowMatrix[M+_t]=ht.getMatrix(_t),n.sunShadowCascade[M+_t]=ht._cascadeData[_t];M+=it,m++}n.sun[p]=rt,p++}else if(F.isDirectionalLight){let rt=t.get(F);if(rt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ht=F.shadow,at=e.get(F);at.shadowIntensity=ht.intensity,at.shadowBias=ht.bias,at.shadowNormalBias=ht.normalBias,at.shadowRadius=ht.radius,at.shadowMapSize=ht.mapSize,n.directionalShadow[d]=at,n.directionalShadowMap[d]=pt,n.directionalShadowMatrix[d]=F.shadow.matrix,C++}n.directional[d]=rt,d++}else if(F.isSpotLight){let rt=t.get(F);rt.position.setFromMatrixPosition(F.matrixWorld),rt.color.copy(X).multiplyScalar(V),rt.distance=Y,rt.coneCos=Math.cos(F.angle),rt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),rt.decay=F.decay,n.spot[S]=rt;let ht=F.shadow;if(F.map&&(n.spotLightMap[b]=F.map,b++,ht.updateMatrices(F),F.castShadow&&B++),n.spotLightMatrix[S]=ht.matrix,F.castShadow){let at=e.get(F);at.shadowIntensity=ht.intensity,at.shadowBias=ht.bias,at.shadowNormalBias=ht.normalBias,at.shadowRadius=ht.radius,at.shadowMapSize=ht.mapSize,n.spotShadow[S]=at,n.spotShadowMap[S]=pt,x++}S++}else if(F.isRectAreaLight){let rt=t.get(F);rt.color.copy(X).multiplyScalar(V),rt.halfWidth.set(F.width*.5,0,0),rt.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=rt,w++}else if(F.isPointLight){let rt=t.get(F);if(rt.color.copy(F.color).multiplyScalar(F.intensity),rt.distance=F.distance,rt.decay=F.decay,F.castShadow){let ht=F.shadow,at=e.get(F);at.shadowIntensity=ht.intensity,at.shadowBias=ht.bias,at.shadowNormalBias=ht.normalBias,at.shadowRadius=ht.radius,at.shadowMapSize=ht.mapSize,at.shadowCameraNear=ht.camera.near,at.shadowCameraFar=ht.camera.far,n.pointShadow[g]=at,n.pointShadowMap[g]=pt,n.pointShadowMatrix[g]=F.shadow.matrix,E++}n.point[g]=rt,g++}else if(F.isHemisphereLight){let rt=t.get(F);rt.skyColor.copy(F.color).multiplyScalar(V),rt.groundColor.copy(F.groundColor).multiplyScalar(V),n.hemi[y]=rt,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let I=n.hash;(I.sunLength!==p||I.directionalLength!==d||I.pointLength!==g||I.spotLength!==S||I.rectAreaLength!==w||I.hemiLength!==y||I.numSunShadows!==m||I.numDirectionalShadows!==C||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==b||I.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=d,n.spot.length=S,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-B,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=A,I.sunLength=p,I.directionalLength=d,I.pointLength=g,I.spotLength=S,I.rectAreaLength=w,I.hemiLength=y,I.numSunShadows=m,I.numDirectionalShadows=C,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=b,I.numLightProbes=A,n.version=i_++)}function l(c,u){let f=0,h=0,p=0,m=0,M=0,d=0,g=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let y=c[S];if(y.isSunLight){let C=n.sun[f];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),f++}else if(y.isDirectionalLight){let C=n.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),h++}else if(y.isSpotLight){let C=n.spot[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let C=n.rectArea[M];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){let C=n.hemi[d];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),d++}}}return{setup:o,setupView:l,state:n}}function Ou(i){let t=new r_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function a_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ou(i),t.set(s,[o])):r>=a.length?(o=new Ou(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var o_=`void main() {
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
}`,c_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],h_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Bu=new ye,na=new D,Pc=new D;function u_(i,t,e){let n=new bi,s=new vt,r=new vt,a=new De,o=new no,l=new io,c={},u=e.maxTextureSize,f={[Li]:an,[an]:Li,[un]:un},h=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:o_,fragmentShader:l_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let m=new Be;m.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ie(m,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$i;let g=this.type;this.render=function(E,x,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;this.type===Ch&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$i);let B=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ci),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let $=g!==this.type;$&&x.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(X=>X.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,X=E.length;F<X;F++){let V=E[F],Y=V.shadow;if(Y===void 0){oe("WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let pt=Y.getFrameExtents();s.multiply(pt),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pt.x),s.x=r.x*pt.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pt.y),s.y=r.y*pt.y,Y.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=rt,Y.map===null||$===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ks){if(V.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ge(s.x,s.y,{format:Di,type:qe,minFilter:mn,magFilter:mn,generateMipmaps:!1}),Y.map.texture.name=V.name+".shadowMap",Y.map.depthTexture=new oi(s.x,s.y,Nn),Y.map.depthTexture.name=V.name+".shadowMapDepth",Y.map.depthTexture.format=ni,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=tn,Y.map.depthTexture.magFilter=tn}else V.isPointLight?(Y.map=new sa(s.x),Y.map.depthTexture=new Sr(s.x,zn)):(Y.map=new Ge(s.x,s.y),Y.map.depthTexture=new oi(s.x,s.y,zn)),Y.map.depthTexture.name=V.name+".shadowMap",Y.map.depthTexture.format=ni,this.type===$i?(Y.map.depthTexture.compareFunction=rt?_c:gc,Y.map.depthTexture.minFilter=mn,Y.map.depthTexture.magFilter=mn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=tn,Y.map.depthTexture.magFilter=tn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let ht=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();V.isPointLight!==!0&&Y.updateMatrices(V,b);let at=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:b.layers;for(let it=0;it<ht;it++){let _t=Y.getCamera(it);if(V.isPointLight){let q=Y.camera,gt=Y.matrix,mt=V.distance||q.far;mt!==q.far&&(q.far=mt,q.updateProjectionMatrix()),na.setFromMatrixPosition(V.matrixWorld),q.position.copy(na),Pc.copy(q.position),Pc.add(c_[it]),q.up.copy(h_[it]),q.lookAt(Pc),q.updateMatrixWorld(),gt.makeTranslation(-na.x,-na.y,-na.z),Bu.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Bu,q.coordinateSystem,q.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,it),i.clear();else{it===0&&(i.setRenderTarget(Y.map),i.clear());let q=Y.getViewport(it);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),N.viewport(a)}n=Y.getFrustum(it),y(x,b,_t,V,at,this.type)}Y.isPointLightShadow!==!0&&this.type===ks&&S(Y,b),Y.needsUpdate=!1}g=this.type,d.needsUpdate=!1,i.setRenderTarget(B,A,I)};function S(E,x){let b=t.update(M);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ge(s.x,s.y,{format:Di,type:qe}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,h,M,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,p,M,null)}function w(E,x,b,B){let A=null,I=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)A=I;else if(A=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=A.uuid,$=x.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let X=F[$];X===void 0&&(X=A.clone(),F[$]=X,x.addEventListener("dispose",C)),A=X}if(A.visible=x.visible,A.wireframe=x.wireframe,B===ks?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:f[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=b}return A}function y(E,x,b,B,A,I){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===ks)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let F=t.update(E),X=E.material;if(Array.isArray(X)){let V=F.groups;for(let Y=0,pt=V.length;Y<pt;Y++){let rt=V[Y],ht=X[rt.materialIndex];if(ht&&ht.visible){let at=w(E,ht,B,I);E.onBeforeShadow(i,E,x,b,F,at,rt),i.renderBufferDirect(b,null,F,at,E,rt),E.onAfterShadow(i,E,x,b,F,at,rt)}}}else if(X.visible){let V=w(E,X,B,I);E.onBeforeShadow(i,E,x,b,F,V,null),i.renderBufferDirect(b,null,F,V,E,null),E.onAfterShadow(i,E,x,b,F,V,null)}}let $=E.children;for(let F=0,X=$.length;F<X;F++)y($[F],x,b,B,A,I)}function C(E){E.target.removeEventListener("dispose",C);for(let b in c){let B=c[b],A=E.target.uuid;A in B&&(B[A].dispose(),delete B[A])}}}function d_(i,t){function e(){let O=!1,st=new De,nt=null,xt=new De(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!O&&(i.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){O=Tt},setClear:function(Tt,Pt,Jt,le,Et){Et===!0&&(Tt*=le,Pt*=le,Jt*=le),st.set(Tt,Pt,Jt,le),xt.equals(st)===!1&&(i.clearColor(Tt,Pt,Jt,le),xt.copy(st))},reset:function(){O=!1,nt=null,xt.set(-1,0,0,0)}}}function n(){let O=!1,st=!1,nt=null,xt=null,Tt=null;return{setReversed:function(Pt){if(st!==Pt){let Jt=t.get("EXT_clip_control");Pt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),st=Pt;let le=Tt;Tt=null,this.setClear(le)}},getReversed:function(){return st},setTest:function(Pt){Pt?wt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(Pt){nt!==Pt&&!O&&(i.depthMask(Pt),nt=Pt)},setFunc:function(Pt){if(st&&(Pt=lu[Pt]),xt!==Pt){switch(Pt){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Pt}},setLocked:function(Pt){O=Pt},setClear:function(Pt){Tt!==Pt&&(Tt=Pt,st&&(Pt=1-Pt),i.clearDepth(Pt))},reset:function(){O=!1,nt=null,xt=null,Tt=null,st=!1}}}function s(){let O=!1,st=null,nt=null,xt=null,Tt=null,Pt=null,Jt=null,le=null,Et=null;return{setTest:function(Qt){O||(Qt?wt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!O&&(i.stencilMask(Qt),st=Qt)},setFunc:function(Qt,de,kt){(nt!==Qt||xt!==de||Tt!==kt)&&(i.stencilFunc(Qt,de,kt),nt=Qt,xt=de,Tt=kt)},setOp:function(Qt,de,kt){(Pt!==Qt||Jt!==de||le!==kt)&&(i.stencilOp(Qt,de,kt),Pt=Qt,Jt=de,le=kt)},setLocked:function(Qt){O=Qt},setClear:function(Qt){Et!==Qt&&(i.clearStencil(Qt),Et=Qt)},reset:function(){O=!1,st=null,nt=null,xt=null,Tt=null,Pt=null,Jt=null,le=null,Et=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},f={},h={},p=new WeakMap,m=[],M=null,d=!1,g=null,S=null,w=null,y=null,C=null,E=null,x=null,b=new ee(0,0,0),B=0,A=!1,I=null,N=null,$=null,F=null,X=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,pt=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Y=pt>=1):rt.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Y=pt>=2);let ht=null,at={},it=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),q=new De().fromArray(it),gt=new De().fromArray(_t);function mt(O,st,nt,xt){let Tt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(O,Pt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<nt;Jt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(st+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Pt}let Ut={};Ut[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),wt(i.DEPTH_TEST),a.setFunc(ws),Ft(!1),It(ic),wt(i.CULL_FACE),dt(ci);function wt(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Ot(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function ce(O,st){return h[O]!==st?(i.bindFramebuffer(O,st),h[O]=st,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function qt(O,st){let nt=m,xt=!1;if(O){nt=p.get(st),nt===void 0&&(nt=[],p.set(st,nt));let Tt=O.textures;if(nt.length!==Tt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Jt=Tt.length;Pt<Jt;Pt++)nt[Pt]=i.COLOR_ATTACHMENT0+Pt;nt.length=Tt.length,xt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(nt)}function Zt(O){return M!==O?(i.useProgram(O),M=O,!0):!1}let se={[Qi]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};se[Lh]=i.MIN,se[Dh]=i.MAX;let ct={[Nh]:i.ZERO,[Uh]:i.ONE,[Fh]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(O,st,nt,xt,Tt,Pt,Jt,le,Et,Qt){if(O===ci){d===!0&&(Ot(i.BLEND),d=!1);return}if(d===!1&&(wt(i.BLEND),d=!0),O!==Rh){if(O!==g||Qt!==A){if((S!==Qi||C!==Qi)&&(i.blendEquation(i.FUNC_ADD),S=Qi,C=Qi),Qt)switch(O){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ue("WebGLState: Invalid blending: ",O);break}else switch(O){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",O);break}w=null,y=null,E=null,x=null,b.set(0,0,0),B=0,g=O,A=Qt}return}Tt=Tt||st,Pt=Pt||nt,Jt=Jt||xt,(st!==S||Tt!==C)&&(i.blendEquationSeparate(se[st],se[Tt]),S=st,C=Tt),(nt!==w||xt!==y||Pt!==E||Jt!==x)&&(i.blendFuncSeparate(ct[nt],ct[xt],ct[Pt],ct[Jt]),w=nt,y=xt,E=Pt,x=Jt),(le.equals(b)===!1||Et!==B)&&(i.blendColor(le.r,le.g,le.b,Et),b.copy(le),B=Et),g=O,A=!1}function yt(O,st){O.side===un?Ot(i.CULL_FACE):wt(i.CULL_FACE);let nt=O.side===an;st&&(nt=!nt),Ft(nt),O.blending===zs&&O.transparent===!1?dt(ci):dt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let xt=O.stencilWrite;o.setTest(xt),xt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Bt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function It(O){O!==Eh?(wt(i.CULL_FACE),O!==N&&(O===ic?i.cullFace(i.BACK):O===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),N=O}function Vt(O){O!==$&&(Y&&i.lineWidth(O),$=O)}function Bt(O,st,nt){O?(wt(i.POLYGON_OFFSET_FILL),(F!==st||X!==nt)&&(F=st,X=nt,a.getReversed()&&(st=-st,nt=-nt),i.polygonOffset(st,nt))):Ot(i.POLYGON_OFFSET_FILL)}function jt(O){O?wt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function re(O){O===void 0&&(O=i.TEXTURE0+V-1),ht!==O&&(i.activeTexture(O),ht=O)}function ne(O,st,nt){nt===void 0&&(ht===null?nt=i.TEXTURE0+V-1:nt=ht);let xt=at[nt];xt===void 0&&(xt={type:void 0,texture:void 0},at[nt]=xt),(xt.type!==O||xt.texture!==st)&&(ht!==nt&&(i.activeTexture(nt),ht=nt),i.bindTexture(O,st||Ut[O]),xt.type=O,xt.texture=st)}function H(){let O=at[ht];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch(O){ue("WebGLState:",O)}}function ae(){try{i.compressedTexImage3D(...arguments)}catch(O){ue("WebGLState:",O)}}function he(){try{i.texSubImage2D(...arguments)}catch(O){ue("WebGLState:",O)}}function Rt(){try{i.texSubImage3D(...arguments)}catch(O){ue("WebGLState:",O)}}function Se(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ue("WebGLState:",O)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ue("WebGLState:",O)}}function Kt(){try{i.texStorage2D(...arguments)}catch(O){ue("WebGLState:",O)}}function P(){try{i.texStorage3D(...arguments)}catch(O){ue("WebGLState:",O)}}function _(){try{i.texImage2D(...arguments)}catch(O){ue("WebGLState:",O)}}function L(){try{i.texImage3D(...arguments)}catch(O){ue("WebGLState:",O)}}function j(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function W(O,st){f[O]!==st&&(i.pixelStorei(O,st),f[O]=st)}function ot(O){q.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),q.copy(O))}function ut(O){gt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),gt.copy(O))}function Z(O,st){let nt=c.get(st);nt===void 0&&(nt=new WeakMap,c.set(st,nt));let xt=nt.get(O);xt===void 0&&(xt=i.getUniformBlockIndex(st,O.name),i.uniformBlockBinding(st,xt,xt),nt.set(O,xt))}function tt(O,st,nt){let Tt=c.get(st).get(O);l[Tt]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,Tt,nt),l[Tt]=nt)}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ht=null,at={},h={},l={},p=new WeakMap,m=[],M=null,d=!1,g=null,S=null,w=null,y=null,C=null,E=null,x=null,b=new ee(0,0,0),B=0,A=!1,I=null,N=null,$=null,F=null,X=null,q.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:wt,disable:Ot,bindFramebuffer:ce,drawBuffers:qt,useProgram:Zt,setBlending:dt,setMaterial:yt,setFlipSided:Ft,setCullFace:It,setLineWidth:Vt,setPolygonOffset:Bt,setScissorTest:jt,activeTexture:re,bindTexture:ne,unbindTexture:H,compressedTexImage2D:Xt,compressedTexImage3D:ae,texImage2D:_,texImage3D:L,pixelStorei:W,getParameter:j,updateUBOMapping:Z,uniformBlockBinding:tt,texStorage2D:Kt,texStorage3D:P,texSubImage2D:he,texSubImage3D:Rt,compressedTexSubImage2D:Se,compressedTexSubImage3D:zt,scissor:ot,viewport:ut,reset:Mt}}function f_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,f=new Set,h,p=new WeakMap,m=new Set,M=new FinalizationRegistry(P=>m.delete(P)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,_){return d?new OffscreenCanvas(P,_):fr("canvas")}function S(P,_,L){let j=1,W=Kt(P);if((W.width>L||W.height>L)&&(j=L/Math.max(W.width,W.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ot=Math.floor(j*W.width),ut=Math.floor(j*W.height);h===void 0&&(h=g(ot,ut));let Z=_?g(ot,ut):h;return Z.width=ot,Z.height=ut,Z.getContext("2d").drawImage(P,0,0,ot,ut),oe("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ot+"x"+ut+")."),Z}else return"data"in P&&oe("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),P;return P}function w(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(P,_,L,j,W,ot=!1){if(P!==null){if(i[P]!==void 0)return i[P];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut;j&&(ut=t.get("EXT_texture_norm16"),ut||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(L===i.FLOAT&&(Z=i.R32F),L===i.HALF_FLOAT&&(Z=i.R16F),L===i.UNSIGNED_BYTE&&(Z=i.R8),L===i.UNSIGNED_SHORT&&ut&&(Z=ut.R16_EXT),L===i.SHORT&&ut&&(Z=ut.R16_SNORM_EXT)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Z=i.R8UI),L===i.UNSIGNED_SHORT&&(Z=i.R16UI),L===i.UNSIGNED_INT&&(Z=i.R32UI),L===i.BYTE&&(Z=i.R8I),L===i.SHORT&&(Z=i.R16I),L===i.INT&&(Z=i.R32I)),_===i.RG&&(L===i.FLOAT&&(Z=i.RG32F),L===i.HALF_FLOAT&&(Z=i.RG16F),L===i.UNSIGNED_BYTE&&(Z=i.RG8),L===i.UNSIGNED_SHORT&&ut&&(Z=ut.RG16_EXT),L===i.SHORT&&ut&&(Z=ut.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Z=i.RG8UI),L===i.UNSIGNED_SHORT&&(Z=i.RG16UI),L===i.UNSIGNED_INT&&(Z=i.RG32UI),L===i.BYTE&&(Z=i.RG8I),L===i.SHORT&&(Z=i.RG16I),L===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),L===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),L===i.UNSIGNED_INT&&(Z=i.RGB32UI),L===i.BYTE&&(Z=i.RGB8I),L===i.SHORT&&(Z=i.RGB16I),L===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),L===i.UNSIGNED_INT&&(Z=i.RGBA32UI),L===i.BYTE&&(Z=i.RGBA8I),L===i.SHORT&&(Z=i.RGBA16I),L===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_SHORT&&ut&&(Z=ut.RGB16_EXT),L===i.SHORT&&ut&&(Z=ut.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){let tt=ot?dr:_e.getTransfer(W);L===i.FLOAT&&(Z=i.RGBA32F),L===i.HALF_FLOAT&&(Z=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Z=tt===Ae?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&ut&&(Z=ut.RGBA16_EXT),L===i.SHORT&&ut&&(Z=ut.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(P,_){let L;return P?_===null||_===zn||_===ns?L=i.DEPTH24_STENCIL8:_===Nn?L=i.DEPTH32F_STENCIL8:_===Vs&&(L=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===ns?L=i.DEPTH_COMPONENT24:_===Nn?L=i.DEPTH_COMPONENT32F:_===Vs&&(L=i.DEPTH_COMPONENT16),L}function b(P,_){return w(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function B(P){let _=new WeakRef(P);n.get(P).__ref=_,m.add(_),M.register(P,_,_)}function A(P){let _=n.get(P).__ref;_!==void 0&&(m.delete(_),M.unregister(_))}function I(P){$(P.target)}function N(P){F(P.target)}function $(P){P.removeEventListener("dispose",I),A(P),V(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&f.delete(P)}function F(P){P.removeEventListener("dispose",N),A(P),pt(P)}function X(){for(let P of m){let _=P.deref();_!==void 0&&(_.isRenderTarget===!0?F(_):$(_))}m.clear(),f.clear()}function V(P){let _=n.get(P);if(_.__webglInit===void 0)return;let L=P.source,j=p.get(L);if(j){let W=j[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&Y(P),Object.keys(j).length===0&&p.delete(L)}n.remove(P)}function Y(P){let _=n.get(P);i.deleteTexture(_.__webglTexture);let L=P.source,j=p.get(L);delete j[_.__cacheKey],a.memory.textures--}function pt(P){let _=n.get(P);_.__depthDisposeCallback&&_.__depthDisposeCallback();let L=P.depthTexture;if(L&&L.renderTarget===P&&$(L),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let ot=0;ot<_.__webglFramebuffer[W].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[W][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let j=P.textures;for(let W=0,ot=j.length;W<ot;W++){let ut=n.get(j[W]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(j[W])}n.remove(P)}let rt=0;function ht(){rt=0}function at(){return rt}function it(P){rt=P}function _t(){let P=rt;return P>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),rt+=1,P}function q(P){let _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.mipmapsAutoUpdate),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function gt(P,_){let L=n.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&L.__version!==P.version){let j=P.image;if(j===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(L,P,_);return}}else P.isExternalTexture&&(L.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function mt(P,_){let L=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&L.__version!==P.version){yt(L,P,_);return}else P.isExternalTexture&&(L.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function Ut(P,_){let L=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&L.__version!==P.version){yt(L,P,_);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function wt(P,_){let L=n.get(P);if(P.version>0&&L.__version!==P.version){Ft(L,P,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}let Ot={[In]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},ce={[tn]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},qt={[Qh]:i.NEVER,[xc]:i.ALWAYS,[tu]:i.LESS,[gc]:i.LEQUAL,[eu]:i.EQUAL,[_c]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function Zt(P,_){if(_.type===Nn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===xo||_.magFilter===Kr||_.magFilter===hi||_.minFilter===mn||_.minFilter===xo||_.minFilter===Kr||_.minFilter===hi)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Ot[_.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Ot[_.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Ot[_.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ce[_.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,qt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==Kr&&_.minFilter!==hi||_.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function se(P,_){let L=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",I),B(_));let j=_.source,W=p.get(j);W===void 0&&(W={},p.set(j,W));let ot=q(_);if(ot!==P.__cacheKey){W[ot]===void 0&&(W[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),W[ot].usedTimes++;let ut=W[P.__cacheKey];ut!==void 0&&(W[P.__cacheKey].usedTimes--,ut.usedTimes===0&&Y(_)),P.__cacheKey=ot,P.__webglTexture=W[ot].texture}return L}function ct(P,_,L){return Math.floor(Math.floor(P/L)/_)}function dt(P,_,L,j){let ot=P.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,j,_.data);else{ot.sort((O,st)=>O.start-st.start);let ut=0;for(let O=1;O<ot.length;O++){let st=ot[ut],nt=ot[O],xt=st.start+st.count,Tt=ct(nt.start,_.width,4),Pt=ct(st.start,_.width,4);nt.start<=xt+1&&Tt===Pt&&ct(nt.start+nt.count-1,_.width,4)===Tt?st.count=Math.max(st.count,nt.start+nt.count-st.start):(++ut,ot[ut]=nt)}ot.length=ut+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let O=0,st=ot.length;O<st;O++){let nt=ot[O],xt=Math.floor(nt.start/4),Tt=Math.ceil(nt.count/4),Pt=xt%_.width,Jt=Math.floor(xt/_.width),le=Tt,Et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Jt),e.texSubImage2D(i.TEXTURE_2D,0,Pt,Jt,le,Et,L,j,_.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function yt(P,_,L){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let W=se(P,_),ot=_.source;e.bindTexture(j,P.__webglTexture,i.TEXTURE0+L);let ut=n.get(ot);if(ot.version!==ut.__version||W===!0){if(e.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Et=_e.getPrimaries(_e.workingColorSpace),Qt=_.colorSpace===Vn?null:_e.getPrimaries(_.colorSpace),de=_.colorSpace===Vn||Et===Qt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=S(_.image,!1,s.maxTextureSize);tt=zt(_,tt);let Mt=r.convert(_.format,_.colorSpace),O=r.convert(_.type),st=E(_.internalFormat,Mt,O,_.normalized,_.colorSpace,_.isVideoTexture);Zt(j,_);let nt,xt=_.mipmaps,Tt=_.isVideoTexture!==!0,Pt=ut.__version===void 0||W===!0,Jt=ot.dataReady,le=b(_,tt);if(_.isDepthTexture)st=x(_.format===ui,_.type),Pt&&(Tt?e.texStorage2D(i.TEXTURE_2D,1,st,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,st,tt.width,tt.height,0,Mt,O,null));else if(_.isDataTexture)if(xt.length>0){Tt&&Pt&&e.texStorage2D(i.TEXTURE_2D,le,st,xt[0].width,xt[0].height);for(let Et=0,Qt=xt.length;Et<Qt;Et++)nt=xt[Et],Tt?Jt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,nt.width,nt.height,Mt,O,nt.data):e.texImage2D(i.TEXTURE_2D,Et,st,nt.width,nt.height,0,Mt,O,nt.data);_.generateMipmaps=!1}else Tt?(Pt&&e.texStorage2D(i.TEXTURE_2D,le,st,tt.width,tt.height),Jt&&dt(_,tt,Mt,O)):e.texImage2D(i.TEXTURE_2D,0,st,tt.width,tt.height,0,Mt,O,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Tt&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,st,xt[0].width,xt[0].height,tt.depth);for(let Et=0,Qt=xt.length;Et<Qt;Et++)if(nt=xt[Et],_.format!==Gn)if(Mt!==null)if(Tt){if(Jt)if(_.layerUpdates.size>0){let de=Cc(nt.width,nt.height,_.format,_.type);for(let kt of _.layerUpdates){let be=nt.data.subarray(kt*de/nt.data.BYTES_PER_ELEMENT,(kt+1)*de/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,kt,nt.width,nt.height,1,Mt,be)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,nt.width,nt.height,tt.depth,Mt,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,st,nt.width,nt.height,tt.depth,0,nt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?Jt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,nt.width,nt.height,tt.depth,Mt,O,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,st,nt.width,nt.height,tt.depth,0,Mt,O,nt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Tt&&Pt&&e.texStorage2D(i.TEXTURE_2D,le,st,xt[0].width,xt[0].height);for(let Et=0,Qt=xt.length;Et<Qt;Et++)nt=xt[Et],_.format!==Gn?Mt!==null?Tt?Jt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,nt.width,nt.height,Mt,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,st,nt.width,nt.height,0,nt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?Jt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,nt.width,nt.height,Mt,O,nt.data):e.texImage2D(i.TEXTURE_2D,Et,st,nt.width,nt.height,0,Mt,O,nt.data)}else if(_.isDataArrayTexture)if(Tt){if(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,st,tt.width,tt.height,tt.depth),Jt)if(_.layerUpdates.size>0){let Et=Cc(tt.width,tt.height,_.format,_.type);for(let Qt of _.layerUpdates){let de=tt.data.subarray(Qt*Et/tt.data.BYTES_PER_ELEMENT,(Qt+1)*Et/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Qt,tt.width,tt.height,1,Mt,O,de)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Mt,O,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,tt.width,tt.height,tt.depth,0,Mt,O,tt.data);else if(_.isData3DTexture)Tt?(Pt&&e.texStorage3D(i.TEXTURE_3D,le,st,tt.width,tt.height,tt.depth),Jt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Mt,O,tt.data)):e.texImage3D(i.TEXTURE_3D,0,st,tt.width,tt.height,tt.depth,0,Mt,O,tt.data);else if(_.isFramebufferTexture){if(Pt)if(Tt)e.texStorage2D(i.TEXTURE_2D,le,st,tt.width,tt.height);else{let Et=tt.width,Qt=tt.height;for(let de=0;de<le;de++)e.texImage2D(i.TEXTURE_2D,de,st,Et,Qt,0,Mt,O,null),Et>>=1,Qt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Et=i.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),tt.parentNode!==Et){Et.appendChild(tt),f.add(_),Et.onpaint=Qt=>{let de=Qt.changedElements;for(let kt of f)de.includes(kt.image)&&(kt.needsUpdate=!0)},Et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let de=i.RGBA,kt=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,de,kt,be,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xt.length>0){if(Tt&&Pt){let Et=Kt(xt[0]);e.texStorage2D(i.TEXTURE_2D,le,st,Et.width,Et.height)}for(let Et=0,Qt=xt.length;Et<Qt;Et++)nt=xt[Et],Tt?Jt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Mt,O,nt):e.texImage2D(i.TEXTURE_2D,Et,st,Mt,O,nt);_.generateMipmaps=!1}else if(Tt){if(Pt){let Et=Kt(tt);e.texStorage2D(i.TEXTURE_2D,le,st,Et.width,Et.height)}Jt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,O,tt)}else e.texImage2D(i.TEXTURE_2D,0,st,Mt,O,tt);w(_)&&_.mipmapsAutoUpdate===!0&&y(j),ut.__version=ot.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Ft(P,_,L){if(_.image.length!==6)return;let j=se(P,_),W=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+L);let ot=n.get(W);if(W.version!==ot.__version||j===!0){e.activeTexture(i.TEXTURE0+L);let ut=_e.getPrimaries(_e.workingColorSpace),Z=_.colorSpace===Vn?null:_e.getPrimaries(_.colorSpace),tt=_.colorSpace===Vn||ut===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,O=_.image[0]&&_.image[0].isDataTexture,st=[];for(let kt=0;kt<6;kt++)!Mt&&!O?st[kt]=S(_.image[kt],!0,s.maxCubemapSize):st[kt]=O?_.image[kt].image:_.image[kt],st[kt]=zt(_,st[kt]);let nt=st[0],xt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Pt=E(_.internalFormat,xt,Tt,_.normalized,_.colorSpace),Jt=_.isVideoTexture!==!0,le=ot.__version===void 0||j===!0,Et=W.dataReady,Qt=b(_,nt);Zt(i.TEXTURE_CUBE_MAP,_);let de;if(_.isDepthTexture){if(Pt=x(_.format===ui,_.type),le)if(Jt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pt,nt.width,nt.height);else for(let kt=0;kt<6;kt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Pt,nt.width,nt.height,0,xt,Tt,null)}else if(Mt){Jt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Qt,Pt,nt.width,nt.height);for(let kt=0;kt<6;kt++){de=st[kt].mipmaps;for(let be=0;be<de.length;be++){let Ee=de[be];_.format!==Gn?xt!==null?Jt?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,be,0,0,Ee.width,Ee.height,xt,Ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,be,Pt,Ee.width,Ee.height,0,Ee.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,be,0,0,Ee.width,Ee.height,xt,Tt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,be,Pt,Ee.width,Ee.height,0,xt,Tt,Ee.data)}}}else{if(de=_.mipmaps,Jt&&le){de.length>0&&Qt++;let kt=Kt(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Qt,Pt,kt.width,kt.height)}for(let kt=0;kt<6;kt++)if(O){Jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,0,0,st[kt].width,st[kt].height,xt,Tt,st[kt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Pt,st[kt].width,st[kt].height,0,xt,Tt,st[kt].data);for(let be=0;be<de.length;be++){let K=de[be].image[kt].image;Jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,be+1,0,0,K.width,K.height,xt,Tt,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,be+1,Pt,K.width,K.height,0,xt,Tt,K.data)}}else{Jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,0,0,xt,Tt,st[kt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Pt,xt,Tt,st[kt]);for(let be=0;be<de.length;be++){let Ee=de[be];Jt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,be+1,0,0,xt,Tt,Ee.image[kt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,be+1,Pt,xt,Tt,Ee.image[kt])}}}w(_)&&_.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ot.__version=W.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function It(P,_,L,j,W,ot){let ut=r.convert(L.format,L.colorSpace),Z=r.convert(L.type),tt=E(L.internalFormat,ut,Z,L.normalized,L.colorSpace),Mt=n.get(_),O=n.get(L);if(O.__renderTarget=_,!Mt.__hasExternalTextures){let st=Math.max(1,_.width>>ot),nt=Math.max(1,_.height>>ot);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,ot,tt,st,nt,_.depth,0,ut,Z,null):e.texImage2D(W,ot,tt,st,nt,0,ut,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,W,O.__webglTexture,0,he(_)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,W,O.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(P,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,P),_.depthBuffer){let j=_.depthTexture,W=j&&j.isDepthTexture?j.type:null,ot=x(_.stencilBuffer,W),ut=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(_),ot,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,P)}else{let j=_.textures;for(let W=0;W<j.length;W++){let ot=j[W],ut=r.convert(ot.format,ot.colorSpace),Z=r.convert(ot.type),tt=E(ot.internalFormat,ut,Z,ot.normalized,ot.colorSpace);Rt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(_),tt,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(_),tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(P,_,L){let j=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(_.depthTexture);W.__renderTarget=_;let ot=j?_.depthTexture.image[0]:_.depthTexture.image;(!W.__webglTexture||ot.width!==_.width||ot.height!==_.height)&&(ot.width=_.width,ot.height=_.height,_.depthTexture.needsUpdate=!0),j?wt(_.depthTexture,0):gt(_.depthTexture,0);let ut=W.__webglTexture,Z=he(_),tt=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,Mt=_.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ni)Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,tt,ut,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,tt,ut,0);else if(_.depthTexture.format===ui)Rt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,tt,ut,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,tt,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function jt(P){let _=n.get(P),L=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",W)};j.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=j}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let j=0;j<6;j++)Bt(_.__webglFramebuffer[j],P,j);else P.texture.mipmaps.length>0?Bt(_.__webglFramebuffer[0],P,0):Bt(_.__webglFramebuffer,P,0);else if(L){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),Vt(_.__webglDepthbuffer[j],P,!1);else{let W=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ot)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Vt(_.__webglDepthbuffer,P,!1);else{let W=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(P,_,L){let j=n.get(P);_!==void 0&&It(j.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&jt(P)}function ne(P){let _=P.texture,L=n.get(P),j=n.get(_);P.addEventListener("dispose",N),B(P);let W=P.textures,ot=P.isWebGLCubeRenderTarget===!0,ut=W.length>1;if(ut||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),ot){L.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps.length>0){L.__webglFramebuffer[Z]=[];for(let tt=0;tt<_.mipmaps.length;tt++)L.__webglFramebuffer[Z][tt]=i.createFramebuffer()}else L.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps.length>0){L.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)L.__webglFramebuffer[Z]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ut)for(let Z=0,tt=W.length;Z<tt;Z++){let Mt=n.get(W[Z]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Rt(P)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Z=0;Z<W.length;Z++){let tt=W[Z];L.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[Z]);let Mt=r.convert(tt.format,tt.colorSpace),O=r.convert(tt.type),st=E(tt.internalFormat,Mt,O,tt.normalized,tt.colorSpace,P.isXRRenderTarget===!0),nt=he(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,st,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,L.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(L.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)It(L.__webglFramebuffer[Z][tt],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt);else It(L.__webglFramebuffer[Z],P,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(_)?y(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let Z=0,tt=W.length;Z<tt;Z++){let Mt=W[Z],O=n.get(Mt),st=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(st=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,O.__webglTexture),Zt(st,Mt),It(L.__webglFramebuffer,P,Mt,i.COLOR_ATTACHMENT0+Z,st,0),w(Mt)&&y(st)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,j.__webglTexture),Zt(Z,_),_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)It(L.__webglFramebuffer[tt],P,_,i.COLOR_ATTACHMENT0,Z,tt);else It(L.__webglFramebuffer,P,_,i.COLOR_ATTACHMENT0,Z,0);w(_)?y(Z):_.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&jt(P)}function H(P){let _=P.textures;for(let L=0,j=_.length;L<j;L++){let W=_[L];if(w(W)&&W.mipmapsAutoUpdate===!0){let ot=C(P),ut=n.get(W).__webglTexture;e.bindTexture(ot,ut),y(ot),e.unbindTexture()}}}let Xt=[];function ae(P){if(P.samples>0){if(Rt(P)===!1){let _=P.textures,L=P.width,j=P.height,W=i.COLOR_BUFFER_BIT,ot=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(P),Z=_.length>1;if(Z)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Mt]);let O=n.get(_[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,L,j,0,0,L,j,W,i.NEAREST),l===!0&&(Xt.length=0,Xt.push(i.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Xt.push(ot),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Mt]);let O=n.get(_[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,O,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let _=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function he(P){return Math.min(s.maxSamples,P.samples)}function Rt(P){let _=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Se(P){let _=a.render.frame;u.get(P)!==_&&(u.set(P,_),P.update())}function zt(P,_){let L=P.colorSpace,j=P.format,W=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||L!==ur&&L!==Vn&&(_e.getTransfer(L)===Ae?(j!==Gn||W!==_n)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",L)),_}function Kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=_t,this.resetTextureUnits=ht,this.getTextureUnits=at,this.setTextureUnits=it,this.setTexture2D=gt,this.setTexture2DArray=mt,this.setTexture3D=Ut,this.setTextureCube=wt,this.rebindTextures=re,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Rt,this.dispose=X}function p_(i,t){function e(n,s=Vn){let r,a=_e.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===qe)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===Gn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===Jr||n===$r||n===jr||n===Qr)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===Ao||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Io||n===Lo||n===Do||n===No||n===ta||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Io)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===$o||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===tl||n===ea||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var m_=`
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

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,m=null,M=typeof XRWebGLBinding<"u",d=new Oc,g={},S=e.getContextAttributes(),w=null,y=null,C=[],E=[],x=new vt,b=null,B=null,A=new rn;A.viewport=new De;let I=new rn;I.viewport=new De;let N=[A,I],$=new mo,F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let gt=C[q];return gt===void 0&&(gt=new Rs,C[q]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(q){let gt=C[q];return gt===void 0&&(gt=new Rs,C[q]=gt),gt.getGripSpace()},this.getHand=function(q){let gt=C[q];return gt===void 0&&(gt=new Rs,C[q]=gt),gt.getHandSpace()};function V(q){let gt=E.indexOf(q.inputSource);if(gt===-1)return;let mt=C[gt];mt!==void 0&&(mt.update(q.inputSource,q.frame,c||a),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",pt);for(let q=0;q<C.length;q++){let gt=E[q];gt!==null&&(E[q]=null,C[q].disconnect(gt))}F=null,X=null,d.reset();for(let q in g)delete g[q];if(t.setRenderTarget(w),p=null,h=null,f=null,s=null,y=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),B!==null){let q=B.camera;q.fov=B.fov,q.zoom=B.zoom,q.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",pt),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ut=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=S.stencil?ui:ni,Ut=S.stencil?ns:zn);let Ot={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ot),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ge(h.textureWidth,h.textureHeight,{format:Gn,type:_n,depthTexture:new oi(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ge(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function pt(q){for(let gt=0;gt<q.removed.length;gt++){let mt=q.removed[gt],Ut=E.indexOf(mt);Ut>=0&&(E[Ut]=null,C[Ut].disconnect(mt))}for(let gt=0;gt<q.added.length;gt++){let mt=q.added[gt],Ut=E.indexOf(mt);if(Ut===-1){for(let Ot=0;Ot<C.length;Ot++)if(Ot>=E.length){E.push(mt),Ut=Ot;break}else if(E[Ot]===null){E[Ot]=mt,Ut=Ot;break}if(Ut===-1)break}let wt=C[Ut];wt&&wt.connect(mt)}}function rt(q,gt){gt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(gt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let gt=q.near,mt=q.far;d.texture!==null&&(d.depthNear>0&&(gt=d.depthNear),d.depthFar>0&&(mt=d.depthFar)),$.near=I.near=A.near=gt,$.far=I.far=A.far=mt,(F!==$.near||X!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),F=$.near,X=$.far),$.layers.mask=q.layers.mask|6,A.layers.mask=$.layers.mask&-5,I.layers.mask=$.layers.mask&-3;let Ut=q.parent,wt=$.cameras;rt($,Ut);for(let Ot=0;Ot<wt.length;Ot++)rt(wt[Ot],Ut);$.projectionMatrix.copy(A.projectionMatrix),$.projectionMatrixInverse.copy(A.projectionMatrixInverse),B===null&&q.isPerspectiveCamera&&(B={camera:q,fov:q.fov,zoom:q.zoom}),ht(q,$,Ut)};function ht(q,gt,mt){mt===null?q.matrix.copy(gt.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(gt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(gt.projectionMatrix),q.projectionMatrixInverse.copy(gt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Wi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh($)},this.getCameraTexture=function(q){return g[q]};let at=null;function it(q,gt){if(u=gt.getViewerPose(c||a),m=gt,u!==null){let mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;mt.length!==$.cameras.length&&($.cameras.length=0,Ut=!0);for(let qt=0;qt<mt.length;qt++){let Zt=mt[qt],se=null;if(p!==null)se=p.getViewport(Zt);else{let dt=f.getViewSubImage(h,Zt);se=dt.viewport,qt===0&&(t.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(y))}let ct=N[qt];ct===void 0&&(ct=new rn,ct.layers.enable(qt),ct.viewport=new De,N[qt]=ct),ct.matrix.fromArray(Zt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Zt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(se.x,se.y,se.width,se.height),qt===0&&($.matrix.copy(ct.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ut===!0&&$.cameras.push(ct)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let qt=f.getDepthInformation(mt[0]);qt&&qt.isValid&&qt.texture&&d.init(qt,s.renderState)}if(wt&&wt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let qt=0;qt<mt.length;qt++){let Zt=mt[qt].camera;if(Zt){let se=g[Zt];se||(se=new br,g[Zt]=se);let ct=f.getCameraImage(Zt);se.sourceTexture=ct}}}}for(let mt=0;mt<C.length;mt++){let Ut=E[mt],wt=C[mt];Ut!==null&&wt!==void 0&&wt.update(Ut,gt,c||a)}at&&at(q,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),m=null}let _t=new ku;_t.setAnimationLoop(it),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}},__=new ye,Ku=new fe;Ku.set(-1,0,0,0,1,0,0,0,1);function x_(i,t){function e(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function n(d,g){g.color.getRGB(d.fogColor.value,Tc(i)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function s(d,g,S,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(d,g):g.isMeshLambertMaterial?(r(d,g),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(d,g),f(d,g)):g.isMeshPhongMaterial?(r(d,g),u(d,g),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(d,g),h(d,g),g.isMeshPhysicalMaterial&&p(d,g,y)):g.isMeshMatcapMaterial?(r(d,g),m(d,g)):g.isMeshDepthMaterial?r(d,g):g.isMeshDistanceMaterial?(r(d,g),M(d,g)):g.isMeshNormalMaterial?r(d,g):g.isLineBasicMaterial?(a(d,g),g.isLineDashedMaterial&&o(d,g)):g.isPointsMaterial?l(d,g,S,w):g.isSpriteMaterial?c(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,e(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===an&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,e(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===an&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,e(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,e(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);let S=t.get(g),w=S.envMap,y=S.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Ku),d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap&&(d.lightMap.value=g.lightMap,d.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,d.lightMapTransform)),g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,d.aoMapTransform))}function a(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform))}function o(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function l(d,g,S,w){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*S,d.scale.value=w*.5,g.map&&(d.map.value=g.map,e(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function c(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function u(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function f(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function h(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,d.roughnessMapTransform)),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function p(d,g,S){d.ior.value=g.ior,g.diffuseRoughness>0&&(d.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===an&&d.clearcoatNormalScale.value.negate())),g.dispersion>0&&(d.dispersion.value=g.dispersion),g.retroreflectivity>0&&(d.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function M(d,g){let S=t.get(g).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v_(i,t,e,n){let s={},r={};function a(S,w){let y=w.program;n.uniformBlockBinding(S,y,s[S.id])}function o(S,w){let y=s[S.id];y===void 0&&(m(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",d));let C=w.program;n.updateUBOMapping(S,C);let E=t.render.frame;r[S.id]!==E&&(c(S),r[S.id]=E)}function l(S){let w=i.createBuffer(),y=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(S){let w=s[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,x=y.length;E<x;E++){let b=y[E];if(Array.isArray(b))for(let B=0,A=b.length;B<A;B++)u(b[B],E,B,C);else u(b,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,w,y,C){if(h(S,w,y,C)===!0){let E=S.__offset,x=S.value;if(Array.isArray(x)){let b=0;for(let B=0;B<x.length;B++){let A=x[B],I=M(A,!0);f(A,S.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function f(S,w,y){typeof S=="number"||typeof S=="boolean"?w[y]=S:S.isMatrix3?(w[y]=S.elements[0],w[y+1]=S.elements[1],w[y+2]=S.elements[2],w[y+3]=0,w[y+4]=S.elements[3],w[y+5]=S.elements[4],w[y+6]=S.elements[5],w[y+7]=0,w[y+8]=S.elements[6],w[y+9]=S.elements[7],w[y+10]=S.elements[8],w[y+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-y),y):S.toArray(w,y)}function h(S,w,y,C){let E=S.value,x=w+"_"+y;if(Array.isArray(E)){C[x]===void 0&&(C[x]=[]);let b=C[x],B=!1;for(let A=0;A<E.length;A++)p(E[A],b,A)===!0&&(B=!0);return B}return p(E,C,x)}function p(S,w,y){if(w[y]===void 0)return typeof S=="number"||typeof S=="boolean"?w[y]=S:ArrayBuffer.isView(S)?w[y]=S.slice():w[y]=S.clone(),!0;{let C=w[y];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return w[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function m(S){let w=S.uniforms,y=0,C=16;for(let x=0,b=w.length;x<b;x++){let B=Array.isArray(w[x])?w[x]:[w[x]];for(let A=0,I=B.length;A<I;A++){let N=B[A],$=Array.isArray(N.value)?N.value:[N.value],F=Array.isArray(w[x])||Array.isArray(N.value),X=y;for(let Y=0,pt=$.length;Y<pt;Y++){let rt=$[Y],ht=M(rt,F),at=y%C,it=at%ht.boundary,_t=at+it;y+=it,_t!==0&&C-_t<ht.storage&&(y+=C-_t),Y===0&&(X=y),y+=ht.storage}let V=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new V((y-X)/Float32Array.BYTES_PER_ELEMENT),N.__offset=X}}let E=y%C;return E>0&&(y+=C-E),S.__size=y,S.__cache={},this}function M(S,w){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function d(S){let w=S.target;w.removeEventListener("dispose",d),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:g}}var y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function M_(){return Yn===null&&(Yn=new xr(y_,16,16,Di,qe),Yn.name="DFG_LUT",Yn.minFilter=mn,Yn.magFilter=mn,Yn.wrapS=Wn,Yn.wrapT=Wn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var rl=class{constructor(t={}){let{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=_n}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let M=p,d=new Set([To,wo,bo]),g=new Set([_n,zn,Vs,ns,yo,Mo]),S=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},C=null,E=null,x=[],b=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,N=null,$=null,F=null,X=null;this._outputColorSpace=sn;let V=0,Y=0,pt=null,rt=-1,ht=null,at=new De,it=new De,_t=null,q=new ee(0),gt=0,mt=e.width,Ut=e.height,wt=1,Ot=null,ce=null,qt=new De(0,0,mt,Ut),Zt=new De(0,0,mt,Ut),se=!1,ct=new bi,dt=new Ka,yt=!1,Ft=!1,It=new ye,Vt=new D,Bt=new De,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function ne(){return pt===null?wt:1}let H=n;function Xt(v,T){return e.getContext(v,T)}let ae,he,Rt,Se,zt,Kt,P,_,L,j,W,ot,ut,Z,tt,Mt,O,st,nt,xt,Tt,Pt,Jt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Qt,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",kt,!1),H===null){let T="webgl2";if(H=Xt(T,v),H===null)throw Xt(T)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(v){throw e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),ue("WebGLRenderer: "+v.message),v}function le(){ae=new L0(H),ae.init(),Tt=new p_(H,ae),he=new M0(H,ae,t,Tt),Rt=new d_(H,ae),he.reversedDepthBuffer&&h&&Rt.buffers.depth.setReversed(!0),$=H.createFramebuffer(),F=H.createFramebuffer(),X=H.createFramebuffer(),Se=new U0(H),zt=new jg,Kt=new f_(H,ae,Rt,zt,he,Tt,Se),P=new I0(A),_=new Of(H),Pt=new v0(H,_),L=new D0(H,_,Se,Pt),j=new O0(H,L,_,Pt,Se),st=new F0(H,he,Kt),tt=new S0(zt),W=new $g(A,P,ae,he,Pt,tt),ot=new x_(A,zt),ut=new t_,Z=new a_(ae),O=new x0(A,P,Rt,j,m,l),Mt=new u_(A,j,he),Jt=new v_(H,Se,he,Rt),nt=new y0(H,ae,Se),xt=new N0(H,ae,Se),Se.programs=W.programs,A.capabilities=he,A.extensions=ae,A.properties=zt,A.renderLists=ut,A.shadowMap=Mt,A.state=Rt,A.info=Se}M!==_n&&(B=new k0(M,e.width,e.height,o,s,r));let Et=new Bc(A,H);this.xr=Et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let v=ae.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ae.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(v){v!==void 0&&(wt=v,this.setSize(mt,Ut,!1))},this.getSize=function(v){return v.set(mt,Ut)},this.setSize=function(v,T,z=!0){if(Et.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=v,Ut=T,e.width=Math.floor(v*wt),e.height=Math.floor(T*wt),z===!0&&(e.style.width=v+"px",e.style.height=T+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,v,T)},this.getDrawingBufferSize=function(v){return v.set(mt*wt,Ut*wt).floor()},this.setDrawingBufferSize=function(v,T,z){mt=v,Ut=T,wt=z,e.width=Math.floor(v*z),e.height=Math.floor(T*z),this.setViewport(0,0,v,T)},this.setEffects=function(v){if(M===_n){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let T=0;T<v.length;T++)if(v[T].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(at)},this.getViewport=function(v){return v.copy(qt)},this.setViewport=function(v,T,z,k){v.isVector4?qt.set(v.x,v.y,v.z,v.w):qt.set(v,T,z,k),Rt.viewport(at.copy(qt).multiplyScalar(ne()).round())},this.getScissor=function(v){return v.copy(Zt)},this.setScissor=function(v,T,z,k){v.isVector4?Zt.set(v.x,v.y,v.z,v.w):Zt.set(v,T,z,k),Rt.scissor(it.copy(Zt).multiplyScalar(ne()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(v){Rt.setScissorTest(se=v)},this.setOpaqueSort=function(v){Ot=v},this.setTransparentSort=function(v){ce=v},this.getClearColor=function(v){return v.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(v=!0,T=!0,z=!0){let k=0;if(v){let U=!1;if(pt!==null){let lt=pt.texture.format;U=d.has(lt)}if(U){let lt=pt.texture.type,At=g.has(lt),ft=O.getClearColor(),bt=O.getClearAlpha(),Nt=ft.r,te=ft.g,Yt=ft.b;At?(S[0]=Nt,S[1]=te,S[2]=Yt,S[3]=bt,H.clearBufferuiv(H.COLOR,0,S)):(w[0]=Nt,w[1]=te,w[2]=Yt,w[3]=bt,H.clearBufferiv(H.COLOR,0,w))}else k|=H.COLOR_BUFFER_BIT}T&&(k|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(k|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&H.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),O.dispose(),ut.dispose(),Z.dispose(),Kt.dispose(),zt.dispose(),P.dispose(),j.dispose(),L.dispose(),Pt.dispose(),Jt.dispose(),W.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Le),Et.removeEventListener("sessionend",on),Pe.stop()};function Qt(v){v.preventDefault(),yc("WebGLRenderer: Context Lost."),I=!0}function de(){yc("WebGLRenderer: Context Restored."),I=!1;let v=Se.autoReset,T=Mt.enabled,z=Mt.autoUpdate,k=Mt.needsUpdate,U=Mt.type;le(),Se.autoReset=v,Mt.enabled=T,Mt.autoUpdate=z,Mt.needsUpdate=k,Mt.type=U}function kt(v){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function be(v){let T=v.target;T.removeEventListener("dispose",be),Ee(T)}function Ee(v){K(v),zt.remove(v)}function K(v){let T=zt.get(v).programs;T!==void 0&&(T.forEach(function(z){W.releaseProgram(z)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,T,z,k,U,lt){T===null&&(T=jt);let At=U.isMesh&&U.matrixWorld.determinantAffine()<0,ft=Q(v,T,z,k,U);Rt.setMaterial(k,At);let bt=z.index,Nt=1;if(k.wireframe===!0){if(bt=L.getWireframeAttribute(z),bt===void 0)return;Nt=2}let te=z.drawRange,Yt=z.attributes.position,Gt=te.start*Nt,Wt=(te.start+te.count)*Nt;lt!==null&&(Gt=Math.max(Gt,lt.start*Nt),Wt=Math.min(Wt,(lt.start+lt.count)*Nt)),bt!==null?(Gt=Math.max(Gt,0),Wt=Math.min(Wt,bt.count)):Yt!=null&&(Gt=Math.max(Gt,0),Wt=Math.min(Wt,Yt.count));let ge=Wt-Gt;if(ge<0||ge===1/0)return;Pt.setup(U,k,ft,z,bt);let Me,Ie=nt;if(bt!==null&&(Me=_.get(bt),Ie=xt,Ie.setIndex(Me)),U.isMesh)k.wireframe===!0?(Rt.setLineWidth(k.wireframeLinewidth*ne()),Ie.setMode(H.LINES)):Ie.setMode(H.TRIANGLES);else if(U.isLine){let Ve=k.linewidth;Ve===void 0&&(Ve=1),Rt.setLineWidth(Ve*ne()),U.isLineSegments?Ie.setMode(H.LINES):U.isLineLoop?Ie.setMode(H.LINE_LOOP):Ie.setMode(H.LINE_STRIP)}else U.isPoints?Ie.setMode(H.POINTS):U.isSprite&&Ie.setMode(H.TRIANGLES);if(U.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Ie.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ve=U._multiDrawStarts,$t=U._multiDrawCounts,fn=U._multiDrawCount,Ce=bt?_.get(bt).bytesPerElement:1,Fi=zt.get(k).currentProgram.getUniforms();for(let ln=0;ln<fn;ln++)Fi.setValue(H,"_gl_DrawID",ln),Ie.render(Ve[ln]/Ce,$t[ln])}else if(U.isInstancedMesh)Ie.renderInstances(Gt,ge,U.count);else if(z.isInstancedBufferGeometry){let Ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,$t=Math.min(z.instanceCount,Ve);Ie.renderInstances(Gt,ge,$t)}else Ie.render(Gt,ge)};function St(v,T,z,k){N!==null&&v.isNodeMaterial&&N.setObject(k,v),yt===!0&&tt.setState(v,z,!1),v.transparent===!0&&v.side===un&&v.forceSinglePass===!1?(v.side=an,v.needsUpdate=!0,Ui(v,T,k),v.side=Li,v.needsUpdate=!0,Ui(v,T,k),v.side=un):Ui(v,T,k)}this.compile=function(v,T,z=null){z===null&&(z=v),N!==null&&N.renderStart(v,T,z),E=Z.get(z),E.init(T),b.push(E),z.traverseVisible(function(U){U.isLight&&U.layers.test(T.layers)&&(E.pushLight(U),U.castShadow&&E.pushShadow(U))}),v!==z&&v.traverseVisible(function(U){U.isLight&&U.layers.test(T.layers)&&(E.pushLight(U),U.castShadow&&E.pushShadow(U))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Ft=this.localClippingEnabled,yt=tt.init(this.clippingPlanes,Ft),yt===!0&&tt.setGlobalState(this.clippingPlanes,T),N!==null&&Mt.render(E.state.shadowsArray,z,T);let k=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let lt=U.material;if(lt)if(Array.isArray(lt))for(let At=0;At<lt.length;At++){let ft=lt[At];St(ft,z,T,U),k.add(ft)}else St(lt,z,T,U),k.add(lt)}),E=b.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(v,T,z=null){let k=this.compile(v,T,z);return new Promise(U=>{function lt(){if(k.forEach(function(At){let bt=zt.get(At).currentProgram;(bt===void 0||bt.isReady())&&k.delete(At)}),k.size===0){U(v);return}setTimeout(lt,10)}ae.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Dt=null;function ve(v){Dt&&Dt(v)}function Le(){Pe.stop()}function on(){Pe.start()}let Pe=new ku;Pe.setAnimationLoop(ve),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(v){Dt=v,Et.setAnimationLoop(v),v===null?Pe.stop():Pe.start()},Et.addEventListener("sessionstart",Le),Et.addEventListener("sessionend",on),this.render=function(v,T){if(T!==void 0&&T.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(v,T);let z=Et.enabled===!0&&Et.isPresenting===!0,k=B!==null&&(pt===null||z)&&B.begin(A,pt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(T),T=Et.getCamera()),v.isScene===!0&&v.onBeforeRender(A,v,T,pt),E=Z.get(v,b.length),E.init(T),E.state.textureUnits=Kt.getTextureUnits(),b.push(E),It.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera?dt.setFromArrayCamera(T):ct.setFromProjectionMatrix(It,Pn,T.reversedDepth),Ft=this.localClippingEnabled,yt=tt.init(this.clippingPlanes,Ft),C=ut.get(v,x.length),C.init(),x.push(C),this.info.render.frame++,Et.enabled===!0&&Et.isPresenting===!0){let At=A.xr.getDepthSensingMesh();At!==null&&Je(At,T,-1/0,A.sortObjects)}Je(v,T,0,A.sortObjects),C.finish(),N!==null&&N.updateLights(E.state.lightsArray),A.sortObjects===!0&&C.sort(Ot,ce),re=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,re&&O.addToRenderList(C,v),this.info.autoReset===!0&&this.info.reset(),yt===!0&&tt.beginShadows();let U=E.state.shadowsArray;if(Mt.render(U,v,T),yt===!0&&tt.endShadows(),(k&&B.hasRenderPass())===!1){let At=C.opaque,ft=C.transmissive;if(E.setupLights(),T.isArrayCamera){let bt=T.cameras;if(ft.length>0)for(let Nt=0,te=bt.length;Nt<te;Nt++){let Yt=bt[Nt];fi(At,ft,v,Yt)}re&&O.render(v);for(let Nt=0,te=bt.length;Nt<te;Nt++){let Yt=bt[Nt];ze(C,v,Yt,Yt.viewport)}}else ft.length>0&&fi(At,ft,v,T),re&&O.render(v),ze(C,v,T)}pt!==null&&Y===0&&(Kt.updateMultisampleRenderTarget(pt),Kt.updateRenderTargetMipmap(pt)),k&&B.end(A),v.isScene===!0&&v.onAfterRender(A,v,T),Pt.resetDefaultState(),rt=-1,ht=null,b.pop(),b.length>0?(E=b[b.length-1],Kt.setTextureUnits(E.state.textureUnits),yt===!0&&tt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,N!==null&&N.renderEnd()};function Je(v,T,z,k){if(v.visible===!1)return;if(v.layers.test(T.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(T);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){let At=T.isArrayCamera?dt:ct;if(!v.frustumCulled||v.intersectsFrustum(At)){k&&Bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(It);let ft=j.update(v),bt=v.material;bt.visible&&C.push(v,ft,bt,z,Bt.z,null,T)}}else if(v.isMesh||v.isLine||v.isPoints){let At=T.isArrayCamera?dt:ct;if(!v.frustumCulled||v.intersectsFrustum(At)){let ft=j.update(v),bt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Bt.copy(v.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Bt.copy(ft.boundingSphere.center)),Bt.applyMatrix4(v.matrixWorld).applyMatrix4(It)),Array.isArray(bt)){let Nt=ft.groups;for(let te=0,Yt=Nt.length;te<Yt;te++){let Gt=Nt[te],Wt=bt[Gt.materialIndex];Wt&&Wt.visible&&C.push(v,ft,Wt,z,Bt.z,Gt,T)}}else bt.visible&&C.push(v,ft,bt,z,Bt.z,null,T)}}}let lt=v.children;for(let At=0,ft=lt.length;At<ft;At++)Je(lt[At],T,z,k)}function ze(v,T,z,k){let{opaque:U,transmissive:lt,transparent:At}=v;E.setupLightsView(z),yt===!0&&tt.setGlobalState(A.clippingPlanes,z),k&&Rt.viewport(at.copy(k)),U.length>0&&ls(U,T,z),lt.length>0&&ls(lt,T,z),At.length>0&&ls(At,T,z),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function fi(v,T,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Gt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Ge(1,1,{generateMipmaps:!0,type:Gt?qe:_n,minFilter:hi,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let lt=E.state.transmissionRenderTarget[k.id],At=k.viewport||at;lt.setSize(At.z*A.transmissionResolutionScale,At.w*A.transmissionResolutionScale);let ft=A.getRenderTarget(),bt=A.getActiveCubeFace(),Nt=A.getActiveMipmapLevel();A.setRenderTarget(lt),A.getClearColor(q),gt=A.getClearAlpha(),gt<1&&A.setClearColor(16777215,.5),A.clear(),re&&O.render(z);let te=A.toneMapping;A.toneMapping=qn;let Yt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),yt===!0&&tt.setGlobalState(A.clippingPlanes,k),ls(v,z,k),Kt.updateMultisampleRenderTarget(lt),Kt.updateRenderTargetMipmap(lt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Wt=0,ge=T.length;Wt<ge;Wt++){let Me=T[Wt],{object:Ie,geometry:Ve,material:$t,group:fn}=Me;if($t.side===un&&Ie.layers.test(k.layers)){let Ce=$t.side;$t.side=an,$t.needsUpdate=!0,$s(Ie,z,k,Ve,$t,fn),$t.side=Ce,$t.needsUpdate=!0,Gt=!0}}Gt===!0&&(Kt.updateMultisampleRenderTarget(lt),Kt.updateRenderTargetMipmap(lt))}A.setRenderTarget(ft,bt,Nt),A.setClearColor(q,gt),Yt!==void 0&&(k.viewport=Yt),A.toneMapping=te}function ls(v,T,z){let k=T.isScene===!0?T.overrideMaterial:null;for(let U=0,lt=v.length;U<lt;U++){let At=v[U],{object:ft,geometry:bt,group:Nt}=At,te=At.material;te.allowOverride===!0&&k!==null&&(te=k),ft.layers.test(z.layers)&&$s(ft,T,z,bt,te,Nt)}}function $s(v,T,z,k,U,lt){N!==null&&U.isNodeMaterial&&N.setObject(v,U),v.onBeforeRender(A,T,z,k,U,lt),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(A,T,z,k,v,lt),U.transparent===!0&&U.side===un&&U.forceSinglePass===!1?(U.side=an,U.needsUpdate=!0,A.renderBufferDirect(z,T,k,U,v,lt),U.side=Li,U.needsUpdate=!0,A.renderBufferDirect(z,T,k,U,v,lt),U.side=un):A.renderBufferDirect(z,T,k,U,v,lt),v.onAfterRender(A,T,z,k,U,lt)}function js(v){let T=0;for(let z of v)z.texture!==null&&T++;return T}function Ui(v,T,z){T.isScene!==!0&&(T=jt);let k=zt.get(v),U=E.state.lights,lt=E.state.shadowsArray,At=U.state.version,ft=W.getParameters(v,U.state,lt,T,z,E.state.lightProbeGridArray),bt=W.getProgramCacheKey(ft),Nt=k.programs;k.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?T.environment:null,k.fog=T.fog;let te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;k.envMap=P.get(v.envMap||k.environment,te),k.envMapRotation=k.environment!==null&&v.envMap===null?T.environmentRotation:v.envMapRotation,Nt===void 0&&(v.addEventListener("dispose",be),Nt=new Map,k.programs=Nt,k.programVariants=new Map);let Yt=Nt.get(bt);if(Yt!==void 0){if(k.currentProgram===Yt&&k.lightsStateVersion===At)return J(v,ft),Yt}else ft.uniforms=W.getUniforms(v),N!==null&&v.isNodeMaterial&&N.build(v,z,ft),v.onBeforeCompile(ft,A),Yt=W.acquireProgram(ft,bt),Nt.set(bt,Yt),k.uniforms=ft.uniforms;let Gt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Gt.clippingPlanes=tt.uniform),J(v,ft),k.needsLights=Ct(v),k.lightsStateVersion=At,k.needsLights&&(Gt.ambientLightColor.value=U.state.ambient,Gt.lightProbe.value=U.state.probe,Gt.sunLights.value=U.state.sun,Gt.sunLightShadows.value=U.state.sunShadow,Gt.directionalLights.value=U.state.directional,Gt.directionalLightShadows.value=U.state.directionalShadow,Gt.spotLights.value=U.state.spot,Gt.spotLightShadows.value=U.state.spotShadow,Gt.rectAreaLights.value=U.state.rectArea,Gt.ltc_1.value=U.state.rectAreaLTC1,Gt.ltc_2.value=U.state.rectAreaLTC2,Gt.pointLights.value=U.state.point,Gt.pointLightShadows.value=U.state.pointShadow,Gt.hemisphereLights.value=U.state.hemi,Gt.sunShadowMatrix.value=U.state.sunShadowMatrix,Gt.sunShadowCascade.value=U.state.sunShadowCascade,Gt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Gt.spotLightMatrix.value=U.state.spotLightMatrix,Gt.spotLightMap.value=U.state.spotLightMap,Gt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.numLightProbeGrids=js(E.state.lightProbeGridArray),k.currentProgram=Yt,k.uniformsList=null,Yt}function R(v,T,z,k,U){let lt=zt.get(v),At=lt.currentProgram.id+","+k+","+U,ft=lt.programVariants.get(At);return ft===void 0?(ft=Ui(v,T,z),lt.programVariants.set(At,ft)):(lt.currentProgram=ft,lt.uniformsList=null,lt.outputColorSpace=k,lt.toneMapping=U),ft}function G(v){if(v.uniformsList===null){let T=v.currentProgram.getUniforms();v.uniformsList=Hs.seqWithValue(T.seq,v.uniforms)}return v.uniformsList}function J(v,T){let z=zt.get(v);z.outputColorSpace=T.outputColorSpace,z.batching=T.batching,z.batchingColor=T.batchingColor,z.instancing=T.instancing,z.instancingColor=T.instancingColor,z.instancingMorph=T.instancingMorph,z.skinning=T.skinning,z.morphTargets=T.morphTargets,z.morphNormals=T.morphNormals,z.morphColors=T.morphColors,z.morphTargetsCount=T.morphTargetsCount,z.numClippingPlanes=T.numClippingPlanes,z.numIntersection=T.numClipIntersection,z.vertexAlphas=T.vertexAlphas,z.vertexTangents=T.vertexTangents,z.toneMapping=T.toneMapping}function Q(v,T,z,k,U){T.isScene!==!0&&(T=jt),Kt.resetTextureUnits();let lt=T.fog,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?T.environment:null,ft=pt===null?A.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:_e.workingColorSpace,bt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Nt=P.get(k.envMap||At,bt),te=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Yt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Gt=!!z.morphAttributes.position,Wt=!!z.morphAttributes.normal,ge=!!z.morphAttributes.color,Me=qn;k.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Me=A.toneMapping);let Ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ve=Ie!==void 0?Ie.length:0,$t=zt.get(k),fn=E.state.lights;if(yt===!0&&(Ft===!0||v!==ht)){let Fe=v===ht&&k.id===rt;tt.setState(k,v,Fe)}let Ce=!1,Fi=!1;k.version===$t.__version?$t.needsLights&&$t.lightsStateVersion!==fn.state.version||U.isBatchedMesh&&$t.batching===!1||!U.isBatchedMesh&&$t.batching===!0||U.isBatchedMesh&&$t.batchingColor===!0&&U._colorsTexture===null||U.isBatchedMesh&&$t.batchingColor===!1&&U._colorsTexture!==null||U.isInstancedMesh&&$t.instancing===!1||!U.isInstancedMesh&&$t.instancing===!0||U.isSkinnedMesh&&$t.skinning===!1||!U.isSkinnedMesh&&$t.skinning===!0||U.isInstancedMesh&&$t.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&$t.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&$t.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&$t.instancingMorph===!1&&U.morphTexture!==null||$t.envMap!==Nt||k.fog===!0&&$t.fog!==lt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==tt.numPlanes||$t.numIntersection!==tt.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==Yt||$t.morphTargets!==Gt||$t.morphNormals!==Wt||$t.morphColors!==ge||$t.morphTargetsCount!==Ve||$t.numLightProbeGrids!==js(E.state.lightProbeGridArray)?Ce=!0:($t.outputColorSpace!==ft||$t.toneMapping!==Me)&&(Fi=!0):(Ce=!0,$t.__version=k.version);let ln=$t.currentProgram;(Ce===!0||Fi===!0)&&(ln=Fi===!0?R(k,T,U,ft,Me):Ui(k,T,U),N&&k.isNodeMaterial&&N.onUpdateProgram(k,ln,$t));let ca=!1,pi=!1,Oi=!1,we=ln.getUniforms(),nn=$t.uniforms;if(Rt.useProgram(ln.program)&&(ca=!0,pi=!0,Oi=!0),k.id!==rt&&(rt=k.id,pi=!0),ca||ht!==v){Rt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),we.setValue(H,"projectionMatrix",v.projectionMatrix),we.setValue(H,"viewMatrix",v.matrixWorldInverse);let $e=we.map.cameraPosition;$e!==void 0&&$e.setValue(H,Vt.setFromMatrixPosition(v.matrixWorld)),he.logarithmicDepthBuffer&&we.setValue(H,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&we.setValue(H,"isOrthographic",v.isOrthographicCamera===!0),ht!==v&&(ht=v,pi=!0,Oi=!0)}if($t.needsLights&&(fn.state.sunShadowMap.length>0&&we.setValue(H,"sunShadowMap",fn.state.sunShadowMap,Kt),fn.state.directionalShadowMap.length>0&&we.setValue(H,"directionalShadowMap",fn.state.directionalShadowMap,Kt),fn.state.spotShadowMap.length>0&&we.setValue(H,"spotShadowMap",fn.state.spotShadowMap,Kt),fn.state.pointShadowMap.length>0&&we.setValue(H,"pointShadowMap",fn.state.pointShadowMap,Kt)),U.isSkinnedMesh){we.setOptional(H,U,"bindMatrix"),we.setOptional(H,U,"bindMatrixInverse");let Fe=U.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),we.setValue(H,"boneTexture",Fe.boneTexture,Kt))}U.isBatchedMesh&&(we.setOptional(H,U,"batchingTexture"),we.setValue(H,"batchingTexture",U._matricesTexture,Kt),we.setOptional(H,U,"batchingIdTexture"),we.setValue(H,"batchingIdTexture",U._indirectTexture,Kt),we.setOptional(H,U,"batchingColorTexture"),U._colorsTexture!==null&&we.setValue(H,"batchingColorTexture",U._colorsTexture,Kt));let Un=z.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&st.update(U,z,ln),(pi||$t.receiveShadow!==U.receiveShadow)&&($t.receiveShadow=U.receiveShadow,we.setValue(H,"receiveShadow",U.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&T.environment!==null&&(nn.envMapIntensity.value=T.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=M_()),pi){if(we.setValue(H,"toneMappingExposure",A.toneMappingExposure),$t.needsLights&&et(nn,Oi),lt&&k.fog===!0&&ot.refreshFogUniforms(nn,lt),ot.refreshMaterialUniforms(nn,k,wt,Ut,E.state.transmissionRenderTarget[v.id]),$t.needsLights&&$t.numLightProbeGrids>0){let Fe=y,$e=0;for(let Kn of E.state.lightProbeGridArray)Kn.texture!==null&&(Fe.textures[$e]=Kn.texture,Fe.min[$e]=Kn.boundingBox.min,Fe.max[$e]=Kn.boundingBox.max,Fe.resolution[$e]=Kn.resolution,$e++);for(let Kn in Fe)Fe[Kn].length=$e;nn.probesSH.value=Fe.textures,nn.probesMin.value=Fe.min,nn.probesMax.value=Fe.max,nn.probesResolution.value=Fe.resolution}Hs.upload(H,G($t),nn,Kt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Hs.upload(H,G($t),nn,Kt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&we.setValue(H,"center",U.center),we.setValue(H,"modelViewMatrix",U.modelViewMatrix),we.setValue(H,"normalMatrix",U.normalMatrix),we.setValue(H,"modelMatrix",U.matrixWorld),k.uniformsGroups!==void 0){let Fe=k.uniformsGroups;for(let $e=0,Kn=Fe.length;$e<Kn;$e++){let Hc=Fe[$e];Jt.update(Hc,ln),Jt.bind(Hc,ln)}}return ln}function et(v,T){v.ambientLightColor.needsUpdate=T,v.lightProbe.needsUpdate=T,v.sunLights.needsUpdate=T,v.sunLightShadows.needsUpdate=T,v.directionalLights.needsUpdate=T,v.directionalLightShadows.needsUpdate=T,v.pointLights.needsUpdate=T,v.pointLightShadows.needsUpdate=T,v.spotLights.needsUpdate=T,v.spotLightShadows.needsUpdate=T,v.rectAreaLights.needsUpdate=T,v.hemisphereLights.needsUpdate=T}function Ct(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(v,T,z){let k=zt.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),zt.get(v.texture).__webglTexture=T,zt.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,T){let z=zt.get(v);z.__webglFramebuffer=T,z.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(v,T=0,z=0){pt=v,V=T,Y=z;let k=null,U=!1,lt=!1;if(v){let ft=zt.get(v);if(ft.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(H.FRAMEBUFFER,ft.__webglFramebuffer),at.copy(v.viewport),it.copy(v.scissor),_t=v.scissorTest,Rt.viewport(at),Rt.scissor(it),Rt.setScissorTest(_t),rt=-1;return}else if(ft.__webglFramebuffer===void 0)Kt.setupRenderTarget(v);else if(ft.__hasExternalTextures)Kt.rebindTextures(v,zt.get(v.texture).__webglTexture,zt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let te=v.depthTexture;if(ft.__boundDepthTexture!==te){if(te!==null&&zt.has(te)&&(v.width!==te.image.width||v.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(v)}}let bt=v.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(lt=!0);let Nt=zt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Nt[T])?k=Nt[T][z]:k=Nt[T],U=!0):v.samples>0&&Kt.useMultisampledRTT(v)===!1?k=zt.get(v).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[z]:k=Nt,at.copy(v.viewport),it.copy(v.scissor),_t=v.scissorTest}else at.copy(qt).multiplyScalar(wt).floor(),it.copy(Zt).multiplyScalar(wt).floor(),_t=se;if(z!==0&&(k=$),Rt.bindFramebuffer(H.FRAMEBUFFER,k)&&Rt.drawBuffers(v,k),Rt.viewport(at),Rt.scissor(it),Rt.setScissorTest(_t),U){let ft=zt.get(v.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+T,ft.__webglTexture,z)}else if(lt){let ft=T;for(let bt=0;bt<v.textures.length;bt++){let Nt=zt.get(v.textures[bt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+bt,Nt.__webglTexture,z,ft)}}else if(v!==null&&z!==0){let ft=zt.get(v.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ft.__webglTexture,z)}rt=-1};function Lt(v){let T=zt.get(v);return(T.__readFormat!==v.format||T.__readType!==v.type)&&(T.__readFormat=v.format,T.__readType=v.type,T.__formatReadable=he.textureFormatReadable(v.format),T.__typeReadable=he.textureTypeReadable(v.type)),T}this.readRenderTargetPixels=function(v,T,z,k,U,lt,At,ft=0){if(!(v&&v.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=zt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(bt=bt[At],Array.isArray(bt)&&(bt=bt[0])),bt){Rt.bindFramebuffer(H.FRAMEBUFFER,bt);try{let Nt=v.textures[ft],te=Nt.format,Yt=Nt.type;v.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ft);let Gt=Lt(Nt);if(Gt.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=v.width-k&&z>=0&&z<=v.height-U&&H.readPixels(T,z,k,U,Tt.convert(te),Tt.convert(Yt),lt)}finally{let Nt=pt!==null?zt.get(pt).__webglFramebuffer:null;Rt.bindFramebuffer(H.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(v,T,z,k,U,lt,At,ft=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=zt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(bt=bt[At],Array.isArray(bt)&&(bt=bt[0])),bt)if(T>=0&&T<=v.width-k&&z>=0&&z<=v.height-U){Rt.bindFramebuffer(H.FRAMEBUFFER,bt);let Nt=v.textures[ft],te=Nt.format,Yt=Nt.type;v.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ft);let Gt=Lt(Nt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Wt),H.bufferData(H.PIXEL_PACK_BUFFER,lt.byteLength,H.STREAM_READ),H.readPixels(T,z,k,U,Tt.convert(te),Tt.convert(Yt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let ge=pt!==null?zt.get(pt).__webglFramebuffer:null;Rt.bindFramebuffer(H.FRAMEBUFFER,ge);let Me=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ou(H,Me,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Wt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,lt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Wt),H.deleteSync(Me),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,T=null,z=0){let k=Math.pow(2,-z),U=Math.floor(v.image.width*k),lt=Math.floor(v.image.height*k),At=T!==null?T.x:0,ft=T!==null?T.y:0;Kt.setTexture2D(v,0),H.copyTexSubImage2D(H.TEXTURE_2D,z,0,0,At,ft,U,lt),Rt.unbindTexture()},this.copyTextureToTexture=function(v,T,z=null,k=null,U=0,lt=0){let At,ft,bt,Nt,te,Yt,Gt,Wt,ge,Me=v.isCompressedTexture?v.mipmaps[lt]:v.image;if(z!==null)At=z.max.x-z.min.x,ft=z.max.y-z.min.y,bt=z.isBox3?z.max.z-z.min.z:1,Nt=z.min.x,te=z.min.y,Yt=z.isBox3?z.min.z:0;else{let we=Math.pow(2,-U);At=Math.floor(Me.width*we),ft=Math.floor(Me.height*we),v.isDataArrayTexture?bt=Me.depth:v.isData3DTexture?bt=Math.floor(Me.depth*we):bt=1,Nt=0,te=0,Yt=0}k!==null?(Gt=k.x,Wt=k.y,ge=k.z):(Gt=0,Wt=0,ge=0);let Ie=Tt.convert(T.format),Ve=Tt.convert(T.type),$t;T.isData3DTexture?(Kt.setTexture3D(T,0),$t=H.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(Kt.setTexture2DArray(T,0),$t=H.TEXTURE_2D_ARRAY):(Kt.setTexture2D(T,0),$t=H.TEXTURE_2D),Rt.activeTexture(H.TEXTURE0),Rt.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,T.flipY),Rt.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),Rt.pixelStorei(H.UNPACK_ALIGNMENT,T.unpackAlignment);let fn=Rt.getParameter(H.UNPACK_ROW_LENGTH),Ce=Rt.getParameter(H.UNPACK_IMAGE_HEIGHT),Fi=Rt.getParameter(H.UNPACK_SKIP_PIXELS),ln=Rt.getParameter(H.UNPACK_SKIP_ROWS),ca=Rt.getParameter(H.UNPACK_SKIP_IMAGES);Rt.pixelStorei(H.UNPACK_ROW_LENGTH,Me.width),Rt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Me.height),Rt.pixelStorei(H.UNPACK_SKIP_PIXELS,Nt),Rt.pixelStorei(H.UNPACK_SKIP_ROWS,te),Rt.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);let pi=v.isDataArrayTexture||v.isData3DTexture,Oi=T.isDataArrayTexture||T.isData3DTexture;if(v.isDepthTexture){let we=zt.get(v),nn=zt.get(T),Un=zt.get(we.__renderTarget),Fe=zt.get(nn.__renderTarget);Rt.bindFramebuffer(H.READ_FRAMEBUFFER,Un.__webglFramebuffer),Rt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let $e=0;$e<bt;$e++)pi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(v).__webglTexture,U,Yt+$e),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(T).__webglTexture,lt,ge+$e)),H.blitFramebuffer(Nt,te,Nt+At,te+ft,Gt,Wt,Gt+At,Wt+ft,H.DEPTH_BUFFER_BIT,H.NEAREST);Rt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||zt.has(v)){let we=zt.get(v),nn=zt.get(T);Rt.bindFramebuffer(H.READ_FRAMEBUFFER,F),Rt.bindFramebuffer(H.DRAW_FRAMEBUFFER,X);for(let Un=0;Un<bt;Un++)pi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,we.__webglTexture,U,Yt+Un):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,we.__webglTexture,U),Oi?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nn.__webglTexture,lt,ge+Un):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,nn.__webglTexture,lt),U!==0?H.blitFramebuffer(Nt,te,Nt+At,te+ft,Gt,Wt,Gt+At,Wt+ft,H.COLOR_BUFFER_BIT,H.NEAREST):Oi?H.copyTexSubImage3D($t,lt,Gt,Wt,ge+Un,Nt,te,At,ft):H.copyTexSubImage2D($t,lt,Gt,Wt,Nt,te,At,ft);Rt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Oi?v.isDataTexture||v.isData3DTexture?H.texSubImage3D($t,lt,Gt,Wt,ge,At,ft,bt,Ie,Ve,Me.data):T.isCompressedArrayTexture?H.compressedTexSubImage3D($t,lt,Gt,Wt,ge,At,ft,bt,Ie,Me.data):H.texSubImage3D($t,lt,Gt,Wt,ge,At,ft,bt,Ie,Ve,Me):v.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,lt,Gt,Wt,At,ft,Ie,Ve,Me.data):v.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,lt,Gt,Wt,Me.width,Me.height,Ie,Me.data):H.texSubImage2D(H.TEXTURE_2D,lt,Gt,Wt,At,ft,Ie,Ve,Me);Rt.pixelStorei(H.UNPACK_ROW_LENGTH,fn),Rt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ce),Rt.pixelStorei(H.UNPACK_SKIP_PIXELS,Fi),Rt.pixelStorei(H.UNPACK_SKIP_ROWS,ln),Rt.pixelStorei(H.UNPACK_SKIP_IMAGES,ca),lt===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0&&H.generateMipmap($t),Rt.unbindTexture()},this.initRenderTarget=function(v){zt.get(v).__webglFramebuffer===void 0&&Kt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Kt.setTextureCube(v,0):v.isData3DTexture?Kt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Kt.setTexture2DArray(v,0):Kt.setTexture2D(v,0),Rt.unbindTexture()},this.resetState=function(){V=0,Y=0,pt=null,Rt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var $u={type:"change"},zc={type:"start"},Qu={type:"end"},ll=new Si,ju=new pn,S_=Math.cos(70*di.DEG2RAD),Ke=new D,xn=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kc=1e-6,cl=class extends Vr{constructor(t,e=null){super(t,e),this.state=Re.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new en,this._lastTargetPosition=new D,this._quat=new en().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bs,this._sphericalDelta=new Bs,this._scale=1,this._panOffset=new D,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new D,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w_.bind(this),this._onPointerDown=b_.bind(this),this._onPointerUp=T_.bind(this),this._onContextMenu=L_.bind(this),this._onMouseWheel=C_.bind(this),this._onKeyDown=R_.bind(this),this._onTouchStart=P_.bind(this),this._onTouchMove=I_.bind(this),this._onMouseDown=E_.bind(this),this._onMouseMove=A_.bind(this),this._interceptControlDown=D_.bind(this),this._interceptControlUp=N_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Re.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($u),this.update(),this.state=Re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ke.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ll.origin.copy(this.object.position),ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ll.direction))<S_?this.object.lookAt(this.target):(ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),ll.intersectPlane(ju,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kc||this._lastTargetPosition.distanceToSquared(this.target)>kc?(this.dispatchEvent($u),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ke.copy(s).sub(this.target);let r=Ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function b_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function w_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function T_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qu),this.state=Re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function E_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Re.DOLLY;break;case Pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Re.ROTATE}break;case Pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(zc)}function A_(i){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function C_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(i.preventDefault(),this.dispatchEvent(zc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qu))}function R_(i){this.enabled!==!1&&this._handleKeyDown(i)}function P_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ii.ROTATE:if(this.enableRotate===!1){this.state=Re.NONE;break}this._handleTouchStartRotate(i),this.state=Re.TOUCH_ROTATE;break;case Ii.PAN:if(this.enablePan===!1){this.state=Re.NONE;break}this._handleTouchStartPan(i),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case Ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Re.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(zc)}function I_(i){switch(this._trackPointer(i),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Re.NONE}}function L_(i){this.enabled!==!1&&i.preventDefault()}function D_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function N_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var An=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},U_=new Ji(-1,1,1,-1,0,1),Gc=class extends Be{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}},F_=new Gc,Ni=class{constructor(t){this._mesh=new ie(F_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,U_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hl=class extends An{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=En.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ni(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var aa=class extends An{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ul=class extends An{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var dl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new vt);this._width=n.width,this._height=n.height,e=new Ge(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hl(qs),this.copyPass.material.blending=ci,this.timer=new zr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}aa!==void 0&&(a instanceof aa?n=!0:a instanceof ul&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fl=class extends An{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ee}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var td={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ys=class i extends An{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ge(r,a,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ge(r,a,{type:qe,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new Ge(r,a,{type:qe,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}let o=td;this.highPassUniforms=En.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new vt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=En.clone(qs.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader,premultipliedAlpha:!0,blending:ji,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ee,this._oldClearAlpha=1,this._basic=new Ln,this._fsQuad=new Ni(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new vt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ke({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Ys.BlurDirectionX=new vt(1,0);Ys.BlurDirectionY=new vt(0,1);var oa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var pl=class extends An{constructor(){super(),this.isOutputPass=!0,this.uniforms=En.clone(oa.uniforms),this.material=new Ns({name:oa.name,uniforms:this.uniforms,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader}),this._fsQuad=new Ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},_e.getTransfer(this._outputColorSpace)===Ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vc={volta:{id:"volta",brand:"PKM Motors",name:"Volta",trim:"Double Cab 2.8D 4x4",tagline:"Built for laterite, loads and long weekends.",chips:["2.8L turbo-diesel","150 kW \xB7 500 Nm","6-speed auto","Shift-on-the-fly 4WD"],width:1.88,wheelbase:3.08,front:2.52,rear:-2.8,track:1.58,tyreR:.392,tyreW:.27,archR:.49,archY:.42,sill:.47,belt:1.18,roof:1.84,mass:2150,power:150,torque:500,idle:780,redline:4e3,shiftUp:3300,shiftDown:1500,gears:[4.71,2.84,1.79,1.39,1,.78],finalDrive:3.73,top:49,engine:"diesel",horn:[404,508],paints:[{name:"Savanna Olive",hex:"#5d6449",metal:.35},{name:"Laterite Red",hex:"#7a2f22",metal:.45},{name:"Harmattan White",hex:"#e9e7e1",metal:.05},{name:"Graphite",hex:"#2f3236",metal:.6},{name:"Volta Blue",hex:"#1e3d5c",metal:.55},{name:"Kente Gold",hex:"#a9884a",metal:.7}]},regent:{id:"regent",brand:"PKM Motors",name:"Regent",trim:"Platinum V8 AWD",tagline:"Quiet power for state visits and school runs.",chips:["6.2L V8","313 kW \xB7 624 Nm","10-speed auto","Air ride suspension"],width:2.06,wheelbase:3.07,front:2.52,rear:-2.88,track:1.74,tyreR:.405,tyreW:.285,archR:.475,archY:.43,sill:.44,belt:1.25,roof:1.93,mass:2700,power:313,torque:624,idle:620,redline:6e3,shiftUp:5400,shiftDown:2e3,gears:[4.7,2.99,2.15,1.77,1.52,1.28,1,.85,.69,.64],finalDrive:3.23,top:59,engine:"v8",horn:[350,440],paints:[{name:"Obsidian Black",hex:"#0d0e10",metal:.4},{name:"Ridge Silver",hex:"#a7abae",metal:.85},{name:"Pearl White",hex:"#eeece6",metal:.15},{name:"Midnight Navy",hex:"#141e30",metal:.6},{name:"Cocoa Bronze",hex:"#4a3428",metal:.7},{name:"Jubilee Green",hex:"#1d3b2c",metal:.55}]}},ml=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function ed(i,t,e={}){let n=Vc[t],s=!!i.ColorManagement,r=s?1:.06,a=R=>{let G=new i.Color(R);return s||G.convertSRGBToLinear(),G},o=R=>("colorSpace"in R?R.colorSpace=i.SRGBColorSpace:R.encoding=i.sRGBEncoding,R),l=(R,G,J)=>{let Q=document.createElement("canvas");return Q.width=R,Q.height=G,J(Q.getContext("2d"),R,G),Q},c=t==="regent",u=n.width,f=u/2,h=n.belt,p=n.roof,m=n.wheelbase/2,M=new i.MeshPhysicalMaterial({color:a(n.paints[0].hex),metalness:n.paints[0].metal,roughness:.32,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),d={paint:M,black:new i.MeshStandardMaterial({color:a("#121314"),roughness:.55,metalness:.1}),piano:new i.MeshPhysicalMaterial({color:a("#050506"),roughness:.12,metalness:.2,clearcoat:1,clearcoatRoughness:.05}),trim:new i.MeshStandardMaterial({color:a("#1b1c1d"),roughness:.85,metalness:0}),chrome:new i.MeshStandardMaterial({color:a("#dfe3e6"),roughness:.06,metalness:1,envMapIntensity:1.6}),satin:new i.MeshStandardMaterial({color:a("#9ea3a6"),roughness:.32,metalness:1}),glass:new i.MeshPhysicalMaterial({color:a("#05080a"),roughness:.02,metalness:.3,transparent:!0,opacity:.86,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:0}),lens:new i.MeshPhysicalMaterial({color:a("#e8eef2"),roughness:.02,metalness:0,transparent:!0,opacity:.35,clearcoat:1}),head:new i.MeshStandardMaterial({color:a("#f4f7fb"),emissive:a("#ffffff"),emissiveIntensity:.6,roughness:.25,metalness:.4}),drl:new i.MeshStandardMaterial({color:a("#ffffff"),emissive:a("#eef4ff"),emissiveIntensity:2.2,roughness:.3}),tail:new i.MeshStandardMaterial({color:a("#5a0b0b"),emissive:a("#ff1a10"),emissiveIntensity:.55,roughness:.2,metalness:.2}),amber:new i.MeshStandardMaterial({color:a("#6b3d07"),emissive:a("#ff8a00"),emissiveIntensity:0,roughness:.25}),reverse:new i.MeshStandardMaterial({color:a("#bfc4c8"),emissive:a("#ffffff"),emissiveIntensity:0,roughness:.2}),tyre:null,rim:null,interior:new i.MeshStandardMaterial({color:a(c?"#3a2a20":"#232425"),roughness:.78}),leather:new i.MeshStandardMaterial({color:a(c?"#8b6a4f":"#36383a"),roughness:.6}),aperture:new i.MeshStandardMaterial({color:a("#141414"),roughness:.9}),under:new i.MeshStandardMaterial({color:a("#0b0b0b"),roughness:.95}),disc:new i.MeshStandardMaterial({color:a("#6d6f70"),roughness:.45,metalness:.9}),caliper:new i.MeshStandardMaterial({color:a(c?"#141414":"#8f1d18"),roughness:.4,metalness:.3})},g=l(2048,256,(R,G,J)=>{R.fillStyle="#7a7a7a",R.fillRect(0,0,G,J);let Q=72;for(let et=0;et<Q;et++){let Ct=et/Q*G;R.fillStyle="#2a2a2a",R.fillRect(Ct+4,J*.36,G/Q*.42,J*.11),R.fillRect(Ct+G/Q*.45,J*.49,G/Q*.42,J*.11),c||R.fillRect(Ct+2,J*.3,G/Q*.2,J*.38)}}),S=l(2048,256,(R,G,J)=>{R.fillStyle="#191919",R.fillRect(0,0,G,J),R.fillStyle="#2b2b2b",R.font="700 46px Inter, Arial, sans-serif",R.textBaseline="middle";let Q=c?"PKM GRAND TOURING  \xB7  285/45 R22  \xB7  ":"PKM TERRA A/T  \xB7  265/65 R17  \xB7  ";for(let et=0;et<2;et++)R.fillText(Q,et*G/2+40,J*.15);for(let et=0;et<2;et++)R.fillText(Q,et*G/2+40,J*.85)}),w=new i.CanvasTexture(g);w.wrapS=i.RepeatWrapping;let y=o(new i.CanvasTexture(S));y.wrapS=i.RepeatWrapping,d.tyre=new i.MeshStandardMaterial({color:a("#1c1c1c"),roughness:.9,bumpMap:w,bumpScale:2.5,map:y}),d.rim=new i.MeshPhysicalMaterial({color:a(c?"#d9dcdf":"#3a3d40"),metalness:1,roughness:c?.12:.35,clearcoat:.6});let C=o(new i.CanvasTexture(l(256,256,(R,G)=>{let J=G/2,Q=R.createLinearGradient(0,0,G,G);Q.addColorStop(0,"#f3f3f3"),Q.addColorStop(.5,"#9b9b9b"),Q.addColorStop(1,"#e8e8e8"),R.fillStyle=Q,R.beginPath(),R.arc(J,J,J-4,0,7),R.fill(),R.fillStyle="#121212",R.beginPath(),R.arc(J,J,J-22,0,7),R.fill(),R.fillStyle="#d9c7a3",R.font="800 82px Inter, Arial, sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText("PKM",J,J+4)})));d.emblem=new i.MeshStandardMaterial({map:C,metalness:.6,roughness:.25});let E=new i.Group;E.name="PKM "+n.name;let x=new i.Group;x.rotation.y=-Math.PI/2,E.add(x);let b=new i.Group;x.add(b);let B=[],A=(R,G,J=b,Q=!0)=>{let et=new i.Mesh(R,G);return et.castShadow=Q,et.receiveShadow=!0,J.add(et),et},I=(R,G,J,Q,et,Ct,Lt,v=b)=>{let T=A(new i.BoxGeometry(R,G,J),Lt,v);return T.position.set(Q,et,Ct),T},N=(R,G,J,Q,et,Ct=b)=>{let Lt=new i.Shape,v=-R/2,T=-G/2;Q=Math.min(Q,R/2-.001,G/2-.001),Lt.moveTo(v+Q,T),Lt.lineTo(v+R-Q,T),Lt.quadraticCurveTo(v+R,T,v+R,T+Q),Lt.lineTo(v+R,T+G-Q),Lt.quadraticCurveTo(v+R,T+G,v+R-Q,T+G),Lt.lineTo(v+Q,T+G),Lt.quadraticCurveTo(v,T+G,v,T+G-Q),Lt.lineTo(v,T+Q),Lt.quadraticCurveTo(v,T,v+Q,T);let z=Math.min(Q,J/2-.001)*.9,k=new i.ExtrudeGeometry(Lt,{depth:Math.max(.001,J-2*z),bevelEnabled:!0,bevelThickness:z,bevelSize:z,bevelOffset:-z,bevelSegments:3,curveSegments:6});return k.translate(0,0,-(J-2*z)/2),A(k,et,Ct)};function $(R){let G=R.index?R.toNonIndexed():R,J=G.attributes.position,Q=J.count,et=new Float32Array(Q),Ct=new Map,Lt=new Array(Q),v=new i.Vector3,T=new i.Vector3,z=new i.Vector3,k=[];for(let bt=0;bt<Q/3;bt++)v.fromBufferAttribute(J,bt*3),T.fromBufferAttribute(J,bt*3+1),z.fromBufferAttribute(J,bt*3+2),k.push(new i.Vector3().subVectors(z,T).cross(new i.Vector3().subVectors(v,T)));for(let bt=0;bt<Q;bt++){let Nt=Math.round(J.getX(bt)*2e3)+"_"+Math.round(J.getY(bt)*2e3)+"_"+Math.round(J.getZ(bt)*2e3);Lt[bt]=Nt;let te=Ct.get(Nt);te||Ct.set(Nt,te=[]),te.push(bt)}let U=new Float32Array(Q*3),lt=Math.cos(.62),At=new i.Vector3,ft=new i.Vector3;for(let bt=0;bt<Q;bt++){let Nt=k[bt/3|0];ft.copy(Nt).normalize(),At.set(0,0,0);for(let te of Ct.get(Lt[bt])){let Yt=k[te/3|0];ft.dot(z.copy(Yt).normalize())>lt&&At.add(Yt)}At.normalize(),U[bt*3]=At.x,U[bt*3+1]=At.y,U[bt*3+2]=At.z}return G.setAttribute("normal",new i.BufferAttribute(U,3)),G}function F(R){let G=R.attributes.position,J=new Map,Q=[],et=[],Ct=R.index?R.index.array:null,Lt=Ct?Ct.length:G.count;for(let T=0;T<Lt;T++){let z=Ct?Ct[T]:T,k=G.getX(z),U=G.getY(z),lt=G.getZ(z),At=Math.round(k*2e3)+"_"+Math.round(U*2e3)+"_"+Math.round(lt*2e3),ft=J.get(At);ft===void 0&&(ft=et.length/3,et.push(k,U,lt),J.set(At,ft)),Q.push(ft)}let v=new i.BufferGeometry;return v.setAttribute("position",new i.Float32BufferAttribute(et,3)),v.setIndex(Q),v.computeVertexNormals(),v}let X=n.front,V=n.rear;function Y(R,G,J){let Q=1;return Q-=.11*ml(X-.55,X,R)**1.4,Q-=.06*ml(V+.45,V,R)**1.4,J?Q-=.15*Math.max(0,Math.min(1,(G-h)/(p-h))):(Q-=.035*ml(h-.3,h,G),Q-=.03*ml(.7,n.sill,G)),f*Q}function pt(R,G){let J=R.getPoints(G),Q=[];for(let et=0;et<J.length;et++){let Ct=J[et],Lt=J[(et+1)%J.length];Q.push(Ct);let v=Ct.distanceTo(Lt),T=Math.floor(v/.1);for(let z=1;z<T;z++)Q.push(Ct.clone().lerp(Lt,z/T))}return Q.length>1&&Q[0].distanceTo(Q[Q.length-1])<1e-4&&Q.pop(),new i.Shape(Q)}function rt(R,G,J){let Q=Array.from((R.index?R.toNonIndexed():R).attributes.position.array);for(let Ct=0;Ct<J;Ct++){let Lt=[],v=U=>[Q[U*3],Q[U*3+1],Q[U*3+2]],T=(U,lt)=>[(U[0]+lt[0])/2,(U[1]+lt[1])/2,(U[2]+lt[2])/2],z=(U,lt)=>Math.hypot(U[0]-lt[0],U[1]-lt[1],U[2]-lt[2]),k=!1;for(let U=0;U<Q.length/9;U++){let lt=v(U*3),At=v(U*3+1),ft=v(U*3+2),bt=z(lt,At)>G,Nt=z(At,ft)>G,te=z(ft,lt)>G,Yt=(Wt,ge,Me)=>Lt.push(...Wt,...ge,...Me),Gt=bt+Nt+te;if(Gt&&(k=!0),Gt===0)Yt(lt,At,ft);else if(Gt===3){let Wt=T(lt,At),ge=T(At,ft),Me=T(ft,lt);Yt(lt,Wt,Me),Yt(Wt,At,ge),Yt(Me,ge,ft),Yt(Wt,ge,Me)}else if(Gt===1)if(bt){let Wt=T(lt,At);Yt(lt,Wt,ft),Yt(Wt,At,ft)}else if(Nt){let Wt=T(At,ft);Yt(lt,At,Wt),Yt(lt,Wt,ft)}else{let Wt=T(ft,lt);Yt(lt,At,Wt),Yt(Wt,At,ft)}else if(bt)if(Nt){let Wt=T(lt,At),ge=T(At,ft);Yt(lt,Wt,ft),Yt(Wt,ge,ft),Yt(Wt,At,ge)}else{let Wt=T(lt,At),ge=T(ft,lt);Yt(lt,Wt,ge),Yt(Wt,At,ft),Yt(Wt,ft,ge)}else{let Wt=T(At,ft),ge=T(ft,lt);Yt(lt,At,Wt),Yt(lt,Wt,ge),Yt(ge,Wt,ft)}}if(Q=Lt,!k)break}let et=new i.BufferGeometry;return et.setAttribute("position",new i.Float32BufferAttribute(Q,3)),et}function ht(R,G,J,Q=28){let et=J?.05:.075,Ct=pt(R,Q),Lt=new i.ExtrudeGeometry(Ct,{depth:G-2*et,steps:1,bevelEnabled:!0,bevelThickness:et,bevelSize:et*.85,bevelOffset:-et*.85,bevelSegments:5,curveSegments:Q}),v=rt(Lt,.2,6),T=v.attributes.position,z=G/2,k=G/u,U=new Int8Array(T.count);for(let Nt=0;Nt<T.count;Nt++){let te=T.getX(Nt),Yt=T.getY(Nt),Gt=T.getZ(Nt)-(G-2*et)/2;Math.abs(Math.abs(Gt)-z)<1e-4&&(U[Nt]=Math.sign(Gt)),T.setZ(Nt,Gt/z*Y(te,Yt,J)*k)}let lt=$(v),At=lt.attributes.normal,ft=.01,bt=new i.Vector3;for(let Nt=0;Nt<T.count;Nt++)if(U[Nt]){let te=T.getX(Nt),Yt=T.getY(Nt),Gt=(Y(te+ft,Yt,J)-Y(te-ft,Yt,J))/(2*ft)*k,Wt=(Y(te,Yt+ft,J)-Y(te,Yt-ft,J))/(2*ft)*k;bt.set(-Gt*U[Nt],-Wt*U[Nt],1*U[Nt]).normalize(),At.setXYZ(Nt,bt.x,bt.y,bt.z)}return lt}let at=(R,G,J)=>{let Q=n.archR,et=n.archY,Ct=Math.asin(Math.min(1,(n.sill-et)/Q));J>0?R.absarc(G,et,Q,Math.PI-Ct,Ct,!0):R.absarc(G,et,Q,Ct,Math.PI-Ct,!1)},it=(R,G,J,Q,et,Ct,Lt)=>{let v=new i.Shape,T=n.sill;return et?v.moveTo(R+.08,T-.02):v.moveTo(R,T),Lt&&(v.lineTo(-m-n.archR-.01,T),at(v,-m,1)),Ct&&(v.lineTo(m-n.archR-.01,T),at(v,m,1)),Q?(v.lineTo(G-.1,T-.04),v.quadraticCurveTo(G+.005,T-.02,G+.01,T+.14),J.front(v)):(v.lineTo(G,T),v.lineTo(G,J.h1)),J.top(v),et?(v.lineTo(R+.005,J.h0-.06),v.quadraticCurveTo(R-.01,(J.h0+T)/2,R+.01,T+.12),v.quadraticCurveTo(R,T-.02,R+.08,T-.02)):v.lineTo(R,T),v},_t=c?1.16:1.06,q=c?.92:.96,gt={front:R=>{R.lineTo(X+.02,c?.96:.86),R.quadraticCurveTo(X+.02,_t+.02,X-.08,_t)}},mt;if(c){mt=V;let R=new i.Shape;R.moveTo(V+.08,n.sill-.02),R.lineTo(-m-n.archR-.01,n.sill),at(R,-m,1),R.lineTo(m-n.archR-.01,n.sill),at(R,m,1),R.lineTo(X-.1,n.sill-.04),R.quadraticCurveTo(X+.005,n.sill-.02,X+.01,n.sill+.14),gt.front(R),R.lineTo(q,h),R.lineTo(V+.04,h-.01),R.quadraticCurveTo(V-.01,h-.03,V-.005,h-.12),R.lineTo(V-.01,n.sill+.12),R.quadraticCurveTo(V,n.sill-.02,V+.08,n.sill-.02),A(ht(R,u,!1),M)}else{mt=-1.32,gt.h0=h,gt.h1=h,gt.top=Lt=>{Lt.quadraticCurveTo(q+.6,h+.03,q,h),Lt.lineTo(mt,h)};let R=new i.Shape;R.moveTo(mt,n.sill),R.lineTo(m-n.archR-.01,n.sill),at(R,m,1),R.lineTo(X-.1,n.sill-.04),R.quadraticCurveTo(X+.005,n.sill-.02,X+.01,n.sill+.14),gt.front(R),R.lineTo(q,h),R.lineTo(mt,h),R.lineTo(mt,n.sill),A(ht(R,u,!1),M);let G=.94,J=V,Q=mt-.03,et=new i.Shape;et.moveTo(J+.06,n.sill),et.lineTo(-m-n.archR-.01,n.sill),at(et,-m,1),et.lineTo(Q,n.sill),et.lineTo(Q,G),et.lineTo(J+.02,G),et.quadraticCurveTo(J,G,J,G-.05),et.lineTo(J,n.sill+.06),et.quadraticCurveTo(J,n.sill,J+.06,n.sill),A(ht(et,u,!1),M);for(let Lt of[-1,1]){let v=new i.Shape;v.moveTo(J+.03,G-.02),v.lineTo(Q,G-.02),v.lineTo(Q,h),v.lineTo(J+.03,h-.01);let T=new i.ExtrudeGeometry(v,{depth:.05,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelOffset:-.015,bevelSegments:2}),z=A(T,M);z.position.z=Lt>0?Y(-2,1)-.065:-Y(-2,1)+.015,I(Q-J-.05,.035,.09,(J+Q)/2,h+.01,Lt*(Y(-2,1)-.04),d.black)}I(.06,h-G,u-.16,Q-.02,(h+G)/2,0,M),I(Q-J-.1,.012,u-.2,(J+Q)/2,G+.006,0,d.trim);for(let Lt=0;Lt<6;Lt++)I(Q-J-.12,.02,.05,(J+Q)/2,G+.02,-.65+Lt*.26,d.trim);for(let Lt of[-1,1])A(new i.CylinderGeometry(.035,.035,.42,12),d.black).position.set(Q-.12,h+.2,Lt*(f-.14));let Ct=A(new i.CylinderGeometry(.035,.035,u-.28,12),d.black);Ct.rotation.x=Math.PI/2,Ct.position.set(Q-.12,h+.41,0);for(let Lt of[m,-m])for(let v of[-1,1]){let T=new i.Shape,z=n.archR+.005,k=n.archR+.075;T.absarc(0,0,k,Math.PI+.12,-.12,!0),T.absarc(0,0,z,-.12,Math.PI+.12,!1);let U=new i.ExtrudeGeometry(T,{depth:.05,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelOffset:-.012,bevelSegments:2,curveSegments:24});A(U,d.trim).position.set(Lt,n.archY,v>0?Y(Lt,.8)-.03:-Y(Lt,.8)-.03)}}let Ut=new i.Shape,wt=c?.06:.16,Ot=c?V+.2:mt+.12,ce=c?V+.04:mt+.02;Ut.moveTo(ce,h-.02),Ut.lineTo(q-.02,h-.02),Ut.quadraticCurveTo((q+wt)/2+.05,(h+p)/2-.02,wt,p-.04),Ut.quadraticCurveTo(wt-.18,p+.005,wt-.4,p),Ut.lineTo(Ot+.25,p-.005),Ut.quadraticCurveTo(Ot,p-.01,Ot-(c?.1:.06),p-.08),Ut.lineTo(ce,h-.02);let qt=u-.06;A(ht(Ut,qt,!0,24),d.glass);let Zt=new i.Shape;Zt.moveTo(wt-.05,p-.05),Zt.quadraticCurveTo(wt-.18,p+.012,wt-.4,p+.008),Zt.lineTo(Ot+.25,p+.003),Zt.quadraticCurveTo(Ot+.005,p-.004,Ot-(c?.09:.05),p-.08),Zt.lineTo(Ot-(c?.06:.02),p-.1),Zt.lineTo(wt-.05,p-.1),A(ht(Zt,qt+.012,!0,16),M);let se=(R,G)=>Y(R,G,!0)*(qt/u)+.004,ct=(R,G,J,Q,et,Ct,Lt)=>{let v=new i.Vector3(R,G,Lt*se(R,G)),T=new i.Vector3(J,Q,Lt*se(J,Q)),z=v.distanceTo(T),k=A(new i.BoxGeometry(z,et,.012),Ct);k.position.copy(v).add(T).multiplyScalar(.5),k.quaternion.setFromUnitVectors(new i.Vector3(1,0,0),T.clone().sub(v).normalize());let U=new i.Vector3(0,0,Lt);return k.rotation.x+=Lt*-.14*0,k},dt=c?[.98,-.25,-1.5]:[.98,-.2,mt];for(let R of[-1,1]){ct(q-.03,h+.02,wt-.03,p-.06,.07,M,R),ct(dt[1]+.02,h+.02,dt[1]-.04,p-.06,.09,d.piano,R),c?(ct(dt[2],h+.02,dt[2]-.05,p-.06,.12,d.piano,R),ct(V+.3,h+.02,Ot+.05,p-.06,.22,M,R)):ct(mt+.07,h+.02,Ot-.02,p-.07,.12,M,R);let G=I(q-ce-.06,.03,.02,(q+ce)/2,h+.008,R*(Y(0,h)-.01),c?d.chrome:d.black);G.position.z=R*(se(0,h+.01)+.012),c&&ct(wt-.45,p-.085,V+.45,p-.095,.022,d.chrome,R)}for(let R of[-.45,.15]){let G=I(.02,.012,.62,q+.02,h+.03,R,d.black);G.rotation.y=.18}let yt={};function Ft(R,G,J,Q,et){let Ct=new i.Group,Lt=Q*(Y((G+J)/2,.85)+.002);Ct.position.set(et?J:G,0,Lt),b.add(Ct);let v=n.sill+.04,T=h-.03,z=new i.Shape,k=et?-(J-G):0,U=et?0:J-G,lt=et?J:G,At=Wt=>{let ge=Wt+lt,Me=v;for(let Ie of[m,-m]){let Ve=ge-Ie;Math.abs(Ve)<n.archR+.05&&(Me=Math.max(Me,n.archY+Math.sqrt(Math.max(0,(n.archR+.05)**2-Ve*Ve))+.015))}return Math.min(Me,T-.15)};z.moveTo(k+.01,At(k+.01));for(let Wt=1;Wt<=24;Wt++){let ge=k+.01+(U-k-.02)*Wt/24;z.lineTo(ge,At(ge))}z.lineTo(U-.005,T),z.lineTo(k+.005,T),z.lineTo(k+.01,At(k+.01));let ft=new i.ExtrudeGeometry(z,{depth:.022,bevelEnabled:!0,bevelThickness:.008,bevelSize:.01,bevelOffset:-.01,bevelSegments:2});ft.translate(0,0,Q>0?-.012:-.01);let bt=A(ft,M,Ct);A(new i.BoxGeometry(J-G-.06,T-v-.06,.04),d.interior,Ct).position.set((k+U)/2,(v+T)/2,-Q*.03);let te=et?k+.22:U-.22;A(new i.BoxGeometry(.2,.035,.03),c?d.chrome:d.black,Ct).position.set(te,T-.13,Q*.022);let Gt=A(new i.PlaneGeometry(J-G-.08,T-v-.04),d.aperture);return Gt.position.set((G+J)/2,(v+T)/2,Lt-Q*.006),Gt.rotation.y=Q>0?0:Math.PI,Ct.userData={axis:"y",open:0,target:0,max:Q*(et?-1.1:1.1)*-1},bt.userData.panel=R,B.push(bt),yt[R]=Ct,Ct}Ft("frontLeft",dt[1]+.01,dt[0],-1,!0),Ft("frontRight",dt[1]+.01,dt[0],1,!0),Ft("rearLeft",dt[2]+.02,dt[1]-.01,-1,!0),Ft("rearRight",dt[2]+.02,dt[1]-.01,1,!0);for(let R of["frontLeft","frontRight","rearLeft","rearRight"]){let G=yt[R],J=R.endsWith("Left")?-1:1;G.userData.max=J*1.15,G.userData.sign=1}{let R=new i.Group;R.position.set(q-.02,h+.004,0),b.add(R);let G=X-.12-q,J=Math.atan2(_t-h,G),Q=new i.Shape,et=Y(q+G/2,h)-.06;Q.moveTo(0,-et),Q.lineTo(G,-et+.07),Q.quadraticCurveTo(G+.04,0,G,et-.07),Q.lineTo(0,et),Q.lineTo(0,-et);let Ct=new i.ExtrudeGeometry(Q,{depth:.02,bevelEnabled:!0,bevelThickness:.01,bevelSize:.02,bevelOffset:-.02,bevelSegments:3});Ct.rotateX(Math.PI/2),Ct.translate(0,.02,0);let Lt=A(Ct,M,R);Lt.rotation.z=J;let v=N(G*.6,.02,c?.9:.75,.02,M,R);v.position.set(G*.45,.025+Math.sin(J)*G*.45,0),v.rotation.z=J,R.userData={axis:"z",open:0,target:0,max:.9},Lt.userData.panel="hood",B.push(Lt,v),yt.hood=R;let T=I(G-.2,.2,u-.5,q+G/2,Math.min(h,_t)-.16,0,d.under);N(.6,.18,.7,.04,d.satin).position.set(q+G*.55,h-.16,0),N(.48,.05,.56,.03,d.piano).position.set(q+G*.55,h-.07,0)}if(c){let R=new i.Group;R.position.set(Ot-.05,p-.07,0),b.add(R);let G=p-.07-.58,J=N(.07,G,u-.16,.04,M,R);J.position.set(-.13,-G/2,0),J.rotation.z=-.06;let Q=N(.02,G*.36,u-.46,.04,d.glass,R);Q.position.set(-.17,-G*.25,0),Q.rotation.z=-.06;let et=It("REGENT",.7,.09);et.position.set(-.175,-G*.62,0),et.rotation.y=-Math.PI/2,R.add(et);let Ct=A(new i.CircleGeometry(.065,32),d.emblem,R);Ct.position.set(-.176,-G*.52,0),Ct.rotation.y=-Math.PI/2,R.userData={axis:"z",open:0,target:0,max:-1.2},J.userData.panel="tailgate",B.push(J),yt.tailgate=R}else{let R=new i.Group;R.position.set(V+.02,.96,0),b.add(R);let G=N(.06,h-.96,u-.08,.02,M,R);G.position.set(0,(h-.96)/2,0);let J=I(.03,.04,.24,-.03,h-.96-.08,0,d.black,R),Q=It("VOLTA",.6,.09);Q.position.set(-.032,.11,0),Q.rotation.y=-Math.PI/2,R.add(Q),R.userData={axis:"z",open:0,target:0,max:Math.PI/2},G.userData.panel="tailgate",B.push(G),yt.tailgate=R}function It(R,G,J){let Q=o(new i.CanvasTexture(l(512,80,(et,Ct,Lt)=>{et.clearRect(0,0,Ct,Lt),et.fillStyle="#ffffff",et.font="700 58px Inter, Arial, sans-serif",et.textAlign="center",et.textBaseline="middle","letterSpacing"in et&&(et.letterSpacing="22px"),et.fillText(R,Ct/2,Lt/2+2)})));return new i.Mesh(new i.PlaneGeometry(G,J),new i.MeshStandardMaterial({map:Q,transparent:!0,metalness:1,roughness:.15,color:a("#e8e8e8")}))}let Vt=new i.Group;Vt.position.set(X+.012,0,0),b.add(Vt);let Bt=c?.62:.58,jt=_t-.05;if(c){let R=new i.CanvasTexture(l(512,256,(T,z,k)=>{T.fillStyle="#050505",T.fillRect(0,0,z,k),T.strokeStyle="#ffffff",T.lineWidth=5;for(let U=-k;U<z+k;U+=26)T.beginPath(),T.moveTo(U,0),T.lineTo(U+k,k),T.stroke(),T.beginPath(),T.moveTo(U,k),T.lineTo(U+k,0),T.stroke()})),G=new i.MeshStandardMaterial({color:a("#9c9fa2"),metalnessMap:R,metalness:1,roughness:.18,map:o(R)}),J=1.25,Q=jt-Bt-.05,et=A(new i.PlaneGeometry(J,Q),G,Vt);et.rotation.y=Math.PI/2,et.position.set(.004,(Bt+jt)/2,0);for(let[T,z,k,U]of[[J+.06,.035,jt-.02,0],[J+.06,.035,Bt+.02,0]])I(.03,z,T,.01,k,U,d.chrome,Vt);for(let T of[-J/2-.015,J/2+.015])I(.03,Q+.06,.035,.01,(Bt+jt)/2,T,d.chrome,Vt);let Ct=A(new i.CircleGeometry(.075,40),d.emblem,Vt);Ct.rotation.y=Math.PI/2,Ct.position.set(.03,(Bt+jt)/2+.03,0);for(let T of[-1,1]){let z=I(.03,.42,.045,-.005,jt-.2,T*(f-.14),d.drl,Vt);N(.05,.1,.32,.03,d.piano,Vt).position.set(-.01,jt-.06,T*(f-.3));for(let U=0;U<3;U++){let lt=A(new i.CylinderGeometry(.03,.03,.02,20),d.head,Vt);lt.rotation.z=Math.PI/2,lt.position.set(.02,jt-.06,T*(f-.4+U*.09))}I(.03,.18,.03,-.004,jt-.4,T*(f-.14),d.amber,Vt).userData.ind=T}N(.12,.26,u-.12,.06,M,Vt).position.set(-.04,.5,0),I(.02,.025,u-.5,.025,.47,0,d.chrome,Vt),N(.04,.1,1.2,.03,d.black,Vt).position.set(0,.43,0)}else{N(.06,jt-Bt,1.12,.05,d.piano,Vt).position.set(0,(Bt+jt)/2,0);for(let et=0;et<4;et++)I(.025,.035,1,.025,Bt+.08+et*.1,0,et===1?d.chrome:d.black,Vt);let G=A(new i.CircleGeometry(.07,40),d.emblem,Vt);G.rotation.y=Math.PI/2,G.position.set(.045,Bt+.21,0);for(let et of[-1,1]){let Ct=N(.05,.13,.4,.04,d.piano,Vt);Ct.position.set(-.02,jt-.07,et*(f-.29)),Ct.rotation.y=et*.18;let Lt=I(.02,.022,.38,.012,jt-.015,et*(f-.3),d.drl,Vt);Lt.rotation.y=et*.18;for(let T=0;T<2;T++){let z=A(new i.CylinderGeometry(.034,.034,.02,20),d.head,Vt);z.rotation.z=Math.PI/2,z.position.set(.012,jt-.08,et*(f-.36+T*.12))}I(.02,.03,.12,0,jt-.15,et*(f-.2),d.amber,Vt).userData.ind=et;let v=A(new i.CylinderGeometry(.04,.04,.03,20),d.head,Vt);v.rotation.z=Math.PI/2,v.position.set(-.03,.47,et*(f-.3))}N(.14,.24,u-.08,.05,d.trim,Vt).position.set(-.04,.48,0);let Q=N(.08,.1,.9,.04,d.satin,Vt);Q.position.set(-.02,.36,0),Q.rotation.z=-.4;for(let et of[-.4,.4]){let Ct=A(new i.TorusGeometry(.035,.012,8,16),d.caliper,Vt);Ct.position.set(.04,.42,et),Ct.rotation.y=Math.PI/2}}let re=o(new i.CanvasTexture(l(1040,224,(R,G,J)=>{R.fillStyle="#fbfbf7",R.beginPath(),R.moveTo(18,0),R.arcTo(G,0,G,J,18),R.arcTo(G,J,0,J,18),R.arcTo(0,J,0,0,18),R.arcTo(0,0,G,0,18),R.fill();let et=R.createLinearGradient(0,0,0,J);et.addColorStop(0,"rgba(255,255,255,.6)"),et.addColorStop(1,"rgba(0,0,0,.06)"),R.fillStyle=et,R.fillRect(0,0,G,J),R.strokeStyle="#111",R.lineWidth=10,R.strokeRect(14,14,G-28,J-28),R.fillStyle="#ce1126",R.fillRect(30,30,92,54),R.fillStyle="#fcd116",R.fillRect(30,84,92,54),R.fillStyle="#006b3f",R.fillRect(30,138,92,54),R.fillStyle="#000",R.beginPath();for(let Ct=0;Ct<10;Ct++){let Lt=-Math.PI/2+Ct*Math.PI/5,v=Ct%2?7:17;R.lineTo(76+Math.cos(Lt)*v,111+Math.sin(Lt)*v)}R.fill(),R.fillStyle="#111",R.font="800 30px Inter, Arial, sans-serif",R.textAlign="center",R.fillText("GH",76,208),R.font="800 138px Inter, Arial, sans-serif",R.textBaseline="middle","letterSpacing"in R&&(R.letterSpacing="4px"),R.fillStyle="rgba(0,0,0,.18)",R.fillText("BU 0858-26",G/2+72,J/2+10),R.fillStyle="#111",R.fillText("BU 0858-26",G/2+70,J/2+7)}))),ne=new i.MeshStandardMaterial({map:re,roughness:.4}),H=A(new i.PlaneGeometry(.52,.112),ne,Vt,!1);H.rotation.y=Math.PI/2,H.position.set(.075,.5,0);let Xt=new i.Group;Xt.position.set(V-.012,0,0),b.add(Xt);let ae=[],he=[];if(c){for(let G of[-1,1]){let J=I(.04,.62,.08,0,h+.05,G*(f-.07),d.tail,Xt);ae.push(J);let Q=I(.04,.05,.28,0,h+.33,G*(f-.2),d.tail,Xt);ae.push(Q),I(.042,.12,.05,.003,h-.12,G*(f-.08),d.amber,Xt).userData.ind=G,I(.042,.08,.05,.003,h-.22,G*(f-.08),d.reverse,Xt);let et=A(new i.CylinderGeometry(.045,.045,.14,18,1,!0),d.chrome,Xt);et.rotation.z=Math.PI/2,et.position.set(0,.4,G*.55)}N(.14,.24,u-.1,.06,M,Xt).position.set(.04,.52,0),I(.02,.025,u-.6,-.03,.6,0,d.chrome,Xt)}else{for(let et of[-1,1]){let Ct=N(.05,.42,.11,.03,d.tail,Xt);Ct.position.set(0,h-.2,et*(f-.06)),ae.push(Ct),I(.052,.08,.08,.004,h-.34,et*(f-.06),d.amber,Xt).userData.ind=et,I(.052,.06,.08,.004,h-.07,et*(f-.06),d.reverse,Xt)}N(.16,.18,u-.1,.04,d.satin,Xt).position.set(.03,.52,0);let G=I(.1,.03,.4,.02,.62,0,d.black,Xt),J=A(new i.CylinderGeometry(.035,.035,.2,14,1,!0),d.satin,Xt);J.rotation.z=Math.PI/2,J.position.set(.05,.36,.55);let Q=I(.03,.03,.42,mt+.05-(V-.012),p-.02,0,d.tail,Xt);he.push(Q)}let Rt=A(new i.PlaneGeometry(.52,.112),ne,Xt,!1);Rt.rotation.y=-Math.PI/2,Rt.position.set(c?-.04:-.06,c?.72:.7,0);for(let R of[-1,1]){let G=new i.Group;G.position.set(q-.2,h+.1,R*(Y(q,h)+.04)),b.add(G);let J=I(.06,.04,.08,0,-.03,0,d.black,G);N(.12,.2,.26,.05,c?d.chrome:M,G).position.set(-.01,.04,R*.15);let et=A(new i.PlaneGeometry(.22,.16),d.chrome,G);et.rotation.y=-Math.PI/2,et.position.set(-.075,.04,R*.15),I(.04,.015,.12,.03,-.045,R*.2,d.amber,G).userData.ind=R,G.userData.side=R,yt["mirror"+(R<0?"Left":"Right")]=G;let Ct=c?N(dt[0]-dt[2]+.05,.04,.17,.02,d.piano):A(new i.CylinderGeometry(.03,.03,dt[0]-dt[2],14),d.black);if(c||(Ct.rotation.z=Math.PI/2),Ct.position.set((dt[0]+dt[2])/2,n.sill-.08,R*(f-.07)),c){let Lt=A(new i.CylinderGeometry(.018,.018,2.3,10),d.chrome);Lt.rotation.z=Math.PI/2,Lt.position.set(-1,p+.05,R*(f-.22));for(let v of[-2.1,.1])I(.06,.05,.04,v,p+.025,R*(f-.22),d.black)}}if(N(.18,.06,.06,.025,d.piano).position.set(Ot+.25,p+.03,0),I(X-V-.6,.12,u-.5,(X+V)/2,n.sill-.02,0,d.under),!c){let R=A(new i.CylinderGeometry(.05,.05,n.track-.2,12),d.under);R.rotation.x=Math.PI/2,R.position.set(-m,n.tyreR,0),A(new i.SphereGeometry(.14,16,12),d.under).position.set(-m,n.tyreR,0)}let zt=new i.Group;b.add(zt);let Kt=q-.28;N(.42,.22,u-.26,.08,d.interior,zt).position.set(Kt,h+.02,0),N(.3,.05,u-.3,.02,d.trim,zt).position.set(Kt+.05,h+.14,0);let L=document.createElement("canvas");L.width=512,L.height=192;let j=o(new i.CanvasTexture(L)),W=new i.MeshStandardMaterial({map:j,emissive:a("#ffffff"),emissiveMap:j,emissiveIntensity:.9,roughness:.3}),ot=A(new i.PlaneGeometry(.34,.13),W,zt,!1);ot.position.set(Kt-.17,h+.12,-.38),ot.rotation.y=-Math.PI/2,ot.rotation.x=-.15;let ut=A(new i.PlaneGeometry(.3,.17),W.clone(),zt,!1);ut.position.set(Kt-.2,h+.12,.05),ut.rotation.y=-Math.PI/2,ut.material.map=ut.material.emissiveMap=o(new i.CanvasTexture(l(512,290,(R,G,J)=>{let Q=R.createLinearGradient(0,0,G,J);Q.addColorStop(0,"#0f1412"),Q.addColorStop(1,"#1b2420"),R.fillStyle=Q,R.fillRect(0,0,G,J),R.strokeStyle="#93AE7C",R.lineWidth=6,R.beginPath(),R.moveTo(30,230),R.bezierCurveTo(160,210,200,90,330,110),R.lineTo(480,60),R.stroke(),R.fillStyle="#BBA783",R.beginPath(),R.arc(330,110,10,0,7),R.fill(),R.fillStyle="#F2F0EA",R.font="600 28px Inter, Arial",R.fillText("Jubilee House \u2192 Temple",30,50),R.fillStyle="#B3ACA1",R.font="400 22px Inter, Arial",R.fillText("Liberation Road \xB7 4.2 km",30,84)})));let Z=new i.Group;Z.position.set(Kt-.3,h+.06,-.38),Z.rotation.z=-.42,zt.add(Z);let tt=new i.Group;Z.add(tt);let Mt=A(new i.TorusGeometry(.185,.018,12,40),d.leather,tt);Mt.rotation.y=Math.PI/2;let O=N(.05,.1,.12,.03,d.interior,tt);for(let R of[0,2.1,-2.1]){let G=I(.02,.17,.035,0,0,0,d.satin,tt);G.position.set(0,Math.cos(R)*-.09,Math.sin(R)*.09),G.rotation.x=R}let st=A(new i.CircleGeometry(.032,24),d.emblem,tt);st.position.x=-.03,st.rotation.y=-Math.PI/2;let nt=A(new i.CylinderGeometry(.03,.04,.3,10),d.trim,Z);nt.rotation.z=Math.PI/2,nt.position.x=.15;let xt=(R,G,J)=>{let Q=new i.Group;Q.position.set(R,0,G),zt.add(Q),N(.5,.12,J,.05,d.leather,Q).position.set(0,n.sill+.25,0);let Ct=N(.12,.6,J,.05,d.leather,Q);if(Ct.position.set(-.25,n.sill+.55,0),Ct.rotation.z=.2,J<.7){let Lt=N(.08,.16,.26,.04,d.leather,Q);Lt.position.set(-.32,n.sill+.92,0),Lt.rotation.z=.2}return Q},Tt=dt[1]+.48;xt(Tt,-.38,.52),xt(Tt,.38,.52),c?(xt(-.55,-.4,.54),xt(-.55,.4,.54),xt(-1.75,0,1.5)):xt(dt[1]-.45,0,1.45),N(.9,.18,.22,.05,d.interior,zt).position.set(Tt+.1,n.sill+.3,0),N(.07,.08,.05,.02,d.chrome,zt).position.set(Tt+.35,n.sill+.42,0);let le=I(q-mt-.2,.02,u-.25,(q+mt)/2,n.sill+.05,0,d.trim,zt),Et=I(q-ce-.7,.02,qt-.35,(wt+Ot)/2,p-.12,0,d.leather,zt);Et.material=new i.MeshStandardMaterial({color:a(c?"#cdbfae":"#3c3d3e"),roughness:.9});let Qt=new i.PointLight(16771532,0,2.6,1.5);Qt.position.set(Tt-.2,p-.25,0),zt.add(Qt);let de=I(.01,.006,u-.45,Kt-.2,h-.02,0,new i.MeshStandardMaterial({color:a("#BBA783"),emissive:a("#BBA783"),emissiveIntensity:0}),zt),kt=[],be=(()=>{let R=n.tyreR,G=n.tyreW,J=R*(c?.72:.62),Q=[],et=18;Q.push(new i.Vector2(J,-G/2+.02));for(let v=0;v<=et;v++){let T=v/et,z=J+(R-.02-J)*T,k=Math.sin(T*Math.PI)*.018+.01*T;Q.push(new i.Vector2(z,-G/2-k))}Q.push(new i.Vector2(R-.005,-G/2+.01),new i.Vector2(R,-G/2+.03),new i.Vector2(R,G/2-.03),new i.Vector2(R-.005,G/2-.01));for(let v=et;v>=0;v--){let T=v/et,z=J+(R-.02-J)*T,k=Math.sin(T*Math.PI)*.018+.01*T;Q.push(new i.Vector2(z,G/2+k))}Q.push(new i.Vector2(J,G/2-.02));let Ct=new i.LatheGeometry(Q,64),Lt=Ct.attributes.uv;for(let v=0;v<Lt.count;v++)Lt.setX(v,Lt.getX(v)*1);return Ct.rotateX(Math.PI/2),Ct})(),Ee=n.tyreR*(c?.72:.62);function K(R){let G=new i.Group,J=A(be,d.tyre,G),Q=A(new i.CylinderGeometry(Ee,Ee,n.tyreW-.03,40,1,!0),d.rim,G);Q.rotation.x=Math.PI/2;let et=A(new i.TorusGeometry(Ee-.004,.008,8,48),d.rim,G);et.position.z=R*(n.tyreW/2-.02);let Ct=A(new i.CylinderGeometry(Ee-.01,Ee*.5,.05,40,1,!0),d.under,G);Ct.rotation.x=Math.PI/2,Ct.position.z=R*(n.tyreW/2-.06);let Lt=c?10:6;for(let z=0;z<Lt;z++){let k=z/Lt*Math.PI*2,U=new i.Mesh(new i.BoxGeometry(c?.028:.06,Ee-.06,.035),d.rim);if(U.geometry.translate(0,(Ee-.06)/2+.05,0),U.rotation.z=k,U.position.z=R*(n.tyreW/2-.035),U.castShadow=!0,G.add(U),c&&z%2===0){let lt=U.clone();lt.rotation.z=k+.18,G.add(lt)}}let v=A(new i.CylinderGeometry(.065,.07,.03,32),d.rim,G);v.rotation.x=Math.PI/2,v.position.z=R*(n.tyreW/2-.025);let T=A(new i.CircleGeometry(.05,32),d.emblem,G);T.position.z=R*(n.tyreW/2-.008),R<0&&(T.rotation.y=Math.PI);for(let z=0;z<6;z++){let k=z/6*Math.PI*2,U=A(new i.CylinderGeometry(.011,.011,.02,6),d.chrome,G);U.rotation.x=Math.PI/2,U.position.set(Math.cos(k)*.085,Math.sin(k)*.085,R*(n.tyreW/2-.035))}return G}for(let[R,G,J]of[[m,-1,!0],[m,1,!0],[-m,-1,!1],[-m,1,!1]]){let Q=new i.Group;Q.position.set(R,n.tyreR,G*n.track/2),x.add(Q);let et=K(G);Q.add(et);let Ct=A(new i.CylinderGeometry(Ee-.04,Ee-.04,.03,32),d.disc,Q);Ct.rotation.x=Math.PI/2,Ct.position.z=G*.01;let Lt=N(.12,.08,.06,.02,d.caliper,Q);Lt.position.set(J?-.02:.02,Ee-.07,G*.02),Lt.rotation.z=J?.6:-.6,kt.push({pivot:Q,spin:et,front:J,side:G,baseY:n.tyreR,x:R,z:G*n.track/2})}let St=[];if(e.lights!==!1)for(let R of[-1,1]){let G=new i.SpotLight(16774890,0,70,.48,.5,1.6);G.position.set(X-.05,jt-.06,R*(f-.3)),G.target.position.set(X+12,0,R*1.2),b.add(G,G.target),St.push(G)}let Dt=e.lights!==!1?new i.PointLight(16719888,0,4,2):null;Dt&&(Dt.position.set(V-.4,.8,0),b.add(Dt));let ve={"-1":d.amber.clone(),1:d.amber.clone()};b.traverse(R=>{R.isMesh&&R.userData.ind&&(R.material=ve[R.userData.ind])});let Le=d.tail.clone();for(let R of he)R.material=Le;function on(R){for(let J of[...R.children])!J.isMesh&&J.children.length&&on(J);let G=new Map;for(let J of R.children){if(!J.isMesh||J.userData.panel||Array.isArray(J.material)||J.material.transparent)continue;let Q=J.material.uuid+(J.castShadow?"s":"n");G.has(Q)||G.set(Q,[]),G.get(Q).push(J)}for(let J of G.values()){if(J.length<2)continue;let Q=J.map(U=>{U.updateMatrix();let lt=U.geometry.index?U.geometry.toNonIndexed():U.geometry.clone();return lt.applyMatrix4(U.matrix),lt.attributes.normal||lt.computeVertexNormals(),lt}),et=Q.reduce((U,lt)=>U+lt.attributes.position.count,0),Ct=new Float32Array(et*3),Lt=new Float32Array(et*3),v=new Float32Array(et*2),T=0;for(let U of Q){let lt=U.attributes.position.count;Ct.set(U.attributes.position.array,T*3),Lt.set(U.attributes.normal.array,T*3),U.attributes.uv&&v.set(U.attributes.uv.array,T*2),T+=lt,U.dispose()}let z=new i.BufferGeometry;z.setAttribute("position",new i.BufferAttribute(Ct,3)),z.setAttribute("normal",new i.BufferAttribute(Lt,3)),z.setAttribute("uv",new i.BufferAttribute(v,2));let k=new i.Mesh(z,J[0].material);k.castShadow=J[0].castShadow,k.receiveShadow=!0;for(let U of J)R.remove(U);R.add(k)}}on(x);let Pe={head:!1,brake:!1,reverse:!1,left:!1,right:!1,hazard:!1,interiorGlow:0};function Je(R,G){M.color.copy(a(R)),M.metalness=G??M.metalness,M.roughness=G>.5?.28:.35}function ze(R,G){let J=yt[R];return J?R.startsWith("mirror")?(J.userData.target=G??!J.userData.target?1:0,!!J.userData.target):(J.userData.target=G??J.userData.target===0?1:0,J.userData.target===1):!1}for(let R of["mirrorLeft","mirrorRight"])yt[R].userData={side:yt[R].userData.side,open:0,target:0};let fi=0;function ls(R,G={}){for(let[v,T]of Object.entries(yt)){let z=T.userData;if(z.open===void 0)continue;let k=v==="hood"||v==="tailgate"?2.2:3.2;if(z.open+=(z.target-z.open)*Math.min(1,R*k),v.startsWith("mirror"))T.rotation.y=z.side*1.1*z.open;else if(z.axis==="y"){let U=v.endsWith("Left")?1:-1;T.rotation.y=U*1.1*$s(z.open)}else T.rotation.z=z.max*$s(z.open)}let J=G.night?1:0;d.head.emissiveIntensity=Pe.head?3:.4,d.drl.emissiveIntensity=G.engine===!1?.15:3.2;for(let v of St)v.intensity=Pe.head?(G.lightScale??1)*60*r:0;let Q=Pe.brake;d.tail.emissiveIntensity=Q?5:Pe.head||G.engine?1.2:.15,Le.emissiveIntensity=Q?6:.05,Dt&&(Dt.intensity=Q?2.5*r*10:0),d.reverse.emissiveIntensity=Pe.reverse?4:0,fi+=R;let et=fi%.74<.4,Ct=(Pe.left||Pe.hazard)&&et,Lt=(Pe.right||Pe.hazard)&&et;return ve[-1].emissiveIntensity=Ct?6:0,ve[1].emissiveIntensity=Lt?6:0,de.material.emissiveIntensity=G.engine?1.5:0,Qt.intensity=Pe.interiorGlow?6*r:0,Pe.left||Pe.right||Pe.hazard?et:null}let $s=R=>1-Math.pow(1-R,3),js=0;function Ui(R,G,J){let Q=performance.now();if(Q-js<100)return;js=Q;let et=L.getContext("2d"),Ct=512,Lt=192;et.fillStyle="#07090a",et.fillRect(0,0,Ct,Lt);let v=(T,z,k,U)=>{et.strokeStyle="#222",et.lineWidth=12,et.beginPath(),et.arc(T,110,70,Math.PI*.8,Math.PI*2.2),et.stroke(),et.strokeStyle="#BBA783",et.beginPath(),et.arc(T,110,70,Math.PI*.8,Math.PI*(.8+1.4*Math.max(0,Math.min(1,z)))),et.stroke(),et.fillStyle="#F2F0EA",et.font="700 40px Inter, Arial",et.textAlign="center",et.fillText(U,T,122),et.fillStyle="#9A948B",et.font="500 16px Inter, Arial",et.fillText(k,T,150)};v(120,R/(c?220:180),"km/h",Math.round(R)),v(392,G/n.redline,"rpm \xD71000",(G/1e3).toFixed(1)),et.fillStyle="#93AE7C",et.font="700 46px Inter, Arial",et.textAlign="center",et.fillText(J,256,112),j.needsUpdate=!0}return{spec:n,root:E,car:x,body:b,wheels:kt,steer:tt,interior:zt,panels:yt,clickable:B,state:Pe,materials:d,setPaint:Je,togglePanel:ze,update:ls,drawCluster:Ui,driverEye:new i.Vector3(Tt-.34,h+.33,-.38),dims:{length:X-V,width:u,height:p,front:X,rear:V}}}var gl=class{constructor(){this.ctx=null,this.kind="diesel",this.on=!1,this.cabin=0,this.muted=!1}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.7;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,this.cabinFilter=e.createBiquadFilter(),this.cabinFilter.type="lowpass",this.cabinFilter.frequency.value=18e3,this.master.connect(this.cabinFilter).connect(n).connect(e.destination),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;this._buildEngine(),this._buildEnv()}return this.ctx.state!=="running"&&await this.ctx.resume(),!0}_noise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.05)}_buildEngine(){let t=this.ctx;this.eng=t.createGain(),this.eng.gain.value=0;let e=t.createWaveShaper(),n=new Float32Array(1024);for(let l=0;l<1024;l++){let c=l/512-1;n[l]=Math.tanh(c*2.6)}e.curve=n,this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.Q.value=.8,this.eng.connect(e).connect(this.engLP).connect(this.master),this.osc=[];let s=(l,c)=>{let u=t.createOscillator();u.type=l;let f=t.createGain();return f.gain.value=c,u.connect(f).connect(this.eng),u.start(),this.osc.push({o:u,g:f,base:c}),u};this.o1=s("sawtooth",.5),this.o2=s("square",.18),this.o3=s("triangle",.35),this.oSub=s("sine",.6),this.am=t.createGain(),this.am.gain.value=1,this.eng.disconnect(),this.eng.connect(this.am).connect(e),this.lfo=t.createOscillator(),this.lfo.type="square",this.lfoGain=t.createGain(),this.lfoGain.gain.value=.35,this.lfo.connect(this.lfoGain).connect(this.am.gain),this.lfo.start();let r=this._noise();this.clatBP=t.createBiquadFilter(),this.clatBP.type="bandpass",this.clatBP.frequency.value=2600,this.clatBP.Q.value=1.6,this.clat=t.createGain(),this.clat.gain.value=0,this.clatGate=t.createGain(),this.clatGate.gain.value=0,this.clatLfo=t.createOscillator(),this.clatLfo.type="square";let a=t.createGain();a.gain.value=.5,this.clatLfo.connect(a).connect(this.clatGate.gain),this.clatLfo.start(),r.connect(this.clatBP).connect(this.clatGate).connect(this.clat).connect(this.master);let o=this._noise();this.roarBP=t.createBiquadFilter(),this.roarBP.type="bandpass",this.roarBP.Q.value=.7,this.roar=t.createGain(),this.roar.gain.value=0,o.connect(this.roarBP).connect(this.roar).connect(this.master),this.turbo=t.createOscillator(),this.turbo.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turbo.connect(this.turboG).connect(this.master),this.turbo.start()}_buildEnv(){let t=this.ctx,e=this._noise();this.windLP=t.createBiquadFilter(),this.windLP.type="lowpass",this.windLP.frequency.value=600,this.wind=t.createGain(),this.wind.gain.value=0,e.connect(this.windLP).connect(this.wind).connect(this.master);let n=this._noise();this.sqBP=t.createBiquadFilter(),this.sqBP.type="bandpass",this.sqBP.frequency.value=1300,this.sqBP.Q.value=9,this.sq=t.createGain(),this.sq.gain.value=0,n.connect(this.sqBP).connect(this.sq).connect(this.master);let s=this._noise();this.grLP=t.createBiquadFilter(),this.grLP.type="lowpass",this.grLP.frequency.value=260,this.gravel=t.createGain(),this.gravel.gain.value=0,s.connect(this.grLP).connect(this.gravel).connect(this.master)}setKind(t){this.kind=t}_env(t,e,n,s,r){let a=t.gain;a.cancelScheduledValues(e),a.setValueAtTime(1e-4,e),a.exponentialRampToValueAtTime(s,e+n),a.exponentialRampToValueAtTime(1e-4,e+n+r)}click(t=3200,e=.25,n=.02){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=s.createBufferSource();a.buffer=this.noiseBuf;let o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=t,o.Q.value=3;let l=s.createGain();a.connect(o).connect(l).connect(this.master),this._env(l,r,.002,e,n),a.start(r),a.stop(r+n+.05)}thunk(t=.6){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(110,n),s.frequency.exponentialRampToValueAtTime(48,n+.18);let r=e.createGain();s.connect(r).connect(this.master),this._env(r,n,.004,t,.25),s.start(n),s.stop(n+.35),this.click(900,t*.4,.06)}latch(){this.click(2400,.18,.03),setTimeout(()=>this.click(1700,.12,.03),60)}tick(t){this.click(t?3800:2600,.12,.012)}horn(t,e=.5){if(!this.ctx)return;let n=this.ctx,s=n.currentTime,r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.7;let a=n.createGain();r.connect(a).connect(this.master),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.32,s+.02),a.gain.setValueAtTime(.32,s+e),a.gain.exponentialRampToValueAtTime(1e-4,s+e+.08);for(let o of t.horn){let l=n.createOscillator();l.type="square",l.frequency.value=o,l.connect(r),l.start(s),l.stop(s+e+.1)}}chime(t=[660,880,1320]){if(!this.ctx)return;let e=this.ctx;t.forEach((n,s)=>{let r=e.currentTime+s*.11,a=e.createOscillator();a.type="sine",a.frequency.value=n;let o=e.createGain();a.connect(o).connect(this.master),this._env(o,r,.01,.2,.5),a.start(r),a.stop(r+.6)})}starter(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sawtooth",s.frequency.value=160;let r=e.createOscillator();r.frequency.value=t.engine==="diesel"?9:11;let a=e.createGain();a.gain.value=40,r.connect(a).connect(s.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=900;let l=e.createGain();return s.connect(o).connect(l).connect(this.master),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.2,n+.05),l.gain.setValueAtTime(.2,n+.75),l.gain.exponentialRampToValueAtTime(1e-4,n+.9),s.start(n),r.start(n),s.stop(n+1),r.stop(n+1),()=>{l.gain.cancelScheduledValues(e.currentTime),l.gain.setTargetAtTime(0,e.currentTime,.02)}}blowoff(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="bandpass",s.Q.value=1.2,s.frequency.setValueAtTime(3500,e),s.frequency.exponentialRampToValueAtTime(900,e+.35);let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.01,.14,.35),n.start(e),n.stop(e+.5)}pop(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=700;let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.002,.5,.07),n.start(e),n.stop(e+.15)}crash(t){this.thunk(Math.min(1,.3+t)),this.click(600,Math.min(.6,t),.15)}update(t,e,n){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=.03,o=e.engine==="diesel",l=t.engine?Math.max(t.rpm,1):0,c=o?4:8,u=l/60*c/2,f=t.throttle??0,h=t.engine?1:0,p=Math.max(u,1);this.o1.frequency.setTargetAtTime(o?p:p*.5,r,a),this.o2.frequency.setTargetAtTime(p*(o?2:1),r,a),this.o3.frequency.setTargetAtTime(p*(o?.5:1.5),r,a),this.oSub.frequency.setTargetAtTime(p*.5,r,a),this.lfo.frequency.setTargetAtTime(o?p:p*.25,r,a),this.lfoGain.gain.setTargetAtTime(o?.25:.55-Math.min(.35,l/e.redline*.4),r,.1);let m=l/e.redline;this.engLP.frequency.setTargetAtTime(o?260+m*1600+f*900:220+m*2600+f*1600,r,a);let M=(o?.32:.42)*(.55+.45*f+m*.3);this.eng.gain.setTargetAtTime(M*h,r,.06),this.clatLfo.frequency.setTargetAtTime(p,r,a),this.clat.gain.setTargetAtTime(o?h*(.06+.05*f)*(1.2-m*.6):0,r,.05),this.clatBP.frequency.setTargetAtTime(2200+m*1400,r,.1),this.roarBP.frequency.setTargetAtTime(o?300+m*900:140+m*700,r,a),this.roar.gain.setTargetAtTime(h*f*(o?.06:.16)*(.4+m),r,.05);let d=o?Math.max(0,m-.25)*f:0;this.turbo.frequency.setTargetAtTime(2400+d*5200,r,.15),this.turboG.gain.setTargetAtTime(h*d*.035,r,.12),o&&this._lastLoad>.6&&f<.15&&m>.45&&this.blowoff(),!o&&this._lastLoad>.6&&f<.1&&m>.5&&Math.random()<.7&&(this.pop(),setTimeout(()=>this.pop(),90+Math.random()*120)),this._lastLoad=f;let g=Math.hypot(t.vx,t.vy);this.wind.gain.setTargetAtTime(Math.min(.32,g*g*18e-5),r,.2),this.windLP.frequency.setTargetAtTime(400+g*40,r,.2);let S=t.surface==="asphalt"?Math.max(0,t.slip-.35):0;this.sq.gain.setTargetAtTime(Math.min(.28,S*.4),r,.05),this.sqBP.frequency.setTargetAtTime(1100+Math.sin(r*13)*120+g*8,r,.02),this.gravel.gain.setTargetAtTime(t.surface!=="asphalt"&&t.surface!=="floor"?Math.min(.4,g*.03):0,r,.1),this.cabinFilter.frequency.setTargetAtTime(this.cabin?1500:18e3,r,.1)}};var vn=(i,t,e)=>Math.max(t,Math.min(e,i)),rs=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n);function O_(i,t){let e=t/i.redline;if(i.engine==="diesel"){let s=e<.2?.55+e*1.5:e<.37?.85+(e-.2)*.9:e<.72?1:1-(e-.72)*1.4;return i.torque*vn(s,.3,1)}let n=.62+.55*Math.sin(Math.min(1,e/.72)*Math.PI/2)-(e>.8?(e-.8)*1.2:0);return i.torque*vn(n,.4,1)}function nd(i){let t=i.mass,e=i.wheelbase,n=e*.48,s=e-n,r=.68,a=t*(e*e+i.width*i.width)/12*1.1;return{spec:i,m:t,a:n,b:s,h:r,Iz:a,x:0,z:0,yaw:0,vx:0,vy:0,r:0,steer:0,rpm:i.idle,gear:1,shiftT:0,engine:!1,starting:0,throttle:0,brake:0,ax:0,ay:0,slip:0,wheelSpin:0,wheelSpeed:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,distance:0,surface:"asphalt",hit:0,reverse:!1,lastShift:0}}function id(i,t,e,n){let s=i.spec,r=9.81,a=Math.hypot(i.vx,i.vy),o=e.grip?e.grip(i.x,i.z):{mu:1,rough:0,name:"asphalt"};i.surface=o.name;let l=.58/(1+Math.pow(Math.abs(i.vx)/14,1.4)*.9);i.steer=rs(i.steer,t.steer*l,16,n);let c=t.brake,u=i.engine&&c<.15?t.throttle:0,f=i.vx,h=s.tyreR,p=s.gears,m=Math.abs(i.vx)/(2*Math.PI*h)*60;if(i.shiftT=Math.max(0,i.shiftT-n),!i.reverse&&i.shiftT===0){let Xt=m*p[i.gear-1]*s.finalDrive;Xt>s.shiftUp*(.75+.25*u)&&i.gear<p.length?(i.gear++,i.shiftT=s.engine==="v8"?.14:.22,i.lastShift=1):Xt<s.shiftDown&&i.gear>1&&(i.gear--,i.shiftT=.2,i.lastShift=-1)}let M=(i.reverse?4.1:p[i.gear-1])*s.finalDrive,d=m*M,g=i.engine?Math.max(s.idle+u*(s.engine==="v8"?2100:1400)*vn(1-Math.abs(i.vx)/6,0,1),d):0,S=i.shiftT>0?g*.82:g;i.starting>0&&(i.starting-=n),i.rpm=rs(i.rpm,vn(S,0,s.redline*1.02),i.engine?9:2.5,n),i.rpm>s.redline&&(u*=.2);let y=(i.engine?O_(s,Math.max(i.rpm,s.idle))*u:0)*M*.92/h*(i.shiftT>0?.68:1);i.reverse&&(y=-y);let C=s.power*1e3/Math.max(2,Math.abs(i.vx));y=vn(y,-C*1.2,C*1.2);let E=Math.sign(i.vx)||0,x=c*B_(i)+(t.handbrake?6e3:0),b=i.m*r*(.013+o.rough*.02),B=.5*1.2*(s.engine==="v8"?1.25:1.1)*i.vx*Math.abs(i.vx),A=i.engine&&u<.05?i.rpm/s.redline*900*E:0,I=y-B-A,N=(x+b)*E;Math.abs(i.vx)<.15&&Math.abs(y)<x+b?(i.vx=0,I=0):I-=N;let $=vn(i.m*r*i.b/(i.a+i.b)-i.m*i.ax*i.h/(i.a+i.b),i.m*r*.1,i.m*r*.9),F=i.m*r-$,X=o.mu,V=X*i.m*r*.95,Y=vn(Math.abs(I)/V,0,1.4);Math.abs(I)>V&&(I=Math.sign(I)*V),i.wheelSpin=rs(i.wheelSpin,Math.max(0,Y-.92)*6,8,n);let pt=Math.max(Math.abs(i.vx),.5)*(i.vx<0?-1:1),rt=Math.atan2(i.vy+i.a*i.r,Math.abs(pt))-i.steer*Math.sign(pt),ht=Math.atan2(i.vy-i.b*i.r,Math.abs(pt)),at=9.5*$/1,it=10.5*F/1,_t=t.handbrake?X*.45:X,q=Math.sqrt(1-vn(Y*.95,0,1)**2),gt=(Xt,ae,he)=>he>1?he*Math.tanh(-ae*Xt/he):0,mt=gt(rt,at,X*$*q),Ut=gt(ht,it,_t*F*q);i.slip=vn(Math.max(Math.abs(rt),Math.abs(ht))*Math.min(1,a/4)*3+i.wheelSpin*.6+(t.handbrake&&a>3?.5:0),0,1.5);let wt=(I-mt*Math.sin(i.steer))/i.m+i.vy*i.r,Ot=(mt*Math.cos(i.steer)+Ut)/i.m-i.vx*i.r,ce=(i.a*mt*Math.cos(i.steer)-i.b*Ut)/i.Iz,qt=vn((a-1)/3,0,1),Zt=qt*qt*(3-2*qt);i.vx+=(Zt*wt+(1-Zt)*(I/i.m))*n,i.vy=Zt*(i.vy+Ot*n)+(1-Zt)*rs(i.vy,0,10,n);let se=i.vx*Math.tan(i.steer)/(i.a+i.b);i.r=Zt*(i.r+ce*n)+(1-Zt)*se,i.ax=rs(i.ax,Zt*(wt-i.vy*i.r)+(1-Zt)*(I/i.m),12,n),i.ay=rs(i.ay,Zt*(Ot+i.vx*i.r)+(1-Zt)*i.vx*i.r,12,n),c>.15&&(f===0||f*i.vx<0)&&(i.vx=0),i.vx=vn(i.vx,-6,s.top);let ct=Math.sin(i.yaw),dt=Math.cos(i.yaw);if(i.x+=(i.vx*ct+i.vy*dt)*n,i.z+=(i.vx*dt-i.vy*ct)*n,i.yaw+=i.r*n,i.hit=Math.max(0,i.hit-n),e.collide){let Xt=e.collide(i.x,i.z,i.yaw);if(Xt){i.x+=Xt.nx*Xt.depth,i.z+=Xt.nz*Xt.depth;let ae=i.vx*ct+i.vy*dt,he=i.vx*dt-i.vy*ct,Rt=ae*Xt.nx+he*Xt.nz;if(Rt<0){let Se=-Rt;i.hit=Math.min(1,Se/8);let zt=(ae-1.12*Rt*Xt.nx)*.86,Kt=(he-1.12*Rt*Xt.nz)*.86;i.vx=zt*ct+Kt*dt,i.vy=(zt*dt-Kt*ct)*.5;let P=Math.sin(i.yaw)*Xt.nz-Math.cos(i.yaw)*Xt.nx;i.r=i.r*.6+vn(P*Se*.06,-.8,.8),i.lastImpact=Se}}}let yt=38,Ft=7.5,It=30,Vt=6,Bt=55,jt=9,re=vn(-i.ax*.0085,-.06,.06),ne=vn(i.ay*.0072,-.065,.065);i.pitchV+=((re-i.pitch)*yt-i.pitchV*Ft)*n,i.pitch+=i.pitchV*n,i.rollV+=((ne-i.roll)*It-i.rollV*Vt)*n,i.roll+=i.rollV*n,i.distance+=a*n;let H=o.rough*Math.min(1,a/6)*(Math.sin(i.distance*13)*.24+Math.sin(i.distance*5.3)*.14);return i.heaveV+=(-i.heave*Bt-i.heaveV*jt+H*60)*n,i.heave+=i.heaveV*n,i.wheelSpeed=i.vx/h+i.wheelSpin*30*Math.sign(u||1)*(i.reverse?-1:1),i.throttle=rs(i.throttle,u,10,n),i.brake=c,i}function B_(i){return i.m*9.81*.95}var Ks=(i,t,e)=>Math.max(t,Math.min(e,i)),as=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n),Zs=1/120,_l={throttle:0,brake:0,steer:0,handbrake:!1};function sd({bounds:i,circles:t=[],boxes:e=[],carR:n=.95,carHalf:s=1.7}){let r=e.map(h=>({...h,cs:Math.cos(h.rot||0),sn:Math.sin(h.rot||0),radius:Math.hypot(h.hx,h.hz)+n})),a=16,o=new Map,l=(h,p)=>h*73856093^p*19349663,c=(h,p,m,M)=>{for(let d=Math.floor((p-M)/a);d<=Math.floor((p+M)/a);d++)for(let g=Math.floor((m-M)/a);g<=Math.floor((m+M)/a);g++){let S=l(d,g),w=o.get(S);w||o.set(S,w={boxes:[],circles:[]}),h.r!==void 0&&!h.hx?w.circles.push(h):w.boxes.push(h)}};for(let h of r)c(h,h.x,h.z,h.radius);for(let h of t)c(h,h.x,h.z,h.r+n);let u={boxes:[],circles:[]},f=(h,p)=>o.get(l(Math.floor(h/a),Math.floor(p/a)))||u;return(h,p,m)=>{let M=Math.sin(m),d=Math.cos(m),g=null;for(let S of[-1,0,1]){let w=h+M*S*s,y=p+d*S*s,C=(x,b,B)=>{B>0&&(!g||B>g.depth)&&(g={nx:x,nz:b,depth:B})};i&&(C(1,0,i.minX-(w-n)),C(-1,0,w+n-i.maxX),C(0,1,i.minZ-(y-n)),C(0,-1,y+n-i.maxZ));let E=f(w,y);for(let x of E.circles){let b=w-x.x,B=y-x.z,A=x.r+n;if(b*b+B*B>=A*A)continue;let I=Math.hypot(b,B);I>1e-4?C(b/I,B/I,A-I):C(-M,-d,A)}for(let x of E.boxes){let b=w-x.x,B=y-x.z;if(b*b+B*B>=x.radius*x.radius)continue;let A=b*x.cs+B*x.sn,I=-b*x.sn+B*x.cs,N=Ks(A,-x.hx,x.hx),$=Ks(I,-x.hz,x.hz),F=A-N,X=I-$,V=Math.hypot(F,X);if(V<n)if(V<1e-4){let Y=x.hx-Math.abs(A),pt=x.hz-Math.abs(I);Y<pt?(F=Math.sign(A)||1,X=0,V=-Y):(F=0,X=Math.sign(I)||1,V=-pt);let rt=F*x.cs-X*x.sn,ht=F*x.sn+X*x.cs;C(rt,ht,n-V)}else{let Y=F/V,pt=X/V;C(Y*x.cs-pt*x.sn,Y*x.sn+pt*x.cs,n-V)}}}return g}}var xl=class{constructor({THREE:t,scene:e,camera:n,dom:s,vehicle:r,audio:a,env:o={},onEvent:l=()=>{}}){Object.assign(this,{THREE:t,scene:e,camera:n,dom:s,audio:a,env:o,onEvent:l}),this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)"),this.enabled=!1,this.camMode="chase",this.camModes=["chase","far","cabin","hood","cine","drone"],this.input={..._l},this.keys=new Set,this.touch={..._l},this.accumulator=0,this.lastPose={x:0,z:0,yaw:0},this.effectsTime=0,this.camPos=new t.Vector3,this.camLook=new t.Vector3,this.fov=n.fov,this.shake=0,this.orbitYaw=0,this.orbitPitch=0,this.dragging=!1,this.cine=null,this._tmp=new t.Vector3,this._tmp2=new t.Vector3,this._q=new t.Quaternion,this.cameraWant=new t.Vector3,this.cameraTarget=new t.Vector3,this.cameraHeading=new t.Vector3,this.markMatrix=new t.Matrix4,this.markScale=new t.Vector3(1,1,1),this.setVehicle(r),this._initFx(),this._bind()}setVehicle(t){let e=this.dyn?{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}:null;this.dyn&&this.toggleEngine(!1),this.clearInput(),this.vehicle=t,this.dyn=nd(t.spec),e&&Object.assign(this.dyn,e),Object.assign(this.lastPose,{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}),this.audio&&this.audio.setKind(t.spec.engine)}place(t,e,n=0){this.clearInput(),Object.assign(this.dyn,{x:t,z:e,yaw:n,vx:0,vy:0,r:0,steer:0,slip:0,wheelSpin:0,wheelSpeed:0}),Object.assign(this.lastPose,{x:t,z:e,yaw:n}),this._sync(0),this.snapCamera()}clearInput(){this.keys.clear(),Object.assign(this.touch,_l),Object.assign(this.input,_l),this.dragging=!1,this.accumulator=0,this.resetTouch?.()}setEnabled(t){this.clearInput(),this.enabled=t,t?this.dom.focus({preventScroll:!0}):(this.toggleEngine(!1),Object.assign(this.dyn,{vx:0,vy:0,r:0,slip:0,throttle:0}),this.audio?.update(this.dyn,this.vehicle.spec,0))}_bind(){let t=s=>{if(!this.enabled||document.hidden||s.altKey||s.ctrlKey||s.metaKey||s.defaultPrevented||s.target?.closest?.("button, a, input, select, textarea, summary, [contenteditable]"))return;let r=s.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(r)&&s.preventDefault(),!s.repeat&&(this.keys.add(r),r==="h"?this.horn():r==="l"?this.toggle("head"):r==="q"?this.toggle("left"):r==="e"?this.toggle("right"):r==="x"?this.toggle("hazard"):r==="c"?this.cycleCamera():r==="r"?this.recover():r==="v"?this.shiftDirection():r==="i"&&this.toggleEngine())},e=s=>this.keys.delete(s.key.toLowerCase()),n=()=>{this.audio?.muted||this.audio?.unlock().catch(()=>{})};this.dom.addEventListener("pointerdown",n,{passive:!0}),addEventListener("keydown",t),addEventListener("keyup",e),addEventListener("blur",()=>this.clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearInput()}),this.dom.addEventListener("pointerdown",s=>{this.enabled&&(this.dragging=!0,this._px=s.clientX,this._py=s.clientY,this._lookT=0)}),addEventListener("pointerup",()=>{this.dragging=!1}),addEventListener("pointercancel",()=>{this.dragging=!1}),addEventListener("pointermove",s=>{!this.enabled||!this.dragging||(this.orbitYaw-=(s.clientX-this._px)*.006,this.orbitPitch=Ks(this.orbitPitch+(s.clientY-this._py)*.004,-.3,.9),this._px=s.clientX,this._py=s.clientY,this._lookT=0)})}setTouch(t){Object.assign(this.touch,t)}_readInput(){let t=this.keys,e=this.touch,n=t.has("w")||t.has("arrowup")?1:e.throttle,s=t.has("s")||t.has("arrowdown")?1:e.brake,r=(t.has("a")||t.has("arrowleft")?1:0)-(t.has("d")||t.has("arrowright")?1:0);r||(r=e.steer);let a=t.has(" ")||e.handbrake,o=navigator.getGamepads?navigator.getGamepads():[];for(let l of o)if(l){let c=l.axes[0]||0;Math.abs(c)>.12&&(r=-c),l.buttons[7]&&l.buttons[7].value>.05&&(n=l.buttons[7].value),l.buttons[6]&&l.buttons[6].value>.05&&(s=l.buttons[6].value),l.buttons[0]&&l.buttons[0].pressed&&(a=!0),l.buttons[3]&&l.buttons[3].pressed&&!this._padY&&this.cycleCamera(),this._padY=l.buttons[3]&&l.buttons[3].pressed,l.buttons[1]&&l.buttons[1].pressed&&!this._padB&&this.horn(),this._padB=l.buttons[1]&&l.buttons[1].pressed,l.buttons[2]?.pressed&&!this._padX&&this.shiftDirection(),this._padX=l.buttons[2]?.pressed;break}return{thr:n,brk:s,st:r,hb:a}}_smoothInput({thr:t,brk:e,st:n,hb:s},r){let a=this.input;if(this.dyn.reverse){let l=t;t=e,e=l}if(a.throttle=as(a.throttle,t,t>a.throttle?11:14,r),a.brake=as(a.brake,e,16,r),Math.abs(n)>0&&Math.abs(n)<.999)a.steer=as(a.steer,n,18,r);else{let l=n===0?6.5:a.steer*n<0?9:3.6;a.steer+=Ks(n-a.steer,-l*r,l*r)}a.handbrake=s}toggle(t){let e=this.vehicle.state;return t==="left"?(e.left=!e.left,e.right=!1):t==="right"?(e.right=!e.right,e.left=!1):e[t]=!e[t],this.audio&&this.audio.click(2e3,.1,.02),this.onEvent("lights",{...e}),e[t]}horn(){this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>this.audio.horn(this.vehicle.spec,.45)).catch(()=>{});let t=performance.now();this._horns=(this._horns||[]).filter(e=>t-e<1600),this._horns.push(t),this.onEvent("horn",this._horns.length)}toggleEngine(t){let e=this.dyn,n=t??!(e.engine||this.startTimer);if(n&&(e.engine||this.startTimer))return!0;if(!n)return clearTimeout(this.startTimer),this.startTimer=null,this.stopStarter?.(),this.stopStarter=null,e.engine=!1,e.starting=0,this.audio?.update(e,this.vehicle.spec,0),this.onEvent("engine","off"),!1;let s=this.vehicle.spec;this.startTimer=setTimeout(()=>{this.startTimer=null,e.engine=!0,e.starting=0,e.rpm=s.idle*1.4,this.onEvent("engine","running")},650),e.starting=.65;let r=this.startTimer;return this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>{this.startTimer===r&&(this.stopStarter=this.audio.starter(s))}).catch(()=>{}),this.onEvent("engine","starting"),n}_autoShift({thr:t,brk:e},n){let s=this.dyn,r=Math.hypot(s.vx,s.vy)<.3&&s.engine,a=!s.reverse&&e>.5&&t<.05,o=s.reverse&&t>.5&&e<.05;this._holdT=r&&(a||o)?(this._holdT||0)+n:0,this._holdT>.35&&(this._holdT=0,s.reverse=!s.reverse,s.gear=1,this.input.throttle=0,this.input.brake=0,this.onEvent("direction",s.reverse))}shiftDirection(){return Math.hypot(this.dyn.vx,this.dyn.vy)>.4||this.input.throttle>.08?(this.onEvent("shift-blocked"),!1):(this.clearInput(),this.dyn.reverse=!this.dyn.reverse,this.dyn.gear=1,this.onEvent("direction",this.dyn.reverse),!0)}cycleCamera(t){let e=this.camModes.indexOf(this.camMode),n=this.camModes[(e+1)%this.camModes.length];return this.camMode=t||(n==="cine"&&this.reducedMotion.matches?"drone":n),this.cine=null,this.orbitYaw=0,this.orbitPitch=0,this.snapCamera(),this.audio&&(this.audio.cabin=this.camMode==="cabin"?1:0),this.onEvent("camera",this.camMode),this.camMode}recover(){let t=this.dyn;if(t.vx=t.vy=t.r=0,this.env.respawn){let e=this.env.respawn(t);e&&this.place(e.x,e.z,e.yaw)}}_initFx(){let t=this.THREE,e=260,n=new t.BufferGeometry;this.pPos=new Float32Array(e*3),this.pVel=new Float32Array(e*3),this.pLife=new Float32Array(e),n.setAttribute("position",new t.BufferAttribute(this.pPos,3));let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64),this.dustMat=new t.PointsMaterial({size:1.6,map:new t.CanvasTexture(s),transparent:!0,depthWrite:!1,opacity:.55,color:11901560,sizeAttenuation:!0}),this.dust=new t.Points(n,this.dustMat),this.dust.frustumCulled=!1,this.dust.visible=!1,this.scene.add(this.dust);for(let u=0;u<e;u++)this.pPos[u*3+1]=-100;this.pIdx=0;let o=320,l=new t.PlaneGeometry(.26,.5);l.rotateX(-Math.PI/2),this.skid=new t.InstancedMesh(l,new t.MeshBasicMaterial({color:657930,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),o),this.skid.frustumCulled=!1,this.skidI=0;let c=new t.Matrix4().makeTranslation(0,-100,0);for(let u=0;u<o;u++)this.skid.setMatrixAt(u,c);this.scene.add(this.skid)}_emit(t,e,n){let s=this.pLife.length;for(let r=0;r<n;r++){let a=this.pIdx=(this.pIdx+1)%s;this.pPos[a*3]=t.x+(Math.random()-.5)*.3,this.pPos[a*3+1]=t.y+.15,this.pPos[a*3+2]=t.z+(Math.random()-.5)*.3,this.pVel[a*3]=(Math.random()-.5)*1.2,this.pVel[a*3+1]=.5+Math.random()*.9,this.pVel[a*3+2]=(Math.random()-.5)*1.2,this.pLife[a]=1.6+Math.random()}this.dustMat.color.set(e)}_fx(t){let e=this.pLife.length,n=!1,s=!1;for(let r=0;r<e;r++)this.pLife[r]<=0||(n=!0,this.pLife[r]-=t,this.pPos[r*3]+=this.pVel[r*3]*t,this.pPos[r*3+1]+=this.pVel[r*3+1]*t,this.pPos[r*3+2]+=this.pVel[r*3+2]*t,this.pVel[r*3+1]*=Math.exp(-1.8*t),this.pLife[r]<=0?this.pPos[r*3+1]=-100:s=!0);n&&(this.dust.geometry.attributes.position.needsUpdate=!0),this.dust.visible=s}update(t){if(!this.enabled||document.hidden)return;t=Math.min(t,.1);let e=this.dyn,n=this.vehicle,s=this._readInput();for(this.accumulator+=t;this.accumulator>=Zs;)this._autoShift(s,Zs),this._smoothInput(s,Zs),Object.assign(this.lastPose,{x:e.x,z:e.z,yaw:e.yaw}),id(e,this.input,this.env,Zs),this.accumulator-=Zs;e.lastImpact&&(this.audio&&this.audio.crash(e.lastImpact/10),this.shake=Math.min(1,e.lastImpact/8),this.onEvent("impact",e.lastImpact),e.lastImpact=0),e.lastShift&&(this.onEvent("shift",e.gear),e.lastShift=0),n.state.brake=this.input.brake>.1||this.input.handbrake,n.state.reverse=e.reverse,this._sync(t,this.accumulator/Zs);let r=n.update(t,{engine:e.engine,night:this.env.night});r!==null&&r!==this._lastBlink&&this.audio&&this.audio.tick(r),this._lastBlink=r,n.drawCluster(Math.abs(e.vx)*3.6,e.rpm,e.reverse?"R":e.engine?Math.abs(e.vx)<.2&&this.input.throttle<.05?"D":"D"+e.gear:"P"),this.audio&&this.audio.update(e,n.spec,t);let a=Math.hypot(e.vx,e.vy),o=e.surface!=="asphalt"&&e.surface!=="floor";this.effectsTime+=t;let l=o&&a>3||e.slip>.7||e.wheelSpin>.4,c=!o&&(e.slip>.75||e.wheelSpin>.5)&&a>2;if(this.effectsTime>=1/30){if(this.effectsTime%=1/30,c||l)for(let u of n.wheels){if(u.front)continue;let f=u.pivot.getWorldPosition(this._tmp2);if(l&&this._emit(f,o?this.env.dustColor||11569762:14211288,o?Math.ceil(a/9):1),c){f.y=(this.env.groundY?.(f.x,f.z)??0)+.012;let h=this.markMatrix.compose(f,this._q.setFromAxisAngle(this.cameraHeading.set(0,1,0),e.yaw),this.markScale);this.skid.setMatrixAt(this.skidI=(this.skidI+1)%this.skid.count,h)}}c&&(this.skid.instanceMatrix.needsUpdate=!0)}this._fx(t),this._camera(t)}_sync(t,e=1){let n=this.dyn,s=this.vehicle,r=this.lastPose.x+(n.x-this.lastPose.x)*e,a=this.lastPose.z+(n.z-this.lastPose.z)*e,o=this.lastPose.yaw+(n.yaw-this.lastPose.yaw)*e,l=this.env.groundY,c=l?.(r,a)??0,u=Math.sin(o),f=Math.cos(o);s.root.position.set(r,c,a),s.root.rotation.set(0,o,0),s.body.rotation.x=n.roll,s.body.rotation.z=-n.pitch,s.body.position.y=n.heave*.6;for(let h of s.wheels){if(h.spin.rotation.z-=n.wheelSpeed*t,h.front){let d=s.spec.wheelbase/Math.tan(n.steer);h.pivot.rotation.y=Math.atan(s.spec.wheelbase/(d+h.z))}let p=(h.front?1:-1)*s.spec.wheelbase*.5,M=(l?l(r+u*p+f*h.z,a+f*p-u*h.z)-c:0)-n.roll*h.z*.5+(h.front?-1:1)*n.pitch*.4+n.heave*.3;h.pivot.position.y=h.baseY+Ks(M,-.12,.14)}s.steer.rotation.x=-n.steer*7}snapCamera(){this._camInit=!1}_camera(t){let e=this.THREE,n=this.dyn,s=this.vehicle,r=this.camera,a=this._tmp.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),o=s.root.position,l=Math.hypot(n.vx,n.vy);this.dragging||(this._lookT=(this._lookT||0)+t,this._lookT>1.2&&(this.orbitYaw=as(this.orbitYaw,0,2.5,t),this.orbitPitch=as(this.orbitPitch,0,2.5,t)));let c=this.cameraWant,u=this.cameraTarget,f=55,h=6,p=.1,m=s.root.rotation.y+this.orbitYaw,M=this.cameraHeading.set(Math.sin(m),0,Math.cos(m)),d=s.dims.length;switch(this.camMode){case"chase":case"far":{let y=this.camMode==="far",C=(y?d*1.9:d*1.25)+l*.05,E=(y?3.4:2.05)+this.orbitPitch*4,x=l>4?Math.atan2(n.vx*Math.sin(n.yaw)+n.vy*Math.cos(n.yaw),n.vx*Math.cos(n.yaw)-n.vy*Math.sin(n.yaw)):n.yaw,b=n.vx>2?x+(m-n.yaw):m;c.set(o.x-Math.sin(b)*C,o.y+E,o.z-Math.cos(b)*C),u.copy(o).addScaledVector(a,2.5+l*.06),u.y+=1.05,f=52+Math.min(16,l*.38),h=4.5;break}case"cabin":{let y=s.driverEye.clone();s.body.localToWorld(y),c.copy(y),h=60,p=.03;let C=n.yaw+this.orbitYaw*1.6+n.steer*.35;u.set(y.x+Math.sin(C)*10,y.y-.6+this.orbitPitch*-4,y.z+Math.cos(C)*10),f=64+Math.min(8,l*.15);break}case"hood":{let y=new e.Vector3(s.spec.wheelbase/2-.3,s.spec.roof+.1,0);s.body.localToWorld(y),c.copy(y),h=60,p=.05,u.copy(y).addScaledVector(M,12),u.y-=.9,f=62+Math.min(10,l*.2);break}case"drone":{c.set(o.x-a.x*18,o.y+34,o.z-a.z*18),u.copy(o).addScaledVector(a,8),f=50,h=2;break}case"cine":{if(!this.cine||this.cine.t>7||o.distanceTo(this.cine.p)>55){let y=Math.random()<.5?-1:1,C=18+Math.random()*20,E=new e.Vector3(a.z,0,-a.x),x=o.clone().addScaledVector(a,C).addScaledVector(E,y*(6+Math.random()*6));x.y=(this.env.groundY?this.env.groundY(x.x,x.z):0)+.6+Math.random()*2.5,this.env.cineOk&&!this.env.cineOk(x)&&x.copy(o).addScaledVector(a,-10).setY(o.y+3),this.cine={p:x,t:0,fov:28+Math.random()*18},this.camPos.copy(x),this._camInit=!0}this.cine.t+=t,c.copy(this.cine.p),u.copy(o),u.y+=.9,f=this.cine.fov,h=1e3;break}}this._camInit||(this.camPos.copy(c),this.camLook.copy(u),this._camInit=!0);let g=1-Math.exp(-h*t);if(this.camPos.lerp(c,g),this.camLook.lerp(u,Math.min(1,g*1.6)),this.env.groundY&&this.camMode!=="cabin"&&(this.camPos.y=Math.max(this.camPos.y,this.env.groundY(this.camPos.x,this.camPos.z)+.35)),r.position.copy(this.camPos),this.env.cameraCollision&&(this.camMode==="chase"||this.camMode==="far"))for(let y=1;y<=4;y++){let C=this._tmp2.copy(o).lerp(this.camPos,y/4);if(this.env.cameraCollision(C.x,C.z,m)){r.position.copy(o).lerp(this.camPos,Math.max(.2,(y-1)/4)),r.position.y=Math.max(r.position.y,o.y+s.dims.height+.2);break}}this.shake=as(this.shake,0,3,t);let S=(this.camMode==="cabin"||this.camMode==="hood"?.6:1)*(Math.min(1,l/45)**2*.012+(n.surface!=="asphalt"&&n.surface!=="floor"?Math.min(1,l/15)*.02:0)+this.shake*.09);this._shakeT=(this._shakeT||0)+t*(8+l*.6);let w=(y,C)=>Math.sin(this._shakeT*y)*.6+Math.sin(this._shakeT*C+1.7)*.4;this.camMode!=="cine"&&!this.reducedMotion.matches&&r.position.add(this._tmp2.set(w(1.3,2.9)*S*.5,w(1.7,3.7)*S*.5,w(1.1,2.3)*S*.5)),r.lookAt(this.camLook),this.camMode==="cabin"&&!this.reducedMotion.matches&&r.rotateZ(-n.roll*.6),this.fov=as(this.fov,f,3,t),(Math.abs(r.fov-this.fov)>.01||r.near!==p)&&(r.fov=this.fov,r.near=p,r.updateProjectionMatrix())}hud(){let t=this.dyn;return{kmh:Math.abs(t.vx)*3.6,rpm:t.rpm,redline:this.vehicle.spec.redline,gear:t.reverse?"R":t.engine?"D"+t.gear:"P",engine:t.engine,surface:t.surface,cam:this.camMode,lights:this.vehicle.state}}},rd=`
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
    <div class="pkm-hud__bar" style="margin-top:8px"><i data-rpm></i></div><div class="pkm-hud__meta"><span data-rpmt>0 rpm</span><span data-surf>Asphalt</span></div></div>`,i.appendChild(t);let[e,n,s,r,a,o,l,c,u]=t.querySelectorAll("[data-spd],[data-gear],[data-l],[data-h],[data-e],[data-r],[data-rpm],[data-rpmt],[data-surf]"),f=(m,M)=>{m.textContent!==M&&(m.textContent=M)},h=0,p=.1;return{el:t,update(m,M=.016){if(h+=M,p+=M,p<.05)return;p%=.05,f(e,String(Math.round(m.kmh))),f(n,m.gear),l.style.width=Math.min(100,m.rpm/m.redline*100).toFixed(1)+"%",f(c,Math.round(m.rpm/10)*10+" rpm"),f(u,{asphalt:"Asphalt",grass:"Grass",dirt:"Laterite",floor:"Showroom floor",kerb:"Kerb"}[m.surface]||m.surface);let d=h%.74<.4,g=m.lights;s.classList.toggle("on",(g.left||g.hazard)&&d),o.classList.toggle("on",(g.right||g.hazard)&&d),r.classList.toggle("on",!!g.head),a.classList.toggle("on",m.engine)}}}function od(i,t){let e=document.createElement("div");e.className="pkm-touch",e.innerHTML=`<div class="pkm-steer" role="slider" aria-label="Steering: slide left or right" aria-valuemin="-1" aria-valuemax="1" aria-valuenow="0"><i></i><span>\u25C0 steer \u25B6</span></div>
    <div><button data-k="brake" class="tall">Brake</button><button data-k="gas" class="tall" aria-label="Accelerate">Go</button></div>`,i.appendChild(e);let n={steer:0,gas:0,brake:0},s=()=>t.setTouch({steer:n.steer,throttle:n.gas,brake:n.brake}),r=[...e.querySelectorAll("button")],a=e.querySelector(".pkm-steer"),o=a.querySelector("i"),l=null,c=f=>{n.steer=Math.abs(f)<.06?0:Ks(f,-.998,.998),o.style.transform=`translateX(${-n.steer*44}px)`,a.setAttribute("aria-valuenow",(-n.steer).toFixed(2)),s()};a.addEventListener("pointerdown",f=>{f.preventDefault(),a.setPointerCapture(f.pointerId),l=f.clientX,a.classList.add("down")}),a.addEventListener("pointermove",f=>{l!==null&&c(-(f.clientX-l)/60)});let u=()=>{l=null,a.classList.remove("down"),c(0)};a.addEventListener("pointerup",u),a.addEventListener("pointercancel",u),a.addEventListener("lostpointercapture",u),t.resetTouch=()=>{for(let f of r)n[f.dataset.k]=0,f.classList.remove("down");l=null,n.steer=0,o.style.transform="",a.classList.remove("down")};for(let f of r){let h=f.dataset.k,p=M=>{M.preventDefault(),f.setPointerCapture(M.pointerId),n[h]=1,f.classList.add("down"),s()},m=()=>{n[h]=0,f.classList.remove("down"),s()};f.addEventListener("pointerdown",p),f.addEventListener("lostpointercapture",m),f.addEventListener("pointerup",m),f.addEventListener("pointercancel",m)}return e}var os=class i extends ie{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=e.color!==void 0?new ee(e.color):new ee(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new pn,f=new D,h=new D,p=new D,m=new ye,M=new D(0,0,-1),d=new De,g=new D,S=new D,w=new De,y=new ye,C=new Ge(r,a,{samples:c,type:qe}),E=new ke({name:l.name!==void 0?l.name:"unspecified",uniforms:En.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=C.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=y,this.material=E,this.onBeforeRender=function(x,b,B){let A=this.getReflectionCamera(B);if(h.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(B.matrixWorld),m.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(m),g.subVectors(h,p),g.dot(f)>0===!0&&this.forceUpdate===!1)return;g.reflect(f).negate(),g.add(h),m.extractRotation(B.matrixWorld),M.set(0,0,-1),M.applyMatrix4(m),M.add(p),S.subVectors(h,M),S.reflect(f).negate(),S.add(h),A.position.copy(g),A.up.set(0,1,0),A.up.applyMatrix4(m),A.up.reflect(f),A.lookAt(S),A.far=B.far,A.updateMatrixWorld(),A.projectionMatrix.copy(B.projectionMatrix),A.projectionMatrix.elements[8]*=-1,A.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(A.projectionMatrix),y.multiply(A.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,h),u.applyMatrix4(A.matrixWorldInverse),d.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let N=A.projectionMatrix;A.isOrthographicCamera?(w.x=(Math.sign(d.x)+N.elements[8])/N.elements[0],w.y=(Math.sign(d.y)+N.elements[9])/N.elements[5],w.z=-B.far,w.w=1):(w.x=(Math.sign(d.x)+N.elements[8])/N.elements[0],w.y=(Math.sign(d.y)+N.elements[9])/N.elements[5],w.z=-1,w.w=(1+N.elements[10])/N.elements[14]),d.multiplyScalar(2/d.dot(w)),N.elements[2]=d.x,N.elements[6]=d.y,A.isOrthographicCamera?(N.elements[10]=d.z-o,N.elements[14]=d.w-1):(N.elements[10]=d.z+1-o,N.elements[14]=d.w),n.visible=!1;let $=x.getRenderTarget(),F=x.xr.enabled,X=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(C),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(b,A),x.xr.enabled=F,x.shadowMap.autoUpdate=X,x.setRenderTarget($);let V=B.viewport;V!==void 0&&x.state.viewport(V),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let b=this._reflectionCameras.get(x);return b===void 0&&(b=x.clone(),this._reflectionCameras.set(x,b)),b}}};os.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Js=class i extends ie{constructor(){let t=i.SkyShader,e=new ke({name:t.name,uniforms:En.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:an,depthWrite:!1});super(new Xe(1,1,1),e),this.isSky=!0}};Js.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var Cn=(i,t,e,n=!0)=>{let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Xi(s);return n&&(r.colorSpace=sn),r.anisotropy=8,r},ld=i=>()=>((i=Math.imul(i^i>>>15,2246822519)+2654435769|0)>>>0)/4294967296;function la(i,t,e,n,s=[1,1,1],r=1){let a=i.getImageData(0,0,t,e),o=a.data,l=r>>>0;for(let c=0;c<o.length;c+=4){l=Math.imul(l,1664525)+1013904223>>>0;let u=((l>>>8)/16777216-.5)*n;o[c]+=u*s[0],o[c+1]+=u*s[1],o[c+2]+=u*s[2]}i.putImageData(a,0,0)}var yn='"Inter", ui-sans-serif, system-ui, sans-serif';function cd({quality:i,reflections:t}){let e=new Qe;e.name="showroom";let n=[],s=ld(7),r=Cn(1024,1024,(it,_t,q)=>{it.fillStyle="#1e1e1e",it.fillRect(0,0,_t,q),la(it,_t,q,14,[1,1,1],7),it.strokeStyle="#1b1b1b",it.lineWidth=3;for(let gt=0;gt<=4;gt++)it.beginPath(),it.moveTo(gt*_t/4,0),it.lineTo(gt*_t/4,q),it.stroke(),it.beginPath(),it.moveTo(0,gt*q/4),it.lineTo(_t,gt*q/4),it.stroke()});r.wrapS=r.wrapT=In,r.repeat.set(10,10);let a=new ie(new Ue(40,40),new Ti({map:r,roughness:.48,metalness:0,clearcoat:.22,clearcoatRoughness:.45}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,e.add(a);let o=null;if(t){let it={...os.ReflectorShader,fragmentShader:os.ReflectorShader.fragmentShader.replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor = vec4( base.rgb * color, 1.0 );")};o=new os(new Ue(40,40),{textureWidth:512,textureHeight:512,multisample:0,color:1710618,shader:it,clipBias:.003}),o.material.transparent=!0,o.material.blending=ji,o.material.depthWrite=!1,o.rotation.x=-Math.PI/2,o.position.y=.002,o.renderOrder=1,e.add(o)}let l=new Te({color:"#141414",roughness:.92}),c=(it,_t,q,gt,mt,Ut,wt)=>{let Ot=new ie(new Xe(it,_t,q),wt);return Ot.position.set(gt,mt,Ut),Ot.receiveShadow=!0,e.add(Ot),Ot};c(40,10,.4,0,5,-14,l),c(.4,10,40,-16,5,0,l),c(.4,10,40,16,5,0,l),c(40,10,.4,0,5,16,l),c(40,.3,40,0,9.6,0,new Te({color:"#0b0b0b",roughness:1}));let u=new Te({color:"#6b4a2f",roughness:.6}),f=new ai(new Xe(.09,7.6,.12),u,120),h=new ye;for(let it=0;it<120;it++)h.makeTranslation(-11.9+it*.2,3.8,-13.72),f.setMatrixAt(it,h);f.receiveShadow=!0,e.add(f);let p=Cn(1600,560,(it,_t,q)=>{it.clearRect(0,0,_t,q),it.fillStyle="#fff",it.textAlign="center",it.textBaseline="middle",it.font=`800 360px ${yn}`,"letterSpacing"in it&&(it.letterSpacing="-18px"),it.fillText("PKM",_t/2,q*.42),it.font=`600 58px ${yn}`,"letterSpacing"in it&&(it.letterSpacing="26px"),it.fillText("DRIVE  STUDIO  \xB7  KUMASI",_t/2,q*.86)}),m=new Te({color:"#000",emissive:"#F2E6CF",emissiveMap:p,emissiveIntensity:2.4,transparent:!0,alphaMap:p,roughness:1});p.colorSpace=Vn;let M=new ie(new Ue(9.6,3.36),m);M.position.set(0,5.5,-13.55),M.userData.click="sign",e.add(M),n.push(M);let d=new ie(new Ue(11,4.2),new Ln({color:"#BBA783",transparent:!0,opacity:.08,depthWrite:!1}));d.position.set(0,5.5,-13.62),e.add(d);let g=new Te({color:"#fff",emissive:"#fff8ee",emissiveIntensity:1.4}),S=[];for(let it of[-6,-3,0,3,6]){let _t=c(.18,.05,18,it,9.3,0,g);S.push(_t)}let w=new ie(new wi(4.6,.06,8,96),g);w.rotation.x=Math.PI/2,w.position.y=9.2,e.add(w);let y=new Qe;e.add(y);let C=new ie(new Dn(4.2,4.25,.1,96),new Ti({color:"#151515",roughness:.35,metalness:.3,clearcoat:.6}));C.position.y=.05,C.receiveShadow=!0,y.add(C);let E=new ie(new wi(4.26,.018,6,160),new Te({color:"#BBA783",emissive:"#BBA783",emissiveIntensity:1.6}));E.rotation.x=Math.PI/2,E.position.y=.06,y.add(E);let x=new Qe;x.position.set(9.5,0,-11),e.add(x);let b=new ie(new Dn(.42,.32,.8,32),new Te({color:"#c9bba3",roughness:.7}));b.position.y=.4,b.castShadow=!0,x.add(b);let B=new Te({color:"#4f7a3e",roughness:.6,side:un}),A=[];for(let it=0;it<9;it++){let _t=new ie(new Zi(.5,12,8,0,Math.PI*2,0,Math.PI/2),B);_t.scale.set(.35,1.6,.07);let q=it/9*Math.PI*2;_t.position.set(Math.cos(q)*.12,.85,Math.sin(q)*.12),_t.rotation.set(Math.sin(q)*.5,-q,Math.cos(q)*.5),_t.castShadow=!0,x.add(_t),A.push(_t)}x.traverse(it=>{it.userData.click="plant"}),n.push(...x.children);let I=new ie(new Ue(2.2,3),new Te({roughness:.5,map:Cn(440,600,(it,_t,q)=>{it.fillStyle="#0f0f0f",it.fillRect(0,0,_t,q);let gt=it.createLinearGradient(0,0,_t,q);gt.addColorStop(0,"#BBA783"),gt.addColorStop(1,"#93AE7C"),it.fillStyle=gt,it.fillRect(30,30,_t-60,q*.55),it.fillStyle="#080808",it.font=`800 92px ${yn}`,it.fillText("Iconka",50,q*.42),it.font=`500 30px ${yn}`,it.fillText("Designs \xB7 since 2022",52,q*.5),it.fillStyle="#F2F0EA",it.font=`700 34px ${yn}`,it.fillText("Design work \u2192",40,q*.75),it.fillStyle="#9A948B",it.font=`400 24px ${yn}`,it.fillText("Brands, posters, menus",40,q*.82)})}));I.position.set(-15.75,3.4,-5),I.rotation.y=Math.PI/2,I.userData.click="poster",e.add(I),n.push(I);let N=c(.08,3.2,2.4,-15.8,3.4,-5,new Te({color:"#BBA783",metalness:.8,roughness:.3})),$=new ie(new Ue(3.6,5),new Te({roughness:.6,emissive:"#ffffff",emissiveIntensity:.9,emissiveMap:Cn(360,500,(it,_t,q)=>{let gt=it.createLinearGradient(0,0,0,q);gt.addColorStop(0,"#f0b26b"),gt.addColorStop(.55,"#d9774a"),gt.addColorStop(.56,"#3d4a3c"),gt.addColorStop(1,"#232a22"),it.fillStyle=gt,it.fillRect(0,0,_t,q),it.fillStyle="#1b1f1a";for(let mt=0;mt<9;mt++){let Ut=20+mt*38,wt=40+mt*37%70;it.fillRect(Ut,q*.56-wt,26,wt)}it.fillStyle="#F2F0EA",it.font=`800 46px ${yn}`,it.fillText("Accra 3D",26,70),it.font=`500 22px ${yn}`,it.fillText("Drive Liberation Road \u2192",28,104)})}));$.position.set(15.75,2.5,-4),$.rotation.y=-Math.PI/2,$.userData.click="accra",e.add($),n.push($),c(.1,5.3,.15,15.75,2.65,-5.9,l),c(.1,5.3,.15,15.75,2.65,-2.1,l);let F=new Qe;e.add(F);let X=new li(16777215,40,30,.55,.9,1.5);X.position.set(2.5,9,3),X.target.position.set(0,0,0),X.castShadow=!0,X.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),X.shadow.bias=-2e-4,X.shadow.normalBias=.02,X.shadow.radius=6,F.add(X,X.target);let V=new li(14674175,70,30,.7,.8,1.5);V.position.set(-6,7,-7),F.add(V,V.target);let Y=new li(16770760,35,30,.8,.9,1.5);Y.position.set(7,4,8),F.add(Y,Y.target);let pt=new Us(12568012,1709844,.35);F.add(pt);let rt=new Ri(16769720,18,14,2);rt.position.set(0,5.5,-12.5),F.add(rt);function ht(it){let _t=new Mi;_t.background=new ee(it==="night"?"#020305":"#0c0c0c");let q=(ce,qt)=>new Ln({color:new ee(ce).multiplyScalar(qt)}),gt=it==="sunset"?"#ffcf9e":it==="night"?"#9fb6ff":"#ffffff";for(let ce of[-6,-3,0,3,6]){let qt=new ie(new Xe(.5,.1,18),q(gt,it==="night"?2:8));qt.position.set(ce,9,0),_t.add(qt)}let mt=new ie(new Ue(10,5),q(it==="sunset"?"#ffb070":"#eef2f6",it==="night"?.6:3));mt.position.set(14,4,0),mt.rotation.y=-Math.PI/2,_t.add(mt);let Ut=new ie(new Ue(10,4),q("#d9d2c4",it==="night"?.3:1.6));Ut.position.set(-14,3.5,4),Ut.rotation.y=Math.PI/2,_t.add(Ut);let wt=new ie(new Ue(9,3),q("#F2E6CF",2.5));wt.position.set(0,5.5,-13.5),_t.add(wt);let Ot=new ie(new Ue(40,40),q("#2a2a2a",1));return Ot.rotation.x=-Math.PI/2,_t.add(Ot),_t}function at(it){let _t=it==="night",q=it==="sunset";X.color.set(q?"#ffc890":_t?"#cdd6f5":"#ffffff"),X.intensity=_t?14:q?36:40,V.color.set(q?"#ff9a5a":_t?"#8ea4e8":"#dfe8ff"),V.intensity=_t?60:70,Y.intensity=_t?8:35,pt.intensity=_t?.08:.35,g.emissiveIntensity=_t?.4:1.4,g.emissive.set(q?"#ffd9ae":_t?"#bcd0ff":"#fff8ee"),m.emissiveIntensity=_t?4:2.4,E.material.emissiveIntensity=_t?2.5:1.6,l.color.set(q?"#1a1612":"#141414")}return{group:e,clickables:n,table:y,sign:M,signM:m,led:E,leaves:A,plant:x,envScene:ht,setMood:at,mirror:o,lights:{key:X}}}function hd({quality:i}){let t=new Qe;t.name="course",t.visible=!1;let e=[],n=[],s=ld(42),r=[[0,-60],[70,-70],[118,-40],[125,10],[100,55],[55,62],[20,40],[-10,70],[-60,78],[-112,50],[-120,0],[-95,-45],[-50,-62]].map(([_,L])=>new D(_,0,L)),a=new qi(r,!0,"centripetal"),o=900,l=a.getSpacedPoints(o),c=9.5,u=Cn(512,512,(_,L,j)=>{_.fillStyle="#3b3c3d",_.fillRect(0,0,L,j),la(_,L,j,46,[1,1,1.03],11),_.fillStyle="#e9e6dc",_.fillRect(10,0,14,j),_.fillRect(L-24,0,14,j),_.fillStyle="#e9c45a";for(let W=0;W<j;W+=128)_.fillRect(L/2-5,W,10,64)});u.wrapS=u.wrapT=In;let f=(_,L,j,W,ot=-_,ut=_)=>{let Z=[],tt=[],Mt=[],O=0;for(let xt=0;xt<=o;xt++){let Tt=l[xt%o],Pt=l[(xt+1)%o],Jt=new D().subVectors(Pt,Tt).normalize(),le=new D(-Jt.z,0,Jt.x);if(xt>0&&(O+=l[xt%o].distanceTo(l[(xt-1)%o])),Z.push(Tt.x+le.x*ot,j,Tt.z+le.z*ot,Tt.x+le.x*ut,j,Tt.z+le.z*ut),tt.push(0,O/W,1,O/W),xt<o){let Et=xt*2;Mt.push(Et,Et+1,Et+2,Et+1,Et+3,Et+2)}}let st=new Be;st.setAttribute("position",new me(Z,3)),st.setAttribute("uv",new me(tt,2)),st.setIndex(Mt),st.computeVertexNormals();let nt=new ie(st,L);return nt.receiveShadow=!0,t.add(nt),nt};f(c/2,new Te({map:u,roughness:.82,side:un}),.02,10);let h=Cn(64,64,(_,L,j)=>{_.fillStyle="#c8302a",_.fillRect(0,0,L,j/2),_.fillStyle="#f2f0ea",_.fillRect(0,j/2,L,j/2)});h.wrapS=h.wrapT=In;let p=new Te({map:h,roughness:.6,side:un});f(0,p,.035,2.2,c/2,c/2+.9),f(0,p,.035,2.2,-c/2-.9,-c/2);let m=Cn(512,512,(_,L,j)=>{_.fillStyle="#4d6b33",_.fillRect(0,0,L,j),la(_,L,j,40,[.6,1,.45],13)});m.wrapS=m.wrapT=In,m.repeat.set(90,90);let M=new ie(new Ue(700,700),new Te({map:m,roughness:.95}));M.rotation.x=-Math.PI/2,M.receiveShadow=!0,t.add(M);let d=Cn(1024,410,(_,L,j)=>{_.fillStyle="#56763a",_.fillRect(0,0,L,j);for(let W=0;W<16;W++)_.fillStyle=W%2?"rgba(130,160,90,.35)":"rgba(40,70,25,.25)",_.fillRect(W*L/16,0,L/16,j);_.save(),_.font=`900 320px ${yn}`,_.textAlign="center",_.textBaseline="middle","letterSpacing"in _&&(_.letterSpacing="15px"),_.fillStyle="rgba(178,205,120,.95)",_.fillText("PKM",L/2,j/2+20),_.globalCompositeOperation="source-atop";for(let W=0;W<40;W++)_.fillStyle=W%2?"rgba(255,255,220,.18)":"rgba(30,60,10,.12)",_.fillRect(0,W*j/40,L,j/40);_.restore(),la(_,L,j,34,[.55,1,.4],17)}),g=8,S=74,w=30,y=new ie(new Ue(S,w),new Te({map:d,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1}));y.rotation.x=-Math.PI/2,y.position.set(-10,.01,g),y.receiveShadow=!0,t.add(y);let C={x:-10,z:g,hw:S/2-6,hh:w/2-4},E=[[118,-40],[70,-20],[40,10],[20,40]].map(([_,L])=>new D(_,0,L)),x=new qi(E),b=Cn(256,256,(_,L,j)=>{_.fillStyle="#9a4f2c",_.fillRect(0,0,L,j),la(_,L,j,60,[1,.55,.32],19)});b.wrapS=b.wrapT=In;let B=x.getSpacedPoints(120);{let _=[],L=[],j=[],W=0;for(let Z=0;Z<=120;Z++){let tt=B[Z],Mt=B[Math.min(120,Z+1)],O=B[Math.max(0,Z-1)],st=new D().subVectors(Mt,O).normalize(),nt=new D(-st.z,0,st.x);if(Z&&(W+=tt.distanceTo(O)),_.push(tt.x+nt.x*3.4,.012,tt.z+nt.z*3.4,tt.x-nt.x*3.4,.012,tt.z-nt.z*3.4),L.push(0,W/6,1,W/6),Z<120){let xt=Z*2;j.push(xt,xt+1,xt+2,xt+1,xt+3,xt+2)}}let ot=new Be;ot.setAttribute("position",new me(_,3)),ot.setAttribute("uv",new me(L,2)),ot.setIndex(j),ot.computeVertexNormals();let ut=new ie(ot,new Te({map:b,roughness:1,side:un}));ut.receiveShadow=!0,t.add(ut)}let A=(_,L,j)=>{let W=1e9,ot=0;for(let ut=0;ut<_.length;ut+=1){let Z=_[ut],tt=(Z.x-L)**2+(Z.z-j)**2;tt<W&&(W=tt,ot=ut)}return{d:Math.sqrt(W),i:ot}},I=l.filter((_,L)=>L%6===0),N=(_,L)=>{let j=A(I,_,L),W=1e9,ot=0;for(let ut=-8;ut<=8;ut++){let Z=((j.i*6+ut)%o+o)%o,tt=l[Z],Mt=(tt.x-_)**2+(tt.z-L)**2;Mt<W&&(W=Mt,ot=Z)}return{d:Math.sqrt(W),i:ot}},$=new Dn(.18,.28,1,7);$.translate(0,.5,0);let F=new Ur(1,1),X=new ai($,new Te({color:"#5a4430",roughness:1}),260),V=new ai(F,new Te({color:"#3f6b2c",roughness:.9,flatShading:!0}),260);X.castShadow=V.castShadow=!0;let Y=0,pt=new ye,rt=new en,ht=new ee;for(;Y<260;){let _=(s()-.5)*420,L=(s()-.5)*420;if(N(_,L).d<14||Math.abs(_-C.x)<C.hw+10&&Math.abs(L-C.z)<C.hh+10||A(B,_,L).d<8)continue;let j=4+s()*6,W=2+s()*2.4;pt.compose(new D(_,0,L),rt.identity(),new D(1,j,1)),X.setMatrixAt(Y,pt),pt.compose(new D(_,j+W*.4,L),rt.setFromAxisAngle(new D(0,1,0),s()*6),new D(W,W*.75,W)),V.setMatrixAt(Y,pt),V.setColorAt(Y,ht.setHSL(.27+s()*.06,.4+s()*.2,.22+s()*.1)),n.push({x:_,z:L,r:.45}),Y++}t.add(X,V);let at=l[0],it=l[3],_t=new D().subVectors(it,at).normalize(),q=Math.atan2(_t.x,_t.z),gt=new Qe;gt.position.copy(at),gt.rotation.y=q,t.add(gt);let mt=new Te({color:"#2b2d2f",metalness:.7,roughness:.4});for(let _ of[-1,1]){let L=new ie(new Xe(.4,6.4,.4),mt);L.position.set(_*(c/2+1.6),3.2,0),L.castShadow=!0,gt.add(L)}let Ut=Cn(2048,256,(_,L,j)=>{_.fillStyle="#0d0d0d",_.fillRect(0,0,L,j),_.fillStyle="#F2F0EA",_.font=`800 150px ${yn}`,_.textBaseline="middle",_.fillText("PKM",60,j/2+6),_.fillStyle="#BBA783",_.font=`600 84px ${yn}`,_.fillText("KUMASI PROVING GROUND",470,j/2+4)}),wt=new ie(new Xe(c+3.6,1.4,.5),[mt,mt,mt,mt,new Te({map:Ut,emissive:"#fff",emissiveMap:Ut,emissiveIntensity:.25}),new Te({map:Ut})]);wt.position.y=6.2,wt.castShadow=!0,gt.add(wt);let Ot=Cn(256,32,(_,L,j)=>{for(let W=0;W<16;W++)for(let ot=0;ot<2;ot++)_.fillStyle=(W+ot)%2?"#111":"#eee",_.fillRect(W*16,ot*16,16,16)}),ce=new ie(new Ue(c,1.2),new Te({map:Ot,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));ce.rotation.x=-Math.PI/2,ce.position.y=.03,gt.add(ce);let qt=Cn(300,200,(_,L,j)=>{_.fillStyle="#ce1126",_.fillRect(0,0,L,j/3),_.fillStyle="#fcd116",_.fillRect(0,j/3,L,j/3),_.fillStyle="#006b3f",_.fillRect(0,2*j/3,L,j/3),_.fillStyle="#000",_.beginPath();let W=L/2,ot=j/2,ut=26;for(let Z=0;Z<10;Z++){let tt=-Math.PI/2+Z*Math.PI/5,Mt=Z%2?ut*.4:ut;_.lineTo(W+Math.cos(tt)*Mt,ot+Math.sin(tt)*Mt)}_.fill()}),Zt=new Ue(3,2,20,4),se=new ie(Zt,new Te({map:qt,side:un,roughness:.8})),ct=new ie(new Dn(.06,.08,10,10),mt),dt=new Qe;dt.position.copy(at).add(new D(_t.z,0,-_t.x).multiplyScalar(c/2+6)),t.add(dt),ct.position.y=5,dt.add(ct),se.position.set(1.55,8.8,0),dt.add(se),se.castShadow=!0,n.push({x:dt.position.x,z:dt.position.z,r:.2});let yt=(_,L,j,W,ot,ut)=>{let Z=new Qe;Z.position.copy(W),Z.rotation.y=ot,t.add(Z);let tt=Cn(1024,512,(st,nt,xt)=>{st.fillStyle="#0c0c0c",st.fillRect(0,0,nt,xt),st.fillStyle=j,st.fillRect(0,xt-22,nt,22),st.fillStyle="#F2F0EA",st.font=`800 112px ${yn}`,st.fillText(_,60,200),st.fillStyle="#B3ACA1",st.font=`500 50px ${yn}`,st.fillText(L,64,300),st.fillStyle=j,st.font=`700 46px ${yn}`,st.fillText("Tap to visit \u2192",64,420)}),Mt=new ie(new Ue(10,5),new Te({map:tt,emissive:"#fff",emissiveMap:tt,emissiveIntensity:.18}));Mt.position.y=5,Mt.userData.click=ut,Z.add(Mt),e.push(Mt);for(let st of[-3,3]){let nt=new ie(new Xe(.3,5,.3),mt);nt.position.set(st,1.5,-.2),nt.castShadow=!0,Z.add(nt),n.push({x:W.x+Math.cos(ot)*st,z:W.z-Math.sin(ot)*st,r:.3})}let O=new ie(new Xe(10.2,5.2,.2),mt);return O.position.set(0,5,-.15),Z.add(O),Z};yt("Papa Kojo","Back to the portfolio","#BBA783",new D(30,0,-82),0,"home"),yt("Accra 3D","Drive Liberation Road","#93AE7C",new D(140,0,20),-Math.PI/2,"accra"),yt("Iconka Designs","Brands, posters, menus","#d9774a",new D(-136,0,10),Math.PI/2,"design");let Ft=[],It=new Tr(.22,.7,16);It.translate(0,.35,0);let Vt=new Te({color:"#ff6a1a",roughness:.5});for(let _=0;_<8;_++){let L=Math.round(o*.52)+_*7,j=l[L],W=l[L+1],ot=new D().subVectors(W,j).normalize(),ut=new D(-ot.z,0,ot.x),Z=new ie(It,Vt);Z.castShadow=!0,Z.position.copy(j).addScaledVector(ut,(_%2?1:-1)*1.6),t.add(Z),Ft.push({mesh:Z,home:Z.position.clone(),v:new D,spin:new D,knocked:!1})}let Bt=[];for(let _=0;_<7;_++){let L=Math.round(o*.06)+_*16,j=l[L],W=l[L+1],ot=new D().subVectors(W,j).normalize(),ut=new D(-ot.z,0,ot.x),Z=j.clone().addScaledVector(ut,c/2+2.5),tt=new ie(new Dn(.08,.12,8,8),mt);tt.position.copy(Z).setY(4),tt.castShadow=!0,t.add(tt);let Mt=new ie(new Xe(1.2,.15,.4),new Te({color:"#222",emissive:"#ffd9a0",emissiveIntensity:0}));Mt.position.copy(Z).addScaledVector(ut,-.6).setY(8),Mt.rotation.y=Math.atan2(ut.x,ut.z),t.add(Mt),Bt.push(Mt),n.push({x:Z.x,z:Z.z,r:.2})}let jt=[];for(let _=0;_<3;_++){let L=new Ri(16767392,0,26,1.6);L.position.copy(Bt[_*3].position).setY(7.6),t.add(L),jt.push(L)}let re=new Js;re.scale.setScalar(4500),t.add(re);let ne=new kr(16777215,2.6);ne.castShadow=!0,ne.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),Object.assign(ne.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:300}),ne.shadow.bias=-4e-4,ne.shadow.normalBias=.03,t.add(ne,ne.target);let H=new Us(13624319,4872752,.6);t.add(H);let Xt=new D;function ae(_){let L=_==="night"?-6:_==="sunset"?4:42,j=_==="sunset"?250:200,W=di.degToRad(90-L),ot=di.degToRad(j);Xt.setFromSphericalCoords(1,W,ot);let ut=re.material.uniforms;ut.sunPosition.value.copy(Xt),ut.turbidity.value=_==="sunset"?6:3,ut.rayleigh.value=_==="night"?.4:_==="sunset"?2.6:1.2,ut.mieCoefficient.value=.004,ut.mieDirectionalG.value=.85,ne.intensity=_==="night"?.05:_==="sunset"?1.9:2.7,ne.color.set(_==="sunset"?"#ffb27a":_==="night"?"#8aa0d8":"#fff4e6"),H.intensity=_==="night"?.14:_==="sunset"?.3:.45,H.color.set(_==="night"?"#38456a":"#cfe3ff");for(let Z of Bt)Z.material.emissiveIntensity=_==="night"?4:0;for(let Z of jt)Z.intensity=_==="night"?120:0}function he(_){ne.position.copy(_).addScaledVector(Xt.y>.05?Xt:new D(.3,1,.2).normalize(),120),ne.target.position.copy(_)}function Rt(_){let L=new Mi,j=new Js;j.scale.setScalar(1e3),Object.assign(j.material.uniforms.sunPosition.value,Xt),j.material.uniforms.sunPosition.value.copy(Xt),j.material.uniforms.rayleigh.value=re.material.uniforms.rayleigh.value,j.material.uniforms.turbidity.value=re.material.uniforms.turbidity.value,L.add(j);let W=new ie(new Ue(2e3,2e3),new Ln({color:_==="night"?"#050806":"#3d5228"}));return W.rotation.x=-Math.PI/2,W.position.y=-1,L.add(W),L}let Se=0;function zt(_,L){Se+=_;let j=Zt.attributes.position;for(let W=0;W<j.count;W++){let ot=j.getX(W)+1.5;j.setZ(W,Math.sin(ot*2.2-Se*6)*.12*ot/3)}j.needsUpdate=!0,Zt.computeVertexNormals();for(let W of Ft){if(L){let ot=W.mesh.position.x-L.x,ut=W.mesh.position.z-L.z,Z=Math.hypot(ot,ut),tt=Math.hypot(L.vx,L.vy);Z<1.5&&tt>1&&!W.knocked&&(W.knocked=!0,W.v.set(ot/Z*tt*.7+Math.sin(L.yaw)*tt*.5,2+tt*.15,ut/Z*tt*.7+Math.cos(L.yaw)*tt*.5),W.spin.set(s()*8,s()*8,s()*8),W.onHit&&W.onHit())}W.knocked&&(W.v.y-=9.8*_,W.mesh.position.addScaledVector(W.v,_),W.mesh.rotation.x+=W.spin.x*_,W.mesh.rotation.z+=W.spin.z*_,W.mesh.position.y<0&&(W.mesh.position.y=0,W.v.multiplyScalar(.5),W.v.y=Math.abs(W.v.y)*.3,W.spin.multiplyScalar(.6)))}}function Kt(){for(let _ of Ft)_.knocked=!1,_.mesh.position.copy(_.home),_.mesh.rotation.set(0,0,0)}let P=(_,L)=>{let j=N(_,L).d;return j<c/2?{mu:1.05,rough:.02,name:"asphalt"}:j<c/2+.9?{mu:.95,rough:.35,name:"kerb"}:A(B,_,L).d<3.4?{mu:.68,rough:.5,name:"dirt"}:{mu:.6,rough:.6,name:"grass"}};return{group:t,clickables:e,circles:n,curve:a,samples:l,start:{x:at.x,z:at.z,yaw:q},grip:P,trackDist:N,pkmZone:C,setMood:ae,follow:he,envScene:Rt,animate:zt,resetCones:Kt,cones:Ft,bounds:{minX:-200,maxX:200,minZ:-200,maxZ:200}}}var ud={BoxGeometry:Xe,BufferAttribute:bn,BufferGeometry:Be,CanvasTexture:Xi,CircleGeometry:wr,Color:ee,ColorManagement:_e,CylinderGeometry:Dn,ExtrudeGeometry:Nr,Float32BufferAttribute:me,Group:Qe,InstancedMesh:ai,LatheGeometry:Fr,Matrix4:ye,Mesh:ie,MeshBasicMaterial:Ln,MeshPhysicalMaterial:Ti,MeshStandardMaterial:Te,PlaneGeometry:Ue,PointLight:Ri,Points:yr,PointsMaterial:Ps,Quaternion:en,RepeatWrapping:In,SRGBColorSpace:sn,Shape:Ls,SphereGeometry:Zi,SpotLight:li,TorusGeometry:wi,Vector2:vt,Vector3:D};async function UM(i){let t=(K,St=document)=>St.querySelector(K),e=(K,St=document)=>[...St.querySelectorAll(K)],n=new URLSearchParams(location.search),s={get(K,St){try{let Dt=localStorage.getItem(K);return Dt?JSON.parse(Dt):St}catch{return St}},set(K,St){try{localStorage.setItem(K,JSON.stringify(St))}catch{}}},r=document.createElement("style");r.textContent=rd,document.head.appendChild(r);let a=t("#view"),o=n.get("quality")||s.get("pkm.drive.quality","auto"),l=["auto","high","low"].includes(o)?o:"auto",c=matchMedia("(max-width: 900px)"),u=(navigator.hardwareConcurrency||8)<=4||c.matches,f=l==="high",h=()=>f||l==="auto"&&!u&&!p?"high":"low",p=!1,m=new rl({canvas:a,antialias:!0,powerPreference:"high-performance"});i.watchCanvas(a),m.setPixelRatio(Math.min(devicePixelRatio,h()==="low"?1:1.5)),m.toneMapping=ts,m.toneMappingExposure=1,m.shadowMap.enabled=!0,m.shadowMap.type=$i;let M=new Mi,d=new rn(36,1,.1,6e3),g=new cl(d,a);Object.assign(g,{enableDamping:!0,dampingFactor:.07,minDistance:4,maxDistance:18,maxPolarAngle:Math.PI*.495,autoRotateSpeed:.6,enablePan:!1});let S=new Ws(m),w,y;f&&(w=new dl(m),w.addPass(new fl(M,d)),y=new Ys(new vt(256,256),.35,.4,1),w.addPass(y),w.addPass(new pl));let C=cd({quality:h(),reflections:f});M.add(C.group);let E=new gl;E.setMuted(s.get("pkm.drive.muted",!1));let x={};function b(K){if(x[K])return x[K];let St=ed(ud,K),Dt=s.get("pkm.drive.paint."+K,0);St.paintIndex=Number.isInteger(Dt)&&St.spec.paints[Dt]?Dt:0;let ve=St.spec.paints[St.paintIndex];return St.setPaint(ve.hex,ve.metal),St.root.traverse(Le=>{Le.isMesh&&(Le.userData.car=K)}),x[K]=St}let B=n.get("car")||s.get("pkm.drive.car","volta"),A=Object.hasOwn(Vc,B)?B:"volta",I="showroom",N="studio",$=()=>b(A),F=()=>A==="volta"?"regent":"volta";function X(){for(let Dt of Object.values(x))Dt.root.removeFromParent();let K=$();C.table.add(K.root),K.root.position.set(0,.1,0),K.root.rotation.set(0,0,0);for(let Dt of Object.values(x)){Dt.body.rotation.set(0,0,0),Dt.body.position.set(0,0,0);for(let ve of Dt.wheels)ve.pivot.rotation.y=0,ve.pivot.position.y=ve.baseY}let St=x[F()];St&&(C.group.add(St.root),St.root.position.set(-9.2,0,1.5),St.root.rotation.set(0,.6,0))}let V,Y=0;function pt(){if(!V){V=hd({quality:h()}),M.add(V.group),rt.collide=sd({bounds:V.bounds,circles:V.circles,carR:1,carHalf:1.7});for(let K of V.cones)K.onHit=()=>{Y++,E.thunk(.25),Y>=V.cones.length&&he("cones","Slalom","All eight cones down.")}}}let rt={grip:(K,St)=>I==="drive"?V.grip(K,St):{mu:1,rough:0,name:"floor"},respawn:K=>{let St=V.trackDist(K.x,K.z),Dt=V.samples[St.i],ve=V.samples[(St.i+3)%V.samples.length];return{x:Dt.x,z:Dt.z,yaw:Math.atan2(ve.x-Dt.x,ve.z-Dt.z)}},dustColor:10780762,night:!1},ht=ad(t("#stage")),at=new xl({THREE:ud,scene:M,camera:d,dom:a,vehicle:$(),audio:E,env:rt,onEvent:j});od(t("#stage"),at);let it={};function _t(){let K=I+":"+N;if(!it[K]){let St=I==="drive"?V.envScene(N):C.envScene(N);it[K]=S.fromScene(St,.03,.1,100,{size:128}).texture,St.traverse(Dt=>{Dt.geometry?.dispose(),Dt.material?.dispose()})}M.environment=it[K],M.environmentIntensity=I==="drive"?N==="night"?.12:.45:N==="night"?.55:1,I==="drive"?(M.background=null,M.fog=new mr(N==="night"?"#05070c":N==="sunset"?"#c98f6a":"#9fb6c8",N==="night"?.004:.0011),m.toneMappingExposure=N==="night"?.9:N==="sunset"?.7:.55):(M.background=new ee(N==="night"?"#050505":"#0a0a0a"),M.fog=null,m.toneMappingExposure=1),y&&(y.strength=N==="night"?.6:.35,y.enabled=I==="showroom"||N==="night"),rt.night=N==="night"}function q(K){N=K,C.setMood(K),V?.setMood(K),_t(),e("[data-mood]").forEach(St=>St.setAttribute("aria-pressed",St.dataset.mood===K)),K==="night"&&($().state.head=!0,yt())}let gt={hero:[[7.4,1.85,8.2],[-.9,.8,.4]],front:[[.4,1.3,8.2],[0,.9,0]],rear:[[-1.2,1.9,-8.2],[0,.9,0]],side:[[8.6,1.2,.3],[0,.9,0]],top:[[.4,10.5,1.2],[0,0,0]],wheel:[[3.2,.55,3.6],[1.2,.4,1.5]],interior:null},mt=null,Ut=!1;function wt(){g.minDistance=.01,g.maxDistance=.6,d.near=.02,d.updateProjectionMatrix()}function Ot(K,St,Dt=!1){if(i.reducedMotion.matches){mt=null,Dt&&wt(),d.position.copy(K),g.target.copy(St),g.update();return}mt={from:d.position.clone(),to:K,tf:g.target.clone(),tt:St,t0:performance.now(),interior:Dt}}function ce(K){if(Zt(!1),K==="interior")return qt();let[St,Dt]=gt[K],ve=C.table.rotation.y,Le=Je=>new D(Je[0],Je[1],Je[2]).applyAxisAngle(new D(0,1,0),ve),on=Le(St),Pe=Le(Dt);if(c.matches){K==="hero"&&(Pe.y-=.33);let Je=di.clamp(.9/d.aspect,1,1.72);on.sub(Pe).multiplyScalar(Je).add(Pe)}Ot(on,Pe),t("#interiorBtn").textContent="Interior",e("[data-cam]").forEach(Je=>Je.setAttribute("aria-pressed",Je.dataset.cam===K))}function qt(){Ut=!0,t("#interiorBtn").textContent="Exterior";let K=$();K.root.updateMatrixWorld(!0);let St=K.driverEye.clone();K.body.localToWorld(St);let Dt=new D(0,0,1).applyQuaternion(K.root.getWorldQuaternion(new en));Ot(St.clone().addScaledVector(Dt,-.02),St.clone().addScaledVector(Dt,.4),!0),e("[data-cam]").forEach(ve=>ve.setAttribute("aria-pressed",ve.dataset.cam==="interior")),K.state.interiorGlow=1}function Zt(K=!0){Ut&&(Ut=!1,g.minDistance=4,g.maxDistance=18,d.near=.1,d.updateProjectionMatrix(),$().state.interiorGlow=0,K&&ce("hero"))}let se=!i.reducedMotion.matches&&s.get("pkm.drive.spin",!1)===!0;t("#spin").setAttribute("aria-pressed",se),i.reducedMotion.addEventListener("change",K=>{K.matches&&ct(!1)});function ct(K){se=K,t("#spin").setAttribute("aria-pressed",K),s.set("pkm.drive.spin",K)}function dt(){let K=$().spec;t("#kicker").textContent=`${K.brand} \xB7 2027`,t("#vname").textContent=K.name,t("#trim").textContent=K.trim,t("#tagline").textContent=K.tagline,t("#chips").innerHTML=K.chips.map(St=>`<li>${St}</li>`).join(""),e("[data-car]").forEach(St=>St.setAttribute("aria-current",St.dataset.car===A)),t("#swatches").innerHTML=K.paints.map((St,Dt)=>`<button class="swatch" style="--sw:${St.hex}" data-paint="${Dt}" aria-pressed="${Dt===$().paintIndex}" aria-label="${St.name}" title="${St.name}"></button>`).join(""),t("#paintName").textContent=K.paints[$().paintIndex].name,t('[data-panel="tailgate"]').textContent=A==="volta"?"Tailgate":"Liftgate",t("#accraLink").href=`/accra3d/?drive=${A}&paint=${$().paintIndex}`,document.title=`PKM ${K.name} \xB7 Drive Studio \xB7 Papa Kojo`}function yt(){let K=$().state;for(let St of["head","left","right","hazard"])for(let Dt of e(`[data-light="${St}"]`))Dt.setAttribute("aria-pressed",!!K[St]);for(let[St,Dt]of Object.entries($().panels)){let ve=t(`[data-panel="${St}"]`);ve&&Dt.userData&&ve.setAttribute("aria-pressed",Dt.userData.target===1)}t("#engineBtn").textContent=at.startTimer?"Cancel start":at.dyn.engine?"Stop engine":"Start engine",t("#reverseBtn").textContent=at.dyn.reverse?"Shift to drive":"Shift to reverse",t("#reverseBtn").setAttribute("aria-pressed",at.dyn.reverse)}function Ft(K){K===A||I==="drive"||(Zt(!1),A=K,s.set("pkm.drive.car",K),at.setVehicle($()),N==="night"&&($().state.head=!0),X(),ce("hero"),dt(),yt())}e("[data-car]").forEach(K=>K.addEventListener("click",()=>Ft(K.dataset.car))),t("#swatches").addEventListener("click",K=>{let St=K.target.closest("[data-paint]");if(!St)return;let Dt=+St.dataset.paint,ve=$().spec.paints[Dt];$().setPaint(ve.hex,ve.metal),$().paintIndex=Dt,s.set("pkm.drive.paint."+A,Dt),dt(),E.click(2600,.08,.02),ve.name==="Kente Gold"&&he("gold","Kente Gold","The only paint with a story woven in.")}),e("[data-panel]").forEach(K=>K.addEventListener("click",()=>It(K.dataset.panel)));function It(K){let St=$().togglePanel(K);K.startsWith("front")||K.startsWith("rear")?St?E.latch():setTimeout(()=>E.thunk(.5),260):K==="hood"||K==="tailgate"?St?E.latch():setTimeout(()=>E.thunk(.7),420):E.click(1200,.12,.08),yt()}e("[data-light]").forEach(K=>K.addEventListener("click",()=>at.toggle(K.dataset.light))),t("#horn").addEventListener("click",()=>at.horn()),t("#engineBtn").addEventListener("click",()=>at.toggleEngine()),t("#interiorBtn").addEventListener("click",()=>ce(Ut?"hero":"interior")),e("[data-cam]").forEach(K=>K.addEventListener("click",()=>ce(K.dataset.cam))),e("[data-mood]").forEach(K=>K.addEventListener("click",()=>q(K.dataset.mood))),t("#spin").addEventListener("click",()=>ct(!se)),t("#quality").value=l,t("#quality").addEventListener("change",K=>{s.set("pkm.drive.quality",K.target.value);let St=new URL(location.href);St.searchParams.delete("quality"),St.searchParams.set("car",A),location.replace(St)});function Vt(){t("#mute").setAttribute("aria-pressed",!E.muted),t("#mute").textContent=E.muted?"Sound off":"Sound on"}t("#mute").addEventListener("click",()=>{E.setMuted(!E.muted),s.set("pkm.drive.muted",E.muted),Vt(),E.muted||E.unlock().catch(()=>{})}),Vt(),t("#fullscreen").hidden=!document.fullscreenEnabled,t("#fullscreen").addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{})});function Bt(K){t("#panel").dataset.open=K,t("#panelToggle").setAttribute("aria-expanded",K),t("#panelBody").inert=c.matches&&!K}Bt(!1),c.addEventListener("change",()=>Bt(!1)),t("#panelToggle").addEventListener("click",()=>Bt(t("#panel").dataset.open!=="true")),t(".skip").addEventListener("click",K=>{K.preventDefault(),Bt(!0),(I==="drive"?t("#exitDrive"):t("#panelBody").querySelector("button")).focus()}),t("#driveBtn").addEventListener("click",()=>{t("#driveBtn").disabled||(t("#driveBtn").disabled=!0,t("#driveBtn").textContent="Opening track\u2026",E.muted||E.unlock().catch(()=>{}),requestAnimationFrame(()=>requestAnimationFrame(()=>{if(i.running)try{re("drive")}catch{ot("The track couldn\u2019t open","Try again or drive through Accra.")}finally{t("#driveBtn").disabled=!1,t("#driveBtn").textContent="Test track"}})))}),t("#exitDrive").addEventListener("click",()=>re("showroom")),t("#camBtn").addEventListener("click",()=>at.cycleCamera()),t("#reverseBtn").addEventListener("click",()=>{at.shiftDirection(),a.focus({preventScroll:!0})}),t("#helpBtn").addEventListener("click",()=>{t("#keys").hidden=!t("#keys").hidden,t("#helpBtn").setAttribute("aria-expanded",!t("#keys").hidden)}),t("#resetBtn").addEventListener("click",()=>{at.recover(),jt()}),document.addEventListener("keydown",K=>{K.key==="Escape"&&(t("#secrets").hidden?I==="drive"?re("showroom"):t("#panel").dataset.open==="true"&&c.matches?(Bt(!1),t("#panelToggle").focus()):Ut&&ce("hero"):(Rt(!1),t("#secretsBtn").focus()))});function jt(){Y=0,V.resetCones()}function re(K,St=!0){if(K!==I){if(K==="drive"&&pt(),I=K,document.body.dataset.mode=K,K==="drive"){Zt(!1),mt=null,Bt(!1),Rt(!1),C.group.visible=!1,V.group.visible=!0,V.setMood(N),M.add($().root),g.enabled=!1,at.setEnabled(!0),at.cycleCamera("chase");for(let Dt of Object.keys($().panels))$().togglePanel(Dt,!1);at.place(V.start.x,V.start.z,V.start.yaw),jt(),ht.el.hidden=!1,at.toggleEngine(!0),t("#keys").hidden=!0,t("#helpBtn").setAttribute("aria-expanded","false"),ot("Kumasi test track",matchMedia("(pointer: coarse)").matches?"Use the pedals and arrows below.":"W to go, S to brake, V to shift. C changes the camera."),a.setAttribute("aria-label","Kumasi test track. W to accelerate, S to brake, V to shift.")}else at.setEnabled(!1),ht.el.hidden=!0,C.group.visible=!0,V.group.visible=!1,g.enabled=!0,d.near=.1,d.fov=36,d.updateProjectionMatrix(),E.cabin=0,X(),ce("hero"),a.setAttribute("aria-label","3D showroom. Drag to orbit and use the controls to inspect the car."),St&&t("#driveBtn").focus({preventScroll:!0});_t(),yt()}}let ne={sign:["The sign","Click the PKM sign three times."],plant:["Akwaaba","Water the plant in the corner."],horn:["Beep beep","Honk three times quickly."],pkm:["Field work","Find the name mowed into the infield."],cones:["Slalom","Knock over all eight cones."],gold:["Kente Gold","Find the paint with a story."],konami:["Disco","The classic code. \u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA"],ton:["Ton-up","Hit 120 km/h on the proving ground."]},H=s.get("pkm.drive.secrets",[]),Xt=new Set(Array.isArray(H)?H.filter(K=>Object.hasOwn(ne,K)):[]);function ae(){for(let K of document.querySelectorAll("[data-secret-count], #secretCount"))K.textContent=`${Xt.size}/${Object.keys(ne).length}`;t("#secretList").innerHTML=Object.entries(ne).map(([K,[St,Dt]])=>`<li data-found="${Xt.has(K)}"><strong>${Xt.has(K)?St:"Hidden"}</strong><span>${Dt}</span></li>`).join("")}function he(K,St,Dt){Xt.has(K)||(Xt.add(K),s.set("pkm.drive.secrets",[...Xt]),ae(),E.chime(),ot(`Secret found \xB7 ${Xt.size}/${Object.keys(ne).length}`,`${St}. ${Dt}`))}function Rt(K){t("#secrets").hidden=!K,t("#secretsBtn").setAttribute("aria-expanded",K),K&&t("#closeSecrets").focus()}t("#secretsBtn").addEventListener("click",()=>Rt(t("#secrets").hidden)),t("#closeSecrets").addEventListener("click",()=>{Rt(!1),t("#secretsBtn").focus()}),ae();let Se=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"],zt=0,Kt=0;addEventListener("keydown",K=>{zt=K.key.toLowerCase()===Se[zt]?zt+1:K.key.toLowerCase()===Se[0]?1:0,zt===Se.length&&(zt=0,i.reducedMotion.matches||(Kt=8),nt(),he("konami","Disco","Eight seconds of showroom party."))});let P=0,_=0,L=["#F2E6CF","#BBA783","#93AE7C","#ce1126","#fcd116","#006b3f"];function j(K,St){K==="horn"&&St>=3&&he("horn","Beep beep","Akwaaba! Kumasi heard you."),(K==="engine"||K==="direction")&&yt(),K==="shift-blocked"&&ot("Stop before shifting","Bring the car to a stop and release the accelerator."),nt(),K==="camera"&&(t("#camBtn").textContent="Camera: "+{chase:"Chase",far:"Far chase",cabin:"Cockpit",hood:"Bonnet",cine:"Cinematic",drone:"Drone"}[St],St==="drone"&&I==="drive"&&ot("Drone camera","Look down at the infield.")),K==="lights"&&yt()}let W;function ot(K,St){let Dt=t("#toast");Dt.innerHTML=`<strong>${K}</strong><span>${St}</span>`,Dt.hidden=!1,Dt.classList.remove("show"),Dt.offsetWidth,Dt.classList.add("show"),clearTimeout(W),W=setTimeout(()=>Dt.classList.remove("show"),4200)}let ut=new Gr,Z=new vt,tt=null;a.addEventListener("pointerdown",K=>{tt=[K.clientX,K.clientY]}),a.addEventListener("pointerup",K=>{if(!tt||Math.hypot(K.clientX-tt[0],K.clientY-tt[1])>6)return;let St=O(K);if(!St)return;let Dt=St.object,ve=Dt.userData.click;if(Dt.userData.panel&&Dt.userData.car===A&&I==="showroom")return It(Dt.userData.panel);if(Dt.userData.car&&Dt.userData.car!==A&&I==="showroom")return Ft(Dt.userData.car);if(ve==="sign")P++,C.signM.emissive.set(L[P%L.length]),E.click(800+P*120,.15,.05),P>=3&&he("sign","The sign","It cycles through the Ghana flag colours too.");else if(ve==="plant"){_++,E.chime([520,660]);for(let Le of C.leaves)Le.scale.y=Math.min(2.6,Le.scale.y*1.08);ot("Watering the plants\u2026",_<3?"It likes that.":"Look how it has grown."),_>=3&&he("plant","Akwaaba","Just like the portfolio\u2019s welcome screen.")}else ve==="poster"||ve==="design"?location.href="/design/":ve==="home"?location.href="/":ve==="accra"&&(location.href=t("#accraLink").href)});let Mt=0;a.addEventListener("pointermove",K=>{if(I!=="showroom"||K.pointerType==="touch")return;let St=performance.now();if(St-Mt<120)return;Mt=St;let Dt=O(K);a.style.cursor=Dt&&(Dt.object.userData.click||Dt.object.userData.car&&I==="showroom"&&(Dt.object.userData.panel||Dt.object.userData.car!==A))?"pointer":""});function O(K){let St=a.getBoundingClientRect();Z.set((K.clientX-St.left)/St.width*2-1,-((K.clientY-St.top)/St.height)*2+1),ut.setFromCamera(Z,d);let Dt=I==="showroom"?[...C.clickables,...Object.values(x).map(ve=>ve.root)]:V.clickables;return ut.intersectObjects(Dt,!0).find(ve=>ve.object.visible)||null}let st=0;function nt(){st=performance.now()+1600}function xt(){let K=a.clientWidth,St=a.clientHeight;!K||!St||(m.setSize(K,St,!1),w?.setSize(K,St),d.aspect=K/St,d.updateProjectionMatrix(),nt())}new ResizeObserver(xt).observe(a),g.addEventListener("change",nt),document.querySelector("[data-scene-controls]").addEventListener("click",nt),a.addEventListener("pointerup",nt);let Tt,Pt=0,Jt=0,le=0;function Et(K){w&&y.enabled?w.render(K):m.render(M,d)}function Qt(K){if(!i.running){at.setEnabled(!1);return}requestAnimationFrame(Qt);let St=Tt===void 0?0:(K-Tt)/1e3;if(Tt=K,document.hidden||St>.5)return;let Dt=Math.min(St,.1);if(I==="showroom"){let Le=$(),on=se&&!mt&&!Ut;if(on&&(C.table.rotation.y+=Dt*.12),mt){let ze=Math.min(1,(K-mt.t0)/1e3),fi=1-Math.pow(1-ze,3);d.position.lerpVectors(mt.from,mt.to,fi),g.target.lerpVectors(mt.tf,mt.tt,fi),mt.interior&&ze>.62&&d.near!==.02&&wt(),ze>=1&&(mt=null)}g.update();let Pe=Object.values(Le.panels).some(ze=>Math.abs(ze.userData.open-ze.userData.target)>.002),Je=Le.state;if(K>st&&!on&&!mt&&!Pe&&!at.dyn.engine&&!Je.left&&!Je.right&&!Je.hazard&&Kt<=0)return;if(Le.update(Dt,{engine:at.dyn.engine,night:N==="night"}),at.dyn.engine){let ze=at.dyn;ze.rpm+=(Le.spec.idle-ze.rpm)*Math.min(1,Dt*3),ze.throttle*=.9,Le.body.position.y=i.reducedMotion.matches?0:Math.sin(K*.05)*.0012,E.update(ze,Le.spec,Dt),Le.drawCluster(0,ze.rpm,"P")}if(Kt>0){Kt-=Dt;let ze=K/600%1;C.signM.emissive.setHSL(ze,.8,.6),C.led.material.emissive.setHSL((ze+.5)%1,.8,.55),C.lights.key.color.setHSL(ze,.7,.6),Kt<=0&&q(N)}}else{at.update(Dt);let Le=at.dyn;V.follow($().root.position),V.animate(Dt,Le),ht.update(at.hud(),Dt),Math.abs(Le.vx)*3.6>120&&he("ton","Ton-up","You reached 120 km/h on the test track.");let on=V.pkmZone;Math.abs(Le.x-on.x)<on.hw&&Math.abs(Le.z-on.z)<on.hh&&he("pkm","Field work","You found the PKM in the grass. Try the drone camera.")}if(Et(Dt),Jt++,Pt+=St*1e3,Pt<1400)return;le=Jt/Pt*1e3<30?le+1:0,Jt=0,Pt=0,l==="auto"&&!p&&le>=2&&(p=!0,m.setPixelRatio(Math.min(devicePixelRatio,.9)),xt())}i.progress("Setting up the showroom\u2026"),X(),dt();let de=n.get("mood");q(["studio","sunset","night"].includes(de)?de:"studio"),xt();let[kt,be]=gt.hero;d.position.set(...kt),g.target.set(...be),c.matches&&(g.target.y-=.33,d.position.sub(g.target).multiplyScalar(di.clamp(.9/d.aspect,1,1.72)).add(g.target)),g.update(),i.progress("Preparing the paint and lights\u2026");try{m.compileAsync&&await m.compileAsync(M,d)}catch{}if(Et(0),!i.running)return;yt(),i.ready();let Ee=K=>window.requestIdleCallback?requestIdleCallback(K,{timeout:2500}):setTimeout(K,600);Ee(()=>{if(!i.running)return;let K=b(F());K.root.traverse(St=>{St.isMesh&&(St.userData.car=K.spec.id)}),I==="showroom"&&X(),nt(),Ee(()=>{i.running&&!V&&!c.matches&&(pt(),V.group.visible=!1)})}),s.get("pkm.drive.tip",!1)||(setTimeout(()=>ot("Tip","Click a door, the bonnet or the PKM sign. The car beside the turntable swaps in when you click it."),1200),s.set("pkm.drive.tip",!0)),n.get("mode")==="drive"&&requestAnimationFrame(()=>{i.running&&re("drive",!1)}),requestAnimationFrame(Qt),window.__ds={scene:M,cars:x,drive:at,setMode:re,selectCar:Ft,setMood:q,flyTo:ce,get course(){return V},togglePanel:It,secret:he}}export{UM as startStudio};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
