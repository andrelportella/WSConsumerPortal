import { Component, OnInit } from '@angular/core';
import { FiltroTitulo } from '../../classes/filters/titulo-parameters.classe';
import { TituloService } from '../../services/titulo.service';

@Component({
  templateUrl: './titulo-screen.component.html',
  styleUrls: ['./titulo-screen.component.css']
})
export class TituloScreenComponent implements OnInit {

  public titulo: FiltroTitulo = {
    dataInicial: this.formatDateInput("01"),
    dataFinal: this.formatDateInput(),
    codEmpresa: "1"
  };

  constructor(private service: TituloService) { }

  ngOnInit(): void {
  }

  public importar() {
    let dataI = this.titulo.dataInicial;
    let dataF = this.titulo.dataFinal;

    this.titulo = {
      ...this.titulo,
      dataInicial: this.formatDateImport(this.titulo.dataInicial),
      dataFinal: this.formatDateImport(this.titulo.dataFinal)
    }

    this.service.importTitles(this.titulo).subscribe(data => {
      alert("Importou com sucesso!");
      console.log("importou", data);
      this.titulo = {
        ...this.titulo,
        dataInicial: dataI,
        dataFinal: dataF
      }
    }, error => {
      alert("Error, servidor da Redesoft fora do ar!");
      console.log("Deu Ruim", error.message);
    })

    this.titulo = {
      ...this.titulo,
      dataInicial: dataI,
      dataFinal: dataF
    }
  }

  public formatDateInput(day?: string): string {
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let timeFormatted = `${year}-${month}-${day ? day : this.lastDay(year, month)}`;
    return timeFormatted;
  }

  public lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  }

  public formatDateImport(date?: string): string {
    let day = date.substring(8, 10);
    let month = date.substring(5, 7);
    let year = date.substring(0, 4);
    let timeFormatted = `${day}/${month}/${year}`;
    return timeFormatted;
  }

}
