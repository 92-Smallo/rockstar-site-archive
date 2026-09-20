try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="8a381fc0-5f92-4b4c-a7c9-51c3cd799427",
  e._sentryDebugIdIdentifier="sentry-dbid-8a381fc0-5f92-4b4c-a7c9-51c3cd799427")
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
    packageName:"@rockstargames/sites-careers",
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
              var s=n.slice(0,
              a+1);
              return r.protocol+"//"+r.host+s
            };
            Number.isInteger
          },
          6557(e,
          t,
          r){
            "use strict";
            const n={
              "./bootstrap":()=>Promise.all([r.e(945),
              r.e(748),
              r.e(472),
              r.e(272),
              r.e(861),
              r.e(842)]).then(()=>()=>r(842)),
              "./index":()=>Promise.all([r.e(945),
              r.e(748),
              r.e(472),
              r.e(272),
              r.e(861),
              r.e(788)]).then(()=>()=>r(7788))
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
            exports:{
            }
          };
          return e[t].call(a.exports,
          a,
          a.exports,
          n),
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
            const s={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var c=2&o&&r;
            ("object"==typeof c||"function"==typeof c)&&!~t.indexOf(c);
            c=e(c))Object.getOwnPropertyNames(c).forEach(e=>s[e]=()=>r[e]);
            return s.default=()=>r,
            n.d(a,
            s),
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
          14:"ff52cdc0818dbcb378351faa99fa537f",
          42:"abcd3387e849465fc7a02b176c98f676",
          87:"9a160439c04d4a37748434d9d922f18d",
          155:"c11b31c4f00837d44ea8a5b096a805ef",
          272:"d46fc9f853fe62b865728ca174295118",
          331:"21270beede9c2ba5ec45300a56a1044d",
          361:"86ab76c3b71c4f9b195d86a56886b926",
          615:"c863fe8b4a099a54d50ed6e0890825dc",
          633:"69bc3ee37804355f887c7d5def25b5c9",
          775:"cce7c345e2445193f19f130ab327ef0e",
          788:"44033a20c9b473bbba8b257e90f2b0ff",
          819:"fd0de3a5983b8a99b8f7e4f66c0edbb9",
          842:"57004a608b12504b029ad24233221244",
          848:"79569ea16bdc92696660ab5458f870dc",
          861:"6121e2989fd729afac446aae7ddeafc4",
          888:"526e6729c95d64cbf85bdfdeb17a1ae7",
          905:"edf486b9402f4d1236dab3c40f3db89c",
          945:"09e920f8414434b4a519fe7fd8ff476b",
          948:"61d7d9c96be39edffa7c3c527733c15e",
          996:"bce04f5a51793b523c8dab0db8d74cf8"
        }[e]+".js",
        n.miniCssF=e=>"css/a475e4d66d5fa6d7a1ac6ed9881359f0.css",
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
          t="@rockstargames/sites-careers:";
          n.l=(r,
          o,
          a,
          s)=>{
            if(e[r])return void e[r].push(o);
            let c,
            l;
            if(void 0!==a){
              const e=document.getElementsByTagName("script");
              for(var i=0;
              i<e.length;
              i++){
                const n=e[i];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+a){
                  c=n;
                  break
                }
              }
            }c||(l=!0,
            c=document.createElement("script"),
            c.charset="utf-8",
            n.nc&&c.setAttribute("nonce",
            n.nc),
            c.setAttribute("data-webpack",
            t+a),
            c.src=r),
            e[r]=[o];
            const d=(t,
            n)=>{
              c.onerror=c.onload=null,
              clearTimeout(f);
              const o=e[r];
              if(delete e[r],
              c.parentNode?.removeChild(c),
              o?.forEach(e=>e(n)),
              t)return t(n)
            },
            f=setTimeout(d.bind(null,
            void 0,
            {
              type:"timeout",
              target:c
            }),
            12e4);
            c.onerror=d.bind(null,
            c.onerror),
            c.onload=d.bind(null,
            c.onload),
            l&&document.head.appendChild(c)
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
            const s=n.S[r],
            c="@rockstargames/sites-careers",
            l=(e,
            t,
            r,
            n)=>{
              const o=s[e]=s[e]||{
              },
              a=o[t];
              (!a||!a.loaded&&(!n!=!a.eager?n:c>a.from))&&(o[t]={
                get:r,
                from:c,
                eager:!!n
              })
            },
            i=[];
            return"default"===r&&(l("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([n.e(775),
            n.e(748),
            n.e(472),
            n.e(996)]).then(()=>()=>n(5996))),
            l("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(945),
            n.e(905),
            n.e(748),
            n.e(472),
            n.e(272),
            n.e(948)]).then(()=>()=>n(6948))),
            l("focus-trap-react",
            "10.3.1",
            ()=>Promise.all([n.e(155),
            n.e(748),
            n.e(653)]).then(()=>()=>n(1155))),
            l("lodash-es",
            "4.18.1",
            ()=>n.e(42).then(()=>()=>n(2042))),
            l("prop-types",
            "15.8.1",
            ()=>n.e(331).then(()=>()=>n(331))),
            l("react-dom",
            "19.2.8",
            ()=>Promise.all([n.e(748),
            n.e(848)]).then(()=>()=>n(9848))),
            l("react-google-recaptcha-v3",
            "1.11.0",
            ()=>Promise.all([n.e(748),
            n.e(14)]).then(()=>()=>n(1633))),
            l("react-router",
            "7.18.2",
            ()=>Promise.all([n.e(361),
            n.e(748)]).then(()=>()=>n(9361))),
            l("react-select",
            "5.10.2",
            ()=>Promise.all([n.e(87),
            n.e(748),
            n.e(281)]).then(()=>()=>n(7087))),
            l("react",
            "19.2.8",
            ()=>n.e(888).then(()=>()=>n(3888)))),
            e[r]=i.length?Promise.all(i).then(()=>e[r]=1):1
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
              n+="u"==(typeof(c=e[a]))[0]?"-":(o>0?".":"")+(o=2,
              c);
              return n
            }var s=[];
            for(a=1;
            a<e.length;
            a++){
              var c=e[a];
              s.push(0===c?"not("+l()+")":1===c?"("+l()+" || "+l()+")":2===c?s.pop()+" "+s.pop():t(c))
            }return l();
            function l(){
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
              c=1,
              l=!0;
              ;
              c++,
              s++){
                var i,
                d,
                f=c<t.length?(typeof t[c])[0]:"";
                if(s>=n.length||"o"==(d=(typeof(i=n[s]))[0]))return!l||("u"==f?c>o&&!a:""==f!=a);
                if("u"==d){
                  if(!l||"u"!=f)return!1
                }else if(l)if(f==d)if(c<=o){
                  if(i!=t[c])return!1
                }else{
                  if(a?i>t[c]:i<t[c])return!1;
                  i!=t[c]&&(l=!1)
                }else if("s"!=f&&"n"!=f){
                  if(a||c<=o)return!1;
                  l=!1,
                  c--
                }else{
                  if(c<=o||d<f!=a)return!1;
                  l=!1
                }else"s"!=f&&"n"!=f&&(l=!1,
                c--)
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
          const o=(e,
          t)=>e&&n.o(e,
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
                c=(typeof s)[0];
                if(a!=c)return"o"==a&&"n"==c||"s"==c||"u"==a;
                if("o"!=a&&"u"!=a&&o!=s)return o<s;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          c=e=>function(t,
          r,
          o,
          a,
          s){
            const c=n.I(t);
            return c?.then&&!o?c.then(e.bind(e,
            t,
            n.S[t],
            r,
            !1,
            a,
            s)):e(t,
            n.S[t],
            r,
            o,
            a,
            s)
          },
          l=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          i=c((e,
          t,
          r,
          n,
          c)=>{
            if(!o(t,
            r))return l(e,
            r,
            c);
            const i=s(t,
            r,
            n);
            return a(t[r][i])
          }),
          d=c((e,
          n,
          c,
          i,
          d,
          f)=>{
            if(!o(n,
            c))return l(e,
            c,
            f);
            const u=s(n,
            c,
            i);
            return r(d,
            u)||(p=((e,
            r,
            n,
            o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(n,
            c,
            u,
            d),
            "undefined"!=typeof console&&console.warn&&console.warn(p)),
            a(n[c][u]);
            var p
          }),
          f={
          },
          u={
            5748:()=>i("default",
            "react",
            !1,
            ()=>n.e(888).then(()=>()=>n(3888))),
            5472:()=>i("default",
            "lodash-es",
            !1,
            ()=>n.e(42).then(()=>()=>n(2042))),
            4564:()=>i("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([n.e(775),
            n.e(615)]).then(()=>()=>n(5996))),
            4612:()=>i("default",
            "react-router",
            !1,
            ()=>n.e(361).then(()=>()=>n(9361))),
            3788:()=>i("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([n.e(905),
            n.e(948)]).then(()=>()=>n(6948))),
            4146:()=>d("default",
            "react-google-recaptcha-v3",
            !1,
            [1,
            1,
            11,
            0],
            ()=>n.e(633).then(()=>()=>n(1633))),
            5320:()=>d("default",
            "focus-trap-react",
            !1,
            [1,
            10,
            3,
            1],
            ()=>Promise.all([n.e(155),
            n.e(653)]).then(()=>()=>n(1155))),
            8495:()=>d("default",
            "react-select",
            !1,
            [1,
            5,
            10,
            2],
            ()=>Promise.all([n.e(87),
            n.e(281)]).then(()=>()=>n(7087))),
            9653:()=>d("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>n.e(331).then(()=>()=>n(331))),
            7281:()=>i("default",
            "react-dom",
            !1,
            ()=>n.e(819).then(()=>()=>n(9848)))
          },
          p={
            272:[4564,
            4612],
            281:[7281],
            472:[5472],
            653:[9653],
            748:[5748],
            861:[3788,
            4146,
            5320,
            8495]
          },
          h={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(p,
            e)&&p[e].forEach(e=>{
              if(n.o(f,
              e))return t.push(f[e]);
              if(!h[e]){
                const r=t=>{
                  f[e]=0,
                  n.m[e]=r=>{
                    delete n.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const o=t=>{
                  delete f[e],
                  n.m[e]=r=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const n=u[e]();
                  n.then?t.push(f[e]=n.then(r).catch(o)):r(n)
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
              832:0
            };
            n.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                861:1
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
                    var o=(s=r[n]).getAttribute("data-href")||s.getAttribute("href");
                    if("stylesheet"===s.rel&&(o===e||o===t))return s
                  }var a=document.getElementsByTagName("style");
                  for(n=0;
                  n<a.length;
                  n++){
                    var s;
                    if((o=(s=a[n]).getAttribute("data-href"))===e||o===t)return s
                  }
                })(o,
                a))return t();
                ((e,
                t,
                r,
                o,
                a)=>{
                  var s=document.createElement("link");
                  s.rel="stylesheet",
                  s.type="text/css",
                  n.nc&&(s.nonce=n.nc),
                  s.onerror=s.onload=r=>{
                    if(s.onerror=s.onload=null,
                    "load"===r.type)o();
                    else{
                      var n=r&&r.type,
                      c=r&&r.target&&r.target.href||t,
                      l=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+c+")");
                      l.name="ChunkLoadError",
                      l.code="CSS_CHUNK_LOAD_FAILED",
                      l.type=n,
                      l.request=c,
                      s.parentNode&&s.parentNode.removeChild(s),
                      a(l)
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
            832:0
          };
          n.f.j=(t,
          r)=>{
            let o=n.o(e,
            t)?e[t]:void 0;
            if(0!==o)if(o)r.push(o[2]);
            else if(/^(281|472|653|748)$/.test(t))e[t]=0;
            else{
              const a=new Promise((r,
              n)=>o=e[t]=[r,
              n]);
              r.push(o[2]=a);
              const s=n.p+n.u(t),
              c=new Error,
              l=r=>{
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
              n.l(s,
              l,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[o,
            a,
            s]=r;
            var c,
            l,
            i=0;
            if(o.some(t=>0!==e[t])){
              for(c in a)n.o(a,
              c)&&(n.m[c]=a[c]);
              s&&s(n)
            }for(t&&t(r);
            i<o.length;
            i++)l=o[i],
            n.o(e,
            l)&&e[l]&&e[l][0](),
            e[l]=0
          },
          r=self.webpackChunk_rockstargames_sites_careers=self.webpackChunk_rockstargames_sites_careers||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        n(4769),
        n(6557)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map