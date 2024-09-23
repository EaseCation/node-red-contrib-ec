module.exports = function(RED) {
    function ECTimerNode(config) {
        RED.nodes.createNode(this, config);
        this.interval = config.interval;
        this.defaultState = config.defaultState;
        let node = this;
        let intervalId;

        function startTimer() {
            if (node.defaultState === "on") {
                intervalId = setInterval(() => {
                    node.send({ payload: "timer_tick" });
                }, node.interval);
            }
        }

        node.on('input', function(msg) {
            if (msg.payload === 'toggle') {
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                } else {
                    startTimer();
                }
            }
        });

        startTimer();
    }
    RED.nodes.registerType("ec-timer", ECTimerNode);
}