import { Component, OnInit } from '@angular/core';
import { TraitsService } from '../../shared/services/traits.service';
import { TRAIT } from '../../shared/trait.interface';

@Component({
    selector: 'rsg-single-trait',
    templateUrl: './single-trait.component.html',
    styleUrls: ['./single-trait.component.scss']
})
export class SingleTraitComponent implements OnInit {

    traits: TRAIT[] = [];
    selectedTrait = '';
    randomTrait = '';

    constructor(private traitsService: TraitsService) {
    }

    ngOnInit(): void {
        this.traits = this.traitsService.getTraits();
    }

    generateRandomTrait() {
        const traitsLength = this.traits.length;
        let randomNumber = 0;
        if (traitsLength) {
            randomNumber = Math.floor(Math.random() * (traitsLength - 1) + 1);
            this.findRandomTraitName(randomNumber);
        }
    }

    findRandomTraitName(id: number): void {
        // console.log(this.traits);
        const found = this.traits.find(trait => trait.id === id);
        console.log(found?.name)
    }

}
