module.exports = function (RED) {
    function ECBlockInteractNode(config) {
        RED.nodes.createNode(this, config);
        this.defaultState = config.defaultState;  // 默认开启还是关闭
        this.blockCoords = config.blockCoords;    // 方块坐标
        this.state = this.defaultState === "true";  // 初始状态

        let node = this;

        // 处理输入触发
        node.on('input', function (msg) {
            // 切换开关状态
            node.state = !node.state;
            
            // 根据状态处理方块交互逻辑 (假设是某个实际的交互功能)
            if (node.state) {
                node.status({ fill: "green", shape: "dot", text: `方块激活: ${node.blockCoords}` });
            } else {
                node.status({ fill: "red", shape: "ring", text: `方块关闭: ${node.blockCoords}` });
            }

            // 继续传递消息
            node.send(msg);
        });
    }

    RED.nodes.registerType("ec-block-interact", ECBlockInteractNode);
}