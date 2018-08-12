import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quote:Quote;
  @Output() addQuote=new EventEmitter<Quotes>();
  newQuote=new Quotes("","","");
  
  submitQuote(){
    this.addQuote.emit(this.newQuote);
}

  constructor() { }

  ngOnInit() {
  }

}
