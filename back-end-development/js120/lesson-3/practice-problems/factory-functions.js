// Problem 1
/*
answer =>
- every object created with a factory function has a full copy of all methods
  - redundant and can place a heavy load on system memory
- no way to inspect an object and learn whether we created it with a factory function
  - effectively makes it impossible to identify the specific "type" of the object
    - can only determine that an object has some specific characteristics at best
*/





// Problem 2
// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }

// let obj = makeObj();
// console.log(obj);





// Problem 3
// function createInvoice(services) {
//   let defaultPhone = 3000;
//   let defaultInternet = 5500;
//   return {
//     phone: (((services !== undefined) && ('phone' in services)) ? services['phone'] : defaultPhone),
//     internet: (((services !== undefined) && ('internet' in services)) ? services['internet'] : defaultInternet),
//     total() {
//       return this.phone + this.internet;
//     },
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000



// Launch School Solution
// function createInvoice(services = {}) {
//   let phoneCharge = services.phone;
//   if (phoneCharge === undefined) {
//     phoneCharge = 3000;
//   }

//   let internetCharge = services.internet;
//   if (internetCharge === undefined) {
//     internetCharge = 5500;
//   }

//   return {
//     phone: phoneCharge,
//     internet: internetCharge,

//     total: function() {
//       return this.phone + this.internet;
//     },
//   };
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000





// Problem 4
// function createPayment(services = {}) {
//   let phoneCharge = services.phone ?? 0;
//   let internetCharge = services.internet ?? 0;
//   let amountTotal = services.amount ?? 0;

//   return {
//     phone: phoneCharge,
//     internet: internetCharge,
//     amount: amountTotal,
//     total: function() {
//       return this.phone + this.internet + this.amount;
//     },
//   };
// }

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment) => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000



// Launch School Solution
// function createPayment(services = {}) {
//   let payment = {
//     phone: services.phone || 0,
//     internet: services.internet || 0,
//     amount: services.amount,
//   };

//   payment.total = function() {
//     return this.amount || (this.phone + this.internet);
//   };

//   return payment;
// }

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment) => sum + payment.total(), 0);
// }

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000





// Problem 5
function createInvoice(services = {}) {
  let phoneCharge = services.phone ?? 3000;
  let internetCharge = services.internet ?? 5500;

  return {
    phone: phoneCharge,
    internet: internetCharge,
    payments: [],

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      payments.forEach(this.addPayment, this);
      // payments.forEach(payment => {
      //   this.addPayment(payment);
      // });
    },

    paymentTotal: function() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  };
}

function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}


let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
