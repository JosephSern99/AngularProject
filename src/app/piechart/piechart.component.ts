import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pieChartLabels = ['Johor','Kedah','Kelantan','Melaka','Negeri Sembilan','Pahang','Pulau Pinang','Perak','Perlis','Selangor','Terengganu','Sabah','Sarawak','WP Kuala Lumpur','WP Labuan'];
  public pieChartData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  public pieChartType = 'pie';
  public pieChartTitle ='2017';

  updatePie(dataset: number[],year: string, category: number) {


    this.pieChartData = [dataset[0],dataset[1],dataset[2],dataset[3],dataset[4],dataset[5],dataset[6],dataset[7],dataset[8],dataset[9],dataset[10],dataset[11],dataset[12],dataset[13],dataset[14]];
    this.pieChartTitle =  year + " " + "Category:"+"'"+category +"'"+" " +  "attendance in Malaysia by State";


  }
}
