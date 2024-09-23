module.exports = function(RED) {
    function ECTriggerAreaNode(config) {
        RED.nodes.createNode(this, config);
        this.coordRange = config.coordRange;
        this.triggerCondition = config.triggerCondition;

        let node = this;
        node.on('input', function(msg) {
            const playerInRange = checkPlayerInRange(node.coordRange); // 模拟玩家检测逻辑
            if (playerInRange) {
                if (node.triggerCondition === 'once') {
                    node.send(msg); // 触发一次
                } else if (node.triggerCondition === 'every') {
                    node.send(msg); // 每次触发
                }
            }
        });
    }
    RED.nodes.registerType("ec-trigger-area", ECTriggerAreaNode);
}