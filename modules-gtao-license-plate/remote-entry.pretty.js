try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="4e0c44de-8877-4237-8970-2cae130652f4",
  e._sentryDebugIdIdentifier="sentry-dbid-4e0c44de-8877-4237-8970-2cae130652f4")
}catch(e){
}{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  };
  e._sentryModuleMetadata=e._sentryModuleMetadata||{
  },
  e._sentryModuleMetadata[(new e.Error).stack]=Object.assign({
  },
  e._sentryModuleMetadata[(new e.Error).stack],
  {
    release:"f3b9d5913fdd878f47b94e9f08e6af4d75ce4877",
    packageName:"@rockstargames/modules-gtao-license-plate",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"f3b9d5913fdd878f47b94e9f08e6af4d75ce4877"
},
System.register([],
function(e,
t){
  return{
    execute:function(){
      e((()=>{
        var e={
          7294(e,
          t,
          r){
            (0,
            r(5316).w)(1)
          },
          5316(e,
          t,
          r){
            const a=r(2232).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=a(r.y.meta.url,
              e)
            }
          },
          3069(e,
          t,
          r){
            r(7294)
          },
          2232(e,
          t,
          r){
            t.y=function(e,
            t){
              var r=document.createElement("a");
              r.href=e;
              for(var a="/"===r.pathname[0]?r.pathname:"/"+r.pathname,
              n=0,
              o=a.length;
              n!==t&&o>=0;
              )"/"===a[--o]&&n++;
              if(n!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+n+") in the URL path "+e);
              var c=a.slice(0,
              o+1);
              return r.protocol+"//"+r.host+c
            };
            Number.isInteger
          },
          5819(e,
          t,
          r){
            "use strict";
            const a={
              "./index":()=>Promise.all([r.e(8894),
              r.e(2497),
              r.e(4070),
              r.e(5748),
              r.e(1551),
              r.e(7281),
              r.e(5472),
              r.e(3612),
              r.e(5501),
              r.e(1518),
              r.e(6748),
              r.e(9970),
              r.e(6866)]).then(()=>()=>r(5269))
            },
            n=(e,
            t)=>(r.R=t,
            t=r.o(a,
            e)?a[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            r.R=void 0,
            t),
            o=(e,
            t)=>{
              if(!r.S)return;
              const a="default",
              n=r.S[a];
              if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return r.S[a]=e,
              r.I(a,
              t)
            };
            r.d(t,
            {
              get:()=>n,
              init:()=>o
            })
          }
        };
        const r={
        };
        function a(t){
          const n=r[t];
          if(void 0!==n)return n.exports;
          const o=r[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(o.exports,
          o,
          o.exports,
          a),
          o.loaded=!0,
          o.exports
        }return a.m=e,
        a.c=r,
        a.y=t,
        a.amdO={
        },
        a.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return a.d(t,
          {
            a:t
          }),
          t
        },
        a.cw=e=>{
          var t;
          return()=>{
            if(e){
              var r=e;
              e=0,
              t={
                exports:{
                }
              },
              r.call(t.exports,
              t,
              t.exports)
            }return t.exports
          }
        },
        (()=>{
          const e=Object.getPrototypeOf;
          let t;
          a.t=function(r,
          n){
            if(1&n&&(r=this(r)),
            8&n)return r;
            if("object"==typeof r&&r){
              if(4&n&&r.__esModule)return r;
              if(16&n&&"function"==typeof r.then)return r
            }const o=Object.create(null);
            a.r(o);
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var d=2&n&&r;
            ("object"==typeof d||"function"==typeof d)&&!~t.indexOf(d);
            d=e(d))Object.getOwnPropertyNames(d).forEach(e=>c[e]=()=>r[e]);
            return c.default=()=>r,
            a.d(o,
            c),
            o
          }
        })(),
        a.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var n=t[r++],
            o=t[r++],
            c=0===o?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:o
            };
            a.o(e,
            n)||Object.defineProperty(e,
            n,
            c)
          }else for(var n in t)a.o(t,
          n)&&!a.o(e,
          n)&&Object.defineProperty(e,
          n,
          {
            enumerable:!0,
            get:t[n]
          })
        },
        a.f={
        },
        a.e=e=>Promise.all(Object.keys(a.f).reduce((t,
        r)=>(a.f[r](e,
        t),
        t),
        [])),
        a.u=e=>"js/"+{
          755:"06e82e5e50104dc0eda8a1243c1a3db5",
          947:"8f391f0d42f7641a9b239753b95c279a",
          1913:"ce7cb31e43d188b64463c2f463d8bb1d",
          2042:"45d05284f23417633593b7a248939bee",
          2497:"a7a6cf96a9c627ac576320a1214f87fb",
          2584:"c95fba123176ce5567b24ee8b6f7b470",
          2852:"5dad32b00fee50a3a7a90b58e6f5dfb6",
          2873:"2a7418d8d6595ad6b2ed782b2d8cb036",
          3099:"4f83406f963d8a0ee0678b9069178cfa",
          3244:"eb64bbddd2aaebfe6c324bc2ad79dadd",
          3469:"3e707439e96e6019d168c4d74ee4e395",
          3529:"a244a6d54fa7a32b206d76303acdc2c1",
          3612:"0cd0dfd351a405ef622bcc3a5bab6fa7",
          3746:"e5444e05c465cb055ce6c0b6208adef2",
          3793:"86a1989adf96e35debf4e46660cab1cf",
          3819:"497f447f2e1220eceaa7b306e2eedb04",
          3888:"3b15e0b517840af9ec41b765273e9656",
          4070:"1c61c9cca6fa93c5905c98b19b5a0e71",
          4696:"39a62de49ef1e50acb03ad3b731cd0a0",
          4921:"1e16210a3bb9ec66bb1129364c2fec90",
          5051:"8b6ba866ca2cb41fe5b7b653517a985e",
          5480:"2dc4b14cff0ffc8543720d0f242a575f",
          5485:"6535ed2cdf86d72c02a9a1e8e52241bf",
          5500:"5febf2c94b7fab8f90ccc4ca75c8e1e4",
          5676:"460ff8799048e7d12d04cb39340719ed",
          6147:"0bf848117d21e64af3ab73a776e2454f",
          6564:"2832765a15a43d242db7f9d7377f6fd5",
          6866:"6103b01193895b25d1d1efc8585d52f5",
          7158:"05b255d0ce89b734ad37f1de2601676c",
          7350:"d1de2d8acc97399faa1ebb2d8b786eab",
          7553:"cafd2f732cb8c5bdecb4e4e1220edb5e",
          7974:"61bad3825c17e3b830559f3d9219eaf5",
          8528:"222ee1a46e268280f20a3a33aac1024c",
          8574:"471e909db780ec78376aa872b06c5417",
          8671:"8c783b9e7b413aa63489cddd02dddcff",
          8894:"3279caa282a109c98ddfb6e5dbc0e98f",
          8899:"4d2022943c2baf5b1a8d5878bee262af",
          9090:"592dc0478dcd2cecfe2578b42f91c8b8",
          9136:"f1b9daeafd7b295f2401432c13434a61",
          9190:"818aef31561e4b7a303448f8f574ebe5",
          9317:"f42b8ee91e15d979b8c8e4e2e824872d",
          9830:"9225181b024bc0bcb5dc9c3b83d321ec",
          9848:"34ce5a174aab129c9c97dde82250c871"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          755:"dc23f357b4a61dda244da06a6166ee64",
          6866:"ed3cf0ed48fa45045415f729d775edca"
        }[e]+".css",
        a.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        a.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/modules-gtao-license-plate:";
          a.l=(r,
          n,
          o,
          c)=>{
            if(e[r])return void e[r].push(n);
            let d,
            f;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const a=e[s];
                if(a.getAttribute("src")==r||a.getAttribute("data-webpack")==t+o){
                  d=a;
                  break
                }
              }
            }d||(f=!0,
            d=document.createElement("script"),
            d.charset="utf-8",
            a.nc&&d.setAttribute("nonce",
            a.nc),
            d.setAttribute("data-webpack",
            t+o),
            d.src=r),
            e[r]=[n];
            const l=(t,
            a)=>{
              d.onerror=d.onload=null,
              clearTimeout(i);
              const n=e[r];
              if(delete e[r],
              d.parentNode?.removeChild(d),
              n?.forEach(e=>e(a)),
              t)return t(a)
            },
            i=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:d
            }),
            12e4);
            d.onerror=l.bind(null,
            d.onerror),
            d.onload=l.bind(null,
            d.onload),
            f&&document.head.appendChild(d)
          }
        })(),
        a.r=e=>{
          Object.defineProperty(e,
          Symbol.toStringTag,
          {
            value:"Module"
          }),
          Object.defineProperty(e,
          "__esModule",
          {
            value:!0
          })
        },
        a.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          a.S={
          };
          const e={
          },
          t={
          };
          a.I=(r,
          n)=>{
            n||(n=[]);
            let o=t[r];
            if(o||(o=t[r]={
            }),
            n.indexOf(o)>=0)return;
            if(n.push(o),
            e[r])return e[r];
            a.o(a.S,
            r)||(a.S[r]={
            });
            const c=a.S[r],
            d="@rockstargames/modules-gtao-license-plate",
            f=(e,
            t,
            r,
            a)=>{
              const n=c[e]=c[e]||{
              },
              o=n[t];
              (!o||!o.loaded&&(!a!=!o.eager?a:d>o.from))&&(n[t]={
                get:r,
                from:d,
                eager:!!a
              })
            },
            s=[];
            return"default"===r&&(f("@foundry/react",
            "7.6.4",
            ()=>Promise.all([a.e(2873),
            a.e(8894),
            a.e(755),
            a.e(5748),
            a.e(7281),
            a.e(5501),
            a.e(1518),
            a.e(6748),
            a.e(4921)]).then(()=>()=>a(755))),
            f("@gsap/react",
            "2.1.2",
            ()=>Promise.all([a.e(5748),
            a.e(5501),
            a.e(3099)]).then(()=>()=>a(3099))),
            f("@react-spring/web",
            "10.1.2",
            ()=>Promise.all([a.e(3244),
            a.e(5748),
            a.e(7281)]).then(()=>()=>a(3244))),
            f("@react-three/drei",
            "10.7.9",
            ()=>Promise.all([a.e(7553),
            a.e(5748),
            a.e(1551),
            a.e(7281),
            a.e(1518),
            a.e(4923),
            a.e(9970)]).then(()=>()=>a(7553))),
            f("@react-three/fiber",
            "9.8.1",
            ()=>Promise.all([a.e(1913),
            a.e(5748),
            a.e(1551)]).then(()=>()=>a(4294))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(2873),
            a.e(5748),
            a.e(5472),
            a.e(6147)]).then(()=>()=>a(6147))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([a.e(8894),
            a.e(2497),
            a.e(5748),
            a.e(5472),
            a.e(3612),
            a.e(3746)]).then(()=>()=>a(3746))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(8894),
            a.e(2497),
            a.e(6564),
            a.e(5748),
            a.e(5472),
            a.e(3612),
            a.e(9090)]).then(()=>()=>a(9090))),
            f("@use-gesture/react",
            "10.3.1",
            ()=>Promise.all([a.e(9136),
            a.e(5748)]).then(()=>()=>a(9136))),
            f("gsap",
            "3.12.5",
            ()=>a.e(3529).then(()=>()=>a(3529))),
            f("jotai",
            "2.20.3",
            ()=>Promise.all([a.e(5500),
            a.e(5748)]).then(()=>()=>a(5500))),
            f("lodash-es",
            "4.18.1",
            ()=>a.e(2042).then(()=>()=>a(2042))),
            f("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(5748),
            a.e(9848)]).then(()=>()=>a(9848))),
            f("react-router",
            "7.18.4",
            ()=>Promise.all([a.e(8574),
            a.e(5748)]).then(()=>()=>a(8574))),
            f("react",
            "19.2.8",
            ()=>a.e(3888).then(()=>()=>a(3888))),
            f("stackblur-canvas",
            "2.7.0",
            ()=>a.e(9830).then(()=>()=>a(9830))),
            f("three-stdlib",
            "2.36.1",
            ()=>Promise.all([a.e(9190),
            a.e(1551)]).then(()=>()=>a(6809))),
            f("three",
            "0.182.0",
            ()=>a.e(3793).then(()=>()=>a(3793)))),
            e[r]=s.length?Promise.all(s).then(()=>e[r]=1):1
          }
        })(),
        (()=>{
          let e;
          a.g.importScripts&&(e=a.g.location+"");
          const t=a.g.document;
          if(!e&&t&&("SCRIPT"===t.currentScript?.tagName.toUpperCase()&&(e=t.currentScript.src),
          !e)){
            const r=t.getElementsByTagName("script");
            if(r.length){
              let t=r.length-1;
              for(;
              t>-1&&(!e||!/^https?:/.test(e));
              )e=r[t--].src
            }
          }if(!e)throw new Error("Automatic publicPath is not supported in this browser");
          e=e.replace(/^blob:|[?#].*$/g,
          "").replace(/\/[^/]+$/,
          "/"),
          a.p=e
        })(),
        (()=>{
          var e=e=>{
            var t=e=>e.split(".").map(e=>+e==e?+e:e),
            r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a=r[1]?t(r[1]):[];
            return r[2]&&(a.length++,
            a.push.apply(a,
            t(r[2]))),
            r[3]&&(a.push([]),
            a.push.apply(a,
            t(r[3]))),
            a
          },
          t=e=>{
            var r=e[0],
            a="";
            if(1===e.length)return"*";
            if(r+.5){
              a+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";
              for(var n=1,
              o=1;
              o<e.length;
              o++)n--,
              a+="u"==(typeof(d=e[o]))[0]?"-":(n>0?".":"")+(n=2,
              d);
              return a
            }var c=[];
            for(o=1;
            o<e.length;
            o++){
              var d=e[o];
              c.push(0===d?"not("+f()+")":1===d?"("+f()+" || "+f()+")":2===d?c.pop()+" "+c.pop():t(d))
            }return f();
            function f(){
              return c.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          r=(t,
          a)=>{
            if(0 in t){
              a=e(a);
              var n=t[0],
              o=n<0;
              o&&(n=-n-1);
              for(var c=0,
              d=1,
              f=!0;
              ;
              d++,
              c++){
                var s,
                l,
                i=d<t.length?(typeof t[d])[0]:"";
                if(c>=a.length||"o"==(l=(typeof(s=a[c]))[0]))return!f||("u"==i?d>n&&!o:""==i!=o);
                if("u"==l){
                  if(!f||"u"!=i)return!1
                }else if(f)if(i==l)if(d<=n){
                  if(s!=t[d])return!1
                }else{
                  if(o?s>t[d]:s<t[d])return!1;
                  s!=t[d]&&(f=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||d<=n)return!1;
                  f=!1,
                  d--
                }else{
                  if(d<=n||l<i!=o)return!1;
                  f=!1
                }else"s"!=i&&"n"!=i&&(f=!1,
                d--)
              }
            }var u=[],
            b=u.pop.bind(u);
            for(c=1;
            c<t.length;
            c++){
              var h=t[c];
              u.push(1==h?b()|b():2==h?b()&b():h?r(h,
              a):!b())
            }return!!b()
          };
          const n=(e,
          t)=>e&&a.o(e,
          t),
          o=e=>(e.loaded=1,
          e.get()),
          c=(t,
          r,
          a)=>{
            const n=a?(e=>Object.keys(e).reduce((t,
            r)=>(e[r].eager&&(t[r]=e[r]),
            t),
            {
            }))(t[r]):t[r];
            return Object.keys(n).reduce((t,
            r)=>!t||!n[t].loaded&&((t,
            r)=>{
              t=e(t),
              r=e(r);
              for(var a=0;
              ;
              ){
                if(a>=t.length)return a<r.length&&"u"!=(typeof r[a])[0];
                var n=t[a],
                o=(typeof n)[0];
                if(a>=r.length)return"u"==o;
                var c=r[a],
                d=(typeof c)[0];
                if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;
                if("o"!=o&&"u"!=o&&n!=c)return n<c;
                a++
              }
            })(t,
            r)?r:t,
            0)
          },
          d=e=>function(t,
          r,
          n,
          o,
          c){
            const d=a.I(t);
            return d?.then&&!n?d.then(e.bind(e,
            t,
            a.S[t],
            r,
            !1,
            o,
            c)):e(t,
            a.S[t],
            r,
            n,
            o,
            c)
          },
          f=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=d((e,
          t,
          r,
          a,
          d)=>{
            if(!n(t,
            r))return f(e,
            r,
            d);
            const s=c(t,
            r,
            a);
            return o(t[r][s])
          }),
          l=d((e,
          a,
          d,
          s,
          l,
          i)=>{
            if(!n(a,
            d))return f(e,
            d,
            i);
            const u=c(a,
            d,
            s);
            return r(l,
            u)||(b=((e,
            r,
            a,
            n)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(n)+")")(a,
            d,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(a[d][u]);
            var b
          }),
          i={
          },
          u={
            5748:()=>s("default",
            "react",
            !1,
            ()=>a.e(3888).then(()=>()=>a(3888))),
            1551:()=>s("default",
            "three",
            !1,
            ()=>a.e(3793).then(()=>()=>a(3793))),
            7281:()=>s("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(9848))),
            5472:()=>s("default",
            "lodash-es",
            !1,
            ()=>a.e(2042).then(()=>()=>a(2042))),
            3234:()=>s("default",
            "react-router",
            !1,
            ()=>a.e(8574).then(()=>()=>a(8574))),
            3788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(6564),
            a.e(9090)]).then(()=>()=>a(9090))),
            4564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(8528)]).then(()=>()=>a(6147))),
            5501:()=>s("default",
            "gsap",
            !1,
            ()=>a.e(3529).then(()=>()=>a(3529))),
            1518:()=>l("default",
            "@use-gesture/react",
            !1,
            [1,
            10,
            3,
            1],
            ()=>a.e(9136).then(()=>()=>a(9136))),
            3705:()=>s("default",
            "@gsap/react",
            !1,
            ()=>a.e(5480).then(()=>()=>a(3099))),
            5460:()=>s("default",
            "@react-spring/web",
            !1,
            ()=>a.e(3244).then(()=>()=>a(3244))),
            9970:()=>s("default",
            "@react-three/fiber",
            !1,
            ()=>a.e(1913).then(()=>()=>a(4294))),
            936:()=>l("default",
            "@react-three/drei",
            !1,
            [1,
            10,
            7,
            8],
            ()=>Promise.all([a.e(7553),
            a.e(4923)]).then(()=>()=>a(7553))),
            3392:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(755)]).then(()=>()=>a(755))),
            5115:()=>s("default",
            "jotai",
            !1,
            ()=>a.e(5500).then(()=>()=>a(5500))),
            7411:()=>l("default",
            "stackblur-canvas",
            !1,
            [1,
            2,
            7,
            0],
            ()=>a.e(9830).then(()=>()=>a(9830))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>a.e(3746).then(()=>()=>a(3746))),
            4923:()=>l("default",
            "three-stdlib",
            !1,
            [1,
            2,
            36,
            1],
            ()=>a.e(9190).then(()=>()=>a(6809)))
          },
          b={
            1518:[1518],
            1551:[1551],
            3612:[3234,
            3788,
            4564],
            4923:[4923],
            5472:[5472],
            5501:[5501],
            5748:[5748],
            6748:[3705,
            5460],
            6866:[936,
            3392,
            5115,
            7411,
            8130],
            7281:[7281],
            9970:[9970]
          },
          h={
          };
          a.f.consumes=(e,
          t)=>{
            a.o(b,
            e)&&b[e].forEach(e=>{
              if(a.o(i,
              e))return t.push(i[e]);
              if(!h[e]){
                const r=t=>{
                  i[e]=0,
                  a.m[e]=r=>{
                    delete a.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const n=t=>{
                  delete i[e],
                  a.m[e]=r=>{
                    throw delete a.c[e],
                    t
                  }
                };
                try{
                  const a=u[e]();
                  a.then?t.push(i[e]=a.then(r).catch(n)):r(a)
                }catch(e){
                  n(e)
                }
              }
            })
          }
        })(),
        (()=>{
          if("undefined"!=typeof document){
            var e={
              6502:0
            };
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                755:1,
                6866:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var n=a.miniCssF(e),
                o=a.p+n;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  a=0;
                  a<r.length;
                  a++){
                    var n=(c=r[a]).getAttribute("data-href")||c.getAttribute("href");
                    if("stylesheet"===c.rel&&(n===e||n===t))return c
                  }var o=document.getElementsByTagName("style");
                  for(a=0;
                  a<o.length;
                  a++){
                    var c;
                    if((n=(c=o[a]).getAttribute("data-href"))===e||n===t)return c
                  }
                })(n,
                o))return t();
                ((e,
                t,
                r,
                n,
                o)=>{
                  var c=document.createElement("link");
                  c.rel="stylesheet",
                  c.type="text/css",
                  a.nc&&(c.nonce=a.nc),
                  c.onerror=c.onload=r=>{
                    if(c.onerror=c.onload=null,
                    "load"===r.type)n();
                    else{
                      var a=r&&r.type,
                      d=r&&r.target&&r.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+d+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=a,
                      f.request=d,
                      c.parentNode&&c.parentNode.removeChild(c),
                      o(f)
                    }
                  },
                  c.href=t,
                  document.head.appendChild(c)
                })(e,
                o,
                0,
                t,
                r)
              }))(t).then(()=>{
                e[t]=0
              },
              r=>{
                throw delete e[t],
                r
              }))
            }
          }
        })(),
        (()=>{
          const e={
            6502:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(15(18|51)|5(472|501|748)|4923|6748|7281|9970)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              a)=>n=e[t]=[r,
              a]);
              r.push(n[2]=o);
              const c=new Error,
              d=r=>{
                if(a.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  a=r&&r.target&&r.target.src;
                  c.message="Loading chunk "+t+" failed.\n("+e+": "+a+")",
                  c.name="ChunkLoadError",
                  c.type=e,
                  c.request=a,
                  c.event=r,
                  n[1](c)
                }
              };
              a.l(a.p+a.u(t),
              d,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[n,
            o,
            c]=r;
            var d,
            f,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(d in o)a.o(o,
              d)&&(a.m[d]=o[d]);
              c&&c(a)
            }for(t&&t(r);
            s<n.length;
            s++)f=n[s],
            a.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          r=self.webpackChunk_rockstargames_modules_gtao_license_plate=self.webpackChunk_rockstargames_modules_gtao_license_plate||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(3069),
        a(5819)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map