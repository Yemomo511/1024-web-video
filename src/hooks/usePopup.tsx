import type { ReactNode } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import Popup from '~components/Popup'

interface Options {
  initVisible?: boolean
  children: ReactNode
  position?: 'bottom' | 'center'
  zIndex?: string
}

const mask = document.getElementById('mask') as HTMLElement

export const usePopup = ({
    initVisible=false,
    children,
    position,
    zIndex
}:Options) => {
  const [visible, setVisible] = useState(initVisible)
  const popup = ReactDOM.createPortal(
    <Popup zIndex={zIndex} visible={visible} position={position}
      onClickMask={() => setVisible(false)} >
      {children}
    </Popup>,
    mask
  )
  return {
    popup,
    show() {
      setVisible(true)
    },
    hide() {
      setVisible(false)
    },
    toggle() {
      setVisible(!visible)
    }
  }
}