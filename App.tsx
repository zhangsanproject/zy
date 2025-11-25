import React, { useState } from 'react';
import { ProductDetail } from './components/ProductDetail';
import { FilterDrawer } from './components/FilterDrawer';
import { BottomBar } from './components/BottomBar';
import { Product } from './types';

// Mock Data representing the product in the screenshot
const MOCK_PRODUCT: Product = {
  id: 'dg-001',
  categoryPath: ['首页', '根茎类药材', '当归'],
  title: '岷县特级当归 全当归切片 无硫熏中药材',
  description: '本品产自"中国当归之乡"甘肃岷县，当地海拔高、气候适宜，所产当归品质优良，有效成分含量高，为道地药材。',
  price: 35.80,
  originalPrice: 49.00,
  discountTag: '7.3折',
  images: [], // Handled in component with placeholders
  specs: [
    { id: 'weight', name: '重量', options: ['250g', '500g', '1000g'] },
    { id: 'cut', name: '切片规格', options: ['标准切片', '薄片', '整根'] }
  ],
  stats: {
    rating: 4.8,
    count: 328,
    soldCount: '1.2万'
  },
  merchant: {
    name: '本草中药材专营店',
    isOfficial: true,
    badges: ['中药材GAP认证', '正品保障', '闪电发货'],
    ratings: {
      description: 4.9,
      service: 4.8,
      logistics: 4.7
    }
  },
  origin: '甘肃省岷县',
  harvestTime: '2023年秋季',
  stock: 2358
};

const App: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5fbf7] text-[#1f2937] font-sans antialiased max-w-md mx-auto relative overflow-hidden shadow-2xl">
      {/* 
        Container limited to max-w-md to simulate mobile screen on desktop.
        In a real mobile web app, this constraint would be removed or handled via media queries.
      */}
      
      <ProductDetail 
        product={MOCK_PRODUCT} 
        onOpenFilter={() => setIsFilterOpen(true)}
      />
      
      <BottomBar />
      
      <FilterDrawer 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />
    </div>
  );
};

export default App;