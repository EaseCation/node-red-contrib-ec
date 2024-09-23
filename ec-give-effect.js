module.exports = function(RED) {
    function ECGiveEffectNode(config) {
        RED.nodes.createNode(this, config);
        this.coordRange = config.coordRange;      // 坐标范围
        this.effectId = config.effectId;          // 状态效果ID
        this.effectLevel = config.effectLevel;    // 效果等级
        this.duration = config.duration;          // 效果持续时间
        this.showParticles = config.showParticles === "true";  // 是否显示粒子效果
        let node = this;

        node.on('input', function(msg) {
            // 模拟给予状态效果的逻辑
            giveEffect(node.coordRange, node.effectId, node.effectLevel, node.duration, node.showParticles);
            node.status({ fill: "green", shape: "dot", text: `状态效果: ${node.effectId}` });
            node.send(msg); // 继续传递消息
        });
    }

    RED.nodes.registerType("ec-give-effect", ECGiveEffectNode);
}