import { Component, EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-accesos-component',
  imports: [],
  templateUrl: './accesos-component.html',
  styleUrl: './accesos-component.css'
})
export class AccesosComponent {
  @Output() navegarPeticion = new EventEmitter<void>();
  irAPeticion(){
    this.navegarPeticion.emit();
  }

}
