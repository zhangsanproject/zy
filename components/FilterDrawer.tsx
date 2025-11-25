import React, { useState } from 'react';
import { Icons } from './Icons';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="relative w-[85%] max-w-sm h-full bg-[#f0f9f4] shadow-2xl flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="pt-12 pb-6 px-6 text-center">
          <h2 className="text-2xl font-serif text-tcm-dark font-bold mb-2">中药材搜索</h2>
          <div className="flex justify-center items-center gap-2">
            <div className="h-[1px] w-8 bg-tcm-dark/30"></div>
            <p className="text-xs text-tcm-dark/60 tracking-widest">寻百草之精华，觅药材之真谛</p>
            <div className="h-[1px] w-8 bg-tcm-dark/30"></div>
          </div>
        </div>

        {/* Scrollable Form Area */}
        <div className="flex-1 overflow-y-auto px-6 space-y-8">
          
          {/* Name Search */}
          <div>
            <label className="block text-sm font-medium text-tcm-dark/70 mb-3">药材名称搜索</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icons.Search className="h-4 w-4 text-tcm-dark/40" />
              </div>
              <input
                type="text"
                placeholder="请输入药材名称..."
                className="block w-full pl-10 pr-3 py-3 border border-tcm-border rounded-lg bg-white text-sm placeholder-tcm-dark/30 focus:outline-none focus:border-tcm-primary focus:ring-1 focus:ring-tcm-primary transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-tcm-dark/70 mb-3">药材品类筛选</label>
            <div className="relative">
              <button className="relative w-full py-3 px-4 border border-tcm-border rounded-lg bg-white text-left text-sm text-tcm-dark flex justify-between items-center">
                <span>全部品类</span>
                <Icons.ChevronDown className="h-4 w-4 text-tcm-dark/50" />
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-tcm-dark/70 mb-3">价格区间筛选</label>
            <div className="bg-[#e6f2ed] rounded-lg p-4 pb-8">
              <div className="flex justify-between text-tcm-dark font-serif font-bold mb-6">
                <span>¥{minPrice}</span>
                <span className="text-tcm-dark/40 font-sans font-normal text-xs pt-1">至</span>
                <span>¥{maxPrice}</span>
              </div>
              
              {/* Custom Slider Visualization */}
              <div className="relative h-2 bg-white rounded-full mx-1">
                <div className="absolute left-0 right-0 h-full bg-tcm-primary rounded-full" style={{ left: '0%', right: '0%' }}></div>
                {/* Handles */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-6 h-6 bg-white border-2 border-tcm-primary rounded-full shadow cursor-pointer"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-6 h-6 bg-white border-2 border-tcm-primary rounded-full shadow cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-white/50 backdrop-blur-sm space-y-3 border-t border-tcm-border">
          <button className="w-full flex justify-center items-center gap-2 bg-tcm-primary text-white py-3 rounded-lg font-medium shadow-lg hover:bg-tcm-dark transition-colors">
            <Icons.Filter className="w-4 h-4" />
            筛选结果
          </button>
          <button 
            onClick={() => { setMinPrice(0); setMaxPrice(500); }}
            className="w-full flex justify-center items-center gap-2 bg-white border border-tcm-primary text-tcm-primary py-3 rounded-lg font-medium hover:bg-tcm-light transition-colors"
          >
            <Icons.Refresh className="w-4 h-4" />
            重置条件
          </button>
        </div>
      </div>
    </div>
  );
};