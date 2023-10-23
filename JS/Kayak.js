const usersList = [
    { name: 'Jason', trips: 10 },
    { name: 'Nivedita', trips: 20 },
    { name: 'Emily', trips: 30 },
  ];
  
  function formatUsers(users, minTrips) {
    const names = users.filter((user) => user.trips >= minTrips).map((user) => user.name);
    
    if (names.length > 1){
      const endStr = names.splice(names.length-1, 1);
      return `${names.join(', ')} and ${endStr}`;
    }
  
    return names.join(' ');
  }
  
  // Jason, Nivedita and Emily
  console.log(formatUsers(usersList, 10)); 
  
  // Nivedita and Emily
  console.log(formatUsers(usersList, 20)); 
  
  // Emily
  console.log(formatUsers(usersList, 25));
  
  // ''
  console.log(formatUsers(usersList, 35));
  
  // first complete splice, append and
  //res = slice the arr 0 -> find (and)
  // combine 1+2
  