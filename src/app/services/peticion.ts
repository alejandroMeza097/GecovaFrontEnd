
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


 
export interface peticion{
  id?:number;
  cliente:string;
  unidad:string;
  nombreGestor:string;
  solicitante:string;
  razonSocial:string;
  prioridad:string;
  posiciones:string;
  tipoContratacion: string;
  codigoProyecto:string;
  nombreProyecto:string;
  elementoParaContrataciones:string;
  mesesAsignacion:string;
  modalidad:string;
  lugarDefinitivo:string;
  tipoAsignacion:string;
  planCarrera:string;
  rolDesarrollo:string;
  evaluadorPerformanceTalent:string;
  tasa:number;
  tasaTope:number;
  tipoProyecto:string;
  margenPresupuesto:number;
  margenAcumulado:number;
  planRecuperacion:string;
  comentariosGrales:string;
  perfil:string;
  nivel:string;
  conocimientosTecnicos:string;
  conocimientosFuncionales:string;

}

 
@Injectable({
  providedIn: 'root',



})
export class PeticionService {
 
  private apiUrl = 'http://localhost:8080/peticion';
 
  constructor(private http: HttpClient) {}
 

  
   crearPeticion(dataPeticion:peticion ): Observable<peticion> {
     return this.http.post<peticion>(this.apiUrl,dataPeticion);
   }
 
}
