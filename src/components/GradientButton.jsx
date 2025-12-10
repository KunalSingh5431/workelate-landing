import { Button } from 'antd';

const GradientButton = ({ children, style, ...props }) => (
  <Button
    {...props}
    style={{
      background: 'linear-gradient(90deg, #6f00ff, #00d4ff)',
      border: 'none',
      color: '#fff',
      fontWeight: 'bold',
      borderRadius: 8,
      boxShadow: '0 0 12px rgba(0,0,0,0.3)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      ...style,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.6)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 0 12px rgba(0,0,0,0.3)';
    }}
  >
    {children}
  </Button>
);

export default GradientButton;
