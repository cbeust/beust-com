Axes = {
    X: new THREE.Vector3(1, 0, 0),
    X_NEG: new THREE.Vector3(-1, 0, 0),
    Y:  new THREE.Vector3(0, 1, 0),
    Y_NEG: new THREE.Vector3(0, -1, 0),
    Z: new THREE.Vector3(0, 0, 1),
    Z_NEG: new THREE.Vector3(0, 0, -1)
};

Faces = {
    FRONT: {
        key: "f",
        name: "F",
        axis: Axes.Z_NEG,
        cubits: [ 0, 1, 2, 3, 4, 5, 6, 7, 8],
        newOrder: [6, 3, 0, 7, 4, 1, 8, 5, 2,
           9, 10, 11, 12, 13, 14, 15, 16, 17,
           18, 19, 20, 21, 22, 23, 24, 25, 26]
    },
    FRONT_PRIME: {
        key: "F",
        name: "F'",
        axis: Axes.Z,
        cubits: [ 0, 1, 2, 3, 4, 5, 6, 7, 8],
        newOrder: [2, 5, 8, 1, 4, 7, 0, 3, 6,
           9, 10, 11, 12, 13, 14, 15, 16, 17,
           18, 19, 20, 21, 22, 23, 24, 25, 26]
    },
    RIGHT: {
        key: "r",
        name: "R",
        axis: Axes.X_NEG,
        cubits: [ 2, 5, 8, 11, 14, 17, 20, 23, 26 ],
        newOrder: [0, 1, 8, 3, 4, 17, 6, 7, 26,
           9, 10, 5, 12, 13, 14, 15, 16, 23,
           18, 19, 2, 21, 22, 11, 24, 25, 20 ]
    },
    
    RIGHT_PRIME: {
        key: "R",
        name: "R'",
        axis: Axes.X,
        cubits: [ 2, 5, 8, 11, 14, 17, 20, 23, 26 ],
        newOrder: [0, 1, 20, 3, 4, 11, 6, 7, 2,
           9, 10, 23, 12, 13, 14, 15, 16, 5,
           18, 19, 26, 21, 22, 17, 24, 25, 8 ]
    },
    BACK: {
        key: "b",
        name: "B",
        axis: Axes.Z,
        cubits: [ 18, 19, 20, 21, 22, 23, 24, 25, 26 ],
        newOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8,
            9, 10, 11, 12, 13, 14, 15, 16, 17,
            20, 23, 26, 19, 22, 25, 18, 21, 24 ]
    },
    BACK_PRIME: {
        key: "B",
        name: "B'",
        axis: Axes.Z_NEG,
        cubits: [ 18, 19, 20, 21, 22, 23, 24, 25, 26 ],
        newOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8,
            9, 10, 11, 12, 13, 14, 15, 16, 17,
            24, 21, 18, 25, 22, 19, 26, 23, 20 ]
    },
    LEFT: {
        key: "l",
        name: "L",
        axis: Axes.X,
        cubits: [ 0, 3, 6, 9, 12, 15, 18, 21, 24 ],
        newOrder: [18, 1, 2, 9, 4, 5, 0, 7, 8,
            21, 10, 11, 12, 13, 14, 3, 16, 17,
            24, 19, 20, 15, 22, 23, 6, 25, 26 ]
    },
    LEFT_PRIME: {
        key: "L",
        name: "L'",
        axis: Axes.X_NEG,
        cubits: [ 0, 3, 6, 9, 12, 15, 18, 21, 24 ],
        newOrder: [6, 1, 2, 15, 4, 5, 24, 7, 8,
            3, 10, 11, 12, 13, 14, 21, 16, 17,
            0, 19, 20, 9, 22, 23, 18, 25, 26 ]
    },
    UP: {
        key: "u",
        name: "U",
        axis: Axes.Y_NEG,
        cubits: [ 0, 1, 2, 9, 10, 11, 18, 19, 20 ],
        newOrder: [ 2, 11, 20, 3, 4, 5, 6, 7, 8,
            1, 10, 19, 12, 13, 14, 15, 16, 17,
            0, 9, 18, 21, 22, 23, 24, 25, 26 ]
    },
    UP_PRIME: {
        key: "U",
        name: "U'",
        axis: Axes.Y,
        cubits: [ 0, 1, 2, 9, 10, 11, 18, 19, 20 ],
        newOrder: [ 18, 9, 0, 3, 4, 5, 6, 7, 8,
            19, 10, 1, 12, 13, 14, 15, 16, 17,
            20, 11, 2, 21, 22, 23, 24, 25, 26 ]
    },
    DOWN: {
        key: "d",
        name: "D",
        axis: Axes.Y_NEG,
        cubits: [ 6, 7, 8, 15, 16, 17, 24, 25, 26 ],
        newOrder: [ 0, 1, 2, 3, 4, 5, 8, 17, 26,
            9, 10, 11, 12, 13, 14, 7, 16, 25,
            18, 19, 20, 21, 22, 23, 6, 15, 24 ]
    },
    DOWN_PRIME: {
        key: "D",
        name: "D'",
        axis: Axes.Y,
        cubits: [ 6, 7, 8, 15, 16, 17, 24, 25, 26 ],
        newOrder: [0, 1, 2, 3, 4, 5, 24, 15, 6,
            9, 10, 11, 12, 13, 14, 25, 16, 7,
            18, 19, 20, 21, 22, 23, 26, 17, 8 ]
    }
};

var FACES = [
    Faces.FRONT, Faces.FRONT_PRIME,
    Faces.RIGHT, Faces.RIGHT_PRIME,
    Faces.BACK, Faces.BACK_PRIME,
    Faces.LEFT, Faces.LEFT_PRIME,
    Faces.UP, Faces.UP_PRIME,
    Faces.DOWN, Faces.DOWN_PRIME
];

var FACE_MAP = {};
var FACE_KEY_MAP = {};

for (var i = 0; i < FACES.length; i++) {
    FACE_MAP[FACES[i].name] = FACES[i];
    FACE_KEY_MAP[FACES[i].key] = FACES[i].name;
}


Cube = function(width, height, formula, startString, nodeId) {
    self = this;

    this.width = width;
    this.height = height;
    this.formula = formula;
    this.startString = startString;
    this.nodeId = nodeId;

    this.camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
    this.camera.position.set(700, 700, 1200);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x888888, 1);
    document.getElementById(nodeId).appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)

    var W = 200;
    var CUBIT_SIZE = W - 6;
    
    var PI_2 = Math.PI / 2;
    var ANIMATE_INCREMENT = 0.01;
    
    var RGB_MAP = {
        'w': 0xffffff,
        'b': 0x0000cc,
        'y': 0xeeee00,
        'g': 0x00aa00,
        'o': 0xff8c00,
        'r': 0xff0000,
        '.': 0x666666,
        'X': 0x000000
    }

    var ORIGINAL_WORLD = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
    var WORLD = ORIGINAL_WORLD;
    
    var ALL_OBJECTS = [];
    
    var controls;

    this.clearScene = function() {
        for (var i = ALL_OBJECTS.length - 1; i >= 0 ; i -- ) {
            this.scene.remove(ALL_OBJECTS[i]);
        }
        ALL_OBJECTS = [];
    }
    
    this.addCubeToScene = function() {
        this.clearScene();
        var cubitIndex = 0;
        for (var z = 1; z >= -1; z--) {
            for (var y = 1; y >= -1; y--) {
                for (var x = -1; x <= 1; x++) {
                    var cube = this.createOneCubit(x * W, y * W, z * W, WORLD[cubitIndex++]);
                    this.scene.add(cube);
                    ALL_OBJECTS.push(cube);
                }
            }
        }
        this.renderer.render(this.scene, this.camera);
        console.log("All objects: " + ALL_OBJECTS.length);
    }
    
    var CUBIT_COLOR_INDICES = [
        {
            indices: [ 0, -2, -2, 29, 42, -2 ],
            expected: "w..go."
        },
        {
            indices: [ 1, -2, -2, -2, 43, -2 ],
            expected: "w...o."
        },
        {
            indices: [ 2, 9, -2, -2, 44, -2 ],
            expected: "wb..o."
        },
        {
            indices: [ 3, -2, -2, 32, -2, -2 ],
            expected: "w..g.."
        },
        {
            indices: [ 4, -2, -2, -2, -2, -2 ], // middle of front
            expected: "w....."
        },
        {
            indices: [ 5, 12, -2, -2, -2, -2 ],
            expected: "wb...."
        },
        {
            indices: [ 6, -2, -2, 35, -2, 45 ],
            expected: "w..g.r"
        },
        {
            indices: [ 7, -2, -2, -2, -2, 46 ],
            expected: "w....r"
        },
        {
            indices: [ 8, 15, -2, -2, -2, 47 ],
            expected: "wb...r"
        },
        {
            indices: [ -2, -2, -2, 28, 39, -2 ],
            expected: "...go."
        },
        {
            indices: [ -2, -2, -2, -2, 40, -2 ], // middle
            expected: "....o."
        },
        {
            indices: [ -2, 10, -2, -2, 41, -2 ],
            expected: ".b..o."
        },
        {
            indices: [ -2, -2, -2, 31, -2, -2 ],
            expected: "...g.."
        },
        {
            indices: [ -2, -2, -2, -2, -2, -2 ], // center cube
            expected: "......"
        },
        {
            indices: [ -2, 13, -2, -2, -2, -2 ], // middle of right
            expected: ".b...."
        },
        {
            indices: [ -2, -2, -2, 34, -2, 48 ],
            expected: "...g.r"
        },
        {
            indices: [ -2, -2, -2, -2, -2, 49 ], // middle of down
            expected: ".....r"
        },
        {
            indices: [ -2, 16, -2, -2, -2, 50 ],
            expected: ".b...r"
        },
        {
            indices: [ -2, -2, 20, 27, 36, -2 ],
            expected: "..ygo."
        },
        {
            indices: [ -2, -2, 19, -2, 37, -2 ],
            expected: "..y.o."
        },
        {
            indices: [ -2, 11, 18, -2, 38, -2 ],
            expected: ".by.o."
        },
        {
            indices: [ -2, -2, 23, 30, -2, -2],
            expected: "..yg.."
        },
        {
            indices: [ -2, -2, 22, -2, -2, -2 ], // middle of back
            expected: "..y..."
        },
        {
            indices: [ -2, 14, 21, -2, -2, -2 ],
            expected: ".by..."
        },
        {
            indices: [ -2, -2, 26, 33, -2, 53 ],
            expected: "..yg.r"
        },
        {
            indices: [ -2, -2, 25, -2, -2, 52 ],
            expected: "..y..r"
        },
        {
            indices: [ -2, 17, 24, -2, -2, 51 ],
            expected: ".by..r"
        }
    ]
    
    this.getCubitColorsFromArray = function(indices) {
        var colors = "";
        for (var i = 0; i < indices.length; i++) {
            var ind = indices[i];
            var c;
            if (ind >= 0 && ind < this.startString.length) {
                c = this.startString[ind];
            } else if (ind == -2) {
                c = "X";
            } else {
                c = ".";
            }
            colors += c;
        }
        return colors;
    //    console.log("Cubit colors: " + colors + " expected: " + expected);
    }
    
    function stringToRgb(s) {
        var result = [];
        for (var i = 0; i < s.length; i++) {
            result.push(RGB_MAP[s.charAt(i)])
        }
        return result;
    }
    
    this.getMaterialArray = function(cubitIndex) {
        var array = [];
        var ci = CUBIT_COLOR_INDICES[cubitIndex].indices;
        var cs = this.getCubitColorsFromArray(ci);
    //    console.log("Color of cubit " + cubitIndex + " " + cs);
        var rgbColors = stringToRgb(cs);
    
        // input order: z+,x+,z-,x-,y+,y-
        // order to add materials: x+,x-,y+,y-,z+,z-
        var indices = [ 1, 3, 4, 5, 0, 2 ];
        for (var i = 0; i < indices.length; i++) {
            array.push(new THREE.MeshBasicMaterial( {
                color: rgbColors[indices[i]]
            } ));
        }
    
        return new THREE.MeshFaceMaterial(array);
    }

    function differInOneDimension(p1, p2) {
        return (p1.x == p2.x && p1.y == p2.y && p1.z != p2.z)
                || (p1.x != p2.x && p1.y == p2.y && p1.z == p2.z)
                || (p1.x == p2.x && p1.y != p2.y && p1.z == p2.z);
    }

    function verticesToLines(vertices) {
        var result = [];
        for (var i = 0; i < vertices.length - 1; i++) {
            for (var j = i + 1; j < vertices.length; j++) {
                if (differInOneDimension(vertices[i], vertices[j])) {
                    console.log("Found line: "
                            + vertices[i].x + " " + vertices[i].y + " " + vertices[i].z
                            + " - "
                            + vertices[j].x + " " + vertices[j].y + " " + vertices[j].z);
                    var geometry = new THREE.Geometry();
                    geometry.vertices.push(vertices[i]);
                    geometry.vertices.push(vertices[j]);
                    result.push(geometry);
                }
            }
        }
        return result;
    }

    this.createOneCubit = function(x, y, z, cubitIndex) {
    //    console.log("Creating cubit " + cubitIndex  + " " + x + "," + y + "," + z);
        var cubeMaterials = this.getMaterialArray(cubitIndex);
        var cubeGeometry = new THREE.BoxGeometry(CUBIT_SIZE, CUBIT_SIZE, CUBIT_SIZE);
        cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
        cube.position = new THREE.Vector3(x, y, z);

        // Enable to show lines between cubes, however they don't rotate
        // and they look ugly
        if (false) {
            var geometry = new THREE.Geometry();
            var vertices = [];
            for (var i = 0; i < cubeGeometry.vertices.length; i++) {
                var vertex = cubeGeometry.vertices[i];
                var p = cube.position;
                vertices.push(new THREE.Vector3(vertex.x + p.x, vertex.y + p.y, vertex.z + p.z));
            }
            var lines = verticesToLines(vertices);
            var material =  new THREE.LineBasicMaterial({
                color: 0x0000ff
            });

            for (var i = 0; i < lines.length; i++) {
                var line = new THREE.Line(lines[i], material);
                this.scene.add(line);
            }
        }
        return cube;
    }
    
    var facesToRotate = [];
    var rotateCount = 0;
    var lastTime = 0;
    
    /**
     * @return the scene objects for the given face.
     */
    function getCubesForFace(face) {
        var result = [];
        var cubitIndices = face.cubits;
        for (var i = 0; i < cubitIndices.length; i++) {
            var ci = cubitIndices[i];
            result.push(ALL_OBJECTS[ci]);
        }
        return result;
    }
    
    function roundMultiple(n, multiple) {
        if (! multiple) {
            multiple = W;
        }
        var result = Math.round(n / multiple) * multiple;
        return result;
    }
    
    function clamp100(x) {
        var DELTA = 5;
        var ax = Math.abs(100 - x % 100);
        var result;
        if (ax < DELTA) {
            var tmp = x > 0 ? x + DELTA : x - DELTA;
            result = tmp - (tmp % 100);
        } else {
            result = x;
        }
        return result;
    }
    
    function testRoundMultiple() {
        assertEquals(roundMultiple(99), 100);
        assertEquals(roundMultiple(-97.98013305664062), 100);
        assertEquals(roundMultiple(-97), 100);
        assertEquals(roundMultiple(94), 94);
        assertEquals(roundMultiple(95), 100);
        assertEquals(roundMultiple(96), 100);
        assertEquals(roundMultiple(97), 100);
        assertEquals(roundMultiple(100), 100);
        assertEquals(roundMultiple(101), 100);
        assertEquals(roundMultiple(-99), -100);
        assertEquals(roundMultiple(-100), -100);
        assertEquals(roundMultiple(-101), -100);
    }

    this.setNewOrder = function(newOrder) {
        var newObjects = [];
        for (var i = 0; i < newOrder.length; i++) {
            newObjects[i] = ALL_OBJECTS[newOrder[i]];
        }
        ALL_OBJECTS = newObjects;
        this.renderer.render(this.scene, this.camera);
    }

    this.animate = function() {
//        console.log("Animating id " + this.nodeId);
        if (rotateCount > 0) {
            // Still rotating
            var currentFace = facesToRotate[0];
            var delta = new Date().getTime() - lastTime;
            var increment = lastTime == 0 ? 0.04 : delta / 200;
            if (rotateCount - increment < 0) {
                increment = rotateCount;
            }
    //        console.log("Increment: " + increment);
            rotateCount -= increment;
    
    //        faceGroup.rotateOnAxis(currentFace.axis, increment * currentFace.sign);
            var objects = getCubesForFace(currentFace);
            var matrix = new THREE.Matrix4().makeRotationAxis(currentFace.axis, increment);
    //        console.log("Rotation before applyMatrix: " + objects[0].rotation.z)
            for (var i = 0; i < objects.length; i++) {
                objects[i].applyMatrix(matrix);
    //            renderer.render(scene, camera);
            }
//            console.log("Rotation after applyMatrix: " + objects[0].rotation.z)
    
            lastTime = new Date().getTime();
        } else if (isRotating) {
            // Done rotating
            var currentFace = facesToRotate[0];
            var objects = getCubesForFace(currentFace);
            for (var i = 0; i < objects.length; i++) {
                var r = objects[i].rotation;
                var p = objects[i].position;
                p.x = roundMultiple(p.x);
                p.y = roundMultiple(p.y);
                p.z = roundMultiple(p.z);
    //            console.log("#" + i + " coords after applyMatrix: " + p.x + "," + p.y + "," + p.z);
    //            console.log("#" + i + " rotation: " + r.x + "," + r.y + "," + r.z);
            }
    
            this.renderer.render(this.scene, this.camera);
            var newObjects = [];
            if (currentFace.newOrder.length != 27) {
                alert("Wrong newOrder");
            }
            this.setNewOrder(currentFace.newOrder);
    
            facesToRotate.shift();
            lastTime = 0;
            if (facesToRotate.length > 0) {
                resetRotateCount();
            } else {
                isRotating = false;
            }
        }
    
//        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    var isRotating = false;
    
    /**
     * Turns a text formula (furFUR) into a list of faces.
     */
    function formulaToFaces(formula) {
        var result = [];
        for (var i = 0; i < formula.length; i++) {
            var c = "" + formula.charAt(i);
            if (i < formula.length + 1 && formula.charAt(i + 1) == '\'') {
                c = c + "'";
                i = i + 1;
            } 
            var face = FACE_MAP[c.toUpperCase()];
            if (face != null) { // could have spaces in the formula
                result.push(face);
            }
        }
        return result;
    }

    this.reset = function() {
        console.log("Resetting " + this.formula);
        this.addCubeToScene();
    }

    this.playCubeFormula = function() {
        console.log("Playing " + this.formula);
        rotateFaces(formulaToFaces(this.formula));
    }
    
    function resetRotateCount() {
        rotateCount = PI_2;
        var axis = facesToRotate[0].axis;
    }
    
    function rotateFaces(faces) {
        for (var i = 0; i < faces.length; i++) {
            facesToRotate.push(faces[i]);
        }
        if (! isRotating) {
            resetRotateCount();
        }
        isRotating = true;
    }

    this.rotateFace = function(face) {
        rotateFaces([ face ]);
    }

    function testCubitColors() {
        for (var i = 0; i < CUBIT_COLOR_INDICES.length; i++) {
            var oi = CUBIT_COLOR_INDICES[i];
            var colors = getCubitColorsFromArray(oi.indices);
            if (colors != oi.expected) {
                console.log("*** Mismatch index " + i + ": " + colors + " expected: " + oi.expected);
            }
        }
    
        for (var i = 0; i < 27; i++) {
            getMaterialArray(i);
        }
    
        console.log(CUBIT_COLOR_INDICES.length + " tests done");
    }
    
    function assertEquals(actual, expected, message) {
        if (isNaN(actual) || Math.abs(actual - expected) > 0.1) {
            alert("Assertion failed: expected " + expected + " but got " + actual);
        }
    }
    
    // @Tests
    
    //testCubitColors();
    //testRoundMultiple();
    console.log("Run all tests");
    
    this.runCube = function() {
        this.addCubeToScene();
    }

//    function tmp() {
//        var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
//    //    {
//    //        var pivot1 = new THREE.Object3D();
//    //        var geometry =  new THREE.BoxGeometry( 40, 40, 40);
//    //        var cube = new THREE.Mesh(geometry, material);
//    //        cube.position.x = 50;
//    //        pivot1.add(cube);
//    //        scene.add(pivot1);
//    //    }
//    
//        var geometry =  new THREE.BoxGeometry( 40, 40, 40);
//        cube = new THREE.Mesh(geometry, material);
//        cube.position.x = 50;
//        scene.add(cube);
//        renderer.render(scene, camera);
//    
//        count = 0;
//    
//        this.animate = function() {
//            var axis = count % 200 < 100 ? new THREE.Vector3(0,1,0) : new THREE.Vector3(0,0,1);
//    //        console.log("Count: " + count + " " + axis.x + "," + axis.y + "," + axis.z);
//    //        axis = new THREE.Vector3(0,1,0);
//            count++;
//            var matrix = new THREE.Matrix4().makeRotationAxis( axis, 0.01 );
//            cube.applyMatrix( matrix );
//    //        rotateAroundObjectAxis(cube, new THREE.Vector3(0,0,10), 0.01);
//    //        pivot1.rotation.z += 0.01;
//    
//            renderer.render(scene, camera);
//            requestAnimationFrame(animate);
//        }
//        requestAnimationFrame(animate);
//    
//    }
    
    this.inspectWorld = function() {
        for (var i = 0; i < ALL_OBJECTS.length; i++) {
            var p = ALL_OBJECTS[i].position;
            var r = ALL_OBJECTS[i].rotation;
            console.log("#" + i + " position: "
                + p.x + "," + p.y + "," + p.z
                + " rotation: "
                + r.x + "," + r.y + "," + r.z);
        }
    }
}

cubeMap = {};

function playFormula(nodeId) {
    cubeMap[nodeId].playCubeFormula();
    if (window.event) {
        window.event.returnValue = false;
    }
    return false;
}

function reset(nodeId) {
    cubeMap[nodeId].reset();
    if (window.event) {
        window.event.returnValue = false;
    }
    return false;
}

function animate() {
    var keys = Object.keys(cubeMap);
    for (var i = 0; i < keys.length; i++) {
        cubeMap[keys[i]].animate();
    }
    requestAnimationFrame(animate);
}

function parseParams(params) {
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
        var f = getParam(paramMap, 'formula', null);
        var width = parseInt(getParam(paramMap, 'width', '200'));
        var height = parseInt(getParam(paramMap, 'height', '200'));
        var startString = getParam(paramMap, "startString", defaultStartString);
        startString = startString.replace(new RegExp(" ", 'g'), "");
        var id = node.attributes.id.textContent;
        var cube = new Cube(width, height, f, startString, id);
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

        if (f) {
            var div = document.createElement("div");
            div.setAttribute("class", "cc-interface");
            div.setAttribute("style", "width:" + (width - 2));
            node.appendChild(div);

            {
                // Formula text
                var textDiv = document.createElement("div");
                textDiv.setAttribute("class", "cc-formula-text");
                textDiv.appendChild(document.createTextNode(f));
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

            addLink("playFormula", "Play");
            addLink("reset", "Reset");
        }
        cube.runCube();
    }
}

function run() {
    modifyDom();
    requestAnimationFrame(animate);
}

function findId(node) {
    while (node != null) {
        var cls = node.attributes['class']; 
        if (cls && cls.textContent == "CedCube") {
            return node.attributes['id'].textContent;
        } else {
            node = node.parentElement;
        }
    }
    return null;
}

var x = 0, y = 0;
document.addEventListener('mousemove', function(e){
    x = e.pageX
    y = e.pageY;
}, false);

window.onkeyup = function(e){
    console.log(x + ' ' + y);
    var elementMouseIsOver =
        document.elementFromPoint(x - window.pageXOffset, y - window.pageYOffset);
    var id = findId(elementMouseIsOver);
    console.log("Id: " + id);
    if (id) {
        var cube = cubeMap[id];
        var shift = e.shiftKey;
        var c = e.keyCode;
        var face;
        switch (c) {
            case 66: // b
                face = shift ? Faces.BACK_PRIME : Faces.BACK;
                break;
            case 68: // d
                face = shift ? Faces.DOWN_PRIME : Faces.DOWN;
                break;
            case 70: // f
                face = shift ? Faces.FRONT_PRIME : Faces.FRONT;
                break;
            case 76: /// l
                face = shift ? Faces.LEFT_PRIME : Faces.LEFT;
                break;
            case 82: // r
                face = shift ? Faces.RIGHT_PRIME : Faces.RIGHT;
                break;
            case 85: // u
                face = shift ? Faces.UP_PRIME : Faces.UP;
                break;
            default:
                console.log("Key: " + c);
        }
        if (face) {
            cube.rotateFace(face);
        }
    }
};
