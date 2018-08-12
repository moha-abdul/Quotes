import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  @Input() quote:Quotes;
  constructor() { }

  ngOnInit() {
  }

}