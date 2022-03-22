import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright_name = "Pairchay Gupta";
  constructor() { }

  ngOnInit(): void {
  }

}
