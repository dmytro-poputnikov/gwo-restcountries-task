import { AboutMeComponent as AboutMeComponentType } from './../../components/about-me/about-me.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(
    private modalService: ModalService<AboutMeComponentType>,
    public viewContainerRef: ViewContainerRef
  ) {
    this.modalService.vcRef = viewContainerRef;
  }

  ngOnInit(): void {}

  async showAboutMe(): Promise<void> {
    const { AboutMeComponent } = await import(
      '../../components/about-me/about-me.component'
    );

    await this.modalService.open(AboutMeComponent);
  }
}
