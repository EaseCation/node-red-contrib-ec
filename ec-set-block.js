module.exports = function(RED) {
    function ECSetBlockNode(config) {
        RED.nodes.createNode(this, config);
        this.blockRange = config.blockRange;
        this.blockId = config.blockId;

        let node = this;
        node.on('input', function(msg) {
            setBlocksInRange(node.blockRange, node.blockId);  // 假设是个设置方块的函数
            node.send(msg);
        });
    }
    RED.nodes.registerType("ec-set-block", ECSetBlockNode);
}