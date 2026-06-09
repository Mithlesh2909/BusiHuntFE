
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 651, hash: '321861660526a4cbf009b4392589773a8fa6ed31066fc0c2d924e1c011b9f3dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 944, hash: '8ef8113c5f9364cb949aedae815eb4c8428347a7f6756c9f1bbc8132c69a812d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 767, hash: '92a2d9c6a02aadd2be3ef292f48f90d8273781f6bc0d9bd9a5d8aabf41639487', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 2715, hash: '94ec7cf7a040c13d72a534da77f37c8ae7bd56233e03d00368699702c047fb74', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3213, hash: 'f081cd59a1b8f880d590662a5e7b93869896345db0370c112675f1b93d3dcfec', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-GQUGHTFK.css': {size: 95, hash: 'h/mY61Sgm0k', text: () => import('./assets-chunks/styles-GQUGHTFK_css.mjs').then(m => m.default)}
  },
};
