'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { AccountSettings } from '@/components/account/settings';
import { PaymentHistory } from '@/components/account/payment-history';
import { PageTransition } from '@/components/layout/page-transition';

export default function AccountPage() {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 border-r" />
      <PageTransition>
        <div className="p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">Account & Payments</h1>
            <AccountSettings />
            <PaymentHistory />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}