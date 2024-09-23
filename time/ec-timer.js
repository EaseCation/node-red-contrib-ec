module.exports = function(RED) {
    function ECTimerNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-timer", ECTimerNode);
}