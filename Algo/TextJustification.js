var fullJustify = function(words, maxWidth) {
    let output = [];
    let line = [];
    let lineLetters = 0;

    for (let word of words){

        if (word.length + line.length + lineLetters > maxWidth) {
            for (let i=0; i< maxWidth-lineLetters; i++) {
                const deno = (line.length - 1 || 1);
                console.log(line.length, deno);
                line[i % deno] += ' ';
            }
            output.push(line.join(""));
            line = [];
            lineLetters = 0;
        }

        line.push(word);
        lineLetters += word.length;
    }

    console.log(output);
    return output.concat(line.join(" ").padEnd(maxWidth));

};

let words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16;
console.log(fullJustify(words, maxWidth));

words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16;
console.log(fullJustify(words, maxWidth));