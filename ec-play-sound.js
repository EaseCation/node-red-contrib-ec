module.exports = function(RED) {
    function ECPlaySoundNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-play-sound", ECPlaySoundNode);
}