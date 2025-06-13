function sendSearchEvent(event) {
  event.preventDefault();

  const form = event.target;
  const input = form.querySelector('input[type="text"]');
  if (!input) return;

  const keyword = input.value.trim();
  if (!keyword) return;

  if (typeof ac === "function") {
    // 發送預設 Search query 事件（會觸發 Segments）
    // ac('record', 'Search query', {
    //   query: keyword
    // });

    // 發送自定義事件（可用於追蹤使用者意圖、建立 trigger、dashboard 分析）
    ac('record', 'searchInput', {
      keyword: keyword
    });

    console.log("✅ 已送出：searchInput", keyword);
  } else {
    console.warn("⚠️ Genesys Journey SDK 尚未載入");
  }
}


//導航選單
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    }
