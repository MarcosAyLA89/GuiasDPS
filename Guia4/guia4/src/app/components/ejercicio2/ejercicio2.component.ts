import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {
  public FormularioActual: FormGroup;
  articulos = null;  
  art = { 
  codigo: 0,   
  descripcion: null,
  precio: null ,
  proveedor:null,
  fabricante:null
}  

  constructor(private articulosServicio: ArticulosService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.recuperarTodos();
     this.buildForm();
  }
  private buildForm(){
    this.FormularioActual = this.formBuilder.group({
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required]],
      proveedor: ['', [Validators.required]],
      fabricante: ['', [Validators.required]]
    });
  }
  

  recuperarTodos()
   {this.articulosServicio.recuperarTodos().subscribe(result =>
     this.articulos = result);
     }  
  alta()
   {
    
     this.articulosServicio.alta(this.art).subscribe(datos => 
    {if (datos['resultado'] == 'OK') 
    {
      alert(datos['mensaje']);
      this.recuperarTodos();
      this.art = {codigo: 0, descripcion: null, precio: null,proveedor:null,fabricante:null};  
         }   
     });
    }  
  baja
  (codigo) 
  { 
    if (confirm('¿Esta seguro de elimiar el Registro?'))
     {       this.articulosServicio.baja(codigo).subscribe(datos => {  
              if (datos['resultado'] == 'OK') {
              alert(datos['mensaje']);     
               this.recuperarTodos();     
               } 
               }); 
              
              }  
  }

  modificacion() 
  {     
    this.articulosServicio.modificacion(this.art).subscribe(datos => { 
      if (datos['resultado'] == 'OK') 
      { 
        alert(datos['mensaje']);
        this.recuperarTodos();
        this.art = {codigo: 0,descripcion: null, precio: null,proveedor:null,fabricante:null};  
           }
          });  
        }  

        async seleccionar(codigo) 
        {   
        
         this.articulosServicio.seleccionar(codigo).subscribe(result => this.art = result [0]);
         
           
            }  
          
  hayRegistros()
   {     return true;   }  
 
/*PasarDatosEdit()
{
  
  this.FormularioActual.controls['descripcion'].setValue(this.art.descripcion);
  this.FormularioActual.controls['precio'].setValue(this.art.precio);
  this.FormularioActual.controls['proveedor'].setValue(this.art.proveedor);
  this.FormularioActual.controls['fabricante'].setValue(this.art.fabricante);
}
AlmacenarDatosEdit()
{
  
  this.art.descripcion=this.FormularioActual.controls['descripcion'].value;
  this.art.precio=this.FormularioActual.controls['precio'].value;
  this.art.proveedor=this.FormularioActual.controls['proveedor'].value;
  this.art.fabricante=this.FormularioActual.controls['fabricante'].value;
}*/
}
