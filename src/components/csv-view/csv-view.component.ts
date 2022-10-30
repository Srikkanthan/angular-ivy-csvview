import { Component } from '@angular/core';

@Component({
  selector: 'csv-view',
  templateUrl: './csv-view.component.html',
  styleUrls: ['./csv-view.component.css'],
})
export class CsvView extends Component {
  csvText = 'This is from angular';

  onShow() {
    alert(this.csvText);
  }
}
