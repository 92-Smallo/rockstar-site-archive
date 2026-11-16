try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="8b1e22e1-ce76-4fe0-90c5-7abef43647ee",
  e._sentryDebugIdIdentifier="sentry-dbid-8b1e22e1-ce76-4fe0-90c5-7abef43647ee")
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
    packageName:"@rockstargames/modules-core-videoplayer",
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
          7294(e,
          t,
          r){
            (0,
            r(5316).w)(1)
          },
          5316(e,
          t,
          r){
            const a=r(2232).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=a(r.y.meta.url,
              e)
            }
          },
          3069(e,
          t,
          r){
            r(7294)
          },
          2232(e,
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
              var d=a.slice(0,
              o+1);
              return r.protocol+"//"+r.host+d
            };
            Number.isInteger
          },
          8157(e,
          t,
          r){
            "use strict";
            const a={
              "./bootstrap":()=>r.e(9374).then(()=>()=>r(9374)),
              "./index":()=>Promise.all([r.e(8946),
              r.e(9249),
              r.e(7950),
              r.e(9674),
              r.e(5748),
              r.e(5472),
              r.e(3234),
              r.e(1270),
              r.e(5641),
              r.e(5501),
              r.e(6249),
              r.e(255),
              r.e(4684),
              r.e(9103)]).then(()=>()=>r(9103)),
              "./tina":()=>r.e(9276).then(()=>()=>r(9276)),
              "./tinaBlockTemplates":()=>r.e(9276).then(()=>()=>r(9276))
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
          }
        };
        const r={
        };
        function a(t){
          const n=r[t];
          if(void 0!==n)return n.exports;
          const o=r[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(o.exports,
          o,
          o.exports,
          a),
          o.loaded=!0,
          o.exports
        }return a.m=e,
        a.c=r,
        a.y=t,
        a.amdO={
        },
        a.n=e=>{
          const t=e&&e.__esModule?()=>e.default:()=>e;
          return a.d(t,
          {
            a:t
          }),
          t
        },
        a.cw=e=>{
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
          a.t=function(r,
          n){
            if(1&n&&(r=this(r)),
            8&n)return r;
            if("object"==typeof r&&r){
              if(4&n&&r.__esModule)return r;
              if(16&n&&"function"==typeof r.then)return r
            }const o=Object.create(null);
            a.r(o);
            const d={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var c=2&n&&r;
            ("object"==typeof c||"function"==typeof c)&&!~t.indexOf(c);
            c=e(c))Object.getOwnPropertyNames(c).forEach(e=>d[e]=()=>r[e]);
            return d.default=()=>r,
            a.d(o,
            d),
            o
          }
        })(),
        a.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var n=t[r++],
            o=t[r++],
            d=0===o?{
              enumerable:!0,
              value:t[r++]
            }:{
              enumerable:!0,
              get:o
            };
            a.o(e,
            n)||Object.defineProperty(e,
            n,
            d)
          }else for(var n in t)a.o(t,
          n)&&!a.o(e,
          n)&&Object.defineProperty(e,
          n,
          {
            enumerable:!0,
            get:t[n]
          })
        },
        a.f={
        },
        a.e=e=>Promise.all(Object.keys(a.f).reduce((t,
        r)=>(a.f[r](e,
        t),
        t),
        [])),
        a.u=e=>"js/"+{
          599:"1a94210b43423be45670c37a8b7c53bb",
          947:"c1d29cb5bc260889d38e37bc35966add",
          1519:"6eefcef38f8231e4e3ef1c3f2ce38be2",
          1533:"10307c34909a069a56e1ed0ef6f8f0b3",
          1652:"da05a54a26e3f4a3127f1d03fed04e0c",
          1863:"96f0be9d761a6c987ddee0c4eb8743b1",
          2042:"239983b1ea9f29fec30f58ff33202253",
          2320:"e34d783b3e703e9131155db3eb2ee66d",
          2497:"d7c7236b00c24c466963d10f68abed0d",
          2584:"15bd0f8c8317181c62b2f626486cfcb0",
          2590:"fe2cdc4af6a418cdbfa5df440d1c97f1",
          2634:"68e5ac5f7d0f4486d123e88ab2564c0c",
          2852:"d5ae0c8d59467e4e369d363b3de5e6fd",
          2873:"8d2f99075dae9b2ad26bfaf86bd9e483",
          2940:"a36ffcc81c1d3ae5d99fd5b0b4c5acc4",
          2944:"b3b9e34064f5e1a38bba782849443c77",
          2980:"d827302fe098d86f0ac262ea72e1818c",
          3099:"af3f13e6e7364f384205dc73e7f55c01",
          3469:"19654dc4cd09a76ec7c42e84e409e897",
          3529:"e02e923248b2f3d4ffc023799252e732",
          3612:"6d2ba42ac8efd8e07ddb2f6db9993d56",
          3770:"7718ab470e119034903e1971cb396767",
          3819:"6df8f487dacc2302218d284b15fb1691",
          3888:"157f31745fbdafdc7c567f60de13b91f",
          3894:"a122c3996e59d203342497d6af0325fa",
          4530:"4e8b8b21416d9eb292a97b8d79bb29fb",
          4684:"5191ca4a3f5bede1aa6df21d90ad6da5",
          4921:"c3f365181a76b3bd42647bdcbc257618",
          5051:"b68091ba6995a3645bf5876ccc76d9a6",
          5480:"f77225210fe1af49d3e321aa1c5ae6d9",
          5485:"0132a3a9ba0d8f1c7be7d3bc8afb032f",
          5500:"c40495542547b7b658fb3b210a2d41cc",
          5676:"dd2d4bad083e0622c1738bdae2be2abe",
          5708:"bbc9f7bd5e5725c47e68c3f19b505203",
          6038:"5e5bdebdcdc6b019c4105266f726476a",
          6147:"fb5d323cb3771af452912c5f2a481548",
          6281:"30f416f6e012c84616c32621c41f35a6",
          6295:"9e3f8f9bd11a03943d8b031ce9d89f1f",
          6911:"8cadd16cb4c43257108fab8ecdeb10e1",
          7158:"c892dbc56d8bb7e84feeca5b2b603cfd",
          7212:"4c8c2f454e62c307feb85add6c11f172",
          7350:"3430c4fd947d8fdbb174dfbbcc5edc66",
          7950:"9e7513418eaca3d2bc3d8eaad70403fe",
          7974:"dcd1218510f939ab8fc3e340216f1778",
          8277:"7d597f41c5896ca2c7e66ece28281bed",
          8528:"03f18bb70d36ca5e2523e920eacf5284",
          8574:"5af5e0b623e4915cb7fb4284db684a1e",
          8671:"440c30110c6f995a793d3077b30f2dbe",
          8676:"7f8232dc63ce7057b58607efc69e766b",
          8876:"bc8045f4427d7ea4e73d7c5e5019a733",
          8899:"6fc78b68da1d09f0c68e475081afcf5a",
          8946:"1dec8914af16fad0a6127fe78f8be22d",
          9103:"c1abb14dbf04140a76fac2255af8c7ba",
          9249:"013bb015b04ca40139e1a092ff0bcc76",
          9271:"895db31d783d7760cf1b31705a7bb33f",
          9276:"2da4e16c7323c542cc65498ab8004f46",
          9292:"32dd347f92639653de2db6c0a7a66233",
          9317:"482369a82ac950dd7185729766c8ad33",
          9374:"e55376ee90ff6b1c0c3f3d158c00d83b",
          9848:"fa8d539fb72acc5262f22237c559edf5",
          9874:"43d7a253516f42bb8010d7a5f1936196"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          1677:"0902caa96420fc9df874d2d4044947db",
          1863:"4f61d2d169d4bbbc2d69a1b010cb303e",
          2590:"e101b22e7e0c2639e70e178f8fd9d055",
          2634:"c39cd769315824f7cf2ede3db05ebc91",
          4058:"0902caa96420fc9df874d2d4044947db",
          4684:"820815afea6ae859215d7a98da896c02",
          9103:"71d87f7d1fcf7ab23375dcd2f2710464",
          9674:"f26a4beeeae04e5873936c866a0e7b78"
        }[e]+".css",
        a.g=function(){
          if("object"==typeof globalThis)return globalThis;
          try{
            return this||new Function("return this")()
          }catch(e){
            if("object"==typeof window)return window
          }
        }(),
        a.o=(e,
        t)=>Object.prototype.hasOwnProperty.call(e,
        t),
        (()=>{
          const e={
          },
          t="@rockstargames/modules-core-videoplayer:";
          a.l=(r,
          n,
          o,
          d)=>{
            if(e[r])return void e[r].push(n);
            let c,
            f;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const a=e[s];
                if(a.getAttribute("src")==r||a.getAttribute("data-webpack")==t+o){
                  c=a;
                  break
                }
              }
            }c||(f=!0,
            c=document.createElement("script"),
            c.charset="utf-8",
            a.nc&&c.setAttribute("nonce",
            a.nc),
            c.setAttribute("data-webpack",
            t+o),
            c.src=r),
            e[r]=[n];
            const l=(t,
            a)=>{
              c.onerror=c.onload=null,
              clearTimeout(i);
              const n=e[r];
              if(delete e[r],
              c.parentNode?.removeChild(c),
              n?.forEach(e=>e(a)),
              t)return t(a)
            },
            i=setTimeout(l.bind(null,
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
        a.r=e=>{
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
        a.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          a.S={
          };
          const e={
          },
          t={
          };
          a.I=(r,
          n)=>{
            n||(n=[]);
            let o=t[r];
            if(o||(o=t[r]={
            }),
            n.indexOf(o)>=0)return;
            if(n.push(o),
            e[r])return e[r];
            a.o(a.S,
            r)||(a.S[r]={
            });
            const d=a.S[r],
            c="@rockstargames/modules-core-videoplayer",
            f=(e,
            t,
            r,
            a)=>{
              const n=d[e]=d[e]||{
              },
              o=n[t];
              (!o||!o.loaded&&(!a!=!o.eager?a:c>o.from))&&(n[t]={
                get:r,
                from:c,
                eager:!!a
              })
            },
            s=[];
            return"default"===r&&(f("@floating-ui/react",
            "0.27.20",
            ()=>Promise.all([a.e(5708),
            a.e(1533),
            a.e(8876),
            a.e(5748),
            a.e(7281),
            a.e(9292)]).then(()=>()=>a(8876))),
            f("@foundry-int/utils",
            "7.5.1",
            ()=>Promise.all([a.e(7212),
            a.e(1270),
            a.e(8676)]).then(()=>()=>a(8676))),
            f("@foundry-int/utils",
            "7.6.4",
            ()=>Promise.all([a.e(7212),
            a.e(1270),
            a.e(2980)]).then(()=>()=>a(2980))),
            f("@foundry/react",
            "7.6.4",
            ()=>Promise.all([a.e(8277),
            a.e(2940),
            a.e(8946),
            a.e(2873),
            a.e(5708),
            a.e(2634),
            a.e(2590),
            a.e(5748),
            a.e(7281),
            a.e(1270),
            a.e(5501),
            a.e(6249),
            a.e(4592),
            a.e(6911)]).then(()=>()=>a(114))),
            f("@gsap/react",
            "2.1.2",
            ()=>Promise.all([a.e(5748),
            a.e(5501),
            a.e(3099)]).then(()=>()=>a(3099))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(2873),
            a.e(5748),
            a.e(5472),
            a.e(6147)]).then(()=>()=>a(6147))),
            f("@rsgweb/modules-core-agegate",
            "0.0.0",
            ()=>Promise.all([a.e(2940),
            a.e(9249),
            a.e(5748),
            a.e(7281),
            a.e(1270),
            a.e(5641),
            a.e(4592),
            a.e(255),
            a.e(2944),
            a.e(1677)]).then(()=>()=>a(2944))),
            f("@rsgweb/rockstar-account",
            "0.0.0",
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(5748),
            a.e(5472),
            a.e(3234),
            a.e(5641),
            a.e(3612),
            a.e(1652)]).then(()=>()=>a(1652))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(3894),
            a.e(5748),
            a.e(5472),
            a.e(3234),
            a.e(5641),
            a.e(3612),
            a.e(9874),
            a.e(4530)]).then(()=>()=>a(9090))),
            f("clsx",
            "2.1.1",
            ()=>a.e(4921).then(()=>()=>a(4921))),
            f("focus-trap-react",
            "12.0.3",
            ()=>Promise.all([a.e(1533),
            a.e(6281),
            a.e(5748)]).then(()=>()=>a(6281))),
            f("graphql",
            "16.14.2",
            ()=>a.e(1519).then(()=>()=>a(1519))),
            f("gsap",
            "3.12.5",
            ()=>a.e(3529).then(()=>()=>a(3529))),
            f("hammerjs",
            "2.0.8",
            ()=>a.e(6038).then(()=>()=>a(6038))),
            f("jotai",
            "2.20.3",
            ()=>Promise.all([a.e(5500),
            a.e(5748)]).then(()=>()=>a(5500))),
            f("lodash-es",
            "4.18.1",
            ()=>a.e(2042).then(()=>()=>a(2042))),
            f("react-dom",
            "19.2.8",
            ()=>Promise.all([a.e(5748),
            a.e(9848)]).then(()=>()=>a(9848))),
            f("react-router",
            "7.18.4",
            ()=>Promise.all([a.e(8574),
            a.e(5748)]).then(()=>()=>a(8574))),
            f("react",
            "19.2.8",
            ()=>a.e(3888).then(()=>()=>a(3888))),
            f("uuid",
            "9.0.1",
            ()=>a.e(3770).then(()=>()=>a(3770)))),
            e[r]=s.length?Promise.all(s).then(()=>e[r]=1):1
          }
        })(),
        (()=>{
          let e;
          a.g.importScripts&&(e=a.g.location+"");
          const t=a.g.document;
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
          a.p=e
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
              a+="u"==(typeof(c=e[o]))[0]?"-":(n>0?".":"")+(n=2,
              c);
              return a
            }var d=[];
            for(o=1;
            o<e.length;
            o++){
              var c=e[o];
              d.push(0===c?"not("+f()+")":1===c?"("+f()+" || "+f()+")":2===c?d.pop()+" "+d.pop():t(c))
            }return f();
            function f(){
              return d.pop().replace(/^\((.+)\)$/,
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
              for(var d=0,
              c=1,
              f=!0;
              ;
              c++,
              d++){
                var s,
                l,
                i=c<t.length?(typeof t[c])[0]:"";
                if(d>=a.length||"o"==(l=(typeof(s=a[d]))[0]))return!f||("u"==i?c>n&&!o:""==i!=o);
                if("u"==l){
                  if(!f||"u"!=i)return!1
                }else if(f)if(i==l)if(c<=n){
                  if(s!=t[c])return!1
                }else{
                  if(o?s>t[c]:s<t[c])return!1;
                  s!=t[c]&&(f=!1)
                }else if("s"!=i&&"n"!=i){
                  if(o||c<=n)return!1;
                  f=!1,
                  c--
                }else{
                  if(c<=n||l<i!=o)return!1;
                  f=!1
                }else"s"!=i&&"n"!=i&&(f=!1,
                c--)
              }
            }var u=[],
            b=u.pop.bind(u);
            for(d=1;
            d<t.length;
            d++){
              var h=t[d];
              u.push(1==h?b()|b():2==h?b()&b():h?r(h,
              a):!b())
            }return!!b()
          };
          const n=(e,
          t)=>e&&a.o(e,
          t),
          o=e=>(e.loaded=1,
          e.get()),
          d=(t,
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
                var d=r[a],
                c=(typeof d)[0];
                if(o!=c)return"o"==o&&"n"==c||"s"==c||"u"==o;
                if("o"!=o&&"u"!=o&&n!=d)return n<d;
                a++
              }
            })(t,
            r)?r:t,
            0)
          },
          c=e=>function(t,
          r,
          n,
          o,
          d){
            const c=a.I(t);
            return c?.then&&!n?c.then(e.bind(e,
            t,
            a.S[t],
            r,
            !1,
            o,
            d)):e(t,
            a.S[t],
            r,
            n,
            o,
            d)
          },
          f=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          s=c((e,
          t,
          r,
          a,
          c)=>{
            if(!n(t,
            r))return f(e,
            r,
            c);
            const s=d(t,
            r,
            a);
            return o(t[r][s])
          }),
          l=c((e,
          a,
          c,
          s,
          l,
          i)=>{
            if(!n(a,
            c))return f(e,
            c,
            i);
            const u=d(a,
            c,
            s);
            return r(l,
            u)||(b=((e,
            r,
            a,
            n)=>"Unsatisfied version "+a+" from "+(a&&e[r][a].from)+" of shared singleton module "+r+" (required "+t(n)+")")(a,
            c,
            u,
            l),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            o(a[c][u]);
            var b
          }),
          i={
          },
          u={
            5748:()=>s("default",
            "react",
            !1,
            ()=>a.e(3888).then(()=>()=>a(3888))),
            5472:()=>s("default",
            "lodash-es",
            !1,
            ()=>a.e(2042).then(()=>()=>a(2042))),
            3234:()=>s("default",
            "react-router",
            !1,
            ()=>a.e(8574).then(()=>()=>a(8574))),
            1270:()=>l("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(4921).then(()=>()=>a(4921))),
            3788:()=>s("default",
            "@rsgweb/utils",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(3894),
            a.e(5472),
            a.e(3234),
            a.e(3612),
            a.e(9874)]).then(()=>()=>a(9090))),
            4564:()=>s("default",
            "@rsgweb/locale-tools",
            !1,
            ()=>Promise.all([a.e(2873),
            a.e(5472),
            a.e(8528)]).then(()=>()=>a(6147))),
            5501:()=>s("default",
            "gsap",
            !1,
            ()=>a.e(3529).then(()=>()=>a(3529))),
            3705:()=>s("default",
            "@gsap/react",
            !1,
            ()=>a.e(5480).then(()=>()=>a(3099))),
            9521:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>Promise.all([a.e(7212),
            a.e(599)]).then(()=>()=>a(2980))),
            3392:()=>s("default",
            "@foundry/react",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(2940),
            a.e(8946),
            a.e(2873),
            a.e(5708),
            a.e(2634),
            a.e(2590),
            a.e(7281),
            a.e(5501),
            a.e(6249),
            a.e(4592)]).then(()=>()=>a(114))),
            8130:()=>s("default",
            "@rsgweb/rockstar-account",
            !1,
            ()=>Promise.all([a.e(8277),
            a.e(2497),
            a.e(5472),
            a.e(3234),
            a.e(3612),
            a.e(9271)]).then(()=>()=>a(1652))),
            584:()=>s("default",
            "focus-trap-react",
            !1,
            ()=>Promise.all([a.e(1533),
            a.e(6281)]).then(()=>()=>a(6281))),
            1639:()=>l("default",
            "@floating-ui/react",
            !1,
            [2,
            0,
            27,
            20],
            ()=>Promise.all([a.e(5708),
            a.e(1533),
            a.e(8876),
            a.e(7281)]).then(()=>()=>a(8876))),
            2341:()=>l("default",
            "hammerjs",
            !1,
            [1,
            2,
            0,
            8],
            ()=>a.e(6038).then(()=>()=>a(6038))),
            3424:()=>s("default",
            "@rsgweb/modules-core-agegate",
            !1,
            ()=>Promise.all([a.e(2940),
            a.e(7281),
            a.e(4592),
            a.e(2944),
            a.e(4058)]).then(()=>()=>a(2944))),
            4815:()=>l("default",
            "uuid",
            !1,
            [1,
            9,
            0,
            1],
            ()=>a.e(3770).then(()=>()=>a(3770))),
            5115:()=>s("default",
            "jotai",
            !1,
            ()=>a.e(5500).then(()=>()=>a(5500))),
            7281:()=>s("default",
            "react-dom",
            !1,
            ()=>a.e(3819).then(()=>()=>a(9848))),
            4592:()=>s("default",
            "@foundry-int/utils",
            !1,
            ()=>Promise.all([a.e(7212),
            a.e(6295)]).then(()=>()=>a(8676))),
            6647:()=>s("default",
            "graphql",
            !1,
            ()=>a.e(1519).then(()=>()=>a(1519)))
          },
          b={
            255:[3392,
            8130],
            1270:[1270],
            3234:[3234],
            4592:[4592],
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
            6249:[3705,
            9521],
            7281:[7281],
            9874:[6647]
          },
          h={
          };
          a.f.consumes=(e,
          t)=>{
            a.o(b,
            e)&&b[e].forEach(e=>{
              if(a.o(i,
              e))return t.push(i[e]);
              if(!h[e]){
                const r=t=>{
                  i[e]=0,
                  a.m[e]=r=>{
                    delete a.c[e],
                    r.exports=t()
                  }
                };
                h[e]=!0;
                const n=t=>{
                  delete i[e],
                  a.m[e]=r=>{
                    throw delete a.c[e],
                    t
                  }
                };
                try{
                  const a=u[e]();
                  a.then?t.push(i[e]=a.then(r).catch(n)):r(a)
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
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                1677:1,
                1863:1,
                2590:1,
                2634:1,
                4058:1,
                4684:1,
                9103:1,
                9674:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var n=a.miniCssF(e),
                o=a.p+n;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  a=0;
                  a<r.length;
                  a++){
                    var n=(d=r[a]).getAttribute("data-href")||d.getAttribute("href");
                    if("stylesheet"===d.rel&&(n===e||n===t))return d
                  }var o=document.getElementsByTagName("style");
                  for(a=0;
                  a<o.length;
                  a++){
                    var d;
                    if((n=(d=o[a]).getAttribute("data-href"))===e||n===t)return d
                  }
                })(n,
                o))return t();
                ((e,
                t,
                r,
                n,
                o)=>{
                  var d=document.createElement("link");
                  d.rel="stylesheet",
                  d.type="text/css",
                  a.nc&&(d.nonce=a.nc),
                  d.onerror=d.onload=r=>{
                    if(d.onerror=d.onload=null,
                    "load"===r.type)n();
                    else{
                      var a=r&&r.type,
                      c=r&&r.target&&r.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+c+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=a,
                      f.request=c,
                      d.parentNode&&d.parentNode.removeChild(d),
                      o(f)
                    }
                  },
                  d.href=t,
                  document.head.appendChild(d)
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
            7614:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(5(472|501|641|748)|1270|1677|255|3234|4058|4592|6249|7281|9674)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              a)=>n=e[t]=[r,
              a]);
              r.push(n[2]=o);
              const d=new Error,
              c=r=>{
                if(a.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  a=r&&r.target&&r.target.src;
                  d.message="Loading chunk "+t+" failed.\n("+e+": "+a+")",
                  d.name="ChunkLoadError",
                  d.type=e,
                  d.request=a,
                  d.event=r,
                  n[1](d)
                }
              };
              a.l(a.p+a.u(t),
              c,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[n,
            o,
            d]=r;
            var c,
            f,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(c in o)a.o(o,
              c)&&(a.m[c]=o[c]);
              d&&d(a)
            }for(t&&t(r);
            s<n.length;
            s++)f=n[s],
            a.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          r=self.webpackChunk_rockstargames_modules_core_videoplayer=self.webpackChunk_rockstargames_modules_core_videoplayer||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(3069),
        a(8157)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map