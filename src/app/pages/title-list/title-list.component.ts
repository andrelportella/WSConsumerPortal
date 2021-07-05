import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service'
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Titulo } from '../../classes/models/titulo.classe';
import { FiltroTitulo } from 'app/classes/filters/titulo-parameters.classe';
import { formatDateImport, formatDateInput } from '../../utils/datesFormatted';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit, AfterViewInit {

  public titulo: FiltroTitulo = {
    dataInicial: formatDateInput("01"),
    dataFinal: formatDateInput(),
    codEmpresa: "1"
  };
  public displayedColumns: string[] = ['id', 'codigo', 'dataEmissao', 'dataVencimento', 'valor', 'situacao', 'cpfCnpj', 'natureza', 'historico', 'idSistema', 'idEmpresa', 'dataAlteracao', 'dataImportacao', 'centroCusto'];
  public dataSource: MatTableDataSource<Titulo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: TituloService) {
    this.dataSource = new MatTableDataSource([]);
  }
  //
  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => this.dataSource.sort = this.sort);
  }

  public consultar() {

    let dataI = this.titulo.dataInicial;
    let dataF = this.titulo.dataFinal;

    this.titulo = {
      ...this.titulo,
      dataInicial: formatDateImport(this.titulo.dataInicial),
      dataFinal: formatDateImport(this.titulo.dataFinal)
    }

    this.service.getTitles(this.titulo).subscribe(data => {
      alert("Titulos carregados com sucesso!");
      this.titulo = {
        ...this.titulo,
        dataInicial: dataI,
        dataFinal: dataF
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      alert(error.error.message);
      console.log("Deu Ruim", error.error);
    })

    this.titulo = {
      ...this.titulo,
      dataInicial: dataI,
      dataFinal: dataF
    }
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

