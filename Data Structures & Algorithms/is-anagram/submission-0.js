class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Quick check: If they aren't the same length, they can't be anagrams
        if (s.length !== t.length) {
            return false;
        }

        //sort alphabetically
        const sortedS = s.split("").sort().join("");
        const sortedT = t.split("").sort().join("");

        return sortedS === sortedT;
    }
}
