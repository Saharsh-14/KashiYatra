/**
 * KASHI RASOI — CULINARY CHAPTERS DATA
 *
 * Dedicated data source for the 8 Kashi Rasoi food chapters.
 * Order is strictly preserved:
 * 01 — Kachori Sabzi
 * 02 — Tamatar Chaat
 * 03 — Banarasi Sweets
 * 04 — Golgappe
 * 05 — Banarasi Paan
 * 06 — Malaiyo
 * 07 — Chai & Toast
 * 08 — Banarasi Lassi
 */

export interface KashiRasoiFood {
  id: string;
  slug: string;
  number: string;
  name: string;
  devanagariName: string;
  tagline: string;
  category: string;
  timing: string;
  origin: string;
  shortDescription: string;
  longDescription: string;
  mediaDir: string;
  image?: string;
  placeholders: {
    hero: {
      title: string;
      aspect: string;
      fileName: string;
    };
    supporting1: {
      title: string;
      aspect: string;
      fileName: string;
    };
    supporting2: {
      title: string;
      aspect: string;
      fileName: string;
    };
    preparation?: {
      title: string;
      aspect: string;
      fileName: string;
    };
  };
  craft: {
    title: string;
    description: string;
    cookware: string;
  };
  tags: string[];
}

export const KASHI_RASOI_FOODS: KashiRasoiFood[] = [
  {
    id: "kachori-sabzi",
    slug: "kachori-sabzi",
    number: "01",
    name: "Kachori Sabzi",
    devanagariName: "बनारसी कचौड़ी सब्ज़ी",
    tagline: "The Golden Morning Awakening of Thatheri Bazar",
    category: "Morning Ritual",
    timing: "6:00 AM – 10:30 AM",
    origin: "Thatheri Bazar & Kachori Gali",
    shortDescription:
      "Crisp, flaky lentil-stuffed pooris paired with dark, aromatic asafoetida pumpkin-potato curry and hot crispy jalebis.",
    longDescription:
      "Before dawn breaks over the holy Ganga, the labyrinthine stone alleys of old Banaras awaken to the sharp, intoxicating fragrance of heeng (asafoetida) blossoming in bubbling iron kadhais. In Kashi, breakfast is not merely a meal — it is an unhurried morning communion. Golden, flaky pooris stuffed with coarse spiced lentils crackle open, releasing steam infused with roasted cloves and cumin. They are paired with a dark, piquant curry of slow-simmered black chana, tender potatoes, and sweet pumpkin that balances the fire of green chilies. The ritual concludes with scorching-hot, syrup-dripping spiral jalebis eaten standing in stone lanes while morning bells echo from nearby shrines.",
    mediaDir: "/kashi-rasoi/food/kachori-sabzi",
    placeholders: {
      hero: {
        title: "Kachori Sabzi Hero Composition",
        aspect: "16/10",
        fileName: "hero.jpg",
      },
      supporting1: {
        title: "Stone Alley Morning Gathering",
        aspect: "4/3",
        fileName: "detail-gathering.jpg",
      },
      supporting2: {
        title: "Curry & Palash Leaf Plate",
        aspect: "4/3",
        fileName: "detail-plate.jpg",
      },
      preparation: {
        title: "Woodfire Iron Kadhai Boiling Ghee",
        aspect: "16/9",
        fileName: "preparation-kadhai.jpg",
      },
    },
    craft: {
      title: "The Iron Kadhai & Wood-Fired Hearth",
      description:
        "Every batch is rolled by hand in pre-dawn darkness and fried in massive hand-hammered iron vessels over tamarind wood fire, achieving a blistering shatter that holds its crunch even when bathed in steaming sabji.",
      cookware: "Traditional cast iron kadhai, brass jharani, and sun-dried palash leaf plates",
    },
    tags: ["MORNING RITUAL", "HEENG & GHEE", "PALASH LEAF", "ANCIENT LANES"],
  },
  {
    id: "tamatar-chaat",
    slug: "tamatar-chaat",
    number: "02",
    name: "Tamatar Chaat",
    devanagariName: "काशी की टमाटर चाट",
    tagline: "The Smoky Twilight Alchemy of Godowlia",
    category: "Street Alchemy",
    timing: "4:00 PM – 10:30 PM",
    origin: "Godowlia Chowk & Dashashwamedh",
    shortDescription:
      "Plump desi tomatoes slow-stewed in pure ghee with mawa, ginger, and cumin syrup, crowned in clay bowls with crisp namakpare.",
    longDescription:
      "Tamatar Chaat is a culinary sorcery found nowhere on earth except within the historic gullies of Banaras. Unlike conventional street chaats built cold, Banarasi Tamatar Chaat is a hot, cooked stew of luscious desi winter tomatoes slow-simmered on gigantic concave iron tawas with generous ladles of pure desi ghee, crushed potatoes, and crumbled mawa (milk solids). When ordered, the chaatwallah portions the bubbling red mash into an earthen shikora (clay bowl), splashes it with scalding hot roasted-cumin sugar syrup (jeera chashni), a squeeze of fresh tart lemon, red chili powder, and tops it with shattered crispy namakpare.",
    mediaDir: "/kashi-rasoi/food/tamatar-chaat",
    placeholders: {
      hero: {
        title: "Tamatar Chaat Earthen Shikora",
        aspect: "16/10",
        fileName: "hero.jpg",
      },
      supporting1: {
        title: "Sizzling Concave Iron Tawa",
        aspect: "4/3",
        fileName: "detail-tawa.jpg",
      },
      supporting2: {
        title: "Roasted Cumin Sugar Glaze",
        aspect: "4/3",
        fileName: "detail-syrup.jpg",
      },
      preparation: {
        title: "Twilight Service at Godowlia Chowk",
        aspect: "16/9",
        fileName: "preparation-service.jpg",
      },
    },
    craft: {
      title: "The Sizzling Iron Tawa & Earthen Shikora",
      description:
        "The chaat master uses flat brass spatulas to pound simmering tomatoes into an unctuous emulsion on a massive iron griddle, caramelizing the natural fruit sugars before tempering with roasted spices.",
      cookware: "Concave iron tawa, charcoal braziers, unglazed clay shikora bowls",
    },
    tags: ["STREET ALCHEMY", "PURE DESI GHEE", "EARTHEN SHIKORA", "TWILIGHT FLAVOR"],
  },
  {
    id: "banarasi-sweets",
    slug: "banarasi-sweets",
    number: "03",
    name: "Banarasi Sweets",
    devanagariName: "बनारसी मिष्ठान्न",
    tagline: "The Confectionery Mastery of Ancient Halwai Guilds",
    category: "Heritage Confectionery",
    timing: "8:00 AM – 11:00 PM",
    origin: "Vishwanath Gali & Chaukhamba",
    shortDescription:
      "Sacred offerings of Lal Peda, Parwal Ki Mithai, Magdal, and Chandrakala crafted from slow-condensed buffalo khoya and green cardamom.",
    longDescription:
      "Banaras holds one of India's most reverent confectionery traditions. Generations of halwais in Chaukhamba and Vishwanath Gali craft iconic sweets like caramelized red Lal Peda stamped with heritage dies, delicate candied pointed-gourd stuffed with pistachios and mawa, and ghee-soaked Chandrakalas wrapped in tissue-thin edible silver foil. Each confection is rooted in temple devotion, prepared with unpasteurized buffalo milk reduced for hours in seasoned brass cauldrons until dense and golden.",
    mediaDir: "/kashi-rasoi/food/banarasi-sweets",
    image: "/kashi-rasoi/food/banarasi-sweets/master-card.jpg",
    placeholders: {
      hero: {
        title: "Heritage Banarasi Sweets Platter",
        aspect: "16/10",
        fileName: "hero.jpg",
      },
      supporting1: {
        title: "Lal Peda Hand-Stamped In Brass",
        aspect: "4/3",
        fileName: "detail-peda.jpg",
      },
      supporting2: {
        title: "Silver Vark & Cardamom Infusion",
        aspect: "4/3",
        fileName: "detail-vark.jpg",
      },
      preparation: {
        title: "Generational Khoya Simmering",
        aspect: "16/9",
        fileName: "preparation-khoya.jpg",
      },
    },
    craft: {
      title: "The Brass Deg & Slow Khoya Reduction",
      description:
        "Milk is condensed over slow wood embers in heavy brass vessels with continuous figure-eight paddle movements, ensuring velvety caramelization without scorching.",
      cookware: "Heavy brass deg cauldrons, carved wooden stamps, marble cooling slabs",
    },
    tags: ["ANCIENT HALWAI", "LAL PEDA", "BUFFALO KHOYA", "TEMPLE PRASAD"],
  },
  {
    id: "golgappe",
    slug: "golgappe",
    number: "04",
    name: "Golgappe",
    devanagariName: "बनारसी गोलगप्पे व पानी बताशे",
    tagline: "Five Flavors of Sacred Water",
    category: "Street Elixir",
    timing: "3:00 PM – 9:30 PM",
    origin: "Luxa Road & Godowlia",
    shortDescription:
      "Paper-thin semolina spheres filled with boiled white peas, dunked into five custom water pots brewed with mint, asafoetida, and dry mango.",
    longDescription:
      "In Kashi, golgappe (locally known as paani batashas) are served not as an assembly-line snack, but as an orchestrated progression of temperatures and herbs. Crisp spheres of hand-rolled suji crack open to receive steaming spiced matar (white peas), before being immersed into earthenware urns containing five distinct herbal infusions: pungent heeng, cooling mint coriander, fiery black pepper, sweet tamarind saunth, and tart amchur.",
    mediaDir: "/kashi-rasoi/food/golgappe",
    image: "/kashi-rasoi/food/golgappe/master-card.jpg",
    placeholders: {
      hero: {
        title: "Five-Herb Golgappe Presentation",
        aspect: "16/10",
        fileName: "hero.jpg",
      },
      supporting1: {
        title: "Earthenware Herb Water Urns",
        aspect: "4/3",
        fileName: "detail-urns.jpg",
      },
      supporting2: {
        title: "Crisp Suji Shatter & Matar",
        aspect: "4/3",
        fileName: "detail-filling.jpg",
      },
      preparation: {
        title: "Hand-Rolling & Flash Frying Spheres",
        aspect: "16/9",
        fileName: "preparation-frying.jpg",
      },
    },
    craft: {
      title: "The Earthen Matka & Five Brews",
      description:
        "Waters are steeped inside porous terracotta vessels lined with fresh mint leaves and river ice, allowing minerals to bind naturally with roasted spices.",
      cookware: "Terracotta matka urns, brass strainers, dried sal leaf bowls",
    },
    tags: ["FIVE WATERS", "EARTHEN URNS", "HEENG INFUSION", "CRISP SUJI"],
  },
  {
    id: "banarasi-paan",
    slug: "banarasi-paan",
    number: "05",
    name: "Banarasi Paan",
    devanagariName: "शाही बनारसी मगही पान",
    tagline: "The Royal Concluding Note of the Holy City",
    category: "Culinary Elegance",
    timing: "10:00 AM – Midnight",
    origin: "Vishwanath Gali, Godowlia & Chowk",
    shortDescription:
      "Delicate, tender Maghai betel leaf folded with gulkand, kattha, sweet fennel, menthol crystals, and draped in pure edible silver vark.",
    longDescription:
      "In the cultural ethos of Banaras, Paan is far more than an after-meal palate cleanser — it is a sophisticated performing art, a symbol of royal court etiquette, and a gesture of supreme hospitality. The sacred Maghai leaf, grown in sheltered betel gardens and harvested tender, is celebrated for having zero fibrous ribs; it melts upon the tongue without requiring mastication. The paan-wala operates with the precision of a master jeweler: smearing the leaf with subtle slaked lime and boiled acacia kattha, sprinkling toasted sweet fennel, fragrant sun-cooked gulkand (Damask rose petal preserve), crushed betel nut, warming cardamom seeds, and cooling menthol crystals.",
    mediaDir: "/kashi-rasoi/food/banarasi-paan",
    image: "/kashi-rasoi/food/banarasi-paan/master-card.jpg",
    placeholders: {
      hero: {
        title: "Shahi Maghai Paan Gilouri",
        aspect: "16/10",
        fileName: "hero.jpg",
      },
      supporting1: {
        title: "Silver Paandan & Ingredients",
        aspect: "4/3",
        fileName: "detail-paandan.jpg",
      },
      supporting2: {
        title: "Tissue-Thin Silver Vark Sheen",
        aspect: "4/3",
        fileName: "detail-vark.jpg",
      },
      preparation: {
        title: "The Precision Gilouri Fold",
        aspect: "16/9",
        fileName: "preparation-folding.jpg",
      },
    },
    craft: {
      title: "The Art of the Gilouri Fold",
      description:
        "The betel leaf is washed in cold water, destemmed with silver shears, and folded into an airtight geometric triangle pinned with an aromatic clove, ensuring the fragrant juices bloom only upon the first bite.",
      cookware: "Silver paandan spice box, copper water bowls, fine horn spatulas",
    },
    tags: ["ROYAL HERITAGE", "MAGHAI LEAF", "SILVER VARK", "POETIC TRADITION"],
  },
  {
    id: "malaiyo",
    slug: "malaiyo",
    number: "06",
    name: "Malaiyo",
    devanagariName: "मखमली मलइयो",
    tagline: "The Dew-Kissed Winter Cloud of Chaukhamba",
    category: "Winter Ephemera",
    timing: "6:00 AM – 10:00 AM (Nov to Feb)",
    origin: "Chaukhamba & Gopal Mandir Gali",
    shortDescription:
      "Cloud-like raw milk foam aerated under the starlit winter sky to absorb the morning dew, flavored with saffron, cardamom, and pistachio slivers.",
    longDescription:
      "Makhmali Malaiyo is perhaps the most ethereal dessert in the world — an ephemeral delicacy that exists only during the crisp winter months from November to February. Large cauldrons of raw whole milk are boiled until dense, then placed on open rooftop terraces overnight under the cold, star-filled Banarasi sky. The ambient winter dew (os) and chilly river breeze initiate a unique micro-aeration. Before sunrise, sweetmakers vigorously churn the chilled milk with long wooden beaters until a miraculous, golden-yellow cloud of foam rises to the brim.",
    mediaDir: "/kashi-rasoi/food/malaiyo",
    image: "/kashi-rasoi/food/malaiyo/master-card.jpg",
    placeholders: {
      hero: {
        title: "Saffron Dew-Whipped Malaiyo Cloud",
        aspect: "16/10",
        fileName: "hero.jpg",
      },
      supporting1: {
        title: "Porous Earthen Kulhad Vessel",
        aspect: "4/3",
        fileName: "detail-kulhad.jpg",
      },
      supporting2: {
        title: "Pistachio & Gold Foil Dusting",
        aspect: "4/3",
        fileName: "detail-garnish.jpg",
      },
      preparation: {
        title: "Pre-Dawn Rooftop Dew Aeration",
        aspect: "16/9",
        fileName: "preparation-dew.jpg",
      },
    },
    craft: {
      title: "The Pre-Dawn Celestial Aeration",
      description:
        "Only the unique winter humidity and temperature along the Ganga allows the milk foam to stabilize without artificial setting agents. If sunrays hit the cauldrons, the delicate foam collapses instantly back into milk.",
      cookware: "Open-air brass cauldrons, willow-branch whisks, terracotta kulhads",
    },
    tags: ["WINTER EXCLUSIVE", "DEW AERATED", "SAFFRON FOAM", "EPHEMERAL ART"],
  },
  {
    id: "chai-toast",
    slug: "chai-toast",
    number: "07",
    name: "Chai & Toast",
    devanagariName: "बनारसी कुल्हड़ चाय व मक्खन टोस्ट",
    tagline: "The Philosopher's Dawn at the River Ghats",
    category: "Ghatside Conversation",
    timing: "5:00 AM – Midnight",
    origin: "Assi Ghat & Dashashwamedh Ghat",
    shortDescription:
      "Slow-boiled ginger cardamom tea poured into smoking clay cups, served alongside wood-charred thick-cut toast drenched in white makkhan.",
    longDescription:
      "Across every ghat and alleyway of Kashi, dawn begins with the rhythmic clink of brass saucepans. Strong Assam tea leaves, crushed fresh ginger, green cardamom, and rich buffalo milk simmer endlessly over glowing charcoal. It is paired with rustic hearth-toasted bread slathered with freshly churned unsalted white butter (safed makkhan) and dusted with sugar crystals. Here philosophers, poets, scholars, and pilgrims gather to debate life over scalding sips.",
    mediaDir: "/kashi-rasoi/food/chai-toast",
    image: "/kashi-rasoi/food/chai-toast/master-card.jpg",
    placeholders: {
      hero: {
        title: "Steaming Ghatside Chai & Toast",
        aspect: "16/10",
        fileName: "hero.jpg",
      },
      supporting1: {
        title: "Churned Safed Makkhan On Hearth Toast",
        aspect: "4/3",
        fileName: "detail-toast.jpg",
      },
      supporting2: {
        title: "Single-Fire Terracotta Kulhad Smoke",
        aspect: "4/3",
        fileName: "detail-kulhad.jpg",
      },
      preparation: {
        title: "Coal-Fired Brass Degchi Simmer",
        aspect: "16/9",
        fileName: "preparation-degchi.jpg",
      },
    },
    craft: {
      title: "The Charcoal Degchi & White Makkhan Churn",
      description:
        "Chai is reduced slowly over active coal braziers, concentrating milk sugars and releasing root ginger heat, served with hand-churned white cream butter toast.",
      cookware: "Seasoned brass tea degchi, wire bread rack over glowing coals, terracotta cups",
    },
    tags: ["CHARCOAL SIMMER", "SAFED MAKKHAN", "CLAY KULHAD", "GHAT CONVERSATIONS"],
  },
  {
    id: "banarasi-lassi",
    slug: "banarasi-lassi",
    number: "08",
    name: "Banarasi Lassi",
    devanagariName: "मलाईदार कुल्हड़ लस्सी",
    tagline: "Churned Velvet in Unbaked Clay",
    category: "Sacred Sustenance",
    timing: "8:00 AM – 11:00 PM",
    origin: "Chowk, Bangali Tola & Lanka",
    shortDescription:
      "Hand-churned buffalo curd served in frosted clay kulhads, crowned with a thick golden slab of malai, saffron rabdi, and dried rose petals.",
    longDescription:
      "A glass of lassi in Banaras bears little resemblance to ordinary commercial smoothies. Here, rich, unpasteurized buffalo milk is boiled in wide cauldrons until deeply reduced, inoculated with heirloom curd culture, and set overnight inside unglazed clay pots. Come morning, the curd is churned entirely by hand using a ribbed wooden mathani (churner) in rhythmic cadence, blending crystallized sugar into thick, silky velvet without adding a single drop of water. It is poured into porous kulhads that naturally chill the yogurt, topped with a dense golden slab of skimmed malai, saffron rabdi, and rose petals.",
    mediaDir: "/kashi-rasoi/food/banarasi-lassi",
    image: "/kashi-rasoi/food/banarasi-lassi/master-card.jpg",
    placeholders: {
      hero: {
        title: "Dense Velvet Lassi Kulhad",
        aspect: "16/10",
        fileName: "hero.jpg",
      },
      supporting1: {
        title: "Hand-Carved Wooden Mathani Churn",
        aspect: "4/3",
        fileName: "detail-mathani.jpg",
      },
      supporting2: {
        title: "Golden Malai Slab & Rabdi Ladle",
        aspect: "4/3",
        fileName: "detail-malai.jpg",
      },
      preparation: {
        title: "Traditional Churning Cadence",
        aspect: "16/9",
        fileName: "preparation-churn.jpg",
      },
    },
    craft: {
      title: "The Wooden Mathani & Natural Clay Evaporation",
      description:
        "No electrical blenders are ever permitted. Hand-churning maintains the delicate fat globules, creating a luxurious mouthfeel eaten with flat wooden paddles.",
      cookware: "Carved wooden mathani, brass churner pot, chilled terracotta kulhads",
    },
    tags: ["CLAY KULHAD", "HAND CHURNED", "RABDI MALAI", "SUMMER REFUGE"],
  },
];

/** Lookup helpers */
export function getKashiRasoiFood(idOrSlug: string): KashiRasoiFood | undefined {
  return KASHI_RASOI_FOODS.find(
    (item) => item.id === idOrSlug || item.slug === idOrSlug
  );
}

export function getAdjacentFoods(idOrSlug: string): {
  prev: KashiRasoiFood;
  next: KashiRasoiFood;
} {
  const index = KASHI_RASOI_FOODS.findIndex(
    (item) => item.id === idOrSlug || item.slug === idOrSlug
  );
  const safeIndex = index === -1 ? 0 : index;
  const prevIndex = (safeIndex - 1 + KASHI_RASOI_FOODS.length) % KASHI_RASOI_FOODS.length;
  const nextIndex = (safeIndex + 1) % KASHI_RASOI_FOODS.length;

  return {
    prev: KASHI_RASOI_FOODS[prevIndex],
    next: KASHI_RASOI_FOODS[nextIndex],
  };
}

/** Backward compatibility alias */
export const kashiRasoiFoods = KASHI_RASOI_FOODS;
export type RasoiDish = KashiRasoiFood;
export const KASHI_RASOI_DISHES = KASHI_RASOI_FOODS;
