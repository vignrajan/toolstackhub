'use client';
import { useParams } from 'next/navigation';
import OrderScreen from '../../../../../components/billing/pos/OrderScreen';

export default function PosOrderPage() {
  const { id } = useParams();
  return <OrderScreen orderId={id} />;
}
