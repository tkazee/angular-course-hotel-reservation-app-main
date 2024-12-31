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

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {

    reservation.id = Date.now().toString();

    this.reservations.push(reservation);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1)
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = updatedReservation;
    //localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
  
}
