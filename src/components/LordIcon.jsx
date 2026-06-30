import React from 'react'

/**
 * LordIcon — wrapper for Lordicon animated web component.
 * Requires <script src="https://cdn.lordicon.com/lordicon.js"> in index.html.
 *
 * Colors use the site palette:
 *  onDark  → primary:#EEF1F3, secondary:#9C352B
 *  onLight → primary:#0C2E2B, secondary:#9C352B
 *  accent  → primary:#7A9591, secondary:#9C352B
 *  brick   → primary:#9C352B, secondary:#7A9591
 */

const PALETTES = {
  onDark:  'primary:#EEF1F3,secondary:#9C352B',
  onLight: 'primary:#0C2E2B,secondary:#9C352B',
  accent:  'primary:#7A9591,secondary:#9C352B',
  brick:   'primary:#9C352B,secondary:#7A9591',
  sage:    'primary:#7A9591,secondary:#0C2E2B',
  mist:    'primary:#C6CFD6,secondary:#9C352B',
}

export default function LordIcon({
  src,
  trigger  = 'hover',
  size     = 64,
  palette  = 'onLight',
  colors,
  className = '',
  style,
}) {
  const resolvedColors = colors ?? PALETTES[palette] ?? PALETTES.onLight

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={style}
      /* dangerouslySetInnerHTML so React passes the custom element to the DOM
         intact for the Lordicon script to upgrade. */
      dangerouslySetInnerHTML={{
        __html: `<lord-icon
          src="${src}"
          trigger="${trigger}"
          colors="${resolvedColors}"
          style="width:${size}px;height:${size}px;display:block">
        </lord-icon>`,
      }}
    />
  )
}

/* ── Icon library (Lordicon CDN free tier) ───────────── */
export const ICONS = {
  phone:       'https://cdn.lordicon.com/okqjaags.json',
  email:       'https://cdn.lordicon.com/rhvddzym.json',
  shield:      'https://cdn.lordicon.com/cnbvjmrb.json',
  link:        'https://cdn.lordicon.com/fkdzuoex.json',
  chart:       'https://cdn.lordicon.com/msoeawqm.json',
  heart:       'https://cdn.lordicon.com/bgebyztv.json',
  users:       'https://cdn.lordicon.com/dnoiydox.json',
  building:    'https://cdn.lordicon.com/lupuorrc.json',
  search:      'https://cdn.lordicon.com/kkvxgpti.json',
  rocket:      'https://cdn.lordicon.com/xmkizntf.json',
  check:       'https://cdn.lordicon.com/oqcrbjxr.json',
  star:        'https://cdn.lordicon.com/qjzwmkbe.json',
  handshake:   'https://cdn.lordicon.com/qvyppzqz.json',
  location:    'https://cdn.lordicon.com/wmlleaaf.json',
  door:        'https://cdn.lordicon.com/szqfpvbo.json',
  target:      'https://cdn.lordicon.com/pqxdilfs.json',
  ai:          'https://cdn.lordicon.com/qhviklyi.json',
  lock:        'https://cdn.lordicon.com/pqxdilfs.json',
  growth:      'https://cdn.lordicon.com/msoeawqm.json',
  arrow:       'https://cdn.lordicon.com/xhborgo.json',
  warning:     'https://cdn.lordicon.com/jqeuwnmb.json',
  map:         'https://cdn.lordicon.com/wmlleaaf.json',
  linkedin:    'https://cdn.lordicon.com/fhzycfgg.json',
  twitter:     'https://cdn.lordicon.com/pqxdilfs.json',
  settings:    'https://cdn.lordicon.com/hwkllwpo.json',
  verified:    'https://cdn.lordicon.com/oqcrbjxr.json',
  connection:  'https://cdn.lordicon.com/fkdzuoex.json',
  analytics:   'https://cdn.lordicon.com/msoeawqm.json',
  scale:       'https://cdn.lordicon.com/msoeawqm.json',
  people:      'https://cdn.lordicon.com/dnoiydox.json',
  office:      'https://cdn.lordicon.com/lupuorrc.json',
  clipboard:   'https://cdn.lordicon.com/hpivxauj.json',
  badge:       'https://cdn.lordicon.com/cnbvjmrb.json',
  interview:   'https://cdn.lordicon.com/dnoiydox.json',
  pipeline:    'https://cdn.lordicon.com/fkdzuoex.json',
}
