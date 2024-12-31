import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) { 
    // let data = localStorage.getItem("reservations");
    // if(data){
    //   this.reservations = JSON.parse(data);
    
  }

  // CRUD
  /* So we are creating an observable, which basically means that we are just sending it out 
  and now it's getting processed and we are waiting.
  We are waiting for the actual result or response.(Observable<Reservation[]>)
  And now everyone who's calling that get reservation method here can subscribe to this observable. */
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:3030/reservations');
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`http://localhost:3030/reservation/${id}`);
  } 

  addReservation(reservation: Reservation): Observable<void> {
  return this.http.post<void>(`http://localhost:3030/reservation`,reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3030/reservation/${id}`)
    
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(`http://localhost:3030/reservation/${id}`,updatedReservation);
  }
  
}
