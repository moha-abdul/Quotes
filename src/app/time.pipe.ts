import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var timeDifference =Math.abs(value-todayWithNoTime );
    const secondsInADay= 86400;
    var timeDifferenceSeconds=timeDifference*0.001;
    var timeCounter = timeDifferenceSeconds/secondsInADay;

    return timeCounter;
  }

}
