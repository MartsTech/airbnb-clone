import { format } from "date-fns";

export const getDateRange = (startDate: string, endDate: string) => {
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return range;
};
