module.exports = function(RED) {
    function ECTeleportPlayerNode(config) {
        RED.nodes.createNode(this, config);
        this.validRange = config.validRange;
        this.targetCoords = config.targetCoords;

        let node = this;
        node.on('input', function(msg) {
            teleportPlayerInRange(node.validRange, node.targetCoords);  // 假设是传送玩家的函数
            node.send(msg);
        });
    }
    RED.nodes.registerType("ec-teleport-player", ECTeleportPlayerNode);
}