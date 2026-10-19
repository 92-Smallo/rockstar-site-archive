try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="376179f6-04fb-4c1f-ae95-716e49eb6d3c",
  e._sentryDebugIdIdentifier="sentry-dbid-376179f6-04fb-4c1f-ae95-716e49eb6d3c")
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
    release:"8ba0f60a1de21e4068d6f133a9593fb2aa35e4e4",
    packageName:"@rockstargames/modules-core-videoplayer",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"8ba0f60a1de21e4068d6f133a9593fb2aa35e4e4"
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
          8157(e,
          t,
          r){
            "use strict";
            const a={
              "./bootstrap":()=>r.e(9374).then(()=>()=>r(9374)),
              "./index":()=>Promise.all([r.e(7740),
              r.e(994),
              r.e(5174),
              r.e(7739),
              r.e(5748),
              r.e(5472),
              r.e(3234),
              r.e(5641),
              r.e(7281),
              r.e(5501),
              r.e(1270),
              r.e(3705),
              r.e(4592),
              r.e(9199),
              r.e(7972),
              r.e(3202)]).then(()=>()=>r(3202)),
              "./tina":()=>r.e(9276).then(()=>()=>r(9276)),
              "./tinaBlockTemplates":()=>r.e(9276).then(()=>()=>r(9276))
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
          165:"5a70edd93509169017fb818ca5b1acd1",
          446:"aeef26e393c0c3d2b5d94db5d54690bb",
          658:"f3bedd55ef6c18d52ed2099fd83beed7",
          994:"88aaa132b6cee9186c4b01e705ca6d70",
          1519:"4eb66658a86cf104b39758f09da8a4f4",
          1633:"ab5aa3386293a50d7eaaa0947f64d514",
          1652:"35f1de45365b9ee1155e12b48a4e75cc",
          2042:"58d48ae6bb9e35d9bf4a47ae4a0f98a9",
          2360:"365d6485cd7d9185aab203ebdb972d2f",
          2438:"518c001a0774aeedc79001991ea937cd",
          2497:"333a4c39a8a4705431d1efb5dca8c24c",
          2856:"eafb66443dcd106957bb103106756b84",
          2873:"63f264ee642cfbfb92b288e14ff6b570",
          3037:"857c435216ebcff5c782a889054bfd90",
          3099:"74787661886a8e7ffce9db4e743b5426",
          3202:"e9a36cf6156e2372fc97c6152024d6df",
          3529:"29f2f73e3be18de43cf790f96caafe62",
          3612:"3d40c40f89a9f10d70d852307eea5749",
          3770:"5c65924d7479733f922e1d69c38d04c7",
          3819:"0f878ce2e36a28bc7617df41317724f2",
          3888:"aad2e42308874184acff4a8592dbb0d5",
          3894:"0cf939ad9776a6724f5ee071e0948a8e",
          4584:"b45bc6c41eb00724298745b631e81485",
          4910:"b5be7daa3516f0b08ba4641ce3b1d342",
          4921:"cf996c01ecc2b32bcfd20edd040fa61c",
          5073:"5c2b24375e1f40d36996e8b1f6955886",
          5174:"edccc08760e3efd1d004122add3747f8",
          5373:"2afe9d5b26eb61f8416224c33cf1dd23",
          5480:"dc97f168ea1033fdd981261b51810471",
          5500:"678c50eac20d7d43705d9da101aeb8b6",
          5708:"6a3d707eb20098391c701d23d62278f1",
          6038:"43632082c3141e3b7aaae606a88ab566",
          6123:"c8d26bb6827a724ceee6435d545973af",
          6147:"44bad219c368fe0bc49dc3c3304ca8dc",
          6281:"19444ab9ffe62296970bf40582639e01",
          6295:"d30657894150750becb76df3997e53dc",
          6589:"d2983d2f6cd7a7efb42dd542224bb83a",
          6911:"b79e530d955c2302215ef75842f3108a",
          7556:"cc503f69efa573a38527ca71fee50881",
          7679:"cb26c72f0f601425ef1c60449e92b98a",
          7740:"49ef491cd9b7e02cb71dafd102735607",
          7794:"b7a78b84c3b3edf4a98f94c3023febb5",
          7972:"c3d9f243213fe0ac96c806a9d7f889d9",
          8277:"b3c247f1bcd7e196e241ea5354879daf",
          8528:"d5666bf6466364ec8b771dc8c6c52ab7",
          8574:"aa3e06299734b52bf826cf84dfc4fc06",
          8876:"04533e86c3102ee3b38db01e6153c9b6",
          9181:"05c129ca789c0753bec64e642c63b179",
          9210:"2bf1c85bd9e0ae7d7c51a2c0c886416f",
          9271:"4960d0be9bd44bb34046d72afeac15d6",
          9276:"eed6b5827a5ffd9a859f54ab44b95b16",
          9292:"9c042b5f113b495d8c11f3aee433de09",
          9374:"c2b33b7c5c47c0a1ae84783fa445bef3",
          9384:"341db82f95da7bdb4935d42c074a16d4",
          9399:"14383a5f38f09c905e5f2db8e0f763e7",
          9811:"d5553383fe7c527e0f72860a6746cb2d",
          9848:"3a59c2be6034793f4665152fd04d7c3f"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          165:"f546cc848e33d8616e02fcb012c13188",
          2781:"0902caa96420fc9df874d2d4044947db",
          3202:"71d87f7d1fcf7ab23375dcd2f2710464",
          4910:"fcedfe8e9d754990e1633abd941447ce",
          5162:"0902caa96420fc9df874d2d4044947db",
          7679:"f2ea4f8626138482e82246ee9d72121a",
          7739:"5c01f132c6cb5d21be960841e77d81f2",
          7972:"7342d6b5aa1da756453edefde998e6ec"
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
          t="@rockstargames/modules-core-videoplayer:";
          a.l=(r,
          n,
          o,
          c)=>{
            if(e[r])return void e[r].push(n);
            let d,
            f;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const a=e[s];
                if(a.getAttribute("src")==r||a.getAttribute("data-webpack")==t+o){
                  d=a;
                  break
                }
              }
            }d||(f=!0,
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
            f&&document.head.appendChild(d)
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
            d="@rockstargames/modules-core-videoplayer",
            f=(e,
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
            s=[];
            return"default"===r&&(f("@floating-ui/react",
            "0.27.20",
            ()=>Promise.all([a.e(5708),
            a.e(6295),
            a.e(8876),
            a.e(5748),
            a.e(7281),
            a.e(9292)]).then(()=>()=>a(8876))),
            f("@foundry-int/utils",
            "7.5.1",
            ()=>Promise.all([a.e(9181),
            a.e(1270),
            a.e(5373)]).then(()=>()=>a(9181))),
            f("@foundry/react",
            "7.5.1",
            ()=>Promise.all([a.e(8277),
            a.e(1633),
            a.e(7740),
            a.e(994),
            a.e(2873),
            a.e(5708),
            a.e(4910),
            a.e(7679),
            a.e(5748),
            a.e(7281),
            a.e(5501),
            a.e(1270),
            a.e(3705),
            a.e(4592)]).then(()=>()=>a(4044))),
            f("@gsap/react",
            "2.1.2",
            ()=>Promise.all([a.e(5748),
            a.e(5501),
            a.e(3099)]).then(()=>()=>a(3099))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(2873),
            a.e(5748),
            a.e(5472),
            a.e(6147)]).then(()=>()=>a(6147))),
            f("@rsgweb/modules-core-agegate",
            "0.0.0",
            ()=>Promise.all([a.e(1633),
            a.e(994),
            a.e(5748),
            a.e(5641),
            a.e(7281),
            a.e(1270),
            a.e(4592),
            a.e(9199),
            a.e(446),
            a.e(2781)]).then(()=>()=>a(446))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(5748),
            a.e(5472),
            a.e(3234),
            a.e(5641),
            a.e(3612),
            a.e(1652)]).then(()=>()=>a(1652))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(3894),
            a.e(5748),
            a.e(5472),
            a.e(3234),
            a.e(5641),
            a.e(3612),
            a.e(2856),
            a.e(6911)]).then(()=>()=>a(1636))),
            f("clsx",
            "2.1.1",
            ()=>a.e(4921).then(()=>()=>a(4921))),
            f("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([a.e(6295),
            a.e(6281),
            a.e(5748)]).then(()=>()=>a(6281))),
            f("graphql",
            "16.14.2",
            ()=>a.e(1519).then(()=>()=>a(1519))),
            f("gsap",
            "3.12.5",
            ()=>a.e(3529).then(()=>()=>a(3529))),
            f("hammerjs",
            "2.0.8",
            ()=>a.e(6038).then(()=>()=>a(6038))),
            f("jotai",
            "2.20.3",
            ()=>Promise.all([a.e(5500),
            a.e(5748)]).then(()=>()=>a(5500))),
            f("lodash-es",
            "4.18.1",
            ()=>a.e(2042).then(()=>()=>a(2042))),
            f("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(5748),
            a.e(9848)]).then(()=>()=>a(9848))),
            f("react-router",
            "7.18.4",
            ()=>Promise.all([a.e(8574),
            a.e(5748)]).then(()=>()=>a(8574))),
            f("react",
            "19.2.8",
            ()=>a.e(3888).then(()=>()=>a(3888))),
            f("uuid",
            "9.0.1",
            ()=>a.e(3770).then(()=>()=>a(3770)))),
            e[r]=s.length?Promise.all(s).then(()=>e[r]=1):1
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
              c.push(0===d?"not("+f()+")":1===d?"("+f()+" || "+f()+")":2===d?c.pop()+" "+c.pop():t(d))
            }return f();
            function f(){
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
              f=!0;
              ;
              d++,
              c++){
                var s,
                l,
                i=d<t.length?(typeof t[d])[0]:"";
                if(c>=a.length||"o"==(l=(typeof(s=a[c]))[0]))return!f||("u"==i?d>n&&!o:""==i!=o);
                if("u"==l){
                  if(!f||"u"!=i)return!1
                }else if(f)if(i==l)if(d<=n){
                  if(s!=t[d])return!1
                }else{
                  if(o?s>t[d]:s<t[d])return!1;
                  s!=t[d]&&(f=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||d<=n)return!1;
                  f=!1,
                  d--
                }else{
                  if(d<=n||l<i!=o)return!1;
                  f=!1
                }else"s"!=i&&"n"!=i&&(f=!1,
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
          f=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=d((e,
          t,
          r,
          a,
          d)=>{
            if(!n(t,
            r))return f(e,
            r,
            d);
            const s=c(t,
            r,
            a);
            return o(t[r][s])
          }),
          l=d((e,
          a,
          d,
          s,
          l,
          i)=>{
            if(!n(a,
            d))return f(e,
            d,
            i);
            const u=c(a,
            d,
            s);
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
            5748:()=>s("default",
            "react",
            !1,
            ()=>a.e(3888).then(()=>()=>a(3888))),
            5472:()=>s("default",
            "lodash-es",
            !1,
            ()=>a.e(2042).then(()=>()=>a(2042))),
            3234:()=>s("default",
            "react-router",
            !1,
            ()=>a.e(8574).then(()=>()=>a(8574))),
            3788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(3894),
            a.e(5472),
            a.e(3234),
            a.e(3612),
            a.e(2856)]).then(()=>()=>a(1636))),
            4564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(5472),
            a.e(8528)]).then(()=>()=>a(6147))),
            7281:()=>s("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(9848))),
            5501:()=>s("default",
            "gsap",
            !1,
            ()=>a.e(3529).then(()=>()=>a(3529))),
            1270:()=>l("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(4921).then(()=>()=>a(4921))),
            3705:()=>s("default",
            "@gsap/react",
            !1,
            ()=>a.e(5480).then(()=>()=>a(3099))),
            4592:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>a.e(9181).then(()=>()=>a(9181))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(5472),
            a.e(3234),
            a.e(3612),
            a.e(9271)]).then(()=>()=>a(1652))),
            9248:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(1633),
            a.e(7740),
            a.e(2873),
            a.e(5708),
            a.e(4910),
            a.e(7679),
            a.e(5501),
            a.e(3705)]).then(()=>()=>a(4044))),
            584:()=>s("default",
            "focus-trap-react",
            !1,
            ()=>Promise.all([a.e(6295),
            a.e(6281)]).then(()=>()=>a(6281))),
            1639:()=>l("default",
            "@floating-ui/react",
            !1,
            [2,
            0,
            27,
            20],
            ()=>Promise.all([a.e(5708),
            a.e(6295),
            a.e(8876)]).then(()=>()=>a(8876))),
            2341:()=>l("default",
            "hammerjs",
            !1,
            [1,
            2,
            0,
            8],
            ()=>a.e(6038).then(()=>()=>a(6038))),
            3424:()=>s("default",
            "@rsgweb/modules-core-agegate",
            !1,
            ()=>Promise.all([a.e(1633),
            a.e(446),
            a.e(5162)]).then(()=>()=>a(446))),
            4815:()=>l("default",
            "uuid",
            !1,
            [1,
            9,
            0,
            1],
            ()=>a.e(3770).then(()=>()=>a(3770))),
            5115:()=>s("default",
            "jotai",
            !1,
            ()=>a.e(5500).then(()=>()=>a(5500))),
            6647:()=>s("default",
            "graphql",
            !1,
            ()=>a.e(1519).then(()=>()=>a(1519)))
          },
          b={
            1270:[1270],
            2856:[6647],
            3234:[3234],
            3705:[3705],
            4592:[4592],
            5472:[5472],
            5501:[5501],
            5641:[3788,
            4564],
            5748:[5748],
            7281:[7281],
            7972:[584,
            1639,
            2341,
            3424,
            4815,
            5115],
            9199:[8130,
            9248]
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
              7614:0
            };
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                165:1,
                2781:1,
                3202:1,
                4910:1,
                5162:1,
                7679:1,
                7739:1,
                7972:1
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
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+d+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=a,
                      f.request=d,
                      c.parentNode&&c.parentNode.removeChild(c),
                      o(f)
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
            7614:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(5(162|472|501|641|748)|(27|72)81|1270|3234|3705|4592|7739|9199)$/.test(t))e[t]=0;
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
            f,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(d in o)a.o(o,
              d)&&(a.m[d]=o[d]);
              c&&c(a)
            }for(t&&t(r);
            s<n.length;
            s++)f=n[s],
            a.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          r=self.webpackChunk_rockstargames_modules_core_videoplayer=self.webpackChunk_rockstargames_modules_core_videoplayer||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(3069),
        a(8157)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map