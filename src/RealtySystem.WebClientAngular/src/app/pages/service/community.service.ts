import {Injectable} from '@angular/core';

export interface Community {
    id?: string | null;
    name?: string | null;
    description?: string | null;
    city?: string | null;
    country?: string | null;
}

@Injectable({
    providedIn: 'root'
})
export class CommunityService {

    getData() {
        return [
            {
                id: "1",
                name: "Community 1",
                description: null,
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "2",
                name: "Community 2",
                description: "Description of Community 2",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "3",
                name: "Community 3",
                description: "Description of Community 3",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "4",
                name: "Community 4",
                description: null,
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "5",
                name: "Community 5",
                description: "Description of Community 5",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "6",
                name: "Community 6",
                description: "Description of Community 6",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "7",
                name: "Community 7",
                description: null,
                city: "Paris",
                country: "France"
            },
            {
                id: "8",
                name: "Community 8",
                description: "Description of Community 8",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "9",
                name: "Community 9",
                description: "Description of Community 9",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "10",
                name: "Community 10",
                description: null,
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "11",
                name: "Community 11",
                description: "Description of Community 11",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "12",
                name: "Community 12",
                description: "Description of Community 12",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "13",
                name: "Community 13",
                description: null,
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "14",
                name: "Community 14",
                description: "Description of Community 14",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "15",
                name: "Community 15",
                description: "Description of Community 15",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "16",
                name: "Community 16",
                description: null,
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "17",
                name: "Community 17",
                description: "Description of Community 17",
                city: "Paris",
                country: "France"
            },
            {
                id: "18",
                name: "Community 18",
                description: "Description of Community 18",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "19",
                name: "Community 19",
                description: null,
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "20",
                name: "Community 20",
                description: "Description of Community 20",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "21",
                name: "Community 21",
                description: "Description of Community 21",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "22",
                name: "Community 22",
                description: null,
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "23",
                name: "Community 23",
                description: "Description of Community 23",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "24",
                name: "Community 24",
                description: "Description of Community 24",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "25",
                name: "Community 25",
                description: null,
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "26",
                name: "Community 26",
                description: "Description of Community 26",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "27",
                name: "Community 27",
                description: "Description of Community 27",
                city: "Paris",
                country: "France"
            },
            {
                id: "28",
                name: "Community 28",
                description: null,
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "29",
                name: "Community 29",
                description: "Description of Community 29",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "30",
                name: "Community 30",
                description: "Description of Community 30",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "31",
                name: "Community 31",
                description: null,
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "32",
                name: "Community 32",
                description: "Description of Community 32",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "33",
                name: "Community 33",
                description: "Description of Community 33",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "34",
                name: "Community 34",
                description: null,
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "35",
                name: "Community 35",
                description: "Description of Community 35",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "36",
                name: "Community 36",
                description: "Description of Community 36",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "37",
                name: "Community 37",
                description: null,
                city: "Paris",
                country: "France"
            },
            {
                id: "38",
                name: "Community 38",
                description: "Description of Community 38",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "39",
                name: "Community 39",
                description: "Description of Community 39",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "40",
                name: "Community 40",
                description: null,
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "41",
                name: "Community 41",
                description: "Description of Community 41",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "42",
                name: "Community 42",
                description: "Description of Community 42",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "43",
                name: "Community 43",
                description: null,
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "44",
                name: "Community 44",
                description: "Description of Community 44",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "45",
                name: "Community 45",
                description: "Description of Community 45",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "46",
                name: "Community 46",
                description: null,
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "47",
                name: "Community 47",
                description: "Description of Community 47",
                city: "Paris",
                country: "France"
            },
            {
                id: "48",
                name: "Community 48",
                description: "Description of Community 48",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "49",
                name: "Community 49",
                description: null,
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "50",
                name: "Community 50",
                description: "Description of Community 50",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "51",
                name: "Community 51",
                description: "Description of Community 51",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "52",
                name: "Community 52",
                description: null,
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "53",
                name: "Community 53",
                description: "Description of Community 53",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "54",
                name: "Community 54",
                description: "Description of Community 54",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "55",
                name: "Community 55",
                description: null,
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "56",
                name: "Community 56",
                description: "Description of Community 56",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "57",
                name: "Community 57",
                description: "Description of Community 57",
                city: "Paris",
                country: "France"
            },
            {
                id: "58",
                name: "Community 58",
                description: null,
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "59",
                name: "Community 59",
                description: "Description of Community 59",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "60",
                name: "Community 60",
                description: "Description of Community 60",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "61",
                name: "Community 61",
                description: null,
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "62",
                name: "Community 62",
                description: "Description of Community 62",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "63",
                name: "Community 63",
                description: "Description of Community 63",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "64",
                name: "Community 64",
                description: null,
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "65",
                name: "Community 65",
                description: "Description of Community 65",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "66",
                name: "Community 66",
                description: "Description of Community 66",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "67",
                name: "Community 67",
                description: null,
                city: "Paris",
                country: "France"
            },
            {
                id: "68",
                name: "Community 68",
                description: "Description of Community 68",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "69",
                name: "Community 69",
                description: "Description of Community 69",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "70",
                name: "Community 70",
                description: null,
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "71",
                name: "Community 71",
                description: "Description of Community 71",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "72",
                name: "Community 72",
                description: "Description of Community 72",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "73",
                name: "Community 73",
                description: null,
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "74",
                name: "Community 74",
                description: "Description of Community 74",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "75",
                name: "Community 75",
                description: "Description of Community 75",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "76",
                name: "Community 76",
                description: null,
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "77",
                name: "Community 77",
                description: "Description of Community 77",
                city: "Paris",
                country: "France"
            },
            {
                id: "78",
                name: "Community 78",
                description: "Description of Community 78",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "79",
                name: "Community 79",
                description: null,
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "80",
                name: "Community 80",
                description: "Description of Community 80",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "81",
                name: "Community 81",
                description: "Description of Community 81",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "82",
                name: "Community 82",
                description: null,
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "83",
                name: "Community 83",
                description: "Description of Community 83",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "84",
                name: "Community 84",
                description: "Description of Community 84",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "85",
                name: "Community 85",
                description: null,
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "86",
                name: "Community 86",
                description: "Description of Community 86",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "87",
                name: "Community 87",
                description: "Description of Community 87",
                city: "Paris",
                country: "France"
            },
            {
                id: "88",
                name: "Community 88",
                description: null,
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "89",
                name: "Community 89",
                description: "Description of Community 89",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "90",
                name: "Community 90",
                description: "Description of Community 90",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "91",
                name: "Community 91",
                description: null,
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "92",
                name: "Community 92",
                description: "Description of Community 92",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "93",
                name: "Community 93",
                description: "Description of Community 93",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "94",
                name: "Community 94",
                description: null,
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "95",
                name: "Community 95",
                description: "Description of Community 95",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "96",
                name: "Community 96",
                description: "Description of Community 96",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "97",
                name: "Community 97",
                description: null,
                city: "Paris",
                country: "France"
            },
            {
                id: "98",
                name: "Community 98",
                description: "Description of Community 98",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "99",
                name: "Community 99",
                description: "Description of Community 99",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "100",
                name: "Community 100",
                description: null,
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "101",
                name: "Community 101",
                description: "Description of Community 101",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "102",
                name: "Community 102",
                description: "Description of Community 102",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "103",
                name: "Community 103",
                description: null,
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "104",
                name: "Community 104",
                description: "Description of Community 104",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "105",
                name: "Community 105",
                description: "Description of Community 105",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "106",
                name: "Community 106",
                description: null,
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "107",
                name: "Community 107",
                description: "Description of Community 107",
                city: "Paris",
                country: "France"
            },
            {
                id: "108",
                name: "Community 108",
                description: "Description of Community 108",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "109",
                name: "Community 109",
                description: null,
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "110",
                name: "Community 110",
                description: "Description of Community 110",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "111",
                name: "Community 111",
                description: "Description of Community 111",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "112",
                name: "Community 112",
                description: null,
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "113",
                name: "Community 113",
                description: "Description of Community 113",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "114",
                name: "Community 114",
                description: "Description of Community 114",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "115",
                name: "Community 115",
                description: null,
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "116",
                name: "Community 116",
                description: "Description of Community 116",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "117",
                name: "Community 117",
                description: "Description of Community 117",
                city: "Paris",
                country: "France"
            },
            {
                id: "118",
                name: "Community 118",
                description: null,
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "119",
                name: "Community 119",
                description: "Description of Community 119",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "120",
                name: "Community 120",
                description: "Description of Community 120",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "121",
                name: "Community 121",
                description: null,
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "122",
                name: "Community 122",
                description: "Description of Community 122",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "123",
                name: "Community 123",
                description: "Description of Community 123",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "124",
                name: "Community 124",
                description: null,
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "125",
                name: "Community 125",
                description: "Description of Community 125",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "126",
                name: "Community 126",
                description: "Description of Community 126",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "127",
                name: "Community 127",
                description: null,
                city: "Paris",
                country: "France"
            },
            {
                id: "128",
                name: "Community 128",
                description: "Description of Community 128",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "129",
                name: "Community 129",
                description: "Description of Community 129",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "130",
                name: "Community 130",
                description: null,
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "131",
                name: "Community 131",
                description: "Description of Community 131",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "132",
                name: "Community 132",
                description: "Description of Community 132",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "133",
                name: "Community 133",
                description: null,
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "134",
                name: "Community 134",
                description: "Description of Community 134",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "135",
                name: "Community 135",
                description: "Description of Community 135",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "136",
                name: "Community 136",
                description: null,
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "137",
                name: "Community 137",
                description: "Description of Community 137",
                city: "Paris",
                country: "France"
            },
            {
                id: "138",
                name: "Community 138",
                description: "Description of Community 138",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "139",
                name: "Community 139",
                description: null,
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "140",
                name: "Community 140",
                description: "Description of Community 140",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "141",
                name: "Community 141",
                description: "Description of Community 141",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "142",
                name: "Community 142",
                description: null,
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "143",
                name: "Community 143",
                description: "Description of Community 143",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "144",
                name: "Community 144",
                description: "Description of Community 144",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "145",
                name: "Community 145",
                description: null,
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "146",
                name: "Community 146",
                description: "Description of Community 146",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "147",
                name: "Community 147",
                description: "Description of Community 147",
                city: "Paris",
                country: "France"
            },
            {
                id: "148",
                name: "Community 148",
                description: null,
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "149",
                name: "Community 149",
                description: "Description of Community 149",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "150",
                name: "Community 150",
                description: "Description of Community 150",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "151",
                name: "Community 151",
                description: null,
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "152",
                name: "Community 152",
                description: "Description of Community 152",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "153",
                name: "Community 153",
                description: "Description of Community 153",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "154",
                name: "Community 154",
                description: null,
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "155",
                name: "Community 155",
                description: "Description of Community 155",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "156",
                name: "Community 156",
                description: "Description of Community 156",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "157",
                name: "Community 157",
                description: null,
                city: "Paris",
                country: "France"
            },
            {
                id: "158",
                name: "Community 158",
                description: "Description of Community 158",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "159",
                name: "Community 159",
                description: "Description of Community 159",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "160",
                name: "Community 160",
                description: null,
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "161",
                name: "Community 161",
                description: "Description of Community 161",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "162",
                name: "Community 162",
                description: "Description of Community 162",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "163",
                name: "Community 163",
                description: null,
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "164",
                name: "Community 164",
                description: "Description of Community 164",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "165",
                name: "Community 165",
                description: "Description of Community 165",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "166",
                name: "Community 166",
                description: null,
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "167",
                name: "Community 167",
                description: "Description of Community 167",
                city: "Paris",
                country: "France"
            },
            {
                id: "168",
                name: "Community 168",
                description: "Description of Community 168",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "169",
                name: "Community 169",
                description: null,
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "170",
                name: "Community 170",
                description: "Description of Community 170",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "171",
                name: "Community 171",
                description: "Description of Community 171",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "172",
                name: "Community 172",
                description: null,
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "173",
                name: "Community 173",
                description: "Description of Community 173",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "174",
                name: "Community 174",
                description: "Description of Community 174",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "175",
                name: "Community 175",
                description: null,
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "176",
                name: "Community 176",
                description: "Description of Community 176",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "177",
                name: "Community 177",
                description: "Description of Community 177",
                city: "Paris",
                country: "France"
            },
            {
                id: "178",
                name: "Community 178",
                description: null,
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "179",
                name: "Community 179",
                description: "Description of Community 179",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "180",
                name: "Community 180",
                description: "Description of Community 180",
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "181",
                name: "Community 181",
                description: null,
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "182",
                name: "Community 182",
                description: "Description of Community 182",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "183",
                name: "Community 183",
                description: "Description of Community 183",
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "184",
                name: "Community 184",
                description: null,
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "185",
                name: "Community 185",
                description: "Description of Community 185",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "186",
                name: "Community 186",
                description: "Description of Community 186",
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "187",
                name: "Community 187",
                description: null,
                city: "Paris",
                country: "France"
            },
            {
                id: "188",
                name: "Community 188",
                description: "Description of Community 188",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "189",
                name: "Community 189",
                description: "Description of Community 189",
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "190",
                name: "Community 190",
                description: null,
                city: "Seoul",
                country: "South Korea"
            },
            {
                id: "191",
                name: "Community 191",
                description: "Description of Community 191",
                city: "San Francisco",
                country: "United States"
            },
            {
                id: "192",
                name: "Community 192",
                description: "Description of Community 192",
                city: "London",
                country: "United Kingdom"
            },
            {
                id: "193",
                name: "Community 193",
                description: null,
                city: "Cape Town",
                country: "South Africa"
            },
            {
                id: "194",
                name: "Community 194",
                description: "Description of Community 194",
                city: "Berlin",
                country: "Germany"
            },
            {
                id: "195",
                name: "Community 195",
                description: "Description of Community 195",
                city: "Toronto",
                country: "Canada"
            },
            {
                id: "196",
                name: "Community 196",
                description: null,
                city: "Sydney",
                country: "Australia"
            },
            {
                id: "197",
                name: "Community 197",
                description: "Description of Community 197",
                city: "Paris",
                country: "France"
            },
            {
                id: "198",
                name: "Community 198",
                description: "Description of Community 198",
                city: "Tokyo",
                country: "Japan"
            },
            {
                id: "199",
                name: "Community 199",
                description: null,
                city: "Nairobi",
                country: "Kenya"
            },
            {
                id: "200",
                name: "Community 200",
                description: "Description of Community 200",
                city: "Seoul",
                country: "South Korea"
            }
        ];
    }

    constructor() {
    }

    getCommunitiesMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCommunitiesSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCommunitiesMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCommunitiesLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCommunitiesXLarge() {
        return Promise.resolve(this.getData());
    }
}
