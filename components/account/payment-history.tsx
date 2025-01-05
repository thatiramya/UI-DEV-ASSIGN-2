'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { IndianRupee, Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const payments = [
  {
    id: '1',
    date: '2024-03-15',
    amount: 24999,
    status: 'completed',
    description: 'AI Project Premium Subscription',
    invoice: 'INV-2024-001'
  },
  {
    id: '2',
    date: '2024-02-15',
    amount: 24999,
    status: 'completed',
    description: 'AI Project Premium Subscription',
    invoice: 'INV-2024-002'
  },
  {
    id: '3',
    date: '2024-01-15',
    amount: 24999,
    status: 'completed',
    description: 'AI Project Premium Subscription',
    invoice: 'INV-2024-003'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const tableRowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  hover: {
    scale: 1.01,
    backgroundColor: "rgba(255, 192, 203, 0.1)",
    transition: {
      duration: 0.2
    }
  }
};

export function PaymentHistory() {
  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="backdrop-blur-sm bg-background/80">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Payment History</CardTitle>
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden border border-pink-500/20">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[150px]">Date</TableHead>
                  <TableHead className="hidden md:table-cell">Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="hidden sm:table-cell">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment, index) => (
                  <motion.tr
                    key={payment.id}
                    variants={tableRowVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    custom={index}
                    className="group"
                  >
                    <TableCell className="font-medium">
                      {formatDate(payment.date)}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {payment.description}
                    </TableCell>
                    <TableCell>
                      <motion.div 
                        className="flex items-center gap-1 text-pink-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <IndianRupee className="h-4 w-4" />
                        {formatIndianCurrency(payment.amount).replace('₹', '')}
                      </motion.div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-sm text-muted-foreground">
                          {payment.invoice}
                        </span>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </TableCell>
                    <TableCell>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Badge 
                          variant={payment.status === 'completed' ? 'default' : 'secondary'}
                          className={payment.status === 'completed' ? 'bg-green-500 hover:bg-green-600' : ''}
                        >
                          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                        </Badge>
                      </motion.div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}