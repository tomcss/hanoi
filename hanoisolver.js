class HanoiSolver {
    constructor(segmentCount = 3) {
        this.segmentCount = segmentCount
        this.currentMove = 0
    }

    // Returns the segment number of the
    // segment that needs to be moved at
    // the nth move
    segmentToMove(n) {
        let i = 1
        while (n % 2 == 0) {
            i += 1
            n /= 2
        }
        return i
    }


    // target( moveNumber, segment, moveIndex)
    // returns the target tower for move moveNumber
    target(segment, moveIndex) {
        if (moveIndex === 0) return 1 // The 0th move of any segment is tower 1

        let targetTower = 0

        let mod = (a, b) => ((a % b) + b) % b

        if ((this.segmentCount + segment) % 2 === 0) {
            targetTower = mod(-moveIndex, 3) + 1
        } else {
            targetTower = (moveIndex) % 3 + 1
        }

        return targetTower

    }

    // move( moveNumber)
    // returns a two element array with the from and to
    // tower numbers
    move(moveNumber) {
        if (moveNumber === 0) return [0, 0]

        let segment = this.segmentToMove(moveNumber)
        let moveIndex = this.segmentMoveIndex(moveNumber, segment)

        let to = this.target(segment, moveIndex)
        let from = this.target(segment, moveIndex - 1)

        return [from, to]
    }

    // The segment move index is the nth move
    // of a particular segment
    segmentMoveIndex(moveNumber, segment) {
        return Math.ceil(moveNumber / 2 ** segment)
    }

    // calculates the nth move of the solution,
    // in the format
    // { segment: segmentIndex, to: towerIndex }

    get totalMoves() {
        return 2 ** this.segmentCount - 1
    }

    allMoves() {
        for (let i = 1; i <= this.totalMoves; i++) {
            console.log(this.move(i))
        }
    }

    // Returns the nth move from the solution
    // in the format { from: towerIndex,
    // to: towerIndex }
    nextMove() {}
}
