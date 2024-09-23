module.exports = function(RED) {
    function ECGiveEffectNode(config) {
        RED.nodes.createNode(this, config);
    }
    RED.nodes.registerType("ec-give-effect", ECGiveEffectNode);
}