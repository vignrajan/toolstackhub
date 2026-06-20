import { redirect } from 'next/navigation';

export default function BillingHome() {
  redirect('/billing/invoices');
}
