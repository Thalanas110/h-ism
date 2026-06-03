export interface Poem {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  stanzas: { label: string; lines: string[] }[];
}

const s = (label: string, text: string) => ({
  label,
  lines: text.trim().split("\n").map((l) => l.trim()),
});

export const poems: Poem[] = [
  {
    id: "lonely-day",
    numeral: "I",
    title: "A Lonely Day",
    subtitle: "Where silent winters slowly melt away",
    stanzas: [
      s("Stanza 1", `The evening sky was colorless, the streets were cold and gray,
While every passing stranger seemed already intertwined.
I walked beneath a hollow dusk that swallowed light away,
And wondered if my destined soul was somewhere left behind.`),
      s("Stanza 2", `The clocks became artillery that shelled my weary chest,
Each second like a mortar round against the walls of thought.
I told myself that solitude was safer than the rest,
Yet still I dreamed of finding what the lonely warfare sought.`),
      s("Stanza 3", `The sleepless nights were trenches where I buried silent fears,
While ghostly echoes marched across the ruins of my mind.
I measured time in shattered hopes and half-forgotten years,
Convinced that love was something fate had never truly signed.`),
      s("Stanza 4", `Then somewhere through the static of a random crowded place,
A doorway softly opened in the chaos of the day.
I entered TGD by chance without a map to trace,
Unaware my silent winter soon would slowly melt away.`),
      s("Stanza 5", `At first it was just conversations drifting through the air,
Like distant lanterns glowing in the darkened halls of night.
But every word I stumbled through revealed that people cared,
And little by little, empty skies were filling up with light.`),
      s("Stanza 6", `The snowball rolled so suddenly I barely understood,
How strangers turned to comrades through the passing of the hours.
The lonely forests of my soul once lifeless where I stood,
Now bloomed with human voices like awakening spring flowers.`),
      s("Stanza 7", `Yet still beyond the warmth remained the thunder of the war,
The Thesis front still raging with its iron claws unsheathed.
I fought through endless smoke beneath its unforgiving roar,
With sleepless nights and burning lungs that barely ever breathed.`),
      s("Stanza 8", `But now the cold feels different from the emptiness before,
For somewhere through the noise exists a reason to endure.
And though the war still calls my name from every shattered shore,
I march ahead believing that tomorrow may be pure.`),
    ],
  },
  {
    id: "jzreine-kronelle",
    numeral: "II",
    title: "Jzreine Kronelle",
    subtitle: "A name like candlelight in rain",
    stanzas: [
      s("Stanza 1", `A friend of mine once spoke your name like candlelight in rain,
A fragile little whisper drifting softly through the dark.
I did not know that single sound would rearrange my brain,
Or carve upon my restless chest a permanent bright mark.`),
      s("Stanza 2", `I heard about the sorrow that another man had made,
How trust became a battlefield consumed by hidden flames.
The one who should have guarded you instead became the blade,
And left behind the smoke of ruined promises and names.`),
      s("Stanza 3", `I recognized that kind of wound because I wore it too,
The sort that stains the quiet parts no sunlight ever sees.
A heart can still keep beating while completely split in two,
Like dying winter forests standing hollow with the trees.`),
      s("Stanza 4", `So when I looked toward you, I hesitated out of fear,
Not weakness, but the knowledge every war demands a cost.
I feared becoming one more ghost that disappeared sincere,
Or accidentally hurting what was already deeply lost.`),
      s("Stanza 5", `I kept my distance carefully like soldiers near a mine,
Measuring every movement with unbearable restraint.
Yet every passing conversation crossed another line,
Until resistance slowly faded thinner than it ain't.`),
      s("Stanza 6", `Then something in my chest declared the silence had to end,
For some offensives never come unless you dare advance.
And maybe fate had brought me not just someone, but a friend,
Whose orbit slowly pulled my soul into a reckless dance.`),
      s("Stanza 7", `So step by step I moved ahead despite the shaking ground,
Unsure if hope would greet me or another brutal scar.
But every little reassurance made a stronger sound,
Like distant radios confirming allies from afar.`),
      s("Stanza 8", `And though the Thesis cannons still continue to ignite,
And every day still feels consumed by pressure without end,
I chose at last to raise my weary banner toward the light,
Because some hearts are worth the risk of learning how to mend.`),
    ],
  },
  {
    id: "stars-of-the-starts",
    numeral: "III",
    title: "Stars of the Starts",
    subtitle: "Constellations crossing through the dark",
    stanzas: [
      s("Stanza 1", `At first my words were structured like a briefing before war,
Cold facts and careful evidence arranged in perfect lines.
I treated every sentence like a locked steel armored door,
Protecting all the softer things concealed beneath the signs.`),
      s("Stanza 2", `Yet slowly through the conversations something shifted deep,
The formal walls grew weaker with each softly passing day.
The reassurances we traded lost the distance they would keep,
And warmth began appearing in the things we'd never say.`),
      s("Stanza 3", `Then little moments multiplied like sparks across the sky,
Small accidents of timing that felt strangely far too true.
A thought I held would reappear before it could even die,
As though some hidden constellation somehow guided you.`),
      s("Stanza 4", `And when at last I heard your voice, the silence broke apart,
The static in my weary chest dissolved beneath its glow.
It carried something gentle that moved deeper than my heart,
A kind of peace the broken parts of me had ceased to know.`),
      s("Stanza 5", `Your humility already made me slowly start to fall,
The quiet kind of beauty pride could never imitate.
But hearing you transformed the feeling into something tall,
Like watching distant stars align according to their fate.`),
      s("Stanza 6", `Every movement somehow clicked like gears already meant to turn,
Every topic found a rhythm neither side had planned before.
The smallest things became the brightest things for me to learn,
As if our souls kept recognizing echoes at the core.`),
      s("Stanza 7", `I noticed how the ordinary moments gained a flame,
How even simple greetings carried gravity and weight.
And somewhere in the middle of repeatedly your name,
I realized my guarded heart had quietly changed state.`),
      s("Stanza 8", `Now every night the stars above remind me of those starts,
The fragile early moments that became a living fire.
Two wandering constellations crossing through the darkened hearts,
Until coincidence itself transformed into desire.`),
    ],
  },
  {
    id: "disaster",
    numeral: "IV",
    title: "Disaster",
    subtitle: "Embers carried through the storm",
    stanzas: [
      s("Stanza 1", `The morning moved too quietly before the fracture came,
Like glass pretending permanence beneath a thinning light.
I carried hidden worlds inside a carefully locked frame,
Unaware one careless second could ignite the night.`),
      s("Stanza 2", `Then suddenly the air itself grew heavier than stone,
As circling shadows gathered where my silence used to sleep.
A thousand watching eyes transformed the ordinary known,
Into a battlefield where guarded truths no longer keep.`),
      s("Stanza 3", `My pulse became artillery collapsing inward fast,
Each heartbeat like a siren buried deep beneath the skin.
And every wall I built to hide the ruins of the past,
Cracked open all at once and let the chaos flooding in.`),
      s("Stanza 4", `The noise spread through the hallways like a wildfire chasing air,
Turning whispers into storms too violent to outrun.
Even distant towers shifted, watching carefully from there,
As though the heavens themselves noticed what had just begun.`),
      s("Stanza 5", `I drove beneath a dying sky that bled through streaks of rain,
The roads becoming rivers underneath my shaking hands.
Then fate delivered silence sharpened colder than the pain,
And split the earth beneath us into separate lonely lands.`),
      s("Stanza 6", `The night was not content with taking only half away,
It searched through every fragile thing still hidden out of sight.
Locked vaults burst open carelessly before the break of day,
And private constellations drowned beneath exposing light.`),
      s("Stanza 7", `Now walls rose high around us from the worlds beyond our reach,
Like kingdoms forcing borders through the center of our skies.
Yet somehow through the static and the distance after each,
Your voice still found the broken parts no silence could disguise.`),
      s("Stanza 8", `So we became like smugglers carrying embers through the storm,
Passing warmth between our hands where colder winds would roam.
And though the world around us forced a harsher, stranger form,
We learned some hearts can still survive while far away from home.`),
    ],
  },
  {
    id: "shape-of-your-absence",
    numeral: "V",
    title: "The Shape of Your Absence",
    subtitle: "Longing as proof of love",
    stanzas: [
      s("Stanza 1", `There is a silence now that even midnight cannot hide,
A hollow stretching wider than the distance in the skies.
The world still turns exactly as it always has outside,
Yet everything feels incomplete beneath my weary eyes.`),
      s("Stanza 2", `I never knew a person could become like breathing air,
So natural you only feel the loss when it is gone.
Now every hour collapses underneath the weight you're not there,
Like shattered cathedrals grieving after all the faith has gone.`),
      s("Stanza 3", `I miss the gravity your presence carried without force,
The quiet way you softened storms before they fully grew.
You never needed brilliance just to alter every course,
Because the calmest stars are often still the strongest view.`),
      s("Stanza 4", `And God, your voice—
It lingers like the last light leaving stained cathedral glass,
A softness that could pull exhausted soldiers from the war.
Even now I hear its echoes every time the evenings pass,
And every echo only makes me crave its warmth far more.`),
      s("Stanza 5", `I miss the smallest things the deepest, not the grand displays,
The pauses in between the words where tenderness would stay.
The little reassurances disguised as passing phrases,
That somehow stitched my fractured soul together day by day.`),
      s("Stanza 6", `You became woven into corners of my ordinary life,
Into songs, into roads, into skies before the rain.
Now every familiar place feels sharpened like a knife,
Because each memory of you arrives attached to pain.`),
      s("Stanza 7", `There are moments I instinctively reach out before I think,
As though some part of me still fully believes you're near.
Then reality returns and everything begins to sink,
Like drowning ships discovering the shoreline disappeared.`),
      s("Stanza 8", `Even victories feel quieter without your unseen smile,
The Thesis war itself now echoes emptier than before.
For what is conquering kingdoms if it takes a thousand miles,
To hear the one voice that made survival worth the war?`),
      s("Stanza 9", `And still, despite the ache becoming heavier each night,
I would choose this love again even knowing what it costs.
Because loving you has shown me there exists a greater light,
Than merely living safely never mourning what was lost.`),
      s("Stanza 10", `So if the universe insists on stretching space and time,
And places walls between the souls that desperately belong,
Then let my longing stand as proof your existence changed mine,
For absence only deepens where the love was always strong.`),
    ],
  },
  {
    id: "oath-beneath-the-ruins",
    numeral: "VI",
    title: "The Oath Beneath the Ruins",
    subtitle: "Love that chose, against the storm",
    stanzas: [
      s("Stanza 1", `The storm arrived intending to erase what we became,
To bury us beneath the pressure neither side could flee.
It tore through every fragile bridge and set the skies aflame,
As though the world itself refused the thought of "you and me."`),
      s("Stanza 2", `The walls around us hardened into iron, fear, and doubt,
Entire worlds conspiring to force our hands apart.
And there were nights the weight became so difficult throughout,
I thought the strain alone might finally split my heart.`),
      s("Stanza 3", `Yet somehow in the middle of the ruin and collapse,
Your soul still reached for mine through every trembling darkened space.
Like distant lighthouse signals hidden deep between the gaps,
You found me even when the night erased each familiar place.`),
      s("Stanza 4", `People think love is measured only in the gentle days,
In easy mornings untouched by the cruelty of the rain.
But real love reveals itself when everything decays,
And two exhausted hearts still choose each other through the pain.`),
      s("Stanza 5", `There were fears I never spoke because they cut too deep to name,
The terror of another loss too catastrophic to survive.
I carried ghosts from older wars still burning without flame,
Afraid that one more heartbreak would leave nothing left alive.`),
      s("Stanza 6", `But you—
You stood there anyway beside the wreckage and the fire,
Not asking me for perfection, certainty, or peace.
And slowly through your patience rose something far higher,
A love that did not weaken once the easy moments ceased.`),
      s("Stanza 7", `I cannot promise futures untouched by suffering or scars,
Because life has taught me storms can form without a sound.
I cannot swear the road ahead will not leave wounds on hearts,
Or guarantee the earth itself will never shake the ground.`),
      s("Stanza 8", `But there is one truth deeper than the fear inside my chest:
When everything collapses, I will still remain beside you.
Not because staying's simple, nor because the path is blessed,
But because somewhere along the way my soul decided you.`),
      s("Stanza 9", `So let the heavens test us with impossible long nights,
And let the distance sharpen every weakness into steel.
For every battle faced together teaches broken lights,
That even shattered stars still burn with something fiercely real.`),
      s("Stanza 10", `And if one day we stand at last beyond this endless war,
Past every barricade the world attempted to impose,
I think we'll look behind us at the ruins we endured,
And realize love survived precisely because it chose.`),
    ],
  },
  {
    id: "sealed-away",
    numeral: "VII",
    title: "Sealed Away",
    subtitle: "A heart that slowly found its peace in you",
    stanzas: [
      s("Stanza 1", `There was a time I sealed my heart away,
Convinced that love would only end in pain someday,
So I built walls no tenderness could move,
And taught myself that solitude would do.`),
      s("Stanza 2", `I carried silence like a trusted shield,
Hiding the wounds I never let revealed,
Pretending I no longer cared to feel,
While broken parts inside refused to heal.`),
      s("Stanza 3", `Yet fate is strange in ways we cannot see,
For slowly, you began affecting me,
Not like a storm that tears the world apart,
But like soft rain reviving dying hearts.`),
      s("Stanza 4", `You never forced your presence into mine,
Nor crossed the guarded borders of my mind,
Yet every little moment spent with you
Made weary skies regain a gentler blue.`),
      s("Stanza 5", `And soon your voice would linger in my days,
Remaining long after you went away,
Like some sweet melody that softly grows
Until it echoes everywhere it goes.`),
      s("Stanza 6", `Perhaps that was the moment fear began:
The day my guarded soul no longer ran,
For every wall I swore would never again fall,
Began to crack the moment you would call.`),
      s("Stanza 7", `Because I know too well what heartbreak means,
The quiet ruin that was hidden underneath,
How trust can vanish faster than the light
And leave behind a never-ending night.`),
      s("Stanza 8", `Still, even knowing all that could go wrong,
My heart kept pulling helplessly along,
Like wandering tides returning to the sea,
No matter how they fight their destiny.`),
      s("Stanza 9", `You became warmth within my coldest days,
A steady light that would not fade away,
And somehow life no longer felt so gray
Whenever thoughts of you would find their way.`),
      s("Stanza 10", `This was not some fleeting spark to pass,
Nor fragile feelings never built to last,
But something calm and steady, deep and true,
A quiet certainty that pointed you.`),
      s("Stanza 11", `And now these hidden words grow hard to bear,
For silence only deepens my despair,
Each passing day becoming harder still
To hide the truth my restless heart now feels.`),
      s("Stanza 12", `I do not know what waits for us ahead,
What roads we'll walk or where our paths are led,
But one thing has become so purely true:
My heart has slowly found its peace in you.`),
      s("Stanza 13", `So here I stand with nothing left to hide,
No guarded mask, no armor left inside,
Just every fragile feeling I once knew
Now leading all my hopeful thoughts to you.`),
      s("Stanza 14", `Amidst all of this, I lay my heart bare,
A quiet longing, fragile and rare,
So take this as my asking, soft and low:
To be the one who courts you, forever and ever.`),
    ],
  },
];
