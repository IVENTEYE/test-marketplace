import { IModal } from '../types'

const Modal: React.FC<IModal> = ({ children, active = false }) => {
  return (
    <div className={active ? 'modal modal--active' : 'modal'}>
        <div className='modal-body'>
            {children}
        </div>
    </div>
  )
}

export default Modal