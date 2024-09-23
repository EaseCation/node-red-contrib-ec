module.exports = function(RED) {
    function ECTerminateNode(config) {
        RED.nodes.createNode(this, config);
        this.interval = config.interval;
        this.defaultState = config.defaultState;
        let node = this;

        node.on('input', function(msg) {
            node.send(msg);
        });
    }
    RED.nodes.registerType("ec-terminate", ECTerminateNode);
}