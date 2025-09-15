import React from 'react';
import './GlobalSpinner.scss'; // optional for styling
import { CircularProgress } from "@imports/MaterialUIIcons";

const GlobalSpinner: React.FC = () => {
    return (
        <div className="global-spinner-overlay">
            <CircularProgress size={60} thickness={5} />
            <p className="spinner-text">Loading, please wait...</p>
        </div>
    );
};

export default GlobalSpinner;