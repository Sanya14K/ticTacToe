
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
    'index.csr.html': {size: 503, hash: 'a1c49da11919643e386cc59feafc70bc51e32b671b84be07985f84a66aab7bde', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '4469686978ff6265ed5bbcc1e4ea4ad94d84de8bdcec3f9f6174a021b372328c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3425, hash: '8435df2b20fc84478effb745a88635c060ee6dddc047abe453bfbb75ded75c2f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
