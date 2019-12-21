import {
  Terminal
} from 'xterm'
import {
  SearchAddon
} from 'xterm-addon-search'
import {
  WebLinksAddon
} from 'xterm-addon-web-links'

var terminal = new Terminal({
  cols: 100,
  cursorBlink: true,
  cursorStyle: 'bar',
  fontSize: 20
})

terminal.loadAddon(new SearchAddon())

terminal.loadAddon(new WebLinksAddon())

export default terminal
