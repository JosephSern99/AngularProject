import { Component, OnInit, ViewChild } from '@angular/core';
import { OralService } from './services/oral.service';
import { MapComponent } from './map/map.component';
import { RankingComponent } from './ranking/ranking.component';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { CountryComponent } from './country/country.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Oral HealthCare by Group KwispyKweme';
  title2 = "Oral HealthCare Attendance in Malaysia"
  title3 = 'Amount of Dentist in Malaysia and in Singapore';
  title4 = "Symptoms of Oral Health and Related Info's";
  title5 = "Malaysia";
  title6 = "Singapore";
  yearAvailable = [2016, 2017];
  categoryAvailable = [];
  yearFilter;
  categoryFilter;
  dataset: number[];
  dataset1: number[];
  dataset2: number[];
  @ViewChild('attendanceOralhealthcareMap', { static: false }) attendanceOralhealthcareMap: MapComponent;
  @ViewChild('attendanceRankingList', { static: false}) attendanceRankingList : RankingComponent;
  @ViewChild('attendanceBarChart', { static: false}) attendanceBarChart: BarchartComponent;
  @ViewChild('attendanceDoughnutChart', { static: false}) attendanceDoughnutChart: DoughnutchartComponent;
  @ViewChild('attendancePieChart',{static: false}) attendancePieChart: PiechartComponent;
  @ViewChild('attendanceDataSource',{static: false}) attendanceDataSource: CountryComponent;

  constructor(private service: OralService) { }
  ngOnInit() {
    this.yearFilter = 2017;
    this.yearChanged(2017);
    this.updateCountryData();
    this.updateCountryDataValues();
  }

  yearChanged(year: number) {
    this.service.getAvailableCategories(year).subscribe((response: any[]) => {
      this.categoryAvailable = response;
      this.categoryAvailable.unshift('All');
      this.categoryFilter = 'All';
    }, (errorMessage) => {
      throw (errorMessage.error);
    });
  }

  updateInitData() {
    this.updateDataset(this.yearFilter, undefined).then(() => {
      this.attendanceOralhealthcareMap.updateMap(this.dataset);
      this.attendanceRankingList.updateRanking(this.dataset);
      this.attendanceBarChart.updateBar(this.dataset,this.yearFilter,this.categoryFilter);
      this.attendanceDoughnutChart.updateDoughnut(this.dataset,this.yearFilter,this.categoryFilter);
      this.attendancePieChart.updatePie(this.dataset,this.yearFilter,this.categoryFilter);
      this.attendanceDataSource.updateDataSource(this.dataset1,this.dataset2);
    }, (error) => {
      throw (error);
    });

  }

  updateData() {
    this.updateDataset(this.yearFilter, this.categoryFilter == 'All' ? undefined : this.categoryFilter).then(() => {
      this.attendanceOralhealthcareMap.updateMap(this.dataset);
      this.attendanceRankingList.updateRanking(this.dataset);
      this.attendanceBarChart.updateBar(this.dataset,this.yearFilter,this.categoryFilter);
      this.attendanceDoughnutChart.updateDoughnut(this.dataset,this.yearFilter,this.categoryFilter);
      this.attendancePieChart.updatePie(this.dataset,this.yearFilter,this.categoryFilter);
      this.attendanceDataSource.updateDataSource(this.dataset1,this.dataset2);
    }, (error) => {
      throw (error);
    });
  }



  updateDataset(year: number, category: string) {
    return new Promise((resolve, reject) => {
      if (!year) {
        reject("Invalid year");
      }
      if (category) {

        this.service.getYearCategoryAttendance(year, category)
          .subscribe((response: any) => {

            this.dataset = response.data[0].data;
            resolve();
          }, errorMessage => {
            reject(errorMessage.error);
          });
      }
      else {

        this.service.getYearAttendance(year)
          .subscribe((response: any) => {
            let statesData: any[] = response.data;
            this.dataset = statesData.reduce((data: any[], category: { data: any[] }) => {
              category.data.forEach((category, i) => {
                data[i] = (data[i] || 0) + category;
              });
              return data;
            }, []);
            resolve();
          }, errorMessage => {
            reject(errorMessage.error);
          });
      }
    })
  }

  updateCountryData() {
    return new Promise((resolve, reject) => {


      this.service.getDataSource()
        .subscribe((response: any) => {

          this.dataset1 = response;
          resolve();
        }, errorMessage => {
          reject(errorMessage.error);
        });


    })

  }

  updateCountryDataValues() {
    return new Promise((resolve, reject) => {


      this.service.getDataSourceValues()
        .subscribe((response: any) => {
          var data = [];

          for(let i = 0; i < 13 ; i++)
          {
            data[i] = response.data[i].data;
          }
          this.dataset2=data;
          resolve();
        }, errorMessage => {
          reject(errorMessage.error);
        });


    })

  }




}

