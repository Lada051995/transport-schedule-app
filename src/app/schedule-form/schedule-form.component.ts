import { Component } from '@angular/core';
import { ScheduleService } from '../schedule.service';

export interface RouteData {
  origin: string;
  destination: string;
  date: string;
}

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent {
  transportType: string;
  origin: string;
  destination: string;
  date: string;
  showTimetable: boolean;
  dataSource: RouteData[];

  constructor(private scheduleService: ScheduleService) {
    this.showTimetable = false;
  }

  getSchedule() {
    this.scheduleService.getSchedule(this.transportType, this.origin, this.destination, this.date)
      .subscribe(schedule => {
        this.dataSource = [
          { origin: this.origin, destination: this.destination, date: this.date }
        ];
        this.showTimetable = true;
      });
  }

  displayedColumns: string[] = ['route', 'departureTime', 'travelTime', 'arrivalTime'];
}
