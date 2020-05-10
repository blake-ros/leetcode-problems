// Question:

// 2. Add Two Numbers
// Medium

// 7738

// 1986

// Add to List

// Share
// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//   Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.




// Answer:

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let resultTail = result;
  let trailing = 0;
  while (l1 || l2 || trailing) {
    let v1 = l1 !== null ? l1.val : 0;
    let v2 = l2 !== null ? l2.val : 0;
    let val = v1 + v2 + trailing
    trailing = val >= 10 ? 1 : 0;
    val %= 10;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    resultTail.val = val
    resultTail.next = l1 || l2 || trailing ? new ListNode() : null
    resultTail = resultTail.next;
  }

  return result
};
