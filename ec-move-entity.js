module.exports = function(RED) {
    function ECMoveEntityNode(config) {
        RED.nodes.createNode(this, config);
        this.track = config.track;
        this.speed = config.speed;

        let node = this;
        node.on('input', function(msg) {
            moveEntityAlongTrack(node.track, node.speed);  // 假设是个移动实体的函数
            node.send(msg);
        });
    }
    RED.nodes.registerType("ec-move-entity", ECMoveEntityNode);
}