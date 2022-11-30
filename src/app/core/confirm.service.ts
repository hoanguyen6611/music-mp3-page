import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({ providedIn: 'root' })
export class ConfirmService {
  constructor(
    private readonly modalService: NzModalService,
    private readonly translateService: TranslateService,
  ) {}

  confirm(
    onOk: () => void,
    onCancel: () => void = () => {},
    title: string = 'POPCONFIRM.TITLE',
    content: string = 'POPCONFIRM.CONTENT',
  ) {
    this.modalService.warning({
      nzTitle: this.translateService.instant(title),
      nzContent: this.translateService.instant(content),
      nzOkText: this.translateService.instant('POPCONFIRM.CLOSE'),
      nzCancelText: this.translateService.instant('POPCONFIRM.CANCEL'),
      nzOnOk: () => onOk(),
      nzOnCancel: () => onCancel(),
      nzCentered: true,
      nzWidth: '600px',
      nzClosable: false,
    });
  }

  customConfirm(
    title: string,
    content: string,
    onOk: () => void,
    okText: string,
    onCancel: () => void,
    cancelText: string,
  ) {
    this.modalService.warning({
      nzTitle: title,
      nzContent: content,
      nzOkText: okText,
      nzCancelText: cancelText,
      nzOnOk: () => onOk(),
      nzOnCancel: () => onCancel(),
      nzCentered: true,
      nzWidth: '600px',
      nzClosable: false,
    });
  }
}
