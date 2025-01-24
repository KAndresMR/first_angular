import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Perro } from '../model/perros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

  private collectionName = 'perros'; // Nombre de la colección

  constructor(private firestore: Firestore) {}

  agregarPerro(perro: Perro) {
    const perrosCollection = collection(this.firestore, 'perros');
    return addDoc(perrosCollection, { ...perro });
  }

  // Listar perros
  listarPerros(): Observable<any[]> {
    const perrosCollection = collection(this.firestore, this.collectionName);
    return collectionData(perrosCollection, { idField: 'id' }); // Incluye el ID del documento
  }

  // Eliminar perro
  eliminarPerro(id: string) {
    const docRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(docRef);
  }

  //Editar perro
  editarPerro(id: string, perro: Partial<Perro>){
    const perroDoc = doc(this.firestore, `perro/${id}`);
    return updateDoc(perroDoc, perro);
  }


}
