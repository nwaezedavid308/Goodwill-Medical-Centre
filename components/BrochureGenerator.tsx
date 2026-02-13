import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const BrochureGenerator: React.FC = () => {
    const [isGenerating, setIsGenerating] = useState(false);

    // Data for the brochure - matching content from About, Services, and Impact
    const VISION_TEXT = "Too many families in Nigeria go without basic medical attention due to cost, distance, or fear of being turned away. That’s why we built GMC—not just as a hospital, but as a sanctuary of care.";
    const MISSION_TEXT = "Situated in the heart of Umuchigbo, Enugu East, we exist to bring hope, healing, and quality medical care to those who need it most—especially low-income families and underserved communities.";

    const SERVICES = [
        "1. General Outpatient Care - Comprehensive medical consultations.",
        "2. Eye Health & Cataract Surgeries - Expert eye care and surgeries.",
        "3. Maternal & Child Health - Antenatal, delivery, and postnatal care.",
        "4. Diagnostic Laboratory & Scan - Accurate diagnostic services.",
        "5. Accident & Emergency - 24/7 emergency care.",
        "6. Paediatric Care - Specialized care for newborns and children.",
        "7. ENT Services - Ear, Nose, and Throat diagnosis.",
        "8. Inpatient Admissions - Comfortable wards and surgical procedures.",
        "9. Health Education - Community outreach and preventive education.",
        "10. School-Based Eye Screening - Protecting vision of the next generation."
    ];

    const IMPACT_STATS = [
        ["7,534", "Total patients attended"],
        ["154+", "Enrolled in Health Insurance"],
        ["60", "Indigent members reaching UHC goal"],
        ["100%", "Increase in antenatal bookings"]
    ];

    const ADDITIONAL_IMPACT = [
        "Avah River Bridge: Commissioned April 2025, reducing travel time.",
        "TBA Intervention: Trained 21 Traditional Birth Attendants.",
        "Eye Screening: Screened 600 students, provided 150 spectacles."
    ];

    const generatePDF = async () => {
        setIsGenerating(true);
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 15;
        let yPos = margin;

        // --- Helper Functions ---
        const addCenteredText = (text: string, y: number, size: number, font: string = 'helvetica', style: string = 'normal') => {
            doc.setFont(font, style);
            doc.setFontSize(size);
            const textWidth = doc.getTextWidth(text);
            doc.text(text, (pageWidth - textWidth) / 2, y);
        };

        const loadImage = (url: string): Promise<HTMLImageElement> => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.src = url;
                img.onload = () => resolve(img);
                img.onerror = reject;
            });
        };

        try {
            // --- Header & Image ---
            // Load GMC Building Image
            try {
                const img = await loadImage('/images/gallery/GMC_Building_Front_Check.jpg');
                // Calculate aspect ratio to fit width
                const imgWidth = pageWidth - (margin * 2);
                const imgHeight = (img.height / img.width) * imgWidth;

                // Limit height if it takes too much space (max 1/3 of page)
                const maxImgHeight = pageHeight / 3;
                let finalWidth = imgWidth;
                let finalHeight = imgHeight;

                if (imgHeight > maxImgHeight) {
                    finalHeight = maxImgHeight;
                    finalWidth = (img.width / img.height) * finalHeight;
                    // Center the image if scaled down by height
                    const xOffset = (pageWidth - finalWidth) / 2;
                    doc.addImage(img, 'JPEG', xOffset, yPos, finalWidth, finalHeight);
                } else {
                    doc.addImage(img, 'JPEG', margin, yPos, finalWidth, finalHeight);
                }

                yPos += finalHeight + 10;
            } catch (err) {
                console.error("Could not load image", err);
                // Fallback if image fails
                yPos += 10;
            }

            // Title
            doc.setTextColor(88, 28, 135); // Purple-900
            addCenteredText("GOODWILL MEDICAL CENTRE", yPos, 22, 'times', 'bold');
            yPos += 10;
            doc.setTextColor(100);
            addCenteredText("A Sanctuary of Care", yPos, 14, 'helvetica', 'italic');
            yPos += 15;

            // Draw line separator
            doc.setDrawColor(147, 51, 234); // Purple-600
            doc.setLineWidth(0.5);
            doc.line(margin, yPos, pageWidth - margin, yPos);
            yPos += 10;

            // --- Section 1: Vision & Mission (Top Half area) ---
            doc.setTextColor(0);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(16);
            doc.text("Vision & Mission", margin, yPos);
            yPos += 8;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            const splitVision = doc.splitTextToSize(VISION_TEXT, pageWidth - (margin * 2));
            doc.text(splitVision, margin, yPos);
            yPos += (splitVision.length * 5) + 5;

            const splitMission = doc.splitTextToSize(MISSION_TEXT, pageWidth - (margin * 2));
            doc.text(splitMission, margin, yPos);
            yPos += (splitMission.length * 5) + 10;

            // --- Section 2: Services & Activities (Bottom Half area) ---

            // Layout: Two columns for Services and Impact if space permits, or stacked
            // Let's use autoTable for a clean layout of services

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(16);
            doc.text("Our Services", margin, yPos);
            yPos += 8;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');

            // Split services into two columns text manually for simplicity or use pure text
            const leftColX = margin;
            const rightColX = pageWidth / 2 + 5;

            SERVICES.forEach((service, index) => {
                const isLeft = index < 5;
                const x = isLeft ? leftColX : rightColX;
                // Calculate yOffset based on index modulo 5 (items per column)
                // However, we need to track Y properly.
                // Simple stack might be safer for PDF generation to avoid overlap
            });

            // Let's use simple list text
            SERVICES.forEach((service) => {
                doc.text(`• ${service}`, margin, yPos);
                yPos += 5;
            });
            yPos += 10;

            // Check if we need a new page
            if (yPos > pageHeight - 60) {
                doc.addPage();
                yPos = margin;
            }

            // --- Impact Section ---
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(16);
            doc.text("Community Impact & Activities", margin, yPos);
            yPos += 8;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);

            // Render Stats as a simple row styled text
            let statsText = "";
            IMPACT_STATS.forEach(stat => {
                statsText += `${stat[0]} ${stat[1]} | `;
            });
            // Remove last separator
            statsText = statsText.substring(0, statsText.length - 3);

            const splitStats = doc.splitTextToSize(statsText, pageWidth - (margin * 2));
            doc.text(splitStats, margin, yPos);
            yPos += (splitStats.length * 5) + 5;

            // Additional Impact Bullets
            ADDITIONAL_IMPACT.forEach((impact) => {
                const splitImpact = doc.splitTextToSize(`• ${impact}`, pageWidth - (margin * 2));
                doc.text(splitImpact, margin, yPos);
                yPos += (splitImpact.length * 5) + 2;
            });

            // --- Footer ---
            const footerY = pageHeight - 15;
            doc.setFontSize(9);
            doc.setTextColor(128);
            doc.text("www.goodwillmedicalcentre.com", margin, footerY);
            doc.text("Contact us for more information.", pageWidth - margin - 50, footerY);

            doc.save("GMC_Brochure.pdf");

        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("Failed to generate brochure. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <button
            onClick={generatePDF}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Download GMC Brochure PDF"
        >
            {isGenerating ? (
                <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                </>
            ) : (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download GMC Brochure
                </>
            )}
        </button>
    );
};

export default BrochureGenerator;
