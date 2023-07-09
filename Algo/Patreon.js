/*
You're building a shopping cart pricer app for
your local grocery store. They sell many types of
items and accept coupons. One type of coupon
discounts an item's price by a percentage (e.g.
10% off). Another tybe of coupon gives the
shopper a dollar amount discount if a minimum
count of the item is purchased (e.g. $5 off if you
buy 2 or more). A shopper may only use one coupon on a type of item. 
The app should compute the price given a shopping cart and 
a set of coupons applied.

Keep in mind the grocery store is planning to
accept new types of coupons next quarter but 
you don't yet know the details of those.

Given this information. design the interface(s)
and data model to represent the shopping cart,
implement the shopping cart pricer, and test
your code. 

As an example, a shopping cart has 10 apples ($1
each). 2 loaves of bread $5 each, and 1
chocolate ($1 each).

The shopper has two coupons 10%-off apples and 
$4 off it you buy 2 or more loaves of bread. The 
pricer should return $16
"""

# Happy path test case

# Write a test for computing the best price of a cart when you 
# have multiple coupons on the same item

# A test for when you remove an item from the cart.

# A test for adding an item with a negative price

# Discuss a broader variety of coupons, like coupons that 
# apply when you have multiple different items with minimum
# quantities


# Code the cart to assume that the most recent coupon for an item
# is the one that will be used.

# Then change the code to accept all coupons for an item and compute
# which discount would be the best for the item.
*/

const { it } = require("node:test");

const ITEM_TO_UNIT_PRICE = {
    "apples": 100,
    "bread": 500,
    "chocolate": 100
};

class PercentCoupon{
    constructor(item, discount){
        this.item = item;
        this.discount = discount;
    }

    couponAmount(cart) {
        const quantity = cart[this.item] || 0;
        const unitPrice = ITEM_TO_UNIT_PRICE[this.item];
        return Math.floor((unitPrice * quantity * this.discount)/100);
    }
}

class DollarAmountCoupon {
    constructor(item_name, min_quantity, discount){
        this.item = item_name,
        this.minQuantity = min_quantity;
        this.discount = discount;
    }

    dollarAmountDiscount(cart){
        const quantity = cart[this.item] || 0;

        if (quantity >= this.minQuantity){
            return this.discount;
        }

        return 0;
    }
}

class Cart {
    constructor(){
        this.itemMap = {};
        this.coupons = {};
    }

    addItems(item, quantity){
        if(this.itemMap[item]){
            this.itemMap[item] += quantity;
        }else {
            this.itemMap[item] = quantity;
        }
    }

    addCoupon(coupon){
        if (this.coupons[coupon.name]){
            this.coupons[coupon.name].push(coupon);
        } else {
            this.coupons[coupon.name] = 0;
        }
    }

    checkout() {
        let total = 0;
        console.log(this.itemMap);
        for (const itemName in this.itemMap) {
            console.log(itemName);
            const price = this.itemMap[itemName] * ITEM_TO_UNIT_PRICE[itemName];
            let bestDiscount = 0;
            const coupons = this.coupons[itemName] || [];
            for (const coupon of coupons) {
              bestDiscount = Math.max(
                bestDiscount,
                coupon.discountAmount(this.itemMap)
              );
            }
            total += price - bestDiscount;
        }
        return total;

    }
}


// const pCoupon = new PercentCoupon("apples", 20);
// const cart = { apples: 3, bread: 2, chocolate: 1 };
// const discountAmount = pCoupon.couponAmount(cart);
// console.log(`Discount amt: ${discountAmount}`);

// const dCoupon = new DollarAmountCoupon("bread", 2, 200);
// const dCart = { apples: 3, bread: 2, chocolate: 1 };
// const dDiscountAmount = dCoupon.dollarAmountDiscount(dCart);
// console.log(dDiscountAmount);

const cart = new Cart();
cart.addItems("apples", 3);
cart.addItems("bread", 2);
cart.addItems("chocolate", 1);
cart.addCoupon(new PercentCoupon("apples", 20));
cart.addCoupon(new DollarAmountCoupon("bread", 2, 200));
const total = cart.checkout();
console.log(total);