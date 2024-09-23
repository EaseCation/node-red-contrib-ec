module.exports = function(RED) {
    function ECTeleportPlayerNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-teleport-player", ECTeleportPlayerNode);
}