import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    constructor(public matDialog: MatDialog) {}

    openDialog() {
        this.matDialog.open(DialogComponent);
    }

    ngOnInit(): void {}
}
