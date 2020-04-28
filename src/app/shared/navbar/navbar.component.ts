import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  isOpened: boolean = true;
  navStyle = {};
  count: any = 1;
  dropDownIconTimeSheet: string = '▼';


  ngOnInit() {
    this.createDropDown();
    this.openOrCloseNav('');
  }

  createDropDown() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }


  openOrCloseNav($event) {
    this.count++;

    if (this.count & 1) {
      this.isOpened = false;
    }
    else {
      this.isOpened = true;
    }


    if (this.isOpened) {
      this.navStyle = {
        "width": "250px",
        "backgroundColor": 'white'
      }
    }
    else {
      this.navStyle = {
        "width": "0px"
      }
    }

  }

  timeSheetCount = 0;
  timesheetIconController() {
    this.timeSheetCount++;
    if(this.timeSheetCount & 1) {
      this.dropDownIconTimeSheet = '▲'
    }
    else {
      this.dropDownIconTimeSheet = '▼';
    }
  }

  metricaCount = 0;
  dropDownIconMetrica = '▼';
  metricaIconController() {
    this.metricaCount++;
    if(this.metricaCount & 1) {
      this.dropDownIconMetrica = '▲'
    }
    else {
      this.dropDownIconMetrica = '▼';
    }
  }

  adminCount = 0;
  dropDownIconAdmin = '▼';
  adminIconController() {
    this.adminCount++;
    if(this.adminCount & 1) {
      this.dropDownIconAdmin = '▲'
    }
    else {
      this.dropDownIconAdmin = '▼';
    }
  }
}
