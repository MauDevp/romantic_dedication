// @ts-nocheck
// ModalContext.js
'use client'
// src/context/ModalContext.js
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

    return (
        <ModalContext.Provider value={{ modalContent, openModal, closeModal }}>
            {children}
            {modalContent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        {modalContent}
                </div>
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);