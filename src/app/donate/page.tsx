"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-off' | 'monthly'>('one-off');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [coverFees, setCoverFees] = useState<boolean>(false);
  const [selectedFund, setSelectedFund] = useState<string>('general');

  const presetAmounts = [10, 20, 50, 100];
  
  // Calculate total with optional 2.9% + 30p fee (example fee structure)
  const baseAmount = customAmount ? parseFloat(customAmount) || 0 : amount;
  const fee = coverFees ? (baseAmount * 0.029) + 0.30 : 0;
  const totalAmount = baseAmount + fee;

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Donation submission logic to be implemented by backend team
    console.log({
      donationType,
      amount: baseAmount,
      coverFees,
      totalAmount,
      fund: selectedFund
    });
    alert('Donation flow will continue to Flutterwave checkout...');
  };

  return (
    <div className="container-custom py-12 md:py-20 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-akhirah-teal-dark mb-4">
            Secure Donation
          </h1>
          <p className="text-lg text-gray-600">
            Support our projects securely. Every penny counts towards making an impact.
          </p>
        </div>

        <div className="card bg-purity-white shadow-lg rounded-xl overflow-hidden p-6 md:p-8 border border-mercy-mint">
          <form onSubmit={handleSubmit}>
            {/* Donation Type Toggle */}
            <fieldset className="mb-8" aria-label="Donation Type">
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setDonationType('one-off')}
                  className={`flex-1 py-3 text-sm font-semibold rounded-md transition-all ${
                    donationType === 'one-off'
                      ? 'bg-purity-white text-akhirah-teal shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  One-off
                </button>
                <button
                  type="button"
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 text-sm font-semibold rounded-md transition-all ${
                    donationType === 'monthly'
                      ? 'bg-purity-white text-akhirah-teal shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </fieldset>

            {/* Fund Selection */}
            <div className="mb-8">
              <label htmlFor="fund-select" className="block text-sm font-semibold text-gray-700 mb-2">
                I would like to donate to:
              </label>
              <div className="relative">
                <select
                  id="fund-select"
                  value={selectedFund}
                  onChange={(e) => setSelectedFund(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-akhirah-teal focus:border-transparent transition-all"
                >
                  <option value="general">General Fund (Where most needed)</option>
                  <option value="zakat">Zakat (Eligible)</option>
                  <option value="sadaqah">Sadaqah (Voluntary Charity)</option>
                  <option value="sadaqah-jariyah">Sadaqah Jariyah (Ongoing Charity)</option>
                  <option value="water">Clean Water Projects</option>
                  <option value="orphans">Orphan Sponsorship</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Amount (£)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className={`py-3 px-4 border-2 rounded-lg font-bold transition-all ${
                      amount === preset && !customAmount
                        ? 'border-akhirah-teal bg-mercy-mint text-akhirah-teal-dark'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    £{preset}
                  </button>
                ))}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-semibold">£</span>
                </div>
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Other amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className={`w-full pl-8 pr-4 py-3 border-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-akhirah-teal transition-all ${
                    customAmount ? 'border-akhirah-teal bg-mercy-mint text-akhirah-teal-dark' : 'border-gray-200 text-gray-700'
                  }`}
                />
              </div>
            </div>

            {/* Cover Fees Toggle */}
            <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start gap-4">
              <div className="flex items-center h-5 mt-1">
                <input
                  id="cover-fees"
                  type="checkbox"
                  checked={coverFees}
                  onChange={(e) => setCoverFees(e.target.checked)}
                  className="w-5 h-5 text-akhirah-teal border-gray-300 rounded focus:ring-akhirah-teal cursor-pointer accent-akhirah-teal"
                />
              </div>
              <label htmlFor="cover-fees" className="text-sm text-gray-600 cursor-pointer">
                <strong className="text-gray-800 block mb-1">Cover transaction fees? (+£{fee.toFixed(2)})</strong>
                Please add {fee.toFixed(2)} to my donation to help cover payment processing fees so 100% of my donation goes to the cause.
              </label>
            </div>

            {/* Total and Submit */}
            <div className="border-t border-gray-100 pt-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-semibold">Total Donation</span>
                <span className="text-3xl font-bold text-akhirah-teal-dark">£{totalAmount.toFixed(2)}</span>
              </div>
              
              <button
                type="submit"
                disabled={baseAmount <= 0}
                className="w-full btn btn-primary py-4 text-lg rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Donate £{totalAmount.toFixed(2)} Securely
              </button>
            </div>
            
            {/* Trust Signals */}
            <div className="mt-6 flex flex-col items-center justify-center space-y-3 opacity-80">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                <svg className="w-5 h-5 text-akhirah-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                100% Secure Payment
              </div>
              <p className="text-xs text-gray-400 text-center">
                Your transaction is encrypted and processed securely by our vetted payment gateway. We do not store your card details. By donating, you agree to our <Link href="/terms" className="underline hover:text-akhirah-teal">Terms</Link> and <Link href="/privacy" className="underline hover:text-akhirah-teal">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
