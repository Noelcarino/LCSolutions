/****************************************************************
    Date: 06/05/2020
    LC: #0004 - Hard - Median of Two Sorted Arrays
    Description:
        There are two sorted arrays nums1 and nums2 of size m and n respectively.

        Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

        You may assume nums1 and nums2 cannot be both empty.

    Example:
        nums1 = [1, 3]
        nums2 = [2]

        The median is 2.0
****************************************************************/

var findMedianSortedArrays = function(nums1, nums2) {
    var combinedArray;
    if (nums1.length !== 0 && nums2.length !== 0) combinedArray = nums1.concat(nums2);
    if (nums1.length === 0 || nums2.length === 0){
      if (nums1.length === 0){
        nums2.sort(function(a,b){return a-b});
        if (nums2.length % 2 === 0 && nums2.length > 2){
          return ( nums2[ (nums2.length / 2) - 1 ] + nums2[ (nums2.length / 2) ]) / 2
        } else if (nums2.length % 2 !== 0 && nums2.length > 2) {
          return nums2[(nums2.length + 1) / 2 -1];
        }
        if (nums2.length === 1) return nums2[0];
        if (nums2.length === 2) {
          return (nums2[0] + nums2[1]) / 2;
        }
      }
      if (nums2.length === 0){
        nums1.sort(function(a,b){return a,b});
        if (nums1.length % 2 === 0 && nums1.length > 2){
          return (nums1[(nums1.length / 2) - 1] + nums1[(nums1.length / 2)]) / 2
        } else if (nums1.length % 2 !== 0 && nums1.length > 2){
          return nums1[(nums1.length + 1) / 2-1]
        }
        if (nums1.length === 1) return nums1[0];
        if (nums1.length === 2) {
          return (nums1[0] + nums1[1]) / 2;
        }
      }
    }
    combinedArray.sort(function(a,b){return a-b});
    if ((nums1.length + nums2.length) % 2 === 0){
       return (combinedArray[(combinedArray.length / 2 ) - 1] + combinedArray[(combinedArray.length/2)]) / 2
    } else {
      return combinedArray[(combinedArray.length + 1) / 2 - 1];
    }
};