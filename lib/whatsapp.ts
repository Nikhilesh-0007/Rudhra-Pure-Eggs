export const WHATSAPP_NUMBER = "918179985484";

interface WhatsAppMessageParams {
  name?: string;
  phone?: string;
  product?: string;
  quantity?: string;
  message?: string;
  source?: string;
}

export function generateWhatsAppLink(params?: WhatsAppMessageParams) {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  
  if (!params) {
    return `${baseUrl}?text=${encodeURIComponent("Hello Rudhra Farm, I would like to place an order/inquiry.")}`;
  }

  let text = "Hello Rudhra Farm,\n\n";
  if (params.name) text += `*Name:* ${params.name}\n`;
  if (params.phone) text += `*Phone:* ${params.phone}\n`;
  if (params.product) text += `*Product:* ${params.product}\n`;
  if (params.quantity) text += `*Quantity:* ${params.quantity}\n`;
  if (params.message) text += `*Message:* ${params.message}\n`;
  
  if (params.source) {
    text += `\n(Inquiry from: ${params.source})`;
  } else {
    text += "\nPlease contact me regarding my order.";
  }

  return `${baseUrl}?text=${encodeURIComponent(text)}`;
}
