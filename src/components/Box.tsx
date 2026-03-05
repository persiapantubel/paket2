// Komponen Box - Kotak dengan 5 shape (center + 4 sudut)
import { Shape, type ShapeItem } from './Shape';

export interface BoxData {
  center: ShapeItem;
  tl: ShapeItem;  // top-left
  tr: ShapeItem;  // top-right
  bl: ShapeItem;  // bottom-left
  br: ShapeItem;  // bottom-right
}

interface BoxProps {
  data?: BoxData;
  isQuestionMark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  label?: string;
  onClick?: () => void;
}

export const Box = ({ 
  data, 
  isQuestionMark = false, 
  size = 'md',
  isSelected = false,
  isCorrect = false,
  isWrong = false,
  label,
  onClick
}: BoxProps) => {
  
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
    lg: 'w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40'
  };

  const cornerSizes = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5 md:w-6 md:h-6',
    lg: 'w-6 h-6 md:w-7 md:h-7'
  };

  const centerSizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14',
    lg: 'w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18'
  };

  const getBorderClass = () => {
    if (isCorrect) return 'border-green-500 bg-green-50 shadow-lg shadow-green-200';
    if (isWrong) return 'border-red-500 bg-red-50 shadow-lg shadow-red-200';
    if (isSelected) return 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-200';
    return 'border-black bg-white hover:border-blue-400';
  };

  return (
    <div className="flex flex-col items-center">
      {label && (
        <span className={`font-extrabold text-lg mb-2 transition-colors ${
          isSelected ? 'text-blue-600' : 'text-gray-700'
        }`}>
          {label}
        </span>
      )}
      
      <div 
        className={`p-1 border-[2px] transition-all duration-200 cursor-pointer ${
          onClick ? 'hover:-translate-y-1' : ''
        } ${getBorderClass()}`}
        onClick={onClick}
      >
        <div className={`${sizeClasses[size]} relative border border-gray-200 bg-white`}>
          {isQuestionMark ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-extrabold text-gray-800">?</span>
            </div>
          ) : data ? (
            <>
              {/* Sudut Kiri Atas */}
              <div className={`absolute top-1 left-1 ${cornerSizes[size]}`}>
                <Shape item={data.tl} />
              </div>
              {/* Sudut Kanan Atas */}
              <div className={`absolute top-1 right-1 ${cornerSizes[size]}`}>
                <Shape item={data.tr} />
              </div>
              {/* Sudut Kiri Bawah */}
              <div className={`absolute bottom-1 left-1 ${cornerSizes[size]}`}>
                <Shape item={data.bl} />
              </div>
              {/* Sudut Kanan Bawah */}
              <div className={`absolute bottom-1 right-1 ${cornerSizes[size]}`}>
                <Shape item={data.br} />
              </div>
              {/* Pusat (Tengah) */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${centerSizes[size]}`}>
                <Shape item={data.center} />
              </div>
            </>
          ) : null}
        </div>
      </div>
      
      {/* Status indicator */}
      {(isCorrect || isWrong) && (
        <div className="h-6 mt-2 font-bold text-sm">
          {isCorrect && <span className="text-green-600">✓ Benar!</span>}
          {isWrong && <span className="text-red-500">✗ Salah</span>}
        </div>
      )}
    </div>
  );
};

export default Box;
