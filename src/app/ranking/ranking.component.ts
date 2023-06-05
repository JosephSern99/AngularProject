import { Component, OnInit } from '@angular/core';

export interface unsortedRankingDataElement {
  State: string,
  Attendance: number
};

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  unsortedRankingData: unsortedRankingDataElement[];
  constructor() { }

  ngOnInit() {
    this.unsortedRankingData = [];
  }

  updateRanking(dataset: number[]) {
    this.unsortedRankingData.splice(0, this.unsortedRankingData.length);
    this.unsortedRankingData.push({
      State: 'Johor',
      Attendance: dataset[0]
    });
    this.unsortedRankingData.push({
      State: 'Kedah',
      Attendance: dataset[1]
    });
    this.unsortedRankingData.push({
      State: 'Kelantan',
      Attendance: dataset[2]
    });
    this.unsortedRankingData.push({
      State: 'Melaka',
      Attendance: dataset[3]
    });
    this.unsortedRankingData.push({
      State: 'Negeri Sembilan',
      Attendance: dataset[4]
    });
    this.unsortedRankingData.push({
      State: 'Pahang',
      Attendance: dataset[5]
    });
    this.unsortedRankingData.push({
      State: 'Pulau Pinang',
      Attendance: dataset[6]
    });
    this.unsortedRankingData.push({
      State: 'Perak',
      Attendance: dataset[7]
    });
    this.unsortedRankingData.push({
      State: 'Perlis',
      Attendance: dataset[8]
    });
    this.unsortedRankingData.push({
      State: 'Selangor',
      Attendance: dataset[9]
    });
    this.unsortedRankingData.push({
      State: 'Terengganu',
      Attendance: dataset[10]
    });
    this.unsortedRankingData.push({
      State: 'Sabah',
      Attendance: dataset[11]
    });
    this.unsortedRankingData.push({
      State: 'Sarawak',
      Attendance: dataset[12]
    });
    this.unsortedRankingData.push({
      State: 'Wilayah Persekutuan Kuala Lumpur',
      Attendance: dataset[13]
    });
    this.unsortedRankingData.push({
      State: 'Wilayah Persekutuan Labuan',
      Attendance: dataset[14]
    });
  }

}
