import { Injectable } from '@angular/core';
import { TRAIT } from '../trait.interface';


@Injectable({
    providedIn: 'root'
})
export class TraitsService {

    Traits: TRAIT[] = [
        {
            'name': 'active',
            'age': ['adult', 'teen', 'child'],
            'german': 'Aktiv',
            'conflict' : ['faul']
        },
        {
            'name': 'ambitious',
            'age': ['adult'],
            'german': 'Ehrgeizig',
            'conflict' : ['lazy', 'freegan']
        },
        {
            'name': 'art-lover',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kunstliebhaber:in',
            'conflict' : []
        },
        {
            'name': 'bookworm',
            'age': ['adult', 'teen', 'child'],
            'german': 'Bücherwurm',
            'conflict' : []
        },
        {
            'name': 'bro',
            'age': ['adult', 'teen'],
            'german': 'Bro',
            'conflict' : []
        },
        {
            'name': 'cat-lover',
            'age': ['adult', 'teen', 'child'],
            'german': 'Katzenliebhaber:in',
            'conflict' : []
        },
        {
            'name': 'cheerful',
            'age': ['adult', 'teen', 'child'],
            'german': 'Fröhlich',
            'conflict' : ['gloomy', 'hot-heated']
        },
        {
            'name': 'childish',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kindisch',
            'conflict' : ['evil', 'snob', 'hates-children']
        },
        {
            'name': 'clumsy',
            'age': ['adult', 'teen'],
            'german': 'Tollpatschig',
            'conflict' : ['maker']
        },
        {
            'name': 'creative',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kreativ',
            'conflict' : []
        },
        {
            'name': 'dance-machine',
            'age': ['adult', 'teen'],
            'german': 'Tanzwütig',
            'conflict' : []
        },
        {
            'name': 'dog-lover',
            'age': ['adult', 'teen', 'child'],
            'german': 'Hundeliebhaber:in',
            'conflict' : []
        },
        {
            'name': 'erratic',
            'age': ['adult', 'teen', 'child'],
            'german': 'Unberechenbar',
            'conflict' : []
        },
        {
            'name': 'evil',
            'age': ['adult', 'teen', 'child'],
            'german': 'Böse',
            'conflict' : ['childish', 'good']
        },
        {
            'name': 'family-oriented',
            'age': ['adult'],
            'german': 'Familienbewußt',
            'conflict' : ['hates-children', 'noncommittal']
        },
        {
            'name': 'foodie',
            'age': ['adult', 'teen'],
            'german': 'Genießer:in',
            'conflict' : ['freegan', 'glutton']
        },
        {
            'name': 'geek',
            'age': ['adult', 'teen', 'child'],
            'german': 'Geek',
            'conflict' : []
        },
        {
            'name': 'genius',
            'age': ['adult', 'teen', 'child'],
            'german': 'Genie',
            'conflict' : []
        },
        {
            'name': 'gloomy',
            'age': ['adult', 'teen', 'child'],
            'german': 'Düster',
            'conflict': ['cheerful', 'hot-heated']
        },
        {
            'name': 'glutton',
            'age': ['adult', 'teen', 'child'],
            'german': 'Vielfraß',
            'conflict' : ['squeamish', 'foodie']
        },
        {
            'name': 'good',
            'age': ['adult', 'teen', 'child'],
            'german': 'Gut',
            'conflict' : ['evil', 'kleptomaniac', 'mean']
        },
        {
            'name': 'goofball',
            'age': ['adult', 'teen', 'child'],
            'german': 'Spinner',
            'conflict' : ['snob']
        },
        {
            'name': 'hates-children',
            'age': ['adult', 'teen'],
            'german': 'Mag keine Kinder',
            'conflict' : ['family-oriented', 'childish']
        },
        {
            'name': 'hot-heated',
            'age': ['adult', 'teen', 'child'],
            'german': 'Hitzkopf',
            'conflict' : ['cheerful', 'gloomy']
        },
        {
            'name': 'insider',
            'age': ['adult', 'teen', 'child'],
            'german': 'Insider',
            'conflict' : ['loner']
        },
        {
            'name': 'jealous',
            'age': ['adult', 'teen'],
            'german': 'Eifersüchtig',
            'conflict' : []
        },
        {
            'name': 'kleptomaniac',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kleptomanisch',
            'conflict' : ['good']
        },
        {
            'name': 'lazy',
            'age': ['adult', 'teen', 'child'],
            'german': 'Faul',
            'conflict' : ['active', 'ambitious', 'neat', 'maker', 'adventurous']
        },
        {
            'name': 'loner',
            'age': ['adult', 'teen'],
            'german': 'Einzelgänger:in',
            'conflict' : ['insider', 'outgoing']
        },
        {
            'name': 'loves-outdoors',
            'age': ['adult', 'teen', 'child'],
            'german': 'Liebt die Natur',
            'conflict' : ['squeamish']
        },
        {
            'name': 'materialistic',
            'age': ['adult', 'teen'],
            'german': 'Materialistisch',
            'conflict' : ['freegan']
        },
        {
            'name': 'mean',
            'age': ['adult', 'teen', 'child'],
            'german': 'Gemein',
            'conflict' : ['good', 'proper']
        },
        {
            'name': 'music-lover',
            'age': ['adult', 'teen', 'child'],
            'german': 'Musikliebhaber:in',
            'conflict' : []
        },
        {
            'name': 'neat',
            'age': ['adult', 'teen', 'child'],
            'german': 'Ordentlich',
            'conflict' : ['lazy', 'slob']
        },
        {
            'name': 'noncommittal',
            'age': ['adult'],
            'german': 'Sprunghaft',
            'conflict' : ['family-oriented', 'loyal']
        },
        {
            'name': 'outgoing',
            'age': ['adult', 'teen', 'child'],
            'german': 'Gesellig',
            'conflict' : ['loner', 'paranoid']
        },
        {
            'name': 'perfectionist',
            'age': ['adult', 'teen', 'child'],
            'german': 'Perfektionist:in',
            'conflict' : []
        },
        {
            'name': 'romantic',
            'age': ['adult', 'teen'],
            'german': 'Romantisch',
            'conflict': ['unflirty']
        },
        {
            'name': 'self-assured',
            'age': ['adult', 'teen'],
            'german': 'Selbstsicher',
            'conflict' : []
        },
        {
            'name': 'slob',
            'age': ['adult', 'teen', 'child'],
            'german': 'Chaot',
            'conflict' : ['neat', 'squeamish', 'proper']
        },
        {
            'name': 'snob',
            'age': ['adult', 'teen'],
            'german': 'Snob',
            'conflict' : ['goofball', 'freegan', 'childish']
        },
        {
            'name': 'squeamish',
            'age': ['adult', 'teen', 'child'],
            'german': 'Zimperlich',
            'conflict' : ['slob', 'loves-outdoors', 'glutton', 'freegan']
        },
        {
            'name': 'unflirty',
            'age': ['adult', 'teen'],
            'german': 'Nicht kokett',
            'conflict' : ['romantic']
        },
        {
            'name': 'vegetarian',
            'age': ['adult', 'teen', 'child'],
            'german': 'Vegetarisch',
            'conflict' : []
        },
        {
            'name': 'freegan',
            'age': ['adult', 'teen'],
            'german': 'Freegan',
            'conflict' : ['ambitious', 'foodie', 'materialistic', 'snob', 'squeamish']
        },
        {
            'name': 'maker',
            'age': ['adult', 'teen'],
            'german': 'Hersteller:in',
            'conflict' : ['clumsy', 'lazy']
        },
        {
            'name': 'adventurous',
            'age': ['adult', 'teen'],
            'german': 'Abenteuerlustig',
            'conflict' : ['lazy']
        },
        {
            'name': 'proper',
            'age': ['adult', 'teen', 'child'],
            'german': 'Korrekt',
            'conflict' : ['mean', 'slob']
        },
        {
            'name': 'loyal',
            'age': ['adult', 'teen'],
            'german': 'Treu',
            'conflict' : ['noncommittal']
        },
        {
            'name': 'paranoid',
            'age': ['adult', 'teen'],
            'german': 'Paranoid',
            'conflict' : ['outgoing']
        },
        {
            'name': 'self-absorbed',
            'age': ['adult', 'teen'],
            'german': 'Selbstsüchtig',
            'conflict' : []
        },
        {
            'name': 'high-maintenance',
            'age': ['adult', 'teen'],
            'german': 'Wartungsintensiv',
            'conflict' : []
        },
        {
            'name': 'partyanimal',
            'age': ['adult', 'teen'],
            'german': 'Partylöwe',
            'conflict' : ['loner', 'socially awkward']
        },
        {
            'name': 'socially awkward',
            'age': ['adult', 'teen'],
            'german': 'Sozial unbeholfen',
            'conflict' : ['outgoing', 'partyanimal']
        },
        {
            'name': 'child of the islands',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kind der Inseln',
            'conflict' : []
        },
        {
            'name': 'child of the ocean',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kind des Meeres',
            'conflict' : []
        },
        {
            'name': 'lactose intolerant',
            'age': ['adult', 'teen', 'child'],
            'german': 'Laktose Intolerant',
            'conflict' : []
        },
        {
            'name': 'recycle disciple',
            'age': ['adult', 'teen', 'child'],
            'german': 'Recycling Fan',
            'conflict' : []
        },
        {
            'name': 'animal enthusiast',
            'age': ['adult', 'teen', 'child'],
            'german': 'Tierfreund:in',
            'conflict' : []
        },
        {
            'name': 'Green friend',
            'age': ['adult', 'teen', 'child'],
            'german': 'Ökofanatiker:in',
            'conflict' : []
        },
        {
            'name': 'overachiever',
            'age': ['adult', 'teen'],
            'german': 'Überflieger:in',
            'conflict' : ['lazy']
        }
    ];

    ToddlerTraits: TRAIT[] = [
        {
            'name': 'silly',
            'age': ['toddler'],
            'german': 'Albern',
            'conflict' : []
        },
        {
            'name': 'clingy',
            'age': ['toddler'],
            'german': 'Anhänglich',
            'conflict' : []
        },
        {
            'name': 'charmer',
            'age': ['toddler'],
            'german': 'Charmeur',
            'conflict' : []
        },
        {
            'name': 'angelic',
            'age': ['toddler'],
            'german': 'Engelsgleich',
            'conflict' : []
        },
        {
            'name': 'fussy',
            'age': ['toddler'],
            'german': 'Heikel',
            'conflict' : []
        },
        {
            'name': 'inquisitive',
            'age': ['toddler'],
            'german': 'Neugierig',
            'conflict' : []
        },
        {
            'name': 'independent',
            'age': ['toddler'],
            'german': 'Unabhängig',
            'conflict' : []
        },
        {
            'name': 'wild',
            'age': ['toddler'],
            'german': 'Wild',
            'conflict' : []
        }
        ];

    constructor() {
    }

    getTraits() {
        return this.Traits;
    }
}
