# Hanoi Solutions Generator
A simple and quick solutions generator for any size Hanoi towers. This solver only generates solutions for standard Hanoi problems in the initial state; it can't solve scrambled puzzles.

Get all moves at once:

```javascript
let hanoi = new HanoiSolver(3)
moves = hanoi.allMoves()
JSON.stringify(moves) // "[[1,3],[1,2],[3,2],[1,3],[2,1],[2,3],[1,3]]"
```

Get one move at a time:

```javascript
let hanoi = new HanoiSolver(3)
let move = hanoi.nextMove()
while( move !== -1) {
    console.log( move);
    move = hanoi.nextMove();
}
```
