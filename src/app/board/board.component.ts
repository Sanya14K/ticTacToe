import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: false,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{

  squares!: any[];
  xIsNext!: boolean;
  winner!: string | null;
  disableView = false;
  noOfMoves: number = 0;

  constructor(){

  }

  ngOnInit() {
    this.newGame();
     
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.disableView = false;
    this.noOfMoves = 0;
  }

  get player(){ //getter 
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    if(!this.squares[idx]){
      this.squares.splice(idx , 1 , this.player);
      this.xIsNext = !this.xIsNext;
      this.noOfMoves++;
    }

    this.winner = this.calculateWinner();
    console.log(`moves = ${this.noOfMoves} winner = ${this.winner}`);
    if(this.noOfMoves === 9 && this.winner===null || this.winner){
      console.log('Reached here');
      this.endGame();
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a]; 
      }
    }
    return null;
  }

  endGame(){
    this.disableView = true;
  }

}
