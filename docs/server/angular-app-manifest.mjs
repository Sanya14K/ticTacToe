
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ticTacToe/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ticTacToe"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1606, hash: 'a2f92bdb77331aebc5528ee41d3abb095deab222db8f4c3f2f21ec6e62eac433', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '435431426361beff4afd54c1d7fd91237e6cf45767b56ecf8b8aa27f250dd050', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4818, hash: '57708d54b5ac92c798fc60152eca8db3c5f1ae14677995d643645a5679f7f95f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SJIWKGM4.css': {size: 317889, hash: 'I1s2xwt++lU', text: () => import('./assets-chunks/styles-SJIWKGM4_css.mjs').then(m => m.default)}
  },
};
