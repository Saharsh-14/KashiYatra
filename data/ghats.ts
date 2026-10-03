import type { Ghat } from "@/types/content";

/**
 * Steps to Eternity — the eight finalized ghats.
 *
 * The selection, order and assigned photographs are locked (memory.md §12–13,
 * rules.md §12). Do not add, remove, reorder or substitute one.
 *
 * The taglines are the only editable part. They must stay atmospheric and must
 * not make historical or cultural claims (rules.md §16).
 */
export const ghats: readonly Ghat[] = [
  {
    id: "assi",
    slug: "assi-ghat",
    index: 1,
    name: "Assi Ghat",
    devanagariName: "अस्सी घाट",
    tagline: "Where the city thins out and the river takes over.",
    description:
      "The southernmost threshold of Varanasi where the sacred River Assi meets the Ganga. Here, pilgrims greet the rising dawn under chanting priests, morning ragas, and the eternal morning sun.",
    significance: "Southern Threshold & Morning Aarti",
    timeOfDay: "Subah-e-Banaras · Dawn",
    accentColor: "#D4AF37",
    image: "/images/ghats/assi.jpg",
    imageAlt: "Assi Ghat, with boats moored along the water at the river's edge.",
  },
  {
    id: "dashashwamedh",
    slug: "dashashwamedh-ghat",
    index: 2,
    name: "Dashashwamedh Ghat",
    devanagariName: "दशाश्वमेध घाट",
    tagline: "The busiest steps, and the loudest evening.",
    description:
      "The ceremonial heart of Kashi. According to sacred lore, Lord Brahma performed the ten-horse sacrifice here. At dusk, multi-tiered brass lamps weave blazing patterns across the river in the Ganga Aarti.",
    significance: "Grand Ritual Epicenter",
    timeOfDay: "Sandhya Aarti · Twilight",
    accentColor: "#E07A5F",
    image: "/images/ghats/dashashwamedh.jpg",
    imageAlt: "Dashashwamedh Ghat, crowded with people along the steps.",
  },
  {
    id: "manikarnika",
    slug: "manikarnika-ghat",
    index: 3,
    name: "Manikarnika Ghat",
    devanagariName: "मणिकर्णिका घाट",
    tagline: "The steps that have never stopped working.",
    description:
      "The supreme cremation ground where the sacred fire has burned unbroken for millenniums. In Kashi, death is neither feared nor hidden — it is celebrated as moksha, eternal liberation into Shiva's light.",
    significance: "The Realm of Mahashamshana",
    timeOfDay: "Sacred Pyres · Eternal",
    accentColor: "#F4A261",
    image: "/images/ghats/manikarnika.jpg",
    imageAlt: "Manikarnika Ghat, seen from the river.",
  },
  {
    id: "kedar",
    slug: "kedar-ghat",
    index: 4,
    name: "Kedar Ghat",
    devanagariName: "केदार घाट",
    tagline: "A quiet corner that has been quietly important for a long time.",
    description:
      "Distinguished by red and white vertical stripes rising from the water, this sanctuary mirrors the distant Kedarnath shrine along the riverbanks, carrying deep reverence from southern pilgrims.",
    significance: "Himalayan Sanctuary by the Ganga",
    timeOfDay: "Mid-Morning · Calm Waters",
    accentColor: "#C94A4A",
    image: "/images/ghats/kedar.jpg",
    imageAlt: "Kedar Ghat, its striped steps rising from the water.",
  },
  {
    id: "harishchandra",
    slug: "harishchandra-ghat",
    index: 5,
    name: "Harishchandra Ghat",
    devanagariName: "हरिश्चन्द्र घाट",
    tagline: "One of the two steps where the work never pauses.",
    description:
      "The older and quieter of Kashi's two cremation grounds, bearing the name of King Harishchandra who served here as a keeper of truth. An intimate, solemn space of absolute clarity and peace.",
    significance: "Legacy of Truth & Release",
    timeOfDay: "Dusk · Sacred Embers",
    accentColor: "#B59A63",
    image: "/images/ghats/harishchandra.jpg",
    imageAlt: "Harishchandra Ghat, with the riverbank and buildings behind it.",
  },
  {
    id: "guleria",
    slug: "guleria-ghat",
    index: 6,
    name: "Guleria Ghat",
    devanagariName: "गुलेरिया घाट",
    tagline: "A small landing with a very wide view.",
    description:
      "An unhurried stone terrace carved into the riverbend, restored with classical sandstone masonry. Its open pavilion commands a panoramic sweep across the crescent bend of the Ganga.",
    significance: "Panoramic Crescent Bend",
    timeOfDay: "Golden Afternoon · Solitude",
    accentColor: "#AEB8B3",
    image: "/images/ghats/guleria.jpg",
    imageAlt: "Guleria Ghat, a narrow landing on the river with boats alongside.",
  },
  {
    id: "chet-singh",
    slug: "chet-singh-ghat",
    index: 7,
    name: "Chet Singh Ghat",
    devanagariName: "चेत सिंह घाट",
    tagline: "Stone, water, and an afternoon that does not hurry.",
    description:
      "A fortified 18th-century palace fortress towering directly over the river. Its sandstone bastions and minarets bear historic battle scars from the 1781 resistance against British rule.",
    significance: "Sandstone Fortress of Resistance",
    timeOfDay: "Late Afternoon · Ochre Light",
    accentColor: "#C89D7C",
    image: "/images/ghats/chet-singh.jpg",
    imageAlt: "Chet Singh Ghat, its fort wall rising beside the river.",
  },
  {
    id: "namo",
    slug: "namo-ghat",
    index: 8,
    name: "Namo Ghat",
    devanagariName: "नमो घाट",
    tagline: "The newest steps look the same way as the oldest.",
    description:
      "The contemporary northern gateway to Varanasi, marked by colossal sculpted bronze hands folded in eternal pranam. Here, ancient reverence meets public space with uninterrupted horizons.",
    significance: "Northern Gateway & Eternal Greeting",
    timeOfDay: "Open Horizon · Pranam",
    accentColor: "#8FA3A0",
    image: "/images/ghats/namo.jpg",
    imageAlt: "Namo Ghat, a broad sweep of steps meeting the river.",
  },
];
