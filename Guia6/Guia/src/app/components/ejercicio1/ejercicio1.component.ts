import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  public FormularioActual: FormGroup;
  isSelected:boolean=false;
  alumnosArray: Alumno[] = [     
    /*{id:"1", name:"Alex", lastname:"Campos",age:35, address:"Res la quinta casa 3",mail:"alex@gmail.com",telephone:"7845-8984"}, 
    {id:"2", name:"Maria",lastname:"Lopez",age:20, address:"Res la rioja casa 9",mail:"lopez@gmail.com",telephone:"7258-7894"},    
  {id:"3", name:"Juan", lastname:"Castro",age:25, address:"Res lomalinda pol A casa 88 ",mail:"Castro@gmail.com",telephone:"6585-7889"}*/]
     selectedAlumno: Alumno = { name:'', lastname:'', age:0 ,address:'',mail:'',telephone:''}; 
     
    //Aqui es donde se traen los datos de firebase en el constructor 

  constructor(private formBuilder: FormBuilder,private database:DatabaseService ) { 
    //se subscribe al metood get alumnos para estar pendiente a los cambios
    this.database.getAlumnos().subscribe(res=>
      //res es la respuesta de objetos desde firebase
      {
        //la funcion map sirve para retornar un nuevo arreglo en este caso por cada 
        //objeto dentro del arreglo res se crea un item que asignara el id del documento de firebase
        // al id del objeto alumno y la data va tomar el valor de los demas campos 
        //para que esto sea posible es necesario que los demas datos tenga los mismos nombres tanto en firebase
        //como en la interface que se haya definido 
        this.alumnosArray=[];
        this.alumnosArray=res.map(item=>
          {
           return {id:item.payload.doc.id,
             ...item.payload.doc.data() } as Alumno
          }); 
          console.log(this.alumnosArray);
      });
  }

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
  
}    

async AddEstudiante()
{
  if(confirm('¿Esta seguro de agregar el Registro?'))
{
  delete this.selectedAlumno.id;
  await this.database.AddEmpleado(this.selectedAlumno)
  .then(res=>
    {
      alert('Registro agregado');
      this.selectedAlumno = {id:'',name:'', lastname:'', age:0 ,address:'',mail:'',telephone:''};
      this.FormularioActual.reset();
      this.Actualizar();
    })
  .catch(error => {
    alert('Ha habido un error');
    console.error(error)}
    );
  
}
}

UpdateEstudiante()
{
  if(confirm('¿Esta seguro de modificar el Registro?'))
{
  this.database.UpdateAlumno(this.selectedAlumno)
  .then(res=>
    {
      alert('Registro modificado');
      this.selectedAlumno = { id:'',name:'', lastname:'', age:0 ,address:'',mail:'',telephone:''};
      this.FormularioActual.reset();
      this.Actualizar();
    })
  .catch(error => {
    alert('Ha habido un error');
    console.error(error)}
    );
  
}
}
delete(): void   
{ 
  if(confirm('¿Esta seguro de eliminar el Registro?'))
  {
    this.database.DeleteAlumno(this.selectedAlumno)
    .then(res=>
      {
        alert('Registro eliminado');
        this.selectedAlumno = {id:'', name:'', lastname:'', age:0 ,address:'',mail:'',telephone:''};
        this.FormularioActual.reset();
        this.Actualizar();
      })
    .catch(error => {
      alert('Ha habido un error');
      console.error(error)}
      );
}
}

Actualizar()
{
  this.database.getAlumnos().subscribe(res=>
    //res es la respuesta de objetos desde firebase
    {
      //la funcion map sirve para retornar un nuevo arreglo en este caso por cada 
      //objeto dentro del arreglo res se crea un item que asignara el id del documento de firebase
      // al id del objeto alumno y la data va tomar el valor de los demas campos 
      //para que esto sea posible es necesario que los demas datos tenga los mismos nombres tanto en firebase
      //como en la interface que se haya definido 
      this.alumnosArray=[];
      this.alumnosArray=res.map(item=>
        {
         return {id:item.payload.doc.id,
           ...item.payload.doc.data() } as Alumno
        }); 
        console.log(this.alumnosArray);
    });
}

}
