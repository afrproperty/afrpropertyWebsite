function calculateStampDuty(amount) {
            if (amount <= 100000) return amount * 0.01;
            if (amount <= 500000) return 1000 + ((amount - 100000) * 0.02);
            if (amount <= 1000000) return 9000 + ((amount - 500000) * 0.03);
            return 24000 + ((amount - 1000000) * 0.04);
        }
