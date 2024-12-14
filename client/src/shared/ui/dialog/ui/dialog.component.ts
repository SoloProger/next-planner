import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  OnDestroy,
  Type,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from '../lib/directives/insertion.directive';
import { DialogRef } from '../lib/utils/dialog-ref';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent<T> implements AfterViewInit, OnDestroy {
  public componentRef!: ComponentRef<any>;
  public childComponentType!: Type<any>;

  @ViewChild(InsertionDirective) insertionPoint!: InsertionDirective;

  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();
  public title!: string;
  public data?: T;

  constructor(
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef
  ) {}

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  public loadChildComponent(componentType: Type<any>): void {
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentType);
  }

  public close(): void {
    this._onClose.next(null);
  }

  public onOverlayClicked(evt: MouseEvent): void {
    this.dialogRef.close();
  }

  public onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
