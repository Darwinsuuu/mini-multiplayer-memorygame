import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() playerLength: number = 0;
  boardSize: number = 100;
  bombCount: number = 0;
  boardValues: number[] = [];


  ngOnInit(): void {
    this.createBoard();
  }

  
  createBoard() {

    let boxArr = [];
    let flagCount = 1;
    let pairCount = 1;

    
    if((this.playerLength / 2) === 1 || (this.playerLength / 2) === 2) { // 38 pairs
      this.bombCount = 20;
    } else if((this.playerLength / 2) === 3) { // 30 pairs
      this.bombCount = 10;
    } else if((this.playerLength / 2) === 4) { // 23 pairs
      this.bombCount = 8;
    } else if((this.playerLength / 2) === 5) { // 20 pairs
      this.bombCount = 5;
    } else {
      this.bombCount = 0;
    }

    for (let i=0 ; i<this.boardSize ; i++) {
      if(i < this.boardSize - this.bombCount) {
        boxArr.push(pairCount);
      } else {
        boxArr.push(0)
      }

      if (flagCount == this.playerLength / 2) {
        flagCount = 1;
        pairCount++;
      } else {
        flagCount++;
      }
    }

    this.boardValues = this.randomizeArray(boxArr);
    // this.boardValues = boxArr;
    console.log(boxArr)

  }


  randomizeArray(arr: number[]) {
    // Custom sorting function to generate random order
    const randomSort = () => Math.random() - 0.5;
    const tempArr = arr;
    // Use the custom sorting function to shuffle the array
    tempArr.sort(randomSort);

    return tempArr;
  }

}
