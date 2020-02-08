/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2020/01/index.html","c9361e3b0016c6a7f31122c4e86887a0"],["/archives/2020/01/page/2/index.html","fa21795d7ac990937d2a2c5f09473bd1"],["/archives/2020/02/index.html","097c38229ec0c1ac3d5b6925df375b6d"],["/archives/2020/02/page/2/index.html","842e37e86c18e6ab1f0c079ea98b42c8"],["/archives/2020/index.html","439106308491320595c1b6e6d9fe2f36"],["/archives/2020/page/2/index.html","54e004c1e5e54c701ea681c727923c6a"],["/archives/2020/page/3/index.html","037d5db5bcf6177f425ed89eeb997890"],["/archives/index.html","fa5c04a9e3bbd1c1ee617b5974911aa5"],["/archives/page/2/index.html","526c567b4dfdc4eead33ebce84b3ebb9"],["/archives/page/3/index.html","89ca83fc9fd07994764107224590a79c"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/Idea/index.html","44963f3190d11f8178cf863e98e16d64"],["/categories/Java-API/index.html","32d449e4561482f80d731c15624f74fc"],["/categories/Java相关组件/index.html","8495beecd464aa0476f85bea95d58c37"],["/categories/Java相关软件/index.html","ed2506a4aeb1db5342df23d56f517db6"],["/categories/Linus/index.html","7aee39dc6baba5934676885ddcb728b1"],["/categories/Nginx/index.html","f814f27fc995f0a76480e852c97f919b"],["/categories/index.html","0af18076b58c314523b20f220fd5f7af"],["/categories/mybatis/index.html","582d15fdb514c7f8dd5b0db84bcde684"],["/categories/phoneDevelepment/index.html","49aa0f3b6812e862e7f40f7a1db646ab"],["/categories/ssm/index.html","295bc9cefe1bcdeaf41af195ea2ffc7d"],["/categories/thinks/index.html","5e38fb031aefe1804774adcad13e9835"],["/categories/前端/index.html","4410479c627a92bab0b543a6d84a85e0"],["/categories/数据库/index.html","9604a7cf7982fc8fccdc0052984260b6"],["/categories/框架/index.html","a9959e664bf98aeb14ec806da1ce3264"],["/categories/案例/index.html","5a862f2597c643abfdd3363c1c96be07"],["/categories/项目/index.html","e3d785a4859b41489274ad81bfcc8a5c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","339d5e9be7948eea1345544650f60137"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","9ebb933cd6a3c3a940680711c37a7d5c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/xingkong.jpg","26572652fe5c21564cb6f093cf1ab1d5"],["/index.html","15b69d7eb3c09f5fe13c765712848f5a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f3a327221a863e8147156c9ddbc4797c"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2d7730d3eea21e42ff3d4f49591bb85b"],["/js/src/algolia-search.js","502b075233bce3849e3f4991cf1e675d"],["/js/src/bootstrap.js","50cb0710e5c5777f8d45473f9f58232a"],["/js/src/bubble.js","88a0bfccc5bd7a925843580cf70468fb"],["/js/src/clipboard-use.js","333decc38924db3c77ed86b8218e8098"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","01d8a253a8503e6eb6b500062131001c"],["/js/src/exturl.js","5db3c84fcc5b9f165107adef690d35ab"],["/js/src/hook-duoshuo.js","77fccb3dea2c5ea5834c3a3ef5a81faa"],["/js/src/instantclick.js","d8fa4bd97bc9b6d335480f32063e954d"],["/js/src/js.cookie.js","1cd31d66d8b5bdd262fa119fe80c8ab4"],["/js/src/linkcard.js","ab2e5ecd24a1434722a520dfa06e48a9"],["/js/src/motion.js","049691a15ecb4ce1b8bf753bd56e8318"],["/js/src/post-details.js","eb23fdea12790c53b55f17ff84f6350b"],["/js/src/schemes/pisces.js","29cc099f336a4d65f89b3a58fa889f22"],["/js/src/scroll-cookie.js","62d223ed28b8259c5bd159d3a52a132b"],["/js/src/scrollspy.js","8a145af3a75bfd68f50db3f501b9589b"],["/js/src/utils.js","e526379c900b45beba5d1f93715c9c75"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","171f22d1a9e138822c57ff9c02e0342b"],["/lib/Han/dist/han.js","5d377890686814331060922d91f075ae"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","f13798de8cd334402d807c8f5a1f84e5"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ec30e78367c28a215525b43de5bb5a23"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ac6b0593b9d1891ec9807c6ed4b71407"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","8b3380b28a447330301ee2266dc18336"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","506f152f3dd27e9d7e0e484df7907747"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4b5173284e125af89174c47655d55695"],["/lib/fancybox/source/jquery.fancybox.css","a66abee9c0d6bf4dc5705675a20a89a3"],["/lib/fancybox/source/jquery.fancybox.js","37f38989c0595bdb525e3aac12be84e4"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3ae922f63e180ef569b6238fc8c5f079"],["/lib/fastclick/lib/fastclick.js","406d5ef0b2930f77f49babc1e248be05"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a9b62121c2f03ad2936ca6bb3ed3b886"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","fa152565aea660120bfc4e8c597aeb4f"],["/lib/jquery_lazyload/README.html","3bff52f556c8c7dfd77dbc4a65ed8f26"],["/lib/jquery_lazyload/jquery.lazyload.js","8c0975845d5cb8037382559f284c77d7"],["/lib/jquery_lazyload/jquery.scrollstop.js","d537402fd5b3b8f6fc22e349b2c37672"],["/lib/needsharebutton/font-embedded.css","f2e4afe38b5772bbffc23046de29740c"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","5568dafdff9a0122976c5ba030fa9033"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3d4f2f0aaa08d42c08b2b1114072b031"],["/lib/velocity/velocity.js","2715633a43b8c39c0b0a916e2d34657f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","d5c4865c4afcccb40cb89c0c15928494"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","e02a3a7d08513e9ff1ecc214f511b1b2"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d03cd45b6ccdfb61625174bf249b79b7"],["/live2d-widget/demo/demo1.html","ed1f3a3d572658e4f9267670d4783916"],["/live2d-widget/demo/demo2.html","cfb0b427cf799056a2743cbae17f2843"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","7792af2becf42d5fb7b8c7b768380117"],["/page/2/index.html","d5172fc38509163591724ba68c6b35af"],["/page/3/index.html","456f117e40e1b5977ed970ac90bd1743"],["/posts/1064844250.html","78f4214a63c9328de0b3d035d05d2938"],["/posts/1304579278.html","318bae6ffba073e7f6fb47aff6abdb6a"],["/posts/1368285564.html","cc30fc8ccbd5af6d6e25a2ac749946ed"],["/posts/1387498655.html","3249b3f6fbb64b95deab5a375ff1e8dd"],["/posts/1461580057.html","ecc1de80a65fd3415ecc22012e7fcff1"],["/posts/1547802368.html","3f375ee6aa5c607cadc56ca0337d2d4c"],["/posts/1603937355.html","7ea1b9ad69db084457d60dff9a6ca6e0"],["/posts/1619914199.html","2950a7720686ff5215441518669302ae"],["/posts/1654987719.html","767a7143dc2e821138297d12afd08a56"],["/posts/1718488190.html","39d8a9b7cd1033e85121ede3928aaf9a"],["/posts/1749949894.html","90d777ff04ebabedd8db4ffd01c685e6"],["/posts/190404840.html","bbbc7dfe9ea7f16ce9b53976777c8984"],["/posts/2049854560.html","43817c0dcfc9a06fba258e4f39dcda15"],["/posts/2066075671.html","225cc23ad62e1ce4c3d60165b2523e60"],["/posts/2146942034.html","77191cc8ac0502cc8ea2734cf9676cfa"],["/posts/2152316492.html","48c0d0d4f7bb63a26640e4726647d354"],["/posts/238621802.html","67e0823403f5402f093aa2f55c5f3698"],["/posts/2797110814.html","edbf27f9a2c915f6d805dfebfd6aa859"],["/posts/336011516.html","72948cdaf1895f97e3d4fb0d1f655261"],["/posts/3661623328.html","2cab048fffe48ae19d81b908329082e9"],["/posts/376283487.html","0be869bb26777253fc95af45c56a44cf"],["/posts/3783559436.html","76441b53cb6cef60ad0206776bb1a24e"],["/posts/3930807984.html","8f9e6ea555cff837ba08e7eb72e907af"],["/posts/4265812449.html","a73569246ee89b98b6b02f410b4fa277"],["/posts/896552296.html","b6350c3a43cf65dfe65e3a1b104f0b81"],["/posts/undefined.html","f0925f57097f65a12ab9d4646ee820ce"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c32133135afaf56561ebe24924113a95"],["/tags/Idea中使用git/index.html","1a77578d7ac5503245106e2614ed6bff"],["/tags/Java相关组件/index.html","936423e7ca503a6df45250460254bec6"],["/tags/Linus环境下安装软件/index.html","97958636e41b883e75fa40c279f6a685"],["/tags/POI/index.html","4781317c5a87d7c401900dd9c2363c51"],["/tags/Vue/index.html","2cf0d764a9c7db62e951c73dddb4b2aa"],["/tags/echarts/index.html","0d11d5985be3070e9a2c4894088f7047"],["/tags/git/index.html","eaf1d78e849f165403d55b7b9bcbeae1"],["/tags/git在Idea的使用/index.html","559da94f2b43086e16f1e4b945f9211e"],["/tags/index.html","e8666adf779b2f8fa3f7907123f86db5"],["/tags/mapper代理开发-ssm/index.html","93a8869be8177e9acac00ea0f769421d"],["/tags/nginx功能/index.html","5f5ed15fcd145cd90c3f1c2fa33aad71"],["/tags/redis/index.html","c65ec68251bf1f243dbb75e4d3161ff5"],["/tags/sourceTree使用教程/index.html","f2377c12b4d3800843e07861df19600e"],["/tags/springboot/index.html","08b727f76d04df417b73630d545435f1"],["/tags/传智健康/index.html","19bad8b4f231ba8f088619fbe368393a"],["/tags/商品CRUD/index.html","1b97b6007e88c8eacd7034dade91581e"],["/tags/多表-关联查询/index.html","0ddd25e040a89a047e054ca01229864f"],["/tags/大秦帝国/index.html","b163eee8ca993936e3d5806cf7a304be"],["/tags/微信公众号开发/index.html","1ce211bf8c285112cedd455fd4aa3b33"],["/tags/文件上传/index.html","239473263d046d3a4f4ea1d342ab6146"],["/tags/框架-分布式RPC/index.html","57fe6d857d6843eca27b0a3170fc3081"],["/tags/网上书城/index.html","672b50246bb290481856261b773ab945"],["/tags/阿里云短信发送/index.html","014c5cc6f592ebb815cf1c6bf2eff9b4"],["/tags/项目-网上书店/index.html","f34ad69b9c39523389acd403b7904f80"],["/timeline/index.html","16b848289ef93626949c8099dd5b2bad"]];
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
