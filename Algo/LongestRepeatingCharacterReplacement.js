var characterReplacement = function(s, k) {
    let hashmap = {}; // hasmap to keep track of frequency of letters
    let maxFrequency= 0; // to keep track of char with max frequency
    let longest = 0; //variable to track the size of the longest valid window we encounter

    let left = right = 0;

    while (right < s.length){
        const rightCharacter = s.charAt(right);
        hashmap[rightCharacter] = hashmap[rightCharacter]+1 || 1;

        maxFrequency = Math.max(maxFrequency, hashmap[rightCharacter]);

        // A window is valid if the length of the window,
        // minus the count of the most frequent character we've ever seen,
        // is less than or equal to k. 
        // That means if the current window has the most frequent character in it, 
        // and we did k replacements of the other letters in that window,
        // we would have enough k replacements to make the entire window that most frequent letter.
        // 
        // If the current window is not valid, we want to increment the left pointer until we get
        // to a valid window
        //
        // Each time we do this, decrement the frequency of the character we're truncating,
        // since it's no longer part of the window.
        // 
        // We do not, however, have to update highestFrequency, 
        // because we'll only get a longer valid window when we encounter a letter that is 
        // more frequent in its window than the last highestFrequency count was.
        // In all other cases, even when we find valid windows, they will necessarily be shorter
        // than the last time the highestFrequency gave us a valid result.
        while ((right - left + 1) - maxFrequency > k) {
            const leftChar = s.charAt(left);
            hashmap[leftChar] -= 1;
            left++;
        }

        //Once we have a valid window, check if it's longer than the previous longest valid window,
        // and store that in our longest variable.
        let window = right - left + 1;
        longest = Math.max(longest, window);
        right++;
    }

    return longest;
};

let s = "ABAB", k = 2
console.log(characterReplacement(s, k));

s = "AABABBA", k = 1;
console.log(characterReplacement(s, k));