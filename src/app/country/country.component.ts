import { Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-country',
  styleUrls: ['country.component.css'],
  templateUrl: 'country.component.html'
})

export class CountryComponent implements OnInit{


  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, year: 2005, number: 1675},
    {position: 2, year: 2006, number: 1757},
    {position: 3, year: 2007, number: 2038},
    {position: 4, year: 2008, number: 2428},
    {position: 5, year: 2009, number: 2678},
    {position: 6, year: 2010, number: 2925},
    {position: 7, year: 2011, number: 2219},
    {position: 8, year: 2012, number: 2721},
    {position: 9, year: 2013, number: 3307},
    {position: 10, year: 2014, number: 3692},
    {position: 11, year: 2015, number: 3692},
    {position: 12, year: 2016, number: 4177},
    {position: 13, year: 2017, number: 4177},
  ];

  data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  constructor() { }

  displayedColumns: string[] = ['position', 'year', 'number'];



  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  ngOnInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  updateDataSource(dataset: number[],dataset2: number[])
  {
    this.ELEMENT_DATA = [
      {position: 1, year:  dataset[0], number: dataset2[0]},
      {position: 2, year:  dataset[1], number: dataset2[1]},
      {position: 3, year:  dataset[2], number: dataset2[2]},
      {position: 4, year:  dataset[3], number: dataset2[3]},
      {position: 5, year:  dataset[4], number: dataset2[4]},
      {position: 6, year:  dataset[5], number: dataset2[5]},
      {position: 7, year:  dataset[6], number: dataset2[6]},
      {position: 8, year:  dataset[7], number: dataset2[7]},
      {position: 9, year:  dataset[8], number: dataset2[8]},
      {position: 10, year: dataset[9], number: dataset2[9]},
      {position: 11, year: dataset[10], number: dataset2[10]},
      {position: 12, year: dataset[11], number: dataset2[11]},
      {position: 13, year: dataset[12], number: dataset2[12]},
    ];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  applyFilter(filterValue: string)
  {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  year: number;
  position: number;
  number: number;
}
