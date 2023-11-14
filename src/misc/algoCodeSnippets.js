export const codeSnippets = {
  indexed: {
    reverseArr: {
      python: `def reverseArr(arr):
  i = 0 
  j = len(arr) - 1

  while i < j:
    arr[i], arr[j] = arr[j], arr[i]
    i += 1
    j -= 1`,
      javascript: `const reverseArr = (arr) => {
  let i = 0;
  let j = arr.length - 1;
    
  while (i < j) {
    const temp = arr[i];
    arr[i++] = arr[j]
    arr[j--] = temp
  }
}`,
    },
    reverseStr: {
      python: `def reverseStr(str):
  arr = list(str)
  reverseArr(arr)
  return ''.join(arr)`,
      javascript: `const reverseStr = (str) => {
  const arr = str.split("")
  reverseArr(arr)
  return arr.join("")
}`,
    },
    palindrome: {
      python: `def isPalindrome(word):
      i = 0
      j = len(word) - 1
    
      while (i < j): 
        if (word[i] != word[j]):
          return False
        i += 1
        j -= 1
      return True`,
      javascript: `function isPalindrome(word) {
      let i = 0;
      let j = word.length - 1;
    
      while (i < j) {
        if (word.charAt(i++) != word.charAt(j--)) {
            return false;
        }
      }
      return true;
    }`,
    },
    sortedAddends: {
      python: `def hasAddends(arr, target): 
  left = 0;
  right = len(arr) - 1;

  while (left < right):
    curr = arr[left] + arr[right]
    if (curr == target):
      return True
    if (curr > target):
      right -= 1
    else:
      left += 1
  return False`,
      javascript: `const hasAddends = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let curr = arr[left] + arr[right];
    if (curr === target) {
      return true;
    }
    if (curr > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}`,
    },
    subsequence: {
      python: `def isSubsequence(s, t): 
  i = j = 0

  while (i < len(s) and j < len(t)):
    if (s[i] == s[j]):
      i += 1
    j += 1

  return i == len(s)`,
      javascript: `const isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }

  return i === s.length;
}`,
    },
  },
};
