try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="f0c2993d-0799-424b-94b1-dea65c2a4754",
  e._sentryDebugIdIdentifier="sentry-dbid-f0c2993d-0799-424b-94b1-dea65c2a4754")
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
    release:"b64c845fbd4145dd4934b118ebd89ab3ed32f21c",
    packageName:"@rockstargames/modules-core-videoplayer",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"b64c845fbd4145dd4934b118ebd89ab3ed32f21c"
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
          a){
            (0,
            a(9e3).w)(1)
          },
          9e3(e,
          t,
          a){
            const r=a(1364).y;
            t.w=function(e){
              if(e||(e=1),
              !a.y.meta||!a.y.meta.url)throw console.error("__system_context__",
              a.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p=r(a.y.meta.url,
              e)
            }
          },
          4769(e,
          t,
          a){
            a(5946)
          },
          1364(e,
          t,
          a){
            t.y=function(e,
            t){
              var a=document.createElement("a");
              a.href=e;
              for(var r="/"===a.pathname[0]?a.pathname:"/"+a.pathname,
              n=0,
              o=r.length;
              n!==t&&o>=0;
              )"/"===r[--o]&&n++;
              if(n!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+n+") in the URL path "+e);
              var d=r.slice(0,
              o+1);
              return a.protocol+"//"+a.host+d
            };
            Number.isInteger
          },
          8157(e,
          t,
          a){
            "use strict";
            const r={
              "./bootstrap":()=>a.e(842).then(()=>()=>a(842)),
              "./index":()=>Promise.all([a.e(6085),
              a.e(2977),
              a.e(6199),
              a.e(3635),
              a.e(3082),
              a.e(283),
              a.e(4017),
              a.e(9225),
              a.e(1270),
              a.e(5812),
              a.e(2909),
              a.e(3331),
              a.e(7347),
              a.e(8912),
              a.e(2766),
              a.e(4205),
              a.e(7551)]).then(()=>()=>a(7551)),
              "./tina":()=>a.e(6144).then(()=>()=>a(6144)),
              "./tinaBlockTemplates":()=>a.e(6144).then(()=>()=>a(6144))
            },
            n=(e,
            t)=>(a.R=t,
            t=a.o(r,
            e)?r[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            a.R=void 0,
            t),
            o=(e,
            t)=>{
              if(!a.S)return;
              const r="default",
              n=a.S[r];
              if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return a.S[r]=e,
              a.I(r,
              t)
            };
            a.d(t,
            {
              get:()=>n,
              init:()=>o
            })
          }
        };
        const a={
        };
        function r(t){
          const n=a[t];
          if(void 0!==n)return n.exports;
          const o=a[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(o.exports,
          o,
          o.exports,
          r),
          o.loaded=!0,
          o.exports
        }return r.m=e,
        r.c=a,
        r.y=t,
        r.amdO={
        },
        r.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return r.d(t,
          {
            a:t
          }),
          t
        },
        (()=>{
          const e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;
          let t;
          r.t=function(a,
          n){
            if(1&n&&(a=this(a)),
            8&n)return a;
            if("object"==typeof a&&a){
              if(4&n&&a.__esModule)return a;
              if(16&n&&"function"==typeof a.then)return a
            }const o=Object.create(null);
            r.r(o);
            const d={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var c=2&n&&a;
            ("object"==typeof c||"function"==typeof c)&&!~t.indexOf(c);
            c=e(c))Object.getOwnPropertyNames(c).forEach(e=>d[e]=()=>a[e]);
            return d.default=()=>a,
            r.d(o,
            d),
            o
          }
        })(),
        r.d=(e,
        t)=>{
          if(Array.isArray(t))for(var a=0;
          a<t.length;
          ){
            var n=t[a++],
            o=t[a++];
            r.o(e,
            n)?0===o&&a++:0===o?Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              value:t[a++]
            }):Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              get:o
            })
          }else for(var n in t)r.o(t,
          n)&&!r.o(e,
          n)&&Object.defineProperty(e,
          n,
          {
            enumerable:!0,
            get:t[n]
          })
        },
        r.f={
        },
        r.e=e=>Promise.all(Object.keys(r.f).reduce((t,
        a)=>(r.f[a](e,
        t),
        t),
        [])),
        r.u=e=>"js/"+{
          84:"5d7fcb537a6eea8a4575f71b1153406a",
          162:"56a7013e1bb22f616b6e09a7f7463c5a",
          761:"5a4e7a5897b56ccbc5058a7daf5f8b3b",
          842:"69d85abfdbefd37439441100006b82ca",
          890:"b72e53e5fd804253d80eec589cf63ad6",
          1125:"913c562a0ef7e53fcb76ffd59ca039fb",
          1292:"e1e5407565874cbfbac10141eca8ac03",
          1519:"f917b7706e43650d0c60830d98455acb",
          1605:"bd94a0638961b4153e0061bd6cdd4504",
          1731:"0efcb04a8d22d028dddb26e596edb151",
          2042:"d4735ae91d79a6cf24c322e55f6cc150",
          2272:"2696158e9ace5ca224ee396a19af8423",
          2309:"c14dfa5350c7db590d12a6f103896e8d",
          2329:"4a8e0d2ef6cfd6595dc008721425289a",
          2346:"57c093bb882e6dcb5b31ed9e0e84628a",
          2581:"821fc244c33b5dda83d6eb91d42b9137",
          2977:"7c0bd32ed267ecb55fc18986097e82cc",
          3019:"156e391f651fed485b343fdcbb951c34",
          3195:"d3852be5232d096518e23e38923f0bd4",
          3213:"913a495d848ba13c6e33d3b4ac1dceaa",
          3506:"ddcfc8ef035ebad1948f5178056286cc",
          3529:"f5275f3ed400b280e0b7b6ce8076bdea",
          3770:"fe51d4623421402c9e400010db3521d7",
          4139:"da411b71ca091c09b27b89f73bbde510",
          4205:"ebb5ec04a511c07ceb4e3f8f65a96beb",
          4326:"8578bb690327aa850848118bd5f80f53",
          4514:"345c44f4184572a1ad6945e61579b15e",
          4921:"bcffa78748dfa436f6c3b911873c8d25",
          4971:"19828c3f2a268f1c296308ce3d811e26",
          5096:"941e560643bba3c2e439078a4707087b",
          5505:"c7c81d31bf69e6337fcfd0490b7022af",
          5625:"37636078e9e937c4549912b54822c52a",
          5660:"41092487887160e0058bad0deae0353e",
          5855:"1026e98b5445c336d28e016a5cc92dab",
          6038:"3984b76967b6fa7dc75ed99a13fc05e3",
          6085:"9f52f72e6638466055ece616e82f1bca",
          6123:"4c796893c11c11da50785130319c97ac",
          6144:"f0d9945938b8a5200efbf005b1e27767",
          6199:"1eab7a1aecf2351ae8b75b2d4c929392",
          6295:"39487ac5b3beb05c20ae4b01fa1b38b6",
          6825:"cafbe49af26db666c8660a21b7a1d736",
          6972:"7ae2469edfed541cb708c6fb7cfa98d5",
          7098:"367202c06380fd185a04070230ba7f3b",
          7133:"d123b023c6bc0ff095fc3ec57d0cc74e",
          7212:"6afa2d426ee3104a5ee16d8dd44dbc92",
          7390:"61e6291b22f837917eb90e2ee120edc7",
          7465:"76a786fceb016078673d47005f4b746a",
          7508:"4a4d794eb722dedb7217cf6a31542efe",
          7551:"26680e0835f5ad32a76f9d71c57613e7",
          7555:"162f6e959014478b14f65bd62b11a1db",
          8006:"860ee427dcc68e4138618332d5e2f977",
          8504:"56dc49eb3364de6f857b579354fa333b",
          8509:"749a099615b92f68cb11c283344fa5e5",
          8910:"04f0e7d3dc50232a063da72fbbce6527",
          9206:"d80469763969eb1fb67f38441633bf99",
          9363:"3eb17b3343b0098da57f4327b7828898",
          9793:"c4121317a58d72b62a028d78d937edb3",
          9860:"edd7004f5f8e86fb7532eefe0f723483"
        }[e]+".js",
        r.miniCssF=e=>"css/"+{
          920:"7b2828a98869d3e432c96cb946987be7",
          3635:"5c01f132c6cb5d21be960841e77d81f2",
          4205:"3ad474c309cd5c1de251ca4b0b4bb0ac",
          7098:"f8eb6d777cdd43885a92738fb3b5ec43",
          7133:"406328548351cd78c867617d4aea619c",
          7551:"71d87f7d1fcf7ab23375dcd2f2710464",
          8539:"7b2828a98869d3e432c96cb946987be7",
          9363:"f546cc848e33d8616e02fcb012c13188"
        }[e]+".css",
        r.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        r.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/modules-core-videoplayer:";
          r.l=(a,
          n,
          o,
          d)=>{
            if(e[a])return void e[a].push(n);
            let c,
            f;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var l=0;
              l<e.length;
              l++){
                const r=e[l];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+o){
                  c=r;
                  break
                }
              }
            }c||(f=!0,
            c=document.createElement("script"),
            c.charset="utf-8",
            r.nc&&c.setAttribute("nonce",
            r.nc),
            c.setAttribute("data-webpack",
            t+o),
            c.src=a),
            e[a]=[n];
            const s=(t,
            r)=>{
              c.onerror=c.onload=null,
              clearTimeout(i);
              const n=e[a];
              if(delete e[a],
              c.parentNode?.removeChild(c),
              n?.forEach(e=>e(r)),
              t)return t(r)
            },
            i=setTimeout(s.bind(null,
            void 0,
            {
              type:"timeout",
              target:c
            }),
            12e4);
            c.onerror=s.bind(null,
            c.onerror),
            c.onload=s.bind(null,
            c.onload),
            f&&document.head.appendChild(c)
          }
        })(),
        r.r=e=>{
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
        r.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          r.S={
          };
          const e={
          },
          t={
          };
          r.I=(a,
          n)=>{
            n||(n=[]);
            let o=t[a];
            if(o||(o=t[a]={
            }),
            n.indexOf(o)>=0)return;
            if(n.push(o),
            e[a])return e[a];
            r.o(r.S,
            a)||(r.S[a]={
            });
            const d=r.S[a],
            c="@rockstargames/modules-core-videoplayer",
            f=(e,
            t,
            a,
            r)=>{
              const n=d[e]=d[e]||{
              },
              o=n[t];
              (!o||!o.loaded&&(!r!=!o.eager?r:c>o.from))&&(n[t]={
                get:a,
                from:c,
                eager:!!r
              })
            },
            l=[];
            return"default"===a&&(f("@floating-ui/react",
            "0.27.20",
            ()=>Promise.all([r.e(3213),
            r.e(6295),
            r.e(4139),
            r.e(3082),
            r.e(4017),
            r.e(9793)]).then(()=>()=>r(4139))),
            f("@foundry-int/utils",
            "6.6.1",
            ()=>Promise.all([r.e(7212),
            r.e(1270),
            r.e(8504)]).then(()=>()=>r(8504))),
            f("@foundry-int/utils",
            "6.6.1",
            ()=>Promise.all([r.e(7212),
            r.e(1270),
            r.e(8006)]).then(()=>()=>r(8006))),
            f("@foundry/react",
            "6.6.1",
            ()=>Promise.all([r.e(84),
            r.e(6085),
            r.e(2977),
            r.e(761),
            r.e(3213),
            r.e(7133),
            r.e(7098),
            r.e(3082),
            r.e(4017),
            r.e(1270),
            r.e(5812),
            r.e(7347),
            r.e(8912),
            r.e(2874)]).then(()=>()=>r(2338))),
            f("@gsap/react",
            "2.1.2",
            ()=>Promise.all([r.e(3082),
            r.e(5812),
            r.e(9206)]).then(()=>()=>r(9206))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([r.e(761),
            r.e(3082),
            r.e(283),
            r.e(3506)]).then(()=>()=>r(3506))),
            f("@rsgweb/modules-core-agegate",
            "0.0.0",
            ()=>Promise.all([r.e(84),
            r.e(2977),
            r.e(3082),
            r.e(4017),
            r.e(1270),
            r.e(2909),
            r.e(3331),
            r.e(8912),
            r.e(2766),
            r.e(1292),
            r.e(920)]).then(()=>()=>r(1292))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([r.e(1605),
            r.e(7508),
            r.e(3082),
            r.e(283),
            r.e(9225),
            r.e(2909),
            r.e(2272),
            r.e(3331),
            r.e(8509)]).then(()=>()=>r(8509))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([r.e(1605),
            r.e(5855),
            r.e(3082),
            r.e(283),
            r.e(9225),
            r.e(2909),
            r.e(2272),
            r.e(2054),
            r.e(8910)]).then(()=>()=>r(8910))),
            f("clsx",
            "2.1.1",
            ()=>r.e(4921).then(()=>()=>r(4921))),
            f("focus-trap-react",
            "10.3.1",
            ()=>Promise.all([r.e(6295),
            r.e(4514),
            r.e(3082)]).then(()=>()=>r(4514))),
            f("graphql",
            "16.14.2",
            ()=>r.e(1519).then(()=>()=>r(1519))),
            f("gsap",
            "3.12.5",
            ()=>r.e(3529).then(()=>()=>r(3529))),
            f("hammerjs",
            "2.0.8",
            ()=>r.e(6038).then(()=>()=>r(6038))),
            f("jotai",
            "2.20.2",
            ()=>Promise.all([r.e(3019),
            r.e(3082)]).then(()=>()=>r(3019))),
            f("lodash-es",
            "4.18.1",
            ()=>r.e(2042).then(()=>()=>r(2042))),
            f("react-dom",
            "18.3.1",
            ()=>Promise.all([r.e(162),
            r.e(3082)]).then(()=>()=>r(162))),
            f("react-router-dom",
            "6.30.4",
            ()=>Promise.all([r.e(9860),
            r.e(3082),
            r.e(4017)]).then(()=>()=>r(9860))),
            f("react",
            "18.3.1",
            ()=>r.e(2581).then(()=>()=>r(2581))),
            f("uuid",
            "9.0.1",
            ()=>r.e(3770).then(()=>()=>r(3770)))),
            e[a]=l.length?Promise.all(l).then(()=>e[a]=1):1
          }
        })(),
        (()=>{
          let e;
          r.g.importScripts&&(e=r.g.location+"");
          const t=r.g.document;
          if(!e&&t&&("SCRIPT"===t.currentScript?.tagName.toUpperCase()&&(e=t.currentScript.src),
          !e)){
            const a=t.getElementsByTagName("script");
            if(a.length){
              let t=a.length-1;
              for(;
              t>-1&&(!e||!/^http(s?):/.test(e));
              )e=a[t--].src
            }
          }if(!e)throw new Error("Automatic publicPath is not supported in this browser");
          e=e.replace(/^blob:/,
          "").replace(/#.*$/,
          "").replace(/\?.*$/,
          "").replace(/\/[^\/]+$/,
          "/"),
          r.p=e
        })(),
        (()=>{
          var e=e=>{
            var t=e=>e.split(".").map(e=>+e==e?+e:e),
            a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r=a[1]?t(a[1]):[];
            return a[2]&&(r.length++,
            r.push.apply(r,
            t(a[2]))),
            a[3]&&(r.push([]),
            r.push.apply(r,
            t(a[3]))),
            r
          },
          t=e=>{
            var a=e[0],
            r="";
            if(1===e.length)return"*";
            if(a+.5){
              r+=0==a?">=":-1==a?"<":1==a?"^":2==a?"~":a>0?"=":"!=";
              for(var n=1,
              o=1;
              o<e.length;
              o++)n--,
              r+="u"==(typeof(c=e[o]))[0]?"-":(n>0?".":"")+(n=2,
              c);
              return r
            }var d=[];
            for(o=1;
            o<e.length;
            o++){
              var c=e[o];
              d.push(0===c?"not("+f()+")":1===c?"("+f()+" || "+f()+")":2===c?d.pop()+" "+d.pop():t(c))
            }return f();
            function f(){
              return d.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          a=(t,
          r)=>{
            if(0 in t){
              r=e(r);
              var n=t[0],
              o=n<0;
              o&&(n=-n-1);
              for(var d=0,
              c=1,
              f=!0;
              ;
              c++,
              d++){
                var l,
                s,
                i=c<t.length?(typeof t[c])[0]:"";
                if(d>=r.length||"o"==(s=(typeof(l=r[d]))[0]))return!f||("u"==i?c>n&&!o:""==i!=o);
                if("u"==s){
                  if(!f||"u"!=i)return!1
                }else if(f)if(i==s)if(c<=n){
                  if(l!=t[c])return!1
                }else{
                  if(o?l>t[c]:l<t[c])return!1;
                  l!=t[c]&&(f=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||c<=n)return!1;
                  f=!1,
                  c--
                }else{
                  if(c<=n||s<i!=o)return!1;
                  f=!1
                }else"s"!=i&&"n"!=i&&(f=!1,
                c--)
              }
            }var b=[],
            u=b.pop.bind(b);
            for(d=1;
            d<t.length;
            d++){
              var h=t[d];
              b.push(1==h?u()|u():2==h?u()&u():h?a(h,
              r):!u())
            }return!!u()
          };
          const n=(t,
          a,
          r)=>{
            const n=r?(e=>Object.keys(e).reduce((t,
            a)=>(e[a].eager&&(t[a]=e[a]),
            t),
            {
            }))(t[a]):t[a];
            return Object.keys(n).reduce((t,
            a)=>!t||!n[t].loaded&&((t,
            a)=>{
              t=e(t),
              a=e(a);
              for(var r=0;
              ;
              ){
                if(r>=t.length)return r<a.length&&"u"!=(typeof a[r])[0];
                var n=t[r],
                o=(typeof n)[0];
                if(r>=a.length)return"u"==o;
                var d=a[r],
                c=(typeof d)[0];
                if(o!=c)return"o"==o&&"n"==c||"s"==c||"u"==o;
                if("o"!=o&&"u"!=o&&n!=d)return n<d;
                r++
              }
            })(t,
            a)?a:t,
            0)
          },
          o=(e,
          t,
          a)=>a?a():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          d=(e=>function(t,
          a,
          n,
          o,
          d){
            const c=r.I(t);
            return c?.then&&!n?c.then(e.bind(e,
            t,
            r.S[t],
            a,
            !1,
            o,
            d)):e(t,
            r.S[t],
            a,
            n,
            o,
            d)
          })((e,
          d,
          c,
          f,
          l,
          s)=>{
            if(!((e,
            t)=>e&&r.o(e,
            t))(d,
            c))return o(e,
            c,
            s);
            const i=n(d,
            c,
            f);
            return a(l,
            i)||(u=((e,
            a,
            r,
            n)=>"Unsatisfied version "+r+" from "+(r&&e[a][r].from)+" of shared singleton module "+a+" (required "+t(n)+")")(d,
            c,
            i,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(u)),
            (b=d[c][i]).loaded=1,
            b.get();
            var b,
            u
          }),
          c={
          },
          f={
            3082:()=>d("default",
            "react",
            !1,
            [0],
            ()=>r.e(2581).then(()=>()=>r(2581))),
            283:()=>d("default",
            "lodash-es",
            !1,
            [0],
            ()=>r.e(2042).then(()=>()=>r(2042))),
            4017:()=>d("default",
            "react-dom",
            !1,
            [1,
            18,
            2,
            0],
            ()=>r.e(162).then(()=>()=>r(162))),
            9225:()=>d("default",
            "react-router-dom",
            !1,
            [0],
            ()=>Promise.all([r.e(9860),
            r.e(4017)]).then(()=>()=>r(9860))),
            1270:()=>d("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>r.e(4921).then(()=>()=>r(4921))),
            3431:()=>d("default",
            "gsap",
            !1,
            [0],
            ()=>r.e(3529).then(()=>()=>r(3529))),
            2909:()=>d("default",
            "@rsgweb/locale-tools",
            !1,
            [0],
            ()=>Promise.all([r.e(761),
            r.e(283),
            r.e(1125)]).then(()=>()=>r(3506))),
            3331:()=>d("default",
            "@rsgweb/utils",
            !1,
            [0],
            ()=>Promise.all([r.e(1605),
            r.e(5855),
            r.e(283),
            r.e(9225),
            r.e(2272),
            r.e(7555)]).then(()=>()=>r(8910))),
            7347:()=>d("default",
            "@gsap/react",
            !1,
            [0],
            ()=>r.e(6825).then(()=>()=>r(9206))),
            8912:()=>d("default",
            "@foundry-int/utils",
            !1,
            [0],
            ()=>Promise.all([r.e(7212),
            r.e(5625)]).then(()=>()=>r(8006))),
            2199:()=>d("default",
            "@rsgweb/rockstar-account",
            !1,
            [0],
            ()=>Promise.all([r.e(1605),
            r.e(7508),
            r.e(283),
            r.e(9225),
            r.e(2272),
            r.e(890)]).then(()=>()=>r(8509))),
            2552:()=>d("default",
            "@foundry/react",
            !1,
            [0],
            ()=>Promise.all([r.e(84),
            r.e(6085),
            r.e(761),
            r.e(3213),
            r.e(7133),
            r.e(7098),
            r.e(5812),
            r.e(7347),
            r.e(2874)]).then(()=>()=>r(2338))),
            1038:()=>d("default",
            "focus-trap-react",
            !1,
            [1,
            10,
            2,
            3],
            ()=>Promise.all([r.e(6295),
            r.e(4514)]).then(()=>()=>r(4514))),
            2341:()=>d("default",
            "hammerjs",
            !1,
            [1,
            2,
            0,
            8],
            ()=>r.e(6038).then(()=>()=>r(6038))),
            3816:()=>d("default",
            "@floating-ui/react",
            !1,
            [2,
            0,
            27,
            19],
            ()=>Promise.all([r.e(3213),
            r.e(6295),
            r.e(4139)]).then(()=>()=>r(4139))),
            4815:()=>d("default",
            "uuid",
            !1,
            [1,
            9,
            0,
            1],
            ()=>r.e(3770).then(()=>()=>r(3770))),
            7613:()=>d("default",
            "@rsgweb/modules-core-agegate",
            !1,
            [0],
            ()=>Promise.all([r.e(84),
            r.e(1292),
            r.e(8539)]).then(()=>()=>r(1292))),
            9617:()=>d("default",
            "jotai",
            !1,
            [0],
            ()=>r.e(3019).then(()=>()=>r(3019))),
            2874:()=>d("default",
            "@foundry-int/utils",
            !1,
            [0],
            ()=>Promise.all([r.e(7212),
            r.e(6123)]).then(()=>()=>r(8504))),
            2054:()=>d("default",
            "graphql",
            !1,
            [0],
            ()=>r.e(1519).then(()=>()=>r(1519)))
          },
          l={
            283:[283],
            1270:[1270],
            2054:[2054],
            2766:[2199,
            2552],
            2874:[2874],
            2909:[2909],
            3082:[3082],
            3331:[3331],
            4017:[4017],
            4205:[1038,
            2341,
            3816,
            4815,
            7613,
            9617],
            5812:[3431],
            7347:[7347],
            7555:[2054],
            8912:[8912],
            9225:[9225]
          },
          s={
          };
          r.f.consumes=(e,
          t)=>{
            r.o(l,
            e)&&l[e].forEach(e=>{
              if(r.o(c,
              e))return t.push(c[e]);
              if(!s[e]){
                const a=t=>{
                  c[e]=0,
                  r.m[e]=a=>{
                    delete r.c[e],
                    a.exports=t()
                  }
                };
                s[e]=!0;
                const n=t=>{
                  delete c[e],
                  r.m[e]=a=>{
                    throw delete r.c[e],
                    t
                  }
                };
                try{
                  const r=f[e]();
                  r.then?t.push(c[e]=r.then(a).catch(n)):a(r)
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
            r.f.miniCss=(t,
            a)=>{
              e[t]?a.push(e[t]):0!==e[t]&&{
                920:1,
                3635:1,
                4205:1,
                7098:1,
                7133:1,
                7551:1,
                8539:1,
                9363:1
              }[t]&&a.push(e[t]=(e=>new Promise((t,
              a)=>{
                var n=r.miniCssF(e),
                o=r.p+n;
                if(((e,
                t)=>{
                  for(var a=document.getElementsByTagName("link"),
                  r=0;
                  r<a.length;
                  r++){
                    var n=(d=a[r]).getAttribute("data-href")||d.getAttribute("href");
                    if("stylesheet"===d.rel&&(n===e||n===t))return d
                  }var o=document.getElementsByTagName("style");
                  for(r=0;
                  r<o.length;
                  r++){
                    var d;
                    if((n=(d=o[r]).getAttribute("data-href"))===e||n===t)return d
                  }
                })(n,
                o))return t();
                ((e,
                t,
                a,
                n,
                o)=>{
                  var d=document.createElement("link");
                  d.rel="stylesheet",
                  d.type="text/css",
                  r.nc&&(d.nonce=r.nc),
                  d.onerror=d.onload=a=>{
                    if(d.onerror=d.onload=null,
                    "load"===a.type)n();
                    else{
                      var r=a&&a.type,
                      c=a&&a.target&&a.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+c+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=r,
                      f.request=c,
                      d.parentNode&&d.parentNode.removeChild(d),
                      o(f)
                    }
                  },
                  d.href=t,
                  document.head.appendChild(d)
                })(e,
                o,
                0,
                t,
                a)
              }))(t).then(()=>{
                e[t]=0
              },
              a=>{
                throw delete e[t],
                a
              }))
            }
          }
        })(),
        (()=>{
          const e={
            7614:0
          };
          r.f.j=(t,
          a)=>{
            let n=r.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)a.push(n[2]);
            else if(/^(2(054|766|83|874|909)|3(082|331|635)|92(0|25)|(58|89)12|1270|4017|7347|8539)$/.test(t))e[t]=0;
            else{
              const o=new Promise((a,
              r)=>n=e[t]=[a,
              r]);
              a.push(n[2]=o);
              const d=r.p+r.u(t),
              c=new Error,
              f=a=>{
                if(r.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=a&&("load"===a.type?"missing":a.type),
                  r=a&&a.target&&a.target.src;
                  c.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",
                  c.name="ChunkLoadError",
                  c.type=e,
                  c.request=r,
                  c.event=a,
                  n[1](c)
                }
              };
              r.l(d,
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          a)=>{
            let[n,
            o,
            d]=a;
            var c,
            f,
            l=0;
            if(n.some(t=>0!==e[t])){
              for(c in o)r.o(o,
              c)&&(r.m[c]=o[c]);
              d&&d(r)
            }for(t&&t(a);
            l<n.length;
            l++)f=n[l],
            r.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          a=self.webpackChunk_rockstargames_modules_core_videoplayer=self.webpackChunk_rockstargames_modules_core_videoplayer||[];
          a.forEach(t.bind(null,
          0)),
          a.push=t.bind(null,
          a.push.bind(a))
        })(),
        r.nc=void 0,
        r(4769),
        r(8157)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map