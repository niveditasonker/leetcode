function highlightKeywords(html, keywords) {
    // your code here
    const bold = new Array(html.length+1);
    
    keywords.forEach((w) => {
        let start = html.indexOf(w, 0);
        console.log(start, w);

        while(start != -1){
            bold.fill(true, start, start+w.length);
            start = html.indexOf(w, start+1);
            console.log(`start: ${start}`);
        }
    })

    console.log(bold);
}


function highlightKeywords(html, keywords){
    const exp = new RegExp()
}

console.log(highlightKeywords(
    'Hello FrontEnd Lovers', 
    ['Hello', 'Front', 'JavaScript']
));