

var decodeMessage = function(key, message) {
    let keyMap = new Map();
    let j=0;
    let secret = '';

    for (let i=0;i<key.length;i++){
        if (key.charAt(i) != ' ' && !(keyMap.has(key.charAt(i)))) {
            keyMap.set(key.charAt(i), String.fromCharCode(97 + j));
            j++;
        }
    }

    keyMap.set(' ', ' ');

    for (let i=0;i<message.length;i++){
        secret += keyMap.get(message.charAt(i));
    }

    // console.log(secret);
    return secret;
    
};



let key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
console.log(decodeMessage(key, message));