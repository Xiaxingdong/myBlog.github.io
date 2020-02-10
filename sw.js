/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2020/01/index.html","324013b802ec00cd0e64f7d40496d015"],["/archives/2020/01/page/2/index.html","51a7f94ef26b2d9408d85d15fff1424a"],["/archives/2020/02/index.html","24271e5c7ea2298c665935c698d0819d"],["/archives/2020/02/page/2/index.html","215387338b8629557d92eee37eed1d91"],["/archives/2020/index.html","4663025e539e73e9145664607ae27b9f"],["/archives/2020/page/2/index.html","66c933a3f82197d1f70b91f77b7a5e0d"],["/archives/2020/page/3/index.html","cff2fb0bb1808ea42dac12e62eee836f"],["/archives/index.html","e4bd7f14fce4d78596a9c18121e1aabb"],["/archives/page/2/index.html","30cbed8b4776482835b41632a7f21db4"],["/archives/page/3/index.html","bc4e59a8917f8f24b7c357f3e789d658"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/Idea/index.html","596a328f3cf4ce67dabc8b8d9efa8d5d"],["/categories/Java-API/index.html","b96b4ce66a097b2b9dcc57fc36133237"],["/categories/Java相关组件/index.html","983ac57a1b8da1589f05f59090614606"],["/categories/Java相关软件/index.html","f08e6f6fbfdd9c7e300a7f8b1f667c11"],["/categories/Linus/index.html","2ab87ff12d5a272b1b5c21a4656bb12b"],["/categories/Nginx/index.html","a167a167bc036e294fae88e2b02ee64b"],["/categories/index.html","3d717fdcecb39229c2ad6c8a4d9be91c"],["/categories/mybatis/index.html","2e816662c790378632264b66dcaf08e0"],["/categories/phoneDevelepment/index.html","3e3bc5704382387ddb6de33c3341aa24"],["/categories/ssm/index.html","bb3a7c8fb777be272d8de4d908867143"],["/categories/thinks/index.html","1a8ac3439ff7a8acc778f9f726231d84"],["/categories/前端/index.html","57e674db7a7edd2c5e42cee62cf118be"],["/categories/数据库/index.html","1438690f15fdbfea7a92d49282f687c6"],["/categories/框架/index.html","2b7e69b673f414caf35d9b60bb5c5bac"],["/categories/案例/index.html","22ee7a94d9f7ad94fb767b1fe8c6407c"],["/categories/项目/index.html","834ede2245e68e2ef1121be2eaa8df8d"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","94d635332bf0114d2ffa8d89f5050dff"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0f89deae15da3572fde32b6b4bb2940c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/xingkong.jpg","26572652fe5c21564cb6f093cf1ab1d5"],["/index.html","8084ed076b6ed843b6c19787076bcc54"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3bdd27175b5c2a07677d230f67ca145c"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","826bd321735fddc936f242ff5acd7f87"],["/js/src/algolia-search.js","df98c19bae1fd457d8d075608fb0cf9d"],["/js/src/bootstrap.js","17adc4167046ed02f9d6aee76dd692da"],["/js/src/bubble.js","0044067b422947ad417809d673c028f7"],["/js/src/clipboard-use.js","e563e05110a91caa2dffa361159bde27"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6984221661c8f485fa45883bdf8d330f"],["/js/src/exturl.js","36e7540684567961e65c66df602242a8"],["/js/src/hook-duoshuo.js","6540b0388495e40331d2b35bfcb49ab8"],["/js/src/instantclick.js","21fe680a22977abb9dafd7e74f3b888c"],["/js/src/js.cookie.js","2869720290cb428a17df56d2fd0dbfdd"],["/js/src/linkcard.js","65ae2f9dc1f0e23597e17bc3f1d128dc"],["/js/src/motion.js","ab70d1d38560d08b4fdaee26ba962366"],["/js/src/post-details.js","743f8dfbf20ba00d2a08598c8465ad92"],["/js/src/schemes/pisces.js","7cefe1debfb03ad346ba15a7a0065bf5"],["/js/src/scroll-cookie.js","73e9af859b890ba716c27e309ceed494"],["/js/src/scrollspy.js","6cdc3374cd2a51c7dbbd68c0d6ad56cf"],["/js/src/utils.js","7be0e2256b24cf0d2e43493e8d0c43e1"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","861aacf6e98e042b6d8dc8fe16756c9e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","41f1dbed245fef32152a05aa35aa1c9d"],["/lib/Han/dist/han.js","ab075162fe053ce6c316ba35451339e3"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","dd28beaf9a9ed4702d2fd2f7418e4f4c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","8232a4e3c15b93f0dc9a4868a426ed27"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","ae1c033dfc4414536dd1b0d3703e7fa2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f9d394b54e425318a424639179b3857f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d9ab0b48c56a0311e6e45c467e2810f8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d47f5cc4684be90f9e0077cc49ac4590"],["/lib/fancybox/source/jquery.fancybox.css","254ae75d5e7c15ce2e9559945a1caf9a"],["/lib/fancybox/source/jquery.fancybox.js","27581bf1e236061d71fd21a179270712"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f7c4bd64646bb6dff1be382f084cb366"],["/lib/fastclick/lib/fastclick.js","4a27b3e1aaf2e08c66a42512ab1118c6"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","6fbb9ec5f95d8d990c8e57ff82a1a376"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","26660511a9baee3f3eff94ca9a9301e7"],["/lib/jquery_lazyload/README.html","117685f71387067701e862a506dc3323"],["/lib/jquery_lazyload/jquery.lazyload.js","8480e8b4cb6c824f7ee725acd8cb129c"],["/lib/jquery_lazyload/jquery.scrollstop.js","45caba6ce74c29e7ff1cecc5ddb32b8e"],["/lib/needsharebutton/font-embedded.css","641e6d64b3e4a6b99f6d8e7be8082ee6"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6181e287b807e534c224e05974cd1fa7"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5f674828af834bb96fd5528246330c86"],["/lib/velocity/velocity.js","7cde8273fcf7abda8efcf8e43399f88c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","67373d9cdbc751fe7fe343aabb4a2780"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","83a930f64dddbd577faa858632674914"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","ca5c4f5c154e720483e389f70745e492"],["/live2d-widget/demo/demo1.html","e1b456f62019bbb3ef08b1ea4a3f600e"],["/live2d-widget/demo/demo2.html","c86c7e31486c96dc457c024b09aa3791"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","d118a6585429c292764871bad4e3435e"],["/page/2/index.html","98ebad14321af04d64c2272973157584"],["/page/3/index.html","9394bc2d65b726c69efdb61ff3cfbc5e"],["/post_files/img/sql语法里面没有自增一说.png","a64a8fba3e6cd8039a24ec0a97be6f18"],["/posts/1064844250.html","a3f6675090df0bbfad97fd75fe804508"],["/posts/1304579278.html","60caa89551c8a6fc62e249fa9294792c"],["/posts/1368285564.html","b8af9710efc8b9f08fd1b78e9167bf97"],["/posts/1387498655.html","0793fb8c734ac5e874a36b2774f862d0"],["/posts/1461580057.html","a71b7fc9f69e69404f9b38b4c627bfda"],["/posts/1547802368.html","349549125f0a166407c341b796ec7109"],["/posts/1603937355.html","639c9c76f2ae12f1a38460554f84f117"],["/posts/1619914199.html","7c88246577e4ca4d3cac6cc2177513f2"],["/posts/1654987719.html","887e06f56aced99bebde557ee3f0b577"],["/posts/1718488190.html","f4b5c99400b3de10c5b8372631b96082"],["/posts/1749949894.html","5558ab1dada48d68093798e1a611e819"],["/posts/190404840.html","895a2b9fbcb054551d90b0723b1363d5"],["/posts/2049854560.html","3a8fd966351071b40002885c608c2a52"],["/posts/2066075671.html","6b2e1d6b1f0a282170e2322e934ac2a2"],["/posts/2146942034.html","0821804879ab93da617c3447f26b503a"],["/posts/2152316492.html","9545a8c9378a1ffdd92c038a88a145c3"],["/posts/238621802.html","7df01cea447b5594e6adfd3163da7013"],["/posts/2797110814.html","03614f880ab6f69ddb2f25275870e6b7"],["/posts/336011516.html","21c841e8fe362619fd515d36c4362c13"],["/posts/3661623328.html","cb57f2ae8bbc37e742e1131e9edbd5c5"],["/posts/376283487.html","2f74ff90033c5bd0b1da6d7b9e1d4476"],["/posts/3783559436.html","43f36bc2d42cd0cf1a9dd911bc7bbe7d"],["/posts/3930807984.html","19369c04c47323ceb7761a3d9c511473"],["/posts/4265812449.html","0e062f4555668ec6e212e82813653410"],["/posts/896552296.html","f512f35a061194a7e23726b5b100cd5e"],["/posts/undefined.html","db8ba832a1fe176d8eb87da0484d22dc"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","296b234b70abfb0690c9cbb21a8e7d7c"],["/tags/Idea中使用git/index.html","6c6f432b03cd914d375e6e66451d6e9a"],["/tags/Java相关组件/index.html","c4b6a03d7a0c66e93b68475ac9fe0a84"],["/tags/Linus环境下安装软件/index.html","ea869ba8dbb71a6c19a0d515896533cb"],["/tags/POI/index.html","62301616e5111f6ac6dacf124819ef6a"],["/tags/Vue/index.html","35067f7efa41d74aaefd9a5279e68a09"],["/tags/echarts/index.html","bf5e0f4ffa5ebba240a529111d9aa383"],["/tags/git/index.html","3fc7108f52fcc638291633b8eeb7ec8d"],["/tags/git在Idea的使用/index.html","fb461205a9af77c8af3450114fdfb34c"],["/tags/index.html","6d4b61685362f0c38c921a717544a361"],["/tags/mapper代理开发-ssm/index.html","783268434e0239fe3954f1f792d45284"],["/tags/nginx功能/index.html","a7034afd910b3ae4c1ced9b557e8fda2"],["/tags/redis/index.html","51767cbecd39c173e0879735056af84b"],["/tags/sourceTree使用教程/index.html","9d4c866e4eca67145bbc1a5a3ace5871"],["/tags/springboot/index.html","58c80a84e52317f6e479fff9cda1e286"],["/tags/传智健康/index.html","bfdd4d9c4772e6e91b27c379634f7a43"],["/tags/商品CRUD/index.html","084b90500dad471773e2d6bac26f3616"],["/tags/多表-关联查询/index.html","ed18547a84dc5e25b8bfe34b678bc540"],["/tags/大秦帝国/index.html","a7acc89bacaf97336c92b7ba14c468a3"],["/tags/微信公众号开发/index.html","88d244727c94a33a62def17df5582749"],["/tags/文件上传/index.html","92fc586667d4d5b6bf900c9565acaf27"],["/tags/框架-分布式RPC/index.html","f9cc1a46b7c085d17f8fed05c74346d4"],["/tags/网上书城/index.html","0e8a48c85e8600769ba623b0aec4e19c"],["/tags/阿里云短信发送/index.html","1475e2834278d12a9b626e4e9953235c"],["/tags/项目-网上书店/index.html","672c389cb68f4a0852f3cff5dab63f53"],["/timeline/index.html","f2e63ecc8cc33ad371313bf08d48ba94"]];
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
