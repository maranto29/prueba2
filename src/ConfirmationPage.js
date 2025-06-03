import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import confetti from "canvas-confetti";
import './App.css';


export default function ConfirmationPage() {

var defaults = {
  spread: 360,
  ticks: 60,
  gravity: 0.1,
  decay: 0.94,
  startVelocity: 20,
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 150,
    scalar: 1.2,
    shapes: ['star'],
    duration: 5,
  });

  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 0.75,
    shapes: ['star'],
    duration: 3,
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-blue-100 flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-2xl shadow-xl p-14 max-w-md w-full text-center h-auto"
      >
        <h2 className="text-3xl font-bold text-purple-600 mb-4">
          ¡Gracias por confirmar tu asistencia!
        </h2>
        <p className="text-gray-700 mb-4 text-justify" >
         La Vía Láctea[nota 1]​ (del latín Via Lactea, 'camino de leche') es una galaxia espiral barrada donde se encuentra el sistema solar y a su vez la Tierra. Según las observaciones, posee una masa de 1012 masas solares y, por su forma, es una galaxia del tipo espiral barrada, por lo que posee un giro dextrógiro vista desde el norte celeste. Su diámetro medio se estima en unos 105 700 años luz. En mayo de 2018, un equipo de investigadores del Instituto Astrofísico de Canarias y el National Astronomical Observatories de Pekín (NAOC) publicaron[2]​ nuevas observaciones que amplían el diámetro hasta 200 000 años luz. Se calcula que contiene entre 200 000 y 400 000 millones de estrellas. La distancia desde el Sol hasta el centro de la galaxia es de alrededor de 25 766 años luz (7900 pc). La Vía Láctea forma parte de un conjunto de unas cuarenta galaxias llamado Grupo Local y es la segunda más grande y brillante tras la galaxia de Andrómeda, aunque puede ser la más masiva, como muestra un estudio reciente.[3]​Además en la Vía Láctea se estiman que hay entre 10 millones y mil millones de agujeros negros.[4]​
El nombre Vía Láctea proviene de la mitología griega, que significa en latín camino de leche. Esa es, en efecto, la apariencia de la tenue banda de luz que atraviesa el firmamento terrestre, y así lo afirma la mitología griega, explicando que se trata de leche derramada del pecho de la Diosa Hera (Juno para los romanos). Rubens representa la leyenda en su obra El nacimiento de la Vía Láctea. Sin embargo, ya en la Antigua Grecia, el astrónomo Demócrito (460-370 a. C.) sugirió que aquel haz blanco en el cielo era en realidad un conglomerado de muchísimas estrellas demasiado tenues individualmente como para ser reconocidas a simple vista. Su idea, no obstante, no tuvo respaldo hasta 1609, cuando el astrónomo italiano Galileo Galilei hace uso del telescopio y constata que Demócrito estaba en lo cierto, ya que a donde quiera que mirase, aquel lugar se encontraba lleno de estrellas.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/" // Vuelve a la página principal
            className="inline-block bg-purple-300 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-full mt-6 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Volver a la invitación
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}