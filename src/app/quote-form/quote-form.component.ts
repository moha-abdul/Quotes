import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quote:Quotes;
  @Output() addQuote = new EventEmitter<Quotes>();
  newQuote = new Quotes(0,"","","");
  
  submitQuote(){
    this.addQuote.emit(this.newQuote);
}

  constructor() { }

  ngOnInit() {
  }

}
