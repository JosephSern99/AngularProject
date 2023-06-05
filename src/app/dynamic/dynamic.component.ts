import { Component, ViewChild, OnInit } from '@angular/core';
import { OralService } from '../services/oral.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  data:Array<any>;
  data1:Array<any>;

  newData = null;
  dataSource = new MatTableDataSource(this.newData);

  displayedColumns: string[] = ['_id', 'year', 'sector', 'type','count'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor(private service: OralService) {
    this.data = new Array<any>();
  }

  ngOnInit(){
    this.getDataFromAPI();
  }
  getDataFromAPI()
  {
    this.service.getDataAPI().subscribe((response: any)=>{
      console.log(response);
      this.newData = response.result.records;
      this.dataSource.data = this.newData;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },(error) => {console.log('error occured: ', error)});
  }
}
