//
// Nav bar
//

var title = "Kobalt, by Cedric Beust"

var content = [
  {
    url: "../home/index.html",
    title: "Home"
  },
  {
    url: "../getting-started/index.html",
    title: "Getting Started"
  },
  {
    url: "../idea-plug-in/index.html",
    title: "IDEA plug-in"
  },
  {
    url: "../documentation/index.html",
    title: "Documentation"
  },
  {
    url: "../plug-ins/index.html",
    title: "Plug-ins"
  },
  {
    url: "../plug-in-development/index.html",
    title: "Writing a Kobalt plug-in"
  },
  {
    url: "../contributing/index.html",
    title: "Contribute"
  }

];

var before = '<div class="container-fluid">'
  + '  <div class="navbar-header">'
  + '    <a class="navbar-brand">Kobalt</a>'
  + '  </div>'
  + '  <div id="navbar" class="navbar-collapse collapse">'
  + '    <ul class="nav navbar-nav">'
  ;

var after = '</ul>'
  + '   </div><!--/.nav-collapse -->'
  + '  </div><!--/.container-fluid -->'
  + '</nav>'
  ;

function generateNavBar() {
  var result = before;
  for (var i = 0; i < content.length; i++) {
    var cls = "";
    var c = content[i];
    var cleanUrl = c.url.replace("../", "")
    if (window.location.href.indexOf(cleanUrl) > -1) {
      cls = 'class="active"';
    }
    result += '<li ' + cls + '><a href="' + c.url + '">' + c.title + '</a></li>';
  }
  result += after;


  var navBarElement = document.getElementById("kobalt-navbar");
  navBarElement.innerHTML = result;
}

//
// Table of contents
//

function indent(n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += "&nbsp;&nbsp;&nbsp;&nbsp;"
    }
    return result;
}

function generateToc() {
    var sections = document.getElementsByClassName("section");

    var toc = '';//<ul class="nav">\n';
    var counters = new Array();
    var currentLevel = -1;
    for (i = 0; i < sections.length; i++) {
        var section = sections[i];
        var nameNode = section.attributes["name"];
        var name = nameNode ? nameNode.nodeValue : i;
        var ind = 0;
        var indentAttribute = section.attributes["indent"];
        if (indentAttribute) {
            ind = indentAttribute.textContent;
        }
        if (! ind) ind = 0;
        var content = indent(ind) + section.innerHTML;
        //if (ind > currentLevel) {
        //    if (ind == 0) {
        //        toc += '<ul class="nav">\n';
        //    } else {
        //        toc += '<ul>\n';
        //    }
        //} else if (ind < currentLevel) {
        //    toc += '</ul>\n';
        //}
        toc += '<div class="toc-item toc-item-' + ind + '"><a href="#' + section.id + '">' + content + '</a></div>\n';
        currentLevel = ind;
    }
    toc += "</ul>\n";

    var tocId = "table-of-contents";
    var tocTag = document.getElementById(tocId);
    
    if (tocTag) {
        tocTag.innerHTML = toc;
    } else {
        console.log("Couldn't find an id " + tocId);
    }

}

function setTitle() {
    document.getElementsByTagName("title")[0].innerHTML = title;
}

function generateLink(href) {
    var link = document.createElement('link');
    link.href = href;
    link.rel = "stylesheet";
    return link;
}

function generateScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.type = "text/javascript";
    return script;
}

var LINKS = [
    "../bootstrap/dist/css/bootstrap.min.css",
    "../sh/styles/shCore.css",
    "../css/kobalt.css"
];

var SCRIPTS = [
    "../sh/scripts/shCore.js",
    "../sh/scripts/shBrushJScript.js",
    "../sh/scripts/shBrushJava.js",
    "../sh/scripts/shBrushPlain.js"
];

function generateHead() {
    var head = document.getElementsByTagName("head")[0];
    for (var i = 0; i < LINKS.length; i++) {
        head.appendChild(generateLink(LINKS[i]));
    }
    //for (var i = 0; i < SCRIPTS.length; i++) {
    //    head.appendChild(generateScript(SCRIPTS[i]));
    //}
    ////document.onload = function () { SyntaxHighlighter.all(); };
    //var script = document.createElement('script');
    //script.innerHTML =
    //    "SyntaxHighlighter.defaults['gutter'] = false;\n" +
    //    "SyntaxHighlighter.defaults['toolbar'] = false;\n" +
    //    "SyntaxHighlighter.all();\n";
    //var body = document.getElementsByTagName("body")[0];
    //body.appendChild(script);

}

function generateKobalt(index) {
//    setTitle();
    generateHead();
    generateToc();
    generateNavBar(index);
}
