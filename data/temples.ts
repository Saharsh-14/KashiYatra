import type { Temple } from "@/types/content";

/**
 * The Eight Dedicated Temples of Kashi (EXACT SEQUENCE).
 *
 * Sequence:
 * 01 — KASHI VISHWANATH TEMPLE
 * 02 — KAAL BHAIRAV TEMPLE
 * 03 — SANKAT MOCHAN TEMPLE
 * 04 — DURGA TEMPLE
 * 05 — GAURI KEDARESHWAR TEMPLE
 * 06 — ANNAPURNA TEMPLE
 * 07 — SANKATHA DEVI TEMPLE
 * 08 — NEW VISHWANATH TEMPLE — BHU
 */
export const temples: readonly Temple[] = [
  {
    id: "kashi-vishwanath",
    slug: "kashi-vishwanath",
    index: 1,
    name: "KASHI VISHWANATH TEMPLE",
    devanagariName: "श्री काशी विश्वनाथ ज्योतिर्लिंग",
    subtitle: "THE SPIRITUAL HEART OF KASHI",
    descriptor: "The spiritual heart of Kashi.",
    description:
      "One of the twelve Jyotirlingas, Kashi Vishwanath is the eternal center of faith, drawing millions who seek the blessings of Lord Shiva.",
    heroImage: "/images/temples/kashi-vishwanath/hero.jpg",
    illustrationImage: "/images/temples/kashi-vishwanath/illustration.png",
    photos: [
      {
        id: "vishwanath-01",
        url: "/images/temples/kashi-vishwanath/sanctum-lingam.jpg",
        alt: "The sacred Jyotirlinga of Kashi Vishwanath adorned with flowers and offerings",
        caption: "The Sacred Jyotirlinga",
      },
      {
        id: "vishwanath-02",
        url: "/images/temples/kashi-vishwanath/gateway-entrance.jpg",
        alt: "The monumental carved stone gateway of Kashi Vishwanath Corridor",
        caption: "Grand Corridor Gateway",
      },
      {
        id: "vishwanath-03",
        url: "/images/temples/kashi-vishwanath/golden-shikharas.jpg",
        alt: "The historic golden domes and spires of Kashi Vishwanath under the sky",
        caption: "Historic Gilded Domes",
      },
      {
        id: "vishwanath-04",
        url: "/images/temples/kashi-vishwanath/shringar-darshan-v2.jpg",
        alt: "Ceremonial Shringar darshan of Lord Vishwanath Jyotirlinga adorned in flowers",
        caption: "Ceremonial Shringar Darshan",
      },
    ],
  },
  {
    id: "kaal-bhairav",
    slug: "kaal-bhairav",
    index: 2,
    name: "KAAL BHAIRAV TEMPLE",
    devanagariName: "श्री काल भैरव मंदिर",
    subtitle: "THE GUARDIAN OF KASHI",
    descriptor: "The fierce guardian of the city.",
    description:
      "Kaal Bhairav protects the city and its people. The temple evokes a unique and powerful energy, deeply revered by locals and visitors alike.",
    heroImage: "/images/temples/kaal-bhairav/hero.jpg",
    photos: [
      {
        id: "bhairav-01",
        url: "/images/temples/kaal-bhairav/silver-mask.jpg",
        alt: "The sacred silver-faced deity of Lord Kaal Bhairav adorned in royal flower garlands and silver trishul",
        caption: "The Silver Mask of Lord Bhairava",
        objectPosition: "object-[center_35%]",
      },
      {
        id: "bhairav-02",
        url: "/images/temples/kaal-bhairav/sanctum-darshan-v2.jpg",
        alt: "Sanctum sanctorum of Kaal Bhairav with sacred aarti flames and carved silver pillars",
        caption: "Sanctum Sanctorum & Sacred Flames",
        objectPosition: "object-[center_20%]",
      },
      {
        id: "bhairav-03",
        url: "/images/temples/kaal-bhairav/mandap-bell.jpg",
        alt: "Devotees gathering under the sacred brass bell at Kaal Bhairav temple",
        caption: "Courtyard & Sacred Temple Bell",
        objectPosition: "object-center",
      },
      {
        id: "bhairav-04",
        url: "/images/temples/kaal-bhairav/darbar-entrance-v2.jpg",
        alt: "The historic decorated entrance gateway of Baba Shri Kaal Bhairav Nath Darbar",
        caption: "Gateway to Kaal Bhairav Darbar",
        objectPosition: "object-[center_65%]",
      },
    ],
  },
  {
    id: "sankat-mochan",
    slug: "sankat-mochan",
    index: 3,
    name: "SANKAT MOCHAN TEMPLE",
    devanagariName: "श्री संकट मोचन हनुमान मंदिर",
    subtitle: "THE RELIEVER OF TROUBLES",
    descriptor: "The dispeller of sorrows.",
    description:
      "Dedicated to Lord Hanuman, Sankat Mochan is a beloved shrine where devotees seek strength, protection and relief from life's challenges.",
    heroImage: "/images/temples/sankat-mochan/hero.jpg",
    illustrationImage: "/images/temples/sankat-mochan/illustration.png",
    photos: [
      {
        id: "sankat-01",
        url: "/images/temples/sankat-mochan/sanctum-darshan.jpg",
        alt: "Sacred Sindoor-Adorned Murti of Lord Hanuman in the silver sanctum arch",
        caption: "Sacred Sanctum & Sindoor-Adorned Murti",
        objectPosition: "object-[center_30%]",
      },
      {
        id: "sankat-02",
        url: "/images/temples/sankat-mochan/night-festival-gate.jpg",
        alt: "Illuminated festive gateway of Sankat Mochan Temple with Sita Ram sign and Lord Hanuman head",
        caption: "Illuminated Mahotsav Gateway",
        objectPosition: "object-[center_25%]",
      },
      {
        id: "sankat-03",
        url: "/images/temples/sankat-mochan/temple-courtyard.jpg",
        alt: "Courtyard and entrance facade of Shri Sankat Mochan Hanuman Temple",
        caption: "Sanctuary Courtyard & Main Entrance",
        objectPosition: "object-[center_45%]",
      },
    ],
  },
  {
    id: "durga-temple",
    slug: "durga-temple",
    index: 4,
    name: "DURGA TEMPLE",
    devanagariName: "श्री दुर्गा मंदिर (दुर्गा कुंड)",
    subtitle: "THE RED TEMPLE OF KASHI",
    descriptor: "The crimson fortress of Shakti.",
    description:
      "Famed for its striking red architecture, Durga Temple is dedicated to Goddess Durga. Its serene kund and vibrant atmosphere make it a significant spiritual and cultural landmark in Kashi.",
    heroImage: "/images/temples/durga-temple/hero.jpg",
    illustrationImage: "/images/temples/durga-temple/illustration.png",
    photos: [
      {
        id: "durga-01",
        url: "/images/temples/durga-temple/durga-darshan.jpg",
        alt: "The sacred golden-masked deity of Goddess Durga adorned with floral garlands, red brocade and jewels",
        caption: "Sacred Golden Darshan of Goddess Durga",
        objectPosition: "object-[center_40%]",
      },
      {
        id: "durga-02",
        url: "/images/temples/durga-temple/red-shikhara.jpg",
        alt: "Towering Nagara-style red stone shikhara of Durga Temple against the blue sky",
        caption: "Nagara-Style Red Stone Shikhara",
        objectPosition: "object-center",
      },
      {
        id: "durga-03",
        url: "/images/temples/durga-temple/durga-kund-night.jpg",
        alt: "The illuminated red Durga Temple reflecting in the waters of the sacred Durga Kund at night",
        caption: "Illuminated Reflection in Durga Kund",
        objectPosition: "object-center",
      },
      {
        id: "durga-04",
        url: "/images/temples/durga-temple/temple-mandap.jpg",
        alt: "Red courtyard pavilion with golden sculpted pillars and temple shikhara in the background",
        caption: "Courtyard Pavilion & Golden Pillars",
        objectPosition: "object-[center_35%]",
      },
    ],
  },
  {
    id: "gauri-kedareshwar",
    slug: "gauri-kedareshwar",
    index: 5,
    name: "GAURI KEDARESHWAR TEMPLE",
    devanagariName: "श्री गौरी केदारेश्वर मंदिर",
    subtitle: "KEDARNATH, FOUND IN KASHI",
    descriptor: "The ancient lingam on the ghats.",
    description:
      "Dedicated to Lord Kedareshwar (Shiva) and Goddess Gauri (Parvati), this temple symbolizes the eternal union of divine masculine and feminine energies.",
    heroImage: "/images/temples/gauri-kedareshwar/hero.jpg",
    illustrationImage: "/images/temples/gauri-kedareshwar/illustration.png",
    photos: [
      {
        id: "kedareshwar-01",
        url: "/images/temples/gauri-kedareshwar/svayambhu-lingam.jpg",
        alt: "The sacred self-manifest rock-formation lingam with natural white striation and silver serpent",
        caption: "The Sacred Self-Manifest (Svayambhu) Lingam",
        objectPosition: "object-center",
      },
      {
        id: "kedareshwar-02",
        url: "/images/temples/gauri-kedareshwar/shringar-darshan.jpg",
        alt: "Deity mukhalingam darshan of Gauri Kedareshwar adorned with bilva leaves and golden serpent hood",
        caption: "Mukhalingam Darshan & Bilva Shringar",
        objectPosition: "object-[center_35%]",
      },
      {
        id: "kedareshwar-03",
        url: "/images/temples/gauri-kedareshwar/sanctum-entrance.jpg",
        alt: "Historic entrance gateway of Shri Gauri Kedareshwar Ji with sculpted guardian statues",
        caption: "Historic Gateway & Guardian Sculptures",
        objectPosition: "object-center",
      },
      {
        id: "kedareshwar-04",
        url: "/images/temples/gauri-kedareshwar/maha-aarti-shringar.jpg",
        alt: "Grand conical floral shringar of Gauri Kedareshwar with offerings of prasad and fruits",
        caption: "Grand Conical Floral Shringar & Bhog",
        objectPosition: "object-center",
      },
    ],
  },
  {
    id: "annapurna-temple",
    slug: "annapurna-temple",
    index: 6,
    name: "ANNAPURNA MATA TEMPLE",
    devanagariName: "श्री अन्नपूर्णा माता मंदिर",
    subtitle: "THE MOTHER WHO FEEDS THE WORLD",
    descriptor: "The queen of sustenance and grace.",
    description:
      "Dedicated to Goddess Annapurna, the deity of food and prosperity, this temple embodies Kashi's spirit of compassion and care for all.",
    heroImage: "/images/temples/annapurna-temple/hero.jpg",
    illustrationImage: "/images/temples/annapurna-temple/illustration.png",
    photos: [
      {
        id: "annapurna-01",
        url: "/images/temples/annapurna-temple/golden-darshan.jpg",
        alt: "The sacred golden murti of Goddess Annapurna with bowl and ladle, Lord Shiva with begging bowl, Lakshmi and Saraswati",
        caption: "The Sacred Golden Darshan & Eternal Nourishment",
        objectPosition: "object-[center_35%]",
      },
      {
        id: "annapurna-02",
        url: "/images/temples/annapurna-temple/entrance-archway.jpg",
        alt: "Historic painted entrance gateway of Maa Annapurna Temple with intricate floral frescoes",
        caption: "Historic Gateway to Maa Annapurna Temple",
        objectPosition: "object-center",
      },
      {
        id: "annapurna-03",
        url: "/images/temples/annapurna-temple/annakut-mahotsav.jpg",
        alt: "The grand Annakut festival at Annapurna Temple featuring trays of sweets and offerings before the sanctum",
        caption: "Grand Annakut Mahotsav & Sacred Prasad Trays",
        objectPosition: "object-center",
      },
    ],
  },
  {
    id: "sankatha-devi",
    slug: "sankatha-devi",
    index: 7,
    name: "SANKATHA MATA TEMPLE",
    devanagariName: "श्री संकटा माता मंदिर",
    subtitle: "THE GODDESS WHO REMOVES AFFLICTION",
    descriptor: "The silent refuge above the ghats.",
    description:
      "A revered shrine where devotees pray to Goddess Sankatha Devi for the removal of obstacles and a smoother path in life.",
    heroImage: "/images/temples/sankatha-devi/hero.jpg",
    illustrationImage: "/images/temples/sankatha-devi/illustration.png",
    photos: [
      {
        id: "sankatha-01",
        url: "/images/temples/sankatha-devi/darshan-silver-mukut.jpg",
        alt: "The divine face of Maa Sankatha adorned with silver crown and fragrant floral bed of jasmine and roses",
        caption: "Sacred Darshan of Maa Sankatha & Silver Mukut",
        objectPosition: "object-[center_45%]",
      },
      {
        id: "sankatha-02",
        url: "/images/temples/sankatha-devi/sanctum-silver-mandap.jpg",
        alt: "The sacred silver arched sanctum of Maa Sankatha with Lord Hanuman on left and Shiva Lingam on right",
        caption: "Sacred Sanctum & Silver Arched Mandap",
        objectPosition: "object-center",
      },
      {
        id: "sankatha-03",
        url: "/images/temples/sankatha-devi/courtyard-sacred-banyan.jpg",
        alt: "The historic temple courtyard of Sankatha Mata with ancient banyan tree and large temple bell",
        caption: "Ancient Banyan Tree & Temple Bell Courtyard",
        objectPosition: "object-center",
      },
      {
        id: "sankatha-04",
        url: "/images/temples/sankatha-devi/marigold-festive-shringar.jpg",
        alt: "Festive floral shringar of Maa Sankatha surrounded by cascading orange marigold garlands",
        caption: "Festive Floral Shringar & Marigold Garlands",
        objectPosition: "object-center",
      },
    ],
  },
  {
    id: "new-vishwanath-bhu",
    slug: "new-vishwanath-bhu",
    index: 8,
    name: "NEW VISHWANATH TEMPLE",
    devanagariName: "श्री विश्वनाथ मंदिर (बी.एच.यू.)",
    subtitle: "THE GOLDEN TEMPLE OF BHU",
    descriptor: "The soaring white-marble sanctuary of learning and faith.",
    description:
      "Standing at the heart of Banaras Hindu University, this grand marble temple embodies Pandit Madan Mohan Malaviya's vision of harmonizing sacred spiritual tradition with modern education.",
    heroImage: "/images/temples/new-vishwanath-bhu/hero.jpg",
    illustrationImage: "/images/temples/new-vishwanath-bhu/illustration.png",
    photos: [
      {
        id: "bhu-01",
        url: "/images/temples/new-vishwanath-bhu/complex-panorama.jpg",
        alt: "The grand New Vishwanath Temple complex at BHU with its soaring white marble shikhara against a clear blue sky",
        caption: "The Soaring White Marble Shikhara & Red Sandstone Pavilion",
        objectPosition: "object-[center_35%]",
      },
      {
        id: "bhu-02",
        url: "/images/temples/new-vishwanath-bhu/sanctum-darshan-lingam.jpg",
        alt: "Sacred Shiva Lingam of Vishwanath with silver yoni base, brass kalash, and floral shringar inside the sanctum",
        caption: "Sacred Shiva Lingam & Inner Sanctum Darshan",
        objectPosition: "object-[center_45%]",
      },
      {
        id: "bhu-03",
        url: "/images/temples/new-vishwanath-bhu/night-illumination-temple.jpg",
        alt: "Night illumination of Shri Vishwanath Temple BHU with glowing architectural lights and illuminated shikhara",
        caption: "Night Illumination & Glowing Shikhara",
        objectPosition: "object-center",
      },
      {
        id: "bhu-04",
        url: "/images/temples/new-vishwanath-bhu/malaviya-entrance-gate.jpg",
        alt: "The historic Malaviya entrance gate of Banaras Hindu University surrounded by tall palm trees",
        caption: "Historic BHU Malaviya Entrance Gate (Lanka Gate)",
        objectPosition: "object-center",
      },
    ],
  },
] as const;
