try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="5059410a-9a94-4724-9778-458d1a0197bc",
  e._sentryDebugIdIdentifier="sentry-dbid-5059410a-9a94-4724-9778-458d1a0197bc")
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
    release:"18c370b3dceae4ea628ff655b831f220be6cfbc8",
    packageName:"@rockstargames/modules-core-header",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"18c370b3dceae4ea628ff655b831f220be6cfbc8"
},
System.register([],
function(e,
t){
  return{
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
          72892(e,
          t,
          a){
            "use strict";
            const r={
              "./core":()=>Promise.all([a.e(2145),
              a.e(9534),
              a.e(9366),
              a.e(7571),
              a.e(5748),
              a.e(8889),
              a.e(4564),
              a.e(6492),
              a.e(3788),
              a.e(2526)]).then(()=>()=>a(78082))
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
          }
        };
        const a={
        };
        function r(t){
          const c=a[t];
          if(void 0!==c)return c.exports;
          const n=a[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(n.exports,
          n,
          n.exports,
          r),
          n.loaded=!0,
          n.exports
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
          c){
            if(1&c&&(a=this(a)),
            8&c)return a;
            if("object"==typeof a&&a){
              if(4&c&&a.__esModule)return a;
              if(16&c&&"function"==typeof a.then)return a
            }const n=Object.create(null);
            r.r(n);
            const d={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var o=2&c&&a;
            ("object"==typeof o||"function"==typeof o)&&!~t.indexOf(o);
            o=e(o))Object.getOwnPropertyNames(o).forEach(e=>d[e]=()=>a[e]);
            return d.default=()=>a,
            r.d(n,
            d),
            n
          }
        })(),
        r.d=(e,
        t)=>{
          if(Array.isArray(t))for(var a=0;
          a<t.length;
          ){
            var c=t[a++],
            n=t[a++];
            r.o(e,
            c)?0===n&&a++:0===n?Object.defineProperty(e,
            c,
            {
              enumerable:!0,
              value:t[a++]
            }):Object.defineProperty(e,
            c,
            {
              enumerable:!0,
              get:n
            })
          }else for(var c in t)r.o(t,
          c)&&!r.o(e,
          c)&&Object.defineProperty(e,
          c,
          {
            enumerable:!0,
            get:t[c]
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
          16:"aee1bc3a3e1c096705bd07c6f3e75477",
          280:"0f5b1f6e7e6baafe52e6fb0e0171822d",
          775:"1cb15a68f523c16893ce083d4439102d",
          825:"d123e6f71f2199a272dce2d27ad99c85",
          886:"b2162f7ea421c254278a34161877b1e7",
          1270:"46966c13e234270d5ace5bfd4e2e972f",
          1294:"5cbeade9c1a870d5a89b0b16eef0d52f",
          1339:"846a7093b1296a8d7a4d1222fd7fd4f4",
          1603:"1a8aa757ca41bfe585907db719ed4894",
          1621:"6ea5f363acc97ac9418a647eb5564578",
          2145:"1ff6305ee7946a7f153857be3a10fa23",
          2149:"939aea3d562643fa1472d3e504db406a",
          2272:"d789f3240563c19172ad6a4b8526d42f",
          2336:"60b59333dd45ff01c7c9984f2b20d052",
          2512:"ce3d18d74271044743deeb51e0f1b96d",
          2526:"e103cc9dcdc637df70fe90f947a0ee10",
          2786:"3796e9b94fa79e78b1a3e669b539cfee",
          2855:"bd30a6e592d3c415ea09aa9f3bc9a2a1",
          2880:"0dd8f4879c037ca19c31d59ceedb225c",
          2965:"2c21b7e496954c01b66d013887e2ef65",
          3085:"c7d7d1ecab56cb5e04562a667709c29d",
          3181:"540e224d462c0469779f263f63ba2b97",
          3189:"2b2c8403be7a8fee7ec8cc53fc029108",
          3529:"8c7e098456fffeb42a1c0dd1bda39d51",
          3615:"16a0ca80ac6efd4d59f76d34e30ba21e",
          3664:"235b01541e9c23827eeb8e1fc8f82cce",
          3720:"a8356280b69d78b530818a882e0b0eb0",
          3819:"af9bb5fc387a30afe1b5f1c8ad6d48ba",
          3888:"24ae94e3c873e6bfe3f1162a2a2c16f5",
          3974:"2c920d4e7046c8e19b631daf7384f6e4",
          4419:"b255d65eb0585b9ec6fb2147bc67f993",
          4427:"3d2d48b58a46524c4d497559988d35d0",
          4446:"97061d9280b85e7f6de973cca40b85a9",
          4530:"6fcd7c2744cc4f59bbaf364f9810bd8b",
          4541:"0d8ddb5c144c753e1500b56c3690d859",
          4615:"5586a9dd7854932043f14855b6e79269",
          4639:"66f1a7fe4b3f8a518349a1bf8e0f9371",
          4713:"758779a41aa6d9f7dcc8d0c4844a6a2d",
          4732:"2a2c299e5e2356ccea615419e8843b91",
          4787:"e08f617636b90c7c1bdf37dec9e11f1d",
          4921:"1b5b2da0c56c4d510a4c99f4874ecd38",
          5221:"d2c2cfa2385fe7ab1772a8ba76134a64",
          5406:"7e47e73dddb2a971d469a0c0e67b8123",
          5562:"40d238aa1ca61e75ab37a9dcd88ff8b9",
          5669:"748ae94acea33725850374f1f6c7353e",
          5729:"499cc3ddf769716621cbecb1d00a43f0",
          5808:"b9238e2a229a6077afa1f27ca4839340",
          5826:"7df3424eb39605eba77e3065210d225e",
          5996:"ee6009a085404189917f34f99794c4eb",
          6078:"34446ee2e7b1bdd9b016ec0ba885ea22",
          6206:"187336b3d23b3743ce795b1182ff5d26",
          6435:"7b0130b14fdd1672849a07846e7ac5de",
          6592:"ccd674ba5f7bc3a2618ad07dd07d3d73",
          6753:"e172c91c9bf1dc20913c13b358e26215",
          6827:"605c4c59f74728cf94a0ccf73c1713ed",
          6886:"8b7e8d1d9da7d1c7b80ebf3024d75603",
          6911:"c8b4b6905df73f810089bdf9cf90be73",
          6918:"cd318c40f026c88f6ec33cd52b32fa5c",
          7020:"8f9f7a1c0adf4da0eef8ca7ff21da748",
          7094:"3008ca6837b10d710ee9c43477214eec",
          7168:"d36061515f10f587c5821a45519d96f0",
          7302:"ba85b5ed7c98b0b6db891295ecb11dba",
          7341:"4241c8f74f5246c8543c3c8002d0bddd",
          7571:"6ba2a5f90340c62e510d821cadc39bf5",
          7850:"9415ece737b0018447933da054c43ca0",
          7899:"bc56a4ced942ea5e65913e48f46cf529",
          7956:"e03e57a719e0da40c6a8f4a2a45ce0f3",
          8050:"b1265a19303a97c1dbe3f797cf0d260f",
          8350:"d89ba67ae0258d33fe4113ecf08c4c6c",
          8509:"25d4009310f3a0707f8f2b772ab28d7c",
          8700:"70e88075feb953ad5e44c2c9a672fcba",
          8816:"8b21a81073ed0fe257933b8bb3fb83a6",
          8838:"ccce6e5997a76646c199a3b2a1cbf1ce",
          9134:"cb6fa6873fe15cbe06db2acc39fb08f2",
          9277:"07c726597ab8cfc040db3d35454125e1",
          9292:"396e304d1fdb958261c44e6ffc69fe66",
          9343:"db69765d3b8d3d653ca19fded895290d",
          9366:"3f7e7a7af6a562ce0f9cfe9adf5fdfbe",
          9534:"c7f577f1e1b77292852e350b9a6e9324",
          9593:"db5a676e8f9933e9e2f0c54109d5a305",
          9680:"74c9392f1b20adaf0a46fe34c5c4a3ec",
          9723:"d127d683304ce5ab264c4ad2b4f9ab27",
          9848:"aa5b335f2e165c09bd8fecdf59673ef5"
        }[e]+".js",
        r.miniCssF=e=>"css/"+{
          982:"3ca97b449ef47d62966bc6e62e7bf3cd",
          2526:"fd2a512a0d12ba2587307af8e65f88a5",
          5729:"ee1a4a9963ab9332f7c1a83f827fad21",
          6886:"9605e4661b50b9d4fc907ee456d15b70",
          7956:"7f29301d0cac418b5af37ea4c23dd90f",
          9101:"9605e4661b50b9d4fc907ee456d15b70",
          9366:"97b2969c4bb7e6b2fe2826bedb12c873"
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
          c,
          n,
          d)=>{
            if(e[a])return void e[a].push(c);
            let o,
            f;
            if(void 0!==n){
              const e=document.getElementsByTagName("script");
              for(var i=0;
              i<e.length;
              i++){
                const r=e[i];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+n){
                  o=r;
                  break
                }
              }
            }o||(f=!0,
            o=document.createElement("script"),
            o.charset="utf-8",
            r.nc&&o.setAttribute("nonce",
            r.nc),
            o.setAttribute("data-webpack",
            t+n),
            o.src=a),
            e[a]=[c];
            const l=(t,
            r)=>{
              o.onerror=o.onload=null,
              clearTimeout(s);
              const c=e[a];
              if(delete e[a],
              o.parentNode?.removeChild(o),
              c?.forEach(e=>e(r)),
              t)return t(r)
            },
            s=setTimeout(l.bind(null,
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
          const e={
          },
          t={
          };
          r.f.remotes=(a,
          c)=>{
            r.o(e,
            a)&&e[a].forEach(e=>{
              let a=r.R;
              a||(a=[]);
              const n=t[e];
              if(a.indexOf(n)>=0)return;
              if(a.push(n),
              n.p)return c.push(n.p);
              const d=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),
                r.m[e]=()=>{
                  throw t
                },
                n.p=0
              },
              o=(e,
              t,
              a,
              r,
              o,
              f)=>{
                try{
                  const i=e(t,
                  a);
                  if(!i?.then)return o(i,
                  r,
                  f);
                  {
                    const e=i.then(e=>o(e,
                    r),
                    d);
                    if(!f)return e;
                    c.push(n.p=e)
                  }
                }catch(e){
                  d(e)
                }
              },
              f=(e,
              t,
              r)=>o(t.get,
              n[1],
              a,
              0,
              i,
              r),
              i=t=>{
                n.p=1,
                r.m[e]=e=>{
                  e.exports=t()
                }
              };
              o(r,
              n[2],
              0,
              0,
              (e,
              t,
              a)=>e?o(r.I,
              n[0],
              0,
              e,
              f,
              a):d(),
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
          c)=>{
            c||(c=[]);
            let n=t[a];
            if(n||(n=t[a]={
            }),
            c.indexOf(n)>=0)return;
            if(c.push(n),
            e[a])return e[a];
            r.o(r.S,
            a)||(r.S[a]={
            });
            const d=r.S[a],
            o="@rockstargames/modules-core-header",
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
            i=[];
            switch(a){
              case"default":f("@foundry-int/utils",
              "6.6.1",
              ()=>Promise.all([r.e(886),
              r.e(8889)]).then(()=>()=>r(10886))),
              f("@foundry/icons",
              "6.6.1",
              ()=>Promise.all([r.e(8838),
              r.e(5748),
              r.e(3391),
              r.e(5999),
              r.e(6886)]).then(()=>()=>r(58838))),
              f("@radix-ui/react-accordion",
              "1.2.20",
              ()=>Promise.all([r.e(8350),
              r.e(5748),
              r.e(1543),
              r.e(4197),
              r.e(9292)]).then(()=>()=>r(88350))),
              f("@radix-ui/react-dialog",
              "1.1.23",
              ()=>Promise.all([r.e(2855),
              r.e(9723),
              r.e(5748),
              r.e(1543),
              r.e(4197),
              r.e(4632),
              r.e(9213),
              r.e(6911)]).then(()=>()=>r(69723))),
              f("@radix-ui/react-focus-scope",
              "1.1.16",
              ()=>Promise.all([r.e(5748),
              r.e(1543),
              r.e(1339)]).then(()=>()=>r(31339))),
              f("@radix-ui/react-id",
              "1.1.4",
              ()=>Promise.all([r.e(5748),
              r.e(7094)]).then(()=>()=>r(17094))),
              f("@radix-ui/react-navigation-menu",
              "1.2.22",
              ()=>Promise.all([r.e(2855),
              r.e(6206),
              r.e(5748),
              r.e(1543),
              r.e(4197),
              r.e(3391),
              r.e(4530)]).then(()=>()=>r(16206))),
              f("@radix-ui/react-popover",
              "1.1.23",
              ()=>Promise.all([r.e(2855),
              r.e(1621),
              r.e(5748),
              r.e(1543),
              r.e(4197),
              r.e(4632),
              r.e(9213),
              r.e(3181)]).then(()=>()=>r(25562))),
              f("@radix-ui/react-portal",
              "1.1.17",
              ()=>Promise.all([r.e(5748),
              r.e(1543),
              r.e(4639)]).then(()=>()=>r(37020))),
              f("@radix-ui/react-slot",
              "1.3.3",
              ()=>Promise.all([r.e(5748),
              r.e(6753)]).then(()=>()=>r(66753))),
              f("@radix-ui/react-use-controllable-state",
              "1.2.6",
              ()=>Promise.all([r.e(5748),
              r.e(4787)]).then(()=>()=>r(84787))),
              f("@radix-ui/react-visually-hidden",
              "1.2.11",
              ()=>Promise.all([r.e(5748),
              r.e(1543),
              r.e(7899)]).then(()=>()=>r(67899))),
              f("@rsgweb/locale-tools",
              "0.0.0",
              ()=>Promise.all([r.e(2145),
              r.e(9534),
              r.e(5748),
              r.e(509),
              r.e(5996)]).then(()=>()=>r(75996))),
              f("@rsgweb/modules-core-global-navigation",
              "0.0.0-development",
              ()=>Promise.all([r.e(6078),
              r.e(5729),
              r.e(9366),
              r.e(982),
              r.e(5748),
              r.e(1543),
              r.e(4197),
              r.e(4632),
              r.e(509),
              r.e(3391),
              r.e(5999),
              r.e(7935),
              r.e(8889),
              r.e(5406),
              r.e(6492),
              r.e(2512)]).then(()=>()=>r(95406))),
              f("@rsgweb/rockstar-account",
              "0.0.0",
              ()=>Promise.all([r.e(9593),
              r.e(9534),
              r.e(6918),
              r.e(5748),
              r.e(2272),
              r.e(4564),
              r.e(8509),
              r.e(3788)]).then(()=>()=>r(18509))),
              f("@rsgweb/utils",
              "0.0.0-development",
              ()=>Promise.all([r.e(2145),
              r.e(9593),
              r.e(9534),
              r.e(7341),
              r.e(5748),
              r.e(2272),
              r.e(4564),
              r.e(5221)]).then(()=>()=>r(25221))),
              f("@vanilla-extract/recipes",
              "0.5.7",
              ()=>Promise.all([r.e(6078),
              r.e(5669)]).then(()=>()=>r(55669))),
              f("clsx",
              "2.1.1",
              ()=>r.e(4921).then(()=>()=>r(4921))),
              f("framer-motion",
              "12.43.0",
              ()=>Promise.all([r.e(5808),
              r.e(5748),
              r.e(2149)]).then(()=>()=>r(45808))),
              f("gsap",
              "3.12.5",
              ()=>r.e(3529).then(()=>()=>r(93529))),
              f("react-dom",
              "19.2.8",
              ()=>Promise.all([r.e(5748),
              r.e(9848)]).then(()=>()=>r(79848))),
              f("react-intl",
              "10.1.22",
              ()=>Promise.all([r.e(775),
              r.e(5748),
              r.e(8816)]).then(()=>()=>r(30775))),
              f("react-remove-scroll",
              "2.7.2",
              ()=>Promise.all([r.e(825),
              r.e(5748)]).then(()=>()=>r(70825))),
              f("react",
              "19.2.8",
              ()=>r.e(3888).then(()=>()=>r(83888))),
              f("spatial-navigation-polyfill",
              "1.3.1",
              ()=>r.e(4446).then(()=>()=>r(54446)));
              break;
              case"header":f("@foundry/react",
              "6.6.1",
              ()=>Promise.all([r.e(2855),
              r.e(6078),
              r.e(5729),
              r.e(1621),
              r.e(9366),
              r.e(7956),
              r.e(5748),
              r.e(1543),
              r.e(4197),
              r.e(4632),
              r.e(9213),
              r.e(509),
              r.e(3391),
              r.e(5999),
              r.e(7935),
              r.e(8889),
              r.e(5501),
              r.e(6435)]).then(()=>()=>r(57956)))
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
          t=(t,
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
          },
          a=e=>{
            var t=e[0],
            r="";
            if(1===e.length)return"*";
            if(t+.5){
              r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";
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
              d.push(0===o?"not("+f()+")":1===o?"("+f()+" || "+f()+")":2===o?d.pop()+" "+d.pop():a(o))
            }return f();
            function f(){
              return d.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          c=(t,
          a)=>{
            if(0 in t){
              a=e(a);
              var r=t[0],
              n=r<0;
              n&&(r=-r-1);
              for(var d=0,
              o=1,
              f=!0;
              ;
              o++,
              d++){
                var i,
                l,
                s=o<t.length?(typeof t[o])[0]:"";
                if(d>=a.length||"o"==(l=(typeof(i=a[d]))[0]))return!f||("u"==s?o>r&&!n:""==s!=n);
                if("u"==l){
                  if(!f||"u"!=s)return!1
                }else if(f)if(s==l)if(o<=r){
                  if(i!=t[o])return!1
                }else{
                  if(n?i>t[o]:i<t[o])return!1;
                  i!=t[o]&&(f=!1)
                }else if("s"!=s&&"n"!=s){
                  if(n||o<=r)return!1;
                  f=!1,
                  o--
                }else{
                  if(o<=r||l<s!=n)return!1;
                  f=!1
                }else"s"!=s&&"n"!=s&&(f=!1,
                o--)
              }
            }var b=[],
            u=b.pop.bind(b);
            for(d=1;
            d<t.length;
            d++){
              var h=t[d];
              b.push(1==h?u()|u():2==h?u()&u():h?c(h,
              a):!u())
            }return!!u()
          };
          const n=(e,
          t)=>e&&r.o(e,
          t),
          d=e=>(e.loaded=1,
          e.get()),
          o=e=>Object.keys(e).reduce((t,
          a)=>(e[a].eager&&(t[a]=e[a]),
          t),
          {
          }),
          f=(e,
          a,
          r)=>{
            const c=r?o(e[a]):e[a];
            return Object.keys(c).reduce((e,
            a)=>!e||!c[e].loaded&&t(e,
            a)?a:e,
            0)
          },
          i=e=>function(t,
          a,
          c,
          n,
          d){
            const o=r.I(t);
            return o?.then&&!c?o.then(e.bind(e,
            t,
            r.S[t],
            a,
            !1,
            n,
            d)):e(t,
            r.S[t],
            a,
            c,
            n,
            d)
          },
          l=(e,
          t,
          a)=>a?a():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=i((e,
          a,
          r,
          c,
          f)=>n(a,
          r)?d(((e,
          a,
          r)=>{
            const c=r?o(e[a]):e[a];
            return(a=Object.keys(c).reduce((e,
            a)=>!e||t(e,
            a)?a:e,
            0))&&c[a]
          })(a,
          r,
          c)):l(e,
          r,
          f)),
          b=i((e,
          t,
          a,
          r,
          c)=>{
            if(!n(t,
            a))return l(e,
            a,
            c);
            const o=f(t,
            a,
            r);
            return d(t[a][o])
          }),
          u=i((e,
          t,
          r,
          o,
          i,
          s)=>{
            if(!n(t,
            r))return l(e,
            r,
            s);
            const b=f(t,
            r,
            o);
            return c(i,
            b)||(u=((e,
            t,
            r,
            c)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+a(c)+")")(t,
            r,
            b,
            i),
            "undefined"!=typeof console&&console.warn&&console.warn(u)),
            d(t[r][b]);
            var u
          }),
          h={
          },
          p={
            95748:()=>b("default",
            "react",
            !1,
            ()=>r.e(3888).then(()=>()=>r(83888))),
            81270:()=>u("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>r.e(4921).then(()=>()=>r(4921))),
            14564:()=>b("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([r.e(2145),
            r.e(509),
            r.e(3615)]).then(()=>()=>r(75996))),
            1914:()=>s("header",
            "@foundry/react",
            !1,
            ()=>Promise.all([r.e(2855),
            r.e(6078),
            r.e(5729),
            r.e(1621),
            r.e(7956),
            r.e(1543),
            r.e(4197),
            r.e(4632),
            r.e(9213),
            r.e(509),
            r.e(3391),
            r.e(5999),
            r.e(7935),
            r.e(5501)]).then(()=>()=>r(57956))),
            24267:()=>b("default",
            "framer-motion",
            !1,
            ()=>r.e(5808).then(()=>()=>r(45808))),
            43788:()=>b("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([r.e(2145),
            r.e(9593),
            r.e(7341),
            r.e(2272),
            r.e(5221)]).then(()=>()=>r(25221))),
            8130:()=>b("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([r.e(9593),
            r.e(6918),
            r.e(2272),
            r.e(8509)]).then(()=>()=>r(18509))),
            50464:()=>b("default",
            "@rsgweb/modules-core-global-navigation",
            !1,
            ()=>Promise.all([r.e(6078),
            r.e(5729),
            r.e(982),
            r.e(1543),
            r.e(4197),
            r.e(4632),
            r.e(509),
            r.e(3391),
            r.e(5999),
            r.e(7935),
            r.e(5406)]).then(()=>()=>r(95406))),
            83391:()=>u("default",
            "@radix-ui/react-visually-hidden",
            !1,
            [1,
            1,
            2,
            11],
            ()=>Promise.all([r.e(1543),
            r.e(280)]).then(()=>()=>r(67899))),
            75999:()=>b("default",
            "@foundry-int/utils",
            !1,
            ()=>Promise.all([r.e(886),
            r.e(8889)]).then(()=>()=>r(10886))),
            27375:()=>u("default",
            "@radix-ui/react-slot",
            !1,
            [1,
            1,
            3,
            3],
            ()=>r.e(9134).then(()=>()=>r(66753))),
            57281:()=>b("default",
            "react-dom",
            !1,
            ()=>r.e(3819).then(()=>()=>r(79848))),
            27134:()=>u("default",
            "@radix-ui/react-use-controllable-state",
            !1,
            [1,
            1,
            2,
            6],
            ()=>r.e(7168).then(()=>()=>r(84787))),
            36702:()=>u("default",
            "@radix-ui/react-id",
            !1,
            [1,
            1,
            1,
            4],
            ()=>r.e(4713).then(()=>()=>r(17094))),
            49442:()=>u("default",
            "@radix-ui/react-focus-scope",
            !1,
            [1,
            1,
            1,
            16],
            ()=>r.e(3720).then(()=>()=>r(31339))),
            90909:()=>u("default",
            "@radix-ui/react-portal",
            !1,
            [1,
            1,
            1,
            17],
            ()=>r.e(7020).then(()=>()=>r(37020))),
            79213:()=>u("default",
            "react-remove-scroll",
            !1,
            [1,
            2,
            7,
            2],
            ()=>r.e(825).then(()=>()=>r(70825))),
            50509:()=>b("default",
            "react-intl",
            !1,
            ()=>r.e(775).then(()=>()=>r(30775))),
            13189:()=>u("default",
            "@radix-ui/react-popover",
            !1,
            [1,
            1,
            1,
            23],
            ()=>Promise.all([r.e(2855),
            r.e(1621),
            r.e(9213),
            r.e(5562)]).then(()=>()=>r(25562))),
            17894:()=>u("default",
            "@radix-ui/react-accordion",
            !1,
            [1,
            1,
            2,
            20],
            ()=>r.e(8350).then(()=>()=>r(88350))),
            33442:()=>b("default",
            "@foundry/icons",
            !1,
            ()=>Promise.all([r.e(8838),
            r.e(9101)]).then(()=>()=>r(58838))),
            49731:()=>b("default",
            "@vanilla-extract/recipes",
            !1,
            ()=>r.e(8050).then(()=>()=>r(55669))),
            87403:()=>u("default",
            "@radix-ui/react-dialog",
            !1,
            [1,
            1,
            1,
            23],
            ()=>Promise.all([r.e(2855),
            r.e(9723),
            r.e(9213)]).then(()=>()=>r(69723))),
            43670:()=>u("default",
            "@radix-ui/react-navigation-menu",
            !1,
            [1,
            1,
            2,
            22],
            ()=>Promise.all([r.e(2855),
            r.e(6206)]).then(()=>()=>r(16206))),
            59066:()=>u("default",
            "spatial-navigation-polyfill",
            !1,
            [1,
            1,
            3,
            1],
            ()=>r.e(4446).then(()=>()=>r(54446))),
            45501:()=>b("default",
            "gsap",
            !1,
            ()=>r.e(3529).then(()=>()=>r(93529)))
          },
          m={
            509:[50509],
            1543:[27375,
            57281],
            2526:[8130,
            50464],
            3391:[83391],
            3788:[43788],
            4197:[27134,
            36702],
            4564:[14564],
            4632:[49442,
            90909],
            5406:[43670,
            59066],
            5501:[45501],
            5748:[95748],
            5999:[75999],
            6492:[1914,
            24267],
            7935:[13189,
            17894,
            33442,
            49731,
            87403],
            8889:[81270],
            9213:[79213]
          },
          g={
          };
          r.f.consumes=(e,
          t)=>{
            r.o(m,
            e)&&m[e].forEach(e=>{
              if(r.o(h,
              e))return t.push(h[e]);
              if(!g[e]){
                const a=t=>{
                  h[e]=0,
                  r.m[e]=a=>{
                    delete r.c[e],
                    a.exports=t()
                  }
                };
                g[e]=!0;
                const c=t=>{
                  delete h[e],
                  r.m[e]=a=>{
                    throw delete r.c[e],
                    t
                  }
                };
                try{
                  const r=p[e]();
                  r.then?t.push(h[e]=r.then(a).catch(c)):a(r)
                }catch(e){
                  c(e)
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
                982:1,
                2526:1,
                5729:1,
                6886:1,
                7956:1,
                9101:1,
                9366:1
              }[t]&&a.push(e[t]=(e=>new Promise((t,
              a)=>{
                var c=r.miniCssF(e),
                n=r.p+c;
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
                })(c,
                n))return t();
                ((e,
                t,
                a,
                c,
                n)=>{
                  var d=document.createElement("link");
                  d.rel="stylesheet",
                  d.type="text/css",
                  r.nc&&(d.nonce=r.nc),
                  d.onerror=d.onload=a=>{
                    if(d.onerror=d.onload=null,
                    "load"===a.type)c();
                    else{
                      var r=a&&a.type,
                      o=a&&a.target&&a.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+o+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=r,
                      f.request=o,
                      d.parentNode&&d.parentNode.removeChild(d),
                      n(f)
                    }
                  },
                  d.href=t,
                  document.head.appendChild(d)
                })(e,
                n,
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
            let c=r.o(e,
            t)?e[t]:void 0;
            if(0!==c)if(c)a.push(c[2]);
            else if(/^(4(197|564|632)|5(09|501|748|999)|9(101|213|82)|1543|3391|3788|6492|7935|8889)$/.test(t))e[t]=0;
            else{
              const n=new Promise((a,
              r)=>c=e[t]=[a,
              r]);
              a.push(c[2]=n);
              const d=r.p+r.u(t),
              o=new Error,
              f=a=>{
                if(r.o(e,
                t)&&(c=e[t],
                0!==c&&(e[t]=void 0),
                c)){
                  const e=a&&("load"===a.type?"missing":a.type),
                  r=a&&a.target&&a.target.src;
                  o.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",
                  o.name="ChunkLoadError",
                  o.type=e,
                  o.request=r,
                  o.event=a,
                  c[1](o)
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
            let[c,
            n,
            d]=a;
            var o,
            f,
            i=0;
            if(c.some(t=>0!==e[t])){
              for(o in n)r.o(n,
              o)&&(r.m[o]=n[o]);
              d&&d(r)
            }for(t&&t(a);
            i<c.length;
            i++)f=c[i],
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
        r(64769),
        r(72892)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map