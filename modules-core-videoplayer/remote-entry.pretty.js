try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="d7cbf600-8b22-4f28-ba6b-27031ca3e7be",
  e._sentryDebugIdIdentifier="sentry-dbid-d7cbf600-8b22-4f28-ba6b-27031ca3e7be")
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
    release:"67459d972fa138db6c3b11c6d2cf8740c1d8f79b",
    packageName:"@rockstargames/modules-core-videoplayer",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"67459d972fa138db6c3b11c6d2cf8740c1d8f79b"
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
              "./bootstrap":()=>a.e(842).then(()=>()=>a(842)),
              "./index":()=>Promise.all([a.e(476),
              a.e(9203),
              a.e(1895),
              a.e(3635),
              a.e(5748),
              a.e(5472),
              a.e(4612),
              a.e(7281),
              a.e(5501),
              a.e(1270),
              a.e(4564),
              a.e(3788),
              a.e(3705),
              a.e(5999),
              a.e(4424),
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
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var d=2&n&&a;
            ("object"==typeof d||"function"==typeof d)&&!~t.indexOf(d);
            d=e(d))Object.getOwnPropertyNames(d).forEach(e=>c[e]=()=>a[e]);
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
          16:"207e0a6dc024adf31693e4c11471d06c",
          476:"eda30f40d6df81a682d2fe6ce04ba172",
          775:"0dcdcb66f4f6b18f362aaf3d66c5abd3",
          842:"1b0a307af97e3373cbc022639f64ec6c",
          886:"ee1512e6ef73661ad67b99eaf53848d9",
          890:"617907d90cd12aa5b42a71cd1897576c",
          1155:"5866f70a994aef0a56406f33cede0149",
          1292:"5326143b98a881376f5be0da6286a93d",
          1294:"eb6b3bf6f270372462071f459545cfbb",
          1341:"c4aba461c5923212b7bc85a0b6ea781f",
          1344:"94f1f86f81322c33d7c77c56a83ddf93",
          1519:"3031b18190d55562464908a75fc8741e",
          1603:"67372ab885624c1ac4938492133cd8ac",
          1895:"c720049e4093ffb929564cf2b66d0cfb",
          2042:"40355c0d8a8d0aee9b1a578773c3e41f",
          2272:"29a9cbb8299bcd4aff772aed1f6e02f7",
          2501:"77d4d5fc6c2034760bb04c67c5f55052",
          3085:"a689c6a3a8ee07948b36bafc095bbc53",
          3099:"ac42df127d6cc4c4979923bb5a09cda0",
          3189:"31acf0f252643b359a9b2f2fe9774813",
          3529:"f706fde50ec90b11070263c955ca96e2",
          3615:"81ac135312ab7a9c6788cf65872681a5",
          3770:"dae405cf1f4d2ef6ddc389c2b6234d1a",
          3819:"13200b9bdb5ed9d7c60a0b56eddb1c66",
          3888:"087d4bec9e72ae5573316f127d9eb91e",
          4205:"dc4eca09368d5bffba86942b585f8df4",
          4296:"56953658512e854a0025c20c8f9fbf84",
          4427:"f9ad7f318dbefbc186073f129f1e274b",
          4732:"735ea315cd178bdb167e09571de1fffa",
          4764:"2f23d78a1fb3a9eed7cce4ec848b6e6b",
          4921:"27f277b922a18436af9a5e99a4247df8",
          5480:"d2ce9c1054883bf66f0a865b9e461d27",
          5708:"1de8961714ba50314c792fe9e3f4c1aa",
          5826:"98795eff294234f89e474cfdb123a80a",
          5996:"ca9b18864373ce81d6762510cd9e7e9b",
          6038:"59724fe031b8b7fa4c21c08d1b759496",
          6144:"47a699ded396d31ede599f3d9b47e4e2",
          6295:"917869e341b5fc47d379a24ddb930bcc",
          6592:"fff2ea435cc41340bc58613e1a37df29",
          6948:"d7f6629616deaac4aa9cfd818278b78a",
          7098:"80c69778d181da8d679979752b175328",
          7302:"0583c61df80e2f0c327465c1eac26c25",
          7508:"737dac9400a25dc1fee9279f4b302fbf",
          7551:"a351d86fd7dba7a015bd1800d6c8914a",
          7850:"445c9ff20067728fc42c23211274fc6f",
          7913:"d6ae228480a98ad4c4b01ce79dca38b6",
          8277:"7a23b4babfb2657f2ff0bf209849e569",
          8509:"86e7288c50ac3eb847e5e083d5f732e7",
          8876:"07ef3cf010f717c5b47b84d45070100f",
          9203:"10ec139b09bde205f054685ab5a9f704",
          9292:"f403c7daacf6b06cdb0e247fe48f6a2b",
          9343:"22c7d6de794df129774bf818cee7c61f",
          9361:"fd193c1e39434c40f305899daaa997e5",
          9547:"8e3488b3f2d84ef82639166ce5fa62e1",
          9630:"b1b176af771c7bff17f4a10f2babe3a3",
          9680:"78a7dbf6a75db158237c083e8367ef3b",
          9848:"1b82a3b7ae317df51ed212aa54fbef0f",
          9867:"2b95056c27f323f5c04da07b7e86fe90"
        }[e]+".js",
        r.miniCssF=e=>"css/"+{
          1191:"7b2828a98869d3e432c96cb946987be7",
          2501:"945663cd5eeef326a1bcc79c18829c2c",
          3572:"7b2828a98869d3e432c96cb946987be7",
          3635:"5c01f132c6cb5d21be960841e77d81f2",
          4205:"7342d6b5aa1da756453edefde998e6ec",
          7551:"71d87f7d1fcf7ab23375dcd2f2710464",
          7913:"f546cc848e33d8616e02fcb012c13188",
          9630:"0eaa4f6f275742953b81f445b67f42e8"
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
            let d,
            f;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const r=e[s];
                if(r.getAttribute("src")==a||r.getAttribute("data-webpack")==t+o){
                  d=r;
                  break
                }
              }
            }d||(f=!0,
            d=document.createElement("script"),
            d.charset="utf-8",
            r.nc&&d.setAttribute("nonce",
            r.nc),
            d.setAttribute("data-webpack",
            t+o),
            d.src=a),
            e[a]=[n];
            const l=(t,
            r)=>{
              d.onerror=d.onload=null,
              clearTimeout(i);
              const n=e[a];
              if(delete e[a],
              d.parentNode?.removeChild(d),
              n?.forEach(e=>e(r)),
              t)return t(r)
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
            const c=r.S[a],
            d="@rockstargames/modules-core-videoplayer",
            f=(e,
            t,
            a,
            r)=>{
              const n=c[e]=c[e]||{
              },
              o=n[t];
              (!o||!o.loaded&&(!r!=!o.eager?r:d>o.from))&&(n[t]={
                get:a,
                from:d,
                eager:!!r
              })
            },
            s=[];
            return"default"===a&&(f("@floating-ui/react",
            "0.27.20",
            ()=>Promise.all([r.e(5708),
            r.e(6295),
            r.e(8876),
            r.e(5748),
            r.e(7281),
            r.e(9292)]).then(()=>()=>r(6495))),
            f("@foundry-int/utils",
            "6.6.1",
            ()=>Promise.all([r.e(886),
            r.e(1270),
            r.e(4764)]).then(()=>()=>r(886))),
            f("@foundry/react",
            "6.6.1",
            ()=>Promise.all([r.e(8277),
            r.e(1344),
            r.e(476),
            r.e(9203),
            r.e(775),
            r.e(5708),
            r.e(9630),
            r.e(2501),
            r.e(5748),
            r.e(7281),
            r.e(5501),
            r.e(1270),
            r.e(3705),
            r.e(5999)]).then(()=>()=>r(5593))),
            f("@gsap/react",
            "2.1.2",
            ()=>Promise.all([r.e(5748),
            r.e(5501),
            r.e(3099)]).then(()=>()=>r(3099))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([r.e(775),
            r.e(5748),
            r.e(5472),
            r.e(5996)]).then(()=>()=>r(5996))),
            f("@rsgweb/modules-core-agegate",
            "0.0.0",
            ()=>Promise.all([r.e(1344),
            r.e(9203),
            r.e(5748),
            r.e(7281),
            r.e(1270),
            r.e(4564),
            r.e(3788),
            r.e(5999),
            r.e(4424),
            r.e(1292),
            r.e(3572)]).then(()=>()=>r(1292))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([r.e(8277),
            r.e(7098),
            r.e(7508),
            r.e(5748),
            r.e(5472),
            r.e(4612),
            r.e(4564),
            r.e(2272),
            r.e(3788),
            r.e(8509)]).then(()=>()=>r(8509))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([r.e(8277),
            r.e(7098),
            r.e(9867),
            r.e(5748),
            r.e(5472),
            r.e(4612),
            r.e(4564),
            r.e(2272),
            r.e(6647),
            r.e(6948)]).then(()=>()=>r(6948))),
            f("clsx",
            "2.1.1",
            ()=>r.e(4921).then(()=>()=>r(4921))),
            f("focus-trap-react",
            "10.3.1",
            ()=>Promise.all([r.e(6295),
            r.e(1155),
            r.e(5748)]).then(()=>()=>r(1155))),
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
            ()=>Promise.all([r.e(9547),
            r.e(5748)]).then(()=>()=>r(1928))),
            f("lodash-es",
            "4.18.1",
            ()=>r.e(2042).then(()=>()=>r(2042))),
            f("react-dom",
            "19.2.8",
            ()=>Promise.all([r.e(5748),
            r.e(9848)]).then(()=>()=>r(9848))),
            f("react-router",
            "7.18.2",
            ()=>Promise.all([r.e(9361),
            r.e(5748)]).then(()=>()=>r(9361))),
            f("react",
            "19.2.8",
            ()=>r.e(3888).then(()=>()=>r(3888))),
            f("uuid",
            "9.0.1",
            ()=>r.e(3770).then(()=>()=>r(3770)))),
            e[a]=s.length?Promise.all(s).then(()=>e[a]=1):1
          }
        })(),
        r.cjs=e=>{
          const t={
            exports:{
            }
          };
          return e.call(t.exports,
          t,
          t.exports),
          t.exports
        },
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
              r+="u"==(typeof(d=e[o]))[0]?"-":(n>0?".":"")+(n=2,
              d);
              return r
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
          a=(t,
          r)=>{
            if(0 in t){
              r=e(r);
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
                if(c>=r.length||"o"==(l=(typeof(s=r[c]))[0]))return!f||("u"==i?d>n&&!o:""==i!=o);
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
                d=(typeof c)[0];
                if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;
                if("o"!=o&&"u"!=o&&n!=c)return n<c;
                r++
              }
            })(t,
            a)?a:t,
            0)
          },
          d=e=>function(t,
          a,
          n,
          o,
          c){
            const d=r.I(t);
            return d?.then&&!n?d.then(e.bind(e,
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
          f=(e,
          t,
          a)=>a?a():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=d((e,
          t,
          a,
          r,
          d)=>{
            if(!n(t,
            a))return f(e,
            a,
            d);
            const s=c(t,
            a,
            r);
            return o(t[a][s])
          }),
          l=d((e,
          r,
          d,
          s,
          l,
          i)=>{
            if(!n(r,
            d))return f(e,
            d,
            i);
            const u=c(r,
            d,
            s);
            return a(l,
            u)||(b=((e,
            a,
            r,
            n)=>"Unsatisfied version "+r+" from "+(r&&e[a][r].from)+" of shared singleton module "+a+" (required "+t(n)+")")(r,
            d,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(r[d][u]);
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
            ()=>r.e(2042).then(()=>()=>r(2042))),
            4612:()=>s("default",
            "react-router",
            !1,
            ()=>r.e(9361).then(()=>()=>r(9361))),
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
            4564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([r.e(775),
            r.e(5472),
            r.e(3615)]).then(()=>()=>r(5996))),
            3788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([r.e(8277),
            r.e(7098),
            r.e(9867),
            r.e(5472),
            r.e(4612),
            r.e(2272),
            r.e(4296)]).then(()=>()=>r(6948))),
            3705:()=>s("default",
            "@gsap/react",
            !1,
            ()=>r.e(5480).then(()=>()=>r(3099))),
            5999:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>r.e(886).then(()=>()=>r(886))),
            227:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([r.e(8277),
            r.e(1344),
            r.e(476),
            r.e(775),
            r.e(5708),
            r.e(9630),
            r.e(2501),
            r.e(5501),
            r.e(3705)]).then(()=>()=>r(5593))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([r.e(8277),
            r.e(7098),
            r.e(7508),
            r.e(5472),
            r.e(4612),
            r.e(2272),
            r.e(890)]).then(()=>()=>r(8509))),
            1639:()=>l("default",
            "@floating-ui/react",
            !1,
            [2,
            0,
            27,
            20],
            ()=>Promise.all([r.e(5708),
            r.e(6295),
            r.e(8876)]).then(()=>()=>r(6495))),
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
            ()=>Promise.all([r.e(1344),
            r.e(1292),
            r.e(1191)]).then(()=>()=>r(1292))),
            4815:()=>l("default",
            "uuid",
            !1,
            [1,
            9,
            0,
            1],
            ()=>r.e(3770).then(()=>()=>r(3770))),
            4876:()=>s("default",
            "jotai",
            !1,
            ()=>r.e(9547).then(()=>()=>r(1928))),
            5320:()=>l("default",
            "focus-trap-react",
            !1,
            [1,
            10,
            3,
            1],
            ()=>Promise.all([r.e(6295),
            r.e(1155)]).then(()=>()=>r(1155))),
            6647:()=>s("default",
            "graphql",
            !1,
            ()=>r.e(1519).then(()=>()=>r(1519)))
          },
          b={
            1270:[1270],
            3705:[3705],
            3788:[3788],
            4205:[1639,
            2341,
            3424,
            4815,
            4876,
            5320],
            4296:[6647],
            4424:[227,
            8130],
            4564:[4564],
            4612:[4612],
            5472:[5472],
            5501:[5501],
            5748:[5748],
            5999:[5999],
            6647:[6647],
            7281:[7281]
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
                1191:1,
                2501:1,
                3572:1,
                3635:1,
                4205:1,
                7551:1,
                7913:1,
                9630:1
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
                      d=a&&a.target&&a.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+d+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=r,
                      f.request=d,
                      c.parentNode&&c.parentNode.removeChild(c),
                      o(f)
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
            else if(/^(3(572|635|705|788)|4(424|564|612)|5(472|501|748|999)|1191|1270|6647|7281)$/.test(t))e[t]=0;
            else{
              const o=new Promise((a,
              r)=>n=e[t]=[a,
              r]);
              a.push(n[2]=o);
              const c=r.p+r.u(t),
              d=new Error,
              f=a=>{
                if(r.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=a&&("load"===a.type?"missing":a.type),
                  r=a&&a.target&&a.target.src;
                  d.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",
                  d.name="ChunkLoadError",
                  d.type=e,
                  d.request=r,
                  d.event=a,
                  n[1](d)
                }
              };
              r.l(c,
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
            var d,
            f,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(d in o)r.o(o,
              d)&&(r.m[d]=o[d]);
              c&&c(r)
            }for(t&&t(a);
            s<n.length;
            s++)f=n[s],
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