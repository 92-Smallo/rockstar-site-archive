try{
  let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
  },
  t=(new e.Error).stack;
  t&&(e._sentryDebugIds=e._sentryDebugIds||{
  },
  e._sentryDebugIds[t]="a251b44c-198c-4162-aae4-bc678302e68c",
  e._sentryDebugIdIdentifier="sentry-dbid-a251b44c-198c-4162-aae4-bc678302e68c")
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
    release:"b64c845fbd4145dd4934b118ebd89ab3ed32f21c",
    packageName:"@rockstargames/sites-red-dead-online",
    dsn:"https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{
}).SENTRY_RELEASE={
  id:"b64c845fbd4145dd4934b118ebd89ab3ed32f21c"
},
System.register(["@rockstargames/modules-core-newswire-article",
"@rockstargames/modules-core-videoplayer"],
function(e,
t){
  var r={
  },
  n={
  };
  return Object.defineProperty(r,
  "__esModule",
  {
    value:!0
  }),
  Object.defineProperty(n,
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
    },
    function(e){
      n.default=e.default||e,
      Object.keys(e).forEach(function(t){
        n[t]=e[t]
      })
    }],
    execute:function(){
      e((()=>{
        var e={
          85946(e,
          t,
          r){
            (0,
            r(69e3).w)(1)
          },
          69e3(e,
          t,
          r){
            const n=r(31364).y;
            t.w=function(e){
              if(e||(e=1),
              !r.y.meta||!r.y.meta.url)throw console.error("__system_context__",
              r.y),
              Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              r.p=n(r.y.meta.url,
              e)
            }
          },
          64769(e,
          t,
          r){
            r(85946)
          },
          31364(e,
          t,
          r){
            t.y=function(e,
            t){
              var r=document.createElement("a");
              r.href=e;
              for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,
              o=0,
              a=n.length;
              o!==t&&a>=0;
              )"/"===n[--a]&&o++;
              if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);
              var c=n.slice(0,
              a+1);
              return r.protocol+"//"+r.host+c
            };
            Number.isInteger
          },
          82021(e,
          t,
          r){
            "use strict";
            const n={
              "./index":()=>Promise.all([r.e(6256),
              r.e(8207),
              r.e(5140),
              r.e(883),
              r.e(7033),
              r.e(2351),
              r.e(3082),
              r.e(4017),
              r.e(1270),
              r.e(2272),
              r.e(9192),
              r.e(625),
              r.e(9653),
              r.e(9809)]).then(()=>()=>r(99809))
            },
            o=(e,
            t)=>(r.R=t,
            t=r.o(n,
            e)?n[e]():Promise.resolve().then(()=>{
              throw new Error('Module "'+e+'" does not exist in container.')
            }),
            r.R=void 0,
            t),
            a=(e,
            t)=>{
              if(!r.S)return;
              const n="default",
              o=r.S[n];
              if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");
              return r.S[n]=e,
              r.I(n,
              t)
            };
            r.d(t,
            {
              get:()=>o,
              init:()=>a
            })
          },
          66819(e){
            "use strict";
            e.exports=r
          },
          25136(e){
            "use strict";
            e.exports=n
          }
        };
        const o={
        };
        function a(t){
          const r=o[t];
          if(void 0!==r)return r.exports;
          const n=o[t]={
            id:t,
            loaded:!1,
            exports:{
            }
          };
          return e[t].call(n.exports,
          n,
          n.exports,
          a),
          n.loaded=!0,
          n.exports
        }return a.m=e,
        a.c=o,
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
        (()=>{
          const e=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;
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
            const c={
            };
            t=t||[null,
            e({
            }),
            e([]),
            e(e)];
            for(var d=2&n&&r;
            ("object"==typeof d||"function"==typeof d)&&!~t.indexOf(d);
            d=e(d))Object.getOwnPropertyNames(d).forEach(e=>c[e]=()=>r[e]);
            return c.default=()=>r,
            a.d(o,
            c),
            o
          }
        })(),
        a.d=(e,
        t)=>{
          if(Array.isArray(t))for(var r=0;
          r<t.length;
          ){
            var n=t[r++],
            o=t[r++];
            a.o(e,
            n)?0===o&&r++:0===o?Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              value:t[r++]
            }):Object.defineProperty(e,
            n,
            {
              enumerable:!0,
              get:o
            })
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
          162:"0a0a65652ab4d03a68bc149774626001",
          331:"ce3a22207b758b264100fee8eb641221",
          573:"22645ee40f352f73f3aa4a4a8394b4e0",
          606:"7b6127a5f456013bd71804c16f43762e",
          625:"474c8725aa858f3bf8b6d0c2dee2d0cc",
          761:"d96644b0ad3261a3ba9ba23dfdd96cfa",
          883:"52a24fdd24334b1186c118c1ea223b19",
          1125:"f5d4923c4fbee6e771ce19f4e5d0ea34",
          1203:"bb1ab637cba0128a3f170e8ad1249469",
          2272:"5cbee2fa130ee6ef432ee71216dd6f5c",
          2351:"a9f9a93872c96f804556f40dbc6ba7d0",
          2581:"3c5cb7c3292b22a39acc1c3eda458e6f",
          2656:"edf95a786b5508f2941d73e74cff14c7",
          3506:"1caff5d621c4bbbdae1ea3dc12cdf932",
          3769:"4a345d92e600cc97efef794d1ba2ba87",
          4514:"759602b37b9faaba1edbce43d30b62f0",
          4597:"2a2ff0f279474c39faf9061a9463dd45",
          4607:"afebfacfa43ff7f6322f17124dbbf443",
          4921:"d1516bd3d4dc6c950a498aad6704c16e",
          4962:"6052cb2465c5feb89a30743645c9327c",
          5140:"a6d75891082341c0418388fbb34307cc",
          5529:"901af7c54f66bdb25848a769b0378f67",
          5847:"46643442b5610fb89f2ca36dc0eda3f4",
          6256:"7545fb4d71a732fbf53addd4b38b4011",
          6372:"03a7cb42982b8bc5416d73c2a514c7c2",
          6405:"ab53418f9d1ed520c631ad430de6b892",
          6807:"d410daf10433e7412bcf4003d4bafcea",
          7033:"b5528090498ea9d9bc9593c8bcf564b3",
          7110:"1346de2855e84d69b55837d6c4fbb62f",
          7602:"93b1ffb7efc82ba4449fb2c13a8aaa82",
          7725:"638ed8d58e01dd19c7c80a15977d7afd",
          7946:"d9e90bd3b6cb6f880e82cb3754ed1dac",
          8207:"15a5a710b86b335360359dc71d63d223",
          8504:"316a24b178161b2dfd669e87a5e7df0d",
          8696:"0652dd48eb4b4138dd0c16abbfb7ac08",
          9086:"8fbf105fd6d1b94021dfce5ba8664b6b",
          9103:"fa786014be1d5768468fa55b1ae6fa24",
          9188:"ff0608690cc899f1100dc378a0406bd3",
          9192:"f4b1348f9b45ed036e205168bfa7a320",
          9249:"5d629849bdad0e09a61897b3c3524aec",
          9269:"2c0216e11dfb72901f71b18d43628970",
          9708:"d94a7fe6ca0dc5e91372bd7166a7264e",
          9809:"0170e98aa802bd9698b4bc4a6556bd7c",
          9860:"8a818d41dffcab3e8b79a52f37ae9478",
          9933:"1fc4e641f1c556d2ba3f77c2b031c2bb"
        }[e]+".js",
        a.miniCssF=e=>"css/"+{
          704:"7c575cc0a210038808b12a81bf37629b",
          1203:"1c9b55705ab693054730e10b48cf08f1",
          6372:"7c575cc0a210038808b12a81bf37629b",
          9086:"5d0bafec817936de7cf8fe6576505c75",
          9809:"af46c6919832bb57abd0cc6085639100"
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
          t="@rockstargames/sites-red-dead-online:";
          a.l=(r,
          n,
          o,
          c)=>{
            if(e[r])return void e[r].push(n);
            let d,
            f;
            if(void 0!==o){
              const e=document.getElementsByTagName("script");
              for(var s=0;
              s<e.length;
              s++){
                const n=e[s];
                if(n.getAttribute("src")==r||n.getAttribute("data-webpack")==t+o){
                  d=n;
                  break
                }
              }
            }d||(f=!0,
            d=document.createElement("script"),
            d.charset="utf-8",
            a.nc&&d.setAttribute("nonce",
            a.nc),
            d.setAttribute("data-webpack",
            t+o),
            d.src=r),
            e[r]=[n];
            const i=(t,
            n)=>{
              d.onerror=d.onload=null,
              clearTimeout(l);
              const o=e[r];
              if(delete e[r],
              d.parentNode?.removeChild(d),
              o?.forEach(e=>e(n)),
              t)return t(n)
            },
            l=setTimeout(i.bind(null,
            void 0,
            {
              type:"timeout",
              target:d
            }),
            12e4);
            d.onerror=i.bind(null,
            d.onerror),
            d.onload=i.bind(null,
            d.onload),
            f&&document.head.appendChild(d)
          }
        })(),
        a.r=e=>{
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
        a.nmd=e=>(e.paths=[],
        e.children||(e.children=[]),
        e),
        (()=>{
          const e={
            9809:[9566,
            31879]
          },
          t={
            9566:["default",
            "./index",
            66819],
            31879:["default",
            "./index",
            25136]
          };
          a.f.remotes=(r,
          n)=>{
            a.o(e,
            r)&&e[r].forEach(e=>{
              let r=a.R;
              r||(r=[]);
              const o=t[e];
              if(r.indexOf(o)>=0)return;
              if(r.push(o),
              o.p)return n.push(o.p);
              const c=t=>{
                t||(t=new Error("Container missing")),
                "string"==typeof t.message&&(t.message+='\nwhile loading "'+o[1]+'" from '+o[2]),
                a.m[e]=()=>{
                  throw t
                },
                o.p=0
              },
              d=(e,
              t,
              r,
              a,
              d,
              f)=>{
                try{
                  const s=e(t,
                  r);
                  if(!s?.then)return d(s,
                  a,
                  f);
                  {
                    const e=s.then(e=>d(e,
                    a),
                    c);
                    if(!f)return e;
                    n.push(o.p=e)
                  }
                }catch(e){
                  c(e)
                }
              },
              f=(e,
              t,
              n)=>d(t.get,
              o[1],
              r,
              0,
              s,
              n),
              s=t=>{
                o.p=1,
                a.m[e]=e=>{
                  e.exports=t()
                }
              };
              d(a,
              o[2],
              0,
              0,
              (e,
              t,
              r)=>e?d(a.I,
              o[0],
              0,
              e,
              f,
              r):c(),
              1)
            })
          }
        })(),
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
            const c=a.S[r],
            d="@rockstargames/sites-red-dead-online",
            f=(e,
            t,
            r,
            n)=>{
              const o=c[e]=c[e]||{
              },
              a=o[t];
              (!a||!a.loaded&&(!n!=!a.eager?n:d>a.from))&&(o[t]={
                get:r,
                from:d,
                eager:!!n
              })
            },
            s=e=>{
              const t=e=>{
                return t="Initialization of sharing external failed: "+e,
                void("undefined"!=typeof console&&console.warn&&console.warn(t));
                var t
              };
              try{
                const o=a(e);
                if(!o)return;
                const c=e=>e&&e.init&&e.init(a.S[r],
                n);
                if(o.then)return i.push(o.then(c,
                t));
                const d=c(o);
                if(d?.then)return i.push(d.catch(t))
              }catch(e){
                t(e)
              }
            },
            i=[];
            return"default"===r&&(f("@foundry-int/utils",
            "6.6.1",
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(8504)]).then(()=>()=>a(98504))),
            f("@foundry-int/utils",
            "6.6.1",
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(6807)]).then(()=>()=>a(36807))),
            f("@foundry/icons",
            "6.6.1",
            ()=>Promise.all([a.e(7725),
            a.e(3082),
            a.e(4017),
            a.e(2874),
            a.e(6372)]).then(()=>()=>a(47725))),
            f("@foundry/react",
            "6.6.1",
            ()=>Promise.all([a.e(761),
            a.e(9086),
            a.e(3082),
            a.e(4017),
            a.e(1270),
            a.e(2874),
            a.e(5866),
            a.e(4597)]).then(()=>()=>a(19086))),
            f("@rsgweb/locale-tools",
            "0.0.0",
            ()=>Promise.all([a.e(6256),
            a.e(761),
            a.e(8207),
            a.e(573),
            a.e(3082),
            a.e(3506)]).then(()=>()=>a(93506))),
            f("@rsgweb/modules-core-feedback",
            "0.0.0",
            ()=>Promise.all([a.e(8207),
            a.e(5140),
            a.e(7033),
            a.e(3082),
            a.e(1270),
            a.e(2272),
            a.e(1203),
            a.e(625)]).then(()=>()=>a(21203))),
            f("@rsgweb/utils",
            "0.0.0-development",
            ()=>Promise.all([a.e(6256),
            a.e(8207),
            a.e(573),
            a.e(5140),
            a.e(3769),
            a.e(3082),
            a.e(2272),
            a.e(9192),
            a.e(606)]).then(()=>()=>a(40606))),
            f("clsx",
            "2.1.1",
            ()=>a.e(4921).then(()=>()=>a(4921))),
            f("date-fns",
            "4.4.0",
            ()=>a.e(7946).then(()=>()=>a(87946))),
            f("focus-trap-react",
            "10.3.1",
            ()=>Promise.all([a.e(4514),
            a.e(3082),
            a.e(9653)]).then(()=>()=>a(44514))),
            f("prop-types",
            "15.8.1",
            ()=>a.e(331).then(()=>()=>a(60331))),
            f("react-dom",
            "18.3.1",
            ()=>Promise.all([a.e(162),
            a.e(3082)]).then(()=>()=>a(30162))),
            f("react-router-dom",
            "6.30.4",
            ()=>Promise.all([a.e(9860),
            a.e(3082),
            a.e(4017)]).then(()=>()=>a(79860))),
            f("react",
            "18.3.1",
            ()=>a.e(2581).then(()=>()=>a(22581))),
            s(66819),
            s(25136)),
            i.length?e[r]=Promise.all(i).then(()=>e[r]=1):e[r]=1
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
              t>-1&&(!e||!/^http(s?):/.test(e));
              )e=r[t--].src
            }
          }if(!e)throw new Error("Automatic publicPath is not supported in this browser");
          e=e.replace(/^blob:/,
          "").replace(/#.*$/,
          "").replace(/\?.*$/,
          "").replace(/\/[^\/]+$/,
          "/"),
          a.p=e
        })(),
        (()=>{
          var e=e=>{
            var t=e=>e.split(".").map(e=>+e==e?+e:e),
            r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            n=r[1]?t(r[1]):[];
            return r[2]&&(n.length++,
            n.push.apply(n,
            t(r[2]))),
            r[3]&&(n.push([]),
            n.push.apply(n,
            t(r[3]))),
            n
          },
          t=e=>{
            var r=e[0],
            n="";
            if(1===e.length)return"*";
            if(r+.5){
              n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";
              for(var o=1,
              a=1;
              a<e.length;
              a++)o--,
              n+="u"==(typeof(d=e[a]))[0]?"-":(o>0?".":"")+(o=2,
              d);
              return n
            }var c=[];
            for(a=1;
            a<e.length;
            a++){
              var d=e[a];
              c.push(0===d?"not("+f()+")":1===d?"("+f()+" || "+f()+")":2===d?c.pop()+" "+c.pop():t(d))
            }return f();
            function f(){
              return c.pop().replace(/^\((.+)\)$/,
              "$1")
            }
          },
          r=(t,
          n)=>{
            if(0 in t){
              n=e(n);
              var o=t[0],
              a=o<0;
              a&&(o=-o-1);
              for(var c=0,
              d=1,
              f=!0;
              ;
              d++,
              c++){
                var s,
                i,
                l=d<t.length?(typeof t[d])[0]:"";
                if(c>=n.length||"o"==(i=(typeof(s=n[c]))[0]))return!f||("u"==l?d>o&&!a:""==l!=a);
                if("u"==i){
                  if(!f||"u"!=l)return!1
                }else if(f)if(l==i)if(d<=o){
                  if(s!=t[d])return!1
                }else{
                  if(a?s>t[d]:s<t[d])return!1;
                  s!=t[d]&&(f=!1)
                }else if("s"!=l&&"n"!=l){
                  if(a||d<=o)return!1;
                  f=!1,
                  d--
                }else{
                  if(d<=o||i<l!=a)return!1;
                  f=!1
                }else"s"!=l&&"n"!=l&&(f=!1,
                d--)
              }
            }var u=[],
            b=u.pop.bind(u);
            for(c=1;
            c<t.length;
            c++){
              var h=t[c];
              u.push(1==h?b()|b():2==h?b()&b():h?r(h,
              n):!b())
            }return!!b()
          };
          const n=(t,
          r,
          n)=>{
            const o=n?(e=>Object.keys(e).reduce((t,
            r)=>(e[r].eager&&(t[r]=e[r]),
            t),
            {
            }))(t[r]):t[r];
            return Object.keys(o).reduce((t,
            r)=>!t||!o[t].loaded&&((t,
            r)=>{
              t=e(t),
              r=e(r);
              for(var n=0;
              ;
              ){
                if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];
                var o=t[n],
                a=(typeof o)[0];
                if(n>=r.length)return"u"==a;
                var c=r[n],
                d=(typeof c)[0];
                if(a!=d)return"o"==a&&"n"==d||"s"==d||"u"==a;
                if("o"!=a&&"u"!=a&&o!=c)return o<c;
                n++
              }
            })(t,
            r)?r:t,
            0)
          },
          o=(e,
          t,
          r)=>r?r():((e,
          t)=>(e=>{
            throw new Error(e)
          })("Shared module "+t+" doesn't exist in shared scope "+e))(e,
          t),
          c=(e=>function(t,
          r,
          n,
          o,
          c){
            const d=a.I(t);
            return d?.then&&!n?d.then(e.bind(e,
            t,
            a.S[t],
            r,
            !1,
            o,
            c)):e(t,
            a.S[t],
            r,
            n,
            o,
            c)
          })((e,
          c,
          d,
          f,
          s,
          i)=>{
            if(!((e,
            t)=>e&&a.o(e,
            t))(c,
            d))return o(e,
            d,
            i);
            const l=n(c,
            d,
            f);
            return r(s,
            l)||(b=((e,
            r,
            n,
            o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(c,
            d,
            l,
            s),
            "undefined"!=typeof console&&console.warn&&console.warn(b)),
            (u=c[d][l]).loaded=1,
            u.get();
            var u,
            b
          }),
          d={
          },
          f={
            93082:()=>c("default",
            "react",
            !1,
            [0],
            ()=>a.e(2581).then(()=>()=>a(22581))),
            84017:()=>c("default",
            "react-dom",
            !1,
            [1,
            18,
            2,
            0],
            ()=>a.e(162).then(()=>()=>a(30162))),
            81270:()=>c("default",
            "clsx",
            !1,
            [1,
            2,
            1,
            1],
            ()=>a.e(4921).then(()=>()=>a(4921))),
            42909:()=>c("default",
            "@rsgweb/locale-tools",
            !1,
            [0],
            ()=>Promise.all([a.e(6256),
            a.e(761),
            a.e(573),
            a.e(1125)]).then(()=>()=>a(93506))),
            99225:()=>c("default",
            "react-router-dom",
            !1,
            [0],
            ()=>Promise.all([a.e(9860),
            a.e(4017)]).then(()=>()=>a(79860))),
            13331:()=>c("default",
            "@rsgweb/utils",
            !1,
            [0],
            ()=>Promise.all([a.e(6256),
            a.e(573),
            a.e(3769),
            a.e(9192),
            a.e(606)]).then(()=>()=>a(40606))),
            20005:()=>c("default",
            "@foundry/react",
            !1,
            [0],
            ()=>Promise.all([a.e(761),
            a.e(9086),
            a.e(4017),
            a.e(2874),
            a.e(5866)]).then(()=>()=>a(19086))),
            23592:()=>c("default",
            "date-fns",
            !1,
            [1,
            4,
            4,
            0],
            ()=>a.e(7946).then(()=>()=>a(87946))),
            89653:()=>c("default",
            "prop-types",
            !1,
            [1,
            15,
            8,
            1],
            ()=>a.e(331).then(()=>()=>a(60331))),
            56263:()=>c("default",
            "@rsgweb/modules-core-feedback",
            !1,
            [0],
            ()=>a.e(1203).then(()=>()=>a(21203))),
            58912:()=>c("default",
            "@foundry-int/utils",
            !1,
            [0],
            ()=>Promise.all([a.e(9249),
            a.e(9188)]).then(()=>()=>a(36807))),
            79955:()=>c("default",
            "focus-trap-react",
            !1,
            [1,
            10,
            3,
            1],
            ()=>a.e(4514).then(()=>()=>a(44514))),
            32874:()=>c("default",
            "@foundry-int/utils",
            !1,
            [0],
            ()=>Promise.all([a.e(883),
            a.e(9249),
            a.e(1270),
            a.e(8504)]).then(()=>()=>a(98504))),
            45866:()=>c("default",
            "@foundry/icons",
            !1,
            [0],
            ()=>Promise.all([a.e(7725),
            a.e(704)]).then(()=>()=>a(47725)))
          },
          s={
            625:[13331,
            20005,
            23592],
            1270:[81270],
            2272:[42909,
            99225],
            2874:[32874],
            3082:[93082],
            4017:[84017],
            5866:[45866],
            9653:[89653],
            9809:[56263,
            58912,
            79955]
          },
          i={
          };
          a.f.consumes=(e,
          t)=>{
            a.o(s,
            e)&&s[e].forEach(e=>{
              if(a.o(d,
              e))return t.push(d[e]);
              if(!i[e]){
                const r=t=>{
                  d[e]=0,
                  a.m[e]=r=>{
                    delete a.c[e],
                    r.exports=t()
                  }
                };
                i[e]=!0;
                const n=t=>{
                  delete d[e],
                  a.m[e]=r=>{
                    throw delete a.c[e],
                    t
                  }
                };
                try{
                  const o=f[e]();
                  o.then?t.push(d[e]=o.then(r).catch(n)):r(o)
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
              129:0
            };
            a.f.miniCss=(t,
            r)=>{
              e[t]?r.push(e[t]):0!==e[t]&&{
                704:1,
                1203:1,
                6372:1,
                9086:1,
                9809:1
              }[t]&&r.push(e[t]=(e=>new Promise((t,
              r)=>{
                var n=a.miniCssF(e),
                o=a.p+n;
                if(((e,
                t)=>{
                  for(var r=document.getElementsByTagName("link"),
                  n=0;
                  n<r.length;
                  n++){
                    var o=(c=r[n]).getAttribute("data-href")||c.getAttribute("href");
                    if("stylesheet"===c.rel&&(o===e||o===t))return c
                  }var a=document.getElementsByTagName("style");
                  for(n=0;
                  n<a.length;
                  n++){
                    var c;
                    if((o=(c=a[n]).getAttribute("data-href"))===e||o===t)return c
                  }
                })(n,
                o))return t();
                ((e,
                t,
                r,
                n,
                o)=>{
                  var c=document.createElement("link");
                  c.rel="stylesheet",
                  c.type="text/css",
                  a.nc&&(c.nonce=a.nc),
                  c.onerror=c.onload=r=>{
                    if(c.onerror=c.onload=null,
                    "load"===r.type)n();
                    else{
                      var a=r&&r.type,
                      d=r&&r.target&&r.target.href||t,
                      f=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+d+")");
                      f.name="ChunkLoadError",
                      f.code="CSS_CHUNK_LOAD_FAILED",
                      f.type=a,
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
            129:0
          };
          a.f.j=(t,
          r)=>{
            let n=a.o(e,
            t)?e[t]:void 0;
            if(0!==n)if(n)r.push(n[2]);
            else if(/^(1270|2874|3082|4017|5866|704|9653)$/.test(t))e[t]=0;
            else{
              const o=new Promise((r,
              o)=>n=e[t]=[r,
              o]);
              r.push(n[2]=o);
              const c=a.p+a.u(t),
              d=new Error,
              f=r=>{
                if(a.o(e,
                t)&&(n=e[t],
                0!==n&&(e[t]=void 0),
                n)){
                  const e=r&&("load"===r.type?"missing":r.type),
                  o=r&&r.target&&r.target.src;
                  d.message="Loading chunk "+t+" failed.\n("+e+": "+o+")",
                  d.name="ChunkLoadError",
                  d.type=e,
                  d.request=o,
                  d.event=r,
                  n[1](d)
                }
              };
              a.l(c,
              f,
              "chunk-"+t,
              t)
            }
          };
          const t=(t,
          r)=>{
            let[n,
            o,
            c]=r;
            var d,
            f,
            s=0;
            if(n.some(t=>0!==e[t])){
              for(d in o)a.o(o,
              d)&&(a.m[d]=o[d]);
              c&&c(a)
            }for(t&&t(r);
            s<n.length;
            s++)f=n[s],
            a.o(e,
            f)&&e[f]&&e[f][0](),
            e[f]=0
          },
          r=self.webpackChunk_rockstargames_sites_red_dead_online=self.webpackChunk_rockstargames_sites_red_dead_online||[];
          r.forEach(t.bind(null,
          0)),
          r.push=t.bind(null,
          r.push.bind(r))
        })(),
        a.nc=void 0,
        a(64769),
        a(82021)
      })())
    }
  }
});
//# sourceMappingURL=remote-entry.js.map