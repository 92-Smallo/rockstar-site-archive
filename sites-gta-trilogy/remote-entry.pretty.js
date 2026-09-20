try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="2dd66347-e2cc-4de3-a933-be3f95508d20",
  e._sentryDebugIdIdentifier="sentry-dbid-2dd66347-e2cc-4de3-a933-be3f95508d20")
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
    release:"f464875c71ff6a2f67967810cb89cde22d852a2d",
    packageName:"@rockstargames/sites-gta-trilogy",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"f464875c71ff6a2f67967810cb89cde22d852a2d"
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
          5946(e,
          t,
          r){
            (0,
            r(9e3).w)(1)
          },
          9e3(e,
          t,
          r){
            const n=r(1364).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
              e)
            }
          },
          4769(e,
          t,
          r){
            r(5946)
          },
          1364(e,
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
              r.e(281),
              r.e(682),
              r.e(748),
              r.e(272),
              r.e(604)]).then(()=>()=>r(604))
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
        (()=>{
          const e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;
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
            a=t[r++];
            o.o(e,
            n)?0===a&&r++:0===a?Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              value:t[r++]
            }):Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              get:a
            })
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
          145:"97b7e70bfd9e46b7155b2bbd7362d37b",
          272:"e307ab11fe6f93625febcc7b453b5254",
          281:"2603410a2fe23ee3dee9ec407f2ae401",
          292:"ef2cc775eb71ea07de22af364d8630b7",
          341:"d93346ca67f211179919b87f63a1dcfc",
          361:"75b7ee30fc7a772cb1c5ec4481ff1e44",
          534:"b6239de39fc116770b8e42d95b8c0ff0",
          604:"180b8421bc9a039314d9a56eb445b313",
          615:"cbfb5cd40e1989dee20718f0e248ef19",
          682:"4d1dedf6ee89227a0be2e11b9a972eae",
          775:"727820c7080f27feab25e0851d96e890",
          808:"ce0ac8df3476d8c38ed0032b1a0f5b90",
          888:"8acbb7b395017a1b8466d3cb3f8188d1",
          921:"c8218aabf310c5d1c63ef3833812a35b",
          948:"6ad06a366d707ebc3bde2a0f2c1585f8",
          959:"ab5314dddf9c28dda0a5fa149a726779",
          996:"ec58130d3478d9ad64d7970a5d0ce1ba"
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
          Symbol.toStringTag&&Object.defineProperty(e,
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
            604:[1879]
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
            o.e(775),
            o.e(748),
            o.e(996)]).then(()=>()=>o(5996))),
            c("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([o.e(145),
            o.e(534),
            o.e(341),
            o.e(281),
            o.e(748),
            o.e(948),
            o.e(272)]).then(()=>()=>o(6948))),
            c("clsx",
            "2.1.1",
            ()=>o.e(921).then(()=>()=>o(4921))),
            c("framer-motion",
            "12.43.0",
            ()=>Promise.all([o.e(808),
            o.e(748),
            o.e(292)]).then(()=>()=>o(5808))),
            c("react-router",
            "7.18.2",
            ()=>Promise.all([o.e(361),
            o.e(748)]).then(()=>()=>o(9361))),
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
        o.cjs=e=>{
          const t={
            exports:{
            }
          };
          return e.call(t.exports,
          t,
          t.exports),
          t.exports
        },
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
              t>-1&&(!e||!/^http(s?):/.test(e));
              )e=r[t--].src
            }
          }if(!e)throw new Error("Automatic publicPath is not supported in this browser");
          e=e.replace(/^blob:/,
          "").replace(/#.*$/,
          "").replace(/\?.*$/,
          "").replace(/\/[^\/]+$/,
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
            4564:()=>f("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([o.e(145),
            o.e(775),
            o.e(615)]).then(()=>()=>o(5996))),
            4612:()=>f("default",
            "react-router",
            !1,
            ()=>o.e(361).then(()=>()=>o(9361))),
            1270:()=>l("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>o.e(921).then(()=>()=>o(4921))),
            3788:()=>f("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([o.e(145),
            o.e(341),
            o.e(948)]).then(()=>()=>o(6948))),
            4267:()=>f("default",
            "framer-motion",
            !1,
            ()=>o.e(808).then(()=>()=>o(5808))),
            8586:()=>f("default",
            "usehooks-ts",
            !1,
            ()=>o.e(959).then(()=>()=>o(5959)))
          },
          p={
            272:[4564,
            4612],
            604:[1270,
            3788,
            4267,
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
                604:1
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
              const s=o.p+o.u(t),
              i=new Error,
              c=r=>{
                if(o.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  o=r&&r.target&&r.target.src;
                  i.message="Loading chunk "+t+" failed.\n("+e+": "+o+")",
                  i.name="ChunkLoadError",
                  i.type=e,
                  i.request=o,
                  i.event=r,
                  n[1](i)
                }
              };
              o.l(s,
              c,
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
        o(4769),
        o(5819)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map