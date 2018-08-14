import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); //   get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(value - todayWithNoTime ); //   return value in milliseconds
    const secondsInADay = 86400; //  60 s * 60 m in an hour *24 hours

    var dateDifferenceSeconds =  dateDifference * 0.001; //  converts to seconds

    var dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1) {
        return dateCounter;
    } else {
        return 0;
    }
  }

}
