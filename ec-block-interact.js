module.exports = function (RED) {
    function ECBlockInteractNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-block-interact", ECBlockInteractNode);
}