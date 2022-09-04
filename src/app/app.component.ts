import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>

<ng-template #loading>
  <div class="vh-100 vw-100 d-flex align-items-center">
    <div class="text-center w-100">
    </div>
  </div>
</ng-template>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-mp3-page';
}
