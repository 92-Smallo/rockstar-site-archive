try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="fadecba0-e2ff-41a2-9023-fe4a266bdad6",
  e._sentryDebugIdIdentifier="sentry-dbid-fadecba0-e2ff-41a2-9023-fe4a266bdad6")
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
    packageName:"@rockstargames/modules-core-header",
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
            for(var f=2&n&&a;
            ("object"==typeof f||"function"==typeof f)&&!~t.indexOf(f);
            f=e(f))Object.getOwnPropertyNames(f).forEach(e=>o[e]=()=>a[e]);
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
          166:"c434f0e7ed1119a759ee7a68de3cb4ed",
          217:"c1555cc9d4f647801e20bdc1e1d8d0d7",
          220:"be592619144ccc51c64644790d16c145",
          518:"c932ac4499bedfda8f603a12b5b0bc7f",
          737:"40ee7b8211bb1a14d200395439c274ae",
          930:"495b1407a669b23d88d0ca161f664392",
          1270:"350a409346dcfc0687e88459b8991cb6",
          1271:"111dce960e041f398d4ba4c79e60f6d0",
          1472:"2b46b9b993ed666c3e21640121f7094a",
          1551:"968f2a350d13e2f2e8665acefdcf4812",
          1636:"d6e90d484c79f1afc6f9273011305e24",
          1811:"17c84a99a8bf3da4fe72f4396b8e7353",
          2145:"ee735f60d2a7b5c9bee0a83b0b73b2c7",
          2149:"5bd21201d2512135690ba1c4c91322b4",
          2204:"afdefc94d6666b3c0a5499fd83d6789d",
          2228:"973e417963a5b7845e9c338a39979dc9",
          2336:"e349ca156b8af3f5e609a0c6b7a6fee4",
          2360:"8d24f2d74ec87a9825e06e92aba0adde",
          2438:"d977eb2826f4f98317ca1261ceebb2df",
          2598:"155d855c60e2cad4d1dcf4a270aa8ddb",
          2786:"612851b3b6dcddda38c8b61045811f36",
          2873:"5a77f63fc0f4e5f4dd5d89169aff12f2",
          2880:"3879b3aa93a919a9af7dc41490353c73",
          2940:"46f53c0ddfda3fb658060430d5c079d2",
          2965:"1de97d6b0f39fa4cae5b05d3afef55e5",
          3118:"11e83fb6776c0d66fa004439072bedcc",
          3372:"7f27ff2dbdc6a26a161bb52b680d47be",
          3431:"f24fd2f55992af3f139cc24b3aa1248f",
          3529:"13660e59afbb211c1e3f89a5f7d2cde7",
          3612:"43f5a5039beb9cd19700324ac4714ebf",
          3664:"8cf76b7e761d6a9ad7a429a8596adfc9",
          3746:"a11f2d9eab7e9cab14f36b2c25072a3f",
          3819:"f2dca30a028845b326ded28202126919",
          3888:"cba5381374b10d4abe71cd973312d0d0",
          3932:"4a126b8b9f348d29bbbc9ca4312c8a5d",
          3974:"9e5421f8c8e7877147590f126de58441",
          4187:"da69f6945c589cd03044ea2ce2ed350b",
          4192:"283b8c62aae7990cd08d0bde8ca8fd09",
          4419:"d0c6443e057c7a13d5e1b55851bc1759",
          4446:"0d449c3313acea5eaed774e6cce50adb",
          4530:"3236bc525fc220b2eaf5c15a0adc21e9",
          4541:"40183cfc4daf767a788c4e574364078e",
          4584:"006a66320f0ec42c474ed75f5733c138",
          4615:"48a6cb94ba01e42a646fb21d6b02dd26",
          4921:"13b5c4102b3c9489a1f2907564be9308",
          5073:"28f75d88965bc7813e4fad9a39ead425",
          5657:"b4d017d16f809c08a9ddfdd2d21efd29",
          6033:"367f93abd2fcfa2bbb818438f963c1e1",
          6055:"d8c0c446d77e7b2e94ce48cce7ee5da9",
          6078:"120fb6d296c95902db4892ab8daf5919",
          6123:"675ca447733f5f0cfe7d936eb41a7d58",
          6147:"a9b906d6fbbfdb4d0ad3ea0d141140e4",
          6263:"8e427c4f9647dae2cde411fb1dcf75da",
          6525:"03df2578f8d01782671b05f0dab2068d",
          6568:"0fc7bffbb3727ed26a815f38ac5d18c0",
          6589:"f54460a0343e4b9393e7e08223e10431",
          6827:"5e63fb6b0af850c3fb6ab190f6466a45",
          6911:"45d8530e049ea9a0cb59a842db3ec5b5",
          7414:"dfa3bd14b1ec5eee8fd652265f8895ee",
          7556:"84108c695a25a5096eb28c7935546497",
          7794:"44daab69eeab95b134e59eac612ba43f",
          8058:"7693da06ef465dec56a7ed691a941453",
          8137:"175e55c2ebb34b0c33926174a5fe6afc",
          8139:"f949758a7701bf85763b3af17f69bbc3",
          8277:"cf87f9a5c06bf236ad26201272b67c26",
          8528:"a633870c02148fefe3c08958cde6ca46",
          8644:"eb7e3f2be2a78186019a39d367cffcc2",
          8700:"62873f923fff4a22347d7f81d766e632",
          9017:"c2f21239fd295eedbe3b459954314e59",
          9181:"52b865c8290a3e8a4fdc54af5dc4b47f",
          9210:"def57d9d890bd76fd61a2c61dd82188f",
          9277:"9a3713dfbef55bde3955967678e8ad09",
          9292:"95c4a8ad26f82f3abbec9fe3a385845c",
          9384:"103121ef7aae32ee88ca620ba0f36401",
          9399:"9151b34a929034349cebd6eab578fb25",
          9534:"f7cce512f39f079d31da88ba92b41dde",
          9811:"9ab52833715d70c6b8e3277d38f10ec6",
          9823:"533949fe5ffc245b137bca392606e35c",
          9842:"7ca918e54b943bafbe7819e239ad1bb7",
          9847:"e1763d3d5001f2eadde6a1ca4b4d5bfb",
          9848:"a7451595399642e0f6e92fba94c44fd4",
          9862:"3f8462a80a62b6bdbca1ed614c751e30"
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
            let f,
            c;
            if(void 0!==d){
              const e=document.getElementsByTagName("script");
              for(var i=0;
              i<e.length;
              i++){
                const r=e[i];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+d){
                  f=r;
                  break
                }
              }
            }f||(c=!0,
            f=document.createElement("script"),
            f.charset="utf-8",
            r.nc&&f.setAttribute("nonce",
            r.nc),
            f.setAttribute("data-webpack",
            t+d),
            f.src=a),
            e[a]=[n];
            const l=(t,
            r)=>{
              f.onerror=f.onload=null,
              clearTimeout(s);
              const n=e[a];
              if(delete e[a],
              f.parentNode?.removeChild(f),
              n?.forEach(e=>e(r)),
              t)return t(r)
            },
            s=setTimeout(l.bind(null,
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
            c&&document.head.appendChild(f)
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
              f=(e,
              t,
              a,
              r,
              f,
              c)=>{
                try{
                  const i=e(t,
                  a);
                  if(!i?.then)return f(i,
                  r,
                  c);
                  {
                    const e=i.then(e=>f(e,
                    r),
                    o);
                    if(!c)return e;
                    n.push(d.p=e)
                  }
                }catch(e){
                  o(e)
                }
              },
              c=(e,
              t,
              r)=>f(t.get,
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
              f(r,
              d[2],
              0,
              0,
              (e,
              t,
              a)=>e?f(r.I,
              d[0],
              0,
              e,
              c,
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
            f="@rockstargames/modules-core-header",
            c=(e,
            t,
            a,
            r)=>{
              const n=o[e]=o[e]||{
              },
              d=n[t];
              (!d||!d.loaded&&(!r!=!d.eager?r:f>d.from))&&(n[t]={
                get:a,
                from:f,
                eager:!!r
              })
            },
            i=[];
            switch(a){
              case"default":c("@foundry-int/utils",
              "7.5.1",
              ()=>Promise.all([r.e(9181),
              r.e(8889)]).then(()=>()=>r(59181))),
              c("@foundry/icons",
              "7.5.1",
              ()=>Promise.all([r.e(2940),
              r.e(5748),
              r.e(2883),
              r.e(4592),
              r.e(6055)]).then(()=>()=>r(32940))),
              c("@radix-ui/react-accordion",
              "1.2.20",
              ()=>Promise.all([r.e(3372),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(4192)]).then(()=>()=>r(73372))),
              c("@radix-ui/react-dialog",
              "1.1.23",
              ()=>Promise.all([r.e(3431),
              r.e(220),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(829),
              r.e(4601),
              r.e(9292)]).then(()=>()=>r(50220))),
              c("@radix-ui/react-focus-scope",
              "1.1.16",
              ()=>Promise.all([r.e(5748),
              r.e(6723),
              r.e(737)]).then(()=>()=>r(60737))),
              c("@radix-ui/react-id",
              "1.1.4",
              ()=>Promise.all([r.e(5748),
              r.e(2204)]).then(()=>()=>r(72204))),
              c("@radix-ui/react-navigation-menu",
              "1.2.22",
              ()=>Promise.all([r.e(3431),
              r.e(8058),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(2883),
              r.e(1811)]).then(()=>()=>r(68058))),
              c("@radix-ui/react-popover",
              "1.1.23",
              ()=>Promise.all([r.e(3431),
              r.e(6033),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(829),
              r.e(4601),
              r.e(217)]).then(()=>()=>r(90217))),
              c("@radix-ui/react-portal",
              "1.1.17",
              ()=>Promise.all([r.e(5748),
              r.e(6723),
              r.e(8137)]).then(()=>()=>r(38137))),
              c("@radix-ui/react-slot",
              "1.3.3",
              ()=>Promise.all([r.e(5748),
              r.e(4187)]).then(()=>()=>r(24187))),
              c("@radix-ui/react-use-controllable-state",
              "1.2.6",
              ()=>Promise.all([r.e(5748),
              r.e(3932)]).then(()=>()=>r(23932))),
              c("@radix-ui/react-visually-hidden",
              "1.2.11",
              ()=>Promise.all([r.e(5748),
              r.e(6723),
              r.e(6263)]).then(()=>()=>r(66263))),
              c("@rsgweb/locale-tools",
              "0.0.0",
              ()=>Promise.all([r.e(2145),
              r.e(9534),
              r.e(5748),
              r.e(6832),
              r.e(6147)]).then(()=>()=>r(6147))),
              c("@rsgweb/modules-core-global-navigation",
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
              c("@rsgweb/rockstar-account",
              "0.0.0",
              ()=>Promise.all([r.e(9017),
              r.e(9534),
              r.e(5748),
              r.e(3612),
              r.e(5641),
              r.e(3746)]).then(()=>()=>r(23746))),
              c("@rsgweb/utils",
              "0.0.0-development",
              ()=>Promise.all([r.e(2145),
              r.e(9017),
              r.e(9534),
              r.e(930),
              r.e(5748),
              r.e(3612),
              r.e(5641),
              r.e(1636)]).then(()=>()=>r(91636))),
              c("@vanilla-extract/recipes",
              "0.5.7",
              ()=>Promise.all([r.e(6078),
              r.e(2228)]).then(()=>()=>r(22228))),
              c("clsx",
              "2.1.1",
              ()=>r.e(4921).then(()=>()=>r(4921))),
              c("framer-motion",
              "13.5.1",
              ()=>Promise.all([r.e(5657),
              r.e(5748),
              r.e(6911)]).then(()=>()=>r(25657))),
              c("gsap",
              "3.12.5",
              ()=>r.e(3529).then(()=>()=>r(93529))),
              c("react-dom",
              "19.2.8",
              ()=>Promise.all([r.e(5748),
              r.e(9848)]).then(()=>()=>r(79848))),
              c("react-intl",
              "10.2.2",
              ()=>Promise.all([r.e(2873),
              r.e(5748),
              r.e(4530)]).then(()=>()=>r(22873))),
              c("react-remove-scroll",
              "2.7.2",
              ()=>Promise.all([r.e(8139),
              r.e(5748)]).then(()=>()=>r(38139))),
              c("react",
              "19.2.8",
              ()=>r.e(3888).then(()=>()=>r(83888))),
              c("spatial-navigation-polyfill",
              "1.3.1",
              ()=>r.e(4446).then(()=>()=>r(54446)));
              break;
              case"header":c("@foundry/react",
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
              f=(typeof o)[0];
              if(d!=f)return"o"==d&&"n"==f||"s"==f||"u"==d;
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
              r+="u"==(typeof(f=e[d]))[0]?"-":(n>0?".":"")+(n=2,
              f);
              return r
            }var o=[];
            for(d=1;
            d<e.length;
            d++){
              var f=e[d];
              o.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?o.pop()+" "+o.pop():a(f))
            }return c();
            function c(){
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
              f=1,
              c=!0;
              ;
              f++,
              o++){
                var i,
                l,
                s=f<t.length?(typeof t[f])[0]:"";
                if(o>=a.length||"o"==(l=(typeof(i=a[o]))[0]))return!c||("u"==s?f>r&&!d:""==s!=d);
                if("u"==l){
                  if(!c||"u"!=s)return!1
                }else if(c)if(s==l)if(f<=r){
                  if(i!=t[f])return!1
                }else{
                  if(d?i>t[f]:i<t[f])return!1;
                  i!=t[f]&&(c=!1)
                }else if("s"!=s&&"n"!=s){
                  if(d||f<=r)return!1;
                  c=!1,
                  f--
                }else{
                  if(f<=r||l<s!=d)return!1;
                  c=!1
                }else"s"!=s&&"n"!=s&&(c=!1,
                f--)
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
          f=e=>Object.keys(e).reduce((t,
          a)=>(e[a].eager&&(t[a]=e[a]),
          t),
          {
          }),
          c=(e,
          a,
          r)=>{
            const n=r?f(e[a]):e[a];
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
            const f=r.I(t);
            return f?.then&&!n?f.then(e.bind(e,
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
          c)=>d(a,
          r)?o(((e,
          a,
          r)=>{
            const n=r?f(e[a]):e[a];
            return(a=Object.keys(n).reduce((e,
            a)=>!e||t(e,
            a)?a:e,
            0))&&n[a]
          })(a,
          r,
          n)):s(e,
          r,
          c)),
          u=l((e,
          r,
          c,
          l,
          b,
          u)=>{
            if(!d(r,
            c))return s(e,
            c,
            u);
            const h=((e,
            a,
            r,
            d)=>{
              const o=d?f(e[a]):e[a];
              return(a=Object.keys(o).reduce((e,
              a)=>!n(r,
              a)||e&&!t(e,
              a)?e:a,
              0))&&o[a]
            })(r,
            c,
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
            c,
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
            const f=c(t,
            a,
            r);
            return o(t[a][f])
          }),
          p=l((e,
          t,
          r,
          f,
          i,
          l)=>{
            if(!d(t,
            r))return s(e,
            r,
            l);
            const b=c(t,
            r,
            f);
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
                      f=a&&a.target&&a.target.href||t,
                      c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+f+")");
                      c.name="ChunkLoadError",
                      c.code="CSS_CHUNK_LOAD_FAILED",
                      c.type=r,
                      c.request=f,
                      o.parentNode&&o.parentNode.removeChild(o),
                      d(c)
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
              f=a=>{
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
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          a)=>{
            let[n,
            d,
            o]=a;
            var f,
            c,
            i=0;
            if(n.some(t=>0!==e[t])){
              for(f in d)r.o(d,
              f)&&(r.m[f]=d[f]);
              o&&o(r)
            }for(t&&t(a);
            i<n.length;
            i++)c=n[i],
            r.o(e,
            c)&&e[c]&&e[c][0](),
            e[c]=0
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