import { Component } from '@angular/core';
import { playersInterface } from 'src/app/shared/models/playerModel';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})

export class PlayComponent {

  team1: playersInterface[] = [
    { name: 'Darwin', trigger: false },
    // { name: 'Joshua', trigger: false },
    // { name: 'Jer', trigger: true },
    // { name: 'Kim', trigger: false },
    // { name: 'Kim', trigger: false },
  ];

  team2: playersInterface[] = [
    { name: 'Ry', trigger: false },
    // { name: 'Ry', trigger: false },
    // { name: 'Ace', trigger: false },
    // { name: 'Ipe', trigger: false },
    // { name: 'Mhari', trigger: false },
  ]

  allPlayersLength: number = this.team1.length + this.team2.length;

}
