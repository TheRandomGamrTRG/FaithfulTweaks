const path = require('path');

// Module Data
const moduleData = {
    format654321: {
        packFilesPath: "modules/unobtrusive/NoVignette/",
        file: {
            name: "vignette.png",
            inPackName: "vignette.png",
            path: "assets/minecraft/textures/misc"
        },
    },
};

// Module function
module.exports = async function(format, archive, bucket){
    // Change data based on format
    let formatData;
    if (format === 1 || format === 2 || format === 3 || format === 4 || format === 5 || format === 6) {
        formatData = moduleData.format654321
    } else {
        console.log('format not addressed');
        return;
    }

    // Add blank vignette to file
    await bucket.file(path.join("packfiles", formatData.packFilesPath, formatData.file.name)).download().then((data) => {
        return archive.append(data[0], {name: path.join(formatData.file.path, formatData.file.inPackName)});
    });
    return;
}