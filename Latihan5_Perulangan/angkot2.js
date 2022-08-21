var i = 1;
while (i <= 10) {
  if (i == 8) {
    console.log(`Angkot No. ${i} sedang lembur `);
  } else if (i == 7 || i == 9 || i == 10) {
    console.log(`Angkot No. ${i} sedang tidak beroperasi `);
  } else {
    console.log(`Angkot No. ${i} beroperasi dengan baik `);
  }
  i++;
}
