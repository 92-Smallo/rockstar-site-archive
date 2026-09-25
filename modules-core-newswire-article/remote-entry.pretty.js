try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="2fa130b2-3efe-4165-9388-4e97968fc4bd",
  e._sentryDebugIdIdentifier="sentry-dbid-2fa130b2-3efe-4165-9388-4e97968fc4bd")
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
    release:"3d0a8e968b6b9cdc352776843baea3ecb65dd356",
    packageName:"@rockstargames/modules-core-newswire-article",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"3d0a8e968b6b9cdc352776843baea3ecb65dd356"
},
System.register(["@rockstargames/modules-core-gif-viewer",
"@rockstargames/modules-core-videoplayer"],
function(e,
t){
  var r={
  },
  a={
  };
  return Object.defineProperty(r,
  "__esModule",
  {
    value:!0
  }),
  Object.defineProperty(a,
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
    },
    function(e){
      a.default=e.default||e,
      Object.keys(e).forEach(function(t){
        a[t]=e[t]
      })
    }],
    execute:function(){
      e((()=>{
        var e={
          65319(e,
          t,
          r){
            (0,
            r(3199).w)(1)
          },
          3199(e,
          t,
          r){
            const a=r(71975).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=a(r.y.meta.url,
              e)
            }
          },
          15188(e,
          t,
          r){
            r(65319)
          },
          71975(e,
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
          55974(e,
          t,
          r){
            "use strict";
            const a={
              "./index":()=>Promise.all([r.e(883),
              r.e(4279),
              r.e(6315),
              r.e(5893),
              r.e(471),
              r.e(1795),
              r.e(9405),
              r.e(8500),
              r.e(5980),
              r.e(7663),
              r.e(5748),
              r.e(5472),
              r.e(3788),
              r.e(4564),
              r.e(7281),
              r.e(3234),
              r.e(1270),
              r.e(6176),
              r.e(8130),
              r.e(1549),
              r.e(2284),
              r.e(2641),
              r.e(1411),
              r.e(6252)]).then(()=>()=>r(56531)),
              "./tinaBlockTemplates":()=>r.e(7369).then(()=>()=>r(57369)),
              "./types":()=>Promise.all([r.e(883),
              r.e(4279),
              r.e(6315),
              r.e(5893),
              r.e(471),
              r.e(1795),
              r.e(9405),
              r.e(8500),
              r.e(5980),
              r.e(7663),
              r.e(5748),
              r.e(5472),
              r.e(3788),
              r.e(4564),
              r.e(7281),
              r.e(3234),
              r.e(1270),
              r.e(6176),
              r.e(8130),
              r.e(1549),
              r.e(2284),
              r.e(2641),
              r.e(1411),
              r.e(6252)]).then(()=>()=>r(4437))
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
          },
          29441(e){
            "use strict";
            e.exports=r
          },
          25136(e){
            "use strict";
            e.exports=a
          }
        };
        const n={
        };
        function o(t){
          const r=n[t];
          if(void 0!==r)return r.exports;
          const a=n[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(a.exports,
          a,
          a.exports,
          o),
          a.loaded=!0,
          a.exports
        }return o.m=e,
        o.c=n,
        o.y=t,
        o.amdO={
        },
        o.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return o.d(t,
          {
            a:t
          }),
          t
        },
        o.cw=e=>{
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
          o.t=function(r,
          a){
            if(1&a&&(r=this(r)),
            8&a)return r;
            if("object"==typeof r&&r){
              if(4&a&&r.__esModule)return r;
              if(16&a&&"function"==typeof r.then)return r
            }const n=Object.create(null);
            o.r(n);
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var d=2&a&&r;
            ("object"==typeof d||"function"==typeof d)&&!~t.indexOf(d);
            d=e(d))Object.getOwnPropertyNames(d).forEach(e=>c[e]=()=>r[e]);
            return c.default=()=>r,
            o.d(n,
            c),
            n
          }
        })(),
        o.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var a=t[r++],
            n=t[r++],
            c=0===n?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:n
            };
            o.o(e,
            a)||Object.defineProperty(e,
            a,
            c)
          }else for(var a in t)o.o(t,
          a)&&!o.o(e,
          a)&&Object.defineProperty(e,
          a,
          {
            enumerable:!0,
            get:t[a]
          })
        },
        o.f={
        },
        o.e=e=>Promise.all(Object.keys(o.f).reduce((t,
        r)=>(o.f[r](e,
        t),
        t),
        [])),
        o.u=e=>"js/"+{
          62:"3ed78b2cb2cf15bcaa7a1ff53f0725e1",
          155:"030ca77e27e17b43870e8faf1f1c2ecc",
          471:"0c5865f984d729eba578e91042dcd529",
          504:"4a3b9a029b8e833ca2568a1163b7c5ac",
          772:"0fffbe8a4691041443d3986775434a36",
          835:"492bf6a3c2f15a8e305ddd65efee8891",
          883:"6157d8360112e72e83afb9e516731f8c",
          928:"f15108f73140fb886eb612cc950ce174",
          975:"42df425f09bf78c3f2580dead81ecf4b",
          1018:"f41e1c2405498a241c4edbb5b9595291",
          1213:"6da964998736591957f95d479fd272a4",
          1440:"cac7ec71da8e9e337561554471a91c2d",
          1549:"5e2c8803b5cdd60ff3f563b355fc5b49",
          1617:"6a21aa250ae2653ed32ac291251e96cc",
          1795:"d57b38b76887d43b119f438652603619",
          2163:"ea99343124fdc5241d678d711b7755f7",
          2225:"8479e1aa40f1a5b2b1867b521c073da8",
          2536:"84b6bd17718a192cbb30707f48c08822",
          2641:"e57c133b32ce381c90388e6aaa52e73d",
          2873:"c2ae2eba3acd9b85212829741cb014d6",
          3819:"52596ff8b86092be6f480c5065b15c63",
          3888:"85b3df6e994fb547cf39fab6bd65b9fb",
          4016:"aefdce0d9494bb0a3ad830bb57680da6",
          4170:"15d04daf6284dc56578ad6021bdfd7f2",
          4279:"5fddca56b593b0ec7b8061cf364e3f9a",
          4309:"eb50295ffe8cf40ae3585e47b9188159",
          4441:"ee0c1920af2e2c7217be3bf09076905b",
          4606:"f265cc50c39f094bbfb853dbbc9f31ce",
          4717:"9a75e7a0e043ef950e45b59641e5b7ca",
          4921:"3a0cf7e1713a699d43ee3cd1bdd178d3",
          5020:"49953a017515b6562e5c9621d5534793",
          5307:"da69f2ee38c97fb35ab0bc0633317743",
          5505:"73110faf23cfbde87ce4b9cfdc024ed9",
          5791:"bd189eab0ace230ebc1bc0f401ef2177",
          5893:"ed988b8ce61fc1b732446778e5e0d468",
          5949:"c3977425656ffeaad00f91d4e01c07df",
          5980:"b24e5ad301385d50c570f2be9fe2ee56",
          6093:"007137e19bf4940fe790128a8ba1119f",
          6252:"9d0209b81ddbb1cb9288563a88541514",
          6315:"3f93dda50f436b556490ca84f7093d96",
          7003:"8063b969d56790900e2829659adec7af",
          7019:"7a104a8bc3f2ea48d2d3d97932101a60",
          7098:"320c6a76f897965940725d4587b120db",
          7369:"3f364e0096b73cd7d52b898edfd4453c",
          7407:"b7f68314dfcfda9c2f8b72bf6eec98b7",
          7587:"4e49d2b6f25c425ec99a3a7ca32f1dac",
          7663:"48f55bb8be715d7d229e377dab1e1c13",
          7929:"8ea59f41ac28452a9234ca9eb34a9138",
          8123:"e1c504f63233f3daaa85decb7d3c9bc6",
          8172:"4c341ead7034dab5d4c8afbbd30d8954",
          8259:"40f36ed4cbcbcf0feee587acbe9fff6b",
          8500:"64df29806f8fda3bbad346badc6f4df2",
          8533:"59efb4cba24ccb003e4996f79c93440e",
          8574:"ffeb30fd3b542decf51a4f59d3dfbbeb",
          8623:"481eec623f772456e7b2ae943bf98fa5",
          8848:"7556a651424ec4d558688a14838916ff",
          8878:"bfcb4159a3ac0f88703adc554396da9d",
          9166:"9b6304d9a07e8150a47ca42b9d83b548",
          9405:"82316e096da9c3b7382c03a356d48b48",
          9458:"17b27c89c5e57018c938fa615f755737",
          9609:"0bc01394493abbf44d45255fa0c4007e",
          9848:"883ef97df4f06f6d9666937ed0193354"
        }[e]+".js",
        o.miniCssF=e=>"css/"+{
          772:"ef81dd31a2acf40a379ebf06814ce854",
          1411:"46051271f23ea9cf79c691cccfe1b525",
          1549:"526aded3f56b17708fb7a3b377e45377",
          2163:"7c575cc0a210038808b12a81bf37629b",
          2207:"101537b924f4411033bd9d2d8536a01a",
          2641:"90181f5f503830695ace14869df4afa3",
          3129:"bfe4e4109fd9c58c236be27a4498cde6",
          4441:"c5961ff45ab2f26ffb7e50308f79c617",
          5307:"274cbb3808816f060f299eae62b8fa57",
          5510:"bfe4e4109fd9c58c236be27a4498cde6",
          6067:"384cddac2173849afd90c4a73e287f5e",
          6252:"876df81e753f5ebe8b22796024a98c13",
          7422:"5afb8bbe9b5dcdd3ae68f70224ec5ac8",
          7663:"f691947139ef5f9627338a86c3283612",
          8500:"bad3eef5cf1e0940195394e84a58de68",
          9166:"384cddac2173849afd90c4a73e287f5e",
          9405:"52e0ceb4a2e6e429ee4f8422067592be",
          9609:"41c7d6822d60ff731131faba38922938"
        }[e]+".css",
        o.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        o.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/modules-core-newswire-article:";
          o.l=(r,
          a,
          n,
          c)=>{
            if(e[r])return void e[r].push(a);
            let d,
            f;
            if(void 0!==n){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const a=e[s];
                if(a.getAttribute("src")==r||a.getAttribute("data-webpack")==t+n){
                  d=a;
                  break
                }
              }
            }d||(f=!0,
            d=document.createElement("script"),
            d.charset="utf-8",
            o.nc&&d.setAttribute("nonce",
            o.nc),
            d.setAttribute("data-webpack",
            t+n),
            d.src=r),
            e[r]=[a];
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
        o.r=e=>{
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
        o.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          const e={
            1411:[31879],
            6252:[64064]
          },
          t={
            31879:["default",
            "./index",
            25136],
            64064:["default",
            "./index",
            29441]
          };
          o.f.remotes=(r,
          a)=>{
            o.o(e,
            r)&&e[r].forEach(e=>{
              let r=o.R;
              r||(r=[]);
              const n=t[e];
              if(r.indexOf(n)>=0)return;
              if(r.push(n),
              n.p)return a.push(n.p);
              const c=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),
                o.m[e]=()=>{
                  throw t
                },
                n.p=0
              },
              d=(e,
              t,
              r,
              o,
              d,
              f)=>{
                try{
                  const s=e(t,
                  r);
                  if(!s?.then)return d(s,
                  o,
                  f);
                  {
                    const e=s.then(e=>d(e,
                    o),
                    c);
                    if(!f)return e;
                    a.push(n.p=e)
                  }
                }catch(e){
                  c(e)
                }
              },
              f=(e,
              t,
              a)=>d(t.get,
              n[1],
              r,
              0,
              s,
              a),
              s=t=>{
                n.p=1,
                o.m[e]=e=>{
                  e.exports=t()
                }
              };
              d(o,
              n[2],
              0,
              0,
              (e,
              t,
              r)=>e?d(o.I,
              n[0],
              0,
              e,
              f,
              r):c(),
              1)
            })
          }
        })(),
        (()=>{
          o.S={
          };
          const e={
          },
          t={
          };
          o.I=(r,
          a)=>{
            a||(a=[]);
            let n=t[r];
            if(n||(n=t[r]={
            }),
            a.indexOf(n)>=0)return;
            if(a.push(n),
            e[r])return e[r];
            o.o(o.S,
            r)||(o.S[r]={
            });
            const c=o.S[r],
            d="@rockstargames/modules-core-newswire-article",
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
            s=e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const n=o(e);
                if(!n)return;
                const c=e=>e&&e.init&&e.init(o.S[r],
                a);
                if(n.then)return l.push(n.then(c,
                t));
                const d=c(n);
                if(d?.then)return l.push(d.catch(t))
              }catch(e){
                t(e)
              }
            },
            l=[];
            return"default"===r&&(f("@foundry/react",
            "7.3.0",
            ()=>Promise.all([o.e(883),
            o.e(4279),
            o.e(5893),
            o.e(471),
            o.e(2873),
            o.e(9405),
            o.e(5307),
            o.e(5748),
            o.e(7281),
            o.e(1270),
            o.e(2163)]).then(()=>()=>o(5307))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([o.e(2873),
            o.e(5748),
            o.e(5472),
            o.e(2536)]).then(()=>()=>o(72536))),
            f("@rsgweb/modules-core-carousel",
            "0.0.0",
            ()=>Promise.all([o.e(883),
            o.e(4279),
            o.e(6315),
            o.e(5893),
            o.e(471),
            o.e(5748),
            o.e(3788),
            o.e(7281),
            o.e(1270),
            o.e(6176),
            o.e(1549),
            o.e(2207),
            o.e(4441)]).then(()=>()=>o(27019))),
            f("@rsgweb/modules-core-engagement",
            "0.0.0",
            ()=>Promise.all([o.e(883),
            o.e(6315),
            o.e(5893),
            o.e(471),
            o.e(1795),
            o.e(8500),
            o.e(5748),
            o.e(5472),
            o.e(3788),
            o.e(4564),
            o.e(7281),
            o.e(3234),
            o.e(1270),
            o.e(6176),
            o.e(8130),
            o.e(2284),
            o.e(6093),
            o.e(2641),
            o.e(3129)]).then(()=>()=>o(96697))),
            f("@rsgweb/modules-core-group-of-items",
            "0.0.0",
            ()=>Promise.all([o.e(883),
            o.e(4279),
            o.e(6315),
            o.e(5893),
            o.e(5748),
            o.e(3788),
            o.e(7281),
            o.e(1270),
            o.e(6176),
            o.e(1549),
            o.e(1411),
            o.e(9609)]).then(()=>()=>o(50772))),
            f("@rsgweb/modules-core-highlights",
            "0.0.0",
            ()=>Promise.all([o.e(6315),
            o.e(1795),
            o.e(5980),
            o.e(5748),
            o.e(4564),
            o.e(6176),
            o.e(8130),
            o.e(2284),
            o.e(7422),
            o.e(2225)]).then(()=>()=>o(12225))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([o.e(7587),
            o.e(5748),
            o.e(5472),
            o.e(3788),
            o.e(4564),
            o.e(3234),
            o.e(1617),
            o.e(4717)]).then(()=>()=>o(27098))),
            f("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([o.e(883),
            o.e(4309),
            o.e(8623),
            o.e(5748),
            o.e(5472),
            o.e(3788),
            o.e(4564),
            o.e(7281),
            o.e(8130),
            o.e(8259),
            o.e(4170),
            o.e(9166)]).then(()=>()=>o(95127))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([o.e(7587),
            o.e(7407),
            o.e(5748),
            o.e(5472),
            o.e(3788),
            o.e(4564),
            o.e(3234),
            o.e(1617),
            o.e(8259),
            o.e(5791)]).then(()=>()=>o(75791))),
            f("clsx",
            "2.1.1",
            ()=>o.e(4921).then(()=>()=>o(4921))),
            f("dompurify",
            "2.5.9",
            ()=>o.e(62).then(()=>()=>o(50062))),
            f("lodash-es",
            "4.18.1",
            ()=>Promise.all([o.e(4309),
            o.e(5505)]).then(()=>()=>o(65505))),
            f("react-dom",
            "19.2.8",
            ()=>Promise.all([o.e(5748),
            o.e(9848)]).then(()=>()=>o(79848))),
            f("react-intersection-observer",
            "9.16.0",
            ()=>Promise.all([o.e(5748),
            o.e(8123)]).then(()=>()=>o(68123))),
            f("react-jsx-parser",
            "2.4.1",
            ()=>Promise.all([o.e(5949),
            o.e(5748)]).then(()=>()=>o(45949))),
            f("react-router",
            "7.18.4",
            ()=>Promise.all([o.e(8574),
            o.e(5748)]).then(()=>()=>o(68574))),
            f("react",
            "19.2.8",
            ()=>o.e(3888).then(()=>()=>o(83888))),
            f("text-balancer",
            "1.0.5",
            ()=>o.e(4016).then(()=>()=>o(34016))),
            s(25136),
            s(29441)),
            l.length?e[r]=Promise.all(l).then(()=>e[r]=1):e[r]=1
          }
        })(),
        (()=>{
          let e;
          o.g.importScripts&&(e=o.g.location+"");
          const t=o.g.document;
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
          o.p=e
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
          const a=(e,
          t)=>e&&o.o(e,
          t),
          n=e=>(e.loaded=1,
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
          a,
          n,
          c){
            const d=o.I(t);
            return d?.then&&!a?d.then(e.bind(e,
            t,
            o.S[t],
            r,
            !1,
            n,
            c)):e(t,
            o.S[t],
            r,
            a,
            n,
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
          o,
          d)=>{
            if(!a(t,
            r))return f(e,
            r,
            d);
            const s=c(t,
            r,
            o);
            return n(t[r][s])
          }),
          l=d((e,
          o,
          d,
          s,
          l,
          i)=>{
            if(!a(o,
            d))return f(e,
            d,
            i);
            const u=c(o,
            d,
            s);
            return r(l,
            u)||(b=((e,
            r,
            a,
            n)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(n)+")")(o,
            d,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            n(o[d][u]);
            var b
          }),
          i={
          },
          u={
            95748:()=>s("default",
            "react",
            !1,
            ()=>o.e(3888).then(()=>()=>o(83888))),
            75472:()=>s("default",
            "lodash-es",
            !1,
            ()=>Promise.all([o.e(4309),
            o.e(5505)]).then(()=>()=>o(65505))),
            43788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([o.e(7587),
            o.e(7407),
            o.e(5472),
            o.e(4564),
            o.e(3234),
            o.e(1617),
            o.e(8259),
            o.e(8172)]).then(()=>()=>o(75791))),
            14564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([o.e(2873),
            o.e(5472),
            o.e(155)]).then(()=>()=>o(72536))),
            57281:()=>s("default",
            "react-dom",
            !1,
            ()=>o.e(3819).then(()=>()=>o(79848))),
            93234:()=>s("default",
            "react-router",
            !1,
            ()=>o.e(8574).then(()=>()=>o(68574))),
            81270:()=>l("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>o.e(4921).then(()=>()=>o(4921))),
            66176:()=>s("default",
            "@rsgweb/tina",
            !1,
            ()=>Promise.all([o.e(883),
            o.e(4309),
            o.e(8623),
            o.e(5472),
            o.e(3788),
            o.e(4564),
            o.e(7281),
            o.e(8130),
            o.e(8259),
            o.e(4170),
            o.e(6067)]).then(()=>()=>o(95127))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([o.e(7587),
            o.e(5472),
            o.e(3788),
            o.e(3234),
            o.e(1617),
            o.e(7098)]).then(()=>()=>o(27098))),
            52284:()=>l("default",
            "react-intersection-observer",
            !1,
            [1,
            9,
            16,
            0],
            ()=>o.e(504).then(()=>()=>o(68123))),
            9377:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([o.e(4279),
            o.e(2873),
            o.e(9405),
            o.e(5307)]).then(()=>()=>o(5307))),
            91681:()=>l("default",
            "dompurify",
            !1,
            [1,
            2,
            5,
            9],
            ()=>o.e(62).then(()=>()=>o(50062))),
            9992:()=>s("default",
            "@rsgweb/modules-core-engagement",
            !1,
            ()=>Promise.all([o.e(6093),
            o.e(5510)]).then(()=>()=>o(96697))),
            26093:()=>s("default",
            "@rsgweb/modules-core-group-of-items",
            !1,
            ()=>o.e(772).then(()=>()=>o(50772))),
            43977:()=>l("default",
            "react-jsx-parser",
            !1,
            [1,
            2,
            4,
            1],
            ()=>o.e(5949).then(()=>()=>o(45949))),
            53388:()=>s("default",
            "@rsgweb/modules-core-highlights",
            !1,
            ()=>Promise.all([o.e(7422),
            o.e(4606)]).then(()=>()=>o(12225))),
            73890:()=>s("default",
            "@rsgweb/modules-core-carousel",
            !1,
            ()=>Promise.all([o.e(2207),
            o.e(7019)]).then(()=>()=>o(27019))),
            87486:()=>l("default",
            "text-balancer",
            !1,
            [1,
            1,
            0,
            5],
            ()=>o.e(4016).then(()=>()=>o(34016)))
          },
          b={
            1270:[81270],
            1411:[91681],
            2284:[52284],
            2641:[9377],
            3234:[93234],
            3788:[43788],
            4564:[14564],
            5472:[75472],
            5748:[95748],
            6176:[66176],
            6252:[9992,
            26093,
            43977,
            53388,
            73890,
            87486],
            7281:[57281],
            8130:[8130]
          },
          h={
          };
          o.f.consumes=(e,
          t)=>{
            o.o(b,
            e)&&b[e].forEach(e=>{
              if(o.o(i,
              e))return t.push(i[e]);
              if(!h[e]){
                const r=t=>{
                  i[e]=0,
                  o.m[e]=r=>{
                    delete o.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const a=t=>{
                  delete i[e],
                  o.m[e]=r=>{
                    throw delete o.c[e],
                    t
                  }
                };
                try{
                  const n=u[e]();
                  n.then?t.push(i[e]=n.then(r).catch(a)):r(n)
                }catch(e){
                  a(e)
                }
              }
            })
          }
        })(),
        (()=>{
          if("undefined"!=typeof document){
            var e={
              6947:0
            };
            o.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                772:1,
                1411:1,
                1549:1,
                2163:1,
                2207:1,
                2641:1,
                3129:1,
                4441:1,
                5307:1,
                5510:1,
                6067:1,
                6252:1,
                7422:1,
                7663:1,
                8500:1,
                9166:1,
                9405:1,
                9609:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var a=o.miniCssF(e),
                n=o.p+a;
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
                })(a,
                n))return t();
                ((e,
                t,
                r,
                a,
                n)=>{
                  var c=document.createElement("link");
                  c.rel="stylesheet",
                  c.type="text/css",
                  o.nc&&(c.nonce=o.nc),
                  c.onerror=c.onload=r=>{
                    if(c.onerror=c.onload=null,
                    "load"===r.type)a();
                    else{
                      var o=r&&r.type,
                      d=r&&r.target&&r.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+d+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=o,
                      f.request=d,
                      c.parentNode&&c.parentNode.removeChild(c),
                      n(f)
                    }
                  },
                  c.href=t,
                  document.head.appendChild(c)
                })(e,
                n,
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
            6947:0
          };
          o.f.j=(t,
          r)=>{
            let a=o.o(e,
            t)?e[t]:void 0;
            if(0!==a)if(a)r.push(a[2]);
            else if(/^(22(07|84)|3(129|234|788)|5(472|510|748)|1270|1411|4564|6067|6176|7281|7422|8130)$/.test(t))e[t]=0;
            else{
              const n=new Promise((r,
              n)=>a=e[t]=[r,
              n]);
              r.push(a[2]=n);
              const c=new Error,
              d=r=>{
                if(o.o(e,
                t)&&(a=e[t],
                0!==a&&(e[t]=void 0),
                a)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  n=r&&r.target&&r.target.src;
                  c.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",
                  c.name="ChunkLoadError",
                  c.type=e,
                  c.request=n,
                  c.event=r,
                  a[1](c)
                }
              };
              o.l(o.p+o.u(t),
              d,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[a,
            n,
            c]=r;
            var d,
            f,
            s=0;
            if(a.some(t=>0!==e[t])){
              for(d in n)o.o(n,
              d)&&(o.m[d]=n[d]);
              c&&c(o)
            }for(t&&t(r);
            s<a.length;
            s++)f=a[s],
            o.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          r=self.webpackChunk_rockstargames_modules_core_newswire_article=self.webpackChunk_rockstargames_modules_core_newswire_article||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        o.nc=void 0,
        o(15188),
        o(55974)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map