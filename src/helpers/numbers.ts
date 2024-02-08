export const formatNumber = (number: number): string => {
  if (number < 1000) {
    return number.toString();
  } else if (number < 100000) {
    const roundedNumber = Math.round(number / 100) / 10;
    return roundedNumber.toString() + "k";
  } else {
    const roundedNumber = Math.round(number / 1000);
    return roundedNumber.toString() + "k";
  }
};
