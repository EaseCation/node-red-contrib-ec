module.exports = function(RED) {
    function ECSetBlockNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-set-block", ECSetBlockNode);
}