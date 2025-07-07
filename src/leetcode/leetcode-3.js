// 3. Longest Substring Without Repeating Characters


var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let maxLen = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the character is already in the map and its index is within the current window
        if (map.has(currentChar) && map.get(currentChar) >= left) {
            left = map.get(currentChar) + 1; // Move `left` past the last occurrence
        }

        map.set(currentChar, right); // Update the character's latest index
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
