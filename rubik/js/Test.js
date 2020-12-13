/**
 * Created by cedricbeust on 2/19/17.
 */
var camera, scene, renderer, geometry, mesh, controls;
var group;
var cubitSize = 90;

init();
animate();

function createPlane(x, y, z, color) {
    var geometry = new THREE.PlaneGeometry( cubitSize, cubitSize );
    var material = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide
    });
    var result = new THREE.Mesh( geometry, material );
    result.position.x = x;
    result.position.y = y;
    result.position.z = z;

    return result;
}

function createCubit(config) {
    group = new THREE.Object3D();


    if (config.left) {
        var left = createPlane(-cubitSize / 2, 0, 0, config.left);
        left.rotation.y = Math.PI / 2;
        group.add(left);
    }
    if (config.right) {
        var right = createPlane(cubitSize / 2, 0, 0, config.right);
        right.rotation.y = Math.PI / 2;
        group.add(right);
    }
    if (config.back) {
        group.add(createPlane(0, 0, -cubitSize/2, config.back));
    }
    if (config.front) {
        group.add(createPlane(0, 0, cubitSize/2, config.front));
    }
    if (config.bottom) {
        var front = createPlane(0, -cubitSize / 2, 0, config.bottom);
        front.rotation.x = Math.PI / 2;
        group.add(front);
    }
    if (config.top) {
        var ttop = createPlane(0, cubitSize / 2, 0, config.top);
        ttop.rotation.x = Math.PI / 2;
        group.add(ttop);
    }

    return group;
}

function init() {

    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight);
    // camera.position.set(100, -800, 400);
    // camera.rotation.x = 45 * ( Math.PI / 180 );
    // camera.position.x = 200;
    camera.position.x = 600;
    camera.position.y = 600;
    camera.position.z = 1500;
    // camera.position.set(100, -400, 100);
    scene.add(camera);

    // The X axis is red. The Y axis is green. The Z axis is blue.
    scene.add(new THREE.AxisHelper(500));

    // var s = "..gggggggooooooooobbbbbbbbbrrrrrrrrryyyyyyyyywwwwwwwww";
    var s = "....bbrb....rrr.rrXXXggggggXXXooXoob.........wwXwwwwww";

    var mapping = [
        { x: -1, y: 1, z: 1, front: 0, top: 42, left: 29 },
        { x: 0, y: 1, z: 1, front: 1, top: 43 },
        { x: 1, y: 1, z: 1, front: 2, top: 44, right: 9 },

        { x: -1, y: 0, z: 1, front: 3, left: 32 },
        { x: 0, y: 0, z: 1, front: 4 },
        { x: 1, y: 0, z: 1, front: 5, right: 12 },

        { x: -1, y: -1, z: 1, front: 6, bottom: 45, left: 35 },
        { x: 0, y: -1, z: 1, front: 7, bottom: 46 },
        { x: 1, y: -1, z: 1, front: 8, bottom: 47, right: 15 },

        { x: -1, y: 1, z: 0, left: 28, top: 39 },
        { x: 0, y: 1, z: 0, top: 40 },
        { x: 1, y: 1, z: 0, right: 10, top: 41 },

        { x: -1, y: 0, z: 0, left: 31 },
        { x: 1, y: 0, z: 0, right: 13 },

        { x: -1, y: -1, z: 0, left: 34, bottom: 48 },
        { x: 0, y: -1, z: 0, bottom: 49 },
        { x: 1, y: -1, z: 0, right: 16, bottom: 50 },

        { x: -1, y: 1, z: -1, top: 36, left: 27, back: 20 },
        { x: 0, y: 1, z: -1, top: 37, back: 19 },
        { x: 1, y: 1, z: -1, top: 38, right: 11, back: 18 },

        { x: -1, y: 0, z: -1, left: 30, back: 23 },
        { x: 0, y: 0, z: -1, back: 22 },
        { x: 1, y: 0, z: -1, right: 14, back: 21 },

        { x: -1, y: -1, z: -1, left: 33, back: 26, bottom: 51 },
        { x: 0, y: -1, z: -1, back: 25, bottom: 51 },
        { x: 1, y: -1, z: -1, right: 17, back: 24, bottom: 52 }

    ];
    var colorMapping = {
        "g": "green",
        "b": "blue",
        "r": "red",
        "o": "orange",
        "w": "white",
        "y": "yellow",
        "X": "grey"
    };

    var SIDES = [ "front", "right", "back", "left", "top", "bottom"];
    for (var i = 0; i < mapping.length; i++) {
        var m = mapping[i];
        var config = {};
        for (var j = 0; j < SIDES.length; j++) {
            if (m[SIDES[j]] != null) {
                var colorIndex = m[SIDES[j]];
                var colorChar = s.charAt(colorIndex);
                config[SIDES[j]] = colorMapping[colorChar];
            }
        }
        console.log("M: " + m);
        var cubit = createCubit(config);
        cubit.position.x += 100 * m.x;
        cubit.position.y += 100 * m.y;
        cubit.position.z += 100 * m.z;
        scene.add(cubit);
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}


function render() {
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.02;

    // group.rotation.x -= 0.05;
    // group.rotation.y -= 0.05;
    // camera.rotation.x += 0.2;
    controls.update();

    renderer.render(scene, camera);
}