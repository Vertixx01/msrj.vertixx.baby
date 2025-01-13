var disqus_config = function () {
    this.page.url = 'https://msrj.vertixx.baby/new.html';
    this.page.identifier = 'index.html';
};
(function () {
    var d = document, s = d.createElement('script');
    s.src = 'https://msrj.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

AOS.init({
    duration: 1000,
    once: true,
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.back-to-top').style.display = 'block';
    } else {
        document.querySelector('.back-to-top').style.display = 'none';
    }
};

window.onscroll = function () {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
};

window.addEventListener('scroll', function () {
    const toc = document.querySelector('.floating-toc');
    if (window.scrollY > 200) {
        toc.classList.add('visible');
    } else {
        toc.classList.remove('visible');
    }
});

particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});

const text = document.body.innerText;
const wordCount = text.split(' ').length;
const readingTime = Math.ceil(wordCount / 200);
const readingTimeElement = document.createElement('div');
readingTimeElement.className = 'reading-time';
readingTimeElement.innerText = `Estimated reading time: ${readingTime} minute${readingTime > 1 ? 's' : ''}`;
document.querySelector('.container').insertBefore(readingTimeElement, document.querySelector('.content-section'));

document.querySelectorAll('p').forEach(p => {
    p.addEventListener('mouseup', function () {
        const selection = window.getSelection().toString();
        if (selection) {
            const span = document.createElement('span');
            span.className = 'highlight';
            span.innerText = selection;
            const range = window.getSelection().getRangeAt(0);
            range.deleteContents();
            range.insertNode(span);
        }
    });
});