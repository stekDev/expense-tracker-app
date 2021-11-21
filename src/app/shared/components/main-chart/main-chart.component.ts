import { Component, Input, OnInit } from '@angular/core';
import { GetMainChartService } from 'src/app/gestione-spese/services/get-main-chart.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss']
})
export class MainChartComponent implements OnInit {

  multi!: any[];
  view: [number, number] = [1300, 350];
  availableData:boolean = false;
  @Input() dataMainChart!: any;

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  elevation: any;

  constructor(
    private getMainChartService: GetMainChartService,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.show();
    this.getMainChartService.getChart()
    .subscribe(res => {
     setTimeout(() => {
        const multi = res;
        Object.assign(this, { multi });
        this.availableData = true;
        this.spinnerService.hide();
     }, 2000);
    },
    (error) => {
      console.log(error);
      setTimeout(() => {
        this.availableData = false;
        this.spinnerService.hide();
      }, 2000)
    })
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  ngOnInit(): void {
    
  }

}
