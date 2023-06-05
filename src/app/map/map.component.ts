import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapData;
  geochart;
  mapOptions = {
    region: 'MY',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: {colors: ['#00853f', '#3D1268', '#e31b23']},
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#f8bbd0',
    defaultColor: '#f5f5f5',
  };

  @Output() geochartAfterInit = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
    google.charts.load('current', {
      'packages': ['geochart'],
      'mapsApiKey': 'AIzaSyAOAAdggHBhG47mSYyhGMcVLOJSBJ26bus'
    });
    google.charts.setOnLoadCallback(this.geochartOnInit.bind(this));
  }

  geochartOnInit() {
    let defaultValue = 0;
    this.mapData = new google.visualization.DataTable();
    this.mapData.addColumn('string', 'State');
    this.mapData.addColumn('number', 'Attendance');
   // this.mapData.addColumn('number', 'Population Estimation(mil)');

    this.mapData.addRows([
      [{ v: 'MY-01', f: 'Johor' }, defaultValue],
      [{ v: 'MY-02', f: 'Kedah' }, defaultValue],
      [{ v: 'MY-03', f: 'Kelantan' }, defaultValue],
      [{ v: 'MY-04', f: 'Melaka' }, defaultValue],
      [{ v: 'MY-05', f: 'Negeri Sembilan' }, defaultValue],
      [{ v: 'MY-06', f: 'Pahang' }, defaultValue],
      [{ v: 'MY-07', f: 'Pulau Pinang' }, defaultValue],
      [{ v: 'MY-08', f: 'Perak' }, defaultValue],
      [{ v: 'MY-09', f: 'Perlis' }, defaultValue],
      [{ v: 'MY-10', f: 'Selangor' }, defaultValue],
      [{ v: 'MY-11', f: 'Terengganu' }, defaultValue],
      [{ v: 'MY-12', f: 'Sabah' }, defaultValue],
      [{ v: 'MY-13', f: 'Sarawak' }, defaultValue],
      [{ v: 'MY-14', f: 'Wilayah Persekutuan Kuala Lumpur' }, defaultValue],
      [{ v: 'MY-15', f: 'Wilayah Persekutuan Labuan' }, defaultValue],
    ]);

    this.geochart = new google.visualization.GeoChart(document.getElementById('map'));
    this.geochart.draw(this.mapData, this.mapOptions);
    this.geochartAfterInit.emit();

  }

  updateMap(dataset: number[]) {
    dataset.forEach((data, i) => {
      this.mapData.setValue(i, 1, data);
    })
    this.geochart.draw(this.mapData, this.mapOptions);

  }
}
