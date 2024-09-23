module.exports = function(RED) {
    function ECCustomUINode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-custom-ui", ECCustomUINode);
}