import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gdl',
  templateUrl: './gdl.component.html',
  styleUrls: ['./gdl.component.css']
})
export class GdlComponent implements OnInit {

  items = [
    { title: "Visitar la catedral de Guadalajara: ", content: "originalmente llamada Catedral basílica de la Asunción de María Santísima, es uno de los edificios más emblemáticos de la ciudad por su imponente estilo neogótico. Algunos datos de interés que gira en torno a este edificio icono de los tapatíos es la historia de sus túneles secretos, sus criptas desde el siglo XVI, la leyenda de Santa Inocencia, la leyenda del rio subterráneo, la historia de sus torres. La rodean cuatro plazas en forma de cruz: Plaza Guadalajara, Plaza Liberación, Plaza de Armas y la Rotonda de los Jaliscienses ilustres."},
    { title: "Instituto Cultural Cabañas: ", content: "este edificio ha sido declarado patrimonio de la Humanidad, posee un estilo neoclásico, alberga varios murales de José Clemente Orozco. Durante el año se realizan varias exposiciones temporales de artistas mexicanos e internacionales."},
    { title: "Teatro Degollado: ", content: "actualmente se siguen presentando obras y espectáculos, es un edificio que fue construido a finales del siglo XIX y hoy en día es sede de la Orquesta filarmónica de Jalisco."},
    { title: "Palacio de gobierno: ", content: "es un edificio de estilo neoclásico, que actualmente sirve de sede para el gobierno estatal de Guadalajara, y también funciona como mueso ara dar a conocer la historia del emblemático lugar. Una de ellas fue la presencia de Miguel Hidalgo en él, quien emitió desde ahí algunas medidas para la abolición de la esclavitud. Es por ello que fue pintado el mural “El libertador” por José Clemente Orozco, el cual se encuentra dentro del mismo edificio."},
    { title: "Plaza de los mariachis: ", content: "se ubica en el centro histórico de la Ciudad de Guadalajara sobre la calzada independencia y aun costado del Templo de San Juan de Dios, se trata de un patio al aire libre rodeado de restaurantes para degustar platillo típicos de la región, tequila y gozar de la música mariachi que es algo emblemático de nuestro Estado. Cuenta con más de cien años de tradición."},
    { title: "Basílica de Zapopan: ", content: "es una construcción que data del siglo XVII y está situada en la ciudad de Zapopan dentro de la zona metropolitana de Guadalajara, ciudad que destaca por su cultura religiosa, alberga piezas arquitectónicas y de arte destacados del lugar."},
    { title: "Templo expiatorio del Santísimo Sacramento: ", content: "es de estilo neogótico, se empezó a construir en 1897. Es considerada una obra de arte por sus enormes vitrales y piezas que alberga el recinto, sin embargo algo que llama la atención de los visitantes es el reloj del templo el cual al sonar una pieza musical salen las figuras de los doce apóstoles a ciertas horas del día."},
    { title: "Rotonda de los jaliscienses ilustres: ", content: "se trata de un monumento emblemático de la ciudad de Guadalajara, se encuentra ubicada a un costado de la catedral de Guadalajara. Es un homenaje a las personas ilustradas nacidas en Jalisco, entre los personajes destacados que ahí se encuentran podemos mencionar a: Enrique Díaz de León, Irene Robledo, José Clemente Orozco, Marcelino García Barragán, Enrique González Martínez, Manuel López Cotilla, Pedro Moreno, Mariano Otero, Francisco Silva Romero, Agustín Yáñez y Jorge Matute Remus por hacer mención de algunos de estos celebres personajes que aportaron a la política, ciencia, artes y contribuyeron a mejorar nuestro Estado y nuestro País."},
    { title: "MUSA Museo de las artes Universidad de Guadalajara: ", content: "en 1994 en aquel entonces las autoridades de la Universidad de Guadalajara decidieron aportar a los jaliscienses un espacio cultural y se habilito como museo el edificio de rectoría general mejor conocido como Paraninfo de la Universidad de Guadalajara. Cabe destacar que el edificio cuenta con dos murales de José Clemente Orozco consideradas patrimonio de la humanidad."},
    { title: "Ex convento del Carmen: ", content: "antigua iglesia del siglo XVII, ahora convertido en museo donde se exhiben obras de arte, como exposiciones y obras de teatro. Fue uno de los últimos conventos en construirse y capta la atención por su estilo arquitectónico y el uso cultural que se comenzó a dar a partir de 1960. El recinto cuenta con salda de cine, cafetería y tienda de libros para el público en general."},
    { title: "Gastronomía de Guadalajara: ", content: "ofrece platillos típicos como la torta ahogada, la birria de borrego, el pozole rojo al estilo Jalisco, las famosas carnes en su jugo, los hiles rellenos y la capirotada. En cuanto a postres se pueden degustar el camote tatemado, las jericallas, nieve o buñuelos. Entre las bebidas típicas de la región se encuentran el tejuino, el tepache y el tequila."},
  ];

  constructor() { }

  ngOnInit() {
  }

}
