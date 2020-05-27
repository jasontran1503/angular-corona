import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corona-world',
  templateUrl: './corona-world.component.html',
  styleUrls: ['./corona-world.component.css']
})
export class CoronaWorldComponent implements OnInit {

  data = [];
  confirmedTotal: number;

  constructor(private coronaService: CoronaService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit() {
    this.getCoronaVN();
  }

  getCoronaVN() {
    this.coronaService.getCoronaWorld().subscribe((res: any) => {
      this.data = res.data;
      // console.log(this.data);
      this.data.forEach(item => {
        // console.log(item.data.confirmed);
        if (item.data.confirmed == '') {
          item.data.confirmed = 0;
        }
        // item.data.confirmed
        this.confirmedTotal += item.data.confirmed
      });
      console.log(this.confirmedTotal);
    }, err => {
      console.log(err);
    })
  }

}
