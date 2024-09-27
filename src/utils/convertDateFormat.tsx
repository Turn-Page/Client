export const convertDateFormat = (date: string | undefined) => {
  if (date === undefined) return;

  const _date = new Date(date);

  const year = _date.getFullYear();
  const month = _date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
  const day = _date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
