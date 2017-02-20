import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response ,Headers,URLSearchParams} from '@angular/http';

import { GlobalServiceRef} from '../../../shared/GlobalServiceRef'

@Component({
  selector: 'app-selectjob',
  templateUrl: './selectjob.component.html',
  styleUrls: ['./selectjob.component.scss']
})
export class SelectjobComponent implements OnInit {
  data;
  constructor( private router : Router, public http:Http) {
      this.http.get(GlobalServiceRef.URLService+"/Header/position").subscribe(res => this.data = res.json());
  }
  ngOnInit() {
  }

}
