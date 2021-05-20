export function ToLocalDateTime(date) {
  if (
    date === null ||
    date === "0001-01-01T00:00:00Z" ||
    date === "1969-12-31T00:00:00+02:00"
  )
    return "";

  const dateoptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  return new Intl.DateTimeFormat("tr-TR", dateoptions).format(new Date(date));
}
