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
    release:"2f63c38ab8f479c51122a10f10649e609833a8d6",
    packageName:"@rockstargames/modules-gtao-license-plate",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"2f63c38ab8f479c51122a10f10649e609833a8d6"
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
          755:"29720a5fd62b87cbe63868c90228904b",
          947:"b70d784604268b3ec05f01f3831cde81",
          1913:"826f5d5966250fef28709c3d8661dbfe",
          2042:"599084a07caade20579bc35797b20e03",
          2497:"c8c43f6cf83ab6a4de86c6a7c23aaa89",
          2584:"8c929eaed014b0d34096657663597ce6",
          2852:"caf14a7ec086def59423d4ddc25d156b",
          2873:"167891478a840e6eb4c3c6103b227ee2",
          3099:"2aecb6809cf14e1b3e837ae4ee812e54",
          3244:"cbe7735b3e43f33f65ae1a4fa40e0ec1",
          3469:"2ceb8baa786a4b96927c14879e94b784",
          3529:"e0392570c22b17ad6ce62b53eacf8045",
          3612:"639b5d3b2910a33dda8fdb1f132cd0a1",
          3746:"a20662daa859e963ab83d6874a16aee4",
          3793:"b77e6be734a3d642f1adccc4fe62dbf7",
          3819:"00bb7de28e6cdb06185d56402b48feb0",
          3888:"c1d3504e56747a106b3a3c2d68d5bdf8",
          4070:"d17de3817f21871a8fe9f09cdc55bd6f",
          4696:"4c0e8ad3a0c986891fe5788b7ccf59a8",
          4921:"f1df9e14cfda8ccb08325361da58588e",
          5051:"f5d9fb4dc55457457ffc5318d9ec05db",
          5480:"01cda8a88a875f9c3eec1fdb04b67a50",
          5485:"d5c33caa469fc70a99b57ac3a6ba8bf5",
          5500:"ecc475e2f2432411dd19bd53c272d4fa",
          5676:"41fbfbc46c7103d4cfa684fb8dcd1ccd",
          6147:"fd1bf046f8798b0c0cb9635d6ac694b8",
          6564:"829192de76998ac1820956e14c960c0e",
          6866:"27423bb13370074f3cdf8c4a6426060a",
          7158:"442852c94ae2b8935693074b127cddb2",
          7350:"749b18dedf1a2f47334463af8df50443",
          7553:"06b822f452943c5079550cea88ed430c",
          7974:"e60d433d737dd3a2fa64d8133f9dd901",
          8528:"820272e565be23e0ec44d6cd27d423c4",
          8574:"3d86fd9138d08ae950d49c805318d8de",
          8671:"02d5149f5267810aba79b3311c41b1e7",
          8894:"574107f108c482f97c785480c4b42058",
          8899:"e41706a7824c3f11212a7d4a2424f4ab",
          9090:"d768b8424519525e36bb5cf4c647b31d",
          9136:"6d3e57917dda63dc401c215363389242",
          9190:"f7d77495c8be1e3b705a88886d9d64a3",
          9317:"f334bb1ddba013f3185afd5c5fd3cde5",
          9830:"2fb97480a357e73c5088994bec194af2",
          9848:"831a6850a1a931817b1561c0266eceaf"
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