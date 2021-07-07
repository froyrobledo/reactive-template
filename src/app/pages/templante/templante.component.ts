import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-templante',
  templateUrl: './templante.component.html',
  styleUrls: ['./templante.component.css']
})
export class TemplanteComponent implements OnInit {


usuario = {
  nombre: 'Howard',
  apellido: 'Hinestroza',
  correo: 'Froyrobledo99@gmail.com'
}

paises: any[] = []
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(paises =>{
      console.log(paises);
      this.paises = paises;
      
    })
  }


  guardar(forma: NgForm){
    console.log(forma.value);
    if(forma.invalid){
      Object.values(forma.controls).forEach(control =>{
        
        control.markAsTouched();

        

      })
    }
  }
  
}
