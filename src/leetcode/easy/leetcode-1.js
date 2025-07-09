// 1. Two Sum
/*
Why is it O(1)?
map.has() and map.set() in JavaScript’s Map are average-case O(1) operations due to underlying hashing.

So for each of the n elements, you do constant-time work.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(nums[i], i);
  }
};
