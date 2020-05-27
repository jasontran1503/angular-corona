import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';

@Component({
  selector: 'app-corona-vietnam',
  templateUrl: './corona-vietnam.component.html',
  styleUrls: ['./corona-vietnam.component.css']
})
export class CoronaVietnamComponent implements OnInit {

  data = [];

  constructor(private coronaService: CoronaService) { }

  ngOnInit() {
    this.getCoronaVN();
  }

  getCoronaVN() {
    this.coronaService.getCoronaVN().subscribe((res: any) => {
      // console.log(res);
      this.data = res.data;
    }, err => {
      console.log(err);
    })
  }

}
