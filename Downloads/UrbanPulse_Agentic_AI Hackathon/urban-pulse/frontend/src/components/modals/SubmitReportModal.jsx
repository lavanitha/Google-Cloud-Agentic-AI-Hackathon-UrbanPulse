import React, { useState } from "react";
import { X, MapPin, Upload } from "lucide-react";
import "./SubmitReportModal.css";

const SubmitReportModal = ({ onClose, onSubmit, location }) => {
  // Form state
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!category) {
      newErrors.category = "Please select a category";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    } else if (description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = () => {
    if (!validateForm()) return;

    const payload = {
      category,
      description,
      location: {
        lat: location.lat,
        lng: location.lng,
        area: location.area,
      },
      timestamp: new Date().toISOString(),
    };

    onSubmit(payload);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {/* Header */}
        <div className="modal-header">
          <h2>Submit Report</h2>
          <X className="close-icon" size={18} onClick={onClose} />
        </div>

        <p className="modal-subtext">
          Report an incident happening in your city. All reports will be verified
          before alerts are created.
        </p>

        {/* Location */}
        <div className="form-group">
          <label>
            <MapPin size={14} />
            Location
          </label>
          <input
            type="text"
            value={location.area}
            disabled
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Traffic">Traffic</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Public Safety">Public Safety</option>
            <option value="Social Event">Social Event</option>
            <option value="Weather">Weather</option>
          </select>
          {errors.category && (
            <span className="error-text">{errors.category}</span>
          )}
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Describe the incident..."
            maxLength={300}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="char-count">{description.length}/300</div>
          {errors.description && (
            <span className="error-text">{errors.description}</span>
          )}
        </div>

        {/* Upload (UI only for now) */}
        <div className="upload-box">
          <Upload size={18} />
          <span>Attach up to 3 images (optional)</span>
        </div>

        <p className="privacy-text">
          Your report is anonymous. AI will verify this before alerts are created.
        </p>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitReportModal;
