import { Component, OnInit, inject } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from "@angular/router";

import { RigaInterface } from "../interfaces/riga.interface";
import { MainService } from "../main.service";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: 'detail',
    standalone: true,
    imports: [
        MatCardModule,
        MatIconModule
    ],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
    readonly id: number = -1;

    route: ActivatedRoute = inject(ActivatedRoute);
    dataSource!: RigaInterface;

    constructor(private service: MainService) {
        ToolbarComponent.staticTabIndex = -1;

        this.id = Number(this.route.snapshot.params['id']);
    }

    ngOnInit(): void {
        this.dataSource = this.service.getDetail(this.id);
    }
}
