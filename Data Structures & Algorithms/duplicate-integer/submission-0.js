class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // 1. Initialize your Set
        const duplicates = new Set();

        // 2. Loop through the numbers just like you did
        for (let num of nums) {
            if (duplicates.has(num)) {
                return true;
            }
            duplicates.add(num);
        }

        // 3. If no duplicates are found
        return false;
    }
}