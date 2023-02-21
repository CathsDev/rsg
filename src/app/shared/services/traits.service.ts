import { Injectable } from '@angular/core';
import { TRAIT } from '../trait.interface';


@Injectable({
    providedIn: 'root'
})
export class TraitsService {

    Traits: TRAIT[] = [
        {
            'id': 1,
            'name': 'active',
            'age': ['adult', 'teen', 'child'],
            'german': 'Aktiv',
            'conflict' : [28]
        },
        {
            'id': 2,
            'name': 'ambitious',
            'age': ['adult'],
            'german': 'Ehrgeizig',
            'conflict' : [28]
        },
        {
            'id': 3,
            'name': 'art-lover',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kunstliebhaber:in',
            'conflict' : []
        },
        {
            'id': 4,
            'name': 'bookworm',
            'age': ['adult', 'teen', 'child'],
            'german': 'Bücherwurm',
            'conflict' : []
        },
        {
            'id': 5,
            'name': 'bro',
            'age': ['adult', 'teen'],
            'german': 'Bro',
            'conflict' : []
        },
        {
            'id': 6,
            'name': 'cat-lover',
            'age': ['adult', 'teen', 'child'],
            'german': 'Katzenliebhaber:in',
            'conflict' : []
        },
        {
            'id': 7,
            'name': 'cheerful',
            'age': ['adult', 'teen', 'child'],
            'german': 'Fröhlich',
            'conflict' : [19, 24]
        },
        {
            'id': 8,
            'name': 'childish',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kindisch',
            'conflict' : [14, 23, 41]
        },
        {
            'id': 9,
            'name': 'clumsy',
            'age': ['adult', 'teen'],
            'german': 'Tollpatschig',
            'conflict' : []
        },
        {
            'id': 10,
            'name': 'creative',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kreativ',
            'conflict' : []
        },
        {
            'id': 11,
            'name': 'dance-machine',
            'age': ['adult', 'teen'],
            'german': 'Tanzwütig',
            'conflict' : []
        },
        {
            'id': 12,
            'name': 'dog-lover',
            'age': ['adult', 'teen', 'child'],
            'german': 'Hundeliebhaber:in',
            'conflict' : []
        },
        {
            'id': 13,
            'name': 'erratic',
            'age': ['adult', 'teen', 'child'],
            'german': 'Unberechenbar',
            'conflict' : []
        },
        {
            'id': 14,
            'name': 'evil',
            'age': ['adult', 'teen', 'child'],
            'german': 'Böse',
            'conflict' : [8, 21]
        },
        {
            'id': 15,
            'name': 'family-oriented',
            'age': ['adult'],
            'german': 'Familienbewußt',
            'conflict' : [23, 35]
        },
        {
            'id': 16,
            'name': 'foodie',
            'age': ['adult', 'teen'],
            'german': 'Genießer:in',
            'conflict' : [20, 45]
        },
        {
            'id': 17,
            'name': 'geek',
            'age': ['adult', 'teen', 'child'],
            'german': 'Geek',
            'conflict' : []
        },
        {
            'id': 18,
            'name': 'genius',
            'age': ['adult', 'teen', 'child'],
            'german': 'Genie',
            'conflict' : []
        },
        {
            'id': 19,
            'name': 'gloomy',
            'age': ['adult', 'teen', 'child'],
            'german': 'Düster',
            'conflict': [7, 24]
        },
        {
            'id': 20,
            'name': 'glutton',
            'age': ['adult', 'teen', 'child'],
            'german': 'Vielfraß',
            'conflict' : [16, 42]
        },
        {
            'id': 21,
            'name': 'good',
            'age': ['adult', 'teen', 'child'],
            'german': 'Gut',
            'conflict' : [14, 27, 32]
        },
        {
            'id': 22,
            'name': 'goofball',
            'age': ['adult', 'teen', 'child'],
            'german': 'Spinner',
            'conflict' : [41]
        },
        {
            'id': 23,
            'name': 'hates-children',
            'age': ['adult', 'teen'],
            'german': 'Mag keine Kinder',
            'conflict' : [8, 15]
        },
        {
            'id': 24,
            'name': 'hot-heated',
            'age': ['adult', 'teen', 'child'],
            'german': 'Hitzkopf',
            'conflict' : [7, 19]
        },
        {
            'id': 25,
            'name': 'insider',
            'age': ['adult', 'teen', 'child'],
            'german': 'Insider',
            'conflict' : [29]
        },
        {
            'id': 26,
            'name': 'jealous',
            'age': ['adult', 'teen'],
            'german': 'Eifersüchtig',
            'conflict' : []
        },
        {
            'id': 27,
            'name': 'kleptomanic',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kleptomanisch',
            'conflict' : [21]
        },
        {
            'id': 28,
            'name': 'lazy',
            'age': ['adult', 'teen', 'child'],
            'german': 'Faul',
            'conflict' : [1, 2, 34, 46, 47]
        },
        {
            'id': 29,
            'name': 'loner',
            'age': ['adult', 'teen'],
            'german': 'Einzelgänger:in',
            'conflict' : [25, 36]
        },
        {
            'id': 30,
            'name': 'loves-outdoors',
            'age': ['adult', 'teen', 'child'],
            'german': 'Liebt die Natur',
            'conflict' : [42]
        },
        {
            'id': 31,
            'name': 'materialistic',
            'age': ['adult', 'teen'],
            'german': 'Materialistisch',
            'conflict' : [45]
        },
        {
            'id': 32,
            'name': 'mean',
            'age': ['adult', 'teen', 'child'],
            'german': 'Gemein',
            'conflict' : [21, 48]
        },
        {
            'id': 33,
            'name': 'music-lover',
            'age': ['adult', 'teen', 'child'],
            'german': 'Musikliebhaber:in',
            'conflict' : []
        },
        {
            'id': 34,
            'name': 'neat',
            'age': ['adult', 'teen', 'child'],
            'german': 'Ordentlich',
            'conflict' : [28, 40]
        },
        {
            'id': 35,
            'name': 'noncommittal',
            'age': ['adult'],
            'german': 'Sprunghaft',
            'conflict' : [15, 49]
        },
        {
            'id': 36,
            'name': 'outgoing',
            'age': ['adult', 'teen', 'child'],
            'german': 'Gesellig',
            'conflict' : [29, 50]
        },
        {
            'id': 37,
            'name': 'perfectionist',
            'age': ['adult', 'teen', 'child'],
            'german': 'Perfektionist:in',
            'conflict' : []
        },
        {
            'id': 38,
            'name': 'romantic',
            'age': ['adult', 'teen'],
            'german': 'Romantisch',
            'conflict': [43]
        },
        {
            'id': 39,
            'name': 'self-assured',
            'age': ['adult', 'teen'],
            'german': 'Selbstsicher',
            'conflict' : []
        },
        {
            'id': 40,
            'name': 'slob',
            'age': ['adult', 'teen', 'child'],
            'german': 'Chaot',
            'conflict' : [34, 42, 48]
        },
        {
            'id': 41,
            'name': 'snob',
            'age': ['adult', 'teen'],
            'german': 'Snob',
            'conflict' : [8, 22, 45]
        },
        {
            'id': 42,
            'name': 'squeamish',
            'age': ['adult', 'teen', 'child'],
            'german': 'Zimperlich',
            'conflict' : [20, 30, 40, 45]
        },
        {
            'id': 43,
            'name': 'unflirty',
            'age': ['adult', 'teen'],
            'german': 'Nicht kokett',
            'conflict' : [38]
        },
        {
            'id': 44,
            'name': 'vegetarian',
            'age': ['adult', 'teen', 'child'],
            'german': 'Vegetarisch',
            'conflict' : []
        },
        {
            'id': 45,
            'name': 'freegan',
            'age': ['adult', 'teen'],
            'german': 'Freegan',
            'conflict' : [2, 16, 31, 34, 41]
        },
        {
            'id': 46,
            'name': 'maker',
            'age': ['adult', 'teen'],
            'german': 'Hersteller:in',
            'conflict' : [9, 28]
        },
        {
            'id': 47,
            'name': 'adventurous',
            'age': ['adult', 'teen'],
            'german': 'Abenteuerlustig',
            'conflict' : [28]
        },
        {
            'id': 48,
            'name': 'proper',
            'age': ['adult', 'teen', 'child'],
            'german': 'Korrekt',
            'conflict' : [32, 40]
        },
        {
            'id': 49,
            'name': 'loyal',
            'age': ['adult', 'teen'],
            'german': 'Treu',
            'conflict' : [35]
        },
        {
            'id': 50,
            'name': 'paranoid',
            'age': ['adult', 'teen'],
            'german': 'Paranoid',
            'conflict' : [36]
        },
        {
            'id': 51,
            'name': 'self-absorbed',
            'age': ['adult', 'teen'],
            'german': 'Selbstsüchtig',
            'conflict' : []
        },
        {
            'id': 52,
            'name': 'high-maintenance',
            'age': ['adult', 'teen'],
            'german': 'Wartungsintensiv',
            'conflict' : []
        },
        {
            'id': 53,
            'name': 'partyanimal',
            'age': ['adult', 'teen'],
            'german': 'Partylöwe',
            'conflict' : [29, 54]
        },
        {
            'id': 54,
            'name': 'socially awkward',
            'age': ['adult', 'teen'],
            'german': 'Sozial unbeholfen',
            'conflict' : [36, 53]
        },
        {
            'id': 55,
            'name': 'child of the islands',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kind der Inseln',
            'conflict' : []
        },
        {
            'id': 56,
            'name': 'child of the ocean',
            'age': ['adult', 'teen', 'child'],
            'german': 'Kind des Meeres',
            'conflict' : []
        },
        {
            'id': 57,
            'name': 'lactose intolerant',
            'age': ['adult', 'teen', 'child'],
            'german': 'Laktose Intolerant',
            'conflict' : []
        },
        {
            'id': 58,
            'name': 'recycle disciple',
            'age': ['adult', 'teen', 'child'],
            'german': 'Recycling Fan',
            'conflict' : []
        },
        {
            'id': 59,
            'name': 'animal enthusiast',
            'age': ['adult', 'teen', 'child'],
            'german': 'Tierfreund:in',
            'conflict' : []
        },
        {
            'id': 60,
            'name': 'Green friend',
            'age': ['adult', 'teen', 'child'],
            'german': 'Ökofanatiker:in',
            'conflict' : []
        },
        {
            'id': 61,
            'name': 'overachiever',
            'age': ['adult', 'teen', 'child'],
            'german': 'Überflieger:in',
            'conflict' : []
        }
    ];

    constructor() {
    }

    getTraits() {
        return this.Traits;
    }
}
