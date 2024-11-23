import { Component } from '@angular/core';
import { InputComponent } from '../../../shared/ui/input/input.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [InputComponent],
})
export class NavbarComponent {}
