const bookPrice = 50000; // const book price
const discPercentage = 20;
const taxPercentage = 10;
const isMember = true; // boolean to check if user is a member

function purchaseBook(bookDetails, discountPercentage, taxPercentage, isMember, stock, purchased) {
  let amountOfBook = stock; // initialize the amount of book to the stock value
  let totalBookPrice = 0; // initialize the total book price to zero

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
  let finalPrice = priceAfterTax;

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
purchaseBook(bookDetails, discPercentage, taxPercentage, isMember, stock, purchased);