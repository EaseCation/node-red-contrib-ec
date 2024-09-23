module.exports = function(RED) {
    function ECPlaySoundNode(config) {
        RED.nodes.createNode(this, config);
        this.playLocation = config.playLocation; // 播放位置
        this.soundId = config.soundId;           // 音效ID
        this.volume = config.volume;             // 音量
        this.pitch = config.pitch;               // 音调
        let node = this;

        node.on('input', function(msg) {
            // 模拟播放音效的逻辑
            playSound(node.playLocation, node.soundId, node.volume, node.pitch); 
            node.status({ fill: "blue", shape: "ring", text: `播放音效: ${node.soundId}` });
            node.send(msg); // 继续传递消息
        });
    }

    RED.nodes.registerType("ec-play-sound", ECPlaySoundNode);
}