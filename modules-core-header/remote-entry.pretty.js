try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="1d4c321b-cec4-4484-8bbb-ba0c9aee884c",
  e._sentryDebugIdIdentifier="sentry-dbid-1d4c321b-cec4-4484-8bbb-ba0c9aee884c")
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
    release:"3e1d67adeb1d8e80b90a4f3016a39e78e2550cd5",
    packageName:"@rockstargames/modules-core-header",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"3e1d67adeb1d8e80b90a4f3016a39e78e2550cd5"
},
System.register([],
function(e,
t){
  return{
    execute:function(){
      e((()=>{
        var e={
          47294(e,
          t,
          a){
            (0,
            a(75316).w)(1)
          },
          75316(e,
          t,
          a){
            const r=a(32232).y;
            t.w=function(e){
              if(e||(e=1),
              !a.y.meta||!a.y.meta.url)throw console.error("__system_context__",
              a.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p=r(a.y.meta.url,
              e)
            }
          },
          23069(e,
          t,
          a){
            a(47294)
          },
          32232(e,
          t,
          a){
            t.y=function(e,
            t){
              var a=document.createElement("a");
              a.href=e;
              for(var r="/"===a.pathname[0]?a.pathname:"/"+a.pathname,
              n=0,
              d=r.length;
              n!==t&&d>=0;
              )"/"===r[--d]&&n++;
              if(n!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+n+") in the URL path "+e);
              var o=r.slice(0,
              d+1);
              return a.protocol+"//"+a.host+o
            };
            Number.isInteger
          },
          72892(e,
          t,
          a){
            "use strict";
            const r={
              "./core":()=>Promise.all([a.e(2145),
              a.e(9534),
              a.e(166),
              a.e(9862),
              a.e(5748),
              a.e(8889),
              a.e(5641),
              a.e(2704),
              a.e(9842)]).then(()=>()=>a(92790))
            },
            n=(e,
            t)=>(a.R=t,
            t=a.o(r,
            e)?r[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            a.R=void 0,
            t),
            d=(e,
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
              init:()=>d
            })
          }
        };
        const a={
        };
        function r(t){
          const n=a[t];
          if(void 0!==n)return n.exports;
          const d=a[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(d.exports,
          d,
          d.exports,
          r),
          d.loaded=!0,
          d.exports
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
        r.cw=e=>{
          var t;
          return()=>{
            if(e){
              var a=e;
              e=0,
              t={
                exports:{
                }
              },
              a.call(t.exports,
              t,
              t.exports)
            }return t.exports
          }
        },
        (()=>{
          const e=Object.getPrototypeOf;
          let t;
          r.t=function(a,
          n){
            if(1&n&&(a=this(a)),
            8&n)return a;
            if("object"==typeof a&&a){
              if(4&n&&a.__esModule)return a;
              if(16&n&&"function"==typeof a.then)return a
            }const d=Object.create(null);
            r.r(d);
            const o={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var c=2&n&&a;
            ("object"==typeof c||"function"==typeof c)&&!~t.indexOf(c);
            c=e(c))Object.getOwnPropertyNames(c).forEach(e=>o[e]=()=>a[e]);
            return o.default=()=>a,
            r.d(d,
            o),
            d
          }
        })(),
        r.d=(e,
        t)=>{
          if(Array.isArray(t))for(var a=0;
          a<t.length;
          ){
            var n=t[a++],
            d=t[a++],
            o=0===d?{
              enumerable:!0,
              value:t[a++]
            }:{
              enumerable:!0,
              get:d
            };
            r.o(e,
            n)||Object.defineProperty(e,
            n,
            o)
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
          166:"06be27bde6534111f84e878fad131d71",
          217:"e5a5640a16f72bb91f2bb6e49eedd272",
          220:"9f6085469b84a9e510e56169dd2c04af",
          518:"c7765fcd08f3bedc279a2186ba2e104a",
          737:"c3544b3369a14cb1c8e88ab5b562da1f",
          930:"58b5608b64d7914b2fa426c0beb34e61",
          1270:"03c27bbd8c1465edba27765ffd736d81",
          1271:"242ea15cdfb0ebfed22c9a113dc2ae61",
          1472:"79f034857066ac43e6ab37e2f6ffdbed",
          1551:"752e090e7c62aa48d4b4decb87ca09e7",
          1636:"a44f37400c7a4778af1aba91fb02135b",
          1811:"af7682601cc787bbd2d499b4b4f3d2c0",
          2145:"05e59b09f1b4f1130e11a734f58345ec",
          2149:"a31a7e2e795965470700f8a1469c194a",
          2204:"007e44a6153ed9e9f06eb482ffc500a5",
          2228:"36470aa69265a9f8b427e7b37551a72a",
          2336:"19057dc290b0eb3eb49c082f50ca3fed",
          2360:"ea35b490b9da6d9e8a54de916118b0fd",
          2438:"5486dbb0b76fed2b573711ac7f1d8999",
          2598:"f85a945e5d576e415dbe38860b7fff1e",
          2786:"c42ede78afc9ac128e14a787dbc1f1b9",
          2873:"7db192951400c8b44edb28685310a838",
          2880:"ff974fa5cbb58f970b9fb719c94b90b5",
          2940:"a341bd9f3ce6c977a6f401026c7a1c4e",
          2965:"5e650b3df5aedc1b29a336155472ba1b",
          3118:"23423a1a256bc8f5012acd6028118c47",
          3372:"ac2b59f4be320b6877019d69d2dc97fc",
          3431:"552bcb2d09c80a0aee260db3fe6e9b37",
          3529:"d74f2f6c718a864eced08f75eafabf74",
          3612:"f071cfc5b8883acb8692d9b3cb9c277d",
          3664:"86d35cc64c568a4dfe30a7d101714d2e",
          3746:"f1b39b3eafca2a3b98e4edaccd9c5217",
          3819:"c0d0a30234aca4b8a90a9559a32dd06d",
          3888:"1b82b9d2f07b87d1b9bd6a183835aaaa",
          3932:"57597cd5c423eabe3c94ad72e15e8aae",
          3974:"d5915996d4f55652141df06468a2b349",
          4187:"f4f22e6bf39cb19bec52ae7acb53f730",
          4192:"2de1615b1b07dc3e3e72799fa49f4bce",
          4419:"0821d21e2fbca3e9f47bd1249377ccdb",
          4446:"9a8dcd7e28fc201398d5114ee67d0844",
          4530:"c9a4de3b0c254515daad49d0985ff5e1",
          4541:"5d5712b719dcb7f31986247e9d8c05fa",
          4584:"13fd6ee82df3b77d65e11ea1824d4ff7",
          4615:"c101517d8683b4e4e1a6a447296d442e",
          4921:"f9d339acdbe9723fab100d50f6e45a52",
          5073:"ebaf4721fb023225f59069277f5472ee",
          5657:"678a4bd762adab6755e5fc375bee8158",
          6033:"c7bcf8fcddd23fe383e71dca504d0c6c",
          6055:"acd636c043607331b47e52486c0ff803",
          6078:"bc35ca00262ed86ec7349264bcb1fc6c",
          6123:"2f45936c8c6f4f7dd7385833bfc39356",
          6147:"668317bf5495075145e81522c160caef",
          6263:"af7b29d18ed322aa7b367b3a9b87c264",
          6525:"e97371a89477eb5f55acae8d8ae1e767",
          6568:"d23fd03828cd41e3ef0fe760f0be8707",
          6589:"9967a40eb9e4e5787379367b7961290c",
          6827:"3e3aebde25f59caef3c221579262eece",
          6911:"cc5849c45f5eb63f870c75001706a456",
          7414:"1e6e0b45c84e01ee6dbcc9fc259b68d2",
          7556:"056bb859add53aee150a1e4f06da3b18",
          7794:"e51fef995a356492b637675ece463143",
          8058:"3e2b5ab8f0d5f62ea1d80220e457f8cc",
          8137:"55642edf82f7581df3c11f1686c04906",
          8139:"af9ac114dfa554cc364af405e2b5fd00",
          8277:"e5ae35514fa78e65a7738bf9443bd769",
          8528:"41c4f32697bc9bf417df5e2a579ab7c7",
          8644:"36bd27bded719e613761a2ef7963f746",
          8700:"46d9e5c5b93c5341b32fec916ff04dd6",
          9017:"96b75fcc8a8cd520a316058042b8618f",
          9181:"f9d8597afac0d92bc50c28677cf67ab1",
          9210:"a43bc023b6e759e4d39ed7eb132f0757",
          9277:"5b095eebd700144503bcf074a5d471a3",
          9292:"afb8772153f5e7167ed006a07d652614",
          9384:"2005c4805ac0c4a7d81c535f7584cd3e",
          9399:"a20dd79fd8d664339abf571e4e982429",
          9534:"707d75f9da1c52bea0fe1cf1a108a007",
          9811:"42f39257105c93104686329e2490c40e",
          9823:"4965878f83958a080eeed73f9ca84ae4",
          9842:"a4466407935100e4b0e428ef292feb7c",
          9847:"97ccc394b6eb84e634a2faeaeacf0264",
          9848:"9fdce8f0de9be19f5a473ac095a5e539",
          9862:"1c1f52022b7afa77ddccc731e9eb17a8"
        }[e]+".js",
        r.miniCssF=e=>"css/"+{
          166:"3fbff9f0bb7a9d5e33c29a83df2e683e",
          1472:"0eaca241e1a3ebf5b3a6be55743cd1f4",
          6055:"9605e4661b50b9d4fc907ee456d15b70",
          6525:"582963082f4f0f7cc2bb24710e4bac52",
          9100:"9605e4661b50b9d4fc907ee456d15b70",
          9724:"bf2fa561f78a4d4f4fc395e67f593b16",
          9842:"fd2a512a0d12ba2587307af8e65f88a5"
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
          t="@rockstargames/modules-core-header:";
          r.l=(a,
          n,
          d,
          o)=>{
            if(e[a])return void e[a].push(n);
            let c,
            f;
            if(void 0!==d){
              const e=document.getElementsByTagName("script");
              for(var i=0;
              i<e.length;
              i++){
                const r=e[i];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+d){
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
            t+d),
            c.src=a),
            e[a]=[n];
            const l=(t,
            r)=>{
              c.onerror=c.onload=null,
              clearTimeout(s);
              const n=e[a];
              if(delete e[a],
              c.parentNode?.removeChild(c),
              n?.forEach(e=>e(r)),
              t)return t(r)
            },
            s=setTimeout(l.bind(null,
            void 0,
            {
              type:"timeout",
              target:c
            }),
            12e4);
            c.onerror=l.bind(null,
            c.onerror),
            c.onload=l.bind(null,
            c.onload),
            f&&document.head.appendChild(c)
          }
        })(),
        r.r=e=>{
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
        r.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          const e={
          },
          t={
          };
          r.f.remotes=(a,
          n)=>{
            r.o(e,
            a)&&e[a].forEach(e=>{
              let a=r.R;
              a||(a=[]);
              const d=t[e];
              if(a.indexOf(d)>=0)return;
              if(a.push(d),
              d.p)return n.push(d.p);
              const o=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+d[1]+'" from '+d[2]),
                r.m[e]=()=>{
                  throw t
                },
                d.p=0
              },
              c=(e,
              t,
              a,
              r,
              c,
              f)=>{
                try{
                  const i=e(t,
                  a);
                  if(!i?.then)return c(i,
                  r,
                  f);
                  {
                    const e=i.then(e=>c(e,
                    r),
                    o);
                    if(!f)return e;
                    n.push(d.p=e)
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
              i,
              r),
              i=t=>{
                d.p=1,
                r.m[e]=e=>{
                  e.exports=t()
                }
              };
              c(r,
              d[2],
              0,
              0,
              (e,
              t,
              a)=>e?c(r.I,
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
          r.S={
          };
          const e={
          },
          t={
          };
          r.I=(a,
          n)=>{
            n||(n=[]);
            let d=t[a];
            if(d||(d=t[a]={
            }),
            n.indexOf(d)>=0)return;
            if(n.push(d),
            e[a])return e[a];
            r.o(r.S,
            a)||(r.S[a]={
            });
            const o=r.S[a],
            c="@rockstargames/modules-core-header",
            f=(e,
            t,
            a,
            r)=>{
              const n=o[e]=o[e]||{
              },
              d=n[t];
              (!d||!d.loaded&&(!r!=!d.eager?r:c>d.from))&&(n[t]={
                get:a,
                from:c,
                eager:!!r
              })
            },
            i=[];
            switch(a){
              case"default":f("@foundry-int/utils",
              "7.5.1",
              ()=>Promise.all([r.e(9181),
              r.e(8889)]).then(()=>()=>r(59181))),
              f("@foundry/icons",
              "7.5.1",
              ()=>Promise.all([r.e(2940),
              r.e(5748),
              r.e(2883),
              r.e(4592),
              r.e(6055)]).then(()=>()=>r(32940))),
              f("@radix-ui/react-accordion",
              "1.2.20",
              ()=>Promise.all([r.e(3372),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(4192)]).then(()=>()=>r(73372))),
              f("@radix-ui/react-dialog",
              "1.1.23",
              ()=>Promise.all([r.e(3431),
              r.e(220),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(829),
              r.e(4601),
              r.e(9292)]).then(()=>()=>r(50220))),
              f("@radix-ui/react-focus-scope",
              "1.1.16",
              ()=>Promise.all([r.e(5748),
              r.e(6723),
              r.e(737)]).then(()=>()=>r(60737))),
              f("@radix-ui/react-id",
              "1.1.4",
              ()=>Promise.all([r.e(5748),
              r.e(2204)]).then(()=>()=>r(72204))),
              f("@radix-ui/react-navigation-menu",
              "1.2.22",
              ()=>Promise.all([r.e(3431),
              r.e(8058),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(2883),
              r.e(1811)]).then(()=>()=>r(68058))),
              f("@radix-ui/react-popover",
              "1.1.23",
              ()=>Promise.all([r.e(3431),
              r.e(6033),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(829),
              r.e(4601),
              r.e(217)]).then(()=>()=>r(90217))),
              f("@radix-ui/react-portal",
              "1.1.17",
              ()=>Promise.all([r.e(5748),
              r.e(6723),
              r.e(8137)]).then(()=>()=>r(38137))),
              f("@radix-ui/react-slot",
              "1.3.3",
              ()=>Promise.all([r.e(5748),
              r.e(4187)]).then(()=>()=>r(24187))),
              f("@radix-ui/react-use-controllable-state",
              "1.2.6",
              ()=>Promise.all([r.e(5748),
              r.e(3932)]).then(()=>()=>r(23932))),
              f("@radix-ui/react-visually-hidden",
              "1.2.11",
              ()=>Promise.all([r.e(5748),
              r.e(6723),
              r.e(6263)]).then(()=>()=>r(66263))),
              f("@rsgweb/locale-tools",
              "0.0.0",
              ()=>Promise.all([r.e(2145),
              r.e(9534),
              r.e(5748),
              r.e(6832),
              r.e(6147)]).then(()=>()=>r(6147))),
              f("@rsgweb/modules-core-global-navigation",
              "0.0.0-development",
              ()=>Promise.all([r.e(6078),
              r.e(6525),
              r.e(166),
              r.e(9724),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(4601),
              r.e(6832),
              r.e(2883),
              r.e(4592),
              r.e(840),
              r.e(8889),
              r.e(7414),
              r.e(2704),
              r.e(1271)]).then(()=>()=>r(19322))),
              f("@rsgweb/rockstar-account",
              "0.0.0",
              ()=>Promise.all([r.e(9017),
              r.e(9534),
              r.e(5748),
              r.e(3612),
              r.e(5641),
              r.e(3746)]).then(()=>()=>r(23746))),
              f("@rsgweb/utils",
              "0.0.0-development",
              ()=>Promise.all([r.e(2145),
              r.e(9017),
              r.e(9534),
              r.e(930),
              r.e(5748),
              r.e(3612),
              r.e(5641),
              r.e(1636)]).then(()=>()=>r(91636))),
              f("@vanilla-extract/recipes",
              "0.5.7",
              ()=>Promise.all([r.e(6078),
              r.e(2228)]).then(()=>()=>r(22228))),
              f("clsx",
              "2.1.1",
              ()=>r.e(4921).then(()=>()=>r(4921))),
              f("framer-motion",
              "13.5.1",
              ()=>Promise.all([r.e(5657),
              r.e(5748),
              r.e(6911)]).then(()=>()=>r(25657))),
              f("gsap",
              "3.12.5",
              ()=>r.e(3529).then(()=>()=>r(93529))),
              f("react-dom",
              "19.2.8",
              ()=>Promise.all([r.e(5748),
              r.e(9848)]).then(()=>()=>r(79848))),
              f("react-intl",
              "10.2.2",
              ()=>Promise.all([r.e(2873),
              r.e(5748),
              r.e(4530)]).then(()=>()=>r(22873))),
              f("react-remove-scroll",
              "2.7.2",
              ()=>Promise.all([r.e(8139),
              r.e(5748)]).then(()=>()=>r(38139))),
              f("react",
              "19.2.8",
              ()=>r.e(3888).then(()=>()=>r(83888))),
              f("spatial-navigation-polyfill",
              "1.3.1",
              ()=>r.e(4446).then(()=>()=>r(54446)));
              break;
              case"header":f("@foundry/react",
              "7.5.1",
              ()=>Promise.all([r.e(3431),
              r.e(6078),
              r.e(6033),
              r.e(6525),
              r.e(1472),
              r.e(166),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(829),
              r.e(4601),
              r.e(6832),
              r.e(2883),
              r.e(4592),
              r.e(840),
              r.e(8889),
              r.e(5501),
              r.e(2149)]).then(()=>()=>r(11472)))
            }return e[a]=i.length?Promise.all(i).then(()=>e[a]=1):1
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
              t>-1&&(!e||!/^https?:/.test(e));
              )e=a[t--].src
            }
          }if(!e)throw new Error("Automatic publicPath is not supported in this browser");
          e=e.replace(/^blob:|[?#].*$/g,
          "").replace(/\/[^/]+$/,
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
          t=(t,
          a)=>{
            t=e(t),
            a=e(a);
            for(var r=0;
            ;
            ){
              if(r>=t.length)return r<a.length&&"u"!=(typeof a[r])[0];
              var n=t[r],
              d=(typeof n)[0];
              if(r>=a.length)return"u"==d;
              var o=a[r],
              c=(typeof o)[0];
              if(d!=c)return"o"==d&&"n"==c||"s"==c||"u"==d;
              if("o"!=d&&"u"!=d&&n!=o)return n<o;
              r++
            }
          },
          a=e=>{
            var t=e[0],
            r="";
            if(1===e.length)return"*";
            if(t+.5){
              r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";
              for(var n=1,
              d=1;
              d<e.length;
              d++)n--,
              r+="u"==(typeof(c=e[d]))[0]?"-":(n>0?".":"")+(n=2,
              c);
              return r
            }var o=[];
            for(d=1;
            d<e.length;
            d++){
              var c=e[d];
              o.push(0===c?"not("+f()+")":1===c?"("+f()+" || "+f()+")":2===c?o.pop()+" "+o.pop():a(c))
            }return f();
            function f(){
              return o.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          n=(t,
          a)=>{
            if(0 in t){
              a=e(a);
              var r=t[0],
              d=r<0;
              d&&(r=-r-1);
              for(var o=0,
              c=1,
              f=!0;
              ;
              c++,
              o++){
                var i,
                l,
                s=c<t.length?(typeof t[c])[0]:"";
                if(o>=a.length||"o"==(l=(typeof(i=a[o]))[0]))return!f||("u"==s?c>r&&!d:""==s!=d);
                if("u"==l){
                  if(!f||"u"!=s)return!1
                }else if(f)if(s==l)if(c<=r){
                  if(i!=t[c])return!1
                }else{
                  if(d?i>t[c]:i<t[c])return!1;
                  i!=t[c]&&(f=!1)
                }else if("s"!=s&&"n"!=s){
                  if(d||c<=r)return!1;
                  f=!1,
                  c--
                }else{
                  if(c<=r||l<s!=d)return!1;
                  f=!1
                }else"s"!=s&&"n"!=s&&(f=!1,
                c--)
              }
            }var b=[],
            u=b.pop.bind(b);
            for(o=1;
            o<t.length;
            o++){
              var h=t[o];
              b.push(1==h?u()|u():2==h?u()&u():h?n(h,
              a):!u())
            }return!!u()
          };
          const d=(e,
          t)=>e&&r.o(e,
          t),
          o=e=>(e.loaded=1,
          e.get()),
          c=e=>Object.keys(e).reduce((t,
          a)=>(e[a].eager&&(t[a]=e[a]),
          t),
          {
          }),
          f=(e,
          a,
          r)=>{
            const n=r?c(e[a]):e[a];
            return Object.keys(n).reduce((e,
            a)=>!e||!n[e].loaded&&t(e,
            a)?a:e,
            0)
          },
          i=e=>{
            throw new Error(e)
          },
          l=e=>function(t,
          a,
          n,
          d,
          o){
            const c=r.I(t);
            return c?.then&&!n?c.then(e.bind(e,
            t,
            r.S[t],
            a,
            !1,
            d,
            o)):e(t,
            r.S[t],
            a,
            n,
            d,
            o)
          },
          s=(e,
          t,
          a)=>a?a():((e,
          t)=>i("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          b=l((e,
          a,
          r,
          n,
          f)=>d(a,
          r)?o(((e,
          a,
          r)=>{
            const n=r?c(e[a]):e[a];
            return(a=Object.keys(n).reduce((e,
            a)=>!e||t(e,
            a)?a:e,
            0))&&n[a]
          })(a,
          r,
          n)):s(e,
          r,
          f)),
          u=l((e,
          r,
          f,
          l,
          b,
          u)=>{
            if(!d(r,
            f))return s(e,
            f,
            u);
            const h=((e,
            a,
            r,
            d)=>{
              const o=d?c(e[a]):e[a];
              return(a=Object.keys(o).reduce((e,
              a)=>!n(r,
              a)||e&&!t(e,
              a)?e:a,
              0))&&o[a]
            })(r,
            f,
            b,
            l);
            return h?o(h):u?u():void i(((e,
            t,
            r,
            n,
            d)=>{
              const o=e[r];
              return"No satisfying version ("+a(n)+")"+(d?" for eager consumption":"")+" of shared module "+r+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(o).map(e=>e+" from "+o[e].from).join(", ")
            })(r,
            e,
            f,
            b,
            l))
          }),
          h=l((e,
          t,
          a,
          r,
          n)=>{
            if(!d(t,
            a))return s(e,
            a,
            n);
            const c=f(t,
            a,
            r);
            return o(t[a][c])
          }),
          p=l((e,
          t,
          r,
          c,
          i,
          l)=>{
            if(!d(t,
            r))return s(e,
            r,
            l);
            const b=f(t,
            r,
            c);
            return n(i,
            b)||(u=((e,
            t,
            r,
            n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+a(n)+")")(t,
            r,
            b,
            i),
            "undefined"!=typeof console&&console.warn&&console.warn(u)),
            o(t[r][b]);
            var u
          }),
          m={
          },
          g={
            95748:()=>h("default",
            "react",
            !1,
            ()=>r.e(3888).then(()=>()=>r(83888))),
            81270:()=>p("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>r.e(4921).then(()=>()=>r(4921))),
            14564:()=>h("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([r.e(2145),
            r.e(6832),
            r.e(8528)]).then(()=>()=>r(6147))),
            43788:()=>h("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([r.e(2145),
            r.e(9017),
            r.e(930),
            r.e(3612),
            r.e(1636)]).then(()=>()=>r(91636))),
            22704:()=>h("default",
            "framer-motion",
            !1,
            ()=>r.e(5657).then(()=>()=>r(25657))),
            8130:()=>h("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([r.e(9017),
            r.e(3612),
            r.e(3746)]).then(()=>()=>r(23746))),
            50464:()=>h("default",
            "@rsgweb/modules-core-global-navigation",
            !1,
            ()=>Promise.all([r.e(6078),
            r.e(6525),
            r.e(9724),
            r.e(6723),
            r.e(2295),
            r.e(4601),
            r.e(6832),
            r.e(2883),
            r.e(4592),
            r.e(840),
            r.e(7414)]).then(()=>()=>r(19322))),
            63747:()=>b("header",
            "@foundry/react",
            !1,
            ()=>Promise.all([r.e(3431),
            r.e(6078),
            r.e(6033),
            r.e(6525),
            r.e(1472),
            r.e(6723),
            r.e(2295),
            r.e(829),
            r.e(4601),
            r.e(6832),
            r.e(2883),
            r.e(4592),
            r.e(840),
            r.e(5501)]).then(()=>()=>r(11472))),
            82883:()=>p("default",
            "@radix-ui/react-visually-hidden",
            !1,
            [1,
            1,
            2,
            11],
            ()=>Promise.all([r.e(6723),
            r.e(8644)]).then(()=>()=>r(66263))),
            64592:()=>h("default",
            "@foundry-int/utils",
            !1,
            ()=>Promise.all([r.e(9181),
            r.e(8889)]).then(()=>()=>r(59181))),
            57281:()=>h("default",
            "react-dom",
            !1,
            ()=>r.e(3819).then(()=>()=>r(79848))),
            90699:()=>p("default",
            "@radix-ui/react-slot",
            !1,
            [1,
            1,
            3,
            3],
            ()=>r.e(6568).then(()=>()=>r(24187))),
            45478:()=>p("default",
            "@radix-ui/react-use-controllable-state",
            !1,
            [1,
            1,
            2,
            6],
            ()=>r.e(1551).then(()=>()=>r(23932))),
            55198:()=>p("default",
            "@radix-ui/react-id",
            !1,
            [1,
            1,
            1,
            4],
            ()=>r.e(9823).then(()=>()=>r(72204))),
            70829:()=>p("default",
            "react-remove-scroll",
            !1,
            [1,
            2,
            7,
            2],
            ()=>r.e(8139).then(()=>()=>r(38139))),
            14734:()=>p("default",
            "@radix-ui/react-portal",
            !1,
            [1,
            1,
            1,
            17],
            ()=>r.e(518).then(()=>()=>r(38137))),
            34588:()=>p("default",
            "@radix-ui/react-focus-scope",
            !1,
            [1,
            1,
            1,
            16],
            ()=>r.e(3118).then(()=>()=>r(60737))),
            76832:()=>h("default",
            "react-intl",
            !1,
            ()=>r.e(2873).then(()=>()=>r(22873))),
            7228:()=>p("default",
            "@radix-ui/react-accordion",
            !1,
            [1,
            1,
            2,
            20],
            ()=>r.e(3372).then(()=>()=>r(73372))),
            11494:()=>p("default",
            "@radix-ui/react-dialog",
            !1,
            [1,
            1,
            1,
            23],
            ()=>Promise.all([r.e(3431),
            r.e(220),
            r.e(829)]).then(()=>()=>r(50220))),
            13785:()=>h("default",
            "@foundry/icons",
            !1,
            ()=>Promise.all([r.e(2940),
            r.e(9100)]).then(()=>()=>r(32940))),
            18959:()=>h("default",
            "@vanilla-extract/recipes",
            !1,
            ()=>r.e(9847).then(()=>()=>r(22228))),
            44472:()=>p("default",
            "@radix-ui/react-popover",
            !1,
            [1,
            1,
            1,
            23],
            ()=>Promise.all([r.e(3431),
            r.e(6033),
            r.e(829),
            r.e(2598)]).then(()=>()=>r(90217))),
            39726:()=>u("header",
            "@foundry/react",
            !1,
            [1,
            7],
            ()=>Promise.all([r.e(3431),
            r.e(6033),
            r.e(1472),
            r.e(829),
            r.e(5501)]).then(()=>()=>r(11472))),
            59066:()=>p("default",
            "spatial-navigation-polyfill",
            !1,
            [1,
            1,
            3,
            1],
            ()=>r.e(4446).then(()=>()=>r(54446))),
            98250:()=>p("default",
            "@radix-ui/react-navigation-menu",
            !1,
            [1,
            1,
            2,
            22],
            ()=>Promise.all([r.e(3431),
            r.e(8058)]).then(()=>()=>r(68058))),
            45501:()=>h("default",
            "gsap",
            !1,
            ()=>r.e(3529).then(()=>()=>r(93529)))
          },
          y={
            829:[70829],
            840:[7228,
            11494,
            13785,
            18959,
            44472],
            2295:[45478,
            55198],
            2704:[22704],
            2883:[82883],
            4592:[64592],
            4601:[14734,
            34588],
            5501:[45501],
            5641:[14564,
            43788],
            5748:[95748],
            6723:[57281,
            90699],
            6832:[76832],
            7414:[39726,
            59066,
            98250],
            8889:[81270],
            9842:[8130,
            50464,
            63747]
          },
          v={
          };
          r.f.consumes=(e,
          t)=>{
            r.o(y,
            e)&&y[e].forEach(e=>{
              if(r.o(m,
              e))return t.push(m[e]);
              if(!v[e]){
                const a=t=>{
                  m[e]=0,
                  r.m[e]=a=>{
                    delete r.c[e],
                    a.exports=t()
                  }
                };
                v[e]=!0;
                const n=t=>{
                  delete m[e],
                  r.m[e]=a=>{
                    throw delete r.c[e],
                    t
                  }
                };
                try{
                  const r=g[e]();
                  r.then?t.push(m[e]=r.then(a).catch(n)):a(r)
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
              4295:0
            };
            r.f.miniCss=(t,
            a)=>{
              e[t]?a.push(e[t]):0!==e[t]&&{
                166:1,
                1472:1,
                6055:1,
                6525:1,
                9100:1,
                9724:1,
                9842:1
              }[t]&&a.push(e[t]=(e=>new Promise((t,
              a)=>{
                var n=r.miniCssF(e),
                d=r.p+n;
                if(((e,
                t)=>{
                  for(var a=document.getElementsByTagName("link"),
                  r=0;
                  r<a.length;
                  r++){
                    var n=(o=a[r]).getAttribute("data-href")||o.getAttribute("href");
                    if("stylesheet"===o.rel&&(n===e||n===t))return o
                  }var d=document.getElementsByTagName("style");
                  for(r=0;
                  r<d.length;
                  r++){
                    var o;
                    if((n=(o=d[r]).getAttribute("data-href"))===e||n===t)return o
                  }
                })(n,
                d))return t();
                ((e,
                t,
                a,
                n,
                d)=>{
                  var o=document.createElement("link");
                  o.rel="stylesheet",
                  o.type="text/css",
                  r.nc&&(o.nonce=r.nc),
                  o.onerror=o.onload=a=>{
                    if(o.onerror=o.onload=null,
                    "load"===a.type)n();
                    else{
                      var r=a&&a.type,
                      c=a&&a.target&&a.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+c+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=r,
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
            4295:0
          };
          r.f.j=(t,
          a)=>{
            let n=r.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)a.push(n[2]);
            else if(/^(2(295|704|883)|5(501|641|748)|8(29|40|889)|4592|4601|6723|6832|9100|9724)$/.test(t))e[t]=0;
            else{
              const d=new Promise((a,
              r)=>n=e[t]=[a,
              r]);
              a.push(n[2]=d);
              const o=new Error,
              c=a=>{
                if(r.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=a&&("load"===a.type?"missing":a.type),
                  r=a&&a.target&&a.target.src;
                  o.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",
                  o.name="ChunkLoadError",
                  o.type=e,
                  o.request=r,
                  o.event=a,
                  n[1](o)
                }
              };
              r.l(r.p+r.u(t),
              c,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          a)=>{
            let[n,
            d,
            o]=a;
            var c,
            f,
            i=0;
            if(n.some(t=>0!==e[t])){
              for(c in d)r.o(d,
              c)&&(r.m[c]=d[c]);
              o&&o(r)
            }for(t&&t(a);
            i<n.length;
            i++)f=n[i],
            r.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          a=self.webpackChunk_rockstargames_modules_core_header=self.webpackChunk_rockstargames_modules_core_header||[];
          a.forEach(t.bind(null,
          0)),
          a.push=t.bind(null,
          a.push.bind(a))
        })(),
        r.nc=void 0,
        r(23069),
        r(72892)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map