export const dateFormatter = (dateValue: number) => {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "long",
    weekday: "short",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  });

  return formatter
    .formatToParts(dateValue)
    .map(({ type, value }) => {
      switch (type) {
        case "weekday":
          return `${value.charAt(0).toUpperCase() + value.slice(1)}, `;
        case "day":
          return `${value} `;
        case "month":
          return `${value.charAt(0).toUpperCase() + value.slice(1)}, `;
        case "hour":
          return `${value}:`;
        case "minute":
          return value;

        default:
          return "";
      }
    })
    .join("");
};

export const dayMonthFormatter = (value: number) =>
  new Date(value).toLocaleString("ru", {
    day: "2-digit",
    month: "2-digit",
  });
