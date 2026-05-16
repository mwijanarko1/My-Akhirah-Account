import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// In a real scenario, this data would be fetched from Convex based on the slug.
// We are mocking it for the UI structure.
export default function CampaignDetailPage({ params }: { params: { slug: string } }) {
  // Mock data
  const campaign = {
    title: "Emergency Relief for Gaza",
    description: "Provide immediate food, water, and medical supplies to those affected.",
    content: `
      <p>The situation is critical and immediate action is required to save lives. Your donation will go directly towards providing food, water, and medical supplies to the most vulnerable.</p>
      <br/>
      <h3 class="text-xl font-bold text-akhirah-teal-dark mb-2">The Impact of Your Donation</h3>
      <p>Every penny you donate helps us deliver life-saving aid on the ground. We have teams ready to deploy resources where they are needed most.</p>
      <br/>
      <ul class="list-disc pl-5 space-y-2">
        <li>£50 provides a family with food for a week.</li>
        <li>£100 supplies clean drinking water for 50 people.</li>
        <li>£250 funds an emergency medical kit.</li>
      </ul>
    `,
    imageUrl: "https://images.unsplash.com/photo-1593113544332-ce5b91b92416?q=80&w=2070&auto=format&fit=crop",
    goal: 100000,
    raised: 45000,
    donors: 1205
  };

  const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 animate-fade-in">
      {/* Campaign Hero Image */}
      <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
        <Image 
          src={campaign.imageUrl} 
          alt={campaign.title} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 w-full container-custom pb-8 text-white">
          <span className="inline-block bg-eternal-gold text-account-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Emergency Appeal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{campaign.title}</h1>
          <p className="text-lg md:text-xl max-w-2xl opacity-90">{campaign.description}</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Main Content / Story */}
          <div className="lg:col-span-2">
            <div className="card p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-akhirah-teal-dark mb-6 border-b pb-4">About this Campaign</h2>
              <div 
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: campaign.content }}
              />
            </div>
          </div>

          {/* Sidebar / Donation Actions */}
          <div className="lg:col-span-1">
            <div className="card p-6 md:p-8 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Campaign Progress</h3>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-3xl text-akhirah-teal">{formatCurrency(campaign.raised)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>raised from {campaign.donors} donors</span>
                  <span>Goal: {formatCurrency(campaign.goal)}</span>
                </div>
                
                <div className="h-3 bg-mercy-mint rounded-full overflow-hidden border border-akhirah-teal/10">
                  <div
                    className="h-full bg-eternal-gold transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Link href={`/donate?campaign=${params.slug}&amount=50`} className="w-full btn border-2 border-akhirah-teal text-akhirah-teal hover:bg-mercy-mint py-3 rounded-lg block text-center">
                  Donate £50
                </Link>
                <Link href={`/donate?campaign=${params.slug}&amount=100`} className="w-full btn border-2 border-akhirah-teal text-akhirah-teal hover:bg-mercy-mint py-3 rounded-lg block text-center">
                  Donate £100
                </Link>
                <Link href={`/donate?campaign=${params.slug}`} className="w-full btn btn-primary py-4 rounded-lg block text-center text-lg mt-4">
                  Give a Custom Amount
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 text-sm text-gray-600">
                <svg className="w-8 h-8 text-akhirah-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <p>Your donation is secure and encrypted. We ensure transparency in how funds are allocated.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
