import {useEffect, useState} from 'react'
import { ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'
import { Model } from './components/Model';
import baffle from 'baffle';
import { Cat_model } from './components/Cat_model';


function App() {
  const [showCatModel, setShowCatModel] = useState(false);

  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░p░e░r░r░y░o░n░g░',
      speed: 200
    })
    target.start()
    target.reveal(1000,1000)
  })

  useEffect(()=> {

    const target = baffle('.aboutme')
    target.set({
      characters: '░A░b░o░u░t░ ░M░e░.',
      speed: 200
    })
    target.start()
    target.reveal(1000,1000)
  })


  
  return (
    <>
      <color attach="background" args={['#333333']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />

      <ScrollControls pages={6} damping={0.1} onScroll={(e) => setShowCatModel(e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight) >= 0.80)}>

        <Model scale={0.8}/>
        <Sparkles size={2} color={"#fff"} scale={[10,10,10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5} // Stretches the floor segment, 0.25 by default
          segments={100} // Mesh-resolution, 20 by default
          scale={[50,30,10]}
          position={[4,-10,0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>  

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
          <meshStandardMaterial color="#2a3a3f" />
        </Ring>
        </Float>              


        <Scroll html style={{width: '100%'}}>
          <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>PerryOng</h1>
          
          <div className='row' style={{ position: 'absolute', top: `132vh`}}>
            <h2 className='aboutme'>About Me.</h2>
            <p style={{ maxWidth: '500px' }}>Currently, working as an Software Engineer/ Rationalization Engineer in Murata Electronic Singapore. In addition, I am also pursuing a part-time Master's Degree in Artificial Intelligence at Nanyang Technological University(NTU). My journey in the realm of AI and machine learning blends academic rigor with practical experimentation, focusing on the intersection of advanced AI methodologies and real-world applications.</p>
            <div >
              <a href="https://perryongwq.github.io/Personal/" target="_blank" rel="noopener noreferrer" className='button'>
              <button >Click Here</button>
              </a>
              </div>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>3D Projects </h2>
              <p style={{ maxWidth: '440px' }}>Work In Progress </p>                
              <button>Read more</button>
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '450vh', left: '50%', transform: `translate(-50%,-50%)` }}>努力は誰も裏切らないが、夢は多くの人を裏切る。 </h2>              
          <div>
          <a href="https://www.linkedin.com/in/wen-qing-ong/" target="_blank" rel="noopener noreferrer" className='button'>
            <button style={{ position: 'absolute', top: `50vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Contact Me</button>
            </a>
          </div>
          
        </Scroll>
        
        {showCatModel && <Cat_model scale={0.3} position={[0, 10, 0]} />}


      </ScrollControls>
    </>
  );
}

export default App;
