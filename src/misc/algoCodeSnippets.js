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
  },
};
