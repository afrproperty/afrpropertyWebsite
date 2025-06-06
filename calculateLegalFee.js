function calculateLegalFee(amount) {
  if (amount <= 500000) {
    return amount * 0.01;
  }
  if (amount <= 1000000) {
    return 5000 + ((amount - 500000) * 0.008);
  }
  return 9000 + ((amount - 1000000) * 0.007);
}
