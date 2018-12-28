import { FETCH_USERS } from "../../types.js";
export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_USERS:
      console.log("hello");
      return state;
    default:
      return state;
  }
}

const defaultState = [
  {
    gender: "male",
    name: {
      title: "mr",
      first: "marion",
      last: "dunn"
    },
    timePosted: "5 mins ago",
    blurb: "me: yeah *whispers* i don’t have any money",
    location: {
      street: "461 mill road",
      city: "stoke-on-trent",
      state: "west midlands",
      postcode: "IV0U 0LL",
      coordinates: {
        latitude: "14.9108",
        longitude: "-129.3673"
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa"
      }
    },
    email: "marion.dunn@example.com",
    login: {
      uuid: "a3807dfe-1f7b-4c1d-9193-d177ee036ce7",
      username: "organicelephant880",
      password: "absolut",
      salt: "f7DRWf3e",
      md5: "51bf52a4be65c6366c0514557e15e3cf",
      sha1: "82aa0a4b5019744698018407f4700d949b49837b",
      sha256: "20bdb77097b14af3f0d7328a012226b36d17b0d4977359f6ff6e86edaa467946"
    },
    dob: {
      date: "1949-05-09T03:45:39Z",
      age: 69
    },
    registered: {
      date: "2009-12-04T22:54:06Z",
      age: 9
    },
    phone: "01980 24884",
    cell: "0744-190-211",
    id: {
      name: "NINO",
      value: "HT 31 80 19 H"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/48.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg"
    },
    nat: "GB"
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "benjamin",
      last: "poulsen"
    },
    timePosted: "1 min ago",
    blurb: `Me: What do you want for Christmas? \n \nHim: You not telling me I did something wrong for a whole day. \n \nMe: no. Think of something else.`,
    location: {
      street: "5040 havremarken",
      city: "pandrup",
      state: "syddanmark",
      postcode: 42399,
      coordinates: {
        latitude: "35.9991",
        longitude: "17.3418"
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo"
      }
    },
    email: "benjamin.poulsen@example.com",
    login: {
      uuid: "f8dc012f-d903-4d77-9fdd-407c162ce8a0",
      username: "lazyelephant748",
      password: "claude",
      salt: "1FIgfAxZ",
      md5: "786101f139293152cbeb75bcb03871e0",
      sha1: "77281b1692538f296b1a631dce80af5317400e4f",
      sha256: "33948ab1865e331a73c0fd51f3429651f4c9a31ea4cb9155fab37a861cdfad26"
    },
    dob: {
      date: "1966-05-04T12:58:10Z",
      age: 52
    },
    registered: {
      date: "2011-03-28T22:33:10Z",
      age: 7
    },
    phone: "61475364",
    cell: "37359797",
    id: {
      name: "CPR",
      value: "673619-3681"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/25.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg"
    },
    nat: "DK"
  },
  {
    gender: "female",
    name: {
      title: "mrs",
      first: "alicia",
      last: "selmer"
    },
    timePosted: "20 mins ago",
    blurb: `"How was your trip, boy?" I ask my dog, petting his glowing fur. "There's been a development," he says gravely, removing his space helmet`,
    location: {
      street: "lerkeveien 8375",
      city: "forland",
      state: "rogaland",
      postcode: "0908",
      coordinates: {
        latitude: "34.1576",
        longitude: "31.0491"
      },
      timezone: {
        offset: "-2:00",
        description: "Mid-Atlantic"
      }
    },
    email: "alicia.selmer@example.com",
    login: {
      uuid: "0d13c24d-750d-4af8-ad45-fe560af39014",
      username: "greenzebra951",
      password: "seagull",
      salt: "D8FF2AoG",
      md5: "1ad4aa14609aa69c69d18aa27eb1b8e3",
      sha1: "b11e7420794193d9d41ae9a9ad639b4692c26605",
      sha256: "01ae6ad5a9454d374d5886d4af4f8467cf7f9c878ce88007fbcce55cb036b2a9"
    },
    dob: {
      date: "1954-11-24T20:38:15Z",
      age: 64
    },
    registered: {
      date: "2009-11-26T20:02:16Z",
      age: 9
    },
    phone: "88739367",
    cell: "42671286",
    id: {
      name: "FN",
      value: "24115402133"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/54.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg"
    },
    nat: "NO"
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "lucas",
      last: "beck"
    },
    timePosted: "8 mins ago",
    blurb: `You can tell a lot by a guy's teeth. \n \nFor instance, if they're three feet long, that's no man; that's a hippo.`,
    location: {
      street: "8267 mill lane",
      city: "winchester",
      state: "south glamorgan",
      postcode: "M36 5NL",
      coordinates: {
        latitude: "85.1750",
        longitude: "57.1065"
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands"
      }
    },
    email: "lucas.beck@example.com",
    login: {
      uuid: "bade9ce4-cf5e-4941-89ca-dca018d1736d",
      username: "goldensnake409",
      password: "brandy",
      salt: "dpeIvi4k",
      md5: "c1056c813ce6bdb63bc8a9ff60fe927b",
      sha1: "3e4543c6c498c26d9801f7193463479c904e7e90",
      sha256: "5770c44366e20c28b30be9c2a2ccbe475d4b519a01da8e032cc80e1a7ecd240b"
    },
    dob: {
      date: "1976-09-04T09:46:45Z",
      age: 42
    },
    registered: {
      date: "2009-01-07T08:35:43Z",
      age: 9
    },
    phone: "01755 082384",
    cell: "0731-047-222",
    id: {
      name: "NINO",
      value: "HH 00 51 30 F"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/84.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg"
    },
    nat: "GB"
  },
  {
    gender: "female",
    name: {
      title: "mrs",
      first: "karlisa",
      last: "lopes"
    },
    timePosted: "5 mins ago",
    blurb: `Make porridge seem more glamorous by describing it as "Oat Cuisine".`,
    location: {
      street: "9791 rua dois",
      city: "vitória",
      state: "tocantins",
      postcode: 92959,
      coordinates: {
        latitude: "-14.7938",
        longitude: "80.9428"
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska"
      }
    },
    email: "karlisa.lopes@example.com",
    login: {
      uuid: "0772f042-15d4-474a-80e1-44778a896ef6",
      username: "angryzebra380",
      password: "tarheel",
      salt: "M4sfELbM",
      md5: "aa3fe3ffa7289b4e1bc830a0db66cdb4",
      sha1: "173612c989c9246bde7c4ca058b788c8436ff56b",
      sha256: "8b13dbd431b87ae38c05c580349cbd73fb3388d6f9062c66f2f97c22c567d363"
    },
    dob: {
      date: "1980-08-25T15:59:18Z",
      age: 38
    },
    registered: {
      date: "2005-10-11T05:33:03Z",
      age: 13
    },
    phone: "(04) 5789-4296",
    cell: "(40) 8228-3202",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/90.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg"
    },
    nat: "BR"
  },
  {
    gender: "female",
    name: {
      title: "mrs",
      first: "lene",
      last: "juul"
    },
    timePosted: "5 mins ago",
    blurb: `Whenever you introduce someone, put air quotes around their name. \n \nI want you to meet my friend "Ami"`,
    location: {
      street: "hellerud terrasse 785",
      city: "åsgårdstrand",
      state: "finnmark - finnmárku",
      postcode: "6804",
      coordinates: {
        latitude: "-55.7023",
        longitude: "41.0009"
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris"
      }
    },
    email: "lene.juul@example.com",
    login: {
      uuid: "4d0c076b-e718-49a4-852d-02f4432dc849",
      username: "ticklishpanda791",
      password: "quant4307s",
      salt: "OrJl8slX",
      md5: "566edc6903aa5f5beedb611265a520ef",
      sha1: "7d47a1c5a5a9c8dfe76068121d5766e75b35e591",
      sha256: "b5b6b348758438fe67997c9328f7e7b99f9e8de0ca2998ebda9b9d5b30211fa3"
    },
    dob: {
      date: "1958-05-14T10:29:46Z",
      age: 60
    },
    registered: {
      date: "2003-05-28T14:01:48Z",
      age: 15
    },
    phone: "72440820",
    cell: "41225081",
    id: {
      name: "FN",
      value: "14055841153"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg"
    },
    nat: "NO"
  },
  {
    gender: "female",
    name: {
      title: "mrs",
      first: "beth",
      last: "walker"
    },
    timePosted: "8 mins ago",
    blurb: `[uses 225 gallons of water to clean out peanut butter jar for recycling]`,
    location: {
      street: "1977 wycliff ave",
      city: "bendigo",
      state: "victoria",
      postcode: 6850,
      coordinates: {
        latitude: "86.9908",
        longitude: "-50.4024"
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa"
      }
    },
    email: "beth.walker@example.com",
    login: {
      uuid: "d881166d-374b-4684-a27c-85a75c48fbeb",
      username: "blackbird195",
      password: "herring",
      salt: "v4JseCYR",
      md5: "02deba5b253d1be11e8092a048dc4547",
      sha1: "3e62f6985af38b53ce6e41f2bb7a93482b6156fd",
      sha256: "bda1921553df6514180a64e13a39571a7b90bf02c22a6748d7e29fe2adf98d80"
    },
    dob: {
      date: "1958-01-28T02:50:15Z",
      age: 60
    },
    registered: {
      date: "2015-06-13T22:35:26Z",
      age: 3
    },
    phone: "04-9691-9011",
    cell: "0402-469-108",
    id: {
      name: "TFN",
      value: "932081118"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/87.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg"
    },
    nat: "AU"
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "phillip",
      last: "davidson"
    },
    timePosted: "20 mins ago",
    blurb: `Mom's car ran out of coolant and now it's driving like a humongous nerd.`,
    location: {
      street: "7492 mcclellan rd",
      city: "mcallen",
      state: "utah",
      postcode: 27801,
      coordinates: {
        latitude: "29.9875",
        longitude: "96.5088"
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta"
      }
    },
    email: "phillip.davidson@example.com",
    login: {
      uuid: "5a2f5ae2-ce0b-4a6b-b29a-7f88d638c5ff",
      username: "purpleostrich530",
      password: "halifax",
      salt: "3kVrxylS",
      md5: "0707e33a25b813a0e39bf1b9e5cf8c5d",
      sha1: "7da61638e668a7b35e994e30862687db73216710",
      sha256: "c7fae4517b7c37eeea31f7621ef055f785d358c0b3c2d9b5740339e5cb21acd5"
    },
    dob: {
      date: "1993-12-21T04:28:02Z",
      age: 24
    },
    registered: {
      date: "2004-01-24T04:50:50Z",
      age: 14
    },
    phone: "(846)-993-5829",
    cell: "(042)-189-2112",
    id: {
      name: "SSN",
      value: "063-34-2569"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/61.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/61.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/61.jpg"
    },
    nat: "US"
  },
  {
    gender: "male",
    name: {
      title: "mr",
      first: "arnaud",
      last: "miller"
    },
    timePosted: "1 min ago",
    blurb: `There should be more Christmas tunes about vengeance.`,
    location: {
      street: "2158 richmond ave",
      city: "melbourne",
      state: "british columbia",
      postcode: "C8U 8Y5",
      coordinates: {
        latitude: "-55.0772",
        longitude: "-9.6169"
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
      }
    },
    email: "arnaud.miller@example.com",
    login: {
      uuid: "8edc5f5a-b639-4b24-9adf-d181a06d7fc7",
      username: "bigleopard613",
      password: "deepthroat",
      salt: "hSWWEbck",
      md5: "7e9365a8ea0bc7a2950219e75fa341d0",
      sha1: "0e0a9afdf231737f4c8646396f719c5c97fdc03a",
      sha256: "8604635d46471d05966dcb0719673c6664f30211a0dc5091a849af277d908d4c"
    },
    dob: {
      date: "1978-08-05T10:22:16Z",
      age: 40
    },
    registered: {
      date: "2011-09-26T22:51:21Z",
      age: 7
    },
    phone: "278-470-1488",
    cell: "112-282-7381",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg"
    },
    nat: "CA"
  },
  {
    gender: "female",
    name: {
      title: "ms",
      first: "florence",
      last: "ryan"
    },
    timePosted: "5 mins ago",
    blurb: `No son of mine is going to spend his entire day playing video games!" I tell everyone on various social media sites`,
    location: {
      street: "7516 lovers ln",
      city: "bueblo",
      state: "oklahoma",
      postcode: 47583,
      coordinates: {
        latitude: "-79.3996",
        longitude: "-89.1730"
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin"
      }
    },
    email: "florence.ryan@example.com",
    login: {
      uuid: "1952e225-d596-4d7a-91c0-1bb891e35e6d",
      username: "beautifulswan207",
      password: "manson",
      salt: "YcWpjFqI",
      md5: "a4ae38df6dac960d7f0eea921f02f839",
      sha1: "2e574b35faa36204b60c0048f98cdc7ec95ad422",
      sha256: "47b7727df6c6ac443520a0af33a0b98faf1bceebfad13c6c44920ff23fad9a83"
    },
    dob: {
      date: "1951-03-13T23:29:24Z",
      age: 67
    },
    registered: {
      date: "2011-11-21T19:47:45Z",
      age: 7
    },
    phone: "(577)-893-2502",
    cell: "(597)-297-5786",
    id: {
      name: "SSN",
      value: "279-41-6479"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/55.jpg"
    },
    nat: "US"
  }
];
