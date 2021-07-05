import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

import { FiltroTitulo } from 'app/classes/filters/titulo-parameters.classe';
import { Subject } from 'rxjs';
import { Titulo } from '../../classes/models/titulo.classe';
import { TituloService } from '../../services/titulo.service'
import { formatDateImport, formatDateInput } from '../../utils/datesFormatted';

@Component({
  selector: 'app-titulo-lista',
  templateUrl: './titulo-lista.component.html',
  styleUrls: ['./titulo-lista.component.css']
})
export class TituloListaComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild(DataTableDirective, { static: false })
  @ViewChild('dataTable') table;
  datatableElement: DataTableDirective;


  dtTrigger: Subject<any> = new Subject<any>();
  dataTable: any;
  dtOptions: DataTables.Settings = {};

  public dataSource: Array<Titulo>;
  
  public titulo: FiltroTitulo = {
    dataInicial: formatDateInput("01"),
    dataFinal: formatDateInput(),
    codEmpresa: "1"
  };
  constructor(private service: TituloService) { }

  ngOnInit(): void {
    this.initDatatable(null);
  }

  public initDatatable(data: Array<Titulo>) {
    this.dtOptions = {
      data: data,
      columns: [
        {
          title: 'ID',
          data: 'id',
        }, {
          title: 'Código',
          data: 'codigo'
        }, {
          title: 'Data de Emissão',
          data: 'dataEmissao'
        }, {
          title: 'Data de Vencimento',
          data: 'dataVencimento'
        }, {
          title: 'Valor',
          data: 'valor'
        }, {
          title: 'Situação',
          data: 'situacao',
          visible: false
        }, {
          title: 'CPF / CNPJ',
          data: 'cpfCnpj',
          visible: false
        }, {
          title: 'Natureza',
          data: 'natureza',
          visible: false
        }, {
          title: 'Historico',
          data: 'historico',
          visible: false
        }, {
          title: 'ID Sistema',
          data: 'idSistema',
          visible: false
        }, {
          title: 'ID Empresa',
          data: 'idEmpresa',
          visible: false
        }, {
          title: 'Data de Alteração',
          data: 'dataAlteracao',
          visible: false
        }, {
          title: 'Data de Importação',
          data: 'dataImportacao'
        }, {
          title: 'Centro de Custo',
          data: 'centroCusto'
        }
      ],

      // Declare the use of the extension in the dom parameter
      dom: 'Blfrtip'
      // Configure the buttons
      /*buttons: [
        'colvis',
        'copy',
        'csv',
        'print',
        'excel'
      ]*/
    };
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
      alert("Titulos carregados com sucesso! qtd registros: " + data.length);
      this.titulo = {
        ...this.titulo,
        dataInicial: dataI,
        dataFinal: dataF
      }
      this.initDatatable(data);
      this.rerender();
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

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  rerender() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }


}