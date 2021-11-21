import { Component } from "@angular/core";
import { SpinnerService } from "../../services/spinner.service";


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.html',
  styleUrls: ['./spinner.scss']
})
export class SpinnerComponent {

  public active: boolean = false;

    constructor(
        private spinnerService: SpinnerService
    ) {
        this.active = this.spinnerService.state();
        this.spinnerService.obs().subscribe((state: boolean) => {
            this.active = state;
        });
    }

}
