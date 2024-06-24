import { ThreeCircles } from 'react-loader-spinner';

export default function Loader(){
    return(
        <section className='p-5 vertex-container container-full d-flex align-items-center justify-content-center'>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#1663A7"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <h1 className='header-color'>Vertex</h1>
            
        </section>
    )
}