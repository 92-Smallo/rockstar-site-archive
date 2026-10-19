try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="ccf09ab8-8926-4927-a7e1-7c4f66b39902",
  e._sentryDebugIdIdentifier="sentry-dbid-ccf09ab8-8926-4927-a7e1-7c4f66b39902")
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
    release:"fb5df338a3004acb163f8eeeb3b5c99e2ad2028a",
    packageName:"@rockstargames/sites-legacy",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"fb5df338a3004acb163f8eeeb3b5c99e2ad2028a"
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
            const a=r(32232).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=a(r.y.meta.url,
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
          54334(e,
          t,
          r){
            "use strict";
            const a={
              "./site-routes/Bully":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(2873),
              r.e(6339),
              r.e(9043),
              r.e(5748),
              r.e(3788),
              r.e(3234),
              r.e(4564),
              r.e(8130),
              r.e(8933),
              r.e(3337),
              r.e(7155),
              r.e(2284),
              r.e(3660),
              r.e(2848)]).then(()=>()=>r(2848)),
              "./site-routes/RedDeadRedemption":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(2873),
              r.e(6339),
              r.e(9043),
              r.e(5748),
              r.e(3788),
              r.e(3234),
              r.e(4564),
              r.e(8130),
              r.e(8933),
              r.e(3337),
              r.e(7155),
              r.e(2284),
              r.e(3660),
              r.e(2784)]).then(()=>()=>r(72784)),
              "./tina":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(2873),
              r.e(6339),
              r.e(9043),
              r.e(5748),
              r.e(3788),
              r.e(3234),
              r.e(4564),
              r.e(8130),
              r.e(8933),
              r.e(3337),
              r.e(7155),
              r.e(2284),
              r.e(3660)]).then(()=>()=>r(4753))
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
          },
          25136(e){
            "use strict";
            e.exports=r
          }
        };
        const a={
        };
        function n(t){
          const r=a[t];
          if(void 0!==r)return r.exports;
          const o=a[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(o.exports,
          o,
          o.exports,
          n),
          o.loaded=!0,
          o.exports
        }return n.m=e,
        n.c=a,
        n.y=t,
        n.amdO={
        },
        n.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return n.d(t,
          {
            a:t
          }),
          t
        },
        n.cw=e=>{
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
          n.t=function(r,
          a){
            if(1&a&&(r=this(r)),
            8&a)return r;
            if("object"==typeof r&&r){
              if(4&a&&r.__esModule)return r;
              if(16&a&&"function"==typeof r.then)return r
            }const o=Object.create(null);
            n.r(o);
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var f=2&a&&r;
            ("object"==typeof f||"function"==typeof f)&&!~t.indexOf(f);
            f=e(f))Object.getOwnPropertyNames(f).forEach(e=>c[e]=()=>r[e]);
            return c.default=()=>r,
            n.d(o,
            c),
            o
          }
        })(),
        n.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var a=t[r++],
            o=t[r++],
            c=0===o?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:o
            };
            n.o(e,
            a)||Object.defineProperty(e,
            a,
            c)
          }else for(var a in t)n.o(t,
          a)&&!n.o(e,
          a)&&Object.defineProperty(e,
          a,
          {
            enumerable:!0,
            get:t[a]
          })
        },
        n.f={
        },
        n.e=e=>Promise.all(Object.keys(n.f).reduce((t,
        r)=>(n.f[r](e,
        t),
        t),
        [])),
        n.u=e=>"js/"+{
          31:"5d5921a974408f0b6628206c1b13832f",
          178:"aa6d4fe396d85ec6fd6fe239c165945d",
          331:"16f8a628fd60caac5fc8b399981e5a2a",
          504:"39663bcacc65dfb909222a229d6726ec",
          998:"71063696561e3f5a5ba61878793ef35c",
          1519:"d85e2014447de9a82e61cf519c4b7afe",
          2194:"5033cbef3a1633b69f8b4b759577f765",
          2336:"fe27cea1b21e56bb551fe45c00b8d187",
          2360:"346f6346ae541db1970a0f42cd0be380",
          2438:"911cc067c4810e5fff90f739bf15aab3",
          2497:"cff33a40969fab57c645ba24f9fdc98c",
          2784:"e9af0cf2c8fcd17f1071c6194d38ecaa",
          2848:"171d682de694949459d680a037b81f03",
          2873:"29d166fb77d2feb81c093f268de2d32c",
          3575:"9c8458b18f0f5678204e5188b873ab5b",
          3612:"723e7a1b4754837a61c60ce7f79e100b",
          3660:"35649b8f363577f365ed2278f90359b7",
          3819:"d27fb67cf202937344cbb51ba076382b",
          3888:"e81ec87640b81f903fb1c930d4701808",
          4124:"e2b57ed158e79a192a94b7773d2fe741",
          4289:"e4e445117954374089d85b3f31acb9fc",
          4584:"ee732e108a6a39edda693852d521111e",
          4826:"0e1e84ad67e0f677f84d280f87aff2ba",
          4921:"897528cfa9329d9b43633d30caf43cba",
          4930:"41d36fc1866c2727d42c8e074605e241",
          5073:"43034c21dc88753a989d3110a9a24830",
          5657:"e25babb2f562f811579ca19125f12c92",
          5826:"ae1bc306f4163db7d7c251bab8b8b3d2",
          6123:"12d2708f202b05d3b8a1cc0f44f5113f",
          6147:"8782d32976286edfa7c57437f386fa1c",
          6281:"c736c56173736c2a6d5c443ad4831611",
          6339:"e4e8b8938435a66679da52503bc971c3",
          6589:"be8f18464f181c817221a444c6ab52e3",
          6945:"8b1ead61e60467e969b1fb2a9842de2e",
          7155:"59043b784fdc43750013a5a61eb3d5c5",
          7454:"d4f6f863f03fecae284053a1d9c5a72b",
          7490:"f33d7c4354b614033474a233ee72568d",
          7556:"564cd1d66aab1c309b1f80b36c747332",
          7794:"270a41852133c980da5b4d1c6adee23a",
          8123:"e89b2e4e78eeb3fa2a2f6fcb077c3a45",
          8277:"f2348b1a55d94bf3e1994c4b1b7a0912",
          8402:"c11ce7eabe8654f6ef95367ad0d52174",
          8507:"3cc3800d27d4636f2aafa281122f0717",
          8528:"4b4c3ed21658268dfe3e60adfb631ba5",
          8574:"50de27cf6523876fba597401e44b25cb",
          8617:"5d8b8372043199095966ed273201f684",
          9043:"208a8dce860405221347205395371014",
          9210:"8810e00b1db05a9057a6602480acdb52",
          9292:"e5e70489ce02de2a0a47e39b08150ffa",
          9384:"b15d073679299d6e73a4a521163ad05b",
          9399:"b3d14c3eee2263f777aaee588503f8d4",
          9747:"2ca2ecda8a00ae4e09a4ce01a0d82a70",
          9811:"623fb444668f9622e958c6d47af374a4",
          9848:"a964e2f91bfbce18530982ca6b7ef408",
          9955:"3b5012cb4ce11e30e259ea5f22ed106f"
        }[e]+".js",
        n.miniCssF=e=>"css/"+{
          2784:"52e55b769351b6e3f1602fe5d2baacd1",
          2848:"52e55b769351b6e3f1602fe5d2baacd1",
          3660:"4c03a6e79f4f52ab7f73d8250f5b68b3",
          4289:"0da34c51e2b4fd6c15dacfcb90c7d337",
          6945:"b3313fda99862d6d64bd2a829ae71ca3",
          7490:"82b8e41eb90eae7db3adfb9fff54d045",
          9043:"9e89df582555e00f256557bb58e4cc57",
          9551:"82b8e41eb90eae7db3adfb9fff54d045",
          9637:"78b6606872bed6edc647fde0a2991627"
        }[e]+".css",
        n.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        n.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/sites-legacy:";
          n.l=(r,
          a,
          o,
          c)=>{
            if(e[r])return void e[r].push(a);
            let f,
            s;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var d=0;
              d<e.length;
              d++){
                const a=e[d];
                if(a.getAttribute("src")==r||a.getAttribute("data-webpack")==t+o){
                  f=a;
                  break
                }
              }
            }f||(s=!0,
            f=document.createElement("script"),
            f.charset="utf-8",
            n.nc&&f.setAttribute("nonce",
            n.nc),
            f.setAttribute("data-webpack",
            t+o),
            f.src=r),
            e[r]=[a];
            const i=(t,
            a)=>{
              f.onerror=f.onload=null,
              clearTimeout(l);
              const n=e[r];
              if(delete e[r],
              f.parentNode?.removeChild(f),
              n?.forEach(e=>e(a)),
              t)return t(a)
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
            s&&document.head.appendChild(f)
          }
        })(),
        n.r=e=>{
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
        n.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          const e={
            3660:[31879]
          },
          t={
            31879:["default",
            "./index",
            25136]
          };
          n.f.remotes=(r,
          a)=>{
            n.o(e,
            r)&&e[r].forEach(e=>{
              let r=n.R;
              r||(r=[]);
              const o=t[e];
              if(r.indexOf(o)>=0)return;
              if(r.push(o),
              o.p)return a.push(o.p);
              const c=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+o[1]+'" from '+o[2]),
                n.m[e]=()=>{
                  throw t
                },
                o.p=0
              },
              f=(e,
              t,
              r,
              n,
              f,
              s)=>{
                try{
                  const d=e(t,
                  r);
                  if(!d?.then)return f(d,
                  n,
                  s);
                  {
                    const e=d.then(e=>f(e,
                    n),
                    c);
                    if(!s)return e;
                    a.push(o.p=e)
                  }
                }catch(e){
                  c(e)
                }
              },
              s=(e,
              t,
              a)=>f(t.get,
              o[1],
              r,
              0,
              d,
              a),
              d=t=>{
                o.p=1,
                n.m[e]=e=>{
                  e.exports=t()
                }
              };
              f(n,
              o[2],
              0,
              0,
              (e,
              t,
              r)=>e?f(n.I,
              o[0],
              0,
              e,
              s,
              r):c(),
              1)
            })
          }
        })(),
        (()=>{
          n.S={
          };
          const e={
          },
          t={
          };
          n.I=(r,
          a)=>{
            a||(a=[]);
            let o=t[r];
            if(o||(o=t[r]={
            }),
            a.indexOf(o)>=0)return;
            if(a.push(o),
            e[r])return e[r];
            n.o(n.S,
            r)||(n.S[r]={
            });
            const c=n.S[r],
            f="@rockstargames/sites-legacy",
            s=(e,
            t,
            r,
            a)=>{
              const n=c[e]=c[e]||{
              },
              o=n[t];
              (!o||!o.loaded&&(!a!=!o.eager?a:f>o.from))&&(n[t]={
                get:r,
                from:f,
                eager:!!a
              })
            },
            d=[];
            return"default"===r&&(s("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(2873),
            n.e(9747),
            n.e(5748),
            n.e(6147)]).then(()=>()=>n(6147))),
            s("@rsgweb/modules-core-hero",
            "0.0.0",
            ()=>Promise.all([n.e(5748),
            n.e(3788),
            n.e(3234),
            n.e(4564),
            n.e(8130),
            n.e(3337),
            n.e(7155),
            n.e(4289)]).then(()=>()=>n(96919))),
            s("@rsgweb/modules-core-highlights",
            "0.0.0",
            ()=>Promise.all([n.e(6339),
            n.e(5748),
            n.e(4564),
            n.e(8130),
            n.e(3337),
            n.e(2284),
            n.e(9637),
            n.e(2336)]).then(()=>()=>n(12336))),
            s("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([n.e(31),
            n.e(4826),
            n.e(2497),
            n.e(5748),
            n.e(3788),
            n.e(3234),
            n.e(4564),
            n.e(3612),
            n.e(8617)]).then(()=>()=>n(23746))),
            s("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(178),
            n.e(5073),
            n.e(3575),
            n.e(5748),
            n.e(3788),
            n.e(4564),
            n.e(8130),
            n.e(8933),
            n.e(8507),
            n.e(4124),
            n.e(7490)]).then(()=>()=>n(84124))),
            s("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(4826),
            n.e(2497),
            n.e(5073),
            n.e(8402),
            n.e(5748),
            n.e(3788),
            n.e(3234),
            n.e(4564),
            n.e(8507),
            n.e(3612),
            n.e(6647),
            n.e(4930)]).then(()=>()=>n(4930))),
            s("clsx",
            "2.1.1",
            ()=>n.e(4921).then(()=>()=>n(4921))),
            s("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([n.e(6281),
            n.e(5748)]).then(()=>()=>n(66281))),
            s("framer-motion",
            "13.5.1",
            ()=>Promise.all([n.e(5657),
            n.e(5748),
            n.e(9292)]).then(()=>()=>n(25657))),
            s("graphql",
            "16.14.2",
            ()=>n.e(1519).then(()=>()=>n(91519))),
            s("prop-types",
            "15.8.1",
            ()=>n.e(331).then(()=>()=>n(60331))),
            s("react-dom",
            "19.2.8",
            ()=>Promise.all([n.e(5748),
            n.e(9848)]).then(()=>()=>n(79848))),
            s("react-intersection-observer",
            "9.16.0",
            ()=>Promise.all([n.e(5748),
            n.e(8123)]).then(()=>()=>n(68123))),
            s("react-router",
            "7.18.4",
            ()=>Promise.all([n.e(8574),
            n.e(5748)]).then(()=>()=>n(68574))),
            s("react",
            "19.2.8",
            ()=>n.e(3888).then(()=>()=>n(83888))),
            (e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const o=n(e);
                if(!o)return;
                const c=e=>e&&e.init&&e.init(n.S[r],
                a);
                if(o.then)return d.push(o.then(c,
                t));
                const f=c(o);
                if(f?.then)return d.push(f.catch(t))
              }catch(e){
                t(e)
              }
            })(25136)),
            d.length?e[r]=Promise.all(d).then(()=>e[r]=1):e[r]=1
          }
        })(),
        (()=>{
          let e;
          n.g.importScripts&&(e=n.g.location+"");
          const t=n.g.document;
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
          n.p=e
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
              a+="u"==(typeof(f=e[o]))[0]?"-":(n>0?".":"")+(n=2,
              f);
              return a
            }var c=[];
            for(o=1;
            o<e.length;
            o++){
              var f=e[o];
              c.push(0===f?"not("+s()+")":1===f?"("+s()+" || "+s()+")":2===f?c.pop()+" "+c.pop():t(f))
            }return s();
            function s(){
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
              f=1,
              s=!0;
              ;
              f++,
              c++){
                var d,
                i,
                l=f<t.length?(typeof t[f])[0]:"";
                if(c>=a.length||"o"==(i=(typeof(d=a[c]))[0]))return!s||("u"==l?f>n&&!o:""==l!=o);
                if("u"==i){
                  if(!s||"u"!=l)return!1
                }else if(s)if(l==i)if(f<=n){
                  if(d!=t[f])return!1
                }else{
                  if(o?d>t[f]:d<t[f])return!1;
                  d!=t[f]&&(s=!1)
                }else if("s"!=l&&"n"!=l){
                  if(o||f<=n)return!1;
                  s=!1,
                  f--
                }else{
                  if(f<=n||i<l!=o)return!1;
                  s=!1
                }else"s"!=l&&"n"!=l&&(s=!1,
                f--)
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
          const a=(e,
          t)=>e&&n.o(e,
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
                f=(typeof c)[0];
                if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;
                if("o"!=o&&"u"!=o&&n!=c)return n<c;
                a++
              }
            })(t,
            r)?r:t,
            0)
          },
          f=e=>function(t,
          r,
          a,
          o,
          c){
            const f=n.I(t);
            return f?.then&&!a?f.then(e.bind(e,
            t,
            n.S[t],
            r,
            !1,
            o,
            c)):e(t,
            n.S[t],
            r,
            a,
            o,
            c)
          },
          s=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          d=f((e,
          t,
          r,
          n,
          f)=>{
            if(!a(t,
            r))return s(e,
            r,
            f);
            const d=c(t,
            r,
            n);
            return o(t[r][d])
          }),
          i=f((e,
          n,
          f,
          d,
          i,
          l)=>{
            if(!a(n,
            f))return s(e,
            f,
            l);
            const u=c(n,
            f,
            d);
            return r(i,
            u)||(b=((e,
            r,
            a,
            n)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(n)+")")(n,
            f,
            u,
            i),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(n[f][u]);
            var b
          }),
          l={
          },
          u={
            95748:()=>d("default",
            "react",
            !1,
            ()=>n.e(3888).then(()=>()=>n(83888))),
            43788:()=>d("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(4826),
            n.e(2497),
            n.e(5073),
            n.e(8402),
            n.e(3234),
            n.e(8507),
            n.e(3612),
            n.e(5826)]).then(()=>()=>n(4930))),
            93234:()=>d("default",
            "react-router",
            !1,
            ()=>n.e(8574).then(()=>()=>n(68574))),
            14564:()=>d("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(2873),
            n.e(9747),
            n.e(8528)]).then(()=>()=>n(6147))),
            8130:()=>d("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([n.e(31),
            n.e(4826),
            n.e(2497),
            n.e(3788),
            n.e(3234),
            n.e(3612),
            n.e(998)]).then(()=>()=>n(23746))),
            57281:()=>d("default",
            "react-dom",
            !1,
            ()=>n.e(3819).then(()=>()=>n(79848))),
            89653:()=>i("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>n.e(331).then(()=>()=>n(60331))),
            22704:()=>d("default",
            "framer-motion",
            !1,
            ()=>n.e(5657).then(()=>()=>n(25657))),
            66176:()=>d("default",
            "@rsgweb/tina",
            !1,
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(178),
            n.e(5073),
            n.e(3575),
            n.e(3788),
            n.e(8933),
            n.e(8507),
            n.e(4124),
            n.e(9551)]).then(()=>()=>n(84124))),
            81270:()=>i("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>n.e(4921).then(()=>()=>n(4921))),
            52284:()=>i("default",
            "react-intersection-observer",
            !1,
            [1,
            9,
            16,
            0],
            ()=>n.e(504).then(()=>()=>n(68123))),
            53388:()=>d("default",
            "@rsgweb/modules-core-highlights",
            !1,
            ()=>Promise.all([n.e(9637),
            n.e(9955)]).then(()=>()=>n(12336))),
            71580:()=>d("default",
            "@rsgweb/modules-core-hero",
            !1,
            ()=>n.e(6945).then(()=>()=>n(96919))),
            80584:()=>d("default",
            "focus-trap-react",
            !1,
            ()=>n.e(6281).then(()=>()=>n(66281))),
            26647:()=>d("default",
            "graphql",
            !1,
            ()=>n.e(1519).then(()=>()=>n(91519)))
          },
          b={
            2284:[52284],
            3234:[93234],
            3337:[22704,
            66176],
            3660:[53388,
            71580,
            80584],
            3788:[43788],
            4564:[14564],
            5748:[95748],
            5826:[26647],
            6647:[26647],
            7155:[81270],
            8130:[8130],
            8933:[57281,
            89653]
          },
          h={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(b,
            e)&&b[e].forEach(e=>{
              if(n.o(l,
              e))return t.push(l[e]);
              if(!h[e]){
                const r=t=>{
                  l[e]=0,
                  n.m[e]=r=>{
                    delete n.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const a=t=>{
                  delete l[e],
                  n.m[e]=r=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const n=u[e]();
                  n.then?t.push(l[e]=n.then(r).catch(a)):r(n)
                }catch(e){
                  a(e)
                }
              }
            })
          }
        })(),
        (()=>{
          if("undefined"!=typeof document){
            var e={
              8106:0
            };
            n.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                2784:1,
                2848:1,
                3660:1,
                4289:1,
                6945:1,
                7490:1,
                9043:1,
                9551:1,
                9637:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var a=n.miniCssF(e),
                o=n.p+a;
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
                })(a,
                o))return t();
                ((e,
                t,
                r,
                a,
                o)=>{
                  var c=document.createElement("link");
                  c.rel="stylesheet",
                  c.type="text/css",
                  n.nc&&(c.nonce=n.nc),
                  c.onerror=c.onload=r=>{
                    if(c.onerror=c.onload=null,
                    "load"===r.type)a();
                    else{
                      var n=r&&r.type,
                      f=r&&r.target&&r.target.href||t,
                      s=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+f+")");
                      s.name="ChunkLoadError",
                      s.code="CSS_CHUNK_LOAD_FAILED",
                      s.type=n,
                      s.request=f,
                      c.parentNode&&c.parentNode.removeChild(c),
                      o(s)
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
            8106:0
          };
          n.f.j=(t,
          r)=>{
            let a=n.o(e,
            t)?e[t]:void 0;
            if(0!==a)if(a)r.push(a[2]);
            else if(/^(3(234|337|788)|2284|4564|5748|6647|8130|8933|9551|9637)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              n)=>a=e[t]=[r,
              n]);
              r.push(a[2]=o);
              const c=new Error,
              f=r=>{
                if(n.o(e,
                t)&&(a=e[t],
                0!==a&&(e[t]=void 0),
                a)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  n=r&&r.target&&r.target.src;
                  c.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",
                  c.name="ChunkLoadError",
                  c.type=e,
                  c.request=n,
                  c.event=r,
                  a[1](c)
                }
              };
              n.l(n.p+n.u(t),
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[a,
            o,
            c]=r;
            var f,
            s,
            d=0;
            if(a.some(t=>0!==e[t])){
              for(f in o)n.o(o,
              f)&&(n.m[f]=o[f]);
              c&&c(n)
            }for(t&&t(r);
            d<a.length;
            d++)s=a[d],
            n.o(e,
            s)&&e[s]&&e[s][0](),
            e[s]=0
          },
          r=self.webpackChunk_rockstargames_sites_legacy=self.webpackChunk_rockstargames_sites_legacy||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        n.nc=void 0,
        n(23069),
        n(54334)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map