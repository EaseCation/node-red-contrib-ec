module.exports = function(RED) {
    function ECDelayNode(config) {
        RED.nodes.createNode(this, config);
        this.delayTime = config.delayTime;

        let node = this;
        node.on('input', function(msg) {
            setTimeout(() => {
                node.send(msg);  // 延迟后触发
            }, node.delayTime);
        });
    }
    RED.nodes.registerType("ec-delay", ECDelayNode);
}