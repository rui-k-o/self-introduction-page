// 「.menu-triger」の発動
document.addEventListener('DOMContentLoaded', () => {
    console.log("JS読み込みOK");

    const trigger = document.getElementById('menuTrigger');
    const menu = document.getElementById('menuCard');

    if (!trigger || !menu) {
        return;
    }

    // ボタンクリックで開閉（.active クラスのつけ外し）
    trigger.addEventListener('click', () => {
        trigger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // リンクをクリックしたら自動でメニューを閉じる
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            trigger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});


// portfolio画像ポップアップ
document.addEventListener('DOMContentLoaded', () => {
    console.log("JS読み込みOK");

    const popup = document.getElementById('popupOverlay');
    const popupImg = document.getElementById('popupImage');

    // ページ内にある「data-image」を持ったすべての画像を監視
    const targetImages = document.querySelectorAll('img[data-image]');

    // ポップアップ要素がないページでは処理しない
    if (!popup || !popupImg) {
        return;
    }

    targetImages.forEach(image => {
        image.addEventListener('click', () => {

            console.log('クリック');

            // クリックされた画像のdata-imageに書かれたパスを取得
            const largeImagePath = image.getAttribute('data-image');
            console.log(largeImagePath);

            if (largeImagePath) {
                popupImg.src = largeImagePath;
                popup.classList.add('active');
            }
        });
    });

    // 背景クリックで閉じる処理
    popup.addEventListener('click', () => {
        popup.classList.remove('active');
        popupImg.src = "";
    });

});