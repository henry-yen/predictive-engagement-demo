function sendSearchEvent(event) {
    event.preventDefault(); // 防止頁面重新載入
    const keyword = document.getElementById("site-search").value.trim();

    if (!keyword) return;

    // 傳送到 Genesys Predictive Engagement
    if (window._genesysJs) {
      window._genesysJs("command", "Journey.sendCustomEvent", {
        eventName: "searchInput",
        customAttributes: {
          keyword: keyword
        }
      });
    }

    console.log("已送出搜尋字詞給 Genesys:", keyword);
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