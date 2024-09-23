module.exports = function(RED) {
    function ECTerminateNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-terminate", ECTerminateNode);
}