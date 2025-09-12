import dayjs, { ConfigType } from "dayjs";

export const formatDate = (dateStr: ConfigType): string => {
  const d = dayjs(dateStr);

  if (!d.isValid()) return "";

  if (d.isSame(dayjs(), "day")) return String(d.format("h:mm A"));

  if (d.isSame(dayjs(), "year")) return String(d.format("MMM D"));

  return String(d.format("MMM D, YYYY"));
};
