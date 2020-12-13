var section0 = {
    header: "Corner in wrong slot, edge in correct slot",
    algorithms: [
        {
            id: "cw-ec-00",
            formulas: [ "L' R U L U' R'" ]
        },
        {
            id: "cw-ec-01",
            formulas: [ "L' R U' R' U L" ]
        },
        {
            id: "cw-ec-02",
            colors: "ttttttttttttrrrtrrttttbbbbtrwtwwwwwwtttootoowtttgggggg",
            formulas: [ "R U L' U' L R'" ]
        },
        {
            id: "cw-ec-03",
            colors: "tttttttttttttrrrrrtttbbttbbtwwwwwwwwtttooooottttgggggg",
            formulas: [ "L' U' R U L R'" ]
        },
        {
            id: "cw-ec-04",
            colors: "ttttttttttttrrrtrrttttbbwbtbwtwwwwwwtttootoobtttgggggg",
            formulas: [ "y' R' U R2 U2 R2 U R" ]
        },
        {
            id: "cw-ec-06",
            colors: "tttttttttttttrrorrtttbbttbwtwtwwwwwwtttootoottttgggggg",
            formulas: [ "y' R U' R2 U2 R2 U' R'" ]
        },
        {
            id: "cw-ec-07",
            colors: "ttttttttttttbrrtrrttttbrrbtwwtwwwwwwtttootoobtttgggggg",
            formulas: [ "y' R U' F R F' R2 U' R" ]
        },
        {
            id:"cw-ec-08",
            colors: "tttttttttttttrrbrrtttobttbotwwwwwwwwtttooboottttgggggg",
            formulas: [ "y L' U F' L' F L2 U L'" ]
        },
        {
            id:"cw-ec-09",
            colors: "ttttttttttttbrrtrrttttbrbbtrwtwwwwwwtttootoowtttgggggg",
            formulas: [ "R' F R U' F' R U' R'" ]
        },
        {
            id:"cw-ec-10",
            colors: "tttttttttttttrrwrrttttbttbbtwtwwwwwwtttooboortttgggggg",
            formulas: [ "L F' L' U F L' U L", "L F L' F R L' U L R'" ]
        },
        {
            id: "cw-ec-11",
            colors: "ttttttttttttbrrtrrttttbrwbtbwtwwwwwwtttootoortttgggggg",
            formulas: [ "L F2 L' F U' F" ]
        },
        {
            id:"cw-ec-12",
            colors: "tttttttttttttrrorrtttobttbwtwwwwwwwwtttooboottttgggggg",
            formulas: [ "R' F2' R F' U F'" ]
        }

    ]
};

var section1 = {
    header: "Corner in wrong slot, edge in the U layer",
    algorithms: [
        {
            id: "cw-eu-00",
            colors: "tttrtttttttttrrtrrttttbtbbtrwtwwwwwwtbtootoowtttgggggg",
            formulas: ["(L' U' L) (F' U' F)"]
        },
        {
            id: "cw-eu-01",
            colors: "tttttttrtttttrrtrrtbttbtrbtwwtwwwwwwtttootoobtttgggggg",
            formulas: ["(F U2 F') U (F' U F)"]
        },
        {
            id: "cw-eu-02",
            colors: "tttrtttttttttrrtrrttttbtwbtwwtwwwwwwtbtootoobtttgggggg",
            formulas: ["F U2 F2 U F"]
        },
        {
            id: "cw-eu-03",
            colors: "tttttttbtttttrrtrrtrttbtbbtrwtwwwwwwtttootoowtttgggggg",
            formulas: ["L' R U' L R'"]
        },
        {
            id: "cw-eu-04",
            colors: "tttttbttttrttrrtrrttttbtrbtwwtwwwwwwtttootoobtttgggggg",
            formulas: ["(L' U L) (R U' R')"]
        },
        {
            id: "cw-eu-05",
            colors: "tttttbttttrttrrtrrttttbtwbtbwtwwwwwwtttootoortttgggggg",
            formulas: ["(F U2 F') U (R U R')"]
        }
]
};

var section2 = {
    header: "Edge in wrong slot, corner in correct slot",
    algorithms: [
        {
            id: "ew-cc-00",
            colors: "tttttttttttttrrrrrtttbbttbbtwwwwwwwwtttooroottttgggggg",
            formulas: ["F r U2 r' F'", "y R2 U R2 U' R2"]
        },
        {
            id: "ew-cc-01",
            colors: "ttttttttttttorrtrrttttbbbbtwwtwwwwwwtttootoootttgggggg",
            formulas: ["F' l' U2 l F", "y R2 U' R2 U R2"]
        },
        {
            id: "ew-cc-02",
            colors: "tttttttttttttrrbrrtttbbtbbwtwrwwwwwwtttooroottttgggggg",
            formulas: ["R U L' U2 L R'"]
        },
        {
            id: "ew-cc-03",
            colors: "ttttttttttttorrtrrttttbbwbtowtwwwwwwtttootoobtttgggggg",
            formulas: ["L' U' R U2 L R'"]
        },
        {
            id: "ew-cc-04",
            colors: "tttttttttttttrrwrrtttbbttbrtwwwwwwwwtttooroottttgggggg",
            formulas: ["R U' L' U' L U' R'", "L' U R U2 L U' R'"]
        },
        {
            id: "ew-cc-05",
            colors: "ttttttttttttorrtrrttttbbobtbwtwwwwwwtttootoowtttgggggg",
            formulas: ["R U' L' U2 R' U L", "L' U R U R' U L"]
        },
        {
            id: "ew-cc-06",
            colors: "tttttttttttttrrrrrtttrbttbbtwwwwwwwwtttooboottttggggg",
            formulas: ["L u L' u' L'", "y' B R U' R' B'", "F (U r U' r') F"]
        },
        {
            id: "ew-cc-07",
            colors: "ttttttttttttbrrtrrttttbobbtwwtwwwwwwtttootoootttgggggg",
            formulas: ["R' u' R u R", "y' F' R' U R F", "F r U r' U' F'"]
        },
        {
            id: "ew-cc-08",
            colors: "tttttttttttttrrbrrtttrbttbwtwrwwwwwwtttooboottttgggggg",
            formulas: ["R U' R2 u' R' u R"]
        },
        {
            id: "ew-cc-09",
            colors: "ttttttttttttbrrtrrttttbowbtowtwwwwwwtttootoobtttgggggg",
            formulas: ["L' U L2 u L u' L'"]
        },
        {
            id: "ew-cc-10",
            colors: "tttttttttttttrrwrrtttrbttbrtwbwwwwwwtttooboottttgggggg",
            formulas: ["F U2 R' F' R2 U R'"]
        },
        {
            id: "ew-cc-11",
            colors: "ttttttttttttbrrtrrttttboobtbwtwwwwwwtttootoowtttgggggg",
            formulas: ["F' U2 L F L2 U' L", "y' R' U' R2 U' R' F' U' F"]
        }
    ]
};

var section3 = {
    header: "Edge in wrong slot, corner in the U layer",
    algorithms: [
        {
            id: "ew-cu-00",
            colors: "ttttttttbrtttrrtrrttwbbttbttwtwwwwwwtttooroottttgggggg",
            formulas: ["L F2 L' F2"]
        },
        {
            id: "ew-cu-01",
            colors: "ttttttwttttttrrtrrbttbbttbttwtwwwwwwttrooroottttgggggg",
            formulas: ["F2 R' F2 R", "y F2 L F2 L'"]
        },
        {
            id: "ew-cu-02",
            colors: "ttttttttrwtttrrtrrttbbbttbttwtwwwwwwtttooroottttgggggg",
            formulas: ["U' (L' U' L) (R U' R')"]
        },
        {
            id: "ew-cu-03",
            colors: "ttttttttbrtttrrtrrttwrbtbbttwwwwwwwwtttooboootttgggggg",
            formulas: ["R' u' R' u R", "L' F' U' F L"]
        },
        {
            id: "ew-cu-04",
            colors: "ttttttttwbtttrrtrrttrrbttbttwtwwwwwwtttooboottttgggggg",
            formulas: ["L F' L2 U L U2 F", "y R' F R2 U' R' U2 F'"]
        },
        {
            id: "ew-cu-05",
            colors: "ttttttttrwtttrrtrrttbrbttbttwtwwwwwwtttooboottttgggggg",
            formulas: ["(F U2 F') (R U R')", "y (F' U2 F)(L' U' L)"]
        }
        // TODO
        // {
        //     id: "ew-cu-06",
        //     colors: "",
        //     formulas: ["R' F R2 U' R' U2 F'"]
        // }

    ]
};

var section4 = {
    header: "Both corner and edge in wrong slot",
    algorithms: [
        {
            id: "ew-cw-00",
            colors: "tttttttttttttrrtrrtttbbtrbtwwtwwwwwwtttooroobtttgggggg",
            formulas: ["y' R U' R U2 R2 U2 R U R", "y' R U R U2 R2 U2 R U' R"]
        },
        {
            id: "ew-cw-01",
            colors: "ttttttttttttorrbrrttttbbtbotwwwwwwwwtttootoottttgggggg",
            formulas: ["y' R' U R' U2 R2 U2 R' U' R'", "y' R' U' R' U2 R2 U2 R' U R'"]
        },
        {
            id: "ew-cw-02",
            colors: "tttttttttttttrrtrrtttbbtbbtrwtwwwwwwtttooroowtttgggggg",
            formulas: ["y' R U' R2 U' R U' R' U' R", "y' R U' R' U' R U' R2 U' R", "F' R2 U F' R2 F U' R2"]
        },
        {
            id: "ew-cw-03",
            colors: "ttttttttttttorrwrrttttbbtbbtwrwwwwwwtttootoottttgggggg",
            formulas: ["y' R' U R2 U R' U R U R'", "y' R' U R U' R U' R' U' R U R'", "F L2 U' F L2 F' U L2"]
        },
        {
            id: "ew-cw-04",
            colors: "tttttttttttttrrtrrtttbbtwbtbwtwwwwwwtttooroortttgggggg",
            formulas: ["L' U L U R U' R' U' R U R'", "y' R U R' U' R U' R' U R' U' R", "y' R U R2 U2 R' U R' U' R2"]
        },
        {
            id: "ew-cw-05",
            colors: "ttttttttttttorrorrttttbbtbwtwbwwwwwwtttootoottttgggggg",
            formulas: ["R U' R' U' L' U L U L' U' L", "y' R' U' R U R' U R U' R U R'"]
        },
        {
            id: "ew-cw-06",
            colors: "tttttttttttttrrtrrtttrbtrbtwbtwwwwwwtttooboobtttgggggg",
            formulas: ["L F' L' F R U' R'"]
        },
        {
            id: "ew-cw-07",
            colors: "ttttttttttttbrrbrrttttbotbotwwwwwwwwtttootoottttgggggg",
            formulas: ["R U R' F' L F L'"]
        },
        {
            id: "ew-cw-08",
            src: "tttttttttttttrrtrrtttrbtbbtrwtwwwwwwtttooboowtttgggggg",
            formulas: ["y' R U' R2 y R' F' R F"]
        },
        {
            id: "ew-cw-09",
            colors: "ttttttttttttbrrwrrtttttotbbwwowwwwwwtttootoottttgggggg",
            formulas: ["y' R' U R2 F R F' R'", "y' R' B' R2 U R'", "R U l' L U' R' U' M F", "F' R U' M' U M U R' F"]
        },
        {
            id: "ew-cw-10",
            colors: "tttttttttttttrrtrrtttrbtwbtbwtwwwwwwtttooboortttgggggg",
            formulas: ["L' U' L y' R' U2 R U R' U' R"]
        },
        {
            id: "ew-cw-11",
            colors: "ttttttttttttbrrorrttttbotbwtwbwwwwwwtttootoottttgggggg",
            formulas: ["R U R' y' R U2 R' U' R U R'"]
        }
    ]
};

var section5 = {
    header: "Some diagonal Jeff2L",
    algorithms: [
        {
            id: "diag-00",
            colors: "ttttttttttttrrtrrwtttgbbtbbtwwwwwwwgtttoorootttttggrgg",
            formulas: ["R' U R' u' R2 u R2"]
        },
        {
            id: "diag-01",
            colors: "ttttttttttttrrtrrrtttrbbtbbtwwwwwwwwtttoogoottttggtggg",
            formulas: ["R2 F R U' F' R"]
        },
        {
            id: "diag-02",
            colors: "tgtttttttttttrrwrrtttbbbbbowwgwwwtwwttttootoototggtggt",
            formulas: ["R2 L U' L' U R2"]
        },
        {
            id: "diag-03",
            colors: "tttgtttttttttrrgrrtttbbtbbwwwowwwtwwtottootootttggtggt",
            formulas: ["R2 U' L U L' R2"]
        }
    ]
};

var section6 = {
    header: "Diagonal Jeff2L, edge in BL",
    algorithms: [
        {
            id: "diag-ebl-00",
            colors: "ttttttttwbtttrrtrrttrbbtbbtwwtwwwtwwtttrootootttggbggt",
            formulas: ["R2 u R2 u' R2"]
        },
        {
            id: "diag-ebl-01",
            colors: "ttttttttbrtttrrtrrttwbbtbbtwwtwwwwwttttrootootttggbggt",
            formulas: ["U (L U' L') (R U' R')"]
        },
        {
            id: "diag-ebl-02",
            colors: "ttttttttrwtttrrtrrttbbbtbbtwwtwwwwwttttrootootttggbggt",
            formulas: ["U' (L U L') (R U R')"]
        },
        {
            id: "diag-ebl-03",
            colors: "ttttttttbrtttrrtrrttwbbtbbtwwtwwwtwwtttbootootttggrggt",
            formulas: ["L F' U' F L'"]
        },
        {
            id: "diag-ebl-04",
            colors: "ttttttttwbtttrrtrrttrbbtbbtwwtwwwwwttttbootootttggrggt",
            formulas: ["U2 F' (L U' L') F"]
        },
        {
            id: "diag-ebl-05",
            colors: "ttttttttrwtttrrtrrttbbbtbbtwwtwwwwwttttbootootttggrggt",
            formulas: ["B' (R U R') B"]
        },
        {
            id: "diag-ebl-06",
            colors: "tttttttttttttrrrrrtttbbtbbbwwwwwwtwwtttboooootttggrggt",
            formulas: ["R2 B' R' U B R'"]
        },
        {
            id: "diag-ebl-07",
            colors: "tttttttttttttrrbrrtttbbtbbwwwrwwwwwttttrootootttggbggt",
            formulas: ["(F' U F') D' L2 D F2"]
        },
        {
            id: "diag-ebl-08",
            colors: "tttttttttttttrrbrrtttbbtbbwwwrwwwwwttttbootootttggrggt",
            formulas: ["R U2 B' U B R'"]
        },
        {
            id: "diag-ebl-09",
            colors: "tttttttttttttrrwrrtttbbtbbrwwbwwwwwttttrootootttggbggt",
            formulas: ["(L U L') R U2 (L U' L') R'", "RU'R u R2 u' R2"]
        },
        {
            id: "diag-ebl-10",
            colors: "tttttttttttttrrwrrtttbbtbbrwwbwwwwwttttbootootttggrggt",
            formulas: ["F' U2 (L U' L') F"]
        }
    ]
};

var section7 = {
    header: "Diagonal Jeff2L, corner in BLD",
    algorithms: [
        {
            id: "diag-cbld-00",
            colors: "tttttttrtttttrrtrrtbtbbtbbtwwtwwwwwwttttoorootttggtggb",
            formulas: ["U (L U2 L') (F' U' F)"]
        },
        {
            id: "diag-cbld-01",
            colors: "tttttbttttrttrrtrrtttbbtbbtwwtwwwwwwttttoorootttggtggb",
            formulas: ["U' (B' U2 B) (R U R')"]
        },
        {
            id: "diag-cbld-02",
            colors: "tttttttrtttttrrtrrtbtbbtbbtwwtwwwwwwttttoowootttggtggr",
            formulas: ["U2' (L U L') (F' U F)"]
        },
        {
            id: "diag-cbld-03",
            colors: "tttttbttttrttrrtrrtttbbtbbtwwtwwwbwwttttoowootttggtggr",
            formulas: ["U (L U2' L') (R U R')"]
        }
    ]
};

var section8 = {
    header: "Both pieces in the wrong slot",
    algorithms: [
        {
            id: "both-ws-00",
            colors: "tttttttttttttrrtrrtttbbtbbtwwtwwwwwwtttroorootttggbggb",
            formulas: ["L R U2 L' R'"]
        },
        {
            id: "both-ws-01",
            colors: "tttttttttttttrrtrrtttbbtbbtwwtwwwwwwtttboorootttggrggb",
            formulas: ["L U2 F U2 F2 U' F L'"]
        },
        {
            id: "both-ws-02",
            colors: "tttttttttttttrrtrrtttbbtbbtwwtwwwrwwtttroobootttggbggw",
            formulas: ["L2 R U2 L' U' L U' L2 R'"]
        },
        {
            id: "both-ws-03",
            colors: "tttttttttttttrrtrrtttbbrbbrwwtwwwrwwtttboobootttggrggw",
            formulas: ["B' U B F' U' F R U R'"]
        },
        {
            id: "both-ws-04",
            colors: "tttttttttttttrrtrrtttbbtbbtwwtwwwwwbtttroowootttggbggr",
            formulas: ["L U2 F U' F' L' R U R'"]
        },
        {
            id: "both-ws-05",
            colors: "tttttttttttttrrtrrtttbbtbbtwwtwwwwwbtttboowootttggrggr",
            formulas: ["L U' L' R U R' F' U' F"]
        },
        {
            id: "both-ws-06",
            colors: "ttttttwtttttrrtrrtrbbrbbtbbtwwwwwwwtttgoogooottttggtgg",
            formulas: ["R' F U' F' R"]
        }

    ]
};

var section9 = {
    header: "Intuitive F2L variations",
    algorithms: [
        {
            id: "int-fl2-00",
            colors: "ttttttttttttbrrrrrtttbbrbbbwwwwwwwwwtttooooootttgggggg",
            formulas: ["R U' R' U (R' F R F') (R' F R F') R U' R'", "R' F R F' R U' R' U R U' R' U2 R U' R'"]
        },
        {
            id: "int-fl2-01",
            colors: "tttttttbwbtttrrtrrtrrbbtbbtwwtwwwwwwtttooooootttgggggg",
            formulas: ["U2 R2 U2 R' U' R U' R2"]
        },
        {
            id: "int-fl2-02",
            colors: "tbttttttttttrrrrrrtttbbtbbbwwwwwwwwwtttooooootrtgggggg",
            formulas: ["F' R U R' U' R' F R"]
        },
        {
            id: "int-fl2-03",
            colors: "tttttrttwbbttrrtrrttrbbtbbtwwtwwwwwwtttpppppptttgggggg",
            formulas: ["F U R U' R' F' R U' R'"]
        }


    ]
};

var url = "http://cube.crider.co.uk/visualcube.php?fmt=svg&size=140&r=y30x-30&cc=n&co=15&fo=35&bg=888888&fo=100&fc=";

var formulaMap = { "sections": [ section0, section1, section2, section3, section4, section5, section6, section7,
    section8, section9 ] };

var template = "{{#sections}}<div class='section'><h3>{{header}}</h3>" +
    "<div class='section'>" +
    "{{#algorithms}} " +
    "  <div class='cube1'>" +
    "    <a href='" + url + "{{colors}}'>" +
    "      <img src='pics/{{id}}.svg'/>" +
    "    </a>" +
    "    <ul>{{#formulas}}" +
    "      <li>{{.}}</li>{{/formulas}}" +
    "    </ul>" +
    "</div>" +
    "{{/algorithms}}" +
    "</div></div>{{/sections}}";
var render = Mustache.render(template, formulaMap);
document.getElementById("target").innerHTML = render;
