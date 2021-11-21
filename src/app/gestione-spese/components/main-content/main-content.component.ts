import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetMainChartService } from '../../services/get-main-chart.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  today!: Date;
  mainChart!:any | null;

  constructor(
    private getMainChartService: GetMainChartService,
  ) { }

  ngOnInit(): void {
    this.today = new Date();

    // SERVICES CALL HERE...
    // this._getMainChart();
  }

  // private _getMainChart() {
  //   this.getMainChartService.getChart()
  //   .subscribe(response => {
  //     this.mainChart = response;
  //   })
  // }

}
