import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-navbar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
  }

  onSdlClick(): void {
    this.router.navigate(['/sdl']);
  }

  onJumperClick(): void {
    this.router.navigate(['/jumper']);
  }

}
