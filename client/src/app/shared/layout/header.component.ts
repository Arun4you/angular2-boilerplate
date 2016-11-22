import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector    : 'layout-header',
  templateUrl : 'header.component.html',
  styleUrls   : ['header.component.css']
})
export class HeaderComponent implements OnInit {
  	title = 'Angular2 Boilerplate';

  	constructor(private authService: AuthService) {

  	}
	ngOnInit(): void {
	
	}
}
