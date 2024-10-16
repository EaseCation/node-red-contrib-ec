module.exports = function(RED) {
    function ECInitNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-init", ECInitNode);
}