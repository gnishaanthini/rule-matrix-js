(function() {
    // ==========================================
    // 1. DATA (Timeline Matrix Data)
    // ==========================================
   const RAW_STEPS = [
  {
    'step_id': 'step_1',
    'text': 'PonziLens+ combines a Path Feature Module (top), a Path Grouping Module (center), and an Execution Detail Module (bottom) to reveal suspicious payment patterns, supported by a left feature guide and legends.',
    'step_type': 'structure',
    'targets': {'target_view_id': 'multiple',
      'raw': {},
      'resolvedSelector': null},
    'actions': ['highlight'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_2',
    'text': 'Start in the Path Feature Module to spot Ponzi feature distributions, inspect the Path Grouping Module for action patterns and loops, then confirm execution details using the Execution Detail Module.',
    'step_type': 'structure',
    'targets': {'target_view_id': 'overview_action_dots_top',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'overview/summary container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G circle[cy="72.10993883792048"]',
            'confidence': 'high',
            'reason': 'row of action dots along the top overview track'},
          {'selector': 'g.overview_G circle[fill="#92b0c9" i]',
            'confidence': 'medium',
            'reason': 'Write action dots'},
          {'selector': 'g.overview_G circle[fill="#c67269" i]',
            'confidence': 'medium',
            'reason': 'Payment action dots'},
          {'selector': 'g.overview_G circle[fill="#dcbd8b" i]',
            'confidence': 'medium',
            'reason': 'Constraint action dots'},
          {'selector': 'g.overview_G circle[fill="#a6a6a6" i]',
            'confidence': 'medium',
            'reason': 'Read action dots'}]},
        'interaction': {'candidates': [{'selector': 'g.overview_G circle[stroke="black" i]',
            'confidence': 'medium',
            'reason': 'emphasized nodes likely hover/selection targets'}]}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_3',
    'text': 'All modules share a left-to-right execution order; align a colored dot\'s horizontal position across the Path Feature Module, Path Grouping Module, and Execution Detail Module to connect the same event.',
    'step_type': 'structure',
    'targets': {'target_view_id': 'overview_action_dots_top',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'overview/summary container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G circle[cy="72.10993883792048"]',
            'confidence': 'high',
            'reason': 'row of action dots along the top overview track'},
          {'selector': 'g.overview_G circle[fill="#92b0c9" i]',
            'confidence': 'medium',
            'reason': 'Write action dots'},
          {'selector': 'g.overview_G circle[fill="#c67269" i]',
            'confidence': 'medium',
            'reason': 'Payment action dots'},
          {'selector': 'g.overview_G circle[fill="#dcbd8b" i]',
            'confidence': 'medium',
            'reason': 'Constraint action dots'},
          {'selector': 'g.overview_G circle[fill="#a6a6a6" i]',
            'confidence': 'medium',
            'reason': 'Read action dots'}]},
        'interaction': {'candidates': [{'selector': 'g.overview_G circle[stroke="black" i]',
            'confidence': 'medium',
            'reason': 'emphasized nodes likely hover/selection targets'}]}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_4',
    'text': 'The left feature guide lists four Ponzi behaviors—Investing, Payment, Loop, and Rewarding—used to interpret highlighted marks and path group names.',
    'step_type': 'data',
    'targets': {'target_view_id': 'feature_guide_left',
      'raw': {'view': {'candidates': [{'selector': 'g.filter_G',
          'confidence': 'high',
          'reason': 'container or structural grouping'}]},
        'encoding': {'candidates': [{'selector': 'g.filter_G rect[fill="#648072" i]',
            'confidence': 'high',
            'reason': 'guide bars and pillars on the left'},
          {'selector': 'g.filter_G rect[fill="#d5ebe1" i]',
            'confidence': 'medium',
            'reason': 'outlined/empty guide bars on the left'},
          {'selector': 'g.filter_G path[fill="#648072" i]',
            'confidence': 'medium',
            'reason': 'shaded guide areas'},
          {'selector': 'g.filter_G path[fill^="url("]',
            'confidence': 'medium',
            'reason': 'gradient guide wedges'}]},
        'interaction': {'candidates': []}},
      'resolvedSelector': 'g.filter_G'},
    'actions': ['highlight', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_5',
    'text': 'The legend maps colored dots: blue W = Write Information, red P = Invoke Payment, yellow C = Check Constraint, gray R = Read Information.',
    'step_type': 'data',
    'targets': {'target_view_id': 'legend_actions',
      'raw': {'view': {'candidates': [{'selector': 'g.legend',
          'confidence': 'high',
          'reason': 'legend container group'}]},
        'encoding': {'candidates': [{'selector': 'g.legend g.WRITE circle',
            'confidence': 'high',
            'reason': 'Write action swatches'},
          {'selector': 'g.legend g.PAY circle',
            'confidence': 'high',
            'reason': 'Payment action swatches'},
          {'selector': 'g.legend g.CONS circle',
            'confidence': 'high',
            'reason': 'Constraint action swatches'},
          {'selector': 'g.legend g.READ circle',
            'confidence': 'high',
            'reason': 'Read action swatches'},
          {'selector': 'g.legend circle[fill="#92b0c9" i]',
            'confidence': 'medium',
            'reason': 'Write color sample'},
          {'selector': 'g.legend circle[fill="#c67269" i]',
            'confidence': 'medium',
            'reason': 'Payment color sample'},
          {'selector': 'g.legend circle[fill="#dcbd8b" i]',
            'confidence': 'medium',
            'reason': 'Constraint color sample'},
          {'selector': 'g.legend circle[fill="#a6a6a6" i]',
            'confidence': 'medium',
            'reason': 'Read color sample'}]},
        'interaction': {'candidates': [{'selector': 'g.legend g.WRITE',
            'confidence': 'medium',
            'reason': 'legend item group likely clickable'},
          {'selector': 'g.legend g.PAY',
            'confidence': 'medium',
            'reason': 'legend item group likely clickable'},
          {'selector': 'g.legend g.CONS',
            'confidence': 'medium',
            'reason': 'legend item group likely clickable'},
          {'selector': 'g.legend g.READ',
            'confidence': 'medium',
            'reason': 'legend item group likely clickable'}]}},
      'resolvedSelector': 'g.legend'},
    'actions': ['highlight', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_6',
    'text': 'Each colored dot represents one action; its left-to-right position shows execution order. A black-outlined circle highlights a notable Ponzi feature event—Investing (blue) or Payment (red).',
    'step_type': 'encoding',
    'targets': {'target_view_id': 'overview_action_dots_top',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'overview/summary container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G circle[cy="72.10993883792048"]',
            'confidence': 'high',
            'reason': 'row of action dots along the top overview track'},
          {'selector': 'g.overview_G circle[fill="#92b0c9" i]',
            'confidence': 'medium',
            'reason': 'Write action dots'},
          {'selector': 'g.overview_G circle[fill="#c67269" i]',
            'confidence': 'medium',
            'reason': 'Payment action dots'},
          {'selector': 'g.overview_G circle[fill="#dcbd8b" i]',
            'confidence': 'medium',
            'reason': 'Constraint action dots'},
          {'selector': 'g.overview_G circle[fill="#a6a6a6" i]',
            'confidence': 'medium',
            'reason': 'Read action dots'}]},
        'interaction': {'candidates': [{'selector': 'g.overview_G circle[stroke="black" i]',
            'confidence': 'medium',
            'reason': 'emphasized nodes likely hover/selection targets'}]}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'glow', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_7',
    'text': 'Each light-gray rounded card groups adjacent colored dots into a basic block—a sequence of instructions with no internal branches. These cards help you follow execution as compact units.',
    'step_type': 'encoding',
    'targets': {'target_view_id': 'overview_segment_boxes_top',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'overview container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G rect[fill="#dfe4ea" i][y="64.09388379204893"]',
            'confidence': 'high',
            'reason': 'top-row segment boxes'},
          {'selector': 'g.overview_G rect[fill="#dfe4ea" i][y="52.87140672782874"]',
            'confidence': 'medium',
            'reason': 'taller top segment boxes'},
          {'selector': 'g.overview_G rect[fill="#dfe4ea" i][y="40.04571865443425"]',
            'confidence': 'medium',
            'reason': 'header/topmost boxes'},
          {'selector': 'g.overview_G > rect[fill="#dfe4ea" i]',
            'confidence': 'medium',
            'reason': 'all overview segment boxes (fallback)'}]},
        'interaction': {'candidates': []}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'glow', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_8',
    'text': 'A purple wrapper enclosing a group of basic blocks indicates those blocks are executed in a loop (PF3). This is one of the most important Ponzi indicators—present in three out of four Ponzi scheme types.',
    'step_type': 'encoding',
    'targets': {'target_view_id': 'overview_loop_links_top',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'overview container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G path[stroke="#9b8ea9" i][stroke-width="1.5"]',
            'confidence': 'medium',
            'reason': 'purple loop wrapper drawn around looping basic blocks'}]},
        'interaction': {'candidates': []}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'glow', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_9',
    'text': 'The storage tracks beneath the action sequence depict which storage slots are accessed during execution. Purple square icons identify slot types: a solid square for variables, horizontal lines for arrays, vertical lines for mappings.',
    'step_type': 'data',
    'targets': {'target_view_id': 'storage_tracks_bottom',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'bottom storage tracks share the same overview container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G path.P10, g.overview_G path.P8, g.overview_G path.P9, g.overview_G path.P14, g.overview_G path.P0, g.overview_G path.P15',
            'confidence': 'high',
            'reason': 'multi-row storage timelines at the bottom'},
          {'selector': 'g.overview_G circle[cy="559.5395259938838"], g.overview_G circle[cy="591.9288417431194"], g.overview_G circle[cy="612.9709862385321"], g.overview_G circle[cy="641.4636085626912"], g.overview_G circle[cy="653.9330275229358"]',
            'confidence': 'medium',
            'reason': 'storage operation dots on bottom rows'}]},
        'interaction': {'candidates': []}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_10',
    'text': 'Purple circles beneath each storage slot icon represent the data stored there. Symbols like a person icon for CALLER (investor address) and $ for CALLVALUE (investment amount) highlight Ponzi-scheme-relevant content. A black border on a slot means it is used for Rewarding previous investors.',
    'step_type': 'encoding',
    'targets': {'target_view_id': 'storage_tracks_bottom',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'bottom storage tracks share the same overview container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G path.P10, g.overview_G path.P8, g.overview_G path.P9, g.overview_G path.P14, g.overview_G path.P0, g.overview_G path.P15',
            'confidence': 'high',
            'reason': 'multi-row storage timelines at the bottom'},
          {'selector': 'g.overview_G circle[cy="559.5395259938838"], g.overview_G circle[cy="591.9288417431194"], g.overview_G circle[cy="612.9709862385321"], g.overview_G circle[cy="641.4636085626912"], g.overview_G circle[cy="653.9330275229358"]',
            'confidence': 'medium',
            'reason': 'storage operation dots on bottom rows'}]},
        'interaction': {'candidates': []}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'glow', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_11',
    'text': 'In the Path Grouping Module, colored dots mark actions along merged execution paths arranged left to right. Actions within a loop are arranged on a two-round Archimedean spiral in the Execution Detail Module—outer circle for round one, inner circle for round two—so you can compare what changes between rounds.',
    'step_type': 'encoding',
    'targets': {'target_view_id': 'detail_flow_center',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'medium',
          'reason': 'contains the central detailed flow'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G path.P4',
            'confidence': 'high',
            'reason': 'primary center flow polyline'},
          {'selector': 'g.overview_G path.P2',
            'confidence': 'high',
            'reason': 'alternate center flow polyline'},
          {'selector': 'g.overview_G path.P3',
            'confidence': 'high',
            'reason': 'tertiary center flow polyline'},
          {'selector': 'g.overview_G circle[cy="193.93616207951072"]',
            'confidence': 'medium',
            'reason': 'center-row action nodes'}]},
        'interaction': {'candidates': [{'selector': 'g.overview_G path.arrow',
            'confidence': 'medium',
            'reason': 'callout arrow near center likely hover/annotation trigger'},
          {'selector': 'g.overview_G circle[stroke="black" i][cy="193.93616207951072"]',
            'confidence': 'medium',
            'reason': 'highlighted center nodes for interaction'}]}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'glow', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_12',
    'text': 'In the Execution Detail Module, lines connect Write Information and Invoke Payment actions to the storage slots they use. Blue lines indicate writing Ponzi-relevant content; red solid lines show where a payment retrieves its recipient address; red dashed lines show where it retrieves the payment amount.',
    'step_type': 'structure',
    'targets': {'target_view_id': 'storage_tracks_bottom',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'bottom storage tracks share the same overview container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G path.P10, g.overview_G path.P8, g.overview_G path.P9, g.overview_G path.P14, g.overview_G path.P0, g.overview_G path.P15',
            'confidence': 'high',
            'reason': 'storage connection lines linking actions to slots'},
          {'selector': 'g.overview_G circle[cy="559.5395259938838"], g.overview_G circle[cy="591.9288417431194"]',
            'confidence': 'medium',
            'reason': 'storage slot dots connected to actions'}]},
        'interaction': {'candidates': []}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_13',
    'text': 'In the Execution Detail Module spiral, look for red payment dots in the outer and inner circles that differ in their connected storage slots—this means the two loop rounds pay different recipients, a hallmark of chain-scheme Ponzi payouts.',
    'step_type': 'analytical',
    'targets': {'target_view_id': 'storage_tracks_bottom',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'execution detail module including spiral and storage'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G path.P4',
            'confidence': 'high',
            'reason': 'spiral loop flow polyline'},
          {'selector': 'g.overview_G circle[cy="193.93616207951072"]',
            'confidence': 'medium',
            'reason': 'action nodes in spiral rounds'}]},
        'interaction': {'candidates': [{'selector': 'g.overview_G circle[stroke="black" i]',
            'confidence': 'medium',
            'reason': 'highlighted inner circle actions indicating parameter differences between rounds'}]}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'trace', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_14',
    'text': 'In the Path Grouping Module, scan for stretches where red payment dots consistently follow yellow constraint dots; this means gated releases that may cascade across many recipients.',
    'step_type': 'analytical',
    'targets': {'target_view_id': 'overview_action_dots_top',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'overview/summary container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G circle[cy="72.10993883792048"]',
            'confidence': 'high',
            'reason': 'row of action dots along the top overview track'},
          {'selector': 'g.overview_G circle[fill="#92b0c9" i]',
            'confidence': 'medium',
            'reason': 'Write action dots'},
          {'selector': 'g.overview_G circle[fill="#c67269" i]',
            'confidence': 'medium',
            'reason': 'Payment action dots'},
          {'selector': 'g.overview_G circle[fill="#dcbd8b" i]',
            'confidence': 'medium',
            'reason': 'Constraint action dots'},
          {'selector': 'g.overview_G circle[fill="#a6a6a6" i]',
            'confidence': 'medium',
            'reason': 'Read action dots'}]},
        'interaction': {'candidates': [{'selector': 'g.overview_G circle[stroke="black" i]',
            'confidence': 'medium',
            'reason': 'emphasized nodes likely hover/selection targets'}]}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'trace', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_15',
    'text': 'In the storage tracks, look for many blue Write Information lines feeding a single slot whose icon is highlighted in black; concentrated writes to an investor-address slot confirm pooling of deposits before later payouts.',
    'step_type': 'analytical',
    'targets': {'target_view_id': 'storage_tracks_bottom',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'bottom storage tracks share the same overview container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G path.P10, g.overview_G path.P8, g.overview_G path.P9, g.overview_G path.P14, g.overview_G path.P0, g.overview_G path.P15',
            'confidence': 'high',
            'reason': 'multi-row storage timelines at the bottom'},
          {'selector': 'g.overview_G circle[cy="559.5395259938838"], g.overview_G circle[cy="591.9288417431194"], g.overview_G circle[cy="612.9709862385321"], g.overview_G circle[cy="641.4636085626912"], g.overview_G circle[cy="653.9330275229358"]',
            'confidence': 'medium',
            'reason': 'storage operation dots on bottom rows'}]},
        'interaction': {'candidates': []}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'trace', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_16',
    'text': 'When a black-outlined red payment dot appears, hover over it to see its tooltip showing the recipient address and payment amount. Then trace its red solid and dashed lines down to storage to confirm whether it pays a previous investor (Rewarding) or returns money to the current caller (Payback).',
    'step_type': 'analytical',
    'targets': {'target_view_id': 'overview_action_dots_top',
      'raw': {'view': {'candidates': [{'selector': 'g.overview_G',
          'confidence': 'high',
          'reason': 'overview/summary container'}]},
        'encoding': {'candidates': [{'selector': 'g.overview_G circle[cy="72.10993883792048"]',
            'confidence': 'high',
            'reason': 'row of action dots along the top overview track'},
          {'selector': 'g.overview_G circle[fill="#c67269" i]',
            'confidence': 'medium',
            'reason': 'Payment action dots'},
          {'selector': 'g.overview_G circle[stroke="black" i]',
            'confidence': 'medium',
            'reason': 'highlighted payment events'}]},
        'interaction': {'candidates': [{'selector': 'g.overview_G circle[stroke="black" i]',
            'confidence': 'medium',
            'reason': 'hover to reveal tooltip with payment details'}]}},
      'resolvedSelector': 'g.overview_G'},
    'actions': ['highlight', 'trace', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  },
  {
    'step_id': 'step_17',
    'text': 'Use the Highlight Features legend to decode the four Ponzi feature symbols: a black-outlined blue dot for Investing, a black-outlined red dot for Payment, a purple wrapper for Loop, and a black line connecting Investing to Payment for Rewarding.',
    'step_type': 'data',
    'targets': {'target_view_id': 'legend_highlights',
      'raw': {'view': {'candidates': [{'selector': 'g.legend',
          'confidence': 'high',
          'reason': 'legend container group'}]},
        'encoding': {'candidates': [{'selector': 'g.legend path[stroke="#9b8ea9" i]',
            'confidence': 'high',
            'reason': 'loop highlight glyphs'},
          {'selector': 'g.legend circle[stroke="black" i][r="6"]',
            'confidence': 'medium',
            'reason': 'outlined highlight markers for Investing and Payment'},
          {'selector': 'g.legend circle[fill="#92b0c9" i]',
            'confidence': 'medium',
            'reason': 'Investing highlight symbol'},
          {'selector': 'g.legend circle[fill="#c67269" i]',
            'confidence': 'medium',
            'reason': 'Payment highlight symbol'}]},
        'interaction': {'candidates': [{'selector': 'g.legend circle[stroke="black" i]',
            'confidence': 'low',
            'reason': 'outlined legend markers commonly used as toggles'},
          {'selector': 'g.legend path[stroke="#9b8ea9" i]',
            'confidence': 'low',
            'reason': 'loop glyphs may be hoverable legend items'}]}},
      'resolvedSelector': 'g.legend'},
    'actions': ['highlight', 'annotation'],
    'annotation': {'type': 'callout', 'placement': 'auto'}
  }
];

    
    // ==========================================
    // 2. HELPER: UTILS (Your Generalization Logic)
    // ==========================================
    const injectStyles = () => {
        if (document.getElementById('vw-styles')) return;
        const style = document.createElement('style');
        style.id = 'vw-styles';
        style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

      /* ── Toggle bar ── */
      /* ── Moved Toggle Bar to Top-Right ── */
#vw-toggle-bar {
  position: fixed;
  top: 12px;
  right: 16px;
  display: inline-flex; /* Use inline-flex so it only takes up needed space */
  width: auto;         /* Prevent it from stretching across the screen */
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.96);
  border: 0.5px solid rgba(0,0,0,0.12);
  border-radius: 12px;
  padding: 4px 5px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 2147483647;
  pointer-events: all; /* Ensure buttons are clickable... */
}

.vw-toggle-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 13px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #666;
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
  letter-spacing: 0;
}

.vw-toggle-btn:hover:not(.active) {
  background: rgba(0,0,0,0.05);
  color: #222;
}

.vw-toggle-btn.active {
  background: #111;
  color: #fff;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.vw-toggle-divider {
  width: 0.5px;
  height: 18px;
  background: rgba(0,0,0,0.1);
  margin: 0 2px;
  flex-shrink: 0;
}

.vw-audio-btn {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  color: #666;
  transition: background 0.15s, color 0.15s;
}

.vw-audio-btn:hover {
  background: rgba(0,0,0,0.05);
  color: #222;
}
      /* ── Scrolly layout ── */
      body.vw-scrolly-active { overflow:hidden !important; }
      #vw-left  { position:fixed; left:0; width:calc(100% - 320px); overflow:auto; background:white; z-index:2147483640; }
#vw-right { position:fixed; right:0; width:320px; overflow-y:scroll; background:#fcfcfc; border-left:1px solid #eee; z-index:2147483641; display:flex; flex-direction:column; }
      #vw-scale { transform-origin:top left; transition:transform 0.3s ease; padding:20px; }

      /* ── Breadcrumb bar ── */
      #vw-breadcrumb { position:sticky; top:0; z-index:10; background:rgba(252,252,252,0.97); backdrop-filter:blur(6px); border-bottom:1px solid #e8e8e8; padding:10px 14px 8px; font-family:'DM Mono',monospace; font-size:11px; flex-shrink:0; }
      #vw-breadcrumb .vw-bc-label { color:#999; letter-spacing:.06em; text-transform:uppercase; margin-bottom:6px; }
      #vw-breadcrumb .vw-bc-track { display:flex; align-items:center; gap:3px; flex-wrap:wrap; }
      .vw-bc-dot { width:8px; height:8px; border-radius:50%; background:#ddd; transition:all 0.3s; cursor:default; flex-shrink:0; }
      .vw-bc-dot.done    { background:#7fba8a; }
      .vw-bc-dot.current { background:#3b7ef5; width:22px; border-radius:4px; box-shadow:0 0 0 3px rgba(59,126,245,0.2); }
      .vw-bc-dot.upcoming { background:#e0e0e0; }
      #vw-breadcrumb .vw-bc-counter { margin-top:5px; color:#666; font-size:12px; font-family:sans-serif; }
      #vw-breadcrumb .vw-bc-counter strong { color:#3b7ef5; }

      /* ── Scrolly cards ── */
      #vw-steps-scroll { flex:1; overflow-y:scroll; padding-bottom:40vh; }
      .vw-step { min-height:80vh; display:flex; align-items:center; padding:16px 14px; box-sizing:border-box; }
      .vw-card { background:white; padding:20px; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.08); opacity:0.4; transition:all 0.3s; border-left:4px solid transparent; width:100%; color:#333; font-family:'DM Sans',sans-serif; font-size:14px; line-height:1.5; }
      .vw-card.active { opacity:1; border-left:5px solid #3b7ef5; transform:scale(1.02); box-shadow:0 6px 20px rgba(59,126,245,0.15); }
      .vw-step-type {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 2px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    border: 1px solid transparent;
}

/* Color Palette for Categories */
.type-structure   { color: #a8a8a8; background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
.type-data        { color: #2ecc71; background: rgba(46, 204, 113, 0.1); border-color: rgba(46, 204, 113, 0.2); }
.type-encoding    { color: #3498db; background: rgba(52, 152, 219, 0.1); border-color: rgba(52, 152, 219, 0.2); }
.type-analytical  { color: #9b59b6; background: rgba(155, 89, 182, 0.1); border-color: rgba(155, 89, 182, 0.2); }
.type-interaction { color: #e67e22; background: rgba(230, 126, 34, 0.1); border-color: rgba(230, 126, 34, 0.2); }

/* Card Header Layout Adjustment */
.vw-card-header {
    display: flex;
    align-items: center;
    gap: 8px; /* Spacing between Step # and Type */
    margin-bottom: 12px;
}

.vw-badge {
    margin-bottom: 0 !important; /* Reset existing margin if any */
}
      .vw-step-counter { font-size:11px; color:#aaa; font-family:'DM Mono',monospace; letter-spacing:.04em; background:#f5f5f5; padding:3px 8px; border-radius:20px; }
      .vw-step-counter span { color:#3b7ef5; font-weight:700; }

      /* ── Highlight & dim ── */
      .vw-dim { opacity:0.6 !important; transition:opacity 0.4s; }
      .vw-highlight { opacity:1 !important; }
      g.vw-highlight *, .vw-highlight * { opacity:1 !important; fill-opacity:1; }
      .vw-ring { outline:2px solid #569cd6; outline-offset:3px; }

      /* ── Pulse ── */
      .vw-pulse { animation:vw-pulse-glow 1.5s infinite; }
      @keyframes vw-pulse-glow {
        0%   { filter:drop-shadow(0 0 2px #3498db); stroke-width:2; }
        50%  { filter:drop-shadow(0 0 10px #3498db); stroke-width:5; }
        100% { filter:drop-shadow(0 0 2px #3498db); stroke-width:2; }
      }
      .vw-spotlight-ring { animation:vw-ring-pulse 2s ease-in-out infinite; }
      @keyframes vw-ring-pulse { 0%,100% { opacity:.7; stroke-width:2; } 50% { opacity:1; stroke-width:3; } }
      .vw-connector { fill:none; stroke:#3498db; stroke-width:2; stroke-dasharray:5; animation:vw-dash 1s linear infinite; }
      @keyframes vw-dash { to { stroke-dashoffset:-10; } }
      .vw-locked { border:2px solid #e74c3c !important; background:#fff5f5 !important; }
      .vw-interaction-hint { color:#e74c3c; font-weight:bold; font-size:11px; margin-top:10px; text-transform:uppercase; }

      /* ════════════════════════════════════════════════════
         ELEGANT INSPECTOR PANEL
         ════════════════════════════════════════════════════ */
      #vw-inspector {
        position: fixed;
        top: 72px; right: 16px;
        width: 336px; bottom: 16px;
        background: rgba(11, 12, 17, 0.94);
        backdrop-filter: blur(28px) saturate(180%);
        -webkit-backdrop-filter: blur(28px) saturate(180%);
        border: 1px solid rgba(255,255,255,0.08);
        border-top: 1px solid rgba(255,255,255,0.13);
        box-shadow:
          0 0 0 1px rgba(0,0,0,0.5),
          0 32px 72px rgba(0,0,0,0.65),
          inset 0 1px 0 rgba(255,255,255,0.06);
        border-radius: 18px;
        z-index: 2147483645;
        font-family: 'DM Sans', -apple-system, sans-serif;
        display: flex;
        flex-direction: column;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.35s cubic-bezier(0.16,1,0.3,1),
                    transform 0.35s cubic-bezier(0.16,1,0.3,1);
        transform: translateX(14px) scale(0.97);
        overflow: hidden;
        color: #e2e4ea;
      }

      #vw-inspector.visible {
        opacity: 1; pointer-events: auto;
        transform: translateX(0) scale(1);
      }

      /* ── Drag Header ── */
      #vw-insp-drag {
        display: flex; align-items: center; justify-content: space-between;
        padding: 14px 16px 12px;
        cursor: grab; flex-shrink: 0;
        border-bottom: 1px solid rgba(255,255,255,0.06);
        background: rgba(255,255,255,0.025);
        user-select: none;
      }
      #vw-insp-drag:active { cursor: grabbing; }

      .vw-drag-handle {
        display: flex; align-items: center; gap: 9px;
        color: rgba(255,255,255,0.32);
        font-size: 10.5px;
        font-family: 'DM Mono', monospace;
        letter-spacing: 0.13em;
        text-transform: uppercase;
        font-weight: 500;
      }

      .vw-drag-handle::before {
        content: '';
        display: grid;
        grid-template-columns: repeat(3, 3px);
        grid-template-rows: repeat(2, 3px);
        gap: 2.5px;
        width: 14px; height: 10px;
        background-image: radial-gradient(circle, rgba(255,255,255,0.28) 1.2px, transparent 1.2px);
        background-size: 5.5px 5.5px;
      }

      /* ── Scrollable content ── */
      .vw-insp-scroll-area {
        flex: 1; overflow-y: auto; overflow-x: hidden;
        display: flex; flex-direction: column;
        scrollbar-width: thin;
        scrollbar-color: rgba(255,255,255,0.08) transparent;
      }
      .vw-insp-scroll-area::-webkit-scrollbar { width: 3px; }
      .vw-insp-scroll-area::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.09); border-radius: 4px; }

      /* ── Inspector body ── */
      #vw-insp-body { padding: 18px 16px 10px; flex-shrink: 0; }

      .vw-insp-title {
        font-size: 16px; font-weight: 600;
        color: #f0f2f8; letter-spacing: -0.02em; line-height: 1.3;
        margin-bottom: 14px; padding-bottom: 13px;
        border-bottom: 1px solid rgba(255,255,255,0.07);
      }

      /* ── Collapsible sections ── */
      .vw-collapsible-sect {
        margin-bottom: 5px; border-radius: 10px; overflow: hidden;
        background: rgba(255,255,255,0.025);
        border: 1px solid rgba(255,255,255,0.055);
        transition: background 0.18s;
      }
      .vw-collapsible-sect:hover { background: rgba(255,255,255,0.04); }

      .vw-collapsible-sect summary {
        display: flex; align-items: center; gap: 7px;
        padding: 9px 13px;
        font-size: 10.5px; font-weight: 600;
        letter-spacing: 0.06em; text-transform: uppercase;
        color: rgba(255,255,255,0.38);
        cursor: pointer; list-style: none;
        transition: color 0.18s; user-select: none;
      }
      .vw-collapsible-sect summary::-webkit-details-marker { display: none; }
      .vw-collapsible-sect summary::after {
        content: '›'; margin-left: auto;
        font-size: 15px; color: rgba(255,255,255,0.18);
        transition: transform 0.2s, color 0.2s; display: inline-block;
      }
      .vw-collapsible-sect[open] summary { color: rgba(255,255,255,0.65); }
      .vw-collapsible-sect[open] summary::after { transform: rotate(90deg); color: rgba(255,255,255,0.35); }

      .vw-collapsible-sect .vw-insp-txt {
        padding: 2px 13px 13px;
        font-size: 12.5px; line-height: 1.68;
        color: rgba(200,208,228,0.78); font-weight: 400;
        animation: vw-sect-open 0.18s ease;
      }
      @keyframes vw-sect-open {
        from { opacity:0; transform:translateY(-4px); }
        to   { opacity:1; transform:translateY(0); }
      }
      .vw-sect-icon { font-size: 12px; opacity: 0.65; }

      /* ── AI divider ── */
      .vw-chatbot-branding {
        display: flex; align-items: center; gap: 9px;
        padding: 13px 16px 8px; flex-shrink: 0;
      }
      .vw-chatbot-branding::before {
        content: ''; flex: 1; height: 1px;
        background: linear-gradient(to right, transparent, rgba(255,255,255,0.07));
      }
      .vw-chatbot-branding::after {
        content: ''; flex: 0 0 30px; height: 1px;
        background: rgba(255,255,255,0.05);
      }
      .vw-chatbot-branding span {
        font-family: 'DM Mono', monospace; font-size: 9.5px; font-weight: 500;
        letter-spacing: 0.15em; text-transform: uppercase;
        color: rgba(255,255,255,0.22);
      }
      .vw-ai-sparkle {
        width: 20px; height: 20px; border-radius: 6px;
        background: linear-gradient(135deg, #3b7ef5, #8b5cf6);
        display: flex; align-items: center; justify-content: center;
        font-size: 10px; color: white; flex-shrink: 0;
        box-shadow: 0 2px 10px rgba(59,126,245,0.45);
      }

      /* ── Chat container ── */
      .vw-chat-container {
        display: flex; flex-direction: column;
        flex: 1; min-height: 0;
        border-top: 1px solid rgba(255,255,255,0.05);
      }

      .vw-chat-messages {
        flex: 1; overflow-y: auto;
        padding: 12px 13px; display: flex; flex-direction: column; gap: 9px;
        scrollbar-width: thin;
        scrollbar-color: rgba(255,255,255,0.07) transparent;
        min-height: 100px;
      }
      .vw-chat-messages::-webkit-scrollbar { width: 3px; }
      .vw-chat-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.07); border-radius: 4px; }

      /* ── Message bubbles ── */
      .vw-msg {
        max-width: 84%; padding: 9px 13px; border-radius: 14px;
        font-size: 12.5px; line-height: 1.55; font-weight: 400;
        animation: vw-pop 0.22s cubic-bezier(0.34,1.56,0.64,1);
        word-break: break-word;
      }
      @keyframes vw-pop {
        from { transform: scale(0.88) translateY(4px); opacity: 0; }
        to   { transform: scale(1) translateY(0); opacity: 1; }
      }
      .vw-msg.bot {
        background: rgba(255,255,255,0.058); color: rgba(215,222,240,0.88);
        align-self: flex-start; border-bottom-left-radius: 4px;
        border: 1px solid rgba(255,255,255,0.065);
      }
      .vw-msg.user {
        background: linear-gradient(135deg, #3067d4, #4f4fd4);
        color: #fff; align-self: flex-end; border-bottom-right-radius: 4px;
        box-shadow: 0 4px 18px rgba(59,126,245,0.32);
      }

      /* ── Chat input ── */
      .vw-chat-input-area {
        display: flex; align-items: center; gap: 8px;
        padding: 11px 13px 13px;
        background: rgba(0,0,0,0.18);
        border-top: 1px solid rgba(255,255,255,0.05); flex-shrink: 0;
      }
      #vw-chat-input {
        flex: 1; background: rgba(255,255,255,0.055);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 22px; color: rgba(225,230,248,0.9);
        padding: 8px 15px; font-size: 12.5px;
        font-family: 'DM Sans', sans-serif; outline: none;
        transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        caret-color: #4f8ef7;
      }
      #vw-chat-input::placeholder { color: rgba(255,255,255,0.18); }
      #vw-chat-input:focus {
        border-color: rgba(59,126,245,0.48);
        background: rgba(255,255,255,0.08);
        box-shadow: 0 0 0 3px rgba(59,126,245,0.1);
      }
      #vw-chat-send {
        width: 32px; height: 32px; border-radius: 50%;
        background: linear-gradient(135deg, #3b7ef5, #5b5ef7);
        border: none; color: white; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
        box-shadow: 0 3px 12px rgba(59,126,245,0.4);
      }
      #vw-chat-send:hover { transform: scale(1.1); box-shadow: 0 5px 20px rgba(59,126,245,0.58); filter: brightness(1.08); }
      #vw-chat-send:active { transform: scale(0.93); }
      .vw-audio-btn {
    background: transparent;
    border: none;
    color: #bdc3c7;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
    transition: color 0.2s;
}
.vw-audio-btn:hover { color: white; }

#vw-editor-overlay {
    position: fixed; top:0; left:0; width:100%; height:100%;
    background: rgba(0,0,0,0.7); display:flex; align-items:center; justify-content:center;
    z-index: 2147483647; font-family: 'DM Sans', sans-serif;
}
#vw-editor-modal {
    background: #1e1e1e; color: white; padding: 24px; border-radius: 12px;
    width: 400px; display: flex; flex-direction: column; gap: 12px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5); border: 1px solid #333;
}
#vw-editor-modal h3 { margin: 0 0 10px 0; font-size: 18px; color: #3b7ef5; }
#vw-editor-modal label { font-size: 11px; text-transform: uppercase; color: #888; font-weight: bold; }
#vw-editor-modal textarea { height: 80px; background: #2d2d2d; color: white; border: 1px solid #444; border-radius: 4px; padding: 8px; resize: none; }
#vw-editor-modal select, #vw-editor-modal input { background: #2d2d2d; color: white; border: 1px solid #444; padding: 8px; border-radius: 4px; }
.vw-modal-btns { display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; }
.vw-modal-btns button { padding: 8px 16px; border-radius: 6px; cursor: pointer; border: none; font-weight: bold; }
#vw-modal-cancel { background: #444; color: white; }
#vw-modal-save.primary { background: #3b7ef5; color: white; }
/* Elegant Narration Pill under Progress */
.vw-narration-pill {
    background: #f0f2f5;
    border: 1px solid #e0e4e8;
    color: #4a5568;
    padding: 6px 24px;
    border-radius: 24px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
}

.vw-narration-pill:hover {
    background: #fff;
    border-color: #3b7ef5;
    color: #3b7ef5;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 126, 245, 0.15);
}

.vw-narration-pill.active {
    background: #3b7ef5;
    border-color: #3b7ef5;
    color: #fff;
    box-shadow: 0 4px 15px rgba(59, 126, 245, 0.3);
}

.vw-narration-pill .vw-icon {
    font-size: 8px;
}

/* Optional: Pulse effect when active */
.vw-narration-pill.active .vw-icon {
    animation: vw-blink 1.5s infinite;
}

@keyframes vw-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}
    `;
        document.head.appendChild(style);
    };

    // ─────────────────────────────────────────────────────────────
    // 3. CORE MANAGER
    // ─────────────────────────────────────────────────────────────
    class MatrixWalkthrough {
        constructor() {
            this.steps = RAW_STEPS;
            this.mode = 'none';
            this.apiKey = '';
            this.synth = window.speechSynthesis;
            this.isMuted = false;
            this.currentContext = null;
        }

        init() {
            injectStyles();
            this._renderToggleBar();
        }

        setMode(newMode) {
            if (this.mode === newMode) return;
            this._teardown();
            this.mode = newMode;
            document.querySelectorAll('.vw-toggle-btn').forEach(b => b.classList.toggle('active', b.id === `vw-btn-${newMode}`));

            if (newMode === 'scrolly') this._initScrolly();
            if (newMode === 'explore') this._initExplore();
        }
        _makeDraggable(el, handle) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            handle.onmousedown = (e) => {
                e.preventDefault();
                pos3 = e.clientX; pos4 = e.clientY;
                document.onmouseup = () => { document.onmouseup = null; document.onmousemove = null; };
                document.onmousemove = (e) => {
                    e.preventDefault();
                    pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY;
                    pos3 = e.clientX; pos4 = e.clientY;
                    el.style.top = (el.offsetTop - pos2) + "px";
                    el.style.left = (el.offsetLeft - pos1) + "px";
                    el.style.bottom = 'auto';
                };
            };
        }
        _generalizeData(rawSteps) {
            const merged = new Map();

            // 1. Updated getTitle with strict null checks
            const getTitle = (step) => {
                if (!step || !step.targets) return "Component";

                const rawReason = step.targets.raw?.view?.candidates?.[0]?.reason ||
                    step.targets.raw?.encoding?.candidates?.[0]?.reason;

                if (rawReason) {
                    return rawReason
                        .toLowerCase()
                        .replace(/^(container (group )?for (the )?|view of (the )?|marks that encode )/, '')
                        .split(';')[0]
                        .trim()
                        .replace(/\b\w/g, l => l.toUpperCase());
                }

                return "Visualization Component";
            };

            const categorize = (txt) => {
                if (!txt) return { encoding: "", insight: "", interaction: "" };
                const sentences = txt.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
                const b = { encoding: [], insight: [], interaction: [] };
                sentences.forEach(s => {
                    const l = s.toLowerCase().trim();
                    if (!l) return;
                    if (l.match(/(click|hover|drag|load|select|update|use the|pan|zoom|interact|press|move)/)) b.interaction.push(s.trim());
                    else if (l.match(/(represent|encode|show|color|glyph|indicate|signifies|blue|red|pink|green|circle|rect|line|link|size|magnitude|gradient|bar)/)) b.encoding.push(s.trim());
                    else b.insight.push(s.trim());
                });
                return {
                    encoding: b.encoding.join(' ') || "Visual marks represent data points in this section.",
                    insight: b.insight.join(' ') || "Observe the patterns and distributions shown here.",
                    interaction: b.interaction.join(' ') || "Interact with this component to see more details."
                };
            };

            // 2. Loop with safety check
            rawSteps.forEach(step => {
                if (!step) return; // Skip if step itself is undefined

                // Use resolvedSelector as the unique key for grouping
                let key = step.targets?.resolvedSelector || 'General_Overview';

                if (!merged.has(key)) {
                    merged.set(key, {
                        step_id: key,
                        title: key === 'General_Overview' ? 'General Overview' : getTitle(step), // Pass the whole step
                        rawText: '',
                        selector: key
                    });
                }
                merged.get(key).rawText += ' ' + (step.text || "");
            });

            return Array.from(merged.values()).map(e => ({ ...e, content: categorize(e.rawText) }));
        }


        // --- SCROLLYTELLING LOGIC ---
        _initScrolly() {
            document.body.classList.add('vw-scrolly-active');
            this.originalNodes = Array.from(document.body.children).filter(n => !n.id.startsWith('vw-') && n.tagName !== 'SCRIPT' && n.tagName !== 'STYLE');

            const left = document.createElement('div'); left.id = 'vw-left';
            const wrapper = document.createElement('div'); wrapper.id = 'vw-scale';
            const right = document.createElement('div'); right.id = 'vw-right';

            const bar = document.getElementById('vw-toggle-bar');
const barHeight = 70; // Hardcode a safe margin for the top-right buttons
left.style.top = barHeight + 'px';
left.style.height = `calc(100vh - ${barHeight}px)`;
right.style.top = barHeight + 'px';
right.style.height = `calc(100vh - ${barHeight}px)`;

            this.originalNodes.forEach(n => wrapper.appendChild(n));
            left.appendChild(wrapper);
            document.body.appendChild(left);
            document.body.appendChild(right);

            const total = this.steps.length;

            const bcBar = document.createElement('div');
            bcBar.id = 'vw-breadcrumb';
            bcBar.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%;">
        <div style="width: 100%;">
            <div class="vw-bc-label" style="text-align: center; margin-bottom: 8px;">Tour Progress</div>
            <div class="vw-bc-track" id="vw-bc-track" style="justify-content: center;"></div>
        </div>
        
        <button id="vw-start-audio" class="vw-narration-pill">
            <span class="vw-icon">▶</span> START NARRATION
        </button>

        <div class="vw-bc-counter">Step <strong id="vw-bc-num">1</strong> of <strong>${total}</strong></div>
    </div>
`;
            right.appendChild(bcBar);

            const audioBtn = bcBar.querySelector('#vw-start-audio');

            audioBtn.onclick = () => {
                // Toggle state
                this.narrationStarted = !this.narrationStarted;

                if (this.narrationStarted) {
                    audioBtn.classList.add('active');
                    audioBtn.innerHTML = `<span class="vw-icon">●</span> NARRATION ACTIVE`;

                    // Start speaking current step immediately
                    const idx = this._currentStepIdx || 0;
                    this._speak(this.steps[idx].text);
                } else {
                    audioBtn.classList.remove('active');
                    audioBtn.innerHTML = `<span class="vw-icon">▶</span> START NARRATION`;
                    this.synth.cancel(); // Stop talking immediately
                }
            };

            const track = bcBar.querySelector('#vw-bc-track');
            for (let i = 0; i < total; i++) {
                const dot = document.createElement('div');
                dot.className = 'vw-bc-dot' + (i === 0 ? ' current' : ' upcoming');
                dot.dataset.idx = i;
                dot.addEventListener('click', () => {
                    const target = right.querySelector(`.vw-step[data-index="${i}"]`);
                    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
                dot.title = `Step ${i + 1}`;
                track.appendChild(dot);
            }

            const updateBreadcrumb = (idx) => {
                this._currentStepIdx = idx;
                document.getElementById('vw-bc-num').textContent = idx + 1;
                track.querySelectorAll('.vw-bc-dot').forEach((dot, i) => {
                    dot.className = 'vw-bc-dot ' + (i < idx ? 'done' : i === idx ? 'current' : 'upcoming');
                });
            };

            const stepsScroll = document.createElement('div');
            stepsScroll.id = 'vw-steps-scroll';
            right.appendChild(stepsScroll);

            this.steps.forEach((step, i) => {
                const div = document.createElement('div');
                div.className = 'vw-step';
                div.dataset.index = i;
                const isLocked = step.actions?.includes('wait_for_interaction');
                const typeLabel = step.step_type || 'general';

                const typeIcons = {
                    structure: '🏗️',
                    data: '📊',
                    encoding: '🎨',
                    analytical: '💡',
                    interaction: '🖱️'
                };

                const icon = typeIcons[step.step_type] || '📑';

                div.innerHTML = `
        <div class="vw-card ${isLocked ? 'vw-locked' : ''}">
            <div class="vw-card-header">
            <div class="vw-badge">Step ${i + 1}</div>
            <div class="vw-step-type type-${typeLabel}">${icon} ${typeLabel.toUpperCase()}</div>
            </div>
            <div class="vw-step-text">${step.text}</div>
            ${isLocked ? '<div class="vw-interaction-hint">👆 Interaction required</div>' : ''}
        </div>`;
                stepsScroll.appendChild(div);
            });

            const endPad = document.createElement('div'); endPad.style.height = "50vh"; stepsScroll.appendChild(endPad);

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log("Step visible:", entry.target.dataset.index);
                        const stepIdx = parseInt(entry.target.dataset.index, 10);
                        const step = this.steps[stepIdx];
                        document.querySelectorAll('.vw-card').forEach(c => c.classList.remove('active'));
                        entry.target.querySelector('.vw-card').classList.add('active');
                        updateBreadcrumb(stepIdx);
                        this._applyStepVisuals(step);
                        if (step.actions?.includes('wait_for_interaction')) {
                            this._setupInteractionBlock(step, entry.target, stepsScroll);
                        }
                        if (this.narrationStarted) {
                            this._speak(step.text);
                        }
                    }
                });
            }, { root: stepsScroll, threshold: 0.6 });

            stepsScroll.querySelectorAll('.vw-step').forEach(el => observer.observe(el));
            this.scrollyObserver = observer;
        }

        // --- EXPLORATION & CHAT LOGIC ---
        _initExplore() {
            const steps = this._generalizeData(this.steps);
            let insp = document.getElementById('vw-inspector');
            if (!insp) {
                insp = document.createElement('div');
                insp.id = 'vw-inspector';
                insp.innerHTML = `
        <div id="vw-insp-drag">
          <span class="vw-drag-handle">Component Inspector</span>
          <button id="vw-insp-close" style="background:none;border:none;color:rgba(255,255,255,0.25);cursor:pointer;font-size:16px;line-height:1;padding:0;transition:color 0.2s;" onmouseover="this.style.color='rgba(255,255,255,0.7)'" onmouseout="this.style.color='rgba(255,255,255,0.25)'">×</button>
        </div>
        <div class="vw-insp-scroll-area">
          <div id="vw-insp-body"></div>
          <div class="vw-chatbot-branding">
            <div class="vw-ai-sparkle">✦</div>
            <span>Exploration Assistant</span>
          </div>
          <div class="vw-chat-container">
            <div class="vw-chat-messages" id="vw-chat-history">
              <div class="vw-msg bot">Hi. What would you like to know about this visualization?</div>
            </div>
            <div class="vw-chat-input-area">
              <input type="text" id="vw-chat-input" placeholder="Ask about this visualization…" autocomplete="off">
              <button id="vw-chat-send" title="Send">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>`;
                document.body.appendChild(insp);
                this._makeDraggable(insp, document.getElementById('vw-insp-drag'));
                document.getElementById('vw-insp-close').onclick = () => insp.classList.remove('visible');
            }

            const input = document.getElementById('vw-chat-input');
            const sendBtn = document.getElementById('vw-chat-send');

            const sendMsg = async () => {
                const txt = input.value.trim();
                if (!txt) return;
                this._addChatMessage('user', txt);
                input.value = '';
                const historyDiv = document.getElementById('vw-chat-history');
                const loadingId = 'loading-' + Date.now();
                const loadingMsg = document.createElement('div');
                loadingMsg.className = 'vw-msg bot';
                loadingMsg.id = loadingId;
                loadingMsg.innerHTML = '<span style="opacity:0.6;font-style:italic;">Thinking…</span>';
                historyDiv.appendChild(loadingMsg);
                historyDiv.scrollTop = historyDiv.scrollHeight;
                try {
                    const response = await this._fetchChatGPTResponse(txt);
                    document.getElementById(loadingId).remove();
                    this._addChatMessage('bot', response);
                } catch (error) {
                    if (document.getElementById(loadingId)) document.getElementById(loadingId).remove();
                    this._addChatMessage('bot', "Error: Check your API Key or Console.");
                    console.error(error);
                }
            };

            sendBtn.onclick = (e) => { e.preventDefault(); sendMsg(); };
            input.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); sendMsg(); } };

            setTimeout(() => insp.classList.add('visible'), 50);

            const render = (s) => {
                if (!s) return;
                this.currentContext = s;
                const body = document.getElementById('vw-insp-body');
                if (!body) return;

                // Ensure we are actually updating the DOM
                body.innerHTML = `
            <div class="vw-insp-title">${s.title}</div>
            <details open class="vw-collapsible-sect">
              <summary><span class="vw-sect-icon">📐</span> Purpose & Encoding</summary>
              <div class="vw-insp-txt">${s.content.encoding}</div>
            </details>
            <details open class="vw-collapsible-sect">
              <summary><span class="vw-sect-icon">🔍</span> What to look for</summary>
              <div class="vw-insp-txt">${s.content.insight}</div>
            </details>
            <details open class="vw-collapsible-sect">
              <summary><span class="vw-sect-icon">🖱️</span> How to interact</summary>
              <div class="vw-insp-txt">${s.content.interaction}</div>
            </details>`;
            };

            const overview = steps.find(s => s.step_id === 'General_Overview') || steps[0];
            render(overview);

            this.exploreHandler = (e) => {
                if (e.target.closest('#vw-inspector') || e.target.closest('#vw-toggle-bar')) return;

                let match = null;

                // Get the target and its ancestry once
                const target = e.target;

                for (let step of steps) {
                    if (step.selector === 'General_Overview' || !step.selector) continue;

                    try {
                        // Check if the element or any parent matches the selector
                        // We use closest() because the user is hovering the <rect>, 
                        // but the selector might be the <g> container.
                        if (target.matches(step.selector) || target.closest(step.selector)) {
                            match = step;
                            break;
                        }
                    } catch (err) {
                        // If the selector is malformed (common with unescaped transform strings),
                        // skip it so the script doesn't crash
                        continue;
                    }
                }

                // Update the UI only if we found a new component
                if (match && match !== this.currentContext) {
                    render(match);
                    // Visual feedback
                    document.querySelectorAll('.vw-ring').forEach(el => el.classList.remove('vw-ring'));
                    const highlightEl = target.closest(match.selector) || target;
                    highlightEl.classList.add('vw-ring');
                } else if (!match && this.currentContext !== overview) {
                    // Fall back to overview if we move to empty space
                    render(overview);
                    document.querySelectorAll('.vw-ring').forEach(el => el.classList.remove('vw-ring'));
                }
            };

            document.body.addEventListener('mouseover', this.exploreHandler);
        }

        _updateInspectorUI(step) {
            document.getElementById('vw-insp-body').innerHTML = `
                <div style="font-size:16px; font-weight:600; color:#fff;">${step.step_id.toUpperCase()}</div>
                <div style="font-size:13px; color:rgba(255,255,255,0.8); line-height:1.6; margin-top:8px;">${step.text}</div>
            `;
        }

        async _getSVGBitmap() {
            const svg = document.querySelector('svg');
            if (!svg) return null;

            // Clone the SVG to avoid mutating the live DOM during serialization
            const clonedSvg = svg.cloneNode(true);
            const serializer = new XMLSerializer();
            const svgString = serializer.serializeToString(clonedSvg);
            
            // Create a Blob and URL
            const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);

            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const bbox = svg.getBoundingClientRect();
                    
                    // Set canvas dimensions based on the actual SVG size
                    canvas.width = bbox.width;
                    canvas.height = bbox.height;
                    
                    const ctx = canvas.getContext('2d');
                    // Fill background white (standard for GPT vision processing)
                    ctx.fillStyle = "white";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, bbox.width, bbox.height);
                    
                    URL.revokeObjectURL(url);
                    // Export as Base64 PNG
                    const base64 = canvas.toDataURL('image/png');
                    resolve(base64);
                };
                img.onerror = () => resolve(null);
                img.src = url;
            });
        }
        async _fetchChatGPTResponse(txt) {
  const bitmapUrl = await this._getSVGBitmap();

  const contextData = JSON.stringify(
    this.steps.map(s => ({
      component: s.step_id,
      description: s.text,
      visual_targets: s.targets
    }))
  );

  const currentFocus = this.currentContext
    ? this.currentContext.title
    : 'the general overview';

  const currentDetails = this.currentContext
    ? JSON.stringify(this.currentContext.content)
    : '';

  // Build the user message (text + optional image)
  let userContent = [{ type: 'text', text: txt }];
  if (bitmapUrl) {
    userContent.push({
      type: 'image_url',
      image_url: { url: bitmapUrl, detail: 'low' }
    });
  }

  // ✅ Call YOUR backend — no API key in extension
  const res = await fetch('https://vizpilot-backend.onrender.com/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [
        {
          role: 'system',
          content: `You are an expert data visualization assistant.
Reference data: ${contextData}
User is viewing: ${currentFocus}.
Details: ${currentDetails}
Answer strictly based on reference data. Keep answers under 50 words.`
        },
        { role: 'user', content: userContent }
      ]
    })
  });

  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.reply;
}
        async _fetchAIResponse(question) {
            const history = document.getElementById('vw-chat-history');
            const loading = document.createElement('div');
            loading.className = 'vw-msg bot';
            loading.style.opacity = '0.5';
            loading.innerText = 'Thinking...';
            history.appendChild(loading);

            const context = JSON.stringify(this.steps.map(s => ({ id: s.step_id, info: s.text })));
            const currentFocus = this.currentContext ? this.currentContext.text : "General Overview";

            try {
                const res = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apiKey}` },
                    body: JSON.stringify({
                        model: "gpt-4o",
                        messages: [
                            { role: "system", content: `You are an expert guide for the MatrixWave visualization. Context: ${context}. User is currently looking at: ${currentFocus}. Keep answers under 60 words.` },
                            { role: "user", content: question }
                        ]
                    })
                });
                const data = await res.json();
                loading.remove();
                this._addChatMessage('bot', data.choices[0].message.content);
            } catch (e) {
                loading.innerText = "Error connecting to AI. Please check your API key.";
            }
        }

        _addChatMessage(role, text) {
            const hist = document.getElementById('vw-chat-history');
            const msg = document.createElement('div');
            msg.className = `vw-msg ${role}`;
            msg.innerText = text;
            hist.appendChild(msg);
            hist.scrollTop = hist.scrollHeight;
        }

        // --- VISUALS & SPEECH ---
        _applyStepVisuals(step) {
    const leftContainer = document.getElementById('vw-left');
    const svg = leftContainer ? leftContainer.querySelector('svg') : document.querySelector('svg');
    
    if (!svg) return;

    // 1. Reset: Aggressively dim everything else
    // Using a very low opacity (0.1) creates the "spotlight" effect seen in image 1
    svg.querySelectorAll('*').forEach(el => {
        el.style.opacity = '0.5'; 
        el.style.transition = 'opacity 0.3s ease, fill-opacity 0.3s ease';
    });

    const selector = step.targets?.resolvedSelector;

    // 2. Highlighting Logic
    if (selector && selector !== 'svg') {
        try {
            const containers = svg.querySelectorAll(selector);
            
            containers.forEach(container => {
                // Highlight the container and EVERY child element inside it
                const allElements = [container, ...container.querySelectorAll('*')];
                
                allElements.forEach(el => {
                    el.style.opacity = '1';
                    // If your CSS uses fill-opacity for the dots/paths, override it here
                    if (el.hasAttribute('fill-opacity')) el.style.fillOpacity = '1';
                    if (el.hasAttribute('stroke-opacity')) el.style.strokeOpacity = '1';
                });

                // 3. Ensure the parent hierarchy is visible
                let p = container.parentElement;
                while (p && p !== svg) {
                    p.style.opacity = '1';
                    p = p.parentElement;
                }
            });
        } catch (e) {
            console.error("Highlighting error:", e);
        }
    } else {
        // Default state: everything bright
        svg.querySelectorAll('*').forEach(el => el.style.opacity = '1');
    }
}
        _speak(text) {
            if (this.isMuted) return;
            this.synth.cancel();
            const utter = new SpeechSynthesisUtterance(text);
            utter.rate = 1.0;
            this.synth.speak(utter);
        }

        _teardown() {
            this.synth.cancel();
            if (this.scrollyObserver) this.scrollyObserver.disconnect();
            const right = document.getElementById('vw-right-pane'); if (right) right.remove();
            const insp = document.getElementById('vw-inspector'); if (insp) insp.remove();
            if (this.exploreHandler) document.body.removeEventListener('mouseover', this.exploreHandler);
            document.querySelectorAll('svg *').forEach(el => el.style.opacity = '1');
            this.narrationActive = false;
        }

        _renderToggleBar() {
    const bar = document.createElement('div');
    bar.id = 'vw-toggle-bar';
    bar.innerHTML = `
        <button class="vw-toggle-btn" id="vw-btn-scrolly">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="14" height="3" rx="1" fill="currentColor"/>
                <rect x="0" y="5.5" width="10" height="2" rx="1" fill="currentColor" opacity="0.45"/>
                <rect x="0" y="9.5" width="12" height="2" rx="1" fill="currentColor" opacity="0.45"/>
            </svg>
            Guided tour
        </button>
        <button class="vw-toggle-btn" id="vw-btn-explore">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="2.5" fill="currentColor"/>
                <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.9 2.9l1.06 1.06M10.04 10.04l1.06 1.06M10.04 3.96l1.06-1.06M2.9 11.1l1.06-1.06" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            Free exploration
        </button>
        <div class="vw-toggle-divider"></div>
        <button class="vw-audio-btn" id="vw-mute-btn" title="Toggle audio">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5.5H1a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h1.5l3.5 2.5V3L2.5 5.5z" fill="currentColor"/>
                <path d="M9.5 5a3.2 3.2 0 010 6M11.5 3a5.8 5.8 0 010 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
        </button>
    `;
    document.body.appendChild(bar);

    document.getElementById('vw-btn-scrolly').onclick = () => this.setMode('scrolly');
    document.getElementById('vw-btn-explore').onclick = () => this.setMode('explore');
    document.getElementById('vw-mute-btn').onclick = (e) => {
        this.isMuted = !this.isMuted;
        const btn = e.currentTarget;
        btn.style.opacity = this.isMuted ? '0.35' : '1';
        if (this.isMuted) this.synth.cancel();
    };
}
    }

    // Launch
    const walkthrough = new MatrixWalkthrough();
    walkthrough.init();
})();
