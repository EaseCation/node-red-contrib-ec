module.exports = function(RED) {
    function ECEventNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-event", ECEventNode);
}