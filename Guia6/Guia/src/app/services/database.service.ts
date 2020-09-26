import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Alumno} from '../models/alumno';
import { Observable } from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  //Se crear un coleccion del tipo de dato Alumnos estas collections se importan de angular/fire
  //el observable sirve para estar pendiente de los cambios en la BD en firebase
  private AlumnosCollection: AngularFirestoreCollection<Alumno>;
  Alumnos: Observable<Alumno[]>;
//inyectando el firestore para ingresar datos en firebase
constructor(private firestore: AngularFirestore,private firebase:AngularFireDatabase) { }
getAlumnos() { 
  
  //Se crea la coleccion de tipo Alumnos que aloja los datos dentro de la coleccion alumnos en firebase 
  //luego con snapshotChanges se esta pendiente de los cambios este metodo entre otras cosas devueleve el id 
  //del registro pero para hacer eso hay que suscribirse al objeto
    this.AlumnosCollection = this.firestore.collection<Alumno>('alumnos');
    return this.AlumnosCollection.snapshotChanges();
 }
 
 AddEmpleado(_alumno: Alumno){
     //de esta forma se especifica el id que se utilizara que en este caso es el 10
  return this.AlumnosCollection.add(_alumno);
  
 }
 
 DeleteAlumno(_alumno:Alumno)
 {
   return this.AlumnosCollection.doc(_alumno.id).delete();
 }
 
 UpdateAlumno(_alumno:Alumno)
 { 
   alert(_alumno.id);
   return this.AlumnosCollection.doc(_alumno.id).update(_alumno);
 }
 

}
