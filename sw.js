/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2020/01/index.html","fc7db47afeb8470694e40c78d8535e05"],["/archives/2020/01/page/2/index.html","877e40f3fb6b36396533c1dcca89caab"],["/archives/2020/02/index.html","4111b4637794105f1ec2d9c7c51b282f"],["/archives/2020/02/page/2/index.html","21988e6f7109167830813a3625f53c96"],["/archives/2020/index.html","7089312565ece7a80aabdf03987edaf5"],["/archives/2020/page/2/index.html","4452630fe08ced99e7159e28b7ede3a3"],["/archives/2020/page/3/index.html","da018d5a6ca082f522788f1d3ef8d84c"],["/archives/index.html","1b0b53595d881ca9d5bf663fe10d0e8f"],["/archives/page/2/index.html","5a133590fe38f2b7977153cc3b2c7644"],["/archives/page/3/index.html","4a252671cd2fa956ba132abe7930d1a6"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/Idea/index.html","74e91e08581abd8683831deed4775349"],["/categories/Java-API/index.html","704bb28250bb6c068f4e76955af96285"],["/categories/Java相关组件/index.html","aac3a977fa15601ba02681e11cc4a84b"],["/categories/Java相关软件/index.html","e07c2b6ae389a153f2e5026c417673a6"],["/categories/Linus/index.html","5530942d37acd8f10f61991faa5c0c10"],["/categories/Nginx/index.html","96a664ba0246c574fdd5524bd73b5cfb"],["/categories/index.html","330063c3a0346e42fd498baa4584b557"],["/categories/mybatis/index.html","f51bbcb13008e10c61298ed2447b2901"],["/categories/phoneDevelepment/index.html","fb9bf8b8a0a34378b9ce38ed69f2680a"],["/categories/ssm/index.html","f3bd08c23cbce57c0bc7536561f2573f"],["/categories/thinks/index.html","66edc83a025a55ff9fa7e3900a5e255f"],["/categories/前端/index.html","a4b0090024997ce5a0c986bb83cfd8d7"],["/categories/数据库/index.html","ec0c708a49690a49cc946a195aa543aa"],["/categories/框架/index.html","0edf91a5330712142bd11fdea6da23c2"],["/categories/案例/index.html","e3fe3789962cb24b336047e8566581a9"],["/categories/项目/index.html","b0bc56f53d64e704a7341dc0bb4ad966"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","2ca6803f2d1963bdf466fbb4dd5d3fe8"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","418a402ddaeb29962b63a511492cf312"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/xingkong.jpg","26572652fe5c21564cb6f093cf1ab1d5"],["/index.html","46184f0e759d65b71600440da68a14d7"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ae5323574c619023aec5cb0dcc8253f7"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","43268d406021c3d7d29268f1011e8ffa"],["/js/src/algolia-search.js","1199bda1142c21822c63ded4c46bda98"],["/js/src/bootstrap.js","dd48d479b8b3a880e3365aba865f587f"],["/js/src/bubble.js","ccf73d434a8c02bceaeba26fff7caafb"],["/js/src/clipboard-use.js","76cdaef53408cec57d195ea83386bb8f"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","89ef041e7bfd55c2bca5c755438dbe2a"],["/js/src/exturl.js","c3a843a11ca4395f2b76000b7e119403"],["/js/src/hook-duoshuo.js","cc4fdda291c05642bc70591f11e27dc3"],["/js/src/instantclick.js","39ef15a3409816a63bd1e625e6a521b7"],["/js/src/js.cookie.js","e7badce27c728111bc519f8dbcab93ab"],["/js/src/linkcard.js","397e0c1fc53344f3fcabf15c38b77eff"],["/js/src/motion.js","5757a91081ccd6a433085500ee004a83"],["/js/src/post-details.js","eef440135ef40d392ddcec1742d67ea8"],["/js/src/schemes/pisces.js","b52d05f4a317af8f6c3c6f544b7cbc29"],["/js/src/scroll-cookie.js","ab3ba521138c0fa8bb605d24bc92f622"],["/js/src/scrollspy.js","7d6c931ec4bdf3cc22b000ce24096c7f"],["/js/src/utils.js","ecbff16db2063410723a032aeac6ee08"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","dde9ace9e98358c0dbda6a3efd2da5b5"],["/lib/Han/dist/han.js","c397bb324a283d5be501a336ba681f0e"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","f347884511e6e7f28c81fc8764bfeaf2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f977f7a22b1bbeceb51353eb0dc3a123"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","49c81110660af3ca06dc3fe3fa640f2e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a5c6985720688ed382393d75fefd4f84"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","dab81ede32b0ab5d9fe8040bdd46cf4e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","96a0f7b71f70c894e52f07e4f9c20a26"],["/lib/fancybox/source/jquery.fancybox.css","a30c113060a0a83a44ca2e592b0e5fa9"],["/lib/fancybox/source/jquery.fancybox.js","476297b8cc71757697bf41c2e9811e21"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f72eaabd241b39ab9319b6759d5a5657"],["/lib/fastclick/lib/fastclick.js","f5a0a7ff550f6b6478b5464b10167856"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","533f756ac2027b64a81dbc8b1b846fcd"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b6aa7379f59fb8fd8dd63f3e2292f08a"],["/lib/jquery_lazyload/README.html","f2d58a48a74bb8daf3715514a2b69b2c"],["/lib/jquery_lazyload/jquery.lazyload.js","dcda00c9040be3d7c0ea9e15db7b111b"],["/lib/jquery_lazyload/jquery.scrollstop.js","2b560d049f210daa0b8eac5bb6356fc2"],["/lib/needsharebutton/font-embedded.css","5a53d9b0ae2d24e501467639e99e33c4"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","93b50c7e0fa1fe10a0d643bf1aed68e8"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","924ee130ab8f7c64796df15e5b4d8727"],["/lib/velocity/velocity.js","02c83005f924e4087d293b647fb6c985"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","3ab74651a8f1b6b1a03692c181e621b1"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","3cd2eee0b75af6f3757cab3fe2d4f1d4"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","f1c6c020d6813303652e5ed73f19fc5b"],["/live2d-widget/demo/demo1.html","7d80ae73135f720766c204eb817bc431"],["/live2d-widget/demo/demo2.html","340ddd6917e90cb1b5eafe55187d96e6"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","e08593725844fa04417a0d2208a8f4e2"],["/page/2/index.html","a750ab9ecd7951ce4a19d6fb5f6a0aab"],["/page/3/index.html","4c6e09eaa5f3c63a6ad552e311c25a71"],["/post_files/img/sql语法里面没有自增一说.png","a64a8fba3e6cd8039a24ec0a97be6f18"],["/posts/1064844250.html","19d342e74960bb5c6971fdb266b9c356"],["/posts/1304579278.html","3f300f5d8600521fe72a1d50876bd63a"],["/posts/1368285564.html","aa8ee14b7c05a369bc65d3cea0c3b040"],["/posts/1387498655.html","7d002cc147a4afe2d756b2f4d6c7f47d"],["/posts/1461580057.html","dc8d9c3828de36ec97c7503be750503e"],["/posts/1547802368.html","35e49206b7a6dcad2121340a853f30a0"],["/posts/1603937355.html","b51425e03e2ca6cd94629e459a2e458e"],["/posts/1619914199.html","9dadaf9bc7e9136588b91bcd5c71d884"],["/posts/1654987719.html","00e1cf13095df84f388618c91fec5026"],["/posts/1718488190.html","200ba16a23589225ff6ee2d659502e4d"],["/posts/1749949894.html","4030454b4e3bf16f3903db9c0c07396f"],["/posts/190404840.html","8c73be14090cf395351fbac2844ed301"],["/posts/2049854560.html","0bcf85ff060413fecc54b879003b4a11"],["/posts/2066075671.html","abb6db32516d3b8b2394cbe4641c6285"],["/posts/2146942034.html","ad3bd07ffa5b99a10daec70fdcdfda79"],["/posts/2152316492.html","d2bc9ac1aec4626da6f80653d0277f00"],["/posts/238621802.html","efefcd784131bd22fd3501152ec47183"],["/posts/2797110814.html","8d0fd3d17fe35ef77bdb6e680b21a549"],["/posts/336011516.html","9267ea9d5bca0b45c36ab22f1353bf99"],["/posts/3661623328.html","b077483008e3a6eac106b7effdeae29a"],["/posts/376283487.html","a4814ff60304dd03e3651fcc5508dff4"],["/posts/3783559436.html","af809277193df8f2ebc1a55f5fa11acc"],["/posts/3930807984.html","a0fd85c295ef0ca0c476cb1d9b0e84c6"],["/posts/4265812449.html","d628cfb57c0a22d330cd7c3ddf19f8ce"],["/posts/896552296.html","ad7fb70d2d0fa6bb672564f7e9afc943"],["/posts/undefined.html","ac619ac23a94ba306d45108da622b7cd"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c1fd5fd5105f7c9acc33e940d3c931a3"],["/tags/Idea中使用git/index.html","b572c476985397389dacde6cb1c0e31d"],["/tags/Java相关组件/index.html","e4c7e48dc0743207ef15a8a17e91aa34"],["/tags/Linus环境下安装软件/index.html","8199fb5cf53b8fd3cb165825095fa206"],["/tags/POI/index.html","839813083ac57b20a967a0499dc1207e"],["/tags/echarts/index.html","e8f780b3075c62ff1967a205050472d0"],["/tags/git/index.html","18339b333972815dff28fd10d1be7912"],["/tags/git在Idea的使用/index.html","c3b66732ce41de6d60f9e0fde69e8cfc"],["/tags/index.html","15f0494e8f7d405d8ca89d90e7222807"],["/tags/mapper代理开发-ssm/index.html","73d211f50112b2fd66655c5e3f81df23"],["/tags/nginx功能/index.html","1c9935598728b6f425c4eec99344e925"],["/tags/redis/index.html","0b23ce13d3e3c207ce2945527b3e36ea"],["/tags/sourceTree使用教程/index.html","d09c79ac8be5c2552aa6ce85c43b74b0"],["/tags/springboot/index.html","37c6f95bae15e0ee793f2e9a61d7aae7"],["/tags/vue/index.html","78dce8a7ae39b1a1b4f3cf2c588648bd"],["/tags/传智健康/index.html","7d7d58d5f6c74b4d74880b799a5c56e2"],["/tags/商品CRUD/index.html","9df6493c494b1042bbe0448e29836c70"],["/tags/多表-关联查询/index.html","0b0298368c013ee5e832e6a139304cc6"],["/tags/大秦帝国/index.html","41be5abc59dc6798e637b08a2aa164ca"],["/tags/微信公众号开发/index.html","821ca68b82ae0ddec6eac13ce212933b"],["/tags/文件上传/index.html","060b1e96bd855953c45f991f909df65d"],["/tags/框架-分布式RPC/index.html","731a7cafc3cadf31508520e067550180"],["/tags/网上书城/index.html","262b55c04633d56a56ad8db15606256e"],["/tags/阿里云短信发送/index.html","d64474c6dcecac451a6611088aae5d10"],["/tags/项目-网上书店/index.html","a3c82771bccf3a4710f8a32ccbd66253"],["/timeline/index.html","fd530e70be761cf8c69cff028aa875d0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
