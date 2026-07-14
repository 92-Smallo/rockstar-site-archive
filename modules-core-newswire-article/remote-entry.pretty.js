try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="903c249a-512d-40f1-be53-9d3b9ca0dfb8",
  e._sentryDebugIdIdentifier="sentry-dbid-903c249a-512d-40f1-be53-9d3b9ca0dfb8")
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
    release:"ed43b2f257dbe26369c90120659330272bc05587",
    packageName:"@rockstargames/modules-core-newswire-article",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"ed43b2f257dbe26369c90120659330272bc05587"
},
System.register(["@rockstargames/modules-core-gif-viewer",
"@rockstargames/modules-core-videoplayer"],
function(e,
t){
  var a={
  },
  r={
  };
  return Object.defineProperty(a,
  "__esModule",
  {
    value:!0
  }),
  Object.defineProperty(r,
  "__esModule",
  {
    value:!0
  }),
  {
    setters:[function(e){
      a.default=e.default||e,
      Object.keys(e).forEach(function(t){
        a[t]=e[t]
      })
    },
    function(e){
      r.default=e.default||e,
      Object.keys(e).forEach(function(t){
        r[t]=e[t]
      })
    }],
    execute:function(){
      e((()=>{
        var e={
          64801(e,
          t,
          a){
            (0,
            a(26745).w)(1)
          },
          26745(e,
          t,
          a){
            const r=a(86029).y;
            t.w=function(e){
              if(e||(e=1),
              !a.y.meta||!a.y.meta.url)throw console.error("__system_context__",
              a.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p=r(a.y.meta.url,
              e)
            }
          },
          4010(e,
          t,
          a){
            a(64801)
          },
          86029(e,
          t,
          a){
            t.y=function(e,
            t){
              var a=document.createElement("a");
              a.href=e;
              for(var r="/"===a.pathname[0]?a.pathname:"/"+a.pathname,
              c=0,
              n=r.length;
              c!==t&&n>=0;
              )"/"===r[--n]&&c++;
              if(c!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+c+") in the URL path "+e);
              var d=r.slice(0,
              n+1);
              return a.protocol+"//"+a.host+d
            };
            Number.isInteger
          },
          57761(e,
          t,
          a){
            "use strict";
            const r={
              "./index":()=>Promise.all([a.e(883),
              a.e(5756),
              a.e(516),
              a.e(2321),
              a.e(4940),
              a.e(3712),
              a.e(5519),
              a.e(6924),
              a.e(270),
              a.e(6982),
              a.e(5980),
              a.e(3951),
              a.e(3082),
              a.e(4017),
              a.e(283),
              a.e(3331),
              a.e(2909),
              a.e(9225),
              a.e(1270),
              a.e(7301),
              a.e(2199),
              a.e(8769),
              a.e(2285),
              a.e(4190),
              a.e(3631),
              a.e(6044)]).then(()=>()=>a(52860)),
              "./tina":()=>a.e(5046).then(()=>()=>a(95046))
            },
            c=(e,
            t)=>(a.R=t,
            t=a.o(r,
            e)?r[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            a.R=void 0,
            t),
            n=(e,
            t)=>{
              if(!a.S)return;
              const r="default",
              c=a.S[r];
              if(c&&c!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return a.S[r]=e,
              a.I(r,
              t)
            };
            a.d(t,
            {
              get:()=>c,
              init:()=>n
            })
          },
          29441(e){
            "use strict";
            e.exports=a
          },
          25136(e){
            "use strict";
            e.exports=r
          }
        };
        const c={
        };
        function n(t){
          const a=c[t];
          if(void 0!==a)return a.exports;
          const r=c[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(r.exports,
          r,
          r.exports,
          n),
          r.loaded=!0,
          r.exports
        }return n.m=e,
        n.c=c,
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
          n.t=function(a,
          r){
            if(1&r&&(a=this(a)),
            8&r)return a;
            if("object"==typeof a&&a){
              if(4&r&&a.__esModule)return a;
              if(16&r&&"function"==typeof a.then)return a
            }const c=Object.create(null);
            n.r(c);
            const d={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var o=2&r&&a;
            ("object"==typeof o||"function"==typeof o)&&!~t.indexOf(o);
            o=e(o))Object.getOwnPropertyNames(o).forEach(e=>d[e]=()=>a[e]);
            return d.default=()=>a,
            n.d(c,
            d),
            c
          }
        })(),
        n.d=(e,
        t)=>{
          if(Array.isArray(t))for(var a=0;
          a<t.length;
          ){
            var r=t[a++],
            c=t[a++];
            n.o(e,
            r)?0===c&&a++:0===c?Object.defineProperty(e,
            r,
            {
              enumerable:!0,
              value:t[a++]
            }):Object.defineProperty(e,
            r,
            {
              enumerable:!0,
              get:c
            })
          }else for(var r in t)n.o(t,
          r)&&!n.o(e,
          r)&&Object.defineProperty(e,
          r,
          {
            enumerable:!0,
            get:t[r]
          })
        },
        n.f={
        },
        n.e=e=>Promise.all(Object.keys(n.f).reduce((t,
        a)=>(n.f[a](e,
        t),
        t),
        [])),
        n.u=e=>"js/"+{
          6:"1a4b552031808ce72f779029dfe99037",
          62:"b8cef37f81976b8a4f29d7cf1194f125",
          162:"cb3fdd63cdaa4ba71e7eb27605173677",
          270:"dedd65393d29e1a26e066f95c305e406",
          325:"b659036aad5a99a47e32bb93477a1630",
          354:"b96606bb3e0e3a75cd2e65fe73711d22",
          476:"f5bbcb627cf05acd38cd9f3d43aa8889",
          516:"a2ef1bf586b3dc946c68caef71c04a49",
          739:"49c21b3c2ab15d195c5c0528d9234bd9",
          761:"cd4d7215cb18cab6bfbe825cc40028dd",
          774:"163cbbdd414111e283cee89feff06043",
          883:"ba7c2cc27d404063dedbe8de503d9a47",
          1039:"33c974d004b64d2d087bdb8f4e937bc1",
          1205:"d966366d5b31d16da7808f628858ab12",
          1644:"f3698a177ec0e2e042622f8ece80b3ba",
          1709:"7edb2ef80533c737fbaaa5394d25f08f",
          1857:"651a5f390d0863e4a2e62bf9d92470ea",
          1869:"44bc3fb46df1938c454852b00b6d3c21",
          2210:"c07213e2cefbb3b860340debea732927",
          2321:"6b31e5684a56872214daef0d1fe3d527",
          2381:"6483a0611b8516f77924dd2d621267cb",
          2454:"f445fc2789fddc8eadac9505ed65a5bc",
          2581:"423d87124cd960da2b4c3861fa4cd1b1",
          2983:"2f28d2076f454fb4147f23474d6a377d",
          3264:"292a92053fc1ea446151ebc4d6c94dde",
          3431:"5696ddc0ae06a1a0878c3f9bc8320f2b",
          3462:"68f01dc457b9955eaab4cf9b40522e37",
          3477:"b4323d4e4d4743a7f6f30cf4a99b28e9",
          3565:"d3d35d647e138755815447429435c9b4",
          3712:"a9a667b82ddab14e8f41f2f3d4cb7001",
          3767:"c254bee0db1569a0e7a3ba1bfeef061b",
          3939:"6ebff188fb9570d0cd856274dbc7d7d3",
          3951:"6403669a978444ef889ec105be4993a1",
          4016:"532c01b20b3ba2bbdeddc449126b24fb",
          4190:"9b6713a18620e8b711b0be3f521a5726",
          4281:"e53579be2b23a38e98b556599a96acf4",
          4309:"7cf52f90f178e9c83ac6de3d9e3880c1",
          4546:"c59e60c8a9be3eb70ae3681437ae2563",
          4592:"443f6163a5e5735cbdbd5d3956b21081",
          4620:"f5ab9a79484338c867f171f44693d7ad",
          4693:"3e6609a28a12c1111713d89834f01b0c",
          4865:"9e84bad917e9ff4e008692c81d66e211",
          4921:"dc3629fe6a91f4d4196168d95303bf91",
          4940:"0393b121fd02322a3365670dcbc214a9",
          5046:"abd716b042c4463727ec40e29550ff2d",
          5133:"503f010e6b8d0558db0bd2f32ad83492",
          5505:"b871eaccf075eaef3d695b896fd02138",
          5519:"c27ed86610b8c78b5443c9be89172b30",
          5756:"93dea0e6495514a19b6000f245a93367",
          5980:"ed9503306bd33737e2aa056eaceaac35",
          6044:"66922f45f4925e624c2347ce91468f08",
          6277:"86b99ff0178b51d62f66df58850cdd18",
          6320:"387c3ff4c71bd1817abe74af80afee4c",
          6543:"58f3685be4caa6309adcbe74ad1a41af",
          6596:"2c8c61c0bdd7a2ad34b1b8e59655d7ed",
          6635:"ecbca005d90ca8c78d356eb436ba187f",
          6715:"550c88b56481c48e2a2a78142c398b8b",
          6898:"b82edfcb967692f25d4d477e9d3dddbe",
          6918:"6b1fdf0148667791582f3e1994fff99c",
          6924:"d45473ad34b3b09ded5bcb12dc6e521c",
          6932:"15fcb237384b66e43c97caa2de781905",
          6935:"8edbff0485fd24b8bb5a92e341be523e",
          6982:"a926a2b4e2c3539ef8c0dfeba087e66a",
          6984:"8f92d9b571bfdafbcdbcedbbe87df631",
          7215:"9b0191791766312f0128273709bd6113",
          7465:"611fe9e24088d43a6fe0947788629391",
          7514:"8d414ef6a1d97fd6923a22867ad1b0a5",
          7783:"79281dc77c2dfb864359f636dd5f85ba",
          7877:"97ddbdcfc4e9078faea7eacf8a55cb55",
          8095:"70fae9964a04c2f8caa5309ed41d24ef",
          8169:"61df2233af1faf6f7efd85e7cfe2a6de",
          8393:"46f119cc7f867f36480303b488dbd7ff",
          8726:"ec4ecfe0330bb237ba3c6903d3e488d6",
          8769:"15369428810c63c5a59ee411fac37933",
          8936:"1a41b71b4987494e3dab3923d8634d92",
          9046:"8e15736b21e8aa5a003c76345ed456f4",
          9096:"e579c2c79abe3712ce465782e28b9567",
          9199:"97789140cc7bf98ba68ca69e2f40474a",
          9529:"0060ff75997040ae0fbc27d7a2f4ea59",
          9538:"08d70b9e9082c9a9cde133a7630aef77",
          9860:"b92783938509b65eee0e76ce59d3be34"
        }[e]+".js",
        n.miniCssF=e=>"css/"+{
          270:"1509e6ded142f7912c73b4ffd9412a78",
          354:"7c575cc0a210038808b12a81bf37629b",
          1857:"c5961ff45ab2f26ffb7e50308f79c617",
          2983:"dead3008e80f5a63059891a647f61716",
          3631:"4790c1b9de793e76e3beb46ef6e70fdb",
          3951:"ba1b9439fa8ad4315b612d938fd84075",
          4190:"90181f5f503830695ace14869df4afa3",
          4281:"fc87901d26c616fb6163d1992b094cea",
          4865:"41c7d6822d60ff731131faba38922938",
          5661:"101537b924f4411033bd9d2d8536a01a",
          6044:"8736a7f62b0e61d1319b72a921f1148d",
          6064:"88a9b4d18fecd8b492423ffebbf2bb03",
          6635:"f39de8b0c76a56f0ce42b624f3f0a652",
          6935:"523b3cc66cb4b90364d07dbc1b75e73b",
          7609:"384cddac2173849afd90c4a73e287f5e",
          7659:"bfe4e4109fd9c58c236be27a4498cde6",
          8169:"384cddac2173849afd90c4a73e287f5e",
          8726:"ef81dd31a2acf40a379ebf06814ce854",
          8769:"915d373fd494468e9b0648f0fc1b6314"
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
          t="@rockstargames/modules-core-newswire-article:";
          n.l=(a,
          r,
          c,
          d)=>{
            if(e[a])return void e[a].push(r);
            let o,
            f;
            if(void 0!==c){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const r=e[s];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+c){
                  o=r;
                  break
                }
              }
            }o||(f=!0,
            o=document.createElement("script"),
            o.charset="utf-8",
            n.nc&&o.setAttribute("nonce",
            n.nc),
            o.setAttribute("data-webpack",
            t+c),
            o.src=a),
            e[a]=[r];
            const l=(t,
            r)=>{
              o.onerror=o.onload=null,
              clearTimeout(i);
              const c=e[a];
              if(delete e[a],
              o.parentNode?.removeChild(o),
              c?.forEach(e=>e(r)),
              t)return t(r)
            },
            i=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:o
            }),
            12e4);
            o.onerror=l.bind(null,
            o.onerror),
            o.onload=l.bind(null,
            o.onload),
            f&&document.head.appendChild(o)
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
          const e={
            3631:[31879],
            6044:[64064]
          },
          t={
            31879:["default",
            "./index",
            25136],
            64064:["default",
            "./index",
            29441]
          };
          n.f.remotes=(a,
          r)=>{
            n.o(e,
            a)&&e[a].forEach(e=>{
              let a=n.R;
              a||(a=[]);
              const c=t[e];
              if(a.indexOf(c)>=0)return;
              if(a.push(c),
              c.p)return r.push(c.p);
              const d=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+c[1]+'" from '+c[2]),
                n.m[e]=()=>{
                  throw t
                },
                c.p=0
              },
              o=(e,
              t,
              a,
              n,
              o,
              f)=>{
                try{
                  const s=e(t,
                  a);
                  if(!s?.then)return o(s,
                  n,
                  f);
                  {
                    const e=s.then(e=>o(e,
                    n),
                    d);
                    if(!f)return e;
                    r.push(c.p=e)
                  }
                }catch(e){
                  d(e)
                }
              },
              f=(e,
              t,
              r)=>o(t.get,
              c[1],
              a,
              0,
              s,
              r),
              s=t=>{
                c.p=1,
                n.m[e]=e=>{
                  e.exports=t()
                }
              };
              o(n,
              c[2],
              0,
              0,
              (e,
              t,
              a)=>e?o(n.I,
              c[0],
              0,
              e,
              f,
              a):d(),
              1)
            })
          }
        })(),
        (()=>{
          n.S={
          };
          const e={
          },
          t={
          };
          n.I=(a,
          r)=>{
            r||(r=[]);
            let c=t[a];
            if(c||(c=t[a]={
            }),
            r.indexOf(c)>=0)return;
            if(r.push(c),
            e[a])return e[a];
            n.o(n.S,
            a)||(n.S[a]={
            });
            const d=n.S[a],
            o="@rockstargames/modules-core-newswire-article",
            f=(e,
            t,
            a,
            r)=>{
              const c=d[e]=d[e]||{
              },
              n=c[t];
              (!n||!n.loaded&&(!r!=!n.eager?r:o>n.from))&&(c[t]={
                get:a,
                from:o,
                eager:!!r
              })
            },
            s=e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const c=n(e);
                if(!c)return;
                const d=e=>e&&e.init&&e.init(n.S[a],
                r);
                if(c.then)return l.push(c.then(d,
                t));
                const o=d(c);
                if(o?.then)return l.push(o.catch(t))
              }catch(e){
                t(e)
              }
            },
            l=[];
            return"default"===a&&(f("@foundry/react",
            "6.3.0",
            ()=>Promise.all([n.e(883),
            n.e(761),
            n.e(5756),
            n.e(516),
            n.e(2321),
            n.e(4281),
            n.e(3712),
            n.e(2983),
            n.e(3082),
            n.e(4017),
            n.e(1270),
            n.e(354)]).then(()=>()=>n(82983))),
            f("@foundry/react",
            "6.3.0",
            ()=>Promise.all([n.e(883),
            n.e(761),
            n.e(5756),
            n.e(516),
            n.e(2321),
            n.e(4281),
            n.e(3712),
            n.e(5519),
            n.e(270),
            n.e(6935),
            n.e(3082),
            n.e(4017),
            n.e(1270),
            n.e(3431)]).then(()=>()=>n(26935))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([n.e(761),
            n.e(3082),
            n.e(283),
            n.e(5133)]).then(()=>()=>n(40842))),
            f("@rsgweb/modules-core-carousel",
            "0.0.0",
            ()=>Promise.all([n.e(883),
            n.e(5756),
            n.e(516),
            n.e(2321),
            n.e(4940),
            n.e(5519),
            n.e(3082),
            n.e(4017),
            n.e(3331),
            n.e(1270),
            n.e(7301),
            n.e(8769),
            n.e(5661),
            n.e(1857)]).then(()=>()=>n(76277))),
            f("@rsgweb/modules-core-engagement",
            "0.0.0",
            ()=>Promise.all([n.e(883),
            n.e(516),
            n.e(2321),
            n.e(4940),
            n.e(6924),
            n.e(6982),
            n.e(3082),
            n.e(4017),
            n.e(283),
            n.e(3331),
            n.e(2909),
            n.e(9225),
            n.e(1270),
            n.e(7301),
            n.e(2199),
            n.e(2285),
            n.e(6),
            n.e(4190),
            n.e(6635)]).then(()=>()=>n(46502))),
            f("@rsgweb/modules-core-group-of-items",
            "0.0.0",
            ()=>Promise.all([n.e(883),
            n.e(5756),
            n.e(516),
            n.e(4940),
            n.e(5519),
            n.e(3082),
            n.e(4017),
            n.e(3331),
            n.e(1270),
            n.e(7301),
            n.e(8769),
            n.e(3631),
            n.e(4865)]).then(()=>()=>n(78726))),
            f("@rsgweb/modules-core-highlights",
            "0.0.0",
            ()=>Promise.all([n.e(4940),
            n.e(6924),
            n.e(5980),
            n.e(3082),
            n.e(2909),
            n.e(7301),
            n.e(2199),
            n.e(2285),
            n.e(6064),
            n.e(8393)]).then(()=>()=>n(58393))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([n.e(2381),
            n.e(6918),
            n.e(3082),
            n.e(283),
            n.e(3331),
            n.e(2909),
            n.e(9225),
            n.e(6596),
            n.e(8095)]).then(()=>()=>n(58095))),
            f("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([n.e(883),
            n.e(4309),
            n.e(325),
            n.e(3082),
            n.e(4017),
            n.e(283),
            n.e(3331),
            n.e(2909),
            n.e(2199),
            n.e(2454),
            n.e(739),
            n.e(8169)]).then(()=>()=>n(11215))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(2381),
            n.e(3565),
            n.e(3082),
            n.e(283),
            n.e(2909),
            n.e(9225),
            n.e(6596),
            n.e(2454),
            n.e(6715)]).then(()=>()=>n(19096))),
            f("clsx",
            "2.1.1",
            ()=>n.e(4921).then(()=>()=>n(4921))),
            f("dompurify",
            "2.5.9",
            ()=>n.e(62).then(()=>()=>n(50062))),
            f("lodash-es",
            "4.18.1",
            ()=>Promise.all([n.e(4309),
            n.e(5505)]).then(()=>()=>n(65505))),
            f("react-dom",
            "18.3.1",
            ()=>Promise.all([n.e(162),
            n.e(3082)]).then(()=>()=>n(30162))),
            f("react-intersection-observer",
            "9.16.0",
            ()=>Promise.all([n.e(3082),
            n.e(6320)]).then(()=>()=>n(26320))),
            f("react-jsx-parser",
            "2.4.1",
            ()=>Promise.all([n.e(6932),
            n.e(3082)]).then(()=>()=>n(76932))),
            f("react-router-dom",
            "6.30.4",
            ()=>Promise.all([n.e(9860),
            n.e(3082),
            n.e(4017)]).then(()=>()=>n(79860))),
            f("react",
            "18.3.1",
            ()=>n.e(2581).then(()=>()=>n(22581))),
            f("text-balancer",
            "1.0.5",
            ()=>n.e(4016).then(()=>()=>n(34016))),
            s(25136),
            s(29441)),
            l.length?e[a]=Promise.all(l).then(()=>e[a]=1):e[a]=1
          }
        })(),
        (()=>{
          let e;
          n.g.importScripts&&(e=n.g.location+"");
          const t=n.g.document;
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
          n.p=e
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
              for(var c=1,
              n=1;
              n<e.length;
              n++)c--,
              r+="u"==(typeof(o=e[n]))[0]?"-":(c>0?".":"")+(c=2,
              o);
              return r
            }var d=[];
            for(n=1;
            n<e.length;
            n++){
              var o=e[n];
              d.push(0===o?"not("+f()+")":1===o?"("+f()+" || "+f()+")":2===o?d.pop()+" "+d.pop():t(o))
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
              var c=t[0],
              n=c<0;
              n&&(c=-c-1);
              for(var d=0,
              o=1,
              f=!0;
              ;
              o++,
              d++){
                var s,
                l,
                i=o<t.length?(typeof t[o])[0]:"";
                if(d>=r.length||"o"==(l=(typeof(s=r[d]))[0]))return!f||("u"==i?o>c&&!n:""==i!=n);
                if("u"==l){
                  if(!f||"u"!=i)return!1
                }else if(f)if(i==l)if(o<=c){
                  if(s!=t[o])return!1
                }else{
                  if(n?s>t[o]:s<t[o])return!1;
                  s!=t[o]&&(f=!1)
                }else if("s"!=i&&"n"!=i){
                  if(n||o<=c)return!1;
                  f=!1,
                  o--
                }else{
                  if(o<=c||l<i!=n)return!1;
                  f=!1
                }else"s"!=i&&"n"!=i&&(f=!1,
                o--)
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
          const r=(t,
          a,
          r)=>{
            const c=r?(e=>Object.keys(e).reduce((t,
            a)=>(e[a].eager&&(t[a]=e[a]),
            t),
            {
            }))(t[a]):t[a];
            return Object.keys(c).reduce((t,
            a)=>!t||!c[t].loaded&&((t,
            a)=>{
              t=e(t),
              a=e(a);
              for(var r=0;
              ;
              ){
                if(r>=t.length)return r<a.length&&"u"!=(typeof a[r])[0];
                var c=t[r],
                n=(typeof c)[0];
                if(r>=a.length)return"u"==n;
                var d=a[r],
                o=(typeof d)[0];
                if(n!=o)return"o"==n&&"n"==o||"s"==o||"u"==n;
                if("o"!=n&&"u"!=n&&c!=d)return c<d;
                r++
              }
            })(t,
            a)?a:t,
            0)
          },
          c=(e,
          t,
          a)=>a?a():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          d=(e=>function(t,
          a,
          r,
          c,
          d){
            const o=n.I(t);
            return o?.then&&!r?o.then(e.bind(e,
            t,
            n.S[t],
            a,
            !1,
            c,
            d)):e(t,
            n.S[t],
            a,
            r,
            c,
            d)
          })((e,
          d,
          o,
          f,
          s,
          l)=>{
            if(!((e,
            t)=>e&&n.o(e,
            t))(d,
            o))return c(e,
            o,
            l);
            const i=r(d,
            o,
            f);
            return a(s,
            i)||(u=((e,
            a,
            r,
            c)=>"Unsatisfied version "+r+" from "+(r&&e[a][r].from)+" of shared singleton module "+a+" (required "+t(c)+")")(d,
            o,
            i,
            s),
            "undefined"!=typeof console&&console.warn&&console.warn(u)),
            (b=d[o][i]).loaded=1,
            b.get();
            var b,
            u
          }),
          o={
          },
          f={
            93082:()=>d("default",
            "react",
            !1,
            [0],
            ()=>n.e(2581).then(()=>()=>n(22581))),
            84017:()=>d("default",
            "react-dom",
            !1,
            [1,
            18,
            2,
            0],
            ()=>n.e(162).then(()=>()=>n(30162))),
            40283:()=>d("default",
            "lodash-es",
            !1,
            [0],
            ()=>Promise.all([n.e(4309),
            n.e(5505)]).then(()=>()=>n(65505))),
            13331:()=>d("default",
            "@rsgweb/utils",
            !1,
            [0],
            ()=>Promise.all([n.e(2381),
            n.e(3565),
            n.e(283),
            n.e(2909),
            n.e(9225),
            n.e(6596),
            n.e(2454),
            n.e(9096)]).then(()=>()=>n(19096))),
            42909:()=>d("default",
            "@rsgweb/locale-tools",
            !1,
            [0],
            ()=>Promise.all([n.e(761),
            n.e(283),
            n.e(7514)]).then(()=>()=>n(40842))),
            99225:()=>d("default",
            "react-router-dom",
            !1,
            [0],
            ()=>Promise.all([n.e(9860),
            n.e(4017)]).then(()=>()=>n(79860))),
            81270:()=>d("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>n.e(4921).then(()=>()=>n(4921))),
            17301:()=>d("default",
            "@rsgweb/tina",
            !1,
            [0],
            ()=>Promise.all([n.e(883),
            n.e(4309),
            n.e(325),
            n.e(4017),
            n.e(283),
            n.e(3331),
            n.e(2909),
            n.e(2199),
            n.e(2454),
            n.e(739),
            n.e(7609)]).then(()=>()=>n(11215))),
            82199:()=>d("default",
            "@rsgweb/rockstar-account",
            !1,
            [0],
            ()=>Promise.all([n.e(2381),
            n.e(6918),
            n.e(283),
            n.e(3331),
            n.e(9225),
            n.e(6596),
            n.e(476)]).then(()=>()=>n(58095))),
            42285:()=>d("default",
            "react-intersection-observer",
            !1,
            [1,
            9,
            16,
            0],
            ()=>n.e(3939).then(()=>()=>n(26320))),
            83841:()=>d("default",
            "@foundry/react",
            !1,
            [0],
            ()=>Promise.all([n.e(761),
            n.e(5756),
            n.e(4281),
            n.e(3712),
            n.e(2983)]).then(()=>()=>n(82983))),
            91681:()=>d("default",
            "dompurify",
            !1,
            [1,
            2,
            5,
            9],
            ()=>n.e(62).then(()=>()=>n(50062))),
            9360:()=>d("default",
            "@foundry/react",
            !1,
            [0],
            ()=>Promise.all([n.e(761),
            n.e(4281),
            n.e(6935)]).then(()=>()=>n(26935))),
            10475:()=>d("default",
            "@rsgweb/modules-core-highlights",
            !1,
            [0],
            ()=>Promise.all([n.e(6064),
            n.e(774)]).then(()=>()=>n(58393))),
            35643:()=>d("default",
            "@rsgweb/modules-core-carousel",
            !1,
            [0],
            ()=>Promise.all([n.e(5661),
            n.e(6277)]).then(()=>()=>n(76277))),
            59139:()=>d("default",
            "@rsgweb/modules-core-engagement",
            !1,
            [0],
            ()=>Promise.all([n.e(6),
            n.e(7659)]).then(()=>()=>n(46502))),
            72527:()=>d("default",
            "@rsgweb/modules-core-group-of-items",
            !1,
            [0],
            ()=>n.e(8726).then(()=>()=>n(78726))),
            87486:()=>d("default",
            "text-balancer",
            !1,
            [1,
            1,
            0,
            5],
            ()=>n.e(4016).then(()=>()=>n(34016))),
            92910:()=>d("default",
            "react-jsx-parser",
            !1,
            [1,
            2,
            4,
            1],
            ()=>n.e(6932).then(()=>()=>n(76932)))
          },
          s={
            283:[40283],
            1270:[81270],
            2199:[82199],
            2285:[42285],
            2909:[42909],
            3082:[93082],
            3331:[13331],
            3631:[91681],
            4017:[84017],
            4190:[83841],
            6044:[9360,
            10475,
            35643,
            59139,
            72527,
            87486,
            92910],
            7301:[17301],
            9225:[99225]
          },
          l={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(s,
            e)&&s[e].forEach(e=>{
              if(n.o(o,
              e))return t.push(o[e]);
              if(!l[e]){
                const a=t=>{
                  o[e]=0,
                  n.m[e]=a=>{
                    delete n.c[e],
                    a.exports=t()
                  }
                };
                l[e]=!0;
                const r=t=>{
                  delete o[e],
                  n.m[e]=a=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const c=f[e]();
                  c.then?t.push(o[e]=c.then(a).catch(r)):a(c)
                }catch(e){
                  r(e)
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
            n.f.miniCss=(t,
            a)=>{
              e[t]?a.push(e[t]):0!==e[t]&&{
                270:1,
                354:1,
                1857:1,
                2983:1,
                3631:1,
                3951:1,
                4190:1,
                4281:1,
                4865:1,
                5661:1,
                6044:1,
                6064:1,
                6635:1,
                6935:1,
                7609:1,
                7659:1,
                8169:1,
                8726:1,
                8769:1
              }[t]&&a.push(e[t]=(e=>new Promise((t,
              a)=>{
                var r=n.miniCssF(e),
                c=n.p+r;
                if(((e,
                t)=>{
                  for(var a=document.getElementsByTagName("link"),
                  r=0;
                  r<a.length;
                  r++){
                    var c=(d=a[r]).getAttribute("data-href")||d.getAttribute("href");
                    if("stylesheet"===d.rel&&(c===e||c===t))return d
                  }var n=document.getElementsByTagName("style");
                  for(r=0;
                  r<n.length;
                  r++){
                    var d;
                    if((c=(d=n[r]).getAttribute("data-href"))===e||c===t)return d
                  }
                })(r,
                c))return t();
                ((e,
                t,
                a,
                r,
                c)=>{
                  var d=document.createElement("link");
                  d.rel="stylesheet",
                  d.type="text/css",
                  n.nc&&(d.nonce=n.nc),
                  d.onerror=d.onload=a=>{
                    if(d.onerror=d.onload=null,
                    "load"===a.type)r();
                    else{
                      var n=a&&a.type,
                      o=a&&a.target&&a.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+o+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=n,
                      f.request=o,
                      d.parentNode&&d.parentNode.removeChild(d),
                      c(f)
                    }
                  },
                  d.href=t,
                  document.head.appendChild(d)
                })(e,
                c,
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
            6947:0
          };
          n.f.j=(t,
          a)=>{
            let r=n.o(e,
            t)?e[t]:void 0;
            if(0!==r)if(r)a.push(r[2]);
            else if(/^(2(199|285|83|909)|3([36]31|082)|7(301|609|659)|1270|4017|5661|6064|9225)$/.test(t))e[t]=0;
            else{
              const c=new Promise((a,
              c)=>r=e[t]=[a,
              c]);
              a.push(r[2]=c);
              const d=n.p+n.u(t),
              o=new Error,
              f=a=>{
                if(n.o(e,
                t)&&(r=e[t],
                0!==r&&(e[t]=void 0),
                r)){
                  const e=a&&("load"===a.type?"missing":a.type),
                  c=a&&a.target&&a.target.src;
                  o.message="Loading chunk "+t+" failed.\n("+e+": "+c+")",
                  o.name="ChunkLoadError",
                  o.type=e,
                  o.request=c,
                  r[1](o)
                }
              };
              n.l(d,
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          a)=>{
            let[r,
            c,
            d]=a;
            var o,
            f,
            s=0;
            if(r.some(t=>0!==e[t])){
              for(o in c)n.o(c,
              o)&&(n.m[o]=c[o]);
              d&&d(n)
            }for(t&&t(a);
            s<r.length;
            s++)f=r[s],
            n.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          a=self.webpackChunk_rockstargames_modules_core_newswire_article=self.webpackChunk_rockstargames_modules_core_newswire_article||[];
          a.forEach(t.bind(null,
          0)),
          a.push=t.bind(null,
          a.push.bind(a))
        })(),
        n.nc=void 0,
        n(4010),
        n(57761)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map