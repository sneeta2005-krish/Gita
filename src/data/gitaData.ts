import { Teaching, ReflectionQuestion, YogaPath, FeaturePillar } from '../types';

export const HERO_DATA = {
  title: "The Bhagavad Gita",
  subtitle: "Timeless Wisdom for Modern Life",
  description:
    "Ancient wisdom from the dialogue between Lord Krishna and Arjuna — offering guidance on duty, the mind, balance, purpose, and the path to inner peace.",
  quote: "Act with wisdom. Live with purpose. Remain steady.",
  heroImage: "/images/krishna_arjuna_hero.jpg",
  panoramicImage: "/images/krishna_dialogue_wide_1786865237734.jpg",
  lotusImage: "/images/lotus_divine_calm_1786865254933.jpg",
};

export const FEATURE_PILLARS: FeaturePillar[] = [
  {
    id: "wisdom",
    title: "Wisdom",
    subtitle: "Jnana & Clarity",
    description: "Ancient teachings with profound relevance for everyday life, guiding conscious decisions and clear discernment.",
    icon: "Sparkles",
    color: "from-amber-500/10 to-amber-600/5 text-amber-800 border-amber-200/80",
  },
  {
    id: "balance",
    title: "Inner Balance",
    subtitle: "Samata & Equanimity",
    description: "Learn to remain steady, grounded, and tranquil through life's triumphs, setbacks, and shifting seasons.",
    icon: "Scale",
    color: "from-emerald-500/10 to-teal-600/5 text-emerald-800 border-emerald-200/80",
  },
  {
    id: "purpose",
    title: "Purpose",
    subtitle: "Svadharma & Action",
    description: "Understand your unique responsibilities, align with your true nature, and act with unwavering clarity.",
    icon: "Compass",
    color: "from-sky-500/10 to-blue-600/5 text-sky-800 border-sky-200/80",
  },
];

export const EIGHT_TEACHINGS: Teaching[] = [
  {
    id: 1,
    number: "01",
    title: "Do Your Duty Without Attachment",
    subtitle: "Nishkama Karma — Action free from anxiety over results",
    summary:
      "Focus on doing your best and acting rightly. Do not allow success or failure to control your mind. This is the essence of Karma Yoga.",
    fullExplanation: [
      "In Chapter 2, Verse 47, Lord Krishna offers what has become the most iconic principle of the Bhagavad Gita: we have a right to our work and effort, but never to the fruits or results of our actions.",
      "When we obsess over outcomes—praise, profit, fear of failure—our energy is drained by future anxiety. When we dedicate ourselves entirely to the present action itself, our work becomes an act of joyful mastery and spiritual devotion.",
      "By releasing entitlement to specific outcomes, we free ourselves from psychological exhaustion, perfectionism paralysis, and emotional volatility."
    ],
    sanskritShloka: {
      verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      transliteration: "Karmaṇy-evādhikāras te mā phaleṣhu kadāchana | mā karma-phala-hetur bhūr mā te saṅgo ’stvakarmaṇi ||",
      translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of results, nor be attached to inaction.",
      reference: "Bhagavad Gita — Chapter 2, Verse 47"
    },
    modernApplication:
      "Whether studying for an exam, building a project, or resolving a conflict, pour 100% of your focus into doing the best possible work right now without letting obsessive anxiety about praise, metrics, or validation compromise your peace.",
    keyTakeaways: [
      "Perform every duty with excellence, sincerity, and presence.",
      "Detach emotional self-worth from external outcomes.",
      "Avoid slipping into apathy or inaction out of fear."
    ],
    themeColor: {
      bg: "bg-amber-50/80",
      cardBg: "bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-100/40",
      border: "border-amber-200 hover:border-amber-400",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
      badgeText: "text-amber-900",
      accent: "text-amber-700",
      glow: "hover:shadow-amber-100/80",
    },
    iconName: "Flame",
  },
  {
    id: 2,
    number: "02",
    title: "The Soul Is Eternal",
    subtitle: "Atman — The indestructible and timeless true self",
    summary:
      "The body changes and eventually dies, but the Atman — the true self — is not destroyed. Death is understood as a transition rather than the destruction of the true self.",
    fullExplanation: [
      "Krishna reveals to Arjuna that grief born of fear is rooted in confusing the temporary physical body with the immortal consciousness that resides within.",
      "Just as a person discards worn-out clothes and puts on new ones, the eternal self casts off worn-out bodies and enters into new ones.",
      "Weapons cannot pierce the soul, fire cannot burn it, water cannot wet it, and wind cannot dry it. Understanding this impermanence brings fearless courage and deep perspective."
    ],
    sanskritShloka: {
      verse: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥",
      transliteration: "Nainaṁ chhindanti śhastrāṇi nainaṁ dahati pāvakaḥ | na chainaṁ kledayanty-āpo na śhoṣhayati mārutaḥ ||",
      translation: "Weapons cannot shred the soul, nor can fire burn it; water cannot drown it, nor can the wind dry it.",
      reference: "Bhagavad Gita — Chapter 2, Verse 23"
    },
    modernApplication:
      "Recognize that physical aging, circumstantial crises, and temporary losses do not diminish your intrinsic worth or inner light. You are greater than the changing situations around you.",
    keyTakeaways: [
      "You are enduring consciousness having a human experience.",
      "Change and physical transience are natural laws of life.",
      "Fear of loss dissolves when rooted in the eternal self."
    ],
    themeColor: {
      bg: "bg-sky-50/80",
      cardBg: "bg-gradient-to-br from-sky-50/90 via-blue-50/40 to-indigo-100/40",
      border: "border-sky-200 hover:border-sky-400",
      badgeBg: "bg-sky-100 text-sky-900 border-sky-300",
      badgeText: "text-sky-900",
      accent: "text-sky-700",
      glow: "hover:shadow-sky-100/80",
    },
    iconName: "Sun",
  },
  {
    id: 3,
    number: "03",
    title: "Control the Mind",
    subtitle: "Manas — Transforming the mind from enemy to greatest ally",
    summary:
      "The mind can become your greatest friend or your greatest enemy. Through discipline, meditation and awareness, we can become less controlled by fear, anger, desire and attachment.",
    fullExplanation: [
      "Arjuna asks Krishna: 'The mind is restless, turbulent, obstinate and very strong. Controlling it seems as difficult as holding back the wind.'",
      "Krishna responds with immense compassion: 'Undoubtedly, the mind is restless and difficult to curb. But through consistent practice (Abhyasa) and non-attachment (Vairagya), it can certainly be mastered.'",
      "For one who has conquered the mind, it is the best of friends; but for one who has failed to do so, the mind remains the greatest foe."
    ],
    sanskritShloka: {
      verse: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥",
      transliteration: "Asaṁśhayaṁ mahā-bāho mano durnigrahaṁ chalam | abhyāsena tu kaunteya vairāgyeṇa cha gṛihyate ||",
      translation: "Lord Krishna said: O mighty-armed son of Kunti, the mind is indeed restless and hard to master, but by persistent practice and detachment, it can be brought under control.",
      reference: "Bhagavad Gita — Chapter 6, Verse 35"
    },
    modernApplication:
      "Practice daily moments of mindful pause, breath awareness, and digital decluttering. Treat mental chatter as passing weather rather than unquestioned absolute reality.",
    keyTakeaways: [
      "Mastery of mind is built step-by-step through gentle daily practice.",
      "An undisciplined mind reacts instinctively; a disciplined mind chooses consciously.",
      "Patience and non-judgment are essential companions in self-observation."
    ],
    themeColor: {
      bg: "bg-emerald-50/80",
      cardBg: "bg-gradient-to-br from-emerald-50/90 via-teal-50/40 to-green-100/40",
      border: "border-emerald-200 hover:border-emerald-400",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
      badgeText: "text-emerald-900",
      accent: "text-emerald-700",
      glow: "hover:shadow-emerald-100/80",
    },
    iconName: "Shield",
  },
  {
    id: 4,
    number: "04",
    title: "Stay Balanced",
    subtitle: "Samata — Equanimity through triumph and adversity",
    summary:
      "Do not become excessively excited by success or devastated by failure. Develop Samata — equanimity, remaining steady through life's ups and downs.",
    fullExplanation: [
      "Equanimity (Samata) is defined by Krishna as the true definition of Yoga: 'Samatvaṁ yoga ucyate' — Evenness of mind is Yoga.",
      "Just as the ocean remains deep, still, and undisturbed while continuous rivers flow into it, a person of steady wisdom remains calm while sensations and circumstances rise and fall.",
      "Balanced living does not mean suppressing emotions or becoming cold; it means cultivating an unshakeable inner anchor that prevents external storms from capsizing your spirit."
    ],
    sanskritShloka: {
      verse: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
      transliteration: "Yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya | siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga uchyate ||",
      translation: "Be steadfast in Yoga, O Arjuna. Perform your duty without attachment, remaining even-minded in success and failure. Such equanimity is called Yoga.",
      reference: "Bhagavad Gita — Chapter 2, Verse 48"
    },
    modernApplication:
      "When praised, stay humble and thankful; when criticized, reflect calmly without crumbling. Notice the natural waves of emotional highs and lows without being swept away.",
    keyTakeaways: [
      "Cultivate the quiet center of the wheel that stays still as the rim turns.",
      "True strength is emotional resilience, not emotional numbness.",
      "Balance preserves energy and fosters long-term clarity."
    ],
    themeColor: {
      bg: "bg-purple-50/80",
      cardBg: "bg-gradient-to-br from-purple-50/90 via-fuchsia-50/40 to-indigo-100/40",
      border: "border-purple-200 hover:border-purple-400",
      badgeBg: "bg-purple-100 text-purple-900 border-purple-300",
      badgeText: "text-purple-900",
      accent: "text-purple-700",
      glow: "hover:shadow-purple-100/80",
    },
    iconName: "Scale",
  },
  {
    id: 5,
    number: "05",
    title: "Follow Your Dharma",
    subtitle: "Svadharma — Honoring your unique vocation and ethical duty",
    summary:
      "Dharma means living according to your responsibilities and ethical principles. Krishna encourages Arjuna to fulfill his responsibility rather than abandoning it because of fear or confusion.",
    fullExplanation: [
      "Krishna highlights that it is far better to perform one's own natural duty (Svadharma), even imperfectly, than to attempt someone else's duty with artificial imitation.",
      "Each individual possesses a unique blend of natural temperament, gifts, context, and societal responsibility. Fulfilling that role with integrity creates harmony within and without.",
      "Arjuna's temptation to flee the battlefield was not genuine renunciation, but emotional escapism. True courage lies in standing up for justice in the place life has positioned you."
    ],
    sanskritShloka: {
      verse: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
      transliteration: "Śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt | sva-dharme nidhanaṁ śhreyaḥ para-dharmo bhayāvahaḥ ||",
      translation: "It is far better to execute one's own natural duty, even if imperfectly, than to perform another’s duty perfectly. Death in one’s own duty is auspicious, but pursuing another's path is fraught with danger.",
      reference: "Bhagavad Gita — Chapter 3, Verse 35"
    },
    modernApplication:
      "Do not measure your life by someone else's timeline or career playbook. Embrace your own calling, responsibilities to family and community, and act with authentic courage.",
    keyTakeaways: [
      "Discover and honor your unique purpose and gifts.",
      "Avoid comparing your internal journey to external highlights of others.",
      "Integrity is choosing duty and ethical action over easy escapism."
    ],
    themeColor: {
      bg: "bg-rose-50/80",
      cardBg: "bg-gradient-to-br from-rose-50/90 via-pink-50/40 to-orange-100/40",
      border: "border-rose-200 hover:border-rose-400",
      badgeBg: "bg-rose-100 text-rose-900 border-rose-300",
      badgeText: "text-rose-900",
      accent: "text-rose-700",
      glow: "hover:shadow-rose-100/80",
    },
    iconName: "Compass",
  },
  {
    id: 6,
    number: "06",
    title: "Different Paths Can Lead Toward the Divine",
    subtitle: "Yoga Marga — Plurality of spiritual paths for every seeker",
    summary:
      "The Gita describes several approaches: Karma Yoga (selfless action), Jnana Yoga (knowledge), Bhakti Yoga (devotion), and Dhyana (meditation).",
    fullExplanation: [
      "The Bhagavad Gita is celebrated for its profound inclusiveness and spiritual synthesis. It acknowledges that human temperaments differ: some are intellectual, some emotional, some action-oriented, and some contemplative.",
      "Lord Krishna assures Arjuna that whoever seeks the ultimate truth through sincere practice, regardless of the chosen avenue, will attain realization.",
      "These paths are not conflicting dogmas, but complementary streams flowing into the same limitless ocean of truth."
    ],
    sanskritShloka: {
      verse: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्।\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः॥",
      transliteration: "Ye yathā māṁ prapadyante tāṁs tathaiva bhajāmy aham | mama vartmānuvartante manuṣhyāḥ pārtha sarvaśhaḥ ||",
      translation: "In whatever way people surrender unto Me, I reward them accordingly. Everyone follows My path in all respects, O son of Pritha.",
      reference: "Bhagavad Gita — Chapter 4, Verse 11"
    },
    modernApplication:
      "Respect your own temperament: engage in selfless contribution if you are active, study philosophy if you are analytical, cultivate gratitude if you are devotional, and meditate if you seek quiet reflection.",
    keyTakeaways: [
      "Truth has many doorways adapted to different human personalities.",
      "Sincerity of heart and effort matter more than rigid external forms.",
      "Integrate service, study, devotion, and stillness into your routine."
    ],
    themeColor: {
      bg: "bg-teal-50/80",
      cardBg: "bg-gradient-to-br from-teal-50/90 via-emerald-50/40 to-cyan-100/40",
      border: "border-teal-200 hover:border-teal-400",
      badgeBg: "bg-teal-100 text-teal-900 border-teal-300",
      badgeText: "text-teal-900",
      accent: "text-teal-700",
      glow: "hover:shadow-teal-100/80",
    },
    iconName: "Layers",
    tags: ["Karma Yoga", "Jnana Yoga", "Bhakti Yoga", "Dhyana"],
  },
  {
    id: 7,
    number: "07",
    title: "See the Divine in All Beings",
    subtitle: "Sarva-Bhuta-Hite-Ratah — Universal unity & boundless compassion",
    summary:
      "Krishna teaches that the same ultimate reality is present in all beings. This encourages compassion, humility and reduced attachment to ego.",
    fullExplanation: [
      "The wise person endowed with spiritual vision sees the identical divine essence in a learned scholar, an animal, a gentle friend, or an outcast.",
      "When we pierce beyond external labels, wealth, titles, species, and superficial differences, we see the sacred thread of consciousness connecting all of creation.",
      "This vision dissolves prejudice, hostility, and cruelty, naturally inspiring a lifestyle centered on universal goodwill (Lokasamgraha)."
    ],
    sanskritShloka: {
      verse: "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि।\nईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः॥",
      transliteration: "Sarva-bhūta-stham ātmānaṁ sarva-bhūtāni chātmani | īkṣhate yoga-yuktātmā sarvatra sama-darśhanaḥ ||",
      translation: "The person united with the Divine sees the Self in all beings, and all beings in the Self, regarding everything with an equal eye.",
      reference: "Bhagavad Gita — Chapter 6, Verse 29"
    },
    modernApplication:
      "Practice empathy before judgment. Treat service workers, colleagues, strangers, and nature with the same reverence and dignity you extend to your closest loved ones.",
    keyTakeaways: [
      "Recognize the shared spark of consciousness in every living being.",
      "Dissolve divisive 'us vs them' mental boundaries.",
      "Kindness is the natural expression of spiritual wisdom."
    ],
    themeColor: {
      bg: "bg-indigo-50/80",
      cardBg: "bg-gradient-to-br from-indigo-50/90 via-blue-50/40 to-violet-100/40",
      border: "border-indigo-200 hover:border-indigo-400",
      badgeBg: "bg-indigo-100 text-indigo-900 border-indigo-300",
      badgeText: "text-indigo-900",
      accent: "text-indigo-700",
      glow: "hover:shadow-indigo-100/80",
    },
    iconName: "HeartHandshake",
  },
  {
    id: 8,
    number: "08",
    title: "Surrender to the Divine",
    subtitle: "Sharanagati — Trusting the greater cosmic intelligence",
    summary:
      "Surrender does not mean giving up. It means acting with trust while continuing to fulfill one's duty.",
    fullExplanation: [
      "In the culminating verses of the Gita (18.66), Krishna reveals the deepest secret of peace: after having engaged your full faculties and fulfilled your duties, surrender all anxiety into the hands of the Divine.",
      "Spiritual surrender (Sharanagati) is not passive resignation or fatalism. It is the active release of egotistical control, placing deep faith in cosmic order (Rta).",
      "When we relinquish the exhausting burden of trying to micro-manage the entire universe, our hearts find supreme rest, fearlessness, and clarity."
    ],
    sanskritShloka: {
      verse: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
      transliteration: "Sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja | ahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ ||",
      translation: "Abandon all varieties of anxieties and simply surrender unto Me alone. I shall liberate you from all distress; do not grieve.",
      reference: "Bhagavad Gita — Chapter 18, Verse 66"
    },
    modernApplication:
      "Give your absolute best in what is within your control, and peacefully let go of what is outside your power. Walk into life with calm trust rather than fearful friction.",
    keyTakeaways: [
      "Surrender is the highest form of courage and inner freedom.",
      "Release the illusory burden of having to control everything.",
      "Live with peace, knowing you are supported by cosmic wisdom."
    ],
    themeColor: {
      bg: "bg-amber-50/90",
      cardBg: "bg-gradient-to-br from-amber-50/90 via-yellow-50/40 to-orange-100/40",
      border: "border-amber-300 hover:border-amber-500",
      badgeBg: "bg-amber-200 text-amber-950 border-amber-400",
      badgeText: "text-amber-950",
      accent: "text-amber-800",
      glow: "hover:shadow-amber-200/80",
    },
    iconName: "Crown",
  },
];

export const REFLECTION_QUESTIONS: ReflectionQuestion[] = [
  {
    id: 1,
    teachingId: 1,
    teachingTitle: "Duty & Detachment",
    question: "Am I focusing on the action — or worrying too much about the result?",
    context: "When we shift our attention from future outcomes to the present step, anxiety dissolves and genuine mastery emerges.",
    journalPrompt: "What is one task or goal where you are currently feeling stressed about the outcome? How can you reframe it purely around doing your best today?",
    actionableStep: "Identify the very next practical action you need to take, and do it with full care, without checking metrics or expecting immediate praise."
  },
  {
    id: 2,
    teachingId: 2,
    teachingTitle: "The Eternal Soul",
    question: "Am I letting a temporary crisis define my permanent sense of self?",
    context: "Circumstances, emotions, and physical states change like changing garments. The conscious witness within remains whole and untouched.",
    journalPrompt: "Recall a past difficulty that once felt overwhelming but has now passed. What did that experience teach you about the temporary nature of life's challenges?",
    actionableStep: "Take three deep conscious breaths right now. Remind yourself: 'This situation is changing, but my inner peace is my true sanctuary.'"
  },
  {
    id: 3,
    teachingId: 3,
    teachingTitle: "Mastery of Mind",
    question: "Is my mind acting as my trusted friend, or is it running on runaway autopilot?",
    context: "A disciplined mind responds with wisdom; an uncontrolled mind reacts with fear, impulsiveness, and judgment.",
    journalPrompt: "Which recurring thoughts or worry patterns have drained your energy today? What gentle boundary can you set with your inner self?",
    actionableStep: "Spend 2 minutes observing your thoughts without judging or attaching to them, letting them pass like clouds across the sky."
  },
  {
    id: 4,
    teachingId: 4,
    teachingTitle: "Inner Equanimity",
    question: "How steady am I when unexpected praise or unexpected setbacks arrive?",
    context: "Samata (equanimity) means remaining grounded in your center, refusing to let highs inflate your ego or lows crush your spirit.",
    journalPrompt: "How do you usually react when things don't go according to your exact schedule or expectations? How can you cultivate evenness?",
    actionableStep: "When you receive news today—good or disappointing—pause for 5 seconds before responding, cultivating an anchor of quiet poise."
  },
  {
    id: 5,
    teachingId: 5,
    teachingTitle: "Following Dharma",
    question: "Am I living true to my own authentic responsibilities, or imitating someone else's path?",
    context: "Following your own unique duty (Svadharma) with sincerity brings alignment and deep fulfillment, even if the road is challenging.",
    journalPrompt: "What are your core responsibilities to your family, community, and craft that you truly value? Are you giving them the dedication they deserve?",
    actionableStep: "Choose one obligation you have been putting off out of hesitation and complete it with honor and wholehearted dedication."
  },
  {
    id: 6,
    teachingId: 6,
    teachingTitle: "Paths of Yoga",
    question: "Which spiritual path resonates most with my natural temperament right now?",
    context: "Whether through selfless work (Karma), intellectual inquiry (Jnana), loving devotion (Bhakti), or silent contemplation (Dhyana), all paths lead to truth.",
    journalPrompt: "Do you feel most aligned when helping others, contemplating deep philosophical questions, expressing heartfelt gratitude, or sitting in silence?",
    actionableStep: "Incorporate 10 minutes of your favorite practice into your morning or evening routine today."
  },
  {
    id: 7,
    teachingId: 7,
    teachingTitle: "Universal Unity",
    question: "Can I see past someone's difficult exterior and recognize our shared humanity?",
    context: "The same divine light shines in every living being. When we see unity, kindness becomes our spontaneous nature.",
    journalPrompt: "Is there a person you find challenging or friction-filled? What happens if you look beyond their surface behavior to their fundamental humanity?",
    actionableStep: "Offer a sincere word of encouragement, a silent blessing, or a gesture of generosity to someone in your daily circle."
  },
  {
    id: 8,
    teachingId: 8,
    teachingTitle: "Peaceful Surrender",
    question: "Have I done my honest best and can I now trust the larger flow of life?",
    context: "True surrender is the release of anxious micromanagement, allowing cosmic intelligence to carry what is beyond human control.",
    journalPrompt: "What burden are you trying to carry entirely alone? What would it feel like to offer it up with calm trust?",
    actionableStep: "Speak the ancient intention inwardly: 'I have done my part with sincerity. The outcome rests in peace.'"
  }
];

export const YOGA_PATHS: YogaPath[] = [
  {
    id: "karma",
    name: "Karma Yoga",
    sanskritName: "कर्म योग",
    meaning: "The Path of Selfless Action",
    emoji: "🪷",
    summary: "Dedicate your everyday actions to the greater good without craving personal fruit or recognition.",
    description: "Karma Yoga transforms work into worship. Instead of acting purely for self-aggrandizement, the practitioner acts with skill, diligence, and service, offering the results to the welfare of all beings.",
    corePractice: "Conscious service, mindful work ethic, and relinquishing selfish motives in daily tasks.",
    idealFor: "Active individuals, creators, builders, and community leaders who thrive in doing.",
    keyVerse: "योगः कर्मसु कौशलम् (Yogaḥ karmasu kauśhalam)",
    keyVerseTranslation: "Yoga is supreme skill and excellence in action.",
    color: {
      badge: "bg-amber-100 text-amber-900 border-amber-300",
      border: "border-amber-200 hover:border-amber-400",
      accent: "text-amber-700",
      lightBg: "bg-amber-50/70",
    }
  },
  {
    id: "jnana",
    name: "Jnana Yoga",
    sanskritName: "ज्ञान योग",
    meaning: "The Path of Knowledge & Wisdom",
    emoji: "📖",
    summary: "Discern the eternal reality of consciousness from the temporary illusions of material existence.",
    description: "Jnana Yoga utilizes philosophical inquiry, critical reflection (Viveka), and scriptural study to transcend ignorance. It dissolves identification with the limited ego and reveals the immortal witness within.",
    corePractice: "Self-inquiry, contemplation of sacred texts, studying the nature of awareness, and philosophical discernment.",
    idealFor: "Thinkers, scholars, analytical minds, and seekers driven by deep philosophical curiosity.",
    keyVerse: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते (Na hi jñānena sadṛiśhaṁ pavitram iha vidyate)",
    keyVerseTranslation: "In this world, there is nothing so sublime and purifying as true knowledge.",
    color: {
      badge: "bg-sky-100 text-sky-900 border-sky-300",
      border: "border-sky-200 hover:border-sky-400",
      accent: "text-sky-700",
      lightBg: "bg-sky-50/70",
    }
  },
  {
    id: "bhakti",
    name: "Bhakti Yoga",
    sanskritName: "भक्ति योग",
    meaning: "The Path of Devotion & Love",
    emoji: "❤️",
    summary: "Channel your emotions into pure love, heartfelt gratitude, and unconditional surrender to the Divine.",
    description: "Bhakti Yoga is the tender path of the heart. By cultivating reverence, kirtan (chanting), prayer, and love for God in all forms, emotional turbulence is transmuted into transcendent bliss and universal affection.",
    corePractice: "Chanting, heartfelt prayer, gratitude rituals, singing sacred hymns, and seeing the beloved in all beings.",
    idealFor: "Emotional, heart-centered seekers, artists, poets, and lovers of divine grace.",
    keyVerse: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति (Patraṁ puṣhpaṁ phalaṁ toyaṁ yo me bhaktyā prayachchhati)",
    keyVerseTranslation: "Whoever offers Me with love even a leaf, a flower, a fruit, or water, I accept with immense joy.",
    color: {
      badge: "bg-rose-100 text-rose-900 border-rose-300",
      border: "border-rose-200 hover:border-rose-400",
      accent: "text-rose-700",
      lightBg: "bg-rose-50/70",
    }
  },
  {
    id: "dhyana",
    name: "Dhyana Yoga",
    sanskritName: "ध्यान योग",
    meaning: "The Path of Meditation & Stillness",
    emoji: "🧘",
    summary: "Quiet the senses and steady the breath to experience the serene depths of inner consciousness.",
    description: "Dhyana (or Raja) Yoga is the classical path of breath regulation (Pranayama), seated stillness, and one-pointed mental concentration. As thoughts subside, the practitioner rests in pure, unconditioned awareness.",
    corePractice: "Silent meditation, rhythmic breathing, posture stability, sensory withdrawal, and inner visualization.",
    idealFor: "Meditators, introspective practitioners, and those seeking mental tranquility and focus.",
    keyVerse: "यथो दीपो निवातस्थो नेङ्गते सोपमा स्मृता (Yathā dīpo nivāta-stho neṅgate sopamā smṛitā)",
    keyVerseTranslation: "Just as a lamp in a windless place does not flicker, so is the steady mind of a Yogi disciplined in meditation.",
    color: {
      badge: "bg-purple-100 text-purple-900 border-purple-300",
      border: "border-purple-200 hover:border-purple-400",
      accent: "text-purple-700",
      lightBg: "bg-purple-50/70",
    }
  }
];

export const DIALOGUE_INSIGHTS = {
  arjunaDilemma:
    "On the sacred battlefield of Kurukshetra, Prince Arjuna stood between two great armies, overwhelmed by despondency, confusion, and the agony of facing his beloved teachers and kin in battle.",
  krishnaGuidance:
    "Lord Krishna, acting as his charioteer and divine friend, did not simply demand blind obedience. Instead, He delivered an expansive philosophical masterclass—illuminating the nature of life, duty, consciousness, and liberation, guiding Arjuna from paralyzing doubt to purposeful action.",
  coreMessage:
    "The Kurukshetra battlefield is also a metaphor for the daily battlefield of the human mind, where doubts, desires, and fears clash with our higher calling and duty."
};
