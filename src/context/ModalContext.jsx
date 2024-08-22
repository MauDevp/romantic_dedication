// @ts-nocheck
'use client'
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext({
    modalContent: null,
    openModal: (/** @type {any} */ content) => {},
    closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (/** @type {React.SetStateAction<null>} */ content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

    return (
        <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
            {children}
            {modalContent && (
                <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
                        {modalContent}
                </div>
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);