// Named inline-SVG diagrams. Add a new key here whenever a module references
// a svgKey that doesn't exist yet — keeps every diagram crisp, labeled, and
// dependency-free (no image uploads needed for v1).

function GrowthCurves() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-auto">
      <line x1="30" y1="170" x2="300" y2="170" stroke="#232A35" strokeWidth="1" />
      <line x1="30" y1="170" x2="30" y2="10" stroke="#232A35" strokeWidth="1" />
      <text x="295" y="184" fill="#8A93A1" fontSize="9" textAnchor="end">n</text>
      <text x="14" y="16" fill="#8A93A1" fontSize="9">time</text>

      {/* O(1) */}
      <path d="M30,160 L300,160" stroke="#5A6372" strokeWidth="2" fill="none" />
      <text x="255" y="155" fill="#5A6372" fontSize="9">O(1)</text>

      {/* O(log n) */}
      <path d="M30,160 Q120,120 300,95" stroke="#4FD1C5" strokeWidth="2" fill="none" />
      <text x="255" y="90" fill="#4FD1C5" fontSize="9">O(log n)</text>

      {/* O(n) */}
      <path d="M30,160 L300,40" stroke="#F5B544" strokeWidth="2" fill="none" />
      <text x="255" y="35" fill="#F5B544" fontSize="9">O(n)</text>

      {/* O(n log n) */}
      <path d="M30,160 Q150,90 260,15" stroke="#FB7185" strokeWidth="2" fill="none" />
      <text x="190" y="14" fill="#FB7185" fontSize="9">O(n log n)</text>

      {/* O(n^2) */}
      <path d="M30,160 Q140,150 200,15" stroke="#9b6bff" strokeWidth="2" fill="none" />
      <text x="150" y="14" fill="#9b6bff" fontSize="9">O(n²)</text>
    </svg>
  );
}

function LoopComplexityBlocks() {
  return (
    <svg viewBox="0 0 320 170" className="w-full h-auto">
      <rect x="20" y="20" width="120" height="60" rx="6" fill="none" stroke="#4FD1C5" strokeWidth="1.5" />
      <rect x="32" y="32" width="96" height="36" rx="4" fill="none" stroke="#4FD1C5" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="80" y="55" fill="#EDEFF2" fontSize="9" textAnchor="middle">for i in n</text>
      <text x="80" y="66" fill="#EDEFF2" fontSize="9" textAnchor="middle">for j in n</text>
      <text x="80" y="100" fill="#4FD1C5" fontSize="10" textAnchor="middle" fontWeight="600">Nested → O(n²)</text>

      <rect x="180" y="20" width="120" height="25" rx="6" fill="none" stroke="#F5B544" strokeWidth="1.5" />
      <text x="240" y="36" fill="#EDEFF2" fontSize="9" textAnchor="middle">for i in n</text>
      <rect x="180" y="55" width="120" height="25" rx="6" fill="none" stroke="#F5B544" strokeWidth="1.5" />
      <text x="240" y="71" fill="#EDEFF2" fontSize="9" textAnchor="middle">for j in n²</text>
      <text x="240" y="100" fill="#F5B544" fontSize="10" textAnchor="middle" fontWeight="600">Sequential → O(n²), not O(n+n²)≈O(n³)</text>
    </svg>
  );
}

function ArrayVsLinkedList() {
  return (
    <svg viewBox="0 0 320 150" className="w-full h-auto">
      <text x="10" y="16" fill="#4FD1C5" fontSize="10" fontWeight="600">Array — contiguous block</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={10 + i * 36} y="24" width="32" height="28" fill="none" stroke="#4FD1C5" strokeWidth="1.5" />
          <text x={26 + i * 36} y="42" fill="#EDEFF2" fontSize="9" textAnchor="middle">{["A", "B", "C", "D", "E"][i]}</text>
          <text x={26 + i * 36} y="64" fill="#8A93A1" fontSize="8" textAnchor="middle">{i}</text>
        </g>
      ))}

      <text x="10" y="96" fill="#F5B544" fontSize="10" fontWeight="600">Linked List — scattered nodes</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={10 + i * 100} y="104" width="60" height="28" rx="4" fill="none" stroke="#F5B544" strokeWidth="1.5" />
          <line x1={10 + i * 100} y1="104" x2={10 + i * 100} y2="132" stroke="#F5B544" strokeWidth="1" />
          <text x={28 + i * 100} y="122" fill="#EDEFF2" fontSize="9" textAnchor="middle">{["A", "B", "C"][i]}</text>
          <text x={58 + i * 100} y="122" fill="#8A93A1" fontSize="8" textAnchor="middle">next</text>
          {i < 2 && (
            <line x1={70 + i * 100} y1="118" x2={110 + i * 100} y2="118" stroke="#F5B544" strokeWidth="1.5" markerEnd="url(#arrow)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#F5B544" />
        </marker>
      </defs>
    </svg>
  );
}

function LinkedListTypes() {
  return (
    <svg viewBox="0 0 320 130" className="w-full h-auto">
      <text x="10" y="14" fill="#4FD1C5" fontSize="10" fontWeight="600">Singly: data | next</text>
      <rect x="10" y="20" width="80" height="26" rx="4" fill="none" stroke="#4FD1C5" strokeWidth="1.5" />
      <line x1="55" y1="20" x2="55" y2="46" stroke="#4FD1C5" />
      <text x="32" y="37" fill="#EDEFF2" fontSize="9" textAnchor="middle">data</text>
      <text x="72" y="37" fill="#EDEFF2" fontSize="9" textAnchor="middle">next</text>

      <text x="10" y="74" fill="#F5B544" fontSize="10" fontWeight="600">Doubly: prev | data | next</text>
      <rect x="10" y="80" width="120" height="26" rx="4" fill="none" stroke="#F5B544" strokeWidth="1.5" />
      <line x1="48" y1="80" x2="48" y2="106" stroke="#F5B544" />
      <line x1="90" y1="80" x2="90" y2="106" stroke="#F5B544" />
      <text x="29" y="97" fill="#EDEFF2" fontSize="8" textAnchor="middle">prev</text>
      <text x="69" y="97" fill="#EDEFF2" fontSize="9" textAnchor="middle">data</text>
      <text x="110" y="97" fill="#EDEFF2" fontSize="8" textAnchor="middle">next</text>

      <text x="180" y="14" fill="#FB7185" fontSize="10" fontWeight="600">Circular: last → first</text>
      <circle cx="240" cy="60" r="36" fill="none" stroke="#FB7185" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="240" y="64" fill="#8A93A1" fontSize="8" textAnchor="middle">loops back</text>
    </svg>
  );
}

function BinaryTreeTraversals() {
  return (
    <svg viewBox="0 0 300 160" className="w-full h-auto">
      <line x1="150" y1="20" x2="90" y2="70" stroke="#232A35" />
      <line x1="150" y1="20" x2="210" y2="70" stroke="#232A35" />
      <line x1="90" y1="70" x2="60" y2="120" stroke="#232A35" />
      <line x1="90" y1="70" x2="120" y2="120" stroke="#232A35" />
      <line x1="210" y1="70" x2="240" y2="120" stroke="#232A35" />

      {[
        { x: 150, y: 20, v: "F" },
        { x: 90, y: 70, v: "B" },
        { x: 210, y: 70, v: "G" },
        { x: 60, y: 120, v: "A" },
        { x: 120, y: 120, v: "D" },
        { x: 240, y: 120, v: "I" },
      ].map((n) => (
        <g key={n.v}>
          <circle cx={n.x} cy={n.y} r="14" fill="#131720" stroke="#4FD1C5" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} fill="#EDEFF2" fontSize="10" textAnchor="middle">{n.v}</text>
        </g>
      ))}
      <text x="10" y="150" fill="#4FD1C5" fontSize="9">Inorder: A B D F G I (sorted!)</text>
    </svg>
  );
}

function GraphBfsDfs() {
  const nodes = [
    { id: "A", x: 40, y: 30 },
    { id: "B", x: 140, y: 20 },
    { id: "C", x: 40, y: 100 },
    { id: "D", x: 140, y: 100 },
    { id: "E", x: 240, y: 60 },
  ];
  const edges = [["A", "B"], ["A", "C"], ["B", "D"], ["C", "D"], ["D", "E"]];
  const pos = (id: string) => nodes.find((n) => n.id === id)!;
  return (
    <svg viewBox="0 0 300 140" className="w-full h-auto">
      {edges.map(([a, b], i) => {
        const pa = pos(a), pb = pos(b);
        return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke="#232A35" strokeWidth="1.5" />;
      })}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="14" fill="#131720" stroke="#4FD1C5" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} fill="#EDEFF2" fontSize="10" textAnchor="middle">{n.id}</text>
        </g>
      ))}
      <text x="10" y="128" fill="#4FD1C5" fontSize="9">BFS from A: A,B,C,D,E (queue, level by level)</text>
    </svg>
  );
}

function MergeSortTree() {
  return (
    <svg viewBox="0 0 320 130" className="w-full h-auto">
      <text x="10" y="14" fill="#8A93A1" fontSize="9">split</text>
      <rect x="120" y="6" width="80" height="20" fill="none" stroke="#4FD1C5" strokeWidth="1.5" />
      <text x="160" y="20" fill="#EDEFF2" fontSize="9" textAnchor="middle">8 3 5 1</text>

      <rect x="60" y="46" width="60" height="20" fill="none" stroke="#4FD1C5" strokeWidth="1.5" />
      <text x="90" y="60" fill="#EDEFF2" fontSize="9" textAnchor="middle">8 3</text>
      <rect x="200" y="46" width="60" height="20" fill="none" stroke="#4FD1C5" strokeWidth="1.5" />
      <text x="230" y="60" fill="#EDEFF2" fontSize="9" textAnchor="middle">5 1</text>

      <rect x="40" y="86" width="34" height="20" fill="none" stroke="#F5B544" strokeWidth="1.5" />
      <text x="57" y="100" fill="#EDEFF2" fontSize="9" textAnchor="middle">3 8</text>
      <rect x="206" y="86" width="34" height="20" fill="none" stroke="#F5B544" strokeWidth="1.5" />
      <text x="223" y="100" fill="#EDEFF2" fontSize="9" textAnchor="middle">1 5</text>

      <text x="270" y="20" fill="#8A93A1" fontSize="9">↓ split down</text>
      <text x="270" y="100" fill="#F5B544" fontSize="9">↑ merge up (sorted)</text>
    </svg>
  );
}

function MaxHeapStructure() {
  return (
    <svg viewBox="0 0 280 150" className="w-full h-auto">
      <line x1="140" y1="20" x2="80" y2="70" stroke="#232A35" />
      <line x1="140" y1="20" x2="200" y2="70" stroke="#232A35" />
      <line x1="80" y1="70" x2="50" y2="120" stroke="#232A35" />
      <line x1="80" y1="70" x2="110" y2="120" stroke="#232A35" />

      {[
        { x: 140, y: 20, v: "90" },
        { x: 80, y: 70, v: "70" },
        { x: 200, y: 70, v: "60" },
        { x: 50, y: 120, v: "40" },
        { x: 110, y: 120, v: "65" },
      ].map((n) => (
        <g key={n.v}>
          <circle cx={n.x} cy={n.y} r="16" fill="#131720" stroke="#FB7185" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} fill="#EDEFF2" fontSize="10" textAnchor="middle">{n.v}</text>
        </g>
      ))}
      <text x="10" y="148" fill="#FB7185" fontSize="9">every parent ≥ its children</text>
    </svg>
  );
}

function HashChainingProbing() {
  return (
    <svg viewBox="0 0 320 140" className="w-full h-auto">
      <text x="10" y="14" fill="#4FD1C5" fontSize="10" fontWeight="600">Chaining</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="10" y={24 + i * 24} width="30" height="20" fill="none" stroke="#4FD1C5" strokeWidth="1.5" />
          <text x="25" y={38 + i * 24} fill="#8A93A1" fontSize="8" textAnchor="middle">{i}</text>
        </g>
      ))}
      <rect x="50" y="24" width="30" height="20" fill="none" stroke="#4FD1C5" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="65" y="38" fill="#EDEFF2" fontSize="9" textAnchor="middle">23</text>
      <rect x="86" y="24" width="30" height="20" fill="none" stroke="#4FD1C5" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="101" y="38" fill="#EDEFF2" fontSize="9" textAnchor="middle">53</text>

      <text x="180" y="14" fill="#F5B544" fontSize="10" fontWeight="600">Open addressing (linear probe)</text>
      {["12", "·", "12+1", "·", "·"].map((v, i) => (
        <g key={i}>
          <rect x={180 + i * 26} y="24" width="24" height="20" fill="none" stroke="#F5B544" strokeWidth="1.5" />
          <text x={192 + i * 26} y="38" fill="#EDEFF2" fontSize="8" textAnchor="middle">{v}</text>
        </g>
      ))}
      <text x="10" y="120" fill="#8A93A1" fontSize="9">Chaining: list grows at the slot. Probing: hunts for the next free slot.</text>
    </svg>
  );
}

function TrieStructure() {
  return (
    <svg viewBox="0 0 300 140" className="w-full h-auto">
      <circle cx="30" cy="20" r="10" fill="#131720" stroke="#4FD1C5" strokeWidth="1.5" />
      <line x1="30" y1="20" x2="90" y2="60" stroke="#232A35" />
      <text x="58" y="36" fill="#8A93A1" fontSize="9">c</text>
      <circle cx="90" cy="60" r="10" fill="#131720" stroke="#4FD1C5" strokeWidth="1.5" />
      <text x="90" y="64" fill="#EDEFF2" fontSize="8" textAnchor="middle">a</text>

      <line x1="90" y1="60" x2="60" y2="100" stroke="#232A35" />
      <text x="65" y="84" fill="#8A93A1" fontSize="9">t</text>
      <circle cx="60" cy="100" r="10" fill="#131720" stroke="#FB7185" strokeWidth="1.5" />
      <text x="60" y="104" fill="#EDEFF2" fontSize="8" textAnchor="middle">t*</text>

      <line x1="90" y1="60" x2="150" y2="100" stroke="#232A35" />
      <text x="128" y="84" fill="#8A93A1" fontSize="9">r</text>
      <circle cx="150" cy="100" r="10" fill="#131720" stroke="#4FD1C5" strokeWidth="1.5" />
      <text x="150" y="104" fill="#EDEFF2" fontSize="8" textAnchor="middle">r</text>
      <line x1="150" y1="100" x2="150" y2="130" stroke="#232A35" />
      <text x="160" y="118" fill="#8A93A1" fontSize="9">d</text>

      <text x="10" y="135" fill="#4FD1C5" fontSize="9">words stored: cat, card  (* marks end of a word)</text>
    </svg>
  );
}

const registry: Record<string, () => JSX.Element> = {
  "big-o-growth-curves": GrowthCurves,
  "loop-complexity-blocks": LoopComplexityBlocks,
  "array-vs-linked-list": ArrayVsLinkedList,
  "linked-list-types": LinkedListTypes,
  "binary-tree-traversals": BinaryTreeTraversals,
  "graph-bfs-dfs": GraphBfsDfs,
  "merge-sort-tree": MergeSortTree,
  "max-heap-structure": MaxHeapStructure,
  "hash-chaining-probing": HashChainingProbing,
  "trie-structure": TrieStructure,
};

export default function Diagram({ svgKey }: { svgKey: string }) {
  const Renderer = registry[svgKey];
  if (!Renderer) {
    return (
      <div className="text-ink-faint text-sm font-mono p-6 text-center border border-dashed border-bg-border rounded-card">
        diagram not yet added
      </div>
    );
  }
  return <Renderer />;
}
