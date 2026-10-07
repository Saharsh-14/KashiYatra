import type { TempleDetailData } from "@/types/content";

/**
 * Editorial Content & Visitor Information for the 8 Sanctuaries of Kashi.
 *
 * Each sanctuary follows the unified editorial and practical hierarchy:
 * 1. Hero
 * 2. Darshan & Timings
 * 3. Daily Aarti
 * 4. Temple at a Glance
 * 5. Main Introduction
 * 6. The Sacred Story & Avimukta
 * 7. History & Architectural Record
 * 8. Why It Matters
 * 9. Closing Contemplation
 * 10. Navigation
 */
export const templeDetails: Record<string, TempleDetailData> = {
  "kashi-vishwanath": {
    timings: {
      heading: "DARSHAN & TIMINGS",
      items: [
        { label: "Temple Opening", time: "2:30 AM" },
        { label: "Mangala Aarti", time: "3:00 AM – 4:00 AM" },
        { label: "Morning Darshan", time: "4:00 AM – 11:00 AM" },
        { label: "Midday", time: "12:00 PM – 7:00 PM" },
        { label: "Evening Darshan", time: "After Sapta Rishi Aarti – 9:00 PM" },
        { label: "Temple Closing", time: "11:00 PM" },
      ],
      note: "Timings may vary on festivals, eclipses and special occasions.",
    },
    dailyAarti: {
      heading: "DAILY AARTI",
      items: [
        {
          name: "Mangala Aarti",
          time: "3:00 AM – 4:00 AM",
          description:
            "The first worship of the day, performed during the sacred early-morning hours.",
        },
        {
          name: "Mid-Day Bhog Aarti",
          time: "11:15 AM – 12:20 PM",
          description:
            "Bhog is offered to Lord Vishwanath as an act of devotion.",
        },
        {
          name: "Sapta Rishi Aarti",
          time: "7:00 PM – 8:15 PM",
          description:
            "Seven priests perform the evening worship, representing the seven revered sages.",
        },
        {
          name: "Shringar / Bhog Aarti",
          time: "9:00 PM – 10:15 PM",
          description:
            "The deity is ceremonially adorned and offered the evening bhog.",
        },
        {
          name: "Shayan Aarti",
          time: "10:30 PM – 11:00 PM",
          description:
            "The final worship before the temple closes for the night.",
        },
      ],
    },
    atAGlance: {
      deity: "Lord Shiva · Vishwanath",
      significance: "One of the 12 Jyotirlingas",
      location: "Vishwanath Gali, Varanasi",
      presentTemple: "1780 · Maharani Ahilyabai Holkar",
      bestExperience: "Early Morning Mangala Aarti / Evening Aarti",
    },
    introduction: {
      eyebrow: "SANCTUARY 01 OF 08",
      heading: "KASHI VISHWANATH TEMPLE",
      subheading: "THE SPIRITUAL HEART OF KASHI",
      leadText:
        "One of the twelve sacred Jyotirlingas of Lord Shiva, Kashi Vishwanath is regarded as the spiritual heart of Kashi. For centuries, pilgrims have travelled here to seek darshan of Vishwanath — the Lord of the Universe — and experience one of India's most enduring traditions of worship.",
      secondaryText:
        "Kashi itself is believed to be Shiva's eternal city — a place where the divine and the everyday exist side by side. For devotees, visiting Vishwanath is more than seeing a temple; it is an encounter with a tradition that has continued through centuries.",
    },
    story: {
      heading: "THE STORY OF VISHWANATH",
      eyebrow: "SACRED ORIGIN",
      leadParagraph:
        "According to sacred tradition, when Brahma and Vishnu sought to understand the ultimate truth of the cosmos, Shiva appeared before them as an infinite, blazing pillar of light piercing the heavens and earth — the eternal Jyotirlinga. Neither could find its summit nor its base.",
      secondaryParagraph:
        "In Kashi, this unfathomable light manifested upon the earth as Vishwanath, offering mortal beings a direct threshold to experience the formless divine in palpable, compassionate form.",
      focusTitle: "AVIMUKTA — THE NEVER-FORSAKEN",
      focusContent:
        "Ancient texts describe Kashi as Avimukta Kshetra — the sacred realm that Lord Shiva never abandons, even in the hour of cosmic dissolution. Here, every step is considered sacred, and departure from mortal life in the grace of Vishwanath is traditionally believed to grant moksha — ultimate liberation from the cycle of rebirth.",
    },
    history: {
      heading: "A TEMPLE REBUILT, A TRADITION UNBROKEN",
      eyebrow: "CHRONICLE & ARCHITECTURE",
      paragraphs: [
        "The present Kashi Vishwanath Temple was built in 1780 by Maharani Ahilyabai Holkar of Indore. The shrine had been destroyed and rebuilt several times throughout history.",
        "Later, Maharaja Ranjit Singh donated gold for two of the temple's domes in 1839, contributing to the golden identity of the shrine seen today.",
      ],
      image: "/images/temples/kashi-vishwanath/golden-shikharas.jpg",
      imageCaption: "Historic Gilded Shikharas & Architecture",
      milestones: [
        {
          year: "1780",
          event: "Reconstruction of the sanctuary by Maharani Ahilyabai Holkar of Indore.",
        },
        {
          year: "1839",
          event: "Gilding of the sacred shikharas with pure gold by Maharaja Ranjit Singh of Punjab.",
        },
        {
          year: "2021",
          event: "Inauguration of the Kashi Vishwanath Corridor, reconnecting the shrine directly to the Ganga.",
        },
      ],
    },
    whyItMatters: {
      heading: "WHY IT MATTERS",
      pillars: ["FAITH.", "CONTINUITY.", "LIBERATION."],
      paragraph:
        "Kashi Vishwanath is important not simply because of its age, but because generations of devotees have continuously returned to worship Vishwanath. Through eras of upheaval and renewal, the flame of devotion in this sanctum has remained unbroken, anchoring millions to a living reality that transcends time itself.",
    },
    closing: {
      statement:
        "For centuries, pilgrims have arrived in Kashi with a simple purpose — to stand before Vishwanath, offer their prayers, and become part of a tradition much older than any single generation.",
    },
  },
  "kaal-bhairav": {
    timings: {
      heading: "DARSHAN & AARTI",
      items: [
        { label: "Opening Hours (Morning)", time: "5:00 AM – 1:30 PM" },
        { label: "Midday Closure", time: "1:30 PM – 4:30 PM" },
        { label: "Opening Hours (Evening)", time: "4:30 PM – 9:30 PM" },
        { label: "Best Time for Darshan", time: "Around 5:00 AM – 7:00 AM" },
      ],
      note: "Timings may vary on festival days and according to the temple's daily ritual schedule.",
    },
    dailyAarti: {
      heading: "AARTI",
      items: [
        {
          name: "Mangala Aarti",
          time: "Around 4:00 AM – 5:00 AM",
          description:
            "Early morning worship welcoming the sacred dawn of devotion.",
        },
        {
          name: "Bhog Aarti",
          time: "Around Midday",
          description:
            "Sacred offering of food presented before Lord Kaal Bhairav.",
        },
        {
          name: "Sandhya Aarti",
          time: "Around 8:00 PM",
          description:
            "Evening worship conducted with oil lamps, bells, and sacred chanting.",
        },
        {
          name: "Shayan Aarti",
          time: "Late Night",
          description:
            "Final night prayers before the sanctum doors close.",
        },
      ],
    },
    atAGlance: {
      deity: "Lord Shiva · Kaal Bhairav",
      significance: "The Kotwal and Supreme Guardian of Kashi",
      location: "Bhaironath, Visheshwarganj, Varanasi",
      presentTemple: "Ancient Sanctuary · Living Tradition of Protection",
      bestExperience: "Early Morning Darshan (5:00 AM – 7:00 AM)",
    },
    introduction: {
      eyebrow: "THE KOTWAL OF KASHI",
      heading: "KAAL BHAIRAV TEMPLE",
      subheading: "THE GUARDIAN OF KASHI",
      leadText:
        "Kaal Bhairav is revered as Kashi's guardian — the Kotwal of the eternal city. He is a fierce manifestation of Lord Shiva, representing protection, discipline and the destruction of fear.",
      secondaryText:
        "Tradition holds that Kaal Bhairav protects the sacred city of Kashi. For many devotees, his darshan is therefore considered an essential part of a pilgrimage to Kashi.",
    },
    story: {
      heading: "THE STORY OF KAAL BHAIRAV",
      eyebrow: "SACRED ORIGIN",
      leadParagraph:
        "According to ancient tradition, Brahma became consumed by pride and claimed supremacy. Shiva manifested Kaal Bhairav to humble him. Bhairav severed one of Brahma's five heads, an act that left him carrying the burden of Brahmahatya.",
      secondaryParagraph:
        "He wandered until he reached Kashi. Here, the burden was believed to fall away, establishing Kashi as a city where even profound spiritual burdens could be released.",
      focusTitle: "SACRED ORDER",
      focusContent:
        "The guardian who protects Kashi and maintains its sacred order.",
    },
    history: {
      heading: "A DETAIL WORTH NOTICING",
      eyebrow: "SACRED ICONOGRAPHY",
      paragraphs: [
        "The deity is traditionally represented by a silver-faced image adorned with flowers and associated with a dog, Kaal Bhairav's vahana (vehicle).",
        "His fierce appearance reflects his role not simply as a destroyer, but as the guardian who protects the sacred order of Kashi.",
      ],
      image: "/images/temples/kaal-bhairav/silver-mask.jpg",
      imageCaption: "The Sacred Silver Face of Bhairava",
    },
    whyItMatters: {
      heading: "WHY THE TEMPLE MATTERS",
      pillars: ["PROTECTION.", "COURAGE.", "DISCIPLINE."],
      paragraph:
        "For devotees, Kaal Bhairav is not simply another temple in Kashi. He represents the protective force of the city.",
      points: [
        "Protection from fear and negativity",
        "Strength and courage",
        "Removal of obstacles",
        "Spiritual discipline",
        "Protection during one's journey through Kashi",
      ],
      note: "The Bhairav Raksha Sutra, a blessed black thread traditionally associated with the temple, is believed by devotees to offer protection and blessings.",
    },
    closing: {
      statement:
        "To stand before Kaal Bhairav is to acknowledge the sacred discipline that protects Kashi — a threshold where fear dissolves into enduring strength.",
    },
  },
  "sankat-mochan": {
    timings: {
      heading: "DARSHAN & AARTI",
      items: [
        { label: "Morning Opening", time: "4:30 AM – 12:00 PM" },
        { label: "Midday Closure", time: "12:00 PM – 3:00 PM" },
        { label: "Evening Opening", time: "3:00 PM – 10:00 PM" },
        { label: "Tuesday & Saturday", time: "Open until Midnight" },
        { label: "Best Time for Darshan", time: "Around 5:00 AM – 7:00 AM" },
      ],
      note: "Timings may vary slightly according to the temple's daily ritual schedule and festival days.",
    },
    dailyAarti: {
      heading: "AARTI",
      items: [
        {
          name: "Mangala Aarti",
          time: "Around 4:30 AM",
          description:
            "Early morning worship welcoming the dawn of devotion and strength.",
        },
        {
          name: "Midday Aarti",
          time: "Around 12:00 PM",
          description:
            "Afternoon rites and bhog offering before midday closure.",
        },
        {
          name: "Sandhya Aarti",
          time: "Around 8:00 PM",
          description:
            "Evening worship with lamps, bells, and collective chanting.",
        },
        {
          name: "Night / Shayan Aarti",
          time: "Around 9:30 PM – 10:00 PM",
          description:
            "Concluding prayers before closing. Tuesday & Saturday may have additional late-night rituals.",
        },
      ],
    },
    atAGlance: {
      deity: "Lord Hanuman · Sankat Mochan",
      significance: "The Reliever of Troubles and Embodiment of Courage",
      location: "Sankat Mochan Road, Saket Nagar, Varanasi",
      presentTemple: "Founded by Goswami Tulsidas · Early 16th Century",
      bestExperience: "Early Morning (5:00–7:00 AM) or Tuesday/Saturday Evening",
    },
    introduction: {
      eyebrow: "THE RELIEVER OF TROUBLES",
      heading: "SANKAT MOCHAN TEMPLE",
      subheading: "THE RELIEVER OF TROUBLES",
      leadText:
        "Sankat Mochan — literally \"the reliever of troubles\" — is one of Kashi's most beloved shrines dedicated to Lord Hanuman. Devotees come here seeking strength, protection, courage and relief from difficulties.",
      secondaryText:
        "The temple carries a particularly intimate connection with Goswami Tulsidas, whose devotion to Lord Hanuman remains woven into the identity of this sacred place.",
    },
    story: {
      heading: "THE STORY OF SANKAT MOCHAN",
      eyebrow: "SACRED ENCOUNTER",
      leadParagraph:
        "Tradition holds that Goswami Tulsidas encountered Lord Hanuman at this very place in Kashi. Inspired by this divine encounter, he established a shrine dedicated to Hanuman here in the early 16th century.",
      secondaryParagraph:
        "The temple therefore carries more than religious significance — it preserves the memory of a saint, a deity and a moment of devotion that became deeply connected with Kashi.",
      focusTitle: "THE HANUMAN CHALISA",
      focusContent:
        "Tulsidas is also traditionally associated with the Hanuman Chalisa, making the temple an important place for devotees who gather to recite it in Hanuman's presence.",
    },
    history: {
      heading: "A SACRED TRADITION & CULTURAL HEART",
      eyebrow: "LIVING HERITAGE",
      paragraphs: [
        "The temple is closely associated with the devotional tradition of reciting the Hanuman Chalisa. The forty-verse hymn praises Hanuman's strength, devotion and humility and is recited by devotees seeking courage and divine protection.",
        "The atmosphere of the temple is therefore not only one of silent prayer, but also of collective devotion — voices, bells, flowers, sindoor and the repeated name of Hanuman becoming part of the experience.",
        "Sankat Mochan is also one of the places where Kashi's spiritual life meets its artistic tradition, hosting the renowned Sankat Mochan Sangeet Samaroh, an annual classical music and dance festival where celebrated artists perform as an offering to Lord Hanuman.",
        "The deity of Hanuman here is traditionally adorned with sindoor and flowers. Devotees also offer sweets, particularly besan laddus, as prasad. The peaceful green surroundings and the presence of monkeys have become familiar parts of the Sankat Mochan experience.",
      ],
      image: "/images/temples/sankat-mochan/sanctum-darshan.jpg",
      imageCaption: "Sacred Sindoor-Adorned Deity of Lord Hanuman",
      objectPosition: "object-[center_30%]",
      milestones: [
        {
          year: "Early 16th C.",
          event: "Establishment of the shrine by Goswami Tulsidas following his divine vision.",
        },
        {
          year: "Annual",
          event: "Sankat Mochan Sangeet Samaroh uniting classical devotion and music.",
        },
      ],
    },
    whyItMatters: {
      heading: "WHY THE TEMPLE MATTERS",
      pillars: ["STRENGTH.", "COURAGE.", "PROTECTION."],
      paragraph:
        "For devotees, Sankat Mochan represents Hanuman in his role as the one who removes suffering and obstacles. Tuesdays and Saturdays are especially significant for Hanuman worship and attract large numbers of devotees.",
      points: [
        "Strength in difficult times",
        "Protection and courage",
        "Relief from obstacles and fears",
        "Peace of mind",
        "Blessings for success and well-being",
      ],
      note: "PRACTICAL NOTE: For security and sanctity, visitors should expect restrictions on items such as mobile phones, cameras and bags inside the temple premises. Lockers are available for depositing prohibited belongings.",
    },
    closing: {
      statement:
        "To step into Sankat Mochan is to experience Kashi at its most earnest — where prayer is not a distant ritual, but an everyday refuge of courage, music, and quiet reassurance.",
    },
  },
  "durga-temple": {
    timings: {
      heading: "DARSHAN & TIMINGS",
      items: [
        { label: "Opening Hours", time: "5:00 AM – 10:00 PM" },
        { label: "Morning Darshan", time: "5:00 AM – 12:00 PM" },
        { label: "Evening Darshan", time: "4:00 PM – 10:00 PM" },
        {
          label: "Best Time for Darshan",
          time: "Early morning or during evening aarti",
        },
      ],
      note: "Timings may vary according to the temple's daily ritual schedule, Navratri and other special occasions.",
    },
    dailyAarti: {
      heading: "AARTI",
      items: [
        {
          name: "Mangala Aarti",
          time: "Around 5:00 AM",
          description:
            "Early morning worship welcoming the divine presence of Shakti at dawn.",
        },
        {
          name: "Morning Aarti",
          time: "Around 7:00 AM",
          description:
            "Sacred morning invocation with lamps, incense, and devotional chanting.",
        },
        {
          name: "Evening Aarti",
          time: "Around 7:00 PM",
          description:
            "Evening adoration with traditional brass lamps, bells, and deep devotion.",
        },
        {
          name: "Shayan Aarti",
          time: "Around 9:30 PM",
          description:
            "Concluding night prayer before the sanctum doors rest.",
        },
      ],
    },
    atAGlance: {
      deity: "Goddess Durga",
      significance: "One of Kashi's most revered Shakti temples",
      location: "Durga Kund, Varanasi",
      presentTemple: "Nagara-style temple · Durga Kund Mandir",
      bestExperience: "Navratri / Early Morning Darshan / Evening Aarti",
    },
    introduction: {
      eyebrow: "THE RED TEMPLE OF KASHI",
      heading: "DURGA TEMPLE",
      subheading: "THE RED TEMPLE OF KASHI",
      leadText:
        "Standing beside the sacred Durga Kund, Durga Temple is one of the most distinctive temples of Varanasi. Its striking red-and-ochre architecture and towering shikhara make it instantly recognizable.",
      secondaryText:
        "The temple is dedicated to Goddess Durga, worshipped here as a powerful manifestation of Shakti — the divine feminine energy that represents strength, protection and the destruction of evil.",
    },
    story: {
      heading: "THE STORY OF DURGA KUND",
      eyebrow: "THE GODDESS WHO STAYED",
      leadParagraph:
        "According to local tradition, the image of Goddess Durga in this temple is believed to be self-manifested — not created by human hands. One popular belief says that the goddess appeared here to protect Kashi and chose to remain in the city.",
      secondaryParagraph:
        "Because of this tradition, devotees regard the shrine as a particularly powerful seat of the Goddess. The sacred pond beside the temple, Durga Kund, is an important part of the temple's identity.",
      focusTitle: "DURGA KUND MANDIR",
      focusContent:
        "The sacred pond beside the temple, Durga Kund, is an integral part of the shrine's spiritual geography and gives the sanctuary its widely cherished local name — Durga Kund Mandir.",
    },
    history: {
      heading: "A TEMPLE IN RED & FESTIVE SHAKTI",
      eyebrow: "ARCHITECTURAL RECORD",
      paragraphs: [
        "The temple's most striking feature is its vivid red-and-ochre exterior. Its architecture follows the classical Nagara tradition, with a tall central shikhara rising above the sanctum and smaller surrounding structures creating a distinctive, iconic silhouette.",
        "The temple's reflection in the waters of Durga Kund creates one of the most recognizable and poetic visual scenes around this historic quadrant of Kashi.",
        "Navratri is one of the most important periods at Durga Temple. During these nine sacred nights, devotees gather to worship the different manifestations of Goddess Durga. The temple becomes especially vibrant with flowers, lamps, devotional singing and ritual offerings.",
        "The atmosphere during Navratri reflects the eternal essence of Shakti worship: Strength that protects. Power that destroys evil. Energy that sustains life.",
      ],
      image: "/images/temples/durga-temple/durga-kund-night.jpg",
      imageCaption: "Sacred Durga Kund & Nagara Shikhara Reflection",
      objectPosition: "object-center",
      milestones: [
        {
          year: "Nagara Style",
          event: "Towering central shikhara and sculpted red stone sanctum.",
        },
        {
          year: "Navratri",
          event: "Nine sacred nights of collective Shakti devotion and vibrant darshan.",
        },
      ],
    },
    whyItMatters: {
      heading: "WHY THE TEMPLE MATTERS",
      pillars: ["STRENGTH.", "PROTECTION.", "DEVOTION."],
      paragraph:
        "Durga Temple represents the protective and powerful aspect of the divine feminine. Devotees come here seeking blessings and refuge in the motherly strength of Shakti.",
      points: [
        "Protection from negative forces",
        "Strength and courage",
        "Blessings for family and well-being",
        "Removal of obstacles",
        "Divine protection and inner strength",
      ],
      note: "VISITOR NOTE: Durga Temple is sometimes popularly known as the 'Monkey Temple' because of the monkeys traditionally found around its premises and Durga Kund. Do not feed or approach the monkeys closely, and keep food and belongings secured.",
    },
    closing: {
      statement:
        "While Kashi Vishwanath represents Shiva as Vishwanath, Durga Temple offers another dimension of the city's spiritual identity: the fierce, protective and nurturing power of the Goddess.",
    },
  },
  "gauri-kedareshwar": {
    timings: {
      heading: "DARSHAN & AARTI",
      items: [
        { label: "Temple Opening", time: "4:00 AM – 10:00 PM" },
        { label: "Worship Hours", time: "Approximately 3:00 AM – 11:00 PM" },
        { label: "Mangala Aarti", time: "Around 3:00 AM – 4:00 AM" },
        { label: "Morning Aarti", time: "Around 10:00 AM" },
        { label: "Sandhya Aarti", time: "Around 5:30 PM – 7:00 PM" },
        { label: "Shayan Aarti", time: "Around 10:00 PM – 10:30 PM" },
        {
          label: "Best Time for Darshan",
          time: "Early morning, especially around Mangala Aarti",
        },
      ],
      note: "Timings may vary according to the temple's daily rituals, season and festival days.",
    },
    dailyAarti: {
      heading: "AARTI",
      items: [
        {
          name: "Mangala Aarti",
          time: "Around 3:00 AM – 4:00 AM",
          description:
            "Pre-dawn worship awakening the sanctuary with sacred conch and bells.",
        },
        {
          name: "Morning Aarti",
          time: "Around 10:00 AM",
          description:
            "Mid-morning devotional rites with milk, bilva leaves, and Vedic hymns.",
        },
        {
          name: "Sandhya Aarti",
          time: "Around 5:30 PM – 7:00 PM",
          description:
            "Twilight adoration accompanied by deep riverside devotion above Kedar Ghat.",
        },
        {
          name: "Shayan Aarti",
          time: "Around 10:00 PM – 10:30 PM",
          description:
            "Final night prayers before the sanctum doors close.",
        },
      ],
    },
    atAGlance: {
      deity: "Lord Shiva as Kedareshwar with Goddess Gauri",
      significance: "A sacred Kedar shrine of Kashi",
      location: "Kedar Ghat, Varanasi",
      presentTemple: "Ancient Svayambhu Lingam · Restored by Ahilyabai Holkar",
      bestExperience: "Early Morning Darshan / Shravan Month / Maha Shivratri",
    },
    introduction: {
      eyebrow: "KEDARNATH, FOUND IN KASHI",
      heading: "GAURI KEDARESHWAR TEMPLE",
      subheading: "KEDARNATH, FOUND IN KASHI",
      leadText:
        "Tucked beside Kedar Ghat, Gauri Kedareshwar is one of the most distinctive Shiva shrines of Kashi. Here, Lord Shiva is worshipped as Kedareshwar alongside Goddess Gauri. The temple is deeply associated with Kedarnath in the Himalayas, giving pilgrims who cannot undertake the difficult Himalayan journey a sacred place to experience the presence of Kedar within Kashi.",
      secondaryText:
        "The official Kashi portal describes the local belief that worship here carries the same spiritual merit as visiting Kedarnath.",
    },
    story: {
      heading: "THE SEVENFOLD BELIEF",
      eyebrow: "SEVEN TIMES THE MERIT OF KEDARNATH",
      leadParagraph:
        "One of the most powerful traditions associated with Gauri Kedareshwar is found in the sacred lore of Kashi. According to a traditional belief associated with the Kedar Kshetra, worship performed at Kedareshwar in Kashi is believed to grant seven times the spiritual merit — punya — associated with worship at Kedarnath in the Himalayas.",
      secondaryParagraph:
        "This belief gives the temple a remarkable place in Kashi's sacred geography: The Himalayas hold Kedarnath. Kashi holds Kedareshwar. For devotees, the distance between the two is overcome not by geography, but by faith.",
      focusTitle: "A JOURNEY THAT ENDED IN KASHI",
      focusContent:
        "The temple's unusual rock-like Shiva lingam is traditionally regarded as self-manifest — appearing naturally rather than being installed by human hands. This is why Gauri Kedareshwar has long been especially meaningful to elderly pilgrims, travellers unable to undertake the difficult Himalayan trek, and devotees who seek Kedarnath's blessings while remaining in Kashi.",
    },
    history: {
      heading: "A TEMPLE THAT SURVIVED & RESTORED",
      eyebrow: "THROUGH THE AGE OF UPHEAVAL",
      paragraphs: [
        "The name itself tells the story. 'Kedareshwar' represents Lord Shiva in his Kedar form, while 'Gauri' represents Goddess Parvati, Shiva's consort. Together, they represent Shiva and Shakti — consciousness and divine energy, strength and balance. The temple is a sacred space where Shiva and Gauri are worshipped together.",
        "Gauri Kedareshwar carries another powerful chapter in the history of Kashi. According to local historical tradition, Aurangzeb's forces attacked the temple during the period of temple destruction in Kashi. Accounts tell of its resilience, survival, and subsequent revival, standing as an enduring symbol of a tradition that continued despite periods of upheaval.",
        "Like several important shrines of Kashi, Gauri Kedareshwar is associated with the restoration efforts of Maharani Ahilyabai Holkar in the 18th century. Her patronage helped restore and strengthen several sacred sites across Kashi, preserving temples that remain active places of worship today.",
        "The temple stands above Kedar Ghat, one of Kashi's most distinctive riverfront spaces. Pilgrims traditionally approach through the ghat, creating a unique spiritual sequence: Ganga → Kedar Ghat → Gauri Kedareshwar → Darshan. Here, river, ghat and temple become one continuous sacred landscape.",
      ],
      image: "/images/temples/gauri-kedareshwar/svayambhu-lingam.jpg",
      imageCaption: "Sacred Svayambhu Lingam & Silver Serpent",
      objectPosition: "object-center",
      milestones: [
        {
          year: "Self-Manifest",
          event: "Svayambhu lingam with natural white striation revered through antiquity.",
        },
        {
          year: "18th Century",
          event: "Restoration and structural patronage by Maharani Ahilyabai Holkar of Indore.",
        },
      ],
    },
    whyItMatters: {
      heading: "NOT JUST ANOTHER SHIVA TEMPLE",
      pillars: ["KEDAR.", "FAITH.", "CONTINUITY."],
      paragraph:
        "For devotees, Gauri Kedareshwar represents something deeply specific: access to Kedar. For those who cannot reach the Himalayan shrine, Kedareshwar offers a different kind of pilgrimage — one where the sacred journey is brought from the mountains to the banks of the Ganga.",
      points: [
        "Access to the spiritual grace and symbolism of Kedarnath in Kashi",
        "Worship of Shiva and Gauri together as unified divine consciousness and energy",
        "Darshan of the sacred self-manifest (Svayambhu) rock-formation lingam",
        "Continuous spiritual path connecting the holy Ganga, Kedar Ghat, and the sanctuary",
        "Deep spiritual merit traditionally venerated across generations of pilgrims",
      ],
      note: "A DETAIL WORTH NOTICING: Inside the sanctum, the Kedareshwar lingam is traditionally described as an unusual natural rock formation with a distinctive white line. It is believed to be self-manifest — a form of Shiva that appeared rather than being installed by human hands.",
    },
    closing: {
      statement:
        "The Himalayas hold Kedarnath. Kashi holds Kedareshwar. For devotees, the distance between the two is overcome not by geography, but by faith.",
    },
  },
  "annapurna-temple": {
    timings: {
      heading: "DARSHAN & TIMINGS",
      items: [
        { label: "Temple Opening", time: "5:00 AM – 11:00 PM" },
        { label: "Morning Darshan", time: "5:00 AM – 12:00 PM" },
        { label: "Afternoon Darshan", time: "1:00 PM – 4:00 PM" },
        { label: "Evening Darshan", time: "4:00 PM – 11:00 PM" },
        {
          label: "Best Time for Darshan",
          time: "Early morning or during evening worship",
        },
      ],
      note: "Timings may vary according to the temple's daily ritual schedule and special festival days.",
    },
    dailyAarti: {
      heading: "AARTI",
      items: [
        {
          name: "Mangala Aarti",
          time: "Around 4:00 AM",
          description:
            "Pre-dawn prayer welcoming the compassionate grace of the divine mother.",
        },
        {
          name: "Morning Aarti",
          time: "Around 6:00 AM",
          description:
            "Morning adoration accompanied by sacred hymns and offerings of fresh flowers.",
        },
        {
          name: "Bhog Aarti",
          time: "Around 11:30 AM",
          description:
            "Sacred offering of freshly prepared sanctified meals (bhog) to Goddess Annapurna.",
        },
        {
          name: "Evening Aarti",
          time: "Around 7:00 PM",
          description:
            "Dusk worship with illuminated brass deepas, bells, and collective chanting.",
        },
        {
          name: "Shayan Aarti",
          time: "Around 10:00 PM",
          description:
            "Concluding devotional prayers before the sanctum doors close for the night.",
        },
      ],
    },
    atAGlance: {
      deity: "Goddess Annapurna",
      significance: "Goddess of Food and Nourishment · Queen of Kashi",
      location: "Near Kashi Vishwanath Temple, Varanasi",
      presentTemple: "Ancient Shakti Peetha · 18th C. Maratha Architecture",
      bestExperience: "Early Morning Darshan / Annakut Mahotsav / Bhog Aarti",
    },
    introduction: {
      eyebrow: "THE MOTHER WHO FEEDS THE WORLD",
      heading: "ANNAPURNA MATA TEMPLE",
      subheading: "THE MOTHER WHO FEEDS THE WORLD",
      leadText:
        "Annapurna Mata is the divine mother who nourishes the world. In Kashi, she is worshipped as Annapurna — the Goddess of food, nourishment and abundance. Her temple stands close to Kashi Vishwanath, creating one of the most important sacred relationships in the city's spiritual landscape.",
      secondaryText:
        "The belief is beautifully simple: Shiva represents consciousness. Annapurna represents nourishment. Even the divine needs food.",
    },
    story: {
      heading: "THE STORY OF ANNAPURNA",
      eyebrow: "WHEN THE WORLD WENT HUNGRY",
      leadParagraph:
        "According to Hindu tradition, Shiva once declared that the material world was an illusion and that food itself was ultimately part of that illusion. Parvati, the divine mother, challenged this idea. She disappeared from the world. Without her presence, food vanished. The world began to suffer from hunger, and even the gods could not escape the consequences.",
      secondaryParagraph:
        "Seeing the suffering across creation, Parvati returned to Kashi in the form of Annapurna — the Goddess who provides food. She opened her sacred kitchen and began feeding the world. Shiva himself came before her with a begging bowl. Annapurna filled it with food. The story expresses a profound idea: \"Spirituality cannot exist without nourishment.\"",
      focusTitle: "THE GODDESS BESIDE THE LORD",
      focusContent:
        "Annapurna's temple is located close to Kashi Vishwanath for a reason: Lord Shiva receives his sustenance from Annapurna. Vishwanath is the Lord of Kashi, and Annapurna is the Mother who sustains Kashi. Together, they represent the eternal balance between consciousness and nourishment, Shiva and Shakti.",
    },
    history: {
      heading: "THE GOLDEN IDOLS & ANNAKUT",
      eyebrow: "THE RARE DARSHAN",
      paragraphs: [
        "One of the most distinctive traditions of Annapurna Temple is the annual appearance of the Goddess in her golden form. During the festival of Annakut around Diwali, the temple displays a special golden image of Annapurna along with golden representations of Lakshmi and Saraswati — a rare darshan that attracts large numbers of devotees from across India.",
        "Annakut — literally \"mountain of food\" — is one of the most important celebrations associated with Annapurna Mata. On this occasion, devotees prepare and offer a vast variety of food to the Goddess.",
        "The offerings symbolize gratitude for the food that sustains life and the abundance provided by the divine mother. After the offering, the food becomes prasad and is distributed among devotees. The ritual transforms food from something ordinary into an expression of devotion.",
        "The worship of Annapurna has always been closely connected with the act of feeding others. The temple's traditions reflect the belief that offering food is itself an act of worship. Here, devotion does not end at the sanctum — it reaches the plate, reaches the hungry, and becomes sacred service (annadaan).",
      ],
      image: "/images/temples/annapurna-temple/golden-darshan.jpg",
      imageCaption: "The Rare Golden Darshan on Annakut",
      objectPosition: "object-[center_35%]",
      milestones: [
        {
          year: "Annakut",
          event: "Annual rare golden darshan of Annapurna, Lakshmi, and Saraswati during Diwali.",
        },
        {
          year: "Annadaan",
          event: "Centuries-old living tradition of feeding all pilgrims and seekers without distinction.",
        },
      ],
    },
    whyItMatters: {
      heading: "FOOD AS A SACRED GIFT",
      pillars: ["FOOD.", "NOURISHMENT.", "ABUNDANCE."],
      paragraph:
        "Annapurna represents something universal. Every person needs food. Every household depends upon nourishment. Every spiritual journey begins with a living body that must be sustained. For devotees, praying to Annapurna is therefore not simply asking for wealth or abundance. It is expressing gratitude for the most basic gift of life itself.",
      points: [
        "Gratitude for daily food and life-sustaining nourishment",
        "Divine blessings for household peace, abundance, and well-being",
        "Sustenance of the spiritual journey through bodily health and strength",
        "The sacred tradition of Annadaan — feeding others as the highest form of worship",
        "The rare golden darshan during the festival of Annakut",
      ],
      note: "A DETAIL WORTH NOTICING: Annapurna is traditionally depicted holding a vessel or bowl of food in one hand and a ladle in the other. These simple objects carry the essence of her identity: she does not merely bless abundance; she serves it — reinforcing her role as the divine mother who nourishes all beings without distinction.",
    },
    closing: {
      statement:
        "She is the mother who reminds Kashi that no prayer is complete when another person remains hungry. Annapurna completes Vishwanath.",
    },
  },
  "sankatha-devi": {
    timings: {
      heading: "DARSHAN & TIMINGS",
      items: [
        { label: "Temple Opening", time: "5:00 AM – 10:00 PM" },
        { label: "Morning Darshan", time: "5:00 AM – 12:00 PM" },
        { label: "Evening Darshan", time: "4:00 PM – 10:00 PM" },
        {
          label: "Best Time for Darshan",
          time: "Early morning or Friday/Sunday worship hours",
        },
      ],
      note: "Timings may vary according to the temple's daily ritual schedule and special occasions.",
    },
    dailyAarti: {
      heading: "AARTI",
      items: [
        {
          name: "Mangala Aarti",
          time: "Around 5:00 AM",
          description:
            "Early morning prayers invoking the protective maternal presence of the Goddess.",
        },
        {
          name: "Morning Aarti",
          time: "Around 7:00 AM",
          description:
            "Morning worship with fresh flower garlands, incense, and sacred chants.",
        },
        {
          name: "Bhog Aarti",
          time: "Around 12:00 PM",
          description:
            "Afternoon offering of sanctified bhog and prayers before midday rest.",
        },
        {
          name: "Sandhya Aarti",
          time: "Around 7:00 PM",
          description:
            "Evening worship with illuminated brass deepas, bells, and deep devotion.",
        },
        {
          name: "Shayan Aarti",
          time: "Around 9:30 PM",
          description:
            "Concluding prayers of gratitude before the sanctuary doors close for the night.",
        },
      ],
    },
    atAGlance: {
      deity: "Sankatha Mata",
      significance: "Goddess who removes difficulties and grants refuge",
      location: "Near Scindia Ghat, Varanasi",
      presentTemple: "Ancient Shakti Shrine · Historic Ghats of Kashi",
      bestExperience: "Sunday Worship / Early Morning Darshan / Navratri",
    },
    introduction: {
      eyebrow: "THE GODDESS WHO REMOVES AFFLICTION",
      heading: "SANKATHA MATA TEMPLE",
      subheading: "THE GODDESS WHO REMOVES AFFLICTION",
      leadText:
        "Sankatha Mata is one of the revered forms of the Divine Mother worshipped in Kashi. Her name comes from \"Sankata\" — difficulty, distress or trouble. Devotees come to her seeking relief from problems, protection from misfortune and strength during difficult periods of life.",
      secondaryText:
        "Unlike temples celebrated primarily for monumental architecture, Sankatha Mata's importance comes from an intimate idea: when life becomes difficult, the Goddess is approached as the one who helps remove the difficulty.",
    },
    story: {
      heading: "THE STORY OF SANKATHA MATA",
      eyebrow: "THE MOTHER WHO ANSWERS IN TIMES OF TROUBLE",
      leadParagraph:
        "According to traditional lore, the Goddess manifested to protect devotees from suffering and difficult circumstances. Her worship became especially associated with people facing hardship, uncertainty and obstacles.",
      secondaryParagraph:
        "The tradition of Sankatha Mata therefore grew around a simple act of faith: come to the Mother with your troubles, ask for strength, and leave with hope.",
      focusTitle: "THE POWER OF THE NAME",
      focusContent:
        "The name itself carries the essence of the temple: \"Sankata\" refers to difficulty, distress or trouble, while \"Mata\" means Mother. Together, Sankatha Mata is the Mother who is approached in times of difficulty. This speaks to a universal truth: everyone encounters trouble, everyone seeks protection, and everyone needs hope.",
    },
    history: {
      heading: "THE SUNDAY TRADITION & SACRED LANES",
      eyebrow: "DEVOTION BESIDE THE GANGA",
      paragraphs: [
        "Sunday holds particular importance in the worship of Sankatha Mata. On this day, devotees gather at the temple seeking blessings for protection, prosperity and freedom from difficulties. The atmosphere becomes especially devotional, with flowers, lamps, prayers and offerings filling the shrine.",
        "The temple is located within the dense sacred landscape of old Kashi, close to the Ganga and the historic ghats near Scindia Ghat. Its surroundings reflect what makes Kashi truly extraordinary: a small shrine, an ancient lane, a ghat and a major pilgrimage tradition existing within a few steps of one another.",
        "Sankatha Mata is worshipped as a powerful, compassionate form of Shakti, and the shrine is traditionally associated with protective maternal energy. Devotees offer flowers, lamps, sweets and sindoor while praying for the removal of difficulties.",
        "The temple is best experienced not as an isolated monument, but as part of the living spiritual fabric of Kashi — a quiet refuge where everyday life and the transcendent meet.",
      ],
      image: "/images/temples/sankatha-devi/darshan-silver-mukut.jpg",
      imageCaption: "Sacred Form of Maa Sankatha & Silver Mukut",
      objectPosition: "object-[center_45%]",
      milestones: [
        {
          year: "Sunday",
          event: "Dedicated day of special maternal worship, lamps, and large congregations.",
        },
        {
          year: "Navratri",
          event: "Nine sacred nights celebrating the protective Shakti forms of the Divine Mother.",
        },
      ],
    },
    whyItMatters: {
      heading: "A SHRINE FOR THOSE IN DIFFICULT TIMES",
      pillars: ["FAITH.", "PROTECTION.", "HOPE."],
      paragraph:
        "Sankatha Mata is especially meaningful to devotees who are passing through difficult phases of life. People do not come only to celebrate; they come to ask, they come to seek strength, and they come carrying problems that may never appear in the grand stories of monumental temples.",
      points: [
        "Relief from suffering and difficult circumstances",
        "Protection from misfortune and negative influences",
        "Strength, endurance, and courage during uncertain times",
        "Removal of obstacles and prayers for family well-being",
        "Maternal peace, emotional solace, and renewed hope",
      ],
      note: "A DETAIL WORTH NOTICING: Sankatha Mata is worshipped as an auspicious, protective form of Shakti. The shrine is traditionally approached not through distant dogma, but as a living mother to whom one can bring one's troubles with complete vulnerability.",
    },
    closing: {
      statement:
        "In Kashi, where gods are believed to walk among ordinary life, Sankatha Mata remains a reminder that devotion does not require a perfect life. Sometimes, it simply begins with a person carrying a difficulty — and asking the Mother for strength.",
    },
  },
  "new-vishwanath-bhu": {
    timings: {
      heading: "DARSHAN & TIMINGS",
      items: [
        { label: "Temple Opening (Morning)", time: "4:00 AM – 12:00 PM" },
        { label: "Midday Break", time: "12:00 PM – 4:00 PM" },
        { label: "Temple Opening (Evening)", time: "4:00 PM – 9:00 PM" },
        { label: "Morning Darshan", time: "4:00 AM – 12:00 PM" },
        { label: "Evening Darshan", time: "4:00 PM – 9:00 PM" },
        {
          label: "Best Time for Darshan",
          time: "Early morning or peaceful campus evening",
        },
      ],
      note: "Timings may vary according to the temple's daily schedule, university regulations and special occasions.",
    },
    dailyAarti: {
      heading: "AARTI",
      items: [
        {
          name: "Mangala Aarti",
          time: "Around 4:00 AM",
          description:
            "Pre-dawn prayer welcoming the first light across the quiet BHU campus.",
        },
        {
          name: "Morning Aarti",
          time: "Around 6:00 AM",
          description:
            "Morning worship with Vedic chants and offerings as the university awakens.",
        },
        {
          name: "Evening Aarti",
          time: "Around 7:00 PM",
          description:
            "Evening worship with illuminated brass lamps, bells, and gathered students.",
        },
        {
          name: "Shayan Aarti",
          time: "Around 8:30 PM",
          description:
            "Concluding devotional prayers before the sanctum doors close for the night.",
        },
      ],
    },
    atAGlance: {
      deity: "Lord Shiva — Vishwanath",
      significance: "A modern interpretation of the sacred Kashi Vishwanath tradition",
      location: "Banaras Hindu University, Varanasi",
      presentTemple: "Est. 1931 · Founder: Pandit Madan Mohan Malaviya",
      bestExperience: "A marble replica of the original Kashi Vishwanath shrine",
    },
    introduction: {
      eyebrow: "THE GOLDEN TEMPLE OF BHU",
      heading: "NEW VISHWANATH TEMPLE",
      subheading: "THE GOLDEN TEMPLE OF BHU",
      leadText:
        "Standing at the heart of Banaras Hindu University, the New Vishwanath Temple brings the spiritual tradition of Kashi Vishwanath into one of India's most important centres of learning. Officially known as the Shri Vishwanath Temple, it is one of the most recognizable landmarks of the BHU campus.",
      secondaryText:
        "Its tall white-marble tower rises above the university grounds, creating a striking meeting point between education, architecture and spirituality.",
    },
    story: {
      heading: "A TEMPLE BUILT FOR EVERYONE",
      eyebrow: "A VISION OF MALAVIYA",
      leadParagraph:
        "The temple was envisioned by Pandit Madan Mohan Malaviya as part of his larger vision for Banaras Hindu University — a place where modern education and India's spiritual and cultural traditions could exist together. Construction began in the 1930s and the temple was completed in 1966.",
      secondaryParagraph:
        "The temple was designed with the intention of making sacred knowledge and worship accessible to everyone, irrespective of caste or social background. This idea was deeply connected with Malaviya's vision for the university itself.",
      focusTitle: "VISHWANATH, AWAY FROM THE GHATS",
      focusContent:
        "The temple is inspired by the original Kashi Vishwanath Temple but has its own identity. Instead of the crowded lanes of Vishwanath Gali, the BHU temple stands within a spacious university campus surrounded by trees and open pathways. At its heart is a Shiva lingam representing Vishwanath — the Lord of the Universe. For many visitors, this creates a quieter way to experience the spiritual identity of Kashi.",
    },
    history: {
      heading: "A TEMPLE THAT RISES",
      eyebrow: "WORDS CARVED INTO MARBLE",
      paragraphs: [
        "The most striking feature of the temple is its soaring white-marble shikhara. The structure is designed vertically, drawing the eye upward toward the heavens.",
        "Inside, the temple contains sacred spaces dedicated to Lord Shiva and other deities, while inscriptions and spiritual texts add another layer to the architectural experience.",
        "The spacious surroundings and white marble give the temple an atmosphere very different from the dense historic temples of old Kashi.",
        "One of the temple's remarkable features is the presence of sacred Sanskrit texts and verses carved into its walls. The temple is especially associated with the Bhagavad Gita, allowing visitors to encounter spiritual philosophy not only through worship but also through written teachings.",
        "This creates an important connection between the temple and the educational identity of BHU: Knowledge, Faith, and Discipline.",
      ],
      image: "/images/temples/new-vishwanath-bhu/sanctum-darshan-lingam.jpg",
      imageCaption: "Sacred Sanctum Darshan & Shiva Lingam",
      objectPosition: "object-[center_45%]",
      milestones: [
        {
          year: "1931",
          event: "Foundation envisioned and initiated under Pandit Madan Mohan Malaviya.",
        },
        {
          year: "1966",
          event: "Completion of the soaring white-marble shrine, open to all seekers without barrier.",
        },
      ],
    },
    whyItMatters: {
      heading: "WHERE LEARNING MEETS FAITH",
      pillars: ["KNOWLEDGE.", "FAITH.", "UNITY."],
      paragraph:
        "The New Vishwanath Temple represents something uniquely Banarasi. It brings together two traditions that have shaped the city for centuries: the pursuit of knowledge and the pursuit of the divine. Students, teachers, pilgrims and visitors share the same space here. The temple therefore represents more than a place of worship — it represents the idea that education and spirituality can exist side by side.",
      points: [
        "A peaceful university setting surrounded by wide pathways, trees, and academic halls",
        "A Shiva lingam representing Vishwanath — the Lord of the Universe — at its heart",
        "Sacred Sanskrit verses and Bhagavad Gita teachings inscribed directly into marble walls",
        "A sanctuary designed for all humanity, transcending caste, background, and social barriers",
        "The original Vishwanath spirit reimagined for modern India and generations of seekers",
      ],
      note: "A DETAIL WORTH NOTICING: Look upward as you approach the temple. Its towering white-marble shikhara dominates the surrounding BHU landscape and is designed to evoke the vertical form of a traditional North Indian temple. The absence of the dense urban surroundings found around the original Vishwanath Temple gives the structure a completely different visual character.",
    },
    closing: {
      statement:
        "The New Vishwanath Temple carries an ancient idea into a modern setting — that the search for knowledge and the search for the divine do not have to be separate journeys.",
    },
  },
};

/**
 * Returns complete editorial detail data for a temple, or falls back to
 * a clean standardized template if a specific temple's full archive is pending.
 */
export function getTempleDetail(slug: string, name: string, subtitle?: string): TempleDetailData {
  if (templeDetails[slug]) {
    return templeDetails[slug];
  }

  // Graceful fallback for remaining sanctuaries until their specific historical archives are loaded
  return {
    timings: {
      heading: "DARSHAN & TIMINGS",
      items: [
        { label: "Temple Opening", time: "5:00 AM" },
        { label: "Morning Darshan", time: "5:30 AM – 12:00 PM" },
        { label: "Midday Break", time: "12:00 PM – 4:00 PM" },
        { label: "Evening Darshan", time: "4:00 PM – 9:00 PM" },
        { label: "Aarti", time: "7:00 PM" },
        { label: "Temple Closing", time: "9:30 PM" },
      ],
      note: "Timings may vary on festivals, eclipses and special occasions.",
    },
    dailyAarti: {
      heading: "DAILY AARTI",
      items: [
        {
          name: "Prabhat Aarti",
          time: "5:30 AM",
          description: "Morning prayers welcoming the new dawn of worship.",
        },
        {
          name: "Sandhya Aarti",
          time: "7:00 PM",
          description: "Evening devotion with brass lamps, bells, and sacred chanting.",
        },
        {
          name: "Shayan Aarti",
          time: "9:00 PM",
          description: "Concluding worship before the sanctum doors close for the night.",
        },
      ],
    },
    atAGlance: {
      deity: "Sacred Deity of Kashi",
      significance: "Integral sanctuary of Varanasi's spiritual landscape",
      location: "Kashi, Varanasi, Uttar Pradesh",
      presentTemple: "Ancient Pilgrimage Site",
      bestExperience: "Morning Aarti / Sunset Darshan",
    },
    introduction: {
      eyebrow: "SANCTUARY",
      heading: name,
      subheading: subtitle || "A SACRED SANCTUARY OF KASHI",
      leadText: `Dedicated to sacred worship in the holy city of Kashi, ${name} stands as an enduring pillar of devotion and timeless heritage.`,
      secondaryText:
        "For centuries, pilgrims have journeyed along the ancient lanes of Varanasi to experience the unique peace and living tradition of this sacred sanctuary.",
    },
    story: {
      heading: "THE SACRED TRADITION",
      eyebrow: "LIVING HERITAGE",
      leadParagraph:
        "Rooted in centuries of oral transmission and scriptural sanctity, this temple holds a cherished place in the devotional rhythm of Varanasi.",
      secondaryParagraph:
        "Devotees from near and far visit to seek solace, fulfill vows, and immerse themselves in the quiet grace that permeates the sanctuary.",
      focusTitle: "ETERNAL PRESENCE",
      focusContent:
        "In the sacred topography of Kashi, every shrine is an aperture to the transcendent, inviting seekers into stillness and contemplation.",
    },
    history: {
      heading: "AN ENDURING LEGACY",
      eyebrow: "CHRONICLE",
      paragraphs: [
        "Revered through generations of Varanasi's rich spiritual tapestry, the temple stands preserved by the continuous devotion of its custodians and pilgrims.",
      ],
    },
    whyItMatters: {
      heading: "WHY IT MATTERS",
      pillars: ["FAITH.", "CONTINUITY.", "DEVOTION."],
      paragraph:
        "This sanctuary endures not merely through its stone walls, but through the millions of prayers whispered within its courtyards across generations.",
    },
    closing: {
      statement:
        "To visit this sacred sanctuary is to step out of the rush of the world and enter a realm where devotion is timeless and deeply personal.",
    },
  };
}
