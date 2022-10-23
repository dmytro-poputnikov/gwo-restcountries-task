import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent<T> implements OnInit {
  display = false;

  constructor(private modalService: ModalService<T>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.display = true;
    }, 100);
  }

  async close(): Promise<void> {
    this.display = false;

    setTimeout(async () => {
      await this.modalService.close();
    }, 300);
  }
}
