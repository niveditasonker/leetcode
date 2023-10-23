// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


// ---------------------------------------- PART 1 ----------------------------------------

// As a Type 2 Diabetes clinic, Virta sends out test strips to patients who monitor their glucose and
// ketone levels. There are two kinds of test strips: ketone test strips and glucose test strips.
// Patients may require different amounts of each test strip based on their condition.

// Virta also maintains supplies of the test strips. To start, you will have three box types:
// * Ketone Box
//  * 50 Ketone strips
//  * 0 Glucose strips
// * Glucose Box
//  * 0 Ketone strips
//  * 50 Glucose strips
// * Combo Box 1
//  * 100 Ketone strips
//  * 100 Glucose strips


// We want to minimize costs by sending as few boxes as possible without
// exceeding the requested test strip amount.

// If the request is not wholly divisible by the items in the box, for example, a request of 71 test strips,
// it is ok to only fulfill the divisible part, i.e. 50 test strips.

// You will write a program that calculates ordered supplies based on patient requests.
// For example:
// * Patient request: glucose_test_strips = 200, ketone_test_strips = 150
// * => Returns order: combo_boxes = 1, glucose_boxes = 2, ketones_boxes = 1

// * Patient request: glucose_test_strips = 265, ketone_test_strips = 150
// * => Returns order: combo_boxes = 1, glucose_boxes = 3, ketones_boxes = 1


// ---------------------------------------- PART 2 ----------------------------------------

// Now that your program can calculate the ordered supplies based on patient requests,
// imagine the available box types are regularly changing. Update your solution to support inventory
// variability.

// For example, say a new combo box type that has 100 glucose test strips per box and 50 ketone test
// strips per box is available. There are now four box types:

// * Ketone Box
//  * 50 Ketone strips
//  * 0 Glucose strips
// * Glucose Box
//  * 0 Ketone strips
//  * 50 Glucose strips
// * Combo Box 1
//  * 100 Ketone strips
//  * 100 Glucose strips
// * Combo Box 2
//  * 50 Ketone strips
//  * 100 Glucose strips

// * Patient request: glucose_test_strips = 200, ketone_test_strips = 150
// * => Returns order: combo_2_boxes = 1, combo_1_boxes = 1


function calculateOrderedSupplies(glucose_test_strips, ketone_test_strips){
  let inventoryMap = {
    'combo': {
      'ketone_test_strips': 100,
      'glucose_test_strips': 100
    },
    'ketone_test_strips': 50,
    'glucose_test_strips': 50
  }

  let comboBox = 0;
  let glucoseBox = 0;
  let ketoneBox = 0;

  while(glucose_test_strips > 0 || ketone_test_strips > 0){
    if (glucose_test_strips >= inventoryMap['combo']['glucose_test_strips']
    && ketone_test_strips >= inventoryMap['combo']['ketone_test_strips'] ){
        glucose_test_strips -= inventoryMap['combo']['glucose_test_strips'];
        ketone_test_strips -= inventoryMap['combo']['ketone_test_strips'];
        comboBox++;
        console.log("Glucose 1: ", glucose_test_strips);
    }else if (glucose_test_strips > 0 && glucose_test_strips > inventoryMap['glucose_test_strips']){
        glucose_test_strips -= inventoryMap['glucose_test_strips'];
        glucoseBox++;
        console.log("Glucose 2: ", glucose_test_strips);
    }else if (ketone_test_strips > 0 && ketone_test_strips > inventoryMap['ketone_test_strips']){
        ketone_test_strips -= inventoryMap['ketone_test_strips'];
        ketoneBox++;
    }

  }

  console.log(comboBox, glucoseBox, ketoneBox);
  return [comboBox, glucoseBox, ketoneBox];
}

// calculateOrderedSupplies(200, 150);
calculateOrderedSupplies(265, 150);