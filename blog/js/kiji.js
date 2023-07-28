const categoryMenu = document.querySelector('#category-menu');
const contactLink = document.querySelector('#contact-link');
const contactModal = document.querySelector('#contact-modal');
const contactForm = document.querySelector('#contact-form');
const submenu = document.querySelector('.submenu');
let isSubMenuVisible = false; // 選択肢が表示されているかのフラグ
let submenuTimer; // タイマー

// カテゴリーメニューがホバーされたときの処理
categoryMenu.addEventListener('mouseenter', function() {
    // 選択肢を表示
    submenu.style.display = 'flex';
    isSubMenuVisible = true;
});

// カテゴリーメニューからマウスが離れたときの処理
categoryMenu.addEventListener('mouseleave', function(e) {
    // マウスがカテゴリーメニューまたは選択肢の上にあるかをチェック
    const isHovering = isMouseHovering(e, categoryMenu) || isMouseHovering(e, submenu);

    if (!isHovering) {
        // タイマーを開始
        submenuTimer = setTimeout(function() {
            // 選択肢を非表示
            submenu.style.display = 'none';
            isSubMenuVisible = false;
        }, 2000);
    } else {
        // タイマーをクリア
        clearTimeout(submenuTimer);
    }
});

// 選択肢内からマウスが離れたときの処理
submenu.addEventListener('mouseleave', function() {
    // 選択肢を非表示
    submenu.style.display = 'none';
    isSubMenuVisible = false;
});

// マウスが要素の上にあるかを判定する関数
function isMouseHovering(event, element) {
    const { clientX, clientY } = event;
    const { top, left, right, bottom } = element.getBoundingClientRect();
    return clientX >= left && clientX <= right && clientY >= top && clientY <= bottom;
}

// お問い合わせリンクがクリックされたときの処理
contactLink.addEventListener('click', function() {
    // お問い合わせフォームを表示
    contactModal.style.display = 'block';
});

// モーダルの閉じるボタンがクリックされたときの処理
contactModal.querySelector('.close').addEventListener('click', function() {
    // お問い合わせフォームを非表示
    contactModal.style.display = 'none';
});

// フォームの送信処理
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // フォームのデフォルトの送信を防止

    // 入力値を取得
    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#message').value;

    // 入力値のバリデーション
    if (message.length < 20) {
        alert('お問い合わせ内容は20文字以上で入力してください。');
        return;
    }

    // フォームの送信処理を実行（ここでは仮の処理としてコンソールに表示）
    console.log('お名前:', name);
    console.log('メールアドレス:', email);
    console.log('お問い合わせ内容:', message);

    // フォームの送信後に必要な処理を追加してください（例：サーバーへの送信、ありがとうございましたの表示など）
});

// ボタンをクリックしたらページのトップにスクロールする関数
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // スムーズにスクロール
    });
}

window.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('aside ul li');
    listItems.forEach(function(item) {
      const bulletPoint = document.createElement('span');
      bulletPoint.classList.add('bullet-point');
      const bulletImage = document.createElement('img');
      bulletImage.src = 'ten.jpg'; // 画像のパス
      bulletImage.alt = '中点'; // 画像のaltテキスト
      bulletPoint.appendChild(bulletImage);
      item.insertBefore(bulletPoint, item.firstChild);
    });
  });
  