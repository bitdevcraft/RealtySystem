import {Injectable} from '@angular/core';
import {Project} from "./project.service";

export interface Property {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    price?: number | null;
    totalArea?: number| null;
    ratePerArea?: number| null;
    rooms?: number| null;
    type?: string | null;
    details?: { [key: string]: string } | null;
    projectId?: string | null;
    project?: Project | null;
}

@Injectable({
    providedIn: 'root'
})
export class PropertyService {

    getData() {
        return [
            {
                "id": "P-4238",
                "name": "Urban Haven",
                "description": "A spacious property ideal for families or investors.",
                "price": 376280.28,
                "totalArea": 332.8,
                "ratePerArea": 1822.19,
                "rooms": 7,
                "type": "Plot"
            },
            {
                "id": "P-3845",
                "name": "Hilltop Unit",
                "description": "A cozy and affordable option in a prime location.",
                "price": 285431.23,
                "totalArea": 276.33,
                "ratePerArea": 515.47,
                "rooms": 4,
                "type": "Unit"
            },
            {
                "id": "P-2390",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 144869.25,
                "totalArea": 355.13,
                "ratePerArea": 623.37,
                "rooms": 4,
                "type": "Unit"
            },
            {
                "id": "P-7563",
                "name": "Urban Haven",
                "description": "A cozy and affordable option in a prime location.",
                "price": 82586.07,
                "totalArea": 384.41,
                "ratePerArea": 359.32,
                "rooms": 8,
                "type": "Plot"
            },
            {
                "id": "P-7536",
                "name": "Hilltop Unit",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 177996.59,
                "totalArea": 79.11,
                "ratePerArea": 1933.4,
                "rooms": 8,
                "type": "Unit"
            },
            {
                "id": "P-3399",
                "name": "Sunset Villa",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 226228.13,
                "totalArea": 143.12,
                "ratePerArea": 1929.8,
                "rooms": 10,
                "type": "Unit"
            },
            {
                "id": "P-3715",
                "name": "Garden View",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 432143.26,
                "totalArea": 182.3,
                "ratePerArea": 242.83,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-4950",
                "name": "Cityscape",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 126231.07,
                "totalArea": 290.69,
                "ratePerArea": 1787.18,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-3691",
                "name": "Lakeside Plot",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 158163.49,
                "totalArea": 52.1,
                "ratePerArea": 716.52,
                "rooms": 4,
                "type": "Plot"
            },
            {
                "id": "P-4501",
                "name": "Riverside Bliss",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 271358.44,
                "totalArea": 464.7,
                "ratePerArea": 1457.84,
                "rooms": 7,
                "type": "Unit"
            },
            {
                "id": "P-5529",
                "name": "Ocean Breeze",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 337757.02,
                "totalArea": 365.74,
                "ratePerArea": 1617.09,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-5121",
                "name": "Mountain Retreat",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 345370.27,
                "totalArea": 273.09,
                "ratePerArea": 1373.89,
                "rooms": 5,
                "type": "Unit"
            },
            {
                "id": "P-4139",
                "name": "Ocean Breeze",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 209409.29,
                "totalArea": 371.73,
                "ratePerArea": 1775.89,
                "rooms": 7,
                "type": "Villa"
            },
            {
                "id": "P-8243",
                "name": "Hilltop Unit",
                "description": "A serene plot perfect for building your dream home.",
                "price": 475810.99,
                "totalArea": 353.79,
                "ratePerArea": 878.84,
                "rooms": 3,
                "type": "Villa"
            },
            {
                "id": "P-8589",
                "name": "Sunset Villa",
                "description": "A cozy and affordable option in a prime location.",
                "price": 499019.73,
                "totalArea": 83.38,
                "ratePerArea": 1479.57,
                "rooms": 3,
                "type": "Plot"
            },
            {
                "id": "P-7682",
                "name": "Mountain Retreat",
                "description": "A spacious property ideal for families or investors.",
                "price": 296551.63,
                "totalArea": 339.07,
                "ratePerArea": 432.84,
                "rooms": 7,
                "type": "Villa"
            },
            {
                "id": "P-6800",
                "name": "Cityscape",
                "description": "A cozy and affordable option in a prime location.",
                "price": 238582.56,
                "totalArea": 388.73,
                "ratePerArea": 218.65,
                "rooms": 10,
                "type": "Unit"
            },
            {
                "id": "P-3950",
                "name": "Hilltop Unit",
                "description": "A spacious property ideal for families or investors.",
                "price": 474531.05,
                "totalArea": 223.18,
                "ratePerArea": 240.43,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-4055",
                "name": "Urban Haven",
                "description": "A spacious property ideal for families or investors.",
                "price": 391409.48,
                "totalArea": 60.88,
                "ratePerArea": 1001.14,
                "rooms": 9,
                "type": "Plot"
            },
            {
                "id": "P-9679",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 318001.72,
                "totalArea": 477.39,
                "ratePerArea": 700.99,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-3186",
                "name": "Riverside Bliss",
                "description": "A cozy and affordable option in a prime location.",
                "price": 53719.17,
                "totalArea": 85.92,
                "ratePerArea": 1299.89,
                "rooms": 6,
                "type": "Unit"
            },
            {
                "id": "P-3468",
                "name": "Sunset Villa",
                "description": "A serene plot perfect for building your dream home.",
                "price": 486244.9,
                "totalArea": 277.23,
                "ratePerArea": 826.8,
                "rooms": 8,
                "type": "Unit"
            },
            {
                "id": "P-3573",
                "name": "Cityscape",
                "description": "A cozy and affordable option in a prime location.",
                "price": 461138.13,
                "totalArea": 433.98,
                "ratePerArea": 1997.39,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-7946",
                "name": "Sunset Villa",
                "description": "A spacious property ideal for families or investors.",
                "price": 270015.35,
                "totalArea": 81.75,
                "ratePerArea": 1067.55,
                "rooms": 6,
                "type": "Villa"
            },
            {
                "id": "P-5997",
                "name": "Forest Escape",
                "description": "A cozy and affordable option in a prime location.",
                "price": 69500.53,
                "totalArea": 390.59,
                "ratePerArea": 1430.41,
                "rooms": 10,
                "type": "Unit"
            },
            {
                "id": "P-3762",
                "name": "Lakeside Plot",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 246630.49,
                "totalArea": 326.16,
                "ratePerArea": 1094.83,
                "rooms": 2,
                "type": "Unit"
            },
            {
                "id": "P-5755",
                "name": "Riverside Bliss",
                "description": "A spacious property ideal for families or investors.",
                "price": 161721.13,
                "totalArea": 181.41,
                "ratePerArea": 1415.18,
                "rooms": 6,
                "type": "Plot"
            },
            {
                "id": "P-1019",
                "name": "Ocean Breeze",
                "description": "A spacious property ideal for families or investors.",
                "price": 457642.88,
                "totalArea": 248.95,
                "ratePerArea": 1065.6,
                "rooms": 10,
                "type": "Plot"
            },
            {
                "id": "P-6207",
                "name": "Mountain Retreat",
                "description": "A spacious property ideal for families or investors.",
                "price": 73287.36,
                "totalArea": 102.35,
                "ratePerArea": 1582.38,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-9275",
                "name": "Forest Escape",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 353041.0,
                "totalArea": 497.18,
                "ratePerArea": 1486.05,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-4442",
                "name": "Urban Haven",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 243994.74,
                "totalArea": 400.65,
                "ratePerArea": 865.78,
                "rooms": 10,
                "type": "Villa"
            },
            {
                "id": "P-7977",
                "name": "Mountain Retreat",
                "description": "A serene plot perfect for building your dream home.",
                "price": 122956.64,
                "totalArea": 258.17,
                "ratePerArea": 1252.83,
                "rooms": 3,
                "type": "Villa"
            },
            {
                "id": "P-1216",
                "name": "Ocean Breeze",
                "description": "A spacious property ideal for families or investors.",
                "price": 286288.22,
                "totalArea": 370.11,
                "ratePerArea": 1621.37,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-3685",
                "name": "Cityscape",
                "description": "A spacious property ideal for families or investors.",
                "price": 335114.56,
                "totalArea": 453.79,
                "ratePerArea": 1020.99,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-2081",
                "name": "Garden View",
                "description": "A spacious property ideal for families or investors.",
                "price": 453077.6,
                "totalArea": 202.6,
                "ratePerArea": 1523.11,
                "rooms": 8,
                "type": "Villa"
            },
            {
                "id": "P-7849",
                "name": "Forest Escape",
                "description": "A serene plot perfect for building your dream home.",
                "price": 381954.42,
                "totalArea": 283.58,
                "ratePerArea": 1669.52,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-8570",
                "name": "Cityscape",
                "description": "A spacious property ideal for families or investors.",
                "price": 192836.02,
                "totalArea": 225.96,
                "ratePerArea": 1612.14,
                "rooms": 7,
                "type": "Plot"
            },
            {
                "id": "P-5871",
                "name": "Garden View",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 423490.35,
                "totalArea": 314.93,
                "ratePerArea": 1464.28,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-1247",
                "name": "Cityscape",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 107854.09,
                "totalArea": 400.19,
                "ratePerArea": 1114.98,
                "rooms": 5,
                "type": "Unit"
            },
            {
                "id": "P-7623",
                "name": "Garden View",
                "description": "A spacious property ideal for families or investors.",
                "price": 377581.52,
                "totalArea": 68.37,
                "ratePerArea": 1457.28,
                "rooms": 7,
                "type": "Plot"
            },
            {
                "id": "P-6253",
                "name": "Hilltop Unit",
                "description": "A cozy and affordable option in a prime location.",
                "price": 462700.85,
                "totalArea": 235.67,
                "ratePerArea": 754.86,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-6608",
                "name": "Forest Escape",
                "description": "A serene plot perfect for building your dream home.",
                "price": 238899.42,
                "totalArea": 291.65,
                "ratePerArea": 1312.47,
                "rooms": 7,
                "type": "Villa"
            },
            {
                "id": "P-6743",
                "name": "Riverside Bliss",
                "description": "A spacious property ideal for families or investors.",
                "price": 320570.98,
                "totalArea": 360.35,
                "ratePerArea": 1398.28,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-7117",
                "name": "Riverside Bliss",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 62680.14,
                "totalArea": 135.26,
                "ratePerArea": 442.87,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-9231",
                "name": "Ocean Breeze",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 359074.52,
                "totalArea": 483.68,
                "ratePerArea": 665.94,
                "rooms": 7,
                "type": "Unit"
            },
            {
                "id": "P-9088",
                "name": "Hilltop Unit",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 457117.79,
                "totalArea": 84.4,
                "ratePerArea": 568.08,
                "rooms": 6,
                "type": "Unit"
            },
            {
                "id": "P-1600",
                "name": "Garden View",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 324113.04,
                "totalArea": 432.63,
                "ratePerArea": 677.62,
                "rooms": 2,
                "type": "Unit"
            },
            {
                "id": "P-1516",
                "name": "Cityscape",
                "description": "A cozy and affordable option in a prime location.",
                "price": 152798.59,
                "totalArea": 281.49,
                "ratePerArea": 1870.09,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-2726",
                "name": "Ocean Breeze",
                "description": "A cozy and affordable option in a prime location.",
                "price": 154478.27,
                "totalArea": 293.32,
                "ratePerArea": 710.55,
                "rooms": 10,
                "type": "Plot"
            },
            {
                "id": "P-2106",
                "name": "Mountain Retreat",
                "description": "A cozy and affordable option in a prime location.",
                "price": 361626.86,
                "totalArea": 475.23,
                "ratePerArea": 1338.35,
                "rooms": 7,
                "type": "Unit"
            },
            {
                "id": "P-5024",
                "name": "Garden View",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 225770.67,
                "totalArea": 360.4,
                "ratePerArea": 289.32,
                "rooms": 7,
                "type": "Plot"
            },
            {
                "id": "P-2774",
                "name": "Lakeside Plot",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 142484.93,
                "totalArea": 494.69,
                "ratePerArea": 509.26,
                "rooms": 4,
                "type": "Plot"
            },
            {
                "id": "P-4764",
                "name": "Cityscape",
                "description": "A serene plot perfect for building your dream home.",
                "price": 261838.84,
                "totalArea": 312.0,
                "ratePerArea": 936.48,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-8345",
                "name": "Lakeside Plot",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 88646.46,
                "totalArea": 394.52,
                "ratePerArea": 319.6,
                "rooms": 10,
                "type": "Unit"
            },
            {
                "id": "P-4768",
                "name": "Garden View",
                "description": "A cozy and affordable option in a prime location.",
                "price": 356462.91,
                "totalArea": 130.28,
                "ratePerArea": 1421.24,
                "rooms": 3,
                "type": "Villa"
            },
            {
                "id": "P-7899",
                "name": "Garden View",
                "description": "A serene plot perfect for building your dream home.",
                "price": 457789.78,
                "totalArea": 83.36,
                "ratePerArea": 314.15,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-1381",
                "name": "Hilltop Unit",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 61395.14,
                "totalArea": 232.0,
                "ratePerArea": 1431.77,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-4082",
                "name": "Urban Haven",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 252906.0,
                "totalArea": 284.93,
                "ratePerArea": 1688.1,
                "rooms": 10,
                "type": "Plot"
            },
            {
                "id": "P-1001",
                "name": "Lakeside Plot",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 171262.1,
                "totalArea": 400.58,
                "ratePerArea": 1684.73,
                "rooms": 4,
                "type": "Plot"
            },
            {
                "id": "P-8959",
                "name": "Forest Escape",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 381434.05,
                "totalArea": 199.77,
                "ratePerArea": 1408.9,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-2168",
                "name": "Riverside Bliss",
                "description": "A serene plot perfect for building your dream home.",
                "price": 321181.42,
                "totalArea": 300.78,
                "ratePerArea": 561.94,
                "rooms": 1,
                "type": "Plot"
            },
            {
                "id": "P-8751",
                "name": "Lakeside Plot",
                "description": "A cozy and affordable option in a prime location.",
                "price": 131468.82,
                "totalArea": 271.12,
                "ratePerArea": 1895.87,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-9053",
                "name": "Hilltop Unit",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 249133.69,
                "totalArea": 309.08,
                "ratePerArea": 653.07,
                "rooms": 10,
                "type": "Plot"
            },
            {
                "id": "P-6118",
                "name": "Urban Haven",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 345774.77,
                "totalArea": 178.32,
                "ratePerArea": 1668.14,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-2747",
                "name": "Sunset Villa",
                "description": "A serene plot perfect for building your dream home.",
                "price": 103636.6,
                "totalArea": 156.48,
                "ratePerArea": 1637.44,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-5314",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 417575.33,
                "totalArea": 139.59,
                "ratePerArea": 1740.58,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-4918",
                "name": "Mountain Retreat",
                "description": "A cozy and affordable option in a prime location.",
                "price": 391142.08,
                "totalArea": 480.26,
                "ratePerArea": 1537.06,
                "rooms": 7,
                "type": "Villa"
            },
            {
                "id": "P-2211",
                "name": "Sunset Villa",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 222366.63,
                "totalArea": 233.54,
                "ratePerArea": 230.0,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-5221",
                "name": "Riverside Bliss",
                "description": "A serene plot perfect for building your dream home.",
                "price": 148187.45,
                "totalArea": 472.91,
                "ratePerArea": 1804.79,
                "rooms": 3,
                "type": "Plot"
            },
            {
                "id": "P-2223",
                "name": "Garden View",
                "description": "A cozy and affordable option in a prime location.",
                "price": 223965.11,
                "totalArea": 327.32,
                "ratePerArea": 1154.89,
                "rooms": 3,
                "type": "Villa"
            },
            {
                "id": "P-8182",
                "name": "Lakeside Plot",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 154152.8,
                "totalArea": 307.34,
                "ratePerArea": 352.24,
                "rooms": 4,
                "type": "Unit"
            },
            {
                "id": "P-5705",
                "name": "Sunset Villa",
                "description": "A spacious property ideal for families or investors.",
                "price": 496481.67,
                "totalArea": 481.74,
                "ratePerArea": 559.5,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-2874",
                "name": "Urban Haven",
                "description": "A cozy and affordable option in a prime location.",
                "price": 265775.65,
                "totalArea": 305.89,
                "ratePerArea": 1746.43,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-3931",
                "name": "Hilltop Unit",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 132202.71,
                "totalArea": 151.36,
                "ratePerArea": 1668.11,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-5200",
                "name": "Riverside Bliss",
                "description": "A serene plot perfect for building your dream home.",
                "price": 319428.29,
                "totalArea": 53.21,
                "ratePerArea": 340.16,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-2680",
                "name": "Sunset Villa",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 241606.53,
                "totalArea": 192.82,
                "ratePerArea": 1731.6,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-2392",
                "name": "Mountain Retreat",
                "description": "A serene plot perfect for building your dream home.",
                "price": 226147.63,
                "totalArea": 223.59,
                "ratePerArea": 1067.12,
                "rooms": 7,
                "type": "Unit"
            },
            {
                "id": "P-5865",
                "name": "Mountain Retreat",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 373268.84,
                "totalArea": 105.05,
                "ratePerArea": 722.61,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-3000",
                "name": "Lakeside Plot",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 194574.67,
                "totalArea": 369.98,
                "ratePerArea": 611.65,
                "rooms": 4,
                "type": "Unit"
            },
            {
                "id": "P-9596",
                "name": "Cityscape",
                "description": "A spacious property ideal for families or investors.",
                "price": 411672.13,
                "totalArea": 448.78,
                "ratePerArea": 1639.47,
                "rooms": 3,
                "type": "Villa"
            },
            {
                "id": "P-3119",
                "name": "Forest Escape",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 432717.6,
                "totalArea": 447.14,
                "ratePerArea": 931.82,
                "rooms": 8,
                "type": "Villa"
            },
            {
                "id": "P-6571",
                "name": "Lakeside Plot",
                "description": "A cozy and affordable option in a prime location.",
                "price": 347639.8,
                "totalArea": 398.62,
                "ratePerArea": 651.29,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-7505",
                "name": "Sunset Villa",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 283666.62,
                "totalArea": 498.99,
                "ratePerArea": 1287.04,
                "rooms": 8,
                "type": "Plot"
            },
            {
                "id": "P-3759",
                "name": "Garden View",
                "description": "A cozy and affordable option in a prime location.",
                "price": 262773.56,
                "totalArea": 440.43,
                "ratePerArea": 745.63,
                "rooms": 8,
                "type": "Villa"
            },
            {
                "id": "P-1538",
                "name": "Hilltop Unit",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 98769.81,
                "totalArea": 148.46,
                "ratePerArea": 983.58,
                "rooms": 5,
                "type": "Unit"
            },
            {
                "id": "P-4034",
                "name": "Lakeside Plot",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 224746.18,
                "totalArea": 308.73,
                "ratePerArea": 1290.08,
                "rooms": 7,
                "type": "Unit"
            },
            {
                "id": "P-3785",
                "name": "Riverside Bliss",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 252402.45,
                "totalArea": 97.87,
                "ratePerArea": 1374.58,
                "rooms": 7,
                "type": "Unit"
            },
            {
                "id": "P-1478",
                "name": "Forest Escape",
                "description": "A serene plot perfect for building your dream home.",
                "price": 199178.16,
                "totalArea": 463.0,
                "ratePerArea": 1262.49,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-6912",
                "name": "Lakeside Plot",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 160048.82,
                "totalArea": 259.78,
                "ratePerArea": 1259.02,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-7928",
                "name": "Urban Haven",
                "description": "A serene plot perfect for building your dream home.",
                "price": 159408.19,
                "totalArea": 435.61,
                "ratePerArea": 898.76,
                "rooms": 8,
                "type": "Unit"
            },
            {
                "id": "P-8297",
                "name": "Garden View",
                "description": "A cozy and affordable option in a prime location.",
                "price": 142511.07,
                "totalArea": 365.08,
                "ratePerArea": 1037.04,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-2762",
                "name": "Ocean Breeze",
                "description": "A serene plot perfect for building your dream home.",
                "price": 137903.04,
                "totalArea": 95.51,
                "ratePerArea": 285.41,
                "rooms": 4,
                "type": "Plot"
            },
            {
                "id": "P-8625",
                "name": "Cityscape",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 356840.85,
                "totalArea": 269.07,
                "ratePerArea": 1868.98,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-9417",
                "name": "Sunset Villa",
                "description": "A spacious property ideal for families or investors.",
                "price": 295595.35,
                "totalArea": 321.11,
                "ratePerArea": 191.57,
                "rooms": 2,
                "type": "Unit"
            },
            {
                "id": "P-8996",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 91449.56,
                "totalArea": 436.8,
                "ratePerArea": 861.2,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-1905",
                "name": "Cityscape",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 303308.98,
                "totalArea": 259.47,
                "ratePerArea": 1879.67,
                "rooms": 10,
                "type": "Unit"
            },
            {
                "id": "P-6945",
                "name": "Cityscape",
                "description": "A spacious property ideal for families or investors.",
                "price": 235269.84,
                "totalArea": 264.51,
                "ratePerArea": 243.54,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-8982",
                "name": "Cityscape",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 292885.51,
                "totalArea": 275.09,
                "ratePerArea": 981.46,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-3518",
                "name": "Forest Escape",
                "description": "A cozy and affordable option in a prime location.",
                "price": 71043.14,
                "totalArea": 344.2,
                "ratePerArea": 634.68,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-3355",
                "name": "Hilltop Unit",
                "description": "A spacious property ideal for families or investors.",
                "price": 409024.42,
                "totalArea": 457.75,
                "ratePerArea": 1300.69,
                "rooms": 8,
                "type": "Villa"
            },
            {
                "id": "P-4265",
                "name": "Hilltop Unit",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 230859.27,
                "totalArea": 230.1,
                "ratePerArea": 338.2,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-9828",
                "name": "Forest Escape",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 229796.35,
                "totalArea": 292.13,
                "ratePerArea": 1949.83,
                "rooms": 4,
                "type": "Unit"
            },
            {
                "id": "P-7024",
                "name": "Riverside Bliss",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 260664.65,
                "totalArea": 303.26,
                "ratePerArea": 412.04,
                "rooms": 10,
                "type": "Villa"
            },
            {
                "id": "P-4280",
                "name": "Riverside Bliss",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 426002.43,
                "totalArea": 183.68,
                "ratePerArea": 960.91,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-1823",
                "name": "Ocean Breeze",
                "description": "A cozy and affordable option in a prime location.",
                "price": 254153.34,
                "totalArea": 399.23,
                "ratePerArea": 1090.39,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-3015",
                "name": "Hilltop Unit",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 196893.4,
                "totalArea": 469.46,
                "ratePerArea": 1593.86,
                "rooms": 2,
                "type": "Villa"
            },
            {
                "id": "P-7748",
                "name": "Lakeside Plot",
                "description": "A cozy and affordable option in a prime location.",
                "price": 351326.87,
                "totalArea": 248.88,
                "ratePerArea": 446.88,
                "rooms": 9,
                "type": "Plot"
            },
            {
                "id": "P-5327",
                "name": "Mountain Retreat",
                "description": "A serene plot perfect for building your dream home.",
                "price": 202265.38,
                "totalArea": 276.41,
                "ratePerArea": 1326.5,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-6753",
                "name": "Sunset Villa",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 64363.24,
                "totalArea": 159.45,
                "ratePerArea": 1108.65,
                "rooms": 10,
                "type": "Villa"
            },
            {
                "id": "P-3431",
                "name": "Lakeside Plot",
                "description": "A spacious property ideal for families or investors.",
                "price": 468794.4,
                "totalArea": 427.91,
                "ratePerArea": 398.98,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-8302",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 74141.69,
                "totalArea": 99.7,
                "ratePerArea": 1955.96,
                "rooms": 10,
                "type": "Villa"
            },
            {
                "id": "P-5805",
                "name": "Mountain Retreat",
                "description": "A cozy and affordable option in a prime location.",
                "price": 225666.25,
                "totalArea": 327.56,
                "ratePerArea": 857.1,
                "rooms": 7,
                "type": "Plot"
            },
            {
                "id": "P-4236",
                "name": "Forest Escape",
                "description": "A serene plot perfect for building your dream home.",
                "price": 482464.67,
                "totalArea": 340.0,
                "ratePerArea": 1081.63,
                "rooms": 10,
                "type": "Villa"
            },
            {
                "id": "P-6782",
                "name": "Sunset Villa",
                "description": "A spacious property ideal for families or investors.",
                "price": 358672.58,
                "totalArea": 461.86,
                "ratePerArea": 1375.18,
                "rooms": 6,
                "type": "Unit"
            },
            {
                "id": "P-1105",
                "name": "Urban Haven",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 371181.81,
                "totalArea": 199.75,
                "ratePerArea": 733.59,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-9861",
                "name": "Cityscape",
                "description": "A spacious property ideal for families or investors.",
                "price": 170986.51,
                "totalArea": 278.82,
                "ratePerArea": 386.07,
                "rooms": 8,
                "type": "Plot"
            },
            {
                "id": "P-8902",
                "name": "Cityscape",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 335534.1,
                "totalArea": 295.61,
                "ratePerArea": 427.28,
                "rooms": 2,
                "type": "Unit"
            },
            {
                "id": "P-7616",
                "name": "Urban Haven",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 55942.51,
                "totalArea": 415.33,
                "ratePerArea": 1325.84,
                "rooms": 3,
                "type": "Unit"
            },
            {
                "id": "P-4853",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 76915.28,
                "totalArea": 219.09,
                "ratePerArea": 943.16,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-3067",
                "name": "Ocean Breeze",
                "description": "A spacious property ideal for families or investors.",
                "price": 115290.12,
                "totalArea": 361.81,
                "ratePerArea": 1914.61,
                "rooms": 10,
                "type": "Villa"
            },
            {
                "id": "P-3302",
                "name": "Garden View",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 481045.68,
                "totalArea": 118.05,
                "ratePerArea": 502.64,
                "rooms": 6,
                "type": "Villa"
            },
            {
                "id": "P-4231",
                "name": "Ocean Breeze",
                "description": "A spacious property ideal for families or investors.",
                "price": 54443.53,
                "totalArea": 184.6,
                "ratePerArea": 1561.54,
                "rooms": 6,
                "type": "Plot"
            },
            {
                "id": "P-7240",
                "name": "Urban Haven",
                "description": "A serene plot perfect for building your dream home.",
                "price": 343056.87,
                "totalArea": 272.2,
                "ratePerArea": 239.71,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-8801",
                "name": "Riverside Bliss",
                "description": "A spacious property ideal for families or investors.",
                "price": 464717.65,
                "totalArea": 131.86,
                "ratePerArea": 488.85,
                "rooms": 10,
                "type": "Unit"
            },
            {
                "id": "P-3010",
                "name": "Urban Haven",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 205748.67,
                "totalArea": 406.67,
                "ratePerArea": 1391.64,
                "rooms": 3,
                "type": "Unit"
            },
            {
                "id": "P-8905",
                "name": "Garden View",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 413867.33,
                "totalArea": 138.22,
                "ratePerArea": 1423.77,
                "rooms": 1,
                "type": "Plot"
            },
            {
                "id": "P-6593",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 334409.47,
                "totalArea": 388.45,
                "ratePerArea": 1475.44,
                "rooms": 10,
                "type": "Villa"
            },
            {
                "id": "P-5472",
                "name": "Cityscape",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 207702.92,
                "totalArea": 258.31,
                "ratePerArea": 378.53,
                "rooms": 10,
                "type": "Plot"
            },
            {
                "id": "P-9647",
                "name": "Sunset Villa",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 247787.14,
                "totalArea": 375.39,
                "ratePerArea": 1695.4,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-3677",
                "name": "Riverside Bliss",
                "description": "A spacious property ideal for families or investors.",
                "price": 466349.4,
                "totalArea": 169.98,
                "ratePerArea": 296.47,
                "rooms": 8,
                "type": "Villa"
            },
            {
                "id": "P-3412",
                "name": "Mountain Retreat",
                "description": "A serene plot perfect for building your dream home.",
                "price": 437290.87,
                "totalArea": 251.89,
                "ratePerArea": 866.44,
                "rooms": 4,
                "type": "Unit"
            },
            {
                "id": "P-3863",
                "name": "Lakeside Plot",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 269729.89,
                "totalArea": 113.62,
                "ratePerArea": 1699.07,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-5897",
                "name": "Hilltop Unit",
                "description": "A cozy and affordable option in a prime location.",
                "price": 490471.97,
                "totalArea": 161.82,
                "ratePerArea": 1172.86,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-6411",
                "name": "Mountain Retreat",
                "description": "A cozy and affordable option in a prime location.",
                "price": 399863.5,
                "totalArea": 168.15,
                "ratePerArea": 1558.81,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-1023",
                "name": "Cityscape",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 92464.21,
                "totalArea": 342.81,
                "ratePerArea": 441.41,
                "rooms": 1,
                "type": "Plot"
            },
            {
                "id": "P-4531",
                "name": "Sunset Villa",
                "description": "A cozy and affordable option in a prime location.",
                "price": 325935.08,
                "totalArea": 92.57,
                "ratePerArea": 1288.62,
                "rooms": 7,
                "type": "Villa"
            },
            {
                "id": "P-2391",
                "name": "Mountain Retreat",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 251990.44,
                "totalArea": 484.52,
                "ratePerArea": 800.25,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-7721",
                "name": "Garden View",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 258066.5,
                "totalArea": 394.72,
                "ratePerArea": 1500.19,
                "rooms": 3,
                "type": "Unit"
            },
            {
                "id": "P-8284",
                "name": "Lakeside Plot",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 137898.15,
                "totalArea": 198.93,
                "ratePerArea": 121.87,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-3189",
                "name": "Lakeside Plot",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 469135.98,
                "totalArea": 399.13,
                "ratePerArea": 463.95,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-4521",
                "name": "Sunset Villa",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 126411.34,
                "totalArea": 359.59,
                "ratePerArea": 1190.91,
                "rooms": 2,
                "type": "Unit"
            },
            {
                "id": "P-6734",
                "name": "Sunset Villa",
                "description": "A serene plot perfect for building your dream home.",
                "price": 131396.19,
                "totalArea": 320.12,
                "ratePerArea": 496.91,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-7720",
                "name": "Hilltop Unit",
                "description": "A spacious property ideal for families or investors.",
                "price": 456260.28,
                "totalArea": 69.92,
                "ratePerArea": 682.1,
                "rooms": 2,
                "type": "Unit"
            },
            {
                "id": "P-1012",
                "name": "Sunset Villa",
                "description": "A serene plot perfect for building your dream home.",
                "price": 210530.93,
                "totalArea": 203.03,
                "ratePerArea": 1289.44,
                "rooms": 6,
                "type": "Unit"
            },
            {
                "id": "P-5578",
                "name": "Forest Escape",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 83667.85,
                "totalArea": 176.65,
                "ratePerArea": 739.97,
                "rooms": 4,
                "type": "Plot"
            },
            {
                "id": "P-9209",
                "name": "Urban Haven",
                "description": "A serene plot perfect for building your dream home.",
                "price": 319190.93,
                "totalArea": 476.76,
                "ratePerArea": 766.33,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-8781",
                "name": "Mountain Retreat",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 253899.52,
                "totalArea": 175.81,
                "ratePerArea": 1796.06,
                "rooms": 7,
                "type": "Villa"
            },
            {
                "id": "P-8042",
                "name": "Cityscape",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 273841.55,
                "totalArea": 91.71,
                "ratePerArea": 356.47,
                "rooms": 9,
                "type": "Plot"
            },
            {
                "id": "P-3607",
                "name": "Hilltop Unit",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 180121.02,
                "totalArea": 341.77,
                "ratePerArea": 973.67,
                "rooms": 4,
                "type": "Plot"
            },
            {
                "id": "P-3826",
                "name": "Hilltop Unit",
                "description": "A serene plot perfect for building your dream home.",
                "price": 460866.37,
                "totalArea": 205.62,
                "ratePerArea": 1053.64,
                "rooms": 4,
                "type": "Unit"
            },
            {
                "id": "P-3396",
                "name": "Riverside Bliss",
                "description": "A serene plot perfect for building your dream home.",
                "price": 265807.8,
                "totalArea": 120.62,
                "ratePerArea": 1279.52,
                "rooms": 10,
                "type": "Plot"
            },
            {
                "id": "P-2534",
                "name": "Sunset Villa",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 322803.91,
                "totalArea": 125.41,
                "ratePerArea": 1998.65,
                "rooms": 6,
                "type": "Plot"
            },
            {
                "id": "P-2186",
                "name": "Mountain Retreat",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 202618.22,
                "totalArea": 450.45,
                "ratePerArea": 1013.84,
                "rooms": 6,
                "type": "Unit"
            },
            {
                "id": "P-5865",
                "name": "Riverside Bliss",
                "description": "A spacious property ideal for families or investors.",
                "price": 73145.51,
                "totalArea": 138.45,
                "ratePerArea": 363.11,
                "rooms": 2,
                "type": "Unit"
            },
            {
                "id": "P-7168",
                "name": "Sunset Villa",
                "description": "A serene plot perfect for building your dream home.",
                "price": 379532.25,
                "totalArea": 183.39,
                "ratePerArea": 765.67,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-2395",
                "name": "Forest Escape",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 306963.21,
                "totalArea": 297.24,
                "ratePerArea": 1377.72,
                "rooms": 2,
                "type": "Unit"
            },
            {
                "id": "P-3851",
                "name": "Riverside Bliss",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 52561.75,
                "totalArea": 298.61,
                "ratePerArea": 1795.14,
                "rooms": 6,
                "type": "Unit"
            },
            {
                "id": "P-1111",
                "name": "Lakeside Plot",
                "description": "A serene plot perfect for building your dream home.",
                "price": 454092.15,
                "totalArea": 252.21,
                "ratePerArea": 516.12,
                "rooms": 7,
                "type": "Plot"
            },
            {
                "id": "P-9962",
                "name": "Lakeside Plot",
                "description": "A cozy and affordable option in a prime location.",
                "price": 340866.7,
                "totalArea": 133.68,
                "ratePerArea": 1770.79,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-9078",
                "name": "Cityscape",
                "description": "A spacious property ideal for families or investors.",
                "price": 393450.15,
                "totalArea": 66.11,
                "ratePerArea": 1700.27,
                "rooms": 7,
                "type": "Villa"
            },
            {
                "id": "P-1753",
                "name": "Riverside Bliss",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 259030.17,
                "totalArea": 210.47,
                "ratePerArea": 229.52,
                "rooms": 3,
                "type": "Villa"
            },
            {
                "id": "P-2801",
                "name": "Mountain Retreat",
                "description": "A spacious property ideal for families or investors.",
                "price": 397968.44,
                "totalArea": 96.28,
                "ratePerArea": 529.81,
                "rooms": 3,
                "type": "Unit"
            },
            {
                "id": "P-2934",
                "name": "Lakeside Plot",
                "description": "A serene plot perfect for building your dream home.",
                "price": 185713.92,
                "totalArea": 227.98,
                "ratePerArea": 483.51,
                "rooms": 1,
                "type": "Villa"
            },
            {
                "id": "P-1898",
                "name": "Cityscape",
                "description": "A spacious property ideal for families or investors.",
                "price": 119986.46,
                "totalArea": 307.93,
                "ratePerArea": 1463.38,
                "rooms": 9,
                "type": "Villa"
            },
            {
                "id": "P-9870",
                "name": "Lakeside Plot",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 366234.35,
                "totalArea": 200.19,
                "ratePerArea": 1350.75,
                "rooms": 10,
                "type": "Plot"
            },
            {
                "id": "P-7552",
                "name": "Riverside Bliss",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 370446.98,
                "totalArea": 290.86,
                "ratePerArea": 1087.13,
                "rooms": 1,
                "type": "Plot"
            },
            {
                "id": "P-8049",
                "name": "Forest Escape",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 75558.51,
                "totalArea": 61.72,
                "ratePerArea": 282.14,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-3432",
                "name": "Cityscape",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 94541.3,
                "totalArea": 437.66,
                "ratePerArea": 1506.29,
                "rooms": 1,
                "type": "Plot"
            },
            {
                "id": "P-4217",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 287581.86,
                "totalArea": 351.05,
                "ratePerArea": 893.76,
                "rooms": 5,
                "type": "Plot"
            },
            {
                "id": "P-9384",
                "name": "Lakeside Plot",
                "description": "A spacious property ideal for families or investors.",
                "price": 209481.54,
                "totalArea": 460.8,
                "ratePerArea": 1605.77,
                "rooms": 5,
                "type": "Unit"
            },
            {
                "id": "P-1344",
                "name": "Riverside Bliss",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 165184.29,
                "totalArea": 497.69,
                "ratePerArea": 548.14,
                "rooms": 6,
                "type": "Unit"
            },
            {
                "id": "P-2487",
                "name": "Sunset Villa",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 261109.11,
                "totalArea": 337.76,
                "ratePerArea": 1845.37,
                "rooms": 3,
                "type": "Unit"
            },
            {
                "id": "P-8502",
                "name": "Riverside Bliss",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 203834.13,
                "totalArea": 183.57,
                "ratePerArea": 1246.55,
                "rooms": 7,
                "type": "Plot"
            },
            {
                "id": "P-4360",
                "name": "Mountain Retreat",
                "description": "A cozy and affordable option in a prime location.",
                "price": 393630.1,
                "totalArea": 275.05,
                "ratePerArea": 1173.94,
                "rooms": 1,
                "type": "Villa"
            },
            {
                "id": "P-1501",
                "name": "Garden View",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 192684.15,
                "totalArea": 117.86,
                "ratePerArea": 1443.48,
                "rooms": 4,
                "type": "Plot"
            },
            {
                "id": "P-6683",
                "name": "Lakeside Plot",
                "description": "A cozy and affordable option in a prime location.",
                "price": 313216.91,
                "totalArea": 348.16,
                "ratePerArea": 1672.23,
                "rooms": 3,
                "type": "Villa"
            },
            {
                "id": "P-2324",
                "name": "Lakeside Plot",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 406340.77,
                "totalArea": 265.99,
                "ratePerArea": 549.24,
                "rooms": 8,
                "type": "Unit"
            },
            {
                "id": "P-5540",
                "name": "Cityscape",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 81245.74,
                "totalArea": 299.96,
                "ratePerArea": 196.7,
                "rooms": 3,
                "type": "Unit"
            },
            {
                "id": "P-1766",
                "name": "Urban Haven",
                "description": "A cozy and affordable option in a prime location.",
                "price": 198864.44,
                "totalArea": 202.86,
                "ratePerArea": 417.0,
                "rooms": 4,
                "type": "Plot"
            },
            {
                "id": "P-7125",
                "name": "Lakeside Plot",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 390418.04,
                "totalArea": 65.96,
                "ratePerArea": 1892.75,
                "rooms": 9,
                "type": "Unit"
            },
            {
                "id": "P-9684",
                "name": "Mountain Retreat",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 148188.24,
                "totalArea": 435.83,
                "ratePerArea": 1023.49,
                "rooms": 6,
                "type": "Unit"
            },
            {
                "id": "P-8369",
                "name": "Lakeside Plot",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 400797.13,
                "totalArea": 444.99,
                "ratePerArea": 1206.93,
                "rooms": 1,
                "type": "Unit"
            },
            {
                "id": "P-8689",
                "name": "Urban Haven",
                "description": "A spacious property ideal for families or investors.",
                "price": 104427.15,
                "totalArea": 454.01,
                "ratePerArea": 213.03,
                "rooms": 1,
                "type": "Plot"
            },
            {
                "id": "P-9455",
                "name": "Mountain Retreat",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 306607.44,
                "totalArea": 104.37,
                "ratePerArea": 1806.03,
                "rooms": 3,
                "type": "Unit"
            },
            {
                "id": "P-2584",
                "name": "Garden View",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 464556.15,
                "totalArea": 262.51,
                "ratePerArea": 1883.25,
                "rooms": 3,
                "type": "Plot"
            },
            {
                "id": "P-8294",
                "name": "Garden View",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 432449.37,
                "totalArea": 308.43,
                "ratePerArea": 351.95,
                "rooms": 10,
                "type": "Plot"
            },
            {
                "id": "P-6792",
                "name": "Garden View",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 112467.37,
                "totalArea": 81.67,
                "ratePerArea": 512.47,
                "rooms": 3,
                "type": "Plot"
            },
            {
                "id": "P-9924",
                "name": "Ocean Breeze",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 241171.52,
                "totalArea": 334.68,
                "ratePerArea": 1824.73,
                "rooms": 10,
                "type": "Villa"
            },
            {
                "id": "P-1625",
                "name": "Hilltop Unit",
                "description": "A cozy and affordable option in a prime location.",
                "price": 416682.78,
                "totalArea": 374.76,
                "ratePerArea": 770.31,
                "rooms": 3,
                "type": "Plot"
            },
            {
                "id": "P-6589",
                "name": "Garden View",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 432841.48,
                "totalArea": 254.18,
                "ratePerArea": 1737.19,
                "rooms": 4,
                "type": "Villa"
            },
            {
                "id": "P-7678",
                "name": "Sunset Villa",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 69608.92,
                "totalArea": 203.23,
                "ratePerArea": 1554.37,
                "rooms": 3,
                "type": "Unit"
            },
            {
                "id": "P-8601",
                "name": "Hilltop Unit",
                "description": "A cozy and affordable option in a prime location.",
                "price": 128051.68,
                "totalArea": 52.92,
                "ratePerArea": 497.11,
                "rooms": 7,
                "type": "Unit"
            },
            {
                "id": "P-3672",
                "name": "Urban Haven",
                "description": "A spacious property ideal for families or investors.",
                "price": 133418.02,
                "totalArea": 164.11,
                "ratePerArea": 192.86,
                "rooms": 3,
                "type": "Plot"
            },
            {
                "id": "P-2856",
                "name": "Sunset Villa",
                "description": "A luxurious property with stunning views and modern amenities.",
                "price": 249523.56,
                "totalArea": 475.11,
                "ratePerArea": 672.42,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-1545",
                "name": "Garden View",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 423332.72,
                "totalArea": 204.14,
                "ratePerArea": 928.31,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-6647",
                "name": "Forest Escape",
                "description": "A high-end unit with access to exclusive facilities.",
                "price": 362577.54,
                "totalArea": 170.74,
                "ratePerArea": 974.75,
                "rooms": 6,
                "type": "Plot"
            },
            {
                "id": "P-8380",
                "name": "Mountain Retreat",
                "description": "A spacious property ideal for families or investors.",
                "price": 91155.28,
                "totalArea": 327.4,
                "ratePerArea": 919.96,
                "rooms": 6,
                "type": "Plot"
            },
            {
                "id": "P-8943",
                "name": "Hilltop Unit",
                "description": "A serene plot perfect for building your dream home.",
                "price": 479055.1,
                "totalArea": 338.55,
                "ratePerArea": 1639.83,
                "rooms": 2,
                "type": "Plot"
            },
            {
                "id": "P-2941",
                "name": "Forest Escape",
                "description": "A spacious property ideal for families or investors.",
                "price": 395376.86,
                "totalArea": 169.73,
                "ratePerArea": 1305.43,
                "rooms": 5,
                "type": "Villa"
            },
            {
                "id": "P-9840",
                "name": "Garden View",
                "description": "An elegant home designed for comfort and convenience.",
                "price": 65140.08,
                "totalArea": 375.98,
                "ratePerArea": 1439.42,
                "rooms": 3,
                "type": "Unit"
            }
        ];
    }

    constructor() {
    }

    getPropertiesMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getPropertiesSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getPropertiesMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getPropertiesLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getPropertiesXLarge() {
        return Promise.resolve(this.getData());
    }
}
