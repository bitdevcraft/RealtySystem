import { Injectable } from '@angular/core';
import { Community } from './community.service';
import { Property } from './property.service';

export interface Project {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    communityId?: string | null;
    community?: Community | null;
    properties?: Property[];
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    getData() {
        return [
            {
                id: '1',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '2',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '3',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '4',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '5',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '6',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '7',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '8',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '9',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '10',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '11',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '12',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '13',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '14',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '15',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '16',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '17',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '18',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '19',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '20',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '21',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '22',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '23',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '24',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '25',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '26',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '27',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '28',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '29',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '30',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '31',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '32',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '33',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '34',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '35',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '36',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '37',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '38',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '39',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '40',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '41',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '42',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '43',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '44',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '45',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '46',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '47',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '48',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '49',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '50',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '51',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '52',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '53',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '54',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '55',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '56',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '57',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '58',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '59',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '60',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '61',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '62',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '63',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '64',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '65',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '66',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '67',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '68',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '69',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '70',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '71',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '72',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '73',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '74',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '75',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '76',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '77',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '78',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '79',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '80',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '81',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '82',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '83',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '84',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '85',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '86',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '87',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '88',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '89',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '90',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '91',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '92',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '93',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '94',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '95',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '96',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '97',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '98',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '99',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '100',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '101',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '102',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '103',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '104',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '105',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '106',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '107',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '108',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '109',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '110',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '111',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '112',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '113',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '114',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '115',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '116',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '117',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '118',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '119',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '120',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '121',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '122',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '123',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '124',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '125',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '126',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '127',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '128',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '129',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '130',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '131',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '132',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '133',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '134',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '135',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '136',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '137',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '138',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '139',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '140',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '141',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '142',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '143',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '144',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '145',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '146',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '147',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '148',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '149',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '150',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '151',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '152',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '153',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '154',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '155',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '156',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '157',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '158',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '159',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '160',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '161',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '162',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '163',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '164',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '165',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '166',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '167',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '168',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '169',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '170',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '171',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '172',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '173',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '174',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '175',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '176',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '177',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '178',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '179',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '180',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            },
            {
                id: '181',
                name: 'Novotel Residences',
                description: 'A luxurious residential project with premium amenities.'
            },
            {
                id: '182',
                name: 'The Infinity Towers',
                description: 'Modern skyscrapers featuring office spaces and high-end apartments.'
            },
            {
                id: '183',
                name: 'Grand Palm Resort',
                description: 'An exclusive beachfront resort with world-class facilities.'
            },
            {
                id: '184',
                name: 'Emerald Heights',
                description: 'A serene residential community with green spaces and parks.'
            },
            {
                id: '185',
                name: 'Urban Vista',
                description: 'A contemporary urban living project in the heart of the city.'
            },
            {
                id: '186',
                name: 'Skyline Business Center',
                description: 'A premium commercial hub for offices and businesses.'
            },
            {
                id: '187',
                name: 'Azure Bay Villas',
                description: 'Luxury villas overlooking a pristine bay.'
            },
            {
                id: '188',
                name: 'Central Park Residences',
                description: 'Stylish apartments near the central park.'
            },
            {
                id: '189',
                name: 'Horizon Plaza',
                description: 'A mixed-use development with retail and residential spaces.'
            },
            {
                id: '190',
                name: 'The Summit Residences',
                description: 'High-rise apartments with breathtaking mountain views.'
            },
            {
                id: '191',
                name: 'Marina One',
                description: 'Exclusive waterfront apartments and retail spaces.'
            },
            {
                id: '192',
                name: 'Golden Valley Estates',
                description: 'An expansive residential township in a scenic valley.'
            },
            {
                id: '193',
                name: 'Ocean Pearl Towers',
                description: 'Luxury apartments near the ocean with stunning views.'
            },
            {
                id: '194',
                name: 'Riverfront Residences',
                description: 'Waterfront living at its finest with modern amenities.'
            },
            {
                id: '195',
                name: 'The Iconic Lofts',
                description: 'Stylish loft-style apartments in a bustling district.'
            },
            {
                id: '196',
                name: 'Crystal Cove',
                description: 'A serene coastal retreat with premium villas.'
            },
            {
                id: '197',
                name: 'The Lighthouse Apartments',
                description: 'Modern apartments with panoramic sea views.'
            },
            {
                id: '198',
                name: 'Silver Crest Villas',
                description: 'Exclusive luxury villas in a tranquil setting.'
            },
            {
                id: '199',
                name: 'Harbor Point Residences',
                description: 'Upscale apartments near a bustling harbor.'
            },
            {
                id: '200',
                name: 'Evergreen Meadows',
                description: 'A peaceful residential project surrounded by nature.'
            }
        ];
    }

    constructor() {}

    getProjectsMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getProjectsSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getProjectsMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getProjectsLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getProjectsXLarge() {
        return Promise.resolve(this.getData());
    }

    getProjectsByName(name: string) {
        return Promise.resolve(this.getData().filter((c) => c.name.toLowerCase().indexOf(name.toLowerCase()) > -1));
    }

    getProjectById(id: string) {
        return Promise.resolve(this.getData().find((p) => p.id === id));
    }
}
