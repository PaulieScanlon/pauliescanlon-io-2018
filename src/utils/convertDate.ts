export const convertDate = (date: string) => {
  if (date) {
    const dateStr = new Date(date);

    return `${dateStr.getDate()}/${dateStr.getMonth() +
      1}/${dateStr.getFullYear()}`;
  }
  return "--/--/--";
};
