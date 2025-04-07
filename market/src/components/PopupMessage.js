import React, {useState} from "react";
import "./popup.css"
import { MdClose } from "react-icons/md";

const PopupMessage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleShowPopup = () => {
        setIsVisible(true);
    }

    const handleHidePopup = () => {
        setIsVisible(false);
    }
    return(
        <>
            <div>
                <button onClick={handleShowPopup} className="btn-show-popup">Show Popup</button>

                {
                    isVisible && (
                        <>
                            <div className="popup-overlay">
                                <div className="popup-container">
                                    <div className="popup-title">
                                        LOG IN
                                    </div>
                                    <div className="popup-image">
                                        <img src="https://placehold.co/300" alt="title" />
                                    </div>
                                    <div className="close-button" onClick={handleHidePopup}>
                                        <MdClose />
                                    </div>
                                </div>
                            </div>
                        </>
                    )

                }
            </div>
        </>
    )
}

export default PopupMessage;