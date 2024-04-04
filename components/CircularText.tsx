import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CircularText = () => {
  const [outerCoordinates, setOuterCoordinates] = useState<
    { x: number; y: number }[]
  >([]);
  const [innerCoordinates, setInnerCoordinates] = useState<
    { x: number; y: number }[]
  >([]);
  const outerCharacters = "SOFTWARE DEVELOPER • REACT DEVELOPER • ";
  const innerCharacters = "YEARS OF EXPERIENCE ";
  const outerRadius = 60;
  const innerRadius = 30;
  const center = { x: 60, y: 60 };

  useEffect(() => {
    const calculateCoordinates = (characters: string, radius: number) => {
      const numPoints = characters.length;
      const space = 2;
      const points = [];

      for (let i = 0; i < numPoints; i++) {
        const angle = (Math.PI * 2 * i) / numPoints;
        const x = center.x + (radius + space) * Math.cos(angle);
        const y = center.y + (radius + space) * Math.sin(angle);
        points.push({ x, y });
      }

      return points;
    };

    const outerCoords = calculateCoordinates(outerCharacters, outerRadius);
    const innerCoords = calculateCoordinates(innerCharacters, innerRadius);

    setOuterCoordinates(outerCoords);
    setInnerCoordinates(innerCoords);
  }, [center.x, center.y]);

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className="fixed bottom-6 z-[10] left-6 w-[120px] h-[120px]"
    >
      {outerCoordinates.map((point, index) => (
        <div
          key={index}
          className="absolute text-blue-600 text-[11px] text-center"
          style={{
            top: `${point.y}px`,
            left: `${point.x}px`,
            transform: `translate(-50%, -50%) rotate(${
              index <= outerCharacters.length / 2 ? 180 : 0
            }deg)`,
          }}
        >
          {outerCharacters[index]}
        </div>
      ))}
      {innerCoordinates.map((point, index) => (
        <div
          key={index}
          className="absolute text-blue-500 text-[11px] text-center"
          style={{
            top: `${point.y}px`,
            left: `${point.x}px`,
            transform: `translate(-50%, -50%) rotate(${
              index <= innerCharacters.length / 2 ? 180 : 0
            }deg)`,
          }}
        >
          {innerCharacters[index]}
        </div>
      ))}
      <motion.span
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute inset-0 text-[#55e6a5] text-2xl flex justify-center items-center"
      >
        5
      </motion.span>
    </motion.div>
  );
};

export default CircularText;
