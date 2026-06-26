import { SubjectContent } from "../types";

const content: SubjectContent = {
  subjectCode: "24EST332",
  modules: [
    // ---------------------------------------------------------------
    // MODULE I — Steady State Analysis Using Circuit Theorems
    // ---------------------------------------------------------------
    {
      id: "m1",
      title: "Steady State Analysis Using Circuit Theorems",
      overview: {
        summary:
          "This chapter covers the network theorems used to simplify and solve DC circuits containing dependent and independent sources: source transformation, superposition, Thevenin's theorem, Norton's theorem, and Maximum Power Transfer theorem.",
        whyItMatters:
          "Finding the Thevenin/Norton equivalent of a given DC network, or verifying maximum power transfer, is the single most reliable numerical (Part B) question in this subject — it appears almost every semester and is worth practicing until it's automatic.",
      },
      coreConcepts: [
        "Independent sources have a fixed value; dependent sources (VCVS, VCCS, CCVS, CCCS) have a value controlled by some other voltage/current in the circuit.",
        "Source transformation: a voltage source V in series with resistance R can be replaced by an equivalent current source I = V/R in parallel with the same R, and vice versa — used purely to simplify a circuit's topology before solving.",
        "Superposition theorem: in any linear circuit with multiple independent sources, the response (current or voltage) at any element equals the sum of the responses caused by each source acting alone, with all other independent sources turned off (voltage sources shorted, current sources opened).",
        "Superposition does NOT apply directly to power, since power is a nonlinear (squared) function of current/voltage — compute power only after summing the actual current/voltage.",
        "Thevenin's theorem: any linear two-terminal network can be replaced, as seen from those two terminals, by a single voltage source Vth in series with a resistance Rth.",
        "Norton's theorem: the dual of Thevenin's — the same network can be replaced by a single current source IN in parallel with a resistance RN.",
        "Vth and IN are related through the same equivalent resistance: IN = Vth / Rth and RN = Rth — so once you find one equivalent, the other is immediate.",
        "Rth/RN is found by deactivating all independent sources (short voltage sources, open current sources) and finding the resistance looking into the two terminals; Vth is the open-circuit voltage; IN is the short-circuit current.",
        "Maximum Power Transfer theorem: a load resistance RL draws maximum power from a source network when RL = Rth (the Thevenin resistance of the source as seen by the load).",
        "Maximum power delivered under this matched condition: Pmax = Vth² / (4Rth).",
      ],
      definitions: [
        { term: "Dependent Source", definition: "A voltage or current source whose value is controlled by another voltage or current elsewhere in the circuit, as opposed to an independent source whose value is fixed." },
        { term: "Source Transformation", definition: "The technique of converting a voltage source in series with a resistance into an equivalent current source in parallel with the same resistance (or vice versa), without changing the terminal behaviour of the rest of the circuit." },
        { term: "Superposition Theorem", definition: "In a linear circuit with multiple independent sources, the voltage or current in any branch equals the algebraic sum of the contributions from each independent source acting alone, with all other independent sources deactivated." },
        { term: "Thevenin's Theorem", definition: "Any linear two-terminal network can be replaced by an equivalent circuit consisting of a single voltage source Vth in series with a single resistance Rth, without affecting the behaviour at those terminals." },
        { term: "Norton's Theorem", definition: "Any linear two-terminal network can be replaced by an equivalent circuit consisting of a single current source IN in parallel with a single resistance RN." },
        { term: "Maximum Power Transfer Theorem", definition: "A load resistance connected to a linear source network draws maximum power when its resistance equals the Thevenin resistance of the source network as seen from the load terminals." },
      ],
      diagrams: [
        { title: "Thevenin and Norton equivalents of the same network", svgKey: "thevenin-norton-equivalent", caption: "Both equivalents represent the exact same two-terminal behaviour — Vth/Rth in series, or IN/RN in parallel, related by IN = Vth/Rth." },
        { title: "Superposition: split into single-source circuits", svgKey: "superposition-steps", caption: "Each independent source is solved on its own (others deactivated), then the individual responses are added." },
      ],
      formulas: [
        { name: "Source transformation", expression: "V (series with R)  ⇔  I = V/R (parallel with R)" },
        { name: "Norton from Thevenin", expression: "IN = Vth / Rth   ,   RN = Rth" },
        { name: "Maximum power transfer condition", expression: "RL = Rth" },
        { name: "Maximum power delivered", expression: "Pmax = Vth² / (4·Rth)" },
      ],
      examFocus: [
        { question: "Find the Thevenin's equivalent (Vth and Rth) of a given DC network across specified terminals.", weightage: "high", note: "Find Rth by deactivating sources, Vth as the open-circuit voltage — show both clearly." },
        { question: "Find the Norton's equivalent of a given DC network.", weightage: "high", note: "Either derive directly (short-circuit current) or convert from the Thevenin equivalent you already found." },
        { question: "Verify / apply the maximum power transfer theorem for a given circuit — find RL for max power and compute Pmax.", weightage: "high" },
        { question: "Use the superposition theorem to find the current/voltage in a given branch with two or more sources.", weightage: "high", note: "Show each single-source sub-circuit explicitly before adding results." },
        { question: "Use source transformation to simplify a given circuit before solving it.", weightage: "medium" },
      ],
      revisionNotes: [
        "Dependent source value depends on another circuit variable; independent does not.",
        "Source transform: V series R ⇔ I=V/R parallel R.",
        "Superposition: one source at a time, others OFF (V-source→short, I-source→open). Never apply to power directly.",
        "Thevenin: Vth (open-circuit V) in series with Rth (deactivated-source resistance).",
        "Norton: IN (short-circuit I) in parallel with RN = Rth.",
        "IN = Vth/Rth — Thevenin and Norton are always interconvertible.",
        "Max power transfer: RL = Rth, and Pmax = Vth²/(4Rth).",
      ],
    },

    // ---------------------------------------------------------------
    // MODULE II — Transient Analysis of Circuits in s-domain
    // ---------------------------------------------------------------
    {
      id: "m2",
      title: "Transient Analysis of Circuits in s-domain",
      overview: {
        summary:
          "This chapter uses the Laplace Transform to move RL and RC circuits from the time domain into the s-domain, where differential equations become algebra — letting you solve for the transient and complete response of these circuits under DC and sinusoidal excitation.",
        whyItMatters:
          "Deriving the complete current/voltage response of an RL or RC series circuit using Laplace transforms is a guaranteed numerical question, and the s-domain transform impedances of R, L, C (with initial conditions) are needed throughout the rest of the subject too.",
      },
      coreConcepts: [
        "The Laplace Transform converts a time-domain differential equation into an algebraic equation in the variable s, which is solved with ordinary algebra and then converted back using the inverse Laplace Transform.",
        "Transform impedance: a resistor R stays R in the s-domain; an inductor L becomes sL in series with a voltage source Li(0) representing its initial current; a capacitor C becomes 1/sC in series with a voltage source v(0)/s representing its initial voltage.",
        "To analyse a transient circuit: redraw it as its s-domain equivalent (replacing each element with its transform impedance plus any initial-condition source), solve using normal KVL/KCL/Ohm's law in s, then take the inverse Laplace transform to return to i(t) or v(t).",
        "RL series circuit, DC excitation, zero initial current: i(t) = (V/R)(1 − e^(−t/τ)), with time constant τ = L/R.",
        "RC series circuit, DC excitation, zero initial voltage: vC(t) = V(1 − e^(−t/τ)), with time constant τ = RC.",
        "Time constant (τ): the time taken for the response to reach about 63.2% of its final value (charging) or fall to about 36.8% of its initial value (decaying) — practically, the circuit is considered to have settled after about 5τ.",
        "Complete response = natural (transient) response + forced (steady-state) response. For sinusoidal excitation, the Laplace transform of the source is used and the resulting s-domain expression is split using partial fractions before inverting.",
      ],
      definitions: [
        { term: "Laplace Transform (circuit context)", definition: "An integral transform that converts a time-domain circuit differential equation into an algebraic equation in the complex variable s, simplifying circuit analysis." },
        { term: "Transform Impedance", definition: "The s-domain equivalent of a circuit element: R → R, L → sL (with a Li(0) source), C → 1/sC (with a v(0)/s source), used to redraw a circuit for Laplace-based analysis." },
        { term: "Time Constant (τ)", definition: "For a first-order RL or RC circuit, the time required for the response to reach 63.2% of its final value (or decay to 36.8% of its initial value); τ = L/R for RL, τ = RC for RC." },
        { term: "Transient Response", definition: "The temporary part of a circuit's response that decays with time after a switching action, eventually vanishing once steady state is reached." },
        { term: "Steady-State (Forced) Response", definition: "The part of a circuit's response that persists indefinitely, matching the form of the applied excitation, once all transient effects have decayed." },
      ],
      diagrams: [
        { title: "R, L, C transform impedances in the s-domain", svgKey: "rl-rc-transform-impedance", caption: "Each element's s-domain model includes an extra source representing its initial condition — this is what lets Laplace methods handle non-zero initial current/voltage." },
        { title: "RL circuit step response", svgKey: "rl-circuit-step-response", caption: "Current rises from 0 toward V/R; one time constant τ = L/R marks where it reaches 63.2% of the final value." },
      ],
      formulas: [
        { name: "s-domain transform of R, L, C", expression: "R → R   |   L → sL (+ Li(0))   |   C → 1/sC (+ v(0)/s)" },
        { name: "RL series, DC excitation (i(0)=0)", expression: "i(t) = (V/R)(1 − e^(−t/τ)),  τ = L/R" },
        { name: "RC series, DC excitation (vC(0)=0)", expression: "vC(t) = V(1 − e^(−t/τ)),  τ = RC" },
        { name: "General first-order response", expression: "x(t) = x_final + (x_initial − x_final)·e^(−t/τ)" },
      ],
      examFocus: [
        { question: "Draw the s-domain equivalent circuit of a given RL/RC network, including initial-condition sources.", weightage: "high" },
        { question: "Derive the complete current/voltage response of an RL or RC series circuit with DC excitation using the Laplace transform method.", weightage: "high", note: "Show: time-domain KVL → Laplace transform → solve for I(s) or V(s) → inverse Laplace." },
        { question: "Derive the transient response of an RL/RC series circuit under sinusoidal excitation.", weightage: "medium", note: "Needs partial fraction expansion before the inverse Laplace step." },
        { question: "Define time constant and explain its physical significance for an RL or RC circuit.", weightage: "medium" },
      ],
      revisionNotes: [
        "L → sL + Li(0) source.  C → 1/sC + v(0)/s source.  R → R (unchanged).",
        "Method: time-domain KVL → Laplace → algebra in s → inverse Laplace.",
        "RL (DC): i(t)=(V/R)(1−e^{−t/τ}), τ=L/R.",
        "RC (DC): v(t)=V(1−e^{−t/τ}), τ=RC.",
        "τ = time to reach 63.2% of final value; circuit ~settled after 5τ.",
        "Complete response = transient (dies out) + steady-state (persists).",
      ],
    },

    // ---------------------------------------------------------------
    // MODULE III — Resonance & Analysis of Transformed Circuits
    // ---------------------------------------------------------------
    {
      id: "m3",
      title: "Resonance in Series Circuits & Transformed Circuit Analysis",
      overview: {
        summary:
          "This chapter covers resonance in a series RLC circuit — quality factor and bandwidth — followed by mesh and node analysis applied to circuits that have already been transformed into the s-domain.",
        whyItMatters:
          "Computing resonant frequency, Q-factor and bandwidth for a given series RLC circuit is a standard numerical question, and mesh/node analysis in the s-domain is simply your familiar DC circuit techniques applied with impedances instead of resistances — easy marks if Module II's transforms are solid.",
      },
      coreConcepts: [
        "Resonance in a series RLC circuit occurs when the inductive and capacitive reactances cancel (XL = XC), making the net impedance purely resistive — at this point current is maximum and the circuit's power factor is unity.",
        "Resonant frequency f0 = 1/(2π√(LC)) — the frequency at which resonance occurs.",
        "Quality factor Q measures how 'sharp' or selective the resonance peak is; a higher Q means a narrower bandwidth and a more selective circuit (important in filter/tuning applications).",
        "Bandwidth (BW) is the range of frequencies around f0 over which the power delivered stays at or above half of the maximum power — bounded by the lower and upper half-power frequencies f1 and f2.",
        "Q and BW are inversely related: BW = f0/Q — a sharper (higher-Q) circuit has a narrower bandwidth.",
        "Mesh analysis (based on KVL and loop currents) and Node analysis (based on KCL and node voltages) work exactly the same way on an s-domain transformed circuit as they do on a resistive DC circuit — the only difference is that impedances Z(s) replace plain resistances.",
      ],
      definitions: [
        { term: "Resonance (series RLC)", definition: "The condition in a series RLC circuit where the inductive reactance equals the capacitive reactance (XL = XC), making the circuit purely resistive with maximum current and unity power factor." },
        { term: "Quality Factor (Q)", definition: "A dimensionless measure of how selective a resonant circuit is, defined as Q = ω0L/R = (1/R)√(L/C); a higher Q means a sharper resonance peak and narrower bandwidth." },
        { term: "Bandwidth (BW)", definition: "The range of frequencies, between the lower and upper half-power frequencies, over which a resonant circuit delivers at least half its maximum power; BW = f0/Q." },
        { term: "Half-Power Frequency", definition: "Either of the two frequencies (f1 below and f2 above resonance) at which the power delivered by the circuit falls to exactly half its maximum (resonant) value." },
      ],
      diagrams: [
        { title: "Series RLC resonance curve", svgKey: "resonance-curve", caption: "Current peaks sharply at f0; the bandwidth is the width between the two half-power points where current = Imax/√2." },
      ],
      formulas: [
        { name: "Resonant frequency", expression: "f₀ = 1 / (2π√(LC))" },
        { name: "Quality factor", expression: "Q = ω₀L/R = (1/R)√(L/C) = 1/(ω₀RC)" },
        { name: "Bandwidth", expression: "BW = f₀ / Q = R / (2πL)" },
        { name: "Half-power frequencies (high-Q approx.)", expression: "f₁ = f₀ − BW/2   ,   f₂ = f₀ + BW/2" },
      ],
      examFocus: [
        { question: "Calculate the resonant frequency, quality factor and bandwidth for a given series RLC circuit.", weightage: "high", note: "Plug straight into the formulas — these numbers come almost every semester." },
        { question: "Derive the expression for quality factor and bandwidth of a series resonant circuit.", weightage: "medium" },
        { question: "Solve a given s-domain transformed circuit using mesh analysis or node analysis.", weightage: "high", note: "Treat it exactly like a resistive DC circuit, but with Z(s) in place of R." },
        { question: "Explain the practical significance of quality factor in tuning/filter circuits.", weightage: "medium" },
      ],
      revisionNotes: [
        "Resonance: XL = XC, impedance purely resistive, current max, p.f. = 1.",
        "f₀ = 1/(2π√(LC))",
        "Q = ω₀L/R = (1/R)√(L/C) — higher Q = sharper, more selective.",
        "BW = f₀/Q — higher Q means narrower bandwidth.",
        "Mesh/node analysis in s-domain = same KVL/KCL technique, just with Z(s) instead of R.",
      ],
    },

    // ---------------------------------------------------------------
    // MODULE IV — Steady State Analysis of Three Phase Network
    // ---------------------------------------------------------------
    {
      id: "m4",
      title: "Steady State Analysis of Three Phase Network",
      overview: {
        summary:
          "This chapter covers complex power and the steady-state analysis of three-phase circuits — three-wire and four-wire unbalanced star (Y) systems, unbalanced delta systems, and the phenomenon of neutral shift.",
        whyItMatters:
          "Unbalanced three-phase numerical problems (finding phase/line currents, or the neutral-shift voltage) are dense, high-mark questions — practicing the 3-wire vs 4-wire distinction carefully is what separates a full-marks answer from a half-marks one.",
      },
      coreConcepts: [
        "Complex power S = V·I* (V and I as phasors) = P + jQ, where P is real/active power (W) and Q is reactive power (VAR); |S| is apparent power (VA) and power factor = P/|S| = cos φ.",
        "A three-phase system has three sinusoidal sources/loads 120° apart, connected in either star (Y) or delta (Δ) configuration.",
        "Balanced system: all three phase loads/sources are identical — can be analysed using a single-phase equivalent. Unbalanced system: loads differ across phases — requires full three-phase analysis, no shortcuts.",
        "Four-wire Y system (with neutral): the neutral wire fixes each phase's voltage reference, so each phase current is simply (phase voltage)/(phase impedance), computed completely independently of the other phases; any imbalance current flows through the neutral wire.",
        "Three-wire Y system (no neutral): without a neutral wire to fix the reference, an unbalanced load causes the load's star point to shift away from the source's neutral potential — this is 'neutral shift', and must be calculated (typically via Millman's theorem) before phase currents can be found.",
        "Unbalanced Delta circuit: each phase (branch) of the delta sees the full line voltage directly across it regardless of the other branches, so each phase current = (line voltage)/(branch impedance) is computed independently; line currents are then found via KCL at each corner.",
      ],
      definitions: [
        { term: "Complex Power", definition: "S = V·I* = P + jQ, a complex quantity whose real part P is the active power delivered and imaginary part Q is the reactive power exchanged in an AC circuit." },
        { term: "Balanced Three-Phase System", definition: "A three-phase system in which all three phases carry identical loads (same magnitude and phase angle of impedance), allowing single-phase-equivalent analysis." },
        { term: "Unbalanced Three-Phase System", definition: "A three-phase system in which the loads on the three phases are not identical, requiring each phase to be analysed individually rather than by symmetry." },
        { term: "Neutral Shift", definition: "In an unbalanced star-connected load with no neutral wire (3-wire system), the displacement of the load's star point voltage away from the source's neutral potential, caused by the unequal phase impedances." },
      ],
      diagrams: [
        { title: "Star (Y) vs Delta (Δ) connection", svgKey: "three-phase-y-delta", caption: "Star has a common neutral point (with or without a neutral wire); delta has no neutral at all — each branch sees the full line voltage directly." },
        { title: "Neutral shift in an unbalanced 3-wire star load", svgKey: "neutral-shift-phasor", caption: "Without a neutral wire, the load's star point N' is pulled away from the source neutral N when the load is unbalanced." },
      ],
      formulas: [
        { name: "Complex power", expression: "S = V·I* = P + jQ   ,   p.f. = cos φ = P / |S|" },
        { name: "4-wire unbalanced Y — phase current", expression: "I_phase = V_phase / Z_phase   (each phase independent)" },
        { name: "3-wire unbalanced Y — neutral shift (Millman's theorem)", expression: "V_N'N = (V_aN/Z_a + V_bN/Z_b + V_cN/Z_c) / (1/Z_a + 1/Z_b + 1/Z_c)" },
        { name: "Unbalanced Delta — phase current", expression: "I_phase = V_line / Z_branch   (each branch independent)" },
      ],
      examFocus: [
        { question: "Analyze a given unbalanced 4-wire star load to find each phase current and the neutral current.", weightage: "high" },
        { question: "Analyze a given unbalanced 3-wire star load — compute the neutral shift voltage, then find the phase currents.", weightage: "high", note: "Always compute the neutral shift first using Millman's theorem before anything else." },
        { question: "Analyze a given unbalanced delta-connected load to find phase and line currents.", weightage: "high" },
        { question: "Compute the complex power (and power factor) drawn by a given three-phase load.", weightage: "medium" },
      ],
      revisionNotes: [
        "S = VI* = P + jQ. p.f. = P/|S|.",
        "Balanced → single-phase shortcut works. Unbalanced → analyse all 3 phases fully.",
        "4-wire Y: each phase independent (neutral fixes reference). Neutral carries imbalance.",
        "3-wire Y: no neutral wire → neutral shift exists → find V_N'N (Millman's) FIRST.",
        "Unbalanced Delta: each branch sees full line voltage directly, independent of others.",
      ],
    },

    // ---------------------------------------------------------------
    // MODULE V — Two Port Networks
    // ---------------------------------------------------------------
    {
      id: "m5",
      title: "Two Port Networks",
      overview: {
        summary:
          "This chapter introduces two-port networks — circuits with two pairs of terminals — and the four standard parameter sets (Z, Y, h, T/ABCD) used to characterize them, along with the conditions for reciprocity and symmetry.",
        whyItMatters:
          "Computing one (or converting between) parameter sets for a given two-port network is a guaranteed numerical question, and the reciprocity/symmetry conditions are a frequent short-answer pairing with it.",
      },
      coreConcepts: [
        "A two-port network has two terminal pairs (ports) — an input port (V1, I1) and an output port (V2, I2) — and is characterized by two independent linear equations relating these four variables.",
        "Z-parameters (impedance): V1 = Z11·I1 + Z12·I2, V2 = Z21·I1 + Z22·I2 — found by open-circuiting one port at a time and measuring the resulting voltages/currents.",
        "Y-parameters (admittance): I1 = Y11·V1 + Y12·V2, I2 = Y21·V1 + Y22·V2 — found by short-circuiting one port at a time.",
        "h-parameters (hybrid): V1 = h11·I1 + h12·V2, I2 = h21·I1 + h22·V2 — a mix of open- and short-circuit conditions; widely used to model transistors.",
        "T-parameters (ABCD/transmission parameters): V1 = A·V2 − B·I2, I1 = C·V2 − D·I2 — particularly convenient for networks connected in cascade, since the overall ABCD matrix is just the product of the individual matrices.",
        "Reciprocity condition: a network built only from passive linear elements (no dependent sources) is reciprocal, meaning interchanging an ideal source and an ideal meter between the two ports gives the same reading. Reciprocity shows up as Z12 = Z21, Y12 = Y21, h12 = −h21, or AD − BC = 1.",
        "Symmetry condition: a network is symmetric if input and output ports can be swapped with no change in behaviour — shown as Z11 = Z22, Y11 = Y22, h11h22 − h12h21 = 1, or A = D.",
      ],
      definitions: [
        { term: "Two-Port Network", definition: "A network with exactly two pairs of accessible terminals (an input port and an output port), described by two independent linear equations relating the four port variables V1, I1, V2, I2." },
        { term: "Z-parameters", definition: "Impedance parameters relating port voltages to port currents (V1, V2 in terms of I1, I2), obtained experimentally by open-circuiting one port at a time." },
        { term: "Y-parameters", definition: "Admittance parameters relating port currents to port voltages (I1, I2 in terms of V1, V2), obtained experimentally by short-circuiting one port at a time." },
        { term: "h-parameters", definition: "Hybrid parameters relating V1 and I2 to I1 and V2, obtained using a mix of open- and short-circuit conditions; the standard parameter set for transistor small-signal models." },
        { term: "T (ABCD) parameters", definition: "Transmission parameters relating the input port variables to the output port variables (V1, I1 in terms of V2, I2), chosen so that cascaded two-port networks combine by simple matrix multiplication." },
        { term: "Reciprocal Network", definition: "A two-port network containing only passive linear elements, for which interchanging an ideal source and an ideal ammeter/voltmeter between the two ports produces an identical reading." },
      ],
      diagrams: [
        { title: "Two-port network as a black box", svgKey: "two-port-network-block", caption: "Whatever sits inside, its terminal behaviour is fully captured by any one of the Z, Y, h, or ABCD parameter sets." },
      ],
      formulas: [
        { name: "Z-parameters", expression: "V1 = Z11·I1 + Z12·I2   ,   V2 = Z21·I1 + Z22·I2" },
        { name: "Y-parameters", expression: "I1 = Y11·V1 + Y12·V2   ,   I2 = Y21·V1 + Y22·V2" },
        { name: "h-parameters", expression: "V1 = h11·I1 + h12·V2   ,   I2 = h21·I1 + h22·V2" },
        { name: "T (ABCD) parameters", expression: "V1 = A·V2 − B·I2   ,   I1 = C·V2 − D·I2" },
        { name: "Reciprocity conditions", expression: "Z12=Z21  |  Y12=Y21  |  h12=−h21  |  AD−BC=1" },
        { name: "Symmetry conditions", expression: "Z11=Z22  |  Y11=Y22  |  h11h22−h12h21=1  |  A=D" },
      ],
      examFocus: [
        { question: "Determine the Z-parameters (or Y/h/T-parameters) of a given two-port network.", weightage: "high", note: "State which ports you're opening/shorting before computing each parameter — examiners check the method, not just the final numbers." },
        { question: "Verify whether a given two-port network is reciprocal and/or symmetric.", weightage: "high" },
        { question: "Convert a given set of Z-parameters into the equivalent Y-parameters (or another set).", weightage: "medium" },
        { question: "Explain the physical/experimental significance of each two-port parameter set.", weightage: "medium" },
      ],
      revisionNotes: [
        "Z: open-circuit one port at a time. Y: short-circuit one port at a time.",
        "h: mixed open/short — used for transistor models.",
        "ABCD/T: best for cascaded networks — matrices just multiply.",
        "Reciprocity (passive, no dependent sources): Z12=Z21 | Y12=Y21 | h12=−h21 | AD−BC=1.",
        "Symmetry (ports interchangeable): Z11=Z22 | Y11=Y22 | A=D.",
      ],
    },
  ],
};

export default content;
