import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteDilaogComponent } from '../delete-dilaog/delete-dilaog.component';
import { DialogComponent } from '../dialog-main/dialog.component';
import { ApiService } from '../service/api.service';
import { SnackbarService } from '../service/snackbar.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  value = '';
  allEmployee: any = [];
  showFiller = false;
  filteredList: any = [];
  employees: any = [];
  pageNumber: number = 0;
  pageSize: number = 5;
  filterControl = new FormControl();

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'position',
    'id',
    'name',
    'gender',
    'dob',
    'address',
    'action',
  ];
  @ViewChild(MatPaginator)
  paginator: any;

  constructor(
    private service: ApiService,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllEmployeeData();
    this.filteredlistFunction();
  }

  getAllEmployeeData() {
    this.service
      .paginatedEmployeeData({ page: this.pageNumber, size: this.pageSize })
      .subscribe((data: any) => {
        this.employees = data.employees;
        this.filteredList = this.employees;
        this.dataSource.data = this.filteredList;
        this.paginator.length = data.totalRecords;
        // this.snackbar.openSnackBar();\
      });
  }

  openDialog(action: string, editData: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        action: action,
        editData: editData,
      },
      disableClose: true,
      width: '550px',
      height: '310px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (action === 'add' && result != null) {
        this.service
          .postEmployeeData(result)
          .subscribe(() => this.getAllEmployeeData());
      } else if (action === 'edit' && result != null) {
        result.id = editData.id;
        this.service
          .updateEmployeeData(result)
          .subscribe(() => this.getAllEmployeeData());
      }
    });
  }

  openDeleteDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteDilaogComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service
          .deleteEmployee(id)
          .subscribe(() => this.getAllEmployeeData());
      }
    });
  }

  filteredlistFunction() {
    this.filterControl.valueChanges.subscribe((res) => {
      if (res != '') {
        this.filteredList = this.employees.filter((ele: any) =>
          ele.name.toLowerCase().includes(res.toLowerCase())
        );
        this.dataSource.data = this.filteredList;
      } else {
        this.filteredList = this.employees;
      }
    });
  }

  getServerData(event: any) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
    this.getAllEmployeeData();
  }
}
