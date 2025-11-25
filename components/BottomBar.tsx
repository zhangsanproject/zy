import React from 'react';
import { Icons } from './Icons';

export const BottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 px-4 pb-6 safe-area-bottom z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex gap-3">
        {/* Cart Icon */}
        <button className="flex flex-col items-center justify-center w-14 text-gray-500 space-y-1">
          <Icons.Cart className="w-5 h-5" />
          <span className="text-[10px]">购物车</span>
        </button>

        <div className="flex-1 flex gap-3">
          <button className="flex-1 bg-tcm-dark text-white rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors shadow-lg shadow-tcm-dark/20">
            <Icons.Cart className="w-4 h-4" />
            加入购物车
          </button>
          <button className="flex-1 bg-amber-400 text-tcm-dark rounded-lg py-2.5 text-sm font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors shadow-lg shadow-amber-400/20">
            <Icons.Lightning className="w-4 h-4" />
            立即购买
          </button>
        </div>
      </div>
    </div>
  );
};