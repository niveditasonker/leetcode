// https://github.com/stripesinterview/patreon_interview/blob/main/Patreon%20Interview.py

var ipToCIDR = function(ip, n) {
    if (n === 0) return [];
    if (n === 1) return [ip.concat('/32')]; 
    
    // Helper Functions
    const padZeros = (str, length) =>
        Array(length - str.length).fill(0).concat(str.split('')).join('')
    
    const stringIpToBinary = (ip) =>
        ip.split('.').reduce( (ipBiStr,ipSection) => 
                ipBiStr + padZeros( (+ipSection).toString(2), 8 )
            ,'')
    
    const biIpToStr = (biIp) =>
        biIp.match(/.{8}/g).map(d => parseInt(d,2)).join('.')
    
    // Variables
    let currIpStr = ip,
        l = 32,
        postfix = 0, // index offset count for the postfix (will be subtracted from 32)
        count = 0, // count of ip coverage so far (we'll count up to 'n')
        resArr = [];
    
    while(count < n){
        // Reset postfix value
        postfix = 0;
        
        // Get ip string portion of current block
        let currCIDRStr = currIpStr;
        
        // Convert from ip string to binary
        let tempBiStr = stringIpToBinary(currIpStr);
    
        // while valid string, keep incrementing postfix offset (to get a higher range of ip coverage by increasing the # of bits available to change)
        while (count + 2**++postfix <= n && tempBiStr[l-postfix] !== '1'){}
        
        count += 2**(postfix-1);
        
        // Add CIDR str to result arr
        resArr.push( currCIDRStr + '/' + (Math.min(32,l-postfix+1)).toString() );
        
        // Get new ip for next block
        tempBiStr = parseInt(tempBiStr,2) + 2**(postfix-1);
        
        // Make sure leading zeros aren't eliminated for the 4 byte string
        tempBiStr = padZeros( tempBiStr.toString(2), 32 );
        
        // Set new ip for the next 'while' iteration
        currIpStr = biIpToStr(tempBiStr.toString(2));  
    }
    
    return resArr;
};