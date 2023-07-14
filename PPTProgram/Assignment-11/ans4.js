function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];
  
    // Detect the intersection point of the two pointers
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    // Move one pointer to the start and keep the other at the intersection
    slow = nums[0];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
  
    return slow;
  }
  