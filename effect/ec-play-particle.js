module.exports = function(RED) {
    function ECPlayParticleNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-play-particle", ECPlayParticleNode);
}