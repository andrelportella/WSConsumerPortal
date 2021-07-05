import { Component, OnInit } from '@angular/core';
import { TesteService } from '../../services/teste.service'
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empresa } from '../../classes/models/empresa.classe';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit, AfterViewInit {
  
  public displayedColumns: string[] = ['id_empresa', 'nome', 'cpfCnpj'];
  public dataSource: MatTableDataSource<Empresa>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: TesteService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.service.getListaEmpresaWS().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

