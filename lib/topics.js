// Canonical topic taxonomy — normalizes the messy raw category strings
// (73× "AI", "AI Industry", "AI Business", ...) into 8 clean beats.

export const TOPICS = [
  'Chips',
  'Models',
  'Capital',
  'Policy',
  'Infrastructure',
  'Robots',
  'Applications',
  'Analysis',
]

export const TOPIC_COLORS = {
  Chips: 'var(--cat-chips)',
  Models: 'var(--cat-models)',
  Capital: 'var(--accent)',
  Policy: 'var(--fg)',
  Infrastructure: 'var(--cat-compute)',
  Robots: 'var(--cat-robotics)',
  Applications: 'var(--cat-apps)',
  Analysis: 'var(--muted)',
}

const DIRECT_MAP = {
  'AI Hardware': 'Chips',
  'Semiconductors': 'Chips',
  'Semiconductor & Infrastructure': 'Chips',
  'Chips & Infrastructure': 'Chips',
  'AI Infrastructure': 'Infrastructure',
  'AI Policy & Infrastructure': 'Infrastructure',
  'AI Policy': 'Policy',
  'AI Policy & Security': 'Policy',
  'AI Geopolitics': 'Policy',
  'AI Safety': 'Policy',
  'AI Security': 'Policy',
  'Global AI Competition': 'Policy',
  'AI Strategy': 'Policy',
  'AI Business': 'Capital',
  'AI Industry': 'Capital',
  'AI Industry & Market': 'Capital',
  'Market Intelligence': 'Capital',
  'Industry Analysis': 'Capital',
  'Industry': 'Capital',
  'China AI Business': 'Capital',
  'AI Ecosystem': 'Capital',
  'Consumer AI & Platforms': 'Applications',
  'AI Models': 'Models',
  'Model Releases': 'Models',
  'AI Technology': 'Models',
  'AI Models & Technology': 'Models',
  'Technical Analysis': 'Models',
  'AI Robotics': 'Robots',
  'Embodied AI': 'Robots',
  'Embodied AI & Robotics': 'Robots',
  'AI & Robotics': 'Robots',
  'AI Applications': 'Applications',
  'AI Chatbots': 'Applications',
  'Healthcare AI': 'Applications',
  'AI Entertainment': 'Applications',
  'AI Video': 'Applications',
  'AI Video & Creative': 'Applications',
}

// Generic buckets that carry no information — infer from the headline instead
const GENERIC = /^(ai|artificial intelligence|ai trends|analysis)$/i

const TITLE_RULES = [
  [/robot|humanoid|embodied|unitree|dexterous|tactile|electronic skin/i, 'Robots'],
  [/chip|gpu|npu|ascend|semiconductor|cambricon|moore threads|nvidia|hbm|wafer|silicon|smic/i, 'Chips'],
  [/compute|data cent|datacenter|cluster|cloud|supercomput|trillion tokens|tokens per day|token consumption|power crunch|outage|grid/i, 'Infrastructure'],
  [/funding|ipo|valuation|\$|billion|profit|revenue|earnings|invest|raise|capital|market value|stock|bubble/i, 'Capital'],
  [/export control|sanction|regulat|policy|subsid|ban\b|ministr|beijing|security|sovereignt|geopolit|trade war|decoupl/i, 'Policy'],
  [/deepseek|qwen|kimi|glm|minimax|llm|benchmark|open.?weight|model release|flash|parameter|reasoning/i, 'Models'],
  [/app\b|chatbot|video|health|medicin|consumer|smartphone|iphone|agent|weather|on.?device|phone/i, 'Applications'],
]

export function topicOf(post) {
  const cat = (post.category || '').trim()
  if (DIRECT_MAP[cat]) return DIRECT_MAP[cat]
  if (cat && !GENERIC.test(cat)) {
    // Unknown but specific category — closest semantic guess by word overlap
    const lower = cat.toLowerCase()
    if (/chip|hardware|semicond/.test(lower)) return 'Chips'
    if (/robot|embodied/.test(lower)) return 'Robots'
    if (/policy|geopolit|safety|security|competition/.test(lower)) return 'Policy'
    if (/infrastructure|compute/.test(lower)) return 'Infrastructure'
    if (/business|market|industr|capital|ecosystem/.test(lower)) return 'Capital'
    if (/model|technolog|technical/.test(lower)) return 'Models'
    if (/app|chatbot|video|consumer|health|entertainment/.test(lower)) return 'Applications'
  }
  const title = post.title || ''
  for (const [re, topic] of TITLE_RULES) {
    if (re.test(title)) return topic
  }
  return 'Analysis'
}

export function topicCounts(posts) {
  const c = {}
  for (const p of posts) {
    const t = topicOf(p)
    c[t] = (c[t] || 0) + 1
  }
  return c
}
