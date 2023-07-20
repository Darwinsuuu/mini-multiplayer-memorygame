import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  playerName: string = "";

  checkPlayerName() {
    return 15 - this.playerName.length;
  }

}
