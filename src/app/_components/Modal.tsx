
import React from 'react';
import {IoCloseSharp} from 'react-icons/io5'
// eslint-disable-next-line @typescript-eslint/ban-types
const Modal = ({ isVisible, onClose, title, children }: { isVisible: boolean, onClose: Function, title: string, children: React.ReactNode}) => {
    if (!isVisible) return null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClose = (e: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if( e.target.id === 'wrapper') onClose();
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
            <div className='w-[400px] bg-light-accent rounded'>
                <div className='bg-primary p-2 rounded text-dark-shade flex flex-col'>
                    <div className='w-auto'>
                        <div className='text-xl place-self-start float-left'>{title}</div>
                        <div className='text-xl place-self-end hover:cursor-pointer float-right' onClick={() => onClose()}><IoCloseSharp size='28'/></div>
                    </div>
                    <div className='flex flex-col items-center'>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal