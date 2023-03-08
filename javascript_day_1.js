/*
Name : Qibran Idza Lafandzi
*/

const bookPrice = 50000; //const book price
const discPercentage = 20; 
const taxPercentage = 10; 
const isMember = true; // boolean to check if user is a member

function purchaseBook(bookDetails, discountPercentage, taxPercentage, isMember) {
    const discountAmount = bookPrice * (discountPercentage / 100); // Amount of discount
    const priceAfterDiscount = bookPrice - discountAmount; // Price after discount
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
    console.log('Discount Percentage    : ', discountPercentage,'%');
    console.log('Discount Amount        : Rp', discountAmount);
    console.log('Price After Discount   : Rp', priceAfterDiscount);
    console.log('Tax Percentage         : ', taxPercentage,'%');
    console.log('Tax Amount             : Rp', taxAmount);
    console.log('Price After Tax        : Rp', priceAfterTax);
    console.log('Is Member              : ', isMember);
    console.log('Final Price            : Rp', finalPrice);
  }
  
  //usage of the function
  const bookDetails = {
    title       : 'Mission of Coordinate',
    author      : 'Keearfi',
    publisher   : 'K. Id Company',
  };
  purchaseBook(bookDetails, discPercentage, taxPercentage, isMember);