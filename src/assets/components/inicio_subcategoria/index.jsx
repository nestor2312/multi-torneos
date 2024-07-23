/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
// import "./index.css"

const Inicio = ({ torneo }) => {
  const {  categoriaId, subcategoriaId } = useParams();

  // Busca la categoría y subcategoría dentro del torneo
  const categoria = torneo.categorias.find((cat) => cat.id === categoriaId);
  if (!categoria) {
    return <div>Categoría no encontrada</div>;
  }

  const subcategoria = categoria.subcategorias.find(
    (subcat) => subcat.id === subcategoriaId
  );
  if (!subcategoria) {
    return <div>Subcategoría no encontrada</div>;
  }

  // Extraer el primer grupo de la subcategoría
  const grupo = subcategoria.grupos[0];
  const partidos = grupo.equipos.flatMap(equipo => equipo.partidos);
  const equipos = grupo.equipos;
  const clasificacion = grupo.clasificacion;

  return (
    <section className="Subcategoria">
      <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6 mt-4">
        <div className="card border-0 shadow ">
          <div className="card-header fondo-card TITULO border-0">Clasificacion</div>
          <div className="card table-responsive border-0 table-sm">         
            <table className="table-borderless">  
              <thead> 
              <tr>
              <th></th>
                <th></th>
                <th></th>
                <th className="movil titulo2">pj</th>
                <th className="movil titulo2">pg</th>
                <th className="movil titulo2">pe</th>
                <th className="movil titulo2">pp</th>
                <th className="movil titulo2">gf</th>
                <th className="movil titulo2 hiden">gc</th>
                <th className="movil titulo2">pts</th> 
              </tr>
              </thead> 
              <tbody>
              {clasificacion.map((datos_clasificacion) => (
                    <tr key={datos_clasificacion.id}>
                      <td></td>
                      <td>
                        {/* <img src={ss} width="5%" className="logo"> */}
                      </td>
                      <td className="movil data text-left team">{datos_clasificacion.equipo}</td>
                      <td className="movil data">{datos_clasificacion.partidos_jugados}</td>
                                        <td className="movil data">{datos_clasificacion.victorias}</td>
                                        <td className="movil data">{datos_clasificacion.empates}</td>
                                        <td className="movil data">{datos_clasificacion.derrotas}</td>
                                        <td className="movil data">{datos_clasificacion.goles_a_favor}</td>
                                        <td className="movil data">{datos_clasificacion.goles_diferencia}</td>

                                        <td className="movil data">{datos_clasificacion.goles_en_contra}</td>
                                        <td className="movil data">{datos_clasificacion.puntos}</td>
                    </tr>
                  ))}      
              </tbody> 
            </table>
          </div>
          {/* {{-- <button class="botonUno btn-block" ><span><a href="matches" class="matches">ver Clasificacion</a></span></button>     --}} */}
        </div>
      </div>
      <div className="col-sm-12 col-md-6 mt-4">
        <div className="card border-0 shadow">
          <div className="card-header fondo-card TITULO border-0">Partidos</div>
          <div className="card table-responsive border-0 table-sm">         
            <table className="table-borderless">
              <thead>
                  <tr>
                     
                      <th className="titulo2 text-left">Local</th>
                     
                    
                      <th className="titulo2 text-right">Visitante</th>
                     
                  </tr>
              </thead>
              <tbody>
             
                   
              
         
               {partidos.slice(0, 5).map(partido => (
                  <tr key={partido.id}>
                    
                      <td className="text-left team" > {partido.local}</td>
                      <td className=" data"> {partido.marcador}</td>
                      <td className="text-right team" >{partido.oponente}</td>
                    
                  </tr>
                ))}
              </tbody>
          </table>  
          </div>
        </div>
        {/* {{-- <button class="botonUno btn-block" ><span><a href="matches" class="matches">ver mas partidos</a></span></button>    --}} */}
      </div>
      <div className="col-12 col-sm-12 col-md-12 mt-4">
        <div className="card border-0 shadow ">
          <div className="card-header fondo-card TITULO border-0">Equipos</div>
          <div className="card-body">
          <div className="row justify-content-around " >
                {equipos.map(equipo => (
              <div className="team-item " key={equipo.id}>
                  <div className="inner-card  d-flex flex-wrap align-content-end justify-content-center">
                    <div> 
                      {/* <img src="{{ url('imagenes').'/'.$equipo->imagen }}" width="50%" className="d-block mx-auto my-3 logomovil" alt="{{ $equipo->nombre }}"> */}
                      <h6 className="text-center team">{equipo.nombre}</h6>
                    </div>
                  </div>
              </div> 
            ))}
            </div> 
          </div>
        </div>
      </div>
      {/* <div className="col-sm-12 col-md-12 mt-4">
        <div className="card mt-2 border-0 shadow">
          <div className="card-header fondo-card TITULO border-0">Eliminatorias</div>
            <div className="titulos">
              <div className="titulo"  >Cuartos</div>
              <div className="titulo" >Semis</div>
              <div className="titulo" >Final</div>
              <div className="titulo" >Campeón</div>
            </div>
          <div>
            <div className="esquema">
              <div className="jornada_contenedor">
                  {{--cuartos --}}       
    
     @foreach ($eliminatoriasCuartos as $partido)
        <div className="partido">
            <div className="jornada">
                <div className="jugador {{ $partido->marcador1 > $partido->marcador2 ? 'win' : '' }}">  
                    @if ($partido->equipoA) {{-- Si el id existe muestra los datos: imagen, nombre y marcador  --}}
                        <img src="{{ url('imagenes').'/'.$partido->equipoA->imagen }}" className="logo" alt="sin imagen">            
                        <span className="equipo">{{$partido->equipoA->nombre}}</span>
                        <span className="goles">{{$partido->marcador1}}</span>   
                    @else {{-- Si el id es null entonces muestra tu mensaje --}}
                    <p>Por definir</p>  
                    @endif
                </div>                                                                                                                                            
                <div className="jugador {{ $partido->marcador2 > $partido->marcador1 ? 'win' : '' }}">
                    @if ($partido->equipoB)
                        <img src="{{ url('imagenes').'/'.$partido->equipoB->imagen }}" className="logo" alt="sin imagen">               
                        <span className="equipo">{{$partido->equipoB->nombre}}</span>
                        <span className="goles">{{$partido->marcador2}}</span>  
                    @else
                    <p>Por definir</p>  
                    @endif
                </div>
            </div>                  
        </div>
    @endforeach 
              </div>  
              {{-- Conectores de octavos a cuartos --}}
              <div className="conectores">
                  <div className="conector">
                      <div className="conector_doble"></div>
                      <div className="conector_simple"></div> 
                  </div>       
          
                  <div className="conector">
                      <div className="conector_doble"></div>
                      <div className="conector_simple"></div> 
                  </div>
          
                  <div className="conector">
                      <div className="conector_doble"></div>
                      <div className="conector_simple"></div> 
                  </div>
          
                  <div className="conector">
                      <div className="conector_doble"></div>
                      <div className="conector_simple"></div> 
                  </div>
              </div>
          
              {{--cuartos --}}
    
              <div className="jornada_contenedor">
                @foreach ($eliminatoriasSemis as $partido)  
                <div className="jornada">   
                    <div className=" jugador {{ $partido->marcador1 > $partido->marcador2 ? 'win' : '' }}">  
                        @if ($partido->equipoA)
                        <img src="{{ url('imagenes').'/'.$partido->equipoA->imagen }}" className="logo" alt="sin imagen">               
                            <span className="equipo">{{$partido->equipoA->nombre}}</span>
                            <span className="goles">{{$partido->marcador1}}</span>     
                            @else {{-- Si el id es null entonces muestra tu mensaje --}}                                             
                            <p>Por definir</p>  
                            @endif
                        </div>           
                </div>               
    
                <div className="jornada">          
                    <div className=" jugador {{ $partido->marcador2 > $partido->marcador1 ? 'win' : '' }}">     
                        @if ($partido->equipoB)    
                        <img src="{{ url('imagenes').'/'.$partido->equipoB->imagen }}" className="logo" alt="sin imagen">               
                            <span className="equipo">{{$partido->equipoB->nombre}}</span>
                            <span className="goles">{{$partido->marcador2}}</span>                                              
                            @else        
                            <p>Por definir</p>  
                            @endif
                        </div> 
                </div>                  
                @endforeach                
               
               
    
    </div>
    
    
              {{-- Conectores de cuartos a semifinal --}}
              <div className="conectores">
                  <div className="conector">
                      <div className="conector_doble conector_doble_semifinal"></div>
                      <div className="conector_simple"></div> 
                  </div>       
          
                  <div className="conector">
                      <div className="conector_doble conector_doble_semifinal"></div>
                      <div className="conector_simple"></div> 
                  </div>
              </div>
              {{-- final --}}    
              <div className="jornada_contenedor">
                   @foreach ($eliminatoriasFinal as $partido)  
                  <div className="jornada">            
                          <div className="conector_doble"></div>
                          <div className="conector_simple"></div>            
                        <div className="jugador {{ $partido->marcador1 > $partido->marcador2 ? 'win' : '' }}"> 
                            @if ($partido->equipoA)
                              <img src="{{ url('imagenes').'/'.$partido->equipoA->imagen }}" className="logo" alt="sin imagen">               
                              <span className="equipo">{{$partido->equipoA->nombre}}</span>
                              <span className="goles">{{$partido->marcador1}}</span> 
                              @else                                           
                              <p>Por definir</p>     
                            @endif
                       
                      </div>        
                  </div>
          
                  <div className="jornada">            
                          <div className="conector_doble"></div>
                          <div className="conector_simple"></div>
                       <div className="jugador {{ $partido->marcador2 > $partido->marcador1 ? 'win' : '' }}"> 
                        @if ($partido->equipoB)
                              <img src="{{ url('imagenes').'/'.$partido->equipoB->imagen }}" className="logo" alt="sin imagen">               
                              <span className="equipo">{{$partido->equipoB->nombre}}</span>
                              <span className="goles">{{$partido->marcador2}}</span> 
                        @else                                            
                            <p>Por definir</p>    
                        @endif
                            </div>        
                        </div>
                        @endforeach 
                      
              </div>
          
              {{-- Conectores de semifinal a ganador --}}
              <div className="conectores">
                  <div className="conector">
                      <div className="conector_doble conector_doble_ganador"></div>
                      <div className="conector_simple"></div> 
                  </div>            
              </div>
                  
              {{-- Ganador --}}
              <div className="ganador_esquema">
                  <div className="ganador ">         
                    @if ($eliminatoriasFinal)
                    @if ($partido->equipoA && $partido->equipoB)
                        <div className="conector_doble"></div> 
                        <div className="conector_simple"></div>            
                        @if ($partido->marcador1 !== null && $partido->marcador2 !== null)
                            @if ($partido->marcador1 == $partido->marcador2)
                                <div className="jugador">
                                    <span className="equipo">Por definir</span> 
                                </div>
                            @elseif ($partido->marcador2 > $partido->marcador1)
                                <div className="jugador win"> 
                                    <img src="{{ url('imagenes').'/'.$partido->equipoB->imagen }}" className="logo" alt="sin imagen"> 
                                    <span className="equipo">{{ $partido->equipoB->nombre }}</span>
                                </div>
                            @else
                                <div className="jugador win">
                                    <img src="{{ url('imagenes').'/'.$partido->equipoA->imagen }}" className="logo" alt="sin imagen">
                                    <span className="equipo">{{ $partido->equipoA->nombre }}</span>
                                </div>
                            @endif
                        @else
                            <div className="jugador">
                                <span className="equipo">No definido</span> 
                            </div>
                        @endif
                    @else
                        <div className="jugador">
                            <span className="equipo">No definido</span> 
                        </div>
                
                
    
                  </div>   
                  
              <div>
    
          </div>
      
          </div>
          
      </div>
     
      </div>

  </div>  
</div> */}
    </div>
  </div>
    </section>
  );
};

export default Inicio;
