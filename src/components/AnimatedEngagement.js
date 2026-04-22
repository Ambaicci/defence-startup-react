import { useEffect, useRef } from 'react';

function AnimatedEngagement() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    // Set canvas dimensions
    canvas.width = 800;
    canvas.height = 400;

    const draw = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background
      ctx.fillStyle = '#0d1630';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Grid lines
      ctx.strokeStyle = 'rgba(0,168,150,0.1)';
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
      
      // EYE Mother Drone (center-left)
      const eyeX = 150;
      const eyeY = 200;
      
      // Radar waves from EYE
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 40 + Math.sin(time * 3) * 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,168,150,0.3)';
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 60 + Math.sin(time * 2) * 8, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw EYE
      ctx.fillStyle = '#00a896';
      ctx.beginPath();
      ctx.moveTo(eyeX, eyeY - 20);
      ctx.lineTo(eyeX + 15, eyeY - 10);
      ctx.lineTo(eyeX + 20, eyeY);
      ctx.lineTo(eyeX + 15, eyeY + 10);
      ctx.lineTo(eyeX, eyeY + 20);
      ctx.lineTo(eyeX - 15, eyeY + 10);
      ctx.lineTo(eyeX - 20, eyeY);
      ctx.lineTo(eyeX - 15, eyeY - 10);
      ctx.fill();
      ctx.fillStyle = '#00d2b4';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('EYE', eyeX - 12, eyeY + 4);
      
      // Threat (Shahed) - moving from right to left
      const threatX = canvas.width - 80 - (time * 30) % (canvas.width - 200);
      const threatY = 200 + Math.sin(time * 2) * 15;
      
      ctx.fillStyle = '#dc3c3c';
      ctx.beginPath();
      ctx.moveTo(threatX, threatY - 12);
      ctx.lineTo(threatX + 15, threatY);
      ctx.lineTo(threatX, threatY + 12);
      ctx.lineTo(threatX - 8, threatY);
      ctx.fill();
      ctx.fillStyle = '#ff6b6b';
      ctx.font = '10px monospace';
      ctx.fillText('Threat', threatX - 20, threatY - 10);
      
      // Interceptor (launched from EYE)
      const interceptX = eyeX + (time * 40);
      if (interceptX < threatX - 20) {
        ctx.fillStyle = '#ffb932';
        ctx.beginPath();
        ctx.moveTo(interceptX, eyeY - 6);
        ctx.lineTo(interceptX + 12, eyeY);
        ctx.lineTo(interceptX, eyeY + 6);
        ctx.fill();
      }
      
      // Intercept trajectory line
      ctx.beginPath();
      ctx.moveTo(eyeX + 20, eyeY);
      ctx.lineTo(threatX - 15, threatY);
      ctx.strokeStyle = 'rgba(255,185,50,0.4)';
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Detection range arc
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 180, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,168,150,0.15)';
      ctx.stroke();
      
      // Labels
      ctx.fillStyle = '#5a6478';
      ctx.font = '10px monospace';
      ctx.fillText('Detection Range: 30km', eyeX - 60, eyeY - 50);
      ctx.fillText('Closing Speed: 505 km/h', canvas.width - 150, 30);
      ctx.fillText('Intercept Time: ~8 min', canvas.width - 150, 50);
      
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="animated-diagram">
      <span className="section-tag">Live Engagement Simulation</span>
      <h3>Real-time intercept visualization</h3>
      <canvas ref={canvasRef} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <p className="diagram-caption">✦ EYE detects threat → Launches interceptor → Kinetic intercept ✦</p>
    </div>
  );
}

export default AnimatedEngagement;
