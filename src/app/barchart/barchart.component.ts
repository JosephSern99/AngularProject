import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public barChartData = [{data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],label:'Data'}];
  constructor() { }

  ngOnInit(): void {

  }
  public barChartOptions = {
    scaleShowVerticalLines:true,
    responsive:true
  };


  public barChartLabels = ['Johor','Kedah','Kelantan','Melaka','Negeri Sembilan','Pahang','Pulau Pinang','Perak','Perlis','Selangor','Terengganu','Sabah','Sarawak','WP Kuala Lumpur','WP Labuan'];
  public barChartType = 'bar';
  public barChartLegend = true;


  updateBar(dataset: number[],year: number, category: string) {

  this.barChartData = [
    {data: [dataset[0],dataset[1],dataset[2],dataset[3],dataset[4],dataset[5],dataset[6],dataset[7],dataset[8],dataset[9],dataset[10],dataset[11],dataset[12],dataset[13],dataset[14]],label:year + " " + "Category:"+"'"+category +"'"+" " +  "attendance in Malaysia by State"}

  ]};

}
