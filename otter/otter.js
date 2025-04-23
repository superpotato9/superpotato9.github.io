function dvd() {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'dvd.css';
    document.head.appendChild(css); // CSS goes in <head>

    // Add JS
    const script = document.createElement('script');
    script.src = 'dvd.js';
    document.body.appendChild(script);
}
function tile() {


    // Add JS
    const script = document.createElement('script');
    script.src = 'tile.js';
    document.body.appendChild(script);

    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'tile.css';
    document.head.appendChild(css);
}
dvd();