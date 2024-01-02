const input = [
    ['name', 'labels'],
    ['Matt', 'board certified,primary care,male,takes_new_patients'],
    ['Belda', 'board certified,internal medicine,female, sanctioned'],
    ['Wyatt', 'primary care,male,takes_new_patients'],
    ['Emma', 'board certified,oncology'],
    ['Aaron', 'sanctioned,primary care'],
    ['Josh', 'board certified, internal medicine, takes_new_patients'],
    ['Adrien', 'oncology,board certified, takes_new_patients'],
    ['Andy', 'internal medicine,male,sanctioned']
  ];
  
  
  
  function findBoardCertifiedOncologists(input){
      const res = [];
      
      for (const [name, labels] of input){
          if (labels.includes('board certified') && labels.includes('oncology')){
              res.push(name);
          }
      }
      
      return res;
  }
  
//   console.log(findBoardCertifiedOncologists(input));
  
  function findBoardCertifiedInternalMedicine(input){
      const map = new Map();
      
      input = input.slice(1);
      
      for (const [name, labels] of input){
          const label = labels.split(',');

          for (const lbl of label){
              if (!map.has(lbl)){
                  map.set(lbl, []);
              }
          
              map.get(lbl).push(name);
          }
  
      }
      
      console.log(map);
      
      
      const doc1 = map.get('internal medicine');
      const doc2 = map.get('board certified');
      console.log(doc2);
      console.log(doc1);
      return doc1.filter(value => doc2.includes(value));;

    
  }
  
  console.log(findBoardCertifiedInternalMedicine(input));