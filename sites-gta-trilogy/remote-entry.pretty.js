try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="24139fdd-8701-4ceb-811f-774479416829",
  e._sentryDebugIdIdentifier="sentry-dbid-24139fdd-8701-4ceb-811f-774479416829")
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
    release:"1c0cd640ea21e77096021a545b1d94f05dfbdd99",
    packageName:"@rockstargames/sites-gta-trilogy",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"1c0cd640ea21e77096021a545b1d94f05dfbdd99"
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
          7294(e,
          t,
          r){
            (0,
            r(5316).w)(1)
          },
          5316(e,
          t,
          r){
            const n=r(2232).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
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
              for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,
              o=0,
              a=n.length;
              o!==t&&a>=0;
              )"/"===n[--a]&&o++;
              if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);
              var s=n.slice(0,
              a+1);
              return r.protocol+"//"+r.host+s
            };
            Number.isInteger
          },
          5819(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(534),
              r.e(844),
              r.e(690),
              r.e(748),
              r.e(612),
              r.e(616)]).then(()=>()=>r(2745))
            },
            o=(e,
            t)=>(r.R=t,
            t=r.o(n,
            e)?n[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            r.R=void 0,
            t),
            a=(e,
            t)=>{
              if(!r.S)return;
              const n="default",
              o=r.S[n];
              if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return r.S[n]=e,
              r.I(n,
              t)
            };
            r.d(t,
            {
              get:()=>o,
              init:()=>a
            })
          },
          5136(e){
            "use strict";
            e.exports=r
          }
        };
        const n={
        };
        function o(t){
          const r=n[t];
          if(void 0!==r)return r.exports;
          const a=n[t]={
            exports:{
            }
          };
          return e[t].call(a.exports,
          a,
          a.exports,
          o),
          a.exports
        }return o.m=e,
        o.c=n,
        o.y=t,
        o.amdO={
        },
        o.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return o.d(t,
          {
            a:t
          }),
          t
        },
        o.cw=e=>{
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
          o.t=function(r,
          n){
            if(1&n&&(r=this(r)),
            8&n)return r;
            if("object"==typeof r&&r){
              if(4&n&&r.__esModule)return r;
              if(16&n&&"function"==typeof r.then)return r
            }const a=Object.create(null);
            o.r(a);
            const s={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var i=2&n&&r;
            ("object"==typeof i||"function"==typeof i)&&!~t.indexOf(i);
            i=e(i))Object.getOwnPropertyNames(i).forEach(e=>s[e]=()=>r[e]);
            return s.default=()=>r,
            o.d(a,
            s),
            a
          }
        })(),
        o.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var n=t[r++],
            a=t[r++],
            s=0===a?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:a
            };
            o.o(e,
            n)||Object.defineProperty(e,
            n,
            s)
          }else for(var n in t)o.o(t,
          n)&&!o.o(e,
          n)&&Object.defineProperty(e,
          n,
          {
            enumerable:!0,
            get:t[n]
          })
        },
        o.f={
        },
        o.e=e=>Promise.all(Object.keys(o.f).reduce((t,
        r)=>(o.f[r](e,
        t),
        t),
        [])),
        o.u=e=>"js/"+{
          145:"9faad81e9eb43d04b9907e4b1e2d036a",
          147:"79e21da83a987f00ef3b51c8b6da2a3b",
          292:"5607f1a904f07501ff37d8ae82365272",
          528:"030afb8c160f0e159122b6c3e497fc4e",
          534:"c4a53853ff92f1e09e29921940141f78",
          574:"e70e0c1b9286cd2f935f281f4e37aa57",
          612:"e2fafc39a12cfcfa89bdcd4b6aa004c9",
          616:"446a85f6967df35ca9c6b7451d28f99c",
          636:"c55a385b0c846d925ed17f53f696044b",
          657:"a88a905e024f6144448e450aa710c183",
          690:"35c48b737a1e8d71cf4329a7d406d72e",
          844:"b3e2b2ca2fd2f4fafcfbe4a12d51df91",
          873:"dcd82b34b759ad2ad756af854ef89028",
          888:"1536da86f6629ce14c8d506401980249",
          921:"8e541338062e1e2e8a1725b1c26fbf27",
          930:"69cb4af43d904328bf59e755228565ac",
          959:"b4e02e08f4c60a64933747f51748c8b5"
        }[e]+".js",
        o.miniCssF=e=>"css/b24568901513c1c6fdc77d81fda192e4.css",
        o.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        o.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/sites-gta-trilogy:";
          o.l=(r,
          n,
          a,
          s)=>{
            if(e[r])return void e[r].push(n);
            let i,
            c;
            if(void 0!==a){
              const e=document.getElementsByTagName("script");
              for(var f=0;
              f<e.length;
              f++){
                const n=e[f];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+a){
                  i=n;
                  break
                }
              }
            }i||(c=!0,
            i=document.createElement("script"),
            i.charset="utf-8",
            o.nc&&i.setAttribute("nonce",
            o.nc),
            i.setAttribute("data-webpack",
            t+a),
            i.src=r),
            e[r]=[n];
            const l=(t,
            n)=>{
              i.onerror=i.onload=null,
              clearTimeout(d);
              const o=e[r];
              if(delete e[r],
              i.parentNode?.removeChild(i),
              o?.forEach(e=>e(n)),
              t)return t(n)
            },
            d=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:i
            }),
            12e4);
            i.onerror=l.bind(null,
            i.onerror),
            i.onload=l.bind(null,
            i.onload),
            c&&document.head.appendChild(i)
          }
        })(),
        o.r=e=>{
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
        (()=>{
          const e={
            616:[1879]
          },
          t={
            1879:["default",
            "./index",
            5136]
          };
          o.f.remotes=(r,
          n)=>{
            o.o(e,
            r)&&e[r].forEach(e=>{
              let r=o.R;
              r||(r=[]);
              const a=t[e];
              if(r.indexOf(a)>=0)return;
              if(r.push(a),
              a.p)return n.push(a.p);
              const s=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+a[1]+'" from '+a[2]),
                o.m[e]=()=>{
                  throw t
                },
                a.p=0
              },
              i=(e,
              t,
              r,
              o,
              i,
              c)=>{
                try{
                  const f=e(t,
                  r);
                  if(!f?.then)return i(f,
                  o,
                  c);
                  {
                    const e=f.then(e=>i(e,
                    o),
                    s);
                    if(!c)return e;
                    n.push(a.p=e)
                  }
                }catch(e){
                  s(e)
                }
              },
              c=(e,
              t,
              n)=>i(t.get,
              a[1],
              r,
              0,
              f,
              n),
              f=t=>{
                a.p=1,
                o.m[e]=e=>{
                  e.exports=t()
                }
              };
              i(o,
              a[2],
              0,
              0,
              (e,
              t,
              r)=>e?i(o.I,
              a[0],
              0,
              e,
              c,
              r):s(),
              1)
            })
          }
        })(),
        (()=>{
          o.S={
          };
          const e={
          },
          t={
          };
          o.I=(r,
          n)=>{
            n||(n=[]);
            let a=t[r];
            if(a||(a=t[r]={
            }),
            n.indexOf(a)>=0)return;
            if(n.push(a),
            e[r])return e[r];
            o.o(o.S,
            r)||(o.S[r]={
            });
            const s=o.S[r],
            i="@rockstargames/sites-gta-trilogy",
            c=(e,
            t,
            r,
            n)=>{
              const o=s[e]=s[e]||{
              },
              a=o[t];
              (!a||!a.loaded&&(!n!=!a.eager?n:i>a.from))&&(o[t]={
                get:r,
                from:i,
                eager:!!n
              })
            },
            f=[];
            return"default"===r&&(c("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([o.e(145),
            o.e(534),
            o.e(873),
            o.e(748),
            o.e(147)]).then(()=>()=>o(6147))),
            c("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([o.e(145),
            o.e(534),
            o.e(930),
            o.e(844),
            o.e(748),
            o.e(636),
            o.e(612)]).then(()=>()=>o(1636))),
            c("clsx",
            "2.1.1",
            ()=>o.e(921).then(()=>()=>o(4921))),
            c("framer-motion",
            "13.5.1",
            ()=>Promise.all([o.e(657),
            o.e(748),
            o.e(292)]).then(()=>()=>o(5657))),
            c("react-router",
            "7.18.4",
            ()=>Promise.all([o.e(574),
            o.e(748)]).then(()=>()=>o(8574))),
            c("react",
            "19.2.8",
            ()=>o.e(888).then(()=>()=>o(3888))),
            c("usehooks-ts",
            "3.1.1",
            ()=>Promise.all([o.e(959),
            o.e(748)]).then(()=>()=>o(5959))),
            (e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const a=o(e);
                if(!a)return;
                const s=e=>e&&e.init&&e.init(o.S[r],
                n);
                if(a.then)return f.push(a.then(s,
                t));
                const i=s(a);
                if(i?.then)return f.push(i.catch(t))
              }catch(e){
                t(e)
              }
            })(5136)),
            f.length?e[r]=Promise.all(f).then(()=>e[r]=1):e[r]=1
          }
        })(),
        (()=>{
          let e;
          o.g.importScripts&&(e=o.g.location+"");
          const t=o.g.document;
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
          o.p=e
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
              for(var o=1,
              a=1;
              a<e.length;
              a++)o--,
              n+="u"==(typeof(i=e[a]))[0]?"-":(o>0?".":"")+(o=2,
              i);
              return n
            }var s=[];
            for(a=1;
            a<e.length;
            a++){
              var i=e[a];
              s.push(0===i?"not("+c()+")":1===i?"("+c()+" || "+c()+")":2===i?s.pop()+" "+s.pop():t(i))
            }return c();
            function c(){
              return s.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          r=(t,
          n)=>{
            if(0 in t){
              n=e(n);
              var o=t[0],
              a=o<0;
              a&&(o=-o-1);
              for(var s=0,
              i=1,
              c=!0;
              ;
              i++,
              s++){
                var f,
                l,
                d=i<t.length?(typeof t[i])[0]:"";
                if(s>=n.length||"o"==(l=(typeof(f=n[s]))[0]))return!c||("u"==d?i>o&&!a:""==d!=a);
                if("u"==l){
                  if(!c||"u"!=d)return!1
                }else if(c)if(d==l)if(i<=o){
                  if(f!=t[i])return!1
                }else{
                  if(a?f>t[i]:f<t[i])return!1;
                  f!=t[i]&&(c=!1)
                }else if("s"!=d&&"n"!=d){
                  if(a||i<=o)return!1;
                  c=!1,
                  i--
                }else{
                  if(i<=o||l<d!=a)return!1;
                  c=!1
                }else"s"!=d&&"n"!=d&&(c=!1,
                i--)
              }
            }var u=[],
            p=u.pop.bind(u);
            for(s=1;
            s<t.length;
            s++){
              var h=t[s];
              u.push(1==h?p()|p():2==h?p()&p():h?r(h,
              n):!p())
            }return!!p()
          };
          const n=(e,
          t)=>e&&o.o(e,
          t),
          a=e=>(e.loaded=1,
          e.get()),
          s=(t,
          r,
          n)=>{
            const o=n?(e=>Object.keys(e).reduce((t,
            r)=>(e[r].eager&&(t[r]=e[r]),
            t),
            {
            }))(t[r]):t[r];
            return Object.keys(o).reduce((t,
            r)=>!t||!o[t].loaded&&((t,
            r)=>{
              t=e(t),
              r=e(r);
              for(var n=0;
              ;
              ){
                if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];
                var o=t[n],
                a=(typeof o)[0];
                if(n>=r.length)return"u"==a;
                var s=r[n],
                i=(typeof s)[0];
                if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;
                if("o"!=a&&"u"!=a&&o!=s)return o<s;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          i=e=>function(t,
          r,
          n,
          a,
          s){
            const i=o.I(t);
            return i?.then&&!n?i.then(e.bind(e,
            t,
            o.S[t],
            r,
            !1,
            a,
            s)):e(t,
            o.S[t],
            r,
            n,
            a,
            s)
          },
          c=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          f=i((e,
          t,
          r,
          o,
          i)=>{
            if(!n(t,
            r))return c(e,
            r,
            i);
            const f=s(t,
            r,
            o);
            return a(t[r][f])
          }),
          l=i((e,
          o,
          i,
          f,
          l,
          d)=>{
            if(!n(o,
            i))return c(e,
            i,
            d);
            const u=s(o,
            i,
            f);
            return r(l,
            u)||(p=((e,
            r,
            n,
            o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(o,
            i,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(p)),
            a(o[i][u]);
            var p
          }),
          d={
          },
          u={
            5748:()=>f("default",
            "react",
            !1,
            ()=>o.e(888).then(()=>()=>o(3888))),
            3234:()=>f("default",
            "react-router",
            !1,
            ()=>o.e(574).then(()=>()=>o(8574))),
            3788:()=>f("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([o.e(145),
            o.e(930),
            o.e(636)]).then(()=>()=>o(1636))),
            4564:()=>f("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([o.e(145),
            o.e(873),
            o.e(528)]).then(()=>()=>o(6147))),
            1270:()=>l("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>o.e(921).then(()=>()=>o(4921))),
            2704:()=>f("default",
            "framer-motion",
            !1,
            ()=>o.e(657).then(()=>()=>o(5657))),
            8586:()=>f("default",
            "usehooks-ts",
            !1,
            ()=>o.e(959).then(()=>()=>o(5959)))
          },
          p={
            612:[3234,
            3788,
            4564],
            616:[1270,
            2704,
            8586],
            748:[5748]
          },
          h={
          };
          o.f.consumes=(e,
          t)=>{
            o.o(p,
            e)&&p[e].forEach(e=>{
              if(o.o(d,
              e))return t.push(d[e]);
              if(!h[e]){
                const r=t=>{
                  d[e]=0,
                  o.m[e]=r=>{
                    delete o.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const n=t=>{
                  delete d[e],
                  o.m[e]=r=>{
                    throw delete o.c[e],
                    t
                  }
                };
                try{
                  const o=u[e]();
                  o.then?t.push(d[e]=o.then(r).catch(n)):r(o)
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
              60:0
            };
            o.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                616:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var n=o.miniCssF(e),
                a=o.p+n;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  n=0;
                  n<r.length;
                  n++){
                    var o=(s=r[n]).getAttribute("data-href")||s.getAttribute("href");
                    if("stylesheet"===s.rel&&(o===e||o===t))return s
                  }var a=document.getElementsByTagName("style");
                  for(n=0;
                  n<a.length;
                  n++){
                    var s;
                    if((o=(s=a[n]).getAttribute("data-href"))===e||o===t)return s
                  }
                })(n,
                a))return t();
                ((e,
                t,
                r,
                n,
                a)=>{
                  var s=document.createElement("link");
                  s.rel="stylesheet",
                  s.type="text/css",
                  o.nc&&(s.nonce=o.nc),
                  s.onerror=s.onload=r=>{
                    if(s.onerror=s.onload=null,
                    "load"===r.type)n();
                    else{
                      var o=r&&r.type,
                      i=r&&r.target&&r.target.href||t,
                      c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+i+")");
                      c.name="ChunkLoadError",
                      c.code="CSS_CHUNK_LOAD_FAILED",
                      c.type=o,
                      c.request=i,
                      s.parentNode&&s.parentNode.removeChild(s),
                      a(c)
                    }
                  },
                  s.href=t,
                  document.head.appendChild(s)
                })(e,
                a,
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
            60:0
          };
          o.f.j=(t,
          r)=>{
            let n=o.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(748!=t){
              const a=new Promise((r,
              o)=>n=e[t]=[r,
              o]);
              r.push(n[2]=a);
              const s=new Error,
              i=r=>{
                if(o.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  o=r&&r.target&&r.target.src;
                  s.message="Loading chunk "+t+" failed.\n("+e+": "+o+")",
                  s.name="ChunkLoadError",
                  s.type=e,
                  s.request=o,
                  s.event=r,
                  n[1](s)
                }
              };
              o.l(o.p+o.u(t),
              i,
              "chunk-"+t,
              t)
            }else e[t]=0
          };
          const t=(t,
          r)=>{
            let[n,
            a,
            s]=r;
            var i,
            c,
            f=0;
            if(n.some(t=>0!==e[t])){
              for(i in a)o.o(a,
              i)&&(o.m[i]=a[i]);
              s&&s(o)
            }for(t&&t(r);
            f<n.length;
            f++)c=n[f],
            o.o(e,
            c)&&e[c]&&e[c][0](),
            e[c]=0
          },
          r=self.webpackChunk_rockstargames_sites_gta_trilogy=self.webpackChunk_rockstargames_sites_gta_trilogy||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        o(3069),
        o(5819)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map