
    /**
     * 该文件有模板生成，不要手动修改文件，具体查看scipts/updateIcon/processCss
     */
    import { createGlobalStyle } from 'styled-components'

    const StyledIcon = createGlobalStyle`
      @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1236545_xgsazuemfwn.eot?t=1564725850870'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1236545_xgsazuemfwn.eot?t=1564725850870#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1236545_xgsazuemfwn.woff?t=1564725850870') format('woff'),
  url('//at.alicdn.com/t/font_1236545_xgsazuemfwn.ttf?t=1564725850870') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1236545_xgsazuemfwn.svg?t=1564725850870#iconfont') format('svg'); /* iOS 4.1- */
}

.hmly-icon {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.hmly-icon-close:before {
  content: "\\e648";
}

.hmly-icon-down:before {
  content: "\\e649";
}

.hmly-icon-right:before {
  content: "\\e64a";
}

.hmly-icon-left:before {
  content: "\\e64b";
}

.hmly-icon-up:before {
  content: "\\e64c";
}

.hmly-icon-instagram:before {
  content: "\\e64d";
}

.hmly-icon-twitter:before {
  content: "\\e64e";
}

.hmly-icon-facebook:before {
  content: "\\e64f";
}

.hmly-icon-locked:before {
  content: "\\e650";
}

.hmly-icon-unlocked:before {
  content: "\\e651";
}

.hmly-icon-volume-low:before {
  content: "\\e652";
}

.hmly-icon-volume-high:before {
  content: "\\e653";
}

.hmly-icon-volume-muted:before {
  content: "\\e654";
}

.hmly-icon-loop-list:before {
  content: "\\e655";
}

.hmly-icon-loop-single:before {
  content: "\\e656";
}

.hmly-icon-shuffle:before {
  content: "\\e657";
}

.hmly-icon-question:before {
  content: "\\e658";
}

.hmly-icon-pause:before {
  content: "\\e659";
}

.hmly-icon-player-next:before {
  content: "\\e65a";
}

.hmly-icon-play:before {
  content: "\\e65b";
}

.hmly-icon-player-prev:before {
  content: "\\e65c";
}

.hmly-icon-sort-down:before {
  content: "\\e65d";
}

.hmly-icon-playlist:before {
  content: "\\e65e";
}

.hmly-icon-sort-up:before {
  content: "\\e65f";
}

.hmly-icon-share:before {
  content: "\\e660";
}

.hmly-icon-liked:before {
  content: "\\e661";
}

.hmly-icon-like:before {
  content: "\\e662";
}

.hmly-icon-visible:before {
  content: "\\e663";
}

.hmly-icon-invisible:before {
  content: "\\e664";
}

.hmly-icon-drag:before {
  content: "\\e665";
}

.hmly-icon-drag-mouse:before {
  content: "\\e666";
}

.hmly-icon-upload:before {
  content: "\\e667";
}

.hmly-icon-enter:before {
  content: "\\e668";
}

.hmly-icon-edit:before {
  content: "\\e669";
}

.hmly-icon-download:before {
  content: "\\e66a";
}

.hmly-icon-stats:before {
  content: "\\e66b";
}

.hmly-icon-delete:before {
  content: "\\e66c";
}

.hmly-icon-more:before {
  content: "\\e66d";
}

.hmly-icon-filter:before {
  content: "\\e66e";
}

.hmly-icon-people:before {
  content: "\\e66f";
}

.hmly-icon-disc:before {
  content: "\\e670";
}

.hmly-icon-forward:before {
  content: "\\e671";
}

.hmly-icon-backward:before {
  content: "\\e672";
}

.hmly-icon-decrease:before {
  content: "\\e673";
}

.hmly-icon-increase:before {
  content: "\\e674";
}

.hmly-icon-search:before {
  content: "\\e675";
}


    `;

    export { StyledIcon }
    