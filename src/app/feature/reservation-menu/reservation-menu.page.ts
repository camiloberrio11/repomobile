import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reservation-menu',
  templateUrl: './reservation-menu.page.html',
  styleUrls: ['./reservation-menu.page.scss'],
})
export class ReservationMenuPage implements OnInit {
  recordLocator: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.recordLocator = this.route.snapshot.paramMap.get('recordlocator');
  }
}
