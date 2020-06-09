import { Component, OnInit, Input } from '@angular/core';
import {  } from 'protractor';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.sass']
})
export class ServerElementComponent implements OnInit {
 @Input() task: {name: string, description: string};

  constructor() { }

  ngOnInit(): void {
  }


}
