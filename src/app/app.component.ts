import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <ng-template #loading>
    <div class="vh-100 vw-100 d-flex align-items-center">
      <div class="text-center w-100">
        <nz-spin nzSimple></nz-spin>
      </div>
    </div>
  </ng-template>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
