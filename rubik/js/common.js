var cubeMap = {};

function parseParams (params) {
    var result = {};
    var pa = params.split(",");
    for (var i = 0; i < pa.length; i++) {
        var pi = pa[i].split("=");
        result[pi[0]] = pi[1];
    }
    return result;
}

function getParam(paramMap, key, def) {
    var result = def;
    if (paramMap[key]) {
        result = paramMap[key];
    }
    return result;
}

function modifyDom() {
    var nodes = document.getElementsByClassName('CedCube');
    var defaultStartString = "gggggggggrrrrrrrrrbbbbbbbbbooooooooowwwwwwwwwyyyyyyyyy";
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        console.log("element: " + node);
        var paramMap = parseParams(node.attributes['cc-params'].textContent);
        var width = parseInt(getParam(paramMap, 'width', '200'));
        var height = parseInt(getParam(paramMap, 'height', '150'));
        var startString = getParam(paramMap, "startString", defaultStartString);
        startString = startString.replace(new RegExp(" ", 'g'), "");
        var id = node.attributes.id.textContent;
        var cubeType = getParam(paramMap, "type");
        var cube;
        if (cubeType === "Cube") {
            cube = new Cube(width, height, startString, id);
        } else {
            cube = new TransparentCube(width, height, startString, id);
        }
        cubeMap[id] = cube;

        console.log("Created cube " + id + " " + cube.width + " " + cube.height);

//        function toFriendlyName(f) {
//            var result = "";
//            for (var i = 0; i < f.length; i++) {
//                var friendly = FACE_KEY_MAP[f.charAt(i)];
//                result = result + (friendly ? friendly : f.charAt(i));
//            }
//            return result;
//        }

        cube.runCube();

        var formula = getParam(paramMap, 'formula', null);
        if (formula) {
            var div = document.createElement("div");
            div.setAttribute("class", "cc-interface");
            div.setAttribute("style", "width:" + (width - 2));
            node.appendChild(div);

            {
                // Formula text
                var textDiv = document.createElement("div");
                textDiv.setAttribute("class", "cc-formula-text");
                textDiv.appendChild(document.createTextNode(formula));
                div.appendChild(textDiv);
            }

            function addLink(fun, name) {
                var a = document.createElement("a");
                a.setAttribute("class", "cc-link");
//                a.setAttribute("href", "");
                a.setAttribute("onclick", fun + "('" + id + "')");
                a.appendChild(document.createTextNode(name));
                div.appendChild(a);
            }

            if (cube.isAnimated) {
                addLink("playFormula", "Play");
                addLink("reset", "Reset");
            }
        }
    }
}

function animate() {
    var keys = Object.keys(cubeMap);
    for (var i = 0; i < keys.length; i++) {
        cubeMap[keys[i]].animate();
    }
    requestAnimationFrame(animate);
}

function run() {
    modifyDom();
    requestAnimationFrame(animate);
}
