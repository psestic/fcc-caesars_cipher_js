function rot13(str) {
  const arr = str.split('');
  const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  const alph13 = "NOPQRSTUVWXYZABCDEFGHIJKLM".split('');

  for (let char in arr) {
    if (arr[char] !== " " && arr[char] !== "!" && arr[char] !== "." && arr[char] !== "?") {
      arr[char] = alph13[alph.indexOf(arr[char])]
    }
  }
  console.log(arr.join(""));
  return arr.join("");
}

rot13("SERR CVMMN!");
