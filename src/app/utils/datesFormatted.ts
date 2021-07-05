export function formatDateInput(day?: string): string {
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let timeFormatted = `${year}-${month}-${day ? day : lastDay(year, month)}`;
  return timeFormatted;
}

export function formatDateImport(date?: string): string {
  let day = date.substring(8, 10);
  let month = date.substring(5, 7);
  let year = date.substring(0, 4);
  let timeFormatted = `${day}/${month}/${year}`;
  return timeFormatted;
}

function lastDay(year, month) {
  return new Date(year, month, 0).getDate();
}