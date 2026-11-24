export const DATA = {
  id: 'dsh-carpal-tunnel',
  name: '腕管综合征',
  prefix: 'carpal',
  label: '腕管综合征',
  defaultEeriness: 2,
  gain: 0.3,
  flareChance: 0.24,
  flareGain: 16,
  triggerWeight: 1.05,
  flareWeight: 0.85,
  reliefs: [
    { id: 'shake', label: '甩甩手', relief: 16, minutes: 15, calm: 6 },
    { id: 'brace', label: '戴上护腕', relief: 20, minutes: 40, calm: 7 },
    { id: 'ice', label: '冰敷手腕', relief: 12, minutes: 20, calm: 4 },
  ],
  body: {
    stiff: '右手小指有点木，打字慢了一拍。',
    ache: '手腕到手指一片发麻，敲字老是漏一个；半夜会被麻醒。',
    flare: '整只手木得不听使唤，打了几个错字才改过来。',
  },
  voice: {
    base: '允许回复里出现一两个错字、漏字或重复的字母（轻度），别整段乱码。',
    flare: '允许说一句「等我甩甩手」，允许先发一半再补；不要描述神经。',
  },
}
