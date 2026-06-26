// src/data/s3/network-theory.ts
// 24EST332 — Network Theory | S3 | KTU 2024 Scheme | TKM College of Engineering
// CIA: 100 marks (No ESE) | 2 Credits | 23 Hours

import { Subject } from "@/types/notes";

const networkTheory: Subject = {
  id: "network-theory",
  code: "24EST332",
  name: "Network Theory",
  semester: 3,
  credits: 2,
  totalHours: 23,
  cia: 100,
  ese: 0,
  description:
    "Analysis of electrical circuits using network theorems, Laplace transforms, resonance, three-phase networks, and two-port parameters.",
  examTip:
    "100% CIA — series tests and assignments decide everything. No ESE. Focus on numerical problems: Thevenin, Norton, Transient RL/RC, and Two-port parameters are the most frequently asked.",

  modules: [
    // ─────────────────────────────────────────────
    // MODULE 1
    // ─────────────────────────────────────────────
    {
      id: "m1",
      number: 1,
      title: "Steady State Analysis Using Circuit Theorems",
      hours: 6,
      examWeight: "high",

      overview: {
        whatThisIs:
          "Module 1 covers the five fundamental network theorems used to simplify and solve any DC (and AC) circuit: Superposition, Source Transformation, Thevenin's, Norton's, and Maximum Power Transfer. These theorems replace complex multi-source circuits with a single equivalent source + resistance.",
        whyItMatters:
          "This is the highest-weightage module. Every series test guaranteed has a Thevenin's or Norton's problem. Maximum Power Transfer is a short 5-mark question staple. Superposition is used as a proof in every exam. Master numericals here — theory alone won't score.",
      },

      concepts: [
        {
          title: "Superposition Theorem",
          points: [
            "In a linear network with multiple sources, the response (current or voltage) in any element = algebraic sum of responses caused by each source acting alone.",
            "To apply: deactivate all sources except one — voltage sources → short circuit, current sources → open circuit.",
            "Works for DC and AC (phasor domain) but NOT for power (power is nonlinear — P = I²R).",
            "Dependent sources are NEVER deactivated — they stay active throughout.",
            "Steps: (1) Keep one source, deactivate others → find partial response. (2) Repeat for each source. (3) Add all partial responses.",
          ],
        },
        {
          title: "Source Transformation",
          points: [
            "A voltage source V in series with R  ⟺  Current source I = V/R in parallel with R.",
            "The terminal characteristics (V-I relationship) remain identical after transformation.",
            "Use this to simplify circuits before applying Thevenin/Norton.",
            "Only independent sources can be source-transformed. Dependent sources cannot.",
          ],
        },
        {
          title: "Thevenin's Theorem",
          points: [
            "Any linear two-terminal network can be replaced by a single voltage source Vth in series with Rth.",
            "Vth = Open circuit voltage across the terminals A-B.",
            "Rth = Equivalent resistance seen from terminals A-B with all independent sources deactivated.",
            "With dependent sources: Rth = Voc / Isc (cannot simply deactivate and find resistance).",
            "Steps: (1) Remove load. (2) Find Voc = Vth. (3) Deactivate sources, find Rth. (4) Reconnect load to Vth–Rth series.",
          ],
        },
        {
          title: "Norton's Theorem",
          points: [
            "Any linear two-terminal network can be replaced by a current source IN in parallel with RN.",
            "IN = Short circuit current through terminals A-B.",
            "RN = Rth (same as Thevenin resistance).",
            "Relationship: Vth = IN × RN → Norton and Thevenin are duals of each other.",
            "Steps: (1) Short the terminals. (2) Find Isc = IN. (3) Find RN. (4) Connect load in parallel.",
          ],
        },
        {
          title: "Maximum Power Transfer Theorem",
          points: [
            "Maximum power is transferred to the load when RL = Rth (Thevenin equivalent resistance).",
            "Maximum power: Pmax = Vth² / (4 × Rth)",
            "At maximum transfer, efficiency = 50% (half the power is lost in Rth).",
            "For AC circuits: ZL = Zth* (complex conjugate of source impedance for max power).",
            "If only magnitude can vary: |ZL| = |Zth| for max power.",
          ],
        },
      ],

      definitions: [
        {
          term: "Linear Network",
          definition:
            "A network in which the parameters (R, L, C) are constant and the response is directly proportional to the excitation. Satisfies superposition and homogeneity.",
          examReady: true,
        },
        {
          term: "Thevenin Equivalent",
          definition:
            "The simplest voltage-source model of a linear network at its terminals, consisting of Vth (open-circuit voltage) in series with Rth (equivalent resistance with sources deactivated).",
          examReady: true,
        },
        {
          term: "Norton Equivalent",
          definition:
            "The simplest current-source model of a linear network, consisting of IN (short-circuit current) in parallel with RN = Rth.",
          examReady: true,
        },
        {
          term: "Maximum Power Transfer",
          definition:
            "Maximum power is delivered to a load when the load resistance equals the Thevenin resistance of the source network (RL = Rth). Maximum power = Vth²/4Rth.",
          examReady: true,
        },
        {
          term: "Source Transformation",
          definition:
            "The process of converting a voltage source (V) in series with R to an equivalent current source (I = V/R) in parallel with R, or vice versa, without changing the terminal behavior.",
          examReady: true,
        },
      ],

      diagrams: [
        {
          title: "Thevenin Equivalent Circuit",
          description: "Original circuit reduced to Vth in series with Rth feeding load RL",
          svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect width="420" height="180" fill="#0f172a" rx="8"/>
  <!-- Vth source -->
  <circle cx="60" cy="100" r="28" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <text x="60" y="95" text-anchor="middle" fill="#a78bfa" font-size="11" font-weight="bold">Vth</text>
  <text x="60" y="112" text-anchor="middle" fill="#a78bfa" font-size="10">+  −</text>
  <!-- Top wire -->
  <line x1="60" y1="72" x2="60" y2="40" stroke="#94a3b8" stroke-width="2"/>
  <line x1="60" y1="40" x2="300" y2="40" stroke="#94a3b8" stroke-width="2"/>
  <!-- Rth -->
  <rect x="130" y="28" width="80" height="24" fill="#1e293b" stroke="#0ea5e9" stroke-width="2" rx="4"/>
  <text x="170" y="44" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Rth</text>
  <!-- Bottom wire -->
  <line x1="60" y1="128" x2="60" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <line x1="60" y1="160" x2="300" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <!-- Load RL -->
  <rect x="280" y="70" width="40" height="60" fill="#1e293b" stroke="#22c55e" stroke-width="2" rx="4"/>
  <text x="300" y="104" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">RL</text>
  <line x1="300" y1="40" x2="300" y2="70" stroke="#94a3b8" stroke-width="2"/>
  <line x1="300" y1="130" x2="300" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <!-- Terminals A B -->
  <circle cx="340" cy="40" r="5" fill="#f59e0b"/>
  <circle cx="340" cy="160" r="5" fill="#f59e0b"/>
  <text x="355" y="44" fill="#fbbf24" font-size="12" font-weight="bold">A</text>
  <text x="355" y="165" fill="#fbbf24" font-size="12" font-weight="bold">B</text>
  <!-- Labels -->
  <text x="30" y="25" fill="#64748b" font-size="10">Thevenin Equivalent</text>
  <text x="90" y="175" fill="#64748b" font-size="9">Pmax = Vth² / 4Rth  when  RL = Rth</text>
</svg>`,
        },
        {
          title: "Source Transformation",
          description: "Equivalence between voltage source + series R and current source + parallel R",
          svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect width="420" height="160" fill="#0f172a" rx="8"/>
  <!-- Left: Voltage source -->
  <circle cx="70" cy="80" r="26" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <text x="70" y="76" text-anchor="middle" fill="#a78bfa" font-size="11">V</text>
  <text x="70" y="92" text-anchor="middle" fill="#a78bfa" font-size="10">+  −</text>
  <line x1="70" y1="54" x2="70" y2="30" stroke="#94a3b8" stroke-width="2"/>
  <rect x="100" y="18" width="50" height="20" fill="#1e293b" stroke="#0ea5e9" stroke-width="2" rx="3"/>
  <text x="125" y="32" text-anchor="middle" fill="#38bdf8" font-size="11">R</text>
  <line x1="150" y1="28" x2="170" y2="28" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="175" cy="28" r="4" fill="#f59e0b"/>
  <line x1="70" y1="106" x2="70" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <line x1="70" y1="130" x2="175" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="175" cy="130" r="4" fill="#f59e0b"/>
  <!-- Arrow & equals -->
  <text x="195" y="85" fill="#64748b" font-size="20">⟺</text>
  <!-- Right: Current source -->
  <circle cx="290" cy="80" r="26" fill="none" stroke="#ec4899" stroke-width="2"/>
  <text x="290" y="76" text-anchor="middle" fill="#f9a8d4" font-size="10">I=V/R</text>
  <text x="290" y="92" text-anchor="middle" fill="#f9a8d4" font-size="10">↑</text>
  <line x1="264" y1="80" x2="240" y2="80" stroke="#94a3b8" stroke-width="2"/>
  <line x1="240" y1="28" x2="240" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <line x1="316" y1="80" x2="340" y2="80" stroke="#94a3b8" stroke-width="2"/>
  <rect x="335" y="40" width="20" height="80" fill="none" rx="3"/>
  <line x1="340" y1="28" x2="340" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <!-- R parallel -->
  <rect x="355" y="55" width="40" height="50" fill="#1e293b" stroke="#0ea5e9" stroke-width="2" rx="3"/>
  <text x="375" y="84" text-anchor="middle" fill="#38bdf8" font-size="11">R</text>
  <line x1="395" y1="28" x2="395" y2="55" stroke="#94a3b8" stroke-width="2"/>
  <line x1="395" y1="105" x2="395" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <line x1="340" y1="28" x2="400" y2="28" stroke="#94a3b8" stroke-width="2"/>
  <line x1="340" y1="130" x2="400" y2="130" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="400" cy="28" r="4" fill="#f59e0b"/>
  <circle cx="400" cy="130" r="4" fill="#f59e0b"/>
  <text x="130" y="155" fill="#64748b" font-size="9" text-anchor="middle">Voltage + Series R</text>
  <text x="330" y="155" fill="#64748b" font-size="9" text-anchor="middle">Current + Parallel R</text>
</svg>`,
        },
      ],

      formulas: [
        { name: "Maximum Power Transfer", formula: "P_max = V_th² / (4 × R_th)", condition: "When R_L = R_th" },
        { name: "Thevenin Resistance (no dep. sources)", formula: "R_th = V_oc / I_sc", condition: "Deactivate all independent sources" },
        { name: "Norton Current", formula: "I_N = V_th / R_th", condition: "Short-circuit current at terminals" },
        { name: "Source Transformation", formula: "I = V/R  or  V = I×R", condition: "Series↔Parallel equivalent" },
        { name: "Efficiency at MPT", formula: "η = 50%", condition: "At maximum power transfer" },
      ],

      examFocus: {
        frequentlyAsked: [
          { question: "Find the Thevenin equivalent circuit across terminals A-B and calculate current through load RL.", frequency: "every exam", marks: 14 },
          { question: "State and prove Maximum Power Transfer Theorem. Find the value of RL for maximum power and calculate Pmax.", frequency: "very frequent", marks: 10 },
          { question: "Using Superposition Theorem, find the current through a resistor in a circuit with two sources.", frequency: "frequent", marks: 10 },
          { question: "Find the Norton equivalent circuit across the given terminals.", frequency: "frequent", marks: 10 },
          { question: "Using Source Transformation, simplify the given network.", frequency: "moderate", marks: 7 },
        ],
        highWeightageTopics: [
          "Thevenin's theorem — numerical with dependent sources",
          "Norton's theorem and its relation to Thevenin",
          "Maximum power transfer — both DC and AC cases",
          "Superposition with dependent sources",
        ],
        commonTheoryQuestions: [
          "State Thevenin's theorem. What are its limitations?",
          "Explain the duality between Thevenin and Norton equivalents.",
          "Why can't superposition be applied to power calculations?",
          "What happens to efficiency when RL = Rth?",
          "How is Rth calculated when dependent sources are present?",
        ],
      },

      lastMinuteRevision: [
        "Thevenin: Remove load → find Voc → deactivate sources → find Rth → reconnect",
        "Norton: Short terminals → find Isc = IN → RN = Rth",
        "Vth = IN × RN (always true — use to cross-check)",
        "MPT: RL = Rth, Pmax = Vth²/4Rth, efficiency = 50%",
        "Superposition: ONE source at a time, V-sources shorted, I-sources opened",
        "Dependent sources: NEVER deactivate — always keep them",
        "Source transform: V+series R  ↔  I=V/R + parallel R",
        "AC MPT: ZL = Zth* (complex conjugate)",
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 2
    // ─────────────────────────────────────────────
    {
      id: "m2",
      number: 2,
      title: "Transient Analysis of Circuits in s-Domain",
      hours: 7,
      examWeight: "high",

      overview: {
        whatThisIs:
          "Module 2 applies Laplace Transform to convert differential equations of RL and RC circuits into algebraic equations in the s-domain, solve them, and convert back. This gives both the natural (transient) and forced (steady-state) response in one shot.",
        whyItMatters:
          "This is the most calculation-heavy module and a guaranteed series test question. The RL with DC excitation and RC with sinusoidal excitation are the standard exam problems. Know the s-domain impedances of R, L, C by heart.",
      },

      concepts: [
        {
          title: "Laplace Transform Review",
          points: [
            "L{f(t)} = F(s) = ∫₀^∞ f(t)e^{-st} dt",
            "Key pairs: L{1} = 1/s, L{e^{at}} = 1/(s-a), L{sin(ωt)} = ω/(s²+ω²), L{cos(ωt)} = s/(s²+ω²)",
            "Initial value theorem: f(0⁺) = lim_{s→∞} sF(s)",
            "Final value theorem: f(∞) = lim_{s→0} sF(s) — valid only if all poles of sF(s) are in LHP",
            "Differentiation: L{f'(t)} = sF(s) - f(0⁻)",
          ],
        },
        {
          title: "s-Domain Impedances of Circuit Elements",
          points: [
            "Resistor R: Impedance = R (same in time and s-domain)",
            "Inductor L: Impedance = sL, Initial condition represented as voltage source Li(0⁻) in series",
            "Capacitor C: Impedance = 1/sC, Initial condition represented as voltage source v(0⁻)/s in series",
            "These allow direct KVL/KCL in s-domain — no differential equations needed",
            "Transform the entire circuit to s-domain, solve algebraically, then inverse Laplace back",
          ],
        },
        {
          title: "Transient Analysis — RL Circuit (DC)",
          points: [
            "For series RL with DC source V and switch closed at t=0, initial current i(0⁻) = I₀:",
            "KVL in s-domain: I(s)(R + sL) = V/s + LI₀",
            "I(s) = V/(s(R+sL)) + LI₀/(R+sL)",
            "Time constant τ = L/R — determines how fast current reaches steady state",
            "Complete solution: i(t) = (V/R)(1 - e^{-Rt/L}) + I₀e^{-Rt/L}",
            "At t=0: i = I₀ (current through inductor cannot change instantaneously)",
            "At t=∞: i = V/R (steady state, inductor acts as short circuit for DC)",
          ],
        },
        {
          title: "Transient Analysis — RC Circuit (DC)",
          points: [
            "For series RC with DC source V, initial voltage v(0⁻) = V₀ across capacitor:",
            "KVL in s-domain: I(s)(R + 1/sC) = V/s - V₀/s",
            "Time constant τ = RC",
            "Capacitor voltage: v_C(t) = V + (V₀ - V)e^{-t/RC}",
            "At t=0: v_C = V₀ (voltage across capacitor cannot change instantaneously)",
            "At t=∞: v_C = V (steady state, capacitor acts as open circuit for DC)",
          ],
        },
        {
          title: "Transient Analysis — Sinusoidal Excitation",
          points: [
            "For v(t) = Vm sin(ωt + φ), its Laplace is V(s) = Vm(s·sinφ + ω·cosφ)/(s²+ω²)",
            "Partial fraction decomposition gives transient + steady-state terms",
            "Transient part: exponential decaying term (dies as t→∞)",
            "Steady-state part: sinusoidal at same frequency as source",
            "Complete response = Transient response + Steady-state response",
          ],
        },
      ],

      definitions: [
        {
          term: "Transient Response",
          definition:
            "The part of the circuit response that decays to zero as time approaches infinity. It depends on the circuit's natural frequencies (poles) and disappears after several time constants.",
          examReady: true,
        },
        {
          term: "Time Constant (τ)",
          definition:
            "For RL circuit: τ = L/R. For RC circuit: τ = RC. It is the time required for the transient response to decay to 36.8% (1/e) of its initial value. After 5τ, the circuit is considered to have reached steady state.",
          examReady: true,
        },
        {
          term: "s-Domain Transform",
          definition:
            "The representation of a circuit in the complex frequency domain using Laplace transforms, where resistors remain R, inductors become sL (with initial condition source Li₀), and capacitors become 1/sC (with initial condition source v₀/s).",
          examReady: true,
        },
        {
          term: "Complete Response",
          definition:
            "The total circuit response = Natural response (transient, depends on initial conditions) + Forced response (steady-state, depends on input). In s-domain, both are obtained simultaneously via inverse Laplace transform.",
          examReady: true,
        },
      ],

      diagrams: [
        {
          title: "s-Domain Equivalents of R, L, C",
          description: "Transform impedances with initial condition sources",
          svg: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect width="420" height="200" fill="#0f172a" rx="8"/>
  <!-- R -->
  <text x="50" y="30" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">Resistor</text>
  <rect x="20" y="45" width="60" height="22" fill="#1e293b" stroke="#0ea5e9" stroke-width="2" rx="3"/>
  <text x="50" y="61" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">R</text>
  <line x1="50" y1="40" x2="50" y2="45" stroke="#94a3b8" stroke-width="2"/>
  <line x1="50" y1="67" x2="50" y2="75" stroke="#94a3b8" stroke-width="2"/>
  <text x="50" y="92" text-anchor="middle" fill="#64748b" font-size="10">Z(s) = R</text>

  <!-- L -->
  <text x="180" y="30" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">Inductor</text>
  <rect x="150" y="45" width="60" height="22" fill="#1e293b" stroke="#a78bfa" stroke-width="2" rx="3"/>
  <text x="180" y="61" text-anchor="middle" fill="#c4b5fd" font-size="13" font-weight="bold">sL</text>
  <line x1="180" y1="40" x2="180" y2="45" stroke="#94a3b8" stroke-width="2"/>
  <line x1="180" y1="67" x2="180" y2="75" stroke="#94a3b8" stroke-width="2"/>
  <text x="180" y="92" text-anchor="middle" fill="#64748b" font-size="10">Z(s) = sL</text>
  <!-- IC source for L -->
  <circle cx="180" cy="130" r="18" fill="none" stroke="#ec4899" stroke-width="1.5"/>
  <text x="180" y="127" text-anchor="middle" fill="#f9a8d4" font-size="8">Li(0)</text>
  <text x="180" y="139" text-anchor="middle" fill="#f9a8d4" font-size="8">+  −</text>
  <text x="180" y="165" text-anchor="middle" fill="#64748b" font-size="9">IC source (series)</text>

  <!-- C -->
  <text x="340" y="30" text-anchor="middle" fill="#94a3b8" font-size="11" font-weight="bold">Capacitor</text>
  <rect x="310" y="45" width="60" height="22" fill="#1e293b" stroke="#22c55e" stroke-width="2" rx="3"/>
  <text x="340" y="61" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="bold">1/sC</text>
  <line x1="340" y1="40" x2="340" y2="45" stroke="#94a3b8" stroke-width="2"/>
  <line x1="340" y1="67" x2="340" y2="75" stroke="#94a3b8" stroke-width="2"/>
  <text x="340" y="92" text-anchor="middle" fill="#64748b" font-size="10">Z(s) = 1/sC</text>
  <!-- IC source for C -->
  <circle cx="340" cy="130" r="18" fill="none" stroke="#ec4899" stroke-width="1.5"/>
  <text x="340" y="127" text-anchor="middle" fill="#f9a8d4" font-size="8">v(0)/s</text>
  <text x="340" y="139" text-anchor="middle" fill="#f9a8d4" font-size="8">+  −</text>
  <text x="340" y="165" text-anchor="middle" fill="#64748b" font-size="9">IC source (series)</text>

  <text x="210" y="195" text-anchor="middle" fill="#475569" font-size="9">Dot = initial condition source included in s-domain model</text>
</svg>`,
        },
        {
          title: "RL Transient Response Curve",
          description: "Current build-up in RL circuit after DC switch-on",
          svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect width="420" height="180" fill="#0f172a" rx="8"/>
  <!-- Axes -->
  <line x1="50" y1="20" x2="50" y2="150" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="150" x2="390" y2="150" stroke="#475569" stroke-width="1.5"/>
  <text x="400" y="154" fill="#64748b" font-size="11">t</text>
  <text x="38" y="16" fill="#64748b" font-size="11">i(t)</text>
  <!-- Steady state line -->
  <line x1="50" y1="40" x2="390" y2="40" stroke="#475569" stroke-width="1" stroke-dasharray="5,5"/>
  <text x="395" y="44" fill="#64748b" font-size="10">V/R</text>
  <!-- Curve i(t) = V/R(1 - e^-t/tau) -->
  <path d="M50,150 C80,150 90,80 110,60 C130,44 160,41 200,40.5 C250,40.2 300,40 390,40" 
        fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <!-- τ marker -->
  <line x1="130" y1="40" x2="130" y2="150" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="122" y="165" fill="#fbbf24" font-size="10">τ=L/R</text>
  <!-- 63.2% point -->
  <circle cx="130" cy="76" r="4" fill="#f59e0b"/>
  <text x="135" y="74" fill="#fbbf24" font-size="9">63.2%</text>
  <!-- Labels -->
  <text x="200" y="170" text-anchor="middle" fill="#64748b" font-size="9">i(t) = (V/R)(1 − e^{−Rt/L})    [zero initial conditions]</text>
  <text x="30" y="140" fill="#94a3b8" font-size="9">0</text>
</svg>`,
        },
      ],

      formulas: [
        { name: "Laplace — Unit Step", formula: "L{u(t)} = 1/s" },
        { name: "Laplace — Exponential", formula: "L{e^{at}} = 1/(s−a)" },
        { name: "Laplace — Sine", formula: "L{sin(ωt)} = ω/(s²+ω²)" },
        { name: "Laplace — Cosine", formula: "L{cos(ωt)} = s/(s²+ω²)" },
        { name: "Inductor s-domain", formula: "V(s) = sL·I(s) − L·i(0⁻)", condition: "With initial current i(0⁻)" },
        { name: "Capacitor s-domain", formula: "V(s) = I(s)/sC + v(0⁻)/s", condition: "With initial voltage v(0⁻)" },
        { name: "RL Time Constant", formula: "τ = L/R" },
        { name: "RC Time Constant", formula: "τ = RC" },
        { name: "RL Current (DC, zero IC)", formula: "i(t) = (V/R)(1 − e^{−Rt/L})" },
        { name: "RC Voltage (DC, zero IC)", formula: "v_C(t) = V(1 − e^{−t/RC})" },
      ],

      examFocus: {
        frequentlyAsked: [
          { question: "Switch K has been in position 1 for a long time. At t=0 it moves to position 2. Find current through inductor for t≥0.", frequency: "every exam", marks: 14 },
          { question: "Find the transient current in a series RL circuit with DC source using Laplace Transform. Plot the response.", frequency: "very frequent", marks: 14 },
          { question: "Determine the transient voltage across capacitor in an RC circuit with DC excitation.", frequency: "frequent", marks: 10 },
          { question: "Find complete response (transient + steady state) of RL circuit with sinusoidal source.", frequency: "moderate", marks: 14 },
        ],
        highWeightageTopics: [
          "RL transient with DC excitation — initial conditions at t=0⁻ and t=0⁺",
          "RC transient with DC excitation",
          "s-domain equivalent circuit drawing",
          "Partial fraction expansion for inverse Laplace",
        ],
        commonTheoryQuestions: [
          "What is meant by transient response and steady-state response?",
          "Define time constant. What is its physical significance for RL and RC circuits?",
          "Why can't current through inductor and voltage across capacitor change instantaneously?",
          "Write the s-domain equivalent of L and C with initial conditions.",
        ],
      },

      lastMinuteRevision: [
        "s-domain: R→R, L→sL (series Li₀⁻ source), C→1/sC (series v₀⁻/s source)",
        "RL time constant τ = L/R | RC time constant τ = RC",
        "At t=0⁻ → t=0⁺: i_L unchanged, v_C unchanged",
        "After 5τ: circuit reaches steady state (99.3%)",
        "DC steady state: L = short, C = open",
        "RL DC: i(t) = (V/R)(1−e^{−t/τ}) for zero IC",
        "RC DC: v_C(t) = V(1−e^{−t/τ}) for zero IC",
        "Partial fractions → Inverse Laplace → time domain answer",
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 3
    // ─────────────────────────────────────────────
    {
      id: "m3",
      number: 3,
      title: "Resonance in Series Circuits and Transformed Circuit Analysis",
      hours: 3,
      examWeight: "medium",

      overview: {
        whatThisIs:
          "Module 3 covers series resonance (the condition where inductive and capacitive reactances cancel), quality factor, bandwidth, and the application of mesh and node analysis to s-domain transformed circuits.",
        whyItMatters:
          "Resonance numericals are clean and marks-friendly — find ω₀, Q, bandwidth given L, C, R. Mesh/node analysis in s-domain combines Module 2 knowledge with systematic circuit analysis.",
      },

      concepts: [
        {
          title: "Series Resonance",
          points: [
            "Resonance occurs when net reactance = 0, i.e., XL = XC → ωL = 1/ωC",
            "Resonant frequency: ω₀ = 1/√(LC) rad/s, or f₀ = 1/(2π√(LC)) Hz",
            "At resonance: impedance is purely resistive = R (minimum impedance in series circuit)",
            "Current is maximum at resonance: I_max = V/R",
            "Voltage across L and C individually can be much larger than source voltage (voltage magnification)",
          ],
        },
        {
          title: "Quality Factor and Bandwidth",
          points: [
            "Quality Factor Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C)",
            "Q represents voltage magnification at resonance: VL = VC = Q × Vsource",
            "Bandwidth BW = ω₀/Q = R/L (rad/s), or BW = f₀/Q (Hz)",
            "Half-power frequencies: ω₁ = ω₀ − BW/2, ω₂ = ω₀ + BW/2",
            "Higher Q → sharper resonance peak → narrower bandwidth → more selective circuit",
          ],
        },
        {
          title: "Mesh Analysis in s-Domain",
          points: [
            "Assign mesh currents I₁(s), I₂(s)... to each independent loop",
            "Write KVL for each mesh using s-domain impedances",
            "Results in simultaneous algebraic equations (no differential equations)",
            "Solve using Cramer's rule or substitution",
            "Apply inverse Laplace to get time-domain solution",
          ],
        },
        {
          title: "Node Analysis in s-Domain",
          points: [
            "Assign node voltages V₁(s), V₂(s)... at each non-reference node",
            "Write KCL at each node using s-domain admittances (Y = 1/Z)",
            "Include initial condition current sources for L and C",
            "Solve the resulting algebraic system",
          ],
        },
      ],

      definitions: [
        {
          term: "Resonance",
          definition:
            "The condition in a series RLC circuit where the inductive reactance equals the capacitive reactance (XL = XC), resulting in zero net reactance, minimum impedance, and maximum current.",
          examReady: true,
        },
        {
          term: "Quality Factor (Q)",
          definition:
            "Q = ω₀L/R = (1/R)√(L/C). It is the ratio of energy stored to energy dissipated per cycle. A higher Q means a sharper resonance peak and narrower bandwidth.",
          examReady: true,
        },
        {
          term: "Bandwidth",
          definition:
            "The range of frequencies between the two half-power points (where power = Pmax/2 or current = Imax/√2). BW = f₂ − f₁ = f₀/Q = R/(2πL) Hz.",
          examReady: true,
        },
        {
          term: "Half-Power Frequency",
          definition:
            "Frequencies at which the power delivered is half the maximum power (at resonance). Current at these points = Imax/√2. They are located symmetrically around f₀.",
          examReady: true,
        },
      ],

      diagrams: [
        {
          title: "Series Resonance Frequency Response",
          description: "Current vs frequency showing resonant peak, bandwidth and half-power points",
          svg: `<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect width="420" height="180" fill="#0f172a" rx="8"/>
  <!-- Axes -->
  <line x1="50" y1="20" x2="50" y2="150" stroke="#475569" stroke-width="1.5"/>
  <line x1="50" y1="150" x2="390" y2="150" stroke="#475569" stroke-width="1.5"/>
  <text x="400" y="154" fill="#64748b" font-size="11">f</text>
  <text x="30" y="16" fill="#64748b" font-size="10">|I|</text>
  <!-- Imax line -->
  <line x1="50" y1="40" x2="390" y2="40" stroke="#475569" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="392" y="44" fill="#64748b" font-size="9">Imax</text>
  <!-- Imax/√2 line -->
  <line x1="50" y1="75" x2="390" y2="75" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="392" y="79" fill="#fbbf24" font-size="9">Imax/√2</text>
  <!-- Resonance curve -->
  <path d="M50,148 C100,145 150,130 185,75 C200,50 210,40 220,40 C230,40 240,50 255,75 C290,130 340,145 390,148"
        fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <!-- f0 marker -->
  <line x1="220" y1="40" x2="220" y2="150" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="215" y="165" fill="#4ade80" font-size="10">f₀</text>
  <!-- f1, f2 -->
  <line x1="185" y1="75" x2="185" y2="150" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="255" y1="75" x2="255" y2="150" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="178" y="165" fill="#fbbf24" font-size="9">f₁</text>
  <text x="250" y="165" fill="#fbbf24" font-size="9">f₂</text>
  <!-- BW arrow -->
  <line x1="185" y1="75" x2="255" y2="75" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="215" y="70" text-anchor="middle" fill="#fbbf24" font-size="9">BW = f₀/Q</text>
  <!-- Labels -->
  <text x="50" y="175" fill="#475569" font-size="9">f₀ = 1/(2π√LC)   |   Q = ω₀L/R   |   BW = R/L (rad/s)</text>
</svg>`,
        },
      ],

      formulas: [
        { name: "Resonant Angular Frequency", formula: "ω₀ = 1/√(LC)  rad/s" },
        { name: "Resonant Frequency", formula: "f₀ = 1/(2π√(LC))  Hz" },
        { name: "Quality Factor", formula: "Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C)" },
        { name: "Bandwidth (rad/s)", formula: "BW = ω₀/Q = R/L" },
        { name: "Bandwidth (Hz)", formula: "BW = f₀/Q = R/(2πL)" },
        { name: "Half-power frequencies", formula: "ω₁,₂ = ω₀ ± R/2L" },
        { name: "Voltage across L at resonance", formula: "V_L = Q × V_source" },
        { name: "Impedance at resonance", formula: "Z = R  (purely resistive, minimum)" },
      ],

      examFocus: {
        frequentlyAsked: [
          { question: "A series RLC circuit has R=10Ω, L=0.1H, C=10μF. Find f₀, Q, and bandwidth.", frequency: "very frequent", marks: 7 },
          { question: "Perform mesh analysis of the given s-domain circuit and find branch currents.", frequency: "frequent", marks: 10 },
          { question: "Perform nodal analysis of a transformed circuit and find node voltages.", frequency: "moderate", marks: 10 },
          { question: "What is the voltage across L and C at resonance? Show that it can exceed supply voltage.", frequency: "moderate", marks: 7 },
        ],
        highWeightageTopics: [
          "Series resonance numericals — f₀, Q, BW, half-power frequencies",
          "Voltage magnification at resonance",
          "Mesh analysis in s-domain",
        ],
        commonTheoryQuestions: [
          "Define quality factor and bandwidth. How are they related?",
          "Explain voltage magnification in series resonance.",
          "What is the significance of half-power frequencies?",
          "Compare mesh and node analysis — when to prefer each?",
        ],
      },

      lastMinuteRevision: [
        "ω₀ = 1/√LC, f₀ = 1/(2π√LC)",
        "At resonance: Z = R (min), I = V/R (max), XL = XC",
        "Q = ω₀L/R = (1/R)√(L/C) — higher Q = sharper peak",
        "BW = ω₀/Q = R/L rad/s",
        "V_L = V_C = Q×V at resonance (voltage magnification)",
        "Half-power: power = Pmax/2, I = Imax/√2, Z = R√2",
        "Mesh: KVL per loop with s-domain Z",
        "Node: KCL per node with s-domain Y = 1/Z",
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 4
    // ─────────────────────────────────────────────
    {
      id: "m4",
      number: 4,
      title: "Steady State Analysis of Three-Phase Networks",
      hours: 4,
      examWeight: "medium",

      overview: {
        whatThisIs:
          "Module 4 covers three-phase power systems — the foundation of how electricity is generated and distributed. It focuses on unbalanced Y (star) and Delta (Δ) configurations, neutral shift phenomenon, and complex power calculations.",
        whyItMatters:
          "Three-phase problems are formulaic and marks-friendly once you memorize the relationships between line and phase quantities. Neutral shift is a conceptual favorite in theory questions. Complex power (P, Q, S) always appears as a 5-mark question.",
      },

      concepts: [
        {
          title: "Three-Phase System Basics",
          points: [
            "Three sinusoidal voltages 120° apart: Va, Vb = Va∠-120°, Vc = Va∠+120° (or ∠-240°)",
            "Positive (ABC) sequence: A leads B by 120°, B leads C by 120°",
            "Balanced system: |Va| = |Vb| = |Vc| and Va + Vb + Vc = 0",
            "Line voltage VL and phase voltage Vph: VL = √3 × Vph (for Y connection)",
            "Line current IL and phase current Iph: IL = Iph (for Y), IL = √3 × Iph (for Δ)",
          ],
        },
        {
          title: "Unbalanced Y (Star) Circuit Analysis",
          points: [
            "Three-wire Y: no neutral wire, neutral shift occurs when loads are unbalanced",
            "Four-wire Y: neutral wire present, neutral point stays at zero potential (VN=0)",
            "For three-wire unbalanced Y: find VN (neutral shift voltage) first using Millman's theorem",
            "Millman's theorem: VN = (Va/Za + Vb/Zb + Vc/Zc) / (1/Za + 1/Zb + 1/Zc)",
            "Phase voltages: Van = Va - VN, Vbn = Vb - VN, Vcn = Vc - VN",
            "Phase currents: Ia = Van/Za, Ib = Vbn/Zb, Ic = Vcn/Zc",
          ],
        },
        {
          title: "Unbalanced Delta (Δ) Circuit",
          points: [
            "In Delta, each load is connected between two line terminals",
            "Phase voltages = Line voltages: Vab, Vbc, Vca (no neutral involved)",
            "Phase currents: Iab = Vab/Zab, Ibc = Vbc/Zbc, Ica = Vca/Zca",
            "Line currents (KCL at each node): Ia = Iab - Ica, Ib = Ibc - Iab, Ic = Ica - Ibc",
            "No neutral shift in Delta — always independent analysis of each branch",
          ],
        },
        {
          title: "Complex Power",
          points: [
            "Apparent Power: S = V × I* = P + jQ (VA)",
            "Real (Active) Power: P = Re{S} = |S|cosφ (Watts)",
            "Reactive Power: Q = Im{S} = |S|sinφ (VAR)",
            "Power Factor: PF = cosφ = P/|S|",
            "For three-phase: S_total = 3 × V_phase × I_phase* = √3 × V_L × I_L × ∠φ",
            "P = √3 × VL × IL × cosφ, Q = √3 × VL × IL × sinφ, S = √3 × VL × IL",
          ],
        },
      ],

      definitions: [
        {
          term: "Neutral Shift",
          definition:
            "In an unbalanced three-wire star-connected system, the potential of the neutral point shifts away from zero due to unequal loads. This shift voltage VN is calculated using Millman's theorem: VN = (ΣVk/Zk) / (Σ1/Zk).",
          examReady: true,
        },
        {
          term: "Balanced Three-Phase System",
          definition:
            "A three-phase system where all three voltages are equal in magnitude, separated by exactly 120°, and all three load impedances are equal. In a balanced system, the neutral current is zero.",
          examReady: true,
        },
        {
          term: "Complex Power",
          definition:
            "S = P + jQ = VI* (VA), where P is real (active) power in watts and Q is reactive power in VAR. The magnitude |S| is apparent power. Power factor = cosφ = P/|S|.",
          examReady: true,
        },
        {
          term: "Power Factor",
          definition:
            "The cosine of the phase angle between voltage and current (cosφ = P/S). Lagging PF means current lags voltage (inductive load). Leading PF means current leads voltage (capacitive load).",
          examReady: true,
        },
      ],

      diagrams: [
        {
          title: "Star (Y) and Delta (Δ) Connection Comparison",
          description: "Line vs phase quantities for balanced three-phase systems",
          svg: `<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect width="420" height="190" fill="#0f172a" rx="8"/>
  <!-- Star -->
  <text x="100" y="22" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">Star (Y)</text>
  <line x1="100" y1="110" x2="100" y2="55" stroke="#7c3aed" stroke-width="2"/>
  <line x1="100" y1="110" x2="55" y2="145" stroke="#22c55e" stroke-width="2"/>
  <line x1="100" y1="110" x2="145" y2="145" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="100" cy="110" r="5" fill="#94a3b8"/>
  <text x="100" y="107" text-anchor="middle" fill="#94a3b8" font-size="9">N</text>
  <circle cx="100" cy="50" r="5" fill="#a78bfa"/>
  <circle cx="50" cy="148" r="5" fill="#4ade80"/>
  <circle cx="150" cy="148" r="5" fill="#fbbf24"/>
  <text x="100" y="40" text-anchor="middle" fill="#a78bfa" font-size="10">A</text>
  <text x="36" y="155" fill="#4ade80" font-size="10">B</text>
  <text x="155" y="155" fill="#fbbf24" font-size="10">C</text>
  <text x="100" y="175" text-anchor="middle" fill="#64748b" font-size="9">VL=√3·Vph | IL=Iph</text>

  <!-- Delta -->
  <text x="310" y="22" text-anchor="middle" fill="#f9a8d4" font-size="13" font-weight="bold">Delta (Δ)</text>
  <line x1="255" y1="148" x2="310" y2="55" stroke="#7c3aed" stroke-width="2"/>
  <line x1="310" y1="55" x2="365" y2="148" stroke="#22c55e" stroke-width="2"/>
  <line x1="255" y1="148" x2="365" y2="148" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="310" cy="50" r="5" fill="#a78bfa"/>
  <circle cx="250" cy="150" r="5" fill="#4ade80"/>
  <circle cx="368" cy="150" r="5" fill="#fbbf24"/>
  <text x="310" y="40" text-anchor="middle" fill="#a78bfa" font-size="10">A</text>
  <text x="234" y="157" fill="#4ade80" font-size="10">B</text>
  <text x="373" y="157" fill="#fbbf24" font-size="10">C</text>
  <text x="310" y="175" text-anchor="middle" fill="#64748b" font-size="9">VL=Vph | IL=√3·Iph</text>
</svg>`,
        },
      ],

      formulas: [
        { name: "Millman's Theorem (Neutral Shift)", formula: "V_N = (Va/Za + Vb/Zb + Vc/Zc) / (1/Za + 1/Zb + 1/Zc)" },
        { name: "Star: Line vs Phase Voltage", formula: "V_L = √3 × V_ph" },
        { name: "Star: Line vs Phase Current", formula: "I_L = I_ph" },
        { name: "Delta: Line vs Phase Voltage", formula: "V_L = V_ph" },
        { name: "Delta: Line vs Phase Current", formula: "I_L = √3 × I_ph" },
        { name: "Complex Power", formula: "S = P + jQ = V × I*  (VA)" },
        { name: "Three-Phase Active Power", formula: "P = √3 × V_L × I_L × cosφ" },
        { name: "Three-Phase Reactive Power", formula: "Q = √3 × V_L × I_L × sinφ" },
        { name: "Three-Phase Apparent Power", formula: "S = √3 × V_L × I_L  (VA)" },
        { name: "Power Factor", formula: "PF = cosφ = P/|S|" },
      ],

      examFocus: {
        frequentlyAsked: [
          { question: "A 400V three-phase supply feeds an unbalanced three-wire star-connected load. Find line currents and neutral shift voltage.", frequency: "every exam", marks: 14 },
          { question: "Calculate complex power, active power, reactive power and power factor for a given three-phase load.", frequency: "very frequent", marks: 7 },
          { question: "Analyze an unbalanced delta-connected three-phase load. Find phase currents and line currents.", frequency: "frequent", marks: 10 },
          { question: "Explain neutral shift with an example. What happens if one phase is open-circuited?", frequency: "moderate", marks: 7 },
        ],
        highWeightageTopics: [
          "Unbalanced Y — Millman's theorem for neutral shift",
          "Complex power calculation — P, Q, S, power factor",
          "Unbalanced Delta — phase and line currents",
        ],
        commonTheoryQuestions: [
          "What is neutral shift? When does it occur?",
          "State the advantages of three-phase systems over single-phase.",
          "Differentiate between star and delta connections.",
          "Define complex power, apparent power, active and reactive power.",
        ],
      },

      lastMinuteRevision: [
        "Y: VL = √3·Vph, IL = Iph | Δ: VL = Vph, IL = √3·Iph",
        "Neutral shift (3-wire Y only): VN = Millman's theorem",
        "4-wire Y: VN = 0 always (neutral wire forces it)",
        "Delta: no neutral, each branch = line voltage, solve independently",
        "S = P + jQ = V·I*, |S| = apparent power VA",
        "P = √3·VL·IL·cosφ (3-phase active power)",
        "PF = cosφ = P/|S| — lagging (inductive), leading (capacitive)",
        "Line currents in Δ: Ia = Iab − Ica (KCL at each terminal)",
      ],
    },

    // ─────────────────────────────────────────────
    // MODULE 5
    // ─────────────────────────────────────────────
    {
      id: "m5",
      number: 5,
      title: "Two-Port Networks",
      hours: 3,
      examWeight: "high",

      overview: {
        whatThisIs:
          "Module 5 covers the characterization of any linear two-port network using four parameter sets: Z (impedance), Y (admittance), h (hybrid), and T (transmission/ABCD) parameters. Each set fully describes the network's terminal behavior.",
        whyItMatters:
          "Two-port parameters are a guaranteed 14-mark ESE question type — they appear in every KTU paper. The derivation of Z or h parameters from a given circuit, and conditions for symmetry and reciprocity, are the most asked problems. Learn ALL four parameter tables.",
      },

      concepts: [
        {
          title: "Two-Port Network Concept",
          points: [
            "A two-port has 4 terminals: Port 1 (input: V1, I1) and Port 2 (output: V2, I2)",
            "Convention: I1 enters port 1, I2 enters port 2 (both positive into the port)",
            "Any linear two-port is fully described by two equations relating V1, V2, I1, I2",
            "Different parameter sets choose different pairs as independent variables",
            "All parameter sets carry the same information — they can be converted between each other",
          ],
        },
        {
          title: "Z Parameters (Open-Circuit Impedance)",
          points: [
            "Equations: V1 = Z11·I1 + Z12·I2 | V2 = Z21·I1 + Z22·I2",
            "Z11 = V1/I1|I2=0 — input impedance with output open",
            "Z12 = V1/I2|I1=0 — reverse transfer impedance with input open",
            "Z21 = V2/I1|I2=0 — forward transfer impedance with output open",
            "Z22 = V2/I2|I1=0 — output impedance with input open",
            "Reciprocity: Z12 = Z21 | Symmetry: Z11 = Z22",
          ],
        },
        {
          title: "Y Parameters (Short-Circuit Admittance)",
          points: [
            "Equations: I1 = Y11·V1 + Y12·V2 | I2 = Y21·V1 + Y22·V2",
            "Y11 = I1/V1|V2=0 — input admittance with output shorted",
            "Y12 = I1/V2|V1=0 — reverse transfer admittance with input shorted",
            "Y21 = I2/V1|V2=0 — forward transfer admittance with output shorted",
            "Y22 = I2/V2|V1=0 — output admittance with input shorted",
            "Reciprocity: Y12 = Y21 | Symmetry: Y11 = Y22",
          ],
        },
        {
          title: "h Parameters (Hybrid)",
          points: [
            "Equations: V1 = h11·I1 + h12·V2 | I2 = h21·I1 + h22·V2",
            "h11 = V1/I1|V2=0 — short circuit input impedance (Ω)",
            "h12 = V1/V2|I1=0 — open circuit reverse voltage ratio (dimensionless)",
            "h21 = I2/I1|V2=0 — short circuit forward current gain (dimensionless)",
            "h22 = I2/V2|I1=0 — open circuit output admittance (S)",
            "Used in transistor modeling — h parameters are most practical",
            "Reciprocity: h12 = −h21 | Symmetry: h11·h22 − h12·h21 = 1",
          ],
        },
        {
          title: "T Parameters (ABCD / Transmission)",
          points: [
            "Equations: V1 = A·V2 − B·I2 | I1 = C·V2 − D·I2",
            "Note: I2 is defined as leaving port 2 (opposite to other parameters)",
            "A = V1/V2|I2=0, B = −V1/I2|V2=0, C = I1/V2|I2=0, D = −I1/I2|V2=0",
            "Reciprocity: AD − BC = 1 | Symmetry: A = D",
            "Cascading networks: [T_total] = [T1] × [T2] — multiply matrices",
          ],
        },
      ],

      definitions: [
        {
          term: "Two-Port Network",
          definition:
            "A network with two pairs of terminals (ports) where energy can enter or leave. Characterized by parameter sets (Z, Y, h, T) that relate port voltages and currents. Internal structure need not be known — only terminal behavior matters.",
          examReady: true,
        },
        {
          term: "Reciprocal Network",
          definition:
            "A network with no dependent sources, satisfying Z12 = Z21, Y12 = Y21, or AD−BC = 1. In a reciprocal network, the roles of input and output can be interchanged without affecting the transfer function.",
          examReady: true,
        },
        {
          term: "Symmetrical Network",
          definition:
            "A two-port where the input and output ports are electrically identical. Condition: Z11 = Z22 (for Z-params), Y11 = Y22 (for Y-params), A = D (for T-params).",
          examReady: true,
        },
        {
          term: "h Parameters",
          definition:
            "Hybrid parameters: V1 = h11·I1 + h12·V2 and I2 = h21·I1 + h22·V2. Mix of impedance and admittance. h11 is short-circuit input impedance, h21 is short-circuit current gain. Widely used in BJT transistor circuit analysis.",
          examReady: true,
        },
      ],

      diagrams: [
        {
          title: "Two-Port Network — Terminal Convention",
          description: "Sign convention for voltages and currents at both ports",
          svg: `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" class="w-full">
  <rect width="420" height="160" fill="#0f172a" rx="8"/>
  <!-- Box -->
  <rect x="140" y="50" width="140" height="70" rx="8" fill="#1e293b" stroke="#7c3aed" stroke-width="2"/>
  <text x="210" y="82" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold">Two-Port</text>
  <text x="210" y="99" text-anchor="middle" fill="#64748b" font-size="11">Network</text>
  <!-- Port 1 wires -->
  <line x1="50" y1="65" x2="140" y2="65" stroke="#94a3b8" stroke-width="2"/>
  <line x1="50" y1="105" x2="140" y2="105" stroke="#94a3b8" stroke-width="2"/>
  <!-- Port 2 wires -->
  <line x1="280" y1="65" x2="370" y2="65" stroke="#94a3b8" stroke-width="2"/>
  <line x1="280" y1="105" x2="370" y2="105" stroke="#94a3b8" stroke-width="2"/>
  <!-- I1 arrow -->
  <text x="80" y="58" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">→ I₁</text>
  <!-- V1 label -->
  <text x="100" y="90" text-anchor="middle" fill="#22c55e" font-size="13" font-weight="bold">V₁</text>
  <text x="100" y="103" text-anchor="middle" fill="#22c55e" font-size="9">+  −</text>
  <!-- I2 arrow -->
  <text x="340" y="58" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">→ I₂</text>
  <!-- V2 label -->
  <text x="320" y="90" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="bold">V₂</text>
  <text x="320" y="103" text-anchor="middle" fill="#f59e0b" font-size="9">+  −</text>
  <!-- Port labels -->
  <text x="50" y="130" text-anchor="middle" fill="#64748b" font-size="10">Port 1</text>
  <text x="370" y="130" text-anchor="middle" fill="#64748b" font-size="10">Port 2</text>
  <!-- Ground symbols -->
  <line x1="35" y1="105" x2="65" y2="105" stroke="#475569" stroke-width="2"/>
  <line x1="40" y1="110" x2="60" y2="110" stroke="#475569" stroke-width="1.5"/>
  <line x1="45" y1="115" x2="55" y2="115" stroke="#475569" stroke-width="1"/>
  <line x1="355" y1="105" x2="385" y2="105" stroke="#475569" stroke-width="2"/>
  <line x1="360" y1="110" x2="380" y2="110" stroke="#475569" stroke-width="1.5"/>
  <line x1="365" y1="115" x2="375" y2="115" stroke="#475569" stroke-width="1"/>
  <text x="210" y="148" text-anchor="middle" fill="#475569" font-size="9">I₁ into port 1, I₂ into port 2 (standard convention)</text>
</svg>`,
        },
      ],

      formulas: [
        { name: "Z-param equations", formula: "V₁ = Z₁₁I₁ + Z₁₂I₂  |  V₂ = Z₂₁I₁ + Z₂₂I₂" },
        { name: "Y-param equations", formula: "I₁ = Y₁₁V₁ + Y₁₂V₂  |  I₂ = Y₂₁V₁ + Y₂₂V₂" },
        { name: "h-param equations", formula: "V₁ = h₁₁I₁ + h₁₂V₂  |  I₂ = h₂₁I₁ + h₂₂V₂" },
        { name: "T-param equations", formula: "V₁ = AV₂ − BI₂  |  I₁ = CV₂ − DI₂" },
        { name: "Reciprocity (Z)", formula: "Z₁₂ = Z₂₁" },
        { name: "Symmetry (Z)", formula: "Z₁₁ = Z₂₂" },
        { name: "Reciprocity (T)", formula: "AD − BC = 1" },
        { name: "Symmetry (T)", formula: "A = D" },
        { name: "Z to Y conversion", formula: "[Y] = [Z]⁻¹" },
      ],

      examFocus: {
        frequentlyAsked: [
          { question: "Find the Z-parameters of the given two-port network. Check for symmetry and reciprocity.", frequency: "every exam", marks: 14 },
          { question: "Find the h-parameters of the given network.", frequency: "very frequent", marks: 14 },
          { question: "Find ABCD (T) parameters and check AD−BC=1.", frequency: "frequent", marks: 10 },
          { question: "Find Y-parameters. Convert to Z-parameters.", frequency: "moderate", marks: 10 },
          { question: "State conditions for a two-port to be reciprocal and symmetrical for all parameter sets.", frequency: "frequent", marks: 7 },
        ],
        highWeightageTopics: [
          "Z-parameters — measurement and calculation from circuit",
          "h-parameters — short/open circuit conditions",
          "Symmetry and reciprocity conditions for all parameter sets",
          "Conversion between parameter sets",
        ],
        commonTheoryQuestions: [
          "Define Z, Y, h, and T parameters. State the conditions for their measurement.",
          "What are the conditions for symmetry and reciprocity in two-port networks?",
          "Why are h-parameters preferred for transistor circuits?",
          "How are T-parameters useful for cascaded networks?",
        ],
      },

      lastMinuteRevision: [
        "Z: open output for Z11, Z21 | open input for Z12, Z22",
        "Y: short output for Y11, Y21 | short input for Y12, Y22",
        "h: short output for h11, h21 | open input for h12, h22",
        "T: open output for A, C | short output for B, D",
        "Reciprocity: Z12=Z21 | Y12=Y21 | h12=−h21 | AD−BC=1",
        "Symmetry: Z11=Z22 | Y11=Y22 | A=D",
        "Cascade → multiply T matrices: [T] = [T1][T2]",
        "Always verify by checking reciprocity/symmetry condition at the end",
      ],
    },
  ],
};

export default networkTheory;
