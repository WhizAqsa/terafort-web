import { useState } from 'react'
import styles from './QuoteForm.module.scss'

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        description: "",
        nda: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Quote request submitted:", formData)
        // Handle form submission logic here
    }

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const services = [
        "Custom Software Development",
        "Mobile App Development",
        "Web Development",
        "Data & Analytics Solutions",
        "Cloud Services",
        "Cybersecurity Services",
    ]

    const budgets = [
        "Under $10,000",
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "$50,000 - $100,000",
        "$100,000+"
    ]

    const timelines = [
        "1-3 months",
        "3-6 months",
        "6-12 months",
        "12+ months"
    ]

    return (
        <section className={styles.quoteSection}>
            <div className={styles.container}>
                <div className={styles.quoteCard}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.cardTitle}>Request a Quote</h2>
                        <p className={styles.cardDescription}>
                            Tell us about your project and we&apos;ll provide a detailed proposal within 24 hours
                        </p>
                    </div>

                    <div className={styles.cardContent}>
                        <form onSubmit={handleSubmit} className={styles.quoteForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.formLabel}>Full Name *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className={styles.formInput}
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.formLabel}>Email Address *</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className={styles.formInput}
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="company" className={styles.formLabel}>Company Name *</label>
                                    <input
                                        id="company"
                                        type="text"
                                        className={styles.formInput}
                                        value={formData.company}
                                        onChange={(e) => handleInputChange('company', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className={styles.formInput}
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.formRowThree}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="service" className={styles.formLabel}>Service Required *</label>
                                    <select
                                        id="service"
                                        className={styles.formSelect}
                                        value={formData.service}
                                        onChange={(e) => handleInputChange('service', e.target.value)}
                                        required
                                    >
                                        <option value="">Select service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="budget" className={styles.formLabel}>Project Budget</label>
                                    <select
                                        id="budget"
                                        className={styles.formSelect}
                                        value={formData.budget}
                                        onChange={(e) => handleInputChange('budget', e.target.value)}
                                    >
                                        <option value="">Select budget range</option>
                                        {budgets.map((budget) => (
                                            <option key={budget} value={budget}>
                                                {budget}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="timeline" className={styles.formLabel}>Timeline</label>
                                    <select
                                        id="timeline"
                                        className={styles.formSelect}
                                        value={formData.timeline}
                                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                                    >
                                        <option value="">Select timeline</option>
                                        {timelines.map((timeline) => (
                                            <option key={timeline} value={timeline}>
                                                {timeline}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="description" className={styles.formLabel}>Project Description *</label>
                                <textarea
                                    id="description"
                                    rows={5}
                                    className={styles.formTextarea}
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    placeholder="Please describe your project requirements, goals, and any specific features you need..."
                                    required
                                />
                            </div>

                            <div className={styles.checkboxGroup}>
                                <input
                                    id="nda"
                                    type="checkbox"
                                    className={styles.formCheckbox}
                                    checked={formData.nda}
                                    onChange={(e) => handleInputChange('nda', e.target.checked)}
                                />
                                <label htmlFor="nda" className={styles.checkboxLabel}>
                                    I would like to sign an NDA before discussing project details
                                </label>
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Submit Quote Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
