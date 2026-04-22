const longestSubstring = (s: string): number => {
  let left = 0;
  let maxLength = 0;
  if (s.length === 0) return 0;
  // for unique charecter
  const set = new Set<String>();
  for (let right = 0; right < s.length; right++) {
    // shrink the duplicate value
    while (set.has(s[right]!)) {
      set.delete(s[left]!);
      left++;
    }
    set.add(s[right]!);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

const str: string = "abcabcbb";
const output = longestSubstring(str);
console.log("output :>> ", output);
