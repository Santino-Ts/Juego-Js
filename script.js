alert(`Bienvenido a "El Umbral de las Sombras" \n\nEste es un juego de decisiones y algun puzzle, las decisiones que tomes influiran en tu historia, para comenzar el juego presiona 'Aceptar'`);

function pedirNombre() {
    let nombre = prompt("Escribi el nombre de tu personaje aca:\n\n(te va a acompañar en toda la historia)");
  
    while (true) {
      if (nombre === null) {
        nombre = prompt("No has ingresado ningún nombre. Por favor, ingresa un nombre.");
      } else if (nombre.length < 3) {
        nombre = prompt("El nombre es demasiado corto, proba con otro mas largo");
      } else if (nombre.length > 10) {
        nombre = prompt("El nombre es demasiado largo, proba con otro mas corto");
      } else {
        return nombre;
      }
    }
  }
  const nombrePersonaje = pedirNombre();
  

  alert(`En un remoto y olvidado pueblo al pie de una imponente montaña al noroeste de Calgary, Canada, donde el aire estaba cargado de leyendas sobre seres extraños y oscuros que habitaban en las sombras de aquellos picos inexplorados. En ese pueblo vivia un/a intrepido/a y curioso/a joven llamado/a ${nombrePersonaje}. Desde temprana edad su espiritu inquieto lo/a llevo a desafiar las advertencias y buscar respuestas más allá de los límites impuestos por el temor colectivo. Movido/a por la sed de conocimiento y un anhelo de desentrañar los misterios de su pueblo, ${nombrePersonaje} decidió embarcarse en una aventura peligrosa.`);
  
  
  function seleccionarObjeto(objetoExpedicion) {
    objetoExpedicion = prompt(`Antes de emprender la expedición, ${nombrePersonaje} decidió que sería conveniente llevar consigo su celular y dentro de su mochila otro objeto.\n¿Que mas deberia llevar? (Selecciona un numero)\n\n1. Brujula\n2. Linterna\n3. Cantimplora llena de agua`);
    
    while (true) {
      if (objetoExpedicion === null) {
        objetoExpedicion = prompt("Por favor, selecciona un valor valido. \n\n¿Que mas deberia llevar? (Selecciona un numero)\n\n1. Brujula\n2. Linterna\n3. Cantimplora llena de agua");
      } else if (objetoExpedicion == 1) {
        alert(`${nombrePersonaje} decidio llevar consigo una brujula a su expedicion.`);
        return 1;
      } else if (objetoExpedicion == 2) {
        alert(`${nombrePersonaje} decidio llevar consigo una linterna a su expedicion.`);
        return 2;
      } else if (objetoExpedicion == 3){
        alert(`${nombrePersonaje} decidio llevar consigo una cantimplora llena de agua a su expedicion.`);
        return 3;
      } else {
        objetoExpedicion = prompt("Selecciona un valor valido.\n\n¿Que mas deberia llevar? (Selecciona un numero)\n\n1. Brujula\n2. Linterna\n3. Cantimplora llena de agua");
      }
    }
  }
  
  objetoExpedicion = seleccionarObjeto();
  
  alert(`Luego de horas de caminar, el sol comenzó a descender tras las imponentes montañas, tiñendo el horizonte con tonos dorados y naranjas. ${nombrePersonaje} continuaba su intrépida travesía mientras las sombras se alargaban a su alrededor. ${nombrePersonaje} se adentró en la oscuridad de la noche, siguiendo un antiguo sendero que serpenteadaba por el bosque y se internaba cada vez más en las faldas de la imponente montaña. La fría brisa nocturna hacía temblar las hojas de los árboles, creando una melodía susurrante que acompañaba los pasos decididos de ${nombrePersonaje}.`);
  alert(`Después de horas de caminar, ${nombrePersonaje} decidió que era momento de descansar y reponer fuerzas para continuar su travesía. Encontró un pequeño claro rodeado de árboles altos y robustos. Allí, bajo la tenue luz de la luna, ${nombrePersonaje} improvisó una carpa utilizando hojas y ramas, creando un refugio temporal que le protegería por la noche.`);
  alert(`El cansancio se apoderó de ${nombrePersonaje} y rapidamente se sumergió en un sueño profundo. Sin embargo, el destino tenía otros planes para él/ella. En medio de la noche, unos ruidos extraños rompieron el silencio nocturno. ${nombrePersonaje} despertó sobresaltado/a, su corazón latiendo con fuerza mientras observaba sombras moviéndose a su alrededor. Eran los temidos seres de la montaña, una tribu siniestra que vivia en las profundidades de las cuevas.`);
  alert(`${nombrePersonaje} fue capturado/a y llevado/a a la cueva principal, donde quedó prisionero/a de aquellos seres siniestros. Al llegar se dio cuenta de que se trataba de una tribu canibal y ${nombrePersonaje} no estaba solo/a. Consciente de la gravedad de su situación, ${nombrePersonaje} decidió intentar usar su celular para pedir ayuda desde el interior de la cueva. Con la esperanza de encontrar señal, sacó su teléfono y comenzó a buscar una red disponible. Sin embargo, para su frustración, descubrió que no había señal en aquel inhóspito lugar subterráneo. Ademas mediante su celular se dio cuenta de que ya habian pasado 3 dias desde que salio de su pueblo.`);
  alert(`Junto a ${nombrePersonaje} se encontraban otros dos prisioneros. Observó a su alrededor, evaluando su situación. La cueva en la que se encontraban era oscura y húmeda, con el eco de sus propios pasos resonando en las paredes de roca. Las miradas hostiles de los demás prisioneros lo encontraron, y decidió acercarse a ellos en busca de información.`);
  alert(`Se acercó al primero de los prisioneros, un hombre de aspecto cansado con cabello desaliñado. ${nombrePersonaje} se paró frente a él y extendió la mano en señal de saludo. "Hola, soy ${nombrePersonaje}. ¿Cuál es tu nombre?", preguntó con cautela. El hombre levantó la mirada y se mantuvo en silencio durante un momento antes de responder. "Soy Ethan. Lamentablemente, mi historia no es muy diferente a la tuya. Fui capturado hace unos días por esta tribu. Pero he leido rumores, en notas, sobre posibles salidas de esta cueva. ¿Estás interesado/a en escapar?" \n${nombrePersonaje} asintió con determinación. "Por supuesto, escapar es nuestra prioridad. ¿Has explorado esta cueva? ¿Sabes de alguna salida?"`);
  alert(`Ethan señaló un pasillo oscuro hacia el este. "Por ese lado, hay una salida más corta, pero también es más peligrosa. Hay trampas y guardias adicionales. Sin embargo, si eres rápido/a y sigiloso/a, podrías llegar a la libertad antes de que se den cuenta."`);
  alert(`${nombrePersonaje} agradeció la información y luego se acercó al segundo prisionero, una mujer de apariencia fuerte y decidida. Ella lo/a miró con atención cuando se acercó.\n"Me llamo Ava. Al igual que tú y Ethan, fui capturada por esta tribu. Pero a diferencia de el, yo he explorado un poco más esta cueva", dijo con voz firme. ${nombrePersonaje} asintió. "¿Hay alguna otra salida aparte de la que mencionó Ethan?`);
  alert(`Ava señaló un estrecho pasadizo en dirección opuesta, hacia el oeste. "Por ahí, hay un camino más largo pero más seguro. No hay tantas trampas y los guardias son menos frecuentes. Si eliges ese camino, es posible que tardes más en salir."`);
  alert(`Después de sopesar las opciones, ${nombrePersonaje} agradecio a Ava y Ethan, agarro su mochila del suelo y se preparo mentalmente para el desafio que le esperaba`);
  
  let notaSuelo = true;
  let tomarAgua = true;
  let gritosEscalera = true;
  
  const cuevaInicial = ()=> {
    let camino = prompt(`¿Por que camino deberia ir? (Selecciona un numero)\n\n1. Camino de Ava (Mas largo, mas seguro)\n2. Camino de Ethan (Mas corto, menos seguro)`);

  let caminoValido = true;
  
  while (caminoValido == true){
      if (camino === null){
        camino = prompt("Seleccione un valor valido.\n¿Por que camino deberia ir? (Selecciona un numero)\n\n1. Camino de Ava (Mas largo, mas seguro)\n2. Camino de Ethan (Mas corto, menos seguro)");
    } else if (camino == 1){
      caminoValido = false;
      caminoLargo();
      break
    } else if (camino == 2){
      caminoValido = false
      caminoCorto();
      break
    } else {
        camino = prompt("Por favor, seleccione un valor valido.\n¿Por que camino deberia ir? (Selecciona un numero)\n\n1. Camino de Ava (Mas largo, mas seguro)\n2. Camino de Ethan (Mas corto, menos seguro)");
    }
  }
}
cuevaInicial();

//-------------------------------------------CAMINO LARGO---------------------------------------------------------//

function caminoLargo() {
  alert(`${nombrePersonaje} eligio el camino mas largo pero mas seguro. ${nombrePersonaje} avanzó valientemente por este, estuvo minutos caminando, mientras el eco de sus pasos resonaba en el silencio de la cueva. La oscuridad envolvía su figura solitaria mientras se esforzaba por mantener la determinación en su corazón.`);
    if (notaSuelo == true){
      alert(`De repente, ${nombrePersonaje} notó algo extraño en el suelo del pasillo. Se inclinó y recogió una pequeña nota arrugada, debajo de unas hojas secas. La desplegó con cuidado y leyó el mensaje escrito a mano en ella. Decía: "Si has llegado tan lejos, mereces una oportunidad. Avanza con precaución, más adelante, encontrarás una puerta custodiada por un código de acceso. El código consta de cuatro símbolos: un círculo, una flecha, un triángulo invertido y un aguila. El orden correcto te dará paso a la siguiente etapa de tu liberación. Buena suerte". En su intento por guardarse la nota esta se hizo polvo luego de tanto tiempo de estar ahi.`);
      notaSuelo = false;
    } else {
      alert(`${nombrePersonaje} pasó nuevamente por el lugar donde encontró la nota. De repente, el codigo le habia vuelto a la cabeza, lo habia recordado, comenzó a repetir en voz alta el código mientras avanzaba. "Círculo, flecha, triángulo invertido, aguila", decía ${nombrePersonaje} una y otra vez, grabando las palabras en su mente para no olvidarselas a medida que cada vez mas se acercaba al sitio.`);
    }
if (tomarAgua == true || tomarAgua == false)
    if (objetoExpedicion == 3 && tomarAgua == true){
      alert(`Sin embargo, a medida que avanzaba, comenzó a sentir una creciente sensación de sed que le recordaba la importancia de mantenerse hidratado en aquel entorno inhóspito. ${nombrePersonaje} abrió su mochila en busca de la cantimplora de agua que había traído consigo. Sabía que tenía una fuente confiable de agua para saciar su sed en cualquier otro momento que necesitara.`);
      tomarAgua = false;
      caminoLargoConAgua();

  } else if (objetoExpedicion == 3 && tomarAgua == false){
      salaPuerta();
  } else {
      alert(`Sin embargo, a medida que avanzaba, comenzó a sentir una creciente sensación de sed que le recordaba la importancia de mantenerse hidratado en aquel entorno inhóspito. ${nombrePersonaje} se lamentaba profundamente de no haber incluido una cantimplora de agua en su mochila, sintiendo un agudo arrepentimiento por su descuido.`);
      caminoLargoSinAgua();
  }
}

function caminoLargoConAgua(){
    alert(` De repente, luego de caminar un rato, ${nombrePersonaje} se encontró ante una bifurcación con dos opciones tentadoras y peligrosas. A su izquierda, un pasadizo conducía a la cueva donde los miembros de la tribu caníbal dormían profundamente. Desde allí, podía ver a lo lejos la imponente puerta de la que la nota hablaba, parcialmente iluminada por las tenues antorchas que se alzaban frente a ella. La posibilidad de pasar desapercibido y llegar directamente a la puerta era una opción arriesgada pero tentadora. Por otro lado, a su derecha se extendía un pasillo que parecía llevar a un almacén donde la tribu guardaba su comida. Era un camino secundario, menos transitado y potencialmente menos vigilado. Aunque implicaba una desviación, ${nombrePersonaje} intuía que podría encontrar alguna herramienta o información útil en el almacén para facilitar su travesía hacia la puerta.`);
    
    let camino2Valido = true;

    let camino2 = prompt(`¿Por que parte de la cueva deberia ir? (Selecciona un numero)\n\n1. Cueva donde duerme la tribu (Se debe pasar sigilosamente sin despertar a nadie)\n\n2. Almacen de comida (Podria ser un camino secundario a la puerta)`);
    
    while (camino2Valido == true){
      if (camino2 === null){
        camino2 = prompt("Seleccione un valor valido.\n¿Por que parte de la cueva deberia ir? (Selecciona un numero)\n\n1. Cueva donde duerme la tribu (Se debe pasar sigilosamente sin despertar a nadie)\n\n2. Almacen de comida (Podria ser un camino secundario a la puerta)");
    } else if (camino2 == 1){
      camino2Valido = false;
      cuevaTribu();
      break
    } else if (camino2 == 2){
      camino2Valido = false;
      almacenComida();
      break
    } else {
        camino2 = prompt("Por favor, seleccione un valor valido.\n¿Por que parte de la cueva deberia ir? (Selecciona un numero)\n\n1. Cueva donde duerme la tribu (Se debe pasar sigilosamente sin despertar a nadie)\n\n2. Almacen de comida (Podria ser un camino secundario a la puerta)");
    }
  }
}

function almacenComida(){
  alert(`Con determinación y curiosidad guiando sus pasos, ${nombrePersonaje} decidió adentrarse en el almacen de comida en lugar de arriesgarse a perturbar el sueño de la tribu en la cueva. Al ingresar, sus ojos se encontraron con la figura de un miembro de la tribu caníbal sentado frente a un antiguo horno de piedra. La presencia del caníbal representaba un desafío para ${nombrePersonaje}. Sabía que debía actuar con sigilo y evitar cualquier ruido que pudiera alertar al hombre frente al horno. Con pasos suaves y controlados, se movió a través de las estanterías, aprovechando cada sombra para ocultarse y mantenerse fuera de la vista del caníbal.`);
  alert(`Mientras avanzaba por el almacén, ${nombrePersonaje} noto que por un lado, una puerta que parecía conducir a la cueva donde los caníbales guardaban sus escudos y espadas. Era una oportunidad tentadora para asegurarse una defensa en caso de un enfrentamiento inevitable. Por otro lado, un túnel se extendía en una dirección que parecía llevar hacia la puerta que buscaba. Aunque no tenía la certeza absoluta de que fuera el camino correcto.`);
  
  let decision2Valida = true;
  let decision2 = prompt(`¿Que deberia hacer?(Selecciona un numero)\n\n1. Almacen de armas (Armarse en caso de un combate)\n2. Tunel que parece llevar a la puerta (No esta completamente seguro)`);
  
  while (decision2Valida == true){
    if (decision2 === null){
      decision2 = prompt(`Seleccione un valor valido.\n¿Que deberia hacer?(Selecciona un numero)\n\n1. Almacen de armas (Armarse en caso de un combate)\n2. Tunel que parece llevar a la puerta (No esta completamente seguro)`);
    }else if (decision2 == 1){
      decision2Valida = false;
      alert(`Tras reflexionar sobre las opciones, ${nombrePersonaje} consideró que asegurarse un recurso de defensa sería prudente y podría resultarle útil en su escape. Una vez dentro, ${nombrePersonaje} examinó con cuidado las espadas y los escudos que yacían en el suelo. Escogió los más adecuados para sus necesidades y los aseguró a su cinturón. Sentía que ahora estaba mejor preparado/a para enfrentar cualquier posible combate que se presentara en su camino hacia la libertad.`);
      almacenArmas();
      break
    }else if (decision2 == 2){
      decision2Valida = false;
      alert(`Tras sopesar las opciones, ${nombrePersonaje} decidió tomar el túnel que parecía dirigirse hacia la puerta. Aunque el acceso a las armas podría haber sido ventajoso, consideró que el elemento sorpresa y la posibilidad de evadir conflictos directos podrían ser más valiosos en su intento de escape.`);
      tunelPuerta();
      break
    }else {
      decision2 = prompt(`Por favor, seleccione un valor valido.\n¿Que deberia hacer?(Selecciona un numero)\n\n1. Almacen de armas (Armarse en caso de un combate)\n2. Tunel que parece llevar a la puerta (No esta completamente seguro)`);
    }
  }
}


function almacenArmas(){
  if (gritosEscalera == true){
    alert(`Sin embargo, justo cuando estaba a punto de abandonar la cueva, un grito desgarrador y los pedidos de ayuda resonaron desde unas estrechas y escondidas escaleras en una de las paredes del almacen que descendian hacia lo desconocido. El sonido de un débil eco llegaba desde abajo, como un murmullo de súplicas y lamentos. Un dilema se presentó ante ${nombrePersonaje}. Por un lado, estaba su propia supervivencia y su anhelo de escapar. Por otro lado, estaba la voz desconocida en apuros, clamando por su ayuda.`);
    gritosEscalera = false;
  } else {

  }
  
  let decision3Valida = true;
  decision3 = prompt(`¿Que deberia hacer? (Selecciona un numero)\n\n1. Volver e ir por el tunel que puede llevar a la puerta\n2. Bajar las escaleras`);
  
  while (decision3Valida == true){
    if (decision3 === null){
     decision3 = prompt(`Por favor, seleccione un valor valido.\n¿Que deberia hacer?(Selecciona un numero)\n\n1. Volver e ir por el tunel que puede llevar a la puerta\n2. Bajar las escaleras`);
   }else if (decision3 == 1){
     decision3Valida = false;
     alert(`Con cierta angustia en su corazón, ${nombrePersonaje} decidió que su prioridad era seguir adelante en su búsqueda de la puerta. Con paso decidido, ${nombrePersonaje} dio media vuelta y comenzó a retroceder por el camino que lo había llevado al almacén de armas, esta vez caminando hacia el tunel por el que se deberia encontrar con la puerta. El arma que empuñaba le infundía confianza y una sensación de poder. Se sentía más valiente y decidido/a que antes.`);
     tunelPuerta();
     break
   }else if (decision3 == 2){
     decision3Valida = false;
     alert(`Con el corazón dividido entre el miedo y el deber, ${nombrePersonaje} tomó una decisión valiente. Decidió que no podía ignorar los gritos de auxilio y con su espada comenzo a bajar las escaleras para ir en ayuda de esa persona desconocida.`);
     cuevaBaja()
     break
   }else{
     decision3 = prompt(`Seleccione un valor valido.\n¿Que deberia hacer?(Selecciona un numero)\n\n1. Volver e ir por el tunel que puede llevar a la puerta\n2. Bajar las escaleras`);
   }
 }
}

function cuevaBaja(){
  alert(`Al llegar al fondo de las escaleras, se encontró con un panorama desolador. La luz era escasa, pero podía distinguir la figura de un prisionero atado y en una situación de peligro inminente. Los caníbales lo rodeaban, alimentando sus instintos más oscuros.`);
  
  let decision4Valida = true;
  let decision4 = prompt(`La mente de ${nombrePersonaje} se debatía entre dos opciones: intervenir valientemente y enfrentarse a los caníbales con todas sus fuerzas para ayudar al prisionero, o dar marcha atrás y volver por las escaleras para continuar su camino hacia la puerta. La espada temblaba ligeramente en su mano mientras consideraba las implicaciones de su decisión. ¿Que deberia hacer? (Selecciona un numero)\n\n1. Enfrentarse a los canibales.\n2. Subir las escaleras`);
  
  while (decision4Valida == true){
    if (decision4 === null){
     decision4 = prompt(`Por favor, seleccione un valor valido.\n¿Que deberia hacer?(Selecciona un numero)\n\n1. Enfrentarse a los canibales\n2. Subir las escaleras`);
   }else if (decision4 == 1){
     decision4Valida = false;
     alert(`Con su espada en mano y el escudo en posición defensiva, se adentró en la refriega con la esperanza de cambiar el destino del pobre prisionero. Los caníbales, ágiles y feroces, se abalanzaron sobre ${nombrePersonaje} con una violencia desenfrenada. Sin embargo, a pesar de su coraje y su deseo de ayudar, ${nombrePersonaje} carecía de la habilidad y la destreza necesarias para enfrentarse a varios oponentes a la vez. Sus movimientos eran torpes y descoordinados, su inexperiencia con la espada se hacía evidente. Golpes y heridas empezaron a acumularse en el cuerpo de ${nombrePersonaje}, quien luchaba valientemente pero sin éxito contra sus agresores. Finalmente, abrumado/a y herido/a, ${nombrePersonaje} se vio obligado a rendirse ante la superioridad de los caníbales. Fue capturado/a y derrotado/a, su espada y escudo arrebatados de sus manos.`);
     alert(`Perdiste, intentalo de nuevo.`);
     break
   }else if (decision4 == 2){
     decision4Valida = false;
     alert(`Aunque ${nombrePersonaje} tenía la espada y el escudo en su poder, comprendió que su falta de habilidad y experiencia en el combate lo/a convertían en un oponente vulnerable frente a tantos adversarios. Retrocedió por las estrechas escaleras, dejando atrás al prisionero y a los caníbales en su enfrentamiento. Volviendo asi al almacen de armas.`);
     almacenArmas()
     break
   }else{
     decision4 = prompt(`Seleccione un valor valido.\n¿Que deberia hacer?(Selecciona un numero)\n\n1. Enfrentarse a los canibales\n2. Subir las escaleras`);
   }
 }
}

function tunelPuerta(){
  alert(`El camino por delante era oscuro y silencioso. ${nombrePersonaje} avanzaba con precaución, atento/a a cada sonido y movimiento a su alrededor. El tunel parecía interminable, pero no perdía la esperanza. Después de un tiempo, ${nombrePersonaje} divisó una tenue luz al final del túnel. Con pasos rápidos, ${nombrePersonaje} se acercó a la luz. Era la cueva de la puerta.`);
  salaPuerta();
}



function cuevaTribu(){
  alert(`${nombrePersonaje} evaluó cuidadosamente su situación y tomó una decisión audaz, cruzaria la cueva donde los miembros de la tribu caníbal dormían. Con movimientos precisos y sigilosos, se adentró en la oscuridad, confiando en su habilidad para pasar desapercibido/a. Cada paso de ${nombrePersonaje} era calculado y lento, evitando cualquier objeto que pudiera emitir un sonido que alertara a los durmientes. Con el corazón latiendo rápidamente, se esforzó por mantener la calma y la concentración mientras avanzaba entre las sombras. El débil resplandor de las antorchas iluminaba de manera intermitente la cueva, brindando a ${nombrePersonaje} vislumbres fugaces de los miembros de la tribu que yacían profundamente dormidos.`);
  alert(`Mientras ${nombrePersonaje} avanzaba sigilosamente, un repentino chirrido lo/a sobresaltó. Un pequeño roedor, asustado por la presencia de ${nombrePersonaje}, salió corriendo y chocó accidentalmente contra una espada que estaba apoyada descuidadamente en la pared. La espada fue desestabilizada por el impacto y comenzó a caer hacia el suelo.`);
  
  let decision = prompt(`¿Que deberia hacer ${nombrePersonaje}? (Selecciona un numero)\n\n1. Correr a agarrar la espada antes que caiga\n2. Correr hacia la puerta`);
  let decisionValida = true;
  
  while (decisionValida == true){
    if (decision === null){
      decision = prompt(`Seleccione un valor valido.\n¿Que deberia hacer ${nombrePersonaje}? (Selecciona un numero)\n\n1. Correr a agarrar la espada antes que caiga\n2. Correr hacia la puerta`);
  } else if (decision == 1){
    decisionValida = false;
    alert(`Con reflejos agudos, ${nombrePersonaje} corrio sigilosamente hacia la espada, atrapandola en el aire antes de que tocara el suelo. Su corazón latía acelerado mientras sostenía la espada con firmeza, evitando que emitiera cualquier sonido que pudiera alertar a la tribu.`);
    salaPuerta();
    break
  } else if (decision == 2){
    decisionValida = false;
    alert(`En lugar de intentar atrapar la espada para evitar el ruido, la desesperación se apoderó de él/ella y decidió correr hacia la puerta que había divisado anteriormente, ignorando las posibles consecuencias. El sonido de la espada contra el suelo resono en toda la cueva despertando a todos los miembros de la tribu. En cuestión de segundos, la cueva se llenó de aullidos de furia y la figura amenazadora de los caníbales se alzó frente a ${nombrePersonaje}. Fue capturado/a y rápidamente rodeado/a por varios miembros de la tribu. Con una mirada de triunfo en sus ojos, los caníbales arrastraron a ${nombrePersonaje} hacia una jaula improvisada, donde quedó atrapado/a y rodeado/a de barras de hierro.`);
    alert("Perdiste, intentalo de nuevo.");
    break
  } else {
      decision = prompt(`Por favor, seleccione un valor valido.\n¿Que deberia hacer ${nombrePersonaje}? (Selecciona un numero)\n\n1. Correr a agarrar la espada antes que caiga\n2. Correr hacia la puerta`);
  }
}
}

function salaPuerta(){
    alert(`Finalmente, ${nombrePersonaje} se encontraba frente a la puerta, listo/a para ingresar el código de cuatro símbolos que había sido proporcionado en la nota. Miró atentamente la pared cubierta de moho, donde los símbolos estaban grabados en la antigua superficie de piedra. Sin embargo, la tarea no sería tan sencilla, ya que los símbolos estaban escritos de manera irregular y a cada uno le correspondia un numero.`);
    
    let codigoPuertaValido = true;
    
    let codigoPuerta = prompt(`Concentrándose en su memoria, ${nombrePersonaje} comenzó a ingresar los símbolos en el antiguo panel rotatorio  de la puerta, teniendo cuidado de colocarlos en el orden correcto. (Escriba el codigo)\n1. Arbol
    \n2. Cuadrado
    \n3. Circulo
    \n4. Ciervo
    \n5. Flecha
    \n6. Lanza
    \n7. Triangulo invertido
    \n8. Aguila
    \n9. Oso`);
  
    while (codigoPuertaValido == true){
      if (codigoPuerta === null){
        codigoPuerta = prompt(`Seleccione un valor valido.(Escriba el codigo)
        \n1. Arbol
        \n2. Cuadrado
        \n3. Circulo
        \n4. Ciervo
        \n5. Flecha
        \n6. Lanza
        \n7. Triangulo invertido
        \n8. Aguila
        \n9. Oso`);
    } else if (codigoPuerta == 3578){
      codigoPuertaValido = false;
      finalEscape1();
      break
    } else {
        alert(`Un sentimiento de frustración se apoderó de ${nombrePersonaje}. Había sido tan cauteloso/a y había superado tantos desafíos hasta ahora, pero en ese momento crucial había olvidado el código. Con cada intento de ingresar una combinación de símbolos, la puerta permanecía cerrada, sin ceder ante su esfuerzo.`);
        let volverAtras = prompt(`Se le ocurrio el volver atras, quiza el pasar por el lugar donde estaba la nota le haria volver a recordar el codigo.\n¿Deberia seguir intentando codigos o volver atras? (Seleccione un numero)\n1. Seguir intentando codigos\n2. Volver al lugar de la nota`);
    
    let valorValido = true;
    while(valorValido == true)    
        if (volverAtras === null){
           volverAtras = prompt(`Seleccione un valor valido.\n¿Deberia seguir intentando codigos o volver atras? (Seleccione un numero)\n1. Seguir intentando codigos\n2. Volver al lugar de la nota`);
        } else if(volverAtras == 1){
          valorValido = false;
          salaPuerta();
          break
        } else if (volverAtras == 2){
          alert(`Luego de pensarlo ${nombrePersonaje} decidio que lo mejor seria volver a la sala de la nota a ver si asi recordaba el codigo.`);
          valorValido = false;
          caminoLargo();
          break
        } else {
          volverAtras = prompt(`Seleccione un valor valido.\n¿Deberia seguir intentando codigos o volver atras? (Seleccione un numero)\n1. Seguir intentando codigos\n2. Volver al lugar de la nota`);
        }
        break
    }
  } 
}


function caminoLargoSinAgua(){
  alert(`${nombrePersonaje}, exhausto/a y sediento/a después de pasar varios días en la cueva sin agua, se dejó caer en una gran piedra en un rincón de la cueva. Su cuerpo se sentía débil y desfallecido por la falta de hidratación, y sus labios estaban secos y agrietados. En medio del silencio opresivo de la cueva, ${nombrePersonaje} escuchó un suave sonido proveniente de una grieta en una de las paredes. Era el distintivo sonido del agua cayendo, una música para sus oídos sedientos. Sus sentidos se agudizaron y su corazón se llenó de esperanza. Sin perder tiempo, se levantó con determinación y se dirigió hacia la fuente de aquel sonido prometedor. Al mirar a través de la abertura, quedó maravillado/a por la vista que se extendía ante sus ojos. Una magnífica cascada se desplomaba desde lo alto de una pared de la cueva, creando una cortina de agua que parecía caer eternamente. Sin embargo, antes de poder alcanzar la cascada, ${nombrePersonaje} se percató de que debía atravesar un estrecho laberinto con altas paredes de piedra que se interponían en su camino.`);
  if(objetoExpedicion == 1){
    caminoLSAguaConBrujula();
  } else {
    caminoLSAguaSinBrujula();
  }
}

function caminoLSAguaConBrujula(){
    alert(`Pero ${nombrePersonaje} no se dejó desanimar por los desafíos que se le presentaban y sacó su brújula de la mochila para ayudarse a orientarse. Sosteniendo la brújula en su mano, ${nombrePersonaje} observó cuidadosamente la aguja magnética, la cual señalaba el norte con precisión. La cascada se encontraba en dirección sureste, por lo que ${nombrePersonaje} estableció mentalmente ese punto cardinal en su mente y decidió utilizar la brújula para mantenerse en el rumbo correcto a medida que avanzaba por el laberinto. Con cada giro y cada cambio de dirección, ${nombrePersonaje} consultaba la brújula para asegurarse de que se dirigía hacia el sureste. A medida que avanzaba, la certeza de que estaba en el camino correcto le otorgaba un sentido renovado de confianza y determinación. La brújula se convirtió en su guía silenciosa, asegurándole que no se desviara del objetivo de alcanzar la cascada y saciar su sed en su caída de agua refrescante.`);
    alert(`Finalmente, después de una larga travesía por el laberinto, ${nombrePersonaje} emergió de entre las altas paredes de piedra y quedó frente a la majestuosidad de la cascada. Apoyo su brujula delicadamente a un lado de la cascada, se acercó a ella y refresco su cuerpo agotado. ${nombrePersonaje}, saciado/a por el agua de la cascada, dirigió su mirada hacia un rincón de la cueva y notó una apertura estrecha que parecía conducir a un lugar desconocido. La curiosidad comenzó a arder en su interior mientras consideraba si debía aventurarse por esa nueva ruta o regresar por el laberinto.`);

    let decision5 = prompt(`¿Que deberia hacer? (Selecciona un numero)\n\n1. Ir por el tunel desconocido\n2. Volver por el laberinto`);

    let decision5Valida = true;
    while(decision5Valida == true){  
        if (decision5 === null){
          decision5 = prompt(`Seleccione un valor valido.\n¿Que deberia hacer? (Selecciona un numero)\n\n1. Ir por el tunel desconocido\n2. Volver por el laberinto`);
        } else if(decision5 == 1){
          alert(`Tras un instante de reflexión, ${nombrePersonaje} decidió escuchar el llamado de la aventura y optar por la entrada desconocida. A medida que avanzaba los sonidos cambiaban, los olores se transformaban y la incertidumbre se entrelazaba con la emoción. ${nombrePersonaje} sabía que había dejado atrás la familiaridad del laberinto, y ahora se encontraba en un terreno desconocido. ${nombrePersonaje} se dio cuenta que habia olvidado su brujula junto a la cascada al dejarla para tomar agua, avanzaba agradecido por no haberse adentrado nuevamente al laberinto sin ella.`);
          decision5Valida = false;
          tunelPuerta();
          break
        } else if (decision5 == 2){
          alert(`${nombrePersonaje}, sintiendo una ráfaga de duda y cautela, decidió dar marcha atrás y regresar por el laberinto que ya conocía. Sin embargo, a medida que ${nombrePersonaje} se adentraba nuevamente en el laberinto, una punzada de preocupación lo/a invadió. Un escalofrío recorrió su espalda cuando se dio cuenta de que había olvidado su brújula en la roca donde se había sentado para descansar y beber agua de la cascada. La brújula, que le había proporcionado una sensación de orientación y control, yacía olvidada y solitaria junto a la cascada, fuera de su alcance. La consciencia de su error se apoderó de él/ella, mezclada con la creciente sensación de claustrofobia mientras se internaba más y más en el laberinto. ${nombrePersonaje} comprendió que su descuido lo/a había dejado en una situación peligrosa y sin una guía confiable para encontrar la salida. El laberinto se convirtió en su cárcel.`);
          alert(`Perdiste, intentalo de nuevo.`);
          decision5Valida = false;
          break
        } else {
          decision5 = prompt(`Por favor, seleccione un valor valido.\n¿Que deberia hacer? (Selecciona un numero)\n\n1. Ir por el tunel desconocido\n2. Volver por el laberinto`);
        }
    }
  }

function caminoLSAguaSinBrujula(){
  alert(`${nombrePersonaje}, animado/a por un espíritu aventurero, decidió adentrarse en el enigmático laberinto. Emocionado/a por la perspectiva de explorar sus intrincados pasillos, se dejó llevar por la curiosidad y se aventuró valientemente en su interior. Sin embargo, a medida que avanzaba más y más profundo en el laberinto, ${nombrePersonaje} comenzó a darse cuenta de su error. El laberinto se mostraba cada vez más complejo y laberíntico, con sus pasillos sinuosos y giros desconcertantes. La falta de una brújula para orientarse se hizo evidente, y ${nombrePersonaje} lamentó no haber traído consigo una herramienta tan vital. Los pasillos se entrelazaban de manera confusa, y pronto ${nombrePersonaje} se encontró perdido/a en un mar de paredes de piedra que parecían burlarse de él en silencio. La falta de referencias y la imposibilidad de determinar su ubicación exacta le causaron un profundo desasosiego. El laberinto se convirtió en su prisión perpetua.`);
  alert(`Perdiste, intentalo de nuevo.`);
}

function finalEscape1 (){
  alert(`La gran puerta se abrió lentamente, ${nombrePersonaje} vio que había luz al otro lado. Era la luz del sol. Se sintió aliviado/a y feliz. Había logrado abrir la puerta y salir de la cueva. Pero no podía relajarse todavía. Sabía que los caníbales podían seguirlo/a y alcanzarlo/a. Vio que había un camino que bajaba por la montaña y lo siguió. Era un camino estrecho y sinuoso, pero mejor que nada. Mientras bajaba, sacó su teléfono de su mochila. Afortunadamente, todavía tenía algo de batería. Marco el numero de emergencias y espero a ser rescatado/a.`);
  alert(`¡Ganaste, felicidades!\n\n(Podes empezar de nuevo para probar otros finales)`);
}


//-------------------------------------------CAMINO CORTO---------------------------------------------------------//


function caminoCorto() {
  alert(`${nombrePersonaje} eligio el camino mas corto pero menos seguro, el camino corto parecía más peligroso que nunca, pero también prometía una posible ventaja estratégica en su travesía.`);
  alert(`${nombrePersonaje} se encontró ante dos entradas, evaluando cuidadosamente sus opciones. Por un lado, una cueva completamente a oscuras, cuya abertura al final apenas dejaba pasar un poco de luz natural, daba al exterior. Por otro lado, la cueva donde los caníbales practicaban sus peleas con cuchillos. ${nombrePersonaje} sabía que su elección era crucial para avanzar sin ser detectado.`);
  
  let decision6 = prompt(`¿Que deberia hacer? (Selecciona un numero)\n\n1. Ir por la cueva oscura\n2. Pasar desapercibido entre los canibales`);

  let decision6Valida = true;
  while(decision6Valida == true){  
      if (decision6 === null){
        decision6 = prompt(`Seleccione un valor valido.\n¿Que deberia hacer? (Selecciona un numero)\n\n1. Ir por la cueva oscura\n2. Pasar desapercibido entre los canibales`);
      } else if(decision6 == 1 && objetoExpedicion == 2){
        decision6Valida = false;
        cuevaTrampas();
        break
      } else if (decision6 == 2){
        decision6Valida = false;
        cuevaCanibalesCombatiendo();
        break
      } else if (decision6 == 1 && objetoExpedicion == 1 || objetoExpedicion == 3){
        alert(`${nombrePersonaje} se adentró con determinación en la oscura cueva, confiando en su instinto para guiarlo en medio de la penumbra. Con cada paso, ${nombrePersonaje} avanzaba con precaución, palpando el suelo con sus pies y deslizando sus manos por las paredes al no poder ver nada mas que la luz al final de la cueva. Sin embargo, lo que desconocía era que cada rincón estaba lleno de trampas mortales. Mientras ${nombrePersonaje} avanzaba, confiado en su habilidad para sortear cualquier obstáculo, activó una de las trampas sin siquiera darse cuenta. Un sonido metálico resonó en la cueva y se escuchó el chasquido de un mecanismo que se había puesto en marcha. ${nombrePersonaje} rapidamente se encontró atrapado/a en una red que se cerraba a su alrededor. Sus piernas se enredaron en las cuerdas, dejándolo inmovilizado/a y vulnerable. Los caníbales rodearon a ${nombrePersonaje}, observándolo/a con miradas feroces.`);
        alert(`Perdiste, intentalo de nuevo.`);
        break
      }else{
        decision6 = prompt(`Por favor, seleccione un valor valido.\n¿Que deberia hacer? (Selecciona un numero)\n\n1. Ir por la cueva oscura\n2. Pasar desapercibido entre los canibales`);
      }
  }

}

function cuevaTrampas(){
  alert(`${nombrePersonaje} decidió adentrarse en la cueva completamente a oscuras, pero antes de dar un solo paso, sacó su linterna de su mochila y la encendió. La tenue luz iluminó el camino frente a él/ella, revelando una serie de trampas cuidadosamente colocadas en el suelo y en las paredes de la cueva. Estaba claro que avanzar sin activar ninguna trampa sería un desafío. Con su linterna en la mano, ${nombrePersonaje} comenzó a avanzar con extrema precaución. La luz de la linterna le permitía detectar las trampas ocultas y evitar activarlas. Cada paso era lento y calculado, desplazándose cuidadosamente para mantenerse fuera de peligro. ${nombrePersonaje} finalmente llegó al final de la cueva. Se acerco a la abertura en la pared y esta efectivamente daba al exterior a un lateral de la montaña. Miró hacia abajo y se dio cuenta de que estaba a una gran altura. Primero se le paso por la mente el ir deslizandose por el lateral de la montaña hasta llegar abajo pero podria ser peligroso ya que era una pendiente bastante empinada.`);

  let decision7 = prompt(`¿Que deberia hacer? (Selecciona un numero)\n\n1. Intentar bajar la pendiente \n2. Volver a la cueva y buscar otro camino mas seguro`);

  let decision7Valida = true;
  while(decision7Valida == true){  
      if (decision7 === null){
        decision7 = prompt(`Seleccione un valor valido.\n¿Que deberia hacer? (Selecciona un numero)\n\n1. Intentar bajar la pendiente \n2. Volver a la cueva y buscar otro camino mas seguro`);
      } else if(decision7 == 1){
        alert(`${nombrePersonaje} no tenía tiempo que perder. Sabía que los caníbales podían encontrarlo/a en cualquier momento y que no tendría ninguna oportunidad contra ellos. Tenía que bajar de la montaña y buscar un lugar seguro. Decidió arriesgarse y bajar deslizándose por la pendiente de la montaña. Se sento al borde del hueco y comenzo a bajar lentamente por la pendiente. Pero la pendiente era demasiado empinada y resbaladiza y comenzo a caer rapidamente sin nada que lo frene. ${nombrePersonaje} se deslizó a gran velocidad por la montaña, sin control ni dirección. Chocó contra varias piedras y arbustos que le rasgaron la ropa y la piel. Estaba a merced de la gravedad y del destino.`);
        alert(`Perdiste, intentalo de nuevo.`);
        decision7Valida = false;
        break
      } else if (decision7 == 2){
        alert(`Pero pronto se dio cuenta de que era una locura. La pendiente era demasiado empinada y resbaladiza. No había ningún lugar donde apoyarse o frenarse. Era un suicidio.`);
        alert(`Decidió volver a la cueva donde estaban las trampas. Tal vez encontraría otro camino o algo que le sirviera para bajar. Se dio la vuelta y se alejó del hueco. Mientras caminaba por la oscura cueva buscando otro camino, se le ocurrió una idea. Recordó que había visto una trampa la cual utilizaba una larga cuerda. ${nombrePersonaje} agarro una afilada roca del suelo y con cuidado de no activar nada, logro cortar la cuerda,${nombrePersonaje} sonrio satisfecho/a y recogio la cuerda.`);
        alert(`Volvió al hueco con la cuerda en sus manos. La ató a una roca cercana al borde y se aseguró de que estuviera bien firme. Luego, se agarró a la cuerda y comenzó a bajar por la montaña. Finalmente, llegó al final de la cuerda sano/a y salvo/a, ya no era prisionero/a de los caníbales. Había logrado escapar de una muerte segura. Lo primero que hizo fue sacar su teléfono móvil de su mochila. Afortunadamente, todavía tenía algo de bateria, ${nombrePersonaje} marco el numero de emergencias aliviado/a de que pronto lo/a vendrian a buscar.`);
        alert(`¡Ganaste, felicidades!\n\n(Podes empezar de nuevo para probar otros finales)`);
        decision7Valida = false;
        break
      } else {
        decision7 = prompt(`Por favor, seleccione un valor valido.\n¿Que deberia hacer? (Selecciona un numero)\n\n1. Intentar bajar la pendiente \n2. Volver a la cueva y buscar otro camino mas seguro`);
      }
  }

}

function cuevaCanibalesCombatiendo (){
  alert(`${nombrePersonaje} se decidio por la segunda opcion, pasar por la cueva donde los canibales peleaban. Pero antes de entrar al lugar, se disfrazó de uno de ellos. Vio que había ropa tirada en el suelo y la recogió. Se quitó su ropa y se puso la de los caníbales. Era una ropa sucia y rasgada, pero le servía para camuflarse. También se ensució la cara con tierra y sangre que había en el suelo. Se pintó unas rayas en las mejillas y en la frente para parecerse más a ellos. Esperó a que no hubiera nadie cerca y entró a la cueva donde estaban los caníbales. Caminó con paso firme y mirada fija, tratando de pasar desapercibido. Vio que había muchos caníbales allí, algunos luchando entre sí con cuchillos, otros observando o descansando.`);
  alert(`${nombrePersonaje} se mezcló entre ellos y cruzo la salida hacia la siguiente cueva. Luego de caminar por un largo pasillo llego a una amplia parte de la cueva.`);
  salaLlaveTrampa()
}    

function salaLlaveTrampa(){
  
  alert(`En el centro de esta vio que había un pequeño pedestal. Sobre este había una pesada llave oxidada. ${nombrePersonaje} se acercó al pedestal y examinó la llave. Era una llave antigua y grande, con una forma extraña. Pero también se dio cuenta de que este tenía un mecanismo trampa, la llave hacia presion a una placa, probablemente si alguien sacaba la llave una trampa se activaria, penso ${nombrePersonaje}.`);
  alert(`De repente, ${nombrePersonaje} escucho unos gritos provenientes del pasillo por donde habia venido, al parecer los canibales descubrieron que alguien les robo su ropa y faltaba uno de sus prisioneros. No tenía tiempo que perder. Tenía que llevarse la llave y salir de ahí cuanto antes.`);


  let valor2Valido = true;
  while(valor2Valido == true){  
      if (objetoExpedicion == 3){
        alert(`Se le ocurrió una idea. ${nombrePersonaje} recordo que tenia la cantimplora llena de agua en su mochila. Rapidamente, la sacó y la abrió. Se agachó y recogió arena que habia en el suelo de la cueva con sus manos y la metió en la cantimplora hasta que estuvo llena. ${nombrePersonaje} actuó rápido y cambió la llave por la cantimplora en un movimiento fluido. La cantimplora quedó sobre el pedesatal y la llave en su mano. Se alejó y buscó la salida. La vio al otro lado de la sala, custodiada por una antigua puerta de metal. Corrio hacia la puerta, asustado/a por los constantes aullidos en el pasillo, introdujo la llave en ella y giró. La puerta se abrió. ${nombrePersonaje} salió de la cueva y se encontró con un paisaje sorprendente. Pero no podía relajarse todavía. Sabía que los caníbales podían seguirlo/a y alcanzarlo/a. Tenía que bajar de la montaña.`);
        alert(`Mientras bajaba, sacó su teléfono móvil de su bolsillo. Afortunadamente, todavía tenía algo de batería. Marcó el número de emergencias y espero a ser rescatado/a.`);
        alert(`¡Ganaste, felicidades!\n\n(Podes empezar de nuevo para probar otros finales)`);
        valor2Valido = false;
        break
      } else {
        alert(`${nombrePersonaje} pensó en cómo hacer para llevarse la llave sin activar la trampa. Vio a su alrededor, en su mochila, pero no tenia nada. Estaba atrapado/a. Los canibales ya estaban viniendo por el/ella. Finalmente entraron a la sala y vieron a ${nombrePersonaje} sentado en el suelo sin poder hacer nada. Rodearon a ${nombrePersonaje} y lo/a capturaron. Lo ataron con cuerdas y lo arrastraron fuera de la sala.`);
        alert(`Perdiste, intentalo de nuevo.`);
        break
      }
  }
}

//-----------------------------------------------------------------------------------------------------------------//
