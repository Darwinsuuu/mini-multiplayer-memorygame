import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() playerLength: number = 0;
  boardSize: number = 100;
  bombCount: number = 0;
  boardValues: { number: number; trigger: boolean }[] = [];
  private openBoxSubject = new Subject<number>();
  private readonly DEBOUNCE_TIME_MS = 300; // Adjust the debounce time as needed

  ngOnInit(): void {
    this.createBoard();
    this.openBoxSubject.pipe(debounceTime(this.DEBOUNCE_TIME_MS)).subscribe((index) => {
      this.openBox(index);
    });
  }

  createBoard() {
    const pairs = Math.floor(this.playerLength / 2 != 1 ? this.playerLength / 2 : 2);
    const bombCounts = [0, 0, 20, 10, 8, 5];
    this.bombCount = bombCounts[pairs] || 0;

    this.boardValues = Array.from({ length: this.boardSize }, (_, i) => ({
      number: i < this.boardSize - this.bombCount ? Math.floor(i / pairs) + 1 : 0,
      trigger: false,
    }));

    this.randomizeArray(this.boardValues);
    console.log(this.boardValues);
  }

  randomizeArray(arr: { number: number; trigger: boolean }[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  openBox(index: number) {
    this.boardValues[index].trigger = true;
  }

  openBoxDebounced(index: number) {
    this.openBoxSubject.next(index);
  }

  trackById(index: number, item: any): any {
    return item.id; // Assuming the items have a unique 'id' property
  }
}
