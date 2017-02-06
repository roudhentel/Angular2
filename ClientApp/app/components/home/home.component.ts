import {
    Component,
    OnInit
} from '@angular/core';
import {
    Area,
    Heading,
    Lineitem
} from "../../class";

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {

    private listArea: Array<Area> = [];

    ngOnInit() {
        this.listArea.push(new Area({
            name: "Area-1"
        }));
        this.listArea.push(new Area({
            name: "Area-2"
        }));
        this.listArea.push(new Area({
            name: "Area-3"
        }));

        this.listArea[0].ListHeading.push(new Heading({
            description: "Heading 1",
            level: 1,
            listLineitem: [
                { description: "Lineitem for heading 1" },
                { description: "Lineitem for heading 1" }
            ],
            listHeading: [
                {
                    description: "Heading 1.1",
                    level: 2,
                    listLineitem: [
                        { description: "Lineitem for heading 1.1" }
                    ]
                },
                {
                    description: "Heading 1.2",
                    level: 2,
                    listLineitem: [
                        { description: "Lineitem for heading 1.2" },
                        { description: "Lineitem for heading 1.2" }
                    ]
                }
            ]
        }));

        this.listArea[1].ListHeading.push(new Heading({
            description: "Heading 2",
            level: 1,
            listLineitem: [
                { description: "Lineitem for heading 2" },
                { description: "Lineitem for heading 2" }
            ],
            listHeading: [
                {
                    description: "Heading 2.1",
                    level: 2,
                    listLineitem: [
                        { description: "Lineitem for heading 2.1" }
                    ]
                },
                {
                    description: "Heading 2.2",
                    level: 2,
                    listLineitem: [
                        { description: "Lineitem for heading 2.2" },
                        { description: "Lineitem for heading 2.2" }
                    ],
                    listHeading: [
                        {
                            description: "Heading 2.2.1",
                            level: 3,
                            listLineitem: [
                                { description: "Lineitem for heading 2.2.1" },
                                { description: "Lineitem for heading 2.2.2" }
                            ]
                        }
                    ]
                }
            ]
        }));

        console.log(this.listArea);
    }
}
