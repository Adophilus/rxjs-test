import { fromEvent } from 'rxjs'

export const template = document.createElement('template')
template.innerHTML = `
<div>
  <input type="text" class="input" />
  <p class="presentation" />
</div>
`

class ReactiveField extends HTMLElement {
  _shadowRoot: ShadowRoot
  $input!: HTMLInputElement
  $presentation!: HTMLInputElement

  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'closed' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = this._shadowRoot.querySelector('.input')!
    this.$presentation = this._shadowRoot.querySelector('.presentation')!
  }

  connectedCallback() {
    fromEvent(this.$input, 'keyup').subscribe(this._onInput.bind(this))
  }

  _onInput() {
    this.$presentation.innerText = this.$input.value
  }
}

window.customElements.define('reactive-field', ReactiveField)

export default ReactiveField
