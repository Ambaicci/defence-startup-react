import { useState, useEffect, useRef } from 'react';

function BattlefieldSimulator() {
  const [threats, setThreats] = useState([]);
  const [interceptors, setInterceptors] = useState([]);
  const [explosions, setExplosions] = useState([]);
  const [autoMode, setAutoMode] = useState(true);
  const [stats, setStats] = useState({
    totalThreats: 0,
    activeThreats: 0,
    kills: 0,
    interceptorsFired: 0,
    interceptorsLeft: 36
  });
  
  const canvasRef = useRef(null);
  const threatsRef = useRef(threats);
  const interceptorsRef = useRef(interceptors);
  
  useEffect(() => { threatsRef.current = threats; }, [threats]);
  useEffect(() => { interceptorsRef.current = interceptors; }, [interceptors]);
  
  const EYES = [
    { id: 0, name: 'EYE-Alpha', x: 250, y: 250, interceptors: 12 },
    { id: 1, name: 'EYE-Bravo', x: 550, y: 250, interceptors: 12 },
    { id: 2, name: 'EYE-Charlie', x: 400, y: 450, interceptors: 12 }
  ];
  
  const DETECTION_RADIUS = 150;
  
  // Spawn a threat at specific coordinates (manual click)
  const spawnThreatAt = (clickX, clickY) => {
    // Find closest EYE to target
    let closestEye = EYES[0];
    let minDist = Infinity;
    EYES.forEach(eye => {
      const dist = Math.hypot(eye.x - clickX, eye.y - clickY);
      if (dist < minDist) { minDist = dist; closestEye = eye; }
    });
    
    const dx = closestEye.x - clickX;
    const dy = closestEye.y - clickY;
    const dist = Math.hypot(dx, dy);
    const speed = 1.5;
    
    const newThreat = {
      id: Math.random(),
      x: clickX, y: clickY,
      vx: (dx / dist) * speed,
      vy: (dy / dist) * speed,
      targetEye: closestEye.id,
      detected: false,
      manual: true
    };
    
    setThreats(prev => [...prev, newThreat]);
    setStats(prev => ({ ...prev, totalThreats: prev.totalThreats + 1, activeThreats: prev.activeThreats + 1 }));
  };
  
  // Spawn autonomous wave
  const spawnWave = () => {
    if (!autoMode) return;
    const numThreats = Math.floor(Math.random() * 4) + 2;
    const newThreats = [];
    
    for (let i = 0; i < numThreats; i++) {
      let x, y;
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { x = Math.random() * 800; y = 0; }
      else if (edge === 1) { x = 800; y = Math.random() * 600; }
      else if (edge === 2) { x = Math.random() * 800; y = 600; }
      else { x = 0; y = Math.random() * 600; }
      
      let closestEye = EYES[0];
      let minDist = Infinity;
      EYES.forEach(eye => {
        const dist = Math.hypot(eye.x - x, eye.y - y);
        if (dist < minDist) { minDist = dist; closestEye = eye; }
      });
      
      const dx = closestEye.x - x;
      const dy = closestEye.y - y;
      const dist = Math.hypot(dx, dy);
      const speed = 1.2;
      
      newThreats.push({
        id: Math.random(),
        x: x, y: y,
        vx: (dx / dist) * speed,
        vy: (dy / dist) * speed,
        targetEye: closestEye.id,
        detected: false,
        manual: false
      });
    }
    
    setThreats(prev => [...prev, ...newThreats]);
    setStats(prev => ({ ...prev, totalThreats: prev.totalThreats + numThreats, activeThreats: prev.activeThreats + numThreats }));
  };
  
  // Launch interceptor
  const launchInterceptor = (threat) => {
    const eye = EYES.find(e => e.id === threat.targetEye);
    if (!eye) return;
    
    setStats(prev => {
      if (prev.interceptorsLeft <= 0) return prev;
      
      setInterceptors(prevInt => [...prevInt, {
        id: Math.random(),
        threatId: threat.id,
        startX: eye.x,
        startY: eye.y,
        progress: 0
      }]);
      
      return {
        ...prev,
        interceptorsFired: prev.interceptorsFired + 1,
        interceptorsLeft: prev.interceptorsLeft - 1
      };
    });
  };
  
  // Auto wave spawner
  useEffect(() => {
    if (!autoMode) return;
    const waveInterval = setInterval(() => {
      if (stats.interceptorsLeft > 0 && stats.activeThreats < 12) {
        spawnWave();
      }
    }, 5000);
    return () => clearInterval(waveInterval);
  }, [autoMode, stats.interceptorsLeft, stats.activeThreats]);
  
  // Game loop
  useEffect(() => {
    const gameLoop = setInterval(() => {
      // Move threats and check detection
      setThreats(prev => {
        const moved = prev.map(t => ({
          ...t,
          x: t.x + t.vx,
          y: t.y + t.vy
        }));
        
        moved.forEach(t => {
          const targetEye = EYES.find(e => e.id === t.targetEye);
          if (targetEye && !t.detected) {
            const distToEye = Math.hypot(t.x - targetEye.x, t.y - targetEye.y);
            if (distToEye < DETECTION_RADIUS) {
              t.detected = true;
              launchInterceptor(t);
            }
          }
        });
        
        const remaining = moved.filter(t => {
          const targetEye = EYES.find(e => e.id === t.targetEye);
          if (targetEye) {
            const distToEye = Math.hypot(t.x - targetEye.x, t.y - targetEye.y);
            if (distToEye < 25) {
              setStats(s => ({ ...s, activeThreats: s.activeThreats - 1 }));
              return false;
            }
          }
          return true;
        });
        
        return remaining;
      });
      
      // Move interceptors and check kills
      setInterceptors(prev => {
        const updated = [];
        
        for (let interceptor of prev) {
          const target = threatsRef.current.find(t => t.id === interceptor.threatId);
          
          if (!target) continue;
          
          const eye = EYES.find(e => e.id === target.targetEye);
          if (!eye) continue;
          
          const newProgress = interceptor.progress + 0.045;
          const currentX = eye.x + (target.x - eye.x) * newProgress;
          const currentY = eye.y + (target.y - eye.y) * newProgress;
          
          const distToTarget = Math.hypot(currentX - target.x, currentY - target.y);
          
          if (distToTarget < 25 || newProgress >= 1) {
            setThreats(tlist => {
              const filtered = tlist.filter(t => t.id !== target.id);
              setStats(s => ({ ...s, kills: s.kills + 1, activeThreats: s.activeThreats - 1 }));
              return filtered;
            });
            setExplosions(prevExp => [...prevExp, { x: target.x, y: target.y, life: 1.0 }]);
          } else {
            updated.push({ ...interceptor, progress: newProgress, x: currentX, y: currentY });
          }
        }
        return updated;
      });
      
      setExplosions(prev => prev.map(e => ({ ...e, life: e.life - 0.05 })).filter(e => e.life > 0));
      
    }, 35);
    
    return () => clearInterval(gameLoop);
  }, []);
  
  // Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#0a0f1a');
      grad.addColorStop(1, '#0d1630');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = 'rgba(0,168,150,0.06)';
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
      
      const time = Date.now() / 1000;
      
      EYES.forEach(eye => {
        ctx.beginPath();
        ctx.arc(eye.x, eye.y, DETECTION_RADIUS, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0,168,150,0.25)';
        ctx.setLineDash([8, 8]);
        ctx.stroke();
        
        const sweep = (time * 1.5 + eye.id) % (Math.PI * 2);
        ctx.beginPath();
        ctx.moveTo(eye.x, eye.y);
        ctx.arc(eye.x, eye.y, DETECTION_RADIUS, sweep - 0.3, sweep);
        ctx.fillStyle = 'rgba(0,168,150,0.08)';
        ctx.fill();
        
        ctx.setLineDash([]);
        
        ctx.fillStyle = '#00a896';
        ctx.beginPath();
        ctx.moveTo(eye.x, eye.y - 22);
        ctx.lineTo(eye.x + 18, eye.y - 8);
        ctx.lineTo(eye.x + 22, eye.y);
        ctx.lineTo(eye.x + 18, eye.y + 8);
        ctx.lineTo(eye.x, eye.y + 22);
        ctx.lineTo(eye.x - 18, eye.y + 8);
        ctx.lineTo(eye.x - 22, eye.y);
        ctx.lineTo(eye.x - 18, eye.y - 8);
        ctx.fill();
        
        ctx.fillStyle = '#00d2b4';
        ctx.font = 'bold 9px monospace';
        ctx.fillText(eye.name, eye.x - 25, eye.y - 18);
      });
      
      threatsRef.current.forEach(t => {
        const detected = t.detected;
        ctx.fillStyle = detected ? '#dc3c3c' : '#8b0000';
        ctx.beginPath();
        ctx.moveTo(t.x, t.y - 9);
        ctx.lineTo(t.x + 10, t.y);
        ctx.lineTo(t.x, t.y + 9);
        ctx.lineTo(t.x - 7, t.y);
        ctx.fill();
        
        if (detected) {
          ctx.fillStyle = '#ff6b6b';
          ctx.font = '7px monospace';
          ctx.fillText('SHAHED', t.x - 16, t.y - 10);
          ctx.beginPath();
          ctx.arc(t.x, t.y, 12, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(220,60,60,0.5)';
          ctx.stroke();
        }
      });
      
      interceptorsRef.current.forEach(i => {
        if (i.x && i.y) {
          ctx.fillStyle = '#ffb932';
          ctx.beginPath();
          ctx.moveTo(i.x, i.y - 5);
          ctx.lineTo(i.x + 8, i.y);
          ctx.lineTo(i.x, i.y + 5);
          ctx.fill();
        }
      });
      
      explosions.forEach(e => {
        const size = 18 * (1 - e.life);
        ctx.beginPath();
        ctx.arc(e.x, e.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,100,0,${0.7 - e.life})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(e.x, e.y, size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,200,0,${0.8 - e.life})`;
        ctx.fill();
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
  }, [explosions]);
  
  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;
    let x = (e.clientX - rect.left) * scaleX;
    let y = (e.clientY - rect.top) * scaleY;
    x = Math.min(Math.max(x, 30), 770);
    y = Math.min(Math.max(y, 30), 570);
    spawnThreatAt(x, y);
  };
  
  const resetBattle = () => {
    setThreats([]);
    setInterceptors([]);
    setExplosions([]);
    setStats({
      totalThreats: 0,
      activeThreats: 0,
      kills: 0,
      interceptorsFired: 0,
      interceptorsLeft: 36
    });
  };
  
  return (
    <div className="battlefield-container">
      <span className="section-tag">⚔️ LIVE BATTLEFIELD SIMULATION ⚔️</span>
      <h3>Three EYE units defending against Shahed swarms</h3>
      <canvas 
        ref={canvasRef} 
        onClick={handleCanvasClick}
        style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '2px solid rgba(0,168,150,0.4)', cursor: 'crosshair' }}
      />
      <div className="battlefield-stats">
        <div className="battle-stat"><span className="battle-label">🎯 Total Threats</span><span className="battle-value">{stats.totalThreats}</span></div>
        <div className="battle-stat"><span className="battle-label">⚠️ Active</span><span className="battle-value red">{stats.activeThreats}</span></div>
        <div className="battle-stat"><span className="battle-label">💥 Kills</span><span className="battle-value teal">{stats.kills}</span></div>
        <div className="battle-stat"><span className="battle-label">🚀 Interceptors</span><span className="battle-value">{stats.interceptorsLeft}</span></div>
        <div className="battle-stat"><span className="battle-label">📊 Success Rate</span><span className="battle-value">{stats.totalThreats === 0 ? 0 : Math.round((stats.kills / stats.totalThreats) * 100)}%</span></div>
        <div className="battle-stat"><span className="battle-label">🤖 Auto Waves</span><button onClick={() => setAutoMode(!autoMode)} style={{background: autoMode ? 'var(--teal)' : '#dc3c3c', border:'none', padding:'4px 12px', borderRadius:'4px', cursor:'pointer', marginTop:'4px', color:'white'}}>{autoMode ? 'ON' : 'OFF'}</button></div>
        <div className="battle-stat"><span className="battle-label">🔄 Reset</span><button onClick={resetBattle} style={{background:'var(--teal)', border:'none', padding:'4px 12px', borderRadius:'4px', cursor:'pointer', marginTop:'4px'}}>New Battle</button></div>
      </div>
      <p className="battlefield-note">✦ CLICK anywhere on canvas to spawn a Shahed manually • Auto waves spawn every 5 seconds • AI detects and launches interceptors automatically ✦</p>
    </div>
  );
}

export default BattlefieldSimulator;
