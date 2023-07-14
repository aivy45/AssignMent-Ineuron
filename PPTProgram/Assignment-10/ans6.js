function towerOfHanoi(n, sourceRod, destinationRod, auxiliaryRod) {
    if (n === 1) {
      // Base case: Move the top disc from sourceRod to destinationRod
      console.log(`Move disc 1 from rod ${sourceRod} to rod ${destinationRod}`);
      return 1;
    }
  
    let moves = 0;
  
    // Move n-1 discs from sourceRod to auxiliaryRod using destinationRod as the auxiliary rod
    moves += towerOfHanoi(n - 1, sourceRod, auxiliaryRod, destinationRod);
  
    // Move the nth disc from sourceRod to destinationRod
    console.log(`Move disc ${n} from rod ${sourceRod} to rod ${destinationRod}`);
    moves++;
  
    // Move the n-1 discs from auxiliaryRod to destinationRod using sourceRod as the auxiliary rod
    moves += towerOfHanoi(n - 1, auxiliaryRod, destinationRod, sourceRod);
  
    return moves;
  }
  