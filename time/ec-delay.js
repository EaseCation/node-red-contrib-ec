module.exports = function(RED) {
    function ECDelayNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-delay", ECDelayNode);
}