import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-preview-chart',
  templateUrl: './preview-chart.component.html',
  styleUrls: ['./preview-chart.component.scss']
})
export class PreviewChartComponent implements OnInit, AfterViewInit {

  @Input() percentage = '0';
  @ViewChild('path', {static: true}) pathRef!:ElementRef;

  strokeDasharray = '';

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    // Object.assign(this, { single });
  }

  ngOnInit() {
    console.log('XXXX', this.pathRef.nativeElement);
    this.strokeDasharray = `${this.percentage}, 100`
  }

  ngAfterViewInit() { }

  onSelect(event:any) {
    console.log(event);
  }
}
