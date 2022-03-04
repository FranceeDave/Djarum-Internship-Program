import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    Header = "";
    SubHeader =false;
    // Divider = false;
    // SearchBar = false;
    IMG = false;
    nama = false;
    constructor(public matDialog: MatDialog) {}

    openDialog() {
        this.matDialog.open(DialogComponent);
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.Header ="Employee List";
            this.SubHeader=true;
            // this.Divider=true;
            // this.SearchBar=true;
            this.IMG = true;
            this.nama = true;
       
        }, 2000);
    }
}
