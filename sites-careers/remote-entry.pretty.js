try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="94623b10-2f55-4781-8380-2dc7ffc7459f",
  e._sentryDebugIdIdentifier="sentry-dbid-94623b10-2f55-4781-8380-2dc7ffc7459f")
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
    release:"b6778eeff7ac7895a078a070a5c7649a0d5e5d39",
    packageName:"@rockstargames/sites-careers",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"b6778eeff7ac7895a078a070a5c7649a0d5e5d39"
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
          6557(e,
          t,
          r){
            "use strict";
            const n={
              "./bootstrap":()=>Promise.all([r.e(0),
              r.e(748),
              r.e(472),
              r.e(612),
              r.e(836),
              r.e(374)]).then(()=>()=>r(9374)),
              "./index":()=>Promise.all([r.e(0),
              r.e(748),
              r.e(472),
              r.e(612),
              r.e(836),
              r.e(224)]).then(()=>()=>r(7224))
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
            for(var f=2&o&&r;
            ("object"==typeof f||"function"==typeof f)&&!~t.indexOf(f);
            f=e(f))Object.getOwnPropertyNames(f).forEach(e=>s[e]=()=>r[e]);
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
            a=t[r++],
            s=0===a?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:a
            };
            n.o(e,
            o)||Object.defineProperty(e,
            o,
            s)
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
          0:"347dafa732e7adb4e310c07cfb30ac12",
          14:"9fddc16d34a38e9477259c9f330eeca7",
          42:"abef1d15699f3d8feb5ab062a2048da6",
          147:"f9c7dc39819534171d30e29a22051e84",
          224:"ab3a6d54fc02892ca8dc9d4749a3e4ba",
          281:"ae557da4e2d9ff7927ede9633e9ca151",
          346:"e010c6dad60b03293e41bf16825fc7f4",
          374:"5afc51ed2a2118fb04c8265f08c6728d",
          528:"d297104896c48d759c3ef01391d98e2d",
          574:"309cccc9c3af49aab4d143d8a9f7979e",
          612:"266b2af4929f7d1f35144538c74d6679",
          633:"ce239f9dea52a553922b0c569cc61cf2",
          636:"3c34901b9037c4390f6dabfa9b9a1369",
          819:"00adb3b5c262ef9230a971af6e6aee0a",
          836:"fbbf64eb80b3033549fd5392a849901b",
          848:"3ecc136b657a8878bb529469d522306c",
          873:"94d9bed590f64ed8f5c167b1ca863dd6",
          888:"80c5857c418b7f1374d94cba2a2ac6af",
          900:"dec055aaeb2411e28ba98b4d9c13aef2"
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
            let f,
            i;
            if(void 0!==a){
              const e=document.getElementsByTagName("script");
              for(var c=0;
              c<e.length;
              c++){
                const n=e[c];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+a){
                  f=n;
                  break
                }
              }
            }f||(i=!0,
            f=document.createElement("script"),
            f.charset="utf-8",
            n.nc&&f.setAttribute("nonce",
            n.nc),
            f.setAttribute("data-webpack",
            t+a),
            f.src=r),
            e[r]=[o];
            const l=(t,
            n)=>{
              f.onerror=f.onload=null,
              clearTimeout(d);
              const o=e[r];
              if(delete e[r],
              f.parentNode?.removeChild(f),
              o?.forEach(e=>e(n)),
              t)return t(n)
            },
            d=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:f
            }),
            12e4);
            f.onerror=l.bind(null,
            f.onerror),
            f.onload=l.bind(null,
            f.onload),
            i&&document.head.appendChild(f)
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
            f="@rockstargames/sites-careers",
            i=(e,
            t,
            r,
            n)=>{
              const o=s[e]=s[e]||{
              },
              a=o[t];
              (!a||!a.loaded&&(!n!=!a.eager?n:f>a.from))&&(o[t]={
                get:r,
                from:f,
                eager:!!n
              })
            },
            c=[];
            return"default"===r&&(i("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([n.e(873),
            n.e(748),
            n.e(472),
            n.e(147)]).then(()=>()=>n(6147))),
            i("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(0),
            n.e(900),
            n.e(748),
            n.e(472),
            n.e(612),
            n.e(636)]).then(()=>()=>n(1636))),
            i("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([n.e(281),
            n.e(748)]).then(()=>()=>n(6281))),
            i("lodash-es",
            "4.18.1",
            ()=>n.e(42).then(()=>()=>n(2042))),
            i("react-dom",
            "19.2.8",
            ()=>Promise.all([n.e(748),
            n.e(848)]).then(()=>()=>n(9848))),
            i("react-google-recaptcha-v3",
            "1.11.0",
            ()=>Promise.all([n.e(748),
            n.e(14)]).then(()=>()=>n(4014))),
            i("react-router",
            "7.18.4",
            ()=>Promise.all([n.e(574),
            n.e(748)]).then(()=>()=>n(8574))),
            i("react-select",
            "5.10.2",
            ()=>Promise.all([n.e(346),
            n.e(748),
            n.e(662)]).then(()=>()=>n(346))),
            i("react",
            "19.2.8",
            ()=>n.e(888).then(()=>()=>n(3888)))),
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
              n+="u"==(typeof(f=e[a]))[0]?"-":(o>0?".":"")+(o=2,
              f);
              return n
            }var s=[];
            for(a=1;
            a<e.length;
            a++){
              var f=e[a];
              s.push(0===f?"not("+i()+")":1===f?"("+i()+" || "+i()+")":2===f?s.pop()+" "+s.pop():t(f))
            }return i();
            function i(){
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
              f=1,
              i=!0;
              ;
              f++,
              s++){
                var c,
                l,
                d=f<t.length?(typeof t[f])[0]:"";
                if(s>=n.length||"o"==(l=(typeof(c=n[s]))[0]))return!i||("u"==d?f>o&&!a:""==d!=a);
                if("u"==l){
                  if(!i||"u"!=d)return!1
                }else if(i)if(d==l)if(f<=o){
                  if(c!=t[f])return!1
                }else{
                  if(a?c>t[f]:c<t[f])return!1;
                  c!=t[f]&&(i=!1)
                }else if("s"!=d&&"n"!=d){
                  if(a||f<=o)return!1;
                  i=!1,
                  f--
                }else{
                  if(f<=o||l<d!=a)return!1;
                  i=!1
                }else"s"!=d&&"n"!=d&&(i=!1,
                f--)
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
                f=(typeof s)[0];
                if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;
                if("o"!=a&&"u"!=a&&o!=s)return o<s;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          f=e=>function(t,
          r,
          o,
          a,
          s){
            const f=n.I(t);
            return f?.then&&!o?f.then(e.bind(e,
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
          i=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          c=f((e,
          t,
          r,
          n,
          f)=>{
            if(!o(t,
            r))return i(e,
            r,
            f);
            const c=s(t,
            r,
            n);
            return a(t[r][c])
          }),
          l=f((e,
          n,
          f,
          c,
          l,
          d)=>{
            if(!o(n,
            f))return i(e,
            f,
            d);
            const u=s(n,
            f,
            c);
            return r(l,
            u)||(p=((e,
            r,
            n,
            o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(n,
            f,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(p)),
            a(n[f][u]);
            var p
          }),
          d={
          },
          u={
            5748:()=>c("default",
            "react",
            !1,
            ()=>n.e(888).then(()=>()=>n(3888))),
            5472:()=>c("default",
            "lodash-es",
            !1,
            ()=>n.e(42).then(()=>()=>n(2042))),
            3234:()=>c("default",
            "react-router",
            !1,
            ()=>n.e(574).then(()=>()=>n(8574))),
            3788:()=>c("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([n.e(900),
            n.e(636)]).then(()=>()=>n(1636))),
            4564:()=>c("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([n.e(873),
            n.e(528)]).then(()=>()=>n(6147))),
            584:()=>c("default",
            "focus-trap-react",
            !1,
            ()=>n.e(281).then(()=>()=>n(6281))),
            4146:()=>l("default",
            "react-google-recaptcha-v3",
            !1,
            [1,
            1,
            11,
            0],
            ()=>n.e(633).then(()=>()=>n(4014))),
            5908:()=>c("default",
            "react-select",
            !1,
            ()=>Promise.all([n.e(346),
            n.e(662)]).then(()=>()=>n(346))),
            7281:()=>c("default",
            "react-dom",
            !1,
            ()=>n.e(819).then(()=>()=>n(9848)))
          },
          p={
            472:[5472],
            612:[3234,
            3788,
            4564],
            662:[7281],
            748:[5748],
            836:[584,
            4146,
            5908]
          },
          h={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(p,
            e)&&p[e].forEach(e=>{
              if(n.o(d,
              e))return t.push(d[e]);
              if(!h[e]){
                const r=t=>{
                  d[e]=0,
                  n.m[e]=r=>{
                    delete n.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const o=t=>{
                  delete d[e],
                  n.m[e]=r=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const n=u[e]();
                  n.then?t.push(d[e]=n.then(r).catch(o)):r(n)
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
                836:1
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
                      f=r&&r.target&&r.target.href||t,
                      i=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+f+")");
                      i.name="ChunkLoadError",
                      i.code="CSS_CHUNK_LOAD_FAILED",
                      i.type=n,
                      i.request=f,
                      s.parentNode&&s.parentNode.removeChild(s),
                      a(i)
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
            else if(/^(472|662|748)$/.test(t))e[t]=0;
            else{
              const a=new Promise((r,
              n)=>o=e[t]=[r,
              n]);
              r.push(o[2]=a);
              const s=new Error,
              f=r=>{
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
              n.l(n.p+n.u(t),
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[o,
            a,
            s]=r;
            var f,
            i,
            c=0;
            if(o.some(t=>0!==e[t])){
              for(f in a)n.o(a,
              f)&&(n.m[f]=a[f]);
              s&&s(n)
            }for(t&&t(r);
            c<o.length;
            c++)i=o[c],
            n.o(e,
            i)&&e[i]&&e[i][0](),
            e[i]=0
          },
          r=self.webpackChunk_rockstargames_sites_careers=self.webpackChunk_rockstargames_sites_careers||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        n(3069),
        n(6557)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map