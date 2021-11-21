import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'


const SMALL_WIDTH_BK = 720;

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {


  public isScreenSmall!:boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      // .observe([Breakpoints.XSmall])
      .observe([`(max-width: ${SMALL_WIDTH_BK}px)`])
      .subscribe((state: BreakpointState) => {
        console.log(state.matches);
        this.isScreenSmall = state.matches;
      })

  }



}
