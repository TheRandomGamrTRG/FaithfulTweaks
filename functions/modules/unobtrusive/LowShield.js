const path = require('path');

const moduleData = {
    format65432: {
        files: [
            {
                data: `{
                    "comment": "Made by Stridey",
                    "parent": "builtin/entity",
                    "gui_light": "front",
                    "textures": {
                        "particle": "block/oak_log"
                    },
                    "display": {
                        "thirdperson_righthand": {
                            "rotation": [
                                0,
                                90,
                                0
                            ],
                            "translation": [
                                10.51,
                                6,
                                -4
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ]
                        },
                        "thirdperson_lefthand": {
                            "rotation": [
                                0,
                                90,
                                0
                            ],
                            "translation": [
                                10.51,
                                6,
                                12
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ]
                        },
                        "firstperson_righthand": {
                            "rotation": [ 0, 180, -5 ],
                            "translation": [ -15, 2.25, -11 ],
                            "scale": [ 1.25, 1.25, 1.25 ]
                        },
                        "firstperson_lefthand": {
                            "rotation": [
                                0,
                                180,
                                -5
                            ],
                            "translation": [
                                5,
                                4,
                                -11
                            ],
                            "scale": [
                                1.25,
                                1.25,
                                1.25
                            ]
                        },
                        "gui": {
                            "rotation": [
                                0,
                                0,
                                0
                            ],
                            "translation": [
                                4.9,
                                5.3,
                                0
                            ],
                            "scale": [
                                0.65,
                                0.65,
                                0.65
                            ]
                        }
                    }
                }`,
                inPackName: "shield_blocking.json",
                path: "assets/minecraft/models/item"
            },
            {
                data: `{
                    "comment": "Made by Stridey",
                    "parent": "builtin/entity",
                    "gui_light": "front",
                    "textures": {
                        "particle": "block/oak_log"
                    },
                    "display": {
                        "thirdperson_righthand": {
                            "rotation": [
                                0,
                                90,
                                0
                            ],
                            "translation": [
                                10.51,
                                6,
                                -4
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ]
                        },
                        "thirdperson_lefthand": {
                            "rotation": [
                                0,
                                90,
                                0
                            ],
                            "translation": [
                                10.51,
                                6,
                                12
                            ],
                            "scale": [
                                1,
                                1,
                                1
                            ]
                        },
                        "firstperson_righthand": {
                            "rotation": [
                                0,
                                180,
                                5
                            ],
                            "translation": [
                                -10,
                                -1,
                                -10
                            ],
                            "scale": [
                                1.25,
                                1.25,
                                1.25
                            ]
                        },
                        "firstperson_lefthand": {
                            "rotation": [
                                0,
                                180,
                                5
                            ],
                            "translation": [
                                10,
                                -3,
                                -10
                            ],
                            "scale": [
                                1.25,
                                1.25,
                                1.25
                            ]
                        },
                        "gui": {
                            "rotation": [
                                0,
                                0,
                                0
                            ],
                            "translation": [
                                4.9,
                                5.3,
                                0
                            ],
                            "scale": [
                                0.65,
                                0.65,
                                0.65
                            ]
                        },
                        "fixed": {
                            "rotation": [
                                0,
                                180,
                                0
                            ],
                            "translation": [
                                -2,
                                4,
                                -5
                            ],
                            "scale": [
                                0.5,
                                0.5,
                                0.5
                            ]
                        },
                        "ground": {
                            "rotation": [
                                0,
                                0,
                                0
                            ],
                            "translation": [
                                4,
                                4,
                                2
                            ],
                            "scale": [
                                0.25,
                                0.25,
                                0.25
                            ]
                        }
                    },
                    "overrides": [
                        {
                            "predicate": {
                                "blocking": 1
                            },
                            "model": "item/shield_blocking"
                        }
                    ]
                }`,
                inPackName: "shield.json",
                path: "assets/minecraft/models/item"
            },
        ]
    },
}

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 2 || format === 3 || format === 4 || format === 5 || format === 6) {
        formatData = moduleData.format65432
    } else {
        console.log('format not addressed');
        return;
    }

    // Add each json file to zip
    formatData.files.forEach((fileData) => {
        archive.append(fileData.data, {name: path.join(fileData.path, fileData.inPackName)});
    });
    return;
}