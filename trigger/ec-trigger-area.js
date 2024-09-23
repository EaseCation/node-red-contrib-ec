module.exports = function(RED) {
    function ECTriggerAreaNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-trigger-area", ECTriggerAreaNode);
}