import {
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type,
  ViewContainerRef,
} from '@angular/core';

//source: https://betterprogramming.pub/angular-create-a-lazy-loaded-tailwind-modal-73675c66acae

@Injectable({
  providedIn: 'root',
})
export class ModalService<T> {
  private componentRef: ComponentRef<T> | undefined;

  public viewContainerRef: ViewContainerRef | undefined;

  constructor(private appRef: ApplicationRef, private injector: Injector) {}

  async open(component: Type<T>): Promise<void> {
    if (this.componentRef) {
      return;
    }

    if (this.viewContainerRef === undefined) {
      return;
    }

    this.componentRef = this.viewContainerRef.createComponent(component);
    this.appRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  async close(): Promise<void> {
    if (!this.componentRef) {
      return;
    }

    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();

    this.componentRef = undefined;
  }

  set vcRef(vcr: ViewContainerRef) {
    this.viewContainerRef = vcr;
  }
}
