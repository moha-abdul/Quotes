import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quotes(1, "moha1", "to be or not be", "willy", 0, 0,new Date()),
    new Quotes(2, "moha0", "to beeeee or not be", "willy shakes", 0, 0,new Date()),
    new Quotes(3, "moha1", "to be or not be", "willy2", 0, 0,new Date()),
    new Quotes(4, "moha3", "to bee or not be", "willy shake", 0, 0,new Date()),
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
  deleteQuote(index){
    this.quotes.splice(index, 1)
  }
  // upvoteQuote(){
  //  this.upvoteQuote += 1;
  // }
  constructor() { }

  ngOnInit() {
  }

}
