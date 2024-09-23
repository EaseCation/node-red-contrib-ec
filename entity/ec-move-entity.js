module.exports = function(RED) {
    function ECMoveEntityNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-move-entity", ECMoveEntityNode);
}