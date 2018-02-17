class HanoiSolver {
    constructor(segmentCount = 3) {
        this.segmentCount = segmentCount
        this.currentMove = 0
    }

    get totalMoves() {
        return 2 ** this.segmentCount - 1
    }

    // segmentToMove( moveNumber)
    // 
    // Returns the segment number of the
    // segment that needs to be moved at
    // the nth move
    //
    segmentToMove( moveNumber) {
        let i = 1
        while (moveNumber % 2 == 0) {
            i += 1
            moveNumber /= 2
        }
        return i
    }

    // target( moveNumber, segment, moveIndex)
    //
    // returns the target tower for the given move number
    //
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
    //
    // returns a two element array with the from and to
    // tower indices
    //
    move(moveNumber) {
        if (moveNumber === 0) return [0, 0]

        let segment = this.segmentToMove(moveNumber)
        let moveIndex = this.segmentMoveIndex(moveNumber, segment)

        let to = this.target(segment, moveIndex)
        let from = this.target(segment, moveIndex - 1)

        return [from, to]
    }

    // segmentMoveIndex( moveNumber, segment)
    // 
    // The segment move index is the nth move
    // of a particular segment
    //
    segmentMoveIndex(moveNumber, segment) {
        return Math.ceil(moveNumber / 2 ** segment)
    }

    // allMoves
    //
    // returns all the moves in an array. Could start
    // to eat memory with 20 or more segments.
    //
    allMoves() {
        let moves = []

        for (let i = 1; i <= this.totalMoves; i++) {
            moves.push( this.move( i))
        }
    }

    // nextMove
    //
    // Returns the next move as stored in
    // currentMove. Returns -1 if there are no
    // more moves
    //
    nextMove() {
        if( this.currentMove < this.totalmoves) {
            return( this.move( ++this.currentMove))
        } else {
            return -1
        }
    }
}
