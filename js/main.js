// GitHub Pages Demo - 脚本文件

document.addEventListener('DOMContentLoaded', function() {
    // 显示当前时间
    updateDateTime();
    
    // 每秒更新时间
    setInterval(updateDateTime, 1000);
    
    // 添加欢迎消息
    console.log('🎉 欢迎来到 GitHub Pages Demo!');
    console.log('📅 页面加载时间:', new Date().toLocaleString('zh-CN'));
    
    // 添加简单的交互效果
    addInteractiveEffects();
});

function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = new Date().toLocaleString('zh-CN');
    }
}

function addInteractiveEffects() {
    const container = document.querySelector('.container');
    
    // 鼠标移动时的视差效果
    document.addEventListener('mousemove', function(e) {
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;
        
        if (container) {
            container.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
    
    // 点击徽章时的反馈
    const badge = document.querySelector('.badge');
    if (badge) {
        badge.addEventListener('click', function() {
            alert('🎉 GitHub Pages 是免费的静态网站托管服务！');
        });
    }
}