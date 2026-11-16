try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="6073a0db-adb0-48fb-ad1e-a98e0035937e",
  e._sentryDebugIdIdentifier="sentry-dbid-6073a0db-adb0-48fb-ad1e-a98e0035937e")
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
    packageName:"@rockstargames/modules-core-header",
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
          72892(e,
          t,
          a){
            "use strict";
            const r={
              "./core":()=>Promise.all([a.e(2145),
              a.e(9534),
              a.e(2810),
              a.e(2766),
              a.e(5748),
              a.e(8889),
              a.e(5641),
              a.e(2704),
              a.e(9842)]).then(()=>()=>a(92790))
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
          }
        };
        const a={
        };
        function r(t){
          const d=a[t];
          if(void 0!==d)return d.exports;
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
          d){
            if(1&d&&(a=this(a)),
            8&d)return a;
            if("object"==typeof a&&a){
              if(4&d&&a.__esModule)return a;
              if(16&d&&"function"==typeof a.then)return a
            }const n=Object.create(null);
            r.r(n);
            const o={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var f=2&d&&a;
            ("object"==typeof f||"function"==typeof f)&&!~t.indexOf(f);
            f=e(f))Object.getOwnPropertyNames(f).forEach(e=>o[e]=()=>a[e]);
            return o.default=()=>a,
            r.d(n,
            o),
            n
          }
        })(),
        r.d=(e,
        t)=>{
          if(Array.isArray(t))for(var a=0;
          a<t.length;
          ){
            var d=t[a++],
            n=t[a++],
            o=0===n?{
              enumerable:!0,
              value:t[a++]
            }:{
              enumerable:!0,
              get:n
            };
            r.o(e,
            d)||Object.defineProperty(e,
            d,
            o)
          }else for(var d in t)r.o(t,
          d)&&!r.o(e,
          d)&&Object.defineProperty(e,
          d,
          {
            enumerable:!0,
            get:t[d]
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
          217:"f6df0beb416ccb1ec4e593df9060103e",
          220:"10465b5094844d394e5ba7e460b107e4",
          518:"cc80c6b2bc093177b19fb2e19ee4239d",
          737:"b389d9909d0f9f9363ac28995f954e52",
          930:"f43068d98faa6500d73465db967a6b18",
          947:"92d8c36b478a29244de4c089b6c65d9c",
          1270:"dc06b89d33740d5d82f08916c8c8e017",
          1551:"3c16fe877c764218e2bb6a898db029d7",
          1811:"04bf568d5cc6a14f120ceb536a9548e4",
          1981:"7fdd599d56a2672ce77ec1fc4ca37af5",
          2145:"466665b38dfa4c07dd7c9fca591bd49e",
          2149:"ac01ed5addd42d1bf14555368fb96e65",
          2204:"9072ea351da937919c03efd3f09dc4f7",
          2228:"6ec2536a5d8546568edcb87985899ff6",
          2336:"8d3f133a2002922019a397901df7d70a",
          2584:"b5e7bf08feaf31e5fbc0fc595ecd40c0",
          2598:"bbff20abbe46a7fca824ad2ec0ee81ec",
          2679:"b2d04ea61139949d6117107906db252c",
          2766:"93737a89d8f9f3384f8b25f2c8599e1f",
          2786:"bee18055b30d929e7aeb325a6772293a",
          2810:"0f3b2a03cc323e915af85fff51c72898",
          2852:"c75d616d9ac2a5ba3ff8a322072e5a82",
          2873:"bde4376aaf8576008e47b5dff8cbb1e2",
          2880:"b886fbe7a2e9fc1a4fba2cc7fccca689",
          2940:"53ccc4fd6abf060f3ada57760aff3b02",
          2965:"13fa2d8bd65a52c93b86348d5e2f72b9",
          2980:"8f8f083711fbdee1adf3986fddd92ac2",
          3118:"8aff2850885107fb724b5ec501117ed4",
          3372:"1dc21c75efdc2019911dfbb7b53d52a1",
          3431:"6d3808de8cbb1a930c7ffc63001079d5",
          3469:"515da98686b348c554716b8e504a306c",
          3529:"f7f7967733717370b63729ae69c3f8e7",
          3612:"c4836b9c3650709df1a696637864707d",
          3664:"9fcf43486d0cfbee97b01b9ecbb25378",
          3746:"2c8ede3c70c25799cf3d245c27a72b09",
          3819:"49d6593a86f3ea812a0dd1659f0d61fe",
          3888:"d0e5742b130f148f9374f540611bb35d",
          3932:"9d8819095b5345e55990c33248dfcf0a",
          3974:"6fea0846bf8defb11859eeb55c981a31",
          4187:"458df09a25c039015e197c1af7f17ab3",
          4192:"2fcc8ea29478f5a9423ac2646724cf39",
          4374:"301ea8ac558ae520883332eda16b700c",
          4419:"daaa11229cd06907ea1a32536b963a71",
          4446:"1f3227fa3b6802aad0598c2e2fc180a2",
          4530:"4f32ff2d22c887fd42acd7a5a3e0a64b",
          4541:"0f9328ec2339fc6ee47aa6f04c841c4f",
          4615:"576cdedb1785c3aabeaa2dbff2168cab",
          4815:"d4427204633ef19f2f6f2e613e4b5015",
          4921:"9ee2ef16f606d919326f4068ab62f599",
          5051:"b67e4a02951232b10b662b2a06da6b29",
          5485:"ce882d741f779c1a3828be492debc31c",
          5657:"bf5ee4436633fcf6817330dccc61ba29",
          5676:"e23ec48c1a1aa9ed7c9cc4f641c9d74b",
          5787:"575472f94adf1f7973288b40171b8efa",
          5894:"6f9822e08e2a71c8f47496b04e3106ec",
          6033:"87f85715a031b92edc2140512c01f987",
          6078:"33bc85b54d04f6c139df40f5a8a93f20",
          6147:"80bb313ae1bed6ad34d319efeb607e8a",
          6263:"a97732d8f6effd9c961dbc1fdf7fe986",
          6568:"6359c01881fb81f8df2060c54b75e314",
          6827:"cd70aabe47d6fbc90072e7f17153bad3",
          6911:"5346d7c25667340e6466101a5b662556",
          7158:"467a750b9921286363004811ac9598d9",
          7212:"1fcacd435561a3fcb4a9e3a2400aeecb",
          7350:"d2220b6dfa4d6ecf54f7b931dc1423d2",
          7875:"fec5360ca8186a6cd25791f55837af58",
          7974:"6baf76428de792fb2a2dfe97caec72bb",
          8058:"dab089ee61c8ce4fd3639885524b5f55",
          8137:"282231895452f227b93ef20d1c0ae6d6",
          8139:"8d097ef2768f80aa7d93f199263ef85e",
          8200:"cb5ed76408a846df133f4ca592ee3449",
          8528:"27aef1b5f4f31511769763ceb5726237",
          8644:"5a2535dce18e98d25339fc3f9c99fbb4",
          8671:"3adbbf1ca33d31488c350b8f55fc4bcc",
          8676:"3cd509e5f74432017e09d7145e025770",
          8700:"66ee8fac2d6c80020a5a00c4d8bb4c5b",
          8899:"4c61c7bdef321ccc65d65575aaaf7042",
          9017:"edaf37734197a4de703354afa758c43a",
          9090:"9c5b38fa9bc526d07d2076dace8f6d80",
          9277:"c69b495c9fbd146c8ae46a735a06c79a",
          9292:"49bc527b09b472387e58e5188aa1fd8a",
          9317:"06d8dd1a054e260a6bed82fb97e792a3",
          9534:"355ec2269314c7f0026f23c7791620ec",
          9823:"03ae297df8d755fcf337f2406155580e",
          9842:"fb30cb6b71bc699f457974bde44f3dca",
          9847:"4814f96b13acb9e6c53ac8bc49c067b2",
          9848:"e2838f820cc319b11f088ed666a8c0c2"
        }[e]+".js",
        r.miniCssF=e=>"css/"+{
          1576:"9605e4661b50b9d4fc907ee456d15b70",
          1957:"9605e4661b50b9d4fc907ee456d15b70",
          1981:"076fdf3679b8d284caac3a10c256b559",
          2810:"6e6560254d3410237368202ebeb6a4ca",
          4374:"b5ec3802e4f30ae837db7e87b91fd980",
          5894:"9605e4661b50b9d4fc907ee456d15b70",
          7875:"d1c0480d7197abba82fe32f550231976",
          8200:"9605e4661b50b9d4fc907ee456d15b70",
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
          d,
          n,
          o)=>{
            if(e[a])return void e[a].push(d);
            let f,
            c;
            if(void 0!==n){
              const e=document.getElementsByTagName("script");
              for(var i=0;
              i<e.length;
              i++){
                const r=e[i];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+n){
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
            t+n),
            f.src=a),
            e[a]=[d];
            const l=(t,
            r)=>{
              f.onerror=f.onload=null,
              clearTimeout(s);
              const d=e[a];
              if(delete e[a],
              f.parentNode?.removeChild(f),
              d?.forEach(e=>e(r)),
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
          d)=>{
            r.o(e,
            a)&&e[a].forEach(e=>{
              let a=r.R;
              a||(a=[]);
              const n=t[e];
              if(a.indexOf(n)>=0)return;
              if(a.push(n),
              n.p)return d.push(n.p);
              const o=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),
                r.m[e]=()=>{
                  throw t
                },
                n.p=0
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
                    d.push(n.p=e)
                  }
                }catch(e){
                  o(e)
                }
              },
              c=(e,
              t,
              r)=>f(t.get,
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
              f(r,
              n[2],
              0,
              0,
              (e,
              t,
              a)=>e?f(r.I,
              n[0],
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
          d)=>{
            d||(d=[]);
            let n=t[a];
            if(n||(n=t[a]={
            }),
            d.indexOf(n)>=0)return;
            if(d.push(n),
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
              const d=o[e]=o[e]||{
              },
              n=d[t];
              (!n||!n.loaded&&(!r!=!n.eager?r:f>n.from))&&(d[t]={
                get:a,
                from:f,
                eager:!!r
              })
            },
            i=[];
            switch(a){
              case"default":c("@foundry-int/utils",
              "7.5.1",
              ()=>Promise.all([r.e(7212),
              r.e(8889),
              r.e(8676)]).then(()=>()=>r(88676))),
              c("@foundry-int/utils",
              "7.6.4",
              ()=>Promise.all([r.e(7212),
              r.e(8889),
              r.e(2980)]).then(()=>()=>r(62980))),
              c("@foundry/icons",
              "7.5.1",
              ()=>Promise.all([r.e(2940),
              r.e(5748),
              r.e(2883),
              r.e(4592),
              r.e(5894)]).then(()=>()=>r(32940))),
              c("@foundry/icons",
              "7.6.4",
              ()=>Promise.all([r.e(5787),
              r.e(5748),
              r.e(2883),
              r.e(9521),
              r.e(8200)]).then(()=>()=>r(45787))),
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
              r.e(7875),
              r.e(2810),
              r.e(4374),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(2883),
              r.e(4601),
              r.e(6832),
              r.e(8889),
              r.e(9521),
              r.e(840),
              r.e(4592),
              r.e(2679),
              r.e(2704),
              r.e(4815)]).then(()=>()=>r(56619))),
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
              r.e(9090)]).then(()=>()=>r(19090))),
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
              "7.6.4",
              ()=>Promise.all([r.e(3431),
              r.e(6078),
              r.e(6033),
              r.e(7875),
              r.e(1981),
              r.e(2810),
              r.e(5748),
              r.e(6723),
              r.e(2295),
              r.e(829),
              r.e(2883),
              r.e(4601),
              r.e(6832),
              r.e(8889),
              r.e(9521),
              r.e(840),
              r.e(1014),
              r.e(2149)]).then(()=>()=>r(1981)))
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
              var d=t[r],
              n=(typeof d)[0];
              if(r>=a.length)return"u"==n;
              var o=a[r],
              f=(typeof o)[0];
              if(n!=f)return"o"==n&&"n"==f||"s"==f||"u"==n;
              if("o"!=n&&"u"!=n&&d!=o)return d<o;
              r++
            }
          },
          a=e=>{
            var t=e[0],
            r="";
            if(1===e.length)return"*";
            if(t+.5){
              r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";
              for(var d=1,
              n=1;
              n<e.length;
              n++)d--,
              r+="u"==(typeof(f=e[n]))[0]?"-":(d>0?".":"")+(d=2,
              f);
              return r
            }var o=[];
            for(n=1;
            n<e.length;
            n++){
              var f=e[n];
              o.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?o.pop()+" "+o.pop():a(f))
            }return c();
            function c(){
              return o.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          d=(t,
          a)=>{
            if(0 in t){
              a=e(a);
              var r=t[0],
              n=r<0;
              n&&(r=-r-1);
              for(var o=0,
              f=1,
              c=!0;
              ;
              f++,
              o++){
                var i,
                l,
                s=f<t.length?(typeof t[f])[0]:"";
                if(o>=a.length||"o"==(l=(typeof(i=a[o]))[0]))return!c||("u"==s?f>r&&!n:""==s!=n);
                if("u"==l){
                  if(!c||"u"!=s)return!1
                }else if(c)if(s==l)if(f<=r){
                  if(i!=t[f])return!1
                }else{
                  if(n?i>t[f]:i<t[f])return!1;
                  i!=t[f]&&(c=!1)
                }else if("s"!=s&&"n"!=s){
                  if(n||f<=r)return!1;
                  c=!1,
                  f--
                }else{
                  if(f<=r||l<s!=n)return!1;
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
              b.push(1==h?u()|u():2==h?u()&u():h?d(h,
              a):!u())
            }return!!u()
          };
          const n=(e,
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
            const d=r?f(e[a]):e[a];
            return Object.keys(d).reduce((e,
            a)=>!e||!d[e].loaded&&t(e,
            a)?a:e,
            0)
          },
          i=e=>{
            throw new Error(e)
          },
          l=e=>function(t,
          a,
          d,
          n,
          o){
            const f=r.I(t);
            return f?.then&&!d?f.then(e.bind(e,
            t,
            r.S[t],
            a,
            !1,
            n,
            o)):e(t,
            r.S[t],
            a,
            d,
            n,
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
          d,
          c)=>n(a,
          r)?o(((e,
          a,
          r)=>{
            const d=r?f(e[a]):e[a];
            return(a=Object.keys(d).reduce((e,
            a)=>!e||t(e,
            a)?a:e,
            0))&&d[a]
          })(a,
          r,
          d)):s(e,
          r,
          c)),
          u=l((e,
          r,
          c,
          l,
          b,
          u)=>{
            if(!n(r,
            c))return s(e,
            c,
            u);
            const h=((e,
            a,
            r,
            n)=>{
              const o=n?f(e[a]):e[a];
              return(a=Object.keys(o).reduce((e,
              a)=>!d(r,
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
            d,
            n)=>{
              const o=e[r];
              return"No satisfying version ("+a(d)+")"+(n?" for eager consumption":"")+" of shared module "+r+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(o).map(e=>e+" from "+o[e].from).join(", ")
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
          d)=>{
            if(!n(t,
            a))return s(e,
            a,
            d);
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
            if(!n(t,
            r))return s(e,
            r,
            l);
            const b=c(t,
            r,
            f);
            return d(i,
            b)||(u=((e,
            t,
            r,
            d)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+a(d)+")")(t,
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
            r.e(9090)]).then(()=>()=>r(19090))),
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
            23707:()=>b("header",
            "@foundry/react",
            !1,
            ()=>Promise.all([r.e(3431),
            r.e(6078),
            r.e(6033),
            r.e(7875),
            r.e(1981),
            r.e(6723),
            r.e(2295),
            r.e(829),
            r.e(2883),
            r.e(4601),
            r.e(6832),
            r.e(9521),
            r.e(840),
            r.e(1014)]).then(()=>()=>r(1981))),
            50464:()=>h("default",
            "@rsgweb/modules-core-global-navigation",
            !1,
            ()=>Promise.all([r.e(6078),
            r.e(7875),
            r.e(4374),
            r.e(6723),
            r.e(2295),
            r.e(2883),
            r.e(4601),
            r.e(6832),
            r.e(9521),
            r.e(840),
            r.e(4592),
            r.e(2679)]).then(()=>()=>r(56619))),
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
            ()=>Promise.all([r.e(7212),
            r.e(8889),
            r.e(8676)]).then(()=>()=>r(88676))),
            79521:()=>h("default",
            "@foundry-int/utils",
            !1,
            ()=>Promise.all([r.e(7212),
            r.e(8889),
            r.e(2980)]).then(()=>()=>r(62980))),
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
            r.e(4592),
            r.e(1957)]).then(()=>()=>r(32940))),
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
            99510:()=>u("header",
            "@foundry/react",
            !1,
            [1,
            7],
            ()=>Promise.all([r.e(3431),
            r.e(6033),
            r.e(1981),
            r.e(829),
            r.e(1014)]).then(()=>()=>r(1981))),
            20782:()=>h("default",
            "@foundry/icons",
            !1,
            ()=>Promise.all([r.e(5787),
            r.e(1576)]).then(()=>()=>r(45787))),
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
            1014:[20782,
            45501],
            2295:[45478,
            55198],
            2679:[59066,
            98250,
            99510],
            2704:[22704],
            2883:[82883],
            4592:[64592],
            4601:[14734,
            34588],
            5641:[14564,
            43788],
            5748:[95748],
            6723:[57281,
            90699],
            6832:[76832],
            8889:[81270],
            9521:[79521],
            9842:[8130,
            23707,
            50464]
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
                const d=t=>{
                  delete m[e],
                  r.m[e]=a=>{
                    throw delete r.c[e],
                    t
                  }
                };
                try{
                  const r=g[e]();
                  r.then?t.push(m[e]=r.then(a).catch(d)):a(r)
                }catch(e){
                  d(e)
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
                1576:1,
                1957:1,
                1981:1,
                2810:1,
                4374:1,
                5894:1,
                7875:1,
                8200:1,
                9842:1
              }[t]&&a.push(e[t]=(e=>new Promise((t,
              a)=>{
                var d=r.miniCssF(e),
                n=r.p+d;
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
                })(d,
                n))return t();
                ((e,
                t,
                a,
                d,
                n)=>{
                  var o=document.createElement("link");
                  o.rel="stylesheet",
                  o.type="text/css",
                  r.nc&&(o.nonce=r.nc),
                  o.onerror=o.onload=a=>{
                    if(o.onerror=o.onload=null,
                    "load"===a.type)d();
                    else{
                      var r=a&&a.type,
                      f=a&&a.target&&a.target.href||t,
                      c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+f+")");
                      c.name="ChunkLoadError",
                      c.code="CSS_CHUNK_LOAD_FAILED",
                      c.type=r,
                      c.request=f,
                      o.parentNode&&o.parentNode.removeChild(o),
                      n(c)
                    }
                  },
                  o.href=t,
                  document.head.appendChild(o)
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
            let d=r.o(e,
            t)?e[t]:void 0;
            if(0!==d)if(d)a.push(d[2]);
            else if(/^(1(014|576|957)|2(295|704|883)|8(29|40|889)|(460|564|952)1|4592|5748|6723|6832)$/.test(t))e[t]=0;
            else{
              const n=new Promise((a,
              r)=>d=e[t]=[a,
              r]);
              a.push(d[2]=n);
              const o=new Error,
              f=a=>{
                if(r.o(e,
                t)&&(d=e[t],
                0!==d&&(e[t]=void 0),
                d)){
                  const e=a&&("load"===a.type?"missing":a.type),
                  r=a&&a.target&&a.target.src;
                  o.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",
                  o.name="ChunkLoadError",
                  o.type=e,
                  o.request=r,
                  o.event=a,
                  d[1](o)
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
            let[d,
            n,
            o]=a;
            var f,
            c,
            i=0;
            if(d.some(t=>0!==e[t])){
              for(f in n)r.o(n,
              f)&&(r.m[f]=n[f]);
              o&&o(r)
            }for(t&&t(a);
            i<d.length;
            i++)c=d[i],
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