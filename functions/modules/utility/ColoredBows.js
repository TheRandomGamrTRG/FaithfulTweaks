const path = require('path');

// Module Data
const moduleData = {
    format654: {
        packFilesPath: "modules/utility/ColoredBows/",
        files: [
            // Bow
            {
                name: "bow.png",
                inPackName: "bow.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_0.png",
                inPackName: "bow_pulling_0.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_1.png",
                inPackName: "bow_pulling_1.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "bow_pulling_2.png",
                inPackName: "bow_pulling_2.png",
                path: "assets/minecraft/textures/item"
            },
            // Crossbow
            {
                name: "crossbow_standby.png",
                inPackName: "crossbow_standby.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_0.png",
                inPackName: "crossbow_pulling_0.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_1.png",
                inPackName: "crossbow_pulling_1.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_pulling_2.png",
                inPackName: "crossbow_pulling_2.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_arrow.png",
                inPackName: "crossbow_arrow.png",
                path: "assets/minecraft/textures/item"
            },
            {
                name: "crossbow_firework.png",
                inPackName: "crossbow_firework.png",
                path: "assets/minecraft/textures/item"
            },
        ]
    },
    format321: {
        packFilesPath: "modules/utility/ColoredBows/",
        files: [
            {
                name: "bow_pulling_0.png",
                inPackName: "bow_pulling_0.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow_pulling_1.png",
                inPackName: "bow_pulling_1.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow_pulling_2.png",
                inPackName: "bow_pulling_2.png",
                path: "assets/minecraft/textures/items"
            },
            {
                name: "bow.png",
                inPackName: "bow_standby.png",
                path: "assets/minecraft/textures/items"
            },
        ]
    },
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 1 || format === 2 || format === 3) {
        formatData = moduleData.format321
    } else if (format === 4 || format === 5 || format === 6) {
        formatData = moduleData.format654
    } else {
        console.log('format not addressed');
        return;
    }

    // Add each bow to file
    const promises = formatData.files.map(async (fileData, id) => {
        await bucket.file(path.join("packfiles", formatData.packFilesPath, fileData.name)).download().then((data) => {
            return archive.append(data[0], {name: path.join(fileData.path, fileData.inPackName)});
        });
    });
    await Promise.all(promises);
}