import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  icon!:string;
  titleSection!:string;
  getUrlSection!:String;

  vociDiSpesa = { showAltreVoci: false, showGeneriAlimentari: false, showUtenze: false };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.getUrlSection = params['detail'];
      let str = this.getUrlSection.indexOf('/');
      this.titleSection = this.getUrlSection.slice(0, +str).replace('-', ' ');
      
      // Capitalize all first letter og each word;
      const arr = this.titleSection.split(" ");
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }

      this.titleSection = arr.join(" ");

      this._getIconString(this.getUrlSection);
    })
  }

  private _getIconString(pathString:any) {

    switch(pathString) {
      case 'altre-voci/dettaglio' : 
        this.icon = 'bar_chart';
        this.vociDiSpesa = { showAltreVoci: true, showGeneriAlimentari: false, showUtenze: false };
        break;
      case 'generi-alimentari/dettaglio' : 
        this.icon = 'fastfood';
        this.vociDiSpesa = { showAltreVoci: false, showGeneriAlimentari: true, showUtenze: false };
        break;
      case 'utenze/dettaglio' : 
        this.icon = 'bolt';
        this.vociDiSpesa = { showAltreVoci: false, showGeneriAlimentari: false, showUtenze: true };
        break;
    }

  }

  navigateToHome() {
    this.router.navigate([".."]);
  }

}
