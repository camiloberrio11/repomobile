import { Component, OnInit } from '@angular/core';
import { NavitaireService } from '../../core/services/navitaire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private navitaireService: NavitaireService) {}

  ngOnInit() {
    this.recordLocator();
  }

  recordLocator(): void {
    this.navitaireService.getInfoRecordLocator().subscribe(
      (data) => console.log(data),
      (err) => console.error(err)
    );
  }
}
