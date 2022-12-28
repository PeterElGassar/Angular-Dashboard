import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Labels from 'src/assets/_files/label-en.json'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public lebels:any = Labels;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

navigateRouter(url:string){
  this.router.navigateByUrl(url);
}

}
