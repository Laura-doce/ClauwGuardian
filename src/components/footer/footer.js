import './footer.css'
import whatsapp from '../../pages/img/whatsapp.png'
import instagram from '../../pages/img/instagram.png'
import ubicacion from '../../pages/img/ubicacion.png'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='row'>
                <div className='col-4'>
                    <h2>Enlaces</h2>
                    <p>__________________________________</p>
                    <ul className="me-auto mb-2 mb-lg-0nav justify-content-end enlaces">
                        <li className="nav-link " >
                            <a href='#inicio'>Inicio</a>
                        </li>
                        <li className="nav-link ">
                            <a href='#productos'>Productos</a>
                        </li>
                        <li className="nav-link "> 
                           <a href='#servicios'>Servicios</a>
                        </li>
                        <li className="nav-link " >
                            <a href='#inisesion'>Incio sesión</a>
                        </li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h2>Información</h2>
                    <p>__________________________________</p>
                    <ul className="me-auto mb-2 mb-lg-0nav justify-content-end info">
                    <li className="nav-link"> 
                           <a href='#servicios'>Terminos y Condiciones</a>
                        </li>
                        <li className="nav-link" >
                            <a href='#inisesion'>Politicas de privacidad</a>
                        </li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h2>Contacto</h2>
                    <p>__________________________________</p>
                    <ul className="me-auto mb-2 mb-lg-0nav justify-content-end ">
                    <li className="nav-link"> 
                           <a href='#'>
                            <img className='ubic' src={whatsapp} alt='#'/>
                           </a>
                        </li>
                        <li className="nav-link"> 
                           <a href='#'>
                            <img className='ubic' src={instagram} alt='#'/>
                           </a>
                        </li>
                        <li className="nav-link"> 
                           <a href='#'>
                            <img className='ubic' src={ubicacion} alt='#'/>
                           </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}