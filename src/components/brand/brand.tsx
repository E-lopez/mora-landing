const Brand = ({ animated }: { animated: boolean }) => 
  <h1 className="brand blue">
    m<span className="paragraph paragraph--xxl orange">
      <i 
        className='bi bi-virus2'
        style={{
          animation: animated ? 'heartbeat 3s ease-in-out infinite' : 'none',
          transformOrigin: 'center',
          display: 'inline-block',
          transform: 'scale(1)',
          zIndex: 10
        }}>
      </i>
    </span>ra
  </h1>

export default Brand;
