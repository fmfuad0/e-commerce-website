// helper to generate invoice PDF from DOM element or order data
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * Download PDF invoice from an HTML node.
 * If you prefer to generate programmatically instead of screenshot,
 * you can build the content into jsPDF directly (text, tables).
 */
export async function downloadInvoiceFromNode(node, filename = "invoice.pdf") {
    const scale = 2; // scale for better resolution
    const canvas = await html2canvas(node, {
        scale,
        useCORS: true,
        logging: false,
        backgroundColor: null,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
        unit: "pt",
        format: "a4",
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
}


export function downloadInvoiceText(order, filename = `invoice-${order.id}.pdf`) {
    const pdf = new jsPDF();
    pdf.setFontSize(14);
    pdf.text("Invoice", 20, 30);
    pdf.setFontSize(10);
    pdf.text(`Order ID: ${order.id}`, 20, 50);
    pdf.text(`Date: ${new Date(order.createdAt).toLocaleString()}`, 20, 64);
    pdf.text(`Customer: ${order.customer?.name || "—"}`, 20, 78);
    pdf.text(`Email: ${order.customer?.email || "—"}`, 20, 92);

    let y = 115;
    pdf.text("Items:", 20, y);
    y += 14;

    order.items.forEach((it) => {
        pdf.text(`${it.title} x ${it.quantity} — $${(it.price * it.quantity).toFixed(2)}`, 24, y);
        y += 12;
        if (y > 740) {
            pdf.addPage();
            y = 40;
        }
    });

    pdf.text(`Subtotal: $${order.subtotal.toFixed(2)}`, 20, y + 10);
    pdf.text(`Shipping: $${order.shippingFee.toFixed(2)}`, 20, y + 24);
    pdf.text(`Total: $${order.totalPayable.toFixed(2)}`, 20, y + 38);
    pdf.save(filename);
}
