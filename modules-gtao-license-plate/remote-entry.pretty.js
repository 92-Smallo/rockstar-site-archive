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
    release:"136564758c4a7767630bddffd54ee47b63e4858a",
    packageName:"@rockstargames/modules-gtao-license-plate",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"136564758c4a7767630bddffd54ee47b63e4858a"
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
          755:"e14abbbce0c720e99617e3fa8e51f9cb",
          947:"f824711f0ce83d860a0076391ff31697",
          1913:"6a9ea83f553c701be7303273898fceff",
          2042:"0735a477bb628484e65976133697b122",
          2497:"c8050c24d67eb07dc9b33c0117178f0e",
          2584:"ab85a398e886a8d86dba1f4f62544136",
          2852:"054c8e15435bd3b11c662b708ad0fa2a",
          2873:"bfc2e75af0c7733b633138da9dbbac4a",
          3099:"6c1efa1260e38dfe50644fb2fc19f4dd",
          3244:"0003b934b587ee19a4884e9783ebdcf4",
          3469:"98e687830dc440a446c9bf5c3d47bdc7",
          3529:"f126b738ba3264b29980a99a3ee57866",
          3612:"3861c5efdb613f1c02c69eca1deded6f",
          3746:"334e68dd711b37bc6fbe0f19467e72ca",
          3793:"4c408475ddf8c998ecea43ff389fa81f",
          3819:"acaf9375ec38c3b3ce02b97a20f42e95",
          3888:"1a85a1c0198a08c1da747d8f9e6b1df3",
          4070:"81a8060ae388f239731d6dc77970bafa",
          4696:"13eff9ea19a262d42d28c34fde86242a",
          4921:"fce318fdbdb30f4ca19deb162b410355",
          5051:"6dc530b8b4b2f613b5cf540f41320410",
          5480:"d8f6c37755717bde4ebbc218588b7d36",
          5485:"209fd71405281e2c93ec40a3cb5382bc",
          5500:"c8c906af21071d41a7f8e9ce3d1512f1",
          5676:"8a6c0d5425e860bf7541d8f138f18a80",
          6147:"189634650120ae5503f4ec53187ead2d",
          6564:"ced609c4163b9d8f1f9ad9d2196a843e",
          6866:"ea1b729edb69854a3a3a8d3da92e9702",
          7158:"fe5e0a33cfc0a7dfcb5eabc06ae479bd",
          7350:"64c31c43091dba67843751b9847dc23d",
          7553:"81b7487a3f0697ed8ecec0edb48ef6d1",
          7974:"be010afb1887ef306d0467c02d6bc812",
          8528:"f60a1ec7e7eccdf5fae7f84efe3601e1",
          8574:"f2e51449701a7e0f167f96f8a2e9a411",
          8671:"3a56fb993b1c9fbd46803d0016f79bd6",
          8894:"959b8f31849ee1c77c27e83cffd0e05a",
          8899:"7ab66eb426a31637615244aa30c77917",
          9090:"e9680dc6f47826af54d19210d02b984b",
          9136:"f7f47cc38625761edd92b7dd2276e9d5",
          9190:"82faf2228b1c601e46496ececc9ec6bb",
          9317:"cdd0d465bc98f400a912f9ab8c33529e",
          9830:"0f8df148e3befd23bbcf4b6af671ea50",
          9848:"697fad7c9d1730ec144e94b614fc67e1"
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
            s;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var f=0;
              f<e.length;
              f++){
                const a=e[f];
                if(a.getAttribute("src")==r||a.getAttribute("data-webpack")==t+o){
                  d=a;
                  break
                }
              }
            }d||(s=!0,
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
            s&&document.head.appendChild(d)
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
            s=(e,
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
            f=[];
            return"default"===r&&(s("@foundry/react",
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
            s("@gsap/react",
            "2.1.2",
            ()=>Promise.all([a.e(5748),
            a.e(5501),
            a.e(3099)]).then(()=>()=>a(3099))),
            s("@react-spring/web",
            "10.1.2",
            ()=>Promise.all([a.e(3244),
            a.e(5748),
            a.e(7281)]).then(()=>()=>a(3244))),
            s("@react-three/drei",
            "10.7.9",
            ()=>Promise.all([a.e(7553),
            a.e(5748),
            a.e(1551),
            a.e(7281),
            a.e(1518),
            a.e(4923),
            a.e(9970)]).then(()=>()=>a(7553))),
            s("@react-three/fiber",
            "9.8.1",
            ()=>Promise.all([a.e(1913),
            a.e(5748),
            a.e(1551)]).then(()=>()=>a(4294))),
            s("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(2873),
            a.e(5748),
            a.e(5472),
            a.e(6147)]).then(()=>()=>a(6147))),
            s("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([a.e(8894),
            a.e(2497),
            a.e(5748),
            a.e(5472),
            a.e(3612),
            a.e(3746)]).then(()=>()=>a(3746))),
            s("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(8894),
            a.e(2497),
            a.e(6564),
            a.e(5748),
            a.e(5472),
            a.e(3612),
            a.e(9090)]).then(()=>()=>a(9090))),
            s("@use-gesture/react",
            "10.3.1",
            ()=>Promise.all([a.e(9136),
            a.e(5748)]).then(()=>()=>a(9136))),
            s("gsap",
            "3.12.5",
            ()=>a.e(3529).then(()=>()=>a(3529))),
            s("jotai",
            "2.20.3",
            ()=>Promise.all([a.e(5500),
            a.e(5748)]).then(()=>()=>a(5500))),
            s("lodash-es",
            "4.18.1",
            ()=>a.e(2042).then(()=>()=>a(2042))),
            s("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(5748),
            a.e(9848)]).then(()=>()=>a(9848))),
            s("react-router",
            "7.18.4",
            ()=>Promise.all([a.e(8574),
            a.e(5748)]).then(()=>()=>a(8574))),
            s("react",
            "19.2.8",
            ()=>a.e(3888).then(()=>()=>a(3888))),
            s("stackblur-canvas",
            "2.7.0",
            ()=>a.e(9830).then(()=>()=>a(9830))),
            s("three-stdlib",
            "2.36.1",
            ()=>Promise.all([a.e(9190),
            a.e(1551)]).then(()=>()=>a(6809))),
            s("three",
            "0.182.0",
            ()=>a.e(3793).then(()=>()=>a(3793)))),
            e[r]=f.length?Promise.all(f).then(()=>e[r]=1):1
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
              c.push(0===d?"not("+s()+")":1===d?"("+s()+" || "+s()+")":2===d?c.pop()+" "+c.pop():t(d))
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
              d=1,
              s=!0;
              ;
              d++,
              c++){
                var f,
                l,
                i=d<t.length?(typeof t[d])[0]:"";
                if(c>=a.length||"o"==(l=(typeof(f=a[c]))[0]))return!s||("u"==i?d>n&&!o:""==i!=o);
                if("u"==l){
                  if(!s||"u"!=i)return!1
                }else if(s)if(i==l)if(d<=n){
                  if(f!=t[d])return!1
                }else{
                  if(o?f>t[d]:f<t[d])return!1;
                  f!=t[d]&&(s=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||d<=n)return!1;
                  s=!1,
                  d--
                }else{
                  if(d<=n||l<i!=o)return!1;
                  s=!1
                }else"s"!=i&&"n"!=i&&(s=!1,
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
          s=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          f=d((e,
          t,
          r,
          a,
          d)=>{
            if(!n(t,
            r))return s(e,
            r,
            d);
            const f=c(t,
            r,
            a);
            return o(t[r][f])
          }),
          l=d((e,
          a,
          d,
          f,
          l,
          i)=>{
            if(!n(a,
            d))return s(e,
            d,
            i);
            const u=c(a,
            d,
            f);
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
            5748:()=>f("default",
            "react",
            !1,
            ()=>a.e(3888).then(()=>()=>a(3888))),
            1551:()=>f("default",
            "three",
            !1,
            ()=>a.e(3793).then(()=>()=>a(3793))),
            7281:()=>f("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(9848))),
            5472:()=>f("default",
            "lodash-es",
            !1,
            ()=>a.e(2042).then(()=>()=>a(2042))),
            3234:()=>f("default",
            "react-router",
            !1,
            ()=>a.e(8574).then(()=>()=>a(8574))),
            3788:()=>f("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(6564),
            a.e(9090)]).then(()=>()=>a(9090))),
            4564:()=>f("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(8528)]).then(()=>()=>a(6147))),
            5501:()=>f("default",
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
            3705:()=>f("default",
            "@gsap/react",
            !1,
            ()=>a.e(5480).then(()=>()=>a(3099))),
            5460:()=>f("default",
            "@react-spring/web",
            !1,
            ()=>a.e(3244).then(()=>()=>a(3244))),
            9970:()=>f("default",
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
            3392:()=>f("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(755)]).then(()=>()=>a(755))),
            5115:()=>f("default",
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
            8130:()=>f("default",
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
                      s=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+d+")");
                      s.name="ChunkLoadError",
                      s.code="CSS_CHUNK_LOAD_FAILED",
                      s.type=a,
                      s.request=d,
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
            s,
            f=0;
            if(n.some(t=>0!==e[t])){
              for(d in o)a.o(o,
              d)&&(a.m[d]=o[d]);
              c&&c(a)
            }for(t&&t(r);
            f<n.length;
            f++)s=n[f],
            a.o(e,
            s)&&e[s]&&e[s][0](),
            e[s]=0
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