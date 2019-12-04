import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-traduzione-ongoing',
  templateUrl: './traduzione-ongoing.component.html',
  styleUrls: ['./traduzione-ongoing.component.scss']
})
export class TraduzioneOngoingComponent implements OnInit {
  @Input() dati;
  @Input() test;
  constructor() { }

  ngOnInit() {
  }

}
