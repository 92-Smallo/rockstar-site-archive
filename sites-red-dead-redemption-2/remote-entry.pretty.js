try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="76ea55f4-0f96-4b1f-b581-873c78c6cb14",
  e._sentryDebugIdIdentifier="sentry-dbid-76ea55f4-0f96-4b1f-b581-873c78c6cb14")
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
    release:"d4d43fe80ffcd8fa95a2a7051a584fbc28982d71",
    packageName:"@rockstargames/sites-red-dead-redemption-2",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"d4d43fe80ffcd8fa95a2a7051a584fbc28982d71"
},
System.register(["@rockstargames/modules-core-videoplayer"],
function(e,
t){
  var r={
  };
  return Object.defineProperty(r,
  "__esModule",
  {
    value:!0
  }),
  {
    setters:[function(e){
      r.default=e.default||e,
      Object.keys(e).forEach(function(t){
        r[t]=e[t]
      })
    }],
    execute:function(){
      e((()=>{
        var e={
          47294(e,
          t,
          r){
            (0,
            r(75316).w)(1)
          },
          75316(e,
          t,
          r){
            const n=r(32232).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
              e)
            }
          },
          23069(e,
          t,
          r){
            r(47294)
          },
          32232(e,
          t,
          r){
            t.y=function(e,
            t){
              var r=document.createElement("a");
              r.href=e;
              for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,
              a=0,
              o=n.length;
              a!==t&&o>=0;
              )"/"===n[--o]&&a++;
              if(a!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+a+") in the URL path "+e);
              var d=n.slice(0,
              o+1);
              return r.protocol+"//"+r.host+d
            };
            Number.isInteger
          },
          85819(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(901),
              r.e(277),
              r.e(497),
              r.e(248),
              r.e(748),
              r.e(894),
              r.e(472),
              r.e(612),
              r.e(828),
              r.e(284)]).then(()=>()=>r(38284))
            },
            a=(e,
            t)=>(r.R=t,
            t=r.o(n,
            e)?n[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            r.R=void 0,
            t),
            o=(e,
            t)=>{
              if(!r.S)return;
              const n="default",
              a=r.S[n];
              if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return r.S[n]=e,
              r.I(n,
              t)
            };
            r.d(t,
            {
              get:()=>a,
              init:()=>o
            })
          },
          25136(e){
            "use strict";
            e.exports=r
          }
        };
        const n={
        };
        function a(t){
          const r=n[t];
          if(void 0!==r)return r.exports;
          const o=n[t]={
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
        a.c=n,
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
            const d={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var f=2&n&&r;
            ("object"==typeof f||"function"==typeof f)&&!~t.indexOf(f);
            f=e(f))Object.getOwnPropertyNames(f).forEach(e=>d[e]=()=>r[e]);
            return d.default=()=>r,
            a.d(o,
            d),
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
            d=0===o?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:o
            };
            a.o(e,
            n)||Object.defineProperty(e,
            n,
            d)
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
          41:"79094636672492794b10d2a19f431ffe",
          42:"d3d5e49f2827966a92520a1d7f943b0c",
          73:"c6cec851c212005dabce09ca553261f1",
          90:"0d11df5c82e4cf9306459bce1f33581a",
          123:"a9e63b962ac29c9a19653d09f2be2098",
          147:"d33eb791a92192a984a207de20db12c0",
          210:"8814b59e2d8a410422dcb89d25b38f83",
          248:"cf084c128ba0b2fd5d3563605f947b4b",
          277:"70f85b491ba4258ff773fdcc00bcccf8",
          284:"bc899a767d097237e754ef8c398d1418",
          292:"65c45a1bd692d52ecbb5153467200e40",
          360:"d77892c885fe8ca3771c56367cd5f0a1",
          384:"d8aec64399fbbc930cf1a18633e26c69",
          399:"09615babe9874a579543f7309e5f7878",
          438:"d2315b9fb0f04995c58e4f887ccf9c8b",
          497:"ef7598dc84cde1d68a805793aa8ce6f9",
          503:"71137bc9094f82be70af127bc093cded",
          528:"f9942095f036f26c4f16060596a337b4",
          539:"8992e8bf96d301ab53f6a066da8e2465",
          556:"6942f47a5fac3e231e07b4c39beeeb18",
          564:"ae17f68475068c59773fe6e1a1740771",
          574:"41556506f7ebe35b4f43742332cf6db7",
          584:"eb1424420741bedecbadc778ff109f06",
          589:"eb2cb282016ba8f631210a646c16efa8",
          612:"f54a09a34fe500d5037772a515280d95",
          658:"ebb6f5934240d57ce81574803364c8cc",
          794:"78b5ee56b78e259ef77ed6ce867cb0ef",
          811:"44e560f6dc90204ad5c1af06334d30ab",
          819:"567f36236aec03990eceb0c3b26c701f",
          828:"d3e7859208d6e4be3d67f7bab5989ac4",
          838:"807fed19ca4b7ab9865d2704bf1aca75",
          848:"2f04093d69fba84ca638f586684cf9d5",
          873:"5532d603aaf1478d4dc872445b424c6d",
          888:"4be6fea6fd22900272bc9a3c9f64f054",
          901:"88917244cd3fefeae278538d8b77d25a",
          921:"80b39923c797bc72faca01e03a2d1497",
          940:"9598d791ede43a0dfb246ab893535002"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          39:"a34c184998ec0dc1ad19bc2501004b98",
          284:"0b33ea3e4e0a3a7345b178239235e2f1",
          420:"a34c184998ec0dc1ad19bc2501004b98",
          503:"ac28150199d971d0f4522ad1d4d6d5b5",
          539:"7c575cc0a210038808b12a81bf37629b",
          957:"7c575cc0a210038808b12a81bf37629b"
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
          t="@rockstargames/sites-red-dead-redemption-2:";
          a.l=(r,
          n,
          o,
          d)=>{
            if(e[r])return void e[r].push(n);
            let f,
            c;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const n=e[s];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+o){
                  f=n;
                  break
                }
              }
            }f||(c=!0,
            f=document.createElement("script"),
            f.charset="utf-8",
            a.nc&&f.setAttribute("nonce",
            a.nc),
            f.setAttribute("data-webpack",
            t+o),
            f.src=r),
            e[r]=[n];
            const i=(t,
            n)=>{
              f.onerror=f.onload=null,
              clearTimeout(l);
              const a=e[r];
              if(delete e[r],
              f.parentNode?.removeChild(f),
              a?.forEach(e=>e(n)),
              t)return t(n)
            },
            l=setTimeout(i.bind(null,
            void 0,
            {
              type:"timeout",
              target:f
            }),
            12e4);
            f.onerror=i.bind(null,
            f.onerror),
            f.onload=i.bind(null,
            f.onload),
            c&&document.head.appendChild(f)
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
          const e={
            284:[31879]
          },
          t={
            31879:["default",
            "./index",
            25136]
          };
          a.f.remotes=(r,
          n)=>{
            a.o(e,
            r)&&e[r].forEach(e=>{
              let r=a.R;
              r||(r=[]);
              const o=t[e];
              if(r.indexOf(o)>=0)return;
              if(r.push(o),
              o.p)return n.push(o.p);
              const d=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+o[1]+'" from '+o[2]),
                a.m[e]=()=>{
                  throw t
                },
                o.p=0
              },
              f=(e,
              t,
              r,
              a,
              f,
              c)=>{
                try{
                  const s=e(t,
                  r);
                  if(!s?.then)return f(s,
                  a,
                  c);
                  {
                    const e=s.then(e=>f(e,
                    a),
                    d);
                    if(!c)return e;
                    n.push(o.p=e)
                  }
                }catch(e){
                  d(e)
                }
              },
              c=(e,
              t,
              n)=>f(t.get,
              o[1],
              r,
              0,
              s,
              n),
              s=t=>{
                o.p=1,
                a.m[e]=e=>{
                  e.exports=t()
                }
              };
              f(a,
              o[2],
              0,
              0,
              (e,
              t,
              r)=>e?f(a.I,
              o[0],
              0,
              e,
              c,
              r):d(),
              1)
            })
          }
        })(),
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
            const d=a.S[r],
            f="@rockstargames/sites-red-dead-redemption-2",
            c=(e,
            t,
            r,
            n)=>{
              const a=d[e]=d[e]||{
              },
              o=a[t];
              (!o||!o.loaded&&(!n!=!o.eager?n:f>o.from))&&(a[t]={
                get:r,
                from:f,
                eager:!!n
              })
            },
            s=[];
            return"default"===r&&(c("@foundry/icons",
            "7.5.1",
            ()=>Promise.all([a.e(901),
            a.e(940),
            a.e(748),
            a.e(894),
            a.e(539)]).then(()=>()=>a(32940))),
            c("@foundry/react",
            "7.5.1",
            ()=>Promise.all([a.e(901),
            a.e(873),
            a.e(277),
            a.e(248),
            a.e(503),
            a.e(748),
            a.e(894),
            a.e(785)]).then(()=>()=>a(6503))),
            c("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(873),
            a.e(748),
            a.e(472),
            a.e(147)]).then(()=>()=>a(6147))),
            c("@rsgweb/modules-core-agegate",
            "0.0.0",
            ()=>Promise.all([a.e(901),
            a.e(277),
            a.e(497),
            a.e(248),
            a.e(41),
            a.e(748),
            a.e(894),
            a.e(472),
            a.e(785),
            a.e(612),
            a.e(838),
            a.e(828),
            a.e(420)]).then(()=>()=>a(90838))),
            c("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(277),
            a.e(497),
            a.e(564),
            a.e(748),
            a.e(472),
            a.e(612),
            a.e(90),
            a.e(292)]).then(()=>()=>a(19090))),
            c("clsx",
            "2.1.1",
            ()=>a.e(921).then(()=>()=>a(4921))),
            c("lodash-es",
            "4.18.1",
            ()=>a.e(42).then(()=>()=>a(92042))),
            c("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(748),
            a.e(848)]).then(()=>()=>a(79848))),
            c("react-router",
            "7.18.4",
            ()=>Promise.all([a.e(574),
            a.e(748)]).then(()=>()=>a(68574))),
            c("react",
            "19.2.8",
            ()=>a.e(888).then(()=>()=>a(83888))),
            (e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const o=a(e);
                if(!o)return;
                const d=e=>e&&e.init&&e.init(a.S[r],
                n);
                if(o.then)return s.push(o.then(d,
                t));
                const f=d(o);
                if(f?.then)return s.push(f.catch(t))
              }catch(e){
                t(e)
              }
            })(25136)),
            s.length?e[r]=Promise.all(s).then(()=>e[r]=1):e[r]=1
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
            n=r[1]?t(r[1]):[];
            return r[2]&&(n.length++,
            n.push.apply(n,
            t(r[2]))),
            r[3]&&(n.push([]),
            n.push.apply(n,
            t(r[3]))),
            n
          },
          t=e=>{
            var r=e[0],
            n="";
            if(1===e.length)return"*";
            if(r+.5){
              n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";
              for(var a=1,
              o=1;
              o<e.length;
              o++)a--,
              n+="u"==(typeof(f=e[o]))[0]?"-":(a>0?".":"")+(a=2,
              f);
              return n
            }var d=[];
            for(o=1;
            o<e.length;
            o++){
              var f=e[o];
              d.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?d.pop()+" "+d.pop():t(f))
            }return c();
            function c(){
              return d.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          r=(t,
          n)=>{
            if(0 in t){
              n=e(n);
              var a=t[0],
              o=a<0;
              o&&(a=-a-1);
              for(var d=0,
              f=1,
              c=!0;
              ;
              f++,
              d++){
                var s,
                i,
                l=f<t.length?(typeof t[f])[0]:"";
                if(d>=n.length||"o"==(i=(typeof(s=n[d]))[0]))return!c||("u"==l?f>a&&!o:""==l!=o);
                if("u"==i){
                  if(!c||"u"!=l)return!1
                }else if(c)if(l==i)if(f<=a){
                  if(s!=t[f])return!1
                }else{
                  if(o?s>t[f]:s<t[f])return!1;
                  s!=t[f]&&(c=!1)
                }else if("s"!=l&&"n"!=l){
                  if(o||f<=a)return!1;
                  c=!1,
                  f--
                }else{
                  if(f<=a||i<l!=o)return!1;
                  c=!1
                }else"s"!=l&&"n"!=l&&(c=!1,
                f--)
              }
            }var u=[],
            b=u.pop.bind(u);
            for(d=1;
            d<t.length;
            d++){
              var h=t[d];
              u.push(1==h?b()|b():2==h?b()&b():h?r(h,
              n):!b())
            }return!!b()
          };
          const n=(e,
          t)=>e&&a.o(e,
          t),
          o=e=>(e.loaded=1,
          e.get()),
          d=(t,
          r,
          n)=>{
            const a=n?(e=>Object.keys(e).reduce((t,
            r)=>(e[r].eager&&(t[r]=e[r]),
            t),
            {
            }))(t[r]):t[r];
            return Object.keys(a).reduce((t,
            r)=>!t||!a[t].loaded&&((t,
            r)=>{
              t=e(t),
              r=e(r);
              for(var n=0;
              ;
              ){
                if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];
                var a=t[n],
                o=(typeof a)[0];
                if(n>=r.length)return"u"==o;
                var d=r[n],
                f=(typeof d)[0];
                if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;
                if("o"!=o&&"u"!=o&&a!=d)return a<d;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          f=e=>function(t,
          r,
          n,
          o,
          d){
            const f=a.I(t);
            return f?.then&&!n?f.then(e.bind(e,
            t,
            a.S[t],
            r,
            !1,
            o,
            d)):e(t,
            a.S[t],
            r,
            n,
            o,
            d)
          },
          c=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=f((e,
          t,
          r,
          a,
          f)=>{
            if(!n(t,
            r))return c(e,
            r,
            f);
            const s=d(t,
            r,
            a);
            return o(t[r][s])
          }),
          i=f((e,
          a,
          f,
          s,
          i,
          l)=>{
            if(!n(a,
            f))return c(e,
            f,
            l);
            const u=d(a,
            f,
            s);
            return r(i,
            u)||(b=((e,
            r,
            n,
            a)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(a)+")")(a,
            f,
            u,
            i),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(a[f][u]);
            var b
          }),
          l={
          },
          u={
            95748:()=>s("default",
            "react",
            !1,
            ()=>a.e(888).then(()=>()=>a(83888))),
            57281:()=>s("default",
            "react-dom",
            !1,
            ()=>a.e(819).then(()=>()=>a(79848))),
            81270:()=>i("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(921).then(()=>()=>a(4921))),
            75472:()=>s("default",
            "lodash-es",
            !1,
            ()=>a.e(42).then(()=>()=>a(92042))),
            14564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(873),
            a.e(528)]).then(()=>()=>a(6147))),
            43788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(564),
            a.e(90)]).then(()=>()=>a(19090))),
            93234:()=>s("default",
            "react-router",
            !1,
            ()=>a.e(574).then(()=>()=>a(68574))),
            59248:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(873),
            a.e(503),
            a.e(785)]).then(()=>()=>a(6503))),
            53424:()=>s("default",
            "@rsgweb/modules-core-agegate",
            !1,
            ()=>Promise.all([a.e(41),
            a.e(785),
            a.e(838),
            a.e(39)]).then(()=>()=>a(90838))),
            13785:()=>s("default",
            "@foundry/icons",
            !1,
            ()=>Promise.all([a.e(940),
            a.e(957)]).then(()=>()=>a(32940)))
          },
          b={
            284:[53424],
            472:[75472],
            612:[14564,
            43788,
            93234],
            748:[95748],
            785:[13785],
            828:[59248],
            894:[57281,
            81270]
          },
          h={
          };
          a.f.consumes=(e,
          t)=>{
            a.o(b,
            e)&&b[e].forEach(e=>{
              if(a.o(l,
              e))return t.push(l[e]);
              if(!h[e]){
                const r=t=>{
                  l[e]=0,
                  a.m[e]=r=>{
                    delete a.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const n=t=>{
                  delete l[e],
                  a.m[e]=r=>{
                    throw delete a.c[e],
                    t
                  }
                };
                try{
                  const a=u[e]();
                  a.then?t.push(l[e]=a.then(r).catch(n)):r(a)
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
              82:0
            };
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                39:1,
                284:1,
                420:1,
                503:1,
                539:1,
                957:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var n=a.miniCssF(e),
                o=a.p+n;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  n=0;
                  n<r.length;
                  n++){
                    var a=(d=r[n]).getAttribute("data-href")||d.getAttribute("href");
                    if("stylesheet"===d.rel&&(a===e||a===t))return d
                  }var o=document.getElementsByTagName("style");
                  for(n=0;
                  n<o.length;
                  n++){
                    var d;
                    if((a=(d=o[n]).getAttribute("data-href"))===e||a===t)return d
                  }
                })(n,
                o))return t();
                ((e,
                t,
                r,
                n,
                o)=>{
                  var d=document.createElement("link");
                  d.rel="stylesheet",
                  d.type="text/css",
                  a.nc&&(d.nonce=a.nc),
                  d.onerror=d.onload=r=>{
                    if(d.onerror=d.onload=null,
                    "load"===r.type)n();
                    else{
                      var a=r&&r.type,
                      f=r&&r.target&&r.target.href||t,
                      c=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+f+")");
                      c.name="ChunkLoadError",
                      c.code="CSS_CHUNK_LOAD_FAILED",
                      c.type=a,
                      c.request=f,
                      d.parentNode&&d.parentNode.removeChild(d),
                      o(c)
                    }
                  },
                  d.href=t,
                  document.head.appendChild(d)
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
            82:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(39|420|472|748|785|894|957)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              a)=>n=e[t]=[r,
              a]);
              r.push(n[2]=o);
              const d=new Error,
              f=r=>{
                if(a.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  a=r&&r.target&&r.target.src;
                  d.message="Loading chunk "+t+" failed.\n("+e+": "+a+")",
                  d.name="ChunkLoadError",
                  d.type=e,
                  d.request=a,
                  d.event=r,
                  n[1](d)
                }
              };
              a.l(a.p+a.u(t),
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[n,
            o,
            d]=r;
            var f,
            c,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(f in o)a.o(o,
              f)&&(a.m[f]=o[f]);
              d&&d(a)
            }for(t&&t(r);
            s<n.length;
            s++)c=n[s],
            a.o(e,
            c)&&e[c]&&e[c][0](),
            e[c]=0
          },
          r=self.webpackChunk_rockstargames_sites_red_dead_redemption_2=self.webpackChunk_rockstargames_sites_red_dead_redemption_2||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(23069),
        a(85819)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map