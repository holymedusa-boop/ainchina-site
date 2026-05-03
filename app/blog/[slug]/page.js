import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import Link from 'next/link'

// SEO Metadata for each article
const postMetadata = {
  'ai-compute-crunch-china-token-crisis-2026': {
    metaTitle: "The Great AI Compute Crunch: How China's AI Boom Is Running Out of Tokens",
    metaDescription: "As DeepSeek V4 and Kimi K2.6 launched in April 2026, China's AI infrastructure hit a wall. Cloud prices surged 5%–463%, APIs failed under agent-driven demand, and Huawei Ascend chips became the unlikely lifeline. Inside the first AI inflation crisis.",
    keywords: 'China AI, AI compute crunch, token shortage, cloud price hike, Huawei Ascend, DeepSeek V4, MiniMax, Kimi K2.6, AI inflation, OpenClaw agent, AI infrastructure, China cloud computing, AI token economy',
  },
  'deepseek-first-funding-20-billion-valuation': {
    metaTitle: "DeepSeek Breaks Its Vow: Inside the $3 Billion Funding Round That Shook China's AI World",
    metaDescription: "DeepSeek's first external funding round at $20B+ valuation marks a strategic shift from bootstrapped research lab to competitive AI company. Analysis of talent exodus, Ascend chip migration, and global implications.",
    keywords: 'DeepSeek, Liang Wenfeng, China AI, AI funding, Huawei Ascend, Tencent, Alibaba, DeepSeek V4, AI talent, Chinese AI companies, DeepSeek valuation, High-Flyer Quant',
  },
  'tars-embodied-intelligence-455-million-brain-club': {
    metaTitle: "Tars Raises $455M: How China's 'Robot Brain' Startup Cracked the Embodied Intelligence Code",
    metaDescription: "Tars (它石智航) shattered China's embodied intelligence funding record with a $455M Pre-A round, led by rare Hillhouse-Sequoia co-investment. Inside the 14-month-old startup building the world's first 'can actually work' general embodied AI model.",
    keywords: 'Tars, 它石智航, embodied intelligence, robot brain, China AI, AWE 3.0, Hillhouse Capital, Sequoia China, humanoid robot, physical AI, China robotics funding, Chen Yilun, general embodied intelligence',
  },
  'minimax-ipo-212-million-users-ai-companion-empire': {
    metaTitle: "MiniMax Files for IPO: How China's AI Companion Empire Built 212 Million Users and Challenged the Global Social Landscape",
    metaDescription: "MiniMax secretly files for IPO on April 23, 2026, revealing 212 million total users and 27.6 million monthly active users. Inside China's most successful AI companion platform and its global expansion through Talkie.",
    keywords: 'MiniMax IPO, Talkie AI, AI companion, China AI, MiniMax users, AI social, 星野, Hailuo AI, AI digital human, China AI出海',
  },
  'deepseek-v4-million-token-china-ai-sovereignty': {
    metaTitle: "DeepSeek V4: The Million-Token API Update That Signals China's AI Sovereignty Shift",
    metaDescription: "DeepSeek quietly updated its API to 1M context window ahead of V4's launch, while announcing its first-ever external funding round. This isn't just a model upgrade—it's China's declaration of AI compute independence.",
    keywords: 'DeepSeek V4, DeepSeek, China AI, AI sovereignty, Huawei Ascend, CANN, CUDA, AI chips, domestic chips, trillion parameter model, million token context, AI compute independence',
  },
  'china-embodied-intelligence-robot-marathon-2026': {
    metaTitle: "China's Embodied Intelligence Breakthrough: When Robots Outrun Humans at the Beijing Half-Marathon",
    metaDescription: "The 2026 Beijing Humanoid Robot Half-Marathon delivered results that shocked observers: robots ran faster than human world champions, achieved 100% finish rates, and demonstrated industrial-grade reliability. Inside the race that proved embodied intelligence has arrived.",
    keywords: 'embodied intelligence, humanoid robot, Beijing robot marathon, China robotics, D-Robotics, Tiangong, AgiBot, GalaxyBot, robot half-marathon, physical AI',
  },
  'bytedance-ai-gamble-gpu-kingpin-profit-drop': {
    metaTitle: "ByteDance's AI Obsession: How a 70% Profit Plunge Turned a Social Media Giant Into China's GPU Kingpin",
    metaDescription: "ByteDance's 2025 net profit dropped over 70% due to massive AI investments, yet Tencent and Alibaba are buying GPUs from their biggest rival. Inside China's most unexpected AI infrastructure deal and what it reveals about the new tech landscape.",
    keywords: 'ByteDance, ByteDance AI investment, Tencent GPU purchase, Alibaba GPU, China AI infrastructure, ByteDance profit decline, NVIDIA H20, China tech rivalry, AI compute race, ByteDance Seed, GPU shortage China, AI arms race, TikTok AI, Doubao, China cloud computing',
  },
  'deepseek-v4-pricing-strategy-analysis': {
    metaTitle: "DeepSeek V4 Pricing Strategy: How $0.14/1M Tokens Is Reshaping the Economics of Frontier AI",
    metaDescription: "DeepSeek V4's radical pricing — Flash at $0.14/1M input tokens, Pro at $1.74/1M — undercuts OpenAI and Anthropic by 10-30x. We analyze the strategy, architecture, and market disruption behind the cheapest frontier-class AI API ever launched.",
    keywords: 'DeepSeek V4, AI API pricing, LLM pricing 2026, DeepSeek pricing strategy, AI cost comparison, MoE architecture, open source AI, Chinese AI pricing',
  },
  'china-ai-global-surge-api-traffic-empire-2026': {
    metaTitle: "China's AI Global Surge: How Chinese Models Captured 61% of Global API Traffic and Built a $180 Billion Empire",
    metaDescription: "Chinese AI models went from under 2% global market share to 61% in just one year. With OpenRouter data showing Chinese models overtaking American API traffic by 4x, MiniMax hitting $1.5B ARR, and Kimi's overseas revenue surpassing domestic — China's AI industry has executed the fastest global technology export in modern history.",
    keywords: 'China AI, Chinese AI models, AI globalization, OpenRouter, MiniMax, DeepSeek, Kimi, AI API traffic, China AI export, AI model pricing, ByteDance Dola, AI agent economy',
  },
  'china-ai-agent-revolution-2026-policy-market': {
    metaTitle: "China's AI Agent Revolution: How 'AI+ Action' Policy and a ¥449 Billion Market Are Turning Chatbots Into Workers",
    metaDescription: "The Politburo's 'AI+ Action' directive, CAICT's ¥449B market forecast, and DeepSeek V4's agent architecture converge to mark China's inflection point from chatbots to autonomous AI workers.",
    keywords: 'China AI Agent, AI+ Action, DeepSeek V4, CAICT white paper, policy, Huawei Ascend, JD.com, Alibaba, ByteDance Coze, enterprise AI, automation, government procurement',
  },
  'kimi-k2-6-open-source-coding-revolution': {
    metaTitle: "Kimi K2.6: How a $18B Chinese Startup Is Rewriting the Rules of Open-Source AI Coding",
    metaDescription: "Moonshot AI's Kimi K2.6 matches GPT-5.5 on SWE-Bench Pro with 300-agent swarm architecture, open weights, and pricing 80% below Western flagships. A deep dive into China's most ambitious AI model.",
    keywords: 'Kimi K2.6, Moonshot AI, open source AI, coding benchmark, agent swarm, Chinese AI, GPT-5.5, Claude Opus, LLM pricing, AI infrastructure',
  },
}

// Parse YAML frontmatter: key: "value" or key: value (handles multi-line)
function parseYamlFrontmatter(text) {
  const result = {}
  const lines = text.split('\n')
  let currentKey = null
  let currentValue = []
  
  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.*)$/)
    if (match) {
      // Save previous multi-line value
      if (currentKey) {
        result[currentKey] = currentValue.join('\n').trim()
      }
      currentKey = match[1]
      let value = match[2].trim()
      // Remove surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      currentValue = [value]
    } else if (currentKey && line.startsWith('  ')) {
      // Continuation of multi-line value (indented)
      currentValue.push(line.trim())
    } else if (currentKey && line.trim()) {
      // Another value line (part of multi-line)
      currentValue.push(line.trim())
    }
  }
  if (currentKey) {
    result[currentKey] = currentValue.join('\n').trim()
  }
  return result
}

// Parse JS export const metadata = {...} format
function parseJsMetadata(raw) {
  const result = {}
  // Extract title: "..." or title: '...'
  const titleMatch = raw.match(/title:\s*["']([^"']+)["']/)
  if (titleMatch) result.title = titleMatch[1]
  
  // Extract description
  const descMatch = raw.match(/description:\s*["']([^"']+)["']/)
  if (descMatch) result.description = descMatch[1]
  
  // Try to extract date from slug or content
  const dateMatch = raw.match(/date:\s*["']([^"']+)["']/)
  if (dateMatch) result.date = dateMatch[1]
  
  return result
}

// Extract title from first markdown heading
function extractTitleFromContent(content) {
  const h1Match = content.match(/^#\s+(.+)$/m)
  if (h1Match) return h1Match[1].trim()
  const boldMatch = content.match(/^\*\*([^*]+)\*\*$/m)
  if (boldMatch) return boldMatch[1].trim()
  return null
}

// Extract date from slug (e.g., "deepseek-v4-pricing-2026-04-30" → "2026-04-30")
function extractDateFromSlug(slug) {
  const dateMatch = slug.match(/(\d{4}-\d{2}-\d{2})/)
  if (dateMatch) return dateMatch[1]
  return null
}

// Read all posts from markdown files
function readPosts() {
  const postsDir = join(process.cwd(), 'content', 'posts')
  const files = readdirSync(postsDir).filter(f => f.endsWith('.md'))
  
  const posts = {}
  for (const file of files) {
    const slug = file.replace('.md', '')
    const raw = readFileSync(join(postsDir, file), 'utf-8')
    
    let meta = {}
    let content = raw
    
    // Case 1: File starts with --- → YAML or JSON frontmatter
    if (raw.trimStart().startsWith('---')) {
      const parts = raw.split('---')
      if (parts.length >= 3) {
        const frontmatter = parts[1].trim()
        content = parts.slice(2).join('---').trim()
        
        // Try JSON first (starts with {)
        if (frontmatter.startsWith('{')) {
          try {
            meta = JSON.parse(frontmatter)
          } catch (e) {
            console.error('JSON parse error for', slug, e.message)
          }
        } else {
          // YAML format
          meta = parseYamlFrontmatter(frontmatter)
        }
      }
    }
    // Case 2: File starts with "export const metadata" → JS metadata format
    else if (raw.trimStart().startsWith('export const metadata')) {
      meta = parseJsMetadata(raw)
      // Find where actual markdown content starts (after the JS block)
      const contentStart = raw.search(/\n#[^#]/)
      if (contentStart > 0) {
        content = raw.slice(contentStart).trim()
      } else {
        // Look for first heading
        const h1Index = raw.search(/^#\s+/m)
        if (h1Index > 0) {
          content = raw.slice(h1Index).trim()
        }
      }
    }
    // Case 3: No frontmatter → extract from content
    else {
      // Try to find frontmatter-like metadata in early content
      const metaBlockMatch = raw.match(/\*\*Meta Title\*\*:\s*([^\n]+)\n\*\*Meta Description\*\*:\s*([^\n]+)\n\*\*Keywords\*\*:\s*([^\n]+)/)
      if (metaBlockMatch) {
        meta.title = metaBlockMatch[1].trim()
        meta.description = metaBlockMatch[2].trim()
        meta.keywords = metaBlockMatch[3].trim()
      }
    }
    
    // Fallback: extract title from content if not in frontmatter
    if (!meta.title) {
      meta.title = extractTitleFromContent(content)
    }
    
    // Fallback: extract date from slug if not in frontmatter
    if (!meta.date) {
      meta.date = extractDateFromSlug(slug)
    }
    
    // Skip if we still can't get title
    if (!meta.title) {
      console.error('Failed to parse article (no title found):', slug)
      continue
    }
    
    // Fallback date if still missing
    if (!meta.date) {
      meta.date = '2026-01-01' // Default fallback
    }
    
    // Format date
    const dateObj = new Date(meta.date)
    const formattedDate = isNaN(dateObj) 
      ? meta.date 
      : dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    
    posts[slug] = {
      title: meta.title,
      category: meta.category || 'AI Trends',
      date: formattedDate,
      readTime: meta.readTime || '10 min read',
      heroImage: meta.heroImage || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      content: content,
    }
  }
  return posts
}

const posts = readPosts()

export async function generateMetadata({ params }) {
  const { slug } = params
  const post = posts[slug]
  const meta = postMetadata[slug]
  
  if (!post || !meta) {
    return {
      title: 'Article Not Found | AI in China',
    }
  }
  
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    keywords: meta.keywords,
    authors: [{ name: 'AI in China' }],
    openGraph: {
      title: meta.metaTitle,
      description: meta.metaDescription,
      type: 'article',
      url: `https://www.ainchina.com/blog/${slug}/`,
      images: [{
        url: post.heroImage,
        width: 1200,
        height: 600,
        alt: meta.metaTitle,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [post.heroImage],
    },
    alternates: {
      canonical: `https://www.ainchina.com/blog/${slug}/`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPost({ params }) {
  const post = posts[params.slug]
  const meta = postMetadata[params.slug]
  
  if (!post) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#0a0a0a',
        color: '#e5e5e5',
        padding: '100px',
        textAlign: 'center'
      }}>
        <h1>Article Not Found</h1>
        <Link href="/blog/" style={{ color: '#22d3ee' }}>← Back to Blog</Link>
      </div>
    )
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: meta?.metaDescription || post.title,
    image: post.heroImage,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'AI in China',
      url: 'https://www.ainchina.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI in China',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ainchina.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ainchina.com/blog/${params.slug}/`,
    },
    keywords: meta?.keywords || 'China AI, artificial intelligence',
  }

  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c')

  // Parse markdown content to HTML-like JSX
  function parseContent(content) {
    const lines = content.split('\n')
    const elements = []
    let currentTable = null
    let currentCodeBlock = null
    let currentQuote = null
    let i = 0
    
    while (i < lines.length) {
      const line = lines[i]
      
      // Code blocks
      if (line.startsWith('```')) {
        if (currentCodeBlock) {
          elements.push(
            <pre key={i} style={{ 
              backgroundColor: '#1a1a1a',
              padding: '24px',
              borderRadius: '12px',
              overflow: 'auto',
              margin: '24px 0',
              border: '1px solid #2a2a2a'
            }}
            >
              <code style={{ 
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#e5e5e5'
              }}
              >
                {currentCodeBlock.join('\n')}
              </code>
            </pre>
          )
          currentCodeBlock = null
        } else {
          currentCodeBlock = []
        }
        i++
        continue
      }
      
      if (currentCodeBlock !== null) {
        currentCodeBlock.push(line)
        i++
        continue
      }
      
      // Blockquotes
      if (line.startsWith('> ')) {
        if (!currentQuote) {
          currentQuote = []
        }
        currentQuote.push(line.substring(2))
        i++
        continue
      } else if (currentQuote) {
        elements.push(
          <blockquote key={i} style={{ 
            borderLeft: '4px solid #22d3ee',
            paddingLeft: '24px',
            margin: '24px 0',
            fontStyle: 'italic',
            color: '#a3a3a3'
          }}
          >
            {currentQuote.map((q, idx) => (
              <p key={idx} style={{ margin: '8px 0' }}>{parseInline(q)}</p>
            ))}
          </blockquote>
        )
        currentQuote = null
        continue
      }
      
      // Tables
      if (line.startsWith('|')) {
        if (!currentTable) {
          currentTable = { headers: [], rows: [] }
          // Parse header
          const cells = line.split('|').filter(c => c.trim()).map(c => c.trim())
          currentTable.headers = cells
          i++
          // Skip separator line
          if (i < lines.length && lines[i].includes('|---')) {
            i++
          }
          continue
        } else {
          const cells = line.split('|').filter(c => c.trim()).map(c => c.trim())
          if (cells.length > 0) {
            currentTable.rows.push(cells)
          }
          i++
          continue
        }
      } else if (currentTable) {
        elements.push(
          <div key={i} style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '14px'
            }}
            >
              <thead>
                <tr>
                  {currentTable.headers.map((h, idx) => (
                    <th key={idx} style={{ 
                      borderBottom: '2px solid #22d3ee',
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontWeight: '600',
                      color: '#22d3ee'
                    }}
                    >{parseInline(h)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentTable.rows.map((row, ridx) => (
                  <tr key={ridx}>
                    {row.map((cell, cidx) => (
                      <td key={cidx} style={{ 
                        borderBottom: '1px solid #1a1a1a',
                        padding: '12px 16px',
                        color: '#e5e5e5'
                      }}
                      >{parseInline(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        currentTable = null
        continue
      }
      
      // Empty lines
      if (!line.trim()) {
        i++
        continue
      }
      
      // Headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} style={{ fontSize: '36px', fontWeight: '700', margin: '48px 0 24px', color: '#f5f5f5' }}>
            {parseInline(line.substring(2))}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} style={{ fontSize: '28px', fontWeight: '600', margin: '40px 0 20px', color: '#f5f5f5' }}>
            {parseInline(line.substring(3))}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} style={{ fontSize: '22px', fontWeight: '600', margin: '32px 0 16px', color: '#f5f5f5' }}>
            {parseInline(line.substring(4))}
          </h3>
        )
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={i} style={{ fontSize: '18px', fontWeight: '600', margin: '24px 0 12px', color: '#f5f5f5' }}>
            {parseInline(line.substring(5))}
          </h4>
        )
      } else if (line.startsWith('---')) {
        elements.push(<hr key={i} style={{ border: 'none', borderTop: '1px solid #1a1a1a', margin: '32px 0' }} />)
      } else if (line.startsWith('*') && line.endsWith('*') && !line.includes(' ')) {
        // Horizontal rule or image caption
        elements.push(<p key={i} style={{ fontStyle: 'italic', color: '#737373', textAlign: 'center', margin: '8px 0 24px' }}>{parseInline(line)}</p>)
      } else if (line.startsWith('![')) {
        // Image
        const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/)
        if (match) {
          elements.push(
            <img key={i} src={match[2]} alt={match[1]} style={{ width: '100%', borderRadius: '12px', margin: '24px 0' }} />
          )
        }
      } else {
        // Regular paragraph
        elements.push(<p key={i} style={{ fontSize: '16px', lineHeight: '1.8', margin: '16px 0', color: '#e5e5e5' }}>{parseInline(line)}</p>)
      }
      
      i++
    }
    
    // Flush remaining elements
    if (currentQuote) {
      elements.push(
        <blockquote key={i} style={{ 
          borderLeft: '4px solid #22d3ee',
          paddingLeft: '24px',
          margin: '24px 0',
          fontStyle: 'italic',
          color: '#a3a3a3'
        }}
        >
          {currentQuote.map((q, idx) => (
            <p key={idx} style={{ margin: '8px 0' }}>{parseInline(q)}</p>
          ))}
        </blockquote>
      )
    }
    
    return elements
  }
  
  function parseInline(text) {
    const parts = []
    let lastIndex = 0
    
    // Process bold (**text**)
    const boldRegex = /\*\*(.+?)\*\*/g
    let match
    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={lastIndex}>{text.substring(lastIndex, match.index)}</span>)
      }
      parts.push(<strong key={match.index} style={{ color: '#f5f5f5', fontWeight: '700' }}>{match[1]}</strong>)
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) {
      parts.push(<span key={lastIndex}>{text.substring(lastIndex)}</span>)
    }
    
    if (parts.length === 0) return text
    
    // Process italic (*text*) - but skip if already processed as bold
    // For simplicity, we process italic on the remaining text
    return parts
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#e5e5e5'
      }}>
        {/* Navigation */}
        <nav style={{ 
          borderBottom: '1px solid #1a1a1a',
          padding: '16px 24px'
        }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}
          >
            <Link href="/" style={{ 
              color: '#f5f5f5',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '18px'
            }}
            >
              AI in China
            </Link>
            <Link href="/blog/" style={{ 
              color: '#a3a3a3',
              textDecoration: 'none',
              fontSize: '14px'
            }}
            >
              Blog
            </Link>
          </div>
        </nav>

        {/* Article */}
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
          {/* Header */}
          <header style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <span style={{ 
                backgroundColor: '#1a1a1a',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#22d3ee',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {post.category}
              </span>
              <span style={{ 
                backgroundColor: '#1a1a1a',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#737373'
              }}>
                {post.readTime}
              </span>
            </div>
            
            <h1 style={{ 
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '1.2',
              margin: '0 0 24px',
              color: '#f5f5f5'
            }}
            >
              {post.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#737373', fontSize: '14px' }}>
              <span>{post.date}</span>
              <span>·</span>
              <span>AI in China</span>
            </div>
          </header>

          {/* Hero Image */}
          {post.heroImage && (
            <img 
              src={post.heroImage}
              alt={post.title}
              style={{ 
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '48px'
              }}
            />
          )}

          {/* Content */}
          <div>
            {parseContent(post.content)}
          </div>
        </article>

        <footer style={{ 
          padding: '48px 24px', 
          borderTop: '1px solid #1a1a1a',
          textAlign: 'center'
        }}
        >
          <p style={{ color: '#737373', fontSize: '14px' }}>
            © 2026 AI in China. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
