export interface ImagePlaceholder {
  code: string;
  label: string;
  aspect: string; // e.g. "16:10" or "4:3"
  src?: string;
}

export interface TimingInfo {
  winter?: string;
  summer?: string;
  duration?: string;
  location?: string;
  programme?: string;
  note?: string;
}

export interface VisitorInfoBox {
  heading: string;
  schedule?: string;
  timing?: string;
  closed?: string;
  location?: string;
  duration?: string;
  rates?: { label: string; price: string }[];
  note?: string;
}

export interface EditorialSection {
  title: string;
  subtitle?: string;
  content: string;
  timing?: TimingInfo;
  visitorInfo?: VisitorInfoBox[];
}

export interface UnfoldedPosterDetail {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  tagline: string;
  location: string;
  accentColor: string;
  intro: string;
  storyTitle?: string;
  story: string;
  storyPosition?: "before-sections" | "after-sections";
  highlights: string[];
  sections?: EditorialSection[];
  heroPlaceholder: ImagePlaceholder;
  supportingPlaceholders: ImagePlaceholder[];
}

export const unfoldedPosterDetails: Record<string, UnfoldedPosterDetail> = {
  "shaam-e-banaras": {
    id: "shaam-e-banaras",
    index: "01",
    title: "SHAAM-E-BANARAS",
    tagline: "The Ganga glows after dusk.",
    location: "Dashashwamedh to Assi Ghat",
    accentColor: "#985F49",
    intro:
      "As daylight fades over the Ganga, the ghats of Varanasi transform into a landscape of lamps, music, prayer and reflection. Boats begin to fill the river, temples glow along the waterfront, and the evening unfolds around one of Kashi's most enduring traditions — the Ganga Aarti.",
    story:
      "Shaam-e-Banaras is more than a sunset view. It captures the rhythm of everyday Kashi — pilgrims arriving at the river, residents performing their prayers, boatmen crossing the water and thousands of lamps reflecting on the Ganga. The transition from daylight to darkness reveals a city where spiritual practice and ordinary life continue side by side.",
    sections: [
      {
        title: "THE EVENING RITUAL",
        subtitle: "THE EVENING GANGA AARTI",
        content:
          "The grand evening Ganga Aarti is performed daily at Dashashwamedh Ghat, one of Varanasi's most important riverfront ghats. Priests perform synchronized rituals with brass lamps, incense, conch shells, bells and Sanskrit chants as devotees gather along the steps and on boats across the Ganga.",
        timing: {
          winter: "5:45–6:00 PM",
          summer: "6:45–7:00 PM",
          duration: "About 45 minutes",
          location: "Dashashwamedh Ghat",
          note: "The ceremony begins around sunset, so the exact time changes through the year.",
        },
      },
      {
        title: "THE MORNING COUNTERPART",
        subtitle: "SUBAH-E-BANARAS",
        content:
          "Before the city wakes, Assi Ghat offers a quieter expression of the same spiritual relationship with the Ganga. Known as Subah-e-Banaras, the dawn programme combines Vedic chanting, morning Ganga Aarti, classical music and yoga as the first light reaches the river.",
        timing: {
          winter: "5:30 AM",
          summer: "5:00 AM",
          location: "Assi Ghat",
          programme: "Aarti • Music • Yoga",
          note: "The programme begins before sunrise and its timing shifts with the season.",
        },
      },
    ],
    highlights: [
      "Dashashwamedh Ghat — Main evening Ganga Aarti",
      "Assi Ghat — Subah-e-Banaras at dawn",
      "Ganga Aarti — Daily ritual of lamps, chants and offerings",
      "Sunset Boat Ride — View the illuminated ghats from the river",
      "Namo Ghat — Contemporary riverfront experience",
      "Ganga at Dusk — Ghats illuminated against the evening sky",
    ],
    heroPlaceholder: {
      code: "SHAAM_HERO",
      label: "Evening Ganga Aarti",
      aspect: "16:10",
      src: "/images/details/shaam/shaam-aarti-stage.png",
    },
    supportingPlaceholders: [
      {
        code: "SHAAM_IMAGE_02",
        label: "Aarti with Brass Fire Lamp",
        aspect: "4:3",
        src: "/images/details/shaam/shaam-priest-lamp.jpg",
      },
      {
        code: "SHAAM_IMAGE_03",
        label: "Ghat Aarti from the River",
        aspect: "4:3",
        src: "/images/details/shaam/shaam-river-night.png",
      },
      {
        code: "SHAAM_IMAGE_04",
        label: "Ganga at Dusk with Boats",
        aspect: "4:3",
        src: "/images/details/shaam/shaam-dusk-boats.jpg",
      },
    ],
  },

  sarnath: {
    id: "sarnath",
    index: "02",
    title: "SARNATH",
    tagline: "Wisdom found its voice.",
    location: "Isipatana • Deer Park",
    accentColor: "#77866B",
    intro:
      "Just beyond Varanasi lies Sarnath, one of Buddhism's most sacred sites. It was here, according to Buddhist tradition, that Gautama Buddha delivered his first sermon after attaining enlightenment, setting the teachings of the Dharma into motion.",
    storyTitle: "HISTORY & SIGNIFICANCE",
    story:
      "Sarnath is traditionally identified as the place where Buddha gave his first teaching to the five ascetics who became his earliest disciples. Emperor Ashoka later established monuments here, transforming Sarnath into an important Buddhist centre.\n\nThe Dhamek Stupa dominates the archaeological landscape, while the excavated remains reveal monasteries, stupas and structures built and rebuilt over centuries. The site represents one of the most important chapters in the spread of Buddhism across Asia.",
    storyPosition: "before-sections",
    sections: [
      {
        title: "THE DHAMEK STUPA",
        subtitle: "DHAMEK STUPA",
        content:
          "Rising from the archaeological grounds, the Dhamek Stupa is Sarnath's most recognisable monument. Its massive cylindrical form preserves intricate stone carving and marks the sacred landscape associated with Buddha's first sermon.",
      },
      {
        title: "ASHOKA & THE LION CAPITAL",
        subtitle: "THE LION CAPITAL",
        content:
          "Sarnath is also closely associated with the Lion Capital of Ashoka, the celebrated Mauryan sculpture discovered here. Its four lions standing back-to-back became the basis of India's State Emblem. The original is preserved inside the Sarnath Archaeological Museum.",
      },
      {
        title: "VISITOR INFORMATION",
        subtitle: "VISITOR INFORMATION",
        content: "",
        visitorInfo: [
          {
            heading: "ARCHAEOLOGICAL SITE",
            schedule: "Sunrise – Sunset",
            rates: [
              { label: "Indian / SAARC / BIMSTEC", price: "₹25" },
              { label: "Foreign visitors", price: "₹300" },
              { label: "Children below 15", price: "Free" },
            ],
            note: "The Archaeological Survey of India lists the monument complex as open from sunrise to sunset and gives these admission rates.",
          },
          {
            heading: "SARNATH ARCHAEOLOGICAL MUSEUM",
            timing: "9:00 AM – 5:00 PM",
            closed: "Friday",
            rates: [
              { label: "Entry", price: "₹5" },
              { label: "Children below 15", price: "Free" },
            ],
            note: "The museum houses the original Lion Capital along with sculptures and archaeological discoveries from Sarnath. Its current visitor information lists 9 AM–5 PM and a ₹5 entry fee.",
          },
        ],
      },
    ],
    highlights: [
      "Dhamek Stupa — Monument associated with Buddha's first sermon",
      "Archaeological Ruins — Remains of ancient monasteries and stupas",
      "Ashoka Pillar — Mauryan monument associated with Sarnath",
      "Lion Capital — Original preserved in the Archaeological Museum",
      "Sarnath Museum — Buddhist sculptures and archaeological treasures",
      "Mulagandha Kuti Vihara — Important modern Buddhist temple",
    ],
    heroPlaceholder: {
      code: "SARNATH_HERO",
      label: "Dhamek Stupa at Sarnath",
      aspect: "16:10",
      src: "/images/details/sarnath/sarnath-dhamek-stupa.jpg",
    },
    supportingPlaceholders: [
      {
        code: "SARNATH_IMAGE_02",
        label: "Mulagandha Kuti Vihara Avenue",
        aspect: "4:3",
        src: "/images/details/sarnath/sarnath-temple-avenue.jpg",
      },
      {
        code: "SARNATH_IMAGE_03",
        label: "Ashoka Pillar Lion Capital",
        aspect: "4:3",
        src: "/images/details/sarnath/sarnath-ashoka-pillar.png",
      },
      {
        code: "SARNATH_IMAGE_04",
        label: "Golden Buddha Shrine Interior",
        aspect: "4:3",
        src: "/images/details/sarnath/sarnath-buddha-shrine.jpg",
      },
    ],
  },

  ramnagar: {
    id: "ramnagar",
    index: "03",
    title: "RAMNAGAR FORT",
    tagline: "History meets its legacy.",
    location: "Eastern Bank of the Ganga",
    accentColor: "#B59A63",
    intro:
      "Standing on the eastern bank of the Ganga, opposite the historic ghats of Varanasi, Ramnagar Fort is the ancestral seat of the Kashi Naresh. Built in the 18th century by Maharaja Balwant Singh, the sandstone palace combines royal architecture with the living traditions of Kashi.",
    storyTitle: "ROYAL HERITAGE",
    story:
      "Ramnagar Fort remains closely associated with the royal family of Banaras. Its museum preserves objects from the royal household, including vintage cars, royal palanquins, ceremonial clothing, weapons, manuscripts, furniture and portraits. Together, these collections offer a glimpse into the courtly life and traditions of the former kingdom of Banaras.",
    storyPosition: "before-sections",
    sections: [
      {
        title: "THE ASTRONOMICAL CLOCK",
        subtitle: "THE CLOCK OF TIME",
        content:
          "Among the fort's most unusual treasures is its astronomical clock. The historic mechanism displays more than ordinary timekeeping, incorporating information relating to the day, month, year and astronomical positions. It remains one of the museum's most distinctive exhibits.",
      },
      {
        title: "RAMNAGAR RAMLILA",
        subtitle: "A MONTH OF RAMLILA",
        content:
          "Every year, Ramnagar becomes the setting for a celebrated month-long Ramlila tradition. Episodes from the Ramayana are enacted across different locations, transforming the town itself into a vast theatrical landscape. The tradition is deeply connected with the Kashi royal family and remains one of the cultural highlights of the region.",
      },
      {
        title: "VISITOR INFORMATION",
        subtitle: "VISITOR INFORMATION",
        content: "",
        visitorInfo: [
          {
            heading: "MUSEUM & PALACE",
            timing: "9:30 AM – 5:30 PM",
            location: "Ramnagar, eastern bank of the Ganga",
            duration: "1–2 hours suggested",
            rates: [
              { label: "Museum entry (Indian)", price: "approx. ₹20" },
              { label: "Museum entry (Foreign)", price: "approx. ₹150" },
            ],
            note: "The official Kashi portal currently lists the museum timing as 9:30 AM–5:30 PM. Published tourism sources have reported variable seasonal timings and fees; ticket details are approximate.",
          },
        ],
      },
    ],
    highlights: [
      "Kashi Naresh Palace — Historic royal residence",
      "Royal Museum — Cars, palanquins, costumes and royal objects",
      "Astronomical Clock — One of the museum's signature exhibits",
      "Ramnagar Ramlila — Month-long theatrical tradition",
      "Ganga Riverside — Views across the river toward Varanasi",
      "Chunar Sandstone Architecture — Distinctive palace and fort structure",
    ],
    heroPlaceholder: {
      code: "RAMNAGAR_HERO",
      label: "Ramnagar Fort Riverfront",
      aspect: "16:10",
      src: "/images/details/ramnagar/ramnagar-fort-riverfront.jpg",
    },
    supportingPlaceholders: [
      {
        code: "RAMNAGAR_IMAGE_02",
        label: "Royal Entrance Gate",
        aspect: "4:3",
        src: "/images/details/ramnagar/ramnagar-royal-gate.png",
      },
      {
        code: "RAMNAGAR_IMAGE_03",
        label: "Sandstone Palace Facade",
        aspect: "4:3",
        src: "/images/details/ramnagar/ramnagar-palace-facade.png",
      },
      {
        code: "RAMNAGAR_IMAGE_04",
        label: "Inner Palace Courtyard View",
        aspect: "4:3",
        src: "/images/details/ramnagar/ramnagar-courtyard-view.png",
      },
    ],
  },

  godowlia: {
    id: "godowlia",
    index: "04",
    title: "GODOWLIA MARKET",
    tagline: "A living pulse of Kashi.",
    location: "Old City Chowk • Godowlia Crossing",
    accentColor: "#324A64",
    intro:
      "Standing at one of the busiest crossroads of old Varanasi, Godowlia Market is a gateway into the historic heart of Kashi. The streets around it lead towards Dashashwamedh Ghat, Kashi Vishwanath Temple and the maze of old-city lanes, bringing together pilgrims, locals, artisans and visitors every day.",
    storyTitle: "THE MARKET",
    story:
      "Godowlia is known for its crowded lanes, colourful shopfronts and constant movement. From Banarasi silk sarees and jewellery to religious objects, brassware, handicrafts and everyday goods, the market offers a glimpse into the commercial traditions that have shaped life in the old city.",
    storyPosition: "before-sections",
    sections: [
      {
        title: "BANARASI CRAFT",
        subtitle: "THE ART OF THE SAREE",
        content:
          "The market is closely associated with Banarasi textiles, celebrated for their intricate weaving, silk fabric and elaborate patterns. Sarees featuring zari work, floral motifs and traditional designs remain among the most sought-after pieces, carrying generations of craftsmanship from Varanasi's weaving communities.",
      },
      {
        title: "THE OLD CITY",
        subtitle: "LANES THAT LEAD TO THE GANGA",
        content:
          "From Godowlia, narrow lanes stretch towards some of Kashi's most famous landmarks. Vishwanath Gali, Kachori Gali and the routes towards Dashashwamedh Ghat reveal a city where temples, shops, homes, food stalls and centuries-old traditions exist side by side.",
      },
      {
        title: "VISITOR INFORMATION",
        subtitle: "VISITOR INFORMATION",
        content: "",
        visitorInfo: [
          {
            heading: "MARKET GUIDELINES",
            timing: "Generally active from morning until late evening",
            schedule: "Morning for shopping / Evening for atmosphere",
            location: "Godowlia, Old Varanasi",
            duration: "1–2 hours suggested",
            rates: [{ label: "Entry", price: "Free" }],
            note: "Best explored on foot. Rickshaws connect to Godowlia Chowk; internal gali routes leading to the ghats and temples are pedestrian-only.",
          },
        ],
      },
    ],
    highlights: [
      "Banarasi Sarees — Traditional silk textiles known for intricate zari and weaving.",
      "Vishwanath Gali — Historic lane leading towards Kashi Vishwanath Temple.",
      "Dashashwamedh Ghat — One of the city's principal ghats, nearby.",
      "Street Food — Kachori, jalebi, lassi and other local favourites.",
      "Old-City Lanes — Dense streets filled with shops, temples and everyday life.",
      "Local Handicrafts — Brassware, religious objects, jewellery and traditional souvenirs.",
    ],
    heroPlaceholder: {
      code: "GODOWLIA_HERO",
      label: "Godowlia Chowk Crossing",
      aspect: "16:10",
      src: "/images/details/godowlia/godowlia-chowk-crossing.jpg",
    },
    supportingPlaceholders: [
      {
        code: "GODOWLIA_IMAGE_02",
        label: "Godowlia Market Street",
        aspect: "4:3",
        src: "/images/details/godowlia/godowlia-market-day.png",
      },
      {
        code: "GODOWLIA_IMAGE_03",
        label: "Illuminated Night Bazaar",
        aspect: "4:3",
        src: "/images/details/godowlia/godowlia-night-bazaar.jpg",
      },
      {
        code: "GODOWLIA_IMAGE_04",
        label: "Handwoven Banarasi Silk Saree",
        aspect: "4:3",
        src: "/images/details/godowlia/banarasi-silk-saree.png",
      },
    ],
  },

  devdari: {
    id: "devdari",
    index: "05",
    title: "DEVDARI FALLS",
    tagline: "Nature's quiet escape.",
    location: "Chandraprabha Wildlife Sanctuary, Chandauli",
    accentColor: "#A0650B",
    intro:
      "Located in the Chandraprabha Wildlife Sanctuary in Chandauli district, Devdari Falls offers a quieter and greener side of the region beyond the crowded streets of Varanasi. Surrounded by forests, rocky cliffs and flowing streams, the waterfall becomes especially dramatic during the monsoon.",
    storyTitle: "THE WATERFALL",
    story:
      "Devdari is one of the prominent waterfalls of the Chandraprabha landscape. Water cascades down a rocky gorge into a natural pool below, with dense vegetation surrounding the falls. The changing flow of water and light gives the landscape a different character through the seasons.",
    storyPosition: "before-sections",
    sections: [
      {
        title: "CHANDRAPRABHA WILDLIFE SANCTUARY",
        subtitle: "THE WILDERNESS BEYOND KASHI",
        content:
          "The waterfall lies within the Chandraprabha Wildlife Sanctuary, a forested region of eastern Uttar Pradesh known for its rocky terrain, streams and diverse bird and animal life. Nearby Rajdari Falls forms another major natural attraction within the same landscape.",
      },
      {
        title: "MONSOON ESCAPE",
        subtitle: "WHEN DEVDARI COMES ALIVE",
        content:
          "The monsoon transforms Devdari into its most dramatic form, with heavier water flow and lush green surroundings. The post-monsoon months offer clearer trails and pleasant weather, making the area suited for a short nature escape from the city.",
      },
      {
        title: "VISITOR INFORMATION",
        subtitle: "VISITOR INFORMATION",
        content: "",
        visitorInfo: [
          {
            heading: "SANCTUARY & FALLS GUIDELINES",
            location: "Chandraprabha Wildlife Sanctuary, Chandauli",
            schedule: "July – February (Best time)",
            duration: "2–3 hours suggested",
            timing: "Waterfalls, nature & photography",
            rates: [
              {
                label: "Entry",
                price: "Local forest/sanctuary charges may apply",
              },
            ],
            note: "Peak waterfall flow occurs during the monsoon season. Travel by private car or taxi is advised as public transit into the sanctuary is limited.",
          },
        ],
      },
    ],
    highlights: [
      "Devdari Falls — A scenic waterfall surrounded by forest and rocky terrain.",
      "Chandraprabha Sanctuary — Protected forest landscape supporting diverse wildlife.",
      "Rajdari Falls — Another major waterfall located nearby.",
      "Monsoon Landscape — Peak waterfall flow and lush green surroundings.",
      "Rocky Gorge — Natural formations shape the dramatic waterfall setting.",
      "Nature Escape — A peaceful alternative to the busy atmosphere of central Kashi.",
    ],
    heroPlaceholder: {
      code: "DEVDARI_HERO",
      label: "Devdari Tiered Cascade",
      aspect: "16:10",
      src: "/images/details/devdari/devdari-tiered-cascade.png",
    },
    supportingPlaceholders: [
      {
        code: "DEVDARI_IMAGE_02",
        label: "Forest Gorge Panorama",
        aspect: "4:3",
        src: "/images/details/devdari/devdari-gorge-panorama.png",
      },
      {
        code: "DEVDARI_IMAGE_03",
        label: "Waterfall Terrace Viewpoint",
        aspect: "4:3",
        src: "/images/details/devdari/devdari-falls-viewpoint.jpg",
      },
      {
        code: "DEVDARI_IMAGE_04",
        label: "Rocky Cliff Cascade",
        aspect: "4:3",
        src: "/images/details/devdari/devdari-cliff-cascade.png",
      },
    ],
  },

  bhu: {
    id: "bhu",
    index: "06",
    title: "BHU",
    subtitle: "BANARAS HINDU UNIVERSITY",
    tagline: "Knowledge lives here.",
    location: "Varanasi, Uttar Pradesh",
    accentColor: "#6B4972",
    intro:
      "Founded in 1916 by Pandit Madan Mohan Malaviya, Banaras Hindu University is one of India's most renowned universities and one of the defining institutions of Varanasi. Spread across a vast, tree-lined campus, BHU brings together education, research, medicine, culture, spirituality and student life in a setting unlike any other university in the country.",
    storyTitle: "THE CAMPUS",
    story:
      "BHU's main campus covers roughly 1,300 acres, making it one of India's largest residential university campuses. Its broad avenues, gardens, historic buildings, hostels, temples, libraries and academic institutes create an environment that feels more like a self-contained city than a conventional university.",
    storyPosition: "before-sections",
    sections: [
      {
        title: "MEDICINE & RESEARCH",
        subtitle: "HEALING, TEACHING & DISCOVERY",
        content:
          "The Institute of Medical Sciences, BHU is among the country's major centres for medical education, healthcare and research. Its associated Sir Sunder Lal Hospital provides advanced tertiary healthcare across numerous specialties, while the university's research ecosystem spans medicine, science, engineering, humanities and technology.",
      },
      {
        title: "A CENTRE OF CULTURE",
        subtitle: "WHERE KNOWLEDGE MEETS KASHI",
        content:
          "From the iconic New Vishwanath Temple and Bharat Kala Bhavan to its libraries, museums, academic institutes and student communities, BHU reflects the founding vision of bringing modern education into conversation with India's cultural and intellectual traditions. More than a university, it has become an enduring part of Kashi's identity.",
      },
      {
        title: "VISITOR INFORMATION",
        subtitle: "VISITOR INFORMATION",
        content: "",
        visitorInfo: [
          {
            heading: "CAMPUS & LANDMARKS",
            location: "Varanasi, Uttar Pradesh (approx. 1,300 acres)",
            timing: "New Vishwanath Temple: Early morning – evening",
            schedule: "Bharat Kala Bhavan: 10:30 AM – 4:30 PM (Mon–Sat)",
            rates: [
              { label: "New Vishwanath Temple", price: "Free" },
              { label: "Campus Entry", price: "Access varies by area" },
            ],
            note: "The New Vishwanath Temple (VT) and Bharat Kala Bhavan are the primary visitor destinations on campus. Best navigated by e-rickshaw or bicycle.",
          },
        ],
      },
    ],
    highlights: [
      "One of India's Largest University Campuses — A vast residential campus of approximately 1,300 acres at the heart of Kashi.",
      "Institute of Medical Sciences — A major centre for medical education, clinical care and research.",
      "Sir Sunder Lal Hospital — A leading tertiary-care teaching hospital serving patients from across the region.",
      "New Vishwanath Temple — The iconic white-marble temple rising from the centre of the university campus.",
      "Bharat Kala Bhavan — A significant museum housing paintings, sculptures, textiles and Indian art collections.",
      "Malaviya's Legacy — Founded by Pandit Madan Mohan Malaviya with a vision of combining modern education with India's cultural heritage.",
    ],
    heroPlaceholder: {
      code: "BHU_HERO",
      label: "BHU Singh Dwar Main Gate",
      aspect: "16:10",
      src: "/images/details/bhu/bhu-singh-dwar-gate.png",
    },
    supportingPlaceholders: [
      {
        code: "BHU_IMAGE_02",
        label: "BHU Campus Aerial Vista",
        aspect: "4:3",
        src: "/images/details/bhu/bhu-campus-aerial.png",
      },
      {
        code: "BHU_IMAGE_03",
        label: "New Vishwanath Temple (VT)",
        aspect: "4:3",
        src: "/images/details/bhu/bhu-new-vishwanath-temple.png",
      },
      {
        code: "BHU_IMAGE_04",
        label: "Department of Electrical Engineering",
        aspect: "4:3",
        src: "/images/details/bhu/bhu-engineering-heritage.png",
      },
    ],
  },

  swarved: {
    id: "swarved",
    index: "07",
    title: "SWARVED MAHAMANDIR",
    tagline: "A modern beacon of Sanatan thought.",
    location: "Umaraha, Varanasi",
    accentColor: "#135273",
    intro:
      "Located in Umaraha near Varanasi, Swarved Mahamandir is a monumental spiritual complex dedicated to meditation, self-realisation and the teachings of Swarved. Its grand architecture and serene surroundings create a striking contemporary landmark within Kashi's spiritual landscape.",
    storyTitle: "THE MAHAMANDIR",
    story:
      "The Mahamandir is centred around a vast meditation hall designed to accommodate thousands of practitioners. Its interiors feature intricate carvings and verses from the Swarved, creating an atmosphere focused on silence, contemplation and spiritual learning.",
    storyPosition: "before-sections",
    sections: [
      {
        title: "ARCHITECTURE",
        subtitle: "WHERE SCALE MEETS STILLNESS",
        content:
          "The temple's monumental structure combines detailed traditional craftsmanship with an imposing modern scale. Its symmetrical architecture, expansive halls and carefully designed surroundings make it one of the most visually distinctive spiritual spaces around Varanasi.",
      },
      {
        title: "VISITOR INFORMATION",
        subtitle: "VISITOR INFORMATION",
        content: "",
        visitorInfo: [
          {
            heading: "MEDITATION & TIMINGS",
            location: "Umaraha, Varanasi",
            timing: "Morning: 4:00 AM – 6:00 AM • Evening: 6:00 PM – 8:00 PM",
            duration: "Meditation, architecture & spiritual experience",
            rates: [{ label: "Entry", price: "Free" }],
            note: "Designed around silence and inner reflection. Visitors and seekers are welcome to participate in the scheduled morning and evening meditation sessions.",
          },
        ],
      },
    ],
    highlights: [
      "Grand Meditation Hall — A vast space dedicated to meditation.",
      "Swarved Teachings — Verses and philosophy form the spiritual foundation.",
      "Monumental Architecture — A striking contemporary interpretation of traditional design.",
      "Meditation & Aarti — Regular morning and evening spiritual programmes.",
      "Umaraha — Located away from the crowded centre of Varanasi.",
      "Peaceful Atmosphere — Designed around silence, contemplation and inner reflection.",
    ],
    heroPlaceholder: {
      code: "SWARVED_HERO",
      label: "Swarved Tiered Carved Facade",
      aspect: "16:10",
      src: "/images/details/swarved/swarved-tiered-facade.png",
    },
    supportingPlaceholders: [
      {
        code: "SWARVED_IMAGE_02",
        label: "Twilight Temple Plaza",
        aspect: "4:3",
        src: "/images/details/swarved/swarved-twilight-monument.png",
      },
      {
        code: "SWARVED_IMAGE_03",
        label: "Grand Arched Gateway",
        aspect: "4:3",
        src: "/images/details/swarved/swarved-arched-entrance.png",
      },
      {
        code: "SWARVED_IMAGE_04",
        label: "Temple Reflection Pond",
        aspect: "4:3",
        src: "/images/details/swarved/swarved-reflection-pond.png",
      },
    ],
  },

  "man-mandir": {
    id: "man-mandir",
    index: "08",
    title: "MAN MANDIR OBSERVATORY",
    tagline: "Where the skies met wisdom.",
    location: "Man Mandir Ghat, Varanasi",
    accentColor: "#A0402A",
    intro:
      "Standing above the Ganga near Dashashwamedh Ghat, Man Mandir Observatory is where the royal architecture of Kashi meets the science of astronomy. Built in the early 18th century by Maharaja Sawai Jai Singh II, it became one of his famous astronomical observatories across India.",
    storyTitle: "THE OBSERVATORY",
    story:
      "The observatory contains large masonry instruments designed to study the movement of the sun, stars and planets. Instruments such as the Samrat Yantra were used to measure time and celestial positions, turning architecture itself into a tool for astronomical observation.",
    storyPosition: "before-sections",
    sections: [
      {
        title: "HISTORY & ARCHITECTURE",
        subtitle: "ROYAL WALLS, CELESTIAL SCIENCE",
        content:
          "The observatory forms part of the historic Man Mandir complex overlooking the Ganga. Its unusual combination of palace architecture and scientific instruments reflects an era when astronomy, mathematics and architecture were closely connected.",
      },
      {
        title: "VISITOR INFORMATION",
        subtitle: "VISITOR INFORMATION",
        content: "",
        visitorInfo: [
          {
            heading: "OBSERVATORY GUIDELINES",
            location: "Man Mandir Ghat, Varanasi",
            timing: "9:00 AM – 5:00 PM",
            duration: "30–60 minutes suggested",
            schedule: "Astronomy, history & Ganga views",
            rates: [{ label: "Entry", price: "ASI monument ticket" }],
            note: "Perched atop the Man Mandir Palace directly overlooking the Ganga, offering historic sundial instruments and sweeping riverfront vistas.",
          },
        ],
      },
    ],
    highlights: [
      "Samrat Yantra — A monumental instrument used for astronomical calculations.",
      "Jai Singh II — The ruler and astronomer behind the observatory.",
      "Astronomical Instruments — Built to study celestial movements and measure time.",
      "Man Mandir Palace — Historic royal architecture overlooking the Ganga.",
      "Ganga Views — A unique perspective over Varanasi's riverfront.",
      "Scientific Heritage — A rare meeting point of Indian astronomy, mathematics and architecture.",
    ],
    heroPlaceholder: {
      code: "MAN_MANDIR_HERO",
      label: "Observatory Overlooking the Ganga",
      aspect: "16:10",
      src: "/images/details/man-mandir/man-mandir-observatory-ganga.png",
    },
    supportingPlaceholders: [
      {
        code: "MAN_MANDIR_IMAGE_02",
        label: "Palace Courtyard",
        aspect: "4:3",
        src: "/images/details/man-mandir/man-mandir-palace-courtyard.png",
      },
      {
        code: "MAN_MANDIR_IMAGE_03",
        label: "Carved Sandstone Jharokha",
        aspect: "4:3",
        src: "/images/details/man-mandir/man-mandir-carved-jharokha.jpg",
      },
      {
        code: "MAN_MANDIR_IMAGE_04",
        label: "Historic Interior Hall",
        aspect: "4:3",
        src: "/images/details/man-mandir/man-mandir-interior-hall.png",
      },
    ],
  },

  "bharat-mata": {
    id: "bharat-mata",
    index: "09",
    title: "BHARAT MATA TEMPLE",
    tagline: "A Nation in One Mother.",
    location: "Vidyapith Road, Varanasi",
    accentColor: "#9E600B",
    intro:
      "Built in 1936 by freedom fighter Babu Shiv Prasad Gupta, Bharat Mata Temple is unlike the traditional temples of Kashi. Instead of a deity, its centrepiece is a remarkable marble relief map of India, turning the geography of the country into the focus of devotion and reflection.",
    storyTitle: "THE MARBLE MAP",
    story:
      "The temple's most distinctive feature is its three-dimensional marble map representing the Indian subcontinent. Mountains, rivers, plains and coastlines are carved into the surface, creating a remarkable geographical landscape that can be viewed as a symbolic representation of the nation.",
    storyPosition: "before-sections",
    sections: [
      {
        title: "A TEMPLE OF AN IDEA",
        subtitle: "UNITY IN STONE",
        content:
          "The temple emerged during India's freedom movement and reflects ideals of national unity and cultural identity. Mahatma Gandhi inaugurated the temple in 1936, giving the monument a significance that extends beyond its unusual architecture.",
      },
      {
        title: "VISITOR INFORMATION",
        subtitle: "VISITOR INFORMATION",
        content: "",
        visitorInfo: [
          {
            heading: "TEMPLE GUIDELINES",
            location: "Vidyapith Road, Varanasi",
            timing: "Approximately 9:30 AM – 5:00 PM",
            duration: "30–60 minutes suggested",
            schedule: "History, architecture & national heritage",
            rates: [{ label: "Entry", price: "Free" }],
            note: "Located within the Mahatma Gandhi Kashi Vidyapith grounds. Dedicated to the land of India carved in detailed Makrana marble relief.",
          },
        ],
      },
    ],
    highlights: [
      "Marble Map of India — The temple's extraordinary three-dimensional centrepiece.",
      "Babu Shiv Prasad Gupta — Freedom fighter and founder of the temple.",
      "Mahatma Gandhi — Inaugurated the temple in 1936.",
      "No Traditional Idol — The nation itself becomes the focus of the temple.",
      "Freedom Movement Heritage — Closely connected with India's nationalist period.",
      "Unique Architecture — One of Kashi's most unusual and conceptually distinctive temples.",
    ],
    heroPlaceholder: {
      code: "BHARAT_MATA_HERO",
      label: "Marble Relief Map of India",
      aspect: "16:10",
      src: "/images/details/bharat-mata/bharat-mata-marble-map.jpg",
    },
    supportingPlaceholders: [
      {
        code: "BHARAT_MATA_IMAGE_02",
        label: "Temple Shikharas and Statue",
        aspect: "4:3",
        src: "/images/details/bharat-mata/bharat-mata-shikharas-statue.png",
      },
      {
        code: "BHARAT_MATA_IMAGE_03",
        label: "Vidyapith Heritage Exterior",
        aspect: "4:3",
        src: "/images/details/bharat-mata/bharat-mata-vidyapith-exterior.png",
      },
      {
        code: "BHARAT_MATA_IMAGE_04",
        label: "Topographic Relief Carving",
        aspect: "4:3",
        src: "/images/details/bharat-mata/bharat-mata-map-relief.jpg",
      },
    ],
  },
};
