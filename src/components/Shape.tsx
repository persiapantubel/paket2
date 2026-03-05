// Komponen Shape - Menggambar bentuk geometris dengan SVG
export interface ShapeItem {
  t: string;      // type: segi3, segi4, square, segi5, segi6, segi7, segi8, diamond, star, circle
  f: boolean;     // filled: true = hitam, false = putih
  dots?: number;  // jumlah titik di tengah (1-5)
  inT?: string;   // inner shape type
  inF?: boolean;  // inner shape filled
}

interface ShapeProps {
  item: ShapeItem | null;
}

// Generate polygon points untuk setiap bentuk
const getShapePoints = (type: string): string => {
  switch(type) {
    case 'segi3': return "50,15 85,85 15,85";
    case 'square': 
    case 'segi4': return "20,20 80,20 80,80 20,80";
    case 'segi5': return "50,10 88,38 73,85 27,85 12,38";
    case 'segi6': return "50,10 85,30 85,70 50,90 15,70 15,30";
    case 'segi7': return "50,10 81,29 89,67 67,89 33,89 11,67 19,29";
    case 'segi8': return "30,10 70,10 92,30 92,70 70,92 30,92 8,70 8,30";
    case 'diamond': return "50,10 90,50 50,90 10,50";
    case 'star': return "50,5 64,34 95,34 70,53 80,84 50,65 20,84 30,53 5,34 36,34";
    default: return "";
  }
};

export const Shape = ({ item }: ShapeProps) => {
  if (!item) return null;
  
  const { t, f, dots, inT, inF } = item;
  
  // Warna dasar: f=true = hitam, f=false = putih
  const fillStyle = f ? "#000000" : "#ffffff";
  const strokeStyle = "#000000";
  const strokeWidth = 3;
  
  const renderBaseShape = (type: string, fill: string, stroke: string, width: number) => {
    if (type === 'circle') {
      return (
        <circle 
          cx="50" 
          cy="50" 
          r="38" 
          fill={fill} 
          stroke={stroke} 
          strokeWidth={width} 
        />
      );
    }
    return (
      <polygon 
        points={getShapePoints(type)} 
        fill={fill} 
        stroke={stroke} 
        strokeWidth={width} 
        strokeLinejoin="round" 
      />
    );
  };

  const renderInnerShape = () => {
    if (!inT) return null;
    const iFill = inF ? "#000000" : "#ffffff";
    const iStroke = inF ? "transparent" : "#000000";
    const iWidth = inF ? 0 : 2;
    
    return (
      <g transform="translate(25, 25) scale(0.5)">
        {renderBaseShape(inT, iFill, iStroke, iWidth)}
      </g>
    );
  };

  const renderDots = () => {
    if (!dots) return null;
    const dotCoords: Record<number, number[][]> = {
      1: [[50, 50]],
      2: [[35, 50], [65, 50]],
      3: [[50, 35], [35, 60], [65, 60]],
      4: [[35, 35], [65, 35], [35, 65], [65, 65]],
      5: [[50, 30], [30, 45], [70, 45], [40, 70], [60, 70]]
    };
    
    const coords = dotCoords[dots] || [];
    return coords.map((pos, i) => (
      <circle key={i} cx={pos[0]} cy={pos[1]} r="5" fill="#000000" />
    ));
  };

  return (
    <svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.1))' }}
    >
      {renderBaseShape(t, fillStyle, strokeStyle, strokeWidth)}
      {renderInnerShape()}
      {renderDots()}
    </svg>
  );
};

export default Shape;
