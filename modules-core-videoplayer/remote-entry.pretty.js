try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="5feddfa4-e47c-48d9-a095-2f936afb4bf5",
  e._sentryDebugIdIdentifier="sentry-dbid-5feddfa4-e47c-48d9-a095-2f936afb4bf5")
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
    release:"b6778eeff7ac7895a078a070a5c7649a0d5e5d39",
    packageName:"@rockstargames/modules-core-videoplayer",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"b6778eeff7ac7895a078a070a5c7649a0d5e5d39"
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
          a){
            (0,
            a(5316).w)(1)
          },
          5316(e,
          t,
          a){
            const r=a(2232).y;
            t.w=function(e){
              if(e||(e=1),
              !a.y.meta||!a.y.meta.url)throw console.error("__system_context__",
              a.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p=r(a.y.meta.url,
              e)
            }
          },
          3069(e,
          t,
          a){
            a(7294)
          },
          2232(e,
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
              var c=r.slice(0,
              o+1);
              return a.protocol+"//"+a.host+c
            };
            Number.isInteger
          },
          8157(e,
          t,
          a){
            "use strict";
            const r={
              "./bootstrap":()=>a.e(9374).then(()=>()=>a(9374)),
              "./index":()=>Promise.all([a.e(577),
              a.e(3256),
              a.e(5347),
              a.e(2149),
              a.e(5748),
              a.e(5472),
              a.e(3234),
              a.e(5641),
              a.e(7281),
              a.e(5501),
              a.e(1270),
              a.e(3705),
              a.e(7114),
              a.e(8444),
              a.e(4684),
              a.e(9103)]).then(()=>()=>a(9103)),
              "./tina":()=>a.e(9276).then(()=>()=>a(9276)),
              "./tinaBlockTemplates":()=>a.e(9276).then(()=>()=>a(9276))
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
            }const o=Object.create(null);
            r.r(o);
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var f=2&n&&a;
            ("object"==typeof f||"function"==typeof f)&&!~t.indexOf(f);
            f=e(f))Object.getOwnPropertyNames(f).forEach(e=>c[e]=()=>a[e]);
            return c.default=()=>a,
            r.d(o,
            c),
            o
          }
        })(),
        r.d=(e,
        t)=>{
          if(Array.isArray(t))for(var a=0;
          a<t.length;
          ){
            var n=t[a++],
            o=t[a++],
            c=0===o?{
              enumerable:!0,
              value:t[a++]
            }:{
              enumerable:!0,
              get:o
            };
            r.o(e,
            n)||Object.defineProperty(e,
            n,
            c)
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
          52:"51089106c92af230d6f3c1c507156197",
          577:"c252c10b313fdd25017f273a54fc1fbc",
          1047:"40edf57f51327f609f27971f6803b9eb",
          1206:"736df03efbcb95352fc229a650ceb348",
          1519:"901b0cebeb5a420519397bba9f3bcc75",
          1554:"1984a27a0518b3c31c2fa4eb1cde8944",
          1640:"6a41b6f458e7f4be44c4ad39a230a4a9",
          1652:"b6adb6ead5ea6a1981183067e1ae392e",
          2042:"01f33468bd92abaee3a3a5377f756954",
          2185:"ce338f82e6b44d23b42efcf9a4256d3f",
          2199:"ea2596719b588ac09266cfe1fbd80539",
          2856:"1176c419c2bd0603590cae33500ba663",
          2873:"8dc1188f1894cfcd26c0d8b120836c71",
          3099:"2bdaabb6979bd50c5d768bd9a31a3dd6",
          3256:"e55081d20f1a06e83b86f7e0a43b75b0",
          3529:"c01dda3058ab99b619e6e17897ca4c46",
          3559:"02d707b277799f24323d83ed737cf41d",
          3612:"f9ce7476f90ab100f1373afa5e5a98c7",
          3770:"9a0b226c87d43e72e7651f6c3e1456f2",
          3819:"ae13cd36f55fa74c25d0188615b349ea",
          3888:"dca580350599e57ecf51a30b09464266",
          4684:"e18717e970382a00d059552a2e166b36",
          4921:"11def4b0ffcae7a552cee572cbd21bf4",
          5311:"68e25188e2ce8a6328310e8af235259e",
          5347:"707ee8e7bf75e67383e2deb3656e0525",
          5466:"015187c60bd7fd0b93852fbe5db8ebc3",
          5480:"fb0fc12862442a2532fdc6fd9d71c5b7",
          5500:"0c28adc70b307863659d54fd98d89cad",
          5612:"3a6f464456e059ebb89f145a5506758a",
          5708:"f88762b179ec1061045a991ecb743133",
          6038:"08faa7f8c038aa53d5ee71111f87ffb3",
          6096:"67bf984ffebaf64b297b3d77264619d8",
          6147:"984b7dd149d5afe6618f4f770f1c658a",
          6225:"fb5a0e2f80390e8eb420265f5ef3beb5",
          6281:"9cab163acff12b2db07dd7e0e8f5a292",
          6295:"d0be1b1eb8527795e4fe2874c5462392",
          6469:"75f3d9b81357672ec523238d503ccb5a",
          6890:"f8f127405529f10e99b9183fa57b7a5e",
          6911:"a9c888ddad72c74de63287a65aa0458b",
          7966:"eebfb44cc6e74fa0ef770f378750d2da",
          8004:"2fb6245051ed5910db49bc3925daf6f7",
          8277:"aff3c97ccd099584ede5b5f3eeb30626",
          8528:"71ee827d2f8228246638688e081889fe",
          8574:"c159bcaadf5ead86086e759dde107874",
          8705:"2dfed0bc7a59dad5d59dc82ad34b2d77",
          8839:"6e8aa3b8bdef2da27d0399307a2efe32",
          8876:"93187df6eb81269391e1724918a5b798",
          9103:"c25547707cf12c02cec890cb650bc3f6",
          9154:"63ce58945da7a818ac17e513f7650bf7",
          9271:"9f05b8ad673287219706dce5e0890e6f",
          9276:"5d22c0ac57667439ac3b4b0f53d60a1c",
          9292:"f21ee58369562f7a5b26baf40273e85c",
          9295:"7d24a0028de3f05b2d4427425bc47098",
          9374:"fd41bcc5e2b423a31b82addaf626fc2d",
          9676:"e88fa150604fc29d8afb2129de492be8",
          9848:"0759125b06642ce4488ca64f73fb7c1f",
          9988:"c5c5e221a111900e2788ee7adcd42b8e"
        }[e]+".js",
        r.miniCssF=e=>"css/"+{
          1640:"f546cc848e33d8616e02fcb012c13188",
          2149:"5c01f132c6cb5d21be960841e77d81f2",
          3559:"fcedfe8e9d754990e1633abd941447ce",
          3695:"0902caa96420fc9df874d2d4044947db",
          4684:"7342d6b5aa1da756453edefde998e6ec",
          6076:"0902caa96420fc9df874d2d4044947db",
          6890:"53a798b308a42723c79d22449c16008d",
          9103:"71d87f7d1fcf7ab23375dcd2f2710464"
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
          c)=>{
            if(e[a])return void e[a].push(n);
            let f,
            d;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const r=e[s];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+o){
                  f=r;
                  break
                }
              }
            }f||(d=!0,
            f=document.createElement("script"),
            f.charset="utf-8",
            r.nc&&f.setAttribute("nonce",
            r.nc),
            f.setAttribute("data-webpack",
            t+o),
            f.src=a),
            e[a]=[n];
            const l=(t,
            r)=>{
              f.onerror=f.onload=null,
              clearTimeout(i);
              const n=e[a];
              if(delete e[a],
              f.parentNode?.removeChild(f),
              n?.forEach(e=>e(r)),
              t)return t(r)
            },
            i=setTimeout(l.bind(null,
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
            d&&document.head.appendChild(f)
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
            const c=r.S[a],
            f="@rockstargames/modules-core-videoplayer",
            d=(e,
            t,
            a,
            r)=>{
              const n=c[e]=c[e]||{
              },
              o=n[t];
              (!o||!o.loaded&&(!r!=!o.eager?r:f>o.from))&&(n[t]={
                get:a,
                from:f,
                eager:!!r
              })
            },
            s=[];
            return"default"===a&&(d("@floating-ui/react",
            "0.27.20",
            ()=>Promise.all([r.e(5708),
            r.e(6295),
            r.e(8876),
            r.e(5748),
            r.e(7281),
            r.e(9292)]).then(()=>()=>r(8876))),
            d("@foundry-int/utils",
            "7.4.0",
            ()=>Promise.all([r.e(1047),
            r.e(1270),
            r.e(9295)]).then(()=>()=>r(1047))),
            d("@foundry/react",
            "7.4.0",
            ()=>Promise.all([r.e(8277),
            r.e(2185),
            r.e(577),
            r.e(3256),
            r.e(2873),
            r.e(5708),
            r.e(3559),
            r.e(6890),
            r.e(5748),
            r.e(7281),
            r.e(5501),
            r.e(1270),
            r.e(3705),
            r.e(7114)]).then(()=>()=>r(6830))),
            d("@gsap/react",
            "2.1.2",
            ()=>Promise.all([r.e(5748),
            r.e(5501),
            r.e(3099)]).then(()=>()=>r(3099))),
            d("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([r.e(2873),
            r.e(5748),
            r.e(5472),
            r.e(6147)]).then(()=>()=>r(6147))),
            d("@rsgweb/modules-core-agegate",
            "0.0.0",
            ()=>Promise.all([r.e(2185),
            r.e(3256),
            r.e(5748),
            r.e(5641),
            r.e(7281),
            r.e(1270),
            r.e(7114),
            r.e(8444),
            r.e(5612),
            r.e(3695)]).then(()=>()=>r(5612))),
            d("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([r.e(8277),
            r.e(9988),
            r.e(5748),
            r.e(5472),
            r.e(3234),
            r.e(5641),
            r.e(3612),
            r.e(1652)]).then(()=>()=>r(1652))),
            d("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([r.e(8277),
            r.e(9988),
            r.e(1206),
            r.e(5748),
            r.e(5472),
            r.e(3234),
            r.e(5641),
            r.e(3612),
            r.e(2856),
            r.e(6911)]).then(()=>()=>r(1636))),
            d("clsx",
            "2.1.1",
            ()=>r.e(4921).then(()=>()=>r(4921))),
            d("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([r.e(6295),
            r.e(6281),
            r.e(5748)]).then(()=>()=>r(6281))),
            d("graphql",
            "16.14.2",
            ()=>r.e(1519).then(()=>()=>r(1519))),
            d("gsap",
            "3.12.5",
            ()=>r.e(3529).then(()=>()=>r(3529))),
            d("hammerjs",
            "2.0.8",
            ()=>r.e(6038).then(()=>()=>r(6038))),
            d("jotai",
            "2.20.3",
            ()=>Promise.all([r.e(5500),
            r.e(5748)]).then(()=>()=>r(5500))),
            d("lodash-es",
            "4.18.1",
            ()=>r.e(2042).then(()=>()=>r(6804))),
            d("react-dom",
            "19.2.8",
            ()=>Promise.all([r.e(5748),
            r.e(9848)]).then(()=>()=>r(9848))),
            d("react-router",
            "7.18.4",
            ()=>Promise.all([r.e(8574),
            r.e(5748)]).then(()=>()=>r(8574))),
            d("react",
            "19.2.8",
            ()=>r.e(3888).then(()=>()=>r(3888))),
            d("uuid",
            "9.0.1",
            ()=>r.e(3770).then(()=>()=>r(3770)))),
            e[a]=s.length?Promise.all(s).then(()=>e[a]=1):1
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
              r+="u"==(typeof(f=e[o]))[0]?"-":(n>0?".":"")+(n=2,
              f);
              return r
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
          a=(t,
          r)=>{
            if(0 in t){
              r=e(r);
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
                l,
                i=f<t.length?(typeof t[f])[0]:"";
                if(c>=r.length||"o"==(l=(typeof(s=r[c]))[0]))return!d||("u"==i?f>n&&!o:""==i!=o);
                if("u"==l){
                  if(!d||"u"!=i)return!1
                }else if(d)if(i==l)if(f<=n){
                  if(s!=t[f])return!1
                }else{
                  if(o?s>t[f]:s<t[f])return!1;
                  s!=t[f]&&(d=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||f<=n)return!1;
                  d=!1,
                  f--
                }else{
                  if(f<=n||l<i!=o)return!1;
                  d=!1
                }else"s"!=i&&"n"!=i&&(d=!1,
                f--)
              }
            }var u=[],
            b=u.pop.bind(u);
            for(c=1;
            c<t.length;
            c++){
              var h=t[c];
              u.push(1==h?b()|b():2==h?b()&b():h?a(h,
              r):!b())
            }return!!b()
          };
          const n=(e,
          t)=>e&&r.o(e,
          t),
          o=e=>(e.loaded=1,
          e.get()),
          c=(t,
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
                var c=a[r],
                f=(typeof c)[0];
                if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;
                if("o"!=o&&"u"!=o&&n!=c)return n<c;
                r++
              }
            })(t,
            a)?a:t,
            0)
          },
          f=e=>function(t,
          a,
          n,
          o,
          c){
            const f=r.I(t);
            return f?.then&&!n?f.then(e.bind(e,
            t,
            r.S[t],
            a,
            !1,
            o,
            c)):e(t,
            r.S[t],
            a,
            n,
            o,
            c)
          },
          d=(e,
          t,
          a)=>a?a():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=f((e,
          t,
          a,
          r,
          f)=>{
            if(!n(t,
            a))return d(e,
            a,
            f);
            const s=c(t,
            a,
            r);
            return o(t[a][s])
          }),
          l=f((e,
          r,
          f,
          s,
          l,
          i)=>{
            if(!n(r,
            f))return d(e,
            f,
            i);
            const u=c(r,
            f,
            s);
            return a(l,
            u)||(b=((e,
            a,
            r,
            n)=>"Unsatisfied version "+r+" from "+(r&&e[a][r].from)+" of shared singleton module "+a+" (required "+t(n)+")")(r,
            f,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(r[f][u]);
            var b
          }),
          i={
          },
          u={
            5748:()=>s("default",
            "react",
            !1,
            ()=>r.e(3888).then(()=>()=>r(3888))),
            5472:()=>s("default",
            "lodash-es",
            !1,
            ()=>r.e(2042).then(()=>()=>r(6804))),
            3234:()=>s("default",
            "react-router",
            !1,
            ()=>r.e(8574).then(()=>()=>r(8574))),
            3788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([r.e(8277),
            r.e(9988),
            r.e(1206),
            r.e(5472),
            r.e(3234),
            r.e(3612),
            r.e(2856)]).then(()=>()=>r(1636))),
            4564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([r.e(2873),
            r.e(5472),
            r.e(8528)]).then(()=>()=>r(6147))),
            7281:()=>s("default",
            "react-dom",
            !1,
            ()=>r.e(3819).then(()=>()=>r(9848))),
            5501:()=>s("default",
            "gsap",
            !1,
            ()=>r.e(3529).then(()=>()=>r(3529))),
            1270:()=>l("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>r.e(4921).then(()=>()=>r(4921))),
            3705:()=>s("default",
            "@gsap/react",
            !1,
            ()=>r.e(5480).then(()=>()=>r(3099))),
            7114:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>r.e(1047).then(()=>()=>r(1047))),
            1055:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([r.e(8277),
            r.e(2185),
            r.e(577),
            r.e(2873),
            r.e(5708),
            r.e(3559),
            r.e(6890),
            r.e(5501),
            r.e(3705)]).then(()=>()=>r(6830))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([r.e(8277),
            r.e(9988),
            r.e(5472),
            r.e(3234),
            r.e(3612),
            r.e(9271)]).then(()=>()=>r(1652))),
            584:()=>s("default",
            "focus-trap-react",
            !1,
            ()=>Promise.all([r.e(6295),
            r.e(6281)]).then(()=>()=>r(6281))),
            1639:()=>l("default",
            "@floating-ui/react",
            !1,
            [2,
            0,
            27,
            20],
            ()=>Promise.all([r.e(5708),
            r.e(6295),
            r.e(8876)]).then(()=>()=>r(8876))),
            2341:()=>l("default",
            "hammerjs",
            !1,
            [1,
            2,
            0,
            8],
            ()=>r.e(6038).then(()=>()=>r(6038))),
            3424:()=>s("default",
            "@rsgweb/modules-core-agegate",
            !1,
            ()=>Promise.all([r.e(2185),
            r.e(5612),
            r.e(6076)]).then(()=>()=>r(5612))),
            4815:()=>l("default",
            "uuid",
            !1,
            [1,
            9,
            0,
            1],
            ()=>r.e(3770).then(()=>()=>r(3770))),
            5115:()=>s("default",
            "jotai",
            !1,
            ()=>r.e(5500).then(()=>()=>r(5500))),
            6647:()=>s("default",
            "graphql",
            !1,
            ()=>r.e(1519).then(()=>()=>r(1519)))
          },
          b={
            1270:[1270],
            2856:[6647],
            3234:[3234],
            3705:[3705],
            4684:[584,
            1639,
            2341,
            3424,
            4815,
            5115],
            5472:[5472],
            5501:[5501],
            5641:[3788,
            4564],
            5748:[5748],
            7114:[7114],
            7281:[7281],
            8444:[1055,
            8130]
          },
          h={
          };
          r.f.consumes=(e,
          t)=>{
            r.o(b,
            e)&&b[e].forEach(e=>{
              if(r.o(i,
              e))return t.push(i[e]);
              if(!h[e]){
                const a=t=>{
                  i[e]=0,
                  r.m[e]=a=>{
                    delete r.c[e],
                    a.exports=t()
                  }
                };
                h[e]=!0;
                const n=t=>{
                  delete i[e],
                  r.m[e]=a=>{
                    throw delete r.c[e],
                    t
                  }
                };
                try{
                  const r=u[e]();
                  r.then?t.push(i[e]=r.then(a).catch(n)):a(r)
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
                1640:1,
                2149:1,
                3559:1,
                3695:1,
                4684:1,
                6076:1,
                6890:1,
                9103:1
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
                    var n=(c=a[r]).getAttribute("data-href")||c.getAttribute("href");
                    if("stylesheet"===c.rel&&(n===e||n===t))return c
                  }var o=document.getElementsByTagName("style");
                  for(r=0;
                  r<o.length;
                  r++){
                    var c;
                    if((n=(c=o[r]).getAttribute("data-href"))===e||n===t)return c
                  }
                })(n,
                o))return t();
                ((e,
                t,
                a,
                n,
                o)=>{
                  var c=document.createElement("link");
                  c.rel="stylesheet",
                  c.type="text/css",
                  r.nc&&(c.nonce=r.nc),
                  c.onerror=c.onload=a=>{
                    if(c.onerror=c.onload=null,
                    "load"===a.type)n();
                    else{
                      var r=a&&a.type,
                      f=a&&a.target&&a.target.href||t,
                      d=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+f+")");
                      d.name="ChunkLoadError",
                      d.code="CSS_CHUNK_LOAD_FAILED",
                      d.type=r,
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
            else if(/^(3(234|695|705)|5(472|501|641|748)|1270|2149|6076|7114|7281|8444)$/.test(t))e[t]=0;
            else{
              const o=new Promise((a,
              r)=>n=e[t]=[a,
              r]);
              a.push(n[2]=o);
              const c=new Error,
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
              r.l(r.p+r.u(t),
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          a)=>{
            let[n,
            o,
            c]=a;
            var f,
            d,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(f in o)r.o(o,
              f)&&(r.m[f]=o[f]);
              c&&c(r)
            }for(t&&t(a);
            s<n.length;
            s++)d=n[s],
            r.o(e,
            d)&&e[d]&&e[d][0](),
            e[d]=0
          },
          a=self.webpackChunk_rockstargames_modules_core_videoplayer=self.webpackChunk_rockstargames_modules_core_videoplayer||[];
          a.forEach(t.bind(null,
          0)),
          a.push=t.bind(null,
          a.push.bind(a))
        })(),
        r.nc=void 0,
        r(3069),
        r(8157)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map