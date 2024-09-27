// str의 글자수가 len을 넘어가면 ...으로 줄임
export const shortenText = (str: string, len: number) =>
  str.length > len ? str.slice(0, len) + "..." : str;
