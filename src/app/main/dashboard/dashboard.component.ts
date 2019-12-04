import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  traduzioni = [
    {
      nomeSerie: "Nome serie",
      stagione: 2,
      episodio: 3,
      titolo: "Lorem ipsum dolor sit amet",
      revisore: "Revisore",
      scadenza: {
        mese: "ott",
        giorno: 21,
        ora: '16:00'
      },
      traduttori: [
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
      ],
      link: {
        magnet: "",
        guida: "",
        parte: ""
      },
      commento: "Lorem ipsum dolor sit amet"
    },
    {
      nomeSerie: "Nome serie",
      stagione: 2,
      episodio: 3,
      titolo: "Lorem ipsum dolor sit amet",
      revisore: "Revisore",
      scadenza: {
        mese: "ott",
        giorno: 21,
        ora: '16:00'
      },
      traduttori: [
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
      ],
      link: {
        magnet: "",
        guida: "",
        parte: ""
      },
      commento: "Lorem ipsum dolor sit amet"
    },
    {
      nomeSerie: "Nome serie",
      stagione: 2,
      episodio: 3,
      titolo: "Lorem ipsum dolor sit amet",
      revisore: "Revisore",
      scadenza: {
        mese: "ott",
        giorno: 21,
        ora: '16:00'
      },
      traduttori: [
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
        { username: 'Username', avatar: 'https://i.pravatar.cc/100?', start: 100, end: 200 },
      ],
      link: {
        magnet: "",
        guida: "",
        parte: ""
      },
      commento: "Lorem ipsum dolor sit amet"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
