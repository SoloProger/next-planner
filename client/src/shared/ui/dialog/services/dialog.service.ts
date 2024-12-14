import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { DialogConfig } from '../lib/configs/dialog.config';
import { DialogInjector } from '../lib/utils/dialog-injector';
import { DialogRef } from '../lib/utils/dialog-ref';
import { DialogComponent } from '../ui/dialog.component';

@Injectable()
export class DialogService<T = any> {
  private componentRef!: ComponentRef<DialogComponent<T>>;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public openDialog(componentType: Type<any>, config: DialogConfig): DialogRef {
    const dialogRef = this.appendDialogComponentToBody(config);

    this.componentRef.instance.childComponentType = componentType;

    this.componentRef.instance.title = config.title;
    this.componentRef.instance.data = config.data;

    return dialogRef;
  }

  private appendDialogComponentToBody(config: DialogConfig): DialogRef {
    const map = new WeakMap();

    map.set(DialogConfig, config);

    const dialogRef = new DialogRef();

    map.set(DialogRef, dialogRef);

    const subscription = dialogRef.afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody();
      subscription.unsubscribe();
    });

    const componentRef = createComponent(DialogComponent<T>, {
      environmentInjector: this.appRef.injector,
      elementInjector: new DialogInjector(this.injector, map),
    });

    this.appRef.attachView(componentRef.hostView);

    const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElement);

    this.componentRef = componentRef;

    this.componentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });

    return dialogRef;
  }

  private removeDialogComponentFromBody(): void {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}
