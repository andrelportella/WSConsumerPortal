export interface Razao {
  id?: number;
  codigo?: number;
  acesso?: string;
  nome?: string;
  origem?: string;
  lancamento?: number;
  planilha?: number;
  documento?: string;
  data?: string;
  dataExtrato?: string;
  contrapartida?: string;
  centroCusto?: string;
  historico?: string;
  debito?: number;
  credito?: number;
  saldo?: number;
  tipoSaldo?: string;
  agente?: string;
  nomeAgente?: string;
  idSistema?: string;
  idEmpresa?: string;
  dataAlteracao?: string;
  dataImportacao?: string;
}