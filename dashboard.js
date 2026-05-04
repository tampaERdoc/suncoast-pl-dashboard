// ===== Suncoast Academy — Interactive P&L Model =====
// Source data: Suncoast_Academy_PL_Statement.xlsx (July 2026 baseline & Expanded scenarios).

const SCENARIOS = {
  baseline: {
    label: "July 2026 (66)",
    weeksPerMonth: 4,
    revenue: [
      { id: "infant",  label: "Infant",     enrollment: 12, weeklyRate: 360, room: "infant" },
      { id: "toddler", label: "Toddler",    enrollment: 13, weeklyRate: 302, room: "toddler" },
      { id: "prek2",   label: "2 Year Old", enrollment: 17, weeklyRate: 250, room: "prek2" },
      { id: "prek3",   label: "3 Year Old", enrollment: 14, weeklyRate: 232, room: "prek3" },
      { id: "vpk",     label: "4 Year Old", enrollment: 10, weeklyRate: 250, room: "vpk" },
    ],
    rooms: [
      { id: "infant",  label: "Infant (0-1)", ratio: 4 },
      { id: "toddler", label: "Toddler (1)",  ratio: 6 },
      { id: "prek2",   label: "PreK-2 (2)",   ratio: 11 },
      { id: "prek3",   label: "PreK-3 (3)",   ratio: 15 },
      { id: "vpk",     label: "VPK (4)",      ratio: 20 },
    ],
    staff: [
      { name: "Odalys",      role: "Infant",         room: "infant",  fte: 1.0, monthly: 2925.87 },
      { name: "Sharon",      role: "Infant",         room: "infant",  fte: 1.0, monthly: 3293.33 },
      { name: "Veronica",    role: "Infant",         room: "infant",  fte: 1.0, monthly: 3123.47 },
      { name: "Maijah",      role: "Infant Aide",    room: "infant",  fte: 0.5, monthly: 1456.00 },
      { name: "Flabia",      role: "Toddler",        room: "toddler", fte: 1.0, monthly: 2925.87 },
      { name: "Carla",       role: "Toddler",        room: "toddler", fte: 1.0, monthly: 2925.87 },
      { name: "Nashaly",     role: "Toddler",        room: "toddler", fte: 1.0, monthly: 2600.00 },
      { name: "Nailan",      role: "PreK2",          room: "prek2",   fte: 1.0, monthly: 2773.33 },
      { name: "Michelle",    role: "PreK2 Aide",     room: "prek2",   fte: 0.5, monthly: 1456.00 },
      { name: "Dominique",   role: "PreK3",          room: "prek3",   fte: 1.0, monthly: 2925.87 },
      { name: "Christy",     role: "VPK",            room: "vpk",     fte: 1.0, monthly: 3293.33 },
      { name: "Dallendyshe", role: "Kitchen",        room: "—",       fte: 1.0, monthly: 2912.00 },
      { name: "Alina",       role: "Director",       room: "—",       fte: 1.0, monthly: 4061.20 },
      { name: "Chris",       role: "Owner",          room: "—",       fte: 1.0, monthly: 3750.93 },
    ],
    expenses: [
      { name: "Rent",                  monthly: 2000 },
      { name: "Property Tax",          monthly: 900  },
      { name: "Credit Card Charges",   monthly: 4000 },
      { name: "Advertising",           monthly: 3500 },
      { name: "Insurance",             monthly: 1400 },
      { name: "Office Supplies",       monthly: 450  },
      { name: "Child Pilot",           monthly: 75   },
      { name: "SBA Loan",              monthly: 398  },
      { name: "Dues & Subscriptions",  monthly: 550  },
      { name: "Food & Supplies",       monthly: 2000 },
      { name: "Miscellaneous",         monthly: 150  },
      { name: "Repairs & Maintenance", monthly: 675  },
      { name: "Cleaning",              monthly: 1290 },
      { name: "Pest Control",          monthly: 65   },
      { name: "School Expense",        monthly: 1000 },
      { name: "Cell Phone",            monthly: 240  },
      { name: "Telephone / Internet",  monthly: 363  },
      { name: "Electric",              monthly: 300  },
      { name: "Water",                 monthly: 275  },
      { name: "Payroll Taxes",         monthly: 5000 },
    ],
  },
  expanded: {
    label: "Expanded (81)",
    weeksPerMonth: 4,
    revenue: [
      { id: "infant",  label: "Infant",     enrollment: 16, weeklyRate: 360, room: "infant" },
      { id: "toddler", label: "Toddler",    enrollment: 16, weeklyRate: 302, room: "toddler" },
      { id: "prek2",   label: "2 Year Old", enrollment: 20, weeklyRate: 250, room: "prek2" },
      { id: "prek3",   label: "3 Year Old", enrollment: 17, weeklyRate: 232, room: "prek3" },
      { id: "vpk",     label: "4 Year Old", enrollment: 12, weeklyRate: 250, room: "vpk" },
    ],
    rooms: [
      { id: "infant",  label: "Infant (0-1)", ratio: 4 },
      { id: "toddler", label: "Toddler (1)",  ratio: 6 },
      { id: "prek2",   label: "PreK-2 (2)",   ratio: 11 },
      { id: "prek3",   label: "PreK-3 (3)",   ratio: 15 },
      { id: "vpk",     label: "VPK (4)",      ratio: 20 },
    ],
    staff: [
      { name: "Odalys",      role: "Infant",          room: "infant",  fte: 1.0, monthly: 2925.87 },
      { name: "Sharon",      role: "Infant",          room: "infant",  fte: 1.0, monthly: 3293.33 },
      { name: "Veronica",    role: "Infant",          room: "infant",  fte: 1.0, monthly: 3123.47 },
      { name: "Maijah",      role: "Infant Aide → FT",room: "infant",  fte: 1.0, monthly: 2912.00 },
      { name: "Flabia",      role: "Toddler",         room: "toddler", fte: 1.0, monthly: 2925.87 },
      { name: "Carla",       role: "Toddler",         room: "toddler", fte: 1.0, monthly: 2925.87 },
      { name: "Nashaly",     role: "Toddler",         room: "toddler", fte: 1.0, monthly: 2600.00 },
      { name: "Nailan",      role: "PreK2",           room: "prek2",   fte: 1.0, monthly: 2773.33 },
      { name: "Michelle",    role: "PreK2 Aide → FT", room: "prek2",   fte: 1.0, monthly: 2912.00 },
      { name: "Dominique",   role: "PreK3",           room: "prek3",   fte: 1.0, monthly: 2925.87 },
      { name: "NEW HIRE",    role: "PreK3",           room: "prek3",   fte: 1.0, monthly: 2925.87 },
      { name: "Christy",     role: "VPK",             room: "vpk",     fte: 1.0, monthly: 3293.33 },
      { name: "Dallendyshe", role: "Kitchen",         room: "—",       fte: 1.0, monthly: 2912.00 },
      { name: "Alina",       role: "Director",        room: "—",       fte: 1.0, monthly: 4061.20 },
      { name: "Chris",       role: "Owner",           room: "—",       fte: 1.0, monthly: 3750.93 },
    ],
    expenses: [
      { name: "Rent",                  monthly: 2000 },
      { name: "Property Tax",          monthly: 900  },
      { name: "Credit Card Charges",   monthly: 4000 },
      { name: "Advertising",           monthly: 3500 },
      { name: "Insurance",             monthly: 1400 },
      { name: "Office Supplies",       monthly: 450  },
      { name: "Child Pilot",           monthly: 75   },
      { name: "SBA Loan",              monthly: 398  },
      { name: "Dues & Subscriptions",  monthly: 550  },
      { name: "Food & Supplies",       monthly: 2000 },
      { name: "Miscellaneous",         monthly: 150  },
      { name: "Repairs & Maintenance", monthly: 675  },
      { name: "Cleaning",              monthly: 1290 },
      { name: "Pest Control",          monthly: 65   },
      { name: "School Expense",        monthly: 1000 },
      { name: "Cell Phone",            monthly: 240  },
      { name: "Telephone / Internet",  monthly: 363  },
      { name: "Electric",              monthly: 300  },
      { name: "Water",                 monthly: 275  },
      { name: "Payroll Taxes",         monthly: 5722 },
    ],
  },
};

const STORAGE_KEY = "suncoast-pl-state-v1";
const CASH_DEFAULTS = { startingCash: 20000, projectionMonths: 12 };
// Apply cash defaults to both scenarios
SCENARIOS.baseline.startingCash = CASH_DEFAULTS.startingCash;
SCENARIOS.baseline.projectionMonths = CASH_DEFAULTS.projectionMonths;
SCENARIOS.expanded.startingCash = CASH_DEFAULTS.startingCash;
SCENARIOS.expanded.projectionMonths = CASH_DEFAULTS.projectionMonths;

let state;
let activeScenario = "baseline";
let chart;

// ---------- formatting helpers ----------
const fmtUSD = (n) => {
  const v = Number(n) || 0;
  const sign = v < 0 ? "-" : "";
  const abs = Math.abs(v);
  return sign + "$" + abs.toLocaleString("en-US", { maximumFractionDigits: 0 });
};
const fmtUSDc = (n) => {
  const v = Number(n) || 0;
  const sign = v < 0 ? "-" : "";
  const abs = Math.abs(v);
  return sign + "$" + abs.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
const fmtPct = (n) => ((Number(n) || 0) * 100).toFixed(1) + "%";
const clone = (o) => JSON.parse(JSON.stringify(o));

// ---------- state mgmt ----------
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      activeScenario = parsed.activeScenario || "baseline";
      state = parsed.state || clone(SCENARIOS[activeScenario]);
      if (state.startingCash === undefined) state.startingCash = CASH_DEFAULTS.startingCash;
      if (state.projectionMonths === undefined) state.projectionMonths = CASH_DEFAULTS.projectionMonths;
      return;
    }
  } catch {}
  activeScenario = "baseline";
  state = clone(SCENARIOS.baseline);
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeScenario, state }));
}
function loadScenario(name) {
  activeScenario = name;
  state = clone(SCENARIOS[name]);
  saveState();
  render();
}

// ---------- rendering ----------
function render() {
  renderScenarioButtons();
  renderRevenue();
  renderStaff();
  renderExpenses();
  renderRatios();
  renderCash();
  renderKPIsAndMetrics();
  renderChart();
  saveState();
}

function renderCash() {
  document.getElementById("cashStart").value = state.startingCash;
  document.getElementById("cashMonths").value = state.projectionMonths;
}

function renderScenarioButtons() {
  document.querySelectorAll(".scenario-btn[data-scenario]").forEach((b) => {
    b.classList.toggle("active", b.dataset.scenario === activeScenario);
  });
  document.getElementById("weeksPerMonth").value = state.weeksPerMonth;
}

function renderRevenue() {
  const tbody = document.querySelector("#revenueTable tbody");
  tbody.innerHTML = "";
  state.revenue.forEach((r, i) => {
    const monthly = r.enrollment * r.weeklyRate * state.weeksPerMonth;
    const annual = monthly * 12;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.label}</td>
      <td><input type="number" min="0" step="1" data-rev="${i}" data-field="enrollment" value="${r.enrollment}"></td>
      <td><input type="number" min="0" step="1" data-rev="${i}" data-field="weeklyRate" value="${r.weeklyRate}"></td>
      <td>${fmtUSD(monthly)}</td>
      <td>${fmtUSD(annual)}</td>`;
    tbody.appendChild(tr);
  });
  const totalEnroll = state.revenue.reduce((s, r) => s + r.enrollment, 0);
  const totalMonthly = state.revenue.reduce((s, r) => s + r.enrollment * r.weeklyRate * state.weeksPerMonth, 0);
  document.getElementById("rev_total_enroll").textContent = totalEnroll;
  document.getElementById("rev_total_monthly").textContent = fmtUSD(totalMonthly);
  document.getElementById("rev_total_annual").textContent = fmtUSD(totalMonthly * 12);
}

function roomOptions(selected) {
  const opts = state.rooms.map((rm) => `<option value="${rm.id}" ${rm.id === selected ? "selected" : ""}>${rm.label}</option>`);
  opts.push(`<option value="—" ${selected === "—" ? "selected" : ""}>— (none)</option>`);
  return opts.join("");
}

function renderStaff() {
  const tbody = document.querySelector("#staffTable tbody");
  tbody.innerHTML = "";
  state.staff.forEach((s, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="text" data-staff="${i}" data-field="name" value="${s.name}${s.role ? ' — ' + s.role : ''}"></td>
      <td><select data-staff="${i}" data-field="room">${roomOptions(s.room)}</select></td>
      <td><input type="number" min="0" max="1" step="0.1" data-staff="${i}" data-field="fte" value="${s.fte}"></td>
      <td><input type="number" min="0" step="0.01" data-staff="${i}" data-field="monthly" value="${s.monthly}"></td>
      <td>${fmtUSDc(s.monthly * 12)}</td>
      <td><button class="delete-btn" data-staff-del="${i}" title="Remove">×</button></td>`;
    tbody.appendChild(tr);
  });
  const totMonthly = state.staff.reduce((sum, s) => sum + s.monthly, 0);
  document.getElementById("staff_total_monthly").textContent = fmtUSDc(totMonthly);
  document.getElementById("staff_total_annual").textContent = fmtUSDc(totMonthly * 12);
}

function renderExpenses() {
  const tbody = document.querySelector("#expenseTable tbody");
  tbody.innerHTML = "";
  state.expenses.forEach((e, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="text" data-exp="${i}" data-field="name" value="${e.name}"></td>
      <td><input type="number" min="0" step="0.01" data-exp="${i}" data-field="monthly" value="${e.monthly}"></td>
      <td>${fmtUSD(e.monthly * 12)}</td>
      <td><button class="delete-btn" data-exp-del="${i}" title="Remove">×</button></td>`;
    tbody.appendChild(tr);
  });
  const tot = state.expenses.reduce((s, e) => s + e.monthly, 0);
  document.getElementById("ga_total_monthly").textContent = fmtUSD(tot);
  document.getElementById("ga_total_annual").textContent = fmtUSD(tot * 12);
}

function renderRatios() {
  const tbody = document.querySelector("#ratioTable tbody");
  tbody.innerHTML = "";
  state.rooms.forEach((rm, i) => {
    const enroll = (state.revenue.find((r) => r.room === rm.id) || {}).enrollment || 0;
    const required = rm.ratio > 0 ? Math.ceil(enroll / rm.ratio) : 0;
    const assigned = state.staff
      .filter((s) => s.room === rm.id)
      .reduce((sum, s) => sum + (Number(s.fte) || 0), 0);
    const variance = +(assigned - required).toFixed(2);

    let badge, klass;
    if (variance < 0) { badge = "OUT OF RATIO"; klass = "status-bad"; }
    else if (variance === 0) { badge = "At Min"; klass = "status-min"; }
    else { badge = "Surplus"; klass = "status-good"; }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${rm.label}</td>
      <td>${enroll}</td>
      <td><input type="number" min="1" step="1" data-room="${i}" data-field="ratio" value="${rm.ratio}" style="width:60px"></td>
      <td>${required}</td>
      <td>${assigned}</td>
      <td>${variance > 0 ? "+" : ""}${variance}</td>
      <td><span class="status-badge ${klass}">${badge}</span></td>`;
    tbody.appendChild(tr);
  });
}

function calcTotals() {
  const monthlyRev = state.revenue.reduce((s, r) => s + r.enrollment * r.weeklyRate * state.weeksPerMonth, 0);
  const monthlySal = state.staff.reduce((s, x) => s + x.monthly, 0);
  const monthlyGA = state.expenses.reduce((s, x) => s + x.monthly, 0);
  const monthlyExp = monthlySal + monthlyGA;
  const monthlyNOI = monthlyRev - monthlyExp;
  const totalChildren = state.revenue.reduce((s, r) => s + r.enrollment, 0);
  return {
    monthlyRev, monthlySal, monthlyGA, monthlyExp, monthlyNOI, totalChildren,
    annualRev: monthlyRev * 12,
    annualSal: monthlySal * 12,
    annualGA: monthlyGA * 12,
    annualExp: monthlyExp * 12,
    annualNOI: monthlyNOI * 12,
  };
}

function renderKPIsAndMetrics() {
  const t = calcTotals();
  document.getElementById("kpiRevenue").textContent = fmtUSD(t.annualRev);
  document.getElementById("kpiExpense").textContent = fmtUSD(t.annualExp);
  document.getElementById("kpiNOI").textContent = fmtUSD(t.annualNOI);
  document.getElementById("kpiNOImonthly").textContent = fmtUSD(t.monthlyNOI) + " / month";
  document.querySelector(".kpi-noi").classList.toggle("negative", t.annualNOI < 0);
  const margin = t.monthlyRev > 0 ? t.monthlyNOI / t.monthlyRev : 0;
  document.getElementById("kpiMargin").textContent = fmtPct(margin);
  document.getElementById("kpiChildren").textContent = t.totalChildren;
  const perChild = t.totalChildren > 0 ? t.monthlyRev / t.totalChildren : 0;
  document.getElementById("kpiPerChild").textContent = fmtUSD(perChild) + " / child / mo";

  // Cash on hand
  const cashHorizon = state.projectionMonths;
  const cashKpi = state.startingCash + t.monthlyNOI * cashHorizon;
  document.getElementById("kpiCash").textContent = fmtUSD(cashKpi);
  document.getElementById("kpiCashHorizon").textContent = `(${cashHorizon} mo)`;
  document.getElementById("kpiCashStart").textContent = `from ${fmtUSD(state.startingCash)} starting`;
  document.querySelector(".kpi-cash").classList.toggle("negative", cashKpi < 0);
  document.getElementById("cashNOI").textContent = fmtUSD(t.monthlyNOI);
  document.getElementById("cashProjected").textContent = fmtUSD(cashKpi);
  document.getElementById("cash3").textContent = fmtUSD(state.startingCash + t.monthlyNOI * 3);
  document.getElementById("cash6").textContent = fmtUSD(state.startingCash + t.monthlyNOI * 6);
  document.getElementById("cash12").textContent = fmtUSD(state.startingCash + t.monthlyNOI * 12);
  document.getElementById("cash24").textContent = fmtUSD(state.startingCash + t.monthlyNOI * 24);
  // Runway: only meaningful when burning cash (NOI < 0)
  const runwayRow = document.getElementById("cashRunwayRow");
  if (t.monthlyNOI < 0 && state.startingCash > 0) {
    const months = state.startingCash / Math.abs(t.monthlyNOI);
    document.getElementById("cashRunway").textContent = months.toFixed(1) + " months";
    runwayRow.style.display = "";
  } else {
    runwayRow.style.display = "none";
  }

  document.getElementById("m_revenue").textContent = fmtUSD(t.annualRev);
  document.getElementById("m_expense").textContent = fmtUSD(t.annualExp);
  document.getElementById("m_salPct").textContent = t.monthlyRev > 0 ? fmtPct(t.monthlySal / t.monthlyRev) : "—";
  document.getElementById("m_gaPct").textContent  = t.monthlyRev > 0 ? fmtPct(t.monthlyGA / t.monthlyRev) : "—";
  document.getElementById("m_expRatio").textContent = t.monthlyRev > 0 ? fmtPct(t.monthlyExp / t.monthlyRev) : "—";
  document.getElementById("m_margin").textContent = fmtPct(margin);
  document.getElementById("m_perChild").textContent = fmtUSD(perChild);
  document.getElementById("m_noiMonth").textContent = fmtUSD(t.monthlyNOI);
  document.getElementById("m_noiYear").textContent = fmtUSD(t.annualNOI);
}

function renderChart() {
  const t = calcTotals();
  const ctx = document.getElementById("breakdownChart").getContext("2d");
  const data = {
    labels: ["Salaries & Wages", "G&A Expenses", "Net Operating Income"],
    datasets: [{
      data: [t.annualSal, t.annualGA, Math.max(t.annualNOI, 0)],
      backgroundColor: ["#f59e0b", "#8b5cf6", t.annualNOI >= 0 ? "#10b981" : "#ef4444"],
      borderWidth: 0,
    }],
  };
  if (chart) {
    chart.data = data;
    chart.update();
  } else {
    chart = new Chart(ctx, {
      type: "doughnut",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "62%",
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 12, font: { size: 12 } } },
          tooltip: {
            callbacks: {
              label: (c) => `${c.label}: ${fmtUSD(c.parsed)} (${fmtPct(c.parsed / t.annualRev)})`,
            },
          },
        },
      },
    });
  }
}

// ---------- event wiring ----------
function attachEvents() {
  document.querySelectorAll(".scenario-btn[data-scenario]").forEach((b) => {
    b.addEventListener("click", () => loadScenario(b.dataset.scenario));
  });
  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm(`Reset to "${SCENARIOS[activeScenario].label}" defaults?`)) loadScenario(activeScenario);
  });
  document.getElementById("weeksPerMonth").addEventListener("input", (e) => {
    state.weeksPerMonth = +e.target.value || 0;
    render();
  });
  document.getElementById("cashStart").addEventListener("input", (e) => {
    state.startingCash = parseFloat(e.target.value) || 0;
    renderKPIsAndMetrics();
    saveState();
  });
  document.getElementById("cashMonths").addEventListener("input", (e) => {
    state.projectionMonths = Math.max(1, parseInt(e.target.value, 10) || 1);
    renderKPIsAndMetrics();
    saveState();
  });

  document.body.addEventListener("input", (e) => {
    const t = e.target;
    if (t.dataset.rev !== undefined) {
      const r = state.revenue[+t.dataset.rev];
      r[t.dataset.field] = t.dataset.field === "enrollment" ? Math.max(0, parseInt(t.value, 10) || 0) : Math.max(0, parseFloat(t.value) || 0);
      render();
    } else if (t.dataset.staff !== undefined) {
      const s = state.staff[+t.dataset.staff];
      const f = t.dataset.field;
      if (f === "name") {
        s.name = t.value;
        s.role = "";
      } else if (f === "room") {
        s.room = t.value;
        renderRatios();
      } else if (f === "fte") {
        s.fte = Math.max(0, parseFloat(t.value) || 0);
        renderRatios();
      } else if (f === "monthly") {
        s.monthly = Math.max(0, parseFloat(t.value) || 0);
        renderStaff();
        renderKPIsAndMetrics();
        renderChart();
      }
      saveState();
    } else if (t.dataset.exp !== undefined) {
      const x = state.expenses[+t.dataset.exp];
      if (t.dataset.field === "name") x.name = t.value;
      else x.monthly = Math.max(0, parseFloat(t.value) || 0);
      renderExpenses();
      renderKPIsAndMetrics();
      renderChart();
      saveState();
    } else if (t.dataset.room !== undefined) {
      state.rooms[+t.dataset.room].ratio = Math.max(1, parseInt(t.value, 10) || 1);
      renderRatios();
      saveState();
    }
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.dataset.staffDel !== undefined) {
      state.staff.splice(+e.target.dataset.staffDel, 1);
      render();
    } else if (e.target.dataset.expDel !== undefined) {
      state.expenses.splice(+e.target.dataset.expDel, 1);
      render();
    }
  });

  document.getElementById("addStaffBtn").addEventListener("click", () => {
    state.staff.push({ name: "New Staff", role: "", room: "—", fte: 1.0, monthly: 2500 });
    render();
  });
  document.getElementById("addExpenseBtn").addEventListener("click", () => {
    state.expenses.push({ name: "New Expense", monthly: 0 });
    render();
  });

  document.querySelectorAll(".reset-btn[data-reset]").forEach((btn) => {
    btn.addEventListener("click", () => resetSection(btn.dataset.reset));
  });
}

function resetSection(section) {
  const defaults = SCENARIOS[activeScenario];
  const labels = {
    revenue: "enrollment, weekly tuition rates, and weeks-per-month",
    ratios: "Florida DCF staff ratios",
    staff: "the salary list",
    expenses: "the G&A expense list",
    cash: "starting cash and projection horizon",
  };
  if (!confirm(`Restore ${labels[section]} to the "${defaults.label}" defaults?`)) return;
  if (section === "revenue") {
    state.revenue = clone(defaults.revenue);
    state.weeksPerMonth = defaults.weeksPerMonth;
  } else if (section === "ratios") {
    state.rooms = clone(defaults.rooms);
  } else if (section === "staff") {
    state.staff = clone(defaults.staff);
  } else if (section === "expenses") {
    state.expenses = clone(defaults.expenses);
  } else if (section === "cash") {
    state.startingCash = CASH_DEFAULTS.startingCash;
    state.projectionMonths = CASH_DEFAULTS.projectionMonths;
  }
  render();
}

// ---------- boot ----------
loadState();
attachEvents();
render();
