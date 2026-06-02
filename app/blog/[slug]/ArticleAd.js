"use client"

import React from 'react'

// === Ad Config (Choose ONE platform and fill in your ID) ===
const AD_CONFIG = {
  // Option 1: PropellerAds (Easiest, instant approval)
  propellerAds: {
    enabled: false,  // ← Set to true after you get your zone ID
    zoneId: 'YOUR_ZONE_ID_HERE',  // e.g. '1234567'
  },
  // Option 2: Media.net (Better for English tech content)
  mediaNet: {
    enabled: false,
    dataId: 'YOUR_AD_UNIT_ID_HERE',  // e.g. '123456789'
  },
  // Option 3: Adsterra (Alternative to PropellerAds)
  adsterra: {
    enabled: false,
    placementId: 'YOUR_PLACEMENT_ID_HERE',
  },
}

// === Ad Component ===
export default function ArticleAd({ type = 'content' }) {
  // Only show ads on client side (skip during SSR to avoid hydration issues)
  const [isClient, setIsClient] = React.useState(false)
  React.useEffect(() => setIsClient(true), [])
  if (!isClient) return null

  const adStyle = {
    width: '100%',
    minHeight: type === 'banner' ? '90px' : '250px',
    backgroundColor: '#111',
    border: '1px solid #1a1a1a',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555',
    fontSize: '13px',
    margin: '24px 0',
  }

  // PropellerAds Native Banner
  if (AD_CONFIG.propellerAds.enabled) {
    return (
      <div style={adStyle}>
        <script dangerouslySetInnerHTML={{
          __html: `(function() { var z="${AD_CONFIG.propellerAds.zoneId}"; var s=document.createElement("script"); s.src="//psdopollnth.com/pfe/current/tag.min.js?z="+z+"&s=1"; s.onload=function(){ if(!document.querySelector('script[src*="zone.js"]')){ var s2=document.createElement('script'); s2.src='//pl2356'+z+'.highcpmrevenuenetwork.com/zone.js?z='+z; document.body.appendChild(s2);} }; document.body.appendChild(s); })();`
        }} />
        <span style={{ padding: '20px' }}>Advertisement</span>
      </div>
    )
  }

  // Media.net
  if (AD_CONFIG.mediaNet.enabled) {
    return (
      <div style={adStyle}>
        <div id={`media-net-${type}`} className="mNet" data-id={AD_CONFIG.mediaNet.dataId} />
        <script dangerouslySetInnerHTML={{
          __html: `window._mNHandle=window._mNHandle||{}; window._mNHandle.queue=window._mNHandle.queue||[]; medianet_versionId="3121199";`
        }} />
        <script src={`//contextual.media.net/dmedianet.js?cid=${AD_CONFIG.mediaNet.dataId}&dn=ainchina.com`} async />
      </div>
    )
  }

  // Adsterra
  if (AD_CONFIG.adsterra.enabled) {
    return (
      <div style={adStyle}>
        <script dangerouslySetInnerHTML={{
          __html: `atOptions={key:'${AD_CONFIG.adsterra.placementId}',format:'iframe',height:250,width:300,params:{}};`
        }} />
        <script src={`//www.highperformanceformat.com/${AD_CONFIG.adsterra.placementId}/invoke.js`} async />
      </div>
    )
  }

  // 当前无展示广告，不渲染任何内容
  return null
}
