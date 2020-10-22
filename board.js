class Board {
    reset(){
        this.grid = this.getEmptyBoard();
    }

    getEmptyBoard(){
        return Array.from(
            {length:ROW}, () => Array(COL),fill(0)
        );
    }
}