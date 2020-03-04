export const formatNumber = (num) => {
    return isNaN(num) ? 0 : num.toFixed(2);
  }