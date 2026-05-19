// 「.menu-triger」クラスがついた部品を探す
const trigger = document.querySelector('.menu-trigger');
const menu = document.querySelector('.menu-card');

// ボタンクリックで開閉（.active クラスのつけ外し）
trigger.addEventListener('click', () => {
    trigger.classList.toggle('active');
    menu.classList.toggle('active');
})

// リンクをクリックしたら自動でメニューを閉じる
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        trigger.classList.remove('active');
        menu.classList.remove('active');
    })
})