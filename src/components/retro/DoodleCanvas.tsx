'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Pencil, Eraser, Trash2, X, ChevronUp } from 'lucide-react';

const COLORS = [
  '#d351f7', // purple (portfolio accent)
  '#df7a3e', // orange (portfolio accent)
  '#22241a', // near-black
  '#e63946', // red
  '#457b9d', // blue
  '#2a9d8f', // teal
  '#f4d03f', // yellow
  '#ffffff', // white
];

const BRUSH_SIZES = [3, 6, 12, 20];

export function DoodleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawMode, setDrawMode] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState(COLORS[0]);
  const [brushSize, setBrushSize] = useState(BRUSH_SIZES[1]);
  const [showToolbar, setShowToolbar] = useState(true);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  // Resize canvas to match window
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Save current drawing
    const ctx = canvas.getContext('2d');
    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;
    // Restore drawing
    if (imageData) ctx?.putImageData(imageData, 0, 0);
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top + window.scrollY,
      };
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top + window.scrollY,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!drawMode) return;
    e.preventDefault();
    setIsDrawing(true);
    const pos = getPos(e);
    lastPos.current = pos;

    // Draw a dot on click
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, (tool === 'eraser' ? brushSize * 2 : brushSize) / 2, 0, Math.PI * 2);
    ctx.fillStyle = tool === 'eraser' ? 'rgba(0,0,0,1)' : color;
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.globalCompositeOperation = 'source-over';
    }
    ctx.fill();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !drawMode) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !lastPos.current) return;

    const pos = getPos(e);

    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = tool === 'eraser' ? brushSize * 3 : brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.globalCompositeOperation = 'source-over';
    }
    ctx.stroke();

    lastPos.current = pos;
  };

  const stopDraw = () => {
    setIsDrawing(false);
    lastPos.current = null;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) ctx.globalCompositeOperation = 'source-over';
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const toggleDrawMode = () => {
    setDrawMode((prev) => !prev);
    setShowToolbar(true);
  };

  return (
    <>
      {/* The Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-[200]"
        style={{
          pointerEvents: drawMode ? 'auto' : 'none',
          cursor: drawMode
            ? tool === 'eraser'
              ? 'cell'
              : 'crosshair'
            : 'none',
        }}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={stopDraw}
      />

      {/* Floating Toggle Button */}
      <button
        onClick={toggleDrawMode}
        title={drawMode ? 'Exit draw mode' : 'Enter draw mode'}
        className={`fixed bottom-[90px] right-[20px] z-[210] w-[52px] h-[52px] rounded-full border-[2px] border-[#22241a] flex items-center justify-center shadow-[3px_3px_0_rgba(0,0,0,1)] transition-all duration-200 ${
          drawMode
            ? 'bg-[#d351f7] text-white'
            : 'bg-[#fdf9f1] text-[#22241a] hover:bg-[#d351f7] hover:text-white'
        }`}
      >
        {drawMode ? <X size={22} /> : <Pencil size={22} />}
      </button>

      {/* Toolbar — only visible in draw mode */}
      {drawMode && (
        <div
          className={`fixed bottom-[155px] right-[14px] z-[210] bg-[#fdf9f1] border-[2px] border-[#22241a] rounded-[16px] shadow-[4px_4px_0_rgba(0,0,0,1)] p-[12px] flex flex-col items-center gap-[10px] transition-all duration-300 ${
            showToolbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Collapse toggle */}
          <button
            onClick={() => setShowToolbar((v) => !v)}
            className="text-[#6b6a56] hover:text-[#22241a]"
            title="Collapse toolbar"
          >
            <ChevronUp size={16} className={`transition-transform ${showToolbar ? '' : 'rotate-180'}`} />
          </button>

          {/* Tool selector */}
          <div className="flex gap-[6px]">
            <button
              onClick={() => setTool('pen')}
              title="Pen"
              className={`w-[34px] h-[34px] rounded-[8px] border-[2px] border-[#22241a] flex items-center justify-center transition-colors ${
                tool === 'pen' ? 'bg-[#d351f7] text-white' : 'bg-white text-[#22241a] hover:bg-[#f0e0ff]'
              }`}
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={() => setTool('eraser')}
              title="Eraser"
              className={`w-[34px] h-[34px] rounded-[8px] border-[2px] border-[#22241a] flex items-center justify-center transition-colors ${
                tool === 'eraser' ? 'bg-[#df7a3e] text-white' : 'bg-white text-[#22241a] hover:bg-[#fde8d8]'
              }`}
            >
              <Eraser size={16} />
            </button>
          </div>

          {/* Color palette */}
          <div className="flex flex-col gap-[5px]">
            {COLORS.map((c) => (
              <button
                key={c}
                onClick={() => { setColor(c); setTool('pen'); }}
                title={c}
                className={`w-[24px] h-[24px] rounded-full border-[2px] transition-transform hover:scale-110 ${
                  color === c && tool === 'pen' ? 'border-[#22241a] scale-125' : 'border-[#22241a]/40'
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          {/* Brush size */}
          <div className="flex flex-col gap-[5px] items-center">
            {BRUSH_SIZES.map((s) => (
              <button
                key={s}
                onClick={() => setBrushSize(s)}
                title={`Size ${s}`}
                className={`rounded-full bg-[#22241a] transition-all ${
                  brushSize === s ? 'opacity-100 ring-2 ring-[#d351f7] ring-offset-1' : 'opacity-30 hover:opacity-60'
                }`}
                style={{ width: s + 6, height: s + 6 }}
              />
            ))}
          </div>

          {/* Clear button */}
          <button
            onClick={clearCanvas}
            title="Clear all"
            className="w-[34px] h-[34px] rounded-[8px] border-[2px] border-[#22241a] flex items-center justify-center bg-white text-[#e63946] hover:bg-[#ffe0e0] transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}
    </>
  );
}
