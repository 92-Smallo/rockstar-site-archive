try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="033dbf25-2050-4c95-b926-abbc752c69a6",
  e._sentryDebugIdIdentifier="sentry-dbid-033dbf25-2050-4c95-b926-abbc752c69a6")
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
    release:"90576ff78edf4e7c067413c3d030b5d466aa6a58",
    packageName:"@rockstargames/modules-core-gif-viewer",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"90576ff78edf4e7c067413c3d030b5d466aa6a58"
},
System.register([],
function(e,
t){
  return{
    execute:function(){
      e((()=>{
        var e={
          85946(e,
          t,
          r){
            (0,
            r(69e3).w)(1)
          },
          69e3(e,
          t,
          r){
            const n=r(31364).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
              e)
            }
          },
          64769(e,
          t,
          r){
            r(85946)
          },
          31364(e,
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
              var i=n.slice(0,
              a+1);
              return r.protocol+"//"+r.host+i
            };
            Number.isInteger
          },
          14848(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(82),
              r.e(331),
              r.e(788)]).then(()=>()=>r(17788)),
              "./lazy":()=>Promise.all([r.e(82),
              r.e(987),
              r.e(331),
              r.e(503)]).then(()=>()=>r(1503)),
              "./tina":()=>Promise.all([r.e(217),
              r.e(986),
              r.e(82),
              r.e(17),
              r.e(331),
              r.e(208),
              r.e(171)]).then(()=>()=>r(49413)),
              "./tinaBlockTemplates":()=>Promise.all([r.e(217),
              r.e(986),
              r.e(82),
              r.e(17),
              r.e(331),
              r.e(208),
              r.e(171)]).then(()=>()=>r(49413))
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
            const i={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var s=2&o&&r;
            ("object"==typeof s||"function"==typeof s)&&!~t.indexOf(s);
            s=e(s))Object.getOwnPropertyNames(s).forEach(e=>i[e]=()=>r[e]);
            return i.default=()=>r,
            n.d(a,
            i),
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
          67:"02a543359a6ee2f73f3d723816fc065e",
          162:"3c623a5811a5f6ac3dde81c8509e0dbc",
          163:"43c452597cb05e0ba58d70702f74c7b7",
          171:"ee2bce4927583ae0036dc47414ba2cb4",
          208:"97aec51c227322b466e98eb46ead48c0",
          217:"9d12e9c6292d4a1170f7f2ec1beb41f2",
          225:"ad47d1cac98ae09f0c894781b061bd72",
          305:"4670899d246d1cdacee28fc6f9b52cfe",
          389:"0b1c714db37507bb1c166e54c41de6bd",
          503:"c22474e4515fac172cfd0f12d9fdf8ca",
          581:"34e179ba57a5b4ecee15939eeaf8f29e",
          606:"e25de289877133e3f08fce120bb435e9",
          656:"72fbed6fced0584c094e261f7f95b84b",
          788:"eb4295b4dee5ded24b2ce6268a18c785",
          860:"28ca11944fd3d6c17f0d08009889bcf9",
          920:"6be774bcf4e66018e72cc40bdb25f77f",
          986:"b250d413f9a38841722c2d12bb106147"
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
          i)=>{
            if(e[r])return void e[r].push(o);
            let s,
            d;
            if(void 0!==a){
              const e=document.getElementsByTagName("script");
              for(var c=0;
              c<e.length;
              c++){
                const n=e[c];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+a){
                  s=n;
                  break
                }
              }
            }s||(d=!0,
            s=document.createElement("script"),
            s.charset="utf-8",
            n.nc&&s.setAttribute("nonce",
            n.nc),
            s.setAttribute("data-webpack",
            t+a),
            s.src=r),
            e[r]=[o];
            const l=(t,
            n)=>{
              s.onerror=s.onload=null,
              clearTimeout(f);
              const o=e[r];
              if(delete e[r],
              s.parentNode?.removeChild(s),
              o?.forEach(e=>e(n)),
              t)return t(n)
            },
            f=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:s
            }),
            12e4);
            s.onerror=l.bind(null,
            s.onerror),
            s.onload=l.bind(null,
            s.onload),
            d&&document.head.appendChild(s)
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
            const i=n.S[r],
            s="@rockstargames/modules-core-gif-viewer",
            d=(e,
            t,
            r,
            n)=>{
              const o=i[e]=i[e]||{
              },
              a=o[t];
              (!a||!a.loaded&&(!n!=!a.eager?n:s>a.from))&&(o[t]={
                get:r,
                from:s,
                eager:!!n
              })
            },
            c=[];
            return"default"===r&&(d("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([n.e(217),
            n.e(920),
            n.e(656),
            n.e(986),
            n.e(82),
            n.e(987),
            n.e(389),
            n.e(17),
            n.e(331),
            n.e(208),
            n.e(305)]).then(()=>()=>n(19163))),
            d("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(217),
            n.e(920),
            n.e(67),
            n.e(82),
            n.e(987),
            n.e(389),
            n.e(606)]).then(()=>()=>n(40606))),
            d("react-dom",
            "18.3.1",
            ()=>Promise.all([n.e(162),
            n.e(82)]).then(()=>()=>n(30162))),
            d("react-router-dom",
            "6.30.4",
            ()=>Promise.all([n.e(860),
            n.e(82),
            n.e(17)]).then(()=>()=>n(79860))),
            d("react",
            "18.3.1",
            ()=>n.e(581).then(()=>()=>n(22581)))),
            e[r]=c.length?Promise.all(c).then(()=>e[r]=1):1
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
              n+="u"==(typeof(s=e[a]))[0]?"-":(o>0?".":"")+(o=2,
              s);
              return n
            }var i=[];
            for(a=1;
            a<e.length;
            a++){
              var s=e[a];
              i.push(0===s?"not("+d()+")":1===s?"("+d()+" || "+d()+")":2===s?i.pop()+" "+i.pop():t(s))
            }return d();
            function d(){
              return i.pop().replace(/^\((.+)\)$/,
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
              for(var i=0,
              s=1,
              d=!0;
              ;
              s++,
              i++){
                var c,
                l,
                f=s<t.length?(typeof t[s])[0]:"";
                if(i>=n.length||"o"==(l=(typeof(c=n[i]))[0]))return!d||("u"==f?s>o&&!a:""==f!=a);
                if("u"==l){
                  if(!d||"u"!=f)return!1
                }else if(d)if(f==l)if(s<=o){
                  if(c!=t[s])return!1
                }else{
                  if(a?c>t[s]:c<t[s])return!1;
                  c!=t[s]&&(d=!1)
                }else if("s"!=f&&"n"!=f){
                  if(a||s<=o)return!1;
                  d=!1,
                  s--
                }else{
                  if(s<=o||l<f!=a)return!1;
                  d=!1
                }else"s"!=f&&"n"!=f&&(d=!1,
                s--)
              }
            }var u=[],
            p=u.pop.bind(u);
            for(i=1;
            i<t.length;
            i++){
              var h=t[i];
              u.push(1==h?p()|p():2==h?p()&p():h?r(h,
              n):!p())
            }return!!p()
          };
          const o=(t,
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
                var i=r[n],
                s=(typeof i)[0];
                if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;
                if("o"!=a&&"u"!=a&&o!=i)return o<i;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          a=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          i=(e=>function(t,
          r,
          o,
          a,
          i){
            const s=n.I(t);
            return s?.then&&!o?s.then(e.bind(e,
            t,
            n.S[t],
            r,
            !1,
            a,
            i)):e(t,
            n.S[t],
            r,
            o,
            a,
            i)
          })((e,
          i,
          s,
          d,
          c,
          l)=>{
            if(!((e,
            t)=>e&&n.o(e,
            t))(i,
            s))return a(e,
            s,
            l);
            const f=o(i,
            s,
            d);
            return r(c,
            f)||(p=((e,
            r,
            n,
            o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(i,
            s,
            f,
            c),
            "undefined"!=typeof console&&console.warn&&console.warn(p)),
            (u=i[s][f]).loaded=1,
            u.get();
            var u,
            p
          }),
          s={
          },
          d={
            93082:()=>i("default",
            "react",
            !1,
            [0],
            ()=>n.e(581).then(()=>()=>n(22581))),
            13331:()=>i("default",
            "@rsgweb/utils",
            !1,
            [0],
            ()=>Promise.all([n.e(217),
            n.e(920),
            n.e(67),
            n.e(987),
            n.e(389),
            n.e(225)]).then(()=>()=>n(40606))),
            99225:()=>i("default",
            "react-router-dom",
            !1,
            [0],
            ()=>Promise.all([n.e(860),
            n.e(17)]).then(()=>()=>n(79860))),
            84017:()=>i("default",
            "react-dom",
            !1,
            [1,
            18,
            2,
            0],
            ()=>n.e(162).then(()=>()=>n(30162))),
            17301:()=>i("default",
            "@rsgweb/tina",
            !1,
            [0],
            ()=>Promise.all([n.e(920),
            n.e(656),
            n.e(987),
            n.e(389),
            n.e(163)]).then(()=>()=>n(19163)))
          },
          c={
            17:[84017],
            82:[93082],
            171:[17301],
            331:[13331],
            987:[99225]
          },
          l={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(c,
            e)&&c[e].forEach(e=>{
              if(n.o(s,
              e))return t.push(s[e]);
              if(!l[e]){
                const r=t=>{
                  s[e]=0,
                  n.m[e]=r=>{
                    delete n.c[e],
                    r.exports=t()
                  }
                };
                l[e]=!0;
                const o=t=>{
                  delete s[e],
                  n.m[e]=r=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const n=d[e]();
                  n.then?t.push(s[e]=n.then(r).catch(o)):r(n)
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
                    var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");
                    if("stylesheet"===i.rel&&(o===e||o===t))return i
                  }var a=document.getElementsByTagName("style");
                  for(n=0;
                  n<a.length;
                  n++){
                    var i;
                    if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i
                  }
                })(o,
                a))return t();
                ((e,
                t,
                r,
                o,
                a)=>{
                  var i=document.createElement("link");
                  i.rel="stylesheet",
                  i.type="text/css",
                  n.nc&&(i.nonce=n.nc),
                  i.onerror=i.onload=r=>{
                    if(i.onerror=i.onload=null,
                    "load"===r.type)o();
                    else{
                      var n=r&&r.type,
                      s=r&&r.target&&r.target.href||t,
                      d=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+s+")");
                      d.name="ChunkLoadError",
                      d.code="CSS_CHUNK_LOAD_FAILED",
                      d.type=n,
                      d.request=s,
                      i.parentNode&&i.parentNode.removeChild(i),
                      a(d)
                    }
                  },
                  i.href=t,
                  document.head.appendChild(i)
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
            else if(/^(17|331|82|987)$/.test(t))e[t]=0;
            else{
              const a=new Promise((r,
              n)=>o=e[t]=[r,
              n]);
              r.push(o[2]=a);
              const i=n.p+n.u(t),
              s=new Error,
              d=r=>{
                if(n.o(e,
                t)&&(o=e[t],
                0!==o&&(e[t]=void 0),
                o)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  n=r&&r.target&&r.target.src;
                  s.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",
                  s.name="ChunkLoadError",
                  s.type=e,
                  s.request=n,
                  s.event=r,
                  o[1](s)
                }
              };
              n.l(i,
              d,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[o,
            a,
            i]=r;
            var s,
            d,
            c=0;
            if(o.some(t=>0!==e[t])){
              for(s in a)n.o(a,
              s)&&(n.m[s]=a[s]);
              i&&i(n)
            }for(t&&t(r);
            c<o.length;
            c++)d=o[c],
            n.o(e,
            d)&&e[d]&&e[d][0](),
            e[d]=0
          },
          r=self.webpackChunk_rockstargames_modules_core_gif_viewer=self.webpackChunk_rockstargames_modules_core_gif_viewer||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        n.nc=void 0,
        n(64769),
        n(14848)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map