const cardNumber = prompt('Enter your card number');
const pinCode = prompt('Enter pin code');

if (cardNumber === '1234123412341234' && pinCode === '123') {
  alert('Correct credentials');
} else if (cardNumber === '4444444444444444' && pinCode === '444') {
  alert('Correct credentials');
} else if (cardNumber === '3333444455556666' && pinCode === '111') {
  alert('Correct credentials');
} else if (cardNumber === '1234567890123456' && pinCode === '000') {
  alert('Correct credentials');
} else {
  alert('Incorrect credentials');
}
