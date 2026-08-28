try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="02c02eb4-ce3d-49c5-a40d-5a2834224d04",
  e._sentryDebugIdIdentifier="sentry-dbid-02c02eb4-ce3d-49c5-a40d-5a2834224d04")
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
    packageName:"@rockstargames/modules-core-newswire-article",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"90576ff78edf4e7c067413c3d030b5d466aa6a58"
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
          85946(e,
          t,
          a){
            (0,
            a(69e3).w)(1)
          },
          69e3(e,
          t,
          a){
            const r=a(31364).y;
            t.w=function(e){
              if(e||(e=1),
              !a.y.meta||!a.y.meta.url)throw console.error("__system_context__",
              a.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p=r(a.y.meta.url,
              e)
            }
          },
          64769(e,
          t,
          a){
            a(85946)
          },
          31364(e,
          t,
          a){
            t.y=function(e,
            t){
              var a=document.createElement("a");
              a.href=e;
              for(var r="/"===a.pathname[0]?a.pathname:"/"+a.pathname,
              d=0,
              n=r.length;
              d!==t&&n>=0;
              )"/"===r[--n]&&d++;
              if(d!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+d+") in the URL path "+e);
              var o=r.slice(0,
              n+1);
              return a.protocol+"//"+a.host+o
            };
            Number.isInteger
          },
          57761(e,
          t,
          a){
            "use strict";
            const r={
              "./index":()=>Promise.all([a.e(883),
              a.e(8061),
              a.e(4997),
              a.e(7725),
              a.e(4940),
              a.e(5940),
              a.e(1904),
              a.e(8724),
              a.e(3685),
              a.e(2805),
              a.e(5980),
              a.e(8364),
              a.e(3082),
              a.e(4017),
              a.e(283),
              a.e(3331),
              a.e(2909),
              a.e(9225),
              a.e(1270),
              a.e(7301),
              a.e(2199),
              a.e(9724),
              a.e(2285),
              a.e(2957),
              a.e(3115),
              a.e(2021)]).then(()=>()=>a(10601)),
              "./tina":()=>a.e(6144).then(()=>()=>a(46144))
            },
            d=(e,
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
              d=a.S[r];
              if(d&&d!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return a.S[r]=e,
              a.I(r,
              t)
            };
            a.d(t,
            {
              get:()=>d,
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
        const d={
        };
        function n(t){
          const a=d[t];
          if(void 0!==a)return a.exports;
          const r=d[t]={
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
        n.c=d,
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
            }const d=Object.create(null);
            n.r(d);
            const o={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var c=2&r&&a;
            ("object"==typeof c||"function"==typeof c)&&!~t.indexOf(c);
            c=e(c))Object.getOwnPropertyNames(c).forEach(e=>o[e]=()=>a[e]);
            return o.default=()=>a,
            n.d(d,
            o),
            d
          }
        })(),
        n.d=(e,
        t)=>{
          if(Array.isArray(t))for(var a=0;
          a<t.length;
          ){
            var r=t[a++],
            d=t[a++];
            n.o(e,
            r)?0===d&&a++:0===d?Object.defineProperty(e,
            r,
            {
              enumerable:!0,
              value:t[a++]
            }):Object.defineProperty(e,
            r,
            {
              enumerable:!0,
              get:d
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
          62:"e36471fb94a98bc0aae95c9521c12a42",
          162:"59b71a4fbc259482e271fc31b46ba208",
          606:"a672cd3c2924a551b77b84181d9c4d09",
          761:"8ca2ef6264e55f927028d69259c91c7b",
          883:"0b17dd91ed646a05120645f727b79a57",
          890:"a50bddb02cc5c70e8c06dddec6c5cac3",
          1274:"e752fbd8ecd08813adef07e51bf55134",
          1503:"72b536bd0eeb6120b927afbbe5ddb892",
          1605:"2231cf8cba08b81c22e2fbdf08806f9b",
          1731:"7f77c85fcad48519719d5bbeb85450e2",
          1904:"9a1ace895d25167f2b0369cdcea9dc4b",
          2021:"11c99e0ce47550b39ce028086661a122",
          2100:"3309de49d3f84dfb9f24da5efe59ba45",
          2219:"ef98a822f15433304678f3b918d13066",
          2272:"5879f8521f97d273db621cc35d12e2cc",
          2309:"fcdb42a786fe11c523e659b40bb85173",
          2329:"0520f01b1d59ebbf2c591f4de54f27c9",
          2333:"459d30d6b8fe54b70fdc8991708404b4",
          2346:"e05f51bff1cd75daf0678acf91ac63c6",
          2581:"0304d738eed38aff05df533b36d229be",
          2656:"75e0c49961572f022a1e6fbce34e1779",
          2805:"d03d2065a571a8dcc2191606adcfc46f",
          2957:"461f9d86e64ba444d466090b278459af",
          3195:"5f9aec0d9172fe307d8c77c4b971403f",
          3431:"fb09150326ab3f6cafbfa20a286c990a",
          3548:"9b4aa0a2ba9b79221a9b0d7bd56305b8",
          3667:"f55833bdb3c2e4ba88a10d724b5f2819",
          3685:"6b9a1cdb57fde1eb44e0b031eda1045a",
          3939:"920e7ec06de7edb2c94744a0030468ad",
          4016:"f83a027ef0b129c06a8487afbf8d0fd8",
          4309:"36d3805fa0017e2bb01aa4697ae33761",
          4326:"b81b334a1736c6be9a1f0eb11b6e647c",
          4607:"b6e3d6d67e0a3b0038a36afd3e17a377",
          4921:"a6330e4fe08e30a042fed2cbe0e08415",
          4940:"15e72903ed73a1e6ef81ff17bf86529f",
          4962:"01b4f3f6f700f6f72331e2727e02be79",
          4971:"4fa241a6313c949ce90ca516bf4b6bfd",
          4997:"3553034f7a7c236aca2401bd461ef2dc",
          5096:"82b5bd66d419c2e03c805fed0c5cc2a4",
          5114:"a045a79fd06915c91bd8674d4cdee76e",
          5505:"a56d0c0be31d57b133886257b9a96550",
          5529:"b94d5ad992a7ae24b605ef6af3689716",
          5592:"f7834324e8d39cafcc93ddbdbf4e5cc8",
          5660:"5cd3f9d7e6ade6119269017dbcbaf9b2",
          5847:"a447cb973cc4a654b14d491f9551913a",
          5901:"85eddcfc2239c0d858757cea497611dd",
          5940:"aa915003a7e014c3d777294d27ff474c",
          5980:"b238bdc9836127157eccea7ad8628c3f",
          6048:"981ce3c68cb130a96bf2d7b9afd827b1",
          6144:"6910fcbde5ff9a763a1467cd1183047c",
          6295:"8437208427a2721764919f597f86f6aa",
          6320:"7d231b72725aa8a787c71bffa1f33a61",
          6405:"a7bdc360ac7f4d1da6510be52f62b6f8",
          6918:"4d2baeaf861666c35196e13703c34185",
          6932:"330dbb0a89602f250aa8820df16726de",
          6972:"1f32854837c8a5bc78dc34e0421c1cd7",
          7110:"b49851da472529b3b8d6af94b407ed5c",
          7177:"7445baa8032335640302db4c1e901ea3",
          7390:"5edd69786c3901d2e9f17b13deeaaba2",
          7465:"97ad1bdb42513a769acb0572363e0d75",
          7602:"4e74d6cb146f99a1e3535affcf871b30",
          7725:"c66fc013938443c974c58c03239fb4c3",
          7886:"824fc10b01baae6c43606bbb6f90013d",
          8061:"77f8949633052c4a0aadd4d6db28b4e3",
          8173:"b5d2d4abfc8c8f61d06972f705e3545e",
          8225:"4da434551e1926eda236d508af51ae4c",
          8364:"e3a04f8568acb60fa7f5f6ce3afecc10",
          8509:"d8187d0e4ef3c39a72cf20e8050a764e",
          8696:"ff49ab3d07a047f3c5fd14409bff3eed",
          8724:"92bc03bebe84c659e54b47185d9fa37a",
          8784:"ef96eeedb5ae3c563c9558f8a0966cf7",
          9103:"d510a7fe5e7e4eb287bfb613c723742f",
          9192:"78588aaa2f9d1824ec13cbc46e6ec7a2",
          9269:"b229512a5b6049e8d6789e27ec258a67",
          9663:"3811d1300f6e7ad0935d5c0f544e5708",
          9708:"14261b53aa182d97571214d2fa2c6e37",
          9719:"7582123af3b3ee5ef6535da7d8283dfd",
          9724:"41077e0fe0d439a66f57d158ffe6c93d",
          9860:"a5c2ebb21ef4c09e459b1eaebea7b57d",
          9933:"22abb0bfefc0afeceb416fbd882f39e3",
          9966:"f6f61f776339780db3ca59a5fd66196b"
        }[e]+".js",
        n.miniCssF=e=>"css/"+{
          971:"101537b924f4411033bd9d2d8536a01a",
          1274:"41c7d6822d60ff731131faba38922938",
          1503:"384cddac2173849afd90c4a73e287f5e",
          1583:"384cddac2173849afd90c4a73e287f5e",
          2021:"3a1e70fed5766aafef50499650550ad6",
          2219:"c5961ff45ab2f26ffb7e50308f79c617",
          2432:"bfe4e4109fd9c58c236be27a4498cde6",
          2957:"90181f5f503830695ace14869df4afa3",
          3115:"4790c1b9de793e76e3beb46ef6e70fdb",
          3685:"8e0143f0dabe4c4bb134b07b6895ab9f",
          5114:"ef81dd31a2acf40a379ebf06814ce854",
          5592:"7081af09c3fcdeb9763687e15d45cd67",
          5901:"d4aed82e89f4415a9e05752177cdbf7a",
          7177:"7a3bb720d668a71264bb467d3dd84b28",
          8364:"fd780a7ad7329432c37a24e06508e0ac",
          9663:"0d34e55090095a940c6398ec5ed29ea6",
          9724:"915d373fd494468e9b0648f0fc1b6314",
          9733:"88a9b4d18fecd8b492423ffebbf2bb03",
          9966:"7c575cc0a210038808b12a81bf37629b"
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
          d,
          o)=>{
            if(e[a])return void e[a].push(r);
            let c,
            f;
            if(void 0!==d){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const r=e[s];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+d){
                  c=r;
                  break
                }
              }
            }c||(f=!0,
            c=document.createElement("script"),
            c.charset="utf-8",
            n.nc&&c.setAttribute("nonce",
            n.nc),
            c.setAttribute("data-webpack",
            t+d),
            c.src=a),
            e[a]=[r];
            const b=(t,
            r)=>{
              c.onerror=c.onload=null,
              clearTimeout(l);
              const d=e[a];
              if(delete e[a],
              c.parentNode?.removeChild(c),
              d?.forEach(e=>e(r)),
              t)return t(r)
            },
            l=setTimeout(b.bind(null,
            void 0,
            {
              type:"timeout",
              target:c
            }),
            12e4);
            c.onerror=b.bind(null,
            c.onerror),
            c.onload=b.bind(null,
            c.onload),
            f&&document.head.appendChild(c)
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
            2021:[64064],
            3115:[31879]
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
              const d=t[e];
              if(a.indexOf(d)>=0)return;
              if(a.push(d),
              d.p)return r.push(d.p);
              const o=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+d[1]+'" from '+d[2]),
                n.m[e]=()=>{
                  throw t
                },
                d.p=0
              },
              c=(e,
              t,
              a,
              n,
              c,
              f)=>{
                try{
                  const s=e(t,
                  a);
                  if(!s?.then)return c(s,
                  n,
                  f);
                  {
                    const e=s.then(e=>c(e,
                    n),
                    o);
                    if(!f)return e;
                    r.push(d.p=e)
                  }
                }catch(e){
                  o(e)
                }
              },
              f=(e,
              t,
              r)=>c(t.get,
              d[1],
              a,
              0,
              s,
              r),
              s=t=>{
                d.p=1,
                n.m[e]=e=>{
                  e.exports=t()
                }
              };
              c(n,
              d[2],
              0,
              0,
              (e,
              t,
              a)=>e?c(n.I,
              d[0],
              0,
              e,
              f,
              a):o(),
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
            let d=t[a];
            if(d||(d=t[a]={
            }),
            r.indexOf(d)>=0)return;
            if(r.push(d),
            e[a])return e[a];
            n.o(n.S,
            a)||(n.S[a]={
            });
            const o=n.S[a],
            c="@rockstargames/modules-core-newswire-article",
            f=(e,
            t,
            a,
            r)=>{
              const d=o[e]=o[e]||{
              },
              n=d[t];
              (!n||!n.loaded&&(!r!=!n.eager?r:c>n.from))&&(d[t]={
                get:a,
                from:c,
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
                const d=n(e);
                if(!d)return;
                const o=e=>e&&e.init&&e.init(n.S[a],
                r);
                if(d.then)return b.push(d.then(o,
                t));
                const c=o(d);
                if(c?.then)return b.push(c.catch(t))
              }catch(e){
                t(e)
              }
            },
            b=[];
            return"default"===a&&(f("@foundry/react",
            "6.6.1",
            ()=>Promise.all([n.e(883),
            n.e(761),
            n.e(8061),
            n.e(4997),
            n.e(7725),
            n.e(7177),
            n.e(5940),
            n.e(9663),
            n.e(3082),
            n.e(4017),
            n.e(1270),
            n.e(9966)]).then(()=>()=>n(89663))),
            f("@foundry/react",
            "6.6.1",
            ()=>Promise.all([n.e(883),
            n.e(761),
            n.e(8061),
            n.e(4997),
            n.e(7725),
            n.e(7177),
            n.e(5940),
            n.e(1904),
            n.e(5901),
            n.e(3685),
            n.e(3082),
            n.e(4017),
            n.e(1270),
            n.e(3431)]).then(()=>()=>n(35901))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([n.e(761),
            n.e(3082),
            n.e(283),
            n.e(9719)]).then(()=>()=>n(50956))),
            f("@rsgweb/modules-core-carousel",
            "0.0.0",
            ()=>Promise.all([n.e(883),
            n.e(8061),
            n.e(4997),
            n.e(7725),
            n.e(4940),
            n.e(1904),
            n.e(3082),
            n.e(4017),
            n.e(3331),
            n.e(1270),
            n.e(7301),
            n.e(9724),
            n.e(971),
            n.e(2219)]).then(()=>()=>n(8784))),
            f("@rsgweb/modules-core-engagement",
            "0.0.0",
            ()=>Promise.all([n.e(883),
            n.e(4997),
            n.e(7725),
            n.e(4940),
            n.e(8724),
            n.e(2805),
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
            n.e(8173),
            n.e(2957),
            n.e(5592)]).then(()=>()=>n(76057))),
            f("@rsgweb/modules-core-group-of-items",
            "0.0.0",
            ()=>Promise.all([n.e(883),
            n.e(8061),
            n.e(4997),
            n.e(4940),
            n.e(1904),
            n.e(3082),
            n.e(4017),
            n.e(3331),
            n.e(1270),
            n.e(7301),
            n.e(9724),
            n.e(3115),
            n.e(1274)]).then(()=>()=>n(25114))),
            f("@rsgweb/modules-core-highlights",
            "0.0.0",
            ()=>Promise.all([n.e(4940),
            n.e(8724),
            n.e(5980),
            n.e(3082),
            n.e(2909),
            n.e(7301),
            n.e(2199),
            n.e(2285),
            n.e(9733),
            n.e(3667)]).then(()=>()=>n(6048))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([n.e(1605),
            n.e(6918),
            n.e(3082),
            n.e(283),
            n.e(3331),
            n.e(2909),
            n.e(9225),
            n.e(2272),
            n.e(890)]).then(()=>()=>n(18509))),
            f("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([n.e(883),
            n.e(4309),
            n.e(6295),
            n.e(3082),
            n.e(4017),
            n.e(283),
            n.e(3331),
            n.e(2909),
            n.e(2199),
            n.e(9192),
            n.e(3548),
            n.e(1503)]).then(()=>()=>n(38512))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(1605),
            n.e(2333),
            n.e(3082),
            n.e(283),
            n.e(2909),
            n.e(9225),
            n.e(2272),
            n.e(9192),
            n.e(606)]).then(()=>()=>n(40606))),
            f("clsx",
            "2.1.1",
            ()=>n.e(4921).then(()=>()=>n(4921))),
            f("dompurify",
            "2.5.9",
            ()=>n.e(62).then(()=>()=>n(50062))),
            f("lodash-es",
            "4.18.1",
            ()=>Promise.all([n.e(4309),
            n.e(7886)]).then(()=>()=>n(65505))),
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
            b.length?e[a]=Promise.all(b).then(()=>e[a]=1):e[a]=1
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
              for(var d=1,
              n=1;
              n<e.length;
              n++)d--,
              r+="u"==(typeof(c=e[n]))[0]?"-":(d>0?".":"")+(d=2,
              c);
              return r
            }var o=[];
            for(n=1;
            n<e.length;
            n++){
              var c=e[n];
              o.push(0===c?"not("+f()+")":1===c?"("+f()+" || "+f()+")":2===c?o.pop()+" "+o.pop():t(c))
            }return f();
            function f(){
              return o.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          a=(t,
          r)=>{
            if(0 in t){
              r=e(r);
              var d=t[0],
              n=d<0;
              n&&(d=-d-1);
              for(var o=0,
              c=1,
              f=!0;
              ;
              c++,
              o++){
                var s,
                b,
                l=c<t.length?(typeof t[c])[0]:"";
                if(o>=r.length||"o"==(b=(typeof(s=r[o]))[0]))return!f||("u"==l?c>d&&!n:""==l!=n);
                if("u"==b){
                  if(!f||"u"!=l)return!1
                }else if(f)if(l==b)if(c<=d){
                  if(s!=t[c])return!1
                }else{
                  if(n?s>t[c]:s<t[c])return!1;
                  s!=t[c]&&(f=!1)
                }else if("s"!=l&&"n"!=l){
                  if(n||c<=d)return!1;
                  f=!1,
                  c--
                }else{
                  if(c<=d||b<l!=n)return!1;
                  f=!1
                }else"s"!=l&&"n"!=l&&(f=!1,
                c--)
              }
            }var i=[],
            u=i.pop.bind(i);
            for(o=1;
            o<t.length;
            o++){
              var h=t[o];
              i.push(1==h?u()|u():2==h?u()&u():h?a(h,
              r):!u())
            }return!!u()
          };
          const r=(t,
          a,
          r)=>{
            const d=r?(e=>Object.keys(e).reduce((t,
            a)=>(e[a].eager&&(t[a]=e[a]),
            t),
            {
            }))(t[a]):t[a];
            return Object.keys(d).reduce((t,
            a)=>!t||!d[t].loaded&&((t,
            a)=>{
              t=e(t),
              a=e(a);
              for(var r=0;
              ;
              ){
                if(r>=t.length)return r<a.length&&"u"!=(typeof a[r])[0];
                var d=t[r],
                n=(typeof d)[0];
                if(r>=a.length)return"u"==n;
                var o=a[r],
                c=(typeof o)[0];
                if(n!=c)return"o"==n&&"n"==c||"s"==c||"u"==n;
                if("o"!=n&&"u"!=n&&d!=o)return d<o;
                r++
              }
            })(t,
            a)?a:t,
            0)
          },
          d=(e,
          t,
          a)=>a?a():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          o=(e=>function(t,
          a,
          r,
          d,
          o){
            const c=n.I(t);
            return c?.then&&!r?c.then(e.bind(e,
            t,
            n.S[t],
            a,
            !1,
            d,
            o)):e(t,
            n.S[t],
            a,
            r,
            d,
            o)
          })((e,
          o,
          c,
          f,
          s,
          b)=>{
            if(!((e,
            t)=>e&&n.o(e,
            t))(o,
            c))return d(e,
            c,
            b);
            const l=r(o,
            c,
            f);
            return a(s,
            l)||(u=((e,
            a,
            r,
            d)=>"Unsatisfied version "+r+" from "+(r&&e[a][r].from)+" of shared singleton module "+a+" (required "+t(d)+")")(o,
            c,
            l,
            s),
            "undefined"!=typeof console&&console.warn&&console.warn(u)),
            (i=o[c][l]).loaded=1,
            i.get();
            var i,
            u
          }),
          c={
          },
          f={
            93082:()=>o("default",
            "react",
            !1,
            [0],
            ()=>n.e(2581).then(()=>()=>n(22581))),
            84017:()=>o("default",
            "react-dom",
            !1,
            [1,
            18,
            2,
            0],
            ()=>n.e(162).then(()=>()=>n(30162))),
            40283:()=>o("default",
            "lodash-es",
            !1,
            [0],
            ()=>Promise.all([n.e(4309),
            n.e(7886)]).then(()=>()=>n(65505))),
            13331:()=>o("default",
            "@rsgweb/utils",
            !1,
            [0],
            ()=>Promise.all([n.e(1605),
            n.e(2333),
            n.e(283),
            n.e(2909),
            n.e(9225),
            n.e(2272),
            n.e(9192),
            n.e(8225)]).then(()=>()=>n(40606))),
            42909:()=>o("default",
            "@rsgweb/locale-tools",
            !1,
            [0],
            ()=>Promise.all([n.e(761),
            n.e(283),
            n.e(2100)]).then(()=>()=>n(50956))),
            99225:()=>o("default",
            "react-router-dom",
            !1,
            [0],
            ()=>Promise.all([n.e(9860),
            n.e(4017)]).then(()=>()=>n(79860))),
            81270:()=>o("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>n.e(4921).then(()=>()=>n(4921))),
            17301:()=>o("default",
            "@rsgweb/tina",
            !1,
            [0],
            ()=>Promise.all([n.e(883),
            n.e(4309),
            n.e(6295),
            n.e(4017),
            n.e(283),
            n.e(3331),
            n.e(2909),
            n.e(2199),
            n.e(9192),
            n.e(3548),
            n.e(1583)]).then(()=>()=>n(38512))),
            82199:()=>o("default",
            "@rsgweb/rockstar-account",
            !1,
            [0],
            ()=>Promise.all([n.e(1605),
            n.e(6918),
            n.e(283),
            n.e(3331),
            n.e(9225),
            n.e(2272),
            n.e(8509)]).then(()=>()=>n(18509))),
            42285:()=>o("default",
            "react-intersection-observer",
            !1,
            [1,
            9,
            16,
            0],
            ()=>n.e(3939).then(()=>()=>n(26320))),
            20005:()=>o("default",
            "@foundry/react",
            !1,
            [0],
            ()=>Promise.all([n.e(761),
            n.e(8061),
            n.e(7177),
            n.e(5940),
            n.e(9663)]).then(()=>()=>n(89663))),
            91681:()=>o("default",
            "dompurify",
            !1,
            [1,
            2,
            5,
            9],
            ()=>n.e(62).then(()=>()=>n(50062))),
            10475:()=>o("default",
            "@rsgweb/modules-core-highlights",
            !1,
            [0],
            ()=>Promise.all([n.e(9733),
            n.e(6048)]).then(()=>()=>n(6048))),
            32552:()=>o("default",
            "@foundry/react",
            !1,
            [0],
            ()=>Promise.all([n.e(761),
            n.e(7177),
            n.e(5901)]).then(()=>()=>n(35901))),
            35643:()=>o("default",
            "@rsgweb/modules-core-carousel",
            !1,
            [0],
            ()=>Promise.all([n.e(971),
            n.e(8784)]).then(()=>()=>n(8784))),
            59139:()=>o("default",
            "@rsgweb/modules-core-engagement",
            !1,
            [0],
            ()=>Promise.all([n.e(8173),
            n.e(2432)]).then(()=>()=>n(76057))),
            72527:()=>o("default",
            "@rsgweb/modules-core-group-of-items",
            !1,
            [0],
            ()=>n.e(5114).then(()=>()=>n(25114))),
            87486:()=>o("default",
            "text-balancer",
            !1,
            [1,
            1,
            0,
            5],
            ()=>n.e(4016).then(()=>()=>n(34016))),
            92910:()=>o("default",
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
            2021:[10475,
            32552,
            35643,
            59139,
            72527,
            87486,
            92910],
            2199:[82199],
            2285:[42285],
            2909:[42909],
            2957:[20005],
            3082:[93082],
            3115:[91681],
            3331:[13331],
            4017:[84017],
            7301:[17301],
            9225:[99225]
          },
          b={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(s,
            e)&&s[e].forEach(e=>{
              if(n.o(c,
              e))return t.push(c[e]);
              if(!b[e]){
                const a=t=>{
                  c[e]=0,
                  n.m[e]=a=>{
                    delete n.c[e],
                    a.exports=t()
                  }
                };
                b[e]=!0;
                const r=t=>{
                  delete c[e],
                  n.m[e]=a=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const d=f[e]();
                  d.then?t.push(c[e]=d.then(a).catch(r)):a(d)
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
                971:1,
                1274:1,
                1503:1,
                1583:1,
                2021:1,
                2219:1,
                2432:1,
                2957:1,
                3115:1,
                3685:1,
                5114:1,
                5592:1,
                5901:1,
                7177:1,
                8364:1,
                9663:1,
                9724:1,
                9733:1,
                9966:1
              }[t]&&a.push(e[t]=(e=>new Promise((t,
              a)=>{
                var r=n.miniCssF(e),
                d=n.p+r;
                if(((e,
                t)=>{
                  for(var a=document.getElementsByTagName("link"),
                  r=0;
                  r<a.length;
                  r++){
                    var d=(o=a[r]).getAttribute("data-href")||o.getAttribute("href");
                    if("stylesheet"===o.rel&&(d===e||d===t))return o
                  }var n=document.getElementsByTagName("style");
                  for(r=0;
                  r<n.length;
                  r++){
                    var o;
                    if((d=(o=n[r]).getAttribute("data-href"))===e||d===t)return o
                  }
                })(r,
                d))return t();
                ((e,
                t,
                a,
                r,
                d)=>{
                  var o=document.createElement("link");
                  o.rel="stylesheet",
                  o.type="text/css",
                  n.nc&&(o.nonce=n.nc),
                  o.onerror=o.onload=a=>{
                    if(o.onerror=o.onload=null,
                    "load"===a.type)r();
                    else{
                      var n=a&&a.type,
                      c=a&&a.target&&a.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+c+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=n,
                      f.request=c,
                      o.parentNode&&o.parentNode.removeChild(o),
                      d(f)
                    }
                  },
                  o.href=t,
                  document.head.appendChild(o)
                })(e,
                d,
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
            else if(/^(2(199|285|432|83|909)|3(082|115|331)|9(225|71|733)|1270|1583|4017|7301)$/.test(t))e[t]=0;
            else{
              const d=new Promise((a,
              d)=>r=e[t]=[a,
              d]);
              a.push(r[2]=d);
              const o=n.p+n.u(t),
              c=new Error,
              f=a=>{
                if(n.o(e,
                t)&&(r=e[t],
                0!==r&&(e[t]=void 0),
                r)){
                  const e=a&&("load"===a.type?"missing":a.type),
                  d=a&&a.target&&a.target.src;
                  c.message="Loading chunk "+t+" failed.\n("+e+": "+d+")",
                  c.name="ChunkLoadError",
                  c.type=e,
                  c.request=d,
                  c.event=a,
                  r[1](c)
                }
              };
              n.l(o,
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          a)=>{
            let[r,
            d,
            o]=a;
            var c,
            f,
            s=0;
            if(r.some(t=>0!==e[t])){
              for(c in d)n.o(d,
              c)&&(n.m[c]=d[c]);
              o&&o(n)
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
        n(64769),
        n(57761)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map