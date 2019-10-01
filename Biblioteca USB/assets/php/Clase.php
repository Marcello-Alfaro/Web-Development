<?php

/* Inicio Clse Recurso */
abstract class Recurso
{
    public $codigo, $nombre, $estado, $seccion;

    public function __construct($codigo, $nombre, $estado, $seccion)
    {
        $this->codigo = $codigo;
        $this->nombre = $nombre;
        $this->estado = $estado;
        $this->seccion = $seccion;
    }
    public function __toString()
    {
        $cadena = '<section id="pricing-section" class="container">
        <div id="pricing">
          <h2>Mas Informacion</h2>
          <h3></h3>
          <div class="chart">
            <h6>Sección: <span style="color: #232323;">' . $this->seccion . '</span></h6>
            <h4>Codigo: <span style="color: #232323;">' . $this->codigo . '</span></h4>
            <h5>Nombre: <span style="color: #232323;">' . $this->nombre . '</span></h5>
            <h6>Estado: <span style="color: #232323;">' . $this->estado . '</span></h6>';
        return $cadena;
    }

    public abstract function diasPrestamo();
}

/* Fin de la clase Recurso */

/* Inicio clase Libro */
class Libro extends Recurso
{
    public $autor, $editorial, $anio, $ISBN, $categoria;
    public function __construct($codigo, $nombre, $estado, $seccion, $autor, $editorial, $anio, $ISBN, $categoria)
    {
        parent::__construct($codigo, $nombre, $estado, $seccion);
        $this->autor = $autor;
        $this->editorial = $editorial;
        $this->anio = $anio;
        $this->ISBN = $ISBN;
        $this->categoria = $categoria;
    }
    public function diasPrestamo()
    {
        if ($this->categoria == "General") {
            return 3;
        } else {
            return 1;
        }
    }

    public function __toString()
    {
        $cadena = parent::__toString();
        $cadena .= '<h6>Autor: <span style="color: #232323;">' . $this->autor . '</span></h6>
                    <h6>Editorial: <span style="color: #232323;">' . $this->editorial . '</span></h6>
                    <h6>Año: <span style="color: #232323;">' . $this->anio . '</h6>
                    <h5>Prestar por: <span style="color: #232323;">' . $this->diasPrestamo() . ' dia(s)</span></h5>
                    <button type="submit" name="button">Reservar</button>
                    </div>
                </div>
            </section>';

        return $cadena;
    }
}

/* Fin clase Libro */

/* Inicio clase Revista */
class Revista extends Recurso
{
    public $numVolumen, $fecha, $periocidad, $ISSN;
    public function __construct($codigo, $nombre, $estado, $seccion, $numVolumen, $fecha, $periocidad, $ISSN)
    {
        parent::__construct($codigo, $nombre, $estado, $seccion);
        $this->numVolumen = $numVolumen;
        $this->fecha = $fecha;
        $this->periocidad = $periocidad;
        $this->ISSN = $ISSN;
    }
    public function diasPrestamo()
    {
        return 4;
    }

    public function __toString()
    {
        $cadena = parent::__toString();
        $cadena .= '<h6>N° de Volumen: <span style="color: #232323;">' . $this->numVolumen . '</span></h6>
                    <h6>Fecha: <span style="color: #232323;">' . $this->fecha . '</span></h6>
                    <h6>Periocidad: <span style="color: #232323;">' . $this->periocidad . '</h6>
                    <h5>Prestar por: <span style="color: #232323;">' . $this->diasPrestamo() . ' dia(s)</span></h5>
                    <button type="submit" name="button">Reservar</button>
                </div>
            </div>
        </section>';
        return $cadena;
    }
}

/* Fin clase Revista */

class Video extends Recurso
{
    public $formato, $duracion, $anioCreacion;
    public function __construct($codigo, $nombre, $estado, $seccion, $formato, $duracion, $anioCreacion)
    {
        parent::__construct($codigo, $nombre, $estado, $seccion);
        $this->formato = $formato;
        $this->duracion = $duracion;
        $this->anioCreacion = $anioCreacion;
    }

    public function diasPrestamo()
    {
        if ($this->anioCreacion >= 2012) {
            return 2;
        } else {
            return 5;
        }
    }

    public function __toString()
    {
        $cadena = parent::__toString();
        $cadena .= '<h6>Formato: <span style="color: #232323;">' . $this->formato . '</span></h6>
                    <h6>Duración: <span style="color: #232323;">' . $this->duracion . '</span></h6>
                    <h6>Año Creacion: <span style="color: #232323;">' . $this->anioCreacion . '</h6>
                    <h5>Prestar por: <span style="color: #232323;">' . $this->diasPrestamo() . ' dia(s)</span></h5>
                    <button type="submit" name="button">Reservar</button>
                </div>
            </div>
        </section>';
        return $cadena;
    }

    /* Fin clase Video */
}
