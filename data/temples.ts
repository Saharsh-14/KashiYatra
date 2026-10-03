import type { Temple } from "@/types/content";

/**
 * The Eight Temples of Kashi (LOCKED SEQUENCE).
 *
 * Sequence:
 * 01 — KASHI VISHWANATH TEMPLE
 * 02 — KAAL BHAIRAV TEMPLE
 * 03 — SANKAT MOCHAN TEMPLE
 * 04 — DURGA TEMPLE
 * 05 — ANNAPURNA TEMPLE
 * 06 — TULSI MANAS TEMPLE
 * 07 — SANKATHA DEVI TEMPLE
 * 08 — NEW VISHWANATH TEMPLE — BHU
 *
 * Notes on content:
 * - Each temple has 2–4 concise sentences explaining its spiritual & cultural significance.
 * - Each photo entry points to canonical assets under `/images/temples/[slug]/[id].jpg`.
 * - If physical files are pending upload, the component layer renders an architectural
 *   photographic placeholder that preserves exact frame geometry and metadata.
 */
export const temples: readonly Temple[] = [
  {
    id: "kashi-vishwanath",
    slug: "kashi-vishwanath",
    index: 1,
    name: "KASHI VISHWANATH TEMPLE",
    devanagariName: "श्री काशी विश्वनाथ ज्योतिर्लिंग",
    descriptor: "The heart of Kashi.",
    description:
      "Standing as the supreme axis of light, the Jyotirlinga of Vishveshvara has drawn seekers through millennia to the sacred core of the ancient city. Rebuilt through enduring resilience, its golden spires reflect the eternal devotion of those seeking liberation upon the sacred soil of Shiva. Here, every alley, chanting voice, and river breeze converges into silent transcendence.",
    photos: [
      {
        id: "vishwanath-01",
        url: "/images/temples/kashi-vishwanath/01-golden-spire.jpg",
        alt: "The gilded spires of Kashi Vishwanath Temple illuminated against the dawn sky",
        caption: "Golden Shikhara & Spire",
      },
      {
        id: "vishwanath-02",
        url: "/images/temples/kashi-vishwanath/02-inner-sanctum.jpg",
        alt: "The ornate silver threshold and carved stone portals of the inner sanctum",
        caption: "Sanctum Threshold & Carved Pillars",
      },
      {
        id: "vishwanath-03",
        url: "/images/temples/kashi-vishwanath/03-evening-corridor.jpg",
        alt: "The Vishwanath Dham corridor lit with deep amber evening oil lamps",
        caption: "Corridor of Light & Devotion",
      },
      {
        id: "vishwanath-04",
        url: "/images/temples/kashi-vishwanath/04-ganga-gateway.jpg",
        alt: "The grand gateway connecting the temple plaza directly to the sacred Ganga",
        caption: "The Gateway to the Sacred River",
      },
    ],
  },
  {
    id: "kaal-bhairav",
    slug: "kaal-bhairav",
    index: 2,
    name: "KAAL BHAIRAV TEMPLE",
    devanagariName: "श्री काल भैरव मंदिर",
    descriptor: "The fierce guardian of the city.",
    description:
      "Revered as the Kotwal or divine magistrate of Varanasi, Kaal Bhairav commands dominion over time, death, and the karmic threshold of the holy city. Tradition dictates that every pilgrim seeking sanctuary in Kashi must first beseech his protective grace. Within his smoky courtyard, sacred black threads and mustard-oil flames ward off fear and mortal despair.",
    photos: [
      {
        id: "bhairav-01",
        url: "/images/temples/kaal-bhairav/01-silver-mask.jpg",
        alt: "The iconic silver face of Kaal Bhairav adorned with royal marigold garlands",
        caption: "The Silver Mask of Bhairava",
      },
      {
        id: "bhairav-02",
        url: "/images/temples/kaal-bhairav/02-courtyard-lamps.jpg",
        alt: "Courtyard lamps of mustard oil casting deep shadows along the temple walls",
        caption: "Mustard Lamps in the Inner Court",
      },
      {
        id: "bhairav-03",
        url: "/images/temples/kaal-bhairav/03-temple-lane.jpg",
        alt: "The bustling stone lane leading pilgrims to the Kotwal of Kashi",
        caption: "Passage of the Kotwal",
      },
      {
        id: "bhairav-04",
        url: "/images/temples/kaal-bhairav/04-sacred-thread.jpg",
        alt: "The sacred black threads blessed at the sanctum to protect against misfortune",
        caption: "Raksha Sutra & Blessing",
      },
    ],
  },
  {
    id: "sankat-mochan",
    slug: "sankat-mochan",
    index: 3,
    name: "SANKAT MOCHAN TEMPLE",
    devanagariName: "श्री संकट मोचन हनुमान मंदिर",
    descriptor: "The dispeller of sorrows.",
    description:
      "Established by the saint-poet Goswami Tulsidas along the southern curve of the Assi stream, this beloved sanctuary is a haven of gentle stillness and unwavering faith. Pilgrims gather through misty dawns as resonating recitations of the Hanuman Chalisa fill the air. Here, devotion is not distant or formal, but a warm and intimate refuge from the storms of life.",
    photos: [
      {
        id: "sankat-01",
        url: "/images/temples/sankat-mochan/01-sanctum-sindoor.jpg",
        alt: "The sindoor-adorned idol of Lord Hanuman facing Lord Rama in quiet devotion",
        caption: "Sindoor Shringar of the Deity",
      },
      {
        id: "sankat-02",
        url: "/images/temples/sankat-mochan/02-tulsidas-tree.jpg",
        alt: "Ancient neem and peepal trees shading the tranquil open courtyard",
        caption: "Sacred Grove & Courtyard",
      },
      {
        id: "sankat-03",
        url: "/images/temples/sankat-mochan/03-morning-chalisa.jpg",
        alt: "Pilgrims gathered with palm-leaf scriptures during dawn recitation",
        caption: "Dawn Recitation of the Chalisa",
      },
      {
        id: "sankat-04",
        url: "/images/temples/sankat-mochan/04-evening-aarti.jpg",
        alt: "Deep amber brass lamps swung rhythmically during evening prayer",
        caption: "Evening Aarti of Gratitude",
      },
    ],
  },
  {
    id: "durga-temple",
    slug: "durga-temple",
    index: 4,
    name: "DURGA TEMPLE",
    devanagariName: "श्री दुर्गा मंदिर (दुर्गा कुंड)",
    descriptor: "The crimson fortress of Shakti.",
    description:
      "Rising majestically in multi-tiered North Indian Nagara style, the eighteenth-century red-ochre shikhara of Durga Mandir anchors the southern quarters of Varanasi. The temple enshrines the primordial feminine power that protects Kashi from cosmic turbulence. Adjoining the tranquil waters of Durga Kund, its bold stone architecture shines like a blazing ruby against the evening sky.",
    photos: [
      {
        id: "durga-01",
        url: "/images/temples/durga-temple/01-ochre-shikhara.jpg",
        alt: "The vibrant red ochre multi-tiered shikhara of Durga Temple",
        caption: "Crimson Nagara Shikhara",
      },
      {
        id: "durga-02",
        url: "/images/temples/durga-temple/02-durga-kund-water.jpg",
        alt: "The calm waters of Durga Kund reflecting the terracotta stone walls",
        caption: "Reflections on Durga Kund",
      },
      {
        id: "durga-03",
        url: "/images/temples/durga-temple/03-carved-mandapa.jpg",
        alt: "Pillared mandapa with classical North Indian stone brackets and arches",
        caption: "Pillared Mandapa & Arches",
      },
      {
        id: "durga-04",
        url: "/images/temples/durga-temple/04-brass-bells.jpg",
        alt: "Row of consecrated temple brass bells ringing above the circumambulation path",
        caption: "Conch & Bell Gallery",
      },
    ],
  },
  {
    id: "annapurna-temple",
    slug: "annapurna-temple",
    index: 5,
    name: "ANNAPURNA TEMPLE",
    devanagariName: "श्री अन्नपूर्णा मंदिर",
    descriptor: "The queen of sustenance and grace.",
    description:
      "Just footsteps from the Golden Vishwanath temple sits the sacred abode of Annapurna Bhavani, the goddess of nourishment and abundance. Ancient lore tells of Lord Shiva himself begging for alms from her golden ladle to sustain the mortal world. In Kashi, it is believed that through her maternal grace, no soul within the boundaries of the holy city ever sleeps with an empty bowl.",
    photos: [
      {
        id: "annapurna-01",
        url: "/images/temples/annapurna-temple/01-golden-annapurna.jpg",
        alt: "The consecrated golden murti of Mata Annapurna holding the divine serving ladle",
        caption: "The Golden Empress of Sustenance",
      },
      {
        id: "annapurna-02",
        url: "/images/temples/annapurna-temple/02-sanctum-arches.jpg",
        alt: "The sanctum stone archway carved with floral and peacock motifs",
        caption: "Carved Stone Archways",
      },
      {
        id: "annapurna-03",
        url: "/images/temples/annapurna-temple/03-annakut-darshan.jpg",
        alt: "Mountain of sacred sweets and grain offerings during the annual Annakut darshan",
        caption: "Annakut Festival of Abundance",
      },
      {
        id: "annapurna-04",
        url: "/images/temples/annapurna-temple/04-oil-lamps.jpg",
        alt: "Traditional brass hanging lamps illuminating the quiet circumambulation corridor",
        caption: "Hanging Oil Lamps of the Sanctum",
      },
    ],
  },
  {
    id: "tulsi-manas",
    slug: "tulsi-manas",
    index: 6,
    name: "TULSI MANAS TEMPLE",
    devanagariName: "श्री तुलसी मानस मंदिर",
    descriptor: "Where the epic was carved into marble.",
    description:
      "Constructed entirely of pristine white Makrana marble upon the spot where Goswami Tulsidas composed the Ramcharitmanas, this temple is an architectural hymn to literature and faith. Every single verse and chopai of the Awadhi epic is delicately engraved across its luminous stone walls. Surrounded by landscaped peace, it bridges classical epic poetry with tranquil modern contemplation.",
    photos: [
      {
        id: "tulsimanas-01",
        url: "/images/temples/tulsi-manas/01-white-marble-facade.jpg",
        alt: "The grand white marble exterior of Tulsi Manas Temple surrounded by gardens",
        caption: "Makrana Marble Sanctuary",
      },
      {
        id: "tulsimanas-02",
        url: "/images/temples/tulsi-manas/02-engraved-verses.jpg",
        alt: "Close-up of Ramcharitmanas verses engraved on the polished marble walls",
        caption: "Engraved Chopais & Verses",
      },
      {
        id: "tulsimanas-03",
        url: "/images/temples/tulsi-manas/03-upper-gallery.jpg",
        alt: "The upper gallery showcasing mechanical dioramas of the Ramayana",
        caption: "The Epic Narrative Gallery",
      },
      {
        id: "tulsimanas-04",
        url: "/images/temples/tulsi-manas/04-garden-perspective.jpg",
        alt: "Lush botanical gardens flanking the marble entrance steps",
        caption: "Verdant Temple Grounds",
      },
    ],
  },
  {
    id: "sankatha-devi",
    slug: "sankatha-devi",
    index: 7,
    name: "SANKATHA DEVI TEMPLE",
    devanagariName: "श्री संकटा देवी मंदिर",
    descriptor: "The silent refuge above the ghats.",
    description:
      "Perched high on steep sandstone stairs above Sankatha Ghat, this secluded shrine is dedicated to the Mother who averts life's most perilous crises. Guarded by ancient stone lions and shielded from the city's frantic traffic, its quiet courtyard possesses an unmistakable contemplative stillness. Here, seekers sit in quiet absorption, listening to the gentle lapping of the sacred river below.",
    photos: [
      {
        id: "sankatha-01",
        url: "/images/temples/sankatha-devi/01-stone-lion-gate.jpg",
        alt: "Ancient carved stone lion standing sentinel at the temple entrance gate",
        caption: "Stone Lion Sentinel",
      },
      {
        id: "sankatha-02",
        url: "/images/temples/sankatha-devi/02-ghat-staircase.jpg",
        alt: "The narrow winding stone steps ascending from Sankatha Ghat to the shrine",
        caption: "Ascent from Sankatha Ghat",
      },
      {
        id: "sankatha-03",
        url: "/images/temples/sankatha-devi/03-sanctum-veil.jpg",
        alt: "The silver mask of Devi Sankatha surrounded by glowing diya flames",
        caption: "Sanctum of the Averting Mother",
      },
      {
        id: "sankatha-04",
        url: "/images/temples/sankatha-devi/04-ganga-balcony.jpg",
        alt: "View of the morning mist rising from the Ganga from the temple stone terrace",
        caption: "Terrace Overlooking the River",
      },
    ],
  },
  {
    id: "new-vishwanath-bhu",
    slug: "new-vishwanath-bhu",
    index: 8,
    name: "NEW VISHWANATH TEMPLE — BHU",
    devanagariName: "श्री विश्वनाथ मंदिर (बी.एच.यू.)",
    descriptor: "The soaring tower of modern devotion.",
    description:
      "Conceived by Bharat Ratna Mahamana Madan Mohan Malaviya and realized by the Birla family, this magnificent marble monument stands at the heart of Banaras Hindu University. With a 77-meter shikhara that ranks among the tallest temple towers on Earth, its architecture opens the sacred directly to all humanity without barrier. Its cool marble colonnades are engraved with the Bhagavad Gita, uniting timeless spirituality with the pursuit of learning.",
    photos: [
      {
        id: "bhu-01",
        url: "/images/temples/new-vishwanath-bhu/01-monumental-shikhara.jpg",
        alt: "The towering 77-meter shikhara of the New Vishwanath Temple rising into the clouds",
        caption: "Soaring 77-Meter Shikhara",
      },
      {
        id: "bhu-02",
        url: "/images/temples/new-vishwanath-bhu/02-marble-colonnade.jpg",
        alt: "The soaring two-storey marble colonnade inscribed with verses from the Bhagavad Gita",
        caption: "Colonnade of the Gita",
      },
      {
        id: "bhu-03",
        url: "/images/temples/new-vishwanath-bhu/03-lingam-sanctum.jpg",
        alt: "The central Shiva lingam of polished black granite surrounded by white marble",
        caption: "Black Granite Sanctum",
      },
      {
        id: "bhu-04",
        url: "/images/temples/new-vishwanath-bhu/04-dusk-illumination.jpg",
        alt: "The New Vishwanath Temple illuminated against the twilight canopy of BHU",
        caption: "Dusk Illumination Over the Campus",
      },
    ],
  },
] as const;
