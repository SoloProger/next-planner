import {Component} from '@angular/core';
import {InputComponent} from "../../../shared/ui/input/input.component";

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="flex ai-center jc-space p-25 gap-32">
      <div class="flex wp-250 jc-center ai-center gap-10 bg-white p-10 border-radius-5 shadow">
        <span class="title-3 pointer">Planner</span>
      </div>
      <div class="w-100 bg-white flex ai-center gap-16 p-12 border-radius-5 shadow">
        <app-input inputSize="small" placeholder="Поиск..." blockStyles="w-100" class="w-100"></app-input>
        <img src="/img/person.png" alt="avatar"/>
      </div>
    </nav>`,
  standalone: true,
  imports: [
    InputComponent
  ],
})

export class NavbarComponent {
}
