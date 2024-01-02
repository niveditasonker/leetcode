/*
Given the initial positional coordinates in a n*n matrix and some directional keywords,
N and M where N means the spaceship would go east from the direction it was traveling. 
M means the spaceship would go west from the direction it was traveling, find the final destination.

Example: Initial position: (2, 3), Matrix: 5*5, directional keywords: MANNNNBMNMMXAD
*/

// function findFinalDestination(initialPosition, matrixSize, keywords) {
//     const directions = ['N', 'E', 'S', 'W']; // North, East, South, West
//     let [x, y] = initialPosition;
//     let currentDirection = 1; // Initial direction is East (E)
  
//     for (let i = 0; i < keywords.length; i++) {
//       const keyword = keywords[i];
  
//       switch (keyword) {
//         case 'N':
//           y--;
//           break;
//         case 'M':
//           switch (currentDirection) {
//             case 0: // North
//               y--;
//               break;
//             case 1: // East
//               x++;
//               break;
//             case 2: // South
//               y++;
//               break;
//             case 3: // West
//               x--;
//               break;
//           }
//           break;
//         case 'S':
//           y++;
//           break;
//         case 'E':
//           x++;
//           break;
//         case 'W':
//           x--;
//           break;
//         default:
//           console.log('Invalid keyword:', keyword);
//           break;
//       }
  
//       // Update direction based on keywords
//       if (keyword === 'N' || keyword === 'S') {
//         currentDirection = keyword === 'N' ? 0 : 2;
//       } else if (keyword === 'M') {
//         // Ignore for 'M', as it doesn't change the direction
//       } else {
//         // For 'E' or 'W', update direction based on the matrix
//         currentDirection = keyword === 'E' ? 1 : 3;
//       }
  
//       // Ensure the spaceship stays within the matrix
//       x = Math.max(0, Math.min(x, matrixSize - 1));
//       y = Math.max(0, Math.min(y, matrixSize - 1));
//     }
  
//     return [x, y];
//   }

// function findFinalDestination(initialPosition, matrixSize, keywords) {
//     let x = initialPosition[0];
//     let y = initialPosition[1];
//     let direction = 'E'; // Initial direction is East
  
//     for (let keyword of keywords) {
//         console.log(keyword);
//       switch (keyword) {
//         case 'N':
//           y--;
//           break;
//         case 'S':
//           y++;
//           break;
//         case 'E':
//           x++;
//           break;
//         case 'W':
//           x--;
//           break;
//         case 'M':
//           // No change in direction for 'M'
//           break;
//         default:
//           console.log('Invalid keyword:', keyword);
//           break;
//       }
  
//       // Ensure the spaceship stays within the matrix
//       x = Math.max(0, Math.min(x, matrixSize - 1));
//       y = Math.max(0, Math.min(y, matrixSize - 1));
  
//       if (keyword === 'N' || keyword === 'S' || keyword === 'E' || keyword === 'W') {
//         // Turn right after moving in a cardinal direction
//         direction = turnRight(direction);
//       }
//     }
  
//     return [x, y];
// }
  
// function turnRight(currentDirection) {
//     const directions = ['N', 'E', 'S', 'W'];
//     const currentIndex = directions.indexOf(currentDirection);
//     const nextIndex = (currentIndex + 1) % 4;
//     return directions[nextIndex];
// }
  
//   // Example usage
//   const initialPosition = [2, 3];
//   const matrixSize = 5;
//   const keywords = 'MANNNNBMNMMXAD';
  
//   const finalDestination = findFinalDestination(initialPosition, matrixSize, keywords);
//   console.log('Final Destination:', finalDestination);

function findFinalDestination(initialPosition, matrixSize, directionalKeywords) {
    // Create a map to store the current direction and the next position.
    const directionMap = {
      N: [0, 1],
      E: [1, 0],
      S: [0, -1],
      W: [-1, 0],
    };
  
    // Create a stack to store the previous directions.
    const directionStack = [];
  
    // Set the current direction to north.
    let currentDirection = 'N';
  
    // Set the current position to the initial position.
    let currentPosition = initialPosition;
  
    // Iterate over the directional keywords.
    for (const keyword of directionalKeywords) {
      // If the keyword is N or M, update the current direction accordingly.
      if (keyword === 'N') {
        currentDirection = 'N';
      } else if (keyword === 'M') {
        currentDirection = 'W';
      }
  
      // If the current direction is different from the previous direction, push the previous direction onto the stack.
      if (currentDirection !== directionStack[directionStack.length - 1]) {
        directionStack.push(currentDirection);
      }
  
      // Get the next position based on the current direction and the direction map.
      const nextPosition = [currentPosition[0] + directionMap[currentDirection][0], currentPosition[1] + directionMap[currentDirection][1]];
  
      // Check if the next position is within the matrix bounds.
      if (nextPosition[0] >= 0 && nextPosition[0] < matrixSize && nextPosition[1] >= 0 && nextPosition[1] < matrixSize) {
        // If the next position is within the matrix bounds, update the current position to the next position.
        currentPosition = nextPosition;
      } else {
        // If the next position is outside of the matrix bounds, pop the previous direction from the stack and update the current direction to the previous direction.
        currentDirection = directionStack.pop();
      }
    }
  
    // Return the final destination.
    return currentPosition;
  }
  

  const initialPosition = [2, 3];
const matrixSize = 5;
const directionalKeywords = 'MANNNNBMNMMXAD';

const finalDestination = findFinalDestination(initialPosition, matrixSize, directionalKeywords);

console.log(finalDestination); // [4, 2]

