try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="8bd0cc7f-2aa6-4470-9073-09a7d3df003d",
  e._sentryDebugIdIdentifier="sentry-dbid-8bd0cc7f-2aa6-4470-9073-09a7d3df003d")
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
    packageName:"@rockstargames/sites-legacy",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"2f63c38ab8f479c51122a10f10649e609833a8d6"
},
System.register(["@rockstargames/modules-core-videoplayer"],
function(e,
t){
  var r={
  };
  return Object.defineProperty(r,
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
    }],
    execute:function(){
      e((()=>{
        var e={
          47294(e,
          t,
          r){
            (0,
            r(75316).w)(1)
          },
          75316(e,
          t,
          r){
            const a=r(32232).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=a(r.y.meta.url,
              e)
            }
          },
          23069(e,
          t,
          r){
            r(47294)
          },
          32232(e,
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
          54334(e,
          t,
          r){
            "use strict";
            const a={
              "./site-routes/Bully":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(2873),
              r.e(6339),
              r.e(6531),
              r.e(5748),
              r.e(3788),
              r.e(3234),
              r.e(4564),
              r.e(8130),
              r.e(8933),
              r.e(3337),
              r.e(4756),
              r.e(2284),
              r.e(3155),
              r.e(2848)]).then(()=>()=>r(2848)),
              "./site-routes/RedDeadRedemption":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(2873),
              r.e(6339),
              r.e(6531),
              r.e(5748),
              r.e(3788),
              r.e(3234),
              r.e(4564),
              r.e(8130),
              r.e(8933),
              r.e(3337),
              r.e(4756),
              r.e(2284),
              r.e(3155),
              r.e(2784)]).then(()=>()=>r(72784)),
              "./tina":()=>Promise.all([r.e(31),
              r.e(2194),
              r.e(4826),
              r.e(178),
              r.e(2873),
              r.e(6339),
              r.e(6531),
              r.e(5748),
              r.e(3788),
              r.e(3234),
              r.e(4564),
              r.e(8130),
              r.e(8933),
              r.e(3337),
              r.e(4756),
              r.e(2284),
              r.e(3155)]).then(()=>()=>r(16352))
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
          25136(e){
            "use strict";
            e.exports=r
          }
        };
        const a={
        };
        function n(t){
          const r=a[t];
          if(void 0!==r)return r.exports;
          const o=a[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(o.exports,
          o,
          o.exports,
          n),
          o.loaded=!0,
          o.exports
        }return n.m=e,
        n.c=a,
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
        n.cw=e=>{
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
          n.t=function(r,
          a){
            if(1&a&&(r=this(r)),
            8&a)return r;
            if("object"==typeof r&&r){
              if(4&a&&r.__esModule)return r;
              if(16&a&&"function"==typeof r.then)return r
            }const o=Object.create(null);
            n.r(o);
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var f=2&a&&r;
            ("object"==typeof f||"function"==typeof f)&&!~t.indexOf(f);
            f=e(f))Object.getOwnPropertyNames(f).forEach(e=>c[e]=()=>r[e]);
            return c.default=()=>r,
            n.d(o,
            c),
            o
          }
        })(),
        n.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var a=t[r++],
            o=t[r++],
            c=0===o?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:o
            };
            n.o(e,
            a)||Object.defineProperty(e,
            a,
            c)
          }else for(var a in t)n.o(t,
          a)&&!n.o(e,
          a)&&Object.defineProperty(e,
          a,
          {
            enumerable:!0,
            get:t[a]
          })
        },
        n.f={
        },
        n.e=e=>Promise.all(Object.keys(n.f).reduce((t,
        r)=>(n.f[r](e,
        t),
        t),
        [])),
        n.u=e=>"js/"+{
          31:"2e6ac7f68fa29b8fccea8c82f9a25b48",
          178:"a203e73bd0584eb83cfe18d96aa771cf",
          331:"b27bf48e37d16cb2dcf0d779f945d9ef",
          504:"88a696eb072ff03bc0889f7ae469171e",
          947:"53f9c086ec8416f3932cf5b13adcfa22",
          998:"ffa6415fb8a390b0b7f6fc8c47af9c55",
          1519:"300cebe2a92dfa5fe1e910278af8e58c",
          2194:"0287a71b514e3589ba387cb84f335cf8",
          2497:"f68960d3b9546d80f12d5ee2150f5561",
          2584:"fbeda8cdd5f90428dedc0b3afe3ba7e1",
          2784:"5409e915664171f783750ac79b6b03ef",
          2848:"4bce996484b26646dc3a04ff04b3c397",
          2852:"85e1f4cc63af611869232a22d32a2a33",
          2873:"53f6dcdd8c0225a1d25ad17b8cc3e7ae",
          3155:"db0ebf9deda996148e9c8d4ba0e68105",
          3469:"0a186cea1e7acf3a02dbbc003d662efd",
          3575:"798be249afcf8b69c61aa6dc25063c1e",
          3612:"eeeb98e987aa90361ae82c32c7b45071",
          3747:"750ba97ef14dab00fcec3a4a9d2a5564",
          3819:"7ef8adc060eb4b4b4eb741048c5136ed",
          3888:"e19ffed49124ad10b4353e3861312469",
          3941:"452e54121c7c86fa3466c0712af97ee8",
          4147:"11cdb102ba85465a076807a60b7ba113",
          4756:"036dafed919176e9849bb1385630d389",
          4826:"87ecc8d1423308e186b094cc35c151da",
          4921:"78e1f2ba96e1ff344ca8ba8bfe729835",
          5051:"4429c05f9788f1e924b8941e25b39e8c",
          5073:"b1406aeb0f30e814fed5331055dba0cd",
          5271:"208fae3c36beb007d04df9946f14ae68",
          5485:"12341d5a24420933cc951f4331a3fc66",
          5657:"8cd246734580b2a3c1a96347b7dc1e7c",
          5676:"5855595ed2b5ce19efaf4946f970a0e0",
          6073:"4d83bac542f3f077ce60a80daf757214",
          6128:"5eb57c182b3e020dbf382c911aab0f64",
          6147:"44febe5c2a49b7cf7a036e1aa3e16188",
          6281:"e8273de76e3177515df7cd498c0c989a",
          6339:"9b815def696efb1b0d944822b0a39878",
          6531:"7d1f70f1be022911f2fcb5c5df84dc31",
          6677:"2620039bb51c2cd755d95c4d49dc3c76",
          7158:"bbb82da12b8bac08cd2496529cb921aa",
          7350:"51240b472acb084785c022418d33e5fc",
          7974:"7369e73b44f0ce2bb19e3e97ff7b34ba",
          8123:"fcc4dbc57fbffc0381e10d0b9cb398a2",
          8402:"14e721f5f99069c61234f49a008a1193",
          8507:"1ad33e5b2734e6fcf3efd9fb6f75d4a9",
          8528:"96cba276e3bbf5f382882ed4468b514a",
          8574:"2939dc4fcec0e19d7a9a0fc0f5f91a32",
          8617:"a5648ace69b7611f9ddeaa048f0738ca",
          8671:"3d7491f46a4b5c81bdd2f976c825be31",
          8899:"bd8d12d1db554ff8c69f08f6d493e120",
          9249:"edf00ed398461457e1a008a1c1541509",
          9292:"b84fd51f3f7fc7b543566bad5e29d524",
          9317:"fef6b13dc0b831c4f1b26046136ff7a2",
          9747:"4179383fd5292ee47131e3cb9825eb4c",
          9848:"312d8c4ac3d8a64be4d5e6b0d2973f96"
        }[e]+".js",
        n.miniCssF=e=>"css/"+{
          2784:"52e55b769351b6e3f1602fe5d2baacd1",
          2848:"52e55b769351b6e3f1602fe5d2baacd1",
          3155:"e845ad745ad6b400826d7a212422bbf4",
          3536:"78b6606872bed6edc647fde0a2991627",
          3724:"82b8e41eb90eae7db3adfb9fff54d045",
          3941:"82b8e41eb90eae7db3adfb9fff54d045",
          4147:"b3313fda99862d6d64bd2a829ae71ca3",
          6531:"0e8df415d6197c48eed0bb013719035c",
          6677:"0da34c51e2b4fd6c15dacfcb90c7d337"
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
          t="@rockstargames/sites-legacy:";
          n.l=(r,
          a,
          o,
          c)=>{
            if(e[r])return void e[r].push(a);
            let f,
            d;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const a=e[s];
                if(a.getAttribute("src")==r||a.getAttribute("data-webpack")==t+o){
                  f=a;
                  break
                }
              }
            }f||(d=!0,
            f=document.createElement("script"),
            f.charset="utf-8",
            n.nc&&f.setAttribute("nonce",
            n.nc),
            f.setAttribute("data-webpack",
            t+o),
            f.src=r),
            e[r]=[a];
            const i=(t,
            a)=>{
              f.onerror=f.onload=null,
              clearTimeout(l);
              const n=e[r];
              if(delete e[r],
              f.parentNode?.removeChild(f),
              n?.forEach(e=>e(a)),
              t)return t(a)
            },
            l=setTimeout(i.bind(null,
            void 0,
            {
              type:"timeout",
              target:f
            }),
            12e4);
            f.onerror=i.bind(null,
            f.onerror),
            f.onload=i.bind(null,
            f.onload),
            d&&document.head.appendChild(f)
          }
        })(),
        n.r=e=>{
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
        n.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          const e={
            3155:[31879]
          },
          t={
            31879:["default",
            "./index",
            25136]
          };
          n.f.remotes=(r,
          a)=>{
            n.o(e,
            r)&&e[r].forEach(e=>{
              let r=n.R;
              r||(r=[]);
              const o=t[e];
              if(r.indexOf(o)>=0)return;
              if(r.push(o),
              o.p)return a.push(o.p);
              const c=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+o[1]+'" from '+o[2]),
                n.m[e]=()=>{
                  throw t
                },
                o.p=0
              },
              f=(e,
              t,
              r,
              n,
              f,
              d)=>{
                try{
                  const s=e(t,
                  r);
                  if(!s?.then)return f(s,
                  n,
                  d);
                  {
                    const e=s.then(e=>f(e,
                    n),
                    c);
                    if(!d)return e;
                    a.push(o.p=e)
                  }
                }catch(e){
                  c(e)
                }
              },
              d=(e,
              t,
              a)=>f(t.get,
              o[1],
              r,
              0,
              s,
              a),
              s=t=>{
                o.p=1,
                n.m[e]=e=>{
                  e.exports=t()
                }
              };
              f(n,
              o[2],
              0,
              0,
              (e,
              t,
              r)=>e?f(n.I,
              o[0],
              0,
              e,
              d,
              r):c(),
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
          n.I=(r,
          a)=>{
            a||(a=[]);
            let o=t[r];
            if(o||(o=t[r]={
            }),
            a.indexOf(o)>=0)return;
            if(a.push(o),
            e[r])return e[r];
            n.o(n.S,
            r)||(n.S[r]={
            });
            const c=n.S[r],
            f="@rockstargames/sites-legacy",
            d=(e,
            t,
            r,
            a)=>{
              const n=c[e]=c[e]||{
              },
              o=n[t];
              (!o||!o.loaded&&(!a!=!o.eager?a:f>o.from))&&(n[t]={
                get:r,
                from:f,
                eager:!!a
              })
            },
            s=[];
            return"default"===r&&(d("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(2873),
            n.e(9747),
            n.e(5748),
            n.e(6147)]).then(()=>()=>n(6147))),
            d("@rsgweb/modules-core-hero",
            "0.0.0",
            ()=>Promise.all([n.e(5748),
            n.e(3788),
            n.e(3234),
            n.e(4564),
            n.e(8130),
            n.e(3337),
            n.e(4756),
            n.e(6677)]).then(()=>()=>n(34337))),
            d("@rsgweb/modules-core-highlights",
            "0.0.0",
            ()=>Promise.all([n.e(6339),
            n.e(5748),
            n.e(4564),
            n.e(8130),
            n.e(3337),
            n.e(2284),
            n.e(3536),
            n.e(6128)]).then(()=>()=>n(16128))),
            d("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([n.e(31),
            n.e(4826),
            n.e(2497),
            n.e(5748),
            n.e(3788),
            n.e(3234),
            n.e(4564),
            n.e(3612),
            n.e(8617)]).then(()=>()=>n(23746))),
            d("@rsgweb/tina",
            "0.0.0",
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(178),
            n.e(5073),
            n.e(3575),
            n.e(5748),
            n.e(3788),
            n.e(4564),
            n.e(8130),
            n.e(8933),
            n.e(8507),
            n.e(6073),
            n.e(3941)]).then(()=>()=>n(16073))),
            d("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(4826),
            n.e(2497),
            n.e(5073),
            n.e(8402),
            n.e(5748),
            n.e(3788),
            n.e(3234),
            n.e(4564),
            n.e(8507),
            n.e(3612),
            n.e(6647),
            n.e(5271)]).then(()=>()=>n(45271))),
            d("clsx",
            "2.1.1",
            ()=>n.e(4921).then(()=>()=>n(4921))),
            d("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([n.e(6281),
            n.e(5748)]).then(()=>()=>n(66281))),
            d("framer-motion",
            "13.5.1",
            ()=>Promise.all([n.e(5657),
            n.e(5748),
            n.e(9292)]).then(()=>()=>n(25657))),
            d("graphql",
            "16.14.2",
            ()=>n.e(1519).then(()=>()=>n(91519))),
            d("prop-types",
            "15.8.1",
            ()=>n.e(331).then(()=>()=>n(60331))),
            d("react-dom",
            "19.2.8",
            ()=>Promise.all([n.e(5748),
            n.e(9848)]).then(()=>()=>n(79848))),
            d("react-intersection-observer",
            "9.16.0",
            ()=>Promise.all([n.e(5748),
            n.e(8123)]).then(()=>()=>n(68123))),
            d("react-router",
            "7.18.4",
            ()=>Promise.all([n.e(8574),
            n.e(5748)]).then(()=>()=>n(68574))),
            d("react",
            "19.2.8",
            ()=>n.e(3888).then(()=>()=>n(83888))),
            (e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const o=n(e);
                if(!o)return;
                const c=e=>e&&e.init&&e.init(n.S[r],
                a);
                if(o.then)return s.push(o.then(c,
                t));
                const f=c(o);
                if(f?.then)return s.push(f.catch(t))
              }catch(e){
                t(e)
              }
            })(25136)),
            s.length?e[r]=Promise.all(s).then(()=>e[r]=1):e[r]=1
          }
        })(),
        (()=>{
          let e;
          n.g.importScripts&&(e=n.g.location+"");
          const t=n.g.document;
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
          n.p=e
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
              a+="u"==(typeof(f=e[o]))[0]?"-":(n>0?".":"")+(n=2,
              f);
              return a
            }var c=[];
            for(o=1;
            o<e.length;
            o++){
              var f=e[o];
              c.push(0===f?"not("+d()+")":1===f?"("+d()+" || "+d()+")":2===f?c.pop()+" "+c.pop():t(f))
            }return d();
            function d(){
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
              f=1,
              d=!0;
              ;
              f++,
              c++){
                var s,
                i,
                l=f<t.length?(typeof t[f])[0]:"";
                if(c>=a.length||"o"==(i=(typeof(s=a[c]))[0]))return!d||("u"==l?f>n&&!o:""==l!=o);
                if("u"==i){
                  if(!d||"u"!=l)return!1
                }else if(d)if(l==i)if(f<=n){
                  if(s!=t[f])return!1
                }else{
                  if(o?s>t[f]:s<t[f])return!1;
                  s!=t[f]&&(d=!1)
                }else if("s"!=l&&"n"!=l){
                  if(o||f<=n)return!1;
                  d=!1,
                  f--
                }else{
                  if(f<=n||i<l!=o)return!1;
                  d=!1
                }else"s"!=l&&"n"!=l&&(d=!1,
                f--)
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
          t)=>e&&n.o(e,
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
                f=(typeof c)[0];
                if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;
                if("o"!=o&&"u"!=o&&n!=c)return n<c;
                a++
              }
            })(t,
            r)?r:t,
            0)
          },
          f=e=>function(t,
          r,
          a,
          o,
          c){
            const f=n.I(t);
            return f?.then&&!a?f.then(e.bind(e,
            t,
            n.S[t],
            r,
            !1,
            o,
            c)):e(t,
            n.S[t],
            r,
            a,
            o,
            c)
          },
          d=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=f((e,
          t,
          r,
          n,
          f)=>{
            if(!a(t,
            r))return d(e,
            r,
            f);
            const s=c(t,
            r,
            n);
            return o(t[r][s])
          }),
          i=f((e,
          n,
          f,
          s,
          i,
          l)=>{
            if(!a(n,
            f))return d(e,
            f,
            l);
            const u=c(n,
            f,
            s);
            return r(i,
            u)||(b=((e,
            r,
            a,
            n)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(n)+")")(n,
            f,
            u,
            i),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(n[f][u]);
            var b
          }),
          l={
          },
          u={
            95748:()=>s("default",
            "react",
            !1,
            ()=>n.e(3888).then(()=>()=>n(83888))),
            43788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(4826),
            n.e(2497),
            n.e(5073),
            n.e(8402),
            n.e(3234),
            n.e(8507),
            n.e(3612),
            n.e(9249)]).then(()=>()=>n(45271))),
            93234:()=>s("default",
            "react-router",
            !1,
            ()=>n.e(8574).then(()=>()=>n(68574))),
            14564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(2873),
            n.e(9747),
            n.e(8528)]).then(()=>()=>n(6147))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([n.e(31),
            n.e(4826),
            n.e(2497),
            n.e(3788),
            n.e(3234),
            n.e(3612),
            n.e(998)]).then(()=>()=>n(23746))),
            57281:()=>s("default",
            "react-dom",
            !1,
            ()=>n.e(3819).then(()=>()=>n(79848))),
            89653:()=>i("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>n.e(331).then(()=>()=>n(60331))),
            22704:()=>s("default",
            "framer-motion",
            !1,
            ()=>n.e(5657).then(()=>()=>n(25657))),
            66176:()=>s("default",
            "@rsgweb/tina",
            !1,
            ()=>Promise.all([n.e(31),
            n.e(2194),
            n.e(178),
            n.e(5073),
            n.e(3575),
            n.e(3788),
            n.e(8933),
            n.e(8507),
            n.e(6073),
            n.e(3724)]).then(()=>()=>n(16073))),
            81270:()=>i("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>n.e(4921).then(()=>()=>n(4921))),
            52284:()=>i("default",
            "react-intersection-observer",
            !1,
            [1,
            9,
            16,
            0],
            ()=>n.e(504).then(()=>()=>n(68123))),
            53388:()=>s("default",
            "@rsgweb/modules-core-highlights",
            !1,
            ()=>Promise.all([n.e(3536),
            n.e(3747)]).then(()=>()=>n(16128))),
            71580:()=>s("default",
            "@rsgweb/modules-core-hero",
            !1,
            ()=>n.e(4147).then(()=>()=>n(34337))),
            80584:()=>s("default",
            "focus-trap-react",
            !1,
            ()=>n.e(6281).then(()=>()=>n(66281))),
            26647:()=>s("default",
            "graphql",
            !1,
            ()=>n.e(1519).then(()=>()=>n(91519)))
          },
          b={
            2284:[52284],
            3155:[53388,
            71580,
            80584],
            3234:[93234],
            3337:[22704,
            66176],
            3788:[43788],
            4564:[14564],
            4756:[81270],
            5748:[95748],
            6647:[26647],
            8130:[8130],
            8933:[57281,
            89653],
            9249:[26647]
          },
          h={
          };
          n.f.consumes=(e,
          t)=>{
            n.o(b,
            e)&&b[e].forEach(e=>{
              if(n.o(l,
              e))return t.push(l[e]);
              if(!h[e]){
                const r=t=>{
                  l[e]=0,
                  n.m[e]=r=>{
                    delete n.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const a=t=>{
                  delete l[e],
                  n.m[e]=r=>{
                    throw delete n.c[e],
                    t
                  }
                };
                try{
                  const n=u[e]();
                  n.then?t.push(l[e]=n.then(r).catch(a)):r(n)
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
              8106:0
            };
            n.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                2784:1,
                2848:1,
                3155:1,
                3536:1,
                3724:1,
                3941:1,
                4147:1,
                6531:1,
                6677:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var a=n.miniCssF(e),
                o=n.p+a;
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
                o))return t();
                ((e,
                t,
                r,
                a,
                o)=>{
                  var c=document.createElement("link");
                  c.rel="stylesheet",
                  c.type="text/css",
                  n.nc&&(c.nonce=n.nc),
                  c.onerror=c.onload=r=>{
                    if(c.onerror=c.onload=null,
                    "load"===r.type)a();
                    else{
                      var n=r&&r.type,
                      f=r&&r.target&&r.target.href||t,
                      d=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+f+")");
                      d.name="ChunkLoadError",
                      d.code="CSS_CHUNK_LOAD_FAILED",
                      d.type=n,
                      d.request=f,
                      c.parentNode&&c.parentNode.removeChild(c),
                      o(d)
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
            8106:0
          };
          n.f.j=(t,
          r)=>{
            let a=n.o(e,
            t)?e[t]:void 0;
            if(0!==a)if(a)r.push(a[2]);
            else if(/^(3(234|337|536|724|788)|2284|4564|5748|6647|8130|8933)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              n)=>a=e[t]=[r,
              n]);
              r.push(a[2]=o);
              const c=new Error,
              f=r=>{
                if(n.o(e,
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
              n.l(n.p+n.u(t),
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[a,
            o,
            c]=r;
            var f,
            d,
            s=0;
            if(a.some(t=>0!==e[t])){
              for(f in o)n.o(o,
              f)&&(n.m[f]=o[f]);
              c&&c(n)
            }for(t&&t(r);
            s<a.length;
            s++)d=a[s],
            n.o(e,
            d)&&e[d]&&e[d][0](),
            e[d]=0
          },
          r=self.webpackChunk_rockstargames_sites_legacy=self.webpackChunk_rockstargames_sites_legacy||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        n.nc=void 0,
        n(23069),
        n(54334)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map