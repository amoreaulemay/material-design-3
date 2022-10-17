import {MdcIcon} from '@components/mdc-icon'
import {useState, virtual} from 'haunted'
import {html, TemplateResult} from 'lit'
import {classMap} from 'lit/directives/class-map.js'

export interface MDCIconButtonProps {
  icon: string
  selected?: boolean
  disabled?: boolean
  selectable?: boolean | string
}

const ICON_SIZE = 24

export const MdcBaseIconButton: (props: Partial<HTMLElement> & MDCIconButtonProps) => TemplateResult = virtual(function (
  this: HTMLElement,
  {icon, selected, disabled, selectable}: MDCIconButtonProps
) {
  const [isActive, setIsActive] = useState(selected ?? false)
  const handleClick = () => {
    if (typeof selectable !== 'undefined' && (!Boolean(selectable) || selectable === 'false')) {
      return
    }
    setIsActive(!isActive)
  }
  const removeFocus = (e: MouseEvent) => (e.target as HTMLButtonElement).blur()

  return html`
    <!-- Touch target to make sure to get 48x48 for accessibility -->
    <div
      role="button"
      class=${classMap({
        'touch-target': true,
        disabled: disabled ?? false,
      })}
      @mouseup=${removeFocus}
      @click=${handleClick}
    >
      <button
        tabindex="0"
        ?disabled=${disabled}
        class=${classMap({
          active: isActive,
        })}
      >
        ${MdcIcon({
          name: icon,
          size: ICON_SIZE,
          color: `var(--mdc-icon-btn-color)`,
          fill: isActive,
        })}
      </button>
    </div>
  `
})
