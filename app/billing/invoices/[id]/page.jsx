'use client';
import { useParams } from 'next/navigation';
import InvoiceBuilder from '../../../../components/billing/InvoiceBuilder';

export default function EditInvoicePage() {
  const { id } = useParams();
  return <InvoiceBuilder invoiceId={id} />;
}
