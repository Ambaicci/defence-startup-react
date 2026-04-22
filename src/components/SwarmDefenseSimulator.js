import { useState, useEffect, useRef } from 'react';

function SwarmDefenseSimulator() {
  const [threats, setThreats] = useState([]);
  const [interceptors, setInterceptors] = useState([]);
  const [interceptorCount, setInterceptorCount] = useState(12);
  const [kills, setKills] = useState(0);
  const [detections, setDetections] = useState(0);
  const canvasRef = useRef(null);
  
  const EYE_X = 400;
  const EYE_Y = 300;
  const DETECTION_RADIUS = 180;

  // Spawn a threat at click position
  const spawnThreat = (clickX, clickY) => {
    // Calculate direction toward EYE
    const dx = EYE_X - clickX;
    const dy = EYE_Y - clickY;
    const dist = Math.hypot(dx, dy);
    const speed = 1.8;
    const vx = (dx / dist) * speed;
    const vy = (dy / dist) * speed;
    
    setThreats(prev => [...prev, {
      id: Math.random(),
      x: clickX,
      y: clickY,
      vx: vx,
      vy: vy,
      detected: false
    }]);
  };

  // Launch interceptor at a specific threat
  const launchInterceptor = (threatId, threatX, threatY) => {
    setInterceptorCount(prev => {
      if (prev <= 0) return prev;
      
      setInterceptors(prevInt => [...prevInt, {
        id: Math.random(),
        threatId: threatId,
        x: EYE_X,
        y: EYE_Y,
        targetX: threatX,
        targetY: threatY,
        progress: 0
      }]);
      
      return prev - 1;
    });
  };

  // Game loop - update positions and check collisions
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Move threats
      setThreats(prevThreats => {
        const movedThreats = prevThreats.map(t => ({
          ...t,
          x: t.x + t.vx,
          y: t.y + t.vy
        }));
        
        // Check detection and auto-launch
        movedThreats.forEach(t => {
          const distToEye = Math.hypot(t.x - EYE_X, t.y - EYE_Y);
          if (distToEye < DETECTION_RADIUS && !t.detected) {
            t.detected = true;
            setDetections(d => d + 1);
            launchInterceptor(t.id, t.x, t.y);
          }
        });
        
        // Remove threats that reached EYE
        return movedThreats.filter(t => Math.hypot(t.x - EYE_X, t.y - EYE_Y) > 20);
      });
      
      // 2. Move interceptors and check kills
      setInterceptors(prevInterceptors => {
        const newInterceptors = [];
        
        for (let i of prevInterceptors) {
          // Find the target threat
          const target = threats.find(t => t.id === i.threatId);
          
          if (!target) {
            // Target already destroyed, remove this interceptor
            continue;
          }
          
          // Update interceptor position toward target
          const newProgress = i.progress + 0.04;
          const ix = EYE_X + (target.x - EYE_X) * newProgress;
          const iy = EYE_Y + (target.y - EYE_Y) * newProgress;
          
          // Check if interceptor reached target
          const distToTarget = Math.hypot(ix - target.x, iy - target.y);
          
          if (distToTarget < 15 || newProgress >= 1) {
            // KILL! Remove the threat
            setThreats(prev => prev.filter(t => t.id !== target.id));
            setKills(k => k + 1);
            // Don't add this interceptor to new list (it's expended)
          } else {
            // Interceptor still in flight
            newInterceptors.push({
              ...i,
              progress: newProgress,
              x: ix,
              y: iy
            });
          }
        }
        
        return newInterceptors;
      });
      
    }, 30); // ~33 fps
    
    return () => clearInterval(interval);
  }, [threats]);

  // Drawing on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    
    let animationId;
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background
      ctx.fillStyle = '#0d1630';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Grid
      ctx.strokeStyle = 'rgba(0,168,150,0.08)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }
      
      // Detection range ring
      ctx.beginPath();
      ctx.arc(EYE_X, EYE_Y, DETECTION_RADIUS, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,168,150,0.4)';
      ctx.setLineDash([10, 10]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Radar sweep animation
      const time = Date.now() / 1000;
      const sweepAngle = (time * 2) % (Math.PI * 2);
      ctx.beginPath();
      ctx.moveTo(EYE_X, EYE_Y);
      ctx.arc(EYE_X, EYE_Y, DETECTION_RADIUS, sweepAngle - 0.2, sweepAngle);
      ctx.fillStyle = 'rgba(0,168,150,0.1)';
      ctx.fill();
      
      // Draw EYE Mother Drone
      ctx.fillStyle = '#00a896';
      ctx.beginPath();
      ctx.moveTo(EYE_X, EYE_Y - 25);
      ctx.lineTo(EYE_X + 20, EYE_Y - 10);
      ctx.lineTo(EYE_X + 25, EYE_Y);
      ctx.lineTo(EYE_X + 20, EYE_Y + 10);
      ctx.lineTo(EYE_X, EYE_Y + 25);
      ctx.lineTo(EYE_X - 20, EYE_Y + 10);
      ctx.lineTo(EYE_X - 25, EYE_Y);
      ctx.lineTo(EYE_X - 20, EYE_Y - 10);
      ctx.fill();
      ctx.fillStyle = '#00d2b4';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('EYE', EYE_X - 10, EYE_Y + 4);
      
      // Draw threats
      threats.forEach(t => {
        const detected = Math.hypot(t.x - EYE_X, t.y - EYE_Y) < DETECTION_RADIUS;
        ctx.fillStyle = detected ? '#dc3c3c' : '#8b0000';
        ctx.beginPath();
        ctx.moveTo(t.x, t.y - 10);
        ctx.lineTo(t.x + 12, t.y);
        ctx.lineTo(t.x, t.y + 10);
        ctx.lineTo(t.x - 8, t.y);
        ctx.fill();
        
        if (detected) {
          ctx.fillStyle = '#ff6b6b';
          ctx.font = '8px monospace';
          ctx.fillText('SHAHED', t.x - 18, t.y - 12);
          
          // Lock ring
          ctx.beginPath();
          ctx.arc(t.x, t.y, 15, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(220,60,60,0.6)';
          ctx.stroke();
        }
      });
      
      // Draw interceptors (baby drones)
      interceptors.forEach(i => {
        ctx.fillStyle = '#ffb932';
        ctx.beginPath();
        ctx.moveTo(i.x, i.y - 6);
        ctx.lineTo(i.x + 10, i.y);
        ctx.lineTo(i.x, i.y + 6);
        ctx.fill();
        
        // Trail
        ctx.beginPath();
        ctx.moveTo(EYE_X, EYE_Y);
        ctx.lineTo(i.x, i.y);
        ctx.strokeStyle = 'rgba(255,185,50,0.3)';
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      });
      
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [threats, interceptors]);

  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    let x = (e.clientX - rect.left) * scaleX;
    let y = (e.clientY - rect.top) * scaleY;
    
    x = Math.min(Math.max(x, 50), 750);
    y = Math.min(Math.max(y, 50), 550);
    
    spawnThreat(x, y);
  };

  const resetSimulation = () => {
    setThreats([]);
    setInterceptors([]);
    setInterceptorCount(12);
    setKills(0);
    setDetections(0);
  };

  return (
    <div className="simulator-container">
      <span className="section-tag">Interactive Demo</span>
      <h3>⚡ Swarm Defense Simulator — Click to spawn Shahed threats ⚡</h3>
      <canvas 
        ref={canvasRef} 
        onClick={handleCanvasClick}
        style={{ width: '100%', height: 'auto', borderRadius: '8px', cursor: 'crosshair', border: '2px solid rgba(0,168,150,0.3)' }}
      />
      <div className="simulator-stats">
        <div className="sim-stat"><span className="sim-label">🎯 Detected</span><span className="sim-value">{detections}</span></div>
        <div className="sim-stat"><span className="sim-label">🚀 Interceptors</span><span className="sim-value">{interceptorCount}</span></div>
        <div className="sim-stat"><span className="sim-label">💥 Kills</span><span className="sim-value">{kills}</span></div>
        <div className="sim-stat"><span className="sim-label">🔄 Reset</span><button onClick={resetSimulation} style={{background:'var(--teal)', border:'none', padding:'5px 12px', borderRadius:'4px', cursor:'pointer', marginTop:'4px'}}>Reset</button></div>
      </div>
      <p className="simulator-note">✦ CLICK on canvas → Spawn Shahed → EYE detects → Launches interceptor → Watch the intercept! ✦</p>
    </div>
  );
}

export default SwarmDefenseSimulator;
