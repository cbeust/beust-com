/**
 * Created by cedricbeust on 2/19/17.
 */
var cubitSize = 90;

TransparentCube = function(passedWidth, passedHeight, startString, nodeId) {
    this.width = passedWidth;
    this.height = passedHeight;

    this.isAnimated = false;

    var mapping = [
        {x: -1, y: 1, z: 1, front: 0, top: 42, left: 29},
        {x: 0, y: 1, z: 1, front: 1, top: 43},
        {x: 1, y: 1, z: 1, front: 2, top: 44, right: 9},

        {x: -1, y: 0, z: 1, front: 3, left: 32},
        {x: 0, y: 0, z: 1, front: 4},
        {x: 1, y: 0, z: 1, front: 5, right: 12},

        {x: -1, y: -1, z: 1, front: 6, bottom: 45, left: 35},
        {x: 0, y: -1, z: 1, front: 7, bottom: 46},
        {x: 1, y: -1, z: 1, front: 8, bottom: 47, right: 15},

        {x: -1, y: 1, z: 0, left: 28, top: 39},
        {x: 0, y: 1, z: 0, top: 40},
        {x: 1, y: 1, z: 0, right: 10, top: 41},

        {x: -1, y: 0, z: 0, left: 31},
        {x: 1, y: 0, z: 0, right: 13},

        {x: -1, y: -1, z: 0, left: 34, bottom: 48},
        {x: 0, y: -1, z: 0, bottom: 49},
        {x: 1, y: -1, z: 0, right: 16, bottom: 50},

        {x: -1, y: 1, z: -1, top: 36, left: 27, back: 20},
        {x: 0, y: 1, z: -1, top: 37, back: 19},
        {x: 1, y: 1, z: -1, top: 38, right: 11, back: 18},

        {x: -1, y: 0, z: -1, left: 30, back: 23},
        {x: 0, y: 0, z: -1, back: 22},
        {x: 1, y: 0, z: -1, right: 14, back: 21},

        {x: -1, y: -1, z: -1, left: 33, back: 26, bottom: 51},
        {x: 0, y: -1, z: -1, back: 25, bottom: 51},
        {x: 1, y: -1, z: -1, right: 17, back: 24, bottom: 52}

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

    var SIDES = ["front", "right", "back", "left", "top", "bottom"];

    this.runCube = function() {
        this.init();
        var cube = this.createCube();
        this.scene.add(cube);
        this.animate();
    };

    function createPlane(x, y, z, color) {
        var geometry = new THREE.PlaneGeometry(cubitSize, cubitSize);
        var material = new THREE.MeshBasicMaterial({
            color: color,
            side: THREE.DoubleSide
        });
        var result = new THREE.Mesh(geometry, material);
        result.position.x = x;
        result.position.y = y;
        result.position.z = z;

        return result;
    }

    this.createCubit = function(config) {
        var group = new THREE.Object3D();

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
            group.add(createPlane(0, 0, -cubitSize / 2, config.back));
        }
        if (config.front) {
            group.add(createPlane(0, 0, cubitSize / 2, config.front));
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
    };

    this.init = function() {
        this.scene = new THREE.Scene();

        // camera
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height);
        // camera.position.set(100, -800, 400);
        // camera.rotation.x = 45 * ( Math.PI / 180 );
        // camera.position.x = 200;
        this.camera.position.set(300, 250, 540);
        // this.camera.position.x = 300;
        // this.camera.position.y = 250;
        // this.camera.position.z = 540;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        // The X axis is red. The Y axis is green. The Z axis is blue.
        // this.scene.add(new THREE.AxisHelper(500));
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.renderer.setSize(this.width, this.height);

        document.getElementById(nodeId).appendChild(this.renderer.domElement);
    };

    this.createCube = function() {
        var result = new THREE.Object3D();
        for (var i = 0; i < mapping.length; i++) {
            var m = mapping[i];
            var config = {};
            for (var j = 0; j < SIDES.length; j++) {
                if (m[SIDES[j]] != null) {
                    var colorIndex = m[SIDES[j]];
                    var colorChar = startString.charAt(colorIndex);
                    config[SIDES[j]] = colorMapping[colorChar];
                }
            }
            console.log("M: " + m);
            var cubit = this.createCubit(config);
            cubit.position.x += 100 * m.x;
            cubit.position.y += 100 * m.y;
            cubit.position.z += 100 * m.z;
            result.add(cubit);
        }

        return result;
    };

    this.animate = function() {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    };


    // function render() {
    //     // mesh.rotation.x += 0.01;
    //     // mesh.rotation.y += 0.02;
    //
    //     // group.rotation.x -= 0.05;
    //     // group.rotation.y -= 0.05;
    //     // camera.rotation.x += 0.2;
    //     this.controls.update();
    //
    // }
    // this.init();

};

new TransparentCube("....bbrb....rrr.rrXXXggggggXXXooXoob.........wwXwwwwww");
