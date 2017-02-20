import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers,URLSearchParams } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { TranslateService } from 'ng2-translate';
import { CustomValidators } from 'ng2-validation';
import { GlobalServiceRef} from '../../../shared/GlobalServiceRef'
import { MdSelect } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data;
  @Input() PositionId : Number;
  constructor(private router : Router, public http:Http) { }

  ngOnInit() {
  	this.http.get(GlobalServiceRef.URLService+"/Header/HeaderTop/Job/"+this.PositionId).subscribe(res => this.data = res.json());
  }

}
