import { Component, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-form-modal',
    templateUrl: './form-modal.component.html',
    styleUrls: ['./form-modal.component.scss'],
    providers: [NgbModalConfig, NgbModal]
})

export class FormModalComponent implements OnInit{

    constructor(config: NgbModalConfig, private modalService: NgbModal){
        config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit(): void {}

    open(content) {
        this.modalService.open(content);
      }
}