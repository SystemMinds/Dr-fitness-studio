import { buildWhatsAppLink } from '../utils/whatsapp';
import { Button } from './Button';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppButtonProps {
  message: string;
  children: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  ariaLabel?: string;
}

/** Button that opens WhatsApp with a prefilled enquiry message. */
export function WhatsAppButton({
  message,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  ariaLabel,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={buildWhatsAppLink(message)}
      external
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      icon={<WhatsAppIcon />}
      iconPosition="start"
      ariaLabel={ariaLabel ?? `${children} on WhatsApp (opens in a new tab)`}
    >
      {children}
    </Button>
  );
}
