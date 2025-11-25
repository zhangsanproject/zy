import React, { useState } from 'react';
import { Icons } from './Icons';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onOpenFilter: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onOpenFilter }) => {
  const [selectedWeight, setSelectedWeight] = useState('250g');
  const [selectedCut, setSelectedCut] = useState('标准切片');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pb-24">
      {/* Navigation Header */}
      <div className="sticky top-0 z-40 bg-[#f5fbf7]/95 backdrop-blur-md px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-4 text-tcm-dark/60 text-xs">
          <Icons.Back className="w-5 h-5 text-tcm-dark" />
          <span className="truncate">首页 / 根茎类药材 / {product.title.split(' ')[0].substring(0, 2)}</span>
        </div>
        <button onClick={onOpenFilter}>
            <Icons.Menu className="w-5 h-5 text-tcm-dark" />
        </button>
      </div>

      {/* Product Gallery */}
      <div className="px-4 mt-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-sm bg-white">
            {/* Main Image placeholder with TCM aesthetic */}
            <div className="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 relative">
               <img 
                 src="https://picsum.photos/800/800?random=1" 
                 alt={product.title}
                 className="w-full h-full object-cover mix-blend-multiply opacity-90"
               />
               <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* New Badge */}
            <div className="absolute bottom-4 left-0 bg-amber-400 text-tcm-dark text-xs font-bold px-3 py-1 rounded-r-full shadow-sm">
                新品
            </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar pb-2">
            {[1,2,3,4].map((i) => (
                <div key={i} className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${i === 1 ? 'border-tcm-primary' : 'border-transparent'}`}>
                    <img src={`https://picsum.photos/200/200?random=${i+10}`} className="w-full h-full object-cover" alt="thumb"/>
                </div>
            ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-tcm-light/50">
            {/* Origin Quote */}
            <div className="bg-[#f0f9f4] p-3 rounded-lg text-xs text-tcm-dark/70 leading-relaxed mb-4 border-l-2 border-tcm-primary">
                本品产自"中国当归之乡"甘肃岷县，当地海拔高、气候适宜，所产当归品质优良，有效成分含量高，为道地药材。
            </div>

            <h1 className="text-xl font-serif font-bold text-tcm-dark mb-4 leading-snug">
                {product.title}
            </h1>

            {/* Stats Row */}
            <div className="flex items-center gap-4 mb-4 text-xs text-tcm-dark/60">
                <div className="flex text-amber-400">
                    {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <div className="pl-4 border-l border-gray-200">
                    <span className="text-tcm-primary font-bold text-sm">{product.stats.rating}</span> 分
                </div>
                <div className="pl-4 border-l border-gray-200">
                    {product.stats.count}条评价
                </div>
                <div className="pl-4 border-l border-gray-200">
                    已售 {product.stats.soldCount}件
                </div>
            </div>

            {/* Price Block */}
            <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-serif font-bold text-tcm-price">¥{product.price.toFixed(2)}</span>
                <span className="text-sm text-gray-400 line-through">¥{product.originalPrice.toFixed(2)}</span>
                {product.discountTag && (
                    <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded ml-2">
                        {product.discountTag}
                    </span>
                )}
            </div>
            <div className="text-xs text-gray-400">
                单价: ¥{product.price.toFixed(2)}/500g &nbsp; 满2件享9折，满3件享8折
            </div>
        </div>
      </div>

      {/* Specs Selection */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-medium text-tcm-dark mb-4">规格选择</h3>
            
            {/* Weight */}
            <div className="mb-6">
                <p className="text-xs text-gray-500 mb-3">重量</p>
                <div className="flex flex-wrap gap-3">
                    {['250g', '500g', '1000g'].map(w => (
                        <button
                            key={w}
                            onClick={() => setSelectedWeight(w)}
                            className={`px-6 py-2 rounded-lg text-sm transition-all border ${
                                selectedWeight === w 
                                ? 'border-tcm-primary bg-[#eef7f2] text-tcm-primary font-medium shadow-sm' 
                                : 'border-gray-200 text-gray-600'
                            }`}
                        >
                            {w}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cut Type */}
            <div className="mb-6">
                <p className="text-xs text-gray-500 mb-3">切片规格</p>
                <div className="flex flex-wrap gap-3">
                    {['标准切片', '薄片', '整根'].map(c => (
                        <button
                            key={c}
                            onClick={() => setSelectedCut(c)}
                            className={`px-6 py-2 rounded-lg text-sm transition-all border ${
                                selectedCut === c 
                                ? 'border-tcm-primary bg-[#eef7f2] text-tcm-primary font-medium shadow-sm' 
                                : 'border-gray-200 text-gray-600'
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-tcm-dark">购买数量</div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                        >
                            -
                        </button>
                        <div className="w-12 h-9 flex items-center justify-center border-l border-r border-gray-200 text-sm font-medium">
                            {quantity}
                        </div>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-10 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-right text-xs text-gray-400 mt-2">库存: {product.stock}件</div>
        </div>
      </div>
        
      {/* Origin Info */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-medium text-tcm-dark mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-amber-400 rounded-full"></span>
                产地信息
            </h3>
            <div className="flex justify-between text-sm py-1">
                <span className="text-gray-500">产地:</span>
                <span className="text-tcm-dark">{product.origin}</span>
            </div>
            <div className="flex justify-between text-sm py-1 border-t border-gray-50">
                <span className="text-gray-500">采收时间:</span>
                <span className="text-tcm-dark">{product.harvestTime}</span>
            </div>
        </div>
      </div>

      {/* Merchant Info */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-medium text-tcm-dark mb-4">商家信息</h3>
            <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-tcm-light flex items-center justify-center text-tcm-primary">
                    <Icons.Leaf className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="font-bold text-tcm-dark text-base">{product.merchant.name}</h4>
                    <div className="flex gap-2 mt-1">
                        <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded">官方认证</span>
                        <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded">逛逛逛逛</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">描述相符</div>
                    <div className="text-tcm-primary font-bold text-sm">{product.merchant.ratings.description}</div>
                    <div className="text-[10px] text-tcm-primary/70">高于同行12%</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">服务态度</div>
                    <div className="text-tcm-primary font-bold text-sm">{product.merchant.ratings.service}</div>
                    <div className="text-[10px] text-tcm-primary/70">高于同行8%</div>
                </div>
                <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">物流速度</div>
                    <div className="text-tcm-primary font-bold text-sm">{product.merchant.ratings.logistics}</div>
                    <div className="text-[10px] text-tcm-primary/70">高于同行5%</div>
                </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-gray-600 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-amber-400 rounded-full flex items-center justify-center text-[8px] text-white">✓</div>
                    中药材GAP认证
                </div>
                <div className="flex items-center gap-1">
                     <Icons.Shield className="w-3 h-3 text-amber-600" />
                    正品保障
                </div>
                <div className="flex items-center gap-1">
                     <Icons.Truck className="w-3 h-3 text-amber-600" />
                    闪电发货
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};