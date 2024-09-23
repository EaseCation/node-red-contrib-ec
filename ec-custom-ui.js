module.exports = function(RED) {
    function ECCustomUINode(config) {
        RED.nodes.createNode(this, config);
        this.uiType = config.uiType;  // "无", "Title", "ModUI"
        this.uiText = config.uiText;  // 本地化 UI 文本

        let node = this;

        // 触发事件时处理输入
        node.on('input', function(msg) {
            // 基于 UI 类型显示不同的消息
            switch (node.uiType) {
                case "Title":
                    node.status({ fill: "blue", shape: "ring", text: `Title: ${node.uiText}` });
                    break;
                case "ModUI":
                    node.status({ fill: "green", shape: "dot", text: `ModUI: ${node.uiText}` });
                    break;
                case "无":
                default:
                    node.status({}); // 清除状态
                    break;
            }
            node.send(msg); // 继续发送消息
        });
    }

    RED.nodes.registerType("ec-custom-ui", ECCustomUINode);
}