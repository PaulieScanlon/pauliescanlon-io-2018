const data = {
  bio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum libero vel leo iaculis",
  cvUrl: "http://www.example.com",
  displayCvUrl: "Pellentesque.rutrum"
};

export const available = {
  ...data,
  availability: "available",
  message: "libero vel leo iaculis"
};

export const booked = {
  ...data,
  availability: "booked",
  message: "Dolor sit 00/00"
};
