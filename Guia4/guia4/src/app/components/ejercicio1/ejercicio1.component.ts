import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  public FormularioActual: FormGroup;
  alumnoArray: Alumno[] = [     
    {id:1, name:"Alex", lastname:"Campos",age:35, address:"Res la quinta casa 3",mail:"alex@gmail.com",telephone:"7845-8984"}, 
    {id:2, name:"Maria",lastname:"Lopez",age:20, address:"Res la rioja casa 9",mail:"lopez@gmail.com",telephone:"7258-7894"},    
     {id:3, name:"Juan", lastname:"Castro",age:25, address:"Res lomalinda pol A casa 88 ",mail:"Castro@gmail.com",telephone:"6585-7889"}]
     selectedAlumno: Alumno = {id:0, name:'', lastname:'', age:0 ,address:'',mail:'',telephone:''}; 
     public getError(controlName: string): string {
      let error = '';
      const control = this.FormularioActual.get(controlName);
      if (control.touched && control.errors != null) {
        error = JSON.stringify(control.errors);
      }
      return error;
    }
    

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(){
    this.FormularioActual = this.formBuilder.group({
      nombre:['',Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0),Validators.max(100)]],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  
  openForEdit(alumno: Alumno): void 
  {     
  this.selectedAlumno = alumno;
  //Esto sirve para pasar datos del objeto alumno seleccionado al formGroup 
  this.FormularioActual.controls['nombre'].setValue(this.selectedAlumno.name);
  this.FormularioActual.controls['apellido'].setValue(this.selectedAlumno.lastname);
  this.FormularioActual.controls['edad'].setValue(this.selectedAlumno.age);
  this.FormularioActual.controls['direccion'].setValue(this.selectedAlumno.address);
  this.FormularioActual.controls['correo'].setValue(this.selectedAlumno.mail);
  this.FormularioActual.controls['telefono'].setValue(this.selectedAlumno.telephone);

  
  }

  addOrEdit(): void   {  
  this.selectedAlumno.name=this.FormularioActual.controls['nombre'].value;
  this.selectedAlumno.lastname=this.FormularioActual.controls['apellido'].value;
  this.selectedAlumno.age=this.FormularioActual.controls['edad'].value;
  this.selectedAlumno.address=this.FormularioActual.controls['direccion'].value;
  this.selectedAlumno.mail=this.FormularioActual.controls['correo'].value;
  this.selectedAlumno.telephone=this.FormularioActual.controls['telefono'].value;
  if(this.selectedAlumno.id === 0) // INSERT 
  {
  this.selectedAlumno.id = this.alumnoArray.length + 1;
  this.alumnoArray.push(this.selectedAlumno);
  }
  this.selectedAlumno = {id:0, name:'', lastname:'', age:0 ,address:'',mail:'',telephone:''};
}    
delete(): void   
{ 
if(confirm('¿Esta seguro de elimiar el Registro?'))
{
this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);     
 this.selectedAlumno = {id:0, name:'', lastname:'', age:0 ,address:'',mail:'',telephone:''};  
} 
}

}
