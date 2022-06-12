import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/interfaces';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss'],
})
export class GotyComponent implements OnInit {
  juegos: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getNominados().subscribe((juegos) => {
      console.log(juegos);
      this.juegos = juegos;
    });
  }
}
