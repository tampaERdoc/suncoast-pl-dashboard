# Suncoast Academy — Interactive P&L Dashboard

A self-contained, browser-based financial model for Suncoast Academy (childcare). Toggle enrollment, tuition rates, Florida DCF staff ratios, individual salaries, and every G&A line item — the P&L recomputes live.

## Features

- **Two preloaded scenarios** — July 2026 baseline (66 children) and Expanded (81 children)
- **Editable inputs** — enrollment by age group, weekly tuition rates, weeks-per-month multiplier, ratio rules per room, every staff line, every G&A expense
- **Live KPIs** — annual revenue, annual expenses, net operating income, operating margin, total enrollment, $ / child / month
- **Florida DCF compliance check** — auto-calculates required FTE per room (Infant 1:4, Toddler 1:6, PreK-2 1:11, PreK-3 1:15, VPK 1:20) and flags rooms that fall out of ratio
- **Add / remove staff and expenses** on the fly
- **LocalStorage persistence** — your edits survive page refreshes; *Reset* restores the selected scenario

## Run locally

No build step. Just open `index.html` in any modern browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
|---|---|
| `index.html` | Layout & structure |
| `styles.css` | Design system |
| `dashboard.js` | P&L model, scenarios, render logic |

## Source data & methodology note

Underlying enrollment, tuition rates, and expense lines come from the source spreadsheet (`Suncoast_Academy_PL_Statement.xlsx`). The dashboard uses the more accurate **4.33 weeks/month** (52 ÷ 12) for the weekly→monthly conversion, vs. the spreadsheet's rounded 4. This produces revenue figures ~8% higher than the source xlsx but is the conversion factor most accountants use.

Default scenario figures with 4.33 weeks/month:

| | Baseline (66) | Expanded (81) |
|---|---:|---:|
| Monthly tuition revenue | ~$78,997 | ~$97,581 |
| Monthly salaries | $40,423.07 | $46,260.94 |
| Monthly G&A | $24,631 | $25,353 |
| Net Operating Income | **~$13,943 / mo** | **~$25,967 / mo** |

You can change the multiplier back to 4.0 in the Revenue panel if you want to match the source spreadsheet exactly.

## Disclaimer

Estimates only — not audited financials. Florida DCF rule reference: 65C-22.001(4).
