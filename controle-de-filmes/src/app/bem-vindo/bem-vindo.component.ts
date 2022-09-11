import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  isHidePanel;
  
  constructor(private router: Router) { 
    this.isHidePanel = false;
  }

  ngOnInit(): void {
  }

}
