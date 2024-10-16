module.exports = function(RED) {
    function ECHandlerNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-handler", ECHandlerNode);
}