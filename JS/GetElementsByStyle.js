const getElementsByStyle = (prop, value) => {
    let res = [];

    const traverse = (node) => {
        if(!node) return;

        for (let i=0; i<node.children.length; i++){
            let element = node.children[i];

            const elementStyle = getComputedStyle(element);

            if(elementStyle.getPropertyValue(prop) === value){
                res.push(element);
            }

            if(element.hasChildNodes()){
                traverse(element);
            }
        }
    }

    if (document.body.hasChildNodes()){
        traverse(document.body);
    }
    return res;
}