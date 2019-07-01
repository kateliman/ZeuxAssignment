import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'span',
    template: '<p> {{result}} </p>'
})
export class OpportunitiesComponent implements OnInit {

    public result: string;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(
            () => {this.result = "No opportunities";
        });
    }
}