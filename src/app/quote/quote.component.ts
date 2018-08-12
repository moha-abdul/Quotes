import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote("moha1", "to be or not be", "willy"),
    new Quote("moha", "to bee or not be", "willy shakes")
  ]

  addNewQuote(quote){
    // let quoteLength = this.quotes.length;
    // quote.id = quoteLength + 1;
    this.quotes.push(quote)

}
  constructor() { }

  ngOnInit() {
  }

}
