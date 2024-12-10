import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function WarningToast({ message, onClose }) {
    console.log(onClose)
    useEffect(() => {
        // Set a timer to automatically close the toast after 10 seconds
        const timer = setTimeout(() => {
            onClose();
        }, 10000); // 10 seconds

        // Clear the timer if the component is unmounted or if the toast is closed
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-4 right-4 z-50 flex w-full max-w-[490px] items-center rounded-lg border border-[#F5C5BB] bg-[#FCEDEA] p-4 shadow-lg">
            <div className="mr-5 flex h-[45px] w-full max-w-[45px] items-center justify-center rounded bg-[#EA4E2C] text-white">
                <FontAwesomeIcon icon={faExclamationTriangle} className="h-7 w-7" />
            </div>
            <div className="flex-1">
                <h6 className="text-base font-semibold text-black">
                    Uh oh, something went wrong
                </h6>
                <p className="text-sm text-gray-700">
                    {message}
                </p>
            </div>
            <button onClick={onClose} className="ml-4 flex items-center justify-center text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
}
