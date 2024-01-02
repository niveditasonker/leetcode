// https://stackblitz.com/edit/recursive-filter-prop?file=index.ts
// perf: https://jsbench.me/8cjrlaine7/1

function flatFilter(nestedProp, compareKey, compareId, arr) {
    return arr.filter(o => {
       const keep = o[compareKey] != compareId;
       if (keep && o[nestedProp]) {
         o[nestedProp] = flatFilter(nestedProp, compareKey, compareId, o[nestedProp]);
       }
       return keep;
     });
   }
   
   const ARRAY = [
     {
       id: 1,
       children: [
         {
           id: 2,
           children: [
             {
               id: 3,
             },
             {
               id: 4,
             },
           ],
         },
         {
           id: 5,
           children: [
             {
               id: 3,
             },
           ],
         },
       ],
     },
   ];
   
   console.log(JSON.stringify(flatFilter('children', 'id', 3, ARRAY), null, 2));
   
   /* result
   
   [
     {
       id: 1,
       children: [
         {
           id: 2,
           children: [
             {
               id: 4,
             },
           ],
         },
         {
           id: 5,
           children: [],
         },
       ],
     },
   ];
   
   */
   