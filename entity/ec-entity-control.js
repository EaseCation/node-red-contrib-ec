module.exports = function(RED) {
    function ECEntityControlNode(config) {
        RED.nodes.createNode(this, config);
        this.entityTag = config.entityTag;
        this.controlType = config.controlType;
        this.value = config.value;
    }
    RED.nodes.registerType("ec-entity-control", ECEntityControlNode);
}
