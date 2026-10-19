try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="cf1855cb-27f7-4344-ad38-46fc420076fe",
  e._sentryDebugIdIdentifier="sentry-dbid-cf1855cb-27f7-4344-ad38-46fc420076fe")
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
    packageName:"@rockstargames/modules-gtao-license-plate",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"fb5df338a3004acb163f8eeeb3b5c99e2ad2028a"
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
              r.e(1519)]).then(()=>()=>r(9464))
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
            for(var f=2&n&&r;
            ("object"==typeof f||"function"==typeof f)&&!~t.indexOf(f);
            f=e(f))Object.getOwnPropertyNames(f).forEach(e=>c[e]=()=>r[e]);
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
          1519:"701c5c872fb560ea13256c37ade3bacc",
          1636:"a3f4b92c4522c9948e72a96a5fb8acb2",
          1913:"9fa80cb994b14903c0780639fe65f6e8",
          2042:"88ca74260adca43246c6b6b700b61f77",
          2360:"f9ef7ca9a427f94c252f918d33563e36",
          2438:"2cb9ae73c141d60f39804ece4363a16d",
          2497:"d662cb6b837c1081136fcc0bcb9f2d6c",
          2873:"a13eaae047fabc7279c5d5d48e859d84",
          3099:"90cbd90456d1fb42c228b9b97a20bb79",
          3244:"893f80e54d9fbfb44269cdb2b77626fd",
          3529:"b2af0eb686058206ef2738fa3343c91a",
          3612:"196fc052ef16bb7a89dc3df9b4e7f2de",
          3746:"b4a1a34dfd84415a7c496ef98cb2e690",
          3793:"0a1f1018ba7bd12819a366834a65b49e",
          3819:"168afda4ac3c4fbff410de49d7a6d96e",
          3888:"ab83756571814063c2b597844a39c1c5",
          4070:"66d2f63d3c837dff1055b3a863339b3e",
          4584:"2ddc091bfb92f4a8978ad03763093c57",
          4696:"c3b34019fc294b9961a5797d04ec1944",
          4921:"c50338226ebae67ece8ac02d53261302",
          5073:"ea6d2e11d893741c49dc528148a914b3",
          5290:"e19dc2cc78ee6cadaa4c1118420f5a77",
          5480:"b46a94cc3192253168170c97692050d8",
          5500:"516abb845d55a0f009487daa0438e645",
          6123:"63005ab12c73d7a67101f93ba3cd9a83",
          6147:"76d645cbdc2627398d4352ccf1838253",
          6564:"bf602d6e06cee9cb626b6c69971422a0",
          6589:"35c8016bc169bc4182347c0e1c8b3209",
          7553:"ebcf89e1e4fe2e0c7c60b8a863f3fc74",
          7556:"f2892bb88818faf98d02f6d1420f6c04",
          7794:"fdc57c7552c39cdd00e964a292de9899",
          8277:"31111e713d806d9280f6fb1f08e8d4d5",
          8528:"d2026683c13c387631781c1a151896d3",
          8574:"dca43748256dd01520fdfa945d755d1f",
          8894:"585c0f9a4fe92a756e9d16f2c852cb6d",
          9136:"f7b291ff83bc0ff3d79e8588c3ad12a3",
          9190:"09a0ccf12cda853d623f46243e778182",
          9210:"14e2f2c1ac354d4c8af65c50ab3fb510",
          9384:"79968c08534120e04cdf16a032356487",
          9399:"fc18aa801272a9f6a98552b4397ae942",
          9811:"90b7a519e0096934e30c3e0c9a4163b9",
          9830:"d4c1b0d8445efb170fa4dbba699a2df1",
          9848:"4981381f6536da3600758976098b8cbd"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          1519:"ed3cf0ed48fa45045415f729d775edca",
          5290:"8fe492c4598dc3227b080c16379532c8"
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
            a.nc&&f.setAttribute("nonce",
            a.nc),
            f.setAttribute("data-webpack",
            t+o),
            f.src=r),
            e[r]=[n];
            const l=(t,
            a)=>{
              f.onerror=f.onload=null,
              clearTimeout(i);
              const n=e[r];
              if(delete e[r],
              f.parentNode?.removeChild(f),
              n?.forEach(e=>e(a)),
              t)return t(a)
            },
            i=setTimeout(l.bind(null,
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
            s&&document.head.appendChild(f)
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
            f="@rockstargames/modules-gtao-license-plate",
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
            return"default"===r&&(s("@foundry/react",
            "7.5.1",
            ()=>Promise.all([a.e(2873),
            a.e(8894),
            a.e(5290),
            a.e(5748),
            a.e(7281),
            a.e(5501),
            a.e(1518),
            a.e(6748),
            a.e(4921)]).then(()=>()=>a(5290))),
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
            a.e(1636)]).then(()=>()=>a(1636))),
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
            e[r]=d.length?Promise.all(d).then(()=>e[r]=1):1
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
                l,
                i=f<t.length?(typeof t[f])[0]:"";
                if(c>=a.length||"o"==(l=(typeof(d=a[c]))[0]))return!s||("u"==i?f>n&&!o:""==i!=o);
                if("u"==l){
                  if(!s||"u"!=i)return!1
                }else if(s)if(i==l)if(f<=n){
                  if(d!=t[f])return!1
                }else{
                  if(o?d>t[f]:d<t[f])return!1;
                  d!=t[f]&&(s=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||f<=n)return!1;
                  s=!1,
                  f--
                }else{
                  if(f<=n||l<i!=o)return!1;
                  s=!1
                }else"s"!=i&&"n"!=i&&(s=!1,
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
          n,
          o,
          c){
            const f=a.I(t);
            return f?.then&&!n?f.then(e.bind(e,
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
          d=f((e,
          t,
          r,
          a,
          f)=>{
            if(!n(t,
            r))return s(e,
            r,
            f);
            const d=c(t,
            r,
            a);
            return o(t[r][d])
          }),
          l=f((e,
          a,
          f,
          d,
          l,
          i)=>{
            if(!n(a,
            f))return s(e,
            f,
            i);
            const u=c(a,
            f,
            d);
            return r(l,
            u)||(b=((e,
            r,
            a,
            n)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(n)+")")(a,
            f,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(a[f][u]);
            var b
          }),
          i={
          },
          u={
            5748:()=>d("default",
            "react",
            !1,
            ()=>a.e(3888).then(()=>()=>a(3888))),
            1551:()=>d("default",
            "three",
            !1,
            ()=>a.e(3793).then(()=>()=>a(3793))),
            7281:()=>d("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(9848))),
            5472:()=>d("default",
            "lodash-es",
            !1,
            ()=>a.e(2042).then(()=>()=>a(2042))),
            3234:()=>d("default",
            "react-router",
            !1,
            ()=>a.e(8574).then(()=>()=>a(8574))),
            3788:()=>d("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(6564),
            a.e(1636)]).then(()=>()=>a(1636))),
            4564:()=>d("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(8528)]).then(()=>()=>a(6147))),
            5501:()=>d("default",
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
            3705:()=>d("default",
            "@gsap/react",
            !1,
            ()=>a.e(5480).then(()=>()=>a(3099))),
            5460:()=>d("default",
            "@react-spring/web",
            !1,
            ()=>a.e(3244).then(()=>()=>a(3244))),
            9970:()=>d("default",
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
            5115:()=>d("default",
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
            8130:()=>d("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>a.e(3746).then(()=>()=>a(3746))),
            9248:()=>d("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(5290)]).then(()=>()=>a(5290))),
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
            1519:[936,
            5115,
            7411,
            8130,
            9248],
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
                1519:1,
                5290:1
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
                      f=r&&r.target&&r.target.href||t,
                      s=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+f+")");
                      s.name="ChunkLoadError",
                      s.code="CSS_CHUNK_LOAD_FAILED",
                      s.type=a,
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
              f=r=>{
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
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[n,
            o,
            c]=r;
            var f,
            s,
            d=0;
            if(n.some(t=>0!==e[t])){
              for(f in o)a.o(o,
              f)&&(a.m[f]=o[f]);
              c&&c(a)
            }for(t&&t(r);
            d<n.length;
            d++)s=n[d],
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