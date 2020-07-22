// Firebase
const admin = require('firebase-admin');
const firebaseApp = require('./firebaseadmin.js');

// async for each
const asyncForEach = require('./asyncForEach.js');

// Modules
const obsidianBG = require('./modules/UIBackgrounds/obsidianBG.js');
const SlicedSwords = require('./modules/SlicedSwords.js');
const LowShield = require('./modules/LowShield.js');
const NoVignette = require('./modules/NoVignette.js');

// Storage bucket
const bucket = admin.storage().bucket();

// Figure out which modules to add
const addModules = async function(format, archive, modules){
    if (format === 1) {
        // FORMAT 1
        await asyncForEach(modules, async (modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                await SlicedSwords.addToFile(SlicedSwords.format321, archive, bucket);
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                await obsidianBG.addToFile(obsidianBG.format321, archive, bucket);
            } else if (modName === NoVignette.name) {
                // No Vignette
                await NoVignette.addToFile(NoVignette.format54321, archive, bucket);
            } else {
                console.log(modName +" is not a real module.");
            }
        });
    } else if (format === 2) {
        // FORMAT 2
        await asyncForEach(modules, async (modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                await SlicedSwords.addToFile(SlicedSwords.format321, archive, bucket);
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                await obsidianBG.addToFile(obsidianBG.format321, archive, bucket);
            } else if (modName === LowShield.name) {
                // Low Shield
                await LowShield.addToFile(LowShield.format5432, archive, bucket);
            } else if (modName === NoVignette.name) {
                // No Vignette
                await NoVignette.addToFile(NoVignette.format54321, archive, bucket);
            } else {
                console.log(modName +" is not a real module.");
            }
        });
    } else if (format === 3) {
        // FORMAT 3
        await asyncForEach(modules, async (modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                await SlicedSwords.addToFile(SlicedSwords.format321, archive, bucket);
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                await obsidianBG.addToFile(obsidianBG.format321, archive, bucket);
            } else if (modName === LowShield.name) {
                // Low Shield
                await LowShield.addToFile(LowShield.format5432, archive, bucket);
            } else if (modName === NoVignette.name) {
                // No Vignette
                await NoVignette.addToFile(NoVignette.format54321, archive, bucket);
            } else {
                console.log(modName +" is not a real module.");
            }
        });
    } else if (format === 4) {
        // FORMAT 4
        await asyncForEach(modules, async (modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                await SlicedSwords.addToFile(SlicedSwords.format4, archive, bucket);
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                await obsidianBG.addToFile(obsidianBG.format54, archive, bucket);
            } else if (modName === LowShield.name) {
                // Low Shield
                await LowShield.addToFile(LowShield.format5432, archive, bucket);
            } else if (modName === NoVignette.name) {
                // No Vignette
                await NoVignette.addToFile(NoVignette.format54321, archive, bucket);
            } else {
                console.log(modName +" is not a real module.");
            }
        });
    } else if (format === 5) {
        // FORMAT 5
        await asyncForEach(modules, async (modName) => {
            if (modName === SlicedSwords.name) {
                // Sliced Swords
                await SlicedSwords.addToFile(SlicedSwords.format5, archive, bucket);
            } else if (modName === obsidianBG.name) {
                // obsidianBG
                await obsidianBG.addToFile(obsidianBG.format54, archive, bucket);
            } else if (modName === LowShield.name) {
                // Low Shield
                await LowShield.addToFile(LowShield.format5432, archive, bucket);
            } else if (modName === NoVignette.name) {
                // No Vignette
                await NoVignette.addToFile(NoVignette.format54321, archive, bucket);
            } else {
                console.log(modName +" is not a real module.");
            }
        });
    }
    return;
}

// ----- EXPORTS -----
module.exports = {
    addModules: addModules
};