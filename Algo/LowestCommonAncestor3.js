// O(N)
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/1183723/javascript-lca-solution-explained-time-o-n-96-space-o-1-85/

// Different from the lowestCommonAncestor because this one has reference to parent node
var lowestCommonAncestor = function(p, q) {
    let depthP = getDepth(p);
    let depthQ = getDepth(q);

    while(depthP !== depthQ){
        if(depthP >depthQ){
            p = p.parent;
            depthP--;
        } else {
            q = q.parent;
            depthQ--;
        }
    }

    while(p !== q){
        p = p.parent;
        q = q.parent;
    }

    return p;
};

function getDepth(node){
    let depth = 0;

    while(node){
        node = node.parent;
        depth++;
    }

    return depth;
}

// 2nd solution
//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/1111595/javascript-two-pointers-solution-80ms/