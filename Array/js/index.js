function calculate(index) {
  const inputArray = document.getElementById("inputArray").value;
  const numbers = inputArray.split(",").map(Number);
  const resultSpan = document.getElementById(`result${index}`);
  resultSpan.innerHTML = "";

  switch (index) {
    case 1:
      resultSpan.innerHTML = `1. Tổng các số dương: ${sumPositive(numbers)}`;
      break;
    case 2:
      resultSpan.innerHTML = `2. Số lượng số dương: ${countPositive(numbers)}`;
      break;
    case 3:
      resultSpan.innerHTML = `3. Số nhỏ nhất trong mảng: ${minNumber(numbers)}`;
      break;
    case 4:
      resultSpan.innerHTML = `4. Số dương nhỏ nhất trong mảng: ${minPositiveNumber(
        numbers
      )}`;
      break;
    case 5:
      resultSpan.innerHTML = `5. Số chẵn cuối cùng trong mảng: ${lastEvenNumber(
        numbers
      )}`;
      break;
    case 6:
      resultSpan.innerHTML = `6. Đổi chỗ 2 giá trị theo vị trí: ${swapValues(
        numbers
      )}`;
      break;
    case 7:
      resultSpan.innerHTML = `7. Sắp xếp mảng: ${sortArray(numbers)}`;
      break;
    case 8:
      resultSpan.innerHTML = `8. Số nguyên tố đầu tiên trong mảng: ${firstPrimeNumber(
        numbers
      )}`;
      break;
    case 9:
      resultSpan.innerHTML = `9. Số lượng số nguyên trong mảng số thực: ${countIntegers(
        numbers
      )}`;
      break;
    case 10:
      resultSpan.innerHTML = `10. So sánh số lượng số dương và số âm: ${comparePositivesAndNegatives(
        numbers
      )}`;
      break;
  }
}

function sumPositive(numbers) {
  const positiveNumbers = numbers.filter((num) => num > 0);
  return positiveNumbers.reduce((sum, num) => sum + num, 0);
}

function countPositive(numbers) {
  return numbers.filter((num) => num > 0).length;
}

function minNumber(numbers) {
  return Math.min(...numbers);
}

function minPositiveNumber(numbers) {
  const positiveNumbers = numbers.filter((num) => num > 0);
  return positiveNumbers.length > 0 ? Math.min(...positiveNumbers) : null;
}

function lastEvenNumber(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  return evenNumbers.length > 0 ? evenNumbers[evenNumbers.length - 1] : -1;
}

function swapValues(numbers) {
  const pos1 = parseInt(prompt("Nhập vị trí thứ nhất:"));
  const pos2 = parseInt(prompt("Nhập vị trí thứ hai:"));

  if (
    pos1 >= 0 &&
    pos1 < numbers.length &&
    pos2 >= 0 &&
    pos2 < numbers.length
  ) {
    const temp = numbers[pos1];
    numbers[pos1] = numbers[pos2];
    numbers[pos2] = temp;
    return numbers;
  } else {
    return "Vị trí không hợp lệ.";
  }
}

function sortArray(numbers) {
  return numbers.sort((a, b) => a - b);
}

function firstPrimeNumber(numbers) {
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  const primeNumbers = numbers.filter((num) => isPrime(num));
  return primeNumbers.length > 0 ? primeNumbers[0] : -1;
}

function countIntegers(numbers) {
  return numbers.filter((num) => Number.isInteger(num)).length;
}

function comparePositivesAndNegatives(numbers) {
  const positiveCount = countPositive(numbers);
  const negativeCount = numbers.length - positiveCount;

  if (positiveCount > negativeCount) {
    return "Số lượng số dương nhiều hơn số âm.";
  } else if (positiveCount < negativeCount) {
    return "Số lượng số âm nhiều hơn số dương.";
  } else {
    return "Số lượng số dương và số âm bằng nhau.";
  }
}
