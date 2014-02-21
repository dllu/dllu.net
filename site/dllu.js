// dllu.js by dllu
// You are free to copy this code without attribution, but this is very bad code. Use at your own risk.
// I am not responsible for any grievous injury or disease sustained by viewing this code.

window.onload = function() {
    recolorblog();
    window.setInterval(recolorblog,4000);
    if(window.location.hash.length > 2) {
        var path = window.location.hash.split('#')[1];
        window.location = window.location.origin + '/' + path;
    }
    resizeblog();
    document.getElementById('switcher').onclick = function() {
        var switcher = document.getElementById('switcher');
        var portfolio = document.getElementsByClassName('portfolio');
        if(switcher.className === 'list') {
            switcher.className = '';
            for(var i=0, _i = portfolio.length; i<_i; i++) {
                portfolio[i].className = 'portfolio';
            }
        } else {
            switcher.className = 'list';
            for(var i=0, _i = portfolio.length; i<_i; i++) {
                portfolio[i].className = 'portfolio list';
            }
        }
    }
};

window.onresize = resizeblog = function() {
    var bloglist = document.getElementById('bloglist'), blogpost = document.getElementById('blogpost');
    if(bloglist && blogpost) {
        bloglist.style['height'] = null;
        blogpost.style['height'] = null;
        var h = Math.max(bloglist.offsetHeight, blogpost.offsetHeight)+1;
        bloglist.style['height'] = h + 'px';
        blogpost.style['height'] = (h - 51) + 'px';
    }
}

recolorblog = function() {
    // console.log('coloring...');
    blogposts = document.getElementsByClassName('text');
    for(var i=0, _i=blogposts.length; i<_i; i++) {
        blogposts[i].style['background-color'] = 'rgb('+~~(Math.random()*25+200)+','+~~(Math.random()*25+200)+','+~~(Math.random()*50+200)+')';
    }
}
