import { animated, useSpring } from '@react-spring/web'
import type {FC, ReactNode} from 'react'
import { useState } from 'react'
import css from './index.module.less'

interface MyProps {
    visible: boolean
    onClickMask?: () => void
    children?: ReactNode
    position?: 'bottom' | 'center'
}
const Popup: FC<MyProps> = ({
    visible,
    onClickMask,
    children,
    position = 'bottom',
}) => {
    const [maskVisible, setMaskVisible] = useState<boolean>(visible)
    const maskStyles = useSpring({
        visibility: maskVisible ? 'visible' : 'hidden' as 'visible' | 'hidden',
        opacity: visible ? 1 : 0,
        onStart: ({ value }) => {
            if (value.opacity < 0.1) { setMaskVisible(true) }
            
        },
        onRest: ({ value }) => {
            if (value.opacity < 0.1) { setMaskVisible(false) }
        }
    })
    const wrapperStyles = useSpring({
        visibility: visible ? 'visible' : 'hidden' as 'visible' | 'hidden',
        opacity: visible ? 1 : 0,
        transform: position === 'bottom'
            ? (visible ? 'translateY(0%)' : 'translateY(100%)')
            : '',
    })
    return (
        <>
            <animated.div
                onClick={() => onClickMask?.()}
                style={{ ...maskStyles }}
                className={css.mask}
            />
            {position === 'bottom'
                ? (
                    <animated.div style={{ ...wrapperStyles}} className={css.bottomWrapper}>
                        {children}
                    </animated.div>
                )
                : (
                    <animated.div style={{ ...wrapperStyles }} className={css.centerWrapper}>
                        {children}
                    </animated.div>
                )
            }
        </>
    )
}
export default Popup

