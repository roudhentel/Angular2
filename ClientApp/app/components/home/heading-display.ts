import {
    Component,
    OnInit, Input
} from "@angular/core";

import { Heading } from "../../class";

@Component({
    selector: "heading-display",
    template: require("./heading-display.html"),
    styleUrls: require["./heading-display.css"]
})

export class HeadingDisplay implements OnInit {

    @Input() he: Heading;
     
    constructor() {

    }

    ngOnInit() {

    }
}