// 1. 获取所有零件
const searchInput = document.getElementById('searchInput');
const posters = document.querySelectorAll('.poster');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const posterImages = document.querySelectorAll('.poster img');

// 2. 搜索逻辑 (对应你的搜索框)
searchInput.addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    posters.forEach(poster => {
        let imgTag = poster.querySelector('img');
        let filename = imgTag.getAttribute('src').toLowerCase();
        // 如果包含关键词就显示，否则隐藏
        poster.style.display = filename.includes(searchTerm) ? 'block' : 'none';
    });
});

// 3. 点击海报：显示弹窗
posterImages.forEach(img => {
    img.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightbox.classList.add('active'); // 加上 active 标签
    });
});

// 4. 点击叉号：关闭弹窗
closeBtn.addEventListener('click', function() {
    lightbox.classList.remove('active'); // 摘掉 active 标签
});

// 5. 点击背景：关闭弹窗 (点图片本身不会关闭)
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});