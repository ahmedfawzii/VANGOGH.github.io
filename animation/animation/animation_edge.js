/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pic1',
                            type: 'image',
                            rect: ['-1012px', '49px', '884px', '655px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic1.jpg",'0px','0px']
                        },
                        {
                            id: 'pic2',
                            type: 'image',
                            rect: ['1417px', '8px', '500px', '684px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic2.jpg",'0px','0px']
                        },
                        {
                            id: 'pic3',
                            type: 'image',
                            rect: ['1393px', '14px', '800px', '673px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic3.jpg",'0px','0px']
                        },
                        {
                            id: 'pic4',
                            type: 'image',
                            rect: ['1371px', '19px', '998px', '664px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic4.jpg",'0px','0px']
                        },
                        {
                            id: 'pic5',
                            type: 'image',
                            rect: ['1398px', '18px', '741px', '664px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic5.jpg",'0px','0px']
                        },
                        {
                            id: 'pic6',
                            type: 'image',
                            rect: ['1409px', '9px', '477px', '684px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic6.jpg",'0px','0px']
                        },
                        {
                            id: 'pic7',
                            type: 'image',
                            rect: ['1329px', '23px', '951px', '655px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic7.jpg",'0px','0px']
                        },
                        {
                            id: 'pic8',
                            type: 'image',
                            rect: ['1365px', '9px', '826px', '685px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic8.jpg",'0px','0px']
                        },
                        {
                            id: 'pic9',
                            type: 'image',
                            rect: ['1399px', '9px', '817px', '686px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic9.jpg",'0px','0px']
                        },
                        {
                            id: 'pic10',
                            type: 'image',
                            rect: ['1396px', '16px', '485px', '673px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic10.jpg",'0px','0px']
                        },
                        {
                            id: 'play',
                            type: 'text',
                            rect: ['385px', '784px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​play</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [68, "px"], "rgba(255,255,255,1)", "200", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "uppercase"]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['337px', '768px', '268px', '110px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(162,162,162,0.13)"],
                            stroke: [0,"rgba(255,255,255,1.00)","none"]
                        },
                        {
                            id: 'RoundRectCopy',
                            type: 'rect',
                            rect: ['702px', '768px', '268px', '110px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(162,162,162,0.13)"],
                            stroke: [0,"rgba(255,255,255,1.00)","none"]
                        },
                        {
                            id: 'stop',
                            type: 'text',
                            rect: ['740px', '784px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​stop</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [68, "px"], "rgba(255,255,255,1)", "200", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "uppercase"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1290px', '904px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 21000,
                    autoPlay: false,
                    labels: {
                        "Label 1": 15811
                    },
                    data: [
                        [
                            "eid35",
                            "left",
                            6000,
                            1000,
                            "linear",
                            "${pic4}",
                            '1371px',
                            '146px'
                        ],
                        [
                            "eid37",
                            "left",
                            8000,
                            1000,
                            "linear",
                            "${pic4}",
                            '146px',
                            '-1114px'
                        ],
                        [
                            "eid26",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${pic2}",
                            '1417px',
                            '395px'
                        ],
                        [
                            "eid28",
                            "left",
                            4000,
                            1000,
                            "linear",
                            "${pic2}",
                            '395px',
                            '-748px'
                        ],
                        [
                            "eid56",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${pic6}",
                            '1409px',
                            '406px'
                        ],
                        [
                            "eid58",
                            "left",
                            12000,
                            1000,
                            "linear",
                            "${pic6}",
                            '406px',
                            '-837px'
                        ],
                        [
                            "eid31",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${pic3}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid48",
                            "width",
                            9000,
                            0,
                            "linear",
                            "${pic1}",
                            '884px',
                            '884px'
                        ],
                        [
                            "eid68",
                            "left",
                            16000,
                            1000,
                            "linear",
                            "${pic9}",
                            '1399px',
                            '236px'
                        ],
                        [
                            "eid70",
                            "left",
                            18000,
                            1000,
                            "linear",
                            "${pic9}",
                            '236px',
                            '-1246px'
                        ],
                        [
                            "eid64",
                            "left",
                            14000,
                            1000,
                            "linear",
                            "${pic8}",
                            '1365px',
                            '232px'
                        ],
                        [
                            "eid66",
                            "left",
                            16000,
                            1000,
                            "linear",
                            "${pic8}",
                            '232px',
                            '-1022px'
                        ],
                        [
                            "eid20",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${pic1}",
                            '49px',
                            '49px'
                        ],
                        [
                            "eid52",
                            "left",
                            8000,
                            1000,
                            "linear",
                            "${pic5}",
                            '1398px',
                            '274px'
                        ],
                        [
                            "eid54",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${pic5}",
                            '274px',
                            '-1003px'
                        ],
                        [
                            "eid72",
                            "left",
                            18000,
                            1000,
                            "linear",
                            "${pic10}",
                            '1396px',
                            '403px'
                        ],
                        [
                            "eid75",
                            "left",
                            20000,
                            1000,
                            "linear",
                            "${pic10}",
                            '403px',
                            '-723px'
                        ],
                        [
                            "eid19",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${pic1}",
                            '1410px',
                            '225px'
                        ],
                        [
                            "eid23",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${pic1}",
                            '225px',
                            '-1012px'
                        ],
                        [
                            "eid73",
                            "top",
                            19000,
                            0,
                            "linear",
                            "${pic10}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid60",
                            "left",
                            12000,
                            1000,
                            "linear",
                            "${pic7}",
                            '1329px',
                            '169px'
                        ],
                        [
                            "eid62",
                            "left",
                            14000,
                            1000,
                            "linear",
                            "${pic7}",
                            '169px',
                            '-1331px'
                        ],
                        [
                            "eid30",
                            "left",
                            4000,
                            1000,
                            "linear",
                            "${pic3}",
                            '1393px',
                            '245px'
                        ],
                        [
                            "eid33",
                            "left",
                            6000,
                            1000,
                            "linear",
                            "${pic3}",
                            '245px',
                            '-1221px'
                        ],
                        [
                            "eid47",
                            "height",
                            9000,
                            0,
                            "linear",
                            "${pic1}",
                            '655px',
                            '655px'
                        ],
                        [
                            "eid38",
                            "top",
                            9000,
                            0,
                            "linear",
                            "${pic4}",
                            '19px',
                            '19px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation_edgeActions.js");
})("EDGE-447268065");
