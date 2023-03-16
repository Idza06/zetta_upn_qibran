const bookPrice = 50000; // const book price
const discPercentage = 20;
const taxPercentage = 10;
const isMember = true; // boolean to check if user is a member
const terms = [1, 2, 3]; // array of terms
const credits = [50000, 100000, 150000]; // array of credits for each term

function purchaseBook(bookDetails, discountPercentage, taxPercentage, isMember, stock, purchased, term) {
  let amountOfBook = stock; // initialize the amount of book to the stock value
  let totalBookPrice = 0; // initialize the total book price to zero
  let credit = credits[term - 1]; // get the credit for the specified term

  for (let i = 1; i <= purchased; i++) {
    if (amountOfBook === 0) { // break the loop if the amount of book is already out of stock
      console.log('Sorry, the book is out of stock.');
      break;
    }
    totalBookPrice += bookPrice; // add the book price to the total book price
    amountOfBook--; // decrement the amount of book by 1
  }

  const discountAmount = totalBookPrice * (discountPercentage / 100); // Amount of discount
  const priceAfterDiscount = totalBookPrice - discountAmount; // Price after discount
  const taxAmount = priceAfterDiscount * (taxPercentage / 100); // Amount of tax
  const priceAfterTax = priceAfterDiscount + taxAmount; // Price after tax
  let finalPrice = priceAfterTax - credit; // subtract the credit from the final price

  if (isMember) {
    finalPrice *= 0.9; // using multiplication assignment to apply 10% discount for members
  }

  // Display all parameters with additional data
  console.log('Here are the details of the book!')
  console.log('Book Title             : ', bookDetails.title);
  console.log('Author                 : ', bookDetails.author);
  console.log('Publisher              : ', bookDetails.publisher);
  console.log('Book Price             : Rp', bookPrice);
  console.log('Discount Percentage    : ', discountPercentage, '%');
  console.log('Discount Amount        : Rp', discountAmount);
  console.log('Price After Discount   : Rp', priceAfterDiscount);
  console.log('Tax Percentage         : ', taxPercentage, '%');
  console.log('Tax Amount             : Rp', taxAmount);
  console.log('Price After Tax        : Rp', priceAfterTax);
  console.log('Is Member              : ', isMember);
  console.log('Total Book Price       : Rp', totalBookPrice);
  console.log('Credit for Term        : Rp', credit);
  console.log('Final Price            : Rp', finalPrice);

  if (amountOfBook > 0) {
    console.log(`You can still purchase ${amountOfBook} more book(s).`);
  } else {
    console.log('Sorry, the book is out of stock.');
  }
}

// usage of the function
const bookDetails = {
  title: 'Mission of Coordinate',
  author: 'Keearfi',
  publisher: 'K. Id Company',
};
const stock = 5;
const purchased = 3;
const term = 2; // set the term to 2
purchaseBook(bookDetails, discPercentage, taxPercentage, isMember, stock, purchased, term); // pass the term as a parameter
