function sendSearchEvent(event) {
  event.preventDefault();

  const form = event.target;
  const input = form.querySelector('input[type="text"]');

  if (!input) {
    console.warn("找不到 input 元素");
    return;
  }

  const keyword = input.value.trim();
  if (!keyword) return;

  if (typeof ac === "function") {
    ac('record', 'Search query', { query: keyword });
    console.log("已送出搜尋字詞給 Genesys Journey:", keyword);
  } else {
    console.warn("Genesys Journey SDK 尚未載入");
  }
}




        // 響應式導航選單
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    }

(function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.jp/genesys-bootstrap/genesys.min.js', {
    environment: 'prod-apne1',
    deploymentId: '55b977a6-5a9a-4548-b2bb-f7485763eb14'
  });