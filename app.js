// ============================================================
// CardSuggest India - Credit Card Recommendation Engine
// Complete card database + recommendation algorithm + UI logic
// ============================================================

// ============================================================
// SECTION 1: CREDIT CARD DATABASE
// ============================================================

const CARDS_DATABASE = [
  // ──────────────────────────────────────────────────────────
  // HDFC BANK CARDS
  // ──────────────────────────────────────────────────────────
  {
    id: "hdfc-infinia",
    name: "HDFC Infinia",
    bank: "HDFC Bank",
    bankLogo: "🏦",
    network: "Visa Infinite",
    tier: "super-premium",
    annualFee: 10000,
    renewalFee: 10000,
    feeWaiverSpend: 1000000,
    joiningBonus: 10000,
    joiningBonusUnit: "reward points",
    minIncome: 3000000,
    inviteOnly: true,
    rewardRate: {
      base: 3.3,
      dining: 3.3,
      travel: 3.3,
      grocery: 3.3,
      fuel: 3.3,
      onlineShopping: 3.3,
      utilities: 3.3,
      entertainment: 3.3,
      smartbuy: 10.0,
    },
    rewardUnit: "Reward Points (1 RP = ₹1 via SmartBuy)",
    transferPartners: [
      { name: "Marriott Bonvoy", ratio: "1:1 (10 RP = 10 Marriott pts)", type: "hotel" },
      { name: "Singapore Airlines KrisFlyer", ratio: "2:1 (10 RP = 5 miles)", type: "airline" },
      { name: "InterMiles", ratio: "1:1", type: "airline" },
      { name: "British Airways Avios", ratio: "1:1", type: "airline" },
    ],
    loungeAccess: "Unlimited domestic & international (Priority Pass)",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹2 Cr, Purchase protection",
    concierge: true,
    golfAccess: true,
    bestFor: ["travel", "hotels", "premium-lifestyle"],
    highlights: [
      "Best-in-class reward rate of 3.3% across all categories",
      "10x rewards on HDFC SmartBuy portal",
      "Unlimited Priority Pass lounge access globally",
      "Premium hotel & airline transfer partners",
      "Complimentary golf rounds at select courses",
    ],
    applyUrl: "#affiliate-hdfc-infinia",
    cardColor: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    textColor: "#e0c97f",
  },
  {
    id: "hdfc-diners-black",
    name: "HDFC Diners Club Black",
    bank: "HDFC Bank",
    bankLogo: "🏦",
    network: "Diners Club",
    tier: "premium",
    annualFee: 10000,
    renewalFee: 10000,
    feeWaiverSpend: 500000,
    joiningBonus: 5000,
    joiningBonusUnit: "reward points",
    minIncome: 1500000,
    inviteOnly: false,
    rewardRate: {
      base: 3.3,
      dining: 3.3,
      travel: 3.3,
      grocery: 3.3,
      fuel: 3.3,
      onlineShopping: 3.3,
      utilities: 3.3,
      entertainment: 3.3,
      smartbuy: 10.0,
      weekendDining: 5.0,
    },
    rewardUnit: "Reward Points",
    transferPartners: [
      { name: "Marriott Bonvoy", ratio: "1:1", type: "hotel" },
      { name: "InterMiles", ratio: "1:1", type: "airline" },
    ],
    loungeAccess: "Unlimited domestic via HDFC lounge program, 6 international/year (Priority Pass)",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹1 Cr",
    concierge: true,
    golfAccess: true,
    bestFor: ["travel", "hotels", "dining"],
    highlights: [
      "3.3% reward rate on all spends",
      "10x rewards via HDFC SmartBuy",
      "Unlimited domestic lounge access",
      "Complimentary Zomato Pro, Amazon Prime, etc.",
      "Annual membership benefits worth ₹10,000+",
    ],
    applyUrl: "#affiliate-hdfc-diners-black",
    cardColor: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #333333 100%)",
    textColor: "#ffffff",
  },
  {
    id: "hdfc-regalia-gold",
    name: "HDFC Regalia Gold",
    bank: "HDFC Bank",
    bankLogo: "🏦",
    network: "Visa/Mastercard",
    tier: "premium",
    annualFee: 2500,
    renewalFee: 2500,
    feeWaiverSpend: 300000,
    joiningBonus: 2500,
    joiningBonusUnit: "reward points",
    minIncome: 1200000,
    inviteOnly: false,
    rewardRate: {
      base: 2.6,
      dining: 2.6,
      travel: 2.6,
      grocery: 2.6,
      fuel: 2.6,
      onlineShopping: 2.6,
      utilities: 2.6,
      entertainment: 2.6,
      smartbuy: 7.0,
    },
    rewardUnit: "Reward Points",
    transferPartners: [
      { name: "InterMiles", ratio: "1:1", type: "airline" },
    ],
    loungeAccess: "12 domestic + 6 international/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹1 Cr",
    concierge: false,
    golfAccess: false,
    bestFor: ["travel", "general-rewards"],
    highlights: [
      "Strong reward rate of 2.6% across all spends",
      "Good lounge access with both domestic and international",
      "Lower fee with spend-based waiver at ₹3L",
      "SmartBuy 7x rewards on flights and hotels",
    ],
    applyUrl: "#affiliate-hdfc-regalia-gold",
    cardColor: "linear-gradient(135deg, #b8860b 0%, #daa520 50%, #ffd700 100%)",
    textColor: "#1a1a1a",
  },
  {
    id: "hdfc-regalia",
    name: "HDFC Regalia",
    bank: "HDFC Bank",
    bankLogo: "🏦",
    network: "Visa/Mastercard",
    tier: "mid-premium",
    annualFee: 2500,
    renewalFee: 2500,
    feeWaiverSpend: 300000,
    joiningBonus: 2500,
    joiningBonusUnit: "reward points",
    minIncome: 700000,
    inviteOnly: false,
    rewardRate: {
      base: 1.3,
      dining: 1.3,
      travel: 1.3,
      grocery: 1.3,
      fuel: 1.3,
      onlineShopping: 1.3,
      utilities: 1.3,
      entertainment: 1.3,
      smartbuy: 5.0,
    },
    rewardUnit: "Reward Points",
    transferPartners: [],
    loungeAccess: "8 domestic + 4 international/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹50 Lakh",
    concierge: false,
    golfAccess: false,
    bestFor: ["travel", "general-rewards"],
    highlights: [
      "Good entry point to HDFC premium cards",
      "Decent lounge access for the fee",
      "SmartBuy rewards for travel bookings",
      "Easy fee waiver at ₹3L annual spend",
    ],
    applyUrl: "#affiliate-hdfc-regalia",
    cardColor: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    textColor: "#ffffff",
  },
  {
    id: "hdfc-millennia",
    name: "HDFC Millennia",
    bank: "HDFC Bank",
    bankLogo: "🏦",
    network: "Visa/Mastercard",
    tier: "entry",
    annualFee: 1000,
    renewalFee: 1000,
    feeWaiverSpend: 100000,
    joiningBonus: 1000,
    joiningBonusUnit: "cashback points",
    minIncome: 400000,
    inviteOnly: false,
    rewardRate: {
      base: 1.0,
      dining: 2.5,
      travel: 1.0,
      grocery: 1.0,
      fuel: 1.0,
      onlineShopping: 5.0,
      utilities: 1.0,
      entertainment: 1.0,
    },
    rewardUnit: "CashBack Points",
    transferPartners: [],
    loungeAccess: "4 domestic/year via Visa/Mastercard",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["cashback", "online-shopping"],
    highlights: [
      "5% cashback on Amazon, Flipkart, Myntra, Swiggy",
      "2.5% cashback on all online spends",
      "1% cashback on offline/other spends",
      "Low annual fee with easy waiver at ₹1L spend",
    ],
    applyUrl: "#affiliate-hdfc-millennia",
    cardColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textColor: "#ffffff",
  },
  {
    id: "hdfc-moneyback-plus",
    name: "HDFC MoneyBack+",
    bank: "HDFC Bank",
    bankLogo: "🏦",
    network: "Visa/Mastercard",
    tier: "entry",
    annualFee: 500,
    renewalFee: 500,
    feeWaiverSpend: 50000,
    joiningBonus: 500,
    joiningBonusUnit: "cashback points",
    minIncome: 300000,
    inviteOnly: false,
    rewardRate: {
      base: 0.5,
      dining: 1.0,
      travel: 0.5,
      grocery: 1.0,
      fuel: 0.5,
      onlineShopping: 2.0,
      utilities: 0.5,
      entertainment: 1.0,
    },
    rewardUnit: "CashBack Points",
    transferPartners: [],
    loungeAccess: "None",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["cashback", "entry-level"],
    highlights: [
      "No joining fee in first year (often)",
      "2x rewards on online shopping",
      "Good starter card from HDFC",
      "Easy fee waiver threshold",
    ],
    applyUrl: "#affiliate-hdfc-moneyback-plus",
    cardColor: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    textColor: "#ffffff",
  },

  // ──────────────────────────────────────────────────────────
  // ICICI BANK CARDS
  // ──────────────────────────────────────────────────────────
  {
    id: "icici-emeralde-amex",
    name: "ICICI Emeralde Credit Card (AMEX)",
    bank: "ICICI Bank",
    bankLogo: "🏧",
    network: "American Express",
    tier: "super-premium",
    annualFee: 12000,
    renewalFee: 12000,
    feeWaiverSpend: null,
    joiningBonus: 5000,
    joiningBonusUnit: "reward points",
    minIncome: 3000000,
    inviteOnly: true,
    rewardRate: {
      base: 2.0,
      dining: 4.0,
      travel: 5.0,
      grocery: 2.0,
      fuel: 2.0,
      onlineShopping: 2.0,
      utilities: 2.0,
      entertainment: 4.0,
    },
    rewardUnit: "ICICI Reward Points",
    transferPartners: [
      { name: "ITC Hotels", ratio: "Special rates", type: "hotel" },
      { name: "Marriott Bonvoy", ratio: "2:1", type: "hotel" },
      { name: "InterMiles", ratio: "1:1", type: "airline" },
    ],
    loungeAccess: "Unlimited domestic & international (AMEX Lounge + Priority Pass)",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹2 Cr, Baggage loss",
    concierge: true,
    golfAccess: true,
    bestFor: ["travel", "hotels", "premium-lifestyle"],
    highlights: [
      "Up to 5% reward rate on travel spends",
      "ITC Hotels curated luxury experiences",
      "Unlimited global lounge access",
      "Premium AMEX network benefits",
      "Taj/ITC hotel upgrades and benefits",
    ],
    applyUrl: "#affiliate-icici-emeralde",
    cardColor: "linear-gradient(135deg, #004d40 0%, #00796b 50%, #009688 100%)",
    textColor: "#e0f2f1",
  },
  {
    id: "icici-sapphiro",
    name: "ICICI Sapphiro",
    bank: "ICICI Bank",
    bankLogo: "🏧",
    network: "Visa Infinite",
    tier: "premium",
    annualFee: 6500,
    renewalFee: 6500,
    feeWaiverSpend: 600000,
    joiningBonus: 2500,
    joiningBonusUnit: "reward points",
    minIncome: 1500000,
    inviteOnly: false,
    rewardRate: {
      base: 2.0,
      dining: 2.0,
      travel: 4.0,
      grocery: 2.0,
      fuel: 2.0,
      onlineShopping: 2.0,
      utilities: 2.0,
      entertainment: 2.0,
    },
    rewardUnit: "ICICI Reward Points",
    transferPartners: [
      { name: "InterMiles", ratio: "1:1", type: "airline" },
    ],
    loungeAccess: "4 domestic + 2 international/quarter",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹1 Cr",
    concierge: true,
    golfAccess: true,
    bestFor: ["travel", "general-rewards"],
    highlights: [
      "2x rewards on all spends, 4x on travel",
      "Good lounge access with quarterly reset",
      "Complimentary golf and concierge",
      "Visa Infinite global offers",
    ],
    applyUrl: "#affiliate-icici-sapphiro",
    cardColor: "linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)",
    textColor: "#c5cae9",
  },
  {
    id: "icici-amazon-pay",
    name: "ICICI Amazon Pay Credit Card",
    bank: "ICICI Bank",
    bankLogo: "🏧",
    network: "Visa",
    tier: "entry",
    annualFee: 500,
    renewalFee: 500,
    feeWaiverSpend: null,
    joiningBonus: 500,
    joiningBonusUnit: "Amazon Pay balance",
    minIncome: 300000,
    inviteOnly: false,
    rewardRate: {
      base: 1.0,
      dining: 1.0,
      travel: 1.0,
      grocery: 2.0,
      fuel: 1.0,
      onlineShopping: 5.0,
      utilities: 2.0,
      entertainment: 1.0,
      amazon: 5.0,
      amazonPrime: 5.0,
    },
    rewardUnit: "Amazon Pay Cashback",
    transferPartners: [],
    loungeAccess: "4 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["cashback", "online-shopping"],
    highlights: [
      "5% back on Amazon for Prime members",
      "2% back on bill payments & groceries",
      "1% back on all other spends",
      "Instant cashback as Amazon Pay balance",
      "Lifetime free for Prime members (often)",
    ],
    applyUrl: "#affiliate-icici-amazon",
    cardColor: "linear-gradient(135deg, #232f3e 0%, #131921 50%, #ff9900 100%)",
    textColor: "#ffffff",
  },
  {
    id: "icici-rubyx",
    name: "ICICI Rubyx",
    bank: "ICICI Bank",
    bankLogo: "🏧",
    network: "Visa/Mastercard",
    tier: "mid-premium",
    annualFee: 3000,
    renewalFee: 3000,
    feeWaiverSpend: 200000,
    joiningBonus: 1500,
    joiningBonusUnit: "reward points",
    minIncome: 800000,
    inviteOnly: false,
    rewardRate: {
      base: 1.0,
      dining: 2.0,
      travel: 2.0,
      grocery: 1.0,
      fuel: 1.0,
      onlineShopping: 2.0,
      utilities: 1.0,
      entertainment: 2.0,
    },
    rewardUnit: "ICICI Payback Points",
    transferPartners: [],
    loungeAccess: "4 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹25 Lakh",
    concierge: false,
    golfAccess: false,
    bestFor: ["dining", "entertainment", "general-rewards"],
    highlights: [
      "2x rewards on dining, travel, shopping",
      "Buy 1 Get 1 on movie tickets (BookMyShow)",
      "Decent lounge access",
      "Good mid-range offering from ICICI",
    ],
    applyUrl: "#affiliate-icici-rubyx",
    cardColor: "linear-gradient(135deg, #b71c1c 0%, #e53935 100%)",
    textColor: "#ffffff",
  },
  {
    id: "icici-coral",
    name: "ICICI Coral",
    bank: "ICICI Bank",
    bankLogo: "🏧",
    network: "Visa/Mastercard",
    tier: "entry",
    annualFee: 500,
    renewalFee: 500,
    feeWaiverSpend: 150000,
    joiningBonus: 500,
    joiningBonusUnit: "reward points",
    minIncome: 400000,
    inviteOnly: false,
    rewardRate: {
      base: 0.5,
      dining: 1.5,
      travel: 0.5,
      grocery: 0.5,
      fuel: 0.5,
      onlineShopping: 1.0,
      utilities: 0.5,
      entertainment: 1.5,
    },
    rewardUnit: "Payback Points",
    transferPartners: [],
    loungeAccess: "2 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["dining", "entertainment", "entry-level"],
    highlights: [
      "Buy 1 Get 1 on movie tickets",
      "Dining privileges at partner restaurants",
      "Low entry barrier",
      "Good first credit card option",
    ],
    applyUrl: "#affiliate-icici-coral",
    cardColor: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
    textColor: "#ffffff",
  },

  // ──────────────────────────────────────────────────────────
  // AXIS BANK CARDS
  // ──────────────────────────────────────────────────────────
  {
    id: "axis-magnus",
    name: "Axis Magnus",
    bank: "Axis Bank",
    bankLogo: "🏛️",
    network: "Visa Infinite",
    tier: "super-premium",
    annualFee: 12500,
    renewalFee: 12500,
    feeWaiverSpend: null,
    joiningBonus: 10000,
    joiningBonusUnit: "EDGE points",
    minIncome: 2400000,
    inviteOnly: false,
    rewardRate: {
      base: 2.0,
      dining: 2.0,
      travel: 6.0,
      grocery: 2.0,
      fuel: 2.0,
      onlineShopping: 2.0,
      utilities: 2.0,
      entertainment: 2.0,
      edgeMiles: 12.0,
    },
    rewardUnit: "EDGE MILES (high value via transfers)",
    transferPartners: [
      { name: "Marriott Bonvoy", ratio: "5:4 (5 EDGE = 4 Marriott)", type: "hotel" },
      { name: "Singapore Airlines KrisFlyer", ratio: "5:2", type: "airline" },
      { name: "InterMiles", ratio: "5:5", type: "airline" },
      { name: "Air France/KLM Flying Blue", ratio: "5:3", type: "airline" },
      { name: "Ethiopian Airlines", ratio: "5:5", type: "airline" },
      { name: "Turkish Airlines Miles&Smiles", ratio: "5:3", type: "airline" },
    ],
    loungeAccess: "Unlimited domestic + 8 international/year (Priority Pass)",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹2 Cr",
    concierge: true,
    golfAccess: true,
    bestFor: ["travel", "airline-miles", "hotels"],
    highlights: [
      "Up to 12 EDGE MILES per ₹200 — exceptional transfer value",
      "Best-in-class airline transfer partners",
      "Unlimited domestic lounge access",
      "Complimentary Marriott/ITC memberships",
      "Most recommended card for frequent flyers",
    ],
    applyUrl: "#affiliate-axis-magnus",
    cardColor: "linear-gradient(135deg, #4a0e4e 0%, #8e24aa 50%, #ab47bc 100%)",
    textColor: "#f3e5f5",
  },
  {
    id: "axis-reserve",
    name: "Axis Reserve",
    bank: "Axis Bank",
    bankLogo: "🏛️",
    network: "Visa Infinite",
    tier: "super-premium",
    annualFee: 50000,
    renewalFee: 50000,
    feeWaiverSpend: null,
    joiningBonus: 50000,
    joiningBonusUnit: "EDGE reward points",
    minIncome: 5000000,
    inviteOnly: true,
    rewardRate: {
      base: 3.5,
      dining: 5.0,
      travel: 7.0,
      grocery: 3.5,
      fuel: 3.5,
      onlineShopping: 3.5,
      utilities: 3.5,
      entertainment: 5.0,
    },
    rewardUnit: "EDGE REWARD Points",
    transferPartners: [
      { name: "Marriott Bonvoy", ratio: "Premium conversion", type: "hotel" },
      { name: "Singapore Airlines", ratio: "Premium conversion", type: "airline" },
      { name: "Multiple airline partners", ratio: "Premium rates", type: "airline" },
    ],
    loungeAccess: "Unlimited worldwide (Priority Pass + Visa Infinite)",
    fuelSurchargeWaiver: true,
    insuranceCover: "Comprehensive travel insurance ₹3 Cr",
    concierge: true,
    golfAccess: true,
    bestFor: ["travel", "premium-lifestyle", "hotels", "airline-miles"],
    highlights: [
      "Ultra premium card with highest reward rates",
      "₹50,000 joining bonus offsets first year fee",
      "Unlimited worldwide lounge access",
      "Meet & greet at airports",
      "Comprehensive travel and purchase insurance",
    ],
    applyUrl: "#affiliate-axis-reserve",
    cardColor: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #533483 100%)",
    textColor: "#c0a062",
  },
  {
    id: "axis-flipkart",
    name: "Axis Flipkart Credit Card",
    bank: "Axis Bank",
    bankLogo: "🏛️",
    network: "Visa",
    tier: "entry",
    annualFee: 500,
    renewalFee: 500,
    feeWaiverSpend: 200000,
    joiningBonus: 500,
    joiningBonusUnit: "cashback",
    minIncome: 300000,
    inviteOnly: false,
    rewardRate: {
      base: 1.5,
      dining: 4.0,
      travel: 1.5,
      grocery: 1.5,
      fuel: 1.5,
      onlineShopping: 5.0,
      utilities: 1.5,
      entertainment: 1.5,
      flipkart: 5.0,
      myntra: 5.0,
    },
    rewardUnit: "Cashback (direct statement credit)",
    transferPartners: [],
    loungeAccess: "4 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["cashback", "online-shopping"],
    highlights: [
      "5% unlimited cashback on Flipkart & Myntra",
      "4% cashback on preferred partners (Swiggy, PVR, Uber)",
      "1.5% cashback on all other spends",
      "One of the best cashback cards in India",
    ],
    applyUrl: "#affiliate-axis-flipkart",
    cardColor: "linear-gradient(135deg, #2874f0 0%, #1a5dc9 100%)",
    textColor: "#ffffff",
  },
  {
    id: "axis-ace",
    name: "Axis ACE Credit Card",
    bank: "Axis Bank",
    bankLogo: "🏛️",
    network: "Visa",
    tier: "entry",
    annualFee: 499,
    renewalFee: 499,
    feeWaiverSpend: 200000,
    joiningBonus: 500,
    joiningBonusUnit: "cashback",
    minIncome: 300000,
    inviteOnly: false,
    rewardRate: {
      base: 2.0,
      dining: 4.0,
      travel: 2.0,
      grocery: 2.0,
      fuel: 2.0,
      onlineShopping: 4.0,
      utilities: 5.0,
      entertainment: 2.0,
      billPayments: 5.0,
    },
    rewardUnit: "Cashback (Google Pay credit)",
    transferPartners: [],
    loungeAccess: "4 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["cashback", "utilities", "everyday-spend"],
    highlights: [
      "5% cashback on utility bill payments via Google Pay",
      "4% on Swiggy, Zomato, Ola",
      "2% cashback on everything else",
      "Best card for bill payments in India",
    ],
    applyUrl: "#affiliate-axis-ace",
    cardColor: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
    textColor: "#ffffff",
  },
  {
    id: "axis-vistara",
    name: "Axis Vistara Credit Card",
    bank: "Axis Bank",
    bankLogo: "🏛️",
    network: "Visa",
    tier: "mid-premium",
    annualFee: 3000,
    renewalFee: 3000,
    feeWaiverSpend: 200000,
    joiningBonus: 2000,
    joiningBonusUnit: "Club Vistara points + 1 ticket voucher",
    minIncome: 600000,
    inviteOnly: false,
    rewardRate: {
      base: 1.0,
      dining: 2.0,
      travel: 6.0,
      grocery: 1.0,
      fuel: 1.0,
      onlineShopping: 2.0,
      utilities: 1.0,
      entertainment: 2.0,
      vistara: 6.0,
    },
    rewardUnit: "Club Vistara Points",
    transferPartners: [
      { name: "Club Vistara (Air India)", ratio: "Direct earn", type: "airline" },
    ],
    loungeAccess: "4 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹25 Lakh",
    concierge: false,
    golfAccess: false,
    bestFor: ["airline-miles", "travel"],
    highlights: [
      "Complimentary Vistara flight ticket on joining",
      "6 CV points per ₹200 on Vistara bookings",
      "Additional ticket voucher on annual spend milestones",
      "Great for frequent domestic flyers",
    ],
    applyUrl: "#affiliate-axis-vistara",
    cardColor: "linear-gradient(135deg, #4a1942 0%, #6a1b4d 50%, #8e2157 100%)",
    textColor: "#ffffff",
  },

  // ──────────────────────────────────────────────────────────
  // HSBC CARDS
  // ──────────────────────────────────────────────────────────
  {
    id: "hsbc-cashback",
    name: "HSBC Cashback Credit Card",
    bank: "HSBC",
    bankLogo: "🔴",
    network: "Visa",
    tier: "entry",
    annualFee: 750,
    renewalFee: 750,
    feeWaiverSpend: 100000,
    joiningBonus: 750,
    joiningBonusUnit: "cashback",
    minIncome: 400000,
    inviteOnly: false,
    rewardRate: {
      base: 1.5,
      dining: 1.5,
      travel: 1.5,
      grocery: 1.5,
      fuel: 1.5,
      onlineShopping: 1.5,
      utilities: 1.5,
      entertainment: 1.5,
    },
    rewardUnit: "Flat Cashback",
    transferPartners: [],
    loungeAccess: "2 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["cashback", "simplicity"],
    highlights: [
      "Flat 1.5% unlimited cashback on ALL spends",
      "No complicated reward programs or categories",
      "Cashback auto-credited to statement",
      "Simple, no-fuss card for everyday use",
    ],
    applyUrl: "#affiliate-hsbc-cashback",
    cardColor: "linear-gradient(135deg, #db0011 0%, #ee0000 100%)",
    textColor: "#ffffff",
  },
  {
    id: "hsbc-smart-value",
    name: "HSBC Smart Value Credit Card",
    bank: "HSBC",
    bankLogo: "🔴",
    network: "Visa",
    tier: "entry",
    annualFee: 750,
    renewalFee: 750,
    feeWaiverSpend: 100000,
    joiningBonus: 500,
    joiningBonusUnit: "reward points",
    minIncome: 400000,
    inviteOnly: false,
    rewardRate: {
      base: 0.7,
      dining: 2.5,
      travel: 0.7,
      grocery: 2.5,
      fuel: 2.5,
      onlineShopping: 1.5,
      utilities: 0.7,
      entertainment: 0.7,
      departmentStores: 2.5,
    },
    rewardUnit: "Reward Points",
    transferPartners: [],
    loungeAccess: "None",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["fuel", "dining", "grocery"],
    highlights: [
      "2.5% cashback on dining, groceries, fuel, departmental stores",
      "Good for everyday essential spending",
      "Fuel surcharge waiver saves on petrol",
      "Best HSBC card for daily spenders",
    ],
    applyUrl: "#affiliate-hsbc-smart-value",
    cardColor: "linear-gradient(135deg, #c62828 0%, #ef5350 100%)",
    textColor: "#ffffff",
  },
  {
    id: "hsbc-travelone",
    name: "HSBC TravelOne Credit Card",
    bank: "HSBC",
    bankLogo: "🔴",
    network: "Visa",
    tier: "premium",
    annualFee: 3000,
    renewalFee: 3000,
    feeWaiverSpend: 400000,
    joiningBonus: 2000,
    joiningBonusUnit: "reward points",
    minIncome: 800000,
    inviteOnly: false,
    rewardRate: {
      base: 1.0,
      dining: 2.0,
      travel: 4.0,
      grocery: 1.0,
      fuel: 1.0,
      onlineShopping: 2.0,
      utilities: 1.0,
      entertainment: 2.0,
      international: 5.0,
    },
    rewardUnit: "Travel Reward Points",
    transferPartners: [
      { name: "InterMiles", ratio: "1:1", type: "airline" },
    ],
    loungeAccess: "8 domestic + 4 international/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹50 Lakh",
    concierge: false,
    golfAccess: false,
    bestFor: ["travel", "international-spends"],
    highlights: [
      "4% rewards on travel, 5% on international spends",
      "Low forex markup of 1.5%",
      "Good lounge access for the annual fee",
      "Best HSBC card for travelers",
    ],
    applyUrl: "#affiliate-hsbc-travelone",
    cardColor: "linear-gradient(135deg, #b71c1c 0%, #880e4f 100%)",
    textColor: "#ffffff",
  },

  // ──────────────────────────────────────────────────────────
  // BANK OF BARODA (BOB) CARDS
  // ──────────────────────────────────────────────────────────
  {
    id: "bob-eterna",
    name: "BOB Eterna Credit Card",
    bank: "Bank of Baroda",
    bankLogo: "🟠",
    network: "Visa/Mastercard",
    tier: "premium",
    annualFee: 4999,
    renewalFee: 4999,
    feeWaiverSpend: 500000,
    joiningBonus: 3000,
    joiningBonusUnit: "reward points",
    minIncome: 1200000,
    inviteOnly: false,
    rewardRate: {
      base: 1.5,
      dining: 3.0,
      travel: 3.0,
      grocery: 1.5,
      fuel: 1.5,
      onlineShopping: 2.0,
      utilities: 1.5,
      entertainment: 3.0,
    },
    rewardUnit: "BOB Reward Points",
    transferPartners: [],
    loungeAccess: "8 domestic + 4 international/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹50 Lakh",
    concierge: true,
    golfAccess: true,
    bestFor: ["travel", "dining", "general-rewards"],
    highlights: [
      "3x rewards on travel, dining, entertainment",
      "Good lounge access internationally",
      "Complimentary golf and concierge",
      "Strong premium offering from BOB",
      "Fee waiver achievable at ₹5L spend",
    ],
    applyUrl: "#affiliate-bob-eterna",
    cardColor: "linear-gradient(135deg, #e65100 0%, #ff6d00 50%, #ff9100 100%)",
    textColor: "#ffffff",
  },
  {
    id: "bob-premier",
    name: "BOB Premier Credit Card",
    bank: "Bank of Baroda",
    bankLogo: "🟠",
    network: "Visa/Mastercard",
    tier: "mid-premium",
    annualFee: 2499,
    renewalFee: 2499,
    feeWaiverSpend: 250000,
    joiningBonus: 1500,
    joiningBonusUnit: "reward points",
    minIncome: 600000,
    inviteOnly: false,
    rewardRate: {
      base: 1.0,
      dining: 2.0,
      travel: 2.0,
      grocery: 1.0,
      fuel: 1.0,
      onlineShopping: 1.5,
      utilities: 1.0,
      entertainment: 2.0,
    },
    rewardUnit: "BOB Reward Points",
    transferPartners: [],
    loungeAccess: "4 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹25 Lakh",
    concierge: false,
    golfAccess: false,
    bestFor: ["dining", "travel", "general-rewards"],
    highlights: [
      "2x rewards on dining, travel, entertainment",
      "Lounge access included",
      "Reasonable fee with achievable waiver",
      "Good mid-tier card from BOB",
    ],
    applyUrl: "#affiliate-bob-premier",
    cardColor: "linear-gradient(135deg, #bf360c 0%, #e64a19 100%)",
    textColor: "#ffffff",
  },
  {
    id: "bob-select",
    name: "BOB Select Credit Card",
    bank: "Bank of Baroda",
    bankLogo: "🟠",
    network: "Visa/Mastercard",
    tier: "entry",
    annualFee: 499,
    renewalFee: 499,
    feeWaiverSpend: 100000,
    joiningBonus: 500,
    joiningBonusUnit: "reward points",
    minIncome: 300000,
    inviteOnly: false,
    rewardRate: {
      base: 0.5,
      dining: 1.0,
      travel: 0.5,
      grocery: 1.0,
      fuel: 1.0,
      onlineShopping: 1.0,
      utilities: 0.5,
      entertainment: 1.0,
    },
    rewardUnit: "BOB Reward Points",
    transferPartners: [],
    loungeAccess: "2 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["entry-level", "fuel", "everyday-spend"],
    highlights: [
      "Low annual fee with easy waiver",
      "Fuel surcharge waiver",
      "Good starter card",
      "Bonus rewards on everyday categories",
    ],
    applyUrl: "#affiliate-bob-select",
    cardColor: "linear-gradient(135deg, #ff6f00 0%, #ffa000 100%)",
    textColor: "#ffffff",
  },

  // ──────────────────────────────────────────────────────────
  // SBI CARDS
  // ──────────────────────────────────────────────────────────
  {
    id: "sbi-elite",
    name: "SBI Card ELITE",
    bank: "SBI Card",
    bankLogo: "🔵",
    network: "Visa/Mastercard",
    tier: "premium",
    annualFee: 4999,
    renewalFee: 4999,
    feeWaiverSpend: 1000000,
    joiningBonus: 5000,
    joiningBonusUnit: "reward points",
    minIncome: 1000000,
    inviteOnly: false,
    rewardRate: {
      base: 1.0,
      dining: 5.0,
      travel: 2.0,
      grocery: 2.0,
      fuel: 1.0,
      onlineShopping: 2.0,
      utilities: 1.0,
      entertainment: 5.0,
      departmentStores: 5.0,
    },
    rewardUnit: "SBI Reward Points (1 RP = ₹0.25)",
    transferPartners: [],
    loungeAccess: "6 domestic/year via Mastercard/Visa lounge program",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹1 Cr",
    concierge: true,
    golfAccess: false,
    bestFor: ["dining", "entertainment", "movies"],
    highlights: [
      "5x rewards on dining, entertainment, department stores",
      "Complimentary movie tickets (Buy 1 Get 1 on BookMyShow)",
      "2x rewards on grocery, online shopping, travel",
      "Complimentary Trident Privilege membership",
      "Good lounge access",
    ],
    applyUrl: "#affiliate-sbi-elite",
    cardColor: "linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1976d2 100%)",
    textColor: "#bbdefb",
  },
  {
    id: "sbi-prime",
    name: "SBI Card PRIME",
    bank: "SBI Card",
    bankLogo: "🔵",
    network: "Visa/Mastercard",
    tier: "mid-premium",
    annualFee: 2999,
    renewalFee: 2999,
    feeWaiverSpend: 300000,
    joiningBonus: 2500,
    joiningBonusUnit: "reward points",
    minIncome: 600000,
    inviteOnly: false,
    rewardRate: {
      base: 0.8,
      dining: 2.0,
      travel: 1.5,
      grocery: 1.5,
      fuel: 0.8,
      onlineShopping: 1.5,
      utilities: 0.8,
      entertainment: 3.0,
    },
    rewardUnit: "SBI Reward Points",
    transferPartners: [],
    loungeAccess: "4 domestic/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹50 Lakh",
    concierge: false,
    golfAccess: false,
    bestFor: ["entertainment", "dining", "general-rewards"],
    highlights: [
      "3x rewards on entertainment",
      "2x rewards on dining",
      "Complimentary movie tickets monthly",
      "Trident Privilege membership",
      "Fee waiver at ₹3L annual spend",
    ],
    applyUrl: "#affiliate-sbi-prime",
    cardColor: "linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)",
    textColor: "#ffffff",
  },
  {
    id: "sbi-simplyclick",
    name: "SBI SimplyCLICK",
    bank: "SBI Card",
    bankLogo: "🔵",
    network: "Visa",
    tier: "entry",
    annualFee: 499,
    renewalFee: 499,
    feeWaiverSpend: 100000,
    joiningBonus: 500,
    joiningBonusUnit: "Amazon voucher",
    minIncome: 300000,
    inviteOnly: false,
    rewardRate: {
      base: 0.5,
      dining: 2.5,
      travel: 0.5,
      grocery: 0.5,
      fuel: 0.5,
      onlineShopping: 5.0,
      utilities: 0.5,
      entertainment: 0.5,
      amazon: 5.0,
      onlinePartners: 10.0,
    },
    rewardUnit: "SBI Reward Points",
    transferPartners: [],
    loungeAccess: "None",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["online-shopping", "cashback"],
    highlights: [
      "10x rewards on partner online stores",
      "5x rewards on all other online spends",
      "Amazon/Cleartrip/Apollo24x7 exclusive rewards",
      "Best entry-level online shopping card from SBI",
    ],
    applyUrl: "#affiliate-sbi-simplyclick",
    cardColor: "linear-gradient(135deg, #0288d1 0%, #03a9f4 100%)",
    textColor: "#ffffff",
  },
  {
    id: "sbi-simplysave",
    name: "SBI SimplySAVE",
    bank: "SBI Card",
    bankLogo: "🔵",
    network: "Visa",
    tier: "entry",
    annualFee: 499,
    renewalFee: 499,
    feeWaiverSpend: 100000,
    joiningBonus: 500,
    joiningBonusUnit: "reward points",
    minIncome: 300000,
    inviteOnly: false,
    rewardRate: {
      base: 0.5,
      dining: 5.0,
      travel: 0.5,
      grocery: 5.0,
      fuel: 0.5,
      onlineShopping: 0.5,
      utilities: 0.5,
      entertainment: 5.0,
      movies: 5.0,
    },
    rewardUnit: "SBI Reward Points",
    transferPartners: [],
    loungeAccess: "None",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["dining", "grocery", "entertainment", "everyday-spend"],
    highlights: [
      "10x rewards on dining, grocery, movies, departmental stores",
      "Best SBI card for everyday essential spends",
      "Great for families with high grocery spending",
      "Low annual fee with easy waiver",
    ],
    applyUrl: "#affiliate-sbi-simplysave",
    cardColor: "linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)",
    textColor: "#ffffff",
  },
  {
    id: "sbi-bpcl",
    name: "SBI BPCL Credit Card",
    bank: "SBI Card",
    bankLogo: "🔵",
    network: "Visa/Mastercard",
    tier: "entry",
    annualFee: 499,
    renewalFee: 499,
    feeWaiverSpend: 100000,
    joiningBonus: 500,
    joiningBonusUnit: "reward points + BPCL voucher",
    minIncome: 300000,
    inviteOnly: false,
    rewardRate: {
      base: 0.5,
      dining: 1.0,
      travel: 0.5,
      grocery: 1.0,
      fuel: 7.25,
      onlineShopping: 0.5,
      utilities: 0.5,
      entertainment: 1.0,
      bpclFuel: 7.25,
    },
    rewardUnit: "SBI Reward Points (high value at BPCL pumps)",
    transferPartners: [],
    loungeAccess: "None",
    fuelSurchargeWaiver: true,
    insuranceCover: "None",
    concierge: false,
    golfAccess: false,
    bestFor: ["fuel", "everyday-spend"],
    highlights: [
      "Up to 7.25% value back on BPCL fuel purchases",
      "Best fuel savings card in India",
      "1% fuel surcharge waiver on all fuel pumps",
      "Great for daily commuters and road warriors",
    ],
    applyUrl: "#affiliate-sbi-bpcl",
    cardColor: "linear-gradient(135deg, #1565c0 0%, #ffab00 100%)",
    textColor: "#ffffff",
  },
  {
    id: "sbi-airIndia",
    name: "SBI Card Air India Signature",
    bank: "SBI Card",
    bankLogo: "🔵",
    network: "Visa Signature",
    tier: "premium",
    annualFee: 4999,
    renewalFee: 4999,
    feeWaiverSpend: 500000,
    joiningBonus: 10000,
    joiningBonusUnit: "Air India Flying Returns miles",
    minIncome: 800000,
    inviteOnly: false,
    rewardRate: {
      base: 1.5,
      dining: 2.0,
      travel: 6.0,
      grocery: 1.5,
      fuel: 1.5,
      onlineShopping: 2.0,
      utilities: 1.5,
      entertainment: 2.0,
      airIndia: 6.0,
    },
    rewardUnit: "Air India Flying Returns Miles",
    transferPartners: [
      { name: "Air India Flying Returns", ratio: "Direct earn", type: "airline" },
      { name: "Star Alliance partners", ratio: "Via Flying Returns", type: "airline" },
    ],
    loungeAccess: "4 domestic + 2 international/year",
    fuelSurchargeWaiver: true,
    insuranceCover: "Air accident ₹50 Lakh",
    concierge: false,
    golfAccess: false,
    bestFor: ["airline-miles", "travel"],
    highlights: [
      "6 Flying Returns miles per ₹100 on Air India",
      "10,000 bonus miles on joining",
      "Access to Star Alliance lounge network",
      "Best card for Air India frequent flyers",
      "Complimentary travel insurance",
    ],
    applyUrl: "#affiliate-sbi-air-india",
    cardColor: "linear-gradient(135deg, #d32f2f 0%, #f44336 50%, #ff5722 100%)",
    textColor: "#ffffff",
  },
];

// ============================================================
// SECTION 2: SPENDING CATEGORIES DEFINITION
// ============================================================

const SPENDING_CATEGORIES = [
  { id: "grocery", label: "Groceries & Supermarkets", icon: "🛒", placeholder: "e.g. 8000" },
  { id: "dining", label: "Dining & Food Delivery", icon: "🍽️", placeholder: "e.g. 5000" },
  { id: "fuel", label: "Fuel & Transportation", icon: "⛽", placeholder: "e.g. 4000" },
  { id: "onlineShopping", label: "Online Shopping", icon: "🛍️", placeholder: "e.g. 10000" },
  { id: "travel", label: "Travel (Flights & Hotels)", icon: "✈️", placeholder: "e.g. 15000" },
  { id: "utilities", label: "Utility Bills & Recharges", icon: "💡", placeholder: "e.g. 5000" },
  { id: "entertainment", label: "Entertainment & Movies", icon: "🎬", placeholder: "e.g. 3000" },
];

const REWARD_GOALS = [
  { id: "cashback", label: "Direct Cashback", icon: "💰", description: "Get money back on every purchase" },
  { id: "airline-miles", label: "Airline Miles", icon: "✈️", description: "Earn miles for free flights" },
  { id: "hotels", label: "Hotel Stays & Points", icon: "🏨", description: "Earn hotel points for free stays" },
  { id: "lounge", label: "Airport Lounge Access", icon: "🛋️", description: "Complimentary lounge visits" },
  { id: "fuel-savings", label: "Fuel Savings", icon: "⛽", description: "Maximum savings on fuel purchases" },
  { id: "online-shopping", label: "Shopping Rewards", icon: "🛒", description: "Maximize rewards on online shopping" },
  { id: "dining-lifestyle", label: "Dining & Lifestyle", icon: "🍷", description: "Dining offers, movie tickets, etc." },
  { id: "premium-lifestyle", label: "Premium Lifestyle", icon: "👑", description: "Golf, concierge, luxury benefits" },
];

const INCOME_RANGES = [
  { value: 300000, label: "₹3L - ₹5L" },
  { value: 500000, label: "₹5L - ₹8L" },
  { value: 800000, label: "₹8L - ₹12L" },
  { value: 1200000, label: "₹12L - ₹18L" },
  { value: 1800000, label: "₹18L - ₹30L" },
  { value: 3000000, label: "₹30L - ₹50L" },
  { value: 5000000, label: "₹50L+" },
];

// ============================================================
// SECTION 3: RECOMMENDATION ENGINE
// ============================================================

class RecommendationEngine {
  constructor(userProfile) {
    this.profile = userProfile;
    this.totalMonthlySpend = this.calculateTotalSpend();
    this.annualSpend = this.totalMonthlySpend * 12;
  }

  calculateTotalSpend() {
    return Object.values(this.profile.spending).reduce((sum, val) => sum + (val || 0), 0);
  }

  getEligibleCards() {
    return CARDS_DATABASE.filter((card) => {
      const incomeEligible = this.profile.income >= card.minIncome * 0.8; // 20% buffer for banks
      return incomeEligible;
    });
  }

  calculateCardScore(card) {
    let score = 0;
    let annualRewardValue = 0;
    const breakdown = {};

    // 1. Reward value calculation (40% weight)
    SPENDING_CATEGORIES.forEach((cat) => {
      const monthlySpend = this.profile.spending[cat.id] || 0;
      const annualCategorySpend = monthlySpend * 12;
      const rewardRate = card.rewardRate[cat.id] || card.rewardRate.base || 0;
      const categoryRewardValue = (annualCategorySpend * rewardRate) / 100;
      annualRewardValue += categoryRewardValue;
      breakdown[cat.id] = {
        spend: annualCategorySpend,
        rate: rewardRate,
        value: categoryRewardValue,
      };
    });

    // Net reward value after annual fee
    const feeWaived = card.feeWaiverSpend && this.annualSpend >= card.feeWaiverSpend;
    const effectiveFee = feeWaived ? 0 : card.annualFee;
    const netRewardValue = annualRewardValue - effectiveFee;
    score += (netRewardValue / Math.max(this.annualSpend, 1)) * 4000; // normalize

    // 2. Goal alignment (35% weight)
    const goalScore = this.calculateGoalAlignment(card);
    score += goalScore * 35;

    // 3. Feature match (15% weight)
    const featureScore = this.calculateFeatureScore(card);
    score += featureScore * 15;

    // 4. Income fit (10% weight) — prefer cards that match income band, not just eligible
    const incomeRatio = this.profile.income / card.minIncome;
    let incomeFit = 0;
    if (incomeRatio >= 1.0 && incomeRatio <= 2.5) incomeFit = 1.0; // sweet spot
    else if (incomeRatio > 2.5) incomeFit = 0.6; // overqualified
    else if (incomeRatio >= 0.8) incomeFit = 0.5; // stretch
    else incomeFit = 0.1;
    score += incomeFit * 10;

    // Bonus for fee waiver achievability
    if (feeWaived) score += 5;

    return {
      card,
      score: Math.round(score * 10) / 10,
      annualRewardValue: Math.round(annualRewardValue),
      netRewardValue: Math.round(netRewardValue),
      effectiveFee,
      feeWaived,
      breakdown,
      matchPercentage: Math.min(98, Math.max(35, Math.round(40 + (score / 1.5)))),
    };
  }

  calculateGoalAlignment(card) {
    if (!this.profile.goals || this.profile.goals.length === 0) return 0.5;

    let alignment = 0;
    const goalCount = this.profile.goals.length;

    this.profile.goals.forEach((goal) => {
      switch (goal) {
        case "cashback":
          if (card.rewardUnit.toLowerCase().includes("cashback")) alignment += 1.0;
          else if (card.rewardRate.base >= 2.0) alignment += 0.5;
          break;
        case "airline-miles":
          const airlinePartners = card.transferPartners.filter((p) => p.type === "airline");
          if (airlinePartners.length >= 2) alignment += 1.0;
          else if (airlinePartners.length === 1) alignment += 0.6;
          else if (card.rewardRate.travel >= 3.0) alignment += 0.3;
          break;
        case "hotels":
          const hotelPartners = card.transferPartners.filter((p) => p.type === "hotel");
          if (hotelPartners.length >= 1) alignment += 1.0;
          else if (card.rewardRate.travel >= 3.0) alignment += 0.4;
          break;
        case "lounge":
          if (card.loungeAccess.toLowerCase().includes("unlimited")) alignment += 1.0;
          else if (card.loungeAccess.toLowerCase().includes("international")) alignment += 0.7;
          else if (card.loungeAccess !== "None") alignment += 0.3;
          break;
        case "fuel-savings":
          if (card.rewardRate.fuel >= 5.0) alignment += 1.0;
          else if (card.fuelSurchargeWaiver && card.rewardRate.fuel >= 2.0) alignment += 0.6;
          else if (card.fuelSurchargeWaiver) alignment += 0.3;
          break;
        case "online-shopping":
          if (card.rewardRate.onlineShopping >= 5.0) alignment += 1.0;
          else if (card.rewardRate.onlineShopping >= 3.0) alignment += 0.6;
          else if (card.rewardRate.onlineShopping >= 2.0) alignment += 0.3;
          break;
        case "dining-lifestyle":
          if (card.rewardRate.dining >= 4.0) alignment += 1.0;
          else if (card.rewardRate.dining >= 2.0) alignment += 0.6;
          break;
        case "premium-lifestyle":
          if (card.concierge && card.golfAccess) alignment += 1.0;
          else if (card.concierge || card.golfAccess) alignment += 0.5;
          break;
      }
    });

    return alignment / goalCount;
  }

  calculateFeatureScore(card) {
    let score = 0;
    let checks = 0;

    // Transfer partners value
    if (card.transferPartners.length >= 3) { score += 1; checks++; }
    else if (card.transferPartners.length >= 1) { score += 0.5; checks++; }
    else { checks++; }

    // Lounge access
    if (card.loungeAccess.toLowerCase().includes("unlimited")) { score += 1; checks++; }
    else if (card.loungeAccess !== "None") { score += 0.5; checks++; }
    else { checks++; }

    // Insurance
    if (card.insuranceCover !== "None") { score += 0.5; checks++; }
    else { checks++; }

    // Concierge
    if (card.concierge) { score += 0.5; checks++; }
    else { checks++; }

    return score / checks;
  }

  getRecommendations() {
    const eligible = this.getEligibleCards();
    const scored = eligible.map((card) => this.calculateCardScore(card));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 8); // Top 8 recommendations
  }
}

// ============================================================
// SECTION 4: UI APPLICATION CONTROLLER
// ============================================================

class CardSuggestApp {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 4;
    this.userProfile = {
      income: 0,
      employmentType: "salaried",
      spending: {},
      goals: [],
    };
    this.recommendations = [];
    this.init();
  }

  init() {
    this.renderApp();
    this.attachEventListeners();
    this.showStep(1);
  }

  renderApp() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <!-- HEADER -->
      <header class="header">
        <div class="container">
          <div class="header-content">
            <div class="logo">
              <span class="logo-icon">💳</span>
              <span class="logo-text">CardSuggest<span class="logo-dot">.</span>in</span>
            </div>
            <div class="header-tagline">India's Smartest Credit Card Advisor</div>
          </div>
        </div>
      </header>

      <!-- HERO -->
      <section class="hero" id="hero">
        <div class="container">
          <h1>Find Your Perfect Credit Card</h1>
          <p class="hero-sub">Answer a few questions about your income, spending habits, and goals — we'll recommend the best credit cards from HDFC, ICICI, Axis, HSBC, BOB & SBI.</p>
          <button class="btn-primary btn-large" id="btn-start">
            Get Started — It's Free
            <span class="btn-arrow">→</span>
          </button>
          <div class="trust-badges">
            <div class="badge">🏦 6 Major Banks</div>
            <div class="badge">💳 30+ Cards</div>
            <div class="badge">🎯 Personalized</div>
            <div class="badge">🔒 No Data Stored</div>
          </div>
        </div>
      </section>

      <!-- WIZARD -->
      <section class="wizard" id="wizard" style="display:none;">
        <div class="container">
          <!-- Progress Bar -->
          <div class="progress-container">
            <div class="progress-bar">
              <div class="progress-fill" id="progress-fill"></div>
            </div>
            <div class="progress-steps">
              <div class="progress-step active" data-step="1">
                <span class="step-num">1</span>
                <span class="step-label">Profile</span>
              </div>
              <div class="progress-step" data-step="2">
                <span class="step-num">2</span>
                <span class="step-label">Spending</span>
              </div>
              <div class="progress-step" data-step="3">
                <span class="step-num">3</span>
                <span class="step-label">Goals</span>
              </div>
              <div class="progress-step" data-step="4">
                <span class="step-num">4</span>
                <span class="step-label">Results</span>
              </div>
            </div>
          </div>

          <!-- Step 1: Profile -->
          <div class="step-panel" id="step-1">
            <div class="step-header">
              <h2>Tell us about yourself</h2>
              <p>This helps us find cards you're eligible for</p>
            </div>
            <div class="form-group">
              <label class="form-label">Annual Income (Gross)</label>
              <div class="income-grid" id="income-grid">
                ${INCOME_RANGES.map(
                  (r) => `
                  <button class="income-option" data-value="${r.value}">
                    <span class="income-label">${r.label}</span>
                  </button>
                `
                ).join("")}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Employment Type</label>
              <div class="toggle-group">
                <button class="toggle-option active" data-value="salaried">Salaried</button>
                <button class="toggle-option" data-value="self-employed">Self-Employed</button>
                <button class="toggle-option" data-value="business">Business Owner</button>
              </div>
            </div>
            <div class="step-actions">
              <button class="btn-secondary" id="btn-back-1" style="visibility:hidden;">← Back</button>
              <button class="btn-primary" id="btn-next-1" disabled>Continue →</button>
            </div>
          </div>

          <!-- Step 2: Spending -->
          <div class="step-panel" id="step-2" style="display:none;">
            <div class="step-header">
              <h2>Your Monthly Spending</h2>
              <p>Approximate monthly spend in each category (in ₹)</p>
            </div>
            <div class="spending-grid">
              ${SPENDING_CATEGORIES.map(
                (cat) => `
                <div class="spending-card">
                  <div class="spending-icon">${cat.icon}</div>
                  <label class="spending-label">${cat.label}</label>
                  <div class="input-wrapper">
                    <span class="input-prefix">₹</span>
                    <input type="number" class="spending-input" id="spend-${cat.id}"
                           placeholder="${cat.placeholder}" min="0" step="500">
                  </div>
                </div>
              `
              ).join("")}
            </div>
            <div class="spend-summary" id="spend-summary">
              <span>Total Monthly Spend: </span>
              <strong id="total-spend">₹0</strong>
            </div>
            <div class="step-actions">
              <button class="btn-secondary" id="btn-back-2">← Back</button>
              <button class="btn-primary" id="btn-next-2">Continue →</button>
            </div>
          </div>

          <!-- Step 3: Goals -->
          <div class="step-panel" id="step-3" style="display:none;">
            <div class="step-header">
              <h2>What matters most to you?</h2>
              <p>Select your top reward preferences (pick up to 3)</p>
            </div>
            <div class="goals-grid">
              ${REWARD_GOALS.map(
                (goal) => `
                <button class="goal-card" data-goal="${goal.id}">
                  <span class="goal-icon">${goal.icon}</span>
                  <span class="goal-label">${goal.label}</span>
                  <span class="goal-desc">${goal.description}</span>
                  <span class="goal-check">✓</span>
                </button>
              `
              ).join("")}
            </div>
            <div class="goals-selected" id="goals-selected">
              <span id="goals-count">0</span>/3 selected
            </div>
            <div class="step-actions">
              <button class="btn-secondary" id="btn-back-3">← Back</button>
              <button class="btn-primary" id="btn-next-3" disabled>Show My Cards →</button>
            </div>
          </div>

          <!-- Step 4: Results -->
          <div class="step-panel" id="step-4" style="display:none;">
            <div class="step-header">
              <h2>Your Personalized Recommendations</h2>
              <p id="results-subtitle"></p>
            </div>
            <div class="results-summary" id="results-summary"></div>
            <div class="results-grid" id="results-grid"></div>
            <div class="step-actions">
              <button class="btn-secondary" id="btn-back-4">← Start Over</button>
            </div>
          </div>
        </div>
      </section>

      <!-- CARD DETAIL MODAL -->
      <div class="modal-overlay" id="modal-overlay" style="display:none;">
        <div class="modal" id="card-modal">
          <button class="modal-close" id="modal-close">×</button>
          <div class="modal-content" id="modal-content"></div>
        </div>
      </div>

      <!-- FOOTER -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <p class="footer-brand">CardSuggest.in — India's Smartest Credit Card Advisor</p>
            <p class="footer-disclaimer">
              Disclaimer: Card features, fees, and reward rates are indicative and subject to change by the issuing bank.
              Please verify current terms on the official bank website before applying.
              CardSuggest earns affiliate commissions from partner banks at no additional cost to you.
            </p>
            <p class="footer-copy">© 2026 CardSuggest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }

  attachEventListeners() {
    // Start button
    document.getElementById("btn-start").addEventListener("click", () => {
      document.getElementById("hero").style.display = "none";
      document.getElementById("wizard").style.display = "block";
      this.showStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Income selection
    document.querySelectorAll(".income-option").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".income-option").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        this.userProfile.income = parseInt(btn.dataset.value);
        document.getElementById("btn-next-1").disabled = false;
      });
    });

    // Employment type
    document.querySelectorAll(".toggle-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".toggle-option").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.userProfile.employmentType = btn.dataset.value;
      });
    });

    // Spending inputs
    document.querySelectorAll(".spending-input").forEach((input) => {
      input.addEventListener("input", () => {
        this.updateTotalSpend();
      });
    });

    // Goal selection
    document.querySelectorAll(".goal-card").forEach((card) => {
      card.addEventListener("click", () => {
        const goal = card.dataset.goal;
        if (card.classList.contains("selected")) {
          card.classList.remove("selected");
          this.userProfile.goals = this.userProfile.goals.filter((g) => g !== goal);
        } else if (this.userProfile.goals.length < 3) {
          card.classList.add("selected");
          this.userProfile.goals.push(goal);
        }
        document.getElementById("goals-count").textContent = this.userProfile.goals.length;
        document.getElementById("btn-next-3").disabled = this.userProfile.goals.length === 0;
      });
    });

    // Navigation buttons
    document.getElementById("btn-next-1").addEventListener("click", () => this.showStep(2));
    document.getElementById("btn-next-2").addEventListener("click", () => this.showStep(3));
    document.getElementById("btn-next-3").addEventListener("click", () => {
      this.collectSpending();
      this.generateRecommendations();
      this.showStep(4);
    });
    document.getElementById("btn-back-2").addEventListener("click", () => this.showStep(1));
    document.getElementById("btn-back-3").addEventListener("click", () => this.showStep(2));
    document.getElementById("btn-back-4").addEventListener("click", () => {
      this.resetForm();
    });

    // Modal
    document.getElementById("modal-close").addEventListener("click", () => this.closeModal());
    document.getElementById("modal-overlay").addEventListener("click", (e) => {
      if (e.target === document.getElementById("modal-overlay")) this.closeModal();
    });
  }

  showStep(step) {
    this.currentStep = step;
    for (let i = 1; i <= this.totalSteps; i++) {
      const panel = document.getElementById(`step-${i}`);
      if (panel) panel.style.display = i === step ? "block" : "none";
    }

    // Update progress
    const fill = document.getElementById("progress-fill");
    fill.style.width = `${(step / this.totalSteps) * 100}%`;

    document.querySelectorAll(".progress-step").forEach((el) => {
      const s = parseInt(el.dataset.step);
      el.classList.toggle("active", s <= step);
      el.classList.toggle("completed", s < step);
    });

    window.scrollTo({ top: 200, behavior: "smooth" });
  }

  updateTotalSpend() {
    let total = 0;
    SPENDING_CATEGORIES.forEach((cat) => {
      const val = parseInt(document.getElementById(`spend-${cat.id}`).value) || 0;
      total += val;
    });
    document.getElementById("total-spend").textContent = `₹${total.toLocaleString("en-IN")}`;
  }

  collectSpending() {
    SPENDING_CATEGORIES.forEach((cat) => {
      this.userProfile.spending[cat.id] = parseInt(document.getElementById(`spend-${cat.id}`).value) || 0;
    });
  }

  generateRecommendations() {
    const engine = new RecommendationEngine(this.userProfile);
    this.recommendations = engine.getRecommendations();
    this.renderResults();
  }

  renderResults() {
    const totalMonthly = Object.values(this.userProfile.spending).reduce((s, v) => s + v, 0);
    const goalLabels = this.userProfile.goals
      .map((g) => REWARD_GOALS.find((rg) => rg.id === g)?.label)
      .join(", ");

    document.getElementById("results-subtitle").textContent =
      `Based on ₹${totalMonthly.toLocaleString("en-IN")}/month spending and preference for: ${goalLabels}`;

    const summaryHtml = `
      <div class="summary-cards">
        <div class="summary-stat">
          <span class="stat-value">₹${(totalMonthly * 12).toLocaleString("en-IN")}</span>
          <span class="stat-label">Annual Card Spend</span>
        </div>
        <div class="summary-stat">
          <span class="stat-value">${this.recommendations.length}</span>
          <span class="stat-label">Cards Matched</span>
        </div>
        <div class="summary-stat best">
          <span class="stat-value">₹${this.recommendations[0]?.netRewardValue?.toLocaleString("en-IN") || 0}</span>
          <span class="stat-label">Best Annual Reward Value</span>
        </div>
      </div>
    `;
    document.getElementById("results-summary").innerHTML = summaryHtml;

    const gridHtml = this.recommendations
      .map(
        (rec, index) => `
      <div class="result-card ${index === 0 ? "top-pick" : ""}" data-card-id="${rec.card.id}">
        ${index === 0 ? '<div class="top-pick-badge">🏆 Top Pick</div>' : ""}
        ${index === 1 ? '<div class="top-pick-badge runner-up">⭐ Runner Up</div>' : ""}
        <div class="card-visual" style="background: ${rec.card.cardColor}; color: ${rec.card.textColor};">
          <div class="card-bank">${rec.card.bank}</div>
          <div class="card-name">${rec.card.name}</div>
          <div class="card-network">${rec.card.network}</div>
        </div>
        <div class="card-info">
          <div class="card-match">
            <div class="match-bar-bg">
              <div class="match-bar-fill" style="width: ${rec.matchPercentage}%"></div>
            </div>
            <span class="match-pct">${rec.matchPercentage}% match</span>
          </div>
          <div class="card-stats">
            <div class="card-stat">
              <span class="stat-key">Annual Fee</span>
              <span class="stat-val ${rec.feeWaived ? "fee-waived" : ""}">
                ₹${rec.card.annualFee.toLocaleString("en-IN")}
                ${rec.feeWaived ? " (Waived!)" : ""}
              </span>
            </div>
            <div class="card-stat">
              <span class="stat-key">Est. Annual Rewards</span>
              <span class="stat-val reward-val">₹${rec.annualRewardValue.toLocaleString("en-IN")}</span>
            </div>
            <div class="card-stat">
              <span class="stat-key">Net Value</span>
              <span class="stat-val ${rec.netRewardValue > 0 ? "positive" : "negative"}">
                ₹${rec.netRewardValue.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
          <div class="card-highlights">
            ${rec.card.highlights
              .slice(0, 3)
              .map((h) => `<div class="highlight-item">✓ ${h}</div>`)
              .join("")}
          </div>
          ${
            rec.card.transferPartners.length > 0
              ? `
            <div class="card-transfers">
              <span class="transfer-label">Transfer Partners:</span>
              ${rec.card.transferPartners.map((p) => `<span class="transfer-tag">${p.name}</span>`).join("")}
            </div>
          `
              : ""
          }
          <div class="card-actions">
            <button class="btn-apply" data-url="${rec.card.applyUrl}">Apply Now →</button>
            <button class="btn-details" data-card-id="${rec.card.id}">View Details</button>
          </div>
        </div>
      </div>
    `
      )
      .join("");

    document.getElementById("results-grid").innerHTML = gridHtml;

    // Attach result event listeners
    document.querySelectorAll(".btn-details").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cardId = btn.dataset.cardId;
        this.showCardDetail(cardId);
      });
    });

    document.querySelectorAll(".btn-apply").forEach((btn) => {
      btn.addEventListener("click", () => {
        const url = btn.dataset.url;
        // In production, this will redirect to the affiliate link
        this.trackAndRedirect(url);
      });
    });
  }

  showCardDetail(cardId) {
    const rec = this.recommendations.find((r) => r.card.id === cardId);
    if (!rec) return;
    const card = rec.card;

    const modalHtml = `
      <div class="detail-header" style="background: ${card.cardColor}; color: ${card.textColor};">
        <div class="detail-bank">${card.bank}</div>
        <h2 class="detail-name">${card.name}</h2>
        <div class="detail-network">${card.network}</div>
        <div class="detail-match">${rec.matchPercentage}% match for you</div>
      </div>
      <div class="detail-body">
        <div class="detail-section">
          <h3>💰 Fees & Charges</h3>
          <table class="detail-table">
            <tr><td>Annual Fee</td><td>₹${card.annualFee.toLocaleString("en-IN")} + GST</td></tr>
            <tr><td>Renewal Fee</td><td>₹${card.renewalFee.toLocaleString("en-IN")} + GST</td></tr>
            <tr><td>Fee Waiver</td><td>${card.feeWaiverSpend ? `Spend ₹${(card.feeWaiverSpend / 100000).toFixed(1)}L/year` : "Not available"}</td></tr>
            <tr><td>Joining Bonus</td><td>${card.joiningBonus.toLocaleString("en-IN")} ${card.joiningBonusUnit}</td></tr>
          </table>
        </div>

        <div class="detail-section">
          <h3>⭐ Reward Rates</h3>
          <table class="detail-table">
            ${SPENDING_CATEGORIES.map(
              (cat) => `
              <tr>
                <td>${cat.icon} ${cat.label}</td>
                <td class="rate-cell">${card.rewardRate[cat.id] || card.rewardRate.base}%</td>
              </tr>
            `
            ).join("")}
          </table>
        </div>

        <div class="detail-section">
          <h3>📊 Your Estimated Rewards Breakdown</h3>
          <table class="detail-table">
            ${SPENDING_CATEGORIES.map((cat) => {
              const b = rec.breakdown[cat.id];
              return b && b.spend > 0
                ? `<tr>
                    <td>${cat.icon} ${cat.label}</td>
                    <td>₹${b.spend.toLocaleString("en-IN")} × ${b.rate}%</td>
                    <td class="value-cell">₹${Math.round(b.value).toLocaleString("en-IN")}</td>
                  </tr>`
                : "";
            }).join("")}
            <tr class="total-row">
              <td><strong>Total Annual Reward Value</strong></td>
              <td></td>
              <td class="value-cell"><strong>₹${rec.annualRewardValue.toLocaleString("en-IN")}</strong></td>
            </tr>
            <tr>
              <td>Less: Annual Fee</td>
              <td></td>
              <td class="value-cell ${rec.feeWaived ? "fee-waived" : ""}">
                -₹${rec.effectiveFee.toLocaleString("en-IN")} ${rec.feeWaived ? "(Waived)" : ""}
              </td>
            </tr>
            <tr class="net-row">
              <td><strong>Net Annual Value</strong></td>
              <td></td>
              <td class="value-cell ${rec.netRewardValue > 0 ? "positive" : "negative"}">
                <strong>₹${rec.netRewardValue.toLocaleString("en-IN")}</strong>
              </td>
            </tr>
          </table>
        </div>

        ${
          card.transferPartners.length > 0
            ? `
          <div class="detail-section">
            <h3>🔄 Transfer Partners</h3>
            <div class="partner-grid">
              ${card.transferPartners
                .map(
                  (p) => `
                <div class="partner-card">
                  <span class="partner-type">${p.type === "airline" ? "✈️" : "🏨"}</span>
                  <span class="partner-name">${p.name}</span>
                  <span class="partner-ratio">${p.ratio}</span>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }

        <div class="detail-section">
          <h3>🎯 Key Benefits</h3>
          <ul class="benefits-list">
            <li>🛋️ <strong>Lounge Access:</strong> ${card.loungeAccess}</li>
            <li>⛽ <strong>Fuel Surcharge Waiver:</strong> ${card.fuelSurchargeWaiver ? "Yes" : "No"}</li>
            <li>🛡️ <strong>Insurance:</strong> ${card.insuranceCover}</li>
            <li>📞 <strong>Concierge:</strong> ${card.concierge ? "Yes — 24/7" : "No"}</li>
            <li>⛳ <strong>Golf Access:</strong> ${card.golfAccess ? "Yes" : "No"}</li>
          </ul>
        </div>

        <div class="detail-section">
          <h3>✨ Highlights</h3>
          <ul class="highlights-list">
            ${card.highlights.map((h) => `<li>✓ ${h}</li>`).join("")}
          </ul>
        </div>

        <div class="detail-section eligibility">
          <h3>📋 Eligibility</h3>
          <p><strong>Minimum Income:</strong> ₹${(card.minIncome / 100000).toFixed(0)}L per annum</p>
          <p><strong>Invite Only:</strong> ${card.inviteOnly ? "Yes — typically offered to existing premium customers" : "No — open for application"}</p>
        </div>

        <div class="detail-cta">
          <button class="btn-apply btn-apply-large" data-url="${card.applyUrl}">
            Apply for ${card.name} →
          </button>
        </div>
      </div>
    `;

    document.getElementById("modal-content").innerHTML = modalHtml;
    document.getElementById("modal-overlay").style.display = "flex";
    document.body.style.overflow = "hidden";

    // Re-attach apply button listener in modal
    document.querySelector(".detail-cta .btn-apply").addEventListener("click", (e) => {
      this.trackAndRedirect(e.target.dataset.url);
    });
  }

  closeModal() {
    document.getElementById("modal-overlay").style.display = "none";
    document.body.style.overflow = "";
  }

  trackAndRedirect(url) {
    // Analytics tracking placeholder
    console.log(`[CardSuggest Analytics] Affiliate click: ${url}`, {
      userIncome: this.userProfile.income,
      userGoals: this.userProfile.goals,
      timestamp: new Date().toISOString(),
    });

    // In production: redirect to actual affiliate URL
    // window.location.href = url;
    alert(
      `🎉 In production, this would redirect to the bank's application page via your affiliate link.\n\nAffiliate URL: ${url}\n\nThis click has been tracked for analytics.`
    );
  }

  resetForm() {
    this.userProfile = {
      income: 0,
      employmentType: "salaried",
      spending: {},
      goals: [],
    };
    this.recommendations = [];

    // Reset UI
    document.querySelectorAll(".income-option").forEach((b) => b.classList.remove("selected"));
    document.querySelectorAll(".toggle-option").forEach((b) => {
      b.classList.remove("active");
      if (b.dataset.value === "salaried") b.classList.add("active");
    });
    document.querySelectorAll(".spending-input").forEach((i) => (i.value = ""));
    document.querySelectorAll(".goal-card").forEach((c) => c.classList.remove("selected"));
    document.getElementById("total-spend").textContent = "₹0";
    document.getElementById("goals-count").textContent = "0";
    document.getElementById("btn-next-1").disabled = true;
    document.getElementById("btn-next-3").disabled = true;

    this.showStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ============================================================
// SECTION 5: INITIALIZE APP
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  new CardSuggestApp();
});
