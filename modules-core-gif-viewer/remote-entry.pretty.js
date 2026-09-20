try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="abfa4de6-9f03-4afd-8fc9-e1bf7ca96b66",
  e._sentryDebugIdIdentifier="sentry-dbid-abfa4de6-9f03-4afd-8fc9-e1bf7ca96b66")
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
    packageName:"@rockstargames/modules-core-gif-viewer",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"f464875c71ff6a2f67967810cb89cde22d852a2d"
},
System.register([],
function(e,
t){
  return{
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
              var d=n.slice(0,
              a+1);
              return r.protocol+"//"+r.host+d
            };
            Number.isInteger
          },
          4848(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(748),
              r.e(407),
              r.e(788)]).then(()=>()=>r(7788)),
              "./lazy":()=>Promise.all([r.e(748),
              r.e(612),
              r.e(407),
              r.e(503)]).then(()=>()=>r(1503)),
              "./tina":()=>Promise.all([r.e(781),
              r.e(833),
              r.e(748),
              r.e(407),
              r.e(632),
              r.e(171)]).then(()=>()=>r(9413)),
              "./tinaBlockTemplates":()=>Promise.all([r.e(781),
              r.e(833),
              r.e(748),
              r.e(407),
              r.e(632),
              r.e(171)]).then(()=>()=>r(9413))
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
          }
        };
        const r={
        };
        function n(t){
          const o=r[t];
          if(void 0!==o)return o.exports;
          const a=r[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(a.exports,
          a,
          a.exports,
          n),
          a.loaded=!0,
          a.exports
        }return n.m=e,
        n.c=r,
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
        (()=>{
          const e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;
          let t;
          n.t=function(r,
          o){
            if(1&o&&(r=this(r)),
            8&o)return r;
            if("object"==typeof r&&r){
              if(4&o&&r.__esModule)return r;
              if(16&o&&"function"==typeof r.then)return r
            }const a=Object.create(null);
            n.r(a);
            const d={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var c=2&o&&r;
            ("object"==typeof c||"function"==typeof c)&&!~t.indexOf(c);
            c=e(c))Object.getOwnPropertyNames(c).forEach(e=>d[e]=()=>r[e]);
            return d.default=()=>r,
            n.d(a,
            d),
            a
          }
        })(),
        n.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var o=t[r++],
            a=t[r++];
            n.o(e,
            o)?0===a&&r++:0===a?Object.defineProperty(e,
            o,
            {
              enumerable:!0,
              value:t[r++]
            }):Object.defineProperty(e,
            o,
            {
              enumerable:!0,
              get:a
            })
          }else for(var o in t)n.o(t,
          o)&&!n.o(e,
          o)&&Object.defineProperty(e,
          o,
          {
            enumerable:!0,
            get:t[o]
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
          163:"26f10708ef3e56614edb369b2f02fedf",
          171:"2132aa25cb97f1132ad49a5f5a8e4d48",
          246:"ab0be4e476166e6ed5e46237f69e3967",
          305:"6e179e4e9fbeaba6979269a58e9cdbd8",
          361:"4694a976a935efd13c42c8efcaba26cb",
          389:"bee595108226b70371f1ebae2448c392",
          503:"55e51d2258658ddf2896cd8826889fe1",
          511:"16973d822e9bdba7a4dcf9f2f4d26408",
          589:"ceba5f470848caf1c56f90f5f8545fdd",
          607:"954483e01c8c242ae4e3276708d8eb09",
          632:"e26e12166d53b823a697555ebed66c23",
          781:"54e0ddd024322ec8caca20cf691926e3",
          788:"a47e9dbf632935ebf2159e631bd6f367",
          819:"414b8646927c9fa41ef56719f0140f1c",
          833:"0ca1b6e555edb7b6373211295fdc154c",
          848:"31b052f2e2f255d1e26b8d8ce242b65e",
          865:"0993cd6beee113476588df9017ace242",
          888:"2366f6e8352458be235bdcfb14316812"
        }[e]+".js",
        n.miniCssF=e=>"css/"+{
          171:"b5328e2f95f5b178239a08711e5d52f6",
          305:"9b2658ef6c5d8454d59ccd4f1949bdff",
          503:"069b49906581e555f7e91f6dcda37312",
          788:"5e608aa107d624a061bf5c1486a248e3"
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
          t="@rockstargames/modules-core-gif-viewer:";
          n.l=(r,
          o,
          a,
          d)=>{
            if(e[r])return void e[r].push(o);
            let c,
            s;
            if(void 0!==a){
              const e=document.getElementsByTagName("script");
              for(var f=0;
              f<e.length;
              f++){
                const n=e[f];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+a){
                  c=n;
                  break
                }
              }
            }c||(s=!0,
            c=document.createElement("script"),
            c.charset="utf-8",
            n.nc&&c.setAttribute("nonce",
            n.nc),
            c.setAttribute("data-webpack",
            t+a),
            c.src=r),
            e[r]=[o];
            const i=(t,
            n)=>{
              c.onerror=c.onload=null,
              clearTimeout(l);
              const o=e[r];
              if(delete e[r],
              c.parentNode?.removeChild(c),
              o?.forEach(e=>e(n)),
              t)return t(n)
            },
            l=setTimeout(i.bind(null,
            void 0,
            {
              type:"timeout",
              target:c
            }),
            12e4);
            c.onerror=i.bind(null,
            c.onerror),
            c.onload=i.bind(null,
            c.onload),
            s&&document.head.appendChild(c)
          }
        })(),
        n.r=e=>{
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
        n.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          n.S={
          };
          const e={
          },
          t={
          };
          n.I=(r,
          o)=>{
            o||(o=[]);
            let a=t[r];
            if(a||(a=t[r]={
            }),
            o.indexOf(a)>=0)return;
            if(o.push(a),
            e[r])return e[r];
            n.o(n.S,
            r)||(n.S[r]={
            });
            const d=n.S[r],
            c="@rockstargames/modules-core-gif-viewer",
            s=(e,
            t,
            r,
            n)=>{
              const o=d[e]=d[e]||{
              },
              a=o[t];
              (!a||!a.loaded&&(!n!=!a.eager?n:c>a.from))&&(o[t]={
                get:r,
                from:c,
                eager:!!n
              })
            },
            f=[];
            return"default"===r&&(s("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([n.e(781),
            n.e(589),
            n.e(607),
            n.e(833),
            n.e(748),
            n.e(612),
            n.e(389),
            n.e(407),
            n.e(632),
            n.e(305)]).then(()=>()=>n(9163))),
            s("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(781),
            n.e(589),
            n.e(511),
            n.e(748),
            n.e(612),
            n.e(389),
            n.e(865)]).then(()=>()=>n(9865))),
            s("react-dom",
            "19.2.8",
            ()=>Promise.all([n.e(748),
            n.e(848)]).then(()=>()=>n(9848))),
            s("react-router",
            "7.18.2",
            ()=>Promise.all([n.e(361),
            n.e(748)]).then(()=>()=>n(9361))),
            s("react",
            "19.2.8",
            ()=>n.e(888).then(()=>()=>n(3888)))),
            e[r]=f.length?Promise.all(f).then(()=>e[r]=1):1
          }
        })(),
        n.cjs=e=>{
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
          n.g.importScripts&&(e=n.g.location+"");
          const t=n.g.document;
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
          n.p=e
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
          };
          const t=(t,
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
                var d=r[n],
                c=(typeof d)[0];
                if(a!=c)return"o"==a&&"n"==c||"s"==c||"u"==a;
                if("o"!=a&&"u"!=a&&o!=d)return o<d;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          r=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          o=(e=>function(t,
          r,
          o,
          a,
          d){
            const c=n.I(t);
            return c?.then&&!o?c.then(e.bind(e,
            t,
            n.S[t],
            r,
            !1,
            a,
            d)):e(t,
            n.S[t],
            r,
            o,
            a,
            d)
          })((e,
          o,
          a,
          d,
          c)=>{
            if(!((e,
            t)=>e&&n.o(e,
            t))(o,
            a))return r(e,
            a,
            c);
            const s=t(o,
            a,
            d);
            return(f=o[a][s]).loaded=1,
            f.get();
            var f
          }),
          a={
          },
          d={
            5748:()=>o("default",
            "react",
            !1,
            ()=>n.e(888).then(()=>()=>n(3888))),
            3788:()=>o("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([n.e(781),
            n.e(589),
            n.e(511),
            n.e(612),
            n.e(389),
            n.e(246)]).then(()=>()=>n(9865))),
            4612:()=>o("default",
            "react-router",
            !1,
            ()=>n.e(361).then(()=>()=>n(9361))),
            7281:()=>o("default",
            "react-dom",
            !1,
            ()=>n.e(819).then(()=>()=>n(9848))),
            6176:()=>o("default",
            "@rsgweb/tina",
            !1,
            ()=>Promise.all([n.e(589),
            n.e(607),
            n.e(612),
            n.e(389),
            n.e(163)]).then(()=>()=>n(9163)))
          },
          c={
            171:[6176],
            407:[3788],
            612:[4612],
            632:[7281],
            748:[5748]
          },
          s={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(c,
            e)&&c[e].forEach(e=>{
              if(n.o(a,
              e))return t.push(a[e]);
              if(!s[e]){
                const r=t=>{
                  a[e]=0,
                  n.m[e]=r=>{
                    delete n.c[e],
                    r.exports=t()
                  }
                };
                s[e]=!0;
                const o=t=>{
                  delete a[e],
                  n.m[e]=r=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const n=d[e]();
                  n.then?t.push(a[e]=n.then(r).catch(o)):r(n)
                }catch(e){
                  o(e)
                }
              }
            })
          }
        })(),
        (()=>{
          if("undefined"!=typeof document){
            var e={
              737:0
            };
            n.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                171:1,
                305:1,
                503:1,
                788:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var o=n.miniCssF(e),
                a=n.p+o;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  n=0;
                  n<r.length;
                  n++){
                    var o=(d=r[n]).getAttribute("data-href")||d.getAttribute("href");
                    if("stylesheet"===d.rel&&(o===e||o===t))return d
                  }var a=document.getElementsByTagName("style");
                  for(n=0;
                  n<a.length;
                  n++){
                    var d;
                    if((o=(d=a[n]).getAttribute("data-href"))===e||o===t)return d
                  }
                })(o,
                a))return t();
                ((e,
                t,
                r,
                o,
                a)=>{
                  var d=document.createElement("link");
                  d.rel="stylesheet",
                  d.type="text/css",
                  n.nc&&(d.nonce=n.nc),
                  d.onerror=d.onload=r=>{
                    if(d.onerror=d.onload=null,
                    "load"===r.type)o();
                    else{
                      var n=r&&r.type,
                      c=r&&r.target&&r.target.href||t,
                      s=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+c+")");
                      s.name="ChunkLoadError",
                      s.code="CSS_CHUNK_LOAD_FAILED",
                      s.type=n,
                      s.request=c,
                      d.parentNode&&d.parentNode.removeChild(d),
                      a(s)
                    }
                  },
                  d.href=t,
                  document.head.appendChild(d)
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
            737:0
          };
          n.f.j=(t,
          r)=>{
            let o=n.o(e,
            t)?e[t]:void 0;
            if(0!==o)if(o)r.push(o[2]);
            else if(/^(407|612|748)$/.test(t))e[t]=0;
            else{
              const a=new Promise((r,
              n)=>o=e[t]=[r,
              n]);
              r.push(o[2]=a);
              const d=n.p+n.u(t),
              c=new Error,
              s=r=>{
                if(n.o(e,
                t)&&(o=e[t],
                0!==o&&(e[t]=void 0),
                o)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  n=r&&r.target&&r.target.src;
                  c.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",
                  c.name="ChunkLoadError",
                  c.type=e,
                  c.request=n,
                  c.event=r,
                  o[1](c)
                }
              };
              n.l(d,
              s,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[o,
            a,
            d]=r;
            var c,
            s,
            f=0;
            if(o.some(t=>0!==e[t])){
              for(c in a)n.o(a,
              c)&&(n.m[c]=a[c]);
              d&&d(n)
            }for(t&&t(r);
            f<o.length;
            f++)s=o[f],
            n.o(e,
            s)&&e[s]&&e[s][0](),
            e[s]=0
          },
          r=self.webpackChunk_rockstargames_modules_core_gif_viewer=self.webpackChunk_rockstargames_modules_core_gif_viewer||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        n.nc=void 0,
        n(4769),
        n(4848)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map