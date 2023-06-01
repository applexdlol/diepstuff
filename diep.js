  const main_panel = document.createElement('div')
  main_panel.id = 'main_panel'

  // Anchor
  const anchor = document.createElement('a')
  anchor.id = 'anchor'

  // Header
  const header = document.createElement('h1')
  header.textContent = 'spritelol hack v2'
  anchor.appendChild(header)

  // Main Menu Button
  const main_menu_button = document.createElement('button')
  main_menu_button.classList.add('button')
  main_menu_button.textContent = 'Main Menu'
  main_menu_button.onclick = resetDisplayPanel

  // Holder panel
  const holder_panel = document.createElement('div')
  holder_panel.id = 'holder_panel'
  anchor.appendChild(holder_panel)

  // Display panel
  const display_panel = document.createElement('div')
  display_panel.classList.add('panel_1')
  holder_panel.appendChild(display_panel)
  display_panel.style.width = '100%'
  display_panel.style.marginLeft = '4px'

  // Save the initial state of the panel
  const initialDisplayState = display_panel.innerHTML;

  // Function to restore the initial state
  function resetDisplayPanel() {
    display_panel.innerHTML = '';
    display_panel.appendChild(visual_tab);
    display_panel.appendChild(auto_upgrades_tab);
  }

  //== VISUAL TAB
  const view_line = document.createElement('div')
  view_line.style.textAlign = 'left'
  view_line.style.alignItems = 'center'
  view_line.style.height = '33px'
  view_line.style.display = 'flex'

  const view_line_text = document.createElement('span')
  view_line_text.style.fontWeight = 'bold'
  view_line_text.textContent = 'View Aim Line'

  const view_line_label = document.createElement('label')
  view_line_label.classList.add('switch')

  const view_line_toggle = document.createElement('INPUT')
  view_line_toggle.setAttribute('type', 'checkbox')
  view_line_label.appendChild(view_line_toggle)

  const view_line_div = document.createElement('div')
  view_line_label.appendChild(view_line_div)
  view_line.appendChild(view_line_label)
  view_line.appendChild(view_line_text)

  // Aim Line Color Picker
  const aim_line_color_picker = document.createElement('input')
  aim_line_color_picker.type = 'color'
  aim_line_color_picker.value = '#000000' // Default color

  const aim_line_color_label = document.createElement('span')
  aim_line_color_label.style.fontWeight = 'bold'
  aim_line_color_label.textContent = 'Aim Line Color'

  const aim_line_color_section = document.createElement('div')
  aim_line_color_section.style.display = 'flex'
  aim_line_color_section.style.alignItems = 'center'
  aim_line_color_section.appendChild(aim_line_color_picker)
  aim_line_color_section.appendChild(aim_line_color_label)

  // Show HP Toggle
  const show_hp_toggle = document.createElement('div')
  show_hp_toggle.style.textAlign = 'left'
  show_hp_toggle.style.alignItems = 'center'
  show_hp_toggle.style.height = '33px'
  show_hp_toggle.style.display = 'flex'

  const show_hp_toggle_text = document.createElement('span')
  show_hp_toggle_text.style.fontWeight = 'bold'
  show_hp_toggle_text.textContent = 'Show HP'

  const show_hp_toggle_label = document.createElement('label')
  show_hp_toggle_label.classList.add('switch')

  const show_hp_toggle_input = document.createElement('INPUT')
  show_hp_toggle_input.setAttribute('type', 'checkbox')
  show_hp_toggle_label.appendChild(show_hp_toggle_input)

  const show_hp_toggle_div = document.createElement('div')
  show_hp_toggle_label.appendChild(show_hp_toggle_div)
  show_hp_toggle.appendChild(show_hp_toggle_label)
  show_hp_toggle.appendChild(show_hp_toggle_text)

  // Debug Collisions Toggle
  const debug_collisions_toggle = document.createElement('div')
  debug_collisions_toggle.style.textAlign = 'left'
  debug_collisions_toggle.style.alignItems = 'center'
  debug_collisions_toggle.style.height = '33px'
  debug_collisions_toggle.style.display = 'flex'

  const debug_collisions_toggle_text = document.createElement('span')
  debug_collisions_toggle_text.style.fontWeight = 'bold'
  debug_collisions_toggle_text.textContent = 'Debug Collisions'

  const debug_collisions_toggle_label = document.createElement('label')
  debug_collisions_toggle_label.classList.add('switch')

  const debug_collisions_toggle_input = document.createElement('INPUT')
  debug_collisions_toggle_input.setAttribute('type', 'checkbox')
  debug_collisions_toggle_label.appendChild(debug_collisions_toggle_input)

  const debug_collisions_toggle_div = document.createElement('div')
  debug_collisions_toggle_label.appendChild(debug_collisions_toggle_div)
  debug_collisions_toggle.appendChild(debug_collisions_toggle_label)
  debug_collisions_toggle.appendChild(debug_collisions_toggle_text)

  // Tab Control
  const visual_tab = document.createElement('button')
  visual_tab.classList.add('tab_button')
  display_panel.appendChild(visual_tab)
  visual_tab.textContent = 'Visual'
  visual_tab.onclick = function () {
    display_panel.innerHTML = ``
    display_panel.appendChild(main_menu_button)
    display_panel.appendChild(view_line)
    display_panel.appendChild(aim_line_color_section)
    display_panel.appendChild(show_hp_toggle)
    display_panel.appendChild(debug_collisions_toggle)
  }

  //== AUTO UPGRADES TAB
  const au_label = document.createElement('span')
  au_label.textContent = 'Custom Build'
  au_label.style.fontWeight = 'bold'

  const au_input = document.createElement('INPUT')
  au_input.ariaReadOnly = 'true'
  au_input.setAttribute('type', 'text')
  au_input.style.borderColor = 'rgb(20 20 20)'
  au_input.style.borderRadius = '5px'
  au_input.style.marginTop = '4px'
  au_input.style.outline = 'none'
  au_input.style.color = 'white'
  au_input.placeholder = 'ex: 12345678'
  au_input.style.backgroundColor = 'rgb(25 25 25)'

  const au_set_button = document.createElement('button')
  au_set_button.classList.add('button')
  au_set_button.textContent = 'Set Build'

  au_set_button.onclick = function () {
    input.execute('game_stats_build ' + au_input.value)
  }

  // Auto Set Toggle
  const auto_set_toggle = document.createElement('div')
  auto_set_toggle.style.textAlign = 'left'
  auto_set_toggle.style.alignItems = 'center'
  auto_set_toggle.style.height = '33px'
  auto_set_toggle.style.display = 'flex'

  const auto_set_toggle_text = document.createElement('span')
  auto_set_toggle_text.style.fontWeight = 'bold'
  auto_set_toggle_text.textContent = 'Keep Build on Respawn'

  const auto_set_toggle_label = document.createElement('label')
  auto_set_toggle_label.classList.add('switch')

  const auto_set_toggle_input = document.createElement('INPUT')
  auto_set_toggle_input.setAttribute('type', 'checkbox')
  auto_set_toggle_label.appendChild(auto_set_toggle_input)

  const auto_set_toggle_div = document.createElement('div')
  auto_set_toggle_label.appendChild(auto_set_toggle_div)
  auto_set_toggle.appendChild(auto_set_toggle_label)
  auto_set_toggle.appendChild(auto_set_toggle_text)

  // Tab Control
  const auto_upgrades_tab = document.createElement('button')
  auto_upgrades_tab.classList.add('tab_button')
  display_panel.appendChild(auto_upgrades_tab)
  auto_upgrades_tab.textContent = 'Auto Upgrades'
  auto_upgrades_tab.onclick = function () {
    display_panel.innerHTML = ``
    display_panel.style.textAlign = 'left'
    display_panel.appendChild(main_menu_button)
    display_panel.appendChild(au_label)
    display_panel.appendChild(au_input)
    display_panel.appendChild(au_set_button)
    display_panel.appendChild(auto_set_toggle)
  }

  //== Style ==//
  const style = document.createElement('style')
  style.textContent = `
    #main_panel a {
      position: absolute;
      font-family: 'Outfit', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
    }

    #anchor {
      display: inline-flex;
      flex-direction: column;
      width: 600px;
      height: 300px;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 7px 14px 7px;
      color: #4b8b00; /* Text color set to dark blue */
      background: rgba(15, 15, 15, 0.8); /* Background set to transparent black */
      border-radius: 7px;
      border-style: solid;
      border-width: 2px;
      border-color: rgb(60 60 60);
    }

    #holder_panel {
      display: inline-flex;
      flex-direction: row;
      height: 100%;
    }

    h1 {
      margin-top: 10px;
      margin-bottom: 5px;
      color: #4b8b00; /* Title color set to dark blue */
    }

    .switch input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .switch {
      display: inline-block;
      font-size: 20px; /* 1 */
      height: 1em;
      width: 2em;
      background: rgb(50 50 50);
      border-radius: 1em;
      margin-right: 10px;
      cursor: pointer;
    }

    .switch div {
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background: rgb(100 100 100);
      -webkit-transition: all 100ms;
      -moz-transition: all 100ms;
      transition: all 100ms;
      cursor: pointer;
    }

    .switch input:checked + div {
      -webkit-transform: translate3d(100%, 0, 0);
      -moz-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      background: rgb(40 200 140)
    }

    .panel_1 {
      display: inline-flex;
      flex-direction: column;
      padding: 4px;
      width: fit-content;
      height: 100%;
      border-radius: 5px;
      background: rgba(30, 30, 30, 0.8); /* Panel background set to transparent black */
      white-space: nowrap;
      color: #4b8b00; /* Panel text color set to dark blue */
    }

    .button, .tab_button {
      font-family: 'Outfit', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
      font-weight: bold;
      cursor: pointer;
      font-size: 14px;
      padding: 2px 4px 2px 4px;
      margin-top: 2px;
      margin-bottom: 2px;
      color: #4b8b00; /* Button text color set to dark blue */
      background: rgba(50, 50, 50, 0.8); /* Button background set to transparent black */
      border-radius: 3px;
      border: 2px solid #4b8b00; /* Border color set to dark blue */
    }

    .button:hover, .tab_button:hover {
      background: rgba(100, 100, 100, 0.8); /* Button hover background set to transparent gray */
    }

    .button:active, .tab_button:active {
      background: rgba(200, 200, 200, 0.8); /* Button active background set to transparent light gray */
    }

    .tab_button_selected {
      background: rgba(40, 200, 140, 0.8); /* Selected button background set to transparent green */
    }
  `

  //== Appends ==//
  main_panel.appendChild(anchor)
  document.body.appendChild(main_panel)
  document.head.appendChild(style)

  //== Funcs ==//
  function ToggleDisplay(element_id) {
    var element = document.getElementById(element_id)
    element.style.display = element.style.display === 'none' ? 'block' : 'none'
  }

  //== Vars ==//
  let X, Y, x, y
  let Z = false
  let radius = []

  //== Events ==//
  document.body.onkeyup = function (ctx) {
    if (ctx.keyCode === 27) {
      ToggleDisplay('main_panel')
    } else if (
      document.activeElement === au_input &&
      parseInt(ctx.key) >= 1 &&
      parseInt(ctx.key) <= 8
    ) {
      au_input.value = au_input.value + ctx.key
    } else if (document.activeElement === au_input && ctx.keyCode === 8) {
      au_input.value = au_input.value.slice(0, -1)
    }
  }

  document.onmousemove = function () {
    x = event.clientX
    y = event.clientY
  }

  document.onmousedown = function (e) {
    if (e.button == 2) {
      Z = true
    }
  }

  document.onmouseup = function (e) {
    if (e.button == 2) {
      Z = false
    }
  }

  //== Draw Funcs ==//
  const canvas = document.createElement('canvas')

  function get_Radius() {
    X = window.innerWidth / 2
    Y = window.innerHeight / 2
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    radius[0] = window.innerWidth * 0.17681239669
    radius[1] = window.innerWidth * 0.06545454545
    radius[2] = window.innerWidth * 0.16751239669
    radius[3] = window.innerWidth * 0.36
  }
  get_Radius()
  window.addEventListener('resize', get_Radius)

  canvas.style.position = 'absolute'
  canvas.style.top = '0px'
  canvas.style.left = '0px'
  canvas.style.pointerEvents = 'none'

  document.body.appendChild(canvas)
  const ctx = canvas.getContext('2d')

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aim Line
    if (view_line_toggle.checked) {
      ctx.beginPath();
      ctx.moveTo(X, Y);
      ctx.lineTo(x, y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = aim_line_color_picker.value;
      ctx.stroke();
    }

    if (auto_set_toggle_input.checked) {
      input.execute('game_stats_build ' + au_input.value);
    }

    requestAnimationFrame(draw);
  }

  // Function to toggle Show HP
  function toggleShowHP() {
    if (show_hp_toggle_input.checked) {
      unsafeWindow.input.set_convar('ren_raw_health_values', true);
    } else {
      unsafeWindow.input.set_convar('ren_raw_health_values', false);
    }
  }

  // Function to toggle Debug Collisions
  function toggleDebugCollisions() {
    if (debug_collisions_toggle_input.checked) {
      unsafeWindow.input.set_convar('ren_debug_collisions', true);
    } else {
      unsafeWindow.input.set_convar('ren_debug_collisions', false);
    }
  }

  show_hp_toggle_input.addEventListener('change', toggleShowHP);
  debug_collisions_toggle_input.addEventListener('change', toggleDebugCollisions);

  draw();
