import { Component, Input } from '@angular/core';
import { playersInterface } from 'src/app/shared/models/playerModel';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent {

  @Input() players: playersInterface[] = [];
  @Input() group: string = "";
}
