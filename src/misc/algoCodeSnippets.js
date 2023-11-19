export const codeSnippets = {
  indexed: {
    reverseArr: {
      python: `def reverseArr(arr):
  i = 0 
  j = len(arr) - 1

  while i < j:
    arr[i], arr[j] = arr[j], arr[i]
    i += 1
    j -= 1

array = [1,2,3,4]
reverseArr(array)
print(array) # [4,3,2,1]`,
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
  return ''.join(arr)

sentence = "Hello World"
print(reverseStr(sentence)) # "dlroW olleH"`,
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
  return True

palindrome = "racecar"
notPalindrome = "foolproof"

print(isPalindrome(palindrome)) # True
print(isPalindrome(notPalindrome)) # False`,
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
  return False

nums = [1, 2, 3, 6, 8, 9, 14, 15]
print(hasAddends(nums, 7)) # True
print(hasAddends(nums, 13)) # False`,
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
    if (s[i] == t[j]):
      i += 1
    j += 1

  return i == len(s)

subSeq = "ape"
string = "apple"
print(isSubsequence(subSeq, string)) # True

badSubSeq = "amp"
print(isSubsequence(badSubSeq, string)) #False`,
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
    largestSum: {
      python: `def largestSum(nums, k):
  curr = 0
  for i in range(k):
      curr += nums[i]
  
  ans = curr
  for i in range(k, len(nums)):
      curr += nums[i] - nums[i - k]
      ans = max(ans, curr)
  
  return ans

nums = [1,2,3,6,7,5,4]
k = 3
print(largestSum(nums, k)) # 18 [6,7,5]`,
    },
    longestSubstring: {
      python: `def longest1Substring(s): 
  left = zeros = ans = 0
  for right in range(len(s)):
    if s[right] == '0':
      zeros += 1
    while zeros > 1:			
      if s[left] == '0':
        zeros -= 1
      left += 1
    ans = max(ans, right - left + 1)
  return ans

  s = "1101100111"
print(longest1Substring(s)) # 5 "11011"`,
    },
  },
};
