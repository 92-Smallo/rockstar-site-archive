try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="13174d82-b31a-484c-9853-3401e4770fda",
  e._sentryDebugIdIdentifier="sentry-dbid-13174d82-b31a-484c-9853-3401e4770fda")
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
    release:"2f63c38ab8f479c51122a10f10649e609833a8d6",
    packageName:"@rockstargames/sites-red-dead-online",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"2f63c38ab8f479c51122a10f10649e609833a8d6"
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
          82021(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(5660),
              r.e(9534),
              r.e(8277),
              r.e(3336),
              r.e(883),
              r.e(7624),
              r.e(5748),
              r.e(7281),
              r.e(1270),
              r.e(8507),
              r.e(3612),
              r.e(4592),
              r.e(9844),
              r.e(7291),
              r.e(3056)]).then(()=>()=>r(61407))
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
          331:"3817150e564602a3889b0a82eafe624f",
          883:"43ceee0020d0a9759aa4e35e841de75c",
          947:"ed19878543c20803e18701db2a91e6bb",
          1745:"1418a94bf7662a23b9738731ae6b28a0",
          1841:"1775039011416dc4e24357673877f6dc",
          2584:"b8525761ec6415b543d36ad8248ef010",
          2852:"290dd0ed2f338e4d5b09e806a54541f5",
          2873:"634c74b331e9255a7503ddba1e836561",
          2940:"dc24410eb85d3247c1292ec62a9a0878",
          2980:"84745000c3a156139c347a1b7edf0ce9",
          3056:"e34f5c14af77c91a04530be14b81e75d",
          3336:"59e2bf54a7818f4443c2614540bc4e84",
          3469:"c18112c2d3db8db4ef334e2dcf999e05",
          3612:"e8a3ca911120a6af89bc719db499fb4f",
          3819:"d9e85697a7157f1b275dd5dfa5ee1f32",
          3888:"6c5e491e4cdc7232a1cb6d0c400bd1c6",
          4539:"78cbb2c5779b3502e3a55676f3c29e61",
          4921:"41bb2349d2b0fc60f9daa9fb8969e39f",
          4972:"7285c0891a51a32949e0da46b3baa2b1",
          5051:"8fa3c85373017d34eafb8f99dab50f27",
          5072:"9f7719b4c3a77d94b5c7581cf76c04c3",
          5271:"79ff8ffa21ac4a21eafb2d4b05818627",
          5485:"23892458fbf0d3ccc7943de001ff0357",
          5660:"3650db6ce4148b85dc77acd7b45f97c1",
          5676:"72ccb9de5139dfbeef2bd9e1d295b01a",
          5787:"393dfafdf31af39d673dd2d2c927b739",
          6038:"f8ab4738013b0d51e42c23646b76cdb1",
          6147:"a05f5ea6c18529e4c333c509415503d9",
          6281:"e19fbb2c7885326441071b27b2774d2a",
          7158:"da193b34131cbc56bc2cefbc79e9973f",
          7291:"cec0b1bc58c5dce7ac899895800347a8",
          7350:"7c6a95b1ed5470e8572cf7801938cf14",
          7624:"30b9c7d3cd4f7b117ba484d0584234be",
          7817:"d93250c568fa01d46dedf18d86eb48c5",
          7946:"bc0d657de23115557d64426b062a67db",
          7974:"2883f80f740a7edcd3c690d5f70a489e",
          8200:"034eed3d14f2144aa7307455d5e750fc",
          8224:"80fc64ae1c0d39f2c02f82b3fc7a3028",
          8277:"11db364a0cd197c8f9fbabefdf1d59c7",
          8507:"37f93fb28b97918c96e530670f9f8d50",
          8574:"85878a8e72355466a143f47516f12e20",
          8671:"feb58fefb88e83e2fce7194d04f9ea18",
          8676:"1c2a0c9433a5514973b4194061dff4dd",
          8899:"923a4bb4f4a1c78380a00848a7f2f8c0",
          9249:"018f4365ca1b142e38e2e426aff9cd1e",
          9292:"14ad220f9b353fd4737ae719e8798d7b",
          9317:"d5a11b49aefdbf617d9ccf957332f9d8",
          9534:"07c358ac737a47e4b40322fb9c45fff5",
          9844:"f90a4c5f09b3e33b0994ddfef3b5edf8",
          9848:"c02b28c55f94171c5bbfae2c454c0b18"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          1576:"7c575cc0a210038808b12a81bf37629b",
          1745:"8e0f7b82ca6f6f4c8bac88b073007d36",
          1841:"bfb1b57fe719ebd7f8e99fd13df3359f",
          1957:"7c575cc0a210038808b12a81bf37629b",
          3056:"427393d18eaa55d84a24f800b715e49c",
          4539:"7c575cc0a210038808b12a81bf37629b",
          4972:"d6bdb3d663dc876fd26d20200f97dbba",
          7291:"3e759e2d1141e1c59be17208db70ba3b",
          7817:"63e018bf542dea5c47a17b039fcbab30",
          8200:"7c575cc0a210038808b12a81bf37629b",
          8224:"81ce2cc2fbbf39dfca3fd1d0c3f0d648"
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
          t="@rockstargames/sites-red-dead-online:";
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
            7291:[31879]
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
            f="@rockstargames/sites-red-dead-online",
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
            return"default"===r&&(c("@foundry-int/utils",
            "7.5.1",
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(8676)]).then(()=>()=>a(88676))),
            c("@foundry-int/utils",
            "7.6.4",
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(2980)]).then(()=>()=>a(62980))),
            c("@foundry/icons",
            "7.5.1",
            ()=>Promise.all([a.e(2940),
            a.e(5748),
            a.e(7281),
            a.e(4592),
            a.e(4539)]).then(()=>()=>a(32940))),
            c("@foundry/icons",
            "7.6.4",
            ()=>Promise.all([a.e(5787),
            a.e(5748),
            a.e(7281),
            a.e(9521),
            a.e(8200)]).then(()=>()=>a(45787))),
            c("@foundry/react",
            "7.6.4",
            ()=>Promise.all([a.e(8277),
            a.e(1745),
            a.e(2873),
            a.e(8224),
            a.e(5748),
            a.e(7281),
            a.e(1270),
            a.e(9521),
            a.e(3785),
            a.e(782),
            a.e(9292)]).then(()=>()=>a(8224))),
            c("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(5660),
            a.e(9534),
            a.e(2873),
            a.e(5748),
            a.e(6147)]).then(()=>()=>a(6147))),
            c("@rsgweb/modules-core-feedback",
            "0.0.0",
            ()=>Promise.all([a.e(9534),
            a.e(8277),
            a.e(3336),
            a.e(5748),
            a.e(1270),
            a.e(3612),
            a.e(9844),
            a.e(1841)]).then(()=>()=>a(81841))),
            c("@rsgweb/modules-core-newswire-article",
            "0.0.0-development",
            ()=>Promise.all([a.e(5660),
            a.e(9534),
            a.e(8277),
            a.e(1745),
            a.e(3336),
            a.e(883),
            a.e(4972),
            a.e(7624),
            a.e(5748),
            a.e(7281),
            a.e(1270),
            a.e(9521),
            a.e(8507),
            a.e(3612),
            a.e(3785),
            a.e(4592),
            a.e(9844),
            a.e(7817),
            a.e(7291)]).then(()=>()=>a(73494))),
            c("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(5660),
            a.e(9534),
            a.e(8277),
            a.e(3336),
            a.e(5072),
            a.e(5748),
            a.e(8507),
            a.e(3612),
            a.e(5271)]).then(()=>()=>a(45271))),
            c("clsx",
            "2.1.1",
            ()=>a.e(4921).then(()=>()=>a(4921))),
            c("date-fns",
            "4.4.0",
            ()=>a.e(7946).then(()=>()=>a(87946))),
            c("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([a.e(6281),
            a.e(5748)]).then(()=>()=>a(66281))),
            c("hammerjs",
            "2.0.8",
            ()=>a.e(6038).then(()=>()=>a(36038))),
            c("prop-types",
            "15.8.1",
            ()=>a.e(331).then(()=>()=>a(60331))),
            c("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(5748),
            a.e(9848)]).then(()=>()=>a(79848))),
            c("react-router",
            "7.18.4",
            ()=>Promise.all([a.e(8574),
            a.e(5748)]).then(()=>()=>a(68574))),
            c("react",
            "19.2.8",
            ()=>a.e(3888).then(()=>()=>a(83888))),
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
            ()=>a.e(3888).then(()=>()=>a(83888))),
            57281:()=>s("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(79848))),
            81270:()=>i("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(4921).then(()=>()=>a(4921))),
            14564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(5660),
            a.e(2873),
            a.e(6147)]).then(()=>()=>a(6147))),
            43788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(5660),
            a.e(5072),
            a.e(8507),
            a.e(5271)]).then(()=>()=>a(45271))),
            93234:()=>s("default",
            "react-router",
            !1,
            ()=>a.e(8574).then(()=>()=>a(68574))),
            64592:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(8676)]).then(()=>()=>a(88676))),
            23392:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(1745),
            a.e(2873),
            a.e(8224),
            a.e(7281),
            a.e(9521),
            a.e(3785),
            a.e(782)]).then(()=>()=>a(8224))),
            75253:()=>s("default",
            "date-fns",
            !1,
            ()=>a.e(7946).then(()=>()=>a(87946))),
            80584:()=>s("default",
            "focus-trap-react",
            !1,
            ()=>a.e(6281).then(()=>()=>a(66281))),
            89653:()=>i("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>a.e(331).then(()=>()=>a(60331))),
            10640:()=>s("default",
            "@rsgweb/modules-core-newswire-article",
            !1,
            ()=>Promise.all([a.e(1745),
            a.e(4972),
            a.e(9521),
            a.e(3785),
            a.e(7817)]).then(()=>()=>a(73494))),
            74694:()=>s("default",
            "@rsgweb/modules-core-feedback",
            !1,
            ()=>a.e(1841).then(()=>()=>a(81841))),
            79521:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(2980)]).then(()=>()=>a(62980))),
            13785:()=>s("default",
            "@foundry/icons",
            !1,
            ()=>Promise.all([a.e(2940),
            a.e(4592),
            a.e(1957)]).then(()=>()=>a(32940))),
            20782:()=>s("default",
            "@foundry/icons",
            !1,
            ()=>Promise.all([a.e(5787),
            a.e(1576)]).then(()=>()=>a(45787))),
            12341:()=>i("default",
            "hammerjs",
            !1,
            [1,
            2,
            0,
            8],
            ()=>a.e(6038).then(()=>()=>a(36038)))
          },
          b={
            782:[20782],
            1270:[81270],
            3056:[10640,
            74694],
            3612:[14564,
            43788,
            93234],
            3785:[13785],
            4592:[64592],
            5748:[95748],
            7281:[57281],
            7291:[80584,
            89653],
            7817:[12341],
            9521:[79521],
            9844:[23392,
            75253]
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
              129:0
            };
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                1576:1,
                1745:1,
                1841:1,
                1957:1,
                3056:1,
                4539:1,
                4972:1,
                7291:1,
                7817:1,
                8200:1,
                8224:1
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
            129:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(1(270|576|957)|3785|4592|5748|7281|782|9521)$/.test(t))e[t]=0;
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
          r=self.webpackChunk_rockstargames_sites_red_dead_online=self.webpackChunk_rockstargames_sites_red_dead_online||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(23069),
        a(82021)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map