var Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Th=0,nc=1,Eh=2;var $i=1,Ah=2,Os=3,Ii=0,nn=1,cn=2,li=0,Bs=1,Ji=2,ic=3,sc=4,Ch=5;var ji=100,Rh=101,Ph=102,Ih=103,Lh=104,Dh=200,Nh=201,Uh=202,Fh=203,rc=204,ac=205,Oh=206,Bh=207,zh=208,kh=209,Gh=210,Vh=211,Hh=212,Wh=213,Xh=214,Ua=0,Fa=1,Oa=2,Ss=3,Ba=4,za=5,ka=6,Ga=7,oc=0,qh=1,Yh=2,Xn=0,zr=1,kr=2,Gr=3,Qi=4,Vr=5,Hr=6,Wr=7;var lc=300,ts=301,zs=302,po=303,mo=304,Pn=1e3,Hn=1001,Va=1002,Je=1003,Zh=1004;var Xr=1005;var fn=1006,go=1007;var ci=1008;var mn=1009,cc=1010,hc=1011,ks=1012,_o=1013,zn=1014,Dn=1015,We=1016,xo=1017,vo=1018,es=1020,uc=35902,dc=35899,fc=1021,pc=1022,kn=1023,ei=1026,hi=1027,yo=1028,Mo=1029,Li=1030,So=1031;var bo=1033,qr=33776,Yr=33777,Zr=33778,Kr=33779,wo=35840,To=35841,Eo=35842,Ao=35843,Co=36196,Ro=37492,Po=37496,Io=37488,Lo=37489,$r=37490,Do=37491,No=37808,Uo=37809,Fo=37810,Oo=37811,Bo=37812,zo=37813,ko=37814,Go=37815,Vo=37816,Ho=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Zo=36492,Ko=36494,$o=36495,Jo=36283,jo=36284,Jr=36285,Qo=36286;var ar=2300,Ha=2301,Da=2302,Gl=2303,Vl=2400,Hl=2401,Wl=2402;var Kh=3200;var tl=0,$h=1,Gn="",tn="srgb",or="srgb-linear",lr="linear",we="srgb";var Na=7680;var Jh=519,jh=512,Qh=513,tu=514,mc=515,eu=516,nu=517,gc=518,_c=519,iu=35044;var xc="300 es",Rn=2e3,bs=2001;function ud(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function su(){let i=cr("canvas");return i.style.display="block",i}var Hc={},ws=null;function vc(...i){let t="THREE."+i.shift();ws?ws("log",t,...i):console.log(t,...i)}function ru(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ae(...i){i=ru(i);let t="THREE."+i.shift();if(ws)ws("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function he(...i){i=ru(i);let t="THREE."+i.shift();if(ws)ws("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vi(...i){let t=i.join(" ");t in Hc||(Hc[t]=!0,ae(...i))}function au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ou={[Ua]:Ua,[Oa]:ka,[Ba]:Ba,[Ss]:za,[Fa]:Fa,[ka]:Oa,[Ga]:Ga,[za]:Ss},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=1234567,nr=Math.PI/180,Hi=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function yc(i,t){return(i%t+t)%t}function fd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function pd(i,t,e){return i!==t?(e-i)/(t-i):0}function ir(i,t,e){return(1-e)*i+e*t}function md(i,t,e,n){return ir(i,t,1-Math.exp(-e*n))}function gd(i,t=1){return t-Math.abs(yc(i,t*2)-t)}function _d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yd(i,t){return i+Math.random()*(t-i)}function Md(i){return i*(.5-Math.random())}function Sd(i){i!==void 0&&(Wc=i);let t=Wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bd(i){return i*nr}function wd(i){return i*Hi}function Td(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ed(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*p,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*p,o*c);break;case"ZXZ":i.set(l*p,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lu(i,t){if(t.constructor===Float32Array)return i;let e=Sc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function cu(i,t){if(t.constructor===Float32Array)return i;let e=Sc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ui={DEG2RAD:nr,RAD2DEG:Hi,generateUUID:ns,clamp:pe,euclideanModulo:yc,mapLinear:fd,inverseLerp:pd,lerp:ir,damp:md,pingpong:gd,smoothstep:_d,smootherstep:xd,randInt:vd,randFloat:yd,randFloatSpread:Md,seededRandom:Sd,degToRad:bd,radToDeg:wd,isPowerOfTwo:Td,ceilPowerOfTwo:Ed,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:Ad,normalize:cu,denormalize:lu},yt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(p!==y||l!==d||c!==f||u!==g){let h=l*d+c*f+u*g+p*y;h<0&&(d=-d,f=-f,g=-g,y=-y,h=-h);let m=1-o;if(h<.9995){let S=Math.acos(h),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,p=p*m+y*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,p=p*m+y*o;let S=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=S,c*=S,u*=S,p*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*p+l*f-c*d,t[e+1]=l*g+u*d+c*p-o*f,t[e+2]=c*g+u*f+o*d-l*p,t[e+3]=u*g-o*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p-d*f*g;break;case"YXZ":this._x=d*u*p+c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p+d*f*g;break;case"ZXY":this._x=d*u*p-c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p-d*f*g;break;case"ZYX":this._x=d*u*p-c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p+d*f*g;break;case"YZX":this._x=d*u*p+c*f*g,this._y=c*f*p+d*u*g,this._z=c*u*g-d*f*p,this._w=c*u*p-d*f*g;break;case"XZY":this._x=d*u*p-c*f*g,this._y=c*f*p-d*u*g,this._z=c*u*g+d*f*p,this._w=c*u*p+d*f*g;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xl.copy(this).projectOnVector(t),this.sub(xl)}reflect(t){return this.sub(xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xl=new D,Xc=new je,ue=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],f=n[5],g=n[8],y=s[0],h=s[3],m=s[6],S=s[1],w=s[4],M=s[7],A=s[2],T=s[5],v=s[8];return r[0]=a*y+o*S+l*A,r[3]=a*h+o*w+l*T,r[6]=a*m+o*M+l*v,r[1]=c*y+u*S+p*A,r[4]=c*h+u*w+p*T,r[7]=c*m+u*M+p*v,r[2]=d*y+f*S+g*A,r[5]=d*h+f*w+g*T,r[8]=d*m+f*M+g*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*p+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=p*y,t[1]=(s*c-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vl.makeScale(t,e)),this}rotate(t){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vl.makeRotation(-t)),this}translate(t,e){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vl=new ue,qc=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cd(){let i={enabled:!0,workingColorSpace:or,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===we&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===we&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[or]:{primaries:t,whitePoint:n,transfer:lr,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:we,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var ge=Cd();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var os,Wa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=cr("canvas")),os.width=t.width,os.height=t.height;let s=os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=cr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rd=0,Ts=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yl(s[a].image)):r.push(yl(s[a]))}else r=yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var Pd=0,Ml=new D,pn=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=fn,a=ci,o=kn,l=mn,c=i.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ns(),this.name="",this.source=new Ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pn:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pn:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=lc;pn.DEFAULT_ANISOTROPY=1;var Le=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],f=l[5],g=l[9],y=l[2],h=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-y)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+y)<.1&&Math.abs(g+h)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,M=(f+1)/2,A=(m+1)/2,T=(u+d)/4,v=(p+y)/4,b=(g+h)/4;return w>M&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=v/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=v/r,s=b/r),this.set(n,s,r,e),this}let S=Math.sqrt((h-g)*(h-g)+(p-y)*(p-y)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(h-g)/S,this.y=(p-y)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xa=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ts(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends Xa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hr=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xe=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,p,d,f,g,y,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,d,f,g,y,h)}set(t,e,n,s,r,a,o,l,c,u,p,d,f,g,y,h){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=p,m[14]=d,m[3]=f,m[7]=g,m[11]=y,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*p,g=o*u,y=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,f=l*p,g=c*u,y=c*p;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,f=l*p,g=c*u,y=c*p;e[0]=d-y*o,e[4]=-a*p,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,f=a*p,g=o*u,y=o*p;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+y,e[1]=l*p,e[5]=y*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=y-d*p,e[8]=g*p+f,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*p+g,e[10]=d-y*p}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+y,e[5]=a*u,e[9]=f*p-g,e[2]=g*p-f,e[6]=o*u,e[10]=y*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Ld)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),pi.crossVectors(n,xn),pi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),pi.crossVectors(n,xn)),pi.normalize(),la.crossVectors(xn,pi),s[0]=pi.x,s[4]=la.x,s[8]=xn.x,s[1]=pi.y,s[5]=la.y,s[9]=xn.y,s[2]=pi.z,s[6]=la.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],f=n[13],g=n[2],y=n[6],h=n[10],m=n[14],S=n[3],w=n[7],M=n[11],A=n[15],T=s[0],v=s[4],b=s[8],O=s[12],E=s[1],I=s[5],N=s[9],Z=s[13],F=s[2],k=s[6],$=s[10],K=s[14],xt=s[3],at=s[7],rt=s[11],ht=s[15];return r[0]=a*T+o*E+l*F+c*xt,r[4]=a*v+o*I+l*k+c*at,r[8]=a*b+o*N+l*$+c*rt,r[12]=a*O+o*Z+l*K+c*ht,r[1]=u*T+p*E+d*F+f*xt,r[5]=u*v+p*I+d*k+f*at,r[9]=u*b+p*N+d*$+f*rt,r[13]=u*O+p*Z+d*K+f*ht,r[2]=g*T+y*E+h*F+m*xt,r[6]=g*v+y*I+h*k+m*at,r[10]=g*b+y*N+h*$+m*rt,r[14]=g*O+y*Z+h*K+m*ht,r[3]=S*T+w*E+M*F+A*xt,r[7]=S*v+w*I+M*k+A*at,r[11]=S*b+w*N+M*$+A*rt,r[15]=S*O+w*Z+M*K+A*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],f=t[14],g=t[3],y=t[7],h=t[11],m=t[15],S=l*f-c*d,w=o*f-c*p,M=o*d-l*p,A=a*f-c*u,T=a*d-l*u,v=a*p-o*u;return e*(y*S-h*w+m*M)-n*(g*S-h*A+m*T)+s*(g*w-y*A+m*v)-r*(g*M-y*T+h*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],f=t[11],g=t[12],y=t[13],h=t[14],m=t[15],S=e*o-n*a,w=e*l-s*a,M=e*c-r*a,A=n*l-s*o,T=n*c-r*o,v=s*c-r*l,b=u*y-p*g,O=u*h-d*g,E=u*m-f*g,I=p*h-d*y,N=p*m-f*y,Z=d*m-f*h,F=S*Z-w*N+M*I+A*E-T*O+v*b;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/F;return t[0]=(o*Z-l*N+c*I)*k,t[1]=(s*N-n*Z-r*I)*k,t[2]=(y*v-h*T+m*A)*k,t[3]=(d*T-p*v-f*A)*k,t[4]=(l*E-a*Z-c*O)*k,t[5]=(e*Z-s*E+r*O)*k,t[6]=(h*M-g*v-m*w)*k,t[7]=(u*v-d*M+f*w)*k,t[8]=(a*N-o*E+c*b)*k,t[9]=(n*E-e*N-r*b)*k,t[10]=(g*T-y*M+m*S)*k,t[11]=(p*M-u*T-f*S)*k,t[12]=(o*O-a*I-l*b)*k,t[13]=(e*I-n*O+s*b)*k,t[14]=(y*w-g*A-h*S)*k,t[15]=(u*A-p*w+d*S)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,d=r*c,f=r*u,g=r*p,y=a*u,h=a*p,m=o*p,S=l*c,w=l*u,M=l*p,A=n.x,T=n.y,v=n.z;return s[0]=(1-(y+m))*A,s[1]=(f+M)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(d+m))*T,s[6]=(h+S)*T,s[7]=0,s[8]=(g+w)*v,s[9]=(h-S)*v,s[10]=(1-(d+y))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),l=ls.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,u=1/o,p=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=p,Un.elements[9]*=p,Un.elements[10]*=p,e.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Rn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===bs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Rn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===bs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new D,Un=new xe,Id=new D(0,0,0),Ld=new D(1,1,1),pi=new D,la=new D,xn=new D,Zc=new xe,Kc=new je,ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dd=0,$c=new D,cs=new je,Kn=new xe,ca=new D,Ks=new D,Nd=new D,Ud=new je,Jc=new D(1,0,0),jc=new D(0,1,0),Qc=new D(0,0,1),th={type:"added"},Fd={type:"removed"},hs={type:"childadded",child:null},Sl={type:"childremoved",child:null},Ve=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new ni,n=new je,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ue}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Jc,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jc,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ks,ca,this.up):Kn.lookAt(ca,Ks,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Kn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(th),hs.child=t,this.dispatchEvent(hs),hs.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),Sl.child=t,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(th),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new D(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Od={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let h=e.getJointPose(y,n),m=this._getHandJoint(c,y);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function bl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=yc(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bl(a,r,t+1/3),this.g=bl(a,r,t),this.b=bl(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ge.workingToColorSpace(ln.copy(this),t),Math.round(pe(ln.r*255,0,255))*65536+Math.round(pe(ln.g*255,0,255))*256+Math.round(pe(ln.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(ln.copy(this),e);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=tn){ge.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,s=ln.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(ha);let n=ir(mi.h,ha.h,e),s=ir(mi.s,ha.s,e),r=ir(mi.l,ha.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new jt;jt.NAMES=hu;var ur=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var yi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new D,$n=new D,wl=new D,Jn=new D,us=new D,ds=new D,eh=new D,Tl=new D,El=new D,Al=new D,Cl=new Le,Rl=new Le,Pl=new Le,vi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),$n.subVectors(n,e),wl.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot($n),l=Fn.dot(wl),c=$n.dot($n),u=$n.dot(wl),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Cl.setScalar(0),Rl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(t,e),Rl.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Cl,r.x),a.addScaledVector(Rl,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),$n.subVectors(t,e),Fn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Fn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;us.subVectors(s,n),ds.subVectors(r,n),Tl.subVectors(t,n);let l=us.dot(Tl),c=ds.dot(Tl);if(l<=0&&c<=0)return e.copy(n);El.subVectors(t,s);let u=us.dot(El),p=ds.dot(El);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(us,a);Al.subVectors(t,r);let f=us.dot(Al),g=ds.dot(Al);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ds,o);let h=u*g-f*p;if(h<=0&&p-u>=0&&f-g>=0)return eh.subVectors(r,s),o=(p-u)/(p-u+(f-g)),e.copy(s).addScaledVector(eh,o);let m=1/(h+y+d);return a=y*m,o=d*m,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),da.subVectors(this.max,$s),fs.subVectors(t.a,$s),ps.subVectors(t.b,$s),ms.subVectors(t.c,$s),gi.subVectors(ps,fs),_i.subVectors(ms,ps),Oi.subVectors(fs,ms);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Oi.z,Oi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Oi.z,0,-Oi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Oi.y,Oi.x,0];return!Il(e,fs,ps,ms,da)||(e=[1,0,0,0,1,0,0,0,1],!Il(e,fs,ps,ms,da))?!1:(fa.crossVectors(gi,_i),e=[fa.x,fa.y,fa.z],Il(e,fs,ps,ms,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},jn=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,ua=new Wn,fs=new D,ps=new D,ms=new D,gi=new D,_i=new D,Oi=new D,$s=new D,da=new D,fa=new D,Bi=new D;function Il(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bi.fromArray(i,r);let o=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ge=new D,pa=new yt,Bd=0,yn=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=t!==void 0?Sc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):cu(t,this.array)}};var dr=class extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fr=class extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}},zd=new Wn,Js=new D,Ll=new D,ii=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Ll)),this.expandByPoint(Js.copy(t.center).sub(Ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kd=0,Cn=new xe,Dl=new Ve,gs=new D,vn=new Wn,js=new Wn,Ke=new D,Be=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Dl.lookAt(t),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(vn.min,js.min),vn.expandByPoint(Ke),Ke.addVectors(vn.max,js.max),vn.expandByPoint(Ke)):(vn.expandByPoint(js.min),vn.expandByPoint(js.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),Ke.add(gs)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new D,l[O]=new D;let u=new D,p=new D,d=new D,f=new yt,g=new yt,y=new yt,h=new D,m=new D;function S(O,E,I){c[O]=c[E]=c[I]=1,u.fromBufferAttribute(n,O),p.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,E),y.fromBufferAttribute(r,I),p.sub(u),d.sub(u),g.sub(f),y.sub(f);let N=1/(g.x*y.y-y.x*g.y);isFinite(N)&&(h.copy(p).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(N),m.copy(d).multiplyScalar(g.x).addScaledVector(p,-y.x).multiplyScalar(N),o[O].add(h),o[E].add(h),o[I].add(h),l[O].add(m),l[E].add(m),l[I].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,E=w.length;O<E;++O){let I=w[O],N=I.start,Z=I.count;for(let F=N,k=N+Z;F<k;F+=3)S(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new D,A=new D,T=new D,v=new D;function b(O){T.fromBufferAttribute(s,O),v.copy(T);let E=o[O];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),A.crossVectors(v,E);let N=A.dot(l[O])<0?-1:1;a.setXYZW(O,M.x,M.y,M.z,N)}for(let O=0,E=n.count;O<E;++O)c[O]&&b(O);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,p=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),h=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,h),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,h),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let y=0,h=l.length;y<h;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new yn(d,u,p)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nl=new D,Gd=new D,Vd=new ue,dn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Nl.subVectors(n,e).cross(Gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vd.getNormalMatrix(t),s=this.coplanarPoint(Nl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Hd=0,si=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Bs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=ac,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new yt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Qn=new D,Ul=new D,ma=new D,ga=new D,Mi=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ul.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(Ul);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ma),o=ga.dot(this.direction),l=-ga.dot(ma),c=ga.lengthSq(),u=Math.abs(1-a*a),p,d,f,g;if(u>0)if(p=a*l-o,d=a*o-l,g=r*u,p>=0)if(d>=-g)if(d<=g){let y=1/u;p*=y,d*=y,f=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ul).addScaledVector(ma,d),f}intersectSphere(t,e){if(t.radius<0)return null;Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,h=e.z-a.z,m=n.x-a.x,S=n.y-a.y,w=n.z-a.z,M=Math.abs(l),A=Math.abs(c),T=Math.abs(u),v,b,O,E,I,N,Z,F,k,$,K,xt;if(M>=A&&M>=T?(O=l,N=p,k=g,xt=m,l>=0?(v=c,b=u,E=d,I=f,Z=y,F=h,$=S,K=w):(v=u,b=c,E=f,I=d,Z=h,F=y,$=w,K=S)):A>=T?(O=c,N=d,k=y,xt=S,c>=0?(v=u,b=l,E=f,I=p,Z=h,F=g,$=w,K=m):(v=l,b=u,E=p,I=f,Z=g,F=h,$=m,K=w)):(O=u,N=f,k=h,xt=w,u>=0?(v=l,b=c,E=p,I=d,Z=g,F=y,$=m,K=S):(v=c,b=l,E=d,I=p,Z=y,F=g,$=S,K=m)),O===0)return null;let at=v/O,rt=b/O,ht=1/O,it=E-at*N,mt=I-rt*N,X=Z-at*k,lt=F-rt*k,gt=$-at*xt,kt=K-rt*xt,St=gt*lt-kt*X,Lt=it*kt-mt*gt,fe=X*mt-lt*it;if(s){if(St<0||Lt<0||fe<0)return null}else if((St<0||Lt<0||fe<0)&&(St>0||Lt>0||fe>0))return null;let Yt=St+Lt+fe;if(Yt===0)return null;let Qt=ht*(St*N+Lt*k+fe*xt);return(Yt>0?Qt<0:Qt>0)?null:this.at(Qt/Yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nh=new xe,zi=new Mi,_a=new ii,ih=new D,xa=new D,va=new D,ya=new D,Fl=new D,Ma=new D,sh=new D,Sa=new D,se=class extends Ve{constructor(t=new Be,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(Fl.fromBufferAttribute(p,t),a?Ma.addScaledVector(Fl,u):Ma.addScaledVector(Fl.sub(e),u))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(_a.containsPoint(zi.origin)===!1&&(zi.intersectSphere(_a,ih)===null||zi.origin.distanceToSquared(ih)>(t.far-t.near)**2))&&(nh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(nh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let h=d[g],m=a[h.materialIndex],S=Math.max(h.start,f.start),w=Math.min(o.count,Math.min(h.start+h.count,f.start+f.count));for(let M=S,A=w;M<A;M+=3){let T=o.getX(M),v=o.getX(M+1),b=o.getX(M+2);s=ba(this,m,t,n,c,u,p,T,v,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let h=g,m=y;h<m;h+=3){let S=o.getX(h),w=o.getX(h+1),M=o.getX(h+2);s=ba(this,a,t,n,c,u,p,S,w,M),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let h=d[g],m=a[h.materialIndex],S=Math.max(h.start,f.start),w=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let M=S,A=w;M<A;M+=3){let T=M,v=M+1,b=M+2;s=ba(this,m,t,n,c,u,p,T,v,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let h=g,m=y;h<m;h+=3){let S=h,w=h+1,M=h+2;s=ba(this,a,t,n,c,u,p,S,w,M),s&&(s.faceIndex=Math.floor(h/3),e.push(s))}}}};function Wd(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ii,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:i}}function ba(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,xa),i.getVertexPosition(l,va),i.getVertexPosition(c,ya);let u=Wd(i,t,e,n,xa,va,ya,sh);if(u){let p=new D;vi.getBarycoord(sh,xa,va,ya,p),s&&(u.uv=vi.getInterpolatedAttribute(s,o,l,c,p,new yt)),r&&(u.uv1=vi.getInterpolatedAttribute(r,o,l,c,p,new yt)),a&&(u.normal=vi.getInterpolatedAttribute(a,o,l,c,p,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};vi.getNormal(xa,va,ya,d.normal),u.face=d,u.barycoord=p}return u}var pr=class extends pn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Je,u=Je,p,d){super(null,a,o,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mr=class extends yn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new xe,rh=new xe,wa=[],ah=new Wn,Xd=new xe,Qs=new se,tr=new ii,ri=class extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),ah.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(ah)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),tr.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),rh.multiplyMatrices(n,_s),Qs.matrixWorld=rh,Qs.raycast(t,wa);for(let a=0,o=wa.length;a<o;a++){let l=wa[a];l.instanceId=r,l.object=this,e.push(l)}wa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(s*this.count),s,this.count,yo,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ki=new ii,qd=new yt(.5,.5),Ta=new D,Si=class{constructor(t=new dn,e=new dn,n=new dn,s=new dn,r=new dn,a=new dn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],f=r[7],g=r[8],y=r[9],h=r[10],m=r[11],S=r[12],w=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,m-g,A-S).normalize(),s[1].setComponents(c+a,f+u,m+g,A+S).normalize(),s[2].setComponents(c+o,f+p,m+y,A+w).normalize(),s[3].setComponents(c-o,f-p,m-y,A-w).normalize(),n)s[4].setComponents(l,d,h,M).normalize(),s[5].setComponents(c-l,f-d,m-h,A-M).normalize();else if(s[4].setComponents(c-l,f-d,m-h,A-M).normalize(),e===Rn)s[5].setComponents(c+l,f+d,m+h,A+M).normalize();else if(e===bs)s[5].setComponents(l,d,h,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);let e=qd.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ta.x=s.normal.x>0?t.max.x:t.min.x,Ta.y=s.normal.y>0?t.max.y:t.min.y,Ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oh=new xe,Ya=class i{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];oh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(oh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Si),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Cs=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lh=new xe,Xl=new Mi,Ea=new ii,Aa=new D,gr=class extends Ve{constructor(t=new Be,e=new Cs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;lh.copy(s).invert(),Xl.copy(t.ray).applyMatrix4(lh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let h=c.getX(g);Aa.fromBufferAttribute(p,h),ch(Aa,h,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let g=d,y=f;g<y;g++)Aa.fromBufferAttribute(p,g),ch(Aa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ch(i,t,e,n,s,r,a){let o=Xl.distanceSqToPoint(i);if(o<e){let l=new D;Xl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var _r=class extends pn{constructor(t=[],e=ts,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wi=class extends pn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends pn{constructor(t,e,n=zn,s,r,a,o=Je,l=Je,c,u=ei,p=1){if(u!==ei&&u!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ts(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xr=class extends ai{constructor(t,e=zn,n=ts,s,r,a=Je,o=Je,l,c=ei){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vr=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},He=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(p,2));function g(y,h,m,S,w,M,A,T,v,b,O){let E=M/v,I=A/b,N=M/2,Z=A/2,F=T/2,k=v+1,$=b+1,K=0,xt=0,at=new D;for(let rt=0;rt<$;rt++){let ht=rt*I-Z;for(let it=0;it<k;it++){let mt=it*E-N;at[y]=mt*S,at[h]=ht*w,at[m]=F,c.push(at.x,at.y,at.z),at[y]=0,at[h]=0,at[m]=T>0?1:-1,u.push(at.x,at.y,at.z),p.push(it/v),p.push(1-rt/b),K+=1}}for(let rt=0;rt<b;rt++)for(let ht=0;ht<v;ht++){let it=d+ht+k*rt,mt=d+ht+k*(rt+1),X=d+(ht+1)+k*(rt+1),lt=d+(ht+1)+k*rt;l.push(it,mt,lt),l.push(mt,X,lt),xt+=6}o.addGroup(f,xt,O),f+=xt,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var yr=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,u=new yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let f=n+p/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ln=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],f=[],g=0,y=[],h=n/2,m=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new me(p,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function S(){let M=new D,A=new D,T=0,v=(e-t)/n;for(let b=0;b<=r;b++){let O=[],E=b/r,I=E*(e-t)+t;for(let N=0;N<=s;N++){let Z=N/s,F=Z*l+o,k=Math.sin(F),$=Math.cos(F);A.x=I*k,A.y=-E*n+h,A.z=I*$,p.push(A.x,A.y,A.z),M.set(k,v,$).normalize(),d.push(M.x,M.y,M.z),f.push(Z,1-E),O.push(g++)}y.push(O)}for(let b=0;b<s;b++)for(let O=0;O<r;O++){let E=y[O][b],I=y[O+1][b],N=y[O+1][b+1],Z=y[O][b+1];(t>0||O!==0)&&(u.push(E,I,Z),T+=3),(e>0||O!==r-1)&&(u.push(I,N,Z),T+=3)}c.addGroup(m,T,0),m+=T}function w(M){let A=g,T=new yt,v=new D,b=0,O=M===!0?t:e,E=M===!0?1:-1;for(let N=1;N<=s;N++)p.push(0,h*E,0),d.push(0,E,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=s;N++){let F=N/s*l+o,k=Math.cos(F),$=Math.sin(F);v.x=O*$,v.y=h*E,v.z=O*k,p.push(v.x,v.y,v.z),d.push(0,E,0),T.x=k*.5+.5,T.y=$*.5*E+.5,f.push(T.x,T.y),g++}for(let N=0;N<s;N++){let Z=A+N,F=I+N;M===!0?u.push(F,F+1,Z):u.push(F+1,F,Z),b+=3}c.addGroup(m,b,M===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mr=class i extends Ln{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Za=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new D,M=new D,A=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],w),f(e[T+1],M),f(e[T+2],A),l(w,M,A,S)}function l(S,w,M,A){let T=A+1,v=[];for(let b=0;b<=T;b++){v[b]=[];let O=S.clone().lerp(M,b/T),E=w.clone().lerp(M,b/T),I=T-b;for(let N=0;N<=I;N++)N===0&&b===T?v[b][N]=O:v[b][N]=O.clone().lerp(E,N/I)}for(let b=0;b<T;b++)for(let O=0;O<2*(T-b)-1;O++){let E=Math.floor(O/2);O%2===0?(d(v[b][E+1]),d(v[b+1][E]),d(v[b][E])):(d(v[b][E+1]),d(v[b+1][E+1]),d(v[b+1][E]))}}function c(S){let w=new D;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(S),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function u(){let S=new D;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let M=h(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;a.push(M,1-A)}g(),p()}function p(){for(let S=0;S<a.length;S+=6){let w=a[S+0],M=a[S+2],A=a[S+4],T=Math.max(w,M,A),v=Math.min(w,M,A);T>.9&&v<.1&&(w<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,w){let M=S*3;w.x=t[M+0],w.y=t[M+1],w.z=t[M+2]}function g(){let S=new D,w=new D,M=new D,A=new D,T=new yt,v=new yt,b=new yt;for(let O=0,E=0;O<r.length;O+=9,E+=6){S.set(r[O+0],r[O+1],r[O+2]),w.set(r[O+3],r[O+4],r[O+5]),M.set(r[O+6],r[O+7],r[O+8]),T.set(a[E+0],a[E+1]),v.set(a[E+2],a[E+3]),b.set(a[E+4],a[E+5]),A.copy(S).add(w).add(M).divideScalar(3);let I=h(A);y(T,E+0,S,I),y(v,E+2,w,I),y(b,E+4,M,I)}}function y(S,w,M,A){A<0&&S.x===1&&(a[w]=S.x-1),M.x===0&&M.z===0&&(a[w]=A/2/Math.PI+.5)}function h(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new yt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new xe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(pe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(pe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Rs=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new yt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*p+this.aX,c=d*p+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ka=class extends Rs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,p){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+p)+(l-o)/p;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var hh=new D,uh=new D,Ol=new bc,Bl=new bc,zl=new bc,Xi=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(uh.subVectors(s[0],s[1]).add(s[0]),c=uh);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(hh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=hh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(d),f),h=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),h<1e-4&&(h=y),Ol.initNonuniformCatmullRom(c.x,p.x,d.x,u.x,g,y,h),Bl.initNonuniformCatmullRom(c.y,p.y,d.y,u.y,g,y,h),zl.initNonuniformCatmullRom(c.z,p.z,d.z,u.z,g,y,h)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,p.x,d.x,u.x,this.tension),Bl.initCatmullRom(c.y,p.y,d.y,u.y,this.tension),zl.initCatmullRom(c.z,p.z,d.z,u.z,this.tension));return n.set(Ol.calc(l),Bl.calc(l),zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function dh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Yd(i,t){let e=1-i;return e*e*t}function Zd(i,t){return 2*(1-i)*i*t}function Kd(i,t){return i*i*t}function sr(i,t,e,n){return Yd(i,t)+Zd(i,e)+Kd(i,n)}function $d(i,t){let e=1-i;return e*e*e*t}function Jd(i,t){let e=1-i;return 3*e*e*i*t}function jd(i,t){return 3*(1-i)*i*i*t}function Qd(i,t){return i*i*i*t}function rr(i,t,e,n,s){return $d(i,t)+Jd(i,e)+jd(i,n)+Qd(i,s)}var Sr=class extends Mn{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$a=class extends Mn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(t,s.x,r.x,a.x,o.x),rr(t,s.y,r.y,a.y,o.y),rr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends Mn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends Mn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wr=class extends Mn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends Mn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(t,s.x,r.x,a.x),sr(t,s.y,r.y,a.y),sr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(dh(o,l.x,c.x,u.x,p.x),dh(o,l.y,c.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},ql=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:Xi,CubicBezierCurve:Sr,CubicBezierCurve3:$a,EllipseCurve:Rs,LineCurve:br,LineCurve3:Ja,QuadraticBezierCurve:wr,QuadraticBezierCurve3:ja,SplineCurve:Tr}),Qa=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ql[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Er=class extends Qa{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new br(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new wr(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Sr(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Tr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Rs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ps=class extends Er{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Er().fromJSON(s))}return this}};function tf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=uu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=af(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,p=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>p&&(p=g)}c=Math.max(u-o,p-l),c=c!==0?32767/c:0}return Ar(r,a,e,o,l,c,0),a}function uu(i,t,e,n,s){let r;if(s===_f(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=fh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=fh(a/n|0,i[a],i[a+1],r);return r&&Is(r,r.next)&&(Rr(r),r=r.next),r}function qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Is(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ar(i,t,e,n,s,r,a){if(!i)return;!a&&r&&uf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?nf(i,n,s,r):ef(i)){t.push(l.i,i.i,c.i),Rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=sf(qi(i),t),Ar(i,t,e,n,s,r,2)):a===2&&rf(i,t,e,n,s,r):Ar(qi(i),t,e,n,s,r,1);break}}}function ef(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=f&&er(s,o,r,l,a,c,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Oe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,p=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(u,p,d),y=Math.max(o,l,c),h=Math.max(u,p,d),m=Yl(f,g,t,e,n),S=Yl(y,h,t,e,n),w=i.prevZ,M=i.nextZ;for(;w&&w.z>=m&&M&&M.z<=S;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=h&&w!==s&&w!==a&&er(o,u,l,p,c,d,w.x,w.y)&&Oe(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=f&&M.x<=y&&M.y>=g&&M.y<=h&&M!==s&&M!==a&&er(o,u,l,p,c,d,M.x,M.y)&&Oe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=h&&w!==s&&w!==a&&er(o,u,l,p,c,d,w.x,w.y)&&Oe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=h&&M!==s&&M!==a&&er(o,u,l,p,c,d,M.x,M.y)&&Oe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function sf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Is(n,s)&&fu(n,e,e.next,s)&&Cr(n,s)&&Cr(s,n)&&(t.push(n.i,e.i,s.i),Rr(e),Rr(e.next),e=i=s),e=e.next}while(e!==i);return qi(e)}function rf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pf(a,o)){let l=pu(a,o);a=qi(a,a.next),l=qi(l,l.next),Ar(a,t,e,n,s,r,0),Ar(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function af(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=uu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ff(c))}s.sort(of);for(let r=0;r<s.length;r++)e=lf(s[r],e);return e}function of(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function lf(i,t){let e=cf(i,t);if(!e)return t;let n=pu(e,i);return qi(n,n.next),qi(e,e.next)}function cf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Is(i,e))return e;do{if(Is(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&du(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Cr(e,i)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&hf(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function hf(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function uf(i,t,e,n){let s=i;do s.z===0&&(s.z=Yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,df(s)}function df(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ff(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function du(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function er(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&du(i,t,e,n,s,r,a,o)}function pf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mf(i,t)&&(Cr(i,t)&&Cr(t,i)&&gf(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||Is(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Is(i,t){return i.x===t.x&&i.y===t.y}function fu(i,t,e,n){let s=Ra(Oe(i,t,e)),r=Ra(Oe(i,t,n)),a=Ra(Oe(e,n,i)),o=Ra(Oe(e,n,t));return!!(s!==r&&a!==o||s===0&&Ca(i,e,t)||r===0&&Ca(i,n,t)||a===0&&Ca(e,i,n)||o===0&&Ca(e,t,n))}function Ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ra(i){return i>0?1:i<0?-1:0}function mf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Cr(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function gf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pu(i,t){let e=Zl(i.i,i.x,i.y),n=Zl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fh(i,t,e,n){let s=Zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _f(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Kl=class{static triangulate(t,e,n=2){return tf(t,e,n)}},Gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ph(t),mh(n,t);let a=t.length;e.forEach(ph);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,mh(n,e[l]);let o=Kl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ph(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Pr=class i extends Be{constructor(t=new Ps([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,h=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:xf,w,M=!1,A,T,v,b;if(m){w=m.getSpacedPoints(u),M=!0,d=!1;let ct=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(u,ct),T=new D,v=new D,b=new D}d||(h=0,f=0,g=0,y=0);let O=o.extractPoints(c),E=O.shape,I=O.holes;if(!Gi.isClockWise(E)){E=E.reverse();for(let ct=0,ft=I.length;ct<ft;ct++){let wt=I[ct];Gi.isClockWise(wt)&&(I[ct]=wt.reverse())}}function Z(ct){let wt=10000000000000001e-36,Ot=ct[0];for(let Nt=1;Nt<=ct.length;Nt++){let Rt=Nt%ct.length,zt=ct[Rt],qt=zt.x-Ot.x,ee=zt.y-Ot.y,ie=qt*qt+ee*ee,G=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(Ot.x),Math.abs(Ot.y)),re=wt*G*G;if(ie<=re){ct.splice(Rt,1),Nt--;continue}Ot=zt}}Z(E),I.forEach(Z);let F=I.length,k=E;for(let ct=0;ct<F;ct++){let ft=I[ct];E=E.concat(ft)}function $(ct,ft,wt){return ft||he("ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(ft,wt)}let K=E.length;function xt(ct,ft,wt){let Ot,Nt,Rt,zt=ct.x-ft.x,qt=ct.y-ft.y,ee=wt.x-ct.x,ie=wt.y-ct.y,G=zt*zt+qt*qt,re=zt*ie-qt*ee;if(Math.abs(re)>Number.EPSILON){let ne=Math.sqrt(G),ve=Math.sqrt(ee*ee+ie*ie),Ut=ft.x-qt/ne,be=ft.y+zt/ne,Ht=wt.x-ie/ve,$t=wt.y+ee/ve,R=((Ht-Ut)*ie-($t-be)*ee)/(zt*ie-qt*ee);Ot=Ut+zt*R-ct.x,Nt=be+qt*R-ct.y;let _=Ot*Ot+Nt*Nt;if(_<=2)return new yt(Ot,Nt);Rt=Math.sqrt(_/2)}else{let ne=!1;zt>Number.EPSILON?ee>Number.EPSILON&&(ne=!0):zt<-Number.EPSILON?ee<-Number.EPSILON&&(ne=!0):Math.sign(qt)===Math.sign(ie)&&(ne=!0),ne?(Ot=-qt,Nt=zt,Rt=Math.sqrt(G)):(Ot=zt,Nt=qt,Rt=Math.sqrt(G/2))}return new yt(Ot/Rt,Nt/Rt)}let at=[];for(let ct=0,ft=k.length,wt=ft-1,Ot=ct+1;ct<ft;ct++,wt++,Ot++)wt===ft&&(wt=0),Ot===ft&&(Ot=0),at[ct]=xt(k[ct],k[wt],k[Ot]);let rt=[],ht,it=at.concat();for(let ct=0,ft=F;ct<ft;ct++){let wt=I[ct];ht=[];for(let Ot=0,Nt=wt.length,Rt=Nt-1,zt=Ot+1;Ot<Nt;Ot++,Rt++,zt++)Rt===Nt&&(Rt=0),zt===Nt&&(zt=0),ht[Ot]=xt(wt[Ot],wt[Rt],wt[zt]);rt.push(ht),it=it.concat(ht)}let mt;if(h===0)mt=Gi.triangulateShape(k,I);else{let ct=[],ft=[];for(let wt=0;wt<h;wt++){let Ot=wt/h,Nt=f*Math.cos(Ot*Math.PI/2),Rt=g*Math.sin(Ot*Math.PI/2)+y;for(let zt=0,qt=k.length;zt<qt;zt++){let ee=$(k[zt],at[zt],Rt);Lt(ee.x,ee.y,-Nt),Ot===0&&ct.push(ee)}for(let zt=0,qt=F;zt<qt;zt++){let ee=I[zt];ht=rt[zt];let ie=[];for(let G=0,re=ee.length;G<re;G++){let ne=$(ee[G],ht[G],Rt);Lt(ne.x,ne.y,-Nt),Ot===0&&ie.push(ne)}Ot===0&&ft.push(ie)}}mt=Gi.triangulateShape(ct,ft)}let X=mt.length,lt=g+y;for(let ct=0;ct<K;ct++){let ft=d?$(E[ct],it[ct],lt):E[ct];M?(v.copy(A.normals[0]).multiplyScalar(ft.x),T.copy(A.binormals[0]).multiplyScalar(ft.y),b.copy(w[0]).add(v).add(T),Lt(b.x,b.y,b.z)):Lt(ft.x,ft.y,0)}for(let ct=1;ct<=u;ct++)for(let ft=0;ft<K;ft++){let wt=d?$(E[ft],it[ft],lt):E[ft];M?(v.copy(A.normals[ct]).multiplyScalar(wt.x),T.copy(A.binormals[ct]).multiplyScalar(wt.y),b.copy(w[ct]).add(v).add(T),Lt(b.x,b.y,b.z)):Lt(wt.x,wt.y,p/u*ct)}for(let ct=h-1;ct>=0;ct--){let ft=ct/h,wt=f*Math.cos(ft*Math.PI/2),Ot=g*Math.sin(ft*Math.PI/2)+y;for(let Nt=0,Rt=k.length;Nt<Rt;Nt++){let zt=$(k[Nt],at[Nt],Ot);Lt(zt.x,zt.y,p+wt)}for(let Nt=0,Rt=I.length;Nt<Rt;Nt++){let zt=I[Nt];ht=rt[Nt];for(let qt=0,ee=zt.length;qt<ee;qt++){let ie=$(zt[qt],ht[qt],Ot);M?Lt(ie.x,ie.y+w[u-1].y,w[u-1].x+wt):Lt(ie.x,ie.y,p+wt)}}}gt(),kt();function gt(){let ct=s.length/3;if(d){let ft=0,wt=K*ft;for(let Ot=0;Ot<X;Ot++){let Nt=mt[Ot];fe(Nt[2]+wt,Nt[1]+wt,Nt[0]+wt)}ft=u+h*2,wt=K*ft;for(let Ot=0;Ot<X;Ot++){let Nt=mt[Ot];fe(Nt[0]+wt,Nt[1]+wt,Nt[2]+wt)}}else{for(let ft=0;ft<X;ft++){let wt=mt[ft];fe(wt[2],wt[1],wt[0])}for(let ft=0;ft<X;ft++){let wt=mt[ft];fe(wt[0]+K*u,wt[1]+K*u,wt[2]+K*u)}}n.addGroup(ct,s.length/3-ct,0)}function kt(){let ct=s.length/3,ft=0;St(k,ft),ft+=k.length;for(let wt=0,Ot=I.length;wt<Ot;wt++){let Nt=I[wt];St(Nt,ft),ft+=Nt.length}n.addGroup(ct,s.length/3-ct,1)}function St(ct,ft){let wt=ct.length;for(;--wt>=0;){let Ot=wt,Nt=wt-1;Nt<0&&(Nt=ct.length-1);for(let Rt=0,zt=u+h*2;Rt<zt;Rt++){let qt=K*Rt,ee=K*(Rt+1),ie=ft+Ot+qt,G=ft+Nt+qt,re=ft+Nt+ee,ne=ft+Ot+ee;Yt(ie,G,re,ne)}}}function Lt(ct,ft,wt){l.push(ct),l.push(ft),l.push(wt)}function fe(ct,ft,wt){Qt(ct),Qt(ft),Qt(wt);let Ot=s.length/3,Nt=S.generateTopUV(n,s,Ot-3,Ot-2,Ot-1);oe(Nt[0]),oe(Nt[1]),oe(Nt[2])}function Yt(ct,ft,wt,Ot){Qt(ct),Qt(ft),Qt(Ot),Qt(ft),Qt(wt),Qt(Ot);let Nt=s.length/3,Rt=S.generateSideWallUV(n,s,Nt-6,Nt-3,Nt-2,Nt-1);oe(Rt[0]),oe(Rt[1]),oe(Rt[3]),oe(Rt[1]),oe(Rt[2]),oe(Rt[3])}function Qt(ct){s.push(l[ct*3+0]),s.push(l[ct*3+1]),s.push(l[ct*3+2])}function oe(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ql[s.type]().fromJSON(s)),new i(n,t.options)}},xf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new yt(r,a),new yt(o,l),new yt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],p=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],h=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new yt(a,1-l),new yt(c,1-p),new yt(d,1-g),new yt(y,1-m)]:[new yt(o,1-l),new yt(u,1-p),new yt(f,1-g),new yt(h,1-m)]}};function vf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ir=class i extends Za{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Lr=class i extends Be{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,p=new D,d=new yt,f=new D,g=new D,y=new D,h=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:h=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-h,f.z=m*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:h=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-h,f.z=m*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let S=0;S<=e;S++){let w=n+S*u*s,M=Math.sin(w),A=Math.cos(w);for(let T=0;T<=t.length-1;T++){p.x=t[T].x*M,p.y=t[T].y,p.z=t[T].x*A,a.push(p.x,p.y,p.z),d.x=S/e,d.y=T/(t.length-1),o.push(d.x,d.y);let v=l[3*T+0]*M,b=l[3*T+1],O=l[3*T+0]*A;c.push(v,b,O)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){let M=w+S*t.length,A=M,T=M+t.length,v=M+t.length+1,b=M+1;r.push(A,T,b),r.push(v,b,T)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ue=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,d=e/l,f=[],g=[],y=[],h=[];for(let m=0;m<u;m++){let S=m*d-a;for(let w=0;w<c;w++){let M=w*p-r;g.push(M,-S,0),y.push(0,0,1),h.push(w/o),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let w=S+c*m,M=S+c*(m+1),A=S+1+c*(m+1),T=S+1+c*m;f.push(w,M,T),f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Yi=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new D,d=new D,f=[],g=[],y=[],h=[];for(let m=0;m<=n;m++){let S=[],w=m/n,M=a+w*o,A=t*Math.cos(M),T=Math.sqrt(t*t-A*A),v=0;m===0&&a===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let O=b/e,E=s+O*r;p.x=-T*Math.cos(E),p.y=A,p.z=T*Math.sin(E),g.push(p.x,p.y,p.z),d.copy(p).normalize(),y.push(d.x,d.y,d.z),h.push(O+v,1-w),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let w=u[m][S+1],M=u[m][S],A=u[m+1][S],T=u[m+1][S+1];(m!==0||a>0)&&f.push(w,M,T),(m!==n-1||l<Math.PI)&&f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bi=class i extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],p=[],d=new D,f=new D,g=new D;for(let y=0;y<=n;y++){let h=a+y/n*o;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(t+e*Math.cos(h))*Math.cos(S),f.y=(t+e*Math.cos(h))*Math.sin(S),f.z=e*Math.sin(h),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),p.push(m/s),p.push(y/n)}}for(let y=1;y<=n;y++)for(let h=1;h<=s;h++){let m=(s+1)*y+h-1,S=(s+1)*(y-1)+h-1,w=(s+1)*(y-1)+h,M=(s+1)*y+h;l.push(m,S,M),l.push(S,w,M)}this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(gh(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(gh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=is(i[e]);for(let s in n)t[s]=n[s]}return t}function gh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var bn={clone:is,merge:hn},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new yt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ls=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Se=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wi=class extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Vi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Vi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var to=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},no=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hl:r=t,o=2*e-n;break;case Wl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:a=t,l=2*n-e;break;case Wl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,h=y*g,m=-d*h+2*d*y-d*g,S=(1+d)*h+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-f)*h+(1.5+f)*y+.5*g,M=f*h-f*y;for(let A=0;A!==o;++A)r[A]=m*a[u+A]+S*a[c+A]+w*a[l+A]+M*a[p+A];return r}},io=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},so=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ro=class extends Ti{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-e)/(s-e),y=1-g;for(let h=0;h!==o;++h)r[h]=a[c+h]*y+a[l+h]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],h=a[l+g],m=f*d+g*2,S=p[m],w=p[m+1],M=t*d+g*2,A=u[M],T=u[M+1],v=wf(n,e,S,A,s);r[g]=mu(v,y,w,T,h)}return r}};function mu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function bf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function wf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=mu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=bf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xs(e,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xs(t.times,Array),values:xs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Pa(t.settings)&&(n.settings={inTangents:xs(t.settings.inTangents,Array),outTangents:xs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ar:e=this.InterpolantFactoryMethodDiscrete;break;case Ha:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case Gl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ae("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Pa(this.settings)&&(_h(this.settings.inTangents,t),_h(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Pa(this.settings)&&(xh(this.settings.inTangents,t),xh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(he("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(he("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){he("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){he("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&dd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){he("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,d=p-n,f=p+n;for(let g=0;g!==n;++g){let y=e[p+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _h(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function xh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Ha;var Ei=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=ar;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="color";var oo=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="number";var lo=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)je.slerpFlat(r,0,a,c-o,a,c,l);return r}},Dr=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=ar;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="vector";var ho=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gu=new ho,uo=class{constructor(t){this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zi=class extends Ve{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ds=class extends Zi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},kl=new xe,vh=new D,yh=new D,Ns=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(vh),yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(kl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===bs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ia=new D,La=new je,Vn=new D,Nr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ia,La,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ia,La,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new D,Mh=new yt,Sh=new yt,en=class extends Nr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Mh,Sh),e.subVectors(Sh,Mh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$l=class extends Ns{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Hi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},oi=class extends Zi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $l}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Jl=class extends Ns{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Ci=class extends Zi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends Nr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jl=class extends Ns{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Zi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new jl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vs=-90,ys=1,Us=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(vs,ys,t,e);s.layers=this.layers,this.add(s);let r=new en(vs,ys,t,e);r.layers=this.layers,this.add(r);let a=new en(vs,ys,t,e);a.layers=this.layers,this.add(a);let o=new en(vs,ys,t,e);o.layers=this.layers,this.add(o);let l=new en(vs,ys,t,e);l.layers=this.layers,this.add(l);let c=new en(vs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;t.isWebGLRenderer===!0?h=t.state.buffers.depth.getReversed():h=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),h&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fo=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Fr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Tf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tf(){this._document.hidden===!1&&this.reset()}var Tc="\\[\\]\\.:\\/",Ef=new RegExp("["+Tc+"]","g"),Ec="[^"+Tc+"]",Af="[^"+Tc.replace("\\.","")+"]",Cf=/((?:WC+[\/:])*)/.source.replace("WC",Ec),Rf=/(WCOD+)?/.source.replace("WCOD",Af),Pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),If=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),Lf=new RegExp("^"+Cf+Rf+Pf+If+"$"),Df=["material","materials","bones","map"],Ql=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ef,"")}static parseTrackName(t){let e=Lf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Df.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){he("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){he("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){he("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){he("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){he("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;he("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Ql;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B_=new Float32Array(1);var bh=new xe,Or=class{constructor(t,e,n=0,s=1/0){this.ray=new Mi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):he("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(t,e=!0,n=[]){return tc(t,this,n,e),n.sort(wh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tc(t[s],this,n,e);return n.sort(wh),n}};function wh(i,t){return i.distance-t.distance}function tc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)tc(r[a],t,e,!0)}}var Fs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ec=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Br=class extends Bn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ac(i,t,e,n){let s=Nf(n);switch(e){case fc:return i*t;case yo:return i*t/s.components*s.byteLength;case Mo:return i*t/s.components*s.byteLength;case Li:return i*t*2/s.components*s.byteLength;case So:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case kn:return i*t*4/s.components*s.byteLength;case bo:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:case Ao:return Math.max(i,16)*Math.max(t,8)/4;case wo:case Eo:return Math.max(i,8)*Math.max(t,8)/2;case Co:case Ro:case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:case $r:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Ko:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nf(i){switch(i){case mn:case cc:return{byteLength:1,components:1};case ks:case hc:case We:return{byteLength:2,components:1};case xo:case vo:return{byteLength:2,components:4};case zn:case _o:case Dn:return{byteLength:4,components:1};case uc:case dc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ff(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){let g=p[d],y=p[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,p[d]=y)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){let y=p[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ap=`#define PI 3.141592653589793
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
} // validated`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Np=`uniform sampler2D dfgLUT;
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
}`,Up=`
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
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
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
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
}`,Bm=`varying vec3 vWorldDirection;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,Qm=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,a0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
}`,l0=`#define TOON
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
}`,c0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:zf,alphamap_pars_fragment:kf,alphatest_fragment:Gf,alphatest_pars_fragment:Vf,aomap_fragment:Hf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Yf,beginnormal_vertex:Zf,bsdfs:Kf,iridescence_fragment:$f,bumpmap_pars_fragment:Jf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:ap,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:dp,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:vp,fog_pars_vertex:yp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ep,lights_pars_begin:Ap,lights_toon_fragment:Rp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Lp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Np,lights_fragment_begin:Up,lights_fragment_maps:Fp,lights_fragment_end:Op,lightprobes_pars_fragment:Bp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Vp,map_fragment:Hp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Kp,morphcolor_vertex:$p,morphnormal_vertex:Jp,morphtarget_pars_vertex:jp,morphtarget_vertex:Qp,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:hm,packing:um,premultiplied_alpha_fragment:dm,project_vertex:fm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:_m,shadowmap_pars_fragment:xm,shadowmap_pars_vertex:vm,shadowmap_vertex:ym,shadowmask_pars_fragment:Mm,skinbase_vertex:Sm,skinning_pars_vertex:bm,skinning_vertex:wm,skinnormal_vertex:Tm,specularmap_fragment:Em,specularmap_pars_fragment:Am,tonemapping_fragment:Cm,tonemapping_pars_fragment:Rm,transmission_fragment:Pm,transmission_pars_fragment:Im,uv_pars_fragment:Lm,uv_pars_vertex:Dm,uv_vertex:Nm,worldpos_vertex:Um,background_vert:Fm,background_frag:Om,backgroundCube_vert:Bm,backgroundCube_frag:zm,cube_vert:km,cube_frag:Gm,depth_vert:Vm,depth_frag:Hm,distance_vert:Wm,distance_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:Zm,linedashed_frag:Km,meshbasic_vert:$m,meshbasic_frag:Jm,meshlambert_vert:jm,meshlambert_frag:Qm,meshmatcap_vert:t0,meshmatcap_frag:e0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:a0,meshphysical_frag:o0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:h0,points_frag:u0,shadow_vert:d0,shadow_frag:f0,sprite_vert:p0,sprite_frag:m0},Xt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Yn={basic:{uniforms:hn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:hn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:hn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:hn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:hn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new jt(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:hn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:hn([Xt.points,Xt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:hn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:hn([Xt.common,Xt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:hn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:hn([Xt.sprite,Xt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:hn([Xt.common,Xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:hn([Xt.lights,Xt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Yn.physical={uniforms:hn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var el={r:0,b:0,g:0},g0=new xe,zu=new ue;zu.set(-1,0,0,0,1,0,0,0,1);function _0(i,t,e,n,s,r){let a=new jt(0),o=s===!0?0:1,l,c,u=null,p=0,d=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let M=S.backgroundBlurriness>0;w=t.get(w,M)}return w}function g(S){let w=!1,M=f(S);M===null?h(a,o):M&&M.isColor&&(h(M,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){let M=f(w);M&&M.isCubeTexture?(c===void 0&&(c=new se(new He(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:is(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=ge.getTransfer(M.colorSpace)!==we,(u!==M||p!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,p=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new se(new Ue(2,2),new ze({name:"BackgroundMaterial",uniforms:is(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ge.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,w){S.getRGB(el,wc(i)),e.buffers.color.setClear(el.r,el.g,el.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,h(a,o)},render:g,addToRenderList:y,dispose:m}}function x0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(I,N,Z,F,k){let $=!1,K=p(I,F,Z,N);r!==K&&(r=K,c(r.object)),$=f(I,F,Z,k),$&&g(I,F,Z,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(I,N,Z,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function p(I,N,Z,F){let k=F.wireframe===!0,$=n[N.id];$===void 0&&($={},n[N.id]=$);let K=I.isInstancedMesh===!0?I.id:0,xt=$[K];xt===void 0&&(xt={},$[K]=xt);let at=xt[Z.id];at===void 0&&(at={},xt[Z.id]=at);let rt=at[k];return rt===void 0&&(rt=d(l()),at[k]=rt),rt}function d(I){let N=[],Z=[],F=[];for(let k=0;k<e;k++)N[k]=0,Z[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Z,attributeDivisors:F,object:I,attributes:{},index:null}}function f(I,N,Z,F){let k=r.attributes,$=N.attributes,K=0,xt=Z.getAttributes();for(let at in xt)if(xt[at].location>=0){let ht=k[at],it=$[at];if(it===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),ht===void 0||ht.attribute!==it||it&&ht.data!==it.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function g(I,N,Z,F){let k={},$=N.attributes,K=0,xt=Z.getAttributes();for(let at in xt)if(xt[at].location>=0){let ht=$[at];ht===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor));let it={};it.attribute=ht,ht&&ht.data&&(it.data=ht.data),k[at]=it,K++}r.attributes=k,r.attributesNum=K,r.index=F}function y(){let I=r.newAttributes;for(let N=0,Z=I.length;N<Z;N++)I[N]=0}function h(I){m(I,0)}function m(I,N){let Z=r.newAttributes,F=r.enabledAttributes,k=r.attributeDivisors;Z[I]=1,F[I]===0&&(i.enableVertexAttribArray(I),F[I]=1),k[I]!==N&&(i.vertexAttribDivisor(I,N),k[I]=N)}function S(){let I=r.newAttributes,N=r.enabledAttributes;for(let Z=0,F=N.length;Z<F;Z++)N[Z]!==I[Z]&&(i.disableVertexAttribArray(Z),N[Z]=0)}function w(I,N,Z,F,k,$,K){K===!0?i.vertexAttribIPointer(I,N,Z,k,$):i.vertexAttribPointer(I,N,Z,F,k,$)}function M(I,N,Z,F){y();let k=F.attributes,$=Z.getAttributes(),K=N.defaultAttributeValues;for(let xt in $){let at=$[xt];if(at.location>=0){let rt=k[xt];if(rt===void 0&&(xt==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),xt==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),rt!==void 0){let ht=rt.normalized,it=rt.itemSize,mt=t.get(rt);if(mt===void 0)continue;let X=mt.buffer,lt=mt.type,gt=mt.bytesPerElement,kt=lt===i.INT||lt===i.UNSIGNED_INT||rt.gpuType===_o;if(rt.isInterleavedBufferAttribute){let St=rt.data,Lt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,fe=rt.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Yt=0;Yt<at.locationSize;Yt++)m(at.location+Yt,St.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Yt=0;Yt<at.locationSize;Yt++)h(at.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Yt=0;Yt<at.locationSize;Yt++)w(at.location+Yt,it/at.locationSize,lt,ht,Lt*gt,(fe+it/at.locationSize*Yt)*gt,kt)}else{if(rt.isInstancedBufferAttribute){for(let St=0;St<at.locationSize;St++)m(at.location+St,rt.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let St=0;St<at.locationSize;St++)h(at.location+St);i.bindBuffer(i.ARRAY_BUFFER,X);for(let St=0;St<at.locationSize;St++)w(at.location+St,it/at.locationSize,lt,ht,it*gt,it/at.locationSize*St*gt,kt)}}else if(K!==void 0){let ht=K[xt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(at.location,ht);break;case 3:i.vertexAttrib3fv(at.location,ht);break;case 4:i.vertexAttrib4fv(at.location,ht);break;default:i.vertexAttrib1fv(at.location,ht)}}}}S()}function A(){O();for(let I in n){let N=n[I];for(let Z in N){let F=N[Z];for(let k in F){let $=F[k];for(let K in $)u($[K].object),delete $[K];delete F[k]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let Z in N){let F=N[Z];for(let k in F){let $=F[k];for(let K in $)u($[K].object),delete $[K];delete F[k]}}delete n[I.id]}function v(I){for(let N in n){let Z=n[N];for(let F in Z){let k=Z[F];if(k[I.id]===void 0)continue;let $=k[I.id];for(let K in $)u($[K].object),delete $[K];delete k[I.id]}}}function b(I){for(let N in n){let Z=n[N],F=I.isInstancedMesh===!0?I.id:0,k=Z[F];if(k!==void 0){for(let $ in k){let K=k[$];for(let xt in K)u(K[xt].object),delete K[xt];delete k[$]}delete Z[F],Object.keys(Z).length===0&&delete n[N]}}}function O(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:h,disableUnusedAttributes:S}}function v0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function y0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==kn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let b=v===We&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==mn&&v!==Dn&&!b&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(ae("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&ae("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,maxSamples:A,samples:T}}function M0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new dn,o=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,f){let g=p.clippingPlanes,y=p.clipIntersection,h=p.clipShadows,m=i.get(p);if(!s||g===null||g.length===0||r&&!h)r?u(null):c();else{let S=r?0:n,w=S*4,M=m.clippingState||null;l.value=M,M=u(g,d,w,f);for(let A=0;A!==w;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,f,g){let y=p!==null?p.length:0,h=null;if(y!==0){if(h=l.value,g!==!0||h===null){let m=f+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(h===null||h.length<m)&&(h=new Float32Array(m));for(let w=0,M=f;w!==y;++w,M+=4)a.copy(p[w]).applyMatrix4(S,o),a.normal.toArray(h,M),h[M+3]=a.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,h}}var ta=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _r(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:li});r.uniforms.tEquirect.value=e;let a=new se(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=fn),new Us(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},_u=256,S0=3,b0=20,ku=256,Gu=16,w0=3,T0=new D,E0=new jt,Vs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Us(1,10,null),this._boxMesh=new se(new He(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=T0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(E0));let h=new Us(n,s,u);return h.position.copy(o),h.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=y,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(_u,Mc(t))}_fromTexture(t,e){t.mapping===ts||t.mapping===zs?this._setSize(t.image.length===0?_u:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=xu(t,!1,!1),n=Math.log2(t)-S0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ts||t.mapping===zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=A0(),this._integrationMaterial=C0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Gu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-w0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(ku*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=R0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function xu(i,t,e){return new ta(i,{minFilter:ci,generateMipmaps:t,type:We,colorSpace:or,depthBuffer:e})}function ea(i,t,e){return new ze({name:i,uniforms:t,vertexShader:_e.cube_vert,fragmentShader:e,side:nn,blending:li,depthTest:!1,depthWrite:!1})}function A0(){return ea("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ku}u

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
	`)}function C0(){return ea("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gu}},`

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
	`)}function R0(){return ea("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${b0}
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
	`)}function vu(){return ea("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function yu(){return ea("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===po||f===mo)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new ta(g.height);return y.fromEquirectangularTexture(i,d),t.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===po||f===mo,y=f===ts||f===zs;if(g||y){let h=e.get(d),m=h!==void 0?h.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Vs(i)),h=g?n.fromEquirectangular(d,h):n.fromCubemap(d,h),h.texture.pmremVersion=d.pmremVersion,e.set(d,h),h.texture;if(h!==void 0)return h.texture;{let S=d.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Vs(i)),h=g?n.fromEquirectangular(d):n.fromCubemap(d),h.texture.pmremVersion=d.pmremVersion,e.set(d,h),d.addEventListener("dispose",u),h.texture):null}}}return d}function o(d,f){return f===po?d.mapping=ts:f===mo&&(d.mapping=zs),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function I0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vi("WebGLRenderer: "+n+" extension not supported."),s}}}function L0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let h in g.attributes)t.remove(g.attributes[h]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function u(g){let y=g.attributes;for(let h in y)t.update(y[h],i.ARRAY_BUFFER)}function p(g){let y=g.index,h=g.attributes.position,m=0;if(h===void 0)return;let S=y!==null?y.array.length:h.array.length/3-1,w=h.count>=65535?fr:dr,M=new w(Math.ceil(S/3)*6,1),A=M.array;if(y!==null){let v=y.array;m=y.version;for(let b=0,O=0;b<S;b+=3){let E=v[b+0],I=v[b+1],N=v[b+2];A[O++]=E,A[O++]=I,A[O++]=I,A[O++]=N,A[O++]=N,A[O++]=E}}else{m=h.version;for(let v=0,b=0;v<S;v+=3){let O=v+0,E=v+1,I=v+2;A[b++]=O,A[b++]=E,A[b++]=E,A[b++]=I,A[b++]=I,A[b++]=O}}M.version=m;let T=r.get(g);T&&t.remove(T),r.set(g,M)}function d(g){let y=r.get(g);if(y){let h=g.index;h!==null&&y.version<h.version&&p(g)}else p(g);return r.get(g)}function f(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function D0(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,p*a,f),e.update(d,n,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,f);let y=0;for(let h=0;h<f;h++)y+=d[h];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function N0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:he("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function U0(i,t,e){let n=new WeakMap,s=new Le;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let O=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let M=o.attributes.position.count*w,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*A*4*p),v=new hr(T,M,A,p);v.type=Dn,v.needsUpdate=!0;let b=w*4;for(let E=0;E<p;E++){let I=h[E],N=m[E],Z=S[E],F=M*A*4*E;for(let k=0;k<I.count;k++){let $=k*b;f===!0&&(s.fromBufferAttribute(I,k),T[F+$+0]=s.x,T[F+$+1]=s.y,T[F+$+2]=s.z,T[F+$+3]=0),g===!0&&(s.fromBufferAttribute(N,k),T[F+$+4]=s.x,T[F+$+5]=s.y,T[F+$+6]=s.z,T[F+$+7]=0),y===!0&&(s.fromBufferAttribute(Z,k),T[F+$+8]=s.x,T[F+$+9]=s.y,T[F+$+10]=s.z,T[F+$+11]=Z.itemSize===4?s.w:1)}}d={count:p,texture:v,size:new yt(M,A)},n.set(o,d),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F0(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var O0={[zr]:"LINEAR_TONE_MAPPING",[kr]:"REINHARD_TONE_MAPPING",[Gr]:"CINEON_TONE_MAPPING",[Qi]:"ACES_FILMIC_TONE_MAPPING",[Hr]:"AGX_TONE_MAPPING",[Wr]:"NEUTRAL_TONE_MAPPING",[Vr]:"CUSTOM_TONE_MAPPING"};function B0(i,t,e,n,s,r){let a=new ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Be;u.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new me([0,2,0,0,2,0],2));let p=new Ls({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new se(u,p),f=new Ki(-1,1,1,-1,0,1),g=null,y=null,h=!1,m,S=null,w=[],M=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let v=0;v<w.length;v++){let b=w[v];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){w=A,M=w.length>0&&w[0].isRenderPass===!0;let T=a.width,v=a.height;w.length>0&&o===null&&(o=new ke(T,v,{type:We,depthBuffer:!1,stencilBuffer:!1}),l=new ke(T,v,{type:We,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(O=>O.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ai(T,v),r===!0&&(c.format=hi,c.type=es)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let O=0;O<w.length;O++){let E=w[O];E.setSize&&E.setSize(T,v),b&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(A,T){if(h||A.toneMapping===Xn&&w.length===0)return!1;if(S=T,T!==null){let v=T.width,b=T.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return M===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Xn,!0},this.hasRenderPass=function(){return M},this.end=function(A,T){A.toneMapping=m,h=!0;let v=a,b=o;for(let O=0;O<w.length;O++){let E=w[O];E.enabled!==!1&&(E.render(A,b,v,T),E.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,p.defines={},ge.getTransfer(g)===we&&(p.defines.SRGB_TRANSFER="");let O=O0[y];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(S),A.render(d,f),S=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var Vu=new pn,Hu=new ai(1,1),Wu=new xr(1),Xu=new hr,qu=new qa,Yu=new _r,Mu=[],Su=[],bu=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sl(i,t){let e=Su[t];e===void 0&&(e=new Int32Array(t),Su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function H0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Tu.set(n),i.uniformMatrix2fv(this.addr,!1,Tu),qe(e,n)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),qe(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),qe(e,n)}}function q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function rl(i){return i.version===0&&(i.compareFunction=_c,i.needsUpdate=!0),i}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=rl(Hu):r=Vu,e.setTexture2D(t||r,s)}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qu,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=rl(Wu):r=Yu,e.setTextureCube(t||r,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xu,s)}function sg(i){switch(i){case 5126:return z0;case 35664:return k0;case 35665:return G0;case 35666:return V0;case 35674:return H0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return K0;case 5125:return $0;case 36294:return J0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(i,t){i.uniform1fv(this.addr,t)}function ag(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function og(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function lg(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function cg(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hg(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ug(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dg(i,t){i.uniform1iv(this.addr,t)}function fg(i,t){i.uniform2iv(this.addr,t)}function pg(i,t){i.uniform3iv(this.addr,t)}function mg(i,t){i.uniform4iv(this.addr,t)}function gg(i,t){i.uniform1uiv(this.addr,t)}function _g(i,t){i.uniform2uiv(this.addr,t)}function xg(i,t){i.uniform3uiv(this.addr,t)}function vg(i,t){i.uniform4uiv(this.addr,t)}function yg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=rl(Hu):a=Vu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Mg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qu,r[a])}function Sg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=rl(Wu):a=Yu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function bg(i,t,e){let n=this.cache,s=t.length,r=sl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xu,r[a])}function wg(i){switch(i){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return bg}}var Pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}},Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wg(e.type)}},Lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function Eu(i,t){i.seq.push(t),i.map[t.id]=t}function Tg(i,t,e){let n=i.name,s=n.length;for(Cc.lastIndex=0;;){let r=Cc.exec(n),a=Cc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Eu(e,c===void 0?new Pc(o,i,t):new Ic(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Lc(o),Eu(e,p)),e=p}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Tg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Eg=37297,Ag=0;function Cg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Cu=new ue;function Rg(i){ge._getMatrix(Cu,ge.workingColorSpace,i);let t=`mat3( ${Cu.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ru(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Cg(i.getShaderSource(t),o)}else return r}function Pg(i,t){let e=Rg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ig={[zr]:"Linear",[kr]:"Reinhard",[Gr]:"Cineon",[Qi]:"ACESFilmic",[Hr]:"AgX",[Wr]:"Neutral",[Vr]:"Custom"};function Lg(i,t){let e=Ig[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nl=new D;function Dg(){ge.getLuminanceCoefficients(nl);let i=nl.x.toFixed(4),t=nl.y.toFixed(4),e=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function Ug(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qr(i){return i!==""}function Pu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(Og,Bg)}function Bg(i,t){let e=_e[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Dc(e)}var zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(i){return i.replace(zg,kg)}function kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Gg={[$i]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function Vg(i){return Gg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hg={[zs]:"ENVMAP_MODE_REFRACTION"};function Wg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xg={[oc]:"ENVMAP_BLENDING_MULTIPLY",[qh]:"ENVMAP_BLENDING_MIX",[Yh]:"ENVMAP_BLENDING_ADD"};function qg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xg[i.combine]||"ENVMAP_BLENDING_NONE"}function Yg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Vg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Wg(e),p=qg(e),d=Ng(e),f=Ug(r),g=s.createProgram(),y,h,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qr).join(`
`),y.length>0&&(y+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qr).join(`
`),h.length>0&&(h+=`
`)):(y=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),h=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?_e.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),a=Dc(a),a=Pu(a,e),a=Iu(a,e),o=Dc(o),o=Pu(o,e),o=Iu(o,e),a=Lu(a),o=Lu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,h=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=m+y+a,w=m+h+o,M=Au(s,s.VERTEX_SHADER,S),A=Au(s,s.FRAGMENT_SHADER,w);s.attachShader(g,M),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(E){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(M)||"",Z=s.getShaderInfoLog(A)||"",F=I.trim(),k=N.trim(),$=Z.trim(),K=!0,xt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,A);else{let at=Ru(s,M,"vertex"),rt=Ru(s,A,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+at+`
`+rt)}else F!==""?ae("WebGLProgram: Program Info Log:",F):(k===""||$==="")&&(xt=!1);xt&&(E.diagnostics={runnable:K,programLog:F,vertexShader:{log:k,prefix:y},fragmentShader:{log:$,prefix:h}})}s.deleteShader(M),s.deleteShader(A),v=new Gs(s,g),b=Fg(s,g)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,Eg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}var Zg=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uc(t),e.set(t,n)),n}},Uc=class{constructor(t){this.id=Zg++,this.code=t,this.usedTimes=0}};function Kg(i){return i===Li||i===$r||i===Jr}function $g(i,t,e,n,s,r){let a=new Es,o=new Nc,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,b,O,E,I,N){let Z=E.fog,F=I.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=t.get(v.envMap||k,$),xt=d[v.type],at=n.precision;v.precision!==null&&(at=n.getMaxPrecision(v.precision),at!==v.precision&&ae("WebGLProgram.getParameters:",v.precision,"not supported, using",at,"instead."));let rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ht=rt!==void 0?rt.length:0,it=0;F.morphAttributes.position!==void 0&&(it=1),F.morphAttributes.normal!==void 0&&(it=2),F.morphAttributes.color!==void 0&&(it=3);let mt,X,lt,gt;if(xt){let Gt=Yn[xt];mt=Gt.vertexShader,X=Gt.fragmentShader}else{mt=v.vertexShader,X=v.fragmentShader;let Gt=o.getVertexShaderStage(v),q=o.getFragmentShaderStage(v);o.update(v,Gt,q),lt=Gt.id,gt=q.id}let kt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Lt=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,Yt=!!v.map,Qt=!!v.matcap,oe=!!K,ct=oe&&K.isPMREMTexture===!0,ft=!!v.aoMap,wt=!!v.lightMap,Ot=!!v.bumpMap&&v.wireframe===!1,Nt=!!v.normalMap,Rt=!!v.displacementMap,zt=!!v.emissiveMap,qt=!!v.metalnessMap,ee=!!v.roughnessMap,ie=v.anisotropy>0,G=v.clearcoat>0,re=v.diffuseRoughness>0,ne=v.dispersion>0,ve=v.retroreflectivity>0,Ut=v.iridescence>0,be=v.sheen>0,Ht=v.transmission>0,$t=ie&&!!v.anisotropyMap,R=G&&!!v.clearcoatMap,_=G&&!!v.clearcoatNormalMap,L=G&&!!v.clearcoatRoughnessMap,J=re&&!!v.diffuseRoughnessMap,z=Ut&&!!v.iridescenceMap,ot=Ut&&!!v.iridescenceThicknessMap,dt=be&&!!v.sheenColorMap,Y=be&&!!v.sheenRoughnessMap,Q=!!v.specularMap,bt=!!v.specularColorMap,U=!!v.specularIntensityMap,et=Ht&&!!v.transmissionMap,st=Ht&&!!v.thicknessMap,vt=!!v.gradientMap,Tt=!!v.alphaMap,Dt=v.alphaTest>0,Zt=!!v.alphaHash,ce=!!v.extensions,Et=Xn;v.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Jt=ct?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,de={shaderID:xt,shaderType:v.type,shaderName:v.name,vertexShader:mt,fragmentShader:X,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:at,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&I.instanceColor!==null,instancingMorph:Lt&&I.morphTexture!==null,outputColorSpace:kt===null?i.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Qt,envMap:oe,envMapMode:oe&&K.mapping,envMapPMREM:ct,envMapMaxLod:ct?Jt.length-1:null,envMapSize:ct?Jt[0].width:null,aoMap:ft,lightMap:wt,bumpMap:Ot,normalMap:Nt,displacementMap:Rt,emissiveMap:zt,normalMapObjectSpace:Nt&&v.normalMapType===$h,normalMapTangentSpace:Nt&&v.normalMapType===tl,packedNormalMap:Nt&&v.normalMapType===tl&&Kg(v.normalMap.format),metalnessMap:qt,roughnessMap:ee,anisotropy:ie,anisotropyMap:$t,clearcoat:G,clearcoatMap:R,clearcoatNormalMap:_,clearcoatRoughnessMap:L,diffuseRoughness:re,diffuseRoughnessMap:J,dispersion:ne,retroreflection:ve,iridescence:Ut,iridescenceMap:z,iridescenceThicknessMap:ot,sheen:be,sheenColorMap:dt,sheenRoughnessMap:Y,specularMap:Q,specularColorMap:bt,specularIntensityMap:U,transmission:Ht,transmissionMap:et,thicknessMap:st,gradientMap:vt,opaque:v.transparent===!1&&v.blending===Bs&&v.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Dt,alphaHash:Zt,combine:v.combine,mapUv:Yt&&f(v.map.channel),aoMapUv:ft&&f(v.aoMap.channel),lightMapUv:wt&&f(v.lightMap.channel),bumpMapUv:Ot&&f(v.bumpMap.channel),normalMapUv:Nt&&f(v.normalMap.channel),displacementMapUv:Rt&&f(v.displacementMap.channel),emissiveMapUv:zt&&f(v.emissiveMap.channel),metalnessMapUv:qt&&f(v.metalnessMap.channel),roughnessMapUv:ee&&f(v.roughnessMap.channel),anisotropyMapUv:$t&&f(v.anisotropyMap.channel),clearcoatMapUv:R&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:_&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:J&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:z&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(v.sheenRoughnessMap.channel),specularMapUv:Q&&f(v.specularMap.channel),specularColorMapUv:bt&&f(v.specularColorMap.channel),specularIntensityMapUv:U&&f(v.specularIntensityMap.channel),transmissionMapUv:et&&f(v.transmissionMap.channel),thicknessMapUv:st&&f(v.thicknessMap.channel),alphaMapUv:Tt&&f(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Nt||ie),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Yt||Tt),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&Nt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:St,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:it,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(Gt=>Gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&ge.getTransfer(v.map.colorSpace)===we,decodeVideoTextureEmissive:zt&&v.emissiveMap.isVideoTexture===!0&&ge.getTransfer(v.emissiveMap.colorSpace)===we,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===cn,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function y(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)b.push(O),b.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(h(b,v),m(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function h(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function m(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){let b=d[v.type],O;if(b){let E=Yn[b];O=bn.clone(E.uniforms)}else O=v.uniforms;return O}function w(v,b){let O=u.get(b);return O!==void 0?++O.usedTimes:(O=new Yg(i,b,v,s),c.push(O),u.set(b,O)),O}function M(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:w,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:T}}function Jg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,h,m){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:h,group:m},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=h,S.group=m),t++,S}function l(d,f,g,y,h,m,S){S.reversedDepth===!0&&(h=-h);let w=o(d,f,g,y,h,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(d,f,g,y,h,m){let S=o(d,f,g,y,h,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(d,f){e.length>1&&e.sort(d||jg),n.length>1&&n.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function p(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Qg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Uu,i.set(n,[a])):s>=r.length?(a=new Uu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function t_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new jt};break;case"SpotLight":e={position:new D,direction:new D,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var n_=0;function i_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function s_(i){let t=new t_,e=e_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new xe,a=new xe;function o(c){let u=0,p=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,y=0,h=0,m=0,S=0,w=0,M=0,A=0,T=0,v=0,b=0,O=0,E=0;c.sort(i_);for(let N=0,Z=c.length;N<Z;N++){let F=c[N],k=F.color,$=F.intensity,K=F.distance,xt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Li?xt=F.shadow.map.texture:xt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=k.r*$,p+=k.g*$,d+=k.b*$;else if(F.isLightProbe){for(let at=0;at<9;at++)n.probe[at].addScaledVector(F.sh.coefficients[at],$);E++}else if(F.isSunLight){let at=t.get(F);if(at.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let rt=F.shadow,ht=e.get(F);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[g]=ht,n.sunShadowMap[g]=xt;let it=rt.getViewportCount();for(let mt=0;mt<it;mt++)n.sunShadowMatrix[y+mt]=rt.getMatrix(mt),n.sunShadowCascade[y+mt]=rt._cascadeData[mt];y+=it,g++}n.sun[f]=at,f++}else if(F.isDirectionalLight){let at=t.get(F);if(at.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let rt=F.shadow,ht=e.get(F);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,n.directionalShadow[h]=ht,n.directionalShadowMap[h]=xt,n.directionalShadowMatrix[h]=F.shadow.matrix,A++}n.directional[h]=at,h++}else if(F.isSpotLight){let at=t.get(F);at.position.setFromMatrixPosition(F.matrixWorld),at.color.copy(k).multiplyScalar($),at.distance=K,at.coneCos=Math.cos(F.angle),at.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),at.decay=F.decay,n.spot[S]=at;let rt=F.shadow;if(F.map&&(n.spotLightMap[b]=F.map,b++,rt.updateMatrices(F),F.castShadow&&O++),n.spotLightMatrix[S]=rt.matrix,F.castShadow){let ht=e.get(F);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,n.spotShadow[S]=ht,n.spotShadowMap[S]=xt,v++}S++}else if(F.isRectAreaLight){let at=t.get(F);at.color.copy(k).multiplyScalar($),at.halfWidth.set(F.width*.5,0,0),at.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=at,w++}else if(F.isPointLight){let at=t.get(F);if(at.color.copy(F.color).multiplyScalar(F.intensity),at.distance=F.distance,at.decay=F.decay,F.castShadow){let rt=F.shadow,ht=e.get(F);ht.shadowIntensity=rt.intensity,ht.shadowBias=rt.bias,ht.shadowNormalBias=rt.normalBias,ht.shadowRadius=rt.radius,ht.shadowMapSize=rt.mapSize,ht.shadowCameraNear=rt.camera.near,ht.shadowCameraFar=rt.camera.far,n.pointShadow[m]=ht,n.pointShadowMap[m]=xt,n.pointShadowMatrix[m]=F.shadow.matrix,T++}n.point[m]=at,m++}else if(F.isHemisphereLight){let at=t.get(F);at.skyColor.copy(F.color).multiplyScalar($),at.groundColor.copy(F.groundColor).multiplyScalar($),n.hemi[M]=at,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==h||I.pointLength!==m||I.spotLength!==S||I.rectAreaLength!==w||I.hemiLength!==M||I.numSunShadows!==g||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==v||I.numSpotMaps!==b||I.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=h,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+b-O,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=E,I.sunLength=f,I.directionalLength=h,I.pointLength=m,I.spotLength=S,I.rectAreaLength=w,I.hemiLength=M,I.numSunShadows=g,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=v,I.numSpotMaps=b,I.numLightProbes=E,n.version=n_++)}function l(c,u){let p=0,d=0,f=0,g=0,y=0,h=0,m=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let M=c[S];if(M.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),p++}else if(M.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(M.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let A=n.hemi[h];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),h++}}}return{setup:o,setupView:l,state:n}}function Fu(i){let t=new s_(i),e=[],n=[],s=[];function r(p){u.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function r_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Fu(i),t.set(s,[o])):r>=a.length?(o=new Fu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o_=`uniform sampler2D shadow_pass;
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
}`,l_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],c_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ou=new xe,jr=new D,Rc=new D;function h_(i,t,e){let n=new Si,s=new yt,r=new yt,a=new Le,o=new to,l=new eo,c={},u=e.maxTextureSize,p={[Ii]:nn,[nn]:Ii,[cn]:cn},d=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:a_,fragmentShader:o_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new se(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$i;let m=this.type;this.render=function(T,v,b){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||T.length===0)return;this.type===Ah&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$i);let O=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(li),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let Z=m!==this.type;Z&&v.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=T.length;F<k;F++){let $=T[F],K=$.shadow;if(K===void 0){ae("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let xt=K.getFrameExtents();s.multiply(xt),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xt.x),s.x=r.x*xt.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xt.y),s.y=r.y*xt.y,K.mapSize.y=r.y));let at=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=at,K.map===null||Z===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Os){if($.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ke(s.x,s.y,{format:Li,type:We,minFilter:fn,magFilter:fn,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new ai(s.x,s.y,Dn),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=ei,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Je,K.map.depthTexture.magFilter=Je}else $.isPointLight?(K.map=new ta(s.x),K.map.depthTexture=new xr(s.x,zn)):(K.map=new ke(s.x,s.y),K.map.depthTexture=new ai(s.x,s.y,zn)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=ei,this.type===$i?(K.map.depthTexture.compareFunction=at?gc:mc,K.map.depthTexture.minFilter=fn,K.map.depthTexture.magFilter=fn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Je,K.map.depthTexture.magFilter=Je);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let rt=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();$.isPointLight!==!0&&K.updateMatrices($,b);let ht=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:b.layers;for(let it=0;it<rt;it++){let mt=K.getCamera(it);if($.isPointLight){let X=K.camera,lt=K.matrix,gt=$.distance||X.far;gt!==X.far&&(X.far=gt,X.updateProjectionMatrix()),jr.setFromMatrixPosition($.matrixWorld),X.position.copy(jr),Rc.copy(X.position),Rc.add(l_[it]),X.up.copy(c_[it]),X.lookAt(Rc),X.updateMatrixWorld(),lt.makeTranslation(-jr.x,-jr.y,-jr.z),Ou.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ou,X.coordinateSystem,X.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,it),i.clear();else{it===0&&(i.setRenderTarget(K.map),i.clear());let X=K.getViewport(it);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),N.viewport(a)}n=K.getFrustum(it),M(v,b,mt,$,ht,this.type)}K.isPointLightShadow!==!0&&this.type===Os&&S(K,b),K.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(O,E,I)};function S(T,v){let b=t.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ke(s.x,s.y,{format:Li,type:We}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(v,null,b,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(v,null,b,f,y,null)}function w(T,v,b,O){let E=null,I=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)E=I;else if(E=b.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let N=E.uuid,Z=v.uuid,F=c[N];F===void 0&&(F={},c[N]=F);let k=F[Z];k===void 0&&(k=E.clone(),F[Z]=k,v.addEventListener("dispose",A)),E=k}if(E.visible=v.visible,E.wireframe=v.wireframe,O===Os?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:p[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=i.properties.get(E);N.light=b}return E}function M(T,v,b,O,E,I){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Os)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let F=t.update(T),k=T.material;if(Array.isArray(k)){let $=F.groups;for(let K=0,xt=$.length;K<xt;K++){let at=$[K],rt=k[at.materialIndex];if(rt&&rt.visible){let ht=w(T,rt,O,I);T.onBeforeShadow(i,T,v,b,F,ht,at),i.renderBufferDirect(b,null,F,ht,T,at),T.onAfterShadow(i,T,v,b,F,ht,at)}}}else if(k.visible){let $=w(T,k,O,I);T.onBeforeShadow(i,T,v,b,F,$,null),i.renderBufferDirect(b,null,F,$,T,null),T.onAfterShadow(i,T,v,b,F,$,null)}}let Z=T.children;for(let F=0,k=Z.length;F<k;F++)M(Z[F],v,b,O,E,I)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let O=c[b],E=T.target.uuid;E in O&&(O[E].dispose(),delete O[E])}}}function u_(i,t){function e(){let U=!1,et=new Le,st=null,vt=new Le(0,0,0,0);return{setMask:function(Tt){st!==Tt&&!U&&(i.colorMask(Tt,Tt,Tt,Tt),st=Tt)},setLocked:function(Tt){U=Tt},setClear:function(Tt,Dt,Zt,ce,Et){Et===!0&&(Tt*=ce,Dt*=ce,Zt*=ce),et.set(Tt,Dt,Zt,ce),vt.equals(et)===!1&&(i.clearColor(Tt,Dt,Zt,ce),vt.copy(et))},reset:function(){U=!1,st=null,vt.set(-1,0,0,0)}}}function n(){let U=!1,et=!1,st=null,vt=null,Tt=null;return{setReversed:function(Dt){if(et!==Dt){let Zt=t.get("EXT_clip_control");Dt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),et=Dt;let ce=Tt;Tt=null,this.setClear(ce)}},getReversed:function(){return et},setTest:function(Dt){Dt?St(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(Dt){st!==Dt&&!U&&(i.depthMask(Dt),st=Dt)},setFunc:function(Dt){if(et&&(Dt=ou[Dt]),vt!==Dt){switch(Dt){case Ua:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Dt}},setLocked:function(Dt){U=Dt},setClear:function(Dt){Tt!==Dt&&(Tt=Dt,et&&(Dt=1-Dt),i.clearDepth(Dt))},reset:function(){U=!1,st=null,vt=null,Tt=null,et=!1}}}function s(){let U=!1,et=null,st=null,vt=null,Tt=null,Dt=null,Zt=null,ce=null,Et=null;return{setTest:function(Jt){U||(Jt?St(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(Jt){et!==Jt&&!U&&(i.stencilMask(Jt),et=Jt)},setFunc:function(Jt,de,Gt){(st!==Jt||vt!==de||Tt!==Gt)&&(i.stencilFunc(Jt,de,Gt),st=Jt,vt=de,Tt=Gt)},setOp:function(Jt,de,Gt){(Dt!==Jt||Zt!==de||ce!==Gt)&&(i.stencilOp(Jt,de,Gt),Dt=Jt,Zt=de,ce=Gt)},setLocked:function(Jt){U=Jt},setClear:function(Jt){Et!==Jt&&(i.clearStencil(Jt),Et=Jt)},reset:function(){U=!1,et=null,st=null,vt=null,Tt=null,Dt=null,Zt=null,ce=null,Et=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},p={},d={},f=new WeakMap,g=[],y=null,h=!1,m=null,S=null,w=null,M=null,A=null,T=null,v=null,b=new jt(0,0,0),O=0,E=!1,I=null,N=null,Z=null,F=null,k=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,xt=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(at)[1]),K=xt>=1):at.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),K=xt>=2);let rt=null,ht={},it=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),X=new Le().fromArray(it),lt=new Le().fromArray(mt);function gt(U,et,st,vt){let Tt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(U,Dt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<st;Zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(et+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Dt}let kt={};kt[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(i.DEPTH_TEST),a.setFunc(Ss),Ot(!1),Nt(nc),St(i.CULL_FACE),ft(li);function St(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Lt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function fe(U,et){return d[U]!==et?(i.bindFramebuffer(U,et),d[U]=et,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=et),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=et),!0):!1}function Yt(U,et){let st=g,vt=!1;if(U){st=f.get(et),st===void 0&&(st=[],f.set(et,st));let Tt=U.textures;if(st.length!==Tt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,Zt=Tt.length;Dt<Zt;Dt++)st[Dt]=i.COLOR_ATTACHMENT0+Dt;st.length=Tt.length,vt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,vt=!0);vt&&i.drawBuffers(st)}function Qt(U){return y!==U?(i.useProgram(U),y=U,!0):!1}let oe={[ji]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ph]:i.FUNC_REVERSE_SUBTRACT};oe[Ih]=i.MIN,oe[Lh]=i.MAX;let ct={[Dh]:i.ZERO,[Nh]:i.ONE,[Uh]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[ac]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Vh]:i.CONSTANT_COLOR,[Hh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(U,et,st,vt,Tt,Dt,Zt,ce,Et,Jt){if(U===li){h===!0&&(Lt(i.BLEND),h=!1);return}if(h===!1&&(St(i.BLEND),h=!0),U!==Ch){if(U!==m||Jt!==E){if((S!==ji||A!==ji)&&(i.blendEquation(i.FUNC_ADD),S=ji,A=ji),Jt)switch(U){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:he("WebGLState: Invalid blending: ",U);break}else switch(U){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ic:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",U);break}w=null,M=null,T=null,v=null,b.set(0,0,0),O=0,m=U,E=Jt}return}Tt=Tt||et,Dt=Dt||st,Zt=Zt||vt,(et!==S||Tt!==A)&&(i.blendEquationSeparate(oe[et],oe[Tt]),S=et,A=Tt),(st!==w||vt!==M||Dt!==T||Zt!==v)&&(i.blendFuncSeparate(ct[st],ct[vt],ct[Dt],ct[Zt]),w=st,M=vt,T=Dt,v=Zt),(ce.equals(b)===!1||Et!==O)&&(i.blendColor(ce.r,ce.g,ce.b,Et),b.copy(ce),O=Et),m=U,E=!1}function wt(U,et){U.side===cn?Lt(i.CULL_FACE):St(i.CULL_FACE);let st=U.side===nn;et&&(st=!st),Ot(st),U.blending===Bs&&U.transparent===!1?ft(li):ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let vt=U.stencilWrite;o.setTest(vt),vt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),zt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function Nt(U){U!==Th?(St(i.CULL_FACE),U!==N&&(U===nc?i.cullFace(i.BACK):U===Eh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),N=U}function Rt(U){U!==Z&&(K&&i.lineWidth(U),Z=U)}function zt(U,et,st){U?(St(i.POLYGON_OFFSET_FILL),(F!==et||k!==st)&&(F=et,k=st,a.getReversed()&&(et=-et,st=-st),i.polygonOffset(et,st))):Lt(i.POLYGON_OFFSET_FILL)}function qt(U){U?St(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function ee(U){U===void 0&&(U=i.TEXTURE0+$-1),rt!==U&&(i.activeTexture(U),rt=U)}function ie(U,et,st){st===void 0&&(rt===null?st=i.TEXTURE0+$-1:st=rt);let vt=ht[st];vt===void 0&&(vt={type:void 0,texture:void 0},ht[st]=vt),(vt.type!==U||vt.texture!==et)&&(rt!==st&&(i.activeTexture(st),rt=st),i.bindTexture(U,et||kt[U]),vt.type=U,vt.texture=et)}function G(){let U=ht[rt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(U){he("WebGLState:",U)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(U){he("WebGLState:",U)}}function ve(){try{i.texSubImage2D(...arguments)}catch(U){he("WebGLState:",U)}}function Ut(){try{i.texSubImage3D(...arguments)}catch(U){he("WebGLState:",U)}}function be(){try{i.compressedTexSubImage2D(...arguments)}catch(U){he("WebGLState:",U)}}function Ht(){try{i.compressedTexSubImage3D(...arguments)}catch(U){he("WebGLState:",U)}}function $t(){try{i.texStorage2D(...arguments)}catch(U){he("WebGLState:",U)}}function R(){try{i.texStorage3D(...arguments)}catch(U){he("WebGLState:",U)}}function _(){try{i.texImage2D(...arguments)}catch(U){he("WebGLState:",U)}}function L(){try{i.texImage3D(...arguments)}catch(U){he("WebGLState:",U)}}function J(U){return p[U]!==void 0?p[U]:i.getParameter(U)}function z(U,et){p[U]!==et&&(i.pixelStorei(U,et),p[U]=et)}function ot(U){X.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),X.copy(U))}function dt(U){lt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),lt.copy(U))}function Y(U,et){let st=c.get(et);st===void 0&&(st=new WeakMap,c.set(et,st));let vt=st.get(U);vt===void 0&&(vt=i.getUniformBlockIndex(et,U.name),i.uniformBlockBinding(et,vt,vt),st.set(U,vt))}function Q(U,et,st){let Tt=c.get(et).get(U);l[Tt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,Tt,st),l[Tt]=st)}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},rt=null,ht={},d={},l={},f=new WeakMap,g=[],y=null,h=!1,m=null,S=null,w=null,M=null,A=null,T=null,v=null,b=new jt(0,0,0),O=0,E=!1,I=null,N=null,Z=null,F=null,k=null,X.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:Lt,bindFramebuffer:fe,drawBuffers:Yt,useProgram:Qt,setBlending:ft,setMaterial:wt,setFlipSided:Ot,setCullFace:Nt,setLineWidth:Rt,setPolygonOffset:zt,setScissorTest:qt,activeTexture:ee,bindTexture:ie,unbindTexture:G,compressedTexImage2D:re,compressedTexImage3D:ne,texImage2D:_,texImage3D:L,pixelStorei:z,getParameter:J,updateUBOMapping:Y,uniformBlockBinding:Q,texStorage2D:$t,texStorage3D:R,texSubImage2D:ve,texSubImage3D:Ut,compressedTexSubImage2D:be,compressedTexSubImage3D:Ht,scissor:ot,viewport:dt,reset:bt}}function d_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap,p=new Set,d,f=new WeakMap,g=new Set,y=new FinalizationRegistry(R=>g.delete(R)),h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,_){return h?new OffscreenCanvas(R,_):cr("canvas")}function S(R,_,L){let J=1,z=$t(R);if((z.width>L||z.height>L)&&(J=L/Math.max(z.width,z.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ot=Math.floor(J*z.width),dt=Math.floor(J*z.height);d===void 0&&(d=m(ot,dt));let Y=_?m(ot,dt):d;return Y.width=ot,Y.height=dt,Y.getContext("2d").drawImage(R,0,0,ot,dt),ae("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+ot+"x"+dt+")."),Y}else return"data"in R&&ae("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),R;return R}function w(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,_,L,J,z,ot=!1){if(R!==null){if(i[R]!==void 0)return i[R];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt;J&&(dt=t.get("EXT_texture_norm16"),dt||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(L===i.FLOAT&&(Y=i.R32F),L===i.HALF_FLOAT&&(Y=i.R16F),L===i.UNSIGNED_BYTE&&(Y=i.R8),L===i.UNSIGNED_SHORT&&dt&&(Y=dt.R16_EXT),L===i.SHORT&&dt&&(Y=dt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.R8UI),L===i.UNSIGNED_SHORT&&(Y=i.R16UI),L===i.UNSIGNED_INT&&(Y=i.R32UI),L===i.BYTE&&(Y=i.R8I),L===i.SHORT&&(Y=i.R16I),L===i.INT&&(Y=i.R32I)),_===i.RG&&(L===i.FLOAT&&(Y=i.RG32F),L===i.HALF_FLOAT&&(Y=i.RG16F),L===i.UNSIGNED_BYTE&&(Y=i.RG8),L===i.UNSIGNED_SHORT&&dt&&(Y=dt.RG16_EXT),L===i.SHORT&&dt&&(Y=dt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RG8UI),L===i.UNSIGNED_SHORT&&(Y=i.RG16UI),L===i.UNSIGNED_INT&&(Y=i.RG32UI),L===i.BYTE&&(Y=i.RG8I),L===i.SHORT&&(Y=i.RG16I),L===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),L===i.UNSIGNED_INT&&(Y=i.RGB32UI),L===i.BYTE&&(Y=i.RGB8I),L===i.SHORT&&(Y=i.RGB16I),L===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),L===i.UNSIGNED_INT&&(Y=i.RGBA32UI),L===i.BYTE&&(Y=i.RGBA8I),L===i.SHORT&&(Y=i.RGBA16I),L===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_SHORT&&dt&&(Y=dt.RGB16_EXT),L===i.SHORT&&dt&&(Y=dt.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let Q=ot?lr:ge.getTransfer(z);L===i.FLOAT&&(Y=i.RGBA32F),L===i.HALF_FLOAT&&(Y=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Y=Q===we?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&dt&&(Y=dt.RGBA16_EXT),L===i.SHORT&&dt&&(Y=dt.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,_){let L;return R?_===null||_===zn||_===es?L=i.DEPTH24_STENCIL8:_===Dn?L=i.DEPTH32F_STENCIL8:_===ks&&(L=i.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===es?L=i.DEPTH_COMPONENT24:_===Dn?L=i.DEPTH_COMPONENT32F:_===ks&&(L=i.DEPTH_COMPONENT16),L}function b(R,_){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==Je&&R.minFilter!==fn?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function O(R){let _=new WeakRef(R);n.get(R).__ref=_,g.add(_),y.register(R,_,_)}function E(R){let _=n.get(R).__ref;_!==void 0&&(g.delete(_),y.unregister(_))}function I(R){Z(R.target)}function N(R){F(R.target)}function Z(R){R.removeEventListener("dispose",I),E(R),$(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&p.delete(R)}function F(R){R.removeEventListener("dispose",N),E(R),xt(R)}function k(){for(let R of g){let _=R.deref();_!==void 0&&(_.isRenderTarget===!0?F(_):Z(_))}g.clear(),p.clear()}function $(R){let _=n.get(R);if(_.__webglInit===void 0)return;let L=R.source,J=f.get(L);if(J){let z=J[_.__cacheKey];z.usedTimes--,z.usedTimes===0&&K(R),Object.keys(J).length===0&&f.delete(L)}n.remove(R)}function K(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let L=R.source,J=f.get(L);delete J[_.__cacheKey],a.memory.textures--}function xt(R){let _=n.get(R);_.__depthDisposeCallback&&_.__depthDisposeCallback();let L=R.depthTexture;if(L&&L.renderTarget===R&&Z(L),R.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let ot=0;ot<_.__webglFramebuffer[z].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[z][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)i.deleteFramebuffer(_.__webglFramebuffer[z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let J=R.textures;for(let z=0,ot=J.length;z<ot;z++){let dt=n.get(J[z]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(J[z])}n.remove(R)}let at=0;function rt(){at=0}function ht(){return at}function it(R){at=R}function mt(){let R=at;return R>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),at+=1,R}function X(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.mipmapsAutoUpdate),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function lt(R,_){let L=n.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&L.__version!==R.version){let J=R.image;if(J===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(L,R,_);return}}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function gt(R,_){let L=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){wt(L,R,_);return}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function kt(R,_){let L=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){wt(L,R,_);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function St(R,_){let L=n.get(R);if(R.version>0&&L.__version!==R.version){Ot(L,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}let Lt={[Pn]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},fe={[Je]:i.NEAREST,[Zh]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Yt={[jh]:i.NEVER,[_c]:i.ALWAYS,[Qh]:i.LESS,[mc]:i.LEQUAL,[tu]:i.EQUAL,[gc]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function Qt(R,_){if(_.type===Dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===fn||_.magFilter===go||_.magFilter===Xr||_.magFilter===ci||_.minFilter===fn||_.minFilter===go||_.minFilter===Xr||_.minFilter===ci)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Lt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Lt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Lt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,fe[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Je||_.minFilter!==Xr&&_.minFilter!==ci||_.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function oe(R,_){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",I),O(_));let J=_.source,z=f.get(J);z===void 0&&(z={},f.set(J,z));let ot=X(_);if(ot!==R.__cacheKey){z[ot]===void 0&&(z[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),z[ot].usedTimes++;let dt=z[R.__cacheKey];dt!==void 0&&(z[R.__cacheKey].usedTimes--,dt.usedTimes===0&&K(_)),R.__cacheKey=ot,R.__webglTexture=z[ot].texture}return L}function ct(R,_,L){return Math.floor(Math.floor(R/L)/_)}function ft(R,_,L,J){let ot=R.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,J,_.data);else{ot.sort((U,et)=>U.start-et.start);let dt=0;for(let U=1;U<ot.length;U++){let et=ot[dt],st=ot[U],vt=et.start+et.count,Tt=ct(st.start,_.width,4),Dt=ct(et.start,_.width,4);st.start<=vt+1&&Tt===Dt&&ct(st.start+st.count-1,_.width,4)===Tt?et.count=Math.max(et.count,st.start+st.count-et.start):(++dt,ot[dt]=st)}ot.length=dt+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let U=0,et=ot.length;U<et;U++){let st=ot[U],vt=Math.floor(st.start/4),Tt=Math.ceil(st.count/4),Dt=vt%_.width,Zt=Math.floor(vt/_.width),ce=Tt,Et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Zt),e.texSubImage2D(i.TEXTURE_2D,0,Dt,Zt,ce,Et,L,J,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function wt(R,_,L){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let z=oe(R,_),ot=_.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+L);let dt=n.get(ot);if(ot.version!==dt.__version||z===!0){if(e.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Et=ge.getPrimaries(ge.workingColorSpace),Jt=_.colorSpace===Gn?null:ge.getPrimaries(_.colorSpace),de=_.colorSpace===Gn||Et===Jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=S(_.image,!1,s.maxTextureSize);Q=Ht(_,Q);let bt=r.convert(_.format,_.colorSpace),U=r.convert(_.type),et=T(_.internalFormat,bt,U,_.normalized,_.colorSpace,_.isVideoTexture);Qt(J,_);let st,vt=_.mipmaps,Tt=_.isVideoTexture!==!0,Dt=dt.__version===void 0||z===!0,Zt=ot.dataReady,ce=b(_,Q);if(_.isDepthTexture)et=v(_.format===hi,_.type),Dt&&(Tt?e.texStorage2D(i.TEXTURE_2D,1,et,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,et,Q.width,Q.height,0,bt,U,null));else if(_.isDataTexture)if(vt.length>0){Tt&&Dt&&e.texStorage2D(i.TEXTURE_2D,ce,et,vt[0].width,vt[0].height);for(let Et=0,Jt=vt.length;Et<Jt;Et++)st=vt[Et],Tt?Zt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,bt,U,st.data):e.texImage2D(i.TEXTURE_2D,Et,et,st.width,st.height,0,bt,U,st.data);_.generateMipmaps=!1}else Tt?(Dt&&e.texStorage2D(i.TEXTURE_2D,ce,et,Q.width,Q.height),Zt&&ft(_,Q,bt,U)):e.texImage2D(i.TEXTURE_2D,0,et,Q.width,Q.height,0,bt,U,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Tt&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,et,vt[0].width,vt[0].height,Q.depth);for(let Et=0,Jt=vt.length;Et<Jt;Et++)if(st=vt[Et],_.format!==kn)if(bt!==null)if(Tt){if(Zt)if(_.layerUpdates.size>0){let de=Ac(st.width,st.height,_.format,_.type);for(let Gt of _.layerUpdates){let q=st.data.subarray(Gt*de/st.data.BYTES_PER_ELEMENT,(Gt+1)*de/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,Gt,st.width,st.height,1,bt,q)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,st.width,st.height,Q.depth,bt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,et,st.width,st.height,Q.depth,0,st.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?Zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,st.width,st.height,Q.depth,bt,U,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,et,st.width,st.height,Q.depth,0,bt,U,st.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Tt&&Dt&&e.texStorage2D(i.TEXTURE_2D,ce,et,vt[0].width,vt[0].height);for(let Et=0,Jt=vt.length;Et<Jt;Et++)st=vt[Et],_.format!==kn?bt!==null?Tt?Zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,bt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,et,st.width,st.height,0,st.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?Zt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,st.width,st.height,bt,U,st.data):e.texImage2D(i.TEXTURE_2D,Et,et,st.width,st.height,0,bt,U,st.data)}else if(_.isDataArrayTexture)if(Tt){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,et,Q.width,Q.height,Q.depth),Zt)if(_.layerUpdates.size>0){let Et=Ac(Q.width,Q.height,_.format,_.type);for(let Jt of _.layerUpdates){let de=Q.data.subarray(Jt*Et/Q.data.BYTES_PER_ELEMENT,(Jt+1)*Et/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Jt,Q.width,Q.height,1,bt,U,de)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,bt,U,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,et,Q.width,Q.height,Q.depth,0,bt,U,Q.data);else if(_.isData3DTexture)Tt?(Dt&&e.texStorage3D(i.TEXTURE_3D,ce,et,Q.width,Q.height,Q.depth),Zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,bt,U,Q.data)):e.texImage3D(i.TEXTURE_3D,0,et,Q.width,Q.height,Q.depth,0,bt,U,Q.data);else if(_.isFramebufferTexture){if(Dt)if(Tt)e.texStorage2D(i.TEXTURE_2D,ce,et,Q.width,Q.height);else{let Et=Q.width,Jt=Q.height;for(let de=0;de<ce;de++)e.texImage2D(i.TEXTURE_2D,de,et,Et,Jt,0,bt,U,null),Et>>=1,Jt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Et=i.canvas;if(Et.hasAttribute("layoutsubtree")||Et.setAttribute("layoutsubtree","true"),Q.parentNode!==Et){Et.appendChild(Q),p.add(_),Et.onpaint=Jt=>{let de=Jt.changedElements;for(let Gt of p)de.includes(Gt.image)&&(Gt.needsUpdate=!0)},Et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let de=i.RGBA,Gt=i.RGBA,q=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,de,Gt,q,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(vt.length>0){if(Tt&&Dt){let Et=$t(vt[0]);e.texStorage2D(i.TEXTURE_2D,ce,et,Et.width,Et.height)}for(let Et=0,Jt=vt.length;Et<Jt;Et++)st=vt[Et],Tt?Zt&&e.texSubImage2D(i.TEXTURE_2D,Et,0,0,bt,U,st):e.texImage2D(i.TEXTURE_2D,Et,et,bt,U,st);_.generateMipmaps=!1}else if(Tt){if(Dt){let Et=$t(Q);e.texStorage2D(i.TEXTURE_2D,ce,et,Et.width,Et.height)}Zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,U,Q)}else e.texImage2D(i.TEXTURE_2D,0,et,bt,U,Q);w(_)&&_.mipmapsAutoUpdate===!0&&M(J),dt.__version=ot.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ot(R,_,L){if(_.image.length!==6)return;let J=oe(R,_),z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+L);let ot=n.get(z);if(z.version!==ot.__version||J===!0){e.activeTexture(i.TEXTURE0+L);let dt=ge.getPrimaries(ge.workingColorSpace),Y=_.colorSpace===Gn?null:ge.getPrimaries(_.colorSpace),Q=_.colorSpace===Gn||dt===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let bt=_.isCompressedTexture||_.image[0].isCompressedTexture,U=_.image[0]&&_.image[0].isDataTexture,et=[];for(let Gt=0;Gt<6;Gt++)!bt&&!U?et[Gt]=S(_.image[Gt],!0,s.maxCubemapSize):et[Gt]=U?_.image[Gt].image:_.image[Gt],et[Gt]=Ht(_,et[Gt]);let st=et[0],vt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Dt=T(_.internalFormat,vt,Tt,_.normalized,_.colorSpace),Zt=_.isVideoTexture!==!0,ce=ot.__version===void 0||J===!0,Et=z.dataReady,Jt=b(_,st);Qt(i.TEXTURE_CUBE_MAP,_);let de;if(_.isDepthTexture){if(Dt=v(_.format===hi,_.type),ce)if(Zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Dt,st.width,st.height);else for(let Gt=0;Gt<6;Gt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Dt,st.width,st.height,0,vt,Tt,null)}else if(bt){Zt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Dt,st.width,st.height);for(let Gt=0;Gt<6;Gt++){de=et[Gt].mipmaps;for(let q=0;q<de.length;q++){let ut=de[q];_.format!==kn?vt!==null?Zt?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,q,0,0,ut.width,ut.height,vt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,q,Dt,ut.width,ut.height,0,ut.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,q,0,0,ut.width,ut.height,vt,Tt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,q,Dt,ut.width,ut.height,0,vt,Tt,ut.data)}}}else{if(de=_.mipmaps,Zt&&ce){de.length>0&&Jt++;let Gt=$t(et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Dt,Gt.width,Gt.height)}for(let Gt=0;Gt<6;Gt++)if(U){Zt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,0,0,et[Gt].width,et[Gt].height,vt,Tt,et[Gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Dt,et[Gt].width,et[Gt].height,0,vt,Tt,et[Gt].data);for(let q=0;q<de.length;q++){let Bt=de[q].image[Gt].image;Zt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,q+1,0,0,Bt.width,Bt.height,vt,Tt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,q+1,Dt,Bt.width,Bt.height,0,vt,Tt,Bt.data)}}else{Zt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,0,0,vt,Tt,et[Gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Dt,vt,Tt,et[Gt]);for(let q=0;q<de.length;q++){let ut=de[q];Zt?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,q+1,0,0,vt,Tt,ut.image[Gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,q+1,Dt,vt,Tt,ut.image[Gt])}}}w(_)&&_.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ot.__version=z.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Nt(R,_,L,J,z,ot){let dt=r.convert(L.format,L.colorSpace),Y=r.convert(L.type),Q=T(L.internalFormat,dt,Y,L.normalized,L.colorSpace),bt=n.get(_),U=n.get(L);if(U.__renderTarget=_,!bt.__hasExternalTextures){let et=Math.max(1,_.width>>ot),st=Math.max(1,_.height>>ot);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?e.texImage3D(z,ot,Q,et,st,_.depth,0,dt,Y,null):e.texImage2D(z,ot,Q,et,st,0,dt,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,z,U.__webglTexture,0,ve(_)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,z,U.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let J=_.depthTexture,z=J&&J.isDepthTexture?J.type:null,ot=v(_.stencilBuffer,z),dt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(_),ot,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,R)}else{let J=_.textures;for(let z=0;z<J.length;z++){let ot=J[z],dt=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),Q=T(ot.internalFormat,dt,Y,ot.normalized,ot.colorSpace);Ut(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(_),Q,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(R,_,L){let J=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let z=n.get(_.depthTexture);z.__renderTarget=_;let ot=J?_.depthTexture.image[0]:_.depthTexture.image;(!z.__webglTexture||ot.width!==_.width||ot.height!==_.height)&&(ot.width=_.width,ot.height=_.height,_.depthTexture.needsUpdate=!0),J?St(_.depthTexture,0):lt(_.depthTexture,0);let dt=z.__webglTexture,Y=ve(_),Q=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,bt=_.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ei)Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,Q,dt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,bt,Q,dt,0);else if(_.depthTexture.format===hi)Ut(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,Q,dt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,bt,Q,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(R){let _=n.get(R),L=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",z)};J.addEventListener("dispose",z),_.__depthDisposeCallback=z}_.__boundDepthTexture=J}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let J=0;J<6;J++)zt(_.__webglFramebuffer[J],R,J);else R.texture.mipmaps.length>0?zt(_.__webglFramebuffer[0],R,0):zt(_.__webglFramebuffer,R,0);else if(L){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),Rt(_.__webglDepthbuffer[J],R,!1);else{let z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,ot)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Rt(_.__webglDepthbuffer,R,!1);else{let z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(R,_,L){let J=n.get(R);_!==void 0&&Nt(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&qt(R)}function ie(R){let _=R.texture,L=n.get(R),J=n.get(_);R.addEventListener("dispose",N),O(R);let z=R.textures,ot=R.isWebGLCubeRenderTarget===!0,dt=z.length>1;if(dt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),ot){L.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0){L.__webglFramebuffer[Y]=[];for(let Q=0;Q<_.mipmaps.length;Q++)L.__webglFramebuffer[Y][Q]=i.createFramebuffer()}else L.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps.length>0){L.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)L.__webglFramebuffer[Y]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(dt)for(let Y=0,Q=z.length;Y<Q;Y++){let bt=n.get(z[Y]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ut(R)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Y=0;Y<z.length;Y++){let Q=z[Y];L.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[Y]);let bt=r.convert(Q.format,Q.colorSpace),U=r.convert(Q.type),et=T(Q.internalFormat,bt,U,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),st=ve(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,L.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(L.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Nt(L.__webglFramebuffer[Y][Q],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Nt(L.__webglFramebuffer[Y],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);w(_)?M(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Y=0,Q=z.length;Y<Q;Y++){let bt=z[Y],U=n.get(bt),et=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,U.__webglTexture),Qt(et,bt),Nt(L.__webglFramebuffer,R,bt,i.COLOR_ATTACHMENT0+Y,et,0),w(bt)&&M(et)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,J.__webglTexture),Qt(Y,_),_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Nt(L.__webglFramebuffer[Q],R,_,i.COLOR_ATTACHMENT0,Y,Q);else Nt(L.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,Y,0);w(_)?M(Y):_.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&qt(R)}function G(R){let _=R.textures;for(let L=0,J=_.length;L<J;L++){let z=_[L];if(w(z)&&z.mipmapsAutoUpdate===!0){let ot=A(R),dt=n.get(z).__webglTexture;e.bindTexture(ot,dt),M(ot),e.unbindTexture()}}}let re=[];function ne(R){if(R.samples>0){if(Ut(R)===!1){let _=R.textures,L=R.width,J=R.height,z=i.COLOR_BUFFER_BIT,ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(R),Y=_.length>1;if(Y)for(let bt=0;bt<_.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let bt=0;bt<_.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[bt]);let U=n.get(_[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,L,J,0,0,L,J,z,i.NEAREST),l===!0&&(re.length=0,re.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&re.push(ot),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let bt=0;bt<_.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[bt]);let U=n.get(_[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,U,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ve(R){return Math.min(s.maxSamples,R.samples)}function Ut(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function be(R){let _=a.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function Ht(R,_){let L=R.colorSpace,J=R.format,z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==or&&L!==Gn&&(ge.getTransfer(L)===we?(J!==kn||z!==mn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",L)),_}function $t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=mt,this.resetTextureUnits=rt,this.getTextureUnits=ht,this.setTextureUnits=it,this.setTexture2D=lt,this.setTexture2DArray=gt,this.setTexture3D=kt,this.setTextureCube=St,this.rebindTextures=ee,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Ut,this.dispose=k}function f_(i,t){function e(n,s=Gn){let r,a=ge.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cc)return i.BYTE;if(n===hc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===We)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===kn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===yo)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===So)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===Kr)if(a===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===To||n===Eo||n===Ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Ro||n===Po||n===Io||n===Lo||n===$r||n===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Co||n===Ro)return a===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Io)return r.COMPRESSED_R11_EAC;if(n===Lo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===No)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return a===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===Ko||n===$o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return a===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===jo||n===Jr||n===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
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

}`,Fc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oc=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",h=new Fc,m={},S=e.getContextAttributes(),w=null,M=null,A=[],T=[],v=new yt,b=null,O=null,E=new en;E.viewport=new Le;let I=new en;I.viewport=new Le;let N=[E,I],Z=new fo,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let lt=A[X];return lt===void 0&&(lt=new As,A[X]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(X){let lt=A[X];return lt===void 0&&(lt=new As,A[X]=lt),lt.getGripSpace()},this.getHand=function(X){let lt=A[X];return lt===void 0&&(lt=new As,A[X]=lt),lt.getHandSpace()};function $(X){let lt=T.indexOf(X.inputSource);if(lt===-1)return;let gt=A[lt];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",xt);for(let X=0;X<A.length;X++){let lt=T[X];lt!==null&&(T[X]=null,A[X].disconnect(lt))}F=null,k=null,h.reset();for(let X in m)delete m[X];if(t.setRenderTarget(w),f=null,d=null,p=null,s=null,M=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),O!==null){let X=O.camera;X.fov=O.fov,X.zoom=O.zoom,X.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",K),s.addEventListener("inputsourceschange",xt),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,kt=null,St=null;S.depth&&(St=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=S.stencil?hi:ei,kt=S.stencil?es:zn);let Lt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ke(d.textureWidth,d.textureHeight,{format:kn,type:mn,depthTexture:new ai(d.textureWidth,d.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let gt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ke(f.framebufferWidth,f.framebufferHeight,{format:kn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function xt(X){for(let lt=0;lt<X.removed.length;lt++){let gt=X.removed[lt],kt=T.indexOf(gt);kt>=0&&(T[kt]=null,A[kt].disconnect(gt))}for(let lt=0;lt<X.added.length;lt++){let gt=X.added[lt],kt=T.indexOf(gt);if(kt===-1){for(let Lt=0;Lt<A.length;Lt++)if(Lt>=T.length){T.push(gt),kt=Lt;break}else if(T[Lt]===null){T[Lt]=gt,kt=Lt;break}if(kt===-1)break}let St=A[kt];St&&St.connect(gt)}}function at(X,lt){lt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(lt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let lt=X.near,gt=X.far;h.texture!==null&&(h.depthNear>0&&(lt=h.depthNear),h.depthFar>0&&(gt=h.depthFar)),Z.near=I.near=E.near=lt,Z.far=I.far=E.far=gt,(F!==Z.near||k!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),F=Z.near,k=Z.far),Z.layers.mask=X.layers.mask|6,E.layers.mask=Z.layers.mask&-5,I.layers.mask=Z.layers.mask&-3;let kt=X.parent,St=Z.cameras;at(Z,kt);for(let Lt=0;Lt<St.length;Lt++)at(St[Lt],kt);Z.projectionMatrix.copy(E.projectionMatrix),Z.projectionMatrixInverse.copy(E.projectionMatrixInverse),O===null&&X.isPerspectiveCamera&&(O={camera:X,fov:X.fov,zoom:X.zoom}),rt(X,Z,kt)};function rt(X,lt,gt){gt===null?X.matrix.copy(lt.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(lt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(lt.projectionMatrix),X.projectionMatrixInverse.copy(lt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(Z)},this.getCameraTexture=function(X){return m[X]};let ht=null;function it(X,lt){if(u=lt.getViewerPose(c||a),g=lt,u!==null){let gt=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let kt=!1;gt.length!==Z.cameras.length&&(Z.cameras.length=0,kt=!0);for(let Yt=0;Yt<gt.length;Yt++){let Qt=gt[Yt],oe=null;if(f!==null)oe=f.getViewport(Qt);else{let ft=p.getViewSubImage(d,Qt);oe=ft.viewport,Yt===0&&(t.setRenderTargetTextures(M,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(M))}let ct=N[Yt];ct===void 0&&(ct=new en,ct.layers.enable(Yt),ct.viewport=new Le,N[Yt]=ct),ct.matrix.fromArray(Qt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Qt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(oe.x,oe.y,oe.width,oe.height),Yt===0&&(Z.matrix.copy(ct.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),kt===!0&&Z.cameras.push(ct)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let Yt=p.getDepthInformation(gt[0]);Yt&&Yt.isValid&&Yt.texture&&h.init(Yt,s.renderState)}if(St&&St.includes("camera-access")&&y){t.state.unbindTexture(),p=n.getBinding();for(let Yt=0;Yt<gt.length;Yt++){let Qt=gt[Yt].camera;if(Qt){let oe=m[Qt];oe||(oe=new vr,m[Qt]=oe);let ct=p.getCameraImage(Qt);oe.sourceTexture=ct}}}}for(let gt=0;gt<A.length;gt++){let kt=T[gt],St=A[gt];kt!==null&&St!==void 0&&St.update(kt,lt,c||a)}ht&&ht(X,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let mt=new Bu;mt.setAnimationLoop(it),this.setAnimationLoop=function(X){ht=X},this.dispose=function(){}}},g_=new xe,Zu=new ue;Zu.set(-1,0,0,0,1,0,0,0,1);function __(i,t){function e(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,wc(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function s(h,m,S,w,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(h,m):m.isMeshLambertMaterial?(r(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(h,m),p(h,m)):m.isMeshPhongMaterial?(r(h,m),u(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(h,m),d(h,m),m.isMeshPhysicalMaterial&&f(h,m,M)):m.isMeshMatcapMaterial?(r(h,m),g(h,m)):m.isMeshDepthMaterial?r(h,m):m.isMeshDistanceMaterial?(r(h,m),y(h,m)):m.isMeshNormalMaterial?r(h,m):m.isLineBasicMaterial?(a(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?l(h,m,S,w):m.isSpriteMaterial?c(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,e(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===nn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,e(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===nn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,e(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,e(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let S=t.get(m),w=S.envMap,M=S.envMapRotation;w&&(h.envMap.value=w,h.envMapRotation.value.setFromMatrix4(g_.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(Zu),h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,h.aoMapTransform))}function a(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform))}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,S,w){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*S,h.scale.value=w*.5,m.map&&(h.map.value=m.map,e(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,e(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,e(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function p(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function f(h,m,S){h.ior.value=m.ior,m.diffuseRoughness>0&&(h.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.retroreflectivity>0&&(h.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=S.texture,h.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function y(h,m){let S=t.get(m).light;h.referencePosition.value.setFromMatrixPosition(S.matrixWorld),h.nearDistance.value=S.shadow.camera.near,h.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x_(i,t,e,n){let s={},r={};function a(S,w){let M=w.program;n.uniformBlockBinding(S,M,s[S.id])}function o(S,w){let M=s[S.id];M===void 0&&(g(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",h));let A=w.program;n.updateUBOMapping(S,A);let T=t.render.frame;r[S.id]!==T&&(c(S),r[S.id]=T)}function l(S){let w=i.createBuffer(),M=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(S){let w=s[S.id],M=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,v=M.length;T<v;T++){let b=M[T];if(Array.isArray(b))for(let O=0,E=b.length;O<E;O++)u(b[O],T,O,A);else u(b,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,w,M,A){if(d(S,w,M,A)===!0){let T=S.__offset,v=S.value;if(Array.isArray(v)){let b=0;for(let O=0;O<v.length;O++){let E=v[O],I=y(E,!0);p(E,S.__data,b),b+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function p(S,w,M){typeof S=="number"||typeof S=="boolean"?w[M]=S:S.isMatrix3?(w[M]=S.elements[0],w[M+1]=S.elements[1],w[M+2]=S.elements[2],w[M+3]=0,w[M+4]=S.elements[3],w[M+5]=S.elements[4],w[M+6]=S.elements[5],w[M+7]=0,w[M+8]=S.elements[6],w[M+9]=S.elements[7],w[M+10]=S.elements[8],w[M+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-M),M):S.toArray(w,M)}function d(S,w,M,A){let T=S.value,v=w+"_"+M;if(Array.isArray(T)){A[v]===void 0&&(A[v]=[]);let b=A[v],O=!1;for(let E=0;E<T.length;E++)f(T[E],b,E)===!0&&(O=!0);return O}return f(T,A,v)}function f(S,w,M){if(w[M]===void 0)return typeof S=="number"||typeof S=="boolean"?w[M]=S:ArrayBuffer.isView(S)?w[M]=S.slice():w[M]=S.clone(),!0;{let A=w[M];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){let w=S.uniforms,M=0,A=16;for(let v=0,b=w.length;v<b;v++){let O=Array.isArray(w[v])?w[v]:[w[v]];for(let E=0,I=O.length;E<I;E++){let N=O[E],Z=Array.isArray(N.value)?N.value:[N.value],F=Array.isArray(w[v])||Array.isArray(N.value),k=M;for(let K=0,xt=Z.length;K<xt;K++){let at=Z[K],rt=y(at,F),ht=M%A,it=ht%rt.boundary,mt=ht+it;M+=it,mt!==0&&A-mt<rt.storage&&(M+=A-mt),K===0&&(k=M),M+=rt.storage}let $=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new $((M-k)/Float32Array.BYTES_PER_ELEMENT),N.__offset=k}}let T=M%A;return T>0&&(M+=A-T),S.__size=M,S.__cache={},this}function y(S,w){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function h(S){let w=S.target;w.removeEventListener("dispose",h),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qn=null;function y_(){return qn===null&&(qn=new pr(v_,16,16,Li,We),qn.name="DFG_LUT",qn.minFilter=fn,qn.magFilter=fn,qn.wrapS=Hn,qn.wrapT=Hn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var il=class{constructor(t={}){let{canvas:e=su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,h=new Set([bo,So,Mo]),m=new Set([mn,zn,ks,es,xo,vo]),S=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},A=null,T=null,v=[],b=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,N=null,Z=null,F=null,k=null;this._outputColorSpace=tn;let $=0,K=0,xt=null,at=-1,rt=null,ht=new Le,it=new Le,mt=null,X=new jt(0),lt=0,gt=e.width,kt=e.height,St=1,Lt=null,fe=null,Yt=new Le(0,0,gt,kt),Qt=new Le(0,0,gt,kt),oe=!1,ct=new Si,ft=new Ya,wt=!1,Ot=!1,Nt=new xe,Rt=new D,zt=new Le,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ie(){return xt===null?St:1}let G=n;function re(x,P){return e.getContext(x,P)}let ne,ve,Ut,be,Ht,$t,R,_,L,J,z,ot,dt,Y,Q,bt,U,et,st,vt,Tt,Dt,Zt;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),G===null){let P="webgl2";if(G=re(P,x),G===null)throw re(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(x){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),he("WebGLRenderer: "+x.message),x}function ce(){ne=new I0(G),ne.init(),Tt=new f_(G,ne),ve=new y0(G,ne,t,Tt),Ut=new u_(G,ne),ve.reversedDepthBuffer&&d&&Ut.buffers.depth.setReversed(!0),Z=G.createFramebuffer(),F=G.createFramebuffer(),k=G.createFramebuffer(),be=new N0(G),Ht=new Jg,$t=new d_(G,ne,Ut,Ht,ve,Tt,be),R=new P0(E),_=new Ff(G),Dt=new x0(G,_),L=new L0(G,_,be,Dt),J=new F0(G,L,_,Dt,be),et=new U0(G,ve,$t),Q=new M0(Ht),z=new $g(E,R,ne,ve,Dt,Q),ot=new __(E,Ht),dt=new Qg,Y=new r_(ne),U=new _0(E,R,Ut,J,g,l),bt=new h_(E,J,ve),Zt=new x_(G,be,ve,Ut),st=new v0(G,ne,be),vt=new D0(G,ne,be),be.programs=z.programs,E.capabilities=ve,E.extensions=ne,E.properties=Ht,E.renderLists=dt,E.shadowMap=bt,E.state=Ut,E.info=be}y!==mn&&(O=new B0(y,e.width,e.height,o,s,r));let Et=new Oc(E,G);this.xr=Et,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let x=ne.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ne.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(x){x!==void 0&&(St=x,this.setSize(gt,kt,!1))},this.getSize=function(x){return x.set(gt,kt)},this.setSize=function(x,P,H=!0){if(Et.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=x,kt=P,e.width=Math.floor(x*St),e.height=Math.floor(P*St),H===!0&&(e.style.width=x+"px",e.style.height=P+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(gt*St,kt*St).floor()},this.setDrawingBufferSize=function(x,P,H){gt=x,kt=P,St=H,e.width=Math.floor(x*H),e.height=Math.floor(P*H),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(y===mn){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ht)},this.getViewport=function(x){return x.copy(Yt)},this.setViewport=function(x,P,H,B){x.isVector4?Yt.set(x.x,x.y,x.z,x.w):Yt.set(x,P,H,B),Ut.viewport(ht.copy(Yt).multiplyScalar(ie()).round())},this.getScissor=function(x){return x.copy(Qt)},this.setScissor=function(x,P,H,B){x.isVector4?Qt.set(x.x,x.y,x.z,x.w):Qt.set(x,P,H,B),Ut.scissor(it.copy(Qt).multiplyScalar(ie()).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(x){Ut.setScissorTest(oe=x)},this.setOpaqueSort=function(x){Lt=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,H=!0){let B=0;if(x){let W=!1;if(xt!==null){let pt=xt.texture.format;W=h.has(pt)}if(W){let pt=xt.texture.type,At=m.has(pt),_t=U.getClearColor(),Ct=U.getClearAlpha(),Vt=_t.r,Wt=_t.g,le=_t.b;At?(S[0]=Vt,S[1]=Wt,S[2]=le,S[3]=Ct,G.clearBufferuiv(G.COLOR,0,S)):(w[0]=Vt,w[1]=Wt,w[2]=le,w[3]=Ct,G.clearBufferiv(G.COLOR,0,w))}else B|=G.COLOR_BUFFER_BIT}P&&(B|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&G.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),N=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),U.dispose(),dt.dispose(),Y.dispose(),$t.dispose(),Ht.dispose(),R.dispose(),J.dispose(),L.dispose(),Dt.dispose(),Zt.dispose(),z.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",An),Et.removeEventListener("sessionend",Re),De.stop()};function Jt(x){x.preventDefault(),vc("WebGLRenderer: Context Lost."),I=!0}function de(){vc("WebGLRenderer: Context Restored."),I=!1;let x=be.autoReset,P=bt.enabled,H=bt.autoUpdate,B=bt.needsUpdate,W=bt.type;ce(),be.autoReset=x,bt.enabled=P,bt.autoUpdate=H,bt.needsUpdate=B,bt.type=W}function Gt(x){he("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){let P=x.target;P.removeEventListener("dispose",q),ut(P)}function ut(x){Bt(x),Ht.remove(x)}function Bt(x){let P=Ht.get(x).programs;P!==void 0&&(P.forEach(function(H){z.releaseProgram(H)}),x.isShaderMaterial&&z.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,H,B,W,pt){P===null&&(P=qt);let At=W.isMesh&&W.matrixWorld.determinantAffine()<0,_t=nt(x,P,H,B,W);Ut.setMaterial(B,At);let Ct=H.index,Vt=1;if(B.wireframe===!0){if(Ct=L.getWireframeAttribute(H),Ct===void 0)return;Vt=2}let Wt=H.drawRange,le=H.attributes.position,Pt=Wt.start*Vt,te=(Wt.start+Wt.count)*Vt;pt!==null&&(Pt=Math.max(Pt,pt.start*Vt),te=Math.min(te,(pt.start+pt.count)*Vt)),Ct!==null?(Pt=Math.max(Pt,0),te=Math.min(te,Ct.count)):le!=null&&(Pt=Math.max(Pt,0),te=Math.min(te,le.count));let Pe=te-Pt;if(Pe<0||Pe===1/0)return;Dt.setup(W,B,_t,H,Ct);let Ie,Ee=st;if(Ct!==null&&(Ie=_.get(Ct),Ee=vt,Ee.setIndex(Ie)),W.isMesh)B.wireframe===!0?(Ut.setLineWidth(B.wireframeLinewidth*ie()),Ee.setMode(G.LINES)):Ee.setMode(G.TRIANGLES);else if(W.isLine){let rn=B.linewidth;rn===void 0&&(rn=1),Ut.setLineWidth(rn*ie()),W.isLineSegments?Ee.setMode(G.LINES):W.isLineLoop?Ee.setMode(G.LINE_LOOP):Ee.setMode(G.LINE_STRIP)}else W.isPoints?Ee.setMode(G.POINTS):W.isSprite&&Ee.setMode(G.TRIANGLES);if(W.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Ee.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let rn=W._multiDrawStarts,Kt=W._multiDrawCounts,un=W._multiDrawCount,Ae=Ct?_.get(Ct).bytesPerElement:1,Ui=Ht.get(B).currentProgram.getUniforms();for(let an=0;an<un;an++)Ui.setValue(G,"_gl_DrawID",an),Ee.render(rn[an]/Ae,Kt[an])}else if(W.isInstancedMesh)Ee.renderInstances(Pt,Pe,W.count);else if(H.isInstancedBufferGeometry){let rn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Kt=Math.min(H.instanceCount,rn);Ee.renderInstances(Pt,Pe,Kt)}else Ee.render(Pt,Pe)};function ye(x,P,H,B){N!==null&&x.isNodeMaterial&&N.setObject(B,x),wt===!0&&Q.setState(x,H,!1),x.transparent===!0&&x.side===cn&&x.forceSinglePass===!1?(x.side=nn,x.needsUpdate=!0,C(x,P,B),x.side=Ii,x.needsUpdate=!0,C(x,P,B),x.side=cn):C(x,P,B)}this.compile=function(x,P,H=null){H===null&&(H=x),N!==null&&N.renderStart(x,P,H),T=Y.get(H),T.init(P),b.push(T),H.traverseVisible(function(W){W.isLight&&W.layers.test(P.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),x!==H&&x.traverseVisible(function(W){W.isLight&&W.layers.test(P.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Ot=this.localClippingEnabled,wt=Q.init(this.clippingPlanes,Ot),wt===!0&&Q.setGlobalState(this.clippingPlanes,P),N!==null&&bt.render(T.state.shadowsArray,H,P);let B=new Set;return x.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let pt=W.material;if(pt)if(Array.isArray(pt))for(let At=0;At<pt.length;At++){let _t=pt[At];ye(_t,H,P,W),B.add(_t)}else ye(pt,H,P,W),B.add(pt)}),T=b.pop(),N!==null&&N.renderEnd(),B},this.compileAsync=function(x,P,H=null){let B=this.compile(x,P,H);return new Promise(W=>{function pt(){if(B.forEach(function(At){let Ct=Ht.get(At).currentProgram;(Ct===void 0||Ct.isReady())&&B.delete(At)}),B.size===0){W(x);return}setTimeout(pt,10)}ne.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Te=null;function sn(x){Te&&Te(x)}function An(){De.stop()}function Re(){De.start()}let De=new Bu;De.setAnimationLoop(sn),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(x){Te=x,Et.setAnimationLoop(x),x===null?De.stop():De.start()},Et.addEventListener("sessionstart",An),Et.addEventListener("sessionend",Re),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(x,P);let H=Et.enabled===!0&&Et.isPresenting===!0,B=O!==null&&(xt===null||H)&&O.begin(E,xt);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(P),P=Et.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,P,xt),T=Y.get(x,b.length),T.init(P),T.state.textureUnits=$t.getTextureUnits(),b.push(T),Nt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?ft.setFromArrayCamera(P):ct.setFromProjectionMatrix(Nt,Rn,P.reversedDepth),Ot=this.localClippingEnabled,wt=Q.init(this.clippingPlanes,Ot),A=dt.get(x,v.length),A.init(),v.push(A),this.info.render.frame++,Et.enabled===!0&&Et.isPresenting===!0){let At=E.xr.getDepthSensingMesh();At!==null&&di(At,P,-1/0,E.sortObjects)}di(x,P,0,E.sortObjects),A.finish(),N!==null&&N.updateLights(T.state.lightsArray),E.sortObjects===!0&&A.sort(Lt,fe),ee=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,ee&&U.addToRenderList(A,x),this.info.autoReset===!0&&this.info.reset(),wt===!0&&Q.beginShadows();let W=T.state.shadowsArray;if(bt.render(W,x,P),wt===!0&&Q.endShadows(),(B&&O.hasRenderPass())===!1){let At=A.opaque,_t=A.transmissive;if(T.setupLights(),P.isArrayCamera){let Ct=P.cameras;if(_t.length>0)for(let Vt=0,Wt=Ct.length;Vt<Wt;Vt++){let le=Ct[Vt];ra(At,_t,x,le)}ee&&U.render(x);for(let Vt=0,Wt=Ct.length;Vt<Wt;Vt++){let le=Ct[Vt];Ys(A,x,le,le.viewport)}}else _t.length>0&&ra(At,_t,x,P),ee&&U.render(x),Ys(A,x,P)}xt!==null&&K===0&&($t.updateMultisampleRenderTarget(xt),$t.updateRenderTargetMipmap(xt)),B&&O.end(E),x.isScene===!0&&x.onAfterRender(E,x,P),Dt.resetDefaultState(),at=-1,rt=null,b.pop(),b.length>0?(T=b[b.length-1],$t.setTextureUnits(T.state.textureUnits),wt===!0&&Q.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,N!==null&&N.renderEnd()};function di(x,P,H,B){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){let At=P.isArrayCamera?ft:ct;if(!x.frustumCulled||x.intersectsFrustum(At)){B&&zt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Nt);let _t=J.update(x),Ct=x.material;Ct.visible&&A.push(x,_t,Ct,H,zt.z,null,P)}}else if(x.isMesh||x.isLine||x.isPoints){let At=P.isArrayCamera?ft:ct;if(!x.frustumCulled||x.intersectsFrustum(At)){let _t=J.update(x),Ct=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),zt.copy(x.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),zt.copy(_t.boundingSphere.center)),zt.applyMatrix4(x.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ct)){let Vt=_t.groups;for(let Wt=0,le=Vt.length;Wt<le;Wt++){let Pt=Vt[Wt],te=Ct[Pt.materialIndex];te&&te.visible&&A.push(x,_t,te,H,zt.z,Pt,P)}}else Ct.visible&&A.push(x,_t,Ct,H,zt.z,null,P)}}}let pt=x.children;for(let At=0,_t=pt.length;At<_t;At++)di(pt[At],P,H,B)}function Ys(x,P,H,B){let{opaque:W,transmissive:pt,transparent:At}=x;T.setupLightsView(H),wt===!0&&Q.setGlobalState(E.clippingPlanes,H),B&&Ut.viewport(ht.copy(B)),W.length>0&&Ni(W,P,H),pt.length>0&&Ni(pt,P,H),At.length>0&&Ni(At,P,H),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function ra(x,P,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Pt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new ke(1,1,{generateMipmaps:!0,type:Pt?We:mn,minFilter:ci,samples:Math.max(4,ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let pt=T.state.transmissionRenderTarget[B.id],At=B.viewport||ht;pt.setSize(At.z*E.transmissionResolutionScale,At.w*E.transmissionResolutionScale);let _t=E.getRenderTarget(),Ct=E.getActiveCubeFace(),Vt=E.getActiveMipmapLevel();E.setRenderTarget(pt),E.getClearColor(X),lt=E.getClearAlpha(),lt<1&&E.setClearColor(16777215,.5),E.clear(),ee&&U.render(H);let Wt=E.toneMapping;E.toneMapping=Xn;let le=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),wt===!0&&Q.setGlobalState(E.clippingPlanes,B),Ni(x,H,B),$t.updateMultisampleRenderTarget(pt),$t.updateRenderTargetMipmap(pt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let te=0,Pe=P.length;te<Pe;te++){let Ie=P[te],{object:Ee,geometry:rn,material:Kt,group:un}=Ie;if(Kt.side===cn&&Ee.layers.test(B.layers)){let Ae=Kt.side;Kt.side=nn,Kt.needsUpdate=!0,Zs(Ee,H,B,rn,Kt,un),Kt.side=Ae,Kt.needsUpdate=!0,Pt=!0}}Pt===!0&&($t.updateMultisampleRenderTarget(pt),$t.updateRenderTargetMipmap(pt))}E.setRenderTarget(_t,Ct,Vt),E.setClearColor(X,lt),le!==void 0&&(B.viewport=le),E.toneMapping=Wt}function Ni(x,P,H){let B=P.isScene===!0?P.overrideMaterial:null;for(let W=0,pt=x.length;W<pt;W++){let At=x[W],{object:_t,geometry:Ct,group:Vt}=At,Wt=At.material;Wt.allowOverride===!0&&B!==null&&(Wt=B),_t.layers.test(H.layers)&&Zs(_t,P,H,Ct,Wt,Vt)}}function Zs(x,P,H,B,W,pt){N!==null&&W.isNodeMaterial&&N.setObject(x,W),x.onBeforeRender(E,P,H,B,W,pt),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),W.onBeforeRender(E,P,H,B,x,pt),W.transparent===!0&&W.side===cn&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,E.renderBufferDirect(H,P,B,W,x,pt),W.side=Ii,W.needsUpdate=!0,E.renderBufferDirect(H,P,B,W,x,pt),W.side=cn):E.renderBufferDirect(H,P,B,W,x,pt),x.onAfterRender(E,P,H,B,W,pt)}function aa(x){let P=0;for(let H of x)H.texture!==null&&P++;return P}function C(x,P,H){P.isScene!==!0&&(P=qt);let B=Ht.get(x),W=T.state.lights,pt=T.state.shadowsArray,At=W.state.version,_t=z.getParameters(x,W.state,pt,P,H,T.state.lightProbeGridArray),Ct=z.getProgramCacheKey(_t),Vt=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B.fog=P.fog;let Wt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=R.get(x.envMap||B.environment,Wt),B.envMapRotation=B.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Vt===void 0&&(x.addEventListener("dispose",q),Vt=new Map,B.programs=Vt,B.programVariants=new Map);let le=Vt.get(Ct);if(le!==void 0){if(B.currentProgram===le&&B.lightsStateVersion===At)return j(x,_t),le}else _t.uniforms=z.getUniforms(x),N!==null&&x.isNodeMaterial&&N.build(x,H,_t),x.onBeforeCompile(_t,E),le=z.acquireProgram(_t,Ct),Vt.set(Ct,le),B.uniforms=_t.uniforms;let Pt=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Pt.clippingPlanes=Q.uniform),j(x,_t),B.needsLights=Ft(x),B.lightsStateVersion=At,B.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.sunLights.value=W.state.sun,Pt.sunLightShadows.value=W.state.sunShadow,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.sunShadowMatrix.value=W.state.sunShadowMatrix,Pt.sunShadowCascade.value=W.state.sunShadowCascade,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),B.numLightProbeGrids=aa(T.state.lightProbeGridArray),B.currentProgram=le,B.uniformsList=null,le}function V(x,P,H,B,W){let pt=Ht.get(x),At=pt.currentProgram.id+","+B+","+W,_t=pt.programVariants.get(At);return _t===void 0?(_t=C(x,P,H),pt.programVariants.set(At,_t)):(pt.currentProgram=_t,pt.uniformsList=null,pt.outputColorSpace=B,pt.toneMapping=W),_t}function tt(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=Gs.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function j(x,P){let H=Ht.get(x);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function nt(x,P,H,B,W){P.isScene!==!0&&(P=qt),$t.resetTextureUnits();let pt=P.fog,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?P.environment:null,_t=xt===null?E.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ge.workingColorSpace,Ct=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Vt=R.get(B.envMap||At,Ct),Wt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,le=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,Pe=!!H.morphAttributes.color,Ie=Xn;B.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Ie=E.toneMapping);let Ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rn=Ee!==void 0?Ee.length:0,Kt=Ht.get(B),un=T.state.lights;if(wt===!0&&(Ot===!0||x!==rt)){let Fe=x===rt&&B.id===at;Q.setState(B,x,Fe)}let Ae=!1,Ui=!1;B.version===Kt.__version?Kt.needsLights&&Kt.lightsStateVersion!==un.state.version||W.isBatchedMesh&&Kt.batching===!1||!W.isBatchedMesh&&Kt.batching===!0||W.isBatchedMesh&&Kt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Kt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Kt.instancing===!1||!W.isInstancedMesh&&Kt.instancing===!0||W.isSkinnedMesh&&Kt.skinning===!1||!W.isSkinnedMesh&&Kt.skinning===!0||W.isInstancedMesh&&Kt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Kt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Kt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Kt.instancingMorph===!1&&W.morphTexture!==null||Kt.envMap!==Vt||B.fog===!0&&Kt.fog!==pt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Q.numPlanes||Kt.numIntersection!==Q.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==le||Kt.morphTargets!==Pt||Kt.morphNormals!==te||Kt.morphColors!==Pe||Kt.morphTargetsCount!==rn||Kt.numLightProbeGrids!==aa(T.state.lightProbeGridArray)?Ae=!0:(Kt.outputColorSpace!==_t||Kt.toneMapping!==Ie)&&(Ui=!0):(Ae=!0,Kt.__version=B.version);let an=Kt.currentProgram;(Ae===!0||Ui===!0)&&(an=Ui===!0?V(B,P,W,_t,Ie):C(B,P,W),N&&B.isNodeMaterial&&N.onUpdateProgram(B,an,Kt));let oa=!1,fi=!1,Fi=!1,Me=an.getUniforms(),Qe=Kt.uniforms;if(Ut.useProgram(an.program)&&(oa=!0,fi=!0,Fi=!0),B.id!==at&&(at=B.id,fi=!0),oa||rt!==x){Ut.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Me.setValue(G,"projectionMatrix",x.projectionMatrix),Me.setValue(G,"viewMatrix",x.matrixWorldInverse);let Ze=Me.map.cameraPosition;Ze!==void 0&&Ze.setValue(G,Rt.setFromMatrixPosition(x.matrixWorld)),ve.logarithmicDepthBuffer&&Me.setValue(G,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Me.setValue(G,"isOrthographic",x.isOrthographicCamera===!0),rt!==x&&(rt=x,fi=!0,Fi=!0)}if(Kt.needsLights&&(un.state.sunShadowMap.length>0&&Me.setValue(G,"sunShadowMap",un.state.sunShadowMap,$t),un.state.directionalShadowMap.length>0&&Me.setValue(G,"directionalShadowMap",un.state.directionalShadowMap,$t),un.state.spotShadowMap.length>0&&Me.setValue(G,"spotShadowMap",un.state.spotShadowMap,$t),un.state.pointShadowMap.length>0&&Me.setValue(G,"pointShadowMap",un.state.pointShadowMap,$t)),W.isSkinnedMesh){Me.setOptional(G,W,"bindMatrix"),Me.setOptional(G,W,"bindMatrixInverse");let Fe=W.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Me.setValue(G,"boneTexture",Fe.boneTexture,$t))}W.isBatchedMesh&&(Me.setOptional(G,W,"batchingTexture"),Me.setValue(G,"batchingTexture",W._matricesTexture,$t),Me.setOptional(G,W,"batchingIdTexture"),Me.setValue(G,"batchingIdTexture",W._indirectTexture,$t),Me.setOptional(G,W,"batchingColorTexture"),W._colorsTexture!==null&&Me.setValue(G,"batchingColorTexture",W._colorsTexture,$t));let Nn=H.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&et.update(W,H,an),(fi||Kt.receiveShadow!==W.receiveShadow)&&(Kt.receiveShadow=W.receiveShadow,Me.setValue(G,"receiveShadow",W.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&P.environment!==null&&(Qe.envMapIntensity.value=P.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=y_()),fi){if(Me.setValue(G,"toneMappingExposure",E.toneMappingExposure),Kt.needsLights&&It(Qe,Fi),pt&&B.fog===!0&&ot.refreshFogUniforms(Qe,pt),ot.refreshMaterialUniforms(Qe,B,St,kt,T.state.transmissionRenderTarget[x.id]),Kt.needsLights&&Kt.numLightProbeGrids>0){let Fe=M,Ze=0;for(let Zn of T.state.lightProbeGridArray)Zn.texture!==null&&(Fe.textures[Ze]=Zn.texture,Fe.min[Ze]=Zn.boundingBox.min,Fe.max[Ze]=Zn.boundingBox.max,Fe.resolution[Ze]=Zn.resolution,Ze++);for(let Zn in Fe)Fe[Zn].length=Ze;Qe.probesSH.value=Fe.textures,Qe.probesMin.value=Fe.min,Qe.probesMax.value=Fe.max,Qe.probesResolution.value=Fe.resolution}Gs.upload(G,tt(Kt),Qe,$t)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Gs.upload(G,tt(Kt),Qe,$t),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Me.setValue(G,"center",W.center),Me.setValue(G,"modelViewMatrix",W.modelViewMatrix),Me.setValue(G,"normalMatrix",W.normalMatrix),Me.setValue(G,"modelMatrix",W.matrixWorld),B.uniformsGroups!==void 0){let Fe=B.uniformsGroups;for(let Ze=0,Zn=Fe.length;Ze<Zn;Ze++){let Vc=Fe[Ze];Zt.update(Vc,an),Zt.bind(Vc,an)}}return an}function It(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Ft(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return xt},this.setRenderTargetTextures=function(x,P,H){let B=Ht.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ht.get(x.texture).__webglTexture=P,Ht.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){let H=Ht.get(x);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,H=0){xt=x,$=P,K=H;let B=null,W=!1,pt=!1;if(x){let _t=Ht.get(x);if(_t.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(G.FRAMEBUFFER,_t.__webglFramebuffer),ht.copy(x.viewport),it.copy(x.scissor),mt=x.scissorTest,Ut.viewport(ht),Ut.scissor(it),Ut.setScissorTest(mt),at=-1;return}else if(_t.__webglFramebuffer===void 0)$t.setupRenderTarget(x);else if(_t.__hasExternalTextures)$t.rebindTextures(x,Ht.get(x.texture).__webglTexture,Ht.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Wt=x.depthTexture;if(_t.__boundDepthTexture!==Wt){if(Wt!==null&&Ht.has(Wt)&&(x.width!==Wt.image.width||x.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(x)}}let Ct=x.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(pt=!0);let Vt=Ht.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Vt[P])?B=Vt[P][H]:B=Vt[P],W=!0):x.samples>0&&$t.useMultisampledRTT(x)===!1?B=Ht.get(x).__webglMultisampledFramebuffer:Array.isArray(Vt)?B=Vt[H]:B=Vt,ht.copy(x.viewport),it.copy(x.scissor),mt=x.scissorTest}else ht.copy(Yt).multiplyScalar(St).floor(),it.copy(Qt).multiplyScalar(St).floor(),mt=oe;if(H!==0&&(B=Z),Ut.bindFramebuffer(G.FRAMEBUFFER,B)&&Ut.drawBuffers(x,B),Ut.viewport(ht),Ut.scissor(it),Ut.setScissorTest(mt),W){let _t=Ht.get(x.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t.__webglTexture,H)}else if(pt){let _t=P;for(let Ct=0;Ct<x.textures.length;Ct++){let Vt=Ht.get(x.textures[Ct]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ct,Vt.__webglTexture,H,_t)}}else if(x!==null&&H!==0){let _t=Ht.get(x.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_t.__webglTexture,H)}at=-1};function Mt(x){let P=Ht.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=ve.textureFormatReadable(x.format),P.__typeReadable=ve.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,H,B,W,pt,At,_t=0){if(!(x&&x.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ht.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){Ut.bindFramebuffer(G.FRAMEBUFFER,Ct);try{let Vt=x.textures[_t],Wt=Vt.format,le=Vt.type;x.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+_t);let Pt=Mt(Vt);if(Pt.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-B&&H>=0&&H<=x.height-W&&G.readPixels(P,H,B,W,Tt.convert(Wt),Tt.convert(le),pt)}finally{let Vt=xt!==null?Ht.get(xt).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(x,P,H,B,W,pt,At,_t=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ht.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(P>=0&&P<=x.width-B&&H>=0&&H<=x.height-W){Ut.bindFramebuffer(G.FRAMEBUFFER,Ct);let Vt=x.textures[_t],Wt=Vt.format,le=Vt.type;x.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+_t);let Pt=Mt(Vt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.bufferData(G.PIXEL_PACK_BUFFER,pt.byteLength,G.STREAM_READ),G.readPixels(P,H,B,W,Tt.convert(Wt),Tt.convert(le),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Pe=xt!==null?Ht.get(xt).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,Pe);let Ie=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await au(G,Ie,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,pt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(te),G.deleteSync(Ie),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,H=0){let B=Math.pow(2,-H),W=Math.floor(x.image.width*B),pt=Math.floor(x.image.height*B),At=P!==null?P.x:0,_t=P!==null?P.y:0;$t.setTexture2D(x,0),G.copyTexSubImage2D(G.TEXTURE_2D,H,0,0,At,_t,W,pt),Ut.unbindTexture()},this.copyTextureToTexture=function(x,P,H=null,B=null,W=0,pt=0){let At,_t,Ct,Vt,Wt,le,Pt,te,Pe,Ie=x.isCompressedTexture?x.mipmaps[pt]:x.image;if(H!==null)At=H.max.x-H.min.x,_t=H.max.y-H.min.y,Ct=H.isBox3?H.max.z-H.min.z:1,Vt=H.min.x,Wt=H.min.y,le=H.isBox3?H.min.z:0;else{let Me=Math.pow(2,-W);At=Math.floor(Ie.width*Me),_t=Math.floor(Ie.height*Me),x.isDataArrayTexture?Ct=Ie.depth:x.isData3DTexture?Ct=Math.floor(Ie.depth*Me):Ct=1,Vt=0,Wt=0,le=0}B!==null?(Pt=B.x,te=B.y,Pe=B.z):(Pt=0,te=0,Pe=0);let Ee=Tt.convert(P.format),rn=Tt.convert(P.type),Kt;P.isData3DTexture?($t.setTexture3D(P,0),Kt=G.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?($t.setTexture2DArray(P,0),Kt=G.TEXTURE_2D_ARRAY):($t.setTexture2D(P,0),Kt=G.TEXTURE_2D),Ut.activeTexture(G.TEXTURE0),Ut.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,P.flipY),Ut.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Ut.pixelStorei(G.UNPACK_ALIGNMENT,P.unpackAlignment);let un=Ut.getParameter(G.UNPACK_ROW_LENGTH),Ae=Ut.getParameter(G.UNPACK_IMAGE_HEIGHT),Ui=Ut.getParameter(G.UNPACK_SKIP_PIXELS),an=Ut.getParameter(G.UNPACK_SKIP_ROWS),oa=Ut.getParameter(G.UNPACK_SKIP_IMAGES);Ut.pixelStorei(G.UNPACK_ROW_LENGTH,Ie.width),Ut.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ie.height),Ut.pixelStorei(G.UNPACK_SKIP_PIXELS,Vt),Ut.pixelStorei(G.UNPACK_SKIP_ROWS,Wt),Ut.pixelStorei(G.UNPACK_SKIP_IMAGES,le);let fi=x.isDataArrayTexture||x.isData3DTexture,Fi=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){let Me=Ht.get(x),Qe=Ht.get(P),Nn=Ht.get(Me.__renderTarget),Fe=Ht.get(Qe.__renderTarget);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ze=0;Ze<Ct;Ze++)fi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.get(x).__webglTexture,W,le+Ze),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.get(P).__webglTexture,pt,Pe+Ze)),G.blitFramebuffer(Vt,Wt,Vt+At,Wt+_t,Pt,te,Pt+At,te+_t,G.DEPTH_BUFFER_BIT,G.NEAREST);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(W!==0||x.isRenderTargetTexture||Ht.has(x)){let Me=Ht.get(x),Qe=Ht.get(P);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,F),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,k);for(let Nn=0;Nn<Ct;Nn++)fi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Me.__webglTexture,W,le+Nn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Me.__webglTexture,W),Fi?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Qe.__webglTexture,pt,Pe+Nn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Qe.__webglTexture,pt),W!==0?G.blitFramebuffer(Vt,Wt,Vt+At,Wt+_t,Pt,te,Pt+At,te+_t,G.COLOR_BUFFER_BIT,G.NEAREST):Fi?G.copyTexSubImage3D(Kt,pt,Pt,te,Pe+Nn,Vt,Wt,At,_t):G.copyTexSubImage2D(Kt,pt,Pt,te,Vt,Wt,At,_t);Ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Fi?x.isDataTexture||x.isData3DTexture?G.texSubImage3D(Kt,pt,Pt,te,Pe,At,_t,Ct,Ee,rn,Ie.data):P.isCompressedArrayTexture?G.compressedTexSubImage3D(Kt,pt,Pt,te,Pe,At,_t,Ct,Ee,Ie.data):G.texSubImage3D(Kt,pt,Pt,te,Pe,At,_t,Ct,Ee,rn,Ie):x.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,pt,Pt,te,At,_t,Ee,rn,Ie.data):x.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,pt,Pt,te,Ie.width,Ie.height,Ee,Ie.data):G.texSubImage2D(G.TEXTURE_2D,pt,Pt,te,At,_t,Ee,rn,Ie);Ut.pixelStorei(G.UNPACK_ROW_LENGTH,un),Ut.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ae),Ut.pixelStorei(G.UNPACK_SKIP_PIXELS,Ui),Ut.pixelStorei(G.UNPACK_SKIP_ROWS,an),Ut.pixelStorei(G.UNPACK_SKIP_IMAGES,oa),pt===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&G.generateMipmap(Kt),Ut.unbindTexture()},this.initRenderTarget=function(x){Ht.get(x).__webglFramebuffer===void 0&&$t.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?$t.setTextureCube(x,0):x.isData3DTexture?$t.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?$t.setTexture2DArray(x,0):$t.setTexture2D(x,0),Ut.unbindTexture()},this.resetState=function(){$=0,K=0,xt=null,Ut.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var $u={type:"change"},zc={type:"start"},ju={type:"end"},al=new Mi,Ju=new dn,M_=Math.cos(70*ui.DEG2RAD),Ye=new D,gn=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bc=1e-6,ol=class extends Br{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new je,this._lastTargetPosition=new D,this._quat=new je().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fs,this._sphericalDelta=new Fs,this._scale=1,this._panOffset=new D,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new D,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=b_.bind(this),this._onPointerDown=S_.bind(this),this._onPointerUp=w_.bind(this),this._onContextMenu=I_.bind(this),this._onMouseWheel=A_.bind(this),this._onKeyDown=C_.bind(this),this._onTouchStart=R_.bind(this),this._onTouchMove=P_.bind(this),this._onMouseDown=T_.bind(this),this._onMouseMove=E_.bind(this),this._interceptControlDown=L_.bind(this),this._interceptControlUp=D_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ce.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($u),this.update(),this.state=Ce.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ye.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(al.origin.copy(this.object.position),al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(al.direction))<M_?this.object.lookAt(this.target):(Ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),al.intersectPlane(Ju,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bc||this._lastTargetPosition.distanceToSquared(this.target)>Bc?(this.dispatchEvent($u),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ye.copy(s).sub(this.target);let r=Ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function S_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function b_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function w_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ju),this.state=Ce.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function T_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ce.DOLLY;break;case Ri.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}break;case Ri.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(zc)}function E_(i){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function A_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(i.preventDefault(),this.dispatchEvent(zc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ju))}function C_(i){this.enabled!==!1&&this._handleKeyDown(i)}function R_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1){this.state=Ce.NONE;break}this._handleTouchStartRotate(i),this.state=Ce.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1){this.state=Ce.NONE;break}this._handleTouchStartPan(i),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ce.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(zc)}function P_(i){switch(this._trackPointer(i),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ce.NONE}}function I_(i){this.enabled!==!1&&i.preventDefault()}function L_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function D_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ws={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},N_=new Ki(-1,1,1,-1,0,1),kc=class extends Be{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}},U_=new kc,Di=class{constructor(t){this._mesh=new se(U_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,N_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ll=class extends wn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=bn.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Di(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var na=class extends wn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},cl=class extends wn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var hl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new yt);this._width=n.width,this._height=n.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:We}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ll(Ws),this.copyPass.material.blending=li,this.timer=new Fr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}na!==void 0&&(a instanceof na?n=!0:a instanceof cl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ul=class extends wn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new jt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Qu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new jt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Xs=class i extends wn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new jt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(r,a,{type:We,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new ke(r,a,{type:We,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new ke(r,a,{type:We,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Qu;this.highPassUniforms=bn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bn.clone(Ws.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:Ws.vertexShader,fragmentShader:Ws.fragmentShader,premultipliedAlpha:!0,blending:Ji,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new jt,this._oldClearAlpha=1,this._basic=new In,this._fsQuad=new Di(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new yt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new ze({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Xs.BlurDirectionX=new yt(1,0);Xs.BlurDirectionY=new yt(0,1);var ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var dl=class extends wn{constructor(){super(),this.isOutputPass=!0,this.uniforms=bn.clone(ia.uniforms),this.material=new Ls({name:ia.name,uniforms:this.uniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader}),this._fsQuad=new Di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ge.getTransfer(this._outputColorSpace)===we&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Vr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Gc={volta:{id:"volta",brand:"PKM Motors",name:"Volta",trim:"Double Cab 2.8D 4x4",tagline:"Built for laterite, loads and long weekends.",chips:["2.8L turbo-diesel","150 kW \xB7 500 Nm","6-speed auto","Shift-on-the-fly 4WD"],width:1.88,wheelbase:3.08,front:2.52,rear:-2.8,track:1.58,tyreR:.392,tyreW:.27,archR:.49,archY:.42,sill:.47,belt:1.18,roof:1.84,mass:2150,power:150,torque:500,idle:780,redline:4e3,shiftUp:3300,shiftDown:1500,gears:[4.71,2.84,1.79,1.39,1,.78],finalDrive:3.73,top:49,engine:"diesel",horn:[404,508],paints:[{name:"Savanna Olive",hex:"#5d6449",metal:.35},{name:"Laterite Red",hex:"#7a2f22",metal:.45},{name:"Harmattan White",hex:"#e9e7e1",metal:.05},{name:"Graphite",hex:"#2f3236",metal:.6},{name:"Volta Blue",hex:"#1e3d5c",metal:.55},{name:"Kente Gold",hex:"#a9884a",metal:.7}]},regent:{id:"regent",brand:"PKM Motors",name:"Regent",trim:"Platinum V8 AWD",tagline:"Quiet power for state visits and school runs.",chips:["6.2L V8","313 kW \xB7 624 Nm","10-speed auto","Air ride suspension"],width:2.06,wheelbase:3.07,front:2.52,rear:-2.88,track:1.74,tyreR:.405,tyreW:.285,archR:.475,archY:.43,sill:.44,belt:1.25,roof:1.93,mass:2700,power:313,torque:624,idle:620,redline:6e3,shiftUp:5400,shiftDown:2e3,gears:[4.7,2.99,2.15,1.77,1.52,1.28,1,.85,.69,.64],finalDrive:3.23,top:59,engine:"v8",horn:[350,440],paints:[{name:"Obsidian Black",hex:"#0d0e10",metal:.4},{name:"Ridge Silver",hex:"#a7abae",metal:.85},{name:"Pearl White",hex:"#eeece6",metal:.15},{name:"Midnight Navy",hex:"#141e30",metal:.6},{name:"Cocoa Bronze",hex:"#4a3428",metal:.7},{name:"Jubilee Green",hex:"#1d3b2c",metal:.55}]}},fl=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function td(i,t,e={}){let n=Gc[t],s=!!i.ColorManagement,r=s?1:.06,a=C=>{let V=new i.Color(C);return s||V.convertSRGBToLinear(),V},o=C=>("colorSpace"in C?C.colorSpace=i.SRGBColorSpace:C.encoding=i.sRGBEncoding,C),l=(C,V,tt)=>{let j=document.createElement("canvas");return j.width=C,j.height=V,tt(j.getContext("2d"),C,V),j},c=t==="regent",u=n.width,p=u/2,d=n.belt,f=n.roof,g=n.wheelbase/2,y=new i.MeshPhysicalMaterial({color:a(n.paints[0].hex),metalness:n.paints[0].metal,roughness:.32,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),h={paint:y,black:new i.MeshStandardMaterial({color:a("#121314"),roughness:.55,metalness:.1}),piano:new i.MeshPhysicalMaterial({color:a("#050506"),roughness:.12,metalness:.2,clearcoat:1,clearcoatRoughness:.05}),trim:new i.MeshStandardMaterial({color:a("#1b1c1d"),roughness:.85,metalness:0}),chrome:new i.MeshStandardMaterial({color:a("#dfe3e6"),roughness:.06,metalness:1,envMapIntensity:1.6}),satin:new i.MeshStandardMaterial({color:a("#9ea3a6"),roughness:.32,metalness:1}),glass:new i.MeshPhysicalMaterial({color:a("#05080a"),roughness:.02,metalness:.3,transparent:!0,opacity:.86,envMapIntensity:1.7,clearcoat:1,clearcoatRoughness:0}),lens:new i.MeshPhysicalMaterial({color:a("#e8eef2"),roughness:.02,metalness:0,transparent:!0,opacity:.35,clearcoat:1}),head:new i.MeshStandardMaterial({color:a("#f4f7fb"),emissive:a("#ffffff"),emissiveIntensity:.6,roughness:.25,metalness:.4}),drl:new i.MeshStandardMaterial({color:a("#ffffff"),emissive:a("#eef4ff"),emissiveIntensity:2.2,roughness:.3}),tail:new i.MeshStandardMaterial({color:a("#5a0b0b"),emissive:a("#ff1a10"),emissiveIntensity:.55,roughness:.2,metalness:.2}),amber:new i.MeshStandardMaterial({color:a("#6b3d07"),emissive:a("#ff8a00"),emissiveIntensity:0,roughness:.25}),reverse:new i.MeshStandardMaterial({color:a("#bfc4c8"),emissive:a("#ffffff"),emissiveIntensity:0,roughness:.2}),tyre:null,rim:null,interior:new i.MeshStandardMaterial({color:a(c?"#3a2a20":"#232425"),roughness:.78}),leather:new i.MeshStandardMaterial({color:a(c?"#8b6a4f":"#36383a"),roughness:.6}),aperture:new i.MeshStandardMaterial({color:a("#141414"),roughness:.9}),under:new i.MeshStandardMaterial({color:a("#0b0b0b"),roughness:.95}),disc:new i.MeshStandardMaterial({color:a("#6d6f70"),roughness:.45,metalness:.9}),caliper:new i.MeshStandardMaterial({color:a(c?"#141414":"#8f1d18"),roughness:.4,metalness:.3})},m=l(2048,256,(C,V,tt)=>{C.fillStyle="#7a7a7a",C.fillRect(0,0,V,tt);let j=72;for(let nt=0;nt<j;nt++){let It=nt/j*V;C.fillStyle="#2a2a2a",C.fillRect(It+4,tt*.36,V/j*.42,tt*.11),C.fillRect(It+V/j*.45,tt*.49,V/j*.42,tt*.11),c||C.fillRect(It+2,tt*.3,V/j*.2,tt*.38)}}),S=l(2048,256,(C,V,tt)=>{C.fillStyle="#191919",C.fillRect(0,0,V,tt),C.fillStyle="#2b2b2b",C.font="700 46px Inter, Arial, sans-serif",C.textBaseline="middle";let j=c?"PKM GRAND TOURING  \xB7  285/45 R22  \xB7  ":"PKM TERRA A/T  \xB7  265/65 R17  \xB7  ";for(let nt=0;nt<2;nt++)C.fillText(j,nt*V/2+40,tt*.15);for(let nt=0;nt<2;nt++)C.fillText(j,nt*V/2+40,tt*.85)}),w=new i.CanvasTexture(m);w.wrapS=i.RepeatWrapping;let M=o(new i.CanvasTexture(S));M.wrapS=i.RepeatWrapping,h.tyre=new i.MeshStandardMaterial({color:a("#1c1c1c"),roughness:.9,bumpMap:w,bumpScale:2.5,map:M}),h.rim=new i.MeshPhysicalMaterial({color:a(c?"#d9dcdf":"#3a3d40"),metalness:1,roughness:c?.12:.35,clearcoat:.6});let A=o(new i.CanvasTexture(l(256,256,(C,V)=>{let tt=V/2,j=C.createLinearGradient(0,0,V,V);j.addColorStop(0,"#f3f3f3"),j.addColorStop(.5,"#9b9b9b"),j.addColorStop(1,"#e8e8e8"),C.fillStyle=j,C.beginPath(),C.arc(tt,tt,tt-4,0,7),C.fill(),C.fillStyle="#121212",C.beginPath(),C.arc(tt,tt,tt-22,0,7),C.fill(),C.fillStyle="#d9c7a3",C.font="800 82px Inter, Arial, sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillText("PKM",tt,tt+4)})));h.emblem=new i.MeshStandardMaterial({map:A,metalness:.6,roughness:.25});let T=new i.Group;T.name="PKM "+n.name;let v=new i.Group;v.rotation.y=-Math.PI/2,T.add(v);let b=new i.Group;v.add(b);let O=[],E=(C,V,tt=b,j=!0)=>{let nt=new i.Mesh(C,V);return nt.castShadow=j,nt.receiveShadow=!0,tt.add(nt),nt},I=(C,V,tt,j,nt,It,Ft,Mt=b)=>{let x=E(new i.BoxGeometry(C,V,tt),Ft,Mt);return x.position.set(j,nt,It),x},N=(C,V,tt,j,nt,It=b)=>{let Ft=new i.Shape,Mt=-C/2,x=-V/2;j=Math.min(j,C/2-.001,V/2-.001),Ft.moveTo(Mt+j,x),Ft.lineTo(Mt+C-j,x),Ft.quadraticCurveTo(Mt+C,x,Mt+C,x+j),Ft.lineTo(Mt+C,x+V-j),Ft.quadraticCurveTo(Mt+C,x+V,Mt+C-j,x+V),Ft.lineTo(Mt+j,x+V),Ft.quadraticCurveTo(Mt,x+V,Mt,x+V-j),Ft.lineTo(Mt,x+j),Ft.quadraticCurveTo(Mt,x,Mt+j,x);let P=Math.min(j,tt/2-.001)*.9,H=new i.ExtrudeGeometry(Ft,{depth:Math.max(.001,tt-2*P),bevelEnabled:!0,bevelThickness:P,bevelSize:P,bevelOffset:-P,bevelSegments:3,curveSegments:6});return H.translate(0,0,-(tt-2*P)/2),E(H,nt,It)};function Z(C){let V=C.index?C.toNonIndexed():C,tt=V.attributes.position,j=tt.count,nt=new Float32Array(j),It=new Map,Ft=new Array(j),Mt=new i.Vector3,x=new i.Vector3,P=new i.Vector3,H=[];for(let _t=0;_t<j/3;_t++)Mt.fromBufferAttribute(tt,_t*3),x.fromBufferAttribute(tt,_t*3+1),P.fromBufferAttribute(tt,_t*3+2),H.push(new i.Vector3().subVectors(P,x).cross(new i.Vector3().subVectors(Mt,x)));for(let _t=0;_t<j;_t++){let Ct=Math.round(tt.getX(_t)*2e3)+"_"+Math.round(tt.getY(_t)*2e3)+"_"+Math.round(tt.getZ(_t)*2e3);Ft[_t]=Ct;let Vt=It.get(Ct);Vt||It.set(Ct,Vt=[]),Vt.push(_t)}let B=new Float32Array(j*3),W=Math.cos(.62),pt=new i.Vector3,At=new i.Vector3;for(let _t=0;_t<j;_t++){let Ct=H[_t/3|0];At.copy(Ct).normalize(),pt.set(0,0,0);for(let Vt of It.get(Ft[_t])){let Wt=H[Vt/3|0];At.dot(P.copy(Wt).normalize())>W&&pt.add(Wt)}pt.normalize(),B[_t*3]=pt.x,B[_t*3+1]=pt.y,B[_t*3+2]=pt.z}return V.setAttribute("normal",new i.BufferAttribute(B,3)),V}function F(C){let V=C.attributes.position,tt=new Map,j=[],nt=[],It=C.index?C.index.array:null,Ft=It?It.length:V.count;for(let x=0;x<Ft;x++){let P=It?It[x]:x,H=V.getX(P),B=V.getY(P),W=V.getZ(P),pt=Math.round(H*2e3)+"_"+Math.round(B*2e3)+"_"+Math.round(W*2e3),At=tt.get(pt);At===void 0&&(At=nt.length/3,nt.push(H,B,W),tt.set(pt,At)),j.push(At)}let Mt=new i.BufferGeometry;return Mt.setAttribute("position",new i.Float32BufferAttribute(nt,3)),Mt.setIndex(j),Mt.computeVertexNormals(),Mt}let k=n.front,$=n.rear;function K(C,V,tt){let j=1;return j-=.11*fl(k-.55,k,C)**1.4,j-=.06*fl($+.45,$,C)**1.4,tt?j-=.15*Math.max(0,Math.min(1,(V-d)/(f-d))):(j-=.035*fl(d-.3,d,V),j-=.03*fl(.7,n.sill,V)),p*j}function xt(C,V){let tt=C.getPoints(V),j=[];for(let nt=0;nt<tt.length;nt++){let It=tt[nt],Ft=tt[(nt+1)%tt.length];j.push(It);let Mt=It.distanceTo(Ft),x=Math.floor(Mt/.1);for(let P=1;P<x;P++)j.push(It.clone().lerp(Ft,P/x))}return j.length>1&&j[0].distanceTo(j[j.length-1])<1e-4&&j.pop(),new i.Shape(j)}function at(C,V,tt){let j=Array.from((C.index?C.toNonIndexed():C).attributes.position.array);for(let It=0;It<tt;It++){let Ft=[],Mt=B=>[j[B*3],j[B*3+1],j[B*3+2]],x=(B,W)=>[(B[0]+W[0])/2,(B[1]+W[1])/2,(B[2]+W[2])/2],P=(B,W)=>Math.hypot(B[0]-W[0],B[1]-W[1],B[2]-W[2]),H=!1;for(let B=0;B<j.length/9;B++){let W=Mt(B*3),pt=Mt(B*3+1),At=Mt(B*3+2),_t=P(W,pt)>V,Ct=P(pt,At)>V,Vt=P(At,W)>V,Wt=(Pt,te,Pe)=>Ft.push(...Pt,...te,...Pe),le=_t+Ct+Vt;if(le&&(H=!0),le===0)Wt(W,pt,At);else if(le===3){let Pt=x(W,pt),te=x(pt,At),Pe=x(At,W);Wt(W,Pt,Pe),Wt(Pt,pt,te),Wt(Pe,te,At),Wt(Pt,te,Pe)}else if(le===1)if(_t){let Pt=x(W,pt);Wt(W,Pt,At),Wt(Pt,pt,At)}else if(Ct){let Pt=x(pt,At);Wt(W,pt,Pt),Wt(W,Pt,At)}else{let Pt=x(At,W);Wt(W,pt,Pt),Wt(Pt,pt,At)}else if(_t)if(Ct){let Pt=x(W,pt),te=x(pt,At);Wt(W,Pt,At),Wt(Pt,te,At),Wt(Pt,pt,te)}else{let Pt=x(W,pt),te=x(At,W);Wt(W,Pt,te),Wt(Pt,pt,At),Wt(Pt,At,te)}else{let Pt=x(pt,At),te=x(At,W);Wt(W,pt,Pt),Wt(W,Pt,te),Wt(te,Pt,At)}}if(j=Ft,!H)break}let nt=new i.BufferGeometry;return nt.setAttribute("position",new i.Float32BufferAttribute(j,3)),nt}function rt(C,V,tt,j=28){let nt=tt?.05:.075,It=xt(C,j),Ft=new i.ExtrudeGeometry(It,{depth:V-2*nt,steps:1,bevelEnabled:!0,bevelThickness:nt,bevelSize:nt*.85,bevelOffset:-nt*.85,bevelSegments:5,curveSegments:j}),Mt=at(Ft,.14,7),x=Mt.attributes.position,P=V/2,H=V/u,B=new Int8Array(x.count);for(let Ct=0;Ct<x.count;Ct++){let Vt=x.getX(Ct),Wt=x.getY(Ct),le=x.getZ(Ct)-(V-2*nt)/2;Math.abs(Math.abs(le)-P)<1e-4&&(B[Ct]=Math.sign(le)),x.setZ(Ct,le/P*K(Vt,Wt,tt)*H)}let W=Z(Mt),pt=W.attributes.normal,At=.01,_t=new i.Vector3;for(let Ct=0;Ct<x.count;Ct++)if(B[Ct]){let Vt=x.getX(Ct),Wt=x.getY(Ct),le=(K(Vt+At,Wt,tt)-K(Vt-At,Wt,tt))/(2*At)*H,Pt=(K(Vt,Wt+At,tt)-K(Vt,Wt-At,tt))/(2*At)*H;_t.set(-le*B[Ct],-Pt*B[Ct],1*B[Ct]).normalize(),pt.setXYZ(Ct,_t.x,_t.y,_t.z)}return W}let ht=(C,V,tt)=>{let j=n.archR,nt=n.archY,It=Math.asin(Math.min(1,(n.sill-nt)/j));tt>0?C.absarc(V,nt,j,Math.PI-It,It,!0):C.absarc(V,nt,j,It,Math.PI-It,!1)},it=(C,V,tt,j,nt,It,Ft)=>{let Mt=new i.Shape,x=n.sill;return nt?Mt.moveTo(C+.08,x-.02):Mt.moveTo(C,x),Ft&&(Mt.lineTo(-g-n.archR-.01,x),ht(Mt,-g,1)),It&&(Mt.lineTo(g-n.archR-.01,x),ht(Mt,g,1)),j?(Mt.lineTo(V-.1,x-.04),Mt.quadraticCurveTo(V+.005,x-.02,V+.01,x+.14),tt.front(Mt)):(Mt.lineTo(V,x),Mt.lineTo(V,tt.h1)),tt.top(Mt),nt?(Mt.lineTo(C+.005,tt.h0-.06),Mt.quadraticCurveTo(C-.01,(tt.h0+x)/2,C+.01,x+.12),Mt.quadraticCurveTo(C,x-.02,C+.08,x-.02)):Mt.lineTo(C,x),Mt},mt=c?1.16:1.06,X=c?.92:.96,lt={front:C=>{C.lineTo(k+.02,c?.96:.86),C.quadraticCurveTo(k+.02,mt+.02,k-.08,mt)}},gt;if(c){gt=$;let C=new i.Shape;C.moveTo($+.08,n.sill-.02),C.lineTo(-g-n.archR-.01,n.sill),ht(C,-g,1),C.lineTo(g-n.archR-.01,n.sill),ht(C,g,1),C.lineTo(k-.1,n.sill-.04),C.quadraticCurveTo(k+.005,n.sill-.02,k+.01,n.sill+.14),lt.front(C),C.lineTo(X,d),C.lineTo($+.04,d-.01),C.quadraticCurveTo($-.01,d-.03,$-.005,d-.12),C.lineTo($-.01,n.sill+.12),C.quadraticCurveTo($,n.sill-.02,$+.08,n.sill-.02),E(rt(C,u,!1),y)}else{gt=-1.32,lt.h0=d,lt.h1=d,lt.top=Ft=>{Ft.quadraticCurveTo(X+.6,d+.03,X,d),Ft.lineTo(gt,d)};let C=new i.Shape;C.moveTo(gt,n.sill),C.lineTo(g-n.archR-.01,n.sill),ht(C,g,1),C.lineTo(k-.1,n.sill-.04),C.quadraticCurveTo(k+.005,n.sill-.02,k+.01,n.sill+.14),lt.front(C),C.lineTo(X,d),C.lineTo(gt,d),C.lineTo(gt,n.sill),E(rt(C,u,!1),y);let V=.94,tt=$,j=gt-.03,nt=new i.Shape;nt.moveTo(tt+.06,n.sill),nt.lineTo(-g-n.archR-.01,n.sill),ht(nt,-g,1),nt.lineTo(j,n.sill),nt.lineTo(j,V),nt.lineTo(tt+.02,V),nt.quadraticCurveTo(tt,V,tt,V-.05),nt.lineTo(tt,n.sill+.06),nt.quadraticCurveTo(tt,n.sill,tt+.06,n.sill),E(rt(nt,u,!1),y);for(let Ft of[-1,1]){let Mt=new i.Shape;Mt.moveTo(tt+.03,V-.02),Mt.lineTo(j,V-.02),Mt.lineTo(j,d),Mt.lineTo(tt+.03,d-.01);let x=new i.ExtrudeGeometry(Mt,{depth:.05,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelOffset:-.015,bevelSegments:2}),P=E(x,y);P.position.z=Ft>0?K(-2,1)-.065:-K(-2,1)+.015,I(j-tt-.05,.035,.09,(tt+j)/2,d+.01,Ft*(K(-2,1)-.04),h.black)}I(.06,d-V,u-.16,j-.02,(d+V)/2,0,y),I(j-tt-.1,.012,u-.2,(tt+j)/2,V+.006,0,h.trim);for(let Ft=0;Ft<6;Ft++)I(j-tt-.12,.02,.05,(tt+j)/2,V+.02,-.65+Ft*.26,h.trim);for(let Ft of[-1,1])E(new i.CylinderGeometry(.035,.035,.42,12),h.black).position.set(j-.12,d+.2,Ft*(p-.14));let It=E(new i.CylinderGeometry(.035,.035,u-.28,12),h.black);It.rotation.x=Math.PI/2,It.position.set(j-.12,d+.41,0);for(let Ft of[g,-g])for(let Mt of[-1,1]){let x=new i.Shape,P=n.archR+.005,H=n.archR+.075;x.absarc(0,0,H,Math.PI+.12,-.12,!0),x.absarc(0,0,P,-.12,Math.PI+.12,!1);let B=new i.ExtrudeGeometry(x,{depth:.05,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelOffset:-.012,bevelSegments:2,curveSegments:24});E(B,h.trim).position.set(Ft,n.archY,Mt>0?K(Ft,.8)-.03:-K(Ft,.8)-.03)}}let kt=new i.Shape,St=c?.06:.16,Lt=c?$+.2:gt+.12,fe=c?$+.04:gt+.02;kt.moveTo(fe,d-.02),kt.lineTo(X-.02,d-.02),kt.quadraticCurveTo((X+St)/2+.05,(d+f)/2-.02,St,f-.04),kt.quadraticCurveTo(St-.18,f+.005,St-.4,f),kt.lineTo(Lt+.25,f-.005),kt.quadraticCurveTo(Lt,f-.01,Lt-(c?.1:.06),f-.08),kt.lineTo(fe,d-.02);let Yt=u-.06;E(rt(kt,Yt,!0,24),h.glass);let Qt=new i.Shape;Qt.moveTo(St-.05,f-.05),Qt.quadraticCurveTo(St-.18,f+.012,St-.4,f+.008),Qt.lineTo(Lt+.25,f+.003),Qt.quadraticCurveTo(Lt+.005,f-.004,Lt-(c?.09:.05),f-.08),Qt.lineTo(Lt-(c?.06:.02),f-.1),Qt.lineTo(St-.05,f-.1),E(rt(Qt,Yt+.012,!0,16),y);let oe=(C,V)=>K(C,V,!0)*(Yt/u)+.004,ct=(C,V,tt,j,nt,It,Ft)=>{let Mt=new i.Vector3(C,V,Ft*oe(C,V)),x=new i.Vector3(tt,j,Ft*oe(tt,j)),P=Mt.distanceTo(x),H=E(new i.BoxGeometry(P,nt,.012),It);H.position.copy(Mt).add(x).multiplyScalar(.5),H.quaternion.setFromUnitVectors(new i.Vector3(1,0,0),x.clone().sub(Mt).normalize());let B=new i.Vector3(0,0,Ft);return H.rotation.x+=Ft*-.14*0,H},ft=c?[.98,-.25,-1.5]:[.98,-.2,gt];for(let C of[-1,1]){ct(X-.03,d+.02,St-.03,f-.06,.07,y,C),ct(ft[1]+.02,d+.02,ft[1]-.04,f-.06,.09,h.piano,C),c?(ct(ft[2],d+.02,ft[2]-.05,f-.06,.12,h.piano,C),ct($+.3,d+.02,Lt+.05,f-.06,.22,y,C)):ct(gt+.07,d+.02,Lt-.02,f-.07,.12,y,C);let V=I(X-fe-.06,.03,.02,(X+fe)/2,d+.008,C*(K(0,d)-.01),c?h.chrome:h.black);V.position.z=C*(oe(0,d+.01)+.012),c&&ct(St-.45,f-.085,$+.45,f-.095,.022,h.chrome,C)}for(let C of[-.45,.15]){let V=I(.02,.012,.62,X+.02,d+.03,C,h.black);V.rotation.y=.18}let wt={};function Ot(C,V,tt,j,nt){let It=new i.Group,Ft=j*(K((V+tt)/2,.85)+.002);It.position.set(nt?tt:V,0,Ft),b.add(It);let Mt=n.sill+.04,x=d-.03,P=new i.Shape,H=nt?-(tt-V):0,B=nt?0:tt-V,W=nt?tt:V,pt=Pt=>{let te=Pt+W,Pe=Mt;for(let Ie of[g,-g]){let Ee=te-Ie;Math.abs(Ee)<n.archR+.05&&(Pe=Math.max(Pe,n.archY+Math.sqrt(Math.max(0,(n.archR+.05)**2-Ee*Ee))+.015))}return Math.min(Pe,x-.15)};P.moveTo(H+.01,pt(H+.01));for(let Pt=1;Pt<=24;Pt++){let te=H+.01+(B-H-.02)*Pt/24;P.lineTo(te,pt(te))}P.lineTo(B-.005,x),P.lineTo(H+.005,x),P.lineTo(H+.01,pt(H+.01));let At=new i.ExtrudeGeometry(P,{depth:.022,bevelEnabled:!0,bevelThickness:.008,bevelSize:.01,bevelOffset:-.01,bevelSegments:2});At.translate(0,0,j>0?-.012:-.01);let _t=E(At,y,It);E(new i.BoxGeometry(tt-V-.06,x-Mt-.06,.04),h.interior,It).position.set((H+B)/2,(Mt+x)/2,-j*.03);let Vt=nt?H+.22:B-.22;E(new i.BoxGeometry(.2,.035,.03),c?h.chrome:h.black,It).position.set(Vt,x-.13,j*.022);let le=E(new i.PlaneGeometry(tt-V-.08,x-Mt-.04),h.aperture);return le.position.set((V+tt)/2,(Mt+x)/2,Ft-j*.006),le.rotation.y=j>0?0:Math.PI,It.userData={axis:"y",open:0,target:0,max:j*(nt?-1.1:1.1)*-1},_t.userData.panel=C,O.push(_t),wt[C]=It,It}Ot("frontLeft",ft[1]+.01,ft[0],-1,!0),Ot("frontRight",ft[1]+.01,ft[0],1,!0),Ot("rearLeft",ft[2]+.02,ft[1]-.01,-1,!0),Ot("rearRight",ft[2]+.02,ft[1]-.01,1,!0);for(let C of["frontLeft","frontRight","rearLeft","rearRight"]){let V=wt[C],tt=C.endsWith("Left")?-1:1;V.userData.max=tt*1.15,V.userData.sign=1}{let C=new i.Group;C.position.set(X-.02,d+.004,0),b.add(C);let V=k-.12-X,tt=Math.atan2(mt-d,V),j=new i.Shape,nt=K(X+V/2,d)-.06;j.moveTo(0,-nt),j.lineTo(V,-nt+.07),j.quadraticCurveTo(V+.04,0,V,nt-.07),j.lineTo(0,nt),j.lineTo(0,-nt);let It=new i.ExtrudeGeometry(j,{depth:.02,bevelEnabled:!0,bevelThickness:.01,bevelSize:.02,bevelOffset:-.02,bevelSegments:3});It.rotateX(Math.PI/2),It.translate(0,.02,0);let Ft=E(It,y,C);Ft.rotation.z=tt;let Mt=N(V*.6,.02,c?.9:.75,.02,y,C);Mt.position.set(V*.45,.025+Math.sin(tt)*V*.45,0),Mt.rotation.z=tt,C.userData={axis:"z",open:0,target:0,max:.9},Ft.userData.panel="hood",O.push(Ft,Mt),wt.hood=C;let x=I(V-.2,.2,u-.5,X+V/2,Math.min(d,mt)-.16,0,h.under);N(.6,.18,.7,.04,h.satin).position.set(X+V*.55,d-.16,0),N(.48,.05,.56,.03,h.piano).position.set(X+V*.55,d-.07,0)}if(c){let C=new i.Group;C.position.set(Lt-.05,f-.07,0),b.add(C);let V=f-.07-.58,tt=N(.07,V,u-.16,.04,y,C);tt.position.set(-.13,-V/2,0),tt.rotation.z=-.06;let j=N(.02,V*.36,u-.46,.04,h.glass,C);j.position.set(-.17,-V*.25,0),j.rotation.z=-.06;let nt=Nt("REGENT",.7,.09);nt.position.set(-.175,-V*.62,0),nt.rotation.y=-Math.PI/2,C.add(nt);let It=E(new i.CircleGeometry(.065,32),h.emblem,C);It.position.set(-.176,-V*.52,0),It.rotation.y=-Math.PI/2,C.userData={axis:"z",open:0,target:0,max:-1.2},tt.userData.panel="tailgate",O.push(tt),wt.tailgate=C}else{let C=new i.Group;C.position.set($+.02,.96,0),b.add(C);let V=N(.06,d-.96,u-.08,.02,y,C);V.position.set(0,(d-.96)/2,0);let tt=I(.03,.04,.24,-.03,d-.96-.08,0,h.black,C),j=Nt("VOLTA",.6,.09);j.position.set(-.032,.11,0),j.rotation.y=-Math.PI/2,C.add(j),C.userData={axis:"z",open:0,target:0,max:Math.PI/2},V.userData.panel="tailgate",O.push(V),wt.tailgate=C}function Nt(C,V,tt){let j=o(new i.CanvasTexture(l(512,80,(nt,It,Ft)=>{nt.clearRect(0,0,It,Ft),nt.fillStyle="#ffffff",nt.font="700 58px Inter, Arial, sans-serif",nt.textAlign="center",nt.textBaseline="middle","letterSpacing"in nt&&(nt.letterSpacing="22px"),nt.fillText(C,It/2,Ft/2+2)})));return new i.Mesh(new i.PlaneGeometry(V,tt),new i.MeshStandardMaterial({map:j,transparent:!0,metalness:1,roughness:.15,color:a("#e8e8e8")}))}let Rt=new i.Group;Rt.position.set(k+.012,0,0),b.add(Rt);let zt=c?.62:.58,qt=mt-.05;if(c){let C=new i.CanvasTexture(l(512,256,(x,P,H)=>{x.fillStyle="#050505",x.fillRect(0,0,P,H),x.strokeStyle="#ffffff",x.lineWidth=5;for(let B=-H;B<P+H;B+=26)x.beginPath(),x.moveTo(B,0),x.lineTo(B+H,H),x.stroke(),x.beginPath(),x.moveTo(B,H),x.lineTo(B+H,0),x.stroke()})),V=new i.MeshStandardMaterial({color:a("#9c9fa2"),metalnessMap:C,metalness:1,roughness:.18,map:o(C)}),tt=1.25,j=qt-zt-.05,nt=E(new i.PlaneGeometry(tt,j),V,Rt);nt.rotation.y=Math.PI/2,nt.position.set(.004,(zt+qt)/2,0);for(let[x,P,H,B]of[[tt+.06,.035,qt-.02,0],[tt+.06,.035,zt+.02,0]])I(.03,P,x,.01,H,B,h.chrome,Rt);for(let x of[-tt/2-.015,tt/2+.015])I(.03,j+.06,.035,.01,(zt+qt)/2,x,h.chrome,Rt);let It=E(new i.CircleGeometry(.075,40),h.emblem,Rt);It.rotation.y=Math.PI/2,It.position.set(.03,(zt+qt)/2+.03,0);for(let x of[-1,1]){let P=I(.03,.42,.045,-.005,qt-.2,x*(p-.14),h.drl,Rt);N(.05,.1,.32,.03,h.piano,Rt).position.set(-.01,qt-.06,x*(p-.3));for(let B=0;B<3;B++){let W=E(new i.CylinderGeometry(.03,.03,.02,20),h.head,Rt);W.rotation.z=Math.PI/2,W.position.set(.02,qt-.06,x*(p-.4+B*.09))}I(.03,.18,.03,-.004,qt-.4,x*(p-.14),h.amber,Rt).userData.ind=x}N(.12,.26,u-.12,.06,y,Rt).position.set(-.04,.5,0),I(.02,.025,u-.5,.025,.47,0,h.chrome,Rt),N(.04,.1,1.2,.03,h.black,Rt).position.set(0,.43,0)}else{N(.06,qt-zt,1.12,.05,h.piano,Rt).position.set(0,(zt+qt)/2,0);for(let nt=0;nt<4;nt++)I(.025,.035,1,.025,zt+.08+nt*.1,0,nt===1?h.chrome:h.black,Rt);let V=E(new i.CircleGeometry(.07,40),h.emblem,Rt);V.rotation.y=Math.PI/2,V.position.set(.045,zt+.21,0);for(let nt of[-1,1]){let It=N(.05,.13,.4,.04,h.piano,Rt);It.position.set(-.02,qt-.07,nt*(p-.29)),It.rotation.y=nt*.18;let Ft=I(.02,.022,.38,.012,qt-.015,nt*(p-.3),h.drl,Rt);Ft.rotation.y=nt*.18;for(let x=0;x<2;x++){let P=E(new i.CylinderGeometry(.034,.034,.02,20),h.head,Rt);P.rotation.z=Math.PI/2,P.position.set(.012,qt-.08,nt*(p-.36+x*.12))}I(.02,.03,.12,0,qt-.15,nt*(p-.2),h.amber,Rt).userData.ind=nt;let Mt=E(new i.CylinderGeometry(.04,.04,.03,20),h.head,Rt);Mt.rotation.z=Math.PI/2,Mt.position.set(-.03,.47,nt*(p-.3))}N(.14,.24,u-.08,.05,h.trim,Rt).position.set(-.04,.48,0);let j=N(.08,.1,.9,.04,h.satin,Rt);j.position.set(-.02,.36,0),j.rotation.z=-.4;for(let nt of[-.4,.4]){let It=E(new i.TorusGeometry(.035,.012,8,16),h.caliper,Rt);It.position.set(.04,.42,nt),It.rotation.y=Math.PI/2}}let ee=o(new i.CanvasTexture(l(1040,224,(C,V,tt)=>{C.fillStyle="#fbfbf7",C.beginPath(),C.moveTo(18,0),C.arcTo(V,0,V,tt,18),C.arcTo(V,tt,0,tt,18),C.arcTo(0,tt,0,0,18),C.arcTo(0,0,V,0,18),C.fill();let nt=C.createLinearGradient(0,0,0,tt);nt.addColorStop(0,"rgba(255,255,255,.6)"),nt.addColorStop(1,"rgba(0,0,0,.06)"),C.fillStyle=nt,C.fillRect(0,0,V,tt),C.strokeStyle="#111",C.lineWidth=10,C.strokeRect(14,14,V-28,tt-28),C.fillStyle="#ce1126",C.fillRect(30,30,92,54),C.fillStyle="#fcd116",C.fillRect(30,84,92,54),C.fillStyle="#006b3f",C.fillRect(30,138,92,54),C.fillStyle="#000",C.beginPath();for(let It=0;It<10;It++){let Ft=-Math.PI/2+It*Math.PI/5,Mt=It%2?7:17;C.lineTo(76+Math.cos(Ft)*Mt,111+Math.sin(Ft)*Mt)}C.fill(),C.fillStyle="#111",C.font="800 30px Inter, Arial, sans-serif",C.textAlign="center",C.fillText("GH",76,208),C.font="800 138px Inter, Arial, sans-serif",C.textBaseline="middle","letterSpacing"in C&&(C.letterSpacing="4px"),C.fillStyle="rgba(0,0,0,.18)",C.fillText("BU 0858-26",V/2+72,tt/2+10),C.fillStyle="#111",C.fillText("BU 0858-26",V/2+70,tt/2+7)}))),ie=new i.MeshStandardMaterial({map:ee,roughness:.4}),G=E(new i.PlaneGeometry(.52,.112),ie,Rt,!1);G.rotation.y=Math.PI/2,G.position.set(.075,.5,0);let re=new i.Group;re.position.set($-.012,0,0),b.add(re);let ne=[],ve=[];if(c){for(let V of[-1,1]){let tt=I(.04,.62,.08,0,d+.05,V*(p-.07),h.tail,re);ne.push(tt);let j=I(.04,.05,.28,0,d+.33,V*(p-.2),h.tail,re);ne.push(j),I(.042,.12,.05,.003,d-.12,V*(p-.08),h.amber,re).userData.ind=V,I(.042,.08,.05,.003,d-.22,V*(p-.08),h.reverse,re);let nt=E(new i.CylinderGeometry(.045,.045,.14,18,1,!0),h.chrome,re);nt.rotation.z=Math.PI/2,nt.position.set(0,.4,V*.55)}N(.14,.24,u-.1,.06,y,re).position.set(.04,.52,0),I(.02,.025,u-.6,-.03,.6,0,h.chrome,re)}else{for(let nt of[-1,1]){let It=N(.05,.42,.11,.03,h.tail,re);It.position.set(0,d-.2,nt*(p-.06)),ne.push(It),I(.052,.08,.08,.004,d-.34,nt*(p-.06),h.amber,re).userData.ind=nt,I(.052,.06,.08,.004,d-.07,nt*(p-.06),h.reverse,re)}N(.16,.18,u-.1,.04,h.satin,re).position.set(.03,.52,0);let V=I(.1,.03,.4,.02,.62,0,h.black,re),tt=E(new i.CylinderGeometry(.035,.035,.2,14,1,!0),h.satin,re);tt.rotation.z=Math.PI/2,tt.position.set(.05,.36,.55);let j=I(.03,.03,.42,gt+.05-($-.012),f-.02,0,h.tail,re);ve.push(j)}let Ut=E(new i.PlaneGeometry(.52,.112),ie,re,!1);Ut.rotation.y=-Math.PI/2,Ut.position.set(c?-.04:-.06,c?.72:.7,0);for(let C of[-1,1]){let V=new i.Group;V.position.set(X-.2,d+.1,C*(K(X,d)+.04)),b.add(V);let tt=I(.06,.04,.08,0,-.03,0,h.black,V);N(.12,.2,.26,.05,c?h.chrome:y,V).position.set(-.01,.04,C*.15);let nt=E(new i.PlaneGeometry(.22,.16),h.chrome,V);nt.rotation.y=-Math.PI/2,nt.position.set(-.075,.04,C*.15),I(.04,.015,.12,.03,-.045,C*.2,h.amber,V).userData.ind=C,V.userData.side=C,wt["mirror"+(C<0?"Left":"Right")]=V;let It=c?N(ft[0]-ft[2]+.05,.04,.17,.02,h.piano):E(new i.CylinderGeometry(.03,.03,ft[0]-ft[2],14),h.black);if(c||(It.rotation.z=Math.PI/2),It.position.set((ft[0]+ft[2])/2,n.sill-.08,C*(p-.07)),c){let Ft=E(new i.CylinderGeometry(.018,.018,2.3,10),h.chrome);Ft.rotation.z=Math.PI/2,Ft.position.set(-1,f+.05,C*(p-.22));for(let Mt of[-2.1,.1])I(.06,.05,.04,Mt,f+.025,C*(p-.22),h.black)}}if(N(.18,.06,.06,.025,h.piano).position.set(Lt+.25,f+.03,0),I(k-$-.6,.12,u-.5,(k+$)/2,n.sill-.02,0,h.under),!c){let C=E(new i.CylinderGeometry(.05,.05,n.track-.2,12),h.under);C.rotation.x=Math.PI/2,C.position.set(-g,n.tyreR,0),E(new i.SphereGeometry(.14,16,12),h.under).position.set(-g,n.tyreR,0)}let Ht=new i.Group;b.add(Ht);let $t=X-.28;N(.42,.22,u-.26,.08,h.interior,Ht).position.set($t,d+.02,0),N(.3,.05,u-.3,.02,h.trim,Ht).position.set($t+.05,d+.14,0);let L=document.createElement("canvas");L.width=512,L.height=192;let J=o(new i.CanvasTexture(L)),z=new i.MeshStandardMaterial({map:J,emissive:a("#ffffff"),emissiveMap:J,emissiveIntensity:.9,roughness:.3}),ot=E(new i.PlaneGeometry(.34,.13),z,Ht,!1);ot.position.set($t-.17,d+.12,-.38),ot.rotation.y=-Math.PI/2,ot.rotation.x=-.15;let dt=E(new i.PlaneGeometry(.3,.17),z.clone(),Ht,!1);dt.position.set($t-.2,d+.12,.05),dt.rotation.y=-Math.PI/2,dt.material.map=dt.material.emissiveMap=o(new i.CanvasTexture(l(512,290,(C,V,tt)=>{let j=C.createLinearGradient(0,0,V,tt);j.addColorStop(0,"#0f1412"),j.addColorStop(1,"#1b2420"),C.fillStyle=j,C.fillRect(0,0,V,tt),C.strokeStyle="#93AE7C",C.lineWidth=6,C.beginPath(),C.moveTo(30,230),C.bezierCurveTo(160,210,200,90,330,110),C.lineTo(480,60),C.stroke(),C.fillStyle="#BBA783",C.beginPath(),C.arc(330,110,10,0,7),C.fill(),C.fillStyle="#F2F0EA",C.font="600 28px Inter, Arial",C.fillText("Jubilee House \u2192 Temple",30,50),C.fillStyle="#B3ACA1",C.font="400 22px Inter, Arial",C.fillText("Liberation Road \xB7 4.2 km",30,84)})));let Y=new i.Group;Y.position.set($t-.3,d+.06,-.38),Y.rotation.z=-.42,Ht.add(Y);let Q=new i.Group;Y.add(Q);let bt=E(new i.TorusGeometry(.185,.018,12,40),h.leather,Q);bt.rotation.y=Math.PI/2;let U=N(.05,.1,.12,.03,h.interior,Q);for(let C of[0,2.1,-2.1]){let V=I(.02,.17,.035,0,0,0,h.satin,Q);V.position.set(0,Math.cos(C)*-.09,Math.sin(C)*.09),V.rotation.x=C}let et=E(new i.CircleGeometry(.032,24),h.emblem,Q);et.position.x=-.03,et.rotation.y=-Math.PI/2;let st=E(new i.CylinderGeometry(.03,.04,.3,10),h.trim,Y);st.rotation.z=Math.PI/2,st.position.x=.15;let vt=(C,V,tt)=>{let j=new i.Group;j.position.set(C,0,V),Ht.add(j),N(.5,.12,tt,.05,h.leather,j).position.set(0,n.sill+.25,0);let It=N(.12,.6,tt,.05,h.leather,j);if(It.position.set(-.25,n.sill+.55,0),It.rotation.z=.2,tt<.7){let Ft=N(.08,.16,.26,.04,h.leather,j);Ft.position.set(-.32,n.sill+.92,0),Ft.rotation.z=.2}return j},Tt=ft[1]+.48;vt(Tt,-.38,.52),vt(Tt,.38,.52),c?(vt(-.55,-.4,.54),vt(-.55,.4,.54),vt(-1.75,0,1.5)):vt(ft[1]-.45,0,1.45),N(.9,.18,.22,.05,h.interior,Ht).position.set(Tt+.1,n.sill+.3,0),N(.07,.08,.05,.02,h.chrome,Ht).position.set(Tt+.35,n.sill+.42,0);let ce=I(X-gt-.2,.02,u-.25,(X+gt)/2,n.sill+.05,0,h.trim,Ht),Et=I(X-fe-.7,.02,Yt-.35,(St+Lt)/2,f-.12,0,h.leather,Ht);Et.material=new i.MeshStandardMaterial({color:a(c?"#cdbfae":"#3c3d3e"),roughness:.9});let Jt=new i.PointLight(16771532,0,2.6,1.5);Jt.position.set(Tt-.2,f-.25,0),Ht.add(Jt);let de=I(.01,.006,u-.45,$t-.2,d-.02,0,new i.MeshStandardMaterial({color:a("#BBA783"),emissive:a("#BBA783"),emissiveIntensity:0}),Ht),Gt=[],q=(()=>{let C=n.tyreR,V=n.tyreW,tt=C*(c?.72:.62),j=[],nt=18;j.push(new i.Vector2(tt,-V/2+.02));for(let Mt=0;Mt<=nt;Mt++){let x=Mt/nt,P=tt+(C-.02-tt)*x,H=Math.sin(x*Math.PI)*.018+.01*x;j.push(new i.Vector2(P,-V/2-H))}j.push(new i.Vector2(C-.005,-V/2+.01),new i.Vector2(C,-V/2+.03),new i.Vector2(C,V/2-.03),new i.Vector2(C-.005,V/2-.01));for(let Mt=nt;Mt>=0;Mt--){let x=Mt/nt,P=tt+(C-.02-tt)*x,H=Math.sin(x*Math.PI)*.018+.01*x;j.push(new i.Vector2(P,V/2+H))}j.push(new i.Vector2(tt,V/2-.02));let It=new i.LatheGeometry(j,64),Ft=It.attributes.uv;for(let Mt=0;Mt<Ft.count;Mt++)Ft.setX(Mt,Ft.getX(Mt)*1);return It.rotateX(Math.PI/2),It})(),ut=n.tyreR*(c?.72:.62);function Bt(C){let V=new i.Group,tt=E(q,h.tyre,V),j=E(new i.CylinderGeometry(ut,ut,n.tyreW-.03,40,1,!0),h.rim,V);j.rotation.x=Math.PI/2;let nt=E(new i.TorusGeometry(ut-.004,.008,8,48),h.rim,V);nt.position.z=C*(n.tyreW/2-.02);let It=E(new i.CylinderGeometry(ut-.01,ut*.5,.05,40,1,!0),h.under,V);It.rotation.x=Math.PI/2,It.position.z=C*(n.tyreW/2-.06);let Ft=c?10:6;for(let P=0;P<Ft;P++){let H=P/Ft*Math.PI*2,B=new i.Mesh(new i.BoxGeometry(c?.028:.06,ut-.06,.035),h.rim);if(B.geometry.translate(0,(ut-.06)/2+.05,0),B.rotation.z=H,B.position.z=C*(n.tyreW/2-.035),B.castShadow=!0,V.add(B),c&&P%2===0){let W=B.clone();W.rotation.z=H+.18,V.add(W)}}let Mt=E(new i.CylinderGeometry(.065,.07,.03,32),h.rim,V);Mt.rotation.x=Math.PI/2,Mt.position.z=C*(n.tyreW/2-.025);let x=E(new i.CircleGeometry(.05,32),h.emblem,V);x.position.z=C*(n.tyreW/2-.008),C<0&&(x.rotation.y=Math.PI);for(let P=0;P<6;P++){let H=P/6*Math.PI*2,B=E(new i.CylinderGeometry(.011,.011,.02,6),h.chrome,V);B.rotation.x=Math.PI/2,B.position.set(Math.cos(H)*.085,Math.sin(H)*.085,C*(n.tyreW/2-.035))}return V}for(let[C,V,tt]of[[g,-1,!0],[g,1,!0],[-g,-1,!1],[-g,1,!1]]){let j=new i.Group;j.position.set(C,n.tyreR,V*n.track/2),v.add(j);let nt=Bt(V);j.add(nt);let It=E(new i.CylinderGeometry(ut-.04,ut-.04,.03,32),h.disc,j);It.rotation.x=Math.PI/2,It.position.z=V*.01;let Ft=N(.12,.08,.06,.02,h.caliper,j);Ft.position.set(tt?-.02:.02,ut-.07,V*.02),Ft.rotation.z=tt?.6:-.6,Gt.push({pivot:j,spin:nt,front:tt,side:V,baseY:n.tyreR,x:C,z:V*n.track/2})}let ye=[];if(e.lights!==!1)for(let C of[-1,1]){let V=new i.SpotLight(16774890,0,70,.48,.5,1.6);V.position.set(k-.05,qt-.06,C*(p-.3)),V.target.position.set(k+12,0,C*1.2),b.add(V,V.target),ye.push(V)}let Te=e.lights!==!1?new i.PointLight(16719888,0,4,2):null;Te&&(Te.position.set($-.4,.8,0),b.add(Te));let sn={"-1":h.amber.clone(),1:h.amber.clone()};b.traverse(C=>{C.isMesh&&C.userData.ind&&(C.material=sn[C.userData.ind])});let An=h.tail.clone();for(let C of ve)C.material=An;let Re={head:!1,brake:!1,reverse:!1,left:!1,right:!1,hazard:!1,interiorGlow:0};function De(C,V){y.color.copy(a(C)),y.metalness=V??y.metalness,y.roughness=V>.5?.28:.35}function di(C,V){let tt=wt[C];return tt?C.startsWith("mirror")?(tt.userData.target=V??!tt.userData.target?1:0,!!tt.userData.target):(tt.userData.target=V??tt.userData.target===0?1:0,tt.userData.target===1):!1}for(let C of["mirrorLeft","mirrorRight"])wt[C].userData={side:wt[C].userData.side,open:0,target:0};let Ys=0;function ra(C,V={}){for(let[Mt,x]of Object.entries(wt)){let P=x.userData;if(P.open===void 0)continue;let H=Mt==="hood"||Mt==="tailgate"?2.2:3.2;if(P.open+=(P.target-P.open)*Math.min(1,C*H),Mt.startsWith("mirror"))x.rotation.y=P.side*1.1*P.open;else if(P.axis==="y"){let B=Mt.endsWith("Left")?1:-1;x.rotation.y=B*1.1*Ni(P.open)}else x.rotation.z=P.max*Ni(P.open)}let tt=V.night?1:0;h.head.emissiveIntensity=Re.head?3:.4,h.drl.emissiveIntensity=V.engine===!1?.15:3.2;for(let Mt of ye)Mt.intensity=Re.head?(V.lightScale??1)*60*r:0;let j=Re.brake;h.tail.emissiveIntensity=j?5:Re.head||V.engine?1.2:.15,An.emissiveIntensity=j?6:.05,Te&&(Te.intensity=j?2.5*r*10:0),h.reverse.emissiveIntensity=Re.reverse?4:0,Ys+=C;let nt=Ys%.74<.4,It=(Re.left||Re.hazard)&&nt,Ft=(Re.right||Re.hazard)&&nt;return sn[-1].emissiveIntensity=It?6:0,sn[1].emissiveIntensity=Ft?6:0,de.material.emissiveIntensity=V.engine?1.5:0,Jt.intensity=Re.interiorGlow?6*r:0,Re.left||Re.right||Re.hazard?nt:null}let Ni=C=>1-Math.pow(1-C,3),Zs=0;function aa(C,V,tt){let j=performance.now();if(j-Zs<100)return;Zs=j;let nt=L.getContext("2d"),It=512,Ft=192;nt.fillStyle="#07090a",nt.fillRect(0,0,It,Ft);let Mt=(x,P,H,B)=>{nt.strokeStyle="#222",nt.lineWidth=12,nt.beginPath(),nt.arc(x,110,70,Math.PI*.8,Math.PI*2.2),nt.stroke(),nt.strokeStyle="#BBA783",nt.beginPath(),nt.arc(x,110,70,Math.PI*.8,Math.PI*(.8+1.4*Math.max(0,Math.min(1,P)))),nt.stroke(),nt.fillStyle="#F2F0EA",nt.font="700 40px Inter, Arial",nt.textAlign="center",nt.fillText(B,x,122),nt.fillStyle="#9A948B",nt.font="500 16px Inter, Arial",nt.fillText(H,x,150)};Mt(120,C/(c?220:180),"km/h",Math.round(C)),Mt(392,V/n.redline,"rpm \xD71000",(V/1e3).toFixed(1)),nt.fillStyle="#93AE7C",nt.font="700 46px Inter, Arial",nt.textAlign="center",nt.fillText(tt,256,112),J.needsUpdate=!0}return{spec:n,root:T,car:v,body:b,wheels:Gt,steer:Q,interior:Ht,panels:wt,clickable:O,state:Re,materials:h,setPaint:De,togglePanel:di,update:ra,drawCluster:aa,driverEye:new i.Vector3(Tt-.34,d+.33,-.38),dims:{length:k-$,width:u,height:f,front:k,rear:$}}}var pl=class{constructor(){this.ctx=null,this.kind="diesel",this.on=!1,this.cabin=0,this.muted=!1}async unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.7;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.ratio.value=4,this.cabinFilter=e.createBiquadFilter(),this.cabinFilter.type="lowpass",this.cabinFilter.frequency.value=18e3,this.master.connect(this.cabinFilter).connect(n).connect(e.destination),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;this._buildEngine(),this._buildEnv()}return this.ctx.state!=="running"&&await this.ctx.resume(),!0}_noise(){let t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.05)}_buildEngine(){let t=this.ctx;this.eng=t.createGain(),this.eng.gain.value=0;let e=t.createWaveShaper(),n=new Float32Array(1024);for(let l=0;l<1024;l++){let c=l/512-1;n[l]=Math.tanh(c*2.6)}e.curve=n,this.engLP=t.createBiquadFilter(),this.engLP.type="lowpass",this.engLP.Q.value=.8,this.eng.connect(e).connect(this.engLP).connect(this.master),this.osc=[];let s=(l,c)=>{let u=t.createOscillator();u.type=l;let p=t.createGain();return p.gain.value=c,u.connect(p).connect(this.eng),u.start(),this.osc.push({o:u,g:p,base:c}),u};this.o1=s("sawtooth",.5),this.o2=s("square",.18),this.o3=s("triangle",.35),this.oSub=s("sine",.6),this.am=t.createGain(),this.am.gain.value=1,this.eng.disconnect(),this.eng.connect(this.am).connect(e),this.lfo=t.createOscillator(),this.lfo.type="square",this.lfoGain=t.createGain(),this.lfoGain.gain.value=.35,this.lfo.connect(this.lfoGain).connect(this.am.gain),this.lfo.start();let r=this._noise();this.clatBP=t.createBiquadFilter(),this.clatBP.type="bandpass",this.clatBP.frequency.value=2600,this.clatBP.Q.value=1.6,this.clat=t.createGain(),this.clat.gain.value=0,this.clatGate=t.createGain(),this.clatGate.gain.value=0,this.clatLfo=t.createOscillator(),this.clatLfo.type="square";let a=t.createGain();a.gain.value=.5,this.clatLfo.connect(a).connect(this.clatGate.gain),this.clatLfo.start(),r.connect(this.clatBP).connect(this.clatGate).connect(this.clat).connect(this.master);let o=this._noise();this.roarBP=t.createBiquadFilter(),this.roarBP.type="bandpass",this.roarBP.Q.value=.7,this.roar=t.createGain(),this.roar.gain.value=0,o.connect(this.roarBP).connect(this.roar).connect(this.master),this.turbo=t.createOscillator(),this.turbo.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turbo.connect(this.turboG).connect(this.master),this.turbo.start()}_buildEnv(){let t=this.ctx,e=this._noise();this.windLP=t.createBiquadFilter(),this.windLP.type="lowpass",this.windLP.frequency.value=600,this.wind=t.createGain(),this.wind.gain.value=0,e.connect(this.windLP).connect(this.wind).connect(this.master);let n=this._noise();this.sqBP=t.createBiquadFilter(),this.sqBP.type="bandpass",this.sqBP.frequency.value=1300,this.sqBP.Q.value=9,this.sq=t.createGain(),this.sq.gain.value=0,n.connect(this.sqBP).connect(this.sq).connect(this.master);let s=this._noise();this.grLP=t.createBiquadFilter(),this.grLP.type="lowpass",this.grLP.frequency.value=260,this.gravel=t.createGain(),this.gravel.gain.value=0,s.connect(this.grLP).connect(this.gravel).connect(this.master)}setKind(t){this.kind=t}_env(t,e,n,s,r){let a=t.gain;a.cancelScheduledValues(e),a.setValueAtTime(1e-4,e),a.exponentialRampToValueAtTime(s,e+n),a.exponentialRampToValueAtTime(1e-4,e+n+r)}click(t=3200,e=.25,n=.02){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=s.createBufferSource();a.buffer=this.noiseBuf;let o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=t,o.Q.value=3;let l=s.createGain();a.connect(o).connect(l).connect(this.master),this._env(l,r,.002,e,n),a.start(r),a.stop(r+n+.05)}thunk(t=.6){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(110,n),s.frequency.exponentialRampToValueAtTime(48,n+.18);let r=e.createGain();s.connect(r).connect(this.master),this._env(r,n,.004,t,.25),s.start(n),s.stop(n+.35),this.click(900,t*.4,.06)}latch(){this.click(2400,.18,.03),setTimeout(()=>this.click(1700,.12,.03),60)}tick(t){this.click(t?3800:2600,.12,.012)}horn(t,e=.5){if(!this.ctx)return;let n=this.ctx,s=n.currentTime,r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=900,r.Q.value=.7;let a=n.createGain();r.connect(a).connect(this.master),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(.32,s+.02),a.gain.setValueAtTime(.32,s+e),a.gain.exponentialRampToValueAtTime(1e-4,s+e+.08);for(let o of t.horn){let l=n.createOscillator();l.type="square",l.frequency.value=o,l.connect(r),l.start(s),l.stop(s+e+.1)}}chime(t=[660,880,1320]){if(!this.ctx)return;let e=this.ctx;t.forEach((n,s)=>{let r=e.currentTime+s*.11,a=e.createOscillator();a.type="sine",a.frequency.value=n;let o=e.createGain();a.connect(o).connect(this.master),this._env(o,r,.01,.2,.5),a.start(r),a.stop(r+.6)})}starter(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator();s.type="sawtooth",s.frequency.value=160;let r=e.createOscillator();r.frequency.value=t.engine==="diesel"?9:11;let a=e.createGain();a.gain.value=40,r.connect(a).connect(s.frequency);let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=900;let l=e.createGain();return s.connect(o).connect(l).connect(this.master),l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.2,n+.05),l.gain.setValueAtTime(.2,n+.75),l.gain.exponentialRampToValueAtTime(1e-4,n+.9),s.start(n),r.start(n),s.stop(n+1),r.stop(n+1),()=>{l.gain.cancelScheduledValues(e.currentTime),l.gain.setTargetAtTime(0,e.currentTime,.02)}}blowoff(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="bandpass",s.Q.value=1.2,s.frequency.setValueAtTime(3500,e),s.frequency.exponentialRampToValueAtTime(900,e+.35);let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.01,.14,.35),n.start(e),n.stop(e+.5)}pop(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noiseBuf;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=700;let r=t.createGain();n.connect(s).connect(r).connect(this.master),this._env(r,e,.002,.5,.07),n.start(e),n.stop(e+.15)}crash(t){this.thunk(Math.min(1,.3+t)),this.click(600,Math.min(.6,t),.15)}update(t,e,n){if(!this.ctx)return;let s=this.ctx,r=s.currentTime,a=.03,o=e.engine==="diesel",l=t.engine?Math.max(t.rpm,1):0,c=o?4:8,u=l/60*c/2,p=t.throttle??0,d=t.engine?1:0,f=Math.max(u,1);this.o1.frequency.setTargetAtTime(o?f:f*.5,r,a),this.o2.frequency.setTargetAtTime(f*(o?2:1),r,a),this.o3.frequency.setTargetAtTime(f*(o?.5:1.5),r,a),this.oSub.frequency.setTargetAtTime(f*.5,r,a),this.lfo.frequency.setTargetAtTime(o?f:f*.25,r,a),this.lfoGain.gain.setTargetAtTime(o?.25:.55-Math.min(.35,l/e.redline*.4),r,.1);let g=l/e.redline;this.engLP.frequency.setTargetAtTime(o?260+g*1600+p*900:220+g*2600+p*1600,r,a);let y=(o?.32:.42)*(.55+.45*p+g*.3);this.eng.gain.setTargetAtTime(y*d,r,.06),this.clatLfo.frequency.setTargetAtTime(f,r,a),this.clat.gain.setTargetAtTime(o?d*(.06+.05*p)*(1.2-g*.6):0,r,.05),this.clatBP.frequency.setTargetAtTime(2200+g*1400,r,.1),this.roarBP.frequency.setTargetAtTime(o?300+g*900:140+g*700,r,a),this.roar.gain.setTargetAtTime(d*p*(o?.06:.16)*(.4+g),r,.05);let h=o?Math.max(0,g-.25)*p:0;this.turbo.frequency.setTargetAtTime(2400+h*5200,r,.15),this.turboG.gain.setTargetAtTime(d*h*.035,r,.12),o&&this._lastLoad>.6&&p<.15&&g>.45&&this.blowoff(),!o&&this._lastLoad>.6&&p<.1&&g>.5&&Math.random()<.7&&(this.pop(),setTimeout(()=>this.pop(),90+Math.random()*120)),this._lastLoad=p;let m=Math.hypot(t.vx,t.vy);this.wind.gain.setTargetAtTime(Math.min(.32,m*m*18e-5),r,.2),this.windLP.frequency.setTargetAtTime(400+m*40,r,.2);let S=t.surface==="asphalt"?Math.max(0,t.slip-.35):0;this.sq.gain.setTargetAtTime(Math.min(.28,S*.4),r,.05),this.sqBP.frequency.setTargetAtTime(1100+Math.sin(r*13)*120+m*8,r,.02),this.gravel.gain.setTargetAtTime(t.surface!=="asphalt"&&t.surface!=="floor"?Math.min(.4,m*.03):0,r,.1),this.cabinFilter.frequency.setTargetAtTime(this.cabin?1500:18e3,r,.1)}};var Tn=(i,t,e)=>Math.max(t,Math.min(e,i)),ss=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n);function F_(i,t){let e=t/i.redline;if(i.engine==="diesel"){let s=e<.2?.55+e*1.5:e<.37?.85+(e-.2)*.9:e<.72?1:1-(e-.72)*1.4;return i.torque*Tn(s,.3,1)}let n=.62+.55*Math.sin(Math.min(1,e/.72)*Math.PI/2)-(e>.8?(e-.8)*1.2:0);return i.torque*Tn(n,.4,1)}function ed(i){let t=i.mass,e=i.wheelbase,n=e*.48,s=e-n,r=.68,a=t*(e*e+i.width*i.width)/12*1.1;return{spec:i,m:t,a:n,b:s,h:r,Iz:a,x:0,z:0,yaw:0,vx:0,vy:0,r:0,steer:0,rpm:i.idle,gear:1,shiftT:0,engine:!1,starting:0,throttle:0,brake:0,ax:0,ay:0,slip:0,wheelSpin:0,wheelSpeed:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,distance:0,surface:"asphalt",hit:0,reverse:!1,lastShift:0}}function nd(i,t,e,n){let s=i.spec,r=9.81,a=Math.hypot(i.vx,i.vy),o=e.grip?e.grip(i.x,i.z):{mu:1,rough:0,name:"asphalt"};i.surface=o.name;let l=.58/(1+Math.pow(Math.abs(i.vx)/14,1.4)*.9);i.steer=ss(i.steer,t.steer*l,7,n);let c=t.brake,u=i.engine&&c<.15?t.throttle:0,p=i.vx,d=s.tyreR,f=s.gears,g=Math.abs(i.vx)/(2*Math.PI*d)*60;if(i.shiftT=Math.max(0,i.shiftT-n),!i.reverse&&i.shiftT===0){let Rt=g*f[i.gear-1]*s.finalDrive;Rt>s.shiftUp*(.75+.25*u)&&i.gear<f.length?(i.gear++,i.shiftT=s.engine==="v8"?.18:.32,i.lastShift=1):Rt<s.shiftDown&&i.gear>1&&(i.gear--,i.shiftT=.2,i.lastShift=-1)}let y=(i.reverse?4.1:f[i.gear-1])*s.finalDrive,h=g*y,m=i.engine?Math.max(s.idle+u*(s.engine==="v8"?2100:1400)*Tn(1-Math.abs(i.vx)/6,0,1),h):0,S=i.shiftT>0?m*.82:m;i.starting>0&&(i.starting-=n),i.rpm=ss(i.rpm,Tn(S,0,s.redline*1.02),i.engine?9:2.5,n),i.rpm>s.redline&&(u*=.2);let w=i.engine?F_(s,Math.max(i.rpm,s.idle))*u:0,M=i.shiftT>0?w*y*.92/d*.3:w*y*.92/d;i.reverse&&(M=-M);let A=s.power*1e3/Math.max(2,Math.abs(i.vx));M=Tn(M,-A*1.2,A*1.2);let T=Math.sign(i.vx)||0,v=c*O_(i)+(t.handbrake?6e3:0),b=i.m*r*(.015+o.rough*.05),O=.5*1.2*(s.engine==="v8"?1.25:1.1)*i.vx*Math.abs(i.vx),E=i.engine&&u<.05?i.rpm/s.redline*900*T:0,I=M-O-E,N=(v+b)*T;Math.abs(i.vx)<.15&&Math.abs(M)<v+b?(i.vx=0,I=0):I-=N;let Z=Tn(i.m*r*i.b/(i.a+i.b)-i.m*i.ax*i.h/(i.a+i.b),i.m*r*.1,i.m*r*.9),F=i.m*r-Z,k=o.mu,$=k*i.m*r*.95,K=Tn(Math.abs(I)/$,0,1.4);Math.abs(I)>$&&(I=Math.sign(I)*$),i.wheelSpin=ss(i.wheelSpin,Math.max(0,K-.92)*6,8,n);let xt=Math.max(Math.abs(i.vx),.5)*(i.vx<0?-1:1),at=Math.atan2(i.vy+i.a*i.r,Math.abs(xt))-i.steer*Math.sign(xt),rt=Math.atan2(i.vy-i.b*i.r,Math.abs(xt)),ht=9.5*Z/1,it=10.5*F/1,mt=t.handbrake?k*.45:k,X=Math.sqrt(1-Tn(K*.95,0,1)**2),lt=(Rt,zt,qt)=>Tn(-zt*Rt,-qt,qt),gt=lt(at,ht,k*Z*X),kt=lt(rt,it,mt*F*X);if(i.slip=Tn(Math.max(Math.abs(at),Math.abs(rt))*Math.min(1,a/4)*3+i.wheelSpin*.6+(t.handbrake&&a>3?.5:0),0,1.5),a<2.5){let Rt=I/i.m;i.vx+=Rt*n,i.vy=ss(i.vy,0,10,n),i.r=i.vx*Math.tan(i.steer)/(i.a+i.b),i.ax=Rt,i.ay=i.vx*i.r}else{let Rt=(I-gt*Math.sin(i.steer))/i.m+i.vy*i.r,zt=(gt*Math.cos(i.steer)+kt)/i.m-i.vx*i.r,qt=(i.a*gt*Math.cos(i.steer)-i.b*kt)/i.Iz;i.vx+=Rt*n,i.vy+=zt*n,i.r+=qt*n,i.ax=ss(i.ax,Rt-i.vy*i.r,12,n),i.ay=ss(i.ay,zt+i.vx*i.r,12,n)}c>.15&&(p===0||p*i.vx<0)&&(i.vx=0),i.vx=Tn(i.vx,-6,s.top);let St=Math.sin(i.yaw),Lt=Math.cos(i.yaw);if(i.x+=(i.vx*St+i.vy*Lt)*n,i.z+=(i.vx*Lt-i.vy*St)*n,i.yaw+=i.r*n,i.hit=Math.max(0,i.hit-n),e.collide){let Rt=e.collide(i.x,i.z,i.yaw);if(Rt){i.x+=Rt.nx*Rt.depth,i.z+=Rt.nz*Rt.depth;let zt=i.vx*St+i.vy*Lt,qt=i.vx*Lt-i.vy*St,ee=zt*Rt.nx+qt*Rt.nz;if(ee<0){let ie=-ee;i.hit=Math.min(1,ie/8);let G=zt-1.35*ee*Rt.nx,re=qt-1.35*ee*Rt.nz;i.vx=(G*St+re*Lt)*.6,i.vy=(G*Lt-re*St)*.4,i.r*=.5,i.lastImpact=ie}}}let fe=38,Yt=7.5,Qt=30,oe=6,ct=55,ft=9,wt=Tn(-i.ax*.0085,-.06,.06),Ot=Tn(i.ay*.0072,-.065,.065);i.pitchV+=((wt-i.pitch)*fe-i.pitchV*Yt)*n,i.pitch+=i.pitchV*n,i.rollV+=((Ot-i.roll)*Qt-i.rollV*oe)*n,i.roll+=i.rollV*n,i.distance+=a*n;let Nt=o.rough*Math.min(1,a/6)*(Math.sin(i.distance*13)*.24+Math.sin(i.distance*5.3)*.14);return i.heaveV+=(-i.heave*ct-i.heaveV*ft+Nt*60)*n,i.heave+=i.heaveV*n,i.wheelSpeed=i.vx/d+i.wheelSpin*30*Math.sign(u||1)*(i.reverse?-1:1),i.throttle=ss(i.throttle,u,10,n),i.brake=c,i}function O_(i){return i.m*9.81*.95}var gl=(i,t,e)=>Math.max(t,Math.min(e,i)),rs=(i,t,e,n)=>t+(i-t)*Math.exp(-e*n),sa=1/120,ml={throttle:0,brake:0,steer:0,handbrake:!1};function id({bounds:i,circles:t=[],boxes:e=[],carR:n=.95,carHalf:s=1.7}){let r=e.map(a=>({...a,cs:Math.cos(a.rot||0),sn:Math.sin(a.rot||0),radius:Math.hypot(a.hx,a.hz)+n}));return(a,o,l)=>{let c=Math.sin(l),u=Math.cos(l),p=null;for(let d of[-1,0,1]){let f=a+c*d*s,g=o+u*d*s,y=(h,m,S)=>{S>0&&(!p||S>p.depth)&&(p={nx:h,nz:m,depth:S})};i&&(y(1,0,i.minX-(f-n)),y(-1,0,f+n-i.maxX),y(0,1,i.minZ-(g-n)),y(0,-1,g+n-i.maxZ));for(let h of t){let m=f-h.x,S=g-h.z,w=h.r+n;if(m*m+S*S>=w*w)continue;let M=Math.hypot(m,S);M>1e-4?y(m/M,S/M,w-M):y(-c,-u,w)}for(let h of r){let m=f-h.x,S=g-h.z;if(m*m+S*S>=h.radius*h.radius)continue;let w=m*h.cs+S*h.sn,M=-m*h.sn+S*h.cs,A=gl(w,-h.hx,h.hx),T=gl(M,-h.hz,h.hz),v=w-A,b=M-T,O=Math.hypot(v,b);if(O<n)if(O<1e-4){let E=h.hx-Math.abs(w),I=h.hz-Math.abs(M);E<I?(v=Math.sign(w)||1,b=0,O=-E):(v=0,b=Math.sign(M)||1,O=-I);let N=v*h.cs-b*h.sn,Z=v*h.sn+b*h.cs;y(N,Z,n-O)}else{let E=v/O,I=b/O;y(E*h.cs-I*h.sn,E*h.sn+I*h.cs,n-O)}}}return p}}var _l=class{constructor({THREE:t,scene:e,camera:n,dom:s,vehicle:r,audio:a,env:o={},onEvent:l=()=>{}}){Object.assign(this,{THREE:t,scene:e,camera:n,dom:s,audio:a,env:o,onEvent:l}),this.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)"),this.enabled=!1,this.camMode="chase",this.camModes=["chase","far","cabin","hood","cine","drone"],this.input={...ml},this.keys=new Set,this.touch={...ml},this.accumulator=0,this.lastPose={x:0,z:0,yaw:0},this.effectsTime=0,this.camPos=new t.Vector3,this.camLook=new t.Vector3,this.fov=n.fov,this.shake=0,this.orbitYaw=0,this.orbitPitch=0,this.dragging=!1,this.cine=null,this._tmp=new t.Vector3,this._tmp2=new t.Vector3,this._q=new t.Quaternion,this.cameraWant=new t.Vector3,this.cameraTarget=new t.Vector3,this.cameraHeading=new t.Vector3,this.markMatrix=new t.Matrix4,this.markScale=new t.Vector3(1,1,1),this.setVehicle(r),this._initFx(),this._bind()}setVehicle(t){let e=this.dyn?{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}:null;this.dyn&&this.toggleEngine(!1),this.clearInput(),this.vehicle=t,this.dyn=ed(t.spec),e&&Object.assign(this.dyn,e),Object.assign(this.lastPose,{x:this.dyn.x,z:this.dyn.z,yaw:this.dyn.yaw}),this.audio&&this.audio.setKind(t.spec.engine)}place(t,e,n=0){this.clearInput(),Object.assign(this.dyn,{x:t,z:e,yaw:n,vx:0,vy:0,r:0,steer:0,slip:0,wheelSpin:0,wheelSpeed:0}),Object.assign(this.lastPose,{x:t,z:e,yaw:n}),this._sync(0),this.snapCamera()}clearInput(){this.keys.clear(),Object.assign(this.touch,ml),Object.assign(this.input,ml),this.dragging=!1,this.accumulator=0,this.resetTouch?.()}setEnabled(t){this.clearInput(),this.enabled=t,t?this.dom.focus({preventScroll:!0}):(this.toggleEngine(!1),Object.assign(this.dyn,{vx:0,vy:0,r:0,slip:0,throttle:0}),this.audio?.update(this.dyn,this.vehicle.spec,0))}_bind(){let t=s=>{if(!this.enabled||document.hidden||s.altKey||s.ctrlKey||s.metaKey||s.defaultPrevented||s.target?.closest?.("button, a, input, select, textarea, summary, [contenteditable]"))return;let r=s.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(r)&&s.preventDefault(),!s.repeat&&(this.keys.add(r),r==="h"?this.horn():r==="l"?this.toggle("head"):r==="q"?this.toggle("left"):r==="e"?this.toggle("right"):r==="x"?this.toggle("hazard"):r==="c"?this.cycleCamera():r==="r"?this.recover():r==="v"?this.shiftDirection():r==="i"&&this.toggleEngine())},e=s=>this.keys.delete(s.key.toLowerCase()),n=()=>{this.audio?.muted||this.audio?.unlock().catch(()=>{})};this.dom.addEventListener("pointerdown",n,{passive:!0}),addEventListener("keydown",t),addEventListener("keyup",e),addEventListener("blur",()=>this.clearInput()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearInput()}),this.dom.addEventListener("pointerdown",s=>{this.enabled&&(this.dragging=!0,this._px=s.clientX,this._py=s.clientY,this._lookT=0)}),addEventListener("pointerup",()=>{this.dragging=!1}),addEventListener("pointercancel",()=>{this.dragging=!1}),addEventListener("pointermove",s=>{!this.enabled||!this.dragging||(this.orbitYaw-=(s.clientX-this._px)*.006,this.orbitPitch=gl(this.orbitPitch+(s.clientY-this._py)*.004,-.3,.9),this._px=s.clientX,this._py=s.clientY,this._lookT=0)})}setTouch(t){Object.assign(this.touch,t)}_readInput(){let t=this.keys,e=this.touch,n=t.has("w")||t.has("arrowup")?1:e.throttle,s=t.has("s")||t.has("arrowdown")?1:e.brake,r=(t.has("a")||t.has("arrowleft")?1:0)-(t.has("d")||t.has("arrowright")?1:0);r||(r=e.steer);let a=t.has(" ")||e.handbrake,o=navigator.getGamepads?navigator.getGamepads():[];for(let l of o)if(l){let c=l.axes[0]||0;Math.abs(c)>.12&&(r=-c),l.buttons[7]&&l.buttons[7].value>.05&&(n=l.buttons[7].value),l.buttons[6]&&l.buttons[6].value>.05&&(s=l.buttons[6].value),l.buttons[0]&&l.buttons[0].pressed&&(a=!0),l.buttons[3]&&l.buttons[3].pressed&&!this._padY&&this.cycleCamera(),this._padY=l.buttons[3]&&l.buttons[3].pressed,l.buttons[1]&&l.buttons[1].pressed&&!this._padB&&this.horn(),this._padB=l.buttons[1]&&l.buttons[1].pressed,l.buttons[2]?.pressed&&!this._padX&&this.shiftDirection(),this._padX=l.buttons[2]?.pressed;break}return{thr:n,brk:s,st:r,hb:a}}_smoothInput({thr:t,brk:e,st:n,hb:s},r){let a=this.input;a.throttle=rs(a.throttle,t,t>a.throttle?5:9,r),a.brake=rs(a.brake,e,10,r),a.steer=rs(a.steer,n,n?5.5:7,r),a.handbrake=s}toggle(t){let e=this.vehicle.state;return t==="left"?(e.left=!e.left,e.right=!1):t==="right"?(e.right=!e.right,e.left=!1):e[t]=!e[t],this.audio&&this.audio.click(2e3,.1,.02),this.onEvent("lights",{...e}),e[t]}horn(){this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>this.audio.horn(this.vehicle.spec,.45)).catch(()=>{});let t=performance.now();this._horns=(this._horns||[]).filter(e=>t-e<1600),this._horns.push(t),this.onEvent("horn",this._horns.length)}toggleEngine(t){let e=this.dyn,n=t??!(e.engine||this.startTimer);if(n&&(e.engine||this.startTimer))return!0;if(!n)return clearTimeout(this.startTimer),this.startTimer=null,this.stopStarter?.(),this.stopStarter=null,e.engine=!1,e.starting=0,this.audio?.update(e,this.vehicle.spec,0),this.onEvent("engine","off"),!1;let s=this.vehicle.spec;this.startTimer=setTimeout(()=>{this.startTimer=null,e.engine=!0,e.starting=0,e.rpm=s.idle*1.4,this.onEvent("engine","running")},650),e.starting=.65;let r=this.startTimer;return this.audio&&!this.audio.muted&&this.audio.unlock().then(()=>{this.startTimer===r&&(this.stopStarter=this.audio.starter(s))}).catch(()=>{}),this.onEvent("engine","starting"),n}shiftDirection(){return Math.hypot(this.dyn.vx,this.dyn.vy)>.4||this.input.throttle>.08?(this.onEvent("shift-blocked"),!1):(this.clearInput(),this.dyn.reverse=!this.dyn.reverse,this.dyn.gear=1,this.onEvent("direction",this.dyn.reverse),!0)}cycleCamera(t){let e=this.camModes.indexOf(this.camMode),n=this.camModes[(e+1)%this.camModes.length];return this.camMode=t||(n==="cine"&&this.reducedMotion.matches?"drone":n),this.cine=null,this.orbitYaw=0,this.orbitPitch=0,this.snapCamera(),this.audio&&(this.audio.cabin=this.camMode==="cabin"?1:0),this.onEvent("camera",this.camMode),this.camMode}recover(){let t=this.dyn;if(t.vx=t.vy=t.r=0,this.env.respawn){let e=this.env.respawn(t);e&&this.place(e.x,e.z,e.yaw)}}_initFx(){let t=this.THREE,e=260,n=new t.BufferGeometry;this.pPos=new Float32Array(e*3),this.pVel=new Float32Array(e*3),this.pLife=new Float32Array(e),n.setAttribute("position",new t.BufferAttribute(this.pPos,3));let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,64,64),this.dustMat=new t.PointsMaterial({size:1.6,map:new t.CanvasTexture(s),transparent:!0,depthWrite:!1,opacity:.55,color:11901560,sizeAttenuation:!0}),this.dust=new t.Points(n,this.dustMat),this.dust.frustumCulled=!1,this.dust.visible=!1,this.scene.add(this.dust);for(let u=0;u<e;u++)this.pPos[u*3+1]=-100;this.pIdx=0;let o=320,l=new t.PlaneGeometry(.26,.5);l.rotateX(-Math.PI/2),this.skid=new t.InstancedMesh(l,new t.MeshBasicMaterial({color:657930,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),o),this.skid.frustumCulled=!1,this.skidI=0;let c=new t.Matrix4().makeTranslation(0,-100,0);for(let u=0;u<o;u++)this.skid.setMatrixAt(u,c);this.scene.add(this.skid)}_emit(t,e,n){let s=this.pLife.length;for(let r=0;r<n;r++){let a=this.pIdx=(this.pIdx+1)%s;this.pPos[a*3]=t.x+(Math.random()-.5)*.3,this.pPos[a*3+1]=t.y+.15,this.pPos[a*3+2]=t.z+(Math.random()-.5)*.3,this.pVel[a*3]=(Math.random()-.5)*1.2,this.pVel[a*3+1]=.5+Math.random()*.9,this.pVel[a*3+2]=(Math.random()-.5)*1.2,this.pLife[a]=1.6+Math.random()}this.dustMat.color.set(e)}_fx(t){let e=this.pLife.length,n=!1,s=!1;for(let r=0;r<e;r++)this.pLife[r]<=0||(n=!0,this.pLife[r]-=t,this.pPos[r*3]+=this.pVel[r*3]*t,this.pPos[r*3+1]+=this.pVel[r*3+1]*t,this.pPos[r*3+2]+=this.pVel[r*3+2]*t,this.pVel[r*3+1]*=Math.exp(-1.8*t),this.pLife[r]<=0?this.pPos[r*3+1]=-100:s=!0);n&&(this.dust.geometry.attributes.position.needsUpdate=!0),this.dust.visible=s}update(t){if(!this.enabled||document.hidden)return;t=Math.min(t,.1);let e=this.dyn,n=this.vehicle,s=this._readInput();for(this.accumulator+=t;this.accumulator>=sa;)this._smoothInput(s,sa),Object.assign(this.lastPose,{x:e.x,z:e.z,yaw:e.yaw}),nd(e,this.input,this.env,sa),this.accumulator-=sa;e.lastImpact&&(this.audio&&this.audio.crash(e.lastImpact/10),this.shake=Math.min(1,e.lastImpact/8),this.onEvent("impact",e.lastImpact),e.lastImpact=0),e.lastShift&&(this.onEvent("shift",e.gear),e.lastShift=0),n.state.brake=this.input.brake>.1||this.input.handbrake,n.state.reverse=e.reverse,this._sync(t,this.accumulator/sa);let r=n.update(t,{engine:e.engine,night:this.env.night});r!==null&&r!==this._lastBlink&&this.audio&&this.audio.tick(r),this._lastBlink=r,n.drawCluster(Math.abs(e.vx)*3.6,e.rpm,e.reverse?"R":e.engine?Math.abs(e.vx)<.2&&this.input.throttle<.05?"D":"D"+e.gear:"P"),this.audio&&this.audio.update(e,n.spec,t);let a=Math.hypot(e.vx,e.vy),o=e.surface!=="asphalt"&&e.surface!=="floor";this.effectsTime+=t;let l=o&&a>3||e.slip>.7||e.wheelSpin>.4,c=!o&&(e.slip>.75||e.wheelSpin>.5)&&a>2;if(this.effectsTime>=1/30){if(this.effectsTime%=1/30,c||l)for(let u of n.wheels){if(u.front)continue;let p=u.pivot.getWorldPosition(this._tmp2);if(l&&this._emit(p,o?this.env.dustColor||11569762:14211288,o?Math.ceil(a/9):1),c){p.y=(this.env.groundY?.(p.x,p.z)??0)+.012;let d=this.markMatrix.compose(p,this._q.setFromAxisAngle(this.cameraHeading.set(0,1,0),e.yaw),this.markScale);this.skid.setMatrixAt(this.skidI=(this.skidI+1)%this.skid.count,d)}}c&&(this.skid.instanceMatrix.needsUpdate=!0)}this._fx(t),this._camera(t)}_sync(t,e=1){let n=this.dyn,s=this.vehicle,r=this.lastPose.x+(n.x-this.lastPose.x)*e,a=this.lastPose.z+(n.z-this.lastPose.z)*e,o=this.lastPose.yaw+(n.yaw-this.lastPose.yaw)*e,l=this.env.groundY,c=l?.(r,a)??0,u=Math.sin(o),p=Math.cos(o);s.root.position.set(r,c,a),s.root.rotation.set(0,o,0),s.body.rotation.x=n.roll,s.body.rotation.z=-n.pitch,s.body.position.y=n.heave*.6;for(let d of s.wheels){if(d.spin.rotation.z-=n.wheelSpeed*t,d.front){let h=s.spec.wheelbase/Math.tan(n.steer);d.pivot.rotation.y=Math.atan(s.spec.wheelbase/(h+d.z))}let f=(d.front?1:-1)*s.spec.wheelbase*.5,y=(l?l(r+u*f+p*d.z,a+p*f-u*d.z)-c:0)-n.roll*d.z*.5+(d.front?-1:1)*n.pitch*.4+n.heave*.3;d.pivot.position.y=d.baseY+gl(y,-.12,.14)}s.steer.rotation.x=-n.steer*7}snapCamera(){this._camInit=!1}_camera(t){let e=this.THREE,n=this.dyn,s=this.vehicle,r=this.camera,a=this._tmp.set(Math.sin(n.yaw),0,Math.cos(n.yaw)),o=s.root.position,l=Math.hypot(n.vx,n.vy);this.dragging||(this._lookT=(this._lookT||0)+t,this._lookT>1.2&&(this.orbitYaw=rs(this.orbitYaw,0,2.5,t),this.orbitPitch=rs(this.orbitPitch,0,2.5,t)));let c=this.cameraWant,u=this.cameraTarget,p=55,d=6,f=.1,g=s.root.rotation.y+this.orbitYaw,y=this.cameraHeading.set(Math.sin(g),0,Math.cos(g)),h=s.dims.length;switch(this.camMode){case"chase":case"far":{let w=this.camMode==="far",M=(w?h*1.9:h*1.25)+l*.05,A=(w?3.4:2.05)+this.orbitPitch*4,T=l>4?Math.atan2(n.vx*Math.sin(n.yaw)+n.vy*Math.cos(n.yaw),n.vx*Math.cos(n.yaw)-n.vy*Math.sin(n.yaw)):n.yaw,v=n.vx>2?T+(g-n.yaw):g;c.set(o.x-Math.sin(v)*M,o.y+A,o.z-Math.cos(v)*M),u.copy(o).addScaledVector(a,2.5+l*.06),u.y+=1.05,p=52+Math.min(16,l*.38),d=4.5;break}case"cabin":{let w=s.driverEye.clone();s.body.localToWorld(w),c.copy(w),d=60,f=.03;let M=n.yaw+this.orbitYaw*1.6+n.steer*.35;u.set(w.x+Math.sin(M)*10,w.y-.6+this.orbitPitch*-4,w.z+Math.cos(M)*10),p=64+Math.min(8,l*.15);break}case"hood":{let w=new e.Vector3(s.spec.wheelbase/2-.3,s.spec.roof+.1,0);s.body.localToWorld(w),c.copy(w),d=60,f=.05,u.copy(w).addScaledVector(y,12),u.y-=.9,p=62+Math.min(10,l*.2);break}case"drone":{c.set(o.x-a.x*18,o.y+34,o.z-a.z*18),u.copy(o).addScaledVector(a,8),p=50,d=2;break}case"cine":{if(!this.cine||this.cine.t>7||o.distanceTo(this.cine.p)>55){let w=Math.random()<.5?-1:1,M=18+Math.random()*20,A=new e.Vector3(a.z,0,-a.x),T=o.clone().addScaledVector(a,M).addScaledVector(A,w*(6+Math.random()*6));T.y=(this.env.groundY?this.env.groundY(T.x,T.z):0)+.6+Math.random()*2.5,this.env.cineOk&&!this.env.cineOk(T)&&T.copy(o).addScaledVector(a,-10).setY(o.y+3),this.cine={p:T,t:0,fov:28+Math.random()*18},this.camPos.copy(T),this._camInit=!0}this.cine.t+=t,c.copy(this.cine.p),u.copy(o),u.y+=.9,p=this.cine.fov,d=1e3;break}}this._camInit||(this.camPos.copy(c),this.camLook.copy(u),this._camInit=!0);let m=1-Math.exp(-d*t);if(this.camPos.lerp(c,m),this.camLook.lerp(u,Math.min(1,m*1.6)),this.env.groundY&&this.camMode!=="cabin"&&(this.camPos.y=Math.max(this.camPos.y,this.env.groundY(this.camPos.x,this.camPos.z)+.35)),r.position.copy(this.camPos),this.env.cameraCollision&&(this.camMode==="chase"||this.camMode==="far"))for(let w=1;w<=4;w++){let M=this._tmp2.copy(o).lerp(this.camPos,w/4);if(this.env.cameraCollision(M.x,M.z,g)){r.position.copy(o).lerp(this.camPos,Math.max(.2,(w-1)/4)),r.position.y=Math.max(r.position.y,o.y+s.dims.height+.2);break}}this.shake=rs(this.shake,0,3,t);let S=(this.camMode==="cabin"||this.camMode==="hood"?.6:1)*(Math.min(1,l/45)**2*.012+(n.surface!=="asphalt"&&n.surface!=="floor"?Math.min(1,l/15)*.02:0)+this.shake*.09);this.camMode!=="cine"&&!this.reducedMotion.matches&&r.position.add(this._tmp2.set((Math.random()-.5)*S,(Math.random()-.5)*S,(Math.random()-.5)*S)),r.lookAt(this.camLook),this.camMode==="cabin"&&!this.reducedMotion.matches&&r.rotateZ(-n.roll*.6),this.fov=rs(this.fov,p,3,t),(Math.abs(r.fov-this.fov)>.01||r.near!==f)&&(r.fov=this.fov,r.near=f,r.updateProjectionMatrix())}hud(){let t=this.dyn;return{kmh:Math.abs(t.vx)*3.6,rpm:t.rpm,redline:this.vehicle.spec.redline,gear:t.reverse?"R":t.engine?"D"+t.gear:"P",engine:t.engine,surface:t.surface,cam:this.camMode,lights:this.vehicle.state}}},sd=`
.pkm-hud{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);display:flex;align-items:flex-end;gap:18px;padding:14px 20px 12px;border-radius:22px;background:rgb(8 8 8 / .62);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid #2b2b2b;color:#F2F0EA;font-family:Inter,ui-sans-serif,system-ui,sans-serif;pointer-events:none;z-index:6}
.pkm-hud__spd{font-size:46px;font-weight:740;letter-spacing:-.05em;line-height:.9;font-variant-numeric:tabular-nums;min-width:2.4ch;text-align:right}
.pkm-hud__unit{font-size:11px;color:#9A948B;letter-spacing:.12em;text-transform:uppercase;margin-top:4px;text-align:right}
.pkm-hud__gear{font-size:28px;font-weight:700;color:#BBA783;width:1.6ch;text-align:center;line-height:1}
.pkm-hud__rev{width:150px}.pkm-hud__bar{height:6px;border-radius:6px;background:#232323;overflow:hidden}.pkm-hud__bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#93AE7C,#BBA783 70%,#d0654f);transition:width .08s linear}
.pkm-hud__meta{display:flex;justify-content:space-between;font-size:11px;color:#9A948B;margin-top:6px;letter-spacing:.04em}
.pkm-hud__ind{display:flex;gap:8px;font-size:15px;color:#3a3a3a}.pkm-hud__ind .on{color:#93AE7C}.pkm-hud__ind .amber.on{color:#f0a330}.pkm-hud__ind .blue.on{color:#7fb2ff}
.pkm-touch{position:absolute;inset:auto 0 max(14px,env(safe-area-inset-bottom)) 0;display:none;justify-content:space-between;padding:0 12px;z-index:7;pointer-events:none;user-select:none}
.pkm-touch>div{display:flex;gap:8px;align-items:flex-end}.pkm-touch button{pointer-events:auto;touch-action:none;min-width:50px;height:60px;border-radius:16px;border:1px solid #575148;background:rgb(17 17 17 / .84);color:#F2F0EA;font:650 13px Inter,system-ui}
.pkm-touch button.tall{height:78px;min-width:58px}.pkm-touch button:active,.pkm-touch button.down{background:#BBA783;color:#080808}
@media (pointer:coarse){.pkm-touch{display:flex}.pkm-hud{bottom:auto;top:76px;transform:translateX(-50%) scale(.82)}}
`;function rd(i){let t=document.createElement("div");t.className="pkm-hud",t.hidden=!0,t.innerHTML=`<div><div class="pkm-hud__spd" data-spd>0</div><div class="pkm-hud__unit">km/h</div></div>
    <div class="pkm-hud__gear" data-gear>P</div>
    <div class="pkm-hud__rev"><div class="pkm-hud__ind"><span class="amber" data-l>\u25C0</span><span class="blue" data-h>\u25C9</span><span data-e>\u23FB</span><span class="amber" data-r>\u25B6</span></div>
    <div class="pkm-hud__bar" style="margin-top:8px"><i data-rpm></i></div><div class="pkm-hud__meta"><span data-rpmt>0 rpm</span><span data-surf>Asphalt</span></div></div>`,i.appendChild(t);let[e,n,s,r,a,o,l,c,u]=t.querySelectorAll("[data-spd],[data-gear],[data-l],[data-h],[data-e],[data-r],[data-rpm],[data-rpmt],[data-surf]"),p=(g,y)=>{g.textContent!==y&&(g.textContent=y)},d=0,f=.1;return{el:t,update(g,y=.016){if(d+=y,f+=y,f<.05)return;f%=.05,p(e,String(Math.round(g.kmh))),p(n,g.gear),l.style.width=Math.min(100,g.rpm/g.redline*100).toFixed(1)+"%",p(c,Math.round(g.rpm/10)*10+" rpm"),p(u,{asphalt:"Asphalt",grass:"Grass",dirt:"Laterite",floor:"Showroom floor",kerb:"Kerb"}[g.surface]||g.surface);let h=d%.74<.4,m=g.lights;s.classList.toggle("on",(m.left||m.hazard)&&h),o.classList.toggle("on",(m.right||m.hazard)&&h),r.classList.toggle("on",!!m.head),a.classList.toggle("on",g.engine)}}}function ad(i,t){let e=document.createElement("div");e.className="pkm-touch",e.innerHTML=`<div><button data-k="left" aria-label="Steer left">\u25C0</button><button data-k="right" aria-label="Steer right">\u25B6</button></div>
    <div><button data-k="brake" class="tall">Brake</button><button data-k="gas" class="tall" aria-label="Accelerate">Go</button></div>`,i.appendChild(e);let n={left:0,right:0,gas:0,brake:0},s=()=>t.setTouch({steer:n.left-n.right,throttle:n.gas,brake:n.brake}),r=[...e.querySelectorAll("button")];t.resetTouch=()=>{for(let a of r)n[a.dataset.k]=0,a.classList.remove("down")};for(let a of r){let o=a.dataset.k,l=u=>{u.preventDefault(),a.setPointerCapture(u.pointerId),n[o]=1,a.classList.add("down"),s()},c=()=>{n[o]=0,a.classList.remove("down"),s()};a.addEventListener("pointerdown",l),a.addEventListener("lostpointercapture",c),a.addEventListener("pointerup",c),a.addEventListener("pointercancel",c)}return e}var as=class i extends se{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let n=this,s=e.color!==void 0?new jt(e.color):new jt(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new dn,p=new D,d=new D,f=new D,g=new xe,y=new D(0,0,-1),h=new Le,m=new D,S=new D,w=new Le,M=new xe,A=new ke(r,a,{samples:c,type:We}),T=new ze({name:l.name!==void 0?l.name:"unspecified",uniforms:bn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=A.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=M,this.material=T,this.onBeforeRender=function(v,b,O){let E=this.getReflectionCamera(O);if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(O.matrixWorld),g.extractRotation(n.matrixWorld),p.set(0,0,1),p.applyMatrix4(g),m.subVectors(d,f),m.dot(p)>0===!0&&this.forceUpdate===!1)return;m.reflect(p).negate(),m.add(d),g.extractRotation(O.matrixWorld),y.set(0,0,-1),y.applyMatrix4(g),y.add(f),S.subVectors(d,y),S.reflect(p).negate(),S.add(d),E.position.copy(m),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(p),E.lookAt(S),E.far=O.far,E.updateMatrixWorld(),E.projectionMatrix.copy(O.projectionMatrix),E.projectionMatrix.elements[8]*=-1,E.projectionMatrix.elements[12]*=-1,M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(E.projectionMatrix),M.multiply(E.matrixWorldInverse),M.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(p,d),u.applyMatrix4(E.matrixWorldInverse),h.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let N=E.projectionMatrix;E.isOrthographicCamera?(w.x=(Math.sign(h.x)+N.elements[8])/N.elements[0],w.y=(Math.sign(h.y)+N.elements[9])/N.elements[5],w.z=-O.far,w.w=1):(w.x=(Math.sign(h.x)+N.elements[8])/N.elements[0],w.y=(Math.sign(h.y)+N.elements[9])/N.elements[5],w.z=-1,w.w=(1+N.elements[10])/N.elements[14]),h.multiplyScalar(2/h.dot(w)),N.elements[2]=h.x,N.elements[6]=h.y,E.isOrthographicCamera?(N.elements[10]=h.z-o,N.elements[14]=h.w-1):(N.elements[10]=h.z+1-o,N.elements[14]=h.w),n.visible=!1;let Z=v.getRenderTarget(),F=v.xr.enabled,k=v.shadowMap.autoUpdate;v.xr.enabled=!1,v.shadowMap.autoUpdate=!1,v.setRenderTarget(A),v.state.buffers.depth.setMask(!0),v.autoClear===!1&&v.clear(),v.render(b,E),v.xr.enabled=F,v.shadowMap.autoUpdate=k,v.setRenderTarget(Z);let $=O.viewport;$!==void 0&&v.state.viewport($),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()},this.getReflectionCamera=function(v){let b=this._reflectionCameras.get(v);return b===void 0&&(b=v.clone(),this._reflectionCameras.set(v,b)),b}}};as.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var qs=class i extends se{constructor(){let t=i.SkyShader,e=new ze({name:t.name,uniforms:bn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:nn,depthWrite:!1});super(new He(1,1,1),e),this.isSky=!0}};qs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var En=(i,t,e,n=!0)=>{let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Wi(s);return n&&(r.colorSpace=tn),r.anisotropy=8,r},od=i=>()=>((i=Math.imul(i^i>>>15,2246822519)+2654435769|0)>>>0)/4294967296,_n='"Inter", ui-sans-serif, system-ui, sans-serif';function ld({quality:i,reflections:t}){let e=new $e;e.name="showroom";let n=[],s=od(7),r=En(1024,1024,(it,mt,X)=>{it.fillStyle="#1e1e1e",it.fillRect(0,0,mt,X);for(let lt=0;lt<9e3;lt++){let gt=26+s()*12;it.fillStyle=`rgb(${gt},${gt},${gt})`,it.fillRect(s()*mt,s()*X,2,2)}it.strokeStyle="#1b1b1b",it.lineWidth=3;for(let lt=0;lt<=4;lt++)it.beginPath(),it.moveTo(lt*mt/4,0),it.lineTo(lt*mt/4,X),it.stroke(),it.beginPath(),it.moveTo(0,lt*X/4),it.lineTo(mt,lt*X/4),it.stroke()});r.wrapS=r.wrapT=Pn,r.repeat.set(10,10);let a=new se(new Ue(40,40),new wi({map:r,roughness:.32,metalness:0,clearcoat:.5,clearcoatRoughness:.3}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,e.add(a);let o=null;if(t){let it={...as.ReflectorShader,fragmentShader:as.ReflectorShader.fragmentShader.replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor = vec4( base.rgb * color, 1.0 );")};o=new as(new Ue(40,40),{textureWidth:512,textureHeight:512,multisample:0,color:1710618,shader:it,clipBias:.003}),o.material.transparent=!0,o.material.blending=Ji,o.material.depthWrite=!1,o.rotation.x=-Math.PI/2,o.position.y=.002,o.renderOrder=1,e.add(o)}let l=new Se({color:"#141414",roughness:.92}),c=(it,mt,X,lt,gt,kt,St)=>{let Lt=new se(new He(it,mt,X),St);return Lt.position.set(lt,gt,kt),Lt.receiveShadow=!0,e.add(Lt),Lt};c(40,10,.4,0,5,-14,l),c(.4,10,40,-16,5,0,l),c(.4,10,40,16,5,0,l),c(40,10,.4,0,5,16,l),c(40,.3,40,0,9.6,0,new Se({color:"#0b0b0b",roughness:1}));let u=new Se({color:"#6b4a2f",roughness:.6}),p=new ri(new He(.09,7.6,.12),u,120),d=new xe;for(let it=0;it<120;it++)d.makeTranslation(-11.9+it*.2,3.8,-13.72),p.setMatrixAt(it,d);p.receiveShadow=!0,e.add(p);let f=En(1600,560,(it,mt,X)=>{it.clearRect(0,0,mt,X),it.fillStyle="#fff",it.textAlign="center",it.textBaseline="middle",it.font=`800 360px ${_n}`,"letterSpacing"in it&&(it.letterSpacing="-18px"),it.fillText("PKM",mt/2,X*.42),it.font=`600 58px ${_n}`,"letterSpacing"in it&&(it.letterSpacing="26px"),it.fillText("DRIVE  STUDIO  \xB7  KUMASI",mt/2,X*.86)}),g=new Se({color:"#000",emissive:"#F2E6CF",emissiveMap:f,emissiveIntensity:2.4,transparent:!0,alphaMap:f,roughness:1});f.colorSpace=Gn;let y=new se(new Ue(9.6,3.36),g);y.position.set(0,5.5,-13.55),y.userData.click="sign",e.add(y),n.push(y);let h=new se(new Ue(11,4.2),new In({color:"#BBA783",transparent:!0,opacity:.08,depthWrite:!1}));h.position.set(0,5.5,-13.62),e.add(h);let m=new Se({color:"#fff",emissive:"#fff8ee",emissiveIntensity:1.4}),S=[];for(let it of[-6,-3,0,3,6]){let mt=c(.18,.05,18,it,9.3,0,m);S.push(mt)}let w=new se(new bi(4.6,.06,8,96),m);w.rotation.x=Math.PI/2,w.position.y=9.2,e.add(w);let M=new $e;e.add(M);let A=new se(new Ln(4.2,4.25,.1,96),new wi({color:"#151515",roughness:.35,metalness:.3,clearcoat:.6}));A.position.y=.05,A.receiveShadow=!0,M.add(A);let T=new se(new bi(4.26,.018,6,160),new Se({color:"#BBA783",emissive:"#BBA783",emissiveIntensity:1.6}));T.rotation.x=Math.PI/2,T.position.y=.06,M.add(T);let v=new $e;v.position.set(9.5,0,-11),e.add(v);let b=new se(new Ln(.42,.32,.8,32),new Se({color:"#c9bba3",roughness:.7}));b.position.y=.4,b.castShadow=!0,v.add(b);let O=new Se({color:"#4f7a3e",roughness:.6,side:cn}),E=[];for(let it=0;it<9;it++){let mt=new se(new Yi(.5,12,8,0,Math.PI*2,0,Math.PI/2),O);mt.scale.set(.35,1.6,.07);let X=it/9*Math.PI*2;mt.position.set(Math.cos(X)*.12,.85,Math.sin(X)*.12),mt.rotation.set(Math.sin(X)*.5,-X,Math.cos(X)*.5),mt.castShadow=!0,v.add(mt),E.push(mt)}v.traverse(it=>{it.userData.click="plant"}),n.push(...v.children);let I=new se(new Ue(2.2,3),new Se({roughness:.5,map:En(440,600,(it,mt,X)=>{it.fillStyle="#0f0f0f",it.fillRect(0,0,mt,X);let lt=it.createLinearGradient(0,0,mt,X);lt.addColorStop(0,"#BBA783"),lt.addColorStop(1,"#93AE7C"),it.fillStyle=lt,it.fillRect(30,30,mt-60,X*.55),it.fillStyle="#080808",it.font=`800 92px ${_n}`,it.fillText("Iconka",50,X*.42),it.font=`500 30px ${_n}`,it.fillText("Designs \xB7 since 2022",52,X*.5),it.fillStyle="#F2F0EA",it.font=`700 34px ${_n}`,it.fillText("Design work \u2192",40,X*.75),it.fillStyle="#9A948B",it.font=`400 24px ${_n}`,it.fillText("Brands, posters, menus",40,X*.82)})}));I.position.set(-15.75,3.4,-5),I.rotation.y=Math.PI/2,I.userData.click="poster",e.add(I),n.push(I);let N=c(.08,3.2,2.4,-15.8,3.4,-5,new Se({color:"#BBA783",metalness:.8,roughness:.3})),Z=new se(new Ue(3.6,5),new Se({roughness:.6,emissive:"#ffffff",emissiveIntensity:.9,emissiveMap:En(360,500,(it,mt,X)=>{let lt=it.createLinearGradient(0,0,0,X);lt.addColorStop(0,"#f0b26b"),lt.addColorStop(.55,"#d9774a"),lt.addColorStop(.56,"#3d4a3c"),lt.addColorStop(1,"#232a22"),it.fillStyle=lt,it.fillRect(0,0,mt,X),it.fillStyle="#1b1f1a";for(let gt=0;gt<9;gt++){let kt=20+gt*38,St=40+gt*37%70;it.fillRect(kt,X*.56-St,26,St)}it.fillStyle="#F2F0EA",it.font=`800 46px ${_n}`,it.fillText("Accra 3D",26,70),it.font=`500 22px ${_n}`,it.fillText("Drive Liberation Road \u2192",28,104)})}));Z.position.set(15.75,2.5,-4),Z.rotation.y=-Math.PI/2,Z.userData.click="accra",e.add(Z),n.push(Z),c(.1,5.3,.15,15.75,2.65,-5.9,l),c(.1,5.3,.15,15.75,2.65,-2.1,l);let F=new $e;e.add(F);let k=new oi(16777215,40,30,.55,.9,1.5);k.position.set(2.5,9,3),k.target.position.set(0,0,0),k.castShadow=!0,k.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),k.shadow.bias=-2e-4,k.shadow.normalBias=.02,k.shadow.radius=6,F.add(k,k.target);let $=new oi(14674175,70,30,.7,.8,1.5);$.position.set(-6,7,-7),F.add($,$.target);let K=new oi(16770760,35,30,.8,.9,1.5);K.position.set(7,4,8),F.add(K,K.target);let xt=new Ds(12568012,1709844,.35);F.add(xt);let at=new Ci(16769720,18,14,2);at.position.set(0,5.5,-12.5),F.add(at);function rt(it){let mt=new yi;mt.background=new jt(it==="night"?"#020305":"#0c0c0c");let X=(fe,Yt)=>new In({color:new jt(fe).multiplyScalar(Yt)}),lt=it==="sunset"?"#ffcf9e":it==="night"?"#9fb6ff":"#ffffff";for(let fe of[-6,-3,0,3,6]){let Yt=new se(new He(.5,.1,18),X(lt,it==="night"?2:8));Yt.position.set(fe,9,0),mt.add(Yt)}let gt=new se(new Ue(10,5),X(it==="sunset"?"#ffb070":"#eef2f6",it==="night"?.6:3));gt.position.set(14,4,0),gt.rotation.y=-Math.PI/2,mt.add(gt);let kt=new se(new Ue(10,4),X("#d9d2c4",it==="night"?.3:1.6));kt.position.set(-14,3.5,4),kt.rotation.y=Math.PI/2,mt.add(kt);let St=new se(new Ue(9,3),X("#F2E6CF",2.5));St.position.set(0,5.5,-13.5),mt.add(St);let Lt=new se(new Ue(40,40),X("#2a2a2a",1));return Lt.rotation.x=-Math.PI/2,mt.add(Lt),mt}function ht(it){let mt=it==="night",X=it==="sunset";k.color.set(X?"#ffc890":mt?"#cdd6f5":"#ffffff"),k.intensity=mt?14:X?36:40,$.color.set(X?"#ff9a5a":mt?"#8ea4e8":"#dfe8ff"),$.intensity=mt?60:70,K.intensity=mt?8:35,xt.intensity=mt?.08:.35,m.emissiveIntensity=mt?.4:1.4,m.emissive.set(X?"#ffd9ae":mt?"#bcd0ff":"#fff8ee"),g.emissiveIntensity=mt?4:2.4,T.material.emissiveIntensity=mt?2.5:1.6,l.color.set(X?"#1a1612":"#141414")}return{group:e,clickables:n,table:M,sign:y,signM:g,led:T,leaves:E,plant:v,envScene:rt,setMood:ht,mirror:o,lights:{key:k}}}function cd({quality:i}){let t=new $e;t.name="course",t.visible=!1;let e=[],n=[],s=od(42),r=[[0,-60],[70,-70],[118,-40],[125,10],[100,55],[55,62],[20,40],[-10,70],[-60,78],[-112,50],[-120,0],[-95,-45],[-50,-62]].map(([_,L])=>new D(_,0,L)),a=new Xi(r,!0,"centripetal"),o=900,l=a.getSpacedPoints(o),c=9.5,u=En(512,512,(_,L,J)=>{_.fillStyle="#3b3c3d",_.fillRect(0,0,L,J);for(let z=0;z<26e3;z++){let ot=40+s()*40;_.fillStyle=`rgba(${ot},${ot},${ot+2},.9)`,_.fillRect(s()*L,s()*J,1.5,1.5)}_.fillStyle="#e9e6dc",_.fillRect(10,0,14,J),_.fillRect(L-24,0,14,J),_.fillStyle="#e9c45a";for(let z=0;z<J;z+=128)_.fillRect(L/2-5,z,10,64)});u.wrapS=u.wrapT=Pn;let p=(_,L,J,z,ot=-_,dt=_)=>{let Y=[],Q=[],bt=[],U=0;for(let vt=0;vt<=o;vt++){let Tt=l[vt%o],Dt=l[(vt+1)%o],Zt=new D().subVectors(Dt,Tt).normalize(),ce=new D(-Zt.z,0,Zt.x);if(vt>0&&(U+=l[vt%o].distanceTo(l[(vt-1)%o])),Y.push(Tt.x+ce.x*ot,J,Tt.z+ce.z*ot,Tt.x+ce.x*dt,J,Tt.z+ce.z*dt),Q.push(0,U/z,1,U/z),vt<o){let Et=vt*2;bt.push(Et,Et+1,Et+2,Et+1,Et+3,Et+2)}}let et=new Be;et.setAttribute("position",new me(Y,3)),et.setAttribute("uv",new me(Q,2)),et.setIndex(bt),et.computeVertexNormals();let st=new se(et,L);return st.receiveShadow=!0,t.add(st),st};p(c/2,new Se({map:u,roughness:.82,side:cn}),.02,10);let d=En(64,64,(_,L,J)=>{_.fillStyle="#c8302a",_.fillRect(0,0,L,J/2),_.fillStyle="#f2f0ea",_.fillRect(0,J/2,L,J/2)});d.wrapS=d.wrapT=Pn;let f=new Se({map:d,roughness:.6,side:cn});p(0,f,.035,2.2,c/2,c/2+.9),p(0,f,.035,2.2,-c/2-.9,-c/2);let g=En(512,512,(_,L,J)=>{_.fillStyle="#4d6b33",_.fillRect(0,0,L,J);for(let z=0;z<3e4;z++){let ot=80+s()*50;_.fillStyle=`rgba(${ot*.55|0},${ot},${ot*.4|0},.5)`,_.fillRect(s()*L,s()*J,1,3)}});g.wrapS=g.wrapT=Pn,g.repeat.set(90,90);let y=new se(new Ue(700,700),new Se({map:g,roughness:.95}));y.rotation.x=-Math.PI/2,y.receiveShadow=!0,t.add(y);let h=En(2048,820,(_,L,J)=>{_.fillStyle="#56763a",_.fillRect(0,0,L,J);for(let z=0;z<16;z++)_.fillStyle=z%2?"rgba(130,160,90,.35)":"rgba(40,70,25,.25)",_.fillRect(z*L/16,0,L/16,J);_.save(),_.font=`900 640px ${_n}`,_.textAlign="center",_.textBaseline="middle","letterSpacing"in _&&(_.letterSpacing="30px"),_.fillStyle="rgba(178,205,120,.95)",_.fillText("PKM",L/2,J/2+40),_.globalCompositeOperation="source-atop";for(let z=0;z<40;z++)_.fillStyle=z%2?"rgba(255,255,220,.18)":"rgba(30,60,10,.12)",_.fillRect(0,z*J/40,L,J/40);_.restore();for(let z=0;z<2e4;z++){let ot=80+s()*60;_.fillStyle=`rgba(${ot*.5|0},${ot},${ot*.35|0},.25)`,_.fillRect(s()*L,s()*J,2,4)}}),m=8,S=74,w=30,M=new se(new Ue(S,w),new Se({map:h,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1}));M.rotation.x=-Math.PI/2,M.position.set(-10,.01,m),M.receiveShadow=!0,t.add(M);let A={x:-10,z:m,hw:S/2-6,hh:w/2-4},T=[[118,-40],[70,-20],[40,10],[20,40]].map(([_,L])=>new D(_,0,L)),v=new Xi(T),b=En(256,256,(_,L,J)=>{_.fillStyle="#9a4f2c",_.fillRect(0,0,L,J);for(let z=0;z<9e3;z++){let ot=120+s()*60;_.fillStyle=`rgba(${ot},${ot*.5|0},${ot*.3|0},.6)`,_.fillRect(s()*L,s()*J,2,2)}});b.wrapS=b.wrapT=Pn;let O=v.getSpacedPoints(120);{let _=[],L=[],J=[],z=0;for(let Y=0;Y<=120;Y++){let Q=O[Y],bt=O[Math.min(120,Y+1)],U=O[Math.max(0,Y-1)],et=new D().subVectors(bt,U).normalize(),st=new D(-et.z,0,et.x);if(Y&&(z+=Q.distanceTo(U)),_.push(Q.x+st.x*3.4,.012,Q.z+st.z*3.4,Q.x-st.x*3.4,.012,Q.z-st.z*3.4),L.push(0,z/6,1,z/6),Y<120){let vt=Y*2;J.push(vt,vt+1,vt+2,vt+1,vt+3,vt+2)}}let ot=new Be;ot.setAttribute("position",new me(_,3)),ot.setAttribute("uv",new me(L,2)),ot.setIndex(J),ot.computeVertexNormals();let dt=new se(ot,new Se({map:b,roughness:1,side:cn}));dt.receiveShadow=!0,t.add(dt)}let E=(_,L,J)=>{let z=1e9,ot=0;for(let dt=0;dt<_.length;dt+=1){let Y=_[dt],Q=(Y.x-L)**2+(Y.z-J)**2;Q<z&&(z=Q,ot=dt)}return{d:Math.sqrt(z),i:ot}},I=l.filter((_,L)=>L%6===0),N=(_,L)=>{let J=E(I,_,L),z=1e9,ot=0;for(let dt=-8;dt<=8;dt++){let Y=((J.i*6+dt)%o+o)%o,Q=l[Y],bt=(Q.x-_)**2+(Q.z-L)**2;bt<z&&(z=bt,ot=Y)}return{d:Math.sqrt(z),i:ot}},Z=new Ln(.18,.28,1,7);Z.translate(0,.5,0);let F=new Ir(1,1),k=new ri(Z,new Se({color:"#5a4430",roughness:1}),260),$=new ri(F,new Se({color:"#3f6b2c",roughness:.9,flatShading:!0}),260);k.castShadow=$.castShadow=!0;let K=0,xt=new xe,at=new je,rt=new jt;for(;K<260;){let _=(s()-.5)*420,L=(s()-.5)*420;if(N(_,L).d<14||Math.abs(_-A.x)<A.hw+10&&Math.abs(L-A.z)<A.hh+10||E(O,_,L).d<8)continue;let J=4+s()*6,z=2+s()*2.4;xt.compose(new D(_,0,L),at.identity(),new D(1,J,1)),k.setMatrixAt(K,xt),xt.compose(new D(_,J+z*.4,L),at.setFromAxisAngle(new D(0,1,0),s()*6),new D(z,z*.75,z)),$.setMatrixAt(K,xt),$.setColorAt(K,rt.setHSL(.27+s()*.06,.4+s()*.2,.22+s()*.1)),n.push({x:_,z:L,r:.45}),K++}t.add(k,$);let ht=l[0],it=l[3],mt=new D().subVectors(it,ht).normalize(),X=Math.atan2(mt.x,mt.z),lt=new $e;lt.position.copy(ht),lt.rotation.y=X,t.add(lt);let gt=new Se({color:"#2b2d2f",metalness:.7,roughness:.4});for(let _ of[-1,1]){let L=new se(new He(.4,6.4,.4),gt);L.position.set(_*(c/2+1.6),3.2,0),L.castShadow=!0,lt.add(L)}let kt=En(2048,256,(_,L,J)=>{_.fillStyle="#0d0d0d",_.fillRect(0,0,L,J),_.fillStyle="#F2F0EA",_.font=`800 150px ${_n}`,_.textBaseline="middle",_.fillText("PKM",60,J/2+6),_.fillStyle="#BBA783",_.font=`600 84px ${_n}`,_.fillText("KUMASI PROVING GROUND",470,J/2+4)}),St=new se(new He(c+3.6,1.4,.5),[gt,gt,gt,gt,new Se({map:kt,emissive:"#fff",emissiveMap:kt,emissiveIntensity:.25}),new Se({map:kt})]);St.position.y=6.2,St.castShadow=!0,lt.add(St);let Lt=En(256,32,(_,L,J)=>{for(let z=0;z<16;z++)for(let ot=0;ot<2;ot++)_.fillStyle=(z+ot)%2?"#111":"#eee",_.fillRect(z*16,ot*16,16,16)}),fe=new se(new Ue(c,1.2),new Se({map:Lt,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));fe.rotation.x=-Math.PI/2,fe.position.y=.03,lt.add(fe);let Yt=En(300,200,(_,L,J)=>{_.fillStyle="#ce1126",_.fillRect(0,0,L,J/3),_.fillStyle="#fcd116",_.fillRect(0,J/3,L,J/3),_.fillStyle="#006b3f",_.fillRect(0,2*J/3,L,J/3),_.fillStyle="#000",_.beginPath();let z=L/2,ot=J/2,dt=26;for(let Y=0;Y<10;Y++){let Q=-Math.PI/2+Y*Math.PI/5,bt=Y%2?dt*.4:dt;_.lineTo(z+Math.cos(Q)*bt,ot+Math.sin(Q)*bt)}_.fill()}),Qt=new Ue(3,2,20,4),oe=new se(Qt,new Se({map:Yt,side:cn,roughness:.8})),ct=new se(new Ln(.06,.08,10,10),gt),ft=new $e;ft.position.copy(ht).add(new D(mt.z,0,-mt.x).multiplyScalar(c/2+6)),t.add(ft),ct.position.y=5,ft.add(ct),oe.position.set(1.55,8.8,0),ft.add(oe),oe.castShadow=!0,n.push({x:ft.position.x,z:ft.position.z,r:.2});let wt=(_,L,J,z,ot,dt)=>{let Y=new $e;Y.position.copy(z),Y.rotation.y=ot,t.add(Y);let Q=En(1024,512,(et,st,vt)=>{et.fillStyle="#0c0c0c",et.fillRect(0,0,st,vt),et.fillStyle=J,et.fillRect(0,vt-22,st,22),et.fillStyle="#F2F0EA",et.font=`800 112px ${_n}`,et.fillText(_,60,200),et.fillStyle="#B3ACA1",et.font=`500 50px ${_n}`,et.fillText(L,64,300),et.fillStyle=J,et.font=`700 46px ${_n}`,et.fillText("Tap to visit \u2192",64,420)}),bt=new se(new Ue(10,5),new Se({map:Q,emissive:"#fff",emissiveMap:Q,emissiveIntensity:.18}));bt.position.y=5,bt.userData.click=dt,Y.add(bt),e.push(bt);for(let et of[-3,3]){let st=new se(new He(.3,5,.3),gt);st.position.set(et,1.5,-.2),st.castShadow=!0,Y.add(st),n.push({x:z.x+Math.cos(ot)*et,z:z.z-Math.sin(ot)*et,r:.3})}let U=new se(new He(10.2,5.2,.2),gt);return U.position.set(0,5,-.15),Y.add(U),Y};wt("Papa Kojo","Back to the portfolio","#BBA783",new D(30,0,-82),0,"home"),wt("Accra 3D","Drive Liberation Road","#93AE7C",new D(140,0,20),-Math.PI/2,"accra"),wt("Iconka Designs","Brands, posters, menus","#d9774a",new D(-136,0,10),Math.PI/2,"design");let Ot=[],Nt=new Mr(.22,.7,16);Nt.translate(0,.35,0);let Rt=new Se({color:"#ff6a1a",roughness:.5});for(let _=0;_<8;_++){let L=Math.round(o*.52)+_*7,J=l[L],z=l[L+1],ot=new D().subVectors(z,J).normalize(),dt=new D(-ot.z,0,ot.x),Y=new se(Nt,Rt);Y.castShadow=!0,Y.position.copy(J).addScaledVector(dt,(_%2?1:-1)*1.6),t.add(Y),Ot.push({mesh:Y,home:Y.position.clone(),v:new D,spin:new D,knocked:!1})}let zt=[];for(let _=0;_<7;_++){let L=Math.round(o*.06)+_*16,J=l[L],z=l[L+1],ot=new D().subVectors(z,J).normalize(),dt=new D(-ot.z,0,ot.x),Y=J.clone().addScaledVector(dt,c/2+2.5),Q=new se(new Ln(.08,.12,8,8),gt);Q.position.copy(Y).setY(4),Q.castShadow=!0,t.add(Q);let bt=new se(new He(1.2,.15,.4),new Se({color:"#222",emissive:"#ffd9a0",emissiveIntensity:0}));bt.position.copy(Y).addScaledVector(dt,-.6).setY(8),bt.rotation.y=Math.atan2(dt.x,dt.z),t.add(bt),zt.push(bt),n.push({x:Y.x,z:Y.z,r:.2})}let qt=[];for(let _=0;_<3;_++){let L=new Ci(16767392,0,26,1.6);L.position.copy(zt[_*3].position).setY(7.6),t.add(L),qt.push(L)}let ee=new qs;ee.scale.setScalar(4500),t.add(ee);let ie=new Ur(16777215,2.6);ie.castShadow=!0,ie.shadow.mapSize.set(i==="low"?1024:2048,i==="low"?1024:2048),Object.assign(ie.shadow.camera,{left:-40,right:40,top:40,bottom:-40,near:1,far:300}),ie.shadow.bias=-4e-4,ie.shadow.normalBias=.03,t.add(ie,ie.target);let G=new Ds(13624319,4872752,.6);t.add(G);let re=new D;function ne(_){let L=_==="night"?-6:_==="sunset"?4:42,J=_==="sunset"?250:200,z=ui.degToRad(90-L),ot=ui.degToRad(J);re.setFromSphericalCoords(1,z,ot);let dt=ee.material.uniforms;dt.sunPosition.value.copy(re),dt.turbidity.value=_==="sunset"?6:3,dt.rayleigh.value=_==="night"?.4:_==="sunset"?2.6:1.2,dt.mieCoefficient.value=.004,dt.mieDirectionalG.value=.85,ie.intensity=_==="night"?.05:_==="sunset"?1.9:2.7,ie.color.set(_==="sunset"?"#ffb27a":_==="night"?"#8aa0d8":"#fff4e6"),G.intensity=_==="night"?.14:_==="sunset"?.3:.45,G.color.set(_==="night"?"#38456a":"#cfe3ff");for(let Y of zt)Y.material.emissiveIntensity=_==="night"?4:0;for(let Y of qt)Y.intensity=_==="night"?120:0}function ve(_){ie.position.copy(_).addScaledVector(re.y>.05?re:new D(.3,1,.2).normalize(),120),ie.target.position.copy(_)}function Ut(_){let L=new yi,J=new qs;J.scale.setScalar(1e3),Object.assign(J.material.uniforms.sunPosition.value,re),J.material.uniforms.sunPosition.value.copy(re),J.material.uniforms.rayleigh.value=ee.material.uniforms.rayleigh.value,J.material.uniforms.turbidity.value=ee.material.uniforms.turbidity.value,L.add(J);let z=new se(new Ue(2e3,2e3),new In({color:_==="night"?"#050806":"#3d5228"}));return z.rotation.x=-Math.PI/2,z.position.y=-1,L.add(z),L}let be=0;function Ht(_,L){be+=_;let J=Qt.attributes.position;for(let z=0;z<J.count;z++){let ot=J.getX(z)+1.5;J.setZ(z,Math.sin(ot*2.2-be*6)*.12*ot/3)}J.needsUpdate=!0,Qt.computeVertexNormals();for(let z of Ot){if(L){let ot=z.mesh.position.x-L.x,dt=z.mesh.position.z-L.z,Y=Math.hypot(ot,dt),Q=Math.hypot(L.vx,L.vy);Y<1.5&&Q>1&&!z.knocked&&(z.knocked=!0,z.v.set(ot/Y*Q*.7+Math.sin(L.yaw)*Q*.5,2+Q*.15,dt/Y*Q*.7+Math.cos(L.yaw)*Q*.5),z.spin.set(s()*8,s()*8,s()*8),z.onHit&&z.onHit())}z.knocked&&(z.v.y-=9.8*_,z.mesh.position.addScaledVector(z.v,_),z.mesh.rotation.x+=z.spin.x*_,z.mesh.rotation.z+=z.spin.z*_,z.mesh.position.y<0&&(z.mesh.position.y=0,z.v.multiplyScalar(.5),z.v.y=Math.abs(z.v.y)*.3,z.spin.multiplyScalar(.6)))}}function $t(){for(let _ of Ot)_.knocked=!1,_.mesh.position.copy(_.home),_.mesh.rotation.set(0,0,0)}let R=(_,L)=>{let J=N(_,L).d;return J<c/2?{mu:1.05,rough:.02,name:"asphalt"}:J<c/2+.9?{mu:.95,rough:.35,name:"kerb"}:E(O,_,L).d<3.4?{mu:.68,rough:.5,name:"dirt"}:{mu:.6,rough:.6,name:"grass"}};return{group:t,clickables:e,circles:n,curve:a,samples:l,start:{x:ht.x,z:ht.z,yaw:X},grip:R,trackDist:N,pkmZone:A,setMood:ne,follow:ve,envScene:Ut,animate:Ht,resetCones:$t,cones:Ot,bounds:{minX:-200,maxX:200,minZ:-200,maxZ:200}}}var hd={BoxGeometry:He,BufferAttribute:yn,BufferGeometry:Be,CanvasTexture:Wi,CircleGeometry:yr,Color:jt,ColorManagement:ge,CylinderGeometry:Ln,ExtrudeGeometry:Pr,Float32BufferAttribute:me,Group:$e,InstancedMesh:ri,LatheGeometry:Lr,Matrix4:xe,Mesh:se,MeshBasicMaterial:In,MeshPhysicalMaterial:wi,MeshStandardMaterial:Se,PlaneGeometry:Ue,PointLight:Ci,Points:gr,PointsMaterial:Cs,Quaternion:je,RepeatWrapping:Pn,SRGBColorSpace:tn,Shape:Ps,SphereGeometry:Yi,SpotLight:oi,TorusGeometry:bi,Vector2:yt,Vector3:D};async function NM(i){let t=(q,ut=document)=>ut.querySelector(q),e=(q,ut=document)=>[...ut.querySelectorAll(q)],n=new URLSearchParams(location.search),s={get(q,ut){try{let Bt=localStorage.getItem(q);return Bt?JSON.parse(Bt):ut}catch{return ut}},set(q,ut){try{localStorage.setItem(q,JSON.stringify(ut))}catch{}}},r=document.createElement("style");r.textContent=sd,document.head.appendChild(r);let a=t("#view"),o=n.get("quality")||s.get("pkm.drive.quality","auto"),l=["auto","high","low"].includes(o)?o:"auto",c=matchMedia("(max-width: 900px)"),u=(navigator.hardwareConcurrency||8)<=4||c.matches,p=l==="high",d=()=>p||l==="auto"&&!u&&!f?"high":"low",f=!1,g=new il({canvas:a,antialias:!0,powerPreference:"high-performance"});i.watchCanvas(a),g.setPixelRatio(Math.min(devicePixelRatio,d()==="low"?1:1.5)),g.toneMapping=Qi,g.toneMappingExposure=1,g.shadowMap.enabled=!0,g.shadowMap.type=$i;let y=new yi,h=new en(36,1,.1,6e3),m=new ol(h,a);Object.assign(m,{enableDamping:!0,dampingFactor:.07,minDistance:4,maxDistance:18,maxPolarAngle:Math.PI*.495,autoRotateSpeed:.6,enablePan:!1});let S=new Vs(g),w,M;p&&(w=new hl(g),w.addPass(new ul(y,h)),M=new Xs(new yt(256,256),.35,.4,1),w.addPass(M),w.addPass(new dl));let A=ld({quality:d(),reflections:p});y.add(A.group);let T=new pl;T.setMuted(s.get("pkm.drive.muted",!0));let v={};function b(q){if(v[q])return v[q];let ut=td(hd,q),Bt=s.get("pkm.drive.paint."+q,0);ut.paintIndex=Number.isInteger(Bt)&&ut.spec.paints[Bt]?Bt:0;let ye=ut.spec.paints[ut.paintIndex];return ut.setPaint(ye.hex,ye.metal),ut.root.traverse(Te=>{Te.isMesh&&(Te.userData.car=q)}),v[q]=ut}let O=n.get("car")||s.get("pkm.drive.car","volta"),E=Object.hasOwn(Gc,O)?O:"volta",I="showroom",N="studio",Z=()=>b(E);function F(){for(let ut of Object.values(v))ut.root.removeFromParent();let q=Z();A.table.add(q.root),q.root.position.set(0,.1,0),q.root.rotation.set(0,0,0),q.body.rotation.set(0,0,0),q.body.position.set(0,0,0);for(let ut of q.wheels)ut.pivot.rotation.y=0,ut.pivot.position.y=ut.baseY}let k,$=0;function K(){if(!k){k=cd({quality:d()}),y.add(k.group),xt.collide=id({bounds:k.bounds,circles:k.circles,carR:1,carHalf:1.7});for(let q of k.cones)q.onHit=()=>{$++,T.thunk(.25),$>=k.cones.length&&ne("cones","Slalom","All eight cones down.")}}}let xt={grip:(q,ut)=>I==="drive"?k.grip(q,ut):{mu:1,rough:0,name:"floor"},respawn:q=>{let ut=k.trackDist(q.x,q.z),Bt=k.samples[ut.i],ye=k.samples[(ut.i+3)%k.samples.length];return{x:Bt.x,z:Bt.z,yaw:Math.atan2(ye.x-Bt.x,ye.z-Bt.z)}},dustColor:10780762,night:!1},at=rd(t("#stage")),rt=new _l({THREE:hd,scene:y,camera:h,dom:a,vehicle:Z(),audio:T,env:xt,onEvent:L});ad(t("#stage"),rt);let ht={};function it(){let q=I+":"+N;if(!ht[q]){let ut=I==="drive"?k.envScene(N):A.envScene(N);ht[q]=S.fromScene(ut,.03,.1,100,{size:128}).texture,ut.traverse(Bt=>{Bt.geometry?.dispose(),Bt.material?.dispose()})}y.environment=ht[q],y.environmentIntensity=I==="drive"?N==="night"?.12:.45:N==="night"?.55:1,I==="drive"?(y.background=null,y.fog=new ur(N==="night"?"#05070c":N==="sunset"?"#c98f6a":"#9fb6c8",N==="night"?.004:.0011),g.toneMappingExposure=N==="night"?.9:N==="sunset"?.7:.55):(y.background=new jt(N==="night"?"#050505":"#0a0a0a"),y.fog=null,g.toneMappingExposure=1),M&&(M.strength=N==="night"?.6:.35,M.enabled=I==="showroom"||N==="night"),xt.night=N==="night"}function mt(q){N=q,A.setMood(q),k?.setMood(q),it(),e("[data-mood]").forEach(ut=>ut.setAttribute("aria-pressed",ut.dataset.mood===q)),q==="night"&&(Z().state.head=!0,ft())}let X={hero:[[7.4,1.85,8.2],[-.9,.8,.4]],front:[[.4,1.3,8.2],[0,.9,0]],rear:[[-1.2,1.9,-8.2],[0,.9,0]],side:[[8.6,1.2,.3],[0,.9,0]],top:[[.4,10.5,1.2],[0,0,0]],wheel:[[3.2,.55,3.6],[1.2,.4,1.5]],interior:null},lt=null,gt=!1;function kt(){m.minDistance=.01,m.maxDistance=.6,h.near=.02,h.updateProjectionMatrix()}function St(q,ut,Bt=!1){if(i.reducedMotion.matches){lt=null,Bt&&kt(),h.position.copy(q),m.target.copy(ut),m.update();return}lt={from:h.position.clone(),to:q,tf:m.target.clone(),tt:ut,t0:performance.now(),interior:Bt}}function Lt(q){if(Yt(!1),q==="interior")return fe();let[ut,Bt]=X[q],ye=A.table.rotation.y,Te=Re=>new D(Re[0],Re[1],Re[2]).applyAxisAngle(new D(0,1,0),ye),sn=Te(ut),An=Te(Bt);if(c.matches){q==="hero"&&(An.y-=.33);let Re=ui.clamp(.9/h.aspect,1,1.72);sn.sub(An).multiplyScalar(Re).add(An)}St(sn,An),t("#interiorBtn").textContent="Interior",e("[data-cam]").forEach(Re=>Re.setAttribute("aria-pressed",Re.dataset.cam===q))}function fe(){gt=!0,t("#interiorBtn").textContent="Exterior";let q=Z();q.root.updateMatrixWorld(!0);let ut=q.driverEye.clone();q.body.localToWorld(ut);let Bt=new D(0,0,1).applyQuaternion(q.root.getWorldQuaternion(new je));St(ut.clone().addScaledVector(Bt,-.02),ut.clone().addScaledVector(Bt,.4),!0),e("[data-cam]").forEach(ye=>ye.setAttribute("aria-pressed",ye.dataset.cam==="interior")),q.state.interiorGlow=1}function Yt(q=!0){gt&&(gt=!1,m.minDistance=4,m.maxDistance=18,h.near=.1,h.updateProjectionMatrix(),Z().state.interiorGlow=0,q&&Lt("hero"))}let Qt=!i.reducedMotion.matches&&s.get("pkm.drive.spin",!1)===!0;t("#spin").setAttribute("aria-pressed",Qt),i.reducedMotion.addEventListener("change",q=>{q.matches&&oe(!1)});function oe(q){Qt=q,t("#spin").setAttribute("aria-pressed",q),s.set("pkm.drive.spin",q)}function ct(){let q=Z().spec;t("#kicker").textContent=`${q.brand} \xB7 2027`,t("#vname").textContent=q.name,t("#trim").textContent=q.trim,t("#tagline").textContent=q.tagline,t("#chips").innerHTML=q.chips.map(ut=>`<li>${ut}</li>`).join(""),e("[data-car]").forEach(ut=>ut.setAttribute("aria-current",ut.dataset.car===E)),t("#swatches").innerHTML=q.paints.map((ut,Bt)=>`<button class="swatch" style="--sw:${ut.hex}" data-paint="${Bt}" aria-pressed="${Bt===Z().paintIndex}" aria-label="${ut.name}" title="${ut.name}"></button>`).join(""),t("#paintName").textContent=q.paints[Z().paintIndex].name,t('[data-panel="tailgate"]').textContent=E==="volta"?"Tailgate":"Liftgate",t("#accraLink").href=`/accra3d/?drive=${E}&paint=${Z().paintIndex}`,document.title=`PKM ${q.name} \xB7 Drive Studio \xB7 Papa Kojo`}function ft(){let q=Z().state;for(let ut of["head","left","right","hazard"])for(let Bt of e(`[data-light="${ut}"]`))Bt.setAttribute("aria-pressed",!!q[ut]);for(let[ut,Bt]of Object.entries(Z().panels)){let ye=t(`[data-panel="${ut}"]`);ye&&Bt.userData&&ye.setAttribute("aria-pressed",Bt.userData.target===1)}t("#engineBtn").textContent=rt.startTimer?"Cancel start":rt.dyn.engine?"Stop engine":"Start engine",t("#reverseBtn").textContent=rt.dyn.reverse?"Shift to drive":"Shift to reverse",t("#reverseBtn").setAttribute("aria-pressed",rt.dyn.reverse)}function wt(q){q===E||I==="drive"||(Yt(!1),E=q,s.set("pkm.drive.car",q),rt.setVehicle(Z()),N==="night"&&(Z().state.head=!0),F(),Lt("hero"),ct(),ft())}e("[data-car]").forEach(q=>q.addEventListener("click",()=>wt(q.dataset.car))),t("#swatches").addEventListener("click",q=>{let ut=q.target.closest("[data-paint]");if(!ut)return;let Bt=+ut.dataset.paint,ye=Z().spec.paints[Bt];Z().setPaint(ye.hex,ye.metal),Z().paintIndex=Bt,s.set("pkm.drive.paint."+E,Bt),ct(),T.click(2600,.08,.02),ye.name==="Kente Gold"&&ne("gold","Kente Gold","The only paint with a story woven in.")}),e("[data-panel]").forEach(q=>q.addEventListener("click",()=>Ot(q.dataset.panel)));function Ot(q){let ut=Z().togglePanel(q);q.startsWith("front")||q.startsWith("rear")?ut?T.latch():setTimeout(()=>T.thunk(.5),260):q==="hood"||q==="tailgate"?ut?T.latch():setTimeout(()=>T.thunk(.7),420):T.click(1200,.12,.08),ft()}e("[data-light]").forEach(q=>q.addEventListener("click",()=>rt.toggle(q.dataset.light))),t("#horn").addEventListener("click",()=>rt.horn()),t("#engineBtn").addEventListener("click",()=>rt.toggleEngine()),t("#interiorBtn").addEventListener("click",()=>Lt(gt?"hero":"interior")),e("[data-cam]").forEach(q=>q.addEventListener("click",()=>Lt(q.dataset.cam))),e("[data-mood]").forEach(q=>q.addEventListener("click",()=>mt(q.dataset.mood))),t("#spin").addEventListener("click",()=>oe(!Qt)),t("#quality").value=l,t("#quality").addEventListener("change",q=>{s.set("pkm.drive.quality",q.target.value);let ut=new URL(location.href);ut.searchParams.delete("quality"),ut.searchParams.set("car",E),location.replace(ut)});function Nt(){t("#mute").setAttribute("aria-pressed",!T.muted),t("#mute").textContent=T.muted?"Sound off":"Sound on"}t("#mute").addEventListener("click",()=>{T.setMuted(!T.muted),s.set("pkm.drive.muted",T.muted),Nt(),T.muted||T.unlock().catch(()=>{})}),Nt(),t("#fullscreen").hidden=!document.fullscreenEnabled,t("#fullscreen").addEventListener("click",()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{})});function Rt(q){t("#panel").dataset.open=q,t("#panelToggle").setAttribute("aria-expanded",q),t("#panelBody").inert=c.matches&&!q}Rt(!1),c.addEventListener("change",()=>Rt(!1)),t("#panelToggle").addEventListener("click",()=>Rt(t("#panel").dataset.open!=="true")),t(".skip").addEventListener("click",q=>{q.preventDefault(),Rt(!0),(I==="drive"?t("#exitDrive"):t("#panelBody").querySelector("button")).focus()}),t("#driveBtn").addEventListener("click",()=>{t("#driveBtn").disabled||(t("#driveBtn").disabled=!0,t("#driveBtn").textContent="Opening track\u2026",T.muted||T.unlock().catch(()=>{}),requestAnimationFrame(()=>requestAnimationFrame(()=>{if(i.running)try{qt("drive")}catch{z("The track couldn\u2019t open","Try again or drive through Accra.")}finally{t("#driveBtn").disabled=!1,t("#driveBtn").textContent="Test track"}})))}),t("#exitDrive").addEventListener("click",()=>qt("showroom")),t("#camBtn").addEventListener("click",()=>rt.cycleCamera()),t("#reverseBtn").addEventListener("click",()=>{rt.shiftDirection(),a.focus({preventScroll:!0})}),t("#helpBtn").addEventListener("click",()=>{t("#keys").hidden=!t("#keys").hidden,t("#helpBtn").setAttribute("aria-expanded",!t("#keys").hidden)}),t("#resetBtn").addEventListener("click",()=>{rt.recover(),zt()}),document.addEventListener("keydown",q=>{q.key==="Escape"&&(t("#secrets").hidden?I==="drive"?qt("showroom"):t("#panel").dataset.open==="true"&&c.matches?(Rt(!1),t("#panelToggle").focus()):gt&&Lt("hero"):(ve(!1),t("#secretsBtn").focus()))});function zt(){$=0,k.resetCones()}function qt(q,ut=!0){if(q!==I){if(q==="drive"&&K(),I=q,document.body.dataset.mode=q,q==="drive"){Yt(!1),lt=null,Rt(!1),ve(!1),A.group.visible=!1,k.group.visible=!0,k.setMood(N),y.add(Z().root),m.enabled=!1,rt.setEnabled(!0),rt.cycleCamera("chase");for(let Bt of Object.keys(Z().panels))Z().togglePanel(Bt,!1);rt.place(k.start.x,k.start.z,k.start.yaw),zt(),at.el.hidden=!1,rt.toggleEngine(!0),t("#keys").hidden=!0,t("#helpBtn").setAttribute("aria-expanded","false"),z("Kumasi test track",matchMedia("(pointer: coarse)").matches?"Use the pedals and arrows below.":"W to go, S to brake, V to shift. C changes the camera."),a.setAttribute("aria-label","Kumasi test track. W to accelerate, S to brake, V to shift.")}else rt.setEnabled(!1),at.el.hidden=!0,A.group.visible=!0,k.group.visible=!1,m.enabled=!0,h.near=.1,h.fov=36,h.updateProjectionMatrix(),T.cabin=0,F(),Lt("hero"),a.setAttribute("aria-label","3D showroom. Drag to orbit and use the controls to inspect the car."),ut&&t("#driveBtn").focus({preventScroll:!0});it(),ft()}}let ee={sign:["The sign","Click the PKM sign three times."],plant:["Akwaaba","Water the plant in the corner."],horn:["Beep beep","Honk three times quickly."],pkm:["Field work","Find the name mowed into the infield."],cones:["Slalom","Knock over all eight cones."],gold:["Kente Gold","Find the paint with a story."],konami:["Disco","The classic code. \u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA"],ton:["Ton-up","Hit 120 km/h on the proving ground."]},ie=s.get("pkm.drive.secrets",[]),G=new Set(Array.isArray(ie)?ie.filter(q=>Object.hasOwn(ee,q)):[]);function re(){t("#secretCount").textContent=`${G.size}/${Object.keys(ee).length}`,t("#secretList").innerHTML=Object.entries(ee).map(([q,[ut,Bt]])=>`<li data-found="${G.has(q)}"><strong>${G.has(q)?ut:"Hidden"}</strong><span>${Bt}</span></li>`).join("")}function ne(q,ut,Bt){G.has(q)||(G.add(q),s.set("pkm.drive.secrets",[...G]),re(),T.chime(),z(`Secret found \xB7 ${G.size}/${Object.keys(ee).length}`,`${ut}. ${Bt}`))}function ve(q){t("#secrets").hidden=!q,t("#secretsBtn").setAttribute("aria-expanded",q),q&&t("#closeSecrets").focus()}t("#secretsBtn").addEventListener("click",()=>ve(t("#secrets").hidden)),t("#closeSecrets").addEventListener("click",()=>{ve(!1),t("#secretsBtn").focus()}),re();let Ut=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"],be=0,Ht=0;addEventListener("keydown",q=>{be=q.key.toLowerCase()===Ut[be]?be+1:q.key.toLowerCase()===Ut[0]?1:0,be===Ut.length&&(be=0,i.reducedMotion.matches||(Ht=8),et(),ne("konami","Disco","Eight seconds of showroom party."))});let $t=0,R=0,_=["#F2E6CF","#BBA783","#93AE7C","#ce1126","#fcd116","#006b3f"];function L(q,ut){q==="horn"&&ut>=3&&ne("horn","Beep beep","Akwaaba! Kumasi heard you."),(q==="engine"||q==="direction")&&ft(),q==="shift-blocked"&&z("Stop before shifting","Bring the car to a stop and release the accelerator."),et(),q==="camera"&&(t("#camBtn").textContent="Camera: "+{chase:"Chase",far:"Far chase",cabin:"Cockpit",hood:"Bonnet",cine:"Cinematic",drone:"Drone"}[ut],ut==="drone"&&I==="drive"&&z("Drone camera","Look down at the infield.")),q==="lights"&&ft()}let J;function z(q,ut){let Bt=t("#toast");Bt.innerHTML=`<strong>${q}</strong><span>${ut}</span>`,Bt.hidden=!1,Bt.classList.remove("show"),Bt.offsetWidth,Bt.classList.add("show"),clearTimeout(J),J=setTimeout(()=>Bt.classList.remove("show"),4200)}let ot=new Or,dt=new yt,Y=null;a.addEventListener("pointerdown",q=>{Y=[q.clientX,q.clientY]}),a.addEventListener("pointerup",q=>{if(!Y||Math.hypot(q.clientX-Y[0],q.clientY-Y[1])>6)return;let ut=bt(q);if(!ut)return;let Bt=ut.object,ye=Bt.userData.click;if(Bt.userData.panel&&Bt.userData.car===E&&I==="showroom")return Ot(Bt.userData.panel);if(Bt.userData.car&&Bt.userData.car!==E&&I==="showroom")return wt(Bt.userData.car);if(ye==="sign")$t++,A.signM.emissive.set(_[$t%_.length]),T.click(800+$t*120,.15,.05),$t>=3&&ne("sign","The sign","It cycles through the Ghana flag colours too.");else if(ye==="plant"){R++,T.chime([520,660]);for(let Te of A.leaves)Te.scale.y=Math.min(2.6,Te.scale.y*1.08);z("Watering the plants\u2026",R<3?"It likes that.":"Look how it has grown."),R>=3&&ne("plant","Akwaaba","Just like the portfolio\u2019s welcome screen.")}else ye==="poster"||ye==="design"?location.href="/design/":ye==="home"?location.href="/":ye==="accra"&&(location.href=t("#accraLink").href)});let Q=0;a.addEventListener("pointermove",q=>{if(I!=="showroom"||q.pointerType==="touch")return;let ut=performance.now();if(ut-Q<120)return;Q=ut;let Bt=bt(q);a.style.cursor=Bt&&(Bt.object.userData.click||Bt.object.userData.car&&I==="showroom"&&(Bt.object.userData.panel||Bt.object.userData.car!==E))?"pointer":""});function bt(q){let ut=a.getBoundingClientRect();dt.set((q.clientX-ut.left)/ut.width*2-1,-((q.clientY-ut.top)/ut.height)*2+1),ot.setFromCamera(dt,h);let Bt=I==="showroom"?[...A.clickables,Z().root]:k.clickables;return ot.intersectObjects(Bt,!0).find(ye=>ye.object.visible)||null}let U=0;function et(){U=performance.now()+1600}function st(){let q=a.clientWidth,ut=a.clientHeight;!q||!ut||(g.setSize(q,ut,!1),w?.setSize(q,ut),h.aspect=q/ut,h.updateProjectionMatrix(),et())}new ResizeObserver(st).observe(a),m.addEventListener("change",et),document.querySelector("[data-scene-controls]").addEventListener("click",et),a.addEventListener("pointerup",et);let vt,Tt=0,Dt=0,Zt=0;function ce(q){w&&M.enabled?w.render(q):g.render(y,h)}function Et(q){if(!i.running){rt.setEnabled(!1);return}requestAnimationFrame(Et);let ut=vt===void 0?0:(q-vt)/1e3;if(vt=q,document.hidden||ut>.5)return;let Bt=Math.min(ut,.1);if(I==="showroom"){let Te=Z(),sn=Qt&&!lt&&!gt;if(sn&&(A.table.rotation.y+=Bt*.12),lt){let De=Math.min(1,(q-lt.t0)/1e3),di=1-Math.pow(1-De,3);h.position.lerpVectors(lt.from,lt.to,di),m.target.lerpVectors(lt.tf,lt.tt,di),lt.interior&&De>.62&&h.near!==.02&&kt(),De>=1&&(lt=null)}m.update();let An=Object.values(Te.panels).some(De=>Math.abs(De.userData.open-De.userData.target)>.002),Re=Te.state;if(q>U&&!sn&&!lt&&!An&&!rt.dyn.engine&&!Re.left&&!Re.right&&!Re.hazard&&Ht<=0)return;if(Te.update(Bt,{engine:rt.dyn.engine,night:N==="night"}),rt.dyn.engine){let De=rt.dyn;De.rpm+=(Te.spec.idle-De.rpm)*Math.min(1,Bt*3),De.throttle*=.9,Te.body.position.y=i.reducedMotion.matches?0:Math.sin(q*.05)*.0012,T.update(De,Te.spec,Bt),Te.drawCluster(0,De.rpm,"P")}if(Ht>0){Ht-=Bt;let De=q/600%1;A.signM.emissive.setHSL(De,.8,.6),A.led.material.emissive.setHSL((De+.5)%1,.8,.55),A.lights.key.color.setHSL(De,.7,.6),Ht<=0&&mt(N)}}else{rt.update(Bt);let Te=rt.dyn;k.follow(Z().root.position),k.animate(Bt,Te),at.update(rt.hud(),Bt),Math.abs(Te.vx)*3.6>120&&ne("ton","Ton-up","You reached 120 km/h on the test track.");let sn=k.pkmZone;Math.abs(Te.x-sn.x)<sn.hw&&Math.abs(Te.z-sn.z)<sn.hh&&ne("pkm","Field work","You found the PKM in the grass. Try the drone camera.")}if(ce(Bt),Dt++,Tt+=ut*1e3,Tt<1400)return;Zt=Dt/Tt*1e3<30?Zt+1:0,Dt=0,Tt=0,l==="auto"&&!f&&Zt>=2&&(f=!0,g.setPixelRatio(Math.min(devicePixelRatio,.9)),st())}i.progress("Setting up the showroom\u2026"),F(),ct();let Jt=n.get("mood");mt(["studio","sunset","night"].includes(Jt)?Jt:"studio"),st();let[de,Gt]=X.hero;h.position.set(...de),m.target.set(...Gt),c.matches&&(m.target.y-=.33,h.position.sub(m.target).multiplyScalar(ui.clamp(.9/h.aspect,1,1.72)).add(m.target)),m.update(),ce(0),i.running&&(ft(),i.ready(),n.get("mode")==="drive"&&requestAnimationFrame(()=>{i.running&&qt("drive",!1)}),requestAnimationFrame(Et),window.__ds={scene:y,cars:v,drive:rt,setMode:qt,selectCar:wt,setMood:mt,flyTo:Lt,get course(){return k},togglePanel:Ot,secret:ne})}export{NM as startStudio};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
