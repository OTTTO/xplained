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
reverseStr(sentence) # "dlroW olleH"`,
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

isPalindrome(palindrome) # True
isPalindrome(notPalindrome) # False`,
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
hasAddends(nums, 7) # True
hasAddends(nums, 13) # False`,
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
isSubsequence(badSubSeq, string) #False`,
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
largestSum(nums, k) # 18 [6,7,5]`,
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
longest1Substring(s) # 5 "11011"`,
    },
    longestSubarray: {
      python: `def findLength(nums, k):
  left = curr = ans = 0
  for right in range(len(nums)):
    curr += nums[right]
    while curr > k:			
      curr -= nums[left]
      left += 1
    ans = max(ans, right - left + 1)
  return ans

nums = [7,4,2,3,1,2,1,1,6]
k = 10

findLength(nums, k) # 6 [2,3,1,2,1,1]`,
    },
  },
  hashing: {
    twoSum: {
      python: `def twoSum(nums, target):
  mapping = {}
  for idx, num in enumerate(nums):
    compliment = target - num
    if compliment in mapping:
      return (mapping[compliment], idx)
    mapping[num] = idx
  return None

nums = [3,1,4,2,5]
target = 9

twoSum(nums, target) # (2, 4)`,
    },
    pangram: {
      python: `def isPangram(sentence):
  allLetters = ''.join(sentence.split(' ')).lower()
  lettersSet = set(allLetters)
  return len(lettersSet) == 26

pangram = "The quick brown fox jumps over the lazy dog"
notPangram = "alphabet"

isPangram(pangram)    # True
isPangram(notPangram) # False`,
    },
    wordPattern: {
      python: `def wordPattern(pattern, s):
  words = s.split(' ')
  if (len(set(words)) != len(set(pattern)) or len(pattern) != len(words)):
    return False
  mapping = {}
  for idx, char in enumerate(pattern):
    if char in mapping:
      if words[idx] != mapping[char]:
        return False
    else:
      if words[idx] not in mapping.values():
        mapping[char] = words[idx]
      else: 
        return False
  return True

pattern = "abba"
good = "dog cat cat dog"
bad = "dog dog dog dog"

wordPattern(pattern, good) #True
wordPattern(pattern, bad)  #False`,
    },
  },
};
