import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  isHidePanel;
  
  constructor() { 
    this.isHidePanel = true;
  }

  ngOnInit(): void {
  }

}
